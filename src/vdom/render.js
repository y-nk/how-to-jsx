import { FRAGMENT } from "./createElement";

export function render(vnode) {
  if (typeof vnode === "string") {
    return document.createTextNode(vnode)
  }

  const { tag, attrs = {}, children = [] } = vnode

  const el = (
    tag === FRAGMENT
      ? document.createDocumentFragment()
      : document.createElement(tag)
  )

  if (attrs)
    for (const [name, value] of Object.entries(attrs)) {
      if (name.startsWith("on") && name.toLowerCase() in window) {
        el.addEventListener(name.toLowerCase().substring(2), value);
      } else {
        el.setAttribute(name, value?.toString() ?? name);
      }
    }

  children.flat().forEach((child) => {
    el.appendChild(render(child));
  });

  return el;
}
