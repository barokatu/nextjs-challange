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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _api_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/posts */ \"./pages/api/posts.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const { data: posts , isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)(\"posts\", _api_posts__WEBPACK_IMPORTED_MODULE_2__.getAllPosts);\n    const [showAlert, setShowAlert] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [deletedTitle, setDeletedTitle] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [postsData, setPostData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n            lineNumber: 14,\n            columnNumber: 12\n        }, this);\n    }\n    console.log(posts);\n    if (showAlert === true) {\n        setTimeout(()=>{\n            setShowAlert(false);\n        }, 3000);\n    }\n    const onDeleteHandler = (post)=>{\n        const index = posts.findIndex((obj)=>obj.id === 5); // find the index of the object with id value of 5\n        if (index !== -1) {\n            posts.splice(index, 1); // remove the object at that index from the array\n        }\n        console.log(posts);\n        (0,_api_posts__WEBPACK_IMPORTED_MODULE_2__.deletePost)(post.id);\n        setDeletedTitle(post.title);\n        setShowAlert(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        m: \"20px\",\n        children: [\n            showAlert && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Alert, {\n                status: \"success\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.AlertIcon, {}, void 0, false, {\n                        fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.AlertTitle, {\n                        children: \"Deleted!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.AlertDescription, {\n                        children: [\n                            \"Your Post with title \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                children: deletedTitle\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                lineNumber: 42,\n                                columnNumber: 48\n                            }, this),\n                            \", has been deleted.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                lineNumber: 39,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                mb: \"4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                            mt: \"4\",\n                            colorScheme: \"white\",\n                            textColor: \"black\",\n                            children: \"NextJS Challange\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Spacer, {}, void 0, false, {\n                            fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/create-post\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                    mt: \"4\",\n                                    colorScheme: \"blue\",\n                                    children: \"Create Post\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.SimpleGrid, {\n                columns: 2,\n                spacing: 4,\n                children: posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                        borderWidth: \"1px\",\n                        borderRadius: \"lg\",\n                        overflow: \"hidden\",\n                        p: \"4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                                size: \"md\",\n                                mb: \"2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                    children: [\n                                        post.title,\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Spacer, {}, void 0, false, {\n                                            fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                            lineNumber: 72,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            href: \"/edit-post?id=\".concat(post.id),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                                mt: \"4\",\n                                                ms: \"2\",\n                                                colorScheme: \"blue\",\n                                                children: \"Edit\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                                lineNumber: 74,\n                                                columnNumber: 15\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                            lineNumber: 73,\n                                            columnNumber: 14\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                            mt: \"4\",\n                                            ms: \"2\",\n                                            colorScheme: \"red\",\n                                            onClick: ()=>{\n                                                onDeleteHandler(post);\n                                            },\n                                            children: \"Delete\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                            lineNumber: 78,\n                                            columnNumber: 13\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: post.body\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                lineNumber: 84,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, post.id, true, {\n                        fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"j2nGwB1HR6XJpd/MkxE9frvlOeI=\", false, function() {\n    return [\n        react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OERBQUNMOzBDQUFLSyxLQUFLeUIsSUFBSTs7Ozs7Ozt1QkFyQlZ6QixLQUFLSSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0FBMkJ4QixDQUFDO0dBbkZ1Qm5COztRQUNhTixpREFBUUE7OztLQURyQk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZWFkaW5nLCBTaW1wbGVHcmlkLCBCb3gsIEJ1dHRvbiwgRmxleCwgU3BhY2VyLCBBbGVydCwgQWxlcnRJY29uLCBBbGVydERlc2NyaXB0aW9uLCBBbGVydFRpdGxlIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAncmVhY3QtcXVlcnknXG5pbXBvcnQgeyBnZXRBbGxQb3N0cywgZGVsZXRlUG9zdCB9IGZyb20gJy4vYXBpL3Bvc3RzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7IGRhdGE6IHBvc3RzLCBpc0xvYWRpbmcgfSA9IHVzZVF1ZXJ5KCdwb3N0cycsIGdldEFsbFBvc3RzKVxuICBjb25zdCBbc2hvd0FsZXJ0LCBzZXRTaG93QWxlcnRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtkZWxldGVkVGl0bGUsIHNldERlbGV0ZWRUaXRsZV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3Bvc3RzRGF0YSwgc2V0UG9zdERhdGFdID0gdXNlU3RhdGUoW10pXG5cbiAgaWYgKGlzTG9hZGluZykge1xuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgfVxuICBcbiAgY29uc29sZS5sb2cocG9zdHMpO1xuXG4gIGlmKHNob3dBbGVydCA9PT0gdHJ1ZSkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0U2hvd0FsZXJ0KGZhbHNlKVxuICAgIH0sIDMwMDApO1xuICB9XG5cbiAgY29uc3Qgb25EZWxldGVIYW5kbGVyID0gKHBvc3QpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHBvc3RzLmZpbmRJbmRleChvYmogPT4gb2JqLmlkID09PSA1KTsgLy8gZmluZCB0aGUgaW5kZXggb2YgdGhlIG9iamVjdCB3aXRoIGlkIHZhbHVlIG9mIDVcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBwb3N0cy5zcGxpY2UoaW5kZXgsIDEpOyAvLyByZW1vdmUgdGhlIG9iamVjdCBhdCB0aGF0IGluZGV4IGZyb20gdGhlIGFycmF5XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHBvc3RzKTtcblxuICAgIGRlbGV0ZVBvc3QocG9zdC5pZClcbiAgICBzZXREZWxldGVkVGl0bGUocG9zdC50aXRsZSlcbiAgICBzZXRTaG93QWxlcnQodHJ1ZSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEJveCBtPVwiMjBweFwiPlxuICAgICAge3Nob3dBbGVydCAmJiA8QWxlcnQgc3RhdHVzPSdzdWNjZXNzJz5cbiAgICAgICAgPEFsZXJ0SWNvbiAvPlxuICAgICAgICA8QWxlcnRUaXRsZT5EZWxldGVkITwvQWxlcnRUaXRsZT5cbiAgICAgICAgPEFsZXJ0RGVzY3JpcHRpb24+WW91ciBQb3N0IHdpdGggdGl0bGUgPGI+e2RlbGV0ZWRUaXRsZX08L2I+LCBoYXMgYmVlbiBkZWxldGVkLjwvQWxlcnREZXNjcmlwdGlvbj5cbiAgICAgIDwvQWxlcnQ+fVxuICAgICAgPEhlYWRpbmcgbWI9XCI0XCI+XG4gICAgICAgIDxGbGV4PlxuICAgICAgICAgICAgPEJ1dHRvbiBtdD1cIjRcIiBjb2xvclNjaGVtZT1cIndoaXRlXCIgdGV4dENvbG9yPXtcImJsYWNrXCJ9PlxuICAgICAgICAgICAgICBOZXh0SlMgQ2hhbGxhbmdlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8U3BhY2VyIC8+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2NyZWF0ZS1wb3N0XCI+XG4gICAgICAgICAgICA8QnV0dG9uIG10PVwiNFwiIGNvbG9yU2NoZW1lPVwiYmx1ZVwiPlxuICAgICAgICAgICAgICBDcmVhdGUgUG9zdFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0ZsZXg+XG4gICAgICA8L0hlYWRpbmc+XG4gICAgICBcbiAgICAgIDxTaW1wbGVHcmlkIGNvbHVtbnM9ezJ9IHNwYWNpbmc9ezR9PlxuICAgICAgICB7cG9zdHMubWFwKHBvc3QgPT4gKFxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIGtleT17cG9zdC5pZH1cbiAgICAgICAgICAgIGJvcmRlcldpZHRoPVwiMXB4XCJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cImxnXCJcbiAgICAgICAgICAgIG92ZXJmbG93PVwiaGlkZGVuXCJcbiAgICAgICAgICAgIHA9XCI0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SGVhZGluZyBzaXplPVwibWRcIiBtYj1cIjJcIj5cbiAgICAgICAgICAgIDxGbGV4PlxuICAgICAgICAgICAge3Bvc3QudGl0bGV9XG4gICAgICAgICAgICA8U3BhY2VyIC8+XG4gICAgICAgICAgICAgPExpbmsgaHJlZj17YC9lZGl0LXBvc3Q/aWQ9JHtwb3N0LmlkfWB9PlxuICAgICAgICAgICAgICA8QnV0dG9uIG10PVwiNFwiIG1zPVwiMlwiIGNvbG9yU2NoZW1lPVwiYmx1ZVwiPlxuICAgICAgICAgICAgICAgIEVkaXRcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8QnV0dG9uIG10PVwiNFwiIG1zPVwiMlwiIGNvbG9yU2NoZW1lPVwicmVkXCIgb25DbGljaz17KCkgPT4ge29uRGVsZXRlSGFuZGxlcihwb3N0KX19PlxuICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICA8ZGl2Pntwb3N0LmJvZHl9PC9kaXY+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICkpfVxuICAgICAgPC9TaW1wbGVHcmlkPlxuICAgIDwvQm94PlxuICApXG59XG4iXSwibmFtZXMiOlsiSGVhZGluZyIsIlNpbXBsZUdyaWQiLCJCb3giLCJCdXR0b24iLCJGbGV4IiwiU3BhY2VyIiwiQWxlcnQiLCJBbGVydEljb24iLCJBbGVydERlc2NyaXB0aW9uIiwiQWxlcnRUaXRsZSIsInVzZVF1ZXJ5IiwiZ2V0QWxsUG9zdHMiLCJkZWxldGVQb3N0IiwiTGluayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSG9tZSIsImRhdGEiLCJwb3N0cyIsImlzTG9hZGluZyIsInNob3dBbGVydCIsInNldFNob3dBbGVydCIsImRlbGV0ZWRUaXRsZSIsInNldERlbGV0ZWRUaXRsZSIsInBvc3RzRGF0YSIsInNldFBvc3REYXRhIiwiZGl2IiwiY29uc29sZSIsImxvZyIsInNldFRpbWVvdXQiLCJvbkRlbGV0ZUhhbmRsZXIiLCJwb3N0IiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJvYmoiLCJpZCIsInNwbGljZSIsInRpdGxlIiwibSIsInN0YXR1cyIsImIiLCJtYiIsIm10IiwiY29sb3JTY2hlbWUiLCJ0ZXh0Q29sb3IiLCJocmVmIiwiY29sdW1ucyIsInNwYWNpbmciLCJtYXAiLCJib3JkZXJXaWR0aCIsImJvcmRlclJhZGl1cyIsIm92ZXJmbG93IiwicCIsInNpemUiLCJtcyIsIm9uQ2xpY2siLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});