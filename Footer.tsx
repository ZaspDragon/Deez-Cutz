export function Footer() {
  const name = process.env.NEXT_PUBLIC_SHOP_NAME || "Deez Cutz Barber Studio";
  const phone = process.env.NEXT_PUBLIC_SHOP_PHONE || "614-800-6082";
  const address = process.env.NEXT_PUBLIC_SHOP_ADDRESS || "Canal Winchester, OH";

  return (
    <footer className="border-t border-white/10 bg-black/30">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 text-sm text-white/70">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="font-semibold text-white">{name}</div>
            <div>{address}</div>
          </div>
          <div className="flex items-center gap-3">
            <a className="underline decoration-white/20 hover:decoration-white" href={`tel:${phone.replace(/\D/g,"")}`}>Call {phone}</a>
            <a className="underline decoration-white/20 hover:decoration-white" href="/admin">Admin</a>
          </div>
        </div>
        <div className="mt-6 text-xs text-white/40">
          © {new Date().getFullYear()} {name}. Built for fast bookings.
        </div>
      </div>
    </footer>
  );
}
