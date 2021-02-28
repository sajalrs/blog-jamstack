webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Card */ \"./components/Card/index.tsx\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"./node_modules/@material-ui/core/esm/IconButton/index.js\");\n/* harmony import */ var _material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/NavigateNext */ \"./node_modules/@material-ui/icons/NavigateNext.js\");\n/* harmony import */ var _material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _page___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./[page] */ \"./pages/[page].tsx\");\nvar _jsxFileName = \"/home/node/app/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar IndexPage = function IndexPage(_ref) {\n  _s();\n\n  var posts = _ref.posts,\n      errors = _ref.errors,\n      numOfPages = _ref.numOfPages;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n\n  if (errors) {\n    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      title: \"Error | Next.js + TypeScript Example\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 7\n      }\n    }, __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }\n    }, __jsx(\"span\", {\n      style: {\n        color: \"red\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 11\n      }\n    }, \"Error:\"), \" \", errors));\n  }\n\n  var navigablePages = [];\n  navigablePages.push(__jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    disabled: true,\n    onClick: function onClick() {\n      router.push(\"/\");\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }\n  }, 1));\n\n  var _loop = function _loop(i) {\n    navigablePages.push(__jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      onClick: function onClick() {\n        router.push(\"/\".concat(i));\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 7\n      }\n    }, i));\n  };\n\n  for (var i = 2; i <= Math.min(_page___WEBPACK_IMPORTED_MODULE_6__[\"NUM_OF_NAV_PAGES\"], numOfPages); i++) {\n    _loop(i);\n  }\n\n  console.log(_page___WEBPACK_IMPORTED_MODULE_6__[\"NUM_OF_NAV_PAGES\"]);\n  console.log(numOfPages);\n\n  if (numOfPages > _page___WEBPACK_IMPORTED_MODULE_6__[\"NUM_OF_NAV_PAGES\"]) {\n    navigablePages.push(__jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      onClick: function onClick() {\n        router.push(\"/\".concat(_page___WEBPACK_IMPORTED_MODULE_6__[\"NUM_OF_NAV_PAGES\"] + 1));\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 7\n      }\n    }, \"...\"));\n  }\n\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: \"Home | Next.js + TypeScript Example\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"flex flex-col items-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }\n  }, posts.map(function (post, index) {\n    return __jsx(\"div\", {\n      className: \"m-4\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 13\n      }\n    }, __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      key: index,\n      title: post.title,\n      description: post.excerpt || \"\",\n      imgTitle: post.title,\n      imgURL: post.featuredImage ? post.featuredImage.sourceUrl : \"image_not_found.png\",\n      cardWidth: 345,\n      imgHeight: 140,\n      link: \"posts/\".concat(post.slug),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 15\n      }\n    }));\n  }), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 9\n    }\n  }, navigablePages, numOfPages > 1 && __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    onClick: function onClick() {\n      router.push(\"/\".concat(2));\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 13\n    }\n  })))));\n};\n\n_s(IndexPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c = IndexPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSW5kZXhQYWdlIiwicG9zdHMiLCJlcnJvcnMiLCJudW1PZlBhZ2VzIiwicm91dGVyIiwidXNlUm91dGVyIiwiY29sb3IiLCJuYXZpZ2FibGVQYWdlcyIsInB1c2giLCJpIiwiTWF0aCIsIm1pbiIsIk5VTV9PRl9OQVZfUEFHRVMiLCJjb25zb2xlIiwibG9nIiwibWFwIiwicG9zdCIsImluZGV4IiwidGl0bGUiLCJleGNlcnB0IiwiZmVhdHVyZWRJbWFnZSIsInNvdXJjZVVybCIsInNsdWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7QUFjQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUEwQztBQUFBOztBQUFBLE1BQXZDQyxLQUF1QyxRQUF2Q0EsS0FBdUM7QUFBQSxNQUFoQ0MsTUFBZ0MsUUFBaENBLE1BQWdDO0FBQUEsTUFBeEJDLFVBQXdCLFFBQXhCQSxVQUF3QjtBQUMxRCxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUNBLE1BQUlILE1BQUosRUFBWTtBQUNWLFdBQ0UsTUFBQywwREFBRDtBQUFRLFdBQUssRUFBQyxzQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQU0sV0FBSyxFQUFFO0FBQUVJLGFBQUssRUFBRTtBQUFULE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixPQUNnREosTUFEaEQsQ0FERixDQURGO0FBT0Q7O0FBRUQsTUFBSUssY0FBYyxHQUFHLEVBQXJCO0FBQ0FBLGdCQUFjLENBQUNDLElBQWYsQ0FDRSxNQUFDLG9FQUFEO0FBQ0EsWUFBUSxNQURSO0FBRUUsV0FBTyxFQUFFLG1CQUFNO0FBQ2JKLFlBQU0sQ0FBQ0ksSUFBUDtBQUNELEtBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1HLENBTkgsQ0FERjs7QUFiMEQsNkJBdUJqREMsQ0F2QmlEO0FBd0J4REYsa0JBQWMsQ0FBQ0MsSUFBZixDQUNFLE1BQUMsb0VBQUQ7QUFDRSxhQUFPLEVBQUUsbUJBQU07QUFDYkosY0FBTSxDQUFDSSxJQUFQLFlBQWdCQyxDQUFoQjtBQUNELE9BSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUtHQSxDQUxILENBREY7QUF4QndEOztBQXVCMUQsT0FBSyxJQUFJQSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxJQUFJQyxJQUFJLENBQUNDLEdBQUwsQ0FBU0MsdURBQVQsRUFBMkJULFVBQTNCLENBQXJCLEVBQTZETSxDQUFDLEVBQTlELEVBQWtFO0FBQUEsVUFBekRBLENBQXlEO0FBVWpFOztBQUNESSxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsdURBQVo7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlYLFVBQVo7O0FBQ0EsTUFBR0EsVUFBVSxHQUFHUyx1REFBaEIsRUFBaUM7QUFDL0JMLGtCQUFjLENBQUNDLElBQWYsQ0FDRSxNQUFDLG9FQUFEO0FBQ0UsYUFBTyxFQUFFLG1CQUFNO0FBQ2JKLGNBQU0sQ0FBQ0ksSUFBUCxZQUFnQkksdURBQWdCLEdBQUcsQ0FBbkM7QUFDRCxPQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FLRyxLQUxILENBREY7QUFTRDs7QUFDRCxTQUNFLE1BQUMsMERBQUQ7QUFBUSxTQUFLLEVBQUMscUNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDRCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1gsS0FBSyxDQUFFYyxHQUFQLENBQVcsVUFBQ0MsSUFBRCxFQUFhQyxLQUFiLEVBQStCO0FBQ3pDLFdBQ0U7QUFBSyxlQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyx3REFBRDtBQUNFLFNBQUcsRUFBRUEsS0FEUDtBQUVFLFdBQUssRUFBRUQsSUFBSSxDQUFDRSxLQUZkO0FBR0UsaUJBQVcsRUFBRUYsSUFBSSxDQUFDRyxPQUFMLElBQWdCLEVBSC9CO0FBSUUsY0FBUSxFQUFFSCxJQUFJLENBQUNFLEtBSmpCO0FBS0UsWUFBTSxFQUNKRixJQUFJLENBQUNJLGFBQUwsR0FDSUosSUFBSSxDQUFDSSxhQUFMLENBQW1CQyxTQUR2QixHQUVJLHFCQVJSO0FBVUUsZUFBUyxFQUFFLEdBVmI7QUFXRSxlQUFTLEVBQUUsR0FYYjtBQVlFLFVBQUksa0JBQVdMLElBQUksQ0FBQ00sSUFBaEIsQ0FaTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FERjtBQWtCRCxHQW5CQSxDQURILEVBcUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2YsY0FESCxFQUVJSixVQUFVLEdBQUcsQ0FBYixJQUNGLE1BQUMsb0VBQUQ7QUFDRSxXQUFPLEVBQUUsbUJBQU07QUFDYkMsWUFBTSxDQUFDSSxJQUFQLFlBQWdCLENBQWhCO0FBQ0QsS0FISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0UsTUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsQ0FIRixDQXJCRixDQURGLENBREY7QUFzQ0QsQ0FyRkQ7O0dBQU1SLFM7VUFDV0sscUQ7OztLQURYTCxTOztBQXVGU0Esd0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwb2xsbywgYWRkQXBvbGxvU3RhdGUgfSBmcm9tIFwiLi4vbGliL2Fwb2xsb0NsaWVudFwiO1xuaW1wb3J0IE1lZGlhQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkXCI7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xuaW1wb3J0IE5hdmlnYXRlTmV4dEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9OYXZpZ2F0ZU5leHRcIjtcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5pbXBvcnQge1xuICBDVVJTT1JTX1FVRVJZLFxuICBQT1NUU19RVUVSWSxcbiAgSVRFTVNfUEVSX1BBR0UsXG4gIE5VTV9PRl9OQVZfUEFHRVMsXG4gIFBvc3QsXG59IGZyb20gXCIuL1twYWdlXVwiO1xuXG50eXBlIFByb3BzID0ge1xuICBwb3N0cz86IFBvc3RbXTtcbiAgZXJyb3JzPzogc3RyaW5nO1xuICBudW1PZlBhZ2VzOiBudW1iZXI7XG59O1xuXG5jb25zdCBJbmRleFBhZ2UgPSAoeyBwb3N0cywgZXJyb3JzLCBudW1PZlBhZ2VzIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBpZiAoZXJyb3JzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQgdGl0bGU9XCJFcnJvciB8IE5leHQuanMgKyBUeXBlU2NyaXB0IEV4YW1wbGVcIj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX0+RXJyb3I6PC9zcGFuPiB7ZXJyb3JzfVxuICAgICAgICA8L3A+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG5cbiAgbGV0IG5hdmlnYWJsZVBhZ2VzID0gW107XG4gIG5hdmlnYWJsZVBhZ2VzLnB1c2goXG4gICAgPEljb25CdXR0b25cbiAgICBkaXNhYmxlZFxuICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICByb3V0ZXIucHVzaChgL2ApO1xuICAgICAgfX1cbiAgICA+XG4gICAgICB7MX1cbiAgICA8L0ljb25CdXR0b24+XG4gICk7XG4gIGZvciAobGV0IGkgPSAyOyBpIDw9IE1hdGgubWluKE5VTV9PRl9OQVZfUEFHRVMsIG51bU9mUGFnZXMpOyBpKyspIHtcbiAgICBuYXZpZ2FibGVQYWdlcy5wdXNoKFxuICAgICAgPEljb25CdXR0b25cbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIHJvdXRlci5wdXNoKGAvJHtpfWApO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7aX1cbiAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICApO1xuICB9XG4gIGNvbnNvbGUubG9nKE5VTV9PRl9OQVZfUEFHRVMpO1xuICBjb25zb2xlLmxvZyhudW1PZlBhZ2VzKTtcbiAgaWYobnVtT2ZQYWdlcyA+IE5VTV9PRl9OQVZfUEFHRVMpe1xuICAgIG5hdmlnYWJsZVBhZ2VzLnB1c2goXG4gICAgICA8SWNvbkJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgcm91dGVyLnB1c2goYC8ke05VTV9PRl9OQVZfUEFHRVMgKyAxfWApO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7XCIuLi5cIn1cbiAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgPExheW91dCB0aXRsZT1cIkhvbWUgfCBOZXh0LmpzICsgVHlwZVNjcmlwdCBFeGFtcGxlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIHtwb3N0cyEubWFwKChwb3N0OiBQb3N0LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS00XCI+XG4gICAgICAgICAgICAgIDxNZWRpYUNhcmRcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgIHRpdGxlPXtwb3N0LnRpdGxlfVxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwb3N0LmV4Y2VycHQgfHwgXCJcIn1cbiAgICAgICAgICAgICAgICBpbWdUaXRsZT17cG9zdC50aXRsZX1cbiAgICAgICAgICAgICAgICBpbWdVUkw9e1xuICAgICAgICAgICAgICAgICAgcG9zdC5mZWF0dXJlZEltYWdlXG4gICAgICAgICAgICAgICAgICAgID8gcG9zdC5mZWF0dXJlZEltYWdlLnNvdXJjZVVybFxuICAgICAgICAgICAgICAgICAgICA6IFwiaW1hZ2Vfbm90X2ZvdW5kLnBuZ1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhcmRXaWR0aD17MzQ1fVxuICAgICAgICAgICAgICAgIGltZ0hlaWdodD17MTQwfVxuICAgICAgICAgICAgICAgIGxpbms9e2Bwb3N0cy8ke3Bvc3Quc2x1Z31gfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge25hdmlnYWJsZVBhZ2VzfVxuICAgICAgICAgIHsgbnVtT2ZQYWdlcyA+IDEgJiYgXG4gICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC8kezJ9YCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxOYXZpZ2F0ZU5leHRJY29uIC8+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgIH0gXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgYXBvbGxvQ2xpZW50ID0gaW5pdGlhbGl6ZUFwb2xsbygpO1xuXG4gICAgY29uc3QgY3Vyc29ycyA9IGF3YWl0IGFwb2xsb0NsaWVudFxuICAgICAgLnF1ZXJ5KHtcbiAgICAgICAgcXVlcnk6IENVUlNPUlNfUVVFUlksXG4gICAgICAgIGNvbnRleHQ6IHsgY2xpZW50TmFtZTogXCJ3b3JkUHJlc3NcIiB9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IFtcbiAgICAgICAgcmVzLmRhdGEucG9zdHMuZWRnZXNbMF0sXG4gICAgICAgIC4uLnJlcy5kYXRhLnBvc3RzLmVkZ2VzLmZpbHRlcihcbiAgICAgICAgICAoXzogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiAoaW5kZXggKyAxKSAlIElURU1TX1BFUl9QQUdFID09PSAwXG4gICAgICAgICksXG4gICAgICBdKTtcblxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBvbGxvQ2xpZW50LnF1ZXJ5KHtcbiAgICAgIHF1ZXJ5OiBQT1NUU19RVUVSWSxcbiAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICBmaXJzdDogSVRFTVNfUEVSX1BBR0UsXG4gICAgICAgIGxhc3Q6IG51bGwsXG4gICAgICAgIGFmdGVyOiBudWxsLFxuICAgICAgICBiZWZvcmU6IG51bGwsXG4gICAgICB9LFxuICAgICAgY29udGV4dDogeyBjbGllbnROYW1lOiBcIndvcmRQcmVzc1wiIH0sXG4gICAgfSk7XG5cbiAgICByZXR1cm4gYWRkQXBvbGxvU3RhdGUoYXBvbGxvQ2xpZW50LCB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBwb3N0czogZGF0YS5wb3N0cy5lZGdlcy5tYXAoKGVkZ2U6IHsgbm9kZTogUG9zdCB9KSA9PiBlZGdlLm5vZGUpLFxuICAgICAgICBudW1PZlBhZ2VzOiBjdXJzb3JzLmxlbmd0aCxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiB7IHByb3BzOiB7IGVycm9yczogZXJyLm1lc3NhZ2UgfSB9O1xuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})