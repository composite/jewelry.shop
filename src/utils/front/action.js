export function batch(node, options) {
  if(!options || !Array.isArray(options) || !options.length) return {};
  const returns = options.map(opt => opt.isArray() ? opt[0](node, opt[1]) : opt.func(node, opt.param));

  return {
    update(opts) { returns.forEach((on, i) => on.update(opts[i].isArray() ? opts[i][1] :opts[i].param)); },
    destroy() { returns.forEach(on => on.destroy()); }
  }
}

export function mixin(options) {
  return node => {
    const returns = options.map(opt => opt.isArray() ? opt[0](node, opt[1]) : opt.func(node, opt.param));
    return {
      destroy() { returns.forEach(on => on.destroy()); }
    }
  }
}

export default {
  batch,
  mixin
}
