"use client"

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-blue-200 border-b-4 border-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-black mb-4 text-center">
          <span className="bg-yellow-300 px-4 py-2 border-2 border-black rounded-md -rotate-1 inline-block">
            Harga Transparan & Fleksibel
          </span>
        </h2>
        <p className="text-xl text-center mb-16">Pilih paket Gratis atau Pro yang sesuai dengan gaya belajarmu.</p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Gratis */}
          <div className="bg-white border-4 border-black rounded-lg overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-1">
            <div className="bg-gray-100 p-6 border-b-4 border-black">
              <h3 className="text-2xl font-black">Gratis</h3>
              <div className="mt-4">
                <span className="text-4xl font-black">Rp0</span>
                <span className="text-gray-600">/bulan</span>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✓</span>
                  <span>5 umpan balik AI/bulan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✓</span>
                  <span>Kuiz multiplayer</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✓</span>
                  <span>Buat kuiz dengan kredit</span>
                </li>
              </ul>
              <button className="w-full mt-8 px-4 py-3 bg-gray-200 border-2 border-black rounded-md font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                Mulai Gratis
              </button>
            </div>
          </div>

          {/* Pro 3 bulan */}
          <div className="bg-white border-4 border-black rounded-lg overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-1 transform scale-105 z-10">
            <div className="bg-blue-300 p-6 border-b-4 border-black relative">
              <div className="absolute top-0 right-0 bg-yellow-400 border-l-2 border-b-2 border-black px-3 py-1 font-bold">
                TERPOPULER
              </div>
              <h3 className="text-2xl font-black">Pro (3 bulan)</h3>
              <div className="mt-4">
                <span className="text-4xl font-black">Rp75,000</span>
                <span className="text-gray-600">/3bln</span>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✓</span>
                  <span>Umpan balik AI tanpa batas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✓</span>
                  <span>Kredit bonus</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✓</span>
                  <span>Pengalaman tanpa iklan</span>
                </li>
              </ul>
              <button className="w-full mt-8 px-4 py-3 bg-blue-400 border-2 border-black rounded-md font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                Pilih Pro
              </button>
            </div>
          </div>

          {/* Pro tahunan */}
          <div className="bg-white border-4 border-black rounded-lg overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-1">
            <div className="bg-green-300 p-6 border-b-4 border-black">
              <h3 className="text-2xl font-black">Pro (Tahunan)</h3>
              <div className="mt-4">
                <span className="text-4xl font-black">Rp250,000</span>
                <span className="text-gray-600">/tahun</span>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✓</span>
                  <span>Semua fitur Pro</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✓</span>
                  <span>Diskon 16% dibanding paket triwulan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✓</span>
                  <span>Dukungan prioritas</span>
                </li>
              </ul>
              <button className="w-full mt-8 px-4 py-3 bg-green-400 border-2 border-black rounded-md font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                Paling Hemat
              </button>
            </div>
          </div>
        </div>

        {/* Paket Kredit */}
        <div className="mt-16 max-w-2xl mx-auto bg-white border-4 border-black rounded-lg p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-1">
          <h3 className="text-2xl font-black mb-4">Paket Kredit</h3>
          <p className="mb-4">
            Mulai dari <span className="font-bold">Rp10,000</span>
          </p>
          <p>1 pembuatan kuiz ≈ 5–10 kredit (tergantung panjang)</p>
          <button className="mt-6 px-4 py-2 bg-yellow-300 border-2 border-black rounded-md font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
            Beli Kredit
          </button>
        </div>
      </div>
    </section>
  )
}
