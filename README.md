# luca-higgins-site

Personal portfolio site — plain HTML/CSS/JS, no build step required.

## Structure

```
index.html         Home
about.html          About
projects.html       Project index
resume.html         Resume (+ PDF download)
contact.html        Contact
projects/           Individual project detail pages
css/style.css       All styling
js/main.js          Small nav/footer script
assets/resume/      Downloadable resume PDF
assets/images/      Add your project/headshot photos here
```

Each project page has an `image-placeholder` box marking where to drop in real photos or videos — just replace it with an `<img>` tag pointing at a file in `assets/images/`.

## Publish with GitHub Pages

1. **Create a repository on GitHub.**
   - Go to github.com → New repository.
   - Name it either `<your-username>.github.io` (gives you a site at the root of that URL) or anything else, e.g. `personal-site` (site will live at `<your-username>.github.io/personal-site`).
   - Keep it public, no need to add a README/gitignore (you already have files).

2. **Push this folder to the repo.** From inside this folder:
   ```
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

3. **Turn on GitHub Pages.**
   - In the repo on GitHub, go to Settings → Pages.
   - Under "Build and deployment", set Source to "Deploy from a branch".
   - Choose branch `main`, folder `/ (root)`, then Save.
   - GitHub will give you a live URL in a minute or two (Settings → Pages will show it).

4. **Updating the site later:** edit files locally, then
   ```
   git add .
   git commit -m "Update projects"
   git push
   ```
   GitHub Pages redeploys automatically within a minute or so of each push.

## Before you publish

- Add real photos/videos to `assets/images/` and swap them into the placeholder boxes on each page.
- Double check the LinkedIn URL and email in the footer/contact page are the ones you want public.
- Optional: add a custom domain via Settings → Pages → Custom domain, if you have one.
