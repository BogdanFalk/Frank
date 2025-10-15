# Contributing to Bogdan Falk Portfolio

Thank you for your interest in contributing! This document provides guidelines for contributing to this project.

## Code of Conduct

- Be respectful and professional
- Follow best practices and coding standards
- Write clean, maintainable code
- Test your changes thoroughly

## Development Setup

### Prerequisites
- Node.js >= 18.0.0
- npm >= 8.0.0

### Setup Steps
```bash
# Clone the repository
git clone https://github.com/BogdanFalk/Frank.git

# Install dependencies
npm install

# Start development server
npm run dev
```

## Code Standards

### Vue.js Components
- Use Vue 3 Composition API
- Follow PascalCase for component names
- Add JSDoc comments for complex functions
- Use TypeScript-style prop definitions where possible

### CSS/SCSS
- Use modular SCSS files for each component
- Follow BEM-like naming conventions
- Use responsive design (mobile-first)
- Avoid `!important` unless absolutely necessary

### JavaScript
- Use ES6+ syntax
- No console.log in production code
- Proper error handling with try-catch
- Comment complex logic

## Commit Messages

Follow the conventional commits specification:

```
feat: add new project card animation
fix: resolve mobile menu overflow issue
docs: update README with deployment steps
style: format code according to ESLint rules
refactor: improve project dialog performance
test: add unit tests for ProjectsSection
chore: update dependencies
```

## Pull Request Process

1. **Fork the repository** and create your branch from `main`
2. **Make your changes** following the code standards
3. **Test thoroughly** across different browsers
4. **Update documentation** if needed
5. **Submit a pull request** with a clear description

### PR Checklist
- [ ] Code follows the project's style guidelines
- [ ] Comments added for complex logic
- [ ] No console.log statements
- [ ] Tested on Chrome, Firefox, and Safari
- [ ] Mobile responsiveness verified
- [ ] No linter errors
- [ ] Documentation updated

## Testing

### Manual Testing
- Test on latest Chrome, Firefox, Safari, Edge
- Test responsive design (mobile, tablet, desktop)
- Test all interactive features
- Check accessibility with screen readers

### Performance
- Run Lighthouse audit
- Check bundle size
- Verify image optimization
- Test loading performance

## File Structure

```
src/
├── components/     # Vue components
├── css/           # SCSS stylesheets
├── layouts/       # Layout components
├── pages/         # Page components
└── router/        # Routing configuration
```

## Questions?

Feel free to open an issue for:
- Bug reports
- Feature requests
- Questions about the code
- Documentation improvements

---

Thank you for contributing! 🎉

