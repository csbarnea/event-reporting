import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Pressable, Platform } from "react-native";
import * as Location from "expo-location";
import { useEventStore } from "../lib/store";
import { EventDetailsDialog } from "./event-details-dialog";
import { ReportEventDialog } from "./report-event-dialog";
import type { Event } from "../lib/types";
import { FiltersModal } from "./filter-modal";

export function MapComponent() {
    const { filteredEvents } = useEventStore();
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
    const [pendingMarker, setPendingMarker] = useState<{
        latitude: number;
        longitude: number;
    } | null>(null);
    const [reportOpen, setReportOpen] = useState(false);
    const [userLocation, setUserLocation] = useState<{
        latitude: number;
        longitude: number;
    } | null>(null);
    const mapRef = useRef<any>(null);
    const [filtersOpen, setFiltersOpen] = useState(false);

    const MapView = require("react-native-maps").default;
    const { Marker, Callout, PROVIDER_GOOGLE } = require("react-native-maps");

    const romaniaRegion = {
        latitude: 45.9432,
        longitude: 24.9668,
        latitudeDelta: 5,
        longitudeDelta: 5,
    };

    // Get user location
    useEffect(() => {
        (async () => {
            if (Platform.OS !== "web") {
                const { status } =
                    await Location.requestForegroundPermissionsAsync();
                if (status !== "granted") return;
                const loc = await Location.getCurrentPositionAsync({});
                setUserLocation({
                    latitude: loc.coords.latitude,
                    longitude: loc.coords.longitude,
                });
            }
        })();
    }, []);

    const handleMapPress = (e: any) => {
        const { latitude, longitude } = e.nativeEvent.coordinate;
        setPendingMarker({ latitude, longitude });
        setReportOpen(true);
    };

    const focusOnUser = () => {
        if (userLocation && mapRef.current) {
            mapRef.current.animateToRegion(
                {
                    ...userLocation,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                },
                500
            );
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <MapView
                ref={mapRef}
                style={{ flex: 1 }}
                provider={PROVIDER_GOOGLE}
                initialRegion={romaniaRegion}
                onPress={handleMapPress}
                showsUserLocation={true}
                showsMyLocationButton={true}
            >
                {filteredEvents.map((event: Event) => (
                    <Marker
                        key={event.id}
                        coordinate={{
                            latitude: event.lat,
                            longitude: event.lon,
                        }}
                        pinColor={getAlertColor(event.alert_code)}
                        onPress={() => setSelectedEvent(event)}
                    >
                        <Callout>
                            <EventInfoContent
                                event={event}
                                onViewDetails={() => setSelectedEvent(event)}
                            />
                        </Callout>
                    </Marker>
                ))}

                {pendingMarker && (
                    <Marker coordinate={pendingMarker} pinColor="#3b82f6" />
                )}
            </MapView>

            <View style={styles.counter}>
                <Text style={styles.counterText} onPress={() => setFiltersOpen(true)}>
                    {filteredEvents.length} evenimente active
                </Text>
            </View>

            <FiltersModal
                visible={filtersOpen}
                onClose={() => setFiltersOpen(false)}
            />

            <Pressable style={styles.userButton} onPress={focusOnUser}>
                <Text style={{ color: "#000", fontSize: 20 }}>📍</Text>
            </Pressable>

            <EventDetailsDialog
                event={selectedEvent}
                open={!!selectedEvent}
                onOpenChange={(open: boolean) =>
                    !open && setSelectedEvent(null)
                }
            />

            <ReportEventDialog
                visible={reportOpen}
                onClose={() => {
                    setReportOpen(false);
                    setPendingMarker(null);
                }}
                initialLocation={
                    pendingMarker
                        ? {
                              lat: pendingMarker.latitude,
                              lon: pendingMarker.longitude,
                          }
                        : undefined
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    counter: {
        position: "absolute",
        top: 35,
        right: 12,
        backgroundColor: "#fff",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
    },
    counterText: { fontWeight: "bold", color: "#333" },
    userButton: {
        position: "absolute",
        bottom: 24,
        left: 16,
        backgroundColor: "#fff",
        width: 48,
        height: 48,
        borderRadius: 24,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    filterButton: {
        position: "absolute",
        bottom: 24,
        right: 16, // <-- move to right
        backgroundColor: "#fff",
        width: 48,
        height: 48,
        borderRadius: 24,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
});

function getAlertColor(alertCode: string): string {
    const colors: Record<string, string> = {
        RED: "#ef4444",
        ORANGE: "#f97316",
        YELLOW: "#eab308",
        GREEN: "#22c55e",
    };
    return colors[alertCode] || "#6b7280";
}

interface EventInfoProps {
    event: Event;
    onViewDetails: () => void;
}

function EventInfoContent({ event, onViewDetails }: EventInfoProps) {
    return (
        <View style={{ maxWidth: 220 }}>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 4,
                }}
            >
                <View
                    style={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: getAlertColor(event.alert_code),
                        marginRight: 4,
                    }}
                />
                <Text style={{ fontWeight: "bold" }}>{event.alert_code}</Text>
            </View>
            <Text>{event.description}</Text>
            <Text style={{ fontSize: 10, color: "#666" }}>
                {new Date(event.reported_at).toLocaleDateString("ro-RO", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })}
            </Text>
            <Text
                style={{
                    fontSize: 10,
                    backgroundColor: "#eee",
                    paddingHorizontal: 4,
                    borderRadius: 4,
                    marginTop: 2,
                }}
            >
                {event.tag}
            </Text>
            <Pressable
                onPress={onViewDetails}
                style={{
                    backgroundColor: "#3b82f6",
                    padding: 4,
                    borderRadius: 4,
                    marginTop: 4,
                }}
            >
                <Text style={{ color: "#fff", textAlign: "center" }}>
                    Vezi detalii
                </Text>
            </Pressable>
        </View>
    );
}
