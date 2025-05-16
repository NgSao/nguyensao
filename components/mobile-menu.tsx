"use client"

import { useState } from "react"
import Link from "next/link"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button className="text-zinc-300 hover:text-white" onClick={() => setIsOpen(!isOpen)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-16 right-4 w-48 py-2 bg-zinc-900 border border-zinc-800 rounded-md shadow-xl z-50">
          <Link
            href="/"
            className="block px-4 py-2 text-zinc-300 hover:bg-zinc-800 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Trang chủ
          </Link>
          {/* <Link
            href="/blog"
            className="block px-4 py-2 text-zinc-300 hover:bg-zinc-800 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link> */}
          <Link
            href="/projects"
            className="block px-4 py-2 text-zinc-300 hover:bg-zinc-800 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Dự án
          </Link>
          {/* <Link
            href="/contact"
            className="block px-4 py-2 text-zinc-300 hover:bg-zinc-800 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Liên hệ
          </Link> */}
        </div>
      )}
    </div>
  )
}
