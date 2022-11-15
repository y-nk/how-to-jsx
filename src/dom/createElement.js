const ignoreAttrs = ['__self', '__source']

export const FRAGMENT = "__domFragment__";

export function createElement(tag, attrs = {}, ...children) {
  if (typeof tag === "function") {
    return tag({ ...attrs, children });
  }

  const el = (
    tag === FRAGMENT
      ? document.createDocumentFragment()
      : document.createElement(tag)
  )

  if (attrs) {
    for (const [name, value] of Object.entries(attrs)) {
      if (ignoreAttrs.includes(name)) continue;

      if (name.startsWith("on") && name.toLowerCase() in window) {
        el.addEventListener(name.toLowerCase().substring(2), value);
      } else {
        el.setAttribute(name, value?.toString() ?? name);
      }
    }
  }

  children.flat().forEach(child => {
    if (typeof child === 'string' || child.nodeType === undefined) {
      child = document.createTextNode(child.toString())
    }

    el.appendChild(child)
  })

  return el;
}
