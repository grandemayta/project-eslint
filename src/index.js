const greetins = 'Hello world!';

if (greetins) {
  const bodyEl = document.body;
  const h1El = document.createElement('h1');
  const textNode = document.createTextNode(greetins);
  h1El.appendChild(textNode);
  bodyEl.appendChild(h1El);
}
