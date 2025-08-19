# 🧸 IKEA Plushies Quiz

<div align="center">

![IKEA Plushies](https://img.shields.io/badge/🦈-BLÅHAJ-blue?style=for-the-badge)
![Quiz Types](https://img.shields.io/badge/🧠-3%20Quiz%20Types-purple?style=for-the-badge)
![Plushies](https://img.shields.io/badge/🐻-15%20Results-orange?style=for-the-badge)

### 🌟 **Discover Your Perfect IKEA Plushie Companion!** 🌟

_Which cuddly friend from IKEA matches your personality?_

**[🚀 Try the Quiz Live](#-quick-start) | [📖 View Demo](#-demo) | [🛠️ Setup Guide](#-installation)**

</div>

---

## 🎯 **What is this?**

An interactive **Next.js** quiz app that matches you with your perfect IKEA plushie based on your personality, lifestyle, and preferences! Choose from 3 different quiz types and discover which of the 15+ adorable IKEA soft toys is your soulmate.

<details>
<summary>🦈 <strong>Meet the Plushie Cast</strong> (Click to expand!)</summary>

| Plushie | Name                         | Personality Match                      |
| ------- | ---------------------------- | -------------------------------------- |
| 🦈      | **BLÅHAJ** (Shark)           | Loyal, comforting, surprisingly gentle |
| 🐻      | **DJUNGELSKOG** (Brown Bear) | Strong, adventurous, natural leader    |
| 🐧      | **BLÅVINGAD** (Penguin)      | Social, elegant, community-minded      |
| 🐋      | **BLÅVINGAD** (Whale)        | Calm, wise, emotionally intelligent    |
| 🦔      | **SKOGSDUVA** (Hedgehog)     | Introverted, thoughtful, warm inside   |
| 🦊      | **SKOGSDUVA** (Arctic Fox)   | Clever, adaptable, mysterious          |
| 🦉      | **SKOGSDUVA** (Snowy Owl)    | Wise, observant, insightful            |
| 🐝      | **SKOGSDUVA** (Bee)          | Hardworking, joyful, community-focused |
| 🐱      | **SKOGSDUVA** (Lynx)         | Independent, graceful, mysterious      |
| 🦦      | **SKOGSDUVA** (Otter)        | Playful, family-oriented, nurturing    |
| 🧸      | **FABLER BJÖRN** (Teddy)     | Traditional, reliable, comforting      |
| 🐢      | **BLÅVINGAD** (Turtle)       | Patient, wise, steady                  |
| 🐙      | **BLÅVINGAD** (Octopus)      | Smart, creative, adaptable             |
| 👽      | **AFTONSPARV** (Alien)       | Unique, imaginative, otherworldly      |
| 🌍      | **AFTONSPARV** (Earth)       | Grounded, nurturing, essential         |
| 🚀      | **AFTONSPARV** (Astronaut)   | Ambitious, curious, inspiring          |

</details>

---

## ✨ **Features**

<table>
<tr>
<td width="50%">

### 🧠 **Three Quiz Types**

- **Personality Quiz** - Core traits & characteristics
- **Food & Taste Quiz** - Culinary preferences
- **Sleep & Lifestyle Quiz** - Daily rhythms & habits
- **Lifestyle & Hobbies Quiz** - Interests & activities

</td>
<td width="50%">

### 🎨 **Interactive Design**

- Beautiful gradient backgrounds
- Smooth animations & transitions
- Mobile-responsive design
- Progress tracking with visual indicators

</td>
</tr>
<tr>
<td width="50%">

### 📱 **Social Features**

- Share your results instantly
- Copy results to clipboard
- Mobile-friendly sharing
- Retake & compare results

</td>
<td width="50%">

### 🔧 **Technical Features**

- Built with **Next.js 15** & **TypeScript**
- **Tailwind CSS** for styling
- **Radix UI** components
- **shadcn/ui** design system

</td>
</tr>
</table>

---

## 🚀 **Quick Start**

<details>
<summary><strong>📋 Prerequisites</strong> (Click to expand)</summary>

Make sure you have these installed:

- **Node.js** 18+ ([Download here](https://nodejs.org/))
- **pnpm** ([Install guide](https://pnpm.io/installation))
- **Git** ([Download here](https://git-scm.com/))

</details>

### **1️⃣ Clone the Repository**

```bash
git clone https://github.com/RegieSanJuan/Ikea-plushies-quiz.git
cd Ikea-plushies-quiz
```

### **2️⃣ Install Dependencies**

```bash
pnpm install
```

### **3️⃣ Start Development Server**

```bash
pnpm dev
```

### **4️⃣ Open Your Browser**

Navigate to **[http://localhost:3000](http://localhost:3000)** and start discovering your plushie match! 🎉

---

## 📱 **Demo**

<div align="center">

### **🌟 Live Experience Preview**

| Quiz Selection                                                                       | Question Flow                                                                              | Results Page                                                                      |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| ![Quiz Types](https://via.placeholder.com/250x150/4F46E5/FFFFFF?text=🧠+Choose+Quiz) | ![Questions](https://via.placeholder.com/250x150/7C3AED/FFFFFF?text=❓+Answer+5+Questions) | ![Results](https://via.placeholder.com/250x150/059669/FFFFFF?text=🦈+Your+Match!) |

**[▶️ Try it yourself!](#-quick-start)**

</div>

---

## 🛠️ **Installation**

<details>
<summary><strong>🔧 Detailed Setup Instructions</strong> (Click to expand)</summary>

### **Using pnpm (Recommended)**

```bash
# Clone the repository
git clone https://github.com/RegieSanJuan/Ikea-plushies-quiz.git

# Navigate to project directory
cd Ikea-plushies-quiz

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### **Using npm**

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### **Using yarn**

```bash
# Install dependencies
yarn install

# Start development server
yarn dev
```

### **Build for Production**

```bash
# Build the project
pnpm build

# Start production server
pnpm start
```

</details>

---

## 📁 **Project Structure**

<details>
<summary><strong>🗂️ File Organization</strong> (Click to expand)</summary>

```
Ikea-plushies-quiz/
├── 📱 app/
│   ├── layout.tsx          # Root layout component
│   ├── page.tsx           # Main quiz application
│   └── globals.css        # Global styles
├── 🎨 components/
│   ├── theme-provider.tsx # Dark/light theme support
│   └── ui/               # Reusable UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── progress.tsx
│       └── ...
├── 🪝 hooks/
│   ├── use-mobile.ts     # Mobile detection hook
│   └── use-toast.ts      # Toast notifications
├── 🔧 lib/
│   └── utils.ts          # Utility functions
├── 🎭 public/
│   └── *.png             # Static assets
├── 📦 Package files
│   ├── package.json
│   ├── tsconfig.json
│   ├── next.config.mjs
│   └── tailwind.config.js
└── 📖 README.md          # This file!
```

</details>

---

## 🎮 **How to Play**

<div align="center">

### **🎯 Simple 4-Step Process**

</div>

| Step   | Action                  | Description                                      |
| ------ | ----------------------- | ------------------------------------------------ |
| **1️⃣** | **🧠 Choose Quiz Type** | Pick from Personality, Food, Sleep, or Lifestyle |
| **2️⃣** | **❓ Answer Questions** | 5 fun questions with multiple choice answers     |
| **3️⃣** | **🎊 Get Your Result**  | Discover which IKEA plushie matches you!         |
| **4️⃣** | **📱 Share & Retry**    | Share results or try a different quiz type       |

<details>
<summary><strong>🧩 Quiz Logic Explained</strong> (Click to expand)</summary>

Each answer awards points to different plushies based on personality traits:

- **Answers are scored** across 15+ plushie personalities
- **Points accumulate** throughout the quiz
- **Highest score wins** - that's your match!
- **Ties are resolved** by default to the beloved BLÅHAJ 🦈

Example scoring:

```typescript
{
  text: "Curled up reading a book",
  scores: {
    blahaj: 3,    // High match for comfort-seekers
    hedgehog: 2,  // Medium match for introverts
    bear: 1       // Low match for traditionalists
  }
}
```

</details>

---

## 🚢 **Deployment**

<details>
<summary><strong>☁️ Deployment Options</strong> (Click to expand)</summary>

### **Vercel (Recommended)**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/RegieSanJuan/Ikea-plushies-quiz)

1. Click the deploy button above
2. Connect your GitHub account
3. Your app will be live in minutes!

### **Netlify**

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/RegieSanJuan/Ikea-plushies-quiz)

### **Manual Deployment**

```bash
# Build the project
pnpm build

# The `out` folder contains your static site
# Upload it to any static hosting service
```

</details>

---

## 🤝 **Contributing**

<details>
<summary><strong>💪 Want to Help Make This Better?</strong> (Click to expand)</summary>

We'd love your contributions! Here's how to get started:

### **🐛 Report Bugs**

1. Check existing [issues](https://github.com/RegieSanJuan/Ikea-plushies-quiz/issues)
2. Create a new issue with detailed description
3. Include screenshots if applicable

### **✨ Suggest Features**

- New quiz types or questions
- Additional IKEA plushies
- UI/UX improvements
- Accessibility enhancements

### **🔧 Submit Code**

```bash
# Fork the repository
# Create a feature branch
git checkout -b feature/amazing-feature

# Make your changes
# Commit with descriptive message
git commit -m "Add amazing feature"

# Push to your branch
git push origin feature/amazing-feature

# Open a Pull Request
```

### **📝 Improve Documentation**

- Fix typos or unclear instructions
- Add more examples
- Translate to other languages

</details>

---

## 🔧 **Tech Stack**

<div align="center">

### **🛠️ Built With Modern Technologies**

</div>

| Category               | Technologies                                                                                                                                                                                                                                                                                        |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **⚛️ Frontend**        | ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white) ![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB) |
| **🎨 Styling**         | ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)                                                                                               |
| **🧩 UI Components**   | ![Radix UI](https://img.shields.io/badge/Radix%20UI-161618?style=flat&logo=radix-ui&logoColor=white) **shadcn/ui**                                                                                                                                                                                  |
| **📦 Package Manager** | ![pnpm](https://img.shields.io/badge/pnpm-F69220?style=flat&logo=pnpm&logoColor=white)                                                                                                                                                                                                              |
| **🚀 Deployment**      | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)                                                                                                                                                                                                        |

<details>
<summary><strong>📋 Complete Dependencies List</strong> (Click to expand)</summary>

### **Core Dependencies**

- **next** ^15.2.4 - React framework
- **react** ^18.3.1 - UI library
- **typescript** ^5.6.3 - Type safety

### **UI & Styling**

- **tailwindcss** ^3.4.15 - Utility-first CSS
- **@radix-ui/react-\*** - Accessible components
- **class-variance-authority** - Component variants
- **clsx** - Conditional classes

### **Icons & Assets**

- **lucide-react** ^0.454.0 - Beautiful icons
- **geist** ^1.3.1 - Modern font family

### **Development**

- **@types/node** ^22.10.1 - Node.js types
- **@types/react** ^18.3.12 - React types
- **eslint** ^8.57.1 - Code linting
- **postcss** ^8.5.1 - CSS processing

</details>

---

## 📄 **License**

<div align="center">

This project is licensed under the **MIT License**.

See the [LICENSE](LICENSE) file for details.

**[📜 Read Full License](LICENSE) | [❓ What does this mean?](https://choosealicense.com/licenses/mit/)**

</div>

---

## 👨‍💻 **Author**

<div align="center">

### **💫 Created with ❤️ by RegieSanJuan**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/RegieSanJuan)
[![Portfolio](https://img.shields.io/badge/Portfolio-255E63?style=for-the-badge&logo=About.me&logoColor=white)](#)

_Building fun, interactive experiences one quiz at a time!_

</div>

---

## 🙏 **Acknowledgments**

<details>
<summary><strong>💝 Special Thanks</strong> (Click to expand)</summary>

- **🏪 IKEA** - For creating the most adorable plushies that inspired this project
- **🦈 BLÅHAJ Community** - For showing us the power of plushie love
- **⚛️ Next.js Team** - For the amazing React framework
- **🎨 shadcn** - For the beautiful UI component library
- **🌍 Open Source Community** - For all the tools that made this possible

</details>

---

<div align="center">

## 🎉 **Ready to Find Your Plushie Match?**

### **[🚀 Start the Quiz Now!](#-quick-start)**

---

_Made with 🦈 and lots of ☕_

**Star ⭐ this repo if you found your perfect plushie match!**

[![GitHub stars](https://img.shields.io/github/stars/RegieSanJuan/Ikea-plushies-quiz?style=social)](https://github.com/RegieSanJuan/Ikea-plushies-quiz/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/RegieSanJuan/Ikea-plushies-quiz?style=social)](https://github.com/RegieSanJuan/Ikea-plushies-quiz/network)

</div>
