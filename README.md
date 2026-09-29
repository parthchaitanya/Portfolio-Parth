# Parth Chaitanya — Portfolio

Dark, animated one-page portfolio built with **React 18, TypeScript, Vite, Tailwind CSS, Framer Motion and Lucide React**.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Edit content

Everything (tagline, about text, skills, experience, projects, links) lives in `src/data.ts`.

- **Add your photo:** put a transparent PNG at `public/portrait.png` and set `portrait: '/portrait.png'` in `src/data.ts`. It replaces the 3D orb in the hero and keeps the magnetic hover effect.
- **Add a live demo to a project:** set `live: 'https://…'` on that project; a "Live Project" button appears.
- **Project colours:** each project's `theme` is three hex colours used for its card gradients.

## Sections

1. **Hero** — gradient "Hi, i'm parth" heading, magnetic 3D orb, contact button
2. **Marquee** — two rows of tech-stack tiles that slide in opposite directions as you scroll
3. **About** — scroll-revealed text (character by character) with floating 3D shapes
4. **Skills + Experience** — white rounded panel with numbered list
5. **Projects** — six sticky cards that stack and scale as you scroll
6. **Contact** — email, social links, footer

## Deploy

- **Vercel / Netlify:** import the repo; build command `npm run build`, output directory `dist`.
- **GitHub Pages:** add `base: '/<repo-name>/'` to `vite.config.ts`, run `npm run build`, and publish `dist/`
  (or name the repo `parthchaitanya.github.io` and keep `base` as `/`).

## No-build version

`standalone/index.html` is the same site as a single dependency-free HTML file (plain CSS + JS, only Google Fonts loaded).
Open it directly or host it anywhere (GitHub Pages, Netlify drop). Its content is baked in, so edit the React version's
`src/data.ts` as the source of truth and treat the standalone file as a quick-share copy.
