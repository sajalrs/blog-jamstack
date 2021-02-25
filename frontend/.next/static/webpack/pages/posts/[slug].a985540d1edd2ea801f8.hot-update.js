webpackHotUpdate_N_E("pages/posts/[slug]",{

/***/ "./pages/posts/[slug].tsx":
/*!********************************!*\
  !*** ./pages/posts/[slug].tsx ***!
  \********************************/
/*! exports provided: __N_SSG, POSTS_SLUG_QUERY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"POSTS_SLUG_QUERY\", function() { return POSTS_SLUG_QUERY; });\n/* harmony import */ var _home_node_app_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post.module.scss */ \"./pages/posts/post.module.scss\");\n/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_post_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/home/node/app/pages/posts/[slug].tsx\",\n    _this = undefined;\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_home_node_app_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  query postsQuery {\\n    posts {\\n      nodes {\\n        slug\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar __N_SSG = true;\nvar POSTS_SLUG_QUERY = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"gql\"])(_templateObject());\n\nvar StaticPropsDetail = function StaticPropsDetail(_ref) {\n  var post = _ref.post,\n      errors = _ref.errors;\n\n  if (errors) {\n    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      title: \"Error | Next.js + TypeScript Example\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 7\n      }\n    }, __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }\n    }, __jsx(\"span\", {\n      style: {\n        color: \"red\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 11\n      }\n    }, \"Error:\"), \" \", errors));\n  }\n\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"\".concat(post ? post.title : \"User Detail\", \" | Next.js + TypeScript Example\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"\".concat(_post_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a[\"post\"], \" flex justify-center items-center max-w-full\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"m-4 max-w-4xl\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    gutterBottom: true,\n    variant: \"h5\",\n    component: \"h2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 11\n    }\n  }, post === null || post === void 0 ? void 0 : post.title), __jsx(\"div\", {\n    // eslint-disable-next-line react/no-danger\n    dangerouslySetInnerHTML: {\n      __html: post === null || post === void 0 ? void 0 : post.content\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 11\n    }\n  }))));\n};\n\n_c = StaticPropsDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StaticPropsDetail);\n\nvar _c;\n\n$RefreshReg$(_c, \"StaticPropsDetail\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW3NsdWddLnRzeD8xYTUyIl0sIm5hbWVzIjpbIlBPU1RTX1NMVUdfUVVFUlkiLCJncWwiLCJTdGF0aWNQcm9wc0RldGFpbCIsInBvc3QiLCJlcnJvcnMiLCJjb2xvciIsInRpdGxlIiwicG9zdFN0eWxlcyIsIl9faHRtbCIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBQ0E7O0FBY08sSUFBTUEsZ0JBQWdCLEdBQUdDLDBEQUFILG1CQUF0Qjs7QUF3QlAsSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixPQUE2QjtBQUFBLE1BQTFCQyxJQUEwQixRQUExQkEsSUFBMEI7QUFBQSxNQUFwQkMsTUFBb0IsUUFBcEJBLE1BQW9COztBQUNyRCxNQUFJQSxNQUFKLEVBQVk7QUFDVixXQUNFLE1BQUMsMERBQUQ7QUFBUSxXQUFLLEVBQUMsc0NBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLFdBQUssRUFBRTtBQUFFQyxhQUFLLEVBQUU7QUFBVCxPQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsT0FDZ0RELE1BRGhELENBREYsQ0FERjtBQU9EOztBQUVELFNBQ0UsTUFBQywwREFBRDtBQUNFLFNBQUssWUFDSEQsSUFBSSxHQUFHQSxJQUFJLENBQUNHLEtBQVIsR0FBZ0IsYUFEakIsb0NBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFO0FBQUssYUFBUyxZQUFLQyx3REFBVSxDQUFDLE1BQUQsQ0FBZixpREFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRUFBRDtBQUFZLGdCQUFZLE1BQXhCO0FBQXlCLFdBQU8sRUFBQyxJQUFqQztBQUFzQyxhQUFTLEVBQUMsSUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSixJQURILGFBQ0dBLElBREgsdUJBQ0dBLElBQUksQ0FBRUcsS0FEVCxDQURGLEVBSUU7QUFDRTtBQUNBLDJCQUF1QixFQUFFO0FBQ3ZCRSxZQUFNLEVBQUVMLElBQUYsYUFBRUEsSUFBRix1QkFBRUEsSUFBSSxDQUFFTTtBQURTLEtBRjNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixDQURGLENBTEYsQ0FERjtBQXFCRCxDQWhDRDs7S0FBTVAsaUI7QUFrQ1NBLGdGQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcG9zdHMvW3NsdWddLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgeyBpbml0aWFsaXplQXBvbGxvIH0gZnJvbSBcIi4uLy4uL2xpYi9hcG9sbG9DbGllbnRcIjtcbmltcG9ydCB7IGdxbCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMsIEdldFN0YXRpY1BhdGhzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgcG9zdFN0eWxlcyBmcm9tIFwiLi9wb3N0Lm1vZHVsZS5zY3NzXCI7XG5cbmNvbnN0IFBPU1RfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IFBvc3RRdWVyeSgkc2x1ZzogU3RyaW5nISkge1xuICAgIHBvc3RCeShzbHVnOiAkc2x1Zykge1xuICAgICAgdGl0bGVcbiAgICAgIGNvbnRlbnRcbiAgICAgIGF1dGhvciB7XG4gICAgICAgIG5pY2tuYW1lXG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgUE9TVFNfU0xVR19RVUVSWSA9IGdxbGBcbiAgcXVlcnkgcG9zdHNRdWVyeSB7XG4gICAgcG9zdHMge1xuICAgICAgbm9kZXMge1xuICAgICAgICBzbHVnXG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG50eXBlIFBvc3QgPSB7XG4gIF9fdHlwZW5hbWU6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgY29udGVudDogc3RyaW5nO1xuICBhdXRob3I6IHtcbiAgICBuaWNrbmFtZTogc3RyaW5nO1xuICB9O1xufTtcblxudHlwZSBQcm9wcyA9IHtcbiAgcG9zdD86IFBvc3Q7XG4gIGVycm9ycz86IHN0cmluZztcbn07XG5cbmNvbnN0IFN0YXRpY1Byb3BzRGV0YWlsID0gKHsgcG9zdCwgZXJyb3JzIH06IFByb3BzKSA9PiB7XG4gIGlmIChlcnJvcnMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dCB0aXRsZT1cIkVycm9yIHwgTmV4dC5qcyArIFR5cGVTY3JpcHQgRXhhbXBsZVwiPlxuICAgICAgICA8cD5cbiAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT5FcnJvcjo8L3NwYW4+IHtlcnJvcnN9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXRcbiAgICAgIHRpdGxlPXtgJHtcbiAgICAgICAgcG9zdCA/IHBvc3QudGl0bGUgOiBcIlVzZXIgRGV0YWlsXCJcbiAgICAgIH0gfCBOZXh0LmpzICsgVHlwZVNjcmlwdCBFeGFtcGxlYH1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cG9zdFN0eWxlc1tcInBvc3RcIl19IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG1heC13LWZ1bGxgfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTQgbWF4LXctNHhsXCI+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImgyXCI+XG4gICAgICAgICAgICB7cG9zdD8udGl0bGV9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1kYW5nZXJcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgIF9faHRtbDogcG9zdD8uY29udGVudCEhLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhdGljUHJvcHNEZXRhaWw7XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRoczogR2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gIC8vIEdldCB0aGUgcGF0aHMgd2Ugd2FudCB0byBwcmUtcmVuZGVyIGJhc2VkIG9uIHVzZXJzXG5cbiAgY29uc3QgYXBvbGxvQ2xpZW50ID0gaW5pdGlhbGl6ZUFwb2xsbygpO1xuXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBvbGxvQ2xpZW50LnF1ZXJ5KHtcbiAgICBxdWVyeTogUE9TVFNfU0xVR19RVUVSWSxcbiAgICBjb250ZXh0OiB7IGNsaWVudE5hbWU6IFwid29yZFByZXNzXCIgfSxcbiAgfSk7XG5cbiAgY29uc3QgcGF0aHMgPSBkYXRhLnBvc3RzLm5vZGVzLm1hcCgobm9kZTogeyBzbHVnOiBzdHJpbmcgfSkgPT4gKHtcbiAgICBwYXJhbXM6IHsgc2x1Zzogbm9kZS5zbHVnLnRvU3RyaW5nKCkgfSxcbiAgfSkpO1xuXG4gIC8vIFdlJ2xsIHByZS1yZW5kZXIgb25seSB0aGVzZSBwYXRocyBhdCBidWlsZCB0aW1lLlxuICAvLyB7IGZhbGxiYWNrOiBmYWxzZSB9IG1lYW5zIG90aGVyIHJvdXRlcyBzaG91bGQgNDA0LlxuICByZXR1cm4geyBwYXRocywgZmFsbGJhY2s6IGZhbHNlIH07XG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIGdldHMgY2FsbGVkIGF0IGJ1aWxkIHRpbWUgb24gc2VydmVyLXNpZGUuXG4vLyBJdCB3b24ndCBiZSBjYWxsZWQgb24gY2xpZW50LXNpZGUsIHNvIHlvdSBjYW4gZXZlbiBkb1xuLy8gZGlyZWN0IGRhdGFiYXNlIHF1ZXJpZXMuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzbHVnID0gcGFyYW1zPy5zbHVnO1xuXG4gICAgY29uc3QgYXBvbGxvQ2xpZW50ID0gaW5pdGlhbGl6ZUFwb2xsbygpO1xuXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhcG9sbG9DbGllbnQucXVlcnkoe1xuICAgICAgcXVlcnk6IFBPU1RfUVVFUlksXG4gICAgICB2YXJpYWJsZXM6IHsgc2x1ZyB9LFxuICAgICAgY29udGV4dDogeyBjbGllbnROYW1lOiBcIndvcmRQcmVzc1wiIH0sXG4gICAgfSk7XG5cbiAgICAvLyBCeSByZXR1cm5pbmcgeyBwcm9wczogaXRlbSB9LCB0aGUgU3RhdGljUHJvcHNEZXRhaWwgY29tcG9uZW50XG4gICAgLy8gd2lsbCByZWNlaXZlIGBpdGVtYCBhcyBhIHByb3AgYXQgYnVpbGQgdGltZVxuICAgIHJldHVybiB7IHByb3BzOiB7IHBvc3Q6IGRhdGEucG9zdEJ5IH0gfTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgZXJyb3JzOiBlcnIubWVzc2FnZSB9IH07XG4gIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/[slug].tsx\n");

/***/ })

})