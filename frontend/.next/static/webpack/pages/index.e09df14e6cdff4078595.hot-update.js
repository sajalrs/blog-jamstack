webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: __N_SSP, POSTS_QUERY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"POSTS_QUERY\", function() { return POSTS_QUERY; });\n/* harmony import */ var _home_node_app_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Card */ \"./components/Card/index.tsx\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"./node_modules/@material-ui/core/esm/IconButton/index.js\");\n/* harmony import */ var _material_ui_icons_NavigateBefore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/NavigateBefore */ \"./node_modules/@material-ui/icons/NavigateBefore.js\");\n/* harmony import */ var _material_ui_icons_NavigateBefore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_NavigateBefore__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/NavigateNext */ \"./node_modules/@material-ui/icons/NavigateNext.js\");\n/* harmony import */ var _material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _jsxFileName = \"/home/node/app/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_home_node_app_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  query postsQuery($first: Int, $last: Int, $after: String, $before: String) {\\n    posts(first: $first, last: $last, after: $after, before: $before) {\\n      pageInfo {\\n        hasNextPage\\n        hasPreviousPage\\n        startCursor\\n        endCursor\\n      }\\n      edges {\\n        cursor\\n        node {\\n          date\\n          featuredImage {\\n            title\\n            sourceUrl\\n          }\\n          title\\n          author {\\n            id\\n          }\\n          id\\n          slug\\n          excerpt\\n        }\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\nvar __N_SSP = true;\nvar POSTS_QUERY = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"gql\"])(_templateObject());\nvar ITEMS_PER_PAGE = 3;\n\nvar updateQuery = function updateQuery(previousResult, _ref) {\n  var fetchMoreResult = _ref.fetchMoreResult;\n  return fetchMoreResult.posts.edges.length ? fetchMoreResult : previousResult;\n};\n\nvar IndexPage = function IndexPage() {\n  _s();\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useQuery\"])(POSTS_QUERY, {\n    context: {\n      clientName: \"wordPress\"\n    },\n    variables: {\n      first: 2,\n      last: null,\n      after: null,\n      before: null\n    },\n    notifyOnNetworkStatusChange: true\n  }),\n      loading = _useQuery.loading,\n      data = _useQuery.data,\n      networkStatus = _useQuery.networkStatus,\n      fetchMore = _useQuery.fetchMore;\n\n  var loadingArticle = networkStatus === _apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"NetworkStatus\"].fetchMore;\n  var posts = data.posts;\n  console.log(posts.pageInfo.hasPreviousPage);\n\n  if (loading && !loadingArticle) {\n    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      title: \"Loading | Next.js + TypeScript Example\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 7\n      }\n    }, __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      title: \"Loading...\",\n      description: \"Loading...\",\n      imgTitle: \"Loading\",\n      imgURL: \"loading.gif\",\n      cardWidth: 345,\n      imgHeight: 140,\n      link: \"/\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }\n    }), \"))\");\n  } else {\n    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      title: \"Home | Next.js + TypeScript Example\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 7\n      }\n    }, __jsx(\"div\", {\n      className: \"flex flex-col items-center\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }\n    }, posts.edges.map(function (edge, index) {\n      var node = edge.node;\n      return __jsx(\"div\", {\n        className: \"m-4\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 15\n        }\n      }, __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        key: index,\n        title: node.title,\n        description: node.excerpt || \"\",\n        imgTitle: node.title,\n        imgURL: node.featuredImage ? node.featuredImage.sourceUrl : \"image_not_found.png\",\n        cardWidth: 345,\n        imgHeight: 140,\n        link: \"posts/\".concat(node.slug),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 17\n        }\n      }));\n    }), __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 11\n      }\n    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      onClick: function onClick() {\n        fetchMore({\n          variables: {\n            first: null,\n            after: null,\n            last: ITEMS_PER_PAGE,\n            before: posts.pageInfo.startCursor || null\n          },\n          updateQuery: updateQuery\n        });\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 15\n      }\n    }, __jsx(_material_ui_icons_NavigateBefore__WEBPACK_IMPORTED_MODULE_6___default.a, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 17\n      }\n    })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      onClick: function onClick() {\n        fetchMore({\n          variables: {\n            first: ITEMS_PER_PAGE,\n            after: posts.pageInfo.endCursor || null,\n            last: null,\n            before: null\n          },\n          updateQuery: updateQuery\n        });\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 15\n      }\n    }, __jsx(_material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_7___default.a, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 137,\n        columnNumber: 17\n      }\n    })))));\n  }\n};\n\n_s(IndexPage, \"i4Wf9b280u2HxZt5P7ZbwcaUfZY=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useQuery\"]];\n});\n\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiUE9TVFNfUVVFUlkiLCJncWwiLCJJVEVNU19QRVJfUEFHRSIsInVwZGF0ZVF1ZXJ5IiwicHJldmlvdXNSZXN1bHQiLCJmZXRjaE1vcmVSZXN1bHQiLCJwb3N0cyIsImVkZ2VzIiwibGVuZ3RoIiwiSW5kZXhQYWdlIiwidXNlUXVlcnkiLCJjb250ZXh0IiwiY2xpZW50TmFtZSIsInZhcmlhYmxlcyIsImZpcnN0IiwibGFzdCIsImFmdGVyIiwiYmVmb3JlIiwibm90aWZ5T25OZXR3b3JrU3RhdHVzQ2hhbmdlIiwibG9hZGluZyIsImRhdGEiLCJuZXR3b3JrU3RhdHVzIiwiZmV0Y2hNb3JlIiwibG9hZGluZ0FydGljbGUiLCJOZXR3b3JrU3RhdHVzIiwiY29uc29sZSIsImxvZyIsInBhZ2VJbmZvIiwiaGFzUHJldmlvdXNQYWdlIiwibWFwIiwiZWRnZSIsImluZGV4Iiwibm9kZSIsInRpdGxlIiwiZXhjZXJwdCIsImZlYXR1cmVkSW1hZ2UiLCJzb3VyY2VVcmwiLCJzbHVnIiwic3RhcnRDdXJzb3IiLCJlbmRDdXJzb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHTyxJQUFNQSxXQUFXLEdBQUdDLDBEQUFILG1CQUFqQjtBQThCUCxJQUFNQyxjQUFjLEdBQUcsQ0FBdkI7O0FBRUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FDbEJDLGNBRGtCLFFBR2Y7QUFBQSxNQUREQyxlQUNDLFFBRERBLGVBQ0M7QUFDSCxTQUFPQSxlQUFlLENBQUNDLEtBQWhCLENBQXNCQyxLQUF0QixDQUE0QkMsTUFBNUIsR0FBcUNILGVBQXJDLEdBQXVERCxjQUE5RDtBQUNELENBTEQ7O0FBT0EsSUFBTUssU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLGtCQUM4QkMs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QUE7QUFBQTtBQUFBLE9BYUUsTUFBQyx3RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BYkYsQ0FGSixFQW9CSSxNQUFDLG9FQUFEO0FBQ0UsYUFBTyxFQUFFLG1CQUFNO0FBQ2JtQixpQkFBUyxDQUFDO0FBQ1JULG1CQUFTLEVBQUU7QUFDVEMsaUJBQUssRUFBRVosY0FERTtBQUVUYyxpQkFBSyxFQUFFVixLQUFLLENBQUNxQixRQUFOLENBQWVZLFNBQWYsSUFBNEIsSUFGMUI7QUFHVHhCLGdCQUFJLEVBQUUsSUFIRztBQUlURSxrQkFBTSxFQUFFO0FBSkMsV0FESDtBQU9SZCxxQkFBVyxFQUFYQTtBQVBRLFNBQUQsQ0FBVDtBQVNELE9BWEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQWFFLE1BQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWJGLENBcEJKLENBdEJGLENBREYsQ0FERjtBQWdFRDtBQUNGLENBaEdEOztHQUFNTSxTO1VBQ2dEQyx1RDs7O0tBRGhERCxTO0FBcUhTQSx3RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgeyBpbml0aWFsaXplQXBvbGxvLCBhZGRBcG9sbG9TdGF0ZSB9IGZyb20gXCIuLi9saWIvYXBvbGxvQ2xpZW50XCI7XG5pbXBvcnQgeyBncWwsIHVzZVF1ZXJ5LCBOZXR3b3JrU3RhdHVzIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgTWVkaWFDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRcIjtcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XG5pbXBvcnQgTmF2aWdhdGVCZWZvcmVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTmF2aWdhdGVCZWZvcmVcIjtcbmltcG9ydCBOYXZpZ2F0ZU5leHRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTmF2aWdhdGVOZXh0XCI7XG5pbXBvcnQgeyBGZXRjaFJlc3VsdCB9IGZyb20gXCJhcG9sbG8tbGlua1wiO1xuXG5leHBvcnQgY29uc3QgUE9TVFNfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IHBvc3RzUXVlcnkoJGZpcnN0OiBJbnQsICRsYXN0OiBJbnQsICRhZnRlcjogU3RyaW5nLCAkYmVmb3JlOiBTdHJpbmcpIHtcbiAgICBwb3N0cyhmaXJzdDogJGZpcnN0LCBsYXN0OiAkbGFzdCwgYWZ0ZXI6ICRhZnRlciwgYmVmb3JlOiAkYmVmb3JlKSB7XG4gICAgICBwYWdlSW5mbyB7XG4gICAgICAgIGhhc05leHRQYWdlXG4gICAgICAgIGhhc1ByZXZpb3VzUGFnZVxuICAgICAgICBzdGFydEN1cnNvclxuICAgICAgICBlbmRDdXJzb3JcbiAgICAgIH1cbiAgICAgIGVkZ2VzIHtcbiAgICAgICAgY3Vyc29yXG4gICAgICAgIG5vZGUge1xuICAgICAgICAgIGRhdGVcbiAgICAgICAgICBmZWF0dXJlZEltYWdlIHtcbiAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICBzb3VyY2VVcmxcbiAgICAgICAgICB9XG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgICBhdXRob3Ige1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICB9XG4gICAgICAgICAgaWRcbiAgICAgICAgICBzbHVnXG4gICAgICAgICAgZXhjZXJwdFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBJVEVNU19QRVJfUEFHRSA9IDM7XG5cbmNvbnN0IHVwZGF0ZVF1ZXJ5ID0gKFxuICBwcmV2aW91c1Jlc3VsdDogRmV0Y2hSZXN1bHQsXG4gIHsgZmV0Y2hNb3JlUmVzdWx0IH06IHsgZmV0Y2hNb3JlUmVzdWx0PzogYW55IH1cbikgPT4ge1xuICByZXR1cm4gZmV0Y2hNb3JlUmVzdWx0LnBvc3RzLmVkZ2VzLmxlbmd0aCA/IGZldGNoTW9yZVJlc3VsdCA6IHByZXZpb3VzUmVzdWx0O1xufTtcblxuY29uc3QgSW5kZXhQYWdlID0gKCkgPT4ge1xuICBjb25zdCB7IGxvYWRpbmcsIGRhdGEsIG5ldHdvcmtTdGF0dXMsIGZldGNoTW9yZSB9ID0gdXNlUXVlcnkoUE9TVFNfUVVFUlksIHtcbiAgICBjb250ZXh0OiB7IGNsaWVudE5hbWU6IFwid29yZFByZXNzXCIgfSxcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIGZpcnN0OiAyLFxuICAgICAgbGFzdDogbnVsbCxcbiAgICAgIGFmdGVyOiBudWxsLFxuICAgICAgYmVmb3JlOiBudWxsLFxuICAgIH0sXG4gICAgbm90aWZ5T25OZXR3b3JrU3RhdHVzQ2hhbmdlOiB0cnVlLFxuICB9KTtcblxuICBjb25zdCBsb2FkaW5nQXJ0aWNsZSA9IG5ldHdvcmtTdGF0dXMgPT09IE5ldHdvcmtTdGF0dXMuZmV0Y2hNb3JlO1xuICBjb25zdCB7IHBvc3RzIH0gPSBkYXRhO1xuICBjb25zb2xlLmxvZyhwb3N0cy5wYWdlSW5mby5oYXNQcmV2aW91c1BhZ2UpO1xuICBpZiAobG9hZGluZyAmJiAhbG9hZGluZ0FydGljbGUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dCB0aXRsZT1cIkxvYWRpbmcgfCBOZXh0LmpzICsgVHlwZVNjcmlwdCBFeGFtcGxlXCI+XG4gICAgICAgIDxNZWRpYUNhcmRcbiAgICAgICAgICB0aXRsZT17XCJMb2FkaW5nLi4uXCJ9XG4gICAgICAgICAgZGVzY3JpcHRpb249e1wiTG9hZGluZy4uLlwifVxuICAgICAgICAgIGltZ1RpdGxlPXtcIkxvYWRpbmdcIn1cbiAgICAgICAgICBpbWdVUkw9e1wibG9hZGluZy5naWZcIn1cbiAgICAgICAgICBjYXJkV2lkdGg9ezM0NX1cbiAgICAgICAgICBpbWdIZWlnaHQ9ezE0MH1cbiAgICAgICAgICBsaW5rPXtgL2B9XG4gICAgICAgIC8+XG4gICAgICAgICkpXG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0IHRpdGxlPVwiSG9tZSB8IE5leHQuanMgKyBUeXBlU2NyaXB0IEV4YW1wbGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIHtwb3N0cy5lZGdlcy5tYXAoKGVkZ2U6IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBub2RlIH0gPSBlZGdlO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTRcIj5cbiAgICAgICAgICAgICAgICA8TWVkaWFDYXJkXG4gICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgdGl0bGU9e25vZGUudGl0bGV9XG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17bm9kZS5leGNlcnB0IHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICBpbWdUaXRsZT17bm9kZS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIGltZ1VSTD17XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZmVhdHVyZWRJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgID8gbm9kZS5mZWF0dXJlZEltYWdlLnNvdXJjZVVybFxuICAgICAgICAgICAgICAgICAgICAgIDogXCJpbWFnZV9ub3RfZm91bmQucG5nXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGNhcmRXaWR0aD17MzQ1fVxuICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0PXsxNDB9XG4gICAgICAgICAgICAgICAgICBsaW5rPXtgcG9zdHMvJHtub2RlLnNsdWd9YH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgZmV0Y2hNb3JlKHtcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZmlyc3Q6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgYWZ0ZXI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgbGFzdDogSVRFTVNfUEVSX1BBR0UsXG4gICAgICAgICAgICAgICAgICAgICAgYmVmb3JlOiBwb3N0cy5wYWdlSW5mby5zdGFydEN1cnNvciB8fCBudWxsLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVRdWVyeSxcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TmF2aWdhdGVCZWZvcmVJY29uIC8+XG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICBcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgZmV0Y2hNb3JlKHtcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZmlyc3Q6IElURU1TX1BFUl9QQUdFLFxuICAgICAgICAgICAgICAgICAgICAgIGFmdGVyOiBwb3N0cy5wYWdlSW5mby5lbmRDdXJzb3IgfHwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICBsYXN0OiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlUXVlcnksXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE5hdmlnYXRlTmV4dEljb24gLz5cbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgY29uc3QgYXBvbGxvQ2xpZW50ID0gaW5pdGlhbGl6ZUFwb2xsbygpO1xuXG4gIGF3YWl0IGFwb2xsb0NsaWVudC5xdWVyeSh7XG4gICAgcXVlcnk6IFBPU1RTX1FVRVJZLFxuICAgIGNvbnRleHQ6IHsgY2xpZW50TmFtZTogXCJ3b3JkUHJlc3NcIiB9LFxuICAgIHZhcmlhYmxlczoge1xuICAgICAgZmlyc3Q6IElURU1TX1BFUl9QQUdFLFxuICAgICAgbGFzdDogbnVsbCxcbiAgICAgIGFmdGVyOiBudWxsLFxuICAgICAgYmVmb3JlOiBudWxsLFxuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiBhZGRBcG9sbG9TdGF0ZShhcG9sbG9DbGllbnQsIHtcbiAgICBwcm9wczoge30sXG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})