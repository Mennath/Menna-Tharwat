# Menna Tharwat — React Portfolio

A bilingual (English / Arabic) responsive portfolio built with React, Vite, and Tailwind CSS.

## 1. Run locally

Install Node.js (LTS), then open this folder in VS Code / Terminal:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## 2. Personalize before publishing

1. Replace `public/profile.jpg` with your own portrait. Keep the exact filename `profile.jpg`.
2. In `src/App.jsx`, replace `hello@example.com` with your email address.
3. Replace the generic GitHub and LinkedIn profile links in `src/App.jsx` and `src/components/Footer.jsx`.
4. Edit project names, descriptions, and links in `src/data.js`. Replace every `#` project / GitHub link with a real URL.
5. Update skill levels in `src/data.js` to reflect your actual experience.

## 3. Build check

```bash
npm run build
npm run preview
```

## 4. Publish to GitHub

Create an empty repository on GitHub, for example `menna-portfolio`. In the project terminal:

```bash
git init
git add .
git commit -m "Create my React portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/menna-portfolio.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username.

## 5. Deploy with GitHub Pages (optional)

1. Open `package.json` and add this field at the top level (replace username/repo):

```json
"homepage": "https://YOUR-USERNAME.github.io/menna-portfolio",
```

2. Install and deploy:

```bash
npm install
npm run build
npm run deploy
```

3. In GitHub repository settings, open **Pages** and confirm the published site URL.

> If you deploy under a repository path, set `base` in `vite.config.js` to `"/menna-portfolio/"` instead of `"./"` and rebuild.

## Project structure

```text
src/
  components/
    Footer.jsx
    Navbar.jsx
    ProjectCard.jsx
    SectionHeading.jsx
  App.jsx
  data.js
  index.css
  main.jsx
public/
  profile.jpg
```

## Notes

- Language toggle is built in; Arabic layout uses RTL automatically.
- The contact button uses `mailto:`. A backend contact form is not included.
- Project thumbnails are CSS mockups, so you can replace them with screenshots later.
