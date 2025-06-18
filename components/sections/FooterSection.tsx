"use client"

import Link from "next/link"

export default function FooterSection() {
  return (
    <footer className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-black text-xl mb-4">Ngerti.In</h3>
            <p>Membuat pembelajaran benar-benar mudah dipahami, satu kuiz setiap saat.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="hover:underline">
                  Fitur
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:underline">
                  Harga
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="hover:underline">
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:underline">
                  Ketentuan Layanan
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Terhubung</h4>
            <div className="flex space-x-4">
              <Link href="#" className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-md">
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-md">
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-md">
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
            <p className="mt-4">Email: hello@ngerti.in</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p>&copy; {new Date().getFullYear()} Ngerti.In. Hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
