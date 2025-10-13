# Quick Start Guide - Frank Portfolio

## ✅ Your Portfolio is Ready!

Your beautiful portfolio website has been successfully created and built! 🎉

## 📁 What You Have

- **Framework**: Vue.js 3 + Quasar Framework
- **Styling**: Modern, responsive design with custom SCSS
- **Sections**:
  - 🏠 Hero Section - Eye-catching introduction
  - 👤 About Me - Your story and experience
  - 💪 Skills - Showcase your technical abilities
  - 💼 Projects - Display your portfolio work
  - 📧 Contact - Get in touch form

## 🚀 Quick Commands

```bash
# Development server (with hot reload)
npm run dev

# Build for production (creates static files)
npm run build
```

## 📦 Deployment Files

After running `npm run build`, all your deployment files are in:
```
dist/spa/
```

This folder contains everything you need to upload to your cPanel!

## 🌐 Deploy to cPanel (3 Easy Steps)

### Step 1: Build Your Site
```bash
npm run build
```

### Step 2: Access cPanel
1. Log into your cPanel
2. Open "File Manager"
3. Navigate to `public_html/` (or your desired subdirectory)

### Step 3: Upload Files
1. Upload ALL files from `dist/spa/` folder
2. Make sure `index.html` is in the root of your target directory
3. That's it! Visit your domain to see your portfolio live! 🎊

## ✏️ Customization Guide

### Update Your Personal Info

1. **Name & Title** → `src/components/HeroSection.vue`
   ```vue
   <h1>Frank</h1> <!-- Change this -->
   <h2>Full Stack Web Developer</h2> <!-- Change this -->
   ```

2. **About Section** → `src/components/AboutSection.vue`
   - Update profile image URL
   - Edit bio text
   - Change stats (years of experience, projects, clients)

3. **Skills** → `src/components/SkillsSection.vue`
   - Add/remove skill chips
   - Organize by categories

4. **Projects** → `src/components/ProjectsSection.vue`
   - Edit the `projects` array
   - Add your real project details:
     - Title
     - Description
     - Technologies used
     - Live URL
     - GitHub URL
     - Project images

5. **Contact Info** → `src/components/ContactSection.vue`
   - Email address
   - Phone number
   - Location
   - Social media links

### Change Colors

Edit `src/css/app.scss`:
```scss
$primary: #6366f1;   // Main color
$secondary: #ec4899; // Secondary color
$accent: #8b5cf6;    // Accent color
```

### Update Social Links

Edit `src/layouts/MainLayout.vue` and `src/components/ContactSection.vue`:
- GitHub: Line with `mdi-github` icon
- LinkedIn: Line with `mdi-linkedin` icon
- Twitter: Line with `mdi-twitter` icon

## 🎨 Project Structure

```
Frank/
├── dist/spa/           ← Built files (upload these to cPanel!)
├── src/
│   ├── components/     ← Your portfolio sections
│   ├── layouts/        ← Page layout
│   ├── pages/          ← Main pages
│   ├── router/         ← Navigation setup
│   └── css/            ← Styles
├── public/             ← Static files
├── quasar.config.js    ← Build configuration
└── package.json        ← Dependencies
```

## 🔥 Pro Tips

1. **Test Locally First**
   - Always run `npm run dev` to test changes before building

2. **Build Before Every Deployment**
   - Run `npm run build` to get fresh files in `dist/spa/`

3. **Browser Cache**
   - After uploading updates, clear browser cache (Ctrl+Shift+Delete) or hard refresh (Ctrl+F5)

4. **Backup**
   - Keep a copy of your `dist/spa/` folder before major changes

5. **Images**
   - Replace placeholder images with your own
   - Optimize images for web (compress them) for faster loading

## 🎯 What's Included

### Features
✅ Fully responsive (mobile, tablet, desktop)
✅ Modern animations and transitions
✅ Dark header with smooth navigation
✅ Gradient hero section
✅ Skill showcase with categories
✅ Project cards with hover effects
✅ Contact form (shows notification)
✅ Social media links
✅ SEO-friendly structure
✅ Fast loading with optimized build

### Technologies Used
- Vue.js 3 (Composition API)
- Quasar Framework
- Vue Router (for navigation)
- SCSS (for styling)
- Vite (build tool)
- Material Design Icons
- Font Awesome Icons

## 📚 Learn More

- **Vue.js**: https://vuejs.org/
- **Quasar**: https://quasar.dev/
- **Full Documentation**: See `README.md`
- **Deployment Guide**: See `DEPLOY.md`

## ❓ Common Questions

**Q: How do I add more projects?**
A: Edit `src/components/ProjectsSection.vue` and add more objects to the `projects` array.

**Q: Can I add more sections?**
A: Yes! Create a new component in `src/components/` and add it to `src/pages/IndexPage.vue`

**Q: How do I change the font?**
A: Update the Google Fonts import in `src/css/app.scss`

**Q: The contact form doesn't send emails?**
A: This is a static site. The form shows a notification. To send real emails, you'd need to integrate with a service like EmailJS or add a backend.

**Q: How do I add a blog?**
A: You'd need to create new pages and routes, or integrate with a CMS.

## 🎊 You're All Set!

Your portfolio is ready to showcase your amazing work to the world!

Happy coding! 💻✨

---

Need help? Check `README.md` for detailed information or `DEPLOY.md` for deployment troubleshooting.

