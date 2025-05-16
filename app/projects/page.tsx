import WebProjectsSection from "@/components/project-section";
import FeaturedGitHubProjectsSection from "@/components/github-feauted-section";
import OtherGitHubProjectsSection from "@/components/github-other-section";
import { featuredProjects, otherProjects, webProjects } from "@/data/projects-data";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Stars background */}
      <div className="fixed inset-0 z-0 opacity-30">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 1 + "px",
              height: Math.random() * 2 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-12">
        <WebProjectsSection projects={webProjects} />
        <FeaturedGitHubProjectsSection projects={featuredProjects} />
      </div>
    </div>
  );
}