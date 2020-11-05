!function(){
  if ( typeof window.CustomEvent !== "function" ) {
    window.CustomEvent = function ( event, params ) {
      params = params || { bubbles: false, cancelable: false, detail: null };
      var evt = document.createEvent( 'CustomEvent' );
      evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
      return evt;
    };
  }

  var len = history.length;
  function eve(which, args) {
    var e = new CustomEvent('history');
    e.by = which;
    e.arguments = [].slice.call(args);
    e.length = history.length;
    e.scrollRestoration = history.scrollRestoration;
    e.state = history.state;
    return e;
  }
  function wrap(method) {
    var o = history[method];
    return function(){
      switch(method) {
        case 'go': len += arguments[0] || 0;break;
        case 'back': --len;break;
        case 'forward':
        case 'pushState':
           ++len;break;
      }
      var result = o.apply(this, arguments);
      setTimeout(function(){window.dispatchEvent(eve(method, arguments));});
      return result;
    }
  }
  ['pushState', 'replaceState', 'go', 'back', 'forward'].forEach(function(m){history[m] = wrap(m)});
  window.addEventListener('popstate', function(e){
    setTimeout(function(){
      var ev = new CustomEvent('history');
      ev.by = 'go';
      ev.arguments = [/*history.length - len*/];
      ev.length = history.length;
      ev.scrollRestoration = history.scrollRestoration;
      ev.state = e.state;
      len = history.length;
      window.dispatchEvent(ev);
    });
  })
}();
