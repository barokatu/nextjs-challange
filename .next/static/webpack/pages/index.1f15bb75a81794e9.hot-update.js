"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _api_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/posts */ \"./pages/api/posts.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const { data: posts , isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)(\"posts\", _api_posts__WEBPACK_IMPORTED_MODULE_2__.getAllPosts);\n    const [showAlert, setShowAlert] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [deletedTitle, setDeletedTitle] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [postsData, setPostData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n            lineNumber: 14,\n            columnNumber: 12\n        }, this);\n    }\n    if (showAlert === true) {\n        setTimeout(()=>{\n            setShowAlert(false);\n        }, 3000);\n    }\n    const onDeleteHandler = (post)=>{\n        const index = posts.findIndex((obj)=>obj.id === post.id);\n        if (index !== -1) {\n            posts.splice(index, 1);\n        }\n        (0,_api_posts__WEBPACK_IMPORTED_MODULE_2__.deletePost)(post.id);\n        setDeletedTitle(post.title);\n        setShowAlert(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        m: \"20px\",\n        children: [\n            showAlert && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Alert, {\n                status: \"success\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.AlertIcon, {}, void 0, false, {\n                        fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.AlertTitle, {\n                        children: \"Deleted!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.AlertDescription, {\n                        children: [\n                            \"Your Post with title \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                children: deletedTitle\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                lineNumber: 39,\n                                columnNumber: 48\n                            }, this),\n                            \", has been deleted.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                lineNumber: 36,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                mb: \"4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                            mt: \"4\",\n                            colorScheme: \"white\",\n                            textColor: \"black\",\n                            children: \"NextJS Challange\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Spacer, {}, void 0, false, {\n                            fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/create-post\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                    mt: \"4\",\n                                    colorScheme: \"blue\",\n                                    children: \"Create Post\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.SimpleGrid, {\n                columns: 2,\n                spacing: 4,\n                children: posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                        borderWidth: \"1px\",\n                        borderRadius: \"lg\",\n                        overflow: \"hidden\",\n                        p: \"4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                                size: \"md\",\n                                mb: \"2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                    children: [\n                                        post.title,\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Spacer, {}, void 0, false, {\n                                            fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                            lineNumber: 69,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            href: \"/post?id=\".concat(post.id),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                                mt: \"4\",\n                                                ms: \"2\",\n                                                colorScheme: \"green\",\n                                                children: \"Detail\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                                lineNumber: 71,\n                                                columnNumber: 15\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                            lineNumber: 70,\n                                            columnNumber: 14\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            href: \"/edit-post?id=\".concat(post.id),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                                mt: \"4\",\n                                                ms: \"2\",\n                                                colorScheme: \"blue\",\n                                                children: \"Edit\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                                lineNumber: 76,\n                                                columnNumber: 15\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                            lineNumber: 75,\n                                            columnNumber: 14\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                            mt: \"4\",\n                                            ms: \"2\",\n                                            colorScheme: \"red\",\n                                            onClick: ()=>{\n                                                onDeleteHandler(post);\n                                            },\n                                            children: \"Delete\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                            lineNumber: 80,\n                                            columnNumber: 13\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: post.body\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                lineNumber: 86,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, post.id, true, {\n                        fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"j2nGwB1HR6XJpd/MkxE9frvlOeI=\", false, function() {\n    return [\n        react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WCxhQUFZOzRDQUFNWSxTQUFTLElBQU07Z0RBQUN6QixnQkFBZ0JDOzRDQUFLO3NEQUFHOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FNaEYsOERBQUNIOzBDQUFLRyxLQUFLeUIsSUFBSTs7Ozs7Ozt1QkExQlZ6QixLQUFLSSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0N4QixDQUFDO0dBckZ1QmpCOztRQUNhTixpREFBUUE7OztLQURyQk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZWFkaW5nLCBTaW1wbGVHcmlkLCBCb3gsIEJ1dHRvbiwgRmxleCwgU3BhY2VyLCBBbGVydCwgQWxlcnRJY29uLCBBbGVydERlc2NyaXB0aW9uLCBBbGVydFRpdGxlIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAncmVhY3QtcXVlcnknXG5pbXBvcnQgeyBnZXRBbGxQb3N0cywgZGVsZXRlUG9zdCB9IGZyb20gJy4vYXBpL3Bvc3RzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7IGRhdGE6IHBvc3RzLCBpc0xvYWRpbmcgfSA9IHVzZVF1ZXJ5KCdwb3N0cycsIGdldEFsbFBvc3RzKVxuICBjb25zdCBbc2hvd0FsZXJ0LCBzZXRTaG93QWxlcnRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtkZWxldGVkVGl0bGUsIHNldERlbGV0ZWRUaXRsZV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3Bvc3RzRGF0YSwgc2V0UG9zdERhdGFdID0gdXNlU3RhdGUoW10pXG5cbiAgaWYgKGlzTG9hZGluZykge1xuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgfVxuXG4gIGlmKHNob3dBbGVydCA9PT0gdHJ1ZSkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0U2hvd0FsZXJ0KGZhbHNlKVxuICAgIH0sIDMwMDApO1xuICB9XG5cbiAgY29uc3Qgb25EZWxldGVIYW5kbGVyID0gKHBvc3QpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHBvc3RzLmZpbmRJbmRleChvYmogPT4gb2JqLmlkID09PSBwb3N0LmlkKVxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHBvc3RzLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG5cbiAgICBkZWxldGVQb3N0KHBvc3QuaWQpXG4gICAgc2V0RGVsZXRlZFRpdGxlKHBvc3QudGl0bGUpXG4gICAgc2V0U2hvd0FsZXJ0KHRydWUpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCb3ggbT1cIjIwcHhcIj5cbiAgICAgIHtzaG93QWxlcnQgJiYgPEFsZXJ0IHN0YXR1cz0nc3VjY2Vzcyc+XG4gICAgICAgIDxBbGVydEljb24gLz5cbiAgICAgICAgPEFsZXJ0VGl0bGU+RGVsZXRlZCE8L0FsZXJ0VGl0bGU+XG4gICAgICAgIDxBbGVydERlc2NyaXB0aW9uPllvdXIgUG9zdCB3aXRoIHRpdGxlIDxiPntkZWxldGVkVGl0bGV9PC9iPiwgaGFzIGJlZW4gZGVsZXRlZC48L0FsZXJ0RGVzY3JpcHRpb24+XG4gICAgICA8L0FsZXJ0Pn1cbiAgICAgIDxIZWFkaW5nIG1iPVwiNFwiPlxuICAgICAgICA8RmxleD5cbiAgICAgICAgICAgIDxCdXR0b24gbXQ9XCI0XCIgY29sb3JTY2hlbWU9XCJ3aGl0ZVwiIHRleHRDb2xvcj17XCJibGFja1wifT5cbiAgICAgICAgICAgICAgTmV4dEpTIENoYWxsYW5nZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPFNwYWNlciAvPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9jcmVhdGUtcG9zdFwiPlxuICAgICAgICAgICAgPEJ1dHRvbiBtdD1cIjRcIiBjb2xvclNjaGVtZT1cImJsdWVcIj5cbiAgICAgICAgICAgICAgQ3JlYXRlIFBvc3RcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgPC9IZWFkaW5nPlxuICAgICAgXG4gICAgICA8U2ltcGxlR3JpZCBjb2x1bW5zPXsyfSBzcGFjaW5nPXs0fT5cbiAgICAgICAge3Bvc3RzLm1hcChwb3N0ID0+IChcbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBrZXk9e3Bvc3QuaWR9XG4gICAgICAgICAgICBib3JkZXJXaWR0aD1cIjFweFwiXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM9XCJsZ1wiXG4gICAgICAgICAgICBvdmVyZmxvdz1cImhpZGRlblwiXG4gICAgICAgICAgICBwPVwiNFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEhlYWRpbmcgc2l6ZT1cIm1kXCIgbWI9XCIyXCI+XG4gICAgICAgICAgICA8RmxleD5cbiAgICAgICAgICAgIHtwb3N0LnRpdGxlfVxuICAgICAgICAgICAgPFNwYWNlciAvPlxuICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdD9pZD0ke3Bvc3QuaWR9YH0+XG4gICAgICAgICAgICAgIDxCdXR0b24gbXQ9XCI0XCIgbXM9XCIyXCIgY29sb3JTY2hlbWU9XCJncmVlblwiPlxuICAgICAgICAgICAgICAgIERldGFpbFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICA8TGluayBocmVmPXtgL2VkaXQtcG9zdD9pZD0ke3Bvc3QuaWR9YH0+XG4gICAgICAgICAgICAgIDxCdXR0b24gbXQ9XCI0XCIgbXM9XCIyXCIgY29sb3JTY2hlbWU9XCJibHVlXCI+XG4gICAgICAgICAgICAgICAgRWRpdFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxCdXR0b24gbXQ9XCI0XCIgbXM9XCIyXCIgY29sb3JTY2hlbWU9XCJyZWRcIiBvbkNsaWNrPXsoKSA9PiB7b25EZWxldGVIYW5kbGVyKHBvc3QpfX0+XG4gICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgIDxkaXY+e3Bvc3QuYm9keX08L2Rpdj5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKSl9XG4gICAgICA8L1NpbXBsZUdyaWQ+XG4gICAgPC9Cb3g+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkaW5nIiwiU2ltcGxlR3JpZCIsIkJveCIsIkJ1dHRvbiIsIkZsZXgiLCJTcGFjZXIiLCJBbGVydCIsIkFsZXJ0SWNvbiIsIkFsZXJ0RGVzY3JpcHRpb24iLCJBbGVydFRpdGxlIiwidXNlUXVlcnkiLCJnZXRBbGxQb3N0cyIsImRlbGV0ZVBvc3QiLCJMaW5rIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIb21lIiwiZGF0YSIsInBvc3RzIiwiaXNMb2FkaW5nIiwic2hvd0FsZXJ0Iiwic2V0U2hvd0FsZXJ0IiwiZGVsZXRlZFRpdGxlIiwic2V0RGVsZXRlZFRpdGxlIiwicG9zdHNEYXRhIiwic2V0UG9zdERhdGEiLCJkaXYiLCJzZXRUaW1lb3V0Iiwib25EZWxldGVIYW5kbGVyIiwicG9zdCIsImluZGV4IiwiZmluZEluZGV4Iiwib2JqIiwiaWQiLCJzcGxpY2UiLCJ0aXRsZSIsIm0iLCJzdGF0dXMiLCJiIiwibWIiLCJtdCIsImNvbG9yU2NoZW1lIiwidGV4dENvbG9yIiwiaHJlZiIsImNvbHVtbnMiLCJzcGFjaW5nIiwibWFwIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJSYWRpdXMiLCJvdmVyZmxvdyIsInAiLCJzaXplIiwibXMiLCJvbkNsaWNrIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});