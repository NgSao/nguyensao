"use client"

export default function SkillsSection() {
  const skills = [
    // Backend
    { name: "JAVA", url: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white" },
    { name: "SPRING", url: "https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white" },
    { name: "HIBERNATE", url: "https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=Hibernate&logoColor=white" },
    { name: "MICROSERVICES", url: "https://img.shields.io/badge/Microservices-2A2A2A?style=for-the-badge&logo=docker&logoColor=white" },

    // Databases
    { name: "MYSQL", url: "https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white" },
    { name: "SQL SERVER", url: "https://img.shields.io/badge/sql%20server-%23CC2927.svg?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white" },
    { name: "MONGODB", url: "https://img.shields.io/badge/mongodb-%2347A248.svg?style=for-the-badge&logo=mongodb&logoColor=white" },

    // Cache
    { name: "REDIS", url: "https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white" },

    // Message Brokers
    { name: "RABBITMQ", url: "https://img.shields.io/badge/RabbitMQ-FF6600?style=for-the-badge&logo=rabbitmq&logoColor=white" },
    { name: "APACHE KAFKA", url: "https://img.shields.io/badge/Apache%20Kafka-000?style=for-the-badge&logo=apachekafka" },

    // DevOps & CI/CD
    { name: "DOCKER", url: "https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" },

    // Frontend
    { name: "REACT NATIVE", url: "https://img.shields.io/badge/react%20native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" },
    { name: "REACT", url: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" },

    // Tools & Utilities
    { name: "GIT", url: "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" },
    { name: "POSTMAN", url: "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" },
    { name: "SWAGGER", url: "https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white" },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-6">Kỹ Năng</h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <img
            key={index}
            src={skill.url}
            alt={skill.name}
            className="transition-transform hover:scale-105  cursor-pointer"
          />
        ))}
      </div>
    </section>
  );
}
