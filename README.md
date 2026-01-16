# Ayoub Belkich — CV Website (React + TypeScript)

This repository contains my **CV web application** built with **React + TypeScript (Vite)** and deployed **24/7 for free** using **GitHub Pages + GitHub Actions**.

## Live website

```txt
https://aybelkich.github.io/cv/
```

---

## ✨ Features

* CV website (responsive)
* Rocket League inspired theme (subtle)
* **Email button**: copies my email + opens a new email draft
* **Download PDF button**: downloads a **clean 1-page PDF CV**
* Auto-deploy on every push to `main`

---

## 🧰 Tech Stack

* React
* TypeScript
* Vite
* GitHub Actions (CI/CD)
* GitHub Pages (hosting)
* Python + ReportLab (optional: generate the 1-page PDF)

---

## 🚀 Run locally

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

---

## 🌍 Deployment (GitHub Pages)

Every push to `main` automatically redeploys the site.

GitHub settings:

* `Settings → Pages → Source → GitHub Actions`

---

## 📝 Update CV content

Main files:

* `src/data/cvData.ts` (CV content)
* `src/App.tsx` (page structure)
* `src/components/` (UI components)
* `src/App.css` (styling)

Deploy updates:

```bash
git add .
git commit -m "update cv"
git push
```

---

## 📄 PDF CV (1 page)

The downloadable PDF file is stored here:

```txt
public/ayoubbelkichcv.pdf
```

The button uses:

```ts
const pdfUrl = `${import.meta.env.BASE_URL}ayoubbelkichcv.pdf`;
```

---

## 🛠️ Generate / update the PDF automatically (optional)

The PDF generator script is here:

```txt
pythonscript/generate_cv_pdf.py
```

Install dependency:

```bash
py -m pip install reportlab
```

Run the generator from the `cv/` folder:

```bash
py pythonscript/generate_cv_pdf.py
```

This overwrites:

```txt
public/ayoubbelkichcv.pdf
```

Then push it:

```bash
git add .
git commit -m "update pdf"
git push
```

---

## 📁 Project structure

```txt
cv/
  public/
    ayoubbelkichcv.pdf
    rl-bg.jpg
  src/
    data/
      cvData.ts
    components/
      Header.tsx
      ProfileCard.tsx
      EducationCard.tsx
      SkillsCard.tsx
      ProjectsCard.tsx
      ExperienceCard.tsx
      SideInfoCard.tsx
      Toast.tsx
    App.tsx
    App.css
    index.css
  pythonscript/
    generate_cv_pdf.py
  .github/
    workflows/
      deploy.yml
  package.json
```

---

## ✅ Notes /Troubleshooting

### PDF not downloading?

Make sure this file exists:

```txt
public/ayoubbelkichcv.pdf
```

### GitHub Pages base path

For a repo named `cv`, `vite.config.ts` should include:

```ts
base: "/cv/",
```

---

## 👤 Author

**Ayoub Belkich**
GitHub:

```txt
https://github.com/AyBelkich
```
