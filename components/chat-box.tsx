"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { Send, X, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import axios from "axios"

interface Message {
    role: "user" | "bot"
    content: string
}

export default function ChatBox() {
    const [isOpen, setIsOpen] = useState(false)
    const [input, setInput] = useState("")
    const [messages, setMessages] = useState<Message[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [canSubmit, setCanSubmit] = useState(true)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    // Scroll to bottom of messages
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])

    // Send welcome message with suggested questions when chat is opened
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setMessages([
                {
                    role: "bot",
                    content: `👋 Xin chào, tôi là Nguyễn Sao – rất vui được gặp bạn!  
Bạn cần biết gì từ tôi? Dưới đây là một vài gợi ý bạn có thể hỏi:  
- 📌 [Bạn là ai?]  
- 📞 [Thông tin liên hệ của bạn?]  
- 💼 [Kỹ năng của bạn là gì?]  
- 🚀 [Bạn đã làm những dự án nào?]

Hãy chọn một câu hỏi hoặc nhập bất cứ điều gì bạn muốn hỏi nhé!`

                },
            ])
        }
    }, [isOpen, messages.length])

    const handleSubmit = async (e: React.FormEvent, question?: string) => {
        e.preventDefault();
        const userMessage = question || input.trim();
        if (!userMessage) return;

        setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
        setInput("");
        setIsLoading(true);
        setCanSubmit(false);
        setTimeout(() => setCanSubmit(true), 2000);

        try {
            const normalizedMessage = userMessage.toLowerCase().replace(/\s+/g, " ").trim();
            let response = "";

            if (normalizedMessage.includes("bạn là ai") || normalizedMessage.includes("giới thiệu bản thân")) {
                response = `
Tôi là Nguyễn Sao, sinh ngày 29/06/2004, hiện là sinh viên công nghệ thông tin. 
Tôi đam mê phát triển phần mềm, định hướng trở thành Java Backend Developer. 
Kỹ năng: Java, Spring Boot, RESTful APIs, MySQL, SQL Server, Kafka, Redis, React Native. 
Mục tiêu: Trở thành thực tập sinh Java và làm việc toàn thời gian, tiếp tục học đại học.
            `.trim();
            } else if (normalizedMessage.includes("liên hệ") || normalizedMessage.includes("contact")) {
                response = `
Thông tin liên hệ của tôi:  
- Số điện thoại: 0392445255  
- Email: nguyensaovn2019@gmail.com  
- Địa chỉ: Linh Trung, Thủ Đức  
- Website: https://nguyensao.id.vn
            `.trim();
            } else if (normalizedMessage.includes("kỹ năng") || normalizedMessage.includes("skills")) {
                response = `
Kỹ năng của tôi:  
- Ngôn ngữ: Java  
- Ứng dụng di động: React Native với Expo  
- Backend: Spring Boot (RESTful APIs, MVC), Spring Security, WebSocket, RabbitMQ  
- Cơ sở dữ liệu: MySQL, SQL Server  
- DevOps: Docker  
- Công cụ: Github, Postman  
- Kỹ năng mềm: Tự học, làm việc nhóm, ham học hỏi
            `.trim();
            } else if (normalizedMessage.includes("dự án") || normalizedMessage.includes("project")) {
                response = `
Dự án của tôi:  
1. **Ecommerce Microservices (3/2025 - 5/2025)**  
   - Vai trò: Backend  
   - Công nghệ: Java 17, Spring Boot, Kafka, RabbitMQ, Redis, OAuth2, MySQL, Docker  
   - Github: https://github.com/NgSao/ecommerce_microservices  

2. **E-Commerce App (3/2025 - 6/2025)**  
   - Vai trò: FullStack  
   - Công nghệ: Java 17, Spring Boot, React Native, Kafka, Redis, OAuth2, MySQL, Docker  
   - Github: https://github.com/NgSao/ecommerce-layered-architecture, https://github.com/NgSao/ecommer-app-reactnativ
            `.trim();
            } else {
                // Fallback to Gemini API (same as before, unchanged)
                const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "YOUR_API_KEY";
                const context = `...`; // (unchanged context)
                const res = await axios.post(
                    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
                    { contents: [{ parts: [{ text: `${context}\nCâu hỏi: ${userMessage}` }] }] },
                    { headers: { "Content-Type": "application/json" } }
                );
                response = res.data.candidates?.[0]?.content?.parts?.[0]?.text || "Không có phản hồi.";
            }

            setMessages((prev) => [...prev, { role: "bot", content: response }]);
        } catch (error) {
            console.error("Lỗi:", error);
            setMessages((prev) => [...prev, { role: "bot", content: "Đã xảy ra lỗi. Vui lòng thử lại sau." }]);
        } finally {
            setIsLoading(false);
        }
    };

    // Handle suggested question click
    const handleSuggestedQuestion = (question: string) => {
        const mockEvent = { preventDefault: () => { } } as React.FormEvent
        setInput(question)
        handleSubmit(mockEvent, question)
    }

    return (
        <>
            {/* Chat button */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-4 right-4 w-14 h-14 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400 text-white flex items-center justify-center shadow-lg hover:shadow-yellow-500/30 hover:scale-105 transition-all duration-300 z-50 animate-pulse-slow md:bottom-6 md:right-6"
                aria-label="Mở hộp chat"
            >
                <div className="absolute w-full h-full rounded-full bg-yellow-500 animate-ping opacity-20"></div>
                <MessageSquare className="w-6 h-6 relative z-10" />
            </button>

            {/* Chat box - rendered using portal */}
            {isOpen &&
                typeof document !== "undefined" &&
                createPortal(
                    <div className="fixed bottom-4 right-2 w-[calc(100%-1rem)] max-w-[360px] h-[70vh] max-h-[500px] bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl flex flex-col z-50 sm:bottom-6 sm:right-4 sm:w-80 sm:max-w-[400px] sm:h-[80vh] sm:max-h-[600px]">                        {/* Chat header */}
                        <div className="flex items-center justify-between p-3 sm:p-4 border-b border-zinc-800 bg-zinc-900 rounded-t-xl">
                            <div className="flex items-center gap-2 sm:gap-3">
                                <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
                                    <AvatarImage src="/avatar.png?height=40&width=40" alt="AI Assistant" />
                                    <AvatarFallback>NS</AvatarFallback>
                                </Avatar>
                                <div>
                                    <h3 className="font-semibold text-white text-sm sm:text-lg">Nguyễn Sao</h3>
                                    <p className="text-xs text-zinc-400">AI Assistant</p>
                                </div>
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-7 w-7 sm:h-8 sm:w-8 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800"
                                onClick={() => setIsOpen(false)}
                                aria-label="Đóng hộp chat"
                            >
                                <X className="h-4 w-4 sm:h-5 sm:w-5" />
                            </Button>
                        </div>

                        {/* Chat messages */}
                        <div className="flex-1 overflow-y-auto p-2 sm:p-4 space-y-2 sm:space-y-4 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-900">
                            {messages.map((message, index) => (
                                <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                                    <div
                                        className={`max-w-[90%] sm:max-w-[90%] rounded-lg p-2 sm:p-3 text-sm leading-relaxed ${message.role === "user" ? "bg-yellow-500 text-white" : "bg-zinc-800 text-zinc-100"
                                            } break-words`}
                                    >
                                        <p className="whitespace-pre-wrap">
                                            {message.content.split('\n').map((line, i) => {
                                                const match = line.match(/\[(.+?)\]/)
                                                if (match) {
                                                    const question = match[1]
                                                    return (
                                                        <button
                                                            key={i}
                                                            type="button"
                                                            onClick={() => handleSuggestedQuestion(question)}
                                                            className="text-yellow-400 hover:text-yellow-300 underline mx-0.5 sm:mx-1"
                                                            aria-label={`Hỏi: ${question}`}
                                                        >
                                                            {`[${question}]`}
                                                        </button>
                                                    )
                                                }
                                                return (
                                                    <span key={i}>
                                                        {line}
                                                        <br />
                                                    </span>
                                                )
                                            })}
                                        </p>
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="max-w-[85%] sm:max-w-[80%] rounded-lg p-2 sm:p-3 bg-zinc-800 text-zinc-100 flex items-center">
                                        <span className="animate-pulse text-sm">Đang xử lý...</span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Chat input */}
                        <div className="p-2 sm:p-4 border-t border-zinc-800 bg-zinc-900">
                            <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3">
                                <div className="flex gap-1 sm:gap-2">
                                    <Textarea
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        placeholder="Nhập tin nhắn..."
                                        className="min-h-8 sm:min-h-10 resize-none bg-zinc-800 border-zinc-700 text-white placeholder-zinc-400 focus:ring-yellow-500 focus:border-yellow-500 text-sm sm:text-base"
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter" && !e.shiftKey) {
                                                e.preventDefault()
                                                handleSubmit(e)
                                            }
                                        }}
                                        aria-label="Nhập tin nhắn"
                                    />
                                    <Button
                                        type="submit"
                                        size="icon"
                                        disabled={isLoading || !input.trim() || !canSubmit}
                                        className="h-8 sm:h-10 w-8 sm:w-10 rounded-full bg-yellow-500 hover:bg-yellow-600 disabled:bg-yellow-700"
                                        aria-label="Gửi tin nhắn"
                                    >
                                        <Send className="h-3 w-3 sm:h-4 sm:w-4" />
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>,
                    document.body
                )}
        </>
    )
}

