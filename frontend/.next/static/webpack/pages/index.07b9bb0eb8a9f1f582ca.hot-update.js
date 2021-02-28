webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/[page].tsx":
/*!**************************!*\
  !*** ./pages/[page].tsx ***!
  \**************************/
/*! exports provided: __N_SSG, ITEMS_PER_PAGE, NUM_OF_NAV_PAGES, POSTS_QUERY, CURSORS_QUERY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ITEMS_PER_PAGE\", function() { return ITEMS_PER_PAGE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NUM_OF_NAV_PAGES\", function() { return NUM_OF_NAV_PAGES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"POSTS_QUERY\", function() { return POSTS_QUERY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CURSORS_QUERY\", function() { return CURSORS_QUERY; });\n/* harmony import */ var _home_node_app_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Card */ \"./components/Card/index.tsx\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"./node_modules/@material-ui/core/esm/IconButton/index.js\");\n/* harmony import */ var _material_ui_icons_NavigateBefore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/NavigateBefore */ \"./node_modules/@material-ui/icons/NavigateBefore.js\");\n/* harmony import */ var _material_ui_icons_NavigateBefore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_NavigateBefore__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/NavigateNext */ \"./node_modules/@material-ui/icons/NavigateNext.js\");\n/* harmony import */ var _material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n\n\nvar _jsxFileName = \"/home/node/app/pages/[page].tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject2() {\n  var data = Object(_home_node_app_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  query IDQuery {\\n    posts {\\n      edges {\\n        cursor\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_home_node_app_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  query postsQuery($first: Int, $last: Int, $after: String, $before: String) {\\n    posts(first: $first, last: $last, after: $after, before: $before) {\\n      edges {\\n        node {\\n          date\\n          featuredImage {\\n            title\\n            sourceUrl\\n          }\\n          title\\n          author {\\n            id\\n          }\\n          id\\n          slug\\n          excerpt\\n        }\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\nvar __N_SSG = true;\nvar ITEMS_PER_PAGE = 4;\nvar NUM_OF_NAV_PAGES = 3;\nvar POSTS_QUERY = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"gql\"])(_templateObject());\nvar CURSORS_QUERY = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"gql\"])(_templateObject2());\n\nvar IndexPage = function IndexPage(_ref) {\n  _s();\n\n  var posts = _ref.posts,\n      errors = _ref.errors,\n      numOfPages = _ref.numOfPages;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__[\"useRouter\"])();\n  var pageNumber = parseInt(router.query.page.toString());\n  var navigablePages = [];\n  var start = NUM_OF_NAV_PAGES * (Math.ceil(pageNumber / NUM_OF_NAV_PAGES) - 1) + 1;\n  var end = Math.min(NUM_OF_NAV_PAGES * Math.ceil(pageNumber / NUM_OF_NAV_PAGES), numOfPages);\n\n  if (start !== 1) {\n    navigablePages.push(__jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      onClick: function onClick() {\n        router.push(\"/\".concat(start - 1));\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 7\n      }\n    }, \"...\"));\n  }\n\n  var _loop = function _loop(i) {\n    if (i === 1) {\n      navigablePages.push(__jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        onClick: function onClick() {\n          router.push(\"/\");\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 9\n        }\n      }, \"1\"));\n    } else if (pageNumber === i) {\n      navigablePages.push(__jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        disabled: true,\n        onClick: function onClick() {\n          router.push(\"/\".concat(i));\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 9\n        }\n      }, i));\n    } else {\n      navigablePages.push(__jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        onClick: function onClick() {\n          router.push(\"/\".concat(i));\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 117,\n          columnNumber: 9\n        }\n      }, i));\n    }\n  };\n\n  for (var i = start; i <= end; i++) {\n    _loop(i);\n  }\n\n  if (end < numOfPages - 1) {\n    navigablePages.push(__jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      onClick: function onClick() {\n        router.push(\"/\".concat(end + 1));\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 130,\n        columnNumber: 7\n      }\n    }, \"...\"));\n  }\n\n  if (errors) {\n    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      title: \"Error | Next.js + TypeScript Example\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 142,\n        columnNumber: 7\n      }\n    }, __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 143,\n        columnNumber: 9\n      }\n    }, __jsx(\"span\", {\n      style: {\n        color: \"red\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 144,\n        columnNumber: 11\n      }\n    }, \"Error:\"), \" \", errors));\n  }\n\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Home | Next.js + TypeScript Example\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"flex flex-col items-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 7\n    }\n  }, posts.map(function (post, index) {\n    return __jsx(\"div\", {\n      className: \"m-4\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 154,\n        columnNumber: 13\n      }\n    }, __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      key: index,\n      title: post.title,\n      description: post.excerpt || \"\",\n      imgTitle: post.title,\n      imgURL: post.featuredImage ? post.featuredImage.sourceUrl : \"image_not_found.png\",\n      cardWidth: 345,\n      imgHeight: 140,\n      link: \"posts/\".concat(post.slug),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 155,\n        columnNumber: 15\n      }\n    }));\n  }), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 172,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    onClick: function onClick() {\n      router.push(pageNumber === 2 ? \"/\" : \"/\".concat(pageNumber - 1));\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 173,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_icons_NavigateBefore__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 178,\n      columnNumber: 13\n    }\n  })), navigablePages, pageNumber !== numOfPages ? __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    onClick: function onClick() {\n      router.push(\"/\".concat(pageNumber + 1));\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 182,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 187,\n      columnNumber: 15\n    }\n  })) : null)));\n};\n\n_s(IndexPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_8__[\"useRouter\"]];\n});\n\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3BhZ2VdLnRzeD80ZWI1Il0sIm5hbWVzIjpbIklURU1TX1BFUl9QQUdFIiwiTlVNX09GX05BVl9QQUdFUyIsIlBPU1RTX1FVRVJZIiwiZ3FsIiwiQ1VSU09SU19RVUVSWSIsIkluZGV4UGFnZSIsInBvc3RzIiwiZXJyb3JzIiwibnVtT2ZQYWdlcyIsInJvdXRlciIsInVzZVJvdXRlciIsInBhZ2VOdW1iZXIiLCJwYXJzZUludCIsInF1ZXJ5IiwicGFnZSIsInRvU3RyaW5nIiwibmF2aWdhYmxlUGFnZXMiLCJzdGFydCIsIk1hdGgiLCJjZWlsIiwiZW5kIiwibWluIiwicHVzaCIsImkiLCJjb2xvciIsIm1hcCIsInBvc3QiLCJpbmRleCIsInRpdGxlIiwiZXhjZXJwdCIsImZlYXR1cmVkSW1hZ2UiLCJzb3VyY2VVcmwiLCJzbHVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFTyxJQUFNQSxjQUFjLEdBQUcsQ0FBdkI7QUFFQSxJQUFNQyxnQkFBZ0IsR0FBRyxDQUF6QjtBQUVBLElBQU1DLFdBQVcsR0FBR0MsMERBQUgsbUJBQWpCO0FBNENBLElBQU1DLGFBQWEsR0FBR0QsMERBQUgsb0JBQW5COztBQVVQLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQTBDO0FBQUE7O0FBQUEsTUFBdkNDLEtBQXVDLFFBQXZDQSxLQUF1QztBQUFBLE1BQWhDQyxNQUFnQyxRQUFoQ0EsTUFBZ0M7QUFBQSxNQUF4QkMsVUFBd0IsUUFBeEJBLFVBQXdCO0FBQzFELE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0gsTUFBTSxDQUFDSSxLQUFQLENBQWFDLElBQWIsQ0FBa0JDLFFBQWxCLEVBQUQsQ0FBM0I7QUFFQSxNQUFJQyxjQUFjLEdBQUcsRUFBckI7QUFDQSxNQUFJQyxLQUFLLEdBQ1BoQixnQkFBZ0IsSUFBSWlCLElBQUksQ0FBQ0MsSUFBTCxDQUFVUixVQUFVLEdBQUdWLGdCQUF2QixJQUEyQyxDQUEvQyxDQUFoQixHQUFvRSxDQUR0RTtBQUVBLE1BQUltQixHQUFHLEdBQUdGLElBQUksQ0FBQ0csR0FBTCxDQUNScEIsZ0JBQWdCLEdBQUdpQixJQUFJLENBQUNDLElBQUwsQ0FBVVIsVUFBVSxHQUFHVixnQkFBdkIsQ0FEWCxFQUVSTyxVQUZRLENBQVY7O0FBS0EsTUFBSVMsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDZkQsa0JBQWMsQ0FBQ00sSUFBZixDQUNFLE1BQUMsb0VBQUQ7QUFDRSxhQUFPLEVBQUUsbUJBQU07QUFDYmIsY0FBTSxDQUFDYSxJQUFQLFlBQWdCTCxLQUFLLEdBQUcsQ0FBeEI7QUFDRCxPQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FLRyxLQUxILENBREY7QUFTRDs7QUF0QnlELDZCQXdCakRNLENBeEJpRDtBQXlCeEQsUUFBSUEsQ0FBQyxLQUFLLENBQVYsRUFBYTtBQUNYUCxvQkFBYyxDQUFDTSxJQUFmLENBQ0UsTUFBQyxvRUFBRDtBQUNFLGVBQU8sRUFBRSxtQkFBTTtBQUNiYixnQkFBTSxDQUFDYSxJQUFQO0FBQ0QsU0FISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFTRCxLQVZELE1BVU8sSUFBSVgsVUFBVSxLQUFLWSxDQUFuQixFQUFzQjtBQUMzQlAsb0JBQWMsQ0FBQ00sSUFBZixDQUNFLE1BQUMsb0VBQUQ7QUFDRSxnQkFBUSxNQURWO0FBRUUsZUFBTyxFQUFFLG1CQUFNO0FBQ2JiLGdCQUFNLENBQUNhLElBQVAsWUFBZ0JDLENBQWhCO0FBQ0QsU0FKSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBTUdBLENBTkgsQ0FERjtBQVVELEtBWE0sTUFXQTtBQUNMUCxvQkFBYyxDQUFDTSxJQUFmLENBQ0UsTUFBQyxvRUFBRDtBQUNFLGVBQU8sRUFBRSxtQkFBTTtBQUNiYixnQkFBTSxDQUFDYSxJQUFQLFlBQWdCQyxDQUFoQjtBQUNELFNBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUtHQSxDQUxILENBREY7QUFTRDtBQXhEdUQ7O0FBd0IxRCxPQUFLLElBQUlBLENBQUMsR0FBR04sS0FBYixFQUFvQk0sQ0FBQyxJQUFJSCxHQUF6QixFQUE4QkcsQ0FBQyxFQUEvQixFQUFtQztBQUFBLFVBQTFCQSxDQUEwQjtBQWlDbEM7O0FBRUQsTUFBSUgsR0FBRyxHQUFHWixVQUFVLEdBQUcsQ0FBdkIsRUFBMEI7QUFDeEJRLGtCQUFjLENBQUNNLElBQWYsQ0FDRSxNQUFDLG9FQUFEO0FBQ0UsYUFBTyxFQUFFLG1CQUFNO0FBQ2JiLGNBQU0sQ0FBQ2EsSUFBUCxZQUFnQkYsR0FBRyxHQUFHLENBQXRCO0FBQ0QsT0FISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BS0csS0FMSCxDQURGO0FBU0Q7O0FBRUQsTUFBSWIsTUFBSixFQUFZO0FBQ1YsV0FDRSxNQUFDLDBEQUFEO0FBQVEsV0FBSyxFQUFDLHNDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBTSxXQUFLLEVBQUU7QUFBRWlCLGFBQUssRUFBRTtBQUFULE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixPQUNnRGpCLE1BRGhELENBREYsQ0FERjtBQU9EOztBQUNELFNBQ0UsTUFBQywwREFBRDtBQUFRLFNBQUssRUFBQyxxQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsNEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRCxLQUFLLENBQUVtQixHQUFQLENBQVcsVUFBQ0MsSUFBRCxFQUFhQyxLQUFiLEVBQStCO0FBQ3pDLFdBQ0U7QUFBSyxlQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyx3REFBRDtBQUNFLFNBQUcsRUFBRUEsS0FEUDtBQUVFLFdBQUssRUFBRUQsSUFBSSxDQUFDRSxLQUZkO0FBR0UsaUJBQVcsRUFBRUYsSUFBSSxDQUFDRyxPQUFMLElBQWdCLEVBSC9CO0FBSUUsY0FBUSxFQUFFSCxJQUFJLENBQUNFLEtBSmpCO0FBS0UsWUFBTSxFQUNKRixJQUFJLENBQUNJLGFBQUwsR0FDSUosSUFBSSxDQUFDSSxhQUFMLENBQW1CQyxTQUR2QixHQUVJLHFCQVJSO0FBVUUsZUFBUyxFQUFFLEdBVmI7QUFXRSxlQUFTLEVBQUUsR0FYYjtBQVlFLFVBQUksa0JBQVdMLElBQUksQ0FBQ00sSUFBaEIsQ0FaTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FERjtBQWtCRCxHQW5CQSxDQURILEVBcUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQ0UsV0FBTyxFQUFFLG1CQUFNO0FBQ2J2QixZQUFNLENBQUNhLElBQVAsQ0FBWVgsVUFBVSxLQUFLLENBQWYsR0FBbUIsR0FBbkIsY0FBNkJBLFVBQVUsR0FBRyxDQUExQyxDQUFaO0FBQ0QsS0FISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0UsTUFBQyx3RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsQ0FERixFQVFHSyxjQVJILEVBU0dMLFVBQVUsS0FBS0gsVUFBZixHQUNDLE1BQUMsb0VBQUQ7QUFDRSxXQUFPLEVBQUUsbUJBQU07QUFDYkMsWUFBTSxDQUFDYSxJQUFQLFlBQWdCWCxVQUFVLEdBQUcsQ0FBN0I7QUFDRCxLQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRSxNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixDQURELEdBUUcsSUFqQk4sQ0FyQkYsQ0FERixDQURGO0FBNkNELENBN0hEOztHQUFNTixTO1VBQ1dLLHFEOzs7S0FEWEwsUztBQStIU0Esd0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9bcGFnZV0udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCB7IGluaXRpYWxpemVBcG9sbG8sIGFkZEFwb2xsb1N0YXRlIH0gZnJvbSBcIi4uL2xpYi9hcG9sbG9DbGllbnRcIjtcbmltcG9ydCB7IGdxbCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IE1lZGlhQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkXCI7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xuaW1wb3J0IE5hdmlnYXRlQmVmb3JlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL05hdmlnYXRlQmVmb3JlXCI7XG5pbXBvcnQgTmF2aWdhdGVOZXh0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL05hdmlnYXRlTmV4dFwiO1xuaW1wb3J0IHsgR2V0U3RhdGljUGF0aHMsIEdldFN0YXRpY1Byb3BzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgY29uc3QgSVRFTVNfUEVSX1BBR0UgPSA0O1xuXG5leHBvcnQgY29uc3QgTlVNX09GX05BVl9QQUdFUyA9IDM7XG5cbmV4cG9ydCBjb25zdCBQT1NUU19RVUVSWSA9IGdxbGBcbiAgcXVlcnkgcG9zdHNRdWVyeSgkZmlyc3Q6IEludCwgJGxhc3Q6IEludCwgJGFmdGVyOiBTdHJpbmcsICRiZWZvcmU6IFN0cmluZykge1xuICAgIHBvc3RzKGZpcnN0OiAkZmlyc3QsIGxhc3Q6ICRsYXN0LCBhZnRlcjogJGFmdGVyLCBiZWZvcmU6ICRiZWZvcmUpIHtcbiAgICAgIGVkZ2VzIHtcbiAgICAgICAgbm9kZSB7XG4gICAgICAgICAgZGF0ZVxuICAgICAgICAgIGZlYXR1cmVkSW1hZ2Uge1xuICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgIHNvdXJjZVVybFxuICAgICAgICAgIH1cbiAgICAgICAgICB0aXRsZVxuICAgICAgICAgIGF1dGhvciB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgIH1cbiAgICAgICAgICBpZFxuICAgICAgICAgIHNsdWdcbiAgICAgICAgICBleGNlcnB0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCB0eXBlIFBvc3QgPSB7XG4gIGRhdGU6IHN0cmluZztcbiAgZmVhdHVyZWRJbWFnZToge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgc291cmNlVXJsOiBzdHJpbmc7XG4gIH07XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGF1dGhvcjoge1xuICAgIGlkOiBzdHJpbmc7XG4gIH07XG4gIGlkOiBzdHJpbmc7XG4gIHNsdWc6IHN0cmluZztcbiAgZXhjZXJwdDogc3RyaW5nO1xufTtcblxudHlwZSBQcm9wcyA9IHtcbiAgcG9zdHM/OiBQb3N0W107XG4gIGVycm9ycz86IHN0cmluZztcbiAgbnVtT2ZQYWdlczogbnVtYmVyO1xufTtcblxuZXhwb3J0IGNvbnN0IENVUlNPUlNfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IElEUXVlcnkge1xuICAgIHBvc3RzIHtcbiAgICAgIGVkZ2VzIHtcbiAgICAgICAgY3Vyc29yXG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBJbmRleFBhZ2UgPSAoeyBwb3N0cywgZXJyb3JzLCBudW1PZlBhZ2VzIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBwYWdlTnVtYmVyID0gcGFyc2VJbnQocm91dGVyLnF1ZXJ5LnBhZ2UudG9TdHJpbmcoKSk7XG5cbiAgbGV0IG5hdmlnYWJsZVBhZ2VzID0gW107XG4gIGxldCBzdGFydCA9XG4gICAgTlVNX09GX05BVl9QQUdFUyAqIChNYXRoLmNlaWwocGFnZU51bWJlciAvIE5VTV9PRl9OQVZfUEFHRVMpIC0gMSkgKyAxO1xuICBsZXQgZW5kID0gTWF0aC5taW4oXG4gICAgTlVNX09GX05BVl9QQUdFUyAqIE1hdGguY2VpbChwYWdlTnVtYmVyIC8gTlVNX09GX05BVl9QQUdFUyksXG4gICAgbnVtT2ZQYWdlc1xuICApO1xuXG4gIGlmIChzdGFydCAhPT0gMSkge1xuICAgIG5hdmlnYWJsZVBhZ2VzLnB1c2goXG4gICAgICA8SWNvbkJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgcm91dGVyLnB1c2goYC8ke3N0YXJ0IC0gMX1gKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge1wiLi4uXCJ9XG4gICAgICA8L0ljb25CdXR0b24+XG4gICAgKTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkrKykge1xuICAgIGlmIChpID09PSAxKSB7XG4gICAgICBuYXZpZ2FibGVQYWdlcy5wdXNoKFxuICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvYCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDFcbiAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHBhZ2VOdW1iZXIgPT09IGkpIHtcbiAgICAgIG5hdmlnYWJsZVBhZ2VzLnB1c2goXG4gICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICByb3V0ZXIucHVzaChgLyR7aX1gKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge2l9XG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5hdmlnYWJsZVBhZ2VzLnB1c2goXG4gICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgcm91dGVyLnB1c2goYC8ke2l9YCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtpfVxuICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbmQgPCBudW1PZlBhZ2VzIC0gMSkge1xuICAgIG5hdmlnYWJsZVBhZ2VzLnB1c2goXG4gICAgICA8SWNvbkJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgcm91dGVyLnB1c2goYC8ke2VuZCArIDF9YCk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtcIi4uLlwifVxuICAgICAgPC9JY29uQnV0dG9uPlxuICAgICk7XG4gIH1cblxuICBpZiAoZXJyb3JzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQgdGl0bGU9XCJFcnJvciB8IE5leHQuanMgKyBUeXBlU2NyaXB0IEV4YW1wbGVcIj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX0+RXJyb3I6PC9zcGFuPiB7ZXJyb3JzfVxuICAgICAgICA8L3A+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgPExheW91dCB0aXRsZT1cIkhvbWUgfCBOZXh0LmpzICsgVHlwZVNjcmlwdCBFeGFtcGxlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIHtwb3N0cyEubWFwKChwb3N0OiBQb3N0LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS00XCI+XG4gICAgICAgICAgICAgIDxNZWRpYUNhcmRcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgIHRpdGxlPXtwb3N0LnRpdGxlfVxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwb3N0LmV4Y2VycHQgfHwgXCJcIn1cbiAgICAgICAgICAgICAgICBpbWdUaXRsZT17cG9zdC50aXRsZX1cbiAgICAgICAgICAgICAgICBpbWdVUkw9e1xuICAgICAgICAgICAgICAgICAgcG9zdC5mZWF0dXJlZEltYWdlXG4gICAgICAgICAgICAgICAgICAgID8gcG9zdC5mZWF0dXJlZEltYWdlLnNvdXJjZVVybFxuICAgICAgICAgICAgICAgICAgICA6IFwiaW1hZ2Vfbm90X2ZvdW5kLnBuZ1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhcmRXaWR0aD17MzQ1fVxuICAgICAgICAgICAgICAgIGltZ0hlaWdodD17MTQwfVxuICAgICAgICAgICAgICAgIGxpbms9e2Bwb3N0cy8ke3Bvc3Quc2x1Z31gfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgcm91dGVyLnB1c2gocGFnZU51bWJlciA9PT0gMiA/IFwiL1wiIDogYC8ke3BhZ2VOdW1iZXIgLSAxfWApO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TmF2aWdhdGVCZWZvcmVJY29uIC8+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgIHtuYXZpZ2FibGVQYWdlc31cbiAgICAgICAgICB7cGFnZU51bWJlciAhPT0gbnVtT2ZQYWdlcyA/IChcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChgLyR7cGFnZU51bWJlciArIDF9YCk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxOYXZpZ2F0ZU5leHRJY29uIC8+XG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRoczogR2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGFwb2xsb0NsaWVudCA9IGluaXRpYWxpemVBcG9sbG8oKTtcblxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGFwb2xsb0NsaWVudC5xdWVyeSh7XG4gICAgcXVlcnk6IENVUlNPUlNfUVVFUlksXG4gICAgY29udGV4dDogeyBjbGllbnROYW1lOiBcIndvcmRQcmVzc1wiIH0sXG4gIH0pO1xuICBsZXQgcGF0aHMgPSBbXTtcbiAgY29uc3QgbnVtT2ZQYWdlcyA9IE1hdGguY2VpbChkYXRhLnBvc3RzLmVkZ2VzLmxlbmd0aCAvIElURU1TX1BFUl9QQUdFKTtcbiAgZm9yIChsZXQgaSA9IDI7IGkgPD0gbnVtT2ZQYWdlczsgaSsrKSB7XG4gICAgcGF0aHMucHVzaCh7IHBhcmFtczogeyBwYWdlOiBpLnRvU3RyaW5nKCkgfSB9KTtcbiAgfVxuXG4gIHJldHVybiB7IHBhdGhzLCBmYWxsYmFjazogZmFsc2UgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHBhZ2UgPSBwYXJzZUludChwYXJhbXM/LnBhZ2UhIGFzIHN0cmluZyk7XG4gICAgY29uc3QgYXBvbGxvQ2xpZW50ID0gaW5pdGlhbGl6ZUFwb2xsbygpO1xuXG4gICAgY29uc3QgY3Vyc29ycyA9IGF3YWl0IGFwb2xsb0NsaWVudFxuICAgICAgLnF1ZXJ5KHtcbiAgICAgICAgcXVlcnk6IENVUlNPUlNfUVVFUlksXG4gICAgICAgIGNvbnRleHQ6IHsgY2xpZW50TmFtZTogXCJ3b3JkUHJlc3NcIiB9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IFtcbiAgICAgICAgcmVzLmRhdGEucG9zdHMuZWRnZXNbMF0sXG4gICAgICAgIC4uLnJlcy5kYXRhLnBvc3RzLmVkZ2VzLmZpbHRlcihcbiAgICAgICAgICAoXzogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiAoaW5kZXggKyAxKSAlIElURU1TX1BFUl9QQUdFID09PSAwXG4gICAgICAgICksXG4gICAgICBdKTtcblxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBvbGxvQ2xpZW50LnF1ZXJ5KHtcbiAgICAgIHF1ZXJ5OiBQT1NUU19RVUVSWSxcbiAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICBmaXJzdDogSVRFTVNfUEVSX1BBR0UsXG4gICAgICAgIGxhc3Q6IG51bGwsXG4gICAgICAgIGFmdGVyOiBjdXJzb3JzW3BhZ2UgLSAxXS5jdXJzb3IsXG4gICAgICAgIGJlZm9yZTogbnVsbCxcbiAgICAgIH0sXG4gICAgICBjb250ZXh0OiB7IGNsaWVudE5hbWU6IFwid29yZFByZXNzXCIgfSxcbiAgICB9KTtcblxuICAgIHJldHVybiBhZGRBcG9sbG9TdGF0ZShhcG9sbG9DbGllbnQsIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIHBvc3RzOiBkYXRhLnBvc3RzLmVkZ2VzLm1hcCgoZWRnZTogeyBub2RlOiBQb3N0IH0pID0+IGVkZ2Uubm9kZSksXG4gICAgICAgIG51bU9mUGFnZXM6IGN1cnNvcnMubGVuZ3RoLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgZXJyb3JzOiBlcnIubWVzc2FnZSB9IH07XG4gIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[page].tsx\n");

/***/ })

})