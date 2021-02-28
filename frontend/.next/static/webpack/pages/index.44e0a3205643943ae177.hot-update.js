webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PageNav/index.tsx":
/*!**************************************!*\
  !*** ./components/PageNav/index.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"./node_modules/@material-ui/core/esm/IconButton/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_icons_NavigateBefore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/NavigateBefore */ \"./node_modules/@material-ui/icons/NavigateBefore.js\");\n/* harmony import */ var _material_ui_icons_NavigateBefore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_NavigateBefore__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/NavigateNext */ \"./node_modules/@material-ui/icons/NavigateNext.js\");\n/* harmony import */ var _material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/home/node/app/components/PageNav/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar NUM_OF_NAV_PAGES = 3;\n\nvar PageNav = function PageNav(_ref) {\n  _s();\n\n  var pageNumber = _ref.pageNumber,\n      numOfPages = _ref.numOfPages;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  var navigablePages = [];\n  var start = NUM_OF_NAV_PAGES * (Math.ceil(pageNumber / NUM_OF_NAV_PAGES) - 1) + 1;\n  var end = Math.min(NUM_OF_NAV_PAGES * Math.ceil(pageNumber / NUM_OF_NAV_PAGES), numOfPages);\n\n  if (pageNumber !== 1) {\n    navigablePages.push(__jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      onClick: function onClick() {\n        router.push(pageNumber === 2 ? \"/\" : \"/\".concat(pageNumber - 1));\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 7\n      }\n    }, __jsx(_material_ui_icons_NavigateBefore__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }\n    })));\n  }\n\n  if (start !== 1) {\n    navigablePages.push(__jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      onClick: function onClick() {\n        router.push(\"/\".concat(start - 1));\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 7\n      }\n    }, \"...\"));\n  }\n\n  var _loop = function _loop(i) {\n    if (i === 1) {\n      if (pageNumber == 1) {\n        navigablePages.push(__jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n          disabled: true,\n          onClick: function onClick() {\n            router.push(\"/\");\n          },\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 11\n          }\n        }, \"1\"));\n      } else {\n        navigablePages.push(__jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n          onClick: function onClick() {\n            router.push(\"/\");\n          },\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 11\n          }\n        }, \"1\"));\n      }\n    } else if (pageNumber === i) {\n      navigablePages.push(__jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        disabled: true,\n        onClick: function onClick() {\n          router.push(\"/\".concat(i));\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 9\n        }\n      }, i));\n    } else {\n      navigablePages.push(__jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        onClick: function onClick() {\n          router.push(\"/\".concat(i));\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 9\n        }\n      }, i));\n    }\n  };\n\n  for (var i = start; i <= end; i++) {\n    _loop(i);\n  }\n\n  if (pageNumber !== numOfPages) {\n    navigablePages.push(__jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      onClick: function onClick() {\n        router.push(\"/\".concat(pageNumber + 1));\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 25\n      }\n    }, __jsx(_material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 7\n      }\n    })));\n  }\n\n  return __jsx(\"nav\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 10\n    }\n  }, navigablePages);\n};\n\n_s(PageNav, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = PageNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PageNav);\n\nvar _c;\n\n$RefreshReg$(_c, \"PageNav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlTmF2L2luZGV4LnRzeD9iMmY5Il0sIm5hbWVzIjpbIk5VTV9PRl9OQVZfUEFHRVMiLCJQYWdlTmF2IiwicGFnZU51bWJlciIsIm51bU9mUGFnZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJuYXZpZ2FibGVQYWdlcyIsInN0YXJ0IiwiTWF0aCIsImNlaWwiLCJlbmQiLCJtaW4iLCJwdXNoIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGdCQUFnQixHQUFHLENBQXpCOztBQU9BLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQXVDO0FBQUE7O0FBQUEsTUFBcENDLFVBQW9DLFFBQXBDQSxVQUFvQztBQUFBLE1BQXhCQyxVQUF3QixRQUF4QkEsVUFBd0I7QUFDckQsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQUlDLGNBQWMsR0FBRyxFQUFyQjtBQUNBLE1BQUlDLEtBQUssR0FDUFAsZ0JBQWdCLElBQUlRLElBQUksQ0FBQ0MsSUFBTCxDQUFVUCxVQUFVLEdBQUdGLGdCQUF2QixJQUEyQyxDQUEvQyxDQUFoQixHQUFvRSxDQUR0RTtBQUVBLE1BQUlVLEdBQUcsR0FBR0YsSUFBSSxDQUFDRyxHQUFMLENBQ1JYLGdCQUFnQixHQUFHUSxJQUFJLENBQUNDLElBQUwsQ0FBVVAsVUFBVSxHQUFHRixnQkFBdkIsQ0FEWCxFQUVSRyxVQUZRLENBQVY7O0FBSUEsTUFBSUQsVUFBVSxLQUFLLENBQW5CLEVBQXNCO0FBQ3BCSSxrQkFBYyxDQUFDTSxJQUFmLENBQ0UsTUFBQyxvRUFBRDtBQUNFLGFBQU8sRUFBRSxtQkFBTTtBQUNiUixjQUFNLENBQUNRLElBQVAsQ0FBWVYsVUFBVSxLQUFLLENBQWYsb0JBQTZCQSxVQUFVLEdBQUcsQ0FBMUMsQ0FBWjtBQUNELE9BSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUtFLE1BQUMsd0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUxGLENBREY7QUFTRDs7QUFFRCxNQUFJSyxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNmRCxrQkFBYyxDQUFDTSxJQUFmLENBQ0UsTUFBQyxvRUFBRDtBQUNFLGFBQU8sRUFBRSxtQkFBTTtBQUNiUixjQUFNLENBQUNRLElBQVAsWUFBZ0JMLEtBQUssR0FBRyxDQUF4QjtBQUNELE9BSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUtHLEtBTEgsQ0FERjtBQVNEOztBQS9Cb0QsNkJBaUM1Q00sQ0FqQzRDO0FBa0NuRCxRQUFJQSxDQUFDLEtBQUssQ0FBVixFQUFhO0FBQ1gsVUFBSVgsVUFBVSxJQUFJLENBQWxCLEVBQXFCO0FBQ25CSSxzQkFBYyxDQUFDTSxJQUFmLENBQ0UsTUFBQyxvRUFBRDtBQUNFLGtCQUFRLE1BRFY7QUFFRSxpQkFBTyxFQUFFLG1CQUFNO0FBQ2JSLGtCQUFNLENBQUNRLElBQVA7QUFDRCxXQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVVELE9BWEQsTUFXTztBQUNMTixzQkFBYyxDQUFDTSxJQUFmLENBQ0UsTUFBQyxvRUFBRDtBQUNFLGlCQUFPLEVBQUUsbUJBQU07QUFDYlIsa0JBQU0sQ0FBQ1EsSUFBUDtBQUNELFdBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBU0Q7QUFDRixLQXZCRCxNQXVCTyxJQUFJVixVQUFVLEtBQUtXLENBQW5CLEVBQXNCO0FBQzNCUCxvQkFBYyxDQUFDTSxJQUFmLENBQ0UsTUFBQyxvRUFBRDtBQUNFLGdCQUFRLE1BRFY7QUFFRSxlQUFPLEVBQUUsbUJBQU07QUFDYlIsZ0JBQU0sQ0FBQ1EsSUFBUCxZQUFnQkMsQ0FBaEI7QUFDRCxTQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FNR0EsQ0FOSCxDQURGO0FBVUQsS0FYTSxNQVdBO0FBQ0xQLG9CQUFjLENBQUNNLElBQWYsQ0FDRSxNQUFDLG9FQUFEO0FBQ0UsZUFBTyxFQUFFLG1CQUFNO0FBQ2JSLGdCQUFNLENBQUNRLElBQVAsWUFBZ0JDLENBQWhCO0FBQ0QsU0FISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBS0dBLENBTEgsQ0FERjtBQVNEO0FBOUVrRDs7QUFpQ3JELE9BQUssSUFBSUEsQ0FBQyxHQUFHTixLQUFiLEVBQW9CTSxDQUFDLElBQUlILEdBQXpCLEVBQThCRyxDQUFDLEVBQS9CLEVBQW1DO0FBQUEsVUFBMUJBLENBQTBCO0FBOENsQzs7QUFFRCxNQUFJWCxVQUFVLEtBQUtDLFVBQW5CLEVBQStCO0FBRTdCRyxrQkFBYyxDQUFDTSxJQUFmLENBQW9CLE1BQUMsb0VBQUQ7QUFDbEIsYUFBTyxFQUFFLG1CQUFNO0FBQ2JSLGNBQU0sQ0FBQ1EsSUFBUCxZQUFnQlYsVUFBVSxHQUFHLENBQTdCO0FBQ0QsT0FIaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUtsQixNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFMa0IsQ0FBcEI7QUFPRDs7QUFFRCxTQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTUksY0FBTixDQUFQO0FBQ0QsQ0E3RkQ7O0dBQU1MLE87VUFDV0kscUQ7OztLQURYSixPO0FBK0ZTQSxzRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUGFnZU5hdi9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTmF2aWdhdGVCZWZvcmVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTmF2aWdhdGVCZWZvcmVcIjtcbmltcG9ydCBOYXZpZ2F0ZU5leHRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTmF2aWdhdGVOZXh0XCI7XG5cbmNvbnN0IE5VTV9PRl9OQVZfUEFHRVMgPSAzO1xuXG50eXBlIFByb3BzID0ge1xuICBwYWdlTnVtYmVyOiBudW1iZXI7XG4gIG51bU9mUGFnZXM6IG51bWJlcjtcbn07XG5cbmNvbnN0IFBhZ2VOYXYgPSAoeyBwYWdlTnVtYmVyLCBudW1PZlBhZ2VzIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBsZXQgbmF2aWdhYmxlUGFnZXMgPSBbXTtcbiAgbGV0IHN0YXJ0ID1cbiAgICBOVU1fT0ZfTkFWX1BBR0VTICogKE1hdGguY2VpbChwYWdlTnVtYmVyIC8gTlVNX09GX05BVl9QQUdFUykgLSAxKSArIDE7XG4gIGxldCBlbmQgPSBNYXRoLm1pbihcbiAgICBOVU1fT0ZfTkFWX1BBR0VTICogTWF0aC5jZWlsKHBhZ2VOdW1iZXIgLyBOVU1fT0ZfTkFWX1BBR0VTKSxcbiAgICBudW1PZlBhZ2VzXG4gICk7XG4gIGlmIChwYWdlTnVtYmVyICE9PSAxKSB7XG4gICAgbmF2aWdhYmxlUGFnZXMucHVzaChcbiAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICByb3V0ZXIucHVzaChwYWdlTnVtYmVyID09PSAyID8gYC9gIDogYC8ke3BhZ2VOdW1iZXIgLSAxfWApO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8TmF2aWdhdGVCZWZvcmVJY29uIC8+XG4gICAgICA8L0ljb25CdXR0b24+XG4gICAgKTtcbiAgfVxuXG4gIGlmIChzdGFydCAhPT0gMSkge1xuICAgIG5hdmlnYWJsZVBhZ2VzLnB1c2goXG4gICAgICA8SWNvbkJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgcm91dGVyLnB1c2goYC8ke3N0YXJ0IC0gMX1gKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge1wiLi4uXCJ9XG4gICAgICA8L0ljb25CdXR0b24+XG4gICAgKTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkrKykge1xuICAgIGlmIChpID09PSAxKSB7XG4gICAgICBpZiAocGFnZU51bWJlciA9PSAxKSB7XG4gICAgICAgIG5hdmlnYWJsZVBhZ2VzLnB1c2goXG4gICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvYCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDFcbiAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuYXZpZ2FibGVQYWdlcy5wdXNoKFxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvYCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDFcbiAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChwYWdlTnVtYmVyID09PSBpKSB7XG4gICAgICBuYXZpZ2FibGVQYWdlcy5wdXNoKFxuICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgcm91dGVyLnB1c2goYC8ke2l9YCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtpfVxuICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYXZpZ2FibGVQYWdlcy5wdXNoKFxuICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvJHtpfWApO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7aX1cbiAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBpZiAocGFnZU51bWJlciAhPT0gbnVtT2ZQYWdlcykge1xuICBcbiAgICBuYXZpZ2FibGVQYWdlcy5wdXNoKDxJY29uQnV0dG9uXG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgIHJvdXRlci5wdXNoKGAvJHtwYWdlTnVtYmVyICsgMX1gKTtcbiAgICAgIH19XG4gICAgPlxuICAgICAgPE5hdmlnYXRlTmV4dEljb24gLz5cbiAgICA8L0ljb25CdXR0b24+KTtcbiAgfVxuXG4gIHJldHVybiA8bmF2PntuYXZpZ2FibGVQYWdlc308L25hdj47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlTmF2O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PageNav/index.tsx\n");

/***/ })

})