"use client";

import { Appointment, Service } from "./types";
import { getAppointments, getBlocks } from "./storage";

const DEFAULT_OPEN = 9;   // 9am
const DEFAULT_CLOSE = 18; // 6pm
const SLOT_MINUTES = 30;

export function generateSlots(dateISO: string): string[] {
  // Simple slots every 30 mins from open-close.
  const slots: string[] = [];
  for (let h = DEFAULT_OPEN; h < DEFAULT_CLOSE; h++) {
    for (let m = 0; m < 60; m += SLOT_MINUTES) {
      const hh = String(h).padStart(2, "0");
      const mm = String(m).padStart(2, "0");
      slots.push(`${hh}:${mm}`);
    }
  }
  return slots;
}

export function isSlotAvailable(params: {
  dateISO: string;
  timeHHMM: string;
  barberId: string;
}): boolean {
  const { dateISO, timeHHMM, barberId } = params;
  const appts = getAppointments().filter(a => a.status === "confirmed");
  const blocks = getBlocks();

  const booked = appts.some(a => a.dateISO === dateISO && a.timeHHMM === timeHHMM && a.barberId === barberId);
  const blocked = blocks.some(b => b.dateISO === dateISO && b.timeHHMM === timeHHMM && b.barberId === barberId);
  return !booked && !blocked;
}

export function getAvailableSlots(params: {
  dateISO: string;
  barberId: string;
  service: Service | null;
}): string[] {
  const { dateISO, barberId } = params;
  const slots = generateSlots(dateISO);
  // Basic availability: slot is available if not booked/blocked.
  return slots.filter(timeHHMM => isSlotAvailable({ dateISO, timeHHMM, barberId }));
}
