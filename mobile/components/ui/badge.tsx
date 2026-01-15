import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface BadgeProps {
    text: string;
    variant?: "default" | "secondary" | "destructive" | "outline";
}

export function Badge({ text, variant = "default" }: BadgeProps) {
    const backgroundColors = {
        default: "#3b82f6",
        secondary: "#e5e7eb",
        destructive: "#ef4444",
        outline: "#f3f4f6",
    };

    const textColors = {
        default: "white",
        secondary: "#374151",
        destructive: "white",
        outline: "#374151",
    };

    return (
        <View
            style={[
                styles.container,
                { backgroundColor: backgroundColors[variant] },
                variant === "outline" ? styles.outline : null,
            ]}
        >
            <Text style={[styles.text, { color: textColors[variant] }]}>
                {text}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 6,
        alignSelf: "flex-start",
    },
    text: {
        fontSize: 12,
        fontWeight: "500",
    },
    outline: {
        borderWidth: 1,
        borderColor: "#d1d5db",
    },
});
