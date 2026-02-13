import Link from "next/link";

export function StickyBookButton() {
  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 mx-auto flex max-w-6xl justify-center px-4 sm:hidden">
      <Link
        href="/book"
        className="w-full rounded-2xl border border-gold-500/40 bg-gold-400/15 px-5 py-4 text-center font-extrabold tracking-wide shadow-glow"
      >
        Book Appointment
      </Link>
    </div>
  );
}
