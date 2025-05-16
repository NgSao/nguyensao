import GitHubProjectCard from "./github-card";
import { Project } from "@/types/project";

interface OtherGitHubProjectsSectionProps {
    projects: Project[];
}

export default function OtherGitHubProjectsSection({ projects }: OtherGitHubProjectsSectionProps) {
    return (
        <section className="mb-20">
            <h2 className="text-2xl font-bold mb-6">Các dự án khác</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <GitHubProjectCard key={project.id} project={project} isFeatured={false} />
                ))}
            </div>
        </section>
    );
}