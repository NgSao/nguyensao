import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import { ThemeProvider } from "@/components/theme-provider"
import MobileMenu from "@/components/mobile-menu"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nguyễn Sao",
  description: "Nơi chia sẻ kiến thức về công nghệ và phát triển cá nhân",
  icons: {
    icon: "/logojava.png",
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <header className="bg-black/80 backdrop-blur-sm border-b border-zinc-800 sticky top-0 z-50">
              <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                  <Link href="/" className="text-xl font-bold text-white">
                    <span className="text-yellow-400"></span>
                  </Link>
                  <nav className="hidden md:flex space-x-6">
                    <Link href="/" className="text-zinc-300 hover:text-white transition-colors">
                      Trang chủ
                    </Link>
                    {/* <Link href="/blog" className="text-zinc-300 hover:text-white transition-colors">
                      Blog
                    </Link> */}
                    <Link href="/projects" className="text-zinc-300 hover:text-white transition-colors">
                      Dự án
                    </Link>
                    {/* <Link href="/contact" className="text-zinc-300 hover:text-white transition-colors">
                      Liên hệ
                    </Link> */}
                  </nav>
                  <div className="md:hidden">
                    <MobileMenu />
                  </div>
                </div>
              </div>
            </header>
            <main className="flex-grow bg-black">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
