import { create } from "zustand";
import type { Event, Filters } from "./types";
import { fetchIncidents } from "./api";

interface EventStore {
    events: Event[];
    filters: Filters;
    filteredEvents: Event[];
    pendingLocation: { lat: number; lon: number } | null;
    isLoading: boolean;
    error: string | null;
    setFilter: (key: keyof Filters, value: any) => void;
    clearFilters: () => void;
    addEvent: (event: Event) => void;
    loadEvents: () => Promise<void>;
    setPendingLocation: (location: { lat: number; lon: number } | null) => void;
}

// Convert DB datetime string to UTC timestamp
function getEventTimeUtc(eventTimeStr: string): number {
    const iso = eventTimeStr.replace(" ", "T") + "Z";
    return new Date(iso).getTime();
}

export const useEventStore = create<EventStore>((set, get) => ({
    events: [],
    filters: {},
    filteredEvents: [],
    pendingLocation: null,
    isLoading: false,
    error: null,

    loadEvents: async () => {
        set({ isLoading: true, error: null });
        try {
            const events = await fetchIncidents();
            set({ events, filteredEvents: events, isLoading: false });
        } catch (error) {
            console.error("Failed to load events:", error);
            set({ error: "Failed to load events", isLoading: false });
        }
    },

    setPendingLocation: (location) => set({ pendingLocation: location }),

    setFilter: (key, value) => {
        const newFilters = { ...get().filters, [key]: value };
        set({ filters: newFilters });

        let filtered = get().events;

        if (newFilters.dateFrom) {
            const fromMs =
                typeof newFilters.dateFrom === "number"
                    ? newFilters.dateFrom
                    : new Date(newFilters.dateFrom).getTime();
            filtered = filtered.filter(
                (e) => getEventTimeUtc(e.reported_at) >= fromMs
            );
        }

        if (newFilters.dateTo) {
            const toMs =
                typeof newFilters.dateTo === "number"
                    ? newFilters.dateTo
                    : new Date(newFilters.dateTo).getTime();
            filtered = filtered.filter(
                (e) => getEventTimeUtc(e.reported_at) <= toMs
            );
        }

        if (newFilters.alertCode && newFilters.alertCode !== "ALL") {
            filtered = filtered.filter(
                (e) => e.alert_code === newFilters.alertCode
            );
        }

        if (newFilters.tags && newFilters.tags.length > 0) {
            filtered = filtered.filter((e) => newFilters.tags!.includes(e.tag));
        }

        set({ filteredEvents: filtered });
    },

    clearFilters: () => {
        set({ filters: {}, filteredEvents: get().events });
    },

    addEvent: (event) => {
        const newEvents = [event, ...get().events];
        set({ events: newEvents });
        // Reapply filters
        get().setFilter("alertCode", get().filters.alertCode || "ALL");
    },
}));
