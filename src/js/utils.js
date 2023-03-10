export const findAncestor = (el, cls) => {
  // eslint-disable-next-line curly
  while ((el = el.parentElement) && !el.classList.contains(cls));
  return el;
};

export const dublicateDeep = (obj) => JSON.parse( JSON.stringify(obj) );
