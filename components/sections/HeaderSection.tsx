"use client"

import Link from "next/link"

export default function HeaderSection() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b-4 border-black">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-black">Ngerti.In</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#features" className="font-bold hover:underline">
            Fitur
          </Link>
          <Link href="#testimonials" className="font-bold hover:underline">
            Testimoni
          </Link>
          <Link href="#pricing" className="font-bold hover:underline">
            Harga
          </Link>
          <Link href="#faq" className="font-bold hover:underline">
            FAQ
          </Link>
        </nav>
        <div className="flex items-center space-x-2">
          <Link
            href="/login"
            className="px-4 py-2 bg-white border-2 border-black rounded-md font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            Masuk
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 bg-green-400 border-2 border-black rounded-md font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            Daftar
          </Link>
        </div>
      </div>
    </header>
  )
}
