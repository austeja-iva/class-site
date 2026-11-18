# My Portfolio

A plain HTML/CSS/JS portfolio with no framework and no build step.

## What's in here

```
index.html            the main page: About, Projects (+ Competitions), Thoughts
styles.css            all the styling (colors are at the very top)
data.js               YOUR CONTENT: projects, competitions, and the list of posts
main.js               turns data.js into cards (you rarely touch this)
thoughts/             one HTML file per post
  first-post.html     copy this to write a new post
resume.pdf            (add this yourself; the Resume button links to it)
```

## Editing checklist (do these first)

1. `index.html`: replace **Your Name**, the email, GitHub, and LinkedIn links, and the About text.
2. `index.html`: change the `yn.` logo to your initials.
3. `data.js`: fix the project descriptions and links, and delete anything you don't want shown.
4. Drop your `resume.pdf` into this folder.
5. Optional: change the colors at the top of `styles.css` (`--accent` is the green).

## See it on your computer

Open the folder in VS Code and install the **Live Server** extension. Then right-click
`index.html` and choose **Open with Live Server**. The page reloads whenever you save.

(Double-clicking `index.html` also works.)

## Deploy to Vercel

1. Make a GitHub repo (e.g. `portfolio`) and push this folder to it:
   ```bash
   git init
   git add .
   git commit -m "first version of portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
   git push -u origin main
   ```
2. Go to vercel.com, sign in with GitHub, click **Add New → Project**, and import the repo.
3. Framework preset: **Other**. Leave the build command empty. Click **Deploy**.
4. You'll get a URL like `portfolio-xyz.vercel.app`. From now on, every `git push` redeploys automatically.

## Connect your Porkbun domain

1. In Vercel, go to your project → **Settings → Domains** and add both `yourname.com` and `www.yourname.com`.
   Vercel will show the DNS records it wants. **Copy those exact values**, since they can be project-specific.
   Typically:
   - `A` record, host blank / `@`, value like `76.76.21.21` (or another IP Vercel shows)
   - `CNAME` record, host `www`, value like `cname.vercel-dns.com` (or a unique `...vercel-dns-0xx.com`)
2. In Porkbun, go to **Domain Management → your domain → DNS**.
   - **Delete Porkbun's default parking records first.** These are usually an `ALIAS` record pointing at
     `pixie.porkbun.com` and a wildcard `*` `CNAME`. If you leave them, they'll conflict with Vercel's records.
   - Add the `A` and `CNAME` records from step 1.
3. Wait a few minutes (sometimes up to an hour). Vercel's Domains page will turn green, and HTTPS is set up automatically.

## Adding stuff later

- **New project or competition:** copy a `{ ... }` block in `data.js`. Set `type: "competition"` and it shows
  up under the Competitions filter with a badge. Put placements in `award`.
- **New post:** copy `thoughts/first-post.html`, edit it, and add an entry to `THOUGHTS` in `data.js`.
