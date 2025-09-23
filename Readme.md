# SecureX-DID Web3KYC Platform

A modern, responsive single-page application showcasing SecureX-DID - a next-generation Decentralized Identity solution powered by Zero Knowledge Proof technology for Web3 security and compliance.

## 🚀 Features

- **Decentralized Identity (DID)** - User-controlled digital identity without centralized dependencies
- **Zero Knowledge Proofs (ZKPs)** - Privacy-preserving verification without exposing personal data
- **Self-Sovereign Identity** - Full ownership and control of personal data
- **Blockchain Authentication** - Secure login without passwords
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Dark/Light Mode** - Seamless theme switching
- **Interactive UI** - Hover effects and smooth animations
- **SEO Optimized** - Meta tags and structured content

## 🛠️ Tech Stack

### Frontend Framework
- **React 19** - Latest React with modern hooks and concurrent features
- **Vite** - Fast build tool with HMR and optimized production builds

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework with custom theme configuration
- **Font Awesome** - Icon library for consistent UI elements

### Development Tools
- **ESLint** - Code linting for consistent code quality
- **Vite Plugin React** - React integration for Vite

### Additional Libraries
- **React Multi Carousel** - Smooth carousel components
- **React Slick** - Slider/carousel functionality

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** package manager
- **Git** for version control

## ⚡ Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/secure-d-app-frontend.git
   cd secure-d-app-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (default Vite port)

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 📁 Project Structure

```
secure-d-app-frontend/
├── public/
│   └── assets/
│       ├── images/          # Static images and icons
│       └── logo.png         # Company favicon
├── src/
│   ├── components/
│   │   ├── common/          # Reusable UI components
│   │   │   ├── FAQs.jsx
│   │   │   ├── MetaTags.jsx
│   │   │   ├── SectionTitle.jsx
│   │   │   └── ...
│   │   ├── footer/
│   │   ├── navbar/
│   │   └── productService/  # Service-specific components
│   ├── data/
│   │   └── web3kyc.js       # Application data and content
│   ├── pages/
│   │   └── Web3KYC.jsx      # Main page component
│   ├── pageComponents/
│   │   └── home/
│   ├── App.jsx              # Root component
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles
├── package.json
├── tailwind.config.js       # Tailwind configuration
├── vite.config.js          # Vite configuration
└── README.md
```

## 📦 Dependencies

### Production Dependencies
- `@fortawesome/fontawesome-svg-core: ^7.0.1` - Font Awesome core
- `@fortawesome/free-solid-svg-icons: ^7.0.1` - Solid icons
- `@fortawesome/react-fontawesome: ^3.0.2` - React Font Awesome components
- `react: ^19.1.1` - React library
- `react-dom: ^19.1.1` - React DOM rendering
- `react-multi-carousel: ^2.8.6` - Carousel component
- `react-slick: ^0.31.0` - Slider component
- `slick-carousel: ^1.8.1` - Carousel CSS

### Development Dependencies
- `@eslint/js: ^9.35.0` - ESLint configuration
- `@tailwindcss/vite: ^4.1.13` - Tailwind CSS Vite plugin
- `@types/react: ^19.1.13` - TypeScript types for React
- `@types/react-dom: ^19.1.9` - TypeScript types for React DOM
- `@vitejs/plugin-react: ^5.0.2` - Vite React plugin
- `eslint: ^9.35.0` - ESLint
- `eslint-plugin-react-hooks: ^5.2.0` - React hooks linting
- `eslint-plugin-react-refresh: ^0.4.20` - React Fast Refresh linting
- `globals: ^16.4.0` - Global variables for ESLint
- `tailwindcss: ^4.1.13` - Tailwind CSS
- `vite: ^7.1.6` - Vite build tool

## 🎨 Styling Approach

This project uses a **100% Tailwind CSS** approach with:

- **Custom Theme Configuration** - Brand colors, shadows, and animations in `tailwind.config.js`
- **Utility-First CSS** - No custom CSS classes, everything through Tailwind utilities
- **Dark/Light Mode Support** - Automatic theme switching with CSS variables
- **Responsive Design** - Mobile-first with breakpoint utilities
- **Component-Based Architecture** - Reusable styled components

## 🔧 Configuration Files

### Tailwind Config (`tailwind.config.js`)
```javascript
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brandGreen: '#12d576',
        navy: '#0b1f3a',
        // ... more custom colors
      },
      boxShadow: {
        brand: '0 20px 25px -5px rgba(18, 213, 118, 0.15), ...',
      }
    }
  }
}
```

### Vite Config (`vite.config.js`)
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

## 🚀 Deployment

1. **Build for production**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting platform:
   - Netlify
   - Vercel
   - GitHub Pages
   - AWS S3 + CloudFront

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software owned by SecureDApp. All rights reserved.

## 📞 Support

For support or questions:
- Email: hello@securedapp.in
- Telegram/Discord: Available on company channels

---

**Built with ❤️ by SecureDApp Team**
