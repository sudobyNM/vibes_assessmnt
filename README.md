# Jewelry E-Commerce Website

A beautiful and responsive jewelry e-commerce website built with React and Tailwind CSS v3. This project features a modern rose-gold design theme with a complete product showcase, mobile navigation, and professional layout.

## Preview
![Preview](./src/assets/preview.png)

## 🌟 Features

- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Modern UI**: Rose-gold color scheme with clean, professional layout
- **Product Gallery**: Interactive image gallery with thumbnail navigation
- **Mobile Navigation**: Slide-out sidebar menu for mobile devices
- **Product Details**: Comprehensive product information with specifications
- **Shopping Features**: Add to cart, quantity selector, and buy now functionality
- **Related Products**: "Similar to this" and "Top picks" product sections
- **Professional Footer**: Newsletter signup, social links, and company information

## 🛠️ Tech Stack

- **Frontend**: React 19.1.1
- **Styling**: Tailwind CSS v3.4.17
- **Build Tool**: Vite 7.1.2
- **Development**: Hot Module Replacement (HMR)
- **Icons**: Heroicons (SVG icons)
- **Fonts**: Inter (Google Fonts)

## 📦 Installation

### Prerequisites

Make sure you have the following installed on your system:
- **Node.js** (v16 or higher)
- **npm** (v7 or higher)

### Local Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd jewelry-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🎨 Design Features

### Color Palette
- **Primary**: Rose/Pink theme (`rose-300`, `rose-400`, `rose-500`)
- **Background**: Clean white backgrounds
- **Text**: Gray scale for optimal readability
- **Accents**: Green for success states, yellow for ratings

### Components Structure
```
src/
├── components/
│   ├── Header.jsx          # Navigation header with logo and menu
│   ├── MobileSidebar.jsx   # Mobile slide-out navigation
│   ├── ProductPage.jsx     # Main product display page
│   └── Footer.jsx          # Site footer with links
├── App.jsx                 # Main application component
├── main.jsx               # Application entry point
└── index.css              # Global styles and Tailwind imports
```

## 📱 Responsive Features

- **Mobile Navigation**: Hamburger menu with slide-out sidebar
- **Responsive Grid**: Adaptive product grid (2 cols mobile, 4 cols desktop)
- **Touch-Friendly**: Large buttons and touch targets for mobile
- **Flexible Layout**: Adapts to all screen sizes seamlessly

## 🛍️ Product Features

- **Image Gallery**: Main product image with thumbnail selection
- **Product Details**: Title, description, pricing, and specifications
- **Interactive Elements**: Quantity selector, add to cart, buy now
- **Product Information**: Features, shipping info, warranty details
- **Related Products**: Cross-selling with similar items

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

## 📄 Project Structure

```
jewelry-website/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   ├── assets/           # Images and static files
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind configuration
├── postcss.config.js     # PostCSS configuration
└── vite.config.js        # Vite configuration
```

## 🎯 Key Highlights

- **Performance**: Fast loading with Vite's optimized build
- **Accessibility**: Semantic HTML and proper ARIA labels
- **SEO Ready**: Proper meta tags and structured content
- **Modern Stack**: Latest React and Tailwind CSS versions
- **Developer Experience**: Hot reload, ESLint, and modern tooling

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙋‍♂️ Support

If you have any questions or need help with setup, please feel free to open an issue or contact the development team.

---

**Happy Shopping! 💎✨**