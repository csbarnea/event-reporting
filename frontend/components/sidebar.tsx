"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useEventStore } from "@/lib/store";
import { RefreshCw } from "lucide-react";
import { useEffect } from "react";

const ALERT_CODES = [
    { value: "RED", label: "Cod Roșu", color: "bg-red-500" },
    { value: "ORANGE", label: "Cod Portocaliu", color: "bg-orange-500" },
    { value: "YELLOW", label: "Cod Galben", color: "bg-yellow-500" },
    { value: "GREEN", label: "Cod Verde", color: "bg-green-500" },
];

const TAGS = [
    "natură",
    "accident",
    "incendiu",
    "inundații",
    "cutremur",
    "altele",
];

// aceleași nivele ca în ReportEventDialog
const SEVERITY_LEVELS = [
    { value: "CRITICAL", label: "Critic", color: "bg-red-500" },
    { value: "WARNING", label: "Avertizare", color: "bg-orange-500" },
    { value: "INFO", label: "Informativ", color: "bg-yellow-500" },
];

// aceleași tipuri ca în ReportEventDialog
const INCIDENT_TYPES = [
    { value: "FLOOD", label: "Inundație" },
    { value: "FIRE", label: "Incendiu" },
    { value: "PROTEST", label: "Protest" },
    { value: "ACCIDENT", label: "Accident" },
    { value: "OTHER", label: "Alt tip de incident" },
];

const TIME_PRESETS = [
    { value: "ALL", label: "Toate evenimentele" },
    { value: "LAST_HOUR", label: "Ultima oră" },
    { value: "LAST_24H", label: "Ultimele 24 de ore" },
    { value: "LAST_7D", label: "Ultimele 7 zile" },
];

export function Sidebar() {
    const { filters, setFilter, clearFilters, loadEvents } = useEventStore();
    const [isOpen, setIsOpen] = useState(true);
    const [timeRange, setTimeRange] = useState<string>("ALL");

    useEffect(() => {
        const interval = setInterval(() => {
            loadEvents();
        }, 3000);

        return () => clearInterval(interval);
    }, [loadEvents]);

    const handleTimeRangeChange = (value: string) => {
        setTimeRange(value);

        if (value === "ALL") {
            setFilter("dateFrom", undefined);
            setFilter("dateTo", undefined);
            return;
        }

        const now = new Date();
        let from = new Date(now);

        if (value === "LAST_HOUR") {
            from.setHours(now.getHours() - 1);
        } else if (value === "LAST_24H") {
            from.setDate(now.getDate() - 1);
        } else if (value === "LAST_7D") {
            from.setDate(now.getDate() - 7);
        }

        // store-ul verifică new Date(e.reported_at) >= new Date(dateFrom)
        setFilter("dateFrom", from.getTime());
        setFilter("dateTo", undefined);
    };

    return (
        <>
            {/* Mobile Toggle */}
            <Button
                variant="outline"
                size="icon"
                className="fixed left-4 top-20 z-10 md:hidden bg-transparent"
                onClick={() => setIsOpen(!isOpen)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                >
                    <line x1="3" x2="21" y1="6" y2="6" />
                    <line x1="3" x2="21" y1="12" y2="12" />
                    <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
            </Button>

            {/* Sidebar */}
            <aside
                className={`${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } fixed inset-y-0 left-0 top-[73px] z-20 w-80 border-r bg-background transition-transform md:relative md:top-0 md:translate-x-0`}
            >
                <div className="flex h-full flex-col">
                    <div className="flex items-center justify-between border-b p-4">
                        <h2 className="font-semibold">Filtre</h2>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                                clearFilters();
                                setTimeRange("ALL");
                            }}
                            className="h-8 text-xs"
                        >
                            Resetează
                        </Button>
                    </div>

                    <div className="flex-1 space-y-6 overflow-y-auto p-4">
                        {/* Time filter based on reported_at */}
                        <div className="space-y-2">
                            <Label htmlFor="time-range">
                                Interval raportare
                            </Label>
                            <Select
                                value={timeRange}
                                onValueChange={handleTimeRangeChange}
                            >
                                <SelectTrigger id="time-range">
                                    <SelectValue placeholder="Alege intervalul" />
                                </SelectTrigger>
                                <SelectContent>
                                    {TIME_PRESETS.map((preset) => (
                                        <SelectItem
                                            key={preset.value}
                                            value={preset.value}
                                        >
                                            {preset.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Alert Level Filter */}
                        <div className="space-y-2">
                            <Label htmlFor="alert-code">Nivel alertă</Label>
                            <Select
                                value={filters.alertCode || ""}
                                onValueChange={(value) =>
                                    setFilter("alertCode", value)
                                }
                            >
                                <SelectTrigger id="alert-code">
                                    <SelectValue placeholder="Selectează nivelul" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="ALL">Toate</SelectItem>
                                    {SEVERITY_LEVELS.map((level) => (
                                        <SelectItem
                                            key={level.value}
                                            value={level.value}
                                        >
                                            <div className="flex items-center gap-2">
                                                <div
                                                    className={`h-3 w-3 rounded-full ${level.color}`}
                                                />
                                                {level.label}
                                            </div>
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Incident Type Filter */}
                        <div className="space-y-2">
                            <Label>Tip incident</Label>
                            <div className="flex flex-wrap gap-2">
                                {INCIDENT_TYPES.map((type) => {
                                    const currentTags = filters.tags || [];
                                    const isActive = currentTags.includes(
                                        type.value
                                    );

                                    return (
                                        <Badge
                                            key={type.value}
                                            variant={
                                                isActive ? "default" : "outline"
                                            }
                                            className="cursor-pointer"
                                            onClick={() => {
                                                if (isActive) {
                                                    setFilter(
                                                        "tags",
                                                        currentTags.filter(
                                                            (t: string) =>
                                                                t !== type.value
                                                        )
                                                    );
                                                } else {
                                                    setFilter("tags", [
                                                        ...currentTags,
                                                        type.value,
                                                    ]);
                                                }
                                            }}
                                        >
                                            {type.label}
                                        </Badge>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-10 bg-black/50 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
}
