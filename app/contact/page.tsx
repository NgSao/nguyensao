import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
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

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Liên Hệ</h1>
          <p className="text-zinc-300 max-w-2xl mx-auto">
            Bạn có câu hỏi hoặc muốn hợp tác? Hãy liên hệ với tôi qua form bên dưới hoặc thông qua các kênh liên lạc
            khác.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="md:col-span-1 space-y-6">
            <Card className="bg-zinc-900/60 border-zinc-800">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-zinc-300">Email</h3>
                    <p className="text-white">nguyensaovn2019@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/60 border-zinc-800">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-zinc-300">Điện thoại</h3>
                    <p className="text-white">+84 392 445 255</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/60 border-zinc-800">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-zinc-300">Địa chỉ</h3>
                    <p className="text-white">Đường số 18, Linh Trung, Thủ Đức</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <Card className="bg-zinc-900/60 border-zinc-800">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Gửi tin nhắn</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-zinc-300">
                        Họ và tên
                      </label>
                      <Input
                        id="name"
                        placeholder="Nhập họ và tên của bạn"
                        className="bg-zinc-800 border-zinc-700 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-zinc-300">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Nhập địa chỉ email của bạn"
                        className="bg-zinc-800 border-zinc-700 text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-zinc-300">
                      Tiêu đề
                    </label>
                    <Input
                      id="subject"
                      placeholder="Nhập tiêu đề tin nhắn"
                      className="bg-zinc-800 border-zinc-700 text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-zinc-300">
                      Nội dung
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Nhập nội dung tin nhắn của bạn"
                      className="bg-zinc-800 border-zinc-700 text-white min-h-[150px]"
                    />
                  </div>

                  <Button type="submit" className="w-full flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" />
                    Gửi tin nhắn
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map */}
            <div className="mt-6 rounded-lg overflow-hidden border border-zinc-800 h-[300px] bg-zinc-900/60">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.446430717289!2d106.762710614623!3d10.850761992270974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175270d7d8f6897%3A0x9d842827cd588b6e!2zxJDGsOG7nW5nIHPDoCAxOCwgTGluaCBUcnVuZywgVGjhu6kgxJDhu6ljLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2sus!4v1698765432109!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}