# GitHub Pages Deployment Guide

## 🚀 Automatic Deployment (Recommended)

This project is configured with **GitHub Actions** for automatic deployment!

### How It Works

Simply push your changes to the `master` branch:

```bash
git add .
git commit -m "Your commit message"
git push origin master
```

GitHub Actions will automatically:
1. ✅ Build your project (`npm run build`)
2. ✅ Deploy to GitHub Pages
3. ✅ Your site will be live at https://mbilgil.github.io in 1-2 minutes!

### First-Time Setup

After your first push, configure GitHub Pages:

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - **Source**: GitHub Actions
4. Save the settings

That's it! Every push to `master` will now auto-deploy! 🎉

---

## 🔧 Manual Deployment (Alternative)

If you prefer manual deployment:

### Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Test locally**:
   ```bash
   npm run dev
   ```
   Visit: http://localhost:5173/mbilgil.github.io/

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

### What Happens During Manual Deployment

The `npm run deploy` command will:
- Run `npm run build` to create optimized production files
- Push the `dist` folder contents to the `gh-pages` branch
- Make your site available at https://mbilgil.github.io

---

## 📋 Workflow Status

You can monitor your deployments:
- Go to your repository on GitHub
- Click the **Actions** tab
- See the status of each deployment

---

## 🛠️ Troubleshooting

### Site shows 404
- Verify GitHub Pages is enabled in repository settings
- Check **Settings** → **Pages** → **Source** is set to "GitHub Actions"
- Wait a few minutes after deployment

### Styles not loading
- Ensure `base` in vite.config.js matches your repository name: `/mbilgil.github.io/`
- Clear browser cache and hard refresh (Cmd+Shift+R)

### Changes not appearing
- Check the **Actions** tab for deployment status
- Ensure the workflow completed successfully
- Wait 1-2 minutes after successful deployment

### Deployment failed
- Check the **Actions** tab for error details
- Ensure all dependencies are in `package.json`
- Try running `npm run build` locally to check for build errors
