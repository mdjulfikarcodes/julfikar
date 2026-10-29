import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Code2 } from "lucide-react";
import type { portfolio } from "@/data/portfolio";

type Project = (typeof portfolio.projects)[number];

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="panel group p-4 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40">
      <div className="project-art">
        <Image src={project.image} alt={`${project.name} project preview`} width={760} height={420} />
      </div>
      <div className="px-1 pb-1 pt-5">
        <p className="text-xs font-bold uppercase tracking-[.13em] text-blue-300">{project.category}</p>
        <h3 className="mt-2 text-xl font-bold">{project.name}</h3>
        <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-400">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((tech) => <span className="rounded-lg border border-white/10 bg-white/[.035] px-2.5 py-1 text-xs text-slate-300" key={tech}>{tech}</span>)}
        </div>
        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
          <span className="flex items-center gap-2 text-xs text-slate-400"><Code2 size={15} /> Case study</span>
          <Link className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-300 hover:text-white" href={`/projects/${project.slug}`}>
            View Details <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
