import SimpleBar from 'simplebar';

export default function simplebar(node, options) {
  const scroller = new SimpleBar(node, options || {});
  return {
    destroy() { scroller.unMount(); }
  }
}
