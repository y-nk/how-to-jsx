export function createElement(tag, attrs, ...children) {
  const el = document.createElement(tag)

  children.forEach(child => {
    el.appendChild(child)
  })

  return el;
}
