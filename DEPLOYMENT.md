# GitHub Pages Deployment Guide

## Quick Start

1. **Upload to GitHub**
   - Create a new repository on GitHub
   - Upload all files from this directory
   - Make sure the repository is public (required for free GitHub Pages)

2. **Enable GitHub Pages**
   - Go to your repository Settings
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

3. **Your site will be live at:**
   ```
   https://yourusername.github.io/repository-name
   ```

## Before You Deploy

### Required Images
Make sure to add these images before deploying:

- `assets/poster.png` - Your project poster
- `assets/team/member1.jpg` through `assets/team/member5.jpg` - Team photos

### Update Content
1. **Team Information** (`team.html`):
   - Replace placeholder names with real team members
   - Update email addresses, GitHub, and LinkedIn profiles
   - Modify roles and descriptions

2. **Demo URL** (`index.html`):
   - Update the iframe src URL to your actual Gradio demo
   - Currently set to: `https://ea6024e4e97575689b.gradio.live/`

## Local Testing

### Method 1: Python (Recommended)
```bash
python server.py
```
or
```bash
python -m http.server 8000
```

### Method 2: Node.js
```bash
npm install -g http-server
http-server -p 8000
```

### Method 3: VS Code Live Server
- Install "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

## What GitHub Pages Uses

GitHub Pages serves static files using a system similar to:
- **Web Server**: Nginx (similar to our Python HTTP server)
- **Processing**: None (static files only)
- **Caching**: CDN caching enabled
- **HTTPS**: Automatically enabled
- **Custom Domains**: Supported (optional)

Our Python server closely mimics this behavior for local development.

## Troubleshooting

### Common Issues:

1. **Images not loading**
   - Check file paths are correct
   - Ensure images are in the `assets/` folder
   - Verify file names match exactly (case-sensitive)

2. **Demo iframe not working**
   - Check if the Gradio URL is still active
   - Some browsers block iframes for security
   - Test the URL directly in a new tab

3. **GitHub Pages not updating**
   - Changes can take 5-10 minutes to deploy
   - Check the "Actions" tab for build status
   - Clear your browser cache

4. **Mobile layout issues**
   - The site is responsive and should work on mobile
   - Test with browser developer tools

### Performance Tips:

1. **Optimize Images**
   - Compress images before uploading
   - Use WebP format for better compression
   - Recommended sizes:
     - Poster: Max 2MB, 1200x1600px
     - Team photos: Max 500KB, 300x300px

2. **Fast Loading**
   - All CSS/JS is optimized
   - Uses CDN for Font Awesome
   - Minimal external dependencies

## Advanced Configuration

### Custom Domain (Optional)
1. Add a `CNAME` file with your domain
2. Configure DNS settings
3. Enable HTTPS in repository settings

### SEO Optimization
The site includes:
- Proper meta tags
- Semantic HTML structure
- Alt text for images
- Clean URLs

### Analytics (Optional)
Add Google Analytics by including the tracking code in each HTML file's `<head>` section.

## File Structure
```
fotobudka-demo/
├── index.html          # Main demo page
├── poster.html         # Poster display page
├── team.html          # Team information page
├── styles.css         # Main stylesheet
├── script.js          # JavaScript functionality
├── server.py          # Local development server
├── README.md          # Project documentation
├── .gitignore         # Git ignore rules
└── assets/
    ├── poster.png     # Project poster (add this)
    └── team/          # Team photos (add these)
        ├── member1.jpg
        ├── member2.jpg
        ├── member3.jpg
        ├── member4.jpg
        └── member5.jpg
```

## Support

For GitHub Pages specific issues:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Pages Troubleshooting](https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-jekyll-build-errors-for-github-pages-sites)

For website issues:
- Check browser console for errors
- Validate HTML/CSS
- Test on multiple devices and browsers
