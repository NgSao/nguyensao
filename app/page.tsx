import Image from "next/image"
import { Github, Linkedin, Mail, ExternalLink, Code, Terminal } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import SkillsSection from "@/components/skills-section"
import AnimatedStarsBackground from "@/components/animated-stars-background"
import ProjectsSection from "@/components/project-section"
import FeaturedGitHubProjectsSection from "@/components/github-feauted-section"
import { featuredProjects } from "@/data/projects-data"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated Stars Background */}
      <AnimatedStarsBackground />

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-12">
        {/* Header */}
        <div className="flex justify-end mb-8">
          <a
            href="https://www.canva.com/design/DAGZajinjek/AMx1Vlx__nmGXtjIhjl7mQ/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="rounded-full bg-zinc-900/80 text-white border-zinc-700 hover:bg-zinc-800"
            >
              <span className="mr-2">✨</span> Xem thêm về tôi với CV →
            </Button>
          </a>
        </div>



        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
          <div className="flex-1">
            {/* <h1 className="text-4xl font-bold mb-4">
              Xin chào, Tôi là <span className="text-yellow-400">Sao Nguyen</span> 👋
            </h1> */}
            <h1 className="text-4xl font-bold mb-4 flex items-center gap-2">
              Xin chào, Tôi là
              <span className="relative flex items-center gap-2 text-yellow-400 font-extrabold animate-glow">
                Sao Nguyen
                <svg
                  className="w-6 h-6 text-yellow-300 animate-spin"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09L5.64 12.18 1 8.09l6.06-.91L10 2l2.94 5.18L19 8.09l-4.64 4.09 1.518 5.91z" />
                </svg>
              </span>
            </h1>


            <p className="text-zinc-300 mb-6">
              Là một kỹ sư phần mềm mới bắt đầu sự nghiệp, tôi đang xây dựng nền tảng vững chắc về phát triển Backend với Java và Spring Boot, cùng kinh nghiệm thực hành với RESTful APIs qua các dự án nhỏ.
              Tôi rất mong muốn được đồng hành và học hỏi trong môi trường doanh nghiệp chuyên nghiệp để nâng cao kỹ năng và đóng góp vào các sản phẩm thực tiễn.
            </p>
          </div>
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-zinc-700 relative">
            <Image
              src="/avatar.png"
              alt="Profile picture"
              fill
              className="object-cover"
            />
          </div>

        </div>

        {/* About Me Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Tóm Tắt Bản Thân</h2>
          <div className="text-zinc-300 space-y-4">
            <p>
              Tôi là một sinh viên công nghệ thông tin, đam mê phát triển phần mềm với định hướng trở thành Java Backend Developer.
              Tôi luôn chủ động học hỏi và không ngừng rèn luyện kỹ năng lập trình thông qua các dự án thực tế và bài tập chuyên môn.
            </p>
            <p>
              Tôi có nền tảng cơ bản về Java, Spring Boot, RESTful APIs, cùng với kiến thức về cơ sở dữ liệu SQL, Kafka, và Redis.
              Ngoài ra, tôi cũng tìm hiểu và thực hành với các công nghệ frontend như ReactJS và React Native.
            </p>
            <p>
              Với tinh thần cầu tiến và trách nhiệm, tôi mong muốn được làm việc trong môi trường chuyên nghiệp, nơi tôi có thể học hỏi thêm từ các anh chị đi trước, đóng góp vào dự án thực tế và từng bước phát triển sự nghiệp lập trình của mình.
            </p>
          </div>
        </section>


        {/* Skills Section */}
        <SkillsSection />

        {/* Experience Section */}
        {/* <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Kinh Nghiệm Làm Việc</h2>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0">
                <Code className="w-6 h-6 text-yellow-400" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="font-bold text-lg">Tech Blog Editor</h3>
                  <span className="text-zinc-400 text-sm">Tháng 1 2023 - Hiện tại</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                    Content
                  </Badge>
                  <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                    SEO
                  </Badge>
                  <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                    WordPress
                  </Badge>
                </div>
                <p className="text-zinc-300">
                  Quản lý và phát triển nội dung cho blog công nghệ với hơn 10,000 người đọc hàng tháng. Tối ưu hóa SEO
                  và phân tích dữ liệu để cải thiện hiệu suất.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0">
                <Terminal className="w-6 h-6 text-green-400" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="font-bold text-lg">Freelance Writer</h3>
                  <span className="text-zinc-400 text-sm">Tháng 6 2021 - Tháng 12 2022</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                    Content
                  </Badge>
                  <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                    Research
                  </Badge>
                  <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                    Editing
                  </Badge>
                </div>
                <p className="text-zinc-300">
                  Viết bài cho nhiều trang web và ấn phẩm khác nhau về các chủ đề công nghệ, phát triển cá nhân và xu
                  hướng thị trường.
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Giáo Dục</h2>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0 overflow-hidden border-2 border-white">
                <Image
                  src="https://hitu.edu.vn/wp-content/uploads/2021/12/favicon.ico"
                  alt="HITC Logo"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="font-bold text-lg">Cao Đẳng Công Thương TP. Hồ Chí Minh (HITC)</h3>
                  <span className="text-zinc-400 text-sm">2022 - 2025</span>
                </div>
                {/* <p className="text-zinc-300 font-medium mb-2">Cử nhân</p> */}
                <p className="text-zinc-400">
                  Chuyên ngành công nghề phần mền.
                </p>
              </div>
            </div>
          </div>
        </section>


        <FeaturedGitHubProjectsSection projects={featuredProjects} />


      </div>

    </div>
  )
}
