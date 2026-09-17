# Deploying a Site

Once your site works locally, "deploying" just means putting the files somewhere the public internet can reach.

## Option 1: GitHub Pages (free, great for static sites)

1. Push your project to a GitHub repository (see [Git & GitHub](#04-git-and-github.md)).
2. In the repo, go to **Settings → Pages**.
3. Under "Build and deployment", choose the branch (usually `main`) and folder (usually `/` or `/docs`).
4. GitHub gives you a URL like `https://you.github.io/your-repo/`.

Every time you push, the site rebuilds automatically.

## Option 2: Vercel / Netlify (free, a bit more powerful)

1. Sign in with your GitHub account.
2. Import the repository.
3. Leave the defaults for a plain static site (no build command needed) and deploy.

Both give you a live URL immediately and redeploy on every push, plus preview URLs for branches.

## What actually happens

Your files (`index.html`, `style.css`, etc.) get copied onto a server that's always on and connected to the internet. Visiting the URL just downloads those files to the visitor's browser — same as opening them locally, except now anyone can reach them.

Congrats! You now know the basics of web development