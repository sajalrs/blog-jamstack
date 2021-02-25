webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: __N_SSP, POSTS_QUERY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"POSTS_QUERY\", function() { return POSTS_QUERY; });\n/* harmony import */ var _home_node_app_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Card */ \"./components/Card/index.tsx\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"./node_modules/@material-ui/core/esm/IconButton/index.js\");\n/* harmony import */ var _material_ui_icons_NavigateBefore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/NavigateBefore */ \"./node_modules/@material-ui/icons/NavigateBefore.js\");\n/* harmony import */ var _material_ui_icons_NavigateBefore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_NavigateBefore__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/NavigateNext */ \"./node_modules/@material-ui/icons/NavigateNext.js\");\n/* harmony import */ var _material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _jsxFileName = \"/home/node/app/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_home_node_app_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  query postsQuery($first: Int, $last: Int, $after: String, $before: String) {\\n    posts(first: $first, last: $last, after: $after, before: $before) {\\n      pageInfo {\\n        hasNextPage\\n        hasPreviousPage\\n        startCursor\\n        endCursor\\n      }\\n      edges {\\n        cursor\\n        node {\\n          date\\n          featuredImage {\\n            title\\n            sourceUrl\\n          }\\n          title\\n          author {\\n            id\\n          }\\n          id\\n          slug\\n          excerpt\\n        }\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\nvar __N_SSP = true;\nvar POSTS_QUERY = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"gql\"])(_templateObject());\n\nvar updateQuery = function updateQuery(previousResult, _ref) {\n  var fetchMoreResult = _ref.fetchMoreResult;\n  return fetchMoreResult.posts.edges.length ? fetchMoreResult : previousResult;\n};\n\nvar IndexPage = function IndexPage() {\n  _s();\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useQuery\"])(POSTS_QUERY, {\n    context: {\n      clientName: \"wordPress\"\n    },\n    variables: {\n      first: 2,\n      last: null,\n      after: null,\n      before: null\n    },\n    notifyOnNetworkStatusChange: true\n  }),\n      loading = _useQuery.loading,\n      data = _useQuery.data,\n      networkStatus = _useQuery.networkStatus,\n      fetchMore = _useQuery.fetchMore;\n\n  var loadingArticle = networkStatus === _apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"NetworkStatus\"].fetchMore;\n  var posts = data.posts;\n\n  if (loading && !loadingArticle) {\n    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      title: \"Loading | Next.js + TypeScript Example\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 7\n      }\n    }, __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      title: \"Loading...\",\n      description: \"Loading...\",\n      imgTitle: \"Loading\",\n      imgURL: \"loading.gif\",\n      cardWidth: 345,\n      imgHeight: 140,\n      link: \"/\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 9\n      }\n    }), \"))\");\n  } else {\n    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      title: \"Home | Next.js + TypeScript Example\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 7\n      }\n    }, __jsx(\"div\", {\n      className: \"flex flex-col items-center\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 9\n      }\n    }, posts.edges.map(function (edge, index) {\n      var node = edge.node;\n      return __jsx(\"div\", {\n        className: \"m-4\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 15\n        }\n      }, __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        key: index,\n        title: node.title,\n        description: node.excerpt || \"\",\n        imgTitle: node.title,\n        imgURL: node.featuredImage ? node.featuredImage.sourceUrl : \"image_not_found.png\",\n        cardWidth: 345,\n        imgHeight: 140,\n        link: \"posts/\".concat(node.slug),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 17\n        }\n      }));\n    }), __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 11\n      }\n    }, data.posts.pageInfo.hasPreviousPage ? __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      onClick: function onClick() {\n        fetchMore({\n          variables: {\n            first: null,\n            after: null,\n            last: 2,\n            before: data.posts.pageInfo.startCursor || null\n          },\n          updateQuery: updateQuery\n        });\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 15\n      }\n    }, __jsx(_material_ui_icons_NavigateBefore__WEBPACK_IMPORTED_MODULE_6___default.a, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 17\n      }\n    })) : null, data.posts.pageInfo.hasNextPage ? __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      onClick: function onClick() {\n        fetchMore({\n          variables: {\n            first: 2,\n            after: data.posts.pageInfo.endCursor || null,\n            last: null,\n            before: null\n          },\n          updateQuery: updateQuery\n        });\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 122,\n        columnNumber: 15\n      }\n    }, __jsx(_material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_7___default.a, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 135,\n        columnNumber: 17\n      }\n    })) : null)));\n  }\n};\n\n_s(IndexPage, \"i4Wf9b280u2HxZt5P7ZbwcaUfZY=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useQuery\"]];\n});\n\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiUE9TVFNfUVVFUlkiLCJncWwiLCJ1cGRhdGVRdWVyeSIsInByZXZpb3VzUmVzdWx0IiwiZmV0Y2hNb3JlUmVzdWx0IiwicG9zdHMiLCJlZGdlcyIsImxlbmd0aCIsIkluZGV4UGFnZSIsInVzZVF1ZXJ5IiwiY29udGV4dCIsImNsaWVudE5hbWUiLCJ2YXJpYWJsZXMiLCJmaXJzdCIsImxhc3QiLCJhZnRlciIsImJlZm9yZSIsIm5vdGlmeU9uTmV0d29ya1N0YXR1c0NoYW5nZSIsImxvYWRpbmciLCJkYXRhIiwibmV0d29ya1N0YXR1cyIsImZldGNoTW9yZSIsImxvYWRpbmdBcnRpY2xlIiwiTmV0d29ya1N0YXR1cyIsIm1hcCIsImVkZ2UiLCJpbmRleCIsIm5vZGUiLCJ0aXRsZSIsImV4Y2VycHQiLCJmZWF0dXJlZEltYWdlIiwic291cmNlVXJsIiwic2x1ZyIsInBhZ2VJbmZvIiwiaGFzUHJldmlvdXNQYWdlIiwic3RhcnRDdXJzb3IiLCJoYXNOZXh0UGFnZSIsImVuZEN1cnNvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdPLElBQU1BLFdBQVcsR0FBR0MsMERBQUgsbUJBQWpCOztBQThCUCxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUNsQkMsY0FEa0IsUUFHZjtBQUFBLE1BRERDLGVBQ0MsUUFEREEsZUFDQztBQUNILFNBQU9BLGVBQWUsQ0FBQ0MsS0FBaEIsQ0FBc0JDLEtBQXRCLENBQTRCQyxNQUE1QixHQUFxQ0gsZUFBckMsR0FBdURELGNBQTlEO0FBQ0QsQ0FMRDs7QUFPQSxJQUFNSyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQUEsa0JBQzhCQywrREFBUSxDQUFDVCxXQUFELEVBQWM7QUFDeEVVLFdBQU8sRUFBRTtBQUFFQyxn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QUE7QUFBQTtBQUFBO0FBQUEsTUFiRixDQURELEdBZ0JHLElBakJOLEVBbUJHaUIsSUFBSSxDQUFDZCxLQUFMLENBQVc0QixRQUFYLENBQW9CRyxXQUFwQixHQUNDLE1BQUMsb0VBQUQ7QUFDRSxhQUFPLEVBQUUsbUJBQU07QUFDYmYsaUJBQVMsQ0FBQztBQUNSVCxtQkFBUyxFQUFFO0FBQ1RDLGlCQUFLLEVBQUUsQ0FERTtBQUVURSxpQkFBSyxFQUFFSSxJQUFJLENBQUNkLEtBQUwsQ0FBVzRCLFFBQVgsQ0FBb0JJLFNBQXBCLElBQWlDLElBRi9CO0FBR1R2QixnQkFBSSxFQUFFLElBSEc7QUFJVEUsa0JBQU0sRUFBRTtBQUpDLFdBREg7QUFPUmQscUJBQVcsRUFBWEE7QUFQUSxTQUFELENBQVQ7QUFTRCxPQVhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FhRSxNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFiRixDQURELEdBZ0JHLElBbkNOLENBdkJGLENBREYsQ0FERjtBQWlFRDtBQUNGLENBaEdEOztHQUFNTSxTO1VBQ2dEQyx1RDs7O0tBRGhERCxTO0FBcUhTQSx3RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgeyBpbml0aWFsaXplQXBvbGxvLCBhZGRBcG9sbG9TdGF0ZSB9IGZyb20gXCIuLi9saWIvYXBvbGxvQ2xpZW50XCI7XG5pbXBvcnQgeyBncWwsIHVzZVF1ZXJ5LCBOZXR3b3JrU3RhdHVzIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgTWVkaWFDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRcIjtcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XG5pbXBvcnQgTmF2aWdhdGVCZWZvcmVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTmF2aWdhdGVCZWZvcmVcIjtcbmltcG9ydCBOYXZpZ2F0ZU5leHRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTmF2aWdhdGVOZXh0XCI7XG5pbXBvcnQgeyBGZXRjaFJlc3VsdCB9IGZyb20gXCJhcG9sbG8tbGlua1wiO1xuXG5leHBvcnQgY29uc3QgUE9TVFNfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IHBvc3RzUXVlcnkoJGZpcnN0OiBJbnQsICRsYXN0OiBJbnQsICRhZnRlcjogU3RyaW5nLCAkYmVmb3JlOiBTdHJpbmcpIHtcbiAgICBwb3N0cyhmaXJzdDogJGZpcnN0LCBsYXN0OiAkbGFzdCwgYWZ0ZXI6ICRhZnRlciwgYmVmb3JlOiAkYmVmb3JlKSB7XG4gICAgICBwYWdlSW5mbyB7XG4gICAgICAgIGhhc05leHRQYWdlXG4gICAgICAgIGhhc1ByZXZpb3VzUGFnZVxuICAgICAgICBzdGFydEN1cnNvclxuICAgICAgICBlbmRDdXJzb3JcbiAgICAgIH1cbiAgICAgIGVkZ2VzIHtcbiAgICAgICAgY3Vyc29yXG4gICAgICAgIG5vZGUge1xuICAgICAgICAgIGRhdGVcbiAgICAgICAgICBmZWF0dXJlZEltYWdlIHtcbiAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICBzb3VyY2VVcmxcbiAgICAgICAgICB9XG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgICBhdXRob3Ige1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICB9XG4gICAgICAgICAgaWRcbiAgICAgICAgICBzbHVnXG4gICAgICAgICAgZXhjZXJwdFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCB1cGRhdGVRdWVyeSA9IChcbiAgcHJldmlvdXNSZXN1bHQ6IEZldGNoUmVzdWx0LFxuICB7IGZldGNoTW9yZVJlc3VsdCB9OiB7IGZldGNoTW9yZVJlc3VsdD86IGFueSB9XG4pID0+IHtcbiAgcmV0dXJuIGZldGNoTW9yZVJlc3VsdC5wb3N0cy5lZGdlcy5sZW5ndGggPyBmZXRjaE1vcmVSZXN1bHQgOiBwcmV2aW91c1Jlc3VsdDtcbn07XG5cbmNvbnN0IEluZGV4UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgeyBsb2FkaW5nLCBkYXRhLCBuZXR3b3JrU3RhdHVzLCBmZXRjaE1vcmUgfSA9IHVzZVF1ZXJ5KFBPU1RTX1FVRVJZLCB7XG4gICAgY29udGV4dDogeyBjbGllbnROYW1lOiBcIndvcmRQcmVzc1wiIH0sXG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBmaXJzdDogMixcbiAgICAgIGxhc3Q6IG51bGwsXG4gICAgICBhZnRlcjogbnVsbCxcbiAgICAgIGJlZm9yZTogbnVsbCxcbiAgICB9LFxuICAgIG5vdGlmeU9uTmV0d29ya1N0YXR1c0NoYW5nZTogdHJ1ZSxcbiAgfSk7XG5cbiAgY29uc3QgbG9hZGluZ0FydGljbGUgPSBuZXR3b3JrU3RhdHVzID09PSBOZXR3b3JrU3RhdHVzLmZldGNoTW9yZTtcbiAgY29uc3QgeyBwb3N0cyB9ID0gZGF0YTtcbiAgaWYgKGxvYWRpbmcgJiYgIWxvYWRpbmdBcnRpY2xlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQgdGl0bGU9XCJMb2FkaW5nIHwgTmV4dC5qcyArIFR5cGVTY3JpcHQgRXhhbXBsZVwiPlxuICAgICAgICA8TWVkaWFDYXJkXG4gICAgICAgICAgdGl0bGU9e1wiTG9hZGluZy4uLlwifVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtcIkxvYWRpbmcuLi5cIn1cbiAgICAgICAgICBpbWdUaXRsZT17XCJMb2FkaW5nXCJ9XG4gICAgICAgICAgaW1nVVJMPXtcImxvYWRpbmcuZ2lmXCJ9XG4gICAgICAgICAgY2FyZFdpZHRoPXszNDV9XG4gICAgICAgICAgaW1nSGVpZ2h0PXsxNDB9XG4gICAgICAgICAgbGluaz17YC9gfVxuICAgICAgICAvPlxuICAgICAgICApKVxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dCB0aXRsZT1cIkhvbWUgfCBOZXh0LmpzICsgVHlwZVNjcmlwdCBFeGFtcGxlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICB7cG9zdHMuZWRnZXMubWFwKChlZGdlOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgbm9kZSB9ID0gZWRnZTtcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTRcIj5cbiAgICAgICAgICAgICAgICA8TWVkaWFDYXJkXG4gICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgdGl0bGU9e25vZGUudGl0bGV9XG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17bm9kZS5leGNlcnB0IHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICBpbWdUaXRsZT17bm9kZS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIGltZ1VSTD17XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZmVhdHVyZWRJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgID8gbm9kZS5mZWF0dXJlZEltYWdlLnNvdXJjZVVybFxuICAgICAgICAgICAgICAgICAgICAgIDogXCJpbWFnZV9ub3RfZm91bmQucG5nXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGNhcmRXaWR0aD17MzQ1fVxuICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0PXsxNDB9XG4gICAgICAgICAgICAgICAgICBsaW5rPXtgcG9zdHMvJHtub2RlLnNsdWd9YH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtkYXRhLnBvc3RzLnBhZ2VJbmZvLmhhc1ByZXZpb3VzUGFnZSA/IChcbiAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBmZXRjaE1vcmUoe1xuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBmaXJzdDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICBhZnRlcjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICBsYXN0OiAyLFxuICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZTogZGF0YS5wb3N0cy5wYWdlSW5mby5zdGFydEN1cnNvciB8fCBudWxsLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVRdWVyeSxcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TmF2aWdhdGVCZWZvcmVJY29uIC8+XG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgICB7ZGF0YS5wb3N0cy5wYWdlSW5mby5oYXNOZXh0UGFnZSA/IChcbiAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBmZXRjaE1vcmUoe1xuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBmaXJzdDogMixcbiAgICAgICAgICAgICAgICAgICAgICBhZnRlcjogZGF0YS5wb3N0cy5wYWdlSW5mby5lbmRDdXJzb3IgfHwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICBsYXN0OiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlUXVlcnksXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE5hdmlnYXRlTmV4dEljb24gLz5cbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgY29uc3QgYXBvbGxvQ2xpZW50ID0gaW5pdGlhbGl6ZUFwb2xsbygpO1xuXG4gIGF3YWl0IGFwb2xsb0NsaWVudC5xdWVyeSh7XG4gICAgcXVlcnk6IFBPU1RTX1FVRVJZLFxuICAgIGNvbnRleHQ6IHsgY2xpZW50TmFtZTogXCJ3b3JkUHJlc3NcIiB9LFxuICAgIHZhcmlhYmxlczoge1xuICAgICAgZmlyc3Q6IDIsXG4gICAgICBsYXN0OiBudWxsLFxuICAgICAgYWZ0ZXI6IG51bGwsXG4gICAgICBiZWZvcmU6IG51bGwsXG4gICAgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIGFkZEFwb2xsb1N0YXRlKGFwb2xsb0NsaWVudCwge1xuICAgIHByb3BzOiB7fSxcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})