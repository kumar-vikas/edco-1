if (
  ((function (a, b) {
    "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = a.document
          ? b(a, !0)
          : function (a) {
              if (!a.document)
                throw new Error("jQuery requires a window with a document");
              return b(a);
            })
      : b(a);
  })("undefined" != typeof window ? window : this, function (a, b) {
    function c(a) {
      var b = !!a && "length" in a && a.length,
        c = fa.type(a);
      return "function" === c || fa.isWindow(a)
        ? !1
        : "array" === c ||
            0 === b ||
            ("number" == typeof b && b > 0 && b - 1 in a);
    }
    function d(a, b, c) {
      if (fa.isFunction(b))
        return fa.grep(a, function (a, d) {
          return !!b.call(a, d, a) !== c;
        });
      if (b.nodeType)
        return fa.grep(a, function (a) {
          return (a === b) !== c;
        });
      if ("string" == typeof b) {
        if (pa.test(b)) return fa.filter(b, a, c);
        b = fa.filter(b, a);
      }
      return fa.grep(a, function (a) {
        return _.call(b, a) > -1 !== c;
      });
    }
    function e(a, b) {
      for (; (a = a[b]) && 1 !== a.nodeType; );
      return a;
    }
    function f(a) {
      var b = {};
      return (
        fa.each(a.match(va) || [], function (a, c) {
          b[c] = !0;
        }),
        b
      );
    }
    function g() {
      X.removeEventListener("DOMContentLoaded", g),
        a.removeEventListener("load", g),
        fa.ready();
    }
    function h() {
      this.expando = fa.expando + h.uid++;
    }
    function i(a, b, c) {
      var d;
      if (void 0 === c && 1 === a.nodeType)
        if (
          ((d = "data-" + b.replace(Ca, "-$&").toLowerCase()),
          (c = a.getAttribute(d)),
          "string" == typeof c)
        ) {
          try {
            c =
              "true" === c
                ? !0
                : "false" === c
                ? !1
                : "null" === c
                ? null
                : +c + "" === c
                ? +c
                : Ba.test(c)
                ? fa.parseJSON(c)
                : c;
          } catch (e) {}
          Aa.set(a, b, c);
        } else c = void 0;
      return c;
    }
    function j(a, b, c, d) {
      var e,
        f = 1,
        g = 20,
        h = d
          ? function () {
              return d.cur();
            }
          : function () {
              return fa.css(a, b, "");
            },
        i = h(),
        j = (c && c[3]) || (fa.cssNumber[b] ? "" : "px"),
        k = (fa.cssNumber[b] || ("px" !== j && +i)) && Ea.exec(fa.css(a, b));
      if (k && k[3] !== j) {
        (j = j || k[3]), (c = c || []), (k = +i || 1);
        do (f = f || ".5"), (k /= f), fa.style(a, b, k + j);
        while (f !== (f = h() / i) && 1 !== f && --g);
      }
      return (
        c &&
          ((k = +k || +i || 0),
          (e = c[1] ? k + (c[1] + 1) * c[2] : +c[2]),
          d && ((d.unit = j), (d.start = k), (d.end = e))),
        e
      );
    }
    function k(a, b) {
      var c =
        "undefined" != typeof a.getElementsByTagName
          ? a.getElementsByTagName(b || "*")
          : "undefined" != typeof a.querySelectorAll
          ? a.querySelectorAll(b || "*")
          : [];
      return void 0 === b || (b && fa.nodeName(a, b)) ? fa.merge([a], c) : c;
    }
    function l(a, b) {
      for (var c = 0, d = a.length; d > c; c++)
        za.set(a[c], "globalEval", !b || za.get(b[c], "globalEval"));
    }
    function m(a, b, c, d, e) {
      for (
        var f,
          g,
          h,
          i,
          j,
          m,
          n = b.createDocumentFragment(),
          o = [],
          p = 0,
          q = a.length;
        q > p;
        p++
      )
        if (((f = a[p]), f || 0 === f))
          if ("object" === fa.type(f)) fa.merge(o, f.nodeType ? [f] : f);
          else if (La.test(f)) {
            for (
              g = g || n.appendChild(b.createElement("div")),
                h = (Ia.exec(f) || ["", ""])[1].toLowerCase(),
                i = Ka[h] || Ka._default,
                g.innerHTML = i[1] + fa.htmlPrefilter(f) + i[2],
                m = i[0];
              m--;

            )
              g = g.lastChild;
            fa.merge(o, g.childNodes), (g = n.firstChild), (g.textContent = "");
          } else o.push(b.createTextNode(f));
      for (n.textContent = "", p = 0; (f = o[p++]); )
        if (d && fa.inArray(f, d) > -1) e && e.push(f);
        else if (
          ((j = fa.contains(f.ownerDocument, f)),
          (g = k(n.appendChild(f), "script")),
          j && l(g),
          c)
        )
          for (m = 0; (f = g[m++]); ) Ja.test(f.type || "") && c.push(f);
      return n;
    }
    function n() {
      return !0;
    }
    function o() {
      return !1;
    }
    function p() {
      try {
        return X.activeElement;
      } catch (a) {}
    }
    function q(a, b, c, d, e, f) {
      var g, h;
      if ("object" == typeof b) {
        "string" != typeof c && ((d = d || c), (c = void 0));
        for (h in b) q(a, h, c, d, b[h], f);
        return a;
      }
      if (
        (null == d && null == e
          ? ((e = c), (d = c = void 0))
          : null == e &&
            ("string" == typeof c
              ? ((e = d), (d = void 0))
              : ((e = d), (d = c), (c = void 0))),
        e === !1)
      )
        e = o;
      else if (!e) return a;
      return (
        1 === f &&
          ((g = e),
          (e = function (a) {
            return fa().off(a), g.apply(this, arguments);
          }),
          (e.guid = g.guid || (g.guid = fa.guid++))),
        a.each(function () {
          fa.event.add(this, b, e, d, c);
        })
      );
    }
    function r(a, b) {
      return fa.nodeName(a, "table") &&
        fa.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr")
        ? a.getElementsByTagName("tbody")[0] ||
            a.appendChild(a.ownerDocument.createElement("tbody"))
        : a;
    }
    function s(a) {
      return (a.type = (null !== a.getAttribute("type")) + "/" + a.type), a;
    }
    function t(a) {
      var b = Sa.exec(a.type);
      return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
    }
    function u(a, b) {
      var c, d, e, f, g, h, i, j;
      if (1 === b.nodeType) {
        if (
          za.hasData(a) &&
          ((f = za.access(a)), (g = za.set(b, f)), (j = f.events))
        ) {
          delete g.handle, (g.events = {});
          for (e in j)
            for (c = 0, d = j[e].length; d > c; c++)
              fa.event.add(b, e, j[e][c]);
        }
        Aa.hasData(a) &&
          ((h = Aa.access(a)), (i = fa.extend({}, h)), Aa.set(b, i));
      }
    }
    function v(a, b) {
      var c = b.nodeName.toLowerCase();
      "input" === c && Ha.test(a.type)
        ? (b.checked = a.checked)
        : ("input" === c || "textarea" === c) &&
          (b.defaultValue = a.defaultValue);
    }
    function w(a, b, c, d) {
      b = Z.apply([], b);
      var e,
        f,
        g,
        h,
        i,
        j,
        l = 0,
        n = a.length,
        o = n - 1,
        p = b[0],
        q = fa.isFunction(p);
      if (q || (n > 1 && "string" == typeof p && !da.checkClone && Ra.test(p)))
        return a.each(function (e) {
          var f = a.eq(e);
          q && (b[0] = p.call(this, e, f.html())), w(f, b, c, d);
        });
      if (
        n &&
        ((e = m(b, a[0].ownerDocument, !1, a, d)),
        (f = e.firstChild),
        1 === e.childNodes.length && (e = f),
        f || d)
      ) {
        for (g = fa.map(k(e, "script"), s), h = g.length; n > l; l++)
          (i = e),
            l !== o &&
              ((i = fa.clone(i, !0, !0)), h && fa.merge(g, k(i, "script"))),
            c.call(a[l], i, l);
        if (h)
          for (
            j = g[g.length - 1].ownerDocument, fa.map(g, t), l = 0;
            h > l;
            l++
          )
            (i = g[l]),
              Ja.test(i.type || "") &&
                !za.access(i, "globalEval") &&
                fa.contains(j, i) &&
                (i.src
                  ? fa._evalUrl && fa._evalUrl(i.src)
                  : fa.globalEval(i.textContent.replace(Ta, "")));
      }
      return a;
    }
    function x(a, b, c) {
      for (var d, e = b ? fa.filter(b, a) : a, f = 0; null != (d = e[f]); f++)
        c || 1 !== d.nodeType || fa.cleanData(k(d)),
          d.parentNode &&
            (c && fa.contains(d.ownerDocument, d) && l(k(d, "script")),
            d.parentNode.removeChild(d));
      return a;
    }
    function y(a, b) {
      var c = fa(b.createElement(a)).appendTo(b.body),
        d = fa.css(c[0], "display");
      return c.detach(), d;
    }
    function z(a) {
      var b = X,
        c = Va[a];
      return (
        c ||
          ((c = y(a, b)),
          ("none" !== c && c) ||
            ((Ua = (
              Ua || fa("<iframe frameborder='0' width='0' height='0'/>")
            ).appendTo(b.documentElement)),
            (b = Ua[0].contentDocument),
            b.write(),
            b.close(),
            (c = y(a, b)),
            Ua.detach()),
          (Va[a] = c)),
        c
      );
    }
    function A(a, b, c) {
      var d,
        e,
        f,
        g,
        h = a.style;
      return (
        (c = c || Ya(a)),
        (g = c ? c.getPropertyValue(b) || c[b] : void 0),
        ("" !== g && void 0 !== g) ||
          fa.contains(a.ownerDocument, a) ||
          (g = fa.style(a, b)),
        c &&
          !da.pixelMarginRight() &&
          Xa.test(g) &&
          Wa.test(b) &&
          ((d = h.width),
          (e = h.minWidth),
          (f = h.maxWidth),
          (h.minWidth = h.maxWidth = h.width = g),
          (g = c.width),
          (h.width = d),
          (h.minWidth = e),
          (h.maxWidth = f)),
        void 0 !== g ? g + "" : g
      );
    }
    function B(a, b) {
      return {
        get: function () {
          return a()
            ? void delete this.get
            : (this.get = b).apply(this, arguments);
        },
      };
    }
    function C(a) {
      if (a in db) return a;
      for (var b = a[0].toUpperCase() + a.slice(1), c = cb.length; c--; )
        if (((a = cb[c] + b), a in db)) return a;
    }
    function D(a, b, c) {
      var d = Ea.exec(b);
      return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
    }
    function E(a, b, c, d, e) {
      for (
        var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0,
          g = 0;
        4 > f;
        f += 2
      )
        "margin" === c && (g += fa.css(a, c + Fa[f], !0, e)),
          d
            ? ("content" === c && (g -= fa.css(a, "padding" + Fa[f], !0, e)),
              "margin" !== c &&
                (g -= fa.css(a, "border" + Fa[f] + "Width", !0, e)))
            : ((g += fa.css(a, "padding" + Fa[f], !0, e)),
              "padding" !== c &&
                (g += fa.css(a, "border" + Fa[f] + "Width", !0, e)));
      return g;
    }
    function F(b, c, d) {
      var e = !0,
        f = "width" === c ? b.offsetWidth : b.offsetHeight,
        g = Ya(b),
        h = "border-box" === fa.css(b, "boxSizing", !1, g);
      if (
        (X.msFullscreenElement &&
          a.top !== a &&
          b.getClientRects().length &&
          (f = Math.round(100 * b.getBoundingClientRect()[c])),
        0 >= f || null == f)
      ) {
        if (
          ((f = A(b, c, g)),
          (0 > f || null == f) && (f = b.style[c]),
          Xa.test(f))
        )
          return f;
        (e = h && (da.boxSizingReliable() || f === b.style[c])),
          (f = parseFloat(f) || 0);
      }
      return f + E(b, c, d || (h ? "border" : "content"), e, g) + "px";
    }
    function G(a, b) {
      for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
        (d = a[g]),
          d.style &&
            ((f[g] = za.get(d, "olddisplay")),
            (c = d.style.display),
            b
              ? (f[g] || "none" !== c || (d.style.display = ""),
                "" === d.style.display &&
                  Ga(d) &&
                  (f[g] = za.access(d, "olddisplay", z(d.nodeName))))
              : ((e = Ga(d)),
                ("none" === c && e) ||
                  za.set(d, "olddisplay", e ? c : fa.css(d, "display"))));
      for (g = 0; h > g; g++)
        (d = a[g]),
          d.style &&
            ((b && "none" !== d.style.display && "" !== d.style.display) ||
              (d.style.display = b ? f[g] || "" : "none"));
      return a;
    }
    function H(a, b, c, d, e) {
      return new H.prototype.init(a, b, c, d, e);
    }
    function I() {
      return (
        a.setTimeout(function () {
          eb = void 0;
        }),
        (eb = fa.now())
      );
    }
    function J(a, b) {
      var c,
        d = 0,
        e = { height: a };
      for (b = b ? 1 : 0; 4 > d; d += 2 - b)
        (c = Fa[d]), (e["margin" + c] = e["padding" + c] = a);
      return b && (e.opacity = e.width = a), e;
    }
    function K(a, b, c) {
      for (
        var d,
          e = (N.tweeners[b] || []).concat(N.tweeners["*"]),
          f = 0,
          g = e.length;
        g > f;
        f++
      )
        if ((d = e[f].call(c, b, a))) return d;
    }
    function L(a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l = this,
        m = {},
        n = a.style,
        o = a.nodeType && Ga(a),
        p = za.get(a, "fxshow");
      c.queue ||
        ((h = fa._queueHooks(a, "fx")),
        null == h.unqueued &&
          ((h.unqueued = 0),
          (i = h.empty.fire),
          (h.empty.fire = function () {
            h.unqueued || i();
          })),
        h.unqueued++,
        l.always(function () {
          l.always(function () {
            h.unqueued--, fa.queue(a, "fx").length || h.empty.fire();
          });
        })),
        1 === a.nodeType &&
          ("height" in b || "width" in b) &&
          ((c.overflow = [n.overflow, n.overflowX, n.overflowY]),
          (j = fa.css(a, "display")),
          (k = "none" === j ? za.get(a, "olddisplay") || z(a.nodeName) : j),
          "inline" === k &&
            "none" === fa.css(a, "float") &&
            (n.display = "inline-block")),
        c.overflow &&
          ((n.overflow = "hidden"),
          l.always(function () {
            (n.overflow = c.overflow[0]),
              (n.overflowX = c.overflow[1]),
              (n.overflowY = c.overflow[2]);
          }));
      for (d in b)
        if (((e = b[d]), gb.exec(e))) {
          if (
            (delete b[d],
            (f = f || "toggle" === e),
            e === (o ? "hide" : "show"))
          ) {
            if ("show" !== e || !p || void 0 === p[d]) continue;
            o = !0;
          }
          m[d] = (p && p[d]) || fa.style(a, d);
        } else j = void 0;
      if (fa.isEmptyObject(m))
        "inline" === ("none" === j ? z(a.nodeName) : j) && (n.display = j);
      else {
        p ? "hidden" in p && (o = p.hidden) : (p = za.access(a, "fxshow", {})),
          f && (p.hidden = !o),
          o
            ? fa(a).show()
            : l.done(function () {
                fa(a).hide();
              }),
          l.done(function () {
            var b;
            za.remove(a, "fxshow");
            for (b in m) fa.style(a, b, m[b]);
          });
        for (d in m)
          (g = K(o ? p[d] : 0, d, l)),
            d in p ||
              ((p[d] = g.start),
              o &&
                ((g.end = g.start),
                (g.start = "width" === d || "height" === d ? 1 : 0)));
      }
    }
    function M(a, b) {
      var c, d, e, f, g;
      for (c in a)
        if (
          ((d = fa.camelCase(c)),
          (e = b[d]),
          (f = a[c]),
          fa.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
          c !== d && ((a[d] = f), delete a[c]),
          (g = fa.cssHooks[d]),
          g && "expand" in g)
        ) {
          (f = g.expand(f)), delete a[d];
          for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
        } else b[d] = e;
    }
    function N(a, b, c) {
      var d,
        e,
        f = 0,
        g = N.prefilters.length,
        h = fa.Deferred().always(function () {
          delete i.elem;
        }),
        i = function () {
          if (e) return !1;
          for (
            var b = eb || I(),
              c = Math.max(0, j.startTime + j.duration - b),
              d = c / j.duration || 0,
              f = 1 - d,
              g = 0,
              i = j.tweens.length;
            i > g;
            g++
          )
            j.tweens[g].run(f);
          return (
            h.notifyWith(a, [j, f, c]),
            1 > f && i ? c : (h.resolveWith(a, [j]), !1)
          );
        },
        j = h.promise({
          elem: a,
          props: fa.extend({}, b),
          opts: fa.extend(
            !0,
            { specialEasing: {}, easing: fa.easing._default },
            c
          ),
          originalProperties: b,
          originalOptions: c,
          startTime: eb || I(),
          duration: c.duration,
          tweens: [],
          createTween: function (b, c) {
            var d = fa.Tween(
              a,
              j.opts,
              b,
              c,
              j.opts.specialEasing[b] || j.opts.easing
            );
            return j.tweens.push(d), d;
          },
          stop: function (b) {
            var c = 0,
              d = b ? j.tweens.length : 0;
            if (e) return this;
            for (e = !0; d > c; c++) j.tweens[c].run(1);
            return (
              b
                ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b]))
                : h.rejectWith(a, [j, b]),
              this
            );
          },
        }),
        k = j.props;
      for (M(k, j.opts.specialEasing); g > f; f++)
        if ((d = N.prefilters[f].call(j, a, k, j.opts)))
          return (
            fa.isFunction(d.stop) &&
              (fa._queueHooks(j.elem, j.opts.queue).stop = fa.proxy(d.stop, d)),
            d
          );
      return (
        fa.map(k, K, j),
        fa.isFunction(j.opts.start) && j.opts.start.call(a, j),
        fa.fx.timer(fa.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
        j
          .progress(j.opts.progress)
          .done(j.opts.done, j.opts.complete)
          .fail(j.opts.fail)
          .always(j.opts.always)
      );
    }
    function O(a) {
      return (a.getAttribute && a.getAttribute("class")) || "";
    }
    function P(a) {
      return function (b, c) {
        "string" != typeof b && ((c = b), (b = "*"));
        var d,
          e = 0,
          f = b.toLowerCase().match(va) || [];
        if (fa.isFunction(c))
          for (; (d = f[e++]); )
            "+" === d[0]
              ? ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c))
              : (a[d] = a[d] || []).push(c);
      };
    }
    function Q(a, b, c, d) {
      function e(h) {
        var i;
        return (
          (f[h] = !0),
          fa.each(a[h] || [], function (a, h) {
            var j = h(b, c, d);
            return "string" != typeof j || g || f[j]
              ? g
                ? !(i = j)
                : void 0
              : (b.dataTypes.unshift(j), e(j), !1);
          }),
          i
        );
      }
      var f = {},
        g = a === zb;
      return e(b.dataTypes[0]) || (!f["*"] && e("*"));
    }
    function R(a, b) {
      var c,
        d,
        e = fa.ajaxSettings.flatOptions || {};
      for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
      return d && fa.extend(!0, a, d), a;
    }
    function S(a, b, c) {
      for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0]; )
        i.shift(),
          void 0 === d &&
            (d = a.mimeType || b.getResponseHeader("Content-Type"));
      if (d)
        for (e in h)
          if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break;
          }
      if (i[0] in c) f = i[0];
      else {
        for (e in c) {
          if (!i[0] || a.converters[e + " " + i[0]]) {
            f = e;
            break;
          }
          g || (g = e);
        }
        f = f || g;
      }
      return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
    }
    function T(a, b, c, d) {
      var e,
        f,
        g,
        h,
        i,
        j = {},
        k = a.dataTypes.slice();
      if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
      for (f = k.shift(); f; )
        if (
          (a.responseFields[f] && (c[a.responseFields[f]] = b),
          !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
          (i = f),
          (f = k.shift()))
        )
          if ("*" === f) f = i;
          else if ("*" !== i && i !== f) {
            if (((g = j[i + " " + f] || j["* " + f]), !g))
              for (e in j)
                if (
                  ((h = e.split(" ")),
                  h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))
                ) {
                  g === !0
                    ? (g = j[e])
                    : j[e] !== !0 && ((f = h[0]), k.unshift(h[1]));
                  break;
                }
            if (g !== !0)
              if (g && a["throws"]) b = g(b);
              else
                try {
                  b = g(b);
                } catch (l) {
                  return {
                    state: "parsererror",
                    error: g ? l : "No conversion from " + i + " to " + f,
                  };
                }
          }
      return { state: "success", data: b };
    }
    function U(a, b, c, d) {
      var e;
      if (fa.isArray(b))
        fa.each(b, function (b, e) {
          c || Db.test(a)
            ? d(a, e)
            : U(
                a + "[" + ("object" == typeof e && null != e ? b : "") + "]",
                e,
                c,
                d
              );
        });
      else if (c || "object" !== fa.type(b)) d(a, b);
      else for (e in b) U(a + "[" + e + "]", b[e], c, d);
    }
    function V(a) {
      return fa.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
    }
    var W = [],
      X = a.document,
      Y = W.slice,
      Z = W.concat,
      $ = W.push,
      _ = W.indexOf,
      aa = {},
      ba = aa.toString,
      ca = aa.hasOwnProperty,
      da = {},
      ea = "2.2.1",
      fa = function (a, b) {
        return new fa.fn.init(a, b);
      },
      ga = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      ha = /^-ms-/,
      ia = /-([\da-z])/gi,
      ja = function (a, b) {
        return b.toUpperCase();
      };
    (fa.fn = fa.prototype =
      {
        jquery: ea,
        constructor: fa,
        selector: "",
        length: 0,
        toArray: function () {
          return Y.call(this);
        },
        get: function (a) {
          return null != a
            ? 0 > a
              ? this[a + this.length]
              : this[a]
            : Y.call(this);
        },
        pushStack: function (a) {
          var b = fa.merge(this.constructor(), a);
          return (b.prevObject = this), (b.context = this.context), b;
        },
        each: function (a) {
          return fa.each(this, a);
        },
        map: function (a) {
          return this.pushStack(
            fa.map(this, function (b, c) {
              return a.call(b, c, b);
            })
          );
        },
        slice: function () {
          return this.pushStack(Y.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        eq: function (a) {
          var b = this.length,
            c = +a + (0 > a ? b : 0);
          return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: $,
        sort: W.sort,
        splice: W.splice,
      }),
      (fa.extend = fa.fn.extend =
        function () {
          var a,
            b,
            c,
            d,
            e,
            f,
            g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
          for (
            "boolean" == typeof g && ((j = g), (g = arguments[h] || {}), h++),
              "object" == typeof g || fa.isFunction(g) || (g = {}),
              h === i && ((g = this), h--);
            i > h;
            h++
          )
            if (null != (a = arguments[h]))
              for (b in a)
                (c = g[b]),
                  (d = a[b]),
                  g !== d &&
                    (j && d && (fa.isPlainObject(d) || (e = fa.isArray(d)))
                      ? (e
                          ? ((e = !1), (f = c && fa.isArray(c) ? c : []))
                          : (f = c && fa.isPlainObject(c) ? c : {}),
                        (g[b] = fa.extend(j, f, d)))
                      : void 0 !== d && (g[b] = d));
          return g;
        }),
      fa.extend({
        expando: "jQuery" + (ea + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (a) {
          throw new Error(a);
        },
        noop: function () {},
        isFunction: function (a) {
          return "function" === fa.type(a);
        },
        isArray: Array.isArray,
        isWindow: function (a) {
          return null != a && a === a.window;
        },
        isNumeric: function (a) {
          var b = a && a.toString();
          return !fa.isArray(a) && b - parseFloat(b) + 1 >= 0;
        },
        isPlainObject: function (a) {
          return "object" !== fa.type(a) || a.nodeType || fa.isWindow(a)
            ? !1
            : a.constructor &&
              !ca.call(a.constructor.prototype, "isPrototypeOf")
            ? !1
            : !0;
        },
        isEmptyObject: function (a) {
          var b;
          for (b in a) return !1;
          return !0;
        },
        type: function (a) {
          return null == a
            ? a + ""
            : "object" == typeof a || "function" == typeof a
            ? aa[ba.call(a)] || "object"
            : typeof a;
        },
        globalEval: function (a) {
          var b,
            c = eval;
          (a = fa.trim(a)),
            a &&
              (1 === a.indexOf("use strict")
                ? ((b = X.createElement("script")),
                  (b.text = a),
                  X.head.appendChild(b).parentNode.removeChild(b))
                : c(a));
        },
        camelCase: function (a) {
          return a.replace(ha, "ms-").replace(ia, ja);
        },
        nodeName: function (a, b) {
          return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        },
        each: function (a, b) {
          var d,
            e = 0;
          if (c(a))
            for (d = a.length; d > e && b.call(a[e], e, a[e]) !== !1; e++);
          else for (e in a) if (b.call(a[e], e, a[e]) === !1) break;
          return a;
        },
        trim: function (a) {
          return null == a ? "" : (a + "").replace(ga, "");
        },
        makeArray: function (a, b) {
          var d = b || [];
          return (
            null != a &&
              (c(Object(a))
                ? fa.merge(d, "string" == typeof a ? [a] : a)
                : $.call(d, a)),
            d
          );
        },
        inArray: function (a, b, c) {
          return null == b ? -1 : _.call(b, a, c);
        },
        merge: function (a, b) {
          for (var c = +b.length, d = 0, e = a.length; c > d; d++)
            a[e++] = b[d];
          return (a.length = e), a;
        },
        grep: function (a, b, c) {
          for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
            (d = !b(a[f], f)), d !== h && e.push(a[f]);
          return e;
        },
        map: function (a, b, d) {
          var e,
            f,
            g = 0,
            h = [];
          if (c(a))
            for (e = a.length; e > g; g++)
              (f = b(a[g], g, d)), null != f && h.push(f);
          else for (g in a) (f = b(a[g], g, d)), null != f && h.push(f);
          return Z.apply([], h);
        },
        guid: 1,
        proxy: function (a, b) {
          var c, d, e;
          return (
            "string" == typeof b && ((c = a[b]), (b = a), (a = c)),
            fa.isFunction(a)
              ? ((d = Y.call(arguments, 2)),
                (e = function () {
                  return a.apply(b || this, d.concat(Y.call(arguments)));
                }),
                (e.guid = a.guid = a.guid || fa.guid++),
                e)
              : void 0
          );
        },
        now: Date.now,
        support: da,
      }),
      "function" == typeof Symbol &&
        (fa.fn[Symbol.iterator] = W[Symbol.iterator]),
      fa.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
          " "
        ),
        function (a, b) {
          aa["[object " + b + "]"] = b.toLowerCase();
        }
      );
    var ka = (function (a) {
      function b(a, b, c, d) {
        var e,
          f,
          g,
          h,
          i,
          j,
          l,
          n,
          o = b && b.ownerDocument,
          p = b ? b.nodeType : 9;
        if (
          ((c = c || []),
          "string" != typeof a || !a || (1 !== p && 9 !== p && 11 !== p))
        )
          return c;
        if (
          !d &&
          ((b ? b.ownerDocument || b : O) !== G && F(b), (b = b || G), I)
        ) {
          if (11 !== p && (j = ra.exec(a)))
            if ((e = j[1])) {
              if (9 === p) {
                if (!(g = b.getElementById(e))) return c;
                if (g.id === e) return c.push(g), c;
              } else if (
                o &&
                (g = o.getElementById(e)) &&
                M(b, g) &&
                g.id === e
              )
                return c.push(g), c;
            } else {
              if (j[2]) return $.apply(c, b.getElementsByTagName(a)), c;
              if (
                (e = j[3]) &&
                v.getElementsByClassName &&
                b.getElementsByClassName
              )
                return $.apply(c, b.getElementsByClassName(e)), c;
            }
          if (v.qsa && !T[a + " "] && (!J || !J.test(a))) {
            if (1 !== p) (o = b), (n = a);
            else if ("object" !== b.nodeName.toLowerCase()) {
              for (
                (h = b.getAttribute("id"))
                  ? (h = h.replace(ta, "\\$&"))
                  : b.setAttribute("id", (h = N)),
                  l = z(a),
                  f = l.length,
                  i = ma.test(h) ? "#" + h : "[id='" + h + "']";
                f--;

              )
                l[f] = i + " " + m(l[f]);
              (n = l.join(",")), (o = (sa.test(a) && k(b.parentNode)) || b);
            }
            if (n)
              try {
                return $.apply(c, o.querySelectorAll(n)), c;
              } catch (q) {
              } finally {
                h === N && b.removeAttribute("id");
              }
          }
        }
        return B(a.replace(ha, "$1"), b, c, d);
      }
      function c() {
        function a(c, d) {
          return (
            b.push(c + " ") > w.cacheLength && delete a[b.shift()],
            (a[c + " "] = d)
          );
        }
        var b = [];
        return a;
      }
      function d(a) {
        return (a[N] = !0), a;
      }
      function e(a) {
        var b = G.createElement("div");
        try {
          return !!a(b);
        } catch (c) {
          return !1;
        } finally {
          b.parentNode && b.parentNode.removeChild(b), (b = null);
        }
      }
      function f(a, b) {
        for (var c = a.split("|"), d = c.length; d--; ) w.attrHandle[c[d]] = b;
      }
      function g(a, b) {
        var c = b && a,
          d =
            c &&
            1 === a.nodeType &&
            1 === b.nodeType &&
            (~b.sourceIndex || V) - (~a.sourceIndex || V);
        if (d) return d;
        if (c) for (; (c = c.nextSibling); ) if (c === b) return -1;
        return a ? 1 : -1;
      }
      function h(a) {
        return function (b) {
          var c = b.nodeName.toLowerCase();
          return "input" === c && b.type === a;
        };
      }
      function i(a) {
        return function (b) {
          var c = b.nodeName.toLowerCase();
          return ("input" === c || "button" === c) && b.type === a;
        };
      }
      function j(a) {
        return d(function (b) {
          return (
            (b = +b),
            d(function (c, d) {
              for (var e, f = a([], c.length, b), g = f.length; g--; )
                c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
            })
          );
        });
      }
      function k(a) {
        return a && "undefined" != typeof a.getElementsByTagName && a;
      }
      function l() {}
      function m(a) {
        for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
        return d;
      }
      function n(a, b, c) {
        var d = b.dir,
          e = c && "parentNode" === d,
          f = Q++;
        return b.first
          ? function (b, c, f) {
              for (; (b = b[d]); ) if (1 === b.nodeType || e) return a(b, c, f);
            }
          : function (b, c, g) {
              var h,
                i,
                j,
                k = [P, f];
              if (g) {
                for (; (b = b[d]); )
                  if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
              } else
                for (; (b = b[d]); )
                  if (1 === b.nodeType || e) {
                    if (
                      ((j = b[N] || (b[N] = {})),
                      (i = j[b.uniqueID] || (j[b.uniqueID] = {})),
                      (h = i[d]) && h[0] === P && h[1] === f)
                    )
                      return (k[2] = h[2]);
                    if (((i[d] = k), (k[2] = a(b, c, g)))) return !0;
                  }
            };
      }
      function o(a) {
        return a.length > 1
          ? function (b, c, d) {
              for (var e = a.length; e--; ) if (!a[e](b, c, d)) return !1;
              return !0;
            }
          : a[0];
      }
      function p(a, c, d) {
        for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
        return d;
      }
      function q(a, b, c, d, e) {
        for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
          (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
        return g;
      }
      function r(a, b, c, e, f, g) {
        return (
          e && !e[N] && (e = r(e)),
          f && !f[N] && (f = r(f, g)),
          d(function (d, g, h, i) {
            var j,
              k,
              l,
              m = [],
              n = [],
              o = g.length,
              r = d || p(b || "*", h.nodeType ? [h] : h, []),
              s = !a || (!d && b) ? r : q(r, m, a, h, i),
              t = c ? (f || (d ? a : o || e) ? [] : g) : s;
            if ((c && c(s, t, h, i), e))
              for (j = q(t, n), e(j, [], h, i), k = j.length; k--; )
                (l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
            if (d) {
              if (f || a) {
                if (f) {
                  for (j = [], k = t.length; k--; )
                    (l = t[k]) && j.push((s[k] = l));
                  f(null, (t = []), j, i);
                }
                for (k = t.length; k--; )
                  (l = t[k]) &&
                    (j = f ? aa(d, l) : m[k]) > -1 &&
                    (d[j] = !(g[j] = l));
              }
            } else (t = q(t === g ? t.splice(o, t.length) : t)), f ? f(null, g, t, i) : $.apply(g, t);
          })
        );
      }
      function s(a) {
        for (
          var b,
            c,
            d,
            e = a.length,
            f = w.relative[a[0].type],
            g = f || w.relative[" "],
            h = f ? 1 : 0,
            i = n(
              function (a) {
                return a === b;
              },
              g,
              !0
            ),
            j = n(
              function (a) {
                return aa(b, a) > -1;
              },
              g,
              !0
            ),
            k = [
              function (a, c, d) {
                var e =
                  (!f && (d || c !== C)) ||
                  ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                return (b = null), e;
              },
            ];
          e > h;
          h++
        )
          if ((c = w.relative[a[h].type])) k = [n(o(k), c)];
          else {
            if (((c = w.filter[a[h].type].apply(null, a[h].matches)), c[N])) {
              for (d = ++h; e > d && !w.relative[a[d].type]; d++);
              return r(
                h > 1 && o(k),
                h > 1 &&
                  m(
                    a
                      .slice(0, h - 1)
                      .concat({ value: " " === a[h - 2].type ? "*" : "" })
                  ).replace(ha, "$1"),
                c,
                d > h && s(a.slice(h, d)),
                e > d && s((a = a.slice(d))),
                e > d && m(a)
              );
            }
            k.push(c);
          }
        return o(k);
      }
      function t(a, c) {
        var e = c.length > 0,
          f = a.length > 0,
          g = function (d, g, h, i, j) {
            var k,
              l,
              m,
              n = 0,
              o = "0",
              p = d && [],
              r = [],
              s = C,
              t = d || (f && w.find.TAG("*", j)),
              u = (P += null == s ? 1 : Math.random() || 0.1),
              v = t.length;
            for (
              j && (C = g === G || g || j);
              o !== v && null != (k = t[o]);
              o++
            ) {
              if (f && k) {
                for (
                  l = 0, g || k.ownerDocument === G || (F(k), (h = !I));
                  (m = a[l++]);

                )
                  if (m(k, g || G, h)) {
                    i.push(k);
                    break;
                  }
                j && (P = u);
              }
              e && ((k = !m && k) && n--, d && p.push(k));
            }
            if (((n += o), e && o !== n)) {
              for (l = 0; (m = c[l++]); ) m(p, r, g, h);
              if (d) {
                if (n > 0) for (; o--; ) p[o] || r[o] || (r[o] = Y.call(i));
                r = q(r);
              }
              $.apply(i, r),
                j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i);
            }
            return j && ((P = u), (C = s)), p;
          };
        return e ? d(g) : g;
      }
      var u,
        v,
        w,
        x,
        y,
        z,
        A,
        B,
        C,
        D,
        E,
        F,
        G,
        H,
        I,
        J,
        K,
        L,
        M,
        N = "sizzle" + 1 * new Date(),
        O = a.document,
        P = 0,
        Q = 0,
        R = c(),
        S = c(),
        T = c(),
        U = function (a, b) {
          return a === b && (E = !0), 0;
        },
        V = 1 << 31,
        W = {}.hasOwnProperty,
        X = [],
        Y = X.pop,
        Z = X.push,
        $ = X.push,
        _ = X.slice,
        aa = function (a, b) {
          for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
          return -1;
        },
        ba =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        ca = "[\\x20\\t\\r\\n\\f]",
        da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        ea =
          "\\[" +
          ca +
          "*(" +
          da +
          ")(?:" +
          ca +
          "*([*^$|!~]?=)" +
          ca +
          "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
          da +
          "))|)" +
          ca +
          "*\\]",
        fa =
          ":(" +
          da +
          ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
          ea +
          ")*)|.*)\\)|)",
        ga = new RegExp(ca + "+", "g"),
        ha = new RegExp(
          "^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$",
          "g"
        ),
        ia = new RegExp("^" + ca + "*," + ca + "*"),
        ja = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
        ka = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
        la = new RegExp(fa),
        ma = new RegExp("^" + da + "$"),
        na = {
          ID: new RegExp("^#(" + da + ")"),
          CLASS: new RegExp("^\\.(" + da + ")"),
          TAG: new RegExp("^(" + da + "|[*])"),
          ATTR: new RegExp("^" + ea),
          PSEUDO: new RegExp("^" + fa),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              ca +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              ca +
              "*(?:([+-]|)" +
              ca +
              "*(\\d+)|))" +
              ca +
              "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + ba + ")$", "i"),
          needsContext: new RegExp(
            "^" +
              ca +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              ca +
              "*((?:-\\d)?\\d*)" +
              ca +
              "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        oa = /^(?:input|select|textarea|button)$/i,
        pa = /^h\d$/i,
        qa = /^[^{]+\{\s*\[native \w/,
        ra = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        sa = /[+~]/,
        ta = /'|\\/g,
        ua = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
        va = function (a, b, c) {
          var d = "0x" + b - 65536;
          return d !== d || c
            ? b
            : 0 > d
            ? String.fromCharCode(d + 65536)
            : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
        },
        wa = function () {
          F();
        };
      try {
        $.apply((X = _.call(O.childNodes)), O.childNodes),
          X[O.childNodes.length].nodeType;
      } catch (xa) {
        $ = {
          apply: X.length
            ? function (a, b) {
                Z.apply(a, _.call(b));
              }
            : function (a, b) {
                for (var c = a.length, d = 0; (a[c++] = b[d++]); );
                a.length = c - 1;
              },
        };
      }
      (v = b.support = {}),
        (y = b.isXML =
          function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1;
          }),
        (F = b.setDocument =
          function (a) {
            var b,
              c,
              d = a ? a.ownerDocument || a : O;
            return d !== G && 9 === d.nodeType && d.documentElement
              ? ((G = d),
                (H = G.documentElement),
                (I = !y(G)),
                (c = G.defaultView) &&
                  c.top !== c &&
                  (c.addEventListener
                    ? c.addEventListener("unload", wa, !1)
                    : c.attachEvent && c.attachEvent("onunload", wa)),
                (v.attributes = e(function (a) {
                  return (a.className = "i"), !a.getAttribute("className");
                })),
                (v.getElementsByTagName = e(function (a) {
                  return (
                    a.appendChild(G.createComment("")),
                    !a.getElementsByTagName("*").length
                  );
                })),
                (v.getElementsByClassName = qa.test(G.getElementsByClassName)),
                (v.getById = e(function (a) {
                  return (
                    (H.appendChild(a).id = N),
                    !G.getElementsByName || !G.getElementsByName(N).length
                  );
                })),
                v.getById
                  ? ((w.find.ID = function (a, b) {
                      if ("undefined" != typeof b.getElementById && I) {
                        var c = b.getElementById(a);
                        return c ? [c] : [];
                      }
                    }),
                    (w.filter.ID = function (a) {
                      var b = a.replace(ua, va);
                      return function (a) {
                        return a.getAttribute("id") === b;
                      };
                    }))
                  : (delete w.find.ID,
                    (w.filter.ID = function (a) {
                      var b = a.replace(ua, va);
                      return function (a) {
                        var c =
                          "undefined" != typeof a.getAttributeNode &&
                          a.getAttributeNode("id");
                        return c && c.value === b;
                      };
                    })),
                (w.find.TAG = v.getElementsByTagName
                  ? function (a, b) {
                      return "undefined" != typeof b.getElementsByTagName
                        ? b.getElementsByTagName(a)
                        : v.qsa
                        ? b.querySelectorAll(a)
                        : void 0;
                    }
                  : function (a, b) {
                      var c,
                        d = [],
                        e = 0,
                        f = b.getElementsByTagName(a);
                      if ("*" === a) {
                        for (; (c = f[e++]); ) 1 === c.nodeType && d.push(c);
                        return d;
                      }
                      return f;
                    }),
                (w.find.CLASS =
                  v.getElementsByClassName &&
                  function (a, b) {
                    return "undefined" != typeof b.getElementsByClassName && I
                      ? b.getElementsByClassName(a)
                      : void 0;
                  }),
                (K = []),
                (J = []),
                (v.qsa = qa.test(G.querySelectorAll)) &&
                  (e(function (a) {
                    (H.appendChild(a).innerHTML =
                      "<a id='" +
                      N +
                      "'></a><select id='" +
                      N +
                      "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                      a.querySelectorAll("[msallowcapture^='']").length &&
                        J.push("[*^$]=" + ca + "*(?:''|\"\")"),
                      a.querySelectorAll("[selected]").length ||
                        J.push("\\[" + ca + "*(?:value|" + ba + ")"),
                      a.querySelectorAll("[id~=" + N + "-]").length ||
                        J.push("~="),
                      a.querySelectorAll(":checked").length ||
                        J.push(":checked"),
                      a.querySelectorAll("a#" + N + "+*").length ||
                        J.push(".#.+[+~]");
                  }),
                  e(function (a) {
                    var b = G.createElement("input");
                    b.setAttribute("type", "hidden"),
                      a.appendChild(b).setAttribute("name", "D"),
                      a.querySelectorAll("[name=d]").length &&
                        J.push("name" + ca + "*[*^$|!~]?="),
                      a.querySelectorAll(":enabled").length ||
                        J.push(":enabled", ":disabled"),
                      a.querySelectorAll("*,:x"),
                      J.push(",.*:");
                  })),
                (v.matchesSelector = qa.test(
                  (L =
                    H.matches ||
                    H.webkitMatchesSelector ||
                    H.mozMatchesSelector ||
                    H.oMatchesSelector ||
                    H.msMatchesSelector)
                )) &&
                  e(function (a) {
                    (v.disconnectedMatch = L.call(a, "div")),
                      L.call(a, "[s!='']:x"),
                      K.push("!=", fa);
                  }),
                (J = J.length && new RegExp(J.join("|"))),
                (K = K.length && new RegExp(K.join("|"))),
                (b = qa.test(H.compareDocumentPosition)),
                (M =
                  b || qa.test(H.contains)
                    ? function (a, b) {
                        var c = 9 === a.nodeType ? a.documentElement : a,
                          d = b && b.parentNode;
                        return (
                          a === d ||
                          !(
                            !d ||
                            1 !== d.nodeType ||
                            !(c.contains
                              ? c.contains(d)
                              : a.compareDocumentPosition &&
                                16 & a.compareDocumentPosition(d))
                          )
                        );
                      }
                    : function (a, b) {
                        if (b)
                          for (; (b = b.parentNode); ) if (b === a) return !0;
                        return !1;
                      }),
                (U = b
                  ? function (a, b) {
                      if (a === b) return (E = !0), 0;
                      var c =
                        !a.compareDocumentPosition - !b.compareDocumentPosition;
                      return c
                        ? c
                        : ((c =
                            (a.ownerDocument || a) === (b.ownerDocument || b)
                              ? a.compareDocumentPosition(b)
                              : 1),
                          1 & c ||
                          (!v.sortDetached &&
                            b.compareDocumentPosition(a) === c)
                            ? a === G || (a.ownerDocument === O && M(O, a))
                              ? -1
                              : b === G || (b.ownerDocument === O && M(O, b))
                              ? 1
                              : D
                              ? aa(D, a) - aa(D, b)
                              : 0
                            : 4 & c
                            ? -1
                            : 1);
                    }
                  : function (a, b) {
                      if (a === b) return (E = !0), 0;
                      var c,
                        d = 0,
                        e = a.parentNode,
                        f = b.parentNode,
                        h = [a],
                        i = [b];
                      if (!e || !f)
                        return a === G
                          ? -1
                          : b === G
                          ? 1
                          : e
                          ? -1
                          : f
                          ? 1
                          : D
                          ? aa(D, a) - aa(D, b)
                          : 0;
                      if (e === f) return g(a, b);
                      for (c = a; (c = c.parentNode); ) h.unshift(c);
                      for (c = b; (c = c.parentNode); ) i.unshift(c);
                      for (; h[d] === i[d]; ) d++;
                      return d
                        ? g(h[d], i[d])
                        : h[d] === O
                        ? -1
                        : i[d] === O
                        ? 1
                        : 0;
                    }),
                G)
              : G;
          }),
        (b.matches = function (a, c) {
          return b(a, null, null, c);
        }),
        (b.matchesSelector = function (a, c) {
          if (
            ((a.ownerDocument || a) !== G && F(a),
            (c = c.replace(ka, "='$1']")),
            v.matchesSelector &&
              I &&
              !T[c + " "] &&
              (!K || !K.test(c)) &&
              (!J || !J.test(c)))
          )
            try {
              var d = L.call(a, c);
              if (
                d ||
                v.disconnectedMatch ||
                (a.document && 11 !== a.document.nodeType)
              )
                return d;
            } catch (e) {}
          return b(c, G, null, [a]).length > 0;
        }),
        (b.contains = function (a, b) {
          return (a.ownerDocument || a) !== G && F(a), M(a, b);
        }),
        (b.attr = function (a, b) {
          (a.ownerDocument || a) !== G && F(a);
          var c = w.attrHandle[b.toLowerCase()],
            d =
              c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
          return void 0 !== d
            ? d
            : v.attributes || !I
            ? a.getAttribute(b)
            : (d = a.getAttributeNode(b)) && d.specified
            ? d.value
            : null;
        }),
        (b.error = function (a) {
          throw new Error("Syntax error, unrecognized expression: " + a);
        }),
        (b.uniqueSort = function (a) {
          var b,
            c = [],
            d = 0,
            e = 0;
          if (
            ((E = !v.detectDuplicates),
            (D = !v.sortStable && a.slice(0)),
            a.sort(U),
            E)
          ) {
            for (; (b = a[e++]); ) b === a[e] && (d = c.push(e));
            for (; d--; ) a.splice(c[d], 1);
          }
          return (D = null), a;
        }),
        (x = b.getText =
          function (a) {
            var b,
              c = "",
              d = 0,
              e = a.nodeType;
            if (e) {
              if (1 === e || 9 === e || 11 === e) {
                if ("string" == typeof a.textContent) return a.textContent;
                for (a = a.firstChild; a; a = a.nextSibling) c += x(a);
              } else if (3 === e || 4 === e) return a.nodeValue;
            } else for (; (b = a[d++]); ) c += x(b);
            return c;
          }),
        (w = b.selectors =
          {
            cacheLength: 50,
            createPseudo: d,
            match: na,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: !0 },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: !0 },
              "~": { dir: "previousSibling" },
            },
            preFilter: {
              ATTR: function (a) {
                return (
                  (a[1] = a[1].replace(ua, va)),
                  (a[3] = (a[3] || a[4] || a[5] || "").replace(ua, va)),
                  "~=" === a[2] && (a[3] = " " + a[3] + " "),
                  a.slice(0, 4)
                );
              },
              CHILD: function (a) {
                return (
                  (a[1] = a[1].toLowerCase()),
                  "nth" === a[1].slice(0, 3)
                    ? (a[3] || b.error(a[0]),
                      (a[4] = +(a[4]
                        ? a[5] + (a[6] || 1)
                        : 2 * ("even" === a[3] || "odd" === a[3]))),
                      (a[5] = +(a[7] + a[8] || "odd" === a[3])))
                    : a[3] && b.error(a[0]),
                  a
                );
              },
              PSEUDO: function (a) {
                var b,
                  c = !a[6] && a[2];
                return na.CHILD.test(a[0])
                  ? null
                  : (a[3]
                      ? (a[2] = a[4] || a[5] || "")
                      : c &&
                        la.test(c) &&
                        (b = z(c, !0)) &&
                        (b = c.indexOf(")", c.length - b) - c.length) &&
                        ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))),
                    a.slice(0, 3));
              },
            },
            filter: {
              TAG: function (a) {
                var b = a.replace(ua, va).toLowerCase();
                return "*" === a
                  ? function () {
                      return !0;
                    }
                  : function (a) {
                      return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
              },
              CLASS: function (a) {
                var b = R[a + " "];
                return (
                  b ||
                  ((b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) &&
                    R(a, function (a) {
                      return b.test(
                        ("string" == typeof a.className && a.className) ||
                          ("undefined" != typeof a.getAttribute &&
                            a.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function (a, c, d) {
                return function (e) {
                  var f = b.attr(e, a);
                  return null == f
                    ? "!=" === c
                    : c
                    ? ((f += ""),
                      "=" === c
                        ? f === d
                        : "!=" === c
                        ? f !== d
                        : "^=" === c
                        ? d && 0 === f.indexOf(d)
                        : "*=" === c
                        ? d && f.indexOf(d) > -1
                        : "$=" === c
                        ? d && f.slice(-d.length) === d
                        : "~=" === c
                        ? (" " + f.replace(ga, " ") + " ").indexOf(d) > -1
                        : "|=" === c
                        ? f === d || f.slice(0, d.length + 1) === d + "-"
                        : !1)
                    : !0;
                };
              },
              CHILD: function (a, b, c, d, e) {
                var f = "nth" !== a.slice(0, 3),
                  g = "last" !== a.slice(-4),
                  h = "of-type" === b;
                return 1 === d && 0 === e
                  ? function (a) {
                      return !!a.parentNode;
                    }
                  : function (b, c, i) {
                      var j,
                        k,
                        l,
                        m,
                        n,
                        o,
                        p = f !== g ? "nextSibling" : "previousSibling",
                        q = b.parentNode,
                        r = h && b.nodeName.toLowerCase(),
                        s = !i && !h,
                        t = !1;
                      if (q) {
                        if (f) {
                          for (; p; ) {
                            for (m = b; (m = m[p]); )
                              if (
                                h
                                  ? m.nodeName.toLowerCase() === r
                                  : 1 === m.nodeType
                              )
                                return !1;
                            o = p = "only" === a && !o && "nextSibling";
                          }
                          return !0;
                        }
                        if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                          for (
                            m = q,
                              l = m[N] || (m[N] = {}),
                              k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                              j = k[a] || [],
                              n = j[0] === P && j[1],
                              t = n && j[2],
                              m = n && q.childNodes[n];
                            (m = (++n && m && m[p]) || (t = n = 0) || o.pop());

                          )
                            if (1 === m.nodeType && ++t && m === b) {
                              k[a] = [P, n, t];
                              break;
                            }
                        } else if (
                          (s &&
                            ((m = b),
                            (l = m[N] || (m[N] = {})),
                            (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                            (j = k[a] || []),
                            (n = j[0] === P && j[1]),
                            (t = n)),
                          t === !1)
                        )
                          for (
                            ;
                            (m =
                              (++n && m && m[p]) || (t = n = 0) || o.pop()) &&
                            ((h
                              ? m.nodeName.toLowerCase() !== r
                              : 1 !== m.nodeType) ||
                              !++t ||
                              (s &&
                                ((l = m[N] || (m[N] = {})),
                                (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                                (k[a] = [P, t])),
                              m !== b));

                          );
                        return (t -= e), t === d || (t % d === 0 && t / d >= 0);
                      }
                    };
              },
              PSEUDO: function (a, c) {
                var e,
                  f =
                    w.pseudos[a] ||
                    w.setFilters[a.toLowerCase()] ||
                    b.error("unsupported pseudo: " + a);
                return f[N]
                  ? f(c)
                  : f.length > 1
                  ? ((e = [a, a, "", c]),
                    w.setFilters.hasOwnProperty(a.toLowerCase())
                      ? d(function (a, b) {
                          for (var d, e = f(a, c), g = e.length; g--; )
                            (d = aa(a, e[g])), (a[d] = !(b[d] = e[g]));
                        })
                      : function (a) {
                          return f(a, 0, e);
                        })
                  : f;
              },
            },
            pseudos: {
              not: d(function (a) {
                var b = [],
                  c = [],
                  e = A(a.replace(ha, "$1"));
                return e[N]
                  ? d(function (a, b, c, d) {
                      for (var f, g = e(a, null, d, []), h = a.length; h--; )
                        (f = g[h]) && (a[h] = !(b[h] = f));
                    })
                  : function (a, d, f) {
                      return (
                        (b[0] = a), e(b, null, f, c), (b[0] = null), !c.pop()
                      );
                    };
              }),
              has: d(function (a) {
                return function (c) {
                  return b(a, c).length > 0;
                };
              }),
              contains: d(function (a) {
                return (
                  (a = a.replace(ua, va)),
                  function (b) {
                    return (
                      (b.textContent || b.innerText || x(b)).indexOf(a) > -1
                    );
                  }
                );
              }),
              lang: d(function (a) {
                return (
                  ma.test(a || "") || b.error("unsupported lang: " + a),
                  (a = a.replace(ua, va).toLowerCase()),
                  function (b) {
                    var c;
                    do
                      if (
                        (c = I
                          ? b.lang
                          : b.getAttribute("xml:lang") ||
                            b.getAttribute("lang"))
                      )
                        return (
                          (c = c.toLowerCase()),
                          c === a || 0 === c.indexOf(a + "-")
                        );
                    while ((b = b.parentNode) && 1 === b.nodeType);
                    return !1;
                  }
                );
              }),
              target: function (b) {
                var c = a.location && a.location.hash;
                return c && c.slice(1) === b.id;
              },
              root: function (a) {
                return a === H;
              },
              focus: function (a) {
                return (
                  a === G.activeElement &&
                  (!G.hasFocus || G.hasFocus()) &&
                  !!(a.type || a.href || ~a.tabIndex)
                );
              },
              enabled: function (a) {
                return a.disabled === !1;
              },
              disabled: function (a) {
                return a.disabled === !0;
              },
              checked: function (a) {
                var b = a.nodeName.toLowerCase();
                return (
                  ("input" === b && !!a.checked) ||
                  ("option" === b && !!a.selected)
                );
              },
              selected: function (a) {
                return (
                  a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                );
              },
              empty: function (a) {
                for (a = a.firstChild; a; a = a.nextSibling)
                  if (a.nodeType < 6) return !1;
                return !0;
              },
              parent: function (a) {
                return !w.pseudos.empty(a);
              },
              header: function (a) {
                return pa.test(a.nodeName);
              },
              input: function (a) {
                return oa.test(a.nodeName);
              },
              button: function (a) {
                var b = a.nodeName.toLowerCase();
                return ("input" === b && "button" === a.type) || "button" === b;
              },
              text: function (a) {
                var b;
                return (
                  "input" === a.nodeName.toLowerCase() &&
                  "text" === a.type &&
                  (null == (b = a.getAttribute("type")) ||
                    "text" === b.toLowerCase())
                );
              },
              first: j(function () {
                return [0];
              }),
              last: j(function (a, b) {
                return [b - 1];
              }),
              eq: j(function (a, b, c) {
                return [0 > c ? c + b : c];
              }),
              even: j(function (a, b) {
                for (var c = 0; b > c; c += 2) a.push(c);
                return a;
              }),
              odd: j(function (a, b) {
                for (var c = 1; b > c; c += 2) a.push(c);
                return a;
              }),
              lt: j(function (a, b, c) {
                for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
                return a;
              }),
              gt: j(function (a, b, c) {
                for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
                return a;
              }),
            },
          }),
        (w.pseudos.nth = w.pseudos.eq);
      for (u in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
        w.pseudos[u] = h(u);
      for (u in { submit: !0, reset: !0 }) w.pseudos[u] = i(u);
      return (
        (l.prototype = w.filters = w.pseudos),
        (w.setFilters = new l()),
        (z = b.tokenize =
          function (a, c) {
            var d,
              e,
              f,
              g,
              h,
              i,
              j,
              k = S[a + " "];
            if (k) return c ? 0 : k.slice(0);
            for (h = a, i = [], j = w.preFilter; h; ) {
              (!d || (e = ia.exec(h))) &&
                (e && (h = h.slice(e[0].length) || h), i.push((f = []))),
                (d = !1),
                (e = ja.exec(h)) &&
                  ((d = e.shift()),
                  f.push({ value: d, type: e[0].replace(ha, " ") }),
                  (h = h.slice(d.length)));
              for (g in w.filter)
                !(e = na[g].exec(h)) ||
                  (j[g] && !(e = j[g](e))) ||
                  ((d = e.shift()),
                  f.push({ value: d, type: g, matches: e }),
                  (h = h.slice(d.length)));
              if (!d) break;
            }
            return c ? h.length : h ? b.error(a) : S(a, i).slice(0);
          }),
        (A = b.compile =
          function (a, b) {
            var c,
              d = [],
              e = [],
              f = T[a + " "];
            if (!f) {
              for (b || (b = z(a)), c = b.length; c--; )
                (f = s(b[c])), f[N] ? d.push(f) : e.push(f);
              (f = T(a, t(e, d))), (f.selector = a);
            }
            return f;
          }),
        (B = b.select =
          function (a, b, c, d) {
            var e,
              f,
              g,
              h,
              i,
              j = "function" == typeof a && a,
              l = !d && z((a = j.selector || a));
            if (((c = c || []), 1 === l.length)) {
              if (
                ((f = l[0] = l[0].slice(0)),
                f.length > 2 &&
                  "ID" === (g = f[0]).type &&
                  v.getById &&
                  9 === b.nodeType &&
                  I &&
                  w.relative[f[1].type])
              ) {
                if (
                  ((b = (w.find.ID(g.matches[0].replace(ua, va), b) || [])[0]),
                  !b)
                )
                  return c;
                j && (b = b.parentNode), (a = a.slice(f.shift().value.length));
              }
              for (
                e = na.needsContext.test(a) ? 0 : f.length;
                e-- && ((g = f[e]), !w.relative[(h = g.type)]);

              )
                if (
                  (i = w.find[h]) &&
                  (d = i(
                    g.matches[0].replace(ua, va),
                    (sa.test(f[0].type) && k(b.parentNode)) || b
                  ))
                ) {
                  if ((f.splice(e, 1), (a = d.length && m(f)), !a))
                    return $.apply(c, d), c;
                  break;
                }
            }
            return (
              (j || A(a, l))(
                d,
                b,
                !I,
                c,
                !b || (sa.test(a) && k(b.parentNode)) || b
              ),
              c
            );
          }),
        (v.sortStable = N.split("").sort(U).join("") === N),
        (v.detectDuplicates = !!E),
        F(),
        (v.sortDetached = e(function (a) {
          return 1 & a.compareDocumentPosition(G.createElement("div"));
        })),
        e(function (a) {
          return (
            (a.innerHTML = "<a href='#'></a>"),
            "#" === a.firstChild.getAttribute("href")
          );
        }) ||
          f("type|href|height|width", function (a, b, c) {
            return c
              ? void 0
              : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
          }),
        (v.attributes &&
          e(function (a) {
            return (
              (a.innerHTML = "<input/>"),
              a.firstChild.setAttribute("value", ""),
              "" === a.firstChild.getAttribute("value")
            );
          })) ||
          f("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase()
              ? void 0
              : a.defaultValue;
          }),
        e(function (a) {
          return null == a.getAttribute("disabled");
        }) ||
          f(ba, function (a, b, c) {
            var d;
            return c
              ? void 0
              : a[b] === !0
              ? b.toLowerCase()
              : (d = a.getAttributeNode(b)) && d.specified
              ? d.value
              : null;
          }),
        b
      );
    })(a);
    (fa.find = ka),
      (fa.expr = ka.selectors),
      (fa.expr[":"] = fa.expr.pseudos),
      (fa.uniqueSort = fa.unique = ka.uniqueSort),
      (fa.text = ka.getText),
      (fa.isXMLDoc = ka.isXML),
      (fa.contains = ka.contains);
    var la = function (a, b, c) {
        for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType; )
          if (1 === a.nodeType) {
            if (e && fa(a).is(c)) break;
            d.push(a);
          }
        return d;
      },
      ma = function (a, b) {
        for (var c = []; a; a = a.nextSibling)
          1 === a.nodeType && a !== b && c.push(a);
        return c;
      },
      na = fa.expr.match.needsContext,
      oa = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      pa = /^.[^:#\[\.,]*$/;
    (fa.filter = function (a, b, c) {
      var d = b[0];
      return (
        c && (a = ":not(" + a + ")"),
        1 === b.length && 1 === d.nodeType
          ? fa.find.matchesSelector(d, a)
            ? [d]
            : []
          : fa.find.matches(
              a,
              fa.grep(b, function (a) {
                return 1 === a.nodeType;
              })
            )
      );
    }),
      fa.fn.extend({
        find: function (a) {
          var b,
            c = this.length,
            d = [],
            e = this;
          if ("string" != typeof a)
            return this.pushStack(
              fa(a).filter(function () {
                for (b = 0; c > b; b++) if (fa.contains(e[b], this)) return !0;
              })
            );
          for (b = 0; c > b; b++) fa.find(a, e[b], d);
          return (
            (d = this.pushStack(c > 1 ? fa.unique(d) : d)),
            (d.selector = this.selector ? this.selector + " " + a : a),
            d
          );
        },
        filter: function (a) {
          return this.pushStack(d(this, a || [], !1));
        },
        not: function (a) {
          return this.pushStack(d(this, a || [], !0));
        },
        is: function (a) {
          return !!d(
            this,
            "string" == typeof a && na.test(a) ? fa(a) : a || [],
            !1
          ).length;
        },
      });
    var qa,
      ra = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      sa = (fa.fn.init = function (a, b, c) {
        var d, e;
        if (!a) return this;
        if (((c = c || qa), "string" == typeof a)) {
          if (
            ((d =
              "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3
                ? [null, a, null]
                : ra.exec(a)),
            !d || (!d[1] && b))
          )
            return !b || b.jquery
              ? (b || c).find(a)
              : this.constructor(b).find(a);
          if (d[1]) {
            if (
              ((b = b instanceof fa ? b[0] : b),
              fa.merge(
                this,
                fa.parseHTML(
                  d[1],
                  b && b.nodeType ? b.ownerDocument || b : X,
                  !0
                )
              ),
              oa.test(d[1]) && fa.isPlainObject(b))
            )
              for (d in b)
                fa.isFunction(this[d]) ? this[d](b[d]) : this.attr(d, b[d]);
            return this;
          }
          return (
            (e = X.getElementById(d[2])),
            e && e.parentNode && ((this.length = 1), (this[0] = e)),
            (this.context = X),
            (this.selector = a),
            this
          );
        }
        return a.nodeType
          ? ((this.context = this[0] = a), (this.length = 1), this)
          : fa.isFunction(a)
          ? void 0 !== c.ready
            ? c.ready(a)
            : a(fa)
          : (void 0 !== a.selector &&
              ((this.selector = a.selector), (this.context = a.context)),
            fa.makeArray(a, this));
      });
    (sa.prototype = fa.fn), (qa = fa(X));
    var ta = /^(?:parents|prev(?:Until|All))/,
      ua = { children: !0, contents: !0, next: !0, prev: !0 };
    fa.fn.extend({
      has: function (a) {
        var b = fa(a, this),
          c = b.length;
        return this.filter(function () {
          for (var a = 0; c > a; a++) if (fa.contains(this, b[a])) return !0;
        });
      },
      closest: function (a, b) {
        for (
          var c,
            d = 0,
            e = this.length,
            f = [],
            g =
              na.test(a) || "string" != typeof a ? fa(a, b || this.context) : 0;
          e > d;
          d++
        )
          for (c = this[d]; c && c !== b; c = c.parentNode)
            if (
              c.nodeType < 11 &&
              (g
                ? g.index(c) > -1
                : 1 === c.nodeType && fa.find.matchesSelector(c, a))
            ) {
              f.push(c);
              break;
            }
        return this.pushStack(f.length > 1 ? fa.uniqueSort(f) : f);
      },
      index: function (a) {
        return a
          ? "string" == typeof a
            ? _.call(fa(a), this[0])
            : _.call(this, a.jquery ? a[0] : a)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (a, b) {
        return this.pushStack(fa.uniqueSort(fa.merge(this.get(), fa(a, b))));
      },
      addBack: function (a) {
        return this.add(
          null == a ? this.prevObject : this.prevObject.filter(a)
        );
      },
    }),
      fa.each(
        {
          parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null;
          },
          parents: function (a) {
            return la(a, "parentNode");
          },
          parentsUntil: function (a, b, c) {
            return la(a, "parentNode", c);
          },
          next: function (a) {
            return e(a, "nextSibling");
          },
          prev: function (a) {
            return e(a, "previousSibling");
          },
          nextAll: function (a) {
            return la(a, "nextSibling");
          },
          prevAll: function (a) {
            return la(a, "previousSibling");
          },
          nextUntil: function (a, b, c) {
            return la(a, "nextSibling", c);
          },
          prevUntil: function (a, b, c) {
            return la(a, "previousSibling", c);
          },
          siblings: function (a) {
            return ma((a.parentNode || {}).firstChild, a);
          },
          children: function (a) {
            return ma(a.firstChild);
          },
          contents: function (a) {
            return a.contentDocument || fa.merge([], a.childNodes);
          },
        },
        function (a, b) {
          fa.fn[a] = function (c, d) {
            var e = fa.map(this, b, c);
            return (
              "Until" !== a.slice(-5) && (d = c),
              d && "string" == typeof d && (e = fa.filter(d, e)),
              this.length > 1 &&
                (ua[a] || fa.uniqueSort(e), ta.test(a) && e.reverse()),
              this.pushStack(e)
            );
          };
        }
      );
    var va = /\S+/g;
    (fa.Callbacks = function (a) {
      a = "string" == typeof a ? f(a) : fa.extend({}, a);
      var b,
        c,
        d,
        e,
        g = [],
        h = [],
        i = -1,
        j = function () {
          for (e = a.once, d = b = !0; h.length; i = -1)
            for (c = h.shift(); ++i < g.length; )
              g[i].apply(c[0], c[1]) === !1 &&
                a.stopOnFalse &&
                ((i = g.length), (c = !1));
          a.memory || (c = !1), (b = !1), e && (g = c ? [] : "");
        },
        k = {
          add: function () {
            return (
              g &&
                (c && !b && ((i = g.length - 1), h.push(c)),
                (function d(b) {
                  fa.each(b, function (b, c) {
                    fa.isFunction(c)
                      ? (a.unique && k.has(c)) || g.push(c)
                      : c && c.length && "string" !== fa.type(c) && d(c);
                  });
                })(arguments),
                c && !b && j()),
              this
            );
          },
          remove: function () {
            return (
              fa.each(arguments, function (a, b) {
                for (var c; (c = fa.inArray(b, g, c)) > -1; )
                  g.splice(c, 1), i >= c && i--;
              }),
              this
            );
          },
          has: function (a) {
            return a ? fa.inArray(a, g) > -1 : g.length > 0;
          },
          empty: function () {
            return g && (g = []), this;
          },
          disable: function () {
            return (e = h = []), (g = c = ""), this;
          },
          disabled: function () {
            return !g;
          },
          lock: function () {
            return (e = h = []), c || (g = c = ""), this;
          },
          locked: function () {
            return !!e;
          },
          fireWith: function (a, c) {
            return (
              e ||
                ((c = c || []),
                (c = [a, c.slice ? c.slice() : c]),
                h.push(c),
                b || j()),
              this
            );
          },
          fire: function () {
            return k.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!d;
          },
        };
      return k;
    }),
      fa.extend({
        Deferred: function (a) {
          var b = [
              ["resolve", "done", fa.Callbacks("once memory"), "resolved"],
              ["reject", "fail", fa.Callbacks("once memory"), "rejected"],
              ["notify", "progress", fa.Callbacks("memory")],
            ],
            c = "pending",
            d = {
              state: function () {
                return c;
              },
              always: function () {
                return e.done(arguments).fail(arguments), this;
              },
              then: function () {
                var a = arguments;
                return fa
                  .Deferred(function (c) {
                    fa.each(b, function (b, f) {
                      var g = fa.isFunction(a[b]) && a[b];
                      e[f[1]](function () {
                        var a = g && g.apply(this, arguments);
                        a && fa.isFunction(a.promise)
                          ? a
                              .promise()
                              .progress(c.notify)
                              .done(c.resolve)
                              .fail(c.reject)
                          : c[f[0] + "With"](
                              this === d ? c.promise() : this,
                              g ? [a] : arguments
                            );
                      });
                    }),
                      (a = null);
                  })
                  .promise();
              },
              promise: function (a) {
                return null != a ? fa.extend(a, d) : d;
              },
            },
            e = {};
          return (
            (d.pipe = d.then),
            fa.each(b, function (a, f) {
              var g = f[2],
                h = f[3];
              (d[f[1]] = g.add),
                h &&
                  g.add(
                    function () {
                      c = h;
                    },
                    b[1 ^ a][2].disable,
                    b[2][2].lock
                  ),
                (e[f[0]] = function () {
                  return (
                    e[f[0] + "With"](this === e ? d : this, arguments), this
                  );
                }),
                (e[f[0] + "With"] = g.fireWith);
            }),
            d.promise(e),
            a && a.call(e, e),
            e
          );
        },
        when: function (a) {
          var b,
            c,
            d,
            e = 0,
            f = Y.call(arguments),
            g = f.length,
            h = 1 !== g || (a && fa.isFunction(a.promise)) ? g : 0,
            i = 1 === h ? a : fa.Deferred(),
            j = function (a, c, d) {
              return function (e) {
                (c[a] = this),
                  (d[a] = arguments.length > 1 ? Y.call(arguments) : e),
                  d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d);
              };
            };
          if (g > 1)
            for (
              b = new Array(g), c = new Array(g), d = new Array(g);
              g > e;
              e++
            )
              f[e] && fa.isFunction(f[e].promise)
                ? f[e]
                    .promise()
                    .progress(j(e, c, b))
                    .done(j(e, d, f))
                    .fail(i.reject)
                : --h;
          return h || i.resolveWith(d, f), i.promise();
        },
      });
    var wa;
    (fa.fn.ready = function (a) {
      return fa.ready.promise().done(a), this;
    }),
      fa.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (a) {
          a ? fa.readyWait++ : fa.ready(!0);
        },
        ready: function (a) {
          (a === !0 ? --fa.readyWait : fa.isReady) ||
            ((fa.isReady = !0),
            (a !== !0 && --fa.readyWait > 0) ||
              (wa.resolveWith(X, [fa]),
              fa.fn.triggerHandler &&
                (fa(X).triggerHandler("ready"), fa(X).off("ready"))));
        },
      }),
      (fa.ready.promise = function (b) {
        return (
          wa ||
            ((wa = fa.Deferred()),
            "complete" === X.readyState ||
            ("loading" !== X.readyState && !X.documentElement.doScroll)
              ? a.setTimeout(fa.ready)
              : (X.addEventListener("DOMContentLoaded", g),
                a.addEventListener("load", g))),
          wa.promise(b)
        );
      }),
      fa.ready.promise();
    var xa = function (a, b, c, d, e, f, g) {
        var h = 0,
          i = a.length,
          j = null == c;
        if ("object" === fa.type(c)) {
          e = !0;
          for (h in c) xa(a, b, h, c[h], !0, f, g);
        } else if (
          void 0 !== d &&
          ((e = !0),
          fa.isFunction(d) || (g = !0),
          j &&
            (g
              ? (b.call(a, d), (b = null))
              : ((j = b),
                (b = function (a, b, c) {
                  return j.call(fa(a), c);
                }))),
          b)
        )
          for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
      },
      ya = function (a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
      };
    (h.uid = 1),
      (h.prototype = {
        register: function (a, b) {
          var c = b || {};
          return (
            a.nodeType
              ? (a[this.expando] = c)
              : Object.defineProperty(a, this.expando, {
                  value: c,
                  writable: !0,
                  configurable: !0,
                }),
            a[this.expando]
          );
        },
        cache: function (a) {
          if (!ya(a)) return {};
          var b = a[this.expando];
          return (
            b ||
              ((b = {}),
              ya(a) &&
                (a.nodeType
                  ? (a[this.expando] = b)
                  : Object.defineProperty(a, this.expando, {
                      value: b,
                      configurable: !0,
                    }))),
            b
          );
        },
        set: function (a, b, c) {
          var d,
            e = this.cache(a);
          if ("string" == typeof b) e[b] = c;
          else for (d in b) e[d] = b[d];
          return e;
        },
        get: function (a, b) {
          return void 0 === b
            ? this.cache(a)
            : a[this.expando] && a[this.expando][b];
        },
        access: function (a, b, c) {
          var d;
          return void 0 === b || (b && "string" == typeof b && void 0 === c)
            ? ((d = this.get(a, b)),
              void 0 !== d ? d : this.get(a, fa.camelCase(b)))
            : (this.set(a, b, c), void 0 !== c ? c : b);
        },
        remove: function (a, b) {
          var c,
            d,
            e,
            f = a[this.expando];
          if (void 0 !== f) {
            if (void 0 === b) this.register(a);
            else {
              fa.isArray(b)
                ? (d = b.concat(b.map(fa.camelCase)))
                : ((e = fa.camelCase(b)),
                  b in f
                    ? (d = [b, e])
                    : ((d = e), (d = d in f ? [d] : d.match(va) || []))),
                (c = d.length);
              for (; c--; ) delete f[d[c]];
            }
            (void 0 === b || fa.isEmptyObject(f)) &&
              (a.nodeType
                ? (a[this.expando] = void 0)
                : delete a[this.expando]);
          }
        },
        hasData: function (a) {
          var b = a[this.expando];
          return void 0 !== b && !fa.isEmptyObject(b);
        },
      });
    var za = new h(),
      Aa = new h(),
      Ba = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Ca = /[A-Z]/g;
    fa.extend({
      hasData: function (a) {
        return Aa.hasData(a) || za.hasData(a);
      },
      data: function (a, b, c) {
        return Aa.access(a, b, c);
      },
      removeData: function (a, b) {
        Aa.remove(a, b);
      },
      _data: function (a, b, c) {
        return za.access(a, b, c);
      },
      _removeData: function (a, b) {
        za.remove(a, b);
      },
    }),
      fa.fn.extend({
        data: function (a, b) {
          var c,
            d,
            e,
            f = this[0],
            g = f && f.attributes;
          if (void 0 === a) {
            if (
              this.length &&
              ((e = Aa.get(f)), 1 === f.nodeType && !za.get(f, "hasDataAttrs"))
            ) {
              for (c = g.length; c--; )
                g[c] &&
                  ((d = g[c].name),
                  0 === d.indexOf("data-") &&
                    ((d = fa.camelCase(d.slice(5))), i(f, d, e[d])));
              za.set(f, "hasDataAttrs", !0);
            }
            return e;
          }
          return "object" == typeof a
            ? this.each(function () {
                Aa.set(this, a);
              })
            : xa(
                this,
                function (b) {
                  var c, d;
                  if (f && void 0 === b) {
                    if (
                      ((c =
                        Aa.get(f, a) ||
                        Aa.get(f, a.replace(Ca, "-$&").toLowerCase())),
                      void 0 !== c)
                    )
                      return c;
                    if (
                      ((d = fa.camelCase(a)), (c = Aa.get(f, d)), void 0 !== c)
                    )
                      return c;
                    if (((c = i(f, d, void 0)), void 0 !== c)) return c;
                  } else
                    (d = fa.camelCase(a)),
                      this.each(function () {
                        var c = Aa.get(this, d);
                        Aa.set(this, d, b),
                          a.indexOf("-") > -1 &&
                            void 0 !== c &&
                            Aa.set(this, a, b);
                      });
                },
                null,
                b,
                arguments.length > 1,
                null,
                !0
              );
        },
        removeData: function (a) {
          return this.each(function () {
            Aa.remove(this, a);
          });
        },
      }),
      fa.extend({
        queue: function (a, b, c) {
          var d;
          return a
            ? ((b = (b || "fx") + "queue"),
              (d = za.get(a, b)),
              c &&
                (!d || fa.isArray(c)
                  ? (d = za.access(a, b, fa.makeArray(c)))
                  : d.push(c)),
              d || [])
            : void 0;
        },
        dequeue: function (a, b) {
          b = b || "fx";
          var c = fa.queue(a, b),
            d = c.length,
            e = c.shift(),
            f = fa._queueHooks(a, b),
            g = function () {
              fa.dequeue(a, b);
            };
          "inprogress" === e && ((e = c.shift()), d--),
            e &&
              ("fx" === b && c.unshift("inprogress"),
              delete f.stop,
              e.call(a, g, f)),
            !d && f && f.empty.fire();
        },
        _queueHooks: function (a, b) {
          var c = b + "queueHooks";
          return (
            za.get(a, c) ||
            za.access(a, c, {
              empty: fa.Callbacks("once memory").add(function () {
                za.remove(a, [b + "queue", c]);
              }),
            })
          );
        },
      }),
      fa.fn.extend({
        queue: function (a, b) {
          var c = 2;
          return (
            "string" != typeof a && ((b = a), (a = "fx"), c--),
            arguments.length < c
              ? fa.queue(this[0], a)
              : void 0 === b
              ? this
              : this.each(function () {
                  var c = fa.queue(this, a, b);
                  fa._queueHooks(this, a),
                    "fx" === a && "inprogress" !== c[0] && fa.dequeue(this, a);
                })
          );
        },
        dequeue: function (a) {
          return this.each(function () {
            fa.dequeue(this, a);
          });
        },
        clearQueue: function (a) {
          return this.queue(a || "fx", []);
        },
        promise: function (a, b) {
          var c,
            d = 1,
            e = fa.Deferred(),
            f = this,
            g = this.length,
            h = function () {
              --d || e.resolveWith(f, [f]);
            };
          for (
            "string" != typeof a && ((b = a), (a = void 0)), a = a || "fx";
            g--;

          )
            (c = za.get(f[g], a + "queueHooks")),
              c && c.empty && (d++, c.empty.add(h));
          return h(), e.promise(b);
        },
      });
    var Da = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      Ea = new RegExp("^(?:([+-])=|)(" + Da + ")([a-z%]*)$", "i"),
      Fa = ["Top", "Right", "Bottom", "Left"],
      Ga = function (a, b) {
        return (
          (a = b || a),
          "none" === fa.css(a, "display") || !fa.contains(a.ownerDocument, a)
        );
      },
      Ha = /^(?:checkbox|radio)$/i,
      Ia = /<([\w:-]+)/,
      Ja = /^$|\/(?:java|ecma)script/i,
      Ka = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
    (Ka.optgroup = Ka.option),
      (Ka.tbody = Ka.tfoot = Ka.colgroup = Ka.caption = Ka.thead),
      (Ka.th = Ka.td);
    var La = /<|&#?\w+;/;
    !(function () {
      var a = X.createDocumentFragment(),
        b = a.appendChild(X.createElement("div")),
        c = X.createElement("input");
      c.setAttribute("type", "radio"),
        c.setAttribute("checked", "checked"),
        c.setAttribute("name", "t"),
        b.appendChild(c),
        (da.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (b.innerHTML = "<textarea>x</textarea>"),
        (da.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue);
    })();
    var Ma = /^key/,
      Na = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Oa = /^([^.]*)(?:\.(.+)|)/;
    (fa.event = {
      global: {},
      add: function (a, b, c, d, e) {
        var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q = za.get(a);
        if (q)
          for (
            c.handler && ((f = c), (c = f.handler), (e = f.selector)),
              c.guid || (c.guid = fa.guid++),
              (i = q.events) || (i = q.events = {}),
              (g = q.handle) ||
                (g = q.handle =
                  function (b) {
                    return "undefined" != typeof fa &&
                      fa.event.triggered !== b.type
                      ? fa.event.dispatch.apply(a, arguments)
                      : void 0;
                  }),
              b = (b || "").match(va) || [""],
              j = b.length;
            j--;

          )
            (h = Oa.exec(b[j]) || []),
              (n = p = h[1]),
              (o = (h[2] || "").split(".").sort()),
              n &&
                ((l = fa.event.special[n] || {}),
                (n = (e ? l.delegateType : l.bindType) || n),
                (l = fa.event.special[n] || {}),
                (k = fa.extend(
                  {
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && fa.expr.match.needsContext.test(e),
                    namespace: o.join("."),
                  },
                  f
                )),
                (m = i[n]) ||
                  ((m = i[n] = []),
                  (m.delegateCount = 0),
                  (l.setup && l.setup.call(a, d, o, g) !== !1) ||
                    (a.addEventListener && a.addEventListener(n, g))),
                l.add &&
                  (l.add.call(a, k),
                  k.handler.guid || (k.handler.guid = c.guid)),
                e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
                (fa.event.global[n] = !0));
      },
      remove: function (a, b, c, d, e) {
        var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q = za.hasData(a) && za.get(a);
        if (q && (i = q.events)) {
          for (b = (b || "").match(va) || [""], j = b.length; j--; )
            if (
              ((h = Oa.exec(b[j]) || []),
              (n = p = h[1]),
              (o = (h[2] || "").split(".").sort()),
              n)
            ) {
              for (
                l = fa.event.special[n] || {},
                  n = (d ? l.delegateType : l.bindType) || n,
                  m = i[n] || [],
                  h =
                    h[2] &&
                    new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                  g = f = m.length;
                f--;

              )
                (k = m[f]),
                  (!e && p !== k.origType) ||
                    (c && c.guid !== k.guid) ||
                    (h && !h.test(k.namespace)) ||
                    (d && d !== k.selector && ("**" !== d || !k.selector)) ||
                    (m.splice(f, 1),
                    k.selector && m.delegateCount--,
                    l.remove && l.remove.call(a, k));
              g &&
                !m.length &&
                ((l.teardown && l.teardown.call(a, o, q.handle) !== !1) ||
                  fa.removeEvent(a, n, q.handle),
                delete i[n]);
            } else for (n in i) fa.event.remove(a, n + b[j], c, d, !0);
          fa.isEmptyObject(i) && za.remove(a, "handle events");
        }
      },
      dispatch: function (a) {
        a = fa.event.fix(a);
        var b,
          c,
          d,
          e,
          f,
          g = [],
          h = Y.call(arguments),
          i = (za.get(this, "events") || {})[a.type] || [],
          j = fa.event.special[a.type] || {};
        if (
          ((h[0] = a),
          (a.delegateTarget = this),
          !j.preDispatch || j.preDispatch.call(this, a) !== !1)
        ) {
          for (
            g = fa.event.handlers.call(this, a, i), b = 0;
            (e = g[b++]) && !a.isPropagationStopped();

          )
            for (
              a.currentTarget = e.elem, c = 0;
              (f = e.handlers[c++]) && !a.isImmediatePropagationStopped();

            )
              (!a.rnamespace || a.rnamespace.test(f.namespace)) &&
                ((a.handleObj = f),
                (a.data = f.data),
                (d = (
                  (fa.event.special[f.origType] || {}).handle || f.handler
                ).apply(e.elem, h)),
                void 0 !== d &&
                  (a.result = d) === !1 &&
                  (a.preventDefault(), a.stopPropagation()));
          return j.postDispatch && j.postDispatch.call(this, a), a.result;
        }
      },
      handlers: function (a, b) {
        var c,
          d,
          e,
          f,
          g = [],
          h = b.delegateCount,
          i = a.target;
        if (
          h &&
          i.nodeType &&
          ("click" !== a.type || isNaN(a.button) || a.button < 1)
        )
          for (; i !== this; i = i.parentNode || this)
            if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
              for (d = [], c = 0; h > c; c++)
                (f = b[c]),
                  (e = f.selector + " "),
                  void 0 === d[e] &&
                    (d[e] = f.needsContext
                      ? fa(e, this).index(i) > -1
                      : fa.find(e, this, null, [i]).length),
                  d[e] && d.push(f);
              d.length && g.push({ elem: i, handlers: d });
            }
        return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
      },
      props:
        "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
          " "
        ),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function (a, b) {
          return (
            null == a.which &&
              (a.which = null != b.charCode ? b.charCode : b.keyCode),
            a
          );
        },
      },
      mouseHooks: {
        props:
          "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
            " "
          ),
        filter: function (a, b) {
          var c,
            d,
            e,
            f = b.button;
          return (
            null == a.pageX &&
              null != b.clientX &&
              ((c = a.target.ownerDocument || X),
              (d = c.documentElement),
              (e = c.body),
              (a.pageX =
                b.clientX +
                ((d && d.scrollLeft) || (e && e.scrollLeft) || 0) -
                ((d && d.clientLeft) || (e && e.clientLeft) || 0)),
              (a.pageY =
                b.clientY +
                ((d && d.scrollTop) || (e && e.scrollTop) || 0) -
                ((d && d.clientTop) || (e && e.clientTop) || 0))),
            a.which ||
              void 0 === f ||
              (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
            a
          );
        },
      },
      fix: function (a) {
        if (a[fa.expando]) return a;
        var b,
          c,
          d,
          e = a.type,
          f = a,
          g = this.fixHooks[e];
        for (
          g ||
            (this.fixHooks[e] = g =
              Na.test(e) ? this.mouseHooks : Ma.test(e) ? this.keyHooks : {}),
            d = g.props ? this.props.concat(g.props) : this.props,
            a = new fa.Event(f),
            b = d.length;
          b--;

        )
          (c = d[b]), (a[c] = f[c]);
        return (
          a.target || (a.target = X),
          3 === a.target.nodeType && (a.target = a.target.parentNode),
          g.filter ? g.filter(a, f) : a
        );
      },
      special: {
        load: { noBubble: !0 },
        focus: {
          trigger: function () {
            return this !== p() && this.focus ? (this.focus(), !1) : void 0;
          },
          delegateType: "focusin",
        },
        blur: {
          trigger: function () {
            return this === p() && this.blur ? (this.blur(), !1) : void 0;
          },
          delegateType: "focusout",
        },
        click: {
          trigger: function () {
            return "checkbox" === this.type &&
              this.click &&
              fa.nodeName(this, "input")
              ? (this.click(), !1)
              : void 0;
          },
          _default: function (a) {
            return fa.nodeName(a.target, "a");
          },
        },
        beforeunload: {
          postDispatch: function (a) {
            void 0 !== a.result &&
              a.originalEvent &&
              (a.originalEvent.returnValue = a.result);
          },
        },
      },
    }),
      (fa.removeEvent = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c);
      }),
      (fa.Event = function (a, b) {
        return this instanceof fa.Event
          ? (a && a.type
              ? ((this.originalEvent = a),
                (this.type = a.type),
                (this.isDefaultPrevented =
                  a.defaultPrevented ||
                  (void 0 === a.defaultPrevented && a.returnValue === !1)
                    ? n
                    : o))
              : (this.type = a),
            b && fa.extend(this, b),
            (this.timeStamp = (a && a.timeStamp) || fa.now()),
            void (this[fa.expando] = !0))
          : new fa.Event(a, b);
      }),
      (fa.Event.prototype = {
        constructor: fa.Event,
        isDefaultPrevented: o,
        isPropagationStopped: o,
        isImmediatePropagationStopped: o,
        preventDefault: function () {
          var a = this.originalEvent;
          (this.isDefaultPrevented = n), a && a.preventDefault();
        },
        stopPropagation: function () {
          var a = this.originalEvent;
          (this.isPropagationStopped = n), a && a.stopPropagation();
        },
        stopImmediatePropagation: function () {
          var a = this.originalEvent;
          (this.isImmediatePropagationStopped = n),
            a && a.stopImmediatePropagation(),
            this.stopPropagation();
        },
      }),
      fa.each(
        {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout",
        },
        function (a, b) {
          fa.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function (a) {
              var c,
                d = this,
                e = a.relatedTarget,
                f = a.handleObj;
              return (
                (!e || (e !== d && !fa.contains(d, e))) &&
                  ((a.type = f.origType),
                  (c = f.handler.apply(this, arguments)),
                  (a.type = b)),
                c
              );
            },
          };
        }
      ),
      fa.fn.extend({
        on: function (a, b, c, d) {
          return q(this, a, b, c, d);
        },
        one: function (a, b, c, d) {
          return q(this, a, b, c, d, 1);
        },
        off: function (a, b, c) {
          var d, e;
          if (a && a.preventDefault && a.handleObj)
            return (
              (d = a.handleObj),
              fa(a.delegateTarget).off(
                d.namespace ? d.origType + "." + d.namespace : d.origType,
                d.selector,
                d.handler
              ),
              this
            );
          if ("object" == typeof a) {
            for (e in a) this.off(e, b, a[e]);
            return this;
          }
          return (
            (b === !1 || "function" == typeof b) && ((c = b), (b = void 0)),
            c === !1 && (c = o),
            this.each(function () {
              fa.event.remove(this, a, c, b);
            })
          );
        },
      });
    var Pa =
        /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      Qa = /<script|<style|<link/i,
      Ra = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Sa = /^true\/(.*)/,
      Ta = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    fa.extend({
      htmlPrefilter: function (a) {
        return a.replace(Pa, "<$1></$2>");
      },
      clone: function (a, b, c) {
        var d,
          e,
          f,
          g,
          h = a.cloneNode(!0),
          i = fa.contains(a.ownerDocument, a);
        if (
          !(
            da.noCloneChecked ||
            (1 !== a.nodeType && 11 !== a.nodeType) ||
            fa.isXMLDoc(a)
          )
        )
          for (g = k(h), f = k(a), d = 0, e = f.length; e > d; d++)
            v(f[d], g[d]);
        if (b)
          if (c)
            for (f = f || k(a), g = g || k(h), d = 0, e = f.length; e > d; d++)
              u(f[d], g[d]);
          else u(a, h);
        return (
          (g = k(h, "script")), g.length > 0 && l(g, !i && k(a, "script")), h
        );
      },
      cleanData: function (a) {
        for (
          var b, c, d, e = fa.event.special, f = 0;
          void 0 !== (c = a[f]);
          f++
        )
          if (ya(c)) {
            if ((b = c[za.expando])) {
              if (b.events)
                for (d in b.events)
                  e[d] ? fa.event.remove(c, d) : fa.removeEvent(c, d, b.handle);
              c[za.expando] = void 0;
            }
            c[Aa.expando] && (c[Aa.expando] = void 0);
          }
      },
    }),
      fa.fn.extend({
        domManip: w,
        detach: function (a) {
          return x(this, a, !0);
        },
        remove: function (a) {
          return x(this, a);
        },
        text: function (a) {
          return xa(
            this,
            function (a) {
              return void 0 === a
                ? fa.text(this)
                : this.empty().each(function () {
                    (1 === this.nodeType ||
                      11 === this.nodeType ||
                      9 === this.nodeType) &&
                      (this.textContent = a);
                  });
            },
            null,
            a,
            arguments.length
          );
        },
        append: function () {
          return w(this, arguments, function (a) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var b = r(this, a);
              b.appendChild(a);
            }
          });
        },
        prepend: function () {
          return w(this, arguments, function (a) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var b = r(this, a);
              b.insertBefore(a, b.firstChild);
            }
          });
        },
        before: function () {
          return w(this, arguments, function (a) {
            this.parentNode && this.parentNode.insertBefore(a, this);
          });
        },
        after: function () {
          return w(this, arguments, function (a) {
            this.parentNode &&
              this.parentNode.insertBefore(a, this.nextSibling);
          });
        },
        empty: function () {
          for (var a, b = 0; null != (a = this[b]); b++)
            1 === a.nodeType && (fa.cleanData(k(a, !1)), (a.textContent = ""));
          return this;
        },
        clone: function (a, b) {
          return (
            (a = null == a ? !1 : a),
            (b = null == b ? a : b),
            this.map(function () {
              return fa.clone(this, a, b);
            })
          );
        },
        html: function (a) {
          return xa(
            this,
            function (a) {
              var b = this[0] || {},
                c = 0,
                d = this.length;
              if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
              if (
                "string" == typeof a &&
                !Qa.test(a) &&
                !Ka[(Ia.exec(a) || ["", ""])[1].toLowerCase()]
              ) {
                a = fa.htmlPrefilter(a);
                try {
                  for (; d > c; c++)
                    (b = this[c] || {}),
                      1 === b.nodeType &&
                        (fa.cleanData(k(b, !1)), (b.innerHTML = a));
                  b = 0;
                } catch (e) {}
              }
              b && this.empty().append(a);
            },
            null,
            a,
            arguments.length
          );
        },
        replaceWith: function () {
          var a = [];
          return w(
            this,
            arguments,
            function (b) {
              var c = this.parentNode;
              fa.inArray(this, a) < 0 &&
                (fa.cleanData(k(this)), c && c.replaceChild(b, this));
            },
            a
          );
        },
      }),
      fa.each(
        {
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith",
        },
        function (a, b) {
          fa.fn[a] = function (a) {
            for (var c, d = [], e = fa(a), f = e.length - 1, g = 0; f >= g; g++)
              (c = g === f ? this : this.clone(!0)),
                fa(e[g])[b](c),
                $.apply(d, c.get());
            return this.pushStack(d);
          };
        }
      );
    var Ua,
      Va = { HTML: "block", BODY: "block" },
      Wa = /^margin/,
      Xa = new RegExp("^(" + Da + ")(?!px)[a-z%]+$", "i"),
      Ya = function (b) {
        var c = b.ownerDocument.defaultView;
        return (c && c.opener) || (c = a), c.getComputedStyle(b);
      },
      Za = function (a, b, c, d) {
        var e,
          f,
          g = {};
        for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e;
      },
      $a = X.documentElement;
    !(function () {
      function b() {
        (h.style.cssText =
          "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
          (h.innerHTML = ""),
          $a.appendChild(g);
        var b = a.getComputedStyle(h);
        (c = "1%" !== b.top),
          (f = "2px" === b.marginLeft),
          (d = "4px" === b.width),
          (h.style.marginRight = "50%"),
          (e = "4px" === b.marginRight),
          $a.removeChild(g);
      }
      var c,
        d,
        e,
        f,
        g = X.createElement("div"),
        h = X.createElement("div");
      h.style &&
        ((h.style.backgroundClip = "content-box"),
        (h.cloneNode(!0).style.backgroundClip = ""),
        (da.clearCloneStyle = "content-box" === h.style.backgroundClip),
        (g.style.cssText =
          "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
        g.appendChild(h),
        fa.extend(da, {
          pixelPosition: function () {
            return b(), c;
          },
          boxSizingReliable: function () {
            return null == d && b(), d;
          },
          pixelMarginRight: function () {
            return null == d && b(), e;
          },
          reliableMarginLeft: function () {
            return null == d && b(), f;
          },
          reliableMarginRight: function () {
            var b,
              c = h.appendChild(X.createElement("div"));
            return (
              (c.style.cssText = h.style.cssText =
                "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
              (c.style.marginRight = c.style.width = "0"),
              (h.style.width = "1px"),
              $a.appendChild(g),
              (b = !parseFloat(a.getComputedStyle(c).marginRight)),
              $a.removeChild(g),
              h.removeChild(c),
              b
            );
          },
        }));
    })();
    var _a = /^(none|table(?!-c[ea]).+)/,
      ab = { position: "absolute", visibility: "hidden", display: "block" },
      bb = { letterSpacing: "0", fontWeight: "400" },
      cb = ["Webkit", "O", "Moz", "ms"],
      db = X.createElement("div").style;
    fa.extend({
      cssHooks: {
        opacity: {
          get: function (a, b) {
            if (b) {
              var c = A(a, "opacity");
              return "" === c ? "1" : c;
            }
          },
        },
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: { float: "cssFloat" },
      style: function (a, b, c, d) {
        if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
          var e,
            f,
            g,
            h = fa.camelCase(b),
            i = a.style;
          return (
            (b = fa.cssProps[h] || (fa.cssProps[h] = C(h) || h)),
            (g = fa.cssHooks[b] || fa.cssHooks[h]),
            void 0 === c
              ? g && "get" in g && void 0 !== (e = g.get(a, !1, d))
                ? e
                : i[b]
              : ((f = typeof c),
                "string" === f &&
                  (e = Ea.exec(c)) &&
                  e[1] &&
                  ((c = j(a, b, e)), (f = "number")),
                null != c &&
                  c === c &&
                  ("number" === f &&
                    (c += (e && e[3]) || (fa.cssNumber[h] ? "" : "px")),
                  da.clearCloneStyle ||
                    "" !== c ||
                    0 !== b.indexOf("background") ||
                    (i[b] = "inherit"),
                  (g && "set" in g && void 0 === (c = g.set(a, c, d))) ||
                    (i[b] = c)),
                void 0)
          );
        }
      },
      css: function (a, b, c, d) {
        var e,
          f,
          g,
          h = fa.camelCase(b);
        return (
          (b = fa.cssProps[h] || (fa.cssProps[h] = C(h) || h)),
          (g = fa.cssHooks[b] || fa.cssHooks[h]),
          g && "get" in g && (e = g.get(a, !0, c)),
          void 0 === e && (e = A(a, b, d)),
          "normal" === e && b in bb && (e = bb[b]),
          "" === c || c
            ? ((f = parseFloat(e)), c === !0 || isFinite(f) ? f || 0 : e)
            : e
        );
      },
    }),
      fa.each(["height", "width"], function (a, b) {
        fa.cssHooks[b] = {
          get: function (a, c, d) {
            return c
              ? _a.test(fa.css(a, "display")) && 0 === a.offsetWidth
                ? Za(a, ab, function () {
                    return F(a, b, d);
                  })
                : F(a, b, d)
              : void 0;
          },
          set: function (a, c, d) {
            var e,
              f = d && Ya(a),
              g =
                d &&
                E(a, b, d, "border-box" === fa.css(a, "boxSizing", !1, f), f);
            return (
              g &&
                (e = Ea.exec(c)) &&
                "px" !== (e[3] || "px") &&
                ((a.style[b] = c), (c = fa.css(a, b))),
              D(a, c, g)
            );
          },
        };
      }),
      (fa.cssHooks.marginLeft = B(da.reliableMarginLeft, function (a, b) {
        return b
          ? (parseFloat(A(a, "marginLeft")) ||
              a.getBoundingClientRect().left -
                Za(a, { marginLeft: 0 }, function () {
                  return a.getBoundingClientRect().left;
                })) + "px"
          : void 0;
      })),
      (fa.cssHooks.marginRight = B(da.reliableMarginRight, function (a, b) {
        return b
          ? Za(a, { display: "inline-block" }, A, [a, "marginRight"])
          : void 0;
      })),
      fa.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
        (fa.cssHooks[a + b] = {
          expand: function (c) {
            for (
              var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c];
              4 > d;
              d++
            )
              e[a + Fa[d] + b] = f[d] || f[d - 2] || f[0];
            return e;
          },
        }),
          Wa.test(a) || (fa.cssHooks[a + b].set = D);
      }),
      fa.fn.extend({
        css: function (a, b) {
          return xa(
            this,
            function (a, b, c) {
              var d,
                e,
                f = {},
                g = 0;
              if (fa.isArray(b)) {
                for (d = Ya(a), e = b.length; e > g; g++)
                  f[b[g]] = fa.css(a, b[g], !1, d);
                return f;
              }
              return void 0 !== c ? fa.style(a, b, c) : fa.css(a, b);
            },
            a,
            b,
            arguments.length > 1
          );
        },
        show: function () {
          return G(this, !0);
        },
        hide: function () {
          return G(this);
        },
        toggle: function (a) {
          return "boolean" == typeof a
            ? a
              ? this.show()
              : this.hide()
            : this.each(function () {
                Ga(this) ? fa(this).show() : fa(this).hide();
              });
        },
      }),
      (fa.Tween = H),
      (H.prototype = {
        constructor: H,
        init: function (a, b, c, d, e, f) {
          (this.elem = a),
            (this.prop = c),
            (this.easing = e || fa.easing._default),
            (this.options = b),
            (this.start = this.now = this.cur()),
            (this.end = d),
            (this.unit = f || (fa.cssNumber[c] ? "" : "px"));
        },
        cur: function () {
          var a = H.propHooks[this.prop];
          return a && a.get ? a.get(this) : H.propHooks._default.get(this);
        },
        run: function (a) {
          var b,
            c = H.propHooks[this.prop];
          return (
            this.options.duration
              ? (this.pos = b =
                  fa.easing[this.easing](
                    a,
                    this.options.duration * a,
                    0,
                    1,
                    this.options.duration
                  ))
              : (this.pos = b = a),
            (this.now = (this.end - this.start) * b + this.start),
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
            c && c.set ? c.set(this) : H.propHooks._default.set(this),
            this
          );
        },
      }),
      (H.prototype.init.prototype = H.prototype),
      (H.propHooks = {
        _default: {
          get: function (a) {
            var b;
            return 1 !== a.elem.nodeType ||
              (null != a.elem[a.prop] && null == a.elem.style[a.prop])
              ? a.elem[a.prop]
              : ((b = fa.css(a.elem, a.prop, "")), b && "auto" !== b ? b : 0);
          },
          set: function (a) {
            fa.fx.step[a.prop]
              ? fa.fx.step[a.prop](a)
              : 1 !== a.elem.nodeType ||
                (null == a.elem.style[fa.cssProps[a.prop]] &&
                  !fa.cssHooks[a.prop])
              ? (a.elem[a.prop] = a.now)
              : fa.style(a.elem, a.prop, a.now + a.unit);
          },
        },
      }),
      (H.propHooks.scrollTop = H.propHooks.scrollLeft =
        {
          set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
          },
        }),
      (fa.easing = {
        linear: function (a) {
          return a;
        },
        swing: function (a) {
          return 0.5 - Math.cos(a * Math.PI) / 2;
        },
        _default: "swing",
      }),
      (fa.fx = H.prototype.init),
      (fa.fx.step = {});
    var eb,
      fb,
      gb = /^(?:toggle|show|hide)$/,
      hb = /queueHooks$/;
    (fa.Animation = fa.extend(N, {
      tweeners: {
        "*": [
          function (a, b) {
            var c = this.createTween(a, b);
            return j(c.elem, a, Ea.exec(b), c), c;
          },
        ],
      },
      tweener: function (a, b) {
        fa.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.match(va));
        for (var c, d = 0, e = a.length; e > d; d++)
          (c = a[d]),
            (N.tweeners[c] = N.tweeners[c] || []),
            N.tweeners[c].unshift(b);
      },
      prefilters: [L],
      prefilter: function (a, b) {
        b ? N.prefilters.unshift(a) : N.prefilters.push(a);
      },
    })),
      (fa.speed = function (a, b, c) {
        var d =
          a && "object" == typeof a
            ? fa.extend({}, a)
            : {
                complete: c || (!c && b) || (fa.isFunction(a) && a),
                duration: a,
                easing: (c && b) || (b && !fa.isFunction(b) && b),
              };
        return (
          (d.duration = fa.fx.off
            ? 0
            : "number" == typeof d.duration
            ? d.duration
            : d.duration in fa.fx.speeds
            ? fa.fx.speeds[d.duration]
            : fa.fx.speeds._default),
          (null == d.queue || d.queue === !0) && (d.queue = "fx"),
          (d.old = d.complete),
          (d.complete = function () {
            fa.isFunction(d.old) && d.old.call(this),
              d.queue && fa.dequeue(this, d.queue);
          }),
          d
        );
      }),
      fa.fn.extend({
        fadeTo: function (a, b, c, d) {
          return this.filter(Ga)
            .css("opacity", 0)
            .show()
            .end()
            .animate({ opacity: b }, a, c, d);
        },
        animate: function (a, b, c, d) {
          var e = fa.isEmptyObject(a),
            f = fa.speed(b, c, d),
            g = function () {
              var b = N(this, fa.extend({}, a), f);
              (e || za.get(this, "finish")) && b.stop(!0);
            };
          return (
            (g.finish = g),
            e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
          );
        },
        stop: function (a, b, c) {
          var d = function (a) {
            var b = a.stop;
            delete a.stop, b(c);
          };
          return (
            "string" != typeof a && ((c = b), (b = a), (a = void 0)),
            b && a !== !1 && this.queue(a || "fx", []),
            this.each(function () {
              var b = !0,
                e = null != a && a + "queueHooks",
                f = fa.timers,
                g = za.get(this);
              if (e) g[e] && g[e].stop && d(g[e]);
              else for (e in g) g[e] && g[e].stop && hb.test(e) && d(g[e]);
              for (e = f.length; e--; )
                f[e].elem !== this ||
                  (null != a && f[e].queue !== a) ||
                  (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
              (b || !c) && fa.dequeue(this, a);
            })
          );
        },
        finish: function (a) {
          return (
            a !== !1 && (a = a || "fx"),
            this.each(function () {
              var b,
                c = za.get(this),
                d = c[a + "queue"],
                e = c[a + "queueHooks"],
                f = fa.timers,
                g = d ? d.length : 0;
              for (
                c.finish = !0,
                  fa.queue(this, a, []),
                  e && e.stop && e.stop.call(this, !0),
                  b = f.length;
                b--;

              )
                f[b].elem === this &&
                  f[b].queue === a &&
                  (f[b].anim.stop(!0), f.splice(b, 1));
              for (b = 0; g > b; b++)
                d[b] && d[b].finish && d[b].finish.call(this);
              delete c.finish;
            })
          );
        },
      }),
      fa.each(["toggle", "show", "hide"], function (a, b) {
        var c = fa.fn[b];
        fa.fn[b] = function (a, d, e) {
          return null == a || "boolean" == typeof a
            ? c.apply(this, arguments)
            : this.animate(J(b, !0), a, d, e);
        };
      }),
      fa.each(
        {
          slideDown: J("show"),
          slideUp: J("hide"),
          slideToggle: J("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" },
        },
        function (a, b) {
          fa.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d);
          };
        }
      ),
      (fa.timers = []),
      (fa.fx.tick = function () {
        var a,
          b = 0,
          c = fa.timers;
        for (eb = fa.now(); b < c.length; b++)
          (a = c[b]), a() || c[b] !== a || c.splice(b--, 1);
        c.length || fa.fx.stop(), (eb = void 0);
      }),
      (fa.fx.timer = function (a) {
        fa.timers.push(a), a() ? fa.fx.start() : fa.timers.pop();
      }),
      (fa.fx.interval = 13),
      (fa.fx.start = function () {
        fb || (fb = a.setInterval(fa.fx.tick, fa.fx.interval));
      }),
      (fa.fx.stop = function () {
        a.clearInterval(fb), (fb = null);
      }),
      (fa.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (fa.fn.delay = function (b, c) {
        return (
          (b = fa.fx ? fa.fx.speeds[b] || b : b),
          (c = c || "fx"),
          this.queue(c, function (c, d) {
            var e = a.setTimeout(c, b);
            d.stop = function () {
              a.clearTimeout(e);
            };
          })
        );
      }),
      (function () {
        var a = X.createElement("input"),
          b = X.createElement("select"),
          c = b.appendChild(X.createElement("option"));
        (a.type = "checkbox"),
          (da.checkOn = "" !== a.value),
          (da.optSelected = c.selected),
          (b.disabled = !0),
          (da.optDisabled = !c.disabled),
          (a = X.createElement("input")),
          (a.value = "t"),
          (a.type = "radio"),
          (da.radioValue = "t" === a.value);
      })();
    var ib,
      jb = fa.expr.attrHandle;
    fa.fn.extend({
      attr: function (a, b) {
        return xa(this, fa.attr, a, b, arguments.length > 1);
      },
      removeAttr: function (a) {
        return this.each(function () {
          fa.removeAttr(this, a);
        });
      },
    }),
      fa.extend({
        attr: function (a, b, c) {
          var d,
            e,
            f = a.nodeType;
          if (3 !== f && 8 !== f && 2 !== f)
            return "undefined" == typeof a.getAttribute
              ? fa.prop(a, b, c)
              : ((1 === f && fa.isXMLDoc(a)) ||
                  ((b = b.toLowerCase()),
                  (e =
                    fa.attrHooks[b] ||
                    (fa.expr.match.bool.test(b) ? ib : void 0))),
                void 0 !== c
                  ? null === c
                    ? void fa.removeAttr(a, b)
                    : e && "set" in e && void 0 !== (d = e.set(a, c, b))
                    ? d
                    : (a.setAttribute(b, c + ""), c)
                  : e && "get" in e && null !== (d = e.get(a, b))
                  ? d
                  : ((d = fa.find.attr(a, b)), null == d ? void 0 : d));
        },
        attrHooks: {
          type: {
            set: function (a, b) {
              if (!da.radioValue && "radio" === b && fa.nodeName(a, "input")) {
                var c = a.value;
                return a.setAttribute("type", b), c && (a.value = c), b;
              }
            },
          },
        },
        removeAttr: function (a, b) {
          var c,
            d,
            e = 0,
            f = b && b.match(va);
          if (f && 1 === a.nodeType)
            for (; (c = f[e++]); )
              (d = fa.propFix[c] || c),
                fa.expr.match.bool.test(c) && (a[d] = !1),
                a.removeAttribute(c);
        },
      }),
      (ib = {
        set: function (a, b, c) {
          return b === !1 ? fa.removeAttr(a, c) : a.setAttribute(c, c), c;
        },
      }),
      fa.each(fa.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = jb[b] || fa.find.attr;
        jb[b] = function (a, b, d) {
          var e, f;
          return (
            d ||
              ((f = jb[b]),
              (jb[b] = e),
              (e = null != c(a, b, d) ? b.toLowerCase() : null),
              (jb[b] = f)),
            e
          );
        };
      });
    var kb = /^(?:input|select|textarea|button)$/i,
      lb = /^(?:a|area)$/i;
    fa.fn.extend({
      prop: function (a, b) {
        return xa(this, fa.prop, a, b, arguments.length > 1);
      },
      removeProp: function (a) {
        return this.each(function () {
          delete this[fa.propFix[a] || a];
        });
      },
    }),
      fa.extend({
        prop: function (a, b, c) {
          var d,
            e,
            f = a.nodeType;
          if (3 !== f && 8 !== f && 2 !== f)
            return (
              (1 === f && fa.isXMLDoc(a)) ||
                ((b = fa.propFix[b] || b), (e = fa.propHooks[b])),
              void 0 !== c
                ? e && "set" in e && void 0 !== (d = e.set(a, c, b))
                  ? d
                  : (a[b] = c)
                : e && "get" in e && null !== (d = e.get(a, b))
                ? d
                : a[b]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (a) {
              var b = fa.find.attr(a, "tabindex");
              return b
                ? parseInt(b, 10)
                : kb.test(a.nodeName) || (lb.test(a.nodeName) && a.href)
                ? 0
                : -1;
            },
          },
        },
        propFix: { for: "htmlFor", class: "className" },
      }),
      da.optSelected ||
        (fa.propHooks.selected = {
          get: function (a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null;
          },
        }),
      fa.each(
        [
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable",
        ],
        function () {
          fa.propFix[this.toLowerCase()] = this;
        }
      );
    var mb = /[\t\r\n\f]/g;
    fa.fn.extend({
      addClass: function (a) {
        var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;
        if (fa.isFunction(a))
          return this.each(function (b) {
            fa(this).addClass(a.call(this, b, O(this)));
          });
        if ("string" == typeof a && a)
          for (b = a.match(va) || []; (c = this[i++]); )
            if (
              ((e = O(c)),
              (d = 1 === c.nodeType && (" " + e + " ").replace(mb, " ")))
            ) {
              for (g = 0; (f = b[g++]); )
                d.indexOf(" " + f + " ") < 0 && (d += f + " ");
              (h = fa.trim(d)), e !== h && c.setAttribute("class", h);
            }
        return this;
      },
      removeClass: function (a) {
        var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;
        if (fa.isFunction(a))
          return this.each(function (b) {
            fa(this).removeClass(a.call(this, b, O(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ("string" == typeof a && a)
          for (b = a.match(va) || []; (c = this[i++]); )
            if (
              ((e = O(c)),
              (d = 1 === c.nodeType && (" " + e + " ").replace(mb, " ")))
            ) {
              for (g = 0; (f = b[g++]); )
                for (; d.indexOf(" " + f + " ") > -1; )
                  d = d.replace(" " + f + " ", " ");
              (h = fa.trim(d)), e !== h && c.setAttribute("class", h);
            }
        return this;
      },
      toggleClass: function (a, b) {
        var c = typeof a;
        return "boolean" == typeof b && "string" === c
          ? b
            ? this.addClass(a)
            : this.removeClass(a)
          : fa.isFunction(a)
          ? this.each(function (c) {
              fa(this).toggleClass(a.call(this, c, O(this), b), b);
            })
          : this.each(function () {
              var b, d, e, f;
              if ("string" === c)
                for (d = 0, e = fa(this), f = a.match(va) || []; (b = f[d++]); )
                  e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
              else
                (void 0 === a || "boolean" === c) &&
                  ((b = O(this)),
                  b && za.set(this, "__className__", b),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      b || a === !1 ? "" : za.get(this, "__className__") || ""
                    ));
            });
      },
      hasClass: function (a) {
        var b,
          c,
          d = 0;
        for (b = " " + a + " "; (c = this[d++]); )
          if (
            1 === c.nodeType &&
            (" " + O(c) + " ").replace(mb, " ").indexOf(b) > -1
          )
            return !0;
        return !1;
      },
    });
    var nb = /\r/g;
    fa.fn.extend({
      val: function (a) {
        var b,
          c,
          d,
          e = this[0];
        {
          if (arguments.length)
            return (
              (d = fa.isFunction(a)),
              this.each(function (c) {
                var e;
                1 === this.nodeType &&
                  ((e = d ? a.call(this, c, fa(this).val()) : a),
                  null == e
                    ? (e = "")
                    : "number" == typeof e
                    ? (e += "")
                    : fa.isArray(e) &&
                      (e = fa.map(e, function (a) {
                        return null == a ? "" : a + "";
                      })),
                  (b =
                    fa.valHooks[this.type] ||
                    fa.valHooks[this.nodeName.toLowerCase()]),
                  (b && "set" in b && void 0 !== b.set(this, e, "value")) ||
                    (this.value = e));
              })
            );
          if (e)
            return (
              (b =
                fa.valHooks[e.type] || fa.valHooks[e.nodeName.toLowerCase()]),
              b && "get" in b && void 0 !== (c = b.get(e, "value"))
                ? c
                : ((c = e.value),
                  "string" == typeof c ? c.replace(nb, "") : null == c ? "" : c)
            );
        }
      },
    }),
      fa.extend({
        valHooks: {
          option: {
            get: function (a) {
              return fa.trim(a.value);
            },
          },
          select: {
            get: function (a) {
              for (
                var b,
                  c,
                  d = a.options,
                  e = a.selectedIndex,
                  f = "select-one" === a.type || 0 > e,
                  g = f ? null : [],
                  h = f ? e + 1 : d.length,
                  i = 0 > e ? h : f ? e : 0;
                h > i;
                i++
              )
                if (
                  ((c = d[i]),
                  (c.selected || i === e) &&
                    (da.optDisabled
                      ? !c.disabled
                      : null === c.getAttribute("disabled")) &&
                    (!c.parentNode.disabled ||
                      !fa.nodeName(c.parentNode, "optgroup")))
                ) {
                  if (((b = fa(c).val()), f)) return b;
                  g.push(b);
                }
              return g;
            },
            set: function (a, b) {
              for (
                var c, d, e = a.options, f = fa.makeArray(b), g = e.length;
                g--;

              )
                (d = e[g]),
                  (d.selected =
                    fa.inArray(fa.valHooks.option.get(d), f) > -1) && (c = !0);
              return c || (a.selectedIndex = -1), f;
            },
          },
        },
      }),
      fa.each(["radio", "checkbox"], function () {
        (fa.valHooks[this] = {
          set: function (a, b) {
            return fa.isArray(b)
              ? (a.checked = fa.inArray(fa(a).val(), b) > -1)
              : void 0;
          },
        }),
          da.checkOn ||
            (fa.valHooks[this].get = function (a) {
              return null === a.getAttribute("value") ? "on" : a.value;
            });
      });
    var ob = /^(?:focusinfocus|focusoutblur)$/;
    fa.extend(fa.event, {
      trigger: function (b, c, d, e) {
        var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m = [d || X],
          n = ca.call(b, "type") ? b.type : b,
          o = ca.call(b, "namespace") ? b.namespace.split(".") : [];
        if (
          ((g = h = d = d || X),
          3 !== d.nodeType &&
            8 !== d.nodeType &&
            !ob.test(n + fa.event.triggered) &&
            (n.indexOf(".") > -1 &&
              ((o = n.split(".")), (n = o.shift()), o.sort()),
            (j = n.indexOf(":") < 0 && "on" + n),
            (b = b[fa.expando]
              ? b
              : new fa.Event(n, "object" == typeof b && b)),
            (b.isTrigger = e ? 2 : 3),
            (b.namespace = o.join(".")),
            (b.rnamespace = b.namespace
              ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (b.result = void 0),
            b.target || (b.target = d),
            (c = null == c ? [b] : fa.makeArray(c, [b])),
            (l = fa.event.special[n] || {}),
            e || !l.trigger || l.trigger.apply(d, c) !== !1))
        ) {
          if (!e && !l.noBubble && !fa.isWindow(d)) {
            for (
              i = l.delegateType || n, ob.test(i + n) || (g = g.parentNode);
              g;
              g = g.parentNode
            )
              m.push(g), (h = g);
            h === (d.ownerDocument || X) &&
              m.push(h.defaultView || h.parentWindow || a);
          }
          for (f = 0; (g = m[f++]) && !b.isPropagationStopped(); )
            (b.type = f > 1 ? i : l.bindType || n),
              (k = (za.get(g, "events") || {})[b.type] && za.get(g, "handle")),
              k && k.apply(g, c),
              (k = j && g[j]),
              k &&
                k.apply &&
                ya(g) &&
                ((b.result = k.apply(g, c)),
                b.result === !1 && b.preventDefault());
          return (
            (b.type = n),
            e ||
              b.isDefaultPrevented() ||
              (l._default && l._default.apply(m.pop(), c) !== !1) ||
              !ya(d) ||
              (j &&
                fa.isFunction(d[n]) &&
                !fa.isWindow(d) &&
                ((h = d[j]),
                h && (d[j] = null),
                (fa.event.triggered = n),
                d[n](),
                (fa.event.triggered = void 0),
                h && (d[j] = h))),
            b.result
          );
        }
      },
      simulate: function (a, b, c) {
        var d = fa.extend(new fa.Event(), c, { type: a, isSimulated: !0 });
        fa.event.trigger(d, null, b),
          d.isDefaultPrevented() && c.preventDefault();
      },
    }),
      fa.fn.extend({
        trigger: function (a, b) {
          return this.each(function () {
            fa.event.trigger(a, b, this);
          });
        },
        triggerHandler: function (a, b) {
          var c = this[0];
          return c ? fa.event.trigger(a, b, c, !0) : void 0;
        },
      }),
      fa.each(
        "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
          " "
        ),
        function (a, b) {
          fa.fn[b] = function (a, c) {
            return arguments.length > 0
              ? this.on(b, null, a, c)
              : this.trigger(b);
          };
        }
      ),
      fa.fn.extend({
        hover: function (a, b) {
          return this.mouseenter(a).mouseleave(b || a);
        },
      }),
      (da.focusin = "onfocusin" in a),
      da.focusin ||
        fa.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
          var c = function (a) {
            fa.event.simulate(b, a.target, fa.event.fix(a));
          };
          fa.event.special[b] = {
            setup: function () {
              var d = this.ownerDocument || this,
                e = za.access(d, b);
              e || d.addEventListener(a, c, !0), za.access(d, b, (e || 0) + 1);
            },
            teardown: function () {
              var d = this.ownerDocument || this,
                e = za.access(d, b) - 1;
              e
                ? za.access(d, b, e)
                : (d.removeEventListener(a, c, !0), za.remove(d, b));
            },
          };
        });
    var pb = a.location,
      qb = fa.now(),
      rb = /\?/;
    (fa.parseJSON = function (a) {
      return JSON.parse(a + "");
    }),
      (fa.parseXML = function (b) {
        var c;
        if (!b || "string" != typeof b) return null;
        try {
          c = new a.DOMParser().parseFromString(b, "text/xml");
        } catch (d) {
          c = void 0;
        }
        return (
          (!c || c.getElementsByTagName("parsererror").length) &&
            fa.error("Invalid XML: " + b),
          c
        );
      });
    var sb = /#.*$/,
      tb = /([?&])_=[^&]*/,
      ub = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      vb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      wb = /^(?:GET|HEAD)$/,
      xb = /^\/\//,
      yb = {},
      zb = {},
      Ab = "*/".concat("*"),
      Bb = X.createElement("a");
    (Bb.href = pb.href),
      fa.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: pb.href,
          type: "GET",
          isLocal: vb.test(pb.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": Ab,
            "text": "text/plain",
            "html": "text/html",
            "xml": "application/xml, text/xml",
            "json": "application/json, text/javascript",
          },
          contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON",
          },
          converters: {
            "* text": String,
            "text html": !0,
            "text json": fa.parseJSON,
            "text xml": fa.parseXML,
          },
          flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (a, b) {
          return b ? R(R(a, fa.ajaxSettings), b) : R(fa.ajaxSettings, a);
        },
        ajaxPrefilter: P(yb),
        ajaxTransport: P(zb),
        ajax: function (b, c) {
          function d(b, c, d, h) {
            var j,
              l,
              s,
              t,
              v,
              x = c;
            2 !== u &&
              ((u = 2),
              i && a.clearTimeout(i),
              (e = void 0),
              (g = h || ""),
              (w.readyState = b > 0 ? 4 : 0),
              (j = (b >= 200 && 300 > b) || 304 === b),
              d && (t = S(m, w, d)),
              (t = T(m, t, w, j)),
              j
                ? (m.ifModified &&
                    ((v = w.getResponseHeader("Last-Modified")),
                    v && (fa.lastModified[f] = v),
                    (v = w.getResponseHeader("etag")),
                    v && (fa.etag[f] = v)),
                  204 === b || "HEAD" === m.type
                    ? (x = "nocontent")
                    : 304 === b
                    ? (x = "notmodified")
                    : ((x = t.state), (l = t.data), (s = t.error), (j = !s)))
                : ((s = x), (b || !x) && ((x = "error"), 0 > b && (b = 0))),
              (w.status = b),
              (w.statusText = (c || x) + ""),
              j ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]),
              w.statusCode(r),
              (r = void 0),
              k &&
                o.trigger(j ? "ajaxSuccess" : "ajaxError", [w, m, j ? l : s]),
              q.fireWith(n, [w, x]),
              k &&
                (o.trigger("ajaxComplete", [w, m]),
                --fa.active || fa.event.trigger("ajaxStop")));
          }
          "object" == typeof b && ((c = b), (b = void 0)), (c = c || {});
          var e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m = fa.ajaxSetup({}, c),
            n = m.context || m,
            o = m.context && (n.nodeType || n.jquery) ? fa(n) : fa.event,
            p = fa.Deferred(),
            q = fa.Callbacks("once memory"),
            r = m.statusCode || {},
            s = {},
            t = {},
            u = 0,
            v = "canceled",
            w = {
              readyState: 0,
              getResponseHeader: function (a) {
                var b;
                if (2 === u) {
                  if (!h)
                    for (h = {}; (b = ub.exec(g)); )
                      h[b[1].toLowerCase()] = b[2];
                  b = h[a.toLowerCase()];
                }
                return null == b ? null : b;
              },
              getAllResponseHeaders: function () {
                return 2 === u ? g : null;
              },
              setRequestHeader: function (a, b) {
                var c = a.toLowerCase();
                return u || ((a = t[c] = t[c] || a), (s[a] = b)), this;
              },
              overrideMimeType: function (a) {
                return u || (m.mimeType = a), this;
              },
              statusCode: function (a) {
                var b;
                if (a)
                  if (2 > u) for (b in a) r[b] = [r[b], a[b]];
                  else w.always(a[w.status]);
                return this;
              },
              abort: function (a) {
                var b = a || v;
                return e && e.abort(b), d(0, b), this;
              },
            };
          if (
            ((p.promise(w).complete = q.add),
            (w.success = w.done),
            (w.error = w.fail),
            (m.url = ((b || m.url || pb.href) + "")
              .replace(sb, "")
              .replace(xb, pb.protocol + "//")),
            (m.type = c.method || c.type || m.method || m.type),
            (m.dataTypes = fa
              .trim(m.dataType || "*")
              .toLowerCase()
              .match(va) || [""]),
            null == m.crossDomain)
          ) {
            j = X.createElement("a");
            try {
              (j.href = m.url),
                (j.href = j.href),
                (m.crossDomain =
                  Bb.protocol + "//" + Bb.host != j.protocol + "//" + j.host);
            } catch (x) {
              m.crossDomain = !0;
            }
          }
          if (
            (m.data &&
              m.processData &&
              "string" != typeof m.data &&
              (m.data = fa.param(m.data, m.traditional)),
            Q(yb, m, c, w),
            2 === u)
          )
            return w;
          (k = fa.event && m.global),
            k && 0 === fa.active++ && fa.event.trigger("ajaxStart"),
            (m.type = m.type.toUpperCase()),
            (m.hasContent = !wb.test(m.type)),
            (f = m.url),
            m.hasContent ||
              (m.data &&
                ((f = m.url += (rb.test(f) ? "&" : "?") + m.data),
                delete m.data),
              m.cache === !1 &&
                (m.url = tb.test(f)
                  ? f.replace(tb, "$1_=" + qb++)
                  : f + (rb.test(f) ? "&" : "?") + "_=" + qb++)),
            m.ifModified &&
              (fa.lastModified[f] &&
                w.setRequestHeader("If-Modified-Since", fa.lastModified[f]),
              fa.etag[f] && w.setRequestHeader("If-None-Match", fa.etag[f])),
            ((m.data && m.hasContent && m.contentType !== !1) ||
              c.contentType) &&
              w.setRequestHeader("Content-Type", m.contentType),
            w.setRequestHeader(
              "Accept",
              m.dataTypes[0] && m.accepts[m.dataTypes[0]]
                ? m.accepts[m.dataTypes[0]] +
                    ("*" !== m.dataTypes[0] ? ", " + Ab + "; q=0.01" : "")
                : m.accepts["*"]
            );
          for (l in m.headers) w.setRequestHeader(l, m.headers[l]);
          if (m.beforeSend && (m.beforeSend.call(n, w, m) === !1 || 2 === u))
            return w.abort();
          v = "abort";
          for (l in { success: 1, error: 1, complete: 1 }) w[l](m[l]);
          if ((e = Q(zb, m, c, w))) {
            if (
              ((w.readyState = 1), k && o.trigger("ajaxSend", [w, m]), 2 === u)
            )
              return w;
            m.async &&
              m.timeout > 0 &&
              (i = a.setTimeout(function () {
                w.abort("timeout");
              }, m.timeout));
            try {
              (u = 1), e.send(s, d);
            } catch (x) {
              if (!(2 > u)) throw x;
              d(-1, x);
            }
          } else d(-1, "No Transport");
          return w;
        },
        getJSON: function (a, b, c) {
          return fa.get(a, b, c, "json");
        },
        getScript: function (a, b) {
          return fa.get(a, void 0, b, "script");
        },
      }),
      fa.each(["get", "post"], function (a, b) {
        fa[b] = function (a, c, d, e) {
          return (
            fa.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
            fa.ajax(
              fa.extend(
                { url: a, type: b, dataType: e, data: c, success: d },
                fa.isPlainObject(a) && a
              )
            )
          );
        };
      }),
      (fa._evalUrl = function (a) {
        return fa.ajax({
          url: a,
          type: "GET",
          dataType: "script",
          async: !1,
          global: !1,
          throws: !0,
        });
      }),
      fa.fn.extend({
        wrapAll: function (a) {
          var b;
          return fa.isFunction(a)
            ? this.each(function (b) {
                fa(this).wrapAll(a.call(this, b));
              })
            : (this[0] &&
                ((b = fa(a, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && b.insertBefore(this[0]),
                b
                  .map(function () {
                    for (var a = this; a.firstElementChild; )
                      a = a.firstElementChild;
                    return a;
                  })
                  .append(this)),
              this);
        },
        wrapInner: function (a) {
          return fa.isFunction(a)
            ? this.each(function (b) {
                fa(this).wrapInner(a.call(this, b));
              })
            : this.each(function () {
                var b = fa(this),
                  c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
              });
        },
        wrap: function (a) {
          var b = fa.isFunction(a);
          return this.each(function (c) {
            fa(this).wrapAll(b ? a.call(this, c) : a);
          });
        },
        unwrap: function () {
          return this.parent()
            .each(function () {
              fa.nodeName(this, "body") ||
                fa(this).replaceWith(this.childNodes);
            })
            .end();
        },
      }),
      (fa.expr.filters.hidden = function (a) {
        return !fa.expr.filters.visible(a);
      }),
      (fa.expr.filters.visible = function (a) {
        return (
          a.offsetWidth > 0 ||
          a.offsetHeight > 0 ||
          a.getClientRects().length > 0
        );
      });
    var Cb = /%20/g,
      Db = /\[\]$/,
      Eb = /\r?\n/g,
      Fb = /^(?:submit|button|image|reset|file)$/i,
      Gb = /^(?:input|select|textarea|keygen)/i;
    (fa.param = function (a, b) {
      var c,
        d = [],
        e = function (a, b) {
          (b = fa.isFunction(b) ? b() : null == b ? "" : b),
            (d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b));
        };
      if (
        (void 0 === b && (b = fa.ajaxSettings && fa.ajaxSettings.traditional),
        fa.isArray(a) || (a.jquery && !fa.isPlainObject(a)))
      )
        fa.each(a, function () {
          e(this.name, this.value);
        });
      else for (c in a) U(c, a[c], b, e);
      return d.join("&").replace(Cb, "+");
    }),
      fa.fn.extend({
        serialize: function () {
          return fa.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var a = fa.prop(this, "elements");
            return a ? fa.makeArray(a) : this;
          })
            .filter(function () {
              var a = this.type;
              return (
                this.name &&
                !fa(this).is(":disabled") &&
                Gb.test(this.nodeName) &&
                !Fb.test(a) &&
                (this.checked || !Ha.test(a))
              );
            })
            .map(function (a, b) {
              var c = fa(this).val();
              return null == c
                ? null
                : fa.isArray(c)
                ? fa.map(c, function (a) {
                    return { name: b.name, value: a.replace(Eb, "\r\n") };
                  })
                : { name: b.name, value: c.replace(Eb, "\r\n") };
            })
            .get();
        },
      }),
      (fa.ajaxSettings.xhr = function () {
        try {
          return new a.XMLHttpRequest();
        } catch (b) {}
      });
    var Hb = { 0: 200, 1223: 204 },
      Ib = fa.ajaxSettings.xhr();
    (da.cors = !!Ib && "withCredentials" in Ib),
      (da.ajax = Ib = !!Ib),
      fa.ajaxTransport(function (b) {
        var c, d;
        return da.cors || (Ib && !b.crossDomain)
          ? {
              send: function (e, f) {
                var g,
                  h = b.xhr();
                if (
                  (h.open(b.type, b.url, b.async, b.username, b.password),
                  b.xhrFields)
                )
                  for (g in b.xhrFields) h[g] = b.xhrFields[g];
                b.mimeType &&
                  h.overrideMimeType &&
                  h.overrideMimeType(b.mimeType),
                  b.crossDomain ||
                    e["X-Requested-With"] ||
                    (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e) h.setRequestHeader(g, e[g]);
                (c = function (a) {
                  return function () {
                    c &&
                      ((c =
                        d =
                        h.onload =
                        h.onerror =
                        h.onabort =
                        h.onreadystatechange =
                          null),
                      "abort" === a
                        ? h.abort()
                        : "error" === a
                        ? "number" != typeof h.status
                          ? f(0, "error")
                          : f(h.status, h.statusText)
                        : f(
                            Hb[h.status] || h.status,
                            h.statusText,
                            "text" !== (h.responseType || "text") ||
                              "string" != typeof h.responseText
                              ? { binary: h.response }
                              : { text: h.responseText },
                            h.getAllResponseHeaders()
                          ));
                  };
                }),
                  (h.onload = c()),
                  (d = h.onerror = c("error")),
                  void 0 !== h.onabort
                    ? (h.onabort = d)
                    : (h.onreadystatechange = function () {
                        4 === h.readyState &&
                          a.setTimeout(function () {
                            c && d();
                          });
                      }),
                  (c = c("abort"));
                try {
                  h.send((b.hasContent && b.data) || null);
                } catch (i) {
                  if (c) throw i;
                }
              },
              abort: function () {
                c && c();
              },
            }
          : void 0;
      }),
      fa.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: { script: /\b(?:java|ecma)script\b/ },
        converters: {
          "text script": function (a) {
            return fa.globalEval(a), a;
          },
        },
      }),
      fa.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
      }),
      fa.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
          var b, c;
          return {
            send: function (d, e) {
              (b = fa("<script>")
                .prop({ charset: a.scriptCharset, src: a.url })
                .on(
                  "load error",
                  (c = function (a) {
                    b.remove(),
                      (c = null),
                      a && e("error" === a.type ? 404 : 200, a.type);
                  })
                )),
                X.head.appendChild(b[0]);
            },
            abort: function () {
              c && c();
            },
          };
        }
      });
    var Jb = [],
      Kb = /(=)\?(?=&|$)|\?\?/;
    fa.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var a = Jb.pop() || fa.expando + "_" + qb++;
        return (this[a] = !0), a;
      },
    }),
      fa.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e,
          f,
          g,
          h =
            b.jsonp !== !1 &&
            (Kb.test(b.url)
              ? "url"
              : "string" == typeof b.data &&
                0 ===
                  (b.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                Kb.test(b.data) &&
                "data");
        return h || "jsonp" === b.dataTypes[0]
          ? ((e = b.jsonpCallback =
              fa.isFunction(b.jsonpCallback)
                ? b.jsonpCallback()
                : b.jsonpCallback),
            h
              ? (b[h] = b[h].replace(Kb, "$1" + e))
              : b.jsonp !== !1 &&
                (b.url += (rb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
            (b.converters["script json"] = function () {
              return g || fa.error(e + " was not called"), g[0];
            }),
            (b.dataTypes[0] = "json"),
            (f = a[e]),
            (a[e] = function () {
              g = arguments;
            }),
            d.always(function () {
              void 0 === f ? fa(a).removeProp(e) : (a[e] = f),
                b[e] && ((b.jsonpCallback = c.jsonpCallback), Jb.push(e)),
                g && fa.isFunction(f) && f(g[0]),
                (g = f = void 0);
            }),
            "script")
          : void 0;
      }),
      (da.createHTMLDocument = (function () {
        var a = X.implementation.createHTMLDocument("").body;
        return (
          (a.innerHTML = "<form></form><form></form>"),
          2 === a.childNodes.length
        );
      })()),
      (fa.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && ((c = b), (b = !1)),
          (b =
            b ||
            (da.createHTMLDocument
              ? X.implementation.createHTMLDocument("")
              : X));
        var d = oa.exec(a),
          e = !c && [];
        return d
          ? [b.createElement(d[1])]
          : ((d = m([a], b, e)),
            e && e.length && fa(e).remove(),
            fa.merge([], d.childNodes));
      });
    var Lb = fa.fn.load;
    (fa.fn.load = function (a, b, c) {
      if ("string" != typeof a && Lb) return Lb.apply(this, arguments);
      var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");
      return (
        h > -1 && ((d = fa.trim(a.slice(h))), (a = a.slice(0, h))),
        fa.isFunction(b)
          ? ((c = b), (b = void 0))
          : b && "object" == typeof b && (e = "POST"),
        g.length > 0 &&
          fa
            .ajax({ url: a, type: e || "GET", dataType: "html", data: b })
            .done(function (a) {
              (f = arguments),
                g.html(d ? fa("<div>").append(fa.parseHTML(a)).find(d) : a);
            })
            .always(
              c &&
                function (a, b) {
                  g.each(function () {
                    c.apply(g, f || [a.responseText, b, a]);
                  });
                }
            ),
        this
      );
    }),
      fa.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend",
        ],
        function (a, b) {
          fa.fn[b] = function (a) {
            return this.on(b, a);
          };
        }
      ),
      (fa.expr.filters.animated = function (a) {
        return fa.grep(fa.timers, function (b) {
          return a === b.elem;
        }).length;
      }),
      (fa.offset = {
        setOffset: function (a, b, c) {
          var d,
            e,
            f,
            g,
            h,
            i,
            j,
            k = fa.css(a, "position"),
            l = fa(a),
            m = {};
          "static" === k && (a.style.position = "relative"),
            (h = l.offset()),
            (f = fa.css(a, "top")),
            (i = fa.css(a, "left")),
            (j =
              ("absolute" === k || "fixed" === k) &&
              (f + i).indexOf("auto") > -1),
            j
              ? ((d = l.position()), (g = d.top), (e = d.left))
              : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
            fa.isFunction(b) && (b = b.call(a, c, fa.extend({}, h))),
            null != b.top && (m.top = b.top - h.top + g),
            null != b.left && (m.left = b.left - h.left + e),
            "using" in b ? b.using.call(a, m) : l.css(m);
        },
      }),
      fa.fn.extend({
        offset: function (a) {
          if (arguments.length)
            return void 0 === a
              ? this
              : this.each(function (b) {
                  fa.offset.setOffset(this, a, b);
                });
          var b,
            c,
            d = this[0],
            e = { top: 0, left: 0 },
            f = d && d.ownerDocument;
          if (f)
            return (
              (b = f.documentElement),
              fa.contains(b, d)
                ? ((e = d.getBoundingClientRect()),
                  (c = V(f)),
                  {
                    top: e.top + c.pageYOffset - b.clientTop,
                    left: e.left + c.pageXOffset - b.clientLeft,
                  })
                : e
            );
        },
        position: function () {
          if (this[0]) {
            var a,
              b,
              c = this[0],
              d = { top: 0, left: 0 };
            return (
              "fixed" === fa.css(c, "position")
                ? (b = c.getBoundingClientRect())
                : ((a = this.offsetParent()),
                  (b = this.offset()),
                  fa.nodeName(a[0], "html") || (d = a.offset()),
                  (d.top += fa.css(a[0], "borderTopWidth", !0)),
                  (d.left += fa.css(a[0], "borderLeftWidth", !0))),
              {
                top: b.top - d.top - fa.css(c, "marginTop", !0),
                left: b.left - d.left - fa.css(c, "marginLeft", !0),
              }
            );
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (
              var a = this.offsetParent;
              a && "static" === fa.css(a, "position");

            )
              a = a.offsetParent;
            return a || $a;
          });
        },
      }),
      fa.each(
        { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
        function (a, b) {
          var c = "pageYOffset" === b;
          fa.fn[a] = function (d) {
            return xa(
              this,
              function (a, d, e) {
                var f = V(a);
                return void 0 === e
                  ? f
                    ? f[b]
                    : a[d]
                  : void (f
                      ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset)
                      : (a[d] = e));
              },
              a,
              d,
              arguments.length
            );
          };
        }
      ),
      fa.each(["top", "left"], function (a, b) {
        fa.cssHooks[b] = B(da.pixelPosition, function (a, c) {
          return c
            ? ((c = A(a, b)), Xa.test(c) ? fa(a).position()[b] + "px" : c)
            : void 0;
        });
      }),
      fa.each({ Height: "height", Width: "width" }, function (a, b) {
        fa.each(
          { "padding": "inner" + a, "content": b, "": "outer" + a },
          function (c, d) {
            fa.fn[d] = function (d, e) {
              var f = arguments.length && (c || "boolean" != typeof d),
                g = c || (d === !0 || e === !0 ? "margin" : "border");
              return xa(
                this,
                function (b, c, d) {
                  var e;
                  return fa.isWindow(b)
                    ? b.document.documentElement["client" + a]
                    : 9 === b.nodeType
                    ? ((e = b.documentElement),
                      Math.max(
                        b.body["scroll" + a],
                        e["scroll" + a],
                        b.body["offset" + a],
                        e["offset" + a],
                        e["client" + a]
                      ))
                    : void 0 === d
                    ? fa.css(b, c, g)
                    : fa.style(b, c, d, g);
                },
                b,
                f ? d : void 0,
                f,
                null
              );
            };
          }
        );
      }),
      fa.fn.extend({
        bind: function (a, b, c) {
          return this.on(a, null, b, c);
        },
        unbind: function (a, b) {
          return this.off(a, null, b);
        },
        delegate: function (a, b, c, d) {
          return this.on(b, a, c, d);
        },
        undelegate: function (a, b, c) {
          return 1 === arguments.length
            ? this.off(a, "**")
            : this.off(b, a || "**", c);
        },
        size: function () {
          return this.length;
        },
      }),
      (fa.fn.andSelf = fa.fn.addBack),
      "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
          return fa;
        });
    var Mb = a.jQuery,
      Nb = a.$;
    return (
      (fa.noConflict = function (b) {
        return (
          a.$ === fa && (a.$ = Nb), b && a.jQuery === fa && (a.jQuery = Mb), fa
        );
      }),
      b || (a.jQuery = a.$ = fa),
      fa
    );
  }),
  (function (a, b, c) {
    "use strict";
    function d(a, b) {
      return (
        (b = b || Error),
        function () {
          var c,
            d,
            e = 2,
            f = arguments,
            g = f[0],
            h = "[" + (a ? a + ":" : "") + g + "] ",
            i = f[1];
          for (
            h += i.replace(/\{\d+\}/g, function (a) {
              var b = +a.slice(1, -1),
                c = b + e;
              return c < f.length ? ua(f[c]) : a;
            }),
              h +=
                "\nhttp://errors.angularjs.org/1.5.0/" + (a ? a + "/" : "") + g,
              d = e,
              c = "?";
            d < f.length;
            d++, c = "&"
          )
            h += c + "p" + (d - e) + "=" + encodeURIComponent(ua(f[d]));
          return new b(h);
        }
      );
    }
    function e(a) {
      if (null == a || C(a)) return !1;
      if (Td(a) || x(a) || (Id && a instanceof Id)) return !0;
      var b = "length" in Object(a) && a.length;
      return (
        y(b) &&
        ((b >= 0 && (b - 1 in a || a instanceof Array)) ||
          "function" == typeof a.item)
      );
    }
    function f(a, b, c) {
      var d, g;
      if (a)
        if (A(a))
          for (d in a)
            "prototype" == d ||
              "length" == d ||
              "name" == d ||
              (a.hasOwnProperty && !a.hasOwnProperty(d)) ||
              b.call(c, a[d], d, a);
        else if (Td(a) || e(a)) {
          var h = "object" != typeof a;
          for (d = 0, g = a.length; g > d; d++)
            (h || d in a) && b.call(c, a[d], d, a);
        } else if (a.forEach && a.forEach !== f) a.forEach(b, c, a);
        else if (w(a)) for (d in a) b.call(c, a[d], d, a);
        else if ("function" == typeof a.hasOwnProperty)
          for (d in a) a.hasOwnProperty(d) && b.call(c, a[d], d, a);
        else for (d in a) Cd.call(a, d) && b.call(c, a[d], d, a);
      return a;
    }
    function g(a, b, c) {
      for (var d = Object.keys(a).sort(), e = 0; e < d.length; e++)
        b.call(c, a[d[e]], d[e]);
      return d;
    }
    function h(a) {
      return function (b, c) {
        a(c, b);
      };
    }
    function i() {
      return ++Sd;
    }
    function j(a, b) {
      b ? (a.$$hashKey = b) : delete a.$$hashKey;
    }
    function k(a, b, c) {
      for (var d = a.$$hashKey, e = 0, f = b.length; f > e; ++e) {
        var g = b[e];
        if (v(g) || A(g))
          for (var h = Object.keys(g), i = 0, l = h.length; l > i; i++) {
            var m = h[i],
              n = g[m];
            c && v(n)
              ? z(n)
                ? (a[m] = new Date(n.valueOf()))
                : B(n)
                ? (a[m] = new RegExp(n))
                : n.nodeName
                ? (a[m] = n.cloneNode(!0))
                : L(n)
                ? (a[m] = n.clone())
                : (v(a[m]) || (a[m] = Td(n) ? [] : {}), k(a[m], [n], !0))
              : (a[m] = n);
          }
      }
      return j(a, d), a;
    }
    function l(a) {
      return k(a, Ld.call(arguments, 1), !1);
    }
    function m(a) {
      return k(a, Ld.call(arguments, 1), !0);
    }
    function n(a) {
      return parseInt(a, 10);
    }
    function o(a, b) {
      return l(Object.create(a), b);
    }
    function p() {}
    function q(a) {
      return a;
    }
    function r(a) {
      return function () {
        return a;
      };
    }
    function s(a) {
      return A(a.toString) && a.toString !== Od;
    }
    function t(a) {
      return "undefined" == typeof a;
    }
    function u(a) {
      return "undefined" != typeof a;
    }
    function v(a) {
      return null !== a && "object" == typeof a;
    }
    function w(a) {
      return null !== a && "object" == typeof a && !Pd(a);
    }
    function x(a) {
      return "string" == typeof a;
    }
    function y(a) {
      return "number" == typeof a;
    }
    function z(a) {
      return "[object Date]" === Od.call(a);
    }
    function A(a) {
      return "function" == typeof a;
    }
    function B(a) {
      return "[object RegExp]" === Od.call(a);
    }
    function C(a) {
      return a && a.window === a;
    }
    function D(a) {
      return a && a.$evalAsync && a.$watch;
    }
    function E(a) {
      return "[object File]" === Od.call(a);
    }
    function F(a) {
      return "[object FormData]" === Od.call(a);
    }
    function G(a) {
      return "[object Blob]" === Od.call(a);
    }
    function H(a) {
      return "boolean" == typeof a;
    }
    function I(a) {
      return a && A(a.then);
    }
    function J(a) {
      return a && y(a.length) && Ud.test(Od.call(a));
    }
    function K(a) {
      return "[object ArrayBuffer]" === Od.call(a);
    }
    function L(a) {
      return !(!a || !(a.nodeName || (a.prop && a.attr && a.find)));
    }
    function M(a) {
      var b,
        c = {},
        d = a.split(",");
      for (b = 0; b < d.length; b++) c[d[b]] = !0;
      return c;
    }
    function N(a) {
      return Dd(a.nodeName || (a[0] && a[0].nodeName));
    }
    function O(a, b) {
      var c = a.indexOf(b);
      return c >= 0 && a.splice(c, 1), c;
    }
    function P(a, b) {
      function d(a, b) {
        var c,
          d = b.$$hashKey;
        if (Td(a)) for (var f = 0, g = a.length; g > f; f++) b.push(e(a[f]));
        else if (w(a)) for (c in a) b[c] = e(a[c]);
        else if (a && "function" == typeof a.hasOwnProperty)
          for (c in a) a.hasOwnProperty(c) && (b[c] = e(a[c]));
        else for (c in a) Cd.call(a, c) && (b[c] = e(a[c]));
        return j(b, d), b;
      }
      function e(a) {
        if (!v(a)) return a;
        var b = h.indexOf(a);
        if (-1 !== b) return i[b];
        if (C(a) || D(a))
          throw Qd(
            "cpws",
            "Can't copy! Making copies of Window or Scope instances is not supported."
          );
        var e = !1,
          f = g(a);
        return (
          f === c && ((f = Td(a) ? [] : Object.create(Pd(a))), (e = !0)),
          h.push(a),
          i.push(f),
          e ? d(a, f) : f
        );
      }
      function g(a) {
        switch (Od.call(a)) {
          case "[object Int8Array]":
          case "[object Int16Array]":
          case "[object Int32Array]":
          case "[object Float32Array]":
          case "[object Float64Array]":
          case "[object Uint8Array]":
          case "[object Uint8ClampedArray]":
          case "[object Uint16Array]":
          case "[object Uint32Array]":
            return new a.constructor(e(a.buffer));
          case "[object ArrayBuffer]":
            if (!a.slice) {
              var b = new ArrayBuffer(a.byteLength);
              return new Uint8Array(b).set(new Uint8Array(a)), b;
            }
            return a.slice(0);
          case "[object Boolean]":
          case "[object Number]":
          case "[object String]":
          case "[object Date]":
            return new a.constructor(a.valueOf());
          case "[object RegExp]":
            var c = new RegExp(a.source, a.toString().match(/[^\/]*$/)[0]);
            return (c.lastIndex = a.lastIndex), c;
        }
        return A(a.cloneNode) ? a.cloneNode(!0) : void 0;
      }
      var h = [],
        i = [];
      if (b) {
        if (J(b) || K(b))
          throw Qd(
            "cpta",
            "Can't copy! TypedArray destination cannot be mutated."
          );
        if (a === b)
          throw Qd("cpi", "Can't copy! Source and destination are identical.");
        return (
          Td(b)
            ? (b.length = 0)
            : f(b, function (a, c) {
                "$$hashKey" !== c && delete b[c];
              }),
          h.push(a),
          i.push(b),
          d(a, b)
        );
      }
      return e(a);
    }
    function Q(a, b) {
      if (Td(a)) {
        b = b || [];
        for (var c = 0, d = a.length; d > c; c++) b[c] = a[c];
      } else if (v(a)) {
        b = b || {};
        for (var e in a)
          ("$" !== e.charAt(0) || "$" !== e.charAt(1)) && (b[e] = a[e]);
      }
      return b || a;
    }
    function R(a, b) {
      if (a === b) return !0;
      if (null === a || null === b) return !1;
      if (a !== a && b !== b) return !0;
      var c,
        d,
        e,
        f = typeof a,
        g = typeof b;
      if (f == g && "object" == f) {
        if (!Td(a)) {
          if (z(a)) return z(b) ? R(a.getTime(), b.getTime()) : !1;
          if (B(a)) return B(b) ? a.toString() == b.toString() : !1;
          if (D(a) || D(b) || C(a) || C(b) || Td(b) || z(b) || B(b)) return !1;
          e = ra();
          for (d in a)
            if ("$" !== d.charAt(0) && !A(a[d])) {
              if (!R(a[d], b[d])) return !1;
              e[d] = !0;
            }
          for (d in b)
            if (!(d in e) && "$" !== d.charAt(0) && u(b[d]) && !A(b[d]))
              return !1;
          return !0;
        }
        if (!Td(b)) return !1;
        if ((c = a.length) == b.length) {
          for (d = 0; c > d; d++) if (!R(a[d], b[d])) return !1;
          return !0;
        }
      }
      return !1;
    }
    function S(a, b, c) {
      return a.concat(Ld.call(b, c));
    }
    function T(a, b) {
      return Ld.call(a, b || 0);
    }
    function U(a, b) {
      var c = arguments.length > 2 ? T(arguments, 2) : [];
      return !A(b) || b instanceof RegExp
        ? b
        : c.length
        ? function () {
            return arguments.length
              ? b.apply(a, S(c, arguments, 0))
              : b.apply(a, c);
          }
        : function () {
            return arguments.length ? b.apply(a, arguments) : b.call(a);
          };
    }
    function V(a, d) {
      var e = d;
      return (
        "string" == typeof a && "$" === a.charAt(0) && "$" === a.charAt(1)
          ? (e = c)
          : C(d)
          ? (e = "$WINDOW")
          : d && b === d
          ? (e = "$DOCUMENT")
          : D(d) && (e = "$SCOPE"),
        e
      );
    }
    function W(a, b) {
      return t(a) ? c : (y(b) || (b = b ? 2 : null), JSON.stringify(a, V, b));
    }
    function X(a) {
      return x(a) ? JSON.parse(a) : a;
    }
    function Y(a, b) {
      a = a.replace(Zd, "");
      var c = Date.parse("Jan 01, 1970 00:00:00 " + a) / 6e4;
      return isNaN(c) ? b : c;
    }
    function Z(a, b) {
      return (a = new Date(a.getTime())), a.setMinutes(a.getMinutes() + b), a;
    }
    function $(a, b, c) {
      c = c ? -1 : 1;
      var d = a.getTimezoneOffset(),
        e = Y(b, d);
      return Z(a, c * (e - d));
    }
    function _(a) {
      a = Id(a).clone();
      try {
        a.empty();
      } catch (b) {}
      var c = Id("<div>").append(a).html();
      try {
        return a[0].nodeType === de
          ? Dd(c)
          : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
              return "<" + Dd(b);
            });
      } catch (b) {
        return Dd(c);
      }
    }
    function aa(a) {
      try {
        return decodeURIComponent(a);
      } catch (b) {}
    }
    function ba(a) {
      var b = {};
      return (
        f((a || "").split("&"), function (a) {
          var c, d, e;
          a &&
            ((d = a = a.replace(/\+/g, "%20")),
            (c = a.indexOf("=")),
            -1 !== c && ((d = a.substring(0, c)), (e = a.substring(c + 1))),
            (d = aa(d)),
            u(d) &&
              ((e = u(e) ? aa(e) : !0),
              Cd.call(b, d)
                ? Td(b[d])
                  ? b[d].push(e)
                  : (b[d] = [b[d], e])
                : (b[d] = e)));
        }),
        b
      );
    }
    function ca(a) {
      var b = [];
      return (
        f(a, function (a, c) {
          Td(a)
            ? f(a, function (a) {
                b.push(ea(c, !0) + (a === !0 ? "" : "=" + ea(a, !0)));
              })
            : b.push(ea(c, !0) + (a === !0 ? "" : "=" + ea(a, !0)));
        }),
        b.length ? b.join("&") : ""
      );
    }
    function da(a) {
      return ea(a, !0)
        .replace(/%26/gi, "&")
        .replace(/%3D/gi, "=")
        .replace(/%2B/gi, "+");
    }
    function ea(a, b) {
      return encodeURIComponent(a)
        .replace(/%40/gi, "@")
        .replace(/%3A/gi, ":")
        .replace(/%24/g, "$")
        .replace(/%2C/gi, ",")
        .replace(/%3B/gi, ";")
        .replace(/%20/g, b ? "%20" : "+");
    }
    function fa(a, b) {
      var c,
        d,
        e = $d.length;
      for (d = 0; e > d; ++d)
        if (((c = $d[d] + b), x((c = a.getAttribute(c))))) return c;
      return null;
    }
    function ga(a, b) {
      var c,
        d,
        e = {};
      f($d, function (b) {
        var e = b + "app";
        !c &&
          a.hasAttribute &&
          a.hasAttribute(e) &&
          ((c = a), (d = a.getAttribute(e)));
      }),
        f($d, function (b) {
          var e,
            f = b + "app";
          !c &&
            (e = a.querySelector("[" + f.replace(":", "\\:") + "]")) &&
            ((c = e), (d = e.getAttribute(f)));
        }),
        c &&
          ((e.strictDi = null !== fa(c, "strict-di")), b(c, d ? [d] : [], e));
    }
    function ha(c, d, e) {
      v(e) || (e = {});
      var g = { strictDi: !1 };
      e = l(g, e);
      var h = function () {
          if (((c = Id(c)), c.injector())) {
            var a = c[0] === b ? "document" : _(c);
            throw Qd(
              "btstrpd",
              "App Already Bootstrapped with this Element '{0}'",
              a.replace(/</, "&lt;").replace(/>/, "&gt;")
            );
          }
          (d = d || []),
            d.unshift([
              "$provide",
              function (a) {
                a.value("$rootElement", c);
              },
            ]),
            e.debugInfoEnabled &&
              d.push([
                "$compileProvider",
                function (a) {
                  a.debugInfoEnabled(!0);
                },
              ]),
            d.unshift("ng");
          var f = eb(d, e.strictDi);
          return (
            f.invoke([
              "$rootScope",
              "$rootElement",
              "$compile",
              "$injector",
              function (a, b, c, d) {
                a.$apply(function () {
                  b.data("$injector", d), c(b)(a);
                });
              },
            ]),
            f
          );
        },
        i = /^NG_ENABLE_DEBUG_INFO!/,
        j = /^NG_DEFER_BOOTSTRAP!/;
      return (
        a &&
          i.test(a.name) &&
          ((e.debugInfoEnabled = !0), (a.name = a.name.replace(i, ""))),
        a && !j.test(a.name)
          ? h()
          : ((a.name = a.name.replace(j, "")),
            (Rd.resumeBootstrap = function (a) {
              return (
                f(a, function (a) {
                  d.push(a);
                }),
                h()
              );
            }),
            void (
              A(Rd.resumeDeferredBootstrap) && Rd.resumeDeferredBootstrap()
            ))
      );
    }
    function ia() {
      (a.name = "NG_ENABLE_DEBUG_INFO!" + a.name), a.location.reload();
    }
    function ja(a) {
      var b = Rd.element(a).injector();
      if (!b)
        throw Qd(
          "test",
          "no injector found for element argument to getTestability"
        );
      return b.get("$$testability");
    }
    function ka(a, b) {
      return (
        (b = b || "_"),
        a.replace(_d, function (a, c) {
          return (c ? b : "") + a.toLowerCase();
        })
      );
    }
    function la() {
      var b;
      if (!ae) {
        var d = Yd();
        (Jd = t(d) ? a.jQuery : d ? a[d] : c),
          Jd && Jd.fn.on
            ? ((Id = Jd),
              l(Jd.fn, {
                scope: we.scope,
                isolateScope: we.isolateScope,
                controller: we.controller,
                injector: we.injector,
                inheritedData: we.inheritedData,
              }),
              (b = Jd.cleanData),
              (Jd.cleanData = function (a) {
                for (var c, d, e = 0; null != (d = a[e]); e++)
                  (c = Jd._data(d, "events")),
                    c && c.$destroy && Jd(d).triggerHandler("$destroy");
                b(a);
              }))
            : (Id = Fa),
          (Rd.element = Id),
          (ae = !0);
      }
    }
    function ma(a, b, c) {
      if (!a)
        throw Qd("areq", "Argument '{0}' is {1}", b || "?", c || "required");
      return a;
    }
    function na(a, b, c) {
      return (
        c && Td(a) && (a = a[a.length - 1]),
        ma(
          A(a),
          b,
          "not a function, got " +
            (a && "object" == typeof a
              ? a.constructor.name || "Object"
              : typeof a)
        ),
        a
      );
    }
    function oa(a, b) {
      if ("hasOwnProperty" === a)
        throw Qd("badname", "hasOwnProperty is not a valid {0} name", b);
    }
    function pa(a, b, c) {
      if (!b) return a;
      for (var d, e = b.split("."), f = a, g = e.length, h = 0; g > h; h++)
        (d = e[h]), a && (a = (f = a)[d]);
      return !c && A(a) ? U(f, a) : a;
    }
    function qa(a) {
      for (
        var b, c = a[0], d = a[a.length - 1], e = 1;
        c !== d && (c = c.nextSibling);
        e++
      )
        (b || a[e] !== c) && (b || (b = Id(Ld.call(a, 0, e))), b.push(c));
      return b || a;
    }
    function ra() {
      return Object.create(null);
    }
    function sa(a) {
      function b(a, b, c) {
        return a[b] || (a[b] = c());
      }
      var c = d("$injector"),
        e = d("ng"),
        f = b(a, "angular", Object);
      return (
        (f.$$minErr = f.$$minErr || d),
        b(f, "module", function () {
          var a = {};
          return function (d, f, g) {
            var h = function (a, b) {
              if ("hasOwnProperty" === a)
                throw e("badname", "hasOwnProperty is not a valid {0} name", b);
            };
            return (
              h(d, "module"),
              f && a.hasOwnProperty(d) && (a[d] = null),
              b(a, d, function () {
                function a(a, b, c, d) {
                  return (
                    d || (d = e),
                    function () {
                      return d[c || "push"]([a, b, arguments]), k;
                    }
                  );
                }
                function b(a, b) {
                  return function (c, f) {
                    return (
                      f && A(f) && (f.$$moduleName = d),
                      e.push([a, b, arguments]),
                      k
                    );
                  };
                }
                if (!f)
                  throw c(
                    "nomod",
                    "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.",
                    d
                  );
                var e = [],
                  h = [],
                  i = [],
                  j = a("$injector", "invoke", "push", h),
                  k = {
                    _invokeQueue: e,
                    _configBlocks: h,
                    _runBlocks: i,
                    requires: f,
                    name: d,
                    provider: b("$provide", "provider"),
                    factory: b("$provide", "factory"),
                    service: b("$provide", "service"),
                    value: a("$provide", "value"),
                    constant: a("$provide", "constant", "unshift"),
                    decorator: b("$provide", "decorator"),
                    animation: b("$animateProvider", "register"),
                    filter: b("$filterProvider", "register"),
                    controller: b("$controllerProvider", "register"),
                    directive: b("$compileProvider", "directive"),
                    component: b("$compileProvider", "component"),
                    config: j,
                    run: function (a) {
                      return i.push(a), this;
                    },
                  };
                return g && j(g), k;
              })
            );
          };
        })
      );
    }
    function ta(a) {
      var b = [];
      return JSON.stringify(a, function (a, c) {
        if (((c = V(a, c)), v(c))) {
          if (b.indexOf(c) >= 0) return "...";
          b.push(c);
        }
        return c;
      });
    }
    function ua(a) {
      return "function" == typeof a
        ? a.toString().replace(/ \{[\s\S]*$/, "")
        : t(a)
        ? "undefined"
        : "string" != typeof a
        ? ta(a)
        : a;
    }
    function va(b) {
      l(b, {
        bootstrap: ha,
        copy: P,
        extend: l,
        merge: m,
        equals: R,
        element: Id,
        forEach: f,
        injector: eb,
        noop: p,
        bind: U,
        toJson: W,
        fromJson: X,
        identity: q,
        isUndefined: t,
        isDefined: u,
        isString: x,
        isFunction: A,
        isObject: v,
        isNumber: y,
        isElement: L,
        isArray: Td,
        version: he,
        isDate: z,
        lowercase: Dd,
        uppercase: Ed,
        callbacks: { counter: 0 },
        getTestability: ja,
        $$minErr: d,
        $$csp: Xd,
        reloadWithDebugInfo: ia,
      }),
        (Kd = sa(a))(
          "ng",
          ["ngLocale"],
          [
            "$provide",
            function (a) {
              a.provider({ $$sanitizeUri: wc }),
                a
                  .provider("$compile", ob)
                  .directive({
                    a: Cf,
                    input: Tf,
                    textarea: Tf,
                    form: Hf,
                    script: Og,
                    select: Rg,
                    style: Tg,
                    option: Sg,
                    ngBind: Wf,
                    ngBindHtml: Yf,
                    ngBindTemplate: Xf,
                    ngClass: $f,
                    ngClassEven: ag,
                    ngClassOdd: _f,
                    ngCloak: bg,
                    ngController: cg,
                    ngForm: If,
                    ngHide: Hg,
                    ngIf: fg,
                    ngInclude: gg,
                    ngInit: ig,
                    ngNonBindable: yg,
                    ngPluralize: Cg,
                    ngRepeat: Dg,
                    ngShow: Gg,
                    ngStyle: Ig,
                    ngSwitch: Jg,
                    ngSwitchWhen: Kg,
                    ngSwitchDefault: Lg,
                    ngOptions: Bg,
                    ngTransclude: Ng,
                    ngModel: vg,
                    ngList: jg,
                    ngChange: Zf,
                    pattern: Vg,
                    ngPattern: Vg,
                    required: Ug,
                    ngRequired: Ug,
                    minlength: Xg,
                    ngMinlength: Xg,
                    maxlength: Wg,
                    ngMaxlength: Wg,
                    ngValue: Vf,
                    ngModelOptions: xg,
                  })
                  .directive({ ngInclude: hg })
                  .directive(Df)
                  .directive(dg),
                a.provider({
                  $anchorScroll: fb,
                  $animate: Me,
                  $animateCss: Pe,
                  $$animateJs: Ke,
                  $$animateQueue: Le,
                  $$AnimateRunner: Oe,
                  $$animateAsyncRun: Ne,
                  $browser: lb,
                  $cacheFactory: mb,
                  $controller: tb,
                  $document: ub,
                  $exceptionHandler: vb,
                  $filter: Kc,
                  $$forceReflow: Ue,
                  $interpolate: Jb,
                  $interval: Kb,
                  $http: Fb,
                  $httpParamSerializer: xb,
                  $httpParamSerializerJQLike: yb,
                  $httpBackend: Hb,
                  $xhrFactory: Gb,
                  $location: Yb,
                  $log: Zb,
                  $parse: qc,
                  $rootScope: vc,
                  $q: rc,
                  $$q: sc,
                  $sce: Ac,
                  $sceDelegate: zc,
                  $sniffer: Bc,
                  $templateCache: nb,
                  $templateRequest: Cc,
                  $$testability: Dc,
                  $timeout: Ec,
                  $window: Hc,
                  $$rAF: uc,
                  $$jqLite: $a,
                  $$HashMap: Ae,
                  $$cookieReader: Jc,
                });
            },
          ]
        );
    }
    function wa() {
      return ++je;
    }
    function xa(a) {
      return a
        .replace(me, function (a, b, c, d) {
          return d ? c.toUpperCase() : c;
        })
        .replace(ne, "Moz$1");
    }
    function ya(a) {
      return !re.test(a);
    }
    function za(a) {
      var b = a.nodeType;
      return b === be || !b || b === fe;
    }
    function Aa(a) {
      for (var b in ie[a.ng339]) return !0;
      return !1;
    }
    function Ba(a) {
      for (var b = 0, c = a.length; c > b; b++) Ja(a[b]);
    }
    function Ca(a, b) {
      var c,
        d,
        e,
        g,
        h = b.createDocumentFragment(),
        i = [];
      if (ya(a)) i.push(b.createTextNode(a));
      else {
        for (
          c = c || h.appendChild(b.createElement("div")),
            d = (se.exec(a) || ["", ""])[1].toLowerCase(),
            e = ue[d] || ue._default,
            c.innerHTML = e[1] + a.replace(te, "<$1></$2>") + e[2],
            g = e[0];
          g--;

        )
          c = c.lastChild;
        (i = S(i, c.childNodes)), (c = h.firstChild), (c.textContent = "");
      }
      return (
        (h.textContent = ""),
        (h.innerHTML = ""),
        f(i, function (a) {
          h.appendChild(a);
        }),
        h
      );
    }
    function Da(a, c) {
      c = c || b;
      var d;
      return (d = qe.exec(a))
        ? [c.createElement(d[1])]
        : (d = Ca(a, c))
        ? d.childNodes
        : [];
    }
    function Ea(a, b) {
      var c = a.parentNode;
      c && c.replaceChild(b, a), b.appendChild(a);
    }
    function Fa(a) {
      if (a instanceof Fa) return a;
      var b;
      if ((x(a) && ((a = Vd(a)), (b = !0)), !(this instanceof Fa))) {
        if (b && "<" != a.charAt(0))
          throw pe(
            "nosel",
            "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element"
          );
        return new Fa(a);
      }
      b ? Pa(this, Da(a)) : Pa(this, a);
    }
    function Ga(a) {
      return a.cloneNode(!0);
    }
    function Ha(a, b) {
      if ((b || Ja(a), a.querySelectorAll))
        for (var c = a.querySelectorAll("*"), d = 0, e = c.length; e > d; d++)
          Ja(c[d]);
    }
    function Ia(a, b, c, d) {
      if (u(d))
        throw pe(
          "offargs",
          "jqLite#off() does not support the `selector` argument"
        );
      var e = Ka(a),
        g = e && e.events,
        h = e && e.handle;
      if (h)
        if (b) {
          var i = function (b) {
            var d = g[b];
            u(c) && O(d || [], c),
              (u(c) && d && d.length > 0) || (le(a, b, h), delete g[b]);
          };
          f(b.split(" "), function (a) {
            i(a), oe[a] && i(oe[a]);
          });
        } else for (b in g) "$destroy" !== b && le(a, b, h), delete g[b];
    }
    function Ja(a, b) {
      var d = a.ng339,
        e = d && ie[d];
      if (e) {
        if (b) return void delete e.data[b];
        e.handle && (e.events.$destroy && e.handle({}, "$destroy"), Ia(a)),
          delete ie[d],
          (a.ng339 = c);
      }
    }
    function Ka(a, b) {
      var d = a.ng339,
        e = d && ie[d];
      return (
        b &&
          !e &&
          ((a.ng339 = d = wa()),
          (e = ie[d] = { events: {}, data: {}, handle: c })),
        e
      );
    }
    function La(a, b, c) {
      if (za(a)) {
        var d = u(c),
          e = !d && b && !v(b),
          f = !b,
          g = Ka(a, !e),
          h = g && g.data;
        if (d) h[b] = c;
        else {
          if (f) return h;
          if (e) return h && h[b];
          l(h, b);
        }
      }
    }
    function Ma(a, b) {
      return a.getAttribute
        ? (" " + (a.getAttribute("class") || "") + " ")
            .replace(/[\n\t]/g, " ")
            .indexOf(" " + b + " ") > -1
        : !1;
    }
    function Na(a, b) {
      b &&
        a.setAttribute &&
        f(b.split(" "), function (b) {
          a.setAttribute(
            "class",
            Vd(
              (" " + (a.getAttribute("class") || "") + " ")
                .replace(/[\n\t]/g, " ")
                .replace(" " + Vd(b) + " ", " ")
            )
          );
        });
    }
    function Oa(a, b) {
      if (b && a.setAttribute) {
        var c = (" " + (a.getAttribute("class") || "") + " ").replace(
          /[\n\t]/g,
          " "
        );
        f(b.split(" "), function (a) {
          (a = Vd(a)), -1 === c.indexOf(" " + a + " ") && (c += a + " ");
        }),
          a.setAttribute("class", Vd(c));
      }
    }
    function Pa(a, b) {
      if (b)
        if (b.nodeType) a[a.length++] = b;
        else {
          var c = b.length;
          if ("number" == typeof c && b.window !== b) {
            if (c) for (var d = 0; c > d; d++) a[a.length++] = b[d];
          } else a[a.length++] = b;
        }
    }
    function Qa(a, b) {
      return Ra(a, "$" + (b || "ngController") + "Controller");
    }
    function Ra(a, b, c) {
      a.nodeType == fe && (a = a.documentElement);
      for (var d = Td(b) ? b : [b]; a; ) {
        for (var e = 0, f = d.length; f > e; e++)
          if (u((c = Id.data(a, d[e])))) return c;
        a = a.parentNode || (a.nodeType === ge && a.host);
      }
    }
    function Sa(a) {
      for (Ha(a, !0); a.firstChild; ) a.removeChild(a.firstChild);
    }
    function Ta(a, b) {
      b || Ha(a);
      var c = a.parentNode;
      c && c.removeChild(a);
    }
    function Ua(b, c) {
      (c = c || a),
        "complete" === c.document.readyState
          ? c.setTimeout(b)
          : Id(c).on("load", b);
    }
    function Va(a, b) {
      var c = xe[b.toLowerCase()];
      return c && ye[N(a)] && c;
    }
    function Wa(a) {
      return ze[a];
    }
    function Xa(a, b) {
      var c = function (c, d) {
        c.isDefaultPrevented = function () {
          return c.defaultPrevented;
        };
        var e = b[d || c.type],
          f = e ? e.length : 0;
        if (f) {
          if (t(c.immediatePropagationStopped)) {
            var g = c.stopImmediatePropagation;
            c.stopImmediatePropagation = function () {
              (c.immediatePropagationStopped = !0),
                c.stopPropagation && c.stopPropagation(),
                g && g.call(c);
            };
          }
          c.isImmediatePropagationStopped = function () {
            return c.immediatePropagationStopped === !0;
          };
          var h = e.specialHandlerWrapper || Ya;
          f > 1 && (e = Q(e));
          for (var i = 0; f > i; i++)
            c.isImmediatePropagationStopped() || h(a, c, e[i]);
        }
      };
      return (c.elem = a), c;
    }
    function Ya(a, b, c) {
      c.call(a, b);
    }
    function Za(a, b, c) {
      var d = b.relatedTarget;
      (!d || (d !== a && !ve.call(a, d))) && c.call(a, b);
    }
    function $a() {
      this.$get = function () {
        return l(Fa, {
          hasClass: function (a, b) {
            return a.attr && (a = a[0]), Ma(a, b);
          },
          addClass: function (a, b) {
            return a.attr && (a = a[0]), Oa(a, b);
          },
          removeClass: function (a, b) {
            return a.attr && (a = a[0]), Na(a, b);
          },
        });
      };
    }
    function _a(a, b) {
      var c = a && a.$$hashKey;
      if (c) return "function" == typeof c && (c = a.$$hashKey()), c;
      var d = typeof a;
      return (c =
        "function" == d || ("object" == d && null !== a)
          ? (a.$$hashKey = d + ":" + (b || i)())
          : d + ":" + a);
    }
    function ab(a, b) {
      if (b) {
        var c = 0;
        this.nextUid = function () {
          return ++c;
        };
      }
      f(a, this.put, this);
    }
    function bb(a) {
      var b = a.toString().replace(Fe, ""),
        c = b.match(Be) || b.match(Ce);
      return c;
    }
    function cb(a) {
      var b = bb(a);
      return b
        ? "function(" + (b[1] || "").replace(/[\s\r\n]+/, " ") + ")"
        : "fn";
    }
    function db(a, b, c) {
      var d, e, g;
      if ("function" == typeof a) {
        if (!(d = a.$inject)) {
          if (((d = []), a.length)) {
            if (b)
              throw (
                ((x(c) && c) || (c = a.name || cb(a)),
                Ge(
                  "strictdi",
                  "{0} is not using explicit annotation and cannot be invoked in strict mode",
                  c
                ))
              );
            (e = bb(a)),
              f(e[1].split(De), function (a) {
                a.replace(Ee, function (a, b, c) {
                  d.push(c);
                });
              });
          }
          a.$inject = d;
        }
      } else
        Td(a)
          ? ((g = a.length - 1), na(a[g], "fn"), (d = a.slice(0, g)))
          : na(a, "fn", !0);
      return d;
    }
    function eb(a, b) {
      function d(a) {
        return function (b, c) {
          return v(b) ? void f(b, h(a)) : a(b, c);
        };
      }
      function e(a, b) {
        if (
          (oa(a, "service"), (A(b) || Td(b)) && (b = y.instantiate(b)), !b.$get)
        )
          throw Ge(
            "pget",
            "Provider '{0}' must define $get factory method.",
            a
          );
        return (w[a + q] = b);
      }
      function g(a, b) {
        return function () {
          var c = C.invoke(b, this);
          if (t(c))
            throw Ge(
              "undef",
              "Provider '{0}' must return a value from $get factory method.",
              a
            );
          return c;
        };
      }
      function i(a, b, c) {
        return e(a, { $get: c !== !1 ? g(a, b) : b });
      }
      function j(a, b) {
        return i(a, [
          "$injector",
          function (a) {
            return a.instantiate(b);
          },
        ]);
      }
      function k(a, b) {
        return i(a, r(b), !1);
      }
      function l(a, b) {
        oa(a, "constant"), (w[a] = b), (z[a] = b);
      }
      function m(a, b) {
        var c = y.get(a + q),
          d = c.$get;
        c.$get = function () {
          var a = C.invoke(d, c);
          return C.invoke(b, null, { $delegate: a });
        };
      }
      function n(a) {
        ma(t(a) || Td(a), "modulesToLoad", "not an array");
        var b,
          c = [];
        return (
          f(a, function (a) {
            function d(a) {
              var b, c;
              for (b = 0, c = a.length; c > b; b++) {
                var d = a[b],
                  e = y.get(d[0]);
                e[d[1]].apply(e, d[2]);
              }
            }
            if (!u.get(a)) {
              u.put(a, !0);
              try {
                x(a)
                  ? ((b = Kd(a)),
                    (c = c.concat(n(b.requires)).concat(b._runBlocks)),
                    d(b._invokeQueue),
                    d(b._configBlocks))
                  : A(a)
                  ? c.push(y.invoke(a))
                  : Td(a)
                  ? c.push(y.invoke(a))
                  : na(a, "module");
              } catch (e) {
                throw (
                  (Td(a) && (a = a[a.length - 1]),
                  e.message &&
                    e.stack &&
                    -1 == e.stack.indexOf(e.message) &&
                    (e = e.message + "\n" + e.stack),
                  Ge(
                    "modulerr",
                    "Failed to instantiate module {0} due to:\n{1}",
                    a,
                    e.stack || e.message || e
                  ))
                );
              }
            }
          }),
          c
        );
      }
      function o(a, c) {
        function d(b, d) {
          if (a.hasOwnProperty(b)) {
            if (a[b] === p)
              throw Ge(
                "cdep",
                "Circular dependency found: {0}",
                b + " <- " + s.join(" <- ")
              );
            return a[b];
          }
          try {
            return s.unshift(b), (a[b] = p), (a[b] = c(b, d));
          } catch (e) {
            throw (a[b] === p && delete a[b], e);
          } finally {
            s.shift();
          }
        }
        function e(a, c, e) {
          for (
            var f = [], g = eb.$$annotate(a, b, e), h = 0, i = g.length;
            i > h;
            h++
          ) {
            var j = g[h];
            if ("string" != typeof j)
              throw Ge(
                "itkn",
                "Incorrect injection token! Expected service name as string, got {0}",
                j
              );
            f.push(c && c.hasOwnProperty(j) ? c[j] : d(j, e));
          }
          return f;
        }
        function f(a) {
          return 11 >= Hd
            ? !1
            : "function" == typeof a &&
                /^(?:class\s|constructor\()/.test(
                  Function.prototype.toString.call(a)
                );
        }
        function g(a, b, c, d) {
          "string" == typeof c && ((d = c), (c = null));
          var g = e(a, c, d);
          return (
            Td(a) && (a = a[a.length - 1]),
            f(a)
              ? (g.unshift(null), new (Function.prototype.bind.apply(a, g))())
              : a.apply(b, g)
          );
        }
        function h(a, b, c) {
          var d = Td(a) ? a[a.length - 1] : a,
            f = e(a, b, c);
          return f.unshift(null), new (Function.prototype.bind.apply(d, f))();
        }
        return {
          invoke: g,
          instantiate: h,
          get: d,
          annotate: eb.$$annotate,
          has: function (b) {
            return w.hasOwnProperty(b + q) || a.hasOwnProperty(b);
          },
        };
      }
      b = b === !0;
      var p = {},
        q = "Provider",
        s = [],
        u = new ab([], !0),
        w = {
          $provide: {
            provider: d(e),
            factory: d(i),
            service: d(j),
            value: d(k),
            constant: d(l),
            decorator: m,
          },
        },
        y = (w.$injector = o(w, function (a, b) {
          throw (
            (Rd.isString(b) && s.push(b),
            Ge("unpr", "Unknown provider: {0}", s.join(" <- ")))
          );
        })),
        z = {},
        B = o(z, function (a, b) {
          var d = y.get(a + q, b);
          return C.invoke(d.$get, d, c, a);
        }),
        C = B;
      w["$injector" + q] = { $get: r(B) };
      var D = n(a);
      return (
        (C = B.get("$injector")),
        (C.strictDi = b),
        f(D, function (a) {
          a && C.invoke(a);
        }),
        C
      );
    }
    function fb() {
      var a = !0;
      (this.disableAutoScrolling = function () {
        a = !1;
      }),
        (this.$get = [
          "$window",
          "$location",
          "$rootScope",
          function (b, c, d) {
            function e(a) {
              var b = null;
              return (
                Array.prototype.some.call(a, function (a) {
                  return "a" === N(a) ? ((b = a), !0) : void 0;
                }),
                b
              );
            }
            function f() {
              var a = h.yOffset;
              if (A(a)) a = a();
              else if (L(a)) {
                var c = a[0],
                  d = b.getComputedStyle(c);
                a =
                  "fixed" !== d.position ? 0 : c.getBoundingClientRect().bottom;
              } else y(a) || (a = 0);
              return a;
            }
            function g(a) {
              if (a) {
                a.scrollIntoView();
                var c = f();
                if (c) {
                  var d = a.getBoundingClientRect().top;
                  b.scrollBy(0, d - c);
                }
              } else b.scrollTo(0, 0);
            }
            function h(a) {
              a = x(a) ? a : c.hash();
              var b;
              a
                ? (b = i.getElementById(a))
                  ? g(b)
                  : (b = e(i.getElementsByName(a)))
                  ? g(b)
                  : "top" === a && g(null)
                : g(null);
            }
            var i = b.document;
            return (
              a &&
                d.$watch(
                  function () {
                    return c.hash();
                  },
                  function (a, b) {
                    (a !== b || "" !== a) &&
                      Ua(function () {
                        d.$evalAsync(h);
                      });
                  }
                ),
              h
            );
          },
        ]);
    }
    function gb(a, b) {
      return a || b
        ? a
          ? b
            ? (Td(a) && (a = a.join(" ")),
              Td(b) && (b = b.join(" ")),
              a + " " + b)
            : a
          : b
        : "";
    }
    function hb(a) {
      for (var b = 0; b < a.length; b++) {
        var c = a[b];
        if (c.nodeType === Ie) return c;
      }
    }
    function ib(a) {
      x(a) && (a = a.split(" "));
      var b = ra();
      return (
        f(a, function (a) {
          a.length && (b[a] = !0);
        }),
        b
      );
    }
    function jb(a) {
      return v(a) ? a : {};
    }
    function kb(a, b, c, d) {
      function e(a) {
        try {
          a.apply(null, T(arguments, 1));
        } finally {
          if ((s--, 0 === s))
            for (; u.length; )
              try {
                u.pop()();
              } catch (b) {
                c.error(b);
              }
        }
      }
      function g(a) {
        var b = a.indexOf("#");
        return -1 === b ? "" : a.substr(b);
      }
      function h() {
        (z = null), j(), k();
      }
      function i() {
        try {
          return n.state;
        } catch (a) {}
      }
      function j() {
        (v = i()), (v = t(v) ? null : v), R(v, C) && (v = C), (C = v);
      }
      function k() {
        (x !== l.url() || w !== v) &&
          ((x = l.url()),
          (w = v),
          f(A, function (a) {
            a(l.url(), v);
          }));
      }
      var l = this,
        m = (b[0], a.location),
        n = a.history,
        o = a.setTimeout,
        q = a.clearTimeout,
        r = {};
      l.isMock = !1;
      var s = 0,
        u = [];
      (l.$$completeOutstandingRequest = e),
        (l.$$incOutstandingRequestCount = function () {
          s++;
        }),
        (l.notifyWhenNoOutstandingRequests = function (a) {
          0 === s ? a() : u.push(a);
        });
      var v,
        w,
        x = m.href,
        y = b.find("base"),
        z = null;
      j(),
        (w = v),
        (l.url = function (b, c, e) {
          if (
            (t(e) && (e = null),
            m !== a.location && (m = a.location),
            n !== a.history && (n = a.history),
            b)
          ) {
            var f = w === e;
            if (x === b && (!d.history || f)) return l;
            var h = x && Pb(x) === Pb(b);
            return (
              (x = b),
              (w = e),
              !d.history || (h && f)
                ? ((!h || z) && (z = b),
                  c ? m.replace(b) : h ? (m.hash = g(b)) : (m.href = b),
                  m.href !== b && (z = b))
                : (n[c ? "replaceState" : "pushState"](e, "", b), j(), (w = v)),
              l
            );
          }
          return z || m.href.replace(/%27/g, "'");
        }),
        (l.state = function () {
          return v;
        });
      var A = [],
        B = !1,
        C = null;
      (l.onUrlChange = function (b) {
        return (
          B ||
            (d.history && Id(a).on("popstate", h),
            Id(a).on("hashchange", h),
            (B = !0)),
          A.push(b),
          b
        );
      }),
        (l.$$applicationDestroyed = function () {
          Id(a).off("hashchange popstate", h);
        }),
        (l.$$checkUrlChange = k),
        (l.baseHref = function () {
          var a = y.attr("href");
          return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : "";
        }),
        (l.defer = function (a, b) {
          var c;
          return (
            s++,
            (c = o(function () {
              delete r[c], e(a);
            }, b || 0)),
            (r[c] = !0),
            c
          );
        }),
        (l.defer.cancel = function (a) {
          return r[a] ? (delete r[a], q(a), e(p), !0) : !1;
        });
    }
    function lb() {
      this.$get = [
        "$window",
        "$log",
        "$sniffer",
        "$document",
        function (a, b, c, d) {
          return new kb(a, d, b, c);
        },
      ];
    }
    function mb() {
      this.$get = function () {
        function a(a, c) {
          function e(a) {
            a != m &&
              (n ? n == a && (n = a.n) : (n = a),
              f(a.n, a.p),
              f(a, m),
              (m = a),
              (m.n = null));
          }
          function f(a, b) {
            a != b && (a && (a.p = b), b && (b.n = a));
          }
          if (a in b)
            throw d("$cacheFactory")(
              "iid",
              "CacheId '{0}' is already taken!",
              a
            );
          var g = 0,
            h = l({}, c, { id: a }),
            i = ra(),
            j = (c && c.capacity) || Number.MAX_VALUE,
            k = ra(),
            m = null,
            n = null;
          return (b[a] = {
            put: function (a, b) {
              if (!t(b)) {
                if (j < Number.MAX_VALUE) {
                  var c = k[a] || (k[a] = { key: a });
                  e(c);
                }
                return (
                  a in i || g++, (i[a] = b), g > j && this.remove(n.key), b
                );
              }
            },
            get: function (a) {
              if (j < Number.MAX_VALUE) {
                var b = k[a];
                if (!b) return;
                e(b);
              }
              return i[a];
            },
            remove: function (a) {
              if (j < Number.MAX_VALUE) {
                var b = k[a];
                if (!b) return;
                b == m && (m = b.p),
                  b == n && (n = b.n),
                  f(b.n, b.p),
                  delete k[a];
              }
              a in i && (delete i[a], g--);
            },
            removeAll: function () {
              (i = ra()), (g = 0), (k = ra()), (m = n = null);
            },
            destroy: function () {
              (i = null), (h = null), (k = null), delete b[a];
            },
            info: function () {
              return l({}, h, { size: g });
            },
          });
        }
        var b = {};
        return (
          (a.info = function () {
            var a = {};
            return (
              f(b, function (b, c) {
                a[c] = b.info();
              }),
              a
            );
          }),
          (a.get = function (a) {
            return b[a];
          }),
          a
        );
      };
    }
    function nb() {
      this.$get = [
        "$cacheFactory",
        function (a) {
          return a("templates");
        },
      ];
    }
    function ob(a, d) {
      function e(a, b, c) {
        var d = /^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/,
          e = {};
        return (
          f(a, function (a, f) {
            var g = a.match(d);
            if (!g)
              throw Qe(
                "iscp",
                "Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}",
                b,
                f,
                a,
                c
                  ? "controller bindings definition"
                  : "isolate scope definition"
              );
            e[f] = {
              mode: g[1][0],
              collection: "*" === g[2],
              optional: "?" === g[3],
              attrName: g[4] || f,
            };
          }),
          e
        );
      }
      function g(a, b) {
        var c = { isolateScope: null, bindToController: null };
        if (
          (v(a.scope) &&
            (a.bindToController === !0
              ? ((c.bindToController = e(a.scope, b, !0)),
                (c.isolateScope = {}))
              : (c.isolateScope = e(a.scope, b, !1))),
          v(a.bindToController) &&
            (c.bindToController = e(a.bindToController, b, !0)),
          v(c.bindToController))
        ) {
          var d = a.controller,
            f = a.controllerAs;
          if (!d)
            throw Qe(
              "noctrl",
              "Cannot bind to controller without directive '{0}'s controller.",
              b
            );
          if (!sb(d, f))
            throw Qe(
              "noident",
              "Cannot bind to controller without identifier for directive '{0}'.",
              b
            );
        }
        return c;
      }
      function i(a) {
        var b = a.charAt(0);
        if (!b || b !== Dd(b))
          throw Qe(
            "baddir",
            "Directive name '{0}' is invalid. The first character must be a lowercase letter",
            a
          );
        if (a !== a.trim())
          throw Qe(
            "baddir",
            "Directive name '{0}' is invalid. The name should not contain leading or trailing whitespaces",
            a
          );
      }
      var j = {},
        k = "Directive",
        m = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
        n = /(([\w\-]+)(?:\:([^;]+))?;?)/,
        s = M("ngSrc,ngSrcset,src,srcset"),
        w = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
        y = /^(on[a-z]+|formaction)$/;
      (this.directive = function B(b, c) {
        return (
          oa(b, "directive"),
          x(b)
            ? (i(b),
              ma(c, "directiveFactory"),
              j.hasOwnProperty(b) ||
                ((j[b] = []),
                a.factory(b + k, [
                  "$injector",
                  "$exceptionHandler",
                  function (a, c) {
                    var d = [];
                    return (
                      f(j[b], function (e, f) {
                        try {
                          var h = a.invoke(e);
                          A(h)
                            ? (h = { compile: r(h) })
                            : !h.compile && h.link && (h.compile = r(h.link)),
                            (h.priority = h.priority || 0),
                            (h.index = f),
                            (h.name = h.name || b),
                            (h.require = h.require || (h.controller && h.name)),
                            (h.restrict = h.restrict || "EA");
                          var i = (h.$$bindings = g(h, h.name));
                          v(i.isolateScope) &&
                            (h.$$isolateBindings = i.isolateScope),
                            (h.$$moduleName = e.$$moduleName),
                            d.push(h);
                        } catch (j) {
                          c(j);
                        }
                      }),
                      d
                    );
                  },
                ])),
              j[b].push(c))
            : f(b, h(B)),
          this
        );
      }),
        (this.component = function (a, b) {
          function c(a) {
            function c(b) {
              return A(b) || Td(b)
                ? function (c, d) {
                    return a.invoke(b, this, { $element: c, $attrs: d });
                  }
                : b;
            }
            var e = b.template || b.templateUrl ? b.template : "";
            return {
              controller: d,
              controllerAs: sb(b.controller) || b.controllerAs || "$ctrl",
              template: c(e),
              templateUrl: c(b.templateUrl),
              transclude: b.transclude,
              scope: {},
              bindToController: b.bindings || {},
              restrict: "E",
              require: b.require,
            };
          }
          var d = b.controller || function () {};
          return (
            f(b, function (a, b) {
              "$" === b.charAt(0) && (c[b] = a);
            }),
            (c.$inject = ["$injector"]),
            this.directive(a, c)
          );
        }),
        (this.aHrefSanitizationWhitelist = function (a) {
          return u(a)
            ? (d.aHrefSanitizationWhitelist(a), this)
            : d.aHrefSanitizationWhitelist();
        }),
        (this.imgSrcSanitizationWhitelist = function (a) {
          return u(a)
            ? (d.imgSrcSanitizationWhitelist(a), this)
            : d.imgSrcSanitizationWhitelist();
        });
      var z = !0;
      (this.debugInfoEnabled = function (a) {
        return u(a) ? ((z = a), this) : z;
      }),
        (this.$get = [
          "$injector",
          "$interpolate",
          "$exceptionHandler",
          "$templateRequest",
          "$parse",
          "$controller",
          "$rootScope",
          "$sce",
          "$animate",
          "$$sanitizeUri",
          function (a, d, e, g, h, i, r, u, B, C) {
            function E(a, b, c) {
              ja.innerHTML = "<span " + b + ">";
              var d = ja.firstChild.attributes,
                e = d[0];
              d.removeNamedItem(e.name),
                (e.value = c),
                a.attributes.setNamedItem(e);
            }
            function F(a, b) {
              try {
                a.addClass(b);
              } catch (c) {}
            }
            function G(a, c, d, e, f) {
              a instanceof Id || (a = Id(a));
              for (var g = /\S+/, h = 0, i = a.length; i > h; h++) {
                var j = a[h];
                j.nodeType === de &&
                  j.nodeValue.match(g) &&
                  Ea(j, (a[h] = b.createElement("span")));
              }
              var k = J(a, c, a, d, e, f);
              G.$$addScopeClass(a);
              var l = null;
              return function (b, c, d) {
                ma(b, "scope"),
                  f && f.needsNewScope && (b = b.$parent.$new()),
                  (d = d || {});
                var e = d.parentBoundTranscludeFn,
                  g = d.transcludeControllers,
                  h = d.futureParentElement;
                e && e.$$boundTransclude && (e = e.$$boundTransclude),
                  l || (l = I(h));
                var i;
                if (
                  ((i =
                    "html" !== l
                      ? Id(ba(l, Id("<div>").append(a).html()))
                      : c
                      ? we.clone.call(a)
                      : a),
                  g)
                )
                  for (var j in g)
                    i.data("$" + j + "Controller", g[j].instance);
                return (
                  G.$$addScopeInfo(i, b), c && c(i, b), k && k(b, i, i, e), i
                );
              };
            }
            function I(a) {
              var b = a && a[0];
              return b && "foreignobject" !== N(b) && Od.call(b).match(/SVG/)
                ? "svg"
                : "html";
            }
            function J(a, b, d, e, f, g) {
              function h(a, d, e, f) {
                var g, h, i, j, k, l, m, n, q;
                if (o) {
                  var r = d.length;
                  for (q = new Array(r), k = 0; k < p.length; k += 3)
                    (m = p[k]), (q[m] = d[m]);
                } else q = d;
                for (k = 0, l = p.length; l > k; )
                  (i = q[p[k++]]),
                    (g = p[k++]),
                    (h = p[k++]),
                    g
                      ? (g.scope
                          ? ((j = a.$new()), G.$$addScopeInfo(Id(i), j))
                          : (j = a),
                        (n = g.transcludeOnThisElement
                          ? K(a, g.transclude, f)
                          : !g.templateOnThisElement && f
                          ? f
                          : !f && b
                          ? K(a, b)
                          : null),
                        g(h, j, i, e, n))
                      : h && h(a, i.childNodes, c, f);
              }
              for (var i, j, k, l, m, n, o, p = [], q = 0; q < a.length; q++)
                (i = new la()),
                  (j = L(a[q], [], i, 0 === q ? e : c, f)),
                  (k = j.length ? S(j, a[q], i, b, d, null, [], [], g) : null),
                  k && k.scope && G.$$addScopeClass(i.$$element),
                  (m =
                    (k && k.terminal) || !(l = a[q].childNodes) || !l.length
                      ? null
                      : J(
                          l,
                          k
                            ? (k.transcludeOnThisElement ||
                                !k.templateOnThisElement) &&
                                k.transclude
                            : b
                        )),
                  (k || m) && (p.push(q, k, m), (n = !0), (o = o || k)),
                  (g = null);
              return n ? h : null;
            }
            function K(a, b, c) {
              var d = function (d, e, f, g, h) {
                  return (
                    d || ((d = a.$new(!1, h)), (d.$$transcluded = !0)),
                    b(d, e, {
                      parentBoundTranscludeFn: c,
                      transcludeControllers: f,
                      futureParentElement: g,
                    })
                  );
                },
                e = (d.$$slots = ra());
              for (var f in b.$$slots)
                b.$$slots[f] ? (e[f] = K(a, b.$$slots[f], c)) : (e[f] = null);
              return d;
            }
            function L(a, b, c, d, e) {
              var f,
                g,
                h = a.nodeType,
                i = c.$attr;
              switch (h) {
                case be:
                  V(b, pb(N(a)), "E", d, e);
                  for (
                    var j,
                      k,
                      l,
                      o,
                      p,
                      q,
                      r = a.attributes,
                      s = 0,
                      t = r && r.length;
                    t > s;
                    s++
                  ) {
                    var u = !1,
                      w = !1;
                    (j = r[s]),
                      (k = j.name),
                      (p = Vd(j.value)),
                      (o = pb(k)),
                      (q = qa.test(o)) &&
                        (k = k
                          .replace(Re, "")
                          .substr(8)
                          .replace(/_(.)/g, function (a, b) {
                            return b.toUpperCase();
                          }));
                    var y = o.match(sa);
                    y &&
                      W(y[1]) &&
                      ((u = k),
                      (w = k.substr(0, k.length - 5) + "end"),
                      (k = k.substr(0, k.length - 6))),
                      (l = pb(k.toLowerCase())),
                      (i[l] = k),
                      (q || !c.hasOwnProperty(l)) &&
                        ((c[l] = p), Va(a, l) && (c[l] = !0)),
                      da(a, b, p, l, q),
                      V(b, l, "A", d, e, u, w);
                  }
                  if (
                    ((g = a.className),
                    v(g) && (g = g.animVal),
                    x(g) && "" !== g)
                  )
                    for (; (f = n.exec(g)); )
                      (l = pb(f[2])),
                        V(b, l, "C", d, e) && (c[l] = Vd(f[3])),
                        (g = g.substr(f.index + f[0].length));
                  break;
                case de:
                  if (11 === Hd)
                    for (
                      ;
                      a.parentNode &&
                      a.nextSibling &&
                      a.nextSibling.nodeType === de;

                    )
                      (a.nodeValue = a.nodeValue + a.nextSibling.nodeValue),
                        a.parentNode.removeChild(a.nextSibling);
                  aa(b, a.nodeValue);
                  break;
                case ee:
                  try {
                    (f = m.exec(a.nodeValue)),
                      f &&
                        ((l = pb(f[1])),
                        V(b, l, "M", d, e) && (c[l] = Vd(f[2])));
                  } catch (z) {}
              }
              return b.sort(Z), b;
            }
            function M(a, b, c) {
              var d = [],
                e = 0;
              if (b && a.hasAttribute && a.hasAttribute(b)) {
                do {
                  if (!a)
                    throw Qe(
                      "uterdir",
                      "Unterminated attribute, found '{0}' but no matching '{1}' found.",
                      b,
                      c
                    );
                  a.nodeType == be &&
                    (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--),
                    d.push(a),
                    (a = a.nextSibling);
                } while (e > 0);
              } else d.push(a);
              return Id(d);
            }
            function P(a, b, c) {
              return function (d, e, f, g, h) {
                return (e = M(e[0], b, c)), a(d, e, f, g, h);
              };
            }
            function Q(a, b, c, d, e, f) {
              if (a) return G(b, c, d, e, f);
              var g;
              return function () {
                return (
                  g || ((g = G(b, c, d, e, f)), (b = c = f = null)),
                  g.apply(this, arguments)
                );
              };
            }
            function S(a, d, g, h, j, k, m, n, o) {
              function p(a, b, c, d) {
                a &&
                  (c && (a = P(a, c, d)),
                  (a.require = u.require),
                  (a.directiveName = y),
                  (I === u || u.$$isolateScope) &&
                    (a = fa(a, { isolateScope: !0 })),
                  m.push(a)),
                  b &&
                    (c && (b = P(b, c, d)),
                    (b.require = u.require),
                    (b.directiveName = y),
                    (I === u || u.$$isolateScope) &&
                      (b = fa(b, { isolateScope: !0 })),
                    n.push(b));
              }
              function q(a, b, c, d) {
                var e;
                if (x(b)) {
                  var g = b.match(w),
                    h = b.substring(g[0].length),
                    i = g[1] || g[3],
                    j = "?" === g[2];
                  if (
                    ("^^" === i
                      ? (c = c.parent())
                      : ((e = d && d[h]), (e = e && e.instance)),
                    !e)
                  ) {
                    var k = "$" + h + "Controller";
                    e = i ? c.inheritedData(k) : c.data(k);
                  }
                  if (!e && !j)
                    throw Qe(
                      "ctreq",
                      "Controller '{0}', required by directive '{1}', can't be found!",
                      h,
                      a
                    );
                } else if (Td(b)) {
                  e = [];
                  for (var l = 0, m = b.length; m > l; l++)
                    e[l] = q(a, b[l], c, d);
                } else
                  v(b) &&
                    ((e = {}),
                    f(b, function (b, f) {
                      e[f] = q(a, b, c, d);
                    }));
                return e || null;
              }
              function r(a, b, c, d, e, f) {
                var g = ra();
                for (var h in d) {
                  var j = d[h],
                    k = {
                      $scope: j === I || j.$$isolateScope ? e : f,
                      $element: a,
                      $attrs: b,
                      $transclude: c,
                    },
                    l = j.controller;
                  "@" == l && (l = b[j.name]);
                  var m = i(l, k, !0, j.controllerAs);
                  (g[j.name] = m),
                    S || a.data("$" + j.name + "Controller", m.instance);
                }
                return g;
              }
              function s(a, b, e, h, i) {
                function j(a, b, d, e) {
                  var f;
                  if (
                    (D(a) || ((e = d), (d = b), (b = a), (a = c)),
                    S && (f = w),
                    d || (d = S ? y.parent() : y),
                    !e)
                  )
                    return i(a, b, f, d, O);
                  var g = i.$$slots[e];
                  if (g) return g(a, b, f, d, O);
                  if (t(g))
                    throw Qe(
                      "noslot",
                      'No parent directive that requires a transclusion with slot name "{0}". Element: {1}',
                      e,
                      _(y)
                    );
                }
                var k, o, p, s, u, w, x, y, z, B, C;
                d === e
                  ? ((z = g), (y = g.$$element))
                  : ((y = Id(e)), (z = new la(y, g))),
                  (u = b),
                  I ? (s = b.$new(!0)) : F && (u = b.$parent),
                  i &&
                    ((x = j),
                    (x.$$boundTransclude = i),
                    (x.isSlotFilled = function (a) {
                      return !!i.$$slots[a];
                    })),
                  H && (w = r(y, z, x, H, s, b)),
                  I &&
                    (G.$$addScopeInfo(
                      y,
                      s,
                      !0,
                      !(J && (J === I || J === I.$$originalDirective))
                    ),
                    G.$$addScopeClass(y, !0),
                    (s.$$isolateBindings = I.$$isolateBindings),
                    (B = ha(b, z, s, s.$$isolateBindings, I)),
                    B && s.$on("$destroy", B));
                for (var E in w) {
                  var K = H[E],
                    L = w[E],
                    M = K.$$bindings.bindToController;
                  L.identifier && M && (C = ha(u, z, L.instance, M, K));
                  var N = L();
                  N !== L.instance &&
                    ((L.instance = N),
                    y.data("$" + K.name + "Controller", N),
                    C && C(),
                    (C = ha(u, z, L.instance, M, K)));
                }
                for (
                  f(H, function (a, b) {
                    var c = a.require;
                    a.bindToController &&
                      !Td(c) &&
                      v(c) &&
                      l(w[b].instance, q(b, c, y, w));
                  }),
                    f(w, function (a) {
                      A(a.instance.$onInit) && a.instance.$onInit();
                    }),
                    k = 0,
                    o = m.length;
                  o > k;
                  k++
                )
                  (p = m[k]),
                    ga(
                      p,
                      p.isolateScope ? s : b,
                      y,
                      z,
                      p.require && q(p.directiveName, p.require, y, w),
                      x
                    );
                var O = b;
                for (
                  I && (I.template || null === I.templateUrl) && (O = s),
                    a && a(O, e.childNodes, c, i),
                    k = n.length - 1;
                  k >= 0;
                  k--
                )
                  (p = n[k]),
                    ga(
                      p,
                      p.isolateScope ? s : b,
                      y,
                      z,
                      p.require && q(p.directiveName, p.require, y, w),
                      x
                    );
              }
              o = o || {};
              for (
                var u,
                  y,
                  z,
                  B,
                  C,
                  E = -Number.MAX_VALUE,
                  F = o.newScopeDirective,
                  H = o.controllerDirectives,
                  I = o.newIsolateScopeDirective,
                  J = o.templateDirective,
                  K = o.nonTlbTranscludeDirective,
                  O = !1,
                  R = !1,
                  S = o.hasElementTranscludeDirective,
                  V = (g.$$element = Id(d)),
                  W = k,
                  Z = h,
                  aa = !1,
                  ca = !1,
                  da = 0,
                  ia = a.length;
                ia > da;
                da++
              ) {
                u = a[da];
                var ja = u.$$start,
                  ka = u.$$end;
                if ((ja && (V = M(d, ja, ka)), (z = c), E > u.priority)) break;
                if (
                  ((C = u.scope) &&
                    (u.templateUrl ||
                      (v(C)
                        ? ($("new/isolated scope", I || F, u, V), (I = u))
                        : $("new/isolated scope", I, u, V)),
                    (F = F || u)),
                  (y = u.name),
                  !aa &&
                    ((u.replace && (u.templateUrl || u.template)) ||
                      (u.transclude && !u.$$tlb)))
                ) {
                  for (var ma, na = da + 1; (ma = a[na++]); )
                    if (
                      (ma.transclude && !ma.$$tlb) ||
                      (ma.replace && (ma.templateUrl || ma.template))
                    ) {
                      ca = !0;
                      break;
                    }
                  aa = !0;
                }
                if (
                  (!u.templateUrl &&
                    u.controller &&
                    ((C = u.controller),
                    (H = H || ra()),
                    $("'" + y + "' controller", H[y], u, V),
                    (H[y] = u)),
                  (C = u.transclude))
                )
                  if (
                    ((O = !0),
                    u.$$tlb || ($("transclusion", K, u, V), (K = u)),
                    "element" == C)
                  )
                    (S = !0),
                      (E = u.priority),
                      (z = V),
                      (V = g.$$element =
                        Id(b.createComment(" " + y + ": " + g[y] + " "))),
                      (d = V[0]),
                      ea(j, T(z), d),
                      (Z = Q(ca, z, h, E, W && W.name, {
                        nonTlbTranscludeDirective: K,
                      }));
                  else {
                    var oa = ra();
                    if (((z = Id(Ga(d)).contents()), v(C))) {
                      z = [];
                      var qa = ra(),
                        sa = ra();
                      f(C, function (a, b) {
                        var c = "?" === a.charAt(0);
                        (a = c ? a.substring(1) : a),
                          (qa[a] = b),
                          (oa[b] = null),
                          (sa[b] = c);
                      }),
                        f(V.contents(), function (a) {
                          var b = qa[pb(N(a))];
                          b
                            ? ((sa[b] = !0),
                              (oa[b] = oa[b] || []),
                              oa[b].push(a))
                            : z.push(a);
                        }),
                        f(sa, function (a, b) {
                          if (!a)
                            throw Qe(
                              "reqslot",
                              "Required transclusion slot `{0}` was not filled.",
                              b
                            );
                        });
                      for (var ta in oa) oa[ta] && (oa[ta] = Q(ca, oa[ta], h));
                    }
                    V.empty(),
                      (Z = Q(ca, z, h, c, c, {
                        needsNewScope: u.$$isolateScope || u.$$newScope,
                      })),
                      (Z.$$slots = oa);
                  }
                if (u.template)
                  if (
                    ((R = !0),
                    $("template", J, u, V),
                    (J = u),
                    (C = A(u.template) ? u.template(V, g) : u.template),
                    (C = pa(C)),
                    u.replace)
                  ) {
                    if (
                      ((W = u),
                      (z = ya(C) ? [] : rb(ba(u.templateNamespace, Vd(C)))),
                      (d = z[0]),
                      1 != z.length || d.nodeType !== be)
                    )
                      throw Qe(
                        "tplrt",
                        "Template for directive '{0}' must have exactly one root element. {1}",
                        y,
                        ""
                      );
                    ea(j, V, d);
                    var ua = { $attr: {} },
                      va = L(d, [], ua),
                      wa = a.splice(da + 1, a.length - (da + 1));
                    (I || F) && U(va, I, F),
                      (a = a.concat(va).concat(wa)),
                      X(g, ua),
                      (ia = a.length);
                  } else V.html(C);
                if (u.templateUrl)
                  (R = !0),
                    $("template", J, u, V),
                    (J = u),
                    u.replace && (W = u),
                    (s = Y(a.splice(da, a.length - da), V, g, j, O && Z, m, n, {
                      controllerDirectives: H,
                      newScopeDirective: F !== u && F,
                      newIsolateScopeDirective: I,
                      templateDirective: J,
                      nonTlbTranscludeDirective: K,
                    })),
                    (ia = a.length);
                else if (u.compile)
                  try {
                    (B = u.compile(V, g, Z)),
                      A(B) ? p(null, B, ja, ka) : B && p(B.pre, B.post, ja, ka);
                  } catch (xa) {
                    e(xa, _(V));
                  }
                u.terminal &&
                  ((s.terminal = !0), (E = Math.max(E, u.priority)));
              }
              return (
                (s.scope = F && F.scope === !0),
                (s.transcludeOnThisElement = O),
                (s.templateOnThisElement = R),
                (s.transclude = Z),
                (o.hasElementTranscludeDirective = S),
                s
              );
            }
            function U(a, b, c) {
              for (var d = 0, e = a.length; e > d; d++)
                a[d] = o(a[d], { $$isolateScope: b, $$newScope: c });
            }
            function V(b, c, d, f, g, h, i) {
              if (c === g) return null;
              var l = null;
              if (j.hasOwnProperty(c))
                for (var m, n = a.get(c + k), p = 0, q = n.length; q > p; p++)
                  try {
                    (m = n[p]),
                      (t(f) || f > m.priority) &&
                        -1 != m.restrict.indexOf(d) &&
                        (h && (m = o(m, { $$start: h, $$end: i })),
                        b.push(m),
                        (l = m));
                  } catch (r) {
                    e(r);
                  }
              return l;
            }
            function W(b) {
              if (j.hasOwnProperty(b))
                for (var c, d = a.get(b + k), e = 0, f = d.length; f > e; e++)
                  if (((c = d[e]), c.multiElement)) return !0;
              return !1;
            }
            function X(a, b) {
              var c = b.$attr,
                d = a.$attr,
                e = a.$$element;
              f(a, function (d, e) {
                "$" != e.charAt(0) &&
                  (b[e] &&
                    b[e] !== d &&
                    (d += ("style" === e ? ";" : " ") + b[e]),
                  a.$set(e, d, !0, c[e]));
              }),
                f(b, function (b, f) {
                  "class" == f
                    ? (F(e, b),
                      (a["class"] = (a["class"] ? a["class"] + " " : "") + b))
                    : "style" == f
                    ? (e.attr("style", e.attr("style") + ";" + b),
                      (a.style = (a.style ? a.style + ";" : "") + b))
                    : "$" == f.charAt(0) ||
                      a.hasOwnProperty(f) ||
                      ((a[f] = b), (d[f] = c[f]));
                });
            }
            function Y(a, b, c, d, e, h, i, j) {
              var k,
                l,
                m = [],
                n = b[0],
                p = a.shift(),
                q = o(p, {
                  templateUrl: null,
                  transclude: null,
                  replace: null,
                  $$originalDirective: p,
                }),
                r = A(p.templateUrl) ? p.templateUrl(b, c) : p.templateUrl,
                s = p.templateNamespace;
              return (
                b.empty(),
                g(r).then(function (g) {
                  var o, t, u, w;
                  if (((g = pa(g)), p.replace)) {
                    if (
                      ((u = ya(g) ? [] : rb(ba(s, Vd(g)))),
                      (o = u[0]),
                      1 != u.length || o.nodeType !== be)
                    )
                      throw Qe(
                        "tplrt",
                        "Template for directive '{0}' must have exactly one root element. {1}",
                        p.name,
                        r
                      );
                    (t = { $attr: {} }), ea(d, b, o);
                    var x = L(o, [], t);
                    v(p.scope) && U(x, !0), (a = x.concat(a)), X(c, t);
                  } else (o = n), b.html(g);
                  for (
                    a.unshift(q),
                      k = S(a, o, c, e, b, p, h, i, j),
                      f(d, function (a, c) {
                        a == o && (d[c] = b[0]);
                      }),
                      l = J(b[0].childNodes, e);
                    m.length;

                  ) {
                    var y = m.shift(),
                      z = m.shift(),
                      A = m.shift(),
                      B = m.shift(),
                      C = b[0];
                    if (!y.$$destroyed) {
                      if (z !== n) {
                        var D = z.className;
                        (j.hasElementTranscludeDirective && p.replace) ||
                          (C = Ga(o)),
                          ea(A, Id(z), C),
                          F(Id(C), D);
                      }
                      (w = k.transcludeOnThisElement
                        ? K(y, k.transclude, B)
                        : B),
                        k(l, y, C, d, w);
                    }
                  }
                  m = null;
                }),
                function (a, b, c, d, e) {
                  var f = e;
                  b.$$destroyed ||
                    (m
                      ? m.push(b, c, d, f)
                      : (k.transcludeOnThisElement &&
                          (f = K(b, k.transclude, e)),
                        k(l, b, c, d, f)));
                }
              );
            }
            function Z(a, b) {
              var c = b.priority - a.priority;
              return 0 !== c
                ? c
                : a.name !== b.name
                ? a.name < b.name
                  ? -1
                  : 1
                : a.index - b.index;
            }
            function $(a, b, c, d) {
              function e(a) {
                return a ? " (module: " + a + ")" : "";
              }
              if (b)
                throw Qe(
                  "multidir",
                  "Multiple directives [{0}{1}, {2}{3}] asking for {4} on: {5}",
                  b.name,
                  e(b.$$moduleName),
                  c.name,
                  e(c.$$moduleName),
                  a,
                  _(d)
                );
            }
            function aa(a, b) {
              var c = d(b, !0);
              c &&
                a.push({
                  priority: 0,
                  compile: function (a) {
                    var b = a.parent(),
                      d = !!b.length;
                    return (
                      d && G.$$addBindingClass(b),
                      function (a, b) {
                        var e = b.parent();
                        d || G.$$addBindingClass(e),
                          G.$$addBindingInfo(e, c.expressions),
                          a.$watch(c, function (a) {
                            b[0].nodeValue = a;
                          });
                      }
                    );
                  },
                });
            }
            function ba(a, c) {
              switch ((a = Dd(a || "html"))) {
                case "svg":
                case "math":
                  var d = b.createElement("div");
                  return (
                    (d.innerHTML = "<" + a + ">" + c + "</" + a + ">"),
                    d.childNodes[0].childNodes
                  );
                default:
                  return c;
              }
            }
            function ca(a, b) {
              if ("srcdoc" == b) return u.HTML;
              var c = N(a);
              return "xlinkHref" == b ||
                ("form" == c && "action" == b) ||
                ("img" != c && ("src" == b || "ngSrc" == b))
                ? u.RESOURCE_URL
                : void 0;
            }
            function da(a, b, c, e, f) {
              var g = ca(a, e);
              f = s[e] || f;
              var h = d(c, !0, g, f);
              if (h) {
                if ("multiple" === e && "select" === N(a))
                  throw Qe(
                    "selmulti",
                    "Binding to the 'multiple' attribute is not supported. Element: {0}",
                    _(a)
                  );
                b.push({
                  priority: 100,
                  compile: function () {
                    return {
                      pre: function (a, b, i) {
                        var j = i.$$observers || (i.$$observers = ra());
                        if (y.test(e))
                          throw Qe(
                            "nodomevents",
                            "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead."
                          );
                        var k = i[e];
                        k !== c && ((h = k && d(k, !0, g, f)), (c = k)),
                          h &&
                            ((i[e] = h(a)),
                            ((j[e] || (j[e] = [])).$$inter = !0),
                            (
                              (i.$$observers && i.$$observers[e].$$scope) ||
                              a
                            ).$watch(h, function (a, b) {
                              "class" === e && a != b
                                ? i.$updateClass(a, b)
                                : i.$set(e, a);
                            }));
                      },
                    };
                  },
                });
              }
            }
            function ea(a, c, d) {
              var e,
                f,
                g = c[0],
                h = c.length,
                i = g.parentNode;
              if (a)
                for (e = 0, f = a.length; f > e; e++)
                  if (a[e] == g) {
                    a[e++] = d;
                    for (
                      var j = e, k = j + h - 1, l = a.length;
                      l > j;
                      j++, k++
                    )
                      l > k ? (a[j] = a[k]) : delete a[j];
                    (a.length -= h - 1), a.context === g && (a.context = d);
                    break;
                  }
              i && i.replaceChild(d, g);
              var m = b.createDocumentFragment();
              for (e = 0; h > e; e++) m.appendChild(c[e]);
              for (
                Id.hasData(g) &&
                  (Id.data(d, Id.data(g)), Id(g).off("$destroy")),
                  Id.cleanData(m.querySelectorAll("*")),
                  e = 1;
                h > e;
                e++
              )
                delete c[e];
              (c[0] = d), (c.length = 1);
            }
            function fa(a, b) {
              return l(
                function () {
                  return a.apply(null, arguments);
                },
                a,
                b
              );
            }
            function ga(a, b, c, d, f, g) {
              try {
                a(b, c, d, f, g);
              } catch (h) {
                e(h, _(c));
              }
            }
            function ha(a, b, c, e, g) {
              var i = [];
              return (
                f(e, function (e, f) {
                  var j,
                    k,
                    l,
                    m,
                    n,
                    o = e.attrName,
                    q = e.optional,
                    r = e.mode;
                  switch (r) {
                    case "@":
                      q || Cd.call(b, o) || (c[f] = b[o] = void 0),
                        b.$observe(o, function (a) {
                          x(a) && (c[f] = a);
                        }),
                        (b.$$observers[o].$$scope = a),
                        (j = b[o]),
                        x(j) ? (c[f] = d(j)(a)) : H(j) && (c[f] = j);
                      break;
                    case "=":
                      if (!Cd.call(b, o)) {
                        if (q) break;
                        b[o] = void 0;
                      }
                      if (q && !b[o]) break;
                      (k = h(b[o])),
                        (m = k.literal
                          ? R
                          : function (a, b) {
                              return a === b || (a !== a && b !== b);
                            }),
                        (l =
                          k.assign ||
                          function () {
                            throw (
                              ((j = c[f] = k(a)),
                              Qe(
                                "nonassign",
                                "Expression '{0}' in attribute '{1}' used with directive '{2}' is non-assignable!",
                                b[o],
                                o,
                                g.name
                              ))
                            );
                          }),
                        (j = c[f] = k(a));
                      var s = function (b) {
                        return (
                          m(b, c[f]) ||
                            (m(b, j) ? l(a, (b = c[f])) : (c[f] = b)),
                          (j = b)
                        );
                      };
                      (s.$stateful = !0),
                        (n = e.collection
                          ? a.$watchCollection(b[o], s)
                          : a.$watch(h(b[o], s), null, k.literal)),
                        i.push(n);
                      break;
                    case "<":
                      if (!Cd.call(b, o)) {
                        if (q) break;
                        b[o] = void 0;
                      }
                      if (q && !b[o]) break;
                      (k = h(b[o])),
                        (c[f] = k(a)),
                        (n = a.$watch(
                          k,
                          function (a) {
                            c[f] = a;
                          },
                          k.literal
                        )),
                        i.push(n);
                      break;
                    case "&":
                      if (
                        ((k = b.hasOwnProperty(o) ? h(b[o]) : p), k === p && q)
                      )
                        break;
                      c[f] = function (b) {
                        return k(a, b);
                      };
                  }
                }),
                i.length &&
                  function () {
                    for (var a = 0, b = i.length; b > a; ++a) i[a]();
                  }
              );
            }
            var ia = /^\w/,
              ja = b.createElement("div"),
              la = function (a, b) {
                if (b) {
                  var c,
                    d,
                    e,
                    f = Object.keys(b);
                  for (c = 0, d = f.length; d > c; c++)
                    (e = f[c]), (this[e] = b[e]);
                } else this.$attr = {};
                this.$$element = a;
              };
            la.prototype = {
              $normalize: pb,
              $addClass: function (a) {
                a && a.length > 0 && B.addClass(this.$$element, a);
              },
              $removeClass: function (a) {
                a && a.length > 0 && B.removeClass(this.$$element, a);
              },
              $updateClass: function (a, b) {
                var c = qb(a, b);
                c && c.length && B.addClass(this.$$element, c);
                var d = qb(b, a);
                d && d.length && B.removeClass(this.$$element, d);
              },
              $set: function (a, b, c, d) {
                var g,
                  h = this.$$element[0],
                  i = Va(h, a),
                  j = Wa(a),
                  k = a;
                if (
                  (i
                    ? (this.$$element.prop(a, b), (d = i))
                    : j && ((this[j] = b), (k = j)),
                  (this[a] = b),
                  d
                    ? (this.$attr[a] = d)
                    : ((d = this.$attr[a]),
                      d || (this.$attr[a] = d = ka(a, "-"))),
                  (g = N(this.$$element)),
                  ("a" === g && ("href" === a || "xlinkHref" === a)) ||
                    ("img" === g && "src" === a))
                )
                  this[a] = b = C(b, "src" === a);
                else if ("img" === g && "srcset" === a) {
                  for (
                    var l = "",
                      m = Vd(b),
                      n = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,
                      o = /\s/.test(m) ? n : /(,)/,
                      p = m.split(o),
                      q = Math.floor(p.length / 2),
                      r = 0;
                    q > r;
                    r++
                  ) {
                    var s = 2 * r;
                    (l += C(Vd(p[s]), !0)), (l += " " + Vd(p[s + 1]));
                  }
                  var u = Vd(p[2 * r]).split(/\s/);
                  (l += C(Vd(u[0]), !0)),
                    2 === u.length && (l += " " + Vd(u[1])),
                    (this[a] = b = l);
                }
                c !== !1 &&
                  (null === b || t(b)
                    ? this.$$element.removeAttr(d)
                    : ia.test(d)
                    ? this.$$element.attr(d, b)
                    : E(this.$$element[0], d, b));
                var v = this.$$observers;
                v &&
                  f(v[k], function (a) {
                    try {
                      a(b);
                    } catch (c) {
                      e(c);
                    }
                  });
              },
              $observe: function (a, b) {
                var c = this,
                  d = c.$$observers || (c.$$observers = ra()),
                  e = d[a] || (d[a] = []);
                return (
                  e.push(b),
                  r.$evalAsync(function () {
                    e.$$inter || !c.hasOwnProperty(a) || t(c[a]) || b(c[a]);
                  }),
                  function () {
                    O(e, b);
                  }
                );
              },
            };
            var na = d.startSymbol(),
              oa = d.endSymbol(),
              pa =
                "{{" == na && "}}" == oa
                  ? q
                  : function (a) {
                      return a.replace(/\{\{/g, na).replace(/}}/g, oa);
                    },
              qa = /^ngAttr[A-Z]/,
              sa = /^(.+)Start$/;
            return (
              (G.$$addBindingInfo = z
                ? function (a, b) {
                    var c = a.data("$binding") || [];
                    Td(b) ? (c = c.concat(b)) : c.push(b),
                      a.data("$binding", c);
                  }
                : p),
              (G.$$addBindingClass = z
                ? function (a) {
                    F(a, "ng-binding");
                  }
                : p),
              (G.$$addScopeInfo = z
                ? function (a, b, c, d) {
                    var e = c
                      ? d
                        ? "$isolateScopeNoTemplate"
                        : "$isolateScope"
                      : "$scope";
                    a.data(e, b);
                  }
                : p),
              (G.$$addScopeClass = z
                ? function (a, b) {
                    F(a, b ? "ng-isolate-scope" : "ng-scope");
                  }
                : p),
              G
            );
          },
        ]);
    }
    function pb(a) {
      return xa(a.replace(Re, ""));
    }
    function qb(a, b) {
      var c = "",
        d = a.split(/\s+/),
        e = b.split(/\s+/);
      a: for (var f = 0; f < d.length; f++) {
        for (var g = d[f], h = 0; h < e.length; h++) if (g == e[h]) continue a;
        c += (c.length > 0 ? " " : "") + g;
      }
      return c;
    }
    function rb(a) {
      a = Id(a);
      var b = a.length;
      if (1 >= b) return a;
      for (; b--; ) {
        var c = a[b];
        c.nodeType === ee && Md.call(a, b, 1);
      }
      return a;
    }
    function sb(a, b) {
      if (b && x(b)) return b;
      if (x(a)) {
        var c = Te.exec(a);
        if (c) return c[3];
      }
    }
    function tb() {
      var a = {},
        b = !1;
      (this.register = function (b, c) {
        oa(b, "controller"), v(b) ? l(a, b) : (a[b] = c);
      }),
        (this.allowGlobals = function () {
          b = !0;
        }),
        (this.$get = [
          "$injector",
          "$window",
          function (e, f) {
            function g(a, b, c, e) {
              if (!a || !v(a.$scope))
                throw d("$controller")(
                  "noscp",
                  "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.",
                  e,
                  b
                );
              a.$scope[b] = c;
            }
            return function (d, h, i, j) {
              var k, m, n, o;
              if (((i = i === !0), j && x(j) && (o = j), x(d))) {
                if (((m = d.match(Te)), !m))
                  throw Se(
                    "ctrlfmt",
                    "Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.",
                    d
                  );
                (n = m[1]),
                  (o = o || m[3]),
                  (d = a.hasOwnProperty(n)
                    ? a[n]
                    : pa(h.$scope, n, !0) || (b ? pa(f, n, !0) : c)),
                  na(d, n, !0);
              }
              if (i) {
                var p = (Td(d) ? d[d.length - 1] : d).prototype;
                (k = Object.create(p || null)), o && g(h, o, k, n || d.name);
                var q;
                return (q = l(
                  function () {
                    var a = e.invoke(d, k, h, n);
                    return (
                      a !== k &&
                        (v(a) || A(a)) &&
                        ((k = a), o && g(h, o, k, n || d.name)),
                      k
                    );
                  },
                  { instance: k, identifier: o }
                ));
              }
              return (
                (k = e.instantiate(d, h, n)), o && g(h, o, k, n || d.name), k
              );
            };
          },
        ]);
    }
    function ub() {
      this.$get = [
        "$window",
        function (a) {
          return Id(a.document);
        },
      ];
    }
    function vb() {
      this.$get = [
        "$log",
        function (a) {
          return function (b, c) {
            a.error.apply(a, arguments);
          };
        },
      ];
    }
    function wb(a) {
      return v(a) ? (z(a) ? a.toISOString() : W(a)) : a;
    }
    function xb() {
      this.$get = function () {
        return function (a) {
          if (!a) return "";
          var b = [];
          return (
            g(a, function (a, c) {
              null === a ||
                t(a) ||
                (Td(a)
                  ? f(a, function (a, d) {
                      b.push(ea(c) + "=" + ea(wb(a)));
                    })
                  : b.push(ea(c) + "=" + ea(wb(a))));
            }),
            b.join("&")
          );
        };
      };
    }
    function yb() {
      this.$get = function () {
        return function (a) {
          function b(a, d, e) {
            null === a ||
              t(a) ||
              (Td(a)
                ? f(a, function (a, c) {
                    b(a, d + "[" + (v(a) ? c : "") + "]");
                  })
                : v(a) && !z(a)
                ? g(a, function (a, c) {
                    b(a, d + (e ? "" : "[") + c + (e ? "" : "]"));
                  })
                : c.push(ea(d) + "=" + ea(wb(a))));
          }
          if (!a) return "";
          var c = [];
          return b(a, "", !0), c.join("&");
        };
      };
    }
    function zb(a, b) {
      if (x(a)) {
        var c = a.replace(Ze, "").trim();
        if (c) {
          var d = b("Content-Type");
          ((d && 0 === d.indexOf(Ve)) || Ab(c)) && (a = X(c));
        }
      }
      return a;
    }
    function Ab(a) {
      var b = a.match(Xe);
      return b && Ye[b[0]].test(a);
    }
    function Bb(a) {
      function b(a, b) {
        a && (d[a] = d[a] ? d[a] + ", " + b : b);
      }
      var c,
        d = ra();
      return (
        x(a)
          ? f(a.split("\n"), function (a) {
              (c = a.indexOf(":")),
                b(Dd(Vd(a.substr(0, c))), Vd(a.substr(c + 1)));
            })
          : v(a) &&
            f(a, function (a, c) {
              b(Dd(c), Vd(a));
            }),
        d
      );
    }
    function Cb(a) {
      var b;
      return function (c) {
        if ((b || (b = Bb(a)), c)) {
          var d = b[Dd(c)];
          return void 0 === d && (d = null), d;
        }
        return b;
      };
    }
    function Db(a, b, c, d) {
      return A(d)
        ? d(a, b, c)
        : (f(d, function (d) {
            a = d(a, b, c);
          }),
          a);
    }
    function Eb(a) {
      return a >= 200 && 300 > a;
    }
    function Fb() {
      var a = (this.defaults = {
          transformResponse: [zb],
          transformRequest: [
            function (a) {
              return !v(a) || E(a) || G(a) || F(a) ? a : W(a);
            },
          ],
          headers: {
            common: { Accept: "application/json, text/plain, */*" },
            post: Q(We),
            put: Q(We),
            patch: Q(We),
          },
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          paramSerializer: "$httpParamSerializer",
        }),
        b = !1;
      this.useApplyAsync = function (a) {
        return u(a) ? ((b = !!a), this) : b;
      };
      var e = !0;
      this.useLegacyPromiseExtensions = function (a) {
        return u(a) ? ((e = !!a), this) : e;
      };
      var g = (this.interceptors = []);
      this.$get = [
        "$httpBackend",
        "$$cookieReader",
        "$cacheFactory",
        "$rootScope",
        "$q",
        "$injector",
        function (h, i, j, k, m, n) {
          function o(b) {
            function g(a) {
              var b = l({}, a);
              return (
                (b.data = Db(a.data, a.headers, a.status, j.transformResponse)),
                Eb(a.status) ? b : m.reject(b)
              );
            }
            function h(a, b) {
              var c,
                d = {};
              return (
                f(a, function (a, e) {
                  A(a) ? ((c = a(b)), null != c && (d[e] = c)) : (d[e] = a);
                }),
                d
              );
            }
            function i(b) {
              var c,
                d,
                e,
                f = a.headers,
                g = l({}, b.headers);
              f = l({}, f.common, f[Dd(b.method)]);
              a: for (c in f) {
                d = Dd(c);
                for (e in g) if (Dd(e) === d) continue a;
                g[c] = f[c];
              }
              return h(g, Q(b));
            }
            if (!v(b))
              throw d("$http")(
                "badreq",
                "Http request configuration must be an object.  Received: {0}",
                b
              );
            if (!x(b.url))
              throw d("$http")(
                "badreq",
                "Http request configuration url must be a string.  Received: {0}",
                b.url
              );
            var j = l(
              {
                method: "get",
                transformRequest: a.transformRequest,
                transformResponse: a.transformResponse,
                paramSerializer: a.paramSerializer,
              },
              b
            );
            (j.headers = i(b)),
              (j.method = Ed(j.method)),
              (j.paramSerializer = x(j.paramSerializer)
                ? n.get(j.paramSerializer)
                : j.paramSerializer);
            var k = function (b) {
                var d = b.headers,
                  e = Db(b.data, Cb(d), c, b.transformRequest);
                return (
                  t(e) &&
                    f(d, function (a, b) {
                      "content-type" === Dd(b) && delete d[b];
                    }),
                  t(b.withCredentials) &&
                    !t(a.withCredentials) &&
                    (b.withCredentials = a.withCredentials),
                  r(b, e).then(g, g)
                );
              },
              o = [k, c],
              p = m.when(j);
            for (
              f(y, function (a) {
                (a.request || a.requestError) &&
                  o.unshift(a.request, a.requestError),
                  (a.response || a.responseError) &&
                    o.push(a.response, a.responseError);
              });
              o.length;

            ) {
              var q = o.shift(),
                s = o.shift();
              p = p.then(q, s);
            }
            return (
              e
                ? ((p.success = function (a) {
                    return (
                      na(a, "fn"),
                      p.then(function (b) {
                        a(b.data, b.status, b.headers, j);
                      }),
                      p
                    );
                  }),
                  (p.error = function (a) {
                    return (
                      na(a, "fn"),
                      p.then(null, function (b) {
                        a(b.data, b.status, b.headers, j);
                      }),
                      p
                    );
                  }))
                : ((p.success = _e("success")), (p.error = _e("error"))),
              p
            );
          }
          function p(a) {
            f(arguments, function (a) {
              o[a] = function (b, c) {
                return o(l({}, c || {}, { method: a, url: b }));
              };
            });
          }
          function q(a) {
            f(arguments, function (a) {
              o[a] = function (b, c, d) {
                return o(l({}, d || {}, { method: a, url: b, data: c }));
              };
            });
          }
          function r(d, e) {
            function f(a, c, d, e) {
              function f() {
                g(c, a, d, e);
              }
              n && (Eb(a) ? n.put(y, [a, c, Bb(d), e]) : n.remove(y)),
                b ? k.$applyAsync(f) : (f(), k.$$phase || k.$apply());
            }
            function g(a, b, c, e) {
              (b = b >= -1 ? b : 0),
                (Eb(b) ? q.resolve : q.reject)({
                  data: a,
                  status: b,
                  headers: Cb(c),
                  config: d,
                  statusText: e,
                });
            }
            function j(a) {
              g(a.data, a.status, Q(a.headers()), a.statusText);
            }
            function l() {
              var a = o.pendingRequests.indexOf(d);
              -1 !== a && o.pendingRequests.splice(a, 1);
            }
            var n,
              p,
              q = m.defer(),
              r = q.promise,
              x = d.headers,
              y = s(d.url, d.paramSerializer(d.params));
            if (
              (o.pendingRequests.push(d),
              r.then(l, l),
              (!d.cache && !a.cache) ||
                d.cache === !1 ||
                ("GET" !== d.method && "JSONP" !== d.method) ||
                (n = v(d.cache) ? d.cache : v(a.cache) ? a.cache : w),
              n &&
                ((p = n.get(y)),
                u(p)
                  ? I(p)
                    ? p.then(j, j)
                    : Td(p)
                    ? g(p[1], p[0], Q(p[2]), p[3])
                    : g(p, 200, {}, "OK")
                  : n.put(y, r)),
              t(p))
            ) {
              var z = Gc(d.url) ? i()[d.xsrfCookieName || a.xsrfCookieName] : c;
              z && (x[d.xsrfHeaderName || a.xsrfHeaderName] = z),
                h(
                  d.method,
                  y,
                  e,
                  f,
                  x,
                  d.timeout,
                  d.withCredentials,
                  d.responseType
                );
            }
            return r;
          }
          function s(a, b) {
            return (
              b.length > 0 && (a += (-1 == a.indexOf("?") ? "?" : "&") + b), a
            );
          }
          var w = j("$http");
          a.paramSerializer = x(a.paramSerializer)
            ? n.get(a.paramSerializer)
            : a.paramSerializer;
          var y = [];
          return (
            f(g, function (a) {
              y.unshift(x(a) ? n.get(a) : n.invoke(a));
            }),
            (o.pendingRequests = []),
            p("get", "delete", "head", "jsonp"),
            q("post", "put", "patch"),
            (o.defaults = a),
            o
          );
        },
      ];
    }
    function Gb() {
      this.$get = function () {
        return function () {
          return new a.XMLHttpRequest();
        };
      };
    }
    function Hb() {
      this.$get = [
        "$browser",
        "$window",
        "$document",
        "$xhrFactory",
        function (a, b, c, d) {
          return Ib(a, d, a.defer, b.angular.callbacks, c[0]);
        },
      ];
    }
    function Ib(a, b, c, d, e) {
      function g(a, b, c) {
        var f = e.createElement("script"),
          g = null;
        return (
          (f.type = "text/javascript"),
          (f.src = a),
          (f.async = !0),
          (g = function (a) {
            le(f, "load", g),
              le(f, "error", g),
              e.body.removeChild(f),
              (f = null);
            var h = -1,
              i = "unknown";
            a &&
              ("load" !== a.type || d[b].called || (a = { type: "error" }),
              (i = a.type),
              (h = "error" === a.type ? 404 : 200)),
              c && c(h, i);
          }),
          ke(f, "load", g),
          ke(f, "error", g),
          e.body.appendChild(f),
          g
        );
      }
      return function (e, h, i, j, k, l, m, n) {
        function o() {
          s && s(), v && v.abort();
        }
        function q(b, d, e, f, g) {
          u(y) && c.cancel(y),
            (s = v = null),
            b(d, e, f, g),
            a.$$completeOutstandingRequest(p);
        }
        if (
          (a.$$incOutstandingRequestCount(),
          (h = h || a.url()),
          "jsonp" == Dd(e))
        ) {
          var r = "_" + (d.counter++).toString(36);
          d[r] = function (a) {
            (d[r].data = a), (d[r].called = !0);
          };
          var s = g(
            h.replace("JSON_CALLBACK", "angular.callbacks." + r),
            r,
            function (a, b) {
              q(j, a, d[r].data, "", b), (d[r] = p);
            }
          );
        } else {
          var v = b(e, h);
          v.open(e, h, !0),
            f(k, function (a, b) {
              u(a) && v.setRequestHeader(b, a);
            }),
            (v.onload = function () {
              var a = v.statusText || "",
                b = "response" in v ? v.response : v.responseText,
                c = 1223 === v.status ? 204 : v.status;
              0 === c && (c = b ? 200 : "file" == Fc(h).protocol ? 404 : 0),
                q(j, c, b, v.getAllResponseHeaders(), a);
            });
          var w = function () {
            q(j, -1, null, null, "");
          };
          if (
            ((v.onerror = w), (v.onabort = w), m && (v.withCredentials = !0), n)
          )
            try {
              v.responseType = n;
            } catch (x) {
              if ("json" !== n) throw x;
            }
          v.send(t(i) ? null : i);
        }
        if (l > 0) var y = c(o, l);
        else I(l) && l.then(o);
      };
    }
    function Jb() {
      var a = "{{",
        b = "}}";
      (this.startSymbol = function (b) {
        return b ? ((a = b), this) : a;
      }),
        (this.endSymbol = function (a) {
          return a ? ((b = a), this) : b;
        }),
        (this.$get = [
          "$parse",
          "$exceptionHandler",
          "$sce",
          function (c, d, e) {
            function f(a) {
              return "\\\\\\" + a;
            }
            function g(c) {
              return c.replace(n, a).replace(o, b);
            }
            function h(a) {
              if (null == a) return "";
              switch (typeof a) {
                case "string":
                  break;
                case "number":
                  a = "" + a;
                  break;
                default:
                  a = W(a);
              }
              return a;
            }
            function i(a, b, c, d) {
              var e;
              return (e = a.$watch(
                function (a) {
                  return e(), d(a);
                },
                b,
                c
              ));
            }
            function j(f, j, n, o) {
              function p(a) {
                try {
                  return (a = G(a)), o && !u(a) ? a : h(a);
                } catch (b) {
                  d(af.interr(f, b));
                }
              }
              if (!f.length || -1 === f.indexOf(a)) {
                var q;
                if (!j) {
                  var s = g(f);
                  (q = r(s)),
                    (q.exp = f),
                    (q.expressions = []),
                    (q.$$watchDelegate = i);
                }
                return q;
              }
              o = !!o;
              for (
                var v,
                  w,
                  x,
                  y = 0,
                  z = [],
                  B = [],
                  C = f.length,
                  D = [],
                  E = [];
                C > y;

              ) {
                if (
                  -1 == (v = f.indexOf(a, y)) ||
                  -1 == (w = f.indexOf(b, v + k))
                ) {
                  y !== C && D.push(g(f.substring(y)));
                  break;
                }
                y !== v && D.push(g(f.substring(y, v))),
                  (x = f.substring(v + k, w)),
                  z.push(x),
                  B.push(c(x, p)),
                  (y = w + m),
                  E.push(D.length),
                  D.push("");
              }
              if ((n && D.length > 1 && af.throwNoconcat(f), !j || z.length)) {
                var F = function (a) {
                    for (var b = 0, c = z.length; c > b; b++) {
                      if (o && t(a[b])) return;
                      D[E[b]] = a[b];
                    }
                    return D.join("");
                  },
                  G = function (a) {
                    return n ? e.getTrusted(n, a) : e.valueOf(a);
                  };
                return l(
                  function (a) {
                    var b = 0,
                      c = z.length,
                      e = new Array(c);
                    try {
                      for (; c > b; b++) e[b] = B[b](a);
                      return F(e);
                    } catch (g) {
                      d(af.interr(f, g));
                    }
                  },
                  {
                    exp: f,
                    expressions: z,
                    $$watchDelegate: function (a, b) {
                      var c;
                      return a.$watchGroup(B, function (d, e) {
                        var f = F(d);
                        A(b) && b.call(this, f, d !== e ? c : f, a), (c = f);
                      });
                    },
                  }
                );
              }
            }
            var k = a.length,
              m = b.length,
              n = new RegExp(a.replace(/./g, f), "g"),
              o = new RegExp(b.replace(/./g, f), "g");
            return (
              (j.startSymbol = function () {
                return a;
              }),
              (j.endSymbol = function () {
                return b;
              }),
              j
            );
          },
        ]);
    }
    function Kb() {
      this.$get = [
        "$rootScope",
        "$window",
        "$q",
        "$$q",
        "$browser",
        function (a, b, c, d, e) {
          function f(f, h, i, j) {
            function k() {
              l ? f.apply(null, m) : f(p);
            }
            var l = arguments.length > 4,
              m = l ? T(arguments, 4) : [],
              n = b.setInterval,
              o = b.clearInterval,
              p = 0,
              q = u(j) && !j,
              r = (q ? d : c).defer(),
              s = r.promise;
            return (
              (i = u(i) ? i : 0),
              (s.$$intervalId = n(function () {
                q ? e.defer(k) : a.$evalAsync(k),
                  r.notify(p++),
                  i > 0 &&
                    p >= i &&
                    (r.resolve(p), o(s.$$intervalId), delete g[s.$$intervalId]),
                  q || a.$apply();
              }, h)),
              (g[s.$$intervalId] = r),
              s
            );
          }
          var g = {};
          return (
            (f.cancel = function (a) {
              return a && a.$$intervalId in g
                ? (g[a.$$intervalId].reject("canceled"),
                  b.clearInterval(a.$$intervalId),
                  delete g[a.$$intervalId],
                  !0)
                : !1;
            }),
            f
          );
        },
      ];
    }
    function Lb(a) {
      for (var b = a.split("/"), c = b.length; c--; ) b[c] = da(b[c]);
      return b.join("/");
    }
    function Mb(a, b) {
      var c = Fc(a);
      (b.$$protocol = c.protocol),
        (b.$$host = c.hostname),
        (b.$$port = n(c.port) || cf[c.protocol] || null);
    }
    function Nb(a, b) {
      var c = "/" !== a.charAt(0);
      c && (a = "/" + a);
      var d = Fc(a);
      (b.$$path = decodeURIComponent(
        c && "/" === d.pathname.charAt(0) ? d.pathname.substring(1) : d.pathname
      )),
        (b.$$search = ba(d.search)),
        (b.$$hash = decodeURIComponent(d.hash)),
        b.$$path && "/" != b.$$path.charAt(0) && (b.$$path = "/" + b.$$path);
    }
    function Ob(a, b) {
      return 0 === b.indexOf(a) ? b.substr(a.length) : void 0;
    }
    function Pb(a) {
      var b = a.indexOf("#");
      return -1 == b ? a : a.substr(0, b);
    }
    function Qb(a) {
      return a.replace(/(#.+)|#$/, "$1");
    }
    function Rb(a) {
      return a.substr(0, Pb(a).lastIndexOf("/") + 1);
    }
    function Sb(a) {
      return a.substring(0, a.indexOf("/", a.indexOf("//") + 2));
    }
    function Tb(a, b, c) {
      (this.$$html5 = !0),
        (c = c || ""),
        Mb(a, this),
        (this.$$parse = function (a) {
          var c = Ob(b, a);
          if (!x(c))
            throw df(
              "ipthprfx",
              'Invalid url "{0}", missing path prefix "{1}".',
              a,
              b
            );
          Nb(c, this), this.$$path || (this.$$path = "/"), this.$$compose();
        }),
        (this.$$compose = function () {
          var a = ca(this.$$search),
            c = this.$$hash ? "#" + da(this.$$hash) : "";
          (this.$$url = Lb(this.$$path) + (a ? "?" + a : "") + c),
            (this.$$absUrl = b + this.$$url.substr(1));
        }),
        (this.$$parseLinkUrl = function (d, e) {
          if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
          var f, g, h;
          return (
            u((f = Ob(a, d)))
              ? ((g = f),
                (h = u((f = Ob(c, f))) ? b + (Ob("/", f) || f) : a + g))
              : u((f = Ob(b, d)))
              ? (h = b + f)
              : b == d + "/" && (h = b),
            h && this.$$parse(h),
            !!h
          );
        });
    }
    function Ub(a, b, c) {
      Mb(a, this),
        (this.$$parse = function (d) {
          function e(a, b, c) {
            var d,
              e = /^\/[A-Z]:(\/.*)/;
            return (
              0 === b.indexOf(c) && (b = b.replace(c, "")),
              e.exec(b) ? a : ((d = e.exec(a)), d ? d[1] : a)
            );
          }
          var f,
            g = Ob(a, d) || Ob(b, d);
          t(g) || "#" !== g.charAt(0)
            ? this.$$html5
              ? (f = g)
              : ((f = ""), t(g) && ((a = d), this.replace()))
            : ((f = Ob(c, g)), t(f) && (f = g)),
            Nb(f, this),
            (this.$$path = e(this.$$path, f, a)),
            this.$$compose();
        }),
        (this.$$compose = function () {
          var b = ca(this.$$search),
            d = this.$$hash ? "#" + da(this.$$hash) : "";
          (this.$$url = Lb(this.$$path) + (b ? "?" + b : "") + d),
            (this.$$absUrl = a + (this.$$url ? c + this.$$url : ""));
        }),
        (this.$$parseLinkUrl = function (b, c) {
          return Pb(a) == Pb(b) ? (this.$$parse(b), !0) : !1;
        });
    }
    function Vb(a, b, c) {
      (this.$$html5 = !0),
        Ub.apply(this, arguments),
        (this.$$parseLinkUrl = function (d, e) {
          if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
          var f, g;
          return (
            a == Pb(d)
              ? (f = d)
              : (g = Ob(b, d))
              ? (f = a + c + g)
              : b === d + "/" && (f = b),
            f && this.$$parse(f),
            !!f
          );
        }),
        (this.$$compose = function () {
          var b = ca(this.$$search),
            d = this.$$hash ? "#" + da(this.$$hash) : "";
          (this.$$url = Lb(this.$$path) + (b ? "?" + b : "") + d),
            (this.$$absUrl = a + c + this.$$url);
        });
    }
    function Wb(a) {
      return function () {
        return this[a];
      };
    }
    function Xb(a, b) {
      return function (c) {
        return t(c) ? this[a] : ((this[a] = b(c)), this.$$compose(), this);
      };
    }
    function Yb() {
      var a = "",
        b = { enabled: !1, requireBase: !0, rewriteLinks: !0 };
      (this.hashPrefix = function (b) {
        return u(b) ? ((a = b), this) : a;
      }),
        (this.html5Mode = function (a) {
          return H(a)
            ? ((b.enabled = a), this)
            : v(a)
            ? (H(a.enabled) && (b.enabled = a.enabled),
              H(a.requireBase) && (b.requireBase = a.requireBase),
              H(a.rewriteLinks) && (b.rewriteLinks = a.rewriteLinks),
              this)
            : b;
        }),
        (this.$get = [
          "$rootScope",
          "$browser",
          "$sniffer",
          "$rootElement",
          "$window",
          function (c, d, e, f, g) {
            function h(a, b, c) {
              var e = j.url(),
                f = j.$$state;
              try {
                d.url(a, b, c), (j.$$state = d.state());
              } catch (g) {
                throw (j.url(e), (j.$$state = f), g);
              }
            }
            function i(a, b) {
              c.$broadcast(
                "$locationChangeSuccess",
                j.absUrl(),
                a,
                j.$$state,
                b
              );
            }
            var j,
              k,
              l,
              m = d.baseHref(),
              n = d.url();
            if (b.enabled) {
              if (!m && b.requireBase)
                throw df(
                  "nobase",
                  "$location in HTML5 mode requires a <base> tag to be present!"
                );
              (l = Sb(n) + (m || "/")), (k = e.history ? Tb : Vb);
            } else (l = Pb(n)), (k = Ub);
            var o = Rb(l);
            (j = new k(l, o, "#" + a)),
              j.$$parseLinkUrl(n, n),
              (j.$$state = d.state());
            var p = /^\s*(javascript|mailto):/i;
            f.on("click", function (a) {
              if (
                b.rewriteLinks &&
                !a.ctrlKey &&
                !a.metaKey &&
                !a.shiftKey &&
                2 != a.which &&
                2 != a.button
              ) {
                for (var e = Id(a.target); "a" !== N(e[0]); )
                  if (e[0] === f[0] || !(e = e.parent())[0]) return;
                var h = e.prop("href"),
                  i = e.attr("href") || e.attr("xlink:href");
                v(h) &&
                  "[object SVGAnimatedString]" === h.toString() &&
                  (h = Fc(h.animVal).href),
                  p.test(h) ||
                    !h ||
                    e.attr("target") ||
                    a.isDefaultPrevented() ||
                    (j.$$parseLinkUrl(h, i) &&
                      (a.preventDefault(),
                      j.absUrl() != d.url() &&
                        (c.$apply(),
                        (g.angular["ff-684208-preventDefault"] = !0))));
              }
            }),
              Qb(j.absUrl()) != Qb(n) && d.url(j.absUrl(), !0);
            var q = !0;
            return (
              d.onUrlChange(function (a, b) {
                return t(Ob(o, a))
                  ? void (g.location.href = a)
                  : (c.$evalAsync(function () {
                      var d,
                        e = j.absUrl(),
                        f = j.$$state;
                      (a = Qb(a)),
                        j.$$parse(a),
                        (j.$$state = b),
                        (d = c.$broadcast(
                          "$locationChangeStart",
                          a,
                          e,
                          b,
                          f
                        ).defaultPrevented),
                        j.absUrl() === a &&
                          (d
                            ? (j.$$parse(e), (j.$$state = f), h(e, !1, f))
                            : ((q = !1), i(e, f)));
                    }),
                    void (c.$$phase || c.$digest()));
              }),
              c.$watch(function () {
                var a = Qb(d.url()),
                  b = Qb(j.absUrl()),
                  f = d.state(),
                  g = j.$$replace,
                  k = a !== b || (j.$$html5 && e.history && f !== j.$$state);
                (q || k) &&
                  ((q = !1),
                  c.$evalAsync(function () {
                    var b = j.absUrl(),
                      d = c.$broadcast(
                        "$locationChangeStart",
                        b,
                        a,
                        j.$$state,
                        f
                      ).defaultPrevented;
                    j.absUrl() === b &&
                      (d
                        ? (j.$$parse(a), (j.$$state = f))
                        : (k && h(b, g, f === j.$$state ? null : j.$$state),
                          i(a, f)));
                  })),
                  (j.$$replace = !1);
              }),
              j
            );
          },
        ]);
    }
    function Zb() {
      var a = !0,
        b = this;
      (this.debugEnabled = function (b) {
        return u(b) ? ((a = b), this) : a;
      }),
        (this.$get = [
          "$window",
          function (c) {
            function d(a) {
              return (
                a instanceof Error &&
                  (a.stack
                    ? (a =
                        a.message && -1 === a.stack.indexOf(a.message)
                          ? "Error: " + a.message + "\n" + a.stack
                          : a.stack)
                    : a.sourceURL &&
                      (a = a.message + "\n" + a.sourceURL + ":" + a.line)),
                a
              );
            }
            function e(a) {
              var b = c.console || {},
                e = b[a] || b.log || p,
                g = !1;
              try {
                g = !!e.apply;
              } catch (h) {}
              return g
                ? function () {
                    var a = [];
                    return (
                      f(arguments, function (b) {
                        a.push(d(b));
                      }),
                      e.apply(b, a)
                    );
                  }
                : function (a, b) {
                    e(a, null == b ? "" : b);
                  };
            }
            return {
              log: e("log"),
              info: e("info"),
              warn: e("warn"),
              error: e("error"),
              debug: (function () {
                var c = e("debug");
                return function () {
                  a && c.apply(b, arguments);
                };
              })(),
            };
          },
        ]);
    }
    function $b(a, b) {
      if (
        "__defineGetter__" === a ||
        "__defineSetter__" === a ||
        "__lookupGetter__" === a ||
        "__lookupSetter__" === a ||
        "__proto__" === a
      )
        throw ff(
          "isecfld",
          "Attempting to access a disallowed field in Angular expressions! Expression: {0}",
          b
        );
      return a;
    }
    function _b(a) {
      return a + "";
    }
    function ac(a, b) {
      if (a) {
        if (a.constructor === a)
          throw ff(
            "isecfn",
            "Referencing Function in Angular expressions is disallowed! Expression: {0}",
            b
          );
        if (a.window === a)
          throw ff(
            "isecwindow",
            "Referencing the Window in Angular expressions is disallowed! Expression: {0}",
            b
          );
        if (a.children && (a.nodeName || (a.prop && a.attr && a.find)))
          throw ff(
            "isecdom",
            "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}",
            b
          );
        if (a === Object)
          throw ff(
            "isecobj",
            "Referencing Object in Angular expressions is disallowed! Expression: {0}",
            b
          );
      }
      return a;
    }
    function bc(a, b) {
      if (a) {
        if (a.constructor === a)
          throw ff(
            "isecfn",
            "Referencing Function in Angular expressions is disallowed! Expression: {0}",
            b
          );
        if (a === gf || a === hf || a === jf)
          throw ff(
            "isecff",
            "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}",
            b
          );
      }
    }
    function cc(a, b) {
      if (
        a &&
        (a === (0).constructor ||
          a === (!1).constructor ||
          a === "".constructor ||
          a === {}.constructor ||
          a === [].constructor ||
          a === Function.constructor)
      )
        throw ff(
          "isecaf",
          "Assigning to a constructor is disallowed! Expression: {0}",
          b
        );
    }
    function dc(a, b) {
      return "undefined" != typeof a ? a : b;
    }
    function ec(a, b) {
      return "undefined" == typeof a ? b : "undefined" == typeof b ? a : a + b;
    }
    function fc(a, b) {
      var c = a(b);
      return !c.$stateful;
    }
    function gc(a, b) {
      var c, d;
      switch (a.type) {
        case nf.Program:
          (c = !0),
            f(a.body, function (a) {
              gc(a.expression, b), (c = c && a.expression.constant);
            }),
            (a.constant = c);
          break;
        case nf.Literal:
          (a.constant = !0), (a.toWatch = []);
          break;
        case nf.UnaryExpression:
          gc(a.argument, b),
            (a.constant = a.argument.constant),
            (a.toWatch = a.argument.toWatch);
          break;
        case nf.BinaryExpression:
          gc(a.left, b),
            gc(a.right, b),
            (a.constant = a.left.constant && a.right.constant),
            (a.toWatch = a.left.toWatch.concat(a.right.toWatch));
          break;
        case nf.LogicalExpression:
          gc(a.left, b),
            gc(a.right, b),
            (a.constant = a.left.constant && a.right.constant),
            (a.toWatch = a.constant ? [] : [a]);
          break;
        case nf.ConditionalExpression:
          gc(a.test, b),
            gc(a.alternate, b),
            gc(a.consequent, b),
            (a.constant =
              a.test.constant && a.alternate.constant && a.consequent.constant),
            (a.toWatch = a.constant ? [] : [a]);
          break;
        case nf.Identifier:
          (a.constant = !1), (a.toWatch = [a]);
          break;
        case nf.MemberExpression:
          gc(a.object, b),
            a.computed && gc(a.property, b),
            (a.constant =
              a.object.constant && (!a.computed || a.property.constant)),
            (a.toWatch = [a]);
          break;
        case nf.CallExpression:
          (c = a.filter ? fc(b, a.callee.name) : !1),
            (d = []),
            f(a.arguments, function (a) {
              gc(a, b),
                (c = c && a.constant),
                a.constant || d.push.apply(d, a.toWatch);
            }),
            (a.constant = c),
            (a.toWatch = a.filter && fc(b, a.callee.name) ? d : [a]);
          break;
        case nf.AssignmentExpression:
          gc(a.left, b),
            gc(a.right, b),
            (a.constant = a.left.constant && a.right.constant),
            (a.toWatch = [a]);
          break;
        case nf.ArrayExpression:
          (c = !0),
            (d = []),
            f(a.elements, function (a) {
              gc(a, b),
                (c = c && a.constant),
                a.constant || d.push.apply(d, a.toWatch);
            }),
            (a.constant = c),
            (a.toWatch = d);
          break;
        case nf.ObjectExpression:
          (c = !0),
            (d = []),
            f(a.properties, function (a) {
              gc(a.value, b),
                (c = c && a.value.constant),
                a.value.constant || d.push.apply(d, a.value.toWatch);
            }),
            (a.constant = c),
            (a.toWatch = d);
          break;
        case nf.ThisExpression:
          (a.constant = !1), (a.toWatch = []);
          break;
        case nf.LocalsExpression:
          (a.constant = !1), (a.toWatch = []);
      }
    }
    function hc(a) {
      if (1 == a.length) {
        var b = a[0].expression,
          d = b.toWatch;
        return 1 !== d.length ? d : d[0] !== b ? d : c;
      }
    }
    function ic(a) {
      return a.type === nf.Identifier || a.type === nf.MemberExpression;
    }
    function jc(a) {
      return 1 === a.body.length && ic(a.body[0].expression)
        ? {
            type: nf.AssignmentExpression,
            left: a.body[0].expression,
            right: { type: nf.NGValueParameter },
            operator: "=",
          }
        : void 0;
    }
    function kc(a) {
      return (
        0 === a.body.length ||
        (1 === a.body.length &&
          (a.body[0].expression.type === nf.Literal ||
            a.body[0].expression.type === nf.ArrayExpression ||
            a.body[0].expression.type === nf.ObjectExpression))
      );
    }
    function lc(a) {
      return a.constant;
    }
    function mc(a, b) {
      (this.astBuilder = a), (this.$filter = b);
    }
    function nc(a, b) {
      (this.astBuilder = a), (this.$filter = b);
    }
    function oc(a) {
      return "constructor" == a;
    }
    function pc(a) {
      return A(a.valueOf) ? a.valueOf() : pf.call(a);
    }
    function qc() {
      var a = ra(),
        b = ra();
      this.$get = [
        "$filter",
        function (d) {
          function e(c, e, f) {
            var h, n, s;
            switch (((f = f || r), typeof c)) {
              case "string":
                (c = c.trim()), (s = c);
                var t = f ? b : a;
                if (((h = t[s]), !h)) {
                  ":" === c.charAt(0) &&
                    ":" === c.charAt(1) &&
                    ((n = !0), (c = c.substring(2)));
                  var u = f ? q : o,
                    v = new mf(u),
                    w = new of(v, d, u);
                  (h = w.parse(c)),
                    h.constant
                      ? (h.$$watchDelegate = l)
                      : n
                      ? (h.$$watchDelegate = h.literal ? k : j)
                      : h.inputs && (h.$$watchDelegate = i),
                    f && (h = g(h)),
                    (t[s] = h);
                }
                return m(h, e);
              case "function":
                return m(c, e);
              default:
                return m(p, e);
            }
          }
          function g(a) {
            function b(b, c, d, e) {
              var f = r;
              r = !0;
              try {
                return a(b, c, d, e);
              } finally {
                r = f;
              }
            }
            if (!a) return a;
            (b.$$watchDelegate = a.$$watchDelegate),
              (b.assign = g(a.assign)),
              (b.constant = a.constant),
              (b.literal = a.literal);
            for (var c = 0; a.inputs && c < a.inputs.length; ++c)
              a.inputs[c] = g(a.inputs[c]);
            return (b.inputs = a.inputs), b;
          }
          function h(a, b) {
            return null == a || null == b
              ? a === b
              : "object" == typeof a && ((a = pc(a)), "object" == typeof a)
              ? !1
              : a === b || (a !== a && b !== b);
          }
          function i(a, b, d, e, f) {
            var g,
              i = e.inputs;
            if (1 === i.length) {
              var j = h;
              return (
                (i = i[0]),
                a.$watch(
                  function (a) {
                    var b = i(a);
                    return (
                      h(b, j) || ((g = e(a, c, c, [b])), (j = b && pc(b))), g
                    );
                  },
                  b,
                  d,
                  f
                )
              );
            }
            for (var k = [], l = [], m = 0, n = i.length; n > m; m++)
              (k[m] = h), (l[m] = null);
            return a.$watch(
              function (a) {
                for (var b = !1, d = 0, f = i.length; f > d; d++) {
                  var j = i[d](a);
                  (b || (b = !h(j, k[d]))) && ((l[d] = j), (k[d] = j && pc(j)));
                }
                return b && (g = e(a, c, c, l)), g;
              },
              b,
              d,
              f
            );
          }
          function j(a, b, c, d) {
            var e, f;
            return (e = a.$watch(
              function (a) {
                return d(a);
              },
              function (a, c, d) {
                (f = a),
                  A(b) && b.apply(this, arguments),
                  u(a) &&
                    d.$$postDigest(function () {
                      u(f) && e();
                    });
              },
              c
            ));
          }
          function k(a, b, c, d) {
            function e(a) {
              var b = !0;
              return (
                f(a, function (a) {
                  u(a) || (b = !1);
                }),
                b
              );
            }
            var g, h;
            return (g = a.$watch(
              function (a) {
                return d(a);
              },
              function (a, c, d) {
                (h = a),
                  A(b) && b.call(this, a, c, d),
                  e(a) &&
                    d.$$postDigest(function () {
                      e(h) && g();
                    });
              },
              c
            ));
          }
          function l(a, b, c, d) {
            var e;
            return (e = a.$watch(
              function (a) {
                return e(), d(a);
              },
              b,
              c
            ));
          }
          function m(a, b) {
            if (!b) return a;
            var c = a.$$watchDelegate,
              d = !1,
              e = c !== k && c !== j,
              f = e
                ? function (c, e, f, g) {
                    var h = d && g ? g[0] : a(c, e, f, g);
                    return b(h, c, e);
                  }
                : function (c, d, e, f) {
                    var g = a(c, d, e, f),
                      h = b(g, c, d);
                    return u(g) ? h : g;
                  };
            return (
              a.$$watchDelegate && a.$$watchDelegate !== i
                ? (f.$$watchDelegate = a.$$watchDelegate)
                : b.$stateful ||
                  ((f.$$watchDelegate = i),
                  (d = !a.inputs),
                  (f.inputs = a.inputs ? a.inputs : [a])),
              f
            );
          }
          var n = Xd().noUnsafeEval,
            o = { csp: n, expensiveChecks: !1 },
            q = { csp: n, expensiveChecks: !0 },
            r = !1;
          return (
            (e.$$runningExpensiveChecks = function () {
              return r;
            }),
            e
          );
        },
      ];
    }
    function rc() {
      this.$get = [
        "$rootScope",
        "$exceptionHandler",
        function (a, b) {
          return tc(function (b) {
            a.$evalAsync(b);
          }, b);
        },
      ];
    }
    function sc() {
      this.$get = [
        "$browser",
        "$exceptionHandler",
        function (a, b) {
          return tc(function (b) {
            a.defer(b);
          }, b);
        },
      ];
    }
    function tc(a, b) {
      function e() {
        this.$$state = { status: 0 };
      }
      function g(a, b) {
        return function (c) {
          b.call(a, c);
        };
      }
      function h(a) {
        var d, e, f;
        (f = a.pending), (a.processScheduled = !1), (a.pending = c);
        for (var g = 0, h = f.length; h > g; ++g) {
          (e = f[g][0]), (d = f[g][a.status]);
          try {
            A(d)
              ? e.resolve(d(a.value))
              : 1 === a.status
              ? e.resolve(a.value)
              : e.reject(a.value);
          } catch (i) {
            e.reject(i), b(i);
          }
        }
      }
      function i(b) {
        !b.processScheduled &&
          b.pending &&
          ((b.processScheduled = !0),
          a(function () {
            h(b);
          }));
      }
      function j() {
        this.promise = new e();
      }
      function k(a) {
        var b = new j(),
          c = 0,
          d = Td(a) ? [] : {};
        return (
          f(a, function (a, e) {
            c++,
              r(a).then(
                function (a) {
                  d.hasOwnProperty(e) || ((d[e] = a), --c || b.resolve(d));
                },
                function (a) {
                  d.hasOwnProperty(e) || b.reject(a);
                }
              );
          }),
          0 === c && b.resolve(d),
          b.promise
        );
      }
      var m = d("$q", TypeError),
        n = function () {
          var a = new j();
          return (
            (a.resolve = g(a, a.resolve)),
            (a.reject = g(a, a.reject)),
            (a.notify = g(a, a.notify)),
            a
          );
        };
      l(e.prototype, {
        then: function (a, b, c) {
          if (t(a) && t(b) && t(c)) return this;
          var d = new j();
          return (
            (this.$$state.pending = this.$$state.pending || []),
            this.$$state.pending.push([d, a, b, c]),
            this.$$state.status > 0 && i(this.$$state),
            d.promise
          );
        },
        catch: function (a) {
          return this.then(null, a);
        },
        finally: function (a, b) {
          return this.then(
            function (b) {
              return q(b, !0, a);
            },
            function (b) {
              return q(b, !1, a);
            },
            b
          );
        },
      }),
        l(j.prototype, {
          resolve: function (a) {
            this.promise.$$state.status ||
              (a === this.promise
                ? this.$$reject(
                    m(
                      "qcycle",
                      "Expected promise to be resolved with value other than itself '{0}'",
                      a
                    )
                  )
                : this.$$resolve(a));
          },
          $$resolve: function (a) {
            function c(a) {
              h || ((h = !0), f.$$resolve(a));
            }
            function d(a) {
              h || ((h = !0), f.$$reject(a));
            }
            var e,
              f = this,
              h = !1;
            try {
              (v(a) || A(a)) && (e = a && a.then),
                A(e)
                  ? ((this.promise.$$state.status = -1),
                    e.call(a, c, d, g(this, this.notify)))
                  : ((this.promise.$$state.value = a),
                    (this.promise.$$state.status = 1),
                    i(this.promise.$$state));
            } catch (j) {
              d(j), b(j);
            }
          },
          reject: function (a) {
            this.promise.$$state.status || this.$$reject(a);
          },
          $$reject: function (a) {
            (this.promise.$$state.value = a),
              (this.promise.$$state.status = 2),
              i(this.promise.$$state);
          },
          notify: function (c) {
            var d = this.promise.$$state.pending;
            this.promise.$$state.status <= 0 &&
              d &&
              d.length &&
              a(function () {
                for (var a, e, f = 0, g = d.length; g > f; f++) {
                  (e = d[f][0]), (a = d[f][3]);
                  try {
                    e.notify(A(a) ? a(c) : c);
                  } catch (h) {
                    b(h);
                  }
                }
              });
          },
        });
      var o = function (a) {
          var b = new j();
          return b.reject(a), b.promise;
        },
        p = function (a, b) {
          var c = new j();
          return b ? c.resolve(a) : c.reject(a), c.promise;
        },
        q = function (a, b, c) {
          var d = null;
          try {
            A(c) && (d = c());
          } catch (e) {
            return p(e, !1);
          }
          return I(d)
            ? d.then(
                function () {
                  return p(a, b);
                },
                function (a) {
                  return p(a, !1);
                }
              )
            : p(a, b);
        },
        r = function (a, b, c, d) {
          var e = new j();
          return e.resolve(a), e.promise.then(b, c, d);
        },
        s = r,
        u = function (a) {
          function b(a) {
            d.resolve(a);
          }
          function c(a) {
            d.reject(a);
          }
          if (!A(a)) throw m("norslvr", "Expected resolverFn, got '{0}'", a);
          var d = new j();
          return a(b, c), d.promise;
        };
      return (
        (u.prototype = e.prototype),
        (u.defer = n),
        (u.reject = o),
        (u.when = r),
        (u.resolve = s),
        (u.all = k),
        u
      );
    }
    function uc() {
      this.$get = [
        "$window",
        "$timeout",
        function (a, b) {
          var c = a.requestAnimationFrame || a.webkitRequestAnimationFrame,
            d =
              a.cancelAnimationFrame ||
              a.webkitCancelAnimationFrame ||
              a.webkitCancelRequestAnimationFrame,
            e = !!c,
            f = e
              ? function (a) {
                  var b = c(a);
                  return function () {
                    d(b);
                  };
                }
              : function (a) {
                  var c = b(a, 16.66, !1);
                  return function () {
                    b.cancel(c);
                  };
                };
          return (f.supported = e), f;
        },
      ];
    }
    function vc() {
      function a(a) {
        function b() {
          (this.$$watchers =
            this.$$nextSibling =
            this.$$childHead =
            this.$$childTail =
              null),
            (this.$$listeners = {}),
            (this.$$listenerCount = {}),
            (this.$$watchersCount = 0),
            (this.$id = i()),
            (this.$$ChildScope = null);
        }
        return (b.prototype = a), b;
      }
      var b = 10,
        c = d("$rootScope"),
        g = null,
        h = null;
      (this.digestTtl = function (a) {
        return arguments.length && (b = a), b;
      }),
        (this.$get = [
          "$exceptionHandler",
          "$parse",
          "$browser",
          function (d, j, k) {
            function l(a) {
              a.currentScope.$$destroyed = !0;
            }
            function m(a) {
              9 === Hd &&
                (a.$$childHead && m(a.$$childHead),
                a.$$nextSibling && m(a.$$nextSibling)),
                (a.$parent =
                  a.$$nextSibling =
                  a.$$prevSibling =
                  a.$$childHead =
                  a.$$childTail =
                  a.$root =
                  a.$$watchers =
                    null);
            }
            function n() {
              (this.$id = i()),
                (this.$$phase =
                  this.$parent =
                  this.$$watchers =
                  this.$$nextSibling =
                  this.$$prevSibling =
                  this.$$childHead =
                  this.$$childTail =
                    null),
                (this.$root = this),
                (this.$$destroyed = !1),
                (this.$$listeners = {}),
                (this.$$listenerCount = {}),
                (this.$$watchersCount = 0),
                (this.$$isolateBindings = null);
            }
            function o(a) {
              if (y.$$phase)
                throw c("inprog", "{0} already in progress", y.$$phase);
              y.$$phase = a;
            }
            function q() {
              y.$$phase = null;
            }
            function r(a, b) {
              do a.$$watchersCount += b;
              while ((a = a.$parent));
            }
            function s(a, b, c) {
              do
                (a.$$listenerCount[c] -= b),
                  0 === a.$$listenerCount[c] && delete a.$$listenerCount[c];
              while ((a = a.$parent));
            }
            function u() {}
            function w() {
              for (; C.length; )
                try {
                  C.shift()();
                } catch (a) {
                  d(a);
                }
              h = null;
            }
            function x() {
              null === h &&
                (h = k.defer(function () {
                  y.$apply(w);
                }));
            }
            n.prototype = {
              constructor: n,
              $new: function (b, c) {
                var d;
                return (
                  (c = c || this),
                  b
                    ? ((d = new n()), (d.$root = this.$root))
                    : (this.$$ChildScope || (this.$$ChildScope = a(this)),
                      (d = new this.$$ChildScope())),
                  (d.$parent = c),
                  (d.$$prevSibling = c.$$childTail),
                  c.$$childHead
                    ? ((c.$$childTail.$$nextSibling = d), (c.$$childTail = d))
                    : (c.$$childHead = c.$$childTail = d),
                  (b || c != this) && d.$on("$destroy", l),
                  d
                );
              },
              $watch: function (a, b, c, d) {
                var e = j(a);
                if (e.$$watchDelegate)
                  return e.$$watchDelegate(this, b, c, e, a);
                var f = this,
                  h = f.$$watchers,
                  i = { fn: b, last: u, get: e, exp: d || a, eq: !!c };
                return (
                  (g = null),
                  A(b) || (i.fn = p),
                  h || (h = f.$$watchers = []),
                  h.unshift(i),
                  r(this, 1),
                  function () {
                    O(h, i) >= 0 && r(f, -1), (g = null);
                  }
                );
              },
              $watchGroup: function (a, b) {
                function c() {
                  (i = !1), j ? ((j = !1), b(e, e, h)) : b(e, d, h);
                }
                var d = new Array(a.length),
                  e = new Array(a.length),
                  g = [],
                  h = this,
                  i = !1,
                  j = !0;
                if (!a.length) {
                  var k = !0;
                  return (
                    h.$evalAsync(function () {
                      k && b(e, e, h);
                    }),
                    function () {
                      k = !1;
                    }
                  );
                }
                return 1 === a.length
                  ? this.$watch(a[0], function (a, c, f) {
                      (e[0] = a), (d[0] = c), b(e, a === c ? e : d, f);
                    })
                  : (f(a, function (a, b) {
                      var f = h.$watch(a, function (a, f) {
                        (e[b] = a),
                          (d[b] = f),
                          i || ((i = !0), h.$evalAsync(c));
                      });
                      g.push(f);
                    }),
                    function () {
                      for (; g.length; ) g.shift()();
                    });
              },
              $watchCollection: function (a, b) {
                function c(a) {
                  f = a;
                  var b, c, d, h, i;
                  if (!t(f)) {
                    if (v(f))
                      if (e(f)) {
                        g !== n && ((g = n), (q = g.length = 0), l++),
                          (b = f.length),
                          q !== b && (l++, (g.length = q = b));
                        for (var j = 0; b > j; j++)
                          (i = g[j]),
                            (h = f[j]),
                            (d = i !== i && h !== h),
                            d || i === h || (l++, (g[j] = h));
                      } else {
                        g !== o && ((g = o = {}), (q = 0), l++), (b = 0);
                        for (c in f)
                          Cd.call(f, c) &&
                            (b++,
                            (h = f[c]),
                            (i = g[c]),
                            c in g
                              ? ((d = i !== i && h !== h),
                                d || i === h || (l++, (g[c] = h)))
                              : (q++, (g[c] = h), l++));
                        if (q > b) {
                          l++;
                          for (c in g) Cd.call(f, c) || (q--, delete g[c]);
                        }
                      }
                    else g !== f && ((g = f), l++);
                    return l;
                  }
                }
                function d() {
                  if ((p ? ((p = !1), b(f, f, i)) : b(f, h, i), k))
                    if (v(f))
                      if (e(f)) {
                        h = new Array(f.length);
                        for (var a = 0; a < f.length; a++) h[a] = f[a];
                      } else {
                        h = {};
                        for (var c in f) Cd.call(f, c) && (h[c] = f[c]);
                      }
                    else h = f;
                }
                c.$stateful = !0;
                var f,
                  g,
                  h,
                  i = this,
                  k = b.length > 1,
                  l = 0,
                  m = j(a, c),
                  n = [],
                  o = {},
                  p = !0,
                  q = 0;
                return this.$watch(m, d);
              },
              $digest: function () {
                var a,
                  e,
                  f,
                  i,
                  j,
                  l,
                  m,
                  n,
                  p,
                  r,
                  s,
                  t,
                  v = b,
                  x = this,
                  C = [];
                o("$digest"),
                  k.$$checkUrlChange(),
                  this === y && null !== h && (k.defer.cancel(h), w()),
                  (g = null);
                do {
                  for (n = !1, r = x; z.length; ) {
                    try {
                      (t = z.shift()), t.scope.$eval(t.expression, t.locals);
                    } catch (D) {
                      d(D);
                    }
                    g = null;
                  }
                  a: do {
                    if ((l = r.$$watchers))
                      for (m = l.length; m--; )
                        try {
                          if ((a = l[m]))
                            if (
                              ((j = a.get),
                              (e = j(r)) === (f = a.last) ||
                                (a.eq
                                  ? R(e, f)
                                  : "number" == typeof e &&
                                    "number" == typeof f &&
                                    isNaN(e) &&
                                    isNaN(f)))
                            ) {
                              if (a === g) {
                                n = !1;
                                break a;
                              }
                            } else
                              (n = !0),
                                (g = a),
                                (a.last = a.eq ? P(e, null) : e),
                                (i = a.fn),
                                i(e, f === u ? e : f, r),
                                5 > v &&
                                  ((s = 4 - v),
                                  C[s] || (C[s] = []),
                                  C[s].push({
                                    msg: A(a.exp)
                                      ? "fn: " +
                                        (a.exp.name || a.exp.toString())
                                      : a.exp,
                                    newVal: e,
                                    oldVal: f,
                                  }));
                        } catch (D) {
                          d(D);
                        }
                    if (
                      !(p =
                        (r.$$watchersCount && r.$$childHead) ||
                        (r !== x && r.$$nextSibling))
                    )
                      for (; r !== x && !(p = r.$$nextSibling); ) r = r.$parent;
                  } while ((r = p));
                  if ((n || z.length) && !v--)
                    throw (
                      (q(),
                      c(
                        "infdig",
                        "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}",
                        b,
                        C
                      ))
                    );
                } while (n || z.length);
                for (q(); B.length; )
                  try {
                    B.shift()();
                  } catch (D) {
                    d(D);
                  }
              },
              $destroy: function () {
                if (!this.$$destroyed) {
                  var a = this.$parent;
                  this.$broadcast("$destroy"),
                    (this.$$destroyed = !0),
                    this === y && k.$$applicationDestroyed(),
                    r(this, -this.$$watchersCount);
                  for (var b in this.$$listenerCount)
                    s(this, this.$$listenerCount[b], b);
                  a &&
                    a.$$childHead == this &&
                    (a.$$childHead = this.$$nextSibling),
                    a &&
                      a.$$childTail == this &&
                      (a.$$childTail = this.$$prevSibling),
                    this.$$prevSibling &&
                      (this.$$prevSibling.$$nextSibling = this.$$nextSibling),
                    this.$$nextSibling &&
                      (this.$$nextSibling.$$prevSibling = this.$$prevSibling),
                    (this.$destroy =
                      this.$digest =
                      this.$apply =
                      this.$evalAsync =
                      this.$applyAsync =
                        p),
                    (this.$on =
                      this.$watch =
                      this.$watchGroup =
                        function () {
                          return p;
                        }),
                    (this.$$listeners = {}),
                    (this.$$nextSibling = null),
                    m(this);
                }
              },
              $eval: function (a, b) {
                return j(a)(this, b);
              },
              $evalAsync: function (a, b) {
                y.$$phase ||
                  z.length ||
                  k.defer(function () {
                    z.length && y.$digest();
                  }),
                  z.push({ scope: this, expression: j(a), locals: b });
              },
              $$postDigest: function (a) {
                B.push(a);
              },
              $apply: function (a) {
                try {
                  o("$apply");
                  try {
                    return this.$eval(a);
                  } finally {
                    q();
                  }
                } catch (b) {
                  d(b);
                } finally {
                  try {
                    y.$digest();
                  } catch (b) {
                    throw (d(b), b);
                  }
                }
              },
              $applyAsync: function (a) {
                function b() {
                  c.$eval(a);
                }
                var c = this;
                a && C.push(b), (a = j(a)), x();
              },
              $on: function (a, b) {
                var c = this.$$listeners[a];
                c || (this.$$listeners[a] = c = []), c.push(b);
                var d = this;
                do
                  d.$$listenerCount[a] || (d.$$listenerCount[a] = 0),
                    d.$$listenerCount[a]++;
                while ((d = d.$parent));
                var e = this;
                return function () {
                  var d = c.indexOf(b);
                  -1 !== d && ((c[d] = null), s(e, 1, a));
                };
              },
              $emit: function (a, b) {
                var c,
                  e,
                  f,
                  g = [],
                  h = this,
                  i = !1,
                  j = {
                    name: a,
                    targetScope: h,
                    stopPropagation: function () {
                      i = !0;
                    },
                    preventDefault: function () {
                      j.defaultPrevented = !0;
                    },
                    defaultPrevented: !1,
                  },
                  k = S([j], arguments, 1);
                do {
                  for (
                    c = h.$$listeners[a] || g,
                      j.currentScope = h,
                      e = 0,
                      f = c.length;
                    f > e;
                    e++
                  )
                    if (c[e])
                      try {
                        c[e].apply(null, k);
                      } catch (l) {
                        d(l);
                      }
                    else c.splice(e, 1), e--, f--;
                  if (i) return (j.currentScope = null), j;
                  h = h.$parent;
                } while (h);
                return (j.currentScope = null), j;
              },
              $broadcast: function (a, b) {
                var c = this,
                  e = c,
                  f = c,
                  g = {
                    name: a,
                    targetScope: c,
                    preventDefault: function () {
                      g.defaultPrevented = !0;
                    },
                    defaultPrevented: !1,
                  };
                if (!c.$$listenerCount[a]) return g;
                for (var h, i, j, k = S([g], arguments, 1); (e = f); ) {
                  for (
                    g.currentScope = e,
                      h = e.$$listeners[a] || [],
                      i = 0,
                      j = h.length;
                    j > i;
                    i++
                  )
                    if (h[i])
                      try {
                        h[i].apply(null, k);
                      } catch (l) {
                        d(l);
                      }
                    else h.splice(i, 1), i--, j--;
                  if (
                    !(f =
                      (e.$$listenerCount[a] && e.$$childHead) ||
                      (e !== c && e.$$nextSibling))
                  )
                    for (; e !== c && !(f = e.$$nextSibling); ) e = e.$parent;
                }
                return (g.currentScope = null), g;
              },
            };
            var y = new n(),
              z = (y.$$asyncQueue = []),
              B = (y.$$postDigestQueue = []),
              C = (y.$$applyAsyncQueue = []);
            return y;
          },
        ]);
    }
    function wc() {
      var a = /^\s*(https?|ftp|mailto|tel|file):/,
        b = /^\s*((https?|ftp|file|blob):|data:image\/)/;
      (this.aHrefSanitizationWhitelist = function (b) {
        return u(b) ? ((a = b), this) : a;
      }),
        (this.imgSrcSanitizationWhitelist = function (a) {
          return u(a) ? ((b = a), this) : b;
        }),
        (this.$get = function () {
          return function (c, d) {
            var e,
              f = d ? b : a;
            return (e = Fc(c).href), "" === e || e.match(f) ? c : "unsafe:" + e;
          };
        });
    }
    function xc(a) {
      if ("self" === a) return a;
      if (x(a)) {
        if (a.indexOf("***") > -1)
          throw qf(
            "iwcard",
            "Illegal sequence *** in string matcher.  String: {0}",
            a
          );
        return (
          (a = Wd(a).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*")),
          new RegExp("^" + a + "$")
        );
      }
      if (B(a)) return new RegExp("^" + a.source + "$");
      throw qf(
        "imatcher",
        'Matchers may only be "self", string patterns or RegExp objects'
      );
    }
    function yc(a) {
      var b = [];
      return (
        u(a) &&
          f(a, function (a) {
            b.push(xc(a));
          }),
        b
      );
    }
    function zc() {
      this.SCE_CONTEXTS = rf;
      var a = ["self"],
        b = [];
      (this.resourceUrlWhitelist = function (b) {
        return arguments.length && (a = yc(b)), a;
      }),
        (this.resourceUrlBlacklist = function (a) {
          return arguments.length && (b = yc(a)), b;
        }),
        (this.$get = [
          "$injector",
          function (c) {
            function d(a, b) {
              return "self" === a ? Gc(b) : !!a.exec(b.href);
            }
            function e(c) {
              var e,
                f,
                g = Fc(c.toString()),
                h = !1;
              for (e = 0, f = a.length; f > e; e++)
                if (d(a[e], g)) {
                  h = !0;
                  break;
                }
              if (h)
                for (e = 0, f = b.length; f > e; e++)
                  if (d(b[e], g)) {
                    h = !1;
                    break;
                  }
              return h;
            }
            function f(a) {
              var b = function (a) {
                this.$$unwrapTrustedValue = function () {
                  return a;
                };
              };
              return (
                a && (b.prototype = new a()),
                (b.prototype.valueOf = function () {
                  return this.$$unwrapTrustedValue();
                }),
                (b.prototype.toString = function () {
                  return this.$$unwrapTrustedValue().toString();
                }),
                b
              );
            }
            function g(a, b) {
              var c = l.hasOwnProperty(a) ? l[a] : null;
              if (!c)
                throw qf(
                  "icontext",
                  "Attempted to trust a value in invalid context. Context: {0}; Value: {1}",
                  a,
                  b
                );
              if (null === b || t(b) || "" === b) return b;
              if ("string" != typeof b)
                throw qf(
                  "itype",
                  "Attempted to trust a non-string value in a content requiring a string: Context: {0}",
                  a
                );
              return new c(b);
            }
            function h(a) {
              return a instanceof k ? a.$$unwrapTrustedValue() : a;
            }
            function i(a, b) {
              if (null === b || t(b) || "" === b) return b;
              var c = l.hasOwnProperty(a) ? l[a] : null;
              if (c && b instanceof c) return b.$$unwrapTrustedValue();
              if (a === rf.RESOURCE_URL) {
                if (e(b)) return b;
                throw qf(
                  "insecurl",
                  "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}",
                  b.toString()
                );
              }
              if (a === rf.HTML) return j(b);
              throw qf(
                "unsafe",
                "Attempting to use an unsafe value in a safe context."
              );
            }
            var j = function (a) {
              throw qf(
                "unsafe",
                "Attempting to use an unsafe value in a safe context."
              );
            };
            c.has("$sanitize") && (j = c.get("$sanitize"));
            var k = f(),
              l = {};
            return (
              (l[rf.HTML] = f(k)),
              (l[rf.CSS] = f(k)),
              (l[rf.URL] = f(k)),
              (l[rf.JS] = f(k)),
              (l[rf.RESOURCE_URL] = f(l[rf.URL])),
              { trustAs: g, getTrusted: i, valueOf: h }
            );
          },
        ]);
    }
    function Ac() {
      var a = !0;
      (this.enabled = function (b) {
        return arguments.length && (a = !!b), a;
      }),
        (this.$get = [
          "$parse",
          "$sceDelegate",
          function (b, c) {
            if (a && 8 > Hd)
              throw qf(
                "iequirks",
                "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information."
              );
            var d = Q(rf);
            (d.isEnabled = function () {
              return a;
            }),
              (d.trustAs = c.trustAs),
              (d.getTrusted = c.getTrusted),
              (d.valueOf = c.valueOf),
              a ||
                ((d.trustAs = d.getTrusted =
                  function (a, b) {
                    return b;
                  }),
                (d.valueOf = q)),
              (d.parseAs = function (a, c) {
                var e = b(c);
                return e.literal && e.constant
                  ? e
                  : b(c, function (b) {
                      return d.getTrusted(a, b);
                    });
              });
            var e = d.parseAs,
              g = d.getTrusted,
              h = d.trustAs;
            return (
              f(rf, function (a, b) {
                var c = Dd(b);
                (d[xa("parse_as_" + c)] = function (b) {
                  return e(a, b);
                }),
                  (d[xa("get_trusted_" + c)] = function (b) {
                    return g(a, b);
                  }),
                  (d[xa("trust_as_" + c)] = function (b) {
                    return h(a, b);
                  });
              }),
              d
            );
          },
        ]);
    }
    function Bc() {
      this.$get = [
        "$window",
        "$document",
        function (a, b) {
          var c,
            d,
            e = {},
            f = n(
              (/android (\d+)/.exec(Dd((a.navigator || {}).userAgent)) || [])[1]
            ),
            g = /Boxee/i.test((a.navigator || {}).userAgent),
            h = b[0] || {},
            i = /^(Moz|webkit|ms)(?=[A-Z])/,
            j = h.body && h.body.style,
            k = !1,
            l = !1;
          if (j) {
            for (var m in j)
              if ((d = i.exec(m))) {
                (c = d[0]), (c = c.substr(0, 1).toUpperCase() + c.substr(1));
                break;
              }
            c || (c = "WebkitOpacity" in j && "webkit"),
              (k = !!("transition" in j || c + "Transition" in j)),
              (l = !!("animation" in j || c + "Animation" in j)),
              !f ||
                (k && l) ||
                ((k = x(j.webkitTransition)), (l = x(j.webkitAnimation)));
          }
          return {
            history: !(!a.history || !a.history.pushState || 4 > f || g),
            hasEvent: function (a) {
              if ("input" === a && 11 >= Hd) return !1;
              if (t(e[a])) {
                var b = h.createElement("div");
                e[a] = "on" + a in b;
              }
              return e[a];
            },
            csp: Xd(),
            vendorPrefix: c,
            transitions: k,
            animations: l,
            android: f,
          };
        },
      ];
    }
    function Cc() {
      var a;
      (this.httpOptions = function (b) {
        return b ? ((a = b), this) : a;
      }),
        (this.$get = [
          "$templateCache",
          "$http",
          "$q",
          "$sce",
          function (b, c, d, e) {
            function f(g, h) {
              function i(a) {
                if (!h)
                  throw Qe(
                    "tpload",
                    "Failed to load template: {0} (HTTP status: {1} {2})",
                    g,
                    a.status,
                    a.statusText
                  );
                return d.reject(a);
              }
              f.totalPendingRequests++,
                (x(g) && b.get(g)) || (g = e.getTrustedResourceUrl(g));
              var j = c.defaults && c.defaults.transformResponse;
              return (
                Td(j)
                  ? (j = j.filter(function (a) {
                      return a !== zb;
                    }))
                  : j === zb && (j = null),
                c
                  .get(g, l({ cache: b, transformResponse: j }, a))
                  ["finally"](function () {
                    f.totalPendingRequests--;
                  })
                  .then(function (a) {
                    return b.put(g, a.data), a.data;
                  }, i)
              );
            }
            return (f.totalPendingRequests = 0), f;
          },
        ]);
    }
    function Dc() {
      this.$get = [
        "$rootScope",
        "$browser",
        "$location",
        function (a, b, c) {
          var d = {};
          return (
            (d.findBindings = function (a, b, c) {
              var d = a.getElementsByClassName("ng-binding"),
                e = [];
              return (
                f(d, function (a) {
                  var d = Rd.element(a).data("$binding");
                  d &&
                    f(d, function (d) {
                      if (c) {
                        var f = new RegExp("(^|\\s)" + Wd(b) + "(\\s|\\||$)");
                        f.test(d) && e.push(a);
                      } else -1 != d.indexOf(b) && e.push(a);
                    });
                }),
                e
              );
            }),
            (d.findModels = function (a, b, c) {
              for (
                var d = ["ng-", "data-ng-", "ng\\:"], e = 0;
                e < d.length;
                ++e
              ) {
                var f = c ? "=" : "*=",
                  g = "[" + d[e] + "model" + f + '"' + b + '"]',
                  h = a.querySelectorAll(g);
                if (h.length) return h;
              }
            }),
            (d.getLocation = function () {
              return c.url();
            }),
            (d.setLocation = function (b) {
              b !== c.url() && (c.url(b), a.$digest());
            }),
            (d.whenStable = function (a) {
              b.notifyWhenNoOutstandingRequests(a);
            }),
            d
          );
        },
      ];
    }
    function Ec() {
      this.$get = [
        "$rootScope",
        "$browser",
        "$q",
        "$$q",
        "$exceptionHandler",
        function (a, b, c, d, e) {
          function f(f, h, i) {
            A(f) || ((i = h), (h = f), (f = p));
            var j,
              k = T(arguments, 3),
              l = u(i) && !i,
              m = (l ? d : c).defer(),
              n = m.promise;
            return (
              (j = b.defer(function () {
                try {
                  m.resolve(f.apply(null, k));
                } catch (b) {
                  m.reject(b), e(b);
                } finally {
                  delete g[n.$$timeoutId];
                }
                l || a.$apply();
              }, h)),
              (n.$$timeoutId = j),
              (g[j] = m),
              n
            );
          }
          var g = {};
          return (
            (f.cancel = function (a) {
              return a && a.$$timeoutId in g
                ? (g[a.$$timeoutId].reject("canceled"),
                  delete g[a.$$timeoutId],
                  b.defer.cancel(a.$$timeoutId))
                : !1;
            }),
            f
          );
        },
      ];
    }
    function Fc(a) {
      var b = a;
      return (
        Hd && (sf.setAttribute("href", b), (b = sf.href)),
        sf.setAttribute("href", b),
        {
          href: sf.href,
          protocol: sf.protocol ? sf.protocol.replace(/:$/, "") : "",
          host: sf.host,
          search: sf.search ? sf.search.replace(/^\?/, "") : "",
          hash: sf.hash ? sf.hash.replace(/^#/, "") : "",
          hostname: sf.hostname,
          port: sf.port,
          pathname:
            "/" === sf.pathname.charAt(0) ? sf.pathname : "/" + sf.pathname,
        }
      );
    }
    function Gc(a) {
      var b = x(a) ? Fc(a) : a;
      return b.protocol === tf.protocol && b.host === tf.host;
    }
    function Hc() {
      this.$get = r(a);
    }
    function Ic(a) {
      function b(a) {
        try {
          return decodeURIComponent(a);
        } catch (b) {
          return a;
        }
      }
      var c = a[0] || {},
        d = {},
        e = "";
      return function () {
        var a,
          f,
          g,
          h,
          i,
          j = c.cookie || "";
        if (j !== e)
          for (e = j, a = e.split("; "), d = {}, g = 0; g < a.length; g++)
            (f = a[g]),
              (h = f.indexOf("=")),
              h > 0 &&
                ((i = b(f.substring(0, h))),
                t(d[i]) && (d[i] = b(f.substring(h + 1))));
        return d;
      };
    }
    function Jc() {
      this.$get = Ic;
    }
    function Kc(a) {
      function b(d, e) {
        if (v(d)) {
          var g = {};
          return (
            f(d, function (a, c) {
              g[c] = b(c, a);
            }),
            g
          );
        }
        return a.factory(d + c, e);
      }
      var c = "Filter";
      (this.register = b),
        (this.$get = [
          "$injector",
          function (a) {
            return function (b) {
              return a.get(b + c);
            };
          },
        ]),
        b("currency", Pc),
        b("date", cd),
        b("filter", Lc),
        b("json", dd),
        b("limitTo", ed),
        b("lowercase", Af),
        b("number", Qc),
        b("orderBy", fd),
        b("uppercase", Bf);
    }
    function Lc() {
      return function (a, b, c) {
        if (!e(a)) {
          if (null == a) return a;
          throw d("filter")("notarray", "Expected array but received: {0}", a);
        }
        var f,
          g,
          h = Oc(b);
        switch (h) {
          case "function":
            f = b;
            break;
          case "boolean":
          case "null":
          case "number":
          case "string":
            g = !0;
          case "object":
            f = Mc(b, c, g);
            break;
          default:
            return a;
        }
        return Array.prototype.filter.call(a, f);
      };
    }
    function Mc(a, b, c) {
      var d,
        e = v(a) && "$" in a;
      return (
        b === !0
          ? (b = R)
          : A(b) ||
            (b = function (a, b) {
              return t(a)
                ? !1
                : null === a || null === b
                ? a === b
                : v(b) || (v(a) && !s(a))
                ? !1
                : ((a = Dd("" + a)), (b = Dd("" + b)), -1 !== a.indexOf(b));
            }),
        (d = function (d) {
          return e && !v(d) ? Nc(d, a.$, b, !1) : Nc(d, a, b, c);
        })
      );
    }
    function Nc(a, b, c, d, e) {
      var f = Oc(a),
        g = Oc(b);
      if ("string" === g && "!" === b.charAt(0))
        return !Nc(a, b.substring(1), c, d);
      if (Td(a))
        return a.some(function (a) {
          return Nc(a, b, c, d);
        });
      switch (f) {
        case "object":
          var h;
          if (d) {
            for (h in a)
              if ("$" !== h.charAt(0) && Nc(a[h], b, c, !0)) return !0;
            return e ? !1 : Nc(a, b, c, !1);
          }
          if ("object" === g) {
            for (h in b) {
              var i = b[h];
              if (!A(i) && !t(i)) {
                var j = "$" === h,
                  k = j ? a : a[h];
                if (!Nc(k, i, c, j, j)) return !1;
              }
            }
            return !0;
          }
          return c(a, b);
        case "function":
          return !1;
        default:
          return c(a, b);
      }
    }
    function Oc(a) {
      return null === a ? "null" : typeof a;
    }
    function Pc(a) {
      var b = a.NUMBER_FORMATS;
      return function (a, c, d) {
        return (
          t(c) && (c = b.CURRENCY_SYM),
          t(d) && (d = b.PATTERNS[1].maxFrac),
          null == a
            ? a
            : Tc(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, d).replace(
                /\u00A4/g,
                c
              )
        );
      };
    }
    function Qc(a) {
      var b = a.NUMBER_FORMATS;
      return function (a, c) {
        return null == a
          ? a
          : Tc(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c);
      };
    }
    function Rc(a) {
      var b,
        c,
        d,
        e,
        f,
        g = 0;
      for (
        (c = a.indexOf(vf)) > -1 && (a = a.replace(vf, "")),
          (d = a.search(/e/i)) > 0
            ? (0 > c && (c = d),
              (c += +a.slice(d + 1)),
              (a = a.substring(0, d)))
            : 0 > c && (c = a.length),
          d = 0;
        a.charAt(d) == wf;
        d++
      );
      if (d == (f = a.length)) (b = [0]), (c = 1);
      else {
        for (f--; a.charAt(f) == wf; ) f--;
        for (c -= d, b = [], e = 0; f >= d; d++, e++) b[e] = +a.charAt(d);
      }
      return (
        c > uf && ((b = b.splice(0, uf - 1)), (g = c - 1), (c = 1)),
        { d: b, e: g, i: c }
      );
    }
    function Sc(a, b, c, d) {
      var e = a.d,
        f = e.length - a.i;
      b = t(b) ? Math.min(Math.max(c, f), d) : +b;
      var g = b + a.i,
        h = e[g];
      if (g > 0) e.splice(g);
      else {
        (a.i = 1), (e.length = g = b + 1);
        for (var i = 0; g > i; i++) e[i] = 0;
      }
      for (h >= 5 && e[g - 1]++; b > f; f++) e.push(0);
      var j = e.reduceRight(function (a, b, c, d) {
        return (b += a), (d[c] = b % 10), Math.floor(b / 10);
      }, 0);
      j && (e.unshift(j), a.i++);
    }
    function Tc(a, b, c, d, e) {
      if ((!x(a) && !y(a)) || isNaN(a)) return "";
      var f,
        g = !isFinite(a),
        h = !1,
        i = Math.abs(a) + "",
        j = "";
      if (g) j = "∞";
      else {
        (f = Rc(i)), Sc(f, e, b.minFrac, b.maxFrac);
        var k = f.d,
          l = f.i,
          m = f.e,
          n = [];
        for (
          h = k.reduce(function (a, b) {
            return a && !b;
          }, !0);
          0 > l;

        )
          k.unshift(0), l++;
        l > 0 ? (n = k.splice(l)) : ((n = k), (k = [0]));
        var o = [];
        for (
          k.length > b.lgSize && o.unshift(k.splice(-b.lgSize).join(""));
          k.length > b.gSize;

        )
          o.unshift(k.splice(-b.gSize).join(""));
        k.length && o.unshift(k.join("")),
          (j = o.join(c)),
          n.length && (j += d + n.join("")),
          m && (j += "e+" + m);
      }
      return 0 > a && !h ? b.negPre + j + b.negSuf : b.posPre + j + b.posSuf;
    }
    function Uc(a, b, c) {
      var d = "";
      for (0 > a && ((d = "-"), (a = -a)), a = "" + a; a.length < b; )
        a = wf + a;
      return c && (a = a.substr(a.length - b)), d + a;
    }
    function Vc(a, b, c, d) {
      return (
        (c = c || 0),
        function (e) {
          var f = e["get" + a]();
          return (
            (c > 0 || f > -c) && (f += c),
            0 === f && -12 == c && (f = 12),
            Uc(f, b, d)
          );
        }
      );
    }
    function Wc(a, b) {
      return function (c, d) {
        var e = c["get" + a](),
          f = Ed(b ? "SHORT" + a : a);
        return d[f][e];
      };
    }
    function Xc(a, b, c) {
      var d = -1 * c,
        e = d >= 0 ? "+" : "";
      return (e +=
        Uc(Math[d > 0 ? "floor" : "ceil"](d / 60), 2) +
        Uc(Math.abs(d % 60), 2));
    }
    function Yc(a) {
      var b = new Date(a, 0, 1).getDay();
      return new Date(a, 0, (4 >= b ? 5 : 12) - b);
    }
    function Zc(a) {
      return new Date(
        a.getFullYear(),
        a.getMonth(),
        a.getDate() + (4 - a.getDay())
      );
    }
    function $c(a) {
      return function (b) {
        var c = Yc(b.getFullYear()),
          d = Zc(b),
          e = +d - +c,
          f = 1 + Math.round(e / 6048e5);
        return Uc(f, a);
      };
    }
    function _c(a, b) {
      return a.getHours() < 12 ? b.AMPMS[0] : b.AMPMS[1];
    }
    function ad(a, b) {
      return a.getFullYear() <= 0 ? b.ERAS[0] : b.ERAS[1];
    }
    function bd(a, b) {
      return a.getFullYear() <= 0 ? b.ERANAMES[0] : b.ERANAMES[1];
    }
    function cd(a) {
      function b(a) {
        var b;
        if ((b = a.match(c))) {
          var d = new Date(0),
            e = 0,
            f = 0,
            g = b[8] ? d.setUTCFullYear : d.setFullYear,
            h = b[8] ? d.setUTCHours : d.setHours;
          b[9] && ((e = n(b[9] + b[10])), (f = n(b[9] + b[11]))),
            g.call(d, n(b[1]), n(b[2]) - 1, n(b[3]));
          var i = n(b[4] || 0) - e,
            j = n(b[5] || 0) - f,
            k = n(b[6] || 0),
            l = Math.round(1e3 * parseFloat("0." + (b[7] || 0)));
          return h.call(d, i, j, k, l), d;
        }
        return a;
      }
      var c =
        /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
      return function (c, d, e) {
        var g,
          h,
          i = "",
          j = [];
        if (
          ((d = d || "mediumDate"),
          (d = a.DATETIME_FORMATS[d] || d),
          x(c) && (c = zf.test(c) ? n(c) : b(c)),
          y(c) && (c = new Date(c)),
          !z(c) || !isFinite(c.getTime()))
        )
          return c;
        for (; d; )
          (h = yf.exec(d)),
            h ? ((j = S(j, h, 1)), (d = j.pop())) : (j.push(d), (d = null));
        var k = c.getTimezoneOffset();
        return (
          e && ((k = Y(e, k)), (c = $(c, e, !0))),
          f(j, function (b) {
            (g = xf[b]),
              (i += g
                ? g(c, a.DATETIME_FORMATS, k)
                : "''" === b
                ? "'"
                : b.replace(/(^'|'$)/g, "").replace(/''/g, "'"));
          }),
          i
        );
      };
    }
    function dd() {
      return function (a, b) {
        return t(b) && (b = 2), W(a, b);
      };
    }
    function ed() {
      return function (a, b, c) {
        return (
          (b = Math.abs(Number(b)) === 1 / 0 ? Number(b) : n(b)),
          isNaN(b)
            ? a
            : (y(a) && (a = a.toString()),
              Td(a) || x(a)
                ? ((c = !c || isNaN(c) ? 0 : n(c)),
                  (c = 0 > c ? Math.max(0, a.length + c) : c),
                  b >= 0
                    ? a.slice(c, c + b)
                    : 0 === c
                    ? a.slice(b, a.length)
                    : a.slice(Math.max(0, c + b), c))
                : a)
        );
      };
    }
    function fd(a) {
      function b(b, c) {
        return (
          (c = c ? -1 : 1),
          b.map(function (b) {
            var d = 1,
              e = q;
            if (A(b)) e = b;
            else if (
              x(b) &&
              (("+" == b.charAt(0) || "-" == b.charAt(0)) &&
                ((d = "-" == b.charAt(0) ? -1 : 1), (b = b.substring(1))),
              "" !== b && ((e = a(b)), e.constant))
            ) {
              var f = e();
              e = function (a) {
                return a[f];
              };
            }
            return { get: e, descending: d * c };
          })
        );
      }
      function c(a) {
        switch (typeof a) {
          case "number":
          case "boolean":
          case "string":
            return !0;
          default:
            return !1;
        }
      }
      function f(a, b) {
        return "function" == typeof a.valueOf && ((a = a.valueOf()), c(a))
          ? a
          : s(a) && ((a = a.toString()), c(a))
          ? a
          : b;
      }
      function g(a, b) {
        var c = typeof a;
        return (
          null === a
            ? ((c = "string"), (a = "null"))
            : "string" === c
            ? (a = a.toLowerCase())
            : "object" === c && (a = f(a, b)),
          { value: a, type: c }
        );
      }
      function h(a, b) {
        var c = 0;
        return (
          a.type === b.type
            ? a.value !== b.value && (c = a.value < b.value ? -1 : 1)
            : (c = a.type < b.type ? -1 : 1),
          c
        );
      }
      return function (a, c, f) {
        function i(a, b) {
          return {
            value: a,
            predicateValues: k.map(function (c) {
              return g(c.get(a), b);
            }),
          };
        }
        function j(a, b) {
          for (
            var c = 0, d = 0, e = k.length;
            e > d &&
            !(c =
              h(a.predicateValues[d], b.predicateValues[d]) * k[d].descending);
            ++d
          );
          return c;
        }
        if (null == a) return a;
        if (!e(a))
          throw d("orderBy")("notarray", "Expected array but received: {0}", a);
        Td(c) || (c = [c]), 0 === c.length && (c = ["+"]);
        var k = b(c, f);
        k.push({
          get: function () {
            return {};
          },
          descending: f ? -1 : 1,
        });
        var l = Array.prototype.map.call(a, i);
        return (
          l.sort(j),
          (a = l.map(function (a) {
            return a.value;
          }))
        );
      };
    }
    function gd(a) {
      return A(a) && (a = { link: a }), (a.restrict = a.restrict || "AC"), r(a);
    }
    function hd(a, b) {
      a.$name = b;
    }
    function id(a, b, d, e, g) {
      var h = this,
        i = [];
      (h.$error = {}),
        (h.$$success = {}),
        (h.$pending = c),
        (h.$name = g(b.name || b.ngForm || "")(d)),
        (h.$dirty = !1),
        (h.$pristine = !0),
        (h.$valid = !0),
        (h.$invalid = !1),
        (h.$submitted = !1),
        (h.$$parentForm = Ef),
        (h.$rollbackViewValue = function () {
          f(i, function (a) {
            a.$rollbackViewValue();
          });
        }),
        (h.$commitViewValue = function () {
          f(i, function (a) {
            a.$commitViewValue();
          });
        }),
        (h.$addControl = function (a) {
          oa(a.$name, "input"),
            i.push(a),
            a.$name && (h[a.$name] = a),
            (a.$$parentForm = h);
        }),
        (h.$$renameControl = function (a, b) {
          var c = a.$name;
          h[c] === a && delete h[c], (h[b] = a), (a.$name = b);
        }),
        (h.$removeControl = function (a) {
          a.$name && h[a.$name] === a && delete h[a.$name],
            f(h.$pending, function (b, c) {
              h.$setValidity(c, null, a);
            }),
            f(h.$error, function (b, c) {
              h.$setValidity(c, null, a);
            }),
            f(h.$$success, function (b, c) {
              h.$setValidity(c, null, a);
            }),
            O(i, a),
            (a.$$parentForm = Ef);
        }),
        xd({
          ctrl: this,
          $element: a,
          set: function (a, b, c) {
            var d = a[b];
            if (d) {
              var e = d.indexOf(c);
              -1 === e && d.push(c);
            } else a[b] = [c];
          },
          unset: function (a, b, c) {
            var d = a[b];
            d && (O(d, c), 0 === d.length && delete a[b]);
          },
          $animate: e,
        }),
        (h.$setDirty = function () {
          e.removeClass(a, mg),
            e.addClass(a, ng),
            (h.$dirty = !0),
            (h.$pristine = !1),
            h.$$parentForm.$setDirty();
        }),
        (h.$setPristine = function () {
          e.setClass(a, mg, ng + " " + Ff),
            (h.$dirty = !1),
            (h.$pristine = !0),
            (h.$submitted = !1),
            f(i, function (a) {
              a.$setPristine();
            });
        }),
        (h.$setUntouched = function () {
          f(i, function (a) {
            a.$setUntouched();
          });
        }),
        (h.$setSubmitted = function () {
          e.addClass(a, Ff),
            (h.$submitted = !0),
            h.$$parentForm.$setSubmitted();
        });
    }
    function jd(a) {
      a.$formatters.push(function (b) {
        return a.$isEmpty(b) ? b : b.toString();
      });
    }
    function kd(a, b, c, d, e, f) {
      ld(a, b, c, d, e, f), jd(d);
    }
    function ld(a, b, c, d, e, f) {
      var g = Dd(b[0].type);
      if (!e.android) {
        var h = !1;
        b.on("compositionstart", function (a) {
          h = !0;
        }),
          b.on("compositionend", function () {
            (h = !1), i();
          });
      }
      var i = function (a) {
        if ((j && (f.defer.cancel(j), (j = null)), !h)) {
          var e = b.val(),
            i = a && a.type;
          "password" === g || (c.ngTrim && "false" === c.ngTrim) || (e = Vd(e)),
            (d.$viewValue !== e || ("" === e && d.$$hasNativeValidators)) &&
              d.$setViewValue(e, i);
        }
      };
      if (e.hasEvent("input")) b.on("input", i);
      else {
        var j,
          k = function (a, b, c) {
            j ||
              (j = f.defer(function () {
                (j = null), (b && b.value === c) || i(a);
              }));
          };
        b.on("keydown", function (a) {
          var b = a.keyCode;
          91 === b ||
            (b > 15 && 19 > b) ||
            (b >= 37 && 40 >= b) ||
            k(a, this, this.value);
        }),
          e.hasEvent("paste") && b.on("paste cut", k);
      }
      b.on("change", i),
        (d.$render = function () {
          var a = d.$isEmpty(d.$viewValue) ? "" : d.$viewValue;
          b.val() !== a && b.val(a);
        });
    }
    function md(a, b) {
      if (z(a)) return a;
      if (x(a)) {
        Pf.lastIndex = 0;
        var c = Pf.exec(a);
        if (c) {
          var d = +c[1],
            e = +c[2],
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = Yc(d),
            k = 7 * (e - 1);
          return (
            b &&
              ((f = b.getHours()),
              (g = b.getMinutes()),
              (h = b.getSeconds()),
              (i = b.getMilliseconds())),
            new Date(d, 0, j.getDate() + k, f, g, h, i)
          );
        }
      }
      return NaN;
    }
    function nd(a, b) {
      return function (c, d) {
        var e, g;
        if (z(c)) return c;
        if (x(c)) {
          if (
            ('"' == c.charAt(0) &&
              '"' == c.charAt(c.length - 1) &&
              (c = c.substring(1, c.length - 1)),
            Jf.test(c))
          )
            return new Date(c);
          if (((a.lastIndex = 0), (e = a.exec(c))))
            return (
              e.shift(),
              (g = d
                ? {
                    yyyy: d.getFullYear(),
                    MM: d.getMonth() + 1,
                    dd: d.getDate(),
                    HH: d.getHours(),
                    mm: d.getMinutes(),
                    ss: d.getSeconds(),
                    sss: d.getMilliseconds() / 1e3,
                  }
                : { yyyy: 1970, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, sss: 0 }),
              f(e, function (a, c) {
                c < b.length && (g[b[c]] = +a);
              }),
              new Date(
                g.yyyy,
                g.MM - 1,
                g.dd,
                g.HH,
                g.mm,
                g.ss || 0,
                1e3 * g.sss || 0
              )
            );
        }
        return NaN;
      };
    }
    function od(a, b, d, e) {
      return function (f, g, h, i, j, k, l) {
        function m(a) {
          return a && !(a.getTime && a.getTime() !== a.getTime());
        }
        function n(a) {
          return u(a) && !z(a) ? d(a) || c : a;
        }
        pd(f, g, h, i), ld(f, g, h, i, j, k);
        var o,
          p = i && i.$options && i.$options.timezone;
        if (
          ((i.$$parserName = a),
          i.$parsers.push(function (a) {
            if (i.$isEmpty(a)) return null;
            if (b.test(a)) {
              var e = d(a, o);
              return p && (e = $(e, p)), e;
            }
            return c;
          }),
          i.$formatters.push(function (a) {
            if (a && !z(a))
              throw tg("datefmt", "Expected `{0}` to be a date", a);
            return m(a)
              ? ((o = a), o && p && (o = $(o, p, !0)), l("date")(a, e, p))
              : ((o = null), "");
          }),
          u(h.min) || h.ngMin)
        ) {
          var q;
          (i.$validators.min = function (a) {
            return !m(a) || t(q) || d(a) >= q;
          }),
            h.$observe("min", function (a) {
              (q = n(a)), i.$validate();
            });
        }
        if (u(h.max) || h.ngMax) {
          var r;
          (i.$validators.max = function (a) {
            return !m(a) || t(r) || d(a) <= r;
          }),
            h.$observe("max", function (a) {
              (r = n(a)), i.$validate();
            });
        }
      };
    }
    function pd(a, b, d, e) {
      var f = b[0],
        g = (e.$$hasNativeValidators = v(f.validity));
      g &&
        e.$parsers.push(function (a) {
          var d = b.prop(Bd) || {};
          return d.badInput || d.typeMismatch ? c : a;
        });
    }
    function qd(a, b, d, e, f, g) {
      if (
        (pd(a, b, d, e),
        ld(a, b, d, e, f, g),
        (e.$$parserName = "number"),
        e.$parsers.push(function (a) {
          return e.$isEmpty(a) ? null : Mf.test(a) ? parseFloat(a) : c;
        }),
        e.$formatters.push(function (a) {
          if (!e.$isEmpty(a)) {
            if (!y(a)) throw tg("numfmt", "Expected `{0}` to be a number", a);
            a = a.toString();
          }
          return a;
        }),
        u(d.min) || d.ngMin)
      ) {
        var h;
        (e.$validators.min = function (a) {
          return e.$isEmpty(a) || t(h) || a >= h;
        }),
          d.$observe("min", function (a) {
            u(a) && !y(a) && (a = parseFloat(a, 10)),
              (h = y(a) && !isNaN(a) ? a : c),
              e.$validate();
          });
      }
      if (u(d.max) || d.ngMax) {
        var i;
        (e.$validators.max = function (a) {
          return e.$isEmpty(a) || t(i) || i >= a;
        }),
          d.$observe("max", function (a) {
            u(a) && !y(a) && (a = parseFloat(a, 10)),
              (i = y(a) && !isNaN(a) ? a : c),
              e.$validate();
          });
      }
    }
    function rd(a, b, c, d, e, f) {
      ld(a, b, c, d, e, f),
        jd(d),
        (d.$$parserName = "url"),
        (d.$validators.url = function (a, b) {
          var c = a || b;
          return d.$isEmpty(c) || Kf.test(c);
        });
    }
    function sd(a, b, c, d, e, f) {
      ld(a, b, c, d, e, f),
        jd(d),
        (d.$$parserName = "email"),
        (d.$validators.email = function (a, b) {
          var c = a || b;
          return d.$isEmpty(c) || Lf.test(c);
        });
    }
    function td(a, b, c, d) {
      t(c.name) && b.attr("name", i());
      var e = function (a) {
        b[0].checked && d.$setViewValue(c.value, a && a.type);
      };
      b.on("click", e),
        (d.$render = function () {
          var a = c.value;
          b[0].checked = a == d.$viewValue;
        }),
        c.$observe("value", d.$render);
    }
    function ud(a, b, c, d, e) {
      var f;
      if (u(d)) {
        if (((f = a(d)), !f.constant))
          throw tg(
            "constexpr",
            "Expected constant expression for `{0}`, but saw `{1}`.",
            c,
            d
          );
        return f(b);
      }
      return e;
    }
    function vd(a, b, c, d, e, f, g, h) {
      var i = ud(h, a, "ngTrueValue", c.ngTrueValue, !0),
        j = ud(h, a, "ngFalseValue", c.ngFalseValue, !1),
        k = function (a) {
          d.$setViewValue(b[0].checked, a && a.type);
        };
      b.on("click", k),
        (d.$render = function () {
          b[0].checked = d.$viewValue;
        }),
        (d.$isEmpty = function (a) {
          return a === !1;
        }),
        d.$formatters.push(function (a) {
          return R(a, i);
        }),
        d.$parsers.push(function (a) {
          return a ? i : j;
        });
    }
    function wd(a, b) {
      return (
        (a = "ngClass" + a),
        [
          "$animate",
          function (c) {
            function d(a, b) {
              var c = [];
              a: for (var d = 0; d < a.length; d++) {
                for (var e = a[d], f = 0; f < b.length; f++)
                  if (e == b[f]) continue a;
                c.push(e);
              }
              return c;
            }
            function e(a) {
              var b = [];
              return Td(a)
                ? (f(a, function (a) {
                    b = b.concat(e(a));
                  }),
                  b)
                : x(a)
                ? a.split(" ")
                : v(a)
                ? (f(a, function (a, c) {
                    a && (b = b.concat(c.split(" ")));
                  }),
                  b)
                : a;
            }
            return {
              restrict: "AC",
              link: function (g, h, i) {
                function j(a) {
                  var b = l(a, 1);
                  i.$addClass(b);
                }
                function k(a) {
                  var b = l(a, -1);
                  i.$removeClass(b);
                }
                function l(a, b) {
                  var c = h.data("$classCounts") || ra(),
                    d = [];
                  return (
                    f(a, function (a) {
                      (b > 0 || c[a]) &&
                        ((c[a] = (c[a] || 0) + b),
                        c[a] === +(b > 0) && d.push(a));
                    }),
                    h.data("$classCounts", c),
                    d.join(" ")
                  );
                }
                function m(a, b) {
                  var e = d(b, a),
                    f = d(a, b);
                  (e = l(e, 1)),
                    (f = l(f, -1)),
                    e && e.length && c.addClass(h, e),
                    f && f.length && c.removeClass(h, f);
                }
                function n(a) {
                  if (b === !0 || g.$index % 2 === b) {
                    var c = e(a || []);
                    if (o) {
                      if (!R(a, o)) {
                        var d = e(o);
                        m(d, c);
                      }
                    } else j(c);
                  }
                  o = Q(a);
                }
                var o;
                g.$watch(i[a], n, !0),
                  i.$observe("class", function (b) {
                    n(g.$eval(i[a]));
                  }),
                  "ngClass" !== a &&
                    g.$watch("$index", function (c, d) {
                      var f = 1 & c;
                      if (f !== (1 & d)) {
                        var h = e(g.$eval(i[a]));
                        f === b ? j(h) : k(h);
                      }
                    });
              },
            };
          },
        ]
      );
    }
    function xd(a) {
      function b(a, b, i) {
        t(b) ? d("$pending", a, i) : e("$pending", a, i),
          H(b)
            ? b
              ? (l(h.$error, a, i), k(h.$$success, a, i))
              : (k(h.$error, a, i), l(h.$$success, a, i))
            : (l(h.$error, a, i), l(h.$$success, a, i)),
          h.$pending
            ? (f(qg, !0), (h.$valid = h.$invalid = c), g("", null))
            : (f(qg, !1),
              (h.$valid = yd(h.$error)),
              (h.$invalid = !h.$valid),
              g("", h.$valid));
        var j;
        (j =
          h.$pending && h.$pending[a]
            ? c
            : h.$error[a]
            ? !1
            : h.$$success[a]
            ? !0
            : null),
          g(a, j),
          h.$$parentForm.$setValidity(a, j, h);
      }
      function d(a, b, c) {
        h[a] || (h[a] = {}), k(h[a], b, c);
      }
      function e(a, b, d) {
        h[a] && l(h[a], b, d), yd(h[a]) && (h[a] = c);
      }
      function f(a, b) {
        b && !j[a]
          ? (m.addClass(i, a), (j[a] = !0))
          : !b && j[a] && (m.removeClass(i, a), (j[a] = !1));
      }
      function g(a, b) {
        (a = a ? "-" + ka(a, "-") : ""),
          f(kg + a, b === !0),
          f(lg + a, b === !1);
      }
      var h = a.ctrl,
        i = a.$element,
        j = {},
        k = a.set,
        l = a.unset,
        m = a.$animate;
      (j[lg] = !(j[kg] = i.hasClass(kg))), (h.$setValidity = b);
    }
    function yd(a) {
      if (a) for (var b in a) if (a.hasOwnProperty(b)) return !1;
      return !0;
    }
    function zd(a) {
      a[0].hasAttribute("selected") && (a[0].selected = !0);
    }
    var Ad = /^\/(.+)\/([a-z]*)$/,
      Bd = "validity",
      Cd = Object.prototype.hasOwnProperty,
      Dd = function (a) {
        return x(a) ? a.toLowerCase() : a;
      },
      Ed = function (a) {
        return x(a) ? a.toUpperCase() : a;
      },
      Fd = function (a) {
        return x(a)
          ? a.replace(/[A-Z]/g, function (a) {
              return String.fromCharCode(32 | a.charCodeAt(0));
            })
          : a;
      },
      Gd = function (a) {
        return x(a)
          ? a.replace(/[a-z]/g, function (a) {
              return String.fromCharCode(-33 & a.charCodeAt(0));
            })
          : a;
      };
    "i" !== "I".toLowerCase() && ((Dd = Fd), (Ed = Gd));
    var Hd,
      Id,
      Jd,
      Kd,
      Ld = [].slice,
      Md = [].splice,
      Nd = [].push,
      Od = Object.prototype.toString,
      Pd = Object.getPrototypeOf,
      Qd = d("ng"),
      Rd = a.angular || (a.angular = {}),
      Sd = 0;
    (Hd = b.documentMode), (p.$inject = []), (q.$inject = []);
    var Td = Array.isArray,
      Ud =
        /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,
      Vd = function (a) {
        return x(a) ? a.trim() : a;
      },
      Wd = function (a) {
        return a
          .replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1")
          .replace(/\x08/g, "\\x08");
      },
      Xd = function () {
        function a() {
          try {
            return new Function(""), !1;
          } catch (a) {
            return !0;
          }
        }
        if (!u(Xd.rules)) {
          var c =
            b.querySelector("[ng-csp]") || b.querySelector("[data-ng-csp]");
          if (c) {
            var d = c.getAttribute("ng-csp") || c.getAttribute("data-ng-csp");
            Xd.rules = {
              noUnsafeEval: !d || -1 !== d.indexOf("no-unsafe-eval"),
              noInlineStyle: !d || -1 !== d.indexOf("no-inline-style"),
            };
          } else Xd.rules = { noUnsafeEval: a(), noInlineStyle: !1 };
        }
        return Xd.rules;
      },
      Yd = function () {
        if (u(Yd.name_)) return Yd.name_;
        var a,
          c,
          d,
          e,
          f = $d.length;
        for (c = 0; f > c; ++c)
          if (
            ((d = $d[c]),
            (a = b.querySelector("[" + d.replace(":", "\\:") + "jq]")))
          ) {
            e = a.getAttribute(d + "jq");
            break;
          }
        return (Yd.name_ = e);
      },
      Zd = /:/g,
      $d = ["ng-", "data-ng-", "ng:", "x-ng-"],
      _d = /[A-Z]/g,
      ae = !1,
      be = 1,
      ce = 2,
      de = 3,
      ee = 8,
      fe = 9,
      ge = 11,
      he = {
        full: "1.5.0",
        major: 1,
        minor: 5,
        dot: 0,
        codeName: "ennoblement-facilitation",
      };
    Fa.expando = "ng339";
    var ie = (Fa.cache = {}),
      je = 1,
      ke = function (a, b, c) {
        a.addEventListener(b, c, !1);
      },
      le = function (a, b, c) {
        a.removeEventListener(b, c, !1);
      };
    Fa._data = function (a) {
      return this.cache[a[this.expando]] || {};
    };
    var me = /([\:\-\_]+(.))/g,
      ne = /^moz([A-Z])/,
      oe = { mouseleave: "mouseout", mouseenter: "mouseover" },
      pe = d("jqLite"),
      qe = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      re = /<|&#?\w+;/,
      se = /<([\w:-]+)/,
      te =
        /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      ue = {
        option: [1, '<select multiple="multiple">', "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
    (ue.optgroup = ue.option),
      (ue.tbody = ue.tfoot = ue.colgroup = ue.caption = ue.thead),
      (ue.th = ue.td);
    var ve =
        Node.prototype.contains ||
        function (a) {
          return !!(16 & this.compareDocumentPosition(a));
        },
      we = (Fa.prototype = {
        ready: function (c) {
          function d() {
            e || ((e = !0), c());
          }
          var e = !1;
          "complete" === b.readyState
            ? setTimeout(d)
            : (this.on("DOMContentLoaded", d), Fa(a).on("load", d));
        },
        toString: function () {
          var a = [];
          return (
            f(this, function (b) {
              a.push("" + b);
            }),
            "[" + a.join(", ") + "]"
          );
        },
        eq: function (a) {
          return Id(a >= 0 ? this[a] : this[this.length + a]);
        },
        length: 0,
        push: Nd,
        sort: [].sort,
        splice: [].splice,
      }),
      xe = {};
    f(
      "multiple,selected,checked,disabled,readOnly,required,open".split(","),
      function (a) {
        xe[Dd(a)] = a;
      }
    );
    var ye = {};
    f(
      "input,select,option,textarea,button,form,details".split(","),
      function (a) {
        ye[a] = !0;
      }
    );
    var ze = {
      ngMinlength: "minlength",
      ngMaxlength: "maxlength",
      ngMin: "min",
      ngMax: "max",
      ngPattern: "pattern",
    };
    f(
      { data: La, removeData: Ja, hasData: Aa, cleanData: Ba },
      function (a, b) {
        Fa[b] = a;
      }
    ),
      f(
        {
          data: La,
          inheritedData: Ra,
          scope: function (a) {
            return (
              Id.data(a, "$scope") ||
              Ra(a.parentNode || a, ["$isolateScope", "$scope"])
            );
          },
          isolateScope: function (a) {
            return (
              Id.data(a, "$isolateScope") ||
              Id.data(a, "$isolateScopeNoTemplate")
            );
          },
          controller: Qa,
          injector: function (a) {
            return Ra(a, "$injector");
          },
          removeAttr: function (a, b) {
            a.removeAttribute(b);
          },
          hasClass: Ma,
          css: function (a, b, c) {
            return (b = xa(b)), u(c) ? void (a.style[b] = c) : a.style[b];
          },
          attr: function (a, b, d) {
            var e = a.nodeType;
            if (e !== de && e !== ce && e !== ee) {
              var f = Dd(b);
              if (xe[f]) {
                if (!u(d))
                  return a[b] || (a.attributes.getNamedItem(b) || p).specified
                    ? f
                    : c;
                d
                  ? ((a[b] = !0), a.setAttribute(b, f))
                  : ((a[b] = !1), a.removeAttribute(f));
              } else if (u(d)) a.setAttribute(b, d);
              else if (a.getAttribute) {
                var g = a.getAttribute(b, 2);
                return null === g ? c : g;
              }
            }
          },
          prop: function (a, b, c) {
            return u(c) ? void (a[b] = c) : a[b];
          },
          text: (function () {
            function a(a, b) {
              if (t(b)) {
                var c = a.nodeType;
                return c === be || c === de ? a.textContent : "";
              }
              a.textContent = b;
            }
            return (a.$dv = ""), a;
          })(),
          val: function (a, b) {
            if (t(b)) {
              if (a.multiple && "select" === N(a)) {
                var c = [];
                return (
                  f(a.options, function (a) {
                    a.selected && c.push(a.value || a.text);
                  }),
                  0 === c.length ? null : c
                );
              }
              return a.value;
            }
            a.value = b;
          },
          html: function (a, b) {
            return t(b) ? a.innerHTML : (Ha(a, !0), void (a.innerHTML = b));
          },
          empty: Sa,
        },
        function (a, b) {
          Fa.prototype[b] = function (b, c) {
            var d,
              e,
              f = this.length;
            if (a !== Sa && t(2 == a.length && a !== Ma && a !== Qa ? b : c)) {
              if (v(b)) {
                for (d = 0; f > d; d++)
                  if (a === La) a(this[d], b);
                  else for (e in b) a(this[d], e, b[e]);
                return this;
              }
              for (
                var g = a.$dv, h = t(g) ? Math.min(f, 1) : f, i = 0;
                h > i;
                i++
              ) {
                var j = a(this[i], b, c);
                g = g ? g + j : j;
              }
              return g;
            }
            for (d = 0; f > d; d++) a(this[d], b, c);
            return this;
          };
        }
      ),
      f(
        {
          removeData: Ja,
          on: function (a, b, d, e) {
            if (u(e))
              throw pe(
                "onargs",
                "jqLite#on() does not support the `selector` or `eventData` parameters"
              );
            if (za(a)) {
              var f = Ka(a, !0),
                g = f.events,
                h = f.handle;
              h || (h = f.handle = Xa(a, g));
              for (
                var i = b.indexOf(" ") >= 0 ? b.split(" ") : [b],
                  j = i.length,
                  k = function (b, c, e) {
                    var f = g[b];
                    f ||
                      ((f = g[b] = []),
                      (f.specialHandlerWrapper = c),
                      "$destroy" === b || e || ke(a, b, h)),
                      f.push(d);
                  };
                j--;

              )
                (b = i[j]), oe[b] ? (k(oe[b], Za), k(b, c, !0)) : k(b);
            }
          },
          off: Ia,
          one: function (a, b, c) {
            (a = Id(a)),
              a.on(b, function d() {
                a.off(b, c), a.off(b, d);
              }),
              a.on(b, c);
          },
          replaceWith: function (a, b) {
            var c,
              d = a.parentNode;
            Ha(a),
              f(new Fa(b), function (b) {
                c ? d.insertBefore(b, c.nextSibling) : d.replaceChild(b, a),
                  (c = b);
              });
          },
          children: function (a) {
            var b = [];
            return (
              f(a.childNodes, function (a) {
                a.nodeType === be && b.push(a);
              }),
              b
            );
          },
          contents: function (a) {
            return a.contentDocument || a.childNodes || [];
          },
          append: function (a, b) {
            var c = a.nodeType;
            if (c === be || c === ge) {
              b = new Fa(b);
              for (var d = 0, e = b.length; e > d; d++) {
                var f = b[d];
                a.appendChild(f);
              }
            }
          },
          prepend: function (a, b) {
            if (a.nodeType === be) {
              var c = a.firstChild;
              f(new Fa(b), function (b) {
                a.insertBefore(b, c);
              });
            }
          },
          wrap: function (a, b) {
            Ea(a, Id(b).eq(0).clone()[0]);
          },
          remove: Ta,
          detach: function (a) {
            Ta(a, !0);
          },
          after: function (a, b) {
            var c = a,
              d = a.parentNode;
            b = new Fa(b);
            for (var e = 0, f = b.length; f > e; e++) {
              var g = b[e];
              d.insertBefore(g, c.nextSibling), (c = g);
            }
          },
          addClass: Oa,
          removeClass: Na,
          toggleClass: function (a, b, c) {
            b &&
              f(b.split(" "), function (b) {
                var d = c;
                t(d) && (d = !Ma(a, b)), (d ? Oa : Na)(a, b);
              });
          },
          parent: function (a) {
            var b = a.parentNode;
            return b && b.nodeType !== ge ? b : null;
          },
          next: function (a) {
            return a.nextElementSibling;
          },
          find: function (a, b) {
            return a.getElementsByTagName ? a.getElementsByTagName(b) : [];
          },
          clone: Ga,
          triggerHandler: function (a, b, c) {
            var d,
              e,
              g,
              h = b.type || b,
              i = Ka(a),
              j = i && i.events,
              k = j && j[h];
            k &&
              ((d = {
                preventDefault: function () {
                  this.defaultPrevented = !0;
                },
                isDefaultPrevented: function () {
                  return this.defaultPrevented === !0;
                },
                stopImmediatePropagation: function () {
                  this.immediatePropagationStopped = !0;
                },
                isImmediatePropagationStopped: function () {
                  return this.immediatePropagationStopped === !0;
                },
                stopPropagation: p,
                type: h,
                target: a,
              }),
              b.type && (d = l(d, b)),
              (e = Q(k)),
              (g = c ? [d].concat(c) : [d]),
              f(e, function (b) {
                d.isImmediatePropagationStopped() || b.apply(a, g);
              }));
          },
        },
        function (a, b) {
          (Fa.prototype[b] = function (b, c, d) {
            for (var e, f = 0, g = this.length; g > f; f++)
              t(e)
                ? ((e = a(this[f], b, c, d)), u(e) && (e = Id(e)))
                : Pa(e, a(this[f], b, c, d));
            return u(e) ? e : this;
          }),
            (Fa.prototype.bind = Fa.prototype.on),
            (Fa.prototype.unbind = Fa.prototype.off);
        }
      ),
      (ab.prototype = {
        put: function (a, b) {
          this[_a(a, this.nextUid)] = b;
        },
        get: function (a) {
          return this[_a(a, this.nextUid)];
        },
        remove: function (a) {
          var b = this[(a = _a(a, this.nextUid))];
          return delete this[a], b;
        },
      });
    var Ae = [
        function () {
          this.$get = [
            function () {
              return ab;
            },
          ];
        },
      ],
      Be = /^([^\(]+?)=>/,
      Ce = /^[^\(]*\(\s*([^\)]*)\)/m,
      De = /,/,
      Ee = /^\s*(_?)(\S+?)\1\s*$/,
      Fe = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
      Ge = d("$injector");
    eb.$$annotate = db;
    var He = d("$animate"),
      Ie = 1,
      Je = "ng-animate",
      Ke = function () {
        this.$get = function () {};
      },
      Le = function () {
        var a = new ab(),
          b = [];
        this.$get = [
          "$$AnimateRunner",
          "$rootScope",
          function (c, d) {
            function e(a, b, c) {
              var d = !1;
              return (
                b &&
                  ((b = x(b) ? b.split(" ") : Td(b) ? b : []),
                  f(b, function (b) {
                    b && ((d = !0), (a[b] = c));
                  })),
                d
              );
            }
            function g() {
              f(b, function (b) {
                var c = a.get(b);
                if (c) {
                  var d = ib(b.attr("class")),
                    e = "",
                    g = "";
                  f(c, function (a, b) {
                    var c = !!d[b];
                    a !== c &&
                      (a
                        ? (e += (e.length ? " " : "") + b)
                        : (g += (g.length ? " " : "") + b));
                  }),
                    f(b, function (a) {
                      e && Oa(a, e), g && Na(a, g);
                    }),
                    a.remove(b);
                }
              }),
                (b.length = 0);
            }
            function h(c, f, h) {
              var i = a.get(c) || {},
                j = e(i, f, !0),
                k = e(i, h, !1);
              (j || k) &&
                (a.put(c, i), b.push(c), 1 === b.length && d.$$postDigest(g));
            }
            return {
              enabled: p,
              on: p,
              off: p,
              pin: p,
              push: function (a, b, d, e) {
                e && e(),
                  (d = d || {}),
                  d.from && a.css(d.from),
                  d.to && a.css(d.to),
                  (d.addClass || d.removeClass) &&
                    h(a, d.addClass, d.removeClass);
                var f = new c();
                return f.complete(), f;
              },
            };
          },
        ];
      },
      Me = [
        "$provide",
        function (a) {
          var b = this;
          (this.$$registeredAnimations = Object.create(null)),
            (this.register = function (c, d) {
              if (c && "." !== c.charAt(0))
                throw He(
                  "notcsel",
                  "Expecting class selector starting with '.' got '{0}'.",
                  c
                );
              var e = c + "-animation";
              (b.$$registeredAnimations[c.substr(1)] = e), a.factory(e, d);
            }),
            (this.classNameFilter = function (a) {
              if (
                1 === arguments.length &&
                ((this.$$classNameFilter = a instanceof RegExp ? a : null),
                this.$$classNameFilter)
              ) {
                var b = new RegExp("(\\s+|\\/)" + Je + "(\\s+|\\/)");
                if (b.test(this.$$classNameFilter.toString()))
                  throw He(
                    "nongcls",
                    '$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.',
                    Je
                  );
              }
              return this.$$classNameFilter;
            }),
            (this.$get = [
              "$$animateQueue",
              function (a) {
                function b(a, b, c) {
                  if (c) {
                    var d = hb(c);
                    !d ||
                      d.parentNode ||
                      d.previousElementSibling ||
                      (c = null);
                  }
                  c ? c.after(a) : b.prepend(a);
                }
                return {
                  on: a.on,
                  off: a.off,
                  pin: a.pin,
                  enabled: a.enabled,
                  cancel: function (a) {
                    a.end && a.end();
                  },
                  enter: function (c, d, e, f) {
                    return (
                      (d = d && Id(d)),
                      (e = e && Id(e)),
                      (d = d || e.parent()),
                      b(c, d, e),
                      a.push(c, "enter", jb(f))
                    );
                  },
                  move: function (c, d, e, f) {
                    return (
                      (d = d && Id(d)),
                      (e = e && Id(e)),
                      (d = d || e.parent()),
                      b(c, d, e),
                      a.push(c, "move", jb(f))
                    );
                  },
                  leave: function (b, c) {
                    return a.push(b, "leave", jb(c), function () {
                      b.remove();
                    });
                  },
                  addClass: function (b, c, d) {
                    return (
                      (d = jb(d)),
                      (d.addClass = gb(d.addclass, c)),
                      a.push(b, "addClass", d)
                    );
                  },
                  removeClass: function (b, c, d) {
                    return (
                      (d = jb(d)),
                      (d.removeClass = gb(d.removeClass, c)),
                      a.push(b, "removeClass", d)
                    );
                  },
                  setClass: function (b, c, d, e) {
                    return (
                      (e = jb(e)),
                      (e.addClass = gb(e.addClass, c)),
                      (e.removeClass = gb(e.removeClass, d)),
                      a.push(b, "setClass", e)
                    );
                  },
                  animate: function (b, c, d, e, f) {
                    return (
                      (f = jb(f)),
                      (f.from = f.from ? l(f.from, c) : c),
                      (f.to = f.to ? l(f.to, d) : d),
                      (e = e || "ng-inline-animate"),
                      (f.tempClasses = gb(f.tempClasses, e)),
                      a.push(b, "animate", f)
                    );
                  },
                };
              },
            ]);
        },
      ],
      Ne = function () {
        this.$get = [
          "$$rAF",
          function (a) {
            function b(b) {
              c.push(b),
                c.length > 1 ||
                  a(function () {
                    for (var a = 0; a < c.length; a++) c[a]();
                    c = [];
                  });
            }
            var c = [];
            return function () {
              var a = !1;
              return (
                b(function () {
                  a = !0;
                }),
                function (c) {
                  a ? c() : b(c);
                }
              );
            };
          },
        ];
      },
      Oe = function () {
        this.$get = [
          "$q",
          "$sniffer",
          "$$animateAsyncRun",
          "$document",
          "$timeout",
          function (a, b, c, d, e) {
            function g(a) {
              this.setHost(a);
              var b = c(),
                f = function (a) {
                  e(a, 0, !1);
                };
              (this._doneCallbacks = []),
                (this._tick = function (a) {
                  var c = d[0];
                  c && c.hidden ? f(a) : b(a);
                }),
                (this._state = 0);
            }
            var h = 0,
              i = 1,
              j = 2;
            return (
              (g.chain = function (a, b) {
                function c() {
                  return d === a.length
                    ? void b(!0)
                    : void a[d](function (a) {
                        return a === !1 ? void b(!1) : (d++, void c());
                      });
                }
                var d = 0;
                c();
              }),
              (g.all = function (a, b) {
                function c(c) {
                  (e = e && c), ++d === a.length && b(e);
                }
                var d = 0,
                  e = !0;
                f(a, function (a) {
                  a.done(c);
                });
              }),
              (g.prototype = {
                setHost: function (a) {
                  this.host = a || {};
                },
                done: function (a) {
                  this._state === j ? a() : this._doneCallbacks.push(a);
                },
                progress: p,
                getPromise: function () {
                  if (!this.promise) {
                    var b = this;
                    this.promise = a(function (a, c) {
                      b.done(function (b) {
                        b === !1 ? c() : a();
                      });
                    });
                  }
                  return this.promise;
                },
                then: function (a, b) {
                  return this.getPromise().then(a, b);
                },
                catch: function (a) {
                  return this.getPromise()["catch"](a);
                },
                finally: function (a) {
                  return this.getPromise()["finally"](a);
                },
                pause: function () {
                  this.host.pause && this.host.pause();
                },
                resume: function () {
                  this.host.resume && this.host.resume();
                },
                end: function () {
                  this.host.end && this.host.end(), this._resolve(!0);
                },
                cancel: function () {
                  this.host.cancel && this.host.cancel(), this._resolve(!1);
                },
                complete: function (a) {
                  var b = this;
                  b._state === h &&
                    ((b._state = i),
                    b._tick(function () {
                      b._resolve(a);
                    }));
                },
                _resolve: function (a) {
                  this._state !== j &&
                    (f(this._doneCallbacks, function (b) {
                      b(a);
                    }),
                    (this._doneCallbacks.length = 0),
                    (this._state = j));
                },
              }),
              g
            );
          },
        ];
      },
      Pe = function () {
        this.$get = [
          "$$rAF",
          "$q",
          "$$AnimateRunner",
          function (a, b, c) {
            return function (b, d) {
              function e() {
                return (
                  a(function () {
                    f(), h || i.complete(), (h = !0);
                  }),
                  i
                );
              }
              function f() {
                g.addClass && (b.addClass(g.addClass), (g.addClass = null)),
                  g.removeClass &&
                    (b.removeClass(g.removeClass), (g.removeClass = null)),
                  g.to && (b.css(g.to), (g.to = null));
              }
              var g = d || {};
              g.$$prepared || (g = P(g)),
                g.cleanupStyles && (g.from = g.to = null),
                g.from && (b.css(g.from), (g.from = null));
              var h,
                i = new c();
              return { start: e, end: e };
            };
          },
        ];
      },
      Qe = d("$compile");
    ob.$inject = ["$provide", "$$sanitizeUriProvider"];
    var Re = /^((?:x|data)[\:\-_])/i,
      Se = d("$controller"),
      Te = /^(\S+)(\s+as\s+([\w$]+))?$/,
      Ue = function () {
        this.$get = [
          "$document",
          function (a) {
            return function (b) {
              return (
                b
                  ? !b.nodeType && b instanceof Id && (b = b[0])
                  : (b = a[0].body),
                b.offsetWidth + 1
              );
            };
          },
        ];
      },
      Ve = "application/json",
      We = { "Content-Type": Ve + ";charset=utf-8" },
      Xe = /^\[|^\{(?!\{)/,
      Ye = { "[": /]$/, "{": /}$/ },
      Ze = /^\)\]\}',?\n/,
      $e = d("$http"),
      _e = function (a) {
        return function () {
          throw $e(
            "legacy",
            "The method `{0}` on the promise returned from `$http` has been disabled.",
            a
          );
        };
      },
      af = (Rd.$interpolateMinErr = d("$interpolate"));
    (af.throwNoconcat = function (a) {
      throw af(
        "noconcat",
        "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce",
        a
      );
    }),
      (af.interr = function (a, b) {
        return af("interr", "Can't interpolate: {0}\n{1}", a, b.toString());
      });
    var bf = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
      cf = { http: 80, https: 443, ftp: 21 },
      df = d("$location"),
      ef = {
        $$html5: !1,
        $$replace: !1,
        absUrl: Wb("$$absUrl"),
        url: function (a) {
          if (t(a)) return this.$$url;
          var b = bf.exec(a);
          return (
            (b[1] || "" === a) && this.path(decodeURIComponent(b[1])),
            (b[2] || b[1] || "" === a) && this.search(b[3] || ""),
            this.hash(b[5] || ""),
            this
          );
        },
        protocol: Wb("$$protocol"),
        host: Wb("$$host"),
        port: Wb("$$port"),
        path: Xb("$$path", function (a) {
          return (
            (a = null !== a ? a.toString() : ""),
            "/" == a.charAt(0) ? a : "/" + a
          );
        }),
        search: function (a, b) {
          switch (arguments.length) {
            case 0:
              return this.$$search;
            case 1:
              if (x(a) || y(a)) (a = a.toString()), (this.$$search = ba(a));
              else {
                if (!v(a))
                  throw df(
                    "isrcharg",
                    "The first argument of the `$location#search()` call must be a string or an object."
                  );
                (a = P(a, {})),
                  f(a, function (b, c) {
                    null == b && delete a[c];
                  }),
                  (this.$$search = a);
              }
              break;
            default:
              t(b) || null === b
                ? delete this.$$search[a]
                : (this.$$search[a] = b);
          }
          return this.$$compose(), this;
        },
        hash: Xb("$$hash", function (a) {
          return null !== a ? a.toString() : "";
        }),
        replace: function () {
          return (this.$$replace = !0), this;
        },
      };
    f([Vb, Ub, Tb], function (a) {
      (a.prototype = Object.create(ef)),
        (a.prototype.state = function (b) {
          if (!arguments.length) return this.$$state;
          if (a !== Tb || !this.$$html5)
            throw df(
              "nostate",
              "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API"
            );
          return (this.$$state = t(b) ? null : b), this;
        });
    });
    var ff = d("$parse"),
      gf = Function.prototype.call,
      hf = Function.prototype.apply,
      jf = Function.prototype.bind,
      kf = ra();
    f("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function (a) {
      kf[a] = !0;
    });
    var lf = {
        "n": "\n",
        "f": "\f",
        "r": "\r",
        "t": "	",
        "v": "",
        "'": "'",
        '"': '"',
      },
      mf = function (a) {
        this.options = a;
      };
    mf.prototype = {
      constructor: mf,
      lex: function (a) {
        for (
          this.text = a, this.index = 0, this.tokens = [];
          this.index < this.text.length;

        ) {
          var b = this.text.charAt(this.index);
          if ('"' === b || "'" === b) this.readString(b);
          else if (
            this.isNumber(b) ||
            ("." === b && this.isNumber(this.peek()))
          )
            this.readNumber();
          else if (this.isIdent(b)) this.readIdent();
          else if (this.is(b, "(){}[].,;:?"))
            this.tokens.push({ index: this.index, text: b }), this.index++;
          else if (this.isWhitespace(b)) this.index++;
          else {
            var c = b + this.peek(),
              d = c + this.peek(2),
              e = kf[b],
              f = kf[c],
              g = kf[d];
            if (e || f || g) {
              var h = g ? d : f ? c : b;
              this.tokens.push({ index: this.index, text: h, operator: !0 }),
                (this.index += h.length);
            } else
              this.throwError(
                "Unexpected next character ",
                this.index,
                this.index + 1
              );
          }
        }
        return this.tokens;
      },
      is: function (a, b) {
        return -1 !== b.indexOf(a);
      },
      peek: function (a) {
        var b = a || 1;
        return this.index + b < this.text.length
          ? this.text.charAt(this.index + b)
          : !1;
      },
      isNumber: function (a) {
        return a >= "0" && "9" >= a && "string" == typeof a;
      },
      isWhitespace: function (a) {
        return (
          " " === a ||
          "\r" === a ||
          "	" === a ||
          "\n" === a ||
          "" === a ||
          " " === a
        );
      },
      isIdent: function (a) {
        return (
          (a >= "a" && "z" >= a) ||
          (a >= "A" && "Z" >= a) ||
          "_" === a ||
          "$" === a
        );
      },
      isExpOperator: function (a) {
        return "-" === a || "+" === a || this.isNumber(a);
      },
      throwError: function (a, b, c) {
        c = c || this.index;
        var d = u(b)
          ? "s " + b + "-" + this.index + " [" + this.text.substring(b, c) + "]"
          : " " + c;
        throw ff(
          "lexerr",
          "Lexer Error: {0} at column{1} in expression [{2}].",
          a,
          d,
          this.text
        );
      },
      readNumber: function () {
        for (var a = "", b = this.index; this.index < this.text.length; ) {
          var c = Dd(this.text.charAt(this.index));
          if ("." == c || this.isNumber(c)) a += c;
          else {
            var d = this.peek();
            if ("e" == c && this.isExpOperator(d)) a += c;
            else if (
              this.isExpOperator(c) &&
              d &&
              this.isNumber(d) &&
              "e" == a.charAt(a.length - 1)
            )
              a += c;
            else {
              if (
                !this.isExpOperator(c) ||
                (d && this.isNumber(d)) ||
                "e" != a.charAt(a.length - 1)
              )
                break;
              this.throwError("Invalid exponent");
            }
          }
          this.index++;
        }
        this.tokens.push({ index: b, text: a, constant: !0, value: Number(a) });
      },
      readIdent: function () {
        for (var a = this.index; this.index < this.text.length; ) {
          var b = this.text.charAt(this.index);
          if (!this.isIdent(b) && !this.isNumber(b)) break;
          this.index++;
        }
        this.tokens.push({
          index: a,
          text: this.text.slice(a, this.index),
          identifier: !0,
        });
      },
      readString: function (a) {
        var b = this.index;
        this.index++;
        for (var c = "", d = a, e = !1; this.index < this.text.length; ) {
          var f = this.text.charAt(this.index);
          if (((d += f), e)) {
            if ("u" === f) {
              var g = this.text.substring(this.index + 1, this.index + 5);
              g.match(/[\da-f]{4}/i) ||
                this.throwError("Invalid unicode escape [\\u" + g + "]"),
                (this.index += 4),
                (c += String.fromCharCode(parseInt(g, 16)));
            } else {
              var h = lf[f];
              c += h || f;
            }
            e = !1;
          } else if ("\\" === f) e = !0;
          else {
            if (f === a)
              return (
                this.index++,
                void this.tokens.push({
                  index: b,
                  text: d,
                  constant: !0,
                  value: c,
                })
              );
            c += f;
          }
          this.index++;
        }
        this.throwError("Unterminated quote", b);
      },
    };
    var nf = function (a, b) {
      (this.lexer = a), (this.options = b);
    };
    (nf.Program = "Program"),
      (nf.ExpressionStatement = "ExpressionStatement"),
      (nf.AssignmentExpression = "AssignmentExpression"),
      (nf.ConditionalExpression = "ConditionalExpression"),
      (nf.LogicalExpression = "LogicalExpression"),
      (nf.BinaryExpression = "BinaryExpression"),
      (nf.UnaryExpression = "UnaryExpression"),
      (nf.CallExpression = "CallExpression"),
      (nf.MemberExpression = "MemberExpression"),
      (nf.Identifier = "Identifier"),
      (nf.Literal = "Literal"),
      (nf.ArrayExpression = "ArrayExpression"),
      (nf.Property = "Property"),
      (nf.ObjectExpression = "ObjectExpression"),
      (nf.ThisExpression = "ThisExpression"),
      (nf.LocalsExpression = "LocalsExpression"),
      (nf.NGValueParameter = "NGValueParameter"),
      (nf.prototype = {
        ast: function (a) {
          (this.text = a), (this.tokens = this.lexer.lex(a));
          var b = this.program();
          return (
            0 !== this.tokens.length &&
              this.throwError("is an unexpected token", this.tokens[0]),
            b
          );
        },
        program: function () {
          for (var a = []; ; )
            if (
              (this.tokens.length > 0 &&
                !this.peek("}", ")", ";", "]") &&
                a.push(this.expressionStatement()),
              !this.expect(";"))
            )
              return { type: nf.Program, body: a };
        },
        expressionStatement: function () {
          return {
            type: nf.ExpressionStatement,
            expression: this.filterChain(),
          };
        },
        filterChain: function () {
          for (var a, b = this.expression(); (a = this.expect("|")); )
            b = this.filter(b);
          return b;
        },
        expression: function () {
          return this.assignment();
        },
        assignment: function () {
          var a = this.ternary();
          return (
            this.expect("=") &&
              (a = {
                type: nf.AssignmentExpression,
                left: a,
                right: this.assignment(),
                operator: "=",
              }),
            a
          );
        },
        ternary: function () {
          var a,
            b,
            c = this.logicalOR();
          return this.expect("?") &&
            ((a = this.expression()), this.consume(":"))
            ? ((b = this.expression()),
              {
                type: nf.ConditionalExpression,
                test: c,
                alternate: a,
                consequent: b,
              })
            : c;
        },
        logicalOR: function () {
          for (var a = this.logicalAND(); this.expect("||"); )
            a = {
              type: nf.LogicalExpression,
              operator: "||",
              left: a,
              right: this.logicalAND(),
            };
          return a;
        },
        logicalAND: function () {
          for (var a = this.equality(); this.expect("&&"); )
            a = {
              type: nf.LogicalExpression,
              operator: "&&",
              left: a,
              right: this.equality(),
            };
          return a;
        },
        equality: function () {
          for (
            var a, b = this.relational();
            (a = this.expect("==", "!=", "===", "!=="));

          )
            b = {
              type: nf.BinaryExpression,
              operator: a.text,
              left: b,
              right: this.relational(),
            };
          return b;
        },
        relational: function () {
          for (
            var a, b = this.additive();
            (a = this.expect("<", ">", "<=", ">="));

          )
            b = {
              type: nf.BinaryExpression,
              operator: a.text,
              left: b,
              right: this.additive(),
            };
          return b;
        },
        additive: function () {
          for (var a, b = this.multiplicative(); (a = this.expect("+", "-")); )
            b = {
              type: nf.BinaryExpression,
              operator: a.text,
              left: b,
              right: this.multiplicative(),
            };
          return b;
        },
        multiplicative: function () {
          for (var a, b = this.unary(); (a = this.expect("*", "/", "%")); )
            b = {
              type: nf.BinaryExpression,
              operator: a.text,
              left: b,
              right: this.unary(),
            };
          return b;
        },
        unary: function () {
          var a;
          return (a = this.expect("+", "-", "!"))
            ? {
                type: nf.UnaryExpression,
                operator: a.text,
                prefix: !0,
                argument: this.unary(),
              }
            : this.primary();
        },
        primary: function () {
          var a;
          this.expect("(")
            ? ((a = this.filterChain()), this.consume(")"))
            : this.expect("[")
            ? (a = this.arrayDeclaration())
            : this.expect("{")
            ? (a = this.object())
            : this.constants.hasOwnProperty(this.peek().text)
            ? (a = P(this.constants[this.consume().text]))
            : this.peek().identifier
            ? (a = this.identifier())
            : this.peek().constant
            ? (a = this.constant())
            : this.throwError("not a primary expression", this.peek());
          for (var b; (b = this.expect("(", "[", ".")); )
            "(" === b.text
              ? ((a = {
                  type: nf.CallExpression,
                  callee: a,
                  arguments: this.parseArguments(),
                }),
                this.consume(")"))
              : "[" === b.text
              ? ((a = {
                  type: nf.MemberExpression,
                  object: a,
                  property: this.expression(),
                  computed: !0,
                }),
                this.consume("]"))
              : "." === b.text
              ? (a = {
                  type: nf.MemberExpression,
                  object: a,
                  property: this.identifier(),
                  computed: !1,
                })
              : this.throwError("IMPOSSIBLE");
          return a;
        },
        filter: function (a) {
          for (
            var b = [a],
              c = {
                type: nf.CallExpression,
                callee: this.identifier(),
                arguments: b,
                filter: !0,
              };
            this.expect(":");

          )
            b.push(this.expression());
          return c;
        },
        parseArguments: function () {
          var a = [];
          if (")" !== this.peekToken().text)
            do a.push(this.expression());
            while (this.expect(","));
          return a;
        },
        identifier: function () {
          var a = this.consume();
          return (
            a.identifier || this.throwError("is not a valid identifier", a),
            { type: nf.Identifier, name: a.text }
          );
        },
        constant: function () {
          return { type: nf.Literal, value: this.consume().value };
        },
        arrayDeclaration: function () {
          var a = [];
          if ("]" !== this.peekToken().text)
            do {
              if (this.peek("]")) break;
              a.push(this.expression());
            } while (this.expect(","));
          return this.consume("]"), { type: nf.ArrayExpression, elements: a };
        },
        object: function () {
          var a,
            b = [];
          if ("}" !== this.peekToken().text)
            do {
              if (this.peek("}")) break;
              (a = { type: nf.Property, kind: "init" }),
                this.peek().constant
                  ? (a.key = this.constant())
                  : this.peek().identifier
                  ? (a.key = this.identifier())
                  : this.throwError("invalid key", this.peek()),
                this.consume(":"),
                (a.value = this.expression()),
                b.push(a);
            } while (this.expect(","));
          return (
            this.consume("}"), { type: nf.ObjectExpression, properties: b }
          );
        },
        throwError: function (a, b) {
          throw ff(
            "syntax",
            "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].",
            b.text,
            a,
            b.index + 1,
            this.text,
            this.text.substring(b.index)
          );
        },
        consume: function (a) {
          if (0 === this.tokens.length)
            throw ff("ueoe", "Unexpected end of expression: {0}", this.text);
          var b = this.expect(a);
          return (
            b ||
              this.throwError(
                "is unexpected, expecting [" + a + "]",
                this.peek()
              ),
            b
          );
        },
        peekToken: function () {
          if (0 === this.tokens.length)
            throw ff("ueoe", "Unexpected end of expression: {0}", this.text);
          return this.tokens[0];
        },
        peek: function (a, b, c, d) {
          return this.peekAhead(0, a, b, c, d);
        },
        peekAhead: function (a, b, c, d, e) {
          if (this.tokens.length > a) {
            var f = this.tokens[a],
              g = f.text;
            if (
              g === b ||
              g === c ||
              g === d ||
              g === e ||
              (!b && !c && !d && !e)
            )
              return f;
          }
          return !1;
        },
        expect: function (a, b, c, d) {
          var e = this.peek(a, b, c, d);
          return e ? (this.tokens.shift(), e) : !1;
        },
        constants: {
          true: { type: nf.Literal, value: !0 },
          false: { type: nf.Literal, value: !1 },
          null: { type: nf.Literal, value: null },
          undefined: { type: nf.Literal, value: c },
          this: { type: nf.ThisExpression },
          $locals: { type: nf.LocalsExpression },
        },
      }),
      (mc.prototype = {
        compile: function (a, b) {
          var d = this,
            e = this.astBuilder.ast(a);
          (this.state = {
            nextId: 0,
            filters: {},
            expensiveChecks: b,
            fn: { vars: [], body: [], own: {} },
            assign: { vars: [], body: [], own: {} },
            inputs: [],
          }),
            gc(e, d.$filter);
          var g,
            h = "";
          if (((this.stage = "assign"), (g = jc(e)))) {
            this.state.computing = "assign";
            var i = this.nextId();
            this.recurse(g, i),
              this.return_(i),
              (h = "fn.assign=" + this.generateFunction("assign", "s,v,l"));
          }
          var j = hc(e.body);
          (d.stage = "inputs"),
            f(j, function (a, b) {
              var c = "fn" + b;
              (d.state[c] = { vars: [], body: [], own: {} }),
                (d.state.computing = c);
              var e = d.nextId();
              d.recurse(a, e),
                d.return_(e),
                d.state.inputs.push(c),
                (a.watchId = b);
            }),
            (this.state.computing = "fn"),
            (this.stage = "main"),
            this.recurse(e);
          var k =
              '"' +
              this.USE +
              " " +
              this.STRICT +
              '";\n' +
              this.filterPrefix() +
              "var fn=" +
              this.generateFunction("fn", "s,l,a,i") +
              h +
              this.watchFns() +
              "return fn;",
            l = new Function(
              "$filter",
              "ensureSafeMemberName",
              "ensureSafeObject",
              "ensureSafeFunction",
              "getStringValue",
              "ensureSafeAssignContext",
              "ifDefined",
              "plus",
              "text",
              k
            )(this.$filter, $b, ac, bc, _b, cc, dc, ec, a);
          return (
            (this.state = this.stage = c),
            (l.literal = kc(e)),
            (l.constant = lc(e)),
            l
          );
        },
        USE: "use",
        STRICT: "strict",
        watchFns: function () {
          var a = [],
            b = this.state.inputs,
            c = this;
          return (
            f(b, function (b) {
              a.push("var " + b + "=" + c.generateFunction(b, "s"));
            }),
            b.length && a.push("fn.inputs=[" + b.join(",") + "];"),
            a.join("")
          );
        },
        generateFunction: function (a, b) {
          return (
            "function(" + b + "){" + this.varsPrefix(a) + this.body(a) + "};"
          );
        },
        filterPrefix: function () {
          var a = [],
            b = this;
          return (
            f(this.state.filters, function (c, d) {
              a.push(c + "=$filter(" + b.escape(d) + ")");
            }),
            a.length ? "var " + a.join(",") + ";" : ""
          );
        },
        varsPrefix: function (a) {
          return this.state[a].vars.length
            ? "var " + this.state[a].vars.join(",") + ";"
            : "";
        },
        body: function (a) {
          return this.state[a].body.join("");
        },
        recurse: function (a, b, d, e, g, h) {
          var i,
            j,
            k,
            l,
            m = this;
          if (((e = e || p), !h && u(a.watchId)))
            return (
              (b = b || this.nextId()),
              void this.if_(
                "i",
                this.lazyAssign(b, this.computedMember("i", a.watchId)),
                this.lazyRecurse(a, b, d, e, g, !0)
              )
            );
          switch (a.type) {
            case nf.Program:
              f(a.body, function (b, d) {
                m.recurse(b.expression, c, c, function (a) {
                  j = a;
                }),
                  d !== a.body.length - 1
                    ? m.current().body.push(j, ";")
                    : m.return_(j);
              });
              break;
            case nf.Literal:
              (l = this.escape(a.value)), this.assign(b, l), e(l);
              break;
            case nf.UnaryExpression:
              this.recurse(a.argument, c, c, function (a) {
                j = a;
              }),
                (l = a.operator + "(" + this.ifDefined(j, 0) + ")"),
                this.assign(b, l),
                e(l);
              break;
            case nf.BinaryExpression:
              this.recurse(a.left, c, c, function (a) {
                i = a;
              }),
                this.recurse(a.right, c, c, function (a) {
                  j = a;
                }),
                (l =
                  "+" === a.operator
                    ? this.plus(i, j)
                    : "-" === a.operator
                    ? this.ifDefined(i, 0) + a.operator + this.ifDefined(j, 0)
                    : "(" + i + ")" + a.operator + "(" + j + ")"),
                this.assign(b, l),
                e(l);
              break;
            case nf.LogicalExpression:
              (b = b || this.nextId()),
                m.recurse(a.left, b),
                m.if_(
                  "&&" === a.operator ? b : m.not(b),
                  m.lazyRecurse(a.right, b)
                ),
                e(b);
              break;
            case nf.ConditionalExpression:
              (b = b || this.nextId()),
                m.recurse(a.test, b),
                m.if_(
                  b,
                  m.lazyRecurse(a.alternate, b),
                  m.lazyRecurse(a.consequent, b)
                ),
                e(b);
              break;
            case nf.Identifier:
              (b = b || this.nextId()),
                d &&
                  ((d.context =
                    "inputs" === m.stage
                      ? "s"
                      : this.assign(
                          this.nextId(),
                          this.getHasOwnProperty("l", a.name) + "?l:s"
                        )),
                  (d.computed = !1),
                  (d.name = a.name)),
                $b(a.name),
                m.if_(
                  "inputs" === m.stage ||
                    m.not(m.getHasOwnProperty("l", a.name)),
                  function () {
                    m.if_("inputs" === m.stage || "s", function () {
                      g &&
                        1 !== g &&
                        m.if_(
                          m.not(m.nonComputedMember("s", a.name)),
                          m.lazyAssign(m.nonComputedMember("s", a.name), "{}")
                        ),
                        m.assign(b, m.nonComputedMember("s", a.name));
                    });
                  },
                  b && m.lazyAssign(b, m.nonComputedMember("l", a.name))
                ),
                (m.state.expensiveChecks || oc(a.name)) &&
                  m.addEnsureSafeObject(b),
                e(b);
              break;
            case nf.MemberExpression:
              (i = (d && (d.context = this.nextId())) || this.nextId()),
                (b = b || this.nextId()),
                m.recurse(
                  a.object,
                  i,
                  c,
                  function () {
                    m.if_(
                      m.notNull(i),
                      function () {
                        g && 1 !== g && m.addEnsureSafeAssignContext(i),
                          a.computed
                            ? ((j = m.nextId()),
                              m.recurse(a.property, j),
                              m.getStringValue(j),
                              m.addEnsureSafeMemberName(j),
                              g &&
                                1 !== g &&
                                m.if_(
                                  m.not(m.computedMember(i, j)),
                                  m.lazyAssign(m.computedMember(i, j), "{}")
                                ),
                              (l = m.ensureSafeObject(m.computedMember(i, j))),
                              m.assign(b, l),
                              d && ((d.computed = !0), (d.name = j)))
                            : ($b(a.property.name),
                              g &&
                                1 !== g &&
                                m.if_(
                                  m.not(
                                    m.nonComputedMember(i, a.property.name)
                                  ),
                                  m.lazyAssign(
                                    m.nonComputedMember(i, a.property.name),
                                    "{}"
                                  )
                                ),
                              (l = m.nonComputedMember(i, a.property.name)),
                              (m.state.expensiveChecks ||
                                oc(a.property.name)) &&
                                (l = m.ensureSafeObject(l)),
                              m.assign(b, l),
                              d &&
                                ((d.computed = !1),
                                (d.name = a.property.name)));
                      },
                      function () {
                        m.assign(b, "undefined");
                      }
                    ),
                      e(b);
                  },
                  !!g
                );
              break;
            case nf.CallExpression:
              (b = b || this.nextId()),
                a.filter
                  ? ((j = m.filter(a.callee.name)),
                    (k = []),
                    f(a.arguments, function (a) {
                      var b = m.nextId();
                      m.recurse(a, b), k.push(b);
                    }),
                    (l = j + "(" + k.join(",") + ")"),
                    m.assign(b, l),
                    e(b))
                  : ((j = m.nextId()),
                    (i = {}),
                    (k = []),
                    m.recurse(a.callee, j, i, function () {
                      m.if_(
                        m.notNull(j),
                        function () {
                          m.addEnsureSafeFunction(j),
                            f(a.arguments, function (a) {
                              m.recurse(a, m.nextId(), c, function (a) {
                                k.push(m.ensureSafeObject(a));
                              });
                            }),
                            i.name
                              ? (m.state.expensiveChecks ||
                                  m.addEnsureSafeObject(i.context),
                                (l =
                                  m.member(i.context, i.name, i.computed) +
                                  "(" +
                                  k.join(",") +
                                  ")"))
                              : (l = j + "(" + k.join(",") + ")"),
                            (l = m.ensureSafeObject(l)),
                            m.assign(b, l);
                        },
                        function () {
                          m.assign(b, "undefined");
                        }
                      ),
                        e(b);
                    }));
              break;
            case nf.AssignmentExpression:
              if (((j = this.nextId()), (i = {}), !ic(a.left)))
                throw ff("lval", "Trying to assign a value to a non l-value");
              this.recurse(
                a.left,
                c,
                i,
                function () {
                  m.if_(m.notNull(i.context), function () {
                    m.recurse(a.right, j),
                      m.addEnsureSafeObject(
                        m.member(i.context, i.name, i.computed)
                      ),
                      m.addEnsureSafeAssignContext(i.context),
                      (l =
                        m.member(i.context, i.name, i.computed) +
                        a.operator +
                        j),
                      m.assign(b, l),
                      e(b || l);
                  });
                },
                1
              );
              break;
            case nf.ArrayExpression:
              (k = []),
                f(a.elements, function (a) {
                  m.recurse(a, m.nextId(), c, function (a) {
                    k.push(a);
                  });
                }),
                (l = "[" + k.join(",") + "]"),
                this.assign(b, l),
                e(l);
              break;
            case nf.ObjectExpression:
              (k = []),
                f(a.properties, function (a) {
                  m.recurse(a.value, m.nextId(), c, function (b) {
                    k.push(
                      m.escape(
                        a.key.type === nf.Identifier
                          ? a.key.name
                          : "" + a.key.value
                      ) +
                        ":" +
                        b
                    );
                  });
                }),
                (l = "{" + k.join(",") + "}"),
                this.assign(b, l),
                e(l);
              break;
            case nf.ThisExpression:
              this.assign(b, "s"), e("s");
              break;
            case nf.LocalsExpression:
              this.assign(b, "l"), e("l");
              break;
            case nf.NGValueParameter:
              this.assign(b, "v"), e("v");
          }
        },
        getHasOwnProperty: function (a, b) {
          var c = a + "." + b,
            d = this.current().own;
          return (
            d.hasOwnProperty(c) ||
              (d[c] = this.nextId(
                !1,
                a + "&&(" + this.escape(b) + " in " + a + ")"
              )),
            d[c]
          );
        },
        assign: function (a, b) {
          return a ? (this.current().body.push(a, "=", b, ";"), a) : void 0;
        },
        filter: function (a) {
          return (
            this.state.filters.hasOwnProperty(a) ||
              (this.state.filters[a] = this.nextId(!0)),
            this.state.filters[a]
          );
        },
        ifDefined: function (a, b) {
          return "ifDefined(" + a + "," + this.escape(b) + ")";
        },
        plus: function (a, b) {
          return "plus(" + a + "," + b + ")";
        },
        return_: function (a) {
          this.current().body.push("return ", a, ";");
        },
        if_: function (a, b, c) {
          if (a === !0) b();
          else {
            var d = this.current().body;
            d.push("if(", a, "){"),
              b(),
              d.push("}"),
              c && (d.push("else{"), c(), d.push("}"));
          }
        },
        not: function (a) {
          return "!(" + a + ")";
        },
        notNull: function (a) {
          return a + "!=null";
        },
        nonComputedMember: function (a, b) {
          return a + "." + b;
        },
        computedMember: function (a, b) {
          return a + "[" + b + "]";
        },
        member: function (a, b, c) {
          return c ? this.computedMember(a, b) : this.nonComputedMember(a, b);
        },
        addEnsureSafeObject: function (a) {
          this.current().body.push(this.ensureSafeObject(a), ";");
        },
        addEnsureSafeMemberName: function (a) {
          this.current().body.push(this.ensureSafeMemberName(a), ";");
        },
        addEnsureSafeFunction: function (a) {
          this.current().body.push(this.ensureSafeFunction(a), ";");
        },
        addEnsureSafeAssignContext: function (a) {
          this.current().body.push(this.ensureSafeAssignContext(a), ";");
        },
        ensureSafeObject: function (a) {
          return "ensureSafeObject(" + a + ",text)";
        },
        ensureSafeMemberName: function (a) {
          return "ensureSafeMemberName(" + a + ",text)";
        },
        ensureSafeFunction: function (a) {
          return "ensureSafeFunction(" + a + ",text)";
        },
        getStringValue: function (a) {
          this.assign(a, "getStringValue(" + a + ")");
        },
        ensureSafeAssignContext: function (a) {
          return "ensureSafeAssignContext(" + a + ",text)";
        },
        lazyRecurse: function (a, b, c, d, e, f) {
          var g = this;
          return function () {
            g.recurse(a, b, c, d, e, f);
          };
        },
        lazyAssign: function (a, b) {
          var c = this;
          return function () {
            c.assign(a, b);
          };
        },
        stringEscapeRegex: /[^ a-zA-Z0-9]/g,
        stringEscapeFn: function (a) {
          return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
        },
        escape: function (a) {
          if (x(a))
            return (
              "'" + a.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'"
            );
          if (y(a)) return a.toString();
          if (a === !0) return "true";
          if (a === !1) return "false";
          if (null === a) return "null";
          if ("undefined" == typeof a) return "undefined";
          throw ff("esc", "IMPOSSIBLE");
        },
        nextId: function (a, b) {
          var c = "v" + this.state.nextId++;
          return a || this.current().vars.push(c + (b ? "=" + b : "")), c;
        },
        current: function () {
          return this.state[this.state.computing];
        },
      }),
      (nc.prototype = {
        "compile": function (a, b) {
          var c = this,
            d = this.astBuilder.ast(a);
          (this.expression = a), (this.expensiveChecks = b), gc(d, c.$filter);
          var e, g;
          (e = jc(d)) && (g = this.recurse(e));
          var h,
            i = hc(d.body);
          i &&
            ((h = []),
            f(i, function (a, b) {
              var d = c.recurse(a);
              (a.input = d), h.push(d), (a.watchId = b);
            }));
          var j = [];
          f(d.body, function (a) {
            j.push(c.recurse(a.expression));
          });
          var k =
            0 === d.body.length
              ? function () {}
              : 1 === d.body.length
              ? j[0]
              : function (a, b) {
                  var c;
                  return (
                    f(j, function (d) {
                      c = d(a, b);
                    }),
                    c
                  );
                };
          return (
            g &&
              (k.assign = function (a, b, c) {
                return g(a, c, b);
              }),
            h && (k.inputs = h),
            (k.literal = kc(d)),
            (k.constant = lc(d)),
            k
          );
        },
        "recurse": function (a, b, d) {
          var e,
            g,
            h,
            i = this;
          if (a.input) return this.inputs(a.input, a.watchId);
          switch (a.type) {
            case nf.Literal:
              return this.value(a.value, b);
            case nf.UnaryExpression:
              return (
                (g = this.recurse(a.argument)), this["unary" + a.operator](g, b)
              );
            case nf.BinaryExpression:
              return (
                (e = this.recurse(a.left)),
                (g = this.recurse(a.right)),
                this["binary" + a.operator](e, g, b)
              );
            case nf.LogicalExpression:
              return (
                (e = this.recurse(a.left)),
                (g = this.recurse(a.right)),
                this["binary" + a.operator](e, g, b)
              );
            case nf.ConditionalExpression:
              return this["ternary?:"](
                this.recurse(a.test),
                this.recurse(a.alternate),
                this.recurse(a.consequent),
                b
              );
            case nf.Identifier:
              return (
                $b(a.name, i.expression),
                i.identifier(
                  a.name,
                  i.expensiveChecks || oc(a.name),
                  b,
                  d,
                  i.expression
                )
              );
            case nf.MemberExpression:
              return (
                (e = this.recurse(a.object, !1, !!d)),
                a.computed ||
                  ($b(a.property.name, i.expression), (g = a.property.name)),
                a.computed && (g = this.recurse(a.property)),
                a.computed
                  ? this.computedMember(e, g, b, d, i.expression)
                  : this.nonComputedMember(
                      e,
                      g,
                      i.expensiveChecks,
                      b,
                      d,
                      i.expression
                    )
              );
            case nf.CallExpression:
              return (
                (h = []),
                f(a.arguments, function (a) {
                  h.push(i.recurse(a));
                }),
                a.filter && (g = this.$filter(a.callee.name)),
                a.filter || (g = this.recurse(a.callee, !0)),
                a.filter
                  ? function (a, d, e, f) {
                      for (var i = [], j = 0; j < h.length; ++j)
                        i.push(h[j](a, d, e, f));
                      var k = g.apply(c, i, f);
                      return b ? { context: c, name: c, value: k } : k;
                    }
                  : function (a, c, d, e) {
                      var f,
                        j = g(a, c, d, e);
                      if (null != j.value) {
                        ac(j.context, i.expression), bc(j.value, i.expression);
                        for (var k = [], l = 0; l < h.length; ++l)
                          k.push(ac(h[l](a, c, d, e), i.expression));
                        f = ac(j.value.apply(j.context, k), i.expression);
                      }
                      return b ? { value: f } : f;
                    }
              );
            case nf.AssignmentExpression:
              return (
                (e = this.recurse(a.left, !0, 1)),
                (g = this.recurse(a.right)),
                function (a, c, d, f) {
                  var h = e(a, c, d, f),
                    j = g(a, c, d, f);
                  return (
                    ac(h.value, i.expression),
                    cc(h.context),
                    (h.context[h.name] = j),
                    b ? { value: j } : j
                  );
                }
              );
            case nf.ArrayExpression:
              return (
                (h = []),
                f(a.elements, function (a) {
                  h.push(i.recurse(a));
                }),
                function (a, c, d, e) {
                  for (var f = [], g = 0; g < h.length; ++g)
                    f.push(h[g](a, c, d, e));
                  return b ? { value: f } : f;
                }
              );
            case nf.ObjectExpression:
              return (
                (h = []),
                f(a.properties, function (a) {
                  h.push({
                    key:
                      a.key.type === nf.Identifier
                        ? a.key.name
                        : "" + a.key.value,
                    value: i.recurse(a.value),
                  });
                }),
                function (a, c, d, e) {
                  for (var f = {}, g = 0; g < h.length; ++g)
                    f[h[g].key] = h[g].value(a, c, d, e);
                  return b ? { value: f } : f;
                }
              );
            case nf.ThisExpression:
              return function (a) {
                return b ? { value: a } : a;
              };
            case nf.LocalsExpression:
              return function (a, c) {
                return b ? { value: c } : c;
              };
            case nf.NGValueParameter:
              return function (a, c, d, e) {
                return b ? { value: d } : d;
              };
          }
        },
        "unary+": function (a, b) {
          return function (c, d, e, f) {
            var g = a(c, d, e, f);
            return (g = u(g) ? +g : 0), b ? { value: g } : g;
          };
        },
        "unary-": function (a, b) {
          return function (c, d, e, f) {
            var g = a(c, d, e, f);
            return (g = u(g) ? -g : 0), b ? { value: g } : g;
          };
        },
        "unary!": function (a, b) {
          return function (c, d, e, f) {
            var g = !a(c, d, e, f);
            return b ? { value: g } : g;
          };
        },
        "binary+": function (a, b, c) {
          return function (d, e, f, g) {
            var h = a(d, e, f, g),
              i = b(d, e, f, g),
              j = ec(h, i);
            return c ? { value: j } : j;
          };
        },
        "binary-": function (a, b, c) {
          return function (d, e, f, g) {
            var h = a(d, e, f, g),
              i = b(d, e, f, g),
              j = (u(h) ? h : 0) - (u(i) ? i : 0);
            return c ? { value: j } : j;
          };
        },
        "binary*": function (a, b, c) {
          return function (d, e, f, g) {
            var h = a(d, e, f, g) * b(d, e, f, g);
            return c ? { value: h } : h;
          };
        },
        "binary/": function (a, b, c) {
          return function (d, e, f, g) {
            var h = a(d, e, f, g) / b(d, e, f, g);
            return c ? { value: h } : h;
          };
        },
        "binary%": function (a, b, c) {
          return function (d, e, f, g) {
            var h = a(d, e, f, g) % b(d, e, f, g);
            return c ? { value: h } : h;
          };
        },
        "binary===": function (a, b, c) {
          return function (d, e, f, g) {
            var h = a(d, e, f, g) === b(d, e, f, g);
            return c ? { value: h } : h;
          };
        },
        "binary!==": function (a, b, c) {
          return function (d, e, f, g) {
            var h = a(d, e, f, g) !== b(d, e, f, g);
            return c ? { value: h } : h;
          };
        },
        "binary==": function (a, b, c) {
          return function (d, e, f, g) {
            var h = a(d, e, f, g) == b(d, e, f, g);
            return c ? { value: h } : h;
          };
        },
        "binary!=": function (a, b, c) {
          return function (d, e, f, g) {
            var h = a(d, e, f, g) != b(d, e, f, g);
            return c ? { value: h } : h;
          };
        },
        "binary<": function (a, b, c) {
          return function (d, e, f, g) {
            var h = a(d, e, f, g) < b(d, e, f, g);
            return c ? { value: h } : h;
          };
        },
        "binary>": function (a, b, c) {
          return function (d, e, f, g) {
            var h = a(d, e, f, g) > b(d, e, f, g);
            return c ? { value: h } : h;
          };
        },
        "binary<=": function (a, b, c) {
          return function (d, e, f, g) {
            var h = a(d, e, f, g) <= b(d, e, f, g);
            return c ? { value: h } : h;
          };
        },
        "binary>=": function (a, b, c) {
          return function (d, e, f, g) {
            var h = a(d, e, f, g) >= b(d, e, f, g);
            return c ? { value: h } : h;
          };
        },
        "binary&&": function (a, b, c) {
          return function (d, e, f, g) {
            var h = a(d, e, f, g) && b(d, e, f, g);
            return c ? { value: h } : h;
          };
        },
        "binary||": function (a, b, c) {
          return function (d, e, f, g) {
            var h = a(d, e, f, g) || b(d, e, f, g);
            return c ? { value: h } : h;
          };
        },
        "ternary?:": function (a, b, c, d) {
          return function (e, f, g, h) {
            var i = a(e, f, g, h) ? b(e, f, g, h) : c(e, f, g, h);
            return d ? { value: i } : i;
          };
        },
        "value": function (a, b) {
          return function () {
            return b ? { context: c, name: c, value: a } : a;
          };
        },
        "identifier": function (a, b, d, e, f) {
          return function (g, h, i, j) {
            var k = h && a in h ? h : g;
            e && 1 !== e && k && !k[a] && (k[a] = {});
            var l = k ? k[a] : c;
            return b && ac(l, f), d ? { context: k, name: a, value: l } : l;
          };
        },
        "computedMember": function (a, b, c, d, e) {
          return function (f, g, h, i) {
            var j,
              k,
              l = a(f, g, h, i);
            return (
              null != l &&
                ((j = b(f, g, h, i)),
                (j = _b(j)),
                $b(j, e),
                d && 1 !== d && (cc(l), l && !l[j] && (l[j] = {})),
                (k = l[j]),
                ac(k, e)),
              c ? { context: l, name: j, value: k } : k
            );
          };
        },
        "nonComputedMember": function (a, b, d, e, f, g) {
          return function (h, i, j, k) {
            var l = a(h, i, j, k);
            f && 1 !== f && (cc(l), l && !l[b] && (l[b] = {}));
            var m = null != l ? l[b] : c;
            return (
              (d || oc(b)) && ac(m, g),
              e ? { context: l, name: b, value: m } : m
            );
          };
        },
        "inputs": function (a, b) {
          return function (c, d, e, f) {
            return f ? f[b] : a(c, d, e);
          };
        },
      });
    var of = function (a, b, c) {
      (this.lexer = a),
        (this.$filter = b),
        (this.options = c),
        (this.ast = new nf(this.lexer)),
        (this.astCompiler = c.csp ? new nc(this.ast, b) : new mc(this.ast, b));
    };
    of.prototype = {
      constructor: of,
      parse: function (a) {
        return this.astCompiler.compile(a, this.options.expensiveChecks);
      },
    };
    var pf = Object.prototype.valueOf,
      qf = d("$sce"),
      rf = {
        HTML: "html",
        CSS: "css",
        URL: "url",
        RESOURCE_URL: "resourceUrl",
        JS: "js",
      },
      Qe = d("$compile"),
      sf = b.createElement("a"),
      tf = Fc(a.location.href);
    (Ic.$inject = ["$document"]), (Kc.$inject = ["$provide"]);
    var uf = 22,
      vf = ".",
      wf = "0";
    (Pc.$inject = ["$locale"]), (Qc.$inject = ["$locale"]);
    var xf = {
        yyyy: Vc("FullYear", 4),
        yy: Vc("FullYear", 2, 0, !0),
        y: Vc("FullYear", 1),
        MMMM: Wc("Month"),
        MMM: Wc("Month", !0),
        MM: Vc("Month", 2, 1),
        M: Vc("Month", 1, 1),
        dd: Vc("Date", 2),
        d: Vc("Date", 1),
        HH: Vc("Hours", 2),
        H: Vc("Hours", 1),
        hh: Vc("Hours", 2, -12),
        h: Vc("Hours", 1, -12),
        mm: Vc("Minutes", 2),
        m: Vc("Minutes", 1),
        ss: Vc("Seconds", 2),
        s: Vc("Seconds", 1),
        sss: Vc("Milliseconds", 3),
        EEEE: Wc("Day"),
        EEE: Wc("Day", !0),
        a: _c,
        Z: Xc,
        ww: $c(2),
        w: $c(1),
        G: ad,
        GG: ad,
        GGG: ad,
        GGGG: bd,
      },
      yf =
        /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
      zf = /^\-?\d+$/;
    cd.$inject = ["$locale"];
    var Af = r(Dd),
      Bf = r(Ed);
    fd.$inject = ["$parse"];
    var Cf = r({
        restrict: "E",
        compile: function (a, b) {
          return b.href || b.xlinkHref
            ? void 0
            : function (a, b) {
                if ("a" === b[0].nodeName.toLowerCase()) {
                  var c =
                    "[object SVGAnimatedString]" === Od.call(b.prop("href"))
                      ? "xlink:href"
                      : "href";
                  b.on("click", function (a) {
                    b.attr(c) || a.preventDefault();
                  });
                }
              };
        },
      }),
      Df = {};
    f(xe, function (a, b) {
      function c(a, c, e) {
        a.$watch(e[d], function (a) {
          e.$set(b, !!a);
        });
      }
      if ("multiple" != a) {
        var d = pb("ng-" + b),
          e = c;
        "checked" === a &&
          (e = function (a, b, e) {
            e.ngModel !== e[d] && c(a, b, e);
          }),
          (Df[d] = function () {
            return { restrict: "A", priority: 100, link: e };
          });
      }
    }),
      f(ze, function (a, b) {
        Df[b] = function () {
          return {
            priority: 100,
            link: function (a, c, d) {
              if ("ngPattern" === b && "/" == d.ngPattern.charAt(0)) {
                var e = d.ngPattern.match(Ad);
                if (e) return void d.$set("ngPattern", new RegExp(e[1], e[2]));
              }
              a.$watch(d[b], function (a) {
                d.$set(b, a);
              });
            },
          };
        };
      }),
      f(["src", "srcset", "href"], function (a) {
        var b = pb("ng-" + a);
        Df[b] = function () {
          return {
            priority: 99,
            link: function (c, d, e) {
              var f = a,
                g = a;
              "href" === a &&
                "[object SVGAnimatedString]" === Od.call(d.prop("href")) &&
                ((g = "xlinkHref"), (e.$attr[g] = "xlink:href"), (f = null)),
                e.$observe(b, function (b) {
                  return b
                    ? (e.$set(g, b), void (Hd && f && d.prop(f, e[g])))
                    : void ("href" === a && e.$set(g, null));
                });
            },
          };
        };
      });
    var Ef = {
        $addControl: p,
        $$renameControl: hd,
        $removeControl: p,
        $setValidity: p,
        $setDirty: p,
        $setPristine: p,
        $setSubmitted: p,
      },
      Ff = "ng-submitted";
    id.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
    var Gf = function (a) {
        return [
          "$timeout",
          "$parse",
          function (b, d) {
            function e(a) {
              return "" === a ? d('this[""]').assign : d(a).assign || p;
            }
            var f = {
              name: "form",
              restrict: a ? "EAC" : "E",
              require: ["form", "^^?form"],
              controller: id,
              compile: function (d, f) {
                d.addClass(mg).addClass(kg);
                var g = f.name ? "name" : a && f.ngForm ? "ngForm" : !1;
                return {
                  pre: function (a, d, f, h) {
                    var i = h[0];
                    if (!("action" in f)) {
                      var j = function (b) {
                        a.$apply(function () {
                          i.$commitViewValue(), i.$setSubmitted();
                        }),
                          b.preventDefault();
                      };
                      ke(d[0], "submit", j),
                        d.on("$destroy", function () {
                          b(
                            function () {
                              le(d[0], "submit", j);
                            },
                            0,
                            !1
                          );
                        });
                    }
                    var k = h[1] || i.$$parentForm;
                    k.$addControl(i);
                    var m = g ? e(i.$name) : p;
                    g &&
                      (m(a, i),
                      f.$observe(g, function (b) {
                        i.$name !== b &&
                          (m(a, c),
                          i.$$parentForm.$$renameControl(i, b),
                          (m = e(i.$name))(a, i));
                      })),
                      d.on("$destroy", function () {
                        i.$$parentForm.$removeControl(i), m(a, c), l(i, Ef);
                      });
                  },
                };
              },
            };
            return f;
          },
        ];
      },
      Hf = Gf(),
      If = Gf(!0),
      Jf =
        /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
      Kf =
        /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,
      Lf =
        /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
      Mf = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
      Nf = /^(\d{4})-(\d{2})-(\d{2})$/,
      Of = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
      Pf = /^(\d{4})-W(\d\d)$/,
      Qf = /^(\d{4})-(\d\d)$/,
      Rf = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
      Sf = {
        "text": kd,
        "date": od("date", Nf, nd(Nf, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
        "datetime-local": od(
          "datetimelocal",
          Of,
          nd(Of, ["yyyy", "MM", "dd", "HH", "mm", "ss", "sss"]),
          "yyyy-MM-ddTHH:mm:ss.sss"
        ),
        "time": od(
          "time",
          Rf,
          nd(Rf, ["HH", "mm", "ss", "sss"]),
          "HH:mm:ss.sss"
        ),
        "week": od("week", Pf, md, "yyyy-Www"),
        "month": od("month", Qf, nd(Qf, ["yyyy", "MM"]), "yyyy-MM"),
        "number": qd,
        "url": rd,
        "email": sd,
        "radio": td,
        "checkbox": vd,
        "hidden": p,
        "button": p,
        "submit": p,
        "reset": p,
        "file": p,
      },
      Tf = [
        "$browser",
        "$sniffer",
        "$filter",
        "$parse",
        function (a, b, c, d) {
          return {
            restrict: "E",
            require: ["?ngModel"],
            link: {
              pre: function (e, f, g, h) {
                h[0] && (Sf[Dd(g.type)] || Sf.text)(e, f, g, h[0], b, a, c, d);
              },
            },
          };
        },
      ],
      Uf = /^(true|false|\d+)$/,
      Vf = function () {
        return {
          restrict: "A",
          priority: 100,
          compile: function (a, b) {
            return Uf.test(b.ngValue)
              ? function (a, b, c) {
                  c.$set("value", a.$eval(c.ngValue));
                }
              : function (a, b, c) {
                  a.$watch(c.ngValue, function (a) {
                    c.$set("value", a);
                  });
                };
          },
        };
      },
      Wf = [
        "$compile",
        function (a) {
          return {
            restrict: "AC",
            compile: function (b) {
              return (
                a.$$addBindingClass(b),
                function (b, c, d) {
                  a.$$addBindingInfo(c, d.ngBind),
                    (c = c[0]),
                    b.$watch(d.ngBind, function (a) {
                      c.textContent = t(a) ? "" : a;
                    });
                }
              );
            },
          };
        },
      ],
      Xf = [
        "$interpolate",
        "$compile",
        function (a, b) {
          return {
            compile: function (c) {
              return (
                b.$$addBindingClass(c),
                function (c, d, e) {
                  var f = a(d.attr(e.$attr.ngBindTemplate));
                  b.$$addBindingInfo(d, f.expressions),
                    (d = d[0]),
                    e.$observe("ngBindTemplate", function (a) {
                      d.textContent = t(a) ? "" : a;
                    });
                }
              );
            },
          };
        },
      ],
      Yf = [
        "$sce",
        "$parse",
        "$compile",
        function (a, b, c) {
          return {
            restrict: "A",
            compile: function (d, e) {
              var f = b(e.ngBindHtml),
                g = b(e.ngBindHtml, function (a) {
                  return (a || "").toString();
                });
              return (
                c.$$addBindingClass(d),
                function (b, d, e) {
                  c.$$addBindingInfo(d, e.ngBindHtml),
                    b.$watch(g, function () {
                      d.html(a.getTrustedHtml(f(b)) || "");
                    });
                }
              );
            },
          };
        },
      ],
      Zf = r({
        restrict: "A",
        require: "ngModel",
        link: function (a, b, c, d) {
          d.$viewChangeListeners.push(function () {
            a.$eval(c.ngChange);
          });
        },
      }),
      $f = wd("", !0),
      _f = wd("Odd", 0),
      ag = wd("Even", 1),
      bg = gd({
        compile: function (a, b) {
          b.$set("ngCloak", c), a.removeClass("ng-cloak");
        },
      }),
      cg = [
        function () {
          return { restrict: "A", scope: !0, controller: "@", priority: 500 };
        },
      ],
      dg = {},
      eg = { blur: !0, focus: !0 };
    f(
      "click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(
        " "
      ),
      function (a) {
        var b = pb("ng-" + a);
        dg[b] = [
          "$parse",
          "$rootScope",
          function (c, d) {
            return {
              restrict: "A",
              compile: function (e, f) {
                var g = c(f[b], null, !0);
                return function (b, c) {
                  c.on(a, function (c) {
                    var e = function () {
                      g(b, { $event: c });
                    };
                    eg[a] && d.$$phase ? b.$evalAsync(e) : b.$apply(e);
                  });
                };
              },
            };
          },
        ];
      }
    );
    var fg = [
        "$animate",
        function (a) {
          return {
            multiElement: !0,
            transclude: "element",
            priority: 600,
            terminal: !0,
            restrict: "A",
            $$tlb: !0,
            link: function (c, d, e, f, g) {
              var h, i, j;
              c.$watch(e.ngIf, function (c) {
                c
                  ? i ||
                    g(function (c, f) {
                      (i = f),
                        (c[c.length++] = b.createComment(
                          " end ngIf: " + e.ngIf + " "
                        )),
                        (h = { clone: c }),
                        a.enter(c, d.parent(), d);
                    })
                  : (j && (j.remove(), (j = null)),
                    i && (i.$destroy(), (i = null)),
                    h &&
                      ((j = qa(h.clone)),
                      a.leave(j).then(function () {
                        j = null;
                      }),
                      (h = null)));
              });
            },
          };
        },
      ],
      gg = [
        "$templateRequest",
        "$anchorScroll",
        "$animate",
        function (a, b, c) {
          return {
            restrict: "ECA",
            priority: 400,
            terminal: !0,
            transclude: "element",
            controller: Rd.noop,
            compile: function (d, e) {
              var f = e.ngInclude || e.src,
                g = e.onload || "",
                h = e.autoscroll;
              return function (d, e, i, j, k) {
                var l,
                  m,
                  n,
                  o = 0,
                  p = function () {
                    m && (m.remove(), (m = null)),
                      l && (l.$destroy(), (l = null)),
                      n &&
                        (c.leave(n).then(function () {
                          m = null;
                        }),
                        (m = n),
                        (n = null));
                  };
                d.$watch(f, function (f) {
                  var i = function () {
                      !u(h) || (h && !d.$eval(h)) || b();
                    },
                    m = ++o;
                  f
                    ? (a(f, !0).then(
                        function (a) {
                          if (!d.$$destroyed && m === o) {
                            var b = d.$new();
                            j.template = a;
                            var h = k(b, function (a) {
                              p(), c.enter(a, null, e).then(i);
                            });
                            (l = b),
                              (n = h),
                              l.$emit("$includeContentLoaded", f),
                              d.$eval(g);
                          }
                        },
                        function () {
                          d.$$destroyed ||
                            (m === o &&
                              (p(), d.$emit("$includeContentError", f)));
                        }
                      ),
                      d.$emit("$includeContentRequested", f))
                    : (p(), (j.template = null));
                });
              };
            },
          };
        },
      ],
      hg = [
        "$compile",
        function (a) {
          return {
            restrict: "ECA",
            priority: -400,
            require: "ngInclude",
            link: function (c, d, e, f) {
              return Od.call(d[0]).match(/SVG/)
                ? (d.empty(),
                  void a(Ca(f.template, b).childNodes)(
                    c,
                    function (a) {
                      d.append(a);
                    },
                    { futureParentElement: d }
                  ))
                : (d.html(f.template), void a(d.contents())(c));
            },
          };
        },
      ],
      ig = gd({
        priority: 450,
        compile: function () {
          return {
            pre: function (a, b, c) {
              a.$eval(c.ngInit);
            },
          };
        },
      }),
      jg = function () {
        return {
          restrict: "A",
          priority: 100,
          require: "ngModel",
          link: function (a, b, d, e) {
            var g = b.attr(d.$attr.ngList) || ", ",
              h = "false" !== d.ngTrim,
              i = h ? Vd(g) : g,
              j = function (a) {
                if (!t(a)) {
                  var b = [];
                  return (
                    a &&
                      f(a.split(i), function (a) {
                        a && b.push(h ? Vd(a) : a);
                      }),
                    b
                  );
                }
              };
            e.$parsers.push(j),
              e.$formatters.push(function (a) {
                return Td(a) ? a.join(g) : c;
              }),
              (e.$isEmpty = function (a) {
                return !a || !a.length;
              });
          },
        };
      },
      kg = "ng-valid",
      lg = "ng-invalid",
      mg = "ng-pristine",
      ng = "ng-dirty",
      og = "ng-untouched",
      pg = "ng-touched",
      qg = "ng-pending",
      rg = "ng-empty",
      sg = "ng-not-empty",
      tg = d("ngModel"),
      ug = [
        "$scope",
        "$exceptionHandler",
        "$attrs",
        "$element",
        "$parse",
        "$animate",
        "$timeout",
        "$rootScope",
        "$q",
        "$interpolate",
        function (a, b, d, e, g, h, i, j, k, l) {
          (this.$viewValue = Number.NaN),
            (this.$modelValue = Number.NaN),
            (this.$$rawModelValue = c),
            (this.$validators = {}),
            (this.$asyncValidators = {}),
            (this.$parsers = []),
            (this.$formatters = []),
            (this.$viewChangeListeners = []),
            (this.$untouched = !0),
            (this.$touched = !1),
            (this.$pristine = !0),
            (this.$dirty = !1),
            (this.$valid = !0),
            (this.$invalid = !1),
            (this.$error = {}),
            (this.$$success = {}),
            (this.$pending = c),
            (this.$name = l(d.name || "", !1)(a)),
            (this.$$parentForm = Ef);
          var m,
            n = g(d.ngModel),
            o = n.assign,
            q = n,
            r = o,
            s = null,
            v = this;
          (this.$$setOptions = function (a) {
            if (((v.$options = a), a && a.getterSetter)) {
              var b = g(d.ngModel + "()"),
                c = g(d.ngModel + "($$$p)");
              (q = function (a) {
                var c = n(a);
                return A(c) && (c = b(a)), c;
              }),
                (r = function (a, b) {
                  A(n(a)) ? c(a, { $$$p: v.$modelValue }) : o(a, v.$modelValue);
                });
            } else if (!n.assign)
              throw tg(
                "nonassign",
                "Expression '{0}' is non-assignable. Element: {1}",
                d.ngModel,
                _(e)
              );
          }),
            (this.$render = p),
            (this.$isEmpty = function (a) {
              return t(a) || "" === a || null === a || a !== a;
            }),
            (this.$$updateEmptyClasses = function (a) {
              v.$isEmpty(a)
                ? (h.removeClass(e, sg), h.addClass(e, rg))
                : (h.removeClass(e, rg), h.addClass(e, sg));
            });
          var w = 0;
          xd({
            ctrl: this,
            $element: e,
            set: function (a, b) {
              a[b] = !0;
            },
            unset: function (a, b) {
              delete a[b];
            },
            $animate: h,
          }),
            (this.$setPristine = function () {
              (v.$dirty = !1),
                (v.$pristine = !0),
                h.removeClass(e, ng),
                h.addClass(e, mg);
            }),
            (this.$setDirty = function () {
              (v.$dirty = !0),
                (v.$pristine = !1),
                h.removeClass(e, mg),
                h.addClass(e, ng),
                v.$$parentForm.$setDirty();
            }),
            (this.$setUntouched = function () {
              (v.$touched = !1), (v.$untouched = !0), h.setClass(e, og, pg);
            }),
            (this.$setTouched = function () {
              (v.$touched = !0), (v.$untouched = !1), h.setClass(e, pg, og);
            }),
            (this.$rollbackViewValue = function () {
              i.cancel(s),
                (v.$viewValue = v.$$lastCommittedViewValue),
                v.$render();
            }),
            (this.$validate = function () {
              if (!y(v.$modelValue) || !isNaN(v.$modelValue)) {
                var a = v.$$lastCommittedViewValue,
                  b = v.$$rawModelValue,
                  d = v.$valid,
                  e = v.$modelValue,
                  f = v.$options && v.$options.allowInvalid;
                v.$$runValidators(b, a, function (a) {
                  f ||
                    d === a ||
                    ((v.$modelValue = a ? b : c),
                    v.$modelValue !== e && v.$$writeModelToScope());
                });
              }
            }),
            (this.$$runValidators = function (a, b, d) {
              function e() {
                var a = v.$$parserName || "parse";
                return t(m)
                  ? (i(a, null), !0)
                  : (m ||
                      (f(v.$validators, function (a, b) {
                        i(b, null);
                      }),
                      f(v.$asyncValidators, function (a, b) {
                        i(b, null);
                      })),
                    i(a, m),
                    m);
              }
              function g() {
                var c = !0;
                return (
                  f(v.$validators, function (d, e) {
                    var f = d(a, b);
                    (c = c && f), i(e, f);
                  }),
                  c
                    ? !0
                    : (f(v.$asyncValidators, function (a, b) {
                        i(b, null);
                      }),
                      !1)
                );
              }
              function h() {
                var d = [],
                  e = !0;
                f(v.$asyncValidators, function (f, g) {
                  var h = f(a, b);
                  if (!I(h))
                    throw tg(
                      "nopromise",
                      "Expected asynchronous validator to return a promise but got '{0}' instead.",
                      h
                    );
                  i(g, c),
                    d.push(
                      h.then(
                        function () {
                          i(g, !0);
                        },
                        function (a) {
                          (e = !1), i(g, !1);
                        }
                      )
                    );
                }),
                  d.length
                    ? k.all(d).then(function () {
                        j(e);
                      }, p)
                    : j(!0);
              }
              function i(a, b) {
                l === w && v.$setValidity(a, b);
              }
              function j(a) {
                l === w && d(a);
              }
              w++;
              var l = w;
              return e() && g() ? void h() : void j(!1);
            }),
            (this.$commitViewValue = function () {
              var a = v.$viewValue;
              i.cancel(s),
                (v.$$lastCommittedViewValue !== a ||
                  ("" === a && v.$$hasNativeValidators)) &&
                  (v.$$updateEmptyClasses(a),
                  (v.$$lastCommittedViewValue = a),
                  v.$pristine && this.$setDirty(),
                  this.$$parseAndValidate());
            }),
            (this.$$parseAndValidate = function () {
              function b() {
                v.$modelValue !== g && v.$$writeModelToScope();
              }
              var d = v.$$lastCommittedViewValue,
                e = d;
              if ((m = t(e) ? c : !0))
                for (var f = 0; f < v.$parsers.length; f++)
                  if (((e = v.$parsers[f](e)), t(e))) {
                    m = !1;
                    break;
                  }
              y(v.$modelValue) &&
                isNaN(v.$modelValue) &&
                (v.$modelValue = q(a));
              var g = v.$modelValue,
                h = v.$options && v.$options.allowInvalid;
              (v.$$rawModelValue = e),
                h && ((v.$modelValue = e), b()),
                v.$$runValidators(e, v.$$lastCommittedViewValue, function (a) {
                  h || ((v.$modelValue = a ? e : c), b());
                });
            }),
            (this.$$writeModelToScope = function () {
              r(a, v.$modelValue),
                f(v.$viewChangeListeners, function (a) {
                  try {
                    a();
                  } catch (c) {
                    b(c);
                  }
                });
            }),
            (this.$setViewValue = function (a, b) {
              (v.$viewValue = a),
                (!v.$options || v.$options.updateOnDefault) &&
                  v.$$debounceViewValueCommit(b);
            }),
            (this.$$debounceViewValueCommit = function (b) {
              var c,
                d = 0,
                e = v.$options;
              e &&
                u(e.debounce) &&
                ((c = e.debounce),
                y(c)
                  ? (d = c)
                  : y(c[b])
                  ? (d = c[b])
                  : y(c["default"]) && (d = c["default"])),
                i.cancel(s),
                d
                  ? (s = i(function () {
                      v.$commitViewValue();
                    }, d))
                  : j.$$phase
                  ? v.$commitViewValue()
                  : a.$apply(function () {
                      v.$commitViewValue();
                    });
            }),
            a.$watch(function () {
              var b = q(a);
              if (
                b !== v.$modelValue &&
                (v.$modelValue === v.$modelValue || b === b)
              ) {
                (v.$modelValue = v.$$rawModelValue = b), (m = c);
                for (var d = v.$formatters, e = d.length, f = b; e--; )
                  f = d[e](f);
                v.$viewValue !== f &&
                  (v.$$updateEmptyClasses(f),
                  (v.$viewValue = v.$$lastCommittedViewValue = f),
                  v.$render(),
                  v.$$runValidators(b, f, p));
              }
              return b;
            });
        },
      ],
      vg = [
        "$rootScope",
        function (a) {
          return {
            restrict: "A",
            require: ["ngModel", "^?form", "^?ngModelOptions"],
            controller: ug,
            priority: 1,
            compile: function (b) {
              return (
                b.addClass(mg).addClass(og).addClass(kg),
                {
                  pre: function (a, b, c, d) {
                    var e = d[0],
                      f = d[1] || e.$$parentForm;
                    e.$$setOptions(d[2] && d[2].$options),
                      f.$addControl(e),
                      c.$observe("name", function (a) {
                        e.$name !== a && e.$$parentForm.$$renameControl(e, a);
                      }),
                      a.$on("$destroy", function () {
                        e.$$parentForm.$removeControl(e);
                      });
                  },
                  post: function (b, c, d, e) {
                    var f = e[0];
                    f.$options &&
                      f.$options.updateOn &&
                      c.on(f.$options.updateOn, function (a) {
                        f.$$debounceViewValueCommit(a && a.type);
                      }),
                      c.on("blur", function (c) {
                        f.$touched ||
                          (a.$$phase
                            ? b.$evalAsync(f.$setTouched)
                            : b.$apply(f.$setTouched));
                      });
                  },
                }
              );
            },
          };
        },
      ],
      wg = /(\s+|^)default(\s+|$)/,
      xg = function () {
        return {
          restrict: "A",
          controller: [
            "$scope",
            "$attrs",
            function (a, b) {
              var c = this;
              (this.$options = P(a.$eval(b.ngModelOptions))),
                u(this.$options.updateOn)
                  ? ((this.$options.updateOnDefault = !1),
                    (this.$options.updateOn = Vd(
                      this.$options.updateOn.replace(wg, function () {
                        return (c.$options.updateOnDefault = !0), " ";
                      })
                    )))
                  : (this.$options.updateOnDefault = !0);
            },
          ],
        };
      },
      yg = gd({ terminal: !0, priority: 1e3 }),
      zg = d("ngOptions"),
      Ag =
        /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
      Bg = [
        "$compile",
        "$parse",
        function (a, c) {
          function d(a, b, d) {
            function f(a, b, c, d, e) {
              (this.selectValue = a),
                (this.viewValue = b),
                (this.label = c),
                (this.group = d),
                (this.disabled = e);
            }
            function g(a) {
              var b;
              if (!j && e(a)) b = a;
              else {
                b = [];
                for (var c in a)
                  a.hasOwnProperty(c) && "$" !== c.charAt(0) && b.push(c);
              }
              return b;
            }
            var h = a.match(Ag);
            if (!h)
              throw zg(
                "iexp",
                "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}",
                a,
                _(b)
              );
            var i = h[5] || h[7],
              j = h[6],
              k = / as /.test(h[0]) && h[1],
              l = h[9],
              m = c(h[2] ? h[1] : i),
              n = k && c(k),
              o = n || m,
              p = l && c(l),
              q = l
                ? function (a, b) {
                    return p(d, b);
                  }
                : function (a) {
                    return _a(a);
                  },
              r = function (a, b) {
                return q(a, x(a, b));
              },
              s = c(h[2] || h[1]),
              t = c(h[3] || ""),
              u = c(h[4] || ""),
              v = c(h[8]),
              w = {},
              x = j
                ? function (a, b) {
                    return (w[j] = b), (w[i] = a), w;
                  }
                : function (a) {
                    return (w[i] = a), w;
                  };
            return {
              trackBy: l,
              getTrackByValue: r,
              getWatchables: c(v, function (a) {
                var b = [];
                a = a || [];
                for (var c = g(a), e = c.length, f = 0; e > f; f++) {
                  var i = a === c ? f : c[f],
                    j = (a[i], x(a[i], i)),
                    k = q(a[i], j);
                  if ((b.push(k), h[2] || h[1])) {
                    var l = s(d, j);
                    b.push(l);
                  }
                  if (h[4]) {
                    var m = u(d, j);
                    b.push(m);
                  }
                }
                return b;
              }),
              getOptions: function () {
                for (
                  var a = [],
                    b = {},
                    c = v(d) || [],
                    e = g(c),
                    h = e.length,
                    i = 0;
                  h > i;
                  i++
                ) {
                  var j = c === e ? i : e[i],
                    k = c[j],
                    m = x(k, j),
                    n = o(d, m),
                    p = q(n, m),
                    w = s(d, m),
                    y = t(d, m),
                    z = u(d, m),
                    A = new f(p, n, w, y, z);
                  a.push(A), (b[p] = A);
                }
                return {
                  items: a,
                  selectValueMap: b,
                  getOptionFromViewValue: function (a) {
                    return b[r(a)];
                  },
                  getViewValueFromOption: function (a) {
                    return l ? Rd.copy(a.viewValue) : a.viewValue;
                  },
                };
              },
            };
          }
          function g(b, c, e, g) {
            function j(a, b) {
              (a.element = b),
                (b.disabled = a.disabled),
                a.label !== b.label &&
                  ((b.label = a.label), (b.textContent = a.label)),
                a.value !== b.value && (b.value = a.selectValue);
            }
            function k(a, b, c, d) {
              var e;
              return (
                b && Dd(b.nodeName) === c
                  ? (e = b)
                  : ((e = d.cloneNode(!1)),
                    b ? a.insertBefore(e, b) : a.appendChild(e)),
                e
              );
            }
            function l(a) {
              for (var b; a; ) (b = a.nextSibling), Ta(a), (a = b);
            }
            function m(a) {
              var b = o && o[0],
                c = x && x[0];
              if (b || c)
                for (
                  ;
                  a &&
                  (a === b ||
                    a === c ||
                    a.nodeType === ee ||
                    ("option" === N(a) && "" === a.value));

                )
                  a = a.nextSibling;
              return a;
            }
            function n() {
              var a = y && p.readValue();
              y = z.getOptions();
              var b = {},
                d = c[0].firstChild;
              if (
                (w && c.prepend(o),
                (d = m(d)),
                y.items.forEach(function (a) {
                  var e, f, g;
                  u(a.group)
                    ? ((e = b[a.group]),
                      e ||
                        ((f = k(c[0], d, "optgroup", i)),
                        (d = f.nextSibling),
                        (f.label = a.group),
                        (e = b[a.group] =
                          {
                            groupElement: f,
                            currentOptionElement: f.firstChild,
                          })),
                      (g = k(
                        e.groupElement,
                        e.currentOptionElement,
                        "option",
                        h
                      )),
                      j(a, g),
                      (e.currentOptionElement = g.nextSibling))
                    : ((g = k(c[0], d, "option", h)),
                      j(a, g),
                      (d = g.nextSibling));
                }),
                Object.keys(b).forEach(function (a) {
                  l(b[a].currentOptionElement);
                }),
                l(d),
                q.$render(),
                !q.$isEmpty(a))
              ) {
                var e = p.readValue(),
                  f = z.trackBy || r;
                (f ? R(a, e) : a === e) || (q.$setViewValue(e), q.$render());
              }
            }
            for (
              var o,
                p = g[0],
                q = g[1],
                r = e.multiple,
                s = 0,
                t = c.children(),
                v = t.length;
              v > s;
              s++
            )
              if ("" === t[s].value) {
                o = t.eq(s);
                break;
              }
            var w = !!o,
              x = Id(h.cloneNode(!1));
            x.val("?");
            var y,
              z = d(e.ngOptions, c, b),
              A = function () {
                w || c.prepend(o),
                  c.val(""),
                  o.prop("selected", !0),
                  o.attr("selected", !0);
              },
              B = function () {
                w || o.remove();
              },
              C = function () {
                c.prepend(x),
                  c.val("?"),
                  x.prop("selected", !0),
                  x.attr("selected", !0);
              },
              D = function () {
                x.remove();
              };
            r
              ? ((q.$isEmpty = function (a) {
                  return !a || 0 === a.length;
                }),
                (p.writeValue = function (a) {
                  y.items.forEach(function (a) {
                    a.element.selected = !1;
                  }),
                    a &&
                      a.forEach(function (a) {
                        var b = y.getOptionFromViewValue(a);
                        b && !b.disabled && (b.element.selected = !0);
                      });
                }),
                (p.readValue = function () {
                  var a = c.val() || [],
                    b = [];
                  return (
                    f(a, function (a) {
                      var c = y.selectValueMap[a];
                      c && !c.disabled && b.push(y.getViewValueFromOption(c));
                    }),
                    b
                  );
                }),
                z.trackBy &&
                  b.$watchCollection(
                    function () {
                      return Td(q.$viewValue)
                        ? q.$viewValue.map(function (a) {
                            return z.getTrackByValue(a);
                          })
                        : void 0;
                    },
                    function () {
                      q.$render();
                    }
                  ))
              : ((p.writeValue = function (a) {
                  var b = y.getOptionFromViewValue(a);
                  b && !b.disabled
                    ? c[0].value !== b.selectValue &&
                      (D(),
                      B(),
                      (c[0].value = b.selectValue),
                      (b.element.selected = !0),
                      b.element.setAttribute("selected", "selected"))
                    : null === a || w
                    ? (D(), A())
                    : (B(), C());
                }),
                (p.readValue = function () {
                  var a = y.selectValueMap[c.val()];
                  return a && !a.disabled
                    ? (B(), D(), y.getViewValueFromOption(a))
                    : null;
                }),
                z.trackBy &&
                  b.$watch(
                    function () {
                      return z.getTrackByValue(q.$viewValue);
                    },
                    function () {
                      q.$render();
                    }
                  )),
              w
                ? (o.remove(), a(o)(b), o.removeClass("ng-scope"))
                : (o = Id(h.cloneNode(!1))),
              n(),
              b.$watchCollection(z.getWatchables, n);
          }
          var h = b.createElement("option"),
            i = b.createElement("optgroup");
          return {
            restrict: "A",
            terminal: !0,
            require: ["select", "ngModel"],
            link: {
              pre: function (a, b, c, d) {
                d[0].registerOption = p;
              },
              post: g,
            },
          };
        },
      ],
      Cg = [
        "$locale",
        "$interpolate",
        "$log",
        function (a, b, c) {
          var d = /{}/g,
            e = /^when(Minus)?(.+)$/;
          return {
            link: function (g, h, i) {
              function j(a) {
                h.text(a || "");
              }
              var k,
                l = i.count,
                m = i.$attr.when && h.attr(i.$attr.when),
                n = i.offset || 0,
                o = g.$eval(m) || {},
                q = {},
                r = b.startSymbol(),
                s = b.endSymbol(),
                u = r + l + "-" + n + s,
                v = Rd.noop;
              f(i, function (a, b) {
                var c = e.exec(b);
                if (c) {
                  var d = (c[1] ? "-" : "") + Dd(c[2]);
                  o[d] = h.attr(i.$attr[b]);
                }
              }),
                f(o, function (a, c) {
                  q[c] = b(a.replace(d, u));
                }),
                g.$watch(l, function (b) {
                  var d = parseFloat(b),
                    e = isNaN(d);
                  if (
                    (e || d in o || (d = a.pluralCat(d - n)),
                    d !== k && !(e && y(k) && isNaN(k)))
                  ) {
                    v();
                    var f = q[d];
                    t(f)
                      ? (null != b &&
                          c.debug(
                            "ngPluralize: no rule defined for '" +
                              d +
                              "' in " +
                              m
                          ),
                        (v = p),
                        j())
                      : (v = g.$watch(f, j)),
                      (k = d);
                  }
                });
            },
          };
        },
      ],
      Dg = [
        "$parse",
        "$animate",
        function (a, g) {
          var h = "$$NG_REMOVED",
            i = d("ngRepeat"),
            j = function (a, b, c, d, e, f, g) {
              (a[c] = d),
                e && (a[e] = f),
                (a.$index = b),
                (a.$first = 0 === b),
                (a.$last = b === g - 1),
                (a.$middle = !(a.$first || a.$last)),
                (a.$odd = !(a.$even = 0 === (1 & b)));
            },
            k = function (a) {
              return a.clone[0];
            },
            l = function (a) {
              return a.clone[a.clone.length - 1];
            };
          return {
            restrict: "A",
            multiElement: !0,
            transclude: "element",
            priority: 1e3,
            terminal: !0,
            $$tlb: !0,
            compile: function (d, m) {
              var n = m.ngRepeat,
                o = b.createComment(" end ngRepeat: " + n + " "),
                p = n.match(
                  /^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/
                );
              if (!p)
                throw i(
                  "iexp",
                  "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.",
                  n
                );
              var q = p[1],
                r = p[2],
                s = p[3],
                t = p[4];
              if (
                ((p = q.match(
                  /^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/
                )),
                !p)
              )
                throw i(
                  "iidexp",
                  "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.",
                  q
                );
              var u = p[3] || p[1],
                v = p[2];
              if (
                s &&
                (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(s) ||
                  /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(
                    s
                  ))
              )
                throw i(
                  "badident",
                  "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.",
                  s
                );
              var w,
                x,
                y,
                z,
                A = { $id: _a };
              return (
                t
                  ? (w = a(t))
                  : ((y = function (a, b) {
                      return _a(b);
                    }),
                    (z = function (a) {
                      return a;
                    })),
                function (a, b, d, m, p) {
                  w &&
                    (x = function (b, c, d) {
                      return (
                        v && (A[v] = b), (A[u] = c), (A.$index = d), w(a, A)
                      );
                    });
                  var q = ra();
                  a.$watchCollection(r, function (d) {
                    var m,
                      r,
                      t,
                      w,
                      A,
                      B,
                      C,
                      D,
                      E,
                      F,
                      G,
                      H,
                      I = b[0],
                      J = ra();
                    if ((s && (a[s] = d), e(d))) (E = d), (D = x || y);
                    else {
                      (D = x || z), (E = []);
                      for (var K in d)
                        Cd.call(d, K) && "$" !== K.charAt(0) && E.push(K);
                    }
                    for (w = E.length, G = new Array(w), m = 0; w > m; m++)
                      if (
                        ((A = d === E ? m : E[m]),
                        (B = d[A]),
                        (C = D(A, B, m)),
                        q[C])
                      )
                        (F = q[C]), delete q[C], (J[C] = F), (G[m] = F);
                      else {
                        if (J[C])
                          throw (
                            (f(G, function (a) {
                              a && a.scope && (q[a.id] = a);
                            }),
                            i(
                              "dupes",
                              "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}",
                              n,
                              C,
                              B
                            ))
                          );
                        (G[m] = { id: C, scope: c, clone: c }), (J[C] = !0);
                      }
                    for (var L in q) {
                      if (
                        ((F = q[L]),
                        (H = qa(F.clone)),
                        g.leave(H),
                        H[0].parentNode)
                      )
                        for (m = 0, r = H.length; r > m; m++) H[m][h] = !0;
                      F.scope.$destroy();
                    }
                    for (m = 0; w > m; m++)
                      if (
                        ((A = d === E ? m : E[m]),
                        (B = d[A]),
                        (F = G[m]),
                        F.scope)
                      ) {
                        t = I;
                        do t = t.nextSibling;
                        while (t && t[h]);
                        k(F) != t && g.move(qa(F.clone), null, Id(I)),
                          (I = l(F)),
                          j(F.scope, m, u, B, v, A, w);
                      } else
                        p(function (a, b) {
                          F.scope = b;
                          var c = o.cloneNode(!1);
                          (a[a.length++] = c),
                            g.enter(a, null, Id(I)),
                            (I = c),
                            (F.clone = a),
                            (J[F.id] = F),
                            j(F.scope, m, u, B, v, A, w);
                        });
                    q = J;
                  });
                }
              );
            },
          };
        },
      ],
      Eg = "ng-hide",
      Fg = "ng-hide-animate",
      Gg = [
        "$animate",
        function (a) {
          return {
            restrict: "A",
            multiElement: !0,
            link: function (b, c, d) {
              b.$watch(d.ngShow, function (b) {
                a[b ? "removeClass" : "addClass"](c, Eg, { tempClasses: Fg });
              });
            },
          };
        },
      ],
      Hg = [
        "$animate",
        function (a) {
          return {
            restrict: "A",
            multiElement: !0,
            link: function (b, c, d) {
              b.$watch(d.ngHide, function (b) {
                a[b ? "addClass" : "removeClass"](c, Eg, { tempClasses: Fg });
              });
            },
          };
        },
      ],
      Ig = gd(function (a, b, c) {
        a.$watch(
          c.ngStyle,
          function (a, c) {
            c &&
              a !== c &&
              f(c, function (a, c) {
                b.css(c, "");
              }),
              a && b.css(a);
          },
          !0
        );
      }),
      Jg = [
        "$animate",
        function (a) {
          return {
            require: "ngSwitch",
            controller: [
              "$scope",
              function () {
                this.cases = {};
              },
            ],
            link: function (c, d, e, g) {
              var h = e.ngSwitch || e.on,
                i = [],
                j = [],
                k = [],
                l = [],
                m = function (a, b) {
                  return function () {
                    a.splice(b, 1);
                  };
                };
              c.$watch(h, function (c) {
                var d, e;
                for (d = 0, e = k.length; e > d; ++d) a.cancel(k[d]);
                for (k.length = 0, d = 0, e = l.length; e > d; ++d) {
                  var h = qa(j[d].clone);
                  l[d].$destroy();
                  var n = (k[d] = a.leave(h));
                  n.then(m(k, d));
                }
                (j.length = 0),
                  (l.length = 0),
                  (i = g.cases["!" + c] || g.cases["?"]) &&
                    f(i, function (c) {
                      c.transclude(function (d, e) {
                        l.push(e);
                        var f = c.element;
                        d[d.length++] = b.createComment(" end ngSwitchWhen: ");
                        var g = { clone: d };
                        j.push(g), a.enter(d, f.parent(), f);
                      });
                    });
              });
            },
          };
        },
      ],
      Kg = gd({
        transclude: "element",
        priority: 1200,
        require: "^ngSwitch",
        multiElement: !0,
        link: function (a, b, c, d, e) {
          (d.cases["!" + c.ngSwitchWhen] = d.cases["!" + c.ngSwitchWhen] || []),
            d.cases["!" + c.ngSwitchWhen].push({ transclude: e, element: b });
        },
      }),
      Lg = gd({
        transclude: "element",
        priority: 1200,
        require: "^ngSwitch",
        multiElement: !0,
        link: function (a, b, c, d, e) {
          (d.cases["?"] = d.cases["?"] || []),
            d.cases["?"].push({ transclude: e, element: b });
        },
      }),
      Mg = d("ngTransclude"),
      Ng = gd({
        restrict: "EAC",
        link: function (a, b, c, d, e) {
          function f(a) {
            a.length && (b.empty(), b.append(a));
          }
          if (
            (c.ngTransclude === c.$attr.ngTransclude && (c.ngTransclude = ""),
            !e)
          )
            throw Mg(
              "orphan",
              "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}",
              _(b)
            );
          var g = c.ngTransclude || c.ngTranscludeSlot;
          e(f, null, g);
        },
      }),
      Og = [
        "$templateCache",
        function (a) {
          return {
            restrict: "E",
            terminal: !0,
            compile: function (b, c) {
              if ("text/ng-template" == c.type) {
                var d = c.id,
                  e = b[0].text;
                a.put(d, e);
              }
            },
          };
        },
      ],
      Pg = { $setViewValue: p, $render: p },
      Qg = [
        "$element",
        "$scope",
        "$attrs",
        function (a, d, e) {
          var f = this,
            g = new ab();
          (f.ngModelCtrl = Pg),
            (f.unknownOption = Id(b.createElement("option"))),
            (f.renderUnknownOption = function (b) {
              var c = "? " + _a(b) + " ?";
              f.unknownOption.val(c), a.prepend(f.unknownOption), a.val(c);
            }),
            d.$on("$destroy", function () {
              f.renderUnknownOption = p;
            }),
            (f.removeUnknownOption = function () {
              f.unknownOption.parent() && f.unknownOption.remove();
            }),
            (f.readValue = function () {
              return f.removeUnknownOption(), a.val();
            }),
            (f.writeValue = function (b) {
              f.hasOption(b)
                ? (f.removeUnknownOption(),
                  a.val(b),
                  "" === b && f.emptyOption.prop("selected", !0))
                : null == b && f.emptyOption
                ? (f.removeUnknownOption(), a.val(""))
                : f.renderUnknownOption(b);
            }),
            (f.addOption = function (a, b) {
              if (b[0].nodeType !== ee) {
                oa(a, '"option value"'), "" === a && (f.emptyOption = b);
                var c = g.get(a) || 0;
                g.put(a, c + 1), f.ngModelCtrl.$render(), zd(b);
              }
            }),
            (f.removeOption = function (a) {
              var b = g.get(a);
              b &&
                (1 === b
                  ? (g.remove(a), "" === a && (f.emptyOption = c))
                  : g.put(a, b - 1));
            }),
            (f.hasOption = function (a) {
              return !!g.get(a);
            }),
            (f.registerOption = function (a, b, c, d, e) {
              if (d) {
                var g;
                c.$observe("value", function (a) {
                  u(g) && f.removeOption(g), (g = a), f.addOption(a, b);
                });
              } else
                e
                  ? a.$watch(e, function (a, d) {
                      c.$set("value", a),
                        d !== a && f.removeOption(d),
                        f.addOption(a, b);
                    })
                  : f.addOption(c.value, b);
              b.on("$destroy", function () {
                f.removeOption(c.value), f.ngModelCtrl.$render();
              });
            });
        },
      ],
      Rg = function () {
        function a(a, b, c, d) {
          var e = d[1];
          if (e) {
            var g = d[0];
            if (
              ((g.ngModelCtrl = e),
              b.on("change", function () {
                a.$apply(function () {
                  e.$setViewValue(g.readValue());
                });
              }),
              c.multiple)
            ) {
              (g.readValue = function () {
                var a = [];
                return (
                  f(b.find("option"), function (b) {
                    b.selected && a.push(b.value);
                  }),
                  a
                );
              }),
                (g.writeValue = function (a) {
                  var c = new ab(a);
                  f(b.find("option"), function (a) {
                    a.selected = u(c.get(a.value));
                  });
                });
              var h,
                i = NaN;
              a.$watch(function () {
                i !== e.$viewValue ||
                  R(h, e.$viewValue) ||
                  ((h = Q(e.$viewValue)), e.$render()),
                  (i = e.$viewValue);
              }),
                (e.$isEmpty = function (a) {
                  return !a || 0 === a.length;
                });
            }
          }
        }
        function b(a, b, c, d) {
          var e = d[1];
          if (e) {
            var f = d[0];
            e.$render = function () {
              f.writeValue(e.$viewValue);
            };
          }
        }
        return {
          restrict: "E",
          require: ["select", "?ngModel"],
          controller: Qg,
          priority: 1,
          link: { pre: a, post: b },
        };
      },
      Sg = [
        "$interpolate",
        function (a) {
          return {
            restrict: "E",
            priority: 100,
            compile: function (b, c) {
              if (u(c.value)) var d = a(c.value, !0);
              else {
                var e = a(b.text(), !0);
                e || c.$set("value", b.text());
              }
              return function (a, b, c) {
                var f = "$selectController",
                  g = b.parent(),
                  h = g.data(f) || g.parent().data(f);
                h && h.registerOption(a, b, c, d, e);
              };
            },
          };
        },
      ],
      Tg = r({ restrict: "E", terminal: !1 }),
      Ug = function () {
        return {
          restrict: "A",
          require: "?ngModel",
          link: function (a, b, c, d) {
            d &&
              ((c.required = !0),
              (d.$validators.required = function (a, b) {
                return !c.required || !d.$isEmpty(b);
              }),
              c.$observe("required", function () {
                d.$validate();
              }));
          },
        };
      },
      Vg = function () {
        return {
          restrict: "A",
          require: "?ngModel",
          link: function (a, b, e, f) {
            if (f) {
              var g,
                h = e.ngPattern || e.pattern;
              e.$observe("pattern", function (a) {
                if (
                  (x(a) && a.length > 0 && (a = new RegExp("^" + a + "$")),
                  a && !a.test)
                )
                  throw d("ngPattern")(
                    "noregexp",
                    "Expected {0} to be a RegExp but was {1}. Element: {2}",
                    h,
                    a,
                    _(b)
                  );
                (g = a || c), f.$validate();
              }),
                (f.$validators.pattern = function (a, b) {
                  return f.$isEmpty(b) || t(g) || g.test(b);
                });
            }
          },
        };
      },
      Wg = function () {
        return {
          restrict: "A",
          require: "?ngModel",
          link: function (a, b, c, d) {
            if (d) {
              var e = -1;
              c.$observe("maxlength", function (a) {
                var b = n(a);
                (e = isNaN(b) ? -1 : b), d.$validate();
              }),
                (d.$validators.maxlength = function (a, b) {
                  return 0 > e || d.$isEmpty(b) || b.length <= e;
                });
            }
          },
        };
      },
      Xg = function () {
        return {
          restrict: "A",
          require: "?ngModel",
          link: function (a, b, c, d) {
            if (d) {
              var e = 0;
              c.$observe("minlength", function (a) {
                (e = n(a) || 0), d.$validate();
              }),
                (d.$validators.minlength = function (a, b) {
                  return d.$isEmpty(b) || b.length >= e;
                });
            }
          },
        };
      };
    return a.angular.bootstrap
      ? void console.log("WARNING: Tried to load angular more than once.")
      : (la(),
        va(Rd),
        Rd.module(
          "ngLocale",
          [],
          [
            "$provide",
            function (a) {
              function b(a) {
                a += "";
                var b = a.indexOf(".");
                return -1 == b ? 0 : a.length - b - 1;
              }
              function d(a, d) {
                var e = d;
                c === e && (e = Math.min(b(a), 3));
                var f = Math.pow(10, e),
                  g = ((a * f) | 0) % f;
                return { v: e, f: g };
              }
              var e = {
                ZERO: "zero",
                ONE: "one",
                TWO: "two",
                FEW: "few",
                MANY: "many",
                OTHER: "other",
              };
              a.value("$locale", {
                DATETIME_FORMATS: {
                  AMPMS: ["AM", "PM"],
                  DAY: [
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  ERANAMES: ["Before Christ", "Anno Domini"],
                  ERAS: ["BC", "AD"],
                  FIRSTDAYOFWEEK: 6,
                  MONTH: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                  ],
                  SHORTDAY: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                  SHORTMONTH: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                  ],
                  STANDALONEMONTH: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                  ],
                  WEEKENDRANGE: [5, 6],
                  fullDate: "EEEE, MMMM d, y",
                  longDate: "MMMM d, y",
                  medium: "MMM d, y h:mm:ss a",
                  mediumDate: "MMM d, y",
                  mediumTime: "h:mm:ss a",
                  short: "M/d/yy h:mm a",
                  shortDate: "M/d/yy",
                  shortTime: "h:mm a",
                },
                NUMBER_FORMATS: {
                  CURRENCY_SYM: "$",
                  DECIMAL_SEP: ".",
                  GROUP_SEP: ",",
                  PATTERNS: [
                    {
                      gSize: 3,
                      lgSize: 3,
                      maxFrac: 3,
                      minFrac: 0,
                      minInt: 1,
                      negPre: "-",
                      negSuf: "",
                      posPre: "",
                      posSuf: "",
                    },
                    {
                      gSize: 3,
                      lgSize: 3,
                      maxFrac: 2,
                      minFrac: 2,
                      minInt: 1,
                      negPre: "-¤",
                      negSuf: "",
                      posPre: "¤",
                      posSuf: "",
                    },
                  ],
                },
                id: "en-us",
                localeID: "en_US",
                pluralCat: function (a, b) {
                  var c = 0 | a,
                    f = d(a, b);
                  return 1 == c && 0 == f.v ? e.ONE : e.OTHER;
                },
              });
            },
          ]
        ),
        void Id(b).ready(function () {
          ga(b, ha);
        }));
  })(window, document),
  !window.angular.$$csp().noInlineStyle &&
    window.angular
      .element(document.head)
      .prepend(
        '<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>'
      ),
  "undefined" == typeof jQuery)
)
  throw new Error("Bootstrap's JavaScript requires jQuery");
+(function (a) {
  "use strict";
  var b = a.fn.jquery.split(" ")[0].split(".");
  if (
    (b[0] < 2 && b[1] < 9) ||
    (1 == b[0] && 9 == b[1] && b[2] < 1) ||
    b[0] > 2
  )
    throw new Error(
      "Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3"
    );
})(jQuery),
  +(function (a) {
    "use strict";
    function b() {
      var a = document.createElement("bootstrap"),
        b = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend",
        };
      for (var c in b) if (void 0 !== a.style[c]) return { end: b[c] };
      return !1;
    }
    (a.fn.emulateTransitionEnd = function (b) {
      var c = !1,
        d = this;
      a(this).one("bsTransitionEnd", function () {
        c = !0;
      });
      var e = function () {
        c || a(d).trigger(a.support.transition.end);
      };
      return setTimeout(e, b), this;
    }),
      a(function () {
        (a.support.transition = b()),
          a.support.transition &&
            (a.event.special.bsTransitionEnd = {
              bindType: a.support.transition.end,
              delegateType: a.support.transition.end,
              handle: function (b) {
                return a(b.target).is(this)
                  ? b.handleObj.handler.apply(this, arguments)
                  : void 0;
              },
            });
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var c = a(this),
          e = c.data("bs.alert");
        e || c.data("bs.alert", (e = new d(this))),
          "string" == typeof b && e[b].call(c);
      });
    }
    var c = '[data-dismiss="alert"]',
      d = function (b) {
        a(b).on("click", c, this.close);
      };
    (d.VERSION = "3.3.6"),
      (d.TRANSITION_DURATION = 150),
      (d.prototype.close = function (b) {
        function c() {
          g.detach().trigger("closed.bs.alert").remove();
        }
        var e = a(this),
          f = e.attr("data-target");
        f || ((f = e.attr("href")), (f = f && f.replace(/.*(?=#[^\s]*$)/, "")));
        var g = a(f);
        b && b.preventDefault(),
          g.length || (g = e.closest(".alert")),
          g.trigger((b = a.Event("close.bs.alert"))),
          b.isDefaultPrevented() ||
            (g.removeClass("in"),
            a.support.transition && g.hasClass("fade")
              ? g
                  .one("bsTransitionEnd", c)
                  .emulateTransitionEnd(d.TRANSITION_DURATION)
              : c());
      });
    var e = a.fn.alert;
    (a.fn.alert = b),
      (a.fn.alert.Constructor = d),
      (a.fn.alert.noConflict = function () {
        return (a.fn.alert = e), this;
      }),
      a(document).on("click.bs.alert.data-api", c, d.prototype.close);
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.button"),
          f = "object" == typeof b && b;
        e || d.data("bs.button", (e = new c(this, f))),
          "toggle" == b ? e.toggle() : b && e.setState(b);
      });
    }
    var c = function (b, d) {
      (this.$element = a(b)),
        (this.options = a.extend({}, c.DEFAULTS, d)),
        (this.isLoading = !1);
    };
    (c.VERSION = "3.3.6"),
      (c.DEFAULTS = { loadingText: "loading..." }),
      (c.prototype.setState = function (b) {
        var c = "disabled",
          d = this.$element,
          e = d.is("input") ? "val" : "html",
          f = d.data();
        (b += "Text"),
          null == f.resetText && d.data("resetText", d[e]()),
          setTimeout(
            a.proxy(function () {
              d[e](null == f[b] ? this.options[b] : f[b]),
                "loadingText" == b
                  ? ((this.isLoading = !0), d.addClass(c).attr(c, c))
                  : this.isLoading &&
                    ((this.isLoading = !1), d.removeClass(c).removeAttr(c));
            }, this),
            0
          );
      }),
      (c.prototype.toggle = function () {
        var a = !0,
          b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
          var c = this.$element.find("input");
          "radio" == c.prop("type")
            ? (c.prop("checked") && (a = !1),
              b.find(".active").removeClass("active"),
              this.$element.addClass("active"))
            : "checkbox" == c.prop("type") &&
              (c.prop("checked") !== this.$element.hasClass("active") &&
                (a = !1),
              this.$element.toggleClass("active")),
            c.prop("checked", this.$element.hasClass("active")),
            a && c.trigger("change");
        } else
          this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
            this.$element.toggleClass("active");
      });
    var d = a.fn.button;
    (a.fn.button = b),
      (a.fn.button.Constructor = c),
      (a.fn.button.noConflict = function () {
        return (a.fn.button = d), this;
      }),
      a(document)
        .on(
          "click.bs.button.data-api",
          '[data-toggle^="button"]',
          function (c) {
            var d = a(c.target);
            d.hasClass("btn") || (d = d.closest(".btn")),
              b.call(d, "toggle"),
              a(c.target).is('input[type="radio"]') ||
                a(c.target).is('input[type="checkbox"]') ||
                c.preventDefault();
          }
        )
        .on(
          "focus.bs.button.data-api blur.bs.button.data-api",
          '[data-toggle^="button"]',
          function (b) {
            a(b.target)
              .closest(".btn")
              .toggleClass("focus", /^focus(in)?$/.test(b.type));
          }
        );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.carousel"),
          f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
          g = "string" == typeof b ? b : f.slide;
        e || d.data("bs.carousel", (e = new c(this, f))),
          "number" == typeof b
            ? e.to(b)
            : g
            ? e[g]()
            : f.interval && e.pause().cycle();
      });
    }
    var c = function (b, c) {
      (this.$element = a(b)),
        (this.$indicators = this.$element.find(".carousel-indicators")),
        (this.options = c),
        (this.paused = null),
        (this.sliding = null),
        (this.interval = null),
        (this.$active = null),
        (this.$items = null),
        this.options.keyboard &&
          this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)),
        "hover" == this.options.pause &&
          !("ontouchstart" in document.documentElement) &&
          this.$element
            .on("mouseenter.bs.carousel", a.proxy(this.pause, this))
            .on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
    };
    (c.VERSION = "3.3.6"),
      (c.TRANSITION_DURATION = 600),
      (c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }),
      (c.prototype.keydown = function (a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
          switch (a.which) {
            case 37:
              this.prev();
              break;
            case 39:
              this.next();
              break;
            default:
              return;
          }
          a.preventDefault();
        }
      }),
      (c.prototype.cycle = function (b) {
        return (
          b || (this.paused = !1),
          this.interval && clearInterval(this.interval),
          this.options.interval &&
            !this.paused &&
            (this.interval = setInterval(
              a.proxy(this.next, this),
              this.options.interval
            )),
          this
        );
      }),
      (c.prototype.getItemIndex = function (a) {
        return (
          (this.$items = a.parent().children(".item")),
          this.$items.index(a || this.$active)
        );
      }),
      (c.prototype.getItemForDirection = function (a, b) {
        var c = this.getItemIndex(b),
          d =
            ("prev" == a && 0 === c) ||
            ("next" == a && c == this.$items.length - 1);
        if (d && !this.options.wrap) return b;
        var e = "prev" == a ? -1 : 1,
          f = (c + e) % this.$items.length;
        return this.$items.eq(f);
      }),
      (c.prototype.to = function (a) {
        var b = this,
          c = this.getItemIndex(
            (this.$active = this.$element.find(".item.active"))
          );
        return a > this.$items.length - 1 || 0 > a
          ? void 0
          : this.sliding
          ? this.$element.one("slid.bs.carousel", function () {
              b.to(a);
            })
          : c == a
          ? this.pause().cycle()
          : this.slide(a > c ? "next" : "prev", this.$items.eq(a));
      }),
      (c.prototype.pause = function (b) {
        return (
          b || (this.paused = !0),
          this.$element.find(".next, .prev").length &&
            a.support.transition &&
            (this.$element.trigger(a.support.transition.end), this.cycle(!0)),
          (this.interval = clearInterval(this.interval)),
          this
        );
      }),
      (c.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next");
      }),
      (c.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev");
      }),
      (c.prototype.slide = function (b, d) {
        var e = this.$element.find(".item.active"),
          f = d || this.getItemForDirection(b, e),
          g = this.interval,
          h = "next" == b ? "left" : "right",
          i = this;
        if (f.hasClass("active")) return (this.sliding = !1);
        var j = f[0],
          k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: h });
        if ((this.$element.trigger(k), !k.isDefaultPrevented())) {
          if (
            ((this.sliding = !0), g && this.pause(), this.$indicators.length)
          ) {
            this.$indicators.find(".active").removeClass("active");
            var l = a(this.$indicators.children()[this.getItemIndex(f)]);
            l && l.addClass("active");
          }
          var m = a.Event("slid.bs.carousel", {
            relatedTarget: j,
            direction: h,
          });
          return (
            a.support.transition && this.$element.hasClass("slide")
              ? (f.addClass(b),
                f[0].offsetWidth,
                e.addClass(h),
                f.addClass(h),
                e
                  .one("bsTransitionEnd", function () {
                    f.removeClass([b, h].join(" ")).addClass("active"),
                      e.removeClass(["active", h].join(" ")),
                      (i.sliding = !1),
                      setTimeout(function () {
                        i.$element.trigger(m);
                      }, 0);
                  })
                  .emulateTransitionEnd(c.TRANSITION_DURATION))
              : (e.removeClass("active"),
                f.addClass("active"),
                (this.sliding = !1),
                this.$element.trigger(m)),
            g && this.cycle(),
            this
          );
        }
      });
    var d = a.fn.carousel;
    (a.fn.carousel = b),
      (a.fn.carousel.Constructor = c),
      (a.fn.carousel.noConflict = function () {
        return (a.fn.carousel = d), this;
      });
    var e = function (c) {
      var d,
        e = a(this),
        f = a(
          e.attr("data-target") ||
            ((d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""))
        );
      if (f.hasClass("carousel")) {
        var g = a.extend({}, f.data(), e.data()),
          h = e.attr("data-slide-to");
        h && (g.interval = !1),
          b.call(f, g),
          h && f.data("bs.carousel").to(h),
          c.preventDefault();
      }
    };
    a(document)
      .on("click.bs.carousel.data-api", "[data-slide]", e)
      .on("click.bs.carousel.data-api", "[data-slide-to]", e),
      a(window).on("load", function () {
        a('[data-ride="carousel"]').each(function () {
          var c = a(this);
          b.call(c, c.data());
        });
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      var c,
        d =
          b.attr("data-target") ||
          ((c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""));
      return a(d);
    }
    function c(b) {
      return this.each(function () {
        var c = a(this),
          e = c.data("bs.collapse"),
          f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
        !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1),
          e || c.data("bs.collapse", (e = new d(this, f))),
          "string" == typeof b && e[b]();
      });
    }
    var d = function (b, c) {
      (this.$element = a(b)),
        (this.options = a.extend({}, d.DEFAULTS, c)),
        (this.$trigger = a(
          '[data-toggle="collapse"][href="#' +
            b.id +
            '"],[data-toggle="collapse"][data-target="#' +
            b.id +
            '"]'
        )),
        (this.transitioning = null),
        this.options.parent
          ? (this.$parent = this.getParent())
          : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle();
    };
    (d.VERSION = "3.3.6"),
      (d.TRANSITION_DURATION = 350),
      (d.DEFAULTS = { toggle: !0 }),
      (d.prototype.dimension = function () {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height";
      }),
      (d.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var b,
            e =
              this.$parent &&
              this.$parent.children(".panel").children(".in, .collapsing");
          if (
            !(
              e &&
              e.length &&
              ((b = e.data("bs.collapse")), b && b.transitioning)
            )
          ) {
            var f = a.Event("show.bs.collapse");
            if ((this.$element.trigger(f), !f.isDefaultPrevented())) {
              e &&
                e.length &&
                (c.call(e, "hide"), b || e.data("bs.collapse", null));
              var g = this.dimension();
              this.$element
                .removeClass("collapse")
                .addClass("collapsing")
                [g](0)
                .attr("aria-expanded", !0),
                this.$trigger
                  .removeClass("collapsed")
                  .attr("aria-expanded", !0),
                (this.transitioning = 1);
              var h = function () {
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse in")
                  [g](""),
                  (this.transitioning = 0),
                  this.$element.trigger("shown.bs.collapse");
              };
              if (!a.support.transition) return h.call(this);
              var i = a.camelCase(["scroll", g].join("-"));
              this.$element
                .one("bsTransitionEnd", a.proxy(h, this))
                .emulateTransitionEnd(d.TRANSITION_DURATION)
                [g](this.$element[0][i]);
            }
          }
        }
      }),
      (d.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var b = a.Event("hide.bs.collapse");
          if ((this.$element.trigger(b), !b.isDefaultPrevented())) {
            var c = this.dimension();
            this.$element[c](this.$element[c]())[0].offsetHeight,
              this.$element
                .addClass("collapsing")
                .removeClass("collapse in")
                .attr("aria-expanded", !1),
              this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
              (this.transitioning = 1);
            var e = function () {
              (this.transitioning = 0),
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse")
                  .trigger("hidden.bs.collapse");
            };
            return a.support.transition
              ? void this.$element[c](0)
                  .one("bsTransitionEnd", a.proxy(e, this))
                  .emulateTransitionEnd(d.TRANSITION_DURATION)
              : e.call(this);
          }
        }
      }),
      (d.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
      }),
      (d.prototype.getParent = function () {
        return a(this.options.parent)
          .find(
            '[data-toggle="collapse"][data-parent="' +
              this.options.parent +
              '"]'
          )
          .each(
            a.proxy(function (c, d) {
              var e = a(d);
              this.addAriaAndCollapsedClass(b(e), e);
            }, this)
          )
          .end();
      }),
      (d.prototype.addAriaAndCollapsedClass = function (a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c),
          b.toggleClass("collapsed", !c).attr("aria-expanded", c);
      });
    var e = a.fn.collapse;
    (a.fn.collapse = c),
      (a.fn.collapse.Constructor = d),
      (a.fn.collapse.noConflict = function () {
        return (a.fn.collapse = e), this;
      }),
      a(document).on(
        "click.bs.collapse.data-api",
        '[data-toggle="collapse"]',
        function (d) {
          var e = a(this);
          e.attr("data-target") || d.preventDefault();
          var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : e.data();
          c.call(f, h);
        }
      );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      var c = b.attr("data-target");
      c ||
        ((c = b.attr("href")),
        (c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, "")));
      var d = c && a(c);
      return d && d.length ? d : b.parent();
    }
    function c(c) {
      (c && 3 === c.which) ||
        (a(e).remove(),
        a(f).each(function () {
          var d = a(this),
            e = b(d),
            f = { relatedTarget: this };
          e.hasClass("open") &&
            ((c &&
              "click" == c.type &&
              /input|textarea/i.test(c.target.tagName) &&
              a.contains(e[0], c.target)) ||
              (e.trigger((c = a.Event("hide.bs.dropdown", f))),
              c.isDefaultPrevented() ||
                (d.attr("aria-expanded", "false"),
                e
                  .removeClass("open")
                  .trigger(a.Event("hidden.bs.dropdown", f)))));
        }));
    }
    function d(b) {
      return this.each(function () {
        var c = a(this),
          d = c.data("bs.dropdown");
        d || c.data("bs.dropdown", (d = new g(this))),
          "string" == typeof b && d[b].call(c);
      });
    }
    var e = ".dropdown-backdrop",
      f = '[data-toggle="dropdown"]',
      g = function (b) {
        a(b).on("click.bs.dropdown", this.toggle);
      };
    (g.VERSION = "3.3.6"),
      (g.prototype.toggle = function (d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
          var f = b(e),
            g = f.hasClass("open");
          if ((c(), !g)) {
            "ontouchstart" in document.documentElement &&
              !f.closest(".navbar-nav").length &&
              a(document.createElement("div"))
                .addClass("dropdown-backdrop")
                .insertAfter(a(this))
                .on("click", c);
            var h = { relatedTarget: this };
            if (
              (f.trigger((d = a.Event("show.bs.dropdown", h))),
              d.isDefaultPrevented())
            )
              return;
            e.trigger("focus").attr("aria-expanded", "true"),
              f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h));
          }
          return !1;
        }
      }),
      (g.prototype.keydown = function (c) {
        if (
          /(38|40|27|32)/.test(c.which) &&
          !/input|textarea/i.test(c.target.tagName)
        ) {
          var d = a(this);
          if (
            (c.preventDefault(),
            c.stopPropagation(),
            !d.is(".disabled, :disabled"))
          ) {
            var e = b(d),
              g = e.hasClass("open");
            if ((!g && 27 != c.which) || (g && 27 == c.which))
              return (
                27 == c.which && e.find(f).trigger("focus"), d.trigger("click")
              );
            var h = " li:not(.disabled):visible a",
              i = e.find(".dropdown-menu" + h);
            if (i.length) {
              var j = i.index(c.target);
              38 == c.which && j > 0 && j--,
                40 == c.which && j < i.length - 1 && j++,
                ~j || (j = 0),
                i.eq(j).trigger("focus");
            }
          }
        }
      });
    var h = a.fn.dropdown;
    (a.fn.dropdown = d),
      (a.fn.dropdown.Constructor = g),
      (a.fn.dropdown.noConflict = function () {
        return (a.fn.dropdown = h), this;
      }),
      a(document)
        .on("click.bs.dropdown.data-api", c)
        .on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
          a.stopPropagation();
        })
        .on("click.bs.dropdown.data-api", f, g.prototype.toggle)
        .on("keydown.bs.dropdown.data-api", f, g.prototype.keydown)
        .on(
          "keydown.bs.dropdown.data-api",
          ".dropdown-menu",
          g.prototype.keydown
        );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b, d) {
      return this.each(function () {
        var e = a(this),
          f = e.data("bs.modal"),
          g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
        f || e.data("bs.modal", (f = new c(this, g))),
          "string" == typeof b ? f[b](d) : g.show && f.show(d);
      });
    }
    var c = function (b, c) {
      (this.options = c),
        (this.$body = a(document.body)),
        (this.$element = a(b)),
        (this.$dialog = this.$element.find(".modal-dialog")),
        (this.$backdrop = null),
        (this.isShown = null),
        (this.originalBodyPad = null),
        (this.scrollbarWidth = 0),
        (this.ignoreBackdropClick = !1),
        this.options.remote &&
          this.$element.find(".modal-content").load(
            this.options.remote,
            a.proxy(function () {
              this.$element.trigger("loaded.bs.modal");
            }, this)
          );
    };
    (c.VERSION = "3.3.6"),
      (c.TRANSITION_DURATION = 300),
      (c.BACKDROP_TRANSITION_DURATION = 150),
      (c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
      (c.prototype.toggle = function (a) {
        return this.isShown ? this.hide() : this.show(a);
      }),
      (c.prototype.show = function (b) {
        var d = this,
          e = a.Event("show.bs.modal", { relatedTarget: b });
        this.$element.trigger(e),
          this.isShown ||
            e.isDefaultPrevented() ||
            ((this.isShown = !0),
            this.checkScrollbar(),
            this.setScrollbar(),
            this.$body.addClass("modal-open"),
            this.escape(),
            this.resize(),
            this.$element.on(
              "click.dismiss.bs.modal",
              '[data-dismiss="modal"]',
              a.proxy(this.hide, this)
            ),
            this.$dialog.on("mousedown.dismiss.bs.modal", function () {
              d.$element.one("mouseup.dismiss.bs.modal", function (b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0);
              });
            }),
            this.backdrop(function () {
              var e = a.support.transition && d.$element.hasClass("fade");
              d.$element.parent().length || d.$element.appendTo(d.$body),
                d.$element.show().scrollTop(0),
                d.adjustDialog(),
                e && d.$element[0].offsetWidth,
                d.$element.addClass("in"),
                d.enforceFocus();
              var f = a.Event("shown.bs.modal", { relatedTarget: b });
              e
                ? d.$dialog
                    .one("bsTransitionEnd", function () {
                      d.$element.trigger("focus").trigger(f);
                    })
                    .emulateTransitionEnd(c.TRANSITION_DURATION)
                : d.$element.trigger("focus").trigger(f);
            }));
      }),
      (c.prototype.hide = function (b) {
        b && b.preventDefault(),
          (b = a.Event("hide.bs.modal")),
          this.$element.trigger(b),
          this.isShown &&
            !b.isDefaultPrevented() &&
            ((this.isShown = !1),
            this.escape(),
            this.resize(),
            a(document).off("focusin.bs.modal"),
            this.$element
              .removeClass("in")
              .off("click.dismiss.bs.modal")
              .off("mouseup.dismiss.bs.modal"),
            this.$dialog.off("mousedown.dismiss.bs.modal"),
            a.support.transition && this.$element.hasClass("fade")
              ? this.$element
                  .one("bsTransitionEnd", a.proxy(this.hideModal, this))
                  .emulateTransitionEnd(c.TRANSITION_DURATION)
              : this.hideModal());
      }),
      (c.prototype.enforceFocus = function () {
        a(document)
          .off("focusin.bs.modal")
          .on(
            "focusin.bs.modal",
            a.proxy(function (a) {
              this.$element[0] === a.target ||
                this.$element.has(a.target).length ||
                this.$element.trigger("focus");
            }, this)
          );
      }),
      (c.prototype.escape = function () {
        this.isShown && this.options.keyboard
          ? this.$element.on(
              "keydown.dismiss.bs.modal",
              a.proxy(function (a) {
                27 == a.which && this.hide();
              }, this)
            )
          : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
      }),
      (c.prototype.resize = function () {
        this.isShown
          ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this))
          : a(window).off("resize.bs.modal");
      }),
      (c.prototype.hideModal = function () {
        var a = this;
        this.$element.hide(),
          this.backdrop(function () {
            a.$body.removeClass("modal-open"),
              a.resetAdjustments(),
              a.resetScrollbar(),
              a.$element.trigger("hidden.bs.modal");
          });
      }),
      (c.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
      }),
      (c.prototype.backdrop = function (b) {
        var d = this,
          e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
          var f = a.support.transition && e;
          if (
            ((this.$backdrop = a(document.createElement("div"))
              .addClass("modal-backdrop " + e)
              .appendTo(this.$body)),
            this.$element.on(
              "click.dismiss.bs.modal",
              a.proxy(function (a) {
                return this.ignoreBackdropClick
                  ? void (this.ignoreBackdropClick = !1)
                  : void (
                      a.target === a.currentTarget &&
                      ("static" == this.options.backdrop
                        ? this.$element[0].focus()
                        : this.hide())
                    );
              }, this)
            ),
            f && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !b)
          )
            return;
          f
            ? this.$backdrop
                .one("bsTransitionEnd", b)
                .emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION)
            : b();
        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass("in");
          var g = function () {
            d.removeBackdrop(), b && b();
          };
          a.support.transition && this.$element.hasClass("fade")
            ? this.$backdrop
                .one("bsTransitionEnd", g)
                .emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION)
            : g();
        } else b && b();
      }),
      (c.prototype.handleUpdate = function () {
        this.adjustDialog();
      }),
      (c.prototype.adjustDialog = function () {
        var a =
          this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
          paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : "",
        });
      }),
      (c.prototype.resetAdjustments = function () {
        this.$element.css({ paddingLeft: "", paddingRight: "" });
      }),
      (c.prototype.checkScrollbar = function () {
        var a = window.innerWidth;
        if (!a) {
          var b = document.documentElement.getBoundingClientRect();
          a = b.right - Math.abs(b.left);
        }
        (this.bodyIsOverflowing = document.body.clientWidth < a),
          (this.scrollbarWidth = this.measureScrollbar());
      }),
      (c.prototype.setScrollbar = function () {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        (this.originalBodyPad = document.body.style.paddingRight || ""),
          this.bodyIsOverflowing &&
            this.$body.css("padding-right", a + this.scrollbarWidth);
      }),
      (c.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad);
      }),
      (c.prototype.measureScrollbar = function () {
        var a = document.createElement("div");
        (a.className = "modal-scrollbar-measure"), this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b;
      });
    var d = a.fn.modal;
    (a.fn.modal = b),
      (a.fn.modal.Constructor = c),
      (a.fn.modal.noConflict = function () {
        return (a.fn.modal = d), this;
      }),
      a(document).on(
        "click.bs.modal.data-api",
        '[data-toggle="modal"]',
        function (c) {
          var d = a(this),
            e = d.attr("href"),
            f = a(
              d.attr("data-target") || (e && e.replace(/.*(?=#[^\s]+$)/, ""))
            ),
            g = f.data("bs.modal")
              ? "toggle"
              : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());
          d.is("a") && c.preventDefault(),
            f.one("show.bs.modal", function (a) {
              a.isDefaultPrevented() ||
                f.one("hidden.bs.modal", function () {
                  d.is(":visible") && d.trigger("focus");
                });
            }),
            b.call(f, g, this);
        }
      );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.tooltip"),
          f = "object" == typeof b && b;
        (e || !/destroy|hide/.test(b)) &&
          (e || d.data("bs.tooltip", (e = new c(this, f))),
          "string" == typeof b && e[b]());
      });
    }
    var c = function (a, b) {
      (this.type = null),
        (this.options = null),
        (this.enabled = null),
        (this.timeout = null),
        (this.hoverState = null),
        (this.$element = null),
        (this.inState = null),
        this.init("tooltip", a, b);
    };
    (c.VERSION = "3.3.6"),
      (c.TRANSITION_DURATION = 150),
      (c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: { selector: "body", padding: 0 },
      }),
      (c.prototype.init = function (b, c, d) {
        if (
          ((this.enabled = !0),
          (this.type = b),
          (this.$element = a(c)),
          (this.options = this.getOptions(d)),
          (this.$viewport =
            this.options.viewport &&
            a(
              a.isFunction(this.options.viewport)
                ? this.options.viewport.call(this, this.$element)
                : this.options.viewport.selector || this.options.viewport
            )),
          (this.inState = { click: !1, hover: !1, focus: !1 }),
          this.$element[0] instanceof document.constructor &&
            !this.options.selector)
        )
          throw new Error(
            "`selector` option must be specified when initializing " +
              this.type +
              " on the window.document object!"
          );
        for (var e = this.options.trigger.split(" "), f = e.length; f--; ) {
          var g = e[f];
          if ("click" == g)
            this.$element.on(
              "click." + this.type,
              this.options.selector,
              a.proxy(this.toggle, this)
            );
          else if ("manual" != g) {
            var h = "hover" == g ? "mouseenter" : "focusin",
              i = "hover" == g ? "mouseleave" : "focusout";
            this.$element.on(
              h + "." + this.type,
              this.options.selector,
              a.proxy(this.enter, this)
            ),
              this.$element.on(
                i + "." + this.type,
                this.options.selector,
                a.proxy(this.leave, this)
              );
          }
        }
        this.options.selector
          ? (this._options = a.extend({}, this.options, {
              trigger: "manual",
              selector: "",
            }))
          : this.fixTitle();
      }),
      (c.prototype.getDefaults = function () {
        return c.DEFAULTS;
      }),
      (c.prototype.getOptions = function (b) {
        return (
          (b = a.extend({}, this.getDefaults(), this.$element.data(), b)),
          b.delay &&
            "number" == typeof b.delay &&
            (b.delay = { show: b.delay, hide: b.delay }),
          b
        );
      }),
      (c.prototype.getDelegateOptions = function () {
        var b = {},
          c = this.getDefaults();
        return (
          this._options &&
            a.each(this._options, function (a, d) {
              c[a] != d && (b[a] = d);
            }),
          b
        );
      }),
      (c.prototype.enter = function (b) {
        var c =
          b instanceof this.constructor
            ? b
            : a(b.currentTarget).data("bs." + this.type);
        return (
          c ||
            ((c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            a(b.currentTarget).data("bs." + this.type, c)),
          b instanceof a.Event &&
            (c.inState["focusin" == b.type ? "focus" : "hover"] = !0),
          c.tip().hasClass("in") || "in" == c.hoverState
            ? void (c.hoverState = "in")
            : (clearTimeout(c.timeout),
              (c.hoverState = "in"),
              c.options.delay && c.options.delay.show
                ? void (c.timeout = setTimeout(function () {
                    "in" == c.hoverState && c.show();
                  }, c.options.delay.show))
                : c.show())
        );
      }),
      (c.prototype.isInStateTrue = function () {
        for (var a in this.inState) if (this.inState[a]) return !0;
        return !1;
      }),
      (c.prototype.leave = function (b) {
        var c =
          b instanceof this.constructor
            ? b
            : a(b.currentTarget).data("bs." + this.type);
        return (
          c ||
            ((c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            a(b.currentTarget).data("bs." + this.type, c)),
          b instanceof a.Event &&
            (c.inState["focusout" == b.type ? "focus" : "hover"] = !1),
          c.isInStateTrue()
            ? void 0
            : (clearTimeout(c.timeout),
              (c.hoverState = "out"),
              c.options.delay && c.options.delay.hide
                ? void (c.timeout = setTimeout(function () {
                    "out" == c.hoverState && c.hide();
                  }, c.options.delay.hide))
                : c.hide())
        );
      }),
      (c.prototype.show = function () {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(b);
          var d = a.contains(
            this.$element[0].ownerDocument.documentElement,
            this.$element[0]
          );
          if (b.isDefaultPrevented() || !d) return;
          var e = this,
            f = this.tip(),
            g = this.getUID(this.type);
          this.setContent(),
            f.attr("id", g),
            this.$element.attr("aria-describedby", g),
            this.options.animation && f.addClass("fade");
          var h =
              "function" == typeof this.options.placement
                ? this.options.placement.call(this, f[0], this.$element[0])
                : this.options.placement,
            i = /\s?auto?\s?/i,
            j = i.test(h);
          j && (h = h.replace(i, "") || "top"),
            f
              .detach()
              .css({ top: 0, left: 0, display: "block" })
              .addClass(h)
              .data("bs." + this.type, this),
            this.options.container
              ? f.appendTo(this.options.container)
              : f.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type);
          var k = this.getPosition(),
            l = f[0].offsetWidth,
            m = f[0].offsetHeight;
          if (j) {
            var n = h,
              o = this.getPosition(this.$viewport);
            (h =
              "bottom" == h && k.bottom + m > o.bottom
                ? "top"
                : "top" == h && k.top - m < o.top
                ? "bottom"
                : "right" == h && k.right + l > o.width
                ? "left"
                : "left" == h && k.left - l < o.left
                ? "right"
                : h),
              f.removeClass(n).addClass(h);
          }
          var p = this.getCalculatedOffset(h, k, l, m);
          this.applyPlacement(p, h);
          var q = function () {
            var a = e.hoverState;
            e.$element.trigger("shown.bs." + e.type),
              (e.hoverState = null),
              "out" == a && e.leave(e);
          };
          a.support.transition && this.$tip.hasClass("fade")
            ? f
                .one("bsTransitionEnd", q)
                .emulateTransitionEnd(c.TRANSITION_DURATION)
            : q();
        }
      }),
      (c.prototype.applyPlacement = function (b, c) {
        var d = this.tip(),
          e = d[0].offsetWidth,
          f = d[0].offsetHeight,
          g = parseInt(d.css("margin-top"), 10),
          h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0),
          isNaN(h) && (h = 0),
          (b.top += g),
          (b.left += h),
          a.offset.setOffset(
            d[0],
            a.extend(
              {
                using: function (a) {
                  d.css({ top: Math.round(a.top), left: Math.round(a.left) });
                },
              },
              b
            ),
            0
          ),
          d.addClass("in");
        var i = d[0].offsetWidth,
          j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? (b.left += k.left) : (b.top += k.top);
        var l = /top|bottom/.test(c),
          m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
          n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l);
      }),
      (c.prototype.replaceArrow = function (a, b, c) {
        this.arrow()
          .css(c ? "left" : "top", 50 * (1 - a / b) + "%")
          .css(c ? "top" : "left", "");
      }),
      (c.prototype.setContent = function () {
        var a = this.tip(),
          b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b),
          a.removeClass("fade in top bottom left right");
      }),
      (c.prototype.hide = function (b) {
        function d() {
          "in" != e.hoverState && f.detach(),
            e.$element
              .removeAttr("aria-describedby")
              .trigger("hidden.bs." + e.type),
            b && b();
        }
        var e = this,
          f = a(this.$tip),
          g = a.Event("hide.bs." + this.type);
        return (
          this.$element.trigger(g),
          g.isDefaultPrevented()
            ? void 0
            : (f.removeClass("in"),
              a.support.transition && f.hasClass("fade")
                ? f
                    .one("bsTransitionEnd", d)
                    .emulateTransitionEnd(c.TRANSITION_DURATION)
                : d(),
              (this.hoverState = null),
              this)
        );
      }),
      (c.prototype.fixTitle = function () {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) &&
          a
            .attr("data-original-title", a.attr("title") || "")
            .attr("title", "");
      }),
      (c.prototype.hasContent = function () {
        return this.getTitle();
      }),
      (c.prototype.getPosition = function (b) {
        b = b || this.$element;
        var c = b[0],
          d = "BODY" == c.tagName,
          e = c.getBoundingClientRect();
        null == e.width &&
          (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top,
          }));
        var f = d ? { top: 0, left: 0 } : b.offset(),
          g = {
            scroll: d
              ? document.documentElement.scrollTop || document.body.scrollTop
              : b.scrollTop(),
          },
          h = d
            ? { width: a(window).width(), height: a(window).height() }
            : null;
        return a.extend({}, e, g, h, f);
      }),
      (c.prototype.getCalculatedOffset = function (a, b, c, d) {
        return "bottom" == a
          ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 }
          : "top" == a
          ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 }
          : "left" == a
          ? { top: b.top + b.height / 2 - d / 2, left: b.left - c }
          : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width };
      }),
      (c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
        var e = { top: 0, left: 0 };
        if (!this.$viewport) return e;
        var f = (this.options.viewport && this.options.viewport.padding) || 0,
          g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
          var h = b.top - f - g.scroll,
            i = b.top + f - g.scroll + d;
          h < g.top
            ? (e.top = g.top - h)
            : i > g.top + g.height && (e.top = g.top + g.height - i);
        } else {
          var j = b.left - f,
            k = b.left + f + c;
          j < g.left
            ? (e.left = g.left - j)
            : k > g.right && (e.left = g.left + g.width - k);
        }
        return e;
      }),
      (c.prototype.getTitle = function () {
        var a,
          b = this.$element,
          c = this.options;
        return (a =
          b.attr("data-original-title") ||
          ("function" == typeof c.title ? c.title.call(b[0]) : c.title));
      }),
      (c.prototype.getUID = function (a) {
        do a += ~~(1e6 * Math.random());
        while (document.getElementById(a));
        return a;
      }),
      (c.prototype.tip = function () {
        if (
          !this.$tip &&
          ((this.$tip = a(this.options.template)), 1 != this.$tip.length)
        )
          throw new Error(
            this.type +
              " `template` option must consist of exactly 1 top-level element!"
          );
        return this.$tip;
      }),
      (c.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
      }),
      (c.prototype.enable = function () {
        this.enabled = !0;
      }),
      (c.prototype.disable = function () {
        this.enabled = !1;
      }),
      (c.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
      }),
      (c.prototype.toggle = function (b) {
        var c = this;
        b &&
          ((c = a(b.currentTarget).data("bs." + this.type)),
          c ||
            ((c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            a(b.currentTarget).data("bs." + this.type, c))),
          b
            ? ((c.inState.click = !c.inState.click),
              c.isInStateTrue() ? c.enter(c) : c.leave(c))
            : c.tip().hasClass("in")
            ? c.leave(c)
            : c.enter(c);
      }),
      (c.prototype.destroy = function () {
        var a = this;
        clearTimeout(this.timeout),
          this.hide(function () {
            a.$element.off("." + a.type).removeData("bs." + a.type),
              a.$tip && a.$tip.detach(),
              (a.$tip = null),
              (a.$arrow = null),
              (a.$viewport = null);
          });
      });
    var d = a.fn.tooltip;
    (a.fn.tooltip = b),
      (a.fn.tooltip.Constructor = c),
      (a.fn.tooltip.noConflict = function () {
        return (a.fn.tooltip = d), this;
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.popover"),
          f = "object" == typeof b && b;
        (e || !/destroy|hide/.test(b)) &&
          (e || d.data("bs.popover", (e = new c(this, f))),
          "string" == typeof b && e[b]());
      });
    }
    var c = function (a, b) {
      this.init("popover", a, b);
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    (c.VERSION = "3.3.6"),
      (c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
      })),
      (c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype)),
      (c.prototype.constructor = c),
      (c.prototype.getDefaults = function () {
        return c.DEFAULTS;
      }),
      (c.prototype.setContent = function () {
        var a = this.tip(),
          b = this.getTitle(),
          c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b),
          a
            .find(".popover-content")
            .children()
            .detach()
            .end()
            [
              this.options.html
                ? "string" == typeof c
                  ? "html"
                  : "append"
                : "text"
            ](c),
          a.removeClass("fade top bottom left right in"),
          a.find(".popover-title").html() || a.find(".popover-title").hide();
      }),
      (c.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
      }),
      (c.prototype.getContent = function () {
        var a = this.$element,
          b = this.options;
        return (
          a.attr("data-content") ||
          ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
        );
      }),
      (c.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
      });
    var d = a.fn.popover;
    (a.fn.popover = b),
      (a.fn.popover.Constructor = c),
      (a.fn.popover.noConflict = function () {
        return (a.fn.popover = d), this;
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(c, d) {
      (this.$body = a(document.body)),
        (this.$scrollElement = a(a(c).is(document.body) ? window : c)),
        (this.options = a.extend({}, b.DEFAULTS, d)),
        (this.selector = (this.options.target || "") + " .nav li > a"),
        (this.offsets = []),
        (this.targets = []),
        (this.activeTarget = null),
        (this.scrollHeight = 0),
        this.$scrollElement.on(
          "scroll.bs.scrollspy",
          a.proxy(this.process, this)
        ),
        this.refresh(),
        this.process();
    }
    function c(c) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.scrollspy"),
          f = "object" == typeof c && c;
        e || d.data("bs.scrollspy", (e = new b(this, f))),
          "string" == typeof c && e[c]();
      });
    }
    (b.VERSION = "3.3.6"),
      (b.DEFAULTS = { offset: 10 }),
      (b.prototype.getScrollHeight = function () {
        return (
          this.$scrollElement[0].scrollHeight ||
          Math.max(
            this.$body[0].scrollHeight,
            document.documentElement.scrollHeight
          )
        );
      }),
      (b.prototype.refresh = function () {
        var b = this,
          c = "offset",
          d = 0;
        (this.offsets = []),
          (this.targets = []),
          (this.scrollHeight = this.getScrollHeight()),
          a.isWindow(this.$scrollElement[0]) ||
            ((c = "position"), (d = this.$scrollElement.scrollTop())),
          this.$body
            .find(this.selector)
            .map(function () {
              var b = a(this),
                e = b.data("target") || b.attr("href"),
                f = /^#./.test(e) && a(e);
              return (
                (f && f.length && f.is(":visible") && [[f[c]().top + d, e]]) ||
                null
              );
            })
            .sort(function (a, b) {
              return a[0] - b[0];
            })
            .each(function () {
              b.offsets.push(this[0]), b.targets.push(this[1]);
            });
      }),
      (b.prototype.process = function () {
        var a,
          b = this.$scrollElement.scrollTop() + this.options.offset,
          c = this.getScrollHeight(),
          d = this.options.offset + c - this.$scrollElement.height(),
          e = this.offsets,
          f = this.targets,
          g = this.activeTarget;
        if ((this.scrollHeight != c && this.refresh(), b >= d))
          return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0]) return (this.activeTarget = null), this.clear();
        for (a = e.length; a--; )
          g != f[a] &&
            b >= e[a] &&
            (void 0 === e[a + 1] || b < e[a + 1]) &&
            this.activate(f[a]);
      }),
      (b.prototype.activate = function (b) {
        (this.activeTarget = b), this.clear();
        var c =
            this.selector +
            '[data-target="' +
            b +
            '"],' +
            this.selector +
            '[href="' +
            b +
            '"]',
          d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length &&
          (d = d.closest("li.dropdown").addClass("active")),
          d.trigger("activate.bs.scrollspy");
      }),
      (b.prototype.clear = function () {
        a(this.selector)
          .parentsUntil(this.options.target, ".active")
          .removeClass("active");
      });
    var d = a.fn.scrollspy;
    (a.fn.scrollspy = c),
      (a.fn.scrollspy.Constructor = b),
      (a.fn.scrollspy.noConflict = function () {
        return (a.fn.scrollspy = d), this;
      }),
      a(window).on("load.bs.scrollspy.data-api", function () {
        a('[data-spy="scroll"]').each(function () {
          var b = a(this);
          c.call(b, b.data());
        });
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.tab");
        e || d.data("bs.tab", (e = new c(this))),
          "string" == typeof b && e[b]();
      });
    }
    var c = function (b) {
      this.element = a(b);
    };
    (c.VERSION = "3.3.6"),
      (c.TRANSITION_DURATION = 150),
      (c.prototype.show = function () {
        var b = this.element,
          c = b.closest("ul:not(.dropdown-menu)"),
          d = b.data("target");
        if (
          (d ||
            ((d = b.attr("href")), (d = d && d.replace(/.*(?=#[^\s]*$)/, ""))),
          !b.parent("li").hasClass("active"))
        ) {
          var e = c.find(".active:last a"),
            f = a.Event("hide.bs.tab", { relatedTarget: b[0] }),
            g = a.Event("show.bs.tab", { relatedTarget: e[0] });
          if (
            (e.trigger(f),
            b.trigger(g),
            !g.isDefaultPrevented() && !f.isDefaultPrevented())
          ) {
            var h = a(d);
            this.activate(b.closest("li"), c),
              this.activate(h, h.parent(), function () {
                e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }),
                  b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] });
              });
          }
        }
      }),
      (c.prototype.activate = function (b, d, e) {
        function f() {
          g
            .removeClass("active")
            .find("> .dropdown-menu > .active")
            .removeClass("active")
            .end()
            .find('[data-toggle="tab"]')
            .attr("aria-expanded", !1),
            b
              .addClass("active")
              .find('[data-toggle="tab"]')
              .attr("aria-expanded", !0),
            h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"),
            b.parent(".dropdown-menu").length &&
              b
                .closest("li.dropdown")
                .addClass("active")
                .end()
                .find('[data-toggle="tab"]')
                .attr("aria-expanded", !0),
            e && e();
        }
        var g = d.find("> .active"),
          h =
            e &&
            a.support.transition &&
            ((g.length && g.hasClass("fade")) || !!d.find("> .fade").length);
        g.length && h
          ? g
              .one("bsTransitionEnd", f)
              .emulateTransitionEnd(c.TRANSITION_DURATION)
          : f(),
          g.removeClass("in");
      });
    var d = a.fn.tab;
    (a.fn.tab = b),
      (a.fn.tab.Constructor = c),
      (a.fn.tab.noConflict = function () {
        return (a.fn.tab = d), this;
      });
    var e = function (c) {
      c.preventDefault(), b.call(a(this), "show");
    };
    a(document)
      .on("click.bs.tab.data-api", '[data-toggle="tab"]', e)
      .on("click.bs.tab.data-api", '[data-toggle="pill"]', e);
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.affix"),
          f = "object" == typeof b && b;
        e || d.data("bs.affix", (e = new c(this, f))),
          "string" == typeof b && e[b]();
      });
    }
    var c = function (b, d) {
      (this.options = a.extend({}, c.DEFAULTS, d)),
        (this.$target = a(this.options.target)
          .on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this))
          .on(
            "click.bs.affix.data-api",
            a.proxy(this.checkPositionWithEventLoop, this)
          )),
        (this.$element = a(b)),
        (this.affixed = null),
        (this.unpin = null),
        (this.pinnedOffset = null),
        this.checkPosition();
    };
    (c.VERSION = "3.3.6"),
      (c.RESET = "affix affix-top affix-bottom"),
      (c.DEFAULTS = { offset: 0, target: window }),
      (c.prototype.getState = function (a, b, c, d) {
        var e = this.$target.scrollTop(),
          f = this.$element.offset(),
          g = this.$target.height();
        if (null != c && "top" == this.affixed) return c > e ? "top" : !1;
        if ("bottom" == this.affixed)
          return null != c
            ? e + this.unpin <= f.top
              ? !1
              : "bottom"
            : a - d >= e + g
            ? !1
            : "bottom";
        var h = null == this.affixed,
          i = h ? e : f.top,
          j = h ? g : b;
        return null != c && c >= e
          ? "top"
          : null != d && i + j >= a - d
          ? "bottom"
          : !1;
      }),
      (c.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(),
          b = this.$element.offset();
        return (this.pinnedOffset = b.top - a);
      }),
      (c.prototype.checkPositionWithEventLoop = function () {
        setTimeout(a.proxy(this.checkPosition, this), 1);
      }),
      (c.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
          var b = this.$element.height(),
            d = this.options.offset,
            e = d.top,
            f = d.bottom,
            g = Math.max(a(document).height(), a(document.body).height());
          "object" != typeof d && (f = e = d),
            "function" == typeof e && (e = d.top(this.$element)),
            "function" == typeof f && (f = d.bottom(this.$element));
          var h = this.getState(g, b, e, f);
          if (this.affixed != h) {
            null != this.unpin && this.$element.css("top", "");
            var i = "affix" + (h ? "-" + h : ""),
              j = a.Event(i + ".bs.affix");
            if ((this.$element.trigger(j), j.isDefaultPrevented())) return;
            (this.affixed = h),
              (this.unpin = "bottom" == h ? this.getPinnedOffset() : null),
              this.$element
                .removeClass(c.RESET)
                .addClass(i)
                .trigger(i.replace("affix", "affixed") + ".bs.affix");
          }
          "bottom" == h && this.$element.offset({ top: g - b - f });
        }
      });
    var d = a.fn.affix;
    (a.fn.affix = b),
      (a.fn.affix.Constructor = c),
      (a.fn.affix.noConflict = function () {
        return (a.fn.affix = d), this;
      }),
      a(window).on("load", function () {
        a('[data-spy="affix"]').each(function () {
          var c = a(this),
            d = c.data();
          (d.offset = d.offset || {}),
            null != d.offsetBottom && (d.offset.bottom = d.offsetBottom),
            null != d.offsetTop && (d.offset.top = d.offsetTop),
            b.call(c, d);
        });
      });
  })(jQuery),
  (function (a, b, c) {
    "use strict";
    function d(a, b, c) {
      if (!a)
        throw qa("areq", "Argument '{0}' is {1}", b || "?", c || "required");
      return a;
    }
    function e(a, b) {
      return a || b
        ? a
          ? b
            ? (R(a) && (a = a.join(" ")),
              R(b) && (b = b.join(" ")),
              a + " " + b)
            : a
          : b
        : "";
    }
    function f(a) {
      var b = {};
      return a && (a.to || a.from) && ((b.to = a.to), (b.from = a.from)), b;
    }
    function g(a, b, c) {
      var d = "";
      return (
        (a = R(a) ? a : a && S(a) && a.length ? a.split(/\s+/) : []),
        Q(a, function (a, e) {
          a &&
            a.length > 0 &&
            ((d += e > 0 ? " " : ""), (d += c ? b + a : a + b));
        }),
        d
      );
    }
    function h(a, b) {
      var c = a.indexOf(b);
      b >= 0 && a.splice(c, 1);
    }
    function i(a) {
      if (a instanceof P)
        switch (a.length) {
          case 0:
            return [];
          case 1:
            if (a[0].nodeType === Y) return a;
            break;
          default:
            return P(j(a));
        }
      return a.nodeType === Y ? P(a) : void 0;
    }
    function j(a) {
      if (!a[0]) return a;
      for (var b = 0; b < a.length; b++) {
        var c = a[b];
        if (c.nodeType == Y) return c;
      }
    }
    function k(a, b, c) {
      Q(b, function (b) {
        a.addClass(b, c);
      });
    }
    function l(a, b, c) {
      Q(b, function (b) {
        a.removeClass(b, c);
      });
    }
    function m(a) {
      return function (b, c) {
        c.addClass && (k(a, b, c.addClass), (c.addClass = null)),
          c.removeClass && (l(a, b, c.removeClass), (c.removeClass = null));
      };
    }
    function n(a) {
      if (((a = a || {}), !a.$$prepared)) {
        var b = a.domOperation || M;
        (a.domOperation = function () {
          (a.$$domOperationFired = !0), b(), (b = M);
        }),
          (a.$$prepared = !0);
      }
      return a;
    }
    function o(a, b) {
      p(a, b), q(a, b);
    }
    function p(a, b) {
      b.from && (a.css(b.from), (b.from = null));
    }
    function q(a, b) {
      b.to && (a.css(b.to), (b.to = null));
    }
    function r(a, b, c) {
      var d = b.options || {},
        e = c.options || {},
        f = (d.addClass || "") + " " + (e.addClass || ""),
        g = (d.removeClass || "") + " " + (e.removeClass || ""),
        h = s(a.attr("class"), f, g);
      e.preparationClasses &&
        ((d.preparationClasses = z(e.preparationClasses, d.preparationClasses)),
        delete e.preparationClasses);
      var i = d.domOperation !== M ? d.domOperation : null;
      return (
        O(d, e),
        i && (d.domOperation = i),
        h.addClass ? (d.addClass = h.addClass) : (d.addClass = null),
        h.removeClass
          ? (d.removeClass = h.removeClass)
          : (d.removeClass = null),
        (b.addClass = d.addClass),
        (b.removeClass = d.removeClass),
        d
      );
    }
    function s(a, b, c) {
      function d(a) {
        S(a) && (a = a.split(" "));
        var b = {};
        return (
          Q(a, function (a) {
            a.length && (b[a] = !0);
          }),
          b
        );
      }
      var e = 1,
        f = -1,
        g = {};
      (a = d(a)),
        (b = d(b)),
        Q(b, function (a, b) {
          g[b] = e;
        }),
        (c = d(c)),
        Q(c, function (a, b) {
          g[b] = g[b] === e ? null : f;
        });
      var h = { addClass: "", removeClass: "" };
      return (
        Q(g, function (b, c) {
          var d, g;
          b === e
            ? ((d = "addClass"), (g = !a[c]))
            : b === f && ((d = "removeClass"), (g = a[c])),
            g && (h[d].length && (h[d] += " "), (h[d] += c));
        }),
        h
      );
    }
    function t(a) {
      return a instanceof b.element ? a[0] : a;
    }
    function u(a, b, c) {
      var d = "";
      b && (d = g(b, _, !0)),
        c.addClass && (d = z(d, g(c.addClass, Z))),
        c.removeClass && (d = z(d, g(c.removeClass, $))),
        d.length && ((c.preparationClasses = d), a.addClass(d));
    }
    function v(a, b) {
      b.preparationClasses &&
        (a.removeClass(b.preparationClasses), (b.preparationClasses = null)),
        b.activeClasses &&
          (a.removeClass(b.activeClasses), (b.activeClasses = null));
    }
    function w(a, b) {
      var c = b ? "-" + b + "s" : "";
      return y(a, [oa, c]), [oa, c];
    }
    function x(a, b) {
      var c = b ? "paused" : "",
        d = K + ka;
      return y(a, [d, c]), [d, c];
    }
    function y(a, b) {
      var c = b[0],
        d = b[1];
      a.style[c] = d;
    }
    function z(a, b) {
      return a ? (b ? a + " " + b : a) : b;
    }
    function A(a) {
      return [na, a + "s"];
    }
    function B(a, b) {
      var c = b ? ma : oa;
      return [c, a + "s"];
    }
    function C(a, b, c) {
      var d = Object.create(null),
        e = a.getComputedStyle(b) || {};
      return (
        Q(c, function (a, b) {
          var c = e[a];
          if (c) {
            var f = c.charAt(0);
            ("-" === f || "+" === f || f >= 0) && (c = D(c)),
              0 === c && (c = null),
              (d[b] = c);
          }
        }),
        d
      );
    }
    function D(a) {
      var b = 0,
        c = a.split(/\s*,\s*/);
      return (
        Q(c, function (a) {
          "s" == a.charAt(a.length - 1) && (a = a.substring(0, a.length - 1)),
            (a = parseFloat(a) || 0),
            (b = b ? Math.max(a, b) : a);
        }),
        b
      );
    }
    function E(a) {
      return 0 === a || null != a;
    }
    function F(a, b) {
      var c = I,
        d = a + "s";
      return b ? (c += fa) : (d += " linear all"), [c, d];
    }
    function G() {
      var a = Object.create(null);
      return {
        flush: function () {
          a = Object.create(null);
        },
        count: function (b) {
          var c = a[b];
          return c ? c.total : 0;
        },
        get: function (b) {
          var c = a[b];
          return c && c.value;
        },
        put: function (b, c) {
          a[b] ? a[b].total++ : (a[b] = { total: 1, value: c });
        },
      };
    }
    function H(a, b, c) {
      Q(c, function (c) {
        a[c] = V(a[c]) ? a[c] : b.style.getPropertyValue(c);
      });
    }
    var I,
      J,
      K,
      L,
      M = b.noop,
      N = b.copy,
      O = b.extend,
      P = b.element,
      Q = b.forEach,
      R = b.isArray,
      S = b.isString,
      T = b.isObject,
      U = b.isUndefined,
      V = b.isDefined,
      W = b.isFunction,
      X = b.isElement,
      Y = 1,
      Z = "-add",
      $ = "-remove",
      _ = "ng-",
      aa = "-active",
      ba = "-prepare",
      ca = "ng-animate",
      da = "$$ngAnimateChildren",
      ea = "";
    U(a.ontransitionend) && V(a.onwebkittransitionend)
      ? ((ea = "-webkit-"),
        (I = "WebkitTransition"),
        (J = "webkitTransitionEnd transitionend"))
      : ((I = "transition"), (J = "transitionend")),
      U(a.onanimationend) && V(a.onwebkitanimationend)
        ? ((ea = "-webkit-"),
          (K = "WebkitAnimation"),
          (L = "webkitAnimationEnd animationend"))
        : ((K = "animation"), (L = "animationend"));
    var fa = "Duration",
      ga = "Property",
      ha = "Delay",
      ia = "TimingFunction",
      ja = "IterationCount",
      ka = "PlayState",
      la = 9999,
      ma = K + ha,
      na = K + fa,
      oa = I + ha,
      pa = I + fa,
      qa = b.$$minErr("ng"),
      ra = [
        "$$rAF",
        function (a) {
          function b(a) {
            (d = d.concat(a)), c();
          }
          function c() {
            if (d.length) {
              for (var b = d.shift(), f = 0; f < b.length; f++) b[f]();
              e ||
                a(function () {
                  e || c();
                });
            }
          }
          var d, e;
          return (
            (d = b.queue = []),
            (b.waitUntilQuiet = function (b) {
              e && e(),
                (e = a(function () {
                  (e = null), b(), c();
                }));
            }),
            b
          );
        },
      ],
      sa = [
        "$interpolate",
        function (a) {
          return {
            link: function (c, d, e) {
              function f(a) {
                (a = "on" === a || "true" === a), d.data(da, a);
              }
              var g = e.ngAnimateChildren;
              b.isString(g) && 0 === g.length
                ? d.data(da, !0)
                : (f(a(g)(c)), e.$observe("ngAnimateChildren", f));
            },
          };
        },
      ],
      ta = "$$animateCss",
      ua = 1e3,
      va = 3,
      wa = 1.5,
      xa = {
        transitionDuration: pa,
        transitionDelay: oa,
        transitionProperty: I + ga,
        animationDuration: na,
        animationDelay: ma,
        animationIterationCount: K + ja,
      },
      ya = {
        transitionDuration: pa,
        transitionDelay: oa,
        animationDuration: na,
        animationDelay: ma,
      },
      za = [
        "$animateProvider",
        function (a) {
          var b = G(),
            c = G();
          this.$get = [
            "$window",
            "$$jqLite",
            "$$AnimateRunner",
            "$timeout",
            "$$forceReflow",
            "$sniffer",
            "$$rAFScheduler",
            "$$animateQueue",
            function (a, d, e, i, j, k, l, r) {
              function s(a, b) {
                var c = "$$ngAnimateParentKey",
                  d = a.parentNode,
                  e = d[c] || (d[c] = ++O);
                return e + "-" + a.getAttribute("class") + "-" + b;
              }
              function u(c, d, e, f) {
                var g = b.get(e);
                return (
                  g ||
                    ((g = C(a, c, f)),
                    "infinite" === g.animationIterationCount &&
                      (g.animationIterationCount = 1)),
                  b.put(e, g),
                  g
                );
              }
              function v(e, f, h, i) {
                var j;
                if (b.count(h) > 0 && ((j = c.get(h)), !j)) {
                  var k = g(f, "-stagger");
                  d.addClass(e, k),
                    (j = C(a, e, i)),
                    (j.animationDuration = Math.max(j.animationDuration, 0)),
                    (j.transitionDuration = Math.max(j.transitionDuration, 0)),
                    d.removeClass(e, k),
                    c.put(h, j);
                }
                return j || {};
              }
              function z(a) {
                P.push(a),
                  l.waitUntilQuiet(function () {
                    b.flush(), c.flush();
                    for (var a = j(), d = 0; d < P.length; d++) P[d](a);
                    P.length = 0;
                  });
              }
              function D(a, b, c) {
                var d = u(a, b, c, xa),
                  e = d.animationDelay,
                  f = d.transitionDelay;
                return (
                  (d.maxDelay = e && f ? Math.max(e, f) : e || f),
                  (d.maxDuration = Math.max(
                    d.animationDuration * d.animationIterationCount,
                    d.transitionDuration
                  )),
                  d
                );
              }
              var G = m(d),
                O = 0,
                P = [];
              return function (a, c) {
                function j() {
                  m();
                }
                function l() {
                  m(!0);
                }
                function m(b) {
                  if (!(V || (X && W))) {
                    (V = !0),
                      (W = !1),
                      S.$$skipPreparationClasses || d.removeClass(a, sa),
                      d.removeClass(a, za),
                      x(U, !1),
                      w(U, !1),
                      Q(ja, function (a) {
                        U.style[a[0]] = "";
                      }),
                      G(a, S),
                      o(a, S),
                      Object.keys(T).length &&
                        Q(T, function (a, b) {
                          a
                            ? U.style.setProperty(b, a)
                            : U.style.removeProperty(b);
                        }),
                      S.onDone && S.onDone(),
                      na && na.length && a.off(na.join(" "), O);
                    var c = a.data(ta);
                    c && (i.cancel(c[0].timer), a.removeData(ta)),
                      Y && Y.complete(!b);
                  }
                }
                function u(a) {
                  Na.blockTransition && w(U, a),
                    Na.blockKeyframeAnimation && x(U, !!a);
                }
                function C() {
                  return (
                    (Y = new e({ end: j, cancel: l })),
                    z(M),
                    m(),
                    {
                      $$willAnimate: !1,
                      start: function () {
                        return Y;
                      },
                      end: j,
                    }
                  );
                }
                function O(a) {
                  a.stopPropagation();
                  var b = a.originalEvent || a,
                    c = b.$manualTimeStamp || Date.now(),
                    d = parseFloat(b.elapsedTime.toFixed(va));
                  Math.max(c - ha, 0) >= da && d >= ea && ((X = !0), m());
                }
                function P() {
                  function b() {
                    if (!V) {
                      if (
                        (u(!1),
                        Q(ja, function (a) {
                          var b = a[0],
                            c = a[1];
                          U.style[b] = c;
                        }),
                        G(a, S),
                        d.addClass(a, za),
                        Na.recalculateTimingStyles)
                      ) {
                        if (
                          ((xa = U.className + " " + sa),
                          (Ca = s(U, xa)),
                          (La = D(U, xa, Ca)),
                          (Ma = La.maxDelay),
                          (ca = Math.max(Ma, 0)),
                          (ea = La.maxDuration),
                          0 === ea)
                        )
                          return void m();
                        (Na.hasTransitions = La.transitionDuration > 0),
                          (Na.hasAnimations = La.animationDuration > 0);
                      }
                      if (
                        (Na.applyAnimationDelay &&
                          ((Ma =
                            "boolean" != typeof S.delay && E(S.delay)
                              ? parseFloat(S.delay)
                              : Ma),
                          (ca = Math.max(Ma, 0)),
                          (La.animationDelay = Ma),
                          (Oa = B(Ma, !0)),
                          ja.push(Oa),
                          (U.style[Oa[0]] = Oa[1])),
                        (da = ca * ua),
                        (fa = ea * ua),
                        S.easing)
                      ) {
                        var b,
                          e = S.easing;
                        Na.hasTransitions &&
                          ((b = I + ia), ja.push([b, e]), (U.style[b] = e)),
                          Na.hasAnimations &&
                            ((b = K + ia), ja.push([b, e]), (U.style[b] = e));
                      }
                      La.transitionDuration && na.push(J),
                        La.animationDuration && na.push(L),
                        (ha = Date.now());
                      var f = da + wa * fa,
                        g = ha + f,
                        h = a.data(ta) || [],
                        j = !0;
                      if (h.length) {
                        var k = h[0];
                        (j = g > k.expectedEndTime),
                          j ? i.cancel(k.timer) : h.push(m);
                      }
                      if (j) {
                        var l = i(c, f, !1);
                        (h[0] = { timer: l, expectedEndTime: g }),
                          h.push(m),
                          a.data(ta, h);
                      }
                      na.length && a.on(na.join(" "), O),
                        S.to &&
                          (S.cleanupStyles && H(T, U, Object.keys(S.to)),
                          q(a, S));
                    }
                  }
                  function c() {
                    var b = a.data(ta);
                    if (b) {
                      for (var c = 1; c < b.length; c++) b[c]();
                      a.removeData(ta);
                    }
                  }
                  if (!V) {
                    if (!U.parentNode) return void m();
                    var e = function (a) {
                        if (X) W && a && ((W = !1), m());
                        else if (((W = !a), La.animationDuration)) {
                          var b = x(U, W);
                          W ? ja.push(b) : h(ja, b);
                        }
                      },
                      f =
                        Ja > 0 &&
                        ((La.transitionDuration &&
                          0 === Da.transitionDuration) ||
                          (La.animationDuration &&
                            0 === Da.animationDuration)) &&
                        Math.max(Da.animationDelay, Da.transitionDelay);
                    f ? i(b, Math.floor(f * Ja * ua), !1) : b(),
                      (ba.resume = function () {
                        e(!0);
                      }),
                      (ba.pause = function () {
                        e(!1);
                      });
                  }
                }
                var S = c || {};
                S.$$prepared || (S = n(N(S)));
                var T = {},
                  U = t(a);
                if (!U || !U.parentNode || !r.enabled()) return C();
                var V,
                  W,
                  X,
                  Y,
                  ba,
                  ca,
                  da,
                  ea,
                  fa,
                  ha,
                  ja = [],
                  ka = a.attr("class"),
                  ma = f(S),
                  na = [];
                if (0 === S.duration || (!k.animations && !k.transitions))
                  return C();
                var oa = S.event && R(S.event) ? S.event.join(" ") : S.event,
                  pa = oa && S.structural,
                  qa = "",
                  ra = "";
                pa ? (qa = g(oa, _, !0)) : oa && (qa = oa),
                  S.addClass && (ra += g(S.addClass, Z)),
                  S.removeClass &&
                    (ra.length && (ra += " "), (ra += g(S.removeClass, $))),
                  S.applyClassesEarly && ra.length && G(a, S);
                var sa = [qa, ra].join(" ").trim(),
                  xa = ka + " " + sa,
                  za = g(sa, aa),
                  Aa = ma.to && Object.keys(ma.to).length > 0,
                  Ba = (S.keyframeStyle || "").length > 0;
                if (!Ba && !Aa && !sa) return C();
                var Ca, Da;
                if (S.stagger > 0) {
                  var Ea = parseFloat(S.stagger);
                  Da = {
                    transitionDelay: Ea,
                    animationDelay: Ea,
                    transitionDuration: 0,
                    animationDuration: 0,
                  };
                } else (Ca = s(U, xa)), (Da = v(U, sa, Ca, ya));
                S.$$skipPreparationClasses || d.addClass(a, sa);
                var Fa;
                if (S.transitionStyle) {
                  var Ga = [I, S.transitionStyle];
                  y(U, Ga), ja.push(Ga);
                }
                if (S.duration >= 0) {
                  Fa = U.style[I].length > 0;
                  var Ha = F(S.duration, Fa);
                  y(U, Ha), ja.push(Ha);
                }
                if (S.keyframeStyle) {
                  var Ia = [K, S.keyframeStyle];
                  y(U, Ia), ja.push(Ia);
                }
                var Ja = Da
                    ? S.staggerIndex >= 0
                      ? S.staggerIndex
                      : b.count(Ca)
                    : 0,
                  Ka = 0 === Ja;
                Ka && !S.skipBlocking && w(U, la);
                var La = D(U, xa, Ca),
                  Ma = La.maxDelay;
                (ca = Math.max(Ma, 0)), (ea = La.maxDuration);
                var Na = {};
                if (
                  ((Na.hasTransitions = La.transitionDuration > 0),
                  (Na.hasAnimations = La.animationDuration > 0),
                  (Na.hasTransitionAll =
                    Na.hasTransitions && "all" == La.transitionProperty),
                  (Na.applyTransitionDuration =
                    Aa &&
                    ((Na.hasTransitions && !Na.hasTransitionAll) ||
                      (Na.hasAnimations && !Na.hasTransitions))),
                  (Na.applyAnimationDuration = S.duration && Na.hasAnimations),
                  (Na.applyTransitionDelay =
                    E(S.delay) &&
                    (Na.applyTransitionDuration || Na.hasTransitions)),
                  (Na.applyAnimationDelay = E(S.delay) && Na.hasAnimations),
                  (Na.recalculateTimingStyles = ra.length > 0),
                  (Na.applyTransitionDuration || Na.applyAnimationDuration) &&
                    ((ea = S.duration ? parseFloat(S.duration) : ea),
                    Na.applyTransitionDuration &&
                      ((Na.hasTransitions = !0),
                      (La.transitionDuration = ea),
                      (Fa = U.style[I + ga].length > 0),
                      ja.push(F(ea, Fa))),
                    Na.applyAnimationDuration &&
                      ((Na.hasAnimations = !0),
                      (La.animationDuration = ea),
                      ja.push(A(ea)))),
                  0 === ea && !Na.recalculateTimingStyles)
                )
                  return C();
                if (null != S.delay) {
                  var Oa;
                  "boolean" != typeof S.delay &&
                    ((Oa = parseFloat(S.delay)), (ca = Math.max(Oa, 0))),
                    Na.applyTransitionDelay && ja.push(B(Oa)),
                    Na.applyAnimationDelay && ja.push(B(Oa, !0));
                }
                return (
                  null == S.duration &&
                    La.transitionDuration > 0 &&
                    (Na.recalculateTimingStyles =
                      Na.recalculateTimingStyles || Ka),
                  (da = ca * ua),
                  (fa = ea * ua),
                  S.skipBlocking ||
                    ((Na.blockTransition = La.transitionDuration > 0),
                    (Na.blockKeyframeAnimation =
                      La.animationDuration > 0 &&
                      Da.animationDelay > 0 &&
                      0 === Da.animationDuration)),
                  S.from &&
                    (S.cleanupStyles && H(T, U, Object.keys(S.from)), p(a, S)),
                  Na.blockTransition || Na.blockKeyframeAnimation
                    ? u(ea)
                    : S.skipBlocking || w(U, !1),
                  {
                    $$willAnimate: !0,
                    end: j,
                    start: function () {
                      return V
                        ? void 0
                        : ((ba = {
                            end: j,
                            cancel: l,
                            resume: null,
                            pause: null,
                          }),
                          (Y = new e(ba)),
                          z(P),
                          Y);
                    },
                  }
                );
              };
            },
          ];
        },
      ],
      Aa = [
        "$$animationProvider",
        function (a) {
          function b(a) {
            return a.parentNode && 11 === a.parentNode.nodeType;
          }
          a.drivers.push("$$animateCssDriver");
          var c = "ng-animate-shim",
            d = "ng-anchor",
            e = "ng-anchor-out",
            f = "ng-anchor-in";
          this.$get = [
            "$animateCss",
            "$rootScope",
            "$$AnimateRunner",
            "$rootElement",
            "$sniffer",
            "$$jqLite",
            "$document",
            function (a, g, h, i, j, k, l) {
              function n(a) {
                return a.replace(/\bng-\S+\b/g, "");
              }
              function o(a, b) {
                return (
                  S(a) && (a = a.split(" ")),
                  S(b) && (b = b.split(" ")),
                  a
                    .filter(function (a) {
                      return -1 === b.indexOf(a);
                    })
                    .join(" ")
                );
              }
              function p(b, g, i) {
                function j(a) {
                  var b = {},
                    c = t(a).getBoundingClientRect();
                  return (
                    Q(["width", "height", "top", "left"], function (a) {
                      var d = c[a];
                      switch (a) {
                        case "top":
                          d += s.scrollTop;
                          break;
                        case "left":
                          d += s.scrollLeft;
                      }
                      b[a] = Math.floor(d) + "px";
                    }),
                    b
                  );
                }
                function k() {
                  var b = a(q, { addClass: e, delay: !0, from: j(g) });
                  return b.$$willAnimate ? b : null;
                }
                function l(a) {
                  return a.attr("class") || "";
                }
                function m() {
                  var b = n(l(i)),
                    c = o(b, r),
                    d = o(r, b),
                    g = a(q, {
                      to: j(i),
                      addClass: f + " " + c,
                      removeClass: e + " " + d,
                      delay: !0,
                    });
                  return g.$$willAnimate ? g : null;
                }
                function p() {
                  q.remove(), g.removeClass(c), i.removeClass(c);
                }
                var q = P(t(g).cloneNode(!0)),
                  r = n(l(q));
                g.addClass(c), i.addClass(c), q.addClass(d), v.append(q);
                var u,
                  w = k();
                if (!w && ((u = m()), !u)) return p();
                var x = w || u;
                return {
                  start: function () {
                    function a() {
                      c && c.end();
                    }
                    var b,
                      c = x.start();
                    return (
                      c.done(function () {
                        return (
                          (c = null),
                          !u && (u = m())
                            ? ((c = u.start()),
                              c.done(function () {
                                (c = null), p(), b.complete();
                              }),
                              c)
                            : (p(), void b.complete())
                        );
                      }),
                      (b = new h({ end: a, cancel: a }))
                    );
                  },
                };
              }
              function q(a, b, c, d) {
                var e = r(a, M),
                  f = r(b, M),
                  g = [];
                return (
                  Q(d, function (a) {
                    var b = a.out,
                      d = a["in"],
                      e = p(c, b, d);
                    e && g.push(e);
                  }),
                  e || f || 0 !== g.length
                    ? {
                        start: function () {
                          function a() {
                            Q(b, function (a) {
                              a.end();
                            });
                          }
                          var b = [];
                          e && b.push(e.start()),
                            f && b.push(f.start()),
                            Q(g, function (a) {
                              b.push(a.start());
                            });
                          var c = new h({ end: a, cancel: a });
                          return (
                            h.all(b, function (a) {
                              c.complete(a);
                            }),
                            c
                          );
                        },
                      }
                    : void 0
                );
              }
              function r(b) {
                var c = b.element,
                  d = b.options || {};
                b.structural &&
                  ((d.event = b.event),
                  (d.structural = !0),
                  (d.applyClassesEarly = !0),
                  "leave" === b.event && (d.onDone = d.domOperation)),
                  d.preparationClasses &&
                    (d.event = z(d.event, d.preparationClasses));
                var e = a(c, d);
                return e.$$willAnimate ? e : null;
              }
              if (!j.animations && !j.transitions) return M;
              var s = l[0].body,
                u = t(i),
                v = P(b(u) || s.contains(u) ? u : s);
              m(k);
              return function (a) {
                return a.from && a.to
                  ? q(a.from, a.to, a.classes, a.anchors)
                  : r(a);
              };
            },
          ];
        },
      ],
      Ba = [
        "$animateProvider",
        function (a) {
          this.$get = [
            "$injector",
            "$$AnimateRunner",
            "$$jqLite",
            function (b, c, d) {
              function e(c) {
                c = R(c) ? c : c.split(" ");
                for (var d = [], e = {}, f = 0; f < c.length; f++) {
                  var g = c[f],
                    h = a.$$registeredAnimations[g];
                  h && !e[g] && (d.push(b.get(h)), (e[g] = !0));
                }
                return d;
              }
              var f = m(d);
              return function (a, b, d, g) {
                function h() {
                  g.domOperation(), f(a, g);
                }
                function i() {
                  (m = !0), h(), o(a, g);
                }
                function j(a, b, d, e, f) {
                  var g;
                  switch (d) {
                    case "animate":
                      g = [b, e.from, e.to, f];
                      break;
                    case "setClass":
                      g = [b, r, s, f];
                      break;
                    case "addClass":
                      g = [b, r, f];
                      break;
                    case "removeClass":
                      g = [b, s, f];
                      break;
                    default:
                      g = [b, f];
                  }
                  g.push(e);
                  var h = a.apply(a, g);
                  if (h)
                    if ((W(h.start) && (h = h.start()), h instanceof c))
                      h.done(f);
                    else if (W(h)) return h;
                  return M;
                }
                function k(a, b, d, e, f) {
                  var g = [];
                  return (
                    Q(e, function (e) {
                      var h = e[f];
                      h &&
                        g.push(function () {
                          var e,
                            f,
                            g = !1,
                            i = function (a) {
                              g || ((g = !0), (f || M)(a), e.complete(!a));
                            };
                          return (
                            (e = new c({
                              end: function () {
                                i();
                              },
                              cancel: function () {
                                i(!0);
                              },
                            })),
                            (f = j(h, a, b, d, function (a) {
                              var b = a === !1;
                              i(b);
                            })),
                            e
                          );
                        });
                    }),
                    g
                  );
                }
                function l(a, b, d, e, f) {
                  var g = k(a, b, d, e, f);
                  if (0 === g.length) {
                    var h, i;
                    "beforeSetClass" === f
                      ? ((h = k(a, "removeClass", d, e, "beforeRemoveClass")),
                        (i = k(a, "addClass", d, e, "beforeAddClass")))
                      : "setClass" === f &&
                        ((h = k(a, "removeClass", d, e, "removeClass")),
                        (i = k(a, "addClass", d, e, "addClass"))),
                      h && (g = g.concat(h)),
                      i && (g = g.concat(i));
                  }
                  if (0 !== g.length)
                    return function (a) {
                      var b = [];
                      return (
                        g.length &&
                          Q(g, function (a) {
                            b.push(a());
                          }),
                        b.length ? c.all(b, a) : a(),
                        function (a) {
                          Q(b, function (b) {
                            a ? b.cancel() : b.end();
                          });
                        }
                      );
                    };
                }
                var m = !1;
                3 === arguments.length && T(d) && ((g = d), (d = null)),
                  (g = n(g)),
                  d ||
                    ((d = a.attr("class") || ""),
                    g.addClass && (d += " " + g.addClass),
                    g.removeClass && (d += " " + g.removeClass));
                var p,
                  q,
                  r = g.addClass,
                  s = g.removeClass,
                  t = e(d);
                if (t.length) {
                  var u, v;
                  "leave" == b
                    ? ((v = "leave"), (u = "afterLeave"))
                    : ((v = "before" + b.charAt(0).toUpperCase() + b.substr(1)),
                      (u = b)),
                    "enter" !== b && "move" !== b && (p = l(a, b, g, t, v)),
                    (q = l(a, b, g, t, u));
                }
                if (p || q) {
                  var w;
                  return {
                    $$willAnimate: !0,
                    end: function () {
                      return (
                        w ? w.end() : (i(), (w = new c()), w.complete(!0)), w
                      );
                    },
                    start: function () {
                      function a(a) {
                        i(a), w.complete(a);
                      }
                      function b(b) {
                        m || ((d || M)(b), a(b));
                      }
                      if (w) return w;
                      w = new c();
                      var d,
                        e = [];
                      return (
                        p &&
                          e.push(function (a) {
                            d = p(a);
                          }),
                        e.length
                          ? e.push(function (a) {
                              h(), a(!0);
                            })
                          : h(),
                        q &&
                          e.push(function (a) {
                            d = q(a);
                          }),
                        w.setHost({
                          end: function () {
                            b();
                          },
                          cancel: function () {
                            b(!0);
                          },
                        }),
                        c.chain(e, a),
                        w
                      );
                    },
                  };
                }
              };
            },
          ];
        },
      ],
      Ca = [
        "$$animationProvider",
        function (a) {
          a.drivers.push("$$animateJsDriver"),
            (this.$get = [
              "$$animateJs",
              "$$AnimateRunner",
              function (a, b) {
                function c(b) {
                  var c = b.element,
                    d = b.event,
                    e = b.options,
                    f = b.classes;
                  return a(c, d, f, e);
                }
                return function (a) {
                  if (a.from && a.to) {
                    var d = c(a.from),
                      e = c(a.to);
                    if (!d && !e) return;
                    return {
                      start: function () {
                        function a() {
                          return function () {
                            Q(f, function (a) {
                              a.end();
                            });
                          };
                        }
                        function c(a) {
                          g.complete(a);
                        }
                        var f = [];
                        d && f.push(d.start()),
                          e && f.push(e.start()),
                          b.all(f, c);
                        var g = new b({ end: a(), cancel: a() });
                        return g;
                      },
                    };
                  }
                  return c(a);
                };
              },
            ]);
        },
      ],
      Da = "data-ng-animate",
      Ea = "$ngAnimatePin",
      Fa = [
        "$animateProvider",
        function (a) {
          function b(a) {
            if (!a) return null;
            var b = a.split(k),
              c = Object.create(null);
            return (
              Q(b, function (a) {
                c[a] = !0;
              }),
              c
            );
          }
          function c(a, c) {
            if (a && c) {
              var d = b(c);
              return a.split(k).some(function (a) {
                return d[a];
              });
            }
          }
          function e(a, b, c, d) {
            return l[a].some(function (a) {
              return a(b, c, d);
            });
          }
          function f(a, b) {
            var c = (a.addClass || "").length > 0,
              d = (a.removeClass || "").length > 0;
            return b ? c && d : c || d;
          }
          var g = 1,
            h = 2,
            k = " ",
            l = (this.rules = { skip: [], cancel: [], join: [] });
          l.join.push(function (a, b, c) {
            return !b.structural && f(b);
          }),
            l.skip.push(function (a, b, c) {
              return !b.structural && !f(b);
            }),
            l.skip.push(function (a, b, c) {
              return "leave" == c.event && b.structural;
            }),
            l.skip.push(function (a, b, c) {
              return c.structural && c.state === h && !b.structural;
            }),
            l.cancel.push(function (a, b, c) {
              return c.structural && b.structural;
            }),
            l.cancel.push(function (a, b, c) {
              return c.state === h && b.structural;
            }),
            l.cancel.push(function (a, b, d) {
              var e = b.addClass,
                f = b.removeClass,
                g = d.addClass,
                h = d.removeClass;
              return (U(e) && U(f)) || (U(g) && U(h)) ? !1 : c(e, h) || c(f, g);
            }),
            (this.$get = [
              "$$rAF",
              "$rootScope",
              "$rootElement",
              "$document",
              "$$HashMap",
              "$$animation",
              "$$AnimateRunner",
              "$templateRequest",
              "$$jqLite",
              "$$forceReflow",
              function (b, c, k, l, p, q, s, w, x, y) {
                function z() {
                  var a = !1;
                  return function (b) {
                    a
                      ? b()
                      : c.$$postDigest(function () {
                          (a = !0), b();
                        });
                  };
                }
                function A(a, b) {
                  return r(a, b, {});
                }
                function B(a, b, c) {
                  var d = t(b),
                    e = t(a),
                    f = [],
                    g = M[c];
                  return (
                    g &&
                      Q(g, function (a) {
                        _.call(a.node, d)
                          ? f.push(a.callback)
                          : "leave" === c &&
                            _.call(a.node, e) &&
                            f.push(a.callback);
                      }),
                    f
                  );
                }
                function C(a, d, j) {
                  function k(c, d, e, f) {
                    C(function () {
                      var c = B(w, a, d);
                      c.length &&
                        b(function () {
                          Q(c, function (b) {
                            b(a, e, f);
                          });
                        });
                    }),
                      c.progress(d, e, f);
                  }
                  function m(b) {
                    v(a, x), $(a, x), o(a, x), x.domOperation(), y.complete(!b);
                  }
                  var p,
                    w,
                    x = N(j);
                  (a = i(a)), a && ((p = t(a)), (w = a.parent())), (x = n(x));
                  var y = new s(),
                    C = z();
                  if (
                    (R(x.addClass) && (x.addClass = x.addClass.join(" ")),
                    x.addClass && !S(x.addClass) && (x.addClass = null),
                    R(x.removeClass) &&
                      (x.removeClass = x.removeClass.join(" ")),
                    x.removeClass &&
                      !S(x.removeClass) &&
                      (x.removeClass = null),
                    x.from && !T(x.from) && (x.from = null),
                    x.to && !T(x.to) && (x.to = null),
                    !p)
                  )
                    return m(), y;
                  var F = [p.className, x.addClass, x.removeClass].join(" ");
                  if (!Z(F)) return m(), y;
                  var L = ["enter", "move", "leave"].indexOf(d) >= 0,
                    M = !K || l[0].hidden || J.get(p),
                    O = (!M && I.get(p)) || {},
                    P = !!O.state;
                  if ((M || (P && O.state == g) || (M = !G(a, w, d)), M))
                    return m(), y;
                  L && D(a);
                  var U = {
                    structural: L,
                    element: a,
                    event: d,
                    addClass: x.addClass,
                    removeClass: x.removeClass,
                    close: m,
                    options: x,
                    runner: y,
                  };
                  if (P) {
                    var V = e("skip", a, U, O);
                    if (V)
                      return O.state === h ? (m(), y) : (r(a, O, U), O.runner);
                    var W = e("cancel", a, U, O);
                    if (W)
                      if (O.state === h) O.runner.end();
                      else {
                        if (!O.structural) return r(a, O, U), O.runner;
                        O.close();
                      }
                    else {
                      var X = e("join", a, U, O);
                      if (X) {
                        if (O.state !== h)
                          return (
                            u(a, L ? d : null, x),
                            (d = U.event = O.event),
                            (x = r(a, O, U)),
                            O.runner
                          );
                        A(a, U);
                      }
                    }
                  } else A(a, U);
                  var Y = U.structural;
                  if (
                    (Y ||
                      (Y =
                        ("animate" === U.event &&
                          Object.keys(U.options.to || {}).length > 0) ||
                        f(U)),
                    !Y)
                  )
                    return m(), E(a), y;
                  var _ = (O.counter || 0) + 1;
                  return (
                    (U.counter = _),
                    H(a, g, U),
                    c.$$postDigest(function () {
                      var b = I.get(p),
                        c = !b;
                      b = b || {};
                      var e = a.parent() || [],
                        g =
                          e.length > 0 &&
                          ("animate" === b.event || b.structural || f(b));
                      if (c || b.counter !== _ || !g)
                        return (
                          c && ($(a, x), o(a, x)),
                          (c || (L && b.event !== d)) &&
                            (x.domOperation(), y.end()),
                          void (g || E(a))
                        );
                      (d = !b.structural && f(b, !0) ? "setClass" : b.event),
                        H(a, h);
                      var i = q(a, d, b.options);
                      i.done(function (b) {
                        m(!b);
                        var c = I.get(p);
                        c && c.counter === _ && E(t(a)), k(y, d, "close", {});
                      }),
                        y.setHost(i),
                        k(y, d, "start", {});
                    }),
                    y
                  );
                }
                function D(a) {
                  var b = t(a),
                    c = b.querySelectorAll("[" + Da + "]");
                  Q(c, function (a) {
                    var b = parseInt(a.getAttribute(Da)),
                      c = I.get(a);
                    if (c)
                      switch (b) {
                        case h:
                          c.runner.end();
                        case g:
                          I.remove(a);
                      }
                  });
                }
                function E(a) {
                  var b = t(a);
                  b.removeAttribute(Da), I.remove(b);
                }
                function F(a, b) {
                  return t(a) === t(b);
                }
                function G(a, b, c) {
                  var d,
                    e = P(l[0].body),
                    f = F(a, e) || "HTML" === a[0].nodeName,
                    g = F(a, k),
                    h = !1,
                    i = J.get(t(a)),
                    j = a.data(Ea);
                  for (j && (b = j); b && b.length; ) {
                    g || (g = F(b, k));
                    var m = b[0];
                    if (m.nodeType !== Y) break;
                    var n = I.get(m) || {};
                    if (!h) {
                      var o = J.get(m);
                      if (o === !0 && i !== !1) {
                        i = !0;
                        break;
                      }
                      o === !1 && (i = !1), (h = n.structural);
                    }
                    if (U(d) || d === !0) {
                      var p = b.data(da);
                      V(p) && (d = p);
                    }
                    if (h && d === !1) break;
                    if ((f || (f = F(b, e)), f && g)) break;
                    b = g || !(j = b.data(Ea)) ? b.parent() : j;
                  }
                  var q = (!h || d) && i !== !0;
                  return q && g && f;
                }
                function H(a, b, c) {
                  (c = c || {}), (c.state = b);
                  var d = t(a);
                  d.setAttribute(Da, b);
                  var e = I.get(d),
                    f = e ? O(e, c) : c;
                  I.put(d, f);
                }
                var I = new p(),
                  J = new p(),
                  K = null,
                  L = c.$watch(
                    function () {
                      return 0 === w.totalPendingRequests;
                    },
                    function (a) {
                      a &&
                        (L(),
                        c.$$postDigest(function () {
                          c.$$postDigest(function () {
                            null === K && (K = !0);
                          });
                        }));
                    }
                  ),
                  M = {},
                  W = a.classNameFilter(),
                  Z = W
                    ? function (a) {
                        return W.test(a);
                      }
                    : function () {
                        return !0;
                      },
                  $ = m(x),
                  _ =
                    Node.prototype.contains ||
                    function (a) {
                      return (
                        this === a || !!(16 & this.compareDocumentPosition(a))
                      );
                    };
                return {
                  on: function (a, b, c) {
                    var d = j(b);
                    (M[a] = M[a] || []), M[a].push({ node: d, callback: c });
                  },
                  off: function (a, b, c) {
                    function d(a, b, c) {
                      var d = j(b);
                      return a.filter(function (a) {
                        var b = a.node === d && (!c || a.callback === c);
                        return !b;
                      });
                    }
                    var e = M[a];
                    e && (M[a] = 1 === arguments.length ? null : d(e, b, c));
                  },
                  pin: function (a, b) {
                    d(X(a), "element", "not an element"),
                      d(X(b), "parentElement", "not an element"),
                      a.data(Ea, b);
                  },
                  push: function (a, b, c, d) {
                    return (c = c || {}), (c.domOperation = d), C(a, b, c);
                  },
                  enabled: function (a, b) {
                    var c = arguments.length;
                    if (0 === c) b = !!K;
                    else {
                      var d = X(a);
                      if (d) {
                        var e = t(a),
                          f = J.get(e);
                        1 === c ? (b = !f) : J.put(e, !b);
                      } else b = K = !!a;
                    }
                    return b;
                  },
                };
              },
            ]);
        },
      ],
      Ga = [
        "$animateProvider",
        function (a) {
          function b(a, b) {
            a.data(h, b);
          }
          function c(a) {
            a.removeData(h);
          }
          function d(a) {
            return a.data(h);
          }
          var f = "ng-animate-ref",
            g = (this.drivers = []),
            h = "$$animationRunner";
          this.$get = [
            "$$jqLite",
            "$rootScope",
            "$injector",
            "$$AnimateRunner",
            "$$HashMap",
            "$$rAFScheduler",
            function (a, h, i, j, k, l) {
              function p(a) {
                function b(a) {
                  if (a.processed) return a;
                  a.processed = !0;
                  var c = a.domNode,
                    d = c.parentNode;
                  f.put(c, a);
                  for (var g; d; ) {
                    if ((g = f.get(d))) {
                      g.processed || (g = b(g));
                      break;
                    }
                    d = d.parentNode;
                  }
                  return (g || e).children.push(a), a;
                }
                function c(a) {
                  var b,
                    c = [],
                    d = [];
                  for (b = 0; b < a.children.length; b++) d.push(a.children[b]);
                  var e = d.length,
                    f = 0,
                    g = [];
                  for (b = 0; b < d.length; b++) {
                    var h = d[b];
                    0 >= e && ((e = f), (f = 0), c.push(g), (g = [])),
                      g.push(h.fn),
                      h.children.forEach(function (a) {
                        f++, d.push(a);
                      }),
                      e--;
                  }
                  return g.length && c.push(g), c;
                }
                var d,
                  e = { children: [] },
                  f = new k();
                for (d = 0; d < a.length; d++) {
                  var g = a[d];
                  f.put(
                    g.domNode,
                    (a[d] = { domNode: g.domNode, fn: g.fn, children: [] })
                  );
                }
                for (d = 0; d < a.length; d++) b(a[d]);
                return c(e);
              }
              var q = [],
                r = m(a);
              return function (k, m, s) {
                function u(a) {
                  var b = "[" + f + "]",
                    c = a.hasAttribute(f) ? [a] : a.querySelectorAll(b),
                    d = [];
                  return (
                    Q(c, function (a) {
                      var b = a.getAttribute(f);
                      b && b.length && d.push(a);
                    }),
                    d
                  );
                }
                function v(a) {
                  var b = [],
                    c = {};
                  Q(a, function (a, d) {
                    var e = a.element,
                      g = t(e),
                      h = a.event,
                      i = ["enter", "move"].indexOf(h) >= 0,
                      j = a.structural ? u(g) : [];
                    if (j.length) {
                      var k = i ? "to" : "from";
                      Q(j, function (a) {
                        var b = a.getAttribute(f);
                        (c[b] = c[b] || {}),
                          (c[b][k] = { animationID: d, element: P(a) });
                      });
                    } else b.push(a);
                  });
                  var d = {},
                    e = {};
                  return (
                    Q(c, function (c, f) {
                      var g = c.from,
                        h = c.to;
                      if (!g || !h) {
                        var i = g ? g.animationID : h.animationID,
                          j = i.toString();
                        return void (d[j] || ((d[j] = !0), b.push(a[i])));
                      }
                      var k = a[g.animationID],
                        l = a[h.animationID],
                        m = g.animationID.toString();
                      if (!e[m]) {
                        var n = (e[m] = {
                          structural: !0,
                          beforeStart: function () {
                            k.beforeStart(), l.beforeStart();
                          },
                          close: function () {
                            k.close(), l.close();
                          },
                          classes: w(k.classes, l.classes),
                          from: k,
                          to: l,
                          anchors: [],
                        });
                        n.classes.length ? b.push(n) : (b.push(k), b.push(l));
                      }
                      e[m].anchors.push({ out: g.element, in: h.element });
                    }),
                    b
                  );
                }
                function w(a, b) {
                  (a = a.split(" ")), (b = b.split(" "));
                  for (var c = [], d = 0; d < a.length; d++) {
                    var e = a[d];
                    if ("ng-" !== e.substring(0, 3))
                      for (var f = 0; f < b.length; f++)
                        if (e === b[f]) {
                          c.push(e);
                          break;
                        }
                  }
                  return c.join(" ");
                }
                function x(a) {
                  for (var b = g.length - 1; b >= 0; b--) {
                    var c = g[b];
                    if (i.has(c)) {
                      var d = i.get(c),
                        e = d(a);
                      if (e) return e;
                    }
                  }
                }
                function y() {
                  k.addClass(ca),
                    F && a.addClass(k, F),
                    G && (a.removeClass(k, G), (G = null));
                }
                function z(a, b) {
                  function c(a) {
                    d(a).setHost(b);
                  }
                  a.from && a.to
                    ? (c(a.from.element), c(a.to.element))
                    : c(a.element);
                }
                function A() {
                  var a = d(k);
                  !a || ("leave" === m && s.$$domOperationFired) || a.end();
                }
                function B(b) {
                  k.off("$destroy", A),
                    c(k),
                    r(k, s),
                    o(k, s),
                    s.domOperation(),
                    F && a.removeClass(k, F),
                    k.removeClass(ca),
                    D.complete(!b);
                }
                s = n(s);
                var C = ["enter", "move", "leave"].indexOf(m) >= 0,
                  D = new j({
                    end: function () {
                      B();
                    },
                    cancel: function () {
                      B(!0);
                    },
                  });
                if (!g.length) return B(), D;
                b(k, D);
                var E = e(k.attr("class"), e(s.addClass, s.removeClass)),
                  F = s.tempClasses;
                F && ((E += " " + F), (s.tempClasses = null));
                var G;
                return (
                  C && ((G = "ng-" + m + ba), a.addClass(k, G)),
                  q.push({
                    element: k,
                    classes: E,
                    event: m,
                    structural: C,
                    options: s,
                    beforeStart: y,
                    close: B,
                  }),
                  k.on("$destroy", A),
                  q.length > 1
                    ? D
                    : (h.$$postDigest(function () {
                        var a = [];
                        Q(q, function (b) {
                          d(b.element) ? a.push(b) : b.close();
                        }),
                          (q.length = 0);
                        var b = v(a),
                          c = [];
                        Q(b, function (a) {
                          c.push({
                            domNode: t(a.from ? a.from.element : a.element),
                            fn: function () {
                              a.beforeStart();
                              var b,
                                c = a.close,
                                e = a.anchors
                                  ? a.from.element || a.to.element
                                  : a.element;
                              if (d(e)) {
                                var f = x(a);
                                f && (b = f.start);
                              }
                              if (b) {
                                var g = b();
                                g.done(function (a) {
                                  c(!a);
                                }),
                                  z(a, g);
                              } else c();
                            },
                          });
                        }),
                          l(p(c));
                      }),
                      D)
                );
              };
            },
          ];
        },
      ],
      Ha = [
        "$animate",
        "$rootScope",
        function (a, b) {
          return {
            restrict: "A",
            transclude: "element",
            terminal: !0,
            priority: 600,
            link: function (b, c, d, e, f) {
              var g, h;
              b.$watchCollection(d.ngAnimateSwap || d["for"], function (d) {
                g && a.leave(g),
                  h && (h.$destroy(), (h = null)),
                  (d || 0 === d) &&
                    ((h = b.$new()),
                    f(h, function (b) {
                      (g = b), a.enter(b, null, c);
                    }));
              });
            },
          };
        },
      ];
    b.module("ngAnimate", [])
      .directive("ngAnimateSwap", Ha)
      .directive("ngAnimateChildren", sa)
      .factory("$$rAFScheduler", ra)
      .provider("$$animateQueue", Fa)
      .provider("$$animation", Ga)
      .provider("$animateCss", za)
      .provider("$$animateCssDriver", Aa)
      .provider("$$animateJs", Ba)
      .provider("$$animateJsDriver", Ca);
  })(window, window.angular),
  (function (a, b, c) {
    "use strict";
    function d(a, c, d) {
      function e(a, d, e) {
        var g, h;
        (e = e || {}),
          (h = e.expires),
          (g = b.isDefined(e.path) ? e.path : f),
          b.isUndefined(d) && ((h = "Thu, 01 Jan 1970 00:00:00 GMT"), (d = "")),
          b.isString(h) && (h = new Date(h));
        var i = encodeURIComponent(a) + "=" + encodeURIComponent(d);
        (i += g ? ";path=" + g : ""),
          (i += e.domain ? ";domain=" + e.domain : ""),
          (i += h ? ";expires=" + h.toUTCString() : ""),
          (i += e.secure ? ";secure" : "");
        var j = i.length + 1;
        return (
          j > 4096 &&
            c.warn(
              "Cookie '" +
                a +
                "' possibly not set or overflowed because it was too large (" +
                j +
                " > 4096 bytes)!"
            ),
          i
        );
      }
      var f = d.baseHref(),
        g = a[0];
      return function (a, b, c) {
        g.cookie = e(a, b, c);
      };
    }
    b.module("ngCookies", ["ng"]).provider("$cookies", [
      function () {
        function a(a) {
          return a ? b.extend({}, d, a) : d;
        }
        var d = (this.defaults = {});
        this.$get = [
          "$$cookieReader",
          "$$cookieWriter",
          function (d, e) {
            return {
              get: function (a) {
                return d()[a];
              },
              getObject: function (a) {
                var c = this.get(a);
                return c ? b.fromJson(c) : c;
              },
              getAll: function () {
                return d();
              },
              put: function (b, c, d) {
                e(b, c, a(d));
              },
              putObject: function (a, c, d) {
                this.put(a, b.toJson(c), d);
              },
              remove: function (b, d) {
                e(b, c, a(d));
              },
            };
          },
        ];
      },
    ]),
      b.module("ngCookies").factory("$cookieStore", [
        "$cookies",
        function (a) {
          return {
            get: function (b) {
              return a.getObject(b);
            },
            put: function (b, c) {
              a.putObject(b, c);
            },
            remove: function (b) {
              a.remove(b);
            },
          };
        },
      ]),
      (d.$inject = ["$document", "$log", "$browser"]),
      b.module("ngCookies").provider("$$cookieWriter", function () {
        this.$get = d;
      });
  })(window, window.angular),
  (function (a, b, c) {
    "use strict";
    function d(a) {
      return null != a && "" !== a && "hasOwnProperty" !== a && h.test("." + a);
    }
    function e(a, e) {
      if (!d(e))
        throw g("badmember", 'Dotted member path "@{0}" is invalid.', e);
      for (
        var f = e.split("."), h = 0, i = f.length;
        i > h && b.isDefined(a);
        h++
      ) {
        var j = f[h];
        a = null !== a ? a[j] : c;
      }
      return a;
    }
    function f(a, c) {
      (c = c || {}),
        b.forEach(c, function (a, b) {
          delete c[b];
        });
      for (var d in a)
        !a.hasOwnProperty(d) ||
          ("$" === d.charAt(0) && "$" === d.charAt(1)) ||
          (c[d] = a[d]);
      return c;
    }
    var g = b.$$minErr("$resource"),
      h = /^(\.[a-zA-Z_$@][0-9a-zA-Z_$@]*)+$/;
    b.module("ngResource", ["ng"]).provider("$resource", function () {
      var a = /^https?:\/\/[^\/]*/,
        d = this;
      (this.defaults = {
        stripTrailingSlashes: !0,
        actions: {
          get: { method: "GET" },
          save: { method: "POST" },
          query: { method: "GET", isArray: !0 },
          remove: { method: "DELETE" },
          delete: { method: "DELETE" },
        },
      }),
        (this.$get = [
          "$http",
          "$log",
          "$q",
          "$timeout",
          function (h, i, j, k) {
            function l(a) {
              return m(a, !0)
                .replace(/%26/gi, "&")
                .replace(/%3D/gi, "=")
                .replace(/%2B/gi, "+");
            }
            function m(a, b) {
              return encodeURIComponent(a)
                .replace(/%40/gi, "@")
                .replace(/%3A/gi, ":")
                .replace(/%24/g, "$")
                .replace(/%2C/gi, ",")
                .replace(/%20/g, b ? "%20" : "+");
            }
            function n(a, b) {
              (this.template = a),
                (this.defaults = r({}, d.defaults, b)),
                (this.urlParams = {});
            }
            function o(a, l, m, u) {
              function v(a, b) {
                var c = {};
                return (
                  (b = r({}, l, b)),
                  q(b, function (b, d) {
                    t(b) && (b = b()),
                      (c[d] =
                        b && b.charAt && "@" == b.charAt(0)
                          ? e(a, b.substr(1))
                          : b);
                  }),
                  c
                );
              }
              function w(a) {
                return a.resource;
              }
              function x(a) {
                f(a || {}, this);
              }
              var y = new n(a, u);
              return (
                (m = r({}, d.defaults.actions, m)),
                (x.prototype.toJSON = function () {
                  var a = r({}, this);
                  return delete a.$promise, delete a.$resolved, a;
                }),
                q(m, function (a, e) {
                  var l = /^(POST|PUT|PATCH)$/i.test(a.method),
                    m = a.timeout,
                    n = b.isDefined(a.cancellable)
                      ? a.cancellable
                      : u && b.isDefined(u.cancellable)
                      ? u.cancellable
                      : d.defaults.cancellable;
                  m &&
                    !b.isNumber(m) &&
                    (i.debug(
                      "ngResource:\n  Only numeric values are allowed as `timeout`.\n  Promises are not supported in $resource, because the same value would be used for multiple requests. If you are looking for a way to cancel requests, you should use the `cancellable` option."
                    ),
                    delete a.timeout,
                    (m = null)),
                    (x[e] = function (d, i, o, u) {
                      var z,
                        A,
                        B,
                        C = {};
                      switch (arguments.length) {
                        case 4:
                          (B = u), (A = o);
                        case 3:
                        case 2:
                          if (!t(i)) {
                            (C = d), (z = i), (A = o);
                            break;
                          }
                          if (t(d)) {
                            (A = d), (B = i);
                            break;
                          }
                          (A = i), (B = o);
                        case 1:
                          t(d) ? (A = d) : l ? (z = d) : (C = d);
                          break;
                        case 0:
                          break;
                        default:
                          throw g(
                            "badargs",
                            "Expected up to 4 arguments [params, data, success, error], got {0} arguments",
                            arguments.length
                          );
                      }
                      var D,
                        E,
                        F = this instanceof x,
                        G = F ? z : a.isArray ? [] : new x(z),
                        H = {},
                        I = (a.interceptor && a.interceptor.response) || w,
                        J = (a.interceptor && a.interceptor.responseError) || c;
                      q(a, function (a, b) {
                        switch (b) {
                          default:
                            H[b] = s(a);
                            break;
                          case "params":
                          case "isArray":
                          case "interceptor":
                          case "cancellable":
                        }
                      }),
                        !F &&
                          n &&
                          ((D = j.defer()),
                          (H.timeout = D.promise),
                          m && (E = k(D.resolve, m))),
                        l && (H.data = z),
                        y.setUrlParams(
                          H,
                          r({}, v(z, a.params || {}), C),
                          a.url
                        );
                      var K = h(H).then(
                        function (c) {
                          var d = c.data;
                          if (d) {
                            if (b.isArray(d) !== !!a.isArray)
                              throw g(
                                "badcfg",
                                "Error in resource configuration for action `{0}`. Expected response to contain an {1} but got an {2} (Request: {3} {4})",
                                e,
                                a.isArray ? "array" : "object",
                                b.isArray(d) ? "array" : "object",
                                H.method,
                                H.url
                              );
                            if (a.isArray)
                              (G.length = 0),
                                q(d, function (a) {
                                  "object" == typeof a
                                    ? G.push(new x(a))
                                    : G.push(a);
                                });
                            else {
                              var h = G.$promise;
                              f(d, G), (G.$promise = h);
                            }
                          }
                          return (c.resource = G), c;
                        },
                        function (a) {
                          return (B || p)(a), j.reject(a);
                        }
                      );
                      return (
                        K["finally"](function () {
                          (G.$resolved = !0),
                            !F &&
                              n &&
                              ((G.$cancelRequest = b.noop),
                              k.cancel(E),
                              (D = E = H.timeout = null));
                        }),
                        (K = K.then(function (a) {
                          var b = I(a);
                          return (A || p)(b, a.headers), b;
                        }, J)),
                        F
                          ? K
                          : ((G.$promise = K),
                            (G.$resolved = !1),
                            n && (G.$cancelRequest = D.resolve),
                            G)
                      );
                    }),
                    (x.prototype["$" + e] = function (a, b, c) {
                      t(a) && ((c = b), (b = a), (a = {}));
                      var d = x[e].call(this, a, this, b, c);
                      return d.$promise || d;
                    });
                }),
                (x.bind = function (b) {
                  return o(a, r({}, l, b), m);
                }),
                x
              );
            }
            var p = b.noop,
              q = b.forEach,
              r = b.extend,
              s = b.copy,
              t = b.isFunction;
            return (
              (n.prototype = {
                setUrlParams: function (c, d, e) {
                  var f,
                    h,
                    i = this,
                    j = e || i.template,
                    k = "",
                    n = (i.urlParams = {});
                  q(j.split(/\W/), function (a) {
                    if ("hasOwnProperty" === a)
                      throw g(
                        "badname",
                        "hasOwnProperty is not a valid parameter name."
                      );
                    !new RegExp("^\\d+$").test(a) &&
                      a &&
                      new RegExp("(^|[^\\\\]):" + a + "(\\W|$)").test(j) &&
                      (n[a] = {
                        isQueryParamValue: new RegExp(
                          "\\?.*=:" + a + "(?:\\W|$)"
                        ).test(j),
                      });
                  }),
                    (j = j.replace(/\\:/g, ":")),
                    (j = j.replace(a, function (a) {
                      return (k = a), "";
                    })),
                    (d = d || {}),
                    q(i.urlParams, function (a, c) {
                      (f = d.hasOwnProperty(c) ? d[c] : i.defaults[c]),
                        b.isDefined(f) && null !== f
                          ? ((h = a.isQueryParamValue ? m(f, !0) : l(f)),
                            (j = j.replace(
                              new RegExp(":" + c + "(\\W|$)", "g"),
                              function (a, b) {
                                return h + b;
                              }
                            )))
                          : (j = j.replace(
                              new RegExp("(/?):" + c + "(\\W|$)", "g"),
                              function (a, b, c) {
                                return "/" == c.charAt(0) ? c : b + c;
                              }
                            ));
                    }),
                    i.defaults.stripTrailingSlashes &&
                      (j = j.replace(/\/+$/, "") || "/"),
                    (j = j.replace(/\/\.(?=\w+($|\?))/, ".")),
                    (c.url = k + j.replace(/\/\\\./, "/.")),
                    q(d, function (a, b) {
                      i.urlParams[b] ||
                        ((c.params = c.params || {}), (c.params[b] = a));
                    });
                },
              }),
              o
            );
          },
        ]);
    });
  })(window, window.angular),
  (function (a, b, c) {
    "use strict";
    function d() {
      function a(a, c) {
        return b.extend(Object.create(a), c);
      }
      function c(a, b) {
        var c = b.caseInsensitiveMatch,
          d = { originalPath: a, regexp: a },
          e = (d.keys = []);
        return (
          (a = a
            .replace(/([().])/g, "\\$1")
            .replace(/(\/)?:(\w+)([\?\*])?/g, function (a, b, c, d) {
              var f = "?" === d ? d : null,
                g = "*" === d ? d : null;
              return (
                e.push({ name: c, optional: !!f }),
                (b = b || ""),
                "" +
                  (f ? "" : b) +
                  "(?:" +
                  (f ? b : "") +
                  ((g && "(.+?)") || "([^/]+)") +
                  (f || "") +
                  ")" +
                  (f || "")
              );
            })
            .replace(/([\/$\*])/g, "\\$1")),
          (d.regexp = new RegExp("^" + a + "$", c ? "i" : "")),
          d
        );
      }
      var d = {};
      (this.when = function (a, e) {
        var f = b.copy(e);
        if (
          (b.isUndefined(f.reloadOnSearch) && (f.reloadOnSearch = !0),
          b.isUndefined(f.caseInsensitiveMatch) &&
            (f.caseInsensitiveMatch = this.caseInsensitiveMatch),
          (d[a] = b.extend(f, a && c(a, f))),
          a)
        ) {
          var g = "/" == a[a.length - 1] ? a.substr(0, a.length - 1) : a + "/";
          d[g] = b.extend({ redirectTo: a }, c(g, f));
        }
        return this;
      }),
        (this.caseInsensitiveMatch = !1),
        (this.otherwise = function (a) {
          return (
            "string" == typeof a && (a = { redirectTo: a }),
            this.when(null, a),
            this
          );
        }),
        (this.$get = [
          "$rootScope",
          "$location",
          "$routeParams",
          "$q",
          "$injector",
          "$templateRequest",
          "$sce",
          function (c, e, f, g, h, j, k) {
            function l(a, b) {
              var c = b.keys,
                d = {};
              if (!b.regexp) return null;
              var e = b.regexp.exec(a);
              if (!e) return null;
              for (var f = 1, g = e.length; g > f; ++f) {
                var h = c[f - 1],
                  i = e[f];
                h && i && (d[h.name] = i);
              }
              return d;
            }
            function m(a) {
              var d = t.current;
              (q = o()),
                (r =
                  q &&
                  d &&
                  q.$$route === d.$$route &&
                  b.equals(q.pathParams, d.pathParams) &&
                  !q.reloadOnSearch &&
                  !s),
                r ||
                  (!d && !q) ||
                  (c.$broadcast("$routeChangeStart", q, d).defaultPrevented &&
                    a &&
                    a.preventDefault());
            }
            function n() {
              var a = t.current,
                d = q;
              r
                ? ((a.params = d.params),
                  b.copy(a.params, f),
                  c.$broadcast("$routeUpdate", a))
                : (d || a) &&
                  ((s = !1),
                  (t.current = d),
                  d &&
                    d.redirectTo &&
                    (b.isString(d.redirectTo)
                      ? e
                          .path(p(d.redirectTo, d.params))
                          .search(d.params)
                          .replace()
                      : e
                          .url(d.redirectTo(d.pathParams, e.path(), e.search()))
                          .replace()),
                  g
                    .when(d)
                    .then(function () {
                      if (d) {
                        var a,
                          c,
                          e = b.extend({}, d.resolve);
                        return (
                          b.forEach(e, function (a, c) {
                            e[c] = b.isString(a)
                              ? h.get(a)
                              : h.invoke(a, null, null, c);
                          }),
                          b.isDefined((a = d.template))
                            ? b.isFunction(a) && (a = a(d.params))
                            : b.isDefined((c = d.templateUrl)) &&
                              (b.isFunction(c) && (c = c(d.params)),
                              b.isDefined(c) &&
                                ((d.loadedTemplateUrl = k.valueOf(c)),
                                (a = j(c)))),
                          b.isDefined(a) && (e.$template = a),
                          g.all(e)
                        );
                      }
                    })
                    .then(
                      function (e) {
                        d == t.current &&
                          (d && ((d.locals = e), b.copy(d.params, f)),
                          c.$broadcast("$routeChangeSuccess", d, a));
                      },
                      function (b) {
                        d == t.current &&
                          c.$broadcast("$routeChangeError", d, a, b);
                      }
                    ));
            }
            function o() {
              var c, f;
              return (
                b.forEach(d, function (d, g) {
                  !f &&
                    (c = l(e.path(), d)) &&
                    ((f = a(d, {
                      params: b.extend({}, e.search(), c),
                      pathParams: c,
                    })),
                    (f.$$route = d));
                }),
                f || (d[null] && a(d[null], { params: {}, pathParams: {} }))
              );
            }
            function p(a, c) {
              var d = [];
              return (
                b.forEach((a || "").split(":"), function (a, b) {
                  if (0 === b) d.push(a);
                  else {
                    var e = a.match(/(\w+)(?:[?*])?(.*)/),
                      f = e[1];
                    d.push(c[f]), d.push(e[2] || ""), delete c[f];
                  }
                }),
                d.join("")
              );
            }
            var q,
              r,
              s = !1,
              t = {
                routes: d,
                reload: function () {
                  s = !0;
                  var a = {
                    defaultPrevented: !1,
                    preventDefault: function () {
                      (this.defaultPrevented = !0), (s = !1);
                    },
                  };
                  c.$evalAsync(function () {
                    m(a), a.defaultPrevented || n();
                  });
                },
                updateParams: function (a) {
                  if (!this.current || !this.current.$$route)
                    throw i(
                      "norout",
                      "Tried updating route when with no current route"
                    );
                  (a = b.extend({}, this.current.params, a)),
                    e.path(p(this.current.$$route.originalPath, a)),
                    e.search(a);
                },
              };
            return (
              c.$on("$locationChangeStart", m),
              c.$on("$locationChangeSuccess", n),
              t
            );
          },
        ]);
    }
    function e() {
      this.$get = function () {
        return {};
      };
    }
    function f(a, c, d) {
      return {
        restrict: "ECA",
        terminal: !0,
        priority: 400,
        transclude: "element",
        link: function (e, f, g, h, i) {
          function j() {
            n && (d.cancel(n), (n = null)),
              l && (l.$destroy(), (l = null)),
              m &&
                ((n = d.leave(m)),
                n.then(function () {
                  n = null;
                }),
                (m = null));
          }
          function k() {
            var g = a.current && a.current.locals,
              h = g && g.$template;
            if (b.isDefined(h)) {
              var k = e.$new(),
                n = a.current,
                q = i(k, function (a) {
                  d.enter(a, null, m || f).then(function () {
                    !b.isDefined(o) || (o && !e.$eval(o)) || c();
                  }),
                    j();
                });
              (m = q),
                (l = n.scope = k),
                l.$emit("$viewContentLoaded"),
                l.$eval(p);
            } else j();
          }
          var l,
            m,
            n,
            o = g.autoscroll,
            p = g.onload || "";
          e.$on("$routeChangeSuccess", k), k();
        },
      };
    }
    function g(a, b, c) {
      return {
        restrict: "ECA",
        priority: -400,
        link: function (d, e) {
          var f = c.current,
            g = f.locals;
          e.html(g.$template);
          var h = a(e.contents());
          if (f.controller) {
            g.$scope = d;
            var i = b(f.controller, g);
            f.controllerAs && (d[f.controllerAs] = i),
              e.data("$ngControllerController", i),
              e.children().data("$ngControllerController", i);
          }
          (d[f.resolveAs || "$resolve"] = g), h(d);
        },
      };
    }
    var h = b.module("ngRoute", ["ng"]).provider("$route", d),
      i = b.$$minErr("ngRoute");
    h.provider("$routeParams", e),
      h.directive("ngView", f),
      h.directive("ngView", g),
      (f.$inject = ["$route", "$anchorScroll", "$animate"]),
      (g.$inject = ["$compile", "$controller", "$route"]);
  })(window, window.angular),
  (function (a, b, c) {
    "use strict";
    function d() {
      var a = !1;
      (this.$get = [
        "$$sanitizeUri",
        function (c) {
          return (
            a && b.extend(x, v),
            function (a) {
              var b = [];
              return (
                g(
                  a,
                  j(b, function (a, b) {
                    return !/^unsafe:/.test(c(a, b));
                  })
                ),
                b.join("")
              );
            }
          );
        },
      ]),
        (this.enableSvg = function (c) {
          return b.isDefined(c) ? ((a = c), this) : a;
        });
    }
    function e(a) {
      var c = [],
        d = j(c, b.noop);
      return d.chars(a), c.join("");
    }
    function f(a, c) {
      var d,
        e = {},
        f = a.split(",");
      for (d = 0; d < f.length; d++) e[c ? b.lowercase(f[d]) : f[d]] = !0;
      return e;
    }
    function g(a, b) {
      null === a || a === c ? (a = "") : "string" != typeof a && (a = "" + a),
        (l.innerHTML = a);
      var d = 5;
      do {
        if (0 === d)
          throw m(
            "uinput",
            "Failed to sanitize html because the input is unstable"
          );
        d--,
          document.documentMode <= 11 && k(l),
          (a = l.innerHTML),
          (l.innerHTML = a);
      } while (a !== l.innerHTML);
      for (var e = l.firstChild; e; ) {
        switch (e.nodeType) {
          case 1:
            b.start(e.nodeName.toLowerCase(), h(e.attributes));
            break;
          case 3:
            b.chars(e.textContent);
        }
        var f;
        if (
          !(f = e.firstChild) &&
          (1 == e.nodeType && b.end(e.nodeName.toLowerCase()),
          (f = e.nextSibling),
          !f)
        )
          for (; null == f && ((e = e.parentNode), e !== l); )
            (f = e.nextSibling),
              1 == e.nodeType && b.end(e.nodeName.toLowerCase());
        e = f;
      }
      for (; (e = l.firstChild); ) l.removeChild(e);
    }
    function h(a) {
      for (var b = {}, c = 0, d = a.length; d > c; c++) {
        var e = a[c];
        b[e.name] = e.value;
      }
      return b;
    }
    function i(a) {
      return a
        .replace(/&/g, "&amp;")
        .replace(n, function (a) {
          var b = a.charCodeAt(0),
            c = a.charCodeAt(1);
          return "&#" + (1024 * (b - 55296) + (c - 56320) + 65536) + ";";
        })
        .replace(o, function (a) {
          return "&#" + a.charCodeAt(0) + ";";
        })
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    }
    function j(a, c) {
      var d = !1,
        e = b.bind(a, a.push);
      return {
        start: function (a, f) {
          (a = b.lowercase(a)),
            !d && w[a] && (d = a),
            d ||
              x[a] !== !0 ||
              (e("<"),
              e(a),
              b.forEach(f, function (d, f) {
                var g = b.lowercase(f),
                  h = ("img" === a && "src" === g) || "background" === g;
                B[g] !== !0 ||
                  (y[g] === !0 && !c(d, h)) ||
                  (e(" "), e(f), e('="'), e(i(d)), e('"'));
              }),
              e(">"));
        },
        end: function (a) {
          (a = b.lowercase(a)),
            d || x[a] !== !0 || p[a] === !0 || (e("</"), e(a), e(">")),
            a == d && (d = !1);
        },
        chars: function (a) {
          d || e(i(a));
        },
      };
    }
    function k(a) {
      if (a.nodeType === Node.ELEMENT_NODE)
        for (var b = a.attributes, c = 0, d = b.length; d > c; c++) {
          var e = b[c],
            f = e.name.toLowerCase();
          ("xmlns:ns1" === f || 0 === f.indexOf("ns1:")) &&
            (a.removeAttributeNode(e), c--, d--);
        }
      var g = a.firstChild;
      g && k(g), (g = a.nextSibling), g && k(g);
    }
    var l,
      m = b.$$minErr("$sanitize"),
      n = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
      o = /([^\#-~ |!])/g,
      p = f("area,br,col,hr,img,wbr"),
      q = f("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
      r = f("rp,rt"),
      s = b.extend({}, r, q),
      t = b.extend(
        {},
        q,
        f(
          "address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul"
        )
      ),
      u = b.extend(
        {},
        r,
        f(
          "a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var"
        )
      ),
      v = f(
        "circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"
      ),
      w = f("script,style"),
      x = b.extend({}, p, t, u, s),
      y = f("background,cite,href,longdesc,src,xlink:href"),
      z = f(
        "abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"
      ),
      A = f(
        "accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",
        !0
      ),
      B = b.extend({}, y, A, z);
    !(function (a) {
      var b;
      if (!a.document || !a.document.implementation)
        throw m("noinert", "Can't create an inert html document");
      b = a.document.implementation.createHTMLDocument("inert");
      var c = b.documentElement || b.getDocumentElement(),
        d = c.getElementsByTagName("body");
      if (1 === d.length) l = d[0];
      else {
        var e = b.createElement("html");
        (l = b.createElement("body")), e.appendChild(l), b.appendChild(e);
      }
    })(a),
      b.module("ngSanitize", []).provider("$sanitize", d),
      b.module("ngSanitize").filter("linky", [
        "$sanitize",
        function (a) {
          var c =
              /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,
            d = /^mailto:/i,
            f = b.$$minErr("linky"),
            g = b.isString;
          return function (h, i, j) {
            function k(a) {
              a && q.push(e(a));
            }
            function l(a, c) {
              var d;
              if ((q.push("<a "), b.isFunction(j) && (j = j(a)), b.isObject(j)))
                for (d in j) q.push(d + '="' + j[d] + '" ');
              else j = {};
              !b.isDefined(i) || "target" in j || q.push('target="', i, '" '),
                q.push('href="', a.replace(/"/g, "&quot;"), '">'),
                k(c),
                q.push("</a>");
            }
            if (null == h || "" === h) return h;
            if (!g(h))
              throw f("notstring", "Expected string but received: {0}", h);
            for (var m, n, o, p = h, q = []; (m = p.match(c)); )
              (n = m[0]),
                m[2] || m[4] || (n = (m[3] ? "http://" : "mailto:") + n),
                (o = m.index),
                k(p.substr(0, o)),
                l(n, m[0].replace(d, "")),
                (p = p.substring(o + m[0].length));
            return k(p), a(q.join(""));
          };
        },
      ]);
  })(window, window.angular),
  (function (a, b, c) {
    "use strict";
    function d(a) {
      return b.lowercase(a.nodeName || (a[0] && a[0].nodeName));
    }
    function e(a, c) {
      var d = !1,
        e = !1;
      (this.ngClickOverrideEnabled = function (f) {
        return b.isDefined(f)
          ? (f &&
              !e &&
              ((e = !0),
              (h.$$moduleName = "ngTouch"),
              c.directive("ngClick", h),
              a.decorator("ngClickDirective", [
                "$delegate",
                function (a) {
                  if (d) a.shift();
                  else
                    for (var b = a.length - 1; b >= 0; ) {
                      if ("ngTouch" === a[b].$$moduleName) {
                        a.splice(b, 1);
                        break;
                      }
                      b--;
                    }
                  return a;
                },
              ])),
            (d = f),
            this)
          : d;
      }),
        (this.$get = function () {
          return {
            ngClickOverrideEnabled: function () {
              return d;
            },
          };
        });
    }
    function f(a, c, d) {
      g.directive(a, [
        "$parse",
        "$swipe",
        function (e, f) {
          var g = 75,
            h = 0.3,
            i = 30;
          return function (j, k, l) {
            function m(a) {
              if (!n) return !1;
              var b = Math.abs(a.y - n.y),
                d = (a.x - n.x) * c;
              return o && g > b && d > 0 && d > i && h > b / d;
            }
            var n,
              o,
              p = e(l[a]),
              q = ["touch"];
            b.isDefined(l.ngSwipeDisableMouse) || q.push("mouse"),
              f.bind(
                k,
                {
                  start: function (a, b) {
                    (n = a), (o = !0);
                  },
                  cancel: function (a) {
                    o = !1;
                  },
                  end: function (a, b) {
                    m(a) &&
                      j.$apply(function () {
                        k.triggerHandler(d), p(j, { $event: b });
                      });
                  },
                },
                q
              );
          };
        },
      ]);
    }
    var g = b.module("ngTouch", []);
    g.provider("$touch", e),
      (e.$inject = ["$provide", "$compileProvider"]),
      g.factory("$swipe", [
        function () {
          function a(a) {
            var b = a.originalEvent || a,
              c = b.touches && b.touches.length ? b.touches : [b],
              d = (b.changedTouches && b.changedTouches[0]) || c[0];
            return { x: d.clientX, y: d.clientY };
          }
          function c(a, c) {
            var d = [];
            return (
              b.forEach(a, function (a) {
                var b = e[a][c];
                b && d.push(b);
              }),
              d.join(" ")
            );
          }
          var d = 10,
            e = {
              mouse: { start: "mousedown", move: "mousemove", end: "mouseup" },
              touch: {
                start: "touchstart",
                move: "touchmove",
                end: "touchend",
                cancel: "touchcancel",
              },
            };
          return {
            bind: function (b, e, f) {
              var g,
                h,
                i,
                j,
                k = !1;
              (f = f || ["mouse", "touch"]),
                b.on(c(f, "start"), function (b) {
                  (i = a(b)),
                    (k = !0),
                    (g = 0),
                    (h = 0),
                    (j = i),
                    e.start && e.start(i, b);
                });
              var l = c(f, "cancel");
              l &&
                b.on(l, function (a) {
                  (k = !1), e.cancel && e.cancel(a);
                }),
                b.on(c(f, "move"), function (b) {
                  if (k && i) {
                    var c = a(b);
                    if (
                      ((g += Math.abs(c.x - j.x)),
                      (h += Math.abs(c.y - j.y)),
                      (j = c),
                      !(d > g && d > h))
                    )
                      return h > g
                        ? ((k = !1), void (e.cancel && e.cancel(b)))
                        : (b.preventDefault(), void (e.move && e.move(c, b)));
                  }
                }),
                b.on(c(f, "end"), function (b) {
                  k && ((k = !1), e.end && e.end(a(b), b));
                });
            },
          };
        },
      ]);
    var h = [
      "$parse",
      "$timeout",
      "$rootElement",
      function (a, c, e) {
        function f(a, b, c, d) {
          return Math.abs(a - c) < q && Math.abs(b - d) < q;
        }
        function g(a, b, c) {
          for (var d = 0; d < a.length; d += 2)
            if (f(a[d], a[d + 1], b, c)) return a.splice(d, d + 2), !0;
          return !1;
        }
        function h(a) {
          if (!(Date.now() - k > p)) {
            var b = a.touches && a.touches.length ? a.touches : [a],
              c = b[0].clientX,
              e = b[0].clientY;
            (1 > c && 1 > e) ||
              (m && m[0] === c && m[1] === e) ||
              (m && (m = null),
              "label" === d(a.target) && (m = [c, e]),
              g(l, c, e) ||
                (a.stopPropagation(),
                a.preventDefault(),
                a.target && a.target.blur && a.target.blur()));
          }
        }
        function i(a) {
          var b = a.touches && a.touches.length ? a.touches : [a],
            d = b[0].clientX,
            e = b[0].clientY;
          l.push(d, e),
            c(
              function () {
                for (var a = 0; a < l.length; a += 2)
                  if (l[a] == d && l[a + 1] == e)
                    return void l.splice(a, a + 2);
              },
              p,
              !1
            );
        }
        function j(a, b) {
          l ||
            (e[0].addEventListener("click", h, !0),
            e[0].addEventListener("touchstart", i, !0),
            (l = [])),
            (k = Date.now()),
            g(l, a, b);
        }
        var k,
          l,
          m,
          n = 750,
          o = 12,
          p = 2500,
          q = 25,
          r = "ng-click-active";
        return function (c, d, e) {
          function f() {
            (m = !1), d.removeClass(r);
          }
          var g,
            h,
            i,
            k,
            l = a(e.ngClick),
            m = !1;
          d.on("touchstart", function (a) {
            (m = !0),
              (g = a.target ? a.target : a.srcElement),
              3 == g.nodeType && (g = g.parentNode),
              d.addClass(r),
              (h = Date.now());
            var b = a.originalEvent || a,
              c = b.touches && b.touches.length ? b.touches : [b],
              e = c[0];
            (i = e.clientX), (k = e.clientY);
          }),
            d.on("touchcancel", function (a) {
              f();
            }),
            d.on("touchend", function (a) {
              var c = Date.now() - h,
                l = a.originalEvent || a,
                p =
                  l.changedTouches && l.changedTouches.length
                    ? l.changedTouches
                    : l.touches && l.touches.length
                    ? l.touches
                    : [l],
                q = p[0],
                r = q.clientX,
                s = q.clientY,
                t = Math.sqrt(Math.pow(r - i, 2) + Math.pow(s - k, 2));
              m &&
                n > c &&
                o > t &&
                (j(r, s),
                g && g.blur(),
                (b.isDefined(e.disabled) && e.disabled !== !1) ||
                  d.triggerHandler("click", [a])),
                f();
            }),
            (d.onclick = function (a) {}),
            d.on("click", function (a, b) {
              c.$apply(function () {
                l(c, { $event: b || a });
              });
            }),
            d.on("mousedown", function (a) {
              d.addClass(r);
            }),
            d.on("mousemove mouseup", function (a) {
              d.removeClass(r);
            });
        };
      },
    ];
    f("ngSwipeLeft", -1, "swipeleft"), f("ngSwipeRight", 1, "swiperight");
  })(window, window.angular);
