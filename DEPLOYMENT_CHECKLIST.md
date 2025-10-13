# 📋 Deployment Checklist

Use this checklist before deploying your portfolio to ensure everything is ready!

## ✅ Pre-Deployment Checklist

### Personal Information
- [ ] Updated your name in Hero section
- [ ] Changed the job title/description
- [ ] Added your bio in About section
- [ ] Updated years of experience, projects count, clients count
- [ ] Changed profile picture URL

### Contact Information
- [ ] Updated email address
- [ ] Updated phone number
- [ ] Updated location
- [ ] Updated GitHub URL
- [ ] Updated LinkedIn URL
- [ ] Updated Twitter/X URL
- [ ] Updated Instagram URL (if applicable)
- [ ] Updated footer social links

### Skills Section
- [ ] Added your actual skills
- [ ] Removed skills you don't have
- [ ] Organized skills by category
- [ ] Verified all skill names are correct

### Projects Section
- [ ] Replaced example projects with your real projects
- [ ] Added project descriptions
- [ ] Listed correct technologies for each project
- [ ] Added live demo URLs
- [ ] Added GitHub repository URLs
- [ ] Uploaded and linked project images/screenshots

### Visual Customization
- [ ] Chosen your brand colors (optional)
- [ ] Updated color scheme in `src/css/app.scss` (optional)
- [ ] Replaced favicon with your own (optional)
- [ ] Added your own images

### SEO & Meta Tags
- [ ] Updated page title in `index.html`
- [ ] Added meta description in `index.html`
- [ ] Verified Open Graph tags (for social sharing)

## 🏗️ Build & Test Checklist

### Local Testing
- [ ] Run `npm run dev` and test all sections
- [ ] Click all navigation links
- [ ] Test mobile responsiveness (resize browser)
- [ ] Test contact form submission
- [ ] Check all external links open correctly
- [ ] Verify images load properly
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)

### Build Process
- [ ] Run `npm run build` successfully
- [ ] Check `dist/spa/` folder contains files
- [ ] Verify `index.html` exists in `dist/spa/`
- [ ] Check file sizes are reasonable (see build summary)

## 🌐 Deployment Checklist

### cPanel Preparation
- [ ] Have cPanel login credentials ready
- [ ] Know which directory to upload to
  - [ ] Main domain: `public_html/`
  - [ ] Subdomain: `public_html/subdomain_name/`
  - [ ] Addon domain: `public_html/domain_name/`
- [ ] Backup any existing files in target directory

### File Upload
- [ ] Logged into cPanel
- [ ] Opened File Manager
- [ ] Navigated to correct directory
- [ ] Deleted old files (if updating)
- [ ] Uploaded all files from `dist/spa/`
- [ ] Verified `index.html` is in root of target directory
- [ ] Verified `.htaccess` file was uploaded
- [ ] Verified `assets/` folder was uploaded
- [ ] Verified `icons/` folder was uploaded

### Post-Deployment
- [ ] Visited your domain in a browser
- [ ] Cleared browser cache (Ctrl+Shift+Delete)
- [ ] All sections display correctly
- [ ] Navigation works properly
- [ ] Mobile view looks good
- [ ] All images load
- [ ] All external links work
- [ ] Contact form shows notification when submitted
- [ ] Social media links open correctly
- [ ] No 404 errors in browser console (F12)
- [ ] Tested on mobile phone
- [ ] Tested page load speed

### SSL/HTTPS (Recommended)
- [ ] SSL certificate installed on domain
- [ ] Site accessible via https://
- [ ] All resources load over HTTPS
- [ ] Set up redirect from HTTP to HTTPS (if needed)

## 🔄 Update Checklist (For Future Updates)

When updating your portfolio:

- [ ] Make changes to source files
- [ ] Test locally with `npm run dev`
- [ ] Run `npm run build`
- [ ] Upload new files from `dist/spa/` to cPanel
- [ ] Clear browser cache
- [ ] Verify changes are live
- [ ] Test all functionality again

## 🐛 Troubleshooting Checklist

If something isn't working:

- [ ] Cleared browser cache and hard refresh (Ctrl+F5)
- [ ] Checked browser console for errors (F12)
- [ ] Verified all files uploaded correctly
- [ ] Checked file permissions (644 for files, 755 for directories)
- [ ] Verified `.htaccess` file exists
- [ ] Confirmed `index.html` is in the correct location
- [ ] Checked cPanel error logs
- [ ] Tested in different browser
- [ ] Contacted hosting support if needed

## 📝 Notes Section

Use this space to note important information specific to your deployment:

**Domain**: _______________________________

**Hosting Provider**: _______________________________

**cPanel Username**: _______________________________

**Upload Directory**: _______________________________

**Deployment Date**: _______________________________

**Last Updated**: _______________________________

**Important Notes**:
_________________________________________________________________
_________________________________________________________________
_________________________________________________________________

---

## ✨ Final Check

Before you consider the deployment complete:

- [ ] Portfolio is live and accessible
- [ ] All personal information is correct
- [ ] No placeholder text remains
- [ ] All links work as expected
- [ ] Mobile experience is great
- [ ] Load time is acceptable
- [ ] No console errors
- [ ] Shared link with a friend for feedback
- [ ] Proud of your work! 🎉

---

**Remember**: You can always update your portfolio. Start with getting it live, then improve it over time!

Good luck with your deployment! 🚀

