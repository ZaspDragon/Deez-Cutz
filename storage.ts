"use client";

import { Appointment } from "./types";

const KEY_APPTS = "dc_appts_v1";
const KEY_BLOCKS = "dc_blocks_v1";
const KEY_CUSTOMERS = "dc_customers_v1";

export type Block = { dateISO: string; timeHHMM: string; barberId: string; reason?: string };

export function getAppointments(): Appointment[] {
  if (typeof window === "undefined") return [];
  const raw = localStorage.getItem(KEY_APPTS);
  return raw ? (JSON.parse(raw) as Appointment[]) : [];
}

export function saveAppointments(appts: Appointment[]) {
  localStorage.setItem(KEY_APPTS, JSON.stringify(appts));
}

export function upsertAppointment(appt: Appointment) {
  const appts = getAppointments();
  const idx = appts.findIndex(a => a.id === appt.id);
  if (idx >= 0) appts[idx] = appt;
  else appts.unshift(appt);
  saveAppointments(appts);
}

export function getBlocks(): Block[] {
  if (typeof window === "undefined") return [];
  const raw = localStorage.getItem(KEY_BLOCKS);
  return raw ? (JSON.parse(raw) as Block[]) : [];
}

export function saveBlocks(blocks: Block[]) {
  localStorage.setItem(KEY_BLOCKS, JSON.stringify(blocks));
}

export function addBlock(block: Block) {
  const blocks = getBlocks();
  blocks.unshift(block);
  saveBlocks(blocks);
}

export function removeBlock(block: Block) {
  const blocks = getBlocks().filter(
    b => !(b.dateISO === block.dateISO && b.timeHHMM === block.timeHHMM && b.barberId === block.barberId)
  );
  saveBlocks(blocks);
}

export function rememberCustomer(name: string, phone: string, email: string) {
  if (typeof window === "undefined") return;
  const raw = localStorage.getItem(KEY_CUSTOMERS);
  const data = raw ? (JSON.parse(raw) as Record<string, {name:string; phone:string; email:string; lastSeenISO:string}>) : {};
  const key = (email || phone || name).toLowerCase();
  data[key] = { name, phone, email, lastSeenISO: new Date().toISOString() };
  localStorage.setItem(KEY_CUSTOMERS, JSON.stringify(data));
}

export function exportAppointmentsCSV(): string {
  const appts = getAppointments();
  const header = ["id","createdAtISO","status","serviceId","barberId","dateISO","timeHHMM","customerName","customerPhone","customerEmail"];
  const rows = appts.map(a => header.map(h => (a as any)[h] ?? "").map(v => `${String(v).replaceAll('"','""')}`).map(v => `"${v}"`).join(","));
  return [header.join(","), ...rows].join("\n");
}
