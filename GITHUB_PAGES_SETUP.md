# GitHub Pages Deployment Setup

## Files Created/Modified

1. **next.config.ts** - Configured for static export with GitHub Pages support
2. **.github/workflows/deploy.yml** - GitHub Actions workflow for automatic deployment
3. **public/.nojekyll** - Prevents Jekyll processing on GitHub Pages

## Configuration Details

### next.config.ts
- `output: 'export'` - Enables static HTML export
- `images.unoptimized: true` - Required for static export (GitHub Pages doesn't support Next.js Image Optimization)
- `basePath: '/zhyldyz'` - Sets base path for project pages (only in production)

## Steps to Deploy

### 1. Commit and Push Changes
```bash
git add .
git commit -m "Configure for GitHub Pages deployment"
git push origin main
```

### 2. Enable GitHub Pages in Repository Settings
1. Go to your GitHub repository: https://github.com/YOUR_USERNAME/zhyldyz
2. Click on **Settings** tab
3. In the left sidebar, click **Pages**
4. Under **Build and deployment**:
   - Source: Select **GitHub Actions**
5. Save the settings

### 3. Trigger Deployment
Once you push your changes, the GitHub Actions workflow will automatically:
- Install dependencies
- Build the static site
- Deploy to GitHub Pages

Your site will be available at: `https://YOUR_USERNAME.github.io/zhyldyz`

## Monitoring Deployment

1. Go to the **Actions** tab in your GitHub repository
2. You'll see the "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually 2-3 minutes)
4. Once successful, visit your site URL

## Local Testing

Test the production build locally before deploying:
```bash
npm run build
npx serve@latest out
```

## Troubleshooting

### If deployment fails:
- Check the Actions tab for error logs
- Ensure all dependencies are in package.json
- Verify the build completes locally with `npm run build`

### If pages show 404:
- Verify basePath matches your repository name in next.config.ts
- Ensure .nojekyll file exists in public/ directory
- Check that GitHub Pages source is set to "GitHub Actions"

### If you're using a custom domain or user page (username.github.io):
Modify next.config.ts and remove or set basePath to empty:
```typescript
basePath: '',
```

