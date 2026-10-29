# Developer Portfolio

A responsive developer portfolio built with Next.js, React, TypeScript, Tailwind CSS v4, and Lucide icons.

## Getting started

1. Install Node.js (LTS).
2. Open this folder in VS Code.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open `http://localhost:3000`.

## Customize before publishing

- Edit `src/data/portfolio.ts` to update your name, designation, bio, skills, education, experience, social links, contact information, and project details.
- Replace `public/profile.svg` with your own photo (update the image path in `src/app/page.tsx` if needed).
- Replace `public/projects/*.svg` with actual project screenshots.
- Replace `public/resume.pdf` with your real CV. The included PDF is only a placeholder.
- Update every demo and repository URL in `src/data/portfolio.ts`.
- Update metadata in `src/app/layout.tsx`.

## Project details

Project pages are generated dynamically from the project data at `/projects/[slug]`.

## Build and deploy

Run `npm run build` and fix any errors before deploying. Push the project to GitHub, import it into Vercel, and deploy. After deployment, open the public URL and test every link and project page.

## Important

The project includes example content and placeholder links. Do not publish until you have replaced them with your own accurate information.
