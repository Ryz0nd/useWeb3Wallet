var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import require$$0, { useDebugValue, useEffect } from "react";
const createStoreImpl = (createState) => {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (nextState !== state) {
      const previousState = state;
      state = replace ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const destroy = () => listeners.clear();
  const api = { setState, getState, subscribe, destroy };
  state = createState(setState, getState, api);
  return api;
};
const createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;
var withSelector = { exports: {} };
var withSelector_production_min = {};
var shim = { exports: {} };
var useSyncExternalStoreShim_production_min = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e = require$$0;
function h$1(a, b) {
  return a === b && (a !== 0 || 1 / a === 1 / b) || a !== a && b !== b;
}
var k$1 = typeof Object.is === "function" ? Object.is : h$1, l$1 = e.useState, m$1 = e.useEffect, n$2 = e.useLayoutEffect, p$2 = e.useDebugValue;
function q$2(a, b) {
  var d = b(), f2 = l$1({ inst: { value: d, getSnapshot: b } }), c = f2[0].inst, g = f2[1];
  n$2(function() {
    c.value = d;
    c.getSnapshot = b;
    r$1(c) && g({ inst: c });
  }, [a, d, b]);
  m$1(function() {
    r$1(c) && g({ inst: c });
    return a(function() {
      r$1(c) && g({ inst: c });
    });
  }, [a]);
  p$2(d);
  return d;
}
function r$1(a) {
  var b = a.getSnapshot;
  a = a.value;
  try {
    var d = b();
    return !k$1(a, d);
  } catch (f2) {
    return true;
  }
}
function t$1(a, b) {
  return b();
}
var u$1 = typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined" ? t$1 : q$2;
useSyncExternalStoreShim_production_min.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : u$1;
{
  shim.exports = useSyncExternalStoreShim_production_min;
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
var h = require$$0, n$1 = shim.exports;
function p$1(a, b) {
  return a === b && (a !== 0 || 1 / a === 1 / b) || a !== a && b !== b;
}
var q$1 = typeof Object.is === "function" ? Object.is : p$1, r = n$1.useSyncExternalStore, t = h.useRef, u = h.useEffect, v = h.useMemo, w = h.useDebugValue;
withSelector_production_min.useSyncExternalStoreWithSelector = function(a, b, e2, l2, g) {
  var c = t(null);
  if (c.current === null) {
    var f2 = { hasValue: false, value: null };
    c.current = f2;
  } else
    f2 = c.current;
  c = v(function() {
    function a2(a3) {
      if (!c2) {
        c2 = true;
        d2 = a3;
        a3 = l2(a3);
        if (g !== void 0 && f2.hasValue) {
          var b2 = f2.value;
          if (g(b2, a3))
            return k2 = b2;
        }
        return k2 = a3;
      }
      b2 = k2;
      if (q$1(d2, a3))
        return b2;
      var e3 = l2(a3);
      if (g !== void 0 && g(b2, e3))
        return b2;
      d2 = a3;
      return k2 = e3;
    }
    var c2 = false, d2, k2, m2 = e2 === void 0 ? null : e2;
    return [function() {
      return a2(b());
    }, m2 === null ? void 0 : function() {
      return a2(m2());
    }];
  }, [b, e2, l2, g]);
  var d = r(a, c[0], c[1]);
  u(function() {
    f2.hasValue = true;
    f2.value = d;
  }, [d]);
  w(d);
  return d;
};
{
  withSelector.exports = withSelector_production_min;
}
function useStore(api, selector = api.getState, equalityFn) {
  const slice = withSelector.exports.useSyncExternalStoreWithSelector(api.subscribe, api.getState, api.getServerState || api.getState, selector, equalityFn);
  useDebugValue(slice);
  return slice;
}
const createImpl = (createState) => {
  const api = typeof createState === "function" ? createStore(createState) : createState;
  const useBoundStore = (selector, equalityFn) => useStore(api, selector, equalityFn);
  Object.assign(useBoundStore, api);
  return useBoundStore;
};
const create = (createState) => createState ? createImpl(createState) : createImpl;
var create$1 = create;
var __defProp2 = Object.defineProperty;
var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp2.call(b, prop))
      __defNormalProp2(a, prop, b[prop]);
  if (__getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(b)) {
      if (__propIsEnum2.call(b, prop))
        __defNormalProp2(a, prop, b[prop]);
    }
  return a;
};
const toThenable = (fn) => (input) => {
  try {
    const result = fn(input);
    if (result instanceof Promise) {
      return result;
    }
    return {
      then(onFulfilled) {
        return toThenable(onFulfilled)(result);
      },
      catch(_onRejected) {
        return this;
      }
    };
  } catch (e2) {
    return {
      then(_onFulfilled) {
        return this;
      },
      catch(onRejected) {
        return toThenable(onRejected)(e2);
      }
    };
  }
};
const persistImpl = (config, baseOptions) => (set, get, api) => {
  let options = __spreadValues2({
    getStorage: () => localStorage,
    serialize: JSON.stringify,
    deserialize: JSON.parse,
    partialize: (state) => state,
    version: 0,
    merge: (persistedState, currentState) => __spreadValues2(__spreadValues2({}, currentState), persistedState)
  }, baseOptions);
  let hasHydrated = false;
  const hydrationListeners = /* @__PURE__ */ new Set();
  const finishHydrationListeners = /* @__PURE__ */ new Set();
  let storage;
  try {
    storage = options.getStorage();
  } catch (e2) {
  }
  if (!storage) {
    return config((...args) => {
      console.warn(`[zustand persist middleware] Unable to update item '${options.name}', the given storage is currently unavailable.`);
      set(...args);
    }, get, api);
  }
  const thenableSerialize = toThenable(options.serialize);
  const setItem = () => {
    const state = options.partialize(__spreadValues2({}, get()));
    let errorInSync;
    const thenable = thenableSerialize({ state, version: options.version }).then((serializedValue) => storage.setItem(options.name, serializedValue)).catch((e2) => {
      errorInSync = e2;
    });
    if (errorInSync) {
      throw errorInSync;
    }
    return thenable;
  };
  const savedSetState = api.setState;
  api.setState = (state, replace) => {
    savedSetState(state, replace);
    void setItem();
  };
  const configResult = config((...args) => {
    set(...args);
    void setItem();
  }, get, api);
  let stateFromStorage;
  const hydrate = () => {
    var _a;
    if (!storage)
      return;
    hasHydrated = false;
    hydrationListeners.forEach((cb) => cb(get()));
    const postRehydrationCallback = ((_a = options.onRehydrateStorage) == null ? void 0 : _a.call(options, get())) || void 0;
    return toThenable(storage.getItem.bind(storage))(options.name).then((storageValue) => {
      if (storageValue) {
        return options.deserialize(storageValue);
      }
    }).then((deserializedStorageValue) => {
      if (deserializedStorageValue) {
        if (typeof deserializedStorageValue.version === "number" && deserializedStorageValue.version !== options.version) {
          if (options.migrate) {
            return options.migrate(deserializedStorageValue.state, deserializedStorageValue.version);
          }
          console.error(`State loaded from storage couldn't be migrated since no migrate function was provided`);
        } else {
          return deserializedStorageValue.state;
        }
      }
    }).then((migratedState) => {
      var _a2;
      stateFromStorage = options.merge(migratedState, (_a2 = get()) != null ? _a2 : configResult);
      set(stateFromStorage, true);
      return setItem();
    }).then(() => {
      postRehydrationCallback == null ? void 0 : postRehydrationCallback(stateFromStorage, void 0);
      hasHydrated = true;
      finishHydrationListeners.forEach((cb) => cb(stateFromStorage));
    }).catch((e2) => {
      postRehydrationCallback == null ? void 0 : postRehydrationCallback(void 0, e2);
    });
  };
  api.persist = {
    setOptions: (newOptions) => {
      options = __spreadValues2(__spreadValues2({}, options), newOptions);
      if (newOptions.getStorage) {
        storage = newOptions.getStorage();
      }
    },
    clearStorage: () => {
      storage == null ? void 0 : storage.removeItem(options.name);
    },
    rehydrate: () => hydrate(),
    hasHydrated: () => hasHydrated,
    onHydrate: (cb) => {
      hydrationListeners.add(cb);
      return () => {
        hydrationListeners.delete(cb);
      };
    },
    onFinishHydration: (cb) => {
      finishHydrationListeners.add(cb);
      return () => {
        finishHydrationListeners.delete(cb);
      };
    }
  };
  hydrate();
  return stateFromStorage || configResult;
};
const persist = persistImpl;
const useProviderStore = create$1()(persist((set) => ({
  isLoading: true,
  currentWallet: void 0,
  account: void 0,
  provider: void 0,
  initializeStore: () => set({
    currentWallet: void 0,
    account: void 0,
    provider: void 0
  }),
  setLoading: (state) => set({ isLoading: state }),
  setWalletState: (state) => set(__spreadValues({}, state))
}), {
  name: "ether_wallet",
  partialize: (state) => Object.fromEntries(Object.entries(state).filter(([key]) => ["currentWallet", "account"].includes(key))),
  getStorage: () => ({
    setItem: (...args) => window.localStorage.setItem(...args),
    removeItem: (...args) => window.localStorage.removeItem(...args),
    getItem: async (...args) => new Promise((resolve) => {
      if (typeof window === "undefined") {
        resolve(null);
      } else {
        setTimeout(() => {
          resolve(window.localStorage.getItem(...args));
        }, 0);
      }
    })
  })
}));
const useWalletConnectStore = create$1((set) => ({
  walletConnectProvider: void 0,
  setWalletConnectProvider: (state) => set({ walletConnectProvider: state })
}));
const connectToMetamask = async () => {
  if (typeof window !== "undefined") {
    if (window.ethereum !== void 0) {
      try {
        const [account] = await window.ethereum.request({
          method: "eth_requestAccounts"
        });
        useProviderStore.setState({
          currentWallet: "MetaMask",
          account,
          provider: window.ethereum
        });
      } catch (error) {
        console.error(error);
      }
    } else {
      window.open(`https://metamask.app.link/dapp/${window.location.href.replace(`${window.location.protocol}//`, "")}`, "_blank", "noopener");
    }
  }
};
let shouldForceModalOpen = false;
const getWalletConnector = (provider) => {
  return new Promise((resolve, reject) => {
    const wc = provider.wc;
    if (provider.isConnecting && !shouldForceModalOpen) {
      provider.onConnect((x) => resolve(x));
    } else if (!wc.connected) {
      provider.isConnecting = true;
      wc.on("modal_closed", () => {
        shouldForceModalOpen = true;
        provider.isConnecting = false;
      });
      if (shouldForceModalOpen) {
        provider.qrcodeModal.open(provider.connector.uri, false);
      }
      wc.createSession({ chainId: provider.chainId }).then(() => {
        wc.on("connect", (error, payload) => {
          if (error) {
            provider.isConnecting = false;
            return reject(error);
          }
          provider.isConnecting = false;
          provider.connected = true;
          if (payload) {
            provider.updateState(payload.params[0]);
          }
          provider.emit("connect");
          provider.triggerConnect(wc);
          resolve(wc);
        });
      }).catch((error) => {
        provider.isConnecting = false;
        reject(error);
      });
    } else {
      if (!provider.connected) {
        provider.connected = true;
        provider.updateState(wc.session);
      }
      resolve(wc);
    }
  });
};
const enable = async (provider) => {
  const wc = await getWalletConnector(provider);
  if (wc) {
    provider.start();
    provider.subscribeWalletConnector();
    return wc.accounts;
  } else {
    throw new Error("Failed to connect to WalletConnect");
  }
};
const connectToWalletConnect = async () => {
  if (typeof window !== "undefined") {
    const provider = useWalletConnectStore.getState().walletConnectProvider;
    const initializeStore = useProviderStore.getState().initializeStore;
    if (isWalletConnectProvider(provider, "WalletConnect")) {
      try {
        const accounts = await enable(provider);
        useProviderStore.setState({
          currentWallet: "WalletConnect",
          account: accounts[0],
          provider
        });
      } catch (error) {
        initializeStore();
        console.error(error);
      }
    } else {
      initializeStore();
    }
  }
};
const SupportedWallet = {
  MetaMask: "MetaMask",
  WalletConnect: "WalletConnect"
};
const connectTo = (wallet) => {
  switch (wallet) {
    case SupportedWallet.MetaMask:
      return connectToMetamask();
    case SupportedWallet.WalletConnect:
      return connectToWalletConnect();
    default:
      return connectToMetamask();
  }
};
function isWalletConnectProvider(provider, currentWallet) {
  return provider !== void 0 && currentWallet === "WalletConnect";
}
const useEtherWallet = () => {
  const currentWallet = useProviderStore((state) => state.currentWallet);
  const account = useProviderStore((state) => state.account);
  const provider = useProviderStore((state) => state.provider);
  const isLoading = useProviderStore((state) => state.isLoading);
  const initializeStore = useProviderStore((state) => state.initializeStore);
  const chainId = () => {
    if (provider !== void 0 && provider.chainId !== null) {
      return parseInt(provider.chainId.toString(), 16);
    }
    return void 0;
  };
  const disconnect = async () => {
    initializeStore();
    if (isWalletConnectProvider(provider, currentWallet)) {
      await provider.disconnect();
    }
  };
  const isWalletConnected = provider !== void 0 && account !== void 0 && currentWallet !== void 0;
  return {
    connectTo,
    disconnect,
    isLoading,
    isWalletConnected,
    currentWallet,
    account,
    provider,
    chainId: chainId()
  };
};
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = require$$0, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
function q(c, a, g) {
  var b, d = {}, e2 = null, h2 = null;
  g !== void 0 && (e2 = "" + g);
  a.key !== void 0 && (e2 = "" + a.key);
  a.ref !== void 0 && (h2 = a.ref);
  for (b in a)
    m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps)
    for (b in a = c.defaultProps, a)
      d[b] === void 0 && (d[b] = a[b]);
  return { $$typeof: k, type: c, key: e2, ref: h2, props: d, _owner: n.current };
}
reactJsxRuntime_production_min.Fragment = l;
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
const jsx = jsxRuntime.exports.jsx;
const Fragment = jsxRuntime.exports.Fragment;
const EtherWalletProvider = ({
  walletOptions,
  children
}) => {
  const walletConnectProvider = walletOptions == null ? void 0 : walletOptions.walletConnectProvider;
  const provider = useProviderStore((state) => state.provider);
  const currentWallet = useProviderStore((state) => state.currentWallet);
  const isLoading = useProviderStore((state) => state.isLoading);
  const setWalletState = useProviderStore((state) => state.setWalletState);
  const setLoading = useProviderStore((state) => state.setLoading);
  const setWalletConnectProvider = useWalletConnectStore((state) => state.setWalletConnectProvider);
  useEffect(() => {
    setWalletConnectProvider(walletConnectProvider);
  }, [walletConnectProvider]);
  useEffect(() => {
    const isDisconnected = currentWallet === void 0;
    if (isDisconnected) {
      setLoading(false);
      return;
    }
  }, [currentWallet]);
  useEffect(() => {
    (async function isVisitAgain() {
      if (currentWallet !== void 0 && isLoading) {
        switch (currentWallet) {
          case SupportedWallet.MetaMask:
            setWalletState({
              provider: window.ethereum
            });
            break;
          case SupportedWallet.WalletConnect:
            setWalletState({
              provider: walletConnectProvider
            });
            break;
          default:
            setLoading(false);
            return;
        }
        await connectTo(currentWallet);
        setLoading(false);
      }
    })();
  }, [currentWallet, isLoading]);
  useEffect(() => {
    if (provider !== void 0) {
      const handleAccountsChanged = (accounts) => {
        const account = accounts[0];
        setWalletState({
          account
        });
      };
      const handleDisconnect = () => {
        useProviderStore.persist.clearStorage();
      };
      provider.on("accountsChanged", handleAccountsChanged);
      provider.on("disconnect", handleDisconnect);
      return () => {
        provider.removeListener("accountsChanged", handleAccountsChanged);
        provider.removeListener("disconnect", handleDisconnect);
      };
    }
  }, [provider]);
  return /* @__PURE__ */ jsx(Fragment, {
    children
  });
};
export { EtherWalletProvider, useEtherWallet };
//# sourceMappingURL=core.es.js.map
