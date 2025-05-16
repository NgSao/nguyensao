"use client"

export default function SkillsSection() {
  // All skills in a flat array
  const skills = [
    // Backend
    { name: "JAVA", color: "#F89820", icon: "☕" },
    { name: "SPRING", color: "#6DB33F", icon: "🍃" },
    { name: "HIBERNATE", color: "#59666C", icon: "🔄" },
    { name: "MICROSERVICES", color: "#1E88E5", icon: "🔌" },

    // Databases
    { name: "MYSQL", color: "#00758F", icon: "🐬" },
    { name: "SQL SERVER", color: "#CC2927", icon: "🗄️" },
    { name: "MONGODB", color: "#4DB33D", icon: "🍃" },

    // Cache
    { name: "REDIS", color: "#DC382D", icon: "🔄" },

    // Message Brokers
    { name: "RABBITMQ", color: "#FF6600", icon: "🐇" },
    { name: "APACHE KAFKA", color: "#000000", icon: "🔄" },

    // DevOps & CI/CD
    { name: "DOCKER", color: "#2496ED", icon: "🐳" },

    // Frontend
    { name: "REACT NATIVE", color: "#61DAFB", icon: "⚛️" },
    { name: "REACT", color: "#61DAFB", icon: "⚛️" },

    // Tools & Utilities
    { name: "GIT", color: "#F05032", icon: "🔄" },
    { name: "POSTMAN", color: "#FF6C37", icon: "📮" },
    { name: "SWAGGER", color: "#85EA2D", icon: "📝" },
  ]

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-6">Kỹ Năng</h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="inline-flex items-center px-3 py-1.5 rounded text-white text-sm font-medium transition-transform hover:scale-105"
            style={{ backgroundColor: skill.color }}
          >
            <span className="mr-2">{skill.icon}</span>
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  )
}
