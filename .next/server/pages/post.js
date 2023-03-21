"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/post";
exports.ids = ["pages/post"];
exports.modules = {

/***/ "./pages/api/posts.js":
/*!****************************!*\
  !*** ./pages/api/posts.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createPost\": () => (/* binding */ createPost),\n/* harmony export */   \"deletePost\": () => (/* binding */ deletePost),\n/* harmony export */   \"getAllPosts\": () => (/* binding */ getAllPosts),\n/* harmony export */   \"getPost\": () => (/* binding */ getPost),\n/* harmony export */   \"updatePost\": () => (/* binding */ updatePost)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nfunction backHome() {\n    history.back();\n}\nfunction getAllPosts() {\n    return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"https://jsonplaceholder.typicode.com/posts\").then((res)=>res.data);\n}\nfunction getPost(postId) {\n    console.log(\"postId: \", postId.queryKey[0]);\n    const id = postId.queryKey[0];\n    return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res)=>res.data);\n}\nfunction createPost(postData) {\n    return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"https://jsonplaceholder.typicode.com/posts\", postData).then((res)=>{\n        console.log(res.data);\n        backHome();\n    });\n}\nfunction updatePost({ id , ...postData }) {\n    return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].patch(`https://jsonplaceholder.typicode.com/posts/${id}`, postData).then((res)=>{\n        console.log(res.data);\n        backHome();\n    });\n}\nfunction deletePost(postId) {\n    return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"][\"delete\"](`https://jsonplaceholder.typicode.com/posts/${postId}`).then((res)=>console.log(res.data));\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcG9zdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXlCO0FBRXpCLFNBQVNDLFdBQVc7SUFBQ0MsUUFBUUMsSUFBSTtBQUFFO0FBRTVCLFNBQVNDLGNBQWM7SUFDNUIsT0FBT0osaURBQVMsQ0FBQyw4Q0FBOENNLElBQUksQ0FBQ0MsQ0FBQUEsTUFBT0EsSUFBSUMsSUFBSTtBQUNyRixDQUFDO0FBRU0sU0FBU0MsUUFBUUMsTUFBTSxFQUFFO0lBQzlCQyxRQUFRQyxHQUFHLENBQUMsWUFBWUYsT0FBT0csUUFBUSxDQUFDLEVBQUU7SUFDMUMsTUFBTUMsS0FBS0osT0FBT0csUUFBUSxDQUFDLEVBQUU7SUFDN0IsT0FBT2IsaURBQ0QsQ0FBQyxDQUFDLDJDQUEyQyxFQUFFYyxHQUFHLENBQUMsRUFDdERSLElBQUksQ0FBQ0MsQ0FBQUEsTUFBT0EsSUFBSUMsSUFBSTtBQUN6QixDQUFDO0FBRU0sU0FBU08sV0FBV0MsUUFBUSxFQUFFO0lBQ25DLE9BQU9oQixrREFBVSxDQUFDLDhDQUE4Q2dCLFVBQVVWLElBQUksQ0FBQ0MsQ0FBQUEsTUFBTztRQUNwRkksUUFBUUMsR0FBRyxDQUFDTCxJQUFJQyxJQUFJO1FBQ3BCUDtJQUNGO0FBQ0YsQ0FBQztBQUVNLFNBQVNpQixXQUFXLEVBQUVKLEdBQUUsRUFBRSxHQUFHRSxVQUFVLEVBQUU7SUFDOUMsT0FBT2hCLG1EQUFXLENBQUMsQ0FBQywyQ0FBMkMsRUFBRWMsR0FBRyxDQUFDLEVBQUVFLFVBQVVWLElBQUksQ0FBQ0MsQ0FBQUEsTUFBTztRQUMzRkksUUFBUUMsR0FBRyxDQUFDTCxJQUFJQyxJQUFJO1FBQ3BCUDtJQUNGO0FBQ0YsQ0FBQztBQUVNLFNBQVNtQixXQUFXVixNQUFNLEVBQUU7SUFDakMsT0FBT1YsdURBQVksQ0FBQyxDQUFDLDJDQUEyQyxFQUFFVSxPQUFPLENBQUMsRUFBRUosSUFBSSxDQUFDQyxDQUFBQSxNQUFPSSxRQUFRQyxHQUFHLENBQUNMLElBQUlDLElBQUk7QUFDOUcsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jaGFsbGFuZ2UvLi9wYWdlcy9hcGkvcG9zdHMuanM/NjlmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmZ1bmN0aW9uIGJhY2tIb21lKCkge2hpc3RvcnkuYmFjaygpfVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsUG9zdHMoKSB7XG4gIHJldHVybiBheGlvcy5nZXQoJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cycpLnRoZW4ocmVzID0+IHJlcy5kYXRhKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9zdChwb3N0SWQpIHtcbiAgY29uc29sZS5sb2coXCJwb3N0SWQ6IFwiLCBwb3N0SWQucXVlcnlLZXlbMF0pO1xuICBjb25zdCBpZCA9IHBvc3RJZC5xdWVyeUtleVswXTtcbiAgcmV0dXJuIGF4aW9zXG4gICAgLmdldChgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLyR7aWR9YClcbiAgICAudGhlbihyZXMgPT4gcmVzLmRhdGEpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQb3N0KHBvc3REYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMnLCBwb3N0RGF0YSkudGhlbihyZXMgPT4ge1xuICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKVxuICAgIGJhY2tIb21lKClcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVBvc3QoeyBpZCwgLi4ucG9zdERhdGEgfSkge1xuICByZXR1cm4gYXhpb3MucGF0Y2goYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy8ke2lkfWAsIHBvc3REYXRhKS50aGVuKHJlcyA9PiB7XG4gICAgY29uc29sZS5sb2cocmVzLmRhdGEpXG4gICAgYmFja0hvbWUoKVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlUG9zdChwb3N0SWQpIHtcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLyR7cG9zdElkfWApLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKHJlcy5kYXRhKSlcbn0iXSwibmFtZXMiOlsiYXhpb3MiLCJiYWNrSG9tZSIsImhpc3RvcnkiLCJiYWNrIiwiZ2V0QWxsUG9zdHMiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImdldFBvc3QiLCJwb3N0SWQiLCJjb25zb2xlIiwibG9nIiwicXVlcnlLZXkiLCJpZCIsImNyZWF0ZVBvc3QiLCJwb3N0RGF0YSIsInBvc3QiLCJ1cGRhdGVQb3N0IiwicGF0Y2giLCJkZWxldGVQb3N0IiwiZGVsZXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/posts.js\n");

/***/ }),

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Post),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_posts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/posts */ \"./pages/api/posts.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _api_posts__WEBPACK_IMPORTED_MODULE_3__]);\n([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _api_posts__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nfunction Post({ postId  }) {\n    const { data: post , isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)([\n        postId\n    ], _api_posts__WEBPACK_IMPORTED_MODULE_3__.getPost);\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/post.js\",\n            lineNumber: 9,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        m: \"40px\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {\n                mb: \"4\",\n                children: post.title\n            }, void 0, false, {\n                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/post.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: post.body\n            }, void 0, false, {\n                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/post.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                mt: \"4\",\n                type: \"submit\",\n                onClick: ()=>history.back(),\n                children: \"Back\"\n            }, void 0, false, {\n                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/post.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/post.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\nasync function getServerSideProps({ query  }) {\n    return {\n        props: {\n            postId: query.id\n        }\n    };\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF1RDtBQUNqQjtBQUNEO0FBRXRCLFNBQVNLLEtBQUssRUFBRUMsT0FBTSxFQUFFLEVBQUU7SUFDdkMsTUFBTSxFQUFFQyxNQUFNQyxLQUFJLEVBQUVDLFVBQVMsRUFBRSxHQUFHTixxREFBUUEsQ0FBQztRQUFDRztLQUFPLEVBQUVGLCtDQUFPQTtJQUU1RCxJQUFJSyxXQUFXO1FBQ2IscUJBQU8sOERBQUNDO3NCQUFJOzs7Ozs7SUFDZCxDQUFDO0lBRUQscUJBQ0UsOERBQUNULGlEQUFHQTtRQUFDVSxHQUFFOzswQkFDTCw4REFBQ1gscURBQU9BO2dCQUFDWSxJQUFHOzBCQUNUSixLQUFLSyxLQUFLOzs7Ozs7MEJBRWIsOERBQUNIOzBCQUFLRixLQUFLTSxJQUFJOzs7Ozs7MEJBRWYsOERBQUNaLG9EQUFNQTtnQkFBQ2EsSUFBRztnQkFBSUMsTUFBSztnQkFBU0MsU0FBUyxJQUFNQyxRQUFRQyxJQUFJOzBCQUFJOzs7Ozs7Ozs7Ozs7QUFLbEUsQ0FBQztBQUVNLGVBQWVDLG1CQUFtQixFQUFFQyxNQUFLLEVBQUUsRUFBRTtJQUNsRCxPQUFPO1FBQ0xDLE9BQU87WUFDTGhCLFFBQVFlLE1BQU1FLEVBQUU7UUFDbEI7SUFDRjtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY2hhbGxhbmdlLy4vcGFnZXMvcG9zdC5qcz8yNTY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlYWRpbmcsIEJveCwgQnV0dG9uIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAncmVhY3QtcXVlcnknXG5pbXBvcnQgeyBnZXRQb3N0IH0gZnJvbSAnLi9hcGkvcG9zdHMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QoeyBwb3N0SWQgfSkge1xuICBjb25zdCB7IGRhdGE6IHBvc3QsIGlzTG9hZGluZyB9ID0gdXNlUXVlcnkoW3Bvc3RJZF0sIGdldFBvc3QpXG5cbiAgaWYgKGlzTG9hZGluZykge1xuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEJveCBtPVwiNDBweFwiPlxuICAgICAgPEhlYWRpbmcgbWI9XCI0XCI+XG4gICAgICAgIHtwb3N0LnRpdGxlfVxuICAgICAgPC9IZWFkaW5nPlxuICAgICAgPGRpdj57cG9zdC5ib2R5fTwvZGl2PlxuXG4gICAgICA8QnV0dG9uIG10PVwiNFwiIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXsoKSA9PiBoaXN0b3J5LmJhY2soKX0+XG4gICAgICAgICAgQmFja1xuICAgICAgPC9CdXR0b24+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHF1ZXJ5IH0pIHtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdElkOiBxdWVyeS5pZCxcbiAgICB9LFxuICB9XG59Il0sIm5hbWVzIjpbIkhlYWRpbmciLCJCb3giLCJCdXR0b24iLCJ1c2VRdWVyeSIsImdldFBvc3QiLCJQb3N0IiwicG9zdElkIiwiZGF0YSIsInBvc3QiLCJpc0xvYWRpbmciLCJkaXYiLCJtIiwibWIiLCJ0aXRsZSIsImJvZHkiLCJtdCIsInR5cGUiLCJvbkNsaWNrIiwiaGlzdG9yeSIsImJhY2siLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJxdWVyeSIsInByb3BzIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/post.js\n");

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("@chakra-ui/react");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/post.js"));
module.exports = __webpack_exports__;

})();