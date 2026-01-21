import React, { useEffect, useState } from "react";
import {
    Modal,
    ScrollView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator,
    Button,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useEventStore } from "../lib/store";
import { createIncident } from "../lib/api";
import * as ImagePicker from "expo-image-picker";

const SEVERITY_LEVELS = [
    { value: "CRITICAL", label: "Critic" },
    { value: "WARNING", label: "Avertizare" },
    { value: "INFO", label: "Informativ" },
];

const INCIDENT_TYPES = [
    { value: "FLOOD", label: "Inundație" },
    { value: "FIRE", label: "Incendiu" },
    { value: "PROTEST", label: "Protest" },
    { value: "ACCIDENT", label: "Accident" },
    { value: "OTHER", label: "Alt tip de incident" },
];

interface ReportEventDialogProps {
    visible: boolean;
    onClose: () => void;
    initialLocation?: { lat: number; lon: number };
}

export function ReportEventDialog({
    visible,
    onClose,
    initialLocation,
}: ReportEventDialogProps) {
    const { addEvent, loadEvents } = useEventStore();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [photoFile, setPhotoFile] =
        useState<ImagePicker.ImagePickerAsset | null>(null);

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 0.8,
        });

        if (!result.canceled) {
            setPhotoFile(result.assets[0]);
        }
    };

    const [formData, setFormData] = useState({
        alert_code: "",
        description: "",
        tag: "",
        lat: "",
        lon: "",
        reporter_name: "",
        reporter_email: "",
        reporter_phone: "",
    });

    // Set initial location when modal opens
    useEffect(() => {
        if (initialLocation && visible) {
            setFormData((prev) => ({
                ...prev,
                lat: initialLocation.lat.toFixed(6),
                lon: initialLocation.lon.toFixed(6),
            }));
        }
    }, [initialLocation, visible]);

    const handleSubmit = async () => {
        setIsSubmitting(true);
        try {
            const newIncident = await createIncident({
                lat: Number(formData.lat),
                lon: Number(formData.lon),
                alert_code: formData.alert_code,
                description: formData.description,
                tag: formData.tag,
                reporter_name: formData.reporter_name || undefined,
                reporter_email: formData.reporter_email || undefined,
                reporter_phone: formData.reporter_phone || undefined,
                photo_url: null,
            });

            addEvent(newIncident);
            await loadEvents();

            setFormData({
                alert_code: "",
                description: "",
                tag: "",
                lat: "",
                lon: "",
                reporter_name: "",
                reporter_email: "",
                reporter_phone: "",
            });

            onClose();
            alert("Eveniment raportat cu succes!");
        } catch (err) {
            console.error(err);
            alert("Eroare: nu s-a putut salva evenimentul.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Modal visible={visible} animationType="slide" transparent={false}>
            <ScrollView style={styles.container}>
                <Text style={styles.title}>Raportează un eveniment</Text>

                <Text style={styles.label}>Nivel alertă *</Text>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={formData.alert_code}
                        onValueChange={(value) =>
                            setFormData({ ...formData, alert_code: value })
                        }
                    >
                        <Picker.Item label="Selectează nivelul" value="" />
                        {SEVERITY_LEVELS.map((lvl) => (
                            <Picker.Item
                                key={lvl.value}
                                label={lvl.label}
                                value={lvl.value}
                            />
                        ))}
                    </Picker>
                </View>

                <Text style={styles.label}>Tip incident *</Text>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={formData.tag}
                        onValueChange={(value) =>
                            setFormData({ ...formData, tag: value })
                        }
                    >
                        <Picker.Item label="Selectează tipul" value="" />
                        {INCIDENT_TYPES.map((type) => (
                            <Picker.Item
                                key={type.value}
                                label={type.label}
                                value={type.value}
                            />
                        ))}
                    </Picker>
                </View>

                <Text style={styles.label}>Descriere *</Text>
                <TextInput
                    style={styles.textarea}
                    multiline
                    numberOfLines={4}
                    placeholder="Descrie evenimentul..."
                    value={formData.description}
                    onChangeText={(text) =>
                        setFormData({ ...formData, description: text })
                    }
                />

                <Text style={styles.label}>Poză</Text>
                <TouchableOpacity
                    style={{
                        borderWidth: 1,
                        borderColor: "#ccc",
                        borderRadius: 6,
                        paddingVertical: 10,
                        paddingHorizontal: 12,
                        backgroundColor: "#fff",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 4,
                    }}
                    onPress={pickImage}
                >
                    <Text style={{ color: "#000" }}>
                        {photoFile
                            ? photoFile.fileName || "Poză selectată"
                            : "Alege poză"}
                    </Text>
                </TouchableOpacity>

                <Text style={styles.label}>Latitudine *</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    value={formData.lat}
                    onChangeText={(text) =>
                        setFormData({ ...formData, lat: text })
                    }
                />

                <Text style={styles.label}>Longitudine *</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    value={formData.lon}
                    onChangeText={(text) =>
                        setFormData({ ...formData, lon: text })
                    }
                />

                <Text style={styles.label}>Nume (opțional)</Text>
                <TextInput
                    style={styles.input}
                    value={formData.reporter_name}
                    onChangeText={(text) =>
                        setFormData({ ...formData, reporter_name: text })
                    }
                />

                <Text style={styles.label}>Email (opțional)</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="email-address"
                    value={formData.reporter_email}
                    onChangeText={(text) =>
                        setFormData({ ...formData, reporter_email: text })
                    }
                />

                <Text style={styles.label}>Telefon (opțional)</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="phone-pad"
                    value={formData.reporter_phone}
                    onChangeText={(text) =>
                        setFormData({ ...formData, reporter_phone: text })
                    }
                />

                <View style={styles.buttons}>
                    <TouchableOpacity
                        style={[styles.button, styles.cancelButton]}
                        onPress={onClose}
                        disabled={isSubmitting}
                    >
                        <Text>Anulează</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.submitButton]}
                        onPress={handleSubmit}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <ActivityIndicator color="#fff" />
                        ) : (
                            <Text style={{ color: "#fff" }}>Trimite</Text>
                        )}
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: "#fff" },
    title: { fontSize: 18, fontWeight: "bold", marginBottom: 12 },
    label: { fontSize: 14, fontWeight: "600", marginTop: 12, marginBottom: 4 },
    input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 6, padding: 8 },
    textarea: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 6,
        padding: 8,
        textAlignVertical: "top",
    },
    pickerContainer: { borderWidth: 1, borderColor: "#ccc", borderRadius: 6 },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 16,
    },
    button: { flex: 1, padding: 12, marginBottom: 30, borderRadius: 6, alignItems: "center" },
    cancelButton: { backgroundColor: "#eee", marginRight: 8 },
    submitButton: { backgroundColor: "#3b82f6" },
});
