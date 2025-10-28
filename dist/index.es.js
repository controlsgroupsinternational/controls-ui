import * as C from "react";
import I, { useCallback as ve, forwardRef as L, Children as Ur, isValidElement as Oa, createElement as $, cloneElement as sc, Fragment as vn, createContext as Wt, useContext as ct, useState as Z, useEffect as J, useLayoutEffect as ds, useRef as q, useMemo as Ut, PureComponent as ic, useImperativeHandle as av, useReducer as cd } from "react";
import * as Sw from "react-dom";
import sv, { flushSync as iv, createPortal as cv } from "react-dom";
var mt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _n(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Xl = { exports: {} }, da = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vp;
function Nw() {
  if (vp)
    return da;
  vp = 1;
  var e = I, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(i, c, l) {
    var u, f = {}, p = null, h = null;
    l !== void 0 && (p = "" + l), c.key !== void 0 && (p = "" + c.key), c.ref !== void 0 && (h = c.ref);
    for (u in c)
      r.call(c, u) && !a.hasOwnProperty(u) && (f[u] = c[u]);
    if (i && i.defaultProps)
      for (u in c = i.defaultProps, c)
        f[u] === void 0 && (f[u] = c[u]);
    return { $$typeof: t, type: i, key: p, ref: h, props: f, _owner: o.current };
  }
  return da.Fragment = n, da.jsx = s, da.jsxs = s, da;
}
var fa = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gp;
function Ew() {
  return gp || (gp = 1, process.env.NODE_ENV !== "production" && function() {
    var e = I, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), m = Symbol.iterator, v = "@@iterator";
    function g(k) {
      if (k === null || typeof k != "object")
        return null;
      var se = m && k[m] || k[v];
      return typeof se == "function" ? se : null;
    }
    var b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(k) {
      {
        for (var se = arguments.length, xe = new Array(se > 1 ? se - 1 : 0), Me = 1; Me < se; Me++)
          xe[Me - 1] = arguments[Me];
        x("error", k, xe);
      }
    }
    function x(k, se, xe) {
      {
        var Me = b.ReactDebugCurrentFrame, Ge = Me.getStackAddendum();
        Ge !== "" && (se += "%s", xe = xe.concat([Ge]));
        var nt = xe.map(function(We) {
          return String(We);
        });
        nt.unshift("Warning: " + se), Function.prototype.apply.call(console[k], console, nt);
      }
    }
    var _ = !1, w = !1, N = !1, S = !1, D = !1, P;
    P = Symbol.for("react.module.reference");
    function z(k) {
      return !!(typeof k == "string" || typeof k == "function" || k === r || k === a || D || k === o || k === l || k === u || S || k === h || _ || w || N || typeof k == "object" && k !== null && (k.$$typeof === p || k.$$typeof === f || k.$$typeof === s || k.$$typeof === i || k.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      k.$$typeof === P || k.getModuleId !== void 0));
    }
    function K(k, se, xe) {
      var Me = k.displayName;
      if (Me)
        return Me;
      var Ge = se.displayName || se.name || "";
      return Ge !== "" ? xe + "(" + Ge + ")" : xe;
    }
    function R(k) {
      return k.displayName || "Context";
    }
    function W(k) {
      if (k == null)
        return null;
      if (typeof k.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof k == "function")
        return k.displayName || k.name || null;
      if (typeof k == "string")
        return k;
      switch (k) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case l:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof k == "object")
        switch (k.$$typeof) {
          case i:
            var se = k;
            return R(se) + ".Consumer";
          case s:
            var xe = k;
            return R(xe._context) + ".Provider";
          case c:
            return K(k, k.render, "ForwardRef");
          case f:
            var Me = k.displayName || null;
            return Me !== null ? Me : W(k.type) || "Memo";
          case p: {
            var Ge = k, nt = Ge._payload, We = Ge._init;
            try {
              return W(We(nt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var V = Object.assign, E = 0, B, T, U, G, Q, oe, H;
    function le() {
    }
    le.__reactDisabledLog = !0;
    function be() {
      {
        if (E === 0) {
          B = console.log, T = console.info, U = console.warn, G = console.error, Q = console.group, oe = console.groupCollapsed, H = console.groupEnd;
          var k = {
            configurable: !0,
            enumerable: !0,
            value: le,
            writable: !0
          };
          Object.defineProperties(console, {
            info: k,
            log: k,
            warn: k,
            error: k,
            group: k,
            groupCollapsed: k,
            groupEnd: k
          });
        }
        E++;
      }
    }
    function pe() {
      {
        if (E--, E === 0) {
          var k = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: V({}, k, {
              value: B
            }),
            info: V({}, k, {
              value: T
            }),
            warn: V({}, k, {
              value: U
            }),
            error: V({}, k, {
              value: G
            }),
            group: V({}, k, {
              value: Q
            }),
            groupCollapsed: V({}, k, {
              value: oe
            }),
            groupEnd: V({}, k, {
              value: H
            })
          });
        }
        E < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ee = b.ReactCurrentDispatcher, re;
    function me(k, se, xe) {
      {
        if (re === void 0)
          try {
            throw Error();
          } catch (Ge) {
            var Me = Ge.stack.trim().match(/\n( *(at )?)/);
            re = Me && Me[1] || "";
          }
        return `
` + re + k;
      }
    }
    var _e = !1, ae;
    {
      var fe = typeof WeakMap == "function" ? WeakMap : Map;
      ae = new fe();
    }
    function A(k, se) {
      if (!k || _e)
        return "";
      {
        var xe = ae.get(k);
        if (xe !== void 0)
          return xe;
      }
      var Me;
      _e = !0;
      var Ge = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var nt;
      nt = ee.current, ee.current = null, be();
      try {
        if (se) {
          var We = function() {
            throw Error();
          };
          if (Object.defineProperty(We.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(We, []);
            } catch (Kn) {
              Me = Kn;
            }
            Reflect.construct(k, [], We);
          } else {
            try {
              We.call();
            } catch (Kn) {
              Me = Kn;
            }
            k.call(We.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Kn) {
            Me = Kn;
          }
          k();
        }
      } catch (Kn) {
        if (Kn && Me && typeof Kn.stack == "string") {
          for (var ze = Kn.stack.split(`
`), jt = Me.stack.split(`
`), gt = ze.length - 1, wt = jt.length - 1; gt >= 1 && wt >= 0 && ze[gt] !== jt[wt]; )
            wt--;
          for (; gt >= 1 && wt >= 0; gt--, wt--)
            if (ze[gt] !== jt[wt]) {
              if (gt !== 1 || wt !== 1)
                do
                  if (gt--, wt--, wt < 0 || ze[gt] !== jt[wt]) {
                    var Qt = `
` + ze[gt].replace(" at new ", " at ");
                    return k.displayName && Qt.includes("<anonymous>") && (Qt = Qt.replace("<anonymous>", k.displayName)), typeof k == "function" && ae.set(k, Qt), Qt;
                  }
                while (gt >= 1 && wt >= 0);
              break;
            }
        }
      } finally {
        _e = !1, ee.current = nt, pe(), Error.prepareStackTrace = Ge;
      }
      var bo = k ? k.displayName || k.name : "", mp = bo ? me(bo) : "";
      return typeof k == "function" && ae.set(k, mp), mp;
    }
    function ne(k, se, xe) {
      return A(k, !1);
    }
    function ye(k) {
      var se = k.prototype;
      return !!(se && se.isReactComponent);
    }
    function Pe(k, se, xe) {
      if (k == null)
        return "";
      if (typeof k == "function")
        return A(k, ye(k));
      if (typeof k == "string")
        return me(k);
      switch (k) {
        case l:
          return me("Suspense");
        case u:
          return me("SuspenseList");
      }
      if (typeof k == "object")
        switch (k.$$typeof) {
          case c:
            return ne(k.render);
          case f:
            return Pe(k.type, se, xe);
          case p: {
            var Me = k, Ge = Me._payload, nt = Me._init;
            try {
              return Pe(nt(Ge), se, xe);
            } catch {
            }
          }
        }
      return "";
    }
    var Ie = Object.prototype.hasOwnProperty, Oe = {}, O = b.ReactDebugCurrentFrame;
    function F(k) {
      if (k) {
        var se = k._owner, xe = Pe(k.type, k._source, se ? se.type : null);
        O.setExtraStackFrame(xe);
      } else
        O.setExtraStackFrame(null);
    }
    function Y(k, se, xe, Me, Ge) {
      {
        var nt = Function.call.bind(Ie);
        for (var We in k)
          if (nt(k, We)) {
            var ze = void 0;
            try {
              if (typeof k[We] != "function") {
                var jt = Error((Me || "React class") + ": " + xe + " type `" + We + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof k[We] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw jt.name = "Invariant Violation", jt;
              }
              ze = k[We](se, We, Me, xe, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (gt) {
              ze = gt;
            }
            ze && !(ze instanceof Error) && (F(Ge), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Me || "React class", xe, We, typeof ze), F(null)), ze instanceof Error && !(ze.message in Oe) && (Oe[ze.message] = !0, F(Ge), y("Failed %s type: %s", xe, ze.message), F(null));
          }
      }
    }
    var ue = Array.isArray;
    function ce(k) {
      return ue(k);
    }
    function te(k) {
      {
        var se = typeof Symbol == "function" && Symbol.toStringTag, xe = se && k[Symbol.toStringTag] || k.constructor.name || "Object";
        return xe;
      }
    }
    function we(k) {
      try {
        return De(k), !1;
      } catch {
        return !0;
      }
    }
    function De(k) {
      return "" + k;
    }
    function Ke(k) {
      if (we(k))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", te(k)), De(k);
    }
    var et = b.ReactCurrentOwner, yt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Xt, Ce, Se;
    Se = {};
    function Be(k) {
      if (Ie.call(k, "ref")) {
        var se = Object.getOwnPropertyDescriptor(k, "ref").get;
        if (se && se.isReactWarning)
          return !1;
      }
      return k.ref !== void 0;
    }
    function Le(k) {
      if (Ie.call(k, "key")) {
        var se = Object.getOwnPropertyDescriptor(k, "key").get;
        if (se && se.isReactWarning)
          return !1;
      }
      return k.key !== void 0;
    }
    function Xe(k, se) {
      if (typeof k.ref == "string" && et.current && se && et.current.stateNode !== se) {
        var xe = W(et.current.type);
        Se[xe] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', W(et.current.type), k.ref), Se[xe] = !0);
      }
    }
    function tt(k, se) {
      {
        var xe = function() {
          Xt || (Xt = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", se));
        };
        xe.isReactWarning = !0, Object.defineProperty(k, "key", {
          get: xe,
          configurable: !0
        });
      }
    }
    function xt(k, se) {
      {
        var xe = function() {
          Ce || (Ce = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", se));
        };
        xe.isReactWarning = !0, Object.defineProperty(k, "ref", {
          get: xe,
          configurable: !0
        });
      }
    }
    var lr = function(k, se, xe, Me, Ge, nt, We) {
      var ze = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: k,
        key: se,
        ref: xe,
        props: We,
        // Record the component responsible for creating this element.
        _owner: nt
      };
      return ze._store = {}, Object.defineProperty(ze._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ze, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Me
      }), Object.defineProperty(ze, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ge
      }), Object.freeze && (Object.freeze(ze.props), Object.freeze(ze)), ze;
    };
    function an(k, se, xe, Me, Ge) {
      {
        var nt, We = {}, ze = null, jt = null;
        xe !== void 0 && (Ke(xe), ze = "" + xe), Le(se) && (Ke(se.key), ze = "" + se.key), Be(se) && (jt = se.ref, Xe(se, Ge));
        for (nt in se)
          Ie.call(se, nt) && !yt.hasOwnProperty(nt) && (We[nt] = se[nt]);
        if (k && k.defaultProps) {
          var gt = k.defaultProps;
          for (nt in gt)
            We[nt] === void 0 && (We[nt] = gt[nt]);
        }
        if (ze || jt) {
          var wt = typeof k == "function" ? k.displayName || k.name || "Unknown" : k;
          ze && tt(We, wt), jt && xt(We, wt);
        }
        return lr(k, ze, jt, Ge, Me, et.current, We);
      }
    }
    var Nt = b.ReactCurrentOwner, On = b.ReactDebugCurrentFrame;
    function Hn(k) {
      if (k) {
        var se = k._owner, xe = Pe(k.type, k._source, se ? se.type : null);
        On.setExtraStackFrame(xe);
      } else
        On.setExtraStackFrame(null);
    }
    var tl;
    tl = !1;
    function nl(k) {
      return typeof k == "object" && k !== null && k.$$typeof === t;
    }
    function up() {
      {
        if (Nt.current) {
          var k = W(Nt.current.type);
          if (k)
            return `

Check the render method of \`` + k + "`.";
        }
        return "";
      }
    }
    function gw(k) {
      return "";
    }
    var dp = {};
    function bw(k) {
      {
        var se = up();
        if (!se) {
          var xe = typeof k == "string" ? k : k.displayName || k.name;
          xe && (se = `

Check the top-level render call using <` + xe + ">.");
        }
        return se;
      }
    }
    function fp(k, se) {
      {
        if (!k._store || k._store.validated || k.key != null)
          return;
        k._store.validated = !0;
        var xe = bw(se);
        if (dp[xe])
          return;
        dp[xe] = !0;
        var Me = "";
        k && k._owner && k._owner !== Nt.current && (Me = " It was passed a child from " + W(k._owner.type) + "."), Hn(k), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', xe, Me), Hn(null);
      }
    }
    function pp(k, se) {
      {
        if (typeof k != "object")
          return;
        if (ce(k))
          for (var xe = 0; xe < k.length; xe++) {
            var Me = k[xe];
            nl(Me) && fp(Me, se);
          }
        else if (nl(k))
          k._store && (k._store.validated = !0);
        else if (k) {
          var Ge = g(k);
          if (typeof Ge == "function" && Ge !== k.entries)
            for (var nt = Ge.call(k), We; !(We = nt.next()).done; )
              nl(We.value) && fp(We.value, se);
        }
      }
    }
    function yw(k) {
      {
        var se = k.type;
        if (se == null || typeof se == "string")
          return;
        var xe;
        if (typeof se == "function")
          xe = se.propTypes;
        else if (typeof se == "object" && (se.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        se.$$typeof === f))
          xe = se.propTypes;
        else
          return;
        if (xe) {
          var Me = W(se);
          Y(xe, k.props, "prop", Me, k);
        } else if (se.PropTypes !== void 0 && !tl) {
          tl = !0;
          var Ge = W(se);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ge || "Unknown");
        }
        typeof se.getDefaultProps == "function" && !se.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function xw(k) {
      {
        for (var se = Object.keys(k.props), xe = 0; xe < se.length; xe++) {
          var Me = se[xe];
          if (Me !== "children" && Me !== "key") {
            Hn(k), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Me), Hn(null);
            break;
          }
        }
        k.ref !== null && (Hn(k), y("Invalid attribute `ref` supplied to `React.Fragment`."), Hn(null));
      }
    }
    function hp(k, se, xe, Me, Ge, nt) {
      {
        var We = z(k);
        if (!We) {
          var ze = "";
          (k === void 0 || typeof k == "object" && k !== null && Object.keys(k).length === 0) && (ze += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var jt = gw();
          jt ? ze += jt : ze += up();
          var gt;
          k === null ? gt = "null" : ce(k) ? gt = "array" : k !== void 0 && k.$$typeof === t ? (gt = "<" + (W(k.type) || "Unknown") + " />", ze = " Did you accidentally export a JSX literal instead of a component?") : gt = typeof k, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", gt, ze);
        }
        var wt = an(k, se, xe, Ge, nt);
        if (wt == null)
          return wt;
        if (We) {
          var Qt = se.children;
          if (Qt !== void 0)
            if (Me)
              if (ce(Qt)) {
                for (var bo = 0; bo < Qt.length; bo++)
                  pp(Qt[bo], k);
                Object.freeze && Object.freeze(Qt);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              pp(Qt, k);
        }
        return k === r ? xw(wt) : yw(wt), wt;
      }
    }
    function ww(k, se, xe) {
      return hp(k, se, xe, !0);
    }
    function $w(k, se, xe) {
      return hp(k, se, xe, !1);
    }
    var _w = $w, Cw = ww;
    fa.Fragment = r, fa.jsx = _w, fa.jsxs = Cw;
  }()), fa;
}
process.env.NODE_ENV === "production" ? Xl.exports = Nw() : Xl.exports = Ew();
var d = Xl.exports;
function j() {
  return j = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, j.apply(this, arguments);
}
function Pw(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function fs(...e) {
  return (t) => e.forEach(
    (n) => Pw(n, t)
  );
}
function Ee(...e) {
  return ve(fs(...e), e);
}
const gn = /* @__PURE__ */ L((e, t) => {
  const { children: n, ...r } = e, o = Ur.toArray(n), a = o.find(Ow);
  if (a) {
    const s = a.props.children, i = o.map((c) => c === a ? Ur.count(s) > 1 ? Ur.only(null) : /* @__PURE__ */ Oa(s) ? s.props.children : null : c);
    return /* @__PURE__ */ $(Ql, j({}, r, {
      ref: t
    }), /* @__PURE__ */ Oa(s) ? /* @__PURE__ */ sc(s, void 0, i) : null);
  }
  return /* @__PURE__ */ $(Ql, j({}, r, {
    ref: t
  }), n);
});
gn.displayName = "Slot";
const Ql = /* @__PURE__ */ L((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ Oa(n) ? /* @__PURE__ */ sc(n, {
    ...Tw(r, n.props),
    ref: t ? fs(t, n.ref) : n.ref
  }) : Ur.count(n) > 1 ? Ur.only(null) : null;
});
Ql.displayName = "SlotClone";
const ld = ({ children: e }) => /* @__PURE__ */ $(vn, null, e);
function Ow(e) {
  return /* @__PURE__ */ Oa(e) && e.type === ld;
}
function Tw(e, t) {
  const n = {
    ...t
  };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...i) => {
      a(...i), o(...i);
    } : o && (n[r] = o) : r === "style" ? n[r] = {
      ...o,
      ...a
    } : r === "className" && (n[r] = [
      o,
      a
    ].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...n
  };
}
function lv(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = lv(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function jw() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = lv(e)) && (r && (r += " "), r += t);
  return r;
}
const bp = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, yp = jw, Ko = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null)
    return yp(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: a } = t, s = Object.keys(o).map((l) => {
    const u = n == null ? void 0 : n[l], f = a == null ? void 0 : a[l];
    if (u === null)
      return null;
    const p = bp(u) || bp(f);
    return o[l][p];
  }), i = n && Object.entries(n).reduce((l, u) => {
    let [f, p] = u;
    return p === void 0 || (l[f] = p), l;
  }, {}), c = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((l, u) => {
    let { class: f, className: p, ...h } = u;
    return Object.entries(h).every((m) => {
      let [v, g] = m;
      return Array.isArray(g) ? g.includes({
        ...a,
        ...i
      }[v]) : {
        ...a,
        ...i
      }[v] === g;
    }) ? [
      ...l,
      f,
      p
    ] : l;
  }, []);
  return yp(e, s, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
async function qG(e, t) {
  const n = await fetch(e, t);
  if (!n.ok)
    throw new Error(n.statusText);
  return n.json();
}
const ZG = async (e = 3e3) => {
  await new Promise((t) => setTimeout(t, e));
}, rl = (e, t = 1) => {
  let n = e.replace("#", "");
  n.length === 3 && (n = `${n[0]}${n[0]}${n[1]}${n[1]}${n[2]}${n[2]}`);
  const r = parseInt(n.substring(0, 2), 16), o = parseInt(n.substring(2, 4), 16), a = parseInt(n.substring(4, 6), 16);
  return t > 1 && t <= 100 && (t = t / 100), `rgba(${r},${o},${a},${t})`;
}, XG = (e) => {
  const t = rl(e), n = rl(e, 0.1), r = rl(e, 0.3);
  return {
    colorOpacity1: t,
    colorOpacity2: n,
    colorOpacity3: r
  };
}, ol = {
  DIGITAL: [
    { label: "0412", value: "0412", image: "/images/marks/digitel.png" }
  ],
  MOVISTAR: [
    { label: "0414", value: "0414", image: "/images/marks/movistar.png" },
    { label: "0424", value: "0424", image: "/images/marks/movistar.png" }
  ],
  MOVILNET: [
    { label: "0416", value: "0416", image: "/images/marks/movilnet.png" },
    { label: "0426", value: "0426", image: "/images/marks/movilnet.png" }
  ]
}, QG = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), JG = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), eY = (e) => e.replace(/\s/g, "").replace(/(\d{3})(\d{4})/, (r, o, a) => `${o} ${a}`), tY = (e) => {
  const t = e.substring(0, 4), r = e.substring(4).replace(/(\d{3})(\d{4})/, "$1 $2");
  return { codeLine: t, number: r };
}, gi = (e) => e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1048576).toFixed(1)} MB`, nY = () => [...ol.DIGITAL, ...ol.MOVILNET, ...ol.MOVISTAR], pa = {
  VENEZUELAN: { label: "Venezolano", value: "VENEZUELAN", key: "V" },
  PASSPORT: { label: "Pasaporte", value: "PASSPORT", key: "P" },
  JURIDICAL: { label: "Jurídico", value: "JURIDICAL", key: "J" },
  FOREIGN: { label: "Extranjero", value: "FOREIGN", key: "E" },
  GOVERNMENTAL: { label: "Gubernamental", value: "GOVERNMENTAL", key: "G" }
};
function uv(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = uv(e[t])) && (r && (r += " "), r += n);
    } else
      for (n in e)
        e[n] && (r && (r += " "), r += n);
  return r;
}
function br() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = uv(e)) && (r && (r += " "), r += t);
  return r;
}
const ud = "-";
function kw(e) {
  const t = Dw(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  function o(s) {
    const i = s.split(ud);
    return i[0] === "" && i.length !== 1 && i.shift(), dv(i, t) || Mw(s);
  }
  function a(s, i) {
    const c = n[s] || [];
    return i && r[s] ? [...c, ...r[s]] : c;
  }
  return {
    getClassGroupId: o,
    getConflictingClassGroupIds: a
  };
}
function dv(e, t) {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? dv(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(ud);
  return (s = t.validators.find(({
    validator: i
  }) => i(a))) == null ? void 0 : s.classGroupId;
}
const xp = /^\[(.+)\]$/;
function Mw(e) {
  if (xp.test(e)) {
    const t = xp.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function Dw(e) {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Rw(Object.entries(e.classGroups), n).forEach(([a, s]) => {
    Jl(s, r, a, t);
  }), r;
}
function Jl(e, t, n, r) {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : wp(t, o);
      a.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (Aw(o)) {
        Jl(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([a, s]) => {
      Jl(s, wp(t, a), n, r);
    });
  });
}
function wp(e, t) {
  let n = e;
  return t.split(ud).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function Aw(e) {
  return e.isThemeGetter;
}
function Rw(e, t) {
  return t ? e.map(([n, r]) => {
    const o = r.map((a) => typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([s, i]) => [t + s, i])) : a);
    return [n, o];
  }) : e;
}
function Iw(e) {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  function o(a, s) {
    n.set(a, s), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  }
  return {
    get(a) {
      let s = n.get(a);
      if (s !== void 0)
        return s;
      if ((s = r.get(a)) !== void 0)
        return o(a, s), s;
    },
    set(a, s) {
      n.has(a) ? n.set(a, s) : o(a, s);
    }
  };
}
const fv = "!";
function Lw(e) {
  const t = e.separator, n = t.length === 1, r = t[0], o = t.length;
  return function(s) {
    const i = [];
    let c = 0, l = 0, u;
    for (let v = 0; v < s.length; v++) {
      let g = s[v];
      if (c === 0) {
        if (g === r && (n || s.slice(v, v + o) === t)) {
          i.push(s.slice(l, v)), l = v + o;
          continue;
        }
        if (g === "/") {
          u = v;
          continue;
        }
      }
      g === "[" ? c++ : g === "]" && c--;
    }
    const f = i.length === 0 ? s : s.substring(l), p = f.startsWith(fv), h = p ? f.substring(1) : f, m = u && u > l ? u - l : void 0;
    return {
      modifiers: i,
      hasImportantModifier: p,
      baseClassName: h,
      maybePostfixModifierPosition: m
    };
  };
}
function Fw(e) {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}
function Bw(e) {
  return {
    cache: Iw(e.cacheSize),
    splitModifiers: Lw(e),
    ...kw(e)
  };
}
const Vw = /\s+/;
function zw(e, t) {
  const {
    splitModifiers: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, a = /* @__PURE__ */ new Set();
  return e.trim().split(Vw).map((s) => {
    const {
      modifiers: i,
      hasImportantModifier: c,
      baseClassName: l,
      maybePostfixModifierPosition: u
    } = n(s);
    let f = r(u ? l.substring(0, u) : l), p = !!u;
    if (!f) {
      if (!u)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      if (f = r(l), !f)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      p = !1;
    }
    const h = Fw(i).join(":");
    return {
      isTailwindClass: !0,
      modifierId: c ? h + fv : h,
      classGroupId: f,
      originalClassName: s,
      hasPostfixModifier: p
    };
  }).reverse().filter((s) => {
    if (!s.isTailwindClass)
      return !0;
    const {
      modifierId: i,
      classGroupId: c,
      hasPostfixModifier: l
    } = s, u = i + c;
    return a.has(u) ? !1 : (a.add(u), o(c, l).forEach((f) => a.add(i + f)), !0);
  }).reverse().map((s) => s.originalClassName).join(" ");
}
function Ww() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = pv(t)) && (r && (r += " "), r += n);
  return r;
}
function pv(e) {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = pv(e[r])) && (n && (n += " "), n += t);
  return n;
}
function Uw(e, ...t) {
  let n, r, o, a = s;
  function s(c) {
    const l = t.reduce((u, f) => f(u), e());
    return n = Bw(l), r = n.cache.get, o = n.cache.set, a = i, i(c);
  }
  function i(c) {
    const l = r(c);
    if (l)
      return l;
    const u = zw(c, n);
    return o(c, u), u;
  }
  return function() {
    return a(Ww.apply(null, arguments));
  };
}
function at(e) {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}
const hv = /^\[(?:([a-z-]+):)?(.+)\]$/i, Hw = /^\d+\/\d+$/, Kw = /* @__PURE__ */ new Set(["px", "full", "screen"]), Gw = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Yw = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, qw = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Zw = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Xw = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function Gn(e) {
  return zr(e) || Kw.has(e) || Hw.test(e);
}
function ur(e) {
  return Go(e, "length", a$);
}
function zr(e) {
  return !!e && !Number.isNaN(Number(e));
}
function Is(e) {
  return Go(e, "number", zr);
}
function ha(e) {
  return !!e && Number.isInteger(Number(e));
}
function Qw(e) {
  return e.endsWith("%") && zr(e.slice(0, -1));
}
function Re(e) {
  return hv.test(e);
}
function dr(e) {
  return Gw.test(e);
}
const Jw = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function e$(e) {
  return Go(e, Jw, mv);
}
function t$(e) {
  return Go(e, "position", mv);
}
const n$ = /* @__PURE__ */ new Set(["image", "url"]);
function r$(e) {
  return Go(e, n$, i$);
}
function o$(e) {
  return Go(e, "", s$);
}
function ma() {
  return !0;
}
function Go(e, t, n) {
  const r = hv.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}
function a$(e) {
  return Yw.test(e) && !qw.test(e);
}
function mv() {
  return !1;
}
function s$(e) {
  return Zw.test(e);
}
function i$(e) {
  return Xw.test(e);
}
function c$() {
  const e = at("colors"), t = at("spacing"), n = at("blur"), r = at("brightness"), o = at("borderColor"), a = at("borderRadius"), s = at("borderSpacing"), i = at("borderWidth"), c = at("contrast"), l = at("grayscale"), u = at("hueRotate"), f = at("invert"), p = at("gap"), h = at("gradientColorStops"), m = at("gradientColorStopPositions"), v = at("inset"), g = at("margin"), b = at("opacity"), y = at("padding"), x = at("saturate"), _ = at("scale"), w = at("sepia"), N = at("skew"), S = at("space"), D = at("translate"), P = () => ["auto", "contain", "none"], z = () => ["auto", "hidden", "clip", "visible", "scroll"], K = () => ["auto", Re, t], R = () => [Re, t], W = () => ["", Gn, ur], V = () => ["auto", zr, Re], E = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], B = () => ["solid", "dashed", "dotted", "double", "none"], T = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], U = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], G = () => ["", "0", Re], Q = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], oe = () => [zr, Is], H = () => [zr, Re];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ma],
      spacing: [Gn, ur],
      blur: ["none", "", dr, Re],
      brightness: oe(),
      borderColor: [e],
      borderRadius: ["none", "", "full", dr, Re],
      borderSpacing: R(),
      borderWidth: W(),
      contrast: oe(),
      grayscale: G(),
      hueRotate: H(),
      invert: G(),
      gap: R(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Qw, ur],
      inset: K(),
      margin: K(),
      opacity: oe(),
      padding: R(),
      saturate: oe(),
      scale: oe(),
      sepia: G(),
      skew: H(),
      space: R(),
      translate: R()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", Re]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [dr]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": Q()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Q()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...E(), Re]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: z()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": z()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": z()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: P()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": P()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": P()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [v]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [v]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [v]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [v]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [v]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [v]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [v]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [v]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [v]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", ha, Re]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: K()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", Re]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: G()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: G()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", ha, Re]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ma]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", ha, Re]
        }, Re]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": V()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": V()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [ma]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [ha, Re]
        }, Re]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": V()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": V()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", Re]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", Re]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [p]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [p]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [p]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...U()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...U(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...U(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [y]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [y]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [y]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [y]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [y]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [y]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [y]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [y]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [y]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [g]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [g]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [g]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [g]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [g]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [g]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [g]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [g]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [g]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [S]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [S]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Re, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [Re, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [Re, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [dr]
        }, dr]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [Re, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [Re, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [Re, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [Re, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", dr, ur]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Is]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ma]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Re]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", zr, Is]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Gn, Re]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Re]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", Re]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [b]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [b]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...B(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Gn, ur]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Gn, Re]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: R()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Re]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", Re]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [b]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...E(), t$]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", e$]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, r$]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [m]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [m]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [m]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [h]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [h]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [h]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [a]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [a]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [a]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [a]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [a]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [a]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [a]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [a]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [a]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [a]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [a]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [a]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [a]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [a]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [a]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [i]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [i]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [i]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [i]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [i]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [i]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [i]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [i]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [i]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [b]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...B(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [i]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [i]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [b]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: B()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [o]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [o]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [o]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [o]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [o]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [o]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [o]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [o]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...B()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Gn, Re]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Gn, ur]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: W()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [b]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Gn, ur]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", dr, o$]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ma]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [b]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...T(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": T()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [r]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [c]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", dr, Re]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [l]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [u]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [f]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [x]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [w]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [r]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [c]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [l]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [u]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [f]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [b]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [x]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [w]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [s]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [s]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [s]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Re]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: H()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", Re]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: H()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", Re]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [_]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [_]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [_]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [ha, Re]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [D]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [D]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [N]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [N]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Re]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Re]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": R()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": R()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": R()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": R()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": R()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": R()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": R()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": R()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": R()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": R()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": R()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": R()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": R()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": R()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": R()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": R()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": R()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": R()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", Re]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Gn, ur, Is]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
const l$ = /* @__PURE__ */ Uw(c$);
function M(...e) {
  return l$(br(e));
}
const dd = ({ className: e }) => /* @__PURE__ */ d.jsx("div", { className: M(`spinner h-4 w-4 ${e}`) }), Mo = Ko(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Ve = C.forwardRef(
  ({ className: e, isLoading: t, children: n, variant: r, size: o, asChild: a = !1, ...s }, i) => {
    const c = a ? gn : "button";
    return /* @__PURE__ */ d.jsx(
      c,
      {
        className: M(Mo({ variant: r, size: o, className: e })),
        ref: i,
        ...s,
        children: t ? /* @__PURE__ */ d.jsx(dd, {}) : n
      }
    );
  }
);
Ve.displayName = "Button";
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u$ = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), vv = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var d$ = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f$ = L(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: a,
    iconNode: s,
    ...i
  }, c) => $(
    "svg",
    {
      ref: c,
      ...d$,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: vv("lucide", o),
      ...i
    },
    [
      ...s.map(([l, u]) => $(l, u)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lt = (e, t) => {
  const n = L(
    ({ className: r, ...o }, a) => $(f$, {
      ref: a,
      iconNode: t,
      className: vv(`lucide-${u$(e)}`, r),
      ...o
    })
  );
  return n.displayName = `${e}`, n;
};
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p$ = lt("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h$ = lt("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rn = lt("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ta = lt("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cc = lt("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pr = lt("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $p = lt("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eu = lt("ChevronsUpDown", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lc = lt("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m$ = lt("Dot", [
  ["circle", { cx: "12.1", cy: "12.1", r: "1", key: "18d7e5" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bi = lt("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gv = lt("Ellipsis", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ls = lt("EyeOff", [
  ["path", { d: "M9.88 9.88a3 3 0 1 0 4.24 4.24", key: "1jxqfv" }],
  [
    "path",
    {
      d: "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",
      key: "9wicm4"
    }
  ],
  [
    "path",
    { d: "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61", key: "1jreej" }
  ],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fs = lt("Eye", [
  ["path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const al = lt("ImageOff", [
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
  ["path", { d: "M10.41 10.41a2 2 0 1 1-2.83-2.83", key: "1bzlo9" }],
  ["line", { x1: "13.5", x2: "6", y1: "13.5", y2: "21", key: "1q0aeu" }],
  ["line", { x1: "18", x2: "21", y1: "12", y2: "15", key: "5mozeu" }],
  [
    "path",
    {
      d: "M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",
      key: "mmje98"
    }
  ],
  ["path", { d: "M21 15V5a2 2 0 0 0-2-2H9", key: "43el77" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fd = lt("ImagePlus", [
  ["path", { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7", key: "31hg93" }],
  ["line", { x1: "16", x2: "22", y1: "5", y2: "5", key: "ez7e4s" }],
  ["line", { x1: "19", x2: "19", y1: "2", y2: "8", key: "1gkr8c" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bv = lt("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v$ = lt("PanelLeftClose", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "m16 15-3-3 3-3", key: "14y99z" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g$ = lt("PanelLeftOpen", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "m14 9 3 3-3 3", key: "8010ee" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yv = lt("PanelLeft", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yi = lt("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xv = lt("SquarePen", [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  ["path", { d: "M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z", key: "1lpok0" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wv = lt("Trash", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b$ = lt("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uc = lt("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function He(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function Zt(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
function kt(e, t) {
  const n = He(e);
  return isNaN(t) ? Zt(e, NaN) : (t && n.setDate(n.getDate() + t), n);
}
function bn(e, t) {
  const n = He(e);
  if (isNaN(t))
    return Zt(e, NaN);
  if (!t)
    return n;
  const r = n.getDate(), o = Zt(e, n.getTime());
  o.setMonth(n.getMonth() + t + 1, 0);
  const a = o.getDate();
  return r >= a ? o : (n.setFullYear(
    o.getFullYear(),
    o.getMonth(),
    r
  ), n);
}
const pd = 6048e5, y$ = 864e5;
let x$ = {};
function ps() {
  return x$;
}
function An(e, t) {
  var i, c, l, u;
  const n = ps(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((u = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : u.weekStartsOn) ?? 0, o = He(e), a = o.getDay(), s = (a < r ? 7 : 0) + a - r;
  return o.setDate(o.getDate() - s), o.setHours(0, 0, 0, 0), o;
}
function Yr(e) {
  return An(e, { weekStartsOn: 1 });
}
function $v(e) {
  const t = He(e), n = t.getFullYear(), r = Zt(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const o = Yr(r), a = Zt(e, 0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  const s = Yr(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function Do(e) {
  const t = He(e);
  return t.setHours(0, 0, 0, 0), t;
}
function xi(e) {
  const t = He(e), n = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function jn(e, t) {
  const n = Do(e), r = Do(t), o = +n - xi(n), a = +r - xi(r);
  return Math.round((o - a) / y$);
}
function w$(e) {
  const t = $v(e), n = Zt(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), Yr(n);
}
function tu(e, t) {
  const n = t * 7;
  return kt(e, n);
}
function $$(e, t) {
  return bn(e, t * 12);
}
function _$(e) {
  let t;
  return e.forEach(function(n) {
    const r = He(n);
    (t === void 0 || t < r || isNaN(Number(r))) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function C$(e) {
  let t;
  return e.forEach((n) => {
    const r = He(n);
    (!t || t > r || isNaN(+r)) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function Vt(e, t) {
  const n = Do(e), r = Do(t);
  return +n == +r;
}
function hd(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function S$(e) {
  if (!hd(e) && typeof e != "number")
    return !1;
  const t = He(e);
  return !isNaN(Number(t));
}
function ja(e, t) {
  const n = He(e), r = He(t), o = n.getFullYear() - r.getFullYear(), a = n.getMonth() - r.getMonth();
  return o * 12 + a;
}
function N$(e, t, n) {
  const r = An(e, n), o = An(t, n), a = +r - xi(r), s = +o - xi(o);
  return Math.round((a - s) / pd);
}
function md(e) {
  const t = He(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function zt(e) {
  const t = He(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function _v(e) {
  const t = He(e), n = Zt(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function vd(e, t) {
  var i, c, l, u;
  const n = ps(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((u = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : u.weekStartsOn) ?? 0, o = He(e), a = o.getDay(), s = (a < r ? -7 : 0) + 6 - (a - r);
  return o.setDate(o.getDate() + s), o.setHours(23, 59, 59, 999), o;
}
function Cv(e) {
  return vd(e, { weekStartsOn: 1 });
}
const E$ = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, P$ = (e, t, n) => {
  let r;
  const o = E$[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function sl(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const O$ = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, T$ = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, j$ = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, k$ = {
  date: sl({
    formats: O$,
    defaultWidth: "full"
  }),
  time: sl({
    formats: T$,
    defaultWidth: "full"
  }),
  dateTime: sl({
    formats: j$,
    defaultWidth: "full"
  })
}, M$ = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, D$ = (e, t, n, r) => M$[e];
function va(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const s = e.defaultFormattingWidth || e.defaultWidth, i = n != null && n.width ? String(n.width) : s;
      o = e.formattingValues[i] || e.formattingValues[s];
    } else {
      const s = e.defaultWidth, i = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[i] || e.values[s];
    }
    const a = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[a];
  };
}
const A$ = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, R$ = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, I$ = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
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
    "Dec"
  ],
  wide: [
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
    "December"
  ]
}, L$ = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, F$ = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, B$ = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, V$ = (e, t) => {
  const n = Number(e), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, z$ = {
  ordinalNumber: V$,
  era: va({
    values: A$,
    defaultWidth: "wide"
  }),
  quarter: va({
    values: R$,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: va({
    values: I$,
    defaultWidth: "wide"
  }),
  day: va({
    values: L$,
    defaultWidth: "wide"
  }),
  dayPeriod: va({
    values: F$,
    defaultWidth: "wide",
    formattingValues: B$,
    defaultFormattingWidth: "wide"
  })
};
function ga(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const s = a[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(i) ? U$(i, (f) => f.test(s)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      W$(i, (f) => f.test(s))
    );
    let l;
    l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      n.valueCallback(l)
    ) : l;
    const u = t.slice(s.length);
    return { value: l, rest: u };
  };
}
function W$(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function U$(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function H$(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r)
      return null;
    const o = r[0], a = t.match(e.parsePattern);
    if (!a)
      return null;
    let s = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    s = n.valueCallback ? n.valueCallback(s) : s;
    const i = t.slice(o.length);
    return { value: s, rest: i };
  };
}
const K$ = /^(\d+)(th|st|nd|rd)?/i, G$ = /\d+/i, Y$ = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, q$ = {
  any: [/^b/i, /^(a|c)/i]
}, Z$ = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, X$ = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Q$ = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, J$ = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, e_ = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, t_ = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, n_ = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, r_ = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, o_ = {
  ordinalNumber: H$({
    matchPattern: K$,
    parsePattern: G$,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: ga({
    matchPatterns: Y$,
    defaultMatchWidth: "wide",
    parsePatterns: q$,
    defaultParseWidth: "any"
  }),
  quarter: ga({
    matchPatterns: Z$,
    defaultMatchWidth: "wide",
    parsePatterns: X$,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: ga({
    matchPatterns: Q$,
    defaultMatchWidth: "wide",
    parsePatterns: J$,
    defaultParseWidth: "any"
  }),
  day: ga({
    matchPatterns: e_,
    defaultMatchWidth: "wide",
    parsePatterns: t_,
    defaultParseWidth: "any"
  }),
  dayPeriod: ga({
    matchPatterns: n_,
    defaultMatchWidth: "any",
    parsePatterns: r_,
    defaultParseWidth: "any"
  })
}, Sv = {
  code: "en-US",
  formatDistance: P$,
  formatLong: k$,
  formatRelative: D$,
  localize: z$,
  match: o_,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function a_(e) {
  const t = He(e);
  return jn(t, _v(t)) + 1;
}
function Nv(e) {
  const t = He(e), n = +Yr(t) - +w$(t);
  return Math.round(n / pd) + 1;
}
function Ev(e, t) {
  var u, f, p, h;
  const n = He(e), r = n.getFullYear(), o = ps(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((f = (u = t == null ? void 0 : t.locale) == null ? void 0 : u.options) == null ? void 0 : f.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((h = (p = o.locale) == null ? void 0 : p.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, s = Zt(e, 0);
  s.setFullYear(r + 1, 0, a), s.setHours(0, 0, 0, 0);
  const i = An(s, t), c = Zt(e, 0);
  c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
  const l = An(c, t);
  return n.getTime() >= i.getTime() ? r + 1 : n.getTime() >= l.getTime() ? r : r - 1;
}
function s_(e, t) {
  var i, c, l, u;
  const n = ps(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : c.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((u = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : u.firstWeekContainsDate) ?? 1, o = Ev(e, t), a = Zt(e, 0);
  return a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), An(a, t);
}
function Pv(e, t) {
  const n = He(e), r = +An(n, t) - +s_(n, t);
  return Math.round(r / pd) + 1;
}
function Qe(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const fr = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return Qe(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : Qe(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return Qe(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return Qe(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return Qe(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return Qe(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return Qe(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return Qe(o, t.length);
  }
}, yo = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, _p = {
  // Era
  G: function(e, t, n) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, { width: "abbreviated" });
      case "GGGGG":
        return n.era(r, { width: "narrow" });
      case "GGGG":
      default:
        return n.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, n) {
    if (t === "yo") {
      const r = e.getFullYear(), o = r > 0 ? r : 1 - r;
      return n.ordinalNumber(o, { unit: "year" });
    }
    return fr.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = Ev(e, r), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const s = a % 100;
      return Qe(s, 2);
    }
    return t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : Qe(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = $v(e);
    return Qe(n, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const n = e.getFullYear();
    return Qe(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(r);
      case "QQ":
        return Qe(r, 2);
      case "Qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "q":
        return String(r);
      case "qq":
        return Qe(r, 2);
      case "qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return fr.M(e, t);
      case "Mo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return n.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "L":
        return String(r + 1);
      case "LL":
        return Qe(r + 1, 2);
      case "Lo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, r) {
    const o = Pv(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : Qe(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Nv(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : Qe(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : fr.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = a_(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : Qe(r, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const r = e.getDay();
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, n, r) {
    const o = e.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(a);
      case "ee":
        return Qe(a, 2);
      case "eo":
        return n.ordinalNumber(a, { unit: "day" });
      case "eee":
        return n.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return n.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return n.day(o, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return n.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, r) {
    const o = e.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(a);
      case "cc":
        return Qe(a, t.length);
      case "co":
        return n.ordinalNumber(a, { unit: "day" });
      case "ccc":
        return n.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return n.day(o, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return n.day(o, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return n.day(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const r = e.getDay(), o = r === 0 ? 7 : r;
    switch (t) {
      case "i":
        return String(o);
      case "ii":
        return Qe(o, t.length);
      case "io":
        return n.ordinalNumber(o, { unit: "day" });
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, n) {
    const o = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r === 12 ? o = yo.noon : r === 0 ? o = yo.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r >= 17 ? o = yo.evening : r >= 12 ? o = yo.afternoon : r >= 4 ? o = yo.morning : o = yo.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, n) {
    if (t === "ho") {
      let r = e.getHours() % 12;
      return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
    }
    return fr.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : fr.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : Qe(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : Qe(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : fr.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : fr.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return fr.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return Sp(r);
      case "XXXX":
      case "XX":
        return Lr(r);
      case "XXXXX":
      case "XXX":
      default:
        return Lr(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return Sp(r);
      case "xxxx":
      case "xx":
        return Lr(r);
      case "xxxxx":
      case "xxx":
      default:
        return Lr(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Cp(r, ":");
      case "OOOO":
      default:
        return "GMT" + Lr(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Cp(r, ":");
      case "zzzz":
      default:
        return "GMT" + Lr(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(e.getTime() / 1e3);
    return Qe(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    const r = e.getTime();
    return Qe(r, t.length);
  }
};
function Cp(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? n + String(o) : n + String(o) + t + Qe(a, 2);
}
function Sp(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Qe(Math.abs(e) / 60, 2) : Lr(e, t);
}
function Lr(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Qe(Math.trunc(r / 60), 2), a = Qe(r % 60, 2);
  return n + o + t + a;
}
const Np = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, Ov = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, i_ = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return Np(e, t);
  let a;
  switch (r) {
    case "P":
      a = t.dateTime({ width: "short" });
      break;
    case "PP":
      a = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      a = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      a = t.dateTime({ width: "full" });
      break;
  }
  return a.replace("{{date}}", Np(r, t)).replace("{{time}}", Ov(o, t));
}, c_ = {
  p: Ov,
  P: i_
}, l_ = /^D+$/, u_ = /^Y+$/, d_ = ["D", "DD", "YY", "YYYY"];
function f_(e) {
  return l_.test(e);
}
function p_(e) {
  return u_.test(e);
}
function h_(e, t, n) {
  const r = m_(e, t, n);
  if (console.warn(r), d_.includes(e))
    throw new RangeError(r);
}
function m_(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const v_ = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, g_ = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, b_ = /^'([^]*?)'?$/, y_ = /''/g, x_ = /[a-zA-Z]/;
function oo(e, t, n) {
  var u, f, p, h, m, v, g, b;
  const r = ps(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? Sv, a = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((f = (u = n == null ? void 0 : n.locale) == null ? void 0 : u.options) == null ? void 0 : f.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((h = (p = r.locale) == null ? void 0 : p.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, s = (n == null ? void 0 : n.weekStartsOn) ?? ((v = (m = n == null ? void 0 : n.locale) == null ? void 0 : m.options) == null ? void 0 : v.weekStartsOn) ?? r.weekStartsOn ?? ((b = (g = r.locale) == null ? void 0 : g.options) == null ? void 0 : b.weekStartsOn) ?? 0, i = He(e);
  if (!S$(i))
    throw new RangeError("Invalid time value");
  let c = t.match(g_).map((y) => {
    const x = y[0];
    if (x === "p" || x === "P") {
      const _ = c_[x];
      return _(y, o.formatLong);
    }
    return y;
  }).join("").match(v_).map((y) => {
    if (y === "''")
      return { isToken: !1, value: "'" };
    const x = y[0];
    if (x === "'")
      return { isToken: !1, value: w_(y) };
    if (_p[x])
      return { isToken: !0, value: y };
    if (x.match(x_))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + x + "`"
      );
    return { isToken: !1, value: y };
  });
  o.localize.preprocessor && (c = o.localize.preprocessor(i, c));
  const l = {
    firstWeekContainsDate: a,
    weekStartsOn: s,
    locale: o
  };
  return c.map((y) => {
    if (!y.isToken)
      return y.value;
    const x = y.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && p_(x) || !(n != null && n.useAdditionalDayOfYearTokens) && f_(x)) && h_(x, t, String(e));
    const _ = _p[x[0]];
    return _(i, x, o.localize, l);
  }).join("");
}
function w_(e) {
  const t = e.match(b_);
  return t ? t[1].replace(y_, "'") : e;
}
function $_(e) {
  const t = He(e), n = t.getFullYear(), r = t.getMonth(), o = Zt(e, 0);
  return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function __(e) {
  return Math.trunc(+He(e) / 1e3);
}
function C_(e) {
  const t = He(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function S_(e, t) {
  return N$(
    C_(e),
    zt(e),
    t
  ) + 1;
}
function nu(e, t) {
  const n = He(e), r = He(t);
  return n.getTime() > r.getTime();
}
function Tv(e, t) {
  const n = He(e), r = He(t);
  return +n < +r;
}
function gd(e, t) {
  const n = He(e), r = He(t);
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function N_(e, t) {
  const n = He(e), r = He(t);
  return n.getFullYear() === r.getFullYear();
}
function il(e, t) {
  return kt(e, -t);
}
function cl(e, t) {
  const n = He(e), r = n.getFullYear(), o = n.getDate(), a = Zt(e, 0);
  a.setFullYear(r, t, 15), a.setHours(0, 0, 0, 0);
  const s = $_(a);
  return n.setMonth(t, Math.min(o, s)), n;
}
function Ep(e, t) {
  const n = He(e);
  return isNaN(+n) ? Zt(e, NaN) : (n.setFullYear(t), n);
}
var je = function() {
  return je = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, je.apply(this, arguments);
};
function E_(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function jv(e, t, n) {
  for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function hs(e) {
  return e.mode === "multiple";
}
function ms(e) {
  return e.mode === "range";
}
function dc(e) {
  return e.mode === "single";
}
var P_ = {
  root: "rdp",
  multiple_months: "rdp-multiple_months",
  with_weeknumber: "rdp-with_weeknumber",
  vhidden: "rdp-vhidden",
  button_reset: "rdp-button_reset",
  button: "rdp-button",
  caption: "rdp-caption",
  caption_start: "rdp-caption_start",
  caption_end: "rdp-caption_end",
  caption_between: "rdp-caption_between",
  caption_label: "rdp-caption_label",
  caption_dropdowns: "rdp-caption_dropdowns",
  dropdown: "rdp-dropdown",
  dropdown_month: "rdp-dropdown_month",
  dropdown_year: "rdp-dropdown_year",
  dropdown_icon: "rdp-dropdown_icon",
  months: "rdp-months",
  month: "rdp-month",
  table: "rdp-table",
  tbody: "rdp-tbody",
  tfoot: "rdp-tfoot",
  head: "rdp-head",
  head_row: "rdp-head_row",
  head_cell: "rdp-head_cell",
  nav: "rdp-nav",
  nav_button: "rdp-nav_button",
  nav_button_previous: "rdp-nav_button_previous",
  nav_button_next: "rdp-nav_button_next",
  nav_icon: "rdp-nav_icon",
  row: "rdp-row",
  weeknumber: "rdp-weeknumber",
  cell: "rdp-cell",
  day: "rdp-day",
  day_today: "rdp-day_today",
  day_outside: "rdp-day_outside",
  day_selected: "rdp-day_selected",
  day_disabled: "rdp-day_disabled",
  day_hidden: "rdp-day_hidden",
  day_range_start: "rdp-day_range_start",
  day_range_end: "rdp-day_range_end",
  day_range_middle: "rdp-day_range_middle"
};
function O_(e, t) {
  return oo(e, "LLLL y", t);
}
function T_(e, t) {
  return oo(e, "d", t);
}
function j_(e, t) {
  return oo(e, "LLLL", t);
}
function k_(e) {
  return "".concat(e);
}
function M_(e, t) {
  return oo(e, "cccccc", t);
}
function D_(e, t) {
  return oo(e, "yyyy", t);
}
var A_ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: O_,
  formatDay: T_,
  formatMonthCaption: j_,
  formatWeekNumber: k_,
  formatWeekdayName: M_,
  formatYearCaption: D_
}), R_ = function(e, t, n) {
  return oo(e, "do MMMM (EEEE)", n);
}, I_ = function() {
  return "Month: ";
}, L_ = function() {
  return "Go to next month";
}, F_ = function() {
  return "Go to previous month";
}, B_ = function(e, t) {
  return oo(e, "cccc", t);
}, V_ = function(e) {
  return "Week n. ".concat(e);
}, z_ = function() {
  return "Year: ";
}, W_ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: R_,
  labelMonthDropdown: I_,
  labelNext: L_,
  labelPrevious: F_,
  labelWeekNumber: V_,
  labelWeekday: B_,
  labelYearDropdown: z_
});
function U_() {
  var e = "buttons", t = P_, n = Sv, r = {}, o = {}, a = 1, s = {}, i = /* @__PURE__ */ new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: A_,
    labels: W_,
    locale: n,
    modifiersClassNames: r,
    modifiers: o,
    numberOfMonths: a,
    styles: s,
    today: i,
    mode: "default"
  };
}
function H_(e) {
  var t = e.fromYear, n = e.toYear, r = e.fromMonth, o = e.toMonth, a = e.fromDate, s = e.toDate;
  return r ? a = zt(r) : t && (a = new Date(t, 0, 1)), o ? s = md(o) : n && (s = new Date(n, 11, 31)), {
    fromDate: a ? Do(a) : void 0,
    toDate: s ? Do(s) : void 0
  };
}
var kv = Wt(void 0);
function K_(e) {
  var t, n = e.initialProps, r = U_(), o = H_(n), a = o.fromDate, s = o.toDate, i = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
  i !== "buttons" && (!a || !s) && (i = "buttons");
  var c;
  (dc(n) || hs(n) || ms(n)) && (c = n.onSelect);
  var l = je(je(je({}, r), n), { captionLayout: i, classNames: je(je({}, r.classNames), n.classNames), components: je({}, n.components), formatters: je(je({}, r.formatters), n.formatters), fromDate: a, labels: je(je({}, r.labels), n.labels), mode: n.mode || r.mode, modifiers: je(je({}, r.modifiers), n.modifiers), modifiersClassNames: je(je({}, r.modifiersClassNames), n.modifiersClassNames), onSelect: c, styles: je(je({}, r.styles), n.styles), toDate: s });
  return d.jsx(kv.Provider, { value: l, children: e.children });
}
function ot() {
  var e = ct(kv);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function Mv(e) {
  var t = ot(), n = t.locale, r = t.classNames, o = t.styles, a = t.formatters.formatCaption;
  return d.jsx("div", { className: r.caption_label, style: o.caption_label, "aria-live": "polite", role: "presentation", id: e.id, children: a(e.displayMonth, { locale: n }) });
}
function G_(e) {
  return d.jsx("svg", je({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e, { children: d.jsx("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function Dv(e) {
  var t, n, r = e.onChange, o = e.value, a = e.children, s = e.caption, i = e.className, c = e.style, l = ot(), u = (n = (t = l.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : G_;
  return d.jsxs("div", { className: i, style: c, children: [d.jsx("span", { className: l.classNames.vhidden, children: e["aria-label"] }), d.jsx("select", { name: e.name, "aria-label": e["aria-label"], className: l.classNames.dropdown, style: l.styles.dropdown, value: o, onChange: r, children: a }), d.jsxs("div", { className: l.classNames.caption_label, style: l.styles.caption_label, "aria-hidden": "true", children: [s, d.jsx(u, { className: l.classNames.dropdown_icon, style: l.styles.dropdown_icon })] })] });
}
function Y_(e) {
  var t, n = ot(), r = n.fromDate, o = n.toDate, a = n.styles, s = n.locale, i = n.formatters.formatMonthCaption, c = n.classNames, l = n.components, u = n.labels.labelMonthDropdown;
  if (!r)
    return d.jsx(d.Fragment, {});
  if (!o)
    return d.jsx(d.Fragment, {});
  var f = [];
  if (N_(r, o))
    for (var p = zt(r), h = r.getMonth(); h <= o.getMonth(); h++)
      f.push(cl(p, h));
  else
    for (var p = zt(/* @__PURE__ */ new Date()), h = 0; h <= 11; h++)
      f.push(cl(p, h));
  var m = function(g) {
    var b = Number(g.target.value), y = cl(zt(e.displayMonth), b);
    e.onChange(y);
  }, v = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : Dv;
  return d.jsx(v, { name: "months", "aria-label": u(), className: c.dropdown_month, style: a.dropdown_month, onChange: m, value: e.displayMonth.getMonth(), caption: i(e.displayMonth, { locale: s }), children: f.map(function(g) {
    return d.jsx("option", { value: g.getMonth(), children: i(g, { locale: s }) }, g.getMonth());
  }) });
}
function q_(e) {
  var t, n = e.displayMonth, r = ot(), o = r.fromDate, a = r.toDate, s = r.locale, i = r.styles, c = r.classNames, l = r.components, u = r.formatters.formatYearCaption, f = r.labels.labelYearDropdown, p = [];
  if (!o)
    return d.jsx(d.Fragment, {});
  if (!a)
    return d.jsx(d.Fragment, {});
  for (var h = o.getFullYear(), m = a.getFullYear(), v = h; v <= m; v++)
    p.push(Ep(_v(/* @__PURE__ */ new Date()), v));
  var g = function(y) {
    var x = Ep(zt(n), Number(y.target.value));
    e.onChange(x);
  }, b = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : Dv;
  return d.jsx(b, { name: "years", "aria-label": f(), className: c.dropdown_year, style: i.dropdown_year, onChange: g, value: n.getFullYear(), caption: u(n, { locale: s }), children: p.map(function(y) {
    return d.jsx("option", { value: y.getFullYear(), children: u(y, { locale: s }) }, y.getFullYear());
  }) });
}
function Z_(e, t) {
  var n = Z(e), r = n[0], o = n[1], a = t === void 0 ? r : t;
  return [a, o];
}
function X_(e) {
  var t = e.month, n = e.defaultMonth, r = e.today, o = t || n || r || /* @__PURE__ */ new Date(), a = e.toDate, s = e.fromDate, i = e.numberOfMonths, c = i === void 0 ? 1 : i;
  if (a && ja(a, o) < 0) {
    var l = -1 * (c - 1);
    o = bn(a, l);
  }
  return s && ja(o, s) < 0 && (o = s), zt(o);
}
function Q_() {
  var e = ot(), t = X_(e), n = Z_(t, e.month), r = n[0], o = n[1], a = function(s) {
    var i;
    if (!e.disableNavigation) {
      var c = zt(s);
      o(c), (i = e.onMonthChange) === null || i === void 0 || i.call(e, c);
    }
  };
  return [r, a];
}
function J_(e, t) {
  for (var n = t.reverseMonths, r = t.numberOfMonths, o = zt(e), a = zt(bn(o, r)), s = ja(a, o), i = [], c = 0; c < s; c++) {
    var l = bn(o, c);
    i.push(l);
  }
  return n && (i = i.reverse()), i;
}
function e2(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, i = zt(e);
    if (!n)
      return bn(i, s);
    var c = ja(n, e);
    if (!(c < a))
      return bn(i, s);
  }
}
function t2(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, i = zt(e);
    if (!n)
      return bn(i, -s);
    var c = ja(i, n);
    if (!(c <= 0))
      return bn(i, -s);
  }
}
var Av = Wt(void 0);
function n2(e) {
  var t = ot(), n = Q_(), r = n[0], o = n[1], a = J_(r, t), s = e2(r, t), i = t2(r, t), c = function(f) {
    return a.some(function(p) {
      return gd(f, p);
    });
  }, l = function(f, p) {
    c(f) || (p && Tv(f, p) ? o(bn(f, 1 + t.numberOfMonths * -1)) : o(f));
  }, u = {
    currentMonth: r,
    displayMonths: a,
    goToMonth: o,
    goToDate: l,
    previousMonth: i,
    nextMonth: s,
    isDateDisplayed: c
  };
  return d.jsx(Av.Provider, { value: u, children: e.children });
}
function vs() {
  var e = ct(Av);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function Pp(e) {
  var t, n = ot(), r = n.classNames, o = n.styles, a = n.components, s = vs().goToMonth, i = function(u) {
    s(bn(u, e.displayIndex ? -e.displayIndex : 0));
  }, c = (t = a == null ? void 0 : a.CaptionLabel) !== null && t !== void 0 ? t : Mv, l = d.jsx(c, { id: e.id, displayMonth: e.displayMonth });
  return d.jsxs("div", { className: r.caption_dropdowns, style: o.caption_dropdowns, children: [d.jsx("div", { className: r.vhidden, children: l }), d.jsx(Y_, { onChange: i, displayMonth: e.displayMonth }), d.jsx(q_, { onChange: i, displayMonth: e.displayMonth })] });
}
function r2(e) {
  return d.jsx("svg", je({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: d.jsx("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function o2(e) {
  return d.jsx("svg", je({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: d.jsx("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" }) }));
}
var wi = L(function(e, t) {
  var n = ot(), r = n.classNames, o = n.styles, a = [r.button_reset, r.button];
  e.className && a.push(e.className);
  var s = a.join(" "), i = je(je({}, o.button_reset), o.button);
  return e.style && Object.assign(i, e.style), d.jsx("button", je({}, e, { ref: t, type: "button", className: s, style: i }));
});
function a2(e) {
  var t, n, r = ot(), o = r.dir, a = r.locale, s = r.classNames, i = r.styles, c = r.labels, l = c.labelPrevious, u = c.labelNext, f = r.components;
  if (!e.nextMonth && !e.previousMonth)
    return d.jsx(d.Fragment, {});
  var p = l(e.previousMonth, { locale: a }), h = [
    s.nav_button,
    s.nav_button_previous
  ].join(" "), m = u(e.nextMonth, { locale: a }), v = [
    s.nav_button,
    s.nav_button_next
  ].join(" "), g = (t = f == null ? void 0 : f.IconRight) !== null && t !== void 0 ? t : o2, b = (n = f == null ? void 0 : f.IconLeft) !== null && n !== void 0 ? n : r2;
  return d.jsxs("div", { className: s.nav, style: i.nav, children: [!e.hidePrevious && d.jsx(wi, { name: "previous-month", "aria-label": p, className: h, style: i.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick, children: o === "rtl" ? d.jsx(g, { className: s.nav_icon, style: i.nav_icon }) : d.jsx(b, { className: s.nav_icon, style: i.nav_icon }) }), !e.hideNext && d.jsx(wi, { name: "next-month", "aria-label": m, className: v, style: i.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick, children: o === "rtl" ? d.jsx(b, { className: s.nav_icon, style: i.nav_icon }) : d.jsx(g, { className: s.nav_icon, style: i.nav_icon }) })] });
}
function Op(e) {
  var t = ot().numberOfMonths, n = vs(), r = n.previousMonth, o = n.nextMonth, a = n.goToMonth, s = n.displayMonths, i = s.findIndex(function(m) {
    return gd(e.displayMonth, m);
  }), c = i === 0, l = i === s.length - 1, u = t > 1 && (c || !l), f = t > 1 && (l || !c), p = function() {
    r && a(r);
  }, h = function() {
    o && a(o);
  };
  return d.jsx(a2, { displayMonth: e.displayMonth, hideNext: u, hidePrevious: f, nextMonth: o, previousMonth: r, onPreviousClick: p, onNextClick: h });
}
function s2(e) {
  var t, n = ot(), r = n.classNames, o = n.disableNavigation, a = n.styles, s = n.captionLayout, i = n.components, c = (t = i == null ? void 0 : i.CaptionLabel) !== null && t !== void 0 ? t : Mv, l;
  return o ? l = d.jsx(c, { id: e.id, displayMonth: e.displayMonth }) : s === "dropdown" ? l = d.jsx(Pp, { displayMonth: e.displayMonth, id: e.id }) : s === "dropdown-buttons" ? l = d.jsxs(d.Fragment, { children: [d.jsx(Pp, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id }), d.jsx(Op, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id })] }) : l = d.jsxs(d.Fragment, { children: [d.jsx(c, { id: e.id, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), d.jsx(Op, { displayMonth: e.displayMonth, id: e.id })] }), d.jsx("div", { className: r.caption, style: a.caption, children: l });
}
function i2(e) {
  var t = ot(), n = t.footer, r = t.styles, o = t.classNames.tfoot;
  return n ? d.jsx("tfoot", { className: o, style: r.tfoot, children: d.jsx("tr", { children: d.jsx("td", { colSpan: 8, children: n }) }) }) : d.jsx(d.Fragment, {});
}
function c2(e, t, n) {
  for (var r = n ? Yr(/* @__PURE__ */ new Date()) : An(/* @__PURE__ */ new Date(), { locale: e, weekStartsOn: t }), o = [], a = 0; a < 7; a++) {
    var s = kt(r, a);
    o.push(s);
  }
  return o;
}
function l2() {
  var e = ot(), t = e.classNames, n = e.styles, r = e.showWeekNumber, o = e.locale, a = e.weekStartsOn, s = e.ISOWeek, i = e.formatters.formatWeekdayName, c = e.labels.labelWeekday, l = c2(o, a, s);
  return d.jsxs("tr", { style: n.head_row, className: t.head_row, children: [r && d.jsx("td", { style: n.head_cell, className: t.head_cell }), l.map(function(u, f) {
    return d.jsx("th", { scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": c(u, { locale: o }), children: i(u, { locale: o }) }, f);
  })] });
}
function u2() {
  var e, t = ot(), n = t.classNames, r = t.styles, o = t.components, a = (e = o == null ? void 0 : o.HeadRow) !== null && e !== void 0 ? e : l2;
  return d.jsx("thead", { style: r.head, className: n.head, children: d.jsx(a, {}) });
}
function d2(e) {
  var t = ot(), n = t.locale, r = t.formatters.formatDay;
  return d.jsx(d.Fragment, { children: r(e.date, { locale: n }) });
}
var bd = Wt(void 0);
function f2(e) {
  if (!hs(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return d.jsx(bd.Provider, { value: t, children: e.children });
  }
  return d.jsx(p2, { initialProps: e.initialProps, children: e.children });
}
function p2(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = t.min, a = t.max, s = function(l, u, f) {
    var p, h;
    (p = t.onDayClick) === null || p === void 0 || p.call(t, l, u, f);
    var m = !!(u.selected && o && (r == null ? void 0 : r.length) === o);
    if (!m) {
      var v = !!(!u.selected && a && (r == null ? void 0 : r.length) === a);
      if (!v) {
        var g = r ? jv([], r) : [];
        if (u.selected) {
          var b = g.findIndex(function(y) {
            return Vt(l, y);
          });
          g.splice(b, 1);
        } else
          g.push(l);
        (h = t.onSelect) === null || h === void 0 || h.call(t, g, l, u, f);
      }
    }
  }, i = {
    disabled: []
  };
  r && i.disabled.push(function(l) {
    var u = a && r.length > a - 1, f = r.some(function(p) {
      return Vt(p, l);
    });
    return !!(u && !f);
  });
  var c = {
    selected: r,
    onDayClick: s,
    modifiers: i
  };
  return d.jsx(bd.Provider, { value: c, children: n });
}
function yd() {
  var e = ct(bd);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function h2(e, t) {
  var n = t || {}, r = n.from, o = n.to;
  return r && o ? Vt(o, e) && Vt(r, e) ? void 0 : Vt(o, e) ? { from: o, to: void 0 } : Vt(r, e) ? void 0 : nu(r, e) ? { from: e, to: o } : { from: r, to: e } : o ? nu(e, o) ? { from: o, to: e } : { from: e, to: o } : r ? Tv(e, r) ? { from: e, to: r } : { from: r, to: e } : { from: e, to: void 0 };
}
var xd = Wt(void 0);
function m2(e) {
  if (!ms(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return d.jsx(xd.Provider, { value: t, children: e.children });
  }
  return d.jsx(v2, { initialProps: e.initialProps, children: e.children });
}
function v2(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = r || {}, a = o.from, s = o.to, i = t.min, c = t.max, l = function(h, m, v) {
    var g, b;
    (g = t.onDayClick) === null || g === void 0 || g.call(t, h, m, v);
    var y = h2(h, r);
    (b = t.onSelect) === null || b === void 0 || b.call(t, y, h, m, v);
  }, u = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (a ? (u.range_start = [a], s ? (u.range_end = [s], Vt(a, s) || (u.range_middle = [
    {
      after: a,
      before: s
    }
  ])) : u.range_end = [a]) : s && (u.range_start = [s], u.range_end = [s]), i && (a && !s && u.disabled.push({
    after: il(a, i - 1),
    before: kt(a, i - 1)
  }), a && s && u.disabled.push({
    after: a,
    before: kt(a, i - 1)
  }), !a && s && u.disabled.push({
    after: il(s, i - 1),
    before: kt(s, i - 1)
  })), c) {
    if (a && !s && (u.disabled.push({
      before: kt(a, -c + 1)
    }), u.disabled.push({
      after: kt(a, c - 1)
    })), a && s) {
      var f = jn(s, a) + 1, p = c - f;
      u.disabled.push({
        before: il(a, p)
      }), u.disabled.push({
        after: kt(s, p)
      });
    }
    !a && s && (u.disabled.push({
      before: kt(s, -c + 1)
    }), u.disabled.push({
      after: kt(s, c - 1)
    }));
  }
  return d.jsx(xd.Provider, { value: { selected: r, onDayClick: l, modifiers: u }, children: n });
}
function wd() {
  var e = ct(xd);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function ii(e) {
  return Array.isArray(e) ? jv([], e) : e !== void 0 ? [e] : [];
}
function g2(e) {
  var t = {};
  return Object.entries(e).forEach(function(n) {
    var r = n[0], o = n[1];
    t[r] = ii(o);
  }), t;
}
var yn;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(yn || (yn = {}));
var b2 = yn.Selected, Yn = yn.Disabled, y2 = yn.Hidden, x2 = yn.Today, ll = yn.RangeEnd, ul = yn.RangeMiddle, dl = yn.RangeStart, w2 = yn.Outside;
function $2(e, t, n) {
  var r, o = (r = {}, r[b2] = ii(e.selected), r[Yn] = ii(e.disabled), r[y2] = ii(e.hidden), r[x2] = [e.today], r[ll] = [], r[ul] = [], r[dl] = [], r[w2] = [], r);
  return e.fromDate && o[Yn].push({ before: e.fromDate }), e.toDate && o[Yn].push({ after: e.toDate }), hs(e) ? o[Yn] = o[Yn].concat(t.modifiers[Yn]) : ms(e) && (o[Yn] = o[Yn].concat(n.modifiers[Yn]), o[dl] = n.modifiers[dl], o[ul] = n.modifiers[ul], o[ll] = n.modifiers[ll]), o;
}
var Rv = Wt(void 0);
function _2(e) {
  var t = ot(), n = yd(), r = wd(), o = $2(t, n, r), a = g2(t.modifiers), s = je(je({}, o), a);
  return d.jsx(Rv.Provider, { value: s, children: e.children });
}
function Iv() {
  var e = ct(Rv);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function C2(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function S2(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function N2(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function E2(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function P2(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function O2(e, t) {
  var n, r = t.from, o = t.to;
  if (r && o) {
    var a = jn(o, r) < 0;
    a && (n = [o, r], r = n[0], o = n[1]);
    var s = jn(e, r) >= 0 && jn(o, e) >= 0;
    return s;
  }
  return o ? Vt(o, e) : r ? Vt(r, e) : !1;
}
function T2(e) {
  return hd(e);
}
function j2(e) {
  return Array.isArray(e) && e.every(hd);
}
function k2(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if (T2(n))
      return Vt(e, n);
    if (j2(n))
      return n.includes(e);
    if (S2(n))
      return O2(e, n);
    if (P2(n))
      return n.dayOfWeek.includes(e.getDay());
    if (C2(n)) {
      var r = jn(n.before, e), o = jn(n.after, e), a = r > 0, s = o < 0, i = nu(n.before, n.after);
      return i ? s && a : a || s;
    }
    return N2(n) ? jn(e, n.after) > 0 : E2(n) ? jn(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function $d(e, t, n) {
  var r = Object.keys(t).reduce(function(a, s) {
    var i = t[s];
    return k2(e, i) && a.push(s), a;
  }, []), o = {};
  return r.forEach(function(a) {
    return o[a] = !0;
  }), n && !gd(e, n) && (o.outside = !0), o;
}
function M2(e, t) {
  for (var n = zt(e[0]), r = md(e[e.length - 1]), o, a, s = n; s <= r; ) {
    var i = $d(s, t), c = !i.disabled && !i.hidden;
    if (!c) {
      s = kt(s, 1);
      continue;
    }
    if (i.selected)
      return s;
    i.today && !a && (a = s), o || (o = s), s = kt(s, 1);
  }
  return a || o;
}
var D2 = 365;
function Lv(e, t) {
  var n = t.moveBy, r = t.direction, o = t.context, a = t.modifiers, s = t.retry, i = s === void 0 ? { count: 0, lastFocused: e } : s, c = o.weekStartsOn, l = o.fromDate, u = o.toDate, f = o.locale, p = {
    day: kt,
    week: tu,
    month: bn,
    year: $$,
    startOfWeek: function(g) {
      return o.ISOWeek ? Yr(g) : An(g, { locale: f, weekStartsOn: c });
    },
    endOfWeek: function(g) {
      return o.ISOWeek ? Cv(g) : vd(g, { locale: f, weekStartsOn: c });
    }
  }, h = p[n](e, r === "after" ? 1 : -1);
  r === "before" && l ? h = _$([l, h]) : r === "after" && u && (h = C$([u, h]));
  var m = !0;
  if (a) {
    var v = $d(h, a);
    m = !v.disabled && !v.hidden;
  }
  return m ? h : i.count > D2 ? i.lastFocused : Lv(h, {
    moveBy: n,
    direction: r,
    context: o,
    modifiers: a,
    retry: je(je({}, i), { count: i.count + 1 })
  });
}
var Fv = Wt(void 0);
function A2(e) {
  var t = vs(), n = Iv(), r = Z(), o = r[0], a = r[1], s = Z(), i = s[0], c = s[1], l = M2(t.displayMonths, n), u = o ?? (i && t.isDateDisplayed(i)) ? i : l, f = function() {
    c(o), a(void 0);
  }, p = function(g) {
    a(g);
  }, h = ot(), m = function(g, b) {
    if (o) {
      var y = Lv(o, {
        moveBy: g,
        direction: b,
        context: h,
        modifiers: n
      });
      Vt(o, y) || (t.goToDate(y, o), p(y));
    }
  }, v = {
    focusedDay: o,
    focusTarget: u,
    blur: f,
    focus: p,
    focusDayAfter: function() {
      return m("day", "after");
    },
    focusDayBefore: function() {
      return m("day", "before");
    },
    focusWeekAfter: function() {
      return m("week", "after");
    },
    focusWeekBefore: function() {
      return m("week", "before");
    },
    focusMonthBefore: function() {
      return m("month", "before");
    },
    focusMonthAfter: function() {
      return m("month", "after");
    },
    focusYearBefore: function() {
      return m("year", "before");
    },
    focusYearAfter: function() {
      return m("year", "after");
    },
    focusStartOfWeek: function() {
      return m("startOfWeek", "before");
    },
    focusEndOfWeek: function() {
      return m("endOfWeek", "after");
    }
  };
  return d.jsx(Fv.Provider, { value: v, children: e.children });
}
function _d() {
  var e = ct(Fv);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function R2(e, t) {
  var n = Iv(), r = $d(e, n, t);
  return r;
}
var Cd = Wt(void 0);
function I2(e) {
  if (!dc(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return d.jsx(Cd.Provider, { value: t, children: e.children });
  }
  return d.jsx(L2, { initialProps: e.initialProps, children: e.children });
}
function L2(e) {
  var t = e.initialProps, n = e.children, r = function(a, s, i) {
    var c, l, u;
    if ((c = t.onDayClick) === null || c === void 0 || c.call(t, a, s, i), s.selected && !t.required) {
      (l = t.onSelect) === null || l === void 0 || l.call(t, void 0, a, s, i);
      return;
    }
    (u = t.onSelect) === null || u === void 0 || u.call(t, a, a, s, i);
  }, o = {
    selected: t.selected,
    onDayClick: r
  };
  return d.jsx(Cd.Provider, { value: o, children: n });
}
function Bv() {
  var e = ct(Cd);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function F2(e, t) {
  var n = ot(), r = Bv(), o = yd(), a = wd(), s = _d(), i = s.focusDayAfter, c = s.focusDayBefore, l = s.focusWeekAfter, u = s.focusWeekBefore, f = s.blur, p = s.focus, h = s.focusMonthBefore, m = s.focusMonthAfter, v = s.focusYearBefore, g = s.focusYearAfter, b = s.focusStartOfWeek, y = s.focusEndOfWeek, x = function(T) {
    var U, G, Q, oe;
    dc(n) ? (U = r.onDayClick) === null || U === void 0 || U.call(r, e, t, T) : hs(n) ? (G = o.onDayClick) === null || G === void 0 || G.call(o, e, t, T) : ms(n) ? (Q = a.onDayClick) === null || Q === void 0 || Q.call(a, e, t, T) : (oe = n.onDayClick) === null || oe === void 0 || oe.call(n, e, t, T);
  }, _ = function(T) {
    var U;
    p(e), (U = n.onDayFocus) === null || U === void 0 || U.call(n, e, t, T);
  }, w = function(T) {
    var U;
    f(), (U = n.onDayBlur) === null || U === void 0 || U.call(n, e, t, T);
  }, N = function(T) {
    var U;
    (U = n.onDayMouseEnter) === null || U === void 0 || U.call(n, e, t, T);
  }, S = function(T) {
    var U;
    (U = n.onDayMouseLeave) === null || U === void 0 || U.call(n, e, t, T);
  }, D = function(T) {
    var U;
    (U = n.onDayPointerEnter) === null || U === void 0 || U.call(n, e, t, T);
  }, P = function(T) {
    var U;
    (U = n.onDayPointerLeave) === null || U === void 0 || U.call(n, e, t, T);
  }, z = function(T) {
    var U;
    (U = n.onDayTouchCancel) === null || U === void 0 || U.call(n, e, t, T);
  }, K = function(T) {
    var U;
    (U = n.onDayTouchEnd) === null || U === void 0 || U.call(n, e, t, T);
  }, R = function(T) {
    var U;
    (U = n.onDayTouchMove) === null || U === void 0 || U.call(n, e, t, T);
  }, W = function(T) {
    var U;
    (U = n.onDayTouchStart) === null || U === void 0 || U.call(n, e, t, T);
  }, V = function(T) {
    var U;
    (U = n.onDayKeyUp) === null || U === void 0 || U.call(n, e, t, T);
  }, E = function(T) {
    var U;
    switch (T.key) {
      case "ArrowLeft":
        T.preventDefault(), T.stopPropagation(), n.dir === "rtl" ? i() : c();
        break;
      case "ArrowRight":
        T.preventDefault(), T.stopPropagation(), n.dir === "rtl" ? c() : i();
        break;
      case "ArrowDown":
        T.preventDefault(), T.stopPropagation(), l();
        break;
      case "ArrowUp":
        T.preventDefault(), T.stopPropagation(), u();
        break;
      case "PageUp":
        T.preventDefault(), T.stopPropagation(), T.shiftKey ? v() : h();
        break;
      case "PageDown":
        T.preventDefault(), T.stopPropagation(), T.shiftKey ? g() : m();
        break;
      case "Home":
        T.preventDefault(), T.stopPropagation(), b();
        break;
      case "End":
        T.preventDefault(), T.stopPropagation(), y();
        break;
    }
    (U = n.onDayKeyDown) === null || U === void 0 || U.call(n, e, t, T);
  }, B = {
    onClick: x,
    onFocus: _,
    onBlur: w,
    onKeyDown: E,
    onKeyUp: V,
    onMouseEnter: N,
    onMouseLeave: S,
    onPointerEnter: D,
    onPointerLeave: P,
    onTouchCancel: z,
    onTouchEnd: K,
    onTouchMove: R,
    onTouchStart: W
  };
  return B;
}
function B2() {
  var e = ot(), t = Bv(), n = yd(), r = wd(), o = dc(e) ? t.selected : hs(e) ? n.selected : ms(e) ? r.selected : void 0;
  return o;
}
function V2(e) {
  return Object.values(yn).includes(e);
}
function z2(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(r) {
    var o = e.modifiersClassNames[r];
    if (o)
      n.push(o);
    else if (V2(r)) {
      var a = e.classNames["day_".concat(r)];
      a && n.push(a);
    }
  }), n;
}
function W2(e, t) {
  var n = je({}, e.styles.day);
  return Object.keys(t).forEach(function(r) {
    var o;
    n = je(je({}, n), (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[r]);
  }), n;
}
function U2(e, t, n) {
  var r, o, a, s = ot(), i = _d(), c = R2(e, t), l = F2(e, c), u = B2(), f = !!(s.onDayClick || s.mode !== "default");
  J(function() {
    var N;
    c.outside || i.focusedDay && f && Vt(i.focusedDay, e) && ((N = n.current) === null || N === void 0 || N.focus());
  }, [
    i.focusedDay,
    e,
    n,
    f,
    c.outside
  ]);
  var p = z2(s, c).join(" "), h = W2(s, c), m = !!(c.outside && !s.showOutsideDays || c.hidden), v = (a = (o = s.components) === null || o === void 0 ? void 0 : o.DayContent) !== null && a !== void 0 ? a : d2, g = d.jsx(v, { date: e, displayMonth: t, activeModifiers: c }), b = {
    style: h,
    className: p,
    children: g,
    role: "gridcell"
  }, y = i.focusTarget && Vt(i.focusTarget, e) && !c.outside, x = i.focusedDay && Vt(i.focusedDay, e), _ = je(je(je({}, b), (r = { disabled: c.disabled, role: "gridcell" }, r["aria-selected"] = c.selected, r.tabIndex = x || y ? 0 : -1, r)), l), w = {
    isButton: f,
    isHidden: m,
    activeModifiers: c,
    selectedDays: u,
    buttonProps: _,
    divProps: b
  };
  return w;
}
function H2(e) {
  var t = q(null), n = U2(e.date, e.displayMonth, t);
  return n.isHidden ? d.jsx("div", { role: "gridcell" }) : n.isButton ? d.jsx(wi, je({ name: "day", ref: t }, n.buttonProps)) : d.jsx("div", je({}, n.divProps));
}
function K2(e) {
  var t = e.number, n = e.dates, r = ot(), o = r.onWeekNumberClick, a = r.styles, s = r.classNames, i = r.locale, c = r.labels.labelWeekNumber, l = r.formatters.formatWeekNumber, u = l(Number(t), { locale: i });
  if (!o)
    return d.jsx("span", { className: s.weeknumber, style: a.weeknumber, children: u });
  var f = c(Number(t), { locale: i }), p = function(h) {
    o(t, n, h);
  };
  return d.jsx(wi, { name: "week-number", "aria-label": f, className: s.weeknumber, style: a.weeknumber, onClick: p, children: u });
}
function G2(e) {
  var t, n, r = ot(), o = r.styles, a = r.classNames, s = r.showWeekNumber, i = r.components, c = (t = i == null ? void 0 : i.Day) !== null && t !== void 0 ? t : H2, l = (n = i == null ? void 0 : i.WeekNumber) !== null && n !== void 0 ? n : K2, u;
  return s && (u = d.jsx("td", { className: a.cell, style: o.cell, children: d.jsx(l, { number: e.weekNumber, dates: e.dates }) })), d.jsxs("tr", { className: a.row, style: o.row, children: [u, e.dates.map(function(f) {
    return d.jsx("td", { className: a.cell, style: o.cell, role: "presentation", children: d.jsx(c, { displayMonth: e.displayMonth, date: f }) }, __(f));
  })] });
}
function Tp(e, t, n) {
  for (var r = n != null && n.ISOWeek ? Cv(t) : vd(t, n), o = n != null && n.ISOWeek ? Yr(e) : An(e, n), a = jn(r, o), s = [], i = 0; i <= a; i++)
    s.push(kt(o, i));
  var c = s.reduce(function(l, u) {
    var f = n != null && n.ISOWeek ? Nv(u) : Pv(u, n), p = l.find(function(h) {
      return h.weekNumber === f;
    });
    return p ? (p.dates.push(u), l) : (l.push({
      weekNumber: f,
      dates: [u]
    }), l);
  }, []);
  return c;
}
function Y2(e, t) {
  var n = Tp(zt(e), md(e), t);
  if (t != null && t.useFixedWeeks) {
    var r = S_(e, t);
    if (r < 6) {
      var o = n[n.length - 1], a = o.dates[o.dates.length - 1], s = tu(a, 6 - r), i = Tp(tu(a, 1), s, t);
      n.push.apply(n, i);
    }
  }
  return n;
}
function q2(e) {
  var t, n, r, o = ot(), a = o.locale, s = o.classNames, i = o.styles, c = o.hideHead, l = o.fixedWeeks, u = o.components, f = o.weekStartsOn, p = o.firstWeekContainsDate, h = o.ISOWeek, m = Y2(e.displayMonth, {
    useFixedWeeks: !!l,
    ISOWeek: h,
    locale: a,
    weekStartsOn: f,
    firstWeekContainsDate: p
  }), v = (t = u == null ? void 0 : u.Head) !== null && t !== void 0 ? t : u2, g = (n = u == null ? void 0 : u.Row) !== null && n !== void 0 ? n : G2, b = (r = u == null ? void 0 : u.Footer) !== null && r !== void 0 ? r : i2;
  return d.jsxs("table", { id: e.id, className: s.table, style: i.table, role: "grid", "aria-labelledby": e["aria-labelledby"], children: [!c && d.jsx(v, {}), d.jsx("tbody", { className: s.tbody, style: i.tbody, children: m.map(function(y) {
    return d.jsx(g, { displayMonth: e.displayMonth, dates: y.dates, weekNumber: y.weekNumber }, y.weekNumber);
  }) }), d.jsx(b, { displayMonth: e.displayMonth })] });
}
function Z2() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var X2 = Z2() ? ds : J, fl = !1, Q2 = 0;
function jp() {
  return "react-day-picker-".concat(++Q2);
}
function J2(e) {
  var t, n = e ?? (fl ? jp() : null), r = Z(n), o = r[0], a = r[1];
  return X2(function() {
    o === null && a(jp());
  }, []), J(function() {
    fl === !1 && (fl = !0);
  }, []), (t = e ?? o) !== null && t !== void 0 ? t : void 0;
}
function eC(e) {
  var t, n, r = ot(), o = r.dir, a = r.classNames, s = r.styles, i = r.components, c = vs().displayMonths, l = J2(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0), u = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0, f = [a.month], p = s.month, h = e.displayIndex === 0, m = e.displayIndex === c.length - 1, v = !h && !m;
  o === "rtl" && (t = [h, m], m = t[0], h = t[1]), h && (f.push(a.caption_start), p = je(je({}, p), s.caption_start)), m && (f.push(a.caption_end), p = je(je({}, p), s.caption_end)), v && (f.push(a.caption_between), p = je(je({}, p), s.caption_between));
  var g = (n = i == null ? void 0 : i.Caption) !== null && n !== void 0 ? n : s2;
  return d.jsxs("div", { className: f.join(" "), style: p, children: [d.jsx(g, { id: l, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), d.jsx(q2, { id: u, "aria-labelledby": l, displayMonth: e.displayMonth })] }, e.displayIndex);
}
function tC(e) {
  var t = ot(), n = t.classNames, r = t.styles;
  return d.jsx("div", { className: n.months, style: r.months, children: e.children });
}
function nC(e) {
  var t, n, r = e.initialProps, o = ot(), a = _d(), s = vs(), i = Z(!1), c = i[0], l = i[1];
  J(function() {
    o.initialFocus && a.focusTarget && (c || (a.focus(a.focusTarget), l(!0)));
  }, [
    o.initialFocus,
    c,
    a.focus,
    a.focusTarget,
    a
  ]);
  var u = [o.classNames.root, o.className];
  o.numberOfMonths > 1 && u.push(o.classNames.multiple_months), o.showWeekNumber && u.push(o.classNames.with_weeknumber);
  var f = je(je({}, o.styles.root), o.style), p = Object.keys(r).filter(function(m) {
    return m.startsWith("data-");
  }).reduce(function(m, v) {
    var g;
    return je(je({}, m), (g = {}, g[v] = r[v], g));
  }, {}), h = (n = (t = r.components) === null || t === void 0 ? void 0 : t.Months) !== null && n !== void 0 ? n : tC;
  return d.jsx("div", je({ className: u.join(" "), style: f, dir: o.dir, id: o.id, nonce: r.nonce, title: r.title, lang: r.lang }, p, { children: d.jsx(h, { children: s.displayMonths.map(function(m, v) {
    return d.jsx(eC, { displayIndex: v, displayMonth: m }, v);
  }) }) }));
}
function rC(e) {
  var t = e.children, n = E_(e, ["children"]);
  return d.jsx(K_, { initialProps: n, children: d.jsx(n2, { children: d.jsx(I2, { initialProps: n, children: d.jsx(f2, { initialProps: n, children: d.jsx(m2, { initialProps: n, children: d.jsx(_2, { children: d.jsx(A2, { children: t }) }) }) }) }) }) });
}
function oC(e) {
  return d.jsx(rC, je({}, e, { children: d.jsx(nC, { initialProps: e }) }));
}
function aC({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  ...r
}) {
  return /* @__PURE__ */ d.jsx(
    oC,
    {
      showOutsideDays: n,
      className: M("p-3", e),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: M(
          Mo({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: M(
          Mo({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "text-muted-foreground opacity-50",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...t
      },
      components: {
        IconLeft: ({ ...o }) => /* @__PURE__ */ d.jsx(cc, { className: "h-4 w-4" }),
        IconRight: ({ ...o }) => /* @__PURE__ */ d.jsx(Pr, { className: "h-4 w-4" })
      },
      ...r
    }
  );
}
aC.displayName = "Calendar";
function sC(e, t) {
  const n = /* @__PURE__ */ Wt(t);
  function r(a) {
    const { children: s, ...i } = a, c = Ut(
      () => i,
      Object.values(i)
    );
    return /* @__PURE__ */ $(n.Provider, {
      value: c
    }, s);
  }
  function o(a) {
    const s = ct(n);
    if (s)
      return s;
    if (t !== void 0)
      return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return r.displayName = e + "Provider", [
    r,
    o
  ];
}
function ut(e, t = []) {
  let n = [];
  function r(a, s) {
    const i = /* @__PURE__ */ Wt(s), c = n.length;
    n = [
      ...n,
      s
    ];
    function l(f) {
      const { scope: p, children: h, ...m } = f, v = (p == null ? void 0 : p[e][c]) || i, g = Ut(
        () => m,
        Object.values(m)
      );
      return /* @__PURE__ */ $(v.Provider, {
        value: g
      }, h);
    }
    function u(f, p) {
      const h = (p == null ? void 0 : p[e][c]) || i, m = ct(h);
      if (m)
        return m;
      if (s !== void 0)
        return s;
      throw new Error(`\`${f}\` must be used within \`${a}\``);
    }
    return l.displayName = a + "Provider", [
      l,
      u
    ];
  }
  const o = () => {
    const a = n.map((s) => /* @__PURE__ */ Wt(s));
    return function(i) {
      const c = (i == null ? void 0 : i[e]) || a;
      return Ut(
        () => ({
          [`__scope${e}`]: {
            ...i,
            [e]: c
          }
        }),
        [
          i,
          c
        ]
      );
    };
  };
  return o.scopeName = e, [
    r,
    iC(o, ...t)
  ];
}
function iC(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const n = () => {
    const r = e.map(
      (o) => ({
        useScope: o(),
        scopeName: o.scopeName
      })
    );
    return function(a) {
      const s = r.reduce((i, { useScope: c, scopeName: l }) => {
        const f = c(a)[`__scope${l}`];
        return {
          ...i,
          ...f
        };
      }, {});
      return Ut(
        () => ({
          [`__scope${t.scopeName}`]: s
        }),
        [
          s
        ]
      );
    };
  };
  return n.scopeName = t.scopeName, n;
}
function Je(e) {
  const t = q(e);
  return J(() => {
    t.current = e;
  }), Ut(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
const St = globalThis != null && globalThis.document ? ds : () => {
}, cC = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], de = cC.reduce((e, t) => {
  const n = /* @__PURE__ */ L((r, o) => {
    const { asChild: a, ...s } = r, i = a ? gn : t;
    return J(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ $(i, j({}, s, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function $i(e, t) {
  e && iv(
    () => e.dispatchEvent(t)
  );
}
const Vv = "Avatar", [lC, rY] = ut(Vv), [uC, zv] = lC(Vv), dC = /* @__PURE__ */ L((e, t) => {
  const { __scopeAvatar: n, ...r } = e, [o, a] = Z("idle");
  return /* @__PURE__ */ $(uC, {
    scope: n,
    imageLoadingStatus: o,
    onImageLoadingStatusChange: a
  }, /* @__PURE__ */ $(de.span, j({}, r, {
    ref: t
  })));
}), fC = "AvatarImage", pC = /* @__PURE__ */ L((e, t) => {
  const { __scopeAvatar: n, src: r, onLoadingStatusChange: o = () => {
  }, ...a } = e, s = zv(fC, n), i = vC(r), c = Je((l) => {
    o(l), s.onImageLoadingStatusChange(l);
  });
  return St(() => {
    i !== "idle" && c(i);
  }, [
    i,
    c
  ]), i === "loaded" ? /* @__PURE__ */ $(de.img, j({}, a, {
    ref: t,
    src: r
  })) : null;
}), hC = "AvatarFallback", mC = /* @__PURE__ */ L((e, t) => {
  const { __scopeAvatar: n, delayMs: r, ...o } = e, a = zv(hC, n), [s, i] = Z(r === void 0);
  return J(() => {
    if (r !== void 0) {
      const c = window.setTimeout(
        () => i(!0),
        r
      );
      return () => window.clearTimeout(c);
    }
  }, [
    r
  ]), s && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ $(de.span, j({}, o, {
    ref: t
  })) : null;
});
function vC(e) {
  const [t, n] = Z("idle");
  return St(() => {
    if (!e) {
      n("error");
      return;
    }
    let r = !0;
    const o = new window.Image(), a = (s) => () => {
      r && n(s);
    };
    return n("loading"), o.onload = a("loaded"), o.onerror = a("error"), o.src = e, () => {
      r = !1;
    };
  }, [
    e
  ]), t;
}
const Wv = dC, Uv = pC, Hv = mC, Po = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Wv,
  {
    ref: n,
    className: M(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
Po.displayName = Wv.displayName;
const Hr = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Uv,
  {
    ref: n,
    className: M("aspect-square h-full w-full", e),
    ...t
  }
));
Hr.displayName = Uv.displayName;
const Oo = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Hv,
  {
    ref: n,
    className: M(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t
  }
));
Oo.displayName = Hv.displayName;
const gC = Ko(
  "inline-flex select-none justify-center items-center border rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: (
          // 'bg-primary hover:bg-primary/80 border-transparent text-primary-foreground',
          "bg-primary border-transparent text-primary-foreground"
        ),
        secondary: "bg-secondary hover:bg-secondary/80 border-transparent text-secondary-foreground",
        destructive: "bg-destructive hover:bg-destructive/80 border-transparent text-destructive-foreground",
        outline: "text-foreground",
        red: "bg-red-200 border-2 border-red-600 text-red-600",
        success: "bg-green-100 border-2 border-green-500 text-green-500"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function At({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ d.jsx("div", { className: M(gC({ variant: t }), e), ...n });
}
var bC = Array.isArray, Cn = bC, yC = typeof mt == "object" && mt && mt.Object === Object && mt, Kv = yC, xC = Kv, wC = typeof self == "object" && self && self.Object === Object && self, $C = xC || wC || Function("return this")(), Vn = $C, _C = Vn, CC = _C.Symbol, gs = CC, kp = gs, Gv = Object.prototype, SC = Gv.hasOwnProperty, NC = Gv.toString, ba = kp ? kp.toStringTag : void 0;
function EC(e) {
  var t = SC.call(e, ba), n = e[ba];
  try {
    e[ba] = void 0;
    var r = !0;
  } catch {
  }
  var o = NC.call(e);
  return r && (t ? e[ba] = n : delete e[ba]), o;
}
var PC = EC, OC = Object.prototype, TC = OC.toString;
function jC(e) {
  return TC.call(e);
}
var kC = jC, Mp = gs, MC = PC, DC = kC, AC = "[object Null]", RC = "[object Undefined]", Dp = Mp ? Mp.toStringTag : void 0;
function IC(e) {
  return e == null ? e === void 0 ? RC : AC : Dp && Dp in Object(e) ? MC(e) : DC(e);
}
var ao = IC;
function LC(e) {
  return e != null && typeof e == "object";
}
var so = LC, FC = ao, BC = so, VC = "[object Symbol]";
function zC(e) {
  return typeof e == "symbol" || BC(e) && FC(e) == VC;
}
var bs = zC, WC = Cn, UC = bs, HC = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, KC = /^\w*$/;
function GC(e, t) {
  if (WC(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || UC(e) ? !0 : KC.test(e) || !HC.test(e) || t != null && e in Object(t);
}
var Sd = GC;
function YC(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Or = YC;
const Yv = /* @__PURE__ */ _n(Or);
var qC = ao, ZC = Or, XC = "[object AsyncFunction]", QC = "[object Function]", JC = "[object GeneratorFunction]", eS = "[object Proxy]";
function tS(e) {
  if (!ZC(e))
    return !1;
  var t = qC(e);
  return t == QC || t == JC || t == XC || t == eS;
}
var Nd = tS;
const _i = /* @__PURE__ */ _n(Nd);
var nS = Vn, rS = nS["__core-js_shared__"], oS = rS, pl = oS, Ap = function() {
  var e = /[^.]+$/.exec(pl && pl.keys && pl.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function aS(e) {
  return !!Ap && Ap in e;
}
var sS = aS, iS = Function.prototype, cS = iS.toString;
function lS(e) {
  if (e != null) {
    try {
      return cS.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var qv = lS, uS = Nd, dS = sS, fS = Or, pS = qv, hS = /[\\^$.*+?()[\]{}|]/g, mS = /^\[object .+?Constructor\]$/, vS = Function.prototype, gS = Object.prototype, bS = vS.toString, yS = gS.hasOwnProperty, xS = RegExp(
  "^" + bS.call(yS).replace(hS, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function wS(e) {
  if (!fS(e) || dS(e))
    return !1;
  var t = uS(e) ? xS : mS;
  return t.test(pS(e));
}
var $S = wS;
function _S(e, t) {
  return e == null ? void 0 : e[t];
}
var CS = _S, SS = $S, NS = CS;
function ES(e, t) {
  var n = NS(e, t);
  return SS(n) ? n : void 0;
}
var io = ES, PS = io, OS = PS(Object, "create"), fc = OS, Rp = fc;
function TS() {
  this.__data__ = Rp ? Rp(null) : {}, this.size = 0;
}
var jS = TS;
function kS(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var MS = kS, DS = fc, AS = "__lodash_hash_undefined__", RS = Object.prototype, IS = RS.hasOwnProperty;
function LS(e) {
  var t = this.__data__;
  if (DS) {
    var n = t[e];
    return n === AS ? void 0 : n;
  }
  return IS.call(t, e) ? t[e] : void 0;
}
var FS = LS, BS = fc, VS = Object.prototype, zS = VS.hasOwnProperty;
function WS(e) {
  var t = this.__data__;
  return BS ? t[e] !== void 0 : zS.call(t, e);
}
var US = WS, HS = fc, KS = "__lodash_hash_undefined__";
function GS(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = HS && t === void 0 ? KS : t, this;
}
var YS = GS, qS = jS, ZS = MS, XS = FS, QS = US, JS = YS;
function Yo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Yo.prototype.clear = qS;
Yo.prototype.delete = ZS;
Yo.prototype.get = XS;
Yo.prototype.has = QS;
Yo.prototype.set = JS;
var eN = Yo;
function tN() {
  this.__data__ = [], this.size = 0;
}
var nN = tN;
function rN(e, t) {
  return e === t || e !== e && t !== t;
}
var Ed = rN, oN = Ed;
function aN(e, t) {
  for (var n = e.length; n--; )
    if (oN(e[n][0], t))
      return n;
  return -1;
}
var pc = aN, sN = pc, iN = Array.prototype, cN = iN.splice;
function lN(e) {
  var t = this.__data__, n = sN(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : cN.call(t, n, 1), --this.size, !0;
}
var uN = lN, dN = pc;
function fN(e) {
  var t = this.__data__, n = dN(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var pN = fN, hN = pc;
function mN(e) {
  return hN(this.__data__, e) > -1;
}
var vN = mN, gN = pc;
function bN(e, t) {
  var n = this.__data__, r = gN(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
var yN = bN, xN = nN, wN = uN, $N = pN, _N = vN, CN = yN;
function qo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
qo.prototype.clear = xN;
qo.prototype.delete = wN;
qo.prototype.get = $N;
qo.prototype.has = _N;
qo.prototype.set = CN;
var hc = qo, SN = io, NN = Vn, EN = SN(NN, "Map"), Pd = EN, Ip = eN, PN = hc, ON = Pd;
function TN() {
  this.size = 0, this.__data__ = {
    hash: new Ip(),
    map: new (ON || PN)(),
    string: new Ip()
  };
}
var jN = TN;
function kN(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var MN = kN, DN = MN;
function AN(e, t) {
  var n = e.__data__;
  return DN(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var mc = AN, RN = mc;
function IN(e) {
  var t = RN(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var LN = IN, FN = mc;
function BN(e) {
  return FN(this, e).get(e);
}
var VN = BN, zN = mc;
function WN(e) {
  return zN(this, e).has(e);
}
var UN = WN, HN = mc;
function KN(e, t) {
  var n = HN(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
var GN = KN, YN = jN, qN = LN, ZN = VN, XN = UN, QN = GN;
function Zo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Zo.prototype.clear = YN;
Zo.prototype.delete = qN;
Zo.prototype.get = ZN;
Zo.prototype.has = XN;
Zo.prototype.set = QN;
var Od = Zo, Zv = Od, JN = "Expected a function";
function Td(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(JN);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var s = e.apply(this, r);
    return n.cache = a.set(o, s) || a, s;
  };
  return n.cache = new (Td.Cache || Zv)(), n;
}
Td.Cache = Zv;
var eE = Td, tE = eE, nE = 500;
function rE(e) {
  var t = tE(e, function(r) {
    return n.size === nE && n.clear(), r;
  }), n = t.cache;
  return t;
}
var oE = rE, aE = oE, sE = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, iE = /\\(\\)?/g, cE = aE(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(sE, function(n, r, o, a) {
    t.push(o ? a.replace(iE, "$1") : r || n);
  }), t;
}), lE = cE;
function uE(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var Xv = uE, Lp = gs, dE = Xv, fE = Cn, pE = bs, hE = 1 / 0, Fp = Lp ? Lp.prototype : void 0, Bp = Fp ? Fp.toString : void 0;
function Qv(e) {
  if (typeof e == "string")
    return e;
  if (fE(e))
    return dE(e, Qv) + "";
  if (pE(e))
    return Bp ? Bp.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -hE ? "-0" : t;
}
var mE = Qv, vE = mE;
function gE(e) {
  return e == null ? "" : vE(e);
}
var Jv = gE, bE = Cn, yE = Sd, xE = lE, wE = Jv;
function $E(e, t) {
  return bE(e) ? e : yE(e, t) ? [e] : xE(wE(e));
}
var eg = $E, _E = bs, CE = 1 / 0;
function SE(e) {
  if (typeof e == "string" || _E(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -CE ? "-0" : t;
}
var vc = SE, NE = eg, EE = vc;
function PE(e, t) {
  t = NE(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[EE(t[n++])];
  return n && n == r ? e : void 0;
}
var jd = PE, OE = jd;
function TE(e, t, n) {
  var r = e == null ? void 0 : OE(e, t);
  return r === void 0 ? n : r;
}
var jE = TE;
function kE(e) {
  return e == null;
}
var ME = kE;
const DE = /* @__PURE__ */ _n(ME);
var AE = ao, RE = Cn, IE = so, LE = "[object String]";
function FE(e) {
  return typeof e == "string" || !RE(e) && IE(e) && AE(e) == LE;
}
var BE = FE;
const tg = /* @__PURE__ */ _n(BE);
var ru = { exports: {} }, Ye = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vp;
function VE() {
  if (Vp)
    return Ye;
  Vp = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
  function x(w) {
    if (typeof w == "object" && w !== null) {
      var N = w.$$typeof;
      switch (N) {
        case t:
          switch (w = w.type, w) {
            case c:
            case l:
            case r:
            case a:
            case o:
            case f:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case i:
                case u:
                case m:
                case h:
                case s:
                  return w;
                default:
                  return N;
              }
          }
        case n:
          return N;
      }
    }
  }
  function _(w) {
    return x(w) === l;
  }
  return Ye.AsyncMode = c, Ye.ConcurrentMode = l, Ye.ContextConsumer = i, Ye.ContextProvider = s, Ye.Element = t, Ye.ForwardRef = u, Ye.Fragment = r, Ye.Lazy = m, Ye.Memo = h, Ye.Portal = n, Ye.Profiler = a, Ye.StrictMode = o, Ye.Suspense = f, Ye.isAsyncMode = function(w) {
    return _(w) || x(w) === c;
  }, Ye.isConcurrentMode = _, Ye.isContextConsumer = function(w) {
    return x(w) === i;
  }, Ye.isContextProvider = function(w) {
    return x(w) === s;
  }, Ye.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === t;
  }, Ye.isForwardRef = function(w) {
    return x(w) === u;
  }, Ye.isFragment = function(w) {
    return x(w) === r;
  }, Ye.isLazy = function(w) {
    return x(w) === m;
  }, Ye.isMemo = function(w) {
    return x(w) === h;
  }, Ye.isPortal = function(w) {
    return x(w) === n;
  }, Ye.isProfiler = function(w) {
    return x(w) === a;
  }, Ye.isStrictMode = function(w) {
    return x(w) === o;
  }, Ye.isSuspense = function(w) {
    return x(w) === f;
  }, Ye.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === r || w === l || w === a || w === o || w === f || w === p || typeof w == "object" && w !== null && (w.$$typeof === m || w.$$typeof === h || w.$$typeof === s || w.$$typeof === i || w.$$typeof === u || w.$$typeof === g || w.$$typeof === b || w.$$typeof === y || w.$$typeof === v);
  }, Ye.typeOf = x, Ye;
}
var qe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zp;
function zE() {
  return zp || (zp = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
    function x(A) {
      return typeof A == "string" || typeof A == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      A === r || A === l || A === a || A === o || A === f || A === p || typeof A == "object" && A !== null && (A.$$typeof === m || A.$$typeof === h || A.$$typeof === s || A.$$typeof === i || A.$$typeof === u || A.$$typeof === g || A.$$typeof === b || A.$$typeof === y || A.$$typeof === v);
    }
    function _(A) {
      if (typeof A == "object" && A !== null) {
        var ne = A.$$typeof;
        switch (ne) {
          case t:
            var ye = A.type;
            switch (ye) {
              case c:
              case l:
              case r:
              case a:
              case o:
              case f:
                return ye;
              default:
                var Pe = ye && ye.$$typeof;
                switch (Pe) {
                  case i:
                  case u:
                  case m:
                  case h:
                  case s:
                    return Pe;
                  default:
                    return ne;
                }
            }
          case n:
            return ne;
        }
      }
    }
    var w = c, N = l, S = i, D = s, P = t, z = u, K = r, R = m, W = h, V = n, E = a, B = o, T = f, U = !1;
    function G(A) {
      return U || (U = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), Q(A) || _(A) === c;
    }
    function Q(A) {
      return _(A) === l;
    }
    function oe(A) {
      return _(A) === i;
    }
    function H(A) {
      return _(A) === s;
    }
    function le(A) {
      return typeof A == "object" && A !== null && A.$$typeof === t;
    }
    function be(A) {
      return _(A) === u;
    }
    function pe(A) {
      return _(A) === r;
    }
    function ee(A) {
      return _(A) === m;
    }
    function re(A) {
      return _(A) === h;
    }
    function me(A) {
      return _(A) === n;
    }
    function _e(A) {
      return _(A) === a;
    }
    function ae(A) {
      return _(A) === o;
    }
    function fe(A) {
      return _(A) === f;
    }
    qe.AsyncMode = w, qe.ConcurrentMode = N, qe.ContextConsumer = S, qe.ContextProvider = D, qe.Element = P, qe.ForwardRef = z, qe.Fragment = K, qe.Lazy = R, qe.Memo = W, qe.Portal = V, qe.Profiler = E, qe.StrictMode = B, qe.Suspense = T, qe.isAsyncMode = G, qe.isConcurrentMode = Q, qe.isContextConsumer = oe, qe.isContextProvider = H, qe.isElement = le, qe.isForwardRef = be, qe.isFragment = pe, qe.isLazy = ee, qe.isMemo = re, qe.isPortal = me, qe.isProfiler = _e, qe.isStrictMode = ae, qe.isSuspense = fe, qe.isValidElementType = x, qe.typeOf = _;
  }()), qe;
}
process.env.NODE_ENV === "production" ? ru.exports = VE() : ru.exports = zE();
var Wp = ru.exports, WE = ao, UE = so, HE = "[object Number]";
function KE(e) {
  return typeof e == "number" || UE(e) && WE(e) == HE;
}
var ng = KE;
const GE = /* @__PURE__ */ _n(ng);
var YE = ng;
function qE(e) {
  return YE(e) && e != +e;
}
var ZE = qE;
const XE = /* @__PURE__ */ _n(ZE);
var Bs = function(t) {
  return tg(t) && t.indexOf("%") === t.length - 1;
}, cn = function(t) {
  return GE(t) && !XE(t);
}, Ci = function(t) {
  return cn(t) || tg(t);
};
function ou(e) {
  "@babel/helpers - typeof";
  return ou = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ou(e);
}
var QE = ["viewBox", "children"], JE = [
  "aria-activedescendant",
  "aria-atomic",
  "aria-autocomplete",
  "aria-busy",
  "aria-checked",
  "aria-colcount",
  "aria-colindex",
  "aria-colspan",
  "aria-controls",
  "aria-current",
  "aria-describedby",
  "aria-details",
  "aria-disabled",
  "aria-errormessage",
  "aria-expanded",
  "aria-flowto",
  "aria-haspopup",
  "aria-hidden",
  "aria-invalid",
  "aria-keyshortcuts",
  "aria-label",
  "aria-labelledby",
  "aria-level",
  "aria-live",
  "aria-modal",
  "aria-multiline",
  "aria-multiselectable",
  "aria-orientation",
  "aria-owns",
  "aria-placeholder",
  "aria-posinset",
  "aria-pressed",
  "aria-readonly",
  "aria-relevant",
  "aria-required",
  "aria-roledescription",
  "aria-rowcount",
  "aria-rowindex",
  "aria-rowspan",
  "aria-selected",
  "aria-setsize",
  "aria-sort",
  "aria-valuemax",
  "aria-valuemin",
  "aria-valuenow",
  "aria-valuetext",
  "className",
  "color",
  "height",
  "id",
  "lang",
  "max",
  "media",
  "method",
  "min",
  "name",
  "style",
  /*
   * removed 'type' SVGElementPropKey because we do not currently use any SVG elements
   * that can use it and it conflicts with the recharts prop 'type'
   * https://github.com/recharts/recharts/pull/3327
   * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type
   */
  // 'type',
  "target",
  "width",
  "role",
  "tabIndex",
  "accentHeight",
  "accumulate",
  "additive",
  "alignmentBaseline",
  "allowReorder",
  "alphabetic",
  "amplitude",
  "arabicForm",
  "ascent",
  "attributeName",
  "attributeType",
  "autoReverse",
  "azimuth",
  "baseFrequency",
  "baselineShift",
  "baseProfile",
  "bbox",
  "begin",
  "bias",
  "by",
  "calcMode",
  "capHeight",
  "clip",
  "clipPath",
  "clipPathUnits",
  "clipRule",
  "colorInterpolation",
  "colorInterpolationFilters",
  "colorProfile",
  "colorRendering",
  "contentScriptType",
  "contentStyleType",
  "cursor",
  "cx",
  "cy",
  "d",
  "decelerate",
  "descent",
  "diffuseConstant",
  "direction",
  "display",
  "divisor",
  "dominantBaseline",
  "dur",
  "dx",
  "dy",
  "edgeMode",
  "elevation",
  "enableBackground",
  "end",
  "exponent",
  "externalResourcesRequired",
  "fill",
  "fillOpacity",
  "fillRule",
  "filter",
  "filterRes",
  "filterUnits",
  "floodColor",
  "floodOpacity",
  "focusable",
  "fontFamily",
  "fontSize",
  "fontSizeAdjust",
  "fontStretch",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "format",
  "from",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyphName",
  "glyphOrientationHorizontal",
  "glyphOrientationVertical",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "hanging",
  "horizAdvX",
  "horizOriginX",
  "href",
  "ideographic",
  "imageRendering",
  "in2",
  "in",
  "intercept",
  "k1",
  "k2",
  "k3",
  "k4",
  "k",
  "kernelMatrix",
  "kernelUnitLength",
  "kerning",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "letterSpacing",
  "lightingColor",
  "limitingConeAngle",
  "local",
  "markerEnd",
  "markerHeight",
  "markerMid",
  "markerStart",
  "markerUnits",
  "markerWidth",
  "mask",
  "maskContentUnits",
  "maskUnits",
  "mathematical",
  "mode",
  "numOctaves",
  "offset",
  "opacity",
  "operator",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "overlinePosition",
  "overlineThickness",
  "paintOrder",
  "panose1",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointerEvents",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "r",
  "radius",
  "refX",
  "refY",
  "renderingIntent",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "restart",
  "result",
  "rotate",
  "rx",
  "ry",
  "seed",
  "shapeRendering",
  "slope",
  "spacing",
  "specularConstant",
  "specularExponent",
  "speed",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stemh",
  "stemv",
  "stitchTiles",
  "stopColor",
  "stopOpacity",
  "strikethroughPosition",
  "strikethroughThickness",
  "string",
  "stroke",
  "strokeDasharray",
  "strokeDashoffset",
  "strokeLinecap",
  "strokeLinejoin",
  "strokeMiterlimit",
  "strokeOpacity",
  "strokeWidth",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textAnchor",
  "textDecoration",
  "textLength",
  "textRendering",
  "to",
  "transform",
  "u1",
  "u2",
  "underlinePosition",
  "underlineThickness",
  "unicode",
  "unicodeBidi",
  "unicodeRange",
  "unitsPerEm",
  "vAlphabetic",
  "values",
  "vectorEffect",
  "version",
  "vertAdvY",
  "vertOriginX",
  "vertOriginY",
  "vHanging",
  "vIdeographic",
  "viewTarget",
  "visibility",
  "vMathematical",
  "widths",
  "wordSpacing",
  "writingMode",
  "x1",
  "x2",
  "x",
  "xChannelSelector",
  "xHeight",
  "xlinkActuate",
  "xlinkArcrole",
  "xlinkHref",
  "xlinkRole",
  "xlinkShow",
  "xlinkTitle",
  "xlinkType",
  "xmlBase",
  "xmlLang",
  "xmlns",
  "xmlnsXlink",
  "xmlSpace",
  "y1",
  "y2",
  "y",
  "yChannelSelector",
  "z",
  "zoomAndPan",
  "ref",
  "key",
  "angle"
], Up = ["points", "pathLength"], hl = {
  svg: QE,
  polygon: Up,
  polyline: Up
}, rg = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], eP = function(t, n, r) {
  return function(o) {
    return t(n, r, o), null;
  };
}, tP = function(t, n, r) {
  if (!Yv(t) || ou(t) !== "object")
    return null;
  var o = null;
  return Object.keys(t).forEach(function(a) {
    var s = t[a];
    rg.includes(a) && typeof s == "function" && (o || (o = {}), o[a] = eP(s, n, r));
  }), o;
}, nP = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, rP = function(t, n, r, o) {
  var a, s = (a = hl == null ? void 0 : hl[o]) !== null && a !== void 0 ? a : [];
  return !_i(t) && (o && s.includes(n) || JE.includes(n)) || rg.includes(n);
}, og = function(t, n, r) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var o = t;
  if (/* @__PURE__ */ Oa(t) && (o = t.props), !Yv(o))
    return null;
  var a = {};
  return Object.keys(o).forEach(function(s) {
    var i;
    rP((i = o) === null || i === void 0 ? void 0 : i[s], s, n, r) && (a[s] = o[s]);
  }), a;
}, oP = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function au() {
  return au = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, au.apply(this, arguments);
}
function aP(e, t) {
  if (e == null)
    return {};
  var n = sP(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function sP(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function iP(e) {
  var t = e.children, n = e.width, r = e.height, o = e.viewBox, a = e.className, s = e.style, i = e.title, c = e.desc, l = aP(e, oP), u = o || {
    width: n,
    height: r,
    x: 0,
    y: 0
  }, f = br("recharts-surface", a);
  return /* @__PURE__ */ I.createElement("svg", au({}, og(l, !0, "svg"), {
    className: f,
    width: n,
    height: r,
    style: s,
    viewBox: "".concat(u.x, " ").concat(u.y, " ").concat(u.width, " ").concat(u.height)
  }), /* @__PURE__ */ I.createElement("title", null, i), /* @__PURE__ */ I.createElement("desc", null, c), t);
}
var cP = process.env.NODE_ENV !== "production", ci = function(t, n) {
  for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
    o[a - 2] = arguments[a];
  if (cP && typeof console < "u" && console.warn && (n === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (n === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var s = 0;
      console.warn(n.replace(/%s/g, function() {
        return o[s++];
      }));
    }
};
function lP(e, t, n) {
  var r = -1, o = e.length;
  t < 0 && (t = -t > o ? 0 : o + t), n = n > o ? o : n, n < 0 && (n += o), o = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var a = Array(o); ++r < o; )
    a[r] = e[r + t];
  return a;
}
var uP = lP, dP = uP;
function fP(e, t, n) {
  var r = e.length;
  return n = n === void 0 ? r : n, !t && n >= r ? e : dP(e, t, n);
}
var pP = fP, hP = "\\ud800-\\udfff", mP = "\\u0300-\\u036f", vP = "\\ufe20-\\ufe2f", gP = "\\u20d0-\\u20ff", bP = mP + vP + gP, yP = "\\ufe0e\\ufe0f", xP = "\\u200d", wP = RegExp("[" + xP + hP + bP + yP + "]");
function $P(e) {
  return wP.test(e);
}
var ag = $P;
function _P(e) {
  return e.split("");
}
var CP = _P, sg = "\\ud800-\\udfff", SP = "\\u0300-\\u036f", NP = "\\ufe20-\\ufe2f", EP = "\\u20d0-\\u20ff", PP = SP + NP + EP, OP = "\\ufe0e\\ufe0f", TP = "[" + sg + "]", su = "[" + PP + "]", iu = "\\ud83c[\\udffb-\\udfff]", jP = "(?:" + su + "|" + iu + ")", ig = "[^" + sg + "]", cg = "(?:\\ud83c[\\udde6-\\uddff]){2}", lg = "[\\ud800-\\udbff][\\udc00-\\udfff]", kP = "\\u200d", ug = jP + "?", dg = "[" + OP + "]?", MP = "(?:" + kP + "(?:" + [ig, cg, lg].join("|") + ")" + dg + ug + ")*", DP = dg + ug + MP, AP = "(?:" + [ig + su + "?", su, cg, lg, TP].join("|") + ")", RP = RegExp(iu + "(?=" + iu + ")|" + AP + DP, "g");
function IP(e) {
  return e.match(RP) || [];
}
var LP = IP, FP = CP, BP = ag, VP = LP;
function zP(e) {
  return BP(e) ? VP(e) : FP(e);
}
var WP = zP, UP = pP, HP = ag, KP = WP, GP = Jv;
function YP(e) {
  return function(t) {
    t = GP(t);
    var n = HP(t) ? KP(t) : void 0, r = n ? n[0] : t.charAt(0), o = n ? UP(n, 1).join("") : t.slice(1);
    return r[e]() + o;
  };
}
var qP = YP, ZP = qP, XP = ZP("toUpperCase"), QP = XP;
const fg = /* @__PURE__ */ _n(QP);
function Vs(e) {
  return function() {
    return e;
  };
}
const pg = Math.cos, Si = Math.sin, Sn = Math.sqrt, Ni = Math.PI, gc = 2 * Ni, cu = Math.PI, lu = 2 * cu, Fr = 1e-6, JP = lu - Fr;
function hg(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function eO(e) {
  let t = Math.floor(e);
  if (!(t >= 0))
    throw new Error(`invalid digits: ${e}`);
  if (t > 15)
    return hg;
  const n = 10 ** t;
  return function(r) {
    this._ += r[0];
    for (let o = 1, a = r.length; o < a; ++o)
      this._ += Math.round(arguments[o] * n) / n + r[o];
  };
}
class tO {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? hg : eO(t);
  }
  moveTo(t, n) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, n) {
    this._append`L${this._x1 = +t},${this._y1 = +n}`;
  }
  quadraticCurveTo(t, n, r, o) {
    this._append`Q${+t},${+n},${this._x1 = +r},${this._y1 = +o}`;
  }
  bezierCurveTo(t, n, r, o, a, s) {
    this._append`C${+t},${+n},${+r},${+o},${this._x1 = +a},${this._y1 = +s}`;
  }
  arcTo(t, n, r, o, a) {
    if (t = +t, n = +n, r = +r, o = +o, a = +a, a < 0)
      throw new Error(`negative radius: ${a}`);
    let s = this._x1, i = this._y1, c = r - t, l = o - n, u = s - t, f = i - n, p = u * u + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = n}`;
    else if (p > Fr)
      if (!(Math.abs(f * c - l * u) > Fr) || !a)
        this._append`L${this._x1 = t},${this._y1 = n}`;
      else {
        let h = r - s, m = o - i, v = c * c + l * l, g = h * h + m * m, b = Math.sqrt(v), y = Math.sqrt(p), x = a * Math.tan((cu - Math.acos((v + p - g) / (2 * b * y))) / 2), _ = x / y, w = x / b;
        Math.abs(_ - 1) > Fr && this._append`L${t + _ * u},${n + _ * f}`, this._append`A${a},${a},0,0,${+(f * h > u * m)},${this._x1 = t + w * c},${this._y1 = n + w * l}`;
      }
  }
  arc(t, n, r, o, a, s) {
    if (t = +t, n = +n, r = +r, s = !!s, r < 0)
      throw new Error(`negative radius: ${r}`);
    let i = r * Math.cos(o), c = r * Math.sin(o), l = t + i, u = n + c, f = 1 ^ s, p = s ? o - a : a - o;
    this._x1 === null ? this._append`M${l},${u}` : (Math.abs(this._x1 - l) > Fr || Math.abs(this._y1 - u) > Fr) && this._append`L${l},${u}`, r && (p < 0 && (p = p % lu + lu), p > JP ? this._append`A${r},${r},0,1,${f},${t - i},${n - c}A${r},${r},0,1,${f},${this._x1 = l},${this._y1 = u}` : p > Fr && this._append`A${r},${r},0,${+(p >= cu)},${f},${this._x1 = t + r * Math.cos(a)},${this._y1 = n + r * Math.sin(a)}`);
  }
  rect(t, n, r, o) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${r = +r}v${+o}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function nO(e) {
  let t = 3;
  return e.digits = function(n) {
    if (!arguments.length)
      return t;
    if (n == null)
      t = null;
    else {
      const r = Math.floor(n);
      if (!(r >= 0))
        throw new RangeError(`invalid digits: ${n}`);
      t = r;
    }
    return e;
  }, () => new tO(t);
}
const kd = {
  draw(e, t) {
    const n = Sn(t / Ni);
    e.moveTo(n, 0), e.arc(0, 0, n, 0, gc);
  }
}, rO = {
  draw(e, t) {
    const n = Sn(t / 5) / 2;
    e.moveTo(-3 * n, -n), e.lineTo(-n, -n), e.lineTo(-n, -3 * n), e.lineTo(n, -3 * n), e.lineTo(n, -n), e.lineTo(3 * n, -n), e.lineTo(3 * n, n), e.lineTo(n, n), e.lineTo(n, 3 * n), e.lineTo(-n, 3 * n), e.lineTo(-n, n), e.lineTo(-3 * n, n), e.closePath();
  }
}, mg = Sn(1 / 3), oO = mg * 2, aO = {
  draw(e, t) {
    const n = Sn(t / oO), r = n * mg;
    e.moveTo(0, -n), e.lineTo(r, 0), e.lineTo(0, n), e.lineTo(-r, 0), e.closePath();
  }
}, sO = {
  draw(e, t) {
    const n = Sn(t), r = -n / 2;
    e.rect(r, r, n, n);
  }
}, iO = 0.8908130915292852, vg = Si(Ni / 10) / Si(7 * Ni / 10), cO = Si(gc / 10) * vg, lO = -pg(gc / 10) * vg, uO = {
  draw(e, t) {
    const n = Sn(t * iO), r = cO * n, o = lO * n;
    e.moveTo(0, -n), e.lineTo(r, o);
    for (let a = 1; a < 5; ++a) {
      const s = gc * a / 5, i = pg(s), c = Si(s);
      e.lineTo(c * n, -i * n), e.lineTo(i * r - c * o, c * r + i * o);
    }
    e.closePath();
  }
}, ml = Sn(3), dO = {
  draw(e, t) {
    const n = -Sn(t / (ml * 3));
    e.moveTo(0, n * 2), e.lineTo(-ml * n, -n), e.lineTo(ml * n, -n), e.closePath();
  }
}, Jt = -0.5, en = Sn(3) / 2, uu = 1 / Sn(12), fO = (uu / 2 + 1) * 3, pO = {
  draw(e, t) {
    const n = Sn(t / fO), r = n / 2, o = n * uu, a = r, s = n * uu + n, i = -a, c = s;
    e.moveTo(r, o), e.lineTo(a, s), e.lineTo(i, c), e.lineTo(Jt * r - en * o, en * r + Jt * o), e.lineTo(Jt * a - en * s, en * a + Jt * s), e.lineTo(Jt * i - en * c, en * i + Jt * c), e.lineTo(Jt * r + en * o, Jt * o - en * r), e.lineTo(Jt * a + en * s, Jt * s - en * a), e.lineTo(Jt * i + en * c, Jt * c - en * i), e.closePath();
  }
};
function hO(e, t) {
  let n = null, r = nO(o);
  e = typeof e == "function" ? e : Vs(e || kd), t = typeof t == "function" ? t : Vs(t === void 0 ? 64 : +t);
  function o() {
    let a;
    if (n || (n = a = r()), e.apply(this, arguments).draw(n, +t.apply(this, arguments)), a)
      return n = null, a + "" || null;
  }
  return o.type = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : Vs(a), o) : e;
  }, o.size = function(a) {
    return arguments.length ? (t = typeof a == "function" ? a : Vs(+a), o) : t;
  }, o.context = function(a) {
    return arguments.length ? (n = a ?? null, o) : n;
  }, o;
}
function ka(e) {
  "@babel/helpers - typeof";
  return ka = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ka(e);
}
var mO = ["type", "size", "sizeType"];
function du() {
  return du = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, du.apply(this, arguments);
}
function Hp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Kp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hp(Object(n), !0).forEach(function(r) {
      vO(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Hp(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function vO(e, t, n) {
  return t = gO(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function gO(e) {
  var t = bO(e, "string");
  return ka(t) == "symbol" ? t : String(t);
}
function bO(e, t) {
  if (ka(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (ka(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function yO(e, t) {
  if (e == null)
    return {};
  var n = xO(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function xO(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var gg = {
  symbolCircle: kd,
  symbolCross: rO,
  symbolDiamond: aO,
  symbolSquare: sO,
  symbolStar: uO,
  symbolTriangle: dO,
  symbolWye: pO
}, wO = Math.PI / 180, $O = function(t) {
  var n = "symbol".concat(fg(t));
  return gg[n] || kd;
}, _O = function(t, n, r) {
  if (n === "area")
    return t;
  switch (r) {
    case "cross":
      return 5 * t * t / 9;
    case "diamond":
      return 0.5 * t * t / Math.sqrt(3);
    case "square":
      return t * t;
    case "star": {
      var o = 18 * wO;
      return 1.25 * t * t * (Math.tan(o) - Math.tan(o * 2) * Math.pow(Math.tan(o), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, CO = function(t, n) {
  gg["symbol".concat(fg(t))] = n;
}, bg = function(t) {
  var n = t.type, r = n === void 0 ? "circle" : n, o = t.size, a = o === void 0 ? 64 : o, s = t.sizeType, i = s === void 0 ? "area" : s, c = yO(t, mO), l = Kp(Kp({}, c), {}, {
    type: r,
    size: a,
    sizeType: i
  }), u = function() {
    var g = $O(r), b = hO().type(g).size(_O(a, i, r));
    return b();
  }, f = l.className, p = l.cx, h = l.cy, m = og(l, !0);
  return p === +p && h === +h && a === +a ? /* @__PURE__ */ I.createElement("path", du({}, m, {
    className: br("recharts-symbols", f),
    transform: "translate(".concat(p, ", ").concat(h, ")"),
    d: u()
  })) : null;
};
bg.registerSymbol = CO;
function Ao(e) {
  "@babel/helpers - typeof";
  return Ao = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ao(e);
}
function fu() {
  return fu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, fu.apply(this, arguments);
}
function Gp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function SO(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gp(Object(n), !0).forEach(function(r) {
      Ma(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Gp(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function NO(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function EO(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, xg(r.key), r);
  }
}
function PO(e, t, n) {
  return t && EO(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function OO(e, t, n) {
  return t = Ei(t), TO(e, yg() ? Reflect.construct(t, n || [], Ei(e).constructor) : t.apply(e, n));
}
function TO(e, t) {
  if (t && (Ao(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return jO(e);
}
function jO(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function yg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (yg = function() {
    return !!e;
  })();
}
function Ei(e) {
  return Ei = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ei(e);
}
function kO(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && pu(e, t);
}
function pu(e, t) {
  return pu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, pu(e, t);
}
function Ma(e, t, n) {
  return t = xg(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function xg(e) {
  var t = MO(e, "string");
  return Ao(t) == "symbol" ? t : String(t);
}
function MO(e, t) {
  if (Ao(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Ao(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var tn = 32, Md = /* @__PURE__ */ function(e) {
  kO(t, e);
  function t() {
    return NO(this, t), OO(this, t, arguments);
  }
  return PO(t, [{
    key: "renderIcon",
    value: (
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      function(r) {
        var o = this.props.inactiveColor, a = tn / 2, s = tn / 6, i = tn / 3, c = r.inactive ? o : r.color;
        if (r.type === "plainline")
          return /* @__PURE__ */ I.createElement("line", {
            strokeWidth: 4,
            fill: "none",
            stroke: c,
            strokeDasharray: r.payload.strokeDasharray,
            x1: 0,
            y1: a,
            x2: tn,
            y2: a,
            className: "recharts-legend-icon"
          });
        if (r.type === "line")
          return /* @__PURE__ */ I.createElement("path", {
            strokeWidth: 4,
            fill: "none",
            stroke: c,
            d: "M0,".concat(a, "h").concat(i, `
            A`).concat(s, ",").concat(s, ",0,1,1,").concat(2 * i, ",").concat(a, `
            H`).concat(tn, "M").concat(2 * i, ",").concat(a, `
            A`).concat(s, ",").concat(s, ",0,1,1,").concat(i, ",").concat(a),
            className: "recharts-legend-icon"
          });
        if (r.type === "rect")
          return /* @__PURE__ */ I.createElement("path", {
            stroke: "none",
            fill: c,
            d: "M0,".concat(tn / 8, "h").concat(tn, "v").concat(tn * 3 / 4, "h").concat(-tn, "z"),
            className: "recharts-legend-icon"
          });
        if (/* @__PURE__ */ I.isValidElement(r.legendIcon)) {
          var l = SO({}, r);
          return delete l.legendIcon, /* @__PURE__ */ I.cloneElement(r.legendIcon, l);
        }
        return /* @__PURE__ */ I.createElement(bg, {
          fill: c,
          cx: a,
          cy: a,
          size: tn,
          sizeType: "diameter",
          type: r.type
        });
      }
    )
    /**
     * Draw items of legend
     * @return {ReactElement} Items
     */
  }, {
    key: "renderItems",
    value: function() {
      var r = this, o = this.props, a = o.payload, s = o.iconSize, i = o.layout, c = o.formatter, l = o.inactiveColor, u = {
        x: 0,
        y: 0,
        width: tn,
        height: tn
      }, f = {
        display: i === "horizontal" ? "inline-block" : "block",
        marginRight: 10
      }, p = {
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4
      };
      return a.map(function(h, m) {
        var v = h.formatter || c, g = br(Ma(Ma({
          "recharts-legend-item": !0
        }, "legend-item-".concat(m), !0), "inactive", h.inactive));
        if (h.type === "none")
          return null;
        var b = _i(h.value) ? null : h.value;
        ci(
          !_i(h.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var y = h.inactive ? l : h.color;
        return /* @__PURE__ */ I.createElement("li", fu({
          className: g,
          style: f,
          key: "legend-item-".concat(m)
        }, tP(r.props, h, m)), /* @__PURE__ */ I.createElement(iP, {
          width: s,
          height: s,
          viewBox: u,
          style: p
        }, r.renderIcon(h)), /* @__PURE__ */ I.createElement("span", {
          className: "recharts-legend-item-text",
          style: {
            color: y
          }
        }, v ? v(b, h, m) : b));
      });
    }
  }, {
    key: "render",
    value: function() {
      var r = this.props, o = r.payload, a = r.layout, s = r.align;
      if (!o || !o.length)
        return null;
      var i = {
        padding: 0,
        margin: 0,
        textAlign: a === "horizontal" ? s : "left"
      };
      return /* @__PURE__ */ I.createElement("ul", {
        className: "recharts-default-legend",
        style: i
      }, this.renderItems());
    }
  }]), t;
}(ic);
Ma(Md, "displayName", "Legend");
Ma(Md, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var DO = hc;
function AO() {
  this.__data__ = new DO(), this.size = 0;
}
var RO = AO;
function IO(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
var LO = IO;
function FO(e) {
  return this.__data__.get(e);
}
var BO = FO;
function VO(e) {
  return this.__data__.has(e);
}
var zO = VO, WO = hc, UO = Pd, HO = Od, KO = 200;
function GO(e, t) {
  var n = this.__data__;
  if (n instanceof WO) {
    var r = n.__data__;
    if (!UO || r.length < KO - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new HO(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
var YO = GO, qO = hc, ZO = RO, XO = LO, QO = BO, JO = zO, eT = YO;
function Xo(e) {
  var t = this.__data__ = new qO(e);
  this.size = t.size;
}
Xo.prototype.clear = ZO;
Xo.prototype.delete = XO;
Xo.prototype.get = QO;
Xo.prototype.has = JO;
Xo.prototype.set = eT;
var wg = Xo, tT = "__lodash_hash_undefined__";
function nT(e) {
  return this.__data__.set(e, tT), this;
}
var rT = nT;
function oT(e) {
  return this.__data__.has(e);
}
var aT = oT, sT = Od, iT = rT, cT = aT;
function Pi(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new sT(); ++t < n; )
    this.add(e[t]);
}
Pi.prototype.add = Pi.prototype.push = iT;
Pi.prototype.has = cT;
var $g = Pi;
function lT(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
var uT = lT;
function dT(e, t) {
  return e.has(t);
}
var _g = dT, fT = $g, pT = uT, hT = _g, mT = 1, vT = 2;
function gT(e, t, n, r, o, a) {
  var s = n & mT, i = e.length, c = t.length;
  if (i != c && !(s && c > i))
    return !1;
  var l = a.get(e), u = a.get(t);
  if (l && u)
    return l == t && u == e;
  var f = -1, p = !0, h = n & vT ? new fT() : void 0;
  for (a.set(e, t), a.set(t, e); ++f < i; ) {
    var m = e[f], v = t[f];
    if (r)
      var g = s ? r(v, m, f, t, e, a) : r(m, v, f, e, t, a);
    if (g !== void 0) {
      if (g)
        continue;
      p = !1;
      break;
    }
    if (h) {
      if (!pT(t, function(b, y) {
        if (!hT(h, y) && (m === b || o(m, b, n, r, a)))
          return h.push(y);
      })) {
        p = !1;
        break;
      }
    } else if (!(m === v || o(m, v, n, r, a))) {
      p = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), p;
}
var Cg = gT, bT = Vn, yT = bT.Uint8Array, xT = yT;
function wT(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
var $T = wT;
function _T(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var Dd = _T, Yp = gs, qp = xT, CT = Ed, ST = Cg, NT = $T, ET = Dd, PT = 1, OT = 2, TT = "[object Boolean]", jT = "[object Date]", kT = "[object Error]", MT = "[object Map]", DT = "[object Number]", AT = "[object RegExp]", RT = "[object Set]", IT = "[object String]", LT = "[object Symbol]", FT = "[object ArrayBuffer]", BT = "[object DataView]", Zp = Yp ? Yp.prototype : void 0, vl = Zp ? Zp.valueOf : void 0;
function VT(e, t, n, r, o, a, s) {
  switch (n) {
    case BT:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case FT:
      return !(e.byteLength != t.byteLength || !a(new qp(e), new qp(t)));
    case TT:
    case jT:
    case DT:
      return CT(+e, +t);
    case kT:
      return e.name == t.name && e.message == t.message;
    case AT:
    case IT:
      return e == t + "";
    case MT:
      var i = NT;
    case RT:
      var c = r & PT;
      if (i || (i = ET), e.size != t.size && !c)
        return !1;
      var l = s.get(e);
      if (l)
        return l == t;
      r |= OT, s.set(e, t);
      var u = ST(i(e), i(t), r, o, a, s);
      return s.delete(e), u;
    case LT:
      if (vl)
        return vl.call(e) == vl.call(t);
  }
  return !1;
}
var zT = VT;
function WT(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var Sg = WT, UT = Sg, HT = Cn;
function KT(e, t, n) {
  var r = t(e);
  return HT(e) ? r : UT(r, n(e));
}
var GT = KT;
function YT(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r; ) {
    var s = e[n];
    t(s, n, e) && (a[o++] = s);
  }
  return a;
}
var qT = YT;
function ZT() {
  return [];
}
var XT = ZT, QT = qT, JT = XT, ej = Object.prototype, tj = ej.propertyIsEnumerable, Xp = Object.getOwnPropertySymbols, nj = Xp ? function(e) {
  return e == null ? [] : (e = Object(e), QT(Xp(e), function(t) {
    return tj.call(e, t);
  }));
} : JT, rj = nj;
function oj(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var aj = oj, sj = ao, ij = so, cj = "[object Arguments]";
function lj(e) {
  return ij(e) && sj(e) == cj;
}
var uj = lj, Qp = uj, dj = so, Ng = Object.prototype, fj = Ng.hasOwnProperty, pj = Ng.propertyIsEnumerable, hj = Qp(/* @__PURE__ */ function() {
  return arguments;
}()) ? Qp : function(e) {
  return dj(e) && fj.call(e, "callee") && !pj.call(e, "callee");
}, Ad = hj, Oi = { exports: {} };
function mj() {
  return !1;
}
var vj = mj;
Oi.exports;
(function(e, t) {
  var n = Vn, r = vj, o = t && !t.nodeType && t, a = o && !0 && e && !e.nodeType && e, s = a && a.exports === o, i = s ? n.Buffer : void 0, c = i ? i.isBuffer : void 0, l = c || r;
  e.exports = l;
})(Oi, Oi.exports);
var Eg = Oi.exports, gj = 9007199254740991, bj = /^(?:0|[1-9]\d*)$/;
function yj(e, t) {
  var n = typeof e;
  return t = t ?? gj, !!t && (n == "number" || n != "symbol" && bj.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Rd = yj, xj = 9007199254740991;
function wj(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= xj;
}
var Id = wj, $j = ao, _j = Id, Cj = so, Sj = "[object Arguments]", Nj = "[object Array]", Ej = "[object Boolean]", Pj = "[object Date]", Oj = "[object Error]", Tj = "[object Function]", jj = "[object Map]", kj = "[object Number]", Mj = "[object Object]", Dj = "[object RegExp]", Aj = "[object Set]", Rj = "[object String]", Ij = "[object WeakMap]", Lj = "[object ArrayBuffer]", Fj = "[object DataView]", Bj = "[object Float32Array]", Vj = "[object Float64Array]", zj = "[object Int8Array]", Wj = "[object Int16Array]", Uj = "[object Int32Array]", Hj = "[object Uint8Array]", Kj = "[object Uint8ClampedArray]", Gj = "[object Uint16Array]", Yj = "[object Uint32Array]", it = {};
it[Bj] = it[Vj] = it[zj] = it[Wj] = it[Uj] = it[Hj] = it[Kj] = it[Gj] = it[Yj] = !0;
it[Sj] = it[Nj] = it[Lj] = it[Ej] = it[Fj] = it[Pj] = it[Oj] = it[Tj] = it[jj] = it[kj] = it[Mj] = it[Dj] = it[Aj] = it[Rj] = it[Ij] = !1;
function qj(e) {
  return Cj(e) && _j(e.length) && !!it[$j(e)];
}
var Zj = qj;
function Xj(e) {
  return function(t) {
    return e(t);
  };
}
var Pg = Xj, Ti = { exports: {} };
Ti.exports;
(function(e, t) {
  var n = Kv, r = t && !t.nodeType && t, o = r && !0 && e && !e.nodeType && e, a = o && o.exports === r, s = a && n.process, i = function() {
    try {
      var c = o && o.require && o.require("util").types;
      return c || s && s.binding && s.binding("util");
    } catch {
    }
  }();
  e.exports = i;
})(Ti, Ti.exports);
var Qj = Ti.exports, Jj = Zj, e5 = Pg, Jp = Qj, eh = Jp && Jp.isTypedArray, t5 = eh ? e5(eh) : Jj, Og = t5, n5 = aj, r5 = Ad, o5 = Cn, a5 = Eg, s5 = Rd, i5 = Og, c5 = Object.prototype, l5 = c5.hasOwnProperty;
function u5(e, t) {
  var n = o5(e), r = !n && r5(e), o = !n && !r && a5(e), a = !n && !r && !o && i5(e), s = n || r || o || a, i = s ? n5(e.length, String) : [], c = i.length;
  for (var l in e)
    (t || l5.call(e, l)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    s5(l, c))) && i.push(l);
  return i;
}
var d5 = u5, f5 = Object.prototype;
function p5(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || f5;
  return e === n;
}
var h5 = p5;
function m5(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var v5 = m5, g5 = v5, b5 = g5(Object.keys, Object), y5 = b5, x5 = h5, w5 = y5, $5 = Object.prototype, _5 = $5.hasOwnProperty;
function C5(e) {
  if (!x5(e))
    return w5(e);
  var t = [];
  for (var n in Object(e))
    _5.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
var S5 = C5, N5 = Nd, E5 = Id;
function P5(e) {
  return e != null && E5(e.length) && !N5(e);
}
var bc = P5, O5 = d5, T5 = S5, j5 = bc;
function k5(e) {
  return j5(e) ? O5(e) : T5(e);
}
var Ld = k5, M5 = GT, D5 = rj, A5 = Ld;
function R5(e) {
  return M5(e, A5, D5);
}
var I5 = R5, th = I5, L5 = 1, F5 = Object.prototype, B5 = F5.hasOwnProperty;
function V5(e, t, n, r, o, a) {
  var s = n & L5, i = th(e), c = i.length, l = th(t), u = l.length;
  if (c != u && !s)
    return !1;
  for (var f = c; f--; ) {
    var p = i[f];
    if (!(s ? p in t : B5.call(t, p)))
      return !1;
  }
  var h = a.get(e), m = a.get(t);
  if (h && m)
    return h == t && m == e;
  var v = !0;
  a.set(e, t), a.set(t, e);
  for (var g = s; ++f < c; ) {
    p = i[f];
    var b = e[p], y = t[p];
    if (r)
      var x = s ? r(y, b, p, t, e, a) : r(b, y, p, e, t, a);
    if (!(x === void 0 ? b === y || o(b, y, n, r, a) : x)) {
      v = !1;
      break;
    }
    g || (g = p == "constructor");
  }
  if (v && !g) {
    var _ = e.constructor, w = t.constructor;
    _ != w && "constructor" in e && "constructor" in t && !(typeof _ == "function" && _ instanceof _ && typeof w == "function" && w instanceof w) && (v = !1);
  }
  return a.delete(e), a.delete(t), v;
}
var z5 = V5, W5 = io, U5 = Vn, H5 = W5(U5, "DataView"), K5 = H5, G5 = io, Y5 = Vn, q5 = G5(Y5, "Promise"), Z5 = q5, X5 = io, Q5 = Vn, J5 = X5(Q5, "Set"), Tg = J5, ek = io, tk = Vn, nk = ek(tk, "WeakMap"), rk = nk, hu = K5, mu = Pd, vu = Z5, gu = Tg, bu = rk, jg = ao, Qo = qv, nh = "[object Map]", ok = "[object Object]", rh = "[object Promise]", oh = "[object Set]", ah = "[object WeakMap]", sh = "[object DataView]", ak = Qo(hu), sk = Qo(mu), ik = Qo(vu), ck = Qo(gu), lk = Qo(bu), Br = jg;
(hu && Br(new hu(new ArrayBuffer(1))) != sh || mu && Br(new mu()) != nh || vu && Br(vu.resolve()) != rh || gu && Br(new gu()) != oh || bu && Br(new bu()) != ah) && (Br = function(e) {
  var t = jg(e), n = t == ok ? e.constructor : void 0, r = n ? Qo(n) : "";
  if (r)
    switch (r) {
      case ak:
        return sh;
      case sk:
        return nh;
      case ik:
        return rh;
      case ck:
        return oh;
      case lk:
        return ah;
    }
  return t;
});
var uk = Br, gl = wg, dk = Cg, fk = zT, pk = z5, ih = uk, ch = Cn, lh = Eg, hk = Og, mk = 1, uh = "[object Arguments]", dh = "[object Array]", zs = "[object Object]", vk = Object.prototype, fh = vk.hasOwnProperty;
function gk(e, t, n, r, o, a) {
  var s = ch(e), i = ch(t), c = s ? dh : ih(e), l = i ? dh : ih(t);
  c = c == uh ? zs : c, l = l == uh ? zs : l;
  var u = c == zs, f = l == zs, p = c == l;
  if (p && lh(e)) {
    if (!lh(t))
      return !1;
    s = !0, u = !1;
  }
  if (p && !u)
    return a || (a = new gl()), s || hk(e) ? dk(e, t, n, r, o, a) : fk(e, t, c, n, r, o, a);
  if (!(n & mk)) {
    var h = u && fh.call(e, "__wrapped__"), m = f && fh.call(t, "__wrapped__");
    if (h || m) {
      var v = h ? e.value() : e, g = m ? t.value() : t;
      return a || (a = new gl()), o(v, g, n, r, a);
    }
  }
  return p ? (a || (a = new gl()), pk(e, t, n, r, o, a)) : !1;
}
var bk = gk, yk = bk, ph = so;
function kg(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !ph(e) && !ph(t) ? e !== e && t !== t : yk(e, t, n, r, kg, o);
}
var Mg = kg, xk = wg, wk = Mg, $k = 1, _k = 2;
function Ck(e, t, n, r) {
  var o = n.length, a = o, s = !r;
  if (e == null)
    return !a;
  for (e = Object(e); o--; ) {
    var i = n[o];
    if (s && i[2] ? i[1] !== e[i[0]] : !(i[0] in e))
      return !1;
  }
  for (; ++o < a; ) {
    i = n[o];
    var c = i[0], l = e[c], u = i[1];
    if (s && i[2]) {
      if (l === void 0 && !(c in e))
        return !1;
    } else {
      var f = new xk();
      if (r)
        var p = r(l, u, c, e, t, f);
      if (!(p === void 0 ? wk(u, l, $k | _k, r, f) : p))
        return !1;
    }
  }
  return !0;
}
var Sk = Ck, Nk = Or;
function Ek(e) {
  return e === e && !Nk(e);
}
var Dg = Ek, Pk = Dg, Ok = Ld;
function Tk(e) {
  for (var t = Ok(e), n = t.length; n--; ) {
    var r = t[n], o = e[r];
    t[n] = [r, o, Pk(o)];
  }
  return t;
}
var jk = Tk;
function kk(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
var Ag = kk, Mk = Sk, Dk = jk, Ak = Ag;
function Rk(e) {
  var t = Dk(e);
  return t.length == 1 && t[0][2] ? Ak(t[0][0], t[0][1]) : function(n) {
    return n === e || Mk(n, e, t);
  };
}
var Ik = Rk;
function Lk(e, t) {
  return e != null && t in Object(e);
}
var Fk = Lk, Bk = eg, Vk = Ad, zk = Cn, Wk = Rd, Uk = Id, Hk = vc;
function Kk(e, t, n) {
  t = Bk(t, e);
  for (var r = -1, o = t.length, a = !1; ++r < o; ) {
    var s = Hk(t[r]);
    if (!(a = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return a || ++r != o ? a : (o = e == null ? 0 : e.length, !!o && Uk(o) && Wk(s, o) && (zk(e) || Vk(e)));
}
var Gk = Kk, Yk = Fk, qk = Gk;
function Zk(e, t) {
  return e != null && qk(e, t, Yk);
}
var Xk = Zk, Qk = Mg, Jk = jE, eM = Xk, tM = Sd, nM = Dg, rM = Ag, oM = vc, aM = 1, sM = 2;
function iM(e, t) {
  return tM(e) && nM(t) ? rM(oM(e), t) : function(n) {
    var r = Jk(n, e);
    return r === void 0 && r === t ? eM(n, e) : Qk(t, r, aM | sM);
  };
}
var cM = iM;
function lM(e) {
  return e;
}
var yc = lM;
function uM(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var dM = uM, fM = jd;
function pM(e) {
  return function(t) {
    return fM(t, e);
  };
}
var hM = pM, mM = dM, vM = hM, gM = Sd, bM = vc;
function yM(e) {
  return gM(e) ? mM(bM(e)) : vM(e);
}
var xM = yM, wM = Ik, $M = cM, _M = yc, CM = Cn, SM = xM;
function NM(e) {
  return typeof e == "function" ? e : e == null ? _M : typeof e == "object" ? CM(e) ? $M(e[0], e[1]) : wM(e) : SM(e);
}
var Rg = NM;
function EM(e, t, n, r) {
  for (var o = e.length, a = n + (r ? 1 : -1); r ? a-- : ++a < o; )
    if (t(e[a], a, e))
      return a;
  return -1;
}
var PM = EM;
function OM(e) {
  return e !== e;
}
var TM = OM;
function jM(e, t, n) {
  for (var r = n - 1, o = e.length; ++r < o; )
    if (e[r] === t)
      return r;
  return -1;
}
var kM = jM, MM = PM, DM = TM, AM = kM;
function RM(e, t, n) {
  return t === t ? AM(e, t, n) : MM(e, DM, n);
}
var IM = RM, LM = IM;
function FM(e, t) {
  var n = e == null ? 0 : e.length;
  return !!n && LM(e, t, 0) > -1;
}
var BM = FM;
function VM(e, t, n) {
  for (var r = -1, o = e == null ? 0 : e.length; ++r < o; )
    if (n(t, e[r]))
      return !0;
  return !1;
}
var zM = VM;
function WM() {
}
var UM = WM, bl = Tg, HM = UM, KM = Dd, GM = 1 / 0, YM = bl && 1 / KM(new bl([, -0]))[1] == GM ? function(e) {
  return new bl(e);
} : HM, qM = YM, ZM = $g, XM = BM, QM = zM, JM = _g, e3 = qM, t3 = Dd, n3 = 200;
function r3(e, t, n) {
  var r = -1, o = XM, a = e.length, s = !0, i = [], c = i;
  if (n)
    s = !1, o = QM;
  else if (a >= n3) {
    var l = t ? null : e3(e);
    if (l)
      return t3(l);
    s = !1, o = JM, c = new ZM();
  } else
    c = t ? [] : i;
  e:
    for (; ++r < a; ) {
      var u = e[r], f = t ? t(u) : u;
      if (u = n || u !== 0 ? u : 0, s && f === f) {
        for (var p = c.length; p--; )
          if (c[p] === f)
            continue e;
        t && c.push(f), i.push(u);
      } else
        o(c, f, n) || (c !== i && c.push(f), i.push(u));
    }
  return i;
}
var o3 = r3, a3 = Rg, s3 = o3;
function i3(e, t) {
  return e && e.length ? s3(e, a3(t)) : [];
}
var c3 = i3;
const hh = /* @__PURE__ */ _n(c3);
function Ig(e, t, n) {
  return t === !0 ? hh(e, n) : _i(t) ? hh(e, t) : e;
}
function Ro(e) {
  "@babel/helpers - typeof";
  return Ro = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ro(e);
}
var l3 = ["ref"];
function mh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Rr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? mh(Object(n), !0).forEach(function(r) {
      xc(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : mh(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function u3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function vh(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Bg(r.key), r);
  }
}
function d3(e, t, n) {
  return t && vh(e.prototype, t), n && vh(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function f3(e, t, n) {
  return t = ji(t), p3(e, Lg() ? Reflect.construct(t, n || [], ji(e).constructor) : t.apply(e, n));
}
function p3(e, t) {
  if (t && (Ro(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Fg(e);
}
function Lg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Lg = function() {
    return !!e;
  })();
}
function ji(e) {
  return ji = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ji(e);
}
function Fg(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function h3(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && yu(e, t);
}
function yu(e, t) {
  return yu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, yu(e, t);
}
function xc(e, t, n) {
  return t = Bg(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Bg(e) {
  var t = m3(e, "string");
  return Ro(t) == "symbol" ? t : String(t);
}
function m3(e, t) {
  if (Ro(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Ro(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function v3(e, t) {
  if (e == null)
    return {};
  var n = g3(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function g3(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function b3(e) {
  return e.value;
}
function y3(e, t) {
  if (/* @__PURE__ */ I.isValidElement(e))
    return /* @__PURE__ */ I.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ I.createElement(e, t);
  t.ref;
  var n = v3(t, l3);
  return /* @__PURE__ */ I.createElement(Md, n);
}
var gh = 1, Fd = /* @__PURE__ */ function(e) {
  h3(t, e);
  function t() {
    var n;
    u3(this, t);
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
      o[a] = arguments[a];
    return n = f3(this, t, [].concat(o)), xc(Fg(n), "lastBoundingBox", {
      width: -1,
      height: -1
    }), n;
  }
  return d3(t, [{
    key: "componentDidMount",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "getBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var r = this.wrapperNode.getBoundingClientRect();
        return r.height = this.wrapperNode.offsetHeight, r.width = this.wrapperNode.offsetWidth, r;
      }
      return null;
    }
  }, {
    key: "updateBBox",
    value: function() {
      var r = this.props.onBBoxUpdate, o = this.getBBox();
      o ? (Math.abs(o.width - this.lastBoundingBox.width) > gh || Math.abs(o.height - this.lastBoundingBox.height) > gh) && (this.lastBoundingBox.width = o.width, this.lastBoundingBox.height = o.height, r && r(o)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, r && r(null));
    }
  }, {
    key: "getBBoxSnapshot",
    value: function() {
      return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? Rr({}, this.lastBoundingBox) : {
        width: 0,
        height: 0
      };
    }
  }, {
    key: "getDefaultPosition",
    value: function(r) {
      var o = this.props, a = o.layout, s = o.align, i = o.verticalAlign, c = o.margin, l = o.chartWidth, u = o.chartHeight, f, p;
      if (!r || (r.left === void 0 || r.left === null) && (r.right === void 0 || r.right === null))
        if (s === "center" && a === "vertical") {
          var h = this.getBBoxSnapshot();
          f = {
            left: ((l || 0) - h.width) / 2
          };
        } else
          f = s === "right" ? {
            right: c && c.right || 0
          } : {
            left: c && c.left || 0
          };
      if (!r || (r.top === void 0 || r.top === null) && (r.bottom === void 0 || r.bottom === null))
        if (i === "middle") {
          var m = this.getBBoxSnapshot();
          p = {
            top: ((u || 0) - m.height) / 2
          };
        } else
          p = i === "bottom" ? {
            bottom: c && c.bottom || 0
          } : {
            top: c && c.top || 0
          };
      return Rr(Rr({}, f), p);
    }
  }, {
    key: "render",
    value: function() {
      var r = this, o = this.props, a = o.content, s = o.width, i = o.height, c = o.wrapperStyle, l = o.payloadUniqBy, u = o.payload, f = Rr(Rr({
        position: "absolute",
        width: s || "auto",
        height: i || "auto"
      }, this.getDefaultPosition(c)), c);
      return /* @__PURE__ */ I.createElement("div", {
        className: "recharts-legend-wrapper",
        style: f,
        ref: function(h) {
          r.wrapperNode = h;
        }
      }, y3(a, Rr(Rr({}, this.props), {}, {
        payload: Ig(u, l, b3)
      })));
    }
  }], [{
    key: "getWithHeight",
    value: function(r, o) {
      var a = r.props.layout;
      return a === "vertical" && cn(r.props.height) ? {
        height: r.props.height
      } : a === "horizontal" ? {
        width: r.props.width || o
      } : null;
    }
  }]), t;
}(ic);
xc(Fd, "displayName", "Legend");
xc(Fd, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var bh = gs, x3 = Ad, w3 = Cn, yh = bh ? bh.isConcatSpreadable : void 0;
function $3(e) {
  return w3(e) || x3(e) || !!(yh && e && e[yh]);
}
var _3 = $3, C3 = Sg, S3 = _3;
function Vg(e, t, n, r, o) {
  var a = -1, s = e.length;
  for (n || (n = S3), o || (o = []); ++a < s; ) {
    var i = e[a];
    t > 0 && n(i) ? t > 1 ? Vg(i, t - 1, n, r, o) : C3(o, i) : r || (o[o.length] = i);
  }
  return o;
}
var N3 = Vg;
function E3(e) {
  return function(t, n, r) {
    for (var o = -1, a = Object(t), s = r(t), i = s.length; i--; ) {
      var c = s[e ? i : ++o];
      if (n(a[c], c, a) === !1)
        break;
    }
    return t;
  };
}
var P3 = E3, O3 = P3, T3 = O3(), j3 = T3, k3 = j3, M3 = Ld;
function D3(e, t) {
  return e && k3(e, t, M3);
}
var A3 = D3, R3 = bc;
function I3(e, t) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!R3(n))
      return e(n, r);
    for (var o = n.length, a = t ? o : -1, s = Object(n); (t ? a-- : ++a < o) && r(s[a], a, s) !== !1; )
      ;
    return n;
  };
}
var L3 = I3, F3 = A3, B3 = L3, V3 = B3(F3), z3 = V3, W3 = z3, U3 = bc;
function H3(e, t) {
  var n = -1, r = U3(e) ? Array(e.length) : [];
  return W3(e, function(o, a, s) {
    r[++n] = t(o, a, s);
  }), r;
}
var K3 = H3;
function G3(e, t) {
  var n = e.length;
  for (e.sort(t); n--; )
    e[n] = e[n].value;
  return e;
}
var Y3 = G3, xh = bs;
function q3(e, t) {
  if (e !== t) {
    var n = e !== void 0, r = e === null, o = e === e, a = xh(e), s = t !== void 0, i = t === null, c = t === t, l = xh(t);
    if (!i && !l && !a && e > t || a && s && c && !i && !l || r && s && c || !n && c || !o)
      return 1;
    if (!r && !a && !l && e < t || l && n && o && !r && !a || i && n && o || !s && o || !c)
      return -1;
  }
  return 0;
}
var Z3 = q3, X3 = Z3;
function Q3(e, t, n) {
  for (var r = -1, o = e.criteria, a = t.criteria, s = o.length, i = n.length; ++r < s; ) {
    var c = X3(o[r], a[r]);
    if (c) {
      if (r >= i)
        return c;
      var l = n[r];
      return c * (l == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
var J3 = Q3, yl = Xv, e6 = jd, t6 = Rg, n6 = K3, r6 = Y3, o6 = Pg, a6 = J3, s6 = yc, i6 = Cn;
function c6(e, t, n) {
  t.length ? t = yl(t, function(a) {
    return i6(a) ? function(s) {
      return e6(s, a.length === 1 ? a[0] : a);
    } : a;
  }) : t = [s6];
  var r = -1;
  t = yl(t, o6(t6));
  var o = n6(e, function(a, s, i) {
    var c = yl(t, function(l) {
      return l(a);
    });
    return { criteria: c, index: ++r, value: a };
  });
  return r6(o, function(a, s) {
    return a6(a, s, n);
  });
}
var l6 = c6;
function u6(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
var d6 = u6, f6 = d6, wh = Math.max;
function p6(e, t, n) {
  return t = wh(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = wh(r.length - t, 0), s = Array(a); ++o < a; )
      s[o] = r[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = r[o];
    return i[t] = n(s), f6(e, this, i);
  };
}
var h6 = p6;
function m6(e) {
  return function() {
    return e;
  };
}
var v6 = m6, g6 = io, b6 = function() {
  try {
    var e = g6(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), y6 = b6, x6 = v6, $h = y6, w6 = yc, $6 = $h ? function(e, t) {
  return $h(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: x6(t),
    writable: !0
  });
} : w6, _6 = $6, C6 = 800, S6 = 16, N6 = Date.now;
function E6(e) {
  var t = 0, n = 0;
  return function() {
    var r = N6(), o = S6 - (r - n);
    if (n = r, o > 0) {
      if (++t >= C6)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var P6 = E6, O6 = _6, T6 = P6, j6 = T6(O6), k6 = j6, M6 = yc, D6 = h6, A6 = k6;
function R6(e, t) {
  return A6(D6(e, t, M6), e + "");
}
var I6 = R6, L6 = Ed, F6 = bc, B6 = Rd, V6 = Or;
function z6(e, t, n) {
  if (!V6(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? F6(n) && B6(t, n.length) : r == "string" && t in n) ? L6(n[t], e) : !1;
}
var W6 = z6, U6 = N3, H6 = l6, K6 = I6, _h = W6, G6 = K6(function(e, t) {
  if (e == null)
    return [];
  var n = t.length;
  return n > 1 && _h(e, t[0], t[1]) ? t = [] : n > 2 && _h(t[0], t[1], t[2]) && (t = [t[0]]), H6(e, U6(t, 1), []);
}), Y6 = G6;
const q6 = /* @__PURE__ */ _n(Y6);
function Da(e) {
  "@babel/helpers - typeof";
  return Da = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Da(e);
}
function xu() {
  return xu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, xu.apply(this, arguments);
}
function Z6(e, t) {
  return eD(e) || J6(e, t) || Q6(e, t) || X6();
}
function X6() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Q6(e, t) {
  if (e) {
    if (typeof e == "string")
      return Ch(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Ch(e, t);
  }
}
function Ch(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function J6(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, a, s, i = [], c = !0, l = !1;
    try {
      if (a = (n = n.call(e)).next, t !== 0)
        for (; !(c = (r = a.call(n)).done) && (i.push(r.value), i.length !== t); c = !0)
          ;
    } catch (u) {
      l = !0, o = u;
    } finally {
      try {
        if (!c && n.return != null && (s = n.return(), Object(s) !== s))
          return;
      } finally {
        if (l)
          throw o;
      }
    }
    return i;
  }
}
function eD(e) {
  if (Array.isArray(e))
    return e;
}
function Sh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function xl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sh(Object(n), !0).forEach(function(r) {
      tD(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Sh(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function tD(e, t, n) {
  return t = nD(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function nD(e) {
  var t = rD(e, "string");
  return Da(t) == "symbol" ? t : String(t);
}
function rD(e, t) {
  if (Da(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Da(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function oD(e) {
  return Array.isArray(e) && Ci(e[0]) && Ci(e[1]) ? e.join(" ~ ") : e;
}
var aD = function(t) {
  var n = t.separator, r = n === void 0 ? " : " : n, o = t.contentStyle, a = o === void 0 ? {} : o, s = t.itemStyle, i = s === void 0 ? {} : s, c = t.labelStyle, l = c === void 0 ? {} : c, u = t.payload, f = t.formatter, p = t.itemSorter, h = t.wrapperClassName, m = t.labelClassName, v = t.label, g = t.labelFormatter, b = t.accessibilityLayer, y = b === void 0 ? !1 : b, x = function() {
    if (u && u.length) {
      var R = {
        padding: 0,
        margin: 0
      }, W = (p ? q6(u, p) : u).map(function(V, E) {
        if (V.type === "none")
          return null;
        var B = xl({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: V.color || "#000"
        }, i), T = V.formatter || f || oD, U = V.value, G = V.name, Q = U, oe = G;
        if (T && Q != null && oe != null) {
          var H = T(U, G, V, E, u);
          if (Array.isArray(H)) {
            var le = Z6(H, 2);
            Q = le[0], oe = le[1];
          } else
            Q = H;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ I.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(E),
            style: B
          }, Ci(oe) ? /* @__PURE__ */ I.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, oe) : null, Ci(oe) ? /* @__PURE__ */ I.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, r) : null, /* @__PURE__ */ I.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, Q), /* @__PURE__ */ I.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, V.unit || ""))
        );
      });
      return /* @__PURE__ */ I.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: R
      }, W);
    }
    return null;
  }, _ = xl({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, a), w = xl({
    margin: 0
  }, l), N = !DE(v), S = N ? v : "", D = br("recharts-default-tooltip", h), P = br("recharts-tooltip-label", m);
  N && g && u !== void 0 && u !== null && (S = g(v, u));
  var z = y ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ I.createElement("div", xu({
    className: D,
    style: _
  }, z), /* @__PURE__ */ I.createElement("p", {
    className: P,
    style: w
  }, /* @__PURE__ */ I.isValidElement(S) ? S : "".concat(S)), x());
};
function Aa(e) {
  "@babel/helpers - typeof";
  return Aa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Aa(e);
}
function Ws(e, t, n) {
  return t = sD(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function sD(e) {
  var t = iD(e, "string");
  return Aa(t) == "symbol" ? t : String(t);
}
function iD(e, t) {
  if (Aa(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Aa(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ya = "recharts-tooltip-wrapper", cD = {
  visibility: "hidden"
};
function lD(e) {
  var t = e.coordinate, n = e.translateX, r = e.translateY;
  return br(ya, Ws(Ws(Ws(Ws({}, "".concat(ya, "-right"), cn(n) && t && cn(t.x) && n >= t.x), "".concat(ya, "-left"), cn(n) && t && cn(t.x) && n < t.x), "".concat(ya, "-bottom"), cn(r) && t && cn(t.y) && r >= t.y), "".concat(ya, "-top"), cn(r) && t && cn(t.y) && r < t.y));
}
function Nh(e) {
  var t = e.allowEscapeViewBox, n = e.coordinate, r = e.key, o = e.offsetTopLeft, a = e.position, s = e.reverseDirection, i = e.tooltipDimension, c = e.viewBox, l = e.viewBoxDimension;
  if (a && cn(a[r]))
    return a[r];
  var u = n[r] - i - o, f = n[r] + o;
  if (t[r])
    return s[r] ? u : f;
  if (s[r]) {
    var p = u, h = c[r];
    return p < h ? Math.max(f, c[r]) : Math.max(u, c[r]);
  }
  var m = f + i, v = c[r] + l;
  return m > v ? Math.max(u, c[r]) : Math.max(f, c[r]);
}
function uD(e) {
  var t = e.translateX, n = e.translateY, r = e.useTranslate3d;
  return {
    transform: r ? "translate3d(".concat(t, "px, ").concat(n, "px, 0)") : "translate(".concat(t, "px, ").concat(n, "px)")
  };
}
function dD(e) {
  var t = e.allowEscapeViewBox, n = e.coordinate, r = e.offsetTopLeft, o = e.position, a = e.reverseDirection, s = e.tooltipBox, i = e.useTranslate3d, c = e.viewBox, l, u, f;
  return s.height > 0 && s.width > 0 && n ? (u = Nh({
    allowEscapeViewBox: t,
    coordinate: n,
    key: "x",
    offsetTopLeft: r,
    position: o,
    reverseDirection: a,
    tooltipDimension: s.width,
    viewBox: c,
    viewBoxDimension: c.width
  }), f = Nh({
    allowEscapeViewBox: t,
    coordinate: n,
    key: "y",
    offsetTopLeft: r,
    position: o,
    reverseDirection: a,
    tooltipDimension: s.height,
    viewBox: c,
    viewBoxDimension: c.height
  }), l = uD({
    translateX: u,
    translateY: f,
    useTranslate3d: i
  })) : l = cD, {
    cssProperties: l,
    cssClasses: lD({
      translateX: u,
      translateY: f,
      coordinate: n
    })
  };
}
function Io(e) {
  "@babel/helpers - typeof";
  return Io = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Io(e);
}
function Eh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ph(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Eh(Object(n), !0).forEach(function(r) {
      _u(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Eh(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function fD(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function pD(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Wg(r.key), r);
  }
}
function hD(e, t, n) {
  return t && pD(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function mD(e, t, n) {
  return t = ki(t), vD(e, zg() ? Reflect.construct(t, n || [], ki(e).constructor) : t.apply(e, n));
}
function vD(e, t) {
  if (t && (Io(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return wu(e);
}
function zg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (zg = function() {
    return !!e;
  })();
}
function ki(e) {
  return ki = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ki(e);
}
function wu(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function gD(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && $u(e, t);
}
function $u(e, t) {
  return $u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, $u(e, t);
}
function _u(e, t, n) {
  return t = Wg(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Wg(e) {
  var t = bD(e, "string");
  return Io(t) == "symbol" ? t : String(t);
}
function bD(e, t) {
  if (Io(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Io(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Oh = 1, yD = /* @__PURE__ */ function(e) {
  gD(t, e);
  function t() {
    var n;
    fD(this, t);
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
      o[a] = arguments[a];
    return n = mD(this, t, [].concat(o)), _u(wu(n), "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), _u(wu(n), "handleKeyDown", function(s) {
      if (s.key === "Escape") {
        var i, c, l, u;
        n.setState({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (i = (c = n.props.coordinate) === null || c === void 0 ? void 0 : c.x) !== null && i !== void 0 ? i : 0,
            y: (l = (u = n.props.coordinate) === null || u === void 0 ? void 0 : u.y) !== null && l !== void 0 ? l : 0
          }
        });
      }
    }), n;
  }
  return hD(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var r = this.wrapperNode.getBoundingClientRect();
        (Math.abs(r.width - this.state.lastBoundingBox.width) > Oh || Math.abs(r.height - this.state.lastBoundingBox.height) > Oh) && this.setState({
          lastBoundingBox: {
            width: r.width,
            height: r.height
          }
        });
      } else
        (this.state.lastBoundingBox.width !== -1 || this.state.lastBoundingBox.height !== -1) && this.setState({
          lastBoundingBox: {
            width: -1,
            height: -1
          }
        });
    }
  }, {
    key: "componentDidMount",
    value: function() {
      document.addEventListener("keydown", this.handleKeyDown), this.updateBBox();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      document.removeEventListener("keydown", this.handleKeyDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      var r, o;
      this.props.active && this.updateBBox(), this.state.dismissed && (((r = this.props.coordinate) === null || r === void 0 ? void 0 : r.x) !== this.state.dismissedAtCoordinate.x || ((o = this.props.coordinate) === null || o === void 0 ? void 0 : o.y) !== this.state.dismissedAtCoordinate.y) && (this.state.dismissed = !1);
    }
  }, {
    key: "render",
    value: function() {
      var r = this, o = this.props, a = o.active, s = o.allowEscapeViewBox, i = o.animationDuration, c = o.animationEasing, l = o.children, u = o.coordinate, f = o.hasPayload, p = o.isAnimationActive, h = o.offset, m = o.position, v = o.reverseDirection, g = o.useTranslate3d, b = o.viewBox, y = o.wrapperStyle, x = dD({
        allowEscapeViewBox: s,
        coordinate: u,
        offsetTopLeft: h,
        position: m,
        reverseDirection: v,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: g,
        viewBox: b
      }), _ = x.cssClasses, w = x.cssProperties, N = Ph(Ph({
        transition: p && a ? "transform ".concat(i, "ms ").concat(c) : void 0
      }, w), {}, {
        pointerEvents: "none",
        visibility: !this.state.dismissed && a && f ? "visible" : "hidden",
        position: "absolute",
        top: 0,
        left: 0
      }, y);
      return (
        // This element allow listening to the `Escape` key.
        // See https://github.com/recharts/recharts/pull/2925
        /* @__PURE__ */ I.createElement("div", {
          tabIndex: -1,
          className: _,
          style: N,
          ref: function(D) {
            r.wrapperNode = D;
          }
        }, l)
      );
    }
  }]), t;
}(ic), xD = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, li = {
  isSsr: xD(),
  get: function(t) {
    return li[t];
  },
  set: function(t, n) {
    if (typeof t == "string")
      li[t] = n;
    else {
      var r = Object.keys(t);
      r && r.length && r.forEach(function(o) {
        li[o] = t[o];
      });
    }
  }
};
function Lo(e) {
  "@babel/helpers - typeof";
  return Lo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Lo(e);
}
function Th(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function jh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Th(Object(n), !0).forEach(function(r) {
      Bd(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Th(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function wD(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function $D(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Hg(r.key), r);
  }
}
function _D(e, t, n) {
  return t && $D(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function CD(e, t, n) {
  return t = Mi(t), SD(e, Ug() ? Reflect.construct(t, n || [], Mi(e).constructor) : t.apply(e, n));
}
function SD(e, t) {
  if (t && (Lo(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ND(e);
}
function ND(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ug() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ug = function() {
    return !!e;
  })();
}
function Mi(e) {
  return Mi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Mi(e);
}
function ED(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Cu(e, t);
}
function Cu(e, t) {
  return Cu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Cu(e, t);
}
function Bd(e, t, n) {
  return t = Hg(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Hg(e) {
  var t = PD(e, "string");
  return Lo(t) == "symbol" ? t : String(t);
}
function PD(e, t) {
  if (Lo(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Lo(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function OD(e) {
  return e.dataKey;
}
function TD(e, t) {
  return /* @__PURE__ */ I.isValidElement(e) ? /* @__PURE__ */ I.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ I.createElement(e, t) : /* @__PURE__ */ I.createElement(aD, t);
}
var Vd = /* @__PURE__ */ function(e) {
  ED(t, e);
  function t() {
    return wD(this, t), CD(this, t, arguments);
  }
  return _D(t, [{
    key: "render",
    value: function() {
      var r = this, o = this.props, a = o.active, s = o.allowEscapeViewBox, i = o.animationDuration, c = o.animationEasing, l = o.content, u = o.coordinate, f = o.filterNull, p = o.isAnimationActive, h = o.offset, m = o.payload, v = o.payloadUniqBy, g = o.position, b = o.reverseDirection, y = o.useTranslate3d, x = o.viewBox, _ = o.wrapperStyle, w = m ?? [];
      f && w.length && (w = Ig(m.filter(function(S) {
        return S.value != null && (S.hide !== !0 || r.props.includeHidden);
      }), v, OD));
      var N = w.length > 0;
      return /* @__PURE__ */ I.createElement(yD, {
        allowEscapeViewBox: s,
        animationDuration: i,
        animationEasing: c,
        isAnimationActive: p,
        active: a,
        coordinate: u,
        hasPayload: N,
        offset: h,
        position: g,
        reverseDirection: b,
        useTranslate3d: y,
        viewBox: x,
        wrapperStyle: _
      }, TD(l, jh(jh({}, this.props), {}, {
        payload: w
      })));
    }
  }]), t;
}(ic);
Bd(Vd, "displayName", "Tooltip");
Bd(Vd, "defaultProps", {
  accessibilityLayer: !1,
  allowEscapeViewBox: {
    x: !1,
    y: !1
  },
  animationDuration: 400,
  animationEasing: "ease",
  contentStyle: {},
  coordinate: {
    x: 0,
    y: 0
  },
  cursor: !0,
  cursorStyle: {},
  filterNull: !0,
  isAnimationActive: !li.isSsr,
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: {
    x: !1,
    y: !1
  },
  separator: " : ",
  trigger: "hover",
  useTranslate3d: !1,
  viewBox: {
    x: 0,
    y: 0,
    height: 0,
    width: 0
  },
  wrapperStyle: {}
});
var jD = Vn, kD = function() {
  return jD.Date.now();
}, MD = kD, DD = /\s/;
function AD(e) {
  for (var t = e.length; t-- && DD.test(e.charAt(t)); )
    ;
  return t;
}
var RD = AD, ID = RD, LD = /^\s+/;
function FD(e) {
  return e && e.slice(0, ID(e) + 1).replace(LD, "");
}
var BD = FD, VD = BD, kh = Or, zD = bs, Mh = NaN, WD = /^[-+]0x[0-9a-f]+$/i, UD = /^0b[01]+$/i, HD = /^0o[0-7]+$/i, KD = parseInt;
function GD(e) {
  if (typeof e == "number")
    return e;
  if (zD(e))
    return Mh;
  if (kh(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = kh(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = VD(e);
  var n = UD.test(e);
  return n || HD.test(e) ? KD(e.slice(2), n ? 2 : 8) : WD.test(e) ? Mh : +e;
}
var YD = GD, qD = Or, wl = MD, Dh = YD, ZD = "Expected a function", XD = Math.max, QD = Math.min;
function JD(e, t, n) {
  var r, o, a, s, i, c, l = 0, u = !1, f = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(ZD);
  t = Dh(t) || 0, qD(n) && (u = !!n.leading, f = "maxWait" in n, a = f ? XD(Dh(n.maxWait) || 0, t) : a, p = "trailing" in n ? !!n.trailing : p);
  function h(N) {
    var S = r, D = o;
    return r = o = void 0, l = N, s = e.apply(D, S), s;
  }
  function m(N) {
    return l = N, i = setTimeout(b, t), u ? h(N) : s;
  }
  function v(N) {
    var S = N - c, D = N - l, P = t - S;
    return f ? QD(P, a - D) : P;
  }
  function g(N) {
    var S = N - c, D = N - l;
    return c === void 0 || S >= t || S < 0 || f && D >= a;
  }
  function b() {
    var N = wl();
    if (g(N))
      return y(N);
    i = setTimeout(b, v(N));
  }
  function y(N) {
    return i = void 0, p && r ? h(N) : (r = o = void 0, s);
  }
  function x() {
    i !== void 0 && clearTimeout(i), l = 0, r = c = o = i = void 0;
  }
  function _() {
    return i === void 0 ? s : y(wl());
  }
  function w() {
    var N = wl(), S = g(N);
    if (r = arguments, o = this, c = N, S) {
      if (i === void 0)
        return m(c);
      if (f)
        return clearTimeout(i), i = setTimeout(b, t), h(c);
    }
    return i === void 0 && (i = setTimeout(b, t)), s;
  }
  return w.cancel = x, w.flush = _, w;
}
var eA = JD, tA = eA, nA = Or, rA = "Expected a function";
function oA(e, t, n) {
  var r = !0, o = !0;
  if (typeof e != "function")
    throw new TypeError(rA);
  return nA(n) && (r = "leading" in n ? !!n.leading : r, o = "trailing" in n ? !!n.trailing : o), tA(e, t, {
    leading: r,
    maxWait: t,
    trailing: o
  });
}
var aA = oA;
const sA = /* @__PURE__ */ _n(aA);
function Ra(e) {
  "@babel/helpers - typeof";
  return Ra = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ra(e);
}
function Ah(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Us(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ah(Object(n), !0).forEach(function(r) {
      iA(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ah(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function iA(e, t, n) {
  return t = cA(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function cA(e) {
  var t = lA(e, "string");
  return Ra(t) == "symbol" ? t : String(t);
}
function lA(e, t) {
  if (Ra(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Ra(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function uA(e, t) {
  return hA(e) || pA(e, t) || fA(e, t) || dA();
}
function dA() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fA(e, t) {
  if (e) {
    if (typeof e == "string")
      return Rh(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Rh(e, t);
  }
}
function Rh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function pA(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, a, s, i = [], c = !0, l = !1;
    try {
      if (a = (n = n.call(e)).next, t !== 0)
        for (; !(c = (r = a.call(n)).done) && (i.push(r.value), i.length !== t); c = !0)
          ;
    } catch (u) {
      l = !0, o = u;
    } finally {
      try {
        if (!c && n.return != null && (s = n.return(), Object(s) !== s))
          return;
      } finally {
        if (l)
          throw o;
      }
    }
    return i;
  }
}
function hA(e) {
  if (Array.isArray(e))
    return e;
}
var mA = /* @__PURE__ */ L(function(e, t) {
  var n = e.aspect, r = e.initialDimension, o = r === void 0 ? {
    width: -1,
    height: -1
  } : r, a = e.width, s = a === void 0 ? "100%" : a, i = e.height, c = i === void 0 ? "100%" : i, l = e.minWidth, u = l === void 0 ? 0 : l, f = e.minHeight, p = e.maxHeight, h = e.children, m = e.debounce, v = m === void 0 ? 0 : m, g = e.id, b = e.className, y = e.onResize, x = e.style, _ = x === void 0 ? {} : x, w = q(null), N = q();
  N.current = y, av(t, function() {
    return Object.defineProperty(w.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), w.current;
      },
      configurable: !0
    });
  });
  var S = Z({
    containerWidth: o.width,
    containerHeight: o.height
  }), D = uA(S, 2), P = D[0], z = D[1], K = ve(function(W, V) {
    z(function(E) {
      var B = Math.round(W), T = Math.round(V);
      return E.containerWidth === B && E.containerHeight === T ? E : {
        containerWidth: B,
        containerHeight: T
      };
    });
  }, []);
  J(function() {
    var W = function(G) {
      var Q, oe = G[0].contentRect, H = oe.width, le = oe.height;
      K(H, le), (Q = N.current) === null || Q === void 0 || Q.call(N, H, le);
    };
    v > 0 && (W = sA(W, v, {
      trailing: !0,
      leading: !1
    }));
    var V = new ResizeObserver(W), E = w.current.getBoundingClientRect(), B = E.width, T = E.height;
    return K(B, T), V.observe(w.current), function() {
      V.disconnect();
    };
  }, [K, v]);
  var R = Ut(function() {
    var W = P.containerWidth, V = P.containerHeight;
    if (W < 0 || V < 0)
      return null;
    ci(Bs(s) || Bs(c), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, s, c), ci(!n || n > 0, "The aspect(%s) must be greater than zero.", n);
    var E = Bs(s) ? W : s, B = Bs(c) ? V : c;
    n && n > 0 && (E ? B = E / n : B && (E = B * n), p && B > p && (B = p)), ci(E > 0 || B > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, E, B, s, c, u, f, n);
    var T = !Array.isArray(h) && Wp.isElement(h) && nP(h.type).endsWith("Chart");
    return I.Children.map(h, function(U) {
      return Wp.isElement(U) ? /* @__PURE__ */ sc(U, Us({
        width: E,
        height: B
      }, T ? {
        style: Us({
          height: "100%",
          width: "100%",
          maxHeight: B,
          maxWidth: E
        }, U.props.style)
      } : {})) : U;
    });
  }, [n, h, c, p, f, u, P, s]);
  return /* @__PURE__ */ I.createElement("div", {
    id: g ? "".concat(g) : void 0,
    className: br("recharts-responsive-container", b),
    style: Us(Us({}, _), {}, {
      width: s,
      height: c,
      minWidth: u,
      minHeight: f,
      maxHeight: p
    }),
    ref: w
  }, R);
});
const vA = { light: "", dark: ".dark" }, Kg = C.createContext(null);
function Gg() {
  const e = C.useContext(Kg);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
const gA = C.forwardRef(({ id: e, className: t, children: n, config: r, ...o }, a) => {
  const s = C.useId(), i = `chart-${e || s.replace(/:/g, "")}`;
  return /* @__PURE__ */ d.jsx(Kg.Provider, { value: { config: r }, children: /* @__PURE__ */ d.jsxs(
    "div",
    {
      "data-chart": i,
      ref: a,
      className: M(
        "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
        t
      ),
      ...o,
      children: [
        /* @__PURE__ */ d.jsx(bA, { id: i, config: r }),
        /* @__PURE__ */ d.jsx(mA, { children: n })
      ]
    }
  ) });
});
gA.displayName = "Chart";
const bA = ({ id: e, config: t }) => {
  const n = Object.entries(t).filter(
    ([r, o]) => o.theme || o.color
  );
  return n.length ? /* @__PURE__ */ d.jsx(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(vA).map(
          ([r, o]) => `
${o} [data-chart=${e}] {
${n.map(([a, s]) => {
            var c;
            const i = ((c = s.theme) == null ? void 0 : c[r]) || s.color;
            return i ? `  --color-${a}: ${i};` : null;
          }).join(`
`)}
}
`
        ).join(`
`)
      }
    }
  ) : null;
}, oY = Vd, yA = C.forwardRef(
  ({
    active: e,
    payload: t,
    className: n,
    indicator: r = "dot",
    hideLabel: o = !1,
    hideIndicator: a = !1,
    label: s,
    labelFormatter: i,
    labelClassName: c,
    formatter: l,
    color: u,
    nameKey: f,
    labelKey: p
  }, h) => {
    const { config: m } = Gg(), v = C.useMemo(() => {
      var w;
      if (o || !(t != null && t.length))
        return null;
      const [b] = t, y = `${p || b.dataKey || b.name || "value"}`, x = Su(m, b, y), _ = !p && typeof s == "string" ? ((w = m[s]) == null ? void 0 : w.label) || s : x == null ? void 0 : x.label;
      return i ? /* @__PURE__ */ d.jsx("div", { className: M("font-medium", c), children: i(_, t) }) : _ ? /* @__PURE__ */ d.jsx("div", { className: M("font-medium", c), children: _ }) : null;
    }, [
      s,
      i,
      t,
      o,
      c,
      m,
      p
    ]);
    if (!e || !(t != null && t.length))
      return null;
    const g = t.length === 1 && r !== "dot";
    return /* @__PURE__ */ d.jsxs(
      "div",
      {
        ref: h,
        className: M(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          n
        ),
        children: [
          g ? null : v,
          /* @__PURE__ */ d.jsx("div", { className: "grid gap-1.5", children: t.map((b, y) => {
            const x = `${f || b.name || b.dataKey || "value"}`, _ = Su(m, b, x), w = u || b.payload.fill || b.color;
            return /* @__PURE__ */ d.jsx(
              "div",
              {
                className: M(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  r === "dot" && "items-center"
                ),
                children: l && (b == null ? void 0 : b.value) !== void 0 && b.name ? l(b.value, b.name, b, y, b.payload) : /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
                  _ != null && _.icon ? /* @__PURE__ */ d.jsx(_.icon, {}) : !a && /* @__PURE__ */ d.jsx(
                    "div",
                    {
                      className: M(
                        "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                        {
                          "h-2.5 w-2.5": r === "dot",
                          "w-1": r === "line",
                          "w-0 border-[1.5px] border-dashed bg-transparent": r === "dashed",
                          "my-0.5": g && r === "dashed"
                        }
                      ),
                      style: {
                        "--color-bg": w,
                        "--color-border": w
                      }
                    }
                  ),
                  /* @__PURE__ */ d.jsxs(
                    "div",
                    {
                      className: M(
                        "flex flex-1 justify-between leading-none",
                        g ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ d.jsxs("div", { className: "grid gap-1.5", children: [
                          g ? v : null,
                          /* @__PURE__ */ d.jsx("span", { className: "text-muted-foreground", children: (_ == null ? void 0 : _.label) || b.name })
                        ] }),
                        b.value && /* @__PURE__ */ d.jsx("span", { className: "font-mono font-medium tabular-nums text-foreground", children: b.value.toLocaleString() })
                      ]
                    }
                  )
                ] })
              },
              b.dataKey
            );
          }) })
        ]
      }
    );
  }
);
yA.displayName = "ChartTooltip";
const aY = Fd, xA = C.forwardRef(
  ({ className: e, hideIcon: t = !1, payload: n, verticalAlign: r = "bottom", nameKey: o }, a) => {
    const { config: s } = Gg();
    return n != null && n.length ? /* @__PURE__ */ d.jsx(
      "div",
      {
        ref: a,
        className: M(
          "flex items-center justify-center gap-4",
          r === "top" ? "pb-3" : "pt-3",
          e
        ),
        children: n.map((i) => {
          const c = `${o || i.dataKey || "value"}`, l = Su(s, i, c);
          return /* @__PURE__ */ d.jsxs(
            "div",
            {
              className: M(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
              ),
              children: [
                l != null && l.icon && !t ? /* @__PURE__ */ d.jsx(l.icon, {}) : /* @__PURE__ */ d.jsx(
                  "div",
                  {
                    className: "h-2 w-2 shrink-0 rounded-[2px]",
                    style: {
                      backgroundColor: i.color
                    }
                  }
                ),
                l == null ? void 0 : l.label
              ]
            },
            i.value
          );
        })
      }
    ) : null;
  }
);
xA.displayName = "ChartLegend";
function Su(e, t, n) {
  if (typeof t != "object" || t === null)
    return;
  const r = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let o = n;
  return n in t && typeof t[n] == "string" ? o = t[n] : r && n in r && typeof r[n] == "string" && (o = r[n]), o in e ? e[o] : e[n];
}
function X(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function Tr(e) {
  const t = e + "CollectionProvider", [n, r] = ut(t), [o, a] = n(t, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), s = (h) => {
    const { scope: m, children: v } = h, g = I.useRef(null), b = I.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ I.createElement(o, {
      scope: m,
      itemMap: b,
      collectionRef: g
    }, v);
  }, i = e + "CollectionSlot", c = /* @__PURE__ */ I.forwardRef((h, m) => {
    const { scope: v, children: g } = h, b = a(i, v), y = Ee(m, b.collectionRef);
    return /* @__PURE__ */ I.createElement(gn, {
      ref: y
    }, g);
  }), l = e + "CollectionItemSlot", u = "data-radix-collection-item", f = /* @__PURE__ */ I.forwardRef((h, m) => {
    const { scope: v, children: g, ...b } = h, y = I.useRef(null), x = Ee(m, y), _ = a(l, v);
    return I.useEffect(() => (_.itemMap.set(y, {
      ref: y,
      ...b
    }), () => void _.itemMap.delete(y))), /* @__PURE__ */ I.createElement(gn, {
      [u]: "",
      ref: x
    }, g);
  });
  function p(h) {
    const m = a(e + "CollectionConsumer", h);
    return I.useCallback(() => {
      const g = m.collectionRef.current;
      if (!g)
        return [];
      const b = Array.from(g.querySelectorAll(`[${u}]`));
      return Array.from(m.itemMap.values()).sort(
        (_, w) => b.indexOf(_.ref.current) - b.indexOf(w.ref.current)
      );
    }, [
      m.collectionRef,
      m.itemMap
    ]);
  }
  return [
    {
      Provider: s,
      Slot: c,
      ItemSlot: f
    },
    p,
    r
  ];
}
const wA = /* @__PURE__ */ Wt(void 0);
function zn(e) {
  const t = ct(wA);
  return e || t || "ltr";
}
function $A(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Je(e);
  J(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r), () => t.removeEventListener("keydown", r);
  }, [
    n,
    t
  ]);
}
const Nu = "dismissableLayer.update", _A = "dismissableLayer.pointerDownOutside", CA = "dismissableLayer.focusOutside";
let Ih;
const SA = /* @__PURE__ */ Wt({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), co = /* @__PURE__ */ L((e, t) => {
  var n;
  const { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: o, onPointerDownOutside: a, onFocusOutside: s, onInteractOutside: i, onDismiss: c, ...l } = e, u = ct(SA), [f, p] = Z(null), h = (n = f == null ? void 0 : f.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, m] = Z({}), v = Ee(
    t,
    (D) => p(D)
  ), g = Array.from(u.layers), [b] = [
    ...u.layersWithOutsidePointerEventsDisabled
  ].slice(-1), y = g.indexOf(b), x = f ? g.indexOf(f) : -1, _ = u.layersWithOutsidePointerEventsDisabled.size > 0, w = x >= y, N = NA((D) => {
    const P = D.target, z = [
      ...u.branches
    ].some(
      (K) => K.contains(P)
    );
    !w || z || (a == null || a(D), i == null || i(D), D.defaultPrevented || c == null || c());
  }, h), S = EA((D) => {
    const P = D.target;
    [
      ...u.branches
    ].some(
      (K) => K.contains(P)
    ) || (s == null || s(D), i == null || i(D), D.defaultPrevented || c == null || c());
  }, h);
  return $A((D) => {
    x === u.layers.size - 1 && (o == null || o(D), !D.defaultPrevented && c && (D.preventDefault(), c()));
  }, h), J(() => {
    if (f)
      return r && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Ih = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(f)), u.layers.add(f), Lh(), () => {
        r && u.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = Ih);
      };
  }, [
    f,
    h,
    r,
    u
  ]), J(() => () => {
    f && (u.layers.delete(f), u.layersWithOutsidePointerEventsDisabled.delete(f), Lh());
  }, [
    f,
    u
  ]), J(() => {
    const D = () => m({});
    return document.addEventListener(Nu, D), () => document.removeEventListener(Nu, D);
  }, []), /* @__PURE__ */ $(de.div, j({}, l, {
    ref: v,
    style: {
      pointerEvents: _ ? w ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: X(e.onFocusCapture, S.onFocusCapture),
    onBlurCapture: X(e.onBlurCapture, S.onBlurCapture),
    onPointerDownCapture: X(e.onPointerDownCapture, N.onPointerDownCapture)
  }));
});
function NA(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Je(e), r = q(!1), o = q(() => {
  });
  return J(() => {
    const a = (i) => {
      if (i.target && !r.current) {
        let l = function() {
          Yg(_A, n, c, {
            discrete: !0
          });
        };
        const c = {
          originalEvent: i
        };
        i.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, {
          once: !0
        })) : l();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, s = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(s), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current);
    };
  }, [
    t,
    n
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function EA(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Je(e), r = q(!1);
  return J(() => {
    const o = (a) => {
      a.target && !r.current && Yg(CA, n, {
        originalEvent: a
      }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [
    t,
    n
  ]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Lh() {
  const e = new CustomEvent(Nu);
  document.dispatchEvent(e);
}
function Yg(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? $i(o, a) : o.dispatchEvent(a);
}
let $l = 0;
function wc() {
  J(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : Fh()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : Fh()), $l++, () => {
      $l === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), $l--;
    };
  }, []);
}
function Fh() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const _l = "focusScope.autoFocusOnMount", Cl = "focusScope.autoFocusOnUnmount", Bh = {
  bubbles: !1,
  cancelable: !0
}, $c = /* @__PURE__ */ L((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...s } = e, [i, c] = Z(null), l = Je(o), u = Je(a), f = q(null), p = Ee(
    t,
    (v) => c(v)
  ), h = q({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  J(() => {
    if (r) {
      let v = function(x) {
        if (h.paused || !i)
          return;
        const _ = x.target;
        i.contains(_) ? f.current = _ : mr(f.current, {
          select: !0
        });
      }, g = function(x) {
        if (h.paused || !i)
          return;
        const _ = x.relatedTarget;
        _ !== null && (i.contains(_) || mr(f.current, {
          select: !0
        }));
      }, b = function(x) {
        if (document.activeElement === document.body)
          for (const w of x)
            w.removedNodes.length > 0 && mr(i);
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", g);
      const y = new MutationObserver(b);
      return i && y.observe(i, {
        childList: !0,
        subtree: !0
      }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", g), y.disconnect();
      };
    }
  }, [
    r,
    i,
    h.paused
  ]), J(() => {
    if (i) {
      zh.add(h);
      const v = document.activeElement;
      if (!i.contains(v)) {
        const b = new CustomEvent(_l, Bh);
        i.addEventListener(_l, l), i.dispatchEvent(b), b.defaultPrevented || (PA(MA(qg(i)), {
          select: !0
        }), document.activeElement === v && mr(i));
      }
      return () => {
        i.removeEventListener(_l, l), setTimeout(() => {
          const b = new CustomEvent(Cl, Bh);
          i.addEventListener(Cl, u), i.dispatchEvent(b), b.defaultPrevented || mr(v ?? document.body, {
            select: !0
          }), i.removeEventListener(Cl, u), zh.remove(h);
        }, 0);
      };
    }
  }, [
    i,
    l,
    u,
    h
  ]);
  const m = ve((v) => {
    if (!n && !r || h.paused)
      return;
    const g = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, b = document.activeElement;
    if (g && b) {
      const y = v.currentTarget, [x, _] = OA(y);
      x && _ ? !v.shiftKey && b === _ ? (v.preventDefault(), n && mr(x, {
        select: !0
      })) : v.shiftKey && b === x && (v.preventDefault(), n && mr(_, {
        select: !0
      })) : b === y && v.preventDefault();
    }
  }, [
    n,
    r,
    h.paused
  ]);
  return /* @__PURE__ */ $(de.div, j({
    tabIndex: -1
  }, s, {
    ref: p,
    onKeyDown: m
  }));
});
function PA(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (mr(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function OA(e) {
  const t = qg(e), n = Vh(t, e), r = Vh(t.reverse(), e);
  return [
    n,
    r
  ];
}
function qg(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
function Vh(e, t) {
  for (const n of e)
    if (!TA(n, {
      upTo: t
    }))
      return n;
}
function TA(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t !== void 0 && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}
function jA(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function mr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && jA(e) && t && e.select();
  }
}
const zh = kA();
function kA() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Wh(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Wh(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function Wh(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function MA(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const DA = C.useId || (() => {
});
let AA = 0;
function bt(e) {
  const [t, n] = C.useState(DA());
  return St(() => {
    n(
      (r) => r ?? String(AA++)
    );
  }, [
    e
  ]), t ? `radix-${t}` : "";
}
const RA = ["top", "right", "bottom", "left"], kn = Math.min, Gt = Math.max, Di = Math.round, Hs = Math.floor, yr = (e) => ({
  x: e,
  y: e
}), IA = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, LA = {
  start: "end",
  end: "start"
};
function Eu(e, t, n) {
  return Gt(e, kn(t, n));
}
function Jn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function er(e) {
  return e.split("-")[0];
}
function Jo(e) {
  return e.split("-")[1];
}
function zd(e) {
  return e === "x" ? "y" : "x";
}
function Wd(e) {
  return e === "y" ? "height" : "width";
}
function ea(e) {
  return ["top", "bottom"].includes(er(e)) ? "y" : "x";
}
function Ud(e) {
  return zd(ea(e));
}
function FA(e, t, n) {
  n === void 0 && (n = !1);
  const r = Jo(e), o = Ud(e), a = Wd(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = Ai(s)), [s, Ai(s)];
}
function BA(e) {
  const t = Ai(e);
  return [Pu(e), t, Pu(t)];
}
function Pu(e) {
  return e.replace(/start|end/g, (t) => LA[t]);
}
function VA(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], a = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? a : s;
    default:
      return [];
  }
}
function zA(e, t, n, r) {
  const o = Jo(e);
  let a = VA(er(e), n === "start", r);
  return o && (a = a.map((s) => s + "-" + o), t && (a = a.concat(a.map(Pu)))), a;
}
function Ai(e) {
  return e.replace(/left|right|bottom|top/g, (t) => IA[t]);
}
function WA(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Zg(e) {
  return typeof e != "number" ? WA(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ri(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function Uh(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = ea(t), s = Ud(t), i = Wd(s), c = er(t), l = a === "y", u = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, p = r[i] / 2 - o[i] / 2;
  let h;
  switch (c) {
    case "top":
      h = {
        x: u,
        y: r.y - o.height
      };
      break;
    case "bottom":
      h = {
        x: u,
        y: r.y + r.height
      };
      break;
    case "right":
      h = {
        x: r.x + r.width,
        y: f
      };
      break;
    case "left":
      h = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  switch (Jo(t)) {
    case "start":
      h[s] -= p * (n && l ? -1 : 1);
      break;
    case "end":
      h[s] += p * (n && l ? -1 : 1);
      break;
  }
  return h;
}
const UA = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: s
  } = n, i = a.filter(Boolean), c = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let l = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: u,
    y: f
  } = Uh(l, r, c), p = r, h = {}, m = 0;
  for (let v = 0; v < i.length; v++) {
    const {
      name: g,
      fn: b
    } = i[v], {
      x: y,
      y: x,
      data: _,
      reset: w
    } = await b({
      x: u,
      y: f,
      initialPlacement: r,
      placement: p,
      strategy: o,
      middlewareData: h,
      rects: l,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = y ?? u, f = x ?? f, h = {
      ...h,
      [g]: {
        ...h[g],
        ..._
      }
    }, w && m <= 50 && (m++, typeof w == "object" && (w.placement && (p = w.placement), w.rects && (l = w.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : w.rects), {
      x: u,
      y: f
    } = Uh(l, p, c)), v = -1);
  }
  return {
    x: u,
    y: f,
    placement: p,
    strategy: o,
    middlewareData: h
  };
};
async function Ia(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: a,
    rects: s,
    elements: i,
    strategy: c
  } = e, {
    boundary: l = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: f = "floating",
    altBoundary: p = !1,
    padding: h = 0
  } = Jn(t, e), m = Zg(h), g = i[p ? f === "floating" ? "reference" : "floating" : f], b = Ri(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(g))) == null || n ? g : g.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(i.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), y = f === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, x = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(i.floating)), _ = await (a.isElement == null ? void 0 : a.isElement(x)) ? await (a.getScale == null ? void 0 : a.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, w = Ri(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: y,
    offsetParent: x,
    strategy: c
  }) : y);
  return {
    top: (b.top - w.top + m.top) / _.y,
    bottom: (w.bottom - b.bottom + m.bottom) / _.y,
    left: (b.left - w.left + m.left) / _.x,
    right: (w.right - b.right + m.right) / _.x
  };
}
const HA = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: a,
      platform: s,
      elements: i,
      middlewareData: c
    } = t, {
      element: l,
      padding: u = 0
    } = Jn(e, t) || {};
    if (l == null)
      return {};
    const f = Zg(u), p = {
      x: n,
      y: r
    }, h = Ud(o), m = Wd(h), v = await s.getDimensions(l), g = h === "y", b = g ? "top" : "left", y = g ? "bottom" : "right", x = g ? "clientHeight" : "clientWidth", _ = a.reference[m] + a.reference[h] - p[h] - a.floating[m], w = p[h] - a.reference[h], N = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
    let S = N ? N[x] : 0;
    (!S || !await (s.isElement == null ? void 0 : s.isElement(N))) && (S = i.floating[x] || a.floating[m]);
    const D = _ / 2 - w / 2, P = S / 2 - v[m] / 2 - 1, z = kn(f[b], P), K = kn(f[y], P), R = z, W = S - v[m] - K, V = S / 2 - v[m] / 2 + D, E = Eu(R, V, W), B = !c.arrow && Jo(o) != null && V !== E && a.reference[m] / 2 - (V < R ? z : K) - v[m] / 2 < 0, T = B ? V < R ? V - R : V - W : 0;
    return {
      [h]: p[h] + T,
      data: {
        [h]: E,
        centerOffset: V - E - T,
        ...B && {
          alignmentOffset: T
        }
      },
      reset: B
    };
  }
}), KA = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: a,
        rects: s,
        initialPlacement: i,
        platform: c,
        elements: l
      } = t, {
        mainAxis: u = !0,
        crossAxis: f = !0,
        fallbackPlacements: p,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: v = !0,
        ...g
      } = Jn(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const b = er(o), y = er(i) === i, x = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), _ = p || (y || !v ? [Ai(i)] : BA(i));
      !p && m !== "none" && _.push(...zA(i, v, m, x));
      const w = [i, ..._], N = await Ia(t, g), S = [];
      let D = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (u && S.push(N[b]), f) {
        const R = FA(o, s, x);
        S.push(N[R[0]], N[R[1]]);
      }
      if (D = [...D, {
        placement: o,
        overflows: S
      }], !S.every((R) => R <= 0)) {
        var P, z;
        const R = (((P = a.flip) == null ? void 0 : P.index) || 0) + 1, W = w[R];
        if (W)
          return {
            data: {
              index: R,
              overflows: D
            },
            reset: {
              placement: W
            }
          };
        let V = (z = D.filter((E) => E.overflows[0] <= 0).sort((E, B) => E.overflows[1] - B.overflows[1])[0]) == null ? void 0 : z.placement;
        if (!V)
          switch (h) {
            case "bestFit": {
              var K;
              const E = (K = D.map((B) => [B.placement, B.overflows.filter((T) => T > 0).reduce((T, U) => T + U, 0)]).sort((B, T) => B[1] - T[1])[0]) == null ? void 0 : K[0];
              E && (V = E);
              break;
            }
            case "initialPlacement":
              V = i;
              break;
          }
        if (o !== V)
          return {
            reset: {
              placement: V
            }
          };
      }
      return {};
    }
  };
};
function Hh(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Kh(e) {
  return RA.some((t) => e[t] >= 0);
}
const GA = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = Jn(e, t);
      switch (r) {
        case "referenceHidden": {
          const a = await Ia(t, {
            ...o,
            elementContext: "reference"
          }), s = Hh(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Kh(s)
            }
          };
        }
        case "escaped": {
          const a = await Ia(t, {
            ...o,
            altBoundary: !0
          }), s = Hh(a, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Kh(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function YA(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = er(n), i = Jo(n), c = ea(n) === "y", l = ["left", "top"].includes(s) ? -1 : 1, u = a && c ? -1 : 1, f = Jn(t, e);
  let {
    mainAxis: p,
    crossAxis: h,
    alignmentAxis: m
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...f
  };
  return i && typeof m == "number" && (h = i === "end" ? m * -1 : m), c ? {
    x: h * u,
    y: p * l
  } : {
    x: p * l,
    y: h * u
  };
}
const qA = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: a,
        placement: s,
        middlewareData: i
      } = t, c = await YA(t, e);
      return s === ((n = i.offset) == null ? void 0 : n.placement) && (r = i.arrow) != null && r.alignmentOffset ? {} : {
        x: o + c.x,
        y: a + c.y,
        data: {
          ...c,
          placement: s
        }
      };
    }
  };
}, ZA = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: a = !0,
        crossAxis: s = !1,
        limiter: i = {
          fn: (g) => {
            let {
              x: b,
              y
            } = g;
            return {
              x: b,
              y
            };
          }
        },
        ...c
      } = Jn(e, t), l = {
        x: n,
        y: r
      }, u = await Ia(t, c), f = ea(er(o)), p = zd(f);
      let h = l[p], m = l[f];
      if (a) {
        const g = p === "y" ? "top" : "left", b = p === "y" ? "bottom" : "right", y = h + u[g], x = h - u[b];
        h = Eu(y, h, x);
      }
      if (s) {
        const g = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", y = m + u[g], x = m - u[b];
        m = Eu(y, m, x);
      }
      const v = i.fn({
        ...t,
        [p]: h,
        [f]: m
      });
      return {
        ...v,
        data: {
          x: v.x - n,
          y: v.y - r
        }
      };
    }
  };
}, XA = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: a,
        middlewareData: s
      } = t, {
        offset: i = 0,
        mainAxis: c = !0,
        crossAxis: l = !0
      } = Jn(e, t), u = {
        x: n,
        y: r
      }, f = ea(o), p = zd(f);
      let h = u[p], m = u[f];
      const v = Jn(i, t), g = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (c) {
        const x = p === "y" ? "height" : "width", _ = a.reference[p] - a.floating[x] + g.mainAxis, w = a.reference[p] + a.reference[x] - g.mainAxis;
        h < _ ? h = _ : h > w && (h = w);
      }
      if (l) {
        var b, y;
        const x = p === "y" ? "width" : "height", _ = ["top", "left"].includes(er(o)), w = a.reference[f] - a.floating[x] + (_ && ((b = s.offset) == null ? void 0 : b[f]) || 0) + (_ ? 0 : g.crossAxis), N = a.reference[f] + a.reference[x] + (_ ? 0 : ((y = s.offset) == null ? void 0 : y[f]) || 0) - (_ ? g.crossAxis : 0);
        m < w ? m = w : m > N && (m = N);
      }
      return {
        [p]: h,
        [f]: m
      };
    }
  };
}, QA = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: r,
        platform: o,
        elements: a
      } = t, {
        apply: s = () => {
        },
        ...i
      } = Jn(e, t), c = await Ia(t, i), l = er(n), u = Jo(n), f = ea(n) === "y", {
        width: p,
        height: h
      } = r.floating;
      let m, v;
      l === "top" || l === "bottom" ? (m = l, v = u === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (v = l, m = u === "end" ? "top" : "bottom");
      const g = h - c.top - c.bottom, b = p - c.left - c.right, y = kn(h - c[m], g), x = kn(p - c[v], b), _ = !t.middlewareData.shift;
      let w = y, N = x;
      if (f ? N = u || _ ? kn(x, b) : b : w = u || _ ? kn(y, g) : g, _ && !u) {
        const D = Gt(c.left, 0), P = Gt(c.right, 0), z = Gt(c.top, 0), K = Gt(c.bottom, 0);
        f ? N = p - 2 * (D !== 0 || P !== 0 ? D + P : Gt(c.left, c.right)) : w = h - 2 * (z !== 0 || K !== 0 ? z + K : Gt(c.top, c.bottom));
      }
      await s({
        ...t,
        availableWidth: N,
        availableHeight: w
      });
      const S = await o.getDimensions(a.floating);
      return p !== S.width || h !== S.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function ta(e) {
  return Xg(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Yt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ar(e) {
  var t;
  return (t = (Xg(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Xg(e) {
  return e instanceof Node || e instanceof Yt(e).Node;
}
function Rn(e) {
  return e instanceof Element || e instanceof Yt(e).Element;
}
function In(e) {
  return e instanceof HTMLElement || e instanceof Yt(e).HTMLElement;
}
function Gh(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Yt(e).ShadowRoot;
}
function ys(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = xn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function JA(e) {
  return ["table", "td", "th"].includes(ta(e));
}
function Hd(e) {
  const t = Kd(), n = xn(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function eR(e) {
  let t = xr(e);
  for (; In(t) && !Fo(t); ) {
    if (Hd(t))
      return t;
    t = xr(t);
  }
  return null;
}
function Kd() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Fo(e) {
  return ["html", "body", "#document"].includes(ta(e));
}
function xn(e) {
  return Yt(e).getComputedStyle(e);
}
function _c(e) {
  return Rn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function xr(e) {
  if (ta(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Gh(e) && e.host || // Fallback.
    ar(e)
  );
  return Gh(t) ? t.host : t;
}
function Qg(e) {
  const t = xr(e);
  return Fo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : In(t) && ys(t) ? t : Qg(t);
}
function La(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Qg(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Yt(o);
  return a ? t.concat(s, s.visualViewport || [], ys(o) ? o : [], s.frameElement && n ? La(s.frameElement) : []) : t.concat(o, La(o, [], n));
}
function Jg(e) {
  const t = xn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = In(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, i = Di(n) !== a || Di(r) !== s;
  return i && (n = a, r = s), {
    width: n,
    height: r,
    $: i
  };
}
function Gd(e) {
  return Rn(e) ? e : e.contextElement;
}
function To(e) {
  const t = Gd(e);
  if (!In(t))
    return yr(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = Jg(t);
  let s = (a ? Di(n.width) : n.width) / r, i = (a ? Di(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const tR = /* @__PURE__ */ yr(0);
function eb(e) {
  const t = Yt(e);
  return !Kd() || !t.visualViewport ? tR : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function nR(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Yt(e) ? !1 : t;
}
function qr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = Gd(e);
  let s = yr(1);
  t && (r ? Rn(r) && (s = To(r)) : s = To(e));
  const i = nR(a, n, r) ? eb(a) : yr(0);
  let c = (o.left + i.x) / s.x, l = (o.top + i.y) / s.y, u = o.width / s.x, f = o.height / s.y;
  if (a) {
    const p = Yt(a), h = r && Rn(r) ? Yt(r) : r;
    let m = p, v = m.frameElement;
    for (; v && r && h !== m; ) {
      const g = To(v), b = v.getBoundingClientRect(), y = xn(v), x = b.left + (v.clientLeft + parseFloat(y.paddingLeft)) * g.x, _ = b.top + (v.clientTop + parseFloat(y.paddingTop)) * g.y;
      c *= g.x, l *= g.y, u *= g.x, f *= g.y, c += x, l += _, m = Yt(v), v = m.frameElement;
    }
  }
  return Ri({
    width: u,
    height: f,
    x: c,
    y: l
  });
}
const rR = [":popover-open", ":modal"];
function Yd(e) {
  return rR.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function oR(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", s = ar(r), i = t ? Yd(t.floating) : !1;
  if (r === s || i && a)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = yr(1);
  const u = yr(0), f = In(r);
  if ((f || !f && !a) && ((ta(r) !== "body" || ys(s)) && (c = _c(r)), In(r))) {
    const p = qr(r);
    l = To(r), u.x = p.x + r.clientLeft, u.y = p.y + r.clientTop;
  }
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + u.x,
    y: n.y * l.y - c.scrollTop * l.y + u.y
  };
}
function aR(e) {
  return Array.from(e.getClientRects());
}
function tb(e) {
  return qr(ar(e)).left + _c(e).scrollLeft;
}
function sR(e) {
  const t = ar(e), n = _c(e), r = e.ownerDocument.body, o = Gt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Gt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + tb(e);
  const i = -n.scrollTop;
  return xn(r).direction === "rtl" && (s += Gt(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: i
  };
}
function iR(e, t) {
  const n = Yt(e), r = ar(e), o = n.visualViewport;
  let a = r.clientWidth, s = r.clientHeight, i = 0, c = 0;
  if (o) {
    a = o.width, s = o.height;
    const l = Kd();
    (!l || l && t === "fixed") && (i = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: i,
    y: c
  };
}
function cR(e, t) {
  const n = qr(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = In(e) ? To(e) : yr(1), s = e.clientWidth * a.x, i = e.clientHeight * a.y, c = o * a.x, l = r * a.y;
  return {
    width: s,
    height: i,
    x: c,
    y: l
  };
}
function Yh(e, t, n) {
  let r;
  if (t === "viewport")
    r = iR(e, n);
  else if (t === "document")
    r = sR(ar(e));
  else if (Rn(t))
    r = cR(t, n);
  else {
    const o = eb(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return Ri(r);
}
function nb(e, t) {
  const n = xr(e);
  return n === t || !Rn(n) || Fo(n) ? !1 : xn(n).position === "fixed" || nb(n, t);
}
function lR(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = La(e, [], !1).filter((i) => Rn(i) && ta(i) !== "body"), o = null;
  const a = xn(e).position === "fixed";
  let s = a ? xr(e) : e;
  for (; Rn(s) && !Fo(s); ) {
    const i = xn(s), c = Hd(s);
    !c && i.position === "fixed" && (o = null), (a ? !c && !o : !c && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || ys(s) && !c && nb(e, s)) ? r = r.filter((u) => u !== s) : o = i, s = xr(s);
  }
  return t.set(e, r), r;
}
function uR(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? Yd(t) ? [] : lR(t, this._c) : [].concat(n), r], i = s[0], c = s.reduce((l, u) => {
    const f = Yh(t, u, o);
    return l.top = Gt(f.top, l.top), l.right = kn(f.right, l.right), l.bottom = kn(f.bottom, l.bottom), l.left = Gt(f.left, l.left), l;
  }, Yh(t, i, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function dR(e) {
  const {
    width: t,
    height: n
  } = Jg(e);
  return {
    width: t,
    height: n
  };
}
function fR(e, t, n) {
  const r = In(t), o = ar(t), a = n === "fixed", s = qr(e, !0, a, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = yr(0);
  if (r || !r && !a)
    if ((ta(t) !== "body" || ys(o)) && (i = _c(t)), r) {
      const f = qr(t, !0, a, t);
      c.x = f.x + t.clientLeft, c.y = f.y + t.clientTop;
    } else
      o && (c.x = tb(o));
  const l = s.left + i.scrollLeft - c.x, u = s.top + i.scrollTop - c.y;
  return {
    x: l,
    y: u,
    width: s.width,
    height: s.height
  };
}
function Sl(e) {
  return xn(e).position === "static";
}
function qh(e, t) {
  return !In(e) || xn(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function rb(e, t) {
  const n = Yt(e);
  if (Yd(e))
    return n;
  if (!In(e)) {
    let o = xr(e);
    for (; o && !Fo(o); ) {
      if (Rn(o) && !Sl(o))
        return o;
      o = xr(o);
    }
    return n;
  }
  let r = qh(e, t);
  for (; r && JA(r) && Sl(r); )
    r = qh(r, t);
  return r && Fo(r) && Sl(r) && !Hd(r) ? n : r || eR(e) || n;
}
const pR = async function(e) {
  const t = this.getOffsetParent || rb, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: fR(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function hR(e) {
  return xn(e).direction === "rtl";
}
const mR = {
  convertOffsetParentRelativeRectToViewportRelativeRect: oR,
  getDocumentElement: ar,
  getClippingRect: uR,
  getOffsetParent: rb,
  getElementRects: pR,
  getClientRects: aR,
  getDimensions: dR,
  getScale: To,
  isElement: Rn,
  isRTL: hR
};
function vR(e, t) {
  let n = null, r;
  const o = ar(e);
  function a() {
    var i;
    clearTimeout(r), (i = n) == null || i.disconnect(), n = null;
  }
  function s(i, c) {
    i === void 0 && (i = !1), c === void 0 && (c = 1), a();
    const {
      left: l,
      top: u,
      width: f,
      height: p
    } = e.getBoundingClientRect();
    if (i || t(), !f || !p)
      return;
    const h = Hs(u), m = Hs(o.clientWidth - (l + f)), v = Hs(o.clientHeight - (u + p)), g = Hs(l), y = {
      rootMargin: -h + "px " + -m + "px " + -v + "px " + -g + "px",
      threshold: Gt(0, kn(1, c)) || 1
    };
    let x = !0;
    function _(w) {
      const N = w[0].intersectionRatio;
      if (N !== c) {
        if (!x)
          return s();
        N ? s(!1, N) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      x = !1;
    }
    try {
      n = new IntersectionObserver(_, {
        ...y,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(_, y);
    }
    n.observe(e);
  }
  return s(!0), a;
}
function gR(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = Gd(e), u = o || a ? [...l ? La(l) : [], ...La(t)] : [];
  u.forEach((b) => {
    o && b.addEventListener("scroll", n, {
      passive: !0
    }), a && b.addEventListener("resize", n);
  });
  const f = l && i ? vR(l, n) : null;
  let p = -1, h = null;
  s && (h = new ResizeObserver((b) => {
    let [y] = b;
    y && y.target === l && h && (h.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var x;
      (x = h) == null || x.observe(t);
    })), n();
  }), l && !c && h.observe(l), h.observe(t));
  let m, v = c ? qr(e) : null;
  c && g();
  function g() {
    const b = qr(e);
    v && (b.x !== v.x || b.y !== v.y || b.width !== v.width || b.height !== v.height) && n(), v = b, m = requestAnimationFrame(g);
  }
  return n(), () => {
    var b;
    u.forEach((y) => {
      o && y.removeEventListener("scroll", n), a && y.removeEventListener("resize", n);
    }), f == null || f(), (b = h) == null || b.disconnect(), h = null, c && cancelAnimationFrame(m);
  };
}
const bR = qA, yR = ZA, xR = KA, wR = QA, $R = GA, Zh = HA, _R = XA, CR = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: mR,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return UA(e, t, {
    ...o,
    platform: a
  });
};
var ui = typeof document < "u" ? ds : J;
function Ii(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length)
        return !1;
      for (r = n; r-- !== 0; )
        if (!Ii(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const a = o[r];
      if (!(a === "_owner" && e.$$typeof) && !Ii(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function ob(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Xh(e, t) {
  const n = ob(e);
  return Math.round(t * n) / n;
}
function Qh(e) {
  const t = C.useRef(e);
  return ui(() => {
    t.current = e;
  }), t;
}
function SR(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: a,
      floating: s
    } = {},
    transform: i = !0,
    whileElementsMounted: c,
    open: l
  } = e, [u, f] = C.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, h] = C.useState(r);
  Ii(p, r) || h(r);
  const [m, v] = C.useState(null), [g, b] = C.useState(null), y = C.useCallback((T) => {
    T !== N.current && (N.current = T, v(T));
  }, []), x = C.useCallback((T) => {
    T !== S.current && (S.current = T, b(T));
  }, []), _ = a || m, w = s || g, N = C.useRef(null), S = C.useRef(null), D = C.useRef(u), P = c != null, z = Qh(c), K = Qh(o), R = C.useCallback(() => {
    if (!N.current || !S.current)
      return;
    const T = {
      placement: t,
      strategy: n,
      middleware: p
    };
    K.current && (T.platform = K.current), CR(N.current, S.current, T).then((U) => {
      const G = {
        ...U,
        isPositioned: !0
      };
      W.current && !Ii(D.current, G) && (D.current = G, Sw.flushSync(() => {
        f(G);
      }));
    });
  }, [p, t, n, K]);
  ui(() => {
    l === !1 && D.current.isPositioned && (D.current.isPositioned = !1, f((T) => ({
      ...T,
      isPositioned: !1
    })));
  }, [l]);
  const W = C.useRef(!1);
  ui(() => (W.current = !0, () => {
    W.current = !1;
  }), []), ui(() => {
    if (_ && (N.current = _), w && (S.current = w), _ && w) {
      if (z.current)
        return z.current(_, w, R);
      R();
    }
  }, [_, w, R, z, P]);
  const V = C.useMemo(() => ({
    reference: N,
    floating: S,
    setReference: y,
    setFloating: x
  }), [y, x]), E = C.useMemo(() => ({
    reference: _,
    floating: w
  }), [_, w]), B = C.useMemo(() => {
    const T = {
      position: n,
      left: 0,
      top: 0
    };
    if (!E.floating)
      return T;
    const U = Xh(E.floating, u.x), G = Xh(E.floating, u.y);
    return i ? {
      ...T,
      transform: "translate(" + U + "px, " + G + "px)",
      ...ob(E.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: U,
      top: G
    };
  }, [n, i, E.floating, u.x, u.y]);
  return C.useMemo(() => ({
    ...u,
    update: R,
    refs: V,
    elements: E,
    floatingStyles: B
  }), [u, R, V, E, B]);
}
const NR = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? Zh({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Zh({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, ER = (e, t) => ({
  ...bR(e),
  options: [e, t]
}), PR = (e, t) => ({
  ...yR(e),
  options: [e, t]
}), OR = (e, t) => ({
  ..._R(e),
  options: [e, t]
}), TR = (e, t) => ({
  ...xR(e),
  options: [e, t]
}), jR = (e, t) => ({
  ...wR(e),
  options: [e, t]
}), kR = (e, t) => ({
  ...$R(e),
  options: [e, t]
}), MR = (e, t) => ({
  ...NR(e),
  options: [e, t]
});
function xs(e) {
  const [t, n] = Z(void 0);
  return St(() => {
    if (e) {
      n({
        width: e.offsetWidth,
        height: e.offsetHeight
      });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const a = o[0];
        let s, i;
        if ("borderBoxSize" in a) {
          const c = a.borderBoxSize, l = Array.isArray(c) ? c[0] : c;
          s = l.inlineSize, i = l.blockSize;
        } else
          s = e.offsetWidth, i = e.offsetHeight;
        n({
          width: s,
          height: i
        });
      });
      return r.observe(e, {
        box: "border-box"
      }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [
    e
  ]), t;
}
const ab = "Popper", [sb, Wn] = ut(ab), [DR, ib] = sb(ab), AR = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = Z(null);
  return /* @__PURE__ */ $(DR, {
    scope: t,
    anchor: r,
    onAnchorChange: o
  }, n);
}, RR = "PopperAnchor", IR = /* @__PURE__ */ L((e, t) => {
  const { __scopePopper: n, virtualRef: r, ...o } = e, a = ib(RR, n), s = q(null), i = Ee(t, s);
  return J(() => {
    a.onAnchorChange((r == null ? void 0 : r.current) || s.current);
  }), r ? null : /* @__PURE__ */ $(de.div, j({}, o, {
    ref: i
  }));
}), cb = "PopperContent", [LR, sY] = sb(cb), FR = /* @__PURE__ */ L((e, t) => {
  var n, r, o, a, s, i, c, l;
  const { __scopePopper: u, side: f = "bottom", sideOffset: p = 0, align: h = "center", alignOffset: m = 0, arrowPadding: v = 0, avoidCollisions: g = !0, collisionBoundary: b = [], collisionPadding: y = 0, sticky: x = "partial", hideWhenDetached: _ = !1, updatePositionStrategy: w = "optimized", onPlaced: N, ...S } = e, D = ib(cb, u), [P, z] = Z(null), K = Ee(
    t,
    (Pe) => z(Pe)
  ), [R, W] = Z(null), V = xs(R), E = (n = V == null ? void 0 : V.width) !== null && n !== void 0 ? n : 0, B = (r = V == null ? void 0 : V.height) !== null && r !== void 0 ? r : 0, T = f + (h !== "center" ? "-" + h : ""), U = typeof y == "number" ? y : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...y
  }, G = Array.isArray(b) ? b : [
    b
  ], Q = G.length > 0, oe = {
    padding: U,
    boundary: G.filter(BR),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: Q
  }, { refs: H, floatingStyles: le, placement: be, isPositioned: pe, middlewareData: ee } = SR({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: T,
    whileElementsMounted: (...Pe) => gR(...Pe, {
      animationFrame: w === "always"
    }),
    elements: {
      reference: D.anchor
    },
    middleware: [
      ER({
        mainAxis: p + B,
        alignmentAxis: m
      }),
      g && PR({
        mainAxis: !0,
        crossAxis: !1,
        limiter: x === "partial" ? OR() : void 0,
        ...oe
      }),
      g && TR({
        ...oe
      }),
      jR({
        ...oe,
        apply: ({ elements: Pe, rects: Ie, availableWidth: Oe, availableHeight: O }) => {
          const { width: F, height: Y } = Ie.reference, ue = Pe.floating.style;
          ue.setProperty("--radix-popper-available-width", `${Oe}px`), ue.setProperty("--radix-popper-available-height", `${O}px`), ue.setProperty("--radix-popper-anchor-width", `${F}px`), ue.setProperty("--radix-popper-anchor-height", `${Y}px`);
        }
      }),
      R && MR({
        element: R,
        padding: v
      }),
      VR({
        arrowWidth: E,
        arrowHeight: B
      }),
      _ && kR({
        strategy: "referenceHidden",
        ...oe
      })
    ]
  }), [re, me] = lb(be), _e = Je(N);
  St(() => {
    pe && (_e == null || _e());
  }, [
    pe,
    _e
  ]);
  const ae = (o = ee.arrow) === null || o === void 0 ? void 0 : o.x, fe = (a = ee.arrow) === null || a === void 0 ? void 0 : a.y, A = ((s = ee.arrow) === null || s === void 0 ? void 0 : s.centerOffset) !== 0, [ne, ye] = Z();
  return St(() => {
    P && ye(window.getComputedStyle(P).zIndex);
  }, [
    P
  ]), /* @__PURE__ */ $("div", {
    ref: H.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...le,
      transform: pe ? le.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: ne,
      "--radix-popper-transform-origin": [
        (i = ee.transformOrigin) === null || i === void 0 ? void 0 : i.x,
        (c = ee.transformOrigin) === null || c === void 0 ? void 0 : c.y
      ].join(" ")
    },
    dir: e.dir
  }, /* @__PURE__ */ $(LR, {
    scope: u,
    placedSide: re,
    onArrowChange: W,
    arrowX: ae,
    arrowY: fe,
    shouldHideArrow: A
  }, /* @__PURE__ */ $(de.div, j({
    "data-side": re,
    "data-align": me
  }, S, {
    ref: K,
    style: {
      ...S.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: pe ? void 0 : "none",
      // hide the content if using the hide middleware and should be hidden
      opacity: (l = ee.hide) !== null && l !== void 0 && l.referenceHidden ? 0 : void 0
    }
  }))));
});
function BR(e) {
  return e !== null;
}
const VR = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, o, a, s;
    const { placement: i, rects: c, middlewareData: l } = t, f = ((n = l.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, p = f ? 0 : e.arrowWidth, h = f ? 0 : e.arrowHeight, [m, v] = lb(i), g = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[v], b = ((r = (o = l.arrow) === null || o === void 0 ? void 0 : o.x) !== null && r !== void 0 ? r : 0) + p / 2, y = ((a = (s = l.arrow) === null || s === void 0 ? void 0 : s.y) !== null && a !== void 0 ? a : 0) + h / 2;
    let x = "", _ = "";
    return m === "bottom" ? (x = f ? g : `${b}px`, _ = `${-h}px`) : m === "top" ? (x = f ? g : `${b}px`, _ = `${c.floating.height + h}px`) : m === "right" ? (x = `${-h}px`, _ = f ? g : `${y}px`) : m === "left" && (x = `${c.floating.width + h}px`, _ = f ? g : `${y}px`), {
      data: {
        x,
        y: _
      }
    };
  }
});
function lb(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const na = AR, ws = IR, $s = FR, Cc = /* @__PURE__ */ L((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ sv.createPortal(/* @__PURE__ */ $(de.div, j({}, o, {
    ref: t
  })), r) : null;
});
function zR(e, t) {
  return cd((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const ft = (e) => {
  const { present: t, children: n } = e, r = WR(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : Ur.only(n), a = Ee(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ sc(o, {
    ref: a
  }) : null;
};
ft.displayName = "Presence";
function WR(e) {
  const [t, n] = Z(), r = q({}), o = q(e), a = q("none"), s = e ? "mounted" : "unmounted", [i, c] = zR(s, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return J(() => {
    const l = Ks(r.current);
    a.current = i === "mounted" ? l : "none";
  }, [
    i
  ]), St(() => {
    const l = r.current, u = o.current;
    if (u !== e) {
      const p = a.current, h = Ks(l);
      e ? c("MOUNT") : h === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(u && p !== h ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    c
  ]), St(() => {
    if (t) {
      const l = (f) => {
        const h = Ks(r.current).includes(f.animationName);
        f.target === t && h && iv(
          () => c("ANIMATION_END")
        );
      }, u = (f) => {
        f.target === t && (a.current = Ks(r.current));
      };
      return t.addEventListener("animationstart", u), t.addEventListener("animationcancel", l), t.addEventListener("animationend", l), () => {
        t.removeEventListener("animationstart", u), t.removeEventListener("animationcancel", l), t.removeEventListener("animationend", l);
      };
    } else
      c("ANIMATION_END");
  }, [
    t,
    c
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(i),
    ref: ve((l) => {
      l && (r.current = getComputedStyle(l)), n(l);
    }, [])
  };
}
function Ks(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function vt({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = UR({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, s = a ? e : r, i = Je(n), c = ve((l) => {
    if (a) {
      const f = typeof l == "function" ? l(e) : l;
      f !== e && i(f);
    } else
      o(l);
  }, [
    a,
    e,
    o,
    i
  ]);
  return [
    s,
    c
  ];
}
function UR({ defaultProp: e, onChange: t }) {
  const n = Z(e), [r] = n, o = q(r), a = Je(t);
  return J(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
const Nl = "rovingFocusGroup.onEntryFocus", HR = {
  bubbles: !1,
  cancelable: !0
}, qd = "RovingFocusGroup", [Ou, ub, KR] = Tr(qd), [GR, jr] = ut(qd, [
  KR
]), [YR, qR] = GR(qd), ZR = /* @__PURE__ */ L((e, t) => /* @__PURE__ */ $(Ou.Provider, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ $(Ou.Slot, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ $(XR, j({}, e, {
  ref: t
}))))), XR = /* @__PURE__ */ L((e, t) => {
  const { __scopeRovingFocusGroup: n, orientation: r, loop: o = !1, dir: a, currentTabStopId: s, defaultCurrentTabStopId: i, onCurrentTabStopIdChange: c, onEntryFocus: l, ...u } = e, f = q(null), p = Ee(t, f), h = zn(a), [m = null, v] = vt({
    prop: s,
    defaultProp: i,
    onChange: c
  }), [g, b] = Z(!1), y = Je(l), x = ub(n), _ = q(!1), [w, N] = Z(0);
  return J(() => {
    const S = f.current;
    if (S)
      return S.addEventListener(Nl, y), () => S.removeEventListener(Nl, y);
  }, [
    y
  ]), /* @__PURE__ */ $(YR, {
    scope: n,
    orientation: r,
    dir: h,
    loop: o,
    currentTabStopId: m,
    onItemFocus: ve(
      (S) => v(S),
      [
        v
      ]
    ),
    onItemShiftTab: ve(
      () => b(!0),
      []
    ),
    onFocusableItemAdd: ve(
      () => N(
        (S) => S + 1
      ),
      []
    ),
    onFocusableItemRemove: ve(
      () => N(
        (S) => S - 1
      ),
      []
    )
  }, /* @__PURE__ */ $(de.div, j({
    tabIndex: g || w === 0 ? -1 : 0,
    "data-orientation": r
  }, u, {
    ref: p,
    style: {
      outline: "none",
      ...e.style
    },
    onMouseDown: X(e.onMouseDown, () => {
      _.current = !0;
    }),
    onFocus: X(e.onFocus, (S) => {
      const D = !_.current;
      if (S.target === S.currentTarget && D && !g) {
        const P = new CustomEvent(Nl, HR);
        if (S.currentTarget.dispatchEvent(P), !P.defaultPrevented) {
          const z = x().filter(
            (E) => E.focusable
          ), K = z.find(
            (E) => E.active
          ), R = z.find(
            (E) => E.id === m
          ), V = [
            K,
            R,
            ...z
          ].filter(Boolean).map(
            (E) => E.ref.current
          );
          db(V);
        }
      }
      _.current = !1;
    }),
    onBlur: X(
      e.onBlur,
      () => b(!1)
    )
  })));
}), QR = "RovingFocusGroupItem", JR = /* @__PURE__ */ L((e, t) => {
  const { __scopeRovingFocusGroup: n, focusable: r = !0, active: o = !1, tabStopId: a, ...s } = e, i = bt(), c = a || i, l = qR(QR, n), u = l.currentTabStopId === c, f = ub(n), { onFocusableItemAdd: p, onFocusableItemRemove: h } = l;
  return J(() => {
    if (r)
      return p(), () => h();
  }, [
    r,
    p,
    h
  ]), /* @__PURE__ */ $(Ou.ItemSlot, {
    scope: n,
    id: c,
    focusable: r,
    active: o
  }, /* @__PURE__ */ $(de.span, j({
    tabIndex: u ? 0 : -1,
    "data-orientation": l.orientation
  }, s, {
    ref: t,
    onMouseDown: X(e.onMouseDown, (m) => {
      r ? l.onItemFocus(c) : m.preventDefault();
    }),
    onFocus: X(
      e.onFocus,
      () => l.onItemFocus(c)
    ),
    onKeyDown: X(e.onKeyDown, (m) => {
      if (m.key === "Tab" && m.shiftKey) {
        l.onItemShiftTab();
        return;
      }
      if (m.target !== m.currentTarget)
        return;
      const v = n4(m, l.orientation, l.dir);
      if (v !== void 0) {
        m.preventDefault();
        let b = f().filter(
          (y) => y.focusable
        ).map(
          (y) => y.ref.current
        );
        if (v === "last")
          b.reverse();
        else if (v === "prev" || v === "next") {
          v === "prev" && b.reverse();
          const y = b.indexOf(m.currentTarget);
          b = l.loop ? r4(b, y + 1) : b.slice(y + 1);
        }
        setTimeout(
          () => db(b)
        );
      }
    })
  })));
}), e4 = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function t4(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function n4(e, t, n) {
  const r = t4(e.key, n);
  if (!(t === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(r)) && !(t === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(r)))
    return e4[r];
}
function db(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function r4(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const Sc = ZR, Nc = JR;
var o4 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, xo = /* @__PURE__ */ new WeakMap(), Gs = /* @__PURE__ */ new WeakMap(), Ys = {}, El = 0, fb = function(e) {
  return e && (e.host || fb(e.parentNode));
}, a4 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = fb(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, s4 = function(e, t, n, r) {
  var o = a4(t, Array.isArray(e) ? e : [e]);
  Ys[n] || (Ys[n] = /* @__PURE__ */ new WeakMap());
  var a = Ys[n], s = [], i = /* @__PURE__ */ new Set(), c = new Set(o), l = function(f) {
    !f || i.has(f) || (i.add(f), l(f.parentNode));
  };
  o.forEach(l);
  var u = function(f) {
    !f || c.has(f) || Array.prototype.forEach.call(f.children, function(p) {
      if (i.has(p))
        u(p);
      else
        try {
          var h = p.getAttribute(r), m = h !== null && h !== "false", v = (xo.get(p) || 0) + 1, g = (a.get(p) || 0) + 1;
          xo.set(p, v), a.set(p, g), s.push(p), v === 1 && m && Gs.set(p, !0), g === 1 && p.setAttribute(n, "true"), m || p.setAttribute(r, "true");
        } catch (b) {
          console.error("aria-hidden: cannot operate on ", p, b);
        }
    });
  };
  return u(t), i.clear(), El++, function() {
    s.forEach(function(f) {
      var p = xo.get(f) - 1, h = a.get(f) - 1;
      xo.set(f, p), a.set(f, h), p || (Gs.has(f) || f.removeAttribute(r), Gs.delete(f)), h || f.removeAttribute(n);
    }), El--, El || (xo = /* @__PURE__ */ new WeakMap(), xo = /* @__PURE__ */ new WeakMap(), Gs = /* @__PURE__ */ new WeakMap(), Ys = {});
  };
}, Ec = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = o4(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), s4(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, Tn = function() {
  return Tn = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, Tn.apply(this, arguments);
};
function pb(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function i4(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, a; r < o; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var di = "right-scroll-bar-position", fi = "width-before-scroll-bar", c4 = "with-scroll-bars-hidden", l4 = "--removed-body-scroll-bar-size";
function Pl(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function u4(e, t) {
  var n = Z(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var d4 = typeof window < "u" ? C.useLayoutEffect : C.useEffect, Jh = /* @__PURE__ */ new WeakMap();
function f4(e, t) {
  var n = u4(null, function(r) {
    return e.forEach(function(o) {
      return Pl(o, r);
    });
  });
  return d4(function() {
    var r = Jh.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), s = n.current;
      o.forEach(function(i) {
        a.has(i) || Pl(i, null);
      }), a.forEach(function(i) {
        o.has(i) || Pl(i, s);
      });
    }
    Jh.set(n, e);
  }, [e]), n;
}
function p4(e) {
  return e;
}
function h4(e, t) {
  t === void 0 && (t = p4);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(a) {
      var s = t(a, r);
      return n.push(s), function() {
        n = n.filter(function(i) {
          return i !== s;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (r = !0; n.length; ) {
        var s = n;
        n = [], s.forEach(a);
      }
      n = {
        push: function(i) {
          return a(i);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(a) {
      r = !0;
      var s = [];
      if (n.length) {
        var i = n;
        n = [], i.forEach(a), s = n;
      }
      var c = function() {
        var u = s;
        s = [], u.forEach(a);
      }, l = function() {
        return Promise.resolve().then(c);
      };
      l(), n = {
        push: function(u) {
          s.push(u), l();
        },
        filter: function(u) {
          return s = s.filter(u), n;
        }
      };
    }
  };
  return o;
}
function m4(e) {
  e === void 0 && (e = {});
  var t = h4(null);
  return t.options = Tn({ async: !0, ssr: !1 }, e), t;
}
var hb = function(e) {
  var t = e.sideCar, n = pb(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return C.createElement(r, Tn({}, n));
};
hb.isSideCarExport = !0;
function v4(e, t) {
  return e.useMedium(t), hb;
}
var mb = m4(), Ol = function() {
}, Pc = C.forwardRef(function(e, t) {
  var n = C.useRef(null), r = C.useState({
    onScrollCapture: Ol,
    onWheelCapture: Ol,
    onTouchMoveCapture: Ol
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, f = e.shards, p = e.sideCar, h = e.noIsolation, m = e.inert, v = e.allowPinchZoom, g = e.as, b = g === void 0 ? "div" : g, y = pb(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), x = p, _ = f4([n, t]), w = Tn(Tn({}, y), o);
  return C.createElement(
    C.Fragment,
    null,
    u && C.createElement(x, { sideCar: mb, removeScrollBar: l, shards: f, noIsolation: h, inert: m, setCallbacks: a, allowPinchZoom: !!v, lockRef: n }),
    s ? C.cloneElement(C.Children.only(i), Tn(Tn({}, w), { ref: _ })) : C.createElement(b, Tn({}, w, { className: c, ref: _ }), i)
  );
});
Pc.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Pc.classNames = {
  fullWidth: fi,
  zeroRight: di
};
var g4 = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function b4() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = g4();
  return t && e.setAttribute("nonce", t), e;
}
function y4(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function x4(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var w4 = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = b4()) && (y4(t, n), x4(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, $4 = function() {
  var e = w4();
  return function(t, n) {
    C.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, vb = function() {
  var e = $4(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, _4 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Tl = function(e) {
  return parseInt(e || "", 10) || 0;
}, C4 = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Tl(n), Tl(r), Tl(o)];
}, S4 = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return _4;
  var t = C4(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, N4 = vb(), jo = "data-scroll-locked", E4 = function(e, t, n, r) {
  var o = e.left, a = e.top, s = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(c4, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(jo, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(i, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(di, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(fi, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(di, " .").concat(di, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(fi, " .").concat(fi, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(jo, `] {
    `).concat(l4, ": ").concat(i, `px;
  }
`);
}, em = function() {
  var e = parseInt(document.body.getAttribute(jo) || "0", 10);
  return isFinite(e) ? e : 0;
}, P4 = function() {
  C.useEffect(function() {
    return document.body.setAttribute(jo, (em() + 1).toString()), function() {
      var e = em() - 1;
      e <= 0 ? document.body.removeAttribute(jo) : document.body.setAttribute(jo, e.toString());
    };
  }, []);
}, O4 = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  P4();
  var a = C.useMemo(function() {
    return S4(o);
  }, [o]);
  return C.createElement(N4, { styles: E4(a, !t, o, n ? "" : "!important") });
}, Tu = !1;
if (typeof window < "u")
  try {
    var qs = Object.defineProperty({}, "passive", {
      get: function() {
        return Tu = !0, !0;
      }
    });
    window.addEventListener("test", qs, qs), window.removeEventListener("test", qs, qs);
  } catch {
    Tu = !1;
  }
var wo = Tu ? { passive: !1 } : !1, T4 = function(e) {
  return e.tagName === "TEXTAREA";
}, gb = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !T4(e) && n[t] === "visible")
  );
}, j4 = function(e) {
  return gb(e, "overflowY");
}, k4 = function(e) {
  return gb(e, "overflowX");
}, tm = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = bb(e, n);
    if (r) {
      var o = yb(e, n), a = o[1], s = o[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, M4 = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, D4 = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, bb = function(e, t) {
  return e === "v" ? j4(t) : k4(t);
}, yb = function(e, t) {
  return e === "v" ? M4(t) : D4(t);
}, A4 = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, R4 = function(e, t, n, r, o) {
  var a = A4(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, c = t.contains(i), l = !1, u = s > 0, f = 0, p = 0;
  do {
    var h = yb(e, i), m = h[0], v = h[1], g = h[2], b = v - g - a * m;
    (m || b) && bb(e, i) && (f += b, p += m), i = i.parentNode;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (u && (f === 0 || !o) || !u && (p === 0 || !o)) && (l = !0), l;
}, Zs = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, nm = function(e) {
  return [e.deltaX, e.deltaY];
}, rm = function(e) {
  return e && "current" in e ? e.current : e;
}, I4 = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, L4 = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, F4 = 0, $o = [];
function B4(e) {
  var t = C.useRef([]), n = C.useRef([0, 0]), r = C.useRef(), o = C.useState(F4++)[0], a = C.useState(function() {
    return vb();
  })[0], s = C.useRef(e);
  C.useEffect(function() {
    s.current = e;
  }, [e]), C.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = i4([e.lockRef.current], (e.shards || []).map(rm), !0).filter(Boolean);
      return v.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = C.useCallback(function(v, g) {
    if ("touches" in v && v.touches.length === 2)
      return !s.current.allowPinchZoom;
    var b = Zs(v), y = n.current, x = "deltaX" in v ? v.deltaX : y[0] - b[0], _ = "deltaY" in v ? v.deltaY : y[1] - b[1], w, N = v.target, S = Math.abs(x) > Math.abs(_) ? "h" : "v";
    if ("touches" in v && S === "h" && N.type === "range")
      return !1;
    var D = tm(S, N);
    if (!D)
      return !0;
    if (D ? w = S : (w = S === "v" ? "h" : "v", D = tm(S, N)), !D)
      return !1;
    if (!r.current && "changedTouches" in v && (x || _) && (r.current = w), !w)
      return !0;
    var P = r.current || w;
    return R4(P, g, v, P === "h" ? x : _, !0);
  }, []), c = C.useCallback(function(v) {
    var g = v;
    if (!(!$o.length || $o[$o.length - 1] !== a)) {
      var b = "deltaY" in g ? nm(g) : Zs(g), y = t.current.filter(function(w) {
        return w.name === g.type && w.target === g.target && I4(w.delta, b);
      })[0];
      if (y && y.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!y) {
        var x = (s.current.shards || []).map(rm).filter(Boolean).filter(function(w) {
          return w.contains(g.target);
        }), _ = x.length > 0 ? i(g, x[0]) : !s.current.noIsolation;
        _ && g.cancelable && g.preventDefault();
      }
    }
  }, []), l = C.useCallback(function(v, g, b, y) {
    var x = { name: v, delta: g, target: b, should: y };
    t.current.push(x), setTimeout(function() {
      t.current = t.current.filter(function(_) {
        return _ !== x;
      });
    }, 1);
  }, []), u = C.useCallback(function(v) {
    n.current = Zs(v), r.current = void 0;
  }, []), f = C.useCallback(function(v) {
    l(v.type, nm(v), v.target, i(v, e.lockRef.current));
  }, []), p = C.useCallback(function(v) {
    l(v.type, Zs(v), v.target, i(v, e.lockRef.current));
  }, []);
  C.useEffect(function() {
    return $o.push(a), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", c, wo), document.addEventListener("touchmove", c, wo), document.addEventListener("touchstart", u, wo), function() {
      $o = $o.filter(function(v) {
        return v !== a;
      }), document.removeEventListener("wheel", c, wo), document.removeEventListener("touchmove", c, wo), document.removeEventListener("touchstart", u, wo);
    };
  }, []);
  var h = e.removeScrollBar, m = e.inert;
  return C.createElement(
    C.Fragment,
    null,
    m ? C.createElement(a, { styles: L4(o) }) : null,
    h ? C.createElement(O4, { gapMode: "margin" }) : null
  );
}
const V4 = v4(mb, B4);
var _s = C.forwardRef(function(e, t) {
  return C.createElement(Pc, Tn({}, e, { ref: t, sideCar: V4 }));
});
_s.classNames = Pc.classNames;
const ju = [
  "Enter",
  " "
], z4 = [
  "ArrowDown",
  "PageUp",
  "Home"
], xb = [
  "ArrowUp",
  "PageDown",
  "End"
], W4 = [
  ...z4,
  ...xb
], U4 = {
  ltr: [
    ...ju,
    "ArrowRight"
  ],
  rtl: [
    ...ju,
    "ArrowLeft"
  ]
}, H4 = {
  ltr: [
    "ArrowLeft"
  ],
  rtl: [
    "ArrowRight"
  ]
}, Oc = "Menu", [Fa, K4, G4] = Tr(Oc), [lo, Cs] = ut(Oc, [
  G4,
  Wn,
  jr
]), Tc = Wn(), wb = jr(), [$b, kr] = lo(Oc), [Y4, Ss] = lo(Oc), q4 = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: s = !0 } = e, i = Tc(t), [c, l] = Z(null), u = q(!1), f = Je(a), p = zn(o);
  return J(() => {
    const h = () => {
      u.current = !0, document.addEventListener("pointerdown", m, {
        capture: !0,
        once: !0
      }), document.addEventListener("pointermove", m, {
        capture: !0,
        once: !0
      });
    }, m = () => u.current = !1;
    return document.addEventListener("keydown", h, {
      capture: !0
    }), () => {
      document.removeEventListener("keydown", h, {
        capture: !0
      }), document.removeEventListener("pointerdown", m, {
        capture: !0
      }), document.removeEventListener("pointermove", m, {
        capture: !0
      });
    };
  }, []), /* @__PURE__ */ $(na, i, /* @__PURE__ */ $($b, {
    scope: t,
    open: n,
    onOpenChange: f,
    content: c,
    onContentChange: l
  }, /* @__PURE__ */ $(Y4, {
    scope: t,
    onClose: ve(
      () => f(!1),
      [
        f
      ]
    ),
    isUsingKeyboardRef: u,
    dir: p,
    modal: s
  }, r)));
}, _b = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenu: n, ...r } = e, o = Tc(n);
  return /* @__PURE__ */ $(ws, j({}, o, r, {
    ref: t
  }));
}), Cb = "MenuPortal", [Z4, Sb] = lo(Cb, {
  forceMount: void 0
}), X4 = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = kr(Cb, t);
  return /* @__PURE__ */ $(Z4, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ $(ft, {
    present: n || a.open
  }, /* @__PURE__ */ $(Cc, {
    asChild: !0,
    container: o
  }, r)));
}, pn = "MenuContent", [Q4, Zd] = lo(pn), J4 = /* @__PURE__ */ L((e, t) => {
  const n = Sb(pn, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = kr(pn, e.__scopeMenu), s = Ss(pn, e.__scopeMenu);
  return /* @__PURE__ */ $(Fa.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ $(ft, {
    present: r || a.open
  }, /* @__PURE__ */ $(Fa.Slot, {
    scope: e.__scopeMenu
  }, s.modal ? /* @__PURE__ */ $(e7, j({}, o, {
    ref: t
  })) : /* @__PURE__ */ $(t7, j({}, o, {
    ref: t
  })))));
}), e7 = /* @__PURE__ */ L((e, t) => {
  const n = kr(pn, e.__scopeMenu), r = q(null), o = Ee(t, r);
  return J(() => {
    const a = r.current;
    if (a)
      return Ec(a);
  }, []), /* @__PURE__ */ $(Xd, j({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: n.open,
    disableOutsideScroll: !0,
    onFocusOutside: X(
      e.onFocusOutside,
      (a) => a.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    ),
    onDismiss: () => n.onOpenChange(!1)
  }));
}), t7 = /* @__PURE__ */ L((e, t) => {
  const n = kr(pn, e.__scopeMenu);
  return /* @__PURE__ */ $(Xd, j({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    onDismiss: () => n.onOpenChange(!1)
  }));
}), Xd = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenu: n, loop: r = !1, trapFocus: o, onOpenAutoFocus: a, onCloseAutoFocus: s, disableOutsidePointerEvents: i, onEntryFocus: c, onEscapeKeyDown: l, onPointerDownOutside: u, onFocusOutside: f, onInteractOutside: p, onDismiss: h, disableOutsideScroll: m, ...v } = e, g = kr(pn, n), b = Ss(pn, n), y = Tc(n), x = wb(n), _ = K4(n), [w, N] = Z(null), S = q(null), D = Ee(t, S, g.onContentChange), P = q(0), z = q(""), K = q(0), R = q(null), W = q("right"), V = q(0), E = m ? _s : vn, B = m ? {
    as: gn,
    allowPinchZoom: !0
  } : void 0, T = (G) => {
    var Q, oe;
    const H = z.current + G, le = _().filter(
      (_e) => !_e.disabled
    ), be = document.activeElement, pe = (Q = le.find(
      (_e) => _e.ref.current === be
    )) === null || Q === void 0 ? void 0 : Q.textValue, ee = le.map(
      (_e) => _e.textValue
    ), re = x7(ee, H, pe), me = (oe = le.find(
      (_e) => _e.textValue === re
    )) === null || oe === void 0 ? void 0 : oe.ref.current;
    (function _e(ae) {
      z.current = ae, window.clearTimeout(P.current), ae !== "" && (P.current = window.setTimeout(
        () => _e(""),
        1e3
      ));
    })(H), me && setTimeout(
      () => me.focus()
    );
  };
  J(() => () => window.clearTimeout(P.current), []), wc();
  const U = ve((G) => {
    var Q, oe;
    return W.current === ((Q = R.current) === null || Q === void 0 ? void 0 : Q.side) && $7(G, (oe = R.current) === null || oe === void 0 ? void 0 : oe.area);
  }, []);
  return /* @__PURE__ */ $(Q4, {
    scope: n,
    searchRef: z,
    onItemEnter: ve((G) => {
      U(G) && G.preventDefault();
    }, [
      U
    ]),
    onItemLeave: ve((G) => {
      var Q;
      U(G) || ((Q = S.current) === null || Q === void 0 || Q.focus(), N(null));
    }, [
      U
    ]),
    onTriggerLeave: ve((G) => {
      U(G) && G.preventDefault();
    }, [
      U
    ]),
    pointerGraceTimerRef: K,
    onPointerGraceIntentChange: ve((G) => {
      R.current = G;
    }, [])
  }, /* @__PURE__ */ $(E, B, /* @__PURE__ */ $($c, {
    asChild: !0,
    trapped: o,
    onMountAutoFocus: X(a, (G) => {
      var Q;
      G.preventDefault(), (Q = S.current) === null || Q === void 0 || Q.focus();
    }),
    onUnmountAutoFocus: s
  }, /* @__PURE__ */ $(co, {
    asChild: !0,
    disableOutsidePointerEvents: i,
    onEscapeKeyDown: l,
    onPointerDownOutside: u,
    onFocusOutside: f,
    onInteractOutside: p,
    onDismiss: h
  }, /* @__PURE__ */ $(Sc, j({
    asChild: !0
  }, x, {
    dir: b.dir,
    orientation: "vertical",
    loop: r,
    currentTabStopId: w,
    onCurrentTabStopIdChange: N,
    onEntryFocus: X(c, (G) => {
      b.isUsingKeyboardRef.current || G.preventDefault();
    })
  }), /* @__PURE__ */ $($s, j({
    role: "menu",
    "aria-orientation": "vertical",
    "data-state": kb(g.open),
    "data-radix-menu-content": "",
    dir: b.dir
  }, y, v, {
    ref: D,
    style: {
      outline: "none",
      ...v.style
    },
    onKeyDown: X(v.onKeyDown, (G) => {
      const oe = G.target.closest("[data-radix-menu-content]") === G.currentTarget, H = G.ctrlKey || G.altKey || G.metaKey, le = G.key.length === 1;
      oe && (G.key === "Tab" && G.preventDefault(), !H && le && T(G.key));
      const be = S.current;
      if (G.target !== be || !W4.includes(G.key))
        return;
      G.preventDefault();
      const ee = _().filter(
        (re) => !re.disabled
      ).map(
        (re) => re.ref.current
      );
      xb.includes(G.key) && ee.reverse(), b7(ee);
    }),
    onBlur: X(e.onBlur, (G) => {
      G.currentTarget.contains(G.target) || (window.clearTimeout(P.current), z.current = "");
    }),
    onPointerMove: X(e.onPointerMove, Ba((G) => {
      const Q = G.target, oe = V.current !== G.clientX;
      if (G.currentTarget.contains(Q) && oe) {
        const H = G.clientX > V.current ? "right" : "left";
        W.current = H, V.current = G.clientX;
      }
    }))
  })))))));
}), Nb = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ $(de.div, j({
    role: "group"
  }, r, {
    ref: t
  }));
}), n7 = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ $(de.div, j({}, r, {
    ref: t
  }));
}), ku = "MenuItem", om = "menu.itemSelect", Qd = /* @__PURE__ */ L((e, t) => {
  const { disabled: n = !1, onSelect: r, ...o } = e, a = q(null), s = Ss(ku, e.__scopeMenu), i = Zd(ku, e.__scopeMenu), c = Ee(t, a), l = q(!1), u = () => {
    const f = a.current;
    if (!n && f) {
      const p = new CustomEvent(om, {
        bubbles: !0,
        cancelable: !0
      });
      f.addEventListener(
        om,
        (h) => r == null ? void 0 : r(h),
        {
          once: !0
        }
      ), $i(f, p), p.defaultPrevented ? l.current = !1 : s.onClose();
    }
  };
  return /* @__PURE__ */ $(Eb, j({}, o, {
    ref: c,
    disabled: n,
    onClick: X(e.onClick, u),
    onPointerDown: (f) => {
      var p;
      (p = e.onPointerDown) === null || p === void 0 || p.call(e, f), l.current = !0;
    },
    onPointerUp: X(e.onPointerUp, (f) => {
      var p;
      l.current || (p = f.currentTarget) === null || p === void 0 || p.click();
    }),
    onKeyDown: X(e.onKeyDown, (f) => {
      const p = i.searchRef.current !== "";
      n || p && f.key === " " || ju.includes(f.key) && (f.currentTarget.click(), f.preventDefault());
    })
  }));
}), Eb = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, s = Zd(ku, n), i = wb(n), c = q(null), l = Ee(t, c), [u, f] = Z(!1), [p, h] = Z("");
  return J(() => {
    const m = c.current;
    if (m) {
      var v;
      h(((v = m.textContent) !== null && v !== void 0 ? v : "").trim());
    }
  }, [
    a.children
  ]), /* @__PURE__ */ $(Fa.ItemSlot, {
    scope: n,
    disabled: r,
    textValue: o ?? p
  }, /* @__PURE__ */ $(Nc, j({
    asChild: !0
  }, i, {
    focusable: !r
  }), /* @__PURE__ */ $(de.div, j({
    role: "menuitem",
    "data-highlighted": u ? "" : void 0,
    "aria-disabled": r || void 0,
    "data-disabled": r ? "" : void 0
  }, a, {
    ref: l,
    onPointerMove: X(e.onPointerMove, Ba((m) => {
      r ? s.onItemLeave(m) : (s.onItemEnter(m), m.defaultPrevented || m.currentTarget.focus());
    })),
    onPointerLeave: X(e.onPointerLeave, Ba(
      (m) => s.onItemLeave(m)
    )),
    onFocus: X(
      e.onFocus,
      () => f(!0)
    ),
    onBlur: X(
      e.onBlur,
      () => f(!1)
    )
  }))));
}), r7 = /* @__PURE__ */ L((e, t) => {
  const { checked: n = !1, onCheckedChange: r, ...o } = e;
  return /* @__PURE__ */ $(Ob, {
    scope: e.__scopeMenu,
    checked: n
  }, /* @__PURE__ */ $(Qd, j({
    role: "menuitemcheckbox",
    "aria-checked": Li(n) ? "mixed" : n
  }, o, {
    ref: t,
    "data-state": Jd(n),
    onSelect: X(
      o.onSelect,
      () => r == null ? void 0 : r(Li(n) ? !0 : !n),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), o7 = "MenuRadioGroup", [a7, s7] = lo(o7, {
  value: void 0,
  onValueChange: () => {
  }
}), i7 = /* @__PURE__ */ L((e, t) => {
  const { value: n, onValueChange: r, ...o } = e, a = Je(r);
  return /* @__PURE__ */ $(a7, {
    scope: e.__scopeMenu,
    value: n,
    onValueChange: a
  }, /* @__PURE__ */ $(Nb, j({}, o, {
    ref: t
  })));
}), c7 = "MenuRadioItem", l7 = /* @__PURE__ */ L((e, t) => {
  const { value: n, ...r } = e, o = s7(c7, e.__scopeMenu), a = n === o.value;
  return /* @__PURE__ */ $(Ob, {
    scope: e.__scopeMenu,
    checked: a
  }, /* @__PURE__ */ $(Qd, j({
    role: "menuitemradio",
    "aria-checked": a
  }, r, {
    ref: t,
    "data-state": Jd(a),
    onSelect: X(r.onSelect, () => {
      var s;
      return (s = o.onValueChange) === null || s === void 0 ? void 0 : s.call(o, n);
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), Pb = "MenuItemIndicator", [Ob, u7] = lo(Pb, {
  checked: !1
}), d7 = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenu: n, forceMount: r, ...o } = e, a = u7(Pb, n);
  return /* @__PURE__ */ $(ft, {
    present: r || Li(a.checked) || a.checked === !0
  }, /* @__PURE__ */ $(de.span, j({}, o, {
    ref: t,
    "data-state": Jd(a.checked)
  })));
}), f7 = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ $(de.div, j({
    role: "separator",
    "aria-orientation": "horizontal"
  }, r, {
    ref: t
  }));
}), Tb = "MenuSub", [p7, jb] = lo(Tb), h7 = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, a = kr(Tb, t), s = Tc(t), [i, c] = Z(null), [l, u] = Z(null), f = Je(o);
  return J(() => (a.open === !1 && f(!1), () => f(!1)), [
    a.open,
    f
  ]), /* @__PURE__ */ $(na, s, /* @__PURE__ */ $($b, {
    scope: t,
    open: r,
    onOpenChange: f,
    content: l,
    onContentChange: u
  }, /* @__PURE__ */ $(p7, {
    scope: t,
    contentId: bt(),
    triggerId: bt(),
    trigger: i,
    onTriggerChange: c
  }, n)));
}, Xs = "MenuSubTrigger", m7 = /* @__PURE__ */ L((e, t) => {
  const n = kr(Xs, e.__scopeMenu), r = Ss(Xs, e.__scopeMenu), o = jb(Xs, e.__scopeMenu), a = Zd(Xs, e.__scopeMenu), s = q(null), { pointerGraceTimerRef: i, onPointerGraceIntentChange: c } = a, l = {
    __scopeMenu: e.__scopeMenu
  }, u = ve(() => {
    s.current && window.clearTimeout(s.current), s.current = null;
  }, []);
  return J(
    () => u,
    [
      u
    ]
  ), J(() => {
    const f = i.current;
    return () => {
      window.clearTimeout(f), c(null);
    };
  }, [
    i,
    c
  ]), /* @__PURE__ */ $(_b, j({
    asChild: !0
  }, l), /* @__PURE__ */ $(Eb, j({
    id: o.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": n.open,
    "aria-controls": o.contentId,
    "data-state": kb(n.open)
  }, e, {
    ref: fs(t, o.onTriggerChange),
    onClick: (f) => {
      var p;
      (p = e.onClick) === null || p === void 0 || p.call(e, f), !(e.disabled || f.defaultPrevented) && (f.currentTarget.focus(), n.open || n.onOpenChange(!0));
    },
    onPointerMove: X(e.onPointerMove, Ba((f) => {
      a.onItemEnter(f), !f.defaultPrevented && !e.disabled && !n.open && !s.current && (a.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
        n.onOpenChange(!0), u();
      }, 100));
    })),
    onPointerLeave: X(e.onPointerLeave, Ba((f) => {
      var p;
      u();
      const h = (p = n.content) === null || p === void 0 ? void 0 : p.getBoundingClientRect();
      if (h) {
        var m;
        const v = (m = n.content) === null || m === void 0 ? void 0 : m.dataset.side, g = v === "right", b = g ? -5 : 5, y = h[g ? "left" : "right"], x = h[g ? "right" : "left"];
        a.onPointerGraceIntentChange({
          area: [
            // consistently within polygon bounds
            {
              x: f.clientX + b,
              y: f.clientY
            },
            {
              x: y,
              y: h.top
            },
            {
              x,
              y: h.top
            },
            {
              x,
              y: h.bottom
            },
            {
              x: y,
              y: h.bottom
            }
          ],
          side: v
        }), window.clearTimeout(i.current), i.current = window.setTimeout(
          () => a.onPointerGraceIntentChange(null),
          300
        );
      } else {
        if (a.onTriggerLeave(f), f.defaultPrevented)
          return;
        a.onPointerGraceIntentChange(null);
      }
    })),
    onKeyDown: X(e.onKeyDown, (f) => {
      const p = a.searchRef.current !== "";
      if (!(e.disabled || p && f.key === " ") && U4[r.dir].includes(f.key)) {
        var h;
        n.onOpenChange(!0), (h = n.content) === null || h === void 0 || h.focus(), f.preventDefault();
      }
    })
  })));
}), v7 = "MenuSubContent", g7 = /* @__PURE__ */ L((e, t) => {
  const n = Sb(pn, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = kr(pn, e.__scopeMenu), s = Ss(pn, e.__scopeMenu), i = jb(v7, e.__scopeMenu), c = q(null), l = Ee(t, c);
  return /* @__PURE__ */ $(Fa.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ $(ft, {
    present: r || a.open
  }, /* @__PURE__ */ $(Fa.Slot, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ $(Xd, j({
    id: i.contentId,
    "aria-labelledby": i.triggerId
  }, o, {
    ref: l,
    align: "start",
    side: s.dir === "rtl" ? "left" : "right",
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    trapFocus: !1,
    onOpenAutoFocus: (u) => {
      var f;
      s.isUsingKeyboardRef.current && ((f = c.current) === null || f === void 0 || f.focus()), u.preventDefault();
    },
    onCloseAutoFocus: (u) => u.preventDefault(),
    onFocusOutside: X(e.onFocusOutside, (u) => {
      u.target !== i.trigger && a.onOpenChange(!1);
    }),
    onEscapeKeyDown: X(e.onEscapeKeyDown, (u) => {
      s.onClose(), u.preventDefault();
    }),
    onKeyDown: X(e.onKeyDown, (u) => {
      const f = u.currentTarget.contains(u.target), p = H4[s.dir].includes(u.key);
      if (f && p) {
        var h;
        a.onOpenChange(!1), (h = i.trigger) === null || h === void 0 || h.focus(), u.preventDefault();
      }
    })
  })))));
});
function kb(e) {
  return e ? "open" : "closed";
}
function Li(e) {
  return e === "indeterminate";
}
function Jd(e) {
  return Li(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function b7(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function y7(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
function x7(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (l) => l === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = y7(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter(
    (l) => l !== n
  ));
  const c = s.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function w7(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, l = t[s].x, u = t[s].y;
    c > r != u > r && n < (l - i) * (r - c) / (u - c) + i && (o = !o);
  }
  return o;
}
function $7(e, t) {
  if (!t)
    return !1;
  const n = {
    x: e.clientX,
    y: e.clientY
  };
  return w7(n, t);
}
function Ba(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const ef = q4, tf = _b, nf = X4, rf = J4, of = Nb, af = n7, sf = Qd, cf = r7, lf = i7, uf = l7, df = d7, ff = f7, pf = h7, hf = m7, mf = g7, Mb = "ContextMenu", [_7, iY] = ut(Mb, [
  Cs
]), It = Cs(), [C7, Db] = _7(Mb), S7 = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, dir: o, modal: a = !0 } = e, [s, i] = Z(!1), c = It(t), l = Je(r), u = ve((f) => {
    i(f), l(f);
  }, [
    l
  ]);
  return /* @__PURE__ */ $(C7, {
    scope: t,
    open: s,
    onOpenChange: u,
    modal: a
  }, /* @__PURE__ */ $(ef, j({}, c, {
    dir: o,
    open: s,
    onOpenChange: u,
    modal: a
  }), n));
}, N7 = "ContextMenuTrigger", E7 = /* @__PURE__ */ L((e, t) => {
  const { __scopeContextMenu: n, disabled: r = !1, ...o } = e, a = Db(N7, n), s = It(n), i = q({
    x: 0,
    y: 0
  }), c = q({
    getBoundingClientRect: () => DOMRect.fromRect({
      width: 0,
      height: 0,
      ...i.current
    })
  }), l = q(0), u = ve(
    () => window.clearTimeout(l.current),
    []
  ), f = (p) => {
    i.current = {
      x: p.clientX,
      y: p.clientY
    }, a.onOpenChange(!0);
  };
  return J(
    () => u,
    [
      u
    ]
  ), J(
    () => void (r && u()),
    [
      r,
      u
    ]
  ), /* @__PURE__ */ $(vn, null, /* @__PURE__ */ $(tf, j({}, s, {
    virtualRef: c
  })), /* @__PURE__ */ $(de.span, j({
    "data-state": a.open ? "open" : "closed",
    "data-disabled": r ? "" : void 0
  }, o, {
    ref: t,
    style: {
      WebkitTouchCallout: "none",
      ...e.style
    },
    onContextMenu: r ? e.onContextMenu : X(e.onContextMenu, (p) => {
      u(), f(p), p.preventDefault();
    }),
    onPointerDown: r ? e.onPointerDown : X(e.onPointerDown, Qs((p) => {
      u(), l.current = window.setTimeout(
        () => f(p),
        700
      );
    })),
    onPointerMove: r ? e.onPointerMove : X(e.onPointerMove, Qs(u)),
    onPointerCancel: r ? e.onPointerCancel : X(e.onPointerCancel, Qs(u)),
    onPointerUp: r ? e.onPointerUp : X(e.onPointerUp, Qs(u))
  })));
}), P7 = (e) => {
  const { __scopeContextMenu: t, ...n } = e, r = It(t);
  return /* @__PURE__ */ $(nf, j({}, r, n));
}, O7 = "ContextMenuContent", T7 = /* @__PURE__ */ L((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Db(O7, n), a = It(n), s = q(!1);
  return /* @__PURE__ */ $(rf, j({}, a, r, {
    ref: t,
    side: "right",
    sideOffset: 2,
    align: "start",
    onCloseAutoFocus: (i) => {
      var c;
      (c = e.onCloseAutoFocus) === null || c === void 0 || c.call(e, i), !i.defaultPrevented && s.current && i.preventDefault(), s.current = !1;
    },
    onInteractOutside: (i) => {
      var c;
      (c = e.onInteractOutside) === null || c === void 0 || c.call(e, i), !i.defaultPrevented && !o.modal && (s.current = !0);
    },
    style: {
      ...e.style,
      "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
}), j7 = /* @__PURE__ */ L((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ $(of, j({}, o, r, {
    ref: t
  }));
}), k7 = /* @__PURE__ */ L((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ $(af, j({}, o, r, {
    ref: t
  }));
}), M7 = /* @__PURE__ */ L((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ $(sf, j({}, o, r, {
    ref: t
  }));
}), D7 = /* @__PURE__ */ L((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ $(cf, j({}, o, r, {
    ref: t
  }));
}), A7 = /* @__PURE__ */ L((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ $(lf, j({}, o, r, {
    ref: t
  }));
}), R7 = /* @__PURE__ */ L((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ $(uf, j({}, o, r, {
    ref: t
  }));
}), I7 = /* @__PURE__ */ L((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ $(df, j({}, o, r, {
    ref: t
  }));
}), L7 = /* @__PURE__ */ L((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ $(ff, j({}, o, r, {
    ref: t
  }));
}), F7 = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, open: o, defaultOpen: a } = e, s = It(t), [i, c] = vt({
    prop: o,
    defaultProp: a,
    onChange: r
  });
  return /* @__PURE__ */ $(pf, j({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, B7 = /* @__PURE__ */ L((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ $(hf, j({}, o, r, {
    ref: t
  }));
}), V7 = /* @__PURE__ */ L((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ $(mf, j({}, o, r, {
    ref: t,
    style: {
      ...e.style,
      "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
});
function Qs(e) {
  return (t) => t.pointerType !== "mouse" ? e(t) : void 0;
}
const z7 = S7, W7 = E7, Ab = P7, Rb = T7, U7 = j7, Ib = k7, Lb = M7, Fb = D7, H7 = A7, Bb = R7, Vb = I7, zb = L7, K7 = F7, Wb = B7, Ub = V7, cY = z7, lY = W7, uY = U7, dY = Ab, fY = K7, pY = H7, G7 = C.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ d.jsxs(
  Wb,
  {
    ref: o,
    className: M(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ d.jsx(Pr, { className: "ml-auto h-4 w-4" })
    ]
  }
));
G7.displayName = Wb.displayName;
const Y7 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Ub,
  {
    ref: n,
    className: M(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in slide-in-from-left-1",
      e
    ),
    ...t
  }
));
Y7.displayName = Ub.displayName;
const q7 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(Ab, { children: /* @__PURE__ */ d.jsx(
  Rb,
  {
    ref: n,
    className: M(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in fade-in-80",
      e
    ),
    ...t
  }
) }));
q7.displayName = Rb.displayName;
const Z7 = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ d.jsx(
  Lb,
  {
    ref: r,
    className: M(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
Z7.displayName = Lb.displayName;
const X7 = C.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ d.jsxs(
  Fb,
  {
    ref: o,
    className: M(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ d.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ d.jsx(Vb, { children: /* @__PURE__ */ d.jsx(rn, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
X7.displayName = Fb.displayName;
const Q7 = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsxs(
  Bb,
  {
    ref: r,
    className: M(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ d.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ d.jsx(Vb, { children: /* @__PURE__ */ d.jsx(lc, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
Q7.displayName = Bb.displayName;
const J7 = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ d.jsx(
  Ib,
  {
    ref: r,
    className: M(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      t && "pl-8",
      e
    ),
    ...n
  }
));
J7.displayName = Ib.displayName;
const e8 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  zb,
  {
    ref: n,
    className: M("-mx-1 my-1 h-px bg-border", e),
    ...t
  }
));
e8.displayName = zb.displayName;
const t8 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsx(
  "span",
  {
    className: M(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
t8.displayName = "ContextMenuShortcut";
var Ns = (e) => e.type === "checkbox", No = (e) => e instanceof Date, Mt = (e) => e == null;
const Hb = (e) => typeof e == "object";
var Ct = (e) => !Mt(e) && !Array.isArray(e) && Hb(e) && !No(e), Kb = (e) => Ct(e) && e.target ? Ns(e.target) ? e.target.checked : e.target.value : e, n8 = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, Gb = (e, t) => e.has(n8(t)), r8 = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return Ct(t) && t.hasOwnProperty("isPrototypeOf");
}, vf = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Bt(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(vf && (e instanceof Blob || e instanceof FileList)) && (n || Ct(e)))
    if (t = n ? [] : {}, !n && !r8(e))
      t = e;
    else
      for (const r in e)
        e.hasOwnProperty(r) && (t[r] = Bt(e[r]));
  else
    return e;
  return t;
}
var Es = (e) => Array.isArray(e) ? e.filter(Boolean) : [], ht = (e) => e === void 0, he = (e, t, n) => {
  if (!t || !Ct(e))
    return n;
  const r = Es(t.split(/[,[\].]+?/)).reduce((o, a) => Mt(o) ? o : o[a], e);
  return ht(r) || r === e ? ht(e[t]) ? n : e[t] : r;
}, ln = (e) => typeof e == "boolean";
const Fi = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, dn = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, qn = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, Yb = I.createContext(null), jc = () => I.useContext(Yb), o8 = (e) => {
  const { children: t, ...n } = e;
  return I.createElement(Yb.Provider, { value: n }, t);
};
var qb = (e, t, n, r = !0) => {
  const o = {
    defaultValues: t._defaultValues
  };
  for (const a in e)
    Object.defineProperty(o, a, {
      get: () => {
        const s = a;
        return t._proxyFormState[s] !== dn.all && (t._proxyFormState[s] = !r || dn.all), n && (n[s] = !0), e[s];
      }
    });
  return o;
}, Kt = (e) => Ct(e) && !Object.keys(e).length, Zb = (e, t, n, r) => {
  n(e);
  const { name: o, ...a } = e;
  return Kt(a) || Object.keys(a).length >= Object.keys(t).length || Object.keys(a).find((s) => t[s] === (!r || dn.all));
}, pi = (e) => Array.isArray(e) ? e : [e], Xb = (e, t, n) => !e || !t || e === t || pi(e).some((r) => r && (n ? r === t : r.startsWith(t) || t.startsWith(r)));
function gf(e) {
  const t = I.useRef(e);
  t.current = e, I.useEffect(() => {
    const n = !e.disabled && t.current.subject && t.current.subject.subscribe({
      next: t.current.next
    });
    return () => {
      n && n.unsubscribe();
    };
  }, [e.disabled]);
}
function a8(e) {
  const t = jc(), { control: n = t.control, disabled: r, name: o, exact: a } = e || {}, [s, i] = I.useState(n._formState), c = I.useRef(!0), l = I.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), u = I.useRef(o);
  return u.current = o, gf({
    disabled: r,
    next: (f) => c.current && Xb(u.current, f.name, a) && Zb(f, l.current, n._updateFormState) && i({
      ...n._formState,
      ...f
    }),
    subject: n._subjects.state
  }), I.useEffect(() => (c.current = !0, l.current.isValid && n._updateValid(!0), () => {
    c.current = !1;
  }), [n]), qb(s, n, l.current, !1);
}
var Mn = (e) => typeof e == "string", Qb = (e, t, n, r, o) => Mn(e) ? (r && t.watch.add(e), he(n, e, o)) : Array.isArray(e) ? e.map((a) => (r && t.watch.add(a), he(n, a))) : (r && (t.watchAll = !0), n);
function s8(e) {
  const t = jc(), { control: n = t.control, name: r, defaultValue: o, disabled: a, exact: s } = e || {}, i = I.useRef(r);
  i.current = r, gf({
    disabled: a,
    subject: n._subjects.values,
    next: (u) => {
      Xb(i.current, u.name, s) && l(Bt(Qb(i.current, n._names, u.values || n._formValues, !1, o)));
    }
  });
  const [c, l] = I.useState(n._getWatch(r, o));
  return I.useEffect(() => n._removeUnmounted()), c;
}
var bf = (e) => /^\w*$/.test(e), Jb = (e) => Es(e.replace(/["|']|\]/g, "").split(/\.|\[/)), Ze = (e, t, n) => {
  let r = -1;
  const o = bf(t) ? [t] : Jb(t), a = o.length, s = a - 1;
  for (; ++r < a; ) {
    const i = o[r];
    let c = n;
    if (r !== s) {
      const l = e[i];
      c = Ct(l) || Array.isArray(l) ? l : isNaN(+o[r + 1]) ? {} : [];
    }
    e[i] = c, e = e[i];
  }
  return e;
};
function i8(e) {
  const t = jc(), { name: n, disabled: r, control: o = t.control, shouldUnregister: a } = e, s = Gb(o._names.array, n), i = s8({
    control: o,
    name: n,
    defaultValue: he(o._formValues, n, he(o._defaultValues, n, e.defaultValue)),
    exact: !0
  }), c = a8({
    control: o,
    name: n
  }), l = I.useRef(o.register(n, {
    ...e.rules,
    value: i,
    ...ln(e.disabled) ? { disabled: e.disabled } : {}
  }));
  return I.useEffect(() => {
    const u = o._options.shouldUnregister || a, f = (p, h) => {
      const m = he(o._fields, p);
      m && (m._f.mount = h);
    };
    if (f(n, !0), u) {
      const p = Bt(he(o._options.defaultValues, n));
      Ze(o._defaultValues, n, p), ht(he(o._formValues, n)) && Ze(o._formValues, n, p);
    }
    return () => {
      (s ? u && !o._state.action : u) ? o.unregister(n) : f(n, !1);
    };
  }, [n, o, s, a]), I.useEffect(() => {
    he(o._fields, n) && o._updateDisabledField({
      disabled: r,
      fields: o._fields,
      name: n,
      value: he(o._fields, n)._f.value
    });
  }, [r, n, o]), {
    field: {
      name: n,
      value: i,
      ...ln(r) || c.disabled ? { disabled: c.disabled || r } : {},
      onChange: I.useCallback((u) => l.current.onChange({
        target: {
          value: Kb(u),
          name: n
        },
        type: Fi.CHANGE
      }), [n]),
      onBlur: I.useCallback(() => l.current.onBlur({
        target: {
          value: he(o._formValues, n),
          name: n
        },
        type: Fi.BLUR
      }), [n, o]),
      ref: (u) => {
        const f = he(o._fields, n);
        f && u && (f._f.ref = {
          focus: () => u.focus(),
          select: () => u.select(),
          setCustomValidity: (p) => u.setCustomValidity(p),
          reportValidity: () => u.reportValidity()
        });
      }
    },
    formState: c,
    fieldState: Object.defineProperties({}, {
      invalid: {
        enumerable: !0,
        get: () => !!he(c.errors, n)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!he(c.dirtyFields, n)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!he(c.touchedFields, n)
      },
      isValidating: {
        enumerable: !0,
        get: () => !!he(c.validatingFields, n)
      },
      error: {
        enumerable: !0,
        get: () => he(c.errors, n)
      }
    })
  };
}
const c8 = (e) => e.render(i8(e));
var ey = (e, t, n, r, o) => t ? {
  ...n[e],
  types: {
    ...n[e] && n[e].types ? n[e].types : {},
    [r]: o || !0
  }
} : {}, am = (e) => ({
  isOnSubmit: !e || e === dn.onSubmit,
  isOnBlur: e === dn.onBlur,
  isOnChange: e === dn.onChange,
  isOnAll: e === dn.all,
  isOnTouch: e === dn.onTouched
}), sm = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some((r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))));
const Na = (e, t, n, r) => {
  for (const o of n || Object.keys(e)) {
    const a = he(e, o);
    if (a) {
      const { _f: s, ...i } = a;
      if (s) {
        if (s.refs && s.refs[0] && t(s.refs[0], o) && !r)
          break;
        if (s.ref && t(s.ref, s.name) && !r)
          break;
        Na(i, t);
      } else
        Ct(i) && Na(i, t);
    }
  }
};
var l8 = (e, t, n) => {
  const r = Es(he(e, n));
  return Ze(r, "root", t[n]), Ze(e, n, r), e;
}, yf = (e) => e.type === "file", gr = (e) => typeof e == "function", Bi = (e) => {
  if (!vf)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, hi = (e) => Mn(e), xf = (e) => e.type === "radio", Vi = (e) => e instanceof RegExp;
const im = {
  value: !1,
  isValid: !1
}, cm = { value: !0, isValid: !0 };
var ty = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((n) => n && n.checked && !n.disabled).map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !ht(e[0].attributes.value) ? ht(e[0].value) || e[0].value === "" ? cm : { value: e[0].value, isValid: !0 } : cm
    ) : im;
  }
  return im;
};
const lm = {
  isValid: !1,
  value: null
};
var ny = (e) => Array.isArray(e) ? e.reduce((t, n) => n && n.checked && !n.disabled ? {
  isValid: !0,
  value: n.value
} : t, lm) : lm;
function um(e, t, n = "validate") {
  if (hi(e) || Array.isArray(e) && e.every(hi) || ln(e) && !e)
    return {
      type: n,
      message: hi(e) ? e : "",
      ref: t
    };
}
var _o = (e) => Ct(e) && !Vi(e) ? e : {
  value: e,
  message: ""
}, dm = async (e, t, n, r, o) => {
  const { ref: a, refs: s, required: i, maxLength: c, minLength: l, min: u, max: f, pattern: p, validate: h, name: m, valueAsNumber: v, mount: g, disabled: b } = e._f, y = he(t, m);
  if (!g || b)
    return {};
  const x = s ? s[0] : a, _ = (R) => {
    r && x.reportValidity && (x.setCustomValidity(ln(R) ? "" : R || ""), x.reportValidity());
  }, w = {}, N = xf(a), S = Ns(a), D = N || S, P = (v || yf(a)) && ht(a.value) && ht(y) || Bi(a) && a.value === "" || y === "" || Array.isArray(y) && !y.length, z = ey.bind(null, m, n, w), K = (R, W, V, E = qn.maxLength, B = qn.minLength) => {
    const T = R ? W : V;
    w[m] = {
      type: R ? E : B,
      message: T,
      ref: a,
      ...z(R ? E : B, T)
    };
  };
  if (o ? !Array.isArray(y) || !y.length : i && (!D && (P || Mt(y)) || ln(y) && !y || S && !ty(s).isValid || N && !ny(s).isValid)) {
    const { value: R, message: W } = hi(i) ? { value: !!i, message: i } : _o(i);
    if (R && (w[m] = {
      type: qn.required,
      message: W,
      ref: x,
      ...z(qn.required, W)
    }, !n))
      return _(W), w;
  }
  if (!P && (!Mt(u) || !Mt(f))) {
    let R, W;
    const V = _o(f), E = _o(u);
    if (!Mt(y) && !isNaN(y)) {
      const B = a.valueAsNumber || y && +y;
      Mt(V.value) || (R = B > V.value), Mt(E.value) || (W = B < E.value);
    } else {
      const B = a.valueAsDate || new Date(y), T = (Q) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + Q), U = a.type == "time", G = a.type == "week";
      Mn(V.value) && y && (R = U ? T(y) > T(V.value) : G ? y > V.value : B > new Date(V.value)), Mn(E.value) && y && (W = U ? T(y) < T(E.value) : G ? y < E.value : B < new Date(E.value));
    }
    if ((R || W) && (K(!!R, V.message, E.message, qn.max, qn.min), !n))
      return _(w[m].message), w;
  }
  if ((c || l) && !P && (Mn(y) || o && Array.isArray(y))) {
    const R = _o(c), W = _o(l), V = !Mt(R.value) && y.length > +R.value, E = !Mt(W.value) && y.length < +W.value;
    if ((V || E) && (K(V, R.message, W.message), !n))
      return _(w[m].message), w;
  }
  if (p && !P && Mn(y)) {
    const { value: R, message: W } = _o(p);
    if (Vi(R) && !y.match(R) && (w[m] = {
      type: qn.pattern,
      message: W,
      ref: a,
      ...z(qn.pattern, W)
    }, !n))
      return _(W), w;
  }
  if (h) {
    if (gr(h)) {
      const R = await h(y, t), W = um(R, x);
      if (W && (w[m] = {
        ...W,
        ...z(qn.validate, W.message)
      }, !n))
        return _(W.message), w;
    } else if (Ct(h)) {
      let R = {};
      for (const W in h) {
        if (!Kt(R) && !n)
          break;
        const V = um(await h[W](y, t), x, W);
        V && (R = {
          ...V,
          ...z(W, V.message)
        }, _(V.message), n && (w[m] = R));
      }
      if (!Kt(R) && (w[m] = {
        ref: x,
        ...R
      }, !n))
        return w;
    }
  }
  return _(!0), w;
};
function u8(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; )
    e = ht(e) ? r++ : e[t[r++]];
  return e;
}
function d8(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !ht(e[t]))
      return !1;
  return !0;
}
function _t(e, t) {
  const n = Array.isArray(t) ? t : bf(t) ? [t] : Jb(t), r = n.length === 1 ? e : u8(e, n), o = n.length - 1, a = n[o];
  return r && delete r[a], o !== 0 && (Ct(r) && Kt(r) || Array.isArray(r) && d8(r)) && _t(e, n.slice(0, -1)), e;
}
var jl = () => {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (o) => {
      for (const a of e)
        a.next && a.next(o);
    },
    subscribe: (o) => (e.push(o), {
      unsubscribe: () => {
        e = e.filter((a) => a !== o);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
}, zi = (e) => Mt(e) || !Hb(e);
function Wr(e, t) {
  if (zi(e) || zi(t))
    return e === t;
  if (No(e) && No(t))
    return e.getTime() === t.getTime();
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (const o of n) {
    const a = e[o];
    if (!r.includes(o))
      return !1;
    if (o !== "ref") {
      const s = t[o];
      if (No(a) && No(s) || Ct(a) && Ct(s) || Array.isArray(a) && Array.isArray(s) ? !Wr(a, s) : a !== s)
        return !1;
    }
  }
  return !0;
}
var ry = (e) => e.type === "select-multiple", f8 = (e) => xf(e) || Ns(e), kl = (e) => Bi(e) && e.isConnected, oy = (e) => {
  for (const t in e)
    if (gr(e[t]))
      return !0;
  return !1;
};
function Wi(e, t = {}) {
  const n = Array.isArray(e);
  if (Ct(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || Ct(e[r]) && !oy(e[r]) ? (t[r] = Array.isArray(e[r]) ? [] : {}, Wi(e[r], t[r])) : Mt(e[r]) || (t[r] = !0);
  return t;
}
function ay(e, t, n) {
  const r = Array.isArray(e);
  if (Ct(e) || r)
    for (const o in e)
      Array.isArray(e[o]) || Ct(e[o]) && !oy(e[o]) ? ht(t) || zi(n[o]) ? n[o] = Array.isArray(e[o]) ? Wi(e[o], []) : { ...Wi(e[o]) } : ay(e[o], Mt(t) ? {} : t[o], n[o]) : n[o] = !Wr(e[o], t[o]);
  return n;
}
var Js = (e, t) => ay(e, t, Wi(t)), sy = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) => ht(e) ? e : t ? e === "" ? NaN : e && +e : n && Mn(e) ? new Date(e) : r ? r(e) : e;
function Ml(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
    return yf(t) ? t.files : xf(t) ? ny(e.refs).value : ry(t) ? [...t.selectedOptions].map(({ value: n }) => n) : Ns(t) ? ty(e.refs).value : sy(ht(t.value) ? e.ref.value : t.value, e);
}
var p8 = (e, t, n, r) => {
  const o = {};
  for (const a of e) {
    const s = he(t, a);
    s && Ze(o, a, s._f);
  }
  return {
    criteriaMode: n,
    names: [...e],
    fields: o,
    shouldUseNativeValidation: r
  };
}, xa = (e) => ht(e) ? e : Vi(e) ? e.source : Ct(e) ? Vi(e.value) ? e.value.source : e.value : e, h8 = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function fm(e, t, n) {
  const r = he(e, n);
  if (r || bf(n))
    return {
      error: r,
      name: n
    };
  const o = n.split(".");
  for (; o.length; ) {
    const a = o.join("."), s = he(t, a), i = he(e, a);
    if (s && !Array.isArray(s) && n !== a)
      return { name: n };
    if (i && i.type)
      return {
        name: a,
        error: i
      };
    o.pop();
  }
  return {
    name: n
  };
}
var m8 = (e, t, n, r, o) => o.isOnAll ? !1 : !n && o.isOnTouch ? !(t || e) : (n ? r.isOnBlur : o.isOnBlur) ? !e : (n ? r.isOnChange : o.isOnChange) ? e : !0, v8 = (e, t) => !Es(he(e, t)).length && _t(e, t);
const g8 = {
  mode: dn.onSubmit,
  reValidateMode: dn.onChange,
  shouldFocusError: !0
};
function b8(e = {}) {
  let t = {
    ...g8,
    ...e
  }, n = {
    submitCount: 0,
    isDirty: !1,
    isLoading: gr(t.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    validatingFields: {},
    errors: t.errors || {},
    disabled: t.disabled || !1
  }, r = {}, o = Ct(t.defaultValues) || Ct(t.values) ? Bt(t.defaultValues || t.values) || {} : {}, a = t.shouldUnregister ? {} : Bt(o), s = {
    action: !1,
    mount: !1,
    watch: !1
  }, i = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, c, l = 0;
  const u = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, f = {
    values: jl(),
    array: jl(),
    state: jl()
  }, p = am(t.mode), h = am(t.reValidateMode), m = t.criteriaMode === dn.all, v = (O) => (F) => {
    clearTimeout(l), l = setTimeout(O, F);
  }, g = async (O) => {
    if (u.isValid || O) {
      const F = t.resolver ? Kt((await D()).errors) : await z(r, !0);
      F !== n.isValid && f.state.next({
        isValid: F
      });
    }
  }, b = (O, F) => {
    (u.isValidating || u.validatingFields) && ((O || Array.from(i.mount)).forEach((Y) => {
      Y && (F ? Ze(n.validatingFields, Y, F) : _t(n.validatingFields, Y));
    }), f.state.next({
      validatingFields: n.validatingFields,
      isValidating: !Kt(n.validatingFields)
    }));
  }, y = (O, F = [], Y, ue, ce = !0, te = !0) => {
    if (ue && Y) {
      if (s.action = !0, te && Array.isArray(he(r, O))) {
        const we = Y(he(r, O), ue.argA, ue.argB);
        ce && Ze(r, O, we);
      }
      if (te && Array.isArray(he(n.errors, O))) {
        const we = Y(he(n.errors, O), ue.argA, ue.argB);
        ce && Ze(n.errors, O, we), v8(n.errors, O);
      }
      if (u.touchedFields && te && Array.isArray(he(n.touchedFields, O))) {
        const we = Y(he(n.touchedFields, O), ue.argA, ue.argB);
        ce && Ze(n.touchedFields, O, we);
      }
      u.dirtyFields && (n.dirtyFields = Js(o, a)), f.state.next({
        name: O,
        isDirty: R(O, F),
        dirtyFields: n.dirtyFields,
        errors: n.errors,
        isValid: n.isValid
      });
    } else
      Ze(a, O, F);
  }, x = (O, F) => {
    Ze(n.errors, O, F), f.state.next({
      errors: n.errors
    });
  }, _ = (O) => {
    n.errors = O, f.state.next({
      errors: n.errors,
      isValid: !1
    });
  }, w = (O, F, Y, ue) => {
    const ce = he(r, O);
    if (ce) {
      const te = he(a, O, ht(Y) ? he(o, O) : Y);
      ht(te) || ue && ue.defaultChecked || F ? Ze(a, O, F ? te : Ml(ce._f)) : E(O, te), s.mount && g();
    }
  }, N = (O, F, Y, ue, ce) => {
    let te = !1, we = !1;
    const De = {
      name: O
    }, Ke = !!(he(r, O) && he(r, O)._f.disabled);
    if (!Y || ue) {
      u.isDirty && (we = n.isDirty, n.isDirty = De.isDirty = R(), te = we !== De.isDirty);
      const et = Ke || Wr(he(o, O), F);
      we = !!(!Ke && he(n.dirtyFields, O)), et || Ke ? _t(n.dirtyFields, O) : Ze(n.dirtyFields, O, !0), De.dirtyFields = n.dirtyFields, te = te || u.dirtyFields && we !== !et;
    }
    if (Y) {
      const et = he(n.touchedFields, O);
      et || (Ze(n.touchedFields, O, Y), De.touchedFields = n.touchedFields, te = te || u.touchedFields && et !== Y);
    }
    return te && ce && f.state.next(De), te ? De : {};
  }, S = (O, F, Y, ue) => {
    const ce = he(n.errors, O), te = u.isValid && ln(F) && n.isValid !== F;
    if (e.delayError && Y ? (c = v(() => x(O, Y)), c(e.delayError)) : (clearTimeout(l), c = null, Y ? Ze(n.errors, O, Y) : _t(n.errors, O)), (Y ? !Wr(ce, Y) : ce) || !Kt(ue) || te) {
      const we = {
        ...ue,
        ...te && ln(F) ? { isValid: F } : {},
        errors: n.errors,
        name: O
      };
      n = {
        ...n,
        ...we
      }, f.state.next(we);
    }
  }, D = async (O) => {
    b(O, !0);
    const F = await t.resolver(a, t.context, p8(O || i.mount, r, t.criteriaMode, t.shouldUseNativeValidation));
    return b(O), F;
  }, P = async (O) => {
    const { errors: F } = await D(O);
    if (O)
      for (const Y of O) {
        const ue = he(F, Y);
        ue ? Ze(n.errors, Y, ue) : _t(n.errors, Y);
      }
    else
      n.errors = F;
    return F;
  }, z = async (O, F, Y = {
    valid: !0
  }) => {
    for (const ue in O) {
      const ce = O[ue];
      if (ce) {
        const { _f: te, ...we } = ce;
        if (te) {
          const De = i.array.has(te.name);
          b([ue], !0);
          const Ke = await dm(ce, a, m, t.shouldUseNativeValidation && !F, De);
          if (b([ue]), Ke[te.name] && (Y.valid = !1, F))
            break;
          !F && (he(Ke, te.name) ? De ? l8(n.errors, Ke, te.name) : Ze(n.errors, te.name, Ke[te.name]) : _t(n.errors, te.name));
        }
        we && await z(we, F, Y);
      }
    }
    return Y.valid;
  }, K = () => {
    for (const O of i.unMount) {
      const F = he(r, O);
      F && (F._f.refs ? F._f.refs.every((Y) => !kl(Y)) : !kl(F._f.ref)) && ee(O);
    }
    i.unMount = /* @__PURE__ */ new Set();
  }, R = (O, F) => (O && F && Ze(a, O, F), !Wr(oe(), o)), W = (O, F, Y) => Qb(O, i, {
    ...s.mount ? a : ht(F) ? o : Mn(O) ? { [O]: F } : F
  }, Y, F), V = (O) => Es(he(s.mount ? a : o, O, e.shouldUnregister ? he(o, O, []) : [])), E = (O, F, Y = {}) => {
    const ue = he(r, O);
    let ce = F;
    if (ue) {
      const te = ue._f;
      te && (!te.disabled && Ze(a, O, sy(F, te)), ce = Bi(te.ref) && Mt(F) ? "" : F, ry(te.ref) ? [...te.ref.options].forEach((we) => we.selected = ce.includes(we.value)) : te.refs ? Ns(te.ref) ? te.refs.length > 1 ? te.refs.forEach((we) => (!we.defaultChecked || !we.disabled) && (we.checked = Array.isArray(ce) ? !!ce.find((De) => De === we.value) : ce === we.value)) : te.refs[0] && (te.refs[0].checked = !!ce) : te.refs.forEach((we) => we.checked = we.value === ce) : yf(te.ref) ? te.ref.value = "" : (te.ref.value = ce, te.ref.type || f.values.next({
        name: O,
        values: { ...a }
      })));
    }
    (Y.shouldDirty || Y.shouldTouch) && N(O, ce, Y.shouldTouch, Y.shouldDirty, !0), Y.shouldValidate && Q(O);
  }, B = (O, F, Y) => {
    for (const ue in F) {
      const ce = F[ue], te = `${O}.${ue}`, we = he(r, te);
      (i.array.has(O) || !zi(ce) || we && !we._f) && !No(ce) ? B(te, ce, Y) : E(te, ce, Y);
    }
  }, T = (O, F, Y = {}) => {
    const ue = he(r, O), ce = i.array.has(O), te = Bt(F);
    Ze(a, O, te), ce ? (f.array.next({
      name: O,
      values: { ...a }
    }), (u.isDirty || u.dirtyFields) && Y.shouldDirty && f.state.next({
      name: O,
      dirtyFields: Js(o, a),
      isDirty: R(O, te)
    })) : ue && !ue._f && !Mt(te) ? B(O, te, Y) : E(O, te, Y), sm(O, i) && f.state.next({ ...n }), f.values.next({
      name: s.mount ? O : void 0,
      values: { ...a }
    });
  }, U = async (O) => {
    s.mount = !0;
    const F = O.target;
    let Y = F.name, ue = !0;
    const ce = he(r, Y), te = () => F.type ? Ml(ce._f) : Kb(O), we = (De) => {
      ue = Number.isNaN(De) || De === he(a, Y, De);
    };
    if (ce) {
      let De, Ke;
      const et = te(), yt = O.type === Fi.BLUR || O.type === Fi.FOCUS_OUT, Xt = !h8(ce._f) && !t.resolver && !he(n.errors, Y) && !ce._f.deps || m8(yt, he(n.touchedFields, Y), n.isSubmitted, h, p), Ce = sm(Y, i, yt);
      Ze(a, Y, et), yt ? (ce._f.onBlur && ce._f.onBlur(O), c && c(0)) : ce._f.onChange && ce._f.onChange(O);
      const Se = N(Y, et, yt, !1), Be = !Kt(Se) || Ce;
      if (!yt && f.values.next({
        name: Y,
        type: O.type,
        values: { ...a }
      }), Xt)
        return u.isValid && g(), Be && f.state.next({ name: Y, ...Ce ? {} : Se });
      if (!yt && Ce && f.state.next({ ...n }), t.resolver) {
        const { errors: Le } = await D([Y]);
        if (we(et), ue) {
          const Xe = fm(n.errors, r, Y), tt = fm(Le, r, Xe.name || Y);
          De = tt.error, Y = tt.name, Ke = Kt(Le);
        }
      } else
        b([Y], !0), De = (await dm(ce, a, m, t.shouldUseNativeValidation))[Y], b([Y]), we(et), ue && (De ? Ke = !1 : u.isValid && (Ke = await z(r, !0)));
      ue && (ce._f.deps && Q(ce._f.deps), S(Y, Ke, De, Se));
    }
  }, G = (O, F) => {
    if (he(n.errors, F) && O.focus)
      return O.focus(), 1;
  }, Q = async (O, F = {}) => {
    let Y, ue;
    const ce = pi(O);
    if (t.resolver) {
      const te = await P(ht(O) ? O : ce);
      Y = Kt(te), ue = O ? !ce.some((we) => he(te, we)) : Y;
    } else
      O ? (ue = (await Promise.all(ce.map(async (te) => {
        const we = he(r, te);
        return await z(we && we._f ? { [te]: we } : we);
      }))).every(Boolean), !(!ue && !n.isValid) && g()) : ue = Y = await z(r);
    return f.state.next({
      ...!Mn(O) || u.isValid && Y !== n.isValid ? {} : { name: O },
      ...t.resolver || !O ? { isValid: Y } : {},
      errors: n.errors
    }), F.shouldFocus && !ue && Na(r, G, O ? ce : i.mount), ue;
  }, oe = (O) => {
    const F = {
      ...o,
      ...s.mount ? a : {}
    };
    return ht(O) ? F : Mn(O) ? he(F, O) : O.map((Y) => he(F, Y));
  }, H = (O, F) => ({
    invalid: !!he((F || n).errors, O),
    isDirty: !!he((F || n).dirtyFields, O),
    isTouched: !!he((F || n).touchedFields, O),
    isValidating: !!he((F || n).validatingFields, O),
    error: he((F || n).errors, O)
  }), le = (O) => {
    O && pi(O).forEach((F) => _t(n.errors, F)), f.state.next({
      errors: O ? n.errors : {}
    });
  }, be = (O, F, Y) => {
    const ue = (he(r, O, { _f: {} })._f || {}).ref;
    Ze(n.errors, O, {
      ...F,
      ref: ue
    }), f.state.next({
      name: O,
      errors: n.errors,
      isValid: !1
    }), Y && Y.shouldFocus && ue && ue.focus && ue.focus();
  }, pe = (O, F) => gr(O) ? f.values.subscribe({
    next: (Y) => O(W(void 0, F), Y)
  }) : W(O, F, !0), ee = (O, F = {}) => {
    for (const Y of O ? pi(O) : i.mount)
      i.mount.delete(Y), i.array.delete(Y), F.keepValue || (_t(r, Y), _t(a, Y)), !F.keepError && _t(n.errors, Y), !F.keepDirty && _t(n.dirtyFields, Y), !F.keepTouched && _t(n.touchedFields, Y), !F.keepIsValidating && _t(n.validatingFields, Y), !t.shouldUnregister && !F.keepDefaultValue && _t(o, Y);
    f.values.next({
      values: { ...a }
    }), f.state.next({
      ...n,
      ...F.keepDirty ? { isDirty: R() } : {}
    }), !F.keepIsValid && g();
  }, re = ({ disabled: O, name: F, field: Y, fields: ue, value: ce }) => {
    if (ln(O)) {
      const te = O ? void 0 : ht(ce) ? Ml(Y ? Y._f : he(ue, F)._f) : ce;
      Ze(a, F, te), N(F, te, !1, !1, !0);
    }
  }, me = (O, F = {}) => {
    let Y = he(r, O);
    const ue = ln(F.disabled);
    return Ze(r, O, {
      ...Y || {},
      _f: {
        ...Y && Y._f ? Y._f : { ref: { name: O } },
        name: O,
        mount: !0,
        ...F
      }
    }), i.mount.add(O), Y ? re({
      field: Y,
      disabled: F.disabled,
      name: O,
      value: F.value
    }) : w(O, !0, F.value), {
      ...ue ? { disabled: F.disabled } : {},
      ...t.progressive ? {
        required: !!F.required,
        min: xa(F.min),
        max: xa(F.max),
        minLength: xa(F.minLength),
        maxLength: xa(F.maxLength),
        pattern: xa(F.pattern)
      } : {},
      name: O,
      onChange: U,
      onBlur: U,
      ref: (ce) => {
        if (ce) {
          me(O, F), Y = he(r, O);
          const te = ht(ce.value) && ce.querySelectorAll && ce.querySelectorAll("input,select,textarea")[0] || ce, we = f8(te), De = Y._f.refs || [];
          if (we ? De.find((Ke) => Ke === te) : te === Y._f.ref)
            return;
          Ze(r, O, {
            _f: {
              ...Y._f,
              ...we ? {
                refs: [
                  ...De.filter(kl),
                  te,
                  ...Array.isArray(he(o, O)) ? [{}] : []
                ],
                ref: { type: te.type, name: O }
              } : { ref: te }
            }
          }), w(O, !1, void 0, te);
        } else
          Y = he(r, O, {}), Y._f && (Y._f.mount = !1), (t.shouldUnregister || F.shouldUnregister) && !(Gb(i.array, O) && s.action) && i.unMount.add(O);
      }
    };
  }, _e = () => t.shouldFocusError && Na(r, G, i.mount), ae = (O) => {
    ln(O) && (f.state.next({ disabled: O }), Na(r, (F, Y) => {
      let ue = O;
      const ce = he(r, Y);
      ce && ln(ce._f.disabled) && (ue || (ue = ce._f.disabled)), F.disabled = ue;
    }, 0, !1));
  }, fe = (O, F) => async (Y) => {
    let ue;
    Y && (Y.preventDefault && Y.preventDefault(), Y.persist && Y.persist());
    let ce = Bt(a);
    if (f.state.next({
      isSubmitting: !0
    }), t.resolver) {
      const { errors: te, values: we } = await D();
      n.errors = te, ce = we;
    } else
      await z(r);
    if (_t(n.errors, "root"), Kt(n.errors)) {
      f.state.next({
        errors: {}
      });
      try {
        await O(ce, Y);
      } catch (te) {
        ue = te;
      }
    } else
      F && await F({ ...n.errors }, Y), _e(), setTimeout(_e);
    if (f.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Kt(n.errors) && !ue,
      submitCount: n.submitCount + 1,
      errors: n.errors
    }), ue)
      throw ue;
  }, A = (O, F = {}) => {
    he(r, O) && (ht(F.defaultValue) ? T(O, Bt(he(o, O))) : (T(O, F.defaultValue), Ze(o, O, Bt(F.defaultValue))), F.keepTouched || _t(n.touchedFields, O), F.keepDirty || (_t(n.dirtyFields, O), n.isDirty = F.defaultValue ? R(O, Bt(he(o, O))) : R()), F.keepError || (_t(n.errors, O), u.isValid && g()), f.state.next({ ...n }));
  }, ne = (O, F = {}) => {
    const Y = O ? Bt(O) : o, ue = Bt(Y), ce = Kt(O), te = ce ? o : ue;
    if (F.keepDefaultValues || (o = Y), !F.keepValues) {
      if (F.keepDirtyValues)
        for (const we of i.mount)
          he(n.dirtyFields, we) ? Ze(te, we, he(a, we)) : T(we, he(te, we));
      else {
        if (vf && ht(O))
          for (const we of i.mount) {
            const De = he(r, we);
            if (De && De._f) {
              const Ke = Array.isArray(De._f.refs) ? De._f.refs[0] : De._f.ref;
              if (Bi(Ke)) {
                const et = Ke.closest("form");
                if (et) {
                  et.reset();
                  break;
                }
              }
            }
          }
        r = {};
      }
      a = e.shouldUnregister ? F.keepDefaultValues ? Bt(o) : {} : Bt(te), f.array.next({
        values: { ...te }
      }), f.values.next({
        values: { ...te }
      });
    }
    i = {
      mount: F.keepDirtyValues ? i.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, s.mount = !u.isValid || !!F.keepIsValid || !!F.keepDirtyValues, s.watch = !!e.shouldUnregister, f.state.next({
      submitCount: F.keepSubmitCount ? n.submitCount : 0,
      isDirty: ce ? !1 : F.keepDirty ? n.isDirty : !!(F.keepDefaultValues && !Wr(O, o)),
      isSubmitted: F.keepIsSubmitted ? n.isSubmitted : !1,
      dirtyFields: ce ? [] : F.keepDirtyValues ? F.keepDefaultValues && a ? Js(o, a) : n.dirtyFields : F.keepDefaultValues && O ? Js(o, O) : {},
      touchedFields: F.keepTouched ? n.touchedFields : {},
      errors: F.keepErrors ? n.errors : {},
      isSubmitSuccessful: F.keepIsSubmitSuccessful ? n.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, ye = (O, F) => ne(gr(O) ? O(a) : O, F);
  return {
    control: {
      register: me,
      unregister: ee,
      getFieldState: H,
      handleSubmit: fe,
      setError: be,
      _executeSchema: D,
      _getWatch: W,
      _getDirty: R,
      _updateValid: g,
      _removeUnmounted: K,
      _updateFieldArray: y,
      _updateDisabledField: re,
      _getFieldArray: V,
      _reset: ne,
      _resetDefaultValues: () => gr(t.defaultValues) && t.defaultValues().then((O) => {
        ye(O, t.resetOptions), f.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (O) => {
        n = {
          ...n,
          ...O
        };
      },
      _disableForm: ae,
      _subjects: f,
      _proxyFormState: u,
      _setErrors: _,
      get _fields() {
        return r;
      },
      get _formValues() {
        return a;
      },
      get _state() {
        return s;
      },
      set _state(O) {
        s = O;
      },
      get _defaultValues() {
        return o;
      },
      get _names() {
        return i;
      },
      set _names(O) {
        i = O;
      },
      get _formState() {
        return n;
      },
      set _formState(O) {
        n = O;
      },
      get _options() {
        return t;
      },
      set _options(O) {
        t = {
          ...t,
          ...O
        };
      }
    },
    trigger: Q,
    register: me,
    handleSubmit: fe,
    watch: pe,
    setValue: T,
    getValues: oe,
    reset: ye,
    resetField: A,
    clearErrors: le,
    unregister: ee,
    setError: be,
    setFocus: (O, F = {}) => {
      const Y = he(r, O), ue = Y && Y._f;
      if (ue) {
        const ce = ue.refs ? ue.refs[0] : ue.ref;
        ce.focus && (ce.focus(), F.shouldSelect && ce.select());
      }
    },
    getFieldState: H
  };
}
function iy(e = {}) {
  const t = I.useRef(), n = I.useRef(), [r, o] = I.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: gr(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    validatingFields: {},
    errors: e.errors || {},
    disabled: e.disabled || !1,
    defaultValues: gr(e.defaultValues) ? void 0 : e.defaultValues
  });
  t.current || (t.current = {
    ...b8(e),
    formState: r
  });
  const a = t.current.control;
  return a._options = e, gf({
    subject: a._subjects.state,
    next: (s) => {
      Zb(s, a._proxyFormState, a._updateFormState, !0) && o({ ...a._formState });
    }
  }), I.useEffect(() => a._disableForm(e.disabled), [a, e.disabled]), I.useEffect(() => {
    if (a._proxyFormState.isDirty) {
      const s = a._getDirty();
      s !== r.isDirty && a._subjects.state.next({
        isDirty: s
      });
    }
  }, [a, r.isDirty]), I.useEffect(() => {
    e.values && !Wr(e.values, n.current) ? (a._reset(e.values, a._options.resetOptions), n.current = e.values, o((s) => ({ ...s }))) : a._resetDefaultValues();
  }, [e.values, a]), I.useEffect(() => {
    e.errors && a._setErrors(e.errors);
  }, [e.errors, a]), I.useEffect(() => {
    a._state.mount || (a._updateValid(), a._state.mount = !0), a._state.watch && (a._state.watch = !1, a._subjects.state.next({ ...a._formState })), a._removeUnmounted();
  }), I.useEffect(() => {
    e.shouldUnregister && a._subjects.values.next({
      values: a._getWatch()
    });
  }, [e.shouldUnregister, a]), t.current.formState = qb(r, a), t.current;
}
const y8 = /* @__PURE__ */ L((e, t) => /* @__PURE__ */ $(de.label, j({}, e, {
  ref: t,
  onMouseDown: (n) => {
    var r;
    (r = e.onMouseDown) === null || r === void 0 || r.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault();
  }
}))), cy = y8, x8 = Ko(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Un = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  cy,
  {
    ref: n,
    className: M(x8(), e),
    ...t
  }
));
Un.displayName = cy.displayName;
const ly = o8, uy = C.createContext(
  {}
), uo = ({
  ...e
}) => /* @__PURE__ */ d.jsx(uy.Provider, { value: { name: e.name }, children: /* @__PURE__ */ d.jsx(c8, { ...e }) }), kc = () => {
  const e = C.useContext(uy), t = C.useContext(dy), { getFieldState: n, formState: r } = jc(), o = n(e.name, r);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: a } = t;
  return {
    id: a,
    name: e.name,
    formItemId: `${a}-form-item`,
    formDescriptionId: `${a}-form-item-description`,
    formMessageId: `${a}-form-item-message`,
    ...o
  };
}, dy = C.createContext(
  {}
), Mr = C.forwardRef(({ className: e, ...t }, n) => {
  const r = C.useId();
  return /* @__PURE__ */ d.jsx(dy.Provider, { value: { id: r }, children: /* @__PURE__ */ d.jsx("div", { ref: n, className: M("space-y-2", e), ...t }) });
});
Mr.displayName = "FormItem";
const fo = C.forwardRef(({ className: e, ...t }, n) => {
  const { error: r, formItemId: o } = kc();
  return /* @__PURE__ */ d.jsx(
    Un,
    {
      ref: n,
      className: M(r && "text-destructive", e),
      htmlFor: o,
      ...t
    }
  );
});
fo.displayName = "FormLabel";
const Ps = C.forwardRef(({ ...e }, t) => {
  const { error: n, formItemId: r, formDescriptionId: o, formMessageId: a } = kc();
  return /* @__PURE__ */ d.jsx(
    gn,
    {
      ref: t,
      id: r,
      "aria-describedby": n ? `${o} ${a}` : `${o}`,
      "aria-invalid": !!n,
      ...e
    }
  );
});
Ps.displayName = "FormControl";
const ra = C.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: r } = kc();
  return /* @__PURE__ */ d.jsx(
    "p",
    {
      ref: n,
      id: r,
      className: M("text-sm text-muted-foreground", e),
      ...t
    }
  );
});
ra.displayName = "FormDescription";
const w8 = C.forwardRef(({ className: e, children: t, ...n }, r) => {
  const { error: o, formMessageId: a } = kc(), s = o ? String(o == null ? void 0 : o.message) : t;
  return s ? /* @__PURE__ */ d.jsx(
    "p",
    {
      ref: r,
      id: a,
      className: M("text-sm font-medium text-destructive", e),
      ...n,
      children: s
    }
  ) : null;
});
w8.displayName = "FormMessage";
const fy = "Dialog", [py, hy] = ut(fy), [$8, Nn] = py(fy), _8 = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !0 } = e, i = q(null), c = q(null), [l = !1, u] = vt({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ $($8, {
    scope: t,
    triggerRef: i,
    contentRef: c,
    contentId: bt(),
    titleId: bt(),
    descriptionId: bt(),
    open: l,
    onOpenChange: u,
    onOpenToggle: ve(
      () => u(
        (f) => !f
      ),
      [
        u
      ]
    ),
    modal: s
  }, n);
}, C8 = "DialogTrigger", S8 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = Nn(C8, n), a = Ee(t, o.triggerRef);
  return /* @__PURE__ */ $(de.button, j({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": wf(o.open)
  }, r, {
    ref: a,
    onClick: X(e.onClick, o.onOpenToggle)
  }));
}), my = "DialogPortal", [N8, vy] = py(my, {
  forceMount: void 0
}), E8 = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = Nn(my, t);
  return /* @__PURE__ */ $(N8, {
    scope: t,
    forceMount: n
  }, Ur.map(
    r,
    (s) => /* @__PURE__ */ $(ft, {
      present: n || a.open
    }, /* @__PURE__ */ $(Cc, {
      asChild: !0,
      container: o
    }, s))
  ));
}, Mu = "DialogOverlay", P8 = /* @__PURE__ */ L((e, t) => {
  const n = vy(Mu, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Nn(Mu, e.__scopeDialog);
  return a.modal ? /* @__PURE__ */ $(ft, {
    present: r || a.open
  }, /* @__PURE__ */ $(O8, j({}, o, {
    ref: t
  }))) : null;
}), O8 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = Nn(Mu, n);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ $(_s, {
      as: gn,
      allowPinchZoom: !0,
      shards: [
        o.contentRef
      ]
    }, /* @__PURE__ */ $(de.div, j({
      "data-state": wf(o.open)
    }, r, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...r.style
      }
    })))
  );
}), Bo = "DialogContent", T8 = /* @__PURE__ */ L((e, t) => {
  const n = vy(Bo, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Nn(Bo, e.__scopeDialog);
  return /* @__PURE__ */ $(ft, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ $(j8, j({}, o, {
    ref: t
  })) : /* @__PURE__ */ $(k8, j({}, o, {
    ref: t
  })));
}), j8 = /* @__PURE__ */ L((e, t) => {
  const n = Nn(Bo, e.__scopeDialog), r = q(null), o = Ee(t, n.contentRef, r);
  return J(() => {
    const a = r.current;
    if (a)
      return Ec(a);
  }, []), /* @__PURE__ */ $(gy, j({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: X(e.onCloseAutoFocus, (a) => {
      var s;
      a.preventDefault(), (s = n.triggerRef.current) === null || s === void 0 || s.focus();
    }),
    onPointerDownOutside: X(e.onPointerDownOutside, (a) => {
      const s = a.detail.originalEvent, i = s.button === 0 && s.ctrlKey === !0;
      (s.button === 2 || i) && a.preventDefault();
    }),
    onFocusOutside: X(
      e.onFocusOutside,
      (a) => a.preventDefault()
    )
  }));
}), k8 = /* @__PURE__ */ L((e, t) => {
  const n = Nn(Bo, e.__scopeDialog), r = q(!1), o = q(!1);
  return /* @__PURE__ */ $(gy, j({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (a) => {
      var s;
      if ((s = e.onCloseAutoFocus) === null || s === void 0 || s.call(e, a), !a.defaultPrevented) {
        var i;
        r.current || (i = n.triggerRef.current) === null || i === void 0 || i.focus(), a.preventDefault();
      }
      r.current = !1, o.current = !1;
    },
    onInteractOutside: (a) => {
      var s, i;
      (s = e.onInteractOutside) === null || s === void 0 || s.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
      const c = a.target;
      ((i = n.triggerRef.current) === null || i === void 0 ? void 0 : i.contains(c)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
    }
  }));
}), gy = /* @__PURE__ */ L((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = Nn(Bo, n), c = q(null), l = Ee(t, c);
  return wc(), /* @__PURE__ */ $(vn, null, /* @__PURE__ */ $($c, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ $(co, j({
    role: "dialog",
    id: i.contentId,
    "aria-describedby": i.descriptionId,
    "aria-labelledby": i.titleId,
    "data-state": wf(i.open)
  }, s, {
    ref: l,
    onDismiss: () => i.onOpenChange(!1)
  }))), !1);
}), by = "DialogTitle", M8 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = Nn(by, n);
  return /* @__PURE__ */ $(de.h2, j({
    id: o.titleId
  }, r, {
    ref: t
  }));
}), D8 = "DialogDescription", A8 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = Nn(D8, n);
  return /* @__PURE__ */ $(de.p, j({
    id: o.descriptionId
  }, r, {
    ref: t
  }));
}), R8 = "DialogClose", I8 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = Nn(R8, n);
  return /* @__PURE__ */ $(de.button, j({
    type: "button"
  }, r, {
    ref: t,
    onClick: X(
      e.onClick,
      () => o.onOpenChange(!1)
    )
  }));
});
function wf(e) {
  return e ? "open" : "closed";
}
const L8 = "DialogTitleWarning", [F8, hY] = sC(L8, {
  contentName: Bo,
  titleName: by,
  docsSlug: "dialog"
}), Os = _8, Mc = S8, Ts = E8, po = P8, ho = T8, oa = M8, aa = A8, mo = I8, yy = Os, mY = Mc, B8 = Ts, vY = mo, xy = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  po,
  {
    ref: n,
    className: M(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
xy.displayName = po.displayName;
const $f = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsxs(B8, { children: [
  /* @__PURE__ */ d.jsx(xy, {}),
  /* @__PURE__ */ d.jsxs(
    ho,
    {
      ref: r,
      className: M(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ d.jsxs(mo, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ d.jsx(uc, { className: "h-4 w-4" }),
          /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
$f.displayName = ho.displayName;
const V8 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsx(
  "div",
  {
    className: M(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
V8.displayName = "DialogHeader";
const z8 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsx(
  "div",
  {
    className: M(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
z8.displayName = "DialogFooter";
const W8 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  oa,
  {
    ref: n,
    className: M(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
W8.displayName = oa.displayName;
const U8 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  aa,
  {
    ref: n,
    className: M("text-sm text-muted-foreground", e),
    ...t
  }
));
U8.displayName = aa.displayName;
const H8 = ({ id: e, form: t, label: n, description: r, iconDirection: o, classNameContainer: a, isLoading: s, validateInputIconClassNames: i, rest: c }) => {
  const [l, u] = C.useState(!1);
  return s ? /* @__PURE__ */ d.jsxs("div", { className: M("w-full", a), children: [
    /* @__PURE__ */ d.jsx("div", { className: "flex justify-start items-end", children: n && /* @__PURE__ */ d.jsx(Ot, { className: "h-5 w-full" }) }),
    r && /* @__PURE__ */ d.jsx(Ot, { className: "h-5 w-full" }),
    /* @__PURE__ */ d.jsx("div", { className: "my-2" }),
    /* @__PURE__ */ d.jsxs("div", { className: "relative", children: [
      o === "left" && /* @__PURE__ */ d.jsx(Ot, { className: "h-4 w-4 absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none" }),
      /* @__PURE__ */ d.jsx(
        Ot,
        {
          className: i()
        }
      ),
      o === "right" && /* @__PURE__ */ d.jsx(Ot, { className: "h-4 w-4 absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none" })
    ] })
  ] }) : c.readOnly ? /* @__PURE__ */ d.jsxs("div", { className: M("w-full", a), children: [
    /* @__PURE__ */ d.jsx("div", { className: "flex justify-start items-end", children: n && /* @__PURE__ */ d.jsxs(Un, { className: "flex", htmlFor: e, children: [
      n,
      " "
    ] }) }),
    r && /* @__PURE__ */ d.jsx("p", { className: "text-muted-foreground text-xs", children: r }),
    /* @__PURE__ */ d.jsx("div", { className: "my-2" }),
    /* @__PURE__ */ d.jsxs("div", { className: "relative", children: [
      o === "left" && /* @__PURE__ */ d.jsx(d.Fragment, { children: /* @__PURE__ */ d.jsx(
        "button",
        {
          type: "button",
          onClick: () => u((f) => !f),
          className: "absolute inset-y-0 left-0 flex items-center pl-3 z-50",
          tabIndex: -1,
          children: l ? /* @__PURE__ */ d.jsx(Fs, { size: 18 }) : /* @__PURE__ */ d.jsx(Ls, { size: 18 })
        }
      ) }),
      /* @__PURE__ */ d.jsx(
        Va,
        {
          ...c,
          className: M(i(), c.className),
          type: l ? "text" : "password"
        }
      ),
      o === "right" && /* @__PURE__ */ d.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 z-10", children: /* @__PURE__ */ d.jsx(
        "button",
        {
          type: "button",
          tabIndex: -1,
          onClick: () => u((f) => !f),
          children: l ? /* @__PURE__ */ d.jsx(Fs, { size: 18 }) : /* @__PURE__ */ d.jsx(Ls, { size: 18 })
        }
      ) })
    ] })
  ] }) : /* @__PURE__ */ d.jsx(
    uo,
    {
      control: t.control,
      name: e,
      render: ({ field: f, formState: p }) => {
        var h;
        return /* @__PURE__ */ d.jsxs(Mr, { className: M("w-full", a), children: [
          /* @__PURE__ */ d.jsxs("div", { className: "flex justify-start items-end", children: [
            n && /* @__PURE__ */ d.jsxs(fo, { className: "flex", children: [
              n,
              " "
            ] }),
            ((h = p == null ? void 0 : p.errors[e]) == null ? void 0 : h.message) && /* @__PURE__ */ d.jsxs("span", { className: "text-xs font-light text-destructive", children: [
              "* ",
              p.errors[e].message
            ] })
          ] }),
          r && /* @__PURE__ */ d.jsx(ra, { className: "text-xs", children: r }),
          /* @__PURE__ */ d.jsx("div", { className: "my-2" }),
          /* @__PURE__ */ d.jsx(Ps, { children: /* @__PURE__ */ d.jsxs("div", { className: "relative", children: [
            o === "left" && /* @__PURE__ */ d.jsx(d.Fragment, { children: /* @__PURE__ */ d.jsx(
              "button",
              {
                type: "button",
                onClick: () => u((m) => !m),
                className: "absolute inset-y-0 left-0 flex items-center pl-3 z-50",
                tabIndex: -1,
                disabled: c == null ? void 0 : c.disabled,
                children: l ? /* @__PURE__ */ d.jsx(Fs, { size: 18 }) : /* @__PURE__ */ d.jsx(Ls, { size: 18 })
              }
            ) }),
            /* @__PURE__ */ d.jsx(
              Va,
              {
                ...f,
                ...c,
                disabled: c == null ? void 0 : c.disabled,
                className: M(i(), c.className),
                type: l ? "text" : "password"
              }
            ),
            o === "right" && /* @__PURE__ */ d.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 z-10", children: /* @__PURE__ */ d.jsx(
              "button",
              {
                type: "button",
                tabIndex: -1,
                onClick: () => u((m) => !m),
                children: l ? /* @__PURE__ */ d.jsx(Fs, { size: 18 }) : /* @__PURE__ */ d.jsx(Ls, { size: 18 })
              }
            ) })
          ] }) })
        ] });
      }
    }
  );
}, K8 = ({ id: e, form: t, icon: n, label: r, description: o, iconDirection: a, classNameContainer: s, validateInputIconClassNames: i, isLoading: c, rest: l }) => c || c && l.readOnly ? /* @__PURE__ */ d.jsxs("div", { className: M("w-full", s), children: [
  /* @__PURE__ */ d.jsx("div", { className: "flex justify-start items-end", children: r && /* @__PURE__ */ d.jsx(Ot, { className: "h-5 w-full max-w-[90px]" }) }),
  o && /* @__PURE__ */ d.jsx(Ot, { className: "h-5 w-full max-w-[150px] my-2" }),
  /* @__PURE__ */ d.jsx("div", { className: "relative", children: /* @__PURE__ */ d.jsx(
    Ot,
    {
      className: M(i(), "w-full h-9 mt-2")
    }
  ) })
] }) : l.readOnly ? /* @__PURE__ */ d.jsxs("div", { className: M("w-full", s), children: [
  /* @__PURE__ */ d.jsx("div", { className: "flex justify-start items-end", children: r && /* @__PURE__ */ d.jsxs(Un, { className: "flex", htmlFor: e, children: [
    r,
    " "
  ] }) }),
  o && /* @__PURE__ */ d.jsx("p", { className: "text-muted-foreground text-xs", children: o }),
  /* @__PURE__ */ d.jsx("div", { className: "my-2" }),
  /* @__PURE__ */ d.jsxs("div", { className: "relative", children: [
    a === "left" && n && /* @__PURE__ */ d.jsx("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: n }),
    /* @__PURE__ */ d.jsx(
      Va,
      {
        ...l,
        className: i()
      }
    ),
    a === "right" && n && /* @__PURE__ */ d.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none", children: n })
  ] })
] }) : /* @__PURE__ */ d.jsx(
  uo,
  {
    control: t.control,
    name: e,
    render: ({ field: u, formState: f }) => {
      var p;
      return /* @__PURE__ */ d.jsxs(Mr, { className: M("w-full", s), children: [
        /* @__PURE__ */ d.jsxs("div", { className: "flex justify-start items-end", children: [
          r && /* @__PURE__ */ d.jsxs(fo, { className: "flex", children: [
            r,
            " "
          ] }),
          ((p = f == null ? void 0 : f.errors[e]) == null ? void 0 : p.message) && /* @__PURE__ */ d.jsxs("span", { className: "text-xs font-light text-destructive", children: [
            "* ",
            f.errors[e].message
          ] })
        ] }),
        o && /* @__PURE__ */ d.jsx(ra, { className: "text-xs", children: o }),
        /* @__PURE__ */ d.jsx("div", { className: "my-2" }),
        /* @__PURE__ */ d.jsxs("div", { className: "relative", children: [
          a === "left" && n && /* @__PURE__ */ d.jsx("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: n }),
          /* @__PURE__ */ d.jsx(Ps, { children: /* @__PURE__ */ d.jsx(
            Va,
            {
              ...u,
              ...l,
              disabled: l == null ? void 0 : l.disabled,
              className: i()
            }
          ) }),
          a === "right" && n && /* @__PURE__ */ d.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none", children: n })
        ] })
      ] });
    }
  }
), Va = C.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ d.jsx(
    "input",
    {
      type: t,
      className: M(
        "w-full flex h-10 rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: r,
      ...n
    }
  )
);
Va.displayName = "InputUI";
function _f({ children: e, id: t, label: n, classNameContainer: r, description: o, icon: a, isLoading: s, iconDirection: i = "left", ...c }) {
  const l = () => i === "left" && (a || c.type === "password") ? "pl-9" : i === "right" ? "pr-9" : "";
  return c.type === "password" ? /* @__PURE__ */ d.jsx(
    H8,
    {
      id: t,
      validateInputIconClassNames: l,
      classNameContainer: r,
      iconDirection: i,
      description: o,
      isLoading: s,
      label: n,
      form: (c == null ? void 0 : c.form) || null,
      rest: c
    }
  ) : /* @__PURE__ */ d.jsx(
    K8,
    {
      id: t,
      validateInputIconClassNames: l,
      classNameContainer: r,
      iconDirection: i,
      description: o,
      isLoading: s,
      label: n,
      form: (c == null ? void 0 : c.form) || null,
      rest: c,
      icon: a
    }
  );
}
const G8 = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), Y8 = (e) => {
  /[0-9.]/.test(e.key) || e.preventDefault();
}, pm = (e) => {
  const t = [
    pa.VENEZUELAN,
    pa.JURIDICAL,
    pa.FOREIGN,
    pa.PASSPORT,
    pa.GOVERNMENTAL
  ];
  return !e || e.length === 0 ? t.map((o) => ({
    label: o.key,
    value: o.key.toLowerCase()
  })) : t.filter((o) => e.includes(o.value)).map((o) => ({
    label: o.key,
    value: o.key.toLowerCase()
  }));
}, Pt = {
  type: {
    id: "pidType",
    tabIndex: void 0,
    buttonClassName: "w-[80px]",
    popoverClassName: "w-[90px]",
    notFoundLabel: "Codigo No Encontrado",
    ctaPlaceholder: "Tipo",
    placeholder: "Buscar...",
    defaultValue: pm(["VENEZUELAN"])[0].value,
    label: "Cedula",
    items: pm(["VENEZUELAN", "FOREIGN", "PASSPORT"])
  },
  number: {
    id: "pidNumber",
    tabIndex: void 0,
    placeholder: "00.000.000",
    maxLength: 10,
    defaultValue: ""
  }
};
function gY({ form: e, pid: t = Pt, format: n = !0 }) {
  var o, a, s, i, c, l, u, f, p, h, m, v, g, b, y, x, _;
  const r = (w) => {
    var P;
    const { value: N } = w.target, S = n ? G8(N) : N, D = ((P = t == null ? void 0 : t.number) == null ? void 0 : P.id) || Pt.number.id;
    e.setValue(D, S);
  };
  return /* @__PURE__ */ d.jsxs("div", { className: "w-full flex justify-start items-end gap-x-2", children: [
    /* @__PURE__ */ d.jsx(
      IH,
      {
        id: ((o = t == null ? void 0 : t.type) == null ? void 0 : o.id) || Pt.type.id,
        form: e,
        label: ((a = t == null ? void 0 : t.type) == null ? void 0 : a.label) || Pt.type.label,
        items: ((s = t == null ? void 0 : t.type) == null ? void 0 : s.items) || Pt.type.items,
        tabIndex: ((i = t == null ? void 0 : t.type) == null ? void 0 : i.tabIndex) || Pt.type.tabIndex,
        placeholder: ((c = t == null ? void 0 : t.type) == null ? void 0 : c.placeholder) || Pt.type.placeholder,
        defaultValue: ((l = t == null ? void 0 : t.type) == null ? void 0 : l.defaultValue) || Pt.type.defaultValue,
        notFoundLabel: ((u = t == null ? void 0 : t.type) == null ? void 0 : u.notFoundLabel) || Pt.type.notFoundLabel,
        ctaPlaceholder: ((f = t == null ? void 0 : t.type) == null ? void 0 : f.ctaPlaceholder) || Pt.type.ctaPlaceholder,
        buttonClassName: ((p = t == null ? void 0 : t.type) == null ? void 0 : p.buttonClassName) || Pt.type.buttonClassName,
        popoverClassName: ((h = t == null ? void 0 : t.type) == null ? void 0 : h.popoverClassName) || Pt.type.popoverClassName,
        disabled: (m = t == null ? void 0 : t.type) == null ? void 0 : m.disabled
      }
    ),
    /* @__PURE__ */ d.jsx(
      _f,
      {
        id: ((v = t == null ? void 0 : t.number) == null ? void 0 : v.id) || Pt.number.id,
        form: e,
        type: "text",
        defaultValue: (g = t == null ? void 0 : t.number) == null ? void 0 : g.defaultValue,
        onKeyPress: Y8,
        onKeyUp: r,
        tabIndex: ((b = t == null ? void 0 : t.number) == null ? void 0 : b.tabIndex) || Pt.number.tabIndex,
        maxLength: ((y = t == null ? void 0 : t.number) == null ? void 0 : y.maxLength) || Pt.number.maxLength,
        placeholder: ((x = t == null ? void 0 : t.number) == null ? void 0 : x.placeholder) || Pt.number.placeholder,
        disabled: (_ = t == null ? void 0 : t.number) == null ? void 0 : _.disabled
      }
    )
  ] });
}
const wy = "Popover", [$y, bY] = ut(wy, [
  Wn
]), Cf = Wn(), [q8, sa] = $y(wy), Z8 = (e) => {
  const { __scopePopover: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !1 } = e, i = Cf(t), c = q(null), [l, u] = Z(!1), [f = !1, p] = vt({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ $(na, i, /* @__PURE__ */ $(q8, {
    scope: t,
    contentId: bt(),
    triggerRef: c,
    open: f,
    onOpenChange: p,
    onOpenToggle: ve(
      () => p(
        (h) => !h
      ),
      [
        p
      ]
    ),
    hasCustomAnchor: l,
    onCustomAnchorAdd: ve(
      () => u(!0),
      []
    ),
    onCustomAnchorRemove: ve(
      () => u(!1),
      []
    ),
    modal: s
  }, n));
}, X8 = "PopoverTrigger", Q8 = /* @__PURE__ */ L((e, t) => {
  const { __scopePopover: n, ...r } = e, o = sa(X8, n), a = Cf(n), s = Ee(t, o.triggerRef), i = /* @__PURE__ */ $(de.button, j({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": Sy(o.open)
  }, r, {
    ref: s,
    onClick: X(e.onClick, o.onOpenToggle)
  }));
  return o.hasCustomAnchor ? i : /* @__PURE__ */ $(ws, j({
    asChild: !0
  }, a), i);
}), _y = "PopoverPortal", [J8, eI] = $y(_y, {
  forceMount: void 0
}), tI = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = sa(_y, t);
  return /* @__PURE__ */ $(J8, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ $(ft, {
    present: n || a.open
  }, /* @__PURE__ */ $(Cc, {
    asChild: !0,
    container: o
  }, r)));
}, za = "PopoverContent", nI = /* @__PURE__ */ L((e, t) => {
  const n = eI(za, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = sa(za, e.__scopePopover);
  return /* @__PURE__ */ $(ft, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ $(rI, j({}, o, {
    ref: t
  })) : /* @__PURE__ */ $(oI, j({}, o, {
    ref: t
  })));
}), rI = /* @__PURE__ */ L((e, t) => {
  const n = sa(za, e.__scopePopover), r = q(null), o = Ee(t, r), a = q(!1);
  return J(() => {
    const s = r.current;
    if (s)
      return Ec(s);
  }, []), /* @__PURE__ */ $(_s, {
    as: gn,
    allowPinchZoom: !0
  }, /* @__PURE__ */ $(Cy, j({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: X(e.onCloseAutoFocus, (s) => {
      var i;
      s.preventDefault(), a.current || (i = n.triggerRef.current) === null || i === void 0 || i.focus();
    }),
    onPointerDownOutside: X(e.onPointerDownOutside, (s) => {
      const i = s.detail.originalEvent, c = i.button === 0 && i.ctrlKey === !0, l = i.button === 2 || c;
      a.current = l;
    }, {
      checkForDefaultPrevented: !1
    }),
    onFocusOutside: X(
      e.onFocusOutside,
      (s) => s.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), oI = /* @__PURE__ */ L((e, t) => {
  const n = sa(za, e.__scopePopover), r = q(!1), o = q(!1);
  return /* @__PURE__ */ $(Cy, j({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (a) => {
      var s;
      if ((s = e.onCloseAutoFocus) === null || s === void 0 || s.call(e, a), !a.defaultPrevented) {
        var i;
        r.current || (i = n.triggerRef.current) === null || i === void 0 || i.focus(), a.preventDefault();
      }
      r.current = !1, o.current = !1;
    },
    onInteractOutside: (a) => {
      var s, i;
      (s = e.onInteractOutside) === null || s === void 0 || s.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
      const c = a.target;
      ((i = n.triggerRef.current) === null || i === void 0 ? void 0 : i.contains(c)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
    }
  }));
}), Cy = /* @__PURE__ */ L((e, t) => {
  const { __scopePopover: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, disableOutsidePointerEvents: s, onEscapeKeyDown: i, onPointerDownOutside: c, onFocusOutside: l, onInteractOutside: u, ...f } = e, p = sa(za, n), h = Cf(n);
  return wc(), /* @__PURE__ */ $($c, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ $(co, {
    asChild: !0,
    disableOutsidePointerEvents: s,
    onInteractOutside: u,
    onEscapeKeyDown: i,
    onPointerDownOutside: c,
    onFocusOutside: l,
    onDismiss: () => p.onOpenChange(!1)
  }, /* @__PURE__ */ $($s, j({
    "data-state": Sy(p.open),
    role: "dialog",
    id: p.contentId
  }, h, f, {
    ref: t,
    style: {
      ...f.style,
      "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
      "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
      "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }))));
});
function Sy(e) {
  return e ? "open" : "closed";
}
const aI = Z8, sI = Q8, iI = tI, Ny = nI, tr = aI, nr = sI, Ln = C.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ d.jsx(iI, { children: /* @__PURE__ */ d.jsx(
  Ny,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: M(
      "z-50 w-72 rounded-md border bg-card p-4 text-popover-foreground shadow-md outline-none animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
) }));
Ln.displayName = Ny.displayName;
const Ey = C.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
    "textarea",
    {
      className: M(
        "flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: n,
      ...t
    }
  )
);
Ey.displayName = "TextareaUI";
const yY = ({ id: e, form: t, label: n, className: r, description: o, placeholder: a, containerClassName: s, isLoading: i, ...c }) => i || i && c.readOnly ? /* @__PURE__ */ d.jsxs("div", { className: M("w-full"), children: [
  /* @__PURE__ */ d.jsx("div", { className: "flex justify-start items-end", children: n && /* @__PURE__ */ d.jsx(Ot, { className: "h-5 w-full max-w-[90px]" }) }),
  o && /* @__PURE__ */ d.jsx(Ot, { className: "h-5 w-full max-w-[150px] my-2" }),
  /* @__PURE__ */ d.jsx("div", { className: "relative", children: /* @__PURE__ */ d.jsx(
    Ot,
    {
      className: M("w-full h-9 mt-2")
    }
  ) })
] }) : /* @__PURE__ */ d.jsx(
  uo,
  {
    control: t.control,
    name: e,
    render: ({ field: l, formState: u }) => {
      var f;
      return /* @__PURE__ */ d.jsxs(Mr, { className: M("w-full", s), children: [
        /* @__PURE__ */ d.jsxs("div", { className: "flex justify-start items-end", children: [
          n && /* @__PURE__ */ d.jsxs(fo, { className: "flex", children: [
            n,
            " "
          ] }),
          ((f = u == null ? void 0 : u.errors[e]) == null ? void 0 : f.message) && /* @__PURE__ */ d.jsxs("span", { className: "text-xs font-light text-destructive", children: [
            "* ",
            u.errors[e].message
          ] })
        ] }),
        o && /* @__PURE__ */ d.jsx(ra, { className: "text-xs", children: o }),
        /* @__PURE__ */ d.jsx("div", { className: "my-2" }),
        /* @__PURE__ */ d.jsx(Ps, { children: /* @__PURE__ */ d.jsx(
          Ey,
          {
            placeholder: a,
            className: M("resize-none", r),
            ...l,
            ...c
          }
        ) })
      ] });
    }
  }
);
function Wa(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function ia(e) {
  const t = q({
    value: e,
    previous: e
  });
  return Ut(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [
    e
  ]);
}
const Py = /* @__PURE__ */ L((e, t) => /* @__PURE__ */ $(de.span, j({}, e, {
  ref: t,
  style: {
    // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
    ...e.style
  }
}))), Oy = Py, cI = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
], lI = [
  " ",
  "Enter"
], Dc = "Select", [Ac, Sf, uI] = Tr(Dc), [ca, xY] = ut(Dc, [
  uI,
  Wn
]), Nf = Wn(), [dI, vo] = ca(Dc), [fI, pI] = ca(Dc), hI = (e) => {
  const { __scopeSelect: t, children: n, open: r, defaultOpen: o, onOpenChange: a, value: s, defaultValue: i, onValueChange: c, dir: l, name: u, autoComplete: f, disabled: p, required: h } = e, m = Nf(t), [v, g] = Z(null), [b, y] = Z(null), [x, _] = Z(!1), w = zn(l), [N = !1, S] = vt({
    prop: r,
    defaultProp: o,
    onChange: a
  }), [D, P] = vt({
    prop: s,
    defaultProp: i,
    onChange: c
  }), z = q(null), K = v ? !!v.closest("form") : !0, [R, W] = Z(/* @__PURE__ */ new Set()), V = Array.from(R).map(
    (E) => E.props.value
  ).join(";");
  return /* @__PURE__ */ $(na, m, /* @__PURE__ */ $(dI, {
    required: h,
    scope: t,
    trigger: v,
    onTriggerChange: g,
    valueNode: b,
    onValueNodeChange: y,
    valueNodeHasChildren: x,
    onValueNodeHasChildrenChange: _,
    contentId: bt(),
    value: D,
    onValueChange: P,
    open: N,
    onOpenChange: S,
    dir: w,
    triggerPointerDownPosRef: z,
    disabled: p
  }, /* @__PURE__ */ $(Ac.Provider, {
    scope: t
  }, /* @__PURE__ */ $(fI, {
    scope: e.__scopeSelect,
    onNativeOptionAdd: ve((E) => {
      W(
        (B) => new Set(B).add(E)
      );
    }, []),
    onNativeOptionRemove: ve((E) => {
      W((B) => {
        const T = new Set(B);
        return T.delete(E), T;
      });
    }, [])
  }, n)), K ? /* @__PURE__ */ $(My, {
    key: V,
    "aria-hidden": !0,
    required: h,
    tabIndex: -1,
    name: u,
    autoComplete: f,
    value: D,
    onChange: (E) => P(E.target.value),
    disabled: p
  }, D === void 0 ? /* @__PURE__ */ $("option", {
    value: ""
  }) : null, Array.from(R)) : null));
}, mI = "SelectTrigger", vI = /* @__PURE__ */ L((e, t) => {
  const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = Nf(n), s = vo(mI, n), i = s.disabled || r, c = Ee(t, s.onTriggerChange), l = Sf(n), [u, f, p] = Dy((m) => {
    const v = l().filter(
      (y) => !y.disabled
    ), g = v.find(
      (y) => y.value === s.value
    ), b = Ay(v, m, g);
    b !== void 0 && s.onValueChange(b.value);
  }), h = () => {
    i || (s.onOpenChange(!0), p());
  };
  return /* @__PURE__ */ $(ws, j({
    asChild: !0
  }, a), /* @__PURE__ */ $(de.button, j({
    type: "button",
    role: "combobox",
    "aria-controls": s.contentId,
    "aria-expanded": s.open,
    "aria-required": s.required,
    "aria-autocomplete": "none",
    dir: s.dir,
    "data-state": s.open ? "open" : "closed",
    disabled: i,
    "data-disabled": i ? "" : void 0,
    "data-placeholder": ky(s.value) ? "" : void 0
  }, o, {
    ref: c,
    onClick: X(o.onClick, (m) => {
      m.currentTarget.focus();
    }),
    onPointerDown: X(o.onPointerDown, (m) => {
      const v = m.target;
      v.hasPointerCapture(m.pointerId) && v.releasePointerCapture(m.pointerId), m.button === 0 && m.ctrlKey === !1 && (h(), s.triggerPointerDownPosRef.current = {
        x: Math.round(m.pageX),
        y: Math.round(m.pageY)
      }, m.preventDefault());
    }),
    onKeyDown: X(o.onKeyDown, (m) => {
      const v = u.current !== "";
      !(m.ctrlKey || m.altKey || m.metaKey) && m.key.length === 1 && f(m.key), !(v && m.key === " ") && cI.includes(m.key) && (h(), m.preventDefault());
    })
  })));
}), gI = "SelectValue", bI = /* @__PURE__ */ L((e, t) => {
  const { __scopeSelect: n, className: r, style: o, children: a, placeholder: s = "", ...i } = e, c = vo(gI, n), { onValueNodeHasChildrenChange: l } = c, u = a !== void 0, f = Ee(t, c.onValueNodeChange);
  return St(() => {
    l(u);
  }, [
    l,
    u
  ]), /* @__PURE__ */ $(de.span, j({}, i, {
    ref: f,
    style: {
      pointerEvents: "none"
    }
  }), ky(c.value) ? /* @__PURE__ */ $(vn, null, s) : a);
}), yI = /* @__PURE__ */ L((e, t) => {
  const { __scopeSelect: n, children: r, ...o } = e;
  return /* @__PURE__ */ $(de.span, j({
    "aria-hidden": !0
  }, o, {
    ref: t
  }), r || "▼");
}), xI = (e) => /* @__PURE__ */ $(Cc, j({
  asChild: !0
}, e)), Vo = "SelectContent", wI = /* @__PURE__ */ L((e, t) => {
  const n = vo(Vo, e.__scopeSelect), [r, o] = Z();
  if (St(() => {
    o(new DocumentFragment());
  }, []), !n.open) {
    const a = r;
    return a ? /* @__PURE__ */ cv(/* @__PURE__ */ $(Ty, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ $(Ac.Slot, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ $("div", null, e.children))), a) : null;
  }
  return /* @__PURE__ */ $($I, j({}, e, {
    ref: t
  }));
}), Xn = 10, [Ty, Rc] = ca(Vo), $I = /* @__PURE__ */ L((e, t) => {
  const {
    __scopeSelect: n,
    position: r = "item-aligned",
    onCloseAutoFocus: o,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    side: i,
    sideOffset: c,
    align: l,
    alignOffset: u,
    arrowPadding: f,
    collisionBoundary: p,
    collisionPadding: h,
    sticky: m,
    hideWhenDetached: v,
    avoidCollisions: g,
    //
    ...b
  } = e, y = vo(Vo, n), [x, _] = Z(null), [w, N] = Z(null), S = Ee(
    t,
    (re) => _(re)
  ), [D, P] = Z(null), [z, K] = Z(null), R = Sf(n), [W, V] = Z(!1), E = q(!1);
  J(() => {
    if (x)
      return Ec(x);
  }, [
    x
  ]), wc();
  const B = ve((re) => {
    const [me, ..._e] = R().map(
      (A) => A.ref.current
    ), [ae] = _e.slice(-1), fe = document.activeElement;
    for (const A of re)
      if (A === fe || (A == null || A.scrollIntoView({
        block: "nearest"
      }), A === me && w && (w.scrollTop = 0), A === ae && w && (w.scrollTop = w.scrollHeight), A == null || A.focus(), document.activeElement !== fe))
        return;
  }, [
    R,
    w
  ]), T = ve(
    () => B([
      D,
      x
    ]),
    [
      B,
      D,
      x
    ]
  );
  J(() => {
    W && T();
  }, [
    W,
    T
  ]);
  const { onOpenChange: U, triggerPointerDownPosRef: G } = y;
  J(() => {
    if (x) {
      let re = {
        x: 0,
        y: 0
      };
      const me = (ae) => {
        var fe, A, ne, ye;
        re = {
          x: Math.abs(Math.round(ae.pageX) - ((fe = (A = G.current) === null || A === void 0 ? void 0 : A.x) !== null && fe !== void 0 ? fe : 0)),
          y: Math.abs(Math.round(ae.pageY) - ((ne = (ye = G.current) === null || ye === void 0 ? void 0 : ye.y) !== null && ne !== void 0 ? ne : 0))
        };
      }, _e = (ae) => {
        re.x <= 10 && re.y <= 10 ? ae.preventDefault() : x.contains(ae.target) || U(!1), document.removeEventListener("pointermove", me), G.current = null;
      };
      return G.current !== null && (document.addEventListener("pointermove", me), document.addEventListener("pointerup", _e, {
        capture: !0,
        once: !0
      })), () => {
        document.removeEventListener("pointermove", me), document.removeEventListener("pointerup", _e, {
          capture: !0
        });
      };
    }
  }, [
    x,
    U,
    G
  ]), J(() => {
    const re = () => U(!1);
    return window.addEventListener("blur", re), window.addEventListener("resize", re), () => {
      window.removeEventListener("blur", re), window.removeEventListener("resize", re);
    };
  }, [
    U
  ]);
  const [Q, oe] = Dy((re) => {
    const me = R().filter(
      (fe) => !fe.disabled
    ), _e = me.find(
      (fe) => fe.ref.current === document.activeElement
    ), ae = Ay(me, re, _e);
    ae && setTimeout(
      () => ae.ref.current.focus()
    );
  }), H = ve((re, me, _e) => {
    const ae = !E.current && !_e;
    (y.value !== void 0 && y.value === me || ae) && (P(re), ae && (E.current = !0));
  }, [
    y.value
  ]), le = ve(
    () => x == null ? void 0 : x.focus(),
    [
      x
    ]
  ), be = ve((re, me, _e) => {
    const ae = !E.current && !_e;
    (y.value !== void 0 && y.value === me || ae) && K(re);
  }, [
    y.value
  ]), pe = r === "popper" ? hm : _I, ee = pe === hm ? {
    side: i,
    sideOffset: c,
    align: l,
    alignOffset: u,
    arrowPadding: f,
    collisionBoundary: p,
    collisionPadding: h,
    sticky: m,
    hideWhenDetached: v,
    avoidCollisions: g
  } : {};
  return /* @__PURE__ */ $(Ty, {
    scope: n,
    content: x,
    viewport: w,
    onViewportChange: N,
    itemRefCallback: H,
    selectedItem: D,
    onItemLeave: le,
    itemTextRefCallback: be,
    focusSelectedItem: T,
    selectedItemText: z,
    position: r,
    isPositioned: W,
    searchRef: Q
  }, /* @__PURE__ */ $(_s, {
    as: gn,
    allowPinchZoom: !0
  }, /* @__PURE__ */ $($c, {
    asChild: !0,
    trapped: y.open,
    onMountAutoFocus: (re) => {
      re.preventDefault();
    },
    onUnmountAutoFocus: X(o, (re) => {
      var me;
      (me = y.trigger) === null || me === void 0 || me.focus({
        preventScroll: !0
      }), re.preventDefault();
    })
  }, /* @__PURE__ */ $(co, {
    asChild: !0,
    disableOutsidePointerEvents: !0,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: (re) => re.preventDefault(),
    onDismiss: () => y.onOpenChange(!1)
  }, /* @__PURE__ */ $(pe, j({
    role: "listbox",
    id: y.contentId,
    "data-state": y.open ? "open" : "closed",
    dir: y.dir,
    onContextMenu: (re) => re.preventDefault()
  }, b, ee, {
    onPlaced: () => V(!0),
    ref: S,
    style: {
      // flex layout so we can place the scroll buttons properly
      display: "flex",
      flexDirection: "column",
      // reset the outline by default as the content MAY get focused
      outline: "none",
      ...b.style
    },
    onKeyDown: X(b.onKeyDown, (re) => {
      const me = re.ctrlKey || re.altKey || re.metaKey;
      if (re.key === "Tab" && re.preventDefault(), !me && re.key.length === 1 && oe(re.key), [
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End"
      ].includes(re.key)) {
        let ae = R().filter(
          (fe) => !fe.disabled
        ).map(
          (fe) => fe.ref.current
        );
        if ([
          "ArrowUp",
          "End"
        ].includes(re.key) && (ae = ae.slice().reverse()), [
          "ArrowUp",
          "ArrowDown"
        ].includes(re.key)) {
          const fe = re.target, A = ae.indexOf(fe);
          ae = ae.slice(A + 1);
        }
        setTimeout(
          () => B(ae)
        ), re.preventDefault();
      }
    })
  }))))));
}), _I = /* @__PURE__ */ L((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = vo(Vo, n), s = Rc(Vo, n), [i, c] = Z(null), [l, u] = Z(null), f = Ee(
    t,
    (S) => u(S)
  ), p = Sf(n), h = q(!1), m = q(!0), { viewport: v, selectedItem: g, selectedItemText: b, focusSelectedItem: y } = s, x = ve(() => {
    if (a.trigger && a.valueNode && i && l && v && g && b) {
      const S = a.trigger.getBoundingClientRect(), D = l.getBoundingClientRect(), P = a.valueNode.getBoundingClientRect(), z = b.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const fe = z.left - D.left, A = P.left - fe, ne = S.left - A, ye = S.width + ne, Pe = Math.max(ye, D.width), Ie = window.innerWidth - Xn, Oe = Wa(A, [
          Xn,
          Ie - Pe
        ]);
        i.style.minWidth = ye + "px", i.style.left = Oe + "px";
      } else {
        const fe = D.right - z.right, A = window.innerWidth - P.right - fe, ne = window.innerWidth - S.right - A, ye = S.width + ne, Pe = Math.max(ye, D.width), Ie = window.innerWidth - Xn, Oe = Wa(A, [
          Xn,
          Ie - Pe
        ]);
        i.style.minWidth = ye + "px", i.style.right = Oe + "px";
      }
      const K = p(), R = window.innerHeight - Xn * 2, W = v.scrollHeight, V = window.getComputedStyle(l), E = parseInt(V.borderTopWidth, 10), B = parseInt(V.paddingTop, 10), T = parseInt(V.borderBottomWidth, 10), U = parseInt(V.paddingBottom, 10), G = E + B + W + U + T, Q = Math.min(g.offsetHeight * 5, G), oe = window.getComputedStyle(v), H = parseInt(oe.paddingTop, 10), le = parseInt(oe.paddingBottom, 10), be = S.top + S.height / 2 - Xn, pe = R - be, ee = g.offsetHeight / 2, re = g.offsetTop + ee, me = E + B + re, _e = G - me;
      if (me <= be) {
        const fe = g === K[K.length - 1].ref.current;
        i.style.bottom = "0px";
        const A = l.clientHeight - v.offsetTop - v.offsetHeight, ne = Math.max(pe, ee + (fe ? le : 0) + A + T), ye = me + ne;
        i.style.height = ye + "px";
      } else {
        const fe = g === K[0].ref.current;
        i.style.top = "0px";
        const ne = Math.max(be, E + v.offsetTop + (fe ? H : 0) + ee) + _e;
        i.style.height = ne + "px", v.scrollTop = me - be + v.offsetTop;
      }
      i.style.margin = `${Xn}px 0`, i.style.minHeight = Q + "px", i.style.maxHeight = R + "px", r == null || r(), requestAnimationFrame(
        () => h.current = !0
      );
    }
  }, [
    p,
    a.trigger,
    a.valueNode,
    i,
    l,
    v,
    g,
    b,
    a.dir,
    r
  ]);
  St(
    () => x(),
    [
      x
    ]
  );
  const [_, w] = Z();
  St(() => {
    l && w(window.getComputedStyle(l).zIndex);
  }, [
    l
  ]);
  const N = ve((S) => {
    S && m.current === !0 && (x(), y == null || y(), m.current = !1);
  }, [
    x,
    y
  ]);
  return /* @__PURE__ */ $(CI, {
    scope: n,
    contentWrapper: i,
    shouldExpandOnScrollRef: h,
    onScrollButtonChange: N
  }, /* @__PURE__ */ $("div", {
    ref: c,
    style: {
      display: "flex",
      flexDirection: "column",
      position: "fixed",
      zIndex: _
    }
  }, /* @__PURE__ */ $(de.div, j({}, o, {
    ref: f,
    style: {
      // When we get the height of the content, it includes borders. If we were to set
      // the height without having `boxSizing: 'border-box'` it would be too big.
      boxSizing: "border-box",
      // We need to ensure the content doesn't get taller than the wrapper
      maxHeight: "100%",
      ...o.style
    }
  }))));
}), hm = /* @__PURE__ */ L((e, t) => {
  const { __scopeSelect: n, align: r = "start", collisionPadding: o = Xn, ...a } = e, s = Nf(n);
  return /* @__PURE__ */ $($s, j({}, s, a, {
    ref: t,
    align: r,
    collisionPadding: o,
    style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      ...a.style,
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
}), [CI, SI] = ca(Vo, {}), mm = "SelectViewport", NI = /* @__PURE__ */ L((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = Rc(mm, n), a = SI(mm, n), s = Ee(t, o.onViewportChange), i = q(0);
  return /* @__PURE__ */ $(vn, null, /* @__PURE__ */ $("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ $(Ac.Slot, {
    scope: n
  }, /* @__PURE__ */ $(de.div, j({
    "data-radix-select-viewport": "",
    role: "presentation"
  }, r, {
    ref: s,
    style: {
      // we use position: 'relative' here on the `viewport` so that when we call
      // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
      // (independent of the scrollUpButton).
      position: "relative",
      flex: 1,
      overflow: "auto",
      ...r.style
    },
    onScroll: X(r.onScroll, (c) => {
      const l = c.currentTarget, { contentWrapper: u, shouldExpandOnScrollRef: f } = a;
      if (f != null && f.current && u) {
        const p = Math.abs(i.current - l.scrollTop);
        if (p > 0) {
          const h = window.innerHeight - Xn * 2, m = parseFloat(u.style.minHeight), v = parseFloat(u.style.height), g = Math.max(m, v);
          if (g < h) {
            const b = g + p, y = Math.min(h, b), x = b - y;
            u.style.height = y + "px", u.style.bottom === "0px" && (l.scrollTop = x > 0 ? x : 0, u.style.justifyContent = "flex-end");
          }
        }
      }
      i.current = l.scrollTop;
    })
  }))));
}), EI = "SelectGroup", [PI, OI] = ca(EI), TI = /* @__PURE__ */ L((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = bt();
  return /* @__PURE__ */ $(PI, {
    scope: n,
    id: o
  }, /* @__PURE__ */ $(de.div, j({
    role: "group",
    "aria-labelledby": o
  }, r, {
    ref: t
  })));
}), jI = "SelectLabel", kI = /* @__PURE__ */ L((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = OI(jI, n);
  return /* @__PURE__ */ $(de.div, j({
    id: o.id
  }, r, {
    ref: t
  }));
}), Du = "SelectItem", [MI, jy] = ca(Du), DI = /* @__PURE__ */ L((e, t) => {
  const { __scopeSelect: n, value: r, disabled: o = !1, textValue: a, ...s } = e, i = vo(Du, n), c = Rc(Du, n), l = i.value === r, [u, f] = Z(a ?? ""), [p, h] = Z(!1), m = Ee(t, (b) => {
    var y;
    return (y = c.itemRefCallback) === null || y === void 0 ? void 0 : y.call(c, b, r, o);
  }), v = bt(), g = () => {
    o || (i.onValueChange(r), i.onOpenChange(!1));
  };
  if (r === "")
    throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
  return /* @__PURE__ */ $(MI, {
    scope: n,
    value: r,
    disabled: o,
    textId: v,
    isSelected: l,
    onItemTextChange: ve((b) => {
      f((y) => {
        var x;
        return y || ((x = b == null ? void 0 : b.textContent) !== null && x !== void 0 ? x : "").trim();
      });
    }, [])
  }, /* @__PURE__ */ $(Ac.ItemSlot, {
    scope: n,
    value: r,
    disabled: o,
    textValue: u
  }, /* @__PURE__ */ $(de.div, j({
    role: "option",
    "aria-labelledby": v,
    "data-highlighted": p ? "" : void 0,
    "aria-selected": l && p,
    "data-state": l ? "checked" : "unchecked",
    "aria-disabled": o || void 0,
    "data-disabled": o ? "" : void 0,
    tabIndex: o ? void 0 : -1
  }, s, {
    ref: m,
    onFocus: X(
      s.onFocus,
      () => h(!0)
    ),
    onBlur: X(
      s.onBlur,
      () => h(!1)
    ),
    onPointerUp: X(s.onPointerUp, g),
    onPointerMove: X(s.onPointerMove, (b) => {
      if (o) {
        var y;
        (y = c.onItemLeave) === null || y === void 0 || y.call(c);
      } else
        b.currentTarget.focus({
          preventScroll: !0
        });
    }),
    onPointerLeave: X(s.onPointerLeave, (b) => {
      if (b.currentTarget === document.activeElement) {
        var y;
        (y = c.onItemLeave) === null || y === void 0 || y.call(c);
      }
    }),
    onKeyDown: X(s.onKeyDown, (b) => {
      var y;
      ((y = c.searchRef) === null || y === void 0 ? void 0 : y.current) !== "" && b.key === " " || (lI.includes(b.key) && g(), b.key === " " && b.preventDefault());
    })
  }))));
}), ei = "SelectItemText", AI = /* @__PURE__ */ L((e, t) => {
  const { __scopeSelect: n, className: r, style: o, ...a } = e, s = vo(ei, n), i = Rc(ei, n), c = jy(ei, n), l = pI(ei, n), [u, f] = Z(null), p = Ee(
    t,
    (b) => f(b),
    c.onItemTextChange,
    (b) => {
      var y;
      return (y = i.itemTextRefCallback) === null || y === void 0 ? void 0 : y.call(i, b, c.value, c.disabled);
    }
  ), h = u == null ? void 0 : u.textContent, m = Ut(
    () => /* @__PURE__ */ $("option", {
      key: c.value,
      value: c.value,
      disabled: c.disabled
    }, h),
    [
      c.disabled,
      c.value,
      h
    ]
  ), { onNativeOptionAdd: v, onNativeOptionRemove: g } = l;
  return St(() => (v(m), () => g(m)), [
    v,
    g,
    m
  ]), /* @__PURE__ */ $(vn, null, /* @__PURE__ */ $(de.span, j({
    id: c.textId
  }, a, {
    ref: p
  })), c.isSelected && s.valueNode && !s.valueNodeHasChildren ? /* @__PURE__ */ cv(a.children, s.valueNode) : null);
}), RI = "SelectItemIndicator", II = /* @__PURE__ */ L((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return jy(RI, n).isSelected ? /* @__PURE__ */ $(de.span, j({
    "aria-hidden": !0
  }, r, {
    ref: t
  })) : null;
}), LI = /* @__PURE__ */ L((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return /* @__PURE__ */ $(de.div, j({
    "aria-hidden": !0
  }, r, {
    ref: t
  }));
});
function ky(e) {
  return e === "" || e === void 0;
}
const My = /* @__PURE__ */ L((e, t) => {
  const { value: n, ...r } = e, o = q(null), a = Ee(t, o), s = ia(n);
  return J(() => {
    const i = o.current, c = window.HTMLSelectElement.prototype, u = Object.getOwnPropertyDescriptor(c, "value").set;
    if (s !== n && u) {
      const f = new Event("change", {
        bubbles: !0
      });
      u.call(i, n), i.dispatchEvent(f);
    }
  }, [
    s,
    n
  ]), /* @__PURE__ */ $(Py, {
    asChild: !0
  }, /* @__PURE__ */ $("select", j({}, r, {
    ref: a,
    defaultValue: n
  })));
});
My.displayName = "BubbleSelect";
function Dy(e) {
  const t = Je(e), n = q(""), r = q(0), o = ve((s) => {
    const i = n.current + s;
    t(i), function c(l) {
      n.current = l, window.clearTimeout(r.current), l !== "" && (r.current = window.setTimeout(
        () => c(""),
        1e3
      ));
    }(i);
  }, [
    t
  ]), a = ve(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return J(() => () => window.clearTimeout(r.current), []), [
    n,
    o,
    a
  ];
}
function Ay(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (l) => l === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = FI(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter(
    (l) => l !== n
  ));
  const c = s.find(
    (l) => l.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function FI(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const BI = hI, Ry = vI, VI = bI, zI = yI, WI = xI, Iy = wI, UI = NI, HI = TI, Ly = kI, Fy = DI, KI = AI, GI = II, By = LI, Ef = BI, YI = HI, Pf = VI, Ic = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsxs(
  Ry,
  {
    ref: r,
    className: M(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ d.jsx(zI, { asChild: !0, children: /* @__PURE__ */ d.jsx(Ta, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
Ic.displayName = Ry.displayName;
const Lc = C.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ d.jsx(WI, { children: /* @__PURE__ */ d.jsx(
  Iy,
  {
    ref: o,
    className: M(
      "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card text-popover-foreground shadow-md animate-in fade-in-80",
      n === "popper" && "translate-y-1",
      e
    ),
    position: n,
    ...r,
    children: /* @__PURE__ */ d.jsx(
      UI,
      {
        className: M(
          "p-1",
          n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        ),
        children: t
      }
    )
  }
) }));
Lc.displayName = Iy.displayName;
const qI = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Ly,
  {
    ref: n,
    className: M("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
qI.displayName = Ly.displayName;
const Fc = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsxs(
  Fy,
  {
    ref: r,
    className: M(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ d.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ d.jsx(GI, { children: /* @__PURE__ */ d.jsx(rn, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ d.jsx(KI, { children: t })
    ]
  }
));
Fc.displayName = Fy.displayName;
const ZI = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  By,
  {
    ref: n,
    className: M("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
ZI.displayName = By.displayName;
const Vy = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  "div",
  {
    ref: n,
    className: M(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      e
    ),
    ...t
  }
));
Vy.displayName = "Card";
const XI = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  "div",
  {
    ref: n,
    className: M("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
XI.displayName = "CardHeader";
const QI = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  "h3",
  {
    ref: n,
    className: M(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
QI.displayName = "CardTitle";
const JI = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  "p",
  {
    ref: n,
    className: M("text-sm text-muted-foreground", e),
    ...t
  }
));
JI.displayName = "CardDescription";
const e9 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx("div", { ref: n, className: M("p-6 pt-0", e), ...t }));
e9.displayName = "CardContent";
const t9 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  "div",
  {
    ref: n,
    className: M(" flex items-center p-6 pt-0", e),
    ...t
  }
));
t9.displayName = "CardFooter";
const zy = "Checkbox", [n9, wY] = ut(zy), [r9, o9] = n9(zy), a9 = /* @__PURE__ */ L((e, t) => {
  const { __scopeCheckbox: n, name: r, checked: o, defaultChecked: a, required: s, disabled: i, value: c = "on", onCheckedChange: l, ...u } = e, [f, p] = Z(null), h = Ee(
    t,
    (x) => p(x)
  ), m = q(!1), v = f ? !!f.closest("form") : !0, [g = !1, b] = vt({
    prop: o,
    defaultProp: a,
    onChange: l
  }), y = q(g);
  return J(() => {
    const x = f == null ? void 0 : f.form;
    if (x) {
      const _ = () => b(y.current);
      return x.addEventListener("reset", _), () => x.removeEventListener("reset", _);
    }
  }, [
    f,
    b
  ]), /* @__PURE__ */ $(r9, {
    scope: n,
    state: g,
    disabled: i
  }, /* @__PURE__ */ $(de.button, j({
    type: "button",
    role: "checkbox",
    "aria-checked": Kr(g) ? "mixed" : g,
    "aria-required": s,
    "data-state": Wy(g),
    "data-disabled": i ? "" : void 0,
    disabled: i,
    value: c
  }, u, {
    ref: h,
    onKeyDown: X(e.onKeyDown, (x) => {
      x.key === "Enter" && x.preventDefault();
    }),
    onClick: X(e.onClick, (x) => {
      b(
        (_) => Kr(_) ? !0 : !_
      ), v && (m.current = x.isPropagationStopped(), m.current || x.stopPropagation());
    })
  })), v && /* @__PURE__ */ $(c9, {
    control: f,
    bubbles: !m.current,
    name: r,
    value: c,
    checked: g,
    required: s,
    disabled: i,
    style: {
      transform: "translateX(-100%)"
    }
  }));
}), s9 = "CheckboxIndicator", i9 = /* @__PURE__ */ L((e, t) => {
  const { __scopeCheckbox: n, forceMount: r, ...o } = e, a = o9(s9, n);
  return /* @__PURE__ */ $(ft, {
    present: r || Kr(a.state) || a.state === !0
  }, /* @__PURE__ */ $(de.span, j({
    "data-state": Wy(a.state),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: t,
    style: {
      pointerEvents: "none",
      ...e.style
    }
  })));
}), c9 = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = q(null), s = ia(n), i = xs(t);
  return J(() => {
    const c = a.current, l = window.HTMLInputElement.prototype, f = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (s !== n && f) {
      const p = new Event("click", {
        bubbles: r
      });
      c.indeterminate = Kr(n), f.call(c, Kr(n) ? !1 : n), c.dispatchEvent(p);
    }
  }, [
    s,
    n,
    r
  ]), /* @__PURE__ */ $("input", j({
    type: "checkbox",
    "aria-hidden": !0,
    defaultChecked: Kr(n) ? !1 : n
  }, o, {
    tabIndex: -1,
    ref: a,
    style: {
      ...e.style,
      ...i,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  }));
};
function Kr(e) {
  return e === "indeterminate";
}
function Wy(e) {
  return Kr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const Uy = a9, l9 = i9, Hy = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Uy,
  {
    ref: n,
    className: M(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ d.jsx(
      l9,
      {
        className: M("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ d.jsx(rn, { className: "h-4 w-4" })
      }
    )
  }
));
Hy.displayName = Uy.displayName;
const Ky = "DropdownMenu", [u9, $Y] = ut(Ky, [
  Cs
]), Lt = Cs(), [d9, Gy] = u9(Ky), f9 = (e) => {
  const { __scopeDropdownMenu: t, children: n, dir: r, open: o, defaultOpen: a, onOpenChange: s, modal: i = !0 } = e, c = Lt(t), l = q(null), [u = !1, f] = vt({
    prop: o,
    defaultProp: a,
    onChange: s
  });
  return /* @__PURE__ */ $(d9, {
    scope: t,
    triggerId: bt(),
    triggerRef: l,
    contentId: bt(),
    open: u,
    onOpenChange: f,
    onOpenToggle: ve(
      () => f(
        (p) => !p
      ),
      [
        f
      ]
    ),
    modal: i
  }, /* @__PURE__ */ $(ef, j({}, c, {
    open: u,
    onOpenChange: f,
    dir: r,
    modal: i
  }), n));
}, p9 = "DropdownMenuTrigger", h9 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = Gy(p9, n), s = Lt(n);
  return /* @__PURE__ */ $(tf, j({
    asChild: !0
  }, s), /* @__PURE__ */ $(de.button, j({
    type: "button",
    id: a.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": a.open,
    "aria-controls": a.open ? a.contentId : void 0,
    "data-state": a.open ? "open" : "closed",
    "data-disabled": r ? "" : void 0,
    disabled: r
  }, o, {
    ref: fs(t, a.triggerRef),
    onPointerDown: X(e.onPointerDown, (i) => {
      !r && i.button === 0 && i.ctrlKey === !1 && (a.onOpenToggle(), a.open || i.preventDefault());
    }),
    onKeyDown: X(e.onKeyDown, (i) => {
      r || ([
        "Enter",
        " "
      ].includes(i.key) && a.onOpenToggle(), i.key === "ArrowDown" && a.onOpenChange(!0), [
        "Enter",
        " ",
        "ArrowDown"
      ].includes(i.key) && i.preventDefault());
    })
  })));
}), m9 = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = Lt(t);
  return /* @__PURE__ */ $(nf, j({}, r, n));
}, v9 = "DropdownMenuContent", g9 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Gy(v9, n), a = Lt(n), s = q(!1);
  return /* @__PURE__ */ $(rf, j({
    id: o.contentId,
    "aria-labelledby": o.triggerId
  }, a, r, {
    ref: t,
    onCloseAutoFocus: X(e.onCloseAutoFocus, (i) => {
      var c;
      s.current || (c = o.triggerRef.current) === null || c === void 0 || c.focus(), s.current = !1, i.preventDefault();
    }),
    onInteractOutside: X(e.onInteractOutside, (i) => {
      const c = i.detail.originalEvent, l = c.button === 0 && c.ctrlKey === !0, u = c.button === 2 || l;
      (!o.modal || u) && (s.current = !0);
    }),
    style: {
      ...e.style,
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
}), b9 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ $(of, j({}, o, r, {
    ref: t
  }));
}), y9 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ $(af, j({}, o, r, {
    ref: t
  }));
}), x9 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ $(sf, j({}, o, r, {
    ref: t
  }));
}), w9 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ $(cf, j({}, o, r, {
    ref: t
  }));
}), $9 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ $(lf, j({}, o, r, {
    ref: t
  }));
}), _9 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ $(uf, j({}, o, r, {
    ref: t
  }));
}), C9 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ $(df, j({}, o, r, {
    ref: t
  }));
}), S9 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ $(ff, j({}, o, r, {
    ref: t
  }));
}), N9 = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, s = Lt(t), [i = !1, c] = vt({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ $(pf, j({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, E9 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ $(hf, j({}, o, r, {
    ref: t
  }));
}), P9 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ $(mf, j({}, o, r, {
    ref: t,
    style: {
      ...e.style,
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
}), O9 = f9, T9 = h9, Yy = m9, qy = g9, j9 = b9, Zy = y9, Xy = x9, Qy = w9, k9 = $9, Jy = _9, e0 = C9, t0 = S9, M9 = N9, n0 = E9, r0 = P9, _Y = O9, CY = T9, SY = j9, NY = Yy, EY = M9, PY = k9, D9 = C.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ d.jsxs(
  n0,
  {
    ref: o,
    className: M(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ d.jsx(Pr, { className: "ml-auto h-4 w-4" })
    ]
  }
));
D9.displayName = n0.displayName;
const A9 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  r0,
  {
    ref: n,
    className: M(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",
      e
    ),
    ...t
  }
));
A9.displayName = r0.displayName;
const R9 = C.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ d.jsx(Yy, { children: /* @__PURE__ */ d.jsx(
  qy,
  {
    ref: r,
    sideOffset: t,
    className: M(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
R9.displayName = qy.displayName;
const I9 = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ d.jsx(
  Xy,
  {
    ref: r,
    className: M(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
I9.displayName = Xy.displayName;
const L9 = C.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ d.jsxs(
  Qy,
  {
    ref: o,
    className: M(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ d.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ d.jsx(e0, { children: /* @__PURE__ */ d.jsx(rn, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
L9.displayName = Qy.displayName;
const F9 = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsxs(
  Jy,
  {
    ref: r,
    className: M(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ d.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ d.jsx(e0, { children: /* @__PURE__ */ d.jsx(lc, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
F9.displayName = Jy.displayName;
const B9 = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ d.jsx(
  Zy,
  {
    ref: r,
    className: M(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
B9.displayName = Zy.displayName;
const V9 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  t0,
  {
    ref: n,
    className: M("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
V9.displayName = t0.displayName;
const z9 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsx(
  "span",
  {
    className: M("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
z9.displayName = "DropdownMenuShortcut";
const Au = "horizontal", W9 = [
  "horizontal",
  "vertical"
], o0 = /* @__PURE__ */ L((e, t) => {
  const { decorative: n, orientation: r = Au, ...o } = e, a = a0(r) ? r : Au, i = n ? {
    role: "none"
  } : {
    "aria-orientation": a === "vertical" ? a : void 0,
    role: "separator"
  };
  return /* @__PURE__ */ $(de.div, j({
    "data-orientation": a
  }, i, o, {
    ref: t
  }));
});
o0.propTypes = {
  orientation(e, t, n) {
    const r = e[t], o = String(r);
    return r && !a0(r) ? new Error(U9(o, n)) : null;
  }
};
function U9(e, t) {
  return `Invalid prop \`orientation\` of value \`${e}\` supplied to \`${t}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${Au}\`.`;
}
function a0(e) {
  return W9.includes(e);
}
const s0 = o0, js = C.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }, o) => /* @__PURE__ */ d.jsx(
    s0,
    {
      ref: o,
      decorative: n,
      orientation: t,
      className: M(
        "shrink-0 bg-border",
        t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        e
      ),
      ...r
    }
  )
);
js.displayName = s0.displayName;
var vm = 1, H9 = 0.9, K9 = 0.8, G9 = 0.17, Dl = 0.1, Al = 0.999, Y9 = 0.9999, q9 = 0.99, Z9 = /[\\\/_+.#"@\[\(\{&]/, X9 = /[\\\/_+.#"@\[\(\{&]/g, Q9 = /[\s-]/, i0 = /[\s-]/g;
function Ru(e, t, n, r, o, a, s) {
  if (a === t.length)
    return o === e.length ? vm : q9;
  var i = `${o},${a}`;
  if (s[i] !== void 0)
    return s[i];
  for (var c = r.charAt(a), l = n.indexOf(c, o), u = 0, f, p, h, m; l >= 0; )
    f = Ru(e, t, n, r, l + 1, a + 1, s), f > u && (l === o ? f *= vm : Z9.test(e.charAt(l - 1)) ? (f *= K9, h = e.slice(o, l - 1).match(X9), h && o > 0 && (f *= Math.pow(Al, h.length))) : Q9.test(e.charAt(l - 1)) ? (f *= H9, m = e.slice(o, l - 1).match(i0), m && o > 0 && (f *= Math.pow(Al, m.length))) : (f *= G9, o > 0 && (f *= Math.pow(Al, l - o))), e.charAt(l) !== t.charAt(a) && (f *= Y9)), (f < Dl && n.charAt(l - 1) === r.charAt(a + 1) || r.charAt(a + 1) === r.charAt(a) && n.charAt(l - 1) !== r.charAt(a)) && (p = Ru(e, t, n, r, l + 1, a + 2, s), p * Dl > f && (f = p * Dl)), f > u && (u = f), l = n.indexOf(c, l + 1);
  return s[i] = u, u;
}
function gm(e) {
  return e.toLowerCase().replace(i0, " ");
}
function J9(e, t, n) {
  return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, Ru(e, t, gm(e), gm(t), 0, 0, {});
}
var wa = '[cmdk-group=""]', Rl = '[cmdk-group-items=""]', eL = '[cmdk-group-heading=""]', Of = '[cmdk-item=""]', bm = `${Of}:not([aria-disabled="true"])`, Iu = "cmdk-item-select", Vr = "data-value", tL = (e, t, n) => J9(e, t, n), c0 = C.createContext(void 0), ks = () => C.useContext(c0), l0 = C.createContext(void 0), Tf = () => C.useContext(l0), u0 = C.createContext(void 0), d0 = C.forwardRef((e, t) => {
  let n = Co(() => {
    var H, le;
    return { search: "", value: (le = (H = e.value) != null ? H : e.defaultValue) != null ? le : "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), r = Co(() => /* @__PURE__ */ new Set()), o = Co(() => /* @__PURE__ */ new Map()), a = Co(() => /* @__PURE__ */ new Map()), s = Co(() => /* @__PURE__ */ new Set()), i = p0(e), { label: c, children: l, value: u, onValueChange: f, filter: p, shouldFilter: h, loop: m, disablePointerSelection: v = !1, vimBindings: g = !0, ...b } = e, y = C.useId(), x = C.useId(), _ = C.useId(), w = C.useRef(null), N = dL();
  Zr(() => {
    if (u !== void 0) {
      let H = u.trim();
      n.current.value = H, S.emit();
    }
  }, [u]), Zr(() => {
    N(6, W);
  }, []);
  let S = C.useMemo(() => ({ subscribe: (H) => (s.current.add(H), () => s.current.delete(H)), snapshot: () => n.current, setState: (H, le, be) => {
    var pe, ee, re;
    if (!Object.is(n.current[H], le)) {
      if (n.current[H] = le, H === "search")
        R(), z(), N(1, K);
      else if (H === "value" && (be || N(5, W), ((pe = i.current) == null ? void 0 : pe.value) !== void 0)) {
        let me = le ?? "";
        (re = (ee = i.current).onValueChange) == null || re.call(ee, me);
        return;
      }
      S.emit();
    }
  }, emit: () => {
    s.current.forEach((H) => H());
  } }), []), D = C.useMemo(() => ({ value: (H, le, be) => {
    var pe;
    le !== ((pe = a.current.get(H)) == null ? void 0 : pe.value) && (a.current.set(H, { value: le, keywords: be }), n.current.filtered.items.set(H, P(le, be)), N(2, () => {
      z(), S.emit();
    }));
  }, item: (H, le) => (r.current.add(H), le && (o.current.has(le) ? o.current.get(le).add(H) : o.current.set(le, /* @__PURE__ */ new Set([H]))), N(3, () => {
    R(), z(), n.current.value || K(), S.emit();
  }), () => {
    a.current.delete(H), r.current.delete(H), n.current.filtered.items.delete(H);
    let be = V();
    N(4, () => {
      R(), (be == null ? void 0 : be.getAttribute("id")) === H && K(), S.emit();
    });
  }), group: (H) => (o.current.has(H) || o.current.set(H, /* @__PURE__ */ new Set()), () => {
    a.current.delete(H), o.current.delete(H);
  }), filter: () => i.current.shouldFilter, label: c || e["aria-label"], disablePointerSelection: v, listId: y, inputId: _, labelId: x, listInnerRef: w }), []);
  function P(H, le) {
    var be, pe;
    let ee = (pe = (be = i.current) == null ? void 0 : be.filter) != null ? pe : tL;
    return H ? ee(H, n.current.search, le) : 0;
  }
  function z() {
    if (!n.current.search || i.current.shouldFilter === !1)
      return;
    let H = n.current.filtered.items, le = [];
    n.current.filtered.groups.forEach((pe) => {
      let ee = o.current.get(pe), re = 0;
      ee.forEach((me) => {
        let _e = H.get(me);
        re = Math.max(_e, re);
      }), le.push([pe, re]);
    });
    let be = w.current;
    E().sort((pe, ee) => {
      var re, me;
      let _e = pe.getAttribute("id"), ae = ee.getAttribute("id");
      return ((re = H.get(ae)) != null ? re : 0) - ((me = H.get(_e)) != null ? me : 0);
    }).forEach((pe) => {
      let ee = pe.closest(Rl);
      ee ? ee.appendChild(pe.parentElement === ee ? pe : pe.closest(`${Rl} > *`)) : be.appendChild(pe.parentElement === be ? pe : pe.closest(`${Rl} > *`));
    }), le.sort((pe, ee) => ee[1] - pe[1]).forEach((pe) => {
      let ee = w.current.querySelector(`${wa}[${Vr}="${encodeURIComponent(pe[0])}"]`);
      ee == null || ee.parentElement.appendChild(ee);
    });
  }
  function K() {
    let H = E().find((be) => be.getAttribute("aria-disabled") !== "true"), le = H == null ? void 0 : H.getAttribute(Vr);
    S.setState("value", le || void 0);
  }
  function R() {
    var H, le, be, pe;
    if (!n.current.search || i.current.shouldFilter === !1) {
      n.current.filtered.count = r.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let ee = 0;
    for (let re of r.current) {
      let me = (le = (H = a.current.get(re)) == null ? void 0 : H.value) != null ? le : "", _e = (pe = (be = a.current.get(re)) == null ? void 0 : be.keywords) != null ? pe : [], ae = P(me, _e);
      n.current.filtered.items.set(re, ae), ae > 0 && ee++;
    }
    for (let [re, me] of o.current)
      for (let _e of me)
        if (n.current.filtered.items.get(_e) > 0) {
          n.current.filtered.groups.add(re);
          break;
        }
    n.current.filtered.count = ee;
  }
  function W() {
    var H, le, be;
    let pe = V();
    pe && (((H = pe.parentElement) == null ? void 0 : H.firstChild) === pe && ((be = (le = pe.closest(wa)) == null ? void 0 : le.querySelector(eL)) == null || be.scrollIntoView({ block: "nearest" })), pe.scrollIntoView({ block: "nearest" }));
  }
  function V() {
    var H;
    return (H = w.current) == null ? void 0 : H.querySelector(`${Of}[aria-selected="true"]`);
  }
  function E() {
    var H;
    return Array.from((H = w.current) == null ? void 0 : H.querySelectorAll(bm));
  }
  function B(H) {
    let le = E()[H];
    le && S.setState("value", le.getAttribute(Vr));
  }
  function T(H) {
    var le;
    let be = V(), pe = E(), ee = pe.findIndex((me) => me === be), re = pe[ee + H];
    (le = i.current) != null && le.loop && (re = ee + H < 0 ? pe[pe.length - 1] : ee + H === pe.length ? pe[0] : pe[ee + H]), re && S.setState("value", re.getAttribute(Vr));
  }
  function U(H) {
    let le = V(), be = le == null ? void 0 : le.closest(wa), pe;
    for (; be && !pe; )
      be = H > 0 ? lL(be, wa) : uL(be, wa), pe = be == null ? void 0 : be.querySelector(bm);
    pe ? S.setState("value", pe.getAttribute(Vr)) : T(H);
  }
  let G = () => B(E().length - 1), Q = (H) => {
    H.preventDefault(), H.metaKey ? G() : H.altKey ? U(1) : T(1);
  }, oe = (H) => {
    H.preventDefault(), H.metaKey ? B(0) : H.altKey ? U(-1) : T(-1);
  };
  return C.createElement(de.div, { ref: t, tabIndex: -1, ...b, "cmdk-root": "", onKeyDown: (H) => {
    var le;
    if ((le = b.onKeyDown) == null || le.call(b, H), !H.defaultPrevented)
      switch (H.key) {
        case "n":
        case "j": {
          g && H.ctrlKey && Q(H);
          break;
        }
        case "ArrowDown": {
          Q(H);
          break;
        }
        case "p":
        case "k": {
          g && H.ctrlKey && oe(H);
          break;
        }
        case "ArrowUp": {
          oe(H);
          break;
        }
        case "Home": {
          H.preventDefault(), B(0);
          break;
        }
        case "End": {
          H.preventDefault(), G();
          break;
        }
        case "Enter":
          if (!H.nativeEvent.isComposing && H.keyCode !== 229) {
            H.preventDefault();
            let be = V();
            if (be) {
              let pe = new Event(Iu);
              be.dispatchEvent(pe);
            }
          }
      }
  } }, C.createElement("label", { "cmdk-label": "", htmlFor: D.inputId, id: D.labelId, style: pL }, c), Bc(e, (H) => C.createElement(l0.Provider, { value: S }, C.createElement(c0.Provider, { value: D }, H))));
}), nL = C.forwardRef((e, t) => {
  var n, r;
  let o = C.useId(), a = C.useRef(null), s = C.useContext(u0), i = ks(), c = p0(e), l = (r = (n = c.current) == null ? void 0 : n.forceMount) != null ? r : s == null ? void 0 : s.forceMount;
  Zr(() => {
    if (!l)
      return i.item(o, s == null ? void 0 : s.id);
  }, [l]);
  let u = h0(o, a, [e.value, e.children, a], e.keywords), f = Tf(), p = Xr((N) => N.value && N.value === u.current), h = Xr((N) => l || i.filter() === !1 ? !0 : N.search ? N.filtered.items.get(o) > 0 : !0);
  C.useEffect(() => {
    let N = a.current;
    if (!(!N || e.disabled))
      return N.addEventListener(Iu, m), () => N.removeEventListener(Iu, m);
  }, [h, e.onSelect, e.disabled]);
  function m() {
    var N, S;
    v(), (S = (N = c.current).onSelect) == null || S.call(N, u.current);
  }
  function v() {
    f.setState("value", u.current, !0);
  }
  if (!h)
    return null;
  let { disabled: g, value: b, onSelect: y, forceMount: x, keywords: _, ...w } = e;
  return C.createElement(de.div, { ref: Ua([a, t]), ...w, id: o, "cmdk-item": "", role: "option", "aria-disabled": !!g, "aria-selected": !!p, "data-disabled": !!g, "data-selected": !!p, onPointerMove: g || i.disablePointerSelection ? void 0 : v, onClick: g ? void 0 : m }, e.children);
}), rL = C.forwardRef((e, t) => {
  let { heading: n, children: r, forceMount: o, ...a } = e, s = C.useId(), i = C.useRef(null), c = C.useRef(null), l = C.useId(), u = ks(), f = Xr((h) => o || u.filter() === !1 ? !0 : h.search ? h.filtered.groups.has(s) : !0);
  Zr(() => u.group(s), []), h0(s, i, [e.value, e.heading, c]);
  let p = C.useMemo(() => ({ id: s, forceMount: o }), [o]);
  return C.createElement(de.div, { ref: Ua([i, t]), ...a, "cmdk-group": "", role: "presentation", hidden: f ? void 0 : !0 }, n && C.createElement("div", { ref: c, "cmdk-group-heading": "", "aria-hidden": !0, id: l }, n), Bc(e, (h) => C.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? l : void 0 }, C.createElement(u0.Provider, { value: p }, h))));
}), oL = C.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = C.useRef(null), a = Xr((s) => !s.search);
  return !n && !a ? null : C.createElement(de.div, { ref: Ua([o, t]), ...r, "cmdk-separator": "", role: "separator" });
}), aL = C.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, a = Tf(), s = Xr((u) => u.search), i = Xr((u) => u.value), c = ks(), l = C.useMemo(() => {
    var u;
    let f = (u = c.listInnerRef.current) == null ? void 0 : u.querySelector(`${Of}[${Vr}="${encodeURIComponent(i)}"]`);
    return f == null ? void 0 : f.getAttribute("id");
  }, []);
  return C.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), C.createElement(de.input, { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": c.listId, "aria-labelledby": c.labelId, "aria-activedescendant": l, id: c.inputId, type: "text", value: o ? e.value : s, onChange: (u) => {
    o || a.setState("search", u.target.value), n == null || n(u.target.value);
  } });
}), f0 = C.forwardRef((e, t) => {
  let { children: n, label: r = "Suggestions", ...o } = e, a = C.useRef(null), s = C.useRef(null), i = ks();
  return C.useEffect(() => {
    if (s.current && a.current) {
      let c = s.current, l = a.current, u, f = new ResizeObserver(() => {
        u = requestAnimationFrame(() => {
          let p = c.offsetHeight;
          l.style.setProperty("--cmdk-list-height", p.toFixed(1) + "px");
        });
      });
      return f.observe(c), () => {
        cancelAnimationFrame(u), f.unobserve(c);
      };
    }
  }, []), C.createElement(de.div, { ref: Ua([a, t]), ...o, "cmdk-list": "", role: "listbox", "aria-label": r, id: i.listId }, Bc(e, (c) => C.createElement("div", { ref: Ua([s, i.listInnerRef]), "cmdk-list-sizer": "" }, c)));
}), sL = C.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: o, contentClassName: a, container: s, ...i } = e;
  return C.createElement(Os, { open: n, onOpenChange: r }, C.createElement(Ts, { container: s }, C.createElement(po, { "cmdk-overlay": "", className: o }), C.createElement(ho, { "aria-label": e.label, "cmdk-dialog": "", className: a }, C.createElement(d0, { ref: t, ...i }))));
}), iL = C.forwardRef((e, t) => Xr((n) => n.filtered.count === 0) ? C.createElement(de.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), cL = C.forwardRef((e, t) => {
  let { progress: n, children: r, label: o = "Loading...", ...a } = e;
  return C.createElement(de.div, { ref: t, ...a, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": o }, Bc(e, (s) => C.createElement("div", { "aria-hidden": !0 }, s)));
}), Ht = Object.assign(d0, { List: f0, Item: nL, Input: aL, Group: rL, Separator: oL, Dialog: sL, Empty: iL, Loading: cL });
function lL(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.nextElementSibling;
  }
}
function uL(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.previousElementSibling;
  }
}
function p0(e) {
  let t = C.useRef(e);
  return Zr(() => {
    t.current = e;
  }), t;
}
var Zr = typeof window > "u" ? C.useEffect : C.useLayoutEffect;
function Co(e) {
  let t = C.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function Ua(e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n != null && (n.current = t);
    });
  };
}
function Xr(e) {
  let t = Tf(), n = () => e(t.snapshot());
  return C.useSyncExternalStore(t.subscribe, n, n);
}
function h0(e, t, n, r = []) {
  let o = C.useRef(), a = ks();
  return Zr(() => {
    var s;
    let i = (() => {
      var l;
      for (let u of n) {
        if (typeof u == "string")
          return u.trim();
        if (typeof u == "object" && "current" in u)
          return u.current ? (l = u.current.textContent) == null ? void 0 : l.trim() : o.current;
      }
    })(), c = r.map((l) => l.trim());
    a.value(e, i, c), (s = t.current) == null || s.setAttribute(Vr, i), o.current = i;
  }), o;
}
var dL = () => {
  let [e, t] = C.useState(), n = Co(() => /* @__PURE__ */ new Map());
  return Zr(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
};
function fL(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function Bc({ asChild: e, children: t }, n) {
  return e && C.isValidElement(t) ? C.cloneElement(fL(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var pL = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const rr = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Ht,
  {
    ref: n,
    className: M(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      e
    ),
    ...t
  }
));
rr.displayName = Ht.displayName;
const OY = ({ children: e, ...t }) => /* @__PURE__ */ d.jsx(yy, { ...t, children: /* @__PURE__ */ d.jsx($f, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ d.jsx(rr, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) }), wr = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ d.jsx(yi, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ d.jsx(
    Ht.Input,
    {
      ref: n,
      className: M(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t
    }
  )
] }));
wr.displayName = Ht.Input.displayName;
const la = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Ht.List,
  {
    ref: n,
    className: M("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
la.displayName = Ht.List.displayName;
const $r = C.forwardRef((e, t) => /* @__PURE__ */ d.jsx(
  Ht.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
$r.displayName = Ht.Empty.displayName;
const wn = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Ht.Group,
  {
    ref: n,
    className: M(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      e
    ),
    ...t
  }
));
wn.displayName = Ht.Group.displayName;
const Ha = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Ht.Separator,
  {
    ref: n,
    className: M("-mx-1 h-px bg-border", e),
    ...t
  }
));
Ha.displayName = Ht.Separator.displayName;
const nn = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Ht.Item,
  {
    ref: n,
    className: M("cmdk-item relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground cursor-pointer", e),
    ...t
  }
));
nn.displayName = Ht.Item.displayName;
const hL = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsx(
  "span",
  {
    className: M(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
hL.displayName = "CommandShortcut";
const mL = /* @__PURE__ */ L((e, t) => {
  const { ratio: n = 1, style: r, ...o } = e;
  return /* @__PURE__ */ $("div", {
    style: {
      // ensures inner element is contained
      position: "relative",
      // ensures padding bottom trick maths works
      width: "100%",
      paddingBottom: `${100 / n}%`
    },
    "data-radix-aspect-ratio-wrapper": ""
  }, /* @__PURE__ */ $(de.div, j({}, o, {
    ref: t,
    style: {
      ...r,
      // ensures children expand in ratio
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  })));
}), vL = mL, TY = vL;
function gL(e, t) {
  return cd((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const m0 = "ScrollArea", [v0, jY] = ut(m0), [bL, on] = v0(m0), yL = /* @__PURE__ */ L((e, t) => {
  const { __scopeScrollArea: n, type: r = "hover", dir: o, scrollHideDelay: a = 600, ...s } = e, [i, c] = Z(null), [l, u] = Z(null), [f, p] = Z(null), [h, m] = Z(null), [v, g] = Z(null), [b, y] = Z(0), [x, _] = Z(0), [w, N] = Z(!1), [S, D] = Z(!1), P = Ee(
    t,
    (K) => c(K)
  ), z = zn(o);
  return /* @__PURE__ */ $(bL, {
    scope: n,
    type: r,
    dir: z,
    scrollHideDelay: a,
    scrollArea: i,
    viewport: l,
    onViewportChange: u,
    content: f,
    onContentChange: p,
    scrollbarX: h,
    onScrollbarXChange: m,
    scrollbarXEnabled: w,
    onScrollbarXEnabledChange: N,
    scrollbarY: v,
    onScrollbarYChange: g,
    scrollbarYEnabled: S,
    onScrollbarYEnabledChange: D,
    onCornerWidthChange: y,
    onCornerHeightChange: _
  }, /* @__PURE__ */ $(de.div, j({
    dir: z
  }, s, {
    ref: P,
    style: {
      position: "relative",
      // Pass corner sizes as CSS vars to reduce re-renders of context consumers
      "--radix-scroll-area-corner-width": b + "px",
      "--radix-scroll-area-corner-height": x + "px",
      ...e.style
    }
  })));
}), xL = "ScrollAreaViewport", wL = /* @__PURE__ */ L((e, t) => {
  const { __scopeScrollArea: n, children: r, ...o } = e, a = on(xL, n), s = q(null), i = Ee(t, s, a.onViewportChange);
  return /* @__PURE__ */ $(vn, null, /* @__PURE__ */ $("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ $(de.div, j({
    "data-radix-scroll-area-viewport": ""
  }, o, {
    ref: i,
    style: {
      /**
      * We don't support `visible` because the intention is to have at least one scrollbar
      * if this component is used and `visible` will behave like `auto` in that case
      * https://developer.mozilla.org/en-US/docs/Web/CSS/overflowed#description
      *
      * We don't handle `auto` because the intention is for the native implementation
      * to be hidden if using this component. We just want to ensure the node is scrollable
      * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
      * the browser from having to work out whether to render native scrollbars or not,
      * we tell it to with the intention of hiding them in CSS.
      */
      overflowX: a.scrollbarXEnabled ? "scroll" : "hidden",
      overflowY: a.scrollbarYEnabled ? "scroll" : "hidden",
      ...e.style
    }
  }), /* @__PURE__ */ $("div", {
    ref: a.onContentChange,
    style: {
      minWidth: "100%",
      display: "table"
    }
  }, r)));
}), sr = "ScrollAreaScrollbar", g0 = /* @__PURE__ */ L((e, t) => {
  const { forceMount: n, ...r } = e, o = on(sr, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: s } = o, i = e.orientation === "horizontal";
  return J(() => (i ? a(!0) : s(!0), () => {
    i ? a(!1) : s(!1);
  }), [
    i,
    a,
    s
  ]), o.type === "hover" ? /* @__PURE__ */ $($L, j({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "scroll" ? /* @__PURE__ */ $(_L, j({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "auto" ? /* @__PURE__ */ $(b0, j({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "always" ? /* @__PURE__ */ $(jf, j({}, r, {
    ref: t
  })) : null;
}), $L = /* @__PURE__ */ L((e, t) => {
  const { forceMount: n, ...r } = e, o = on(sr, e.__scopeScrollArea), [a, s] = Z(!1);
  return J(() => {
    const i = o.scrollArea;
    let c = 0;
    if (i) {
      const l = () => {
        window.clearTimeout(c), s(!0);
      }, u = () => {
        c = window.setTimeout(
          () => s(!1),
          o.scrollHideDelay
        );
      };
      return i.addEventListener("pointerenter", l), i.addEventListener("pointerleave", u), () => {
        window.clearTimeout(c), i.removeEventListener("pointerenter", l), i.removeEventListener("pointerleave", u);
      };
    }
  }, [
    o.scrollArea,
    o.scrollHideDelay
  ]), /* @__PURE__ */ $(ft, {
    present: n || a
  }, /* @__PURE__ */ $(b0, j({
    "data-state": a ? "visible" : "hidden"
  }, r, {
    ref: t
  })));
}), _L = /* @__PURE__ */ L((e, t) => {
  const { forceMount: n, ...r } = e, o = on(sr, e.__scopeScrollArea), a = e.orientation === "horizontal", s = zc(
    () => c("SCROLL_END"),
    100
  ), [i, c] = gL("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  return J(() => {
    if (i === "idle") {
      const l = window.setTimeout(
        () => c("HIDE"),
        o.scrollHideDelay
      );
      return () => window.clearTimeout(l);
    }
  }, [
    i,
    o.scrollHideDelay,
    c
  ]), J(() => {
    const l = o.viewport, u = a ? "scrollLeft" : "scrollTop";
    if (l) {
      let f = l[u];
      const p = () => {
        const h = l[u];
        f !== h && (c("SCROLL"), s()), f = h;
      };
      return l.addEventListener("scroll", p), () => l.removeEventListener("scroll", p);
    }
  }, [
    o.viewport,
    a,
    c,
    s
  ]), /* @__PURE__ */ $(ft, {
    present: n || i !== "hidden"
  }, /* @__PURE__ */ $(jf, j({
    "data-state": i === "hidden" ? "hidden" : "visible"
  }, r, {
    ref: t,
    onPointerEnter: X(
      e.onPointerEnter,
      () => c("POINTER_ENTER")
    ),
    onPointerLeave: X(
      e.onPointerLeave,
      () => c("POINTER_LEAVE")
    )
  })));
}), b0 = /* @__PURE__ */ L((e, t) => {
  const n = on(sr, e.__scopeScrollArea), { forceMount: r, ...o } = e, [a, s] = Z(!1), i = e.orientation === "horizontal", c = zc(() => {
    if (n.viewport) {
      const l = n.viewport.offsetWidth < n.viewport.scrollWidth, u = n.viewport.offsetHeight < n.viewport.scrollHeight;
      s(i ? l : u);
    }
  }, 10);
  return zo(n.viewport, c), zo(n.content, c), /* @__PURE__ */ $(ft, {
    present: r || a
  }, /* @__PURE__ */ $(jf, j({
    "data-state": a ? "visible" : "hidden"
  }, o, {
    ref: t
  })));
}), jf = /* @__PURE__ */ L((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = on(sr, e.__scopeScrollArea), a = q(null), s = q(0), [i, c] = Z({
    content: 0,
    viewport: 0,
    scrollbar: {
      size: 0,
      paddingStart: 0,
      paddingEnd: 0
    }
  }), l = $0(i.viewport, i.content), u = {
    ...r,
    sizes: i,
    onSizesChange: c,
    hasThumb: l > 0 && l < 1,
    onThumbChange: (p) => a.current = p,
    onThumbPointerUp: () => s.current = 0,
    onThumbPointerDown: (p) => s.current = p
  };
  function f(p, h) {
    return jL(p, s.current, i, h);
  }
  return n === "horizontal" ? /* @__PURE__ */ $(CL, j({}, u, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && a.current) {
        const p = o.viewport.scrollLeft, h = ym(p, i, o.dir);
        a.current.style.transform = `translate3d(${h}px, 0, 0)`;
      }
    },
    onWheelScroll: (p) => {
      o.viewport && (o.viewport.scrollLeft = p);
    },
    onDragScroll: (p) => {
      o.viewport && (o.viewport.scrollLeft = f(p, o.dir));
    }
  })) : n === "vertical" ? /* @__PURE__ */ $(SL, j({}, u, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && a.current) {
        const p = o.viewport.scrollTop, h = ym(p, i);
        a.current.style.transform = `translate3d(0, ${h}px, 0)`;
      }
    },
    onWheelScroll: (p) => {
      o.viewport && (o.viewport.scrollTop = p);
    },
    onDragScroll: (p) => {
      o.viewport && (o.viewport.scrollTop = f(p));
    }
  })) : null;
}), CL = /* @__PURE__ */ L((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = on(sr, e.__scopeScrollArea), [s, i] = Z(), c = q(null), l = Ee(t, c, a.onScrollbarXChange);
  return J(() => {
    c.current && i(getComputedStyle(c.current));
  }, [
    c
  ]), /* @__PURE__ */ $(x0, j({
    "data-orientation": "horizontal"
  }, o, {
    ref: l,
    sizes: n,
    style: {
      bottom: 0,
      left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
      right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
      "--radix-scroll-area-thumb-width": Vc(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (u) => e.onThumbPointerDown(u.x),
    onDragScroll: (u) => e.onDragScroll(u.x),
    onWheelScroll: (u, f) => {
      if (a.viewport) {
        const p = a.viewport.scrollLeft + u.deltaX;
        e.onWheelScroll(p), C0(p, f) && u.preventDefault();
      }
    },
    onResize: () => {
      c.current && a.viewport && s && r({
        content: a.viewport.scrollWidth,
        viewport: a.viewport.offsetWidth,
        scrollbar: {
          size: c.current.clientWidth,
          paddingStart: Ui(s.paddingLeft),
          paddingEnd: Ui(s.paddingRight)
        }
      });
    }
  }));
}), SL = /* @__PURE__ */ L((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = on(sr, e.__scopeScrollArea), [s, i] = Z(), c = q(null), l = Ee(t, c, a.onScrollbarYChange);
  return J(() => {
    c.current && i(getComputedStyle(c.current));
  }, [
    c
  ]), /* @__PURE__ */ $(x0, j({
    "data-orientation": "vertical"
  }, o, {
    ref: l,
    sizes: n,
    style: {
      top: 0,
      right: a.dir === "ltr" ? 0 : void 0,
      left: a.dir === "rtl" ? 0 : void 0,
      bottom: "var(--radix-scroll-area-corner-height)",
      "--radix-scroll-area-thumb-height": Vc(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (u) => e.onThumbPointerDown(u.y),
    onDragScroll: (u) => e.onDragScroll(u.y),
    onWheelScroll: (u, f) => {
      if (a.viewport) {
        const p = a.viewport.scrollTop + u.deltaY;
        e.onWheelScroll(p), C0(p, f) && u.preventDefault();
      }
    },
    onResize: () => {
      c.current && a.viewport && s && r({
        content: a.viewport.scrollHeight,
        viewport: a.viewport.offsetHeight,
        scrollbar: {
          size: c.current.clientHeight,
          paddingStart: Ui(s.paddingTop),
          paddingEnd: Ui(s.paddingBottom)
        }
      });
    }
  }));
}), [NL, y0] = v0(sr), x0 = /* @__PURE__ */ L((e, t) => {
  const { __scopeScrollArea: n, sizes: r, hasThumb: o, onThumbChange: a, onThumbPointerUp: s, onThumbPointerDown: i, onThumbPositionChange: c, onDragScroll: l, onWheelScroll: u, onResize: f, ...p } = e, h = on(sr, n), [m, v] = Z(null), g = Ee(
    t,
    (P) => v(P)
  ), b = q(null), y = q(""), x = h.viewport, _ = r.content - r.viewport, w = Je(u), N = Je(c), S = zc(f, 10);
  function D(P) {
    if (b.current) {
      const z = P.clientX - b.current.left, K = P.clientY - b.current.top;
      l({
        x: z,
        y: K
      });
    }
  }
  return J(() => {
    const P = (z) => {
      const K = z.target;
      (m == null ? void 0 : m.contains(K)) && w(z, _);
    };
    return document.addEventListener("wheel", P, {
      passive: !1
    }), () => document.removeEventListener("wheel", P, {
      passive: !1
    });
  }, [
    x,
    m,
    _,
    w
  ]), J(N, [
    r,
    N
  ]), zo(m, S), zo(h.content, S), /* @__PURE__ */ $(NL, {
    scope: n,
    scrollbar: m,
    hasThumb: o,
    onThumbChange: Je(a),
    onThumbPointerUp: Je(s),
    onThumbPositionChange: N,
    onThumbPointerDown: Je(i)
  }, /* @__PURE__ */ $(de.div, j({}, p, {
    ref: g,
    style: {
      position: "absolute",
      ...p.style
    },
    onPointerDown: X(e.onPointerDown, (P) => {
      P.button === 0 && (P.target.setPointerCapture(P.pointerId), b.current = m.getBoundingClientRect(), y.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", h.viewport && (h.viewport.style.scrollBehavior = "auto"), D(P));
    }),
    onPointerMove: X(e.onPointerMove, D),
    onPointerUp: X(e.onPointerUp, (P) => {
      const z = P.target;
      z.hasPointerCapture(P.pointerId) && z.releasePointerCapture(P.pointerId), document.body.style.webkitUserSelect = y.current, h.viewport && (h.viewport.style.scrollBehavior = ""), b.current = null;
    })
  })));
}), Lu = "ScrollAreaThumb", EL = /* @__PURE__ */ L((e, t) => {
  const { forceMount: n, ...r } = e, o = y0(Lu, e.__scopeScrollArea);
  return /* @__PURE__ */ $(ft, {
    present: n || o.hasThumb
  }, /* @__PURE__ */ $(PL, j({
    ref: t
  }, r)));
}), PL = /* @__PURE__ */ L((e, t) => {
  const { __scopeScrollArea: n, style: r, ...o } = e, a = on(Lu, n), s = y0(Lu, n), { onThumbPositionChange: i } = s, c = Ee(
    t,
    (f) => s.onThumbChange(f)
  ), l = q(), u = zc(() => {
    l.current && (l.current(), l.current = void 0);
  }, 100);
  return J(() => {
    const f = a.viewport;
    if (f) {
      const p = () => {
        if (u(), !l.current) {
          const h = kL(f, i);
          l.current = h, i();
        }
      };
      return i(), f.addEventListener("scroll", p), () => f.removeEventListener("scroll", p);
    }
  }, [
    a.viewport,
    u,
    i
  ]), /* @__PURE__ */ $(de.div, j({
    "data-state": s.hasThumb ? "visible" : "hidden"
  }, o, {
    ref: c,
    style: {
      width: "var(--radix-scroll-area-thumb-width)",
      height: "var(--radix-scroll-area-thumb-height)",
      ...r
    },
    onPointerDownCapture: X(e.onPointerDownCapture, (f) => {
      const h = f.target.getBoundingClientRect(), m = f.clientX - h.left, v = f.clientY - h.top;
      s.onThumbPointerDown({
        x: m,
        y: v
      });
    }),
    onPointerUp: X(e.onPointerUp, s.onThumbPointerUp)
  }));
}), w0 = "ScrollAreaCorner", OL = /* @__PURE__ */ L((e, t) => {
  const n = on(w0, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
  return n.type !== "scroll" && r ? /* @__PURE__ */ $(TL, j({}, e, {
    ref: t
  })) : null;
}), TL = /* @__PURE__ */ L((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = on(w0, n), [a, s] = Z(0), [i, c] = Z(0), l = !!(a && i);
  return zo(o.scrollbarX, () => {
    var u;
    const f = ((u = o.scrollbarX) === null || u === void 0 ? void 0 : u.offsetHeight) || 0;
    o.onCornerHeightChange(f), c(f);
  }), zo(o.scrollbarY, () => {
    var u;
    const f = ((u = o.scrollbarY) === null || u === void 0 ? void 0 : u.offsetWidth) || 0;
    o.onCornerWidthChange(f), s(f);
  }), l ? /* @__PURE__ */ $(de.div, j({}, r, {
    ref: t,
    style: {
      width: a,
      height: i,
      position: "absolute",
      right: o.dir === "ltr" ? 0 : void 0,
      left: o.dir === "rtl" ? 0 : void 0,
      bottom: 0,
      ...e.style
    }
  })) : null;
});
function Ui(e) {
  return e ? parseInt(e, 10) : 0;
}
function $0(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function Vc(e) {
  const t = $0(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function jL(e, t, n, r = "ltr") {
  const o = Vc(n), a = o / 2, s = t || a, i = o - s, c = n.scrollbar.paddingStart + s, l = n.scrollbar.size - n.scrollbar.paddingEnd - i, u = n.content - n.viewport, f = r === "ltr" ? [
    0,
    u
  ] : [
    u * -1,
    0
  ];
  return _0([
    c,
    l
  ], f)(e);
}
function ym(e, t, n = "ltr") {
  const r = Vc(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - o, s = t.content - t.viewport, i = a - r, c = n === "ltr" ? [
    0,
    s
  ] : [
    s * -1,
    0
  ], l = Wa(e, c);
  return _0([
    0,
    s
  ], [
    0,
    i
  ])(l);
}
function _0(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function C0(e, t) {
  return e > 0 && e < t;
}
const kL = (e, t = () => {
}) => {
  let n = {
    left: e.scrollLeft,
    top: e.scrollTop
  }, r = 0;
  return function o() {
    const a = {
      left: e.scrollLeft,
      top: e.scrollTop
    }, s = n.left !== a.left, i = n.top !== a.top;
    (s || i) && t(), n = a, r = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(r);
};
function zc(e, t) {
  const n = Je(e), r = q(0);
  return J(
    () => () => window.clearTimeout(r.current),
    []
  ), ve(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [
    n,
    t
  ]);
}
function zo(e, t) {
  const n = Je(t);
  St(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(n);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(r), o.unobserve(e);
      };
    }
  }, [
    e,
    n
  ]);
}
const S0 = yL, ML = wL, DL = OL, AL = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsxs(
  S0,
  {
    ref: r,
    className: M("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ d.jsx(ML, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ d.jsx(N0, {}),
      /* @__PURE__ */ d.jsx(DL, {})
    ]
  }
));
AL.displayName = S0.displayName;
const N0 = C.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ d.jsx(
  g0,
  {
    ref: r,
    orientation: t,
    className: M(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 border-t border-t-transparent p-[1px]",
      e
    ),
    ...n,
    children: /* @__PURE__ */ d.jsx(EL, { className: "relative flex-1 rounded-full bg-border" })
  }
));
N0.displayName = g0.displayName;
const kY = Os, MY = Mc, DY = mo, RL = Ts, E0 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  po,
  {
    className: M(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
E0.displayName = po.displayName;
const IL = Ko(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
), LL = C.forwardRef(({ side: e = "right", className: t, children: n, ...r }, o) => /* @__PURE__ */ d.jsxs(RL, { children: [
  /* @__PURE__ */ d.jsx(E0, {}),
  /* @__PURE__ */ d.jsxs(
    ho,
    {
      ref: o,
      className: M(IL({ side: e }), t),
      ...r,
      children: [
        n,
        /* @__PURE__ */ d.jsxs(mo, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ d.jsx(uc, { className: "h-4 w-4" }),
          /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
LL.displayName = ho.displayName;
const FL = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsx(
  "div",
  {
    className: M(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
FL.displayName = "SheetHeader";
const BL = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsx(
  "div",
  {
    className: M(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
BL.displayName = "SheetFooter";
const VL = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  oa,
  {
    ref: n,
    className: M("text-lg font-semibold text-foreground", e),
    ...t
  }
));
VL.displayName = oa.displayName;
const zL = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  aa,
  {
    ref: n,
    className: M("text-sm text-muted-foreground", e),
    ...t
  }
));
zL.displayName = aa.displayName;
const kf = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx("div", { className: "w-full overflow-auto", children: /* @__PURE__ */ d.jsx(
  "table",
  {
    ref: n,
    className: M("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
kf.displayName = "TableUI";
const P0 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx("thead", { ref: n, className: M("[&_tr]:border-b", e), ...t }));
P0.displayName = "TableHeader";
const O0 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  "tbody",
  {
    ref: n,
    className: M("[&_tr:last-child]:border-0", e),
    ...t
  }
));
O0.displayName = "TableBody";
const WL = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  "tfoot",
  {
    ref: n,
    className: M("bg-primary font-medium text-primary-foreground", e),
    ...t
  }
));
WL.displayName = "TableFooter";
const Wc = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  "tr",
  {
    ref: n,
    className: M(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      e
    ),
    ...t
  }
));
Wc.displayName = "TableRow";
const T0 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  "th",
  {
    ref: n,
    className: M(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      e
    ),
    ...t
  }
));
T0.displayName = "TableHead";
const Mf = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  "td",
  {
    ref: n,
    className: M("p-4 align-middle [&:has([role=checkbox])]:pr-0", e),
    ...t
  }
));
Mf.displayName = "TableCell";
const UL = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  "caption",
  {
    ref: n,
    className: M("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
UL.displayName = "TableCaption";
const HL = "AlertDialog", [KL, AY] = ut(HL, [
  hy
]), ir = hy(), GL = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = ir(t);
  return /* @__PURE__ */ $(Os, j({}, r, n, {
    modal: !0
  }));
}, YL = /* @__PURE__ */ L((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = ir(n);
  return /* @__PURE__ */ $(Mc, j({}, o, r, {
    ref: t
  }));
}), qL = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = ir(t);
  return /* @__PURE__ */ $(Ts, j({}, r, n));
}, ZL = /* @__PURE__ */ L((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = ir(n);
  return /* @__PURE__ */ $(po, j({}, o, r, {
    ref: t
  }));
}), j0 = "AlertDialogContent", [XL, QL] = KL(j0), JL = /* @__PURE__ */ L((e, t) => {
  const { __scopeAlertDialog: n, children: r, ...o } = e, a = ir(n), s = q(null), i = Ee(t, s), c = q(null);
  return /* @__PURE__ */ $(F8, {
    contentName: j0,
    titleName: eF,
    docsSlug: "alert-dialog"
  }, /* @__PURE__ */ $(XL, {
    scope: n,
    cancelRef: c
  }, /* @__PURE__ */ $(ho, j({
    role: "alertdialog"
  }, a, o, {
    ref: i,
    onOpenAutoFocus: X(o.onOpenAutoFocus, (l) => {
      var u;
      l.preventDefault(), (u = c.current) === null || u === void 0 || u.focus({
        preventScroll: !0
      });
    }),
    onPointerDownOutside: (l) => l.preventDefault(),
    onInteractOutside: (l) => l.preventDefault()
  }), /* @__PURE__ */ $(ld, null, r), !1)));
}), eF = "AlertDialogTitle", tF = /* @__PURE__ */ L((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = ir(n);
  return /* @__PURE__ */ $(oa, j({}, o, r, {
    ref: t
  }));
}), nF = /* @__PURE__ */ L((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = ir(n);
  return /* @__PURE__ */ $(aa, j({}, o, r, {
    ref: t
  }));
}), rF = /* @__PURE__ */ L((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = ir(n);
  return /* @__PURE__ */ $(mo, j({}, o, r, {
    ref: t
  }));
}), oF = "AlertDialogCancel", aF = /* @__PURE__ */ L((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, { cancelRef: o } = QL(oF, n), a = ir(n), s = Ee(t, o);
  return /* @__PURE__ */ $(mo, j({}, a, r, {
    ref: s
  }));
}), sF = GL, iF = YL, cF = qL, k0 = ZL, M0 = JL, D0 = rF, A0 = aF, R0 = tF, I0 = nF, RY = sF, IY = iF, lF = cF, L0 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  k0,
  {
    className: M(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
L0.displayName = k0.displayName;
const uF = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsxs(lF, { children: [
  /* @__PURE__ */ d.jsx(L0, {}),
  /* @__PURE__ */ d.jsx(
    M0,
    {
      ref: n,
      className: M(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...t
    }
  )
] }));
uF.displayName = M0.displayName;
const dF = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsx(
  "div",
  {
    className: M(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
dF.displayName = "AlertDialogHeader";
const fF = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsx(
  "div",
  {
    className: M(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
fF.displayName = "AlertDialogFooter";
const pF = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  R0,
  {
    ref: n,
    className: M("text-lg font-semibold", e),
    ...t
  }
));
pF.displayName = R0.displayName;
const hF = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  I0,
  {
    ref: n,
    className: M("text-sm text-muted-foreground", e),
    ...t
  }
));
hF.displayName = I0.displayName;
const mF = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  D0,
  {
    ref: n,
    className: M(Mo(), e),
    ...t
  }
));
mF.displayName = D0.displayName;
const vF = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  A0,
  {
    ref: n,
    className: M(
      Mo({ variant: "outline" }),
      "mt-2 sm:mt-0",
      e
    ),
    ...t
  }
));
vF.displayName = A0.displayName;
function Ot({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      className: M("animate-pulse rounded-md bg-muted", e),
      ...t
    }
  );
}
const F0 = "Collapsible", [gF, B0] = ut(F0), [bF, Df] = gF(F0), yF = /* @__PURE__ */ L((e, t) => {
  const { __scopeCollapsible: n, open: r, defaultOpen: o, disabled: a, onOpenChange: s, ...i } = e, [c = !1, l] = vt({
    prop: r,
    defaultProp: o,
    onChange: s
  });
  return /* @__PURE__ */ $(bF, {
    scope: n,
    disabled: a,
    contentId: bt(),
    open: c,
    onOpenToggle: ve(
      () => l(
        (u) => !u
      ),
      [
        l
      ]
    )
  }, /* @__PURE__ */ $(de.div, j({
    "data-state": Af(c),
    "data-disabled": a ? "" : void 0
  }, i, {
    ref: t
  })));
}), xF = "CollapsibleTrigger", V0 = /* @__PURE__ */ L((e, t) => {
  const { __scopeCollapsible: n, ...r } = e, o = Df(xF, n);
  return /* @__PURE__ */ $(de.button, j({
    type: "button",
    "aria-controls": o.contentId,
    "aria-expanded": o.open || !1,
    "data-state": Af(o.open),
    "data-disabled": o.disabled ? "" : void 0,
    disabled: o.disabled
  }, r, {
    ref: t,
    onClick: X(e.onClick, o.onOpenToggle)
  }));
}), z0 = "CollapsibleContent", W0 = /* @__PURE__ */ L((e, t) => {
  const { forceMount: n, ...r } = e, o = Df(z0, e.__scopeCollapsible);
  return /* @__PURE__ */ $(
    ft,
    {
      present: n || o.open
    },
    ({ present: a }) => /* @__PURE__ */ $(wF, j({}, r, {
      ref: t,
      present: a
    }))
  );
}), wF = /* @__PURE__ */ L((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...a } = e, s = Df(z0, n), [i, c] = Z(r), l = q(null), u = Ee(t, l), f = q(0), p = f.current, h = q(0), m = h.current, v = s.open || i, g = q(v), b = q();
  return J(() => {
    const y = requestAnimationFrame(
      () => g.current = !1
    );
    return () => cancelAnimationFrame(y);
  }, []), St(() => {
    const y = l.current;
    if (y) {
      b.current = b.current || {
        transitionDuration: y.style.transitionDuration,
        animationName: y.style.animationName
      }, y.style.transitionDuration = "0s", y.style.animationName = "none";
      const x = y.getBoundingClientRect();
      f.current = x.height, h.current = x.width, g.current || (y.style.transitionDuration = b.current.transitionDuration, y.style.animationName = b.current.animationName), c(r);
    }
  }, [
    s.open,
    r
  ]), /* @__PURE__ */ $(de.div, j({
    "data-state": Af(s.open),
    "data-disabled": s.disabled ? "" : void 0,
    id: s.contentId,
    hidden: !v
  }, a, {
    ref: u,
    style: {
      "--radix-collapsible-content-height": p ? `${p}px` : void 0,
      "--radix-collapsible-content-width": m ? `${m}px` : void 0,
      ...e.style
    }
  }), v && o);
});
function Af(e) {
  return e ? "open" : "closed";
}
const U0 = yF, $F = V0, _F = W0, Dr = "Accordion", CF = [
  "Home",
  "End",
  "ArrowDown",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight"
], [Rf, SF, NF] = Tr(Dr), [Uc, LY] = ut(Dr, [
  NF,
  B0
]), If = B0(), H0 = /* @__PURE__ */ I.forwardRef((e, t) => {
  const { type: n, ...r } = e, o = r, a = r;
  return /* @__PURE__ */ I.createElement(Rf.Provider, {
    scope: e.__scopeAccordion
  }, n === "multiple" ? /* @__PURE__ */ I.createElement(TF, j({}, a, {
    ref: t
  })) : /* @__PURE__ */ I.createElement(OF, j({}, o, {
    ref: t
  })));
});
H0.propTypes = {
  type(e) {
    const t = e.value || e.defaultValue;
    return e.type && ![
      "single",
      "multiple"
    ].includes(e.type) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.") : e.type === "multiple" && typeof t == "string" ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.") : e.type === "single" && Array.isArray(t) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.") : null;
  }
};
const [K0, EF] = Uc(Dr), [G0, PF] = Uc(Dr, {
  collapsible: !1
}), OF = /* @__PURE__ */ I.forwardRef((e, t) => {
  const { value: n, defaultValue: r, onValueChange: o = () => {
  }, collapsible: a = !1, ...s } = e, [i, c] = vt({
    prop: n,
    defaultProp: r,
    onChange: o
  });
  return /* @__PURE__ */ I.createElement(K0, {
    scope: e.__scopeAccordion,
    value: i ? [
      i
    ] : [],
    onItemOpen: c,
    onItemClose: I.useCallback(
      () => a && c(""),
      [
        a,
        c
      ]
    )
  }, /* @__PURE__ */ I.createElement(G0, {
    scope: e.__scopeAccordion,
    collapsible: a
  }, /* @__PURE__ */ I.createElement(Y0, j({}, s, {
    ref: t
  }))));
}), TF = /* @__PURE__ */ I.forwardRef((e, t) => {
  const { value: n, defaultValue: r, onValueChange: o = () => {
  }, ...a } = e, [s = [], i] = vt({
    prop: n,
    defaultProp: r,
    onChange: o
  }), c = I.useCallback(
    (u) => i(
      (f = []) => [
        ...f,
        u
      ]
    ),
    [
      i
    ]
  ), l = I.useCallback(
    (u) => i(
      (f = []) => f.filter(
        (p) => p !== u
      )
    ),
    [
      i
    ]
  );
  return /* @__PURE__ */ I.createElement(K0, {
    scope: e.__scopeAccordion,
    value: s,
    onItemOpen: c,
    onItemClose: l
  }, /* @__PURE__ */ I.createElement(G0, {
    scope: e.__scopeAccordion,
    collapsible: !0
  }, /* @__PURE__ */ I.createElement(Y0, j({}, a, {
    ref: t
  }))));
}), [jF, Hc] = Uc(Dr), Y0 = /* @__PURE__ */ I.forwardRef((e, t) => {
  const { __scopeAccordion: n, disabled: r, dir: o, orientation: a = "vertical", ...s } = e, i = I.useRef(null), c = Ee(i, t), l = SF(n), f = zn(o) === "ltr", p = X(e.onKeyDown, (h) => {
    var m;
    if (!CF.includes(h.key))
      return;
    const v = h.target, g = l().filter((P) => {
      var z;
      return !((z = P.ref.current) !== null && z !== void 0 && z.disabled);
    }), b = g.findIndex(
      (P) => P.ref.current === v
    ), y = g.length;
    if (b === -1)
      return;
    h.preventDefault();
    let x = b;
    const _ = 0, w = y - 1, N = () => {
      x = b + 1, x > w && (x = _);
    }, S = () => {
      x = b - 1, x < _ && (x = w);
    };
    switch (h.key) {
      case "Home":
        x = _;
        break;
      case "End":
        x = w;
        break;
      case "ArrowRight":
        a === "horizontal" && (f ? N() : S());
        break;
      case "ArrowDown":
        a === "vertical" && N();
        break;
      case "ArrowLeft":
        a === "horizontal" && (f ? S() : N());
        break;
      case "ArrowUp":
        a === "vertical" && S();
        break;
    }
    const D = x % y;
    (m = g[D].ref.current) === null || m === void 0 || m.focus();
  });
  return /* @__PURE__ */ I.createElement(jF, {
    scope: n,
    disabled: r,
    direction: o,
    orientation: a
  }, /* @__PURE__ */ I.createElement(Rf.Slot, {
    scope: n
  }, /* @__PURE__ */ I.createElement(de.div, j({}, s, {
    "data-orientation": a,
    ref: c,
    onKeyDown: r ? void 0 : p
  }))));
}), Fu = "AccordionItem", [kF, Lf] = Uc(Fu), MF = /* @__PURE__ */ I.forwardRef((e, t) => {
  const { __scopeAccordion: n, value: r, ...o } = e, a = Hc(Fu, n), s = EF(Fu, n), i = If(n), c = bt(), l = r && s.value.includes(r) || !1, u = a.disabled || e.disabled;
  return /* @__PURE__ */ I.createElement(kF, {
    scope: n,
    open: l,
    disabled: u,
    triggerId: c
  }, /* @__PURE__ */ I.createElement(U0, j({
    "data-orientation": a.orientation,
    "data-state": q0(l)
  }, i, o, {
    ref: t,
    disabled: u,
    open: l,
    onOpenChange: (f) => {
      f ? s.onItemOpen(r) : s.onItemClose(r);
    }
  })));
}), DF = "AccordionHeader", AF = /* @__PURE__ */ I.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = Hc(Dr, n), a = Lf(DF, n);
  return /* @__PURE__ */ I.createElement(de.h3, j({
    "data-orientation": o.orientation,
    "data-state": q0(a.open),
    "data-disabled": a.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), xm = "AccordionTrigger", RF = /* @__PURE__ */ I.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = Hc(Dr, n), a = Lf(xm, n), s = PF(xm, n), i = If(n);
  return /* @__PURE__ */ I.createElement(Rf.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ I.createElement($F, j({
    "aria-disabled": a.open && !s.collapsible || void 0,
    "data-orientation": o.orientation,
    id: a.triggerId
  }, i, r, {
    ref: t
  })));
}), IF = "AccordionContent", LF = /* @__PURE__ */ I.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = Hc(Dr, n), a = Lf(IF, n), s = If(n);
  return /* @__PURE__ */ I.createElement(_F, j({
    role: "region",
    "aria-labelledby": a.triggerId,
    "data-orientation": o.orientation
  }, s, r, {
    ref: t,
    style: {
      "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
      "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
      ...e.style
    }
  }));
});
function q0(e) {
  return e ? "open" : "closed";
}
const FF = H0, BF = MF, VF = AF, Z0 = RF, X0 = LF, FY = FF, zF = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  BF,
  {
    ref: n,
    className: M("border-b", e),
    ...t
  }
));
zF.displayName = "AccordionItem";
const WF = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsx(VF, { className: "flex", children: /* @__PURE__ */ d.jsxs(
  Z0,
  {
    ref: r,
    className: M(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ d.jsx(Ta, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
WF.displayName = Z0.displayName;
const UF = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsx(
  X0,
  {
    ref: r,
    className: M(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      e
    ),
    ...n,
    children: /* @__PURE__ */ d.jsx("div", { className: "pb-4 pt-0", children: t })
  }
));
UF.displayName = X0.displayName;
const BY = U0, VY = V0, zY = W0;
let Il;
const Q0 = "HoverCard", [J0, WY] = ut(Q0, [
  Wn
]), Ff = Wn(), [HF, Bf] = J0(Q0), KF = (e) => {
  const { __scopeHoverCard: t, children: n, open: r, defaultOpen: o, onOpenChange: a, openDelay: s = 700, closeDelay: i = 300 } = e, c = Ff(t), l = q(0), u = q(0), f = q(!1), p = q(!1), [h = !1, m] = vt({
    prop: r,
    defaultProp: o,
    onChange: a
  }), v = ve(() => {
    clearTimeout(u.current), l.current = window.setTimeout(
      () => m(!0),
      s
    );
  }, [
    s,
    m
  ]), g = ve(() => {
    clearTimeout(l.current), !f.current && !p.current && (u.current = window.setTimeout(
      () => m(!1),
      i
    ));
  }, [
    i,
    m
  ]), b = ve(
    () => m(!1),
    [
      m
    ]
  );
  return J(() => () => {
    clearTimeout(l.current), clearTimeout(u.current);
  }, []), /* @__PURE__ */ $(HF, {
    scope: t,
    open: h,
    onOpenChange: m,
    onOpen: v,
    onClose: g,
    onDismiss: b,
    hasSelectionRef: f,
    isPointerDownOnContentRef: p
  }, /* @__PURE__ */ $(na, c, n));
}, GF = "HoverCardTrigger", YF = /* @__PURE__ */ L((e, t) => {
  const { __scopeHoverCard: n, ...r } = e, o = Bf(GF, n), a = Ff(n);
  return /* @__PURE__ */ $(ws, j({
    asChild: !0
  }, a), /* @__PURE__ */ $(de.a, j({
    "data-state": o.open ? "open" : "closed"
  }, r, {
    ref: t,
    onPointerEnter: X(e.onPointerEnter, Hi(o.onOpen)),
    onPointerLeave: X(e.onPointerLeave, Hi(o.onClose)),
    onFocus: X(e.onFocus, o.onOpen),
    onBlur: X(e.onBlur, o.onClose),
    onTouchStart: X(
      e.onTouchStart,
      (s) => s.preventDefault()
    )
  })));
}), qF = "HoverCardPortal", [UY, ZF] = J0(qF, {
  forceMount: void 0
}), Bu = "HoverCardContent", XF = /* @__PURE__ */ L((e, t) => {
  const n = ZF(Bu, e.__scopeHoverCard), { forceMount: r = n.forceMount, ...o } = e, a = Bf(Bu, e.__scopeHoverCard);
  return /* @__PURE__ */ $(ft, {
    present: r || a.open
  }, /* @__PURE__ */ $(QF, j({
    "data-state": a.open ? "open" : "closed"
  }, o, {
    onPointerEnter: X(e.onPointerEnter, Hi(a.onOpen)),
    onPointerLeave: X(e.onPointerLeave, Hi(a.onClose)),
    ref: t
  })));
}), QF = /* @__PURE__ */ L((e, t) => {
  const { __scopeHoverCard: n, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: a, onInteractOutside: s, ...i } = e, c = Bf(Bu, n), l = Ff(n), u = q(null), f = Ee(t, u), [p, h] = Z(!1);
  return J(() => {
    if (p) {
      const m = document.body;
      return Il = m.style.userSelect || m.style.webkitUserSelect, m.style.userSelect = "none", m.style.webkitUserSelect = "none", () => {
        m.style.userSelect = Il, m.style.webkitUserSelect = Il;
      };
    }
  }, [
    p
  ]), J(() => {
    if (u.current) {
      const m = () => {
        h(!1), c.isPointerDownOnContentRef.current = !1, setTimeout(() => {
          var v;
          ((v = document.getSelection()) === null || v === void 0 ? void 0 : v.toString()) !== "" && (c.hasSelectionRef.current = !0);
        });
      };
      return document.addEventListener("pointerup", m), () => {
        document.removeEventListener("pointerup", m), c.hasSelectionRef.current = !1, c.isPointerDownOnContentRef.current = !1;
      };
    }
  }, [
    c.isPointerDownOnContentRef,
    c.hasSelectionRef
  ]), J(() => {
    u.current && JF(u.current).forEach(
      (v) => v.setAttribute("tabindex", "-1")
    );
  }), /* @__PURE__ */ $(co, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onInteractOutside: s,
    onEscapeKeyDown: r,
    onPointerDownOutside: o,
    onFocusOutside: X(a, (m) => {
      m.preventDefault();
    }),
    onDismiss: c.onDismiss
  }, /* @__PURE__ */ $($s, j({}, l, i, {
    onPointerDown: X(i.onPointerDown, (m) => {
      m.currentTarget.contains(m.target) && h(!0), c.hasSelectionRef.current = !1, c.isPointerDownOnContentRef.current = !0;
    }),
    ref: f,
    style: {
      ...i.style,
      userSelect: p ? "text" : void 0,
      // Safari requires prefix
      WebkitUserSelect: p ? "text" : void 0,
      "--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
      "--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
      "--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)"
    }
  })));
});
function Hi(e) {
  return (t) => t.pointerType === "touch" ? void 0 : e();
}
function JF(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
const eB = KF, tB = YF, ex = XF, HY = eB, KY = tB, nB = C.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ d.jsx(
  ex,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: M(
      "z-50 w-64 rounded-md border bg-card p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
));
nB.displayName = ex.displayName;
const GY = () => /* @__PURE__ */ d.jsx("span", { className: "loader-fade-dot" }), Vf = "Menubar", [Vu, rB, oB] = Tr(Vf), [tx, YY] = ut(Vf, [
  oB,
  jr
]), Ft = Cs(), nx = jr(), [aB, zf] = tx(Vf), sB = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, value: r, onValueChange: o, defaultValue: a, loop: s = !0, dir: i, ...c } = e, l = zn(i), u = nx(n), [f = "", p] = vt({
    prop: r,
    onChange: o,
    defaultProp: a
  }), [h, m] = Z(null);
  return /* @__PURE__ */ $(aB, {
    scope: n,
    value: f,
    onMenuOpen: ve((v) => {
      p(v), m(v);
    }, [
      p
    ]),
    onMenuClose: ve(
      () => p(""),
      [
        p
      ]
    ),
    onMenuToggle: ve((v) => {
      p(
        (g) => g ? "" : v
      ), m(v);
    }, [
      p
    ]),
    dir: l,
    loop: s
  }, /* @__PURE__ */ $(Vu.Provider, {
    scope: n
  }, /* @__PURE__ */ $(Vu.Slot, {
    scope: n
  }, /* @__PURE__ */ $(Sc, j({
    asChild: !0
  }, u, {
    orientation: "horizontal",
    loop: s,
    dir: l,
    currentTabStopId: h,
    onCurrentTabStopIdChange: m
  }), /* @__PURE__ */ $(de.div, j({
    role: "menubar"
  }, c, {
    ref: t
  }))))));
}), rx = "MenubarMenu", [iB, ox] = tx(rx), cB = (e) => {
  const { __scopeMenubar: t, value: n, ...r } = e, o = bt(), a = n || o || "LEGACY_REACT_AUTO_VALUE", s = zf(rx, t), i = Ft(t), c = q(null), l = q(!1), u = s.value === a;
  return J(() => {
    u || (l.current = !1);
  }, [
    u
  ]), /* @__PURE__ */ $(iB, {
    scope: t,
    value: a,
    triggerId: bt(),
    triggerRef: c,
    contentId: bt(),
    wasKeyboardTriggerOpenRef: l
  }, /* @__PURE__ */ $(ef, j({}, i, {
    open: u,
    onOpenChange: (f) => {
      f || s.onMenuClose();
    },
    modal: !1,
    dir: s.dir
  }, r)));
}, wm = "MenubarTrigger", lB = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, disabled: r = !1, ...o } = e, a = nx(n), s = Ft(n), i = zf(wm, n), c = ox(wm, n), l = q(null), u = Ee(t, l, c.triggerRef), [f, p] = Z(!1), h = i.value === c.value;
  return /* @__PURE__ */ $(Vu.ItemSlot, {
    scope: n,
    value: c.value,
    disabled: r
  }, /* @__PURE__ */ $(Nc, j({
    asChild: !0
  }, a, {
    focusable: !r,
    tabStopId: c.value
  }), /* @__PURE__ */ $(tf, j({
    asChild: !0
  }, s), /* @__PURE__ */ $(de.button, j({
    type: "button",
    role: "menuitem",
    id: c.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": h,
    "aria-controls": h ? c.contentId : void 0,
    "data-highlighted": f ? "" : void 0,
    "data-state": h ? "open" : "closed",
    "data-disabled": r ? "" : void 0,
    disabled: r
  }, o, {
    ref: u,
    onPointerDown: X(e.onPointerDown, (m) => {
      !r && m.button === 0 && m.ctrlKey === !1 && (i.onMenuOpen(c.value), h || m.preventDefault());
    }),
    onPointerEnter: X(e.onPointerEnter, () => {
      if (!!i.value && !h) {
        var v;
        i.onMenuOpen(c.value), (v = l.current) === null || v === void 0 || v.focus();
      }
    }),
    onKeyDown: X(e.onKeyDown, (m) => {
      r || ([
        "Enter",
        " "
      ].includes(m.key) && i.onMenuToggle(c.value), m.key === "ArrowDown" && i.onMenuOpen(c.value), [
        "Enter",
        " ",
        "ArrowDown"
      ].includes(m.key) && (c.wasKeyboardTriggerOpenRef.current = !0, m.preventDefault()));
    }),
    onFocus: X(
      e.onFocus,
      () => p(!0)
    ),
    onBlur: X(
      e.onBlur,
      () => p(!1)
    )
  })))));
}), uB = (e) => {
  const { __scopeMenubar: t, ...n } = e, r = Ft(t);
  return /* @__PURE__ */ $(nf, j({}, r, n));
}, $m = "MenubarContent", dB = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, align: r = "start", ...o } = e, a = Ft(n), s = zf($m, n), i = ox($m, n), c = rB(n), l = q(!1);
  return /* @__PURE__ */ $(rf, j({
    id: i.contentId,
    "aria-labelledby": i.triggerId,
    "data-radix-menubar-content": ""
  }, a, o, {
    ref: t,
    align: r,
    onCloseAutoFocus: X(e.onCloseAutoFocus, (u) => {
      if (!!!s.value && !l.current) {
        var p;
        (p = i.triggerRef.current) === null || p === void 0 || p.focus();
      }
      l.current = !1, u.preventDefault();
    }),
    onFocusOutside: X(e.onFocusOutside, (u) => {
      const f = u.target;
      c().some((h) => {
        var m;
        return (m = h.ref.current) === null || m === void 0 ? void 0 : m.contains(f);
      }) && u.preventDefault();
    }),
    onInteractOutside: X(e.onInteractOutside, () => {
      l.current = !0;
    }),
    onEntryFocus: (u) => {
      i.wasKeyboardTriggerOpenRef.current || u.preventDefault();
    },
    onKeyDown: X(e.onKeyDown, (u) => {
      if ([
        "ArrowRight",
        "ArrowLeft"
      ].includes(u.key)) {
        const f = u.target, p = f.hasAttribute("data-radix-menubar-subtrigger"), h = f.closest("[data-radix-menubar-content]") !== u.currentTarget, v = (s.dir === "rtl" ? "ArrowRight" : "ArrowLeft") === u.key;
        if (!v && p || h && v)
          return;
        let y = c().filter(
          (w) => !w.disabled
        ).map(
          (w) => w.value
        );
        v && y.reverse();
        const x = y.indexOf(i.value);
        y = s.loop ? _B(y, x + 1) : y.slice(x + 1);
        const [_] = y;
        _ && s.onMenuOpen(_);
      }
    }, {
      checkForDefaultPrevented: !1
    }),
    style: {
      ...e.style,
      "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
      "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
      "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
}), fB = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ $(of, j({}, o, r, {
    ref: t
  }));
}), pB = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ $(af, j({}, o, r, {
    ref: t
  }));
}), hB = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ $(sf, j({}, o, r, {
    ref: t
  }));
}), mB = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ $(cf, j({}, o, r, {
    ref: t
  }));
}), vB = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ $(lf, j({}, o, r, {
    ref: t
  }));
}), gB = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ $(uf, j({}, o, r, {
    ref: t
  }));
}), bB = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ $(df, j({}, o, r, {
    ref: t
  }));
}), yB = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ $(ff, j({}, o, r, {
    ref: t
  }));
}), xB = (e) => {
  const { __scopeMenubar: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, s = Ft(t), [i = !1, c] = vt({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ $(pf, j({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, wB = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ $(hf, j({
    "data-radix-menubar-subtrigger": ""
  }, o, r, {
    ref: t
  }));
}), $B = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ $(mf, j({}, o, {
    "data-radix-menubar-content": ""
  }, r, {
    ref: t,
    style: {
      ...e.style,
      "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
      "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
      "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
});
function _B(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const ax = sB, CB = cB, sx = lB, ix = uB, cx = dB, SB = fB, lx = pB, ux = hB, dx = mB, NB = vB, fx = gB, px = bB, hx = yB, EB = xB, mx = wB, vx = $B, qY = CB, ZY = SB, XY = ix, QY = EB, JY = NB, PB = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  ax,
  {
    ref: n,
    className: M(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      e
    ),
    ...t
  }
));
PB.displayName = ax.displayName;
const OB = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  sx,
  {
    ref: n,
    className: M(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      e
    ),
    ...t
  }
));
OB.displayName = sx.displayName;
const TB = C.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ d.jsxs(
  mx,
  {
    ref: o,
    className: M(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ d.jsx(Pr, { className: "ml-auto h-4 w-4" })
    ]
  }
));
TB.displayName = mx.displayName;
const jB = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  vx,
  {
    ref: n,
    className: M(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
jB.displayName = vx.displayName;
const kB = C.forwardRef(
  ({ className: e, align: t = "start", alignOffset: n = -4, sideOffset: r = 8, ...o }, a) => /* @__PURE__ */ d.jsx(ix, { children: /* @__PURE__ */ d.jsx(
    cx,
    {
      ref: a,
      align: t,
      alignOffset: n,
      sideOffset: r,
      className: M(
        "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...o
    }
  ) })
);
kB.displayName = cx.displayName;
const MB = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ d.jsx(
  ux,
  {
    ref: r,
    className: M(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
MB.displayName = ux.displayName;
const DB = C.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ d.jsxs(
  dx,
  {
    ref: o,
    className: M(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ d.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ d.jsx(px, { children: /* @__PURE__ */ d.jsx(rn, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
DB.displayName = dx.displayName;
const AB = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsxs(
  fx,
  {
    ref: r,
    className: M(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ d.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ d.jsx(px, { children: /* @__PURE__ */ d.jsx(lc, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
AB.displayName = fx.displayName;
const RB = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ d.jsx(
  lx,
  {
    ref: r,
    className: M(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
RB.displayName = lx.displayName;
const IB = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  hx,
  {
    ref: n,
    className: M("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
IB.displayName = hx.displayName;
const LB = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsx(
  "span",
  {
    className: M(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
LB.displayname = "MenubarShortcut";
const Ms = "NavigationMenu", [Wf, gx, FB] = Tr(Ms), [zu, BB, VB] = Tr(Ms), [Uf, eq] = ut(Ms, [
  FB,
  VB
]), [zB, En] = Uf(Ms), [WB, UB] = Uf(Ms), HB = /* @__PURE__ */ L((e, t) => {
  const { __scopeNavigationMenu: n, value: r, onValueChange: o, defaultValue: a, delayDuration: s = 200, skipDelayDuration: i = 300, orientation: c = "horizontal", dir: l, ...u } = e, [f, p] = Z(null), h = Ee(
    t,
    (P) => p(P)
  ), m = zn(l), v = q(0), g = q(0), b = q(0), [y, x] = Z(!0), [_ = "", w] = vt({
    prop: r,
    onChange: (P) => {
      const z = P !== "", K = i > 0;
      z ? (window.clearTimeout(b.current), K && x(!1)) : (window.clearTimeout(b.current), b.current = window.setTimeout(
        () => x(!0),
        i
      )), o == null || o(P);
    },
    defaultProp: a
  }), N = ve(() => {
    window.clearTimeout(g.current), g.current = window.setTimeout(
      () => w(""),
      150
    );
  }, [
    w
  ]), S = ve((P) => {
    window.clearTimeout(g.current), w(P);
  }, [
    w
  ]), D = ve((P) => {
    _ === P ? window.clearTimeout(g.current) : v.current = window.setTimeout(() => {
      window.clearTimeout(g.current), w(P);
    }, s);
  }, [
    _,
    w,
    s
  ]);
  return J(() => () => {
    window.clearTimeout(v.current), window.clearTimeout(g.current), window.clearTimeout(b.current);
  }, []), /* @__PURE__ */ $(KB, {
    scope: n,
    isRootMenu: !0,
    value: _,
    dir: m,
    orientation: c,
    rootNavigationMenu: f,
    onTriggerEnter: (P) => {
      window.clearTimeout(v.current), y ? D(P) : S(P);
    },
    onTriggerLeave: () => {
      window.clearTimeout(v.current), N();
    },
    onContentEnter: () => window.clearTimeout(g.current),
    onContentLeave: N,
    onItemSelect: (P) => {
      w(
        (z) => z === P ? "" : P
      );
    },
    onItemDismiss: () => w("")
  }, /* @__PURE__ */ $(de.nav, j({
    "aria-label": "Main",
    "data-orientation": c,
    dir: m
  }, u, {
    ref: h
  })));
}), KB = (e) => {
  const { scope: t, isRootMenu: n, rootNavigationMenu: r, dir: o, orientation: a, children: s, value: i, onItemSelect: c, onItemDismiss: l, onTriggerEnter: u, onTriggerLeave: f, onContentEnter: p, onContentLeave: h } = e, [m, v] = Z(null), [g, b] = Z(/* @__PURE__ */ new Map()), [y, x] = Z(null);
  return /* @__PURE__ */ $(zB, {
    scope: t,
    isRootMenu: n,
    rootNavigationMenu: r,
    value: i,
    previousValue: ia(i),
    baseId: bt(),
    dir: o,
    orientation: a,
    viewport: m,
    onViewportChange: v,
    indicatorTrack: y,
    onIndicatorTrackChange: x,
    onTriggerEnter: Je(u),
    onTriggerLeave: Je(f),
    onContentEnter: Je(p),
    onContentLeave: Je(h),
    onItemSelect: Je(c),
    onItemDismiss: Je(l),
    onViewportContentChange: ve((_, w) => {
      b((N) => (N.set(_, w), new Map(N)));
    }, []),
    onViewportContentRemove: ve((_) => {
      b((w) => w.has(_) ? (w.delete(_), new Map(w)) : w);
    }, [])
  }, /* @__PURE__ */ $(Wf.Provider, {
    scope: t
  }, /* @__PURE__ */ $(WB, {
    scope: t,
    items: g
  }, s)));
}, GB = "NavigationMenuList", YB = /* @__PURE__ */ L((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = En(GB, n), a = /* @__PURE__ */ $(de.ul, j({
    "data-orientation": o.orientation
  }, r, {
    ref: t
  }));
  return /* @__PURE__ */ $(de.div, {
    style: {
      position: "relative"
    },
    ref: o.onIndicatorTrackChange
  }, /* @__PURE__ */ $(Wf.Slot, {
    scope: n
  }, o.isRootMenu ? /* @__PURE__ */ $($x, {
    asChild: !0
  }, a) : a));
}), qB = "NavigationMenuItem", [ZB, bx] = Uf(qB), XB = /* @__PURE__ */ L((e, t) => {
  const { __scopeNavigationMenu: n, value: r, ...o } = e, a = bt(), s = r || a || "LEGACY_REACT_AUTO_VALUE", i = q(null), c = q(null), l = q(null), u = q(() => {
  }), f = q(!1), p = ve((m = "start") => {
    if (i.current) {
      u.current();
      const v = Wu(i.current);
      v.length && Hf(m === "start" ? v : v.reverse());
    }
  }, []), h = ve(() => {
    if (i.current) {
      const m = Wu(i.current);
      m.length && (u.current = cV(m));
    }
  }, []);
  return /* @__PURE__ */ $(ZB, {
    scope: n,
    value: s,
    triggerRef: c,
    contentRef: i,
    focusProxyRef: l,
    wasEscapeCloseRef: f,
    onEntryKeyDown: p,
    onFocusProxyEnter: p,
    onRootContentClose: h,
    onContentFocusOutside: h
  }, /* @__PURE__ */ $(de.li, j({}, o, {
    ref: t
  })));
}), _m = "NavigationMenuTrigger", QB = /* @__PURE__ */ L((e, t) => {
  const { __scopeNavigationMenu: n, disabled: r, ...o } = e, a = En(_m, e.__scopeNavigationMenu), s = bx(_m, e.__scopeNavigationMenu), i = q(null), c = Ee(i, s.triggerRef, t), l = Cx(a.baseId, s.value), u = Sx(a.baseId, s.value), f = q(!1), p = q(!1), h = s.value === a.value;
  return /* @__PURE__ */ $(vn, null, /* @__PURE__ */ $(Wf.ItemSlot, {
    scope: n,
    value: s.value
  }, /* @__PURE__ */ $(_x, {
    asChild: !0
  }, /* @__PURE__ */ $(de.button, j({
    id: l,
    disabled: r,
    "data-disabled": r ? "" : void 0,
    "data-state": Kf(h),
    "aria-expanded": h,
    "aria-controls": u
  }, o, {
    ref: c,
    onPointerEnter: X(e.onPointerEnter, () => {
      p.current = !1, s.wasEscapeCloseRef.current = !1;
    }),
    onPointerMove: X(e.onPointerMove, Ki(() => {
      r || p.current || s.wasEscapeCloseRef.current || f.current || (a.onTriggerEnter(s.value), f.current = !0);
    })),
    onPointerLeave: X(e.onPointerLeave, Ki(() => {
      r || (a.onTriggerLeave(), f.current = !1);
    })),
    onClick: X(e.onClick, () => {
      a.onItemSelect(s.value), p.current = h;
    }),
    onKeyDown: X(e.onKeyDown, (m) => {
      const g = {
        horizontal: "ArrowDown",
        vertical: a.dir === "rtl" ? "ArrowLeft" : "ArrowRight"
      }[a.orientation];
      h && m.key === g && (s.onEntryKeyDown(), m.preventDefault());
    })
  })))), h && /* @__PURE__ */ $(vn, null, /* @__PURE__ */ $(Oy, {
    "aria-hidden": !0,
    tabIndex: 0,
    ref: s.focusProxyRef,
    onFocus: (m) => {
      const v = s.contentRef.current, g = m.relatedTarget, b = g === i.current, y = v == null ? void 0 : v.contains(g);
      (b || !y) && s.onFocusProxyEnter(b ? "start" : "end");
    }
  }), a.viewport && /* @__PURE__ */ $("span", {
    "aria-owns": u
  })));
}), Cm = "navigationMenu.linkSelect", JB = /* @__PURE__ */ L((e, t) => {
  const { __scopeNavigationMenu: n, active: r, onSelect: o, ...a } = e;
  return /* @__PURE__ */ $(_x, {
    asChild: !0
  }, /* @__PURE__ */ $(de.a, j({
    "data-active": r ? "" : void 0,
    "aria-current": r ? "page" : void 0
  }, a, {
    ref: t,
    onClick: X(e.onClick, (s) => {
      const i = s.target, c = new CustomEvent(Cm, {
        bubbles: !0,
        cancelable: !0
      });
      if (i.addEventListener(
        Cm,
        (l) => o == null ? void 0 : o(l),
        {
          once: !0
        }
      ), $i(i, c), !c.defaultPrevented && !s.metaKey) {
        const l = new CustomEvent(mi, {
          bubbles: !0,
          cancelable: !0
        });
        $i(i, l);
      }
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), yx = "NavigationMenuIndicator", eV = /* @__PURE__ */ L((e, t) => {
  const { forceMount: n, ...r } = e, o = En(yx, e.__scopeNavigationMenu), a = !!o.value;
  return o.indicatorTrack ? /* @__PURE__ */ sv.createPortal(/* @__PURE__ */ $(ft, {
    present: n || a
  }, /* @__PURE__ */ $(tV, j({}, r, {
    ref: t
  }))), o.indicatorTrack) : null;
}), tV = /* @__PURE__ */ L((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = En(yx, n), a = gx(n), [s, i] = Z(null), [c, l] = Z(null), u = o.orientation === "horizontal", f = !!o.value;
  J(() => {
    var h;
    const v = (h = a().find(
      (g) => g.value === o.value
    )) === null || h === void 0 ? void 0 : h.ref.current;
    v && i(v);
  }, [
    a,
    o.value
  ]);
  const p = () => {
    s && l({
      size: u ? s.offsetWidth : s.offsetHeight,
      offset: u ? s.offsetLeft : s.offsetTop
    });
  };
  return Uu(s, p), Uu(o.indicatorTrack, p), c ? /* @__PURE__ */ $(de.div, j({
    "aria-hidden": !0,
    "data-state": f ? "visible" : "hidden",
    "data-orientation": o.orientation
  }, r, {
    ref: t,
    style: {
      position: "absolute",
      ...u ? {
        left: 0,
        width: c.size + "px",
        transform: `translateX(${c.offset}px)`
      } : {
        top: 0,
        height: c.size + "px",
        transform: `translateY(${c.offset}px)`
      },
      ...r.style
    }
  })) : null;
}), Ka = "NavigationMenuContent", nV = /* @__PURE__ */ L((e, t) => {
  const { forceMount: n, ...r } = e, o = En(Ka, e.__scopeNavigationMenu), a = bx(Ka, e.__scopeNavigationMenu), s = Ee(a.contentRef, t), i = a.value === o.value, c = {
    value: a.value,
    triggerRef: a.triggerRef,
    focusProxyRef: a.focusProxyRef,
    wasEscapeCloseRef: a.wasEscapeCloseRef,
    onContentFocusOutside: a.onContentFocusOutside,
    onRootContentClose: a.onRootContentClose,
    ...r
  };
  return o.viewport ? /* @__PURE__ */ $(rV, j({
    forceMount: n
  }, c, {
    ref: s
  })) : /* @__PURE__ */ $(ft, {
    present: n || i
  }, /* @__PURE__ */ $(xx, j({
    "data-state": Kf(i)
  }, c, {
    ref: s,
    onPointerEnter: X(e.onPointerEnter, o.onContentEnter),
    onPointerLeave: X(e.onPointerLeave, Ki(o.onContentLeave)),
    style: {
      // Prevent interaction when animating out
      pointerEvents: !i && o.isRootMenu ? "none" : void 0,
      ...c.style
    }
  })));
}), rV = /* @__PURE__ */ L((e, t) => {
  const n = En(Ka, e.__scopeNavigationMenu), { onViewportContentChange: r, onViewportContentRemove: o } = n;
  return St(() => {
    r(e.value, {
      ref: t,
      ...e
    });
  }, [
    e,
    t,
    r
  ]), St(() => () => o(e.value), [
    e.value,
    o
  ]), null;
}), mi = "navigationMenu.rootContentDismiss", xx = /* @__PURE__ */ L((e, t) => {
  const { __scopeNavigationMenu: n, value: r, triggerRef: o, focusProxyRef: a, wasEscapeCloseRef: s, onRootContentClose: i, onContentFocusOutside: c, ...l } = e, u = En(Ka, n), f = q(null), p = Ee(f, t), h = Cx(u.baseId, r), m = Sx(u.baseId, r), v = gx(n), g = q(null), { onItemDismiss: b } = u;
  J(() => {
    const x = f.current;
    if (u.isRootMenu && x) {
      const _ = () => {
        var w;
        b(), i(), x.contains(document.activeElement) && ((w = o.current) === null || w === void 0 || w.focus());
      };
      return x.addEventListener(mi, _), () => x.removeEventListener(mi, _);
    }
  }, [
    u.isRootMenu,
    e.value,
    o,
    b,
    i
  ]);
  const y = Ut(() => {
    const _ = v().map(
      (z) => z.value
    );
    u.dir === "rtl" && _.reverse();
    const w = _.indexOf(u.value), N = _.indexOf(u.previousValue), S = r === u.value, D = N === _.indexOf(r);
    if (!S && !D)
      return g.current;
    const P = (() => {
      if (w !== N) {
        if (S && N !== -1)
          return w > N ? "from-end" : "from-start";
        if (D && w !== -1)
          return w > N ? "to-start" : "to-end";
      }
      return null;
    })();
    return g.current = P, P;
  }, [
    u.previousValue,
    u.value,
    u.dir,
    v,
    r
  ]);
  return /* @__PURE__ */ $($x, {
    asChild: !0
  }, /* @__PURE__ */ $(co, j({
    id: m,
    "aria-labelledby": h,
    "data-motion": y,
    "data-orientation": u.orientation
  }, l, {
    ref: p,
    onDismiss: () => {
      var x;
      const _ = new Event(mi, {
        bubbles: !0,
        cancelable: !0
      });
      (x = f.current) === null || x === void 0 || x.dispatchEvent(_);
    },
    onFocusOutside: X(e.onFocusOutside, (x) => {
      var _;
      c();
      const w = x.target;
      (_ = u.rootNavigationMenu) !== null && _ !== void 0 && _.contains(w) && x.preventDefault();
    }),
    onPointerDownOutside: X(e.onPointerDownOutside, (x) => {
      var _;
      const w = x.target, N = v().some((D) => {
        var P;
        return (P = D.ref.current) === null || P === void 0 ? void 0 : P.contains(w);
      }), S = u.isRootMenu && ((_ = u.viewport) === null || _ === void 0 ? void 0 : _.contains(w));
      (N || S || !u.isRootMenu) && x.preventDefault();
    }),
    onKeyDown: X(e.onKeyDown, (x) => {
      const _ = x.altKey || x.ctrlKey || x.metaKey;
      if (x.key === "Tab" && !_) {
        const S = Wu(x.currentTarget), D = document.activeElement, P = S.findIndex(
          (R) => R === D
        ), K = x.shiftKey ? S.slice(0, P).reverse() : S.slice(P + 1, S.length);
        if (Hf(K))
          x.preventDefault();
        else {
          var N;
          (N = a.current) === null || N === void 0 || N.focus();
        }
      }
    }),
    onEscapeKeyDown: X(e.onEscapeKeyDown, (x) => {
      s.current = !0;
    })
  })));
}), wx = "NavigationMenuViewport", oV = /* @__PURE__ */ L((e, t) => {
  const { forceMount: n, ...r } = e, a = !!En(wx, e.__scopeNavigationMenu).value;
  return /* @__PURE__ */ $(ft, {
    present: n || a
  }, /* @__PURE__ */ $(aV, j({}, r, {
    ref: t
  })));
}), aV = /* @__PURE__ */ L((e, t) => {
  const { __scopeNavigationMenu: n, children: r, ...o } = e, a = En(wx, n), s = Ee(t, a.onViewportChange), i = UB(Ka, e.__scopeNavigationMenu), [c, l] = Z(null), [u, f] = Z(null), p = c ? (c == null ? void 0 : c.width) + "px" : void 0, h = c ? (c == null ? void 0 : c.height) + "px" : void 0, m = !!a.value, v = m ? a.value : a.previousValue;
  return Uu(u, () => {
    u && l({
      width: u.offsetWidth,
      height: u.offsetHeight
    });
  }), /* @__PURE__ */ $(de.div, j({
    "data-state": Kf(m),
    "data-orientation": a.orientation
  }, o, {
    ref: s,
    style: {
      // Prevent interaction when animating out
      pointerEvents: !m && a.isRootMenu ? "none" : void 0,
      "--radix-navigation-menu-viewport-width": p,
      "--radix-navigation-menu-viewport-height": h,
      ...o.style
    },
    onPointerEnter: X(e.onPointerEnter, a.onContentEnter),
    onPointerLeave: X(e.onPointerLeave, Ki(a.onContentLeave))
  }), Array.from(i.items).map(([b, { ref: y, forceMount: x, ..._ }]) => {
    const w = v === b;
    return /* @__PURE__ */ $(ft, {
      key: b,
      present: x || w
    }, /* @__PURE__ */ $(xx, j({}, _, {
      ref: fs(y, (N) => {
        w && N && f(N);
      })
    })));
  }));
}), sV = "FocusGroup", $x = /* @__PURE__ */ L((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = En(sV, n);
  return /* @__PURE__ */ $(zu.Provider, {
    scope: n
  }, /* @__PURE__ */ $(zu.Slot, {
    scope: n
  }, /* @__PURE__ */ $(de.div, j({
    dir: o.dir
  }, r, {
    ref: t
  }))));
}), Sm = [
  "ArrowRight",
  "ArrowLeft",
  "ArrowUp",
  "ArrowDown"
], iV = "FocusGroupItem", _x = /* @__PURE__ */ L((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = BB(n), a = En(iV, n);
  return /* @__PURE__ */ $(zu.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ $(de.button, j({}, r, {
    ref: t,
    onKeyDown: X(e.onKeyDown, (s) => {
      if ([
        "Home",
        "End",
        ...Sm
      ].includes(s.key)) {
        let c = o().map(
          (f) => f.ref.current
        );
        if ([
          a.dir === "rtl" ? "ArrowRight" : "ArrowLeft",
          "ArrowUp",
          "End"
        ].includes(s.key) && c.reverse(), Sm.includes(s.key)) {
          const f = c.indexOf(s.currentTarget);
          c = c.slice(f + 1);
        }
        setTimeout(
          () => Hf(c)
        ), s.preventDefault();
      }
    })
  })));
});
function Wu(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
function Hf(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
function cV(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const n = t.dataset.tabindex;
      t.setAttribute("tabindex", n);
    });
  };
}
function Uu(e, t) {
  const n = Je(t);
  St(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(n);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(r), o.unobserve(e);
      };
    }
  }, [
    e,
    n
  ]);
}
function Kf(e) {
  return e ? "open" : "closed";
}
function Cx(e, t) {
  return `${e}-trigger-${t}`;
}
function Sx(e, t) {
  return `${e}-content-${t}`;
}
function Ki(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const Nx = HB, Ex = YB, lV = XB, Px = QB, uV = JB, Ox = eV, Tx = nV, jx = oV, dV = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsxs(
  Nx,
  {
    ref: r,
    className: M(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ d.jsx(kx, {})
    ]
  }
));
dV.displayName = Nx.displayName;
const fV = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Ex,
  {
    ref: n,
    className: M(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      e
    ),
    ...t
  }
));
fV.displayName = Ex.displayName;
const tq = lV, pV = Ko(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
), hV = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsxs(
  Px,
  {
    ref: r,
    className: M(pV(), "group", e),
    ...n,
    children: [
      t,
      " ",
      /* @__PURE__ */ d.jsx(
        Ta,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
hV.displayName = Px.displayName;
const mV = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Tx,
  {
    ref: n,
    className: M(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      e
    ),
    ...t
  }
));
mV.displayName = Tx.displayName;
const nq = uV, kx = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx("div", { className: M("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ d.jsx(
  jx,
  {
    className: M(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-card text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      e
    ),
    ref: n,
    ...t
  }
) }));
kx.displayName = jx.displayName;
const vV = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Ox,
  {
    ref: n,
    className: M(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      e
    ),
    ...t,
    children: /* @__PURE__ */ d.jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
vV.displayName = Ox.displayName;
const Mx = "Progress", Kc = 100, [gV, rq] = ut(Mx), [bV, yV] = gV(Mx), Dx = /* @__PURE__ */ L((e, t) => {
  const { __scopeProgress: n, value: r, max: o, getValueLabel: a = $V, ...s } = e, i = Hu(o) ? o : Kc, c = Rx(r, i) ? r : null, l = Gi(c) ? a(c, i) : void 0;
  return /* @__PURE__ */ $(bV, {
    scope: n,
    value: c,
    max: i
  }, /* @__PURE__ */ $(de.div, j({
    "aria-valuemax": i,
    "aria-valuemin": 0,
    "aria-valuenow": Gi(c) ? c : void 0,
    "aria-valuetext": l,
    role: "progressbar",
    "data-state": Ax(c, i),
    "data-value": c ?? void 0,
    "data-max": i
  }, s, {
    ref: t
  })));
});
Dx.propTypes = {
  max(e, t, n) {
    const r = e[t], o = String(r);
    return r && !Hu(r) ? new Error(_V(o, n)) : null;
  },
  value(e, t, n) {
    const r = e[t], o = String(r), a = Hu(e.max) ? e.max : Kc;
    return r != null && !Rx(r, a) ? new Error(CV(o, n)) : null;
  }
};
const xV = "ProgressIndicator", wV = /* @__PURE__ */ L((e, t) => {
  var n;
  const { __scopeProgress: r, ...o } = e, a = yV(xV, r);
  return /* @__PURE__ */ $(de.div, j({
    "data-state": Ax(a.value, a.max),
    "data-value": (n = a.value) !== null && n !== void 0 ? n : void 0,
    "data-max": a.max
  }, o, {
    ref: t
  }));
});
function $V(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function Ax(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function Gi(e) {
  return typeof e == "number";
}
function Hu(e) {
  return Gi(e) && !isNaN(e) && e > 0;
}
function Rx(e, t) {
  return Gi(e) && !isNaN(e) && e <= t && e >= 0;
}
function _V(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Kc}\`.`;
}
function CV(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Kc} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
const Ix = Dx, SV = wV, NV = C.forwardRef(({ className: e, value: t, ...n }, r) => /* @__PURE__ */ d.jsx(
  Ix,
  {
    ref: r,
    className: M(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      e
    ),
    ...n,
    children: /* @__PURE__ */ d.jsx(
      SV,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (t || 0)}%)` }
      }
    )
  }
));
NV.displayName = Ix.displayName;
const Lx = "Radio", [EV, Fx] = ut(Lx), [PV, OV] = EV(Lx), TV = /* @__PURE__ */ L((e, t) => {
  const { __scopeRadio: n, name: r, checked: o = !1, required: a, disabled: s, value: i = "on", onCheck: c, ...l } = e, [u, f] = Z(null), p = Ee(
    t,
    (v) => f(v)
  ), h = q(!1), m = u ? !!u.closest("form") : !0;
  return /* @__PURE__ */ $(PV, {
    scope: n,
    checked: o,
    disabled: s
  }, /* @__PURE__ */ $(de.button, j({
    type: "button",
    role: "radio",
    "aria-checked": o,
    "data-state": Bx(o),
    "data-disabled": s ? "" : void 0,
    disabled: s,
    value: i
  }, l, {
    ref: p,
    onClick: X(e.onClick, (v) => {
      o || c == null || c(), m && (h.current = v.isPropagationStopped(), h.current || v.stopPropagation());
    })
  })), m && /* @__PURE__ */ $(MV, {
    control: u,
    bubbles: !h.current,
    name: r,
    value: i,
    checked: o,
    required: a,
    disabled: s,
    style: {
      transform: "translateX(-100%)"
    }
  }));
}), jV = "RadioIndicator", kV = /* @__PURE__ */ L((e, t) => {
  const { __scopeRadio: n, forceMount: r, ...o } = e, a = OV(jV, n);
  return /* @__PURE__ */ $(ft, {
    present: r || a.checked
  }, /* @__PURE__ */ $(de.span, j({
    "data-state": Bx(a.checked),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: t
  })));
}), MV = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = q(null), s = ia(n), i = xs(t);
  return J(() => {
    const c = a.current, l = window.HTMLInputElement.prototype, f = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (s !== n && f) {
      const p = new Event("click", {
        bubbles: r
      });
      f.call(c, n), c.dispatchEvent(p);
    }
  }, [
    s,
    n,
    r
  ]), /* @__PURE__ */ $("input", j({
    type: "radio",
    "aria-hidden": !0,
    defaultChecked: n
  }, o, {
    tabIndex: -1,
    ref: a,
    style: {
      ...e.style,
      ...i,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  }));
};
function Bx(e) {
  return e ? "checked" : "unchecked";
}
const DV = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], Vx = "RadioGroup", [AV, oq] = ut(Vx, [
  jr,
  Fx
]), zx = jr(), Wx = Fx(), [RV, IV] = AV(Vx), LV = /* @__PURE__ */ L((e, t) => {
  const { __scopeRadioGroup: n, name: r, defaultValue: o, value: a, required: s = !1, disabled: i = !1, orientation: c, dir: l, loop: u = !0, onValueChange: f, ...p } = e, h = zx(n), m = zn(l), [v, g] = vt({
    prop: a,
    defaultProp: o,
    onChange: f
  });
  return /* @__PURE__ */ $(RV, {
    scope: n,
    name: r,
    required: s,
    disabled: i,
    value: v,
    onValueChange: g
  }, /* @__PURE__ */ $(Sc, j({
    asChild: !0
  }, h, {
    orientation: c,
    dir: m,
    loop: u
  }), /* @__PURE__ */ $(de.div, j({
    role: "radiogroup",
    "aria-required": s,
    "aria-orientation": c,
    "data-disabled": i ? "" : void 0,
    dir: m
  }, p, {
    ref: t
  }))));
}), FV = "RadioGroupItem", BV = /* @__PURE__ */ L((e, t) => {
  const { __scopeRadioGroup: n, disabled: r, ...o } = e, a = IV(FV, n), s = a.disabled || r, i = zx(n), c = Wx(n), l = q(null), u = Ee(t, l), f = a.value === o.value, p = q(!1);
  return J(() => {
    const h = (v) => {
      DV.includes(v.key) && (p.current = !0);
    }, m = () => p.current = !1;
    return document.addEventListener("keydown", h), document.addEventListener("keyup", m), () => {
      document.removeEventListener("keydown", h), document.removeEventListener("keyup", m);
    };
  }, []), /* @__PURE__ */ $(Nc, j({
    asChild: !0
  }, i, {
    focusable: !s,
    active: f
  }), /* @__PURE__ */ $(TV, j({
    disabled: s,
    required: a.required,
    checked: f
  }, c, o, {
    name: a.name,
    ref: u,
    onCheck: () => a.onValueChange(o.value),
    onKeyDown: X((h) => {
      h.key === "Enter" && h.preventDefault();
    }),
    onFocus: X(o.onFocus, () => {
      var h;
      p.current && ((h = l.current) === null || h === void 0 || h.click());
    })
  })));
}), VV = /* @__PURE__ */ L((e, t) => {
  const { __scopeRadioGroup: n, ...r } = e, o = Wx(n);
  return /* @__PURE__ */ $(kV, j({}, o, r, {
    ref: t
  }));
}), Ux = LV, Hx = BV, zV = VV, WV = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Ux,
  {
    className: M("grid gap-2", e),
    ...t,
    ref: n
  }
));
WV.displayName = Ux.displayName;
const UV = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsx(
  Hx,
  {
    ref: r,
    className: M(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: /* @__PURE__ */ d.jsx(zV, { className: "flex items-center justify-center", children: /* @__PURE__ */ d.jsx(lc, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
UV.displayName = Hx.displayName;
const Kx = [
  "PageUp",
  "PageDown"
], Gx = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], Yx = {
  "from-left": [
    "Home",
    "PageDown",
    "ArrowDown",
    "ArrowLeft"
  ],
  "from-right": [
    "Home",
    "PageDown",
    "ArrowDown",
    "ArrowRight"
  ],
  "from-bottom": [
    "Home",
    "PageDown",
    "ArrowDown",
    "ArrowLeft"
  ],
  "from-top": [
    "Home",
    "PageDown",
    "ArrowUp",
    "ArrowLeft"
  ]
}, Ds = "Slider", [Ku, HV, KV] = Tr(Ds), [qx, aq] = ut(Ds, [
  KV
]), [GV, Gc] = qx(Ds), YV = /* @__PURE__ */ L((e, t) => {
  const { name: n, min: r = 0, max: o = 100, step: a = 1, orientation: s = "horizontal", disabled: i = !1, minStepsBetweenThumbs: c = 0, defaultValue: l = [
    r
  ], value: u, onValueChange: f = () => {
  }, onValueCommit: p = () => {
  }, inverted: h = !1, ...m } = e, [v, g] = Z(null), b = Ee(
    t,
    (V) => g(V)
  ), y = q(/* @__PURE__ */ new Set()), x = q(0), _ = s === "horizontal", w = v ? !!v.closest("form") : !0, N = _ ? qV : ZV, [S = [], D] = vt({
    prop: u,
    defaultProp: l,
    onChange: (V) => {
      var E;
      (E = [
        ...y.current
      ][x.current]) === null || E === void 0 || E.focus(), f(V);
    }
  }), P = q(S);
  function z(V) {
    const E = az(S, V);
    W(V, E);
  }
  function K(V) {
    W(V, x.current);
  }
  function R() {
    const V = P.current[x.current];
    S[x.current] !== V && p(S);
  }
  function W(V, E, { commit: B } = {
    commit: !1
  }) {
    const T = lz(a), U = uz(Math.round((V - r) / a) * a + r, T), G = Wa(U, [
      r,
      o
    ]);
    D((Q = []) => {
      const oe = rz(Q, G, E);
      if (cz(oe, c * a)) {
        x.current = oe.indexOf(G);
        const H = String(oe) !== String(Q);
        return H && B && p(oe), H ? oe : Q;
      } else
        return Q;
    });
  }
  return /* @__PURE__ */ $(GV, {
    scope: e.__scopeSlider,
    disabled: i,
    min: r,
    max: o,
    valueIndexToChangeRef: x,
    thumbs: y.current,
    values: S,
    orientation: s
  }, /* @__PURE__ */ $(Ku.Provider, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ $(Ku.Slot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ $(N, j({
    "aria-disabled": i,
    "data-disabled": i ? "" : void 0
  }, m, {
    ref: b,
    onPointerDown: X(m.onPointerDown, () => {
      i || (P.current = S);
    }),
    min: r,
    max: o,
    inverted: h,
    onSlideStart: i ? void 0 : z,
    onSlideMove: i ? void 0 : K,
    onSlideEnd: i ? void 0 : R,
    onHomeKeyDown: () => !i && W(r, 0, {
      commit: !0
    }),
    onEndKeyDown: () => !i && W(o, S.length - 1, {
      commit: !0
    }),
    onStepKeyDown: ({ event: V, direction: E }) => {
      if (!i) {
        const U = Kx.includes(V.key) || V.shiftKey && Gx.includes(V.key) ? 10 : 1, G = x.current, Q = S[G], oe = a * U * E;
        W(Q + oe, G, {
          commit: !0
        });
      }
    }
  })))), w && S.map(
    (V, E) => /* @__PURE__ */ $(nz, {
      key: E,
      name: n ? n + (S.length > 1 ? "[]" : "") : void 0,
      value: V
    })
  ));
}), [Zx, Xx] = qx(Ds, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), qV = /* @__PURE__ */ L((e, t) => {
  const { min: n, max: r, dir: o, inverted: a, onSlideStart: s, onSlideMove: i, onSlideEnd: c, onStepKeyDown: l, ...u } = e, [f, p] = Z(null), h = Ee(
    t,
    (x) => p(x)
  ), m = q(), v = zn(o), g = v === "ltr", b = g && !a || !g && a;
  function y(x) {
    const _ = m.current || f.getBoundingClientRect(), w = [
      0,
      _.width
    ], S = Gf(w, b ? [
      n,
      r
    ] : [
      r,
      n
    ]);
    return m.current = _, S(x - _.left);
  }
  return /* @__PURE__ */ $(Zx, {
    scope: e.__scopeSlider,
    startEdge: b ? "left" : "right",
    endEdge: b ? "right" : "left",
    direction: b ? 1 : -1,
    size: "width"
  }, /* @__PURE__ */ $(Qx, j({
    dir: v,
    "data-orientation": "horizontal"
  }, u, {
    ref: h,
    style: {
      ...u.style,
      "--radix-slider-thumb-transform": "translateX(-50%)"
    },
    onSlideStart: (x) => {
      const _ = y(x.clientX);
      s == null || s(_);
    },
    onSlideMove: (x) => {
      const _ = y(x.clientX);
      i == null || i(_);
    },
    onSlideEnd: () => {
      m.current = void 0, c == null || c();
    },
    onStepKeyDown: (x) => {
      const w = Yx[b ? "from-left" : "from-right"].includes(x.key);
      l == null || l({
        event: x,
        direction: w ? -1 : 1
      });
    }
  })));
}), ZV = /* @__PURE__ */ L((e, t) => {
  const { min: n, max: r, inverted: o, onSlideStart: a, onSlideMove: s, onSlideEnd: i, onStepKeyDown: c, ...l } = e, u = q(null), f = Ee(t, u), p = q(), h = !o;
  function m(v) {
    const g = p.current || u.current.getBoundingClientRect(), b = [
      0,
      g.height
    ], x = Gf(b, h ? [
      r,
      n
    ] : [
      n,
      r
    ]);
    return p.current = g, x(v - g.top);
  }
  return /* @__PURE__ */ $(Zx, {
    scope: e.__scopeSlider,
    startEdge: h ? "bottom" : "top",
    endEdge: h ? "top" : "bottom",
    size: "height",
    direction: h ? 1 : -1
  }, /* @__PURE__ */ $(Qx, j({
    "data-orientation": "vertical"
  }, l, {
    ref: f,
    style: {
      ...l.style,
      "--radix-slider-thumb-transform": "translateY(50%)"
    },
    onSlideStart: (v) => {
      const g = m(v.clientY);
      a == null || a(g);
    },
    onSlideMove: (v) => {
      const g = m(v.clientY);
      s == null || s(g);
    },
    onSlideEnd: () => {
      p.current = void 0, i == null || i();
    },
    onStepKeyDown: (v) => {
      const b = Yx[h ? "from-bottom" : "from-top"].includes(v.key);
      c == null || c({
        event: v,
        direction: b ? -1 : 1
      });
    }
  })));
}), Qx = /* @__PURE__ */ L((e, t) => {
  const { __scopeSlider: n, onSlideStart: r, onSlideMove: o, onSlideEnd: a, onHomeKeyDown: s, onEndKeyDown: i, onStepKeyDown: c, ...l } = e, u = Gc(Ds, n);
  return /* @__PURE__ */ $(de.span, j({}, l, {
    ref: t,
    onKeyDown: X(e.onKeyDown, (f) => {
      f.key === "Home" ? (s(f), f.preventDefault()) : f.key === "End" ? (i(f), f.preventDefault()) : Kx.concat(Gx).includes(f.key) && (c(f), f.preventDefault());
    }),
    onPointerDown: X(e.onPointerDown, (f) => {
      const p = f.target;
      p.setPointerCapture(f.pointerId), f.preventDefault(), u.thumbs.has(p) ? p.focus() : r(f);
    }),
    onPointerMove: X(e.onPointerMove, (f) => {
      f.target.hasPointerCapture(f.pointerId) && o(f);
    }),
    onPointerUp: X(e.onPointerUp, (f) => {
      const p = f.target;
      p.hasPointerCapture(f.pointerId) && (p.releasePointerCapture(f.pointerId), a(f));
    })
  }));
}), XV = "SliderTrack", QV = /* @__PURE__ */ L((e, t) => {
  const { __scopeSlider: n, ...r } = e, o = Gc(XV, n);
  return /* @__PURE__ */ $(de.span, j({
    "data-disabled": o.disabled ? "" : void 0,
    "data-orientation": o.orientation
  }, r, {
    ref: t
  }));
}), Nm = "SliderRange", JV = /* @__PURE__ */ L((e, t) => {
  const { __scopeSlider: n, ...r } = e, o = Gc(Nm, n), a = Xx(Nm, n), s = q(null), i = Ee(t, s), c = o.values.length, l = o.values.map(
    (p) => Jx(p, o.min, o.max)
  ), u = c > 1 ? Math.min(...l) : 0, f = 100 - Math.max(...l);
  return /* @__PURE__ */ $(de.span, j({
    "data-orientation": o.orientation,
    "data-disabled": o.disabled ? "" : void 0
  }, r, {
    ref: i,
    style: {
      ...e.style,
      [a.startEdge]: u + "%",
      [a.endEdge]: f + "%"
    }
  }));
}), Em = "SliderThumb", ez = /* @__PURE__ */ L((e, t) => {
  const n = HV(e.__scopeSlider), [r, o] = Z(null), a = Ee(
    t,
    (i) => o(i)
  ), s = Ut(
    () => r ? n().findIndex(
      (i) => i.ref.current === r
    ) : -1,
    [
      n,
      r
    ]
  );
  return /* @__PURE__ */ $(tz, j({}, e, {
    ref: a,
    index: s
  }));
}), tz = /* @__PURE__ */ L((e, t) => {
  const { __scopeSlider: n, index: r, ...o } = e, a = Gc(Em, n), s = Xx(Em, n), [i, c] = Z(null), l = Ee(
    t,
    (g) => c(g)
  ), u = xs(i), f = a.values[r], p = f === void 0 ? 0 : Jx(f, a.min, a.max), h = oz(r, a.values.length), m = u == null ? void 0 : u[s.size], v = m ? sz(m, p, s.direction) : 0;
  return J(() => {
    if (i)
      return a.thumbs.add(i), () => {
        a.thumbs.delete(i);
      };
  }, [
    i,
    a.thumbs
  ]), /* @__PURE__ */ $("span", {
    style: {
      transform: "var(--radix-slider-thumb-transform)",
      position: "absolute",
      [s.startEdge]: `calc(${p}% + ${v}px)`
    }
  }, /* @__PURE__ */ $(Ku.ItemSlot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ $(de.span, j({
    role: "slider",
    "aria-label": e["aria-label"] || h,
    "aria-valuemin": a.min,
    "aria-valuenow": f,
    "aria-valuemax": a.max,
    "aria-orientation": a.orientation,
    "data-orientation": a.orientation,
    "data-disabled": a.disabled ? "" : void 0,
    tabIndex: a.disabled ? void 0 : 0
  }, o, {
    ref: l,
    style: f === void 0 ? {
      display: "none"
    } : e.style,
    onFocus: X(e.onFocus, () => {
      a.valueIndexToChangeRef.current = r;
    })
  }))));
}), nz = (e) => {
  const { value: t, ...n } = e, r = q(null), o = ia(t);
  return J(() => {
    const a = r.current, s = window.HTMLInputElement.prototype, c = Object.getOwnPropertyDescriptor(s, "value").set;
    if (o !== t && c) {
      const l = new Event("input", {
        bubbles: !0
      });
      c.call(a, t), a.dispatchEvent(l);
    }
  }, [
    o,
    t
  ]), /* @__PURE__ */ $("input", j({
    style: {
      display: "none"
    }
  }, n, {
    ref: r,
    defaultValue: t
  }));
};
function rz(e = [], t, n) {
  const r = [
    ...e
  ];
  return r[n] = t, r.sort(
    (o, a) => o - a
  );
}
function Jx(e, t, n) {
  const a = 100 / (n - t) * (e - t);
  return Wa(a, [
    0,
    100
  ]);
}
function oz(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? [
    "Minimum",
    "Maximum"
  ][e] : void 0;
}
function az(e, t) {
  if (e.length === 1)
    return 0;
  const n = e.map(
    (o) => Math.abs(o - t)
  ), r = Math.min(...n);
  return n.indexOf(r);
}
function sz(e, t, n) {
  const r = e / 2, a = Gf([
    0,
    50
  ], [
    0,
    r
  ]);
  return (r - a(t) * n) * n;
}
function iz(e) {
  return e.slice(0, -1).map(
    (t, n) => e[n + 1] - t
  );
}
function cz(e, t) {
  if (t > 0) {
    const n = iz(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function Gf(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function lz(e) {
  return (String(e).split(".")[1] || "").length;
}
function uz(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
const e1 = YV, dz = QV, fz = JV, pz = ez, hz = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsxs(
  e1,
  {
    ref: n,
    className: M(
      "relative flex w-full touch-none select-none items-center",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ d.jsx(dz, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ d.jsx(fz, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ d.jsx(pz, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
hz.displayName = e1.displayName;
const t1 = "Tabs", [mz, sq] = ut(t1, [
  jr
]), n1 = jr(), [vz, Yf] = mz(t1), gz = /* @__PURE__ */ L((e, t) => {
  const { __scopeTabs: n, value: r, onValueChange: o, defaultValue: a, orientation: s = "horizontal", dir: i, activationMode: c = "automatic", ...l } = e, u = zn(i), [f, p] = vt({
    prop: r,
    onChange: o,
    defaultProp: a
  });
  return /* @__PURE__ */ $(vz, {
    scope: n,
    baseId: bt(),
    value: f,
    onValueChange: p,
    orientation: s,
    dir: u,
    activationMode: c
  }, /* @__PURE__ */ $(de.div, j({
    dir: u,
    "data-orientation": s
  }, l, {
    ref: t
  })));
}), bz = "TabsList", yz = /* @__PURE__ */ L((e, t) => {
  const { __scopeTabs: n, loop: r = !0, ...o } = e, a = Yf(bz, n), s = n1(n);
  return /* @__PURE__ */ $(Sc, j({
    asChild: !0
  }, s, {
    orientation: a.orientation,
    dir: a.dir,
    loop: r
  }), /* @__PURE__ */ $(de.div, j({
    role: "tablist",
    "aria-orientation": a.orientation
  }, o, {
    ref: t
  })));
}), xz = "TabsTrigger", wz = /* @__PURE__ */ L((e, t) => {
  const { __scopeTabs: n, value: r, disabled: o = !1, ...a } = e, s = Yf(xz, n), i = n1(n), c = r1(s.baseId, r), l = o1(s.baseId, r), u = r === s.value;
  return /* @__PURE__ */ $(Nc, j({
    asChild: !0
  }, i, {
    focusable: !o,
    active: u
  }), /* @__PURE__ */ $(de.button, j({
    type: "button",
    role: "tab",
    "aria-selected": u,
    "aria-controls": l,
    "data-state": u ? "active" : "inactive",
    "data-disabled": o ? "" : void 0,
    disabled: o,
    id: c
  }, a, {
    ref: t,
    onMouseDown: X(e.onMouseDown, (f) => {
      !o && f.button === 0 && f.ctrlKey === !1 ? s.onValueChange(r) : f.preventDefault();
    }),
    onKeyDown: X(e.onKeyDown, (f) => {
      [
        " ",
        "Enter"
      ].includes(f.key) && s.onValueChange(r);
    }),
    onFocus: X(e.onFocus, () => {
      const f = s.activationMode !== "manual";
      !u && !o && f && s.onValueChange(r);
    })
  })));
}), $z = "TabsContent", _z = /* @__PURE__ */ L((e, t) => {
  const { __scopeTabs: n, value: r, forceMount: o, children: a, ...s } = e, i = Yf($z, n), c = r1(i.baseId, r), l = o1(i.baseId, r), u = r === i.value, f = q(u);
  return J(() => {
    const p = requestAnimationFrame(
      () => f.current = !1
    );
    return () => cancelAnimationFrame(p);
  }, []), /* @__PURE__ */ $(
    ft,
    {
      present: o || u
    },
    ({ present: p }) => /* @__PURE__ */ $(de.div, j({
      "data-state": u ? "active" : "inactive",
      "data-orientation": i.orientation,
      role: "tabpanel",
      "aria-labelledby": c,
      hidden: !p,
      id: l,
      tabIndex: 0
    }, s, {
      ref: t,
      style: {
        ...e.style,
        animationDuration: f.current ? "0s" : void 0
      }
    }), p && a)
  );
});
function r1(e, t) {
  return `${e}-trigger-${t}`;
}
function o1(e, t) {
  return `${e}-content-${t}`;
}
const Cz = gz, a1 = yz, s1 = wz, i1 = _z, iq = Cz, Sz = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  a1,
  {
    ref: n,
    className: M(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
Sz.displayName = a1.displayName;
const Nz = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  s1,
  {
    ref: n,
    className: M(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
Nz.displayName = s1.displayName;
const Ez = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  i1,
  {
    ref: n,
    className: M(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
Ez.displayName = i1.displayName;
const Pz = /* @__PURE__ */ L((e, t) => {
  const { pressed: n, defaultPressed: r = !1, onPressedChange: o, ...a } = e, [s = !1, i] = vt({
    prop: n,
    onChange: o,
    defaultProp: r
  });
  return /* @__PURE__ */ $(de.button, j({
    type: "button",
    "aria-pressed": s,
    "data-state": s ? "on" : "off",
    "data-disabled": e.disabled ? "" : void 0
  }, a, {
    ref: t,
    onClick: X(e.onClick, () => {
      e.disabled || i(!s);
    })
  }));
}), c1 = Pz, Oz = Ko(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Tz = C.forwardRef(({ className: e, variant: t, size: n, ...r }, o) => /* @__PURE__ */ d.jsx(
  c1,
  {
    ref: o,
    className: M(Oz({ variant: t, size: n, className: e })),
    ...r
  }
));
Tz.displayName = c1.displayName;
const [Yc, cq] = ut("Tooltip", [
  Wn
]), qf = Wn(), jz = "TooltipProvider", kz = 700, Gu = "tooltip.open", [Mz, Zf] = Yc(jz), Dz = (e) => {
  const { __scopeTooltip: t, delayDuration: n = kz, skipDelayDuration: r = 300, disableHoverableContent: o = !1, children: a } = e, [s, i] = Z(!0), c = q(!1), l = q(0);
  return J(() => {
    const u = l.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ $(Mz, {
    scope: t,
    isOpenDelayed: s,
    delayDuration: n,
    onOpen: ve(() => {
      window.clearTimeout(l.current), i(!1);
    }, []),
    onClose: ve(() => {
      window.clearTimeout(l.current), l.current = window.setTimeout(
        () => i(!0),
        r
      );
    }, [
      r
    ]),
    isPointerInTransitRef: c,
    onPointerInTransitChange: ve((u) => {
      c.current = u;
    }, []),
    disableHoverableContent: o
  }, a);
}, Xf = "Tooltip", [Az, qc] = Yc(Xf), Rz = (e) => {
  const { __scopeTooltip: t, children: n, open: r, defaultOpen: o = !1, onOpenChange: a, disableHoverableContent: s, delayDuration: i } = e, c = Zf(Xf, e.__scopeTooltip), l = qf(t), [u, f] = Z(null), p = bt(), h = q(0), m = s ?? c.disableHoverableContent, v = i ?? c.delayDuration, g = q(!1), [b = !1, y] = vt({
    prop: r,
    defaultProp: o,
    onChange: (S) => {
      S ? (c.onOpen(), document.dispatchEvent(new CustomEvent(Gu))) : c.onClose(), a == null || a(S);
    }
  }), x = Ut(() => b ? g.current ? "delayed-open" : "instant-open" : "closed", [
    b
  ]), _ = ve(() => {
    window.clearTimeout(h.current), g.current = !1, y(!0);
  }, [
    y
  ]), w = ve(() => {
    window.clearTimeout(h.current), y(!1);
  }, [
    y
  ]), N = ve(() => {
    window.clearTimeout(h.current), h.current = window.setTimeout(() => {
      g.current = !0, y(!0);
    }, v);
  }, [
    v,
    y
  ]);
  return J(() => () => window.clearTimeout(h.current), []), /* @__PURE__ */ $(na, l, /* @__PURE__ */ $(Az, {
    scope: t,
    contentId: p,
    open: b,
    stateAttribute: x,
    trigger: u,
    onTriggerChange: f,
    onTriggerEnter: ve(() => {
      c.isOpenDelayed ? N() : _();
    }, [
      c.isOpenDelayed,
      N,
      _
    ]),
    onTriggerLeave: ve(() => {
      m ? w() : window.clearTimeout(h.current);
    }, [
      w,
      m
    ]),
    onOpen: _,
    onClose: w,
    disableHoverableContent: m
  }, n));
}, Pm = "TooltipTrigger", Iz = /* @__PURE__ */ L((e, t) => {
  const { __scopeTooltip: n, ...r } = e, o = qc(Pm, n), a = Zf(Pm, n), s = qf(n), i = q(null), c = Ee(t, i, o.onTriggerChange), l = q(!1), u = q(!1), f = ve(
    () => l.current = !1,
    []
  );
  return J(() => () => document.removeEventListener("pointerup", f), [
    f
  ]), /* @__PURE__ */ $(ws, j({
    asChild: !0
  }, s), /* @__PURE__ */ $(de.button, j({
    // We purposefully avoid adding `type=button` here because tooltip triggers are also
    // commonly anchors and the anchor `type` attribute signifies MIME type.
    "aria-describedby": o.open ? o.contentId : void 0,
    "data-state": o.stateAttribute
  }, r, {
    ref: c,
    onPointerMove: X(e.onPointerMove, (p) => {
      p.pointerType !== "touch" && !u.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), u.current = !0);
    }),
    onPointerLeave: X(e.onPointerLeave, () => {
      o.onTriggerLeave(), u.current = !1;
    }),
    onPointerDown: X(e.onPointerDown, () => {
      l.current = !0, document.addEventListener("pointerup", f, {
        once: !0
      });
    }),
    onFocus: X(e.onFocus, () => {
      l.current || o.onOpen();
    }),
    onBlur: X(e.onBlur, o.onClose),
    onClick: X(e.onClick, o.onClose)
  })));
}), Lz = "TooltipPortal", [lq, Fz] = Yc(Lz, {
  forceMount: void 0
}), Ga = "TooltipContent", Bz = /* @__PURE__ */ L((e, t) => {
  const n = Fz(Ga, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...a } = e, s = qc(Ga, e.__scopeTooltip);
  return /* @__PURE__ */ $(ft, {
    present: r || s.open
  }, s.disableHoverableContent ? /* @__PURE__ */ $(l1, j({
    side: o
  }, a, {
    ref: t
  })) : /* @__PURE__ */ $(Vz, j({
    side: o
  }, a, {
    ref: t
  })));
}), Vz = /* @__PURE__ */ L((e, t) => {
  const n = qc(Ga, e.__scopeTooltip), r = Zf(Ga, e.__scopeTooltip), o = q(null), a = Ee(t, o), [s, i] = Z(null), { trigger: c, onClose: l } = n, u = o.current, { onPointerInTransitChange: f } = r, p = ve(() => {
    i(null), f(!1);
  }, [
    f
  ]), h = ve((m, v) => {
    const g = m.currentTarget, b = {
      x: m.clientX,
      y: m.clientY
    }, y = Wz(b, g.getBoundingClientRect()), x = Uz(b, y), _ = Hz(v.getBoundingClientRect()), w = Gz([
      ...x,
      ..._
    ]);
    i(w), f(!0);
  }, [
    f
  ]);
  return J(() => () => p(), [
    p
  ]), J(() => {
    if (c && u) {
      const m = (g) => h(g, u), v = (g) => h(g, c);
      return c.addEventListener("pointerleave", m), u.addEventListener("pointerleave", v), () => {
        c.removeEventListener("pointerleave", m), u.removeEventListener("pointerleave", v);
      };
    }
  }, [
    c,
    u,
    h,
    p
  ]), J(() => {
    if (s) {
      const m = (v) => {
        const g = v.target, b = {
          x: v.clientX,
          y: v.clientY
        }, y = (c == null ? void 0 : c.contains(g)) || (u == null ? void 0 : u.contains(g)), x = !Kz(b, s);
        y ? p() : x && (p(), l());
      };
      return document.addEventListener("pointermove", m), () => document.removeEventListener("pointermove", m);
    }
  }, [
    c,
    u,
    s,
    l,
    p
  ]), /* @__PURE__ */ $(l1, j({}, e, {
    ref: a
  }));
}), [zz, uq] = Yc(Xf, {
  isInside: !1
}), l1 = /* @__PURE__ */ L((e, t) => {
  const { __scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: a, onPointerDownOutside: s, ...i } = e, c = qc(Ga, n), l = qf(n), { onClose: u } = c;
  return J(() => (document.addEventListener(Gu, u), () => document.removeEventListener(Gu, u)), [
    u
  ]), J(() => {
    if (c.trigger) {
      const f = (p) => {
        const h = p.target;
        h != null && h.contains(c.trigger) && u();
      };
      return window.addEventListener("scroll", f, {
        capture: !0
      }), () => window.removeEventListener("scroll", f, {
        capture: !0
      });
    }
  }, [
    c.trigger,
    u
  ]), /* @__PURE__ */ $(co, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: (f) => f.preventDefault(),
    onDismiss: u
  }, /* @__PURE__ */ $($s, j({
    "data-state": c.stateAttribute
  }, l, i, {
    ref: t,
    style: {
      ...i.style,
      "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
      "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
      "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }), /* @__PURE__ */ $(ld, null, r), /* @__PURE__ */ $(zz, {
    scope: n,
    isInside: !0
  }, /* @__PURE__ */ $(Oy, {
    id: c.contentId,
    role: "tooltip"
  }, o || r))));
});
function Wz(e, t) {
  const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), a = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, a)) {
    case a:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Uz(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({
        x: e.x - n,
        y: e.y + n
      }, {
        x: e.x + n,
        y: e.y + n
      });
      break;
    case "bottom":
      r.push({
        x: e.x - n,
        y: e.y - n
      }, {
        x: e.x + n,
        y: e.y - n
      });
      break;
    case "left":
      r.push({
        x: e.x + n,
        y: e.y - n
      }, {
        x: e.x + n,
        y: e.y + n
      });
      break;
    case "right":
      r.push({
        x: e.x - n,
        y: e.y - n
      }, {
        x: e.x - n,
        y: e.y + n
      });
      break;
  }
  return r;
}
function Hz(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    {
      x: o,
      y: t
    },
    {
      x: n,
      y: t
    },
    {
      x: n,
      y: r
    },
    {
      x: o,
      y: r
    }
  ];
}
function Kz(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, l = t[s].x, u = t[s].y;
    c > r != u > r && n < (l - i) * (r - c) / (u - c) + i && (o = !o);
  }
  return o;
}
function Gz(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), Yz(t);
}
function Yz(e) {
  if (e.length <= 1)
    return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const a = t[t.length - 1], s = t[t.length - 2];
      if ((a.x - s.x) * (o.y - s.y) >= (a.y - s.y) * (o.x - s.x))
        t.pop();
      else
        break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const a = n[n.length - 1], s = n[n.length - 2];
      if ((a.x - s.x) * (o.y - s.y) >= (a.y - s.y) * (o.x - s.x))
        n.pop();
      else
        break;
    }
    n.push(o);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
const qz = Dz, Zz = Rz, Xz = Iz, u1 = Bz, Qr = qz, Jr = Zz, eo = Xz, _r = C.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ d.jsx(
  u1,
  {
    ref: r,
    sideOffset: t,
    className: M(
      "z-50 overflow-hidden rounded-md border bg-card px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
));
_r.displayName = u1.displayName;
const d1 = "Switch", [Qz, dq] = ut(d1), [Jz, eW] = Qz(d1), tW = /* @__PURE__ */ L((e, t) => {
  const { __scopeSwitch: n, name: r, checked: o, defaultChecked: a, required: s, disabled: i, value: c = "on", onCheckedChange: l, ...u } = e, [f, p] = Z(null), h = Ee(
    t,
    (y) => p(y)
  ), m = q(!1), v = f ? !!f.closest("form") : !0, [g = !1, b] = vt({
    prop: o,
    defaultProp: a,
    onChange: l
  });
  return /* @__PURE__ */ $(Jz, {
    scope: n,
    checked: g,
    disabled: i
  }, /* @__PURE__ */ $(de.button, j({
    type: "button",
    role: "switch",
    "aria-checked": g,
    "aria-required": s,
    "data-state": f1(g),
    "data-disabled": i ? "" : void 0,
    disabled: i,
    value: c
  }, u, {
    ref: h,
    onClick: X(e.onClick, (y) => {
      b(
        (x) => !x
      ), v && (m.current = y.isPropagationStopped(), m.current || y.stopPropagation());
    })
  })), v && /* @__PURE__ */ $(oW, {
    control: f,
    bubbles: !m.current,
    name: r,
    value: c,
    checked: g,
    required: s,
    disabled: i,
    style: {
      transform: "translateX(-100%)"
    }
  }));
}), nW = "SwitchThumb", rW = /* @__PURE__ */ L((e, t) => {
  const { __scopeSwitch: n, ...r } = e, o = eW(nW, n);
  return /* @__PURE__ */ $(de.span, j({
    "data-state": f1(o.checked),
    "data-disabled": o.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), oW = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = q(null), s = ia(n), i = xs(t);
  return J(() => {
    const c = a.current, l = window.HTMLInputElement.prototype, f = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (s !== n && f) {
      const p = new Event("click", {
        bubbles: r
      });
      f.call(c, n), c.dispatchEvent(p);
    }
  }, [
    s,
    n,
    r
  ]), /* @__PURE__ */ $("input", j({
    type: "checkbox",
    "aria-hidden": !0,
    defaultChecked: n
  }, o, {
    tabIndex: -1,
    ref: a,
    style: {
      ...e.style,
      ...i,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  }));
};
function f1(e) {
  return e ? "checked" : "unchecked";
}
const p1 = tW, aW = rW, sW = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  p1,
  {
    className: M(
      "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ d.jsx(
      aW,
      {
        className: M(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
sW.displayName = p1.displayName;
var iW = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const Om = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (u, f) => {
    const p = typeof u == "function" ? u(t) : u;
    if (!Object.is(p, t)) {
      const h = t;
      t = f ?? (typeof p != "object" || p === null) ? p : Object.assign({}, t, p), n.forEach((m) => m(t, h));
    }
  }, o = () => t, c = { setState: r, getState: o, getInitialState: () => l, subscribe: (u) => (n.add(u), () => n.delete(u)), destroy: () => {
    (iW ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), n.clear();
  } }, l = t = e(r, o, c);
  return c;
}, cW = (e) => e ? Om(e) : Om;
var Yu = { exports: {} }, Ll = {}, ti = { exports: {} }, Fl = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tm;
function lW() {
  if (Tm)
    return Fl;
  Tm = 1;
  var e = I;
  function t(f, p) {
    return f === p && (f !== 0 || 1 / f === 1 / p) || f !== f && p !== p;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, o = e.useEffect, a = e.useLayoutEffect, s = e.useDebugValue;
  function i(f, p) {
    var h = p(), m = r({ inst: { value: h, getSnapshot: p } }), v = m[0].inst, g = m[1];
    return a(function() {
      v.value = h, v.getSnapshot = p, c(v) && g({ inst: v });
    }, [f, h, p]), o(function() {
      return c(v) && g({ inst: v }), f(function() {
        c(v) && g({ inst: v });
      });
    }, [f]), s(h), h;
  }
  function c(f) {
    var p = f.getSnapshot;
    f = f.value;
    try {
      var h = p();
      return !n(f, h);
    } catch {
      return !0;
    }
  }
  function l(f, p) {
    return p();
  }
  var u = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? l : i;
  return Fl.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : u, Fl;
}
var Bl = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jm;
function uW() {
  return jm || (jm = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = I, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(x) {
      {
        for (var _ = arguments.length, w = new Array(_ > 1 ? _ - 1 : 0), N = 1; N < _; N++)
          w[N - 1] = arguments[N];
        r("error", x, w);
      }
    }
    function r(x, _, w) {
      {
        var N = t.ReactDebugCurrentFrame, S = N.getStackAddendum();
        S !== "" && (_ += "%s", w = w.concat([S]));
        var D = w.map(function(P) {
          return String(P);
        });
        D.unshift("Warning: " + _), Function.prototype.apply.call(console[x], console, D);
      }
    }
    function o(x, _) {
      return x === _ && (x !== 0 || 1 / x === 1 / _) || x !== x && _ !== _;
    }
    var a = typeof Object.is == "function" ? Object.is : o, s = e.useState, i = e.useEffect, c = e.useLayoutEffect, l = e.useDebugValue, u = !1, f = !1;
    function p(x, _, w) {
      u || e.startTransition !== void 0 && (u = !0, n("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var N = _();
      if (!f) {
        var S = _();
        a(N, S) || (n("The result of getSnapshot should be cached to avoid an infinite loop"), f = !0);
      }
      var D = s({
        inst: {
          value: N,
          getSnapshot: _
        }
      }), P = D[0].inst, z = D[1];
      return c(function() {
        P.value = N, P.getSnapshot = _, h(P) && z({
          inst: P
        });
      }, [x, N, _]), i(function() {
        h(P) && z({
          inst: P
        });
        var K = function() {
          h(P) && z({
            inst: P
          });
        };
        return x(K);
      }, [x]), l(N), N;
    }
    function h(x) {
      var _ = x.getSnapshot, w = x.value;
      try {
        var N = _();
        return !a(w, N);
      } catch {
        return !0;
      }
    }
    function m(x, _, w) {
      return _();
    }
    var v = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", g = !v, b = g ? m : p, y = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : b;
    Bl.useSyncExternalStore = y, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Bl;
}
var km;
function h1() {
  return km || (km = 1, process.env.NODE_ENV === "production" ? ti.exports = lW() : ti.exports = uW()), ti.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mm;
function dW() {
  if (Mm)
    return Ll;
  Mm = 1;
  var e = I, t = h1();
  function n(l, u) {
    return l === u && (l !== 0 || 1 / l === 1 / u) || l !== l && u !== u;
  }
  var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, a = e.useRef, s = e.useEffect, i = e.useMemo, c = e.useDebugValue;
  return Ll.useSyncExternalStoreWithSelector = function(l, u, f, p, h) {
    var m = a(null);
    if (m.current === null) {
      var v = { hasValue: !1, value: null };
      m.current = v;
    } else
      v = m.current;
    m = i(function() {
      function b(N) {
        if (!y) {
          if (y = !0, x = N, N = p(N), h !== void 0 && v.hasValue) {
            var S = v.value;
            if (h(S, N))
              return _ = S;
          }
          return _ = N;
        }
        if (S = _, r(x, N))
          return S;
        var D = p(N);
        return h !== void 0 && h(S, D) ? S : (x = N, _ = D);
      }
      var y = !1, x, _, w = f === void 0 ? null : f;
      return [function() {
        return b(u());
      }, w === null ? void 0 : function() {
        return b(w());
      }];
    }, [u, f, p, h]);
    var g = o(l, m[0], m[1]);
    return s(function() {
      v.hasValue = !0, v.value = g;
    }, [g]), c(g), g;
  }, Ll;
}
var Vl = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dm;
function fW() {
  return Dm || (Dm = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = I, t = h1();
    function n(u, f) {
      return u === f && (u !== 0 || 1 / u === 1 / f) || u !== u && f !== f;
    }
    var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, a = e.useRef, s = e.useEffect, i = e.useMemo, c = e.useDebugValue;
    function l(u, f, p, h, m) {
      var v = a(null), g;
      v.current === null ? (g = {
        hasValue: !1,
        value: null
      }, v.current = g) : g = v.current;
      var b = i(function() {
        var w = !1, N, S, D = function(R) {
          if (!w) {
            w = !0, N = R;
            var W = h(R);
            if (m !== void 0 && g.hasValue) {
              var V = g.value;
              if (m(V, W))
                return S = V, V;
            }
            return S = W, W;
          }
          var E = N, B = S;
          if (r(E, R))
            return B;
          var T = h(R);
          return m !== void 0 && m(B, T) ? B : (N = R, S = T, T);
        }, P = p === void 0 ? null : p, z = function() {
          return D(f());
        }, K = P === null ? void 0 : function() {
          return D(P());
        };
        return [z, K];
      }, [f, p, h, m]), y = b[0], x = b[1], _ = o(u, y, x);
      return s(function() {
        g.hasValue = !0, g.value = _;
      }, [_]), c(_), _;
    }
    Vl.useSyncExternalStoreWithSelector = l, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Vl;
}
process.env.NODE_ENV === "production" ? Yu.exports = dW() : Yu.exports = fW();
var pW = Yu.exports;
const hW = /* @__PURE__ */ _n(pW);
var m1 = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const { useDebugValue: mW } = I, { useSyncExternalStoreWithSelector: vW } = hW;
let Am = !1;
const gW = (e) => e;
function bW(e, t = gW, n) {
  (m1 ? "production" : void 0) !== "production" && n && !Am && (console.warn(
    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
  ), Am = !0);
  const r = vW(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    n
  );
  return mW(r), r;
}
const Rm = (e) => {
  (m1 ? "production" : void 0) !== "production" && typeof e != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const t = typeof e == "function" ? cW(e) : e, n = (r, o) => bW(t, r, o);
  return Object.assign(n, t), n;
}, yW = (e) => e ? Rm(e) : Rm, xW = ({ profile: e, isExpanded: t }) => /* @__PURE__ */ d.jsxs("header", { className: `${t ? "justify-start" : "justify-center"} w-full h-14 flex items-start gap-x-3`, children: [
  /* @__PURE__ */ d.jsxs(Po, { className: "w-16 h-full border border-gray-200 shadow-sm rounded-md", children: [
    /* @__PURE__ */ d.jsx(
      Hr,
      {
        className: "h-full border border-gray-200 object-cover rounded-md",
        src: e == null ? void 0 : e.photo
      }
    ),
    /* @__PURE__ */ d.jsx(Oo, { className: "p-2 rounded-md h-full bg-transparent", children: /* @__PURE__ */ d.jsx(b$, { className: "text-black dark:text-white h-full" }) })
  ] }),
  t && /* @__PURE__ */ d.jsxs("section", { className: "w-full h-full flex flex-col justify-center", children: [
    /* @__PURE__ */ d.jsxs("span", { className: "truncate", children: [
      e == null ? void 0 : e.name,
      " ",
      e == null ? void 0 : e.lastname
    ] }),
    (e == null ? void 0 : e.role) && /* @__PURE__ */ d.jsx(At, { className: "w-full bg-brand-secondary dark:text-white", children: e.role })
  ] })
] });
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var wW = {
  outline: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  },
  filled: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    stroke: "none"
  }
};
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ar = (e, t, n, r) => {
  const o = L(
    ({ color: a = "currentColor", size: s = 24, stroke: i = 2, className: c, children: l, ...u }, f) => $(
      "svg",
      {
        ref: f,
        ...wW[e],
        width: s,
        height: s,
        className: ["tabler-icon", `tabler-icon-${t}`, c].join(" "),
        strokeWidth: i,
        stroke: a,
        ...u
      },
      [
        ...r.map(([p, h]) => $(p, h)),
        ...Array.isArray(l) ? l : [l]
      ]
    )
  );
  return o.displayName = `${n}`, o;
};
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var v1 = Ar("outline", "adjustments-horizontal", "IconAdjustmentsHorizontal", [["path", { d: "M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-0" }], ["path", { d: "M4 6l8 0", key: "svg-1" }], ["path", { d: "M16 6l4 0", key: "svg-2" }], ["path", { d: "M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-3" }], ["path", { d: "M4 12l2 0", key: "svg-4" }], ["path", { d: "M10 12l10 0", key: "svg-5" }], ["path", { d: "M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-6" }], ["path", { d: "M4 18l11 0", key: "svg-7" }], ["path", { d: "M19 18l1 0", key: "svg-8" }]]);
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var g1 = Ar("outline", "adjustments", "IconAdjustments", [["path", { d: "M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-0" }], ["path", { d: "M6 4v4", key: "svg-1" }], ["path", { d: "M6 12v8", key: "svg-2" }], ["path", { d: "M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-3" }], ["path", { d: "M12 4v10", key: "svg-4" }], ["path", { d: "M12 18v2", key: "svg-5" }], ["path", { d: "M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-6" }], ["path", { d: "M18 4v1", key: "svg-7" }], ["path", { d: "M18 9v11", key: "svg-8" }]]);
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var $W = Ar("outline", "check", "IconCheck", [["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]]);
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var _W = Ar("outline", "click", "IconClick", [["path", { d: "M3 12l3 0", key: "svg-0" }], ["path", { d: "M12 3l0 3", key: "svg-1" }], ["path", { d: "M7.8 7.8l-2.2 -2.2", key: "svg-2" }], ["path", { d: "M16.2 7.8l2.2 -2.2", key: "svg-3" }], ["path", { d: "M7.8 16.2l-2.2 2.2", key: "svg-4" }], ["path", { d: "M12 12l9 3l-4 2l-2 4l-3 -9", key: "svg-5" }]]);
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var b1 = Ar("outline", "moon", "IconMoon", [["path", { d: "M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z", key: "svg-0" }]]);
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var y1 = Ar("outline", "photo-star", "IconPhotoStar", [["path", { d: "M15 8h.01", key: "svg-0" }], ["path", { d: "M11 21h-5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5", key: "svg-1" }], ["path", { d: "M3 16l5 -5c.928 -.893 2.072 -.893 3 0l2 2", key: "svg-2" }], ["path", { d: "M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z", key: "svg-3" }]]);
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var x1 = Ar("outline", "search", "IconSearch", [["path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }], ["path", { d: "M21 21l-6 -6", key: "svg-1" }]]);
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var w1 = Ar("outline", "sun", "IconSun", [["path", { d: "M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0", key: "svg-0" }], ["path", { d: "M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7", key: "svg-1" }]]), Im = ["light", "dark"], CW = "(prefers-color-scheme: dark)", SW = C.createContext(void 0), NW = { setTheme: (e) => {
}, themes: [] }, EW = () => {
  var e;
  return (e = C.useContext(SW)) != null ? e : NW;
};
C.memo(({ forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: o, defaultTheme: a, value: s, attrs: i, nonce: c }) => {
  let l = a === "system", u = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${i.map((m) => `'${m}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`, f = o ? Im.includes(a) && a ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${a}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "", p = (m, v = !1, g = !0) => {
    let b = s ? s[m] : m, y = v ? m + "|| ''" : `'${b}'`, x = "";
    return o && g && !v && Im.includes(m) && (x += `d.style.colorScheme = '${m}';`), n === "class" ? v || b ? x += `c.add(${y})` : x += "null" : b && (x += `d[s](n,${y})`), x;
  }, h = e ? `!function(){${u}${p(e)}}()` : r ? `!function(){try{${u}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${l})){var t='${CW}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${p(s ? "x[e]" : "e", !0)}}${l ? "" : "else{" + p(a, !1, !1) + "}"}${f}}catch(e){}}()` : `!function(){try{${u}var e=localStorage.getItem('${t}');if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${p(s ? "x[e]" : "e", !0)}}else{${p(a, !1, !1)};}${f}}catch(t){}}();`;
  return C.createElement("script", { nonce: c, dangerouslySetInnerHTML: { __html: h } });
});
const PW = ({ isExpanded: e }) => {
  const [t, n] = Z(!1), { theme: r, setTheme: o } = EW();
  if (J(() => {
    n(!0);
  }, []), !t)
    return null;
  const a = () => {
    o(r === "light" ? "dark" : "light");
  };
  return /* @__PURE__ */ d.jsx(
    "button",
    {
      onClick: a,
      className: `w-full border-2 border-transparent flex ${e ? "justify-center" : ""} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
      children: r === "light" ? /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
        /* @__PURE__ */ d.jsx(b1, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ d.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Oscuro" })
      ] }) : /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
        /* @__PURE__ */ d.jsx(w1, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ d.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Claro" })
      ] })
    }
  );
}, OW = ({ logout: e, isExpanded: t, toggleExpandSidebar: n, theme: r }) => /* @__PURE__ */ d.jsxs("section", { className: "pl-2 pr-3", children: [
  /* @__PURE__ */ d.jsx("div", { className: "border border-slate-200 w-full" }),
  /* @__PURE__ */ d.jsxs("ul", { className: "mt-2 space-y-2", children: [
    /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsx(PW, { isExpanded: !t, theme: r }) }),
    /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsxs(
      "button",
      {
        onClick: n,
        className: `w-full border-2 border-transparent flex ${t ? "" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
        children: [
          t ? /* @__PURE__ */ d.jsx(v$, { className: "dark:text-white", size: 20 }) : /* @__PURE__ */ d.jsx(g$, { className: "dark:text-white", size: 20 }),
          t && /* @__PURE__ */ d.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Menu" })
        ]
      }
    ) }),
    e && /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsxs(
      "button",
      {
        onClick: e,
        className: `w-full border-2 border-transparent flex ${t ? "" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
        children: [
          /* @__PURE__ */ d.jsx(bv, { className: "dark:text-white", size: 20 }),
          t && /* @__PURE__ */ d.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Sesión" })
        ]
      }
    ) })
  ] })
] }), Zc = yW((e) => ({
  isExpanded: !0,
  setIsExpanded: (t) => e({ isExpanded: t }),
  toggleExpandSidebar: () => e((t) => ({ isExpanded: !t.isExpanded }))
})), fq = ({
  children: e,
  className: t,
  profile: n,
  logout: r,
  theme: o,
  isDrawerSidebar: a
}) => {
  const { isExpanded: s, toggleExpandSidebar: i } = Zc();
  return /* @__PURE__ */ d.jsx(
    "aside",
    {
      tabIndex: -1,
      className: M(
        `sidebar dark:border-transparent overflow-hidden ${a ? "" : "hidden"} lg:block`,
        t,
        `${s ? "max-w-[240px]" : "max-w-[100px]"}`,
        `${a ? "ml-auto" : ""}`
      ),
      children: /* @__PURE__ */ d.jsxs("div", { className: "w-full py-8 grid grid-rows-[56px_1fr_160px] h-full gap-y-3 px-3", children: [
        /* @__PURE__ */ d.jsx(xW, { isExpanded: s, profile: n }),
        e,
        /* @__PURE__ */ d.jsx(
          OW,
          {
            theme: o,
            logout: r,
            isExpanded: s,
            toggleExpandSidebar: i
          }
        )
      ] })
    }
  );
}, pq = ({ children: e }) => {
  const { isExpanded: t } = Zc();
  return /* @__PURE__ */ d.jsx("section", { className: "w-full h-full py-3 scroll-content", children: /* @__PURE__ */ d.jsx("div", { className: `${t ? " pr-2" : "pl-2"} w-full space-y-3`, children: e }) });
}, $1 = ({
  to: e,
  label: t,
  icon: n,
  pathname: r,
  Link: o,
  isBottomNavLink: a
}) => {
  const [s, i] = Z(!1), c = q(null), { isExpanded: l } = Zc();
  return J(() => {
    const u = () => {
      const f = c.current.querySelector(
        `#${e.replaceAll("/", "_")}`
      );
      if (f) {
        const p = f.offsetWidth < f.scrollWidth;
        i(p);
      }
    };
    return window.addEventListener("resize", u), u(), () => window.removeEventListener("resize", u);
  }, [e]), o ? /* @__PURE__ */ d.jsx(Qr, { delayDuration: 180, children: /* @__PURE__ */ d.jsxs(
    o,
    {
      href: e,
      ref: c,
      className: a ? "cursor-pointer" : `cursor-pointer border-2 border-transparent flex ${l ? "justify-start h-[42px]" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 
        ${r.startsWith(e) && "border-2 border-brand-primary/30 bg-brand-primary/20 dark:bg-brand-primary/10 text-brand-primary"} select-none`,
      children: [
        /* @__PURE__ */ d.jsx("div", { children: n }),
        !s && l && /* @__PURE__ */ d.jsx(
          "span",
          {
            id: e.replaceAll("/", "_"),
            className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
            children: a ? "" : t
          }
        ),
        s && l && /* @__PURE__ */ d.jsxs(Jr, { children: [
          /* @__PURE__ */ d.jsx(eo, { className: "truncate", children: /* @__PURE__ */ d.jsx(
            "span",
            {
              id: e.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: t
            }
          ) }),
          /* @__PURE__ */ d.jsx(_r, { children: /* @__PURE__ */ d.jsx("p", { children: t }) })
        ] })
      ]
    }
  ) }) : /* @__PURE__ */ d.jsx(Qr, { delayDuration: 180, children: /* @__PURE__ */ d.jsxs(
    "div",
    {
      ref: c,
      className: a ? "cursor-pointer" : `cursor-pointer border-2 border-transparent flex ${l ? "justify-start h-[42px]" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10
          ${r.startsWith(e) && "border-2 border-brand-primary/30 bg-brand-primary/20  hover:dark:bg-brand-primary/10 text-brand-primary"} select-none`,
      children: [
        /* @__PURE__ */ d.jsx("div", { children: n }),
        !s && l && /* @__PURE__ */ d.jsx(
          "span",
          {
            id: e.replaceAll("/", "_"),
            className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
            children: a ? "" : t
          }
        ),
        s && l && /* @__PURE__ */ d.jsxs(Jr, { children: [
          /* @__PURE__ */ d.jsx(eo, { className: "truncate", children: /* @__PURE__ */ d.jsx(
            "span",
            {
              id: e.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: t
            }
          ) }),
          /* @__PURE__ */ d.jsx(_r, { children: /* @__PURE__ */ d.jsx("p", { children: t }) })
        ] })
      ]
    }
  ) });
}, Lm = ({ isExpanded: e, pathname: t, to: n, icon: r, label: o, Link: a }) => {
  const [s, i] = Z(!1), c = q(null);
  return J(() => {
    const l = () => {
      const u = c.current.querySelector(`#${n.replaceAll("/", "_")}`);
      if (u) {
        const f = u.offsetWidth < u.scrollWidth;
        i(f);
      }
    };
    return window.addEventListener("resize", l), l(), () => window.removeEventListener("resize", l);
  }, [n]), a ? /* @__PURE__ */ d.jsx(Qr, { delayDuration: 180, children: /* @__PURE__ */ d.jsxs(
    a,
    {
      href: n,
      ref: c,
      className: `cursor-pointer border-2 border-transparent flex ${e ? "pl-4 justify-start h-[42px]" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg  hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 
        ${t.startsWith(n) && "border-2 border-brand-primary/30 bg-brand-primary/20 dark:bg-brand-primary/20 text-brand-primary"} select-none`,
      children: [
        /* @__PURE__ */ d.jsx("div", { children: r }),
        !s && e && /* @__PURE__ */ d.jsx(
          "span",
          {
            id: n.replaceAll("/", "_"),
            className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
            children: o
          }
        ),
        s && e && /* @__PURE__ */ d.jsxs(Jr, { children: [
          /* @__PURE__ */ d.jsx(eo, { className: "truncate", children: /* @__PURE__ */ d.jsx(
            "span",
            {
              id: n.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: o
            }
          ) }),
          /* @__PURE__ */ d.jsx(_r, { children: /* @__PURE__ */ d.jsx("p", { children: o }) })
        ] })
      ]
    }
  ) }) : /* @__PURE__ */ d.jsx(Qr, { delayDuration: 180, children: /* @__PURE__ */ d.jsxs(
    "div",
    {
      ref: c,
      className: `cursor-pointer border-2 border-transparent flex ${e ? "pl-4 justify-start h-[42px]" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 
          ${t.startsWith(n) && "border-2 border-brand-primary/30 bg-brand-primary/20 dark:bg-brand-primary/20 text-brand-primary"} select-none`,
      children: [
        /* @__PURE__ */ d.jsx("div", { children: r }),
        !s && e && /* @__PURE__ */ d.jsx(
          "span",
          {
            id: n.replaceAll("/", "_"),
            className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
            children: o
          }
        ),
        s && e && /* @__PURE__ */ d.jsxs(Jr, { children: [
          /* @__PURE__ */ d.jsx(eo, { className: "truncate", children: /* @__PURE__ */ d.jsx(
            "span",
            {
              id: n.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: o
            }
          ) }),
          /* @__PURE__ */ d.jsx(_r, { children: /* @__PURE__ */ d.jsx("p", { children: o }) })
        ] })
      ]
    }
  ) });
}, TW = ({ label: e, icon: t, sublinks: n, pathname: r, Link: o }) => {
  const [a, s] = Z(!1), [i, c] = Z(!1), { isExpanded: l } = Zc(), u = q(null), f = () => c((h) => !h), p = e.replaceAll(" ", "_");
  return J(() => {
    const h = () => {
      const m = u.current.querySelector(`#${p}`);
      if (m) {
        const v = m.offsetWidth < m.scrollWidth;
        s(v);
      }
    };
    return window.addEventListener("resize", h), h(), () => window.removeEventListener("resize", h);
  }, [e]), o ? /* @__PURE__ */ d.jsxs(Qr, { delayDuration: 180, children: [
    /* @__PURE__ */ d.jsxs(
      "div",
      {
        ref: u,
        onClick: f,
        className: `cursor-pointer border-2 border-transparent grid grid-rows-1 ${l ? "grid-cols-8 justify-center h-[42px]" : "grid-cols-2 justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 select-none`,
        children: [
          /* @__PURE__ */ d.jsxs("div", { className: `flex w-full justify-start items-center ${l ? "col-span-7" : "col-span-1"}`, children: [
            /* @__PURE__ */ d.jsx("div", { children: t }),
            !a && l && /* @__PURE__ */ d.jsx(
              "span",
              {
                id: p,
                className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                children: e
              }
            ),
            a && l && /* @__PURE__ */ d.jsxs(Jr, { children: [
              /* @__PURE__ */ d.jsx(eo, { className: "truncate", children: /* @__PURE__ */ d.jsx(
                "span",
                {
                  id: p,
                  className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                  children: e
                }
              ) }),
              /* @__PURE__ */ d.jsx(_r, { children: /* @__PURE__ */ d.jsx("p", { children: e }) })
            ] })
          ] }),
          /* @__PURE__ */ d.jsx("div", { className: "col-span-1 w-fit", children: i ? /* @__PURE__ */ d.jsx($p, { className: "justify-self-end dark:text-white", size: 20 }) : /* @__PURE__ */ d.jsx(Ta, { className: "justify-self-end dark:text-white", size: 20 }) })
        ]
      }
    ),
    /* @__PURE__ */ d.jsx("ul", { className: `${i ? "block" : "hidden"} space-y-2`, children: n.map((h) => /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsx(
      Lm,
      {
        ...h,
        Link: o,
        pathname: r,
        isExpanded: l
      }
    ) }, h.to)) })
  ] }) : /* @__PURE__ */ d.jsxs(Qr, { delayDuration: 180, children: [
    /* @__PURE__ */ d.jsxs(
      "div",
      {
        ref: u,
        onClick: f,
        className: `cursor-pointer border-2 border-transparent grid grid-rows-1 ${l ? "grid-cols-8 justify-center h-[42px]" : "grid-cols-2 justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 select-none`,
        children: [
          /* @__PURE__ */ d.jsxs("div", { className: `flex w-full justify-start items-center ${l ? "col-span-7" : "col-span-1"}`, children: [
            /* @__PURE__ */ d.jsx("div", { children: t }),
            !a && l && /* @__PURE__ */ d.jsx(
              "span",
              {
                id: p,
                className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                children: e
              }
            ),
            a && l && /* @__PURE__ */ d.jsxs(Jr, { children: [
              /* @__PURE__ */ d.jsx(eo, { className: "truncate", children: /* @__PURE__ */ d.jsx(
                "span",
                {
                  id: p,
                  className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                  children: e
                }
              ) }),
              /* @__PURE__ */ d.jsx(_r, { children: /* @__PURE__ */ d.jsx("p", { children: e }) })
            ] })
          ] }),
          /* @__PURE__ */ d.jsx("div", { className: "col-span-1 w-fit", children: i ? /* @__PURE__ */ d.jsx($p, { className: "justify-self-end dark:text-white", size: 20 }) : /* @__PURE__ */ d.jsx(Ta, { className: "justify-self-end dark:text-white", size: 20 }) })
        ]
      }
    ),
    /* @__PURE__ */ d.jsx("ul", { className: `${i ? "block" : "hidden"} space-y-2`, children: n.map((h) => /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsx(
      Lm,
      {
        ...h,
        pathname: r,
        isExpanded: l
      }
    ) }, h.to)) })
  ] });
}, cr = Wt({
  data: [],
  filters: [],
  queries: [],
  columns: [],
  isFormatedUpperQueries: !0,
  showFilters: !0,
  searchForm: null,
  multiSelectedItems: [],
  limitOfMultiSelect: 0,
  setMultiItemsSelected: () => {
  },
  onSubmitTable: null,
  setSearchForm: () => {
  },
  setSelectItem: () => {
  },
  getGlobalFilters: () => {
  },
  resetOptionsByFilter: () => {
  },
  pagination: {
    limit: 5,
    page: 1,
    labels: { plural: "Items", single: "Item" },
    hasPrevPage: !1,
    hasNextPage: !1
  }
});
function jW() {
  var o;
  const { pagination: e, updateLimit: t, nextPage: n, prevPage: r } = ct(cr);
  return /* @__PURE__ */ d.jsx("div", { className: "flex flex-wrap items-center justify-end", children: /* @__PURE__ */ d.jsxs("div", { className: "flex items-end sm:items-center space-x-6 lg:space-x-8 mt-2 sm:mt-0", children: [
    /* @__PURE__ */ d.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ d.jsxs("p", { className: "text-sm font-medium", children: [
        ((o = e == null ? void 0 : e.labels) == null ? void 0 : o.plural) || "Items",
        " por Pagina"
      ] }),
      /* @__PURE__ */ d.jsxs(
        Ef,
        {
          value: `${e.limit}`,
          onValueChange: (a) => {
            t(Number(a), 1);
          },
          children: [
            /* @__PURE__ */ d.jsx(Ic, { className: "h-8 w-[70px]", children: /* @__PURE__ */ d.jsx(Pf, { placeholder: e.limit }) }),
            /* @__PURE__ */ d.jsx(Lc, { side: "top", children: [5, 10, 15, 20].map((a) => /* @__PURE__ */ d.jsx(Fc, { value: `${a}`, children: a }, a)) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ d.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ d.jsxs(
        Ve,
        {
          type: "button",
          variant: "outline",
          className: "h-8 w-8 p-0",
          onClick: () => r(),
          disabled: !e.hasPrevPage,
          children: [
            /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "Pagina Anterior" }),
            /* @__PURE__ */ d.jsx(cc, { className: "h-4 w-4" })
          ]
        }
      ),
      /* @__PURE__ */ d.jsx("div", { children: /* @__PURE__ */ d.jsxs("p", { className: "text-sm font-medium", children: [
        "Pagina ",
        e.page
      ] }) }),
      /* @__PURE__ */ d.jsxs(
        Ve,
        {
          type: "button",
          variant: "outline",
          className: "h-8 w-8 p-0",
          onClick: () => n(),
          disabled: !e.hasNextPage,
          children: [
            /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "Siguiente Pagina" }),
            /* @__PURE__ */ d.jsx(Pr, { className: "h-4 w-4" })
          ]
        }
      )
    ] })
  ] }) });
}
const _1 = () => {
  const { columns: e } = ct(cr);
  return /* @__PURE__ */ d.jsx(P0, { className: "bg-brand-primary-lighter", children: /* @__PURE__ */ d.jsx(Wc, { children: e.length > 0 && e.map((t, n) => /* @__PURE__ */ d.jsx(T0, { className: "text-brand-text", children: t.label }, `${t.id}-${n}`)) }) });
}, hq = (e) => {
  const t = (e == null ? void 0 : e.hasNextPage) ?? !1, n = (e == null ? void 0 : e.hasPrevPage) ?? !1, r = (e == null ? void 0 : e.limit) ?? 10, o = (e == null ? void 0 : e.page) ?? 1;
  return { hasNextPage: t, hasPrevPage: n, limit: r, page: o, labels: { plural: "Items", single: "Item" } };
}, ua = (e) => e.replace(/[A-Z]/g, (t) => `_${t.toLowerCase()}`).toUpperCase(), mq = { limit: 10, page: 1 }, Fm = () => ("10000000-1000-4000-8000" + -1e11).replace(
  /[018]/g,
  (e) => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)
), vq = (e, t) => [
  ...t.slice(0, t.length - 1),
  e,
  ...t.slice(t.length - 1)
], kW = ({ colSpan: e }) => /* @__PURE__ */ d.jsx(Wc, { children: /* @__PURE__ */ d.jsx(Mf, { colSpan: e, className: "h-24 text-center", children: "Sin Resultados" }) }), MW = ({
  data: e,
  columns: t,
  setSelectItem: n,
  setMultiItemsSelected: r,
  multiItemsSelected: o,
  limitOfMultiSelect: a,
  itemsSelectedCount: s,
  setItemsSelectedCount: i
}) => {
  const c = (l, u) => {
    const f = () => {
      const p = o ? o.some(
        (h) => h.id === u.id
      ) : !1;
      if (o.length === a && !p) {
        console.log("NO puedes seleccionar más elementos.");
        return;
      }
      if (p) {
        const h = o.filter(
          (m) => m.id !== u.id
        );
        r(h), i(s - 1);
      } else {
        const h = [
          ...o,
          { ...u, isSelected: !0 }
        ];
        r(h), i(s + 1);
      }
    };
    return l != null && l.render ? /* @__PURE__ */ d.jsx("div", { children: l.render(u) }) : l.id === "select" ? /* @__PURE__ */ d.jsx(
      Ve,
      {
        onClick: () => n(u),
        variant: "outline",
        size: "icon",
        type: "button",
        children: /* @__PURE__ */ d.jsx(_W, { size: 18 })
      }
    ) : l.id === "multi-select" ? /* @__PURE__ */ d.jsx(
      Hy,
      {
        className: "border-slate-500 data-[state=checked]:bg-brand-primary-lighter",
        onClick: () => {
          o && f();
        },
        checked: o ? o.some(
          (p) => p.id === u.id
        ) : !1,
        disabled: s === a && !s
      }
    ) : /* @__PURE__ */ d.jsx(d.Fragment, { children: u[l.id] });
  };
  return /* @__PURE__ */ d.jsx(d.Fragment, { children: e.map((l) => /* @__PURE__ */ d.jsx(Wc, { children: t.map((u) => /* @__PURE__ */ d.jsx(Mf, { children: c(u, l) }, Fm())) }, Fm())) });
}, C1 = () => {
  const {
    data: e,
    columns: t,
    setSelectItem: n,
    setMultiItemsSelected: r,
    multiItemsSelected: o,
    limitOfMultiSelect: a
  } = ct(cr), [s, i] = Z(
    o ? o.length : 0
  );
  return /* @__PURE__ */ d.jsx(O0, { className: "bg-card", children: e.length ? /* @__PURE__ */ d.jsx(
    MW,
    {
      setMultiItemsSelected: r,
      setSelectItem: n,
      setItemsSelectedCount: i,
      itemsSelectedCount: s,
      data: e,
      multiItemsSelected: o,
      columns: t,
      limitOfMultiSelect: a
    }
  ) : /* @__PURE__ */ d.jsx(kW, { colSpan: t.length }) });
}, DW = () => /* @__PURE__ */ d.jsxs(kf, { children: [
  /* @__PURE__ */ d.jsx(_1, {}),
  /* @__PURE__ */ d.jsx(C1, {})
] }), AW = () => /* @__PURE__ */ d.jsx("span", { className: "loader-fade-dot" }), RW = () => /* @__PURE__ */ d.jsxs("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: [
  /* @__PURE__ */ d.jsx(AW, {}),
  /* @__PURE__ */ d.jsx("h6", { className: "font-semibold", children: "Cargando..." })
] });
var Bm = function(e, t, n) {
  if (e && "reportValidity" in e) {
    var r = he(n, t);
    e.setCustomValidity(r && r.message || ""), e.reportValidity();
  }
}, S1 = function(e, t) {
  var n = function(o) {
    var a = t.fields[o];
    a && a.ref && "reportValidity" in a.ref ? Bm(a.ref, o, e) : a.refs && a.refs.forEach(function(s) {
      return Bm(s, o, e);
    });
  };
  for (var r in t.fields)
    n(r);
}, IW = function(e, t) {
  t.shouldUseNativeValidation && S1(e, t);
  var n = {};
  for (var r in e) {
    var o = he(t.fields, r), a = Object.assign(e[r] || {}, { ref: o && o.ref });
    if (LW(t.names || Object.keys(e), r)) {
      var s = Object.assign({}, he(n, r));
      Ze(s, "root", a), Ze(n, r, s);
    } else
      Ze(n, r, a);
  }
  return n;
}, LW = function(e, t) {
  return e.some(function(n) {
    return n.startsWith(t + ".");
  });
}, FW = function(e, t) {
  for (var n = {}; e.length; ) {
    var r = e[0], o = r.code, a = r.message, s = r.path.join(".");
    if (!n[s])
      if ("unionErrors" in r) {
        var i = r.unionErrors[0].errors[0];
        n[s] = { message: i.message, type: i.code };
      } else
        n[s] = { message: a, type: o };
    if ("unionErrors" in r && r.unionErrors.forEach(function(u) {
      return u.errors.forEach(function(f) {
        return e.push(f);
      });
    }), t) {
      var c = n[s].types, l = c && c[r.code];
      n[s] = ey(s, t, n, o, l ? [].concat(l, r.message) : r.message);
    }
    e.shift();
  }
  return n;
}, N1 = function(e, t, n) {
  return n === void 0 && (n = {}), function(r, o, a) {
    try {
      return Promise.resolve(function(s, i) {
        try {
          var c = Promise.resolve(e[n.mode === "sync" ? "parse" : "parseAsync"](r, t)).then(function(l) {
            return a.shouldUseNativeValidation && S1({}, a), { errors: {}, values: n.raw ? r : l };
          });
        } catch (l) {
          return i(l);
        }
        return c && c.then ? c.then(void 0, i) : c;
      }(0, function(s) {
        if (function(i) {
          return i.errors != null;
        }(s))
          return { values: {}, errors: IW(FW(s.errors, !a.shouldUseNativeValidation && a.criteriaMode === "all"), a) };
        throw s;
      }));
    } catch (s) {
      return Promise.reject(s);
    }
  };
}, Ue;
(function(e) {
  e.assertEqual = (o) => o;
  function t(o) {
  }
  e.assertIs = t;
  function n(o) {
    throw new Error();
  }
  e.assertNever = n, e.arrayToEnum = (o) => {
    const a = {};
    for (const s of o)
      a[s] = s;
    return a;
  }, e.getValidEnumValues = (o) => {
    const a = e.objectKeys(o).filter((i) => typeof o[o[i]] != "number"), s = {};
    for (const i of a)
      s[i] = o[i];
    return e.objectValues(s);
  }, e.objectValues = (o) => e.objectKeys(o).map(function(a) {
    return o[a];
  }), e.objectKeys = typeof Object.keys == "function" ? (o) => Object.keys(o) : (o) => {
    const a = [];
    for (const s in o)
      Object.prototype.hasOwnProperty.call(o, s) && a.push(s);
    return a;
  }, e.find = (o, a) => {
    for (const s of o)
      if (a(s))
        return s;
  }, e.isInteger = typeof Number.isInteger == "function" ? (o) => Number.isInteger(o) : (o) => typeof o == "number" && isFinite(o) && Math.floor(o) === o;
  function r(o, a = " | ") {
    return o.map((s) => typeof s == "string" ? `'${s}'` : s).join(a);
  }
  e.joinValues = r, e.jsonStringifyReplacer = (o, a) => typeof a == "bigint" ? a.toString() : a;
})(Ue || (Ue = {}));
var qu;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(qu || (qu = {}));
const $e = Ue.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), vr = (e) => {
  switch (typeof e) {
    case "undefined":
      return $e.undefined;
    case "string":
      return $e.string;
    case "number":
      return isNaN(e) ? $e.nan : $e.number;
    case "boolean":
      return $e.boolean;
    case "function":
      return $e.function;
    case "bigint":
      return $e.bigint;
    case "symbol":
      return $e.symbol;
    case "object":
      return Array.isArray(e) ? $e.array : e === null ? $e.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? $e.promise : typeof Map < "u" && e instanceof Map ? $e.map : typeof Set < "u" && e instanceof Set ? $e.set : typeof Date < "u" && e instanceof Date ? $e.date : $e.object;
    default:
      return $e.unknown;
  }
}, ie = Ue.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]), BW = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class qt extends Error {
  constructor(t) {
    super(), this.issues = [], this.addIssue = (r) => {
      this.issues = [...this.issues, r];
    }, this.addIssues = (r = []) => {
      this.issues = [...this.issues, ...r];
    };
    const n = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, n) : this.__proto__ = n, this.name = "ZodError", this.issues = t;
  }
  get errors() {
    return this.issues;
  }
  format(t) {
    const n = t || function(a) {
      return a.message;
    }, r = { _errors: [] }, o = (a) => {
      for (const s of a.issues)
        if (s.code === "invalid_union")
          s.unionErrors.map(o);
        else if (s.code === "invalid_return_type")
          o(s.returnTypeError);
        else if (s.code === "invalid_arguments")
          o(s.argumentsError);
        else if (s.path.length === 0)
          r._errors.push(n(s));
        else {
          let i = r, c = 0;
          for (; c < s.path.length; ) {
            const l = s.path[c];
            c === s.path.length - 1 ? (i[l] = i[l] || { _errors: [] }, i[l]._errors.push(n(s))) : i[l] = i[l] || { _errors: [] }, i = i[l], c++;
          }
        }
    };
    return o(this), r;
  }
  static assert(t) {
    if (!(t instanceof qt))
      throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, Ue.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (n) => n.message) {
    const n = {}, r = [];
    for (const o of this.issues)
      o.path.length > 0 ? (n[o.path[0]] = n[o.path[0]] || [], n[o.path[0]].push(t(o))) : r.push(t(o));
    return { formErrors: r, fieldErrors: n };
  }
  get formErrors() {
    return this.flatten();
  }
}
qt.create = (e) => new qt(e);
const Wo = (e, t) => {
  let n;
  switch (e.code) {
    case ie.invalid_type:
      e.received === $e.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
      break;
    case ie.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, Ue.jsonStringifyReplacer)}`;
      break;
    case ie.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${Ue.joinValues(e.keys, ", ")}`;
      break;
    case ie.invalid_union:
      n = "Invalid input";
      break;
    case ie.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${Ue.joinValues(e.options)}`;
      break;
    case ie.invalid_enum_value:
      n = `Invalid enum value. Expected ${Ue.joinValues(e.options)}, received '${e.received}'`;
      break;
    case ie.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case ie.invalid_return_type:
      n = "Invalid function return type";
      break;
    case ie.invalid_date:
      n = "Invalid date";
      break;
    case ie.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : Ue.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
      break;
    case ie.too_small:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : n = "Invalid input";
      break;
    case ie.too_big:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? n = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : n = "Invalid input";
      break;
    case ie.custom:
      n = "Invalid input";
      break;
    case ie.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case ie.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case ie.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = t.defaultError, Ue.assertNever(e);
  }
  return { message: n };
};
let E1 = Wo;
function VW(e) {
  E1 = e;
}
function Yi() {
  return E1;
}
const qi = (e) => {
  const { data: t, path: n, errorMaps: r, issueData: o } = e, a = [...n, ...o.path || []], s = {
    ...o,
    path: a
  };
  if (o.message !== void 0)
    return {
      ...o,
      path: a,
      message: o.message
    };
  let i = "";
  const c = r.filter((l) => !!l).slice().reverse();
  for (const l of c)
    i = l(s, { data: t, defaultError: i }).message;
  return {
    ...o,
    path: a,
    message: i
  };
}, zW = [];
function ge(e, t) {
  const n = Yi(), r = qi({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      n,
      n === Wo ? void 0 : Wo
      // then global default map
    ].filter((o) => !!o)
  });
  e.common.issues.push(r);
}
class Tt {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(t, n) {
    const r = [];
    for (const o of n) {
      if (o.status === "aborted")
        return ke;
      o.status === "dirty" && t.dirty(), r.push(o.value);
    }
    return { status: t.value, value: r };
  }
  static async mergeObjectAsync(t, n) {
    const r = [];
    for (const o of n) {
      const a = await o.key, s = await o.value;
      r.push({
        key: a,
        value: s
      });
    }
    return Tt.mergeObjectSync(t, r);
  }
  static mergeObjectSync(t, n) {
    const r = {};
    for (const o of n) {
      const { key: a, value: s } = o;
      if (a.status === "aborted" || s.status === "aborted")
        return ke;
      a.status === "dirty" && t.dirty(), s.status === "dirty" && t.dirty(), a.value !== "__proto__" && (typeof s.value < "u" || o.alwaysSet) && (r[a.value] = s.value);
    }
    return { status: t.value, value: r };
  }
}
const ke = Object.freeze({
  status: "aborted"
}), Eo = (e) => ({ status: "dirty", value: e }), Rt = (e) => ({ status: "valid", value: e }), Zu = (e) => e.status === "aborted", Xu = (e) => e.status === "dirty", Ya = (e) => e.status === "valid", Zi = (e) => typeof Promise < "u" && e instanceof Promise;
function Xi(e, t, n, r) {
  if (typeof t == "function" ? e !== t || !r : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t.get(e);
}
function P1(e, t, n, r, o) {
  if (typeof t == "function" ? e !== t || !o : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Ne;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(Ne || (Ne = {}));
var Ca, Sa;
class Fn {
  constructor(t, n, r, o) {
    this._cachedPath = [], this.parent = t, this.data = n, this._path = r, this._key = o;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Vm = (e, t) => {
  if (Ya(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const n = new qt(e.common.issues);
      return this._error = n, this._error;
    }
  };
};
function Ae(e) {
  if (!e)
    return {};
  const { errorMap: t, invalid_type_error: n, required_error: r, description: o } = e;
  if (t && (n || r))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: o } : { errorMap: (s, i) => {
    var c, l;
    const { message: u } = e;
    return s.code === "invalid_enum_value" ? { message: u ?? i.defaultError } : typeof i.data > "u" ? { message: (c = u ?? r) !== null && c !== void 0 ? c : i.defaultError } : s.code !== "invalid_type" ? { message: i.defaultError } : { message: (l = u ?? n) !== null && l !== void 0 ? l : i.defaultError };
  }, description: o };
}
class Fe {
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return vr(t.data);
  }
  _getOrReturnCtx(t, n) {
    return n || {
      common: t.parent.common,
      data: t.data,
      parsedType: vr(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new Tt(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: vr(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (Zi(n))
      throw new Error("Synchronous parse encountered promise.");
    return n;
  }
  _parseAsync(t) {
    const n = this._parse(t);
    return Promise.resolve(n);
  }
  parse(t, n) {
    const r = this.safeParse(t, n);
    if (r.success)
      return r.data;
    throw r.error;
  }
  safeParse(t, n) {
    var r;
    const o = {
      common: {
        issues: [],
        async: (r = n == null ? void 0 : n.async) !== null && r !== void 0 ? r : !1,
        contextualErrorMap: n == null ? void 0 : n.errorMap
      },
      path: (n == null ? void 0 : n.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: vr(t)
    }, a = this._parseSync({ data: t, path: o.path, parent: o });
    return Vm(o, a);
  }
  async parseAsync(t, n) {
    const r = await this.safeParseAsync(t, n);
    if (r.success)
      return r.data;
    throw r.error;
  }
  async safeParseAsync(t, n) {
    const r = {
      common: {
        issues: [],
        contextualErrorMap: n == null ? void 0 : n.errorMap,
        async: !0
      },
      path: (n == null ? void 0 : n.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: vr(t)
    }, o = this._parse({ data: t, path: r.path, parent: r }), a = await (Zi(o) ? o : Promise.resolve(o));
    return Vm(r, a);
  }
  refine(t, n) {
    const r = (o) => typeof n == "string" || typeof n > "u" ? { message: n } : typeof n == "function" ? n(o) : n;
    return this._refinement((o, a) => {
      const s = t(o), i = () => a.addIssue({
        code: ie.custom,
        ...r(o)
      });
      return typeof Promise < "u" && s instanceof Promise ? s.then((c) => c ? !0 : (i(), !1)) : s ? !0 : (i(), !1);
    });
  }
  refinement(t, n) {
    return this._refinement((r, o) => t(r) ? !0 : (o.addIssue(typeof n == "function" ? n(r, o) : n), !1));
  }
  _refinement(t) {
    return new $n({
      schema: this,
      typeName: Te.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  optional() {
    return Dn.create(this, this._def);
  }
  nullable() {
    return Er.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return hn.create(this, this._def);
  }
  promise() {
    return Ho.create(this, this._def);
  }
  or(t) {
    return Qa.create([this, t], this._def);
  }
  and(t) {
    return Ja.create(this, t, this._def);
  }
  transform(t) {
    return new $n({
      ...Ae(this._def),
      schema: this,
      typeName: Te.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new os({
      ...Ae(this._def),
      innerType: this,
      defaultValue: n,
      typeName: Te.ZodDefault
    });
  }
  brand() {
    return new Qf({
      typeName: Te.ZodBranded,
      type: this,
      ...Ae(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new as({
      ...Ae(this._def),
      innerType: this,
      catchValue: n,
      typeName: Te.ZodCatch
    });
  }
  describe(t) {
    const n = this.constructor;
    return new n({
      ...this._def,
      description: t
    });
  }
  pipe(t) {
    return As.create(this, t);
  }
  readonly() {
    return ss.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const WW = /^c[^\s-]{8,}$/i, UW = /^[0-9a-z]+$/, HW = /^[0-9A-HJKMNP-TV-Z]{26}$/, KW = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, GW = /^[a-z0-9_-]{21}$/i, YW = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, qW = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, ZW = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let zl;
const XW = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, QW = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, JW = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, O1 = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", eU = new RegExp(`^${O1}$`);
function T1(e) {
  let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`), t;
}
function tU(e) {
  return new RegExp(`^${T1(e)}$`);
}
function j1(e) {
  let t = `${O1}T${T1(e)}`;
  const n = [];
  return n.push(e.local ? "Z?" : "Z"), e.offset && n.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${n.join("|")})`, new RegExp(`^${t}$`);
}
function nU(e, t) {
  return !!((t === "v4" || !t) && XW.test(e) || (t === "v6" || !t) && QW.test(e));
}
class fn extends Fe {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== $e.string) {
      const a = this._getOrReturnCtx(t);
      return ge(a, {
        code: ie.invalid_type,
        expected: $e.string,
        received: a.parsedType
      }), ke;
    }
    const r = new Tt();
    let o;
    for (const a of this._def.checks)
      if (a.kind === "min")
        t.data.length < a.value && (o = this._getOrReturnCtx(t, o), ge(o, {
          code: ie.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), r.dirty());
      else if (a.kind === "max")
        t.data.length > a.value && (o = this._getOrReturnCtx(t, o), ge(o, {
          code: ie.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), r.dirty());
      else if (a.kind === "length") {
        const s = t.data.length > a.value, i = t.data.length < a.value;
        (s || i) && (o = this._getOrReturnCtx(t, o), s ? ge(o, {
          code: ie.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }) : i && ge(o, {
          code: ie.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }), r.dirty());
      } else if (a.kind === "email")
        qW.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "email",
          code: ie.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "emoji")
        zl || (zl = new RegExp(ZW, "u")), zl.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "emoji",
          code: ie.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "uuid")
        KW.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "uuid",
          code: ie.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "nanoid")
        GW.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "nanoid",
          code: ie.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid")
        WW.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "cuid",
          code: ie.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid2")
        UW.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "cuid2",
          code: ie.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "ulid")
        HW.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "ulid",
          code: ie.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "url")
        try {
          new URL(t.data);
        } catch {
          o = this._getOrReturnCtx(t, o), ge(o, {
            validation: "url",
            code: ie.invalid_string,
            message: a.message
          }), r.dirty();
        }
      else
        a.kind === "regex" ? (a.regex.lastIndex = 0, a.regex.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "regex",
          code: ie.invalid_string,
          message: a.message
        }), r.dirty())) : a.kind === "trim" ? t.data = t.data.trim() : a.kind === "includes" ? t.data.includes(a.value, a.position) || (o = this._getOrReturnCtx(t, o), ge(o, {
          code: ie.invalid_string,
          validation: { includes: a.value, position: a.position },
          message: a.message
        }), r.dirty()) : a.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : a.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : a.kind === "startsWith" ? t.data.startsWith(a.value) || (o = this._getOrReturnCtx(t, o), ge(o, {
          code: ie.invalid_string,
          validation: { startsWith: a.value },
          message: a.message
        }), r.dirty()) : a.kind === "endsWith" ? t.data.endsWith(a.value) || (o = this._getOrReturnCtx(t, o), ge(o, {
          code: ie.invalid_string,
          validation: { endsWith: a.value },
          message: a.message
        }), r.dirty()) : a.kind === "datetime" ? j1(a).test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          code: ie.invalid_string,
          validation: "datetime",
          message: a.message
        }), r.dirty()) : a.kind === "date" ? eU.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          code: ie.invalid_string,
          validation: "date",
          message: a.message
        }), r.dirty()) : a.kind === "time" ? tU(a).test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          code: ie.invalid_string,
          validation: "time",
          message: a.message
        }), r.dirty()) : a.kind === "duration" ? YW.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "duration",
          code: ie.invalid_string,
          message: a.message
        }), r.dirty()) : a.kind === "ip" ? nU(t.data, a.version) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "ip",
          code: ie.invalid_string,
          message: a.message
        }), r.dirty()) : a.kind === "base64" ? JW.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "base64",
          code: ie.invalid_string,
          message: a.message
        }), r.dirty()) : Ue.assertNever(a);
    return { status: r.value, value: t.data };
  }
  _regex(t, n, r) {
    return this.refinement((o) => t.test(o), {
      validation: n,
      code: ie.invalid_string,
      ...Ne.errToObj(r)
    });
  }
  _addCheck(t) {
    return new fn({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...Ne.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...Ne.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...Ne.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...Ne.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: "nanoid", ...Ne.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...Ne.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...Ne.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...Ne.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: "base64", ...Ne.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...Ne.errToObj(t) });
  }
  datetime(t) {
    var n, r;
    return typeof t == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      local: !1,
      message: t
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision,
      offset: (n = t == null ? void 0 : t.offset) !== null && n !== void 0 ? n : !1,
      local: (r = t == null ? void 0 : t.local) !== null && r !== void 0 ? r : !1,
      ...Ne.errToObj(t == null ? void 0 : t.message)
    });
  }
  date(t) {
    return this._addCheck({ kind: "date", message: t });
  }
  time(t) {
    return typeof t == "string" ? this._addCheck({
      kind: "time",
      precision: null,
      message: t
    }) : this._addCheck({
      kind: "time",
      precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision,
      ...Ne.errToObj(t == null ? void 0 : t.message)
    });
  }
  duration(t) {
    return this._addCheck({ kind: "duration", ...Ne.errToObj(t) });
  }
  regex(t, n) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...Ne.errToObj(n)
    });
  }
  includes(t, n) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: n == null ? void 0 : n.position,
      ...Ne.errToObj(n == null ? void 0 : n.message)
    });
  }
  startsWith(t, n) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...Ne.errToObj(n)
    });
  }
  endsWith(t, n) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...Ne.errToObj(n)
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...Ne.errToObj(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...Ne.errToObj(n)
    });
  }
  length(t, n) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...Ne.errToObj(n)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(t) {
    return this.min(1, Ne.errToObj(t));
  }
  trim() {
    return new fn({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new fn({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new fn({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((t) => t.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((t) => t.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((t) => t.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((t) => t.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((t) => t.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((t) => t.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((t) => t.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((t) => t.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((t) => t.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((t) => t.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((t) => t.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((t) => t.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((t) => t.kind === "ip");
  }
  get isBase64() {
    return !!this._def.checks.find((t) => t.kind === "base64");
  }
  get minLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
fn.create = (e) => {
  var t;
  return new fn({
    checks: [],
    typeName: Te.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...Ae(e)
  });
};
function rU(e, t) {
  const n = (e.toString().split(".")[1] || "").length, r = (t.toString().split(".")[1] || "").length, o = n > r ? n : r, a = parseInt(e.toFixed(o).replace(".", "")), s = parseInt(t.toFixed(o).replace(".", ""));
  return a % s / Math.pow(10, o);
}
class Cr extends Fe {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== $e.number) {
      const a = this._getOrReturnCtx(t);
      return ge(a, {
        code: ie.invalid_type,
        expected: $e.number,
        received: a.parsedType
      }), ke;
    }
    let r;
    const o = new Tt();
    for (const a of this._def.checks)
      a.kind === "int" ? Ue.isInteger(t.data) || (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ie.invalid_type,
        expected: "integer",
        received: "float",
        message: a.message
      }), o.dirty()) : a.kind === "min" ? (a.inclusive ? t.data < a.value : t.data <= a.value) && (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ie.too_small,
        minimum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), o.dirty()) : a.kind === "max" ? (a.inclusive ? t.data > a.value : t.data >= a.value) && (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ie.too_big,
        maximum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), o.dirty()) : a.kind === "multipleOf" ? rU(t.data, a.value) !== 0 && (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ie.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), o.dirty()) : a.kind === "finite" ? Number.isFinite(t.data) || (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ie.not_finite,
        message: a.message
      }), o.dirty()) : Ue.assertNever(a);
    return { status: o.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, Ne.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, Ne.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, Ne.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, Ne.toString(n));
  }
  setLimit(t, n, r, o) {
    return new Cr({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: Ne.toString(o)
        }
      ]
    });
  }
  _addCheck(t) {
    return new Cr({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: Ne.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: Ne.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: Ne.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: Ne.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: Ne.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: Ne.toString(n)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: Ne.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: Ne.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: Ne.toString(t)
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
  get isInt() {
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && Ue.isInteger(t.value));
  }
  get isFinite() {
    let t = null, n = null;
    for (const r of this._def.checks) {
      if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf")
        return !0;
      r.kind === "min" ? (n === null || r.value > n) && (n = r.value) : r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    }
    return Number.isFinite(n) && Number.isFinite(t);
  }
}
Cr.create = (e) => new Cr({
  checks: [],
  typeName: Te.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...Ae(e)
});
class Sr extends Fe {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== $e.bigint) {
      const a = this._getOrReturnCtx(t);
      return ge(a, {
        code: ie.invalid_type,
        expected: $e.bigint,
        received: a.parsedType
      }), ke;
    }
    let r;
    const o = new Tt();
    for (const a of this._def.checks)
      a.kind === "min" ? (a.inclusive ? t.data < a.value : t.data <= a.value) && (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ie.too_small,
        type: "bigint",
        minimum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), o.dirty()) : a.kind === "max" ? (a.inclusive ? t.data > a.value : t.data >= a.value) && (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ie.too_big,
        type: "bigint",
        maximum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), o.dirty()) : a.kind === "multipleOf" ? t.data % a.value !== BigInt(0) && (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ie.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), o.dirty()) : Ue.assertNever(a);
    return { status: o.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, Ne.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, Ne.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, Ne.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, Ne.toString(n));
  }
  setLimit(t, n, r, o) {
    return new Sr({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: Ne.toString(o)
        }
      ]
    });
  }
  _addCheck(t) {
    return new Sr({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: Ne.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: Ne.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: Ne.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: Ne.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: Ne.toString(n)
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
Sr.create = (e) => {
  var t;
  return new Sr({
    checks: [],
    typeName: Te.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...Ae(e)
  });
};
class qa extends Fe {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== $e.boolean) {
      const r = this._getOrReturnCtx(t);
      return ge(r, {
        code: ie.invalid_type,
        expected: $e.boolean,
        received: r.parsedType
      }), ke;
    }
    return Rt(t.data);
  }
}
qa.create = (e) => new qa({
  typeName: Te.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...Ae(e)
});
class to extends Fe {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== $e.date) {
      const a = this._getOrReturnCtx(t);
      return ge(a, {
        code: ie.invalid_type,
        expected: $e.date,
        received: a.parsedType
      }), ke;
    }
    if (isNaN(t.data.getTime())) {
      const a = this._getOrReturnCtx(t);
      return ge(a, {
        code: ie.invalid_date
      }), ke;
    }
    const r = new Tt();
    let o;
    for (const a of this._def.checks)
      a.kind === "min" ? t.data.getTime() < a.value && (o = this._getOrReturnCtx(t, o), ge(o, {
        code: ie.too_small,
        message: a.message,
        inclusive: !0,
        exact: !1,
        minimum: a.value,
        type: "date"
      }), r.dirty()) : a.kind === "max" ? t.data.getTime() > a.value && (o = this._getOrReturnCtx(t, o), ge(o, {
        code: ie.too_big,
        message: a.message,
        inclusive: !0,
        exact: !1,
        maximum: a.value,
        type: "date"
      }), r.dirty()) : Ue.assertNever(a);
    return {
      status: r.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new to({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: Ne.toString(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: Ne.toString(n)
    });
  }
  get minDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
  get maxDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
}
to.create = (e) => new to({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: Te.ZodDate,
  ...Ae(e)
});
class Qi extends Fe {
  _parse(t) {
    if (this._getType(t) !== $e.symbol) {
      const r = this._getOrReturnCtx(t);
      return ge(r, {
        code: ie.invalid_type,
        expected: $e.symbol,
        received: r.parsedType
      }), ke;
    }
    return Rt(t.data);
  }
}
Qi.create = (e) => new Qi({
  typeName: Te.ZodSymbol,
  ...Ae(e)
});
class Za extends Fe {
  _parse(t) {
    if (this._getType(t) !== $e.undefined) {
      const r = this._getOrReturnCtx(t);
      return ge(r, {
        code: ie.invalid_type,
        expected: $e.undefined,
        received: r.parsedType
      }), ke;
    }
    return Rt(t.data);
  }
}
Za.create = (e) => new Za({
  typeName: Te.ZodUndefined,
  ...Ae(e)
});
class Xa extends Fe {
  _parse(t) {
    if (this._getType(t) !== $e.null) {
      const r = this._getOrReturnCtx(t);
      return ge(r, {
        code: ie.invalid_type,
        expected: $e.null,
        received: r.parsedType
      }), ke;
    }
    return Rt(t.data);
  }
}
Xa.create = (e) => new Xa({
  typeName: Te.ZodNull,
  ...Ae(e)
});
class Uo extends Fe {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return Rt(t.data);
  }
}
Uo.create = (e) => new Uo({
  typeName: Te.ZodAny,
  ...Ae(e)
});
class Gr extends Fe {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return Rt(t.data);
  }
}
Gr.create = (e) => new Gr({
  typeName: Te.ZodUnknown,
  ...Ae(e)
});
class or extends Fe {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return ge(n, {
      code: ie.invalid_type,
      expected: $e.never,
      received: n.parsedType
    }), ke;
  }
}
or.create = (e) => new or({
  typeName: Te.ZodNever,
  ...Ae(e)
});
class Ji extends Fe {
  _parse(t) {
    if (this._getType(t) !== $e.undefined) {
      const r = this._getOrReturnCtx(t);
      return ge(r, {
        code: ie.invalid_type,
        expected: $e.void,
        received: r.parsedType
      }), ke;
    }
    return Rt(t.data);
  }
}
Ji.create = (e) => new Ji({
  typeName: Te.ZodVoid,
  ...Ae(e)
});
class hn extends Fe {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t), o = this._def;
    if (n.parsedType !== $e.array)
      return ge(n, {
        code: ie.invalid_type,
        expected: $e.array,
        received: n.parsedType
      }), ke;
    if (o.exactLength !== null) {
      const s = n.data.length > o.exactLength.value, i = n.data.length < o.exactLength.value;
      (s || i) && (ge(n, {
        code: s ? ie.too_big : ie.too_small,
        minimum: i ? o.exactLength.value : void 0,
        maximum: s ? o.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: o.exactLength.message
      }), r.dirty());
    }
    if (o.minLength !== null && n.data.length < o.minLength.value && (ge(n, {
      code: ie.too_small,
      minimum: o.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: o.minLength.message
    }), r.dirty()), o.maxLength !== null && n.data.length > o.maxLength.value && (ge(n, {
      code: ie.too_big,
      maximum: o.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: o.maxLength.message
    }), r.dirty()), n.common.async)
      return Promise.all([...n.data].map((s, i) => o.type._parseAsync(new Fn(n, s, n.path, i)))).then((s) => Tt.mergeArray(r, s));
    const a = [...n.data].map((s, i) => o.type._parseSync(new Fn(n, s, n.path, i)));
    return Tt.mergeArray(r, a);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new hn({
      ...this._def,
      minLength: { value: t, message: Ne.toString(n) }
    });
  }
  max(t, n) {
    return new hn({
      ...this._def,
      maxLength: { value: t, message: Ne.toString(n) }
    });
  }
  length(t, n) {
    return new hn({
      ...this._def,
      exactLength: { value: t, message: Ne.toString(n) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
hn.create = (e, t) => new hn({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: Te.ZodArray,
  ...Ae(t)
});
function So(e) {
  if (e instanceof pt) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = Dn.create(So(r));
    }
    return new pt({
      ...e._def,
      shape: () => t
    });
  } else
    return e instanceof hn ? new hn({
      ...e._def,
      type: So(e.element)
    }) : e instanceof Dn ? Dn.create(So(e.unwrap())) : e instanceof Er ? Er.create(So(e.unwrap())) : e instanceof Bn ? Bn.create(e.items.map((t) => So(t))) : e;
}
class pt extends Fe {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), n = Ue.objectKeys(t);
    return this._cached = { shape: t, keys: n };
  }
  _parse(t) {
    if (this._getType(t) !== $e.object) {
      const l = this._getOrReturnCtx(t);
      return ge(l, {
        code: ie.invalid_type,
        expected: $e.object,
        received: l.parsedType
      }), ke;
    }
    const { status: r, ctx: o } = this._processInputParams(t), { shape: a, keys: s } = this._getCached(), i = [];
    if (!(this._def.catchall instanceof or && this._def.unknownKeys === "strip"))
      for (const l in o.data)
        s.includes(l) || i.push(l);
    const c = [];
    for (const l of s) {
      const u = a[l], f = o.data[l];
      c.push({
        key: { status: "valid", value: l },
        value: u._parse(new Fn(o, f, o.path, l)),
        alwaysSet: l in o.data
      });
    }
    if (this._def.catchall instanceof or) {
      const l = this._def.unknownKeys;
      if (l === "passthrough")
        for (const u of i)
          c.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: o.data[u] }
          });
      else if (l === "strict")
        i.length > 0 && (ge(o, {
          code: ie.unrecognized_keys,
          keys: i
        }), r.dirty());
      else if (l !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const l = this._def.catchall;
      for (const u of i) {
        const f = o.data[u];
        c.push({
          key: { status: "valid", value: u },
          value: l._parse(
            new Fn(o, f, o.path, u)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: u in o.data
        });
      }
    }
    return o.common.async ? Promise.resolve().then(async () => {
      const l = [];
      for (const u of c) {
        const f = await u.key, p = await u.value;
        l.push({
          key: f,
          value: p,
          alwaysSet: u.alwaysSet
        });
      }
      return l;
    }).then((l) => Tt.mergeObjectSync(r, l)) : Tt.mergeObjectSync(r, c);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return Ne.errToObj, new pt({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (n, r) => {
          var o, a, s, i;
          const c = (s = (a = (o = this._def).errorMap) === null || a === void 0 ? void 0 : a.call(o, n, r).message) !== null && s !== void 0 ? s : r.defaultError;
          return n.code === "unrecognized_keys" ? {
            message: (i = Ne.errToObj(t).message) !== null && i !== void 0 ? i : c
          } : {
            message: c
          };
        }
      } : {}
    });
  }
  strip() {
    return new pt({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new pt({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(t) {
    return new pt({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...t
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(t) {
    return new pt({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: Te.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(t, n) {
    return this.augment({ [t]: n });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(t) {
    return new pt({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const n = {};
    return Ue.objectKeys(t).forEach((r) => {
      t[r] && this.shape[r] && (n[r] = this.shape[r]);
    }), new pt({
      ...this._def,
      shape: () => n
    });
  }
  omit(t) {
    const n = {};
    return Ue.objectKeys(this.shape).forEach((r) => {
      t[r] || (n[r] = this.shape[r]);
    }), new pt({
      ...this._def,
      shape: () => n
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return So(this);
  }
  partial(t) {
    const n = {};
    return Ue.objectKeys(this.shape).forEach((r) => {
      const o = this.shape[r];
      t && !t[r] ? n[r] = o : n[r] = o.optional();
    }), new pt({
      ...this._def,
      shape: () => n
    });
  }
  required(t) {
    const n = {};
    return Ue.objectKeys(this.shape).forEach((r) => {
      if (t && !t[r])
        n[r] = this.shape[r];
      else {
        let a = this.shape[r];
        for (; a instanceof Dn; )
          a = a._def.innerType;
        n[r] = a;
      }
    }), new pt({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return k1(Ue.objectKeys(this.shape));
  }
}
pt.create = (e, t) => new pt({
  shape: () => e,
  unknownKeys: "strip",
  catchall: or.create(),
  typeName: Te.ZodObject,
  ...Ae(t)
});
pt.strictCreate = (e, t) => new pt({
  shape: () => e,
  unknownKeys: "strict",
  catchall: or.create(),
  typeName: Te.ZodObject,
  ...Ae(t)
});
pt.lazycreate = (e, t) => new pt({
  shape: e,
  unknownKeys: "strip",
  catchall: or.create(),
  typeName: Te.ZodObject,
  ...Ae(t)
});
class Qa extends Fe {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = this._def.options;
    function o(a) {
      for (const i of a)
        if (i.result.status === "valid")
          return i.result;
      for (const i of a)
        if (i.result.status === "dirty")
          return n.common.issues.push(...i.ctx.common.issues), i.result;
      const s = a.map((i) => new qt(i.ctx.common.issues));
      return ge(n, {
        code: ie.invalid_union,
        unionErrors: s
      }), ke;
    }
    if (n.common.async)
      return Promise.all(r.map(async (a) => {
        const s = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await a._parseAsync({
            data: n.data,
            path: n.path,
            parent: s
          }),
          ctx: s
        };
      })).then(o);
    {
      let a;
      const s = [];
      for (const c of r) {
        const l = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        }, u = c._parseSync({
          data: n.data,
          path: n.path,
          parent: l
        });
        if (u.status === "valid")
          return u;
        u.status === "dirty" && !a && (a = { result: u, ctx: l }), l.common.issues.length && s.push(l.common.issues);
      }
      if (a)
        return n.common.issues.push(...a.ctx.common.issues), a.result;
      const i = s.map((c) => new qt(c));
      return ge(n, {
        code: ie.invalid_union,
        unionErrors: i
      }), ke;
    }
  }
  get options() {
    return this._def.options;
  }
}
Qa.create = (e, t) => new Qa({
  options: e,
  typeName: Te.ZodUnion,
  ...Ae(t)
});
const Zn = (e) => e instanceof ts ? Zn(e.schema) : e instanceof $n ? Zn(e.innerType()) : e instanceof ns ? [e.value] : e instanceof Nr ? e.options : e instanceof rs ? Ue.objectValues(e.enum) : e instanceof os ? Zn(e._def.innerType) : e instanceof Za ? [void 0] : e instanceof Xa ? [null] : e instanceof Dn ? [void 0, ...Zn(e.unwrap())] : e instanceof Er ? [null, ...Zn(e.unwrap())] : e instanceof Qf || e instanceof ss ? Zn(e.unwrap()) : e instanceof as ? Zn(e._def.innerType) : [];
class Xc extends Fe {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== $e.object)
      return ge(n, {
        code: ie.invalid_type,
        expected: $e.object,
        received: n.parsedType
      }), ke;
    const r = this.discriminator, o = n.data[r], a = this.optionsMap.get(o);
    return a ? n.common.async ? a._parseAsync({
      data: n.data,
      path: n.path,
      parent: n
    }) : a._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }) : (ge(n, {
      code: ie.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [r]
    }), ke);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(t, n, r) {
    const o = /* @__PURE__ */ new Map();
    for (const a of n) {
      const s = Zn(a.shape[t]);
      if (!s.length)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const i of s) {
        if (o.has(i))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(i)}`);
        o.set(i, a);
      }
    }
    return new Xc({
      typeName: Te.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: o,
      ...Ae(r)
    });
  }
}
function Qu(e, t) {
  const n = vr(e), r = vr(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === $e.object && r === $e.object) {
    const o = Ue.objectKeys(t), a = Ue.objectKeys(e).filter((i) => o.indexOf(i) !== -1), s = { ...e, ...t };
    for (const i of a) {
      const c = Qu(e[i], t[i]);
      if (!c.valid)
        return { valid: !1 };
      s[i] = c.data;
    }
    return { valid: !0, data: s };
  } else if (n === $e.array && r === $e.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const o = [];
    for (let a = 0; a < e.length; a++) {
      const s = e[a], i = t[a], c = Qu(s, i);
      if (!c.valid)
        return { valid: !1 };
      o.push(c.data);
    }
    return { valid: !0, data: o };
  } else
    return n === $e.date && r === $e.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class Ja extends Fe {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), o = (a, s) => {
      if (Zu(a) || Zu(s))
        return ke;
      const i = Qu(a.value, s.value);
      return i.valid ? ((Xu(a) || Xu(s)) && n.dirty(), { status: n.value, value: i.data }) : (ge(r, {
        code: ie.invalid_intersection_types
      }), ke);
    };
    return r.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      }),
      this._def.right._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      })
    ]).then(([a, s]) => o(a, s)) : o(this._def.left._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }), this._def.right._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }));
  }
}
Ja.create = (e, t, n) => new Ja({
  left: e,
  right: t,
  typeName: Te.ZodIntersection,
  ...Ae(n)
});
class Bn extends Fe {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== $e.array)
      return ge(r, {
        code: ie.invalid_type,
        expected: $e.array,
        received: r.parsedType
      }), ke;
    if (r.data.length < this._def.items.length)
      return ge(r, {
        code: ie.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), ke;
    !this._def.rest && r.data.length > this._def.items.length && (ge(r, {
      code: ie.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const a = [...r.data].map((s, i) => {
      const c = this._def.items[i] || this._def.rest;
      return c ? c._parse(new Fn(r, s, r.path, i)) : null;
    }).filter((s) => !!s);
    return r.common.async ? Promise.all(a).then((s) => Tt.mergeArray(n, s)) : Tt.mergeArray(n, a);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new Bn({
      ...this._def,
      rest: t
    });
  }
}
Bn.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Bn({
    items: e,
    typeName: Te.ZodTuple,
    rest: null,
    ...Ae(t)
  });
};
class es extends Fe {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== $e.object)
      return ge(r, {
        code: ie.invalid_type,
        expected: $e.object,
        received: r.parsedType
      }), ke;
    const o = [], a = this._def.keyType, s = this._def.valueType;
    for (const i in r.data)
      o.push({
        key: a._parse(new Fn(r, i, r.path, i)),
        value: s._parse(new Fn(r, r.data[i], r.path, i)),
        alwaysSet: i in r.data
      });
    return r.common.async ? Tt.mergeObjectAsync(n, o) : Tt.mergeObjectSync(n, o);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, r) {
    return n instanceof Fe ? new es({
      keyType: t,
      valueType: n,
      typeName: Te.ZodRecord,
      ...Ae(r)
    }) : new es({
      keyType: fn.create(),
      valueType: t,
      typeName: Te.ZodRecord,
      ...Ae(n)
    });
  }
}
class ec extends Fe {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== $e.map)
      return ge(r, {
        code: ie.invalid_type,
        expected: $e.map,
        received: r.parsedType
      }), ke;
    const o = this._def.keyType, a = this._def.valueType, s = [...r.data.entries()].map(([i, c], l) => ({
      key: o._parse(new Fn(r, i, r.path, [l, "key"])),
      value: a._parse(new Fn(r, c, r.path, [l, "value"]))
    }));
    if (r.common.async) {
      const i = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const c of s) {
          const l = await c.key, u = await c.value;
          if (l.status === "aborted" || u.status === "aborted")
            return ke;
          (l.status === "dirty" || u.status === "dirty") && n.dirty(), i.set(l.value, u.value);
        }
        return { status: n.value, value: i };
      });
    } else {
      const i = /* @__PURE__ */ new Map();
      for (const c of s) {
        const l = c.key, u = c.value;
        if (l.status === "aborted" || u.status === "aborted")
          return ke;
        (l.status === "dirty" || u.status === "dirty") && n.dirty(), i.set(l.value, u.value);
      }
      return { status: n.value, value: i };
    }
  }
}
ec.create = (e, t, n) => new ec({
  valueType: t,
  keyType: e,
  typeName: Te.ZodMap,
  ...Ae(n)
});
class no extends Fe {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== $e.set)
      return ge(r, {
        code: ie.invalid_type,
        expected: $e.set,
        received: r.parsedType
      }), ke;
    const o = this._def;
    o.minSize !== null && r.data.size < o.minSize.value && (ge(r, {
      code: ie.too_small,
      minimum: o.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: o.minSize.message
    }), n.dirty()), o.maxSize !== null && r.data.size > o.maxSize.value && (ge(r, {
      code: ie.too_big,
      maximum: o.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: o.maxSize.message
    }), n.dirty());
    const a = this._def.valueType;
    function s(c) {
      const l = /* @__PURE__ */ new Set();
      for (const u of c) {
        if (u.status === "aborted")
          return ke;
        u.status === "dirty" && n.dirty(), l.add(u.value);
      }
      return { status: n.value, value: l };
    }
    const i = [...r.data.values()].map((c, l) => a._parse(new Fn(r, c, r.path, l)));
    return r.common.async ? Promise.all(i).then((c) => s(c)) : s(i);
  }
  min(t, n) {
    return new no({
      ...this._def,
      minSize: { value: t, message: Ne.toString(n) }
    });
  }
  max(t, n) {
    return new no({
      ...this._def,
      maxSize: { value: t, message: Ne.toString(n) }
    });
  }
  size(t, n) {
    return this.min(t, n).max(t, n);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
no.create = (e, t) => new no({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: Te.ZodSet,
  ...Ae(t)
});
class ko extends Fe {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== $e.function)
      return ge(n, {
        code: ie.invalid_type,
        expected: $e.function,
        received: n.parsedType
      }), ke;
    function r(i, c) {
      return qi({
        data: i,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Yi(),
          Wo
        ].filter((l) => !!l),
        issueData: {
          code: ie.invalid_arguments,
          argumentsError: c
        }
      });
    }
    function o(i, c) {
      return qi({
        data: i,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Yi(),
          Wo
        ].filter((l) => !!l),
        issueData: {
          code: ie.invalid_return_type,
          returnTypeError: c
        }
      });
    }
    const a = { errorMap: n.common.contextualErrorMap }, s = n.data;
    if (this._def.returns instanceof Ho) {
      const i = this;
      return Rt(async function(...c) {
        const l = new qt([]), u = await i._def.args.parseAsync(c, a).catch((h) => {
          throw l.addIssue(r(c, h)), l;
        }), f = await Reflect.apply(s, this, u);
        return await i._def.returns._def.type.parseAsync(f, a).catch((h) => {
          throw l.addIssue(o(f, h)), l;
        });
      });
    } else {
      const i = this;
      return Rt(function(...c) {
        const l = i._def.args.safeParse(c, a);
        if (!l.success)
          throw new qt([r(c, l.error)]);
        const u = Reflect.apply(s, this, l.data), f = i._def.returns.safeParse(u, a);
        if (!f.success)
          throw new qt([o(u, f.error)]);
        return f.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...t) {
    return new ko({
      ...this._def,
      args: Bn.create(t).rest(Gr.create())
    });
  }
  returns(t) {
    return new ko({
      ...this._def,
      returns: t
    });
  }
  implement(t) {
    return this.parse(t);
  }
  strictImplement(t) {
    return this.parse(t);
  }
  static create(t, n, r) {
    return new ko({
      args: t || Bn.create([]).rest(Gr.create()),
      returns: n || Gr.create(),
      typeName: Te.ZodFunction,
      ...Ae(r)
    });
  }
}
class ts extends Fe {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
ts.create = (e, t) => new ts({
  getter: e,
  typeName: Te.ZodLazy,
  ...Ae(t)
});
class ns extends Fe {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return ge(n, {
        received: n.data,
        code: ie.invalid_literal,
        expected: this._def.value
      }), ke;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
ns.create = (e, t) => new ns({
  value: e,
  typeName: Te.ZodLiteral,
  ...Ae(t)
});
function k1(e, t) {
  return new Nr({
    values: e,
    typeName: Te.ZodEnum,
    ...Ae(t)
  });
}
class Nr extends Fe {
  constructor() {
    super(...arguments), Ca.set(this, void 0);
  }
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return ge(n, {
        expected: Ue.joinValues(r),
        received: n.parsedType,
        code: ie.invalid_type
      }), ke;
    }
    if (Xi(this, Ca) || P1(this, Ca, new Set(this._def.values)), !Xi(this, Ca).has(t.data)) {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return ge(n, {
        received: n.data,
        code: ie.invalid_enum_value,
        options: r
      }), ke;
    }
    return Rt(t.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  get Values() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  get Enum() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  extract(t, n = this._def) {
    return Nr.create(t, {
      ...this._def,
      ...n
    });
  }
  exclude(t, n = this._def) {
    return Nr.create(this.options.filter((r) => !t.includes(r)), {
      ...this._def,
      ...n
    });
  }
}
Ca = /* @__PURE__ */ new WeakMap();
Nr.create = k1;
class rs extends Fe {
  constructor() {
    super(...arguments), Sa.set(this, void 0);
  }
  _parse(t) {
    const n = Ue.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(t);
    if (r.parsedType !== $e.string && r.parsedType !== $e.number) {
      const o = Ue.objectValues(n);
      return ge(r, {
        expected: Ue.joinValues(o),
        received: r.parsedType,
        code: ie.invalid_type
      }), ke;
    }
    if (Xi(this, Sa) || P1(this, Sa, new Set(Ue.getValidEnumValues(this._def.values))), !Xi(this, Sa).has(t.data)) {
      const o = Ue.objectValues(n);
      return ge(r, {
        received: r.data,
        code: ie.invalid_enum_value,
        options: o
      }), ke;
    }
    return Rt(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
Sa = /* @__PURE__ */ new WeakMap();
rs.create = (e, t) => new rs({
  values: e,
  typeName: Te.ZodNativeEnum,
  ...Ae(t)
});
class Ho extends Fe {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== $e.promise && n.common.async === !1)
      return ge(n, {
        code: ie.invalid_type,
        expected: $e.promise,
        received: n.parsedType
      }), ke;
    const r = n.parsedType === $e.promise ? n.data : Promise.resolve(n.data);
    return Rt(r.then((o) => this._def.type.parseAsync(o, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
Ho.create = (e, t) => new Ho({
  type: e,
  typeName: Te.ZodPromise,
  ...Ae(t)
});
class $n extends Fe {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === Te.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), o = this._def.effect || null, a = {
      addIssue: (s) => {
        ge(r, s), s.fatal ? n.abort() : n.dirty();
      },
      get path() {
        return r.path;
      }
    };
    if (a.addIssue = a.addIssue.bind(a), o.type === "preprocess") {
      const s = o.transform(r.data, a);
      if (r.common.async)
        return Promise.resolve(s).then(async (i) => {
          if (n.value === "aborted")
            return ke;
          const c = await this._def.schema._parseAsync({
            data: i,
            path: r.path,
            parent: r
          });
          return c.status === "aborted" ? ke : c.status === "dirty" || n.value === "dirty" ? Eo(c.value) : c;
        });
      {
        if (n.value === "aborted")
          return ke;
        const i = this._def.schema._parseSync({
          data: s,
          path: r.path,
          parent: r
        });
        return i.status === "aborted" ? ke : i.status === "dirty" || n.value === "dirty" ? Eo(i.value) : i;
      }
    }
    if (o.type === "refinement") {
      const s = (i) => {
        const c = o.refinement(i, a);
        if (r.common.async)
          return Promise.resolve(c);
        if (c instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return i;
      };
      if (r.common.async === !1) {
        const i = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return i.status === "aborted" ? ke : (i.status === "dirty" && n.dirty(), s(i.value), { status: n.value, value: i.value });
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((i) => i.status === "aborted" ? ke : (i.status === "dirty" && n.dirty(), s(i.value).then(() => ({ status: n.value, value: i.value }))));
    }
    if (o.type === "transform")
      if (r.common.async === !1) {
        const s = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (!Ya(s))
          return s;
        const i = o.transform(s.value, a);
        if (i instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: i };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((s) => Ya(s) ? Promise.resolve(o.transform(s.value, a)).then((i) => ({ status: n.value, value: i })) : s);
    Ue.assertNever(o);
  }
}
$n.create = (e, t, n) => new $n({
  schema: e,
  typeName: Te.ZodEffects,
  effect: t,
  ...Ae(n)
});
$n.createWithPreprocess = (e, t, n) => new $n({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: Te.ZodEffects,
  ...Ae(n)
});
class Dn extends Fe {
  _parse(t) {
    return this._getType(t) === $e.undefined ? Rt(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Dn.create = (e, t) => new Dn({
  innerType: e,
  typeName: Te.ZodOptional,
  ...Ae(t)
});
class Er extends Fe {
  _parse(t) {
    return this._getType(t) === $e.null ? Rt(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Er.create = (e, t) => new Er({
  innerType: e,
  typeName: Te.ZodNullable,
  ...Ae(t)
});
class os extends Fe {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    let r = n.data;
    return n.parsedType === $e.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
os.create = (e, t) => new os({
  innerType: e,
  typeName: Te.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...Ae(t)
});
class as extends Fe {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = {
      ...n,
      common: {
        ...n.common,
        issues: []
      }
    }, o = this._def.innerType._parse({
      data: r.data,
      path: r.path,
      parent: {
        ...r
      }
    });
    return Zi(o) ? o.then((a) => ({
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new qt(r.common.issues);
        },
        input: r.data
      })
    })) : {
      status: "valid",
      value: o.status === "valid" ? o.value : this._def.catchValue({
        get error() {
          return new qt(r.common.issues);
        },
        input: r.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
as.create = (e, t) => new as({
  innerType: e,
  typeName: Te.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...Ae(t)
});
class tc extends Fe {
  _parse(t) {
    if (this._getType(t) !== $e.nan) {
      const r = this._getOrReturnCtx(t);
      return ge(r, {
        code: ie.invalid_type,
        expected: $e.nan,
        received: r.parsedType
      }), ke;
    }
    return { status: "valid", value: t.data };
  }
}
tc.create = (e) => new tc({
  typeName: Te.ZodNaN,
  ...Ae(e)
});
const oU = Symbol("zod_brand");
class Qf extends Fe {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = n.data;
    return this._def.type._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class As extends Fe {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async)
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return a.status === "aborted" ? ke : a.status === "dirty" ? (n.dirty(), Eo(a.value)) : this._def.out._parseAsync({
          data: a.value,
          path: r.path,
          parent: r
        });
      })();
    {
      const o = this._def.in._parseSync({
        data: r.data,
        path: r.path,
        parent: r
      });
      return o.status === "aborted" ? ke : o.status === "dirty" ? (n.dirty(), {
        status: "dirty",
        value: o.value
      }) : this._def.out._parseSync({
        data: o.value,
        path: r.path,
        parent: r
      });
    }
  }
  static create(t, n) {
    return new As({
      in: t,
      out: n,
      typeName: Te.ZodPipeline
    });
  }
}
class ss extends Fe {
  _parse(t) {
    const n = this._def.innerType._parse(t);
    return Ya(n) && (n.value = Object.freeze(n.value)), n;
  }
  unwrap() {
    return this._def.innerType;
  }
}
ss.create = (e, t) => new ss({
  innerType: e,
  typeName: Te.ZodReadonly,
  ...Ae(t)
});
function M1(e, t = {}, n) {
  return e ? Uo.create().superRefine((r, o) => {
    var a, s;
    if (!e(r)) {
      const i = typeof t == "function" ? t(r) : typeof t == "string" ? { message: t } : t, c = (s = (a = i.fatal) !== null && a !== void 0 ? a : n) !== null && s !== void 0 ? s : !0, l = typeof i == "string" ? { message: i } : i;
      o.addIssue({ code: "custom", ...l, fatal: c });
    }
  }) : Uo.create();
}
const aU = {
  object: pt.lazycreate
};
var Te;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(Te || (Te = {}));
const sU = (e, t = {
  message: `Input not instance of ${e.name}`
}) => M1((n) => n instanceof e, t), D1 = fn.create, A1 = Cr.create, iU = tc.create, cU = Sr.create, R1 = qa.create, lU = to.create, uU = Qi.create, dU = Za.create, fU = Xa.create, pU = Uo.create, hU = Gr.create, mU = or.create, vU = Ji.create, gU = hn.create, bU = pt.create, yU = pt.strictCreate, xU = Qa.create, wU = Xc.create, $U = Ja.create, _U = Bn.create, CU = es.create, SU = ec.create, NU = no.create, EU = ko.create, PU = ts.create, OU = ns.create, TU = Nr.create, jU = rs.create, kU = Ho.create, zm = $n.create, MU = Dn.create, DU = Er.create, AU = $n.createWithPreprocess, RU = As.create, IU = () => D1().optional(), LU = () => A1().optional(), FU = () => R1().optional(), BU = {
  string: (e) => fn.create({ ...e, coerce: !0 }),
  number: (e) => Cr.create({ ...e, coerce: !0 }),
  boolean: (e) => qa.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => Sr.create({ ...e, coerce: !0 }),
  date: (e) => to.create({ ...e, coerce: !0 })
}, VU = ke;
var nc = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: Wo,
  setErrorMap: VW,
  getErrorMap: Yi,
  makeIssue: qi,
  EMPTY_PATH: zW,
  addIssueToContext: ge,
  ParseStatus: Tt,
  INVALID: ke,
  DIRTY: Eo,
  OK: Rt,
  isAborted: Zu,
  isDirty: Xu,
  isValid: Ya,
  isAsync: Zi,
  get util() {
    return Ue;
  },
  get objectUtil() {
    return qu;
  },
  ZodParsedType: $e,
  getParsedType: vr,
  ZodType: Fe,
  datetimeRegex: j1,
  ZodString: fn,
  ZodNumber: Cr,
  ZodBigInt: Sr,
  ZodBoolean: qa,
  ZodDate: to,
  ZodSymbol: Qi,
  ZodUndefined: Za,
  ZodNull: Xa,
  ZodAny: Uo,
  ZodUnknown: Gr,
  ZodNever: or,
  ZodVoid: Ji,
  ZodArray: hn,
  ZodObject: pt,
  ZodUnion: Qa,
  ZodDiscriminatedUnion: Xc,
  ZodIntersection: Ja,
  ZodTuple: Bn,
  ZodRecord: es,
  ZodMap: ec,
  ZodSet: no,
  ZodFunction: ko,
  ZodLazy: ts,
  ZodLiteral: ns,
  ZodEnum: Nr,
  ZodNativeEnum: rs,
  ZodPromise: Ho,
  ZodEffects: $n,
  ZodTransformer: $n,
  ZodOptional: Dn,
  ZodNullable: Er,
  ZodDefault: os,
  ZodCatch: as,
  ZodNaN: tc,
  BRAND: oU,
  ZodBranded: Qf,
  ZodPipeline: As,
  ZodReadonly: ss,
  custom: M1,
  Schema: Fe,
  ZodSchema: Fe,
  late: aU,
  get ZodFirstPartyTypeKind() {
    return Te;
  },
  coerce: BU,
  any: pU,
  array: gU,
  bigint: cU,
  boolean: R1,
  date: lU,
  discriminatedUnion: wU,
  effect: zm,
  enum: TU,
  function: EU,
  instanceof: sU,
  intersection: $U,
  lazy: PU,
  literal: OU,
  map: SU,
  nan: iU,
  nativeEnum: jU,
  never: mU,
  null: fU,
  nullable: DU,
  number: A1,
  object: bU,
  oboolean: FU,
  onumber: LU,
  optional: MU,
  ostring: IU,
  pipeline: RU,
  preprocess: AU,
  promise: kU,
  record: CU,
  set: NU,
  strictObject: yU,
  string: D1,
  symbol: uU,
  transformer: zm,
  tuple: _U,
  undefined: dU,
  union: xU,
  unknown: hU,
  void: vU,
  NEVER: VU,
  ZodIssueCode: ie,
  quotelessJson: BW,
  ZodError: qt
});
const zU = () => {
  const { showFilters: e, setShowFilters: t } = ct(cr);
  return /* @__PURE__ */ d.jsxs(
    Ve,
    {
      type: "button",
      variant: "outline",
      onClick: () => t(!e),
      className: "ml-auto py-5 whitespace-nowrap",
      children: [
        /* @__PURE__ */ d.jsx(v1, { className: "mr-2 h-4 w-4" }),
        "Mostrar Filtros"
      ]
    }
  );
}, WU = ({ id: e, form: t, icon: n, label: r, options: o, onSubmit: a }) => {
  const { selectOptionFilter: s, getFilterOptionsSelectedById: i, resetOptionsByFilter: c } = ct(cr), [l, u] = Z(null), f = q(null), p = (h) => {
    c(h);
  };
  return J(() => {
    const h = f.current;
    if (!h)
      return;
    const m = new ResizeObserver((v) => {
      const g = v[0].contentRect.width;
      u(g);
    });
    return m.observe(h), () => {
      m.unobserve(h), m.disconnect();
    };
  }, []), /* @__PURE__ */ d.jsxs(tr, { children: [
    /* @__PURE__ */ d.jsx(nr, { asChild: !0, children: /* @__PURE__ */ d.jsxs(
      Ve,
      {
        size: "sm",
        type: "button",
        ref: f,
        variant: "outline",
        className: "py-5 border-dashed border-muted-foreground",
        children: [
          n || /* @__PURE__ */ d.jsx(g1, { size: 16, className: "mr-2" }),
          r,
          i(e).length > 0 && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
            /* @__PURE__ */ d.jsx(js, { orientation: "vertical", className: "mx-2 h-4" }),
            /* @__PURE__ */ d.jsx("div", { className: "hidden space-x-1 lg:flex", children: i(e).length >= 1 ? /* @__PURE__ */ d.jsx(
              At,
              {
                variant: "secondary",
                className: "rounded-sm px-1 font-normal",
                children: i(e).length === 1 ? /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
                  i(e).length,
                  " seleccionado"
                ] }) : /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
                  i(e).length,
                  " seleccionados"
                ] })
              }
            ) : o.filter((h) => h.selected).map((h) => /* @__PURE__ */ d.jsx(
              At,
              {
                variant: "secondary",
                className: "rounded-sm px-1 font-normal",
                children: h.label.length >= 20 ? null : h.label
              },
              h.value.toString()
            )) })
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ d.jsx("style", { children: `
          .combox-checkbox-content {
            min-width: 150px !important;
            width: ${l + 24}px !important;
          }

          .checkbox-tooltip-content {
            min-width: 150px !important;
            width: ${l + 10}px !important;
          }
        ` }),
    /* @__PURE__ */ d.jsx(Ln, { className: "p-0 combox-checkbox-content", align: "start", children: /* @__PURE__ */ d.jsxs(rr, { children: [
      /* @__PURE__ */ d.jsx(wr, { placeholder: r }),
      /* @__PURE__ */ d.jsxs(la, { children: [
        /* @__PURE__ */ d.jsx($r, { children: "Sin Resultados" }),
        /* @__PURE__ */ d.jsx(wn, { children: o.map((h) => /* @__PURE__ */ d.jsxs(
          nn,
          {
            onSelect: () => {
              h.selected ? s(e, h.id, !1) : s(e, h.id, !0);
            },
            children: [
              /* @__PURE__ */ d.jsx(
                "div",
                {
                  className: M(
                    "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                    h.selected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                  ),
                  children: /* @__PURE__ */ d.jsx(rn, { className: M("h-4 w-4") })
                }
              ),
              h.icon,
              /* @__PURE__ */ d.jsx("span", { className: "truncate", children: h.label })
            ]
          },
          h.value.toString()
        )) }),
        i(e).length > 0 && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
          /* @__PURE__ */ d.jsx(Ha, {}),
          /* @__PURE__ */ d.jsx(wn, { children: /* @__PURE__ */ d.jsx(
            nn,
            {
              onSelect: () => p(e),
              className: "justify-center text-center",
              children: "Limpiar Filtros"
            }
          ) })
        ] })
      ] })
    ] }) })
  ] });
}, UU = ({ id: e, form: t, label: n, icon: r, queryText: o }) => {
  const { onSubmitTable: a, pagination: { page: s, limit: i }, isFormatedUpperQueries: c } = ct(cr), l = () => {
    var f;
    const u = [];
    (f = Object.entries(t == null ? void 0 : t.getValues())) == null || f.forEach((p) => {
      p[1] && u.push({
        field: c ? p[0] : ua(p[0]),
        text: p[1]
      });
    }), a({ queries: u, filters: [], limit: i, page: s });
  };
  return /* @__PURE__ */ d.jsxs(tr, { children: [
    /* @__PURE__ */ d.jsx(nr, { asChild: !0, children: /* @__PURE__ */ d.jsxs(Ve, { variant: "outline", size: "sm", className: "py-5 border-dashed border-muted-foreground", type: "button", children: [
      /* @__PURE__ */ d.jsx(yi, { size: 16, className: "mr-2 text-gray-500" }),
      n,
      o && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
        /* @__PURE__ */ d.jsx(js, { orientation: "vertical", className: "mx-2 h-4" }),
        /* @__PURE__ */ d.jsx(
          At,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: o
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ d.jsxs(Ln, { className: "w-fit p-4", align: "start", children: [
      /* @__PURE__ */ d.jsxs(Un, { htmlFor: e, children: [
        "Buscar ",
        n
      ] }),
      /* @__PURE__ */ d.jsxs("div", { className: "w-full flex justify-between items-end gap-x-3", children: [
        /* @__PURE__ */ d.jsx(
          _f,
          {
            id: e,
            form: t,
            type: "text",
            placeholder: `Ingrese ${n}`
          }
        ),
        /* @__PURE__ */ d.jsx(
          Ve,
          {
            type: "button",
            onClick: l,
            className: "h-10 w-fit",
            children: /* @__PURE__ */ d.jsx(yi, { size: 18 })
          }
        )
      ] })
    ] })
  ] });
}, HU = ({ form: e, onSubmit: t }) => {
  const {
    queries: n,
    filters: r,
    showFilters: o,
    resetFilters: a,
    onSubmitTable: s,
    pagination: { page: i, limit: c },
    isFormatedUpperQueries: l
  } = ct(cr), u = e.watch(n.map((p) => p.id)), f = () => {
    var h;
    a();
    const p = [];
    (h = Object.entries(e == null ? void 0 : e.getValues())) == null || h.forEach((m) => {
      m[1] && p.push({
        field: l ? m[0] : ua(m[0]),
        text: m[1]
      });
    }), s({ queries: p, filters: [], limit: c, page: i });
  };
  return /* @__PURE__ */ d.jsx("div", { className: "w-10/12 flex items-center justify-between", children: /* @__PURE__ */ d.jsxs("div", { className: "w-full flex flex-col-reverse items-start gap-x-2 gap-y-2", children: [
    /* @__PURE__ */ d.jsx(
      "form",
      {
        onSubmit: e.handleSubmit(t),
        className: "w-full flex justify-start items-center sm:mr-4",
        children: /* @__PURE__ */ d.jsx("section", { className: "mr-3 flex justify-start items-center gap-x-3", children: n.map((p, h) => /* @__PURE__ */ d.jsx(
          UU,
          {
            queryText: u[h],
            label: p.label,
            id: p.id,
            form: e
          },
          p.id
        )) })
      }
    ),
    r != null && r.length ? /* @__PURE__ */ d.jsxs("div", { className: "w-auto h-full flex flex-wrap gap-x-3 gap-y-2 justify-start items-center", children: [
      /* @__PURE__ */ d.jsx(zU, {}),
      o && r && r.map((p) => /* @__PURE__ */ d.jsx(
        WU,
        {
          onSubmit: t,
          form: e,
          id: p.id,
          icon: p.icon,
          label: p.label,
          options: p.options
        },
        p.id
      )),
      o && (r != null && r.filter(
        (p) => p.options.some((h) => h.selected)
      ).length) ? /* @__PURE__ */ d.jsxs(
        Ve,
        {
          type: "button",
          variant: "ghost",
          onClick: f,
          className: "px-2 py-5 lg:px-3 ml-0 lg:ml-auto",
          children: [
            "Limpiar Filtros",
            /* @__PURE__ */ d.jsx(uc, { className: "ml-2 h-4 w-4" })
          ]
        }
      ) : null
    ] }) : null
  ] }) });
}, KU = ({ onSubmitTable: e, loading: t }) => {
  const {
    queries: n,
    getFiltersWithOptionsSelected: r,
    filters: o,
    pagination: { page: a, limit: s },
    setSearchForm: i,
    isFormatedUpperQueries: c
  } = ct(cr), l = iy({
    defaultValues: n.reduce((f, p) => (f[p.id] = "", f), {}),
    resolver: N1(
      nc.object(
        n.reduce((f, p) => (f[p.id] = nc.string().optional(), f), {})
      )
    )
  }), u = async (f) => {
    var m;
    console.log({ data: f });
    const p = r(), h = [];
    (m = Object.entries(f)) == null || m.forEach((v) => {
      v[1] && h.push({
        field: c ? v[0] : ua(v[0]),
        text: v[1]
      });
    }), console.log("queries formatted ", h), e({ queries: h, filters: p, limit: s, page: a });
  };
  return J(() => i(l), [l]), !(n != null && n.length) && !(o != null && o.length) ? /* @__PURE__ */ d.jsx("div", {}) : /* @__PURE__ */ d.jsx(ly, { ...l, children: /* @__PURE__ */ d.jsxs("div", { className: "w-full flex flex-wrap justify-between items-end gap-y-2", children: [
    n != null && n.length || o != null && o.length ? /* @__PURE__ */ d.jsx(HU, { form: l, onSubmit: u }) : /* @__PURE__ */ d.jsx("div", {}),
    /* @__PURE__ */ d.jsx("div", { className: "w-fit flex flex-col gap-y-2", children: /* @__PURE__ */ d.jsx(
      Ve,
      {
        type: "submit",
        onClick: l.handleSubmit(u),
        disabled: t,
        className: "bg-brand-primary hover:bg-brand-primary-opaque ml-auto py-5 whitespace-nowrap text-white",
        children: t ? /* @__PURE__ */ d.jsx(dd, {}) : /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
          /* @__PURE__ */ d.jsx(x1, { className: "dark:border-white h-5 w-5 mr-2" }),
          "Buscar"
        ] })
      }
    ) })
  ] }) });
}, GU = () => /* @__PURE__ */ d.jsx("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: /* @__PURE__ */ d.jsx("h6", { className: "font-semibold", children: "Hubo un error" }) }), YU = () => /* @__PURE__ */ d.jsxs(kf, { children: [
  /* @__PURE__ */ d.jsx(_1, {}),
  /* @__PURE__ */ d.jsx(C1, {})
] }), qU = {
  limit: 5,
  page: 1,
  labels: { plural: "Items", single: "Item" },
  hasPrevPage: !1,
  hasNextPage: !1
};
function gq(e) {
  const [t, n] = Z([]), [r, o] = Z([]), [a, s] = Z([]), [i, c] = Z(!1), [l, u] = Z(e == null ? void 0 : e.error), [f, p] = Z(e == null ? void 0 : e.loading), [h, m] = Z(), [v, g] = Z(
    (e == null ? void 0 : e.pagination) ?? qU
  ), [b, y] = Z(
    (e == null ? void 0 : e.columns) || []
  ), x = ve(
    (E) => e.onSubmitTable({ ...E }),
    [e]
  ), _ = ve(
    (E) => {
      var G;
      g(E);
      const B = h.getValues(), T = [];
      (G = Object.entries(B)) == null || G.forEach((Q) => {
        Q[1] && T.push({
          field: e.isFormatedUpperQueries ? Q[0] : ua(Q[0]),
          text: Q[1]
        });
      });
      const U = r.map((Q) => ({
        id: Q.id,
        label: Q.label,
        options: Q.options.filter((oe) => oe.selected).map((oe) => oe.value)
      })).filter((Q) => Q.options.length > 0);
      x({
        filters: U,
        queries: T,
        limit: E.limit,
        page: E.page
      });
    },
    [r, x, h]
  ), w = ve(() => {
    _({ ...v, page: v.page + 1 });
  }, [v, _]), N = ve(() => {
    v.page > 1 && _({ ...v, page: v.page - 1 });
  }, [v, _]), S = ve(() => {
    g({ ...v, page: 1 });
  }, []), D = () => r.map((E) => ({
    id: E.id,
    label: E.label,
    options: E.options.filter((B) => B.selected).map((B) => B.value)
  })).filter((E) => E.options.length > 0), P = (E) => {
    const B = r.find((T) => T.id === E);
    return B ? B.options.filter((U) => U.selected).map((U) => U.value) : [];
  }, z = (E, B, T) => {
    const U = r.map((G) => G.id === E ? {
      ...G,
      options: G.options.map((Q) => Q.id === B ? { ...Q, selected: T } : Q)
    } : G);
    o(U);
  }, K = () => r, R = (E) => {
    const B = r.map((T) => T.id === E ? {
      ...T,
      options: T.options.map((U) => ({
        ...U,
        selected: !1
      }))
    } : T);
    o(B);
  }, W = (E, B) => _({
    ...v,
    limit: E,
    page: B || (v == null ? void 0 : v.page)
  }), V = () => {
    const E = r.map((B) => ({
      ...B,
      options: B.options.map((T) => ({ ...T, selected: !1 }))
    }));
    o(E);
  };
  return J(() => n((e == null ? void 0 : e.data) || []), [e == null ? void 0 : e.data]), J(() => p(e == null ? void 0 : e.loading), [e == null ? void 0 : e.loading]), J(() => u((e == null ? void 0 : e.error) || !1), [e == null ? void 0 : e.error]), J(() => g(e == null ? void 0 : e.pagination), [e == null ? void 0 : e.pagination]), J(() => y((e == null ? void 0 : e.columns) || []), [e == null ? void 0 : e.columns]), J(() => {
    const E = b.filter((B) => B.isQuery).map((B) => ({
      id: B.id,
      label: B.label
    }));
    s(E);
  }, [b]), J(() => {
    const E = (T) => (T == null ? void 0 : T.filters) && (T == null ? void 0 : T.filters.length), B = b.filter(E).map((T) => {
      const U = T.filters.map((Q) => ({
        ...Q,
        selected: !1
      }));
      return {
        ...T,
        id: T.id,
        options: U
      };
    });
    o(B);
  }, [b]), J(() => {
    e != null && e.filters && (e == null || e.filters.forEach((E) => {
      E != null && E.filters && b.forEach((B) => {
        E.id === B.id && o((T) => T.some((G) => G.id === E.id) ? T : [
          ...T,
          {
            id: B.id,
            label: B.label,
            options: E.filters
          }
        ]);
      });
    }));
  }, [b, e == null ? void 0 : e.filters]), J(() => {
    g((E) => {
      var B, T;
      return {
        ...E,
        hasNextPage: (B = e == null ? void 0 : e.pagination) == null ? void 0 : B.hasNextPage,
        hasPrevPage: (T = e == null ? void 0 : e.pagination) == null ? void 0 : T.hasPrevPage
      };
    });
  }, [e.pagination.hasNextPage, e.pagination.hasPrevPage]), /* @__PURE__ */ d.jsx(
    cr.Provider,
    {
      value: {
        data: t,
        columns: b,
        pagination: v,
        nextPage: w,
        prevPage: N,
        resetPage: S,
        searchForm: h,
        isFormatedUpperQueries: e.isFormatedUpperQueries,
        updateLimit: W,
        showFilters: i,
        resetFilters: V,
        getGlobalFilters: K,
        selectOptionFilter: z,
        resetOptionsByFilter: R,
        multiItemsSelected: e.multiItemsSelected,
        setMultiItemsSelected: e.setMultiItemsSelected,
        limitOfMultiSelect: e.limitOfMultiSelect,
        queries: a,
        filters: r,
        onSubmitTable: x,
        getFilterOptionsSelectedById: P,
        getFiltersWithOptionsSelected: D,
        setSelectItem: e.setSelectItem,
        setShowFilters: (E) => c(E),
        setSearchForm: (E) => m(E)
      },
      children: /* @__PURE__ */ d.jsxs("div", { className: "w-full h-fit space-y-4", children: [
        /* @__PURE__ */ d.jsx(KU, { onSubmitTable: x, loading: f }),
        /* @__PURE__ */ d.jsxs("div", { className: "rounded-md border overflow-clip", children: [
          f && /* @__PURE__ */ d.jsx(RW, {}),
          !f && l && /* @__PURE__ */ d.jsx(GU, {}),
          !f && !l && !t && /* @__PURE__ */ d.jsx(YU, {}),
          !f && !l && t && /* @__PURE__ */ d.jsx(DW, {})
        ] }),
        !f && !l && t && /* @__PURE__ */ d.jsx(jW, {})
      ] })
    }
  );
}
const bq = ({
  id: e,
  label: t,
  defaultValue: n,
  placeholder: r,
  description: o,
  items: a,
  form: s,
  tabIndex: i,
  classNameContainer: c,
  classNameSelect: l,
  classNameGroup: u,
  disabled: f,
  isLoading: p
}) => p ? /* @__PURE__ */ d.jsxs("div", { className: M("w-full", c), children: [
  /* @__PURE__ */ d.jsx("div", { className: "flex justify-start items-end", children: t && /* @__PURE__ */ d.jsx(Ot, { className: "h-5 w-full max-w-[90px]" }) }),
  o && /* @__PURE__ */ d.jsx(Ot, { className: "h-5 w-full max-w-[150px] my-2" }),
  /* @__PURE__ */ d.jsx("div", { className: "relative", children: /* @__PURE__ */ d.jsx(Ot, { className: "w-full h-9 mt-2" }) })
] }) : /* @__PURE__ */ d.jsx(
  uo,
  {
    control: s.control,
    name: e,
    defaultValue: n,
    render: ({ field: h, formState: m }) => {
      var v;
      return /* @__PURE__ */ d.jsxs(Mr, { className: M("w-full", c), children: [
        /* @__PURE__ */ d.jsxs("div", { className: "flex justify-start items-end", children: [
          t && /* @__PURE__ */ d.jsxs(fo, { className: "flex", children: [
            t,
            " "
          ] }),
          ((v = m == null ? void 0 : m.errors[e]) == null ? void 0 : v.message) && /* @__PURE__ */ d.jsxs("span", { className: "text-xs font-light text-destructive", children: [
            "* ",
            m.errors[e].message
          ] })
        ] }),
        o && /* @__PURE__ */ d.jsx(ra, { className: "text-xs", children: o }),
        /* @__PURE__ */ d.jsx("div", { className: "my-2" }),
        /* @__PURE__ */ d.jsxs(
          Ef,
          {
            onValueChange: (g) => g && h.onChange(g),
            defaultValue: h.value,
            disabled: f,
            value: h == null ? void 0 : h.value,
            children: [
              /* @__PURE__ */ d.jsx(Ps, { children: /* @__PURE__ */ d.jsx(Ic, { disabled: f, tabIndex: i, className: M("w-full", l), children: /* @__PURE__ */ d.jsx(Pf, { placeholder: r }) }) }),
              /* @__PURE__ */ d.jsx(Lc, { children: /* @__PURE__ */ d.jsxs(YI, { className: M("overflow-auto", u), children: [
                a.length ? null : /* @__PURE__ */ d.jsx("div", { className: "px-2 py-1 text-sm", children: "Sin Resultados" }),
                a.map((g) => {
                  var b, y;
                  return /* @__PURE__ */ d.jsx(Fc, { value: (b = g.value) == null ? void 0 : b.toString(), disabled: g == null ? void 0 : g.disabled, children: /* @__PURE__ */ d.jsxs("div", { className: "flex justify-center items-center", children: [
                    (g == null ? void 0 : g.icon) && /* @__PURE__ */ d.jsx("div", { className: "dark:text-white mr-2 h-5", children: g.icon }),
                    g.label
                  ] }) }, (y = g.value) == null ? void 0 : y.toString());
                })
              ] }) })
            ]
          }
        )
      ] });
    }
  }
);
function Qc() {
  return (Qc = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
function I1(e, t) {
  if (e == null)
    return {};
  var n, r, o = {}, a = Object.keys(e);
  for (r = 0; r < a.length; r++)
    t.indexOf(n = a[r]) >= 0 || (o[n] = e[n]);
  return o;
}
function Ju(e) {
  var t = q(e), n = q(function(r) {
    t.current && t.current(r);
  });
  return t.current = e, n.current;
}
var is = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = 1), e > n ? n : e < t ? t : e;
}, Ea = function(e) {
  return "touches" in e;
}, ed = function(e) {
  return e && e.ownerDocument.defaultView || self;
}, Wm = function(e, t, n) {
  var r = e.getBoundingClientRect(), o = Ea(t) ? function(a, s) {
    for (var i = 0; i < a.length; i++)
      if (a[i].identifier === s)
        return a[i];
    return a[0];
  }(t.touches, n) : t;
  return { left: is((o.pageX - (r.left + ed(e).pageXOffset)) / r.width), top: is((o.pageY - (r.top + ed(e).pageYOffset)) / r.height) };
}, Um = function(e) {
  !Ea(e) && e.preventDefault();
}, L1 = I.memo(function(e) {
  var t = e.onMove, n = e.onKey, r = I1(e, ["onMove", "onKey"]), o = q(null), a = Ju(t), s = Ju(n), i = q(null), c = q(!1), l = Ut(function() {
    var h = function(g) {
      Um(g), (Ea(g) ? g.touches.length > 0 : g.buttons > 0) && o.current ? a(Wm(o.current, g, i.current)) : v(!1);
    }, m = function() {
      return v(!1);
    };
    function v(g) {
      var b = c.current, y = ed(o.current), x = g ? y.addEventListener : y.removeEventListener;
      x(b ? "touchmove" : "mousemove", h), x(b ? "touchend" : "mouseup", m);
    }
    return [function(g) {
      var b = g.nativeEvent, y = o.current;
      if (y && (Um(b), !function(_, w) {
        return w && !Ea(_);
      }(b, c.current) && y)) {
        if (Ea(b)) {
          c.current = !0;
          var x = b.changedTouches || [];
          x.length && (i.current = x[0].identifier);
        }
        y.focus(), a(Wm(y, b, i.current)), v(!0);
      }
    }, function(g) {
      var b = g.which || g.keyCode;
      b < 37 || b > 40 || (g.preventDefault(), s({ left: b === 39 ? 0.05 : b === 37 ? -0.05 : 0, top: b === 40 ? 0.05 : b === 38 ? -0.05 : 0 }));
    }, v];
  }, [s, a]), u = l[0], f = l[1], p = l[2];
  return J(function() {
    return p;
  }, [p]), I.createElement("div", Qc({}, r, { onTouchStart: u, onMouseDown: u, className: "react-colorful__interactive", ref: o, onKeyDown: f, tabIndex: 0, role: "slider" }));
}), Jf = function(e) {
  return e.filter(Boolean).join(" ");
}, F1 = function(e) {
  var t = e.color, n = e.left, r = e.top, o = r === void 0 ? 0.5 : r, a = Jf(["react-colorful__pointer", e.className]);
  return I.createElement("div", { className: a, style: { top: 100 * o + "%", left: 100 * n + "%" } }, I.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: t } }));
}, Et = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = Math.pow(10, t)), Math.round(n * e) / n;
}, ZU = function(e) {
  return tH(td(e));
}, td = function(e) {
  return e[0] === "#" && (e = e.substring(1)), e.length < 6 ? { r: parseInt(e[0] + e[0], 16), g: parseInt(e[1] + e[1], 16), b: parseInt(e[2] + e[2], 16), a: e.length === 4 ? Et(parseInt(e[3] + e[3], 16) / 255, 2) : 1 } : { r: parseInt(e.substring(0, 2), 16), g: parseInt(e.substring(2, 4), 16), b: parseInt(e.substring(4, 6), 16), a: e.length === 8 ? Et(parseInt(e.substring(6, 8), 16) / 255, 2) : 1 };
}, XU = function(e) {
  return eH(JU(e));
}, QU = function(e) {
  var t = e.s, n = e.v, r = e.a, o = (200 - t) * n / 100;
  return { h: Et(e.h), s: Et(o > 0 && o < 200 ? t * n / 100 / (o <= 100 ? o : 200 - o) * 100 : 0), l: Et(o / 2), a: Et(r, 2) };
}, nd = function(e) {
  var t = QU(e);
  return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
}, JU = function(e) {
  var t = e.h, n = e.s, r = e.v, o = e.a;
  t = t / 360 * 6, n /= 100, r /= 100;
  var a = Math.floor(t), s = r * (1 - n), i = r * (1 - (t - a) * n), c = r * (1 - (1 - t + a) * n), l = a % 6;
  return { r: Et(255 * [r, i, s, s, c, r][l]), g: Et(255 * [c, r, r, i, s, s][l]), b: Et(255 * [s, s, c, r, r, i][l]), a: Et(o, 2) };
}, ni = function(e) {
  var t = e.toString(16);
  return t.length < 2 ? "0" + t : t;
}, eH = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = o < 1 ? ni(Et(255 * o)) : "";
  return "#" + ni(t) + ni(n) + ni(r) + a;
}, tH = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = Math.max(t, n, r), s = a - Math.min(t, n, r), i = s ? a === t ? (n - r) / s : a === n ? 2 + (r - t) / s : 4 + (t - n) / s : 0;
  return { h: Et(60 * (i < 0 ? i + 6 : i)), s: Et(a ? s / a * 100 : 0), v: Et(a / 255 * 100), a: o };
}, nH = I.memo(function(e) {
  var t = e.hue, n = e.onChange, r = Jf(["react-colorful__hue", e.className]);
  return I.createElement("div", { className: r }, I.createElement(L1, { onMove: function(o) {
    n({ h: 360 * o.left });
  }, onKey: function(o) {
    n({ h: is(t + 360 * o.left, 0, 360) });
  }, "aria-label": "Hue", "aria-valuenow": Et(t), "aria-valuemax": "360", "aria-valuemin": "0" }, I.createElement(F1, { className: "react-colorful__hue-pointer", left: t / 360, color: nd({ h: t, s: 100, v: 100, a: 1 }) })));
}), rH = I.memo(function(e) {
  var t = e.hsva, n = e.onChange, r = { backgroundColor: nd({ h: t.h, s: 100, v: 100, a: 1 }) };
  return I.createElement("div", { className: "react-colorful__saturation", style: r }, I.createElement(L1, { onMove: function(o) {
    n({ s: 100 * o.left, v: 100 - 100 * o.top });
  }, onKey: function(o) {
    n({ s: is(t.s + 100 * o.left, 0, 100), v: is(t.v - 100 * o.top, 0, 100) });
  }, "aria-label": "Color", "aria-valuetext": "Saturation " + Et(t.s) + "%, Brightness " + Et(t.v) + "%" }, I.createElement(F1, { className: "react-colorful__saturation-pointer", top: 1 - t.v / 100, left: t.s / 100, color: nd(t) })));
}), B1 = function(e, t) {
  if (e === t)
    return !0;
  for (var n in e)
    if (e[n] !== t[n])
      return !1;
  return !0;
}, oH = function(e, t) {
  return e.toLowerCase() === t.toLowerCase() || B1(td(e), td(t));
};
function aH(e, t, n) {
  var r = Ju(n), o = Z(function() {
    return e.toHsva(t);
  }), a = o[0], s = o[1], i = q({ color: t, hsva: a });
  J(function() {
    if (!e.equal(t, i.current.color)) {
      var l = e.toHsva(t);
      i.current = { hsva: l, color: t }, s(l);
    }
  }, [t, e]), J(function() {
    var l;
    B1(a, i.current.hsva) || e.equal(l = e.fromHsva(a), i.current.color) || (i.current = { hsva: a, color: l }, r(l));
  }, [a, e, r]);
  var c = ve(function(l) {
    s(function(u) {
      return Object.assign({}, u, l);
    });
  }, []);
  return [a, c];
}
var sH = typeof window < "u" ? ds : J, iH = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}, Hm = /* @__PURE__ */ new Map(), cH = function(e) {
  sH(function() {
    var t = e.current ? e.current.ownerDocument : document;
    if (t !== void 0 && !Hm.has(t)) {
      var n = t.createElement("style");
      n.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, Hm.set(t, n);
      var r = iH();
      r && n.setAttribute("nonce", r), t.head.appendChild(n);
    }
  }, []);
}, lH = function(e) {
  var t = e.className, n = e.colorModel, r = e.color, o = r === void 0 ? n.defaultColor : r, a = e.onChange, s = I1(e, ["className", "colorModel", "color", "onChange"]), i = q(null);
  cH(i);
  var c = aH(n, o, a), l = c[0], u = c[1], f = Jf(["react-colorful", t]);
  return I.createElement("div", Qc({}, s, { ref: i, className: f }), I.createElement(rH, { hsva: l, onChange: u }), I.createElement(nH, { hue: l.h, onChange: u, className: "react-colorful__last-control" }));
}, uH = { defaultColor: "000", toHsva: ZU, fromHsva: function(e) {
  return XU({ h: e.h, s: e.s, v: e.v, a: 1 });
}, equal: oH }, dH = function(e) {
  return I.createElement(lH, Qc({}, e, { colorModel: uH }));
};
const yq = ({ color: e, onChange: t, presetColors: n }) => /* @__PURE__ */ d.jsxs("div", { className: "picker", children: [
  /* @__PURE__ */ d.jsx(dH, { color: e, onChange: t }),
  /* @__PURE__ */ d.jsx("div", { className: "picker__swatches", children: n.map((r) => /* @__PURE__ */ d.jsx(
    "button",
    {
      className: "picker__swatch",
      style: { background: r },
      onClick: () => t(r)
    },
    r
  )) })
] });
function fH(e, t, n) {
  var r = Z([]), o = r[0], a = r[1], s = q([]), i = ve(function(f, p) {
    var h = e(f, p), m = h[0], v = h[1];
    return a(function(g) {
      return [].concat(v.reverse(), g);
    }), m;
  }, [e]), c = cd(i, n), l = c[0], u = c[1];
  return J(function() {
    var f = o.pop();
    if (f) {
      var p = t(f, u);
      p && s.current.push(p), a([].concat(o));
    }
  }, [o, t]), J(function() {
    return function() {
      s.current.forEach(function(f) {
        f();
      });
    };
  }, []), [l, u];
}
function un() {
  return un = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, un.apply(this, arguments);
}
function pH(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Jc = {
  3: "Cancel",
  6: "Help",
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  28: "Convert",
  29: "NonConvert",
  30: "Accept",
  31: "ModeChange",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  41: "Select",
  42: "Print",
  43: "Execute",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  48: ["0", ")"],
  49: ["1", "!"],
  50: ["2", "@"],
  51: ["3", "#"],
  52: ["4", "$"],
  53: ["5", "%"],
  54: ["6", "^"],
  55: ["7", "&"],
  56: ["8", "*"],
  57: ["9", "("],
  91: "OS",
  93: "ContextMenu",
  106: "*",
  107: "+",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  181: "VolumeMute",
  182: "VolumeDown",
  183: "VolumeUp",
  186: [";", ":"],
  187: ["=", "+"],
  188: [",", "<"],
  189: ["-", "_"],
  190: [".", ">"],
  191: ["/", "?"],
  192: ["`", "~"],
  219: ["[", "{"],
  220: ["\\", "|"],
  221: ["]", "}"],
  222: ["'", '"'],
  224: "Meta",
  225: "AltGraph",
  246: "Attn",
  247: "CrSel",
  248: "ExSel",
  249: "EraseEof",
  250: "Play",
  251: "ZoomOut"
}, Dt;
for (Dt = 1; Dt < 25; Dt += 1)
  Jc[111 + Dt] = "F" + Dt;
for (Dt = 65; Dt < 91; Dt += 1) {
  var Km = /* @__PURE__ */ String.fromCharCode(Dt);
  Jc[Dt] = [/* @__PURE__ */ Km.toLowerCase(), /* @__PURE__ */ Km.toUpperCase()];
}
for (Dt = 96; Dt < 106; Dt += 1)
  Jc[Dt] = /* @__PURE__ */ String.fromCharCode(Dt - 48);
function hH(e) {
  if (e.key && e.key !== "Unidentified")
    return e.key;
  var t = Jc[e.which || e.keyCode] || "Unidentified";
  return Array.isArray(t) ? t[+(e.shiftKey || 0)] : t;
}
var mH = {
  getKey: hH
};
function ri() {
}
function V1(e, t) {
  return Array.from({
    length: t
  }, function(n, r) {
    return r + e;
  });
}
function vH(e, t) {
  var n = /* @__PURE__ */ Object.create({});
  for (var r in t)
    if (!e.includes(r)) {
      var o;
      Object.assign(n, (o = {}, o[r] = t[r], o));
    }
  return n;
}
var gH = ["refs"], Wl = [], bH = ["autoFocus", "length", "validate", "format", "formatAriaLabel", "debug"], yH = ["onResolveKey", "onRejectKey", "onChange", "onComplete"], xH = ["Alt", "Control", "Enter", "Meta", "Shift", "Tab"], wH = {
  ref: {
    current: []
  },
  length: 5,
  validate: /^[a-zA-Z0-9]$/,
  format: function(t) {
    return t;
  },
  formatAriaLabel: function(t, n) {
    return "pin code " + t + " of " + n;
  },
  onResolveKey: ri,
  onRejectKey: ri,
  onChange: ri,
  onComplete: ri,
  debug: !1
};
function $H(e) {
  return {
    focusIdx: 0,
    codeLength: e.length,
    isKeyAllowed: _H(e.validate),
    fallback: null
  };
}
function z1(e) {
  return Math.max(0, e - 1);
}
function rd(e, t) {
  return t === 0 ? 0 : Math.min(e + 1, t - 1);
}
function _H(e) {
  return function(t) {
    return !t || t.length > 1 ? !1 : typeof e == "string" ? e.split("").includes(t) : e instanceof Array ? e.includes(t) : e instanceof RegExp ? e.test(t) : e(t);
  };
}
function Gm(e, t, n) {
  var r = n.split("").slice(0, e.codeLength).every(e.isKeyAllowed);
  if (!r)
    return [e, [{
      type: "set-input-val",
      idx: e.focusIdx,
      val: ""
    }, {
      type: "reject-key",
      idx: t,
      key: n
    }, {
      type: "handle-code-change"
    }]];
  var o = Math.min(n.length, e.codeLength - e.focusIdx), a = rd(o + e.focusIdx - 1, e.codeLength), s = V1(0, o).flatMap(function(i) {
    return [{
      type: "set-input-val",
      idx: i + e.focusIdx,
      val: n[i]
    }, {
      type: "resolve-key",
      idx: i + e.focusIdx,
      key: n[i]
    }];
  });
  return e.focusIdx !== a && s.push({
    type: "focus-input",
    idx: a
  }), s.push({
    type: "handle-code-change"
  }), [un({}, e, {
    focusIdx: a
  }), s];
}
var CH = function(t, n) {
  switch (n.type) {
    case "handle-key-down":
      switch (n.key) {
        case "Unidentified":
        case "Process":
          return [un({}, t, {
            fallback: {
              idx: t.focusIdx,
              val: n.val
            }
          }), Wl];
        case "Dead":
          return [t, [{
            type: "set-input-val",
            idx: t.focusIdx,
            val: ""
          }, {
            type: "reject-key",
            idx: t.focusIdx,
            key: n.key
          }, {
            type: "handle-code-change"
          }]];
        case "ArrowLeft": {
          var r = z1(t.focusIdx);
          return [un({}, t, {
            focusIdx: r
          }), [{
            type: "focus-input",
            idx: r
          }]];
        }
        case "ArrowRight": {
          var o = rd(t.focusIdx, t.codeLength);
          return [un({}, t, {
            focusIdx: o
          }), [{
            type: "focus-input",
            idx: o
          }]];
        }
        case "Delete":
        case "Backspace":
          return [t, [{
            type: "handle-delete",
            idx: t.focusIdx
          }, {
            type: "handle-code-change"
          }]];
        default: {
          if (!t.isKeyAllowed(n.key))
            return [t, [{
              type: "reject-key",
              idx: t.focusIdx,
              key: n.key
            }]];
          var a = rd(t.focusIdx, t.codeLength);
          return [un({}, t, {
            focusIdx: a
          }), [{
            type: "set-input-val",
            idx: t.focusIdx,
            val: n.key
          }, {
            type: "resolve-key",
            idx: t.focusIdx,
            key: n.key
          }, {
            type: "focus-input",
            idx: a
          }, {
            type: "handle-code-change"
          }]];
        }
      }
    case "handle-key-up": {
      if (!t.fallback)
        return [t, Wl];
      var s = un({}, t, {
        fallback: null
      }), i = [], c = t.fallback, l = c.idx, u = c.val, f = n.val;
      if (u === "" && f === "")
        i.push({
          type: "handle-delete",
          idx: l
        }, {
          type: "handle-code-change"
        });
      else if (f !== "")
        return Gm(s, l, f);
      return [s, i];
    }
    case "handle-paste":
      return Gm(t, n.idx, n.val);
    case "focus-input":
      return [un({}, t, {
        focusIdx: n.idx
      }), [{
        type: "focus-input",
        idx: n.idx
      }]];
    default:
      return [t, Wl];
  }
};
function SH(e) {
  var t = e.refs, n = pH(e, gH);
  return ve(function(r) {
    switch (r.type) {
      case "focus-input": {
        t.current[r.idx].focus();
        break;
      }
      case "set-input-val": {
        var o = n.format(r.val);
        t.current[r.idx].value = o;
        break;
      }
      case "resolve-key": {
        t.current[r.idx].setCustomValidity(""), n.onResolveKey(r.key, t.current[r.idx]);
        break;
      }
      case "reject-key": {
        t.current[r.idx].setCustomValidity("Invalid key"), n.onRejectKey(r.key, t.current[r.idx]);
        break;
      }
      case "handle-delete": {
        var a = t.current[r.idx].value;
        if (t.current[r.idx].setCustomValidity(""), t.current[r.idx].value = "", !a) {
          var s = z1(r.idx);
          t.current[s].focus(), t.current[s].setCustomValidity(""), t.current[s].value = "";
        }
        break;
      }
      case "handle-code-change": {
        var i = (n.dir || document.documentElement.getAttribute("dir") || "ltr").toLowerCase(), c = t.current.map(function(u) {
          return u.value.trim();
        }), l = (i === "rtl" ? c.reverse() : c).join("");
        n.onChange(l), l.length === n.length && n.onComplete(l);
        break;
      }
    }
  }, [n, t]);
}
var NH = /* @__PURE__ */ L(function(e, t) {
  var n = un({}, wH, e), r = n.autoFocus, o = n.formatAriaLabel, a = n.length, s = vH([].concat(bH, yH), n), i = q([]), c = SH(un({
    refs: i
  }, n)), l = fH(CH, c, $H(n))[1];
  av(t, function() {
    return i.current;
  }, [i]);
  function u(g) {
    return function() {
      l({
        type: "focus-input",
        idx: g
      });
    };
  }
  function f(g) {
    return function(b) {
      var y = mH.getKey(b.nativeEvent);
      !xH.includes(y) && !b.ctrlKey && !b.altKey && !b.metaKey && b.nativeEvent.target instanceof HTMLInputElement && (b.preventDefault(), l({
        type: "handle-key-down",
        idx: g,
        key: y,
        val: b.nativeEvent.target.value
      }));
    };
  }
  function p(g) {
    return function(b) {
      b.nativeEvent.target instanceof HTMLInputElement && l({
        type: "handle-key-up",
        idx: g,
        val: b.nativeEvent.target.value
      });
    };
  }
  function h(g) {
    return function(b) {
      b.preventDefault();
      var y = b.clipboardData.getData("Text");
      l({
        type: "handle-paste",
        idx: g,
        val: y
      });
    };
  }
  function m(g) {
    return function(b) {
      b && (i.current[g] = b);
    };
  }
  function v(g) {
    return !!(g === 0 && r);
  }
  return I.createElement(I.Fragment, null, V1(0, a).map(function(g) {
    return I.createElement("input", Object.assign({
      type: "text",
      autoCapitalize: "off",
      autoCorrect: "off",
      autoComplete: "off",
      inputMode: "text"
    }, s, {
      "aria-disabled": s.disabled ? "true" : void 0,
      "aria-label": o(g + 1, a),
      "aria-readonly": s.readOnly ? "true" : void 0,
      "aria-required": "true",
      key: g,
      ref: m(g),
      autoFocus: v(g),
      onFocus: u(g),
      onKeyDown: f(g),
      onKeyUp: p(g),
      onPaste: h(g)
    }));
  }));
});
const xq = ({ onComplete: e, mode: t, length: n, disabled: r, tabIndex: o, autoFocus: a, containerClassName: s, className: i, ...c }) => {
  const [l] = I.useState(!1);
  return /* @__PURE__ */ d.jsx("div", { className: M("pin-field-container", s), children: /* @__PURE__ */ d.jsx(
    NH,
    {
      className: M("pin-field", { complete: l }, i),
      onComplete: e,
      validate: t === "numeric" ? "0123456789" : "abcABC123",
      disabled: r,
      length: n,
      ...c
    }
  ) });
};
var W1 = {}, ep = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getListFiles = e.getImage = e.getBase64 = e.getAcceptTypeString = e.openFileDialog = void 0, e.openFileDialog = function(t) {
    t.current && t.current.click();
  }, e.getAcceptTypeString = function(t, n) {
    return t != null && t.length ? t.map(function(r) {
      return "." + r;
    }).join(", ") : n ? "" : "image/*";
  }, e.getBase64 = function(t) {
    var n = new FileReader();
    return new Promise(function(r) {
      n.addEventListener("load", function() {
        return r(String(n.result));
      }), n.readAsDataURL(t);
    });
  }, e.getImage = function(t) {
    var n = new Image();
    return new Promise(function(r) {
      n.addEventListener("load", function() {
        return r(n);
      }), n.src = URL.createObjectURL(t);
    });
  }, e.getListFiles = function(t, n) {
    for (var r = [], o = 0; o < t.length; o += 1)
      r.push(e.getBase64(t[o]));
    return Promise.all(r).then(function(a) {
      var s = a.map(function(i, c) {
        var l;
        return l = {}, l[n] = i, l.file = t[c], l;
      });
      return s;
    });
  };
})(ep);
var U1 = {}, Qn = {};
Object.defineProperty(Qn, "__esModule", { value: !0 });
Qn.DEFAULT_DATA_URL_KEY = Qn.INIT_MAX_NUMBER = Qn.DEFAULT_NULL_INDEX = void 0;
Qn.DEFAULT_NULL_INDEX = -1;
Qn.INIT_MAX_NUMBER = 1e3;
Qn.DEFAULT_DATA_URL_KEY = "dataURL";
(function(e) {
  var t = mt && mt.__awaiter || function(a, s, i, c) {
    function l(u) {
      return u instanceof i ? u : new i(function(f) {
        f(u);
      });
    }
    return new (i || (i = Promise))(function(u, f) {
      function p(v) {
        try {
          m(c.next(v));
        } catch (g) {
          f(g);
        }
      }
      function h(v) {
        try {
          m(c.throw(v));
        } catch (g) {
          f(g);
        }
      }
      function m(v) {
        v.done ? u(v.value) : l(v.value).then(p, h);
      }
      m((c = c.apply(a, s || [])).next());
    });
  }, n = mt && mt.__generator || function(a, s) {
    var i = { label: 0, sent: function() {
      if (u[0] & 1)
        throw u[1];
      return u[1];
    }, trys: [], ops: [] }, c, l, u, f;
    return f = { next: p(0), throw: p(1), return: p(2) }, typeof Symbol == "function" && (f[Symbol.iterator] = function() {
      return this;
    }), f;
    function p(m) {
      return function(v) {
        return h([m, v]);
      };
    }
    function h(m) {
      if (c)
        throw new TypeError("Generator is already executing.");
      for (; i; )
        try {
          if (c = 1, l && (u = m[0] & 2 ? l.return : m[0] ? l.throw || ((u = l.return) && u.call(l), 0) : l.next) && !(u = u.call(l, m[1])).done)
            return u;
          switch (l = 0, u && (m = [m[0] & 2, u.value]), m[0]) {
            case 0:
            case 1:
              u = m;
              break;
            case 4:
              return i.label++, { value: m[1], done: !1 };
            case 5:
              i.label++, l = m[1], m = [0];
              continue;
            case 7:
              m = i.ops.pop(), i.trys.pop();
              continue;
            default:
              if (u = i.trys, !(u = u.length > 0 && u[u.length - 1]) && (m[0] === 6 || m[0] === 2)) {
                i = 0;
                continue;
              }
              if (m[0] === 3 && (!u || m[1] > u[0] && m[1] < u[3])) {
                i.label = m[1];
                break;
              }
              if (m[0] === 6 && i.label < u[1]) {
                i.label = u[1], u = m;
                break;
              }
              if (u && i.label < u[2]) {
                i.label = u[2], i.ops.push(m);
                break;
              }
              u[2] && i.ops.pop(), i.trys.pop();
              continue;
          }
          m = s.call(a, i);
        } catch (v) {
          m = [6, v], l = 0;
        } finally {
          c = u = 0;
        }
      if (m[0] & 5)
        throw m[1];
      return { value: m[0] ? m[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getErrorValidation = e.isMaxNumberValid = e.isAcceptTypeValid = e.isMaxFileSizeValid = e.isImageValid = e.isResolutionValid = void 0;
  var r = Qn, o = ep;
  e.isResolutionValid = function(a, s, i, c) {
    if (i === void 0 && (i = 0), c === void 0 && (c = 1), !i || !c || !a.width || !a.height)
      return !0;
    switch (s) {
      case "absolute": {
        if (a.width === i && a.height === c)
          return !0;
        break;
      }
      case "ratio": {
        var l = i / c;
        if (a.width / a.height === l)
          return !0;
        break;
      }
      case "less": {
        if (a.width <= i && a.height <= c)
          return !0;
        break;
      }
      case "more": {
        if (a.width >= i && a.height >= c)
          return !0;
        break;
      }
    }
    return !1;
  }, e.isImageValid = function(a) {
    return !!a.includes("image");
  }, e.isMaxFileSizeValid = function(a, s) {
    return s ? a <= s : !0;
  }, e.isAcceptTypeValid = function(a, s) {
    if (a && a.length > 0) {
      var i = s.split(".").pop() || "";
      if (a.findIndex(function(c) {
        return c.toLowerCase() === i.toLowerCase();
      }) < 0)
        return !1;
    }
    return !0;
  }, e.isMaxNumberValid = function(a, s, i) {
    if (s !== 0 && !s)
      return !0;
    if (i === r.DEFAULT_NULL_INDEX) {
      if (a <= s)
        return !0;
    } else if (a <= s + 1)
      return !0;
    return !1;
  }, e.getErrorValidation = function(a) {
    var s = a.fileList, i = a.value, c = a.maxNumber, l = a.keyUpdate, u = a.acceptType, f = a.maxFileSize, p = a.resolutionType, h = a.resolutionWidth, m = a.resolutionHeight, v = a.allowNonImageType;
    return t(void 0, void 0, void 0, function() {
      var g, b, y, x, _;
      return n(this, function(w) {
        switch (w.label) {
          case 0:
            return g = {}, e.isMaxNumberValid(s.length + i.length, c, l) ? [3, 1] : (g.maxNumber = !0, [3, 5]);
          case 1:
            b = 0, w.label = 2;
          case 2:
            return b < s.length ? (y = s[b].file, y ? !v && !e.isImageValid(y.type) ? (g.acceptType = !0, [3, 5]) : e.isAcceptTypeValid(u, y.name) ? e.isMaxFileSizeValid(y.size, f) ? p ? [4, o.getImage(y)] : [3, 4] : (g.maxFileSize = !0, [3, 5]) : (g.acceptType = !0, [3, 5]) : [3, 4]) : [3, 5];
          case 3:
            if (x = w.sent(), _ = e.isResolutionValid(x, p, h, m), !_)
              return g.resolution = !0, [3, 5];
            w.label = 4;
          case 4:
            return b += 1, [3, 2];
          case 5:
            return Object.values(g).find(Boolean) ? [2, g] : [2, null];
        }
      });
    });
  };
})(U1);
var od = mt && mt.__assign || function() {
  return od = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, od.apply(this, arguments);
}, EH = mt && mt.__createBinding || (Object.create ? function(e, t, n, r) {
  r === void 0 && (r = n), Object.defineProperty(e, r, { enumerable: !0, get: function() {
    return t[n];
  } });
} : function(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}), PH = mt && mt.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), OH = mt && mt.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && EH(t, e, n);
  return PH(t, e), t;
}, Ul = mt && mt.__awaiter || function(e, t, n, r) {
  function o(a) {
    return a instanceof n ? a : new n(function(s) {
      s(a);
    });
  }
  return new (n || (n = Promise))(function(a, s) {
    function i(u) {
      try {
        l(r.next(u));
      } catch (f) {
        s(f);
      }
    }
    function c(u) {
      try {
        l(r.throw(u));
      } catch (f) {
        s(f);
      }
    }
    function l(u) {
      u.done ? a(u.value) : o(u.value).then(i, c);
    }
    l((r = r.apply(e, t || [])).next());
  });
}, Hl = mt && mt.__generator || function(e, t) {
  var n = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, o, a, s;
  return s = { next: i(0), throw: i(1), return: i(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function i(l) {
    return function(u) {
      return c([l, u]);
    };
  }
  function c(l) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; n; )
      try {
        if (r = 1, o && (a = l[0] & 2 ? o.return : l[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, l[1])).done)
          return a;
        switch (o = 0, a && (l = [l[0] & 2, a.value]), l[0]) {
          case 0:
          case 1:
            a = l;
            break;
          case 4:
            return n.label++, { value: l[1], done: !1 };
          case 5:
            n.label++, o = l[1], l = [0];
            continue;
          case 7:
            l = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (l[0] === 6 || l[0] === 2)) {
              n = 0;
              continue;
            }
            if (l[0] === 3 && (!a || l[1] > a[0] && l[1] < a[3])) {
              n.label = l[1];
              break;
            }
            if (l[0] === 6 && n.label < a[1]) {
              n.label = a[1], a = l;
              break;
            }
            if (a && n.label < a[2]) {
              n.label = a[2], n.ops.push(l);
              break;
            }
            a[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        l = t.call(e, n);
      } catch (u) {
        l = [6, u], o = 0;
      } finally {
        r = a = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}, Kl = mt && mt.__spreadArrays || function() {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++)
    e += arguments[t].length;
  for (var r = Array(e), o = 0, t = 0; t < n; t++)
    for (var a = arguments[t], s = 0, i = a.length; s < i; s++, o++)
      r[o] = a[s];
  return r;
};
Object.defineProperty(W1, "__esModule", { value: !0 });
var sn = OH(I), Gl = ep, TH = U1, pr = Qn, jH = function(e) {
  var t = e.value, n = t === void 0 ? [] : t, r = e.onChange, o = e.onError, a = e.children, s = e.dataURLKey, i = s === void 0 ? pr.DEFAULT_DATA_URL_KEY : s, c = e.multiple, l = c === void 0 ? !1 : c, u = e.maxNumber, f = u === void 0 ? pr.INIT_MAX_NUMBER : u, p = e.acceptType, h = e.maxFileSize, m = e.resolutionWidth, v = e.resolutionHeight, g = e.resolutionType, b = e.inputProps, y = b === void 0 ? {} : b, x = e.allowNonImageType, _ = x === void 0 ? !1 : x, w = n || [], N = sn.useRef(null), S = sn.useState(pr.DEFAULT_NULL_INDEX), D = S[0], P = S[1], z = sn.useState(null), K = z[0], R = z[1], W = sn.useState(!1), V = W[0], E = W[1], B = sn.useCallback(function() {
    return Gl.openFileDialog(N);
  }, [
    N
  ]), T = sn.useCallback(function() {
    P(pr.DEFAULT_NULL_INDEX), B();
  }, [B]), U = sn.useCallback(function() {
    r == null || r([]);
  }, [r]), G = function(ae) {
    var fe = Kl(w);
    Array.isArray(ae) ? ae.forEach(function(A) {
      fe.splice(A, 1);
    }) : fe.splice(ae, 1), r == null || r(fe);
  }, Q = function(ae) {
    P(ae), B();
  }, oe = function(ae) {
    return Ul(void 0, void 0, void 0, function() {
      var fe;
      return Hl(this, function(A) {
        switch (A.label) {
          case 0:
            return [4, TH.getErrorValidation({
              fileList: ae,
              maxFileSize: h,
              maxNumber: f,
              acceptType: p,
              keyUpdate: D,
              resolutionType: g,
              resolutionWidth: m,
              resolutionHeight: v,
              value: w,
              allowNonImageType: _
            })];
          case 1:
            return fe = A.sent(), fe ? (R(fe), o == null || o(fe, ae), [2, !1]) : (K && R(null), [2, !0]);
        }
      });
    });
  }, H = function(ae) {
    return Ul(void 0, void 0, void 0, function() {
      var fe, A, ne, ye, Pe, Ie;
      return Hl(this, function(Oe) {
        switch (Oe.label) {
          case 0:
            return ae ? [4, Gl.getListFiles(ae, i)] : [
              2
              /*return*/
            ];
          case 1:
            return fe = Oe.sent(), fe.length ? [4, oe(fe)] : [
              2
              /*return*/
            ];
          case 2:
            if (A = Oe.sent(), !A)
              return [
                2
                /*return*/
              ];
            if (ye = [], D > pr.DEFAULT_NULL_INDEX)
              Pe = fe[0], ne = Kl(w), ne[D] = Pe, ye.push(D);
            else if (l)
              for (ne = Kl(w, fe), Ie = w.length; Ie < ne.length; Ie += 1)
                ye.push(Ie);
            else
              ne = [fe[0]], ye.push(0);
            return r == null || r(ne, ye), [
              2
              /*return*/
            ];
        }
      });
    });
  }, le = function(ae) {
    return Ul(void 0, void 0, void 0, function() {
      return Hl(this, function(fe) {
        switch (fe.label) {
          case 0:
            return [4, H(ae.target.files)];
          case 1:
            return fe.sent(), D > pr.DEFAULT_NULL_INDEX && P(pr.DEFAULT_NULL_INDEX), N.current && (N.current.value = ""), [
              2
              /*return*/
            ];
        }
      });
    });
  }, be = sn.useMemo(function() {
    return Gl.getAcceptTypeString(p, _);
  }, [p, _]), pe = function(ae) {
    ae.preventDefault(), ae.stopPropagation();
  }, ee = function(ae) {
    ae.preventDefault(), ae.stopPropagation(), ae.dataTransfer.items && ae.dataTransfer.items.length > 0 && E(!0);
  }, re = function(ae) {
    ae.preventDefault(), ae.stopPropagation(), E(!1);
  }, me = function(ae) {
    ae.preventDefault(), ae.stopPropagation(), E(!1), ae.dataTransfer.files && ae.dataTransfer.files.length > 0 && H(ae.dataTransfer.files);
  }, _e = function(ae) {
    ae.preventDefault(), ae.stopPropagation(), ae.dataTransfer.clearData();
  };
  return sn.default.createElement(
    sn.default.Fragment,
    null,
    sn.default.createElement("input", od({ type: "file", accept: be, ref: N, multiple: l && D === pr.DEFAULT_NULL_INDEX, onChange: le, style: { display: "none" } }, y)),
    a == null ? void 0 : a({
      imageList: w,
      onImageUpload: T,
      onImageRemoveAll: U,
      onImageUpdate: Q,
      onImageRemove: G,
      errors: K,
      dragProps: {
        onDrop: me,
        onDragEnter: ee,
        onDragLeave: re,
        onDragOver: pe,
        onDragStart: _e
      },
      isDragging: V
    })
  );
}, H1 = W1.default = jH;
const kH = (e, t) => {
  const n = e.split(","), r = n[0].match(/:(.*?);/);
  if (!r)
    throw new Error("Invalid data URI");
  const o = r[1], a = atob(n[1]), s = new ArrayBuffer(a.length), i = new Uint8Array(s);
  for (let c = 0; c < a.length; c++)
    i[c] = a.charCodeAt(c);
  return new File([s], t, { type: o });
}, K1 = ({
  resizer: e,
  imageFile: t,
  maxWidth: n = 1080,
  // Nueva resolución horizontal
  maxHeight: r = 720,
  // Nueva resolución vertical
  compressFormat: o = "png",
  // Formato de salida (JPEG, PNG, WEBP)
  quality: a = 80,
  // Calidad de compresión (0-100)
  rotation: s = 0,
  // Rotación en grados (0, 90, 180, 270)
  outputType: i = "base64"
}) => new Promise((c) => {
  e == null || e.imageFileResizer(
    t,
    n,
    r,
    o,
    a,
    s,
    async (l) => {
      const u = kH(l == null ? void 0 : l.toString(), t.name);
      c({ data_url: l, file: u });
    },
    i
  );
});
function rc(e, t) {
  fetch(e).then((n) => n.blob()).then((n) => {
    const r = window.URL.createObjectURL(new Blob([n])), o = document.createElement("a");
    o.href = r, o.setAttribute("download", t || "imagen.jpg"), document.body.appendChild(o), o.click();
  });
}
const MH = (e) => {
  const { imageIndex: t, compress: n, disabled: r, tabIndexs: o, onImageUpdate: a, setUploadImage: s, onImageRemove: i, setLocalImage: c, download: l, handleOnRemove: u, edit: f, src: p } = e;
  return /* @__PURE__ */ d.jsxs("div", { className: "mt-2 gap-x-2 w-fit flex flex-col justify-center items-end gap-y-2 absolute top-2 right-4 bg-transparent", children: [
    (n == null ? void 0 : n.openComparisons) && !r && /* @__PURE__ */ d.jsx(
      Ve,
      {
        size: "icon",
        type: "button",
        tabIndex: o == null ? void 0 : o.viewCompress,
        onClick: () => n.openComparisons(),
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ d.jsx(y1, { size: 16 })
      }
    ),
    !r && f && /* @__PURE__ */ d.jsx(
      Ve,
      {
        size: "icon",
        type: "button",
        tabIndex: o == null ? void 0 : o.change,
        onClick: () => a(t),
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ d.jsx(xv, { size: 16 })
      }
    ),
    !r && /* @__PURE__ */ d.jsx(
      Ve,
      {
        tabIndex: o == null ? void 0 : o.delete,
        type: "button",
        size: "icon",
        onClick: () => {
          u(t), i(t), c([]), s({ original: null, compressed: null });
        },
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ d.jsx(wv, { size: 16 })
      }
    ),
    l && p && /* @__PURE__ */ d.jsx(
      Ve,
      {
        size: "icon",
        type: "button",
        tabIndex: o == null ? void 0 : o.viewCompress,
        onClick: () => rc(p, "imagen.jpg"),
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ d.jsx(bi, { size: 16 })
      }
    )
  ] });
}, DH = ({ dragProps: e, isDragging: t, emptyClassName: n, tabIndexs: r, uploadLabel: o, disabled: a, onImageUpload: s }) => /* @__PURE__ */ d.jsxs(
  "div",
  {
    ...e,
    className: M(
      `${t ? "border-indigo-600" : "border-gray-300"}`,
      "h-[250px] mt-1 flex flex-col justify-center items-center px-6 pt-5 pb-6 border-2 border-dashed border-muted-foreground rounded-md text-center",
      n
    ),
    children: [
      /* @__PURE__ */ d.jsx(
        Ve,
        {
          size: "icon",
          type: "button",
          variant: "outline",
          tabIndex: r == null ? void 0 : r.upload,
          disabled: a,
          className: M("mt-2", t && "text-indigo-600", a && "cursor-not-allowed"),
          onClick: s,
          children: /* @__PURE__ */ d.jsx(fd, { size: 24 })
        }
      ),
      !a && /* @__PURE__ */ d.jsx("span", { className: "font-normal text-sm text-zinc-500", children: "o arrastra y suelta una imagen" })
    ]
  }
), G1 = ({ src: e, containerClassName: t, imageClassName: n, zoom: r, fallback: o, download: a, filename: s, ...i }) => {
  const [c, l] = Z(!1);
  return r ? /* @__PURE__ */ d.jsxs("div", { className: "w-full h-fit relative", children: [
    a && /* @__PURE__ */ d.jsx(
      Ve,
      {
        type: "button",
        onClick: () => rc(e, s),
        className: "absolute top-2 right-2 w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ d.jsx(bi, { size: 18 })
      }
    ),
    /* @__PURE__ */ d.jsxs(yy, { open: c, onOpenChange: l, children: [
      /* @__PURE__ */ d.jsxs(Po, { className: M("relative w-auto h-[236px] rounded-md bg-muted p-4 hover:bg-zinc-900/10 dark:hover:bg-zinc-50/20 transition-colors ease-in-out duration-200", t), children: [
        /* @__PURE__ */ d.jsx(
          Hr,
          {
            ...i,
            src: e,
            onClick: () => l(!0),
            className: M("aspect-video w-auto rounded-md object-contain m-auto h-full cursor-zoom-in", n)
          }
        ),
        /* @__PURE__ */ d.jsx(Oo, { className: M("w-full h-full rounded-md", o == null ? void 0 : o.className), children: (o == null ? void 0 : o.children) || /* @__PURE__ */ d.jsx(al, {}) })
      ] }),
      /* @__PURE__ */ d.jsx($f, { className: "p-10 bg-transparent border-none shadow-none w-[90vw] h-screen mx-auto sm:max-w-none sm:border-none", style: { background: "transparent !important" }, onClick: () => l(!1), children: /* @__PURE__ */ d.jsxs(Po, { className: M("w-full h-full rounded-md"), children: [
        /* @__PURE__ */ d.jsx(Hr, { src: e, className: M("aspect-video rounded-md object-contain m-auto h-full"), style: { width: "-webkit-fill-available" } }),
        /* @__PURE__ */ d.jsx(Oo, { className: M("w-full h-full rounded-md", o == null ? void 0 : o.className), children: (o == null ? void 0 : o.children) || /* @__PURE__ */ d.jsx(al, {}) })
      ] }) })
    ] })
  ] }) : /* @__PURE__ */ d.jsx("div", { className: "w-full", children: /* @__PURE__ */ d.jsxs(Po, { className: M("relative w-full h-[236px] rounded-md bg-muted p-4 hover:bg-zinc-900/10 dark:hover:bg-zinc-50/20 transition-colors ease-in-out duration-200", t), children: [
    a && /* @__PURE__ */ d.jsx(
      Ve,
      {
        type: "button",
        onClick: () => rc(e, s),
        className: "absolute top-2 right-2 w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ d.jsx(bi, { size: 18 })
      }
    ),
    /* @__PURE__ */ d.jsx(
      Hr,
      {
        ...i,
        src: e,
        className: M("aspect-video w-auto rounded-md object-contain m-auto h-full", n),
        style: { width: "-webkit-fill-available" }
      }
    ),
    /* @__PURE__ */ d.jsx(Oo, { className: M("w-full h-full rounded-md", o == null ? void 0 : o.className), children: (o == null ? void 0 : o.children) || /* @__PURE__ */ d.jsx(al, {}) })
  ] }) });
}, wq = (e) => {
  const { edit: t = !0, initialPreview: n = null, setUploadImage: r, crossOrigin: o, format: a, label: s, uploadLabel: i, tabIndexs: c, disabled: l, emptyClassName: u, imageContainerClassName: f, zoom: p, compress: h, download: m, onRemove: v, onEdit: g } = e, [b, y] = Z(n ? [{ data_url: n, file: null }] : []), x = async (w, N) => {
    var z, K, R, W, V, E, B, T, U, G;
    const S = (z = w[0]) == null ? void 0 : z.file, D = (K = w[0]) == null ? void 0 : K.data_url;
    S || (y([]), r({ original: null, compressed: null })), y(w);
    const P = gi((R = w[0]) == null ? void 0 : R.file.size);
    if (h != null && h.resizer && S) {
      const { data_url: Q, file: oe } = await K1({
        resizer: h == null ? void 0 : h.resizer,
        imageFile: S,
        quality: (a == null ? void 0 : a.quality) || 10,
        maxWidth: (a == null ? void 0 : a.width) || 500,
        maxHeight: (a == null ? void 0 : a.width) || 500,
        compressFormat: (a == null ? void 0 : a.extension) || "png",
        rotation: (a == null ? void 0 : a.rotation) || 0
      }), H = gi(oe.size);
      r({
        original: {
          preview: D,
          file: S,
          size: {
            formated: P,
            bytes: (W = w[0]) == null ? void 0 : W.file.size
          }
        },
        compressed: {
          preview: Q == null ? void 0 : Q.toString(),
          file: oe,
          size: {
            formated: H,
            bytes: oe.size
          }
        }
      });
      return;
    }
    g && (V = w[0]) != null && V.data_url && g({
      data_url: ((E = w[0]) == null ? void 0 : E.data_url) || null,
      file: ((B = w[0]) == null ? void 0 : B.file) || null
    }), r({
      original: {
        preview: (T = w[0]) == null ? void 0 : T.data_url,
        file: (U = w[0]) == null ? void 0 : U.file,
        size: { formated: P, bytes: (G = w[0]) == null ? void 0 : G.file.size }
      },
      compressed: null
    });
  }, _ = (w) => {
    w == null || !b || !b.length || v && v(b[w]);
  };
  return J(() => {
    n && y([{ data_url: n, file: null }]);
  }, [n]), /* @__PURE__ */ d.jsxs("div", { className: "w-full h-full", children: [
    s && /* @__PURE__ */ d.jsx(Un, { children: s }),
    s && /* @__PURE__ */ d.jsx("div", { className: "my-2" }),
    /* @__PURE__ */ d.jsx(
      H1,
      {
        value: b,
        onChange: x,
        dataURLKey: "data_url",
        acceptType: ["webp", "png", "jpg", "jpeg"],
        children: ({ imageList: w, onImageUpload: N, onImageUpdate: S, onImageRemove: D, isDragging: P, dragProps: z }) => /* @__PURE__ */ d.jsx(d.Fragment, { children: w.length >= 1 ? /* @__PURE__ */ d.jsx("div", { children: w.map((K, R) => /* @__PURE__ */ d.jsxs("div", { className: "imagen-container w-full flex flex-col justify-center items-center relative", children: [
          /* @__PURE__ */ d.jsx(
            G1,
            {
              zoom: p,
              src: K == null ? void 0 : K.data_url,
              crossOrigin: o,
              containerClassName: f
            }
          ),
          /* @__PURE__ */ d.jsx(
            MH,
            {
              edit: t,
              imageIndex: R,
              compress: h,
              disabled: l,
              download: m,
              tabIndexs: c,
              src: K == null ? void 0 : K.data_url,
              onImageRemove: D,
              onImageUpdate: S,
              setLocalImage: y,
              setUploadImage: r,
              handleOnRemove: _
            }
          )
        ] }, R)) }) : /* @__PURE__ */ d.jsx(d.Fragment, { children: /* @__PURE__ */ d.jsx(
          DH,
          {
            dragProps: z,
            emptyClassName: u,
            isDragging: P,
            onImageUpload: N,
            tabIndexs: c,
            uploadLabel: i,
            disabled: l
          }
        ) }) })
      }
    )
  ] });
}, AH = (e) => {
  const { imageIndex: t, compress: n, tabIndexs: r, onImageUpdate: o, onImageRemove: a, disabled: s, download: i, handleOnRemoveImage: c, src: l, edit: u } = e;
  return /* @__PURE__ */ d.jsxs("div", { className: "mt-2 gap-x-2 w-fit flex flex-col justify-center items-end gap-y-2 absolute top-2 right-4 bg-transparent", children: [
    (n == null ? void 0 : n.openComparisons) && !s && /* @__PURE__ */ d.jsx(
      Ve,
      {
        size: "icon",
        type: "button",
        tabIndex: r == null ? void 0 : r.viewCompress,
        onClick: () => n.openComparisons(),
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ d.jsx(y1, { size: 16 })
      }
    ),
    !s && u && /* @__PURE__ */ d.jsx(
      Ve,
      {
        size: "icon",
        type: "button",
        tabIndex: r == null ? void 0 : r.change,
        onClick: () => o(t),
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ d.jsx(xv, { size: 16 })
      }
    ),
    !s && /* @__PURE__ */ d.jsx(
      Ve,
      {
        tabIndex: r == null ? void 0 : r.delete,
        type: "button",
        size: "icon",
        onClick: () => {
          c(t), a(t);
        },
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ d.jsx(wv, { size: 16 })
      }
    ),
    i && l && /* @__PURE__ */ d.jsx(
      Ve,
      {
        size: "icon",
        type: "button",
        tabIndex: r == null ? void 0 : r.viewCompress,
        onClick: () => rc(l, "imagen.jpg"),
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ d.jsx(bi, { size: 16 })
      }
    )
  ] });
}, RH = ({ dragProps: e, isDragging: t, emptyClassName: n, tabIndexs: r, uploadLabel: o, disabled: a, onImageUpload: s }) => /* @__PURE__ */ d.jsxs(
  "div",
  {
    ...e,
    className: M(
      `${t ? "border-indigo-600" : "border-muted-foreground"}`,
      "h-[250px] mt-1 flex flex-col justify-center items-center px-6 pt-5 pb-6 border-2 border-dashed border-muted-foreground rounded-md text-center",
      n
    ),
    children: [
      /* @__PURE__ */ d.jsx(
        Ve,
        {
          size: "icon",
          type: "button",
          variant: "outline",
          tabIndex: r == null ? void 0 : r.upload,
          disabled: a,
          className: `mt-2 ${t && "text-indigo-600"}`,
          onClick: s,
          children: /* @__PURE__ */ d.jsx(fd, { size: 24 })
        }
      ),
      !a && /* @__PURE__ */ d.jsx("span", { className: "font-normal text-sm text-zinc-500", children: "o arrastra y suelta una imagen" })
    ]
  }
), $q = (e) => {
  const { edit: t = !0, label: n, setUploadImages: r, format: o, uploadLabel: a, tabIndexs: s, emptyClassName: i, crossOrigin: c, imageContainerClassName: l, zoom: u, compress: f, limit: p, initialPreview: h, disabled: m, download: v, onRemove: g, onEdit: b } = e, [y, x] = Z([]);
  J(() => {
    h && h.length && x([...h]);
  }, [h]);
  const _ = async (N, S) => {
    x(N);
    const D = N.map(async (P) => {
      var z, K, R, W;
      if (f != null && f.resizer && (P != null && P.file) && !((z = P == null ? void 0 : P.file) != null && z.compressed)) {
        const { data_url: V, file: E } = await K1({
          imageFile: P == null ? void 0 : P.file,
          resizer: f == null ? void 0 : f.resizer,
          quality: (o == null ? void 0 : o.quality) || 10,
          maxWidth: (o == null ? void 0 : o.width) || 500,
          maxHeight: (o == null ? void 0 : o.width) || 500,
          rotation: (o == null ? void 0 : o.rotation) || 0,
          compressFormat: (o == null ? void 0 : o.extension) || "png"
        }), B = gi(E == null ? void 0 : E.size), T = {
          original: {
            preview: P == null ? void 0 : P.data_url,
            file: P == null ? void 0 : P.file,
            size: {
              formated: (K = P == null ? void 0 : P.file) != null && K.size ? gi((R = P == null ? void 0 : P.file) == null ? void 0 : R.size) : null,
              bytes: ((W = P == null ? void 0 : P.file) == null ? void 0 : W.size) || null
            }
          },
          compressed: {
            preview: V == null ? void 0 : V.toString(),
            file: E,
            size: {
              formated: B,
              bytes: E == null ? void 0 : E.size
            }
          }
        };
        return {
          ...P,
          file: T,
          data_url: P == null ? void 0 : P.data_url
        };
      } else
        return {
          ...P,
          file: (P == null ? void 0 : P.file) || null
        };
    });
    if (b && S) {
      const P = N[S[0]];
      P != null && P.data_url && b({
        data_url: (P == null ? void 0 : P.data_url) || null,
        file: (P == null ? void 0 : P.file) || null
      });
    }
    Promise.all(D).then((P) => {
      r(P);
    });
  }, w = (N) => {
    N == null || !y || !y.length || g && g(y[N]);
  };
  return /* @__PURE__ */ d.jsxs("div", { children: [
    n && /* @__PURE__ */ d.jsx(Un, { children: n }),
    /* @__PURE__ */ d.jsx("div", { className: "my-2" }),
    /* @__PURE__ */ d.jsx(
      H1,
      {
        multiple: !0,
        value: y,
        dataURLKey: "data_url",
        onChange: _,
        acceptType: ["webp", "png", "jpeg", "jpg"],
        maxNumber: p,
        children: ({ imageList: N, onImageUpload: S, onImageUpdate: D, onImageRemove: P, isDragging: z, dragProps: K }) => /* @__PURE__ */ d.jsx(d.Fragment, { children: N.length >= 1 ? /* @__PURE__ */ d.jsxs(
          "div",
          {
            className: `grid ${p === 1 || !p ? "grid-cols-1" : "grid-cols-2"} grid-flow-row gap-4`,
            children: [
              N.map((R, W) => /* @__PURE__ */ d.jsxs(
                "div",
                {
                  className: "imagen-container w-full flex flex-col justify-center items-center relative",
                  children: [
                    /* @__PURE__ */ d.jsx(
                      G1,
                      {
                        zoom: u,
                        src: R == null ? void 0 : R.data_url,
                        crossOrigin: c,
                        containerClassName: l
                      }
                    ),
                    /* @__PURE__ */ d.jsx(
                      AH,
                      {
                        edit: t,
                        imageIndex: W,
                        download: v,
                        compress: f,
                        disabled: m,
                        tabIndexs: s,
                        src: R == null ? void 0 : R.data_url,
                        onImageRemove: P,
                        onImageUpdate: D,
                        handleOnRemoveImage: w
                      }
                    )
                  ]
                },
                W
              )),
              y.length < p && /* @__PURE__ */ d.jsx("div", { className: "imagen-container", children: /* @__PURE__ */ d.jsx(
                "div",
                {
                  ...K,
                  className: M(
                    `w-full h-[237px] ${z ? "border-indigo-600" : "border-muted-foreground"} flex flex-col justify-center items-center border-dashed border-muted-foreground border-2 bg-slate-50 bg-opacity-5 rounded-md p-2`,
                    l
                  ),
                  children: /* @__PURE__ */ d.jsx(
                    Ve,
                    {
                      size: "icon",
                      type: "button",
                      variant: "outline",
                      tabIndex: s == null ? void 0 : s.upload,
                      disabled: m,
                      className: `mt-2 ${z && "text-indigo-600"}`,
                      onClick: S,
                      children: /* @__PURE__ */ d.jsx(fd, { size: 24 })
                    }
                  )
                }
              ) })
            ]
          }
        ) : /* @__PURE__ */ d.jsx(
          RH,
          {
            dragProps: K,
            emptyClassName: i,
            isDragging: z,
            onImageUpload: S,
            tabIndexs: s,
            uploadLabel: a,
            disabled: m
          }
        ) })
      }
    )
  ] });
};
function _q({
  id: e,
  form: t,
  label: n,
  items: r,
  disabled: o,
  tabIndex: a,
  isLoading: s,
  placeholder: i,
  defaultValue: c,
  notFoundLabel: l,
  classNameGroup: u,
  ctaPlaceholder: f,
  buttonClassName: p,
  popoverClassName: h
}) {
  const [m, v] = Z(!1);
  return s ? /* @__PURE__ */ d.jsxs("div", { className: M("w-full"), children: [
    /* @__PURE__ */ d.jsx("div", { className: "flex justify-start items-end", children: n && /* @__PURE__ */ d.jsx(Ot, { className: "h-5 w-full max-w-[90px]" }) }),
    /* @__PURE__ */ d.jsx("div", { className: "relative", children: /* @__PURE__ */ d.jsx(
      Ot,
      {
        className: M("w-full h-9 mt-2")
      }
    ) })
  ] }) : /* @__PURE__ */ d.jsx(
    uo,
    {
      control: t.control,
      name: e,
      defaultValue: c,
      render: ({ field: g }) => {
        var b;
        return /* @__PURE__ */ d.jsxs(Mr, { className: "flex flex-col", children: [
          /* @__PURE__ */ d.jsx(Un, { children: n }),
          /* @__PURE__ */ d.jsxs(tr, { open: m, onOpenChange: v, children: [
            /* @__PURE__ */ d.jsx(nr, { asChild: !0, children: /* @__PURE__ */ d.jsxs(
              Ve,
              {
                disabled: o,
                tabIndex: a,
                variant: "outline",
                role: "combobox",
                style: { marginTop: 12 },
                className: M("w-min justify-between", !g.value && "text-muted-foreground", `${p}`),
                children: [
                  g.value ? (b = r.find((y) => {
                    var x, _;
                    return ((x = y == null ? void 0 : y.value) == null ? void 0 : x.toUpperCase()) === ((_ = g == null ? void 0 : g.value) == null ? void 0 : _.toUpperCase());
                  })) == null ? void 0 : b.label : f,
                  /* @__PURE__ */ d.jsx(eu, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                ]
              }
            ) }),
            /* @__PURE__ */ d.jsx(Ln, { className: M("w-[200px] p-0", h), children: /* @__PURE__ */ d.jsxs(rr, { children: [
              /* @__PURE__ */ d.jsx(wr, { placeholder: i, className: "h-9" }),
              /* @__PURE__ */ d.jsxs(la, { children: [
                /* @__PURE__ */ d.jsx($r, { children: l }),
                /* @__PURE__ */ d.jsx(wn, { className: M("overflow-auto", u), children: r.map((y) => /* @__PURE__ */ d.jsxs(
                  nn,
                  {
                    disabled: y == null ? void 0 : y.disabled,
                    value: y.value,
                    className: M("w-full flex justify-start items-center", (y == null ? void 0 : y.disabled) && "pointer-events-none opacity-50 cursor-default"),
                    onSelect: (x) => {
                      t.setValue(e, x, { shouldDirty: !0 }), v(!1);
                    },
                    children: [
                      (y == null ? void 0 : y.image) && /* @__PURE__ */ d.jsx("img", { src: y.image, alt: y.label, width: 40, className: "mr-2" }),
                      (y == null ? void 0 : y.icon) && y.icon,
                      y.label,
                      /* @__PURE__ */ d.jsx(
                        $W,
                        {
                          className: M(
                            "ml-auto h-4 w-4",
                            y.value === g.value ? "opacity-100" : "opacity-0"
                          )
                        }
                      )
                    ]
                  },
                  y.value
                )) })
              ] })
            ] }) })
          ] })
        ] });
      }
    }
  );
}
function IH({
  id: e,
  form: t,
  label: n,
  items: r,
  rules: o,
  value: a,
  disabled: s,
  setValue: i,
  tabIndex: c,
  placeholder: l,
  defaultValue: u,
  notFoundLabel: f,
  ctaPlaceholder: p,
  buttonClassName: h,
  popoverClassName: m
}) {
  var b;
  const [v, g] = Z(!1);
  return t ? /* @__PURE__ */ d.jsx(
    uo,
    {
      control: t.control,
      name: e,
      defaultValue: u,
      rules: o,
      render: ({ field: y, formState: x }) => {
        var _, w, N;
        return /* @__PURE__ */ d.jsxs(Mr, { className: "flex flex-col", children: [
          n && /* @__PURE__ */ d.jsxs(fo, { className: "flex", children: [
            n,
            " ",
            ((w = (_ = x.errors) == null ? void 0 : _.pidType) == null ? void 0 : w.message) && /* @__PURE__ */ d.jsxs("span", { className: "text-xs font-light", children: [
              "* ",
              x.errors.pidType.message
            ] })
          ] }),
          /* @__PURE__ */ d.jsxs(tr, { open: v, onOpenChange: g, children: [
            /* @__PURE__ */ d.jsx(nr, { asChild: !0, disabled: s, children: /* @__PURE__ */ d.jsxs(
              Ve,
              {
                disabled: s,
                tabIndex: c,
                variant: "outline",
                role: "combobox",
                style: { marginTop: 12 },
                className: M("w-min justify-between", !y.value && "text-muted-foreground", `${h}`),
                children: [
                  y.value ? (N = r.find((S) => S.value === y.value)) == null ? void 0 : N.label : p,
                  /* @__PURE__ */ d.jsx(eu, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                ]
              }
            ) }),
            /* @__PURE__ */ d.jsx(Ln, { className: M("w-[200px] p-0", m), children: /* @__PURE__ */ d.jsxs(rr, { children: [
              /* @__PURE__ */ d.jsx(wr, { placeholder: l, className: "h-9" }),
              /* @__PURE__ */ d.jsxs(f0, { children: [
                /* @__PURE__ */ d.jsx($r, { children: f }),
                /* @__PURE__ */ d.jsx(wn, { children: r.map((S) => /* @__PURE__ */ d.jsxs(
                  nn,
                  {
                    value: S.value,
                    onSelect: (D) => {
                      t.setValue(e, D), g(!1);
                    },
                    className: "w-full flex justify-start items-center",
                    children: [
                      (S == null ? void 0 : S.image) && /* @__PURE__ */ d.jsx("img", { src: S.image, alt: S.label, width: 40, className: "mr-2" }),
                      (S == null ? void 0 : S.icon) && S.icon,
                      S.label,
                      /* @__PURE__ */ d.jsx(
                        rn,
                        {
                          className: M(
                            "ml-auto h-4 w-4",
                            S.value === y.value ? "opacity-100" : "opacity-0"
                          )
                        }
                      )
                    ]
                  },
                  S.value
                )) })
              ] })
            ] }) })
          ] })
        ] });
      }
    }
  ) : /* @__PURE__ */ d.jsxs(tr, { open: v, onOpenChange: g, children: [
    /* @__PURE__ */ d.jsx(nr, { asChild: !0, children: /* @__PURE__ */ d.jsxs(
      Ve,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": v,
        className: "w-full justify-between",
        children: [
          a ? (b = r.find((y) => y.value === a)) == null ? void 0 : b.label : p,
          /* @__PURE__ */ d.jsx(eu, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ d.jsx(Ln, { className: "w-full p-0", children: /* @__PURE__ */ d.jsxs(rr, { children: [
      /* @__PURE__ */ d.jsx(wr, { placeholder: l, className: "h-9" }),
      /* @__PURE__ */ d.jsx($r, { children: f }),
      /* @__PURE__ */ d.jsx(wn, { children: r.map((y) => /* @__PURE__ */ d.jsxs(
        nn,
        {
          onSelect: (x) => {
            i(x === a ? "" : x), g(!1);
          },
          children: [
            y.label,
            /* @__PURE__ */ d.jsx(
              rn,
              {
                className: M(
                  "ml-auto h-4 w-4",
                  a === y.value ? "opacity-100" : "opacity-0"
                )
              }
            )
          ]
        },
        y.value
      )) })
    ] }) })
  ] });
}
const LH = ({ description: e, icon: t, placeholder: n, label: r, tabIndex: o, options: a, classNameContainer: s, classNamePopover: i, disabled: c }) => {
  const l = q(null), [u, f] = Z(null);
  return J(() => {
    const p = l.current;
    if (!p)
      return;
    const h = new ResizeObserver((m) => {
      const v = m[0].contentRect.width;
      f(v);
    });
    return h.observe(p), () => {
      h.unobserve(p), h.disconnect();
    };
  }, []), /* @__PURE__ */ d.jsxs("div", { className: M("w-full space-y-2", s), children: [
    /* @__PURE__ */ d.jsx("div", { className: "flex justify-start items-end", children: r && /* @__PURE__ */ d.jsxs(Un, { className: "flex", children: [
      r,
      " "
    ] }) }),
    e && /* @__PURE__ */ d.jsx("p", { className: "text-xs", children: e }),
    /* @__PURE__ */ d.jsxs(tr, { children: [
      /* @__PURE__ */ d.jsx(nr, { asChild: !0, disabled: c, children: /* @__PURE__ */ d.jsxs(
        Ve,
        {
          ref: l,
          type: "button",
          variant: "outline",
          disabled: c,
          size: "sm",
          className: "py-5 border w-full justify-start",
          tabIndex: o,
          children: [
            t && t,
            !a.length && /* @__PURE__ */ d.jsx("span", { className: "text-muted-foreground font-normal", children: n || "Seleccione alguna opción" }),
            a.length > 0 && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
              /* @__PURE__ */ d.jsxs(
                At,
                {
                  variant: "secondary",
                  className: "rounded-sm px-1 font-normal lg:hidden",
                  children: [
                    a.length,
                    " seleccionados"
                  ]
                }
              ),
              /* @__PURE__ */ d.jsx("div", { className: "hidden space-x-1 lg:flex", children: a.length > 2 ? /* @__PURE__ */ d.jsxs(
                At,
                {
                  variant: "secondary",
                  className: "rounded-sm px-1 font-normal",
                  children: [
                    a.length,
                    " seleccionados"
                  ]
                }
              ) : a.map((p) => /* @__PURE__ */ d.jsx(
                At,
                {
                  variant: "secondary",
                  className: "rounded-sm px-1 font-normal",
                  children: p.label
                },
                p.id
              )) })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ d.jsx(Ln, { style: { width: u + 24 }, className: M("w-full p-0", i), align: "start", children: /* @__PURE__ */ d.jsxs(rr, { children: [
        /* @__PURE__ */ d.jsx(wr, { placeholder: r }),
        /* @__PURE__ */ d.jsxs(la, { children: [
          /* @__PURE__ */ d.jsx($r, { children: "Sin Resultados" }),
          /* @__PURE__ */ d.jsx(wn, { children: a.map((p) => /* @__PURE__ */ d.jsxs(
            nn,
            {
              disabled: !0,
              className: "cursor-default",
              children: [
                /* @__PURE__ */ d.jsx(
                  "div",
                  {
                    className: M(
                      "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary bg-primary text-primary-foreground"
                      // option
                      //   ? 'bg-primary text-primary-foreground'
                      //   : 'opacity-50 [&_svg]:invisible'
                    ),
                    children: /* @__PURE__ */ d.jsx(rn, { className: M("h-4 w-4") })
                  }
                ),
                /* @__PURE__ */ d.jsx("span", { children: p.label })
              ]
            },
            p.id
          )) })
        ] })
      ] }) })
    ] })
  ] });
}, FH = (e) => {
  var K;
  const { form: t, id: n, description: r, icon: o, placeholder: a, label: s, tabIndex: i, selectAllLabel: c, items: l, classNameContainer: u, classNamePopover: f, disabled: p } = e, [h, m] = Z([]), [v, g] = Z(!1), [b, y] = Z(null), x = q(null), _ = (K = t == null ? void 0 : t.formState) == null ? void 0 : K.defaultValues[n], w = (R) => ({
    ...R,
    selected: _ ? _.includes(R.value) : !1
  }), N = Ut(() => l.map(w), [_, l]), S = Ut(() => h.filter((W) => W.selected).map((W) => W.value), [h]), D = () => {
    m((R) => {
      const W = R.map((V) => ({ ...V, selected: !1 }));
      return t.setValue(n, [], { shouldDirty: !0 }), W;
    });
  }, P = (R, W) => {
    const V = h.map((E) => E.id === R ? { ...E, selected: W } : E);
    m(V), t.setValue(
      n,
      V.filter((E) => E.selected).map((E) => E.value),
      { shouldDirty: !0 }
    );
  }, z = () => {
    if (v)
      return D(), g(!1);
    g(!0);
    const R = h.map((W) => ({ ...W, selected: !0 }));
    m(R), t.setValue(
      n,
      R.filter((W) => W.selected).map((W) => W.value),
      { shouldDirty: !0 }
    );
  };
  return J(() => {
    const R = x.current;
    if (!R)
      return;
    const W = new ResizeObserver((V) => {
      const E = V[0].contentRect.width;
      y(E);
    });
    return W.observe(R), () => {
      W.unobserve(R), W.disconnect();
    };
  }, []), J(() => {
    m(N);
  }, [N]), /* @__PURE__ */ d.jsx(
    uo,
    {
      control: t.control,
      name: n,
      render: ({ field: R, formState: W }) => {
        var V;
        return /* @__PURE__ */ d.jsxs(Mr, { className: M("w-full space-y-2", u), children: [
          /* @__PURE__ */ d.jsxs("div", { className: "flex justify-start items-end", children: [
            s && /* @__PURE__ */ d.jsxs(fo, { className: "flex", children: [
              s,
              " "
            ] }),
            ((V = W == null ? void 0 : W.errors[n]) == null ? void 0 : V.message) && /* @__PURE__ */ d.jsxs("span", { className: "text-xs font-light text-destructive", children: [
              "* ",
              W.errors[n].message
            ] })
          ] }),
          r && /* @__PURE__ */ d.jsx(ra, { className: "text-xs", children: r }),
          /* @__PURE__ */ d.jsxs(tr, { children: [
            /* @__PURE__ */ d.jsx(nr, { asChild: !0, disabled: p, children: /* @__PURE__ */ d.jsxs(
              Ve,
              {
                ref: x,
                type: "button",
                variant: "outline",
                size: "sm",
                disabled: p,
                className: "py-5 border w-full justify-start",
                tabIndex: i,
                children: [
                  o && o,
                  !S.length && /* @__PURE__ */ d.jsx("span", { className: "text-muted-foreground font-normal", children: a || "Seleccione alguna opción" }),
                  S.length > 0 && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
                    /* @__PURE__ */ d.jsxs(
                      At,
                      {
                        variant: "secondary",
                        className: "rounded-sm px-1 font-normal lg:hidden",
                        children: [
                          S.length,
                          " seleccionados"
                        ]
                      }
                    ),
                    /* @__PURE__ */ d.jsx("div", { className: "hidden space-x-1 lg:flex", children: S.length > 2 ? /* @__PURE__ */ d.jsxs(
                      At,
                      {
                        variant: "secondary",
                        className: "rounded-sm px-1 font-normal",
                        children: [
                          S.length,
                          " seleccionados"
                        ]
                      }
                    ) : h.filter((E) => E.selected).map((E) => /* @__PURE__ */ d.jsx(
                      At,
                      {
                        variant: "secondary",
                        className: "rounded-sm px-1 font-normal",
                        children: E.label
                      },
                      E.value.toString()
                    )) })
                  ] })
                ]
              }
            ) }),
            /* @__PURE__ */ d.jsx("style", { children: `
                .combox-checkbox-content {
                    min-width: 150px !important;
                    width: ${b + 24}px !important;
                  }

                  .checkbox-tooltip-content {
                    min-width: 150px !important;
                    width: ${b + 10}px !important;
                  }
                ` }),
            /* @__PURE__ */ d.jsx(
              Ln,
              {
                className: M("w-full p-0 combox-checkbox-content", f),
                align: "start",
                children: /* @__PURE__ */ d.jsxs(rr, { style: { width: "50px !important" }, children: [
                  /* @__PURE__ */ d.jsx(wr, { placeholder: s }),
                  /* @__PURE__ */ d.jsxs(la, { children: [
                    /* @__PURE__ */ d.jsx($r, { children: "Sin Resultados" }),
                    /* @__PURE__ */ d.jsxs(wn, { children: [
                      /* @__PURE__ */ d.jsxs(nn, { onSelect: z, children: [
                        /* @__PURE__ */ d.jsx(
                          "div",
                          {
                            className: M(
                              "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                              v ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                            ),
                            children: /* @__PURE__ */ d.jsx(rn, { className: M("h-4 w-4") })
                          }
                        ),
                        /* @__PURE__ */ d.jsx("span", { className: "truncate", children: c || "Seleccionar todos" })
                      ] }),
                      /* @__PURE__ */ d.jsx(Ha, { className: "my-2" }),
                      h.map((E) => /* @__PURE__ */ d.jsxs(
                        nn,
                        {
                          disabled: E == null ? void 0 : E.disabled,
                          onSelect: () => {
                            E.selected ? P(E.id, !1) : P(E.id, !0);
                          },
                          children: [
                            /* @__PURE__ */ d.jsx(
                              "div",
                              {
                                className: M(
                                  "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                                  E.selected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                                ),
                                children: /* @__PURE__ */ d.jsx(rn, { className: M("h-4 w-4") })
                              }
                            ),
                            E.icon,
                            /* @__PURE__ */ d.jsx("span", { className: "truncate", children: E.label })
                          ]
                        },
                        E.value.toString()
                      ))
                    ] }),
                    S.length > 0 && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
                      /* @__PURE__ */ d.jsx(Ha, {}),
                      /* @__PURE__ */ d.jsx(wn, { children: /* @__PURE__ */ d.jsx(
                        nn,
                        {
                          onSelect: () => {
                            t.setValue(n, []), D();
                          },
                          className: "justify-center text-center",
                          children: "Limpiar"
                        }
                      ) })
                    ] })
                  ] })
                ] })
              }
            )
          ] })
        ] });
      }
    }
  );
}, Cq = ({ id: e, description: t, icon: n, placeholder: r, label: o, tabIndex: a, classNameContainer: s, readOnly: i, classNamePopover: c, disabled: l, ...u }) => i ? /* @__PURE__ */ d.jsx(
  LH,
  {
    label: o,
    description: t,
    classNameContainer: s,
    classNamePopover: c,
    icon: n,
    placeholder: r,
    tabIndex: a,
    disabled: l,
    form: (u == null ? void 0 : u.form) || null,
    items: (u == null ? void 0 : u.items) || []
  }
) : /* @__PURE__ */ d.jsx(
  FH,
  {
    id: e,
    label: o,
    classNameContainer: s,
    description: t,
    classNamePopover: c,
    icon: n,
    placeholder: r,
    tabIndex: a,
    disabled: l,
    selectAllLabel: u == null ? void 0 : u.selectAllLabel,
    form: (u == null ? void 0 : u.form) || null,
    items: (u == null ? void 0 : u.items) || []
  }
);
function BH({
  isOpen: e,
  onClose: t,
  children: n
}) {
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      className: `fixed z-30 inset-0 bg-opacity-50  transition-opacity ${e ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
      children: [
        /* @__PURE__ */ d.jsx("div", { className: "fixed z-50 inset-y-0  right-0  flex", "data-testId": "bottom-drawer", children: /* @__PURE__ */ d.jsx(
          "div",
          {
            className: "max-w-[250px] h-full overflow-y-scroll rounded-l-xl border-l-[1.5px] bg-brand-sidebar-background text-brand-sidebar-text",
            children: n
          }
        ) }),
        /* @__PURE__ */ d.jsx("div", { className: "h-full", "data-testId": "bottom-outside-drawer", onClick: t })
      ]
    }
  );
}
function Ym({
  icon: e,
  titleDescription: t,
  actionToSet: n,
  Link: r,
  item: o
}) {
  return /* @__PURE__ */ d.jsx(Qr, { children: /* @__PURE__ */ d.jsxs(Jr, { children: [
    /* @__PURE__ */ d.jsx(eo, { children: /* @__PURE__ */ d.jsx(
      "div",
      {
        onClick: n ? () => {
          n(!0);
        } : null,
        "data-testId": `bottom-sidebar-${t}`,
        role: "button",
        className: "w-full border-2 border-transparent flex justify-center items-center p-2 group group-hover:text-[#eaeaea] text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover hover:dark:bg-main-hover select-none",
        children: /* @__PURE__ */ d.jsx(
          $1,
          {
            Link: r,
            to: o ? o.path : "/",
            pathname: o ? o.path : "/",
            label: t,
            icon: e,
            isBottomNavLink: !0
          }
        )
      }
    ) }),
    /* @__PURE__ */ d.jsx(_r, { children: t })
  ] }) });
}
function VH({
  profile: e
}) {
  return /* @__PURE__ */ d.jsxs("header", { className: "justify-center w-full h-14 flex items-start gap-x-3 my-10 px-10", children: [
    /* @__PURE__ */ d.jsxs(Po, { className: "w-16 h-full border border-gray-200 shadow-sm rounded-md", children: [
      /* @__PURE__ */ d.jsx(Hr, { src: e == null ? void 0 : e.photo, className: "object-cover" }),
      /* @__PURE__ */ d.jsx(Oo, { className: "p-2 rounded-md h-full bg-transparent", children: /* @__PURE__ */ d.jsx(Hr, { src: e == null ? void 0 : e.photo, className: "object-cover" }) })
    ] }),
    /* @__PURE__ */ d.jsxs("section", { className: "w-full h-full flex flex-col justify-center", children: [
      /* @__PURE__ */ d.jsxs("span", { className: "truncate", children: [
        e == null ? void 0 : e.name,
        " ",
        e == null ? void 0 : e.lastname
      ] }),
      (e == null ? void 0 : e.role) && /* @__PURE__ */ d.jsx(At, { className: "w-full", children: e.role })
    ] })
  ] });
}
const zH = ({ isExpanded: e, theme: t }) => {
  const [n, r] = Z(!1), { value: o, toggleTheme: a } = t;
  return J(() => {
    r(!0);
  }, []), n ? /* @__PURE__ */ d.jsx(
    "button",
    {
      onClick: a,
      "data-testId": "theme-sidebar-bottom-btn",
      className: `w-full border-2 border-transparent flex ${e ? "justify-center" : ""} items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 select-none`,
      children: o === "light" ? /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
        /* @__PURE__ */ d.jsx(b1, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ d.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Oscuro" })
      ] }) : /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
        /* @__PURE__ */ d.jsx(w1, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ d.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Claro" })
      ] })
    }
  ) : null;
};
function WH({
  sidebar: e,
  onCloseSideBar: t
}) {
  return /* @__PURE__ */ d.jsxs("section", { className: "pl-2 pr-3 my-2", children: [
    /* @__PURE__ */ d.jsx("div", { className: "border border-slate-200 w-full" }),
    /* @__PURE__ */ d.jsxs("ul", { className: "mt-2 space-y-2", children: [
      e.theme && /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsx(zH, { isExpanded: !1, theme: e.theme }) }),
      /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsxs(
        "button",
        {
          onClick: t,
          "data-testId": "toggle-sidebar-bottom-btn",
          className: "w-full border-2 border-transparent flex items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 select-none",
          children: [
            /* @__PURE__ */ d.jsx(yv, { className: "dark:text-white", size: 20 }),
            /* @__PURE__ */ d.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Menu" })
          ]
        }
      ) }),
      e.logout && /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsxs(
        "button",
        {
          onClick: () => {
            e.logout();
          },
          "data-testId": "logout-sidebar-bottom-btn",
          className: "w-full border-2 border-transparent flex items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 select-none",
          children: [
            /* @__PURE__ */ d.jsx(bv, { className: "dark:text-white", size: 20 }),
            /* @__PURE__ */ d.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Sesión" })
          ]
        }
      ) })
    ] })
  ] });
}
function UH({
  navLinksItems: e,
  subLinksItems: t,
  sidebar: n,
  onCloseSideBar: r,
  Link: o
}) {
  const { profile: a } = n;
  return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx(VH, { profile: a }),
    /* @__PURE__ */ d.jsxs("aside", { className: "px-6", children: [
      e == null ? void 0 : e.map((s, i) => /* @__PURE__ */ d.jsx(
        $1,
        {
          to: s.to,
          pathname: s.pathname,
          label: s.label,
          icon: s.icon,
          Link: o
        },
        i
      )),
      t && t.map((s, i) => /* @__PURE__ */ d.jsx(
        TW,
        {
          pathname: s.pathname,
          label: s.label,
          icon: s.icon,
          sublinks: s.subLinks,
          Link: o
        },
        i
      )),
      /* @__PURE__ */ d.jsx(
        WH,
        {
          onCloseSideBar: r,
          sidebar: n
        }
      )
    ] })
  ] });
}
function Sq({
  bottomItems: e,
  navLinksItems: t,
  subLinksItems: n,
  sidebar: r,
  Link: o
}) {
  const [a, s] = Z(!1);
  return /* @__PURE__ */ d.jsxs("div", { className: "lg:hidden md:block md:min-w-640 md:max-w-767 fixed bottom-0 left-0 z-50 w-full h-16 bg-brand-sidebar-background border-t border-gray-200 dark:border-[#151313] rounded-t-xl", children: [
    /* @__PURE__ */ d.jsxs("div", { className: "flex justify-between h-full max-w-lg  mx-auto font-medium", children: [
      e.map((i, c) => /* @__PURE__ */ d.jsx(
        Ym,
        {
          icon: i.icon,
          titleDescription: i.titleDescription,
          Link: o,
          item: i
        },
        c
      )),
      /* @__PURE__ */ d.jsx(
        Ym,
        {
          icon: /* @__PURE__ */ d.jsx(yv, {}),
          titleDescription: "Options",
          actionToSet: s,
          Link: null,
          item: null
        }
      )
    ] }),
    /* @__PURE__ */ d.jsx(
      BH,
      {
        isOpen: a,
        onClose: () => s(!1),
        children: /* @__PURE__ */ d.jsx(
          UH,
          {
            Link: o,
            sidebar: r,
            navLinksItems: t,
            subLinksItems: n,
            onCloseSideBar: () => s(!1)
          }
        )
      }
    )
  ] });
}
const go = Wt({
  data: [],
  filters: [],
  queries: [],
  columns: [],
  showFilters: !0,
  searchForm: null,
  multiSelectedItems: [],
  limitOfMultiSelect: 0,
  setMultiItemsSelected: () => {
  },
  onSubmitTable: null,
  setSearchForm: () => {
  },
  setSelectItem: () => {
  },
  getGlobalFilters: () => {
  },
  resetOptionsByFilter: () => {
  },
  pagination: {
    limit: 5,
    page: 1,
    labels: { plural: "Items", single: "Item" },
    hasPrevPage: !1,
    hasNextPage: !1
  }
});
function HH() {
  var o;
  const { pagination: e, updateLimit: t, nextPage: n, prevPage: r } = ct(go);
  return /* @__PURE__ */ d.jsx("div", { className: "flex flex-wrap items-center justify-end", children: /* @__PURE__ */ d.jsxs("div", { className: "flex items-end sm:items-center space-x-6 lg:space-x-8 mt-2 sm:mt-0", children: [
    /* @__PURE__ */ d.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ d.jsxs("p", { className: "text-sm font-medium", children: [
        ((o = e == null ? void 0 : e.labels) == null ? void 0 : o.plural) || "Items",
        " por Pagina"
      ] }),
      /* @__PURE__ */ d.jsxs(
        Ef,
        {
          value: `${e.limit}`,
          onValueChange: (a) => t(Number(a)),
          children: [
            /* @__PURE__ */ d.jsx(Ic, { className: "h-8 w-[70px]", children: /* @__PURE__ */ d.jsx(Pf, { placeholder: e.limit }) }),
            /* @__PURE__ */ d.jsx(Lc, { side: "top", children: [5, 10, 15, 20].map((a) => /* @__PURE__ */ d.jsx(Fc, { value: `${a}`, children: a }, a)) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ d.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ d.jsxs(
        Ve,
        {
          type: "button",
          variant: "outline",
          className: "h-8 w-8 p-0",
          onClick: () => r(),
          disabled: !e.hasPrevPage,
          children: [
            /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "Pagina Anterior" }),
            /* @__PURE__ */ d.jsx(cc, { className: "h-4 w-4" })
          ]
        }
      ),
      /* @__PURE__ */ d.jsx("div", { children: /* @__PURE__ */ d.jsxs("p", { className: "text-sm font-medium", children: [
        "Pagina ",
        e.page
      ] }) }),
      /* @__PURE__ */ d.jsxs(
        Ve,
        {
          type: "button",
          variant: "outline",
          className: "h-8 w-8 p-0",
          onClick: () => n(),
          disabled: !e.hasNextPage,
          children: [
            /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "Siguiente Pagina" }),
            /* @__PURE__ */ d.jsx(Pr, { className: "h-4 w-4" })
          ]
        }
      )
    ] })
  ] }) });
}
const Nq = (e) => {
  const t = (e == null ? void 0 : e.hasNextPage) ?? !1, n = (e == null ? void 0 : e.hasPrevPage) ?? !1, r = (e == null ? void 0 : e.limit) ?? 10, o = (e == null ? void 0 : e.page) ?? 1;
  return { hasNextPage: t, hasPrevPage: n, limit: r, page: o, labels: { plural: "Items", single: "Item" } };
}, KH = (e) => e.replace(/[A-Z]/g, (t) => `_${t.toLowerCase()}`).toUpperCase(), Eq = {
  limit: 10,
  page: 1
}, Yl = () => ("10000000-1000-4000-8000" + -1e11).replace(
  /[018]/g,
  (e) => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)
), Pq = (e, t) => [
  ...t.slice(0, t.length - 1),
  e,
  ...t.slice(t.length - 1)
], GH = () => /* @__PURE__ */ d.jsx("span", { className: "mt-10 ml-5", children: "Sin Resultados" }), YH = ({
  data: e,
  columns: t
}) => {
  const n = (r, o) => r != null && r.render ? /* @__PURE__ */ d.jsx("div", { children: r.render(o) }, Yl()) : /* @__PURE__ */ d.jsx(vn, { children: o[r.id] }, Yl());
  return /* @__PURE__ */ d.jsx(d.Fragment, { children: e.map((r) => /* @__PURE__ */ d.jsx(Vy, { children: t.map((o) => n(o, r)) }, Yl())) });
}, Y1 = () => {
  const {
    data: e,
    columns: t,
    setSelectItem: n,
    setMultiItemsSelected: r,
    multiItemsSelected: o,
    limitOfMultiSelect: a
  } = ct(go), [s, i] = Z(
    o ? o.length : 0
  );
  return /* @__PURE__ */ d.jsx(d.Fragment, { children: e.length ? /* @__PURE__ */ d.jsx(
    YH,
    {
      setMultiItemsSelected: r,
      setSelectItem: n,
      setItemsSelectedCount: i,
      itemsSelectedCount: s,
      data: e,
      multiItemsSelected: o,
      columns: t,
      limitOfMultiSelect: a
    }
  ) : /* @__PURE__ */ d.jsx(GH, {}) });
}, qH = () => /* @__PURE__ */ d.jsx(Y1, {}), ZH = () => /* @__PURE__ */ d.jsx("span", { className: "loader-fade-dot" }), XH = () => /* @__PURE__ */ d.jsxs("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: [
  /* @__PURE__ */ d.jsx(ZH, {}),
  /* @__PURE__ */ d.jsx("h6", { className: "font-semibold", children: "Cargando..." })
] }), QH = () => {
  const { showFilters: e, setShowFilters: t } = ct(go);
  return /* @__PURE__ */ d.jsxs(
    Ve,
    {
      type: "button",
      variant: "outline",
      onClick: () => t(!e),
      className: "ml-auto py-5 whitespace-nowrap",
      children: [
        /* @__PURE__ */ d.jsx(v1, { className: "mr-2 h-4 w-4" }),
        "Mostrar Filtros"
      ]
    }
  );
}, JH = ({ id: e, form: t, icon: n, label: r, options: o, onSubmit: a }) => {
  const { selectOptionFilter: s, getFilterOptionsSelectedById: i, resetOptionsByFilter: c } = ct(go), l = (u) => {
    c(u);
  };
  return /* @__PURE__ */ d.jsxs(tr, { children: [
    /* @__PURE__ */ d.jsx(nr, { asChild: !0, children: /* @__PURE__ */ d.jsxs(Ve, { type: "button", variant: "outline", size: "sm", className: "py-5 border-dashed border-muted-foreground", children: [
      n || /* @__PURE__ */ d.jsx(g1, { size: 16, className: "mr-2" }),
      r,
      i(e).length > 0 && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
        /* @__PURE__ */ d.jsx(js, { orientation: "vertical", className: "mx-2 h-4" }),
        /* @__PURE__ */ d.jsx(
          At,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal lg:hidden",
            children: i(e).length
          }
        ),
        /* @__PURE__ */ d.jsx("div", { className: "hidden space-x-1 lg:flex", children: i(e).length > 2 ? /* @__PURE__ */ d.jsxs(
          At,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: [
              i(e).length,
              " seleccionados"
            ]
          }
        ) : o.filter((u) => u.selected).map((u) => /* @__PURE__ */ d.jsx(
          At,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: u.label
          },
          u.value.toString()
        )) })
      ] })
    ] }) }),
    /* @__PURE__ */ d.jsx(Ln, { className: "w-[200px] p-0", align: "start", children: /* @__PURE__ */ d.jsxs(rr, { children: [
      /* @__PURE__ */ d.jsx(wr, { placeholder: r }),
      /* @__PURE__ */ d.jsxs(la, { children: [
        /* @__PURE__ */ d.jsx($r, { children: "Sin Resultados" }),
        /* @__PURE__ */ d.jsx(wn, { children: o.map((u) => /* @__PURE__ */ d.jsxs(
          nn,
          {
            onSelect: () => {
              u.selected ? s(e, u.id, !1) : s(e, u.id, !0);
            },
            children: [
              /* @__PURE__ */ d.jsx(
                "div",
                {
                  className: M(
                    "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                    u.selected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                  ),
                  children: /* @__PURE__ */ d.jsx(rn, { className: M("h-4 w-4") })
                }
              ),
              u.icon,
              /* @__PURE__ */ d.jsx("span", { children: u.label })
            ]
          },
          u.value.toString()
        )) }),
        i(e).length > 0 && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
          /* @__PURE__ */ d.jsx(Ha, {}),
          /* @__PURE__ */ d.jsx(wn, { children: /* @__PURE__ */ d.jsx(
            nn,
            {
              onSelect: () => l(e),
              className: "justify-center text-center",
              children: "Limpiar Filtros"
            }
          ) })
        ] })
      ] })
    ] }) })
  ] });
}, eK = ({ id: e, form: t, label: n, icon: r, queryText: o }) => /* @__PURE__ */ d.jsxs(tr, { children: [
  /* @__PURE__ */ d.jsx(nr, { asChild: !0, children: /* @__PURE__ */ d.jsxs(Ve, { variant: "outline", size: "sm", className: "py-5 border-dashed border-muted-foreground", type: "button", children: [
    /* @__PURE__ */ d.jsx(yi, { size: 16, className: "mr-2 text-gray-500" }),
    n,
    o && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx(js, { orientation: "vertical", className: "mx-2 h-4" }),
      /* @__PURE__ */ d.jsx(
        At,
        {
          variant: "secondary",
          className: "rounded-sm px-1 font-normal",
          children: o
        }
      )
    ] })
  ] }) }),
  /* @__PURE__ */ d.jsxs(Ln, { className: "w-fit p-4", align: "start", children: [
    /* @__PURE__ */ d.jsxs(Un, { htmlFor: e, children: [
      "Buscar ",
      n
    ] }),
    /* @__PURE__ */ d.jsx(
      _f,
      {
        id: e,
        form: t,
        type: "text",
        placeholder: `Ingrese ${n}`
      }
    )
  ] })
] }), tK = ({ form: e, onSubmit: t }) => {
  const {
    queries: n,
    filters: r,
    showFilters: o,
    resetFilters: a,
    onSubmitTable: s,
    pagination: { page: i, limit: c }
  } = ct(go), l = e.watch(n.map((f) => f.id)), u = () => {
    var p;
    a();
    const f = [];
    (p = Object.entries(e == null ? void 0 : e.getValues())) == null || p.forEach((h) => {
      h[1] && f.push({
        field: ua(h[0]),
        text: h[1]
      });
    }), s({ queries: f, filters: [], limit: c, page: i });
  };
  return /* @__PURE__ */ d.jsx("div", { className: "w-10/12 flex items-center justify-between", children: /* @__PURE__ */ d.jsxs("div", { className: "w-full flex flex-col items-start gap-x-2 gap-y-2", children: [
    /* @__PURE__ */ d.jsx(
      "form",
      {
        onSubmit: e.handleSubmit(t),
        className: "w-full flex justify-start items-center sm:mr-4",
        children: /* @__PURE__ */ d.jsx("section", { className: "mr-3 flex justify-start items-center gap-x-3", children: n.map((f, p) => /* @__PURE__ */ d.jsx(
          eK,
          {
            queryText: l[p],
            label: f.label,
            id: f.id,
            form: e
          },
          f.id
        )) })
      }
    ),
    r != null && r.length ? /* @__PURE__ */ d.jsxs("div", { className: "w-auto h-full flex flex-wrap gap-x-3 gap-y-2 justify-start items-center", children: [
      /* @__PURE__ */ d.jsx(QH, {}),
      o && r && r.map((f) => /* @__PURE__ */ d.jsx(
        JH,
        {
          onSubmit: t,
          form: e,
          id: f.id,
          icon: f.icon,
          label: f.label,
          options: f.options
        },
        f.id
      )),
      o && (r != null && r.filter(
        (f) => f.options.some((p) => p.selected)
      ).length) ? /* @__PURE__ */ d.jsxs(
        Ve,
        {
          type: "button",
          variant: "ghost",
          onClick: u,
          className: "px-2 py-5 lg:px-3 ml-0 lg:ml-auto",
          children: [
            "Limpiar Filtros",
            /* @__PURE__ */ d.jsx(uc, { className: "ml-2 h-4 w-4" })
          ]
        }
      ) : null
    ] }) : null
  ] }) });
}, nK = ({ onSubmitTable: e, loading: t }) => {
  const {
    queries: n,
    getFiltersWithOptionsSelected: r,
    filters: o,
    pagination: { page: a, limit: s },
    setSearchForm: i
  } = ct(go), c = iy({
    defaultValues: n.reduce((u, f) => (u[f.id] = "", u), {}),
    resolver: N1(
      nc.object(
        n.reduce((u, f) => (u[f.id] = nc.string().optional(), u), {})
      )
    )
  }), l = async (u) => {
    var h;
    console.log({ data: u });
    const f = r(), p = [];
    (h = Object.entries(u)) == null || h.forEach((m) => {
      m[1] && p.push({
        field: ua(m[0]),
        text: m[1]
      });
    }), console.log("queries formatted ", p), e({ queries: p, filters: f, limit: s, page: a });
  };
  return J(() => i(c), [c]), !(n != null && n.length) && !(o != null && o.length) ? /* @__PURE__ */ d.jsx("div", {}) : /* @__PURE__ */ d.jsx(ly, { ...c, children: /* @__PURE__ */ d.jsxs("div", { className: "w-full flex flex-wrap justify-between items-end gap-y-2", children: [
    n != null && n.length || o != null && o.length ? /* @__PURE__ */ d.jsx(tK, { form: c, onSubmit: l }) : /* @__PURE__ */ d.jsx("div", {}),
    /* @__PURE__ */ d.jsx("div", { className: "w-fit flex flex-col gap-y-2", children: /* @__PURE__ */ d.jsx(
      Ve,
      {
        type: "submit",
        onClick: c.handleSubmit(l),
        disabled: t,
        className: "bg-brand-primary hover:bg-brand-primary-opaque ml-auto py-5 whitespace-nowrap text-white",
        children: t ? /* @__PURE__ */ d.jsx(dd, {}) : /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
          /* @__PURE__ */ d.jsx(x1, { className: "dark:border-white h-5 w-5 mr-2" }),
          "Buscar"
        ] })
      }
    ) })
  ] }) });
}, rK = () => /* @__PURE__ */ d.jsx("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: /* @__PURE__ */ d.jsx("h6", { className: "font-semibold", children: "Hubo un error" }) }), oK = () => /* @__PURE__ */ d.jsx(Y1, {}), aK = {
  limit: 5,
  page: 1,
  labels: { plural: "Items", single: "Item" },
  hasPrevPage: !1,
  hasNextPage: !1
};
function Oq(e) {
  const [t, n] = Z([]), [r, o] = Z([]), [a, s] = Z([]), [i, c] = Z(!1), [l, u] = Z(e == null ? void 0 : e.error), [f, p] = Z(e == null ? void 0 : e.loading), [h, m] = Z(), [v, g] = Z(
    (e == null ? void 0 : e.pagination) ?? aK
  ), [b, y] = Z(
    (e == null ? void 0 : e.columns) || []
  ), { cardsColsNumber: x } = e, _ = ve(
    (E) => e.onSubmitTable({ ...E }),
    [e]
  ), w = ve(
    (E) => {
      var G;
      g(E);
      const B = h.getValues(), T = [];
      (G = Object.entries(B)) == null || G.forEach((Q) => {
        Q[1] && T.push({
          field: KH(Q[0]),
          text: Q[1]
        });
      });
      const U = r.map((Q) => ({
        id: Q.id,
        label: Q.label,
        options: Q.options.filter((oe) => oe.selected).map((oe) => oe.value)
      })).filter((Q) => Q.options.length > 0);
      _({
        filters: U,
        queries: T,
        limit: E.limit,
        page: E.page
      });
    },
    [r, _, h]
  ), N = ve(() => {
    w({ ...v, page: v.page + 1 });
  }, [v, w]), S = ve(() => {
    v.page > 1 && w({ ...v, page: v.page - 1 });
  }, [v, w]), D = () => r.map((E) => ({
    id: E.id,
    label: E.label,
    options: E.options.filter((B) => B.selected).map((B) => B.value)
  })).filter((E) => E.options.length > 0), P = (E) => {
    const B = r.find((T) => T.id === E);
    return B ? B.options.filter((U) => U.selected).map((U) => U.value) : [];
  }, z = (E, B, T) => {
    const U = r.map((G) => G.id === E ? {
      ...G,
      options: G.options.map((Q) => Q.id === B ? { ...Q, selected: T } : Q)
    } : G);
    o(U);
  }, K = () => r, R = (E) => {
    const B = r.map((T) => T.id === E ? {
      ...T,
      options: T.options.map((U) => ({
        ...U,
        selected: !1
      }))
    } : T);
    o(B);
  }, W = (E) => w({ ...v, limit: E }), V = () => {
    const E = r.map((B) => ({
      ...B,
      options: B.options.map((T) => ({ ...T, selected: !1 }))
    }));
    o(E);
  };
  return J(() => n((e == null ? void 0 : e.data) || []), [e == null ? void 0 : e.data]), J(() => p(e == null ? void 0 : e.loading), [e == null ? void 0 : e.loading]), J(() => u((e == null ? void 0 : e.error) || !1), [e == null ? void 0 : e.error]), J(() => g(e == null ? void 0 : e.pagination), [e == null ? void 0 : e.pagination]), J(() => y((e == null ? void 0 : e.columns) || []), [e == null ? void 0 : e.columns]), J(() => {
    const E = b.filter((B) => B.isQuery).map((B) => ({
      id: B.id,
      label: B.label
    }));
    s(E);
  }, [b]), J(() => {
    const E = (T) => (T == null ? void 0 : T.filters) && (T == null ? void 0 : T.filters.length), B = b.filter(E).map((T) => {
      const U = T.filters.map((Q) => ({
        ...Q,
        selected: !1
      }));
      return {
        ...T,
        id: T.id,
        options: U
      };
    });
    o(B);
  }, [b]), J(() => {
    e != null && e.filters && (e == null || e.filters.forEach((E) => {
      E != null && E.filters && b.forEach((B) => {
        E.id === B.id && o((T) => T.some((G) => G.id === E.id) ? T : [
          ...T,
          {
            id: B.id,
            label: B.label,
            options: E.filters
          }
        ]);
      });
    }));
  }, [b, e == null ? void 0 : e.filters]), J(() => {
    g((E) => {
      var B, T;
      return {
        ...E,
        hasNextPage: (B = e == null ? void 0 : e.pagination) == null ? void 0 : B.hasNextPage,
        hasPrevPage: (T = e == null ? void 0 : e.pagination) == null ? void 0 : T.hasPrevPage
      };
    });
  }, [e.pagination.hasNextPage, e.pagination.hasPrevPage]), /* @__PURE__ */ d.jsx(
    go.Provider,
    {
      value: {
        data: t,
        columns: b,
        pagination: v,
        nextPage: N,
        prevPage: S,
        searchForm: h,
        updateLimit: W,
        showFilters: i,
        resetFilters: V,
        getGlobalFilters: K,
        selectOptionFilter: z,
        resetOptionsByFilter: R,
        multiItemsSelected: e.multiItemsSelected,
        setMultiItemsSelected: e.setMultiItemsSelected,
        limitOfMultiSelect: e.limitOfMultiSelect,
        queries: a,
        filters: r,
        onSubmitTable: _,
        getFilterOptionsSelectedById: P,
        getFiltersWithOptionsSelected: D,
        setSelectItem: e.setSelectItem,
        setShowFilters: (E) => c(E),
        setSearchForm: (E) => m(E)
      },
      children: /* @__PURE__ */ d.jsxs("div", { className: "w-full h-fit space-y-4", children: [
        /* @__PURE__ */ d.jsx(nK, { onSubmitTable: _, loading: f }),
        /* @__PURE__ */ d.jsxs(
          "div",
          {
            className: `overflow-clip grid grid-cols-1 ${x ? `${x === 2 ? "sm" : "lg"}:grid-cols-${x}` : "grid-cols-3"}  gap-6`,
            children: [
              f && /* @__PURE__ */ d.jsx(XH, {}),
              !f && l && /* @__PURE__ */ d.jsx(rK, {}),
              !f && !l && !t && /* @__PURE__ */ d.jsx(oK, {}),
              !f && !l && t && /* @__PURE__ */ d.jsx(qH, {})
            ]
          }
        ),
        !f && !l && t && /* @__PURE__ */ d.jsx(HH, {})
      ] })
    }
  );
}
function sK(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function qm(e) {
  return sK(e) || Array.isArray(e);
}
function iK() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function tp(e, t) {
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  const o = JSON.stringify(Object.keys(e.breakpoints || {})), a = JSON.stringify(Object.keys(t.breakpoints || {}));
  return o !== a ? !1 : n.every((s) => {
    const i = e[s], c = t[s];
    return typeof i == "function" ? `${i}` == `${c}` : !qm(i) || !qm(c) ? i === c : tp(i, c);
  });
}
function Zm(e) {
  return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map((t) => t.options);
}
function cK(e, t) {
  if (e.length !== t.length)
    return !1;
  const n = Zm(e), r = Zm(t);
  return n.every((o, a) => {
    const s = r[a];
    return tp(o, s);
  });
}
function np(e) {
  return typeof e == "number";
}
function ad(e) {
  return typeof e == "string";
}
function rp(e) {
  return typeof e == "boolean";
}
function Xm(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function dt(e) {
  return Math.abs(e);
}
function op(e) {
  return Math.sign(e);
}
function Pa(e, t) {
  return dt(e - t);
}
function lK(e, t) {
  if (e === 0 || t === 0 || dt(e) <= dt(t))
    return 0;
  const n = Pa(dt(e), dt(t));
  return dt(n / e);
}
function cs(e) {
  return ls(e).map(Number);
}
function mn(e) {
  return e[Rs(e)];
}
function Rs(e) {
  return Math.max(0, e.length - 1);
}
function ap(e, t) {
  return t === Rs(e);
}
function Qm(e, t = 0) {
  return Array.from(Array(e), (n, r) => t + r);
}
function ls(e) {
  return Object.keys(e);
}
function q1(e, t) {
  return [e, t].reduce((n, r) => (ls(r).forEach((o) => {
    const a = n[o], s = r[o], i = Xm(a) && Xm(s);
    n[o] = i ? q1(a, s) : s;
  }), n), {});
}
function Z1(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function uK(e, t) {
  const n = {
    start: r,
    center: o,
    end: a
  };
  function r() {
    return 0;
  }
  function o(c) {
    return a(c) / 2;
  }
  function a(c) {
    return t - c;
  }
  function s(c, l) {
    return ad(e) ? n[e](c) : e(t, c, l);
  }
  return {
    measure: s
  };
}
function us() {
  let e = [];
  function t(o, a, s, i = {
    passive: !0
  }) {
    let c;
    if ("addEventListener" in o)
      o.addEventListener(a, s, i), c = () => o.removeEventListener(a, s, i);
    else {
      const l = o;
      l.addListener(s), c = () => l.removeListener(s);
    }
    return e.push(c), r;
  }
  function n() {
    e = e.filter((o) => o());
  }
  const r = {
    add: t,
    clear: n
  };
  return r;
}
function dK(e, t, n, r) {
  const o = us(), a = 1e3 / 60;
  let s = null, i = 0, c = 0;
  function l() {
    o.add(e, "visibilitychange", () => {
      e.hidden && m();
    });
  }
  function u() {
    h(), o.clear();
  }
  function f(g) {
    if (!c)
      return;
    s || (s = g);
    const b = g - s;
    for (s = g, i += b; i >= a; )
      n(), i -= a;
    const y = dt(i / a);
    r(y), c && t.requestAnimationFrame(f);
  }
  function p() {
    c || (c = t.requestAnimationFrame(f));
  }
  function h() {
    t.cancelAnimationFrame(c), s = null, i = 0, c = 0;
  }
  function m() {
    s = null, i = 0;
  }
  return {
    init: l,
    destroy: u,
    start: p,
    stop: h,
    update: n,
    render: r
  };
}
function fK(e, t) {
  const n = t === "rtl", r = e === "y", o = r ? "y" : "x", a = r ? "x" : "y", s = !r && n ? -1 : 1, i = u(), c = f();
  function l(m) {
    const {
      height: v,
      width: g
    } = m;
    return r ? v : g;
  }
  function u() {
    return r ? "top" : n ? "right" : "left";
  }
  function f() {
    return r ? "bottom" : n ? "left" : "right";
  }
  function p(m) {
    return m * s;
  }
  return {
    scroll: o,
    cross: a,
    startEdge: i,
    endEdge: c,
    measureSize: l,
    direction: p
  };
}
function ro(e = 0, t = 0) {
  const n = dt(e - t);
  function r(l) {
    return l < e;
  }
  function o(l) {
    return l > t;
  }
  function a(l) {
    return r(l) || o(l);
  }
  function s(l) {
    return a(l) ? r(l) ? e : t : l;
  }
  function i(l) {
    return n ? l - n * Math.ceil((l - t) / n) : l;
  }
  return {
    length: n,
    max: t,
    min: e,
    constrain: s,
    reachedAny: a,
    reachedMax: o,
    reachedMin: r,
    removeOffset: i
  };
}
function X1(e, t, n) {
  const {
    constrain: r
  } = ro(0, e), o = e + 1;
  let a = s(t);
  function s(p) {
    return n ? dt((o + p) % o) : r(p);
  }
  function i() {
    return a;
  }
  function c(p) {
    return a = s(p), f;
  }
  function l(p) {
    return u().set(i() + p);
  }
  function u() {
    return X1(e, i(), n);
  }
  const f = {
    get: i,
    set: c,
    add: l,
    clone: u
  };
  return f;
}
function pK(e, t, n, r, o, a, s, i, c, l, u, f, p, h, m, v, g, b, y) {
  const {
    cross: x,
    direction: _
  } = e, w = ["INPUT", "SELECT", "TEXTAREA"], N = {
    passive: !1
  }, S = us(), D = us(), P = ro(50, 225).constrain(h.measure(20)), z = {
    mouse: 300,
    touch: 400
  }, K = {
    mouse: 500,
    touch: 600
  }, R = m ? 43 : 25;
  let W = !1, V = 0, E = 0, B = !1, T = !1, U = !1, G = !1;
  function Q(A) {
    if (!y)
      return;
    function ne(Pe) {
      (rp(y) || y(A, Pe)) && ee(Pe);
    }
    const ye = t;
    S.add(ye, "dragstart", (Pe) => Pe.preventDefault(), N).add(ye, "touchmove", () => {
    }, N).add(ye, "touchend", () => {
    }).add(ye, "touchstart", ne).add(ye, "mousedown", ne).add(ye, "touchcancel", me).add(ye, "contextmenu", me).add(ye, "click", _e, !0);
  }
  function oe() {
    S.clear(), D.clear();
  }
  function H() {
    const A = G ? n : t;
    D.add(A, "touchmove", re, N).add(A, "touchend", me).add(A, "mousemove", re, N).add(A, "mouseup", me);
  }
  function le(A) {
    const ne = A.nodeName || "";
    return w.includes(ne);
  }
  function be() {
    return (m ? K : z)[G ? "mouse" : "touch"];
  }
  function pe(A, ne) {
    const ye = f.add(op(A) * -1), Pe = u.byDistance(A, !m).distance;
    return m || dt(A) < P ? Pe : g && ne ? Pe * 0.5 : u.byIndex(ye.get(), 0).distance;
  }
  function ee(A) {
    const ne = Z1(A, r);
    G = ne, U = m && ne && !A.buttons && W, W = Pa(o.get(), s.get()) >= 2, !(ne && A.button !== 0) && (le(A.target) || (B = !0, a.pointerDown(A), l.useFriction(0).useDuration(0), o.set(s), H(), V = a.readPoint(A), E = a.readPoint(A, x), p.emit("pointerDown")));
  }
  function re(A) {
    const ne = a.readPoint(A), ye = a.readPoint(A, x), Pe = Pa(ne, V), Ie = Pa(ye, E);
    if (!T && !G && (!A.cancelable || (T = Pe > Ie, !T)))
      return me(A);
    const Oe = a.pointerMove(A);
    Pe > v && (U = !0), l.useFriction(0.3).useDuration(1), i.start(), o.add(_(Oe)), A.preventDefault();
  }
  function me(A) {
    const ye = u.byDistance(0, !1).index !== f.get(), Pe = a.pointerUp(A) * be(), Ie = pe(_(Pe), ye), Oe = lK(Pe, Ie), O = R - 10 * Oe, F = b + Oe / 50;
    T = !1, B = !1, D.clear(), l.useDuration(O).useFriction(F), c.distance(Ie, !m), G = !1, p.emit("pointerUp");
  }
  function _e(A) {
    U && (A.stopPropagation(), A.preventDefault(), U = !1);
  }
  function ae() {
    return B;
  }
  return {
    init: Q,
    pointerDown: ae,
    destroy: oe
  };
}
function hK(e, t) {
  let r, o;
  function a(f) {
    return f.timeStamp;
  }
  function s(f, p) {
    const m = `client${(p || e.scroll) === "x" ? "X" : "Y"}`;
    return (Z1(f, t) ? f : f.touches[0])[m];
  }
  function i(f) {
    return r = f, o = f, s(f);
  }
  function c(f) {
    const p = s(f) - s(o), h = a(f) - a(r) > 170;
    return o = f, h && (r = f), p;
  }
  function l(f) {
    if (!r || !o)
      return 0;
    const p = s(o) - s(r), h = a(f) - a(r), m = a(f) - a(o) > 170, v = p / h;
    return h && !m && dt(v) > 0.1 ? v : 0;
  }
  return {
    pointerDown: i,
    pointerMove: c,
    pointerUp: l,
    readPoint: s
  };
}
function mK() {
  function e(n) {
    const {
      offsetTop: r,
      offsetLeft: o,
      offsetWidth: a,
      offsetHeight: s
    } = n;
    return {
      top: r,
      right: o + a,
      bottom: r + s,
      left: o,
      width: a,
      height: s
    };
  }
  return {
    measure: e
  };
}
function vK(e) {
  function t(r) {
    return e * (r / 100);
  }
  return {
    measure: t
  };
}
function gK(e, t, n, r, o, a, s) {
  let i, c, l = [], u = !1;
  function f(v) {
    return o.measureSize(s.measure(v));
  }
  function p(v) {
    if (!a)
      return;
    c = f(e), l = r.map(f);
    function g(y) {
      for (const x of y) {
        const _ = x.target === e, w = r.indexOf(x.target), N = _ ? c : l[w], S = f(_ ? e : r[w]);
        if (dt(S - N) >= 0.5) {
          n.requestAnimationFrame(() => {
            v.reInit(), t.emit("resize");
          });
          break;
        }
      }
    }
    i = new ResizeObserver((y) => {
      u || (rp(a) || a(v, y)) && g(y);
    }), [e].concat(r).forEach((y) => i.observe(y));
  }
  function h() {
    i && i.disconnect(), u = !0;
  }
  return {
    init: p,
    destroy: h
  };
}
function bK(e, t, n, r, o) {
  let a = 0, s = 0, i = r, c = o, l = e.get(), u = 0;
  function f() {
    const w = n.get() - e.get(), N = !i;
    let S = 0;
    return N ? (a = 0, e.set(n), S = w) : (a += w / i, a *= c, l += a, e.add(a), S = l - u), s = op(S), u = l, _;
  }
  function p() {
    const w = n.get() - t.get();
    return dt(w) < 1e-3;
  }
  function h() {
    return i;
  }
  function m() {
    return s;
  }
  function v() {
    return a;
  }
  function g() {
    return y(r);
  }
  function b() {
    return x(o);
  }
  function y(w) {
    return i = w, _;
  }
  function x(w) {
    return c = w, _;
  }
  const _ = {
    direction: m,
    duration: h,
    velocity: v,
    seek: f,
    settled: p,
    useBaseFriction: b,
    useBaseDuration: g,
    useFriction: x,
    useDuration: y
  };
  return _;
}
function yK(e, t, n, r, o) {
  const a = o.measure(10), s = o.measure(50), i = ro(0.1, 0.99);
  let c = !1;
  function l() {
    return !(c || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function u(h) {
    if (!l())
      return;
    const m = e.reachedMin(t.get()) ? "min" : "max", v = dt(e[m] - t.get()), g = n.get() - t.get(), b = i.constrain(v / s);
    n.subtract(g * b), !h && dt(g) < a && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
  }
  function f(h) {
    c = !h;
  }
  return {
    constrain: u,
    toggleActive: f
  };
}
function xK(e, t, n, r, o) {
  const a = ro(-t + e, 0), s = f(), i = u(), c = p();
  function l(m, v) {
    return Pa(m, v) < 1;
  }
  function u() {
    const m = s[0], v = mn(s), g = s.lastIndexOf(m), b = s.indexOf(v) + 1;
    return ro(g, b);
  }
  function f() {
    return n.map((m, v) => {
      const {
        min: g,
        max: b
      } = a, y = a.constrain(m), x = !v, _ = ap(n, v);
      return x ? b : _ || l(g, y) ? g : l(b, y) ? b : y;
    }).map((m) => parseFloat(m.toFixed(3)));
  }
  function p() {
    if (t <= e + o)
      return [a.max];
    if (r === "keepSnaps")
      return s;
    const {
      min: m,
      max: v
    } = i;
    return s.slice(m, v);
  }
  return {
    snapsContained: c,
    scrollContainLimit: i
  };
}
function wK(e, t, n) {
  const r = t[0], o = n ? r - e : mn(t);
  return {
    limit: ro(o, r)
  };
}
function $K(e, t, n, r) {
  const a = t.min + 0.1, s = t.max + 0.1, {
    reachedMin: i,
    reachedMax: c
  } = ro(a, s);
  function l(p) {
    return p === 1 ? c(n.get()) : p === -1 ? i(n.get()) : !1;
  }
  function u(p) {
    if (!l(p))
      return;
    const h = e * (p * -1);
    r.forEach((m) => m.add(h));
  }
  return {
    loop: u
  };
}
function _K(e) {
  const {
    max: t,
    length: n
  } = e;
  function r(a) {
    const s = a - t;
    return n ? s / -n : 0;
  }
  return {
    get: r
  };
}
function CK(e, t, n, r, o) {
  const {
    startEdge: a,
    endEdge: s
  } = e, {
    groupSlides: i
  } = o, c = f().map(t.measure), l = p(), u = h();
  function f() {
    return i(r).map((v) => mn(v)[s] - v[0][a]).map(dt);
  }
  function p() {
    return r.map((v) => n[a] - v[a]).map((v) => -dt(v));
  }
  function h() {
    return i(l).map((v) => v[0]).map((v, g) => v + c[g]);
  }
  return {
    snaps: l,
    snapsAligned: u
  };
}
function SK(e, t, n, r, o, a) {
  const {
    groupSlides: s
  } = o, {
    min: i,
    max: c
  } = r, l = u();
  function u() {
    const p = s(a), h = !e || t === "keepSnaps";
    return n.length === 1 ? [a] : h ? p : p.slice(i, c).map((m, v, g) => {
      const b = !v, y = ap(g, v);
      if (b) {
        const x = mn(g[0]) + 1;
        return Qm(x);
      }
      if (y) {
        const x = Rs(a) - mn(g)[0] + 1;
        return Qm(x, mn(g)[0]);
      }
      return m;
    });
  }
  return {
    slideRegistry: l
  };
}
function NK(e, t, n, r, o) {
  const {
    reachedAny: a,
    removeOffset: s,
    constrain: i
  } = r;
  function c(m) {
    return m.concat().sort((v, g) => dt(v) - dt(g))[0];
  }
  function l(m) {
    const v = e ? s(m) : i(m), g = t.map((y, x) => ({
      diff: u(y - v, 0),
      index: x
    })).sort((y, x) => dt(y.diff) - dt(x.diff)), {
      index: b
    } = g[0];
    return {
      index: b,
      distance: v
    };
  }
  function u(m, v) {
    const g = [m, m + n, m - n];
    if (!e)
      return g[0];
    if (!v)
      return c(g);
    const b = g.filter((y) => op(y) === v);
    return b.length ? c(b) : mn(g) - n;
  }
  function f(m, v) {
    const g = t[m] - o.get(), b = u(g, v);
    return {
      index: m,
      distance: b
    };
  }
  function p(m, v) {
    const g = o.get() + m, {
      index: b,
      distance: y
    } = l(g), x = !e && a(g);
    if (!v || x)
      return {
        index: b,
        distance: m
      };
    const _ = t[b] - y, w = m + u(_, 0);
    return {
      index: b,
      distance: w
    };
  }
  return {
    byDistance: p,
    byIndex: f,
    shortcut: u
  };
}
function EK(e, t, n, r, o, a, s) {
  function i(f) {
    const p = f.distance, h = f.index !== t.get();
    a.add(p), p && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())), h && (n.set(t.get()), t.set(f.index), s.emit("select"));
  }
  function c(f, p) {
    const h = o.byDistance(f, p);
    i(h);
  }
  function l(f, p) {
    const h = t.clone().set(f), m = o.byIndex(h.get(), p);
    i(m);
  }
  return {
    distance: c,
    index: l
  };
}
function PK(e, t, n, r, o, a) {
  let s = 0;
  function i() {
    a.add(document, "keydown", c, !1), t.forEach(l);
  }
  function c(f) {
    f.code === "Tab" && (s = (/* @__PURE__ */ new Date()).getTime());
  }
  function l(f) {
    const p = () => {
      if ((/* @__PURE__ */ new Date()).getTime() - s > 10)
        return;
      e.scrollLeft = 0;
      const v = t.indexOf(f), g = n.findIndex((b) => b.includes(v));
      np(g) && (o.useDuration(0), r.index(g, 0));
    };
    a.add(f, "focus", p, {
      passive: !0,
      capture: !0
    });
  }
  return {
    init: i
  };
}
function vi(e) {
  let t = e;
  function n() {
    return t;
  }
  function r(c) {
    t = s(c);
  }
  function o(c) {
    t += s(c);
  }
  function a(c) {
    t -= s(c);
  }
  function s(c) {
    return np(c) ? c : c.get();
  }
  return {
    get: n,
    set: r,
    add: o,
    subtract: a
  };
}
function Q1(e, t) {
  const n = e.scroll === "x" ? a : s, r = t.style;
  let o = !1;
  function a(f) {
    return `translate3d(${f}px,0px,0px)`;
  }
  function s(f) {
    return `translate3d(0px,${f}px,0px)`;
  }
  function i(f) {
    o || (r.transform = n(e.direction(f)));
  }
  function c(f) {
    o = !f;
  }
  function l() {
    o || (r.transform = "", t.getAttribute("style") || t.removeAttribute("style"));
  }
  return {
    clear: l,
    to: i,
    toggleActive: c
  };
}
function OK(e, t, n, r, o, a, s, i, c) {
  const u = cs(o), f = cs(o).reverse(), p = b().concat(y());
  function h(S, D) {
    return S.reduce((P, z) => P - o[z], D);
  }
  function m(S, D) {
    return S.reduce((P, z) => h(P, D) > 0 ? P.concat([z]) : P, []);
  }
  function v(S) {
    return a.map((D, P) => ({
      start: D - r[P] + 0.5 + S,
      end: D + t - 0.5 + S
    }));
  }
  function g(S, D, P) {
    const z = v(D);
    return S.map((K) => {
      const R = P ? 0 : -n, W = P ? n : 0, V = P ? "end" : "start", E = z[K][V];
      return {
        index: K,
        loopPoint: E,
        slideLocation: vi(-1),
        translate: Q1(e, c[K]),
        target: () => i.get() > E ? R : W
      };
    });
  }
  function b() {
    const S = s[0], D = m(f, S);
    return g(D, n, !1);
  }
  function y() {
    const S = t - s[0] - 1, D = m(u, S);
    return g(D, -n, !0);
  }
  function x() {
    return p.every(({
      index: S
    }) => {
      const D = u.filter((P) => P !== S);
      return h(D, t) <= 0.1;
    });
  }
  function _() {
    p.forEach((S) => {
      const {
        target: D,
        translate: P,
        slideLocation: z
      } = S, K = D();
      K !== z.get() && (P.to(K), z.set(K));
    });
  }
  function w() {
    p.forEach((S) => S.translate.clear());
  }
  return {
    canLoop: x,
    clear: w,
    loop: _,
    loopPoints: p
  };
}
function TK(e, t, n) {
  let r, o = !1;
  function a(c) {
    if (!n)
      return;
    function l(u) {
      for (const f of u)
        if (f.type === "childList") {
          c.reInit(), t.emit("slidesChanged");
          break;
        }
    }
    r = new MutationObserver((u) => {
      o || (rp(n) || n(c, u)) && l(u);
    }), r.observe(e, {
      childList: !0
    });
  }
  function s() {
    r && r.disconnect(), o = !0;
  }
  return {
    init: a,
    destroy: s
  };
}
function jK(e, t, n, r) {
  const o = {};
  let a = null, s = null, i, c = !1;
  function l() {
    i = new IntersectionObserver((m) => {
      c || (m.forEach((v) => {
        const g = t.indexOf(v.target);
        o[g] = v;
      }), a = null, s = null, n.emit("slidesInView"));
    }, {
      root: e.parentElement,
      threshold: r
    }), t.forEach((m) => i.observe(m));
  }
  function u() {
    i && i.disconnect(), c = !0;
  }
  function f(m) {
    return ls(o).reduce((v, g) => {
      const b = parseInt(g), {
        isIntersecting: y
      } = o[b];
      return (m && y || !m && !y) && v.push(b), v;
    }, []);
  }
  function p(m = !0) {
    if (m && a)
      return a;
    if (!m && s)
      return s;
    const v = f(m);
    return m && (a = v), m || (s = v), v;
  }
  return {
    init: l,
    destroy: u,
    get: p
  };
}
function kK(e, t, n, r, o, a) {
  const {
    measureSize: s,
    startEdge: i,
    endEdge: c
  } = e, l = n[0] && o, u = m(), f = v(), p = n.map(s), h = g();
  function m() {
    if (!l)
      return 0;
    const y = n[0];
    return dt(t[i] - y[i]);
  }
  function v() {
    if (!l)
      return 0;
    const y = a.getComputedStyle(mn(r));
    return parseFloat(y.getPropertyValue(`margin-${c}`));
  }
  function g() {
    return n.map((y, x, _) => {
      const w = !x, N = ap(_, x);
      return w ? p[x] + u : N ? p[x] + f : _[x + 1][i] - y[i];
    }).map(dt);
  }
  return {
    slideSizes: p,
    slideSizesWithGaps: h,
    startGap: u,
    endGap: f
  };
}
function MK(e, t, n, r, o, a, s, i, c) {
  const {
    startEdge: l,
    endEdge: u,
    direction: f
  } = e, p = np(n);
  function h(b, y) {
    return cs(b).filter((x) => x % y === 0).map((x) => b.slice(x, x + y));
  }
  function m(b) {
    return b.length ? cs(b).reduce((y, x, _) => {
      const w = mn(y) || 0, N = w === 0, S = x === Rs(b), D = o[l] - a[w][l], P = o[l] - a[x][u], z = !r && N ? f(s) : 0, K = !r && S ? f(i) : 0, R = dt(P - K - (D + z));
      return _ && R > t + c && y.push(x), S && y.push(b.length), y;
    }, []).map((y, x, _) => {
      const w = Math.max(_[x - 1] || 0);
      return b.slice(w, y);
    }) : [];
  }
  function v(b) {
    return p ? h(b, n) : m(b);
  }
  return {
    groupSlides: v
  };
}
function DK(e, t, n, r, o, a, s) {
  const {
    align: i,
    axis: c,
    direction: l,
    startIndex: u,
    loop: f,
    duration: p,
    dragFree: h,
    dragThreshold: m,
    inViewThreshold: v,
    slidesToScroll: g,
    skipSnaps: b,
    containScroll: y,
    watchResize: x,
    watchSlides: _,
    watchDrag: w
  } = a, N = 2, S = mK(), D = S.measure(t), P = n.map(S.measure), z = fK(c, l), K = z.measureSize(D), R = vK(K), W = uK(i, K), V = !f && !!y, E = f || !!y, {
    slideSizes: B,
    slideSizesWithGaps: T,
    startGap: U,
    endGap: G
  } = kK(z, D, P, n, E, o), Q = MK(z, K, g, f, D, P, U, G, N), {
    snaps: oe,
    snapsAligned: H
  } = CK(z, W, D, P, Q), le = -mn(oe) + mn(T), {
    snapsContained: be,
    scrollContainLimit: pe
  } = xK(K, le, H, y, N), ee = V ? be : H, {
    limit: re
  } = wK(le, ee, f), me = X1(Rs(ee), u, f), _e = me.clone(), ae = cs(n), fe = ({
    dragHandler: yt,
    scrollBody: Xt,
    scrollBounds: Ce,
    options: {
      loop: Se
    }
  }) => {
    Se || Ce.constrain(yt.pointerDown()), Xt.seek();
  }, A = ({
    scrollBody: yt,
    translate: Xt,
    location: Ce,
    offsetLocation: Se,
    scrollLooper: Be,
    slideLooper: Le,
    dragHandler: Xe,
    animation: tt,
    eventHandler: xt,
    options: {
      loop: lr
    }
  }, an) => {
    const Nt = yt.velocity(), On = yt.settled();
    On && !Xe.pointerDown() && (tt.stop(), xt.emit("settle")), On || xt.emit("scroll"), Se.set(Ce.get() - Nt + Nt * an), lr && (Be.loop(yt.direction()), Le.loop()), Xt.to(Se.get());
  }, ne = dK(r, o, () => fe(et), (yt) => A(et, yt)), ye = 0.68, Pe = ee[me.get()], Ie = vi(Pe), Oe = vi(Pe), O = vi(Pe), F = bK(Ie, Oe, O, p, ye), Y = NK(f, ee, le, re, O), ue = EK(ne, me, _e, F, Y, O, s), ce = _K(re), te = us(), we = jK(t, n, s, v), {
    slideRegistry: De
  } = SK(V, y, ee, pe, Q, ae), Ke = PK(e, n, De, ue, F, te), et = {
    ownerDocument: r,
    ownerWindow: o,
    eventHandler: s,
    containerRect: D,
    slideRects: P,
    animation: ne,
    axis: z,
    dragHandler: pK(z, e, r, o, O, hK(z, o), Ie, ne, ue, F, Y, me, s, R, h, m, b, ye, w),
    eventStore: te,
    percentOfView: R,
    index: me,
    indexPrevious: _e,
    limit: re,
    location: Ie,
    offsetLocation: Oe,
    options: a,
    resizeHandler: gK(t, s, o, n, z, x, S),
    scrollBody: F,
    scrollBounds: yK(re, Oe, O, F, R),
    scrollLooper: $K(le, re, Oe, [Ie, Oe, O]),
    scrollProgress: ce,
    scrollSnapList: ee.map(ce.get),
    scrollSnaps: ee,
    scrollTarget: Y,
    scrollTo: ue,
    slideLooper: OK(z, K, le, B, T, oe, ee, Oe, n),
    slideFocus: Ke,
    slidesHandler: TK(t, s, _),
    slidesInView: we,
    slideIndexes: ae,
    slideRegistry: De,
    slidesToScroll: Q,
    target: O,
    translate: Q1(z, t)
  };
  return et;
}
function AK() {
  const e = {};
  let t;
  function n(c) {
    t = c;
  }
  function r(c) {
    return e[c] || [];
  }
  function o(c) {
    return r(c).forEach((l) => l(t, c)), i;
  }
  function a(c, l) {
    return e[c] = r(c).concat([l]), i;
  }
  function s(c, l) {
    return e[c] = r(c).filter((u) => u !== l), i;
  }
  const i = {
    init: n,
    emit: o,
    off: s,
    on: a
  };
  return i;
}
const RK = {
  align: "center",
  axis: "x",
  container: null,
  slides: null,
  containScroll: "trimSnaps",
  direction: "ltr",
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: !1,
  dragThreshold: 10,
  loop: !1,
  skipSnaps: !1,
  duration: 25,
  startIndex: 0,
  active: !0,
  watchDrag: !0,
  watchResize: !0,
  watchSlides: !0
};
function IK(e) {
  function t(a, s) {
    return q1(a, s || {});
  }
  function n(a) {
    const s = a.breakpoints || {}, i = ls(s).filter((c) => e.matchMedia(c).matches).map((c) => s[c]).reduce((c, l) => t(c, l), {});
    return t(a, i);
  }
  function r(a) {
    return a.map((s) => ls(s.breakpoints || {})).reduce((s, i) => s.concat(i), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: n,
    optionsMediaQueries: r
  };
}
function LK(e) {
  let t = [];
  function n(a, s) {
    return t = s.filter(({
      options: i
    }) => e.optionsAtMedia(i).active !== !1), t.forEach((i) => i.init(a, e)), s.reduce((i, c) => Object.assign(i, {
      [c.name]: c
    }), {});
  }
  function r() {
    t = t.filter((a) => a.destroy());
  }
  return {
    init: n,
    destroy: r
  };
}
function oc(e, t, n) {
  const r = e.ownerDocument, o = r.defaultView, a = IK(o), s = LK(a), i = us(), c = AK(), {
    mergeOptions: l,
    optionsAtMedia: u,
    optionsMediaQueries: f
  } = a, {
    on: p,
    off: h,
    emit: m
  } = c, v = K;
  let g = !1, b, y = l(RK, oc.globalOptions), x = l(y), _ = [], w, N, S;
  function D() {
    const {
      container: fe,
      slides: A
    } = x;
    N = (ad(fe) ? e.querySelector(fe) : fe) || e.children[0];
    const ye = ad(A) ? N.querySelectorAll(A) : A;
    S = [].slice.call(ye || N.children);
  }
  function P(fe) {
    const A = DK(e, N, S, r, o, fe, c);
    if (fe.loop && !A.slideLooper.canLoop()) {
      const ne = Object.assign({}, fe, {
        loop: !1
      });
      return P(ne);
    }
    return A;
  }
  function z(fe, A) {
    g || (y = l(y, fe), x = u(y), _ = A || _, D(), b = P(x), f([y, ..._.map(({
      options: ne
    }) => ne)]).forEach((ne) => i.add(ne, "change", K)), x.active && (b.translate.to(b.location.get()), b.animation.init(), b.slidesInView.init(), b.slideFocus.init(), b.eventHandler.init(ae), b.resizeHandler.init(ae), b.slidesHandler.init(ae), b.options.loop && b.slideLooper.loop(), N.offsetParent && S.length && b.dragHandler.init(ae), w = s.init(ae, _)));
  }
  function K(fe, A) {
    const ne = oe();
    R(), z(l({
      startIndex: ne
    }, fe), A), c.emit("reInit");
  }
  function R() {
    b.dragHandler.destroy(), b.eventStore.clear(), b.translate.clear(), b.slideLooper.clear(), b.resizeHandler.destroy(), b.slidesHandler.destroy(), b.slidesInView.destroy(), b.animation.destroy(), s.destroy(), i.clear();
  }
  function W() {
    g || (g = !0, i.clear(), R(), c.emit("destroy"));
  }
  function V(fe, A, ne) {
    !x.active || g || (b.scrollBody.useBaseFriction().useDuration(A === !0 ? 0 : x.duration), b.scrollTo.index(fe, ne || 0));
  }
  function E(fe) {
    const A = b.index.add(1).get();
    V(A, fe, -1);
  }
  function B(fe) {
    const A = b.index.add(-1).get();
    V(A, fe, 1);
  }
  function T() {
    return b.index.add(1).get() !== oe();
  }
  function U() {
    return b.index.add(-1).get() !== oe();
  }
  function G() {
    return b.scrollSnapList;
  }
  function Q() {
    return b.scrollProgress.get(b.location.get());
  }
  function oe() {
    return b.index.get();
  }
  function H() {
    return b.indexPrevious.get();
  }
  function le() {
    return b.slidesInView.get();
  }
  function be() {
    return b.slidesInView.get(!1);
  }
  function pe() {
    return w;
  }
  function ee() {
    return b;
  }
  function re() {
    return e;
  }
  function me() {
    return N;
  }
  function _e() {
    return S;
  }
  const ae = {
    canScrollNext: T,
    canScrollPrev: U,
    containerNode: me,
    internalEngine: ee,
    destroy: W,
    off: h,
    on: p,
    emit: m,
    plugins: pe,
    previousScrollSnap: H,
    reInit: v,
    rootNode: re,
    scrollNext: E,
    scrollPrev: B,
    scrollProgress: Q,
    scrollSnapList: G,
    scrollTo: V,
    selectedScrollSnap: oe,
    slideNodes: _e,
    slidesInView: le,
    slidesNotInView: be
  };
  return z(t, n), setTimeout(() => c.emit("init"), 0), ae;
}
oc.globalOptions = void 0;
function sp(e = {}, t = []) {
  const n = q(e), r = q(t), [o, a] = Z(), [s, i] = Z(), c = ve(() => {
    o && o.reInit(n.current, r.current);
  }, [o]);
  return J(() => {
    if (iK() && s) {
      oc.globalOptions = sp.globalOptions;
      const l = oc(s, n.current, r.current);
      return a(l), () => l.destroy();
    } else
      a(void 0);
  }, [s, a]), J(() => {
    tp(n.current, e) || (n.current = e, c());
  }, [e, c]), J(() => {
    cK(r.current, t) || (r.current = t, c());
  }, [t, c]), [i, o];
}
sp.globalOptions = void 0;
const J1 = C.createContext(null);
function el() {
  const e = C.useContext(J1);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const FK = C.forwardRef(
  ({
    orientation: e = "horizontal",
    opts: t,
    setApi: n,
    plugins: r,
    className: o,
    children: a,
    ...s
  }, i) => {
    const [c, l] = sp(
      {
        ...t,
        axis: e === "horizontal" ? "x" : "y"
      },
      r
    ), [u, f] = C.useState(!1), [p, h] = C.useState(!1), m = C.useCallback((y) => {
      y && (f(y.canScrollPrev()), h(y.canScrollNext()));
    }, []), v = C.useCallback(() => {
      l == null || l.scrollPrev();
    }, [l]), g = C.useCallback(() => {
      l == null || l.scrollNext();
    }, [l]), b = C.useCallback(
      (y) => {
        y.key === "ArrowLeft" ? (y.preventDefault(), v()) : y.key === "ArrowRight" && (y.preventDefault(), g());
      },
      [v, g]
    );
    return C.useEffect(() => {
      !l || !n || n(l);
    }, [l, n]), C.useEffect(() => {
      if (l)
        return m(l), l.on("reInit", m), l.on("select", m), () => {
          l == null || l.off("select", m);
        };
    }, [l, m]), /* @__PURE__ */ d.jsx(
      J1.Provider,
      {
        value: {
          carouselRef: c,
          api: l,
          opts: t,
          orientation: e || ((t == null ? void 0 : t.axis) === "y" ? "vertical" : "horizontal"),
          scrollPrev: v,
          scrollNext: g,
          canScrollPrev: u,
          canScrollNext: p
        },
        children: /* @__PURE__ */ d.jsx(
          "div",
          {
            ref: i,
            onKeyDownCapture: b,
            className: M("relative", o),
            role: "region",
            "aria-roledescription": "carousel",
            ...s,
            children: a
          }
        )
      }
    );
  }
);
FK.displayName = "Carousel";
const BK = C.forwardRef(({ className: e, ...t }, n) => {
  const { carouselRef: r, orientation: o } = el();
  return /* @__PURE__ */ d.jsx("div", { ref: r, className: "overflow-hidden", children: /* @__PURE__ */ d.jsx(
    "div",
    {
      ref: n,
      className: M(
        "flex",
        o === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        e
      ),
      ...t
    }
  ) });
});
BK.displayName = "CarouselContent";
const VK = C.forwardRef(({ className: e, ...t }, n) => {
  const { orientation: r } = el();
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      ref: n,
      role: "group",
      "aria-roledescription": "slide",
      className: M(
        "min-w-0 shrink-0 grow-0 basis-full",
        r === "horizontal" ? "pl-4" : "pt-4",
        e
      ),
      ...t
    }
  );
});
VK.displayName = "CarouselItem";
const zK = C.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
  const { orientation: a, scrollPrev: s, canScrollPrev: i } = el();
  return /* @__PURE__ */ d.jsxs(
    Ve,
    {
      ref: o,
      variant: t,
      size: n,
      className: M(
        "absolute  h-8 w-8 rounded-full",
        a === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !i,
      onClick: s,
      ...r,
      children: [
        /* @__PURE__ */ d.jsx(p$, { className: "h-4 w-4" }),
        /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
zK.displayName = "CarouselPrevious";
const WK = C.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
  const { orientation: a, scrollNext: s, canScrollNext: i } = el();
  return /* @__PURE__ */ d.jsxs(
    Ve,
    {
      ref: o,
      variant: t,
      size: n,
      className: M(
        "absolute h-8 w-8 rounded-full",
        a === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !i,
      onClick: s,
      ...r,
      children: [
        /* @__PURE__ */ d.jsx(h$, { className: "h-4 w-4" }),
        /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
WK.displayName = "CarouselNext";
var ew = I.createContext({ drawerRef: { current: null }, overlayRef: { current: null }, scaleBackground: () => {
}, onPress: () => {
}, onRelease: () => {
}, onDrag: () => {
}, onNestedDrag: () => {
}, onNestedOpenChange: () => {
}, onNestedRelease: () => {
}, openProp: void 0, dismissible: !1, isOpen: !1, keyboardIsOpen: { current: !1 }, snapPointsOffset: null, snapPoints: null, modal: !1, shouldFade: !1, activeSnapPoint: null, onOpenChange: () => {
}, setActiveSnapPoint: () => {
}, visible: !1, closeDrawer: () => {
}, setVisible: () => {
}, direction: "bottom" }), ip = () => I.useContext(ew);
function UK(e, { insertAt: t } = {}) {
  if (typeof document > "u")
    return;
  let n = document.head || document.getElementsByTagName("head")[0], r = document.createElement("style");
  r.type = "text/css", t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e));
}
UK(`[vaul-drawer]{touch-action:none;transition:transform .5s cubic-bezier(.32,.72,0,1)}[vaul-drawer][vaul-drawer-direction=bottom]{transform:translate3d(0,100%,0)}[vaul-drawer][vaul-drawer-direction=top]{transform:translate3d(0,-100%,0)}[vaul-drawer][vaul-drawer-direction=left]{transform:translate3d(-100%,0,0)}[vaul-drawer][vaul-drawer-direction=right]{transform:translate3d(100%,0,0)}.vaul-dragging .vaul-scrollable [vault-drawer-direction=top],.vaul-dragging .vaul-scrollable [vault-drawer-direction=bottom]{overflow-y:hidden!important}.vaul-dragging .vaul-scrollable [vault-drawer-direction=left],.vaul-dragging .vaul-scrollable [vault-drawer-direction=right]{overflow-x:hidden!important}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=top],[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height, 0),0)}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=left],[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height, 0),0,0)}[vaul-overlay]{opacity:0;transition:opacity .5s cubic-bezier(.32,.72,0,1)}[vaul-overlay][vaul-drawer-visible=true]{opacity:1}[vaul-drawer]:after{content:"";position:absolute;background:inherit;background-color:inherit}[vaul-drawer][vaul-drawer-direction=top]:after{top:initial;bottom:100%;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=bottom]:after{top:100%;bottom:initial;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=left]:after{left:initial;right:100%;top:0;bottom:0;width:200%}[vaul-drawer][vaul-drawer-direction=right]:after{left:100%;right:initial;top:0;bottom:0;width:200%}[vaul-overlay][vaul-snap-points=true]:not([vaul-snap-points-overlay="true"]):not([data-state="closed"]){opacity:0}[vaul-overlay][vaul-snap-points-overlay=true]:not([vaul-drawer-visible="false"]){opacity:1}@keyframes fake-animation{}@media (hover: hover) and (pointer: fine){[vaul-drawer]{user-select:none}}
`);
var HK = typeof window < "u" ? ds : J;
function sd(...e) {
  return (...t) => {
    for (let n of e)
      typeof n == "function" && n(...t);
  };
}
function KK() {
  return cp(/^Mac/);
}
function GK() {
  return cp(/^iPhone/);
}
function YK() {
  return cp(/^iPad/) || KK() && navigator.maxTouchPoints > 1;
}
function tw() {
  return GK() || YK();
}
function cp(e) {
  return typeof window < "u" && window.navigator != null ? e.test(window.navigator.platform) : void 0;
}
var ql = typeof document < "u" && window.visualViewport;
function Jm(e) {
  let t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function nw(e) {
  for (Jm(e) && (e = e.parentElement); e && !Jm(e); )
    e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
var qK = /* @__PURE__ */ new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]), oi = 0, Zl;
function ZK(e = {}) {
  let { isDisabled: t } = e;
  HK(() => {
    if (!t)
      return oi++, oi === 1 && (tw() ? Zl = QK() : Zl = XK()), () => {
        oi--, oi === 0 && Zl();
      };
  }, [t]);
}
function XK() {
  return sd(rw(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
}
function QK() {
  let e, t = 0, n = (f) => {
    e = nw(f.target), !(e === document.documentElement && e === document.body) && (t = f.changedTouches[0].pageY);
  }, r = (f) => {
    if (!e || e === document.documentElement || e === document.body) {
      f.preventDefault();
      return;
    }
    let p = f.changedTouches[0].pageY, h = e.scrollTop, m = e.scrollHeight - e.clientHeight;
    m !== 0 && ((h <= 0 && p > t || h >= m && p < t) && f.preventDefault(), t = p);
  }, o = (f) => {
    let p = f.target;
    id(p) && p !== document.activeElement && (f.preventDefault(), p.style.transform = "translateY(-2000px)", p.focus(), requestAnimationFrame(() => {
      p.style.transform = "";
    }));
  }, a = (f) => {
    let p = f.target;
    id(p) && (p.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      p.style.transform = "", ql && (ql.height < window.innerHeight ? requestAnimationFrame(() => {
        ev(p);
      }) : ql.addEventListener("resize", () => ev(p), { once: !0 }));
    }));
  }, s = () => {
    window.scrollTo(0, 0);
  }, i = window.pageXOffset, c = window.pageYOffset, l = sd(rw(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
  window.scrollTo(0, 0);
  let u = sd($a(document, "touchstart", n, { passive: !1, capture: !0 }), $a(document, "touchmove", r, { passive: !1, capture: !0 }), $a(document, "touchend", o, { passive: !1, capture: !0 }), $a(document, "focus", a, !0), $a(window, "scroll", s));
  return () => {
    l(), u(), window.scrollTo(i, c);
  };
}
function rw(e, t, n) {
  let r = e.style[t];
  return e.style[t] = n, () => {
    e.style[t] = r;
  };
}
function $a(e, t, n, r) {
  return e.addEventListener(t, n, r), () => {
    e.removeEventListener(t, n, r);
  };
}
function ev(e) {
  let t = document.scrollingElement || document.documentElement;
  for (; e && e !== t; ) {
    let n = nw(e);
    if (n !== document.documentElement && n !== document.body && n !== e) {
      let r = n.getBoundingClientRect().top, o = e.getBoundingClientRect().top, a = e.getBoundingClientRect().bottom, s = n.getBoundingClientRect().bottom;
      a > s && (n.scrollTop += o - r);
    }
    e = n.parentElement;
  }
}
function id(e) {
  return e instanceof HTMLInputElement && !qK.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function JK(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function eG(...e) {
  return (t) => e.forEach((n) => JK(n, t));
}
function ow(...e) {
  return C.useCallback(eG(...e), e);
}
var hr = null;
function tG({ isOpen: e, modal: t, nested: n, hasBeenOpened: r, preventScrollRestoration: o }) {
  let [a, s] = I.useState(typeof window < "u" ? window.location.href : ""), i = I.useRef(0), c = I.useCallback(() => {
    if (hr === null && e) {
      hr = { position: document.body.style.position, top: document.body.style.top, left: document.body.style.left, height: document.body.style.height };
      let { scrollX: u, innerHeight: f } = window;
      document.body.style.setProperty("position", "fixed", "important"), document.body.style.top = `${-i.current}px`, document.body.style.left = `${-u}px`, document.body.style.right = "0px", document.body.style.height = "auto", setTimeout(() => requestAnimationFrame(() => {
        let p = f - window.innerHeight;
        p && i.current >= f && (document.body.style.top = `${-(i.current + p)}px`);
      }), 300);
    }
  }, [e]), l = I.useCallback(() => {
    if (hr !== null) {
      let u = -parseInt(document.body.style.top, 10), f = -parseInt(document.body.style.left, 10);
      document.body.style.position = hr.position, document.body.style.top = hr.top, document.body.style.left = hr.left, document.body.style.height = hr.height, document.body.style.right = "unset", requestAnimationFrame(() => {
        if (o && a !== window.location.href) {
          s(window.location.href);
          return;
        }
        window.scrollTo(f, u);
      }), hr = null;
    }
  }, [a]);
  return I.useEffect(() => {
    function u() {
      i.current = window.scrollY;
    }
    return u(), window.addEventListener("scroll", u), () => {
      window.removeEventListener("scroll", u);
    };
  }, []), I.useEffect(() => {
    n || !r || (e ? (c(), t || setTimeout(() => {
      l();
    }, 500)) : l());
  }, [e, r, a, t, n, c, l]), { restorePositionSetting: l };
}
var aw = /* @__PURE__ */ new WeakMap();
function st(e, t, n = !1) {
  if (!e || !(e instanceof HTMLElement) || !t)
    return;
  let r = {};
  Object.entries(t).forEach(([o, a]) => {
    if (o.startsWith("--")) {
      e.style.setProperty(o, a);
      return;
    }
    r[o] = e.style[o], e.style[o] = a;
  }), !n && aw.set(e, r);
}
function ai(e, t) {
  if (!e || !(e instanceof HTMLElement))
    return;
  let n = aw.get(e);
  n && (t ? e.style[t] = n[t] : Object.entries(n).forEach(([r, o]) => {
    e.style[r] = o;
  }));
}
var $t = (e) => {
  switch (e) {
    case "top":
    case "bottom":
      return !0;
    case "left":
    case "right":
      return !1;
    default:
      return e;
  }
};
function si(e, t) {
  let n = window.getComputedStyle(e), r = n.transform || n.webkitTransform || n.mozTransform, o = r.match(/^matrix3d\((.+)\)$/);
  return o ? parseFloat(o[1].split(", ")[$t(t) ? 13 : 12]) : (o = r.match(/^matrix\((.+)\)$/), o ? parseFloat(o[1].split(", ")[$t(t) ? 5 : 4]) : null);
}
function nG(e) {
  return 8 * (Math.log(e + 1) - 2);
}
var rt = { DURATION: 0.5, EASE: [0.32, 0.72, 0, 1] }, sw = 0.4;
function iw(e) {
  let t = I.useRef(e);
  return I.useEffect(() => {
    t.current = e;
  }), I.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function rG({ defaultProp: e, onChange: t }) {
  let n = I.useState(e), [r] = n, o = I.useRef(r), a = iw(t);
  return I.useEffect(() => {
    o.current !== r && (a(r), o.current = r);
  }, [r, o, a]), n;
}
function oG({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  let [r, o] = rG({ defaultProp: t, onChange: n }), a = e !== void 0, s = a ? e : r, i = iw(n), c = I.useCallback((l) => {
    if (a) {
      let u = typeof l == "function" ? l(e) : l;
      u !== e && i(u);
    } else
      o(l);
  }, [a, e, o, i]);
  return [s, c];
}
function aG({ activeSnapPointProp: e, setActiveSnapPointProp: t, snapPoints: n, drawerRef: r, overlayRef: o, fadeFromIndex: a, onSnapPointChange: s, direction: i = "bottom" }) {
  let [c, l] = oG({ prop: e, defaultProp: n == null ? void 0 : n[0], onChange: t }), u = I.useMemo(() => c === (n == null ? void 0 : n[n.length - 1]) || null, [n, c]), f = n && n.length > 0 && (a || a === 0) && !Number.isNaN(a) && n[a] === c || !n, p = I.useMemo(() => n == null ? void 0 : n.findIndex((x) => x === c), [n, c]), h = I.useMemo(() => {
    var x;
    return (x = n == null ? void 0 : n.map((_) => {
      let w = typeof window < "u", N = typeof _ == "string", S = 0;
      if (N && (S = parseInt(_, 10)), $t(i)) {
        let P = N ? S : w ? _ * window.innerHeight : 0;
        return w ? i === "bottom" ? window.innerHeight - P : -window.innerHeight + P : P;
      }
      let D = N ? S : w ? _ * window.innerWidth : 0;
      return w ? i === "right" ? window.innerWidth - D : -window.innerWidth + D : D;
    })) != null ? x : [];
  }, [n]), m = I.useMemo(() => p !== null ? h == null ? void 0 : h[p] : null, [h, p]), v = I.useCallback((x) => {
    var _;
    let w = (_ = h == null ? void 0 : h.findIndex((N) => N === x)) != null ? _ : null;
    s(w), st(r.current, { transition: `transform ${rt.DURATION}s cubic-bezier(${rt.EASE.join(",")})`, transform: $t(i) ? `translate3d(0, ${x}px, 0)` : `translate3d(${x}px, 0, 0)` }), h && w !== h.length - 1 && w !== a ? st(o.current, { transition: `opacity ${rt.DURATION}s cubic-bezier(${rt.EASE.join(",")})`, opacity: "0" }) : st(o.current, { transition: `opacity ${rt.DURATION}s cubic-bezier(${rt.EASE.join(",")})`, opacity: "1" }), l(w !== null ? n == null ? void 0 : n[w] : null);
  }, [r.current, n, h, a, o, l]);
  I.useEffect(() => {
    var x;
    if (e) {
      let _ = (x = n == null ? void 0 : n.findIndex((w) => w === e)) != null ? x : -1;
      h && _ !== -1 && typeof h[_] == "number" && v(h[_]);
    }
  }, [e, n, h, v]);
  function g({ draggedDistance: x, closeDrawer: _, velocity: w, dismissible: N }) {
    if (a === void 0)
      return;
    let S = i === "bottom" || i === "right" ? (m ?? 0) - x : (m ?? 0) + x, D = p === a - 1, P = p === 0, z = x > 0;
    if (D && st(o.current, { transition: `opacity ${rt.DURATION}s cubic-bezier(${rt.EASE.join(",")})` }), w > 2 && !z) {
      N ? _() : v(h[0]);
      return;
    }
    if (w > 2 && z && h && n) {
      v(h[n.length - 1]);
      return;
    }
    let K = h == null ? void 0 : h.reduce((W, V) => typeof W != "number" || typeof V != "number" ? W : Math.abs(V - S) < Math.abs(W - S) ? V : W), R = $t(i) ? window.innerHeight : window.innerWidth;
    if (w > sw && Math.abs(x) < R * 0.4) {
      let W = z ? 1 : -1;
      if (W > 0 && u) {
        v(h[n.length - 1]);
        return;
      }
      if (P && W < 0 && N && _(), p === null)
        return;
      v(h[p + W]);
      return;
    }
    v(K);
  }
  function b({ draggedDistance: x }) {
    if (m === null)
      return;
    let _ = i === "bottom" || i === "right" ? m - x : m + x;
    (i === "bottom" || i === "right") && _ < h[h.length - 1] || (i === "top" || i === "left") && _ > h[h.length - 1] || st(r.current, { transform: $t(i) ? `translate3d(0, ${_}px, 0)` : `translate3d(${_}px, 0, 0)` });
  }
  function y(x, _) {
    if (!n || typeof p != "number" || !h || a === void 0)
      return null;
    let w = p === a - 1;
    if (p >= a && _)
      return 0;
    if (w && !_)
      return 1;
    if (!f && !w)
      return null;
    let N = w ? p + 1 : p - 1, S = w ? h[N] - h[N - 1] : h[N + 1] - h[N], D = x / Math.abs(S);
    return w ? 1 - D : D;
  }
  return { isLastSnapPoint: u, activeSnapPoint: c, shouldFade: f, getPercentageDragged: y, setActiveSnapPoint: l, activeSnapPointIndex: p, onRelease: g, onDrag: b, snapPointsOffset: h };
}
var sG = 0.25, iG = 100, tv = 8, Ir = 16, nv = 26, rv = "vaul-dragging";
function cw({ open: e, onOpenChange: t, children: n, shouldScaleBackground: r, onDrag: o, onRelease: a, snapPoints: s, nested: i = !1, closeThreshold: c = sG, scrollLockTimeout: l = iG, dismissible: u = !0, fadeFromIndex: f = s && s.length - 1, activeSnapPoint: p, setActiveSnapPoint: h, fixed: m, modal: v = !0, onClose: g, direction: b = "bottom", preventScrollRestoration: y = !0 }) {
  var x;
  let [_ = !1, w] = I.useState(!1), [N, S] = I.useState(!1), [D, P] = I.useState(!1), [z, K] = I.useState(!1), [R, W] = I.useState(!1), [V, E] = I.useState(!1), B = I.useRef(null), T = I.useRef(null), U = I.useRef(null), G = I.useRef(null), Q = I.useRef(null), oe = I.useRef(!1), H = I.useRef(null), le = I.useRef(0), be = I.useRef(!1), pe = I.useRef(0), ee = I.useRef(null), re = I.useRef(((x = ee.current) == null ? void 0 : x.getBoundingClientRect().height) || 0), me = I.useRef(0), _e = I.useCallback((Ce) => {
    s && Ce === ye.length - 1 && (T.current = /* @__PURE__ */ new Date());
  }, []), { activeSnapPoint: ae, activeSnapPointIndex: fe, setActiveSnapPoint: A, onRelease: ne, snapPointsOffset: ye, onDrag: Pe, shouldFade: Ie, getPercentageDragged: Oe } = aG({ snapPoints: s, activeSnapPointProp: p, setActiveSnapPointProp: h, drawerRef: ee, fadeFromIndex: f, overlayRef: B, onSnapPointChange: _e, direction: b });
  ZK({ isDisabled: !_ || R || !v || V || !N });
  let { restorePositionSetting: O } = tG({ isOpen: _, modal: v, nested: i, hasBeenOpened: N, preventScrollRestoration: y });
  function F() {
    return (window.innerWidth - nv) / window.innerWidth;
  }
  function Y(Ce) {
    var Se;
    !u && !s || ee.current && !ee.current.contains(Ce.target) || (re.current = ((Se = ee.current) == null ? void 0 : Se.getBoundingClientRect().height) || 0, W(!0), U.current = /* @__PURE__ */ new Date(), tw() && window.addEventListener("touchend", () => oe.current = !1, { once: !0 }), Ce.target.setPointerCapture(Ce.pointerId), le.current = $t(b) ? Ce.screenY : Ce.screenX);
  }
  function ue(Ce, Se) {
    var Be;
    let Le = Ce, Xe = (Be = window.getSelection()) == null ? void 0 : Be.toString(), tt = ee.current ? si(ee.current, b) : null, xt = /* @__PURE__ */ new Date();
    if (Le.hasAttribute("data-vaul-no-drag"))
      return !1;
    if (b === "right" || b === "left")
      return !0;
    if (T.current && xt.getTime() - T.current.getTime() < 500)
      return !1;
    if (tt !== null && (b === "bottom" ? tt > 0 : tt < 0))
      return !0;
    if (Xe && Xe.length > 0)
      return !1;
    if (Q.current && xt.getTime() - Q.current.getTime() < l && tt === 0 || Se)
      return Q.current = xt, !1;
    for (; Le; ) {
      if (Le.scrollHeight > Le.clientHeight) {
        if (Le.scrollTop !== 0)
          return Q.current = /* @__PURE__ */ new Date(), !1;
        if (Le.getAttribute("role") === "dialog")
          return !0;
      }
      Le = Le.parentNode;
    }
    return !0;
  }
  function ce(Ce) {
    if (ee.current && R) {
      let Se = b === "bottom" || b === "right" ? 1 : -1, Be = (le.current - ($t(b) ? Ce.screenY : Ce.screenX)) * Se, Le = Be > 0;
      if (s && fe === 0 && !u || !oe.current && !ue(Ce.target, Le))
        return;
      if (ee.current.classList.add(rv), oe.current = !0, st(ee.current, { transition: "none" }), st(B.current, { transition: "none" }), s && Pe({ draggedDistance: Be }), Le && !s) {
        let Nt = nG(Be), On = Math.min(Nt * -1, 0) * Se;
        st(ee.current, { transform: $t(b) ? `translate3d(0, ${On}px, 0)` : `translate3d(${On}px, 0, 0)` });
        return;
      }
      let Xe = Math.abs(Be), tt = document.querySelector("[vaul-drawer-wrapper]"), xt = Xe / re.current, lr = Oe(Xe, Le);
      lr !== null && (xt = lr);
      let an = 1 - xt;
      if ((Ie || f && fe === f - 1) && (o == null || o(Ce, xt), st(B.current, { opacity: `${an}`, transition: "none" }, !0)), tt && B.current && r) {
        let Nt = Math.min(F() + xt * (1 - F()), 1), On = 8 - xt * 8, Hn = Math.max(0, 14 - xt * 14);
        st(tt, { borderRadius: `${On}px`, transform: $t(b) ? `scale(${Nt}) translate3d(0, ${Hn}px, 0)` : `scale(${Nt}) translate3d(${Hn}px, 0, 0)`, transition: "none" }, !0);
      }
      if (!s) {
        let Nt = Xe * Se;
        st(ee.current, { transform: $t(b) ? `translate3d(0, ${Nt}px, 0)` : `translate3d(${Nt}px, 0, 0)` });
      }
    }
  }
  I.useEffect(() => () => {
    Ke(!1), O();
  }, []), I.useEffect(() => {
    var Ce;
    function Se() {
      var Be;
      if (!ee.current)
        return;
      let Le = document.activeElement;
      if (id(Le) || be.current) {
        let Xe = ((Be = window.visualViewport) == null ? void 0 : Be.height) || 0, tt = window.innerHeight - Xe, xt = ee.current.getBoundingClientRect().height || 0;
        me.current || (me.current = xt);
        let lr = ee.current.getBoundingClientRect().top;
        if (Math.abs(pe.current - tt) > 60 && (be.current = !be.current), s && s.length > 0 && ye && fe) {
          let an = ye[fe] || 0;
          tt += an;
        }
        if (pe.current = tt, xt > Xe || be.current) {
          let an = ee.current.getBoundingClientRect().height, Nt = an;
          an > Xe && (Nt = Xe - nv), m ? ee.current.style.height = `${an - Math.max(tt, 0)}px` : ee.current.style.height = `${Math.max(Nt, Xe - lr)}px`;
        } else
          ee.current.style.height = `${me.current}px`;
        s && s.length > 0 && !be.current ? ee.current.style.bottom = "0px" : ee.current.style.bottom = `${Math.max(tt, 0)}px`;
      }
    }
    return (Ce = window.visualViewport) == null || Ce.addEventListener("resize", Se), () => {
      var Be;
      return (Be = window.visualViewport) == null ? void 0 : Be.removeEventListener("resize", Se);
    };
  }, [fe, s, ye]);
  function te() {
    ee.current && (g == null || g(), st(ee.current, { transform: $t(b) ? `translate3d(0, ${b === "bottom" ? "100%" : "-100%"}, 0)` : `translate3d(${b === "right" ? "100%" : "-100%"}, 0, 0)`, transition: `transform ${rt.DURATION}s cubic-bezier(${rt.EASE.join(",")})` }), st(B.current, { opacity: "0", transition: `opacity ${rt.DURATION}s cubic-bezier(${rt.EASE.join(",")})` }), Ke(!1), setTimeout(() => {
      P(!1), w(!1);
    }, 300), setTimeout(() => {
      s && A(s[0]);
    }, rt.DURATION * 1e3));
  }
  I.useEffect(() => {
    if (!_ && r) {
      let Ce = setTimeout(() => {
        ai(document.body);
      }, 200);
      return () => clearTimeout(Ce);
    }
  }, [_, r]), I.useEffect(() => {
    e ? (w(!0), S(!0)) : te();
  }, [e]), I.useEffect(() => {
    z && (t == null || t(_));
  }, [_]), I.useEffect(() => {
    K(!0);
  }, []);
  function we() {
    if (!ee.current)
      return;
    let Ce = document.querySelector("[vaul-drawer-wrapper]"), Se = si(ee.current, b);
    st(ee.current, { transform: "translate3d(0, 0, 0)", transition: `transform ${rt.DURATION}s cubic-bezier(${rt.EASE.join(",")})` }), st(B.current, { transition: `opacity ${rt.DURATION}s cubic-bezier(${rt.EASE.join(",")})`, opacity: "1" }), r && Se && Se > 0 && _ && st(Ce, { borderRadius: `${tv}px`, overflow: "hidden", ...$t(b) ? { transform: `scale(${F()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`, transformOrigin: "top" } : { transform: `scale(${F()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`, transformOrigin: "left" }, transitionProperty: "transform, border-radius", transitionDuration: `${rt.DURATION}s`, transitionTimingFunction: `cubic-bezier(${rt.EASE.join(",")})` }, !0);
  }
  function De(Ce) {
    var Se;
    if (!R || !ee.current)
      return;
    ee.current.classList.remove(rv), oe.current = !1, W(!1), G.current = /* @__PURE__ */ new Date();
    let Be = si(ee.current, b);
    if (!ue(Ce.target, !1) || !Be || Number.isNaN(Be) || U.current === null)
      return;
    let Le = G.current.getTime() - U.current.getTime(), Xe = le.current - ($t(b) ? Ce.screenY : Ce.screenX), tt = Math.abs(Xe) / Le;
    if (tt > 0.05 && (E(!0), setTimeout(() => {
      E(!1);
    }, 200)), s) {
      ne({ draggedDistance: Xe * (b === "bottom" || b === "right" ? 1 : -1), closeDrawer: te, velocity: tt, dismissible: u }), a == null || a(Ce, !0);
      return;
    }
    if (b === "bottom" || b === "right" ? Xe > 0 : Xe < 0) {
      we(), a == null || a(Ce, !0);
      return;
    }
    if (tt > sw) {
      te(), a == null || a(Ce, !1);
      return;
    }
    let xt = Math.min((Se = ee.current.getBoundingClientRect().height) != null ? Se : 0, window.innerHeight);
    if (Be >= xt * c) {
      te(), a == null || a(Ce, !1);
      return;
    }
    a == null || a(Ce, !0), we();
  }
  I.useEffect(() => {
    _ && (st(document.documentElement, { scrollBehavior: "auto" }), T.current = /* @__PURE__ */ new Date(), Ke(!0));
  }, [_]), I.useEffect(() => {
    var Ce;
    if (ee.current && D) {
      let Se = (Ce = ee == null ? void 0 : ee.current) == null ? void 0 : Ce.querySelectorAll("*");
      Se == null || Se.forEach((Be) => {
        let Le = Be;
        (Le.scrollHeight > Le.clientHeight || Le.scrollWidth > Le.clientWidth) && Le.classList.add("vaul-scrollable");
      });
    }
  }, [D]);
  function Ke(Ce) {
    let Se = document.querySelector("[vaul-drawer-wrapper]");
    !Se || !r || (Ce ? (st(document.body, { background: document.body.style.backgroundColor || document.body.style.background }), st(document.body, { background: "black" }, !0), st(Se, { borderRadius: `${tv}px`, overflow: "hidden", ...$t(b) ? { transform: `scale(${F()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`, transformOrigin: "top" } : { transform: `scale(${F()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`, transformOrigin: "left" }, transitionProperty: "transform, border-radius", transitionDuration: `${rt.DURATION}s`, transitionTimingFunction: `cubic-bezier(${rt.EASE.join(",")})` })) : (ai(Se, "overflow"), ai(Se, "transform"), ai(Se, "borderRadius"), st(Se, { transitionProperty: "transform, border-radius", transitionDuration: `${rt.DURATION}s`, transitionTimingFunction: `cubic-bezier(${rt.EASE.join(",")})` })));
  }
  function et(Ce) {
    let Se = Ce ? (window.innerWidth - Ir) / window.innerWidth : 1, Be = Ce ? -Ir : 0;
    H.current && window.clearTimeout(H.current), st(ee.current, { transition: `transform ${rt.DURATION}s cubic-bezier(${rt.EASE.join(",")})`, transform: `scale(${Se}) translate3d(0, ${Be}px, 0)` }), !Ce && ee.current && (H.current = setTimeout(() => {
      let Le = si(ee.current, b);
      st(ee.current, { transition: "none", transform: $t(b) ? `translate3d(0, ${Le}px, 0)` : `translate3d(${Le}px, 0, 0)` });
    }, 500));
  }
  function yt(Ce, Se) {
    if (Se < 0)
      return;
    let Be = $t(b) ? window.innerHeight : window.innerWidth, Le = (Be - Ir) / Be, Xe = Le + Se * (1 - Le), tt = -Ir + Se * Ir;
    st(ee.current, { transform: $t(b) ? `scale(${Xe}) translate3d(0, ${tt}px, 0)` : `scale(${Xe}) translate3d(${tt}px, 0, 0)`, transition: "none" });
  }
  function Xt(Ce, Se) {
    let Be = $t(b) ? window.innerHeight : window.innerWidth, Le = Se ? (Be - Ir) / Be : 1, Xe = Se ? -Ir : 0;
    Se && st(ee.current, { transition: `transform ${rt.DURATION}s cubic-bezier(${rt.EASE.join(",")})`, transform: $t(b) ? `scale(${Le}) translate3d(0, ${Xe}px, 0)` : `scale(${Le}) translate3d(${Xe}px, 0, 0)` });
  }
  return I.createElement(Os, { modal: v, onOpenChange: (Ce) => {
    if (e !== void 0) {
      t == null || t(Ce);
      return;
    }
    Ce ? (S(!0), w(Ce)) : te();
  }, open: _ }, I.createElement(ew.Provider, { value: { visible: D, activeSnapPoint: ae, snapPoints: s, setActiveSnapPoint: A, drawerRef: ee, overlayRef: B, scaleBackground: Ke, onOpenChange: t, onPress: Y, setVisible: P, onRelease: De, onDrag: ce, dismissible: u, isOpen: _, shouldFade: Ie, closeDrawer: te, onNestedDrag: yt, onNestedOpenChange: et, onNestedRelease: Xt, keyboardIsOpen: be, openProp: e, modal: v, snapPointsOffset: ye, direction: b } }, n));
}
var lw = I.forwardRef(function({ children: e, ...t }, n) {
  let { overlayRef: r, snapPoints: o, onRelease: a, shouldFade: s, isOpen: i, visible: c } = ip(), l = ow(n, r), u = o && o.length > 0;
  return I.createElement(po, { onMouseUp: a, ref: l, "vaul-drawer-visible": c ? "true" : "false", "vaul-overlay": "", "vaul-snap-points": i && u ? "true" : "false", "vaul-snap-points-overlay": i && s ? "true" : "false", ...t });
});
lw.displayName = "Drawer.Overlay";
var uw = I.forwardRef(function({ onOpenAutoFocus: e, onPointerDownOutside: t, onAnimationEnd: n, style: r, ...o }, a) {
  let { drawerRef: s, onPress: i, onRelease: c, onDrag: l, dismissible: u, keyboardIsOpen: f, snapPointsOffset: p, visible: h, closeDrawer: m, modal: v, openProp: g, onOpenChange: b, setVisible: y, direction: x } = ip(), _ = ow(a, s);
  return I.useEffect(() => {
    y(!0);
  }, []), I.createElement(ho, { onOpenAutoFocus: (w) => {
    var N;
    e ? e(w) : (w.preventDefault(), (N = s.current) == null || N.focus());
  }, onPointerDown: i, onPointerDownOutside: (w) => {
    if (t == null || t(w), !v || w.defaultPrevented) {
      w.preventDefault();
      return;
    }
    f.current && (f.current = !1), w.preventDefault(), b == null || b(!1), !(!u || g !== void 0) && m();
  }, onPointerMove: l, onPointerUp: c, ref: _, style: p && p.length > 0 ? { "--snap-point-height": `${p[0]}px`, ...r } : r, ...o, "vaul-drawer": "", "vaul-drawer-direction": x, "vaul-drawer-visible": h ? "true" : "false" });
});
uw.displayName = "Drawer.Content";
function cG({ onDrag: e, onOpenChange: t, ...n }) {
  let { onNestedDrag: r, onNestedOpenChange: o, onNestedRelease: a } = ip();
  if (!r)
    throw new Error("Drawer.NestedRoot must be placed in another drawer");
  return I.createElement(cw, { nested: !0, onClose: () => {
    o(!1);
  }, onDrag: (s, i) => {
    r(s, i), e == null || e(s, i);
  }, onOpenChange: (s) => {
    s && o(s), t == null || t(s);
  }, onRelease: a, ...n });
}
var Pn = { Root: cw, NestedRoot: cG, Content: uw, Overlay: lw, Trigger: Mc, Portal: Ts, Close: mo, Title: oa, Description: aa };
const lG = ({
  shouldScaleBackground: e = !0,
  ...t
}) => /* @__PURE__ */ d.jsx(
  Pn.Root,
  {
    shouldScaleBackground: e,
    ...t
  }
);
lG.displayName = "Drawer";
const Tq = Pn.Trigger, uG = Pn.Portal, jq = Pn.Close, dw = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Pn.Overlay,
  {
    ref: n,
    className: M("fixed inset-0 z-50 bg-black/80", e),
    ...t
  }
));
dw.displayName = Pn.Overlay.displayName;
const dG = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsxs(uG, { children: [
  /* @__PURE__ */ d.jsx(dw, {}),
  /* @__PURE__ */ d.jsxs(
    Pn.Content,
    {
      ref: r,
      className: M(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ d.jsx("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }),
        t
      ]
    }
  )
] }));
dG.displayName = "DrawerContent";
const fG = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsx(
  "div",
  {
    className: M("grid gap-1.5 p-4 text-center sm:text-left", e),
    ...t
  }
);
fG.displayName = "DrawerHeader";
const pG = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsx(
  "div",
  {
    className: M("mt-auto flex flex-col gap-2 p-4", e),
    ...t
  }
);
pG.displayName = "DrawerFooter";
const hG = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Pn.Title,
  {
    ref: n,
    className: M(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
hG.displayName = Pn.Title.displayName;
const mG = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Pn.Description,
  {
    ref: n,
    className: M("text-sm text-muted-foreground", e),
    ...t
  }
));
mG.displayName = Pn.Description.displayName;
var vG = Object.defineProperty, gG = Object.defineProperties, bG = Object.getOwnPropertyDescriptors, ac = Object.getOwnPropertySymbols, fw = Object.prototype.hasOwnProperty, pw = Object.prototype.propertyIsEnumerable, ov = (e, t, n) => t in e ? vG(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, yG = (e, t) => {
  for (var n in t || (t = {}))
    fw.call(t, n) && ov(e, n, t[n]);
  if (ac)
    for (var n of ac(t))
      pw.call(t, n) && ov(e, n, t[n]);
  return e;
}, xG = (e, t) => gG(e, bG(t)), wG = (e, t) => {
  var n = {};
  for (var r in e)
    fw.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && ac)
    for (var r of ac(e))
      t.indexOf(r) < 0 && pw.call(e, r) && (n[r] = e[r]);
  return n;
}, $G = "^\\d+$";
function _G(e) {
  let t = setTimeout(e, 0), n = setTimeout(e, 10), r = setTimeout(e, 50);
  return [t, n, r];
}
function CG(e) {
  let t = C.useRef();
  return C.useEffect(() => {
    t.current = e;
  }), t.current;
}
var SG = 18, hw = 40, NG = `${hw}px`, EG = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");
function PG({ containerRef: e, inputRef: t, pushPasswordManagerStrategy: n, isFocused: r }) {
  let o = C.useRef({ done: !1, refocused: !1 }), [a, s] = C.useState(!1), [i, c] = C.useState(!1), [l, u] = C.useState(!1), f = C.useMemo(() => n === "none" ? !1 : (n === "increase-width" || n === "experimental-no-flickering") && a && i, [a, i, n]), p = C.useCallback(() => {
    let h = e.current, m = t.current;
    if (!h || !m || l || n === "none")
      return;
    let v = h, g = v.getBoundingClientRect().left + v.offsetWidth, b = v.getBoundingClientRect().top + v.offsetHeight / 2, y = g - SG, x = b;
    if (!(document.querySelectorAll(EG).length === 0 && document.elementFromPoint(y, x) === h) && (s(!0), u(!0), !o.current.refocused && document.activeElement === m)) {
      let _ = [m.selectionStart, m.selectionEnd];
      m.blur(), m.focus(), m.setSelectionRange(_[0], _[1]), o.current.refocused = !0;
    }
  }, [e, t, l, n]);
  return C.useEffect(() => {
    let h = e.current;
    if (!h || n === "none")
      return;
    function m() {
      let g = window.innerWidth - h.getBoundingClientRect().right;
      c(g >= hw);
    }
    m();
    let v = setInterval(m, 1e3);
    return () => {
      clearInterval(v);
    };
  }, [e, n]), C.useEffect(() => {
    let h = r || document.activeElement === t.current;
    if (n === "none" || !h)
      return;
    let m = setTimeout(p, 0), v = setTimeout(p, 2e3), g = setTimeout(p, 5e3), b = setTimeout(() => {
      u(!0);
    }, 6e3);
    return () => {
      clearTimeout(m), clearTimeout(v), clearTimeout(g), clearTimeout(b);
    };
  }, [t, r, n, p]), { hasPWMBadge: a, willPushPWMBadge: f, PWM_BADGE_SPACE_WIDTH: NG };
}
var mw = C.createContext({}), vw = C.forwardRef((e, t) => {
  var n = e, { value: r, onChange: o, maxLength: a, textAlign: s = "left", pattern: i = $G, inputMode: c = "numeric", onComplete: l, pushPasswordManagerStrategy: u = "increase-width", containerClassName: f, noScriptCSSFallback: p = OG, render: h, children: m } = n, v = wG(n, ["value", "onChange", "maxLength", "textAlign", "pattern", "inputMode", "onComplete", "pushPasswordManagerStrategy", "containerClassName", "noScriptCSSFallback", "render", "children"]), g, b, y, x, _;
  let [w, N] = C.useState(typeof v.defaultValue == "string" ? v.defaultValue : ""), S = r ?? w, D = CG(S), P = C.useCallback((A) => {
    o == null || o(A), N(A);
  }, [o]), z = C.useMemo(() => i ? typeof i == "string" ? new RegExp(i) : i : null, [i]), K = C.useRef(null), R = C.useRef(null), W = C.useRef({ value: S, onChange: P, isIOS: typeof window < "u" && ((b = (g = window == null ? void 0 : window.CSS) == null ? void 0 : g.supports) == null ? void 0 : b.call(g, "-webkit-touch-callout", "none")) }), V = C.useRef({ prev: [(y = K.current) == null ? void 0 : y.selectionStart, (x = K.current) == null ? void 0 : x.selectionEnd, (_ = K.current) == null ? void 0 : _.selectionDirection] });
  C.useImperativeHandle(t, () => K.current, []), C.useEffect(() => {
    let A = K.current, ne = R.current;
    if (!A || !ne)
      return;
    W.current.value !== A.value && W.current.onChange(A.value), V.current.prev = [A.selectionStart, A.selectionEnd, A.selectionDirection];
    function ye() {
      if (document.activeElement !== A) {
        Q(null), H(null);
        return;
      }
      let Oe = A.selectionStart, O = A.selectionEnd, F = A.selectionDirection, Y = A.maxLength, ue = A.value, ce = V.current.prev, te = -1, we = -1, De;
      if (ue.length !== 0 && Oe !== null && O !== null) {
        let Xt = Oe === O, Ce = Oe === ue.length && ue.length < Y;
        if (Xt && !Ce) {
          let Se = Oe;
          if (Se === 0)
            te = 0, we = 1, De = "forward";
          else if (Se === Y)
            te = Se - 1, we = Se, De = "backward";
          else if (Y > 1 && ue.length > 1) {
            let Be = 0;
            if (ce[0] !== null && ce[1] !== null) {
              De = Se < ce[1] ? "backward" : "forward";
              let Le = ce[0] === ce[1] && ce[0] < Y;
              De === "backward" && !Le && (Be = -1);
            }
            te = Be + Se, we = Be + Se + 1;
          }
        }
        te !== -1 && we !== -1 && te !== we && K.current.setSelectionRange(te, we, De);
      }
      let Ke = te !== -1 ? te : Oe, et = we !== -1 ? we : O, yt = De ?? F;
      Q(Ke), H(et), V.current.prev = [Ke, et, yt];
    }
    if (document.addEventListener("selectionchange", ye, { capture: !0 }), ye(), document.activeElement === A && U(!0), !document.getElementById("input-otp-style")) {
      let Oe = document.createElement("style");
      if (Oe.id = "input-otp-style", document.head.appendChild(Oe), Oe.sheet) {
        let O = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
        _a(Oe.sheet, "[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"), _a(Oe.sheet, `[data-input-otp]:autofill { ${O} }`), _a(Oe.sheet, `[data-input-otp]:-webkit-autofill { ${O} }`), _a(Oe.sheet, "@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), _a(Oe.sheet, "[data-input-otp] + * { pointer-events: all !important; }");
      }
    }
    let Pe = () => {
      ne && ne.style.setProperty("--root-height", `${A.clientHeight}px`);
    };
    Pe();
    let Ie = new ResizeObserver(Pe);
    return Ie.observe(A), () => {
      document.removeEventListener("selectionchange", ye, { capture: !0 }), Ie.disconnect();
    };
  }, []);
  let [E, B] = C.useState(!1), [T, U] = C.useState(!1), [G, Q] = C.useState(null), [oe, H] = C.useState(null);
  C.useEffect(() => {
    _G(() => {
      var A, ne, ye, Pe;
      (A = K.current) == null || A.dispatchEvent(new Event("input"));
      let Ie = (ne = K.current) == null ? void 0 : ne.selectionStart, Oe = (ye = K.current) == null ? void 0 : ye.selectionEnd, O = (Pe = K.current) == null ? void 0 : Pe.selectionDirection;
      Ie !== null && Oe !== null && (Q(Ie), H(Oe), V.current.prev = [Ie, Oe, O]);
    });
  }, [S, T]), C.useEffect(() => {
    D !== void 0 && S !== D && D.length < a && S.length === a && (l == null || l(S));
  }, [a, l, D, S]);
  let le = PG({ containerRef: R, inputRef: K, pushPasswordManagerStrategy: u, isFocused: T }), be = C.useCallback((A) => {
    let ne = A.currentTarget.value.slice(0, a);
    if (ne.length > 0 && z && !z.test(ne)) {
      A.preventDefault();
      return;
    }
    typeof D == "string" && ne.length < D.length && document.dispatchEvent(new Event("selectionchange")), P(ne);
  }, [a, P, D, z]), pe = C.useCallback(() => {
    var A;
    if (K.current) {
      let ne = Math.min(K.current.value.length, a - 1), ye = K.current.value.length;
      (A = K.current) == null || A.setSelectionRange(ne, ye), Q(ne), H(ye);
    }
    U(!0);
  }, [a]), ee = C.useCallback((A) => {
    var ne, ye;
    let Pe = K.current;
    if (!W.current.isIOS || !A.clipboardData || !Pe)
      return;
    let Ie = A.clipboardData.getData("text/plain");
    A.preventDefault();
    let Oe = (ne = K.current) == null ? void 0 : ne.selectionStart, O = (ye = K.current) == null ? void 0 : ye.selectionEnd, F = (Oe !== O ? S.slice(0, Oe) + Ie + S.slice(O) : S.slice(0, Oe) + Ie + S.slice(Oe)).slice(0, a);
    if (F.length > 0 && z && !z.test(F))
      return;
    Pe.value = F, P(F);
    let Y = Math.min(F.length, a - 1), ue = F.length;
    Pe.setSelectionRange(Y, ue), Q(Y), H(ue);
  }, [a, P, z, S]), re = C.useMemo(() => ({ position: "relative", cursor: v.disabled ? "default" : "text", userSelect: "none", WebkitUserSelect: "none", pointerEvents: "none" }), [v.disabled]), me = C.useMemo(() => ({ position: "absolute", inset: 0, width: le.willPushPWMBadge ? `calc(100% + ${le.PWM_BADGE_SPACE_WIDTH})` : "100%", clipPath: le.willPushPWMBadge ? `inset(0 ${le.PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0, height: "100%", display: "flex", textAlign: s, opacity: "1", color: "transparent", pointerEvents: "all", background: "transparent", caretColor: "transparent", border: "0 solid transparent", outline: "0 solid transparent", boxShadow: "none", lineHeight: "1", letterSpacing: "-.5em", fontSize: "var(--root-height)", fontFamily: "monospace", fontVariantNumeric: "tabular-nums" }), [le.PWM_BADGE_SPACE_WIDTH, le.willPushPWMBadge, s]), _e = C.useMemo(() => C.createElement("input", xG(yG({ autoComplete: v.autoComplete || "one-time-code" }, v), { "data-input-otp": !0, "data-input-otp-mss": G, "data-input-otp-mse": oe, inputMode: c, pattern: z == null ? void 0 : z.source, style: me, maxLength: a, value: S, ref: K, onPaste: (A) => {
    var ne;
    ee(A), (ne = v.onPaste) == null || ne.call(v, A);
  }, onChange: be, onMouseOver: (A) => {
    var ne;
    B(!0), (ne = v.onMouseOver) == null || ne.call(v, A);
  }, onMouseLeave: (A) => {
    var ne;
    B(!1), (ne = v.onMouseLeave) == null || ne.call(v, A);
  }, onFocus: (A) => {
    var ne;
    pe(), (ne = v.onFocus) == null || ne.call(v, A);
  }, onBlur: (A) => {
    var ne;
    U(!1), (ne = v.onBlur) == null || ne.call(v, A);
  } })), [be, pe, ee, c, me, a, oe, G, v, z == null ? void 0 : z.source, S]), ae = C.useMemo(() => ({ slots: Array.from({ length: a }).map((A, ne) => {
    let ye = T && G !== null && oe !== null && (G === oe && ne === G || ne >= G && ne < oe), Pe = S[ne] !== void 0 ? S[ne] : null;
    return { char: Pe, isActive: ye, hasFakeCaret: ye && Pe === null };
  }), isFocused: T, isHovering: !v.disabled && E }), [T, E, a, oe, G, v.disabled, S]), fe = C.useMemo(() => h ? h(ae) : C.createElement(mw.Provider, { value: ae }, m), [m, ae, h]);
  return C.createElement(C.Fragment, null, p !== null && C.createElement("noscript", null, C.createElement("style", null, p)), C.createElement("div", { ref: R, "data-input-otp-container": !0, style: re, className: f }, fe, C.createElement("div", { style: { position: "absolute", inset: 0, pointerEvents: "none" } }, _e)));
});
vw.displayName = "Input";
function _a(e, t) {
  try {
    e.insertRule(t);
  } catch {
    console.error("input-otp could not insert CSS rule:", t);
  }
}
var OG = `
[data-input-otp] {
  --nojs-bg: white !important;
  --nojs-fg: black !important;

  background-color: var(--nojs-bg) !important;
  color: var(--nojs-fg) !important;
  caret-color: var(--nojs-fg) !important;
  letter-spacing: .25em !important;
  text-align: center !important;
  border: 1px solid var(--nojs-fg) !important;
  border-radius: 4px !important;
  width: 100% !important;
}
@media (prefers-color-scheme: dark) {
  [data-input-otp] {
    --nojs-bg: black !important;
    --nojs-fg: white !important;
  }
}`;
const TG = C.forwardRef(({ className: e, containerClassName: t, ...n }, r) => /* @__PURE__ */ d.jsx(
  vw,
  {
    ref: r,
    containerClassName: M(
      "flex items-center gap-2 has-[:disabled]:opacity-50",
      t
    ),
    className: M("disabled:cursor-not-allowed", e),
    ...n
  }
));
TG.displayName = "InputOTP";
const jG = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx("div", { ref: n, className: M("flex items-center", e), ...t }));
jG.displayName = "InputOTPGroup";
const kG = C.forwardRef(({ index: e, className: t, ...n }, r) => {
  const o = C.useContext(mw), { char: a, hasFakeCaret: s, isActive: i } = o.slots[e];
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      ref: r,
      className: M(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        i && "z-10 ring-2 ring-ring ring-offset-background",
        t
      ),
      ...n,
      children: [
        a,
        s && /* @__PURE__ */ d.jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ d.jsx("div", { className: "h-4 w-px animate-caret-blink bg-foreground duration-1000" }) })
      ]
    }
  );
});
kG.displayName = "InputOTPSlot";
const MG = C.forwardRef(({ ...e }, t) => /* @__PURE__ */ d.jsx("div", { ref: t, role: "separator", ...e, children: /* @__PURE__ */ d.jsx(m$, {}) }));
MG.displayName = "InputOTPSeparator";
const DG = C.forwardRef(({ ...e }, t) => /* @__PURE__ */ d.jsx("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
DG.displayName = "Breadcrumb";
const AG = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  "ol",
  {
    ref: n,
    className: M(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      e
    ),
    ...t
  }
));
AG.displayName = "BreadcrumbList";
const RG = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  "li",
  {
    ref: n,
    className: M("inline-flex items-center gap-1.5", e),
    ...t
  }
));
RG.displayName = "BreadcrumbItem";
const IG = C.forwardRef(({ asChild: e, className: t, ...n }, r) => {
  const o = e ? gn : "a";
  return /* @__PURE__ */ d.jsx(
    o,
    {
      ref: r,
      className: M("transition-colors hover:text-foreground", t),
      ...n
    }
  );
});
IG.displayName = "BreadcrumbLink";
const LG = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  "span",
  {
    ref: n,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: M("font-normal text-foreground", e),
    ...t
  }
));
LG.displayName = "BreadcrumbPage";
const FG = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ d.jsx(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: M("[&>svg]:size-3.5", t),
    ...n,
    children: e ?? /* @__PURE__ */ d.jsx(Pr, {})
  }
);
FG.displayName = "BreadcrumbSeparator";
const BG = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsxs(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: M("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: [
      /* @__PURE__ */ d.jsx(gv, { className: "h-4 w-4" }),
      /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "More" })
    ]
  }
);
BG.displayName = "BreadcrumbElipssis";
const VG = ({ className: e, ...t }) => /* @__PURE__ */ d.jsx(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: M("mx-auto flex w-full justify-center", e),
    ...t
  }
);
VG.displayName = "Pagination";
const zG = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  "ul",
  {
    ref: n,
    className: M("flex flex-row items-center gap-1", e),
    ...t
  }
));
zG.displayName = "PaginationContent";
const WG = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx("li", { ref: n, className: M("", e), ...t }));
WG.displayName = "PaginationItem";
const lp = ({
  className: e,
  isActive: t,
  size: n = "icon",
  ...r
}) => /* @__PURE__ */ d.jsx(
  "a",
  {
    "aria-current": t ? "page" : void 0,
    className: M(
      Mo({
        variant: t ? "outline" : "ghost",
        size: n
      }),
      e
    ),
    ...r
  }
);
lp.displayName = "PaginationLink";
const UG = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsxs(
  lp,
  {
    "aria-label": "Go to previous page",
    size: "default",
    className: M("gap-1 pl-2.5", e),
    ...t,
    children: [
      /* @__PURE__ */ d.jsx(cc, { className: "h-4 w-4" }),
      /* @__PURE__ */ d.jsx("span", { children: "Previous" })
    ]
  }
);
UG.displayName = "PaginationPrevious";
const HG = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsxs(
  lp,
  {
    "aria-label": "Go to next page",
    size: "default",
    className: M("gap-1 pr-2.5", e),
    ...t,
    children: [
      /* @__PURE__ */ d.jsx("span", { children: "Next" }),
      /* @__PURE__ */ d.jsx(Pr, { className: "h-4 w-4" })
    ]
  }
);
HG.displayName = "PaginationNext";
const KG = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsxs(
  "span",
  {
    "aria-hidden": !0,
    className: M("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: [
      /* @__PURE__ */ d.jsx(gv, { className: "h-4 w-4" }),
      /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "More pages" })
    ]
  }
);
KG.displayName = "PaginationEllipsis";
const kq = ({ children: e }) => /* @__PURE__ */ d.jsx("div", { className: "app-layout", children: e });
export {
  FY as Accordion,
  UF as AccordionContent,
  zF as AccordionItem,
  WF as AccordionTrigger,
  RY as AlertDialog,
  mF as AlertDialogAction,
  vF as AlertDialogCancel,
  uF as AlertDialogContent,
  hF as AlertDialogDescription,
  fF as AlertDialogFooter,
  dF as AlertDialogHeader,
  L0 as AlertDialogOverlay,
  lF as AlertDialogPortal,
  pF as AlertDialogTitle,
  IY as AlertDialogTrigger,
  kq as AppLayout,
  TY as AspectRatio,
  Po as Avatar,
  Oo as AvatarFallback,
  Hr as AvatarImage,
  At as Badge,
  Sq as BottomNavigation,
  DG as Breadcrumb,
  BG as BreadcrumbEllipsis,
  RG as BreadcrumbItem,
  IG as BreadcrumbLink,
  AG as BreadcrumbList,
  LG as BreadcrumbPage,
  FG as BreadcrumbSeparator,
  Ve as Button,
  pa as CI_TYPES,
  aC as Calendar,
  Vy as Card,
  e9 as CardContent,
  JI as CardDescription,
  t9 as CardFooter,
  XI as CardHeader,
  QI as CardTitle,
  FK as Carousel,
  BK as CarouselContent,
  VK as CarouselItem,
  WK as CarouselNext,
  zK as CarouselPrevious,
  gA as ChartContainer,
  aY as ChartLegend,
  xA as ChartLegendContent,
  bA as ChartStyle,
  oY as ChartTooltip,
  yA as ChartTooltipContent,
  Hy as Checkbox,
  xq as CodeVerification,
  BY as Collapsible,
  zY as CollapsibleContent,
  VY as CollapsibleTrigger,
  IH as ComboBox,
  Cq as ComboxCheckbox,
  rr as Command,
  OY as CommandDialog,
  $r as CommandEmpty,
  wn as CommandGroup,
  wr as CommandInput,
  nn as CommandItem,
  la as CommandList,
  Ha as CommandSeparator,
  hL as CommandShortcut,
  cY as ContextMenu,
  X7 as ContextMenuCheckboxItem,
  q7 as ContextMenuContent,
  uY as ContextMenuGroup,
  Z7 as ContextMenuItem,
  J7 as ContextMenuLabel,
  dY as ContextMenuPortal,
  pY as ContextMenuRadioGroup,
  Q7 as ContextMenuRadioItem,
  e8 as ContextMenuSeparator,
  t8 as ContextMenuShortcut,
  fY as ContextMenuSub,
  Y7 as ContextMenuSubContent,
  G7 as ContextMenuSubTrigger,
  lY as ContextMenuTrigger,
  Oq as D4TCardsList,
  G1 as D4TImage,
  gq as D4TTable,
  yy as Dialog,
  vY as DialogClose,
  $f as DialogContent,
  U8 as DialogDescription,
  z8 as DialogFooter,
  V8 as DialogHeader,
  xy as DialogOverlay,
  B8 as DialogPortal,
  W8 as DialogTitle,
  mY as DialogTrigger,
  lG as Drawer,
  jq as DrawerClose,
  dG as DrawerContent,
  mG as DrawerDescription,
  pG as DrawerFooter,
  fG as DrawerHeader,
  dw as DrawerOverlay,
  uG as DrawerPortal,
  hG as DrawerTitle,
  Tq as DrawerTrigger,
  _Y as DropdownMenu,
  L9 as DropdownMenuCheckboxItem,
  R9 as DropdownMenuContent,
  SY as DropdownMenuGroup,
  I9 as DropdownMenuItem,
  B9 as DropdownMenuLabel,
  NY as DropdownMenuPortal,
  PY as DropdownMenuRadioGroup,
  F9 as DropdownMenuRadioItem,
  V9 as DropdownMenuSeparator,
  z9 as DropdownMenuShortcut,
  EY as DropdownMenuSub,
  A9 as DropdownMenuSubContent,
  D9 as DropdownMenuSubTrigger,
  CY as DropdownMenuTrigger,
  ly as Form,
  Ps as FormControl,
  ra as FormDescription,
  uo as FormField,
  Mr as FormItem,
  fo as FormLabel,
  w8 as FormMessage,
  _q as GenericCombobox,
  bq as GenericSelect,
  HY as HoverCard,
  nB as HoverCardContent,
  KY as HoverCardTrigger,
  _f as Input,
  TG as InputOTP,
  jG as InputOTPGroup,
  MG as InputOTPSeparator,
  kG as InputOTPSlot,
  gY as InputPID,
  Va as InputUI,
  Un as Label,
  GY as LoaderDots,
  PB as Menubar,
  DB as MenubarCheckboxItem,
  kB as MenubarContent,
  ZY as MenubarGroup,
  MB as MenubarItem,
  RB as MenubarLabel,
  qY as MenubarMenu,
  XY as MenubarPortal,
  JY as MenubarRadioGroup,
  AB as MenubarRadioItem,
  IB as MenubarSeparator,
  LB as MenubarShortcut,
  QY as MenubarSub,
  jB as MenubarSubContent,
  TB as MenubarSubTrigger,
  OB as MenubarTrigger,
  $q as MultipleImages,
  $1 as NavLink,
  TW as NavLinkNested,
  dV as NavigationMenu,
  mV as NavigationMenuContent,
  vV as NavigationMenuIndicator,
  tq as NavigationMenuItem,
  nq as NavigationMenuLink,
  fV as NavigationMenuList,
  hV as NavigationMenuTrigger,
  kx as NavigationMenuViewport,
  ol as PHONE_LINE_CODES,
  VG as Pagination,
  zG as PaginationContent,
  KG as PaginationEllipsis,
  WG as PaginationItem,
  lp as PaginationLink,
  HG as PaginationNext,
  UG as PaginationPrevious,
  tr as Popover,
  Ln as PopoverContent,
  nr as PopoverTrigger,
  NV as Progress,
  WV as RadioGroup,
  UV as RadioGroupItem,
  AL as ScrollArea,
  N0 as ScrollBar,
  Ef as Select,
  Lc as SelectContent,
  YI as SelectGroup,
  Fc as SelectItem,
  qI as SelectLabel,
  ZI as SelectSeparator,
  Ic as SelectTrigger,
  Pf as SelectValue,
  js as Separator,
  kY as Sheet,
  DY as SheetClose,
  LL as SheetContent,
  zL as SheetDescription,
  BL as SheetFooter,
  FL as SheetHeader,
  E0 as SheetOverlay,
  RL as SheetPortal,
  VL as SheetTitle,
  MY as SheetTrigger,
  fq as Sidebar,
  pq as SidebarContent,
  OW as SidebarFooter,
  xW as SidebarHeader,
  Ot as Skeleton,
  hz as Slider,
  dd as Spinner,
  yq as SwatchesPicker,
  sW as Switch,
  O0 as TableBody,
  UL as TableCaption,
  Mf as TableCell,
  WL as TableFooter,
  T0 as TableHead,
  P0 as TableHeader,
  Wc as TableRow,
  kf as TableUI,
  iq as Tabs,
  Ez as TabsContent,
  Sz as TabsList,
  Nz as TabsTrigger,
  yY as TextArea,
  Ey as TextareaUI,
  Tz as Toggle,
  PW as ToggleTheme,
  Jr as Tooltip,
  _r as TooltipContent,
  Qr as TooltipProvider,
  eo as TooltipTrigger,
  wq as UploadImage,
  gC as badgeVariants,
  Mo as buttonVariants,
  ua as camelToSnake,
  M as cn,
  gi as convertBytes,
  rl as convertHexToRGBA,
  qG as fetcher,
  QG as formatCI,
  pm as formatCITypes,
  nY as formatCodePhoneLines,
  Nq as formatListPagination,
  hq as formatPagination,
  tY as formatPhone,
  eY as formatPhoneNumber,
  JG as formatRIF,
  Fm as generateUUID,
  Yl as generateUUIDToList,
  XG as getMultiOpacityColor,
  Eq as initialListPagination,
  mq as initialPagination,
  vq as insertColumn,
  Pq as insertColumnList,
  KH as listCamelToSnake,
  pV as navigationMenuTriggerStyle,
  ZG as simulateFetch,
  Oz as toggleVariants,
  kc as useFormField,
  Zc as useSidebar
};
//# sourceMappingURL=index.es.js.map
