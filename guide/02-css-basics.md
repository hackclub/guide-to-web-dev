# CSS Basics

CSS (Cascading Style Sheets) controls how HTML looks — color, spacing, layout, fonts.

## Linking a stylesheet

```html
<link rel="stylesheet" href="style.css">
```

## A rule looks like this

```css
h1 {
  color: #ec3750;
  font-size: 2rem;
}
```

- `h1` is the **selector** — which elements this rule applies to.
- Everything inside `{ }` is a list of **property: value;** pairs.

## Selecting things

```css
/* by tag */
p { line-height: 1.5; }

/* by class (class="card") */
.card { border: 1px solid #ddd; }

/* by id (id="header") */
#header { position: sticky; }

/* combinations */
.card h2 { margin-top: 0; }
```

## The box model

Every element is a box made of, from the inside out:

1. **content** - the text/image itself
2. **padding** - space inside the border
3. **border** - the edge of the box
4. **margin** - space outside the border, between boxes

```css
.box {
  padding: 16px;
  border: 1px solid #ccc;
  margin: 20px;
}
```

## Layout with flexbox

```css
.layout {
  display: flex;
  gap: 16px;
}
```

`display: flex` turns a container's children into a row (by default) that you can align, space out, or wrap with a handful of extra properties (`justify-content`, `align-items`, `flex-wrap`).

Next up: [JavaScript Basics](#03-javascript-basics.md) to make the page interactive.
