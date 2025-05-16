import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Project } from "@/types/project";

interface WebProjectCardProps {
    project: Project;
}

export default function WebProjectCard({ project }: WebProjectCardProps) {
    return (
        <div className="bg-zinc-900/60 rounded-lg overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all group">
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">
                            {project.title}
                        </h3>
                        <div className="text-sm text-zinc-300 mb-2">{project.period}</div>
                    </div>
                </div>
            </div>
            <div className="p-6">
                <p className="text-zinc-300 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="outline" className="border-zinc-700 text-zinc-300">
                            {tech}
                        </Badge>
                    ))}
                </div>
                {project.demoUrl && (
                    <Button asChild size="sm" variant="default">
                        <Link href={project.demoUrl} target="_blank" className="flex items-center">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Xem Website
                        </Link>
                    </Button>
                )}
            </div>
        </div>
    );
}