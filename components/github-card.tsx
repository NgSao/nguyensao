import Link from "next/link";
import { Github, Star, GitFork, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Project } from "@/types/project";

interface GitHubProjectCardProps {
    project: Project;
    isFeatured?: boolean;
}

export default function GitHubProjectCard({ project, isFeatured = false }: GitHubProjectCardProps) {
    return (
        <div
            className={`bg-zinc-900/60 rounded-lg overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all ${isFeatured ? "p-6" : "p-5"
                }`}
        >
            <div className="flex items-start justify-between mb-3">
                <div className="flex items-center">
                    <Github className="w-5 h-5 mr-2 text-zinc-400" />
                    <h3 className={`font-bold ${isFeatured ? "text-xl" : "text-lg"}`}>{project.title}</h3>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="flex items-center text-zinc-400">
                        <Star className={`mr-1 ${isFeatured ? "w-4 h-4" : "w-3 h-3"}`} />
                        <span className={isFeatured ? "" : "text-sm"}>{project.stars}</span>
                    </div>
                    <div className="flex items-center text-zinc-400">
                        <GitFork className={`mr-1 ${isFeatured ? "w-4 h-4" : "w-3 h-3"}`} />
                        <span className={isFeatured ? "" : "text-sm"}>{project.forks}</span>
                    </div>
                </div>
            </div>
            <p className={`text-zinc-300 mb-3 ${isFeatured ? "" : "text-sm line-clamp-2"}`}>
                {project.description}
            </p>
            <div className="flex flex-wrap gap-1 mb-3">
                {(isFeatured ? project.technologies : project.technologies.slice(0, 3)).map((tech, index) => (
                    <Badge
                        key={index}
                        variant="outline"
                        className={`border-zinc-700 text-zinc-300 ${isFeatured ? "" : "text-xs"}`}
                    >
                        {tech}
                    </Badge>
                ))}
                {!isFeatured && project.technologies.length > 3 && (
                    <Badge variant="outline" className="border-zinc-700 text-zinc-300 text-xs">
                        +{project.technologies.length - 3}
                    </Badge>
                )}
            </div>
            <div className={isFeatured ? "flex space-x-3" : ""}>
                <Button asChild size="sm" variant={isFeatured ? "default" : "outline"} className={isFeatured ? "" : "w-full"}>
                    <Link href={project.repoUrl} target="_blank" className="flex items-center justify-center">
                        <Github className="w-4 h-4 mr-2" />
                        {isFeatured ? "Repository" : "Xem trên GitHub"}
                    </Link>
                </Button>
                {isFeatured && project.demoUrl && (
                    <Button asChild size="sm" variant="outline">
                        <Link href={project.demoUrl} target="_blank" className="flex items-center">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                        </Link>
                    </Button>
                )}
            </div>
        </div>
    );
}