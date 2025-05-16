export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    repoUrl: string;
    demoUrl?: string;
    stars: number;
    forks: number;
    technologies: string[];
    featured: boolean;
    period?: string;
}

// Featured GitHub projects
export const featuredProjects: Project[] = [
    {
        id: 1,
        title: "Ecommerce Microservices",
        description: "Là một hệ thống thương mại điện tử được xây dựng theo kiến trúc microservices, sử dụng Spring Boot, Spring Cloud, và các công nghệ hiện đại như Kafka, RabbitMQ, Redis, OAuth2, và WebSocket. Dự án hướng đến tính mở rộng, phân tán, bảo mật, và khả năng tích hợp linh hoạt.",
        image: "/placeholder.svg?height=400&width=600",
        repoUrl: "https://github.com/NgSao/ecommerce_microservices",
        stars: 3,
        forks: 0,
        technologies: ["Java", "Spring Boot", "Spring Colud", "Docker", "Microservices", "Kafka", "RabbitMQ", "WebSocket", "MySQL"],
        featured: true,
    },
    {
        id: 2,
        title: "Ecommerce Layered Architecture",
        description: "Một dự án demo thương mại điện tử được xây dựng theo kiến trúc phân lớp sử dụng Spring Boot. Dự án tích hợp các công nghệ hiện đại như Redis, Kafka, RabbitMQ, OAuth2, WebSocket, và Spring Security, hướng đến việc xây dựng một hệ thống mạnh mẽ, bảo mật, và dễ bảo trì",
        image: "https://raw.githubusercontent.com/NgSao/images/main/springboot/1747320474443_z6605545382325_5ef77e5d5f061cc406a38daaa408d6eb.jpg", // Bạn có thể thay bằng ảnh phù hợp
        repoUrl: "https://github.com/NgSao/ecommerce-layered-architecture",
        stars: 0,
        forks: 0,
        technologies: [
            "Java",
            "Spring Boot",
            "Spring Security",
            "Spring Data JPA",
            "Spring Kafka",
            "Spring AMQP (RabbitMQ)",
            "Redis",
            "MySQL",
            "WebSocket",

        ],
        featured: true,
    },
    {
        id: 3,
        title: "Hệ thống xác thực và phân quyền",
        description: "Hệ thống xác thực và phân quyền với Spring Boot, tích hợp OAuth2 (Google, Facebook), kiểm soát truy cập theo vai trò, sử dụng Redis để quản lý token thu hồi, gửi email kích hoạt và đặt lại mật khẩu. Sử dụng MySQL làm cơ sở dữ liệu chính.",
        image: "https://raw.githubusercontent.com/NgSao/images/main/springboot/auth-system.png",
        repoUrl: "https://github.com/NgSao/spring-security",
        stars: 2,
        forks: 0,
        technologies: [
            "Java 17",
            "Spring Boot 3.4.4",
            "Spring Security",
            "Spring Data JPA",
            "MySQL",
            "Redis",
            "OAuth2",
            "Spring Mail",
            "Lombok",
            "Maven"
        ],
        featured: true,
    },
    {
        id: 4,
        title: "Tích Hợp Thanh Toán Online",
        description: "Hướng dẫn tích hợp các cổng thanh toán PayPal, VnPay, ZaloPay và Momo vào ứng dụng Java Spring Boot. Bao gồm các bước tạo tài khoản, lấy API Key, cấu hình SDK và thử nghiệm trong môi trường Sandbox để thanh toán trực tuyến an toàn và hiệu quả.",
        image: "https://raw.githubusercontent.com/NgSao/images/main/springboot/payment-integration.png",
        repoUrl: "https://github.com/NgSao/paymentonline",
        stars: 3,
        forks: 0,
        technologies: [
            "Java 17",
            "Spring Boot",
            "PayPal SDK",
            "VnPay SDK",
            "ZaloPay SDK",
            "Momo SDK",
            "Postman"
        ],
        featured: true,
    }



];

// Other GitHub projects
export const otherProjects: Project[] = [
    {
        id: 10,
        title: "Git From Zero To Hero",
        description:
            "Chào mừng đến với dự án học Git từ zero đến hero - hỗ trợ song ngữ Tiếng Việt và Tiếng Anh. Tài liệu hướng dẫn đầy đủ về Git và GitHub.",
        image: "/placeholder.svg?height=200&width=300",
        repoUrl: "",
        stars: 1,
        forks: 0,
        technologies: ["Git", "Documentation", "Tutorial"],
        featured: false,
    },
    {
        id: 11,
        title: "Git Workflow",
        description: "Các câu lệnh git cơ bản và các bước tạo một dự án mới có thể sử dụng.",
        image: "/placeholder.svg?height=200&width=300",
        repoUrl: "",
        stars: 1,
        forks: 0,
        technologies: ["Git", "Workflow", "Documentation"],
        featured: false,
    },
    {
        id: 12,
        title: "Lottery Info Plugin WordPress",
        description:
            "Plugin này được thiết kế để cập nhật nhanh chóng, hiển thị rõ ràng và dễ dàng tích hợp vào WordPress.",
        image: "/placeholder.svg?height=200&width=300",
        repoUrl: "",
        stars: 1,
        forks: 0,
        technologies: ["WordPress", "PHP", "Plugin", "JavaScript"],
        featured: false,
    },
];

// Web development projects
export const webProjects: Project[] = [
    {
        id: 21,
        title: "Xây dựng Blog cá nhân với Next.js",
        description: "Một blog cá nhân được xây dựng với Next.js hỗ trợ viết bài, phân loại theo chuyên mục, hiển thị bài viết theo SEO, giao diện tối giản và thân thiện với người đọc. Hỗ trợ Markdown và có tích hợp tính năng tìm kiếm.",
        period: "Tháng 5 2024 - Tháng 6 2024",
        image: "/blog.png?height=400&width=600",
        repoUrl: "https://github.com/yourname/personal-blog-nextjs",
        technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Markdown", "Vercel"],
        demoUrl: "#",
        stars: 0,
        forks: 0,
        featured: true,
    },
    {
        id: 22,
        title: "Xây dựng ứng dụng của bằng điện thoại MT Mobile",
        description: `Ứng dụng MT Mobile cho phép người dùng duyệt sản phẩm, đặt hàng và theo dõi đơn hàng. Sử dụng Spring Boot cho backend và React Native cho frontend di động.  
Phát triển hệ thống thương mại điện tử B2C đa lớp với backend sử dụng Spring Boot và ứng dụng di động bằng React Native. Các tính năng chính bao gồm:  
- Đăng nhập OAuth2 (Email/Google), xác thực OTP, đặt lại mật khẩu  
- Duyệt sản phẩm, đánh giá sản phẩm, quản lý đơn hàng, lịch sử và huỷ đơn  
- Chat thời gian thực với cửa hàng thông qua WebSocket và tích hợp AI Chatbot (Genni)  
- Hỗ trợ nhiều hình thức thanh toán (Momo, VNPay, SeePay)  
- Tích hợp API vận chuyển (GHN, GHTK)  
- Xây dựng giao diện quản trị viên cho phép cập nhật đơn hàng, quản lý người dùng và sản phẩm, phân quyền truy cập, và kiểm duyệt đánh giá  
- Sử dụng RabbitMQ để giao tiếp giữa các dịch vụ và Kafka cho xử lý đơn hàng theo hướng sự kiện, kết hợp gửi thông báo qua email với Spring Mail.`,
        period: "Tháng 3 2024 - Tháng 6 2025",
        image: "https://raw.githubusercontent.com/NgSao/images/main/springboot/1747320474443_z6605545382325_5ef77e5d5f061cc406a38daaa408d6eb.jpg",
        repoUrl: "https://github.com/NgSao/ecommer-app-reactnative",
        technologies: ["SpringBoot", "ReactNative", "Redux", "Kafka", "RabbitMQ", "WebSocket", "MySQL"],
        demoUrl: "https://github.com/NgSao/ecommer-app-reactnative",
        stars: 0,
        forks: 0,
        featured: true,
    }

];