import React, { useState } from "react";
import {
    Modal,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { useEventStore } from "../lib/store";

const SEVERITY_LEVELS = [
    { value: "CRITICAL", label: "Critic", color: "#ef4444" },
    { value: "WARNING", label: "Avertizare", color: "#f97316" },
    { value: "INFO", label: "Informativ", color: "#eab308" },
];

const INCIDENT_TYPES = [
    { value: "FLOOD", label: "Inundație" },
    { value: "FIRE", label: "Incendiu" },
    { value: "PROTEST", label: "Protest" },
    { value: "ACCIDENT", label: "Accident" },
    { value: "OTHER", label: "Alt tip de incident" },
];

const TIME_PRESETS = [
    { value: "ALL", label: "Toate evenimentele" },
    { value: "LAST_HOUR", label: "Ultima oră" },
    { value: "LAST_24H", label: "Ultimele 24 de ore" },
    { value: "LAST_7D", label: "Ultimele 7 zile" },
];

interface FiltersModalProps {
    visible: boolean;
    onClose: () => void;
}

export function FiltersModal({ visible, onClose }: FiltersModalProps) {
    const { filters, setFilter, clearFilters } = useEventStore();
    const [timeRange, setTimeRange] = useState("ALL");

    const handleTimeRangeChange = (value: string) => {
        setTimeRange(value);
        if (value === "ALL") {
            setFilter("dateFrom", undefined);
            setFilter("dateTo", undefined);
            return;
        }
        const now = new Date();
        let from = new Date(now);
        if (value === "LAST_HOUR") from.setHours(now.getHours() - 1);
        if (value === "LAST_24H") from.setDate(now.getDate() - 1);
        if (value === "LAST_7D") from.setDate(now.getDate() - 7);
        setFilter("dateFrom", from.getTime());
        setFilter("dateTo", undefined);
    };

    return (
        <Modal visible={visible} animationType="slide" transparent={false}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Filtre</Text>
                    <TouchableOpacity
                        onPress={() => {
                            clearFilters();
                            setTimeRange("ALL");
                        }}
                    >
                        <Text style={styles.resetText}>Resetează</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView style={styles.scroll}>
                    <Text style={styles.label}>Interval raportare</Text>
                    <View style={styles.pickerContainer}>
                        {TIME_PRESETS.map((preset) => (
                            <TouchableOpacity
                                key={preset.value}
                                style={[
                                    styles.pickerItem,
                                    timeRange === preset.value &&
                                        styles.pickerItemActive,
                                ]}
                                onPress={() =>
                                    handleTimeRangeChange(preset.value)
                                }
                            >
                                <Text>{preset.label}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <Text style={styles.label}>Nivel alertă</Text>
                    <View style={styles.pickerContainer}>
                        {SEVERITY_LEVELS.map((level) => (
                            <TouchableOpacity
                                key={level.value}
                                style={[
                                    styles.pickerItem,
                                    filters.alertCode === level.value && {
                                        backgroundColor: level.color,
                                    },
                                ]}
                                onPress={() =>
                                    setFilter("alertCode", level.value)
                                }
                            >
                                <Text>{level.label}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <Text style={styles.label}>Tip incident</Text>
                    <View style={styles.tagsContainer}>
                        {INCIDENT_TYPES.map((type) => {
                            const currentTags = filters.tags || [];
                            const isActive = currentTags.includes(type.value);
                            return (
                                <TouchableOpacity
                                    key={type.value}
                                    style={[
                                        styles.tag,
                                        isActive
                                            ? styles.tagActive
                                            : styles.tagInactive,
                                    ]}
                                    onPress={() => {
                                        if (isActive) {
                                            setFilter(
                                                "tags",
                                                currentTags.filter(
                                                    (t: string) =>
                                                        t !== type.value
                                                )
                                            );
                                        } else {
                                            setFilter("tags", [
                                                ...currentTags,
                                                type.value,
                                            ]);
                                        }
                                    }}
                                >
                                    <Text>{type.label}</Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </ScrollView>

                <TouchableOpacity style={styles.okButton} onPress={onClose}>
                    <Text style={styles.okButtonText}>OK</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 48,
        paddingHorizontal: 16,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 12,
    },
    headerTitle: { fontWeight: "bold", fontSize: 18 },
    resetText: { color: "#007bff", fontWeight: "500" },
    scroll: { flex: 1 },
    label: { marginBottom: 4, fontWeight: "500", marginTop: 12 },
    pickerContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom: 12,
    },
    pickerItem: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 4,
        marginRight: 8,
        marginBottom: 8,
    },
    pickerItemActive: { backgroundColor: "#ddd" },
    tagsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
        marginBottom: 12,
    },
    tag: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 4,
        borderWidth: 1,
    },
    tagActive: { backgroundColor: "#ef4444", borderColor: "#ef4444" },
    tagInactive: { backgroundColor: "#fff", borderColor: "#ccc" },
    okButton: {
        padding: 16,
        backgroundColor: "#ef4444",
        borderRadius: 6,
        marginVertical: 16,
        alignItems: "center",
    },
    okButtonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
