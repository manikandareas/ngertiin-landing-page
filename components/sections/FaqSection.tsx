"use client"

import { useState } from "react"
import AccordionItem from "../AccordionItem"

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqData = [
    {
      question: "Apa itu kuiz kontekstual?",
      answer:
        "Kuiz kontekstual dibuat langsung dari materi belajar Anda—baik PDF, situs web, atau topik. Berbeda dengan kuiz umum, kuiz kontekstual menguji pemahaman Anda terhadap konten spesifik yang sedang dipelajari.",
    },
    {
      question: "Bagaimana cara mendapatkan lebih banyak kredit gratis?",
      answer:
        "Anda bisa mendapatkan kredit gratis dengan mengundang teman, menyelesaikan tantangan harian, menjaga streak belajar, atau berpartisipasi dalam acara dan kompetisi komunitas di platform.",
    },
    {
      question: "Apa itu umpan balik AI?",
      answer:
        "Umpan balik AI adalah penjelasan personal yang diberikan setelah Anda menjawab pertanyaan. Bukan hanya memberi tahu benar atau salah—AI menjelaskan konsep, mengklarifikasi miskonsepsi, dan membantu Anda memahami 'alasan' di balik setiap jawaban.",
    },
    {
      question: "Bisakah saya menggunakannya dengan sekolah atau kelas saya?",
      answer:
        "Ngerti.In menawarkan paket edukasi khusus untuk sekolah dan guru. Anda dapat membuat kuiz khusus kelas, memantau kemajuan siswa, dan terintegrasi dengan sistem manajemen pembelajaran umum. Hubungi kami untuk harga edukasi.",
    },
  ]

  return (
    <section id="faq" className="py-16 md:py-24 bg-pink-200 border-b-4 border-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-black mb-16 text-center">
          <span className="bg-blue-300 px-4 py-2 border-2 border-black rounded-md rotate-1 inline-block">
            Pertanyaan yang Sering Diajukan
          </span>
        </h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFaq === index}
              onToggle={() => setOpenFaq(openFaq === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
