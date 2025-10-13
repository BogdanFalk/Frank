# Deployment Guide for cPanel

This guide will walk you through deploying your portfolio to a cPanel hosting environment.

## Prerequisites

- Access to your cPanel account
- FTP credentials or File Manager access
- Domain or subdomain configured on your hosting

## Step-by-Step Deployment

### 1. Build the Project

On your local machine, run the build command:

```bash
npm run build
```

This will create a `dist/spa` directory with all your compiled static files.

### 2. Prepare Files

After building, you'll find these files in the `dist/spa` directory:
- `index.html` - Main HTML file
- `assets/` - CSS and JavaScript files
- `icons/` - Favicon and app icons
- `.htaccess` - Server configuration (for Apache)

### 3. Upload to cPanel

#### Option A: Using File Manager

1. Log in to your cPanel account
2. Click on "File Manager"
3. Navigate to the directory where you want to host your site:
   - For main domain: `public_html/`
   - For subdomain: `public_html/subdomain_name/`
   - For addon domain: `public_html/domain_name/`

4. Delete any existing `index.html` or default files (if this is a fresh install)

5. Upload all files from your `dist/spa` directory:
   - Click "Upload" button
   - Select all files from your `dist/spa` folder
   - Wait for upload to complete

6. Make sure the file structure looks like this:
   ```
   public_html/
   ├── index.html
   ├── .htaccess
   ├── assets/
   │   ├── (various CSS and JS files)
   ├── icons/
   │   ├── (favicon files)
   └── (other files)
   ```

#### Option B: Using FTP

1. Connect to your hosting via FTP using:
   - Host: Your domain or hosting IP
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21 (or as specified by your host)

2. Navigate to the appropriate directory (same as File Manager option)

3. Upload all files from `dist/spa` directory to your server

4. Ensure file permissions are correct:
   - Files: 644
   - Directories: 755

### 4. Verify Deployment

1. Visit your domain in a web browser
2. Your portfolio should now be live!
3. Test all navigation links
4. Check that all sections are displaying correctly
5. Test on mobile devices

## Troubleshooting

### Site shows directory listing instead of your portfolio

**Solution**: Make sure `index.html` is in the correct directory and that there are no other index files (like `index.php`) that might take precedence.

### 404 errors on refresh or direct URL access

**Solution**: Ensure the `.htaccess` file is uploaded and `mod_rewrite` is enabled on your server. Contact your hosting provider if needed.

### Images or assets not loading

**Solution**: 
1. Check that the `assets/` directory was uploaded correctly
2. Verify file paths in the browser's developer console
3. Ensure file permissions are set correctly (644 for files, 755 for directories)

### Blank page or console errors

**Solution**:
1. Open browser developer tools (F12)
2. Check the Console tab for JavaScript errors
3. Verify that all JavaScript files loaded correctly in the Network tab

### Changes not appearing after re-upload

**Solution**:
1. Clear your browser cache (Ctrl+Shift+Delete)
2. Do a hard refresh (Ctrl+F5)
3. You can also add cache busting by rebuilding the project (files get new hashes)

## Updating Your Portfolio

When you want to update your portfolio:

1. Make changes to your source code locally
2. Test the changes with `npm run dev`
3. Build the project again with `npm run build`
4. Re-upload the contents of `dist/spa` to your server
5. Clear your browser cache to see the changes

## Performance Tips

1. **Enable Gzip Compression**: The `.htaccess` file includes gzip compression directives
2. **Browser Caching**: The `.htaccess` file sets appropriate cache headers
3. **CDN**: Consider using a CDN like Cloudflare for better performance
4. **Image Optimization**: Compress images before adding them to your portfolio

## Custom Domain Setup

If you're using a custom domain:

1. Update DNS settings to point to your hosting server
2. Wait for DNS propagation (can take up to 48 hours)
3. Consider setting up SSL/HTTPS through cPanel's "Let's Encrypt" or your hosting provider

## SSL/HTTPS Setup

Most cPanel hosting provides free SSL certificates:

1. In cPanel, go to "SSL/TLS Status"
2. Click "Run AutoSSL" for your domain
3. Wait for the certificate to be issued
4. Your site will now be accessible via HTTPS

## Common cPanel File Locations

- **Main domain**: `/home/username/public_html/`
- **Subdomain**: `/home/username/public_html/subdomain/`
- **Addon domain**: `/home/username/public_html/addondomain/`

Replace `username` with your actual cPanel username.

## Need Help?

If you encounter issues:
1. Check your cPanel error logs (in "Errors" section)
2. Contact your hosting provider's support
3. Ensure your hosting supports static HTML sites (most do)

---

Your portfolio is now live! Share it with the world! 🚀

