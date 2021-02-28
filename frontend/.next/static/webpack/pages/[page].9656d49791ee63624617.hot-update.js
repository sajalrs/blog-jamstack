webpackHotUpdate_N_E("pages/[page]",{

/***/ "./pages/[page].tsx":
/*!**************************!*\
  !*** ./pages/[page].tsx ***!
  \**************************/
/*! exports provided: __N_SSG, POSTS_QUERY, CURSORS_QUERY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"POSTS_QUERY\", function() { return POSTS_QUERY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CURSORS_QUERY\", function() { return CURSORS_QUERY; });\n/* harmony import */ var _home_node_app_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_PostsList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PostsList */ \"./components/PostsList/index.tsx\");\n\n\nvar _jsxFileName = \"/home/node/app/pages/[page].tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject2() {\n  var data = Object(_home_node_app_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  query IDQuery {\\n    posts {\\n      edges {\\n        cursor\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_home_node_app_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  query postsQuery($first: Int, $last: Int, $after: String, $before: String) {\\n    posts(first: $first, last: $last, after: $after, before: $before) {\\n      edges {\\n        node {\\n          date\\n          featuredImage {\\n            title\\n            sourceUrl\\n          }\\n          title\\n          author {\\n            id\\n          }\\n          id\\n          slug\\n          excerpt\\n        }\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar __N_SSG = true;\nvar POSTS_QUERY = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"gql\"])(_templateObject());\nvar CURSORS_QUERY = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"gql\"])(_templateObject2());\n\nvar IndexPage = function IndexPage(_ref) {\n  _s();\n\n  var posts = _ref.posts,\n      errors = _ref.errors,\n      numOfPages = _ref.numOfPages;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n  var pageNumber = parseInt(router.query.page.toString());\n\n  if (errors) {\n    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      title: \"Error | Next.js + TypeScript Example\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 7\n      }\n    }, __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }\n    }, __jsx(\"span\", {\n      style: {\n        color: \"red\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 11\n      }\n    }, \"Error:\"), \" \", errors));\n  }\n\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Home | Next.js + TypeScript Example\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 5\n    }\n  }, __jsx(_components_PostsList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    posts: posts,\n    pageNumber: pageNumber,\n    numOfPages: numOfPages,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(IndexPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3BhZ2VdLnRzeD80ZWI1Il0sIm5hbWVzIjpbIlBPU1RTX1FVRVJZIiwiZ3FsIiwiQ1VSU09SU19RVUVSWSIsIkluZGV4UGFnZSIsInBvc3RzIiwiZXJyb3JzIiwibnVtT2ZQYWdlcyIsInJvdXRlciIsInVzZVJvdXRlciIsInBhZ2VOdW1iZXIiLCJwYXJzZUludCIsInF1ZXJ5IiwicGFnZSIsInRvU3RyaW5nIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBQ0E7O0FBSU8sSUFBTUEsV0FBVyxHQUFHQywwREFBSCxtQkFBakI7QUE2QkEsSUFBTUMsYUFBYSxHQUFHRCwwREFBSCxvQkFBbkI7O0FBVVAsSUFBTUUsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBMEM7QUFBQTs7QUFBQSxNQUF2Q0MsS0FBdUMsUUFBdkNBLEtBQXVDO0FBQUEsTUFBaENDLE1BQWdDLFFBQWhDQSxNQUFnQztBQUFBLE1BQXhCQyxVQUF3QixRQUF4QkEsVUFBd0I7QUFDMUQsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLFVBQVUsR0FBR0MsUUFBUSxDQUFDSCxNQUFNLENBQUNJLEtBQVAsQ0FBYUMsSUFBYixDQUFrQkMsUUFBbEIsRUFBRCxDQUEzQjs7QUFFQSxNQUFJUixNQUFKLEVBQVk7QUFDVixXQUNFLE1BQUMsMERBQUQ7QUFBUSxXQUFLLEVBQUMsc0NBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLFdBQUssRUFBRTtBQUFFUyxhQUFLLEVBQUU7QUFBVCxPQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsT0FDZ0RULE1BRGhELENBREYsQ0FERjtBQU9EOztBQUNELFNBQ0UsTUFBQywwREFBRDtBQUFRLFNBQUssRUFBQyxxQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2REFBRDtBQUFXLFNBQUssRUFBRUQsS0FBbEI7QUFBMEIsY0FBVSxFQUFFSyxVQUF0QztBQUFrRCxjQUFVLEVBQUVILFVBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGO0FBS0QsQ0FsQkQ7O0dBQU1ILFM7VUFDV0sscUQ7OztLQURYTCxTO0FBb0JTQSx3RUFBZiIsImZpbGUiOiIuL3BhZ2VzL1twYWdlXS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwb2xsbywgYWRkQXBvbGxvU3RhdGUgfSBmcm9tIFwiLi4vbGliL2Fwb2xsb0NsaWVudFwiO1xuaW1wb3J0IHsgZ3FsIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyBHZXRTdGF0aWNQYXRocywgR2V0U3RhdGljUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUG9zdHNMaXN0LCB7SVRFTVNfUEVSX1BBR0V9IGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3RzTGlzdFwiO1xuaW1wb3J0IHsgUG9zdCB9IGZyb20gXCIuLi9pbnRlcmZhY2VzXCI7XG5cblxuZXhwb3J0IGNvbnN0IFBPU1RTX1FVRVJZID0gZ3FsYFxuICBxdWVyeSBwb3N0c1F1ZXJ5KCRmaXJzdDogSW50LCAkbGFzdDogSW50LCAkYWZ0ZXI6IFN0cmluZywgJGJlZm9yZTogU3RyaW5nKSB7XG4gICAgcG9zdHMoZmlyc3Q6ICRmaXJzdCwgbGFzdDogJGxhc3QsIGFmdGVyOiAkYWZ0ZXIsIGJlZm9yZTogJGJlZm9yZSkge1xuICAgICAgZWRnZXMge1xuICAgICAgICBub2RlIHtcbiAgICAgICAgICBkYXRlXG4gICAgICAgICAgZmVhdHVyZWRJbWFnZSB7XG4gICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgc291cmNlVXJsXG4gICAgICAgICAgfVxuICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgYXV0aG9yIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgfVxuICAgICAgICAgIGlkXG4gICAgICAgICAgc2x1Z1xuICAgICAgICAgIGV4Y2VycHRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxudHlwZSBQcm9wcyA9IHtcbiAgcG9zdHM/OiBQb3N0W107XG4gIGVycm9ycz86IHN0cmluZztcbiAgbnVtT2ZQYWdlczogbnVtYmVyO1xufTtcblxuZXhwb3J0IGNvbnN0IENVUlNPUlNfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IElEUXVlcnkge1xuICAgIHBvc3RzIHtcbiAgICAgIGVkZ2VzIHtcbiAgICAgICAgY3Vyc29yXG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBJbmRleFBhZ2UgPSAoeyBwb3N0cywgZXJyb3JzLCBudW1PZlBhZ2VzIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBwYWdlTnVtYmVyID0gcGFyc2VJbnQocm91dGVyLnF1ZXJ5LnBhZ2UudG9TdHJpbmcoKSk7XG5cbiAgaWYgKGVycm9ycykge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0IHRpdGxlPVwiRXJyb3IgfCBOZXh0LmpzICsgVHlwZVNjcmlwdCBFeGFtcGxlXCI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19PkVycm9yOjwvc3Bhbj4ge2Vycm9yc31cbiAgICAgICAgPC9wPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgdGl0bGU9XCJIb21lIHwgTmV4dC5qcyArIFR5cGVTY3JpcHQgRXhhbXBsZVwiPlxuICAgICAgPFBvc3RzTGlzdCBwb3N0cz17cG9zdHMhfSBwYWdlTnVtYmVyPXtwYWdlTnVtYmVyfSBudW1PZlBhZ2VzPXtudW1PZlBhZ2VzfSAvPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlO1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHM6IEdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBhcG9sbG9DbGllbnQgPSBpbml0aWFsaXplQXBvbGxvKCk7XG5cbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhcG9sbG9DbGllbnQucXVlcnkoe1xuICAgIHF1ZXJ5OiBDVVJTT1JTX1FVRVJZLFxuICAgIGNvbnRleHQ6IHsgY2xpZW50TmFtZTogXCJ3b3JkUHJlc3NcIiB9LFxuICB9KTtcbiAgbGV0IHBhdGhzID0gW107XG4gIGNvbnN0IG51bU9mUGFnZXMgPSBNYXRoLmNlaWwoZGF0YS5wb3N0cy5lZGdlcy5sZW5ndGggLyBJVEVNU19QRVJfUEFHRSk7XG4gIGZvciAobGV0IGkgPSAyOyBpIDw9IG51bU9mUGFnZXM7IGkrKykge1xuICAgIHBhdGhzLnB1c2goeyBwYXJhbXM6IHsgcGFnZTogaS50b1N0cmluZygpIH0gfSk7XG4gIH1cblxuICByZXR1cm4geyBwYXRocywgZmFsbGJhY2s6IGZhbHNlIH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBwYWdlID0gcGFyc2VJbnQocGFyYW1zPy5wYWdlISBhcyBzdHJpbmcpO1xuICAgIGNvbnN0IGFwb2xsb0NsaWVudCA9IGluaXRpYWxpemVBcG9sbG8oKTtcblxuICAgIGNvbnN0IGN1cnNvcnMgPSBhd2FpdCBhcG9sbG9DbGllbnRcbiAgICAgIC5xdWVyeSh7XG4gICAgICAgIHF1ZXJ5OiBDVVJTT1JTX1FVRVJZLFxuICAgICAgICBjb250ZXh0OiB7IGNsaWVudE5hbWU6IFwid29yZFByZXNzXCIgfSxcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzKSA9PiBbXG4gICAgICAgIHJlcy5kYXRhLnBvc3RzLmVkZ2VzWzBdLFxuICAgICAgICAuLi5yZXMuZGF0YS5wb3N0cy5lZGdlcy5maWx0ZXIoXG4gICAgICAgICAgKF86IHN0cmluZywgaW5kZXg6IG51bWJlcikgPT4gKGluZGV4ICsgMSkgJSBJVEVNU19QRVJfUEFHRSA9PT0gMFxuICAgICAgICApLFxuICAgICAgXSk7XG5cbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGFwb2xsb0NsaWVudC5xdWVyeSh7XG4gICAgICBxdWVyeTogUE9TVFNfUVVFUlksXG4gICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgZmlyc3Q6IElURU1TX1BFUl9QQUdFLFxuICAgICAgICBsYXN0OiBudWxsLFxuICAgICAgICBhZnRlcjogY3Vyc29yc1twYWdlIC0gMV0uY3Vyc29yLFxuICAgICAgICBiZWZvcmU6IG51bGwsXG4gICAgICB9LFxuICAgICAgY29udGV4dDogeyBjbGllbnROYW1lOiBcIndvcmRQcmVzc1wiIH0sXG4gICAgfSk7XG5cbiAgICByZXR1cm4gYWRkQXBvbGxvU3RhdGUoYXBvbGxvQ2xpZW50LCB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBwb3N0czogZGF0YS5wb3N0cy5lZGdlcy5tYXAoKGVkZ2U6IHsgbm9kZTogUG9zdCB9KSA9PiBlZGdlLm5vZGUpLFxuICAgICAgICBudW1PZlBhZ2VzOiBjdXJzb3JzLmxlbmd0aCxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiB7IHByb3BzOiB7IGVycm9yczogZXJyLm1lc3NhZ2UgfSB9O1xuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[page].tsx\n");

/***/ })

})