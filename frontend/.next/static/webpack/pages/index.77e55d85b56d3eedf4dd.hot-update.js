webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Footer/index.tsx":
/*!*************************************!*\
  !*** ./components/Footer/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_icons_Copyright__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Copyright */ \"./node_modules/@material-ui/icons/Copyright.js\");\n/* harmony import */ var _material_ui_icons_Copyright__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Copyright__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"./node_modules/@material-ui/core/esm/IconButton/index.js\");\n/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Tooltip */ \"./node_modules/@material-ui/core/esm/Tooltip/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/home/sajalrs/WebDevelopment/blog-jamstack/frontend/components/Footer/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"createStyles\"])({\n    root: {\n      flexGrow: 1\n    },\n    columnHeader: {\n      color: \"black\"\n    },\n    footerRows: {\n      display: \"flex\",\n      alignItems: \"center\",\n      justifyContent: \"center\"\n    },\n    columns: {\n      display: \"flex\",\n      flexDirection: \"column\",\n      alignItems: \"center\"\n    },\n    miniFooterItems: {\n      color: \"white\",\n      padding: theme.spacing(1)\n    },\n    topFooter: {\n      // display: \"flex\",\n      // alignItems: \"center\",\n      color: theme.palette.primary.dark,\n      // justifyContent: \"center\",\n      backgroundColor: theme.palette.primary.light // padding: theme.spacing(4),\n\n    },\n    bottomFooter: {\n      // display: \"flex\",\n      color: \"white\",\n      // alignItems: \"center\",\n      // justifyContent: \"center\",\n      backgroundColor: theme.palette.primary.dark\n    },\n    bottomFooterLinks: {\n      \"&:hover\": {\n        color: \"#c1c1c1\",\n        textDecoration: \"underline\"\n      }\n    },\n    bottomFooterIconLinks: {\n      \"&:hover\": {\n        color: \"#c1c1c1\"\n      }\n    },\n    topFooterLinks: {\n      \"&:hover\": {\n        color: \"white\"\n      }\n    },\n    nepaliText: {\n      fontFamily: \"Kalam\"\n    }\n  });\n});\nvar FooterLinks = [{\n  title: \"About\",\n  array: [{\n    title: \"About Me\",\n    pageURL: \"/\"\n  }, {\n    title: \"Contact Me\",\n    pageURL: \"/\"\n  }]\n}, {\n  title: \"Social\",\n  array: [{\n    title: \"GitHub\",\n    pageURL: \"https://github.com/sajalrs\"\n  }, {\n    title: \"LinkedIn\",\n    pageURL: \"/\"\n  }, {\n    title: \"Facebook\",\n    pageURL: \"/\"\n  }, {\n    title: \"Twitter\",\n    pageURL: \"/\"\n  }]\n}, {\n  title: \"Legal\",\n  array: [{\n    title: \"Privacy\",\n    pageURL: \"/privacy\"\n  }, {\n    title: \"Terms of Service\",\n    pageURL: \"/terms-of-service\"\n  }]\n}]; // const MenuListItems = [\n//   {\n//     title: \"Home\",\n//     pageURL: \"/\",\n//   },\n//   {\n//     title: \"About\",\n//     pageURL: \"/\",\n//   },\n//   {\n//     title: \"Blog\",\n//     pageURL: \"/\",\n//   },\n// ];\n\nvar Footer = function Footer(_ref) {\n  _s();\n\n  var menuListItems = _ref.menuListItems;\n  var classes = useStyles();\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])();\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"\".concat(classes.topFooter, \" grid items-center justify-center grid-cols-1 md:grid-cols-3 p-4\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 7\n    }\n  }, FooterLinks.map(function (item, index) {\n    var title = item.title,\n        array = item.array;\n    return __jsx(\"div\", {\n      className: \"\".concat(classes.columns),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 153,\n        columnNumber: 13\n      }\n    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      variant: \"h4\",\n      className: \"\".concat(classes.columnHeader),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 154,\n        columnNumber: 15\n      }\n    }, title), array.map(function (item, index) {\n      var title = item.title,\n          pageURL = item.pageURL;\n      return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        key: index,\n        variant: \"h6\",\n        onClick: function onClick() {\n          router.push(pageURL);\n        },\n        className: classes.topFooterLinks,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 160,\n          columnNumber: 19\n        }\n      }, title);\n    }));\n  })), __jsx(\"div\", {\n    className: \"\".concat(classes.bottomFooter, \" grid items-center justify-center grid-rows-3 grid-cols-1 md:grid-cols-3 md:grid-rows-1\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 176,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: classes.footerRows,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 178,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    title: \"Sajal Satyal\",\n    placement: \"top\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 179,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    variant: \"h6\",\n    className: \"\".concat(classes.miniFooterItems, \" \").concat(classes.nepaliText),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 180,\n      columnNumber: 15\n    }\n  }, \"\\u0938\\u091C\\u0932 \\u0938\\u0924\\u094D\\u092F\\u093E\\u0932\")), __jsx(_material_ui_icons_Copyright__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 187,\n      columnNumber: 13\n    }\n  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    variant: \"subtitle1\",\n    className: classes.miniFooterItems,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 188,\n      columnNumber: 13\n    }\n  }, \"Copyright\")), __jsx(\"div\", {\n    className: classes.footerRows,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 192,\n      columnNumber: 11\n    }\n  }, menuListItems && menuListItems.map(function (item, index) {\n    var title = item.title,\n        pageURL = item.pageURL;\n    return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      key: index,\n      variant: \"subtitle1\",\n      onClick: function onClick() {\n        router.push(pageURL);\n      },\n      className: \"\".concat(classes.miniFooterItems, \" \").concat(classes.bottomFooterLinks),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 196,\n        columnNumber: 17\n      }\n    }, title);\n  })), __jsx(\"div\", {\n    className: classes.footerRows,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 209,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    className: \"\".concat(classes.miniFooterItems, \" \").concat(classes.bottomFooterIconLinks),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 210,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_icons_Copyright__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 213,\n      columnNumber: 15\n    }\n  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    className: \"\".concat(classes.miniFooterItems, \" \").concat(classes.bottomFooterIconLinks),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 215,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_icons_Copyright__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 218,\n      columnNumber: 15\n    }\n  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    className: \"\".concat(classes.miniFooterItems, \" \").concat(classes.bottomFooterIconLinks),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 220,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_icons_Copyright__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 223,\n      columnNumber: 15\n    }\n  })))));\n};\n\n_s(Footer, \"y+nxznVgQ96pr4dCg1EC6WdujUg=\", false, function () {\n  return [useStyles, next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"]];\n});\n\n_c = Footer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\n\nvar _c;\n\n$RefreshReg$(_c, \"Footer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb290ZXIvaW5kZXgudHN4P2QxMzkiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdCIsImZsZXhHcm93IiwiY29sdW1uSGVhZGVyIiwiY29sb3IiLCJmb290ZXJSb3dzIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImNvbHVtbnMiLCJmbGV4RGlyZWN0aW9uIiwibWluaUZvb3Rlckl0ZW1zIiwicGFkZGluZyIsInNwYWNpbmciLCJ0b3BGb290ZXIiLCJwYWxldHRlIiwicHJpbWFyeSIsImRhcmsiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsaWdodCIsImJvdHRvbUZvb3RlciIsImJvdHRvbUZvb3RlckxpbmtzIiwidGV4dERlY29yYXRpb24iLCJib3R0b21Gb290ZXJJY29uTGlua3MiLCJ0b3BGb290ZXJMaW5rcyIsIm5lcGFsaVRleHQiLCJmb250RmFtaWx5IiwiRm9vdGVyTGlua3MiLCJ0aXRsZSIsImFycmF5IiwicGFnZVVSTCIsIkZvb3RlciIsIm1lbnVMaXN0SXRlbXMiLCJjbGFzc2VzIiwicm91dGVyIiwidXNlUm91dGVyIiwibWFwIiwiaXRlbSIsImluZGV4IiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUMzQkMsNkVBQVksQ0FBQztBQUNYQyxRQUFJLEVBQUU7QUFDSkMsY0FBUSxFQUFFO0FBRE4sS0FESztBQUlYQyxnQkFBWSxFQUFFO0FBQ1pDLFdBQUssRUFBRTtBQURLLEtBSkg7QUFPWEMsY0FBVSxFQUFFO0FBQ1ZDLGFBQU8sRUFBRSxNQURDO0FBRVZDLGdCQUFVLEVBQUUsUUFGRjtBQUdWQyxvQkFBYyxFQUFFO0FBSE4sS0FQ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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQ0UsYUFBUyxZQUFLNEIsT0FBTyxDQUFDdEIsZUFBYixjQUFnQ3NCLE9BQU8sQ0FBQ1YscUJBQXhDLENBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdFLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBREYsRUFNRSxNQUFDLG9FQUFEO0FBQ0UsYUFBUyxZQUFLVSxPQUFPLENBQUN0QixlQUFiLGNBQWdDc0IsT0FBTyxDQUFDVixxQkFBeEMsQ0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0UsTUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FORixFQVdFLE1BQUMsb0VBQUQ7QUFDRSxhQUFTLFlBQUtVLE9BQU8sQ0FBQ3RCLGVBQWIsY0FBZ0NzQixPQUFPLENBQUNWLHFCQUF4QyxDQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHRSxNQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQVhGLENBakNKLENBN0JGLENBREY7QUFvRkQsQ0F2RkQ7O0dBQU1RLE07VUFDWWxDLFMsRUFDRHNDLHFEOzs7S0FGWEosTTtBQXlGU0EscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvb3Rlci9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBjcmVhdGVTdHlsZXMsIFRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgQ29weXJpZ2h0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NvcHlyaWdodFwiO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIjtcbmltcG9ydCBUb29sdGlwIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sdGlwXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7TWVudUxpc3RJdGVtfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9OYXZiYXJcIlxuXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cbiAgY3JlYXRlU3R5bGVzKHtcbiAgICByb290OiB7XG4gICAgICBmbGV4R3JvdzogMSxcbiAgICB9LFxuICAgIGNvbHVtbkhlYWRlcjoge1xuICAgICAgY29sb3I6IFwiYmxhY2tcIixcbiAgICB9LFxuICAgIGZvb3RlclJvd3M6IHtcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIH0sXG4gICAgY29sdW1uczoge1xuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIlxuICAgIH0sXG4gICAgbWluaUZvb3Rlckl0ZW1zOiB7XG4gICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxKSxcbiAgICB9LFxuICAgIHRvcEZvb3Rlcjoge1xuICAgICAgLy8gZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAvLyBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLFxuICAgICAgLy8ganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5saWdodCxcbiAgICAgIC8vIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNCksXG4gICAgfSxcbiAgICBib3R0b21Gb290ZXI6IHtcbiAgICAgIC8vIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgIC8vIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAvLyBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcblxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayxcbiAgICB9LFxuICAgIGJvdHRvbUZvb3RlckxpbmtzOiB7XG4gICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICBjb2xvcjogXCIjYzFjMWMxXCIsXG4gICAgICAgIHRleHREZWNvcmF0aW9uOiBcInVuZGVybGluZVwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGJvdHRvbUZvb3Rlckljb25MaW5rczoge1xuICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgY29sb3I6IFwiI2MxYzFjMVwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHRvcEZvb3RlckxpbmtzOiB7XG4gICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIG5lcGFsaVRleHQ6IHtcbiAgICAgIGZvbnRGYW1pbHk6IFwiS2FsYW1cIixcbiAgICB9LFxuICB9KVxuKTtcblxuY29uc3QgRm9vdGVyTGlua3MgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJBYm91dFwiLFxuICAgIGFycmF5OiBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIkFib3V0IE1lXCIsXG4gICAgICAgIHBhZ2VVUkw6IFwiL1wiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwiQ29udGFjdCBNZVwiLFxuICAgICAgICBwYWdlVVJMOiBcIi9cIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlNvY2lhbFwiLFxuICAgIGFycmF5OiBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIkdpdEh1YlwiLFxuICAgICAgICBwYWdlVVJMOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9zYWphbHJzXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogXCJMaW5rZWRJblwiLFxuICAgICAgICBwYWdlVVJMOiBcIi9cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIkZhY2Vib29rXCIsXG4gICAgICAgIHBhZ2VVUkw6IFwiL1wiLFxuICAgICAgfSxcblxuICAgICAge1xuICAgICAgICB0aXRsZTogXCJUd2l0dGVyXCIsXG4gICAgICAgIHBhZ2VVUkw6IFwiL1wiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiTGVnYWxcIixcbiAgICBhcnJheTogW1xuICAgICAge1xuICAgICAgICB0aXRsZTogXCJQcml2YWN5XCIsXG4gICAgICAgIHBhZ2VVUkw6IFwiL3ByaXZhY3lcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIlRlcm1zIG9mIFNlcnZpY2VcIixcbiAgICAgICAgcGFnZVVSTDogXCIvdGVybXMtb2Ytc2VydmljZVwiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuXTtcblxuLy8gY29uc3QgTWVudUxpc3RJdGVtcyA9IFtcbi8vICAge1xuLy8gICAgIHRpdGxlOiBcIkhvbWVcIixcbi8vICAgICBwYWdlVVJMOiBcIi9cIixcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIHRpdGxlOiBcIkFib3V0XCIsXG4vLyAgICAgcGFnZVVSTDogXCIvXCIsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICB0aXRsZTogXCJCbG9nXCIsXG4vLyAgICAgcGFnZVVSTDogXCIvXCIsXG4vLyAgIH0sXG4vLyBdO1xuXG50eXBlIFByb3BzID0ge1xuICBtZW51TGlzdEl0ZW1zOiBNZW51TGlzdEl0ZW1bXTtcbn07XG5cblxuY29uc3QgRm9vdGVyID0gKHttZW51TGlzdEl0ZW1zfTogUHJvcHMpID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLnRvcEZvb3Rlcn0gZ3JpZCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTMgcC00YH0+XG4gICAgICAgIFxuICAgICAgICB7Rm9vdGVyTGlua3MubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgdGl0bGUsIGFycmF5IH0gPSBpdGVtO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5jb2x1bW5zfWB9PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIiBjbGFzc05hbWU9e2Ake2NsYXNzZXMuY29sdW1uSGVhZGVyfWB9PlxuICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICB7YXJyYXkubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgdGl0bGUsIHBhZ2VVUkwgfSA9IGl0ZW07XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChwYWdlVVJMKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRvcEZvb3RlckxpbmtzfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzZXMuYm90dG9tRm9vdGVyfSBncmlkIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBncmlkLXJvd3MtMyBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMyBtZDpncmlkLXJvd3MtMWB9PlxuICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3RlclJvd3N9PlxuICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiU2FqYWwgU2F0eWFsXCIgcGxhY2VtZW50PVwidG9wXCI+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzZXMubWluaUZvb3Rlckl0ZW1zfSAke2NsYXNzZXMubmVwYWxpVGV4dH1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAg4KS44KSc4KSyIOCkuOCkpOCljeCkr+CkvuCkslxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICA8Q29weXJpZ2h0SWNvbiAvPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5taW5pRm9vdGVySXRlbXN9PlxuICAgICAgICAgICAgICBDb3B5cmlnaHRcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb290ZXJSb3dzfT5cbiAgICAgICAgICAgIHttZW51TGlzdEl0ZW1zICYmIG1lbnVMaXN0SXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHRpdGxlLCBwYWdlVVJMIH0gPSBpdGVtO1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKHBhZ2VVUkwpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5taW5pRm9vdGVySXRlbXN9ICR7Y2xhc3Nlcy5ib3R0b21Gb290ZXJMaW5rc31gfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb290ZXJSb3dzfT5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5taW5pRm9vdGVySXRlbXN9ICR7Y2xhc3Nlcy5ib3R0b21Gb290ZXJJY29uTGlua3N9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPENvcHlyaWdodEljb24gLz5cbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5taW5pRm9vdGVySXRlbXN9ICR7Y2xhc3Nlcy5ib3R0b21Gb290ZXJJY29uTGlua3N9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPENvcHlyaWdodEljb24gLz5cbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5taW5pRm9vdGVySXRlbXN9ICR7Y2xhc3Nlcy5ib3R0b21Gb290ZXJJY29uTGlua3N9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPENvcHlyaWdodEljb24gLz5cbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Footer/index.tsx\n");

/***/ })

})