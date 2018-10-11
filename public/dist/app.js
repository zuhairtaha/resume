// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"javascripts/materialize.min.js":[function(require,module,exports) {
var define;
var global = arguments[3];
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Materialize v1.0.0 (http://materializecss.com)
 * Copyright 2014-2017 Materialize
 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
 */
var _get = function t(e, i, n) {
  null === e && (e = Function.prototype);
  var s = Object.getOwnPropertyDescriptor(e, i);

  if (void 0 === s) {
    var o = Object.getPrototypeOf(e);
    return null === o ? void 0 : t(o, i, n);
  }

  if ("value" in s) return s.value;
  var a = s.get;
  return void 0 !== a ? a.call(n) : void 0;
},
    _createClass = function () {
  function n(t, e) {
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
  }

  return function (t, e, i) {
    return e && n(t.prototype, e), i && n(t, i), t;
  };
}();

function _possibleConstructorReturn(t, e) {
  if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
}

function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}

function _classCallCheck(t, e) {
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

window.cash = function () {
  var i,
      o = document,
      a = window,
      t = Array.prototype,
      r = t.slice,
      n = t.filter,
      s = t.push,
      e = function e() {},
      h = function h(t) {
    return _typeof(t) == _typeof(e) && t.call;
  },
      d = function d(t) {
    return "string" == typeof t;
  },
      l = /^#[\w-]*$/,
      u = /^\.[\w-]*$/,
      c = /<.+>/,
      p = /^\w+$/;

  function v(t, e) {
    e = e || o;
    var i = u.test(t) ? e.getElementsByClassName(t.slice(1)) : p.test(t) ? e.getElementsByTagName(t) : e.querySelectorAll(t);
    return i;
  }

  function f(t) {
    if (!i) {
      var e = (i = o.implementation.createHTMLDocument(null)).createElement("base");
      e.href = o.location.href, i.head.appendChild(e);
    }

    return i.body.innerHTML = t, i.body.childNodes;
  }

  function m(t) {
    "loading" !== o.readyState ? t() : o.addEventListener("DOMContentLoaded", t);
  }

  function g(t, e) {
    if (!t) return this;
    if (t.cash && t !== a) return t;
    var i,
        n = t,
        s = 0;
    if (d(t)) n = l.test(t) ? o.getElementById(t.slice(1)) : c.test(t) ? f(t) : v(t, e);else if (h(t)) return m(t), this;
    if (!n) return this;
    if (n.nodeType || n === a) this[0] = n, this.length = 1;else for (i = this.length = n.length; s < i; s++) {
      this[s] = n[s];
    }
    return this;
  }

  function _(t, e) {
    return new g(t, e);
  }

  var y = _.fn = _.prototype = g.prototype = {
    cash: !0,
    length: 0,
    push: s,
    splice: t.splice,
    map: t.map,
    init: g
  };

  function k(t, e) {
    for (var i = t.length, n = 0; n < i && !1 !== e.call(t[n], t[n], n, t); n++) {
      ;
    }
  }

  function b(t, e) {
    var i = t && (t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector);
    return !!i && i.call(t, e);
  }

  function w(e) {
    return d(e) ? b : e.cash ? function (t) {
      return e.is(t);
    } : function (t, e) {
      return t === e;
    };
  }

  function C(t) {
    return _(r.call(t).filter(function (t, e, i) {
      return i.indexOf(t) === e;
    }));
  }

  Object.defineProperty(y, "constructor", {
    value: _
  }), _.parseHTML = f, _.noop = e, _.isFunction = h, _.isString = d, _.extend = y.extend = function (t) {
    t = t || {};
    var e = r.call(arguments),
        i = e.length,
        n = 1;

    for (1 === e.length && (t = this, n = 0); n < i; n++) {
      if (e[n]) for (var s in e[n]) {
        e[n].hasOwnProperty(s) && (t[s] = e[n][s]);
      }
    }

    return t;
  }, _.extend({
    merge: function merge(t, e) {
      for (var i = +e.length, n = t.length, s = 0; s < i; n++, s++) {
        t[n] = e[s];
      }

      return t.length = n, t;
    },
    each: k,
    matches: b,
    unique: C,
    isArray: Array.isArray,
    isNumeric: function isNumeric(t) {
      return !isNaN(parseFloat(t)) && isFinite(t);
    }
  });
  var E = _.uid = "_cash" + Date.now();

  function M(t) {
    return t[E] = t[E] || {};
  }

  function O(t, e, i) {
    return M(t)[e] = i;
  }

  function x(t, e) {
    var i = M(t);
    return void 0 === i[e] && (i[e] = t.dataset ? t.dataset[e] : _(t).attr("data-" + e)), i[e];
  }

  y.extend({
    data: function data(e, i) {
      if (d(e)) return void 0 === i ? x(this[0], e) : this.each(function (t) {
        return O(t, e, i);
      });

      for (var t in e) {
        this.data(t, e[t]);
      }

      return this;
    },
    removeData: function removeData(s) {
      return this.each(function (t) {
        return i = s, void ((n = M(e = t)) ? delete n[i] : e.dataset ? delete e.dataset[i] : _(e).removeAttr("data-" + name));
        var e, i, n;
      });
    }
  });
  var L = /\S+/g;

  function T(t) {
    return d(t) && t.match(L);
  }

  function $(t, e) {
    return t.classList ? t.classList.contains(e) : new RegExp("(^| )" + e + "( |$)", "gi").test(t.className);
  }

  function B(t, e, i) {
    t.classList ? t.classList.add(e) : i.indexOf(" " + e + " ") && (t.className += " " + e);
  }

  function D(t, e) {
    t.classList ? t.classList.remove(e) : t.className = t.className.replace(e, "");
  }

  y.extend({
    addClass: function addClass(t) {
      var n = T(t);
      return n ? this.each(function (e) {
        var i = " " + e.className + " ";
        k(n, function (t) {
          B(e, t, i);
        });
      }) : this;
    },
    attr: function attr(e, i) {
      if (e) {
        if (d(e)) return void 0 === i ? this[0] ? this[0].getAttribute ? this[0].getAttribute(e) : this[0][e] : void 0 : this.each(function (t) {
          t.setAttribute ? t.setAttribute(e, i) : t[e] = i;
        });

        for (var t in e) {
          this.attr(t, e[t]);
        }

        return this;
      }
    },
    hasClass: function hasClass(t) {
      var e = !1,
          i = T(t);
      return i && i.length && this.each(function (t) {
        return !(e = $(t, i[0]));
      }), e;
    },
    prop: function prop(e, i) {
      if (d(e)) return void 0 === i ? this[0][e] : this.each(function (t) {
        t[e] = i;
      });

      for (var t in e) {
        this.prop(t, e[t]);
      }

      return this;
    },
    removeAttr: function removeAttr(e) {
      return this.each(function (t) {
        t.removeAttribute ? t.removeAttribute(e) : delete t[e];
      });
    },
    removeClass: function removeClass(t) {
      if (!arguments.length) return this.attr("class", "");
      var i = T(t);
      return i ? this.each(function (e) {
        k(i, function (t) {
          D(e, t);
        });
      }) : this;
    },
    removeProp: function removeProp(e) {
      return this.each(function (t) {
        delete t[e];
      });
    },
    toggleClass: function toggleClass(t, e) {
      if (void 0 !== e) return this[e ? "addClass" : "removeClass"](t);
      var n = T(t);
      return n ? this.each(function (e) {
        var i = " " + e.className + " ";
        k(n, function (t) {
          $(e, t) ? D(e, t) : B(e, t, i);
        });
      }) : this;
    }
  }), y.extend({
    add: function add(t, e) {
      return C(_.merge(this, _(t, e)));
    },
    each: function each(t) {
      return k(this, t), this;
    },
    eq: function eq(t) {
      return _(this.get(t));
    },
    filter: function filter(e) {
      if (!e) return this;
      var i = h(e) ? e : w(e);
      return _(n.call(this, function (t) {
        return i(t, e);
      }));
    },
    first: function first() {
      return this.eq(0);
    },
    get: function get(t) {
      return void 0 === t ? r.call(this) : t < 0 ? this[t + this.length] : this[t];
    },
    index: function index(t) {
      var e = t ? _(t)[0] : this[0],
          i = t ? this : _(e).parent().children();
      return r.call(i).indexOf(e);
    },
    last: function last() {
      return this.eq(-1);
    }
  });
  var S,
      I,
      A,
      R,
      H,
      P,
      W = (H = /(?:^\w|[A-Z]|\b\w)/g, P = /[\s-_]+/g, function (t) {
    return t.replace(H, function (t, e) {
      return t[0 === e ? "toLowerCase" : "toUpperCase"]();
    }).replace(P, "");
  }),
      j = (S = {}, I = document, A = I.createElement("div"), R = A.style, function (e) {
    if (e = W(e), S[e]) return S[e];
    var t = e.charAt(0).toUpperCase() + e.slice(1),
        i = (e + " " + ["webkit", "moz", "ms", "o"].join(t + " ") + t).split(" ");
    return k(i, function (t) {
      if (t in R) return S[t] = e = S[e] = t, !1;
    }), S[e];
  });

  function F(t, e) {
    return parseInt(a.getComputedStyle(t[0], null)[e], 10) || 0;
  }

  function q(e, i, t) {
    var n,
        s = x(e, "_cashEvents"),
        o = s && s[i];
    o && (t ? (e.removeEventListener(i, t), 0 <= (n = o.indexOf(t)) && o.splice(n, 1)) : (k(o, function (t) {
      e.removeEventListener(i, t);
    }), o = []));
  }

  function N(t, e) {
    return "&" + encodeURIComponent(t) + "=" + encodeURIComponent(e).replace(/%20/g, "+");
  }

  function z(t) {
    var e,
        i,
        n,
        s = t.type;
    if (!s) return null;

    switch (s.toLowerCase()) {
      case "select-one":
        return 0 <= (n = (i = t).selectedIndex) ? i.options[n].value : null;

      case "select-multiple":
        return e = [], k(t.options, function (t) {
          t.selected && e.push(t.value);
        }), e.length ? e : null;

      case "radio":
      case "checkbox":
        return t.checked ? t.value : null;

      default:
        return t.value ? t.value : null;
    }
  }

  function V(e, i, n) {
    var t = d(i);
    t || !i.length ? k(e, t ? function (t) {
      return t.insertAdjacentHTML(n ? "afterbegin" : "beforeend", i);
    } : function (t, e) {
      return function (t, e, i) {
        if (i) {
          var n = t.childNodes[0];
          t.insertBefore(e, n);
        } else t.appendChild(e);
      }(t, 0 === e ? i : i.cloneNode(!0), n);
    }) : k(i, function (t) {
      return V(e, t, n);
    });
  }

  _.prefixedProp = j, _.camelCase = W, y.extend({
    css: function css(e, i) {
      if (d(e)) return e = j(e), 1 < arguments.length ? this.each(function (t) {
        return t.style[e] = i;
      }) : a.getComputedStyle(this[0])[e];

      for (var t in e) {
        this.css(t, e[t]);
      }

      return this;
    }
  }), k(["Width", "Height"], function (e) {
    var t = e.toLowerCase();
    y[t] = function () {
      return this[0].getBoundingClientRect()[t];
    }, y["inner" + e] = function () {
      return this[0]["client" + e];
    }, y["outer" + e] = function (t) {
      return this[0]["offset" + e] + (t ? F(this, "margin" + ("Width" === e ? "Left" : "Top")) + F(this, "margin" + ("Width" === e ? "Right" : "Bottom")) : 0);
    };
  }), y.extend({
    off: function off(e, i) {
      return this.each(function (t) {
        return q(t, e, i);
      });
    },
    on: function on(a, i, r, l) {
      var n;

      if (!d(a)) {
        for (var t in a) {
          this.on(t, i, a[t]);
        }

        return this;
      }

      return h(i) && (r = i, i = null), "ready" === a ? (m(r), this) : (i && (n = r, r = function r(t) {
        for (var e = t.target; !b(e, i);) {
          if (e === this || null === e) return e = !1;
          e = e.parentNode;
        }

        e && n.call(e, t);
      }), this.each(function (t) {
        var e,
            i,
            n,
            s,
            _o = r;
        l && (_o = function o() {
          r.apply(this, arguments), q(t, a, _o);
        }), i = a, n = _o, (s = x(e = t, "_cashEvents") || O(e, "_cashEvents", {}))[i] = s[i] || [], s[i].push(n), e.addEventListener(i, n);
      }));
    },
    one: function one(t, e, i) {
      return this.on(t, e, i, !0);
    },
    ready: m,
    trigger: function trigger(t, e) {
      if (document.createEvent) {
        var i = document.createEvent("HTMLEvents");
        return i.initEvent(t, !0, !1), i = this.extend(i, e), this.each(function (t) {
          return t.dispatchEvent(i);
        });
      }
    }
  }), y.extend({
    serialize: function serialize() {
      var s = "";
      return k(this[0].elements || this, function (t) {
        if (!t.disabled && "FIELDSET" !== t.tagName) {
          var e = t.name;

          switch (t.type.toLowerCase()) {
            case "file":
            case "reset":
            case "submit":
            case "button":
              break;

            case "select-multiple":
              var i = z(t);
              null !== i && k(i, function (t) {
                s += N(e, t);
              });
              break;

            default:
              var n = z(t);
              null !== n && (s += N(e, n));
          }
        }
      }), s.substr(1);
    },
    val: function val(e) {
      return void 0 === e ? z(this[0]) : this.each(function (t) {
        return t.value = e;
      });
    }
  }), y.extend({
    after: function after(t) {
      return _(t).insertAfter(this), this;
    },
    append: function append(t) {
      return V(this, t), this;
    },
    appendTo: function appendTo(t) {
      return V(_(t), this), this;
    },
    before: function before(t) {
      return _(t).insertBefore(this), this;
    },
    clone: function clone() {
      return _(this.map(function (t) {
        return t.cloneNode(!0);
      }));
    },
    empty: function empty() {
      return this.html(""), this;
    },
    html: function html(t) {
      if (void 0 === t) return this[0].innerHTML;
      var e = t.nodeType ? t[0].outerHTML : t;
      return this.each(function (t) {
        return t.innerHTML = e;
      });
    },
    insertAfter: function insertAfter(t) {
      var s = this;
      return _(t).each(function (t, e) {
        var i = t.parentNode,
            n = t.nextSibling;
        s.each(function (t) {
          i.insertBefore(0 === e ? t : t.cloneNode(!0), n);
        });
      }), this;
    },
    insertBefore: function insertBefore(t) {
      var s = this;
      return _(t).each(function (e, i) {
        var n = e.parentNode;
        s.each(function (t) {
          n.insertBefore(0 === i ? t : t.cloneNode(!0), e);
        });
      }), this;
    },
    prepend: function prepend(t) {
      return V(this, t, !0), this;
    },
    prependTo: function prependTo(t) {
      return V(_(t), this, !0), this;
    },
    remove: function remove() {
      return this.each(function (t) {
        if (t.parentNode) return t.parentNode.removeChild(t);
      });
    },
    text: function text(e) {
      return void 0 === e ? this[0].textContent : this.each(function (t) {
        return t.textContent = e;
      });
    }
  });
  var X = o.documentElement;
  return y.extend({
    position: function position() {
      var t = this[0];
      return {
        left: t.offsetLeft,
        top: t.offsetTop
      };
    },
    offset: function offset() {
      var t = this[0].getBoundingClientRect();
      return {
        top: t.top + a.pageYOffset - X.clientTop,
        left: t.left + a.pageXOffset - X.clientLeft
      };
    },
    offsetParent: function offsetParent() {
      return _(this[0].offsetParent);
    }
  }), y.extend({
    children: function children(e) {
      var i = [];
      return this.each(function (t) {
        s.apply(i, t.children);
      }), i = C(i), e ? i.filter(function (t) {
        return b(t, e);
      }) : i;
    },
    closest: function closest(t) {
      return !t || this.length < 1 ? _() : this.is(t) ? this.filter(t) : this.parent().closest(t);
    },
    is: function is(e) {
      if (!e) return !1;
      var i = !1,
          n = w(e);
      return this.each(function (t) {
        return !(i = n(t, e));
      }), i;
    },
    find: function find(e) {
      if (!e || e.nodeType) return _(e && this.has(e).length ? e : null);
      var i = [];
      return this.each(function (t) {
        s.apply(i, v(e, t));
      }), C(i);
    },
    has: function has(e) {
      var t = d(e) ? function (t) {
        return 0 !== v(e, t).length;
      } : function (t) {
        return t.contains(e);
      };
      return this.filter(t);
    },
    next: function next() {
      return _(this[0].nextElementSibling);
    },
    not: function not(e) {
      if (!e) return this;
      var i = w(e);
      return this.filter(function (t) {
        return !i(t, e);
      });
    },
    parent: function parent() {
      var e = [];
      return this.each(function (t) {
        t && t.parentNode && e.push(t.parentNode);
      }), C(e);
    },
    parents: function parents(e) {
      var i,
          n = [];
      return this.each(function (t) {
        for (i = t; i && i.parentNode && i !== o.body.parentNode;) {
          i = i.parentNode, (!e || e && b(i, e)) && n.push(i);
        }
      }), C(n);
    },
    prev: function prev() {
      return _(this[0].previousElementSibling);
    },
    siblings: function siblings(t) {
      var e = this.parent().children(t),
          i = this[0];
      return e.filter(function (t) {
        return t !== i;
      });
    }
  }), _;
}();

var Component = function () {
  function s(t, e, i) {
    _classCallCheck(this, s), e instanceof Element || console.error(Error(e + " is not an HTML Element"));
    var n = t.getInstance(e);
    n && n.destroy(), this.el = e, this.$el = cash(e);
  }

  return _createClass(s, null, [{
    key: "init",
    value: function value(t, e, i) {
      var n = null;
      if (e instanceof Element) n = new t(e, i);else if (e && (e.jquery || e.cash || e instanceof NodeList)) {
        for (var s = [], o = 0; o < e.length; o++) {
          s.push(new t(e[o], i));
        }

        n = s;
      }
      return n;
    }
  }]), s;
}();

!function (t) {
  t.Package ? M = {} : t.M = {}, M.jQueryLoaded = !!t.jQuery;
}(window), "function" == typeof define && define.amd ? define("M", [], function () {
  return M;
}) : "undefined" == typeof exports || exports.nodeType || ("undefined" != typeof module && !module.nodeType && module.exports && (exports = module.exports = M), exports.default = M), M.version = "1.0.0", M.keys = {
  TAB: 9,
  ENTER: 13,
  ESC: 27,
  ARROW_UP: 38,
  ARROW_DOWN: 40
}, M.tabPressed = !1, M.keyDown = !1;

var docHandleKeydown = function docHandleKeydown(t) {
  M.keyDown = !0, t.which !== M.keys.TAB && t.which !== M.keys.ARROW_DOWN && t.which !== M.keys.ARROW_UP || (M.tabPressed = !0);
},
    docHandleKeyup = function docHandleKeyup(t) {
  M.keyDown = !1, t.which !== M.keys.TAB && t.which !== M.keys.ARROW_DOWN && t.which !== M.keys.ARROW_UP || (M.tabPressed = !1);
},
    docHandleFocus = function docHandleFocus(t) {
  M.keyDown && document.body.classList.add("keyboard-focused");
},
    docHandleBlur = function docHandleBlur(t) {
  document.body.classList.remove("keyboard-focused");
};

document.addEventListener("keydown", docHandleKeydown, !0), document.addEventListener("keyup", docHandleKeyup, !0), document.addEventListener("focus", docHandleFocus, !0), document.addEventListener("blur", docHandleBlur, !0), M.initializeJqueryWrapper = function (n, s, o) {
  jQuery.fn[s] = function (e) {
    if (n.prototype[e]) {
      var i = Array.prototype.slice.call(arguments, 1);

      if ("get" === e.slice(0, 3)) {
        var t = this.first()[0][o];
        return t[e].apply(t, i);
      }

      return this.each(function () {
        var t = this[o];
        t[e].apply(t, i);
      });
    }

    if ("object" == _typeof(e) || !e) return n.init(this, e), this;
    jQuery.error("Method " + e + " does not exist on jQuery." + s);
  };
}, M.AutoInit = function (t) {
  var e = t || document.body,
      i = {
    Autocomplete: e.querySelectorAll(".autocomplete:not(.no-autoinit)"),
    Carousel: e.querySelectorAll(".carousel:not(.no-autoinit)"),
    Chips: e.querySelectorAll(".chips:not(.no-autoinit)"),
    Collapsible: e.querySelectorAll(".collapsible:not(.no-autoinit)"),
    Datepicker: e.querySelectorAll(".datepicker:not(.no-autoinit)"),
    Dropdown: e.querySelectorAll(".dropdown-trigger:not(.no-autoinit)"),
    Materialbox: e.querySelectorAll(".materialboxed:not(.no-autoinit)"),
    Modal: e.querySelectorAll(".modal:not(.no-autoinit)"),
    Parallax: e.querySelectorAll(".parallax:not(.no-autoinit)"),
    Pushpin: e.querySelectorAll(".pushpin:not(.no-autoinit)"),
    ScrollSpy: e.querySelectorAll(".scrollspy:not(.no-autoinit)"),
    FormSelect: e.querySelectorAll("select:not(.no-autoinit)"),
    Sidenav: e.querySelectorAll(".sidenav:not(.no-autoinit)"),
    Tabs: e.querySelectorAll(".tabs:not(.no-autoinit)"),
    TapTarget: e.querySelectorAll(".tap-target:not(.no-autoinit)"),
    Timepicker: e.querySelectorAll(".timepicker:not(.no-autoinit)"),
    Tooltip: e.querySelectorAll(".tooltipped:not(.no-autoinit)"),
    FloatingActionButton: e.querySelectorAll(".fixed-action-btn:not(.no-autoinit)")
  };

  for (var n in i) {
    M[n].init(i[n]);
  }
}, M.objectSelectorString = function (t) {
  return ((t.prop("tagName") || "") + (t.attr("id") || "") + (t.attr("class") || "")).replace(/\s/g, "");
}, M.guid = function () {
  function t() {
    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
  }

  return function () {
    return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t();
  };
}(), M.escapeHash = function (t) {
  return t.replace(/(:|\.|\[|\]|,|=|\/)/g, "\\$1");
}, M.elementOrParentIsFixed = function (t) {
  var e = $(t),
      i = e.add(e.parents()),
      n = !1;
  return i.each(function () {
    if ("fixed" === $(this).css("position")) return !(n = !0);
  }), n;
}, M.checkWithinContainer = function (t, e, i) {
  var n = {
    top: !1,
    right: !1,
    bottom: !1,
    left: !1
  },
      s = t.getBoundingClientRect(),
      o = t === document.body ? Math.max(s.bottom, window.innerHeight) : s.bottom,
      a = t.scrollLeft,
      r = t.scrollTop,
      l = e.left - a,
      h = e.top - r;
  return (l < s.left + i || l < i) && (n.left = !0), (l + e.width > s.right - i || l + e.width > window.innerWidth - i) && (n.right = !0), (h < s.top + i || h < i) && (n.top = !0), (h + e.height > o - i || h + e.height > window.innerHeight - i) && (n.bottom = !0), n;
}, M.checkPossibleAlignments = function (t, e, i, n) {
  var s = {
    top: !0,
    right: !0,
    bottom: !0,
    left: !0,
    spaceOnTop: null,
    spaceOnRight: null,
    spaceOnBottom: null,
    spaceOnLeft: null
  },
      o = "visible" === getComputedStyle(e).overflow,
      a = e.getBoundingClientRect(),
      r = Math.min(a.height, window.innerHeight),
      l = Math.min(a.width, window.innerWidth),
      h = t.getBoundingClientRect(),
      d = e.scrollLeft,
      u = e.scrollTop,
      c = i.left - d,
      p = i.top - u,
      v = i.top + h.height - u;
  return s.spaceOnRight = o ? window.innerWidth - (h.left + i.width) : l - (c + i.width), s.spaceOnRight < 0 && (s.left = !1), s.spaceOnLeft = o ? h.right - i.width : c - i.width + h.width, s.spaceOnLeft < 0 && (s.right = !1), s.spaceOnBottom = o ? window.innerHeight - (h.top + i.height + n) : r - (p + i.height + n), s.spaceOnBottom < 0 && (s.top = !1), s.spaceOnTop = o ? h.bottom - (i.height + n) : v - (i.height - n), s.spaceOnTop < 0 && (s.bottom = !1), s;
}, M.getOverflowParent = function (t) {
  return null == t ? null : t === document.body || "visible" !== getComputedStyle(t).overflow ? t : M.getOverflowParent(t.parentElement);
}, M.getIdFromTrigger = function (t) {
  var e = t.getAttribute("data-target");
  return e || (e = (e = t.getAttribute("href")) ? e.slice(1) : ""), e;
}, M.getDocumentScrollTop = function () {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}, M.getDocumentScrollLeft = function () {
  return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
};

var getTime = Date.now || function () {
  return new Date().getTime();
};

M.throttle = function (i, n, s) {
  var o = void 0,
      a = void 0,
      r = void 0,
      l = null,
      h = 0;
  s || (s = {});

  var d = function d() {
    h = !1 === s.leading ? 0 : getTime(), l = null, r = i.apply(o, a), o = a = null;
  };

  return function () {
    var t = getTime();
    h || !1 !== s.leading || (h = t);
    var e = n - (t - h);
    return o = this, a = arguments, e <= 0 ? (clearTimeout(l), l = null, h = t, r = i.apply(o, a), o = a = null) : l || !1 === s.trailing || (l = setTimeout(d, e)), r;
  };
};

var $jscomp = {
  scope: {}
};
$jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function (t, e, i) {
  if (i.get || i.set) throw new TypeError("ES3 does not support getters and setters.");
  t != Array.prototype && t != Object.prototype && (t[e] = i.value);
}, $jscomp.getGlobal = function (t) {
  return "undefined" != typeof window && window === t ? t : "undefined" != typeof global && null != global ? global : t;
}, $jscomp.global = $jscomp.getGlobal(this), $jscomp.SYMBOL_PREFIX = "jscomp_symbol_", $jscomp.initSymbol = function () {
  $jscomp.initSymbol = function () {}, $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol);
}, $jscomp.symbolCounter_ = 0, $jscomp.Symbol = function (t) {
  return $jscomp.SYMBOL_PREFIX + (t || "") + $jscomp.symbolCounter_++;
}, $jscomp.initSymbolIterator = function () {
  $jscomp.initSymbol();
  var t = $jscomp.global.Symbol.iterator;
  t || (t = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator")), "function" != typeof Array.prototype[t] && $jscomp.defineProperty(Array.prototype, t, {
    configurable: !0,
    writable: !0,
    value: function value() {
      return $jscomp.arrayIterator(this);
    }
  }), $jscomp.initSymbolIterator = function () {};
}, $jscomp.arrayIterator = function (t) {
  var e = 0;
  return $jscomp.iteratorPrototype(function () {
    return e < t.length ? {
      done: !1,
      value: t[e++]
    } : {
      done: !0
    };
  });
}, $jscomp.iteratorPrototype = function (t) {
  return $jscomp.initSymbolIterator(), (t = {
    next: t
  })[$jscomp.global.Symbol.iterator] = function () {
    return this;
  }, t;
}, $jscomp.array = $jscomp.array || {}, $jscomp.iteratorFromArray = function (e, i) {
  $jscomp.initSymbolIterator(), e instanceof String && (e += "");
  var n = 0,
      s = {
    next: function next() {
      if (n < e.length) {
        var t = n++;
        return {
          value: i(t, e[t]),
          done: !1
        };
      }

      return s.next = function () {
        return {
          done: !0,
          value: void 0
        };
      }, s.next();
    }
  };
  return s[Symbol.iterator] = function () {
    return s;
  }, s;
}, $jscomp.polyfill = function (t, e, i, n) {
  if (e) {
    for (i = $jscomp.global, t = t.split("."), n = 0; n < t.length - 1; n++) {
      var s = t[n];
      s in i || (i[s] = {}), i = i[s];
    }

    (e = e(n = i[t = t[t.length - 1]])) != n && null != e && $jscomp.defineProperty(i, t, {
      configurable: !0,
      writable: !0,
      value: e
    });
  }
}, $jscomp.polyfill("Array.prototype.keys", function (t) {
  return t || function () {
    return $jscomp.iteratorFromArray(this, function (t) {
      return t;
    });
  };
}, "es6-impl", "es3");
var $jscomp$this = this;
M.anime = function () {
  function s(t) {
    if (!B.col(t)) try {
      return document.querySelectorAll(t);
    } catch (t) {}
  }

  function b(t, e) {
    for (var i = t.length, n = 2 <= arguments.length ? e : void 0, s = [], o = 0; o < i; o++) {
      if (o in t) {
        var a = t[o];
        e.call(n, a, o, t) && s.push(a);
      }
    }

    return s;
  }

  function d(t) {
    return t.reduce(function (t, e) {
      return t.concat(B.arr(e) ? d(e) : e);
    }, []);
  }

  function o(t) {
    return B.arr(t) ? t : (B.str(t) && (t = s(t) || t), t instanceof NodeList || t instanceof HTMLCollection ? [].slice.call(t) : [t]);
  }

  function a(t, e) {
    return t.some(function (t) {
      return t === e;
    });
  }

  function r(t) {
    var e,
        i = {};

    for (e in t) {
      i[e] = t[e];
    }

    return i;
  }

  function u(t, e) {
    var i,
        n = r(t);

    for (i in t) {
      n[i] = e.hasOwnProperty(i) ? e[i] : t[i];
    }

    return n;
  }

  function c(t, e) {
    var i,
        n = r(t);

    for (i in e) {
      n[i] = B.und(t[i]) ? e[i] : t[i];
    }

    return n;
  }

  function l(t) {
    if (t = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t)) return t[2];
  }

  function h(t, e) {
    return B.fnc(t) ? t(e.target, e.id, e.total) : t;
  }

  function w(t, e) {
    if (e in t.style) return getComputedStyle(t).getPropertyValue(e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()) || "0";
  }

  function p(t, e) {
    return B.dom(t) && a($, e) ? "transform" : B.dom(t) && (t.getAttribute(e) || B.svg(t) && t[e]) ? "attribute" : B.dom(t) && "transform" !== e && w(t, e) ? "css" : null != t[e] ? "object" : void 0;
  }

  function v(t, e) {
    switch (p(t, e)) {
      case "transform":
        return function (t, i) {
          var e,
              n = -1 < (e = i).indexOf("translate") || "perspective" === e ? "px" : -1 < e.indexOf("rotate") || -1 < e.indexOf("skew") ? "deg" : void 0,
              n = -1 < i.indexOf("scale") ? 1 : 0 + n;
          if (!(t = t.style.transform)) return n;

          for (var s = [], o = [], a = [], r = /(\w+)\((.+?)\)/g; s = r.exec(t);) {
            o.push(s[1]), a.push(s[2]);
          }

          return (t = b(a, function (t, e) {
            return o[e] === i;
          })).length ? t[0] : n;
        }(t, e);

      case "css":
        return w(t, e);

      case "attribute":
        return t.getAttribute(e);
    }

    return t[e] || 0;
  }

  function f(t, e) {
    var i = /^(\*=|\+=|-=)/.exec(t);
    if (!i) return t;
    var n = l(t) || 0;

    switch (e = parseFloat(e), t = parseFloat(t.replace(i[0], "")), i[0][0]) {
      case "+":
        return e + t + n;

      case "-":
        return e - t + n;

      case "*":
        return e * t + n;
    }
  }

  function m(t, e) {
    return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
  }

  function i(t) {
    t = t.points;

    for (var e, i = 0, n = 0; n < t.numberOfItems; n++) {
      var s = t.getItem(n);
      0 < n && (i += m(e, s)), e = s;
    }

    return i;
  }

  function g(t) {
    if (t.getTotalLength) return t.getTotalLength();

    switch (t.tagName.toLowerCase()) {
      case "circle":
        return 2 * Math.PI * t.getAttribute("r");

      case "rect":
        return 2 * t.getAttribute("width") + 2 * t.getAttribute("height");

      case "line":
        return m({
          x: t.getAttribute("x1"),
          y: t.getAttribute("y1")
        }, {
          x: t.getAttribute("x2"),
          y: t.getAttribute("y2")
        });

      case "polyline":
        return i(t);

      case "polygon":
        var e = t.points;
        return i(t) + m(e.getItem(e.numberOfItems - 1), e.getItem(0));
    }
  }

  function C(e, i) {
    function t(t) {
      return t = void 0 === t ? 0 : t, e.el.getPointAtLength(1 <= i + t ? i + t : 0);
    }

    var n = t(),
        s = t(-1),
        o = t(1);

    switch (e.property) {
      case "x":
        return n.x;

      case "y":
        return n.y;

      case "angle":
        return 180 * Math.atan2(o.y - s.y, o.x - s.x) / Math.PI;
    }
  }

  function _(t, e) {
    var i,
        n = /-?\d*\.?\d+/g;
    if (i = B.pth(t) ? t.totalLength : t, B.col(i)) {
      if (B.rgb(i)) {
        var s = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(i);
        i = s ? "rgba(" + s[1] + ",1)" : i;
      } else i = B.hex(i) ? function (t) {
        t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (t, e, i, n) {
          return e + e + i + i + n + n;
        });
        var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
        t = parseInt(e[1], 16);
        var i = parseInt(e[2], 16),
            e = parseInt(e[3], 16);
        return "rgba(" + t + "," + i + "," + e + ",1)";
      }(i) : B.hsl(i) ? function (t) {
        function e(t, e, i) {
          return i < 0 && (i += 1), 1 < i && --i, i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t;
        }

        var i = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t);
        t = parseInt(i[1]) / 360;
        var n = parseInt(i[2]) / 100,
            s = parseInt(i[3]) / 100,
            i = i[4] || 1;
        if (0 == n) s = n = t = s;else {
          var o = s < .5 ? s * (1 + n) : s + n - s * n,
              a = 2 * s - o,
              s = e(a, o, t + 1 / 3),
              n = e(a, o, t);
          t = e(a, o, t - 1 / 3);
        }
        return "rgba(" + 255 * s + "," + 255 * n + "," + 255 * t + "," + i + ")";
      }(i) : void 0;
    } else s = (s = l(i)) ? i.substr(0, i.length - s.length) : i, i = e && !/\s/g.test(i) ? s + e : s;
    return {
      original: i += "",
      numbers: i.match(n) ? i.match(n).map(Number) : [0],
      strings: B.str(t) || e ? i.split(n) : []
    };
  }

  function y(t) {
    return b(t = t ? d(B.arr(t) ? t.map(o) : o(t)) : [], function (t, e, i) {
      return i.indexOf(t) === e;
    });
  }

  function k(t, i) {
    var e = r(i);

    if (B.arr(t)) {
      var n = t.length;
      2 !== n || B.obj(t[0]) ? B.fnc(i.duration) || (e.duration = i.duration / n) : t = {
        value: t
      };
    }

    return o(t).map(function (t, e) {
      return e = e ? 0 : i.delay, t = B.obj(t) && !B.pth(t) ? t : {
        value: t
      }, B.und(t.delay) && (t.delay = e), t;
    }).map(function (t) {
      return c(t, e);
    });
  }

  function E(o, a) {
    var r;
    return o.tweens.map(function (t) {
      var e = (t = function (t, e) {
        var i,
            n = {};

        for (i in t) {
          var s = h(t[i], e);
          B.arr(s) && 1 === (s = s.map(function (t) {
            return h(t, e);
          })).length && (s = s[0]), n[i] = s;
        }

        return n.duration = parseFloat(n.duration), n.delay = parseFloat(n.delay), n;
      }(t, a)).value,
          i = v(a.target, o.name),
          n = r ? r.to.original : i,
          n = B.arr(e) ? e[0] : n,
          s = f(B.arr(e) ? e[1] : e, n),
          i = l(s) || l(n) || l(i);

      return t.from = _(n, i), t.to = _(s, i), t.start = r ? r.end : o.offset, t.end = t.start + t.delay + t.duration, t.easing = function (t) {
        return B.arr(t) ? D.apply(this, t) : S[t];
      }(t.easing), t.elasticity = (1e3 - Math.min(Math.max(t.elasticity, 1), 999)) / 1e3, t.isPath = B.pth(e), t.isColor = B.col(t.from.original), t.isColor && (t.round = 1), r = t;
    });
  }

  function M(e, t, i, n) {
    var s = "delay" === e;
    return t.length ? (s ? Math.min : Math.max).apply(Math, t.map(function (t) {
      return t[e];
    })) : s ? n.delay : i.offset + n.delay + n.duration;
  }

  function n(t) {
    var e,
        i,
        n,
        s,
        o = u(L, t),
        a = u(T, t),
        r = (i = t.targets, (n = y(i)).map(function (t, e) {
      return {
        target: t,
        id: e,
        total: n.length
      };
    })),
        l = [],
        h = c(o, a);

    for (e in t) {
      h.hasOwnProperty(e) || "targets" === e || l.push({
        name: e,
        offset: h.offset,
        tweens: k(t[e], a)
      });
    }

    return s = l, t = b(d(r.map(function (n) {
      return s.map(function (t) {
        var e = p(n.target, t.name);

        if (e) {
          var i = E(t, n);
          t = {
            type: e,
            property: t.name,
            animatable: n,
            tweens: i,
            duration: i[i.length - 1].end,
            delay: i[0].delay
          };
        } else t = void 0;

        return t;
      });
    })), function (t) {
      return !B.und(t);
    }), c(o, {
      children: [],
      animatables: r,
      animations: t,
      duration: M("duration", t, o, a),
      delay: M("delay", t, o, a)
    });
  }

  function O(t) {
    function d() {
      return window.Promise && new Promise(function (t) {
        return _ = t;
      });
    }

    function u(t) {
      return k.reversed ? k.duration - t : t;
    }

    function c(e) {
      for (var t = 0, i = {}, n = k.animations, s = n.length; t < s;) {
        var o = n[t],
            a = o.animatable,
            r = o.tweens,
            l = r.length - 1,
            h = r[l];
        l && (h = b(r, function (t) {
          return e < t.end;
        })[0] || h);

        for (var r = Math.min(Math.max(e - h.start - h.delay, 0), h.duration) / h.duration, d = isNaN(r) ? 1 : h.easing(r, h.elasticity), r = h.to.strings, u = h.round, l = [], c = void 0, c = h.to.numbers.length, p = 0; p < c; p++) {
          var v = void 0,
              v = h.to.numbers[p],
              f = h.from.numbers[p],
              v = h.isPath ? C(h.value, d * v) : f + d * (v - f);
          u && (h.isColor && 2 < p || (v = Math.round(v * u) / u)), l.push(v);
        }

        if (h = r.length) for (c = r[0], d = 0; d < h; d++) {
          u = r[d + 1], p = l[d], isNaN(p) || (c = u ? c + (p + u) : c + (p + " "));
        } else c = l[0];
        I[o.type](a.target, o.property, c, i, a.id), o.currentValue = c, t++;
      }

      if (t = Object.keys(i).length) for (n = 0; n < t; n++) {
        x || (x = w(document.body, "transform") ? "transform" : "-webkit-transform"), k.animatables[n].target.style[x] = i[n].join(" ");
      }
      k.currentTime = e, k.progress = e / k.duration * 100;
    }

    function p(t) {
      k[t] && k[t](k);
    }

    function v() {
      k.remaining && !0 !== k.remaining && k.remaining--;
    }

    function e(t) {
      var e = k.duration,
          i = k.offset,
          n = i + k.delay,
          s = k.currentTime,
          o = k.reversed,
          a = u(t);

      if (k.children.length) {
        var r = k.children,
            l = r.length;
        if (a >= k.currentTime) for (var h = 0; h < l; h++) {
          r[h].seek(a);
        } else for (; l--;) {
          r[l].seek(a);
        }
      }

      (n <= a || !e) && (k.began || (k.began = !0, p("begin")), p("run")), i < a && a < e ? c(a) : (a <= i && 0 !== s && (c(0), o && v()), (e <= a && s !== e || !e) && (c(e), o || v())), p("update"), e <= t && (k.remaining ? (m = f, "alternate" === k.direction && (k.reversed = !k.reversed)) : (k.pause(), k.completed || (k.completed = !0, p("complete"), "Promise" in window && (_(), y = d()))), g = 0);
    }

    t = void 0 === t ? {} : t;
    var f,
        m,
        g = 0,
        _ = null,
        y = d(),
        k = n(t);
    return k.reset = function () {
      var t = k.direction,
          e = k.loop;

      for (k.currentTime = 0, k.progress = 0, k.paused = !0, k.began = !1, k.completed = !1, k.reversed = "reverse" === t, k.remaining = "alternate" === t && 1 === e ? 2 : e, c(0), t = k.children.length; t--;) {
        k.children[t].reset();
      }
    }, k.tick = function (t) {
      f = t, m || (m = f), e((g + f - m) * O.speed);
    }, k.seek = function (t) {
      e(u(t));
    }, k.pause = function () {
      var t = A.indexOf(k);
      -1 < t && A.splice(t, 1), k.paused = !0;
    }, k.play = function () {
      k.paused && (k.paused = !1, m = 0, g = u(k.currentTime), A.push(k), R || H());
    }, k.reverse = function () {
      k.reversed = !k.reversed, m = 0, g = u(k.currentTime);
    }, k.restart = function () {
      k.pause(), k.reset(), k.play();
    }, k.finished = y, k.reset(), k.autoplay && k.play(), k;
  }

  var x,
      L = {
    update: void 0,
    begin: void 0,
    run: void 0,
    complete: void 0,
    loop: 1,
    direction: "normal",
    autoplay: !0,
    offset: 0
  },
      T = {
    duration: 1e3,
    delay: 0,
    easing: "easeOutElastic",
    elasticity: 500,
    round: 0
  },
      $ = "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),
      B = {
    arr: function arr(t) {
      return Array.isArray(t);
    },
    obj: function obj(t) {
      return -1 < Object.prototype.toString.call(t).indexOf("Object");
    },
    pth: function pth(t) {
      return B.obj(t) && t.hasOwnProperty("totalLength");
    },
    svg: function svg(t) {
      return t instanceof SVGElement;
    },
    dom: function dom(t) {
      return t.nodeType || B.svg(t);
    },
    str: function str(t) {
      return "string" == typeof t;
    },
    fnc: function fnc(t) {
      return "function" == typeof t;
    },
    und: function und(t) {
      return void 0 === t;
    },
    hex: function hex(t) {
      return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t);
    },
    rgb: function rgb(t) {
      return /^rgb/.test(t);
    },
    hsl: function hsl(t) {
      return /^hsl/.test(t);
    },
    col: function col(t) {
      return B.hex(t) || B.rgb(t) || B.hsl(t);
    }
  },
      D = function () {
    function u(t, e, i) {
      return (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
    }

    return function (a, r, l, h) {
      if (0 <= a && a <= 1 && 0 <= l && l <= 1) {
        var d = new Float32Array(11);
        if (a !== r || l !== h) for (var t = 0; t < 11; ++t) {
          d[t] = u(.1 * t, a, l);
        }
        return function (t) {
          if (a === r && l === h) return t;
          if (0 === t) return 0;
          if (1 === t) return 1;

          for (var e = 0, i = 1; 10 !== i && d[i] <= t; ++i) {
            e += .1;
          }

          var i = e + (t - d[--i]) / (d[i + 1] - d[i]) * .1,
              n = 3 * (1 - 3 * l + 3 * a) * i * i + 2 * (3 * l - 6 * a) * i + 3 * a;

          if (.001 <= n) {
            for (e = 0; e < 4 && 0 != (n = 3 * (1 - 3 * l + 3 * a) * i * i + 2 * (3 * l - 6 * a) * i + 3 * a); ++e) {
              var s = u(i, a, l) - t,
                  i = i - s / n;
            }

            t = i;
          } else if (0 === n) t = i;else {
            for (var i = e, e = e + .1, o = 0; 0 < (n = u(s = i + (e - i) / 2, a, l) - t) ? e = s : i = s, 1e-7 < Math.abs(n) && ++o < 10;) {
              ;
            }

            t = s;
          }

          return u(t, r, h);
        };
      }
    };
  }(),
      S = function () {
    function i(t, e) {
      return 0 === t || 1 === t ? t : -Math.pow(2, 10 * (t - 1)) * Math.sin(2 * (t - 1 - e / (2 * Math.PI) * Math.asin(1)) * Math.PI / e);
    }

    var t,
        n = "Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),
        e = {
      In: [[.55, .085, .68, .53], [.55, .055, .675, .19], [.895, .03, .685, .22], [.755, .05, .855, .06], [.47, 0, .745, .715], [.95, .05, .795, .035], [.6, .04, .98, .335], [.6, -.28, .735, .045], i],
      Out: [[.25, .46, .45, .94], [.215, .61, .355, 1], [.165, .84, .44, 1], [.23, 1, .32, 1], [.39, .575, .565, 1], [.19, 1, .22, 1], [.075, .82, .165, 1], [.175, .885, .32, 1.275], function (t, e) {
        return 1 - i(1 - t, e);
      }],
      InOut: [[.455, .03, .515, .955], [.645, .045, .355, 1], [.77, 0, .175, 1], [.86, 0, .07, 1], [.445, .05, .55, .95], [1, 0, 0, 1], [.785, .135, .15, .86], [.68, -.55, .265, 1.55], function (t, e) {
        return t < .5 ? i(2 * t, e) / 2 : 1 - i(-2 * t + 2, e) / 2;
      }]
    },
        s = {
      linear: D(.25, .25, .75, .75)
    },
        o = {};

    for (t in e) {
      o.type = t, e[o.type].forEach(function (i) {
        return function (t, e) {
          s["ease" + i.type + n[e]] = B.fnc(t) ? t : D.apply($jscomp$this, t);
        };
      }(o)), o = {
        type: o.type
      };
    }

    return s;
  }(),
      I = {
    css: function css(t, e, i) {
      return t.style[e] = i;
    },
    attribute: function attribute(t, e, i) {
      return t.setAttribute(e, i);
    },
    object: function object(t, e, i) {
      return t[e] = i;
    },
    transform: function transform(t, e, i, n, s) {
      n[s] || (n[s] = []), n[s].push(e + "(" + i + ")");
    }
  },
      A = [],
      R = 0,
      H = function () {
    function n() {
      R = requestAnimationFrame(t);
    }

    function t(t) {
      var e = A.length;

      if (e) {
        for (var i = 0; i < e;) {
          A[i] && A[i].tick(t), i++;
        }

        n();
      } else cancelAnimationFrame(R), R = 0;
    }

    return n;
  }();

  return O.version = "2.2.0", O.speed = 1, O.running = A, O.remove = function (t) {
    t = y(t);

    for (var e = A.length; e--;) {
      for (var i = A[e], n = i.animations, s = n.length; s--;) {
        a(t, n[s].animatable.target) && (n.splice(s, 1), n.length || i.pause());
      }
    }
  }, O.getValue = v, O.path = function (t, e) {
    var i = B.str(t) ? s(t)[0] : t,
        n = e || 100;
    return function (t) {
      return {
        el: i,
        property: t,
        totalLength: g(i) * (n / 100)
      };
    };
  }, O.setDashoffset = function (t) {
    var e = g(t);
    return t.setAttribute("stroke-dasharray", e), e;
  }, O.bezier = D, O.easings = S, O.timeline = function (n) {
    var s = O(n);
    return s.pause(), s.duration = 0, s.add = function (t) {
      return s.children.forEach(function (t) {
        t.began = !0, t.completed = !0;
      }), o(t).forEach(function (t) {
        var e = c(t, u(T, n || {}));
        e.targets = e.targets || n.targets, t = s.duration;
        var i = e.offset;
        e.autoplay = !1, e.direction = s.direction, e.offset = B.und(i) ? t : f(i, t), s.began = !0, s.completed = !0, s.seek(e.offset), (e = O(e)).began = !0, e.completed = !0, e.duration > t && (s.duration = e.duration), s.children.push(e);
      }), s.seek(0), s.reset(), s.autoplay && s.restart(), s;
    }, s;
  }, O.random = function (t, e) {
    return Math.floor(Math.random() * (e - t + 1)) + t;
  }, O;
}(), function (r, l) {
  "use strict";

  var e = {
    accordion: !0,
    onOpenStart: void 0,
    onOpenEnd: void 0,
    onCloseStart: void 0,
    onCloseEnd: void 0,
    inDuration: 300,
    outDuration: 300
  },
      t = function (t) {
    function s(t, e) {
      _classCallCheck(this, s);

      var i = _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, s, t, e));

      (i.el.M_Collapsible = i).options = r.extend({}, s.defaults, e), i.$headers = i.$el.children("li").children(".collapsible-header"), i.$headers.attr("tabindex", 0), i._setupEventHandlers();
      var n = i.$el.children("li.active").children(".collapsible-body");
      return i.options.accordion ? n.first().css("display", "block") : n.css("display", "block"), i;
    }

    return _inherits(s, Component), _createClass(s, [{
      key: "destroy",
      value: function value() {
        this._removeEventHandlers(), this.el.M_Collapsible = void 0;
      }
    }, {
      key: "_setupEventHandlers",
      value: function value() {
        var e = this;
        this._handleCollapsibleClickBound = this._handleCollapsibleClick.bind(this), this._handleCollapsibleKeydownBound = this._handleCollapsibleKeydown.bind(this), this.el.addEventListener("click", this._handleCollapsibleClickBound), this.$headers.each(function (t) {
          t.addEventListener("keydown", e._handleCollapsibleKeydownBound);
        });
      }
    }, {
      key: "_removeEventHandlers",
      value: function value() {
        var e = this;
        this.el.removeEventListener("click", this._handleCollapsibleClickBound), this.$headers.each(function (t) {
          t.removeEventListener("keydown", e._handleCollapsibleKeydownBound);
        });
      }
    }, {
      key: "_handleCollapsibleClick",
      value: function value(t) {
        var e = r(t.target).closest(".collapsible-header");

        if (t.target && e.length) {
          var i = e.closest(".collapsible");

          if (i[0] === this.el) {
            var n = e.closest("li"),
                s = i.children("li"),
                o = n[0].classList.contains("active"),
                a = s.index(n);
            o ? this.close(a) : this.open(a);
          }
        }
      }
    }, {
      key: "_handleCollapsibleKeydown",
      value: function value(t) {
        13 === t.keyCode && this._handleCollapsibleClickBound(t);
      }
    }, {
      key: "_animateIn",
      value: function value(t) {
        var e = this,
            i = this.$el.children("li").eq(t);

        if (i.length) {
          var n = i.children(".collapsible-body");
          l.remove(n[0]), n.css({
            display: "block",
            overflow: "hidden",
            height: 0,
            paddingTop: "",
            paddingBottom: ""
          });
          var s = n.css("padding-top"),
              o = n.css("padding-bottom"),
              a = n[0].scrollHeight;
          n.css({
            paddingTop: 0,
            paddingBottom: 0
          }), l({
            targets: n[0],
            height: a,
            paddingTop: s,
            paddingBottom: o,
            duration: this.options.inDuration,
            easing: "easeInOutCubic",
            complete: function complete(t) {
              n.css({
                overflow: "",
                paddingTop: "",
                paddingBottom: "",
                height: ""
              }), "function" == typeof e.options.onOpenEnd && e.options.onOpenEnd.call(e, i[0]);
            }
          });
        }
      }
    }, {
      key: "_animateOut",
      value: function value(t) {
        var e = this,
            i = this.$el.children("li").eq(t);

        if (i.length) {
          var n = i.children(".collapsible-body");
          l.remove(n[0]), n.css("overflow", "hidden"), l({
            targets: n[0],
            height: 0,
            paddingTop: 0,
            paddingBottom: 0,
            duration: this.options.outDuration,
            easing: "easeInOutCubic",
            complete: function complete() {
              n.css({
                height: "",
                overflow: "",
                padding: "",
                display: ""
              }), "function" == typeof e.options.onCloseEnd && e.options.onCloseEnd.call(e, i[0]);
            }
          });
        }
      }
    }, {
      key: "open",
      value: function value(t) {
        var i = this,
            e = this.$el.children("li").eq(t);

        if (e.length && !e[0].classList.contains("active")) {
          if ("function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, e[0]), this.options.accordion) {
            var n = this.$el.children("li");
            this.$el.children("li.active").each(function (t) {
              var e = n.index(r(t));
              i.close(e);
            });
          }

          e[0].classList.add("active"), this._animateIn(t);
        }
      }
    }, {
      key: "close",
      value: function value(t) {
        var e = this.$el.children("li").eq(t);
        e.length && e[0].classList.contains("active") && ("function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, e[0]), e[0].classList.remove("active"), this._animateOut(t));
      }
    }], [{
      key: "init",
      value: function value(t, e) {
        return _get(s.__proto__ || Object.getPrototypeOf(s), "init", this).call(this, this, t, e);
      }
    }, {
      key: "getInstance",
      value: function value(t) {
        return (t.jquery ? t[0] : t).M_Collapsible;
      }
    }, {
      key: "defaults",
      get: function get() {
        return e;
      }
    }]), s;
  }();

  M.Collapsible = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "collapsible", "M_Collapsible");
}(cash, M.anime), function (h, i) {
  "use strict";

  var e = {
    alignment: "left",
    autoFocus: !0,
    constrainWidth: !0,
    container: null,
    coverTrigger: !0,
    closeOnClick: !0,
    hover: !1,
    inDuration: 150,
    outDuration: 250,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null,
    onItemClick: null
  },
      t = function (t) {
    function n(t, e) {
      _classCallCheck(this, n);

      var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));

      return i.el.M_Dropdown = i, n._dropdowns.push(i), i.id = M.getIdFromTrigger(t), i.dropdownEl = document.getElementById(i.id), i.$dropdownEl = h(i.dropdownEl), i.options = h.extend({}, n.defaults, e), i.isOpen = !1, i.isScrollable = !1, i.isTouchMoving = !1, i.focusedIndex = -1, i.filterQuery = [], i.options.container ? h(i.options.container).append(i.dropdownEl) : i.$el.after(i.dropdownEl), i._makeDropdownFocusable(), i._resetFilterQueryBound = i._resetFilterQuery.bind(i), i._handleDocumentClickBound = i._handleDocumentClick.bind(i), i._handleDocumentTouchmoveBound = i._handleDocumentTouchmove.bind(i), i._handleDropdownClickBound = i._handleDropdownClick.bind(i), i._handleDropdownKeydownBound = i._handleDropdownKeydown.bind(i), i._handleTriggerKeydownBound = i._handleTriggerKeydown.bind(i), i._setupEventHandlers(), i;
    }

    return _inherits(n, Component), _createClass(n, [{
      key: "destroy",
      value: function value() {
        this._resetDropdownStyles(), this._removeEventHandlers(), n._dropdowns.splice(n._dropdowns.indexOf(this), 1), this.el.M_Dropdown = void 0;
      }
    }, {
      key: "_setupEventHandlers",
      value: function value() {
        this.el.addEventListener("keydown", this._handleTriggerKeydownBound), this.dropdownEl.addEventListener("click", this._handleDropdownClickBound), this.options.hover ? (this._handleMouseEnterBound = this._handleMouseEnter.bind(this), this.el.addEventListener("mouseenter", this._handleMouseEnterBound), this._handleMouseLeaveBound = this._handleMouseLeave.bind(this), this.el.addEventListener("mouseleave", this._handleMouseLeaveBound), this.dropdownEl.addEventListener("mouseleave", this._handleMouseLeaveBound)) : (this._handleClickBound = this._handleClick.bind(this), this.el.addEventListener("click", this._handleClickBound));
      }
    }, {
      key: "_removeEventHandlers",
      value: function value() {
        this.el.removeEventListener("keydown", this._handleTriggerKeydownBound), this.dropdownEl.removeEventListener("click", this._handleDropdownClickBound), this.options.hover ? (this.el.removeEventListener("mouseenter", this._handleMouseEnterBound), this.el.removeEventListener("mouseleave", this._handleMouseLeaveBound), this.dropdownEl.removeEventListener("mouseleave", this._handleMouseLeaveBound)) : this.el.removeEventListener("click", this._handleClickBound);
      }
    }, {
      key: "_setupTemporaryEventHandlers",
      value: function value() {
        document.body.addEventListener("click", this._handleDocumentClickBound, !0), document.body.addEventListener("touchend", this._handleDocumentClickBound), document.body.addEventListener("touchmove", this._handleDocumentTouchmoveBound), this.dropdownEl.addEventListener("keydown", this._handleDropdownKeydownBound);
      }
    }, {
      key: "_removeTemporaryEventHandlers",
      value: function value() {
        document.body.removeEventListener("click", this._handleDocumentClickBound, !0), document.body.removeEventListener("touchend", this._handleDocumentClickBound), document.body.removeEventListener("touchmove", this._handleDocumentTouchmoveBound), this.dropdownEl.removeEventListener("keydown", this._handleDropdownKeydownBound);
      }
    }, {
      key: "_handleClick",
      value: function value(t) {
        t.preventDefault(), this.open();
      }
    }, {
      key: "_handleMouseEnter",
      value: function value() {
        this.open();
      }
    }, {
      key: "_handleMouseLeave",
      value: function value(t) {
        var e = t.toElement || t.relatedTarget,
            i = !!h(e).closest(".dropdown-content").length,
            n = !1,
            s = h(e).closest(".dropdown-trigger");
        s.length && s[0].M_Dropdown && s[0].M_Dropdown.isOpen && (n = !0), n || i || this.close();
      }
    }, {
      key: "_handleDocumentClick",
      value: function value(t) {
        var e = this,
            i = h(t.target);
        this.options.closeOnClick && i.closest(".dropdown-content").length && !this.isTouchMoving ? setTimeout(function () {
          e.close();
        }, 0) : !i.closest(".dropdown-trigger").length && i.closest(".dropdown-content").length || setTimeout(function () {
          e.close();
        }, 0), this.isTouchMoving = !1;
      }
    }, {
      key: "_handleTriggerKeydown",
      value: function value(t) {
        t.which !== M.keys.ARROW_DOWN && t.which !== M.keys.ENTER || this.isOpen || (t.preventDefault(), this.open());
      }
    }, {
      key: "_handleDocumentTouchmove",
      value: function value(t) {
        h(t.target).closest(".dropdown-content").length && (this.isTouchMoving = !0);
      }
    }, {
      key: "_handleDropdownClick",
      value: function value(t) {
        if ("function" == typeof this.options.onItemClick) {
          var e = h(t.target).closest("li")[0];
          this.options.onItemClick.call(this, e);
        }
      }
    }, {
      key: "_handleDropdownKeydown",
      value: function value(t) {
        if (t.which === M.keys.TAB) t.preventDefault(), this.close();else if (t.which !== M.keys.ARROW_DOWN && t.which !== M.keys.ARROW_UP || !this.isOpen) {
          if (t.which === M.keys.ENTER && this.isOpen) {
            var e = this.dropdownEl.children[this.focusedIndex],
                i = h(e).find("a, button").first();
            i.length ? i[0].click() : e && e.click();
          } else t.which === M.keys.ESC && this.isOpen && (t.preventDefault(), this.close());
        } else {
          t.preventDefault();
          var n = t.which === M.keys.ARROW_DOWN ? 1 : -1,
              s = this.focusedIndex,
              o = !1;

          do {
            if (s += n, this.dropdownEl.children[s] && -1 !== this.dropdownEl.children[s].tabIndex) {
              o = !0;
              break;
            }
          } while (s < this.dropdownEl.children.length && 0 <= s);

          o && (this.focusedIndex = s, this._focusFocusedItem());
        }
        var a = String.fromCharCode(t.which).toLowerCase();

        if (a && -1 === [9, 13, 27, 38, 40].indexOf(t.which)) {
          this.filterQuery.push(a);
          var r = this.filterQuery.join(""),
              l = h(this.dropdownEl).find("li").filter(function (t) {
            return 0 === h(t).text().toLowerCase().indexOf(r);
          })[0];
          l && (this.focusedIndex = h(l).index(), this._focusFocusedItem());
        }

        this.filterTimeout = setTimeout(this._resetFilterQueryBound, 1e3);
      }
    }, {
      key: "_resetFilterQuery",
      value: function value() {
        this.filterQuery = [];
      }
    }, {
      key: "_resetDropdownStyles",
      value: function value() {
        this.$dropdownEl.css({
          display: "",
          width: "",
          height: "",
          left: "",
          top: "",
          "transform-origin": "",
          transform: "",
          opacity: ""
        });
      }
    }, {
      key: "_makeDropdownFocusable",
      value: function value() {
        this.dropdownEl.tabIndex = 0, h(this.dropdownEl).children().each(function (t) {
          t.getAttribute("tabindex") || t.setAttribute("tabindex", 0);
        });
      }
    }, {
      key: "_focusFocusedItem",
      value: function value() {
        0 <= this.focusedIndex && this.focusedIndex < this.dropdownEl.children.length && this.options.autoFocus && this.dropdownEl.children[this.focusedIndex].focus();
      }
    }, {
      key: "_getDropdownPosition",
      value: function value() {
        this.el.offsetParent.getBoundingClientRect();
        var t = this.el.getBoundingClientRect(),
            e = this.dropdownEl.getBoundingClientRect(),
            i = e.height,
            n = e.width,
            s = t.left - e.left,
            o = t.top - e.top,
            a = {
          left: s,
          top: o,
          height: i,
          width: n
        },
            r = this.dropdownEl.offsetParent ? this.dropdownEl.offsetParent : this.dropdownEl.parentNode,
            l = M.checkPossibleAlignments(this.el, r, a, this.options.coverTrigger ? 0 : t.height),
            h = "top",
            d = this.options.alignment;

        if (o += this.options.coverTrigger ? 0 : t.height, this.isScrollable = !1, l.top || (l.bottom ? h = "bottom" : (this.isScrollable = !0, l.spaceOnTop > l.spaceOnBottom ? (h = "bottom", i += l.spaceOnTop, o -= l.spaceOnTop) : i += l.spaceOnBottom)), !l[d]) {
          var u = "left" === d ? "right" : "left";
          l[u] ? d = u : l.spaceOnLeft > l.spaceOnRight ? (d = "right", n += l.spaceOnLeft, s -= l.spaceOnLeft) : (d = "left", n += l.spaceOnRight);
        }

        return "bottom" === h && (o = o - e.height + (this.options.coverTrigger ? t.height : 0)), "right" === d && (s = s - e.width + t.width), {
          x: s,
          y: o,
          verticalAlignment: h,
          horizontalAlignment: d,
          height: i,
          width: n
        };
      }
    }, {
      key: "_animateIn",
      value: function value() {
        var e = this;
        i.remove(this.dropdownEl), i({
          targets: this.dropdownEl,
          opacity: {
            value: [0, 1],
            easing: "easeOutQuad"
          },
          scaleX: [.3, 1],
          scaleY: [.3, 1],
          duration: this.options.inDuration,
          easing: "easeOutQuint",
          complete: function complete(t) {
            e.options.autoFocus && e.dropdownEl.focus(), "function" == typeof e.options.onOpenEnd && e.options.onOpenEnd.call(e, e.el);
          }
        });
      }
    }, {
      key: "_animateOut",
      value: function value() {
        var e = this;
        i.remove(this.dropdownEl), i({
          targets: this.dropdownEl,
          opacity: {
            value: 0,
            easing: "easeOutQuint"
          },
          scaleX: .3,
          scaleY: .3,
          duration: this.options.outDuration,
          easing: "easeOutQuint",
          complete: function complete(t) {
            e._resetDropdownStyles(), "function" == typeof e.options.onCloseEnd && e.options.onCloseEnd.call(e, e.el);
          }
        });
      }
    }, {
      key: "_placeDropdown",
      value: function value() {
        var t = this.options.constrainWidth ? this.el.getBoundingClientRect().width : this.dropdownEl.getBoundingClientRect().width;
        this.dropdownEl.style.width = t + "px";

        var e = this._getDropdownPosition();

        this.dropdownEl.style.left = e.x + "px", this.dropdownEl.style.top = e.y + "px", this.dropdownEl.style.height = e.height + "px", this.dropdownEl.style.width = e.width + "px", this.dropdownEl.style.transformOrigin = ("left" === e.horizontalAlignment ? "0" : "100%") + " " + ("top" === e.verticalAlignment ? "0" : "100%");
      }
    }, {
      key: "open",
      value: function value() {
        this.isOpen || (this.isOpen = !0, "function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, this.el), this._resetDropdownStyles(), this.dropdownEl.style.display = "block", this._placeDropdown(), this._animateIn(), this._setupTemporaryEventHandlers());
      }
    }, {
      key: "close",
      value: function value() {
        this.isOpen && (this.isOpen = !1, this.focusedIndex = -1, "function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, this.el), this._animateOut(), this._removeTemporaryEventHandlers(), this.options.autoFocus && this.el.focus());
      }
    }, {
      key: "recalculateDimensions",
      value: function value() {
        this.isOpen && (this.$dropdownEl.css({
          width: "",
          height: "",
          left: "",
          top: "",
          "transform-origin": ""
        }), this._placeDropdown());
      }
    }], [{
      key: "init",
      value: function value(t, e) {
        return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e);
      }
    }, {
      key: "getInstance",
      value: function value(t) {
        return (t.jquery ? t[0] : t).M_Dropdown;
      }
    }, {
      key: "defaults",
      get: function get() {
        return e;
      }
    }]), n;
  }();

  t._dropdowns = [], M.Dropdown = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "dropdown", "M_Dropdown");
}(cash, M.anime), function (s, i) {
  "use strict";

  var e = {
    opacity: .5,
    inDuration: 250,
    outDuration: 250,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null,
    preventScrolling: !0,
    dismissible: !0,
    startingTop: "4%",
    endingTop: "10%"
  },
      t = function (t) {
    function n(t, e) {
      _classCallCheck(this, n);

      var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));

      return (i.el.M_Modal = i).options = s.extend({}, n.defaults, e), i.isOpen = !1, i.id = i.$el.attr("id"), i._openingTrigger = void 0, i.$overlay = s('<div class="modal-overlay"></div>'), i.el.tabIndex = 0, i._nthModalOpened = 0, n._count++, i._setupEventHandlers(), i;
    }

    return _inherits(n, Component), _createClass(n, [{
      key: "destroy",
      value: function value() {
        n._count--, this._removeEventHandlers(), this.el.removeAttribute("style"), this.$overlay.remove(), this.el.M_Modal = void 0;
      }
    }, {
      key: "_setupEventHandlers",
      value: function value() {
        this._handleOverlayClickBound = this._handleOverlayClick.bind(this), this._handleModalCloseClickBound = this._handleModalCloseClick.bind(this), 1 === n._count && document.body.addEventListener("click", this._handleTriggerClick), this.$overlay[0].addEventListener("click", this._handleOverlayClickBound), this.el.addEventListener("click", this._handleModalCloseClickBound);
      }
    }, {
      key: "_removeEventHandlers",
      value: function value() {
        0 === n._count && document.body.removeEventListener("click", this._handleTriggerClick), this.$overlay[0].removeEventListener("click", this._handleOverlayClickBound), this.el.removeEventListener("click", this._handleModalCloseClickBound);
      }
    }, {
      key: "_handleTriggerClick",
      value: function value(t) {
        var e = s(t.target).closest(".modal-trigger");

        if (e.length) {
          var i = M.getIdFromTrigger(e[0]),
              n = document.getElementById(i).M_Modal;
          n && n.open(e), t.preventDefault();
        }
      }
    }, {
      key: "_handleOverlayClick",
      value: function value() {
        this.options.dismissible && this.close();
      }
    }, {
      key: "_handleModalCloseClick",
      value: function value(t) {
        s(t.target).closest(".modal-close").length && this.close();
      }
    }, {
      key: "_handleKeydown",
      value: function value(t) {
        27 === t.keyCode && this.options.dismissible && this.close();
      }
    }, {
      key: "_handleFocus",
      value: function value(t) {
        this.el.contains(t.target) || this._nthModalOpened !== n._modalsOpen || this.el.focus();
      }
    }, {
      key: "_animateIn",
      value: function value() {
        var t = this;
        s.extend(this.el.style, {
          display: "block",
          opacity: 0
        }), s.extend(this.$overlay[0].style, {
          display: "block",
          opacity: 0
        }), i({
          targets: this.$overlay[0],
          opacity: this.options.opacity,
          duration: this.options.inDuration,
          easing: "easeOutQuad"
        });
        var e = {
          targets: this.el,
          duration: this.options.inDuration,
          easing: "easeOutCubic",
          complete: function complete() {
            "function" == typeof t.options.onOpenEnd && t.options.onOpenEnd.call(t, t.el, t._openingTrigger);
          }
        };
        this.el.classList.contains("bottom-sheet") ? s.extend(e, {
          bottom: 0,
          opacity: 1
        }) : s.extend(e, {
          top: [this.options.startingTop, this.options.endingTop],
          opacity: 1,
          scaleX: [.8, 1],
          scaleY: [.8, 1]
        }), i(e);
      }
    }, {
      key: "_animateOut",
      value: function value() {
        var t = this;
        i({
          targets: this.$overlay[0],
          opacity: 0,
          duration: this.options.outDuration,
          easing: "easeOutQuart"
        });
        var e = {
          targets: this.el,
          duration: this.options.outDuration,
          easing: "easeOutCubic",
          complete: function complete() {
            t.el.style.display = "none", t.$overlay.remove(), "function" == typeof t.options.onCloseEnd && t.options.onCloseEnd.call(t, t.el);
          }
        };
        this.el.classList.contains("bottom-sheet") ? s.extend(e, {
          bottom: "-100%",
          opacity: 0
        }) : s.extend(e, {
          top: [this.options.endingTop, this.options.startingTop],
          opacity: 0,
          scaleX: .8,
          scaleY: .8
        }), i(e);
      }
    }, {
      key: "open",
      value: function value(t) {
        if (!this.isOpen) return this.isOpen = !0, n._modalsOpen++, this._nthModalOpened = n._modalsOpen, this.$overlay[0].style.zIndex = 1e3 + 2 * n._modalsOpen, this.el.style.zIndex = 1e3 + 2 * n._modalsOpen + 1, this._openingTrigger = t ? t[0] : void 0, "function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, this.el, this._openingTrigger), this.options.preventScrolling && (document.body.style.overflow = "hidden"), this.el.classList.add("open"), this.el.insertAdjacentElement("afterend", this.$overlay[0]), this.options.dismissible && (this._handleKeydownBound = this._handleKeydown.bind(this), this._handleFocusBound = this._handleFocus.bind(this), document.addEventListener("keydown", this._handleKeydownBound), document.addEventListener("focus", this._handleFocusBound, !0)), i.remove(this.el), i.remove(this.$overlay[0]), this._animateIn(), this.el.focus(), this;
      }
    }, {
      key: "close",
      value: function value() {
        if (this.isOpen) return this.isOpen = !1, n._modalsOpen--, this._nthModalOpened = 0, "function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, this.el), this.el.classList.remove("open"), 0 === n._modalsOpen && (document.body.style.overflow = ""), this.options.dismissible && (document.removeEventListener("keydown", this._handleKeydownBound), document.removeEventListener("focus", this._handleFocusBound, !0)), i.remove(this.el), i.remove(this.$overlay[0]), this._animateOut(), this;
      }
    }], [{
      key: "init",
      value: function value(t, e) {
        return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e);
      }
    }, {
      key: "getInstance",
      value: function value(t) {
        return (t.jquery ? t[0] : t).M_Modal;
      }
    }, {
      key: "defaults",
      get: function get() {
        return e;
      }
    }]), n;
  }();

  t._modalsOpen = 0, t._count = 0, M.Modal = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "modal", "M_Modal");
}(cash, M.anime), function (o, a) {
  "use strict";

  var e = {
    inDuration: 275,
    outDuration: 200,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null
  },
      t = function (t) {
    function n(t, e) {
      _classCallCheck(this, n);

      var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));

      return (i.el.M_Materialbox = i).options = o.extend({}, n.defaults, e), i.overlayActive = !1, i.doneAnimating = !0, i.placeholder = o("<div></div>").addClass("material-placeholder"), i.originalWidth = 0, i.originalHeight = 0, i.originInlineStyles = i.$el.attr("style"), i.caption = i.el.getAttribute("data-caption") || "", i.$el.before(i.placeholder), i.placeholder.append(i.$el), i._setupEventHandlers(), i;
    }

    return _inherits(n, Component), _createClass(n, [{
      key: "destroy",
      value: function value() {
        this._removeEventHandlers(), this.el.M_Materialbox = void 0, o(this.placeholder).after(this.el).remove(), this.$el.removeAttr("style");
      }
    }, {
      key: "_setupEventHandlers",
      value: function value() {
        this._handleMaterialboxClickBound = this._handleMaterialboxClick.bind(this), this.el.addEventListener("click", this._handleMaterialboxClickBound);
      }
    }, {
      key: "_removeEventHandlers",
      value: function value() {
        this.el.removeEventListener("click", this._handleMaterialboxClickBound);
      }
    }, {
      key: "_handleMaterialboxClick",
      value: function value(t) {
        !1 === this.doneAnimating || this.overlayActive && this.doneAnimating ? this.close() : this.open();
      }
    }, {
      key: "_handleWindowScroll",
      value: function value() {
        this.overlayActive && this.close();
      }
    }, {
      key: "_handleWindowResize",
      value: function value() {
        this.overlayActive && this.close();
      }
    }, {
      key: "_handleWindowEscape",
      value: function value(t) {
        27 === t.keyCode && this.doneAnimating && this.overlayActive && this.close();
      }
    }, {
      key: "_makeAncestorsOverflowVisible",
      value: function value() {
        this.ancestorsChanged = o();

        for (var t = this.placeholder[0].parentNode; null !== t && !o(t).is(document);) {
          var e = o(t);
          "visible" !== e.css("overflow") && (e.css("overflow", "visible"), void 0 === this.ancestorsChanged ? this.ancestorsChanged = e : this.ancestorsChanged = this.ancestorsChanged.add(e)), t = t.parentNode;
        }
      }
    }, {
      key: "_animateImageIn",
      value: function value() {
        var t = this,
            e = {
          targets: this.el,
          height: [this.originalHeight, this.newHeight],
          width: [this.originalWidth, this.newWidth],
          left: M.getDocumentScrollLeft() + this.windowWidth / 2 - this.placeholder.offset().left - this.newWidth / 2,
          top: M.getDocumentScrollTop() + this.windowHeight / 2 - this.placeholder.offset().top - this.newHeight / 2,
          duration: this.options.inDuration,
          easing: "easeOutQuad",
          complete: function complete() {
            t.doneAnimating = !0, "function" == typeof t.options.onOpenEnd && t.options.onOpenEnd.call(t, t.el);
          }
        };
        this.maxWidth = this.$el.css("max-width"), this.maxHeight = this.$el.css("max-height"), "none" !== this.maxWidth && (e.maxWidth = this.newWidth), "none" !== this.maxHeight && (e.maxHeight = this.newHeight), a(e);
      }
    }, {
      key: "_animateImageOut",
      value: function value() {
        var t = this,
            e = {
          targets: this.el,
          width: this.originalWidth,
          height: this.originalHeight,
          left: 0,
          top: 0,
          duration: this.options.outDuration,
          easing: "easeOutQuad",
          complete: function complete() {
            t.placeholder.css({
              height: "",
              width: "",
              position: "",
              top: "",
              left: ""
            }), t.attrWidth && t.$el.attr("width", t.attrWidth), t.attrHeight && t.$el.attr("height", t.attrHeight), t.$el.removeAttr("style"), t.originInlineStyles && t.$el.attr("style", t.originInlineStyles), t.$el.removeClass("active"), t.doneAnimating = !0, t.ancestorsChanged.length && t.ancestorsChanged.css("overflow", ""), "function" == typeof t.options.onCloseEnd && t.options.onCloseEnd.call(t, t.el);
          }
        };
        a(e);
      }
    }, {
      key: "_updateVars",
      value: function value() {
        this.windowWidth = window.innerWidth, this.windowHeight = window.innerHeight, this.caption = this.el.getAttribute("data-caption") || "";
      }
    }, {
      key: "open",
      value: function value() {
        var t = this;
        this._updateVars(), this.originalWidth = this.el.getBoundingClientRect().width, this.originalHeight = this.el.getBoundingClientRect().height, this.doneAnimating = !1, this.$el.addClass("active"), this.overlayActive = !0, "function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, this.el), this.placeholder.css({
          width: this.placeholder[0].getBoundingClientRect().width + "px",
          height: this.placeholder[0].getBoundingClientRect().height + "px",
          position: "relative",
          top: 0,
          left: 0
        }), this._makeAncestorsOverflowVisible(), this.$el.css({
          position: "absolute",
          "z-index": 1e3,
          "will-change": "left, top, width, height"
        }), this.attrWidth = this.$el.attr("width"), this.attrHeight = this.$el.attr("height"), this.attrWidth && (this.$el.css("width", this.attrWidth + "px"), this.$el.removeAttr("width")), this.attrHeight && (this.$el.css("width", this.attrHeight + "px"), this.$el.removeAttr("height")), this.$overlay = o('<div id="materialbox-overlay"></div>').css({
          opacity: 0
        }).one("click", function () {
          t.doneAnimating && t.close();
        }), this.$el.before(this.$overlay);
        var e = this.$overlay[0].getBoundingClientRect();
        this.$overlay.css({
          width: this.windowWidth + "px",
          height: this.windowHeight + "px",
          left: -1 * e.left + "px",
          top: -1 * e.top + "px"
        }), a.remove(this.el), a.remove(this.$overlay[0]), a({
          targets: this.$overlay[0],
          opacity: 1,
          duration: this.options.inDuration,
          easing: "easeOutQuad"
        }), "" !== this.caption && (this.$photocaption && a.remove(this.$photoCaption[0]), this.$photoCaption = o('<div class="materialbox-caption"></div>'), this.$photoCaption.text(this.caption), o("body").append(this.$photoCaption), this.$photoCaption.css({
          display: "inline"
        }), a({
          targets: this.$photoCaption[0],
          opacity: 1,
          duration: this.options.inDuration,
          easing: "easeOutQuad"
        }));
        var i = 0,
            n = this.originalWidth / this.windowWidth,
            s = this.originalHeight / this.windowHeight;
        this.newWidth = 0, this.newHeight = 0, s < n ? (i = this.originalHeight / this.originalWidth, this.newWidth = .9 * this.windowWidth, this.newHeight = .9 * this.windowWidth * i) : (i = this.originalWidth / this.originalHeight, this.newWidth = .9 * this.windowHeight * i, this.newHeight = .9 * this.windowHeight), this._animateImageIn(), this._handleWindowScrollBound = this._handleWindowScroll.bind(this), this._handleWindowResizeBound = this._handleWindowResize.bind(this), this._handleWindowEscapeBound = this._handleWindowEscape.bind(this), window.addEventListener("scroll", this._handleWindowScrollBound), window.addEventListener("resize", this._handleWindowResizeBound), window.addEventListener("keyup", this._handleWindowEscapeBound);
      }
    }, {
      key: "close",
      value: function value() {
        var t = this;
        this._updateVars(), this.doneAnimating = !1, "function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, this.el), a.remove(this.el), a.remove(this.$overlay[0]), "" !== this.caption && a.remove(this.$photoCaption[0]), window.removeEventListener("scroll", this._handleWindowScrollBound), window.removeEventListener("resize", this._handleWindowResizeBound), window.removeEventListener("keyup", this._handleWindowEscapeBound), a({
          targets: this.$overlay[0],
          opacity: 0,
          duration: this.options.outDuration,
          easing: "easeOutQuad",
          complete: function complete() {
            t.overlayActive = !1, t.$overlay.remove();
          }
        }), this._animateImageOut(), "" !== this.caption && a({
          targets: this.$photoCaption[0],
          opacity: 0,
          duration: this.options.outDuration,
          easing: "easeOutQuad",
          complete: function complete() {
            t.$photoCaption.remove();
          }
        });
      }
    }], [{
      key: "init",
      value: function value(t, e) {
        return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e);
      }
    }, {
      key: "getInstance",
      value: function value(t) {
        return (t.jquery ? t[0] : t).M_Materialbox;
      }
    }, {
      key: "defaults",
      get: function get() {
        return e;
      }
    }]), n;
  }();

  M.Materialbox = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "materialbox", "M_Materialbox");
}(cash, M.anime), function (s) {
  "use strict";

  var e = {
    responsiveThreshold: 0
  },
      t = function (t) {
    function n(t, e) {
      _classCallCheck(this, n);

      var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));

      return (i.el.M_Parallax = i).options = s.extend({}, n.defaults, e), i._enabled = window.innerWidth > i.options.responsiveThreshold, i.$img = i.$el.find("img").first(), i.$img.each(function () {
        this.complete && s(this).trigger("load");
      }), i._updateParallax(), i._setupEventHandlers(), i._setupStyles(), n._parallaxes.push(i), i;
    }

    return _inherits(n, Component), _createClass(n, [{
      key: "destroy",
      value: function value() {
        n._parallaxes.splice(n._parallaxes.indexOf(this), 1), this.$img[0].style.transform = "", this._removeEventHandlers(), this.$el[0].M_Parallax = void 0;
      }
    }, {
      key: "_setupEventHandlers",
      value: function value() {
        this._handleImageLoadBound = this._handleImageLoad.bind(this), this.$img[0].addEventListener("load", this._handleImageLoadBound), 0 === n._parallaxes.length && (n._handleScrollThrottled = M.throttle(n._handleScroll, 5), window.addEventListener("scroll", n._handleScrollThrottled), n._handleWindowResizeThrottled = M.throttle(n._handleWindowResize, 5), window.addEventListener("resize", n._handleWindowResizeThrottled));
      }
    }, {
      key: "_removeEventHandlers",
      value: function value() {
        this.$img[0].removeEventListener("load", this._handleImageLoadBound), 0 === n._parallaxes.length && (window.removeEventListener("scroll", n._handleScrollThrottled), window.removeEventListener("resize", n._handleWindowResizeThrottled));
      }
    }, {
      key: "_setupStyles",
      value: function value() {
        this.$img[0].style.opacity = 1;
      }
    }, {
      key: "_handleImageLoad",
      value: function value() {
        this._updateParallax();
      }
    }, {
      key: "_updateParallax",
      value: function value() {
        var t = 0 < this.$el.height() ? this.el.parentNode.offsetHeight : 500,
            e = this.$img[0].offsetHeight - t,
            i = this.$el.offset().top + t,
            n = this.$el.offset().top,
            s = M.getDocumentScrollTop(),
            o = window.innerHeight,
            a = e * ((s + o - n) / (t + o));
        this._enabled ? s < i && n < s + o && (this.$img[0].style.transform = "translate3D(-50%, " + a + "px, 0)") : this.$img[0].style.transform = "";
      }
    }], [{
      key: "init",
      value: function value(t, e) {
        return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e);
      }
    }, {
      key: "getInstance",
      value: function value(t) {
        return (t.jquery ? t[0] : t).M_Parallax;
      }
    }, {
      key: "_handleScroll",
      value: function value() {
        for (var t = 0; t < n._parallaxes.length; t++) {
          var e = n._parallaxes[t];

          e._updateParallax.call(e);
        }
      }
    }, {
      key: "_handleWindowResize",
      value: function value() {
        for (var t = 0; t < n._parallaxes.length; t++) {
          var e = n._parallaxes[t];
          e._enabled = window.innerWidth > e.options.responsiveThreshold;
        }
      }
    }, {
      key: "defaults",
      get: function get() {
        return e;
      }
    }]), n;
  }();

  t._parallaxes = [], M.Parallax = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "parallax", "M_Parallax");
}(cash), function (a, s) {
  "use strict";

  var e = {
    duration: 300,
    onShow: null,
    swipeable: !1,
    responsiveThreshold: 1 / 0
  },
      t = function (t) {
    function n(t, e) {
      _classCallCheck(this, n);

      var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));

      return (i.el.M_Tabs = i).options = a.extend({}, n.defaults, e), i.$tabLinks = i.$el.children("li.tab").children("a"), i.index = 0, i._setupActiveTabLink(), i.options.swipeable ? i._setupSwipeableTabs() : i._setupNormalTabs(), i._setTabsAndTabWidth(), i._createIndicator(), i._setupEventHandlers(), i;
    }

    return _inherits(n, Component), _createClass(n, [{
      key: "destroy",
      value: function value() {
        this._removeEventHandlers(), this._indicator.parentNode.removeChild(this._indicator), this.options.swipeable ? this._teardownSwipeableTabs() : this._teardownNormalTabs(), this.$el[0].M_Tabs = void 0;
      }
    }, {
      key: "_setupEventHandlers",
      value: function value() {
        this._handleWindowResizeBound = this._handleWindowResize.bind(this), window.addEventListener("resize", this._handleWindowResizeBound), this._handleTabClickBound = this._handleTabClick.bind(this), this.el.addEventListener("click", this._handleTabClickBound);
      }
    }, {
      key: "_removeEventHandlers",
      value: function value() {
        window.removeEventListener("resize", this._handleWindowResizeBound), this.el.removeEventListener("click", this._handleTabClickBound);
      }
    }, {
      key: "_handleWindowResize",
      value: function value() {
        this._setTabsAndTabWidth(), 0 !== this.tabWidth && 0 !== this.tabsWidth && (this._indicator.style.left = this._calcLeftPos(this.$activeTabLink) + "px", this._indicator.style.right = this._calcRightPos(this.$activeTabLink) + "px");
      }
    }, {
      key: "_handleTabClick",
      value: function value(t) {
        var e = this,
            i = a(t.target).closest("li.tab"),
            n = a(t.target).closest("a");
        if (n.length && n.parent().hasClass("tab")) if (i.hasClass("disabled")) t.preventDefault();else if (!n.attr("target")) {
          this.$activeTabLink.removeClass("active");
          var s = this.$content;
          this.$activeTabLink = n, this.$content = a(M.escapeHash(n[0].hash)), this.$tabLinks = this.$el.children("li.tab").children("a"), this.$activeTabLink.addClass("active");
          var o = this.index;
          this.index = Math.max(this.$tabLinks.index(n), 0), this.options.swipeable ? this._tabsCarousel && this._tabsCarousel.set(this.index, function () {
            "function" == typeof e.options.onShow && e.options.onShow.call(e, e.$content[0]);
          }) : this.$content.length && (this.$content[0].style.display = "block", this.$content.addClass("active"), "function" == typeof this.options.onShow && this.options.onShow.call(this, this.$content[0]), s.length && !s.is(this.$content) && (s[0].style.display = "none", s.removeClass("active"))), this._setTabsAndTabWidth(), this._animateIndicator(o), t.preventDefault();
        }
      }
    }, {
      key: "_createIndicator",
      value: function value() {
        var t = this,
            e = document.createElement("li");
        e.classList.add("indicator"), this.el.appendChild(e), this._indicator = e, setTimeout(function () {
          t._indicator.style.left = t._calcLeftPos(t.$activeTabLink) + "px", t._indicator.style.right = t._calcRightPos(t.$activeTabLink) + "px";
        }, 0);
      }
    }, {
      key: "_setupActiveTabLink",
      value: function value() {
        this.$activeTabLink = a(this.$tabLinks.filter('[href="' + location.hash + '"]')), 0 === this.$activeTabLink.length && (this.$activeTabLink = this.$el.children("li.tab").children("a.active").first()), 0 === this.$activeTabLink.length && (this.$activeTabLink = this.$el.children("li.tab").children("a").first()), this.$tabLinks.removeClass("active"), this.$activeTabLink[0].classList.add("active"), this.index = Math.max(this.$tabLinks.index(this.$activeTabLink), 0), this.$activeTabLink.length && (this.$content = a(M.escapeHash(this.$activeTabLink[0].hash)), this.$content.addClass("active"));
      }
    }, {
      key: "_setupSwipeableTabs",
      value: function value() {
        var i = this;
        window.innerWidth > this.options.responsiveThreshold && (this.options.swipeable = !1);
        var n = a();
        this.$tabLinks.each(function (t) {
          var e = a(M.escapeHash(t.hash));
          e.addClass("carousel-item"), n = n.add(e);
        });
        var t = a('<div class="tabs-content carousel carousel-slider"></div>');
        n.first().before(t), t.append(n), n[0].style.display = "";
        var e = this.$activeTabLink.closest(".tab").index();
        this._tabsCarousel = M.Carousel.init(t[0], {
          fullWidth: !0,
          noWrap: !0,
          onCycleTo: function onCycleTo(t) {
            var e = i.index;
            i.index = a(t).index(), i.$activeTabLink.removeClass("active"), i.$activeTabLink = i.$tabLinks.eq(i.index), i.$activeTabLink.addClass("active"), i._animateIndicator(e), "function" == typeof i.options.onShow && i.options.onShow.call(i, i.$content[0]);
          }
        }), this._tabsCarousel.set(e);
      }
    }, {
      key: "_teardownSwipeableTabs",
      value: function value() {
        var t = this._tabsCarousel.$el;
        this._tabsCarousel.destroy(), t.after(t.children()), t.remove();
      }
    }, {
      key: "_setupNormalTabs",
      value: function value() {
        this.$tabLinks.not(this.$activeTabLink).each(function (t) {
          if (t.hash) {
            var e = a(M.escapeHash(t.hash));
            e.length && (e[0].style.display = "none");
          }
        });
      }
    }, {
      key: "_teardownNormalTabs",
      value: function value() {
        this.$tabLinks.each(function (t) {
          if (t.hash) {
            var e = a(M.escapeHash(t.hash));
            e.length && (e[0].style.display = "");
          }
        });
      }
    }, {
      key: "_setTabsAndTabWidth",
      value: function value() {
        this.tabsWidth = this.$el.width(), this.tabWidth = Math.max(this.tabsWidth, this.el.scrollWidth) / this.$tabLinks.length;
      }
    }, {
      key: "_calcRightPos",
      value: function value(t) {
        return Math.ceil(this.tabsWidth - t.position().left - t[0].getBoundingClientRect().width);
      }
    }, {
      key: "_calcLeftPos",
      value: function value(t) {
        return Math.floor(t.position().left);
      }
    }, {
      key: "updateTabIndicator",
      value: function value() {
        this._setTabsAndTabWidth(), this._animateIndicator(this.index);
      }
    }, {
      key: "_animateIndicator",
      value: function value(t) {
        var e = 0,
            i = 0;
        0 <= this.index - t ? e = 90 : i = 90;
        var n = {
          targets: this._indicator,
          left: {
            value: this._calcLeftPos(this.$activeTabLink),
            delay: e
          },
          right: {
            value: this._calcRightPos(this.$activeTabLink),
            delay: i
          },
          duration: this.options.duration,
          easing: "easeOutQuad"
        };
        s.remove(this._indicator), s(n);
      }
    }, {
      key: "select",
      value: function value(t) {
        var e = this.$tabLinks.filter('[href="#' + t + '"]');
        e.length && e.trigger("click");
      }
    }], [{
      key: "init",
      value: function value(t, e) {
        return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e);
      }
    }, {
      key: "getInstance",
      value: function value(t) {
        return (t.jquery ? t[0] : t).M_Tabs;
      }
    }, {
      key: "defaults",
      get: function get() {
        return e;
      }
    }]), n;
  }();

  M.Tabs = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "tabs", "M_Tabs");
}(cash, M.anime), function (d, e) {
  "use strict";

  var i = {
    exitDelay: 200,
    enterDelay: 0,
    html: null,
    margin: 5,
    inDuration: 250,
    outDuration: 200,
    position: "bottom",
    transitionMovement: 10
  },
      t = function (t) {
    function n(t, e) {
      _classCallCheck(this, n);

      var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));

      return (i.el.M_Tooltip = i).options = d.extend({}, n.defaults, e), i.isOpen = !1, i.isHovered = !1, i.isFocused = !1, i._appendTooltipEl(), i._setupEventHandlers(), i;
    }

    return _inherits(n, Component), _createClass(n, [{
      key: "destroy",
      value: function value() {
        d(this.tooltipEl).remove(), this._removeEventHandlers(), this.el.M_Tooltip = void 0;
      }
    }, {
      key: "_appendTooltipEl",
      value: function value() {
        var t = document.createElement("div");
        t.classList.add("material-tooltip"), this.tooltipEl = t;
        var e = document.createElement("div");
        e.classList.add("tooltip-content"), e.innerHTML = this.options.html, t.appendChild(e), document.body.appendChild(t);
      }
    }, {
      key: "_updateTooltipContent",
      value: function value() {
        this.tooltipEl.querySelector(".tooltip-content").innerHTML = this.options.html;
      }
    }, {
      key: "_setupEventHandlers",
      value: function value() {
        this._handleMouseEnterBound = this._handleMouseEnter.bind(this), this._handleMouseLeaveBound = this._handleMouseLeave.bind(this), this._handleFocusBound = this._handleFocus.bind(this), this._handleBlurBound = this._handleBlur.bind(this), this.el.addEventListener("mouseenter", this._handleMouseEnterBound), this.el.addEventListener("mouseleave", this._handleMouseLeaveBound), this.el.addEventListener("focus", this._handleFocusBound, !0), this.el.addEventListener("blur", this._handleBlurBound, !0);
      }
    }, {
      key: "_removeEventHandlers",
      value: function value() {
        this.el.removeEventListener("mouseenter", this._handleMouseEnterBound), this.el.removeEventListener("mouseleave", this._handleMouseLeaveBound), this.el.removeEventListener("focus", this._handleFocusBound, !0), this.el.removeEventListener("blur", this._handleBlurBound, !0);
      }
    }, {
      key: "open",
      value: function value(t) {
        this.isOpen || (t = void 0 === t || void 0, this.isOpen = !0, this.options = d.extend({}, this.options, this._getAttributeOptions()), this._updateTooltipContent(), this._setEnterDelayTimeout(t));
      }
    }, {
      key: "close",
      value: function value() {
        this.isOpen && (this.isHovered = !1, this.isFocused = !1, this.isOpen = !1, this._setExitDelayTimeout());
      }
    }, {
      key: "_setExitDelayTimeout",
      value: function value() {
        var t = this;
        clearTimeout(this._exitDelayTimeout), this._exitDelayTimeout = setTimeout(function () {
          t.isHovered || t.isFocused || t._animateOut();
        }, this.options.exitDelay);
      }
    }, {
      key: "_setEnterDelayTimeout",
      value: function value(t) {
        var e = this;
        clearTimeout(this._enterDelayTimeout), this._enterDelayTimeout = setTimeout(function () {
          (e.isHovered || e.isFocused || t) && e._animateIn();
        }, this.options.enterDelay);
      }
    }, {
      key: "_positionTooltip",
      value: function value() {
        var t,
            e = this.el,
            i = this.tooltipEl,
            n = e.offsetHeight,
            s = e.offsetWidth,
            o = i.offsetHeight,
            a = i.offsetWidth,
            r = this.options.margin,
            l = void 0,
            h = void 0;
        this.xMovement = 0, this.yMovement = 0, l = e.getBoundingClientRect().top + M.getDocumentScrollTop(), h = e.getBoundingClientRect().left + M.getDocumentScrollLeft(), "top" === this.options.position ? (l += -o - r, h += s / 2 - a / 2, this.yMovement = -this.options.transitionMovement) : "right" === this.options.position ? (l += n / 2 - o / 2, h += s + r, this.xMovement = this.options.transitionMovement) : "left" === this.options.position ? (l += n / 2 - o / 2, h += -a - r, this.xMovement = -this.options.transitionMovement) : (l += n + r, h += s / 2 - a / 2, this.yMovement = this.options.transitionMovement), t = this._repositionWithinScreen(h, l, a, o), d(i).css({
          top: t.y + "px",
          left: t.x + "px"
        });
      }
    }, {
      key: "_repositionWithinScreen",
      value: function value(t, e, i, n) {
        var s = M.getDocumentScrollLeft(),
            o = M.getDocumentScrollTop(),
            a = t - s,
            r = e - o,
            l = {
          left: a,
          top: r,
          width: i,
          height: n
        },
            h = this.options.margin + this.options.transitionMovement,
            d = M.checkWithinContainer(document.body, l, h);
        return d.left ? a = h : d.right && (a -= a + i - window.innerWidth), d.top ? r = h : d.bottom && (r -= r + n - window.innerHeight), {
          x: a + s,
          y: r + o
        };
      }
    }, {
      key: "_animateIn",
      value: function value() {
        this._positionTooltip(), this.tooltipEl.style.visibility = "visible", e.remove(this.tooltipEl), e({
          targets: this.tooltipEl,
          opacity: 1,
          translateX: this.xMovement,
          translateY: this.yMovement,
          duration: this.options.inDuration,
          easing: "easeOutCubic"
        });
      }
    }, {
      key: "_animateOut",
      value: function value() {
        e.remove(this.tooltipEl), e({
          targets: this.tooltipEl,
          opacity: 0,
          translateX: 0,
          translateY: 0,
          duration: this.options.outDuration,
          easing: "easeOutCubic"
        });
      }
    }, {
      key: "_handleMouseEnter",
      value: function value() {
        this.isHovered = !0, this.isFocused = !1, this.open(!1);
      }
    }, {
      key: "_handleMouseLeave",
      value: function value() {
        this.isHovered = !1, this.isFocused = !1, this.close();
      }
    }, {
      key: "_handleFocus",
      value: function value() {
        M.tabPressed && (this.isFocused = !0, this.open(!1));
      }
    }, {
      key: "_handleBlur",
      value: function value() {
        this.isFocused = !1, this.close();
      }
    }, {
      key: "_getAttributeOptions",
      value: function value() {
        var t = {},
            e = this.el.getAttribute("data-tooltip"),
            i = this.el.getAttribute("data-position");
        return e && (t.html = e), i && (t.position = i), t;
      }
    }], [{
      key: "init",
      value: function value(t, e) {
        return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e);
      }
    }, {
      key: "getInstance",
      value: function value(t) {
        return (t.jquery ? t[0] : t).M_Tooltip;
      }
    }, {
      key: "defaults",
      get: function get() {
        return i;
      }
    }]), n;
  }();

  M.Tooltip = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "tooltip", "M_Tooltip");
}(cash, M.anime), function (i) {
  "use strict";

  var t = t || {},
      e = document.querySelectorAll.bind(document);

  function m(t) {
    var e = "";

    for (var i in t) {
      t.hasOwnProperty(i) && (e += i + ":" + t[i] + ";");
    }

    return e;
  }

  var g = {
    duration: 750,
    show: function show(t, e) {
      if (2 === t.button) return !1;
      var i = e || this,
          n = document.createElement("div");
      n.className = "waves-ripple", i.appendChild(n);
      var s,
          o,
          a,
          r,
          l,
          h,
          d,
          u = (h = {
        top: 0,
        left: 0
      }, d = (s = i) && s.ownerDocument, o = d.documentElement, void 0 !== s.getBoundingClientRect && (h = s.getBoundingClientRect()), a = null !== (l = r = d) && l === l.window ? r : 9 === r.nodeType && r.defaultView, {
        top: h.top + a.pageYOffset - o.clientTop,
        left: h.left + a.pageXOffset - o.clientLeft
      }),
          c = t.pageY - u.top,
          p = t.pageX - u.left,
          v = "scale(" + i.clientWidth / 100 * 10 + ")";
      "touches" in t && (c = t.touches[0].pageY - u.top, p = t.touches[0].pageX - u.left), n.setAttribute("data-hold", Date.now()), n.setAttribute("data-scale", v), n.setAttribute("data-x", p), n.setAttribute("data-y", c);
      var f = {
        top: c + "px",
        left: p + "px"
      };
      n.className = n.className + " waves-notransition", n.setAttribute("style", m(f)), n.className = n.className.replace("waves-notransition", ""), f["-webkit-transform"] = v, f["-moz-transform"] = v, f["-ms-transform"] = v, f["-o-transform"] = v, f.transform = v, f.opacity = "1", f["-webkit-transition-duration"] = g.duration + "ms", f["-moz-transition-duration"] = g.duration + "ms", f["-o-transition-duration"] = g.duration + "ms", f["transition-duration"] = g.duration + "ms", f["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", f["-moz-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", f["-o-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", f["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", n.setAttribute("style", m(f));
    },
    hide: function hide(t) {
      l.touchup(t);
      var e = this,
          i = (e.clientWidth, null),
          n = e.getElementsByClassName("waves-ripple");
      if (!(0 < n.length)) return !1;
      var s = (i = n[n.length - 1]).getAttribute("data-x"),
          o = i.getAttribute("data-y"),
          a = i.getAttribute("data-scale"),
          r = 350 - (Date.now() - Number(i.getAttribute("data-hold")));
      r < 0 && (r = 0), setTimeout(function () {
        var t = {
          top: o + "px",
          left: s + "px",
          opacity: "0",
          "-webkit-transition-duration": g.duration + "ms",
          "-moz-transition-duration": g.duration + "ms",
          "-o-transition-duration": g.duration + "ms",
          "transition-duration": g.duration + "ms",
          "-webkit-transform": a,
          "-moz-transform": a,
          "-ms-transform": a,
          "-o-transform": a,
          transform: a
        };
        i.setAttribute("style", m(t)), setTimeout(function () {
          try {
            e.removeChild(i);
          } catch (t) {
            return !1;
          }
        }, g.duration);
      }, r);
    },
    wrapInput: function wrapInput(t) {
      for (var e = 0; e < t.length; e++) {
        var i = t[e];

        if ("input" === i.tagName.toLowerCase()) {
          var n = i.parentNode;
          if ("i" === n.tagName.toLowerCase() && -1 !== n.className.indexOf("waves-effect")) continue;
          var s = document.createElement("i");
          s.className = i.className + " waves-input-wrapper";
          var o = i.getAttribute("style");
          o || (o = ""), s.setAttribute("style", o), i.className = "waves-button-input", i.removeAttribute("style"), n.replaceChild(s, i), s.appendChild(i);
        }
      }
    }
  },
      l = {
    touches: 0,
    allowEvent: function allowEvent(t) {
      var e = !0;
      return "touchstart" === t.type ? l.touches += 1 : "touchend" === t.type || "touchcancel" === t.type ? setTimeout(function () {
        0 < l.touches && (l.touches -= 1);
      }, 500) : "mousedown" === t.type && 0 < l.touches && (e = !1), e;
    },
    touchup: function touchup(t) {
      l.allowEvent(t);
    }
  };

  function n(t) {
    var e = function (t) {
      if (!1 === l.allowEvent(t)) return null;

      for (var e = null, i = t.target || t.srcElement; null !== i.parentNode;) {
        if (!(i instanceof SVGElement) && -1 !== i.className.indexOf("waves-effect")) {
          e = i;
          break;
        }

        i = i.parentNode;
      }

      return e;
    }(t);

    null !== e && (g.show(t, e), "ontouchstart" in i && (e.addEventListener("touchend", g.hide, !1), e.addEventListener("touchcancel", g.hide, !1)), e.addEventListener("mouseup", g.hide, !1), e.addEventListener("mouseleave", g.hide, !1), e.addEventListener("dragend", g.hide, !1));
  }

  t.displayEffect = function (t) {
    "duration" in (t = t || {}) && (g.duration = t.duration), g.wrapInput(e(".waves-effect")), "ontouchstart" in i && document.body.addEventListener("touchstart", n, !1), document.body.addEventListener("mousedown", n, !1);
  }, t.attach = function (t) {
    "input" === t.tagName.toLowerCase() && (g.wrapInput([t]), t = t.parentNode), "ontouchstart" in i && t.addEventListener("touchstart", n, !1), t.addEventListener("mousedown", n, !1);
  }, i.Waves = t, document.addEventListener("DOMContentLoaded", function () {
    t.displayEffect();
  }, !1);
}(window), function (i, n) {
  "use strict";

  var t = {
    html: "",
    displayLength: 4e3,
    inDuration: 300,
    outDuration: 375,
    classes: "",
    completeCallback: null,
    activationPercent: .8
  },
      e = function () {
    function s(t) {
      _classCallCheck(this, s), this.options = i.extend({}, s.defaults, t), this.message = this.options.html, this.panning = !1, this.timeRemaining = this.options.displayLength, 0 === s._toasts.length && s._createContainer(), s._toasts.push(this);

      var e = this._createToast();

      (e.M_Toast = this).el = e, this.$el = i(e), this._animateIn(), this._setTimer();
    }

    return _createClass(s, [{
      key: "_createToast",
      value: function value() {
        var t = document.createElement("div");
        return t.classList.add("toast"), this.options.classes.length && i(t).addClass(this.options.classes), ("object" == (typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) ? this.message instanceof HTMLElement : this.message && "object" == _typeof(this.message) && null !== this.message && 1 === this.message.nodeType && "string" == typeof this.message.nodeName) ? t.appendChild(this.message) : this.message.jquery ? i(t).append(this.message[0]) : t.innerHTML = this.message, s._container.appendChild(t), t;
      }
    }, {
      key: "_animateIn",
      value: function value() {
        n({
          targets: this.el,
          top: 0,
          opacity: 1,
          duration: this.options.inDuration,
          easing: "easeOutCubic"
        });
      }
    }, {
      key: "_setTimer",
      value: function value() {
        var t = this;
        this.timeRemaining !== 1 / 0 && (this.counterInterval = setInterval(function () {
          t.panning || (t.timeRemaining -= 20), t.timeRemaining <= 0 && t.dismiss();
        }, 20));
      }
    }, {
      key: "dismiss",
      value: function value() {
        var t = this;
        window.clearInterval(this.counterInterval);
        var e = this.el.offsetWidth * this.options.activationPercent;
        this.wasSwiped && (this.el.style.transition = "transform .05s, opacity .05s", this.el.style.transform = "translateX(" + e + "px)", this.el.style.opacity = 0), n({
          targets: this.el,
          opacity: 0,
          marginTop: -40,
          duration: this.options.outDuration,
          easing: "easeOutExpo",
          complete: function complete() {
            "function" == typeof t.options.completeCallback && t.options.completeCallback(), t.$el.remove(), s._toasts.splice(s._toasts.indexOf(t), 1), 0 === s._toasts.length && s._removeContainer();
          }
        });
      }
    }], [{
      key: "getInstance",
      value: function value(t) {
        return (t.jquery ? t[0] : t).M_Toast;
      }
    }, {
      key: "_createContainer",
      value: function value() {
        var t = document.createElement("div");
        t.setAttribute("id", "toast-container"), t.addEventListener("touchstart", s._onDragStart), t.addEventListener("touchmove", s._onDragMove), t.addEventListener("touchend", s._onDragEnd), t.addEventListener("mousedown", s._onDragStart), document.addEventListener("mousemove", s._onDragMove), document.addEventListener("mouseup", s._onDragEnd), document.body.appendChild(t), s._container = t;
      }
    }, {
      key: "_removeContainer",
      value: function value() {
        document.removeEventListener("mousemove", s._onDragMove), document.removeEventListener("mouseup", s._onDragEnd), i(s._container).remove(), s._container = null;
      }
    }, {
      key: "_onDragStart",
      value: function value(t) {
        if (t.target && i(t.target).closest(".toast").length) {
          var e = i(t.target).closest(".toast")[0].M_Toast;
          e.panning = !0, (s._draggedToast = e).el.classList.add("panning"), e.el.style.transition = "", e.startingXPos = s._xPos(t), e.time = Date.now(), e.xPos = s._xPos(t);
        }
      }
    }, {
      key: "_onDragMove",
      value: function value(t) {
        if (s._draggedToast) {
          t.preventDefault();
          var e = s._draggedToast;
          e.deltaX = Math.abs(e.xPos - s._xPos(t)), e.xPos = s._xPos(t), e.velocityX = e.deltaX / (Date.now() - e.time), e.time = Date.now();
          var i = e.xPos - e.startingXPos,
              n = e.el.offsetWidth * e.options.activationPercent;
          e.el.style.transform = "translateX(" + i + "px)", e.el.style.opacity = 1 - Math.abs(i / n);
        }
      }
    }, {
      key: "_onDragEnd",
      value: function value() {
        if (s._draggedToast) {
          var t = s._draggedToast;
          t.panning = !1, t.el.classList.remove("panning");
          var e = t.xPos - t.startingXPos,
              i = t.el.offsetWidth * t.options.activationPercent;
          Math.abs(e) > i || 1 < t.velocityX ? (t.wasSwiped = !0, t.dismiss()) : (t.el.style.transition = "transform .2s, opacity .2s", t.el.style.transform = "", t.el.style.opacity = ""), s._draggedToast = null;
        }
      }
    }, {
      key: "_xPos",
      value: function value(t) {
        return t.targetTouches && 1 <= t.targetTouches.length ? t.targetTouches[0].clientX : t.clientX;
      }
    }, {
      key: "dismissAll",
      value: function value() {
        for (var t in s._toasts) {
          s._toasts[t].dismiss();
        }
      }
    }, {
      key: "defaults",
      get: function get() {
        return t;
      }
    }]), s;
  }();

  e._toasts = [], e._container = null, e._draggedToast = null, M.Toast = e, M.toast = function (t) {
    return new e(t);
  };
}(cash, M.anime), function (s, o) {
  "use strict";

  var e = {
    edge: "left",
    draggable: !0,
    inDuration: 250,
    outDuration: 200,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null,
    preventScrolling: !0
  },
      t = function (t) {
    function n(t, e) {
      _classCallCheck(this, n);

      var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));

      return (i.el.M_Sidenav = i).id = i.$el.attr("id"), i.options = s.extend({}, n.defaults, e), i.isOpen = !1, i.isFixed = i.el.classList.contains("sidenav-fixed"), i.isDragged = !1, i.lastWindowWidth = window.innerWidth, i.lastWindowHeight = window.innerHeight, i._createOverlay(), i._createDragTarget(), i._setupEventHandlers(), i._setupClasses(), i._setupFixed(), n._sidenavs.push(i), i;
    }

    return _inherits(n, Component), _createClass(n, [{
      key: "destroy",
      value: function value() {
        this._removeEventHandlers(), this._enableBodyScrolling(), this._overlay.parentNode.removeChild(this._overlay), this.dragTarget.parentNode.removeChild(this.dragTarget), this.el.M_Sidenav = void 0, this.el.style.transform = "";

        var t = n._sidenavs.indexOf(this);

        0 <= t && n._sidenavs.splice(t, 1);
      }
    }, {
      key: "_createOverlay",
      value: function value() {
        var t = document.createElement("div");
        this._closeBound = this.close.bind(this), t.classList.add("sidenav-overlay"), t.addEventListener("click", this._closeBound), document.body.appendChild(t), this._overlay = t;
      }
    }, {
      key: "_setupEventHandlers",
      value: function value() {
        0 === n._sidenavs.length && document.body.addEventListener("click", this._handleTriggerClick), this._handleDragTargetDragBound = this._handleDragTargetDrag.bind(this), this._handleDragTargetReleaseBound = this._handleDragTargetRelease.bind(this), this._handleCloseDragBound = this._handleCloseDrag.bind(this), this._handleCloseReleaseBound = this._handleCloseRelease.bind(this), this._handleCloseTriggerClickBound = this._handleCloseTriggerClick.bind(this), this.dragTarget.addEventListener("touchmove", this._handleDragTargetDragBound), this.dragTarget.addEventListener("touchend", this._handleDragTargetReleaseBound), this._overlay.addEventListener("touchmove", this._handleCloseDragBound), this._overlay.addEventListener("touchend", this._handleCloseReleaseBound), this.el.addEventListener("touchmove", this._handleCloseDragBound), this.el.addEventListener("touchend", this._handleCloseReleaseBound), this.el.addEventListener("click", this._handleCloseTriggerClickBound), this.isFixed && (this._handleWindowResizeBound = this._handleWindowResize.bind(this), window.addEventListener("resize", this._handleWindowResizeBound));
      }
    }, {
      key: "_removeEventHandlers",
      value: function value() {
        1 === n._sidenavs.length && document.body.removeEventListener("click", this._handleTriggerClick), this.dragTarget.removeEventListener("touchmove", this._handleDragTargetDragBound), this.dragTarget.removeEventListener("touchend", this._handleDragTargetReleaseBound), this._overlay.removeEventListener("touchmove", this._handleCloseDragBound), this._overlay.removeEventListener("touchend", this._handleCloseReleaseBound), this.el.removeEventListener("touchmove", this._handleCloseDragBound), this.el.removeEventListener("touchend", this._handleCloseReleaseBound), this.el.removeEventListener("click", this._handleCloseTriggerClickBound), this.isFixed && window.removeEventListener("resize", this._handleWindowResizeBound);
      }
    }, {
      key: "_handleTriggerClick",
      value: function value(t) {
        var e = s(t.target).closest(".sidenav-trigger");

        if (t.target && e.length) {
          var i = M.getIdFromTrigger(e[0]),
              n = document.getElementById(i).M_Sidenav;
          n && n.open(e), t.preventDefault();
        }
      }
    }, {
      key: "_startDrag",
      value: function value(t) {
        var e = t.targetTouches[0].clientX;
        this.isDragged = !0, this._startingXpos = e, this._xPos = this._startingXpos, this._time = Date.now(), this._width = this.el.getBoundingClientRect().width, this._overlay.style.display = "block", this._initialScrollTop = this.isOpen ? this.el.scrollTop : M.getDocumentScrollTop(), this._verticallyScrolling = !1, o.remove(this.el), o.remove(this._overlay);
      }
    }, {
      key: "_dragMoveUpdate",
      value: function value(t) {
        var e = t.targetTouches[0].clientX,
            i = this.isOpen ? this.el.scrollTop : M.getDocumentScrollTop();
        this.deltaX = Math.abs(this._xPos - e), this._xPos = e, this.velocityX = this.deltaX / (Date.now() - this._time), this._time = Date.now(), this._initialScrollTop !== i && (this._verticallyScrolling = !0);
      }
    }, {
      key: "_handleDragTargetDrag",
      value: function value(t) {
        if (this.options.draggable && !this._isCurrentlyFixed() && !this._verticallyScrolling) {
          this.isDragged || this._startDrag(t), this._dragMoveUpdate(t);
          var e = this._xPos - this._startingXpos,
              i = 0 < e ? "right" : "left";
          e = Math.min(this._width, Math.abs(e)), this.options.edge === i && (e = 0);
          var n = e,
              s = "translateX(-100%)";
          "right" === this.options.edge && (s = "translateX(100%)", n = -n), this.percentOpen = Math.min(1, e / this._width), this.el.style.transform = s + " translateX(" + n + "px)", this._overlay.style.opacity = this.percentOpen;
        }
      }
    }, {
      key: "_handleDragTargetRelease",
      value: function value() {
        this.isDragged && (.2 < this.percentOpen ? this.open() : this._animateOut(), this.isDragged = !1, this._verticallyScrolling = !1);
      }
    }, {
      key: "_handleCloseDrag",
      value: function value(t) {
        if (this.isOpen) {
          if (!this.options.draggable || this._isCurrentlyFixed() || this._verticallyScrolling) return;
          this.isDragged || this._startDrag(t), this._dragMoveUpdate(t);
          var e = this._xPos - this._startingXpos,
              i = 0 < e ? "right" : "left";
          e = Math.min(this._width, Math.abs(e)), this.options.edge !== i && (e = 0);
          var n = -e;
          "right" === this.options.edge && (n = -n), this.percentOpen = Math.min(1, 1 - e / this._width), this.el.style.transform = "translateX(" + n + "px)", this._overlay.style.opacity = this.percentOpen;
        }
      }
    }, {
      key: "_handleCloseRelease",
      value: function value() {
        this.isOpen && this.isDragged && (.8 < this.percentOpen ? this._animateIn() : this.close(), this.isDragged = !1, this._verticallyScrolling = !1);
      }
    }, {
      key: "_handleCloseTriggerClick",
      value: function value(t) {
        s(t.target).closest(".sidenav-close").length && !this._isCurrentlyFixed() && this.close();
      }
    }, {
      key: "_handleWindowResize",
      value: function value() {
        this.lastWindowWidth !== window.innerWidth && (992 < window.innerWidth ? this.open() : this.close()), this.lastWindowWidth = window.innerWidth, this.lastWindowHeight = window.innerHeight;
      }
    }, {
      key: "_setupClasses",
      value: function value() {
        "right" === this.options.edge && (this.el.classList.add("right-aligned"), this.dragTarget.classList.add("right-aligned"));
      }
    }, {
      key: "_removeClasses",
      value: function value() {
        this.el.classList.remove("right-aligned"), this.dragTarget.classList.remove("right-aligned");
      }
    }, {
      key: "_setupFixed",
      value: function value() {
        this._isCurrentlyFixed() && this.open();
      }
    }, {
      key: "_isCurrentlyFixed",
      value: function value() {
        return this.isFixed && 992 < window.innerWidth;
      }
    }, {
      key: "_createDragTarget",
      value: function value() {
        var t = document.createElement("div");
        t.classList.add("drag-target"), document.body.appendChild(t), this.dragTarget = t;
      }
    }, {
      key: "_preventBodyScrolling",
      value: function value() {
        document.body.style.overflow = "hidden";
      }
    }, {
      key: "_enableBodyScrolling",
      value: function value() {
        document.body.style.overflow = "";
      }
    }, {
      key: "open",
      value: function value() {
        !0 !== this.isOpen && (this.isOpen = !0, "function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, this.el), this._isCurrentlyFixed() ? (o.remove(this.el), o({
          targets: this.el,
          translateX: 0,
          duration: 0,
          easing: "easeOutQuad"
        }), this._enableBodyScrolling(), this._overlay.style.display = "none") : (this.options.preventScrolling && this._preventBodyScrolling(), this.isDragged && 1 == this.percentOpen || this._animateIn()));
      }
    }, {
      key: "close",
      value: function value() {
        if (!1 !== this.isOpen) if (this.isOpen = !1, "function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, this.el), this._isCurrentlyFixed()) {
          var t = "left" === this.options.edge ? "-105%" : "105%";
          this.el.style.transform = "translateX(" + t + ")";
        } else this._enableBodyScrolling(), this.isDragged && 0 == this.percentOpen ? this._overlay.style.display = "none" : this._animateOut();
      }
    }, {
      key: "_animateIn",
      value: function value() {
        this._animateSidenavIn(), this._animateOverlayIn();
      }
    }, {
      key: "_animateSidenavIn",
      value: function value() {
        var t = this,
            e = "left" === this.options.edge ? -1 : 1;
        this.isDragged && (e = "left" === this.options.edge ? e + this.percentOpen : e - this.percentOpen), o.remove(this.el), o({
          targets: this.el,
          translateX: [100 * e + "%", 0],
          duration: this.options.inDuration,
          easing: "easeOutQuad",
          complete: function complete() {
            "function" == typeof t.options.onOpenEnd && t.options.onOpenEnd.call(t, t.el);
          }
        });
      }
    }, {
      key: "_animateOverlayIn",
      value: function value() {
        var t = 0;
        this.isDragged ? t = this.percentOpen : s(this._overlay).css({
          display: "block"
        }), o.remove(this._overlay), o({
          targets: this._overlay,
          opacity: [t, 1],
          duration: this.options.inDuration,
          easing: "easeOutQuad"
        });
      }
    }, {
      key: "_animateOut",
      value: function value() {
        this._animateSidenavOut(), this._animateOverlayOut();
      }
    }, {
      key: "_animateSidenavOut",
      value: function value() {
        var t = this,
            e = "left" === this.options.edge ? -1 : 1,
            i = 0;
        this.isDragged && (i = "left" === this.options.edge ? e + this.percentOpen : e - this.percentOpen), o.remove(this.el), o({
          targets: this.el,
          translateX: [100 * i + "%", 105 * e + "%"],
          duration: this.options.outDuration,
          easing: "easeOutQuad",
          complete: function complete() {
            "function" == typeof t.options.onCloseEnd && t.options.onCloseEnd.call(t, t.el);
          }
        });
      }
    }, {
      key: "_animateOverlayOut",
      value: function value() {
        var t = this;
        o.remove(this._overlay), o({
          targets: this._overlay,
          opacity: 0,
          duration: this.options.outDuration,
          easing: "easeOutQuad",
          complete: function complete() {
            s(t._overlay).css("display", "none");
          }
        });
      }
    }], [{
      key: "init",
      value: function value(t, e) {
        return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e);
      }
    }, {
      key: "getInstance",
      value: function value(t) {
        return (t.jquery ? t[0] : t).M_Sidenav;
      }
    }, {
      key: "defaults",
      get: function get() {
        return e;
      }
    }]), n;
  }();

  t._sidenavs = [], M.Sidenav = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "sidenav", "M_Sidenav");
}(cash, M.anime), function (o, a) {
  "use strict";

  var e = {
    throttle: 100,
    scrollOffset: 200,
    activeClass: "active",
    getActiveElement: function getActiveElement(t) {
      return 'a[href="#' + t + '"]';
    }
  },
      t = function (t) {
    function c(t, e) {
      _classCallCheck(this, c);

      var i = _possibleConstructorReturn(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this, c, t, e));

      return (i.el.M_ScrollSpy = i).options = o.extend({}, c.defaults, e), c._elements.push(i), c._count++, c._increment++, i.tickId = -1, i.id = c._increment, i._setupEventHandlers(), i._handleWindowScroll(), i;
    }

    return _inherits(c, Component), _createClass(c, [{
      key: "destroy",
      value: function value() {
        c._elements.splice(c._elements.indexOf(this), 1), c._elementsInView.splice(c._elementsInView.indexOf(this), 1), c._visibleElements.splice(c._visibleElements.indexOf(this.$el), 1), c._count--, this._removeEventHandlers(), o(this.options.getActiveElement(this.$el.attr("id"))).removeClass(this.options.activeClass), this.el.M_ScrollSpy = void 0;
      }
    }, {
      key: "_setupEventHandlers",
      value: function value() {
        var t = M.throttle(this._handleWindowScroll, 200);
        this._handleThrottledResizeBound = t.bind(this), this._handleWindowScrollBound = this._handleWindowScroll.bind(this), 1 === c._count && (window.addEventListener("scroll", this._handleWindowScrollBound), window.addEventListener("resize", this._handleThrottledResizeBound), document.body.addEventListener("click", this._handleTriggerClick));
      }
    }, {
      key: "_removeEventHandlers",
      value: function value() {
        0 === c._count && (window.removeEventListener("scroll", this._handleWindowScrollBound), window.removeEventListener("resize", this._handleThrottledResizeBound), document.body.removeEventListener("click", this._handleTriggerClick));
      }
    }, {
      key: "_handleTriggerClick",
      value: function value(t) {
        for (var e = o(t.target), i = c._elements.length - 1; 0 <= i; i--) {
          var n = c._elements[i];

          if (e.is('a[href="#' + n.$el.attr("id") + '"]')) {
            t.preventDefault();
            var s = n.$el.offset().top + 1;
            a({
              targets: [document.documentElement, document.body],
              scrollTop: s - n.options.scrollOffset,
              duration: 400,
              easing: "easeOutCubic"
            });
            break;
          }
        }
      }
    }, {
      key: "_handleWindowScroll",
      value: function value() {
        c._ticks++;

        for (var t = M.getDocumentScrollTop(), e = M.getDocumentScrollLeft(), i = e + window.innerWidth, n = t + window.innerHeight, s = c._findElements(t, i, n, e), o = 0; o < s.length; o++) {
          var a = s[o];
          a.tickId < 0 && a._enter(), a.tickId = c._ticks;
        }

        for (var r = 0; r < c._elementsInView.length; r++) {
          var l = c._elementsInView[r],
              h = l.tickId;
          0 <= h && h !== c._ticks && (l._exit(), l.tickId = -1);
        }

        c._elementsInView = s;
      }
    }, {
      key: "_enter",
      value: function value() {
        (c._visibleElements = c._visibleElements.filter(function (t) {
          return 0 != t.height();
        }))[0] ? (o(this.options.getActiveElement(c._visibleElements[0].attr("id"))).removeClass(this.options.activeClass), c._visibleElements[0][0].M_ScrollSpy && this.id < c._visibleElements[0][0].M_ScrollSpy.id ? c._visibleElements.unshift(this.$el) : c._visibleElements.push(this.$el)) : c._visibleElements.push(this.$el), o(this.options.getActiveElement(c._visibleElements[0].attr("id"))).addClass(this.options.activeClass);
      }
    }, {
      key: "_exit",
      value: function value() {
        var e = this;
        (c._visibleElements = c._visibleElements.filter(function (t) {
          return 0 != t.height();
        }))[0] && (o(this.options.getActiveElement(c._visibleElements[0].attr("id"))).removeClass(this.options.activeClass), (c._visibleElements = c._visibleElements.filter(function (t) {
          return t.attr("id") != e.$el.attr("id");
        }))[0] && o(this.options.getActiveElement(c._visibleElements[0].attr("id"))).addClass(this.options.activeClass));
      }
    }], [{
      key: "init",
      value: function value(t, e) {
        return _get(c.__proto__ || Object.getPrototypeOf(c), "init", this).call(this, this, t, e);
      }
    }, {
      key: "getInstance",
      value: function value(t) {
        return (t.jquery ? t[0] : t).M_ScrollSpy;
      }
    }, {
      key: "_findElements",
      value: function value(t, e, i, n) {
        for (var s = [], o = 0; o < c._elements.length; o++) {
          var a = c._elements[o],
              r = t + a.options.scrollOffset || 200;

          if (0 < a.$el.height()) {
            var l = a.$el.offset().top,
                h = a.$el.offset().left,
                d = h + a.$el.width(),
                u = l + a.$el.height();
            !(e < h || d < n || i < l || u < r) && s.push(a);
          }
        }

        return s;
      }
    }, {
      key: "defaults",
      get: function get() {
        return e;
      }
    }]), c;
  }();

  t._elements = [], t._elementsInView = [], t._visibleElements = [], t._count = 0, t._increment = 0, t._ticks = 0, M.ScrollSpy = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "scrollSpy", "M_ScrollSpy");
}(cash, M.anime), function (h) {
  "use strict";

  var e = {
    data: {},
    limit: 1 / 0,
    onAutocomplete: null,
    minLength: 1,
    sortFunction: function sortFunction(t, e, i) {
      return t.indexOf(i) - e.indexOf(i);
    }
  },
      t = function (t) {
    function s(t, e) {
      _classCallCheck(this, s);

      var i = _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, s, t, e));

      return (i.el.M_Autocomplete = i).options = h.extend({}, s.defaults, e), i.isOpen = !1, i.count = 0, i.activeIndex = -1, i.oldVal, i.$inputField = i.$el.closest(".input-field"), i.$active = h(), i._mousedown = !1, i._setupDropdown(), i._setupEventHandlers(), i;
    }

    return _inherits(s, Component), _createClass(s, [{
      key: "destroy",
      value: function value() {
        this._removeEventHandlers(), this._removeDropdown(), this.el.M_Autocomplete = void 0;
      }
    }, {
      key: "_setupEventHandlers",
      value: function value() {
        this._handleInputBlurBound = this._handleInputBlur.bind(this), this._handleInputKeyupAndFocusBound = this._handleInputKeyupAndFocus.bind(this), this._handleInputKeydownBound = this._handleInputKeydown.bind(this), this._handleInputClickBound = this._handleInputClick.bind(this), this._handleContainerMousedownAndTouchstartBound = this._handleContainerMousedownAndTouchstart.bind(this), this._handleContainerMouseupAndTouchendBound = this._handleContainerMouseupAndTouchend.bind(this), this.el.addEventListener("blur", this._handleInputBlurBound), this.el.addEventListener("keyup", this._handleInputKeyupAndFocusBound), this.el.addEventListener("focus", this._handleInputKeyupAndFocusBound), this.el.addEventListener("keydown", this._handleInputKeydownBound), this.el.addEventListener("click", this._handleInputClickBound), this.container.addEventListener("mousedown", this._handleContainerMousedownAndTouchstartBound), this.container.addEventListener("mouseup", this._handleContainerMouseupAndTouchendBound), void 0 !== window.ontouchstart && (this.container.addEventListener("touchstart", this._handleContainerMousedownAndTouchstartBound), this.container.addEventListener("touchend", this._handleContainerMouseupAndTouchendBound));
      }
    }, {
      key: "_removeEventHandlers",
      value: function value() {
        this.el.removeEventListener("blur", this._handleInputBlurBound), this.el.removeEventListener("keyup", this._handleInputKeyupAndFocusBound), this.el.removeEventListener("focus", this._handleInputKeyupAndFocusBound), this.el.removeEventListener("keydown", this._handleInputKeydownBound), this.el.removeEventListener("click", this._handleInputClickBound), this.container.removeEventListener("mousedown", this._handleContainerMousedownAndTouchstartBound), this.container.removeEventListener("mouseup", this._handleContainerMouseupAndTouchendBound), void 0 !== window.ontouchstart && (this.container.removeEventListener("touchstart", this._handleContainerMousedownAndTouchstartBound), this.container.removeEventListener("touchend", this._handleContainerMouseupAndTouchendBound));
      }
    }, {
      key: "_setupDropdown",
      value: function value() {
        var e = this;
        this.container = document.createElement("ul"), this.container.id = "autocomplete-options-" + M.guid(), h(this.container).addClass("autocomplete-content dropdown-content"), this.$inputField.append(this.container), this.el.setAttribute("data-target", this.container.id), this.dropdown = M.Dropdown.init(this.el, {
          autoFocus: !1,
          closeOnClick: !1,
          coverTrigger: !1,
          onItemClick: function onItemClick(t) {
            e.selectOption(h(t));
          }
        }), this.el.removeEventListener("click", this.dropdown._handleClickBound);
      }
    }, {
      key: "_removeDropdown",
      value: function value() {
        this.container.parentNode.removeChild(this.container);
      }
    }, {
      key: "_handleInputBlur",
      value: function value() {
        this._mousedown || (this.close(), this._resetAutocomplete());
      }
    }, {
      key: "_handleInputKeyupAndFocus",
      value: function value(t) {
        "keyup" === t.type && (s._keydown = !1), this.count = 0;
        var e = this.el.value.toLowerCase();
        13 !== t.keyCode && 38 !== t.keyCode && 40 !== t.keyCode && (this.oldVal === e || !M.tabPressed && "focus" === t.type || this.open(), this.oldVal = e);
      }
    }, {
      key: "_handleInputKeydown",
      value: function value(t) {
        s._keydown = !0;
        var e = t.keyCode,
            i = void 0,
            n = h(this.container).children("li").length;
        e === M.keys.ENTER && 0 <= this.activeIndex ? (i = h(this.container).children("li").eq(this.activeIndex)).length && (this.selectOption(i), t.preventDefault()) : e !== M.keys.ARROW_UP && e !== M.keys.ARROW_DOWN || (t.preventDefault(), e === M.keys.ARROW_UP && 0 < this.activeIndex && this.activeIndex--, e === M.keys.ARROW_DOWN && this.activeIndex < n - 1 && this.activeIndex++, this.$active.removeClass("active"), 0 <= this.activeIndex && (this.$active = h(this.container).children("li").eq(this.activeIndex), this.$active.addClass("active")));
      }
    }, {
      key: "_handleInputClick",
      value: function value(t) {
        this.open();
      }
    }, {
      key: "_handleContainerMousedownAndTouchstart",
      value: function value(t) {
        this._mousedown = !0;
      }
    }, {
      key: "_handleContainerMouseupAndTouchend",
      value: function value(t) {
        this._mousedown = !1;
      }
    }, {
      key: "_highlight",
      value: function value(t, e) {
        var i = e.find("img"),
            n = e.text().toLowerCase().indexOf("" + t.toLowerCase()),
            s = n + t.length - 1,
            o = e.text().slice(0, n),
            a = e.text().slice(n, s + 1),
            r = e.text().slice(s + 1);
        e.html("<span>" + o + "<span class='highlight'>" + a + "</span>" + r + "</span>"), i.length && e.prepend(i);
      }
    }, {
      key: "_resetCurrentElement",
      value: function value() {
        this.activeIndex = -1, this.$active.removeClass("active");
      }
    }, {
      key: "_resetAutocomplete",
      value: function value() {
        h(this.container).empty(), this._resetCurrentElement(), this.oldVal = null, this.isOpen = !1, this._mousedown = !1;
      }
    }, {
      key: "selectOption",
      value: function value(t) {
        var e = t.text().trim();
        this.el.value = e, this.$el.trigger("change"), this._resetAutocomplete(), this.close(), "function" == typeof this.options.onAutocomplete && this.options.onAutocomplete.call(this, e);
      }
    }, {
      key: "_renderDropdown",
      value: function value(t, i) {
        var n = this;

        this._resetAutocomplete();

        var e = [];

        for (var s in t) {
          if (t.hasOwnProperty(s) && -1 !== s.toLowerCase().indexOf(i)) {
            if (this.count >= this.options.limit) break;
            var o = {
              data: t[s],
              key: s
            };
            e.push(o), this.count++;
          }
        }

        if (this.options.sortFunction) {
          e.sort(function (t, e) {
            return n.options.sortFunction(t.key.toLowerCase(), e.key.toLowerCase(), i.toLowerCase());
          });
        }

        for (var a = 0; a < e.length; a++) {
          var r = e[a],
              l = h("<li></li>");
          r.data ? l.append('<img src="' + r.data + '" class="right circle"><span>' + r.key + "</span>") : l.append("<span>" + r.key + "</span>"), h(this.container).append(l), this._highlight(i, l);
        }
      }
    }, {
      key: "open",
      value: function value() {
        var t = this.el.value.toLowerCase();
        this._resetAutocomplete(), t.length >= this.options.minLength && (this.isOpen = !0, this._renderDropdown(this.options.data, t)), this.dropdown.isOpen ? this.dropdown.recalculateDimensions() : this.dropdown.open();
      }
    }, {
      key: "close",
      value: function value() {
        this.dropdown.close();
      }
    }, {
      key: "updateData",
      value: function value(t) {
        var e = this.el.value.toLowerCase();
        this.options.data = t, this.isOpen && this._renderDropdown(t, e);
      }
    }], [{
      key: "init",
      value: function value(t, e) {
        return _get(s.__proto__ || Object.getPrototypeOf(s), "init", this).call(this, this, t, e);
      }
    }, {
      key: "getInstance",
      value: function value(t) {
        return (t.jquery ? t[0] : t).M_Autocomplete;
      }
    }, {
      key: "defaults",
      get: function get() {
        return e;
      }
    }]), s;
  }();

  t._keydown = !1, M.Autocomplete = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "autocomplete", "M_Autocomplete");
}(cash), function (d) {
  M.updateTextFields = function () {
    d("input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea").each(function (t, e) {
      var i = d(this);
      0 < t.value.length || d(t).is(":focus") || t.autofocus || null !== i.attr("placeholder") ? i.siblings("label").addClass("active") : t.validity ? i.siblings("label").toggleClass("active", !0 === t.validity.badInput) : i.siblings("label").removeClass("active");
    });
  }, M.validate_field = function (t) {
    var e = null !== t.attr("data-length"),
        i = parseInt(t.attr("data-length")),
        n = t[0].value.length;
    0 !== n || !1 !== t[0].validity.badInput || t.is(":required") ? t.hasClass("validate") && (t.is(":valid") && e && n <= i || t.is(":valid") && !e ? (t.removeClass("invalid"), t.addClass("valid")) : (t.removeClass("valid"), t.addClass("invalid"))) : t.hasClass("validate") && (t.removeClass("valid"), t.removeClass("invalid"));
  }, M.textareaAutoResize = function (t) {
    if (t instanceof Element && (t = d(t)), t.length) {
      var e = d(".hiddendiv").first();
      e.length || (e = d('<div class="hiddendiv common"></div>'), d("body").append(e));
      var i = t.css("font-family"),
          n = t.css("font-size"),
          s = t.css("line-height"),
          o = t.css("padding-top"),
          a = t.css("padding-right"),
          r = t.css("padding-bottom"),
          l = t.css("padding-left");
      n && e.css("font-size", n), i && e.css("font-family", i), s && e.css("line-height", s), o && e.css("padding-top", o), a && e.css("padding-right", a), r && e.css("padding-bottom", r), l && e.css("padding-left", l), t.data("original-height") || t.data("original-height", t.height()), "off" === t.attr("wrap") && e.css("overflow-wrap", "normal").css("white-space", "pre"), e.text(t[0].value + "\n");
      var h = e.html().replace(/\n/g, "<br>");
      e.html(h), 0 < t[0].offsetWidth && 0 < t[0].offsetHeight ? e.css("width", t.width() + "px") : e.css("width", window.innerWidth / 2 + "px"), t.data("original-height") <= e.innerHeight() ? t.css("height", e.innerHeight() + "px") : t[0].value.length < t.data("previous-length") && t.css("height", t.data("original-height") + "px"), t.data("previous-length", t[0].value.length);
    } else console.error("No textarea element found");
  }, d(document).ready(function () {
    var n = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea";
    d(document).on("change", n, function () {
      0 === this.value.length && null === d(this).attr("placeholder") || d(this).siblings("label").addClass("active"), M.validate_field(d(this));
    }), d(document).ready(function () {
      M.updateTextFields();
    }), d(document).on("reset", function (t) {
      var e = d(t.target);
      e.is("form") && (e.find(n).removeClass("valid").removeClass("invalid"), e.find(n).each(function (t) {
        this.value.length && d(this).siblings("label").removeClass("active");
      }), setTimeout(function () {
        e.find("select").each(function () {
          this.M_FormSelect && d(this).trigger("change");
        });
      }, 0));
    }), document.addEventListener("focus", function (t) {
      d(t.target).is(n) && d(t.target).siblings("label, .prefix").addClass("active");
    }, !0), document.addEventListener("blur", function (t) {
      var e = d(t.target);

      if (e.is(n)) {
        var i = ".prefix";
        0 === e[0].value.length && !0 !== e[0].validity.badInput && null === e.attr("placeholder") && (i += ", label"), e.siblings(i).removeClass("active"), M.validate_field(e);
      }
    }, !0);
    d(document).on("keyup", "input[type=radio], input[type=checkbox]", function (t) {
      if (t.which === M.keys.TAB) return d(this).addClass("tabbed"), void d(this).one("blur", function (t) {
        d(this).removeClass("tabbed");
      });
    });
    var t = ".materialize-textarea";
    d(t).each(function () {
      var t = d(this);
      t.data("original-height", t.height()), t.data("previous-length", this.value.length), M.textareaAutoResize(t);
    }), d(document).on("keyup", t, function () {
      M.textareaAutoResize(d(this));
    }), d(document).on("keydown", t, function () {
      M.textareaAutoResize(d(this));
    }), d(document).on("change", '.file-field input[type="file"]', function () {
      for (var t = d(this).closest(".file-field").find("input.file-path"), e = d(this)[0].files, i = [], n = 0; n < e.length; n++) {
        i.push(e[n].name);
      }

      t[0].value = i.join(", "), t.trigger("change");
    });
  });
}(cash), function (s, o) {
  "use strict";

  var e = {
    indicators: !0,
    height: 400,
    duration: 500,
    interval: 6e3
  },
      t = function (t) {
    function n(t, e) {
      _classCallCheck(this, n);

      var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));

      return (i.el.M_Slider = i).options = s.extend({}, n.defaults, e), i.$slider = i.$el.find(".slides"), i.$slides = i.$slider.children("li"), i.activeIndex = i.$slides.filter(function (t) {
        return s(t).hasClass("active");
      }).first().index(), -1 != i.activeIndex && (i.$active = i.$slides.eq(i.activeIndex)), i._setSliderHeight(), i.$slides.find(".caption").each(function (t) {
        i._animateCaptionIn(t, 0);
      }), i.$slides.find("img").each(function (t) {
        var e = "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
        s(t).attr("src") !== e && (s(t).css("background-image", 'url("' + s(t).attr("src") + '")'), s(t).attr("src", e));
      }), i._setupIndicators(), i.$active ? i.$active.css("display", "block") : (i.$slides.first().addClass("active"), o({
        targets: i.$slides.first()[0],
        opacity: 1,
        duration: i.options.duration,
        easing: "easeOutQuad"
      }), i.activeIndex = 0, i.$active = i.$slides.eq(i.activeIndex), i.options.indicators && i.$indicators.eq(i.activeIndex).addClass("active")), i.$active.find("img").each(function (t) {
        o({
          targets: i.$active.find(".caption")[0],
          opacity: 1,
          translateX: 0,
          translateY: 0,
          duration: i.options.duration,
          easing: "easeOutQuad"
        });
      }), i._setupEventHandlers(), i.start(), i;
    }

    return _inherits(n, Component), _createClass(n, [{
      key: "destroy",
      value: function value() {
        this.pause(), this._removeIndicators(), this._removeEventHandlers(), this.el.M_Slider = void 0;
      }
    }, {
      key: "_setupEventHandlers",
      value: function value() {
        var e = this;
        this._handleIntervalBound = this._handleInterval.bind(this), this._handleIndicatorClickBound = this._handleIndicatorClick.bind(this), this.options.indicators && this.$indicators.each(function (t) {
          t.addEventListener("click", e._handleIndicatorClickBound);
        });
      }
    }, {
      key: "_removeEventHandlers",
      value: function value() {
        var e = this;
        this.options.indicators && this.$indicators.each(function (t) {
          t.removeEventListener("click", e._handleIndicatorClickBound);
        });
      }
    }, {
      key: "_handleIndicatorClick",
      value: function value(t) {
        var e = s(t.target).index();
        this.set(e);
      }
    }, {
      key: "_handleInterval",
      value: function value() {
        var t = this.$slider.find(".active").index();
        this.$slides.length === t + 1 ? t = 0 : t += 1, this.set(t);
      }
    }, {
      key: "_animateCaptionIn",
      value: function value(t, e) {
        var i = {
          targets: t,
          opacity: 0,
          duration: e,
          easing: "easeOutQuad"
        };
        s(t).hasClass("center-align") ? i.translateY = -100 : s(t).hasClass("right-align") ? i.translateX = 100 : s(t).hasClass("left-align") && (i.translateX = -100), o(i);
      }
    }, {
      key: "_setSliderHeight",
      value: function value() {
        this.$el.hasClass("fullscreen") || (this.options.indicators ? this.$el.css("height", this.options.height + 40 + "px") : this.$el.css("height", this.options.height + "px"), this.$slider.css("height", this.options.height + "px"));
      }
    }, {
      key: "_setupIndicators",
      value: function value() {
        var n = this;
        this.options.indicators && (this.$indicators = s('<ul class="indicators"></ul>'), this.$slides.each(function (t, e) {
          var i = s('<li class="indicator-item"></li>');
          n.$indicators.append(i[0]);
        }), this.$el.append(this.$indicators[0]), this.$indicators = this.$indicators.children("li.indicator-item"));
      }
    }, {
      key: "_removeIndicators",
      value: function value() {
        this.$el.find("ul.indicators").remove();
      }
    }, {
      key: "set",
      value: function value(t) {
        var e = this;

        if (t >= this.$slides.length ? t = 0 : t < 0 && (t = this.$slides.length - 1), this.activeIndex != t) {
          this.$active = this.$slides.eq(this.activeIndex);
          var i = this.$active.find(".caption");
          this.$active.removeClass("active"), o({
            targets: this.$active[0],
            opacity: 0,
            duration: this.options.duration,
            easing: "easeOutQuad",
            complete: function complete() {
              e.$slides.not(".active").each(function (t) {
                o({
                  targets: t,
                  opacity: 0,
                  translateX: 0,
                  translateY: 0,
                  duration: 0,
                  easing: "easeOutQuad"
                });
              });
            }
          }), this._animateCaptionIn(i[0], this.options.duration), this.options.indicators && (this.$indicators.eq(this.activeIndex).removeClass("active"), this.$indicators.eq(t).addClass("active")), o({
            targets: this.$slides.eq(t)[0],
            opacity: 1,
            duration: this.options.duration,
            easing: "easeOutQuad"
          }), o({
            targets: this.$slides.eq(t).find(".caption")[0],
            opacity: 1,
            translateX: 0,
            translateY: 0,
            duration: this.options.duration,
            delay: this.options.duration,
            easing: "easeOutQuad"
          }), this.$slides.eq(t).addClass("active"), this.activeIndex = t, this.start();
        }
      }
    }, {
      key: "pause",
      value: function value() {
        clearInterval(this.interval);
      }
    }, {
      key: "start",
      value: function value() {
        clearInterval(this.interval), this.interval = setInterval(this._handleIntervalBound, this.options.duration + this.options.interval);
      }
    }, {
      key: "next",
      value: function value() {
        var t = this.activeIndex + 1;
        t >= this.$slides.length ? t = 0 : t < 0 && (t = this.$slides.length - 1), this.set(t);
      }
    }, {
      key: "prev",
      value: function value() {
        var t = this.activeIndex - 1;
        t >= this.$slides.length ? t = 0 : t < 0 && (t = this.$slides.length - 1), this.set(t);
      }
    }], [{
      key: "init",
      value: function value(t, e) {
        return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e);
      }
    }, {
      key: "getInstance",
      value: function value(t) {
        return (t.jquery ? t[0] : t).M_Slider;
      }
    }, {
      key: "defaults",
      get: function get() {
        return e;
      }
    }]), n;
  }();

  M.Slider = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "slider", "M_Slider");
}(cash, M.anime), function (n, s) {
  n(document).on("click", ".card", function (t) {
    if (n(this).children(".card-reveal").length) {
      var i = n(t.target).closest(".card");
      void 0 === i.data("initialOverflow") && i.data("initialOverflow", void 0 === i.css("overflow") ? "" : i.css("overflow"));
      var e = n(this).find(".card-reveal");
      n(t.target).is(n(".card-reveal .card-title")) || n(t.target).is(n(".card-reveal .card-title i")) ? s({
        targets: e[0],
        translateY: 0,
        duration: 225,
        easing: "easeInOutQuad",
        complete: function complete(t) {
          var e = t.animatables[0].target;
          n(e).css({
            display: "none"
          }), i.css("overflow", i.data("initialOverflow"));
        }
      }) : (n(t.target).is(n(".card .activator")) || n(t.target).is(n(".card .activator i"))) && (i.css("overflow", "hidden"), e.css({
        display: "block"
      }), s({
        targets: e[0],
        translateY: "-100%",
        duration: 300,
        easing: "easeInOutQuad"
      }));
    }
  });
}(cash, M.anime), function (h) {
  "use strict";

  var e = {
    data: [],
    placeholder: "",
    secondaryPlaceholder: "",
    autocompleteOptions: {},
    limit: 1 / 0,
    onChipAdd: null,
    onChipSelect: null,
    onChipDelete: null
  },
      t = function (t) {
    function l(t, e) {
      _classCallCheck(this, l);

      var i = _possibleConstructorReturn(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this, l, t, e));

      return (i.el.M_Chips = i).options = h.extend({}, l.defaults, e), i.$el.addClass("chips input-field"), i.chipsData = [], i.$chips = h(), i._setupInput(), i.hasAutocomplete = 0 < Object.keys(i.options.autocompleteOptions).length, i.$input.attr("id") || i.$input.attr("id", M.guid()), i.options.data.length && (i.chipsData = i.options.data, i._renderChips(i.chipsData)), i.hasAutocomplete && i._setupAutocomplete(), i._setPlaceholder(), i._setupLabel(), i._setupEventHandlers(), i;
    }

    return _inherits(l, Component), _createClass(l, [{
      key: "getData",
      value: function value() {
        return this.chipsData;
      }
    }, {
      key: "destroy",
      value: function value() {
        this._removeEventHandlers(), this.$chips.remove(), this.el.M_Chips = void 0;
      }
    }, {
      key: "_setupEventHandlers",
      value: function value() {
        this._handleChipClickBound = this._handleChipClick.bind(this), this._handleInputKeydownBound = this._handleInputKeydown.bind(this), this._handleInputFocusBound = this._handleInputFocus.bind(this), this._handleInputBlurBound = this._handleInputBlur.bind(this), this.el.addEventListener("click", this._handleChipClickBound), document.addEventListener("keydown", l._handleChipsKeydown), document.addEventListener("keyup", l._handleChipsKeyup), this.el.addEventListener("blur", l._handleChipsBlur, !0), this.$input[0].addEventListener("focus", this._handleInputFocusBound), this.$input[0].addEventListener("blur", this._handleInputBlurBound), this.$input[0].addEventListener("keydown", this._handleInputKeydownBound);
      }
    }, {
      key: "_removeEventHandlers",
      value: function value() {
        this.el.removeEventListener("click", this._handleChipClickBound), document.removeEventListener("keydown", l._handleChipsKeydown), document.removeEventListener("keyup", l._handleChipsKeyup), this.el.removeEventListener("blur", l._handleChipsBlur, !0), this.$input[0].removeEventListener("focus", this._handleInputFocusBound), this.$input[0].removeEventListener("blur", this._handleInputBlurBound), this.$input[0].removeEventListener("keydown", this._handleInputKeydownBound);
      }
    }, {
      key: "_handleChipClick",
      value: function value(t) {
        var e = h(t.target).closest(".chip"),
            i = h(t.target).is(".close");

        if (e.length) {
          var n = e.index();
          i ? (this.deleteChip(n), this.$input[0].focus()) : this.selectChip(n);
        } else this.$input[0].focus();
      }
    }, {
      key: "_handleInputFocus",
      value: function value() {
        this.$el.addClass("focus");
      }
    }, {
      key: "_handleInputBlur",
      value: function value() {
        this.$el.removeClass("focus");
      }
    }, {
      key: "_handleInputKeydown",
      value: function value(t) {
        if (l._keydown = !0, 13 === t.keyCode) {
          if (this.hasAutocomplete && this.autocomplete && this.autocomplete.isOpen) return;
          t.preventDefault(), this.addChip({
            tag: this.$input[0].value
          }), this.$input[0].value = "";
        } else 8 !== t.keyCode && 37 !== t.keyCode || "" !== this.$input[0].value || !this.chipsData.length || (t.preventDefault(), this.selectChip(this.chipsData.length - 1));
      }
    }, {
      key: "_renderChip",
      value: function value(t) {
        if (t.tag) {
          var e = document.createElement("div"),
              i = document.createElement("i");

          if (e.classList.add("chip"), e.textContent = t.tag, e.setAttribute("tabindex", 0), h(i).addClass("material-icons close"), i.textContent = "close", t.image) {
            var n = document.createElement("img");
            n.setAttribute("src", t.image), e.insertBefore(n, e.firstChild);
          }

          return e.appendChild(i), e;
        }
      }
    }, {
      key: "_renderChips",
      value: function value() {
        this.$chips.remove();

        for (var t = 0; t < this.chipsData.length; t++) {
          var e = this._renderChip(this.chipsData[t]);

          this.$el.append(e), this.$chips.add(e);
        }

        this.$el.append(this.$input[0]);
      }
    }, {
      key: "_setupAutocomplete",
      value: function value() {
        var e = this;
        this.options.autocompleteOptions.onAutocomplete = function (t) {
          e.addChip({
            tag: t
          }), e.$input[0].value = "", e.$input[0].focus();
        }, this.autocomplete = M.Autocomplete.init(this.$input[0], this.options.autocompleteOptions);
      }
    }, {
      key: "_setupInput",
      value: function value() {
        this.$input = this.$el.find("input"), this.$input.length || (this.$input = h("<input></input>"), this.$el.append(this.$input)), this.$input.addClass("input");
      }
    }, {
      key: "_setupLabel",
      value: function value() {
        this.$label = this.$el.find("label"), this.$label.length && this.$label.setAttribute("for", this.$input.attr("id"));
      }
    }, {
      key: "_setPlaceholder",
      value: function value() {
        void 0 !== this.chipsData && !this.chipsData.length && this.options.placeholder ? h(this.$input).prop("placeholder", this.options.placeholder) : (void 0 === this.chipsData || this.chipsData.length) && this.options.secondaryPlaceholder && h(this.$input).prop("placeholder", this.options.secondaryPlaceholder);
      }
    }, {
      key: "_isValid",
      value: function value(t) {
        if (t.hasOwnProperty("tag") && "" !== t.tag) {
          for (var e = !1, i = 0; i < this.chipsData.length; i++) {
            if (this.chipsData[i].tag === t.tag) {
              e = !0;
              break;
            }
          }

          return !e;
        }

        return !1;
      }
    }, {
      key: "addChip",
      value: function value(t) {
        if (this._isValid(t) && !(this.chipsData.length >= this.options.limit)) {
          var e = this._renderChip(t);

          this.$chips.add(e), this.chipsData.push(t), h(this.$input).before(e), this._setPlaceholder(), "function" == typeof this.options.onChipAdd && this.options.onChipAdd.call(this, this.$el, e);
        }
      }
    }, {
      key: "deleteChip",
      value: function value(t) {
        var e = this.$chips.eq(t);
        this.$chips.eq(t).remove(), this.$chips = this.$chips.filter(function (t) {
          return 0 <= h(t).index();
        }), this.chipsData.splice(t, 1), this._setPlaceholder(), "function" == typeof this.options.onChipDelete && this.options.onChipDelete.call(this, this.$el, e[0]);
      }
    }, {
      key: "selectChip",
      value: function value(t) {
        var e = this.$chips.eq(t);
        (this._selectedChip = e)[0].focus(), "function" == typeof this.options.onChipSelect && this.options.onChipSelect.call(this, this.$el, e[0]);
      }
    }], [{
      key: "init",
      value: function value(t, e) {
        return _get(l.__proto__ || Object.getPrototypeOf(l), "init", this).call(this, this, t, e);
      }
    }, {
      key: "getInstance",
      value: function value(t) {
        return (t.jquery ? t[0] : t).M_Chips;
      }
    }, {
      key: "_handleChipsKeydown",
      value: function value(t) {
        l._keydown = !0;
        var e = h(t.target).closest(".chips"),
            i = t.target && e.length;

        if (!h(t.target).is("input, textarea") && i) {
          var n = e[0].M_Chips;

          if (8 === t.keyCode || 46 === t.keyCode) {
            t.preventDefault();
            var s = n.chipsData.length;

            if (n._selectedChip) {
              var o = n._selectedChip.index();

              n.deleteChip(o), n._selectedChip = null, s = Math.max(o - 1, 0);
            }

            n.chipsData.length && n.selectChip(s);
          } else if (37 === t.keyCode) {
            if (n._selectedChip) {
              var a = n._selectedChip.index() - 1;
              if (a < 0) return;
              n.selectChip(a);
            }
          } else if (39 === t.keyCode && n._selectedChip) {
            var r = n._selectedChip.index() + 1;
            r >= n.chipsData.length ? n.$input[0].focus() : n.selectChip(r);
          }
        }
      }
    }, {
      key: "_handleChipsKeyup",
      value: function value(t) {
        l._keydown = !1;
      }
    }, {
      key: "_handleChipsBlur",
      value: function value(t) {
        l._keydown || (h(t.target).closest(".chips")[0].M_Chips._selectedChip = null);
      }
    }, {
      key: "defaults",
      get: function get() {
        return e;
      }
    }]), l;
  }();

  t._keydown = !1, M.Chips = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "chips", "M_Chips"), h(document).ready(function () {
    h(document.body).on("click", ".chip .close", function () {
      var t = h(this).closest(".chips");
      t.length && t[0].M_Chips || h(this).closest(".chip").remove();
    });
  });
}(cash), function (s) {
  "use strict";

  var e = {
    top: 0,
    bottom: 1 / 0,
    offset: 0,
    onPositionChange: null
  },
      t = function (t) {
    function n(t, e) {
      _classCallCheck(this, n);

      var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));

      return (i.el.M_Pushpin = i).options = s.extend({}, n.defaults, e), i.originalOffset = i.el.offsetTop, n._pushpins.push(i), i._setupEventHandlers(), i._updatePosition(), i;
    }

    return _inherits(n, Component), _createClass(n, [{
      key: "destroy",
      value: function value() {
        this.el.style.top = null, this._removePinClasses(), this._removeEventHandlers();

        var t = n._pushpins.indexOf(this);

        n._pushpins.splice(t, 1);
      }
    }, {
      key: "_setupEventHandlers",
      value: function value() {
        document.addEventListener("scroll", n._updateElements);
      }
    }, {
      key: "_removeEventHandlers",
      value: function value() {
        document.removeEventListener("scroll", n._updateElements);
      }
    }, {
      key: "_updatePosition",
      value: function value() {
        var t = M.getDocumentScrollTop() + this.options.offset;
        this.options.top <= t && this.options.bottom >= t && !this.el.classList.contains("pinned") && (this._removePinClasses(), this.el.style.top = this.options.offset + "px", this.el.classList.add("pinned"), "function" == typeof this.options.onPositionChange && this.options.onPositionChange.call(this, "pinned")), t < this.options.top && !this.el.classList.contains("pin-top") && (this._removePinClasses(), this.el.style.top = 0, this.el.classList.add("pin-top"), "function" == typeof this.options.onPositionChange && this.options.onPositionChange.call(this, "pin-top")), t > this.options.bottom && !this.el.classList.contains("pin-bottom") && (this._removePinClasses(), this.el.classList.add("pin-bottom"), this.el.style.top = this.options.bottom - this.originalOffset + "px", "function" == typeof this.options.onPositionChange && this.options.onPositionChange.call(this, "pin-bottom"));
      }
    }, {
      key: "_removePinClasses",
      value: function value() {
        this.el.classList.remove("pin-top"), this.el.classList.remove("pinned"), this.el.classList.remove("pin-bottom");
      }
    }], [{
      key: "init",
      value: function value(t, e) {
        return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e);
      }
    }, {
      key: "getInstance",
      value: function value(t) {
        return (t.jquery ? t[0] : t).M_Pushpin;
      }
    }, {
      key: "_updateElements",
      value: function value() {
        for (var t in n._pushpins) {
          n._pushpins[t]._updatePosition();
        }
      }
    }, {
      key: "defaults",
      get: function get() {
        return e;
      }
    }]), n;
  }();

  t._pushpins = [], M.Pushpin = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "pushpin", "M_Pushpin");
}(cash), function (r, s) {
  "use strict";

  var e = {
    direction: "top",
    hoverEnabled: !0,
    toolbarEnabled: !1
  };
  r.fn.reverse = [].reverse;

  var t = function (t) {
    function n(t, e) {
      _classCallCheck(this, n);

      var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));

      return (i.el.M_FloatingActionButton = i).options = r.extend({}, n.defaults, e), i.isOpen = !1, i.$anchor = i.$el.children("a").first(), i.$menu = i.$el.children("ul").first(), i.$floatingBtns = i.$el.find("ul .btn-floating"), i.$floatingBtnsReverse = i.$el.find("ul .btn-floating").reverse(), i.offsetY = 0, i.offsetX = 0, i.$el.addClass("direction-" + i.options.direction), "top" === i.options.direction ? i.offsetY = 40 : "right" === i.options.direction ? i.offsetX = -40 : "bottom" === i.options.direction ? i.offsetY = -40 : i.offsetX = 40, i._setupEventHandlers(), i;
    }

    return _inherits(n, Component), _createClass(n, [{
      key: "destroy",
      value: function value() {
        this._removeEventHandlers(), this.el.M_FloatingActionButton = void 0;
      }
    }, {
      key: "_setupEventHandlers",
      value: function value() {
        this._handleFABClickBound = this._handleFABClick.bind(this), this._handleOpenBound = this.open.bind(this), this._handleCloseBound = this.close.bind(this), this.options.hoverEnabled && !this.options.toolbarEnabled ? (this.el.addEventListener("mouseenter", this._handleOpenBound), this.el.addEventListener("mouseleave", this._handleCloseBound)) : this.el.addEventListener("click", this._handleFABClickBound);
      }
    }, {
      key: "_removeEventHandlers",
      value: function value() {
        this.options.hoverEnabled && !this.options.toolbarEnabled ? (this.el.removeEventListener("mouseenter", this._handleOpenBound), this.el.removeEventListener("mouseleave", this._handleCloseBound)) : this.el.removeEventListener("click", this._handleFABClickBound);
      }
    }, {
      key: "_handleFABClick",
      value: function value() {
        this.isOpen ? this.close() : this.open();
      }
    }, {
      key: "_handleDocumentClick",
      value: function value(t) {
        r(t.target).closest(this.$menu).length || this.close();
      }
    }, {
      key: "open",
      value: function value() {
        this.isOpen || (this.options.toolbarEnabled ? this._animateInToolbar() : this._animateInFAB(), this.isOpen = !0);
      }
    }, {
      key: "close",
      value: function value() {
        this.isOpen && (this.options.toolbarEnabled ? (window.removeEventListener("scroll", this._handleCloseBound, !0), document.body.removeEventListener("click", this._handleDocumentClickBound, !0), this._animateOutToolbar()) : this._animateOutFAB(), this.isOpen = !1);
      }
    }, {
      key: "_animateInFAB",
      value: function value() {
        var e = this;
        this.$el.addClass("active");
        var i = 0;
        this.$floatingBtnsReverse.each(function (t) {
          s({
            targets: t,
            opacity: 1,
            scale: [.4, 1],
            translateY: [e.offsetY, 0],
            translateX: [e.offsetX, 0],
            duration: 275,
            delay: i,
            easing: "easeInOutQuad"
          }), i += 40;
        });
      }
    }, {
      key: "_animateOutFAB",
      value: function value() {
        var e = this;
        this.$floatingBtnsReverse.each(function (t) {
          s.remove(t), s({
            targets: t,
            opacity: 0,
            scale: .4,
            translateY: e.offsetY,
            translateX: e.offsetX,
            duration: 175,
            easing: "easeOutQuad",
            complete: function complete() {
              e.$el.removeClass("active");
            }
          });
        });
      }
    }, {
      key: "_animateInToolbar",
      value: function value() {
        var t,
            e = this,
            i = window.innerWidth,
            n = window.innerHeight,
            s = this.el.getBoundingClientRect(),
            o = r('<div class="fab-backdrop"></div>'),
            a = this.$anchor.css("background-color");
        this.$anchor.append(o), this.offsetX = s.left - i / 2 + s.width / 2, this.offsetY = n - s.bottom, t = i / o[0].clientWidth, this.btnBottom = s.bottom, this.btnLeft = s.left, this.btnWidth = s.width, this.$el.addClass("active"), this.$el.css({
          "text-align": "center",
          width: "100%",
          bottom: 0,
          left: 0,
          transform: "translateX(" + this.offsetX + "px)",
          transition: "none"
        }), this.$anchor.css({
          transform: "translateY(" + -this.offsetY + "px)",
          transition: "none"
        }), o.css({
          "background-color": a
        }), setTimeout(function () {
          e.$el.css({
            transform: "",
            transition: "transform .2s cubic-bezier(0.550, 0.085, 0.680, 0.530), background-color 0s linear .2s"
          }), e.$anchor.css({
            overflow: "visible",
            transform: "",
            transition: "transform .2s"
          }), setTimeout(function () {
            e.$el.css({
              overflow: "hidden",
              "background-color": a
            }), o.css({
              transform: "scale(" + t + ")",
              transition: "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"
            }), e.$menu.children("li").children("a").css({
              opacity: 1
            }), e._handleDocumentClickBound = e._handleDocumentClick.bind(e), window.addEventListener("scroll", e._handleCloseBound, !0), document.body.addEventListener("click", e._handleDocumentClickBound, !0);
          }, 100);
        }, 0);
      }
    }, {
      key: "_animateOutToolbar",
      value: function value() {
        var t = this,
            e = window.innerWidth,
            i = window.innerHeight,
            n = this.$el.find(".fab-backdrop"),
            s = this.$anchor.css("background-color");
        this.offsetX = this.btnLeft - e / 2 + this.btnWidth / 2, this.offsetY = i - this.btnBottom, this.$el.removeClass("active"), this.$el.css({
          "background-color": "transparent",
          transition: "none"
        }), this.$anchor.css({
          transition: "none"
        }), n.css({
          transform: "scale(0)",
          "background-color": s
        }), this.$menu.children("li").children("a").css({
          opacity: ""
        }), setTimeout(function () {
          n.remove(), t.$el.css({
            "text-align": "",
            width: "",
            bottom: "",
            left: "",
            overflow: "",
            "background-color": "",
            transform: "translate3d(" + -t.offsetX + "px,0,0)"
          }), t.$anchor.css({
            overflow: "",
            transform: "translate3d(0," + t.offsetY + "px,0)"
          }), setTimeout(function () {
            t.$el.css({
              transform: "translate3d(0,0,0)",
              transition: "transform .2s"
            }), t.$anchor.css({
              transform: "translate3d(0,0,0)",
              transition: "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"
            });
          }, 20);
        }, 200);
      }
    }], [{
      key: "init",
      value: function value(t, e) {
        return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e);
      }
    }, {
      key: "getInstance",
      value: function value(t) {
        return (t.jquery ? t[0] : t).M_FloatingActionButton;
      }
    }, {
      key: "defaults",
      get: function get() {
        return e;
      }
    }]), n;
  }();

  M.FloatingActionButton = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "floatingActionButton", "M_FloatingActionButton");
}(cash, M.anime), function (g) {
  "use strict";

  var e = {
    autoClose: !1,
    format: "mmm dd, yyyy",
    parse: null,
    defaultDate: null,
    setDefaultDate: !1,
    disableWeekends: !1,
    disableDayFn: null,
    firstDay: 0,
    minDate: null,
    maxDate: null,
    yearRange: 10,
    minYear: 0,
    maxYear: 9999,
    minMonth: void 0,
    maxMonth: void 0,
    startRange: null,
    endRange: null,
    isRTL: !1,
    showMonthAfterYear: !1,
    showDaysInNextAndPreviousMonths: !1,
    container: null,
    showClearBtn: !1,
    i18n: {
      cancel: "Cancel",
      clear: "Clear",
      done: "Ok",
      previousMonth: "‹",
      nextMonth: "›",
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      weekdaysAbbrev: ["S", "M", "T", "W", "T", "F", "S"]
    },
    events: [],
    onSelect: null,
    onOpen: null,
    onClose: null,
    onDraw: null
  },
      t = function (t) {
    function B(t, e) {
      _classCallCheck(this, B);

      var i = _possibleConstructorReturn(this, (B.__proto__ || Object.getPrototypeOf(B)).call(this, B, t, e));

      (i.el.M_Datepicker = i).options = g.extend({}, B.defaults, e), e && e.hasOwnProperty("i18n") && "object" == _typeof(e.i18n) && (i.options.i18n = g.extend({}, B.defaults.i18n, e.i18n)), i.options.minDate && i.options.minDate.setHours(0, 0, 0, 0), i.options.maxDate && i.options.maxDate.setHours(0, 0, 0, 0), i.id = M.guid(), i._setupVariables(), i._insertHTMLIntoDOM(), i._setupModal(), i._setupEventHandlers(), i.options.defaultDate || (i.options.defaultDate = new Date(Date.parse(i.el.value)));
      var n = i.options.defaultDate;
      return B._isDate(n) ? i.options.setDefaultDate ? (i.setDate(n, !0), i.setInputValue()) : i.gotoDate(n) : i.gotoDate(new Date()), i.isOpen = !1, i;
    }

    return _inherits(B, Component), _createClass(B, [{
      key: "destroy",
      value: function value() {
        this._removeEventHandlers(), this.modal.destroy(), g(this.modalEl).remove(), this.destroySelects(), this.el.M_Datepicker = void 0;
      }
    }, {
      key: "destroySelects",
      value: function value() {
        var t = this.calendarEl.querySelector(".orig-select-year");
        t && M.FormSelect.getInstance(t).destroy();
        var e = this.calendarEl.querySelector(".orig-select-month");
        e && M.FormSelect.getInstance(e).destroy();
      }
    }, {
      key: "_insertHTMLIntoDOM",
      value: function value() {
        this.options.showClearBtn && (g(this.clearBtn).css({
          visibility: ""
        }), this.clearBtn.innerHTML = this.options.i18n.clear), this.doneBtn.innerHTML = this.options.i18n.done, this.cancelBtn.innerHTML = this.options.i18n.cancel, this.options.container ? this.$modalEl.appendTo(this.options.container) : this.$modalEl.insertBefore(this.el);
      }
    }, {
      key: "_setupModal",
      value: function value() {
        var t = this;
        this.modalEl.id = "modal-" + this.id, this.modal = M.Modal.init(this.modalEl, {
          onCloseEnd: function onCloseEnd() {
            t.isOpen = !1;
          }
        });
      }
    }, {
      key: "toString",
      value: function value(t) {
        var e = this;
        return t = t || this.options.format, B._isDate(this.date) ? t.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g).map(function (t) {
          return e.formats[t] ? e.formats[t]() : t;
        }).join("") : "";
      }
    }, {
      key: "setDate",
      value: function value(t, e) {
        if (!t) return this.date = null, this._renderDateDisplay(), this.draw();

        if ("string" == typeof t && (t = new Date(Date.parse(t))), B._isDate(t)) {
          var i = this.options.minDate,
              n = this.options.maxDate;
          B._isDate(i) && t < i ? t = i : B._isDate(n) && n < t && (t = n), this.date = new Date(t.getTime()), this._renderDateDisplay(), B._setToStartOfDay(this.date), this.gotoDate(this.date), e || "function" != typeof this.options.onSelect || this.options.onSelect.call(this, this.date);
        }
      }
    }, {
      key: "setInputValue",
      value: function value() {
        this.el.value = this.toString(), this.$el.trigger("change", {
          firedBy: this
        });
      }
    }, {
      key: "_renderDateDisplay",
      value: function value() {
        var t = B._isDate(this.date) ? this.date : new Date(),
            e = this.options.i18n,
            i = e.weekdaysShort[t.getDay()],
            n = e.monthsShort[t.getMonth()],
            s = t.getDate();
        this.yearTextEl.innerHTML = t.getFullYear(), this.dateTextEl.innerHTML = i + ", " + n + " " + s;
      }
    }, {
      key: "gotoDate",
      value: function value(t) {
        var e = !0;

        if (B._isDate(t)) {
          if (this.calendars) {
            var i = new Date(this.calendars[0].year, this.calendars[0].month, 1),
                n = new Date(this.calendars[this.calendars.length - 1].year, this.calendars[this.calendars.length - 1].month, 1),
                s = t.getTime();
            n.setMonth(n.getMonth() + 1), n.setDate(n.getDate() - 1), e = s < i.getTime() || n.getTime() < s;
          }

          e && (this.calendars = [{
            month: t.getMonth(),
            year: t.getFullYear()
          }]), this.adjustCalendars();
        }
      }
    }, {
      key: "adjustCalendars",
      value: function value() {
        this.calendars[0] = this.adjustCalendar(this.calendars[0]), this.draw();
      }
    }, {
      key: "adjustCalendar",
      value: function value(t) {
        return t.month < 0 && (t.year -= Math.ceil(Math.abs(t.month) / 12), t.month += 12), 11 < t.month && (t.year += Math.floor(Math.abs(t.month) / 12), t.month -= 12), t;
      }
    }, {
      key: "nextMonth",
      value: function value() {
        this.calendars[0].month++, this.adjustCalendars();
      }
    }, {
      key: "prevMonth",
      value: function value() {
        this.calendars[0].month--, this.adjustCalendars();
      }
    }, {
      key: "render",
      value: function value(t, e, i) {
        var n = this.options,
            s = new Date(),
            o = B._getDaysInMonth(t, e),
            a = new Date(t, e, 1).getDay(),
            r = [],
            l = [];

        B._setToStartOfDay(s), 0 < n.firstDay && (a -= n.firstDay) < 0 && (a += 7);

        for (var h = 0 === e ? 11 : e - 1, d = 11 === e ? 0 : e + 1, u = 0 === e ? t - 1 : t, c = 11 === e ? t + 1 : t, p = B._getDaysInMonth(u, h), v = o + a, f = v; 7 < f;) {
          f -= 7;
        }

        v += 7 - f;

        for (var m = !1, g = 0, _ = 0; g < v; g++) {
          var y = new Date(t, e, g - a + 1),
              k = !!B._isDate(this.date) && B._compareDates(y, this.date),
              b = B._compareDates(y, s),
              w = -1 !== n.events.indexOf(y.toDateString()),
              C = g < a || o + a <= g,
              E = g - a + 1,
              M = e,
              O = t,
              x = n.startRange && B._compareDates(n.startRange, y),
              L = n.endRange && B._compareDates(n.endRange, y),
              T = n.startRange && n.endRange && n.startRange < y && y < n.endRange;

          C && (g < a ? (E = p + E, M = h, O = u) : (E -= o, M = d, O = c));
          var $ = {
            day: E,
            month: M,
            year: O,
            hasEvent: w,
            isSelected: k,
            isToday: b,
            isDisabled: n.minDate && y < n.minDate || n.maxDate && y > n.maxDate || n.disableWeekends && B._isWeekend(y) || n.disableDayFn && n.disableDayFn(y),
            isEmpty: C,
            isStartRange: x,
            isEndRange: L,
            isInRange: T,
            showDaysInNextAndPreviousMonths: n.showDaysInNextAndPreviousMonths
          };
          l.push(this.renderDay($)), 7 == ++_ && (r.push(this.renderRow(l, n.isRTL, m)), _ = 0, m = !(l = []));
        }

        return this.renderTable(n, r, i);
      }
    }, {
      key: "renderDay",
      value: function value(t) {
        var e = [],
            i = "false";

        if (t.isEmpty) {
          if (!t.showDaysInNextAndPreviousMonths) return '<td class="is-empty"></td>';
          e.push("is-outside-current-month"), e.push("is-selection-disabled");
        }

        return t.isDisabled && e.push("is-disabled"), t.isToday && e.push("is-today"), t.isSelected && (e.push("is-selected"), i = "true"), t.hasEvent && e.push("has-event"), t.isInRange && e.push("is-inrange"), t.isStartRange && e.push("is-startrange"), t.isEndRange && e.push("is-endrange"), '<td data-day="' + t.day + '" class="' + e.join(" ") + '" aria-selected="' + i + '"><button class="datepicker-day-button" type="button" data-year="' + t.year + '" data-month="' + t.month + '" data-day="' + t.day + '">' + t.day + "</button></td>";
      }
    }, {
      key: "renderRow",
      value: function value(t, e, i) {
        return '<tr class="datepicker-row' + (i ? " is-selected" : "") + '">' + (e ? t.reverse() : t).join("") + "</tr>";
      }
    }, {
      key: "renderTable",
      value: function value(t, e, i) {
        return '<div class="datepicker-table-wrapper"><table cellpadding="0" cellspacing="0" class="datepicker-table" role="grid" aria-labelledby="' + i + '">' + this.renderHead(t) + this.renderBody(e) + "</table></div>";
      }
    }, {
      key: "renderHead",
      value: function value(t) {
        var e = void 0,
            i = [];

        for (e = 0; e < 7; e++) {
          i.push('<th scope="col"><abbr title="' + this.renderDayName(t, e) + '">' + this.renderDayName(t, e, !0) + "</abbr></th>");
        }

        return "<thead><tr>" + (t.isRTL ? i.reverse() : i).join("") + "</tr></thead>";
      }
    }, {
      key: "renderBody",
      value: function value(t) {
        return "<tbody>" + t.join("") + "</tbody>";
      }
    }, {
      key: "renderTitle",
      value: function value(t, e, i, n, s, o) {
        var a,
            r,
            l = void 0,
            h = void 0,
            d = void 0,
            u = this.options,
            c = i === u.minYear,
            p = i === u.maxYear,
            v = '<div id="' + o + '" class="datepicker-controls" role="heading" aria-live="assertive">',
            f = !0,
            m = !0;

        for (d = [], l = 0; l < 12; l++) {
          d.push('<option value="' + (i === s ? l - e : 12 + l - e) + '"' + (l === n ? ' selected="selected"' : "") + (c && l < u.minMonth || p && l > u.maxMonth ? 'disabled="disabled"' : "") + ">" + u.i18n.months[l] + "</option>");
        }

        for (a = '<select class="datepicker-select orig-select-month" tabindex="-1">' + d.join("") + "</select>", g.isArray(u.yearRange) ? (l = u.yearRange[0], h = u.yearRange[1] + 1) : (l = i - u.yearRange, h = 1 + i + u.yearRange), d = []; l < h && l <= u.maxYear; l++) {
          l >= u.minYear && d.push('<option value="' + l + '" ' + (l === i ? 'selected="selected"' : "") + ">" + l + "</option>");
        }

        r = '<select class="datepicker-select orig-select-year" tabindex="-1">' + d.join("") + "</select>";
        v += '<button class="month-prev' + (f ? "" : " is-disabled") + '" type="button"><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/><path d="M0-.5h24v24H0z" fill="none"/></svg></button>', v += '<div class="selects-container">', u.showMonthAfterYear ? v += r + a : v += a + r, v += "</div>", c && (0 === n || u.minMonth >= n) && (f = !1), p && (11 === n || u.maxMonth <= n) && (m = !1);
        return (v += '<button class="month-next' + (m ? "" : " is-disabled") + '" type="button"><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/><path d="M0-.25h24v24H0z" fill="none"/></svg></button>') + "</div>";
      }
    }, {
      key: "draw",
      value: function value(t) {
        if (this.isOpen || t) {
          var e,
              i = this.options,
              n = i.minYear,
              s = i.maxYear,
              o = i.minMonth,
              a = i.maxMonth,
              r = "";
          this._y <= n && (this._y = n, !isNaN(o) && this._m < o && (this._m = o)), this._y >= s && (this._y = s, !isNaN(a) && this._m > a && (this._m = a)), e = "datepicker-title-" + Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 2);

          for (var l = 0; l < 1; l++) {
            this._renderDateDisplay(), r += this.renderTitle(this, l, this.calendars[l].year, this.calendars[l].month, this.calendars[0].year, e) + this.render(this.calendars[l].year, this.calendars[l].month, e);
          }

          this.destroySelects(), this.calendarEl.innerHTML = r;
          var h = this.calendarEl.querySelector(".orig-select-year"),
              d = this.calendarEl.querySelector(".orig-select-month");
          M.FormSelect.init(h, {
            classes: "select-year",
            dropdownOptions: {
              container: document.body,
              constrainWidth: !1
            }
          }), M.FormSelect.init(d, {
            classes: "select-month",
            dropdownOptions: {
              container: document.body,
              constrainWidth: !1
            }
          }), h.addEventListener("change", this._handleYearChange.bind(this)), d.addEventListener("change", this._handleMonthChange.bind(this)), "function" == typeof this.options.onDraw && this.options.onDraw(this);
        }
      }
    }, {
      key: "_setupEventHandlers",
      value: function value() {
        this._handleInputKeydownBound = this._handleInputKeydown.bind(this), this._handleInputClickBound = this._handleInputClick.bind(this), this._handleInputChangeBound = this._handleInputChange.bind(this), this._handleCalendarClickBound = this._handleCalendarClick.bind(this), this._finishSelectionBound = this._finishSelection.bind(this), this._handleMonthChange = this._handleMonthChange.bind(this), this._closeBound = this.close.bind(this), this.el.addEventListener("click", this._handleInputClickBound), this.el.addEventListener("keydown", this._handleInputKeydownBound), this.el.addEventListener("change", this._handleInputChangeBound), this.calendarEl.addEventListener("click", this._handleCalendarClickBound), this.doneBtn.addEventListener("click", this._finishSelectionBound), this.cancelBtn.addEventListener("click", this._closeBound), this.options.showClearBtn && (this._handleClearClickBound = this._handleClearClick.bind(this), this.clearBtn.addEventListener("click", this._handleClearClickBound));
      }
    }, {
      key: "_setupVariables",
      value: function value() {
        var e = this;
        this.$modalEl = g(B._template), this.modalEl = this.$modalEl[0], this.calendarEl = this.modalEl.querySelector(".datepicker-calendar"), this.yearTextEl = this.modalEl.querySelector(".year-text"), this.dateTextEl = this.modalEl.querySelector(".date-text"), this.options.showClearBtn && (this.clearBtn = this.modalEl.querySelector(".datepicker-clear")), this.doneBtn = this.modalEl.querySelector(".datepicker-done"), this.cancelBtn = this.modalEl.querySelector(".datepicker-cancel"), this.formats = {
          d: function d() {
            return e.date.getDate();
          },
          dd: function dd() {
            var t = e.date.getDate();
            return (t < 10 ? "0" : "") + t;
          },
          ddd: function ddd() {
            return e.options.i18n.weekdaysShort[e.date.getDay()];
          },
          dddd: function dddd() {
            return e.options.i18n.weekdays[e.date.getDay()];
          },
          m: function m() {
            return e.date.getMonth() + 1;
          },
          mm: function mm() {
            var t = e.date.getMonth() + 1;
            return (t < 10 ? "0" : "") + t;
          },
          mmm: function mmm() {
            return e.options.i18n.monthsShort[e.date.getMonth()];
          },
          mmmm: function mmmm() {
            return e.options.i18n.months[e.date.getMonth()];
          },
          yy: function yy() {
            return ("" + e.date.getFullYear()).slice(2);
          },
          yyyy: function yyyy() {
            return e.date.getFullYear();
          }
        };
      }
    }, {
      key: "_removeEventHandlers",
      value: function value() {
        this.el.removeEventListener("click", this._handleInputClickBound), this.el.removeEventListener("keydown", this._handleInputKeydownBound), this.el.removeEventListener("change", this._handleInputChangeBound), this.calendarEl.removeEventListener("click", this._handleCalendarClickBound);
      }
    }, {
      key: "_handleInputClick",
      value: function value() {
        this.open();
      }
    }, {
      key: "_handleInputKeydown",
      value: function value(t) {
        t.which === M.keys.ENTER && (t.preventDefault(), this.open());
      }
    }, {
      key: "_handleCalendarClick",
      value: function value(t) {
        if (this.isOpen) {
          var e = g(t.target);
          e.hasClass("is-disabled") || (!e.hasClass("datepicker-day-button") || e.hasClass("is-empty") || e.parent().hasClass("is-disabled") ? e.closest(".month-prev").length ? this.prevMonth() : e.closest(".month-next").length && this.nextMonth() : (this.setDate(new Date(t.target.getAttribute("data-year"), t.target.getAttribute("data-month"), t.target.getAttribute("data-day"))), this.options.autoClose && this._finishSelection()));
        }
      }
    }, {
      key: "_handleClearClick",
      value: function value() {
        this.date = null, this.setInputValue(), this.close();
      }
    }, {
      key: "_handleMonthChange",
      value: function value(t) {
        this.gotoMonth(t.target.value);
      }
    }, {
      key: "_handleYearChange",
      value: function value(t) {
        this.gotoYear(t.target.value);
      }
    }, {
      key: "gotoMonth",
      value: function value(t) {
        isNaN(t) || (this.calendars[0].month = parseInt(t, 10), this.adjustCalendars());
      }
    }, {
      key: "gotoYear",
      value: function value(t) {
        isNaN(t) || (this.calendars[0].year = parseInt(t, 10), this.adjustCalendars());
      }
    }, {
      key: "_handleInputChange",
      value: function value(t) {
        var e = void 0;
        t.firedBy !== this && (e = this.options.parse ? this.options.parse(this.el.value, this.options.format) : new Date(Date.parse(this.el.value)), B._isDate(e) && this.setDate(e));
      }
    }, {
      key: "renderDayName",
      value: function value(t, e, i) {
        for (e += t.firstDay; 7 <= e;) {
          e -= 7;
        }

        return i ? t.i18n.weekdaysAbbrev[e] : t.i18n.weekdays[e];
      }
    }, {
      key: "_finishSelection",
      value: function value() {
        this.setInputValue(), this.close();
      }
    }, {
      key: "open",
      value: function value() {
        if (!this.isOpen) return this.isOpen = !0, "function" == typeof this.options.onOpen && this.options.onOpen.call(this), this.draw(), this.modal.open(), this;
      }
    }, {
      key: "close",
      value: function value() {
        if (this.isOpen) return this.isOpen = !1, "function" == typeof this.options.onClose && this.options.onClose.call(this), this.modal.close(), this;
      }
    }], [{
      key: "init",
      value: function value(t, e) {
        return _get(B.__proto__ || Object.getPrototypeOf(B), "init", this).call(this, this, t, e);
      }
    }, {
      key: "_isDate",
      value: function value(t) {
        return /Date/.test(Object.prototype.toString.call(t)) && !isNaN(t.getTime());
      }
    }, {
      key: "_isWeekend",
      value: function value(t) {
        var e = t.getDay();
        return 0 === e || 6 === e;
      }
    }, {
      key: "_setToStartOfDay",
      value: function value(t) {
        B._isDate(t) && t.setHours(0, 0, 0, 0);
      }
    }, {
      key: "_getDaysInMonth",
      value: function value(t, e) {
        return [31, B._isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e];
      }
    }, {
      key: "_isLeapYear",
      value: function value(t) {
        return t % 4 == 0 && t % 100 != 0 || t % 400 == 0;
      }
    }, {
      key: "_compareDates",
      value: function value(t, e) {
        return t.getTime() === e.getTime();
      }
    }, {
      key: "_setToStartOfDay",
      value: function value(t) {
        B._isDate(t) && t.setHours(0, 0, 0, 0);
      }
    }, {
      key: "getInstance",
      value: function value(t) {
        return (t.jquery ? t[0] : t).M_Datepicker;
      }
    }, {
      key: "defaults",
      get: function get() {
        return e;
      }
    }]), B;
  }();

  t._template = ['<div class= "modal datepicker-modal">', '<div class="modal-content datepicker-container">', '<div class="datepicker-date-display">', '<span class="year-text"></span>', '<span class="date-text"></span>', "</div>", '<div class="datepicker-calendar-container">', '<div class="datepicker-calendar"></div>', '<div class="datepicker-footer">', '<button class="btn-flat datepicker-clear waves-effect" style="visibility: hidden;" type="button"></button>', '<div class="confirmation-btns">', '<button class="btn-flat datepicker-cancel waves-effect" type="button"></button>', '<button class="btn-flat datepicker-done waves-effect" type="button"></button>', "</div>", "</div>", "</div>", "</div>", "</div>"].join(""), M.Datepicker = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "datepicker", "M_Datepicker");
}(cash), function (h) {
  "use strict";

  var e = {
    dialRadius: 135,
    outerRadius: 105,
    innerRadius: 70,
    tickRadius: 20,
    duration: 350,
    container: null,
    defaultTime: "now",
    fromNow: 0,
    showClearBtn: !1,
    i18n: {
      cancel: "Cancel",
      clear: "Clear",
      done: "Ok"
    },
    autoClose: !1,
    twelveHour: !0,
    vibrate: !0,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null,
    onSelect: null
  },
      t = function (t) {
    function f(t, e) {
      _classCallCheck(this, f);

      var i = _possibleConstructorReturn(this, (f.__proto__ || Object.getPrototypeOf(f)).call(this, f, t, e));

      return (i.el.M_Timepicker = i).options = h.extend({}, f.defaults, e), i.id = M.guid(), i._insertHTMLIntoDOM(), i._setupModal(), i._setupVariables(), i._setupEventHandlers(), i._clockSetup(), i._pickerSetup(), i;
    }

    return _inherits(f, Component), _createClass(f, [{
      key: "destroy",
      value: function value() {
        this._removeEventHandlers(), this.modal.destroy(), h(this.modalEl).remove(), this.el.M_Timepicker = void 0;
      }
    }, {
      key: "_setupEventHandlers",
      value: function value() {
        this._handleInputKeydownBound = this._handleInputKeydown.bind(this), this._handleInputClickBound = this._handleInputClick.bind(this), this._handleClockClickStartBound = this._handleClockClickStart.bind(this), this._handleDocumentClickMoveBound = this._handleDocumentClickMove.bind(this), this._handleDocumentClickEndBound = this._handleDocumentClickEnd.bind(this), this.el.addEventListener("click", this._handleInputClickBound), this.el.addEventListener("keydown", this._handleInputKeydownBound), this.plate.addEventListener("mousedown", this._handleClockClickStartBound), this.plate.addEventListener("touchstart", this._handleClockClickStartBound), h(this.spanHours).on("click", this.showView.bind(this, "hours")), h(this.spanMinutes).on("click", this.showView.bind(this, "minutes"));
      }
    }, {
      key: "_removeEventHandlers",
      value: function value() {
        this.el.removeEventListener("click", this._handleInputClickBound), this.el.removeEventListener("keydown", this._handleInputKeydownBound);
      }
    }, {
      key: "_handleInputClick",
      value: function value() {
        this.open();
      }
    }, {
      key: "_handleInputKeydown",
      value: function value(t) {
        t.which === M.keys.ENTER && (t.preventDefault(), this.open());
      }
    }, {
      key: "_handleClockClickStart",
      value: function value(t) {
        t.preventDefault();
        var e = this.plate.getBoundingClientRect(),
            i = e.left,
            n = e.top;
        this.x0 = i + this.options.dialRadius, this.y0 = n + this.options.dialRadius, this.moved = !1;

        var s = f._Pos(t);

        this.dx = s.x - this.x0, this.dy = s.y - this.y0, this.setHand(this.dx, this.dy, !1), document.addEventListener("mousemove", this._handleDocumentClickMoveBound), document.addEventListener("touchmove", this._handleDocumentClickMoveBound), document.addEventListener("mouseup", this._handleDocumentClickEndBound), document.addEventListener("touchend", this._handleDocumentClickEndBound);
      }
    }, {
      key: "_handleDocumentClickMove",
      value: function value(t) {
        t.preventDefault();

        var e = f._Pos(t),
            i = e.x - this.x0,
            n = e.y - this.y0;

        this.moved = !0, this.setHand(i, n, !1, !0);
      }
    }, {
      key: "_handleDocumentClickEnd",
      value: function value(t) {
        var e = this;
        t.preventDefault(), document.removeEventListener("mouseup", this._handleDocumentClickEndBound), document.removeEventListener("touchend", this._handleDocumentClickEndBound);

        var i = f._Pos(t),
            n = i.x - this.x0,
            s = i.y - this.y0;

        this.moved && n === this.dx && s === this.dy && this.setHand(n, s), "hours" === this.currentView ? this.showView("minutes", this.options.duration / 2) : this.options.autoClose && (h(this.minutesView).addClass("timepicker-dial-out"), setTimeout(function () {
          e.done();
        }, this.options.duration / 2)), "function" == typeof this.options.onSelect && this.options.onSelect.call(this, this.hours, this.minutes), document.removeEventListener("mousemove", this._handleDocumentClickMoveBound), document.removeEventListener("touchmove", this._handleDocumentClickMoveBound);
      }
    }, {
      key: "_insertHTMLIntoDOM",
      value: function value() {
        this.$modalEl = h(f._template), this.modalEl = this.$modalEl[0], this.modalEl.id = "modal-" + this.id;
        var t = document.querySelector(this.options.container);
        this.options.container && t ? this.$modalEl.appendTo(t) : this.$modalEl.insertBefore(this.el);
      }
    }, {
      key: "_setupModal",
      value: function value() {
        var t = this;
        this.modal = M.Modal.init(this.modalEl, {
          onOpenStart: this.options.onOpenStart,
          onOpenEnd: this.options.onOpenEnd,
          onCloseStart: this.options.onCloseStart,
          onCloseEnd: function onCloseEnd() {
            "function" == typeof t.options.onCloseEnd && t.options.onCloseEnd.call(t), t.isOpen = !1;
          }
        });
      }
    }, {
      key: "_setupVariables",
      value: function value() {
        this.currentView = "hours", this.vibrate = navigator.vibrate ? "vibrate" : navigator.webkitVibrate ? "webkitVibrate" : null, this._canvas = this.modalEl.querySelector(".timepicker-canvas"), this.plate = this.modalEl.querySelector(".timepicker-plate"), this.hoursView = this.modalEl.querySelector(".timepicker-hours"), this.minutesView = this.modalEl.querySelector(".timepicker-minutes"), this.spanHours = this.modalEl.querySelector(".timepicker-span-hours"), this.spanMinutes = this.modalEl.querySelector(".timepicker-span-minutes"), this.spanAmPm = this.modalEl.querySelector(".timepicker-span-am-pm"), this.footer = this.modalEl.querySelector(".timepicker-footer"), this.amOrPm = "PM";
      }
    }, {
      key: "_pickerSetup",
      value: function value() {
        var t = h('<button class="btn-flat timepicker-clear waves-effect" style="visibility: hidden;" type="button" tabindex="' + (this.options.twelveHour ? "3" : "1") + '">' + this.options.i18n.clear + "</button>").appendTo(this.footer).on("click", this.clear.bind(this));
        this.options.showClearBtn && t.css({
          visibility: ""
        });
        var e = h('<div class="confirmation-btns"></div>');
        h('<button class="btn-flat timepicker-close waves-effect" type="button" tabindex="' + (this.options.twelveHour ? "3" : "1") + '">' + this.options.i18n.cancel + "</button>").appendTo(e).on("click", this.close.bind(this)), h('<button class="btn-flat timepicker-close waves-effect" type="button" tabindex="' + (this.options.twelveHour ? "3" : "1") + '">' + this.options.i18n.done + "</button>").appendTo(e).on("click", this.done.bind(this)), e.appendTo(this.footer);
      }
    }, {
      key: "_clockSetup",
      value: function value() {
        this.options.twelveHour && (this.$amBtn = h('<div class="am-btn">AM</div>'), this.$pmBtn = h('<div class="pm-btn">PM</div>'), this.$amBtn.on("click", this._handleAmPmClick.bind(this)).appendTo(this.spanAmPm), this.$pmBtn.on("click", this._handleAmPmClick.bind(this)).appendTo(this.spanAmPm)), this._buildHoursView(), this._buildMinutesView(), this._buildSVGClock();
      }
    }, {
      key: "_buildSVGClock",
      value: function value() {
        var t = this.options.dialRadius,
            e = this.options.tickRadius,
            i = 2 * t,
            n = f._createSVGEl("svg");

        n.setAttribute("class", "timepicker-svg"), n.setAttribute("width", i), n.setAttribute("height", i);

        var s = f._createSVGEl("g");

        s.setAttribute("transform", "translate(" + t + "," + t + ")");

        var o = f._createSVGEl("circle");

        o.setAttribute("class", "timepicker-canvas-bearing"), o.setAttribute("cx", 0), o.setAttribute("cy", 0), o.setAttribute("r", 4);

        var a = f._createSVGEl("line");

        a.setAttribute("x1", 0), a.setAttribute("y1", 0);

        var r = f._createSVGEl("circle");

        r.setAttribute("class", "timepicker-canvas-bg"), r.setAttribute("r", e), s.appendChild(a), s.appendChild(r), s.appendChild(o), n.appendChild(s), this._canvas.appendChild(n), this.hand = a, this.bg = r, this.bearing = o, this.g = s;
      }
    }, {
      key: "_buildHoursView",
      value: function value() {
        var t = h('<div class="timepicker-tick"></div>');
        if (this.options.twelveHour) for (var e = 1; e < 13; e += 1) {
          var i = t.clone(),
              n = e / 6 * Math.PI,
              s = this.options.outerRadius;
          i.css({
            left: this.options.dialRadius + Math.sin(n) * s - this.options.tickRadius + "px",
            top: this.options.dialRadius - Math.cos(n) * s - this.options.tickRadius + "px"
          }), i.html(0 === e ? "00" : e), this.hoursView.appendChild(i[0]);
        } else for (var o = 0; o < 24; o += 1) {
          var a = t.clone(),
              r = o / 6 * Math.PI,
              l = 0 < o && o < 13 ? this.options.innerRadius : this.options.outerRadius;
          a.css({
            left: this.options.dialRadius + Math.sin(r) * l - this.options.tickRadius + "px",
            top: this.options.dialRadius - Math.cos(r) * l - this.options.tickRadius + "px"
          }), a.html(0 === o ? "00" : o), this.hoursView.appendChild(a[0]);
        }
      }
    }, {
      key: "_buildMinutesView",
      value: function value() {
        for (var t = h('<div class="timepicker-tick"></div>'), e = 0; e < 60; e += 5) {
          var i = t.clone(),
              n = e / 30 * Math.PI;
          i.css({
            left: this.options.dialRadius + Math.sin(n) * this.options.outerRadius - this.options.tickRadius + "px",
            top: this.options.dialRadius - Math.cos(n) * this.options.outerRadius - this.options.tickRadius + "px"
          }), i.html(f._addLeadingZero(e)), this.minutesView.appendChild(i[0]);
        }
      }
    }, {
      key: "_handleAmPmClick",
      value: function value(t) {
        var e = h(t.target);
        this.amOrPm = e.hasClass("am-btn") ? "AM" : "PM", this._updateAmPmView();
      }
    }, {
      key: "_updateAmPmView",
      value: function value() {
        this.options.twelveHour && (this.$amBtn.toggleClass("text-primary", "AM" === this.amOrPm), this.$pmBtn.toggleClass("text-primary", "PM" === this.amOrPm));
      }
    }, {
      key: "_updateTimeFromInput",
      value: function value() {
        var t = ((this.el.value || this.options.defaultTime || "") + "").split(":");

        if (this.options.twelveHour && void 0 !== t[1] && (0 < t[1].toUpperCase().indexOf("AM") ? this.amOrPm = "AM" : this.amOrPm = "PM", t[1] = t[1].replace("AM", "").replace("PM", "")), "now" === t[0]) {
          var e = new Date(+new Date() + this.options.fromNow);
          t = [e.getHours(), e.getMinutes()], this.options.twelveHour && (this.amOrPm = 12 <= t[0] && t[0] < 24 ? "PM" : "AM");
        }

        this.hours = +t[0] || 0, this.minutes = +t[1] || 0, this.spanHours.innerHTML = this.hours, this.spanMinutes.innerHTML = f._addLeadingZero(this.minutes), this._updateAmPmView();
      }
    }, {
      key: "showView",
      value: function value(t, e) {
        "minutes" === t && h(this.hoursView).css("visibility");
        var i = "hours" === t,
            n = i ? this.hoursView : this.minutesView,
            s = i ? this.minutesView : this.hoursView;
        this.currentView = t, h(this.spanHours).toggleClass("text-primary", i), h(this.spanMinutes).toggleClass("text-primary", !i), s.classList.add("timepicker-dial-out"), h(n).css("visibility", "visible").removeClass("timepicker-dial-out"), this.resetClock(e), clearTimeout(this.toggleViewTimer), this.toggleViewTimer = setTimeout(function () {
          h(s).css("visibility", "hidden");
        }, this.options.duration);
      }
    }, {
      key: "resetClock",
      value: function value(t) {
        var e = this.currentView,
            i = this[e],
            n = "hours" === e,
            s = i * (Math.PI / (n ? 6 : 30)),
            o = n && 0 < i && i < 13 ? this.options.innerRadius : this.options.outerRadius,
            a = Math.sin(s) * o,
            r = -Math.cos(s) * o,
            l = this;
        t ? (h(this.canvas).addClass("timepicker-canvas-out"), setTimeout(function () {
          h(l.canvas).removeClass("timepicker-canvas-out"), l.setHand(a, r);
        }, t)) : this.setHand(a, r);
      }
    }, {
      key: "setHand",
      value: function value(t, e, i) {
        var n = this,
            s = Math.atan2(t, -e),
            o = "hours" === this.currentView,
            a = Math.PI / (o || i ? 6 : 30),
            r = Math.sqrt(t * t + e * e),
            l = o && r < (this.options.outerRadius + this.options.innerRadius) / 2,
            h = l ? this.options.innerRadius : this.options.outerRadius;
        this.options.twelveHour && (h = this.options.outerRadius), s < 0 && (s = 2 * Math.PI + s);
        var d = Math.round(s / a);
        s = d * a, this.options.twelveHour ? o ? 0 === d && (d = 12) : (i && (d *= 5), 60 === d && (d = 0)) : o ? (12 === d && (d = 0), d = l ? 0 === d ? 12 : d : 0 === d ? 0 : d + 12) : (i && (d *= 5), 60 === d && (d = 0)), this[this.currentView] !== d && this.vibrate && this.options.vibrate && (this.vibrateTimer || (navigator[this.vibrate](10), this.vibrateTimer = setTimeout(function () {
          n.vibrateTimer = null;
        }, 100))), this[this.currentView] = d, o ? this.spanHours.innerHTML = d : this.spanMinutes.innerHTML = f._addLeadingZero(d);
        var u = Math.sin(s) * (h - this.options.tickRadius),
            c = -Math.cos(s) * (h - this.options.tickRadius),
            p = Math.sin(s) * h,
            v = -Math.cos(s) * h;
        this.hand.setAttribute("x2", u), this.hand.setAttribute("y2", c), this.bg.setAttribute("cx", p), this.bg.setAttribute("cy", v);
      }
    }, {
      key: "open",
      value: function value() {
        this.isOpen || (this.isOpen = !0, this._updateTimeFromInput(), this.showView("hours"), this.modal.open());
      }
    }, {
      key: "close",
      value: function value() {
        this.isOpen && (this.isOpen = !1, this.modal.close());
      }
    }, {
      key: "done",
      value: function value(t, e) {
        var i = this.el.value,
            n = e ? "" : f._addLeadingZero(this.hours) + ":" + f._addLeadingZero(this.minutes);
        this.time = n, !e && this.options.twelveHour && (n = n + " " + this.amOrPm), (this.el.value = n) !== i && this.$el.trigger("change"), this.close(), this.el.focus();
      }
    }, {
      key: "clear",
      value: function value() {
        this.done(null, !0);
      }
    }], [{
      key: "init",
      value: function value(t, e) {
        return _get(f.__proto__ || Object.getPrototypeOf(f), "init", this).call(this, this, t, e);
      }
    }, {
      key: "_addLeadingZero",
      value: function value(t) {
        return (t < 10 ? "0" : "") + t;
      }
    }, {
      key: "_createSVGEl",
      value: function value(t) {
        return document.createElementNS("http://www.w3.org/2000/svg", t);
      }
    }, {
      key: "_Pos",
      value: function value(t) {
        return t.targetTouches && 1 <= t.targetTouches.length ? {
          x: t.targetTouches[0].clientX,
          y: t.targetTouches[0].clientY
        } : {
          x: t.clientX,
          y: t.clientY
        };
      }
    }, {
      key: "getInstance",
      value: function value(t) {
        return (t.jquery ? t[0] : t).M_Timepicker;
      }
    }, {
      key: "defaults",
      get: function get() {
        return e;
      }
    }]), f;
  }();

  t._template = ['<div class= "modal timepicker-modal">', '<div class="modal-content timepicker-container">', '<div class="timepicker-digital-display">', '<div class="timepicker-text-container">', '<div class="timepicker-display-column">', '<span class="timepicker-span-hours text-primary"></span>', ":", '<span class="timepicker-span-minutes"></span>', "</div>", '<div class="timepicker-display-column timepicker-display-am-pm">', '<div class="timepicker-span-am-pm"></div>', "</div>", "</div>", "</div>", '<div class="timepicker-analog-display">', '<div class="timepicker-plate">', '<div class="timepicker-canvas"></div>', '<div class="timepicker-dial timepicker-hours"></div>', '<div class="timepicker-dial timepicker-minutes timepicker-dial-out"></div>', "</div>", '<div class="timepicker-footer"></div>', "</div>", "</div>", "</div>"].join(""), M.Timepicker = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "timepicker", "M_Timepicker");
}(cash), function (s) {
  "use strict";

  var e = {},
      t = function (t) {
    function n(t, e) {
      _classCallCheck(this, n);

      var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));

      return (i.el.M_CharacterCounter = i).options = s.extend({}, n.defaults, e), i.isInvalid = !1, i.isValidLength = !1, i._setupCounter(), i._setupEventHandlers(), i;
    }

    return _inherits(n, Component), _createClass(n, [{
      key: "destroy",
      value: function value() {
        this._removeEventHandlers(), this.el.CharacterCounter = void 0, this._removeCounter();
      }
    }, {
      key: "_setupEventHandlers",
      value: function value() {
        this._handleUpdateCounterBound = this.updateCounter.bind(this), this.el.addEventListener("focus", this._handleUpdateCounterBound, !0), this.el.addEventListener("input", this._handleUpdateCounterBound, !0);
      }
    }, {
      key: "_removeEventHandlers",
      value: function value() {
        this.el.removeEventListener("focus", this._handleUpdateCounterBound, !0), this.el.removeEventListener("input", this._handleUpdateCounterBound, !0);
      }
    }, {
      key: "_setupCounter",
      value: function value() {
        this.counterEl = document.createElement("span"), s(this.counterEl).addClass("character-counter").css({
          float: "right",
          "font-size": "12px",
          height: 1
        }), this.$el.parent().append(this.counterEl);
      }
    }, {
      key: "_removeCounter",
      value: function value() {
        s(this.counterEl).remove();
      }
    }, {
      key: "updateCounter",
      value: function value() {
        var t = +this.$el.attr("data-length"),
            e = this.el.value.length;
        this.isValidLength = e <= t;
        var i = e;
        t && (i += "/" + t, this._validateInput()), s(this.counterEl).html(i);
      }
    }, {
      key: "_validateInput",
      value: function value() {
        this.isValidLength && this.isInvalid ? (this.isInvalid = !1, this.$el.removeClass("invalid")) : this.isValidLength || this.isInvalid || (this.isInvalid = !0, this.$el.removeClass("valid"), this.$el.addClass("invalid"));
      }
    }], [{
      key: "init",
      value: function value(t, e) {
        return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e);
      }
    }, {
      key: "getInstance",
      value: function value(t) {
        return (t.jquery ? t[0] : t).M_CharacterCounter;
      }
    }, {
      key: "defaults",
      get: function get() {
        return e;
      }
    }]), n;
  }();

  M.CharacterCounter = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "characterCounter", "M_CharacterCounter");
}(cash), function (b) {
  "use strict";

  var e = {
    duration: 200,
    dist: -100,
    shift: 0,
    padding: 0,
    numVisible: 5,
    fullWidth: !1,
    indicators: !1,
    noWrap: !1,
    onCycleTo: null
  },
      t = function (t) {
    function i(t, e) {
      _classCallCheck(this, i);

      var n = _possibleConstructorReturn(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, i, t, e));

      return (n.el.M_Carousel = n).options = b.extend({}, i.defaults, e), n.hasMultipleSlides = 1 < n.$el.find(".carousel-item").length, n.showIndicators = n.options.indicators && n.hasMultipleSlides, n.noWrap = n.options.noWrap || !n.hasMultipleSlides, n.pressed = !1, n.dragged = !1, n.offset = n.target = 0, n.images = [], n.itemWidth = n.$el.find(".carousel-item").first().innerWidth(), n.itemHeight = n.$el.find(".carousel-item").first().innerHeight(), n.dim = 2 * n.itemWidth + n.options.padding || 1, n._autoScrollBound = n._autoScroll.bind(n), n._trackBound = n._track.bind(n), n.options.fullWidth && (n.options.dist = 0, n._setCarouselHeight(), n.showIndicators && n.$el.find(".carousel-fixed-item").addClass("with-indicators")), n.$indicators = b('<ul class="indicators"></ul>'), n.$el.find(".carousel-item").each(function (t, e) {
        if (n.images.push(t), n.showIndicators) {
          var i = b('<li class="indicator-item"></li>');
          0 === e && i[0].classList.add("active"), n.$indicators.append(i);
        }
      }), n.showIndicators && n.$el.append(n.$indicators), n.count = n.images.length, n.options.numVisible = Math.min(n.count, n.options.numVisible), n.xform = "transform", ["webkit", "Moz", "O", "ms"].every(function (t) {
        var e = t + "Transform";
        return void 0 === document.body.style[e] || (n.xform = e, !1);
      }), n._setupEventHandlers(), n._scroll(n.offset), n;
    }

    return _inherits(i, Component), _createClass(i, [{
      key: "destroy",
      value: function value() {
        this._removeEventHandlers(), this.el.M_Carousel = void 0;
      }
    }, {
      key: "_setupEventHandlers",
      value: function value() {
        var i = this;
        this._handleCarouselTapBound = this._handleCarouselTap.bind(this), this._handleCarouselDragBound = this._handleCarouselDrag.bind(this), this._handleCarouselReleaseBound = this._handleCarouselRelease.bind(this), this._handleCarouselClickBound = this._handleCarouselClick.bind(this), void 0 !== window.ontouchstart && (this.el.addEventListener("touchstart", this._handleCarouselTapBound), this.el.addEventListener("touchmove", this._handleCarouselDragBound), this.el.addEventListener("touchend", this._handleCarouselReleaseBound)), this.el.addEventListener("mousedown", this._handleCarouselTapBound), this.el.addEventListener("mousemove", this._handleCarouselDragBound), this.el.addEventListener("mouseup", this._handleCarouselReleaseBound), this.el.addEventListener("mouseleave", this._handleCarouselReleaseBound), this.el.addEventListener("click", this._handleCarouselClickBound), this.showIndicators && this.$indicators && (this._handleIndicatorClickBound = this._handleIndicatorClick.bind(this), this.$indicators.find(".indicator-item").each(function (t, e) {
          t.addEventListener("click", i._handleIndicatorClickBound);
        }));
        var t = M.throttle(this._handleResize, 200);
        this._handleThrottledResizeBound = t.bind(this), window.addEventListener("resize", this._handleThrottledResizeBound);
      }
    }, {
      key: "_removeEventHandlers",
      value: function value() {
        var i = this;
        void 0 !== window.ontouchstart && (this.el.removeEventListener("touchstart", this._handleCarouselTapBound), this.el.removeEventListener("touchmove", this._handleCarouselDragBound), this.el.removeEventListener("touchend", this._handleCarouselReleaseBound)), this.el.removeEventListener("mousedown", this._handleCarouselTapBound), this.el.removeEventListener("mousemove", this._handleCarouselDragBound), this.el.removeEventListener("mouseup", this._handleCarouselReleaseBound), this.el.removeEventListener("mouseleave", this._handleCarouselReleaseBound), this.el.removeEventListener("click", this._handleCarouselClickBound), this.showIndicators && this.$indicators && this.$indicators.find(".indicator-item").each(function (t, e) {
          t.removeEventListener("click", i._handleIndicatorClickBound);
        }), window.removeEventListener("resize", this._handleThrottledResizeBound);
      }
    }, {
      key: "_handleCarouselTap",
      value: function value(t) {
        "mousedown" === t.type && b(t.target).is("img") && t.preventDefault(), this.pressed = !0, this.dragged = !1, this.verticalDragged = !1, this.reference = this._xpos(t), this.referenceY = this._ypos(t), this.velocity = this.amplitude = 0, this.frame = this.offset, this.timestamp = Date.now(), clearInterval(this.ticker), this.ticker = setInterval(this._trackBound, 100);
      }
    }, {
      key: "_handleCarouselDrag",
      value: function value(t) {
        var e = void 0,
            i = void 0,
            n = void 0;
        if (this.pressed) if (e = this._xpos(t), i = this._ypos(t), n = this.reference - e, Math.abs(this.referenceY - i) < 30 && !this.verticalDragged) (2 < n || n < -2) && (this.dragged = !0, this.reference = e, this._scroll(this.offset + n));else {
          if (this.dragged) return t.preventDefault(), t.stopPropagation(), !1;
          this.verticalDragged = !0;
        }
        if (this.dragged) return t.preventDefault(), t.stopPropagation(), !1;
      }
    }, {
      key: "_handleCarouselRelease",
      value: function value(t) {
        if (this.pressed) return this.pressed = !1, clearInterval(this.ticker), this.target = this.offset, (10 < this.velocity || this.velocity < -10) && (this.amplitude = .9 * this.velocity, this.target = this.offset + this.amplitude), this.target = Math.round(this.target / this.dim) * this.dim, this.noWrap && (this.target >= this.dim * (this.count - 1) ? this.target = this.dim * (this.count - 1) : this.target < 0 && (this.target = 0)), this.amplitude = this.target - this.offset, this.timestamp = Date.now(), requestAnimationFrame(this._autoScrollBound), this.dragged && (t.preventDefault(), t.stopPropagation()), !1;
      }
    }, {
      key: "_handleCarouselClick",
      value: function value(t) {
        if (this.dragged) return t.preventDefault(), t.stopPropagation(), !1;

        if (!this.options.fullWidth) {
          var e = b(t.target).closest(".carousel-item").index();
          0 !== this._wrap(this.center) - e && (t.preventDefault(), t.stopPropagation()), this._cycleTo(e);
        }
      }
    }, {
      key: "_handleIndicatorClick",
      value: function value(t) {
        t.stopPropagation();
        var e = b(t.target).closest(".indicator-item");
        e.length && this._cycleTo(e.index());
      }
    }, {
      key: "_handleResize",
      value: function value(t) {
        this.options.fullWidth ? (this.itemWidth = this.$el.find(".carousel-item").first().innerWidth(), this.imageHeight = this.$el.find(".carousel-item.active").height(), this.dim = 2 * this.itemWidth + this.options.padding, this.offset = 2 * this.center * this.itemWidth, this.target = this.offset, this._setCarouselHeight(!0)) : this._scroll();
      }
    }, {
      key: "_setCarouselHeight",
      value: function value(t) {
        var i = this,
            e = this.$el.find(".carousel-item.active").length ? this.$el.find(".carousel-item.active").first() : this.$el.find(".carousel-item").first(),
            n = e.find("img").first();
        if (n.length) {
          if (n[0].complete) {
            var s = n.height();
            if (0 < s) this.$el.css("height", s + "px");else {
              var o = n[0].naturalWidth,
                  a = n[0].naturalHeight,
                  r = this.$el.width() / o * a;
              this.$el.css("height", r + "px");
            }
          } else n.one("load", function (t, e) {
            i.$el.css("height", t.offsetHeight + "px");
          });
        } else if (!t) {
          var l = e.height();
          this.$el.css("height", l + "px");
        }
      }
    }, {
      key: "_xpos",
      value: function value(t) {
        return t.targetTouches && 1 <= t.targetTouches.length ? t.targetTouches[0].clientX : t.clientX;
      }
    }, {
      key: "_ypos",
      value: function value(t) {
        return t.targetTouches && 1 <= t.targetTouches.length ? t.targetTouches[0].clientY : t.clientY;
      }
    }, {
      key: "_wrap",
      value: function value(t) {
        return t >= this.count ? t % this.count : t < 0 ? this._wrap(this.count + t % this.count) : t;
      }
    }, {
      key: "_track",
      value: function value() {
        var t, e, i, n;
        e = (t = Date.now()) - this.timestamp, this.timestamp = t, i = this.offset - this.frame, this.frame = this.offset, n = 1e3 * i / (1 + e), this.velocity = .8 * n + .2 * this.velocity;
      }
    }, {
      key: "_autoScroll",
      value: function value() {
        var t = void 0,
            e = void 0;
        this.amplitude && (t = Date.now() - this.timestamp, 2 < (e = this.amplitude * Math.exp(-t / this.options.duration)) || e < -2 ? (this._scroll(this.target - e), requestAnimationFrame(this._autoScrollBound)) : this._scroll(this.target));
      }
    }, {
      key: "_scroll",
      value: function value(t) {
        var e = this;
        this.$el.hasClass("scrolling") || this.el.classList.add("scrolling"), null != this.scrollingTimeout && window.clearTimeout(this.scrollingTimeout), this.scrollingTimeout = window.setTimeout(function () {
          e.$el.removeClass("scrolling");
        }, this.options.duration);
        var i,
            n,
            s,
            o,
            a = void 0,
            r = void 0,
            l = void 0,
            h = void 0,
            d = void 0,
            u = void 0,
            c = this.center,
            p = 1 / this.options.numVisible;

        if (this.offset = "number" == typeof t ? t : this.offset, this.center = Math.floor((this.offset + this.dim / 2) / this.dim), o = -(s = (n = this.offset - this.center * this.dim) < 0 ? 1 : -1) * n * 2 / this.dim, i = this.count >> 1, this.options.fullWidth ? (l = "translateX(0)", u = 1) : (l = "translateX(" + (this.el.clientWidth - this.itemWidth) / 2 + "px) ", l += "translateY(" + (this.el.clientHeight - this.itemHeight) / 2 + "px)", u = 1 - p * o), this.showIndicators) {
          var v = this.center % this.count,
              f = this.$indicators.find(".indicator-item.active");
          f.index() !== v && (f.removeClass("active"), this.$indicators.find(".indicator-item").eq(v)[0].classList.add("active"));
        }

        if (!this.noWrap || 0 <= this.center && this.center < this.count) {
          r = this.images[this._wrap(this.center)], b(r).hasClass("active") || (this.$el.find(".carousel-item").removeClass("active"), r.classList.add("active"));
          var m = l + " translateX(" + -n / 2 + "px) translateX(" + s * this.options.shift * o * a + "px) translateZ(" + this.options.dist * o + "px)";

          this._updateItemStyle(r, u, 0, m);
        }

        for (a = 1; a <= i; ++a) {
          if (this.options.fullWidth ? (h = this.options.dist, d = a === i && n < 0 ? 1 - o : 1) : (h = this.options.dist * (2 * a + o * s), d = 1 - p * (2 * a + o * s)), !this.noWrap || this.center + a < this.count) {
            r = this.images[this._wrap(this.center + a)];
            var g = l + " translateX(" + (this.options.shift + (this.dim * a - n) / 2) + "px) translateZ(" + h + "px)";

            this._updateItemStyle(r, d, -a, g);
          }

          if (this.options.fullWidth ? (h = this.options.dist, d = a === i && 0 < n ? 1 - o : 1) : (h = this.options.dist * (2 * a - o * s), d = 1 - p * (2 * a - o * s)), !this.noWrap || 0 <= this.center - a) {
            r = this.images[this._wrap(this.center - a)];

            var _ = l + " translateX(" + (-this.options.shift + (-this.dim * a - n) / 2) + "px) translateZ(" + h + "px)";

            this._updateItemStyle(r, d, -a, _);
          }
        }

        if (!this.noWrap || 0 <= this.center && this.center < this.count) {
          r = this.images[this._wrap(this.center)];
          var y = l + " translateX(" + -n / 2 + "px) translateX(" + s * this.options.shift * o + "px) translateZ(" + this.options.dist * o + "px)";

          this._updateItemStyle(r, u, 0, y);
        }

        var k = this.$el.find(".carousel-item").eq(this._wrap(this.center));
        c !== this.center && "function" == typeof this.options.onCycleTo && this.options.onCycleTo.call(this, k[0], this.dragged), "function" == typeof this.oneTimeCallback && (this.oneTimeCallback.call(this, k[0], this.dragged), this.oneTimeCallback = null);
      }
    }, {
      key: "_updateItemStyle",
      value: function value(t, e, i, n) {
        t.style[this.xform] = n, t.style.zIndex = i, t.style.opacity = e, t.style.visibility = "visible";
      }
    }, {
      key: "_cycleTo",
      value: function value(t, e) {
        var i = this.center % this.count - t;
        this.noWrap || (i < 0 ? Math.abs(i + this.count) < Math.abs(i) && (i += this.count) : 0 < i && Math.abs(i - this.count) < i && (i -= this.count)), this.target = this.dim * Math.round(this.offset / this.dim), i < 0 ? this.target += this.dim * Math.abs(i) : 0 < i && (this.target -= this.dim * i), "function" == typeof e && (this.oneTimeCallback = e), this.offset !== this.target && (this.amplitude = this.target - this.offset, this.timestamp = Date.now(), requestAnimationFrame(this._autoScrollBound));
      }
    }, {
      key: "next",
      value: function value(t) {
        (void 0 === t || isNaN(t)) && (t = 1);
        var e = this.center + t;

        if (e >= this.count || e < 0) {
          if (this.noWrap) return;
          e = this._wrap(e);
        }

        this._cycleTo(e);
      }
    }, {
      key: "prev",
      value: function value(t) {
        (void 0 === t || isNaN(t)) && (t = 1);
        var e = this.center - t;

        if (e >= this.count || e < 0) {
          if (this.noWrap) return;
          e = this._wrap(e);
        }

        this._cycleTo(e);
      }
    }, {
      key: "set",
      value: function value(t, e) {
        if ((void 0 === t || isNaN(t)) && (t = 0), t > this.count || t < 0) {
          if (this.noWrap) return;
          t = this._wrap(t);
        }

        this._cycleTo(t, e);
      }
    }], [{
      key: "init",
      value: function value(t, e) {
        return _get(i.__proto__ || Object.getPrototypeOf(i), "init", this).call(this, this, t, e);
      }
    }, {
      key: "getInstance",
      value: function value(t) {
        return (t.jquery ? t[0] : t).M_Carousel;
      }
    }, {
      key: "defaults",
      get: function get() {
        return e;
      }
    }]), i;
  }();

  M.Carousel = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "carousel", "M_Carousel");
}(cash), function (S) {
  "use strict";

  var e = {
    onOpen: void 0,
    onClose: void 0
  },
      t = function (t) {
    function n(t, e) {
      _classCallCheck(this, n);

      var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));

      return (i.el.M_TapTarget = i).options = S.extend({}, n.defaults, e), i.isOpen = !1, i.$origin = S("#" + i.$el.attr("data-target")), i._setup(), i._calculatePositioning(), i._setupEventHandlers(), i;
    }

    return _inherits(n, Component), _createClass(n, [{
      key: "destroy",
      value: function value() {
        this._removeEventHandlers(), this.el.TapTarget = void 0;
      }
    }, {
      key: "_setupEventHandlers",
      value: function value() {
        this._handleDocumentClickBound = this._handleDocumentClick.bind(this), this._handleTargetClickBound = this._handleTargetClick.bind(this), this._handleOriginClickBound = this._handleOriginClick.bind(this), this.el.addEventListener("click", this._handleTargetClickBound), this.originEl.addEventListener("click", this._handleOriginClickBound);
        var t = M.throttle(this._handleResize, 200);
        this._handleThrottledResizeBound = t.bind(this), window.addEventListener("resize", this._handleThrottledResizeBound);
      }
    }, {
      key: "_removeEventHandlers",
      value: function value() {
        this.el.removeEventListener("click", this._handleTargetClickBound), this.originEl.removeEventListener("click", this._handleOriginClickBound), window.removeEventListener("resize", this._handleThrottledResizeBound);
      }
    }, {
      key: "_handleTargetClick",
      value: function value(t) {
        this.open();
      }
    }, {
      key: "_handleOriginClick",
      value: function value(t) {
        this.close();
      }
    }, {
      key: "_handleResize",
      value: function value(t) {
        this._calculatePositioning();
      }
    }, {
      key: "_handleDocumentClick",
      value: function value(t) {
        S(t.target).closest(".tap-target-wrapper").length || (this.close(), t.preventDefault(), t.stopPropagation());
      }
    }, {
      key: "_setup",
      value: function value() {
        this.wrapper = this.$el.parent()[0], this.waveEl = S(this.wrapper).find(".tap-target-wave")[0], this.originEl = S(this.wrapper).find(".tap-target-origin")[0], this.contentEl = this.$el.find(".tap-target-content")[0], S(this.wrapper).hasClass(".tap-target-wrapper") || (this.wrapper = document.createElement("div"), this.wrapper.classList.add("tap-target-wrapper"), this.$el.before(S(this.wrapper)), this.wrapper.append(this.el)), this.contentEl || (this.contentEl = document.createElement("div"), this.contentEl.classList.add("tap-target-content"), this.$el.append(this.contentEl)), this.waveEl || (this.waveEl = document.createElement("div"), this.waveEl.classList.add("tap-target-wave"), this.originEl || (this.originEl = this.$origin.clone(!0, !0), this.originEl.addClass("tap-target-origin"), this.originEl.removeAttr("id"), this.originEl.removeAttr("style"), this.originEl = this.originEl[0], this.waveEl.append(this.originEl)), this.wrapper.append(this.waveEl));
      }
    }, {
      key: "_calculatePositioning",
      value: function value() {
        var t = "fixed" === this.$origin.css("position");
        if (!t) for (var e = this.$origin.parents(), i = 0; i < e.length && !(t = "fixed" == S(e[i]).css("position")); i++) {
          ;
        }

        var n = this.$origin.outerWidth(),
            s = this.$origin.outerHeight(),
            o = t ? this.$origin.offset().top - M.getDocumentScrollTop() : this.$origin.offset().top,
            a = t ? this.$origin.offset().left - M.getDocumentScrollLeft() : this.$origin.offset().left,
            r = window.innerWidth,
            l = window.innerHeight,
            h = r / 2,
            d = l / 2,
            u = a <= h,
            c = h < a,
            p = o <= d,
            v = d < o,
            f = .25 * r <= a && a <= .75 * r,
            m = this.$el.outerWidth(),
            g = this.$el.outerHeight(),
            _ = o + s / 2 - g / 2,
            y = a + n / 2 - m / 2,
            k = t ? "fixed" : "absolute",
            b = f ? m : m / 2 + n,
            w = g / 2,
            C = p ? g / 2 : 0,
            E = u && !f ? m / 2 - n : 0,
            O = n,
            x = v ? "bottom" : "top",
            L = 2 * n,
            T = L,
            $ = g / 2 - T / 2,
            B = m / 2 - L / 2,
            D = {};

        D.top = p ? _ + "px" : "", D.right = c ? r - y - m + "px" : "", D.bottom = v ? l - _ - g + "px" : "", D.left = u ? y + "px" : "", D.position = k, S(this.wrapper).css(D), S(this.contentEl).css({
          width: b + "px",
          height: w + "px",
          top: C + "px",
          right: "0px",
          bottom: "0px",
          left: E + "px",
          padding: O + "px",
          verticalAlign: x
        }), S(this.waveEl).css({
          top: $ + "px",
          left: B + "px",
          width: L + "px",
          height: T + "px"
        });
      }
    }, {
      key: "open",
      value: function value() {
        this.isOpen || ("function" == typeof this.options.onOpen && this.options.onOpen.call(this, this.$origin[0]), this.isOpen = !0, this.wrapper.classList.add("open"), document.body.addEventListener("click", this._handleDocumentClickBound, !0), document.body.addEventListener("touchend", this._handleDocumentClickBound));
      }
    }, {
      key: "close",
      value: function value() {
        this.isOpen && ("function" == typeof this.options.onClose && this.options.onClose.call(this, this.$origin[0]), this.isOpen = !1, this.wrapper.classList.remove("open"), document.body.removeEventListener("click", this._handleDocumentClickBound, !0), document.body.removeEventListener("touchend", this._handleDocumentClickBound));
      }
    }], [{
      key: "init",
      value: function value(t, e) {
        return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e);
      }
    }, {
      key: "getInstance",
      value: function value(t) {
        return (t.jquery ? t[0] : t).M_TapTarget;
      }
    }, {
      key: "defaults",
      get: function get() {
        return e;
      }
    }]), n;
  }();

  M.TapTarget = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "tapTarget", "M_TapTarget");
}(cash), function (d) {
  "use strict";

  var e = {
    classes: "",
    dropdownOptions: {}
  },
      t = function (t) {
    function n(t, e) {
      _classCallCheck(this, n);

      var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));

      return i.$el.hasClass("browser-default") ? _possibleConstructorReturn(i) : ((i.el.M_FormSelect = i).options = d.extend({}, n.defaults, e), i.isMultiple = i.$el.prop("multiple"), i.el.tabIndex = -1, i._keysSelected = {}, i._valueDict = {}, i._setupDropdown(), i._setupEventHandlers(), i);
    }

    return _inherits(n, Component), _createClass(n, [{
      key: "destroy",
      value: function value() {
        this._removeEventHandlers(), this._removeDropdown(), this.el.M_FormSelect = void 0;
      }
    }, {
      key: "_setupEventHandlers",
      value: function value() {
        var e = this;
        this._handleSelectChangeBound = this._handleSelectChange.bind(this), this._handleOptionClickBound = this._handleOptionClick.bind(this), this._handleInputClickBound = this._handleInputClick.bind(this), d(this.dropdownOptions).find("li:not(.optgroup)").each(function (t) {
          t.addEventListener("click", e._handleOptionClickBound);
        }), this.el.addEventListener("change", this._handleSelectChangeBound), this.input.addEventListener("click", this._handleInputClickBound);
      }
    }, {
      key: "_removeEventHandlers",
      value: function value() {
        var e = this;
        d(this.dropdownOptions).find("li:not(.optgroup)").each(function (t) {
          t.removeEventListener("click", e._handleOptionClickBound);
        }), this.el.removeEventListener("change", this._handleSelectChangeBound), this.input.removeEventListener("click", this._handleInputClickBound);
      }
    }, {
      key: "_handleSelectChange",
      value: function value(t) {
        this._setValueToInput();
      }
    }, {
      key: "_handleOptionClick",
      value: function value(t) {
        t.preventDefault();
        var e = d(t.target).closest("li")[0],
            i = e.id;

        if (!d(e).hasClass("disabled") && !d(e).hasClass("optgroup") && i.length) {
          var n = !0;

          if (this.isMultiple) {
            var s = d(this.dropdownOptions).find("li.disabled.selected");
            s.length && (s.removeClass("selected"), s.find('input[type="checkbox"]').prop("checked", !1), this._toggleEntryFromArray(s[0].id)), n = this._toggleEntryFromArray(i);
          } else d(this.dropdownOptions).find("li").removeClass("selected"), d(e).toggleClass("selected", n);

          d(this._valueDict[i].el).prop("selected") !== n && (d(this._valueDict[i].el).prop("selected", n), this.$el.trigger("change"));
        }

        t.stopPropagation();
      }
    }, {
      key: "_handleInputClick",
      value: function value() {
        this.dropdown && this.dropdown.isOpen && (this._setValueToInput(), this._setSelectedStates());
      }
    }, {
      key: "_setupDropdown",
      value: function value() {
        var n = this;
        this.wrapper = document.createElement("div"), d(this.wrapper).addClass("select-wrapper " + this.options.classes), this.$el.before(d(this.wrapper)), this.wrapper.appendChild(this.el), this.el.disabled && this.wrapper.classList.add("disabled"), this.$selectOptions = this.$el.children("option, optgroup"), this.dropdownOptions = document.createElement("ul"), this.dropdownOptions.id = "select-options-" + M.guid(), d(this.dropdownOptions).addClass("dropdown-content select-dropdown " + (this.isMultiple ? "multiple-select-dropdown" : "")), this.$selectOptions.length && this.$selectOptions.each(function (t) {
          if (d(t).is("option")) {
            var e = void 0;
            e = n.isMultiple ? n._appendOptionWithIcon(n.$el, t, "multiple") : n._appendOptionWithIcon(n.$el, t), n._addOptionToValueDict(t, e);
          } else if (d(t).is("optgroup")) {
            var i = d(t).children("option");
            d(n.dropdownOptions).append(d('<li class="optgroup"><span>' + t.getAttribute("label") + "</span></li>")[0]), i.each(function (t) {
              var e = n._appendOptionWithIcon(n.$el, t, "optgroup-option");

              n._addOptionToValueDict(t, e);
            });
          }
        }), this.$el.after(this.dropdownOptions), this.input = document.createElement("input"), d(this.input).addClass("select-dropdown dropdown-trigger"), this.input.setAttribute("type", "text"), this.input.setAttribute("readonly", "true"), this.input.setAttribute("data-target", this.dropdownOptions.id), this.el.disabled && d(this.input).prop("disabled", "true"), this.$el.before(this.input), this._setValueToInput();
        var t = d('<svg class="caret" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>');

        if (this.$el.before(t[0]), !this.el.disabled) {
          var e = d.extend({}, this.options.dropdownOptions);
          e.onOpenEnd = function (t) {
            var e = d(n.dropdownOptions).find(".selected").first();

            if (e.length && (M.keyDown = !0, n.dropdown.focusedIndex = e.index(), n.dropdown._focusFocusedItem(), M.keyDown = !1, n.dropdown.isScrollable)) {
              var i = e[0].getBoundingClientRect().top - n.dropdownOptions.getBoundingClientRect().top;
              i -= n.dropdownOptions.clientHeight / 2, n.dropdownOptions.scrollTop = i;
            }
          }, this.isMultiple && (e.closeOnClick = !1), this.dropdown = M.Dropdown.init(this.input, e);
        }

        this._setSelectedStates();
      }
    }, {
      key: "_addOptionToValueDict",
      value: function value(t, e) {
        var i = Object.keys(this._valueDict).length,
            n = this.dropdownOptions.id + i,
            s = {};
        e.id = n, s.el = t, s.optionEl = e, this._valueDict[n] = s;
      }
    }, {
      key: "_removeDropdown",
      value: function value() {
        d(this.wrapper).find(".caret").remove(), d(this.input).remove(), d(this.dropdownOptions).remove(), d(this.wrapper).before(this.$el), d(this.wrapper).remove();
      }
    }, {
      key: "_appendOptionWithIcon",
      value: function value(t, e, i) {
        var n = e.disabled ? "disabled " : "",
            s = "optgroup-option" === i ? "optgroup-option " : "",
            o = this.isMultiple ? '<label><input type="checkbox"' + n + '"/><span>' + e.innerHTML + "</span></label>" : e.innerHTML,
            a = d("<li></li>"),
            r = d("<span></span>");
        r.html(o), a.addClass(n + " " + s), a.append(r);
        var l = e.getAttribute("data-icon");

        if (l) {
          var h = d('<img alt="" src="' + l + '">');
          a.prepend(h);
        }

        return d(this.dropdownOptions).append(a[0]), a[0];
      }
    }, {
      key: "_toggleEntryFromArray",
      value: function value(t) {
        var e = !this._keysSelected.hasOwnProperty(t),
            i = d(this._valueDict[t].optionEl);
        return e ? this._keysSelected[t] = !0 : delete this._keysSelected[t], i.toggleClass("selected", e), i.find('input[type="checkbox"]').prop("checked", e), i.prop("selected", e), e;
      }
    }, {
      key: "_setValueToInput",
      value: function value() {
        var i = [];

        if (this.$el.find("option").each(function (t) {
          if (d(t).prop("selected")) {
            var e = d(t).text();
            i.push(e);
          }
        }), !i.length) {
          var t = this.$el.find("option:disabled").eq(0);
          t.length && "" === t[0].value && i.push(t.text());
        }

        this.input.value = i.join(", ");
      }
    }, {
      key: "_setSelectedStates",
      value: function value() {
        for (var t in this._keysSelected = {}, this._valueDict) {
          var e = this._valueDict[t],
              i = d(e.el).prop("selected");
          d(e.optionEl).find('input[type="checkbox"]').prop("checked", i), i ? (this._activateOption(d(this.dropdownOptions), d(e.optionEl)), this._keysSelected[t] = !0) : d(e.optionEl).removeClass("selected");
        }
      }
    }, {
      key: "_activateOption",
      value: function value(t, e) {
        e && (this.isMultiple || t.find("li.selected").removeClass("selected"), d(e).addClass("selected"));
      }
    }, {
      key: "getSelectedValues",
      value: function value() {
        var t = [];

        for (var e in this._keysSelected) {
          t.push(this._valueDict[e].el.value);
        }

        return t;
      }
    }], [{
      key: "init",
      value: function value(t, e) {
        return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e);
      }
    }, {
      key: "getInstance",
      value: function value(t) {
        return (t.jquery ? t[0] : t).M_FormSelect;
      }
    }, {
      key: "defaults",
      get: function get() {
        return e;
      }
    }]), n;
  }();

  M.FormSelect = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "formSelect", "M_FormSelect");
}(cash), function (s, e) {
  "use strict";

  var i = {},
      t = function (t) {
    function n(t, e) {
      _classCallCheck(this, n);

      var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));

      return (i.el.M_Range = i).options = s.extend({}, n.defaults, e), i._mousedown = !1, i._setupThumb(), i._setupEventHandlers(), i;
    }

    return _inherits(n, Component), _createClass(n, [{
      key: "destroy",
      value: function value() {
        this._removeEventHandlers(), this._removeThumb(), this.el.M_Range = void 0;
      }
    }, {
      key: "_setupEventHandlers",
      value: function value() {
        this._handleRangeChangeBound = this._handleRangeChange.bind(this), this._handleRangeMousedownTouchstartBound = this._handleRangeMousedownTouchstart.bind(this), this._handleRangeInputMousemoveTouchmoveBound = this._handleRangeInputMousemoveTouchmove.bind(this), this._handleRangeMouseupTouchendBound = this._handleRangeMouseupTouchend.bind(this), this._handleRangeBlurMouseoutTouchleaveBound = this._handleRangeBlurMouseoutTouchleave.bind(this), this.el.addEventListener("change", this._handleRangeChangeBound), this.el.addEventListener("mousedown", this._handleRangeMousedownTouchstartBound), this.el.addEventListener("touchstart", this._handleRangeMousedownTouchstartBound), this.el.addEventListener("input", this._handleRangeInputMousemoveTouchmoveBound), this.el.addEventListener("mousemove", this._handleRangeInputMousemoveTouchmoveBound), this.el.addEventListener("touchmove", this._handleRangeInputMousemoveTouchmoveBound), this.el.addEventListener("mouseup", this._handleRangeMouseupTouchendBound), this.el.addEventListener("touchend", this._handleRangeMouseupTouchendBound), this.el.addEventListener("blur", this._handleRangeBlurMouseoutTouchleaveBound), this.el.addEventListener("mouseout", this._handleRangeBlurMouseoutTouchleaveBound), this.el.addEventListener("touchleave", this._handleRangeBlurMouseoutTouchleaveBound);
      }
    }, {
      key: "_removeEventHandlers",
      value: function value() {
        this.el.removeEventListener("change", this._handleRangeChangeBound), this.el.removeEventListener("mousedown", this._handleRangeMousedownTouchstartBound), this.el.removeEventListener("touchstart", this._handleRangeMousedownTouchstartBound), this.el.removeEventListener("input", this._handleRangeInputMousemoveTouchmoveBound), this.el.removeEventListener("mousemove", this._handleRangeInputMousemoveTouchmoveBound), this.el.removeEventListener("touchmove", this._handleRangeInputMousemoveTouchmoveBound), this.el.removeEventListener("mouseup", this._handleRangeMouseupTouchendBound), this.el.removeEventListener("touchend", this._handleRangeMouseupTouchendBound), this.el.removeEventListener("blur", this._handleRangeBlurMouseoutTouchleaveBound), this.el.removeEventListener("mouseout", this._handleRangeBlurMouseoutTouchleaveBound), this.el.removeEventListener("touchleave", this._handleRangeBlurMouseoutTouchleaveBound);
      }
    }, {
      key: "_handleRangeChange",
      value: function value() {
        s(this.value).html(this.$el.val()), s(this.thumb).hasClass("active") || this._showRangeBubble();

        var t = this._calcRangeOffset();

        s(this.thumb).addClass("active").css("left", t + "px");
      }
    }, {
      key: "_handleRangeMousedownTouchstart",
      value: function value(t) {
        if (s(this.value).html(this.$el.val()), this._mousedown = !0, this.$el.addClass("active"), s(this.thumb).hasClass("active") || this._showRangeBubble(), "input" !== t.type) {
          var e = this._calcRangeOffset();

          s(this.thumb).addClass("active").css("left", e + "px");
        }
      }
    }, {
      key: "_handleRangeInputMousemoveTouchmove",
      value: function value() {
        if (this._mousedown) {
          s(this.thumb).hasClass("active") || this._showRangeBubble();

          var t = this._calcRangeOffset();

          s(this.thumb).addClass("active").css("left", t + "px"), s(this.value).html(this.$el.val());
        }
      }
    }, {
      key: "_handleRangeMouseupTouchend",
      value: function value() {
        this._mousedown = !1, this.$el.removeClass("active");
      }
    }, {
      key: "_handleRangeBlurMouseoutTouchleave",
      value: function value() {
        if (!this._mousedown) {
          var t = 7 + parseInt(this.$el.css("padding-left")) + "px";
          s(this.thumb).hasClass("active") && (e.remove(this.thumb), e({
            targets: this.thumb,
            height: 0,
            width: 0,
            top: 10,
            easing: "easeOutQuad",
            marginLeft: t,
            duration: 100
          })), s(this.thumb).removeClass("active");
        }
      }
    }, {
      key: "_setupThumb",
      value: function value() {
        this.thumb = document.createElement("span"), this.value = document.createElement("span"), s(this.thumb).addClass("thumb"), s(this.value).addClass("value"), s(this.thumb).append(this.value), this.$el.after(this.thumb);
      }
    }, {
      key: "_removeThumb",
      value: function value() {
        s(this.thumb).remove();
      }
    }, {
      key: "_showRangeBubble",
      value: function value() {
        var t = -7 + parseInt(s(this.thumb).parent().css("padding-left")) + "px";
        e.remove(this.thumb), e({
          targets: this.thumb,
          height: 30,
          width: 30,
          top: -30,
          marginLeft: t,
          duration: 300,
          easing: "easeOutQuint"
        });
      }
    }, {
      key: "_calcRangeOffset",
      value: function value() {
        var t = this.$el.width() - 15,
            e = parseFloat(this.$el.attr("max")) || 100,
            i = parseFloat(this.$el.attr("min")) || 0;
        return (parseFloat(this.$el.val()) - i) / (e - i) * t;
      }
    }], [{
      key: "init",
      value: function value(t, e) {
        return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e);
      }
    }, {
      key: "getInstance",
      value: function value(t) {
        return (t.jquery ? t[0] : t).M_Range;
      }
    }, {
      key: "defaults",
      get: function get() {
        return i;
      }
    }]), n;
  }();

  M.Range = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "range", "M_Range"), t.init(s("input[type=range]"));
}(cash, M.anime);
},{}],"../node_modules/ev-emitter/ev-emitter.js":[function(require,module,exports) {
var define;
var global = arguments[3];
/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory();
  } else {
    // Browser globals
    global.EvEmitter = factory();
  }

}( typeof window != 'undefined' ? window : this, function() {

"use strict";

function EvEmitter() {}

var proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // set events hash
  var events = this._events = this._events || {};
  // set listeners array
  var listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( listeners.indexOf( listener ) == -1 ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  var onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  // copy over to avoid interference if .off() in listener
  listeners = listeners.slice(0);
  args = args || [];
  // once stuff
  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  for ( var i=0; i < listeners.length; i++ ) {
    var listener = listeners[i]
    var isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
  }

  return this;
};

proto.allOff = function() {
  delete this._events;
  delete this._onceEvents;
};

return EvEmitter;

}));

},{}],"../node_modules/get-size/get-size.js":[function(require,module,exports) {
var define;
/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */
/* globals console: false */

( function( window, factory ) {
  /* jshint strict: false */ /* globals define, module */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.getSize = factory();
  }

})( window, function factory() {
'use strict';

// -------------------------- helpers -------------------------- //

// get a number from a string, not a percentage
function getStyleSize( value ) {
  var num = parseFloat( value );
  // not a percent like '100%', and a number
  var isValid = value.indexOf('%') == -1 && !isNaN( num );
  return isValid && num;
}

function noop() {}

var logError = typeof console == 'undefined' ? noop :
  function( message ) {
    console.error( message );
  };

// -------------------------- measurements -------------------------- //

var measurements = [
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'borderBottomWidth'
];

var measurementsLength = measurements.length;

function getZeroSize() {
  var size = {
    width: 0,
    height: 0,
    innerWidth: 0,
    innerHeight: 0,
    outerWidth: 0,
    outerHeight: 0
  };
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    size[ measurement ] = 0;
  }
  return size;
}

// -------------------------- getStyle -------------------------- //

/**
 * getStyle, get style of element, check for Firefox bug
 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */
function getStyle( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    logError( 'Style returned ' + style +
      '. Are you running this code in a hidden iframe on Firefox? ' +
      'See https://bit.ly/getsizebug1' );
  }
  return style;
}

// -------------------------- setup -------------------------- //

var isSetup = false;

var isBoxSizeOuter;

/**
 * setup
 * check isBoxSizerOuter
 * do on first getSize() rather than on page load for Firefox bug
 */
function setup() {
  // setup once
  if ( isSetup ) {
    return;
  }
  isSetup = true;

  // -------------------------- box sizing -------------------------- //

  /**
   * Chrome & Safari measure the outer-width on style.width on border-box elems
   * IE11 & Firefox<29 measures the inner-width
   */
  var div = document.createElement('div');
  div.style.width = '200px';
  div.style.padding = '1px 2px 3px 4px';
  div.style.borderStyle = 'solid';
  div.style.borderWidth = '1px 2px 3px 4px';
  div.style.boxSizing = 'border-box';

  var body = document.body || document.documentElement;
  body.appendChild( div );
  var style = getStyle( div );
  // round value for browser zoom. desandro/masonry#928
  isBoxSizeOuter = Math.round( getStyleSize( style.width ) ) == 200;
  getSize.isBoxSizeOuter = isBoxSizeOuter;

  body.removeChild( div );
}

// -------------------------- getSize -------------------------- //

function getSize( elem ) {
  setup();

  // use querySeletor if elem is string
  if ( typeof elem == 'string' ) {
    elem = document.querySelector( elem );
  }

  // do not proceed on non-objects
  if ( !elem || typeof elem != 'object' || !elem.nodeType ) {
    return;
  }

  var style = getStyle( elem );

  // if hidden, everything is 0
  if ( style.display == 'none' ) {
    return getZeroSize();
  }

  var size = {};
  size.width = elem.offsetWidth;
  size.height = elem.offsetHeight;

  var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

  // get all measurements
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    var value = style[ measurement ];
    var num = parseFloat( value );
    // any 'auto', 'medium' value will be 0
    size[ measurement ] = !isNaN( num ) ? num : 0;
  }

  var paddingWidth = size.paddingLeft + size.paddingRight;
  var paddingHeight = size.paddingTop + size.paddingBottom;
  var marginWidth = size.marginLeft + size.marginRight;
  var marginHeight = size.marginTop + size.marginBottom;
  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

  // overwrite width and height if we can get it from style
  var styleWidth = getStyleSize( style.width );
  if ( styleWidth !== false ) {
    size.width = styleWidth +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
  }

  var styleHeight = getStyleSize( style.height );
  if ( styleHeight !== false ) {
    size.height = styleHeight +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
  }

  size.innerWidth = size.width - ( paddingWidth + borderWidth );
  size.innerHeight = size.height - ( paddingHeight + borderHeight );

  size.outerWidth = size.width + marginWidth;
  size.outerHeight = size.height + marginHeight;

  return size;
}

return getSize;

});

},{}],"../node_modules/desandro-matches-selector/matches-selector.js":[function(require,module,exports) {
var define;
/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  /*global define: false, module: false */
  'use strict';
  // universal module definition
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.matchesSelector = factory();
  }

}( window, function factory() {
  'use strict';

  var matchesMethod = ( function() {
    var ElemProto = window.Element.prototype;
    // check for the standard method name first
    if ( ElemProto.matches ) {
      return 'matches';
    }
    // check un-prefixed
    if ( ElemProto.matchesSelector ) {
      return 'matchesSelector';
    }
    // check vendor prefixes
    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];

    for ( var i=0; i < prefixes.length; i++ ) {
      var prefix = prefixes[i];
      var method = prefix + 'MatchesSelector';
      if ( ElemProto[ method ] ) {
        return method;
      }
    }
  })();

  return function matchesSelector( elem, selector ) {
    return elem[ matchesMethod ]( selector );
  };

}));

},{}],"../node_modules/fizzy-ui-utils/utils.js":[function(require,module,exports) {
var define;
/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( [
      'desandro-matches-selector/matches-selector'
    ], function( matchesSelector ) {
      return factory( window, matchesSelector );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('desandro-matches-selector')
    );
  } else {
    // browser global
    window.fizzyUIUtils = factory(
      window,
      window.matchesSelector
    );
  }

}( window, function factory( window, matchesSelector ) {

'use strict';

var utils = {};

// ----- extend ----- //

// extends objects
utils.extend = function( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
};

// ----- modulo ----- //

utils.modulo = function( num, div ) {
  return ( ( num % div ) + div ) % div;
};

// ----- makeArray ----- //

var arraySlice = Array.prototype.slice;

// turn element or nodeList into an array
utils.makeArray = function( obj ) {
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    return obj;
  }
  // return empty array if undefined or null. #6
  if ( obj === null || obj === undefined ) {
    return [];
  }

  var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  if ( isArrayLike ) {
    // convert nodeList to array
    return arraySlice.call( obj );
  }

  // array of single index
  return [ obj ];
};

// ----- removeFrom ----- //

utils.removeFrom = function( ary, obj ) {
  var index = ary.indexOf( obj );
  if ( index != -1 ) {
    ary.splice( index, 1 );
  }
};

// ----- getParent ----- //

utils.getParent = function( elem, selector ) {
  while ( elem.parentNode && elem != document.body ) {
    elem = elem.parentNode;
    if ( matchesSelector( elem, selector ) ) {
      return elem;
    }
  }
};

// ----- getQueryElement ----- //

// use element as selector string
utils.getQueryElement = function( elem ) {
  if ( typeof elem == 'string' ) {
    return document.querySelector( elem );
  }
  return elem;
};

// ----- handleEvent ----- //

// enable .ontype to trigger from .addEventListener( elem, 'type' )
utils.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// ----- filterFindElements ----- //

utils.filterFindElements = function( elems, selector ) {
  // make array of elems
  elems = utils.makeArray( elems );
  var ffElems = [];

  elems.forEach( function( elem ) {
    // check that elem is an actual element
    if ( !( elem instanceof HTMLElement ) ) {
      return;
    }
    // add elem if no selector
    if ( !selector ) {
      ffElems.push( elem );
      return;
    }
    // filter & find items if we have a selector
    // filter
    if ( matchesSelector( elem, selector ) ) {
      ffElems.push( elem );
    }
    // find children
    var childElems = elem.querySelectorAll( selector );
    // concat childElems to filterFound array
    for ( var i=0; i < childElems.length; i++ ) {
      ffElems.push( childElems[i] );
    }
  });

  return ffElems;
};

// ----- debounceMethod ----- //

utils.debounceMethod = function( _class, methodName, threshold ) {
  threshold = threshold || 100;
  // original method
  var method = _class.prototype[ methodName ];
  var timeoutName = methodName + 'Timeout';

  _class.prototype[ methodName ] = function() {
    var timeout = this[ timeoutName ];
    clearTimeout( timeout );

    var args = arguments;
    var _this = this;
    this[ timeoutName ] = setTimeout( function() {
      method.apply( _this, args );
      delete _this[ timeoutName ];
    }, threshold );
  };
};

// ----- docReady ----- //

utils.docReady = function( callback ) {
  var readyState = document.readyState;
  if ( readyState == 'complete' || readyState == 'interactive' ) {
    // do async to allow for other scripts to run. metafizzy/flickity#441
    setTimeout( callback );
  } else {
    document.addEventListener( 'DOMContentLoaded', callback );
  }
};

// ----- htmlInit ----- //

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
utils.toDashed = function( str ) {
  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
    return $1 + '-' + $2;
  }).toLowerCase();
};

var console = window.console;
/**
 * allow user to initialize classes via [data-namespace] or .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-options
 */
utils.htmlInit = function( WidgetClass, namespace ) {
  utils.docReady( function() {
    var dashedNamespace = utils.toDashed( namespace );
    var dataAttr = 'data-' + dashedNamespace;
    var dataAttrElems = document.querySelectorAll( '[' + dataAttr + ']' );
    var jsDashElems = document.querySelectorAll( '.js-' + dashedNamespace );
    var elems = utils.makeArray( dataAttrElems )
      .concat( utils.makeArray( jsDashElems ) );
    var dataOptionsAttr = dataAttr + '-options';
    var jQuery = window.jQuery;

    elems.forEach( function( elem ) {
      var attr = elem.getAttribute( dataAttr ) ||
        elem.getAttribute( dataOptionsAttr );
      var options;
      try {
        options = attr && JSON.parse( attr );
      } catch ( error ) {
        // log error, do not initialize
        if ( console ) {
          console.error( 'Error parsing ' + dataAttr + ' on ' + elem.className +
          ': ' + error );
        }
        return;
      }
      // initialize
      var instance = new WidgetClass( elem, options );
      // make available via $().data('namespace')
      if ( jQuery ) {
        jQuery.data( elem, namespace, instance );
      }
    });

  });
};

// -----  ----- //

return utils;

}));

},{"desandro-matches-selector":"../node_modules/desandro-matches-selector/matches-selector.js"}],"../node_modules/outlayer/item.js":[function(require,module,exports) {
var define;
/**
 * Outlayer Item
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( [
        'ev-emitter/ev-emitter',
        'get-size/get-size'
      ],
      factory
    );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory(
      require('ev-emitter'),
      require('get-size')
    );
  } else {
    // browser global
    window.Outlayer = {};
    window.Outlayer.Item = factory(
      window.EvEmitter,
      window.getSize
    );
  }

}( window, function factory( EvEmitter, getSize ) {
'use strict';

// ----- helpers ----- //

function isEmptyObj( obj ) {
  for ( var prop in obj ) {
    return false;
  }
  prop = null;
  return true;
}

// -------------------------- CSS3 support -------------------------- //


var docElemStyle = document.documentElement.style;

var transitionProperty = typeof docElemStyle.transition == 'string' ?
  'transition' : 'WebkitTransition';
var transformProperty = typeof docElemStyle.transform == 'string' ?
  'transform' : 'WebkitTransform';

var transitionEndEvent = {
  WebkitTransition: 'webkitTransitionEnd',
  transition: 'transitionend'
}[ transitionProperty ];

// cache all vendor properties that could have vendor prefix
var vendorProperties = {
  transform: transformProperty,
  transition: transitionProperty,
  transitionDuration: transitionProperty + 'Duration',
  transitionProperty: transitionProperty + 'Property',
  transitionDelay: transitionProperty + 'Delay'
};

// -------------------------- Item -------------------------- //

function Item( element, layout ) {
  if ( !element ) {
    return;
  }

  this.element = element;
  // parent layout class, i.e. Masonry, Isotope, or Packery
  this.layout = layout;
  this.position = {
    x: 0,
    y: 0
  };

  this._create();
}

// inherit EvEmitter
var proto = Item.prototype = Object.create( EvEmitter.prototype );
proto.constructor = Item;

proto._create = function() {
  // transition objects
  this._transn = {
    ingProperties: {},
    clean: {},
    onEnd: {}
  };

  this.css({
    position: 'absolute'
  });
};

// trigger specified handler for event type
proto.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * apply CSS styles to element
 * @param {Object} style
 */
proto.css = function( style ) {
  var elemStyle = this.element.style;

  for ( var prop in style ) {
    // use vendor property if available
    var supportedProp = vendorProperties[ prop ] || prop;
    elemStyle[ supportedProp ] = style[ prop ];
  }
};

 // measure position, and sets it
proto.getPosition = function() {
  var style = getComputedStyle( this.element );
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  var xValue = style[ isOriginLeft ? 'left' : 'right' ];
  var yValue = style[ isOriginTop ? 'top' : 'bottom' ];
  var x = parseFloat( xValue );
  var y = parseFloat( yValue );
  // convert percent to pixels
  var layoutSize = this.layout.size;
  if ( xValue.indexOf('%') != -1 ) {
    x = ( x / 100 ) * layoutSize.width;
  }
  if ( yValue.indexOf('%') != -1 ) {
    y = ( y / 100 ) * layoutSize.height;
  }
  // clean up 'auto' or other non-integer values
  x = isNaN( x ) ? 0 : x;
  y = isNaN( y ) ? 0 : y;
  // remove padding from measurement
  x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
  y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;

  this.position.x = x;
  this.position.y = y;
};

// set settled position, apply padding
proto.layoutPosition = function() {
  var layoutSize = this.layout.size;
  var style = {};
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');

  // x
  var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
  var xProperty = isOriginLeft ? 'left' : 'right';
  var xResetProperty = isOriginLeft ? 'right' : 'left';

  var x = this.position.x + layoutSize[ xPadding ];
  // set in percentage or pixels
  style[ xProperty ] = this.getXValue( x );
  // reset other property
  style[ xResetProperty ] = '';

  // y
  var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
  var yProperty = isOriginTop ? 'top' : 'bottom';
  var yResetProperty = isOriginTop ? 'bottom' : 'top';

  var y = this.position.y + layoutSize[ yPadding ];
  // set in percentage or pixels
  style[ yProperty ] = this.getYValue( y );
  // reset other property
  style[ yResetProperty ] = '';

  this.css( style );
  this.emitEvent( 'layout', [ this ] );
};

proto.getXValue = function( x ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && !isHorizontal ?
    ( ( x / this.layout.size.width ) * 100 ) + '%' : x + 'px';
};

proto.getYValue = function( y ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && isHorizontal ?
    ( ( y / this.layout.size.height ) * 100 ) + '%' : y + 'px';
};

proto._transitionTo = function( x, y ) {
  this.getPosition();
  // get current x & y from top/left
  var curX = this.position.x;
  var curY = this.position.y;

  var didNotMove = x == this.position.x && y == this.position.y;

  // save end position
  this.setPosition( x, y );

  // if did not move and not transitioning, just go to layout
  if ( didNotMove && !this.isTransitioning ) {
    this.layoutPosition();
    return;
  }

  var transX = x - curX;
  var transY = y - curY;
  var transitionStyle = {};
  transitionStyle.transform = this.getTranslate( transX, transY );

  this.transition({
    to: transitionStyle,
    onTransitionEnd: {
      transform: this.layoutPosition
    },
    isCleaning: true
  });
};

proto.getTranslate = function( x, y ) {
  // flip cooridinates if origin on right or bottom
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  x = isOriginLeft ? x : -x;
  y = isOriginTop ? y : -y;
  return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
};

// non transition + transform support
proto.goTo = function( x, y ) {
  this.setPosition( x, y );
  this.layoutPosition();
};

proto.moveTo = proto._transitionTo;

proto.setPosition = function( x, y ) {
  this.position.x = parseFloat( x );
  this.position.y = parseFloat( y );
};

// ----- transition ----- //

/**
 * @param {Object} style - CSS
 * @param {Function} onTransitionEnd
 */

// non transition, just trigger callback
proto._nonTransition = function( args ) {
  this.css( args.to );
  if ( args.isCleaning ) {
    this._removeStyles( args.to );
  }
  for ( var prop in args.onTransitionEnd ) {
    args.onTransitionEnd[ prop ].call( this );
  }
};

/**
 * proper transition
 * @param {Object} args - arguments
 *   @param {Object} to - style to transition to
 *   @param {Object} from - style to start transition from
 *   @param {Boolean} isCleaning - removes transition styles after transition
 *   @param {Function} onTransitionEnd - callback
 */
proto.transition = function( args ) {
  // redirect to nonTransition if no transition duration
  if ( !parseFloat( this.layout.options.transitionDuration ) ) {
    this._nonTransition( args );
    return;
  }

  var _transition = this._transn;
  // keep track of onTransitionEnd callback by css property
  for ( var prop in args.onTransitionEnd ) {
    _transition.onEnd[ prop ] = args.onTransitionEnd[ prop ];
  }
  // keep track of properties that are transitioning
  for ( prop in args.to ) {
    _transition.ingProperties[ prop ] = true;
    // keep track of properties to clean up when transition is done
    if ( args.isCleaning ) {
      _transition.clean[ prop ] = true;
    }
  }

  // set from styles
  if ( args.from ) {
    this.css( args.from );
    // force redraw. http://blog.alexmaccaw.com/css-transitions
    var h = this.element.offsetHeight;
    // hack for JSHint to hush about unused var
    h = null;
  }
  // enable transition
  this.enableTransition( args.to );
  // set styles that are transitioning
  this.css( args.to );

  this.isTransitioning = true;

};

// dash before all cap letters, including first for
// WebkitTransform => -webkit-transform
function toDashedAll( str ) {
  return str.replace( /([A-Z])/g, function( $1 ) {
    return '-' + $1.toLowerCase();
  });
}

var transitionProps = 'opacity,' + toDashedAll( transformProperty );

proto.enableTransition = function(/* style */) {
  // HACK changing transitionProperty during a transition
  // will cause transition to jump
  if ( this.isTransitioning ) {
    return;
  }

  // make `transition: foo, bar, baz` from style object
  // HACK un-comment this when enableTransition can work
  // while a transition is happening
  // var transitionValues = [];
  // for ( var prop in style ) {
  //   // dash-ify camelCased properties like WebkitTransition
  //   prop = vendorProperties[ prop ] || prop;
  //   transitionValues.push( toDashedAll( prop ) );
  // }
  // munge number to millisecond, to match stagger
  var duration = this.layout.options.transitionDuration;
  duration = typeof duration == 'number' ? duration + 'ms' : duration;
  // enable transition styles
  this.css({
    transitionProperty: transitionProps,
    transitionDuration: duration,
    transitionDelay: this.staggerDelay || 0
  });
  // listen for transition end event
  this.element.addEventListener( transitionEndEvent, this, false );
};

// ----- events ----- //

proto.onwebkitTransitionEnd = function( event ) {
  this.ontransitionend( event );
};

proto.onotransitionend = function( event ) {
  this.ontransitionend( event );
};

// properties that I munge to make my life easier
var dashedVendorProperties = {
  '-webkit-transform': 'transform'
};

proto.ontransitionend = function( event ) {
  // disregard bubbled events from children
  if ( event.target !== this.element ) {
    return;
  }
  var _transition = this._transn;
  // get property name of transitioned property, convert to prefix-free
  var propertyName = dashedVendorProperties[ event.propertyName ] || event.propertyName;

  // remove property that has completed transitioning
  delete _transition.ingProperties[ propertyName ];
  // check if any properties are still transitioning
  if ( isEmptyObj( _transition.ingProperties ) ) {
    // all properties have completed transitioning
    this.disableTransition();
  }
  // clean style
  if ( propertyName in _transition.clean ) {
    // clean up style
    this.element.style[ event.propertyName ] = '';
    delete _transition.clean[ propertyName ];
  }
  // trigger onTransitionEnd callback
  if ( propertyName in _transition.onEnd ) {
    var onTransitionEnd = _transition.onEnd[ propertyName ];
    onTransitionEnd.call( this );
    delete _transition.onEnd[ propertyName ];
  }

  this.emitEvent( 'transitionEnd', [ this ] );
};

proto.disableTransition = function() {
  this.removeTransitionStyles();
  this.element.removeEventListener( transitionEndEvent, this, false );
  this.isTransitioning = false;
};

/**
 * removes style property from element
 * @param {Object} style
**/
proto._removeStyles = function( style ) {
  // clean up transition styles
  var cleanStyle = {};
  for ( var prop in style ) {
    cleanStyle[ prop ] = '';
  }
  this.css( cleanStyle );
};

var cleanTransitionStyle = {
  transitionProperty: '',
  transitionDuration: '',
  transitionDelay: ''
};

proto.removeTransitionStyles = function() {
  // remove transition
  this.css( cleanTransitionStyle );
};

// ----- stagger ----- //

proto.stagger = function( delay ) {
  delay = isNaN( delay ) ? 0 : delay;
  this.staggerDelay = delay + 'ms';
};

// ----- show/hide/remove ----- //

// remove element from DOM
proto.removeElem = function() {
  this.element.parentNode.removeChild( this.element );
  // remove display: none
  this.css({ display: '' });
  this.emitEvent( 'remove', [ this ] );
};

proto.remove = function() {
  // just remove element if no transition support or no transition
  if ( !transitionProperty || !parseFloat( this.layout.options.transitionDuration ) ) {
    this.removeElem();
    return;
  }

  // start transition
  this.once( 'transitionEnd', function() {
    this.removeElem();
  });
  this.hide();
};

proto.reveal = function() {
  delete this.isHidden;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onRevealTransitionEnd;

  this.transition({
    from: options.hiddenStyle,
    to: options.visibleStyle,
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onRevealTransitionEnd = function() {
  // check if still visible
  // during transition, item may have been hidden
  if ( !this.isHidden ) {
    this.emitEvent('reveal');
  }
};

/**
 * get style property use for hide/reveal transition end
 * @param {String} styleProperty - hiddenStyle/visibleStyle
 * @returns {String}
 */
proto.getHideRevealTransitionEndProperty = function( styleProperty ) {
  var optionStyle = this.layout.options[ styleProperty ];
  // use opacity
  if ( optionStyle.opacity ) {
    return 'opacity';
  }
  // get first property
  for ( var prop in optionStyle ) {
    return prop;
  }
};

proto.hide = function() {
  // set flag
  this.isHidden = true;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onHideTransitionEnd;

  this.transition({
    from: options.visibleStyle,
    to: options.hiddenStyle,
    // keep hidden stuff hidden
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onHideTransitionEnd = function() {
  // check if still hidden
  // during transition, item may have been un-hidden
  if ( this.isHidden ) {
    this.css({ display: 'none' });
    this.emitEvent('hide');
  }
};

proto.destroy = function() {
  this.css({
    position: '',
    left: '',
    right: '',
    top: '',
    bottom: '',
    transition: '',
    transform: ''
  });
};

return Item;

}));

},{"ev-emitter":"../node_modules/ev-emitter/ev-emitter.js","get-size":"../node_modules/get-size/get-size.js"}],"../node_modules/outlayer/outlayer.js":[function(require,module,exports) {
var define;
/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */

( function( window, factory ) {
  'use strict';
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( [
        'ev-emitter/ev-emitter',
        'get-size/get-size',
        'fizzy-ui-utils/utils',
        './item'
      ],
      function( EvEmitter, getSize, utils, Item ) {
        return factory( window, EvEmitter, getSize, utils, Item);
      }
    );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory(
      window,
      require('ev-emitter'),
      require('get-size'),
      require('fizzy-ui-utils'),
      require('./item')
    );
  } else {
    // browser global
    window.Outlayer = factory(
      window,
      window.EvEmitter,
      window.getSize,
      window.fizzyUIUtils,
      window.Outlayer.Item
    );
  }

}( window, function factory( window, EvEmitter, getSize, utils, Item ) {
'use strict';

// ----- vars ----- //

var console = window.console;
var jQuery = window.jQuery;
var noop = function() {};

// -------------------------- Outlayer -------------------------- //

// globally unique identifiers
var GUID = 0;
// internal store of all Outlayer intances
var instances = {};


/**
 * @param {Element, String} element
 * @param {Object} options
 * @constructor
 */
function Outlayer( element, options ) {
  var queryElement = utils.getQueryElement( element );
  if ( !queryElement ) {
    if ( console ) {
      console.error( 'Bad element for ' + this.constructor.namespace +
        ': ' + ( queryElement || element ) );
    }
    return;
  }
  this.element = queryElement;
  // add jQuery
  if ( jQuery ) {
    this.$element = jQuery( this.element );
  }

  // options
  this.options = utils.extend( {}, this.constructor.defaults );
  this.option( options );

  // add id for Outlayer.getFromElement
  var id = ++GUID;
  this.element.outlayerGUID = id; // expando
  instances[ id ] = this; // associate via id

  // kick it off
  this._create();

  var isInitLayout = this._getOption('initLayout');
  if ( isInitLayout ) {
    this.layout();
  }
}

// settings are for internal use only
Outlayer.namespace = 'outlayer';
Outlayer.Item = Item;

// default options
Outlayer.defaults = {
  containerStyle: {
    position: 'relative'
  },
  initLayout: true,
  originLeft: true,
  originTop: true,
  resize: true,
  resizeContainer: true,
  // item options
  transitionDuration: '0.4s',
  hiddenStyle: {
    opacity: 0,
    transform: 'scale(0.001)'
  },
  visibleStyle: {
    opacity: 1,
    transform: 'scale(1)'
  }
};

var proto = Outlayer.prototype;
// inherit EvEmitter
utils.extend( proto, EvEmitter.prototype );

/**
 * set options
 * @param {Object} opts
 */
proto.option = function( opts ) {
  utils.extend( this.options, opts );
};

/**
 * get backwards compatible option value, check old name
 */
proto._getOption = function( option ) {
  var oldOption = this.constructor.compatOptions[ option ];
  return oldOption && this.options[ oldOption ] !== undefined ?
    this.options[ oldOption ] : this.options[ option ];
};

Outlayer.compatOptions = {
  // currentName: oldName
  initLayout: 'isInitLayout',
  horizontal: 'isHorizontal',
  layoutInstant: 'isLayoutInstant',
  originLeft: 'isOriginLeft',
  originTop: 'isOriginTop',
  resize: 'isResizeBound',
  resizeContainer: 'isResizingContainer'
};

proto._create = function() {
  // get items from children
  this.reloadItems();
  // elements that affect layout, but are not laid out
  this.stamps = [];
  this.stamp( this.options.stamp );
  // set container style
  utils.extend( this.element.style, this.options.containerStyle );

  // bind resize method
  var canBindResize = this._getOption('resize');
  if ( canBindResize ) {
    this.bindResize();
  }
};

// goes through all children again and gets bricks in proper order
proto.reloadItems = function() {
  // collection of item elements
  this.items = this._itemize( this.element.children );
};


/**
 * turn elements into Outlayer.Items to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Outlayer Items
 */
proto._itemize = function( elems ) {

  var itemElems = this._filterFindItemElements( elems );
  var Item = this.constructor.Item;

  // create new Outlayer Items for collection
  var items = [];
  for ( var i=0; i < itemElems.length; i++ ) {
    var elem = itemElems[i];
    var item = new Item( elem, this );
    items.push( item );
  }

  return items;
};

/**
 * get item elements to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - item elements
 */
proto._filterFindItemElements = function( elems ) {
  return utils.filterFindElements( elems, this.options.itemSelector );
};

/**
 * getter method for getting item elements
 * @returns {Array} elems - collection of item elements
 */
proto.getItemElements = function() {
  return this.items.map( function( item ) {
    return item.element;
  });
};

// ----- init & layout ----- //

/**
 * lays out all items
 */
proto.layout = function() {
  this._resetLayout();
  this._manageStamps();

  // don't animate first layout
  var layoutInstant = this._getOption('layoutInstant');
  var isInstant = layoutInstant !== undefined ?
    layoutInstant : !this._isLayoutInited;
  this.layoutItems( this.items, isInstant );

  // flag for initalized
  this._isLayoutInited = true;
};

// _init is alias for layout
proto._init = proto.layout;

/**
 * logic before any new layout
 */
proto._resetLayout = function() {
  this.getSize();
};


proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * get measurement from option, for columnWidth, rowHeight, gutter
 * if option is String -> get element from selector string, & get size of element
 * if option is Element -> get size of element
 * else use option as a number
 *
 * @param {String} measurement
 * @param {String} size - width or height
 * @private
 */
proto._getMeasurement = function( measurement, size ) {
  var option = this.options[ measurement ];
  var elem;
  if ( !option ) {
    // default to 0
    this[ measurement ] = 0;
  } else {
    // use option as an element
    if ( typeof option == 'string' ) {
      elem = this.element.querySelector( option );
    } else if ( option instanceof HTMLElement ) {
      elem = option;
    }
    // use size of element, if element
    this[ measurement ] = elem ? getSize( elem )[ size ] : option;
  }
};

/**
 * layout a collection of item elements
 * @api public
 */
proto.layoutItems = function( items, isInstant ) {
  items = this._getItemsForLayout( items );

  this._layoutItems( items, isInstant );

  this._postLayout();
};

/**
 * get the items to be laid out
 * you may want to skip over some items
 * @param {Array} items
 * @returns {Array} items
 */
proto._getItemsForLayout = function( items ) {
  return items.filter( function( item ) {
    return !item.isIgnored;
  });
};

/**
 * layout items
 * @param {Array} items
 * @param {Boolean} isInstant
 */
proto._layoutItems = function( items, isInstant ) {
  this._emitCompleteOnItems( 'layout', items );

  if ( !items || !items.length ) {
    // no items, emit event with empty array
    return;
  }

  var queue = [];

  items.forEach( function( item ) {
    // get x/y object from method
    var position = this._getItemLayoutPosition( item );
    // enqueue
    position.item = item;
    position.isInstant = isInstant || item.isLayoutInstant;
    queue.push( position );
  }, this );

  this._processLayoutQueue( queue );
};

/**
 * get item layout position
 * @param {Outlayer.Item} item
 * @returns {Object} x and y position
 */
proto._getItemLayoutPosition = function( /* item */ ) {
  return {
    x: 0,
    y: 0
  };
};

/**
 * iterate over array and position each item
 * Reason being - separating this logic prevents 'layout invalidation'
 * thx @paul_irish
 * @param {Array} queue
 */
proto._processLayoutQueue = function( queue ) {
  this.updateStagger();
  queue.forEach( function( obj, i ) {
    this._positionItem( obj.item, obj.x, obj.y, obj.isInstant, i );
  }, this );
};

// set stagger from option in milliseconds number
proto.updateStagger = function() {
  var stagger = this.options.stagger;
  if ( stagger === null || stagger === undefined ) {
    this.stagger = 0;
    return;
  }
  this.stagger = getMilliseconds( stagger );
  return this.stagger;
};

/**
 * Sets position of item in DOM
 * @param {Outlayer.Item} item
 * @param {Number} x - horizontal position
 * @param {Number} y - vertical position
 * @param {Boolean} isInstant - disables transitions
 */
proto._positionItem = function( item, x, y, isInstant, i ) {
  if ( isInstant ) {
    // if not transition, just set CSS
    item.goTo( x, y );
  } else {
    item.stagger( i * this.stagger );
    item.moveTo( x, y );
  }
};

/**
 * Any logic you want to do after each layout,
 * i.e. size the container
 */
proto._postLayout = function() {
  this.resizeContainer();
};

proto.resizeContainer = function() {
  var isResizingContainer = this._getOption('resizeContainer');
  if ( !isResizingContainer ) {
    return;
  }
  var size = this._getContainerSize();
  if ( size ) {
    this._setContainerMeasure( size.width, true );
    this._setContainerMeasure( size.height, false );
  }
};

/**
 * Sets width or height of container if returned
 * @returns {Object} size
 *   @param {Number} width
 *   @param {Number} height
 */
proto._getContainerSize = noop;

/**
 * @param {Number} measure - size of width or height
 * @param {Boolean} isWidth
 */
proto._setContainerMeasure = function( measure, isWidth ) {
  if ( measure === undefined ) {
    return;
  }

  var elemSize = this.size;
  // add padding and border width if border box
  if ( elemSize.isBorderBox ) {
    measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
      elemSize.borderLeftWidth + elemSize.borderRightWidth :
      elemSize.paddingBottom + elemSize.paddingTop +
      elemSize.borderTopWidth + elemSize.borderBottomWidth;
  }

  measure = Math.max( measure, 0 );
  this.element.style[ isWidth ? 'width' : 'height' ] = measure + 'px';
};

/**
 * emit eventComplete on a collection of items events
 * @param {String} eventName
 * @param {Array} items - Outlayer.Items
 */
proto._emitCompleteOnItems = function( eventName, items ) {
  var _this = this;
  function onComplete() {
    _this.dispatchEvent( eventName + 'Complete', null, [ items ] );
  }

  var count = items.length;
  if ( !items || !count ) {
    onComplete();
    return;
  }

  var doneCount = 0;
  function tick() {
    doneCount++;
    if ( doneCount == count ) {
      onComplete();
    }
  }

  // bind callback
  items.forEach( function( item ) {
    item.once( eventName, tick );
  });
};

/**
 * emits events via EvEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */
proto.dispatchEvent = function( type, event, args ) {
  // add original event to arguments
  var emitArgs = event ? [ event ].concat( args ) : args;
  this.emitEvent( type, emitArgs );

  if ( jQuery ) {
    // set this.$element
    this.$element = this.$element || jQuery( this.element );
    if ( event ) {
      // create jQuery event
      var $event = jQuery.Event( event );
      $event.type = type;
      this.$element.trigger( $event, args );
    } else {
      // just trigger with type if no event available
      this.$element.trigger( type, args );
    }
  }
};

// -------------------------- ignore & stamps -------------------------- //


/**
 * keep item in collection, but do not lay it out
 * ignored items do not get skipped in layout
 * @param {Element} elem
 */
proto.ignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    item.isIgnored = true;
  }
};

/**
 * return item to layout collection
 * @param {Element} elem
 */
proto.unignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    delete item.isIgnored;
  }
};

/**
 * adds elements to stamps
 * @param {NodeList, Array, Element, or String} elems
 */
proto.stamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ) {
    return;
  }

  this.stamps = this.stamps.concat( elems );
  // ignore
  elems.forEach( this.ignore, this );
};

/**
 * removes elements to stamps
 * @param {NodeList, Array, or Element} elems
 */
proto.unstamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ){
    return;
  }

  elems.forEach( function( elem ) {
    // filter out removed stamp elements
    utils.removeFrom( this.stamps, elem );
    this.unignore( elem );
  }, this );
};

/**
 * finds child elements
 * @param {NodeList, Array, Element, or String} elems
 * @returns {Array} elems
 */
proto._find = function( elems ) {
  if ( !elems ) {
    return;
  }
  // if string, use argument as selector string
  if ( typeof elems == 'string' ) {
    elems = this.element.querySelectorAll( elems );
  }
  elems = utils.makeArray( elems );
  return elems;
};

proto._manageStamps = function() {
  if ( !this.stamps || !this.stamps.length ) {
    return;
  }

  this._getBoundingRect();

  this.stamps.forEach( this._manageStamp, this );
};

// update boundingLeft / Top
proto._getBoundingRect = function() {
  // get bounding rect for container element
  var boundingRect = this.element.getBoundingClientRect();
  var size = this.size;
  this._boundingRect = {
    left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
    top: boundingRect.top + size.paddingTop + size.borderTopWidth,
    right: boundingRect.right - ( size.paddingRight + size.borderRightWidth ),
    bottom: boundingRect.bottom - ( size.paddingBottom + size.borderBottomWidth )
  };
};

/**
 * @param {Element} stamp
**/
proto._manageStamp = noop;

/**
 * get x/y position of element relative to container element
 * @param {Element} elem
 * @returns {Object} offset - has left, top, right, bottom
 */
proto._getElementOffset = function( elem ) {
  var boundingRect = elem.getBoundingClientRect();
  var thisRect = this._boundingRect;
  var size = getSize( elem );
  var offset = {
    left: boundingRect.left - thisRect.left - size.marginLeft,
    top: boundingRect.top - thisRect.top - size.marginTop,
    right: thisRect.right - boundingRect.right - size.marginRight,
    bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
  };
  return offset;
};

// -------------------------- resize -------------------------- //

// enable event handlers for listeners
// i.e. resize -> onresize
proto.handleEvent = utils.handleEvent;

/**
 * Bind layout to window resizing
 */
proto.bindResize = function() {
  window.addEventListener( 'resize', this );
  this.isResizeBound = true;
};

/**
 * Unbind layout to window resizing
 */
proto.unbindResize = function() {
  window.removeEventListener( 'resize', this );
  this.isResizeBound = false;
};

proto.onresize = function() {
  this.resize();
};

utils.debounceMethod( Outlayer, 'onresize', 100 );

proto.resize = function() {
  // don't trigger if size did not change
  // or if resize was unbound. See #9
  if ( !this.isResizeBound || !this.needsResizeLayout() ) {
    return;
  }

  this.layout();
};

/**
 * check if layout is needed post layout
 * @returns Boolean
 */
proto.needsResizeLayout = function() {
  var size = getSize( this.element );
  // check that this.size and size are there
  // IE8 triggers resize on body size change, so they might not be
  var hasSizes = this.size && size;
  return hasSizes && size.innerWidth !== this.size.innerWidth;
};

// -------------------------- methods -------------------------- //

/**
 * add items to Outlayer instance
 * @param {Array or NodeList or Element} elems
 * @returns {Array} items - Outlayer.Items
**/
proto.addItems = function( elems ) {
  var items = this._itemize( elems );
  // add items to collection
  if ( items.length ) {
    this.items = this.items.concat( items );
  }
  return items;
};

/**
 * Layout newly-appended item elements
 * @param {Array or NodeList or Element} elems
 */
proto.appended = function( elems ) {
  var items = this.addItems( elems );
  if ( !items.length ) {
    return;
  }
  // layout and reveal just the new items
  this.layoutItems( items, true );
  this.reveal( items );
};

/**
 * Layout prepended elements
 * @param {Array or NodeList or Element} elems
 */
proto.prepended = function( elems ) {
  var items = this._itemize( elems );
  if ( !items.length ) {
    return;
  }
  // add items to beginning of collection
  var previousItems = this.items.slice(0);
  this.items = items.concat( previousItems );
  // start new layout
  this._resetLayout();
  this._manageStamps();
  // layout new stuff without transition
  this.layoutItems( items, true );
  this.reveal( items );
  // layout previous items
  this.layoutItems( previousItems );
};

/**
 * reveal a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.reveal = function( items ) {
  this._emitCompleteOnItems( 'reveal', items );
  if ( !items || !items.length ) {
    return;
  }
  var stagger = this.updateStagger();
  items.forEach( function( item, i ) {
    item.stagger( i * stagger );
    item.reveal();
  });
};

/**
 * hide a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.hide = function( items ) {
  this._emitCompleteOnItems( 'hide', items );
  if ( !items || !items.length ) {
    return;
  }
  var stagger = this.updateStagger();
  items.forEach( function( item, i ) {
    item.stagger( i * stagger );
    item.hide();
  });
};

/**
 * reveal item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.revealItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.reveal( items );
};

/**
 * hide item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.hideItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.hide( items );
};

/**
 * get Outlayer.Item, given an Element
 * @param {Element} elem
 * @param {Function} callback
 * @returns {Outlayer.Item} item
 */
proto.getItem = function( elem ) {
  // loop through items to get the one that matches
  for ( var i=0; i < this.items.length; i++ ) {
    var item = this.items[i];
    if ( item.element == elem ) {
      // return item
      return item;
    }
  }
};

/**
 * get collection of Outlayer.Items, given Elements
 * @param {Array} elems
 * @returns {Array} items - Outlayer.Items
 */
proto.getItems = function( elems ) {
  elems = utils.makeArray( elems );
  var items = [];
  elems.forEach( function( elem ) {
    var item = this.getItem( elem );
    if ( item ) {
      items.push( item );
    }
  }, this );

  return items;
};

/**
 * remove element(s) from instance and DOM
 * @param {Array or NodeList or Element} elems
 */
proto.remove = function( elems ) {
  var removeItems = this.getItems( elems );

  this._emitCompleteOnItems( 'remove', removeItems );

  // bail if no items to remove
  if ( !removeItems || !removeItems.length ) {
    return;
  }

  removeItems.forEach( function( item ) {
    item.remove();
    // remove item from collection
    utils.removeFrom( this.items, item );
  }, this );
};

// ----- destroy ----- //

// remove and disable Outlayer instance
proto.destroy = function() {
  // clean up dynamic styles
  var style = this.element.style;
  style.height = '';
  style.position = '';
  style.width = '';
  // destroy items
  this.items.forEach( function( item ) {
    item.destroy();
  });

  this.unbindResize();

  var id = this.element.outlayerGUID;
  delete instances[ id ]; // remove reference to instance by id
  delete this.element.outlayerGUID;
  // remove data for jQuery
  if ( jQuery ) {
    jQuery.removeData( this.element, this.constructor.namespace );
  }

};

// -------------------------- data -------------------------- //

/**
 * get Outlayer instance from element
 * @param {Element} elem
 * @returns {Outlayer}
 */
Outlayer.data = function( elem ) {
  elem = utils.getQueryElement( elem );
  var id = elem && elem.outlayerGUID;
  return id && instances[ id ];
};


// -------------------------- create Outlayer class -------------------------- //

/**
 * create a layout class
 * @param {String} namespace
 */
Outlayer.create = function( namespace, options ) {
  // sub-class Outlayer
  var Layout = subclass( Outlayer );
  // apply new options and compatOptions
  Layout.defaults = utils.extend( {}, Outlayer.defaults );
  utils.extend( Layout.defaults, options );
  Layout.compatOptions = utils.extend( {}, Outlayer.compatOptions  );

  Layout.namespace = namespace;

  Layout.data = Outlayer.data;

  // sub-class Item
  Layout.Item = subclass( Item );

  // -------------------------- declarative -------------------------- //

  utils.htmlInit( Layout, namespace );

  // -------------------------- jQuery bridge -------------------------- //

  // make into jQuery plugin
  if ( jQuery && jQuery.bridget ) {
    jQuery.bridget( namespace, Layout );
  }

  return Layout;
};

function subclass( Parent ) {
  function SubClass() {
    Parent.apply( this, arguments );
  }

  SubClass.prototype = Object.create( Parent.prototype );
  SubClass.prototype.constructor = SubClass;

  return SubClass;
}

// ----- helpers ----- //

// how many milliseconds are in each unit
var msUnits = {
  ms: 1,
  s: 1000
};

// munge time-like parameter into millisecond number
// '0.4s' -> 40
function getMilliseconds( time ) {
  if ( typeof time == 'number' ) {
    return time;
  }
  var matches = time.match( /(^\d*\.?\d*)(\w*)/ );
  var num = matches && matches[1];
  var unit = matches && matches[2];
  if ( !num.length ) {
    return 0;
  }
  num = parseFloat( num );
  var mult = msUnits[ unit ] || 1;
  return num * mult;
}

// ----- fin ----- //

// back in global
Outlayer.Item = Item;

return Outlayer;

}));

},{"ev-emitter":"../node_modules/ev-emitter/ev-emitter.js","get-size":"../node_modules/get-size/get-size.js","fizzy-ui-utils":"../node_modules/fizzy-ui-utils/utils.js","./item":"../node_modules/outlayer/item.js"}],"../node_modules/masonry-layout/masonry.js":[function(require,module,exports) {
var define;
/*!
 * Masonry v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( [
        'outlayer/outlayer',
        'get-size/get-size'
      ],
      factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('outlayer'),
      require('get-size')
    );
  } else {
    // browser global
    window.Masonry = factory(
      window.Outlayer,
      window.getSize
    );
  }

}( window, function factory( Outlayer, getSize ) {

'use strict';

// -------------------------- masonryDefinition -------------------------- //

  // create an Outlayer layout class
  var Masonry = Outlayer.create('masonry');
  // isFitWidth -> fitWidth
  Masonry.compatOptions.fitWidth = 'isFitWidth';

  var proto = Masonry.prototype;

  proto._resetLayout = function() {
    this.getSize();
    this._getMeasurement( 'columnWidth', 'outerWidth' );
    this._getMeasurement( 'gutter', 'outerWidth' );
    this.measureColumns();

    // reset column Y
    this.colYs = [];
    for ( var i=0; i < this.cols; i++ ) {
      this.colYs.push( 0 );
    }

    this.maxY = 0;
    this.horizontalColIndex = 0;
  };

  proto.measureColumns = function() {
    this.getContainerWidth();
    // if columnWidth is 0, default to outerWidth of first item
    if ( !this.columnWidth ) {
      var firstItem = this.items[0];
      var firstItemElem = firstItem && firstItem.element;
      // columnWidth fall back to item of first element
      this.columnWidth = firstItemElem && getSize( firstItemElem ).outerWidth ||
        // if first elem has no width, default to size of container
        this.containerWidth;
    }

    var columnWidth = this.columnWidth += this.gutter;

    // calculate columns
    var containerWidth = this.containerWidth + this.gutter;
    var cols = containerWidth / columnWidth;
    // fix rounding errors, typically with gutters
    var excess = columnWidth - containerWidth % columnWidth;
    // if overshoot is less than a pixel, round up, otherwise floor it
    var mathMethod = excess && excess < 1 ? 'round' : 'floor';
    cols = Math[ mathMethod ]( cols );
    this.cols = Math.max( cols, 1 );
  };

  proto.getContainerWidth = function() {
    // container is parent if fit width
    var isFitWidth = this._getOption('fitWidth');
    var container = isFitWidth ? this.element.parentNode : this.element;
    // check that this.size and size are there
    // IE8 triggers resize on body size change, so they might not be
    var size = getSize( container );
    this.containerWidth = size && size.innerWidth;
  };

  proto._getItemLayoutPosition = function( item ) {
    item.getSize();
    // how many columns does this brick span
    var remainder = item.size.outerWidth % this.columnWidth;
    var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
    // round if off by 1 pixel, otherwise use ceil
    var colSpan = Math[ mathMethod ]( item.size.outerWidth / this.columnWidth );
    colSpan = Math.min( colSpan, this.cols );
    // use horizontal or top column position
    var colPosMethod = this.options.horizontalOrder ?
      '_getHorizontalColPosition' : '_getTopColPosition';
    var colPosition = this[ colPosMethod ]( colSpan, item );
    // position the brick
    var position = {
      x: this.columnWidth * colPosition.col,
      y: colPosition.y
    };
    // apply setHeight to necessary columns
    var setHeight = colPosition.y + item.size.outerHeight;
    var setMax = colSpan + colPosition.col;
    for ( var i = colPosition.col; i < setMax; i++ ) {
      this.colYs[i] = setHeight;
    }

    return position;
  };

  proto._getTopColPosition = function( colSpan ) {
    var colGroup = this._getTopColGroup( colSpan );
    // get the minimum Y value from the columns
    var minimumY = Math.min.apply( Math, colGroup );

    return {
      col: colGroup.indexOf( minimumY ),
      y: minimumY,
    };
  };

  /**
   * @param {Number} colSpan - number of columns the element spans
   * @returns {Array} colGroup
   */
  proto._getTopColGroup = function( colSpan ) {
    if ( colSpan < 2 ) {
      // if brick spans only one column, use all the column Ys
      return this.colYs;
    }

    var colGroup = [];
    // how many different places could this brick fit horizontally
    var groupCount = this.cols + 1 - colSpan;
    // for each group potential horizontal position
    for ( var i = 0; i < groupCount; i++ ) {
      colGroup[i] = this._getColGroupY( i, colSpan );
    }
    return colGroup;
  };

  proto._getColGroupY = function( col, colSpan ) {
    if ( colSpan < 2 ) {
      return this.colYs[ col ];
    }
    // make an array of colY values for that one group
    var groupColYs = this.colYs.slice( col, col + colSpan );
    // and get the max value of the array
    return Math.max.apply( Math, groupColYs );
  };

  // get column position based on horizontal index. #873
  proto._getHorizontalColPosition = function( colSpan, item ) {
    var col = this.horizontalColIndex % this.cols;
    var isOver = colSpan > 1 && col + colSpan > this.cols;
    // shift to next row if item can't fit on current row
    col = isOver ? 0 : col;
    // don't let zero-size items take up space
    var hasSize = item.size.outerWidth && item.size.outerHeight;
    this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;

    return {
      col: col,
      y: this._getColGroupY( col, colSpan ),
    };
  };

  proto._manageStamp = function( stamp ) {
    var stampSize = getSize( stamp );
    var offset = this._getElementOffset( stamp );
    // get the columns that this stamp affects
    var isOriginLeft = this._getOption('originLeft');
    var firstX = isOriginLeft ? offset.left : offset.right;
    var lastX = firstX + stampSize.outerWidth;
    var firstCol = Math.floor( firstX / this.columnWidth );
    firstCol = Math.max( 0, firstCol );
    var lastCol = Math.floor( lastX / this.columnWidth );
    // lastCol should not go over if multiple of columnWidth #425
    lastCol -= lastX % this.columnWidth ? 0 : 1;
    lastCol = Math.min( this.cols - 1, lastCol );
    // set colYs to bottom of the stamp

    var isOriginTop = this._getOption('originTop');
    var stampMaxY = ( isOriginTop ? offset.top : offset.bottom ) +
      stampSize.outerHeight;
    for ( var i = firstCol; i <= lastCol; i++ ) {
      this.colYs[i] = Math.max( stampMaxY, this.colYs[i] );
    }
  };

  proto._getContainerSize = function() {
    this.maxY = Math.max.apply( Math, this.colYs );
    var size = {
      height: this.maxY
    };

    if ( this._getOption('fitWidth') ) {
      size.width = this._getContainerFitWidth();
    }

    return size;
  };

  proto._getContainerFitWidth = function() {
    var unusedCols = 0;
    // count unused columns
    var i = this.cols;
    while ( --i ) {
      if ( this.colYs[i] !== 0 ) {
        break;
      }
      unusedCols++;
    }
    // fit container to columns that have been used
    return ( this.cols - unusedCols ) * this.columnWidth - this.gutter;
  };

  proto.needsResizeLayout = function() {
    var previousWidth = this.containerWidth;
    this.getContainerWidth();
    return previousWidth != this.containerWidth;
  };

  return Masonry;

}));

},{"outlayer":"../node_modules/outlayer/outlayer.js","get-size":"../node_modules/get-size/get-size.js"}],"../node_modules/imagesloaded/imagesloaded.js":[function(require,module,exports) {
var define;
/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

( function( window, factory ) { 'use strict';
  // universal module definition

  /*global define: false, module: false, require: false */

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( [
      'ev-emitter/ev-emitter'
    ], function( EvEmitter ) {
      return factory( window, EvEmitter );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('ev-emitter')
    );
  } else {
    // browser global
    window.imagesLoaded = factory(
      window,
      window.EvEmitter
    );
  }

})( typeof window !== 'undefined' ? window : this,

// --------------------------  factory -------------------------- //

function factory( window, EvEmitter ) {

'use strict';

var $ = window.jQuery;
var console = window.console;

// -------------------------- helpers -------------------------- //

// extend objects
function extend( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
}

var arraySlice = Array.prototype.slice;

// turn element or nodeList into an array
function makeArray( obj ) {
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    return obj;
  }

  var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  if ( isArrayLike ) {
    // convert nodeList to array
    return arraySlice.call( obj );
  }

  // array of single index
  return [ obj ];
}

// -------------------------- imagesLoaded -------------------------- //

/**
 * @param {Array, Element, NodeList, String} elem
 * @param {Object or Function} options - if function, use as callback
 * @param {Function} onAlways - callback function
 */
function ImagesLoaded( elem, options, onAlways ) {
  // coerce ImagesLoaded() without new, to be new ImagesLoaded()
  if ( !( this instanceof ImagesLoaded ) ) {
    return new ImagesLoaded( elem, options, onAlways );
  }
  // use elem as selector string
  var queryElem = elem;
  if ( typeof elem == 'string' ) {
    queryElem = document.querySelectorAll( elem );
  }
  // bail if bad element
  if ( !queryElem ) {
    console.error( 'Bad element for imagesLoaded ' + ( queryElem || elem ) );
    return;
  }

  this.elements = makeArray( queryElem );
  this.options = extend( {}, this.options );
  // shift arguments if no options set
  if ( typeof options == 'function' ) {
    onAlways = options;
  } else {
    extend( this.options, options );
  }

  if ( onAlways ) {
    this.on( 'always', onAlways );
  }

  this.getImages();

  if ( $ ) {
    // add jQuery Deferred object
    this.jqDeferred = new $.Deferred();
  }

  // HACK check async to allow time to bind listeners
  setTimeout( this.check.bind( this ) );
}

ImagesLoaded.prototype = Object.create( EvEmitter.prototype );

ImagesLoaded.prototype.options = {};

ImagesLoaded.prototype.getImages = function() {
  this.images = [];

  // filter & find items if we have an item selector
  this.elements.forEach( this.addElementImages, this );
};

/**
 * @param {Node} element
 */
ImagesLoaded.prototype.addElementImages = function( elem ) {
  // filter siblings
  if ( elem.nodeName == 'IMG' ) {
    this.addImage( elem );
  }
  // get background image on element
  if ( this.options.background === true ) {
    this.addElementBackgroundImages( elem );
  }

  // find children
  // no non-element nodes, #143
  var nodeType = elem.nodeType;
  if ( !nodeType || !elementNodeTypes[ nodeType ] ) {
    return;
  }
  var childImgs = elem.querySelectorAll('img');
  // concat childElems to filterFound array
  for ( var i=0; i < childImgs.length; i++ ) {
    var img = childImgs[i];
    this.addImage( img );
  }

  // get child background images
  if ( typeof this.options.background == 'string' ) {
    var children = elem.querySelectorAll( this.options.background );
    for ( i=0; i < children.length; i++ ) {
      var child = children[i];
      this.addElementBackgroundImages( child );
    }
  }
};

var elementNodeTypes = {
  1: true,
  9: true,
  11: true
};

ImagesLoaded.prototype.addElementBackgroundImages = function( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    // Firefox returns null if in a hidden iframe https://bugzil.la/548397
    return;
  }
  // get url inside url("...")
  var reURL = /url\((['"])?(.*?)\1\)/gi;
  var matches = reURL.exec( style.backgroundImage );
  while ( matches !== null ) {
    var url = matches && matches[2];
    if ( url ) {
      this.addBackground( url, elem );
    }
    matches = reURL.exec( style.backgroundImage );
  }
};

/**
 * @param {Image} img
 */
ImagesLoaded.prototype.addImage = function( img ) {
  var loadingImage = new LoadingImage( img );
  this.images.push( loadingImage );
};

ImagesLoaded.prototype.addBackground = function( url, elem ) {
  var background = new Background( url, elem );
  this.images.push( background );
};

ImagesLoaded.prototype.check = function() {
  var _this = this;
  this.progressedCount = 0;
  this.hasAnyBroken = false;
  // complete if no images
  if ( !this.images.length ) {
    this.complete();
    return;
  }

  function onProgress( image, elem, message ) {
    // HACK - Chrome triggers event before object properties have changed. #83
    setTimeout( function() {
      _this.progress( image, elem, message );
    });
  }

  this.images.forEach( function( loadingImage ) {
    loadingImage.once( 'progress', onProgress );
    loadingImage.check();
  });
};

ImagesLoaded.prototype.progress = function( image, elem, message ) {
  this.progressedCount++;
  this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
  // progress event
  this.emitEvent( 'progress', [ this, image, elem ] );
  if ( this.jqDeferred && this.jqDeferred.notify ) {
    this.jqDeferred.notify( this, image );
  }
  // check if completed
  if ( this.progressedCount == this.images.length ) {
    this.complete();
  }

  if ( this.options.debug && console ) {
    console.log( 'progress: ' + message, image, elem );
  }
};

ImagesLoaded.prototype.complete = function() {
  var eventName = this.hasAnyBroken ? 'fail' : 'done';
  this.isComplete = true;
  this.emitEvent( eventName, [ this ] );
  this.emitEvent( 'always', [ this ] );
  if ( this.jqDeferred ) {
    var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
    this.jqDeferred[ jqMethod ]( this );
  }
};

// --------------------------  -------------------------- //

function LoadingImage( img ) {
  this.img = img;
}

LoadingImage.prototype = Object.create( EvEmitter.prototype );

LoadingImage.prototype.check = function() {
  // If complete is true and browser supports natural sizes,
  // try to check for image status manually.
  var isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    // report based on naturalWidth
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    return;
  }

  // If none of the checks above matched, simulate loading on detached element.
  this.proxyImage = new Image();
  this.proxyImage.addEventListener( 'load', this );
  this.proxyImage.addEventListener( 'error', this );
  // bind to image as well for Firefox. #191
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.proxyImage.src = this.img.src;
};

LoadingImage.prototype.getIsImageComplete = function() {
  // check for non-zero, non-undefined naturalWidth
  // fixes Safari+InfiniteScroll+Masonry bug infinite-scroll#671
  return this.img.complete && this.img.naturalWidth;
};

LoadingImage.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.img, message ] );
};

// ----- events ----- //

// trigger specified handler for event type
LoadingImage.prototype.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

LoadingImage.prototype.onload = function() {
  this.confirm( true, 'onload' );
  this.unbindEvents();
};

LoadingImage.prototype.onerror = function() {
  this.confirm( false, 'onerror' );
  this.unbindEvents();
};

LoadingImage.prototype.unbindEvents = function() {
  this.proxyImage.removeEventListener( 'load', this );
  this.proxyImage.removeEventListener( 'error', this );
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

// -------------------------- Background -------------------------- //

function Background( url, element ) {
  this.url = url;
  this.element = element;
  this.img = new Image();
}

// inherit LoadingImage prototype
Background.prototype = Object.create( LoadingImage.prototype );

Background.prototype.check = function() {
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.img.src = this.url;
  // check if image is already complete
  var isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    this.unbindEvents();
  }
};

Background.prototype.unbindEvents = function() {
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

Background.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.element, message ] );
};

// -------------------------- jQuery -------------------------- //

ImagesLoaded.makeJQueryPlugin = function( jQuery ) {
  jQuery = jQuery || window.jQuery;
  if ( !jQuery ) {
    return;
  }
  // set local variable
  $ = jQuery;
  // $().imagesLoaded()
  $.fn.imagesLoaded = function( options, callback ) {
    var instance = new ImagesLoaded( this, options, callback );
    return instance.jqDeferred.promise( $(this) );
  };
};
// try making plugin
ImagesLoaded.makeJQueryPlugin();

// --------------------------  -------------------------- //

return ImagesLoaded;

});

},{"ev-emitter":"../node_modules/ev-emitter/ev-emitter.js"}],"../node_modules/lightgallery.js/lib/js/lg-utils.js":[function(require,module,exports) {
var define;
var global = arguments[3];
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.lgUtils = mod.exports;
    }
})(this, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    /*
     *@todo remove function from window and document. Update on and off functions
     */
    window.getAttribute = function (label) {
        return window[label];
    };

    window.setAttribute = function (label, value) {
        window[label] = value;
    };

    document.getAttribute = function (label) {
        return document[label];
    };

    document.setAttribute = function (label, value) {
        document[label] = value;
    };

    var utils = {
        wrap: function wrap(el, className) {
            if (!el) {
                return;
            }

            var wrapper = document.createElement('div');
            wrapper.className = className;
            el.parentNode.insertBefore(wrapper, el);
            el.parentNode.removeChild(el);
            wrapper.appendChild(el);
        },

        addClass: function addClass(el, className) {
            if (!el) {
                return;
            }

            if (el.classList) {
                el.classList.add(className);
            } else {
                el.className += ' ' + className;
            }
        },

        removeClass: function removeClass(el, className) {
            if (!el) {
                return;
            }

            if (el.classList) {
                el.classList.remove(className);
            } else {
                el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
            }
        },

        hasClass: function hasClass(el, className) {
            if (el.classList) {
                return el.classList.contains(className);
            } else {
                return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
            }

            return false;
        },

        // ex Transform
        // ex TransitionTimingFunction
        setVendor: function setVendor(el, property, value) {
            if (!el) {
                return;
            }

            el.style[property.charAt(0).toLowerCase() + property.slice(1)] = value;
            el.style['webkit' + property] = value;
            el.style['moz' + property] = value;
            el.style['ms' + property] = value;
            el.style['o' + property] = value;
        },

        trigger: function trigger(el, event) {
            var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

            if (!el) {
                return;
            }

            var customEvent = new CustomEvent(event, {
                detail: detail
            });
            el.dispatchEvent(customEvent);
        },

        Listener: {
            uid: 0
        },
        on: function on(el, events, fn) {
            if (!el) {
                return;
            }

            events.split(' ').forEach(function (event) {
                var _id = el.getAttribute('lg-event-uid') || '';
                utils.Listener.uid++;
                _id += '&' + utils.Listener.uid;
                el.setAttribute('lg-event-uid', _id);
                utils.Listener[event + utils.Listener.uid] = fn;
                el.addEventListener(event.split('.')[0], fn, false);
            });
        },

        off: function off(el, event) {
            if (!el) {
                return;
            }

            var _id = el.getAttribute('lg-event-uid');
            if (_id) {
                _id = _id.split('&');
                for (var i = 0; i < _id.length; i++) {
                    if (_id[i]) {
                        var _event = event + _id[i];
                        if (_event.substring(0, 1) === '.') {
                            for (var key in utils.Listener) {
                                if (utils.Listener.hasOwnProperty(key)) {
                                    if (key.split('.').indexOf(_event.split('.')[1]) > -1) {
                                        el.removeEventListener(key.split('.')[0], utils.Listener[key]);
                                        el.setAttribute('lg-event-uid', el.getAttribute('lg-event-uid').replace('&' + _id[i], ''));
                                        delete utils.Listener[key];
                                    }
                                }
                            }
                        } else {
                            el.removeEventListener(_event.split('.')[0], utils.Listener[_event]);
                            el.setAttribute('lg-event-uid', el.getAttribute('lg-event-uid').replace('&' + _id[i], ''));
                            delete utils.Listener[_event];
                        }
                    }
                }
            }
        },

        param: function param(obj) {
            return Object.keys(obj).map(function (k) {
                return encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]);
            }).join('&');
        }
    };

    exports.default = utils;
});
},{}],"../node_modules/lightgallery.js/lib/js/lightgallery.js":[function(require,module,exports) {
var define;
var global = arguments[3];
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['./lg-utils'], factory);
    } else if (typeof exports !== "undefined") {
        factory(require('./lg-utils'));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.lgUtils);
        global.lightgallery = mod.exports;
    }
})(this, function (_lgUtils) {
    'use strict';

    var _lgUtils2 = _interopRequireDefault(_lgUtils);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

    /** Polyfill the CustomEvent() constructor functionality in Internet Explorer 9 and higher */
    (function () {

        if (typeof window.CustomEvent === 'function') {
            return false;
        }

        function CustomEvent(event, params) {
            params = params || {
                bubbles: false,
                cancelable: false,
                detail: undefined
            };
            var evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
            return evt;
        }

        CustomEvent.prototype = window.Event.prototype;

        window.CustomEvent = CustomEvent;
    })();

    window.utils = _lgUtils2.default;
    window.lgData = {
        uid: 0
    };

    window.lgModules = {};
    var defaults = {

        mode: 'lg-slide',

        // Ex : 'ease'
        cssEasing: 'ease',

        //'for jquery animation'
        easing: 'linear',
        speed: 600,
        height: '100%',
        width: '100%',
        addClass: '',
        startClass: 'lg-start-zoom',
        backdropDuration: 150,
        hideBarsDelay: 6000,

        useLeft: false,

        closable: true,
        loop: true,
        escKey: true,
        keyPress: true,
        controls: true,
        slideEndAnimatoin: true,
        hideControlOnEnd: false,
        mousewheel: false,

        getCaptionFromTitleOrAlt: true,

        // .lg-item || '.lg-sub-html'
        appendSubHtmlTo: '.lg-sub-html',

        subHtmlSelectorRelative: false,

        /**
         * @desc number of preload slides
         * will exicute only after the current slide is fully loaded.
         *
         * @ex you clicked on 4th image and if preload = 1 then 3rd slide and 5th
         * slide will be loaded in the background after the 4th slide is fully loaded..
         * if preload is 2 then 2nd 3rd 5th 6th slides will be preloaded.. ... ...
         *
         */
        preload: 1,
        showAfterLoad: true,
        selector: '',
        selectWithin: '',
        nextHtml: '',
        prevHtml: '',

        // 0, 1
        index: false,

        iframeMaxWidth: '100%',

        download: true,
        counter: true,
        appendCounterTo: '.lg-toolbar',

        swipeThreshold: 50,
        enableSwipe: true,
        enableDrag: true,

        dynamic: false,
        dynamicEl: [],
        galleryId: 1
    };

    function Plugin(element, options) {

        // Current lightGallery element
        this.el = element;

        // lightGallery settings
        this.s = _extends({}, defaults, options);

        // When using dynamic mode, ensure dynamicEl is an array
        if (this.s.dynamic && this.s.dynamicEl !== 'undefined' && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length) {
            throw 'When using dynamic mode, you must also define dynamicEl as an Array.';
        }

        // lightGallery modules
        this.modules = {};

        // false when lightgallery complete first slide;
        this.lGalleryOn = false;

        this.lgBusy = false;

        // Timeout function for hiding controls;
        this.hideBartimeout = false;

        // To determine browser supports for touch events;
        this.isTouch = 'ontouchstart' in document.documentElement;

        // Disable hideControlOnEnd if sildeEndAnimation is true
        if (this.s.slideEndAnimatoin) {
            this.s.hideControlOnEnd = false;
        }

        this.items = [];

        // Gallery items
        if (this.s.dynamic) {
            this.items = this.s.dynamicEl;
        } else {
            if (this.s.selector === 'this') {
                this.items.push(this.el);
            } else if (this.s.selector !== '') {
                if (this.s.selectWithin) {
                    this.items = document.querySelector(this.s.selectWithin).querySelectorAll(this.s.selector);
                } else {
                    this.items = this.el.querySelectorAll(this.s.selector);
                }
            } else {
                this.items = this.el.children;
            }
        }

        // .lg-item

        this.___slide = '';

        // .lg-outer
        this.outer = '';

        this.init();

        return this;
    }

    Plugin.prototype.init = function () {

        var _this = this;

        // s.preload should not be more than $item.length
        if (_this.s.preload > _this.items.length) {
            _this.s.preload = _this.items.length;
        }

        // if dynamic option is enabled execute immediately
        var _hash = window.location.hash;
        if (_hash.indexOf('lg=' + this.s.galleryId) > 0) {

            _this.index = parseInt(_hash.split('&slide=')[1], 10);

            _lgUtils2.default.addClass(document.body, 'lg-from-hash');
            if (!_lgUtils2.default.hasClass(document.body, 'lg-on')) {
                _lgUtils2.default.addClass(document.body, 'lg-on');
                setTimeout(function () {
                    _this.build(_this.index);
                });
            }
        }

        if (_this.s.dynamic) {

            _lgUtils2.default.trigger(this.el, 'onBeforeOpen');

            _this.index = _this.s.index || 0;

            // prevent accidental double execution
            if (!_lgUtils2.default.hasClass(document.body, 'lg-on')) {
                _lgUtils2.default.addClass(document.body, 'lg-on');
                setTimeout(function () {
                    _this.build(_this.index);
                });
            }
        } else {

            for (var i = 0; i < _this.items.length; i++) {

                /*jshint loopfunc: true */
                (function (index) {

                    // Using different namespace for click because click event should not unbind if selector is same object('this')
                    _lgUtils2.default.on(_this.items[index], 'click.lgcustom', function (e) {

                        e.preventDefault();

                        _lgUtils2.default.trigger(_this.el, 'onBeforeOpen');

                        _this.index = _this.s.index || index;

                        if (!_lgUtils2.default.hasClass(document.body, 'lg-on')) {
                            _this.build(_this.index);
                            _lgUtils2.default.addClass(document.body, 'lg-on');
                        }
                    });
                })(i);
            }
        }
    };

    Plugin.prototype.build = function (index) {

        var _this = this;

        _this.structure();

        for (var key in window.lgModules) {
            _this.modules[key] = new window.lgModules[key](_this.el);
        }

        // initiate slide function
        _this.slide(index, false, false);

        if (_this.s.keyPress) {
            _this.keyPress();
        }

        if (_this.items.length > 1) {

            _this.arrow();

            setTimeout(function () {
                _this.enableDrag();
                _this.enableSwipe();
            }, 50);

            if (_this.s.mousewheel) {
                _this.mousewheel();
            }
        }

        _this.counter();

        _this.closeGallery();

        _lgUtils2.default.trigger(_this.el, 'onAfterOpen');

        // Hide controllers if mouse doesn't move for some period
        _lgUtils2.default.on(_this.outer, 'mousemove.lg click.lg touchstart.lg', function () {

            _lgUtils2.default.removeClass(_this.outer, 'lg-hide-items');

            clearTimeout(_this.hideBartimeout);

            // Timeout will be cleared on each slide movement also
            _this.hideBartimeout = setTimeout(function () {
                _lgUtils2.default.addClass(_this.outer, 'lg-hide-items');
            }, _this.s.hideBarsDelay);
        });
    };

    Plugin.prototype.structure = function () {
        var list = '';
        var controls = '';
        var i = 0;
        var subHtmlCont = '';
        var template;
        var _this = this;

        document.body.insertAdjacentHTML('beforeend', '<div class="lg-backdrop"></div>');
        _lgUtils2.default.setVendor(document.querySelector('.lg-backdrop'), 'TransitionDuration', this.s.backdropDuration + 'ms');

        // Create gallery items
        for (i = 0; i < this.items.length; i++) {
            list += '<div class="lg-item"></div>';
        }

        // Create controlls
        if (this.s.controls && this.items.length > 1) {
            controls = '<div class="lg-actions">' + '<div class="lg-prev lg-icon">' + this.s.prevHtml + '</div>' + '<div class="lg-next lg-icon">' + this.s.nextHtml + '</div>' + '</div>';
        }

        if (this.s.appendSubHtmlTo === '.lg-sub-html') {
            subHtmlCont = '<div class="lg-sub-html"></div>';
        }

        template = '<div class="lg-outer ' + this.s.addClass + ' ' + this.s.startClass + '">' + '<div class="lg" style="width:' + this.s.width + '; height:' + this.s.height + '">' + '<div class="lg-inner">' + list + '</div>' + '<div class="lg-toolbar group">' + '<span class="lg-close lg-icon"></span>' + '</div>' + controls + subHtmlCont + '</div>' + '</div>';

        document.body.insertAdjacentHTML('beforeend', template);
        this.outer = document.querySelector('.lg-outer');
        this.___slide = this.outer.querySelectorAll('.lg-item');

        if (this.s.useLeft) {
            _lgUtils2.default.addClass(this.outer, 'lg-use-left');

            // Set mode lg-slide if use left is true;
            this.s.mode = 'lg-slide';
        } else {
            _lgUtils2.default.addClass(this.outer, 'lg-use-css3');
        }

        // For fixed height gallery
        _this.setTop();
        _lgUtils2.default.on(window, 'resize.lg orientationchange.lg', function () {
            setTimeout(function () {
                _this.setTop();
            }, 100);
        });

        // add class lg-current to remove initial transition
        _lgUtils2.default.addClass(this.___slide[this.index], 'lg-current');

        // add Class for css support and transition mode
        if (this.doCss()) {
            _lgUtils2.default.addClass(this.outer, 'lg-css3');
        } else {
            _lgUtils2.default.addClass(this.outer, 'lg-css');

            // Set speed 0 because no animation will happen if browser doesn't support css3
            this.s.speed = 0;
        }

        _lgUtils2.default.addClass(this.outer, this.s.mode);

        if (this.s.enableDrag && this.items.length > 1) {
            _lgUtils2.default.addClass(this.outer, 'lg-grab');
        }

        if (this.s.showAfterLoad) {
            _lgUtils2.default.addClass(this.outer, 'lg-show-after-load');
        }

        if (this.doCss()) {
            var inner = this.outer.querySelector('.lg-inner');
            _lgUtils2.default.setVendor(inner, 'TransitionTimingFunction', this.s.cssEasing);
            _lgUtils2.default.setVendor(inner, 'TransitionDuration', this.s.speed + 'ms');
        }

        setTimeout(function () {
            _lgUtils2.default.addClass(document.querySelector('.lg-backdrop'), 'in');
        });

        setTimeout(function () {
            _lgUtils2.default.addClass(_this.outer, 'lg-visible');
        }, this.s.backdropDuration);

        if (this.s.download) {
            this.outer.querySelector('.lg-toolbar').insertAdjacentHTML('beforeend', '<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>');
        }

        // Store the current scroll top value to scroll back after closing the gallery..
        this.prevScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    };

    // For fixed height gallery
    Plugin.prototype.setTop = function () {
        if (this.s.height !== '100%') {
            var wH = window.innerHeight;
            var top = (wH - parseInt(this.s.height, 10)) / 2;
            var lGallery = this.outer.querySelector('.lg');
            if (wH >= parseInt(this.s.height, 10)) {
                lGallery.style.top = top + 'px';
            } else {
                lGallery.style.top = '0px';
            }
        }
    };

    // Find css3 support
    Plugin.prototype.doCss = function () {
        // check for css animation support
        var support = function support() {
            var transition = ['transition', 'MozTransition', 'WebkitTransition', 'OTransition', 'msTransition', 'KhtmlTransition'];
            var root = document.documentElement;
            var i = 0;
            for (i = 0; i < transition.length; i++) {
                if (transition[i] in root.style) {
                    return true;
                }
            }
        };

        if (support()) {
            return true;
        }

        return false;
    };

    /**
     *  @desc Check the given src is video
     *  @param {String} src
     *  @return {Object} video type
     *  Ex:{ youtube  :  ["//www.youtube.com/watch?v=c0asJgSyxcY", "c0asJgSyxcY"] }
     */
    Plugin.prototype.isVideo = function (src, index) {

        var html;
        if (this.s.dynamic) {
            html = this.s.dynamicEl[index].html;
        } else {
            html = this.items[index].getAttribute('data-html');
        }

        if (!src && html) {
            return {
                html5: true
            };
        }

        var youtube = src.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i);
        var vimeo = src.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i);
        var dailymotion = src.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i);
        var vk = src.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);

        if (youtube) {
            return {
                youtube: youtube
            };
        } else if (vimeo) {
            return {
                vimeo: vimeo
            };
        } else if (dailymotion) {
            return {
                dailymotion: dailymotion
            };
        } else if (vk) {
            return {
                vk: vk
            };
        }
    };

    /**
     *  @desc Create image counter
     *  Ex: 1/10
     */
    Plugin.prototype.counter = function () {
        if (this.s.counter) {
            this.outer.querySelector(this.s.appendCounterTo).insertAdjacentHTML('beforeend', '<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.items.length + '</span></div>');
        }
    };

    /**
     *  @desc add sub-html into the slide
     *  @param {Number} index - index of the slide
     */
    Plugin.prototype.addHtml = function (index) {
        var subHtml = null;
        var currentEle;
        if (this.s.dynamic) {
            subHtml = this.s.dynamicEl[index].subHtml;
        } else {
            currentEle = this.items[index];
            subHtml = currentEle.getAttribute('data-sub-html');
            if (this.s.getCaptionFromTitleOrAlt && !subHtml) {
                subHtml = currentEle.getAttribute('title');
                if (subHtml && currentEle.querySelector('img')) {
                    subHtml = currentEle.querySelector('img').getAttribute('alt');
                }
            }
        }

        if (typeof subHtml !== 'undefined' && subHtml !== null) {

            // get first letter of subhtml
            // if first letter starts with . or # get the html form the jQuery object
            var fL = subHtml.substring(0, 1);
            if (fL === '.' || fL === '#') {
                if (this.s.subHtmlSelectorRelative && !this.s.dynamic) {
                    subHtml = currentEle.querySelector(subHtml).innerHTML;
                } else {
                    subHtml = document.querySelector(subHtml).innerHTML;
                }
            }
        } else {
            subHtml = '';
        }

        if (this.s.appendSubHtmlTo === '.lg-sub-html') {
            this.outer.querySelector(this.s.appendSubHtmlTo).innerHTML = subHtml;
        } else {
            this.___slide[index].insertAdjacentHTML('beforeend', subHtml);
        }

        // Add lg-empty-html class if title doesn't exist
        if (typeof subHtml !== 'undefined' && subHtml !== null) {
            if (subHtml === '') {
                _lgUtils2.default.addClass(this.outer.querySelector(this.s.appendSubHtmlTo), 'lg-empty-html');
            } else {
                _lgUtils2.default.removeClass(this.outer.querySelector(this.s.appendSubHtmlTo), 'lg-empty-html');
            }
        }

        _lgUtils2.default.trigger(this.el, 'onAfterAppendSubHtml', {
            index: index
        });
    };

    /**
     *  @desc Preload slides
     *  @param {Number} index - index of the slide
     */
    Plugin.prototype.preload = function (index) {
        var i = 1;
        var j = 1;
        for (i = 1; i <= this.s.preload; i++) {
            if (i >= this.items.length - index) {
                break;
            }

            this.loadContent(index + i, false, 0);
        }

        for (j = 1; j <= this.s.preload; j++) {
            if (index - j < 0) {
                break;
            }

            this.loadContent(index - j, false, 0);
        }
    };

    /**
     *  @desc Load slide content into slide.
     *  @param {Number} index - index of the slide.
     *  @param {Boolean} rec - if true call loadcontent() function again.
     *  @param {Boolean} delay - delay for adding complete class. it is 0 except first time.
     */
    Plugin.prototype.loadContent = function (index, rec, delay) {

        var _this = this;
        var _hasPoster = false;
        var _img;
        var _src;
        var _poster;
        var _srcset;
        var _sizes;
        var _html;
        var getResponsiveSrc = function getResponsiveSrc(srcItms) {
            var rsWidth = [];
            var rsSrc = [];
            for (var i = 0; i < srcItms.length; i++) {
                var __src = srcItms[i].split(' ');

                // Manage empty space
                if (__src[0] === '') {
                    __src.splice(0, 1);
                }

                rsSrc.push(__src[0]);
                rsWidth.push(__src[1]);
            }

            var wWidth = window.innerWidth;
            for (var j = 0; j < rsWidth.length; j++) {
                if (parseInt(rsWidth[j], 10) > wWidth) {
                    _src = rsSrc[j];
                    break;
                }
            }
        };

        if (_this.s.dynamic) {

            if (_this.s.dynamicEl[index].poster) {
                _hasPoster = true;
                _poster = _this.s.dynamicEl[index].poster;
            }

            _html = _this.s.dynamicEl[index].html;
            _src = _this.s.dynamicEl[index].src;

            if (_this.s.dynamicEl[index].responsive) {
                var srcDyItms = _this.s.dynamicEl[index].responsive.split(',');
                getResponsiveSrc(srcDyItms);
            }

            _srcset = _this.s.dynamicEl[index].srcset;
            _sizes = _this.s.dynamicEl[index].sizes;
        } else {

            if (_this.items[index].getAttribute('data-poster')) {
                _hasPoster = true;
                _poster = _this.items[index].getAttribute('data-poster');
            }

            _html = _this.items[index].getAttribute('data-html');
            _src = _this.items[index].getAttribute('href') || _this.items[index].getAttribute('data-src');

            if (_this.items[index].getAttribute('data-responsive')) {
                var srcItms = _this.items[index].getAttribute('data-responsive').split(',');
                getResponsiveSrc(srcItms);
            }

            _srcset = _this.items[index].getAttribute('data-srcset');
            _sizes = _this.items[index].getAttribute('data-sizes');
        }

        //if (_src || _srcset || _sizes || _poster) {

        var iframe = false;
        if (_this.s.dynamic) {
            if (_this.s.dynamicEl[index].iframe) {
                iframe = true;
            }
        } else {
            if (_this.items[index].getAttribute('data-iframe') === 'true') {
                iframe = true;
            }
        }

        var _isVideo = _this.isVideo(_src, index);
        if (!_lgUtils2.default.hasClass(_this.___slide[index], 'lg-loaded')) {
            if (iframe) {
                _this.___slide[index].insertAdjacentHTML('afterbegin', '<div class="lg-video-cont" style="max-width:' + _this.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + _src + '"  allowfullscreen="true"></iframe></div></div>');
            } else if (_hasPoster) {
                var videoClass = '';
                if (_isVideo && _isVideo.youtube) {
                    videoClass = 'lg-has-youtube';
                } else if (_isVideo && _isVideo.vimeo) {
                    videoClass = 'lg-has-vimeo';
                } else {
                    videoClass = 'lg-has-html5';
                }

                _this.___slide[index].insertAdjacentHTML('beforeend', '<div class="lg-video-cont ' + videoClass + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + _poster + '" /></div></div>');
            } else if (_isVideo) {
                _this.___slide[index].insertAdjacentHTML('beforeend', '<div class="lg-video-cont "><div class="lg-video"></div></div>');
                _lgUtils2.default.trigger(_this.el, 'hasVideo', {
                    index: index,
                    src: _src,
                    html: _html
                });
            } else {
                _this.___slide[index].insertAdjacentHTML('beforeend', '<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + _src + '" /></div>');
            }

            _lgUtils2.default.trigger(_this.el, 'onAferAppendSlide', {
                index: index
            });

            _img = _this.___slide[index].querySelector('.lg-object');
            if (_sizes) {
                _img.setAttribute('sizes', _sizes);
            }

            if (_srcset) {
                _img.setAttribute('srcset', _srcset);
                try {
                    picturefill({
                        elements: [_img[0]]
                    });
                } catch (e) {
                    console.error('Make sure you have included Picturefill version 2');
                }
            }

            if (this.s.appendSubHtmlTo !== '.lg-sub-html') {
                _this.addHtml(index);
            }

            _lgUtils2.default.addClass(_this.___slide[index], 'lg-loaded');
        }

        _lgUtils2.default.on(_this.___slide[index].querySelector('.lg-object'), 'load.lg error.lg', function () {

            // For first time add some delay for displaying the start animation.
            var _speed = 0;

            // Do not change the delay value because it is required for zoom plugin.
            // If gallery opened from direct url (hash) speed value should be 0
            if (delay && !_lgUtils2.default.hasClass(document.body, 'lg-from-hash')) {
                _speed = delay;
            }

            setTimeout(function () {
                _lgUtils2.default.addClass(_this.___slide[index], 'lg-complete');

                _lgUtils2.default.trigger(_this.el, 'onSlideItemLoad', {
                    index: index,
                    delay: delay || 0
                });
            }, _speed);
        });

        // @todo check load state for html5 videos
        if (_isVideo && _isVideo.html5 && !_hasPoster) {
            _lgUtils2.default.addClass(_this.___slide[index], 'lg-complete');
        }

        if (rec === true) {
            if (!_lgUtils2.default.hasClass(_this.___slide[index], 'lg-complete')) {
                _lgUtils2.default.on(_this.___slide[index].querySelector('.lg-object'), 'load.lg error.lg', function () {
                    _this.preload(index);
                });
            } else {
                _this.preload(index);
            }
        }

        //}
    };

    /**
    *   @desc slide function for lightgallery
        ** Slide() gets call on start
        ** ** Set lg.on true once slide() function gets called.
        ** Call loadContent() on slide() function inside setTimeout
        ** ** On first slide we do not want any animation like slide of fade
        ** ** So on first slide( if lg.on if false that is first slide) loadContent() should start loading immediately
        ** ** Else loadContent() should wait for the transition to complete.
        ** ** So set timeout s.speed + 50
    <=> ** loadContent() will load slide content in to the particular slide
        ** ** It has recursion (rec) parameter. if rec === true loadContent() will call preload() function.
        ** ** preload will execute only when the previous slide is fully loaded (images iframe)
        ** ** avoid simultaneous image load
    <=> ** Preload() will check for s.preload value and call loadContent() again accoring to preload value
        ** loadContent()  <====> Preload();
    
    *   @param {Number} index - index of the slide
    *   @param {Boolean} fromTouch - true if slide function called via touch event or mouse drag
    *   @param {Boolean} fromThumb - true if slide function called via thumbnail click
    */
    Plugin.prototype.slide = function (index, fromTouch, fromThumb) {

        var _prevIndex = 0;
        for (var i = 0; i < this.___slide.length; i++) {
            if (_lgUtils2.default.hasClass(this.___slide[i], 'lg-current')) {
                _prevIndex = i;
                break;
            }
        }

        var _this = this;

        // Prevent if multiple call
        // Required for hsh plugin
        if (_this.lGalleryOn && _prevIndex === index) {
            return;
        }

        var _length = this.___slide.length;
        var _time = _this.lGalleryOn ? this.s.speed : 0;
        var _next = false;
        var _prev = false;

        if (!_this.lgBusy) {

            if (this.s.download) {
                var _src;
                if (_this.s.dynamic) {
                    _src = _this.s.dynamicEl[index].downloadUrl !== false && (_this.s.dynamicEl[index].downloadUrl || _this.s.dynamicEl[index].src);
                } else {
                    _src = _this.items[index].getAttribute('data-download-url') !== 'false' && (_this.items[index].getAttribute('data-download-url') || _this.items[index].getAttribute('href') || _this.items[index].getAttribute('data-src'));
                }

                if (_src) {
                    document.getElementById('lg-download').setAttribute('href', _src);
                    _lgUtils2.default.removeClass(_this.outer, 'lg-hide-download');
                } else {
                    _lgUtils2.default.addClass(_this.outer, 'lg-hide-download');
                }
            }

            _lgUtils2.default.trigger(_this.el, 'onBeforeSlide', {
                prevIndex: _prevIndex,
                index: index,
                fromTouch: fromTouch,
                fromThumb: fromThumb
            });

            _this.lgBusy = true;

            clearTimeout(_this.hideBartimeout);

            // Add title if this.s.appendSubHtmlTo === lg-sub-html
            if (this.s.appendSubHtmlTo === '.lg-sub-html') {

                // wait for slide animation to complete
                setTimeout(function () {
                    _this.addHtml(index);
                }, _time);
            }

            this.arrowDisable(index);

            if (!fromTouch) {

                // remove all transitions
                _lgUtils2.default.addClass(_this.outer, 'lg-no-trans');

                for (var j = 0; j < this.___slide.length; j++) {
                    _lgUtils2.default.removeClass(this.___slide[j], 'lg-prev-slide');
                    _lgUtils2.default.removeClass(this.___slide[j], 'lg-next-slide');
                }

                if (index < _prevIndex) {
                    _prev = true;
                    if (index === 0 && _prevIndex === _length - 1 && !fromThumb) {
                        _prev = false;
                        _next = true;
                    }
                } else if (index > _prevIndex) {
                    _next = true;
                    if (index === _length - 1 && _prevIndex === 0 && !fromThumb) {
                        _prev = true;
                        _next = false;
                    }
                }

                if (_prev) {

                    //prevslide
                    _lgUtils2.default.addClass(this.___slide[index], 'lg-prev-slide');
                    _lgUtils2.default.addClass(this.___slide[_prevIndex], 'lg-next-slide');
                } else if (_next) {

                    // next slide
                    _lgUtils2.default.addClass(this.___slide[index], 'lg-next-slide');
                    _lgUtils2.default.addClass(this.___slide[_prevIndex], 'lg-prev-slide');
                }

                // give 50 ms for browser to add/remove class
                setTimeout(function () {
                    _lgUtils2.default.removeClass(_this.outer.querySelector('.lg-current'), 'lg-current');

                    //_this.$slide.eq(_prevIndex).removeClass('lg-current');
                    _lgUtils2.default.addClass(_this.___slide[index], 'lg-current');

                    // reset all transitions
                    _lgUtils2.default.removeClass(_this.outer, 'lg-no-trans');
                }, 50);
            } else {

                var touchPrev = index - 1;
                var touchNext = index + 1;

                if (index === 0 && _prevIndex === _length - 1) {

                    // next slide
                    touchNext = 0;
                    touchPrev = _length - 1;
                } else if (index === _length - 1 && _prevIndex === 0) {

                    // prev slide
                    touchNext = 0;
                    touchPrev = _length - 1;
                }

                _lgUtils2.default.removeClass(_this.outer.querySelector('.lg-prev-slide'), 'lg-prev-slide');
                _lgUtils2.default.removeClass(_this.outer.querySelector('.lg-current'), 'lg-current');
                _lgUtils2.default.removeClass(_this.outer.querySelector('.lg-next-slide'), 'lg-next-slide');
                _lgUtils2.default.addClass(_this.___slide[touchPrev], 'lg-prev-slide');
                _lgUtils2.default.addClass(_this.___slide[touchNext], 'lg-next-slide');
                _lgUtils2.default.addClass(_this.___slide[index], 'lg-current');
            }

            if (_this.lGalleryOn) {
                setTimeout(function () {
                    _this.loadContent(index, true, 0);
                }, this.s.speed + 50);

                setTimeout(function () {
                    _this.lgBusy = false;
                    _lgUtils2.default.trigger(_this.el, 'onAfterSlide', {
                        prevIndex: _prevIndex,
                        index: index,
                        fromTouch: fromTouch,
                        fromThumb: fromThumb
                    });
                }, this.s.speed);
            } else {
                _this.loadContent(index, true, _this.s.backdropDuration);

                _this.lgBusy = false;
                _lgUtils2.default.trigger(_this.el, 'onAfterSlide', {
                    prevIndex: _prevIndex,
                    index: index,
                    fromTouch: fromTouch,
                    fromThumb: fromThumb
                });
            }

            _this.lGalleryOn = true;

            if (this.s.counter) {
                if (document.getElementById('lg-counter-current')) {
                    document.getElementById('lg-counter-current').innerHTML = index + 1;
                }
            }
        }
    };

    /**
     *  @desc Go to next slide
     *  @param {Boolean} fromTouch - true if slide function called via touch event
     */
    Plugin.prototype.goToNextSlide = function (fromTouch) {
        var _this = this;
        if (!_this.lgBusy) {
            if (_this.index + 1 < _this.___slide.length) {
                _this.index++;
                _lgUtils2.default.trigger(_this.el, 'onBeforeNextSlide', {
                    index: _this.index
                });
                _this.slide(_this.index, fromTouch, false);
            } else {
                if (_this.s.loop) {
                    _this.index = 0;
                    _lgUtils2.default.trigger(_this.el, 'onBeforeNextSlide', {
                        index: _this.index
                    });
                    _this.slide(_this.index, fromTouch, false);
                } else if (_this.s.slideEndAnimatoin) {
                    _lgUtils2.default.addClass(_this.outer, 'lg-right-end');
                    setTimeout(function () {
                        _lgUtils2.default.removeClass(_this.outer, 'lg-right-end');
                    }, 400);
                }
            }
        }
    };

    /**
     *  @desc Go to previous slide
     *  @param {Boolean} fromTouch - true if slide function called via touch event
     */
    Plugin.prototype.goToPrevSlide = function (fromTouch) {
        var _this = this;
        if (!_this.lgBusy) {
            if (_this.index > 0) {
                _this.index--;
                _lgUtils2.default.trigger(_this.el, 'onBeforePrevSlide', {
                    index: _this.index,
                    fromTouch: fromTouch
                });
                _this.slide(_this.index, fromTouch, false);
            } else {
                if (_this.s.loop) {
                    _this.index = _this.items.length - 1;
                    _lgUtils2.default.trigger(_this.el, 'onBeforePrevSlide', {
                        index: _this.index,
                        fromTouch: fromTouch
                    });
                    _this.slide(_this.index, fromTouch, false);
                } else if (_this.s.slideEndAnimatoin) {
                    _lgUtils2.default.addClass(_this.outer, 'lg-left-end');
                    setTimeout(function () {
                        _lgUtils2.default.removeClass(_this.outer, 'lg-left-end');
                    }, 400);
                }
            }
        }
    };

    Plugin.prototype.keyPress = function () {
        var _this = this;
        if (this.items.length > 1) {
            _lgUtils2.default.on(window, 'keyup.lg', function (e) {
                if (_this.items.length > 1) {
                    if (e.keyCode === 37) {
                        e.preventDefault();
                        _this.goToPrevSlide();
                    }

                    if (e.keyCode === 39) {
                        e.preventDefault();
                        _this.goToNextSlide();
                    }
                }
            });
        }

        _lgUtils2.default.on(window, 'keydown.lg', function (e) {
            if (_this.s.escKey === true && e.keyCode === 27) {
                e.preventDefault();
                if (!_lgUtils2.default.hasClass(_this.outer, 'lg-thumb-open')) {
                    _this.destroy();
                } else {
                    _lgUtils2.default.removeClass(_this.outer, 'lg-thumb-open');
                }
            }
        });
    };

    Plugin.prototype.arrow = function () {
        var _this = this;
        _lgUtils2.default.on(this.outer.querySelector('.lg-prev'), 'click.lg', function () {
            _this.goToPrevSlide();
        });

        _lgUtils2.default.on(this.outer.querySelector('.lg-next'), 'click.lg', function () {
            _this.goToNextSlide();
        });
    };

    Plugin.prototype.arrowDisable = function (index) {

        // Disable arrows if s.hideControlOnEnd is true
        if (!this.s.loop && this.s.hideControlOnEnd) {
            var next = this.outer.querySelector('.lg-next');
            var prev = this.outer.querySelector('.lg-prev');
            if (index + 1 < this.___slide.length) {
                next.removeAttribute('disabled');
                _lgUtils2.default.removeClass(next, 'disabled');
            } else {
                next.setAttribute('disabled', 'disabled');
                _lgUtils2.default.addClass(next, 'disabled');
            }

            if (index > 0) {
                prev.removeAttribute('disabled');
                _lgUtils2.default.removeClass(prev, 'disabled');
            } else {
                next.setAttribute('disabled', 'disabled');
                _lgUtils2.default.addClass(next, 'disabled');
            }
        }
    };

    Plugin.prototype.setTranslate = function (el, xValue, yValue) {
        // jQuery supports Automatic CSS prefixing since jQuery 1.8.0
        if (this.s.useLeft) {
            el.style.left = xValue;
        } else {
            _lgUtils2.default.setVendor(el, 'Transform', 'translate3d(' + xValue + 'px, ' + yValue + 'px, 0px)');
        }
    };

    Plugin.prototype.touchMove = function (startCoords, endCoords) {

        var distance = endCoords - startCoords;

        if (Math.abs(distance) > 15) {
            // reset opacity and transition duration
            _lgUtils2.default.addClass(this.outer, 'lg-dragging');

            // move current slide
            this.setTranslate(this.___slide[this.index], distance, 0);

            // move next and prev slide with current slide
            this.setTranslate(document.querySelector('.lg-prev-slide'), -this.___slide[this.index].clientWidth + distance, 0);
            this.setTranslate(document.querySelector('.lg-next-slide'), this.___slide[this.index].clientWidth + distance, 0);
        }
    };

    Plugin.prototype.touchEnd = function (distance) {
        var _this = this;

        // keep slide animation for any mode while dragg/swipe
        if (_this.s.mode !== 'lg-slide') {
            _lgUtils2.default.addClass(_this.outer, 'lg-slide');
        }

        for (var i = 0; i < this.___slide.length; i++) {
            if (!_lgUtils2.default.hasClass(this.___slide[i], 'lg-current') && !_lgUtils2.default.hasClass(this.___slide[i], 'lg-prev-slide') && !_lgUtils2.default.hasClass(this.___slide[i], 'lg-next-slide')) {
                this.___slide[i].style.opacity = '0';
            }
        }

        // set transition duration
        setTimeout(function () {
            _lgUtils2.default.removeClass(_this.outer, 'lg-dragging');
            if (distance < 0 && Math.abs(distance) > _this.s.swipeThreshold) {
                _this.goToNextSlide(true);
            } else if (distance > 0 && Math.abs(distance) > _this.s.swipeThreshold) {
                _this.goToPrevSlide(true);
            } else if (Math.abs(distance) < 5) {

                // Trigger click if distance is less than 5 pix
                _lgUtils2.default.trigger(_this.el, 'onSlideClick');
            }

            for (var i = 0; i < _this.___slide.length; i++) {
                _this.___slide[i].removeAttribute('style');
            }
        });

        // remove slide class once drag/swipe is completed if mode is not slide
        setTimeout(function () {
            if (!_lgUtils2.default.hasClass(_this.outer, 'lg-dragging') && _this.s.mode !== 'lg-slide') {
                _lgUtils2.default.removeClass(_this.outer, 'lg-slide');
            }
        }, _this.s.speed + 100);
    };

    Plugin.prototype.enableSwipe = function () {
        var _this = this;
        var startCoords = 0;
        var endCoords = 0;
        var isMoved = false;

        if (_this.s.enableSwipe && _this.isTouch && _this.doCss()) {

            for (var i = 0; i < _this.___slide.length; i++) {
                /*jshint loopfunc: true */
                _lgUtils2.default.on(_this.___slide[i], 'touchstart.lg', function (e) {
                    if (!_lgUtils2.default.hasClass(_this.outer, 'lg-zoomed') && !_this.lgBusy) {
                        e.preventDefault();
                        _this.manageSwipeClass();
                        startCoords = e.targetTouches[0].pageX;
                    }
                });
            }

            for (var j = 0; j < _this.___slide.length; j++) {
                /*jshint loopfunc: true */
                _lgUtils2.default.on(_this.___slide[j], 'touchmove.lg', function (e) {
                    if (!_lgUtils2.default.hasClass(_this.outer, 'lg-zoomed')) {
                        e.preventDefault();
                        endCoords = e.targetTouches[0].pageX;
                        _this.touchMove(startCoords, endCoords);
                        isMoved = true;
                    }
                });
            }

            for (var k = 0; k < _this.___slide.length; k++) {
                /*jshint loopfunc: true */
                _lgUtils2.default.on(_this.___slide[k], 'touchend.lg', function () {
                    if (!_lgUtils2.default.hasClass(_this.outer, 'lg-zoomed')) {
                        if (isMoved) {
                            isMoved = false;
                            _this.touchEnd(endCoords - startCoords);
                        } else {
                            _lgUtils2.default.trigger(_this.el, 'onSlideClick');
                        }
                    }
                });
            }
        }
    };

    Plugin.prototype.enableDrag = function () {
        var _this = this;
        var startCoords = 0;
        var endCoords = 0;
        var isDraging = false;
        var isMoved = false;
        if (_this.s.enableDrag && !_this.isTouch && _this.doCss()) {
            for (var i = 0; i < _this.___slide.length; i++) {
                /*jshint loopfunc: true */
                _lgUtils2.default.on(_this.___slide[i], 'mousedown.lg', function (e) {
                    // execute only on .lg-object
                    if (!_lgUtils2.default.hasClass(_this.outer, 'lg-zoomed')) {
                        if (_lgUtils2.default.hasClass(e.target, 'lg-object') || _lgUtils2.default.hasClass(e.target, 'lg-video-play')) {
                            e.preventDefault();

                            if (!_this.lgBusy) {
                                _this.manageSwipeClass();
                                startCoords = e.pageX;
                                isDraging = true;

                                // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
                                _this.outer.scrollLeft += 1;
                                _this.outer.scrollLeft -= 1;

                                // *

                                _lgUtils2.default.removeClass(_this.outer, 'lg-grab');
                                _lgUtils2.default.addClass(_this.outer, 'lg-grabbing');

                                _lgUtils2.default.trigger(_this.el, 'onDragstart');
                            }
                        }
                    }
                });
            }

            _lgUtils2.default.on(window, 'mousemove.lg', function (e) {
                if (isDraging) {
                    isMoved = true;
                    endCoords = e.pageX;
                    _this.touchMove(startCoords, endCoords);
                    _lgUtils2.default.trigger(_this.el, 'onDragmove');
                }
            });

            _lgUtils2.default.on(window, 'mouseup.lg', function (e) {
                if (isMoved) {
                    isMoved = false;
                    _this.touchEnd(endCoords - startCoords);
                    _lgUtils2.default.trigger(_this.el, 'onDragend');
                } else if (_lgUtils2.default.hasClass(e.target, 'lg-object') || _lgUtils2.default.hasClass(e.target, 'lg-video-play')) {
                    _lgUtils2.default.trigger(_this.el, 'onSlideClick');
                }

                // Prevent execution on click
                if (isDraging) {
                    isDraging = false;
                    _lgUtils2.default.removeClass(_this.outer, 'lg-grabbing');
                    _lgUtils2.default.addClass(_this.outer, 'lg-grab');
                }
            });
        }
    };

    Plugin.prototype.manageSwipeClass = function () {
        var touchNext = this.index + 1;
        var touchPrev = this.index - 1;
        var length = this.___slide.length;
        if (this.s.loop) {
            if (this.index === 0) {
                touchPrev = length - 1;
            } else if (this.index === length - 1) {
                touchNext = 0;
            }
        }

        for (var i = 0; i < this.___slide.length; i++) {
            _lgUtils2.default.removeClass(this.___slide[i], 'lg-next-slide');
            _lgUtils2.default.removeClass(this.___slide[i], 'lg-prev-slide');
        }

        if (touchPrev > -1) {
            _lgUtils2.default.addClass(this.___slide[touchPrev], 'lg-prev-slide');
        }

        _lgUtils2.default.addClass(this.___slide[touchNext], 'lg-next-slide');
    };

    Plugin.prototype.mousewheel = function () {
        var _this = this;
        _lgUtils2.default.on(_this.outer, 'mousewheel.lg', function (e) {

            if (!e.deltaY) {
                return;
            }

            if (e.deltaY > 0) {
                _this.goToPrevSlide();
            } else {
                _this.goToNextSlide();
            }

            e.preventDefault();
        });
    };

    Plugin.prototype.closeGallery = function () {

        var _this = this;
        var mousedown = false;
        _lgUtils2.default.on(this.outer.querySelector('.lg-close'), 'click.lg', function () {
            _this.destroy();
        });

        if (_this.s.closable) {

            // If you drag the slide and release outside gallery gets close on chrome
            // for preventing this check mousedown and mouseup happened on .lg-item or lg-outer
            _lgUtils2.default.on(_this.outer, 'mousedown.lg', function (e) {

                if (_lgUtils2.default.hasClass(e.target, 'lg-outer') || _lgUtils2.default.hasClass(e.target, 'lg-item') || _lgUtils2.default.hasClass(e.target, 'lg-img-wrap')) {
                    mousedown = true;
                } else {
                    mousedown = false;
                }
            });

            _lgUtils2.default.on(_this.outer, 'mouseup.lg', function (e) {

                if (_lgUtils2.default.hasClass(e.target, 'lg-outer') || _lgUtils2.default.hasClass(e.target, 'lg-item') || _lgUtils2.default.hasClass(e.target, 'lg-img-wrap') && mousedown) {
                    if (!_lgUtils2.default.hasClass(_this.outer, 'lg-dragging')) {
                        _this.destroy();
                    }
                }
            });
        }
    };

    Plugin.prototype.destroy = function (d) {

        var _this = this;

        if (!d) {
            _lgUtils2.default.trigger(_this.el, 'onBeforeClose');
        }

        document.body.scrollTop = _this.prevScrollTop;
        document.documentElement.scrollTop = _this.prevScrollTop;

        /**
         * if d is false or undefined destroy will only close the gallery
         * plugins instance remains with the element
         *
         * if d is true destroy will completely remove the plugin
         */

        if (d) {
            if (!_this.s.dynamic) {
                // only when not using dynamic mode is $items a jquery collection

                for (var i = 0; i < this.items.length; i++) {
                    _lgUtils2.default.off(this.items[i], '.lg');
                    _lgUtils2.default.off(this.items[i], '.lgcustom');
                }
            }

            var lguid = _this.el.getAttribute('lg-uid');
            delete window.lgData[lguid];
            _this.el.removeAttribute('lg-uid');
        }

        // Unbind all events added by lightGallery
        _lgUtils2.default.off(this.el, '.lgtm');

        // Distroy all lightGallery modules
        for (var key in window.lgModules) {
            if (_this.modules[key]) {
                _this.modules[key].destroy(d);
            }
        }

        this.lGalleryOn = false;

        clearTimeout(_this.hideBartimeout);
        this.hideBartimeout = false;
        _lgUtils2.default.off(window, '.lg');
        _lgUtils2.default.removeClass(document.body, 'lg-on');
        _lgUtils2.default.removeClass(document.body, 'lg-from-hash');

        if (_this.outer) {
            _lgUtils2.default.removeClass(_this.outer, 'lg-visible');
        }

        _lgUtils2.default.removeClass(document.querySelector('.lg-backdrop'), 'in');
        setTimeout(function () {
            try {
                if (_this.outer) {
                    _this.outer.parentNode.removeChild(_this.outer);
                }

                if (document.querySelector('.lg-backdrop')) {
                    document.querySelector('.lg-backdrop').parentNode.removeChild(document.querySelector('.lg-backdrop'));
                }

                if (!d) {
                    _lgUtils2.default.trigger(_this.el, 'onCloseAfter');
                }
            } catch (err) {}
        }, _this.s.backdropDuration + 50);
    };

    window.lightGallery = function (el, options) {
        if (!el) {
            return;
        }

        try {
            if (!el.getAttribute('lg-uid')) {
                var uid = 'lg' + window.lgData.uid++;
                window.lgData[uid] = new Plugin(el, options);
                el.setAttribute('lg-uid', uid);
            } else {
                try {
                    window.lgData[el.getAttribute('lg-uid')].init();
                } catch (err) {
                    console.error('lightGallery has not initiated properly');
                }
            }
        } catch (err) {
            console.error('lightGallery has not initiated properly');
        }
    };
});
},{"./lg-utils":"../node_modules/lightgallery.js/lib/js/lg-utils.js"}],"libs/lightGallery1.1/js/lg-fullscreen.js":[function(require,module,exports) {
var define;
var global = arguments[3];
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**!
 * lg-fullscreen.js | 1.0.0 | October 5th 2016
 * http://sachinchoolur.github.io/lg-fullscreen.js
 * Copyright (c) 2016 Sachin N; 
 * @license GPLv3 
 */
(function (f) {
  if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
    module.exports = f();
  } else if (typeof define === "function" && define.amd) {
    define([], f);
  } else {
    var g;

    if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      g = this;
    }

    g.LgFullscreen = f();
  }
})(function () {
  var define, module, exports;
  return function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof require == "function" && require;
          if (!u && a) return a(o, !0);
          if (i) return i(o, !0);
          var f = new Error("Cannot find module '" + o + "'");
          throw f.code = "MODULE_NOT_FOUND", f;
        }

        var l = n[o] = {
          exports: {}
        };
        t[o][0].call(l.exports, function (e) {
          var n = t[o][1][e];
          return s(n ? n : e);
        }, l, l.exports, e, t, n, r);
      }

      return n[o].exports;
    }

    var i = typeof require == "function" && require;

    for (var o = 0; o < r.length; o++) {
      s(r[o]);
    }

    return s;
  }({
    1: [function (require, module, exports) {
      (function (global, factory) {
        if (typeof define === "function" && define.amd) {
          define([], factory);
        } else if (typeof exports !== "undefined") {
          factory();
        } else {
          var mod = {
            exports: {}
          };
          factory();
          global.lgFullscreen = mod.exports;
        }
      })(this, function () {
        'use strict';

        var _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }

          return target;
        };

        var fullscreenDefaults = {
          fullScreen: true
        };

        var Fullscreen = function Fullscreen(element) {
          this.el = element;
          this.core = window.lgData[this.el.getAttribute('lg-uid')];
          this.core.s = _extends({}, fullscreenDefaults, this.core.s);
          this.init();
          return this;
        };

        Fullscreen.prototype.init = function () {
          var fullScreen = '';

          if (this.core.s.fullScreen) {
            // check for fullscreen browser support
            if (!document.fullscreenEnabled && !document.webkitFullscreenEnabled && !document.mozFullScreenEnabled && !document.msFullscreenEnabled) {
              return;
            } else {
              fullScreen = '<span class="lg-fullscreen lg-icon"></span>';
              this.core.outer.querySelector('.lg-toolbar').insertAdjacentHTML('beforeend', fullScreen);
              this.fullScreen();
            }
          }
        };

        Fullscreen.prototype.requestFullscreen = function () {
          var el = document.documentElement;

          if (el.requestFullscreen) {
            el.requestFullscreen();
          } else if (el.msRequestFullscreen) {
            el.msRequestFullscreen();
          } else if (el.mozRequestFullScreen) {
            el.mozRequestFullScreen();
          } else if (el.webkitRequestFullscreen) {
            el.webkitRequestFullscreen();
          }
        };

        Fullscreen.prototype.exitFullscreen = function () {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
          }
        }; // https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Using_full_screen_mode


        Fullscreen.prototype.fullScreen = function () {
          var _this = this;

          utils.on(document, 'fullscreenchange.lgfullscreen webkitfullscreenchange.lgfullscreen mozfullscreenchange.lgfullscreen MSFullscreenChange.lgfullscreen', function () {
            if (utils.hasClass(_this.core.outer, 'lg-fullscreen-on')) {
              utils.removeClass(_this.core.outer, 'lg-fullscreen-on');
            } else {
              utils.addClass(_this.core.outer, 'lg-fullscreen-on');
            }
          });
          utils.on(this.core.outer.querySelector('.lg-fullscreen'), 'click.lg', function () {
            if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
              _this.requestFullscreen();
            } else {
              _this.exitFullscreen();
            }
          });
        };

        Fullscreen.prototype.destroy = function () {
          // exit from fullscreen if activated
          this.exitFullscreen();
          utils.off(document, '.lgfullscreen');
        };

        window.lgModules.fullscreen = Fullscreen;
      });
    }, {}]
  }, {}, [1])(1);
});
},{}],"libs/lightGallery1.1/js/lg-hash.js":[function(require,module,exports) {
var define;
var global = arguments[3];
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**!
 * lg-hash.js | 1.0.0 | October 5th 2016
 * http://sachinchoolur.github.io/lg-hash.js
 * Copyright (c) 2016 Sachin N; 
 * @license GPLv3 
 */
(function (f) {
  if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
    module.exports = f();
  } else if (typeof define === "function" && define.amd) {
    define([], f);
  } else {
    var g;

    if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      g = this;
    }

    g.LgHash = f();
  }
})(function () {
  var define, module, exports;
  return function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof require == "function" && require;
          if (!u && a) return a(o, !0);
          if (i) return i(o, !0);
          var f = new Error("Cannot find module '" + o + "'");
          throw f.code = "MODULE_NOT_FOUND", f;
        }

        var l = n[o] = {
          exports: {}
        };
        t[o][0].call(l.exports, function (e) {
          var n = t[o][1][e];
          return s(n ? n : e);
        }, l, l.exports, e, t, n, r);
      }

      return n[o].exports;
    }

    var i = typeof require == "function" && require;

    for (var o = 0; o < r.length; o++) {
      s(r[o]);
    }

    return s;
  }({
    1: [function (require, module, exports) {
      (function (global, factory) {
        if (typeof define === "function" && define.amd) {
          define([], factory);
        } else if (typeof exports !== "undefined") {
          factory();
        } else {
          var mod = {
            exports: {}
          };
          factory();
          global.lgHash = mod.exports;
        }
      })(this, function () {
        'use strict';

        var _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }

          return target;
        };

        var hashDefaults = {
          hash: true
        };

        var Hash = function Hash(element) {
          this.el = element;
          this.core = window.lgData[this.el.getAttribute('lg-uid')];
          this.core.s = _extends({}, hashDefaults, this.core.s);

          if (this.core.s.hash) {
            this.oldHash = window.location.hash;
            this.init();
          }

          return this;
        };

        Hash.prototype.init = function () {
          var _this = this;

          var _hash; // Change hash value on after each slide transition


          utils.on(_this.core.el, 'onAfterSlide.lgtm', function (event) {
            window.location.hash = 'lg=' + _this.core.s.galleryId + '&slide=' + event.detail.index;
          }); // Listen hash change and change the slide according to slide value

          utils.on(window, 'hashchange.lghash', function () {
            _hash = window.location.hash;

            var _idx = parseInt(_hash.split('&slide=')[1], 10); // it galleryId doesn't exist in the url close the gallery


            if (_hash.indexOf('lg=' + _this.core.s.galleryId) > -1) {
              _this.core.slide(_idx, false, false);
            } else if (_this.core.lGalleryOn) {
              _this.core.destroy();
            }
          });
        };

        Hash.prototype.destroy = function () {
          if (!this.core.s.hash) {
            return;
          } // Reset to old hash value


          if (this.oldHash && this.oldHash.indexOf('lg=' + this.core.s.galleryId) < 0) {
            window.location.hash = this.oldHash;
          } else {
            if (history.pushState) {
              history.pushState('', document.title, window.location.pathname + window.location.search);
            } else {
              window.location.hash = '';
            }
          }

          utils.off(this.core.el, '.lghash');
        };

        window.lgModules.hash = Hash;
      });
    }, {}]
  }, {}, [1])(1);
});
},{}],"libs/lightGallery1.1/js/lg-pager.js":[function(require,module,exports) {
var define;
var global = arguments[3];
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**!
 * lg-pager.js | 1.0.0 | October 5th 2016
 * http://sachinchoolur.github.io/lg-pager.js
 * Copyright (c) 2016 Sachin N; 
 * @license GPLv3 
 */
(function (f) {
  if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
    module.exports = f();
  } else if (typeof define === "function" && define.amd) {
    define([], f);
  } else {
    var g;

    if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      g = this;
    }

    g.LgPager = f();
  }
})(function () {
  var define, module, exports;
  return function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof require == "function" && require;
          if (!u && a) return a(o, !0);
          if (i) return i(o, !0);
          var f = new Error("Cannot find module '" + o + "'");
          throw f.code = "MODULE_NOT_FOUND", f;
        }

        var l = n[o] = {
          exports: {}
        };
        t[o][0].call(l.exports, function (e) {
          var n = t[o][1][e];
          return s(n ? n : e);
        }, l, l.exports, e, t, n, r);
      }

      return n[o].exports;
    }

    var i = typeof require == "function" && require;

    for (var o = 0; o < r.length; o++) {
      s(r[o]);
    }

    return s;
  }({
    1: [function (require, module, exports) {
      (function (global, factory) {
        if (typeof define === "function" && define.amd) {
          define([], factory);
        } else if (typeof exports !== "undefined") {
          factory();
        } else {
          var mod = {
            exports: {}
          };
          factory();
          global.lgPager = mod.exports;
        }
      })(this, function () {
        'use strict';

        var _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }

          return target;
        };

        var pagerDefaults = {
          pager: false
        };

        var Pager = function Pager(element) {
          this.el = element;
          this.core = window.lgData[this.el.getAttribute('lg-uid')];
          this.core.s = _extends({}, pagerDefaults, this.core.s);

          if (this.core.s.pager && this.core.items.length > 1) {
            this.init();
          }

          return this;
        };

        Pager.prototype.init = function () {
          var _this = this;

          var pagerList = '';
          var $pagerCont;
          var $pagerOuter;
          var timeout;

          _this.core.outer.querySelector('.lg').insertAdjacentHTML('beforeend', '<div class="lg-pager-outer"></div>');

          if (_this.core.s.dynamic) {
            for (var j = 0; j < _this.core.s.dynamicEl.length; j++) {
              pagerList += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + _this.core.s.dynamicEl[j].thumb + '" /></div></span>';
            }
          } else {
            for (var i = 0; i < _this.core.items.length; i++) {
              if (!_this.core.s.exThumbImage) {
                pagerList += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + _this.core.items[i].querySelector('img').getAttribute('src') + '" /></div></span>';
              } else {
                pagerList += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + _this.core.items[i].getAttribute(_this.core.s.exThumbImage) + '" /></div></span>';
              }
            }
          }

          $pagerOuter = _this.core.outer.querySelector('.lg-pager-outer');
          $pagerOuter.innerHTML = pagerList;
          $pagerCont = _this.core.outer.querySelectorAll('.lg-pager-cont');

          for (var k = 0; k < $pagerCont.length; k++) {
            /*jshint loopfunc: true */
            (function (index) {
              utils.on($pagerCont[index], 'click.lg touchend.lg', function () {
                _this.core.index = index;

                _this.core.slide(_this.core.index, false, false);
              });
            })(k);
          }

          utils.on($pagerOuter, 'mouseover.lg', function () {
            clearTimeout(timeout);
            utils.addClass($pagerOuter, 'lg-pager-hover');
          });
          utils.on($pagerOuter, 'mouseout.lg', function () {
            timeout = setTimeout(function () {
              utils.removeClass($pagerOuter, 'lg-pager-hover');
            });
          });
          utils.on(_this.core.el, 'onBeforeSlide.lgtm', function (e) {
            for (var n = 0; n < $pagerCont.length; n++) {
              utils.removeClass($pagerCont[n], 'lg-pager-active');

              if (e.detail.index === n) {
                utils.addClass($pagerCont[n], 'lg-pager-active');
              }
            }
          });
        };

        Pager.prototype.destroy = function () {};

        window.lgModules.pager = Pager;
      });
    }, {}]
  }, {}, [1])(1);
});
},{}],"libs/lightGallery1.1/js/lg-autoplay.js":[function(require,module,exports) {
var define;
var global = arguments[3];
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**!
 * lg-autoplay.js | 1.0.0 | October 5th 2016
 * http://sachinchoolur.github.io/lg-autoplay.js
 * Copyright (c) 2016 Sachin N; 
 * @license GPLv3 
 */
(function (f) {
  if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
    module.exports = f();
  } else if (typeof define === "function" && define.amd) {
    define([], f);
  } else {
    var g;

    if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      g = this;
    }

    g.LgAutoplay = f();
  }
})(function () {
  var define, module, exports;
  return function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof require == "function" && require;
          if (!u && a) return a(o, !0);
          if (i) return i(o, !0);
          var f = new Error("Cannot find module '" + o + "'");
          throw f.code = "MODULE_NOT_FOUND", f;
        }

        var l = n[o] = {
          exports: {}
        };
        t[o][0].call(l.exports, function (e) {
          var n = t[o][1][e];
          return s(n ? n : e);
        }, l, l.exports, e, t, n, r);
      }

      return n[o].exports;
    }

    var i = typeof require == "function" && require;

    for (var o = 0; o < r.length; o++) {
      s(r[o]);
    }

    return s;
  }({
    1: [function (require, module, exports) {
      (function (global, factory) {
        if (typeof define === "function" && define.amd) {
          define([], factory);
        } else if (typeof exports !== "undefined") {
          factory();
        } else {
          var mod = {
            exports: {}
          };
          factory();
          global.lgAutoplay = mod.exports;
        }
      })(this, function () {
        'use strict';

        var _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }

          return target;
        };

        var autoplayDefaults = {
          autoplay: false,
          pause: 5000,
          progressBar: true,
          fourceAutoplay: false,
          autoplayControls: true,
          appendAutoplayControlsTo: '.lg-toolbar'
        };
        /**
         * Creates the autoplay plugin.
         * @param {object} element - lightGallery element
         */

        var Autoplay = function Autoplay(element) {
          this.el = element;
          this.core = window.lgData[this.el.getAttribute('lg-uid')]; // Execute only if items are above 1

          if (this.core.items.length < 2) {
            return false;
          }

          this.core.s = _extends({}, autoplayDefaults, this.core.s);
          this.interval = false; // Identify if slide happened from autoplay

          this.fromAuto = true; // Identify if autoplay canceled from touch/drag

          this.canceledOnTouch = false; // save fourceautoplay value

          this.fourceAutoplayTemp = this.core.s.fourceAutoplay; // do not allow progress bar if browser does not support css3 transitions

          if (!this.core.doCss()) {
            this.core.s.progressBar = false;
          }

          this.init();
          return this;
        };

        Autoplay.prototype.init = function () {
          var _this = this; // append autoplay controls


          if (_this.core.s.autoplayControls) {
            _this.controls();
          } // Create progress bar


          if (_this.core.s.progressBar) {
            _this.core.outer.querySelector('.lg').insertAdjacentHTML('beforeend', '<div class="lg-progress-bar"><div class="lg-progress"></div></div>');
          } // set progress


          _this.progress(); // Start autoplay


          if (_this.core.s.autoplay) {
            _this.startlAuto();
          } // cancel interval on touchstart and dragstart


          utils.on(_this.el, 'onDragstart.lgtm touchstart.lgtm', function () {
            if (_this.interval) {
              _this.cancelAuto();

              _this.canceledOnTouch = true;
            }
          }); // restore autoplay if autoplay canceled from touchstart / dragstart

          utils.on(_this.el, 'onDragend.lgtm touchend.lgtm onSlideClick.lgtm', function () {
            if (!_this.interval && _this.canceledOnTouch) {
              _this.startlAuto();

              _this.canceledOnTouch = false;
            }
          });
        };

        Autoplay.prototype.progress = function () {
          var _this = this;

          var _progressBar;

          var _progress;

          utils.on(_this.el, 'onBeforeSlide.lgtm', function () {
            // start progress bar animation
            if (_this.core.s.progressBar && _this.fromAuto) {
              _progressBar = _this.core.outer.querySelector('.lg-progress-bar');
              _progress = _this.core.outer.querySelector('.lg-progress');

              if (_this.interval) {
                _progress.removeAttribute('style');

                utils.removeClass(_progressBar, 'lg-start');
                setTimeout(function () {
                  utils.setVendor(_progress, 'Transition', 'width ' + (_this.core.s.speed + _this.core.s.pause) + 'ms ease 0s');
                  utils.addClass(_progressBar, 'lg-start');
                }, 20);
              }
            } // Remove setinterval if slide is triggered manually and fourceautoplay is false


            if (!_this.fromAuto && !_this.core.s.fourceAutoplay) {
              _this.cancelAuto();
            }

            _this.fromAuto = false;
          });
        }; // Manage autoplay via play/stop buttons


        Autoplay.prototype.controls = function () {
          var _this = this;

          var _html = '<span class="lg-autoplay-button lg-icon"></span>'; // Append autoplay controls

          _this.core.outer.querySelector(this.core.s.appendAutoplayControlsTo).insertAdjacentHTML('beforeend', _html);

          utils.on(_this.core.outer.querySelector('.lg-autoplay-button'), 'click.lg', function () {
            if (utils.hasClass(_this.core.outer, 'lg-show-autoplay')) {
              _this.cancelAuto();

              _this.core.s.fourceAutoplay = false;
            } else {
              if (!_this.interval) {
                _this.startlAuto();

                _this.core.s.fourceAutoplay = _this.fourceAutoplayTemp;
              }
            }
          });
        }; // Autostart gallery


        Autoplay.prototype.startlAuto = function () {
          var _this = this;

          utils.setVendor(_this.core.outer.querySelector('.lg-progress'), 'Transition', 'width ' + (_this.core.s.speed + _this.core.s.pause) + 'ms ease 0s');
          utils.addClass(_this.core.outer, 'lg-show-autoplay');
          utils.addClass(_this.core.outer.querySelector('.lg-progress-bar'), 'lg-start');
          _this.interval = setInterval(function () {
            if (_this.core.index + 1 < _this.core.items.length) {
              _this.core.index++;
            } else {
              _this.core.index = 0;
            }

            _this.fromAuto = true;

            _this.core.slide(_this.core.index, false, false);
          }, _this.core.s.speed + _this.core.s.pause);
        }; // cancel Autostart


        Autoplay.prototype.cancelAuto = function () {
          clearInterval(this.interval);
          this.interval = false;

          if (this.core.outer.querySelector('.lg-progress')) {
            this.core.outer.querySelector('.lg-progress').removeAttribute('style');
          }

          utils.removeClass(this.core.outer, 'lg-show-autoplay');
          utils.removeClass(this.core.outer.querySelector('.lg-progress-bar'), 'lg-start');
        };

        Autoplay.prototype.destroy = function () {
          this.cancelAuto();

          if (this.core.outer.querySelector('.lg-progress-bar')) {
            this.core.outer.querySelector('.lg-progress-bar').parentNode.removeChild(this.core.outer.querySelector('.lg-progress-bar'));
          }
        };

        window.lgModules.autoplay = Autoplay;
      });
    }, {}]
  }, {}, [1])(1);
});
},{}],"libs/lightGallery1.1/js/lg-share.js":[function(require,module,exports) {
var define;
var global = arguments[3];
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**!
 * lg-share.js | 1.2.0 | January 14th 2018
 * http://sachinchoolur.github.io/lg-share.js
 * Copyright (c) 2016 Sachin N; 
 * @license GPLv3 
 */
(function (f) {
  if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
    module.exports = f();
  } else if (typeof define === "function" && define.amd) {
    define([], f);
  } else {
    var g;

    if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      g = this;
    }

    g.LgShare = f();
  }
})(function () {
  var define, module, exports;
  return function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof require == "function" && require;
          if (!u && a) return a(o, !0);
          if (i) return i(o, !0);
          var f = new Error("Cannot find module '" + o + "'");
          throw f.code = "MODULE_NOT_FOUND", f;
        }

        var l = n[o] = {
          exports: {}
        };
        t[o][0].call(l.exports, function (e) {
          var n = t[o][1][e];
          return s(n ? n : e);
        }, l, l.exports, e, t, n, r);
      }

      return n[o].exports;
    }

    var i = typeof require == "function" && require;

    for (var o = 0; o < r.length; o++) {
      s(r[o]);
    }

    return s;
  }({
    1: [function (require, module, exports) {
      (function (global, factory) {
        if (typeof define === "function" && define.amd) {
          define([], factory);
        } else if (typeof exports !== "undefined") {
          factory();
        } else {
          var mod = {
            exports: {}
          };
          factory();
          global.lgShare = mod.exports;
        }
      })(this, function () {
        'use strict';

        var _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }

          return target;
        };

        var shareSefaults = {
          share: true,
          facebook: true,
          facebookDropdownText: 'Facebook',
          twitter: true,
          twitterDropdownText: 'Twitter',
          googlePlus: true,
          googlePlusDropdownText: 'GooglePlus',
          pinterest: true,
          pinterestDropdownText: 'Pinterest'
        };

        function toCamelCase(input) {
          return input.toLowerCase().replace(/-(.)/g, function (match, group1) {
            return group1.toUpperCase();
          });
        }

        var Share = function Share(element) {
          this.el = element;
          this.core = window.lgData[this.el.getAttribute('lg-uid')];
          this.core.s = _extends({}, shareSefaults, this.core.s);

          if (this.core.s.share) {
            this.init();
          }

          return this;
        };

        Share.prototype.init = function () {
          var _this = this;

          var shareHtml = '<span id="lg-share" class="lg-icon">' + '<ul class="lg-dropdown" style="position: absolute;">';
          shareHtml += _this.core.s.facebook ? '<li><a id="lg-share-facebook" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.facebookDropdownText + '</span></a></li>' : '';
          shareHtml += _this.core.s.twitter ? '<li><a id="lg-share-twitter" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.twitterDropdownText + '</span></a></li>' : '';
          shareHtml += _this.core.s.googlePlus ? '<li><a id="lg-share-googleplus" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.googlePlusDropdownText + '</span></a></li>' : '';
          shareHtml += _this.core.s.pinterest ? '<li><a id="lg-share-pinterest" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.pinterestDropdownText + '</span></a></li>' : '';
          shareHtml += '</ul></span>';
          this.core.outer.querySelector('.lg-toolbar').insertAdjacentHTML('beforeend', shareHtml);
          this.core.outer.querySelector('.lg').insertAdjacentHTML('beforeend', '<div id="lg-dropdown-overlay"></div>');
          utils.on(document.getElementById('lg-share'), 'click.lg', function () {
            if (utils.hasClass(_this.core.outer, 'lg-dropdown-active')) {
              utils.removeClass(_this.core.outer, 'lg-dropdown-active');
            } else {
              utils.addClass(_this.core.outer, 'lg-dropdown-active');
            }
          });
          utils.on(document.getElementById('lg-dropdown-overlay'), 'click.lg', function () {
            utils.removeClass(_this.core.outer, 'lg-dropdown-active');
          });
          utils.on(_this.core.el, 'onAfterSlide.lgtm', function (event) {
            setTimeout(function () {
              if (_this.core.s.facebook) {
                document.getElementById('lg-share-facebook').setAttribute('href', 'https://www.facebook.com/sharer/sharer.php?u=' + _this.getSharePropsUrl(event.detail.index, 'data-facebook-share-url'));
              }

              if (_this.core.s.twitter) {
                document.getElementById('lg-share-twitter').setAttribute('href', 'https://twitter.com/intent/tweet?text=' + _this.getShareProps(event.detail.index, 'data-tweet-text') + '&url=' + _this.getSharePropsUrl(event.detail.index, 'data-twitter-share-url'));
              }

              if (_this.core.s.googlePlus) {
                document.getElementById('lg-share-googleplus').setAttribute('href', 'https://plus.google.com/share?url=' + _this.getSharePropsUrl(event.detail.index, 'data-googleplus-share-url'));
              }

              if (_this.core.s.pinterest) {
                document.getElementById('lg-share-pinterest').setAttribute('href', 'http://www.pinterest.com/pin/create/button/?url=' + _this.getSharePropsUrl(event.detail.index, 'data-pinterest-share-url') + '&media=' + encodeURIComponent(_this.getShareProps(event.detail.index, 'href') || _this.getShareProps(event.detail.index, 'data-src')) + '&description=' + _this.getShareProps(event.detail.index, 'data-pinterest-text'));
              }
            }, 100);
          });
        };

        Share.prototype.getSharePropsUrl = function (index, prop) {
          var shareProp = this.getShareProps(index, prop);

          if (!shareProp) {
            shareProp = window.location.href;
          }

          return encodeURIComponent(shareProp);
        };

        Share.prototype.getShareProps = function (index, prop) {
          var shareProp = '';

          if (this.core.s.dynamic) {
            shareProp = this.core.items[index][toCamelCase(prop.replace('data-', ''))];
          } else if (this.core.items[index].getAttribute(prop)) {
            shareProp = this.core.items[index].getAttribute(prop);
          }

          return shareProp;
        };

        Share.prototype.destroy = function () {};

        window.lgModules.share = Share;
      });
    }, {}]
  }, {}, [1])(1);
});
},{}],"libs/lightGallery1.1/js/lg-video.js":[function(require,module,exports) {
var define;
var global = arguments[3];
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**!
 * lg-video.js | 1.0.0 | October 5th 2016
 * http://sachinchoolur.github.io/lg-video.js
 * Copyright (c) 2016 Sachin N; 
 * @license GPLv3 
 */
(function (f) {
  if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
    module.exports = f();
  } else if (typeof define === "function" && define.amd) {
    define([], f);
  } else {
    var g;

    if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      g = this;
    }

    g.LgVideo = f();
  }
})(function () {
  var define, module, exports;
  return function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof require == "function" && require;
          if (!u && a) return a(o, !0);
          if (i) return i(o, !0);
          var f = new Error("Cannot find module '" + o + "'");
          throw f.code = "MODULE_NOT_FOUND", f;
        }

        var l = n[o] = {
          exports: {}
        };
        t[o][0].call(l.exports, function (e) {
          var n = t[o][1][e];
          return s(n ? n : e);
        }, l, l.exports, e, t, n, r);
      }

      return n[o].exports;
    }

    var i = typeof require == "function" && require;

    for (var o = 0; o < r.length; o++) {
      s(r[o]);
    }

    return s;
  }({
    1: [function (require, module, exports) {
      (function (global, factory) {
        if (typeof define === "function" && define.amd) {
          define([], factory);
        } else if (typeof exports !== "undefined") {
          factory();
        } else {
          var mod = {
            exports: {}
          };
          factory();
          global.lgVideo = mod.exports;
        }
      })(this, function () {
        'use strict';

        var _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }

          return target;
        };

        var videoDefaults = {
          videoMaxWidth: '855px',
          youtubePlayerParams: false,
          vimeoPlayerParams: false,
          dailymotionPlayerParams: false,
          vkPlayerParams: false,
          videojs: false,
          videojsOptions: {}
        };

        var Video = function Video(element) {
          this.el = element;
          this.core = window.lgData[this.el.getAttribute('lg-uid')];
          this.core.s = _extends({}, videoDefaults, this.core.s);
          this.videoLoaded = false;
          this.init();
          return this;
        };

        Video.prototype.init = function () {
          var _this = this; // Event triggered when video url found without poster


          utils.on(_this.core.el, 'hasVideo.lgtm', function (event) {
            _this.core.___slide[event.detail.index].querySelector('.lg-video').insertAdjacentHTML('beforeend', _this.loadVideo(event.detail.src, 'lg-object', true, event.detail.index, event.detail.html));

            if (event.detail.html) {
              if (_this.core.s.videojs) {
                try {
                  videojs(_this.core.___slide[event.detail.index].querySelector('.lg-html5'), _this.core.s.videojsOptions, function () {
                    if (!_this.videoLoaded) {
                      this.play();
                    }
                  });
                } catch (e) {
                  console.error('Make sure you have included videojs');
                }
              } else {
                _this.core.___slide[event.detail.index].querySelector('.lg-html5').play();
              }
            }
          }); // Set max width for video

          utils.on(_this.core.el, 'onAferAppendSlide.lgtm', function (event) {
            if (_this.core.___slide[event.detail.index].querySelector('.lg-video-cont')) {
              _this.core.___slide[event.detail.index].querySelector('.lg-video-cont').style.maxWidth = _this.core.s.videoMaxWidth;
              _this.videoLoaded = true;
            }
          });

          var loadOnClick = function loadOnClick($el) {
            // check slide has poster
            if (utils.hasClass($el.querySelector('.lg-object'), 'lg-has-poster') && $el.querySelector('.lg-object').style.display !== 'none') {
              // check already video element present
              if (!utils.hasClass($el, 'lg-has-video')) {
                utils.addClass($el, 'lg-video-playing');
                utils.addClass($el, 'lg-has-video');

                var _src;

                var _html;

                var _loadVideo = function _loadVideo(_src, _html) {
                  $el.querySelector('.lg-video').insertAdjacentHTML('beforeend', _this.loadVideo(_src, '', false, _this.core.index, _html));

                  if (_html) {
                    if (_this.core.s.videojs) {
                      try {
                        videojs(_this.core.___slide[_this.core.index].querySelector('.lg-html5'), _this.core.s.videojsOptions, function () {
                          this.play();
                        });
                      } catch (e) {
                        console.error('Make sure you have included videojs');
                      }
                    } else {
                      _this.core.___slide[_this.core.index].querySelector('.lg-html5').play();
                    }
                  }
                };

                if (_this.core.s.dynamic) {
                  _src = _this.core.s.dynamicEl[_this.core.index].src;
                  _html = _this.core.s.dynamicEl[_this.core.index].html;

                  _loadVideo(_src, _html);
                } else {
                  _src = _this.core.items[_this.core.index].getAttribute('href') || _this.core.items[_this.core.index].getAttribute('data-src');
                  _html = _this.core.items[_this.core.index].getAttribute('data-html');

                  _loadVideo(_src, _html);
                }

                var $tempImg = $el.querySelector('.lg-object');
                $el.querySelector('.lg-video').appendChild($tempImg); // @todo loading icon for html5 videos also
                // for showing the loading indicator while loading video

                if (!utils.hasClass($el.querySelector('.lg-video-object'), 'lg-html5')) {
                  utils.removeClass($el, 'lg-complete');
                  utils.on($el.querySelector('.lg-video-object'), 'load.lg error.lg', function () {
                    utils.addClass($el, 'lg-complete');
                  });
                }
              } else {
                var youtubePlayer = $el.querySelector('.lg-youtube');
                var vimeoPlayer = $el.querySelector('.lg-vimeo');
                var dailymotionPlayer = $el.querySelector('.lg-dailymotion');
                var html5Player = $el.querySelector('.lg-html5');

                if (youtubePlayer) {
                  youtubePlayer.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                } else if (vimeoPlayer) {
                  try {
                    $f(vimeoPlayer).api('play');
                  } catch (e) {
                    console.error('Make sure you have included froogaloop2 js');
                  }
                } else if (dailymotionPlayer) {
                  dailymotionPlayer.contentWindow.postMessage('play', '*');
                } else if (html5Player) {
                  if (_this.core.s.videojs) {
                    try {
                      videojs(html5Player).play();
                    } catch (e) {
                      console.error('Make sure you have included videojs');
                    }
                  } else {
                    html5Player.play();
                  }
                }

                utils.addClass($el, 'lg-video-playing');
              }
            }
          };

          if (_this.core.doCss() && _this.core.items.length > 1 && (_this.core.s.enableSwipe && _this.core.isTouch || _this.core.s.enableDrag && !_this.core.isTouch)) {
            utils.on(_this.core.el, 'onSlideClick.lgtm', function () {
              var $el = _this.core.___slide[_this.core.index];
              loadOnClick($el);
            });
          } else {
            // For IE 9 and bellow
            for (var i = 0; i < _this.core.___slide.length; i++) {
              /*jshint loopfunc: true */
              (function (index) {
                utils.on(_this.core.___slide[index], 'click.lg', function () {
                  loadOnClick(_this.core.___slide[index]);
                });
              })(i);
            }
          }

          utils.on(_this.core.el, 'onBeforeSlide.lgtm', function (event) {
            var $videoSlide = _this.core.___slide[event.detail.prevIndex];
            var youtubePlayer = $videoSlide.querySelector('.lg-youtube');
            var vimeoPlayer = $videoSlide.querySelector('.lg-vimeo');
            var dailymotionPlayer = $videoSlide.querySelector('.lg-dailymotion');
            var vkPlayer = $videoSlide.querySelector('.lg-vk');
            var html5Player = $videoSlide.querySelector('.lg-html5');

            if (youtubePlayer) {
              youtubePlayer.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
            } else if (vimeoPlayer) {
              try {
                $f(vimeoPlayer).api('pause');
              } catch (e) {
                console.error('Make sure you have included froogaloop2 js');
              }
            } else if (dailymotionPlayer) {
              dailymotionPlayer.contentWindow.postMessage('pause', '*');
            } else if (html5Player) {
              if (_this.core.s.videojs) {
                try {
                  videojs(html5Player).pause();
                } catch (e) {
                  console.error('Make sure you have included videojs');
                }
              } else {
                html5Player.pause();
              }
            }

            if (vkPlayer) {
              vkPlayer.setAttribute('src', vkPlayer.getAttribute('src').replace('&autoplay', '&noplay'));
            }

            var _src;

            if (_this.core.s.dynamic) {
              _src = _this.core.s.dynamicEl[event.detail.index].src;
            } else {
              _src = _this.core.items[event.detail.index].getAttribute('href') || _this.core.items[event.detail.index].getAttribute('data-src');
            }

            var _isVideo = _this.core.isVideo(_src, event.detail.index) || {};

            if (_isVideo.youtube || _isVideo.vimeo || _isVideo.dailymotion || _isVideo.vk) {
              utils.addClass(_this.core.outer, 'lg-hide-download');
            } //$videoSlide.addClass('lg-complete');

          });
          utils.on(_this.core.el, 'onAfterSlide.lgtm', function (event) {
            utils.removeClass(_this.core.___slide[event.detail.prevIndex], 'lg-video-playing');
          });
        };

        Video.prototype.loadVideo = function (src, addClass, noposter, index, html) {
          var video = '';
          var autoplay = 1;
          var a = '';
          var isVideo = this.core.isVideo(src, index) || {}; // Enable autoplay for first video if poster doesn't exist

          if (noposter) {
            if (this.videoLoaded) {
              autoplay = 0;
            } else {
              autoplay = 1;
            }
          }

          if (isVideo.youtube) {
            a = '?wmode=opaque&autoplay=' + autoplay + '&enablejsapi=1';

            if (this.core.s.youtubePlayerParams) {
              a = a + '&' + utils.param(this.core.s.youtubePlayerParams);
            }

            video = '<iframe class="lg-video-object lg-youtube ' + addClass + '" width="560" height="315" src="//www.youtube.com/embed/' + isVideo.youtube[1] + a + '" frameborder="0" allowfullscreen></iframe>';
          } else if (isVideo.vimeo) {
            a = '?autoplay=' + autoplay + '&api=1';

            if (this.core.s.vimeoPlayerParams) {
              a = a + '&' + utils.param(this.core.s.vimeoPlayerParams);
            }

            video = '<iframe class="lg-video-object lg-vimeo ' + addClass + '" width="560" height="315"  src="//player.vimeo.com/video/' + isVideo.vimeo[1] + a + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
          } else if (isVideo.dailymotion) {
            a = '?wmode=opaque&autoplay=' + autoplay + '&api=postMessage';

            if (this.core.s.dailymotionPlayerParams) {
              a = a + '&' + utils.param(this.core.s.dailymotionPlayerParams);
            }

            video = '<iframe class="lg-video-object lg-dailymotion ' + addClass + '" width="560" height="315" src="//www.dailymotion.com/embed/video/' + isVideo.dailymotion[1] + a + '" frameborder="0" allowfullscreen></iframe>';
          } else if (isVideo.html5) {
            var fL = html.substring(0, 1);

            if (fL === '.' || fL === '#') {
              html = document.querySelector(html).innerHTML;
            }

            video = html;
          } else if (isVideo.vk) {
            a = '&autoplay=' + autoplay;

            if (this.core.s.vkPlayerParams) {
              a = a + '&' + utils.param(this.core.s.vkPlayerParams);
            }

            video = '<iframe class="lg-video-object lg-vk ' + addClass + '" width="560" height="315" src="http://vk.com/video_ext.php?' + isVideo.vk[1] + a + '" frameborder="0" allowfullscreen></iframe>';
          }

          return video;
        };

        Video.prototype.destroy = function () {
          this.videoLoaded = false;
        };

        window.lgModules.video = Video;
      });
    }, {}]
  }, {}, [1])(1);
});
},{}],"libs/lightGallery1.1/js/lg-zoom.js":[function(require,module,exports) {
var define;
var global = arguments[3];
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**!
 * lg-zoom.js | 1.0.1 | December 22nd 2016
 * http://sachinchoolur.github.io/lg-zoom.js
 * Copyright (c) 2016 Sachin N; 
 * @license GPLv3 
 */
(function (f) {
  if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
    module.exports = f();
  } else if (typeof define === "function" && define.amd) {
    define([], f);
  } else {
    var g;

    if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      g = this;
    }

    g.LgZoom = f();
  }
})(function () {
  var define, module, exports;
  return function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof require == "function" && require;
          if (!u && a) return a(o, !0);
          if (i) return i(o, !0);
          var f = new Error("Cannot find module '" + o + "'");
          throw f.code = "MODULE_NOT_FOUND", f;
        }

        var l = n[o] = {
          exports: {}
        };
        t[o][0].call(l.exports, function (e) {
          var n = t[o][1][e];
          return s(n ? n : e);
        }, l, l.exports, e, t, n, r);
      }

      return n[o].exports;
    }

    var i = typeof require == "function" && require;

    for (var o = 0; o < r.length; o++) {
      s(r[o]);
    }

    return s;
  }({
    1: [function (require, module, exports) {
      (function (global, factory) {
        if (typeof define === "function" && define.amd) {
          define([], factory);
        } else if (typeof exports !== "undefined") {
          factory();
        } else {
          var mod = {
            exports: {}
          };
          factory();
          global.lgZoom = mod.exports;
        }
      })(this, function () {
        'use strict';

        var _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }

          return target;
        };

        var getUseLeft = function getUseLeft() {
          var useLeft = false;
          var isChrome = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);

          if (isChrome && parseInt(isChrome[2], 10) < 54) {
            useLeft = true;
          }

          return useLeft;
        };

        var zoomDefaults = {
          scale: 1,
          zoom: true,
          actualSize: true,
          enableZoomAfter: 300,
          useLeftForZoom: getUseLeft()
        };

        var Zoom = function Zoom(element) {
          this.el = element;
          this.core = window.lgData[this.el.getAttribute('lg-uid')];
          this.core.s = _extends({}, zoomDefaults, this.core.s);

          if (this.core.s.zoom && this.core.doCss()) {
            this.init(); // Store the zoomable timeout value just to clear it while closing

            this.zoomabletimeout = false; // Set the initial value center

            this.pageX = window.innerWidth / 2;
            this.pageY = window.innerHeight / 2 + (document.documentElement.scrollTop || document.body.scrollTop);
          }

          return this;
        };

        Zoom.prototype.init = function () {
          var _this = this;

          var zoomIcons = '<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';

          if (_this.core.s.actualSize) {
            zoomIcons += '<span id="lg-actual-size" class="lg-icon"></span>';
          }

          if (_this.core.s.useLeftForZoom) {
            utils.addClass(_this.core.outer, 'lg-use-left-for-zoom');
          } else {
            utils.addClass(_this.core.outer, 'lg-use-transition-for-zoom');
          }

          this.core.outer.querySelector('.lg-toolbar').insertAdjacentHTML('beforeend', zoomIcons); // Add zoomable class

          utils.on(_this.core.el, 'onSlideItemLoad.lgtmzoom', function (event) {
            // delay will be 0 except first time
            var _speed = _this.core.s.enableZoomAfter + event.detail.delay; // set _speed value 0 if gallery opened from direct url and if it is first slide


            if (utils.hasClass(document.body, 'lg-from-hash') && event.detail.delay) {
              // will execute only once
              _speed = 0;
            } else {
              // Remove lg-from-hash to enable starting animation.
              utils.removeClass(document.body, 'lg-from-hash');
            }

            _this.zoomabletimeout = setTimeout(function () {
              utils.addClass(_this.core.___slide[event.detail.index], 'lg-zoomable');
            }, _speed + 30);
          });
          var scale = 1;
          /**
           * @desc Image zoom
           * Translate the wrap and scale the image to get better user experience
           *
           * @param {String} scaleVal - Zoom decrement/increment value
           */

          var zoom = function zoom(scaleVal) {
            var image = _this.core.outer.querySelector('.lg-current .lg-image');

            var _x;

            var _y; // Find offset manually to avoid issue after zoom


            var offsetX = (window.innerWidth - image.clientWidth) / 2;
            var offsetY = (window.innerHeight - image.clientHeight) / 2 + (document.documentElement.scrollTop || document.body.scrollTop);
            _x = _this.pageX - offsetX;
            _y = _this.pageY - offsetY;
            var x = (scaleVal - 1) * _x;
            var y = (scaleVal - 1) * _y;
            utils.setVendor(image, 'Transform', 'scale3d(' + scaleVal + ', ' + scaleVal + ', 1)');
            image.setAttribute('data-scale', scaleVal);

            if (_this.core.s.useLeftForZoom) {
              image.parentElement.style.left = -x + 'px';
              image.parentElement.style.top = -y + 'px';
            } else {
              utils.setVendor(image.parentElement, 'Transform', 'translate3d(-' + x + 'px, -' + y + 'px, 0)');
            }

            image.parentElement.setAttribute('data-x', x);
            image.parentElement.setAttribute('data-y', y);
          };

          var callScale = function callScale() {
            if (scale > 1) {
              utils.addClass(_this.core.outer, 'lg-zoomed');
            } else {
              _this.resetZoom();
            }

            if (scale < 1) {
              scale = 1;
            }

            zoom(scale);
          };

          var actualSize = function actualSize(event, image, index, fromIcon) {
            var w = image.clientWidth;
            var nw;

            if (_this.core.s.dynamic) {
              nw = _this.core.s.dynamicEl[index].width || image.naturalWidth || w;
            } else {
              nw = _this.core.items[index].getAttribute('data-width') || image.naturalWidth || w;
            }

            var _scale;

            if (utils.hasClass(_this.core.outer, 'lg-zoomed')) {
              scale = 1;
            } else {
              if (nw > w) {
                _scale = nw / w;
                scale = _scale || 2;
              }
            }

            if (fromIcon) {
              _this.pageX = window.innerWidth / 2;
              _this.pageY = window.innerHeight / 2 + (document.documentElement.scrollTop || document.body.scrollTop);
            } else {
              _this.pageX = event.pageX || event.targetTouches[0].pageX;
              _this.pageY = event.pageY || event.targetTouches[0].pageY;
            }

            callScale();
            setTimeout(function () {
              utils.removeClass(_this.core.outer, 'lg-grabbing');
              utils.addClass(_this.core.outer, 'lg-grab');
            }, 10);
          };

          var tapped = false; // event triggered after appending slide content

          utils.on(_this.core.el, 'onAferAppendSlide.lgtmzoom', function (event) {
            var index = event.detail.index; // Get the current element

            var image = _this.core.___slide[index].querySelector('.lg-image');

            if (!_this.core.isTouch) {
              utils.on(image, 'dblclick', function (event) {
                actualSize(event, image, index);
              });
            }

            if (_this.core.isTouch) {
              utils.on(image, 'touchstart', function (event) {
                if (!tapped) {
                  tapped = setTimeout(function () {
                    tapped = null;
                  }, 300);
                } else {
                  clearTimeout(tapped);
                  tapped = null;
                  actualSize(event, image, index);
                }

                event.preventDefault();
              });
            }
          }); // Update zoom on resize and orientationchange

          utils.on(window, 'resize.lgzoom scroll.lgzoom orientationchange.lgzoom', function () {
            _this.pageX = window.innerWidth / 2;
            _this.pageY = window.innerHeight / 2 + (document.documentElement.scrollTop || document.body.scrollTop);
            zoom(scale);
          });
          utils.on(document.getElementById('lg-zoom-out'), 'click.lg', function () {
            if (_this.core.outer.querySelector('.lg-current .lg-image')) {
              scale -= _this.core.s.scale;
              callScale();
            }
          });
          utils.on(document.getElementById('lg-zoom-in'), 'click.lg', function () {
            if (_this.core.outer.querySelector('.lg-current .lg-image')) {
              scale += _this.core.s.scale;
              callScale();
            }
          });
          utils.on(document.getElementById('lg-actual-size'), 'click.lg', function (event) {
            actualSize(event, _this.core.___slide[_this.core.index].querySelector('.lg-image'), _this.core.index, true);
          }); // Reset zoom on slide change

          utils.on(_this.core.el, 'onBeforeSlide.lgtm', function () {
            scale = 1;

            _this.resetZoom();
          }); // Drag option after zoom

          if (!_this.core.isTouch) {
            _this.zoomDrag();
          }

          if (_this.core.isTouch) {
            _this.zoomSwipe();
          }
        }; // Reset zoom effect


        Zoom.prototype.resetZoom = function () {
          utils.removeClass(this.core.outer, 'lg-zoomed');

          for (var i = 0; i < this.core.___slide.length; i++) {
            if (this.core.___slide[i].querySelector('.lg-img-wrap')) {
              this.core.___slide[i].querySelector('.lg-img-wrap').removeAttribute('style');

              this.core.___slide[i].querySelector('.lg-img-wrap').removeAttribute('data-x');

              this.core.___slide[i].querySelector('.lg-img-wrap').removeAttribute('data-y');
            }
          }

          for (var j = 0; j < this.core.___slide.length; j++) {
            if (this.core.___slide[j].querySelector('.lg-image')) {
              this.core.___slide[j].querySelector('.lg-image').removeAttribute('style');

              this.core.___slide[j].querySelector('.lg-image').removeAttribute('data-scale');
            }
          } // Reset pagx pagy values to center


          this.pageX = window.innerWidth / 2;
          this.pageY = window.innerHeight / 2 + (document.documentElement.scrollTop || document.body.scrollTop);
        };

        Zoom.prototype.zoomSwipe = function () {
          var _this = this;

          var startCoords = {};
          var endCoords = {};
          var isMoved = false; // Allow x direction drag

          var allowX = false; // Allow Y direction drag

          var allowY = false;

          for (var i = 0; i < _this.core.___slide.length; i++) {
            /*jshint loopfunc: true */
            utils.on(_this.core.___slide[i], 'touchstart.lg', function (e) {
              if (utils.hasClass(_this.core.outer, 'lg-zoomed')) {
                var image = _this.core.___slide[_this.core.index].querySelector('.lg-object');

                allowY = image.offsetHeight * image.getAttribute('data-scale') > _this.core.outer.querySelector('.lg').clientHeight;
                allowX = image.offsetWidth * image.getAttribute('data-scale') > _this.core.outer.querySelector('.lg').clientWidth;

                if (allowX || allowY) {
                  e.preventDefault();
                  startCoords = {
                    x: e.targetTouches[0].pageX,
                    y: e.targetTouches[0].pageY
                  };
                }
              }
            });
          }

          for (var j = 0; j < _this.core.___slide.length; j++) {
            /*jshint loopfunc: true */
            utils.on(_this.core.___slide[j], 'touchmove.lg', function (e) {
              if (utils.hasClass(_this.core.outer, 'lg-zoomed')) {
                var _el = _this.core.___slide[_this.core.index].querySelector('.lg-img-wrap');

                var distanceX;
                var distanceY;
                e.preventDefault();
                isMoved = true;
                endCoords = {
                  x: e.targetTouches[0].pageX,
                  y: e.targetTouches[0].pageY
                }; // reset opacity and transition duration

                utils.addClass(_this.core.outer, 'lg-zoom-dragging');

                if (allowY) {
                  distanceY = -Math.abs(_el.getAttribute('data-y')) + (endCoords.y - startCoords.y);
                } else {
                  distanceY = -Math.abs(_el.getAttribute('data-y'));
                }

                if (allowX) {
                  distanceX = -Math.abs(_el.getAttribute('data-x')) + (endCoords.x - startCoords.x);
                } else {
                  distanceX = -Math.abs(_el.getAttribute('data-x'));
                }

                if (Math.abs(endCoords.x - startCoords.x) > 15 || Math.abs(endCoords.y - startCoords.y) > 15) {
                  if (_this.core.s.useLeftForZoom) {
                    _el.style.left = distanceX + 'px';
                    _el.style.top = distanceY + 'px';
                  } else {
                    utils.setVendor(_el, 'Transform', 'translate3d(' + distanceX + 'px, ' + distanceY + 'px, 0)');
                  }
                }
              }
            });
          }

          for (var k = 0; k < _this.core.___slide.length; k++) {
            /*jshint loopfunc: true */
            utils.on(_this.core.___slide[k], 'touchend.lg', function () {
              if (utils.hasClass(_this.core.outer, 'lg-zoomed')) {
                if (isMoved) {
                  isMoved = false;
                  utils.removeClass(_this.core.outer, 'lg-zoom-dragging');

                  _this.touchendZoom(startCoords, endCoords, allowX, allowY);
                }
              }
            });
          }
        };

        Zoom.prototype.zoomDrag = function () {
          var _this = this;

          var startCoords = {};
          var endCoords = {};
          var isDraging = false;
          var isMoved = false; // Allow x direction drag

          var allowX = false; // Allow Y direction drag

          var allowY = false;

          for (var i = 0; i < _this.core.___slide.length; i++) {
            /*jshint loopfunc: true */
            utils.on(_this.core.___slide[i], 'mousedown.lgzoom', function (e) {
              // execute only on .lg-object
              var image = _this.core.___slide[_this.core.index].querySelector('.lg-object');

              allowY = image.offsetHeight * image.getAttribute('data-scale') > _this.core.outer.querySelector('.lg').clientHeight;
              allowX = image.offsetWidth * image.getAttribute('data-scale') > _this.core.outer.querySelector('.lg').clientWidth;

              if (utils.hasClass(_this.core.outer, 'lg-zoomed')) {
                if (utils.hasClass(e.target, 'lg-object') && (allowX || allowY)) {
                  e.preventDefault();
                  startCoords = {
                    x: e.pageX,
                    y: e.pageY
                  };
                  isDraging = true; // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723

                  _this.core.outer.scrollLeft += 1;
                  _this.core.outer.scrollLeft -= 1;
                  utils.removeClass(_this.core.outer, 'lg-grab');
                  utils.addClass(_this.core.outer, 'lg-grabbing');
                }
              }
            });
          }

          utils.on(window, 'mousemove.lgzoom', function (e) {
            if (isDraging) {
              var _el = _this.core.___slide[_this.core.index].querySelector('.lg-img-wrap');

              var distanceX;
              var distanceY;
              isMoved = true;
              endCoords = {
                x: e.pageX,
                y: e.pageY
              }; // reset opacity and transition duration

              utils.addClass(_this.core.outer, 'lg-zoom-dragging');

              if (allowY) {
                distanceY = -Math.abs(_el.getAttribute('data-y')) + (endCoords.y - startCoords.y);
              } else {
                distanceY = -Math.abs(_el.getAttribute('data-y'));
              }

              if (allowX) {
                distanceX = -Math.abs(_el.getAttribute('data-x')) + (endCoords.x - startCoords.x);
              } else {
                distanceX = -Math.abs(_el.getAttribute('data-x'));
              }

              if (_this.core.s.useLeftForZoom) {
                _el.style.left = distanceX + 'px';
                _el.style.top = distanceY + 'px';
              } else {
                utils.setVendor(_el, 'Transform', 'translate3d(' + distanceX + 'px, ' + distanceY + 'px, 0)');
              }
            }
          });
          utils.on(window, 'mouseup.lgzoom', function (e) {
            if (isDraging) {
              isDraging = false;
              utils.removeClass(_this.core.outer, 'lg-zoom-dragging'); // Fix for chrome mouse move on click

              if (isMoved && (startCoords.x !== endCoords.x || startCoords.y !== endCoords.y)) {
                endCoords = {
                  x: e.pageX,
                  y: e.pageY
                };

                _this.touchendZoom(startCoords, endCoords, allowX, allowY);
              }

              isMoved = false;
            }

            utils.removeClass(_this.core.outer, 'lg-grabbing');
            utils.addClass(_this.core.outer, 'lg-grab');
          });
        };

        Zoom.prototype.touchendZoom = function (startCoords, endCoords, allowX, allowY) {
          var _this = this;

          var _el = _this.core.___slide[_this.core.index].querySelector('.lg-img-wrap');

          var image = _this.core.___slide[_this.core.index].querySelector('.lg-object');

          var distanceX = -Math.abs(_el.getAttribute('data-x')) + (endCoords.x - startCoords.x);
          var distanceY = -Math.abs(_el.getAttribute('data-y')) + (endCoords.y - startCoords.y);
          var minY = (_this.core.outer.querySelector('.lg').clientHeight - image.offsetHeight) / 2;
          var maxY = Math.abs(image.offsetHeight * Math.abs(image.getAttribute('data-scale')) - _this.core.outer.querySelector('.lg').clientHeight + minY);
          var minX = (_this.core.outer.querySelector('.lg').clientWidth - image.offsetWidth) / 2;
          var maxX = Math.abs(image.offsetWidth * Math.abs(image.getAttribute('data-scale')) - _this.core.outer.querySelector('.lg').clientWidth + minX);

          if (Math.abs(endCoords.x - startCoords.x) > 15 || Math.abs(endCoords.y - startCoords.y) > 15) {
            if (allowY) {
              if (distanceY <= -maxY) {
                distanceY = -maxY;
              } else if (distanceY >= -minY) {
                distanceY = -minY;
              }
            }

            if (allowX) {
              if (distanceX <= -maxX) {
                distanceX = -maxX;
              } else if (distanceX >= -minX) {
                distanceX = -minX;
              }
            }

            if (allowY) {
              _el.setAttribute('data-y', Math.abs(distanceY));
            } else {
              distanceY = -Math.abs(_el.getAttribute('data-y'));
            }

            if (allowX) {
              _el.setAttribute('data-x', Math.abs(distanceX));
            } else {
              distanceX = -Math.abs(_el.getAttribute('data-x'));
            }

            if (_this.core.s.useLeftForZoom) {
              _el.style.left = distanceX + 'px';
              _el.style.top = distanceY + 'px';
            } else {
              utils.setVendor(_el, 'Transform', 'translate3d(' + distanceX + 'px, ' + distanceY + 'px, 0)');
            }
          }
        };

        Zoom.prototype.destroy = function () {
          var _this = this; // Unbind all events added by lightGallery zoom plugin


          utils.off(_this.core.el, '.lgzoom');
          utils.off(window, '.lgzoom');

          for (var i = 0; i < _this.core.___slide.length; i++) {
            utils.off(_this.core.___slide[i], '.lgzoom');
          }

          utils.off(_this.core.el, '.lgtmzoom');

          _this.resetZoom();

          clearTimeout(_this.zoomabletimeout);
          _this.zoomabletimeout = false;
        };

        window.lgModules.zoom = Zoom;
      });
    }, {}]
  }, {}, [1])(1);
});
},{}],"javascripts/mansory_grid.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchSamples = fetchSamples;

var _masonryLayout = _interopRequireDefault(require("masonry-layout"));

var _imagesloaded = _interopRequireDefault(require("imagesloaded"));

require("lightgallery.js");

require("./../libs/lightGallery1.1/js/lg-fullscreen");

require("./../libs/lightGallery1.1/js/lg-hash");

require("./../libs/lightGallery1.1/js/lg-pager");

require("./../libs/lightGallery1.1/js/lg-autoplay");

require("./../libs/lightGallery1.1/js/lg-share");

require("./../libs/lightGallery1.1/js/lg-video");

require("./../libs/lightGallery1.1/js/lg-zoom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// init Masonry
//import "./../libs/lightGallery1.1/js/lg-thumbnail"
// =========== Masonry ===========================
// external js: masonry.pkgd.js, imagesloaded.pkgd.js
var grid = document.querySelector('.grid');
var masonryOptions = {
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true,
  gutter: 16
};

function fetchSamples() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "all";
  grid.innerHTML = "<div class=\"progress\"><div class=\"indeterminate\"></div></div>";
  fetch("./javascripts/samples.json").then(function (data) {
    return data.json();
  }).then(function (webObjects) {
    var samplesList = '<li class="grid-sizer"></li>';
    webObjects.forEach(function (web) {
      // filter results
      if (["php", "wordpress", "vbulletin", "android", "html"].includes(type)) {
        if (web.programming !== type) return;
      }

      var divClass = "grid-item";
      if (web.width === "2") divClass = "grid-item grid-item--width2";
      samplesList += "\n                <li class=\"".concat(divClass, "\" data-src=\"images/websites/").concat(web.id, ".jpg\"\n                    data-sub-html=\"<span class='galleryIcons'>\n                      <i class='material-icons'> date_range </i>  ").concat(web.year, "\n                      <i class='material-icons'> code </i> ").concat(web.programming, "\n                      ");
      if (web.link) samplesList += "<i class='material-icons'> link </i> \n                         <a target='_blank' href='".concat(web.link, "'>").concat(web.link, "</a>");
      samplesList += "</span>\"\n                    data-pinterest-text=\"Pin it1\" \n                >\n                    <a class=\"hvr-grow-shadow\" href=\"\"> \n                        <img class=\"responsive-img z-depth-2\" \n                              src=\"images/thumb/thumb_".concat(web.id, ".jpg\"\n                              alt=\"thumb_").concat(web.id, "\"\n                              >\n                    </a>\n                </li>");
    });
    grid.innerHTML = samplesList;
  }).then(function () {
    var masonryGrid = new _masonryLayout.default(grid, masonryOptions);
    (0, _imagesloaded.default)(grid).on('progress', function () {
      // layout Masonry after each image loads
      masonryGrid.layout();
      lightGallery(grid, {
        thumbnail: true
      });
    });
  }).catch(function (err) {
    return console.log(err);
  });
}
},{"masonry-layout":"../node_modules/masonry-layout/masonry.js","imagesloaded":"../node_modules/imagesloaded/imagesloaded.js","lightgallery.js":"../node_modules/lightgallery.js/lib/js/lightgallery.js","./../libs/lightGallery1.1/js/lg-fullscreen":"libs/lightGallery1.1/js/lg-fullscreen.js","./../libs/lightGallery1.1/js/lg-hash":"libs/lightGallery1.1/js/lg-hash.js","./../libs/lightGallery1.1/js/lg-pager":"libs/lightGallery1.1/js/lg-pager.js","./../libs/lightGallery1.1/js/lg-autoplay":"libs/lightGallery1.1/js/lg-autoplay.js","./../libs/lightGallery1.1/js/lg-share":"libs/lightGallery1.1/js/lg-share.js","./../libs/lightGallery1.1/js/lg-video":"libs/lightGallery1.1/js/lg-video.js","./../libs/lightGallery1.1/js/lg-zoom":"libs/lightGallery1.1/js/lg-zoom.js"}],"javascripts/skills.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchSkills = fetchSkills;
var programmingSkills = '';

function fetchSkills() {
  fetch("./javascripts/skills.json").then(function (data) {
    return data.json();
  }).then(function (skills) {
    skills.forEach(function (skill) {
      programmingSkills += "<div class=\"col s4\">\n                    <p>".concat(skill.id, "</p>\n                    <div class=\"progress grey lighten-2\">\n                        <div class=\"determinate  red darken-4\" style=\"width: ").concat(skill.progress, "%\"></div>\n                    </div></div>");
    });
    document.querySelector('.programming-skills').innerHTML = programmingSkills;
  });
}
},{}],"javascripts/scrollTo.js":[function(require,module,exports) {
function scrollIt(element) {
  window.scrollTo({
    'behavior': 'smooth',
    'left': 0,
    'top': element.offsetTop
  });
}

document.querySelectorAll('.vertical-icons-div a,.scrollTo').forEach(function (button) {
  button.addEventListener('click', function (e) {
    e.preventDefault();
    var href = button.getAttribute('href');
    scrollIt(document.querySelector("".concat(href)));
  });
});
},{}],"app.js":[function(require,module,exports) {
"use strict";

var _materialize = _interopRequireDefault(require("./javascripts/materialize.min"));

var _mansory_grid = require("./javascripts/mansory_grid");

var _skills = require("./javascripts/skills");

require("./javascripts/scrollTo");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_materialize.default.AutoInit();

(0, _mansory_grid.fetchSamples)();
(0, _skills.fetchSkills)();
document.querySelectorAll('#filter-samples li').forEach(function (tab) {
  tab.addEventListener("click", function () {
    (0, _mansory_grid.fetchSamples)(this.dataset.filter);
  });
});
},{"./javascripts/materialize.min":"javascripts/materialize.min.js","./javascripts/mansory_grid":"javascripts/mansory_grid.js","./javascripts/skills":"javascripts/skills.js","./javascripts/scrollTo":"javascripts/scrollTo.js"}],"C:/Users/Zuhair/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "35175" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["C:/Users/Zuhair/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.js"], null)
//# sourceMappingURL=/app.map