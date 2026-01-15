import Constants from "expo-constants";
import type { Event, CreateIncidentRequest } from "./types";

const API_BASE_URL =
    Constants.expoConfig?.extra?.API_BASE_URL || "http://192.168.1.139:5000";

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
    data: CreateIncidentRequest
): Promise<Event> {
    const response = await fetch(`${API_BASE_URL}/api/incidents`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        throw new Error("Failed to create incident");
    }
    return response.json();
}
