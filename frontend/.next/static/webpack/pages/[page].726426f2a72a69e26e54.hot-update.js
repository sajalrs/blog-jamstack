webpackHotUpdate_N_E("pages/[page]",{

/***/ "./pages/[page].tsx":
/*!**************************!*\
  !*** ./pages/[page].tsx ***!
  \**************************/
/*! exports provided: __N_SSG, ITEMS_PER_PAGE, POSTS_QUERY, CURSORS_QUERY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ITEMS_PER_PAGE\", function() { return ITEMS_PER_PAGE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"POSTS_QUERY\", function() { return POSTS_QUERY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CURSORS_QUERY\", function() { return CURSORS_QUERY; });\n/* harmony import */ var _home_node_app_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Card */ \"./components/Card/index.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_PageNav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PageNav */ \"./components/PageNav/index.tsx\");\n\n\nvar _jsxFileName = \"/home/node/app/pages/[page].tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject2() {\n  var data = Object(_home_node_app_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  query IDQuery {\\n    posts {\\n      edges {\\n        cursor\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_home_node_app_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  query postsQuery($first: Int, $last: Int, $after: String, $before: String) {\\n    posts(first: $first, last: $last, after: $after, before: $before) {\\n      edges {\\n        node {\\n          date\\n          featuredImage {\\n            title\\n            sourceUrl\\n          }\\n          title\\n          author {\\n            id\\n          }\\n          id\\n          slug\\n          excerpt\\n        }\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\nvar __N_SSG = true;\nvar ITEMS_PER_PAGE = 3;\nvar POSTS_QUERY = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"gql\"])(_templateObject());\nvar CURSORS_QUERY = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"gql\"])(_templateObject2());\n\nvar IndexPage = function IndexPage(_ref) {\n  _s();\n\n  var posts = _ref.posts,\n      errors = _ref.errors,\n      numOfPages = _ref.numOfPages;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n  var pageNumber = parseInt(router.query.page.toString());\n\n  if (errors) {\n    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      title: \"Error | Next.js + TypeScript Example\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 7\n      }\n    }, __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }\n    }, __jsx(\"span\", {\n      style: {\n        color: \"red\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 11\n      }\n    }, \"Error:\"), \" \", errors));\n  }\n\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Home | Next.js + TypeScript Example\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"flex flex-col items-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }\n  }, posts.map(function (post, index) {\n    return __jsx(\"div\", {\n      className: \"m-4\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 13\n      }\n    }, __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      key: index,\n      title: post.title,\n      description: post.excerpt || \"\",\n      imgTitle: post.title,\n      imgURL: post.featuredImage ? post.featuredImage.sourceUrl : \"image_not_found.png\",\n      cardWidth: 345,\n      imgHeight: 140,\n      link: \"posts/\".concat(post.slug),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 15\n      }\n    }));\n  }), __jsx(_components_PageNav__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    pageNumber: pageNumber,\n    numOfPages: numOfPages,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(IndexPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3BhZ2VdLnRzeD80ZWI1Il0sIm5hbWVzIjpbIklURU1TX1BFUl9QQUdFIiwiUE9TVFNfUVVFUlkiLCJncWwiLCJDVVJTT1JTX1FVRVJZIiwiSW5kZXhQYWdlIiwicG9zdHMiLCJlcnJvcnMiLCJudW1PZlBhZ2VzIiwicm91dGVyIiwidXNlUm91dGVyIiwicGFnZU51bWJlciIsInBhcnNlSW50IiwicXVlcnkiLCJwYWdlIiwidG9TdHJpbmciLCJjb2xvciIsIm1hcCIsInBvc3QiLCJpbmRleCIsInRpdGxlIiwiZXhjZXJwdCIsImZlYXR1cmVkSW1hZ2UiLCJzb3VyY2VVcmwiLCJzbHVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFFTyxJQUFNQSxjQUFjLEdBQUcsQ0FBdkI7QUFHQSxJQUFNQyxXQUFXLEdBQUdDLDBEQUFILG1CQUFqQjtBQTRDQSxJQUFNQyxhQUFhLEdBQUdELDBEQUFILG9CQUFuQjs7QUFVUCxJQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUEwQztBQUFBOztBQUFBLE1BQXZDQyxLQUF1QyxRQUF2Q0EsS0FBdUM7QUFBQSxNQUFoQ0MsTUFBZ0MsUUFBaENBLE1BQWdDO0FBQUEsTUFBeEJDLFVBQXdCLFFBQXhCQSxVQUF3QjtBQUMxRCxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHQyxRQUFRLENBQUNILE1BQU0sQ0FBQ0ksS0FBUCxDQUFhQyxJQUFiLENBQWtCQyxRQUFsQixFQUFELENBQTNCOztBQUVBLE1BQUlSLE1BQUosRUFBWTtBQUNWLFdBQ0UsTUFBQywwREFBRDtBQUFRLFdBQUssRUFBQyxzQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQU0sV0FBSyxFQUFFO0FBQUVTLGFBQUssRUFBRTtBQUFULE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixPQUNnRFQsTUFEaEQsQ0FERixDQURGO0FBT0Q7O0FBQ0QsU0FDRSxNQUFDLDBEQUFEO0FBQVEsU0FBSyxFQUFDLHFDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyw0QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dELEtBQUssQ0FBRVcsR0FBUCxDQUFXLFVBQUNDLElBQUQsRUFBYUMsS0FBYixFQUErQjtBQUN6QyxXQUNFO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsd0RBQUQ7QUFDRSxTQUFHLEVBQUVBLEtBRFA7QUFFRSxXQUFLLEVBQUVELElBQUksQ0FBQ0UsS0FGZDtBQUdFLGlCQUFXLEVBQUVGLElBQUksQ0FBQ0csT0FBTCxJQUFnQixFQUgvQjtBQUlFLGNBQVEsRUFBRUgsSUFBSSxDQUFDRSxLQUpqQjtBQUtFLFlBQU0sRUFDSkYsSUFBSSxDQUFDSSxhQUFMLEdBQ0lKLElBQUksQ0FBQ0ksYUFBTCxDQUFtQkMsU0FEdkIsR0FFSSxxQkFSUjtBQVVFLGVBQVMsRUFBRSxHQVZiO0FBV0UsZUFBUyxFQUFFLEdBWGI7QUFZRSxVQUFJLGtCQUFXTCxJQUFJLENBQUNNLElBQWhCLENBWk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBREY7QUFrQkQsR0FuQkEsQ0FESCxFQXFCRSxNQUFDLDJEQUFEO0FBQVMsY0FBVSxFQUFFYixVQUFyQjtBQUFpQyxjQUFVLEVBQUVILFVBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFyQkYsQ0FERixDQURGO0FBMkJELENBeENEOztHQUFNSCxTO1VBQ1dLLHFEOzs7S0FEWEwsUztBQTBDU0Esd0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9bcGFnZV0udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCB7IGluaXRpYWxpemVBcG9sbG8sIGFkZEFwb2xsb1N0YXRlIH0gZnJvbSBcIi4uL2xpYi9hcG9sbG9DbGllbnRcIjtcbmltcG9ydCB7IGdxbCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IE1lZGlhQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkXCI7XG5pbXBvcnQgeyBHZXRTdGF0aWNQYXRocywgR2V0U3RhdGljUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUGFnZU5hdiBmcm9tIFwiLi4vY29tcG9uZW50cy9QYWdlTmF2XCJcblxuZXhwb3J0IGNvbnN0IElURU1TX1BFUl9QQUdFID0gMztcblxuXG5leHBvcnQgY29uc3QgUE9TVFNfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IHBvc3RzUXVlcnkoJGZpcnN0OiBJbnQsICRsYXN0OiBJbnQsICRhZnRlcjogU3RyaW5nLCAkYmVmb3JlOiBTdHJpbmcpIHtcbiAgICBwb3N0cyhmaXJzdDogJGZpcnN0LCBsYXN0OiAkbGFzdCwgYWZ0ZXI6ICRhZnRlciwgYmVmb3JlOiAkYmVmb3JlKSB7XG4gICAgICBlZGdlcyB7XG4gICAgICAgIG5vZGUge1xuICAgICAgICAgIGRhdGVcbiAgICAgICAgICBmZWF0dXJlZEltYWdlIHtcbiAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICBzb3VyY2VVcmxcbiAgICAgICAgICB9XG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgICBhdXRob3Ige1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICB9XG4gICAgICAgICAgaWRcbiAgICAgICAgICBzbHVnXG4gICAgICAgICAgZXhjZXJwdFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgdHlwZSBQb3N0ID0ge1xuICBkYXRlOiBzdHJpbmc7XG4gIGZlYXR1cmVkSW1hZ2U6IHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIHNvdXJjZVVybDogc3RyaW5nO1xuICB9O1xuICB0aXRsZTogc3RyaW5nO1xuICBhdXRob3I6IHtcbiAgICBpZDogc3RyaW5nO1xuICB9O1xuICBpZDogc3RyaW5nO1xuICBzbHVnOiBzdHJpbmc7XG4gIGV4Y2VycHQ6IHN0cmluZztcbn07XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHBvc3RzPzogUG9zdFtdO1xuICBlcnJvcnM/OiBzdHJpbmc7XG4gIG51bU9mUGFnZXM6IG51bWJlcjtcbn07XG5cbmV4cG9ydCBjb25zdCBDVVJTT1JTX1FVRVJZID0gZ3FsYFxuICBxdWVyeSBJRFF1ZXJ5IHtcbiAgICBwb3N0cyB7XG4gICAgICBlZGdlcyB7XG4gICAgICAgIGN1cnNvclxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgSW5kZXhQYWdlID0gKHsgcG9zdHMsIGVycm9ycywgbnVtT2ZQYWdlcyB9OiBQcm9wcykgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgcGFnZU51bWJlciA9IHBhcnNlSW50KHJvdXRlci5xdWVyeS5wYWdlLnRvU3RyaW5nKCkpO1xuXG4gIGlmIChlcnJvcnMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dCB0aXRsZT1cIkVycm9yIHwgTmV4dC5qcyArIFR5cGVTY3JpcHQgRXhhbXBsZVwiPlxuICAgICAgICA8cD5cbiAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT5FcnJvcjo8L3NwYW4+IHtlcnJvcnN9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHRpdGxlPVwiSG9tZSB8IE5leHQuanMgKyBUeXBlU2NyaXB0IEV4YW1wbGVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAge3Bvc3RzIS5tYXAoKHBvc3Q6IFBvc3QsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTRcIj5cbiAgICAgICAgICAgICAgPE1lZGlhQ2FyZFxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QudGl0bGV9XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3Bvc3QuZXhjZXJwdCB8fCBcIlwifVxuICAgICAgICAgICAgICAgIGltZ1RpdGxlPXtwb3N0LnRpdGxlfVxuICAgICAgICAgICAgICAgIGltZ1VSTD17XG4gICAgICAgICAgICAgICAgICBwb3N0LmZlYXR1cmVkSW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgPyBwb3N0LmZlYXR1cmVkSW1hZ2Uuc291cmNlVXJsXG4gICAgICAgICAgICAgICAgICAgIDogXCJpbWFnZV9ub3RfZm91bmQucG5nXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FyZFdpZHRoPXszNDV9XG4gICAgICAgICAgICAgICAgaW1nSGVpZ2h0PXsxNDB9XG4gICAgICAgICAgICAgICAgbGluaz17YHBvc3RzLyR7cG9zdC5zbHVnfWB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgICAgPFBhZ2VOYXYgcGFnZU51bWJlcj17cGFnZU51bWJlcn0gbnVtT2ZQYWdlcz17bnVtT2ZQYWdlc30vPlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRoczogR2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGFwb2xsb0NsaWVudCA9IGluaXRpYWxpemVBcG9sbG8oKTtcblxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGFwb2xsb0NsaWVudC5xdWVyeSh7XG4gICAgcXVlcnk6IENVUlNPUlNfUVVFUlksXG4gICAgY29udGV4dDogeyBjbGllbnROYW1lOiBcIndvcmRQcmVzc1wiIH0sXG4gIH0pO1xuICBsZXQgcGF0aHMgPSBbXTtcbiAgY29uc3QgbnVtT2ZQYWdlcyA9IE1hdGguY2VpbChkYXRhLnBvc3RzLmVkZ2VzLmxlbmd0aCAvIElURU1TX1BFUl9QQUdFKTtcbiAgZm9yIChsZXQgaSA9IDI7IGkgPD0gbnVtT2ZQYWdlczsgaSsrKSB7XG4gICAgcGF0aHMucHVzaCh7IHBhcmFtczogeyBwYWdlOiBpLnRvU3RyaW5nKCkgfSB9KTtcbiAgfVxuXG4gIHJldHVybiB7IHBhdGhzLCBmYWxsYmFjazogZmFsc2UgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHBhZ2UgPSBwYXJzZUludChwYXJhbXM/LnBhZ2UhIGFzIHN0cmluZyk7XG4gICAgY29uc3QgYXBvbGxvQ2xpZW50ID0gaW5pdGlhbGl6ZUFwb2xsbygpO1xuXG4gICAgY29uc3QgY3Vyc29ycyA9IGF3YWl0IGFwb2xsb0NsaWVudFxuICAgICAgLnF1ZXJ5KHtcbiAgICAgICAgcXVlcnk6IENVUlNPUlNfUVVFUlksXG4gICAgICAgIGNvbnRleHQ6IHsgY2xpZW50TmFtZTogXCJ3b3JkUHJlc3NcIiB9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IFtcbiAgICAgICAgcmVzLmRhdGEucG9zdHMuZWRnZXNbMF0sXG4gICAgICAgIC4uLnJlcy5kYXRhLnBvc3RzLmVkZ2VzLmZpbHRlcihcbiAgICAgICAgICAoXzogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiAoaW5kZXggKyAxKSAlIElURU1TX1BFUl9QQUdFID09PSAwXG4gICAgICAgICksXG4gICAgICBdKTtcblxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBvbGxvQ2xpZW50LnF1ZXJ5KHtcbiAgICAgIHF1ZXJ5OiBQT1NUU19RVUVSWSxcbiAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICBmaXJzdDogSVRFTVNfUEVSX1BBR0UsXG4gICAgICAgIGxhc3Q6IG51bGwsXG4gICAgICAgIGFmdGVyOiBjdXJzb3JzW3BhZ2UgLSAxXS5jdXJzb3IsXG4gICAgICAgIGJlZm9yZTogbnVsbCxcbiAgICAgIH0sXG4gICAgICBjb250ZXh0OiB7IGNsaWVudE5hbWU6IFwid29yZFByZXNzXCIgfSxcbiAgICB9KTtcblxuICAgIHJldHVybiBhZGRBcG9sbG9TdGF0ZShhcG9sbG9DbGllbnQsIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIHBvc3RzOiBkYXRhLnBvc3RzLmVkZ2VzLm1hcCgoZWRnZTogeyBub2RlOiBQb3N0IH0pID0+IGVkZ2Uubm9kZSksXG4gICAgICAgIG51bU9mUGFnZXM6IGN1cnNvcnMubGVuZ3RoLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgZXJyb3JzOiBlcnIubWVzc2FnZSB9IH07XG4gIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[page].tsx\n");

/***/ })

})