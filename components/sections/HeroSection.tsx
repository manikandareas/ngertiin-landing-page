"use client"

import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="py-16 md:py-24 bg-purple-300 border-b-4 border-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-yellow-300 border-2 border-black rounded-md font-bold rotate-2">
              Pembelajaran Bertenaga AI
            </div>
            <h1 className="text-5xl md:text-6xl font-black leading-tight">
              Ngerti.In — Kuiz Kontekstual Instan yang Membuat Anda {" "}
              <span className="bg-green-300 px-2 -rotate-1 inline-block">Mengerti!</span>
            </h1>
            <p className="text-xl">
              Platform kuiz AI-powered yang mengubah dokumen, tautan, atau topik Anda menjadi kuiz pintar dengan umpan
              balik waktu nyata.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-blue-400 border-2 border-black rounded-md font-bold text-lg shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all">
                Coba Gratis
              </button>
              <button className="px-6 py-3 bg-white border-2 border-black rounded-md font-bold text-lg shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all">
                Tonton Demo
              </button>
            </div>
          </div>
          <div className="relative h-[400px] border-4 border-black bg-white rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-1">
            <Image src="/app/app_dashboard.png" alt="Quiz generation illustration" fill className="object-fill" />
          </div>
        </div>
      </div>
    </section>
  )
}
