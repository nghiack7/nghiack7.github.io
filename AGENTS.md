# AGENTS.md

## Project Overview

This is Nghia Nguyen's personal portfolio website that showcases skills, experience, and projects. The project is built as a modern single-page application using Vite as the build tool.

**Current Structure:**
- Frontend: HTML, CSS, JavaScript (Vanilla)
- Build Tool: Vite 5.x
- Deployment: GitHub Pages
- Features: Dark mode, responsive design, downloadable CV

**Current Features:**
- `/game` route with multiple offline games
- Games implemented in pure JavaScript for GitHub Pages compatibility
- Game categories: 2048, Caro (Tic-tac-toe), Flappy Bird, Airplane arcade-style games
- GitHub Actions for automated deployment

## Development Environment Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

**Requirements:**
- Node.js 18+
- Git

## Build and Test Commands

```bash
# Development
npm run dev          # Starts Vite dev server on localhost:3000

# Production
npm run build        # Builds to ./dist directory
npm run preview      # Preview production build locally
```

## Code Style Guidelines

**Frontend:**
- Use modern ES6+ JavaScript
- Follow consistent indentation (2 spaces)
- Use CSS custom properties for theming
- Maintain responsive design principles
- Dark mode compatibility required

**JavaScript Games:**
- Use modern ES6+ syntax
- Follow consistent naming conventions
- Implement proper error handling
- Optimize for web performance
- Use vanilla JavaScript for compatibility

## Project Structure

```
├── index.html          # Main portfolio page
├── assets/
│   ├── css/           # Stylesheets (including dark mode)
│   └── js/            # JavaScript modules
├── games/             # JavaScript games
├── dist/              # Build output
├── package.json       # Node.js dependencies
├── vite.config.js     # Vite configuration
└── .github/workflows/ # GitHub Actions for deployment
```

## Testing Instructions

**Frontend Testing:**
- Manually test all responsive breakpoints
- Verify dark/light mode switching
- Test all navigation links and smooth scrolling
- Validate HTML with W3C validator
- Check accessibility with screen readers

**Game Testing:**
- Test game logic in JavaScript
- Verify games load correctly in all major browsers
- Test game performance on mobile devices
- Ensure games work offline

## Deployment Guidelines

**GitHub Pages:**
- Deployment happens automatically on push to `master`
- Build artifacts go to `dist/` directory
- Use GitHub Actions for automated builds

**Game Deployment:**
- Copy JavaScript games to production build
- Serve games as static HTML/CSS/JS files
- Games accessible via `/game/*` routes

## Pull Request Guidelines

**Commit Messages:**
- Use conventional commits format: `type(scope): description`
- Examples: `feat: add 2048 game`, `fix: responsive layout issue`

**Review Process:**
- Ensure build passes
- Test responsive design
- Verify dark mode compatibility
- Check game performance if applicable

## Security Considerations

- No sensitive data in frontend code
- Sanitize any user inputs in games
- Use HTTPS for all external resources
- Validate JavaScript security boundaries
- Keep dependencies updated

## Game Development Notes

**Planned Games:**
1. **2048** - Classic sliding puzzle game
2. **Caro** - Tic-tac-toe variant with larger grid
3. **Flappy Bird** - Side-scrolling obstacle game
4. **Airplane** - Top-down arcade shooter

**Technical Approach:**
- Write games in pure JavaScript for GitHub Pages compatibility
- Use HTML5 Canvas or DOM manipulation for rendering
- Implement touch controls for mobile
- Store high scores in localStorage
- Focus on performance and clean code

**File Organization:**
```
games/
├── 2048/
│   └── index.html     # Complete game in single file
├── caro/
│   └── index.html
├── flappy/
│   └── index.html
└── airplane/
    └── index.html
```

## AI Agent Instructions

When working on this project:

1. **Always maintain responsive design** - Test changes on mobile and desktop
2. **Preserve dark mode compatibility** - Use CSS custom properties
3. **Keep the portfolio professional** - Games should enhance, not distract from CV
4. **Optimize for performance** - Minimize bundle size, optimize images
5. **Follow existing patterns** - Match the current code style and structure
6. **Test thoroughly** - Especially cross-browser compatibility for games

**For game development:**
- Prioritize game logic correctness over fancy graphics
- Ensure games work offline once loaded
- Implement proper error handling
- Add loading states for better UX
- Keep games lightweight for fast loading