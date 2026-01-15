"use client";

import { useState } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useLoadScript,
} from "@react-google-maps/api";

import { useEventStore } from "@/lib/store";
import { EventDetailsDialog } from "@/components/event-details-dialog";
import type { Event } from "@/lib/types";

// stilul containerului pentru hartă
const containerStyle = {
  width: "100%",
  height: "100%",
};

const romaniaCenter = {
  lat: 45.9432,
  lng: 24.9668,
};

export function MapView() {
  const { filteredEvents } = useEventStore();
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // încarcă Google Maps JS API
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  if (loadError) return <div>Eroare la încărcarea hărții</div>;
  if (!isLoaded) return <div>Se încarcă harta...</div>;

  return (
    <div className="relative flex-1 min-h-[500px]">
      <MapContent
        filteredEvents={filteredEvents}
        onEventSelect={setSelectedEvent}
      />

      {/* Număr evenimente */}
      <div className="absolute right-4 top-2 z-10 rounded-lg border bg-background px-3 py-2 shadow-lg">
        <p className="text-sm font-medium">
          {filteredEvents.length} evenimente active
        </p>
      </div>

      <EventDetailsDialog
        event={selectedEvent}
        open={!!selectedEvent}
        onOpenChange={(open) => !open && setSelectedEvent(null)}
      />
    </div>
  );
}

interface MapContentProps {
  filteredEvents: Event[];
  onEventSelect: (event: Event | null) => void;
}

function MapContent({ filteredEvents, onEventSelect }: MapContentProps) {
  const { setPendingLocation } = useEventStore();
  const [activeMarker, setActiveMarker] = useState<number | null>(null);
  const [pendingMarker, setPendingMarker] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const handleMapClick = (e: google.maps.MapMouseEvent) => {
    if (!e.latLng) return;
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    console.log("Map clicked at:", { lat, lng });

    setPendingLocation({ lat, lon: lng });
    setPendingMarker({ lat, lng });
  };

  const activeEvent =
    activeMarker !== null
      ? filteredEvents.find((e) => e.id === activeMarker) || null
      : null;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={romaniaCenter}
      zoom={7}
      onClick={handleMapClick}
      options={{
        streetViewControl: false,
        fullscreenControl: false,
      }}
    >
      {/* Markere pt evenimente */}
      {filteredEvents.map((event) => (
        <Marker
          key={event.id}
          position={{ lat: event.lat, lng: event.lon }}
          onClick={() => setActiveMarker(event.id)}
          icon={{
            path: google.maps.SymbolPath.CIRCLE,
            scale: 10,
            fillColor: getAlertColor(event.alert_code),
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeWeight: 2,
          }}
        />
      ))}

      {/* InfoWindow pt marker activ */}
      {activeEvent && (
        <InfoWindow
          position={{ lat: activeEvent.lat, lng: activeEvent.lon }}
          onCloseClick={() => setActiveMarker(null)}
        >
          <EventInfoContent
            event={activeEvent}
            onViewDetails={() => {
              onEventSelect(activeEvent);
              setActiveMarker(null);
            }}
          />
        </InfoWindow>
      )}

      {/* Marker pending pentru locație nouă */}
      {pendingMarker && (
        <Marker
          position={pendingMarker}
          icon={{
            path: google.maps.SymbolPath.CIRCLE,
            scale: 12,
            fillColor: "#3b82f6",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeWeight: 3,
          }}
        />
      )}
    </GoogleMap>
  );
}

function EventInfoContent({
  event,
  onViewDetails,
}: {
  event: Event;
  onViewDetails: () => void;
}) {
  return (
    <div className="max-w-xs p-2">
      <div className="mb-2 flex items-center gap-2">
        <div
          className="h-3 w-3 rounded-full"
          style={{ backgroundColor: getAlertColor(event.alert_code) }}
        />
        <strong className="text-sm">{event.alert_code}</strong>
      </div>
      <p className="mb-1 text-sm">{event.description}</p>
      <p className="mb-2 text-xs text-gray-500">
        {new Date(event.reported_at).toLocaleDateString("ro-RO", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <span className="mb-2 inline-block rounded bg-gray-100 px-2 py-1 text-xs">
        {event.tag}
      </span>
      <button
        onClick={onViewDetails}
        className="mt-2 w-full rounded bg-blue-500 px-3 py-1 text-sm text-white transition-colors hover:bg-blue-600"
      >
        Vezi detalii
      </button>
    </div>
  );
}

function getAlertColor(alertCode: string): string {
  const colors: Record<string, string> = {
    RED: "#ef4444",
    ORANGE: "#f97316",
    YELLOW: "#eab308",
    GREEN: "#22c55e",
  };
  return colors[alertCode] || "#6b7280";
}
