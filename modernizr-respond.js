/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssanimations-csstransforms-csstransforms3d-csstransitions-cssvhunit-cssvwunit-history-placeholder-svgasimg-touchevents-video-webp-addtest-domprefixes-mq-prefixed-prefixes-setclasses-shiv-testallprops-testprop-teststyles !*/
!(function (e, t, n) {
  function r(e, t) {
    return typeof e === t;
  }
  function o() {
    var e, t, n, o, a, i, s;
    for (var l in S)
      if (S.hasOwnProperty(l)) {
        if (
          ((e = []),
          (t = S[l]),
          t.name &&
            (e.push(t.name.toLowerCase()),
            t.options && t.options.aliases && t.options.aliases.length))
        )
          for (n = 0; n < t.options.aliases.length; n++)
            e.push(t.options.aliases[n].toLowerCase());
        for (o = r(t.fn, "function") ? t.fn() : t.fn, a = 0; a < e.length; a++)
          (i = e[a]),
            (s = i.split(".")),
            1 === s.length
              ? (Modernizr[s[0]] = o)
              : (!Modernizr[s[0]] ||
                  Modernizr[s[0]] instanceof Boolean ||
                  (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])),
                (Modernizr[s[0]][s[1]] = o)),
            b.push((o ? "" : "no-") + s.join("-"));
      }
  }
  function a(e) {
    var t = x.className,
      n = Modernizr._config.classPrefix || "";
    if ((T && (t = t.baseVal), Modernizr._config.enableJSClass)) {
      var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
      t = t.replace(r, "$1" + n + "js$2");
    }
    Modernizr._config.enableClasses &&
      ((t += " " + n + e.join(" " + n)),
      T ? (x.className.baseVal = t) : (x.className = t));
  }
  function i(e, t) {
    if ("object" == typeof e) for (var n in e) P(e, n) && i(n, e[n]);
    else {
      e = e.toLowerCase();
      var r = e.split("."),
        o = Modernizr[r[0]];
      if ((2 == r.length && (o = o[r[1]]), "undefined" != typeof o))
        return Modernizr;
      (t = "function" == typeof t ? t() : t),
        1 == r.length
          ? (Modernizr[r[0]] = t)
          : (!Modernizr[r[0]] ||
              Modernizr[r[0]] instanceof Boolean ||
              (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])),
            (Modernizr[r[0]][r[1]] = t)),
        a([(t && 0 != t ? "" : "no-") + r.join("-")]),
        Modernizr._trigger(e, t);
    }
    return Modernizr;
  }
  function s(e) {
    return e
      .replace(/([a-z])-([a-z])/g, function (e, t, n) {
        return t + n.toUpperCase();
      })
      .replace(/^-/, "");
  }
  function l() {
    return "function" != typeof t.createElement
      ? t.createElement(arguments[0])
      : T
      ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0])
      : t.createElement.apply(t, arguments);
  }
  function u(t, n, r) {
    var o;
    if ("getComputedStyle" in e) {
      o = getComputedStyle.call(e, t, n);
      var a = e.console;
      if (null !== o) r && (o = o.getPropertyValue(r));
      else if (a) {
        var i = a.error ? "error" : "log";
        a[i].call(
          a,
          "getComputedStyle returning null, its possible modernizr test results are inaccurate"
        );
      }
    } else o = !n && t.currentStyle && t.currentStyle[r];
    return o;
  }
  function c(e, t) {
    return e - 1 === t || e === t || e + 1 === t;
  }
  function f() {
    var e = t.body;
    return e || ((e = l(T ? "svg" : "body")), (e.fake = !0)), e;
  }
  function d(e, n, r, o) {
    var a,
      i,
      s,
      u,
      c = "modernizr",
      d = l("div"),
      p = f();
    if (parseInt(r, 10))
      for (; r--; )
        (s = l("div")), (s.id = o ? o[r] : c + (r + 1)), d.appendChild(s);
    return (
      (a = l("style")),
      (a.type = "text/css"),
      (a.id = "s" + c),
      (p.fake ? p : d).appendChild(a),
      p.appendChild(d),
      a.styleSheet
        ? (a.styleSheet.cssText = e)
        : a.appendChild(t.createTextNode(e)),
      (d.id = c),
      p.fake &&
        ((p.style.background = ""),
        (p.style.overflow = "hidden"),
        (u = x.style.overflow),
        (x.style.overflow = "hidden"),
        x.appendChild(p)),
      (i = n(d, e)),
      p.fake
        ? (p.parentNode.removeChild(p), (x.style.overflow = u), x.offsetHeight)
        : d.parentNode.removeChild(d),
      !!i
    );
  }
  function p(e, t) {
    return !!~("" + e).indexOf(t);
  }
  function A(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  function m(e, t, n) {
    var o;
    for (var a in e)
      if (e[a] in t)
        return n === !1
          ? e[a]
          : ((o = t[e[a]]), r(o, "function") ? A(o, n || t) : o);
    return !1;
  }
  function h(e) {
    return e
      .replace(/([A-Z])/g, function (e, t) {
        return "-" + t.toLowerCase();
      })
      .replace(/^ms-/, "-ms-");
  }
  function v(t, r) {
    var o = t.length;
    if ("CSS" in e && "supports" in e.CSS) {
      for (; o--; ) if (e.CSS.supports(h(t[o]), r)) return !0;
      return !1;
    }
    if ("CSSSupportsRule" in e) {
      for (var a = []; o--; ) a.push("(" + h(t[o]) + ":" + r + ")");
      return (
        (a = a.join(" or ")),
        d(
          "@supports (" + a + ") { #modernizr { position: absolute; } }",
          function (e) {
            return "absolute" == u(e, null, "position");
          }
        )
      );
    }
    return n;
  }
  function g(e, t, o, a) {
    function i() {
      c && (delete j.style, delete j.modElem);
    }
    if (((a = r(a, "undefined") ? !1 : a), !r(o, "undefined"))) {
      var u = v(e, o);
      if (!r(u, "undefined")) return u;
    }
    for (
      var c, f, d, A, m, h = ["modernizr", "tspan", "samp"];
      !j.style && h.length;

    )
      (c = !0), (j.modElem = l(h.shift())), (j.style = j.modElem.style);
    for (d = e.length, f = 0; d > f; f++)
      if (
        ((A = e[f]),
        (m = j.style[A]),
        p(A, "-") && (A = s(A)),
        j.style[A] !== n)
      ) {
        if (a || r(o, "undefined")) return i(), "pfx" == t ? A : !0;
        try {
          j.style[A] = o;
        } catch (g) {}
        if (j.style[A] != m) return i(), "pfx" == t ? A : !0;
      }
    return i(), !1;
  }
  function y(e, t, n, o, a) {
    var i = e.charAt(0).toUpperCase() + e.slice(1),
      s = (e + " " + k.join(i + " ") + i).split(" ");
    return r(t, "string") || r(t, "undefined")
      ? g(s, t, o, a)
      : ((s = (e + " " + B.join(i + " ") + i).split(" ")), m(s, t, n));
  }
  function w(e, t, r) {
    return y(e, n, n, t, r);
  }
  var b = [],
    S = [],
    C = {
      _version: "3.6.0",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0,
      },
      _q: [],
      on: function (e, t) {
        var n = this;
        setTimeout(function () {
          t(n[e]);
        }, 0);
      },
      addTest: function (e, t, n) {
        S.push({ name: e, fn: t, options: n });
      },
      addAsyncTest: function (e) {
        S.push({ name: null, fn: e });
      },
    },
    Modernizr = function () {};
  (Modernizr.prototype = C),
    (Modernizr = new Modernizr()),
    Modernizr.addTest("history", function () {
      var t = navigator.userAgent;
      return (-1 === t.indexOf("Android 2.") &&
        -1 === t.indexOf("Android 4.0")) ||
        -1 === t.indexOf("Mobile Safari") ||
        -1 !== t.indexOf("Chrome") ||
        -1 !== t.indexOf("Windows Phone") ||
        "file:" === location.protocol
        ? e.history && "pushState" in e.history
        : !1;
    });
  var E = C._config.usePrefixes
    ? " -webkit- -moz- -o- -ms- ".split(" ")
    : ["", ""];
  C._prefixes = E;
  var x = t.documentElement,
    T = "svg" === x.nodeName.toLowerCase();
  T ||
    !(function (e, t) {
      function n(e, t) {
        var n = e.createElement("p"),
          r = e.getElementsByTagName("head")[0] || e.documentElement;
        return (
          (n.innerHTML = "x<style>" + t + "</style>"),
          r.insertBefore(n.lastChild, r.firstChild)
        );
      }
      function r() {
        var e = y.elements;
        return "string" == typeof e ? e.split(" ") : e;
      }
      function o(e, t) {
        var n = y.elements;
        "string" != typeof n && (n = n.join(" ")),
          "string" != typeof e && (e = e.join(" ")),
          (y.elements = n + " " + e),
          u(t);
      }
      function a(e) {
        var t = g[e[h]];
        return t || ((t = {}), v++, (e[h] = v), (g[v] = t)), t;
      }
      function i(e, n, r) {
        if ((n || (n = t), f)) return n.createElement(e);
        r || (r = a(n));
        var o;
        return (
          (o = r.cache[e]
            ? r.cache[e].cloneNode()
            : m.test(e)
            ? (r.cache[e] = r.createElem(e)).cloneNode()
            : r.createElem(e)),
          !o.canHaveChildren || A.test(e) || o.tagUrn
            ? o
            : r.frag.appendChild(o)
        );
      }
      function s(e, n) {
        if ((e || (e = t), f)) return e.createDocumentFragment();
        n = n || a(e);
        for (
          var o = n.frag.cloneNode(), i = 0, s = r(), l = s.length;
          l > i;
          i++
        )
          o.createElement(s[i]);
        return o;
      }
      function l(e, t) {
        t.cache ||
          ((t.cache = {}),
          (t.createElem = e.createElement),
          (t.createFrag = e.createDocumentFragment),
          (t.frag = t.createFrag())),
          (e.createElement = function (n) {
            return y.shivMethods ? i(n, e, t) : t.createElem(n);
          }),
          (e.createDocumentFragment = Function(
            "h,f",
            "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
              r()
                .join()
                .replace(/[\w\-:]+/g, function (e) {
                  return (
                    t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                  );
                }) +
              ");return n}"
          )(y, t.frag));
      }
      function u(e) {
        e || (e = t);
        var r = a(e);
        return (
          !y.shivCSS ||
            c ||
            r.hasCSS ||
            (r.hasCSS = !!n(
              e,
              "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}"
            )),
          f || l(e, r),
          e
        );
      }
      var c,
        f,
        d = "3.7.3",
        p = e.html5 || {},
        A =
          /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        m =
          /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        h = "_html5shiv",
        v = 0,
        g = {};
      !(function () {
        try {
          var e = t.createElement("a");
          (e.innerHTML = "<xyz></xyz>"),
            (c = "hidden" in e),
            (f =
              1 == e.childNodes.length ||
              (function () {
                t.createElement("a");
                var e = t.createDocumentFragment();
                return (
                  "undefined" == typeof e.cloneNode ||
                  "undefined" == typeof e.createDocumentFragment ||
                  "undefined" == typeof e.createElement
                );
              })());
        } catch (n) {
          (c = !0), (f = !0);
        }
      })();
      var y = {
        elements:
          p.elements ||
          "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
        version: d,
        shivCSS: p.shivCSS !== !1,
        supportsUnknownElements: f,
        shivMethods: p.shivMethods !== !1,
        type: "default",
        shivDocument: u,
        createElement: i,
        createDocumentFragment: s,
        addElements: o,
      };
      (e.html5 = y),
        u(t),
        "object" == typeof module && module.exports && (module.exports = y);
    })("undefined" != typeof e ? e : this, t);
  var _ = "Moz O ms Webkit",
    B = C._config.usePrefixes ? _.toLowerCase().split(" ") : [];
  C._domPrefixes = B;
  var P;
  !(function () {
    var e = {}.hasOwnProperty;
    P =
      r(e, "undefined") || r(e.call, "undefined")
        ? function (e, t) {
            return t in e && r(e.constructor.prototype[t], "undefined");
          }
        : function (t, n) {
            return e.call(t, n);
          };
  })(),
    (C._l = {}),
    (C.on = function (e, t) {
      this._l[e] || (this._l[e] = []),
        this._l[e].push(t),
        Modernizr.hasOwnProperty(e) &&
          setTimeout(function () {
            Modernizr._trigger(e, Modernizr[e]);
          }, 0);
    }),
    (C._trigger = function (e, t) {
      if (this._l[e]) {
        var n = this._l[e];
        setTimeout(function () {
          var e, r;
          for (e = 0; e < n.length; e++) (r = n[e])(t);
        }, 0),
          delete this._l[e];
      }
    }),
    Modernizr._q.push(function () {
      C.addTest = i;
    }),
    Modernizr.addAsyncTest(function () {
      function e(e, t, n) {
        function r(t) {
          var r = t && "load" === t.type ? 1 == o.width : !1,
            a = "webp" === e;
          i(e, a && r ? new Boolean(r) : r), n && n(t);
        }
        var o = new Image();
        (o.onerror = r), (o.onload = r), (o.src = t);
      }
      var t = [
          {
            uri: "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",
            name: "webp",
          },
          {
            uri: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",
            name: "webp.alpha",
          },
          {
            uri: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
            name: "webp.animation",
          },
          {
            uri: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",
            name: "webp.lossless",
          },
        ],
        n = t.shift();
      e(n.name, n.uri, function (n) {
        if (n && "load" === n.type)
          for (var r = 0; r < t.length; r++) e(t[r].name, t[r].uri);
      });
    }),
    Modernizr.addTest(
      "svgasimg",
      t.implementation.hasFeature(
        "http://www.w3.org/TR/SVG11/feature#Image",
        "1.1"
      )
    ),
    Modernizr.addTest("video", function () {
      var e = l("video"),
        t = !1;
      try {
        (t = !!e.canPlayType),
          t &&
            ((t = new Boolean(t)),
            (t.ogg = e
              .canPlayType('video/ogg; codecs="theora"')
              .replace(/^no$/, "")),
            (t.h264 = e
              .canPlayType('video/mp4; codecs="avc1.42E01E"')
              .replace(/^no$/, "")),
            (t.webm = e
              .canPlayType('video/webm; codecs="vp8, vorbis"')
              .replace(/^no$/, "")),
            (t.vp9 = e
              .canPlayType('video/webm; codecs="vp9"')
              .replace(/^no$/, "")),
            (t.hls = e
              .canPlayType('application/x-mpegURL; codecs="avc1.42E01E"')
              .replace(/^no$/, "")));
      } catch (n) {}
      return t;
    }),
    Modernizr.addTest(
      "placeholder",
      "placeholder" in l("input") && "placeholder" in l("textarea")
    );
  var U = "CSS" in e && "supports" in e.CSS,
    Q = "supportsCSS" in e;
  Modernizr.addTest("supports", U || Q);
  var D = (function () {
    var t = e.matchMedia || e.msMatchMedia;
    return t
      ? function (e) {
          var n = t(e);
          return (n && n.matches) || !1;
        }
      : function (t) {
          var n = !1;
          return (
            d(
              "@media " + t + " { #modernizr { position: absolute; } }",
              function (t) {
                n =
                  "absolute" ==
                  (e.getComputedStyle
                    ? e.getComputedStyle(t, null)
                    : t.currentStyle
                  ).position;
              }
            ),
            n
          );
        };
  })();
  C.mq = D;
  var R = (C.testStyles = d);
  Modernizr.addTest("touchevents", function () {
    var n;
    if ("ontouchstart" in e || (e.DocumentTouch && t instanceof DocumentTouch))
      n = !0;
    else {
      var r = [
        "@media (",
        E.join("touch-enabled),("),
        "heartz",
        ")",
        "{#modernizr{top:9px;position:absolute}}",
      ].join("");
      R(r, function (e) {
        n = 9 === e.offsetTop;
      });
    }
    return n;
  }),
    R("#modernizr { height: 50vh; }", function (t) {
      var n = parseInt(e.innerHeight / 2, 10),
        r = parseInt(u(t, null, "height"), 10);
      Modernizr.addTest("cssvhunit", c(r, n));
    }),
    R("#modernizr { width: 50vw; }", function (t) {
      var n = parseInt(e.innerWidth / 2, 10),
        r = parseInt(u(t, null, "width"), 10);
      Modernizr.addTest("cssvwunit", c(r, n));
    });
  var k = C._config.usePrefixes ? _.split(" ") : [];
  C._cssomPrefixes = k;
  var z = function (t) {
    var r,
      o = E.length,
      a = e.CSSRule;
    if ("undefined" == typeof a) return n;
    if (!t) return !1;
    if (
      ((t = t.replace(/^@/, "")),
      (r = t.replace(/-/g, "_").toUpperCase() + "_RULE"),
      r in a)
    )
      return "@" + t;
    for (var i = 0; o > i; i++) {
      var s = E[i],
        l = s.toUpperCase() + "_" + r;
      if (l in a) return "@-" + s.toLowerCase() + "-" + t;
    }
    return !1;
  };
  C.atRule = z;
  var N = { elem: l("modernizr") };
  Modernizr._q.push(function () {
    delete N.elem;
  });
  var j = { style: N.elem.style };
  Modernizr._q.unshift(function () {
    delete j.style;
  });
  C.testProp = function (e, t, r) {
    return g([e], n, t, r);
  };
  C.testAllProps = y;
  C.prefixed = function (e, t, n) {
    return 0 === e.indexOf("@")
      ? z(e)
      : (-1 != e.indexOf("-") && (e = s(e)), t ? y(e, t, n) : y(e, "pfx"));
  };
  (C.testAllProps = w),
    Modernizr.addTest("cssanimations", w("animationName", "a", !0)),
    Modernizr.addTest("csstransforms", function () {
      return (
        -1 === navigator.userAgent.indexOf("Android 2.") &&
        w("transform", "scale(1)", !0)
      );
    }),
    Modernizr.addTest("csstransforms3d", function () {
      return !!w("perspective", "1px", !0);
    }),
    Modernizr.addTest("csstransitions", w("transition", "all", !0)),
    o(),
    a(b),
    delete C.addTest,
    delete C.addAsyncTest;
  for (var O = 0; O < Modernizr._q.length; O++) Modernizr._q[O]();
  e.Modernizr = Modernizr;
})(window, document);
/* Hover test for Modernizr */ Modernizr.addTest("mousehover", function () {
  var e,
    o = "(any-hover: hover)",
    r = !Modernizr.touchevents;
  return (
    "matchMedia" in window &&
      ((e = window.matchMedia(o)), e.media === o && (r = e.matches)),
    r
  );
});
/*! Respond.js v1.4.2: min/max-width media query polyfill
 * Copyright 2014 Scott Jehl
 * Licensed under MIT
 * http://j.mp/respondjs */
!(function (a) {
  "use strict";
  a.matchMedia =
    a.matchMedia ||
    (function (a) {
      var b,
        c = a.documentElement,
        d = c.firstElementChild || c.firstChild,
        e = a.createElement("body"),
        f = a.createElement("div");
      return (
        (f.id = "mq-test-1"),
        (f.style.cssText = "position:absolute;top:-100em"),
        (e.style.background = "none"),
        e.appendChild(f),
        function (a) {
          return (
            (f.innerHTML =
              '&shy;<style media="' +
              a +
              '"> #mq-test-1 { width: 42px; }</style>'),
            c.insertBefore(e, d),
            (b = 42 === f.offsetWidth),
            c.removeChild(e),
            { matches: b, media: a }
          );
        }
      );
    })(a.document);
})(this),
  (function (a) {
    "use strict";
    if (a.matchMedia && a.matchMedia("all").addListener) return !1;
    var b = a.matchMedia,
      c = b("only all").matches,
      d = !1,
      e = 0,
      f = [],
      g = function () {
        a.clearTimeout(e),
          (e = a.setTimeout(function () {
            for (var c = 0, d = f.length; d > c; c++) {
              var e = f[c].mql,
                g = f[c].listeners || [],
                h = b(e.media).matches;
              if (h !== e.matches) {
                e.matches = h;
                for (var i = 0, j = g.length; j > i; i++) g[i].call(a, e);
              }
            }
          }, 30));
      };
    a.matchMedia = function (e) {
      var h = b(e),
        i = [],
        j = 0;
      return (
        (h.addListener = function (b) {
          c &&
            (d || ((d = !0), a.addEventListener("resize", g, !0)),
            0 === j && (j = f.push({ mql: h, listeners: i })),
            i.push(b));
        }),
        (h.removeListener = function (a) {
          for (var b = 0, c = i.length; c > b; b++)
            i[b] === a && i.splice(b, 1);
        }),
        h
      );
    };
  })(this),
  (function (a) {
    "use strict";
    function b() {
      v(!0);
    }
    var c = {};
    (a.respond = c), (c.update = function () {});
    var d = [],
      e = (function () {
        var b = !1;
        try {
          b = new a.XMLHttpRequest();
        } catch (c) {
          b = new a.ActiveXObject("Microsoft.XMLHTTP");
        }
        return function () {
          return b;
        };
      })(),
      f = function (a, b) {
        var c = e();
        c &&
          (c.open("GET", a, !0),
          (c.onreadystatechange = function () {
            4 !== c.readyState ||
              (200 !== c.status && 304 !== c.status) ||
              b(c.responseText);
          }),
          4 !== c.readyState && c.send(null));
      },
      g = function (a) {
        return a.replace(c.regex.minmaxwh, "").match(c.regex.other);
      };
    if (
      ((c.ajax = f),
      (c.queue = d),
      (c.unsupportedmq = g),
      (c.regex = {
        media: /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,
        keyframes:
          /@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,
        comments: /\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,
        urls: /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,
        findStyles: /@media *([^\{]+)\{([\S\s]+?)$/,
        only: /(only\s+)?([a-zA-Z]+)\s?/,
        minw: /\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
        maxw: /\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
        minmaxwh:
          /\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,
        other: /\([^\)]*\)/g,
      }),
      (c.mediaQueriesSupported =
        a.matchMedia &&
        null !== a.matchMedia("only all") &&
        a.matchMedia("only all").matches),
      !c.mediaQueriesSupported)
    ) {
      var h,
        i,
        j,
        k = a.document,
        l = k.documentElement,
        m = [],
        n = [],
        o = [],
        p = {},
        q = 30,
        r = k.getElementsByTagName("head")[0] || l,
        s = k.getElementsByTagName("base")[0],
        t = r.getElementsByTagName("link"),
        u = function () {
          var a,
            b = k.createElement("div"),
            c = k.body,
            d = l.style.fontSize,
            e = c && c.style.fontSize,
            f = !1;
          return (
            (b.style.cssText = "position:absolute;font-size:1em;width:1em"),
            c ||
              ((c = f = k.createElement("body")),
              (c.style.background = "none")),
            (l.style.fontSize = "100%"),
            (c.style.fontSize = "100%"),
            c.appendChild(b),
            f && l.insertBefore(c, l.firstChild),
            (a = b.offsetWidth),
            f ? l.removeChild(c) : c.removeChild(b),
            (l.style.fontSize = d),
            e && (c.style.fontSize = e),
            (a = j = parseFloat(a))
          );
        },
        v = function (b) {
          var c = "clientWidth",
            d = l[c],
            e = ("CSS1Compat" === k.compatMode && d) || k.body[c] || d,
            f = {},
            g = t[t.length - 1],
            p = new Date().getTime();
          if (b && h && q > p - h)
            return a.clearTimeout(i), (i = a.setTimeout(v, q)), void 0;
          h = p;
          for (var s in m)
            if (m.hasOwnProperty(s)) {
              var w = m[s],
                x = w.minw,
                y = w.maxw,
                z = null === x,
                A = null === y,
                B = "em";
              x && (x = parseFloat(x) * (x.indexOf(B) > -1 ? j || u() : 1)),
                y && (y = parseFloat(y) * (y.indexOf(B) > -1 ? j || u() : 1)),
                (w.hasquery &&
                  ((z && A) || !(z || e >= x) || !(A || y >= e))) ||
                  (f[w.media] || (f[w.media] = []),
                  f[w.media].push(n[w.rules]));
            }
          for (var C in o)
            o.hasOwnProperty(C) &&
              o[C] &&
              o[C].parentNode === r &&
              r.removeChild(o[C]);
          o.length = 0;
          for (var D in f)
            if (f.hasOwnProperty(D)) {
              var E = k.createElement("style"),
                F = f[D].join("\n");
              (E.type = "text/css"),
                (E.media = D),
                r.insertBefore(E, g.nextSibling),
                E.styleSheet
                  ? (E.styleSheet.cssText = F)
                  : E.appendChild(k.createTextNode(F)),
                o.push(E);
            }
        },
        w = function (a, b, d) {
          var e = a
              .replace(c.regex.comments, "")
              .replace(c.regex.keyframes, "")
              .match(c.regex.media),
            f = (e && e.length) || 0;
          b = b.substring(0, b.lastIndexOf("/"));
          var h = function (a) {
              return a.replace(c.regex.urls, "$1" + b + "$2$3");
            },
            i = !f && d;
          b.length && (b += "/"), i && (f = 1);
          for (var j = 0; f > j; j++) {
            var k, l, o, p;
            i
              ? ((k = d), n.push(h(a)))
              : ((k = e[j].match(c.regex.findStyles) && RegExp.$1),
                n.push(RegExp.$2 && h(RegExp.$2))),
              (o = k.split(",")),
              (p = o.length);
            for (var q = 0; p > q; q++)
              (l = o[q]),
                g(l) ||
                  m.push({
                    media:
                      (l.split("(")[0].match(c.regex.only) && RegExp.$2) ||
                      "all",
                    rules: n.length - 1,
                    hasquery: l.indexOf("(") > -1,
                    minw:
                      l.match(c.regex.minw) &&
                      parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                    maxw:
                      l.match(c.regex.maxw) &&
                      parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                  });
          }
          v();
        },
        x = function () {
          if (d.length) {
            var b = d.shift();
            f(b.href, function (c) {
              w(c, b.href, b.media),
                (p[b.href] = !0),
                a.setTimeout(function () {
                  x();
                }, 0);
            });
          }
        },
        y = function () {
          for (var b = 0; b < t.length; b++) {
            var c = t[b],
              e = c.href,
              f = c.media,
              g = c.rel && "stylesheet" === c.rel.toLowerCase();
            e &&
              g &&
              !p[e] &&
              (c.styleSheet && c.styleSheet.rawCssText
                ? (w(c.styleSheet.rawCssText, e, f), (p[e] = !0))
                : ((!/^([a-zA-Z:]*\/\/)/.test(e) && !s) ||
                    e.replace(RegExp.$1, "").split("/")[0] ===
                      a.location.host) &&
                  ("//" === e.substring(0, 2) && (e = a.location.protocol + e),
                  d.push({ href: e, media: f })));
          }
          x();
        };
      y(),
        (c.update = y),
        (c.getEmValue = u),
        a.addEventListener
          ? a.addEventListener("resize", b, !1)
          : a.attachEvent && a.attachEvent("onresize", b);
    }
  })(this);
