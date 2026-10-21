# FullStackAnkit: Personal Portfolio

Ankit Shukla ki personal portfolio website. Isme Home, About, Skills, Services, Projects aur Contact sections hain.

**Live Demo:** https://ankitshukla9.github.io/my-portfolio/

## Features

- Responsive design jo mobile aur desktop dono par chalta hai
- Typing animation jo Frontend, Backend aur Web Developer roles dikhata hai
- Fixed navbar jisse har section par smooth scroll hota hai
- Technical skills ke animated progress bars
- Professional skills ke circular progress indicators
- Social media links
- Resume download
- Live time display

## Tech Stack

- **React** (UI components)
- **Vite** (development server aur build tool)
- **CSS** (custom styling, koi CSS framework nahi)
- **Typed.js** (typing animation)
- **React Icons** (social aur skill icons)

## Folder Structure

```
src/
├── assets/          # Images aur background
├── components/
│   ├── Header/      # Navbar
│   ├── Home/        # Hero section
│   └── Time/        # Time display
├── sections/
│   ├── About/       # About section
│   ├── Skills/      # Technical aur professional skills
│   ├── Project/     # Projects section
│   ├── Service/     # Services section
│   └── Contact/     # Contact section
├── App.jsx
├── main.jsx
└── index.css

public/
└── resume.pdf       # Download CV ke liye resume
```

## Getting Started

### Requirements

- [Node.js](https://nodejs.org/) (version 18 ya usse upar)

### Local setup

```bash
git clone https://github.com/ankitshukla9/my-portfolio.git
cd my-portfolio
npm install
npm run dev
```

Browser mein `http://localhost:5173` kholein.

## Build

```bash
npm run build
```

Production files `dist/` folder mein banti hain.

## Deployment

Ye site GitHub Pages par GitHub Actions ke through deploy hoti hai. `main` branch par har push ke baad site apne aap update ho jati hai. Workflow file `.github/workflows/deploy.yml` mein hai.

## Customization

- **Personal details:** `src/sections/About/About.jsx`
- **Skills aur progress values:** `src/sections/Skills/Skills.jsx`
- **Hero text aur social links:** `src/components/Home/Home.jsx`
- **Navbar links:** `src/components/Header/Header.jsx`
- **Resume:** `public/resume.pdf` ko replace karein

## Contact

- GitHub: [@ankitshukla9](https://github.com/ankitshukla9)
- Instagram: [@ankitshukla9653](https://www.instagram.com/ankitshukla9653/)
- LinkedIn: [Ankit Shukla](https://www.linkedin.com/feed/)