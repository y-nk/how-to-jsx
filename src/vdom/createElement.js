export const FRAGMENT = "__vdomFragment__";

const ignoreAttrs = ['__self', '__source']

export function createElement(tag, attrs = {}, ...children) {
  if (typeof tag === "function") {
    return tag({ ...attrs, children });
  }

  if (attrs) {
    // force-remove the injected attrs from parcel
    ignoreAttrs
      .filter(attr => attrs[attr] !== undefined)
      .forEach(attr => delete attrs[attr])
  }

  return { tag, attrs, children };
}
