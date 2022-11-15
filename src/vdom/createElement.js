export const FRAGMENT = "__vdomFragment__";

export function createElement(tag, attrs = {}, ...children) {
  if (typeof tag === "function") {
    return tag({ ...attrs, children });
  }

  return { tag, attrs, children };
}
