self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/store/context.jsx":
/*!*********************************!*\
  !*** ./pages/store/context.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);

var initialState = {
  IsLogin: false,
  board: {
    type: 'ALL',
    page: '1',
    searchType: null,
    searchValue: null,
    list: []
  },
  join: {
    userid: null,
    nickname: null,
    homtowm: null,
    residence: null,
    gender: null,
    age: null,
    show: '00000'
  }
};
var Store = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(initialState); //store도 컴포넌트

/* harmony default export */ __webpack_exports__["default"] = (Store);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RvcmUvY29udGV4dC5qc3giXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiSXNMb2dpbiIsImJvYXJkIiwidHlwZSIsInBhZ2UiLCJzZWFyY2hUeXBlIiwic2VhcmNoVmFsdWUiLCJsaXN0Iiwiam9pbiIsInVzZXJpZCIsIm5pY2tuYW1lIiwiaG9tdG93bSIsInJlc2lkZW5jZSIsImdlbmRlciIsImFnZSIsInNob3ciLCJTdG9yZSIsImNyZWF0ZUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLFlBQVksR0FBRztBQUMxQkMsU0FBTyxFQUFFLEtBRGlCO0FBRTFCQyxPQUFLLEVBQUM7QUFDSkMsUUFBSSxFQUFDLEtBREQ7QUFFSkMsUUFBSSxFQUFDLEdBRkQ7QUFHSkMsY0FBVSxFQUFDLElBSFA7QUFJSkMsZUFBVyxFQUFDLElBSlI7QUFLSkMsUUFBSSxFQUFDO0FBTEQsR0FGb0I7QUFTMUJDLE1BQUksRUFBQztBQUNIQyxVQUFNLEVBQUMsSUFESjtBQUVMQyxZQUFRLEVBQUMsSUFGSjtBQUdMQyxXQUFPLEVBQUMsSUFISDtBQUlMQyxhQUFTLEVBQUMsSUFKTDtBQUtMQyxVQUFNLEVBQUMsSUFMRjtBQU1MQyxPQUFHLEVBQUMsSUFOQztBQU9MQyxRQUFJLEVBQUM7QUFQQTtBQVRxQixDQUFyQjtBQW9CUCxJQUFNQyxLQUFLLGdCQUFHQyxvREFBYSxDQUFDakIsWUFBRCxDQUEzQixDLENBQTJDOztBQUUzQywrREFBZWdCLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lZGU3MzQ0NzcyMGQwMmU2ZWY1NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBJc0xvZ2luOiBmYWxzZSxcclxuICBib2FyZDp7XHJcbiAgICB0eXBlOidBTEwnLFxyXG4gICAgcGFnZTonMScsXHJcbiAgICBzZWFyY2hUeXBlOm51bGwsXHJcbiAgICBzZWFyY2hWYWx1ZTpudWxsLFxyXG4gICAgbGlzdDpbXSwgXHJcbiAgfSxcclxuICBqb2luOntcclxuICAgIHVzZXJpZDpudWxsLFxyXG4gIG5pY2tuYW1lOm51bGwsXHJcbiAgaG9tdG93bTpudWxsLFxyXG4gIHJlc2lkZW5jZTpudWxsLFxyXG4gIGdlbmRlcjpudWxsLFxyXG4gIGFnZTpudWxsLFxyXG4gIHNob3c6JzAwMDAwJ1xyXG4gIH1cclxuXHJcbn07XHJcbmNvbnN0IFN0b3JlID0gY3JlYXRlQ29udGV4dChpbml0aWFsU3RhdGUpOyAvL3N0b3Jl64+EIOy7tO2PrOuEjO2KuFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvcmU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=