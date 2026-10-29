
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "/#top", id: "" },
  { label: "About", href: "/#about", id: "about" },
  { label: "Skills", href: "/#skills", id: "skills" },
  { label: "Education", href: "/#education", id: "education" },
  { label: "Experience", href: "/#experience", id: "experience" },
  { label: "Projects", href: "/#projects", id: "projects" },
  { label: "Contact", href: "/#contact", id: "contact" },
];

const sectionIds = links
  .map(({ id }) => id)
  .filter((id): id is string => id.length > 0);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const updateActiveSection = () => {
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter((section): section is HTMLElement => section !== null);

      if (sections.length === 0) {
        setActiveSection("");
        return;
      }

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5;

      if (atBottom) {
        setActiveSection("contact");
        return;
      }

      let currentSection = "";

      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;

        if (top <= window.innerHeight * 0.35) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="nav-shell">
      <nav className="container flex min-h-[74px] items-center justify-between gap-5">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 font-extrabold tracking-tight"
          onClick={closeMenu}
        >
          <span>
            MD <span className="gradient-text">JULFIKAR ALI</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map(({ label, href, id }) => {
            const isActive = activeSection === id;

            return (
              <Link
                className={`nav-link ${isActive ? "active" : ""}`}
                href={href}
                key={label}
                aria-current={isActive ? "location" : undefined}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Desktop Contact Button */}
        <Link
          href="/#contact"
          className="btn btn-primary hidden md:inline-flex"
        >
          Let&apos;s Talk
        </Link>

        {/* Hamburger: mobile only */}
        <button
          type="button"
          className="btn btn-secondary md:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((previous) => !previous)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {open && (
        <div
          className="container flex flex-col gap-1 pb-5 md:hidden"
          id="mobile-navigation"
        >
          {links.map(({ label, href, id }) => {
            const isActive = activeSection === id;

            return (
              <Link
                className={`mobile-nav-link ${
                  isActive ? "active" : ""
                }`}
                href={href}
                key={label}
                onClick={closeMenu}
                aria-current={isActive ? "location" : undefined}
              >
                {label}
              </Link>
            );
          })}

          <Link
            className="btn btn-primary mt-2"
            href="/#contact"
            onClick={closeMenu}
          >
            Let&apos;s Talk
          </Link>
        </div>
      )}
    </header>
  );
}
