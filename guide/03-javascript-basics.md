# JavaScript Basics

JavaScript makes a page interactive, it can respond to clicks, change content, fetch data, and more.

## Adding JavaScript to a page

```html
<script src="app.js"></script>
```

Put this near the end of `<body>` so the page's HTML loads first.

## Variables

```js
let count = 0;       // can change later
const name = "Ava";  // never reassigned
```

## Functions

```js
function greet(name) {
  return `Hello, ${name}!`;
}

greet("world"); // "Hello, world!"
```

## Reacting to events

```js
const button = document.querySelector("#my-button");

button.addEventListener("click", () => {
  count += 1;
  button.textContent = `Clicked ${count} times`;
});
```

## Talking to the DOM

The DOM (Document Object Model) is JavaScript's live view of the page's HTML.

```js
document.querySelector("h1").textContent = "New title";
document.getElementById("list").innerHTML = "<li>New item</li>";
```

## Fetching data

```js
fetch("guides/manifest.json")
  .then((res) => res.json())
  .then((data) => console.log(data));
```


Look at: [Git & GitHub](#04-git-and-github.md) to save and share your code.
