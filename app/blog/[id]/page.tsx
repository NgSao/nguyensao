import Image from "next/image"
import Link from "next/link"
import { CalendarDays, Clock, ArrowLeft, Share2, ThumbsUp, MessageSquare } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function BlogPost({ params }: { params: { id: string } }) {
  // This would normally come from a database or API
  const post = {
    id: params.id,
    title: "Tối ưu hóa hiệu suất ứng dụng Java với Garbage Collection",
    date: "15/05/2025",
    readTime: "8 phút",
    category: "Java",
    image: "/java-gc-illustration.svg?height=600&width=1200",
    content: `
      <p>Trong phát triển ứng dụng Java, hiệu suất là yếu tố then chốt, đặc biệt với các ứng dụng quy mô lớn. Garbage Collection (GC) là một cơ chế quan trọng giúp quản lý bộ nhớ, nhưng nếu không được tối ưu, nó có thể gây ra độ trễ không mong muốn.</p>
      
      <h2>1. Hiểu về Garbage Collection trong Java</h2>
      <p>Garbage Collection tự động thu hồi bộ nhớ từ các đối tượng không còn được tham chiếu. Các thuật toán GC phổ biến bao gồm G1, CMS, và ZGC, mỗi loại phù hợp với các trường hợp sử dụng khác nhau.</p>
      <img src="/gc-process-diagram.svg?height=300&width=500" alt="Sơ đồ quy trình Garbage Collection" class="object-cover w-full my-4" />
      
      <h2>2. Điều chỉnh tham số GC</h2>
      <p>Các tham số JVM như <code>-Xms</code>, <code>-Xmx</code>, và <code>-XX:+UseG1GC</code> cho phép tinh chỉnh GC. Ví dụ, đặt <code>-XX:MaxGCPauseMillis=200</code> giúp giới hạn thời gian tạm dừng GC, phù hợp với ứng dụng thời gian thực.</p>
      <ul>
        <li>Sử dụng <code>-XX:+UseStringDeduplication</code> để giảm bộ nhớ cho chuỗi trùng lặp</li>
        <li>Kích hoạt <code>-XX:+UseCompressedOops</code> để tối ưu hóa con trỏ trên hệ thống 64-bit</li>
        <li>Đặt <code>-XX:G1HeapRegionSize</code> để điều chỉnh kích thước vùng heap</li>
      </ul>
      
      <h2>3. Sử dụng công cụ phân tích GC</h2>
      <p>Các công cụ như VisualVM, GCeasy, hoặc Java Mission Control cung cấp cái nhìn sâu sắc về hoạt động GC. Chúng giúp phát hiện các vấn đề như GC thường xuyên hoặc thời gian tạm dừng dài.</p>
      <img src="/visualvm-screenshot.svg?height=300&width=500" alt="Giao diện VisualVM phân tích GC" class="object-cover w-full my-4" />
      
      <h2>4. Tối ưu hóa mã nguồn</h2>
      <p>Viết mã hiệu quả giúp giảm tải cho GC:</p>
      <ul>
        <li>Tránh tạo đối tượng tạm thời trong vòng lặp chặt</li>
        <li>Sử dụng <code>StringBuilder</code> thay vì nối chuỗi với <code>+</code></li>
        <li>Giải phóng tài nguyên như luồng hoặc kết nối cơ sở dữ liệu ngay khi không cần</li>
      </ul>
      
      <h2>5. Giám sát và điều chỉnh liên tục</h2>
      <p>Hiệu suất GC cần được theo dõi trong môi trường thực tế. Sử dụng log GC (<code>-Xlog:gc</code>) và các công cụ giám sát để điều chỉnh tham số theo thời gian.</p>
      
      <h2>Kết luận</h2>
      <p>Tối ưu hóa Garbage Collection là bước quan trọng để xây dựng ứng dụng Java hiệu quả. Bằng cách hiểu thuật toán GC, tinh chỉnh tham số, sử dụng công cụ phân tích, và viết mã tối ưu, bạn có thể giảm độ trễ và nâng cao trải nghiệm người dùng.</p>
    `,
  }

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

      <div className="relative z-10 mx-auto max-w-3xl px-4 py-12">
        {/* Back button */}
        <Link href="/blog" className="inline-flex items-center text-zinc-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Quay lại Blog
        </Link>

        {/* Article header */}
        <article>
          <header className="mb-8">
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-zinc-400 mb-6">
              <div className="flex items-center gap-1">
                <CalendarDays className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden mb-8">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={1200}
                height={600}
                className="object-cover w-full"
              />
            </div>
          </header>

          {/* Article content */}
          <div
            className="prose prose-invert prose-yellow max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Article footer */}
          <div className="border-t border-zinc-800 pt-6 mt-12">
            <div className="flex justify-between items-center mb-8">
              <div className="flex gap-4">
                <Button variant="outline" size="sm" className="gap-2 border-zinc-700 hover:bg-zinc-800">
                  <ThumbsUp className="w-4 h-4" />
                  <span>Thích</span>
                </Button>
                <Button variant="outline" size="sm" className="gap-2 border-zinc-700 hover:bg-zinc-800">
                  <Share2 className="w-4 h-4" />
                  <span>Chia sẻ</span>
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-zinc-400 text-sm">Tags:</span>
                <Badge variant="outline" className="border-zinc-700">
                  Java
                </Badge>
                <Badge variant="outline" className="border-zinc-700">
                  Garbage Collection
                </Badge>
              </div>
            </div>

            {/* Author */}
            <div className="bg-zinc-900/60 rounded-lg p-6 border border-zinc-800">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Avatar" />
                  <AvatarFallback>B</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-bold">Blogger</h3>
                  <p className="text-zinc-400 text-sm">Người viết blog về Java và trí tuệ nhân tạo</p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Comments section */}
        <section className="mt-12">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <MessageSquare className="w-5 h-5" />
            Bình luận (3)
          </h2>

          <div className="space-y-6">
            {/* Comment form */}
            <div className="bg-zinc-900/60 rounded-lg p-4 border border-zinc-800">
              <div className="flex gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarFallback>G</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <textarea
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-md p-3 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Viết bình luận của bạn..."
                    rows={3}
                  />
                  <div className="flex justify-end mt-2">
                    <Button size="sm">Gửi bình luận</Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Comments */}
            {[1, 2, 3].map((comment) => (
              <div key={comment} className="bg-zinc-900/60 rounded-lg p-4 border border-zinc-800">
                <div className="flex gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback>{String.fromCharCode(64 + comment)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium">Người dùng {comment}</h4>
                      <span className="text-zinc-500 text-xs">{comment} ngày trước</span>
                    </div>
                    <p className="text-zinc-300 mt-2">
                      {comment === 1 &&
                        "Bài viết rất hữu ích! Tôi đã áp dụng các tham số GC và ứng dụng của tôi chạy mượt hơn rõ rệt."}
                      {comment === 2 &&
                        "Bạn có thể chia sẻ thêm về cách sử dụng ZGC không? Tôi đang gặp vấn đề với ứng dụng thời gian thực."}
                      {comment === 3 &&
                        "Cảm ơn vì bài viết. Phần về VisualVM thực sự giúp tôi hiểu rõ hơn về cách phân tích GC."}
                    </p>
                    <div className="flex gap-4 mt-2">
                      <button className="text-zinc-500 text-sm hover:text-white transition-colors">Thích</button>
                      <button className="text-zinc-500 text-sm hover:text-white transition-colors">Trả lời</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}