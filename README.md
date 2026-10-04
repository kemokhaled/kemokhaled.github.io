# Karem Khaled — Portfolio

A modern, responsive React portfolio for Karem Khaled, built as a single-page Vite app.

## Included
- Responsive navigation with mobile menu
- Dark / light mode toggle
- Hero section using the supplied profile photo
- About, services, selected projects, skills, workflow, education and contact sections
- Email copy interaction
- GitHub + LinkedIn links
- Responsive project visuals and a supplied project screenshot
- SEO-friendly page metadata
- GitHub Pages deployment workflow

## Run locally
```bash
npm install
npm run dev
```

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Deploy to GitHub Pages
1. Push this project to a GitHub repository.
2. In GitHub, open **Settings → Pages** and set the source to **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and deploys the app.

The Vite config uses a relative base path so the site works from a GitHub Pages project URL.

## Customize
Main text and project data live in `src/main.jsx`.
Global design tokens and responsive styling are in `src/styles.css`.
Replace `public/profile.png` to change the profile image.
