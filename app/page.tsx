"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

// Custom Accordion Component
function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-4 border-black rounded-lg bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 font-bold text-lg text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        {question}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      {isOpen && <div className="px-6 pb-4 text-lg border-t-2 border-black">{answer}</div>}
    </div>
  )
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqData = [
    {
      question: "What is a contextual quiz?",
      answer:
        "A contextual quiz is generated directly from your learning materials - whether it's a PDF, website, or topic. Unlike generic quizzes, contextual quizzes test your understanding of specific content you're studying.",
    },
    {
      question: "How do I earn more credits for free?",
      answer:
        "You can earn free credits by inviting friends, completing daily challenges, maintaining a study streak, or participating in community events and competitions on the platform.",
    },
    {
      question: "What is AI feedback?",
      answer:
        "AI feedback is personalized explanation provided after you answer a question. It doesn't just tell you if you're right or wrong - it explains concepts, clarifies misconceptions, and helps you understand the 'why' behind each answer.",
    },
    {
      question: "Can I use this with my school or class?",
      answer:
        "Ngerti.In offers special educational plans for schools and teachers. You can create class-specific quizzes, monitor student progress, and integrate with common learning management systems. Contact us for educational pricing.",
    },
  ]

  return (
    <div className="min-h-screen bg-yellow-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b-4 border-black">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-black">Ngerti.In</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="font-bold hover:underline">
              Features
            </Link>
            <Link href="#testimonials" className="font-bold hover:underline">
              Testimoni
            </Link>
            <Link href="#pricing" className="font-bold hover:underline">
              Pricing
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

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-purple-300 border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-yellow-300 border-2 border-black rounded-md font-bold rotate-2">
                AI-Powered Learning
              </div>
              <h1 className="text-5xl md:text-6xl font-black leading-tight">
                Ngerti.In — Kuiz Kontekstual Instan yang Membuat Anda{" "}
                <span className="bg-green-300 px-2 -rotate-1 inline-block">Mengerti!</span>
              </h1>
              <p className="text-xl">
                Platform kuiz AI-powered yang mengubah dokumen, tautan, atau topik Anda menjadi kuiz pintar dengan umpan balik waktu nyata.
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
              <Image
                src="/app/app_dashboard.png"
                alt="Quiz generation illustration"
                fill
                className="object-fill"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
                <Image
   src="/app/app_dashboard.png"
                  alt="Quiz generation"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>
            <div className="space-y-4 order-1 md:order-2">
              <h3 className="text-3xl font-black">Buat Kuiz yang Lebih Pintar dan Relevan</h3>
              <p className="text-xl">
               Unggah PDF, tempel tautan website, atau ketik topik Anda sendiri — Ngerti.In membuat kuiz langsung dari itu,
                lengkap dengan penjelasan yang jelas.
              </p>
              <div className="bg-yellow-200 border-2 border-black p-4 rounded-md rotate-1 inline-block">
                <p className="font-bold">✨ Parsing konten yang cerdas</p>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="space-y-4">
              <h3 className="text-3xl font-black">Instant Feedback That Builds Real Understanding</h3>
              <p className="text-xl">
                After each answer, receive immediate, AI-generated explanations. It's like having a tutor who explains
                why, not just what.
              </p>
              <div className="bg-green-200 border-2 border-black p-4 rounded-md -rotate-1 inline-block">
                <p className="font-bold">🧠 Learn from mistakes instantly</p>
              </div>
            </div>
            <div>
              <div className="relative h-[300px] border-4 border-black bg-green-100 rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-2">
                <Image
   src="/app/singleplayer_quiz_ongoing.png"
                  alt="Instant feedback"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 md:order-1">
              <div className="relative h-[300px] border-4 border-black bg-pink-100 rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-1">
                <Image
                  src="/app/multiplayer_quiz_ongoing.png"
                  alt="Multiplayer learning"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>
            <div className="space-y-4 order-1 md:order-2">
              <h3 className="text-3xl font-black">Learn Together, Compete Smarter</h3>
              <p className="text-xl">
                Engage with friends in real-time quiz battles and climb the leaderboard. Multiplayer learning keeps
                motivation high and fun.
              </p>
              <div className="bg-pink-200 border-2 border-black p-4 rounded-md rotate-1 inline-block">
                <p className="font-bold">🏆 Compete and learn together</p>
              </div>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h3 className="text-3xl font-black">Personalized Feedback That Scales With You</h3>
              <p className="text-xl">
                Receive AI-driven summary feedback after each quiz session — identify your strengths, improve your
                weaknesses.
              </p>
              <div className="bg-blue-200 border-2 border-black p-4 rounded-md -rotate-1 inline-block">
                <p className="font-bold">📈 Track your progress over time</p>
              </div>
            </div>
            <div>
              <div className="relative h-[300px] border-4 border-black bg-blue-100 rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-1">
                <Image
                  src="/app/singleplayer_quiz_result.png"
                  alt="Personalized feedback"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-green-200 border-b-4 border-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black mb-16 text-center">
            <span className="bg-purple-300 px-4 py-2 border-2 border-black rounded-md rotate-1 inline-block">
              What Our Early Users Say
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white border-4 border-black rounded-lg p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-300 border-2 border-black rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Budi Santoso</h4>
                  <p className="text-sm">12th Grade Student</p>
                </div>
              </div>
              <p className="text-lg">
                "Ngerti.In helped me prepare for my final exams in a way textbooks never could. The instant feedback
                made me understand concepts I'd been struggling with for months!"
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white border-4 border-black rounded-lg p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pink-300 border-2 border-black rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Siti Rahma</h4>
                  <p className="text-sm">University Student</p>
                </div>
              </div>
              <p className="text-lg">
                "The multiplayer quizzes turned studying from a chore into something I actually look forward to. My
                friends and I compete every weekend now!"
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white border-4 border-black rounded-lg p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-300 border-2 border-black rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Pak Joko</h4>
                  <p className="text-sm">High School Teacher</p>
                </div>
              </div>
              <p className="text-lg">
                "As a teacher, I can quickly create quizzes from our textbook chapters. The AI feedback gives my
                students the extra help I wish I could provide one-on-one."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 bg-blue-200 border-b-4 border-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black mb-4 text-center">
            <span className="bg-yellow-300 px-4 py-2 border-2 border-black rounded-md -rotate-1 inline-block">
              Transparent, Flexible Pricing
            </span>
          </h2>
          <p className="text-xl text-center mb-16">Choose a free or pro plan that fits your learning style.</p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white border-4 border-black rounded-lg overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-1">
              <div className="bg-gray-100 p-6 border-b-4 border-black">
                <h3 className="text-2xl font-black">Free</h3>
                <div className="mt-4">
                  <span className="text-4xl font-black">Rp0</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <span>5 AI feedbacks/month</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <span>Multiplayer quizzes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <span>Generate quizzes with credits</span>
                  </li>
                </ul>
                <button className="w-full mt-8 px-4 py-3 bg-gray-200 border-2 border-black rounded-md font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                  Start Free
                </button>
              </div>
            </div>

            {/* Pro 3 Months */}
            <div className="bg-white border-4 border-black rounded-lg overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-1 transform scale-105 z-10">
              <div className="bg-blue-300 p-6 border-b-4 border-black relative">
                <div className="absolute top-0 right-0 bg-yellow-400 border-l-2 border-b-2 border-black px-3 py-1 font-bold">
                  POPULAR
                </div>
                <h3 className="text-2xl font-black">Pro (3 months)</h3>
                <div className="mt-4">
                  <span className="text-4xl font-black">Rp75,000</span>
                  <span className="text-gray-600">/3mo</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <span>Unlimited AI feedback</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <span>Bonus credits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <span>Ad-free experience</span>
                  </li>
                </ul>
                <button className="w-full mt-8 px-4 py-3 bg-blue-400 border-2 border-black rounded-md font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                  Choose Pro
                </button>
              </div>
            </div>

            {/* Pro Annual */}
            <div className="bg-white border-4 border-black rounded-lg overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-1">
              <div className="bg-green-300 p-6 border-b-4 border-black">
                <h3 className="text-2xl font-black">Pro (Annual)</h3>
                <div className="mt-4">
                  <span className="text-4xl font-black">Rp250,000</span>
                  <span className="text-gray-600">/year</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <span>Everything in Pro</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <span>16% discount vs quarterly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <span>Priority support</span>
                  </li>
                </ul>
                <button className="w-full mt-8 px-4 py-3 bg-green-400 border-2 border-black rounded-md font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                  Best Value
                </button>
              </div>
            </div>
          </div>

          {/* Credit Packs */}
          <div className="mt-16 max-w-2xl mx-auto bg-white border-4 border-black rounded-lg p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-1">
            <h3 className="text-2xl font-black mb-4">Credit Packs</h3>
            <p className="mb-4">
              Starting from <span className="font-bold">Rp10,000</span>
            </p>
            <p>1 quiz generation ≈ 5–10 credits (depending on length)</p>
            <button className="mt-6 px-4 py-2 bg-yellow-300 border-2 border-black rounded-md font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
              Buy Credits
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 bg-pink-200 border-b-4 border-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black mb-16 text-center">
            <span className="bg-blue-300 px-4 py-2 border-2 border-black rounded-md rotate-1 inline-block">
              Frequently Asked Questions
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

      {/* Awards Section */}
      <section className="py-16 md:py-24 bg-yellow-200 border-b-4 border-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black mb-16 text-center">
            <span className="bg-pink-300 px-4 py-2 border-2 border-black rounded-md -rotate-1 inline-block">
              Recognitions & Achievements
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white border-4 border-black rounded-lg p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-2 flex flex-col items-center text-center">
              <div className="text-4xl mb-4">🥉</div>
              <h3 className="font-bold text-xl mb-2">3rd Place</h3>
              <p>EduTech Hackathon 2024 (Regional Level)</p>
            </div>

            <div className="bg-white border-4 border-black rounded-lg p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] -rotate-1 flex flex-col items-center text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="font-bold text-xl mb-2">Finalist</h3>
              <p>Digital Education Innovation Challenge</p>
            </div>

            <div className="bg-white border-4 border-black rounded-lg p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-1 flex flex-col items-center text-center">
              <div className="text-4xl mb-4">🧪</div>
              <h3 className="font-bold text-xl mb-2">Selected</h3>
              <p>National research-based EdTech showcase</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-300 border-b-4 border-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-4">Ready to Learn Smarter?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of learners turning knowledge into true understanding — one quiz at a time.
          </p>
          <button className="px-8 py-4 bg-yellow-400 border-4 border-black rounded-md font-bold text-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all">
            Start Learning Now — It's Free!
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-black text-xl mb-4">Ngerti.In</h3>
              <p>Making learning truly understandable, one quiz at a time.</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#features" className="hover:underline">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="hover:underline">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="hover:underline">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:underline">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <Link href="#" className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-md">
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
                <Link href="#" className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-md">
                  <span className="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
                <Link href="#" className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-md">
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
              </div>
              <p className="mt-4">Email: hello@ngerti.in</p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p>&copy; {new Date().getFullYear()} Ngerti.In. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
