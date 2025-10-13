# Frank Portfolio

A beautiful, modern portfolio website built with Vue.js and Quasar Framework.

## Features

- 📱 Fully responsive design
- 🎨 Modern and clean UI
- 🚀 Fast and optimized
- 📦 Easy to deploy as static files
- 🎯 SEO-friendly
- ♿ Accessible

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

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is open source and available under the MIT License.

## Contact

For any questions or suggestions, feel free to reach out!

---

Built with ❤️ using Vue.js and Quasar

