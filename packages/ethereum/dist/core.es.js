import K, { useDebugValue as Lt, useEffect as ae } from "react";
const Ye = (t) => {
  let o;
  const a = /* @__PURE__ */ new Set(), i = (c, s) => {
    const d = typeof c == "function" ? c(o) : c;
    if (d !== o) {
      const l = o;
      o = s ? d : Object.assign({}, o, d), a.forEach((h) => h(o, l));
    }
  }, p = () => o, P = { setState: i, getState: p, subscribe: (c) => (a.add(c), () => a.delete(c)), destroy: () => a.clear() };
  return o = t(
    i,
    p,
    P
  ), P;
}, Wt = (t) => t ? Ye(t) : Ye;
function jt(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Qe = { exports: {} }, _e = {}, Se = { exports: {} }, me = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Be;
function Dt() {
  if (Be)
    return me;
  Be = 1;
  var t = K;
  function o(l, h) {
    return l === h && (l !== 0 || 1 / l === 1 / h) || l !== l && h !== h;
  }
  var a = typeof Object.is == "function" ? Object.is : o, i = t.useState, p = t.useEffect, v = t.useLayoutEffect, x = t.useDebugValue;
  function P(l, h) {
    var O = h(), b = i({ inst: { value: O, getSnapshot: h } }), w = b[0].inst, u = b[1];
    return v(function() {
      w.value = O, w.getSnapshot = h, c(w) && u({ inst: w });
    }, [l, O, h]), p(function() {
      return c(w) && u({ inst: w }), l(function() {
        c(w) && u({ inst: w });
      });
    }, [l]), x(O), O;
  }
  function c(l) {
    var h = l.getSnapshot;
    l = l.value;
    try {
      var O = h();
      return !a(l, O);
    } catch {
      return !0;
    }
  }
  function s(l, h) {
    return h();
  }
  var d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? s : P;
  return me.useSyncExternalStore = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : d, me;
}
var ge = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ge;
function At() {
  return Ge || (Ge = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var t = K, o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function a(g) {
      {
        for (var E = arguments.length, D = new Array(E > 1 ? E - 1 : 0), S = 1; S < E; S++)
          D[S - 1] = arguments[S];
        i("error", g, D);
      }
    }
    function i(g, E, D) {
      {
        var S = o.ReactDebugCurrentFrame, y = S.getStackAddendum();
        y !== "" && (E += "%s", D = D.concat([y]));
        var F = D.map(function(A) {
          return String(A);
        });
        F.unshift("Warning: " + E), Function.prototype.apply.call(console[g], console, F);
      }
    }
    function p(g, E) {
      return g === E && (g !== 0 || 1 / g === 1 / E) || g !== g && E !== E;
    }
    var v = typeof Object.is == "function" ? Object.is : p, x = t.useState, P = t.useEffect, c = t.useLayoutEffect, s = t.useDebugValue, d = !1, l = !1;
    function h(g, E, D) {
      d || t.startTransition !== void 0 && (d = !0, a("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var S = E();
      if (!l) {
        var y = E();
        v(S, y) || (a("The result of getSnapshot should be cached to avoid an infinite loop"), l = !0);
      }
      var F = x({
        inst: {
          value: S,
          getSnapshot: E
        }
      }), A = F[0].inst, Y = F[1];
      return c(function() {
        A.value = S, A.getSnapshot = E, O(A) && Y({
          inst: A
        });
      }, [g, S, E]), P(function() {
        O(A) && Y({
          inst: A
        });
        var J = function() {
          O(A) && Y({
            inst: A
          });
        };
        return g(J);
      }, [g]), s(S), S;
    }
    function O(g) {
      var E = g.getSnapshot, D = g.value;
      try {
        var S = E();
        return !v(D, S);
      } catch {
        return !0;
      }
    }
    function b(g, E, D) {
      return E();
    }
    var w = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", u = !w, L = u ? b : h, C = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : L;
    ge.useSyncExternalStore = C, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ge;
}
var He;
function et() {
  return He || (He = 1, function(t) {
    process.env.NODE_ENV === "production" ? t.exports = Dt() : t.exports = At();
  }(Se)), Se.exports;
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
var qe;
function It() {
  if (qe)
    return _e;
  qe = 1;
  var t = K, o = et();
  function a(s, d) {
    return s === d && (s !== 0 || 1 / s === 1 / d) || s !== s && d !== d;
  }
  var i = typeof Object.is == "function" ? Object.is : a, p = o.useSyncExternalStore, v = t.useRef, x = t.useEffect, P = t.useMemo, c = t.useDebugValue;
  return _e.useSyncExternalStoreWithSelector = function(s, d, l, h, O) {
    var b = v(null);
    if (b.current === null) {
      var w = { hasValue: !1, value: null };
      b.current = w;
    } else
      w = b.current;
    b = P(function() {
      function L(S) {
        if (!C) {
          if (C = !0, g = S, S = h(S), O !== void 0 && w.hasValue) {
            var y = w.value;
            if (O(y, S))
              return E = y;
          }
          return E = S;
        }
        if (y = E, i(g, S))
          return y;
        var F = h(S);
        return O !== void 0 && O(y, F) ? y : (g = S, E = F);
      }
      var C = !1, g, E, D = l === void 0 ? null : l;
      return [function() {
        return L(d());
      }, D === null ? void 0 : function() {
        return L(D());
      }];
    }, [d, l, h, O]);
    var u = p(s, b[0], b[1]);
    return x(function() {
      w.hasValue = !0, w.value = u;
    }, [u]), c(u), u;
  }, _e;
}
var Ee = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ze;
function kt() {
  return ze || (ze = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var t = K, o = et();
    function a(d, l) {
      return d === l && (d !== 0 || 1 / d === 1 / l) || d !== d && l !== l;
    }
    var i = typeof Object.is == "function" ? Object.is : a, p = o.useSyncExternalStore, v = t.useRef, x = t.useEffect, P = t.useMemo, c = t.useDebugValue;
    function s(d, l, h, O, b) {
      var w = v(null), u;
      w.current === null ? (u = {
        hasValue: !1,
        value: null
      }, w.current = u) : u = w.current;
      var L = P(function() {
        var D = !1, S, y, F = function(U) {
          if (!D) {
            D = !0, S = U;
            var M = O(U);
            if (b !== void 0 && u.hasValue) {
              var N = u.value;
              if (b(N, M))
                return y = N, N;
            }
            return y = M, M;
          }
          var B = S, G = y;
          if (i(B, U))
            return G;
          var H = O(U);
          return b !== void 0 && b(G, H) ? G : (S = U, y = H, H);
        }, A = h === void 0 ? null : h, Y = function() {
          return F(l());
        }, J = A === null ? void 0 : function() {
          return F(A());
        };
        return [Y, J];
      }, [l, h, O, b]), C = L[0], g = L[1], E = p(d, C, g);
      return x(function() {
        u.hasValue = !0, u.value = E;
      }, [E]), c(E), E;
    }
    Ee.useSyncExternalStoreWithSelector = s, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ee;
}
(function(t) {
  process.env.NODE_ENV === "production" ? t.exports = It() : t.exports = kt();
})(Qe);
const Ft = /* @__PURE__ */ jt(Qe.exports), { useSyncExternalStoreWithSelector: Mt } = Ft;
function Vt(t, o = t.getState, a) {
  const i = Mt(
    t.subscribe,
    t.getState,
    t.getServerState || t.getState,
    o,
    a
  );
  return Lt(i), i;
}
const Ke = (t) => {
  const o = typeof t == "function" ? Wt(t) : t, a = (i, p) => Vt(o, i, p);
  return Object.assign(a, o), a;
}, Nt = (t) => t ? Ke(t) : Ke;
var tt = Nt;
const ie = (t) => (o) => {
  try {
    const a = t(o);
    return a instanceof Promise ? a : {
      then(i) {
        return ie(i)(a);
      },
      catch(i) {
        return this;
      }
    };
  } catch (a) {
    return {
      then(i) {
        return this;
      },
      catch(i) {
        return ie(i)(a);
      }
    };
  }
}, $t = (t, o) => (a, i, p) => {
  let v = {
    getStorage: () => localStorage,
    serialize: JSON.stringify,
    deserialize: JSON.parse,
    partialize: (u) => u,
    version: 0,
    merge: (u, L) => ({
      ...L,
      ...u
    }),
    ...o
  }, x = !1;
  const P = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set();
  let s;
  try {
    s = v.getStorage();
  } catch {
  }
  if (!s)
    return t(
      (...u) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${v.name}', the given storage is currently unavailable.`
        ), a(...u);
      },
      i,
      p
    );
  const d = ie(v.serialize), l = () => {
    const u = v.partialize({ ...i() });
    let L;
    const C = d({ state: u, version: v.version }).then(
      (g) => s.setItem(v.name, g)
    ).catch((g) => {
      L = g;
    });
    if (L)
      throw L;
    return C;
  }, h = p.setState;
  p.setState = (u, L) => {
    h(u, L), l();
  };
  const O = t(
    (...u) => {
      a(...u), l();
    },
    i,
    p
  );
  let b;
  const w = () => {
    var u;
    if (!s)
      return;
    x = !1, P.forEach((C) => C(i()));
    const L = ((u = v.onRehydrateStorage) == null ? void 0 : u.call(v, i())) || void 0;
    return ie(s.getItem.bind(s))(v.name).then((C) => {
      if (C)
        return v.deserialize(C);
    }).then((C) => {
      if (C)
        if (typeof C.version == "number" && C.version !== v.version) {
          if (v.migrate)
            return v.migrate(
              C.state,
              C.version
            );
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return C.state;
    }).then((C) => {
      var g;
      return b = v.merge(
        C,
        (g = i()) != null ? g : O
      ), a(b, !0), l();
    }).then(() => {
      L == null || L(b, void 0), x = !0, c.forEach((C) => C(b));
    }).catch((C) => {
      L == null || L(void 0, C);
    });
  };
  return p.persist = {
    setOptions: (u) => {
      v = {
        ...v,
        ...u
      }, u.getStorage && (s = u.getStorage());
    },
    clearStorage: () => {
      s == null || s.removeItem(v.name);
    },
    getOptions: () => v,
    rehydrate: () => w(),
    hasHydrated: () => x,
    onHydrate: (u) => (P.add(u), () => {
      P.delete(u);
    }),
    onFinishHydration: (u) => (c.add(u), () => {
      c.delete(u);
    })
  }, w(), b || O;
}, Ut = $t, k = tt()(
  Ut(
    (t) => ({
      isLoading: !0,
      currentWallet: void 0,
      account: void 0,
      provider: void 0,
      initializeStore: () => t({
        currentWallet: void 0,
        account: void 0,
        provider: void 0
      }),
      setLoading: (o) => t({ isLoading: o }),
      setWalletState: (o) => t({ ...o })
    }),
    {
      name: "ether_wallet",
      partialize: (t) => Object.fromEntries(
        Object.entries(t).filter(
          ([o]) => ["currentWallet", "account"].includes(o)
        )
      ),
      getStorage: () => ({
        setItem: (...t) => window.localStorage.setItem(...t),
        removeItem: (...t) => window.localStorage.removeItem(...t),
        getItem: async (...t) => new Promise((o) => {
          typeof window > "u" ? o(null) : setTimeout(() => {
            o(window.localStorage.getItem(...t));
          }, 0);
        })
      })
    }
  )
), rt = tt((t) => ({
  walletConnectProvider: void 0,
  setWalletConnectProvider: (o) => t({ walletConnectProvider: o })
})), Je = async () => {
  if (typeof window < "u")
    if (window.ethereum !== void 0)
      try {
        const [t] = await window.ethereum.request({
          method: "eth_requestAccounts"
        });
        k.setState({
          currentWallet: "MetaMask",
          account: t,
          provider: window.ethereum
        });
      } catch (t) {
        console.error(t);
      }
    else
      window.open(
        `https://metamask.app.link/dapp/${window.location.href.replace(
          `${window.location.protocol}//`,
          ""
        )}`,
        "_blank",
        "noopener"
      );
};
let ye = !1;
const Yt = (t) => new Promise((o, a) => {
  const i = t.wc;
  t.isConnecting && !ye ? t.onConnect((p) => o(p)) : i.connected ? (t.connected || (t.connected = !0, t.updateState(i.session)), o(i)) : (t.isConnecting = !0, i.on("modal_closed", () => {
    ye = !0, t.isConnecting = !1;
  }), ye && t.qrcodeModal.open(t.connector.uri, !1), i.createSession({ chainId: t.chainId }).then(() => {
    i.on("connect", (p, v) => {
      if (p)
        return t.isConnecting = !1, a(p);
      t.isConnecting = !1, t.connected = !0, v && t.updateState(v.params[0]), t.emit("connect"), t.triggerConnect(i), o(i);
    });
  }).catch((p) => {
    t.isConnecting = !1, a(p);
  }));
}), Bt = async (t) => {
  const o = await Yt(t);
  if (o)
    return t.start(), t.subscribeWalletConnector(), o.accounts;
  throw new Error("Failed to connect to WalletConnect");
}, Gt = async () => {
  if (typeof window < "u") {
    const t = rt.getState().walletConnectProvider, o = k.getState().initializeStore;
    if (ot(t, "WalletConnect"))
      try {
        const a = await Bt(t);
        k.setState({
          currentWallet: "WalletConnect",
          account: a[0],
          provider: t
        });
      } catch (a) {
        o(), console.error(a);
      }
    else
      o();
  }
}, ue = {
  MetaMask: "MetaMask",
  WalletConnect: "WalletConnect"
}, nt = (t) => {
  switch (t) {
    case ue.MetaMask:
      return Je();
    case ue.WalletConnect:
      return Gt();
    default:
      return Je();
  }
};
function ot(t, o) {
  return t !== void 0 && o === "WalletConnect";
}
const Xt = () => {
  const t = k((c) => c.currentWallet), o = k((c) => c.account), a = k((c) => c.provider), i = k((c) => c.isLoading), p = k((c) => c.initializeStore);
  return {
    connectTo: nt,
    disconnect: async () => {
      p(), ot(a, t) && await a.disconnect();
    },
    isLoading: i,
    isWalletConnected: a !== void 0 && o !== void 0 && t !== void 0,
    currentWallet: t,
    account: o,
    provider: a,
    chainId: (() => {
      if (a !== void 0 && a.chainId !== null)
        return parseInt(a.chainId.toString(), 16);
    })()
  };
};
var Oe = { exports: {} }, Z = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xe;
function Ht() {
  if (Xe)
    return Z;
  Xe = 1;
  var t = K, o = Symbol.for("react.element"), a = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, p = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, v = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(P, c, s) {
    var d, l = {}, h = null, O = null;
    s !== void 0 && (h = "" + s), c.key !== void 0 && (h = "" + c.key), c.ref !== void 0 && (O = c.ref);
    for (d in c)
      i.call(c, d) && !v.hasOwnProperty(d) && (l[d] = c[d]);
    if (P && P.defaultProps)
      for (d in c = P.defaultProps, c)
        l[d] === void 0 && (l[d] = c[d]);
    return { $$typeof: o, type: P, key: h, ref: O, props: l, _owner: p.current };
  }
  return Z.Fragment = a, Z.jsx = x, Z.jsxs = x, Z;
}
var Q = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ze;
function qt() {
  return Ze || (Ze = 1, process.env.NODE_ENV !== "production" && function() {
    var t = K, o = !1, a = !1, i = !1, p = !1, v = !1, x = Symbol.for("react.element"), P = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), h = Symbol.for("react.context"), O = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), g = Symbol.iterator, E = "@@iterator";
    function D(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = g && e[g] || e[E];
      return typeof r == "function" ? r : null;
    }
    var S = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), f = 1; f < r; f++)
          n[f - 1] = arguments[f];
        F("error", e, n);
      }
    }
    function F(e, r, n) {
      {
        var f = S.ReactDebugCurrentFrame, R = f.getStackAddendum();
        R !== "" && (r += "%s", n = n.concat([R]));
        var T = n.map(function(m) {
          return String(m);
        });
        T.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, T);
      }
    }
    var A;
    A = Symbol.for("react.module.reference");
    function Y(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === c || e === d || v || e === s || e === b || e === w || p || e === C || o || a || i || typeof e == "object" && e !== null && (e.$$typeof === L || e.$$typeof === u || e.$$typeof === l || e.$$typeof === h || e.$$typeof === O || e.$$typeof === A || e.getModuleId !== void 0));
    }
    function J(e, r, n) {
      var f = e.displayName;
      if (f)
        return f;
      var R = r.displayName || r.name || "";
      return R !== "" ? n + "(" + R + ")" : n;
    }
    function U(e) {
      return e.displayName || "Context";
    }
    function M(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case c:
          return "Fragment";
        case P:
          return "Portal";
        case d:
          return "Profiler";
        case s:
          return "StrictMode";
        case b:
          return "Suspense";
        case w:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            var r = e;
            return U(r) + ".Consumer";
          case l:
            var n = e;
            return U(n._context) + ".Provider";
          case O:
            return J(e, e.render, "ForwardRef");
          case u:
            var f = e.displayName || null;
            return f !== null ? f : M(e.type) || "Memo";
          case L: {
            var R = e, T = R._payload, m = R._init;
            try {
              return M(m(T));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var N = Object.assign, B = 0, G, H, Re, be, we, Ce, Te;
    function Pe() {
    }
    Pe.__reactDisabledLog = !0;
    function at() {
      {
        if (B === 0) {
          G = console.log, H = console.info, Re = console.warn, be = console.error, we = console.group, Ce = console.groupCollapsed, Te = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Pe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        B++;
      }
    }
    function it() {
      {
        if (B--, B === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: N({}, e, {
              value: G
            }),
            info: N({}, e, {
              value: H
            }),
            warn: N({}, e, {
              value: Re
            }),
            error: N({}, e, {
              value: be
            }),
            group: N({}, e, {
              value: we
            }),
            groupCollapsed: N({}, e, {
              value: Ce
            }),
            groupEnd: N({}, e, {
              value: Te
            })
          });
        }
        B < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ce = S.ReactCurrentDispatcher, se;
    function ee(e, r, n) {
      {
        if (se === void 0)
          try {
            throw Error();
          } catch (R) {
            var f = R.stack.trim().match(/\n( *(at )?)/);
            se = f && f[1] || "";
          }
        return `
` + se + e;
      }
    }
    var le = !1, te;
    {
      var ut = typeof WeakMap == "function" ? WeakMap : Map;
      te = new ut();
    }
    function xe(e, r) {
      if (!e || le)
        return "";
      {
        var n = te.get(e);
        if (n !== void 0)
          return n;
      }
      var f;
      le = !0;
      var R = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var T;
      T = ce.current, ce.current = null, at();
      try {
        if (r) {
          var m = function() {
            throw Error();
          };
          if (Object.defineProperty(m.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(m, []);
            } catch ($) {
              f = $;
            }
            Reflect.construct(e, [], m);
          } else {
            try {
              m.call();
            } catch ($) {
              f = $;
            }
            e.call(m.prototype);
          }
        } else {
          try {
            throw Error();
          } catch ($) {
            f = $;
          }
          e();
        }
      } catch ($) {
        if ($ && f && typeof $.stack == "string") {
          for (var _ = $.stack.split(`
`), I = f.stack.split(`
`), W = _.length - 1, j = I.length - 1; W >= 1 && j >= 0 && _[W] !== I[j]; )
            j--;
          for (; W >= 1 && j >= 0; W--, j--)
            if (_[W] !== I[j]) {
              if (W !== 1 || j !== 1)
                do
                  if (W--, j--, j < 0 || _[W] !== I[j]) {
                    var V = `
` + _[W].replace(" at new ", " at ");
                    return e.displayName && V.includes("<anonymous>") && (V = V.replace("<anonymous>", e.displayName)), typeof e == "function" && te.set(e, V), V;
                  }
                while (W >= 1 && j >= 0);
              break;
            }
        }
      } finally {
        le = !1, ce.current = T, it(), Error.prepareStackTrace = R;
      }
      var z = e ? e.displayName || e.name : "", Ue = z ? ee(z) : "";
      return typeof e == "function" && te.set(e, Ue), Ue;
    }
    function ct(e, r, n) {
      return xe(e, !1);
    }
    function st(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function re(e, r, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return xe(e, st(e));
      if (typeof e == "string")
        return ee(e);
      switch (e) {
        case b:
          return ee("Suspense");
        case w:
          return ee("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case O:
            return ct(e.render);
          case u:
            return re(e.type, r, n);
          case L: {
            var f = e, R = f._payload, T = f._init;
            try {
              return re(T(R), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var ne = Object.prototype.hasOwnProperty, Le = {}, We = S.ReactDebugCurrentFrame;
    function oe(e) {
      if (e) {
        var r = e._owner, n = re(e.type, e._source, r ? r.type : null);
        We.setExtraStackFrame(n);
      } else
        We.setExtraStackFrame(null);
    }
    function lt(e, r, n, f, R) {
      {
        var T = Function.call.bind(ne);
        for (var m in e)
          if (T(e, m)) {
            var _ = void 0;
            try {
              if (typeof e[m] != "function") {
                var I = Error((f || "React class") + ": " + n + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw I.name = "Invariant Violation", I;
              }
              _ = e[m](r, m, f, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (W) {
              _ = W;
            }
            _ && !(_ instanceof Error) && (oe(R), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", f || "React class", n, m, typeof _), oe(null)), _ instanceof Error && !(_.message in Le) && (Le[_.message] = !0, oe(R), y("Failed %s type: %s", n, _.message), oe(null));
          }
      }
    }
    var ft = Array.isArray;
    function fe(e) {
      return ft(e);
    }
    function dt(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, n = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function vt(e) {
      try {
        return je(e), !1;
      } catch {
        return !0;
      }
    }
    function je(e) {
      return "" + e;
    }
    function De(e) {
      if (vt(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", dt(e)), je(e);
    }
    var X = S.ReactCurrentOwner, pt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ae, Ie, de;
    de = {};
    function ht(e) {
      if (ne.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function _t(e) {
      if (ne.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function St(e, r) {
      if (typeof e.ref == "string" && X.current && r && X.current.stateNode !== r) {
        var n = M(X.current.type);
        de[n] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', M(X.current.type), e.ref), de[n] = !0);
      }
    }
    function mt(e, r) {
      {
        var n = function() {
          Ae || (Ae = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function gt(e, r) {
      {
        var n = function() {
          Ie || (Ie = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var Et = function(e, r, n, f, R, T, m) {
      var _ = {
        $$typeof: x,
        type: e,
        key: r,
        ref: n,
        props: m,
        _owner: T
      };
      return _._store = {}, Object.defineProperty(_._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(_, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.defineProperty(_, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: R
      }), Object.freeze && (Object.freeze(_.props), Object.freeze(_)), _;
    };
    function yt(e, r, n, f, R) {
      {
        var T, m = {}, _ = null, I = null;
        n !== void 0 && (De(n), _ = "" + n), _t(r) && (De(r.key), _ = "" + r.key), ht(r) && (I = r.ref, St(r, R));
        for (T in r)
          ne.call(r, T) && !pt.hasOwnProperty(T) && (m[T] = r[T]);
        if (e && e.defaultProps) {
          var W = e.defaultProps;
          for (T in W)
            m[T] === void 0 && (m[T] = W[T]);
        }
        if (_ || I) {
          var j = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          _ && mt(m, j), I && gt(m, j);
        }
        return Et(e, _, I, R, f, X.current, m);
      }
    }
    var ve = S.ReactCurrentOwner, ke = S.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var r = e._owner, n = re(e.type, e._source, r ? r.type : null);
        ke.setExtraStackFrame(n);
      } else
        ke.setExtraStackFrame(null);
    }
    var pe;
    pe = !1;
    function he(e) {
      return typeof e == "object" && e !== null && e.$$typeof === x;
    }
    function Fe() {
      {
        if (ve.current) {
          var e = M(ve.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Ot(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), n = e.lineNumber;
          return `

Check your code at ` + r + ":" + n + ".";
        }
        return "";
      }
    }
    var Me = {};
    function Rt(e) {
      {
        var r = Fe();
        if (!r) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (r = `

Check the top-level render call using <` + n + ">.");
        }
        return r;
      }
    }
    function Ve(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = Rt(r);
        if (Me[n])
          return;
        Me[n] = !0;
        var f = "";
        e && e._owner && e._owner !== ve.current && (f = " It was passed a child from " + M(e._owner.type) + "."), q(e), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, f), q(null);
      }
    }
    function Ne(e, r) {
      {
        if (typeof e != "object")
          return;
        if (fe(e))
          for (var n = 0; n < e.length; n++) {
            var f = e[n];
            he(f) && Ve(f, r);
          }
        else if (he(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var R = D(e);
          if (typeof R == "function" && R !== e.entries)
            for (var T = R.call(e), m; !(m = T.next()).done; )
              he(m.value) && Ve(m.value, r);
        }
      }
    }
    function bt(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var n;
        if (typeof r == "function")
          n = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === O || r.$$typeof === u))
          n = r.propTypes;
        else
          return;
        if (n) {
          var f = M(r);
          lt(n, e.props, "prop", f, e);
        } else if (r.PropTypes !== void 0 && !pe) {
          pe = !0;
          var R = M(r);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", R || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function wt(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var f = r[n];
          if (f !== "children" && f !== "key") {
            q(e), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", f), q(null);
            break;
          }
        }
        e.ref !== null && (q(e), y("Invalid attribute `ref` supplied to `React.Fragment`."), q(null));
      }
    }
    function $e(e, r, n, f, R, T) {
      {
        var m = Y(e);
        if (!m) {
          var _ = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (_ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var I = Ot(R);
          I ? _ += I : _ += Fe();
          var W;
          e === null ? W = "null" : fe(e) ? W = "array" : e !== void 0 && e.$$typeof === x ? (W = "<" + (M(e.type) || "Unknown") + " />", _ = " Did you accidentally export a JSX literal instead of a component?") : W = typeof e, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", W, _);
        }
        var j = yt(e, r, n, R, T);
        if (j == null)
          return j;
        if (m) {
          var V = r.children;
          if (V !== void 0)
            if (f)
              if (fe(V)) {
                for (var z = 0; z < V.length; z++)
                  Ne(V[z], e);
                Object.freeze && Object.freeze(V);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ne(V, e);
        }
        return e === c ? wt(j) : bt(j), j;
      }
    }
    function Ct(e, r, n) {
      return $e(e, r, n, !0);
    }
    function Tt(e, r, n) {
      return $e(e, r, n, !1);
    }
    var Pt = Tt, xt = Ct;
    Q.Fragment = c, Q.jsx = Pt, Q.jsxs = xt;
  }()), Q;
}
(function(t) {
  process.env.NODE_ENV === "production" ? t.exports = Ht() : t.exports = qt();
})(Oe);
const zt = Oe.exports.Fragment, Kt = Oe.exports.jsx, Zt = ({
  walletOptions: t,
  children: o
}) => {
  const a = t == null ? void 0 : t.walletConnectProvider, i = k((s) => s.provider), p = k((s) => s.currentWallet), v = k((s) => s.isLoading), x = k((s) => s.setWalletState), P = k((s) => s.setLoading), c = rt((s) => s.setWalletConnectProvider);
  return ae(() => {
    c(a);
  }, [a]), ae(() => {
    if (p === void 0) {
      P(!1);
      return;
    }
  }, [p]), ae(() => {
    (async function() {
      if (p !== void 0 && v) {
        switch (p) {
          case ue.MetaMask:
            x({
              provider: window.ethereum
            });
            break;
          case ue.WalletConnect:
            x({
              provider: a
            });
            break;
          default:
            P(!1);
            return;
        }
        await nt(p), P(!1);
      }
    })();
  }, [p, v]), ae(() => {
    if (i !== void 0) {
      const s = (l) => {
        const h = l[0];
        x({
          account: h
        });
      }, d = () => {
        k.persist.clearStorage();
      };
      return i.on("accountsChanged", s), i.on("disconnect", d), () => {
        i.removeListener("accountsChanged", s), i.removeListener("disconnect", d);
      };
    }
  }, [i]), /* @__PURE__ */ Kt(zt, {
    children: o
  });
};
export {
  Zt as EtherWalletProvider,
  Xt as useEtherWallet
};
//# sourceMappingURL=core.es.js.map
