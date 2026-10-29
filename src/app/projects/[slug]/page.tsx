import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, ExternalLink, Github } from "lucide-react";
import { portfolio } from "@/data/portfolio";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return portfolio.projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolio.projects.find((item) => item.slug === slug);
  return {
    title: project ? project.name : "Project Not Found",
    description: project?.description,
  };
}

export default async function ProjectDetailsPage({ params }: Props) {
  const { slug } = await params;
  const project = portfolio.projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const hasLiveDemo = Boolean(project.liveUrl && project.liveUrl !== "#");

  return (
    <main className="container min-h-screen py-12 sm:py-16">
      <Link href="/#projects" className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white"><ArrowLeft size={16} /> Back to all projects</Link>
      <div className="grid gap-8 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <p className="section-kicker">{project.category}</p>
          <h1 className="section-title mt-3">{project.name}</h1>
          <p className="section-copy">{project.description}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            {hasLiveDemo ? (
              <a className="btn btn-primary" href={project.liveUrl} target="_blank" rel="noreferrer"><ExternalLink size={17} /> Live Project</a>
            ) : (
              <span className="btn btn-secondary cursor-not-allowed opacity-60" aria-disabled="true"><ExternalLink size={17} /> Live demo coming soon</span>
            )}
            <a className="btn btn-secondary" href={project.repoUrl} target="_blank" rel="noreferrer"><Github size={17} /> GitHub Repository</a>
          </div>
          <div className="project-art mt-9">
            <Image src={project.image} alt={`${project.name} project screenshot`} width={1200} height={675} priority />
          </div>
        </div>
        <aside className="panel h-fit p-6 sm:p-7">
          <p className="section-kicker">Project overview</p>
          <h2 className="mt-3 text-xl font-bold">Technology stack</h2>
          <div className="mt-4 flex flex-wrap gap-2">{project.tech.map((tech) => <span className="skill-chip" key={tech}>{tech}</span>)}</div>
          <div className="mt-7 border-t border-white/10 pt-6">
            <h2 className="text-xl font-bold">Project links</h2>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              {hasLiveDemo ? (
                <a className="flex items-center gap-2 text-slate-300 hover:text-white" href={project.liveUrl} target="_blank" rel="noreferrer"><ExternalLink size={16} className="text-blue-300" /> Open live demo <ArrowUpRight size={14} /></a>
              ) : (
                <span className="flex items-center gap-2 text-slate-500"><ExternalLink size={16} className="text-slate-600" /> Live demo coming soon</span>
              )}
              <a className="flex items-center gap-2 text-slate-300 hover:text-white" href={project.repoUrl} target="_blank" rel="noreferrer"><Github size={16} className="text-blue-300" /> View source code <ArrowUpRight size={14} /></a>
            </div>
          </div>
        </aside>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <section className="panel p-6 sm:p-8">
          <h2 className="flex items-center gap-2 text-xl font-bold"><span className="rounded-lg bg-blue-400/10 p-2 text-blue-300"><CheckCircle2 size={18} /></span> Challenges faced</h2>
          <ul className="mt-5 space-y-4">{project.challenges.map((item) => <li className="flex gap-3 text-sm leading-7 text-slate-400" key={item}><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300" />{item}</li>)}</ul>
        </section>
        <section className="panel p-6 sm:p-8">
          <h2 className="flex items-center gap-2 text-xl font-bold"><span className="rounded-lg bg-violet-400/10 p-2 text-violet-300"><ArrowUpRight size={18} /></span> Future improvements</h2>
          <ul className="mt-5 space-y-4">{project.improvements.map((item) => <li className="flex gap-3 text-sm leading-7 text-slate-400" key={item}><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-300" />{item}</li>)}</ul>
        </section>
      </div>
      <div className="mt-10 text-center"><Link className="btn btn-secondary" href="/#projects"><ArrowLeft size={16} /> Explore more projects</Link></div>
    </main>
  );
}
