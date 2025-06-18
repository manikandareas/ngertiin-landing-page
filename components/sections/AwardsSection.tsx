"use client"

export default function AwardsSection() {
  return (
    <section className="py-16 md:py-24 bg-yellow-200 border-b-4 border-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-black mb-16 text-center">
          <span className="bg-pink-300 px-4 py-2 border-2 border-black rounded-md -rotate-1 inline-block">
            Penghargaan & Pencapaian
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white border-4 border-black rounded-lg p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-2 flex flex-col items-center text-center">
            <div className="text-4xl mb-4">🥉</div>
            <h3 className="font-bold text-xl mb-2">Juara 3</h3>
            <p>EduTech Hackathon 2024 (Tingkat Regional)</p>
          </div>

          <div className="bg-white border-4 border-black rounded-lg p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] -rotate-1 flex flex-col items-center text-center">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="font-bold text-xl mb-2">Finalis</h3>
            <p>Tantangan Inovasi Pendidikan Digital</p>
          </div>

          <div className="bg-white border-4 border-black rounded-lg p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-1 flex flex-col items-center text-center">
            <div className="text-4xl mb-4">🧪</div>
            <h3 className="font-bold text-xl mb-2">Terpilih</h3>
            <p>Pameran EdTech berbasis riset nasional</p>
          </div>
        </div>
      </div>
    </section>
  )
}
