import { Badge } from "@/components/ui/badge";
import GitHubProjectCard from "@/components/github-card";
import { Project } from "@/types/project";

interface FeaturedGitHubProjectsSectionProps {
    projects: Project[];
}

export default function FeaturedGitHubProjectsSection({ projects }: FeaturedGitHubProjectsSectionProps) {
    return (
        <section className="mb-20">
            <div className="mb-12 text-center">
                <div className="inline-block mb-4">
                    <Badge className="bg-zinc-800 text-white px-4 py-1 text-sm">Github Projects</Badge>
                </div>
                <h1 className="text-4xl font-bold mb-4">Các dự án mã nguồn mở của tôi</h1>
                <p className="text-zinc-300 max-w-2xl mx-auto">
                    Dưới đây là một số dự án nổi bật của tôi.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <GitHubProjectCard key={project.id} project={project} isFeatured={true} />
                ))}
            </div>
        </section>
    );
}
