"use client"

export default function AccordionItem({
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
