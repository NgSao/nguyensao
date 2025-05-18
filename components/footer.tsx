
import { Github, Linkedin, Mail, ExternalLink, Phone } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-black border-t border-zinc-900 py-12 text-center ">
            <div className="container mx-auto px-4">
                <div className="mb-6">
                    <span className="inline-block px-4 py-1.5 bg-zinc-900 rounded-full text-sm text-zinc-300">Liên Hệ</span>
                </div>
                <h2 className="text-4xl font-bold mb-4">Nhắn Tin Với Tôi</h2>
                <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
                    Nếu bạn có bất kỳ câu hỏi nào hoặc muốn trao đổi về cơ hội hợp tác, vui lòng liên hệ với tôi qua các kênh sau:
                </p>
                <div className="bg-black/80 backdrop-blur-sm  sticky top-0 z-40 pb-10 ">
                    <div className="flex justify-center space-x-4">
                        <a
                            href="https://github.com/NgSao"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/sao-nguy%E1%BB%85n-713655254/"
                            target="_blank"
                            className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                            href="mailto:nguyensaovn2019@gmail.com"
                            className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors"
                        >
                            <Mail className="w-5 h-5" />
                        </a>
                        <a
                            href="tel:039244255"
                            className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors"
                        >
                            <Phone className="w-5 h-5" />
                        </a>
                        <a
                            href="https://zalo.me/039244255"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors"
                        >
                            <ExternalLink className="w-5 h-5" />
                        </a>

                    </div>

                </div>

                <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
                    Tôi rất mong được nghe phản hồi từ bạn và sẵn sàng trao đổi thêm về các dự án cũng như cơ hội hợp tác.
                </p>
                <p className="text-zinc-600 text-sm mb-10">Cập nhật lần cuối: 16/05/2025</p>
            </div>

        </footer>
    )
}
