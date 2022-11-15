export function render({ tag, attrs = {}, children = [] }) {
  return JSON.stringify({
    tag,
    attrs,
    children,
  }, null, 2)
}
