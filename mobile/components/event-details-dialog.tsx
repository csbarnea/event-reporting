import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Badge } from "./ui/badge";
import { Calendar, MapPin, User, Phone, Mail } from "lucide-react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Dialog, Portal } from "react-native-paper";
import type { Event } from "../lib/types";

interface EventDetailsDialogProps {
    event: Event | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function EventDetailsDialog({
    event,
    open,
    onOpenChange,
}: EventDetailsDialogProps) {
    if (!event) return null;

    const getAlertLabel = (code: string) =>
        ({
            RED: "Cod Roșu",
            ORANGE: "Cod Portocaliu",
            YELLOW: "Cod Galben",
            GREEN: "Cod Verde",
        })[code] || code;

    const getAlertColor = (code: string) =>
        ({
            RED: "#ef4444",
            ORANGE: "#f97316",
            YELLOW: "#eab308",
            GREEN: "#22c55e",
        })[code] || "#6b7280";

    return (
        <Portal>
            <Dialog
                visible={open}
                onDismiss={() => onOpenChange(false)}
                style={{ maxHeight: "90%" }} // allows dialog to grow but not overflow
            >
                <Dialog.Content>
                    <ScrollView contentContainerStyle={{ paddingBottom: 16 }}>
                        {/* Alert */}
                        <View style={styles.row}>
                            <View
                                style={[
                                    styles.alertDot,
                                    {
                                        backgroundColor: getAlertColor(
                                            event.alert_code,
                                        ),
                                    },
                                ]}
                            />
                            <Text style={styles.alertLabel}>
                                {getAlertLabel(event.alert_code)}
                            </Text>
                        </View>

                        {/* Description */}
                        <Text style={styles.sectionTitle}>Descriere</Text>
                        <Text>{event.description}</Text>

                        {/* Tag */}
                        <Text style={styles.sectionTitle}>Categorie</Text>
                        <Badge text={event.tag} />

                        {/* Date */}
                        <View style={styles.row}>
                            <Calendar size={16} color="#666" />
                            <Text>
                                {new Date(event.reported_at).toLocaleString(
                                    "ro-RO",
                                    {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    },
                                )}
                            </Text>
                        </View>

                        {/* Location */}
                        <View style={styles.row}>
                            <MapPin size={16} color="#666" />
                            <Text>
                                Coordonate: {event.lat.toFixed(4)},{" "}
                                {event.lon.toFixed(4)}
                            </Text>
                        </View>

                        {/* Reporter info */}
                        {(event.reporter_name ||
                            event.reporter_email ||
                            event.reporter_phone) && (
                            <View
                                style={{
                                    borderTopWidth: 1,
                                    borderTopColor: "#ccc",
                                    paddingTop: 8,
                                }}
                            >
                                <Text style={styles.sectionTitle}>
                                    Informații raportare
                                </Text>
                                {event.reporter_name && (
                                    <View style={styles.row}>
                                        <User size={16} color="#666" />
                                        <Text>{event.reporter_name}</Text>
                                    </View>
                                )}
                                {event.reporter_email && (
                                    <View style={styles.row}>
                                        <Mail size={16} color="#666" />
                                        <Text>{event.reporter_email}</Text>
                                    </View>
                                )}
                                {event.reporter_phone && (
                                    <View style={styles.row}>
                                        <Phone size={16} color="#666" />
                                        <Text>{event.reporter_phone}</Text>
                                    </View>
                                )}
                            </View>
                        )}

                        {/* Photo */}
                        {event.photo_url && (
                            <View style={styles.photoWrapper}>
                                <Image
                                    source={{ uri: event.photo_url }}
                                    style={styles.photo}
                                />
                            </View>
                        )}

                        {/* Small Map */}
                        <View style={styles.mapWrapper}>
                            <MapView
                                style={styles.map}
                                provider={PROVIDER_GOOGLE}
                                initialRegion={{
                                    latitude: event.lat,
                                    longitude: event.lon,
                                    latitudeDelta: 0.01,
                                    longitudeDelta: 0.01,
                                }}
                            >
                                <Marker
                                    coordinate={{
                                        latitude: event.lat,
                                        longitude: event.lon,
                                    }}
                                />
                            </MapView>
                        </View>
                    </ScrollView>
                </Dialog.Content>
            </Dialog>
        </Portal>
    );
}

const styles = StyleSheet.create({
    row: { flexDirection: "row", alignItems: "center", marginVertical: 4 },
    alertDot: { width: 12, height: 12, borderRadius: 6, marginRight: 6 },
    alertLabel: { fontWeight: "bold", fontSize: 16 },
    sectionTitle: { fontSize: 12, fontWeight: "600", marginTop: 8 },

    photoWrapper: {
        width: "100%",
        height: 200,
        borderRadius: 8,
        overflow: "hidden",
        marginTop: 8,
    },
    photo: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },

    mapWrapper: {
        width: "100%",
        height: 200,
        borderRadius: 8,
        overflow: "hidden",
        marginTop: 8,
    },
    map: {
        flex: 1,
    },
});
