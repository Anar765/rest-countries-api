# REST Countries API with Color Theme Switcher

A modern, interactive web application that displays country information from the REST Countries API with advanced filtering, search, and dark/light theme switching capabilities.

## Table of Contents

- [REST Countries API with Color Theme Switcher](#rest-countries-api-with-color-theme-switcher)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Links](#links)
  - [Tech Stack](#tech-stack)
  - [Project Structure](#project-structure)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Author](#author)

## Overview

This project challenges developers to build a fully functional country information browser with a REST API integration, complex state management, and theme persistence. Users can explore countries globally, search and filter by region, view detailed information, and browse neighboring countries with a smooth dark/light mode experience.

## Features

- **Homepage with Country Grid**: Display all countries from the REST Countries API in a responsive card layout
- **Search Functionality**: Find countries by name in real-time
- **Regional Filtering**: Filter countries by geographic region
- **Country Details Page**: View comprehensive information about a selected country
- **Border Country Navigation**: Click through to neighboring countries seamlessly
- **Dark/Light Theme Toggle**: Switch between color schemes with saved preference using localStorage
- **Type-Safe Development**: Full TypeScript support for robust code

## Links

- Solution URL: [Frontend Mentor](https://www.frontendmentor.io/solutions/rest-countries-explorer-react-and-typescript--UOyIbiT7N)
- Live Site URL: [Global Explorer](https://global-explorer-sigma.vercel.app/)

## Tech Stack

- **React 18** - UI library for building interactive components
- **TypeScript** - Static typing for type safety and better DX
- **Vite** - Lightning-fast build tool and dev server
- **CSS3** - Custom properties, Flexbox, Grid for styling and layout
- **REST Countries API** - Data source for country information
- **localStorage** - Browser storage for theme persistence
- **React Router** - Client-side routing (if implemented)

## Project Structure

```
src/
├── components/
│   ├── CountryCard.tsx       # Displays individual country in grid
│   ├── CountrySearchFilter.tsx # Search and filter controls
│   ├── Header.tsx            # App header with theme toggle
│   └── Main.tsx              # Main content wrapper
├── pages/
│   ├── HomePage.tsx          # Countries grid view
│   ├── CountryDetails.tsx    # Individual country detail page
│   └── NotFound.tsx          # 404 page
├── types/
│   └── country.type.ts       # TypeScript type definitions
├── App.tsx                   # Root component
├── main.tsx                  # Entry point
├── index.css                 # Global styles
├── vite.config.ts            # Vite configuration
└── tsconfig.json             # TypeScript configuration
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone [repository-url]

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The application will be available at `http://localhost:5173` (default Vite port).

## Author

- Frontend Mentor: [@Anar765](https://www.frontendmentor.io/profile/Anar765)
- GitHub: [@Anar765](https://github.com/Anar765)
