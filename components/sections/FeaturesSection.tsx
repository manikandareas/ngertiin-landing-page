"use client"

import Image from "next/image"

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24 bg-white border-b-4 border-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-black mb-16 text-center">
          <span className="bg-orange-300 px-4 py-2 border-2 border-black rounded-md -rotate-2 inline-block">
            Fitur Kuat
          </span>
        </h2>

        {/* Feature 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 md:order-1">
            <div className="relative h-[300px] border-4 border-black bg-blue-100 rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-2">
              <Image src="/app/app_dashboard.png" alt="Quiz generation" fill className="object-contain p-4" />
            </div>
          </div>
          <div className="space-y-4 order-1 md:order-2">
            <h3 className="text-3xl font-black">Buat Kuiz yang Lebih Pintar dan Relevan</h3>
            <p className="text-xl">
              Unggah PDF, tempel tautan website, atau ketik topik Anda sendiri — Ngerti.In membuat kuiz langsung dari
              itu, lengkap dengan penjelasan yang jelas.
            </p>
            <div className="bg-yellow-200 border-2 border-black p-4 rounded-md rotate-1 inline-block">
              <p className="font-bold">✨ Parsing konten yang cerdas</p>
            </div>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-4">
            <h3 className="text-3xl font-black">Umpan Balik Instan yang Membangun Pemahaman Sejati</h3>
            <p className="text-xl">
              Setelah setiap jawaban, dapatkan penjelasan instan yang dihasilkan AI. Rasanya seperti memiliki tutor yang
              menjelaskan alasan, bukan hanya jawaban.
            </p>
            <div className="bg-green-200 border-2 border-black p-4 rounded-md -rotate-1 inline-block">
              <p className="font-bold">🧠 Belajar dari kesalahan secara instan</p>
            </div>
          </div>
          <div>
            <div className="relative h-[300px] border-4 border-black bg-green-100 rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-2">
              <Image src="/app/singleplayer_quiz_ongoing.png" alt="Instant feedback" fill className="object-contain p-4" />
            </div>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 md:order-1">
            <div className="relative h-[300px] border-4 border-black bg-pink-100 rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-1">
              <Image src="/app/multiplayer_quiz_ongoing.png" alt="Multiplayer learning" fill className="object-contain p-4" />
            </div>
          </div>
          <div className="space-y-4 order-1 md:order-2">
            <h3 className="text-3xl font-black">Belajar Bersama, Bersaing Lebih Pintar</h3>
            <p className="text-xl">
              Ikut serta dengan teman dalam pertarungan kuiz waktu nyata dan naik di papan peringkat. Pembelajaran
              multiplayer membuat motivasi tetap tinggi dan menyenangkan.
            </p>
            <div className="bg-pink-200 border-2 border-black p-4 rounded-md rotate-1 inline-block">
              <p className="font-bold">🏆 Bersaing dan belajar bersama</p>
            </div>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h3 className="text-3xl font-black">Umpan Balik Personalisasi yang Bertumbuh Bersamamu</h3>
            <p className="text-xl">
              Terima ringkasan umpan balik berbasis AI setelah setiap sesi kuiz — kenali kelebihanmu, tingkatkan
              kekuranganmu.
            </p>
            <div className="bg-blue-200 border-2 border-black p-4 rounded-md -rotate-1 inline-block">
              <p className="font-bold">📈 Pantau perkembanganmu dari waktu ke waktu</p>
            </div>
          </div>
          <div>
            <div className="relative h-[300px] border-4 border-black bg-blue-100 rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-1">
              <Image src="/app/singleplayer_quiz_result.png" alt="Personalized feedback" fill className="object-contain p-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
