# Junerussell Patris — Personal CV

A responsive, single-page CV and project portfolio for Junerussell Patris, a student at Davao del Norte State College. EcoTrack is represented as an academic capstone using Electron.js and Python; undocumented features and links are left for later editing.

## Features

- Responsive CV sections for profile, objective, education, technical skills, projects, academic experience, achievements, and contact
- Accessible mobile navigation, scroll-aware active navigation, EcoTrack details dialog, and back-to-top control
- Reduced-motion support, keyboard focus support, SEO metadata, and favicon
- Central editable profile and project content in `src/data/portfolio.ts`

## Technology

Next.js App Router, TypeScript, React, Tailwind CSS, Lucide React, and custom CSS.

## Run locally

Install Node.js 20 or newer, then:

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

## Update your content

Edit `src/data/portfolio.ts`. Add only verified skills, project features, achievements, profile URLs, and project links. The optional degree title is included but currently not displayed as confirmed; set `programConfirmed` to `true` only after confirming it. Social and project links are hidden until populated.

## GitHub setup

Create an empty repository on GitHub, then run these commands from this folder (replace the URL with your real repository URL):

```bash
git init
git add .
git commit -m "Build personal CV website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

No Git remote or username is configured in this project. Review `src/data/portfolio.ts` before publishing to ensure all profile information is intended to be public.

## Deploy to Vercel

1. Push the repository to GitHub.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import the repository. Vercel detects Next.js automatically.
4. Keep the default build command (`npm run build`) and deploy.
5. Open the Vercel-provided URL and check the page on desktop and mobile.

## Screenshots

Add verified screenshots to `public/images/` and link them from this section. No project screenshots were present when this site was created.
