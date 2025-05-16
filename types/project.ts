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