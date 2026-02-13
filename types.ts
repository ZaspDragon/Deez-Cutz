export type Service = {
  id: string;
  name: string;
  price: number;
  durationMins: number;
};

export type Barber = {
  id: string;
  name: string;
  specialty: string;
  years: number;
  rating: number;
};

export type Appointment = {
  id: string;
  createdAtISO: string;
  serviceId: string;
  barberId: string;
  dateISO: string;   // YYYY-MM-DD
  timeHHMM: string;  // 09:30
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  status: "confirmed" | "cancelled";
};
