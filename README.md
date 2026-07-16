# 🚀 MERN Stack Developer & SQA Engineer Portfolio

> React 18 + TypeScript + Tailwind CSS 

## ✨ Features

- ⚡ **React 18 + TypeScript + Vite** – Lightning fast dev experience
- 🎨 **Tailwind CSS** – Utility-first styling
- 🌙 **Dark/Light Mode** 
- 📱 **Fully Responsive** – Mobile, Tablet, Desktop
- 🔔 **Toast Notifications** – react-hot-toast
- 🎭 **Interactive Modals** – QA cards, Blog posts
- ✅ **Zero Backend** – No server needed, all static

---

## 🛠️ Setup

### Prerequisites
- Node.js 18+
- npm বা yarn

### Installation

```bash
# 1. Clone 
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# 2.Install 
npm install

# 3. Start server
npm run dev
```

Browser-এ যা: **http://localhost:5173**

---

## 📦 Build for Production

```bash
npm run build
npm run preview
```

---

## 🚀 Deploy to Vercel

```bash
# Vercel CLI    
npm i -g vercel
vercel


```

**Vercel Settings:**
- Framework: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation + Dark mode toggle
│   │   ├── Hero.tsx            # Landing section
│   │   ├── Skills.tsx          # Dev + QA skills grid
│   │   ├── Projects.tsx        # MERN project cards
│   │   ├── QAPortfolio.tsx     # QA cards + modals
│   │   ├── CaseStudy.tsx       # QA mindset section
│   │   ├── Blog.tsx            # Blog posts + modals
│   │   ├── Contact.tsx         # Contact form (toast only)
│   │   └── Footer.tsx
│   ├── data/
│   │   └── portfolioData.ts    # 
│   ├── hooks/
│   │   └── useTheme.ts         # Dark/Light mode hook
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css               # Tailwind + Custom styles
├── public/
│   ├── favicon.svg
│   └── resume.pdf              
├── package.json
├── vite.config.ts
├── tsconfig.json
└── tailwind.config.js
```

---

## 🔧 Customization
---

Built with ❤️ using React + TypeScript + Tailwind CSS
