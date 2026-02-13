# Deez Cutz Barber Studio — Booking App (GitHub Ready)

A premium, mobile-first barber booking web app (Next.js + Tailwind).  
Designed for **fast bookings**, clean UX, and easy scaling.

## Features
- ✅ Home, Services, Barbers, Barber Profile
- ✅ Booking flow (service → barber → date/time → customer info)
- ✅ Prevents double-bookings
- ✅ Simple Admin dashboard:
  - View appointments
  - Cancel bookings
  - Block off times
  - Export CSV
  - Revenue estimate
- ✅ Built to upgrade later:
  - Stripe payments
  - Membership plans
  - Loyalty rewards
  - Push notifications
  - Multi-barber scaling
  - QR check-in

> Note: This starter stores data in the browser (localStorage) for demo.  
> For production, swap storage to **Supabase** or **Firebase**.

---

## 1) Run locally

```bash
npm install
cp .env.example .env
npm run dev
```

Open: http://localhost:3000

---

## 2) Admin access
Go to: `/admin`  
Default PIN is in `.env.example`:

- `NEXT_PUBLIC_ADMIN_PIN=1234`

Change it in `.env`.

---

## 3) Deploy (Vercel)
- Push to GitHub
- Import repo in Vercel
- Add env vars from `.env.example`
- Deploy

---

## Repo structure

- `app/` → Next.js App Router pages
- `components/` → UI components
- `data/` → Seed JSON for services and barbers
- `lib/` → Types + availability + localStorage helpers

---

## Upgrade path (production-ready)
- Replace `lib/storage.ts` with a Supabase/Firebase adapter
- Add server actions / API routes for:
  - create appointment
  - list appointments
  - cancel appointment
  - block time slots
- Add Twilio/SendGrid for SMS/email confirmations
- Add Stripe Checkout for deposits or full payment

---

If you want, tell me:
**“Make it production with Supabase + Stripe + Twilio”**
and I’ll generate that upgraded repo version too.
