# Junerussell Patris — Personal CV Website

## Short Description

A responsive personal CV and portfolio website for Junerussell Patris, a student at Davao del Norte State College. The site presents his background, education, technical interests, and EcoTrack academic capstone project. Project features and links are kept editable until verified.

## Student Name

Junerussell Patris

## Live Vercel Link

https://patriscv-lemon.vercel.app/

## Technologies Used

- Next.js App Router
- React and TypeScript
- Tailwind CSS (project configuration) and custom CSS
- Lucide React icons

## Features

- Responsive CV sections for profile, career objective, education, technical skills, projects, academic experience, achievements, and contact
- Accessible mobile navigation, scroll-aware active navigation, EcoTrack details dialog, and back-to-top control
- Reduced-motion support, SEO metadata, and favicon
- Central editable profile and project content in `src/data/portfolio.ts`

## Run Locally

Install Node.js 20 or newer, then run:

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production Build

```bash
npm run build
npm start
```

## Update Content

Edit `src/data/portfolio.ts`. Add only verified skills, project features, achievements, profile URLs, and project links. The degree title is not presented as confirmed until `programConfirmed` is set to `true` after verification. Social and project links stay hidden until populated.

## Development Process and Commits

The project history should show the work evolving through multiple meaningful commits. Make commits as each distinct part is completed, rather than submitting all work in one final commit. For example:

```bash
git add package.json package-lock.json next.config.ts tsconfig.json postcss.config.mjs tailwind.config.ts
git commit -m "Set up Next.js and TypeScript project"

git add src/data/portfolio.ts src/app/layout.tsx src/app/page.tsx
git commit -m "Build CV sections and editable portfolio content"

git add src/app/globals.css public/favicon.svg public/images
git commit -m "Add responsive visual design and profile photo"

git add README.md .gitignore
git commit -m "Document project and deployment workflow"
```

If the work is already complete in the working tree, use these as a guide for future incremental work. Do not rewrite or fabricate commit history to imply work happened in stages when it did not.

## GitHub Publishing

Create an empty repository on GitHub, then connect it from this folder (replace the URL with your real repository URL):

```bash
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

If Git was not initialized, run `git init` first. Review `src/data/portfolio.ts` before publishing so all profile information is intended to be public. Keep the meaningful commit history when pushing.

## Deploy to Vercel

1. Push the repository to GitHub.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import the repository. Vercel detects Next.js automatically.
4. Keep the default build command (`npm run build`) and deploy.
5. Open the Vercel-provided URL and check the site on desktop and mobile.
6. Replace the placeholder under **Live Vercel Link** above with the working deployment URL.

## Screenshots

Add verified screenshots to `public/images/` and link them here. No EcoTrack application screenshots were available when this README was written.
