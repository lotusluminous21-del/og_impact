# Original Global Impact

A modern, responsive business automation services website built with React, TypeScript, and Tailwind CSS. Features a sleek dark/light theme design with smooth animations and interactive 3D elements.

## 🚀 Features

- **Modern UI/UX**: Clean, professional design with dark/light theme support
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Framer Motion powered animations and transitions
- **3D Elements**: Three.js integration for interactive 3D components
- **Performance Optimized**: Built with Vite for fast development and production builds
- **TypeScript**: Full type safety throughout the application
- **Accessibility**: WCAG compliant with proper semantic HTML

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **Language**: TypeScript 5.8.3
- **Build Tool**: Vite 7.1.2
- **Styling**: Tailwind CSS 3.4.17
- **Animations**: Framer Motion 12.23.12
- **3D Graphics**: Three.js 0.179.1 + React Three Fiber
- **State Management**: Zustand 5.0.8
- **Icons**: Lucide React 0.541.0
- **Linting**: ESLint 9.33.0

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 9.0.0 or higher (comes with Node.js)

You can check your versions with:
```bash
node --version
npm --version
```

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd original_global_impact
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📁 Project Structure

```
original_global_impact/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, logos, and static files
│   ├── components/
│   │   ├── animations/    # Animation components
│   │   ├── sections/      # Page sections (Hero, Services, etc.)
│   │   └── ui/           # Reusable UI components
│   ├── hooks/            # Custom React hooks
│   ├── store/            # Zustand state management
│   ├── styles/           # Global styles
│   ├── utils/            # Utility functions
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global CSS styles
├── package.json          # Dependencies and scripts
├── vite.config.ts        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🛠️ Available Scripts

- **`npm run dev`**: Start development server with hot reload
- **`npm run build`**: Build the application for production
- **`npm run preview`**: Preview the production build locally
- **`npm run lint`**: Run ESLint to check code quality

## 🏗️ Building for Production

### 1. Build the Application

```bash
npm run build
```

This will create a `dist` folder with optimized production files.

### 2. Preview Production Build

```bash
npm run preview
```

This will serve the production build locally for testing.

### 3. Deploy

The `dist` folder contains all the files needed for deployment. You can deploy to any static hosting service:

- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your repository and it will auto-deploy
- **GitHub Pages**: Use the `dist` folder as your source
- **AWS S3**: Upload the contents of `dist` folder

## 🎨 Customization

### Theme Colors

The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Dark blue colors
  },
  secondary: {
    // Dark orange colors
  },
  dark: {
    // Dark background colors
  }
}
```

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Import and add it to `src/App.tsx`
3. Follow the existing pattern for consistent styling

### Styling

The project uses Tailwind CSS for styling. All custom styles are in:
- `src/index.css` - Global styles
- `tailwind.config.js` - Tailwind configuration
- Component-specific styles in individual component files

## 🔧 Development

### Code Quality

The project uses ESLint for code quality. Run the linter with:

```bash
npm run lint
```

### TypeScript

The project is fully typed with TypeScript. The configuration is in:
- `tsconfig.json` - Main TypeScript configuration
- `tsconfig.app.json` - Application-specific configuration
- `tsconfig.node.json` - Node.js specific configuration

### Performance Optimizations

- **Code Splitting**: Automatic with Vite
- **Lazy Loading**: Components are optimized for performance
- **Image Optimization**: Use appropriate image formats and sizes
- **Bundle Analysis**: Use `npm run build` to see bundle size

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Mobile Support

The application is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1440px+)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Troubleshooting

### Common Issues

**Port already in use:**
```bash
# Kill the process using port 5173
npx kill-port 5173
# Or use a different port
npm run dev -- --port 3000
```

**Dependencies issues:**
```bash
# Clear npm cache
npm cache clean --force
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build errors:**
```bash
# Check TypeScript errors
npx tsc --noEmit
# Check for linting issues
npm run lint
```

## 📞 Support

For support or questions, please contact the development team or create an issue in the repository.

---

**Original Global Impact** - Transforming businesses with cutting-edge automation solutions.
