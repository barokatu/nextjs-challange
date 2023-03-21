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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _api_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/posts */ \"./pages/api/posts.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const { data: posts , isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)(\"posts\", _api_posts__WEBPACK_IMPORTED_MODULE_2__.getAllPosts);\n    const [showAlert, setShowAlert] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [deletedTitle, setDeletedTitle] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [postsData, setPostData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n            lineNumber: 14,\n            columnNumber: 12\n        }, this);\n    }\n    console.log(\"posts: \" + JSON.stringify(posts));\n    if (showAlert === true) {\n        setTimeout(()=>{\n            setShowAlert(false);\n        }, 3000);\n    }\n    const onDeleteHandler = (post)=>{\n        (0,_api_posts__WEBPACK_IMPORTED_MODULE_2__.deletePost)(post.id);\n        setDeletedTitle(post.title);\n        setShowAlert(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        m: \"20px\",\n        children: [\n            showAlert && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Alert, {\n                status: \"success\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.AlertIcon, {}, void 0, false, {\n                        fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.AlertTitle, {\n                        children: \"Deleted!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.AlertDescription, {\n                        children: [\n                            \"Your Post with title \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                children: deletedTitle\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                lineNumber: 36,\n                                columnNumber: 48\n                            }, this),\n                            \", has been deleted.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                lineNumber: 33,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                mb: \"4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                            mt: \"4\",\n                            colorScheme: \"white\",\n                            textColor: \"black\",\n                            children: \"NextJS Challange\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                            lineNumber: 40,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Spacer, {}, void 0, false, {\n                            fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/create-post\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                    mt: \"4\",\n                                    colorScheme: \"blue\",\n                                    children: \"Create Post\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.SimpleGrid, {\n                columns: 2,\n                spacing: 4,\n                children: posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                        borderWidth: \"1px\",\n                        borderRadius: \"lg\",\n                        overflow: \"hidden\",\n                        p: \"4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                                size: \"md\",\n                                mb: \"2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                    children: [\n                                        post.title,\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Spacer, {}, void 0, false, {\n                                            fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                            lineNumber: 66,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            href: \"/edit-post?id=\".concat(post.id),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                                mt: \"4\",\n                                                ms: \"2\",\n                                                colorScheme: \"blue\",\n                                                children: \"Edit\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                                lineNumber: 68,\n                                                columnNumber: 15\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                            lineNumber: 67,\n                                            columnNumber: 14\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                            mt: \"4\",\n                                            ms: \"2\",\n                                            colorScheme: \"red\",\n                                            onClick: ()=>{\n                                                onDeleteHandler(post);\n                                            },\n                                            children: \"Delete\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                            lineNumber: 72,\n                                            columnNumber: 13\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: post.body\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, post.id, true, {\n                        fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"j2nGwB1HR6XJpd/MkxE9frvlOeI=\", false, function() {\n    return [\n        react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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P2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVhZGluZywgU2ltcGxlR3JpZCwgQm94LCBCdXR0b24sIEZsZXgsIFNwYWNlciwgQWxlcnQsIEFsZXJ0SWNvbiwgQWxlcnREZXNjcmlwdGlvbiwgQWxlcnRUaXRsZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ3JlYWN0LXF1ZXJ5J1xuaW1wb3J0IHsgZ2V0QWxsUG9zdHMsIGRlbGV0ZVBvc3QgfSBmcm9tICcuL2FwaS9wb3N0cydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgeyBkYXRhOiBwb3N0cywgaXNMb2FkaW5nIH0gPSB1c2VRdWVyeSgncG9zdHMnLCBnZXRBbGxQb3N0cylcbiAgY29uc3QgW3Nob3dBbGVydCwgc2V0U2hvd0FsZXJ0XSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbZGVsZXRlZFRpdGxlLCBzZXREZWxldGVkVGl0bGVdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtwb3N0c0RhdGEsIHNldFBvc3REYXRhXSA9IHVzZVN0YXRlKFtdKVxuXG4gIGlmIChpc0xvYWRpbmcpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gIH1cblxuICBjb25zb2xlLmxvZyhcInBvc3RzOiBcIisgSlNPTi5zdHJpbmdpZnkocG9zdHMpKVxuXG4gIGlmKHNob3dBbGVydCA9PT0gdHJ1ZSkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0U2hvd0FsZXJ0KGZhbHNlKVxuICAgIH0sIDMwMDApO1xuICB9XG5cbiAgY29uc3Qgb25EZWxldGVIYW5kbGVyID0gKHBvc3QpID0+IHtcbiAgICBkZWxldGVQb3N0KHBvc3QuaWQpXG4gICAgc2V0RGVsZXRlZFRpdGxlKHBvc3QudGl0bGUpXG4gICAgc2V0U2hvd0FsZXJ0KHRydWUpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCb3ggbT1cIjIwcHhcIj5cbiAgICAgIHtzaG93QWxlcnQgJiYgPEFsZXJ0IHN0YXR1cz0nc3VjY2Vzcyc+XG4gICAgICAgIDxBbGVydEljb24gLz5cbiAgICAgICAgPEFsZXJ0VGl0bGU+RGVsZXRlZCE8L0FsZXJ0VGl0bGU+XG4gICAgICAgIDxBbGVydERlc2NyaXB0aW9uPllvdXIgUG9zdCB3aXRoIHRpdGxlIDxiPntkZWxldGVkVGl0bGV9PC9iPiwgaGFzIGJlZW4gZGVsZXRlZC48L0FsZXJ0RGVzY3JpcHRpb24+XG4gICAgICA8L0FsZXJ0Pn1cbiAgICAgIDxIZWFkaW5nIG1iPVwiNFwiPlxuICAgICAgICA8RmxleD5cbiAgICAgICAgICAgIDxCdXR0b24gbXQ9XCI0XCIgY29sb3JTY2hlbWU9XCJ3aGl0ZVwiIHRleHRDb2xvcj17XCJibGFja1wifT5cbiAgICAgICAgICAgICAgTmV4dEpTIENoYWxsYW5nZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPFNwYWNlciAvPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9jcmVhdGUtcG9zdFwiPlxuICAgICAgICAgICAgPEJ1dHRvbiBtdD1cIjRcIiBjb2xvclNjaGVtZT1cImJsdWVcIj5cbiAgICAgICAgICAgICAgQ3JlYXRlIFBvc3RcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgPC9IZWFkaW5nPlxuICAgICAgXG4gICAgICA8U2ltcGxlR3JpZCBjb2x1bW5zPXsyfSBzcGFjaW5nPXs0fT5cbiAgICAgICAge3Bvc3RzLm1hcChwb3N0ID0+IChcbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBrZXk9e3Bvc3QuaWR9XG4gICAgICAgICAgICBib3JkZXJXaWR0aD1cIjFweFwiXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM9XCJsZ1wiXG4gICAgICAgICAgICBvdmVyZmxvdz1cImhpZGRlblwiXG4gICAgICAgICAgICBwPVwiNFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEhlYWRpbmcgc2l6ZT1cIm1kXCIgbWI9XCIyXCI+XG4gICAgICAgICAgICA8RmxleD5cbiAgICAgICAgICAgIHtwb3N0LnRpdGxlfVxuICAgICAgICAgICAgPFNwYWNlciAvPlxuICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZWRpdC1wb3N0P2lkPSR7cG9zdC5pZH1gfT5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBtdD1cIjRcIiBtcz1cIjJcIiBjb2xvclNjaGVtZT1cImJsdWVcIj5cbiAgICAgICAgICAgICAgICBFZGl0XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPEJ1dHRvbiBtdD1cIjRcIiBtcz1cIjJcIiBjb2xvclNjaGVtZT1cInJlZFwiIG9uQ2xpY2s9eygpID0+IHtvbkRlbGV0ZUhhbmRsZXIocG9zdCl9fT5cbiAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgPGRpdj57cG9zdC5ib2R5fTwvZGl2PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApKX1cbiAgICAgIDwvU2ltcGxlR3JpZD5cbiAgICA8L0JveD5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkhlYWRpbmciLCJTaW1wbGVHcmlkIiwiQm94IiwiQnV0dG9uIiwiRmxleCIsIlNwYWNlciIsIkFsZXJ0IiwiQWxlcnRJY29uIiwiQWxlcnREZXNjcmlwdGlvbiIsIkFsZXJ0VGl0bGUiLCJ1c2VRdWVyeSIsImdldEFsbFBvc3RzIiwiZGVsZXRlUG9zdCIsIkxpbmsiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJkYXRhIiwicG9zdHMiLCJpc0xvYWRpbmciLCJzaG93QWxlcnQiLCJzZXRTaG93QWxlcnQiLCJkZWxldGVkVGl0bGUiLCJzZXREZWxldGVkVGl0bGUiLCJwb3N0c0RhdGEiLCJzZXRQb3N0RGF0YSIsImRpdiIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5Iiwic2V0VGltZW91dCIsIm9uRGVsZXRlSGFuZGxlciIsInBvc3QiLCJpZCIsInRpdGxlIiwibSIsInN0YXR1cyIsImIiLCJtYiIsIm10IiwiY29sb3JTY2hlbWUiLCJ0ZXh0Q29sb3IiLCJocmVmIiwiY29sdW1ucyIsInNwYWNpbmciLCJtYXAiLCJib3JkZXJXaWR0aCIsImJvcmRlclJhZGl1cyIsIm92ZXJmbG93IiwicCIsInNpemUiLCJtcyIsIm9uQ2xpY2siLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});