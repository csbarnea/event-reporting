"use client"

import { useEffect } from "react"
import { MapView } from "@/components/map-view"
import { Sidebar } from "@/components/sidebar"
import { ReportEventDialog } from "@/components/report-event-dialog"
import { useEventStore } from "@/lib/store"

export default function Home() {
  const { loadEvents } = useEventStore()

  useEffect(() => {
    loadEvents()
  }, [loadEvents])

  return (
    <div className="flex h-screen flex-col">
      <header className="border-b bg-background px-4 py-3 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-destructive-foreground"
              >
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                <path d="M12 9v4" />
                <path d="M12 17h.01" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold">Raportare Evenimente</h1>
              <p className="text-sm text-muted-foreground">Monitorizare și alertă în timp real</p>
            </div>
          </div>
          <ReportEventDialog />
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <MapView />
      </div>
    </div>
  )
}
