# Yokō Matcha Website

A modern, responsive website for Yokō Matcha - premium instant matcha brand.

## Features

- ✨ Modern, clean design
- 📱 Fully responsive
- ⚡ Built with React + Vite
- 🎨 Styled with Tailwind CSS
- 🖼️ Beautiful product showcases
- 📋 FAQ section
- 🛒 Call-to-action sections

## Quick Start

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

2. Run the development server:
```bash
npm run dev
```

The site will open at `http://localhost:3000`

### Build for Production

3. Build the project:
```bash
npm run build
```

4. Preview the production build:
```bash
npm run preview
```

## Project Structure

```
yoko-matcha-website/
├── src/
│   ├── assets/          # Images and static files
│   ├── components/      # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Products.jsx
│   │   ├── HowToMake.jsx
│   │   ├── Flavors.jsx
│   │   ├── FAQ.jsx
│   │   └── CTA.jsx
│   ├── App.jsx         # Main app component
│   ├── App.css         # App styles
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── public/             # Public assets
├── index.html          # HTML template
├── package.json        # Dependencies
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind configuration
└── postcss.config.js   # PostCSS configuration
```

## Sections

- **Header**: Navigation bar with logo and links
- **Hero**: Main landing section with product showcase
- **About**: Brand story and mission
- **Products**: Featured matcha drinks
- **How to Make**: Simple preparation instructions
- **Flavors**: Available flavor variants
- **FAQ**: Frequently asked questions
- **CTA**: Call-to-action and shop now button

## Technologies

- React 18
- Vite 6
- Tailwind CSS 3
- Google Fonts (Paytone One, Poppins)

## Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  'matcha-green': '#7EA400',
  'matcha-light': '#E5CAB1',
  'matcha-cream': '#F1F2AC',
}
```

### Fonts

Fonts are loaded from Google Fonts in `index.html`:
- Paytone One (headings)
- Poppins (body text)

## License

© 2024 Yokō Matcha. All rights reserved.

## Support

For any issues or questions, please contact us through the website.

---

Built with ❤️ and 🍵 by the Yokō team
