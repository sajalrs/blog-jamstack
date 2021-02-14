webpackHotUpdate_N_E("pages/_app",{

/***/ "./lib/apolloClient.tsx":
/*!******************************!*\
  !*** ./lib/apolloClient.tsx ***!
  \******************************/
/*! exports provided: APOLLO_STATE_PROP_NAME, initializeApollo, addApolloState, useApollo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"APOLLO_STATE_PROP_NAME\", function() { return APOLLO_STATE_PROP_NAME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initializeApollo\", function() { return initializeApollo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addApolloState\", function() { return addApolloState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useApollo\", function() { return useApollo; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client/utilities */ \"./node_modules/@apollo/client/utilities/index.js\");\n/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! deepmerge */ \"./node_modules/deepmerge/dist/cjs.js\");\n/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/isEqual */ \"./node_modules/lodash/isEqual.js\");\n/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-link */ \"./node_modules/apollo-link/lib/bundle.esm.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar APOLLO_STATE_PROP_NAME = \"__APOLLO_STATE__\";\nvar apolloClient;\nvar internalAPI = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"createHttpLink\"])({\n  uri: \"\".concat(process.env.NEXT_PUBLIC_DOMAIN, \"/api/graphql\"),\n  credentials: \"same-origin\"\n});\nvar wordPressAPI = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"createHttpLink\"])({\n  uri: \"http://localhost:8080/graphql\"\n});\n\nfunction createApolloClient() {\n  return new _apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"ApolloClient\"]({\n    ssrMode: false,\n    // link: new HttpLink({\n    //   uri: `http://wordpress:80/graphql`, // Server URL (must be absolute)\n    //   // credentials: \"same-origin\", // Additional fetch() options like `credentials` or `headers`\n    // }),\n    link: apollo_link__WEBPACK_IMPORTED_MODULE_6__[\"ApolloLink\"].split(function (operation) {\n      return operation.getContext().clientName === \"wordPress\";\n    }, wordPressAPI, internalAPI),\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"InMemoryCache\"]({\n      typePolicies: {\n        Query: {\n          fields: {\n            allPosts: Object(_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_3__[\"concatPagination\"])()\n          }\n        }\n      }\n    })\n  });\n}\n\nfunction initializeApollo() {\n  var _apolloClient2;\n\n  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n\n  var _apolloClient = (_apolloClient2 = apolloClient) !== null && _apolloClient2 !== void 0 ? _apolloClient2 : createApolloClient(); // If your page has Next.js data fetching methods that use Apollo Client, the initial state\n  // gets hydrated here\n\n\n  if (initialState) {\n    // Get existing cache, loaded during client side data fetching\n    var existingCache = _apolloClient.extract(); // Merge the existing cache into data passed from getStaticProps/getServerSideProps\n\n\n    var data = deepmerge__WEBPACK_IMPORTED_MODULE_4___default()(initialState, existingCache, {\n      // combine arrays using object equality (like in sets)\n      arrayMerge: function arrayMerge(destinationArray, sourceArray) {\n        return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(sourceArray), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(destinationArray.filter(function (d) {\n          return sourceArray.every(function (s) {\n            return !lodash_isEqual__WEBPACK_IMPORTED_MODULE_5___default()(d, s);\n          });\n        })));\n      }\n    }); // Restore the cache with the merged data\n\n    _apolloClient.cache.restore(data);\n  } // For SSG and SSR always create a new Apollo Client\n\n\n  if (false) {} // Create the Apollo Client once in the client\n\n  if (!apolloClient) apolloClient = _apolloClient;\n  return _apolloClient;\n}\nfunction addApolloState(client, pageProps) {\n  if (pageProps !== null && pageProps !== void 0 && pageProps.props) {\n    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();\n  }\n\n  return pageProps;\n}\nfunction useApollo(pageProps) {\n  _s();\n\n  var state = pageProps[APOLLO_STATE_PROP_NAME];\n  var store = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useMemo\"])(function () {\n    return initializeApollo(state);\n  }, [state]);\n  return store;\n}\n\n_s(useApollo, \"K8ucUnUnAgJZGJWAL9Ze8IHCmoQ=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2Fwb2xsb0NsaWVudC50c3g/M2RkYiJdLCJuYW1lcyI6WyJBUE9MTE9fU1RBVEVfUFJPUF9OQU1FIiwiYXBvbGxvQ2xpZW50IiwiaW50ZXJuYWxBUEkiLCJjcmVhdGVIdHRwTGluayIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19ET01BSU4iLCJjcmVkZW50aWFscyIsIndvcmRQcmVzc0FQSSIsImNyZWF0ZUFwb2xsb0NsaWVudCIsIkFwb2xsb0NsaWVudCIsInNzck1vZGUiLCJsaW5rIiwiQXBvbGxvTGluayIsInNwbGl0Iiwib3BlcmF0aW9uIiwiZ2V0Q29udGV4dCIsImNsaWVudE5hbWUiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJ0eXBlUG9saWNpZXMiLCJRdWVyeSIsImZpZWxkcyIsImFsbFBvc3RzIiwiY29uY2F0UGFnaW5hdGlvbiIsImluaXRpYWxpemVBcG9sbG8iLCJpbml0aWFsU3RhdGUiLCJfYXBvbGxvQ2xpZW50IiwiZXhpc3RpbmdDYWNoZSIsImV4dHJhY3QiLCJkYXRhIiwibWVyZ2UiLCJhcnJheU1lcmdlIiwiZGVzdGluYXRpb25BcnJheSIsInNvdXJjZUFycmF5IiwiZmlsdGVyIiwiZCIsImV2ZXJ5IiwicyIsImlzRXF1YWwiLCJyZXN0b3JlIiwiYWRkQXBvbGxvU3RhdGUiLCJjbGllbnQiLCJwYWdlUHJvcHMiLCJwcm9wcyIsInVzZUFwb2xsbyIsInN0YXRlIiwic3RvcmUiLCJ1c2VNZW1vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsc0JBQXNCLEdBQUcsa0JBQS9CO0FBRVAsSUFBSUMsWUFBSjtBQUVBLElBQU1DLFdBQVcsR0FBR0MscUVBQWMsQ0FBQztBQUNqQ0MsS0FBRyxZQUFLQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsa0JBQWpCLGlCQUQ4QjtBQUVqQ0MsYUFBVyxFQUFFO0FBRm9CLENBQUQsQ0FBbEM7QUFLQSxJQUFNQyxZQUFZLEdBQUdOLHFFQUFjLENBQUM7QUFDbENDLEtBQUcsRUFBRTtBQUQ2QixDQUFELENBQW5DOztBQUlBLFNBQVNNLGtCQUFULEdBQThCO0FBQzVCLFNBQU8sSUFBSUMsMkRBQUosQ0FBaUI7QUFDdEJDLFdBQU8sT0FEZTtBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBQyxRQUFJLEVBQUVDLHNEQUFVLENBQUNDLEtBQVgsQ0FDRixVQUFDQyxTQUFEO0FBQUEsYUFBcUJBLFNBQVMsQ0FBQ0MsVUFBVixHQUF1QkMsVUFBdkIsS0FBc0MsV0FBM0Q7QUFBQSxLQURFLEVBRUZULFlBRkUsRUFHRlAsV0FIRSxDQU5nQjtBQVd0QmlCLFNBQUssRUFBRSxJQUFJQyw0REFBSixDQUFrQjtBQUN2QkMsa0JBQVksRUFBRTtBQUNaQyxhQUFLLEVBQUU7QUFDTEMsZ0JBQU0sRUFBRTtBQUNOQyxvQkFBUSxFQUFFQyxpRkFBZ0I7QUFEcEI7QUFESDtBQURLO0FBRFMsS0FBbEI7QUFYZSxHQUFqQixDQUFQO0FBcUJEOztBQUVNLFNBQVNDLGdCQUFULEdBQTJEO0FBQUE7O0FBQUEsTUFBakNDLFlBQWlDLHVFQUFOLElBQU07O0FBQ2hFLE1BQU1DLGFBQWEscUJBQUczQixZQUFILDJEQUFtQlMsa0JBQWtCLEVBQXhELENBRGdFLENBR2hFO0FBQ0E7OztBQUNBLE1BQUlpQixZQUFKLEVBQWtCO0FBQ2hCO0FBQ0EsUUFBTUUsYUFBYSxHQUFHRCxhQUFhLENBQUNFLE9BQWQsRUFBdEIsQ0FGZ0IsQ0FJaEI7OztBQUNBLFFBQU1DLElBQUksR0FBR0MsZ0RBQUssQ0FBQ0wsWUFBRCxFQUFlRSxhQUFmLEVBQThCO0FBQzlDO0FBQ0FJLGdCQUFVLEVBQUUsb0JBQUNDLGdCQUFELEVBQW1CQyxXQUFuQjtBQUFBLHNIQUNQQSxXQURPLGdHQUVQRCxnQkFBZ0IsQ0FBQ0UsTUFBakIsQ0FBd0IsVUFBQ0MsQ0FBRDtBQUFBLGlCQUN6QkYsV0FBVyxDQUFDRyxLQUFaLENBQWtCLFVBQUNDLENBQUQ7QUFBQSxtQkFBTyxDQUFDQyxxREFBTyxDQUFDSCxDQUFELEVBQUlFLENBQUosQ0FBZjtBQUFBLFdBQWxCLENBRHlCO0FBQUEsU0FBeEIsQ0FGTztBQUFBO0FBRmtDLEtBQTlCLENBQWxCLENBTGdCLENBZWhCOztBQUNBWCxpQkFBYSxDQUFDVCxLQUFkLENBQW9Cc0IsT0FBcEIsQ0FBNEJWLElBQTVCO0FBQ0QsR0F0QitELENBdUJoRTs7O0FBQ0EsYUFBbUMsRUF4QjZCLENBeUJoRTs7QUFDQSxNQUFJLENBQUM5QixZQUFMLEVBQW1CQSxZQUFZLEdBQUcyQixhQUFmO0FBRW5CLFNBQU9BLGFBQVA7QUFDRDtBQUVNLFNBQVNjLGNBQVQsQ0FDTEMsTUFESyxFQUVMQyxTQUZLLEVBR0w7QUFDQSxNQUFJQSxTQUFKLGFBQUlBLFNBQUosZUFBSUEsU0FBUyxDQUFFQyxLQUFmLEVBQXNCO0FBQ3BCRCxhQUFTLENBQUNDLEtBQVYsQ0FBZ0I3QyxzQkFBaEIsSUFBMEMyQyxNQUFNLENBQUN4QixLQUFQLENBQWFXLE9BQWIsRUFBMUM7QUFDRDs7QUFFRCxTQUFPYyxTQUFQO0FBQ0Q7QUFFTSxTQUFTRSxTQUFULENBQW1CRixTQUFuQixFQUFtQztBQUFBOztBQUN4QyxNQUFNRyxLQUFLLEdBQUdILFNBQVMsQ0FBQzVDLHNCQUFELENBQXZCO0FBQ0EsTUFBTWdELEtBQUssR0FBR0MscURBQU8sQ0FBQztBQUFBLFdBQU12QixnQkFBZ0IsQ0FBQ3FCLEtBQUQsQ0FBdEI7QUFBQSxHQUFELEVBQWdDLENBQUNBLEtBQUQsQ0FBaEMsQ0FBckI7QUFDQSxTQUFPQyxLQUFQO0FBQ0Q7O0dBSmVGLFMiLCJmaWxlIjoiLi9saWIvYXBvbGxvQ2xpZW50LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEFwb2xsb0NsaWVudCxcbiAgSW5NZW1vcnlDYWNoZSxcbiAgTm9ybWFsaXplZENhY2hlT2JqZWN0LFxuICBjcmVhdGVIdHRwTGluayxcbiAgSHR0cExpbmtcbn0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyBjb25jYXRQYWdpbmF0aW9uIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50L3V0aWxpdGllc1wiO1xuaW1wb3J0IG1lcmdlIGZyb20gXCJkZWVwbWVyZ2VcIjtcbmltcG9ydCBpc0VxdWFsIGZyb20gXCJsb2Rhc2gvaXNFcXVhbFwiO1xuaW1wb3J0IHsgQXBvbGxvTGluayB9IGZyb20gXCJhcG9sbG8tbGlua1wiO1xuXG5leHBvcnQgY29uc3QgQVBPTExPX1NUQVRFX1BST1BfTkFNRSA9IFwiX19BUE9MTE9fU1RBVEVfX1wiO1xuXG5sZXQgYXBvbGxvQ2xpZW50OiBBcG9sbG9DbGllbnQ8Tm9ybWFsaXplZENhY2hlT2JqZWN0PjtcblxuY29uc3QgaW50ZXJuYWxBUEkgPSBjcmVhdGVIdHRwTGluayh7XG4gIHVyaTogYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRE9NQUlOfS9hcGkvZ3JhcGhxbGAsXG4gIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCIsXG59KSBhcyBhbnk7XG5cbmNvbnN0IHdvcmRQcmVzc0FQSSA9IGNyZWF0ZUh0dHBMaW5rKHtcbiAgdXJpOiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9ncmFwaHFsXCIsXG59KSBhcyBhbnk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUFwb2xsb0NsaWVudCgpIHtcbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xuICAgIHNzck1vZGU6IHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIsXG4gICAgLy8gbGluazogbmV3IEh0dHBMaW5rKHtcbiAgICAvLyAgIHVyaTogYGh0dHA6Ly93b3JkcHJlc3M6ODAvZ3JhcGhxbGAsIC8vIFNlcnZlciBVUkwgKG11c3QgYmUgYWJzb2x1dGUpXG4gICAgLy8gICAvLyBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiLCAvLyBBZGRpdGlvbmFsIGZldGNoKCkgb3B0aW9ucyBsaWtlIGBjcmVkZW50aWFsc2Agb3IgYGhlYWRlcnNgXG4gICAgLy8gfSksXG4gICAgbGluazogQXBvbGxvTGluay5zcGxpdChcbiAgICAgICAgKG9wZXJhdGlvbiA6IGFueSkgPT4gb3BlcmF0aW9uLmdldENvbnRleHQoKS5jbGllbnROYW1lID09PSBcIndvcmRQcmVzc1wiLFxuICAgICAgICB3b3JkUHJlc3NBUEksXG4gICAgICAgIGludGVybmFsQVBJXG4gICAgKSBhcyBhbnksXG4gICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKHtcbiAgICAgIHR5cGVQb2xpY2llczoge1xuICAgICAgICBRdWVyeToge1xuICAgICAgICAgIGZpZWxkczoge1xuICAgICAgICAgICAgYWxsUG9zdHM6IGNvbmNhdFBhZ2luYXRpb24oKSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQXBvbGxvKGluaXRpYWxTdGF0ZTogYW55IHwgbnVsbCA9IG51bGwpIHtcbiAgY29uc3QgX2Fwb2xsb0NsaWVudCA9IGFwb2xsb0NsaWVudCA/PyBjcmVhdGVBcG9sbG9DbGllbnQoKTtcblxuICAvLyBJZiB5b3VyIHBhZ2UgaGFzIE5leHQuanMgZGF0YSBmZXRjaGluZyBtZXRob2RzIHRoYXQgdXNlIEFwb2xsbyBDbGllbnQsIHRoZSBpbml0aWFsIHN0YXRlXG4gIC8vIGdldHMgaHlkcmF0ZWQgaGVyZVxuICBpZiAoaW5pdGlhbFN0YXRlKSB7XG4gICAgLy8gR2V0IGV4aXN0aW5nIGNhY2hlLCBsb2FkZWQgZHVyaW5nIGNsaWVudCBzaWRlIGRhdGEgZmV0Y2hpbmdcbiAgICBjb25zdCBleGlzdGluZ0NhY2hlID0gX2Fwb2xsb0NsaWVudC5leHRyYWN0KCk7XG5cbiAgICAvLyBNZXJnZSB0aGUgZXhpc3RpbmcgY2FjaGUgaW50byBkYXRhIHBhc3NlZCBmcm9tIGdldFN0YXRpY1Byb3BzL2dldFNlcnZlclNpZGVQcm9wc1xuICAgIGNvbnN0IGRhdGEgPSBtZXJnZShpbml0aWFsU3RhdGUsIGV4aXN0aW5nQ2FjaGUsIHtcbiAgICAgIC8vIGNvbWJpbmUgYXJyYXlzIHVzaW5nIG9iamVjdCBlcXVhbGl0eSAobGlrZSBpbiBzZXRzKVxuICAgICAgYXJyYXlNZXJnZTogKGRlc3RpbmF0aW9uQXJyYXksIHNvdXJjZUFycmF5KSA9PiBbXG4gICAgICAgIC4uLnNvdXJjZUFycmF5LFxuICAgICAgICAuLi5kZXN0aW5hdGlvbkFycmF5LmZpbHRlcigoZCkgPT5cbiAgICAgICAgICBzb3VyY2VBcnJheS5ldmVyeSgocykgPT4gIWlzRXF1YWwoZCwgcykpXG4gICAgICAgICksXG4gICAgICBdLFxuICAgIH0pO1xuXG4gICAgLy8gUmVzdG9yZSB0aGUgY2FjaGUgd2l0aCB0aGUgbWVyZ2VkIGRhdGFcbiAgICBfYXBvbGxvQ2xpZW50LmNhY2hlLnJlc3RvcmUoZGF0YSk7XG4gIH1cbiAgLy8gRm9yIFNTRyBhbmQgU1NSIGFsd2F5cyBjcmVhdGUgYSBuZXcgQXBvbGxvIENsaWVudFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIF9hcG9sbG9DbGllbnQ7XG4gIC8vIENyZWF0ZSB0aGUgQXBvbGxvIENsaWVudCBvbmNlIGluIHRoZSBjbGllbnRcbiAgaWYgKCFhcG9sbG9DbGllbnQpIGFwb2xsb0NsaWVudCA9IF9hcG9sbG9DbGllbnQ7XG5cbiAgcmV0dXJuIF9hcG9sbG9DbGllbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRBcG9sbG9TdGF0ZShcbiAgY2xpZW50OiBBcG9sbG9DbGllbnQ8Tm9ybWFsaXplZENhY2hlT2JqZWN0PixcbiAgcGFnZVByb3BzOiBhbnlcbikge1xuICBpZiAocGFnZVByb3BzPy5wcm9wcykge1xuICAgIHBhZ2VQcm9wcy5wcm9wc1tBUE9MTE9fU1RBVEVfUFJPUF9OQU1FXSA9IGNsaWVudC5jYWNoZS5leHRyYWN0KCk7XG4gIH1cblxuICByZXR1cm4gcGFnZVByb3BzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQXBvbGxvKHBhZ2VQcm9wczogYW55KSB7XG4gIGNvbnN0IHN0YXRlID0gcGFnZVByb3BzW0FQT0xMT19TVEFURV9QUk9QX05BTUVdO1xuICBjb25zdCBzdG9yZSA9IHVzZU1lbW8oKCkgPT4gaW5pdGlhbGl6ZUFwb2xsbyhzdGF0ZSksIFtzdGF0ZV0pO1xuICByZXR1cm4gc3RvcmU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/apolloClient.tsx\n");

/***/ })

})