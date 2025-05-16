import Link from "next/link"
import Image from "next/image"
import { CalendarDays, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function BlogPage() {
  // Sample blog posts data
  // Sample blog posts data
  // Sample blog posts data with real image links
  const posts = [
    {
      id: 1,
      title: "Tối ưu hóa hiệu suất ứng dụng Java với Garbage Collection",
      excerpt:
        "Khám phá các kỹ thuật điều chỉnh Garbage Collection để cải thiện hiệu suất và giảm độ trễ trong ứng dụng Java.",
      date: "15/05/2025",
      readTime: "8 phút",
      category: "Java",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      id: 2,
      title: "Xu hướng AI trong phát triển ứng dụng Java năm 2025",
      excerpt:
        "Tìm hiểu cách tích hợp AI vào các ứng dụng Java và những công cụ AI mới nhất cho nhà phát triển.",
      date: "02/05/2025",
      readTime: "6 phút",
      category: "AI",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      id: 3,
      title: "Hướng dẫn xây dựng mô hình Machine Learning với Java",
      excerpt:
        "Bắt đầu với các thư viện Java như Weka và Deeplearning4j để xây dựng các mô hình học máy hiệu quả.",
      date: "28/04/2025",
      readTime: "10 phút",
      category: "AI",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      id: 4,
      title: "Sử dụng Java trong các hệ thống AI phân tán",
      excerpt:
        "Khám phá cách Java hỗ trợ phát triển các hệ thống AI phân tán với hiệu suất cao và khả năng mở rộng.",
      date: "15/04/2025",
      readTime: "7 phút",
      category: "Java",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
    },
  ]


  return (
    <div className="min-h-screen bg-black text-white">
      {/* Stars background */}
      <div className="fixed inset-0 z-0 opacity-30">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 1 + "px",
              height: Math.random() * 2 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-zinc-300 max-w-2xl mx-auto">
            Khám phá những bài viết mới nhất về công nghệ, thiết kế web, và phát triển cá nhân. Chia sẻ kiến thức và
            kinh nghiệm để cùng nhau phát triển.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          <Badge className="bg-zinc-800 hover:bg-zinc-700">Tất cả</Badge>
          <Badge className="bg-blue-600 hover:bg-blue-700">Web Development</Badge>
          <Badge className="bg-purple-600 hover:bg-purple-700">Design</Badge>
          <Badge className="bg-green-600 hover:bg-green-700">SEO</Badge>
          <Badge className="bg-red-600 hover:bg-red-700">Personal Branding</Badge>
        </div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id} className="group">
              <article className="bg-zinc-900/60 rounded-lg overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-zinc-400 mb-3">
                    <div className="flex items-center gap-1">
                      <CalendarDays className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h2 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">{post.title}</h2>
                  <p className="text-zinc-300 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-zinc-800">{post.category}</Badge>
                    <span className="text-yellow-400 text-sm font-medium group-hover:underline">Đọc tiếp →</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12 gap-2">
          <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
            Trước
          </Button>
          <Button variant="outline" className="border-zinc-700 bg-zinc-800 text-white hover:bg-zinc-700">
            1
          </Button>
          <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
            2
          </Button>
          <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
            3
          </Button>
          <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
            Tiếp
          </Button>
        </div>
      </div>
    </div>
  )
}
