"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import type { Event } from "@/lib/types"
import { Calendar, MapPin, User, Phone, Mail } from "lucide-react"
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

interface EventDetailsDialogProps {
  event: Event | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

const smallMapContainer = {
  width: "100%",
  height: "200px",
  borderRadius: "8px",
};

export function EventDetailsDialog({ event, open, onOpenChange }: EventDetailsDialogProps) {
  if (!event) return null

  const { isLoaded: isMapLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  const getAlertLabel = (code: string) => {
    return (
      {
        RED: "Cod Roșu",
        ORANGE: "Cod Portocaliu",
        YELLOW: "Cod Galben",
        GREEN: "Cod Verde",
      }[code] || code
    )
  }

  const getAlertColor = (code: string) => {
    return (
      {
        RED: "bg-red-500",
        ORANGE: "bg-orange-500",
        YELLOW: "bg-yellow-500",
        GREEN: "bg-green-500",
      }[code] || "bg-gray-500"
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Detalii Eveniment</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          {/* Alert Code */}
          <div className="flex items-center gap-2">
            <div className={`h-4 w-4 rounded-full ${getAlertColor(event.alert_code)}`} />
            <span className="text-lg font-semibold">{getAlertLabel(event.alert_code)}</span>
          </div>

          {/* Description */}
          <div>
            <h3 className="mb-1 text-sm font-medium text-muted-foreground">Descriere</h3>
            <p className="text-base">{event.description}</p>
          </div>

          {/* Tag */}
          <div>
            <h3 className="mb-1 text-sm font-medium text-muted-foreground">Categorie</h3>
            <Badge variant="secondary" className="capitalize">
              {event.tag}
            </Badge>
          </div>

          {/* Date */}
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>
              {new Date(event.reported_at).toLocaleString("ro-RO", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>

          {/* Location */}
          <div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span>
                Coordonate: {event.lat.toFixed(4)}, {event.lon.toFixed(4)}
              </span>
            </div>
          </div>

          {(event.reporter_name || event.reporter_email || event.reporter_phone) && (
            <div className="space-y-2 border-t pt-4">
              <h3 className="text-sm font-medium text-muted-foreground">Informații raportare</h3>
              {event.reporter_name && (
                <div className="flex items-center gap-2 text-sm">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span>{event.reporter_name}</span>
                </div>
              )}
              {event.reporter_email && (
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{event.reporter_email}</span>
                </div>
              )}
              {event.reporter_phone && (
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{event.reporter_phone}</span>
                </div>
              )}
            </div>
          )}

          {/* Photo */}
          {event.photo_url && (
            <div className="overflow-hidden rounded-lg border">
              <img
                src={event.photo_url || "/placeholder.svg"}
                alt="Foto eveniment"
                className="h-48 w-full object-cover"
              />
            </div>
          )}

        {/* Harta mică interactivă */}
          {loadError && (
            <div className="flex h-[200px] items-center justify-center rounded-lg border text-sm text-red-600">
              Eroare la încărcarea hărții
            </div>
          )}

          {!loadError && !isMapLoaded && (
            <div className="flex h-[200px] items-center justify-center rounded-lg border text-sm text-muted-foreground">
              Se încarcă harta...
            </div>
          )}

          {!loadError && isMapLoaded && (
            <div className="overflow-hidden rounded-lg border">
              <GoogleMap
                mapContainerStyle={smallMapContainer}
                center={{ lat: event.lat, lng: event.lon }}
                zoom={14} // mai zoomed-in implicit
                options={{
                  streetViewControl: false,
                  mapTypeControl: false,
                  fullscreenControl: false,
                }}
              >
                <Marker
                  position={{ lat: event.lat, lng: event.lon }}
                  icon={{
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 10,
                    fillColor: "#ef4444",
                    fillOpacity: 1,
                    strokeColor: "#ffffff",
                    strokeWeight: 2,
                  }}
                />
              </GoogleMap>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
