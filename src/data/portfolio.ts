export const portfolio = {
  name: "Md Julfikar Ali",
  initials: "MJA",
  designation: "Frontend Developer",
  location: "Bangladesh",
  shortIntro:
    "I build responsive, accessible, and user-friendly web experiences with modern frontend technologies.",
  about:
    "I am a web development learner who enjoys turning ideas into clean, useful digital experiences. My journey started with the fundamentals of the web and grew into building interactive applications with React and Next.js. I enjoy solving UI problems, learning new tools, and improving the small details that make a product easier to use. Outside coding, I enjoy learning, exploring design inspiration, and spending time with family and friends.",
  email: "julfikar0034@gmail.com",
  emailSubject: "Project inquiry — via your portfolio",
  emailBody:
    "Hi Julfikar,\r\n\r\nI found your portfolio and would like to talk about a project.\r\n\r\nWhat I have in mind:\r\n\r\n\r\nTimeline / budget (optional):\r\n\r\nThanks,\r\n",
  phone: "+8801701-862958",
  whatsapp: "8801701862958",
  whatsappDisplay: "+880 1701-862958",
  resumePath: "/resume.pdf",
  socials: {
    github: "https://github.com/mdjulfikarcodes",
    linkedin: "https://www.linkedin.com/in/md-julfikar-ali/",
    facebook: "https://www.facebook.com/mdjulfikarrabby",
  },
  skills: [
    { category: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React", "Next.js"] },
    { category: "Styling", items: ["Tailwind CSS", "Responsive Design", "CSS Animation"] },
    { category: "Tools & Workflow", items: ["Git", "GitHub", "VS Code", "REST APIs"] }
  ],
  education: [
    {
      degree: "Diploma In Computer Science & Technology",
      institution: "Greenland Polytechnic Institute",
      year: "2026 (Expected)",
      detail: "Diploma in Computer Technology, Greenland Polytechnic Institute"
    }
  ],
  experience: [
    {
      role: "Learning & Personal Projects",
      company: "Independent",
      period: "Present",
      detail: "Building projects to practise frontend development, responsive layouts, API integration, and reusable components."
    }
  ],
  projects: [
    {
      slug: "bazar-dor",
      name: "Bazar Dor",
      category: "Market Price Dashboard",
      image: "/projects/bazar-dor.svg",
      description: "A market-price interface for browsing products and viewing price movements in a clear, responsive layout.",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST API"],
      liveUrl: "https://a7-bazar-dor-2olp.vercel.app/",
      repoUrl: "https://github.com/mdjulfikarcodes/A7-Bazar-Dor",
      challenges: [
        "Handling API responses and loading or empty states.",
        "Filtering products by price direction and sorting the results.",
        "Keeping product cards readable across mobile and desktop screens."
      ],
      improvements: [
        "Add better loading, error, and empty states.",
        "Add product search and category filters.",
        "Improve accessibility and automated tests."
      ]
    },
    {
      slug: "fit-log",
      name: "Fit Log",
      category: "Fitness Planner",
      image: "/projects/fit-log.svg",
      description: "A fitness planning interface for exploring workout plans and organising saved activities.",
      tech: ["Next.js", "React", "JavaScript", "CSS", "REST API"],
      liveUrl: "https://b14-a6-fit-log-ecru.vercel.app/",
      repoUrl: "https://github.com/mdjulfikarcodes/B14-A6-Fit-Log",
      challenges: [
        "Organising plan and saved views into a clear interface.",
        "Managing fetched data and rendering useful empty states.",
        "Making cards and navigation responsive."
      ],
      improvements: [
        "Add user accounts and persistent saved plans.",
        "Add weekly progress summaries.",
        "Improve filtering and accessibility."
      ]
    },
    {
      slug: "bangla-news-24",
      name: "Bangla News 24",
      category: "News Website",
      image: "/projects/bangla-news-24.svg",
      description: "A Bangla news website concept focused on readable headlines, news categories, and a responsive reading experience.",
      tech: ["Next.js", "React", "TypeScript", "CSS", "REST API"],
      liveUrl: "#",
      repoUrl: "https://github.com/mdjulfikarcodes/bangla-news-24",
      challenges: [
        "Presenting news content in a clean hierarchy.",
        "Handling remote images and API loading states.",
        "Maintaining a consistent layout on smaller devices."
      ],
      improvements: [
        "Add search and category-based navigation.",
        "Add accessible article pages and metadata.",
        "Improve image optimisation and error handling."
      ]
    }
  ]
};

export const emailHref = `mailto:${portfolio.email}?subject=${encodeURIComponent(
  portfolio.emailSubject
)}&body=${encodeURIComponent(portfolio.emailBody)}`;
