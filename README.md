# React + Vite Frontend Presentation

This project is a React application built with Vite, designed to showcase a frontend presentation.

## Development

To start the development server:

```bash
npm run dev
```

To build the project:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## GitHub Pages Deployment

This project is configured for deployment to GitHub Pages using the `gh-pages` package.

### Configuration

Before deploying, update the following:

1. In `package.json`, change the `homepage` field to match your GitHub username and repository:

```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/frontend-presentation",
```

2. Make sure the `base` path in `vite.config.js` matches your repository name:

```javascript
base: '/frontend-presentation/',
```

### Deployment Steps

1. Commit and push your changes to GitHub
2. Run the deploy command:

```bash
npm run deploy
```

This will:
- Build your project (`npm run build`)
- Push the build files to the `gh-pages` branch of your repository
- Make your site available at the URL specified in the `homepage` field

### First-time Setup

If this is your first time deploying to GitHub Pages:

1. Make sure your repository is public
2. After running `npm run deploy`, go to your repository settings on GitHub
3. Navigate to "Pages" in the sidebar
4. Under "Source", select "Deploy from a branch"
5. Select the `gh-pages` branch and save

Your site should now be published at the URL shown in the GitHub Pages section.
