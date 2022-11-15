export function createElement(tag, attrs, ...children) {
  const el = document.createElement(tag)

  children.forEach(child => {
    if (typeof child === 'string') {
      child = document.createTextNode(child)
    }

    el.appendChild(child)
  })

  return el;
}
