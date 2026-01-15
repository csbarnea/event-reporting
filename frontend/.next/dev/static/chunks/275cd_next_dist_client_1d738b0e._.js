(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/asset-prefix.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getAssetPrefix", {
    enumerable: true,
    get: function() {
        return getAssetPrefix;
    }
});
const _invarianterror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)");
function getAssetPrefix() {
    const currentScript = document.currentScript;
    if (!(currentScript instanceof HTMLScriptElement)) {
        throw Object.defineProperty(new _invarianterror.InvariantError(`Expected document.currentScript to be a <script> element. Received ${currentScript} instead.`), "__NEXT_ERROR_CODE", {
            value: "E783",
            enumerable: false,
            configurable: true
        });
    }
    const { pathname } = new URL(currentScript.src);
    const nextIndex = pathname.indexOf('/_next/');
    if (nextIndex === -1) {
        throw Object.defineProperty(new _invarianterror.InvariantError(`Expected document.currentScript src to contain '/_next/'. Received ${currentScript.src} instead.`), "__NEXT_ERROR_CODE", {
            value: "E784",
            enumerable: false,
            configurable: true
        });
    }
    return pathname.slice(0, nextIndex);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=asset-prefix.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/set-attributes-from-props.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "setAttributesFromProps", {
    enumerable: true,
    get: function() {
        return setAttributesFromProps;
    }
});
const DOMAttributeNames = {
    acceptCharset: 'accept-charset',
    className: 'class',
    htmlFor: 'for',
    httpEquiv: 'http-equiv',
    noModule: 'noModule'
};
const ignoreProps = [
    'onLoad',
    'onReady',
    'dangerouslySetInnerHTML',
    'children',
    'onError',
    'strategy',
    'stylesheets'
];
function isBooleanScriptAttribute(attr) {
    return [
        'async',
        'defer',
        'noModule'
    ].includes(attr);
}
function setAttributesFromProps(el, props) {
    for (const [p, value] of Object.entries(props)){
        if (!props.hasOwnProperty(p)) continue;
        if (ignoreProps.includes(p)) continue;
        // we don't render undefined props to the DOM
        if (value === undefined) {
            continue;
        }
        const attr = DOMAttributeNames[p] || p.toLowerCase();
        if (el.tagName === 'SCRIPT' && isBooleanScriptAttribute(attr)) {
            // Correctly assign boolean script attributes
            // https://github.com/vercel/next.js/pull/20748
            ;
            el[attr] = !!value;
        } else {
            el.setAttribute(attr, String(value));
        }
        // Remove falsy non-zero boolean attributes so they are correctly interpreted
        // (e.g. if we set them to false, this coerces to the string "false", which the browser interprets as true)
        if (value === false || el.tagName === 'SCRIPT' && isBooleanScriptAttribute(attr) && (!value || value === 'false')) {
            // Call setAttribute before, as we need to set and unset the attribute to override force async:
            // https://html.spec.whatwg.org/multipage/scripting.html#script-force-async
            el.setAttribute(attr, '');
            el.removeAttribute(attr);
        }
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=set-attributes-from-props.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/app-bootstrap.js [app-client] (ecmascript)", (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/app-bootstrap.js [app-client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/app-bootstrap.js [app-client] (ecmascript)\n- Execution of <ModuleChunkItem as EcmascriptChunkItem>::content_with_async_module_info failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/react-client-callbacks/report-global-error.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "reportGlobalError", {
    enumerable: true,
    get: function() {
        return reportGlobalError;
    }
});
const reportGlobalError = typeof reportError === 'function' ? reportError : (error)=>{
    // TODO: Dispatch error event
    globalThis.console.error(error);
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=report-global-error.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/react-client-callbacks/on-recoverable-error.js [app-client] (ecmascript)", (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/react-client-callbacks/on-recoverable-error.js [app-client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/react-client-callbacks/on-recoverable-error.js [app-client] (ecmascript)\n- Execution of <ModuleChunkItem as EcmascriptChunkItem>::content_with_async_module_info failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    HTTPAccessErrorStatus: null,
    HTTP_ERROR_FALLBACK_ERROR_CODE: null,
    getAccessFallbackErrorTypeByStatus: null,
    getAccessFallbackHTTPStatus: null,
    isHTTPAccessFallbackError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    HTTPAccessErrorStatus: function() {
        return HTTPAccessErrorStatus;
    },
    HTTP_ERROR_FALLBACK_ERROR_CODE: function() {
        return HTTP_ERROR_FALLBACK_ERROR_CODE;
    },
    getAccessFallbackErrorTypeByStatus: function() {
        return getAccessFallbackErrorTypeByStatus;
    },
    getAccessFallbackHTTPStatus: function() {
        return getAccessFallbackHTTPStatus;
    },
    isHTTPAccessFallbackError: function() {
        return isHTTPAccessFallbackError;
    }
});
const HTTPAccessErrorStatus = {
    NOT_FOUND: 404,
    FORBIDDEN: 403,
    UNAUTHORIZED: 401
};
const ALLOWED_CODES = new Set(Object.values(HTTPAccessErrorStatus));
const HTTP_ERROR_FALLBACK_ERROR_CODE = 'NEXT_HTTP_ERROR_FALLBACK';
function isHTTPAccessFallbackError(error) {
    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    const [prefix, httpStatus] = error.digest.split(';');
    return prefix === HTTP_ERROR_FALLBACK_ERROR_CODE && ALLOWED_CODES.has(Number(httpStatus));
}
function getAccessFallbackHTTPStatus(error) {
    const httpStatus = error.digest.split(';')[1];
    return Number(httpStatus);
}
function getAccessFallbackErrorTypeByStatus(status) {
    switch(status){
        case 401:
            return 'unauthorized';
        case 403:
            return 'forbidden';
        case 404:
            return 'not-found';
        default:
            return;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=http-access-fallback.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/redirect-status-code.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RedirectStatusCode", {
    enumerable: true,
    get: function() {
        return RedirectStatusCode;
    }
});
var RedirectStatusCode = /*#__PURE__*/ function(RedirectStatusCode) {
    RedirectStatusCode[RedirectStatusCode["SeeOther"] = 303] = "SeeOther";
    RedirectStatusCode[RedirectStatusCode["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    RedirectStatusCode[RedirectStatusCode["PermanentRedirect"] = 308] = "PermanentRedirect";
    return RedirectStatusCode;
}({});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-status-code.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/redirect-error.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    REDIRECT_ERROR_CODE: null,
    RedirectType: null,
    isRedirectError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    REDIRECT_ERROR_CODE: function() {
        return REDIRECT_ERROR_CODE;
    },
    RedirectType: function() {
        return RedirectType;
    },
    isRedirectError: function() {
        return isRedirectError;
    }
});
const _redirectstatuscode = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/redirect-status-code.js [app-client] (ecmascript)");
const REDIRECT_ERROR_CODE = 'NEXT_REDIRECT';
var RedirectType = /*#__PURE__*/ function(RedirectType) {
    RedirectType["push"] = "push";
    RedirectType["replace"] = "replace";
    return RedirectType;
}({});
function isRedirectError(error) {
    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    const digest = error.digest.split(';');
    const [errorCode, type] = digest;
    const destination = digest.slice(2, -2).join(';');
    const status = digest.at(-2);
    const statusCode = Number(status);
    return errorCode === REDIRECT_ERROR_CODE && (type === 'replace' || type === 'push') && typeof destination === 'string' && !isNaN(statusCode) && statusCode in _redirectstatuscode.RedirectStatusCode;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-error.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/is-next-router-error.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isNextRouterError", {
    enumerable: true,
    get: function() {
        return isNextRouterError;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-client] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/redirect-error.js [app-client] (ecmascript)");
function isNextRouterError(error) {
    return (0, _redirecterror.isRedirectError)(error) || (0, _httpaccessfallback.isHTTPAccessFallbackError)(error);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=is-next-router-error.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/lib/console.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatConsoleArgs: null,
    parseConsoleArgs: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatConsoleArgs: function() {
        return formatConsoleArgs;
    },
    parseConsoleArgs: function() {
        return parseConsoleArgs;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _iserror = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/lib/is-error.js [app-client] (ecmascript)"));
function formatObject(arg, depth) {
    switch(typeof arg){
        case 'object':
            if (arg === null) {
                return 'null';
            } else if (Array.isArray(arg)) {
                let result = '[';
                if (depth < 1) {
                    for(let i = 0; i < arg.length; i++){
                        if (result !== '[') {
                            result += ',';
                        }
                        if (Object.prototype.hasOwnProperty.call(arg, i)) {
                            result += formatObject(arg[i], depth + 1);
                        }
                    }
                } else {
                    result += arg.length > 0 ? '...' : '';
                }
                result += ']';
                return result;
            } else if (arg instanceof Error) {
                return arg + '';
            } else {
                const keys = Object.keys(arg);
                let result = '{';
                if (depth < 1) {
                    for(let i = 0; i < keys.length; i++){
                        const key = keys[i];
                        const desc = Object.getOwnPropertyDescriptor(arg, 'key');
                        if (desc && !desc.get && !desc.set) {
                            const jsonKey = JSON.stringify(key);
                            if (jsonKey !== '"' + key + '"') {
                                result += jsonKey + ': ';
                            } else {
                                result += key + ': ';
                            }
                            result += formatObject(desc.value, depth + 1);
                        }
                    }
                } else {
                    result += keys.length > 0 ? '...' : '';
                }
                result += '}';
                return result;
            }
        case 'string':
            return JSON.stringify(arg);
        case 'number':
        case 'bigint':
        case 'boolean':
        case 'symbol':
        case 'undefined':
        case 'function':
        default:
            return String(arg);
    }
}
function formatConsoleArgs(args) {
    let message;
    let idx;
    if (typeof args[0] === 'string') {
        message = args[0];
        idx = 1;
    } else {
        message = '';
        idx = 0;
    }
    let result = '';
    let startQuote = false;
    for(let i = 0; i < message.length; ++i){
        const char = message[i];
        if (char !== '%' || i === message.length - 1 || idx >= args.length) {
            result += char;
            continue;
        }
        const code = message[++i];
        switch(code){
            case 'c':
                {
                    // TODO: We should colorize with HTML instead of turning into a string.
                    // Ignore for now.
                    result = startQuote ? `${result}]` : `[${result}`;
                    startQuote = !startQuote;
                    idx++;
                    break;
                }
            case 'O':
            case 'o':
                {
                    result += formatObject(args[idx++], 0);
                    break;
                }
            case 'd':
            case 'i':
                {
                    result += parseInt(args[idx++], 10);
                    break;
                }
            case 'f':
                {
                    result += parseFloat(args[idx++]);
                    break;
                }
            case 's':
                {
                    result += String(args[idx++]);
                    break;
                }
            default:
                result += '%' + code;
        }
    }
    for(; idx < args.length; idx++){
        result += (idx > 0 ? ' ' : '') + formatObject(args[idx], 0);
    }
    return result;
}
function parseConsoleArgs(args) {
    // See
    // https://github.com/facebook/react/blob/65a56d0e99261481c721334a3ec4561d173594cd/packages/react-devtools-shared/src/backend/flight/renderer.js#L88-L93
    //
    // Logs replayed from the server look like this:
    // [
    //   "%c%s%c%o\n\n%s\n\n%s\n",
    //   "background: #e6e6e6; ...",
    //   " Server ", // can also be e.g. " Prerender "
    //   "",
    //   Error,
    //   "The above error occurred in the <Page> component.",
    //   ...
    // ]
    if (args.length > 3 && typeof args[0] === 'string' && args[0].startsWith('%c%s%c') && typeof args[1] === 'string' && typeof args[2] === 'string' && typeof args[3] === 'string') {
        const environmentName = args[2];
        const maybeError = args[4];
        return {
            environmentName: environmentName.trim(),
            error: (0, _iserror.default)(maybeError) ? maybeError : null
        };
    }
    return {
        environmentName: null,
        error: null
    };
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=console.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/app-globals.js [app-client] (ecmascript)", (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/app-globals.js [app-client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/app-globals.js [app-client] (ecmascript)\n- Execution of <ModuleChunkItem as EcmascriptChunkItem>::content_with_async_module_info failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/app-router-headers.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ACTION_HEADER: null,
    FLIGHT_HEADERS: null,
    NEXT_ACTION_NOT_FOUND_HEADER: null,
    NEXT_DID_POSTPONE_HEADER: null,
    NEXT_HMR_REFRESH_HASH_COOKIE: null,
    NEXT_HMR_REFRESH_HEADER: null,
    NEXT_HTML_REQUEST_ID_HEADER: null,
    NEXT_IS_PRERENDER_HEADER: null,
    NEXT_REQUEST_ID_HEADER: null,
    NEXT_REWRITTEN_PATH_HEADER: null,
    NEXT_REWRITTEN_QUERY_HEADER: null,
    NEXT_ROUTER_PREFETCH_HEADER: null,
    NEXT_ROUTER_SEGMENT_PREFETCH_HEADER: null,
    NEXT_ROUTER_STALE_TIME_HEADER: null,
    NEXT_ROUTER_STATE_TREE_HEADER: null,
    NEXT_RSC_UNION_QUERY: null,
    NEXT_URL: null,
    RSC_CONTENT_TYPE_HEADER: null,
    RSC_HEADER: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ACTION_HEADER: function() {
        return ACTION_HEADER;
    },
    FLIGHT_HEADERS: function() {
        return FLIGHT_HEADERS;
    },
    NEXT_ACTION_NOT_FOUND_HEADER: function() {
        return NEXT_ACTION_NOT_FOUND_HEADER;
    },
    NEXT_DID_POSTPONE_HEADER: function() {
        return NEXT_DID_POSTPONE_HEADER;
    },
    NEXT_HMR_REFRESH_HASH_COOKIE: function() {
        return NEXT_HMR_REFRESH_HASH_COOKIE;
    },
    NEXT_HMR_REFRESH_HEADER: function() {
        return NEXT_HMR_REFRESH_HEADER;
    },
    NEXT_HTML_REQUEST_ID_HEADER: function() {
        return NEXT_HTML_REQUEST_ID_HEADER;
    },
    NEXT_IS_PRERENDER_HEADER: function() {
        return NEXT_IS_PRERENDER_HEADER;
    },
    NEXT_REQUEST_ID_HEADER: function() {
        return NEXT_REQUEST_ID_HEADER;
    },
    NEXT_REWRITTEN_PATH_HEADER: function() {
        return NEXT_REWRITTEN_PATH_HEADER;
    },
    NEXT_REWRITTEN_QUERY_HEADER: function() {
        return NEXT_REWRITTEN_QUERY_HEADER;
    },
    NEXT_ROUTER_PREFETCH_HEADER: function() {
        return NEXT_ROUTER_PREFETCH_HEADER;
    },
    NEXT_ROUTER_SEGMENT_PREFETCH_HEADER: function() {
        return NEXT_ROUTER_SEGMENT_PREFETCH_HEADER;
    },
    NEXT_ROUTER_STALE_TIME_HEADER: function() {
        return NEXT_ROUTER_STALE_TIME_HEADER;
    },
    NEXT_ROUTER_STATE_TREE_HEADER: function() {
        return NEXT_ROUTER_STATE_TREE_HEADER;
    },
    NEXT_RSC_UNION_QUERY: function() {
        return NEXT_RSC_UNION_QUERY;
    },
    NEXT_URL: function() {
        return NEXT_URL;
    },
    RSC_CONTENT_TYPE_HEADER: function() {
        return RSC_CONTENT_TYPE_HEADER;
    },
    RSC_HEADER: function() {
        return RSC_HEADER;
    }
});
const RSC_HEADER = 'rsc';
const ACTION_HEADER = 'next-action';
const NEXT_ROUTER_STATE_TREE_HEADER = 'next-router-state-tree';
const NEXT_ROUTER_PREFETCH_HEADER = 'next-router-prefetch';
const NEXT_ROUTER_SEGMENT_PREFETCH_HEADER = 'next-router-segment-prefetch';
const NEXT_HMR_REFRESH_HEADER = 'next-hmr-refresh';
const NEXT_HMR_REFRESH_HASH_COOKIE = '__next_hmr_refresh_hash__';
const NEXT_URL = 'next-url';
const RSC_CONTENT_TYPE_HEADER = 'text/x-component';
const FLIGHT_HEADERS = [
    RSC_HEADER,
    NEXT_ROUTER_STATE_TREE_HEADER,
    NEXT_ROUTER_PREFETCH_HEADER,
    NEXT_HMR_REFRESH_HEADER,
    NEXT_ROUTER_SEGMENT_PREFETCH_HEADER
];
const NEXT_RSC_UNION_QUERY = '_rsc';
const NEXT_ROUTER_STALE_TIME_HEADER = 'x-nextjs-stale-time';
const NEXT_DID_POSTPONE_HEADER = 'x-nextjs-postponed';
const NEXT_REWRITTEN_PATH_HEADER = 'x-nextjs-rewritten-path';
const NEXT_REWRITTEN_QUERY_HEADER = 'x-nextjs-rewritten-query';
const NEXT_IS_PRERENDER_HEADER = 'x-nextjs-prerender';
const NEXT_ACTION_NOT_FOUND_HEADER = 'x-nextjs-action-not-found';
const NEXT_REQUEST_ID_HEADER = 'x-nextjs-request-id';
const NEXT_HTML_REQUEST_ID_HEADER = 'x-nextjs-html-request-id';
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router-headers.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/navigation-untracked.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useUntrackedPathname", {
    enumerable: true,
    get: function() {
        return useUntrackedPathname;
    }
});
const _react = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _hooksclientcontextsharedruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [app-client] (ecmascript)");
/**
 * This checks to see if the current render has any unknown route parameters that
 * would cause the pathname to be dynamic. It's used to trigger a different
 * render path in the error boundary.
 *
 * @returns true if there are any unknown route parameters, false otherwise
 */ function hasFallbackRouteParams() {
    if (typeof window === 'undefined') {
        // AsyncLocalStorage should not be included in the client bundle.
        const { workUnitAsyncStorage } = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/app-render/work-unit-async-storage.external.js [app-client] (ecmascript)");
        const workUnitStore = workUnitAsyncStorage.getStore();
        if (!workUnitStore) return false;
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-client':
            case 'prerender-ppr':
                const fallbackParams = workUnitStore.fallbackRouteParams;
                return fallbackParams ? fallbackParams.size > 0 : false;
            case 'prerender-legacy':
            case 'request':
            case 'prerender-runtime':
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                break;
            default:
                workUnitStore;
        }
        return false;
    }
    return false;
}
function useUntrackedPathname() {
    // If there are any unknown route parameters we would typically throw
    // an error, but this internal method allows us to return a null value instead
    // for components that do not propagate the pathname to the static shell (like
    // the error boundary).
    if (hasFallbackRouteParams()) {
        return null;
    }
    // This shouldn't cause any issues related to conditional rendering because
    // the environment will be consistent for the render.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return (0, _react.useContext)(_hooksclientcontextsharedruntime.PathnameContext);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation-untracked.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createHrefFromUrl", {
    enumerable: true,
    get: function() {
        return createHrefFromUrl;
    }
});
function createHrefFromUrl(url, includeHash = true) {
    return url.pathname + url.search + (includeHash ? url.hash : '');
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-href-from-url.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/nav-failure-handler.js [app-client] (ecmascript)", (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/nav-failure-handler.js [app-client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/nav-failure-handler.js [app-client] (ecmascript)\n- Execution of <ModuleChunkItem as EcmascriptChunkItem>::content_with_async_module_info failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/handle-isr-error.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "HandleISRError", {
    enumerable: true,
    get: function() {
        return HandleISRError;
    }
});
const workAsyncStorage = typeof window === 'undefined' ? __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)").workAsyncStorage : undefined;
function HandleISRError({ error }) {
    if (workAsyncStorage) {
        const store = workAsyncStorage.getStore();
        if (store?.isStaticGeneration) {
            if (error) {
                console.error(error);
            }
            throw error;
        }
    }
    return null;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=handle-isr-error.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/error-boundary.js [app-client] (ecmascript)", (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/error-boundary.js [app-client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/error-boundary.js [app-client] (ecmascript)\n- Execution of <ModuleChunkItem as EcmascriptChunkItem>::content_with_async_module_info failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/builtin/global-error.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, // supplied custom global error signatures.
"default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _handleisrerror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/handle-isr-error.js [app-client] (ecmascript)");
const styles = {
    error: {
        // https://github.com/sindresorhus/modern-normalize/blob/main/modern-normalize.css#L38-L52
        fontFamily: 'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
        height: '100vh',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '28px',
        margin: '0 8px'
    }
};
function DefaultGlobalError({ error }) {
    const digest = error?.digest;
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("html", {
        id: "__next_error__",
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("head", {}),
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("body", {
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(_handleisrerror.HandleISRError, {
                        error: error
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                        style: styles.error,
                        children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0, _jsxruntime.jsxs)("h2", {
                                    style: styles.text,
                                    children: [
                                        "Application error: a ",
                                        digest ? 'server' : 'client',
                                        "-side exception has occurred while loading ",
                                        window.location.hostname,
                                        " (see the",
                                        ' ',
                                        digest ? 'server logs' : 'browser console',
                                        " for more information)."
                                    ]
                                }),
                                digest ? /*#__PURE__*/ (0, _jsxruntime.jsx)("p", {
                                    style: styles.text,
                                    children: `Digest: ${digest}`
                                }) : null
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
const _default = DefaultGlobalError;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=global-error.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/dev/runtime-error-handler.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RuntimeErrorHandler", {
    enumerable: true,
    get: function() {
        return RuntimeErrorHandler;
    }
});
const RuntimeErrorHandler = {
    hadRuntimeError: false
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=runtime-error-handler.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/not-found.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "notFound", {
    enumerable: true,
    get: function() {
        return notFound;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-client] (ecmascript)");
/**
 * This function allows you to render the [not-found.js file](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)
 * within a route segment as well as inject a tag.
 *
 * `notFound()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 * - In a Server Component, this will insert a `<meta name="robots" content="noindex" />` meta tag and set the status code to 404.
 * - In a Route Handler or Server Action, it will serve a 404 to the caller.
 *
 * Read more: [Next.js Docs: `notFound`](https://nextjs.org/docs/app/api-reference/functions/not-found)
 */ const DIGEST = `${_httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE};404`;
function notFound() {
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=not-found.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/react-client-callbacks/error-boundary-callbacks.js [app-client] (ecmascript)", (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/react-client-callbacks/error-boundary-callbacks.js [app-client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/react-client-callbacks/error-boundary-callbacks.js [app-client] (ecmascript)\n- Execution of <ModuleChunkItem as EcmascriptChunkItem>::content_with_async_module_info failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ACTION_HMR_REFRESH: null,
    ACTION_NAVIGATE: null,
    ACTION_REFRESH: null,
    ACTION_RESTORE: null,
    ACTION_SERVER_ACTION: null,
    ACTION_SERVER_PATCH: null,
    PrefetchKind: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ACTION_HMR_REFRESH: function() {
        return ACTION_HMR_REFRESH;
    },
    ACTION_NAVIGATE: function() {
        return ACTION_NAVIGATE;
    },
    ACTION_REFRESH: function() {
        return ACTION_REFRESH;
    },
    ACTION_RESTORE: function() {
        return ACTION_RESTORE;
    },
    ACTION_SERVER_ACTION: function() {
        return ACTION_SERVER_ACTION;
    },
    ACTION_SERVER_PATCH: function() {
        return ACTION_SERVER_PATCH;
    },
    PrefetchKind: function() {
        return PrefetchKind;
    }
});
const ACTION_REFRESH = 'refresh';
const ACTION_NAVIGATE = 'navigate';
const ACTION_RESTORE = 'restore';
const ACTION_SERVER_PATCH = 'server-patch';
const ACTION_HMR_REFRESH = 'hmr-refresh';
const ACTION_SERVER_ACTION = 'server-action';
var PrefetchKind = /*#__PURE__*/ function(PrefetchKind) {
    PrefetchKind["AUTO"] = "auto";
    PrefetchKind["FULL"] = "full";
    PrefetchKind["TEMPORARY"] = "temporary";
    return PrefetchKind;
}({});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=router-reducer-types.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/use-action-queue.js [app-client] (ecmascript)", (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/use-action-queue.js [app-client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/use-action-queue.js [app-client] (ecmascript)\n- Execution of <ModuleChunkItem as EcmascriptChunkItem>::content_with_async_module_info failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/app-call-server.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "callServer", {
    enumerable: true,
    get: function() {
        return callServer;
    }
});
const _react = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _routerreducertypes = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
const _useactionqueue = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/use-action-queue.js [app-client] (ecmascript)");
async function callServer(actionId, actionArgs) {
    return new Promise((resolve, reject)=>{
        (0, _react.startTransition)(()=>{
            (0, _useactionqueue.dispatchAppRouterAction)({
                type: _routerreducertypes.ACTION_SERVER_ACTION,
                actionId,
                actionArgs,
                resolve,
                reject
            });
        });
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-call-server.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/app-find-source-map-url.js [app-client] (ecmascript)", (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/app-find-source-map-url.js [app-client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/app-find-source-map-url.js [app-client] (ecmascript)\n- Execution of <ModuleChunkItem as EcmascriptChunkItem>::content_with_async_module_info failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/match-segments.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "matchSegment", {
    enumerable: true,
    get: function() {
        return matchSegment;
    }
});
const matchSegment = (existingSegment, segment)=>{
    // segment is either Array or string
    if (typeof existingSegment === 'string') {
        if (typeof segment === 'string') {
            // Common case: segment is just a string
            return existingSegment === segment;
        }
        return false;
    }
    if (typeof segment === 'string') {
        return false;
    }
    return existingSegment[0] === segment[0] && existingSegment[1] === segment[1];
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=match-segments.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/compute-changed-path.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    computeChangedPath: null,
    extractPathFromFlightRouterState: null,
    getSelectedParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    computeChangedPath: function() {
        return computeChangedPath;
    },
    extractPathFromFlightRouterState: function() {
        return extractPathFromFlightRouterState;
    },
    getSelectedParams: function() {
        return getSelectedParams;
    }
});
const _interceptionroutes = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/shared/lib/router/utils/interception-routes.js [app-client] (ecmascript)");
const _segment = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/shared/lib/segment.js [app-client] (ecmascript)");
const _matchsegments = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/match-segments.js [app-client] (ecmascript)");
const removeLeadingSlash = (segment)=>{
    return segment[0] === '/' ? segment.slice(1) : segment;
};
const segmentToPathname = (segment)=>{
    if (typeof segment === 'string') {
        // 'children' is not a valid path -- it's technically a parallel route that corresponds with the current segment's page
        // if we don't skip it, then the computed pathname might be something like `/children` which doesn't make sense.
        if (segment === 'children') return '';
        return segment;
    }
    return segment[1];
};
function normalizeSegments(segments) {
    return segments.reduce((acc, segment)=>{
        segment = removeLeadingSlash(segment);
        if (segment === '' || (0, _segment.isGroupSegment)(segment)) {
            return acc;
        }
        return `${acc}/${segment}`;
    }, '') || '/';
}
function extractPathFromFlightRouterState(flightRouterState) {
    const segment = Array.isArray(flightRouterState[0]) ? flightRouterState[0][1] : flightRouterState[0];
    if (segment === _segment.DEFAULT_SEGMENT_KEY || _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some((m)=>segment.startsWith(m))) return undefined;
    if (segment.startsWith(_segment.PAGE_SEGMENT_KEY)) return '';
    const segments = [
        segmentToPathname(segment)
    ];
    const parallelRoutes = flightRouterState[1] ?? {};
    const childrenPath = parallelRoutes.children ? extractPathFromFlightRouterState(parallelRoutes.children) : undefined;
    if (childrenPath !== undefined) {
        segments.push(childrenPath);
    } else {
        for (const [key, value] of Object.entries(parallelRoutes)){
            if (key === 'children') continue;
            const childPath = extractPathFromFlightRouterState(value);
            if (childPath !== undefined) {
                segments.push(childPath);
            }
        }
    }
    return normalizeSegments(segments);
}
function computeChangedPathImpl(treeA, treeB) {
    const [segmentA, parallelRoutesA] = treeA;
    const [segmentB, parallelRoutesB] = treeB;
    const normalizedSegmentA = segmentToPathname(segmentA);
    const normalizedSegmentB = segmentToPathname(segmentB);
    if (_interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some((m)=>normalizedSegmentA.startsWith(m) || normalizedSegmentB.startsWith(m))) {
        return '';
    }
    if (!(0, _matchsegments.matchSegment)(segmentA, segmentB)) {
        // once we find where the tree changed, we compute the rest of the path by traversing the tree
        return extractPathFromFlightRouterState(treeB) ?? '';
    }
    for(const parallelRouterKey in parallelRoutesA){
        if (parallelRoutesB[parallelRouterKey]) {
            const changedPath = computeChangedPathImpl(parallelRoutesA[parallelRouterKey], parallelRoutesB[parallelRouterKey]);
            if (changedPath !== null) {
                return `${segmentToPathname(segmentB)}/${changedPath}`;
            }
        }
    }
    return null;
}
function computeChangedPath(treeA, treeB) {
    const changedPath = computeChangedPathImpl(treeA, treeB);
    if (changedPath == null || changedPath === '/') {
        return changedPath;
    }
    // lightweight normalization to remove route groups
    return normalizeSegments(changedPath.split('/'));
}
function getSelectedParams(currentTree, params = {}) {
    const parallelRoutes = currentTree[1];
    for (const parallelRoute of Object.values(parallelRoutes)){
        const segment = parallelRoute[0];
        const isDynamicParameter = Array.isArray(segment);
        const segmentValue = isDynamicParameter ? segment[1] : segment;
        if (!segmentValue || segmentValue.startsWith(_segment.PAGE_SEGMENT_KEY)) continue;
        // Ensure catchAll and optional catchall are turned into an array
        const isCatchAll = isDynamicParameter && (segment[2] === 'c' || segment[2] === 'oc');
        if (isCatchAll) {
            params[segment[0]] = segment[1].split('/');
        } else if (isDynamicParameter) {
            params[segment[0]] = segment[1];
        }
        params = getSelectedParams(parallelRoute, params);
    }
    return params;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=compute-changed-path.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/handle-mutable.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "handleMutable", {
    enumerable: true,
    get: function() {
        return handleMutable;
    }
});
const _computechangedpath = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/compute-changed-path.js [app-client] (ecmascript)");
function isNotUndefined(value) {
    return typeof value !== 'undefined';
}
function handleMutable(state, mutable) {
    // shouldScroll is true by default, can override to false.
    const shouldScroll = mutable.shouldScroll ?? true;
    let previousNextUrl = state.previousNextUrl;
    let nextUrl = state.nextUrl;
    if (isNotUndefined(mutable.patchedTree)) {
        // If we received a patched tree, we need to compute the changed path.
        const changedPath = (0, _computechangedpath.computeChangedPath)(state.tree, mutable.patchedTree);
        if (changedPath) {
            // If the tree changed, we need to update the nextUrl
            previousNextUrl = nextUrl;
            nextUrl = changedPath;
        } else if (!nextUrl) {
            // if the tree ends up being the same (ie, no changed path), and we don't have a nextUrl, then we should use the canonicalUrl
            nextUrl = state.canonicalUrl;
        }
    // otherwise this will be a no-op and continue to use the existing nextUrl
    }
    return {
        // Set href.
        canonicalUrl: mutable.canonicalUrl ?? state.canonicalUrl,
        renderedSearch: mutable.renderedSearch ?? state.renderedSearch,
        pushRef: {
            pendingPush: isNotUndefined(mutable.pendingPush) ? mutable.pendingPush : state.pushRef.pendingPush,
            mpaNavigation: isNotUndefined(mutable.mpaNavigation) ? mutable.mpaNavigation : state.pushRef.mpaNavigation,
            preserveCustomHistoryState: isNotUndefined(mutable.preserveCustomHistoryState) ? mutable.preserveCustomHistoryState : state.pushRef.preserveCustomHistoryState
        },
        // All navigation requires scroll and focus management to trigger.
        focusAndScrollRef: {
            apply: shouldScroll ? isNotUndefined(mutable?.scrollableSegments) ? true : state.focusAndScrollRef.apply : false,
            onlyHashChange: mutable.onlyHashChange || false,
            hashFragment: shouldScroll ? mutable.hashFragment && mutable.hashFragment !== '' ? decodeURIComponent(mutable.hashFragment.slice(1)) : state.focusAndScrollRef.hashFragment : null,
            segmentPaths: shouldScroll ? mutable?.scrollableSegments ?? state.focusAndScrollRef.segmentPaths : []
        },
        // Apply cache.
        cache: mutable.cache ? mutable.cache : state.cache,
        // Apply patched router state.
        tree: isNotUndefined(mutable.patchedTree) ? mutable.patchedTree : state.tree,
        nextUrl,
        previousNextUrl: previousNextUrl,
        debugInfo: mutable.collectedDebugInfo ?? null
    };
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=handle-mutable.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/route-params.js [app-client] (ecmascript)", (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/route-params.js [app-client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/route-params.js [app-client] (ecmascript)\n- Execution of <ModuleChunkItem as EcmascriptChunkItem>::content_with_async_module_info failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/flight-data-helpers.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createInitialRSCPayloadFromFallbackPrerender: null,
    getFlightDataPartsFromPath: null,
    getNextFlightSegmentPath: null,
    normalizeFlightData: null,
    prepareFlightRouterStateForRequest: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createInitialRSCPayloadFromFallbackPrerender: function() {
        return createInitialRSCPayloadFromFallbackPrerender;
    },
    getFlightDataPartsFromPath: function() {
        return getFlightDataPartsFromPath;
    },
    getNextFlightSegmentPath: function() {
        return getNextFlightSegmentPath;
    },
    normalizeFlightData: function() {
        return normalizeFlightData;
    },
    prepareFlightRouterStateForRequest: function() {
        return prepareFlightRouterStateForRequest;
    }
});
const _segment = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/shared/lib/segment.js [app-client] (ecmascript)");
const _routeparams = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/route-params.js [app-client] (ecmascript)");
const _createhreffromurl = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
function getFlightDataPartsFromPath(flightDataPath) {
    // Pick the last 4 items from the `FlightDataPath` to get the [tree, seedData, viewport, isHeadPartial].
    const flightDataPathLength = 4;
    // tree, seedData, and head are *always* the last three items in the `FlightDataPath`.
    const [tree, seedData, head, isHeadPartial] = flightDataPath.slice(-flightDataPathLength);
    // The `FlightSegmentPath` is everything except the last three items. For a root render, it won't be present.
    const segmentPath = flightDataPath.slice(0, -flightDataPathLength);
    return {
        // TODO: Unify these two segment path helpers. We are inconsistently pushing an empty segment ("")
        // to the start of the segment path in some places which makes it hard to use solely the segment path.
        // Look for "// TODO-APP: remove ''" in the codebase.
        pathToSegment: segmentPath.slice(0, -1),
        segmentPath,
        // if the `FlightDataPath` corresponds with the root, there'll be no segment path,
        // in which case we default to ''.
        segment: segmentPath[segmentPath.length - 1] ?? '',
        tree,
        seedData,
        head,
        isHeadPartial,
        isRootRender: flightDataPath.length === flightDataPathLength
    };
}
function createInitialRSCPayloadFromFallbackPrerender(response, fallbackInitialRSCPayload) {
    // This is a static fallback page. In order to hydrate the page, we need to
    // parse the client params from the URL, but to account for the possibility
    // that the page was rewritten, we need to check the response headers
    // for x-nextjs-rewritten-path or x-nextjs-rewritten-query headers. Since
    // we can't access the headers of the initial document response, the client
    // performs a fetch request to the current location. Since it's possible that
    // the fetch request will be dynamically rewritten to a different path than
    // the initial document, this fetch request delivers _all_ the hydration data
    // for the page; it was not inlined into the document, like it normally
    // would be.
    //
    // TODO: Consider treating the case where fetch is rewritten to a different
    // path from the document as a special deopt case. We should optimistically
    // assume this won't happen, inline the data into the document, and perform
    // a minimal request (like a HEAD or range request) to verify that the
    // response matches. Tricky to get right because we need to account for
    // all the different deployment environments we support, like output:
    // "export" mode, where we currently don't assume that custom response
    // headers are present.
    // Patch the Flight data sent by the server with the correct params parsed
    // from the URL + response object.
    const renderedPathname = (0, _routeparams.getRenderedPathname)(response);
    const renderedSearch = (0, _routeparams.getRenderedSearch)(response);
    const canonicalUrl = (0, _createhreffromurl.createHrefFromUrl)(new URL(location.href));
    const originalFlightDataPath = fallbackInitialRSCPayload.f[0];
    const originalFlightRouterState = originalFlightDataPath[0];
    return {
        b: fallbackInitialRSCPayload.b,
        c: canonicalUrl.split('/'),
        q: renderedSearch,
        i: fallbackInitialRSCPayload.i,
        f: [
            [
                fillInFallbackFlightRouterState(originalFlightRouterState, renderedPathname, renderedSearch),
                originalFlightDataPath[1],
                originalFlightDataPath[2],
                originalFlightDataPath[2]
            ]
        ],
        m: fallbackInitialRSCPayload.m,
        G: fallbackInitialRSCPayload.G,
        S: fallbackInitialRSCPayload.S
    };
}
function fillInFallbackFlightRouterState(flightRouterState, renderedPathname, renderedSearch) {
    const pathnameParts = renderedPathname.split('/').filter((p)=>p !== '');
    const index = 0;
    return fillInFallbackFlightRouterStateImpl(flightRouterState, renderedSearch, pathnameParts, index);
}
function fillInFallbackFlightRouterStateImpl(flightRouterState, renderedSearch, pathnameParts, pathnamePartsIndex) {
    const originalSegment = flightRouterState[0];
    let newSegment;
    let doesAppearInURL;
    if (typeof originalSegment === 'string') {
        newSegment = originalSegment;
        doesAppearInURL = (0, _routeparams.doesStaticSegmentAppearInURL)(originalSegment);
    } else {
        const paramName = originalSegment[0];
        const paramType = originalSegment[2];
        const paramValue = (0, _routeparams.parseDynamicParamFromURLPart)(paramType, pathnameParts, pathnamePartsIndex);
        const cacheKey = (0, _routeparams.getCacheKeyForDynamicParam)(paramValue, renderedSearch);
        newSegment = [
            paramName,
            cacheKey,
            paramType
        ];
        doesAppearInURL = true;
    }
    // Only increment the index if the segment appears in the URL. If it's a
    // "virtual" segment, like a route group, it remains the same.
    const childPathnamePartsIndex = doesAppearInURL ? pathnamePartsIndex + 1 : pathnamePartsIndex;
    const children = flightRouterState[1];
    const newChildren = {};
    for(let key in children){
        const childFlightRouterState = children[key];
        newChildren[key] = fillInFallbackFlightRouterStateImpl(childFlightRouterState, renderedSearch, pathnameParts, childPathnamePartsIndex);
    }
    const newState = [
        newSegment,
        newChildren,
        null,
        flightRouterState[3],
        flightRouterState[4]
    ];
    return newState;
}
function getNextFlightSegmentPath(flightSegmentPath) {
    // Since `FlightSegmentPath` is a repeated tuple of `Segment` and `ParallelRouteKey`, we slice off two items
    // to get the next segment path.
    return flightSegmentPath.slice(2);
}
function normalizeFlightData(flightData) {
    // FlightData can be a string when the server didn't respond with a proper flight response,
    // or when a redirect happens, to signal to the client that it needs to perform an MPA navigation.
    if (typeof flightData === 'string') {
        return flightData;
    }
    return flightData.map((flightDataPath)=>getFlightDataPartsFromPath(flightDataPath));
}
function prepareFlightRouterStateForRequest(flightRouterState, isHmrRefresh) {
    // HMR requests need the complete, unmodified state for proper functionality
    if (isHmrRefresh) {
        return encodeURIComponent(JSON.stringify(flightRouterState));
    }
    return encodeURIComponent(JSON.stringify(stripClientOnlyDataFromFlightRouterState(flightRouterState)));
}
/**
 * Recursively strips client-only data from FlightRouterState while preserving
 * server-needed information for proper rendering decisions.
 */ function stripClientOnlyDataFromFlightRouterState(flightRouterState) {
    const [segment, parallelRoutes, _url, refreshMarker, isRootLayout, hasLoadingBoundary] = flightRouterState;
    // __PAGE__ segments are always fetched from the server, so there's
    // no need to send them up
    const cleanedSegment = stripSearchParamsFromPageSegment(segment);
    // Recursively process parallel routes
    const cleanedParallelRoutes = {};
    for (const [key, childState] of Object.entries(parallelRoutes)){
        cleanedParallelRoutes[key] = stripClientOnlyDataFromFlightRouterState(childState);
    }
    const result = [
        cleanedSegment,
        cleanedParallelRoutes,
        null,
        shouldPreserveRefreshMarker(refreshMarker) ? refreshMarker : null
    ];
    // Append optional fields if present
    if (isRootLayout !== undefined) {
        result[4] = isRootLayout;
    }
    if (hasLoadingBoundary !== undefined) {
        result[5] = hasLoadingBoundary;
    }
    return result;
}
/**
 * Strips search parameters from __PAGE__ segments to prevent sensitive
 * client-side data from being sent to the server.
 */ function stripSearchParamsFromPageSegment(segment) {
    if (typeof segment === 'string' && segment.startsWith(_segment.PAGE_SEGMENT_KEY + '?')) {
        return _segment.PAGE_SEGMENT_KEY;
    }
    return segment;
}
/**
 * Determines whether the refresh marker should be sent to the server
 * Client-only markers like 'refresh' are stripped, while server-needed markers
 * like 'refetch' and 'inside-shared-layout' are preserved.
 */ function shouldPreserveRefreshMarker(refreshMarker) {
    return Boolean(refreshMarker && refreshMarker !== 'refresh');
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=flight-data-helpers.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/app-build-id.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This gets assigned as a side-effect during app initialization. Because it
// represents the build used to create the JS bundle, it should never change
// after being set, so we store it in a global variable.
//
// When performing RSC requests, if the incoming data has a different build ID,
// we perform an MPA navigation/refresh to load the updated build and ensure
// that the client and server in sync.
// Starts as an empty string. In practice, because setAppBuildId is called
// during initialization before hydration starts, this will always get
// reassigned to the actual build ID before it's ever needed by a navigation.
// If for some reasons it didn't, due to a bug or race condition, then on
// navigation the build comparision would fail and trigger an MPA navigation.
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getAppBuildId: null,
    setAppBuildId: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getAppBuildId: function() {
        return getAppBuildId;
    },
    setAppBuildId: function() {
        return setAppBuildId;
    }
});
let globalBuildId = '';
function setAppBuildId(buildId) {
    globalBuildId = buildId;
}
function getAppBuildId() {
    return globalBuildId;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-build-id.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/set-cache-busting-search-param.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    setCacheBustingSearchParam: null,
    setCacheBustingSearchParamWithHash: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    setCacheBustingSearchParam: function() {
        return setCacheBustingSearchParam;
    },
    setCacheBustingSearchParamWithHash: function() {
        return setCacheBustingSearchParamWithHash;
    }
});
const _cachebustingsearchparam = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/shared/lib/router/utils/cache-busting-search-param.js [app-client] (ecmascript)");
const _approuterheaders = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/app-router-headers.js [app-client] (ecmascript)");
const setCacheBustingSearchParam = (url, headers)=>{
    const uniqueCacheKey = (0, _cachebustingsearchparam.computeCacheBustingSearchParam)(headers[_approuterheaders.NEXT_ROUTER_PREFETCH_HEADER], headers[_approuterheaders.NEXT_ROUTER_SEGMENT_PREFETCH_HEADER], headers[_approuterheaders.NEXT_ROUTER_STATE_TREE_HEADER], headers[_approuterheaders.NEXT_URL]);
    setCacheBustingSearchParamWithHash(url, uniqueCacheKey);
};
const setCacheBustingSearchParamWithHash = (url, hash)=>{
    /**
   * Note that we intentionally do not use `url.searchParams.set` here:
   *
   * const url = new URL('https://example.com/search?q=custom%20spacing');
   * url.searchParams.set('_rsc', 'abc123');
   * console.log(url.toString()); // Outputs: https://example.com/search?q=custom+spacing&_rsc=abc123
   *                                                                             ^ <--- this is causing confusion
   * This is in fact intended based on https://url.spec.whatwg.org/#interface-urlsearchparams, but
   * we want to preserve the %20 as %20 if that's what the user passed in, hence the custom
   * logic below.
   */ const existingSearch = url.search;
    const rawQuery = existingSearch.startsWith('?') ? existingSearch.slice(1) : existingSearch;
    // Always remove any existing cache busting param and add a fresh one to ensure
    // we have the correct value based on current request headers
    const pairs = rawQuery.split('&').filter((pair)=>pair && !pair.startsWith(`${_approuterheaders.NEXT_RSC_UNION_QUERY}=`));
    if (hash.length > 0) {
        pairs.push(`${_approuterheaders.NEXT_RSC_UNION_QUERY}=${hash}`);
    } else {
        pairs.push(`${_approuterheaders.NEXT_RSC_UNION_QUERY}`);
    }
    url.search = pairs.length ? `?${pairs.join('&')}` : '';
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=set-cache-busting-search-param.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js [app-client] (ecmascript)", (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js [app-client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js [app-client] (ecmascript)\n- Execution of <ModuleChunkItem as EcmascriptChunkItem>::content_with_async_module_info failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRouterCacheKey", {
    enumerable: true,
    get: function() {
        return createRouterCacheKey;
    }
});
const _segment = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/shared/lib/segment.js [app-client] (ecmascript)");
function createRouterCacheKey(segment, withoutSearchParameters = false) {
    // if the segment is an array, it means it's a dynamic segment
    // for example, ['lang', 'en', 'd']. We need to convert it to a string to store it as a cache node key.
    if (Array.isArray(segment)) {
        return `${segment[0]}|${segment[1]}|${segment[2]}`;
    }
    // Page segments might have search parameters, ie __PAGE__?foo=bar
    // When `withoutSearchParameters` is true, we only want to return the page segment
    if (withoutSearchParameters && segment.startsWith(_segment.PAGE_SEGMENT_KEY)) {
        return _segment.PAGE_SEGMENT_KEY;
    }
    return segment;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-router-cache-key.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/is-navigating-to-new-root-layout.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isNavigatingToNewRootLayout", {
    enumerable: true,
    get: function() {
        return isNavigatingToNewRootLayout;
    }
});
function isNavigatingToNewRootLayout(currentTree, nextTree) {
    // Compare segments
    const currentTreeSegment = currentTree[0];
    const nextTreeSegment = nextTree[0];
    // If any segment is different before we find the root layout, the root layout has changed.
    // E.g. /same/(group1)/layout.js -> /same/(group2)/layout.js
    // First segment is 'same' for both, keep looking. (group1) changed to (group2) before the root layout was found, it must have changed.
    if (Array.isArray(currentTreeSegment) && Array.isArray(nextTreeSegment)) {
        // Compare dynamic param name and type but ignore the value, different values would not affect the current root layout
        // /[name] - /slug1 and /slug2, both values (slug1 & slug2) still has the same layout /[name]/layout.js
        if (currentTreeSegment[0] !== nextTreeSegment[0] || currentTreeSegment[2] !== nextTreeSegment[2]) {
            return true;
        }
    } else if (currentTreeSegment !== nextTreeSegment) {
        return true;
    }
    // Current tree root layout found
    if (currentTree[4]) {
        // If the next tree doesn't have the root layout flag, it must have changed.
        return !nextTree[4];
    }
    // Current tree didn't have its root layout here, must have changed.
    if (nextTree[4]) {
        return true;
    }
    // We can't assume it's `parallelRoutes.children` here in case the root layout is `app/@something/layout.js`
    // But it's not possible to be more than one parallelRoutes before the root layout is found
    // TODO-APP: change to traverse all parallel routes
    const currentTreeChild = Object.values(currentTree[1])[0];
    const nextTreeChild = Object.values(nextTree[1])[0];
    if (!currentTreeChild || !nextTreeChild) return true;
    return isNavigatingToNewRootLayout(currentTreeChild, nextTreeChild);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=is-navigating-to-new-root-layout.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/ppr-navigations.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    abortTask: null,
    listenForDynamicRequest: null,
    startPPRNavigation: null,
    updateCacheNodeOnPopstateRestoration: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    abortTask: function() {
        return abortTask;
    },
    listenForDynamicRequest: function() {
        return listenForDynamicRequest;
    },
    startPPRNavigation: function() {
        return startPPRNavigation;
    },
    updateCacheNodeOnPopstateRestoration: function() {
        return updateCacheNodeOnPopstateRestoration;
    }
});
const _segment = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/shared/lib/segment.js [app-client] (ecmascript)");
const _matchsegments = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/match-segments.js [app-client] (ecmascript)");
const _createhreffromurl = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
const _createroutercachekey = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js [app-client] (ecmascript)");
const _isnavigatingtonewrootlayout = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/is-navigating-to-new-root-layout.js [app-client] (ecmascript)");
const _navigatereducer = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/reducers/navigate-reducer.js [app-client] (ecmascript)");
const MPA_NAVIGATION_TASK = {
    route: null,
    node: null,
    dynamicRequestTree: null,
    children: null
};
function startPPRNavigation(navigatedAt, oldUrl, oldCacheNode, oldRouterState, newRouterState, prefetchData, prefetchHead, isPrefetchHeadPartial, isSamePageNavigation, scrollableSegmentsResult) {
    const segmentPath = [];
    return updateCacheNodeOnNavigation(navigatedAt, oldUrl, oldCacheNode, oldRouterState, newRouterState, false, prefetchData, prefetchHead, isPrefetchHeadPartial, isSamePageNavigation, segmentPath, scrollableSegmentsResult);
}
function updateCacheNodeOnNavigation(navigatedAt, oldUrl, oldCacheNode, oldRouterState, newRouterState, didFindRootLayout, prefetchData, prefetchHead, isPrefetchHeadPartial, isSamePageNavigation, segmentPath, scrollableSegmentsResult) {
    // Diff the old and new trees to reuse the shared layouts.
    const oldRouterStateChildren = oldRouterState[1];
    const newRouterStateChildren = newRouterState[1];
    const prefetchDataChildren = prefetchData !== null ? prefetchData[1] : null;
    if (!didFindRootLayout) {
        // We're currently traversing the part of the tree that was also part of
        // the previous route. If we discover a root layout, then we don't need to
        // trigger an MPA navigation. See beginRenderingNewRouteTree for context.
        const isRootLayout = newRouterState[4] === true;
        if (isRootLayout) {
            // Found a matching root layout.
            didFindRootLayout = true;
        }
    }
    const oldParallelRoutes = oldCacheNode.parallelRoutes;
    // Clone the current set of segment children, even if they aren't active in
    // the new tree.
    // TODO: We currently retain all the inactive segments indefinitely, until
    // there's an explicit refresh, or a parent layout is lazily refreshed. We
    // rely on this for popstate navigations, which update the Router State Tree
    // but do not eagerly perform a data fetch, because they expect the segment
    // data to already be in the Cache Node tree. For highly static sites that
    // are mostly read-only, this may happen only rarely, causing memory to
    // leak. We should figure out a better model for the lifetime of inactive
    // segments, so we can maintain instant back/forward navigations without
    // leaking memory indefinitely.
    const prefetchParallelRoutes = new Map(oldParallelRoutes);
    // As we diff the trees, we may sometimes modify (copy-on-write, not mutate)
    // the Route Tree that was returned by the server — for example, in the case
    // of default parallel routes, we preserve the currently active segment. To
    // avoid mutating the original tree, we clone the router state children along
    // the return path.
    let patchedRouterStateChildren = {};
    let taskChildren = null;
    // Most navigations require a request to fetch additional data from the
    // server, either because the data was not already prefetched, or because the
    // target route contains dynamic data that cannot be prefetched.
    //
    // However, if the target route is fully static, and it's already completely
    // loaded into the segment cache, then we can skip the server request.
    //
    // This starts off as `false`, and is set to `true` if any of the child
    // routes requires a dynamic request.
    let needsDynamicRequest = false;
    // As we traverse the children, we'll construct a FlightRouterState that can
    // be sent to the server to request the dynamic data. If it turns out that
    // nothing in the subtree is dynamic (i.e. needsDynamicRequest is false at the
    // end), then this will be discarded.
    // TODO: We can probably optimize the format of this data structure to only
    // include paths that are dynamic. Instead of reusing the
    // FlightRouterState type.
    let dynamicRequestTreeChildren = {};
    for(let parallelRouteKey in newRouterStateChildren){
        const newRouterStateChild = newRouterStateChildren[parallelRouteKey];
        const oldRouterStateChild = oldRouterStateChildren[parallelRouteKey];
        const oldSegmentMapChild = oldParallelRoutes.get(parallelRouteKey);
        const prefetchDataChild = prefetchDataChildren !== null ? prefetchDataChildren[parallelRouteKey] : null;
        const newSegmentChild = newRouterStateChild[0];
        const newSegmentPathChild = segmentPath.concat([
            parallelRouteKey,
            newSegmentChild
        ]);
        const newSegmentKeyChild = (0, _createroutercachekey.createRouterCacheKey)(newSegmentChild);
        const oldSegmentChild = oldRouterStateChild !== undefined ? oldRouterStateChild[0] : undefined;
        const oldCacheNodeChild = oldSegmentMapChild !== undefined ? oldSegmentMapChild.get(newSegmentKeyChild) : undefined;
        let taskChild;
        if (newSegmentChild === _segment.DEFAULT_SEGMENT_KEY) {
            // This is another kind of leaf segment — a default route.
            //
            // Default routes have special behavior. When there's no matching segment
            // for a parallel route, Next.js preserves the currently active segment
            // during a client navigation — but not for initial render. The server
            // leaves it to the client to account for this. So we need to handle
            // it here.
            if (oldRouterStateChild !== undefined) {
                // Reuse the existing Router State for this segment. We spawn a "task"
                // just to keep track of the updated router state; unlike most, it's
                // already fulfilled and won't be affected by the dynamic response.
                taskChild = reuseActiveSegmentInDefaultSlot(oldUrl, oldRouterStateChild);
            } else {
                // There's no currently active segment. Switch to the "create" path.
                taskChild = beginRenderingNewRouteTree(navigatedAt, oldRouterStateChild, newRouterStateChild, oldCacheNodeChild, didFindRootLayout, prefetchDataChild !== undefined ? prefetchDataChild : null, prefetchHead, isPrefetchHeadPartial, newSegmentPathChild, scrollableSegmentsResult);
            }
        } else if (isSamePageNavigation && // Check if this is a page segment.
        // TODO: We're not consistent about how we do this check. Some places
        // check if the segment starts with PAGE_SEGMENT_KEY, but most seem to
        // check if there any any children, which is why I'm doing it here. We
        // should probably encode an empty children set as `null` though. Either
        // way, we should update all the checks to be consistent.
        Object.keys(newRouterStateChild[1]).length === 0) {
            // We special case navigations to the exact same URL as the current
            // location. It's a common UI pattern for apps to refresh when you click a
            // link to the current page. So when this happens, we refresh the dynamic
            // data in the page segments.
            //
            // Note that this does not apply if the any part of the hash or search
            // query has changed. This might feel a bit weird but it makes more sense
            // when you consider that the way to trigger this behavior is to click
            // the same link multiple times.
            //
            // TODO: We should probably refresh the *entire* route when this case
            // occurs, not just the page segments. Essentially treating it the same as
            // a refresh() triggered by an action, which is the more explicit way of
            // modeling the UI pattern described above.
            //
            // Also note that this only refreshes the dynamic data, not static/
            // cached data. If the page segment is fully static and prefetched, the
            // request is skipped. (This is also how refresh() works.)
            taskChild = beginRenderingNewRouteTree(navigatedAt, oldRouterStateChild, newRouterStateChild, oldCacheNodeChild, didFindRootLayout, prefetchDataChild !== undefined ? prefetchDataChild : null, prefetchHead, isPrefetchHeadPartial, newSegmentPathChild, scrollableSegmentsResult);
        } else if (oldRouterStateChild !== undefined && oldSegmentChild !== undefined && (0, _matchsegments.matchSegment)(newSegmentChild, oldSegmentChild)) {
            if (oldCacheNodeChild !== undefined && oldRouterStateChild !== undefined) {
                // This segment exists in both the old and new trees. Recursively update
                // the children.
                taskChild = updateCacheNodeOnNavigation(navigatedAt, oldUrl, oldCacheNodeChild, oldRouterStateChild, newRouterStateChild, didFindRootLayout, prefetchDataChild, prefetchHead, isPrefetchHeadPartial, isSamePageNavigation, newSegmentPathChild, scrollableSegmentsResult);
            } else {
                // There's no existing Cache Node for this segment. Switch to the
                // "create" path.
                taskChild = beginRenderingNewRouteTree(navigatedAt, oldRouterStateChild, newRouterStateChild, oldCacheNodeChild, didFindRootLayout, prefetchDataChild !== undefined ? prefetchDataChild : null, prefetchHead, isPrefetchHeadPartial, newSegmentPathChild, scrollableSegmentsResult);
            }
        } else {
            // This is a new tree. Switch to the "create" path.
            taskChild = beginRenderingNewRouteTree(navigatedAt, oldRouterStateChild, newRouterStateChild, oldCacheNodeChild, didFindRootLayout, prefetchDataChild !== undefined ? prefetchDataChild : null, prefetchHead, isPrefetchHeadPartial, newSegmentPathChild, scrollableSegmentsResult);
        }
        if (taskChild !== null) {
            // Recursively propagate up the child tasks.
            if (taskChild.route === null) {
                // One of the child tasks discovered a change to the root layout.
                // Immediately unwind from this recursive traversal.
                return MPA_NAVIGATION_TASK;
            }
            if (taskChildren === null) {
                taskChildren = new Map();
            }
            taskChildren.set(parallelRouteKey, taskChild);
            const newCacheNodeChild = taskChild.node;
            if (newCacheNodeChild !== null) {
                const newSegmentMapChild = new Map(oldSegmentMapChild);
                newSegmentMapChild.set(newSegmentKeyChild, newCacheNodeChild);
                prefetchParallelRoutes.set(parallelRouteKey, newSegmentMapChild);
            }
            // The child tree's route state may be different from the prefetched
            // route sent by the server. We need to clone it as we traverse back up
            // the tree.
            const taskChildRoute = taskChild.route;
            patchedRouterStateChildren[parallelRouteKey] = taskChildRoute;
            const dynamicRequestTreeChild = taskChild.dynamicRequestTree;
            if (dynamicRequestTreeChild !== null) {
                // Something in the child tree is dynamic.
                needsDynamicRequest = true;
                dynamicRequestTreeChildren[parallelRouteKey] = dynamicRequestTreeChild;
            } else {
                dynamicRequestTreeChildren[parallelRouteKey] = taskChildRoute;
            }
        } else {
            // The child didn't change. We can use the prefetched router state.
            patchedRouterStateChildren[parallelRouteKey] = newRouterStateChild;
            dynamicRequestTreeChildren[parallelRouteKey] = newRouterStateChild;
        }
    }
    if (taskChildren === null) {
        // No new tasks were spawned.
        return null;
    }
    const newCacheNode = {
        lazyData: null,
        rsc: oldCacheNode.rsc,
        // We intentionally aren't updating the prefetchRsc field, since this node
        // is already part of the current tree, because it would be weird for
        // prefetch data to be newer than the final data. It probably won't ever be
        // observable anyway, but it could happen if the segment is unmounted then
        // mounted again, because LayoutRouter will momentarily switch to rendering
        // prefetchRsc, via useDeferredValue.
        prefetchRsc: oldCacheNode.prefetchRsc,
        head: oldCacheNode.head,
        prefetchHead: oldCacheNode.prefetchHead,
        loading: oldCacheNode.loading,
        // Everything is cloned except for the children, which we computed above.
        parallelRoutes: prefetchParallelRoutes,
        navigatedAt
    };
    return {
        // Return a cloned copy of the router state with updated children.
        route: patchRouterStateWithNewChildren(newRouterState, patchedRouterStateChildren),
        node: newCacheNode,
        dynamicRequestTree: needsDynamicRequest ? patchRouterStateWithNewChildren(newRouterState, dynamicRequestTreeChildren) : null,
        children: taskChildren
    };
}
function beginRenderingNewRouteTree(navigatedAt, oldRouterState, newRouterState, existingCacheNode, didFindRootLayout, prefetchData, possiblyPartialPrefetchHead, isPrefetchHeadPartial, segmentPath, scrollableSegmentsResult) {
    if (!didFindRootLayout) {
        // The route tree changed before we reached a layout. (The highest-level
        // layout in a route tree is referred to as the "root" layout.) This could
        // mean that we're navigating between two different root layouts. When this
        // happens, we perform a full-page (MPA-style) navigation.
        //
        // However, the algorithm for deciding where to start rendering a route
        // (i.e. the one performed in order to reach this function) is stricter
        // than the one used to detect a change in the root layout. So just because
        // we're re-rendering a segment outside of the root layout does not mean we
        // should trigger a full-page navigation.
        //
        // Specifically, we handle dynamic parameters differently: two segments are
        // considered the same even if their parameter values are different.
        //
        // Refer to isNavigatingToNewRootLayout for details.
        //
        // Note that we only have to perform this extra traversal if we didn't
        // already discover a root layout in the part of the tree that is unchanged.
        // In the common case, this branch is skipped completely.
        if (oldRouterState === undefined || (0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(oldRouterState, newRouterState)) {
            // The root layout changed. Perform a full-page navigation.
            return MPA_NAVIGATION_TASK;
        }
    }
    return createCacheNodeOnNavigation(navigatedAt, newRouterState, existingCacheNode, prefetchData, possiblyPartialPrefetchHead, isPrefetchHeadPartial, segmentPath, scrollableSegmentsResult);
}
function createCacheNodeOnNavigation(navigatedAt, routerState, existingCacheNode, prefetchData, possiblyPartialPrefetchHead, isPrefetchHeadPartial, segmentPath, scrollableSegmentsResult) {
    // Same traversal as updateCacheNodeNavigation, but we switch to this path
    // once we reach the part of the tree that was not in the previous route. We
    // don't need to diff against the old tree, we just need to create a new one.
    // The head is assigned to every leaf segment delivered by the server. Based
    // on corresponding logic in fill-lazy-items-till-leaf-with-head.ts
    const routerStateChildren = routerState[1];
    const isLeafSegment = Object.keys(routerStateChildren).length === 0;
    // Even we're rendering inside the "new" part of the target tree, we may have
    // a locally cached segment that we can reuse. This may come from either 1)
    // the CacheNode tree, which lives in React state and is populated by previous
    // navigations; or 2) the prefetch cache, which is a separate cache that is
    // populated by prefetches.
    let rsc;
    let loading;
    let head;
    let cacheNodeNavigatedAt;
    if (existingCacheNode !== undefined && // DYNAMIC_STALETIME_MS defaults to 0, but it can be increased using
    // the experimental.staleTimes.dynamic config. When set, we'll avoid
    // refetching dynamic data if it was fetched within the given threshold.
    existingCacheNode.navigatedAt + _navigatereducer.DYNAMIC_STALETIME_MS > navigatedAt) {
        // We have an existing CacheNode for this segment, and it's not stale. We
        // should reuse it rather than request a new one.
        rsc = existingCacheNode.rsc;
        loading = existingCacheNode.loading;
        head = existingCacheNode.head;
        // Don't update the navigatedAt timestamp, since we're reusing stale data.
        cacheNodeNavigatedAt = existingCacheNode.navigatedAt;
    } else if (prefetchData !== null) {
        // There's no existing CacheNode for this segment, but we do have prefetch
        // data. If the prefetch data is fully static (i.e. does not contain any
        // dynamic holes), we don't need to request it from the server.
        rsc = prefetchData[0];
        loading = prefetchData[2];
        head = isLeafSegment ? possiblyPartialPrefetchHead : null;
        // Even though we're accessing the data from the prefetch cache, this is
        // conceptually a new segment, not a reused one. So we should update the
        // navigatedAt timestamp.
        cacheNodeNavigatedAt = navigatedAt;
        const isPrefetchRscPartial = prefetchData[3];
        if (isPrefetchRscPartial || // Check if the head is partial (only relevant if this is a leaf segment)
        isPrefetchHeadPartial && isLeafSegment) {
            // We only have partial data from this segment. Like missing segments, we
            // must request the full data from the server.
            return spawnPendingTask(navigatedAt, routerState, prefetchData, possiblyPartialPrefetchHead, isPrefetchHeadPartial, segmentPath, scrollableSegmentsResult);
        } else {
        // The prefetch data is fully static, so we can omit it from the
        // navigation request.
        }
    } else {
        // There's no prefetch for this segment. Everything from this point will be
        // requested from the server, even if there are static children below it.
        // Create a terminal task node that will later be fulfilled by
        // server response.
        return spawnPendingTask(navigatedAt, routerState, null, possiblyPartialPrefetchHead, isPrefetchHeadPartial, segmentPath, scrollableSegmentsResult);
    }
    // We already have a full segment we can render, so we don't need to request a
    // new one from the server. Keep traversing down the tree until we reach
    // something that requires a dynamic request.
    const prefetchDataChildren = prefetchData !== null ? prefetchData[1] : null;
    const taskChildren = new Map();
    const existingCacheNodeChildren = existingCacheNode !== undefined ? existingCacheNode.parallelRoutes : null;
    const cacheNodeChildren = new Map(existingCacheNodeChildren);
    let dynamicRequestTreeChildren = {};
    let needsDynamicRequest = false;
    if (isLeafSegment) {
        // The segment path of every leaf segment (i.e. page) is collected into
        // a result array. This is used by the LayoutRouter to scroll to ensure that
        // new pages are visible after a navigation.
        // TODO: We should use a string to represent the segment path instead of
        // an array. We already use a string representation for the path when
        // accessing the Segment Cache, so we can use the same one.
        scrollableSegmentsResult.push(segmentPath);
    } else {
        for(let parallelRouteKey in routerStateChildren){
            const routerStateChild = routerStateChildren[parallelRouteKey];
            const prefetchDataChild = prefetchDataChildren !== null ? prefetchDataChildren[parallelRouteKey] : null;
            const existingSegmentMapChild = existingCacheNodeChildren !== null ? existingCacheNodeChildren.get(parallelRouteKey) : undefined;
            const segmentChild = routerStateChild[0];
            const segmentPathChild = segmentPath.concat([
                parallelRouteKey,
                segmentChild
            ]);
            const segmentKeyChild = (0, _createroutercachekey.createRouterCacheKey)(segmentChild);
            const existingCacheNodeChild = existingSegmentMapChild !== undefined ? existingSegmentMapChild.get(segmentKeyChild) : undefined;
            const taskChild = createCacheNodeOnNavigation(navigatedAt, routerStateChild, existingCacheNodeChild, prefetchDataChild, possiblyPartialPrefetchHead, isPrefetchHeadPartial, segmentPathChild, scrollableSegmentsResult);
            taskChildren.set(parallelRouteKey, taskChild);
            const dynamicRequestTreeChild = taskChild.dynamicRequestTree;
            if (dynamicRequestTreeChild !== null) {
                // Something in the child tree is dynamic.
                needsDynamicRequest = true;
                dynamicRequestTreeChildren[parallelRouteKey] = dynamicRequestTreeChild;
            } else {
                dynamicRequestTreeChildren[parallelRouteKey] = routerStateChild;
            }
            const newCacheNodeChild = taskChild.node;
            if (newCacheNodeChild !== null) {
                const newSegmentMapChild = new Map();
                newSegmentMapChild.set(segmentKeyChild, newCacheNodeChild);
                cacheNodeChildren.set(parallelRouteKey, newSegmentMapChild);
            }
        }
    }
    return {
        // Since we're inside a new route tree, unlike the
        // `updateCacheNodeOnNavigation` path, the router state on the children
        // tasks is always the same as the router state we pass in. So we don't need
        // to clone/modify it.
        route: routerState,
        node: {
            lazyData: null,
            // Since this segment is already full, we don't need to use the
            // `prefetchRsc` field.
            rsc,
            prefetchRsc: null,
            head,
            prefetchHead: null,
            loading,
            parallelRoutes: cacheNodeChildren,
            navigatedAt: cacheNodeNavigatedAt
        },
        dynamicRequestTree: needsDynamicRequest ? patchRouterStateWithNewChildren(routerState, dynamicRequestTreeChildren) : null,
        children: taskChildren
    };
}
function patchRouterStateWithNewChildren(baseRouterState, newChildren) {
    const clone = [
        baseRouterState[0],
        newChildren
    ];
    // Based on equivalent logic in apply-router-state-patch-to-tree, but should
    // confirm whether we need to copy all of these fields. Not sure the server
    // ever sends, e.g. the refetch marker.
    if (2 in baseRouterState) {
        clone[2] = baseRouterState[2];
    }
    if (3 in baseRouterState) {
        clone[3] = baseRouterState[3];
    }
    if (4 in baseRouterState) {
        clone[4] = baseRouterState[4];
    }
    return clone;
}
function spawnPendingTask(navigatedAt, routerState, prefetchData, prefetchHead, isPrefetchHeadPartial, segmentPath, scrollableSegmentsResult) {
    // Create a task that will later be fulfilled by data from the server.
    // Clone the prefetched route tree and the `refetch` marker to it. We'll send
    // this to the server so it knows where to start rendering.
    const dynamicRequestTree = patchRouterStateWithNewChildren(routerState, routerState[1]);
    dynamicRequestTree[3] = 'refetch';
    const newTask = {
        route: routerState,
        // Corresponds to the part of the route that will be rendered on the server.
        node: createPendingCacheNode(navigatedAt, routerState, prefetchData, prefetchHead, isPrefetchHeadPartial, segmentPath, scrollableSegmentsResult),
        // Because this is non-null, and it gets propagated up through the parent
        // tasks, the root task will know that it needs to perform a server request.
        dynamicRequestTree,
        children: null
    };
    return newTask;
}
function reuseActiveSegmentInDefaultSlot(oldUrl, oldRouterState) {
    // This is a "default" segment. These are never sent by the server during a
    // soft navigation; instead, the client reuses whatever segment was already
    // active in that slot on the previous route. This means if we later need to
    // refresh the segment, it will have to be refetched from the previous route's
    // URL. We store it in the Flight Router State.
    //
    // TODO: We also mark the segment with a "refresh" marker but I think we can
    // get rid of that eventually by making sure we only add URLs to page segments
    // that are reused. Then the presence of the URL alone is enough.
    let reusedRouterState;
    const oldRefreshMarker = oldRouterState[3];
    if (oldRefreshMarker === 'refresh') {
        // This segment was already reused from an even older route. Keep its
        // existing URL and refresh marker.
        reusedRouterState = oldRouterState;
    } else {
        // This segment was not previously reused, and it's not on the new route.
        // So it must have been delivered in the old route.
        reusedRouterState = patchRouterStateWithNewChildren(oldRouterState, oldRouterState[1]);
        reusedRouterState[2] = (0, _createhreffromurl.createHrefFromUrl)(oldUrl);
        reusedRouterState[3] = 'refresh';
    }
    return {
        route: reusedRouterState,
        node: null,
        dynamicRequestTree: null,
        children: null
    };
}
function listenForDynamicRequest(task, responsePromise) {
    responsePromise.then((result)=>{
        if (typeof result === 'string') {
            // Happens when navigating to page in `pages` from `app`. We shouldn't
            // get here because should have already handled this during
            // the prefetch.
            return;
        }
        const { flightData, debugInfo } = result;
        for (const normalizedFlightData of flightData){
            const { segmentPath, tree: serverRouterState, seedData: dynamicData, head: dynamicHead } = normalizedFlightData;
            if (!dynamicData) {
                continue;
            }
            writeDynamicDataIntoPendingTask(task, segmentPath, serverRouterState, dynamicData, dynamicHead, debugInfo);
        }
        // Now that we've exhausted all the data we received from the server, if
        // there are any remaining pending tasks in the tree, abort them now.
        // If there's any missing data, it will trigger a lazy fetch.
        abortTask(task, null, debugInfo);
    }, (error)=>{
        // This will trigger an error during render
        abortTask(task, error, null);
    });
}
function writeDynamicDataIntoPendingTask(rootTask, segmentPath, serverRouterState, dynamicData, dynamicHead, debugInfo) {
    // The data sent by the server represents only a subtree of the app. We need
    // to find the part of the task tree that matches the server response, and
    // fulfill it using the dynamic data.
    //
    // segmentPath represents the parent path of subtree. It's a repeating pattern
    // of parallel route key and segment:
    //
    //   [string, Segment, string, Segment, string, Segment, ...]
    //
    // Iterate through the path and finish any tasks that match this payload.
    let task = rootTask;
    for(let i = 0; i < segmentPath.length; i += 2){
        const parallelRouteKey = segmentPath[i];
        const segment = segmentPath[i + 1];
        const taskChildren = task.children;
        if (taskChildren !== null) {
            const taskChild = taskChildren.get(parallelRouteKey);
            if (taskChild !== undefined) {
                const taskSegment = taskChild.route[0];
                if ((0, _matchsegments.matchSegment)(segment, taskSegment)) {
                    // Found a match for this task. Keep traversing down the task tree.
                    task = taskChild;
                    continue;
                }
            }
        }
        // We didn't find a child task that matches the server data. Exit. We won't
        // abort the task, though, because a different FlightDataPath may be able to
        // fulfill it (see loop in listenForDynamicRequest). We only abort tasks
        // once we've run out of data.
        return;
    }
    finishTaskUsingDynamicDataPayload(task, serverRouterState, dynamicData, dynamicHead, debugInfo);
}
function finishTaskUsingDynamicDataPayload(task, serverRouterState, dynamicData, dynamicHead, debugInfo) {
    if (task.dynamicRequestTree === null) {
        // Everything in this subtree is already complete. Bail out.
        return;
    }
    // dynamicData may represent a larger subtree than the task. Before we can
    // finish the task, we need to line them up.
    const taskChildren = task.children;
    const taskNode = task.node;
    if (taskChildren === null) {
        // We've reached the leaf node of the pending task. The server data tree
        // lines up the pending Cache Node tree. We can now switch to the
        // normal algorithm.
        if (taskNode !== null) {
            finishPendingCacheNode(taskNode, task.route, serverRouterState, dynamicData, dynamicHead, debugInfo);
            // Set this to null to indicate that this task is now complete.
            task.dynamicRequestTree = null;
        }
        return;
    }
    // The server returned more data than we need to finish the task. Skip over
    // the extra segments until we reach the leaf task node.
    const serverChildren = serverRouterState[1];
    const dynamicDataChildren = dynamicData[1];
    for(const parallelRouteKey in serverRouterState){
        const serverRouterStateChild = serverChildren[parallelRouteKey];
        const dynamicDataChild = dynamicDataChildren[parallelRouteKey];
        const taskChild = taskChildren.get(parallelRouteKey);
        if (taskChild !== undefined) {
            const taskSegment = taskChild.route[0];
            if ((0, _matchsegments.matchSegment)(serverRouterStateChild[0], taskSegment) && dynamicDataChild !== null && dynamicDataChild !== undefined) {
                // Found a match for this task. Keep traversing down the task tree.
                return finishTaskUsingDynamicDataPayload(taskChild, serverRouterStateChild, dynamicDataChild, dynamicHead, debugInfo);
            }
        }
    // We didn't find a child task that matches the server data. We won't abort
    // the task, though, because a different FlightDataPath may be able to
    // fulfill it (see loop in listenForDynamicRequest). We only abort tasks
    // once we've run out of data.
    }
}
function createPendingCacheNode(navigatedAt, routerState, prefetchData, prefetchHead, isPrefetchHeadPartial, segmentPath, scrollableSegmentsResult) {
    const routerStateChildren = routerState[1];
    const prefetchDataChildren = prefetchData !== null ? prefetchData[1] : null;
    const parallelRoutes = new Map();
    for(let parallelRouteKey in routerStateChildren){
        const routerStateChild = routerStateChildren[parallelRouteKey];
        const prefetchDataChild = prefetchDataChildren !== null ? prefetchDataChildren[parallelRouteKey] : null;
        const segmentChild = routerStateChild[0];
        const segmentPathChild = segmentPath.concat([
            parallelRouteKey,
            segmentChild
        ]);
        const segmentKeyChild = (0, _createroutercachekey.createRouterCacheKey)(segmentChild);
        const newCacheNodeChild = createPendingCacheNode(navigatedAt, routerStateChild, prefetchDataChild === undefined ? null : prefetchDataChild, prefetchHead, isPrefetchHeadPartial, segmentPathChild, scrollableSegmentsResult);
        const newSegmentMapChild = new Map();
        newSegmentMapChild.set(segmentKeyChild, newCacheNodeChild);
        parallelRoutes.set(parallelRouteKey, newSegmentMapChild);
    }
    // The head is assigned to every leaf segment delivered by the server. Based
    // on corresponding logic in fill-lazy-items-till-leaf-with-head.ts
    const isLeafSegment = parallelRoutes.size === 0;
    if (isLeafSegment) {
        // The segment path of every leaf segment (i.e. page) is collected into
        // a result array. This is used by the LayoutRouter to scroll to ensure that
        // new pages are visible after a navigation.
        // TODO: We should use a string to represent the segment path instead of
        // an array. We already use a string representation for the path when
        // accessing the Segment Cache, so we can use the same one.
        scrollableSegmentsResult.push(segmentPath);
    }
    const maybePrefetchRsc = prefetchData !== null ? prefetchData[0] : null;
    return {
        lazyData: null,
        parallelRoutes: parallelRoutes,
        prefetchRsc: maybePrefetchRsc !== undefined ? maybePrefetchRsc : null,
        prefetchHead: isLeafSegment ? prefetchHead : [
            null,
            null
        ],
        // Create a deferred promise. This will be fulfilled once the dynamic
        // response is received from the server.
        rsc: createDeferredRsc(),
        head: isLeafSegment ? createDeferredRsc() : null,
        // TODO: Technically, a loading boundary could contain dynamic data. We must
        // have separate `loading` and `prefetchLoading` fields to handle this, like
        // we do for the segment data and head.
        loading: prefetchData !== null ? prefetchData[2] ?? null : createDeferredRsc(),
        navigatedAt
    };
}
function finishPendingCacheNode(cacheNode, taskState, serverState, dynamicData, dynamicHead, debugInfo) {
    // Writes a dynamic response into an existing Cache Node tree. This does _not_
    // create a new tree, it updates the existing tree in-place. So it must follow
    // the Suspense rules of cache safety — it can resolve pending promises, but
    // it cannot overwrite existing data. It can add segments to the tree (because
    // a missing segment will cause the layout router to suspend).
    // but it cannot delete them.
    //
    // We must resolve every promise in the tree, or else it will suspend
    // indefinitely. If we did not receive data for a segment, we will resolve its
    // data promise to `null` to trigger a lazy fetch during render.
    const taskStateChildren = taskState[1];
    const serverStateChildren = serverState[1];
    const dataChildren = dynamicData[1];
    // The router state that we traverse the tree with (taskState) is the same one
    // that we used to construct the pending Cache Node tree. That way we're sure
    // to resolve all the pending promises.
    const parallelRoutes = cacheNode.parallelRoutes;
    for(let parallelRouteKey in taskStateChildren){
        const taskStateChild = taskStateChildren[parallelRouteKey];
        const serverStateChild = serverStateChildren[parallelRouteKey];
        const dataChild = dataChildren[parallelRouteKey];
        const segmentMapChild = parallelRoutes.get(parallelRouteKey);
        const taskSegmentChild = taskStateChild[0];
        const taskSegmentKeyChild = (0, _createroutercachekey.createRouterCacheKey)(taskSegmentChild);
        const cacheNodeChild = segmentMapChild !== undefined ? segmentMapChild.get(taskSegmentKeyChild) : undefined;
        if (cacheNodeChild !== undefined) {
            if (serverStateChild !== undefined && (0, _matchsegments.matchSegment)(taskSegmentChild, serverStateChild[0])) {
                if (dataChild !== undefined && dataChild !== null) {
                    // This is the happy path. Recursively update all the children.
                    finishPendingCacheNode(cacheNodeChild, taskStateChild, serverStateChild, dataChild, dynamicHead, debugInfo);
                } else {
                    // The server never returned data for this segment. Trigger a lazy
                    // fetch during render. This shouldn't happen because the Route Tree
                    // and the Seed Data tree sent by the server should always be the same
                    // shape when part of the same server response.
                    abortPendingCacheNode(taskStateChild, cacheNodeChild, null, debugInfo);
                }
            } else {
                // The server never returned data for this segment. Trigger a lazy
                // fetch during render.
                abortPendingCacheNode(taskStateChild, cacheNodeChild, null, debugInfo);
            }
        } else {
        // The server response matches what was expected to receive, but there's
        // no matching Cache Node in the task tree. This is a bug in the
        // implementation because we should have created a node for every
        // segment in the tree that's associated with this task.
        }
    }
    // Use the dynamic data from the server to fulfill the deferred RSC promise
    // on the Cache Node.
    const rsc = cacheNode.rsc;
    const dynamicSegmentData = dynamicData[0];
    if (rsc === null) {
        // This is a lazy cache node. We can overwrite it. This is only safe
        // because we know that the LayoutRouter suspends if `rsc` is `null`.
        cacheNode.rsc = dynamicSegmentData;
    } else if (isDeferredRsc(rsc)) {
        // This is a deferred RSC promise. We can fulfill it with the data we just
        // received from the server. If it was already resolved by a different
        // navigation, then this does nothing because we can't overwrite data.
        rsc.resolve(dynamicSegmentData, debugInfo);
    } else {
    // This is not a deferred RSC promise, nor is it empty, so it must have
    // been populated by a different navigation. We must not overwrite it.
    }
    // If we navigated without a prefetch, then `loading` will be a deferred promise too.
    // Fulfill it using the dynamic response so that we can display the loading boundary.
    const loading = cacheNode.loading;
    if (isDeferredRsc(loading)) {
        const dynamicLoading = dynamicData[2];
        loading.resolve(dynamicLoading, debugInfo);
    }
    // Check if this is a leaf segment. If so, it will have a `head` property with
    // a pending promise that needs to be resolved with the dynamic head from
    // the server.
    const head = cacheNode.head;
    if (isDeferredRsc(head)) {
        head.resolve(dynamicHead, debugInfo);
    }
}
function abortTask(task, error, debugInfo) {
    const cacheNode = task.node;
    if (cacheNode === null) {
        // This indicates the task is already complete.
        return;
    }
    const taskChildren = task.children;
    if (taskChildren === null) {
        // Reached the leaf task node. This is the root of a pending cache
        // node tree.
        abortPendingCacheNode(task.route, cacheNode, error, debugInfo);
    } else {
        // This is an intermediate task node. Keep traversing until we reach a
        // task node with no children. That will be the root of the cache node tree
        // that needs to be resolved.
        for (const taskChild of taskChildren.values()){
            abortTask(taskChild, error, debugInfo);
        }
    }
    // Set this to null to indicate that this task is now complete.
    task.dynamicRequestTree = null;
}
function abortPendingCacheNode(routerState, cacheNode, error, debugInfo) {
    // For every pending segment in the tree, resolve its `rsc` promise to `null`
    // to trigger a lazy fetch during render.
    //
    // Or, if an error object is provided, it will error instead.
    const routerStateChildren = routerState[1];
    const parallelRoutes = cacheNode.parallelRoutes;
    for(let parallelRouteKey in routerStateChildren){
        const routerStateChild = routerStateChildren[parallelRouteKey];
        const segmentMapChild = parallelRoutes.get(parallelRouteKey);
        if (segmentMapChild === undefined) {
            continue;
        }
        const segmentChild = routerStateChild[0];
        const segmentKeyChild = (0, _createroutercachekey.createRouterCacheKey)(segmentChild);
        const cacheNodeChild = segmentMapChild.get(segmentKeyChild);
        if (cacheNodeChild !== undefined) {
            abortPendingCacheNode(routerStateChild, cacheNodeChild, error, debugInfo);
        } else {
        // This shouldn't happen because we're traversing the same tree that was
        // used to construct the cache nodes in the first place.
        }
    }
    const rsc = cacheNode.rsc;
    if (isDeferredRsc(rsc)) {
        if (error === null) {
            // This will trigger a lazy fetch during render.
            rsc.resolve(null, debugInfo);
        } else {
            // This will trigger an error during rendering.
            rsc.reject(error, debugInfo);
        }
    }
    const loading = cacheNode.loading;
    if (isDeferredRsc(loading)) {
        loading.resolve(null, debugInfo);
    }
    // Check if this is a leaf segment. If so, it will have a `head` property with
    // a pending promise that needs to be resolved. If an error was provided, we
    // will not resolve it with an error, since this is rendered at the root of
    // the app. We want the segment to error, not the entire app.
    const head = cacheNode.head;
    if (isDeferredRsc(head)) {
        head.resolve(null, debugInfo);
    }
}
function updateCacheNodeOnPopstateRestoration(oldCacheNode, routerState) {
    // A popstate navigation reads data from the local cache. It does not issue
    // new network requests (unless the cache entries have been evicted). So, we
    // update the cache to drop the prefetch data for any segment whose dynamic
    // data was already received. This prevents an unnecessary flash back to PPR
    // state during a back/forward navigation.
    //
    // This function clones the entire cache node tree and sets the `prefetchRsc`
    // field to `null` to prevent it from being rendered. We can't mutate the node
    // in place because this is a concurrent data structure.
    const routerStateChildren = routerState[1];
    const oldParallelRoutes = oldCacheNode.parallelRoutes;
    const newParallelRoutes = new Map(oldParallelRoutes);
    for(let parallelRouteKey in routerStateChildren){
        const routerStateChild = routerStateChildren[parallelRouteKey];
        const segmentChild = routerStateChild[0];
        const segmentKeyChild = (0, _createroutercachekey.createRouterCacheKey)(segmentChild);
        const oldSegmentMapChild = oldParallelRoutes.get(parallelRouteKey);
        if (oldSegmentMapChild !== undefined) {
            const oldCacheNodeChild = oldSegmentMapChild.get(segmentKeyChild);
            if (oldCacheNodeChild !== undefined) {
                const newCacheNodeChild = updateCacheNodeOnPopstateRestoration(oldCacheNodeChild, routerStateChild);
                const newSegmentMapChild = new Map(oldSegmentMapChild);
                newSegmentMapChild.set(segmentKeyChild, newCacheNodeChild);
                newParallelRoutes.set(parallelRouteKey, newSegmentMapChild);
            }
        }
    }
    // Only show prefetched data if the dynamic data is still pending.
    //
    // Tehnically, what we're actually checking is whether the dynamic network
    // response was received. But since it's a streaming response, this does not
    // mean that all the dynamic data has fully streamed in. It just means that
    // _some_ of the dynamic data was received. But as a heuristic, we assume that
    // the rest dynamic data will stream in quickly, so it's still better to skip
    // the prefetch state.
    const rsc = oldCacheNode.rsc;
    const shouldUsePrefetch = isDeferredRsc(rsc) && rsc.status === 'pending';
    return {
        lazyData: null,
        rsc,
        head: oldCacheNode.head,
        prefetchHead: shouldUsePrefetch ? oldCacheNode.prefetchHead : [
            null,
            null
        ],
        prefetchRsc: shouldUsePrefetch ? oldCacheNode.prefetchRsc : null,
        loading: oldCacheNode.loading,
        // These are the cloned children we computed above
        parallelRoutes: newParallelRoutes,
        navigatedAt: oldCacheNode.navigatedAt
    };
}
const DEFERRED = Symbol();
// This type exists to distinguish a DeferredRsc from a Flight promise. It's a
// compromise to avoid adding an extra field on every Cache Node, which would be
// awkward because the pre-PPR parts of codebase would need to account for it,
// too. We can remove it once type Cache Node type is more settled.
function isDeferredRsc(value) {
    return value && typeof value === 'object' && value.tag === DEFERRED;
}
function createDeferredRsc() {
    // Create an unresolved promise that represents data derived from a Flight
    // response. The promise will be resolved later as soon as we start receiving
    // data from the server, i.e. as soon as the Flight client decodes and returns
    // the top-level response object.
    // The `_debugInfo` field contains profiling information. Promises that are
    // created by Flight already have this info added by React; for any derived
    // promise created by the router, we need to transfer the Flight debug info
    // onto the derived promise.
    //
    // The debug info represents the latency between the start of the navigation
    // and the start of rendering. (It does not represent the time it takes for
    // whole stream to finish.)
    const debugInfo = [];
    let resolve;
    let reject;
    const pendingRsc = new Promise((res, rej)=>{
        resolve = res;
        reject = rej;
    });
    pendingRsc.status = 'pending';
    pendingRsc.resolve = (value, responseDebugInfo)=>{
        if (pendingRsc.status === 'pending') {
            const fulfilledRsc = pendingRsc;
            fulfilledRsc.status = 'fulfilled';
            fulfilledRsc.value = value;
            if (responseDebugInfo !== null) {
                // Transfer the debug info to the derived promise.
                debugInfo.push.apply(debugInfo, responseDebugInfo);
            }
            resolve(value);
        }
    };
    pendingRsc.reject = (error, responseDebugInfo)=>{
        if (pendingRsc.status === 'pending') {
            const rejectedRsc = pendingRsc;
            rejectedRsc.status = 'rejected';
            rejectedRsc.reason = error;
            if (responseDebugInfo !== null) {
                // Transfer the debug info to the derived promise.
                debugInfo.push.apply(debugInfo, responseDebugInfo);
            }
            reject(error);
        }
    };
    pendingRsc.tag = DEFERRED;
    pendingRsc._debugInfo = debugInfo;
    return pendingRsc;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=ppr-navigations.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Shared types and constants for the Segment Cache.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    FetchStrategy: null,
    NavigationResultTag: null,
    PrefetchPriority: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    FetchStrategy: function() {
        return FetchStrategy;
    },
    NavigationResultTag: function() {
        return NavigationResultTag;
    },
    PrefetchPriority: function() {
        return PrefetchPriority;
    }
});
var NavigationResultTag = /*#__PURE__*/ function(NavigationResultTag) {
    NavigationResultTag[NavigationResultTag["MPA"] = 0] = "MPA";
    NavigationResultTag[NavigationResultTag["Success"] = 1] = "Success";
    NavigationResultTag[NavigationResultTag["NoOp"] = 2] = "NoOp";
    NavigationResultTag[NavigationResultTag["Async"] = 3] = "Async";
    return NavigationResultTag;
}({});
var PrefetchPriority = /*#__PURE__*/ function(PrefetchPriority) {
    /**
   * Assigned to the most recently hovered/touched link. Special network
   * bandwidth is reserved for this task only. There's only ever one Intent-
   * priority task at a time; when a new Intent task is scheduled, the previous
   * one is bumped down to Default.
   */ PrefetchPriority[PrefetchPriority["Intent"] = 2] = "Intent";
    /**
   * The default priority for prefetch tasks.
   */ PrefetchPriority[PrefetchPriority["Default"] = 1] = "Default";
    /**
   * Assigned to tasks when they spawn non-blocking background work, like
   * revalidating a partially cached entry to see if more data is available.
   */ PrefetchPriority[PrefetchPriority["Background"] = 0] = "Background";
    return PrefetchPriority;
}({});
var FetchStrategy = /*#__PURE__*/ function(FetchStrategy) {
    // Deliberately ordered so we can easily compare two segments
    // and determine if one segment is "more specific" than another
    // (i.e. if it's likely that it contains more data)
    FetchStrategy[FetchStrategy["LoadingBoundary"] = 0] = "LoadingBoundary";
    FetchStrategy[FetchStrategy["PPR"] = 1] = "PPR";
    FetchStrategy[FetchStrategy["PPRRuntime"] = 2] = "PPRRuntime";
    FetchStrategy[FetchStrategy["Full"] = 3] = "Full";
    return FetchStrategy;
}({});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=types.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/segment-cache/lru.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    deleteFromLru: null,
    lruPut: null,
    updateLruSize: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    deleteFromLru: function() {
        return deleteFromLru;
    },
    lruPut: function() {
        return lruPut;
    },
    updateLruSize: function() {
        return updateLruSize;
    }
});
const _cachemap = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/segment-cache/cache-map.js [app-client] (ecmascript)");
let head = null;
let didScheduleCleanup = false;
let lruSize = 0;
// TODO: I chose the max size somewhat arbitrarily. Consider setting this based
// on navigator.deviceMemory, or some other heuristic. We should make this
// customizable via the Next.js config, too.
const maxLruSize = 50 * 1024 * 1024 // 50 MB
;
function lruPut(node) {
    if (head === node) {
        // Already at the head
        return;
    }
    const prev = node.prev;
    const next = node.next;
    if (next === null || prev === null) {
        // This is an insertion
        lruSize += node.size;
        // Whenever we add an entry, we need to check if we've exceeded the
        // max size. We don't evict entries immediately; they're evicted later in
        // an asynchronous task.
        ensureCleanupIsScheduled();
    } else {
        // This is a move. Remove from its current position.
        prev.next = next;
        next.prev = prev;
    }
    // Move to the front of the list
    if (head === null) {
        // This is the first entry
        node.prev = node;
        node.next = node;
    } else {
        // Add to the front of the list
        const tail = head.prev;
        node.prev = tail;
        // In practice, this is never null, but that isn't encoded in the type
        if (tail !== null) {
            tail.next = node;
        }
        node.next = head;
        head.prev = node;
    }
    head = node;
}
function updateLruSize(node, newNodeSize) {
    // This is a separate function from `put` so that we can resize the entry
    // regardless of whether it's currently being tracked by the LRU.
    const prevNodeSize = node.size;
    node.size = newNodeSize;
    if (node.next === null) {
        // This entry is not currently being tracked by the LRU.
        return;
    }
    // Update the total LRU size
    lruSize = lruSize - prevNodeSize + newNodeSize;
    ensureCleanupIsScheduled();
}
function deleteFromLru(deleted) {
    const next = deleted.next;
    const prev = deleted.prev;
    if (next !== null && prev !== null) {
        lruSize -= deleted.size;
        deleted.next = null;
        deleted.prev = null;
        // Remove from the list
        if (head === deleted) {
            // Update the head
            if (next === head) {
                // This was the last entry
                head = null;
            } else {
                head = next;
            }
        } else {
            prev.next = next;
            next.prev = prev;
        }
    } else {
    // Already deleted
    }
}
function ensureCleanupIsScheduled() {
    if (didScheduleCleanup || lruSize <= maxLruSize) {
        return;
    }
    didScheduleCleanup = true;
    requestCleanupCallback(cleanup);
}
function cleanup() {
    didScheduleCleanup = false;
    // Evict entries until we're at 90% capacity. We can assume this won't
    // infinite loop because even if `maxLruSize` were 0, eventually
    // `deleteFromLru` sets `head` to `null` when we run out entries.
    const ninetyPercentMax = maxLruSize * 0.9;
    while(lruSize > ninetyPercentMax && head !== null){
        const tail = head.prev;
        // In practice, this is never null, but that isn't encoded in the type
        if (tail !== null) {
            // Delete the entry from the map. In turn, this will remove it from
            // the LRU.
            (0, _cachemap.deleteFromCacheMap)(tail.value);
        }
    }
}
const requestCleanupCallback = typeof requestIdleCallback === 'function' ? requestIdleCallback : (cb)=>setTimeout(cb, 0);
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=lru.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/segment-cache/cache-map.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    Fallback: null,
    createCacheMap: null,
    deleteFromCacheMap: null,
    getFromCacheMap: null,
    isValueExpired: null,
    setInCacheMap: null,
    setSizeInCacheMap: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Fallback: function() {
        return Fallback;
    },
    createCacheMap: function() {
        return createCacheMap;
    },
    deleteFromCacheMap: function() {
        return deleteFromCacheMap;
    },
    getFromCacheMap: function() {
        return getFromCacheMap;
    },
    isValueExpired: function() {
        return isValueExpired;
    },
    setInCacheMap: function() {
        return setInCacheMap;
    },
    setSizeInCacheMap: function() {
        return setSizeInCacheMap;
    }
});
const _lru = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/segment-cache/lru.js [app-client] (ecmascript)");
const Fallback = {};
// This is a special internal key that is used for "revalidation" entries. It's
// an implementation detail that shouldn't leak outside of this module.
const Revalidation = {};
function createCacheMap() {
    const cacheMap = {
        parent: null,
        key: null,
        value: null,
        map: null,
        // LRU-related fields
        prev: null,
        next: null,
        size: 0
    };
    return cacheMap;
}
function getOrInitialize(cacheMap, keys, isRevalidation) {
    // Go through each level of keys until we find the entry that matches, or
    // create a new entry if one doesn't exist.
    //
    // This function will only return entries that match the keypath _exactly_.
    // Unlike getWithFallback, it will not access fallback entries unless it's
    // explicitly part of the keypath.
    let entry = cacheMap;
    let remainingKeys = keys;
    let key = null;
    while(true){
        const previousKey = key;
        if (remainingKeys !== null) {
            key = remainingKeys.value;
            remainingKeys = remainingKeys.parent;
        } else if (isRevalidation && previousKey !== Revalidation) {
            // During a revalidation, we append an internal "Revalidation" key to
            // the end of the keypath. The "normal" entry is its parent.
            // However, if the parent entry is currently empty, we don't need to store
            // this as a revalidation entry. Just insert the revalidation into the
            // normal slot.
            if (entry.value === null) {
                return entry;
            }
            // Otheriwse, create a child entry.
            key = Revalidation;
        } else {
            break;
        }
        let map = entry.map;
        if (map !== null) {
            const existingEntry = map.get(key);
            if (existingEntry !== undefined) {
                // Found a match. Keep going.
                entry = existingEntry;
                continue;
            }
        } else {
            map = new Map();
            entry.map = map;
        }
        // No entry exists yet at this level. Create a new one.
        const newEntry = {
            parent: entry,
            key,
            value: null,
            map: null,
            // LRU-related fields
            prev: null,
            next: null,
            size: 0
        };
        map.set(key, newEntry);
        entry = newEntry;
    }
    return entry;
}
function getFromCacheMap(now, currentCacheVersion, rootEntry, keys, isRevalidation) {
    const entry = getEntryWithFallbackImpl(now, currentCacheVersion, rootEntry, keys, isRevalidation, 0);
    if (entry === null || entry.value === null) {
        return null;
    }
    // This is an LRU access. Move the entry to the front of the list.
    (0, _lru.lruPut)(entry);
    return entry.value;
}
function isValueExpired(now, currentCacheVersion, value) {
    return value.staleAt <= now || value.version < currentCacheVersion;
}
function lazilyEvictIfNeeded(now, currentCacheVersion, entry) {
    // We have a matching entry, but before we can return it, we need to check if
    // it's still fresh. Otherwise it should be treated the same as a cache miss.
    if (entry.value === null) {
        // This entry has no value, so there's nothing to evict.
        return entry;
    }
    const value = entry.value;
    if (isValueExpired(now, currentCacheVersion, value)) {
        // The value expired. Lazily evict it from the cache, and return null. This
        // is conceptually the same as a cache miss.
        deleteMapEntry(entry);
        return null;
    }
    // The matched entry has not expired. Return it.
    return entry;
}
function getEntryWithFallbackImpl(now, currentCacheVersion, entry, keys, isRevalidation, previousKey) {
    // This is similar to getExactEntry, but if an exact match is not found for
    // a key, it will return the fallback entry instead. This is recursive at
    // every level, e.g. an entry with keypath [a, Fallback, c, Fallback] is
    // valid match for [a, b, c, d].
    //
    // It will return the most specific match available.
    let key;
    let remainingKeys;
    if (keys !== null) {
        key = keys.value;
        remainingKeys = keys.parent;
    } else if (isRevalidation && previousKey !== Revalidation) {
        // During a revalidation, we append an internal "Revalidation" key to
        // the end of the keypath.
        key = Revalidation;
        remainingKeys = null;
    } else {
        // There are no more keys. This is the terminal entry.
        // TODO: When performing a lookup during a navigation, as opposed to a
        // prefetch, we may want to skip entries that are Pending if there's also
        // a Fulfilled fallback entry. Tricky to say, though, since if it's
        // already pending, it's likely to stream in soon. Maybe we could do this
        // just on slow connections and offline mode.
        return lazilyEvictIfNeeded(now, currentCacheVersion, entry);
    }
    const map = entry.map;
    if (map !== null) {
        const existingEntry = map.get(key);
        if (existingEntry !== undefined) {
            // Found an exact match for this key. Keep searching.
            const result = getEntryWithFallbackImpl(now, currentCacheVersion, existingEntry, remainingKeys, isRevalidation, key);
            if (result !== null) {
                return result;
            }
        }
        // No match found for this key. Check if there's a fallback.
        const fallbackEntry = map.get(Fallback);
        if (fallbackEntry !== undefined) {
            // Found a fallback for this key. Keep searching.
            return getEntryWithFallbackImpl(now, currentCacheVersion, fallbackEntry, remainingKeys, isRevalidation, key);
        }
    }
    return null;
}
function setInCacheMap(cacheMap, keys, value, isRevalidation) {
    // Add a value to the map at the given keypath. If the value is already
    // part of the map, it's removed from its previous keypath. (NOTE: This is
    // unlike a regular JS map, but the behavior is intentional.)
    const entry = getOrInitialize(cacheMap, keys, isRevalidation);
    setMapEntryValue(entry, value);
    // This is an LRU access. Move the entry to the front of the list.
    (0, _lru.lruPut)(entry);
    (0, _lru.updateLruSize)(entry, value.size);
}
function setMapEntryValue(entry, value) {
    if (entry.value !== null) {
        // There's already a value at the given keypath. Disconnect the old value
        // from the map. We're not calling `deleteMapEntry` here because the
        // entry itself is still in the map. We just want to overwrite its value.
        dropRef(entry.value);
        // Fill the entry with the updated value.
        const emptyEntry = entry;
        emptyEntry.value = null;
        fillEmptyReference(emptyEntry, value);
    } else {
        fillEmptyReference(entry, value);
    }
}
function fillEmptyReference(entry, value) {
    // This value may already be in the map at a different keypath.
    // Grab a reference before we overwrite it.
    const oldEntry = value.ref;
    const fullEntry = entry;
    fullEntry.value = value;
    value.ref = fullEntry;
    (0, _lru.updateLruSize)(fullEntry, value.size);
    if (oldEntry !== null && oldEntry !== entry && oldEntry.value === value) {
        // This value is already in the map at a different keypath in the map.
        // Values only exist at a single keypath at a time. Remove it from the
        // previous keypath.
        //
        // Note that only the internal map entry is garbage collected; we don't
        // call `dropRef` here because it's still in the map, just
        // at a new keypath (the one we just set, above).
        deleteMapEntry(oldEntry);
    }
}
function deleteFromCacheMap(value) {
    const entry = value.ref;
    if (entry === null) {
        // This value is not a member of any map.
        return;
    }
    dropRef(value);
    deleteMapEntry(entry);
}
function dropRef(value) {
    // Drop the value from the map by setting its `ref` backpointer to
    // null. This is a separate operation from `deleteMapEntry` because when
    // re-keying a value we need to be able to delete the old, internal map
    // entry without garbage collecting the value itself.
    value.ref = null;
}
function deleteMapEntry(entry) {
    // Delete the entry from the cache.
    const emptyEntry = entry;
    emptyEntry.value = null;
    (0, _lru.deleteFromLru)(entry);
    // Check if we can garbage collect the entry.
    const map = emptyEntry.map;
    if (map === null) {
        // Since this entry has no value, and also no child entries, we can
        // garbage collect it. Remove it from its parent, and keep garbage
        // collecting the parents until we reach a non-empty entry.
        let parent = emptyEntry.parent;
        let key = emptyEntry.key;
        while(parent !== null){
            const parentMap = parent.map;
            if (parentMap !== null) {
                parentMap.delete(key);
                if (parentMap.size === 0) {
                    // We just removed the last entry in the parent map.
                    parent.map = null;
                    if (parent.value === null) {
                        // The parent node has no child entries, nor does it have a value
                        // on itself. It can be garbage collected. Keep going.
                        key = parent.key;
                        parent = parent.parent;
                        continue;
                    }
                }
            }
            break;
        }
    } else {
        // Check if there's a revalidating entry. If so, promote it to a
        // "normal" entry, since the normal one was just deleted.
        const revalidatingEntry = map.get(Revalidation);
        if (revalidatingEntry !== undefined && revalidatingEntry.value !== null) {
            setMapEntryValue(emptyEntry, revalidatingEntry.value);
        }
    }
}
function setSizeInCacheMap(value, size) {
    const entry = value.ref;
    if (entry === null) {
        // This value is not a member of any map.
        return;
    }
    // Except during initialization (when the size is set to 0), this is the only
    // place the `size` field should be updated, to ensure it's in sync with the
    // the LRU.
    value.size = size;
    (0, _lru.updateLruSize)(entry, size);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=cache-map.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/segment-cache/vary-path.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    appendLayoutVaryPath: null,
    clonePageVaryPathWithNewSearchParams: null,
    finalizeLayoutVaryPath: null,
    finalizeMetadataVaryPath: null,
    finalizePageVaryPath: null,
    getFulfilledRouteVaryPath: null,
    getRouteVaryPath: null,
    getSegmentVaryPathForRequest: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    appendLayoutVaryPath: function() {
        return appendLayoutVaryPath;
    },
    clonePageVaryPathWithNewSearchParams: function() {
        return clonePageVaryPathWithNewSearchParams;
    },
    finalizeLayoutVaryPath: function() {
        return finalizeLayoutVaryPath;
    },
    finalizeMetadataVaryPath: function() {
        return finalizeMetadataVaryPath;
    },
    finalizePageVaryPath: function() {
        return finalizePageVaryPath;
    },
    getFulfilledRouteVaryPath: function() {
        return getFulfilledRouteVaryPath;
    },
    getRouteVaryPath: function() {
        return getRouteVaryPath;
    },
    getSegmentVaryPathForRequest: function() {
        return getSegmentVaryPathForRequest;
    }
});
const _types = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)");
const _cachemap = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/segment-cache/cache-map.js [app-client] (ecmascript)");
const _segmentvalueencoding = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/shared/lib/segment-cache/segment-value-encoding.js [app-client] (ecmascript)");
function getRouteVaryPath(pathname, search, nextUrl) {
    // requestKey -> searchParams -> nextUrl
    const varyPath = {
        value: pathname,
        parent: {
            value: search,
            parent: {
                value: nextUrl,
                parent: null
            }
        }
    };
    return varyPath;
}
function getFulfilledRouteVaryPath(pathname, search, nextUrl, couldBeIntercepted) {
    // This is called when a route's data is fulfilled. The cache entry will be
    // re-keyed based on which inputs the response varies by.
    // requestKey -> searchParams -> nextUrl
    const varyPath = {
        value: pathname,
        parent: {
            value: search,
            parent: {
                value: couldBeIntercepted ? nextUrl : _cachemap.Fallback,
                parent: null
            }
        }
    };
    return varyPath;
}
function appendLayoutVaryPath(parentPath, cacheKey) {
    const varyPathPart = {
        value: cacheKey,
        parent: parentPath
    };
    return varyPathPart;
}
function finalizeLayoutVaryPath(requestKey, varyPath) {
    const layoutVaryPath = {
        value: requestKey,
        parent: varyPath
    };
    return layoutVaryPath;
}
function finalizePageVaryPath(requestKey, renderedSearch, varyPath) {
    // Unlike layouts, a page segment's vary path also includes the search string.
    // requestKey -> searchParams -> pathParams
    const pageVaryPath = {
        value: requestKey,
        parent: {
            value: renderedSearch,
            parent: varyPath
        }
    };
    return pageVaryPath;
}
function finalizeMetadataVaryPath(pageRequestKey, renderedSearch, varyPath) {
    // The metadata "segment" is not a real segment because it doesn't exist in
    // the normal structure of the route tree, but in terms of caching, it
    // behaves like a page segment because it varies by all the same params as
    // a page.
    //
    // To keep the protocol for querying the server simple, the request key for
    // the metadata does not include any path information. It's unnecessary from
    // the server's perspective, because unlike page segments, there's only one
    // metadata response per URL, i.e. there's no need to distinguish multiple
    // parallel pages.
    //
    // However, this means the metadata request key is insufficient for
    // caching the the metadata in the client cache, because on the client we
    // use the request key to distinguish the metadata entry from all other
    // page's metadata entries.
    //
    // So instead we create a simulated request key based on the page segment.
    // Conceptually this is equivalent to the request key the server would have
    // assigned the metadata segment if it treated it as part of the actual
    // route structure.
    // If there are multiple parallel pages, we use whichever is the first one.
    // This is fine because the only difference between request keys for
    // different parallel pages are things like route groups and parallel
    // route slots. As long as it's always the same one, it doesn't matter.
    const pageVaryPath = {
        // Append the actual metadata request key to the page request key. Note
        // that we're not using a separate vary path part; it's unnecessary because
        // these are not conceptually separate inputs.
        value: pageRequestKey + _segmentvalueencoding.HEAD_REQUEST_KEY,
        parent: {
            value: renderedSearch,
            parent: varyPath
        }
    };
    return pageVaryPath;
}
function getSegmentVaryPathForRequest(fetchStrategy, tree) {
    // This is used for storing pending requests in the cache. We want to choose
    // the most generic vary path based on the strategy used to fetch it, i.e.
    // static/PPR versus runtime prefetching, so that it can be reused as much
    // as possible.
    //
    // We may be able to re-key the response to something even more generic once
    // we receive it — for example, if the server tells us that the response
    // doesn't vary on a particular param — but even before we send the request,
    // we know some params are reusable based on the fetch strategy alone. For
    // example, a static prefetch will never vary on search params.
    //
    // The original vary path with all the params filled in is stored on the
    // route tree object. We will clone this one to create a new vary path
    // where certain params are replaced with Fallback.
    //
    // This result of this function is not stored anywhere. It's only used to
    // access the cache a single time.
    //
    // TODO: Rather than create a new list object just to access the cache, the
    // plan is to add the concept of a "vary mask". This will represent all the
    // params that can be treated as Fallback. (Or perhaps the inverse.)
    const originalVaryPath = tree.varyPath;
    // Only page segments (and the special "metadata" segment, which is treated
    // like a page segment for the purposes of caching) may contain search
    // params. There's no reason to include them in the vary path otherwise.
    if (tree.isPage) {
        // Only a runtime prefetch will include search params in the vary path.
        // Static prefetches never include search params, so they can be reused
        // across all possible search param values.
        const doesVaryOnSearchParams = fetchStrategy === _types.FetchStrategy.Full || fetchStrategy === _types.FetchStrategy.PPRRuntime;
        if (!doesVaryOnSearchParams) {
            // The response from the the server will not vary on search params. Clone
            // the end of the original vary path to replace the search params
            // with Fallback.
            //
            // requestKey -> searchParams -> pathParams
            //               ^ This part gets replaced with Fallback
            const searchParamsVaryPath = originalVaryPath.parent;
            const pathParamsVaryPath = searchParamsVaryPath.parent;
            const patchedVaryPath = {
                value: originalVaryPath.value,
                parent: {
                    value: _cachemap.Fallback,
                    parent: pathParamsVaryPath
                }
            };
            return patchedVaryPath;
        }
    }
    // The request does vary on search params. We don't need to modify anything.
    return originalVaryPath;
}
function clonePageVaryPathWithNewSearchParams(originalVaryPath, newSearch) {
    // requestKey -> searchParams -> pathParams
    //               ^ This part gets replaced with newSearch
    const searchParamsVaryPath = originalVaryPath.parent;
    const clonedVaryPath = {
        value: originalVaryPath.value,
        parent: {
            value: newSearch,
            parent: searchParamsVaryPath.parent
        }
    };
    return clonedVaryPath;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=vary-path.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/segment-cache/cache-key.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// TypeScript trick to simulate opaque types, like in Flow.
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createCacheKey", {
    enumerable: true,
    get: function() {
        return createCacheKey;
    }
});
function createCacheKey(originalHref, nextUrl) {
    const originalUrl = new URL(originalHref);
    const cacheKey = {
        pathname: originalUrl.pathname,
        search: originalUrl.search,
        nextUrl: nextUrl
    };
    return cacheKey;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=cache-key.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/segment-cache/scheduler.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    cancelPrefetchTask: null,
    isPrefetchTaskDirty: null,
    pingPrefetchTask: null,
    reschedulePrefetchTask: null,
    schedulePrefetchTask: null,
    startRevalidationCooldown: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    cancelPrefetchTask: function() {
        return cancelPrefetchTask;
    },
    isPrefetchTaskDirty: function() {
        return isPrefetchTaskDirty;
    },
    pingPrefetchTask: function() {
        return pingPrefetchTask;
    },
    reschedulePrefetchTask: function() {
        return reschedulePrefetchTask;
    },
    schedulePrefetchTask: function() {
        return schedulePrefetchTask;
    },
    startRevalidationCooldown: function() {
        return startRevalidationCooldown;
    }
});
const _approutertypes = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/shared/lib/app-router-types.js [app-client] (ecmascript)");
const _matchsegments = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/match-segments.js [app-client] (ecmascript)");
const _cache = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/segment-cache/cache.js [app-client] (ecmascript)");
const _varypath = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/segment-cache/vary-path.js [app-client] (ecmascript)");
const _cachekey = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/segment-cache/cache-key.js [app-client] (ecmascript)");
const _types = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)");
const _segment = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/shared/lib/segment.js [app-client] (ecmascript)");
const scheduleMicrotask = typeof queueMicrotask === 'function' ? queueMicrotask : (fn)=>Promise.resolve().then(fn).catch((error)=>setTimeout(()=>{
            throw error;
        }));
const taskHeap = [];
let inProgressRequests = 0;
let sortIdCounter = 0;
let didScheduleMicrotask = false;
// The most recently hovered (or touched, etc) link, i.e. the most recent task
// scheduled at Intent priority. There's only ever a single task at Intent
// priority at a time. We reserve special network bandwidth for this task only.
let mostRecentlyHoveredLink = null;
// CDN cache propagation delay after revalidation (in milliseconds)
const REVALIDATION_COOLDOWN_MS = 300;
// Timeout handle for the revalidation cooldown. When non-null, prefetch
// requests are blocked to allow CDN cache propagation.
let revalidationCooldownTimeoutHandle = null;
function startRevalidationCooldown() {
    // Clear any existing timeout in case multiple revalidations happen
    // in quick succession.
    if (revalidationCooldownTimeoutHandle !== null) {
        clearTimeout(revalidationCooldownTimeoutHandle);
    }
    // Schedule the cooldown to expire after the delay.
    revalidationCooldownTimeoutHandle = setTimeout(()=>{
        revalidationCooldownTimeoutHandle = null;
        // Retry the prefetch queue now that the cooldown has expired.
        ensureWorkIsScheduled();
    }, REVALIDATION_COOLDOWN_MS);
}
function schedulePrefetchTask(key, treeAtTimeOfPrefetch, fetchStrategy, priority, onInvalidate) {
    // Spawn a new prefetch task
    const task = {
        key,
        treeAtTimeOfPrefetch,
        cacheVersion: (0, _cache.getCurrentCacheVersion)(),
        priority,
        phase: 1,
        hasBackgroundWork: false,
        spawnedRuntimePrefetches: null,
        fetchStrategy,
        sortId: sortIdCounter++,
        isCanceled: false,
        onInvalidate,
        _heapIndex: -1
    };
    trackMostRecentlyHoveredLink(task);
    heapPush(taskHeap, task);
    // Schedule an async task to process the queue.
    //
    // The main reason we process the queue in an async task is for batching.
    // It's common for a single JS task/event to trigger multiple prefetches.
    // By deferring to a microtask, we only process the queue once per JS task.
    // If they have different priorities, it also ensures they are processed in
    // the optimal order.
    ensureWorkIsScheduled();
    return task;
}
function cancelPrefetchTask(task) {
    // Remove the prefetch task from the queue. If the task already completed,
    // then this is a no-op.
    //
    // We must also explicitly mark the task as canceled so that a blocked task
    // does not get added back to the queue when it's pinged by the network.
    task.isCanceled = true;
    heapDelete(taskHeap, task);
}
function reschedulePrefetchTask(task, treeAtTimeOfPrefetch, fetchStrategy, priority) {
    // Bump the prefetch task to the top of the queue, as if it were a fresh
    // task. This is essentially the same as canceling the task and scheduling
    // a new one, except it reuses the original object.
    //
    // The primary use case is to increase the priority of a Link-initated
    // prefetch on hover.
    // Un-cancel the task, in case it was previously canceled.
    task.isCanceled = false;
    task.phase = 1;
    // Assign a new sort ID to move it ahead of all other tasks at the same
    // priority level. (Higher sort IDs are processed first.)
    task.sortId = sortIdCounter++;
    task.priority = // Intent priority, even if the rescheduled priority is lower.
    task === mostRecentlyHoveredLink ? _types.PrefetchPriority.Intent : priority;
    task.treeAtTimeOfPrefetch = treeAtTimeOfPrefetch;
    task.fetchStrategy = fetchStrategy;
    trackMostRecentlyHoveredLink(task);
    if (task._heapIndex !== -1) {
        // The task is already in the queue.
        heapResift(taskHeap, task);
    } else {
        heapPush(taskHeap, task);
    }
    ensureWorkIsScheduled();
}
function isPrefetchTaskDirty(task, nextUrl, tree) {
    // This is used to quickly bail out of a prefetch task if the result is
    // guaranteed to not have changed since the task was initiated. This is
    // strictly an optimization — theoretically, if it always returned true, no
    // behavior should change because a full prefetch task will effectively
    // perform the same checks.
    const currentCacheVersion = (0, _cache.getCurrentCacheVersion)();
    return task.cacheVersion !== currentCacheVersion || task.treeAtTimeOfPrefetch !== tree || task.key.nextUrl !== nextUrl;
}
function trackMostRecentlyHoveredLink(task) {
    // Track the mostly recently hovered link, i.e. the most recently scheduled
    // task at Intent priority. There must only be one such task at a time.
    if (task.priority === _types.PrefetchPriority.Intent && task !== mostRecentlyHoveredLink) {
        if (mostRecentlyHoveredLink !== null) {
            // Bump the previously hovered link's priority down to Default.
            if (mostRecentlyHoveredLink.priority !== _types.PrefetchPriority.Background) {
                mostRecentlyHoveredLink.priority = _types.PrefetchPriority.Default;
                heapResift(taskHeap, mostRecentlyHoveredLink);
            }
        }
        mostRecentlyHoveredLink = task;
    }
}
function ensureWorkIsScheduled() {
    if (didScheduleMicrotask) {
        // Already scheduled a task to process the queue
        return;
    }
    didScheduleMicrotask = true;
    scheduleMicrotask(processQueueInMicrotask);
}
/**
 * Checks if we've exceeded the maximum number of concurrent prefetch requests,
 * to avoid saturating the browser's internal network queue. This is a
 * cooperative limit — prefetch tasks should check this before issuing
 * new requests.
 *
 * Also checks if we're within the revalidation cooldown window, during which
 * prefetch requests are delayed to allow CDN cache propagation.
 */ function hasNetworkBandwidth(task) {
    // Check if we're within the revalidation cooldown window
    if (revalidationCooldownTimeoutHandle !== null) {
        // We're within the cooldown window. Return false to prevent prefetching.
        // When the cooldown expires, the timeout will call ensureWorkIsScheduled()
        // to retry the queue.
        return false;
    }
    // TODO: Also check if there's an in-progress navigation. We should never
    // add prefetch requests to the network queue if an actual navigation is
    // taking place, to ensure there's sufficient bandwidth for render-blocking
    // data and resources.
    // TODO: Consider reserving some amount of bandwidth for static prefetches.
    if (task.priority === _types.PrefetchPriority.Intent) {
        // The most recently hovered link is allowed to exceed the default limit.
        //
        // The goal is to always have enough bandwidth to start a new prefetch
        // request when hovering over a link.
        //
        // However, because we don't abort in-progress requests, it's still possible
        // we'll run out of bandwidth. When links are hovered in quick succession,
        // there could be multiple hover requests running simultaneously.
        return inProgressRequests < 12;
    }
    // The default limit is lower than the limit for a hovered link.
    return inProgressRequests < 4;
}
function spawnPrefetchSubtask(prefetchSubtask) {
    // When the scheduler spawns an async task, we don't await its result.
    // Instead, the async task writes its result directly into the cache, then
    // pings the scheduler to continue.
    //
    // We process server responses streamingly, so the prefetch subtask will
    // likely resolve before we're finished receiving all the data. The subtask
    // result includes a promise that resolves once the network connection is
    // closed. The scheduler uses this to control network bandwidth by tracking
    // and limiting the number of concurrent requests.
    inProgressRequests++;
    return prefetchSubtask.then((result)=>{
        if (result === null) {
            // The prefetch task errored before it could start processing the
            // network stream. Assume the connection is closed.
            onPrefetchConnectionClosed();
            return null;
        }
        // Wait for the connection to close before freeing up more bandwidth.
        result.closed.then(onPrefetchConnectionClosed);
        return result.value;
    });
}
function onPrefetchConnectionClosed() {
    inProgressRequests--;
    // Notify the scheduler that we have more bandwidth, and can continue
    // processing tasks.
    ensureWorkIsScheduled();
}
function pingPrefetchTask(task) {
    // "Ping" a prefetch that's already in progress to notify it of new data.
    if (task.isCanceled || // Check if prefetch is already queued.
    task._heapIndex !== -1) {
        return;
    }
    // Add the task back to the queue.
    heapPush(taskHeap, task);
    ensureWorkIsScheduled();
}
function processQueueInMicrotask() {
    didScheduleMicrotask = false;
    // We aim to minimize how often we read the current time. Since nearly all
    // functions in the prefetch scheduler are synchronous, we can read the time
    // once and pass it as an argument wherever it's needed.
    const now = Date.now();
    // Process the task queue until we run out of network bandwidth.
    let task = heapPeek(taskHeap);
    while(task !== null && hasNetworkBandwidth(task)){
        task.cacheVersion = (0, _cache.getCurrentCacheVersion)();
        const exitStatus = pingRoute(now, task);
        // These fields are only valid for a single attempt. Reset them after each
        // iteration of the task queue.
        const hasBackgroundWork = task.hasBackgroundWork;
        task.hasBackgroundWork = false;
        task.spawnedRuntimePrefetches = null;
        switch(exitStatus){
            case 0:
                // The task yielded because there are too many requests in progress.
                // Stop processing tasks until we have more bandwidth.
                return;
            case 1:
                // The task is blocked. It needs more data before it can proceed.
                // Keep the task out of the queue until the server responds.
                heapPop(taskHeap);
                // Continue to the next task
                task = heapPeek(taskHeap);
                continue;
            case 2:
                if (task.phase === 1) {
                    // Finished prefetching the route tree. Proceed to prefetching
                    // the segments.
                    task.phase = 0;
                    heapResift(taskHeap, task);
                } else if (hasBackgroundWork) {
                    // The task spawned additional background work. Reschedule the task
                    // at background priority.
                    task.priority = _types.PrefetchPriority.Background;
                    heapResift(taskHeap, task);
                } else {
                    // The prefetch is complete. Continue to the next task.
                    heapPop(taskHeap);
                }
                task = heapPeek(taskHeap);
                continue;
            default:
                exitStatus;
        }
    }
}
/**
 * Check this during a prefetch task to determine if background work can be
 * performed. If so, it evaluates to `true`. Otherwise, it returns `false`,
 * while also scheduling a background task to run later. Usage:
 *
 * @example
 * if (background(task)) {
 *   // Perform background-pri work
 * }
 */ function background(task) {
    if (task.priority === _types.PrefetchPriority.Background) {
        return true;
    }
    task.hasBackgroundWork = true;
    return false;
}
function pingRoute(now, task) {
    const key = task.key;
    const route = (0, _cache.readOrCreateRouteCacheEntry)(now, task, key);
    const exitStatus = pingRootRouteTree(now, task, route);
    if (exitStatus !== 0 && key.search !== '') {
        // If the URL has a non-empty search string, also prefetch the pathname
        // without the search string. We use the searchless route tree as a base for
        // optimistic routing; see requestOptimisticRouteCacheEntry for details.
        //
        // Note that we don't need to prefetch any of the segment data. Just the
        // route tree.
        //
        // TODO: This is a temporary solution; the plan is to replace this by adding
        // a wildcard lookup method to the TupleMap implementation. This is
        // non-trivial to implement because it needs to account for things like
        // fallback route entries, hence this temporary workaround.
        const url = new URL(key.pathname, location.origin);
        const keyWithoutSearch = (0, _cachekey.createCacheKey)(url.href, key.nextUrl);
        const routeWithoutSearch = (0, _cache.readOrCreateRouteCacheEntry)(now, task, keyWithoutSearch);
        switch(routeWithoutSearch.status){
            case _cache.EntryStatus.Empty:
                {
                    if (background(task)) {
                        routeWithoutSearch.status = _cache.EntryStatus.Pending;
                        spawnPrefetchSubtask((0, _cache.fetchRouteOnCacheMiss)(routeWithoutSearch, task, keyWithoutSearch));
                    }
                    break;
                }
            case _cache.EntryStatus.Pending:
            case _cache.EntryStatus.Fulfilled:
            case _cache.EntryStatus.Rejected:
                {
                    break;
                }
            default:
                routeWithoutSearch;
        }
    }
    return exitStatus;
}
function pingRootRouteTree(now, task, route) {
    switch(route.status){
        case _cache.EntryStatus.Empty:
            {
                // Route is not yet cached, and there's no request already in progress.
                // Spawn a task to request the route, load it into the cache, and ping
                // the task to continue.
                // TODO: There are multiple strategies in the <Link> API for prefetching
                // a route. Currently we've only implemented the main one: per-segment,
                // static-data only.
                //
                // There's also `<Link prefetch={true}>`
                // which prefetch both static *and* dynamic data.
                // Similarly, we need to fallback to the old, per-page
                // behavior if PPR is disabled for a route (via the incremental opt-in).
                //
                // Those cases will be handled here.
                spawnPrefetchSubtask((0, _cache.fetchRouteOnCacheMiss)(route, task, task.key));
                // If the request takes longer than a minute, a subsequent request should
                // retry instead of waiting for this one. When the response is received,
                // this value will be replaced by a new value based on the stale time sent
                // from the server.
                // TODO: We should probably also manually abort the fetch task, to reclaim
                // server bandwidth.
                route.staleAt = now + 60 * 1000;
                // Upgrade to Pending so we know there's already a request in progress
                route.status = _cache.EntryStatus.Pending;
            // Intentional fallthrough to the Pending branch
            }
        case _cache.EntryStatus.Pending:
            {
                // Still pending. We can't start prefetching the segments until the route
                // tree has loaded. Add the task to the set of blocked tasks so that it
                // is notified when the route tree is ready.
                const blockedTasks = route.blockedTasks;
                if (blockedTasks === null) {
                    route.blockedTasks = new Set([
                        task
                    ]);
                } else {
                    blockedTasks.add(task);
                }
                return 1;
            }
        case _cache.EntryStatus.Rejected:
            {
                // Route tree failed to load. Treat as a 404.
                return 2;
            }
        case _cache.EntryStatus.Fulfilled:
            {
                if (task.phase !== 0) {
                    // Do not prefetch segment data until we've entered the segment phase.
                    return 2;
                }
                // Recursively fill in the segment tree.
                if (!hasNetworkBandwidth(task)) {
                    // Stop prefetching segments until there's more bandwidth.
                    return 0;
                }
                const tree = route.tree;
                // A task's fetch strategy gets set to `PPR` for any "auto" prefetch.
                // If it turned out that the route isn't PPR-enabled, we need to use `LoadingBoundary` instead.
                // We don't need to do this for runtime prefetches, because those are only available in
                // `cacheComponents`, where every route is PPR.
                const fetchStrategy = task.fetchStrategy === _types.FetchStrategy.PPR ? route.isPPREnabled ? _types.FetchStrategy.PPR : _types.FetchStrategy.LoadingBoundary : task.fetchStrategy;
                switch(fetchStrategy){
                    case _types.FetchStrategy.PPR:
                        {
                            // For Cache Components pages, each segment may be prefetched
                            // statically or using a runtime request, based on various
                            // configurations and heuristics. We'll do this in two passes: first
                            // traverse the tree and perform all the static prefetches.
                            //
                            // Then, if there are any segments that need a runtime request,
                            // do another pass to perform a runtime prefetch.
                            pingStaticHead(now, task, route);
                            const exitStatus = pingSharedPartOfCacheComponentsTree(now, task, route, task.treeAtTimeOfPrefetch, tree);
                            if (exitStatus === 0) {
                                // Child yielded without finishing.
                                return 0;
                            }
                            const spawnedRuntimePrefetches = task.spawnedRuntimePrefetches;
                            if (spawnedRuntimePrefetches !== null) {
                                // During the first pass, we discovered segments that require a
                                // runtime prefetch. Do a second pass to construct a request tree.
                                const spawnedEntries = new Map();
                                pingRuntimeHead(now, task, route, spawnedEntries, _types.FetchStrategy.PPRRuntime);
                                const requestTree = pingRuntimePrefetches(now, task, route, tree, spawnedRuntimePrefetches, spawnedEntries);
                                let needsDynamicRequest = spawnedEntries.size > 0;
                                if (needsDynamicRequest) {
                                    // Perform a dynamic prefetch request and populate the cache with
                                    // the result.
                                    spawnPrefetchSubtask((0, _cache.fetchSegmentPrefetchesUsingDynamicRequest)(task, route, _types.FetchStrategy.PPRRuntime, requestTree, spawnedEntries));
                                }
                            }
                            return 2;
                        }
                    case _types.FetchStrategy.Full:
                    case _types.FetchStrategy.PPRRuntime:
                    case _types.FetchStrategy.LoadingBoundary:
                        {
                            // Prefetch multiple segments using a single dynamic request.
                            // TODO: We can consolidate this branch with previous one by modeling
                            // it as if the first segment in the new tree has runtime prefetching
                            // enabled. Will do this as a follow-up refactor. Might want to remove
                            // the special metatdata case below first. In the meantime, it's not
                            // really that much duplication, just would be nice to remove one of
                            // these codepaths.
                            const spawnedEntries = new Map();
                            pingRuntimeHead(now, task, route, spawnedEntries, fetchStrategy);
                            const dynamicRequestTree = diffRouteTreeAgainstCurrent(now, task, route, task.treeAtTimeOfPrefetch, tree, spawnedEntries, fetchStrategy);
                            let needsDynamicRequest = spawnedEntries.size > 0;
                            if (needsDynamicRequest) {
                                spawnPrefetchSubtask((0, _cache.fetchSegmentPrefetchesUsingDynamicRequest)(task, route, fetchStrategy, dynamicRequestTree, spawnedEntries));
                            }
                            return 2;
                        }
                    default:
                        fetchStrategy;
                }
                break;
            }
        default:
            {
                route;
            }
    }
    return 2;
}
function pingStaticHead(now, task, route) {
    // The Head data for a page (metadata, viewport) is not really a route
    // segment, in the sense that it doesn't appear in the route tree. But we
    // store it in the cache as if it were, using a special key.
    pingStaticSegmentData(now, task, route, (0, _cache.readOrCreateSegmentCacheEntry)(now, _types.FetchStrategy.PPR, route, route.metadata), task.key, route.metadata);
}
function pingRuntimeHead(now, task, route, spawnedEntries, fetchStrategy) {
    pingRouteTreeAndIncludeDynamicData(now, task, route, route.metadata, false, spawnedEntries, // and LoadingBoundary
    fetchStrategy === _types.FetchStrategy.LoadingBoundary ? _types.FetchStrategy.Full : fetchStrategy);
}
// TODO: Rename dynamic -> runtime throughout this module
function pingSharedPartOfCacheComponentsTree(now, task, route, oldTree, newTree) {
    // When Cache Components is enabled (or PPR, or a fully static route when PPR
    // is disabled; those cases are treated equivalently to Cache Components), we
    // start by prefetching each segment individually. Once we reach the "new"
    // part of the tree — the part that doesn't exist on the current page — we
    // may choose to switch to a runtime prefetch instead, based on the
    // information sent by the server in the route tree.
    //
    // The traversal starts in the "shared" part of the tree. Once we reach the
    // "new" part of the tree, we switch to a different traversal,
    // pingNewPartOfCacheComponentsTree.
    // Prefetch this segment's static data.
    const segment = (0, _cache.readOrCreateSegmentCacheEntry)(now, task.fetchStrategy, route, newTree);
    pingStaticSegmentData(now, task, route, segment, task.key, newTree);
    // Recursively ping the children.
    const oldTreeChildren = oldTree[1];
    const newTreeChildren = newTree.slots;
    if (newTreeChildren !== null) {
        for(const parallelRouteKey in newTreeChildren){
            if (!hasNetworkBandwidth(task)) {
                // Stop prefetching segments until there's more bandwidth.
                return 0;
            }
            const newTreeChild = newTreeChildren[parallelRouteKey];
            const newTreeChildSegment = newTreeChild.segment;
            const oldTreeChild = oldTreeChildren[parallelRouteKey];
            const oldTreeChildSegment = oldTreeChild?.[0];
            let childExitStatus;
            if (oldTreeChildSegment !== undefined && doesCurrentSegmentMatchCachedSegment(route, newTreeChildSegment, oldTreeChildSegment)) {
                // We're still in the "shared" part of the tree.
                childExitStatus = pingSharedPartOfCacheComponentsTree(now, task, route, oldTreeChild, newTreeChild);
            } else {
                // We've entered the "new" part of the tree. Switch
                // traversal functions.
                childExitStatus = pingNewPartOfCacheComponentsTree(now, task, route, newTreeChild);
            }
            if (childExitStatus === 0) {
                // Child yielded without finishing.
                return 0;
            }
        }
    }
    return 2;
}
function pingNewPartOfCacheComponentsTree(now, task, route, tree) {
    // We're now prefetching in the "new" part of the tree, the part that doesn't
    // exist on the current page. (In other words, we're deeper than the
    // shared layouts.) Segments in here default to being prefetched statically.
    // However, if the server instructs us to, we may switch to a runtime
    // prefetch instead. Traverse the tree and check at each segment.
    if (tree.hasRuntimePrefetch) {
        // This route has a runtime prefetch response. Since we're below the shared
        // layout, everything from this point should be prefetched using a single,
        // combined runtime request, rather than using per-segment static requests.
        // This is true even if some of the child segments are known to be fully
        // static — once we've decided to perform a runtime prefetch, we might as
        // well respond with the static segments in the same roundtrip. (That's how
        // regular navigations work, too.) We'll still skip over segments that are
        // already cached, though.
        //
        // It's the server's responsibility to set a reasonable value of
        // `hasRuntimePrefetch`. Currently it's user-defined, but eventually, the
        // server may send a value of `false` even if the user opts in, if it
        // determines during build that the route is always fully static. There are
        // more optimizations we can do once we implement fallback param
        // tracking, too.
        //
        // Use the task object to collect the segments that need a runtime prefetch.
        // This will signal to the outer task queue that a second traversal is
        // required to construct a request tree.
        if (task.spawnedRuntimePrefetches === null) {
            task.spawnedRuntimePrefetches = new Set([
                tree.requestKey
            ]);
        } else {
            task.spawnedRuntimePrefetches.add(tree.requestKey);
        }
        // Then exit the traversal without prefetching anything further.
        return 2;
    }
    // This segment should not be runtime prefetched. Prefetch its static data.
    const segment = (0, _cache.readOrCreateSegmentCacheEntry)(now, task.fetchStrategy, route, tree);
    pingStaticSegmentData(now, task, route, segment, task.key, tree);
    if (tree.slots !== null) {
        if (!hasNetworkBandwidth(task)) {
            // Stop prefetching segments until there's more bandwidth.
            return 0;
        }
        // Recursively ping the children.
        for(const parallelRouteKey in tree.slots){
            const childTree = tree.slots[parallelRouteKey];
            const childExitStatus = pingNewPartOfCacheComponentsTree(now, task, route, childTree);
            if (childExitStatus === 0) {
                // Child yielded without finishing.
                return 0;
            }
        }
    }
    // This segment and all its children have finished prefetching.
    return 2;
}
function diffRouteTreeAgainstCurrent(now, task, route, oldTree, newTree, spawnedEntries, fetchStrategy) {
    // This is a single recursive traversal that does multiple things:
    // - Finds the parts of the target route (newTree) that are not part of
    //   of the current page (oldTree) by diffing them, using the same algorithm
    //   as a real navigation.
    // - Constructs a request tree (FlightRouterState) that describes which
    //   segments need to be prefetched and which ones are already cached.
    // - Creates a set of pending cache entries for the segments that need to
    //   be prefetched, so that a subsequent prefetch task does not request the
    //   same segments again.
    const oldTreeChildren = oldTree[1];
    const newTreeChildren = newTree.slots;
    let requestTreeChildren = {};
    if (newTreeChildren !== null) {
        for(const parallelRouteKey in newTreeChildren){
            const newTreeChild = newTreeChildren[parallelRouteKey];
            const newTreeChildSegment = newTreeChild.segment;
            const oldTreeChild = oldTreeChildren[parallelRouteKey];
            const oldTreeChildSegment = oldTreeChild?.[0];
            if (oldTreeChildSegment !== undefined && doesCurrentSegmentMatchCachedSegment(route, newTreeChildSegment, oldTreeChildSegment)) {
                // This segment is already part of the current route. Keep traversing.
                const requestTreeChild = diffRouteTreeAgainstCurrent(now, task, route, oldTreeChild, newTreeChild, spawnedEntries, fetchStrategy);
                requestTreeChildren[parallelRouteKey] = requestTreeChild;
            } else {
                // This segment is not part of the current route. We're entering a
                // part of the tree that we need to prefetch (unless everything is
                // already cached).
                switch(fetchStrategy){
                    case _types.FetchStrategy.LoadingBoundary:
                        {
                            // When PPR is disabled, we can't prefetch per segment. We must
                            // fallback to the old prefetch behavior and send a dynamic request.
                            // Only routes that include a loading boundary can be prefetched in
                            // this way.
                            //
                            // This is simlar to a "full" prefetch, but we're much more
                            // conservative about which segments to include in the request.
                            //
                            // The server will only render up to the first loading boundary
                            // inside new part of the tree. If there's no loading boundary
                            // anywhere in the tree, the server will never return any data, so
                            // we can skip the request.
                            const subtreeHasLoadingBoundary = newTreeChild.hasLoadingBoundary !== _approutertypes.HasLoadingBoundary.SubtreeHasNoLoadingBoundary;
                            const requestTreeChild = subtreeHasLoadingBoundary ? pingPPRDisabledRouteTreeUpToLoadingBoundary(now, task, route, newTreeChild, null, spawnedEntries) : (0, _cache.convertRouteTreeToFlightRouterState)(newTreeChild);
                            requestTreeChildren[parallelRouteKey] = requestTreeChild;
                            break;
                        }
                    case _types.FetchStrategy.PPRRuntime:
                        {
                            // This is a runtime prefetch. Fetch all cacheable data in the tree,
                            // not just the static PPR shell.
                            const requestTreeChild = pingRouteTreeAndIncludeDynamicData(now, task, route, newTreeChild, false, spawnedEntries, fetchStrategy);
                            requestTreeChildren[parallelRouteKey] = requestTreeChild;
                            break;
                        }
                    case _types.FetchStrategy.Full:
                        {
                            // This is a "full" prefetch. Fetch all the data in the tree, both
                            // static and dynamic. We issue roughly the same request that we
                            // would during a real navigation. The goal is that once the
                            // navigation occurs, the router should not have to fetch any
                            // additional data.
                            //
                            // Although the response will include dynamic data, opting into a
                            // Full prefetch — via <Link prefetch={true}> — implicitly
                            // instructs the cache to treat the response as "static", or non-
                            // dynamic, since the whole point is to cache it for
                            // future navigations.
                            //
                            // Construct a tree (currently a FlightRouterState) that represents
                            // which segments need to be prefetched and which ones are already
                            // cached. If the tree is empty, then we can exit. Otherwise, we'll
                            // send the request tree to the server and use the response to
                            // populate the segment cache.
                            const requestTreeChild = pingRouteTreeAndIncludeDynamicData(now, task, route, newTreeChild, false, spawnedEntries, fetchStrategy);
                            requestTreeChildren[parallelRouteKey] = requestTreeChild;
                            break;
                        }
                    default:
                        fetchStrategy;
                }
            }
        }
    }
    const requestTree = [
        newTree.segment,
        requestTreeChildren,
        null,
        null,
        newTree.isRootLayout
    ];
    return requestTree;
}
function pingPPRDisabledRouteTreeUpToLoadingBoundary(now, task, route, tree, refetchMarkerContext, spawnedEntries) {
    // This function is similar to pingRouteTreeAndIncludeDynamicData, except the
    // server is only going to return a minimal loading state — it will stop
    // rendering at the first loading boundary. Whereas a Full prefetch is
    // intentionally aggressive and tries to pretfetch all the data that will be
    // needed for a navigation, a LoadingBoundary prefetch is much more
    // conservative. For example, it will omit from the request tree any segment
    // that is already cached, regardles of whether it's partial or full. By
    // contrast, a Full prefetch will refetch partial segments.
    // "inside-shared-layout" tells the server where to start looking for a
    // loading boundary.
    let refetchMarker = refetchMarkerContext === null ? 'inside-shared-layout' : null;
    const segment = (0, _cache.readOrCreateSegmentCacheEntry)(now, task.fetchStrategy, route, tree);
    switch(segment.status){
        case _cache.EntryStatus.Empty:
            {
                // This segment is not cached. Add a refetch marker so the server knows
                // to start rendering here.
                // TODO: Instead of a "refetch" marker, we could just omit this subtree's
                // FlightRouterState from the request tree. I think this would probably
                // already work even without any updates to the server. For consistency,
                // though, I'll send the full tree and we'll look into this later as part
                // of a larger redesign of the request protocol.
                // Add the pending cache entry to the result map.
                spawnedEntries.set(tree.requestKey, (0, _cache.upgradeToPendingSegment)(segment, // might not include it in the pending response. If another route is able
                // to issue a per-segment request, we'll do that in the background.
                _types.FetchStrategy.LoadingBoundary));
                if (refetchMarkerContext !== 'refetch') {
                    refetchMarker = refetchMarkerContext = 'refetch';
                } else {
                // There's already a parent with a refetch marker, so we don't need
                // to add another one.
                }
                break;
            }
        case _cache.EntryStatus.Fulfilled:
            {
                // The segment is already cached.
                const segmentHasLoadingBoundary = tree.hasLoadingBoundary === _approutertypes.HasLoadingBoundary.SegmentHasLoadingBoundary;
                if (segmentHasLoadingBoundary) {
                    // This segment has a loading boundary, which means the server won't
                    // render its children. So there's nothing left to prefetch along this
                    // path. We can bail out.
                    return (0, _cache.convertRouteTreeToFlightRouterState)(tree);
                }
                break;
            }
        case _cache.EntryStatus.Pending:
            {
                break;
            }
        case _cache.EntryStatus.Rejected:
            {
                break;
            }
        default:
            segment;
    }
    const requestTreeChildren = {};
    if (tree.slots !== null) {
        for(const parallelRouteKey in tree.slots){
            const childTree = tree.slots[parallelRouteKey];
            requestTreeChildren[parallelRouteKey] = pingPPRDisabledRouteTreeUpToLoadingBoundary(now, task, route, childTree, refetchMarkerContext, spawnedEntries);
        }
    }
    const requestTree = [
        tree.segment,
        requestTreeChildren,
        null,
        refetchMarker,
        tree.isRootLayout
    ];
    return requestTree;
}
function pingRouteTreeAndIncludeDynamicData(now, task, route, tree, isInsideRefetchingParent, spawnedEntries, fetchStrategy) {
    // The tree we're constructing is the same shape as the tree we're navigating
    // to. But even though this is a "new" tree, some of the individual segments
    // may be cached as a result of other route prefetches.
    //
    // So we need to find the first uncached segment along each path add an
    // explicit "refetch" marker so the server knows where to start rendering.
    // Once the server starts rendering along a path, it keeps rendering the
    // entire subtree.
    const segment = (0, _cache.readOrCreateSegmentCacheEntry)(now, // and we have to use the former here.
    // We can have a task with `FetchStrategy.PPR` where some of its segments are configured to
    // always use runtime prefetching (via `export const prefetch`), and those should check for
    // entries that include search params.
    fetchStrategy, route, tree);
    let spawnedSegment = null;
    switch(segment.status){
        case _cache.EntryStatus.Empty:
            {
                // This segment is not cached. Include it in the request.
                spawnedSegment = (0, _cache.upgradeToPendingSegment)(segment, fetchStrategy);
                break;
            }
        case _cache.EntryStatus.Fulfilled:
            {
                // The segment is already cached.
                if (segment.isPartial && (0, _cache.canNewFetchStrategyProvideMoreContent)(segment.fetchStrategy, fetchStrategy)) {
                    // The cached segment contains dynamic holes, and was prefetched using a less specific strategy than the current one.
                    // This means we're in one of these cases:
                    //   - we have a static prefetch, and we're doing a runtime prefetch
                    //   - we have a static or runtime prefetch, and we're doing a Full prefetch (or a navigation).
                    // In either case, we need to include it in the request to get a more specific (or full) version.
                    spawnedSegment = pingFullSegmentRevalidation(now, route, tree, fetchStrategy);
                }
                break;
            }
        case _cache.EntryStatus.Pending:
        case _cache.EntryStatus.Rejected:
            {
                // There's either another prefetch currently in progress, or the previous
                // attempt failed. If the new strategy can provide more content, fetch it again.
                if ((0, _cache.canNewFetchStrategyProvideMoreContent)(segment.fetchStrategy, fetchStrategy)) {
                    spawnedSegment = pingFullSegmentRevalidation(now, route, tree, fetchStrategy);
                }
                break;
            }
        default:
            segment;
    }
    const requestTreeChildren = {};
    if (tree.slots !== null) {
        for(const parallelRouteKey in tree.slots){
            const childTree = tree.slots[parallelRouteKey];
            requestTreeChildren[parallelRouteKey] = pingRouteTreeAndIncludeDynamicData(now, task, route, childTree, isInsideRefetchingParent || spawnedSegment !== null, spawnedEntries, fetchStrategy);
        }
    }
    if (spawnedSegment !== null) {
        // Add the pending entry to the result map.
        spawnedEntries.set(tree.requestKey, spawnedSegment);
    }
    // Don't bother to add a refetch marker if one is already present in a parent.
    const refetchMarker = !isInsideRefetchingParent && spawnedSegment !== null ? 'refetch' : null;
    const requestTree = [
        tree.segment,
        requestTreeChildren,
        null,
        refetchMarker,
        tree.isRootLayout
    ];
    return requestTree;
}
function pingRuntimePrefetches(now, task, route, tree, spawnedRuntimePrefetches, spawnedEntries) {
    // Construct a request tree (FlightRouterState) for a runtime prefetch. If
    // a segment is part of the runtime prefetch, the tree is constructed by
    // diffing against what's already in the prefetch cache. Otherwise, we send
    // a regular FlightRouterState with no special markers.
    //
    // See pingRouteTreeAndIncludeDynamicData for details.
    if (spawnedRuntimePrefetches.has(tree.requestKey)) {
        // This segment needs a runtime prefetch.
        return pingRouteTreeAndIncludeDynamicData(now, task, route, tree, false, spawnedEntries, _types.FetchStrategy.PPRRuntime);
    }
    let requestTreeChildren = {};
    const slots = tree.slots;
    if (slots !== null) {
        for(const parallelRouteKey in slots){
            const childTree = slots[parallelRouteKey];
            requestTreeChildren[parallelRouteKey] = pingRuntimePrefetches(now, task, route, childTree, spawnedRuntimePrefetches, spawnedEntries);
        }
    }
    // This segment is not part of the runtime prefetch. Clone the base tree.
    const requestTree = [
        tree.segment,
        requestTreeChildren,
        null,
        null
    ];
    return requestTree;
}
function pingStaticSegmentData(now, task, route, segment, routeKey, tree) {
    switch(segment.status){
        case _cache.EntryStatus.Empty:
            // Upgrade to Pending so we know there's already a request in progress
            spawnPrefetchSubtask((0, _cache.fetchSegmentOnCacheMiss)(route, (0, _cache.upgradeToPendingSegment)(segment, _types.FetchStrategy.PPR), routeKey, tree));
            break;
        case _cache.EntryStatus.Pending:
            {
                // There's already a request in progress. Depending on what kind of
                // request it is, we may want to revalidate it.
                switch(segment.fetchStrategy){
                    case _types.FetchStrategy.PPR:
                    case _types.FetchStrategy.PPRRuntime:
                    case _types.FetchStrategy.Full:
                        break;
                    case _types.FetchStrategy.LoadingBoundary:
                        // There's a pending request, but because it's using the old
                        // prefetching strategy, we can't be sure if it will be fulfilled by
                        // the response — it might be inside the loading boundary. Perform
                        // a revalidation, but because it's speculative, wait to do it at
                        // background priority.
                        if (background(task)) {
                            // TODO: Instead of speculatively revalidating, consider including
                            // `hasLoading` in the route tree prefetch response.
                            pingPPRSegmentRevalidation(now, route, routeKey, tree);
                        }
                        break;
                    default:
                        segment.fetchStrategy;
                }
                break;
            }
        case _cache.EntryStatus.Rejected:
            {
                // The existing entry in the cache was rejected. Depending on how it
                // was originally fetched, we may or may not want to revalidate it.
                switch(segment.fetchStrategy){
                    case _types.FetchStrategy.PPR:
                    case _types.FetchStrategy.PPRRuntime:
                    case _types.FetchStrategy.Full:
                        break;
                    case _types.FetchStrategy.LoadingBoundary:
                        // There's a rejected entry, but it was fetched using the loading
                        // boundary strategy. So the reason it wasn't returned by the server
                        // might just be because it was inside a loading boundary. Or because
                        // there was a dynamic rewrite. Revalidate it using the per-
                        // segment strategy.
                        //
                        // Because a rejected segment will definitely prevent the segment (and
                        // all of its children) from rendering, we perform this revalidation
                        // immediately instead of deferring it to a background task.
                        pingPPRSegmentRevalidation(now, route, routeKey, tree);
                        break;
                    default:
                        segment.fetchStrategy;
                }
                break;
            }
        case _cache.EntryStatus.Fulfilled:
            break;
        default:
            segment;
    }
// Segments do not have dependent tasks, so once the prefetch is initiated,
// there's nothing else for us to do (except write the server data into the
// entry, which is handled by `fetchSegmentOnCacheMiss`).
}
function pingPPRSegmentRevalidation(now, route, routeKey, tree) {
    const revalidatingSegment = (0, _cache.readOrCreateRevalidatingSegmentEntry)(now, _types.FetchStrategy.PPR, route, tree);
    switch(revalidatingSegment.status){
        case _cache.EntryStatus.Empty:
            // Spawn a prefetch request and upsert the segment into the cache
            // upon completion.
            upsertSegmentOnCompletion(spawnPrefetchSubtask((0, _cache.fetchSegmentOnCacheMiss)(route, (0, _cache.upgradeToPendingSegment)(revalidatingSegment, _types.FetchStrategy.PPR), routeKey, tree)), (0, _varypath.getSegmentVaryPathForRequest)(_types.FetchStrategy.PPR, tree));
            break;
        case _cache.EntryStatus.Pending:
            break;
        case _cache.EntryStatus.Fulfilled:
        case _cache.EntryStatus.Rejected:
            break;
        default:
            revalidatingSegment;
    }
}
function pingFullSegmentRevalidation(now, route, tree, fetchStrategy) {
    const revalidatingSegment = (0, _cache.readOrCreateRevalidatingSegmentEntry)(now, fetchStrategy, route, tree);
    if (revalidatingSegment.status === _cache.EntryStatus.Empty) {
        // During a Full/PPRRuntime prefetch, a single dynamic request is made for all the
        // segments that we need. So we don't initiate a request here directly. By
        // returning a pending entry from this function, it signals to the caller
        // that this segment should be included in the request that's sent to
        // the server.
        const pendingSegment = (0, _cache.upgradeToPendingSegment)(revalidatingSegment, fetchStrategy);
        upsertSegmentOnCompletion((0, _cache.waitForSegmentCacheEntry)(pendingSegment), (0, _varypath.getSegmentVaryPathForRequest)(fetchStrategy, tree));
        return pendingSegment;
    } else {
        // There's already a revalidation in progress.
        const nonEmptyRevalidatingSegment = revalidatingSegment;
        if ((0, _cache.canNewFetchStrategyProvideMoreContent)(nonEmptyRevalidatingSegment.fetchStrategy, fetchStrategy)) {
            // The existing revalidation was fetched using a less specific strategy.
            // Reset it and start a new revalidation.
            const emptySegment = (0, _cache.overwriteRevalidatingSegmentCacheEntry)(fetchStrategy, route, tree);
            const pendingSegment = (0, _cache.upgradeToPendingSegment)(emptySegment, fetchStrategy);
            upsertSegmentOnCompletion((0, _cache.waitForSegmentCacheEntry)(pendingSegment), (0, _varypath.getSegmentVaryPathForRequest)(fetchStrategy, tree));
            return pendingSegment;
        }
        switch(nonEmptyRevalidatingSegment.status){
            case _cache.EntryStatus.Pending:
                // There's already an in-progress prefetch that includes this segment.
                return null;
            case _cache.EntryStatus.Fulfilled:
            case _cache.EntryStatus.Rejected:
                // A previous revalidation attempt finished, but we chose not to replace
                // the existing entry in the cache. Don't try again until or unless the
                // revalidation entry expires.
                return null;
            default:
                nonEmptyRevalidatingSegment;
                return null;
        }
    }
}
const noop = ()=>{};
function upsertSegmentOnCompletion(promise, varyPath) {
    // Wait for a segment to finish loading, then upsert it into the cache
    promise.then((fulfilled)=>{
        if (fulfilled !== null) {
            // Received new data. Attempt to replace the existing entry in the cache.
            (0, _cache.upsertSegmentEntry)(Date.now(), varyPath, fulfilled);
        }
    }, noop);
}
function doesCurrentSegmentMatchCachedSegment(route, currentSegment, cachedSegment) {
    if (cachedSegment === _segment.PAGE_SEGMENT_KEY) {
        // In the FlightRouterState stored by the router, the page segment has the
        // rendered search params appended to the name of the segment. In the
        // prefetch cache, however, this is stored separately. So, when comparing
        // the router's current FlightRouterState to the cached FlightRouterState,
        // we need to make sure we compare both parts of the segment.
        // TODO: This is not modeled clearly. We use the same type,
        // FlightRouterState, for both the CacheNode tree _and_ the prefetch cache
        // _and_ the server response format, when conceptually those are three
        // different things and treated in different ways. We should encode more of
        // this information into the type design so mistakes are less likely.
        return currentSegment === (0, _segment.addSearchParamsIfPageSegment)(_segment.PAGE_SEGMENT_KEY, Object.fromEntries(new URLSearchParams(route.renderedSearch)));
    }
    // Non-page segments are compared using the same function as the server
    return (0, _matchsegments.matchSegment)(cachedSegment, currentSegment);
}
// -----------------------------------------------------------------------------
// The remainder of the module is a MinHeap implementation. Try not to put any
// logic below here unless it's related to the heap algorithm. We can extract
// this to a separate module if/when we need multiple kinds of heaps.
// -----------------------------------------------------------------------------
function compareQueuePriority(a, b) {
    // Since the queue is a MinHeap, this should return a positive number if b is
    // higher priority than a, and a negative number if a is higher priority
    // than b.
    // `priority` is an integer, where higher numbers are higher priority.
    const priorityDiff = b.priority - a.priority;
    if (priorityDiff !== 0) {
        return priorityDiff;
    }
    // If the priority is the same, check which phase the prefetch is in — is it
    // prefetching the route tree, or the segments? Route trees are prioritized.
    const phaseDiff = b.phase - a.phase;
    if (phaseDiff !== 0) {
        return phaseDiff;
    }
    // Finally, check the insertion order. `sortId` is an incrementing counter
    // assigned to prefetches. We want to process the newest prefetches first.
    return b.sortId - a.sortId;
}
function heapPush(heap, node) {
    const index = heap.length;
    heap.push(node);
    node._heapIndex = index;
    heapSiftUp(heap, node, index);
}
function heapPeek(heap) {
    return heap.length === 0 ? null : heap[0];
}
function heapPop(heap) {
    if (heap.length === 0) {
        return null;
    }
    const first = heap[0];
    first._heapIndex = -1;
    const last = heap.pop();
    if (last !== first) {
        heap[0] = last;
        last._heapIndex = 0;
        heapSiftDown(heap, last, 0);
    }
    return first;
}
function heapDelete(heap, node) {
    const index = node._heapIndex;
    if (index !== -1) {
        node._heapIndex = -1;
        if (heap.length !== 0) {
            const last = heap.pop();
            if (last !== node) {
                heap[index] = last;
                last._heapIndex = index;
                heapSiftDown(heap, last, index);
            }
        }
    }
}
function heapResift(heap, node) {
    const index = node._heapIndex;
    if (index !== -1) {
        if (index === 0) {
            heapSiftDown(heap, node, 0);
        } else {
            const parentIndex = index - 1 >>> 1;
            const parent = heap[parentIndex];
            if (compareQueuePriority(parent, node) > 0) {
                // The parent is larger. Sift up.
                heapSiftUp(heap, node, index);
            } else {
                // The parent is smaller (or equal). Sift down.
                heapSiftDown(heap, node, index);
            }
        }
    }
}
function heapSiftUp(heap, node, i) {
    let index = i;
    while(index > 0){
        const parentIndex = index - 1 >>> 1;
        const parent = heap[parentIndex];
        if (compareQueuePriority(parent, node) > 0) {
            // The parent is larger. Swap positions.
            heap[parentIndex] = node;
            node._heapIndex = parentIndex;
            heap[index] = parent;
            parent._heapIndex = index;
            index = parentIndex;
        } else {
            // The parent is smaller. Exit.
            return;
        }
    }
}
function heapSiftDown(heap, node, i) {
    let index = i;
    const length = heap.length;
    const halfLength = length >>> 1;
    while(index < halfLength){
        const leftIndex = (index + 1) * 2 - 1;
        const left = heap[leftIndex];
        const rightIndex = leftIndex + 1;
        const right = heap[rightIndex];
        // If the left or right node is smaller, swap with the smaller of those.
        if (compareQueuePriority(left, node) < 0) {
            if (rightIndex < length && compareQueuePriority(right, left) < 0) {
                heap[index] = right;
                right._heapIndex = index;
                heap[rightIndex] = node;
                node._heapIndex = rightIndex;
                index = rightIndex;
            } else {
                heap[index] = left;
                left._heapIndex = index;
                heap[leftIndex] = node;
                node._heapIndex = leftIndex;
                index = leftIndex;
            }
        } else if (rightIndex < length && compareQueuePriority(right, node) < 0) {
            heap[index] = right;
            right._heapIndex = index;
            heap[rightIndex] = node;
            node._heapIndex = rightIndex;
            index = rightIndex;
        } else {
            // Neither child is smaller. Exit.
            return;
        }
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=scheduler.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/app-router-utils.js [app-client] (ecmascript)", (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/app-router-utils.js [app-client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/app-router-utils.js [app-client] (ecmascript)\n- Execution of <ModuleChunkItem as EcmascriptChunkItem>::content_with_async_module_info failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)", (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)\n- Execution of <ModuleChunkItem as EcmascriptChunkItem>::content_with_async_module_info failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/segment-cache/cache.js [app-client] (ecmascript)", (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/segment-cache/cache.js [app-client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/segment-cache/cache.js [app-client] (ecmascript)\n- Execution of <ModuleChunkItem as EcmascriptChunkItem>::content_with_async_module_info failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/segment-cache/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "navigate", {
    enumerable: true,
    get: function() {
        return navigate;
    }
});
const _fetchserverresponse = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js [app-client] (ecmascript)");
const _pprnavigations = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/ppr-navigations.js [app-client] (ecmascript)");
const _createhreffromurl = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
const _cache = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/segment-cache/cache.js [app-client] (ecmascript)");
const _cachekey = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/segment-cache/cache-key.js [app-client] (ecmascript)");
const _segment = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/shared/lib/segment.js [app-client] (ecmascript)");
const _types = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)");
function navigate(url, currentUrl, currentCacheNode, currentFlightRouterState, nextUrl, shouldScroll, accumulation) {
    const now = Date.now();
    const href = url.href;
    // We special case navigations to the exact same URL as the current location.
    // It's a common UI pattern for apps to refresh when you click a link to the
    // current page. So when this happens, we refresh the dynamic data in the page
    // segments.
    //
    // Note that this does not apply if the any part of the hash or search query
    // has changed. This might feel a bit weird but it makes more sense when you
    // consider that the way to trigger this behavior is to click the same link
    // multiple times.
    //
    // TODO: We should probably refresh the *entire* route when this case occurs,
    // not just the page segments. Essentially treating it the same as a refresh()
    // triggered by an action, which is the more explicit way of modeling the UI
    // pattern described above.
    //
    // Also note that this only refreshes the dynamic data, not static/ cached
    // data. If the page segment is fully static and prefetched, the request is
    // skipped. (This is also how refresh() works.)
    const isSamePageNavigation = // consider storing the current URL in the router state instead of reading
    // from the location object. In practice I don't think this matters much
    // since we keep them in sync anyway, but having two sources of truth can
    // lead to subtle bugs and race conditions.
    href === window.location.href;
    const cacheKey = (0, _cachekey.createCacheKey)(href, nextUrl);
    const route = (0, _cache.readRouteCacheEntry)(now, cacheKey);
    if (route !== null && route.status === _cache.EntryStatus.Fulfilled) {
        // We have a matching prefetch.
        const snapshot = readRenderSnapshotFromCache(now, route, route.tree);
        const prefetchFlightRouterState = snapshot.flightRouterState;
        const prefetchSeedData = snapshot.seedData;
        const headSnapshot = readHeadSnapshotFromCache(now, route);
        const prefetchHead = headSnapshot.rsc;
        const isPrefetchHeadPartial = headSnapshot.isPartial;
        // TODO: The "canonicalUrl" stored in the cache doesn't include the hash,
        // because hash entries do not vary by hash fragment. However, the one
        // we set in the router state *does* include the hash, and it's used to
        // sync with the actual browser location. To make this less of a refactor
        // hazard, we should always track the hash separately from the rest of
        // the URL.
        const newCanonicalUrl = route.canonicalUrl + url.hash;
        const renderedSearch = route.renderedSearch;
        return navigateUsingPrefetchedRouteTree(now, url, currentUrl, nextUrl, isSamePageNavigation, currentCacheNode, currentFlightRouterState, prefetchFlightRouterState, prefetchSeedData, prefetchHead, isPrefetchHeadPartial, newCanonicalUrl, renderedSearch, shouldScroll, url.hash);
    }
    // There was no matching route tree in the cache. Let's see if we can
    // construct an "optimistic" route tree.
    //
    // Do not construct an optimistic route tree if there was a cache hit, but
    // the entry has a rejected status, since it may have been rejected due to a
    // rewrite or redirect based on the search params.
    //
    // TODO: There are multiple reasons a prefetch might be rejected; we should
    // track them explicitly and choose what to do here based on that.
    if (route === null || route.status !== _cache.EntryStatus.Rejected) {
        const optimisticRoute = (0, _cache.requestOptimisticRouteCacheEntry)(now, url, nextUrl);
        if (optimisticRoute !== null) {
            // We have an optimistic route tree. Proceed with the normal flow.
            const snapshot = readRenderSnapshotFromCache(now, optimisticRoute, optimisticRoute.tree);
            const prefetchFlightRouterState = snapshot.flightRouterState;
            const prefetchSeedData = snapshot.seedData;
            const headSnapshot = readHeadSnapshotFromCache(now, optimisticRoute);
            const prefetchHead = headSnapshot.rsc;
            const isPrefetchHeadPartial = headSnapshot.isPartial;
            const newCanonicalUrl = optimisticRoute.canonicalUrl + url.hash;
            const newRenderedSearch = optimisticRoute.renderedSearch;
            return navigateUsingPrefetchedRouteTree(now, url, currentUrl, nextUrl, isSamePageNavigation, currentCacheNode, currentFlightRouterState, prefetchFlightRouterState, prefetchSeedData, prefetchHead, isPrefetchHeadPartial, newCanonicalUrl, newRenderedSearch, shouldScroll, url.hash);
        }
    }
    // There's no matching prefetch for this route in the cache.
    let collectedDebugInfo = accumulation.collectedDebugInfo ?? [];
    if (accumulation.collectedDebugInfo === undefined) {
        collectedDebugInfo = accumulation.collectedDebugInfo = [];
    }
    return {
        tag: _types.NavigationResultTag.Async,
        data: navigateDynamicallyWithNoPrefetch(now, url, currentUrl, nextUrl, isSamePageNavigation, currentCacheNode, currentFlightRouterState, shouldScroll, url.hash, collectedDebugInfo)
    };
}
function navigateUsingPrefetchedRouteTree(now, url, currentUrl, nextUrl, isSamePageNavigation, currentCacheNode, currentFlightRouterState, prefetchFlightRouterState, prefetchSeedData, prefetchHead, isPrefetchHeadPartial, canonicalUrl, renderedSearch, shouldScroll, hash) {
    // Recursively construct a prefetch tree by reading from the Segment Cache. To
    // maintain compatibility, we output the same data structures as the old
    // prefetching implementation: FlightRouterState and CacheNodeSeedData.
    // TODO: Eventually updateCacheNodeOnNavigation (or the equivalent) should
    // read from the Segment Cache directly. It's only structured this way for now
    // so we can share code with the old prefetching implementation.
    const scrollableSegments = [];
    const task = (0, _pprnavigations.startPPRNavigation)(now, currentUrl, currentCacheNode, currentFlightRouterState, prefetchFlightRouterState, prefetchSeedData, prefetchHead, isPrefetchHeadPartial, isSamePageNavigation, scrollableSegments);
    if (task !== null) {
        const dynamicRequestTree = task.dynamicRequestTree;
        if (dynamicRequestTree !== null) {
            const promiseForDynamicServerResponse = (0, _fetchserverresponse.fetchServerResponse)(new URL(canonicalUrl, url.origin), {
                flightRouterState: dynamicRequestTree,
                nextUrl
            });
            (0, _pprnavigations.listenForDynamicRequest)(task, promiseForDynamicServerResponse);
        } else {
        // The prefetched tree does not contain dynamic holes — it's
        // fully static. We can skip the dynamic request.
        }
        return navigationTaskToResult(task, currentCacheNode, canonicalUrl, renderedSearch, scrollableSegments, shouldScroll, hash);
    }
    // The server sent back an empty tree patch. There's nothing to update, except
    // possibly the URL.
    return {
        tag: _types.NavigationResultTag.NoOp,
        data: {
            canonicalUrl,
            shouldScroll
        }
    };
}
function navigationTaskToResult(task, currentCacheNode, canonicalUrl, renderedSearch, scrollableSegments, shouldScroll, hash) {
    const flightRouterState = task.route;
    if (flightRouterState === null) {
        // When no router state is provided, it signals that we should perform an
        // MPA navigation.
        return {
            tag: _types.NavigationResultTag.MPA,
            data: canonicalUrl
        };
    }
    const newCacheNode = task.node;
    return {
        tag: _types.NavigationResultTag.Success,
        data: {
            flightRouterState,
            cacheNode: newCacheNode !== null ? newCacheNode : currentCacheNode,
            canonicalUrl,
            renderedSearch,
            scrollableSegments,
            shouldScroll,
            hash
        }
    };
}
function readRenderSnapshotFromCache(now, route, tree) {
    let childRouterStates = {};
    let childSeedDatas = {};
    const slots = tree.slots;
    if (slots !== null) {
        for(const parallelRouteKey in slots){
            const childTree = slots[parallelRouteKey];
            const childResult = readRenderSnapshotFromCache(now, route, childTree);
            childRouterStates[parallelRouteKey] = childResult.flightRouterState;
            childSeedDatas[parallelRouteKey] = childResult.seedData;
        }
    }
    let rsc = null;
    let loading = null;
    let isPartial = true;
    const segmentEntry = (0, _cache.readSegmentCacheEntry)(now, tree.varyPath);
    if (segmentEntry !== null) {
        switch(segmentEntry.status){
            case _cache.EntryStatus.Fulfilled:
                {
                    // Happy path: a cache hit
                    rsc = segmentEntry.rsc;
                    loading = segmentEntry.loading;
                    isPartial = segmentEntry.isPartial;
                    break;
                }
            case _cache.EntryStatus.Pending:
                {
                    // We haven't received data for this segment yet, but there's already
                    // an in-progress request. Since it's extremely likely to arrive
                    // before the dynamic data response, we might as well use it.
                    const promiseForFulfilledEntry = (0, _cache.waitForSegmentCacheEntry)(segmentEntry);
                    rsc = promiseForFulfilledEntry.then((entry)=>entry !== null ? entry.rsc : null);
                    loading = promiseForFulfilledEntry.then((entry)=>entry !== null ? entry.loading : null);
                    // Since we don't know yet whether the segment is partial or fully
                    // static, we must assume it's partial; we can't skip the
                    // dynamic request.
                    isPartial = true;
                    break;
                }
            case _cache.EntryStatus.Empty:
            case _cache.EntryStatus.Rejected:
                break;
            default:
                segmentEntry;
        }
    }
    // The navigation implementation expects the search params to be
    // included in the segment. However, the Segment Cache tracks search
    // params separately from the rest of the segment key. So we need to
    // add them back here.
    //
    // See corresponding comment in convertFlightRouterStateToTree.
    //
    // TODO: What we should do instead is update the navigation diffing
    // logic to compare search params explicitly. This is a temporary
    // solution until more of the Segment Cache implementation has settled.
    const segment = (0, _segment.addSearchParamsIfPageSegment)(tree.segment, Object.fromEntries(new URLSearchParams(route.renderedSearch)));
    // We don't need this information in a render snapshot, so this can just be a placeholder.
    const hasRuntimePrefetch = false;
    return {
        flightRouterState: [
            segment,
            childRouterStates,
            null,
            null,
            tree.isRootLayout
        ],
        seedData: [
            rsc,
            childSeedDatas,
            loading,
            isPartial,
            hasRuntimePrefetch
        ]
    };
}
function readHeadSnapshotFromCache(now, route) {
    // Same as readRenderSnapshotFromCache, but for the head
    let rsc = null;
    let isPartial = true;
    const segmentEntry = (0, _cache.readSegmentCacheEntry)(now, route.metadata.varyPath);
    if (segmentEntry !== null) {
        switch(segmentEntry.status){
            case _cache.EntryStatus.Fulfilled:
                {
                    rsc = segmentEntry.rsc;
                    isPartial = segmentEntry.isPartial;
                    break;
                }
            case _cache.EntryStatus.Pending:
                {
                    const promiseForFulfilledEntry = (0, _cache.waitForSegmentCacheEntry)(segmentEntry);
                    rsc = promiseForFulfilledEntry.then((entry)=>entry !== null ? entry.rsc : null);
                    isPartial = true;
                    break;
                }
            case _cache.EntryStatus.Empty:
            case _cache.EntryStatus.Rejected:
                break;
            default:
                segmentEntry;
        }
    }
    return {
        rsc,
        isPartial
    };
}
async function navigateDynamicallyWithNoPrefetch(now, url, currentUrl, nextUrl, isSamePageNavigation, currentCacheNode, currentFlightRouterState, shouldScroll, hash, collectedDebugInfo) {
    // Runs when a navigation happens but there's no cached prefetch we can use.
    // Don't bother to wait for a prefetch response; go straight to a full
    // navigation that contains both static and dynamic data in a single stream.
    // (This is unlike the old navigation implementation, which instead blocks
    // the dynamic request until a prefetch request is received.)
    //
    // To avoid duplication of logic, we're going to pretend that the tree
    // returned by the dynamic request is, in fact, a prefetch tree. Then we can
    // use the same server response to write the actual data into the CacheNode
    // tree. So it's the same flow as the "happy path" (prefetch, then
    // navigation), except we use a single server response for both stages.
    const promiseForDynamicServerResponse = (0, _fetchserverresponse.fetchServerResponse)(url, {
        flightRouterState: currentFlightRouterState,
        nextUrl
    });
    const result = await promiseForDynamicServerResponse;
    if (typeof result === 'string') {
        // This is an MPA navigation.
        const newUrl = result;
        return {
            tag: _types.NavigationResultTag.MPA,
            data: newUrl
        };
    }
    const { flightData, canonicalUrl, renderedSearch, debugInfo: debugInfoFromResponse } = result;
    if (debugInfoFromResponse !== null) {
        collectedDebugInfo.push(...debugInfoFromResponse);
    }
    // Since the response format of dynamic requests and prefetches is slightly
    // different, we'll need to massage the data a bit. Create FlightRouterState
    // tree that simulates what we'd receive as the result of a prefetch.
    const prefetchFlightRouterState = simulatePrefetchTreeUsingDynamicTreePatch(currentFlightRouterState, flightData);
    // In our simulated prefetch payload, we pretend that there's no seed data
    // nor a prefetch head.
    const prefetchSeedData = null;
    const prefetchHead = null;
    const isPrefetchHeadPartial = true;
    // Now we proceed exactly as we would for normal navigation.
    const scrollableSegments = [];
    const task = (0, _pprnavigations.startPPRNavigation)(now, currentUrl, currentCacheNode, currentFlightRouterState, prefetchFlightRouterState, prefetchSeedData, prefetchHead, isPrefetchHeadPartial, isSamePageNavigation, scrollableSegments);
    if (task !== null) {
        // In this case, we've already sent the dynamic request, so we don't
        // actually use the request tree created by `startPPRNavigation`,
        // except to check if it contains dynamic holes.
        //
        // This is almost always true, but it could be false if all the segment data
        // was present in the cache, but the route tree was not. E.g. navigating
        // to a URL that was not prefetched but rewrites to a different URL
        // that was.
        const hasDynamicHoles = task.dynamicRequestTree !== null;
        if (hasDynamicHoles) {
            (0, _pprnavigations.listenForDynamicRequest)(task, promiseForDynamicServerResponse);
        } else {
        // The prefetched tree does not contain dynamic holes — it's
        // fully static. We don't need to process the server response further.
        }
        return navigationTaskToResult(task, currentCacheNode, (0, _createhreffromurl.createHrefFromUrl)(canonicalUrl), renderedSearch, scrollableSegments, shouldScroll, hash);
    }
    // The server sent back an empty tree patch. There's nothing to update, except
    // possibly the URL.
    return {
        tag: _types.NavigationResultTag.NoOp,
        data: {
            canonicalUrl: (0, _createhreffromurl.createHrefFromUrl)(canonicalUrl),
            shouldScroll
        }
    };
}
function simulatePrefetchTreeUsingDynamicTreePatch(currentTree, flightData) {
    // Takes the current FlightRouterState and applies the router state patch
    // received from the server, to create a full FlightRouterState tree that we
    // can pretend was returned by a prefetch.
    //
    // (It sounds similar to what applyRouterStatePatch does, but it doesn't need
    // to handle stuff like interception routes or diffing since that will be
    // handled later.)
    let baseTree = currentTree;
    for (const { segmentPath, tree: treePatch } of flightData){
        // If the server sends us multiple tree patches, we only need to clone the
        // base tree when applying the first patch. After the first patch, we can
        // apply the remaining patches in place without copying.
        const canMutateInPlace = baseTree !== currentTree;
        baseTree = simulatePrefetchTreeUsingDynamicTreePatchImpl(baseTree, treePatch, segmentPath, canMutateInPlace, 0);
    }
    return baseTree;
}
function simulatePrefetchTreeUsingDynamicTreePatchImpl(baseRouterState, patch, segmentPath, canMutateInPlace, index) {
    if (index === segmentPath.length) {
        // We reached the part of the tree that we need to patch.
        return patch;
    }
    // segmentPath represents the parent path of subtree. It's a repeating
    // pattern of parallel route key and segment:
    //
    //   [string, Segment, string, Segment, string, Segment, ...]
    //
    // This path tells us which part of the base tree to apply the tree patch.
    //
    // NOTE: In the case of a fully dynamic request with no prefetch, we receive
    // the FlightRouterState patch in the same request as the dynamic data.
    // Therefore we don't need to worry about diffing the segment values; we can
    // assume the server sent us a correct result.
    const updatedParallelRouteKey = segmentPath[index];
    // const segment: Segment = segmentPath[index + 1] <-- Not used, see note above
    const baseChildren = baseRouterState[1];
    const newChildren = {};
    for(const parallelRouteKey in baseChildren){
        if (parallelRouteKey === updatedParallelRouteKey) {
            const childBaseRouterState = baseChildren[parallelRouteKey];
            newChildren[parallelRouteKey] = simulatePrefetchTreeUsingDynamicTreePatchImpl(childBaseRouterState, patch, segmentPath, canMutateInPlace, // the end of the segment path.
            index + 2);
        } else {
            // This child is not being patched. Copy it over as-is.
            newChildren[parallelRouteKey] = baseChildren[parallelRouteKey];
        }
    }
    if (canMutateInPlace) {
        // We can mutate the base tree in place, because the base tree is already
        // a clone.
        baseRouterState[1] = newChildren;
        return baseRouterState;
    }
    // Clone all the fields except the children.
    //
    // Based on equivalent logic in apply-router-state-patch-to-tree, but should
    // confirm whether we need to copy all of these fields. Not sure the server
    // ever sends, e.g. the refetch marker.
    const clone = [
        baseRouterState[0],
        newChildren
    ];
    if (2 in baseRouterState) {
        clone[2] = baseRouterState[2];
    }
    if (3 in baseRouterState) {
        clone[3] = baseRouterState[3];
    }
    if (4 in baseRouterState) {
        clone[4] = baseRouterState[4];
    }
    return clone;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/reducers/navigate-reducer.js [app-client] (ecmascript)", (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/reducers/navigate-reducer.js [app-client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/reducers/navigate-reducer.js [app-client] (ecmascript)\n- Execution of <ModuleChunkItem as EcmascriptChunkItem>::content_with_async_module_info failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/fill-lazy-items-till-leaf-with-head.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "fillLazyItemsTillLeafWithHead", {
    enumerable: true,
    get: function() {
        return fillLazyItemsTillLeafWithHead;
    }
});
const _createroutercachekey = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js [app-client] (ecmascript)");
function fillLazyItemsTillLeafWithHead(navigatedAt, newCache, existingCache, routerState, cacheNodeSeedData, head) {
    const isLastSegment = Object.keys(routerState[1]).length === 0;
    if (isLastSegment) {
        newCache.head = head;
        return;
    }
    // Remove segment that we got data for so that it is filled in during rendering of rsc.
    for(const key in routerState[1]){
        const parallelRouteState = routerState[1][key];
        const segmentForParallelRoute = parallelRouteState[0];
        const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segmentForParallelRoute);
        // TODO: We should traverse the cacheNodeSeedData tree instead of the router
        // state tree. Ideally, they would always be the same shape, but because of
        // the loading.js pattern, cacheNodeSeedData sometimes only represents a
        // partial tree. That's why this node is sometimes null. Once PPR lands,
        // loading.js will no longer have special behavior and we can traverse the
        // data tree instead.
        //
        // We should also consider merging the router state tree and the data tree
        // in the response format, so that we don't have to send the keys twice.
        // Then the client can convert them into separate representations.
        const parallelSeedData = cacheNodeSeedData !== null && cacheNodeSeedData[1][key] !== undefined ? cacheNodeSeedData[1][key] : null;
        if (existingCache) {
            const existingParallelRoutesCacheNode = existingCache.parallelRoutes.get(key);
            if (existingParallelRoutesCacheNode) {
                let parallelRouteCacheNode = new Map(existingParallelRoutesCacheNode);
                const existingCacheNode = parallelRouteCacheNode.get(cacheKey);
                let newCacheNode;
                if (parallelSeedData !== null) {
                    // New data was sent from the server.
                    const seedNode = parallelSeedData[0];
                    const loading = parallelSeedData[2];
                    newCacheNode = {
                        lazyData: null,
                        rsc: seedNode,
                        // This is a PPR-only field. When PPR is enabled, we shouldn't hit
                        // this path during a navigation, but until PPR is fully implemented
                        // yet it's possible the existing node does have a non-null
                        // `prefetchRsc`. As an incremental step, we'll just de-opt to the
                        // old behavior — no PPR value.
                        prefetchRsc: null,
                        head: null,
                        prefetchHead: null,
                        loading,
                        parallelRoutes: new Map(existingCacheNode?.parallelRoutes),
                        navigatedAt
                    };
                } else {
                    // No data available for this node. This will trigger a lazy fetch
                    // during render.
                    newCacheNode = {
                        lazyData: null,
                        rsc: null,
                        prefetchRsc: null,
                        head: null,
                        prefetchHead: null,
                        parallelRoutes: new Map(existingCacheNode?.parallelRoutes),
                        loading: null,
                        navigatedAt
                    };
                }
                // Overrides the cache key with the new cache node.
                parallelRouteCacheNode.set(cacheKey, newCacheNode);
                // Traverse deeper to apply the head / fill lazy items till the head.
                fillLazyItemsTillLeafWithHead(navigatedAt, newCacheNode, existingCacheNode, parallelRouteState, parallelSeedData ? parallelSeedData : null, head);
                newCache.parallelRoutes.set(key, parallelRouteCacheNode);
                continue;
            }
        }
        let newCacheNode;
        if (parallelSeedData !== null) {
            // New data was sent from the server.
            const seedNode = parallelSeedData[0];
            const loading = parallelSeedData[2];
            newCacheNode = {
                lazyData: null,
                rsc: seedNode,
                prefetchRsc: null,
                head: null,
                prefetchHead: null,
                parallelRoutes: new Map(),
                loading,
                navigatedAt
            };
        } else {
            // No data available for this node. This will trigger a lazy fetch
            // during render.
            newCacheNode = {
                lazyData: null,
                rsc: null,
                prefetchRsc: null,
                head: null,
                prefetchHead: null,
                parallelRoutes: new Map(),
                loading: null,
                navigatedAt
            };
        }
        const existingParallelRoutes = newCache.parallelRoutes.get(key);
        if (existingParallelRoutes) {
            existingParallelRoutes.set(cacheKey, newCacheNode);
        } else {
            newCache.parallelRoutes.set(key, new Map([
                [
                    cacheKey,
                    newCacheNode
                ]
            ]));
        }
        fillLazyItemsTillLeafWithHead(navigatedAt, newCacheNode, undefined, parallelRouteState, parallelSeedData, head);
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fill-lazy-items-till-leaf-with-head.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/invalidate-cache-by-router-state.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "invalidateCacheByRouterState", {
    enumerable: true,
    get: function() {
        return invalidateCacheByRouterState;
    }
});
const _createroutercachekey = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js [app-client] (ecmascript)");
function invalidateCacheByRouterState(newCache, existingCache, routerState) {
    // Remove segment that we got data for so that it is filled in during rendering of rsc.
    for(const key in routerState[1]){
        const segmentForParallelRoute = routerState[1][key][0];
        const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segmentForParallelRoute);
        const existingParallelRoutesCacheNode = existingCache.parallelRoutes.get(key);
        if (existingParallelRoutesCacheNode) {
            let parallelRouteCacheNode = new Map(existingParallelRoutesCacheNode);
            parallelRouteCacheNode.delete(cacheKey);
            newCache.parallelRoutes.set(key, parallelRouteCacheNode);
        }
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=invalidate-cache-by-router-state.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/fill-cache-with-new-subtree-data.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    fillCacheWithNewSubTreeData: null,
    fillCacheWithNewSubTreeDataButOnlyLoading: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    fillCacheWithNewSubTreeData: function() {
        return fillCacheWithNewSubTreeData;
    },
    fillCacheWithNewSubTreeDataButOnlyLoading: function() {
        return fillCacheWithNewSubTreeDataButOnlyLoading;
    }
});
const _invalidatecachebyrouterstate = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/invalidate-cache-by-router-state.js [app-client] (ecmascript)");
const _filllazyitemstillleafwithhead = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/fill-lazy-items-till-leaf-with-head.js [app-client] (ecmascript)");
const _createroutercachekey = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js [app-client] (ecmascript)");
const _segment = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/shared/lib/segment.js [app-client] (ecmascript)");
/**
 * Common logic for filling cache with new sub tree data.
 */ function fillCacheHelper(navigatedAt, newCache, existingCache, flightData, fillLazyItems) {
    const { segmentPath, seedData: cacheNodeSeedData, tree: treePatch, head } = flightData;
    let newCacheNode = newCache;
    let existingCacheNode = existingCache;
    for(let i = 0; i < segmentPath.length; i += 2){
        const parallelRouteKey = segmentPath[i];
        const segment = segmentPath[i + 1];
        // segmentPath is a repeating tuple of parallelRouteKey and segment
        // we know we've hit the last entry we've reached our final pair
        const isLastEntry = i === segmentPath.length - 2;
        const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segment);
        const existingChildSegmentMap = existingCacheNode.parallelRoutes.get(parallelRouteKey);
        if (!existingChildSegmentMap) {
            continue;
        }
        let childSegmentMap = newCacheNode.parallelRoutes.get(parallelRouteKey);
        if (!childSegmentMap || childSegmentMap === existingChildSegmentMap) {
            childSegmentMap = new Map(existingChildSegmentMap);
            newCacheNode.parallelRoutes.set(parallelRouteKey, childSegmentMap);
        }
        const existingChildCacheNode = existingChildSegmentMap.get(cacheKey);
        let childCacheNode = childSegmentMap.get(cacheKey);
        if (isLastEntry) {
            if (cacheNodeSeedData && (!childCacheNode || !childCacheNode.lazyData || childCacheNode === existingChildCacheNode)) {
                const rsc = cacheNodeSeedData[0];
                const loading = cacheNodeSeedData[2];
                childCacheNode = {
                    lazyData: null,
                    // When `fillLazyItems` is false, we only want to fill the RSC data for the layout,
                    // not the page segment.
                    rsc: fillLazyItems || segment !== _segment.PAGE_SEGMENT_KEY ? rsc : null,
                    prefetchRsc: null,
                    head: null,
                    prefetchHead: null,
                    loading,
                    parallelRoutes: fillLazyItems && existingChildCacheNode ? new Map(existingChildCacheNode.parallelRoutes) : new Map(),
                    navigatedAt
                };
                if (existingChildCacheNode && fillLazyItems) {
                    (0, _invalidatecachebyrouterstate.invalidateCacheByRouterState)(childCacheNode, existingChildCacheNode, treePatch);
                }
                if (fillLazyItems) {
                    (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(navigatedAt, childCacheNode, existingChildCacheNode, treePatch, cacheNodeSeedData, head);
                }
                childSegmentMap.set(cacheKey, childCacheNode);
            }
            continue;
        }
        if (!childCacheNode || !existingChildCacheNode) {
            continue;
        }
        if (childCacheNode === existingChildCacheNode) {
            childCacheNode = {
                lazyData: childCacheNode.lazyData,
                rsc: childCacheNode.rsc,
                prefetchRsc: childCacheNode.prefetchRsc,
                head: childCacheNode.head,
                prefetchHead: childCacheNode.prefetchHead,
                parallelRoutes: new Map(childCacheNode.parallelRoutes),
                loading: childCacheNode.loading
            };
            childSegmentMap.set(cacheKey, childCacheNode);
        }
        // Move deeper into the cache nodes
        newCacheNode = childCacheNode;
        existingCacheNode = existingChildCacheNode;
    }
}
function fillCacheWithNewSubTreeData(navigatedAt, newCache, existingCache, flightData) {
    fillCacheHelper(navigatedAt, newCache, existingCache, flightData, true);
}
function fillCacheWithNewSubTreeDataButOnlyLoading(navigatedAt, newCache, existingCache, flightData) {
    fillCacheHelper(navigatedAt, newCache, existingCache, flightData, false);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fill-cache-with-new-subtree-data.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/apply-flight-data.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "applyFlightData", {
    enumerable: true,
    get: function() {
        return applyFlightData;
    }
});
const _filllazyitemstillleafwithhead = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/fill-lazy-items-till-leaf-with-head.js [app-client] (ecmascript)");
const _fillcachewithnewsubtreedata = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/fill-cache-with-new-subtree-data.js [app-client] (ecmascript)");
function applyFlightData(navigatedAt, existingCache, cache, flightData) {
    // The one before last item is the router state tree patch
    const { tree: treePatch, seedData, head, isRootRender } = flightData;
    // Handles case where prefetch only returns the router tree patch without rendered components.
    if (seedData === null) {
        return false;
    }
    if (isRootRender) {
        const rsc = seedData[0];
        const loading = seedData[2];
        cache.loading = loading;
        cache.rsc = rsc;
        // This is a PPR-only field. When PPR is enabled, we shouldn't hit
        // this path during a navigation, but until PPR is fully implemented
        // yet it's possible the existing node does have a non-null
        // `prefetchRsc`. As an incremental step, we'll just de-opt to the
        // old behavior — no PPR value.
        cache.prefetchRsc = null;
        (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(navigatedAt, cache, existingCache, treePatch, seedData, head);
    } else {
        // Copy rsc for the root node of the cache.
        cache.rsc = existingCache.rsc;
        // This is a PPR-only field. Unlike the previous branch, since we're
        // just cloning the existing cache node, we might as well keep the
        // PPR value, if it exists.
        cache.prefetchRsc = existingCache.prefetchRsc;
        cache.parallelRoutes = new Map(existingCache.parallelRoutes);
        cache.loading = existingCache.loading;
        // Create a copy of the existing cache with the rsc applied.
        (0, _fillcachewithnewsubtreedata.fillCacheWithNewSubTreeData)(navigatedAt, cache, existingCache, flightData);
    }
    return true;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=apply-flight-data.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/refetch-inactive-parallel-segments.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    addRefreshMarkerToActiveParallelSegments: null,
    refreshInactiveParallelSegments: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    addRefreshMarkerToActiveParallelSegments: function() {
        return addRefreshMarkerToActiveParallelSegments;
    },
    refreshInactiveParallelSegments: function() {
        return refreshInactiveParallelSegments;
    }
});
const _applyflightdata = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/apply-flight-data.js [app-client] (ecmascript)");
const _fetchserverresponse = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js [app-client] (ecmascript)");
const _segment = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/shared/lib/segment.js [app-client] (ecmascript)");
async function refreshInactiveParallelSegments(options) {
    const fetchedSegments = new Set();
    await refreshInactiveParallelSegmentsImpl({
        ...options,
        rootTree: options.updatedTree,
        fetchedSegments
    });
}
async function refreshInactiveParallelSegmentsImpl({ navigatedAt, state, updatedTree, updatedCache, includeNextUrl, fetchedSegments, rootTree = updatedTree, canonicalUrl }) {
    const [, parallelRoutes, refetchPath, refetchMarker] = updatedTree;
    const fetchPromises = [];
    if (refetchPath && refetchPath !== canonicalUrl && refetchMarker === 'refresh' && // it's possible for the tree to contain multiple segments that contain data at the same URL
    // we keep track of them so we can dedupe the requests
    !fetchedSegments.has(refetchPath)) {
        fetchedSegments.add(refetchPath) // Mark this URL as fetched
        ;
        // Eagerly kick off the fetch for the refetch path & the parallel routes. This should be fine to do as they each operate
        // independently on their own cache nodes, and `applyFlightData` will copy anything it doesn't care about from the existing cache.
        const fetchPromise = (0, _fetchserverresponse.fetchServerResponse)(new URL(refetchPath, location.origin), {
            // refetch from the root of the updated tree, otherwise it will be scoped to the current segment
            // and might not contain the data we need to patch in interception route data (such as dynamic params from a previous segment)
            flightRouterState: [
                rootTree[0],
                rootTree[1],
                rootTree[2],
                'refetch'
            ],
            nextUrl: includeNextUrl ? state.nextUrl : null
        }).then((result)=>{
            if (typeof result !== 'string') {
                const { flightData } = result;
                for (const flightDataPath of flightData){
                    // we only pass the new cache as this function is called after clearing the router cache
                    // and filling in the new page data from the server. Meaning the existing cache is actually the cache that's
                    // just been created & has been written to, but hasn't been "committed" yet.
                    (0, _applyflightdata.applyFlightData)(navigatedAt, updatedCache, updatedCache, flightDataPath);
                }
            } else {
            // When result is a string, it suggests that the server response should have triggered an MPA navigation
            // I'm not 100% sure of this decision, but it seems unlikely that we'd want to introduce a redirect side effect
            // when refreshing on-screen data, so handling this has been ommitted.
            }
        });
        fetchPromises.push(fetchPromise);
    }
    for(const key in parallelRoutes){
        const parallelFetchPromise = refreshInactiveParallelSegmentsImpl({
            navigatedAt,
            state,
            updatedTree: parallelRoutes[key],
            updatedCache,
            includeNextUrl,
            fetchedSegments,
            rootTree,
            canonicalUrl
        });
        fetchPromises.push(parallelFetchPromise);
    }
    await Promise.all(fetchPromises);
}
function addRefreshMarkerToActiveParallelSegments(tree, path) {
    const [segment, parallelRoutes, , refetchMarker] = tree;
    // a page segment might also contain concatenated search params, so we do a partial match on the key
    if (segment.includes(_segment.PAGE_SEGMENT_KEY) && refetchMarker !== 'refresh') {
        tree[2] = path;
        tree[3] = 'refresh';
    }
    for(const key in parallelRoutes){
        addRefreshMarkerToActiveParallelSegments(parallelRoutes[key], path);
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=refetch-inactive-parallel-segments.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/apply-router-state-patch-to-tree.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "applyRouterStatePatchToTree", {
    enumerable: true,
    get: function() {
        return applyRouterStatePatchToTree;
    }
});
const _segment = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/shared/lib/segment.js [app-client] (ecmascript)");
const _flightdatahelpers = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/flight-data-helpers.js [app-client] (ecmascript)");
const _matchsegments = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/match-segments.js [app-client] (ecmascript)");
const _refetchinactiveparallelsegments = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/refetch-inactive-parallel-segments.js [app-client] (ecmascript)");
/**
 * Deep merge of the two router states. Parallel route keys are preserved if the patch doesn't have them.
 */ function applyPatch(initialTree, patchTree) {
    const [initialSegment, initialParallelRoutes] = initialTree;
    const [patchSegment, patchParallelRoutes] = patchTree;
    // if the applied patch segment is __DEFAULT__ then it can be ignored in favor of the initial tree
    // this is because the __DEFAULT__ segment is used as a placeholder on navigation
    if (patchSegment === _segment.DEFAULT_SEGMENT_KEY && initialSegment !== _segment.DEFAULT_SEGMENT_KEY) {
        return initialTree;
    }
    if ((0, _matchsegments.matchSegment)(initialSegment, patchSegment)) {
        const newParallelRoutes = {};
        for(const key in initialParallelRoutes){
            const isInPatchTreeParallelRoutes = typeof patchParallelRoutes[key] !== 'undefined';
            if (isInPatchTreeParallelRoutes) {
                newParallelRoutes[key] = applyPatch(initialParallelRoutes[key], patchParallelRoutes[key]);
            } else {
                newParallelRoutes[key] = initialParallelRoutes[key];
            }
        }
        for(const key in patchParallelRoutes){
            if (newParallelRoutes[key]) {
                continue;
            }
            newParallelRoutes[key] = patchParallelRoutes[key];
        }
        const tree = [
            initialSegment,
            newParallelRoutes
        ];
        // Copy over the existing tree
        if (initialTree[2]) {
            tree[2] = initialTree[2];
        }
        if (initialTree[3]) {
            tree[3] = initialTree[3];
        }
        if (initialTree[4]) {
            tree[4] = initialTree[4];
        }
        return tree;
    }
    return patchTree;
}
function applyRouterStatePatchToTree(flightSegmentPath, flightRouterState, treePatch, path) {
    const [segment, parallelRoutes, url, refetch, isRootLayout] = flightRouterState;
    // Root refresh
    if (flightSegmentPath.length === 1) {
        const tree = applyPatch(flightRouterState, treePatch);
        (0, _refetchinactiveparallelsegments.addRefreshMarkerToActiveParallelSegments)(tree, path);
        return tree;
    }
    const [currentSegment, parallelRouteKey] = flightSegmentPath;
    // Tree path returned from the server should always match up with the current tree in the browser
    if (!(0, _matchsegments.matchSegment)(currentSegment, segment)) {
        return null;
    }
    const lastSegment = flightSegmentPath.length === 2;
    let parallelRoutePatch;
    if (lastSegment) {
        parallelRoutePatch = applyPatch(parallelRoutes[parallelRouteKey], treePatch);
    } else {
        parallelRoutePatch = applyRouterStatePatchToTree((0, _flightdatahelpers.getNextFlightSegmentPath)(flightSegmentPath), parallelRoutes[parallelRouteKey], treePatch, path);
        if (parallelRoutePatch === null) {
            return null;
        }
    }
    const tree = [
        flightSegmentPath[0],
        {
            ...parallelRoutes,
            [parallelRouteKey]: parallelRoutePatch
        },
        url,
        refetch
    ];
    // Current segment is the root layout
    if (isRootLayout) {
        tree[4] = true;
    }
    (0, _refetchinactiveparallelsegments.addRefreshMarkerToActiveParallelSegments)(tree, path);
    return tree;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=apply-router-state-patch-to-tree.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/app-router-announcer.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AppRouterAnnouncer", {
    enumerable: true,
    get: function() {
        return AppRouterAnnouncer;
    }
});
const _react = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _reactdom = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
const ANNOUNCER_TYPE = 'next-route-announcer';
const ANNOUNCER_ID = '__next-route-announcer__';
function getAnnouncerNode() {
    const existingAnnouncer = document.getElementsByName(ANNOUNCER_TYPE)[0];
    if (existingAnnouncer?.shadowRoot?.childNodes[0]) {
        return existingAnnouncer.shadowRoot.childNodes[0];
    } else {
        const container = document.createElement(ANNOUNCER_TYPE);
        container.style.cssText = 'position:absolute';
        const announcer = document.createElement('div');
        announcer.ariaLive = 'assertive';
        announcer.id = ANNOUNCER_ID;
        announcer.role = 'alert';
        announcer.style.cssText = 'position:absolute;border:0;height:1px;margin:-1px;padding:0;width:1px;clip:rect(0 0 0 0);overflow:hidden;white-space:nowrap;word-wrap:normal';
        // Use shadow DOM here to avoid any potential CSS bleed
        const shadow = container.attachShadow({
            mode: 'open'
        });
        shadow.appendChild(announcer);
        document.body.appendChild(container);
        return announcer;
    }
}
function AppRouterAnnouncer({ tree }) {
    const [portalNode, setPortalNode] = (0, _react.useState)(null);
    (0, _react.useEffect)(()=>{
        const announcer = getAnnouncerNode();
        setPortalNode(announcer);
        return ()=>{
            const container = document.getElementsByTagName(ANNOUNCER_TYPE)[0];
            if (container?.isConnected) {
                document.body.removeChild(container);
            }
        };
    }, []);
    const [routeAnnouncement, setRouteAnnouncement] = (0, _react.useState)('');
    const previousTitle = (0, _react.useRef)(undefined);
    (0, _react.useEffect)(()=>{
        let currentTitle = '';
        if (document.title) {
            currentTitle = document.title;
        } else {
            const pageHeader = document.querySelector('h1');
            if (pageHeader) {
                currentTitle = pageHeader.innerText || pageHeader.textContent || '';
            }
        }
        // Only announce the title change, but not for the first load because screen
        // readers do that automatically.
        if (previousTitle.current !== undefined && previousTitle.current !== currentTitle) {
            setRouteAnnouncement(currentTitle);
        }
        previousTitle.current = currentTitle;
    }, [
        tree
    ]);
    return portalNode ? /*#__PURE__*/ (0, _reactdom.createPortal)(routeAnnouncement, portalNode) : null;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router-announcer.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/readonly-url-search-params.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * ReadonlyURLSearchParams implementation shared between client and server.
 * This file is intentionally not marked as 'use client' or 'use server'
 * so it can be imported by both environments.
 */ /** @internal */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ReadonlyURLSearchParams", {
    enumerable: true,
    get: function() {
        return ReadonlyURLSearchParams;
    }
});
class ReadonlyURLSearchParamsError extends Error {
    constructor(){
        super('Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams');
    }
}
class ReadonlyURLSearchParams extends URLSearchParams {
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ append() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ delete() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ set() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ sort() {
        throw new ReadonlyURLSearchParamsError();
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=readonly-url-search-params.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/unrecognized-action-error.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    UnrecognizedActionError: null,
    unstable_isUnrecognizedActionError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    UnrecognizedActionError: function() {
        return UnrecognizedActionError;
    },
    unstable_isUnrecognizedActionError: function() {
        return unstable_isUnrecognizedActionError;
    }
});
class UnrecognizedActionError extends Error {
    constructor(...args){
        super(...args);
        this.name = 'UnrecognizedActionError';
    }
}
function unstable_isUnrecognizedActionError(error) {
    return !!(error && typeof error === 'object' && error instanceof UnrecognizedActionError);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unrecognized-action-error.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/redirect.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getRedirectError: null,
    getRedirectStatusCodeFromError: null,
    getRedirectTypeFromError: null,
    getURLFromRedirectError: null,
    permanentRedirect: null,
    redirect: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getRedirectError: function() {
        return getRedirectError;
    },
    getRedirectStatusCodeFromError: function() {
        return getRedirectStatusCodeFromError;
    },
    getRedirectTypeFromError: function() {
        return getRedirectTypeFromError;
    },
    getURLFromRedirectError: function() {
        return getURLFromRedirectError;
    },
    permanentRedirect: function() {
        return permanentRedirect;
    },
    redirect: function() {
        return redirect;
    }
});
const _redirectstatuscode = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/redirect-status-code.js [app-client] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/redirect-error.js [app-client] (ecmascript)");
const actionAsyncStorage = typeof window === 'undefined' ? __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/app-render/action-async-storage.external.js [app-client] (ecmascript)").actionAsyncStorage : undefined;
function getRedirectError(url, type, statusCode = _redirectstatuscode.RedirectStatusCode.TemporaryRedirect) {
    const error = Object.defineProperty(new Error(_redirecterror.REDIRECT_ERROR_CODE), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = `${_redirecterror.REDIRECT_ERROR_CODE};${type};${url};${statusCode};`;
    return error;
}
function redirect(/** The URL to redirect to */ url, type) {
    type ??= actionAsyncStorage?.getStore()?.isAction ? _redirecterror.RedirectType.push : _redirecterror.RedirectType.replace;
    throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.TemporaryRedirect);
}
function permanentRedirect(/** The URL to redirect to */ url, type = _redirecterror.RedirectType.replace) {
    throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.PermanentRedirect);
}
function getURLFromRedirectError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) return null;
    // Slices off the beginning of the digest that contains the code and the
    // separating ';'.
    return error.digest.split(';').slice(2, -2).join(';');
}
function getRedirectTypeFromError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) {
        throw Object.defineProperty(new Error('Not a redirect error'), "__NEXT_ERROR_CODE", {
            value: "E260",
            enumerable: false,
            configurable: true
        });
    }
    return error.digest.split(';', 2)[1];
}
function getRedirectStatusCodeFromError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) {
        throw Object.defineProperty(new Error('Not a redirect error'), "__NEXT_ERROR_CODE", {
            value: "E260",
            enumerable: false,
            configurable: true
        });
    }
    return Number(error.digest.split(';').at(-2));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/forbidden.js [app-client] (ecmascript)", (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/forbidden.js [app-client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/forbidden.js [app-client] (ecmascript)\n- Execution of <ModuleChunkItem as EcmascriptChunkItem>::content_with_async_module_info failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/unauthorized.js [app-client] (ecmascript)", (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/unauthorized.js [app-client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/unauthorized.js [app-client] (ecmascript)\n- Execution of <ModuleChunkItem as EcmascriptChunkItem>::content_with_async_module_info failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/unstable-rethrow.browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unstable_rethrow", {
    enumerable: true,
    get: function() {
        return unstable_rethrow;
    }
});
const _bailouttocsr = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-client] (ecmascript)");
const _isnextroutererror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/is-next-router-error.js [app-client] (ecmascript)");
function unstable_rethrow(error) {
    if ((0, _isnextroutererror.isNextRouterError)(error) || (0, _bailouttocsr.isBailoutToCSRError)(error)) {
        throw error;
    }
    if (error instanceof Error && 'cause' in error) {
        unstable_rethrow(error.cause);
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unstable-rethrow.browser.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/hooks-server-context.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DynamicServerError: null,
    isDynamicServerError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DynamicServerError: function() {
        return DynamicServerError;
    },
    isDynamicServerError: function() {
        return isDynamicServerError;
    }
});
const DYNAMIC_ERROR_CODE = 'DYNAMIC_SERVER_USAGE';
class DynamicServerError extends Error {
    constructor(description){
        super(`Dynamic server usage: ${description}`), this.description = description, this.digest = DYNAMIC_ERROR_CODE;
    }
}
function isDynamicServerError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err) || typeof err.digest !== 'string') {
        return false;
    }
    return err.digest === DYNAMIC_ERROR_CODE;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hooks-server-context.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/static-generation-bailout.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    StaticGenBailoutError: null,
    isStaticGenBailoutError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    StaticGenBailoutError: function() {
        return StaticGenBailoutError;
    },
    isStaticGenBailoutError: function() {
        return isStaticGenBailoutError;
    }
});
const NEXT_STATIC_GEN_BAILOUT = 'NEXT_STATIC_GEN_BAILOUT';
class StaticGenBailoutError extends Error {
    constructor(...args){
        super(...args), this.code = NEXT_STATIC_GEN_BAILOUT;
    }
}
function isStaticGenBailoutError(error) {
    if (typeof error !== 'object' || error === null || !('code' in error)) {
        return false;
    }
    return error.code === NEXT_STATIC_GEN_BAILOUT;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=static-generation-bailout.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/unstable-rethrow.server.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unstable_rethrow", {
    enumerable: true,
    get: function() {
        return unstable_rethrow;
    }
});
const _dynamicrenderingutils = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/dynamic-rendering-utils.js [app-client] (ecmascript)");
const _ispostpone = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/lib/router-utils/is-postpone.js [app-client] (ecmascript)");
const _bailouttocsr = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-client] (ecmascript)");
const _isnextroutererror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/is-next-router-error.js [app-client] (ecmascript)");
const _dynamicrendering = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-client] (ecmascript)");
const _hooksservercontext = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/hooks-server-context.js [app-client] (ecmascript)");
function unstable_rethrow(error) {
    if ((0, _isnextroutererror.isNextRouterError)(error) || (0, _bailouttocsr.isBailoutToCSRError)(error) || (0, _hooksservercontext.isDynamicServerError)(error) || (0, _dynamicrendering.isDynamicPostpone)(error) || (0, _ispostpone.isPostpone)(error) || (0, _dynamicrenderingutils.isHangingPromiseRejectionError)(error) || (0, _dynamicrendering.isPrerenderInterruptedError)(error)) {
        throw error;
    }
    if (error instanceof Error && 'cause' in error) {
        unstable_rethrow(error.cause);
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unstable-rethrow.server.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/unstable-rethrow.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * This function should be used to rethrow internal Next.js errors so that they can be handled by the framework.
 * When wrapping an API that uses errors to interrupt control flow, you should use this function before you do any error handling.
 * This function will rethrow the error if it is a Next.js error so it can be handled, otherwise it will do nothing.
 *
 * Read more: [Next.js Docs: `unstable_rethrow`](https://nextjs.org/docs/app/api-reference/functions/unstable_rethrow)
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unstable_rethrow", {
    enumerable: true,
    get: function() {
        return unstable_rethrow;
    }
});
const unstable_rethrow = typeof window === 'undefined' ? __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/unstable-rethrow.server.js [app-client] (ecmascript)").unstable_rethrow : __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/unstable-rethrow.browser.js [app-client] (ecmascript)").unstable_rethrow;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unstable-rethrow.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/navigation.react-server.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ReadonlyURLSearchParams: null,
    RedirectType: null,
    forbidden: null,
    notFound: null,
    permanentRedirect: null,
    redirect: null,
    unauthorized: null,
    unstable_isUnrecognizedActionError: null,
    unstable_rethrow: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ReadonlyURLSearchParams: function() {
        return _readonlyurlsearchparams.ReadonlyURLSearchParams;
    },
    RedirectType: function() {
        return _redirecterror.RedirectType;
    },
    forbidden: function() {
        return _forbidden.forbidden;
    },
    notFound: function() {
        return _notfound.notFound;
    },
    permanentRedirect: function() {
        return _redirect.permanentRedirect;
    },
    redirect: function() {
        return _redirect.redirect;
    },
    unauthorized: function() {
        return _unauthorized.unauthorized;
    },
    unstable_isUnrecognizedActionError: function() {
        return unstable_isUnrecognizedActionError;
    },
    unstable_rethrow: function() {
        return _unstablerethrow.unstable_rethrow;
    }
});
const _readonlyurlsearchparams = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/readonly-url-search-params.js [app-client] (ecmascript)");
const _redirect = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/redirect.js [app-client] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/redirect-error.js [app-client] (ecmascript)");
const _notfound = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/not-found.js [app-client] (ecmascript)");
const _forbidden = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/forbidden.js [app-client] (ecmascript)");
const _unauthorized = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/unauthorized.js [app-client] (ecmascript)");
const _unstablerethrow = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/unstable-rethrow.js [app-client] (ecmascript)");
function unstable_isUnrecognizedActionError() {
    throw Object.defineProperty(new Error('`unstable_isUnrecognizedActionError` can only be used on the client.'), "__NEXT_ERROR_CODE", {
        value: "E776",
        enumerable: false,
        configurable: true
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.react-server.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)", (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)\n- Execution of <ModuleChunkItem as EcmascriptChunkItem>::content_with_async_module_info failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/redirect-boundary.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    RedirectBoundary: null,
    RedirectErrorBoundary: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RedirectBoundary: function() {
        return RedirectBoundary;
    },
    RedirectErrorBoundary: function() {
        return RedirectErrorBoundary;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _navigation = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
const _redirect = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/redirect.js [app-client] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/redirect-error.js [app-client] (ecmascript)");
function HandleRedirect({ redirect, reset, redirectType }) {
    const router = (0, _navigation.useRouter)();
    (0, _react.useEffect)(()=>{
        _react.default.startTransition(()=>{
            if (redirectType === _redirecterror.RedirectType.push) {
                router.push(redirect, {});
            } else {
                router.replace(redirect, {});
            }
            reset();
        });
    }, [
        redirect,
        redirectType,
        reset,
        router
    ]);
    return null;
}
class RedirectErrorBoundary extends _react.default.Component {
    constructor(props){
        super(props);
        this.state = {
            redirect: null,
            redirectType: null
        };
    }
    static getDerivedStateFromError(error) {
        if ((0, _redirecterror.isRedirectError)(error)) {
            const url = (0, _redirect.getURLFromRedirectError)(error);
            const redirectType = (0, _redirect.getRedirectTypeFromError)(error);
            if ('handled' in error) {
                // The redirect was already handled. We'll still catch the redirect error
                // so that we can remount the subtree, but we don't actually need to trigger the
                // router.push.
                return {
                    redirect: null,
                    redirectType: null
                };
            }
            return {
                redirect: url,
                redirectType
            };
        }
        // Re-throw if error is not for redirect
        throw error;
    }
    // Explicit type is needed to avoid the generated `.d.ts` having a wide return type that could be specific to the `@types/react` version.
    render() {
        const { redirect, redirectType } = this.state;
        if (redirect !== null && redirectType !== null) {
            return /*#__PURE__*/ (0, _jsxruntime.jsx)(HandleRedirect, {
                redirect: redirect,
                redirectType: redirectType,
                reset: ()=>this.setState({
                        redirect: null
                    })
            });
        }
        return this.props.children;
    }
}
function RedirectBoundary({ children }) {
    const router = (0, _navigation.useRouter)();
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(RedirectErrorBoundary, {
        router: router,
        children: children
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-boundary.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/reducers/find-head-in-cache.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "findHeadInCache", {
    enumerable: true,
    get: function() {
        return findHeadInCache;
    }
});
const _segment = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/shared/lib/segment.js [app-client] (ecmascript)");
const _createroutercachekey = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js [app-client] (ecmascript)");
function findHeadInCache(cache, parallelRoutes) {
    return findHeadInCacheImpl(cache, parallelRoutes, '', '');
}
function findHeadInCacheImpl(cache, parallelRoutes, keyPrefix, keyPrefixWithoutSearchParams) {
    const isLastItem = Object.keys(parallelRoutes).length === 0;
    if (isLastItem) {
        // Returns the entire Cache Node of the segment whose head we will render.
        return [
            cache,
            keyPrefix,
            keyPrefixWithoutSearchParams
        ];
    }
    // First try the 'children' parallel route if it exists
    // when starting from the "root", this corresponds with the main page component
    const parallelRoutesKeys = Object.keys(parallelRoutes).filter((key)=>key !== 'children');
    // if we are at the root, we need to check the children slot first
    if ('children' in parallelRoutes) {
        parallelRoutesKeys.unshift('children');
    }
    for (const key of parallelRoutesKeys){
        const [segment, childParallelRoutes] = parallelRoutes[key];
        // If the parallel is not matched and using the default segment,
        // skip searching the head from it.
        if (segment === _segment.DEFAULT_SEGMENT_KEY) {
            continue;
        }
        const childSegmentMap = cache.parallelRoutes.get(key);
        if (!childSegmentMap) {
            continue;
        }
        const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segment);
        const cacheKeyWithoutSearchParams = (0, _createroutercachekey.createRouterCacheKey)(segment, true);
        const cacheNode = childSegmentMap.get(cacheKey);
        if (!cacheNode) {
            continue;
        }
        const item = findHeadInCacheImpl(cacheNode, childParallelRoutes, keyPrefix + '/' + cacheKey, keyPrefix + '/' + cacheKeyWithoutSearchParams);
        if (item) {
            return item;
        }
    }
    return null;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=find-head-in-cache.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/unresolved-thenable.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Create a "Thenable" that does not resolve. This is used to suspend indefinitely when data is not available yet.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unresolvedThenable", {
    enumerable: true,
    get: function() {
        return unresolvedThenable;
    }
});
const unresolvedThenable = {
    then: ()=>{}
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unresolved-thenable.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)", (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)\n- Execution of <ModuleChunkItem as EcmascriptChunkItem>::content_with_async_module_info failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/remove-base-path.js [app-client] (ecmascript)", (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/remove-base-path.js [app-client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/remove-base-path.js [app-client] (ecmascript)\n- Execution of <ModuleChunkItem as EcmascriptChunkItem>::content_with_async_module_info failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/errors/graceful-degrade-boundary.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    GracefulDegradeBoundary: null,
    default: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    GracefulDegradeBoundary: function() {
        return GracefulDegradeBoundary;
    },
    default: function() {
        return _default;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function getDomNodeAttributes(node) {
    const result = {};
    for(let i = 0; i < node.attributes.length; i++){
        const attr = node.attributes[i];
        result[attr.name] = attr.value;
    }
    return result;
}
class GracefulDegradeBoundary extends _react.Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        };
        this.rootHtml = '';
        this.htmlAttributes = {};
        this.htmlRef = /*#__PURE__*/ (0, _react.createRef)();
    }
    static getDerivedStateFromError(_) {
        return {
            hasError: true
        };
    }
    componentDidMount() {
        const htmlNode = this.htmlRef.current;
        if (this.state.hasError && htmlNode) {
            // Reapply the cached HTML attributes to the root element
            Object.entries(this.htmlAttributes).forEach(([key, value])=>{
                htmlNode.setAttribute(key, value);
            });
        }
    }
    render() {
        const { hasError } = this.state;
        // Cache the root HTML content on the first render
        if (typeof window !== 'undefined' && !this.rootHtml) {
            this.rootHtml = document.documentElement.innerHTML;
            this.htmlAttributes = getDomNodeAttributes(document.documentElement);
        }
        if (hasError) {
            // Render the current HTML content without hydration
            return /*#__PURE__*/ (0, _jsxruntime.jsx)("html", {
                ref: this.htmlRef,
                suppressHydrationWarning: true,
                dangerouslySetInnerHTML: {
                    __html: this.rootHtml
                }
            });
        }
        return this.props.children;
    }
}
const _default = GracefulDegradeBoundary;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=graceful-degrade-boundary.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/errors/root-error-boundary.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RootErrorBoundary;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _gracefuldegradeboundary = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/errors/graceful-degrade-boundary.js [app-client] (ecmascript)"));
const _errorboundary = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/error-boundary.js [app-client] (ecmascript)");
const _isbot = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/shared/lib/router/utils/is-bot.js [app-client] (ecmascript)");
const isBotUserAgent = typeof window !== 'undefined' && (0, _isbot.isBot)(window.navigator.userAgent);
function RootErrorBoundary({ children, errorComponent, errorStyles, errorScripts }) {
    if (isBotUserAgent) {
        // Preserve existing DOM/HTML for bots to avoid replacing content with an error UI
        // and to keep the original SSR output intact.
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_gracefuldegradeboundary.default, {
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_errorboundary.ErrorBoundary, {
        errorComponent: errorComponent,
        errorStyles: errorStyles,
        errorScripts: errorScripts,
        children: children
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=root-error-boundary.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/navigation-devtools.js [app-client] (ecmascript)", (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/navigation-devtools.js [app-client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/navigation-devtools.js [app-client] (ecmascript)\n- Execution of <ModuleChunkItem as EcmascriptChunkItem>::content_with_async_module_info failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/http-access-fallback/error-boundary.js [app-client] (ecmascript)", (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/http-access-fallback/error-boundary.js [app-client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/http-access-fallback/error-boundary.js [app-client] (ecmascript)\n- Execution of <ModuleChunkItem as EcmascriptChunkItem>::content_with_async_module_info failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/dev-root-http-access-fallback-boundary.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DevRootHTTPAccessFallbackBoundary: null,
    bailOnRootNotFound: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DevRootHTTPAccessFallbackBoundary: function() {
        return DevRootHTTPAccessFallbackBoundary;
    },
    bailOnRootNotFound: function() {
        return bailOnRootNotFound;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _errorboundary = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/http-access-fallback/error-boundary.js [app-client] (ecmascript)");
function bailOnRootNotFound() {
    throw Object.defineProperty(new Error('notFound() is not allowed to use in root layout'), "__NEXT_ERROR_CODE", {
        value: "E192",
        enumerable: false,
        configurable: true
    });
}
function NotAllowedRootHTTPFallbackError() {
    bailOnRootNotFound();
    return null;
}
function DevRootHTTPAccessFallbackBoundary({ children }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_errorboundary.HTTPAccessFallbackBoundary, {
        notFound: /*#__PURE__*/ (0, _jsxruntime.jsx)(NotAllowedRootHTTPFallbackError, {}),
        children: children
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=dev-root-http-access-fallback-boundary.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/dev/hot-reloader/shared.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    REACT_REFRESH_FULL_RELOAD: null,
    REACT_REFRESH_FULL_RELOAD_FROM_ERROR: null,
    reportInvalidHmrMessage: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    REACT_REFRESH_FULL_RELOAD: function() {
        return REACT_REFRESH_FULL_RELOAD;
    },
    REACT_REFRESH_FULL_RELOAD_FROM_ERROR: function() {
        return REACT_REFRESH_FULL_RELOAD_FROM_ERROR;
    },
    reportInvalidHmrMessage: function() {
        return reportInvalidHmrMessage;
    }
});
const REACT_REFRESH_FULL_RELOAD = '[Fast Refresh] performing full reload\n\n' + "Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.\n" + 'You might have a file which exports a React component but also exports a value that is imported by a non-React component file.\n' + 'Consider migrating the non-React component export to a separate file and importing it into both files.\n\n' + 'It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.\n' + 'Fast Refresh requires at least one parent function component in your React tree.';
const REACT_REFRESH_FULL_RELOAD_FROM_ERROR = '[Fast Refresh] performing full reload because your application had an unrecoverable error';
function reportInvalidHmrMessage(message, err) {
    console.warn('[HMR] Invalid message: ' + JSON.stringify(message) + '\n' + (err instanceof Error && err?.stack || ''));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=shared.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/dev/hot-reloader/get-socket-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getSocketUrl", {
    enumerable: true,
    get: function() {
        return getSocketUrl;
    }
});
const _normalizedassetprefix = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/shared/lib/normalized-asset-prefix.js [app-client] (ecmascript)");
function getSocketProtocol(assetPrefix) {
    let protocol = window.location.protocol;
    try {
        // assetPrefix is a url
        protocol = new URL(assetPrefix).protocol;
    } catch  {}
    return protocol === 'http:' ? 'ws:' : 'wss:';
}
function getSocketUrl(assetPrefix) {
    const prefix = (0, _normalizedassetprefix.normalizedAssetPrefix)(assetPrefix);
    const protocol = getSocketProtocol(assetPrefix || '');
    if (URL.canParse(prefix)) {
        // since normalized asset prefix is ensured to be a URL format,
        // we can safely replace the protocol
        return prefix.replace(/^http/, 'ws');
    }
    const { hostname, port } = window.location;
    return `${protocol}//${hostname}${port ? `:${port}` : ''}${prefix}`;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-socket-url.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/dev/hot-reloader/app/web-socket.js [app-client] (ecmascript)", (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/dev/hot-reloader/app/web-socket.js [app-client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/dev/hot-reloader/app/web-socket.js [app-client] (ecmascript)\n- Execution of <ModuleChunkItem as EcmascriptChunkItem>::content_with_async_module_info failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/dev/report-hmr-latency.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, /**
 * Logs information about a completed HMR to the console, the server (via a
 * `client-hmr-latency` event), and to `self.__NEXT_HMR_LATENCY_CB` (a debugging
 * hook).
 *
 * @param hasUpdate Set this to `false` to avoid reporting the HMR event via a
 *   `client-hmr-latency` event or to `self.__NEXT_HMR_LATENCY_CB`. Used by
 *   turbopack when we must report a message to the browser console (because we
 *   already logged a "rebuilding" message), but it's not a real HMR, so we
 *   don't want to impact our telemetry.
 */ "default", {
    enumerable: true,
    get: function() {
        return reportHmrLatency;
    }
});
function reportHmrLatency(sendMessage, updatedModules, startMsSinceEpoch, endMsSinceEpoch, hasUpdate = true) {
    const latencyMs = endMsSinceEpoch - startMsSinceEpoch;
    console.log(`[Fast Refresh] done in ${latencyMs}ms`);
    if (!hasUpdate) {
        return;
    }
    sendMessage(JSON.stringify({
        event: 'client-hmr-latency',
        id: window.__nextDevClientId,
        startTime: startMsSinceEpoch,
        endTime: endMsSinceEpoch,
        page: window.location.pathname,
        updatedModules,
        // Whether the page (tab) was hidden at the time the event occurred.
        // This can impact the accuracy of the event's timing.
        isPageHidden: document.visibilityState === 'hidden'
    }));
    if (self.__NEXT_HMR_LATENCY_CB) {
        self.__NEXT_HMR_LATENCY_CB(latencyMs);
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=report-hmr-latency.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/dev/hot-reloader/turbopack-hot-reloader-common.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "TurbopackHmr", {
    enumerable: true,
    get: function() {
        return TurbopackHmr;
    }
});
// How long to wait before reporting the HMR start, used to suppress irrelevant
// `BUILDING` events. Does not impact reported latency.
const TURBOPACK_HMR_START_DELAY_MS = 100;
class TurbopackHmr {
    #updatedModules;
    #startMsSinceEpoch;
    #lastUpdateMsSinceEpoch;
    #deferredReportHmrStartId;
    #reportedHmrStart;
    constructor(){
        this.#updatedModules = new Set();
        this.#reportedHmrStart = false;
    }
    // HACK: Turbopack tends to generate a lot of irrelevant "BUILDING" actions,
    // as it reports *any* compilation, including fully no-op/cached compilations
    // and those unrelated to HMR. Fixing this would require significant
    // architectural changes.
    //
    // Work around this by deferring any "rebuilding" message by 100ms. If we get
    // a BUILT event within that threshold and nothing has changed, just suppress
    // the message entirely.
    #runDeferredReportHmrStart() {
        if (this.#deferredReportHmrStartId != null) {
            console.log('[Fast Refresh] rebuilding');
            this.#reportedHmrStart = true;
            this.#cancelDeferredReportHmrStart();
        }
    }
    #cancelDeferredReportHmrStart() {
        clearTimeout(this.#deferredReportHmrStartId);
        this.#deferredReportHmrStartId = undefined;
    }
    onBuilding() {
        this.#lastUpdateMsSinceEpoch = undefined;
        this.#cancelDeferredReportHmrStart();
        this.#startMsSinceEpoch = Date.now();
        // report the HMR start after a short delay
        this.#deferredReportHmrStartId = setTimeout(()=>this.#runDeferredReportHmrStart(), self.__NEXT_HMR_TURBOPACK_REPORT_NOISY_NOOP_EVENTS ? 0 : TURBOPACK_HMR_START_DELAY_MS);
    }
    /** Helper for other `onEvent` methods. */ #onUpdate() {
        this.#runDeferredReportHmrStart();
        this.#lastUpdateMsSinceEpoch = Date.now();
    }
    onTurbopackMessage(msg) {
        this.#onUpdate();
        const updatedModules = extractModulesFromTurbopackMessage(msg.data);
        for (const module1 of updatedModules){
            this.#updatedModules.add(module1);
        }
    }
    onServerComponentChanges() {
        this.#onUpdate();
    }
    onReloadPage() {
        this.#onUpdate();
    }
    onPageAddRemove() {
        this.#onUpdate();
    }
    /**
   * @returns `null` if the caller should ignore the update entirely. Returns an
   *   object with `hasUpdates: false` if the caller should report the end of
   *   the HMR in the browser console, but the HMR was a no-op.
   */ onBuilt() {
        // Check that we got *any* `TurbopackMessage`, even if
        // `updatedModules` is empty (not everything gets recorded there).
        //
        // There's also a case where `onBuilt` gets called before `onBuilding`,
        // which can happen during initial page load. Ignore that too!
        const hasUpdates = this.#lastUpdateMsSinceEpoch != null && this.#startMsSinceEpoch != null;
        if (!hasUpdates && !this.#reportedHmrStart) {
            // suppress the update entirely
            this.#cancelDeferredReportHmrStart();
            return null;
        }
        this.#runDeferredReportHmrStart();
        const result = {
            hasUpdates,
            updatedModules: this.#updatedModules,
            startMsSinceEpoch: this.#startMsSinceEpoch,
            endMsSinceEpoch: this.#lastUpdateMsSinceEpoch ?? Date.now()
        };
        this.#updatedModules = new Set();
        this.#reportedHmrStart = false;
        return result;
    }
}
function extractModulesFromTurbopackMessage(data) {
    const updatedModules = new Set();
    const updates = Array.isArray(data) ? data : [
        data
    ];
    for (const update of updates){
        // TODO this won't capture changes to CSS since they don't result in a "merged" update
        if (update.type !== 'partial' || update.instruction.type !== 'ChunkListUpdate' || update.instruction.merged === undefined) {
            continue;
        }
        for (const mergedUpdate of update.instruction.merged){
            for (const name of Object.keys(mergedUpdate.entries)){
                const res = /(.*)\s+[([].*/.exec(name);
                if (res === null) {
                    continue;
                }
                updatedModules.add(res[1]);
            }
        }
    }
    return updatedModules;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=turbopack-hot-reloader-common.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/dev/debug-channel.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createDebugChannel: null,
    getOrCreateDebugChannelReadableWriterPair: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createDebugChannel: function() {
        return createDebugChannel;
    },
    getOrCreateDebugChannelReadableWriterPair: function() {
        return getOrCreateDebugChannelReadableWriterPair;
    }
});
const _approuterheaders = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/app-router-headers.js [app-client] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)");
const pairs = new Map();
function getOrCreateDebugChannelReadableWriterPair(requestId) {
    let pair = pairs.get(requestId);
    if (!pair) {
        const { readable, writable } = new TransformStream();
        pair = {
            readable,
            writer: writable.getWriter()
        };
        pairs.set(requestId, pair);
        pair.writer.closed.finally(()=>pairs.delete(requestId));
    }
    return pair;
}
function createDebugChannel(requestHeaders) {
    let requestId;
    if (requestHeaders) {
        requestId = requestHeaders[_approuterheaders.NEXT_REQUEST_ID_HEADER] ?? undefined;
        if (!requestId) {
            throw Object.defineProperty(new _invarianterror.InvariantError(`Expected a ${JSON.stringify(_approuterheaders.NEXT_REQUEST_ID_HEADER)} request header.`), "__NEXT_ERROR_CODE", {
                value: "E854",
                enumerable: false,
                configurable: true
            });
        }
    } else {
        requestId = self.__next_r;
        if (!requestId) {
            throw Object.defineProperty(new _invarianterror.InvariantError(`Expected a request ID to be defined for the document via self.__next_r.`), "__NEXT_ERROR_CODE", {
                value: "E806",
                enumerable: false,
                configurable: true
            });
        }
    }
    const { readable } = getOrCreateDebugChannelReadableWriterPair(requestId);
    return {
        readable
    };
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=debug-channel.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/dev/hot-reloader/app/hot-reloader-app.js [app-client] (ecmascript)", (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/dev/hot-reloader/app/hot-reloader-app.js [app-client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/dev/hot-reloader/app/hot-reloader-app.js [app-client] (ecmascript)\n- Execution of <ModuleChunkItem as EcmascriptChunkItem>::content_with_async_module_info failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/app-router.js [app-client] (ecmascript)", (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/app-router.js [app-client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/app-router.js [app-client] (ecmascript)\n- Execution of <ModuleChunkItem as EcmascriptChunkItem>::content_with_async_module_info failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/reducers/server-patch-reducer.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "serverPatchReducer", {
    enumerable: true,
    get: function() {
        return serverPatchReducer;
    }
});
const _createhreffromurl = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
const _applyrouterstatepatchtotree = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/apply-router-state-patch-to-tree.js [app-client] (ecmascript)");
const _isnavigatingtonewrootlayout = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/is-navigating-to-new-root-layout.js [app-client] (ecmascript)");
const _navigatereducer = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/reducers/navigate-reducer.js [app-client] (ecmascript)");
const _applyflightdata = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/apply-flight-data.js [app-client] (ecmascript)");
const _handlemutable = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/handle-mutable.js [app-client] (ecmascript)");
const _approuter = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/app-router.js [app-client] (ecmascript)");
function serverPatchReducer(state, action) {
    const { serverResponse, navigatedAt } = action;
    const mutable = {};
    mutable.preserveCustomHistoryState = false;
    // Handle case when navigating to page in `pages` from `app`
    if (typeof serverResponse === 'string') {
        return (0, _navigatereducer.handleExternalUrl)(state, mutable, serverResponse, state.pushRef.pendingPush);
    }
    const { flightData, canonicalUrl, renderedSearch } = serverResponse;
    let currentTree = state.tree;
    let currentCache = state.cache;
    for (const normalizedFlightData of flightData){
        const { segmentPath: flightSegmentPath, tree: treePatch } = normalizedFlightData;
        const newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)([
            '',
            ...flightSegmentPath
        ], currentTree, treePatch, state.canonicalUrl);
        // `applyRouterStatePatchToTree` returns `null` when it determined that the server response is not applicable to the current tree.
        // In other words, the server responded with a tree that doesn't match what the client is currently rendering.
        // This can happen if the server patch action took longer to resolve than a subsequent navigation which would have changed the tree.
        // Previously this case triggered an MPA navigation but it should be safe to simply discard the server response rather than forcing
        // the entire page to reload.
        if (newTree === null) {
            return state;
        }
        if ((0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(currentTree, newTree)) {
            return (0, _navigatereducer.handleExternalUrl)(state, mutable, state.canonicalUrl, state.pushRef.pendingPush);
        }
        mutable.canonicalUrl = (0, _createhreffromurl.createHrefFromUrl)(canonicalUrl);
        const cache = (0, _approuter.createEmptyCacheNode)();
        (0, _applyflightdata.applyFlightData)(navigatedAt, currentCache, cache, normalizedFlightData);
        mutable.patchedTree = newTree;
        mutable.renderedSearch = renderedSearch;
        mutable.cache = cache;
        currentCache = cache;
        currentTree = newTree;
    }
    return (0, _handlemutable.handleMutable)(state, mutable);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=server-patch-reducer.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/reducers/restore-reducer.js [app-client] (ecmascript)", (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/reducers/restore-reducer.js [app-client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/reducers/restore-reducer.js [app-client] (ecmascript)\n- Execution of <ModuleChunkItem as EcmascriptChunkItem>::content_with_async_module_info failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/handle-segment-mismatch.js [app-client] (ecmascript)", (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/handle-segment-mismatch.js [app-client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/handle-segment-mismatch.js [app-client] (ecmascript)\n- Execution of <ModuleChunkItem as EcmascriptChunkItem>::content_with_async_module_info failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/reducers/has-interception-route-in-current-tree.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "hasInterceptionRouteInCurrentTree", {
    enumerable: true,
    get: function() {
        return hasInterceptionRouteInCurrentTree;
    }
});
const _interceptionroutes = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/shared/lib/router/utils/interception-routes.js [app-client] (ecmascript)");
function hasInterceptionRouteInCurrentTree([segment, parallelRoutes]) {
    // If we have a dynamic segment, it's marked as an interception route by the presence of the `i` suffix.
    if (Array.isArray(segment) && (segment[2] === 'di(..)(..)' || segment[2] === 'ci(..)(..)' || segment[2] === 'di(.)' || segment[2] === 'ci(.)' || segment[2] === 'di(..)' || segment[2] === 'ci(..)' || segment[2] === 'di(...)' || segment[2] === 'ci(...)')) {
        return true;
    }
    // If segment is not an array, apply the existing string-based check
    if (typeof segment === 'string' && (0, _interceptionroutes.isInterceptionRouteAppPath)(segment)) {
        return true;
    }
    // Iterate through parallelRoutes if they exist
    if (parallelRoutes) {
        for(const key in parallelRoutes){
            if (hasInterceptionRouteInCurrentTree(parallelRoutes[key])) {
                return true;
            }
        }
    }
    return false;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=has-interception-route-in-current-tree.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/reducers/refresh-reducer.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "refreshReducer", {
    enumerable: true,
    get: function() {
        return refreshReducer;
    }
});
const _fetchserverresponse = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js [app-client] (ecmascript)");
const _createhreffromurl = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
const _applyrouterstatepatchtotree = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/apply-router-state-patch-to-tree.js [app-client] (ecmascript)");
const _isnavigatingtonewrootlayout = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/is-navigating-to-new-root-layout.js [app-client] (ecmascript)");
const _navigatereducer = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/reducers/navigate-reducer.js [app-client] (ecmascript)");
const _handlemutable = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/handle-mutable.js [app-client] (ecmascript)");
const _filllazyitemstillleafwithhead = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/fill-lazy-items-till-leaf-with-head.js [app-client] (ecmascript)");
const _approuter = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/app-router.js [app-client] (ecmascript)");
const _handlesegmentmismatch = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/handle-segment-mismatch.js [app-client] (ecmascript)");
const _hasinterceptionrouteincurrenttree = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/reducers/has-interception-route-in-current-tree.js [app-client] (ecmascript)");
const _refetchinactiveparallelsegments = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/refetch-inactive-parallel-segments.js [app-client] (ecmascript)");
const _cache = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/segment-cache/cache.js [app-client] (ecmascript)");
function refreshReducer(state, action) {
    const { origin } = action;
    const mutable = {};
    const href = state.canonicalUrl;
    let currentTree = state.tree;
    mutable.preserveCustomHistoryState = false;
    const cache = (0, _approuter.createEmptyCacheNode)();
    // If the current tree was intercepted, the nextUrl should be included in the request.
    // This is to ensure that the refresh request doesn't get intercepted, accidentally triggering the interception route.
    const includeNextUrl = (0, _hasinterceptionrouteincurrenttree.hasInterceptionRouteInCurrentTree)(state.tree);
    // TODO-APP: verify that `href` is not an external url.
    // Fetch data from the root of the tree.
    cache.lazyData = (0, _fetchserverresponse.fetchServerResponse)(new URL(href, origin), {
        flightRouterState: [
            currentTree[0],
            currentTree[1],
            currentTree[2],
            'refetch'
        ],
        nextUrl: includeNextUrl ? state.nextUrl : null
    });
    const navigatedAt = Date.now();
    return cache.lazyData.then(async (result)=>{
        // Handle case when navigating to page in `pages` from `app`
        if (typeof result === 'string') {
            return (0, _navigatereducer.handleExternalUrl)(state, mutable, result, state.pushRef.pendingPush);
        }
        const { flightData, canonicalUrl, renderedSearch } = result;
        // Remove cache.lazyData as it has been resolved at this point.
        cache.lazyData = null;
        for (const normalizedFlightData of flightData){
            const { tree: treePatch, seedData: cacheNodeSeedData, head, isRootRender } = normalizedFlightData;
            if (!isRootRender) {
                // TODO-APP: handle this case better
                console.log('REFRESH FAILED');
                return state;
            }
            const newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)([
                ''
            ], currentTree, treePatch, state.canonicalUrl);
            if (newTree === null) {
                return (0, _handlesegmentmismatch.handleSegmentMismatch)(state, action, treePatch);
            }
            if ((0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(currentTree, newTree)) {
                return (0, _navigatereducer.handleExternalUrl)(state, mutable, href, state.pushRef.pendingPush);
            }
            mutable.canonicalUrl = (0, _createhreffromurl.createHrefFromUrl)(canonicalUrl);
            // Handles case where prefetch only returns the router tree patch without rendered components.
            if (cacheNodeSeedData !== null) {
                const rsc = cacheNodeSeedData[0];
                const loading = cacheNodeSeedData[2];
                cache.rsc = rsc;
                cache.prefetchRsc = null;
                cache.loading = loading;
                (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(navigatedAt, cache, undefined, treePatch, cacheNodeSeedData, head);
                (0, _cache.revalidateEntireCache)(state.nextUrl, newTree);
            }
            await (0, _refetchinactiveparallelsegments.refreshInactiveParallelSegments)({
                navigatedAt,
                state,
                updatedTree: newTree,
                updatedCache: cache,
                includeNextUrl,
                canonicalUrl: mutable.canonicalUrl || state.canonicalUrl
            });
            mutable.cache = cache;
            mutable.patchedTree = newTree;
            mutable.renderedSearch = renderedSearch;
            currentTree = newTree;
        }
        return (0, _handlemutable.handleMutable)(state, mutable);
    }, ()=>state);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=refresh-reducer.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/reducers/hmr-refresh-reducer.js [app-client] (ecmascript)", (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/reducers/hmr-refresh-reducer.js [app-client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/reducers/hmr-refresh-reducer.js [app-client] (ecmascript)\n- Execution of <ModuleChunkItem as EcmascriptChunkItem>::content_with_async_module_info failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/assign-location.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "assignLocation", {
    enumerable: true,
    get: function() {
        return assignLocation;
    }
});
const _addbasepath = (()=>{
    const e = new Error("Cannot find module './add-base-path'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
function assignLocation(location, url) {
    if (location.startsWith('.')) {
        const urlBase = url.origin + url.pathname;
        return new URL(// new URL('./relative', 'https://example.com/subdir').href -> 'https://example.com/relative'
        // new URL('./relative', 'https://example.com/subdir/').href -> 'https://example.com/subdir/relative'
        (urlBase.endsWith('/') ? urlBase : urlBase + '/') + location);
    }
    return new URL((0, _addbasepath.addBasePath)(location), url.href);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=assign-location.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/reducers/server-action-reducer.js [app-client] (ecmascript)", (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/reducers/server-action-reducer.js [app-client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/reducers/server-action-reducer.js [app-client] (ecmascript)\n- Execution of <ModuleChunkItem as EcmascriptChunkItem>::content_with_async_module_info failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/router-reducer.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "reducer", {
    enumerable: true,
    get: function() {
        return reducer;
    }
});
const _routerreducertypes = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
const _navigatereducer = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/reducers/navigate-reducer.js [app-client] (ecmascript)");
const _serverpatchreducer = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/reducers/server-patch-reducer.js [app-client] (ecmascript)");
const _restorereducer = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/reducers/restore-reducer.js [app-client] (ecmascript)");
const _refreshreducer = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/reducers/refresh-reducer.js [app-client] (ecmascript)");
const _hmrrefreshreducer = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/reducers/hmr-refresh-reducer.js [app-client] (ecmascript)");
const _serveractionreducer = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/reducers/server-action-reducer.js [app-client] (ecmascript)");
/**
 * Reducer that handles the app-router state updates.
 */ function clientReducer(state, action) {
    switch(action.type){
        case _routerreducertypes.ACTION_NAVIGATE:
            {
                return (0, _navigatereducer.navigateReducer)(state, action);
            }
        case _routerreducertypes.ACTION_SERVER_PATCH:
            {
                return (0, _serverpatchreducer.serverPatchReducer)(state, action);
            }
        case _routerreducertypes.ACTION_RESTORE:
            {
                return (0, _restorereducer.restoreReducer)(state, action);
            }
        case _routerreducertypes.ACTION_REFRESH:
            {
                return (0, _refreshreducer.refreshReducer)(state, action);
            }
        case _routerreducertypes.ACTION_HMR_REFRESH:
            {
                return (0, _hmrrefreshreducer.hmrRefreshReducer)(state, action);
            }
        case _routerreducertypes.ACTION_SERVER_ACTION:
            {
                return (0, _serveractionreducer.serverActionReducer)(state, action);
            }
        // This case should never be hit as dispatch is strongly typed.
        default:
            throw Object.defineProperty(new Error('Unknown action'), "__NEXT_ERROR_CODE", {
                value: "E295",
                enumerable: false,
                configurable: true
            });
    }
}
function serverReducer(state, _action) {
    return state;
}
const reducer = typeof window === 'undefined' ? serverReducer : clientReducer;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=router-reducer.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/segment-cache/prefetch.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "prefetch", {
    enumerable: true,
    get: function() {
        return prefetch;
    }
});
const _approuterutils = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/app-router-utils.js [app-client] (ecmascript)");
const _cachekey = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/segment-cache/cache-key.js [app-client] (ecmascript)");
const _scheduler = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/segment-cache/scheduler.js [app-client] (ecmascript)");
const _types = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)");
function prefetch(href, nextUrl, treeAtTimeOfPrefetch, fetchStrategy, onInvalidate) {
    const url = (0, _approuterutils.createPrefetchURL)(href);
    if (url === null) {
        // This href should not be prefetched.
        return;
    }
    const cacheKey = (0, _cachekey.createCacheKey)(url.href, nextUrl);
    (0, _scheduler.schedulePrefetchTask)(cacheKey, treeAtTimeOfPrefetch, fetchStrategy, _types.PrefetchPriority.Default, onInvalidate);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=prefetch.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)", (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)\n- Execution of <ModuleChunkItem as EcmascriptChunkItem>::content_with_async_module_info failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/create-initial-router-state.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createInitialRouterState", {
    enumerable: true,
    get: function() {
        return createInitialRouterState;
    }
});
const _createhreffromurl = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
const _filllazyitemstillleafwithhead = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/fill-lazy-items-till-leaf-with-head.js [app-client] (ecmascript)");
const _computechangedpath = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/compute-changed-path.js [app-client] (ecmascript)");
const _refetchinactiveparallelsegments = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/refetch-inactive-parallel-segments.js [app-client] (ecmascript)");
const _flightdatahelpers = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/flight-data-helpers.js [app-client] (ecmascript)");
function createInitialRouterState({ navigatedAt, initialFlightData, initialCanonicalUrlParts, initialRenderedSearch, initialParallelRoutes, location }) {
    // When initialized on the server, the canonical URL is provided as an array of parts.
    // This is to ensure that when the RSC payload streamed to the client, crawlers don't interpret it
    // as a URL that should be crawled.
    const initialCanonicalUrl = initialCanonicalUrlParts.join('/');
    const normalizedFlightData = (0, _flightdatahelpers.getFlightDataPartsFromPath)(initialFlightData[0]);
    const { tree: initialTree, seedData: initialSeedData, head: initialHead } = normalizedFlightData;
    // For the SSR render, seed data should always be available (we only send back a `null` response
    // in the case of a `loading` segment, pre-PPR.)
    const rsc = initialSeedData?.[0];
    const loading = initialSeedData?.[2] ?? null;
    const cache = {
        lazyData: null,
        rsc,
        prefetchRsc: null,
        head: null,
        prefetchHead: null,
        // The cache gets seeded during the first render. `initialParallelRoutes` ensures the cache from the first render is there during the second render.
        parallelRoutes: initialParallelRoutes,
        loading,
        navigatedAt
    };
    const canonicalUrl = // This is safe to do as canonicalUrl can't be rendered, it's only used to control the history updates in the useEffect further down in this file.
    location ? (0, _createhreffromurl.createHrefFromUrl)(location) : initialCanonicalUrl;
    (0, _refetchinactiveparallelsegments.addRefreshMarkerToActiveParallelSegments)(initialTree, canonicalUrl);
    // When the cache hasn't been seeded yet we fill the cache with the head.
    if (initialParallelRoutes === null || initialParallelRoutes.size === 0) {
        (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(navigatedAt, cache, undefined, initialTree, initialSeedData, initialHead);
    }
    const initialState = {
        tree: initialTree,
        cache,
        pushRef: {
            pendingPush: false,
            mpaNavigation: false,
            // First render needs to preserve the previous window.history.state
            // to avoid it being overwritten on navigation back/forward with MPA Navigation.
            preserveCustomHistoryState: true
        },
        focusAndScrollRef: {
            apply: false,
            onlyHashChange: false,
            hashFragment: null,
            segmentPaths: []
        },
        canonicalUrl,
        renderedSearch: initialRenderedSearch,
        nextUrl: ((0, _computechangedpath.extractPathFromFlightRouterState)(initialTree) || location?.pathname) ?? null,
        previousNextUrl: null,
        debugInfo: null
    };
    return initialState;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-initial-router-state.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/app-link-gc.js [app-client] (ecmascript)", (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/app-link-gc.js [app-client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/app-link-gc.js [app-client] (ecmascript)\n- Execution of <ModuleChunkItem as EcmascriptChunkItem>::content_with_async_module_info failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/app-index.js [app-client] (ecmascript)", (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/app-index.js [app-client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/app-index.js [app-client] (ecmascript)\n- Execution of <ModuleChunkItem as EcmascriptChunkItem>::content_with_async_module_info failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/app-next-turbopack.js [app-client] (ecmascript)", (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/app-next-turbopack.js [app-client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/app-next-turbopack.js [app-client] (ecmascript)\n- Execution of <ModuleChunkItem as EcmascriptChunkItem>::content_with_async_module_info failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
]);

//# sourceMappingURL=275cd_next_dist_client_1d738b0e._.js.map