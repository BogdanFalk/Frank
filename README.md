# Bogdan Falk - Portfolio Website

> A modern, high-performance portfolio website showcasing full-stack software engineering projects and expertise.

[![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D?logo=vue.js)](https://vuejs.org/)
[![Quasar](https://img.shields.io/badge/Quasar-2.x-1976D2?logo=quasar)](https://quasar.dev/)
[![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?logo=vite)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- 🎨 **Modern UI/UX** - Clean design with smooth animations and transitions
- ⚡ **Performance** - Built with Vite for lightning-fast development and production builds
- 🔍 **SEO Optimized** - Comprehensive meta tags, Open Graph, and structured data
- 🌐 **PWA Support** - Progressive Web App capabilities with offline support
- ♿ **Accessible** - WCAG 2.1 Level AA compliant
- 🎯 **Interactive** - Dynamic project showcases with fullscreen image galleries
- 🚀 **Production Ready** - Optimized builds with cache busting and compression

## Tech Stack

- **Vue.js 3** - Progressive JavaScript framework
- **Quasar Framework** - Vue.js-based framework
- **Vite** - Next generation frontend tooling
- **SCSS** - CSS preprocessor

## Installation

1. Install dependencies:
```bash
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:9000`

## Building for Production

To build the project for production (creates static files):

```bash
npm run build
```

This will generate static files in the `dist/spa` directory.

## Deploying to cPanel

After building the project, follow these steps to deploy to cPanel:

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Locate the build files**:
   - All files will be in the `dist/spa` directory

3. **Upload to cPanel**:
   - Log in to your cPanel account
   - Navigate to "File Manager"
   - Go to your `public_html` directory (or subdirectory for subdomain)
   - Upload all files from `dist/spa` directory
   - Make sure `index.html` is in the root of your target directory

4. **Configure .htaccess** (if needed):
   - For proper routing with hash mode, no special configuration is needed
   - The site will work immediately after upload

## Customization

### Personal Information

Edit the following files to customize your portfolio:

- `src/components/HeroSection.vue` - Update your name and title
- `src/components/AboutSection.vue` - Add your bio and experience
- `src/components/SkillsSection.vue` - List your skills
- `src/components/ProjectsSection.vue` - Add your projects
- `src/components/ContactSection.vue` - Update contact information

### Colors and Styling

- Edit `src/css/app.scss` for global styles
- Update colors in `src/main.js` under Quasar config

### Images

- Replace the avatar image in `AboutSection.vue`
- Add project screenshots to `ProjectsSection.vue`
- Add favicon files to `public/icons/`

## Project Structure

```
Frank/
├── public/              # Static assets
│   └── icons/          # Favicon icons
├── src/
│   ├── assets/         # Images, fonts, etc.
│   ├── components/     # Vue components
│   │   ├── HeroSection.vue
│   │   ├── AboutSection.vue
│   │   ├── SkillsSection.vue
│   │   ├── ProjectsSection.vue
│   │   └── ContactSection.vue
│   ├── css/            # Global styles
│   │   └── app.scss
│   ├── layouts/        # Layout components
│   │   └── MainLayout.vue
│   ├── pages/          # Page components
│   │   ├── IndexPage.vue
│   │   └── ErrorNotFound.vue
│   ├── router/         # Vue Router config
│   │   ├── index.js
│   │   └── routes.js
│   ├── App.vue         # Root component
│   ├── index.html      # HTML template
│   └── main.js         # App entry point
├── quasar.config.js    # Quasar configuration
├── package.json        # Dependencies
└── README.md          # This file
```

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | Latest 2 versions |
| Firefox | Latest 2 versions |
| Safari  | Latest 2 versions |
| Edge    | Latest 2 versions |
| iOS Safari | Latest 2 versions |
| Chrome Mobile | Latest 2 versions |

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Bundle Size**: Optimized with code splitting
- **Image Optimization**: WebP format with fallbacks

## 🏗️ Code Quality

This project follows industry best practices:

- ✅ Vue 3 Composition API
- ✅ Modular component architecture
- ✅ SCSS with BEM-like conventions
- ✅ ESLint for code quality
- ✅ No console logs in production
- ✅ Proper error handling
- ✅ Comprehensive documentation

See [CODE_QUALITY.md](CODE_QUALITY.md) for detailed standards.

## 📄 License

This project is open source and available under the MIT License.

## 📧 Contact

**Bogdan Falk**
- Email: frank@unseenmedia.ro
- Phone: +40 742 14 31 31
- GitHub: [@BogdanFalk](https://github.com/BogdanFalk)

---

Built with ❤️ using Vue.js 3 and Quasar Framework | © 2025 Bogdan Falk

