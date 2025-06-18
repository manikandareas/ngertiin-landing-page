"use client"

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-green-200 border-b-4 border-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-black mb-16 text-center">
          <span className="bg-purple-300 px-4 py-2 border-2 border-black rounded-md rotate-1 inline-block">
            Apa Kata Pengguna Awal Kami
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white border-4 border-black rounded-lg p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-1">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-300 border-2 border-black rounded-full mr-4"></div>
              <div>
                <h4 className="font-bold">Budi Santoso</h4>
                <p className="text-sm">Siswa Kelas 12</p>
              </div>
            </div>
            <p className="text-lg">
              "Ngerti.In membantu saya mempersiapkan ujian akhir dengan cara yang tidak bisa dilakukan buku teks. Umpan
              balik instan membuat saya memahami konsep yang sudah saya perjuangkan selama berbulan-bulan!"
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white border-4 border-black rounded-lg p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-1">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-pink-300 border-2 border-black rounded-full mr-4"></div>
              <div>
                <h4 className="font-bold">Siti Rahma</h4>
                <p className="text-sm">Mahasiswa</p>
              </div>
            </div>
            <p className="text-lg">
              "Kuiz multiplayer mengubah belajar dari tugas membosankan menjadi sesuatu yang saya nantikan. Teman-teman
              dan saya sekarang bersaing setiap akhir pekan!"
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white border-4 border-black rounded-lg p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-yellow-300 border-2 border-black rounded-full mr-4"></div>
              <div>
                <h4 className="font-bold">Pak Joko</h4>
                <p className="text-sm">Guru SMA</p>
              </div>
            </div>
            <p className="text-lg">
              "Sebagai guru, saya dapat dengan cepat membuat kuiz dari bab buku teks. Umpan balik AI memberi siswa saya
              bantuan ekstra yang ingin saya berikan secara pribadi."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
