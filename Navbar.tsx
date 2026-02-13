import Link from "next/link";

export function Navbar() {
  const phone = process.env.NEXT_PUBLIC_SHOP_PHONE || "Call";
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl border border-gold-500/40 bg-white/5 shadow-glow" />
          <div className="leading-tight">
            <div className="font-extrabold tracking-wide">Deez Cutz</div>
            <div className="text-xs text-white/60">Barber Studio</div>
          </div>
        </Link>

        <nav className="flex items-center gap-4 text-sm">
          <Link href="/services" className="text-white/80 hover:text-white">Services</Link>
          <Link href="/barbers" className="text-white/80 hover:text-white">Barbers</Link>
          <Link href="/book" className="rounded-xl border border-gold-500/40 bg-gold-400/10 px-3 py-2 font-semibold hover:bg-gold-400/15">
            Book
          </Link>
          <a className="hidden sm:inline text-white/70 hover:text-white" href={`tel:${phone.replace(/\D/g,"")}`}>
            {phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
