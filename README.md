# 🚀 MERN Stack Developer & SQA Engineer Portfolio

> React 18 + TypeScript + Tailwind CSS দিয়ে বানানো পোর্টফোলিও ওয়েবসাইট

## ✨ Features

- ⚡ **React 18 + TypeScript + Vite** – Lightning fast dev experience
- 🎨 **Tailwind CSS** – Utility-first styling
- 🌙 **Dark/Light Mode** – LocalStorage-এ সেভ থাকে
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
# ১. রেপো ক্লোন করুন
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# ২. ডিপেন্ডেন্সি ইন্সটল করুন
npm install

# ৩. ডেভ সার্ভার চালু করুন
npm run dev
```

Browser-এ যান: **http://localhost:5173**

---

## 📦 Build for Production

```bash
npm run build
npm run preview
```

---

## 🚀 Deploy to Vercel

```bash
# Vercel CLI দিয়ে
npm i -g vercel
vercel

# অথবা vercel.com-এ GitHub রেপো কানেক্ট করুন (Automatic)
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
│   │   └── portfolioData.ts    # সব প্রজেক্ট, QA, ব্লগ ডাটা
│   ├── hooks/
│   │   └── useTheme.ts         # Dark/Light mode hook
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css               # Tailwind + Custom styles
├── public/
│   ├── favicon.svg
│   └── resume.pdf              # আপনার রেজিউম রাখুন
├── package.json
├── vite.config.ts
├── tsconfig.json
└── tailwind.config.js
```

---

## 🔧 Customization

### ১. নিজের তথ্য দিন

`src/data/portfolioData.ts` ফাইলে:
- প্রজেক্টের নাম, বিবরণ, লিংক আপডেট করুন
- QA কার্ডের GitHub লিংক আপডেট করুন
- ব্লগ পোস্ট এডিট করুন

`src/components/Hero.tsx` ফাইলে:
- নাম, সোশ্যাল লিংক আপডেট করুন

`src/components/Navbar.tsx` ফাইলে:
- Logo text আপডেট করুন

`index.html` ফাইলে:
- SEO meta tags আপডেট করুন

### ২. রেজিউম যোগ করুন

`public/resume.pdf` হিসেবে আপনার রেজিউম রাখুন।

### ৩. ছবি যোগ করুন

`public/` ফোল্ডারে ছবি রাখুন এবং Hero component-এ ব্যবহার করুন।

---

## 📧 Contact

আপনার নাম – [your@email.com](mailto:your@email.com)

GitHub: [@yourusername](https://github.com/yourusername)
LinkedIn: [yourprofile](https://linkedin.com/in/yourprofile)

---

Built with ❤️ using React + TypeScript + Tailwind CSS
