function changeColor() {
  const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'black', 'white']
  const randomColor = colors[Math.floor(Math.random() * colors.length)]
  document.body.style.backgroundColor = randomColor;
)
