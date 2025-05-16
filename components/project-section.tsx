

import { Badge } from "@/components/ui/badge";
import WebProjectCard from "@/components/project-card-props";
import { Project } from "@/types/project";

interface WebProjectsSectionProps {
    projects: Project[];
}

export default function WebProjectsSection({ projects }: WebProjectsSectionProps) {
    return (
        <section className="mb-20">
            <div className="mb-12 text-center">
                <div className="inline-block mb-4">
                    <Badge className="bg-zinc-800 text-white px-4 py-1 text-sm">Dự án của tôi</Badge>
                </div>
                <h2 className="text-4xl font-bold mb-4">Xem các dự án mới nhất của tôi</h2>
                <p className="text-zinc-300 max-w-2xl mx-auto">
                    Tôi đã phát triển nhiều ứng dụng di động bằng React Native, đơn giản và
                    dưới đây là một vài dự án tiêu biểu mà tôi yêu thích.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <WebProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}