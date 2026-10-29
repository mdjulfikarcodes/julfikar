import Link from "next/link";
import { ArrowUp, Code2 } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <Code2 size={19} className="text-blue-300" /> {portfolio.name}
        </Link>
        <p className="text-xs text-slate-500">© {new Date().getFullYear()} {portfolio.name}. Built with Next.js.</p>
        <Link href="/#top" className="btn btn-secondary" aria-label="Back to top"><ArrowUp size={16} /> Back to top</Link>
      </div>
    </footer>
  );
}
