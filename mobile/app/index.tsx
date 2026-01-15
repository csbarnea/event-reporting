import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { useEventStore } from "../lib/store";

export default function Home() {
    const { loadEvents } = useEventStore();

    useEffect(() => {
        const interval = setInterval(() => {
            loadEvents();
        }, 3000);

        return () => clearInterval(interval);
    }, [loadEvents]);

    let MapViewComponent: React.ReactNode = (
        <View style={styles.webMapPlaceholder}>
            <Text>Harta nu e disponibilă pe web</Text>
        </View>
    );

    if (Platform.OS !== "web") {
        const { MapComponent } = require("../components/map-view");
        MapViewComponent = <MapComponent />;
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>{MapViewComponent}</View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        backgroundColor: "#fff",
    },
    headerLeft: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    logo: {
        width: 40,
        height: 40,
        borderRadius: 8,
        backgroundColor: "#ef4444",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 8,
    },
    logoText: {
        fontSize: 20,
        color: "#fff",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 12,
        color: "#666",
    },
    webMapPlaceholder: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f3f3f3",
    },
});
