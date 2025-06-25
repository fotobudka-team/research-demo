# Fotobudka - Modern AI Startup Website

A sleek, modern static website for the Fotobudka AI project, designed with 2025 tech startup aesthetics. Built for GitHub Pages deployment with Apple-inspired minimalist design.

## 🎨 Design Features

- **Modern 2025 AI/Tech Startup Aesthetic**
- **Apple-inspired Minimalist Design**
- **Black & White Color Scheme**
- **Bulma CSS Framework** for consistency
- **Inter Font** for professional typography
- **Glassmorphism Effects** with backdrop blur
- **Smooth Animations & Micro-interactions**
- **Fully Responsive** (mobile-first approach)

## 📁 Structure

- `index.html` - Demo page with full-screen Gradio embed
- `poster.html` - Research poster with modal view
- `team.html` - Team showcase with modern cards
- `styles.css` - Custom CSS with modern design system
- `script.js` - Enhanced JavaScript with smooth interactions
- `assets/` - Images and media files
  - `poster.png` - Research poster (add your poster here)
  - `team/` - Team member photos (member1.jpg through member5.jpg)

## ✨ New Features

### Enhanced Demo Page
- **Full-screen iframe** that occupies entire space below hero
- **Elegant loading animation** with modern spinner
- **Glassmorphism container** with subtle shadows
- **80vh height** for immersive experience

### Modern Navigation
- **Glassmorphism navbar** with backdrop blur
- **Smooth scroll effects** and active states
- **Mobile-optimized** burger menu with Bulma
- **Fixed positioning** with scroll-based transparency

### Team Section
- **Card-based layout** with hover animations
- **Professional avatar styling** with rounded borders
- **Clean contact buttons** with brand colors
- **Staggered animations** on scroll

### Poster Display
- **Modal overlay** with Bulma modal system
- **High-resolution image support**
- **Download functionality** with modern buttons
- **Smooth zoom interactions**

## 🚀 Setup Instructions

### 1. Add Your Images

```
assets/
├── poster.png              # Your research poster (1200x1600px recommended)
└── team/
    ├── member1.jpg         # Alex Johnson (300x300px, square)
    ├── member2.jpg         # Sarah Chen
    ├── member3.jpg         # Michael Rodriguez  
    ├── member4.jpg         # Emily Wang
    └── member5.jpg         # David Thompson
```

### 2. Customize Content

**Update Team Information** in `team.html`:
- Replace placeholder names with actual team members
- Update email addresses, GitHub, and LinkedIn profiles
- Modify roles and descriptions

**Update Demo URL** in `index.html`:
- Currently set to: `https://ea6024e4e97575689b.gradio.live/?__theme=light`
- Replace with your actual Gradio demo URL

### 3. GitHub Pages Deployment

1. **Create Repository**: New GitHub repository (public for free Pages)
2. **Upload Files**: All files from this directory
3. **Enable Pages**: 
   - Go to Settings → Pages
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
4. **Live Site**: `https://yourusername.github.io/repository-name`

## 💻 Local Development

### Recommended: Python HTTP Server
```bash
# Start server (auto-opens browser)
python server.py

# Manual start
python -m http.server 8000
```

### Alternative: Node.js
```bash
npm install -g http-server
http-server -p 8000
```

### VS Code Live Server
1. Install "Live Server" extension
2. Right-click `index.html` → "Open with Live Server"

## 🎯 Modern Design System

### Color Palette
```css
--primary-black: #000000
--primary-white: #ffffff  
--dark-gray: #1a1a1a
--medium-gray: #6b7280
--light-gray: #f3f4f6
--accent-gray: #e5e7eb
```

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Letter Spacing**: Tight (-0.01em to -0.02em)
- **Line Heights**: Optimized for readability

### Shadows & Effects
```css
--shadow-subtle: Modern card elevation
--shadow-medium: Interactive elements
--shadow-large: Hero elements and modals
```

## 🔧 Technical Specifications

### Framework & Libraries
- **Bulma CSS 0.9.4** - Modern CSS framework
- **Font Awesome 6.5.0** - Icon system
- **Inter Font** - Typography
- **Vanilla JavaScript** - No dependencies

### Performance Optimizations
- **Lazy loading** for images
- **Debounced scroll** events
- **CSS transitions** over JavaScript animations
- **Optimized asset loading**
- **Minimal external dependencies**

### Browser Support
- ✅ Chrome/Edge (full support)
- ✅ Firefox (full support)  
- ✅ Safari (full support)
- ✅ Mobile browsers (responsive)

## 🎨 Customization Guide

### Changing Colors
Update CSS variables in `styles.css`:
```css
:root {
    --primary-black: #your-color;
    --primary-white: #your-color;
    /* ... */
}
```

### Layout Modifications
- **Bulma Grid System** for responsive layouts
- **CSS Grid & Flexbox** for complex arrangements
- **Custom CSS classes** for specific styling

### Adding New Sections
1. Use Bulma section classes
2. Follow established design patterns
3. Add scroll animations in `script.js`

## 📱 Responsive Breakpoints

```css
/* Mobile: < 768px */
/* Tablet: 768px - 1024px */
/* Desktop: > 1024px */
```

## 🚀 Deployment Checklist

- [ ] Add team photos to `assets/team/`
- [ ] Add research poster to `assets/`
- [ ] Update team information in `team.html`
- [ ] Verify Gradio demo URL in `index.html`
- [ ] Test all pages locally
- [ ] Check responsive design on mobile
- [ ] Verify all links work
- [ ] Optimize images (WebP recommended)
- [ ] Deploy to GitHub Pages

## 🎯 What's Different from the Original

### Visual Improvements
- ✨ **Modern 2025 design** vs. late 90s look
- 🎨 **Apple-inspired minimalism** vs. colorful gradients
- ⚫ **Black & white palette** vs. purple theme
- 📱 **Enhanced mobile experience**

### Technical Upgrades
- 🏗️ **Bulma framework** vs. custom CSS
- 🔧 **Modern JavaScript** with enhanced interactions
- 📺 **Full-screen demo** vs. small iframe
- ⚡ **Better performance** and loading states

### User Experience
- 🎭 **Smooth animations** and micro-interactions
- 🔍 **Better accessibility** and focus states
- 📋 **Professional layout** with card-based design
- 🎯 **Improved navigation** and user flow

## 📞 Support

For technical issues:
- Check browser console for errors
- Verify all file paths are correct
- Test images load properly
- Ensure Gradio URL is accessible

For GitHub Pages issues:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- Check repository is public
- Verify branch/folder settings

---

**Built for the future of AI photography** 🤖📸
