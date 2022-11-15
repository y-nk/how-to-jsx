export function createElement(tag, attrs = {}, ...children) {
  const el = document.createElement(tag)

  if (attrs) {
    for (const [name, value] of Object.entries(attrs)) {
      el.setAttribute(name, value?.toString() ?? name);
    }
  }

  children.forEach(child => {
    if (typeof child === 'string') {
      child = document.createTextNode(child)
    }

    el.appendChild(child)
  })

  return el;
}
