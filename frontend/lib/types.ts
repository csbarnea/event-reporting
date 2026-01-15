export interface Event {
  id: number
  reported_at: string
  lat: number
  lon: number
  alert_code: string
  description: string
  photo_url: string | null
  tag: string
  reporter_name: string | null
  reporter_email: string | null
  reporter_phone: string | null
}

export interface Filters {
  dateFrom?: string | number
  dateTo?: string | number
  alertCode?: string
  tags?: string[]
  radius?: number
  location?: string
}

export interface CreateIncidentRequest {
  lat: number
  lon: number
  alert_code: string
  description: string
  photo_url?: string | null
  tag: string
  reporter_name?: string
  reporter_email?: string
  reporter_phone?: string
}
