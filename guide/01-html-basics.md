# HTML Basics

HTML (HyperText Markup Language) gives a web page its structure : headings, paragraphs, links, images, and so on.

## The skeleton of every page

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Page</title>
</head>
<body>
  <h1>Hello, world!</h1>
</body>
</html>
```

- `<!DOCTYPE html>` tells the browser this is a modern HTML document.
- Everything inside `<head>` is metadata (title, character encoding, linked stylesheets).
- Everything inside `<body>` is what actually shows up on the page.

## Common tags

| Tag | Purpose |
|---|---|
| `<h1>`–`<h6>` | Headings, biggest to smallest |
| `<p>` | Paragraph |
| `<a href="...">` | Link |
| `<img src="..." alt="...">` | Image |
| `<ul>` / `<li>` | Bullet list |
| `<div>` | Generic block container |
| `<span>` | Generic inline container |

## Attributes

Tags can carry extra info as attributes, written `name="value"` inside the opening tag:

```html
<a href="https://hackclub.com">Hack Club</a>
```

> Tip: always give images an `alt` attribute : it's read aloud by screen readers and shown if the image fails to load.

Check out: [CSS Basics](#02-css-basics.md) to make this structure look good.
