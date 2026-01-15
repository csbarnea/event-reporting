import { View, Text, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";
import { useEventStore } from "../lib/store";

export function Navbar({ onOpenFilters }: { onOpenFilters: () => void }) {
    const { loadEvents, isLoading } = useEventStore();

    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <IconButton
                    icon="refresh"
                    size={24}
                    onPress={loadEvents}
                    loading={isLoading}
                />
                <Text style={styles.label}>Actualizează</Text>
            </View>

            <Text style={styles.title}>Evenimente</Text>

            <View style={styles.item}>
                <IconButton
                    icon="filter-variant"
                    size={24}
                    onPress={onOpenFilters}
                />
                <Text style={styles.label}>Filtre</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 72,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        borderTopWidth: 1,
        borderTopColor: "#ddd",
        backgroundColor: "#fff",
    },
    item: {
        alignItems: "center",
        justifyContent: "center",
        width: 80,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    label: {
        fontSize: 12,
        color: "#555",
        marginTop: -6,
    },
});

