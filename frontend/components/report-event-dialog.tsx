"use client"

import type React from "react"

import { useState, useEffect } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useEventStore } from "@/lib/store"
import { createIncident } from "@/lib/api"
import { AlertTriangle, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const TAGS = ["natură", "accident", "incendiu", "inundații", "cutremur", "altele"]

const SEVERITY_LEVELS = [
  { value: "CRITICAL", label: "Critic" },
  { value: "WARNING", label: "Avertizare" },
  { value: "INFO", label: "Informativ" },
]

const INCIDENT_TYPES = [
  { value: "FLOOD", label: "Inundație" },
  { value: "FIRE", label: "Incendiu" },
  { value: "PROTEST", label: "Protest" },
  { value: "ACCIDENT", label: "Accident" },
  { value: "OTHER", label: "Alt tip de incident" },
]


export function ReportEventDialog() {
  const [open, setOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { addEvent, pendingLocation, setPendingLocation, loadEvents } = useEventStore()
  const { toast } = useToast()
  const [photoFile, setPhotoFile] = useState<File | null>(null);

  const [formData, setFormData] = useState({
    alert_code: "",
    description: "",
    tag: "",
    lat: "",
    lon: "",
    reporter_name: "",
    reporter_email: "",
    reporter_phone: "",
  })

  useEffect(() => {
    if (pendingLocation) {
      setFormData((prev) => ({
        ...prev,
        lat: pendingLocation.lat.toFixed(6),
        lon: pendingLocation.lon.toFixed(6),
      }))
      setOpen(true)
    }
  }, [pendingLocation])

  useEffect(() => {
    if (!open) {
      window.dispatchEvent(new Event("clearTempMarker"))
    }
  }, [open])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      console.log("Submitting incident:", formData)
      const newIncident = await createIncident({
        lat: Number.parseFloat(formData.lat),
        lon: Number.parseFloat(formData.lon),
        alert_code: formData.alert_code,
        description: formData.description,
        tag: formData.tag,
        reporter_name: formData.reporter_name || undefined,
        reporter_email: formData.reporter_email || undefined,
        reporter_phone: formData.reporter_phone || undefined,
      },
      photoFile
    )

      console.log("[v0] Incident created:", newIncident)

      // Add to local store and reload all events
      addEvent(newIncident)
      await loadEvents()

      toast({
        title: "Eveniment raportat cu succes!",
        description: "Evenimentul a fost adăugat pe hartă.",
      })

      // Reset form
      setFormData({
        alert_code: "",
        description: "",
        tag: "",
        lat: "",
        lon: "",
        reporter_name: "",
        reporter_email: "",
        reporter_phone: "",
      })
      setPhotoFile(null)   
      setPendingLocation(null)
      setOpen(false)
    } catch (error) {
      console.error("[v0] Failed to create incident:", error)
      toast({
        title: "Eroare",
        description: "Nu s-a putut salva evenimentul. Verifică conexiunea la backend.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="gap-2">
          <AlertTriangle className="h-5 w-5" />
          Raportează Eveniment
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Raportează un eveniment nou</DialogTitle>
          <DialogDescription>
            {pendingLocation
              ? "Locația a fost pre-completată din harta. Completează restul detaliilor."
              : "Dă click pe hartă pentru a selecta locația sau completează manual coordonatele."}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="alert-code">Nivel alertă *</Label>
            <Select
              value={formData.alert_code}
              onValueChange={(value) => setFormData({ ...formData, alert_code: value })}
              required
            >
              <SelectTrigger id="alert-code">
                <SelectValue placeholder="Selectează nivelul" />
              </SelectTrigger>
              <SelectContent>
                {SEVERITY_LEVELS.map((level) => (
                  <SelectItem key={level.value} value={level.value}>
                    {level.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>


          <div className="space-y-2">
            <Label htmlFor="tag">Tip incident *</Label>
            <Select
              value={formData.tag}
              onValueChange={(value) => setFormData({ ...formData, tag: value })}
              required
            >
              <SelectTrigger id="tag">
                <SelectValue placeholder="Selectează tipul" />
              </SelectTrigger>
              <SelectContent>
                {INCIDENT_TYPES.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>


          <div className="space-y-2">
            <Label htmlFor="description">Descriere *</Label>
            <Textarea
              id="description"
              placeholder="Descrie evenimentul..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="photo">Poză (opțional)</Label>
            <Input
              id="photo"
              type="file"
              accept="image/*"
              onChange={(e) => setPhotoFile(e.target.files?.[0] ?? null)}
            />
        </div>


          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="latitude">Latitudine *</Label>
              <Input
                id="latitude"
                type="number"
                step="any"
                placeholder="44.4268"
                value={formData.lat}
                onChange={(e) => setFormData({ ...formData, lat: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="longitude">Longitudine *</Label>
              <Input
                id="longitude"
                type="number"
                step="any"
                placeholder="26.1025"
                value={formData.lon}
                onChange={(e) => setFormData({ ...formData, lon: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="reporter-name">Nume (opțional)</Label>
            <Input
              id="reporter-name"
              placeholder="Numele tău"
              value={formData.reporter_name}
              onChange={(e) => setFormData({ ...formData, reporter_name: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="reporter-email">Email (opțional)</Label>
            <Input
              id="reporter-email"
              type="email"
              placeholder="email@exemplu.ro"
              value={formData.reporter_email}
              onChange={(e) => setFormData({ ...formData, reporter_email: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="reporter-phone">Telefon (opțional)</Label>
            <Input
              id="reporter-phone"
              type="tel"
              placeholder="+40 712 345 678"
              value={formData.reporter_phone}
              onChange={(e) => setFormData({ ...formData, reporter_phone: e.target.value })}
            />
          </div>

          <div className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setOpen(false)
                setPendingLocation(null)
                setPhotoFile(null)
              }}
              className="flex-1"
              disabled={isSubmitting}
            >
              Anulează
            </Button>
            <Button type="submit" className="flex-1 gap-2" disabled={isSubmitting}>
              {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
              Trimite Raport
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
