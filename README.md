# DevBurguer Interface

A React-based user interface for the DevBurguer application, built with modern web technologies.

## Technologies Used

- **React** (v19.2.0) - JavaScript library for building user interfaces
- **Vite** (v7.2.4) - Fast build tool and development server
- **Styled Components** (v6.3.8) - CSS-in-JS library for styling
- **ESLint** - Code linting tool

## Prerequisites

- Node.js (v14 or higher recommended)
- Yarn or npm package manager

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd devburguer-interface
   ```

2. Install dependencies:
   ```bash
   yarn install
   # or
   npm install
   ```

## Available Scripts

- `yarn dev` or `npm run dev` - Start the development server
- `yarn build` or `npm run build` - Build the app for production
- `yarn lint` or `npm run lint` - Run ESLint to check code quality
- `yarn preview` or `npm run preview` - Preview the production build locally

## Project Structure

```
src/
├── assets/          # Static assets (images, icons)
├── components/      # Reusable UI components
├── containers/      # Page-level components (e.g., Login)
├── hooks/           # Custom React hooks
├── routes/          # Application routing
├── services/        # API services and utilities
├── styles/          # Global styles and theme
└── utils/           # Utility functions
```

## Development

1. Start the development server:
   ```bash
   yarn dev
   ```

2. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Building for Production

```bash
yarn build
```

The built files will be in the `dist/` directory.

## Contributing

1. Follow the existing code style
2. Run `yarn lint` before committing
3. Ensure all tests pass (if applicable)

## License

This project is private and proprietary.
