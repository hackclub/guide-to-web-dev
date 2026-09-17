# Git & GitHub

Git tracks changes to your code over time. GitHub hosts your Git projects online so others (and future you) can see and collaborate on them.

## One-time setup

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

## Starting a project

```bash
git init                 # start tracking this folder
git add .                # stage all changes
git commit -m "Initial commit"
```

## The everyday loop

```bash
git status               # what changed?
git add <file>           # stage specific file(s)
git commit -m "message"  # save a snapshot
```

Write commit messages that explain *why*, not just *what* - "Fix nav not closing on mobile" beats "update code".

## Connecting to GitHub

1. Create an empty repo on [github.com](https://github.com/new).
2. Point your local repo at it and push:

```bash
git remote add origin https://github.com/you/your-repo.git
git branch -M main
git push -u origin main
```

After that, `git push` sends new commits, and `git pull` fetches anyone else's.

## Branches (for trying things safely)

```bash
git checkout -b my-feature   # create + switch to a new branch
# ...make changes, commit...
git checkout main
git merge my-feature
```

And finally: [Deploying a Site](#05-deploying-a-site.md) to put your project online.
