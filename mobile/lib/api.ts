import Constants from "expo-constants";
import type { Event, CreateIncidentRequest } from "./types";
import * as ImagePicker from "expo-image-picker";
import { Platform } from "react-native";

const API_BASE_URL =
    Constants.expoConfig?.extra?.API_BASE_URL || "SERVER_IP";

export async function fetchIncidents(): Promise<Event[]> {
    const response = await fetch(`${API_BASE_URL}/api/incidents`);
    if (!response.ok) throw new Error("Failed to fetch incidents");
    return response.json();
}

export async function fetchIncident(id: number): Promise<Event> {
    const response = await fetch(`${API_BASE_URL}/api/incidents/${id}`);
    if (!response.ok) throw new Error("Failed to fetch incident");
    return response.json();
}

export async function createIncident(
    data: CreateIncidentRequest & { photoFile?: ImagePicker.ImagePickerAsset },
): Promise<Event> {
    const formData = new FormData();

    formData.append("lat", String(data.lat));
    formData.append("lon", String(data.lon));
    formData.append("alert_code", data.alert_code);
    formData.append("description", data.description);
    if (data.tag) formData.append("tag", data.tag);
    if (data.reporter_name)
        formData.append("reporter_name", data.reporter_name);
    if (data.reporter_email)
        formData.append("reporter_email", data.reporter_email);
    if (data.reporter_phone)
        formData.append("reporter_phone", data.reporter_phone);

    if (data.photoFile) {
        const uri = data.photoFile.uri;

        // Extract filename from URI if fileName is missing
        const fileName =
            data.photoFile.fileName ?? uri.split("/").pop() ?? "photo.jpg";

        // Infer type or default to image/jpeg
        const type = data.photoFile.mimeType ?? "image/jpeg";

        formData.append("photo", {
            uri: Platform.OS === "android" ? uri : uri.replace("file://", ""),
            name: fileName,
            type: type,
        } as any);
    }

    const response = await fetch(`${API_BASE_URL}/api/incidents`, {
        method: "POST",
        body: formData,
    });

    if (!response.ok) {
        const text = await response.text().catch(() => "");
        throw new Error(
            `Failed to create incident (${response.status}): ${text}`,
        );
    }

    return response.json();
}
