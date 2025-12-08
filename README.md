# Mehmet Bilgil - Portfolio Website

A modern, responsive portfolio website showcasing my professional experience as an Expert Software Engineer at Turkcell.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success)
![React](https://img.shields.io/badge/React-19.0-blue)
![Vite](https://img.shields.io/badge/Vite-6.0-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-cyan)

## 🚀 Live Demo

Visit the live portfolio: [https://mbilgil.github.io](https://mbilgil.github.io)

## ✨ Features

- **Modern Design**: Clean, professional design with glassmorphism effects and smooth animations
- **Dark/Light Mode**: Toggle between dark and light themes with preference persistence
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Interactive Components**: 
  - Animated hero section with floating gradient orbs
  - Skill cards with proficiency indicators
  - Expandable experience timeline
  - Contact form with validation
- **SEO Optimized**: Comprehensive meta tags and structured data
- **Performance**: Fast loading with code splitting and lazy loading

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.0
- **Build Tool**: Vite 6.0
- **Styling**: Tailwind CSS 4.0
- **Animations**: Framer Motion
- **Icons**: React Icons, Lucide React
- **Form Handling**: React Hook Form
- **Email Service**: EmailJS (integration ready)
- **Deployment**: GitHub Pages

## 📋 Sections

1. **Hero** - Eye-catching introduction with animated background
2. **About** - Professional summary and key statistics
3. **Skills** - Interactive skill cards organized by category
4. **Experience** - Timeline view of professional journey
5. **Projects** - Featured projects with tech stack highlights
6. **Education** - Academic background and certifications
7. **Contact** - Get in touch form and contact information

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/mbilgil/mbilgil.github.io.git
cd mbilgil.github.io
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open your browser and visit `http://localhost:5173`

## 📦 Build for Production

Build the project:
\`\`\`bash
npm run build
\`\`\`

Preview the production build:
\`\`\`bash
npm run preview
\`\`\`

## 🚢 Deployment

### Automatic Deployment (Recommended) 🚀

This project uses **GitHub Actions** for automatic deployment. Simply push to the `main` branch:

```bash
git add .
git commit -m "Your update message"
git push origin main
```

GitHub Actions will automatically build and deploy your changes. Check the **Actions** tab on GitHub to monitor deployment progress.

**First-time setup**: Go to **Settings** → **Pages** and set **Source** to "GitHub Actions".

### Manual Deployment

Alternatively, deploy manually using:
```bash
npm run deploy
```

This will build the project and push the built files to the `gh-pages` branch.

For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md).

## 🎨 Customization

### Update Personal Information

Edit `src/data/portfolio.js` to update:
- Personal details
- Work experience
- Projects
- Skills
- Education
- Social links

### Modify Theme Colors

Update `tailwind.config.js` to customize:
- Primary and accent colors
- Font families
- Animations
- Breakpoints

### Configure Contact Form

To enable the contact form:
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Get your Service ID, Template ID, and Public Key
3. Update these values in `src/components/Contact/Contact.jsx`

## 📁 Project Structure

\`\`\`
src/
├── components/
│   ├── About/          # About section
│   ├── Contact/        # Contact form
│   ├── Education/      # Education & certifications
│   ├── Experience/     # Work experience timeline
│   ├── Footer/         # Footer component
│   ├── Hero/           # Hero section
│   ├── Navigation/     # Navbar
│   ├── Projects/       # Projects showcase
│   └── Skills/         # Skills grid
├── data/
│   └── portfolio.js    # Portfolio data
├── hooks/
│   ├── useScrollSpy.js # Active section detection
│   └── useTheme.js     # Theme management
├── utils/
│   └── animations.js   # Framer Motion variants
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles
\`\`\`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 📄 License

Copyright © 2025 Mehmet Bilgil. All rights reserved.

This project is licensed under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: contact@mbilgil.com
- **LinkedIn**: [Mehmet Bilgil](https://linkedin.com/in/mehmetbilgil)
- **GitHub**: [@mbilgil](https://github.com/mbilgil)
- **Twitter**: [@m_bilgil](https://twitter.com/m_bilgil)

---

⭐ If you like this project, please give it a star!

Built with ❤️ using React, Vite, and Tailwind CSS
