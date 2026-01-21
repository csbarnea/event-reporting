import Constants from "expo-constants";
import type { Event, CreateIncidentRequest } from "./types";
import * as ImagePicker from "expo-image-picker";

const API_BASE_URL =
    Constants.expoConfig?.extra?.API_BASE_URL || "http://192.168.1.139:5211";

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

    // Append all standard fields
    formData.append("lat", String(data.lat));
    formData.append("lon", String(data.lon));
    formData.append("alert_code", data.alert_code);
    formData.append("description", data.description);
    formData.append("tag", data.tag);
    if (data.reporter_name)
        formData.append("reporter_name", data.reporter_name);
    if (data.reporter_email)
        formData.append("reporter_email", data.reporter_email);
    if (data.reporter_phone)
        formData.append("reporter_phone", data.reporter_phone);

    // Append photo if exists
    if (data.photoFile) {
        formData.append("photo", {
            uri: data.photoFile.uri,
            name: data.photoFile.fileName || "photo.jpg",
            type: data.photoFile.type || "image/jpeg",
        } as any);
    }

    const response = await fetch(`${API_BASE_URL}/api/incidents`, {
        method: "POST",
        body: formData,
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });

    if (!response.ok) {
        throw new Error("Failed to create incident");
    }

    return response.json();
}
