"use client"

export default function CtaSection() {
  return (
    <section className="py-16 md:py-24 bg-blue-300 border-b-4 border-black text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-black mb-4">Siap Belajar Lebih Pintar?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Bergabunglah dengan ribuan pelajar yang mengubah pengetahuan menjadi pemahaman sejati — satu kuiz setiap saat.
        </p>
        <button className="px-8 py-4 bg-yellow-400 border-4 border-black rounded-md font-bold text-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all">
          Mulai Belajar Sekarang — Gratis!
        </button>
      </div>
    </section>
  )
}
