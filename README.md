# Party Menu Landing Page Demo

A pixel-perfect React implementation of a party menu landing page based on Figma designs.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Open http://localhost:3000 in your browser
```

## 📱 Features

- **Figma-to-Code**: Pixel-perfect implementation of Figma design
- **Interactive UI**: Category selection, search bar, and interactive buttons
- **Responsive Design**: Mobile-first approach with flexible layouts
- **Modern React**: Functional components with hooks
- **Clean CSS**: Organized styling with animations and hover effects

## 🎯 Component Architecture

### SearchBar Component
- Back arrow navigation
- Search input with placeholder
- Magnifying glass icon
- Reusable with customizable placeholder

### CategoryButtons Component
- Dynamic category rendering
- Active state management
- Click handlers for category selection
- Item count display

### FilterSwitches Component
- Veg/Non-veg filter toggles
- Selection status display
- Interactive switch controls

### MenuHeader Component
- Section title display
- Dropdown icon for expandable sections
- Customizable title prop

### MenuItem Component
- Individual food item display
- Veg/Non-veg indicators
- Add button with callback
- Image with hover effects
- Ingredient information

### BottomSection Component
- Total dish counter
- Continue button with callback
- Fixed positioning
- Dynamic total count

## 💻 Technical Stack

- **React.js** - Component-based UI library with hooks
- **Component Architecture** - Modular, reusable components
- **CSS3** - Component-scoped styling with flexbox and animations
- **SVG Icons** - Scalable vector graphics
- **Unsplash Images** - High-quality food images
- **Modern JavaScript** - ES6+ features and destructuring

## 📋 Code Structure

```
src/
├── components/
│   ├── SearchBar/
│   │   ├── SearchBar.js
│   │   ├── SearchBar.css
│   │   └── index.js
│   ├── CategoryButtons/
│   │   ├── CategoryButtons.js
│   │   ├── CategoryButtons.css
│   │   └── index.js
│   ├── FilterSwitches/
│   │   ├── FilterSwitches.js
│   │   ├── FilterSwitches.css
│   │   └── index.js
│   ├── MenuHeader/
│   │   ├── MenuHeader.js
│   │   ├── MenuHeader.css
│   │   └── index.js
│   ├── MenuItem/
│   │   ├── MenuItem.js
│   │   ├── MenuItem.css
│   │   └── index.js
│   └── BottomSection/
│       ├── BottomSection.js
│       ├── BottomSection.css
│       └── index.js
├── App.js          # Main application component
├── LandingPage.js  # Landing page container
├── LandingPage.css # Main layout styling
└── index.js        # Application entry point
```

## 🎨 Design Implementation

- **Colors**: Exact color codes from Figma (#ff8800, #1C1C1C, etc.)
- **Typography**: Open Sans font family
- **Spacing**: Precise padding and margins
- **Layout**: Flexbox-based responsive design

## 📖 Documentation

See `CODE_EXPLANATION.md` for detailed technical documentation and code walkthrough.

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

---

**Created for interview demonstration - showcasing React.js skills and Figma-to-code conversion abilities.**