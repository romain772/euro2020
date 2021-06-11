(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Header */ "./assets/components/Header.js");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Home */ "./assets/components/Home.js");
/* harmony import */ var _components_Matches__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Matches */ "./assets/components/Matches.js");
/* harmony import */ var _components_signup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/signup */ "./assets/components/signup.js");
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Login */ "./assets/components/Login.js");
/* harmony import */ var _components_Account__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Account */ "./assets/components/Account.js");
/* harmony import */ var _components_Access__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Access */ "./assets/components/Access.js");
/* harmony import */ var _components_Ranking__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Ranking */ "./assets/components/Ranking.js");
/* harmony import */ var _components_passupdate_userConfirm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/passupdate/userConfirm */ "./assets/components/passupdate/userConfirm.js");













react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_3__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
  path: "/home",
  component: _components_Home__WEBPACK_IMPORTED_MODULE_4__.default
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
  path: "/matches",
  component: _components_Matches__WEBPACK_IMPORTED_MODULE_5__.default
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
  path: "/matches/:id",
  component: _components_Matches__WEBPACK_IMPORTED_MODULE_5__.default
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
  path: "/signup",
  component: _components_signup__WEBPACK_IMPORTED_MODULE_6__.default
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
  path: "/login",
  component: _components_Login__WEBPACK_IMPORTED_MODULE_7__.default
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
  path: "/newpassword/",
  component: _components_passupdate_userConfirm__WEBPACK_IMPORTED_MODULE_11__.default
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
  path: "/ranking",
  component: _components_Ranking__WEBPACK_IMPORTED_MODULE_10__.default
}), localStorage.getItem('connected') === 'true' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
  path: "/account",
  component: _components_Account__WEBPACK_IMPORTED_MODULE_8__.default
}) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Redirect, {
  to: "/home"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
  path: "/",
  exact: true
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Redirect, {
  to: "/home"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Redirect, {
  to: "/home"
})))), document.getElementById('root'));

/***/ }),

/***/ "./assets/components/Access.js":
/*!*************************************!*\
  !*** ./assets/components/Access.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _common_form__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./common/form */ "./assets/components/common/form.js");
/* harmony import */ var joi_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! joi-browser */ "./node_modules/joi-browser/dist/joi-browser.js");
/* harmony import */ var joi_browser__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(joi_browser__WEBPACK_IMPORTED_MODULE_15__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Access = /*#__PURE__*/function (_Form) {
  _inherits(Access, _Form);

  var _super = _createSuper(Access);

  function Access() {
    var _this;

    _classCallCheck(this, Access);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      data: {
        pass: ""
      },
      errors: {}
    });

    _defineProperty(_assertThisInitialized(_this), "schema", {
      pass: joi_browser__WEBPACK_IMPORTED_MODULE_15___default().string().required().min(11).max(13)
    });

    return _this;
  }

  _createClass(Access, [{
    key: "doSubmit",
    value: function doSubmit() {
      var correctPass = 'pass12345678';
      var pass = this.state.data.pass;

      if (pass == correctPass) {
        sessionStorage.setItem('access', 'ok');
        document.location.href = "/home";
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("form", {
        className: "access",
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("h1", {
        className: "title"
      }, "Page en construction"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("img", {
        src: "images/working.gif"
      }), this.renderInput('pass', 'Code d\'accès :', 'text', 'input'), this.renderButton('Valider', 'button is-success'));
    }
  }]);

  return Access;
}(_common_form__WEBPACK_IMPORTED_MODULE_14__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Access);

/***/ }),

/***/ "./assets/components/Account.js":
/*!**************************************!*\
  !*** ./assets/components/Account.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _common_Loader__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./common/Loader */ "./assets/components/common/Loader.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-tooltip */ "./node_modules/react-tooltip/dist/index.es.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }






















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Account = /*#__PURE__*/function (_Component) {
  _inherits(Account, _Component);

  var _super = _createSuper(Account);

  function Account() {
    var _this;

    _classCallCheck(this, Account);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      loading: true,
      id: localStorage.getItem('id'),
      username: "",
      bets: [],
      matches: []
    });

    return _this;
  }

  _createClass(Account, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getUserById();
      this.getMatches();
    }
  }, {
    key: "getMatches",
    value: function getMatches() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_21___default().get("https://portfolio-72147-default-rtdb.europe-west1.firebasedatabase.app/matches.json").then(function (res) {
        _this2.setState({
          matches: res.data
        });
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }, {
    key: "getUserById",
    value: function getUserById() {
      var _this3 = this;

      var id = Number(this.state.id);
      var data = {
        id: id
      };
      axios__WEBPACK_IMPORTED_MODULE_21___default()({
        method: 'POST',
        url: 'api/user/getUserById',
        data: data,
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(function (res) {
        _this3.setState({
          username: res.data
        });
      });
      axios__WEBPACK_IMPORTED_MODULE_21___default()({
        method: 'POST',
        url: 'api/getbetsByUser',
        data: data,
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(function (res) {
        _this3.setState({
          bets: res.data,
          loading: false
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          username = _this$state.username,
          loading = _this$state.loading,
          bets = _this$state.bets,
          matches = _this$state.matches;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement(react__WEBPACK_IMPORTED_MODULE_20__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("h2", {
        className: "title is-2"
      }, "Mon Compte"), loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement(_common_Loader__WEBPACK_IMPORTED_MODULE_22__.default, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", {
        className: "account"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("p", null, "Mon espace"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("em", {
        className: "username"
      }, username.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("h6", {
        className: "title is-6"
      }, "Mes pronos :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("table", {
        className: "table"
      }, bets.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement(react__WEBPACK_IMPORTED_MODULE_20__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("th", null, "Date du prono"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("th", null, "Statut du prono"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("th", null, "Match"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("th", null, "Mon pronostic"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("th", null, "R\xE9sultat du match"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("tbody", null, bets.map(function (bet) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("tr", {
          key: bet.match_id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("td", null, bet.bet_date.date.slice(0, 10).split('-').reverse().join('/')), matches.map(function (match) {
          if (match._id == bet.match_id && match.homescore && match.awayscore !== "") {
            if (bet.homescore > bet.awayscore) {
              if (match.homescore > match.awayscore && match.homescore == bet.homescore && match.awayscore == bet.awayscore) {
                return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("td", {
                  key: match._id
                }, "Pari Gagn\xE9 ! 3 points!");
              }

              if (match.homescore > match.awayscore) {
                return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("td", {
                  key: match._id
                }, "Pari Gagn\xE9 ! 2 points!");
              } else {
                return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("td", {
                  key: match._id
                }, "Pari perdu");
              }
            }

            if (bet.homescore < bet.awayscore) {
              if (match.homescore < match.awayscore && match.homescore == bet.homescore && match.awayscore == bet.awayscore) {
                return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("td", {
                  key: match._id
                }, "Pari Gagn\xE9 ! 3 points!");
              }

              if (match.homescore < match.awayscore) {
                return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("td", {
                  key: match._id
                }, "Pari Gagn\xE9 ! 2 points!");
              } else {
                return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("td", {
                  key: match._id
                }, "Pari perdu");
              }
            }

            if (bet.homescore === bet.awayscore) {
              if (match.homescore === match.awayscore && match.homescore == bet.homescore && match.awayscore == bet.awayscore) {
                return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("td", {
                  key: match._id
                }, "Pari Gagn\xE9 ! 3 points!");
              }

              if (match.homescore === match.awayscore) {
                return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("td", {
                  key: match._id
                }, "Pari Gagn\xE9 ! 2 points!");
              } else {
                return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("td", {
                  key: match._id
                }, "Pari perdu");
              }
            }
          } else if (match._id == bet.match_id && match.homescore === "") {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("td", {
              key: match._id
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_24__.Link, {
              "data-tip": "Voir ou modifier le pronostic",
              to: "/matches?match=".concat(bet.match_id)
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement(react_tooltip__WEBPACK_IMPORTED_MODULE_23__.default, {
              type: "light",
              border: true,
              borderColor: "#3384A8",
              textColor: "#3384A8",
              arrowColor: "#3384A8"
            }), "En cours"));
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("img", {
          src: "/images/".concat(bet.hometeam, ".svg"),
          width: "25px",
          className: "homeimage"
        }), bet.hometeam, " - ", bet.awayteam, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("img", {
          src: "/images/".concat(bet.awayteam, ".svg"),
          width: "25px",
          className: "awayimage"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("td", null, bet.homescore, " - ", bet.awayscore), matches.map(function (match) {
          if (match.homescore && match._id === bet.match_id) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("td", {
              key: match._id
            }, match.homescore, " - ", match.awayscore);
          }

          if (match.homescore === '' && match._id === bet.match_id) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("td", {
              key: match._id
            }, "Match \xE0 venir");
          }
        }));
      }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("p", null, "Vous n'avez pas encore plac\xE9 de pronostics."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("p", null, "Revenez vers les", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_24__.Link, {
        to: "/matches"
      }, " matches "), "pour commencer \xE0 pronostiquer.")))));
    }
  }]);

  return Account;
}(react__WEBPACK_IMPORTED_MODULE_20__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Account);

/***/ }),

/***/ "./assets/components/Bets.js":
/*!***********************************!*\
  !*** ./assets/components/Bets.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _common_Loader__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./common/Loader */ "./assets/components/common/Loader.js");
/* harmony import */ var joi_browser__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! joi-browser */ "./node_modules/joi-browser/dist/joi-browser.js");
/* harmony import */ var joi_browser__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(joi_browser__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! react-tooltip */ "./node_modules/react-tooltip/dist/index.es.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

































function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var Bets = /*#__PURE__*/function (_Component) {
  _inherits(Bets, _Component);

  var _super = _createSuper(Bets);

  function Bets() {
    var _this;

    _classCallCheck(this, Bets);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      hidden: true,
      data: {
        homeresult: " ",
        awayresult: " "
      },
      errors: {},
      betstatus: false,
      toast: false,
      loading: true,
      connected: localStorage.getItem('connected'),
      validationdate: true
    });

    _defineProperty(_assertThisInitialized(_this), "source", axios__WEBPACK_IMPORTED_MODULE_34___default().CancelToken.source());

    _defineProperty(_assertThisInitialized(_this), "schema", {
      homeresult: joi_browser__WEBPACK_IMPORTED_MODULE_33___default().number().required(),
      awayresult: joi_browser__WEBPACK_IMPORTED_MODULE_33___default().number().required()
    });

    _defineProperty(_assertThisInitialized(_this), "validate", function () {
      var options = {
        abortEarly: false
      };

      var _Joi$validate = joi_browser__WEBPACK_IMPORTED_MODULE_33___default().validate(_this.state.data, _this.schema, options),
          error = _Joi$validate.error;

      if (!error) return null;
      var errors = {};

      var _iterator = _createForOfIteratorHelper(error.details),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          errors[item.path[0]] = item.message;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return errors;
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (_ref) {
      var input = _ref.currentTarget;

      var data = _objectSpread({}, _this.state.data);

      data[input.name] = input.value;

      _this.setState({
        data: data
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      _this.setState({
        hidden: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (e) {
      e.preventDefault();

      var errors = _this.validate();

      _this.setState({
        errors: errors || {}
      });

      if (errors) return;

      _this.doSubmit();
    });

    _defineProperty(_assertThisInitialized(_this), "doSubmit", function () {
      var data = {
        homescore: _this.state.data.homeresult,
        awayscore: _this.state.data.awayresult,
        matchid: _this.props.match._id,
        betid: (0,uuid__WEBPACK_IMPORTED_MODULE_36__.default)(),
        hometeam: _this.props.match.hometeam,
        awayteam: _this.props.match.awayteam
      };

      if (_this.state.betstatus === false) {
        axios__WEBPACK_IMPORTED_MODULE_34___default()({
          method: 'POST',
          url: 'api/postbets',
          data: data,
          headers: {
            'X-Requested-With': 'XMLHttpRequest'
          }
        }).then(function (res) {
          if (res.status === 200) {
            _this.setState({
              hidden: true,
              data: {
                homeresult: "",
                awayresult: ""
              },
              betstatus: true,
              toast: true
            });

            react_toastify__WEBPACK_IMPORTED_MODULE_37__.toast.success('Pronostic validé!', {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              closeButton: false
            });
            setTimeout(function () {
              document.location.href = "/matches";
            }, 3200);
          }

          ;
        })["catch"](function (err) {
          react_toastify__WEBPACK_IMPORTED_MODULE_37__.toast.error('Veuillez réessayer', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            closeButton: false
          });
          setTimeout(function () {
            _this.setState({
              toast: false
            });
          }, 6000);
        });
      } else {
        axios__WEBPACK_IMPORTED_MODULE_34___default()({
          method: 'POST',
          url: 'api/updatebets',
          data: data,
          headers: {
            'X-Requested-With': 'XMLHttpRequest'
          }
        }).then(function (res) {
          if (res.status === 200) {
            _this.setState({
              hidden: true,
              data: {
                homeresult: "",
                awayresult: ""
              },
              betstatus: true,
              toast: true
            });

            react_toastify__WEBPACK_IMPORTED_MODULE_37__.toast.success('Pronostic modifié!', {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              closeButton: false
            });
            setTimeout(function () {
              document.location.href = "/matches";
            }, 3200);
          }
        });
      }

      ;
    });

    return _this;
  }

  _createClass(Bets, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getBets();
      this.getValidationDate();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.source) {
        this.source.cancel();
      }
    }
  }, {
    key: "getValidationDate",
    value: function getValidationDate() {
      var matchdate = this.props.match.date.toLowerCase();
      var date = new Date();
      var options = {
        year: 'numeric',
        month: 'long',
        day: "numeric"
      };
      var newdate = date.toLocaleDateString('fr-FR', options);
      var matchtime = Number(this.props.match.time.split('h').join(''));
      var time = date.getHours();

      if (matchdate === newdate && matchtime - time <= 1) {
        this.setState({
          validationdate: false
        });
      }
    }
  }, {
    key: "getBets",
    value: function getBets() {
      var _this2 = this;

      if (this.state.connected === 'true') {
        var data = {
          userid: Number(localStorage.getItem('id')),
          matchid: this.props.match._id
        };
        axios__WEBPACK_IMPORTED_MODULE_34___default()({
          method: 'POST',
          url: 'api/getbets',
          data: data,
          headers: {
            'X-Requested-With': 'XMLHttpRequest'
          },
          cancelToken: this.source.token
        }).then(function (res) {
          if (res.data.homescore) {
            _this2.setState({
              data: {
                homeresult: res.data.homescore,
                awayresult: res.data.awayscore
              },
              loading: false,
              betstatus: true
            });
          } else {
            _this2.setState({
              data: {
                homeresult: '',
                awayresult: ''
              },
              loading: false
            });
          }
        });
      } else {
        this.setState({
          loading: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          hidden = _this$state.hidden,
          data = _this$state.data,
          errors = _this$state.errors,
          inputerrors = _this$state.inputerrors,
          betstatus = _this$state.betstatus,
          toast = _this$state.toast,
          connected = _this$state.connected,
          loading = _this$state.loading,
          validationdate = _this$state.validationdate;
      var match = this.props.match;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31__.createElement("div", {
        className: "box"
      }, toast ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31__.createElement(react_toastify__WEBPACK_IMPORTED_MODULE_37__.ToastContainer, null) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31__.createElement("h3", null, match.date, " - ", match.time), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31__.createElement("h4", null, "Groupe ", match.group), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31__.createElement("p", null, match.location), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31__.createElement("pre", {
        className: "matchdetails"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31__.createElement("img", {
        className: "hometeamimg",
        src: "/images/".concat(match.hometeam, ".svg")
      }), match.hometeam, " ", match.homescore, " - ", match.awayscore, " ", match.awayteam, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31__.createElement("img", {
        className: "awayteamimg",
        src: "/images/".concat(match.awayteam, ".svg")
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31__.createElement("div", null, loading === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31__.createElement(_common_Loader__WEBPACK_IMPORTED_MODULE_32__.default, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31__.createElement(react__WEBPACK_IMPORTED_MODULE_31__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31__.createElement("button", {
        onClick: this.handleClick,
        className: hidden ? 'button betbutton is-primary' : 'hidden'
      }, betstatus ? 'Voir votre pronostic' : "Parier sur ce match")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31__.createElement("div", {
        className: hidden ? 'hidden' : 'betgames'
      }, connected === "true" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31__.createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31__.createElement("em", null, match.hometeam + " "), validationdate ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31__.createElement("input", {
        name: "homeresult",
        value: data.homeresult,
        onChange: this.handleChange,
        type: "text",
        className: "score homeresult",
        error: errors["homeresult"]
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31__.createElement("b", null, data.homeresult), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31__.createElement("b", null, " - "), validationdate ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31__.createElement("input", {
        name: "awayresult",
        value: data.awayresult,
        onChange: this.handleChange,
        type: "text",
        className: inputerrors ? 'inputerrors' : 'score'
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31__.createElement("b", null, " ", data.awayresult), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31__.createElement("em", null, " ", match.awayteam, " "), validationdate ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31__.createElement("button", {
        onClick: this.handleSubmit,
        disabled: this.validate(),
        type: "button",
        className: "button is-danger"
      }, "OK") : null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31__.createElement("p", null, "Vous devez \xEAtre connect\xE9 pour placer un pronostic."))));
    }
  }]);

  return Bets;
}(react__WEBPACK_IMPORTED_MODULE_31__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bets);

/***/ }),

/***/ "./assets/components/ComingMatches.js":
/*!********************************************!*\
  !*** ./assets/components/ComingMatches.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");




var ComingMatches = function ComingMatches(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "comingmatches"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", {
    className: "title is-3"
  }, "Prochains matches"), data.map(function (match) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "content",
      key: match._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("b", null, match.date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, match.hometeam, " - ", match.awayteam));
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComingMatches);

/***/ }),

/***/ "./assets/components/Filter.js":
/*!*************************************!*\
  !*** ./assets/components/Filter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");



var Filter = function Filter(_ref) {
  var items = _ref.items,
      onItemSelect = _ref.onItemSelect,
      selectedItem = _ref.selectedItem,
      label = _ref.label;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "dropdown-trigger"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    className: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "Filtrer par ", label.toLowerCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "icon is-small"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
    src: "/images/angledown.svg"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "dropdown-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "dropdown-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "dropdown-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    className: '' === selectedItem ? 'selection is-selected' : 'selection',
    onClick: function onClick() {
      return onItemSelect('All');
    }
  }, "Tous"), items.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
      key: item,
      className: item === selectedItem ? 'selection is-selected' : 'selection',
      onClick: function onClick() {
        return onItemSelect(item);
      }
    }, label !== 'Groupe ' ? item : label + item);
  })))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Filter);

/***/ }),

/***/ "./assets/components/Header.js":
/*!*************************************!*\
  !*** ./assets/components/Header.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_16__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Header = /*#__PURE__*/function (_Component) {
  _inherits(Header, _Component);

  var _super = _createSuper(Header);

  function Header() {
    var _this;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      connected: localStorage.getItem('connected'),
      mobilemenu: false,
      isActive: false
    });

    return _this;
  }

  _createClass(Header, [{
    key: "onLogout",
    value: function onLogout() {
      localStorage.setItem('connected', 'false');
      localStorage.removeItem('id');
      window.location.replace('/api/logout');
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          connected = _this$state.connected,
          isActive = _this$state.isActive;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement("header", {
        className: "header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement("nav", {
        className: "navbar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement("div", {
        className: "navbar-brand"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Link, {
        to: "/home"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement("img", {
        src: "/images/euro2020-logo.svg",
        width: "70"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement("button", {
        type: "button",
        onClick: function onClick() {
          _this2.setState({
            isActive: !isActive
          });
        },
        className: isActive ? "navbar-burger is-active" : "navbar-burger"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement("span", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement("span", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement("span", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement("div", {
        className: isActive ? "navbar-menu is-active" : "navbar-menu"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement("div", {
        className: "navbar-start"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement("div", {
        className: "navbar-item has-dropdown is-hoverable"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement("div", {
        className: "navbar-item"
      }, "Matches"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement("div", {
        className: "navbar-dropdown"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Link, {
        to: "/matches",
        className: "navbar-item"
      }, "Phase de Groupe"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Link, {
        to: "/ranking",
        className: "navbar-item"
      }, "Classement")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement("div", {
        className: "navbar-item"
      }, connected === 'true' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement("div", {
        className: "buttons"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Link, {
        to: "/account",
        className: "button is-primary"
      }, "Mon compte"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement("button", {
        onClick: this.onLogout,
        className: "button is-warning"
      }, "D\xE9connection")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement("div", {
        className: "buttons"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Link, {
        to: "/login",
        className: "button is-primary"
      }, "Connection"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Link, {
        to: "/signup",
        className: "button is-info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement("strong", null, "Cr\xE9er un compte")))))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_15__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./assets/components/Home.js":
/*!***********************************!*\
  !*** ./assets/components/Home.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _ComingMatches__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ComingMatches */ "./assets/components/ComingMatches.js");
/* harmony import */ var react_twitter_embed__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-twitter-embed */ "./node_modules/react-twitter-embed/dist/index.es.js");
/* harmony import */ var _WelcomeModal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./WelcomeModal */ "./assets/components/WelcomeModal.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Home = /*#__PURE__*/function (_Component) {
  _inherits(Home, _Component);

  var _super = _createSuper(Home);

  function Home() {
    var _this;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      matches: [],
      showmodal: false
    });

    return _this;
  }

  _createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getMatches();
      var connected = localStorage.getItem('connected');
      if (connected === 'true') this.getUser();
      this.showModal();
    }
  }, {
    key: "showModal",
    value: function showModal() {
      var _this2 = this;

      setTimeout(function () {
        _this2.setState({
          showmodal: true
        });
      }, 3000);
    }
  }, {
    key: "getUser",
    value: function getUser() {
      axios__WEBPACK_IMPORTED_MODULE_16___default().get('api/getUserId').then(function (res) {
        localStorage.setItem('id', res.data);
      });
    }
  }, {
    key: "getMatches",
    value: function getMatches() {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_16___default().get("https://portfolio-72147-default-rtdb.europe-west1.firebasedatabase.app/matches.json").then(function (res) {
        var matches = [];

        for (var i = 0; i < res.data.length; i++) {
          if (res.data[i].homescore === "") {
            matches.push(res.data[i]);
          }
        }

        _this3.setState({
          matches: matches.slice(0, 4)
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          matches = _this$state.matches,
          showmodal = _this$state.showmodal;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement("section", {
        className: "headerimg"
      }, showmodal ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(_WelcomeModal__WEBPACK_IMPORTED_MODULE_19__.default, null) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement("img", {
        src: "/images/euro2020-logo.svg"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(_ComingMatches__WEBPACK_IMPORTED_MODULE_17__.default, {
        data: matches
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(react_twitter_embed__WEBPACK_IMPORTED_MODULE_18__.TwitterTimelineEmbed, {
        sourceType: "profile",
        screenName: "equipedefrance",
        options: {
          height: 500,
          width: 300
        },
        lang: "fr"
      }));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_15__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./assets/components/Login.js":
/*!************************************!*\
  !*** ./assets/components/Login.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var joi_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! joi-browser */ "./node_modules/joi-browser/dist/joi-browser.js");
/* harmony import */ var joi_browser__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(joi_browser__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _common_form__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./common/form */ "./assets/components/common/form.js");
/* harmony import */ var _common_userloader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./common/userloader */ "./assets/components/common/userloader.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var Signup = /*#__PURE__*/function (_Form) {
  _inherits(Signup, _Form);

  var _super = _createSuper(Signup);

  function Signup() {
    var _this;

    _classCallCheck(this, Signup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      data: {
        username: "",
        password: ""
      },
      errors: {},
      errorscount: 0,
      loading: false,
      buttonText: "Valider"
    });

    _defineProperty(_assertThisInitialized(_this), "schema", {
      username: joi_browser__WEBPACK_IMPORTED_MODULE_15___default().string().required().max(40),
      password: joi_browser__WEBPACK_IMPORTED_MODULE_15___default().string().required().min(8).max(25)
    });

    _defineProperty(_assertThisInitialized(_this), "doSubmit", function () {
      _this.setState({
        loading: true,
        buttonText: "Chargement..."
      });

      var data = {
        username: _this.state.data.username,
        password: _this.state.data.password
      };
      axios__WEBPACK_IMPORTED_MODULE_16___default()({
        method: 'POST',
        url: 'api/login',
        data: data,
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(function (res) {
        _this.setState({
          loading: false,
          buttonText: "Valider"
        });

        if (res.status === 200) {
          react_toastify__WEBPACK_IMPORTED_MODULE_19__.toast.success(res.data.message, _this.toastoptions);
          localStorage.setItem('connected', 'true');
          setTimeout(function () {
            document.location.href = "/home";
          }, 2100);
        }
      })["catch"](function (err) {
        _this.setState({
          loading: false,
          buttonText: "Chargement..."
        });

        react_toastify__WEBPACK_IMPORTED_MODULE_19__.toast.error('Vérifiez vos identifiants', _this.toastoptions);
        var errorscount = _this.state.errorscount;
        errorscount++;

        _this.setState({
          errorscount: errorscount,
          data: {
            username: "",
            password: ""
          },
          buttonText: "Valider"
        });
      });
    });

    return _this;
  }

  _createClass(Signup, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          errorscount = _this$state.errorscount,
          loading = _this$state.loading,
          buttonText = _this$state.buttonText;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement(react_toastify__WEBPACK_IMPORTED_MODULE_19__.ToastContainer, null), loading === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement(_common_userloader__WEBPACK_IMPORTED_MODULE_18__.default, null) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("h1", {
        className: "title"
      }, "Connection"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("h2", null, "Pas de compte? Cliquez ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Link, {
        to: "signup"
      }, "ici"), " pour en cr\xE9er un."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("form", {
        onSubmit: this.handleSubmit,
        className: "signup-form"
      }, this.renderInput('username', 'Nom d\'utilisateur :', 'text', 'input'), this.renderInput('password', 'Mot de passe :', 'password', 'input'), errorscount >= 3 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("em", null, "Vous avez oubli\xE9 votre mot de passe ? Cliquez ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Link, {
        to: "/newpassword"
      }, "ici"), " pour le r\xE9initlaiiser") : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("div", {
        className: "field is-grouped"
      }, this.renderButton(buttonText, 'button is-success'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Link, {
        to: "/home",
        className: "button is-info"
      }, "Annuler"))));
    }
  }]);

  return Signup;
}(_common_form__WEBPACK_IMPORTED_MODULE_17__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Signup);

/***/ }),

/***/ "./assets/components/Matches.js":
/*!**************************************!*\
  !*** ./assets/components/Matches.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var _Bets__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./Bets */ "./assets/components/Bets.js");
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Filter */ "./assets/components/Filter.js");
/* harmony import */ var _common_pagination__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./common/pagination */ "./assets/components/common/pagination.js");
/* harmony import */ var _utilities_paginate__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../utilities/paginate */ "./assets/utilities/paginate.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




























function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var Matches = /*#__PURE__*/function (_Component) {
  _inherits(Matches, _Component);

  var _super = _createSuper(Matches);

  function Matches() {
    var _this;

    _classCallCheck(this, Matches);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      matches: [],
      selectedMatches: [],
      groups: [],
      selectedGroup: '',
      dates: [],
      selectedDate: '',
      teams: [],
      selectedTeam: '',
      currentPage: 1,
      pageSize: 6,
      date: new Date('d-M-Y')
    });

    _defineProperty(_assertThisInitialized(_this), "handlePageChange", function (page) {
      _this.setState({
        currentPage: page
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleGroupFilter", function (group) {
      var matches = _toConsumableArray(_this.state.matches);

      if (group === 'All') {
        _this.setState({
          selectedMatches: matches,
          selectedGroup: ''
        });
      } else {
        var selectedMatches = matches.filter(function (m) {
          return m.group === group;
        });

        _this.setState({
          selectedMatches: selectedMatches,
          selectedGroup: group,
          selectedTeam: '',
          selectedDate: '',
          currentPage: 1
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleDateFilter", function (date) {
      var matches = _toConsumableArray(_this.state.matches);

      if (date === 'All') {
        _this.setState({
          selectedMatches: matches,
          selectedDate: ''
        });
      } else {
        var selectedMatches = matches.filter(function (m) {
          return m.date === date;
        });

        _this.setState({
          selectedMatches: selectedMatches,
          selectedDate: date,
          selectedTeam: '',
          selectedGroup: '',
          currentPage: 1
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleTeamFilter", function (team) {
      var matches = _toConsumableArray(_this.state.matches);

      if (team === 'All') {
        _this.setState({
          selectedMatches: matches,
          selectedTeam: '',
          currentPage: 1
        });
      } else {
        var selectedMatches = matches.filter(function (m) {
          return m.hometeam === team || m.awayteam === team;
        });

        _this.setState({
          selectedMatches: selectedMatches,
          selectedTeam: team,
          selectedDate: '',
          selectedGroup: ''
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getPagedData", function () {
      var _this$state = _this.state,
          pageSize = _this$state.pageSize,
          currentPage = _this$state.currentPage,
          selectedMatches = _this$state.selectedMatches;
      var matchListPerPage = (0,_utilities_paginate__WEBPACK_IMPORTED_MODULE_33__.paginate)(selectedMatches, currentPage, pageSize);
      return {
        totalCount: selectedMatches.length,
        data: matchListPerPage
      };
    });

    _defineProperty(_assertThisInitialized(_this), "previousPage", function () {
      var currentPage = _this.state.currentPage;

      if (currentPage > 1) {
        currentPage--;
      }

      _this.setState({
        currentPage: currentPage
      });
    });

    _defineProperty(_assertThisInitialized(_this), "nextPage", function () {
      var _this$state2 = _this.state,
          currentPage = _this$state2.currentPage,
          selectedMatches = _this$state2.selectedMatches,
          pageSize = _this$state2.pageSize;

      if (currentPage < Math.ceil(selectedMatches.length / pageSize)) {
        currentPage++;
      }

      _this.setState({
        currentPage: currentPage
      });
    });

    return _this;
  }

  _createClass(Matches, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getMatches();
    }
  }, {
    key: "getMatches",
    value: function getMatches() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_27___default().get("https://portfolio-72147-default-rtdb.europe-west1.firebasedatabase.app/matches.json").then(function (res) {
        var matchid = Number(_this2.props.location.search.slice(7));
        var matches = res.data.slice(0, 36);
        var dates = [];
        var teams = [];
        var groups = [];
        matches.map(function (m) {
          if (!dates.includes(m.date)) dates.push(m.date);
          if (!teams.includes(m.hometeam)) teams.push(m.hometeam);
          if (!groups.includes(m.group)) groups.push(m.group);
        });
        var singlematch = [];

        if (matchid != "" && matchid <= matches.length) {
          singlematch.push(matches.find(function (m) {
            return matchid == m._id;
          }));

          _this2.setState({
            matches: matches,
            teams: teams.sort(),
            dates: dates,
            groups: groups,
            selectedMatches: singlematch
          });
        } else {
          _this2.setState({
            matches: matches,
            teams: teams.sort(),
            dates: dates,
            groups: groups,
            selectedMatches: matches
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state3 = this.state,
          pageSize = _this$state3.pageSize,
          currentPage = _this$state3.currentPage,
          selectedGroup = _this$state3.selectedGroup,
          selectedDate = _this$state3.selectedDate,
          selectedTeam = _this$state3.selectedTeam,
          dates = _this$state3.dates,
          groups = _this$state3.groups,
          teams = _this$state3.teams;

      var _this$getPagedData = this.getPagedData(),
          totalCount = _this$getPagedData.totalCount,
          data = _this$getPagedData.data;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("div", {
        className: "matchescontent"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("h1", {
        className: "title"
      }, "Phase de Groupe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("div", {
        className: "dropdown is-hoverable"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement(_Filter__WEBPACK_IMPORTED_MODULE_31__.default, {
        label: 'Groupe ',
        items: groups,
        selectedItem: selectedGroup,
        onItemSelect: this.handleGroupFilter
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("div", {
        className: "dropdown is-hoverable"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement(_Filter__WEBPACK_IMPORTED_MODULE_31__.default, {
        label: 'Date ',
        items: dates,
        selectedItem: selectedDate,
        onItemSelect: this.handleDateFilter
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("div", {
        className: "dropdown is-hoverable"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement(_Filter__WEBPACK_IMPORTED_MODULE_31__.default, {
        label: 'Equipe ',
        items: teams,
        selectedItem: selectedTeam,
        onItemSelect: this.handleTeamFilter
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("div", {
        className: "matches"
      }, data.map(function (match) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement(_Bets__WEBPACK_IMPORTED_MODULE_30__.default, {
          match: match,
          key: match._id
        });
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("div", {
        className: "pagination"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement(_common_pagination__WEBPACK_IMPORTED_MODULE_32__.default, {
        itemsCount: totalCount,
        pageSize: pageSize,
        currentPage: currentPage,
        onPageChange: this.handlePageChange,
        previousPage: this.previousPage,
        nextPage: this.nextPage
      })));
    }
  }]);

  return Matches;
}(react__WEBPACK_IMPORTED_MODULE_26__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Matches);

/***/ }),

/***/ "./assets/components/Ranking.js":
/*!**************************************!*\
  !*** ./assets/components/Ranking.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _common_Loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./common/Loader */ "./assets/components/common/Loader.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Ranking = /*#__PURE__*/function (_Component) {
  _inherits(Ranking, _Component);

  var _super = _createSuper(Ranking);

  function Ranking() {
    var _this;

    _classCallCheck(this, Ranking);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      data: {
        users: []
      },
      loading: false
    });

    return _this;
  }

  _createClass(Ranking, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getUsers();
    }
  }, {
    key: "getUsers",
    value: function getUsers() {
      var _this2 = this;

      this.setState({
        loading: true
      });
      axios__WEBPACK_IMPORTED_MODULE_14___default().get('/api/user/getAll').then(function (res) {
        return _this2.setState({
          data: {
            users: res.data.usernames
          },
          loading: false
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var users = this.state.data.users;
      var loading = this.state.loading;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
        className: "table-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("h1", {
        className: "title is-1"
      }, "Classement \xE0 venir!!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("iframe", {
        src: "https://gfycat.com/ifr/CheeryVagueElkhound",
        frameBorder: "0",
        scrolling: "no",
        width: "640",
        height: "361"
      }));
    }
  }]);

  return Ranking;
}(react__WEBPACK_IMPORTED_MODULE_13__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ranking);

/***/ }),

/***/ "./assets/components/WelcomeModal.js":
/*!*******************************************!*\
  !*** ./assets/components/WelcomeModal.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var WelcomeModal = /*#__PURE__*/function (_Component) {
  _inherits(WelcomeModal, _Component);

  var _super = _createSuper(WelcomeModal);

  function WelcomeModal() {
    var _this;

    _classCallCheck(this, WelcomeModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      modalview: false,
      modalshow: localStorage.getItem('ms') !== 'y'
    });

    return _this;
  }

  _createClass(WelcomeModal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        modalview: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          modalview = _this$state.modalview,
          modalshow = _this$state.modalshow;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", null, modalshow ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
        className: modalview ? 'modal is-active' : 'modal'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
        className: "modalmessage"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("button", {
        className: "close",
        onClick: function onClick() {
          _this2.setState({
            modalview: false
          });

          localStorage.setItem('ms', 'y');
        }
      }, "\u2716"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("p", null, "Bienvenue sur ce site de pronostics sur les matches l'UEFA EURO 2020", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("sup", null, "TM"), ".", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("br", null), "Ici que du fun, pas de mises d'argent, juste un petit jeu gratuit pour se divertir!.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("br", null), "Aucune donn\xE9e ne sera collect\xE9e ou revendue ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("span", null, "\uD83D\uDE03"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("p", null, "Pr\xEAt \xE0 jouer?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("button", {
        onClick: function onClick() {
          _this2.setState({
            modalview: false
          });

          localStorage.setItem('ms', 'y');
        },
        className: "button is-primary is-large"
      }, "C'est parti !"))) : null);
    }
  }]);

  return WelcomeModal;
}(react__WEBPACK_IMPORTED_MODULE_13__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WelcomeModal);

/***/ }),

/***/ "./assets/components/common/Loader.js":
/*!********************************************!*\
  !*** ./assets/components/common/Loader.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var Loader = function Loader() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "lds-roller"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);

/***/ }),

/***/ "./assets/components/common/form.js":
/*!******************************************!*\
  !*** ./assets/components/common/form.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var joi_browser__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! joi-browser */ "./node_modules/joi-browser/dist/joi-browser.js");
/* harmony import */ var joi_browser__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(joi_browser__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./input */ "./assets/components/common/input.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


























function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Form = /*#__PURE__*/function (_Component) {
  _inherits(Form, _Component);

  var _super = _createSuper(Form);

  function Form() {
    var _this;

    _classCallCheck(this, Form);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      data: {},
      errors: {}
    });

    _defineProperty(_assertThisInitialized(_this), "toastoptions", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      closeButton: false
    });

    _defineProperty(_assertThisInitialized(_this), "validate", function () {
      var options = {
        abortEarly: false
      };

      var _Joi$validate = joi_browser__WEBPACK_IMPORTED_MODULE_25___default().validate(_this.state.data, _this.schema, options),
          error = _Joi$validate.error;

      if (!error) return null;
      var errors = {};

      var _iterator = _createForOfIteratorHelper(error.details),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          errors[item.path[0]] = item.message;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return errors;
    });

    _defineProperty(_assertThisInitialized(_this), "validateProperty", function (_ref) {
      var name = _ref.name,
          value = _ref.value;

      var obj = _defineProperty({}, name, value);

      var schema = _defineProperty({}, name, _this.schema[name]);

      var errorMessage;

      if (joi_browser__WEBPACK_IMPORTED_MODULE_25___default().validate(obj, schema).error !== null) {
        if ([name][0] === 'username') {
          var error = joi_browser__WEBPACK_IMPORTED_MODULE_25___default().validate(obj, schema).error.details[0].type;

          switch (error) {
            case 'any.empty':
              errorMessage = 'Le nom d\'utilisateur doit être renseigné';
              break;

            case 'string.max':
              errorMessage = 'Le nom d\'utilisateur ne peut excéder 40 caractères';
              break;
          }
        }

        if ([name][0] === 'password') {
          var _error = joi_browser__WEBPACK_IMPORTED_MODULE_25___default().validate(obj, schema).error.details[0].type;

          switch (_error) {
            case 'any.empty':
              errorMessage = 'Le mot de passe doit être renseigné';
              break;

            case 'string.min':
              errorMessage = 'Le mot de passe doit contenir au moins 8 caractères';
              break;

            case 'string.max':
              errorMessage = 'Le mot de passe ne doit pas dépasser 25 caractères';
              break;
          }
        }

        if ([name][0] === 'email') {
          var _error2 = joi_browser__WEBPACK_IMPORTED_MODULE_25___default().validate(obj, schema).error.details[0].type;

          switch (_error2) {
            case 'string.email':
              errorMessage = 'Veuillez renseigner un e-mail valide';
              break;

            case 'any.empty':
              errorMessage = 'L\'adresse Email doit être renseignée';
              break;
          }
        }

        if ([name][0] === 'pass') {
          var _error3 = joi_browser__WEBPACK_IMPORTED_MODULE_25___default().validate(obj, schema).error.details[0].type;

          switch (_error3) {
            case 'any.empty':
              errorMessage = 'Le code d\'accès doit être renseigné';
              break;
          }
        }
      }

      return errorMessage;
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (e) {
      e.preventDefault();

      var errors = _this.validate();

      _this.setState({
        errors: errors || {}
      });

      if (errors) return;

      _this.doSubmit();
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (_ref2) {
      var input = _ref2.currentTarget;

      var errors = _objectSpread({}, _this.state.errors);

      var errorMessage = _this.validateProperty(input);

      if (errorMessage) errors[input.name] = errorMessage;else delete errors[input.name];

      var data = _objectSpread({}, _this.state.data);

      data[input.name] = input.value;

      _this.setState({
        data: data,
        errors: errors
      });
    });

    return _this;
  }

  _createClass(Form, [{
    key: "renderInput",
    value: function renderInput(name, label, type, className) {
      var _this$state = this.state,
          data = _this$state.data,
          errors = _this$state.errors;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24__.createElement(_input__WEBPACK_IMPORTED_MODULE_26__.default, {
        type: type,
        name: name,
        value: data[name],
        className: className,
        label: label,
        onChange: this.handleChange,
        error: errors[name]
      });
    }
  }, {
    key: "renderButton",
    value: function renderButton(label, className) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24__.createElement("button", {
        disabled: this.validate(),
        className: className
      }, label);
    }
  }]);

  return Form;
}(react__WEBPACK_IMPORTED_MODULE_24__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ }),

/***/ "./assets/components/common/input.js":
/*!*******************************************!*\
  !*** ./assets/components/common/input.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");





var Input = function Input(_ref) {
  var name = _ref.name,
      label = _ref.label,
      value = _ref.value,
      className = _ref.className,
      type = _ref.type,
      error = _ref.error,
      onChange = _ref.onChange;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "field"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("label", {
    className: "label",
    htmlFor: name
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "control"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("input", {
    value: value,
    onChange: onChange,
    className: error ? 'iserror ' + className : className,
    type: type,
    name: name,
    id: name
  }), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", {
    className: "errormsg"
  }, error.replace(/"/g, ''), ".")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);

/***/ }),

/***/ "./assets/components/common/pagination.js":
/*!************************************************!*\
  !*** ./assets/components/common/pagination.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);




var Pagination = function Pagination(_ref) {
  var itemsCount = _ref.itemsCount,
      pageSize = _ref.pageSize,
      currentPage = _ref.currentPage,
      onPageChange = _ref.onPageChange,
      previousPage = _ref.previousPage,
      nextPage = _ref.nextPage;
  var pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;

  var pages = lodash__WEBPACK_IMPORTED_MODULE_2___default().range(1, pagesCount + 1);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("nav", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("ul", {
    className: "pagination-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", {
    className: "pagination-link",
    onClick: previousPage
  }, "<"), pages.map(function (page) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", {
      key: page,
      className: page === currentPage ? "pagination-link is-current" : "pagination-link",
      onClick: function onClick() {
        return onPageChange(page);
      }
    }, page);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", {
    className: "pagination-link",
    onClick: nextPage
  }, ">")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);

/***/ }),

/***/ "./assets/components/common/userloader.js":
/*!************************************************!*\
  !*** ./assets/components/common/userloader.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var UserLoader = function UserLoader() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "lds-ripple"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserLoader);

/***/ }),

/***/ "./assets/components/passupdate/passUpdate.js":
/*!****************************************************!*\
  !*** ./assets/components/passupdate/passUpdate.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _common_form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../common/form */ "./assets/components/common/form.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var joi_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! joi-browser */ "./node_modules/joi-browser/dist/joi-browser.js");
/* harmony import */ var joi_browser__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(joi_browser__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_17__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var PassUpdate = /*#__PURE__*/function (_Form) {
  _inherits(PassUpdate, _Form);

  var _super = _createSuper(PassUpdate);

  function PassUpdate() {
    var _this;

    _classCallCheck(this, PassUpdate);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      data: {
        password: ""
      },
      errors: {},
      loading: false,
      buttonText: "Valider"
    });

    _defineProperty(_assertThisInitialized(_this), "schema", {
      password: joi_browser__WEBPACK_IMPORTED_MODULE_16___default().string().required().min(8).max(25)
    });

    return _this;
  }

  _createClass(PassUpdate, [{
    key: "doSubmit",
    value: function doSubmit() {
      var _this2 = this;

      console.log(this.state.data.password);
      this.setState({
        password: this.state.data.password,
        loading: true,
        buttonText: 'Patientez....'
      });
      var data = {
        user: this.props.alias,
        password: this.state.data.password
      };
      axios__WEBPACK_IMPORTED_MODULE_17___default()({
        method: 'POST',
        url: 'api/user/updatePassword',
        data: data,
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(function (res) {
        react_toastify__WEBPACK_IMPORTED_MODULE_18__.toast.success('Mot de passe modifié avec succès !', _this2.toastoptions);
        setTimeout(function () {
          document.location.href = "/login";
        }, 2100);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          loading = _this$state.loading,
          buttonText = _this$state.buttonText;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("form", {
        onSubmit: this.handleSubmit,
        className: "newpass-form"
      }, this.renderInput('password', 'Nouveau mot de passe  :', 'text', 'input'), this.renderButton(buttonText, 'button is-success'));
    }
  }]);

  return PassUpdate;
}(_common_form__WEBPACK_IMPORTED_MODULE_15__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PassUpdate);

/***/ }),

/***/ "./assets/components/passupdate/userConfirm.js":
/*!*****************************************************!*\
  !*** ./assets/components/passupdate/userConfirm.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _common_form__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/form */ "./assets/components/common/form.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var joi_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! joi-browser */ "./node_modules/joi-browser/dist/joi-browser.js");
/* harmony import */ var joi_browser__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(joi_browser__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _passUpdate__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./passUpdate */ "./assets/components/passupdate/passUpdate.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_17__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var UserConfirm = /*#__PURE__*/function (_Form) {
  _inherits(UserConfirm, _Form);

  var _super = _createSuper(UserConfirm);

  function UserConfirm() {
    var _this;

    _classCallCheck(this, UserConfirm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      data: {
        username: ""
      },
      errors: {},
      alias: "",
      loading: false,
      buttonText: "Valider",
      userquery: true
    });

    _defineProperty(_assertThisInitialized(_this), "schema", {
      username: joi_browser__WEBPACK_IMPORTED_MODULE_15___default().string().required().max(40)
    });

    return _this;
  }

  _createClass(UserConfirm, [{
    key: "doSubmit",
    value: function doSubmit() {
      var _this2 = this;

      this.setState({
        alias: this.state.data.username,
        buttonText: 'Patientez...'
      });
      var data = {
        username: this.state.data.username
      };
      axios__WEBPACK_IMPORTED_MODULE_17___default()({
        method: 'POST',
        url: 'api/getUserName',
        data: data,
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(function (res) {
        if (res.data.user === _this2.state.data.username) {
          _this2.setState({
            userquery: false
          });
        } else {
          _this2.setState({
            data: {
              username: ''
            },
            errors: {
              username: ''
            },
            buttonText: "Valider"
          });

          react_toastify__WEBPACK_IMPORTED_MODULE_18__.toast.error('Le nom d\'utilisateur n\'existe pas', _this2.toastoptions);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          loading = _this$state.loading,
          userquery = _this$state.userquery,
          alias = _this$state.alias,
          buttonText = _this$state.buttonText;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(react_toastify__WEBPACK_IMPORTED_MODULE_18__.ToastContainer, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("h1", {
        className: "title"
      }, "Renouvellement de mot de passe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("form", {
        onSubmit: this.handleSubmit,
        className: "newpass-form"
      }, this.renderInput('username', 'Votre nom d\'utilisateur  :', 'text', 'input'), userquery ? this.renderButton(buttonText, 'button is-success') : null), userquery ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(_passUpdate__WEBPACK_IMPORTED_MODULE_16__.default, {
        alias: alias
      }));
    }
  }]);

  return UserConfirm;
}(_common_form__WEBPACK_IMPORTED_MODULE_14__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserConfirm);

/***/ }),

/***/ "./assets/components/signup.js":
/*!*************************************!*\
  !*** ./assets/components/signup.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var joi_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! joi-browser */ "./node_modules/joi-browser/dist/joi-browser.js");
/* harmony import */ var joi_browser__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(joi_browser__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _common_form__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./common/form */ "./assets/components/common/form.js");
/* harmony import */ var _common_userloader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./common/userloader */ "./assets/components/common/userloader.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var Signup = /*#__PURE__*/function (_Form) {
  _inherits(Signup, _Form);

  var _super = _createSuper(Signup);

  function Signup() {
    var _this;

    _classCallCheck(this, Signup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      data: {
        username: "",
        password: "",
        email: ""
      },
      errors: {},
      loading: false,
      buttonText: "Valider"
    });

    _defineProperty(_assertThisInitialized(_this), "schema", {
      username: joi_browser__WEBPACK_IMPORTED_MODULE_15___default().string().required().max(40),
      password: joi_browser__WEBPACK_IMPORTED_MODULE_15___default().string().required().min(8).max(25),
      email: joi_browser__WEBPACK_IMPORTED_MODULE_15___default().string().required().email()
    });

    _defineProperty(_assertThisInitialized(_this), "doSubmit", function () {
      _this.setState({
        loading: true,
        buttonText: "Chargement..."
      });

      var data = {
        username: _this.state.data.username,
        password: _this.state.data.password,
        email: _this.state.data.email
      };
      axios__WEBPACK_IMPORTED_MODULE_16___default()({
        method: 'POST',
        url: 'api/user/new',
        data: data,
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(function (res) {
        _this.setState({
          loading: false,
          buttonText: "Valider"
        });

        if (res.status === 200) {
          console.log(res);
          react_toastify__WEBPACK_IMPORTED_MODULE_19__.toast.success(res.data.message, _this.toastoptions);
          setTimeout(function () {
            _this.props.history.push('/login');
          }, 3500);
        }
      })["catch"](function (err) {
        _this.setState({
          loading: false,
          buttonText: "Valider"
        });

        react_toastify__WEBPACK_IMPORTED_MODULE_19__.toast.error('Le nom d\'utilisateur est déja utilisé', _this.toastoptions);
      });
    });

    return _this;
  }

  _createClass(Signup, [{
    key: "render",
    value: function render() {
      var loading = this.state.loading;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement(react_toastify__WEBPACK_IMPORTED_MODULE_19__.ToastContainer, null), loading === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement(_common_userloader__WEBPACK_IMPORTED_MODULE_18__.default, null) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("h1", {
        className: "title"
      }, "Cr\xE9er un nouveau compte"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("h2", null, "Vous avez d\xE9ja un compte? Cliquez ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Link, {
        to: "login"
      }, "ici"), " pour vous connecter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("form", {
        onSubmit: this.handleSubmit,
        className: "signup-form"
      }, this.renderInput('username', 'Choisir un Nom d\'utilisateur  :', 'text', 'input'), this.renderInput('email', 'Renseigner une adresse Email  :', 'text', 'input'), this.renderInput('password', 'Créer un Mot de passe  :', 'password', 'input'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("div", {
        className: "field is-grouped"
      }, this.renderButton('Valider', 'button is-success'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Link, {
        to: "/home",
        className: "button is-info"
      }, "Annuler"))));
    }
  }]);

  return Signup;
}(_common_form__WEBPACK_IMPORTED_MODULE_17__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Signup);

/***/ }),

/***/ "./assets/utilities/paginate.js":
/*!**************************************!*\
  !*** ./assets/utilities/paginate.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "paginate": () => (/* binding */ paginate)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


function paginate(items, pageNumber, pageSize) {
  var startIndex = (pageNumber - 1) * pageSize;
  return lodash__WEBPACK_IMPORTED_MODULE_1___default()(items).slice(startIndex).take(pageSize).value();
}

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_axios_index_js-node_modules_core-js_modules_es_array_concat_js-node_modu-62e08b"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0FjY2Vzcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9BY2NvdW50LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0JldHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQ29taW5nTWF0Y2hlcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9GaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvTG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvTWF0Y2hlcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9SYW5raW5nLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1dlbGNvbWVNb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9jb21tb24vTG9hZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2NvbW1vbi9mb3JtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2NvbW1vbi9pbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9jb21tb24vcGFnaW5hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9jb21tb24vdXNlcmxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9wYXNzdXBkYXRlL3Bhc3NVcGRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvcGFzc3VwZGF0ZS91c2VyQ29uZmlybS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9zaWdudXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3V0aWxpdGllcy9wYWdpbmF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3MiXSwibmFtZXMiOlsiUmVhY3RET00iLCJIb21lIiwiTWF0Y2hlcyIsIlNpZ251cCIsIkxvZ2luIiwiVXNlckNvbmZpcm0iLCJSYW5raW5nIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkFjY291bnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiQWNjZXNzIiwiZGF0YSIsInBhc3MiLCJlcnJvcnMiLCJKb2kiLCJyZXF1aXJlZCIsIm1pbiIsIm1heCIsImNvcnJlY3RQYXNzIiwic3RhdGUiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJsb2NhdGlvbiIsImhyZWYiLCJoYW5kbGVTdWJtaXQiLCJyZW5kZXJJbnB1dCIsInJlbmRlckJ1dHRvbiIsIkZvcm0iLCJsb2FkaW5nIiwiaWQiLCJ1c2VybmFtZSIsImJldHMiLCJtYXRjaGVzIiwiZ2V0VXNlckJ5SWQiLCJnZXRNYXRjaGVzIiwiYXhpb3MiLCJ0aGVuIiwicmVzIiwic2V0U3RhdGUiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiTnVtYmVyIiwibWV0aG9kIiwidXJsIiwiaGVhZGVycyIsInRvVXBwZXJDYXNlIiwibGVuZ3RoIiwibWFwIiwiYmV0IiwibWF0Y2hfaWQiLCJiZXRfZGF0ZSIsImRhdGUiLCJzbGljZSIsInNwbGl0IiwicmV2ZXJzZSIsImpvaW4iLCJtYXRjaCIsIl9pZCIsImhvbWVzY29yZSIsImF3YXlzY29yZSIsImhvbWV0ZWFtIiwiYXdheXRlYW0iLCJDb21wb25lbnQiLCJCZXRzIiwiaGlkZGVuIiwiaG9tZXJlc3VsdCIsImF3YXlyZXN1bHQiLCJiZXRzdGF0dXMiLCJ0b2FzdCIsImNvbm5lY3RlZCIsInZhbGlkYXRpb25kYXRlIiwib3B0aW9ucyIsImFib3J0RWFybHkiLCJzY2hlbWEiLCJlcnJvciIsImRldGFpbHMiLCJpdGVtIiwicGF0aCIsIm1lc3NhZ2UiLCJpbnB1dCIsImN1cnJlbnRUYXJnZXQiLCJuYW1lIiwidmFsdWUiLCJlIiwicHJldmVudERlZmF1bHQiLCJ2YWxpZGF0ZSIsImRvU3VibWl0IiwibWF0Y2hpZCIsInByb3BzIiwiYmV0aWQiLCJ1dWlkdjQiLCJzdGF0dXMiLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsImNsb3NlT25DbGljayIsImNsb3NlQnV0dG9uIiwic2V0VGltZW91dCIsImdldEJldHMiLCJnZXRWYWxpZGF0aW9uRGF0ZSIsInNvdXJjZSIsImNhbmNlbCIsIm1hdGNoZGF0ZSIsInRvTG93ZXJDYXNlIiwiRGF0ZSIsInllYXIiLCJtb250aCIsImRheSIsIm5ld2RhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJtYXRjaHRpbWUiLCJ0aW1lIiwiZ2V0SG91cnMiLCJ1c2VyaWQiLCJjYW5jZWxUb2tlbiIsInRva2VuIiwiaW5wdXRlcnJvcnMiLCJncm91cCIsImhhbmRsZUNsaWNrIiwiaGFuZGxlQ2hhbmdlIiwiQ29taW5nTWF0Y2hlcyIsIkZpbHRlciIsIml0ZW1zIiwib25JdGVtU2VsZWN0Iiwic2VsZWN0ZWRJdGVtIiwibGFiZWwiLCJIZWFkZXIiLCJtb2JpbGVtZW51IiwiaXNBY3RpdmUiLCJyZW1vdmVJdGVtIiwid2luZG93IiwicmVwbGFjZSIsIm9uTG9nb3V0Iiwic2hvd21vZGFsIiwiZ2V0VXNlciIsInNob3dNb2RhbCIsImkiLCJwdXNoIiwiaGVpZ2h0Iiwid2lkdGgiLCJwYXNzd29yZCIsImVycm9yc2NvdW50IiwiYnV0dG9uVGV4dCIsInRvYXN0b3B0aW9ucyIsInNlbGVjdGVkTWF0Y2hlcyIsImdyb3VwcyIsInNlbGVjdGVkR3JvdXAiLCJkYXRlcyIsInNlbGVjdGVkRGF0ZSIsInRlYW1zIiwic2VsZWN0ZWRUZWFtIiwiY3VycmVudFBhZ2UiLCJwYWdlU2l6ZSIsInBhZ2UiLCJmaWx0ZXIiLCJtIiwidGVhbSIsIm1hdGNoTGlzdFBlclBhZ2UiLCJwYWdpbmF0ZSIsInRvdGFsQ291bnQiLCJNYXRoIiwiY2VpbCIsInNlYXJjaCIsImluY2x1ZGVzIiwic2luZ2xlbWF0Y2giLCJmaW5kIiwic29ydCIsImdldFBhZ2VkRGF0YSIsImhhbmRsZUdyb3VwRmlsdGVyIiwiaGFuZGxlRGF0ZUZpbHRlciIsImhhbmRsZVRlYW1GaWx0ZXIiLCJoYW5kbGVQYWdlQ2hhbmdlIiwicHJldmlvdXNQYWdlIiwibmV4dFBhZ2UiLCJ1c2VycyIsImdldFVzZXJzIiwidXNlcm5hbWVzIiwiV2VsY29tZU1vZGFsIiwibW9kYWx2aWV3IiwibW9kYWxzaG93IiwiTG9hZGVyIiwib2JqIiwiZXJyb3JNZXNzYWdlIiwidHlwZSIsInZhbGlkYXRlUHJvcGVydHkiLCJjbGFzc05hbWUiLCJJbnB1dCIsIm9uQ2hhbmdlIiwiUGFnaW5hdGlvbiIsIml0ZW1zQ291bnQiLCJvblBhZ2VDaGFuZ2UiLCJwYWdlc0NvdW50IiwicGFnZXMiLCJfIiwiVXNlckxvYWRlciIsIlBhc3NVcGRhdGUiLCJ1c2VyIiwiYWxpYXMiLCJ1c2VycXVlcnkiLCJlbWFpbCIsImhpc3RvcnkiLCJwYWdlTnVtYmVyIiwic3RhcnRJbmRleCIsInRha2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLDZDQUFBLGVBRUksaURBQUMsNERBQUQscUJBQ0ksaURBQUMsdURBQUQsT0FESixlQUVJLDRFQUNJLGlEQUFDLHFEQUFELHFCQUNJLGlEQUFDLG9EQUFEO0FBQU8sTUFBSSxFQUFDLE9BQVo7QUFBb0IsV0FBUyxFQUFFQyxxREFBSUE7QUFBbkMsRUFESixlQUVJLGlEQUFDLG9EQUFEO0FBQU8sTUFBSSxFQUFDLFVBQVo7QUFBdUIsV0FBUyxFQUFFQyx3REFBT0E7QUFBekMsRUFGSixlQUdJLGlEQUFDLG9EQUFEO0FBQU8sTUFB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LEVBQXNFLE9BQXRFLENBREwsRUFFSyxLQUFLQSxXQUFMLENBQWlCLE9BQWpCLEVBQXlCLGlDQUF6QixFQUEyRCxNQUEzRCxFQUFrRSxPQUFsRSxDQUZMLEVBR0ssS0FBS0EsV0FBTCxDQUFpQixVQUFqQixFQUE0QiwwQkFBNUIsRUFBdUQsVUFBdkQsRUFBa0UsT0FBbEUsQ0FITCxlQUlJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0ssS0FBS0MsWUFBTCxDQUFrQixTQUFsQixFQUE0QixtQkFBNUIsQ0FETCxlQUVJLGtEQUFDLG1EQUFEO0FBQU0sVUFBRSxFQUFDLE9BQVQ7QUFBaUIsaUJBQVMsRUFBQztBQUEzQixtQkFGSixDQUpKLENBTEosQ0FESjtBQWlCSDs7OztFQTdEZ0JDLGtEOztBQWdFckIsaUVBQWUxQixNQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEVBO0FBRU8sU0FBUzhKLFFBQVQsQ0FBa0JwQyxLQUFsQixFQUF3QitFLFVBQXhCLEVBQW1DakQsUUFBbkMsRUFBNEM7QUFDL0MsTUFBTWtELFVBQVUsR0FBRyxDQUFDRCxVQUFVLEdBQUcsQ0FBZCxJQUFtQmpELFFBQXRDO0FBQ0EsU0FBT3lDLDZDQUFDLENBQUN2RSxLQUFELENBQUQsQ0FBU3RFLEtBQVQsQ0FBZXNKLFVBQWYsRUFBMkJDLElBQTNCLENBQWdDbkQsUUFBaEMsRUFBMEN0RSxLQUExQyxFQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7O0FDTEQiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFN3aXRjaCwgUm91dGUsIFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL0hvbWUnO1xuaW1wb3J0IE1hdGNoZXMgZnJvbSAnLi9jb21wb25lbnRzL01hdGNoZXMnO1xuaW1wb3J0IFNpZ251cCBmcm9tICcuL2NvbXBvbmVudHMvc2lnbnVwJztcbmltcG9ydCBMb2dpbiBmcm9tICcuL2NvbXBvbmVudHMvTG9naW4nO1xuaW1wb3J0IEFjY291bnQgZnJvbSAnLi9jb21wb25lbnRzL0FjY291bnQnO1xuaW1wb3J0IEFjY2VzcyBmcm9tICcuL2NvbXBvbmVudHMvQWNjZXNzJztcbmltcG9ydCBSYW5raW5nIGZyb20gJy4vY29tcG9uZW50cy9SYW5raW5nJztcbmltcG9ydCBVc2VyQ29uZmlybSBmcm9tICcuL2NvbXBvbmVudHMvcGFzc3VwZGF0ZS91c2VyQ29uZmlybSc7XG4gICAgXG5SZWFjdERPTS5yZW5kZXIoXG5cbiAgICA8Um91dGVyPlxuICAgICAgICA8SGVhZGVyLz5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2hvbWVcIiBjb21wb25lbnQ9e0hvbWV9Lz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9tYXRjaGVzXCIgY29tcG9uZW50PXtNYXRjaGVzfS8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvbWF0Y2hlcy86aWRcIiBjb21wb25lbnQ9e01hdGNoZXN9Lz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9zaWdudXBcIiBjb21wb25lbnQ9e1NpZ251cH0vPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2xvZ2luXCIgY29tcG9uZW50PXtMb2dpbn0vPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL25ld3Bhc3N3b3JkL1wiIGNvbXBvbmVudD17VXNlckNvbmZpcm19Lz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9yYW5raW5nXCIgY29tcG9uZW50PXtSYW5raW5nfS8+XG4gICAgICAgICAgICAgICAge2xvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb25uZWN0ZWQnKT09PSd0cnVlJz9cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYWNjb3VudFwiIGNvbXBvbmVudD17QWNjb3VudH0vPjpcbiAgICAgICAgICAgICAgICAgICAgPFJlZGlyZWN0IHRvPVwiL2hvbWVcIiAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBleGFjdCA+XG4gICAgICAgICAgICAgICAgICAgIDxSZWRpcmVjdCB0bz1cIi9ob21lXCIgLz5cbiAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgIDxSZWRpcmVjdCB0bz1cIi9ob21lXCIvPlxuICAgICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgICAgXG4gICAgPC9Sb3V0ZXI+ICAgIFxuICAgIFxuICAgICxkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRm9ybSBmcm9tICcuL2NvbW1vbi9mb3JtJztcclxuaW1wb3J0IEpvaSBmcm9tICdqb2ktYnJvd3Nlcic7XHJcblxyXG5jbGFzcyBBY2Nlc3MgZXh0ZW5kcyBGb3JtIHtcclxuICAgIHN0YXRlID0geyBcclxuICAgICAgICBkYXRhIDogeyBwYXNzIDogXCJcIiB9LFxyXG4gICAgICAgIGVycm9ycyA6IHt9XHJcbiAgICB9O1xyXG4gICAgc2NoZW1hID0ge1xyXG4gICAgICAgIHBhc3MgOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKS5taW4oMTEpLm1heCgxMylcclxuICAgIH07XHJcbiAgICBkb1N1Ym1pdCgpe1xyXG4gICAgICAgIGNvbnN0IGNvcnJlY3RQYXNzID0gJ3Bhc3MxMjM0NTY3OCc7XHJcbiAgICAgICAgY29uc3QgcGFzcyA9IHRoaXMuc3RhdGUuZGF0YS5wYXNzXHJcbiAgICAgICAgaWYgKHBhc3MgPT0gY29ycmVjdFBhc3Mpe1xyXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdhY2Nlc3MnLCdvaycpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmPVwiL2hvbWVcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7IFxyXG4gICAgICAgIHJldHVybiAoIFxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJhY2Nlc3NcIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+UGFnZSBlbiBjb25zdHJ1Y3Rpb248L2gxPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvd29ya2luZy5naWZcIi8+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJJbnB1dCgncGFzcycsJ0NvZGUgZFxcJ2FjY8OocyA6JywndGV4dCcsJ2lucHV0Jyl9XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJCdXR0b24oJ1ZhbGlkZXInLCdidXR0b24gaXMtc3VjY2VzcycpfVxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBBY2Nlc3M7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuL2NvbW1vbi9Mb2FkZXInO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBSZWFjdFRvb2x0aXAgZnJvbSAncmVhY3QtdG9vbHRpcCc7XHJcblxyXG5jbGFzcyBBY2NvdW50IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0ZSA9IHsgXHJcbiAgICAgICAgbG9hZGluZyA6IHRydWUsXHJcbiAgICAgICAgaWQ6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZCcpLFxyXG4gICAgICAgIHVzZXJuYW1lIDogXCJcIixcclxuICAgICAgICBiZXRzIDogW10sXHJcbiAgICAgICAgbWF0Y2hlcyA6IFtdXHJcbiAgICB9O1xyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICB0aGlzLmdldFVzZXJCeUlkKCk7XHJcbiAgICAgICAgdGhpcy5nZXRNYXRjaGVzKCk7XHJcbiAgICB9O1xyXG4gICAgZ2V0TWF0Y2hlcygpeyAgICAgICAgXHJcbiAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgLmdldChgaHR0cHM6Ly9wb3J0Zm9saW8tNzIxNDctZGVmYXVsdC1ydGRiLmV1cm9wZS13ZXN0MS5maXJlYmFzZWRhdGFiYXNlLmFwcC9tYXRjaGVzLmpzb25gKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7dGhpcy5zZXRTdGF0ZSh7bWF0Y2hlcyA6IHJlcy5kYXRhfSl9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge2NvbnNvbGUubG9nKGVycil9KVxyXG4gICAgfTtcclxuICAgIGdldFVzZXJCeUlkKCl7XHJcbiAgICAgICAgY29uc3QgaWQgPSBOdW1iZXIodGhpcy5zdGF0ZS5pZCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHsgaWQgOiBpZH07XHJcbiAgICAgICAgYXhpb3Moe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiAnYXBpL3VzZXIvZ2V0VXNlckJ5SWQnLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7J1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnfSAgICAgXHJcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt1c2VybmFtZTpyZXMuZGF0YX0pXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXhpb3Moe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiAnYXBpL2dldGJldHNCeVVzZXInLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7J1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnfSAgICAgXHJcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtiZXRzIDogcmVzLmRhdGEgLCBsb2FkaW5nIDogZmFsc2V9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHsgXHJcbiAgICAgICAgY29uc3Qge3VzZXJuYW1lICwgbG9hZGluZyAsIGJldHMgLCBtYXRjaGVzfSA9IHRoaXMuc3RhdGVcclxuICAgICAgICByZXR1cm4gKCAgICAgXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZSBpcy0yXCI+TW9uIENvbXB0ZTwvaDI+XHJcbiAgICAgICAgICAgICAgICB7bG9hZGluZz8gPExvYWRlci8+OlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+TW9uIGVzcGFjZTwvcD4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGVtIGNsYXNzTmFtZT1cInVzZXJuYW1lXCI+e3VzZXJuYW1lLnRvVXBwZXJDYXNlKCl9PC9lbT5cclxuICAgICAgICAgICAgICAgICAgICA8aHI+PC9ocj5cclxuICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGl0bGUgaXMtNlwiPk1lcyBwcm9ub3MgOjwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2JldHMubGVuZ3RoID4gMCA/IFxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5EYXRlIGR1IHByb25vPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U3RhdHV0IGR1IHByb25vPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TWF0Y2g8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Nb24gcHJvbm9zdGljPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UsOpc3VsdGF0IGR1IG1hdGNoPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2JldHMubWFwKGJldCA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2JldC5tYXRjaF9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmV0LmJldF9kYXRlLmRhdGUuc2xpY2UoMCwxMCkuc3BsaXQoJy0nKS5yZXZlcnNlKCkuam9pbignLycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVzLm1hcChtYXRjaCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZigobWF0Y2guX2lkID09IGJldC5tYXRjaF9pZCAmJiAobWF0Y2guaG9tZXNjb3JlICYmIG1hdGNoLmF3YXlzY29yZSAhPT0gXCJcIikpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihiZXQuaG9tZXNjb3JlID4gYmV0LmF3YXlzY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1hdGNoLmhvbWVzY29yZSA+IG1hdGNoLmF3YXlzY29yZSAmJiBtYXRjaC5ob21lc2NvcmUgPT0gYmV0LmhvbWVzY29yZSAmJiBtYXRjaC5hd2F5c2NvcmUgPT0gYmV0LmF3YXlzY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRkIGtleT17bWF0Y2guX2lkfT5QYXJpIEdhZ27DqSAhIDMgcG9pbnRzITwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihtYXRjaC5ob21lc2NvcmUgPiBtYXRjaC5hd2F5c2NvcmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx0ZCBrZXk9e21hdGNoLl9pZH0+UGFyaSBHYWduw6kgISAyIHBvaW50cyE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRkIGtleT17bWF0Y2guX2lkfT5QYXJpIHBlcmR1PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihiZXQuaG9tZXNjb3JlIDwgYmV0LmF3YXlzY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1hdGNoLmhvbWVzY29yZSA8IG1hdGNoLmF3YXlzY29yZSAmJiBtYXRjaC5ob21lc2NvcmUgPT0gYmV0LmhvbWVzY29yZSAmJiBtYXRjaC5hd2F5c2NvcmUgPT0gYmV0LmF3YXlzY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRkIGtleT17bWF0Y2guX2lkfT5QYXJpIEdhZ27DqSAhIDMgcG9pbnRzITwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1hdGNoLmhvbWVzY29yZSA8IG1hdGNoLmF3YXlzY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRkIGtleT17bWF0Y2guX2lkfT5QYXJpIEdhZ27DqSAhIDIgcG9pbnRzITwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8dGQga2V5PXttYXRjaC5faWR9PlBhcmkgcGVyZHU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYmV0LmhvbWVzY29yZSA9PT0gYmV0LmF3YXlzY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1hdGNoLmhvbWVzY29yZSA9PT0gbWF0Y2guYXdheXNjb3JlICYmIG1hdGNoLmhvbWVzY29yZSA9PSBiZXQuaG9tZXNjb3JlICYmIG1hdGNoLmF3YXlzY29yZSA9PSBiZXQuYXdheXNjb3JlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8dGQga2V5PXttYXRjaC5faWR9PlBhcmkgR2FnbsOpICEgMyBwb2ludHMhPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihtYXRjaC5ob21lc2NvcmUgPT09IG1hdGNoLmF3YXlzY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRkIGtleT17bWF0Y2guX2lkfT5QYXJpIEdhZ27DqSAhIDIgcG9pbnRzITwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8dGQga2V5PXttYXRjaC5faWR9PlBhcmkgcGVyZHU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKChtYXRjaC5faWQgPT0gYmV0Lm1hdGNoX2lkICYmIG1hdGNoLmhvbWVzY29yZT09PSBcIlwiKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXttYXRjaC5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGlwPVwiVm9pciBvdSBtb2RpZmllciBsZSBwcm9ub3N0aWNcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgL21hdGNoZXM/bWF0Y2g9JHtiZXQubWF0Y2hfaWR9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RUb29sdGlwIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJsaWdodFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlciBib3JkZXJDb2xvcj1cIiMzMzg0QThcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I9XCIjMzM4NEE4XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dDb2xvcj1cIiMzMzg0QThcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbiBjb3Vyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltYWdlcy8ke2JldC5ob21ldGVhbX0uc3ZnYH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI1cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG9tZWltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmV0LmhvbWV0ZWFtfSAtIHtiZXQuYXdheXRlYW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltYWdlcy8ke2JldC5hd2F5dGVhbX0uc3ZnYH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI1cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXdheWltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2JldC5ob21lc2NvcmV9IC0ge2JldC5hd2F5c2NvcmV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWF0Y2hlcy5tYXAobWF0Y2ggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoLmhvbWVzY29yZSAmJiBtYXRjaC5faWQgPT09IGJldC5tYXRjaF9pZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXttYXRjaC5faWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttYXRjaC5ob21lc2NvcmV9IC0ge21hdGNoLmF3YXlzY29yZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihtYXRjaC5ob21lc2NvcmUgPT09ICcnICYmIG1hdGNoLl9pZCA9PT0gYmV0Lm1hdGNoX2lkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRkIGtleT17bWF0Y2guX2lkfT5NYXRjaCDDoCB2ZW5pcjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PiA6XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Vm91cyBuJ2F2ZXogcGFzIGVuY29yZSBwbGFjw6kgZGUgcHJvbm9zdGljcy48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlJldmVuZXogdmVycyBsZXMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9tYXRjaGVzXCI+IG1hdGNoZXMgPC9MaW5rPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvdXIgY29tbWVuY2VyIMOgIHByb25vc3RpcXVlci5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50OyIsImltcG9ydCBSZWFjdCAsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuL2NvbW1vbi9Mb2FkZXInO1xyXG5pbXBvcnQgSm9pIGZyb20gJ2pvaS1icm93c2VyJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XHJcbmltcG9ydCB7IHRvYXN0LCBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IFJlYWN0VG9vbHRpcCBmcm9tICdyZWFjdC10b29sdGlwJztcclxuXHJcbmNsYXNzIEJldHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgaGlkZGVuIDogdHJ1ZSxcclxuICAgICAgICBkYXRhIDoge1xyXG4gICAgICAgICAgICBob21lcmVzdWx0IDogXCIgXCIsXHJcbiAgICAgICAgICAgIGF3YXlyZXN1bHQgOiBcIiBcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3JzOiB7fSxcclxuICAgICAgICBiZXRzdGF0dXMgOiBmYWxzZSxcclxuICAgICAgICB0b2FzdCA6IGZhbHNlLCBcclxuICAgICAgICBsb2FkaW5nIDogdHJ1ZSxcclxuICAgICAgICBjb25uZWN0ZWQgOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29ubmVjdGVkJyksXHJcbiAgICAgICAgdmFsaWRhdGlvbmRhdGUgOiB0cnVlXHJcbiAgICB9O1xyXG4gICAgc291cmNlID0gYXhpb3MuQ2FuY2VsVG9rZW4uc291cmNlKCk7XHJcbiAgICBzY2hlbWEgPSB7XHJcbiAgICAgICAgaG9tZXJlc3VsdCA6IEpvaS5udW1iZXIoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgIGF3YXlyZXN1bHQgOiBKb2kubnVtYmVyKCkucmVxdWlyZWQoKVxyXG4gICAgfTtcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgdGhpcy5nZXRCZXRzKCk7XHJcbiAgICAgICAgdGhpcy5nZXRWYWxpZGF0aW9uRGF0ZSgpXHJcbiAgICB9O1xyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc291cmNlKSB7XHJcbiAgICAgICAgICB0aGlzLnNvdXJjZS5jYW5jZWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRWYWxpZGF0aW9uRGF0ZSgpe1xyXG4gICAgICAgIGNvbnN0IG1hdGNoZGF0ZSA9IHRoaXMucHJvcHMubWF0Y2guZGF0ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ2xvbmcnICwgZGF5OiBcIm51bWVyaWNcIn07XHJcbiAgICAgICAgY29uc3QgbmV3ZGF0ZSA9IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCdmci1GUicsb3B0aW9ucyk7XHJcbiAgICAgICAgY29uc3QgbWF0Y2h0aW1lID0gTnVtYmVyKHRoaXMucHJvcHMubWF0Y2gudGltZS5zcGxpdCgnaCcpLmpvaW4oJycpKVxyXG4gICAgICAgIGNvbnN0IHRpbWUgPSBkYXRlLmdldEhvdXJzKClcclxuICAgICAgICBpZihtYXRjaGRhdGUgPT09IG5ld2RhdGUgJiYgbWF0Y2h0aW1lIC0gdGltZSA8PSAxKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGlvbmRhdGUgOiBmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0QmV0cygpe1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNvbm5lY3RlZCA9PT0gJ3RydWUnKXtcclxuICAgICAgICBjb25zdCBkYXRhID0geyB1c2VyaWQgOiBOdW1iZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkJykpICwgbWF0Y2hpZCA6IHRoaXMucHJvcHMubWF0Y2guX2lkfTtcclxuICAgICAgICBheGlvcyh7IG1ldGhvZCA6ICdQT1NUJyAsIHVybDogJ2FwaS9nZXRiZXRzJywgZGF0YSA6IGRhdGEgLCBoZWFkZXJzOiB7J1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnfSAsIGNhbmNlbFRva2VuOiB0aGlzLnNvdXJjZS50b2tlblxyXG4gICAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuaG9tZXNjb3JlKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhIDogeyBob21lcmVzdWx0IDogcmVzLmRhdGEuaG9tZXNjb3JlICwgYXdheXJlc3VsdCA6IHJlcy5kYXRhLmF3YXlzY29yZSB9LCBsb2FkaW5nIDogZmFsc2UgLCBiZXRzdGF0dXMgOiB0cnVlfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhIDogeyBob21lcmVzdWx0IDogJycgLCBhd2F5cmVzdWx0IDogJycgfSwgbG9hZGluZyA6IGZhbHNlfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nIDogZmFsc2UgfSlcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdmFsaWRhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHthYm9ydEVhcmx5IDogZmFsc2V9O1xyXG4gICAgICAgIGNvbnN0IHtlcnJvcn0gPSBKb2kudmFsaWRhdGUodGhpcy5zdGF0ZS5kYXRhLCB0aGlzLnNjaGVtYSwgb3B0aW9ucyk7XHJcbiAgICAgICAgaWYgKCFlcnJvcikgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgY29uc3QgZXJyb3JzID0ge307XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBlcnJvci5kZXRhaWxzKVxyXG4gICAgICAgICAgICBlcnJvcnNbaXRlbS5wYXRoWzBdXSA9IGl0ZW0ubWVzc2FnZTsgXHJcbiAgICAgICAgcmV0dXJuIGVycm9ycztcclxuICAgIH07XHJcbiAgICBoYW5kbGVDaGFuZ2UgPSAoe2N1cnJlbnRUYXJnZXQgOiBpbnB1dH0pID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gey4uLnRoaXMuc3RhdGUuZGF0YX07XHJcbiAgICAgICAgZGF0YVtpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGF9KTtcclxuICAgIH07XHJcbiAgICBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtoaWRkZW46ZmFsc2V9KVxyXG4gICAgfTtcclxuICAgIGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyBcclxuICAgICAgICBjb25zdCBlcnJvcnMgPSB0aGlzLnZhbGlkYXRlKCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9ycyA6IGVycm9ycyB8fCB7fX0pO1xyXG4gICAgICAgIGlmIChlcnJvcnMpIHJldHVybjsgIFxyXG4gICAgICAgIHRoaXMuZG9TdWJtaXQoKTtcclxuICAgIH07XHJcbiAgICBkb1N1Ym1pdCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICBob21lc2NvcmUgOiB0aGlzLnN0YXRlLmRhdGEuaG9tZXJlc3VsdCxcclxuICAgICAgICAgICAgYXdheXNjb3JlIDogdGhpcy5zdGF0ZS5kYXRhLmF3YXlyZXN1bHQsXHJcbiAgICAgICAgICAgIG1hdGNoaWQgOiB0aGlzLnByb3BzLm1hdGNoLl9pZCxcclxuICAgICAgICAgICAgYmV0aWQgOiB1dWlkdjQoKSxcclxuICAgICAgICAgICAgaG9tZXRlYW0gOiB0aGlzLnByb3BzLm1hdGNoLmhvbWV0ZWFtLFxyXG4gICAgICAgICAgICBhd2F5dGVhbSA6ICB0aGlzLnByb3BzLm1hdGNoLmF3YXl0ZWFtXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5iZXRzdGF0dXMgPT09IGZhbHNlKXtcclxuICAgICAgICAgICAgYXhpb3MoXHJcbiAgICAgICAgICAgICAgICB7bWV0aG9kOiAnUE9TVCcsIHVybDogJ2FwaS9wb3N0YmV0cycsIGRhdGE6IGRhdGEsIGhlYWRlcnM6IHsnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCd9fSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRkZW4gOiB0cnVlICwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob21lcmVzdWx0IDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YXlyZXN1bHQgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZXRzdGF0dXMgOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdCA6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3Quc3VjY2VzcygnUHJvbm9zdGljIHZhbGlkw6khJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0Nsb3NlOiAzMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgZG9jdW1lbnQubG9jYXRpb24uaHJlZj1cIi9tYXRjaGVzXCIgfSwzMjAwKTtcclxuICAgICAgICAgICAgICAgIH07ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdG9hc3QuZXJyb3IoJ1ZldWlsbGV6IHLDqWVzc2F5ZXInLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0Nsb3NlOiAzMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuc2V0U3RhdGUoe3RvYXN0IDogZmFsc2V9KX0sNjAwMCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBheGlvcyh7bWV0aG9kOidQT1NUJyx1cmw6J2FwaS91cGRhdGViZXRzJywgZGF0YTpkYXRhLCBoZWFkZXJzOiB7J1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnfX0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpPT4ge2lmIChyZXMuc3RhdHVzID09PSAyMDApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGRlbiA6IHRydWUgLCBcclxuICAgICAgICAgICAgICAgICAgICBkYXRhIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBob21lcmVzdWx0IDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXdheXJlc3VsdCA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgICAgICAgICBiZXRzdGF0dXMgOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0IDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7IFxyXG4gICAgICAgICAgICAgICAgdG9hc3Quc3VjY2VzcygnUHJvbm9zdGljIG1vZGlmacOpIScsIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICBhdXRvQ2xvc2U6IDMwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VCdXR0b246IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgZG9jdW1lbnQubG9jYXRpb24uaHJlZj1cIi9tYXRjaGVzXCIgfSwzMjAwKTtcclxuICAgICAgICAgICAgfX0pO1xyXG4gICAgICAgIH07ICAgICAgIFxyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7aGlkZGVuLCBkYXRhICwgZXJyb3JzICwgaW5wdXRlcnJvcnMgLCBiZXRzdGF0dXMgLCB0b2FzdCAsIGNvbm5lY3RlZCAsIGxvYWRpbmcgLCB2YWxpZGF0aW9uZGF0ZX0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHttYXRjaH0gPSB0aGlzLnByb3BzO1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XHJcbiAgICAgICAgICAgICAgICB7dG9hc3Q/IDxUb2FzdENvbnRhaW5lci8+IDogbnVsbH0gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8aDM+e21hdGNoLmRhdGV9IC0ge21hdGNoLnRpbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgIDxoND5Hcm91cGUge21hdGNoLmdyb3VwfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8cD57bWF0Y2gubG9jYXRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgPHByZSBjbGFzc05hbWU9XCJtYXRjaGRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImhvbWV0ZWFtaW1nXCIgc3JjPXtgL2ltYWdlcy8ke21hdGNoLmhvbWV0ZWFtfS5zdmdgfS8+XHJcbiAgICAgICAgICAgICAgICAgICAge21hdGNoLmhvbWV0ZWFtfSB7bWF0Y2guaG9tZXNjb3JlfSAtIHttYXRjaC5hd2F5c2NvcmV9IHttYXRjaC5hd2F5dGVhbX1cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImF3YXl0ZWFtaW1nXCIgc3JjPXtgL2ltYWdlcy8ke21hdGNoLmF3YXl0ZWFtfS5zdmdgfS8+XHJcbiAgICAgICAgICAgICAgICA8L3ByZT5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7bG9hZGluZyA9PT0gdHJ1ZSA/IDxMb2FkZXIvPiA6IFxyXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30gY2xhc3NOYW1lPXtoaWRkZW4gPyAnYnV0dG9uIGJldGJ1dHRvbiBpcy1wcmltYXJ5JyA6ICdoaWRkZW4nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2JldHN0YXR1cz8gJ1ZvaXIgdm90cmUgcHJvbm9zdGljJyA6IFwiUGFyaWVyIHN1ciBjZSBtYXRjaFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtoaWRkZW4gPyAnaGlkZGVuJyA6ICdiZXRnYW1lcyd9PlxyXG4gICAgICAgICAgICAgICAge2Nvbm5lY3RlZCA9PT0gXCJ0cnVlXCIgPyAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxlbT57bWF0Y2guaG9tZXRlYW0rXCIgXCJ9PC9lbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb25kYXRlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImhvbWVyZXN1bHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEuaG9tZXJlc3VsdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzY29yZSBob21lcmVzdWx0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnNbXCJob21lcmVzdWx0XCJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGI+e2RhdGEuaG9tZXJlc3VsdH08L2I+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+IC0gPC9iPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb25kYXRlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImF3YXlyZXN1bHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEuYXdheXJlc3VsdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2lucHV0ZXJyb3JzPyAnaW5wdXRlcnJvcnMnIDogJ3Njb3JlJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPiB7ZGF0YS5hd2F5cmVzdWx0fTwvYj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxlbT4ge21hdGNoLmF3YXl0ZWFtfSA8L2VtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dmFsaWRhdGlvbmRhdGUgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVTdWJtaXR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMudmFsaWRhdGUoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPS1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gOm51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8cD5Wb3VzIGRldmV6IMOqdHJlIGNvbm5lY3TDqSBwb3VyIHBsYWNlciB1biBwcm9ub3N0aWMuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IEJldHM7IiwiaW1wb3J0IHsgbWF0Y2hlcyB9IGZyb20gJ2xvZGFzaC1lcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBDb21pbmdNYXRjaGVzID0gKHtkYXRhfSkgPT4ge1xyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21pbmdtYXRjaGVzXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZSBpcy0zXCI+UHJvY2hhaW5zIG1hdGNoZXM8L2gzPlxyXG4gICAgICAgICAgICB7ZGF0YS5tYXAobWF0Y2ggPT4gXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIiBrZXk9e21hdGNoLl9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGI+e21hdGNoLmRhdGV9PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPnttYXRjaC5ob21ldGVhbX0gLSB7bWF0Y2guYXdheXRlYW19PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBDb21pbmdNYXRjaGVzOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBGaWx0ZXIgPSAoe2l0ZW1zLG9uSXRlbVNlbGVjdCxzZWxlY3RlZEl0ZW0sbGFiZWx9KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi10cmlnZ2VyXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5GaWx0cmVyIHBhciB7bGFiZWwudG9Mb3dlckNhc2UoKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGlzLXNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2FuZ2xlZG93bi5zdmdcIi8+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9eycnID09PSBzZWxlY3RlZEl0ZW0gPyAnc2VsZWN0aW9uIGlzLXNlbGVjdGVkJyA6ICdzZWxlY3Rpb24nfSBvbkNsaWNrPXsgKCkgPT4gb25JdGVtU2VsZWN0KCdBbGwnKX0+VG91czwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1zLm1hcChpdGVtID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aXRlbSA9PT0gc2VsZWN0ZWRJdGVtID8gJ3NlbGVjdGlvbiBpcy1zZWxlY3RlZCcgOiAnc2VsZWN0aW9uJ30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gb25JdGVtU2VsZWN0KGl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWwgIT09ICdHcm91cGUgJz8gaXRlbSA6IGxhYmVsICsgaXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICl9ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXI7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgY29ubmVjdGVkIDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Nvbm5lY3RlZCcpLFxyXG4gICAgICAgIG1vYmlsZW1lbnUgOiBmYWxzZSxcclxuICAgICAgICBpc0FjdGl2ZSA6IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2dvdXQoKXtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29ubmVjdGVkJywnZmFsc2UnKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnaWQnKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnL2FwaS9sb2dvdXQnKTtcclxuICAgIH07XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7Y29ubmVjdGVkICwgaXNBY3RpdmV9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICByZXR1cm4gKCBcclxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvaG9tZVwiPjxpbWcgc3JjPVwiL2ltYWdlcy9ldXJvMjAyMC1sb2dvLnN2Z1wiIHdpZHRoPVwiNzBcIj48L2ltZz48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHt0aGlzLnNldFN0YXRlKHtpc0FjdGl2ZSA6ICFpc0FjdGl2ZX0pfX0gY2xhc3NOYW1lPXtpc0FjdGl2ZT9cIm5hdmJhci1idXJnZXIgaXMtYWN0aXZlXCI6XCJuYXZiYXItYnVyZ2VyXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aXNBY3RpdmU/XCJuYXZiYXItbWVudSBpcy1hY3RpdmVcIjpcIm5hdmJhci1tZW51XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaXRlbSBoYXMtZHJvcGRvd24gaXMtaG92ZXJhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiPk1hdGNoZXM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1kcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9tYXRjaGVzXCIgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5QaGFzZSBkZSBHcm91cGU8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8TGluayB0bz1cIi8jXCIgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5QaGFzZSBmaW5hbGU8L0xpbms+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9yYW5raW5nXCIgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5DbGFzc2VtZW50PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29ubmVjdGVkPT09J3RydWUnP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2FjY291bnRcIiBjbGFzc05hbWU9XCJidXR0b24gaXMtcHJpbWFyeVwiPk1vbiBjb21wdGU8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMub25Mb2dvdXR9ICBjbGFzc05hbWU9XCJidXR0b24gaXMtd2FybmluZ1wiPkTDqWNvbm5lY3Rpb248L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9sb2dpblwiIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1wcmltYXJ5XCI+Q29ubmVjdGlvbjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3NpZ251cFwiIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1pbmZvXCI+PHN0cm9uZz5DcsOpZXIgdW4gY29tcHRlPC9zdHJvbmc+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IENvbWluZ01hdGNoZXMgZnJvbSAnLi9Db21pbmdNYXRjaGVzJztcclxuaW1wb3J0IHsgVHdpdHRlclRpbWVsaW5lRW1iZWQgfSBmcm9tICdyZWFjdC10d2l0dGVyLWVtYmVkJztcclxuaW1wb3J0IFdlbGNvbWVNb2RhbCBmcm9tICcuL1dlbGNvbWVNb2RhbCc7XHJcblxyXG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0ZSA9IHsgXHJcbiAgICAgICAgbWF0Y2hlcyA6IFtdLFxyXG4gICAgICAgIHNob3dtb2RhbCA6IGZhbHNlXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgdGhpcy5nZXRNYXRjaGVzKCk7XHJcbiAgICAgICAgY29uc3QgY29ubmVjdGVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Nvbm5lY3RlZCcpO1xyXG4gICAgICAgIGlmIChjb25uZWN0ZWQgPT09ICd0cnVlJykgdGhpcy5nZXRVc2VyKCk7XHJcbiAgICAgICAgdGhpcy5zaG93TW9kYWwoKVxyXG4gICAgICAgIFxyXG4gICAgfTtcclxuICAgIHNob3dNb2RhbCgpe1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93bW9kYWwgOiB0cnVlfSlcclxuICAgICAgICB9LCAzMDAwKTtcclxuICAgIH1cclxuICAgIGdldFVzZXIoKXtcclxuICAgICAgICBheGlvcy5nZXQoJ2FwaS9nZXRVc2VySWQnKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpZCcscmVzLmRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGdldE1hdGNoZXMoKXtcclxuICAgICAgICBheGlvcy5nZXQoYGh0dHBzOi8vcG9ydGZvbGlvLTcyMTQ3LWRlZmF1bHQtcnRkYi5ldXJvcGUtd2VzdDEuZmlyZWJhc2VkYXRhYmFzZS5hcHAvbWF0Y2hlcy5qc29uYCkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbWF0Y2hlcyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCByZXMuZGF0YS5sZW5ndGggOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhW2ldLmhvbWVzY29yZSA9PT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcy5wdXNoKHJlcy5kYXRhW2ldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHttYXRjaGVzIDogbWF0Y2hlcy5zbGljZSgwLDQpfSkgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7bWF0Y2hlcyAsIHNob3dtb2RhbH0gPSB0aGlzLnN0YXRlXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaGVhZGVyaW1nXCI+XHJcbiAgICAgICAgICAgICAgICB7c2hvd21vZGFsPzxXZWxjb21lTW9kYWwvPjpudWxsfVxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2V1cm8yMDIwLWxvZ28uc3ZnXCIvPiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxDb21pbmdNYXRjaGVzIGRhdGE9e21hdGNoZXN9Lz5cclxuICAgICAgICAgICAgICAgIDxUd2l0dGVyVGltZWxpbmVFbWJlZFxyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZVR5cGU9XCJwcm9maWxlXCJcclxuICAgICAgICAgICAgICAgICAgICBzY3JlZW5OYW1lPVwiZXF1aXBlZGVmcmFuY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3toZWlnaHQ6IDUwMCAsIHdpZHRoIDogMzAwfX1cclxuICAgICAgICAgICAgICAgICAgICBsYW5nPVwiZnJcIlxyXG4gICAgICAgICAgICAgICAgLz4gICAgIFxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+ICAgICAgICAgICBcclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuICAgIFxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBKb2kgZnJvbSAnam9pLWJyb3dzZXInO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHRvYXN0LCBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IEZvcm0gZnJvbSAnLi9jb21tb24vZm9ybSc7XHJcbmltcG9ydCBVc2VyTG9hZGVyIGZyb20gJy4vY29tbW9uL3VzZXJsb2FkZXInO1xyXG5cclxuY2xhc3MgU2lnbnVwIGV4dGVuZHMgRm9ybSB7XHJcbiAgICBzdGF0ZSA9IHsgXHJcbiAgICAgICAgZGF0YSA6IHtcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lIDogXCJcIixcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkIDogXCJcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBlcnJvcnMgOiB7fSxcclxuICAgICAgICBlcnJvcnNjb3VudCA6IDAsXHJcbiAgICAgICAgbG9hZGluZyA6IGZhbHNlLFxyXG4gICAgICAgIGJ1dHRvblRleHQgOiBcIlZhbGlkZXJcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIHNjaGVtYSA9IHtcclxuICAgICAgICB1c2VybmFtZSA6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLm1heCg0MCksXHJcbiAgICAgICAgcGFzc3dvcmQgOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKS5taW4oOCkubWF4KDI1KVxyXG4gICAgfVxyXG4gICAgZG9TdWJtaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZyA6IHRydWUgLCBidXR0b25UZXh0IDogXCJDaGFyZ2VtZW50Li4uXCJ9KVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lIDogdGhpcy5zdGF0ZS5kYXRhLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICBwYXNzd29yZCA6IHRoaXMuc3RhdGUuZGF0YS5wYXNzd29yZCxcclxuICAgICAgICB9XHJcbiAgICAgICAgYXhpb3Moe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiAnYXBpL2xvZ2luJyxcclxuICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgaGVhZGVyczogeydYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J30gICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOmZhbHNlICwgYnV0dG9uVGV4dCA6IFwiVmFsaWRlclwifSlcclxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCl7XHJcbiAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MocmVzLmRhdGEubWVzc2FnZSwgdGhpcy50b2FzdG9wdGlvbnMpO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29ubmVjdGVkJywndHJ1ZScpXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoICgpID0+IHtkb2N1bWVudC5sb2NhdGlvbi5ocmVmPVwiL2hvbWVcIiB9LDIxMDApIFxyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOmZhbHNlICwgYnV0dG9uVGV4dCA6IFwiQ2hhcmdlbWVudC4uLlwifSlcclxuICAgICAgICAgICAgdG9hc3QuZXJyb3IoJ1bDqXJpZmlleiB2b3MgaWRlbnRpZmlhbnRzJywgdGhpcy50b2FzdG9wdGlvbnMpO1xyXG4gICAgICAgICAgICBsZXQgZXJyb3JzY291bnQgPSB0aGlzLnN0YXRlLmVycm9yc2NvdW50O1xyXG4gICAgICAgICAgICBlcnJvcnNjb3VudCsrXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yc2NvdW50OmVycm9yc2NvdW50ICwgZGF0YSA6IHsgdXNlcm5hbWUgOiBcIlwiICwgcGFzc3dvcmQgOiBcIlwifSAsIGJ1dHRvblRleHQgOlwiVmFsaWRlclwifSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkgeyBcclxuICAgICAgICBjb25zdCB7ZXJyb3JzY291bnQsIGxvYWRpbmcgLCBidXR0b25UZXh0IH0gPSB0aGlzLnN0YXRlXHJcbiAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8VG9hc3RDb250YWluZXIvPlxyXG4gICAgICAgICAgICAgICAge2xvYWRpbmcgPT09IHRydWUgPyA8VXNlckxvYWRlci8+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPkNvbm5lY3Rpb248L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgyPlBhcyBkZSBjb21wdGU/IENsaXF1ZXogPExpbmsgdG89XCJzaWdudXBcIj5pY2k8L0xpbms+IHBvdXIgZW4gY3LDqWVyIHVuLjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInNpZ251cC1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVySW5wdXQoJ3VzZXJuYW1lJywnTm9tIGRcXCd1dGlsaXNhdGV1ciA6JywndGV4dCcsJ2lucHV0Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVySW5wdXQoJ3Bhc3N3b3JkJywnTW90IGRlIHBhc3NlIDonLCdwYXNzd29yZCcsJ2lucHV0Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAge2Vycm9yc2NvdW50ID49IDMgPyA8ZW0+Vm91cyBhdmV6IG91Ymxpw6kgdm90cmUgbW90IGRlIHBhc3NlID8gQ2xpcXVleiA8TGluayB0bz1cIi9uZXdwYXNzd29yZFwiPmljaTwvTGluaz4gcG91ciBsZSByw6lpbml0bGFpaXNlcjwvZW0+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIGlzLWdyb3VwZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQnV0dG9uKGJ1dHRvblRleHQsJ2J1dHRvbiBpcy1zdWNjZXNzJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2hvbWVcIiBjbGFzc05hbWU9XCJidXR0b24gaXMtaW5mb1wiPkFubnVsZXI8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBTaWdudXA7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcclxuaW1wb3J0IEJldHMgZnJvbSAnLi9CZXRzJztcclxuaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4vY29tbW9uL3BhZ2luYXRpb24nO1xyXG5pbXBvcnQgeyBwYWdpbmF0ZSB9IGZyb20gJy4uL3V0aWxpdGllcy9wYWdpbmF0ZSc7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcblxyXG5cclxuY2xhc3MgTWF0Y2hlcyBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhdGUgPSB7IFxyXG4gICAgICAgIG1hdGNoZXMgOiBbXSxcclxuICAgICAgICBzZWxlY3RlZE1hdGNoZXMgOiBbXSxcclxuICAgICAgICBncm91cHM6IFtdLCBcclxuICAgICAgICBzZWxlY3RlZEdyb3VwIDogJycsXHJcbiAgICAgICAgZGF0ZXMgOiBbXSAsXHJcbiAgICAgICAgc2VsZWN0ZWREYXRlIDogJycsXHJcbiAgICAgICAgdGVhbXMgOiBbXSxcclxuICAgICAgICBzZWxlY3RlZFRlYW0gOiAnJyxcclxuICAgICAgICBjdXJyZW50UGFnZSA6IDEgLFxyXG4gICAgICAgIHBhZ2VTaXplIDogNixcclxuICAgICAgICBkYXRlIDogbmV3IERhdGUoJ2QtTS1ZJylcclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgdGhpcy5nZXRNYXRjaGVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWF0Y2hlcygpIHsgICAgICAgIFxyXG4gICAgICAgIGF4aW9zLmdldChgaHR0cHM6Ly9wb3J0Zm9saW8tNzIxNDctZGVmYXVsdC1ydGRiLmV1cm9wZS13ZXN0MS5maXJlYmFzZWRhdGFiYXNlLmFwcC9tYXRjaGVzLmpzb25gKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoaWQgPSBOdW1iZXIodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2guc2xpY2UoNykpO1xyXG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gcmVzLmRhdGEuc2xpY2UoMCwzNik7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGVzID0gW107XHJcbiAgICAgICAgICAgIGNvbnN0IHRlYW1zID0gW107XHJcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwcyA9IFtdO1xyXG4gICAgICAgICAgICBtYXRjaGVzLm1hcCggbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGVzLmluY2x1ZGVzKG0uZGF0ZSkpIGRhdGVzLnB1c2gobS5kYXRlKTtcclxuICAgICAgICAgICAgICAgIGlmICghdGVhbXMuaW5jbHVkZXMobS5ob21ldGVhbSkpIHRlYW1zLnB1c2gobS5ob21ldGVhbSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWdyb3Vwcy5pbmNsdWRlcyhtLmdyb3VwKSkgZ3JvdXBzLnB1c2gobS5ncm91cCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsZXQgc2luZ2xlbWF0Y2ggPSBbXVxyXG4gICAgICAgICAgICBpZihtYXRjaGlkICE9IFwiXCIgJiYgbWF0Y2hpZCA8PSBtYXRjaGVzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICBzaW5nbGVtYXRjaC5wdXNoKG1hdGNoZXMuZmluZChtID0+IG1hdGNoaWQgPT0gbS5faWQpIClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtYXRjaGVzICwgdGVhbXMgOiB0ZWFtcy5zb3J0KCkgLCBkYXRlcyAsIGdyb3VwcyAsIHNlbGVjdGVkTWF0Y2hlcyA6IHNpbmdsZW1hdGNoIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtYXRjaGVzICwgdGVhbXMgOiB0ZWFtcy5zb3J0KCkgLCBkYXRlcyAsIGdyb3VwcyAsIHNlbGVjdGVkTWF0Y2hlcyA6IG1hdGNoZXMgfSlcclxuICAgICAgICAgICAgfSAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGhhbmRsZVBhZ2VDaGFuZ2UgPSAocGFnZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50UGFnZSA6IHBhZ2V9KTtcclxuICAgIH07XHJcbiAgICBoYW5kbGVHcm91cEZpbHRlciA9IChncm91cCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBbLi4udGhpcy5zdGF0ZS5tYXRjaGVzXTtcclxuICAgICAgICBpZiAoZ3JvdXAgPT09ICdBbGwnKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkTWF0Y2hlcyA6IG1hdGNoZXMgLCBzZWxlY3RlZEdyb3VwIDonJ30pO1xyXG4gICAgICAgIH0gIFxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkTWF0Y2hlcyA9IG1hdGNoZXMuZmlsdGVyKCBtID0+IG0uZ3JvdXAgPT09IGdyb3VwKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRNYXRjaGVzICwgc2VsZWN0ZWRHcm91cCA6IGdyb3VwICwgc2VsZWN0ZWRUZWFtIDogJycgLCBzZWxlY3RlZERhdGUgOiAnJyAsIGN1cnJlbnRQYWdlOiAxfSk7XHJcbiAgICAgICAgfSAgXHJcbiAgICB9O1xyXG4gICAgaGFuZGxlRGF0ZUZpbHRlciA9IChkYXRlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IFsuLi50aGlzLnN0YXRlLm1hdGNoZXNdO1xyXG4gICAgICAgIGlmIChkYXRlID09PSAnQWxsJyl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZE1hdGNoZXMgOiBtYXRjaGVzICwgc2VsZWN0ZWREYXRlIDonJ30pXHJcbiAgICAgICAgfSAgICAgIFxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkTWF0Y2hlcyA9IG1hdGNoZXMuZmlsdGVyKCBtID0+IG0uZGF0ZSA9PT0gZGF0ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkTWF0Y2hlcyAsIHNlbGVjdGVkRGF0ZSA6IGRhdGUgLCBzZWxlY3RlZFRlYW0gOiAnJyAsIHNlbGVjdGVkR3JvdXAgOiAnJywgY3VycmVudFBhZ2U6IDF9KTtcclxuICAgICAgICB9ICBcclxuICAgIH07XHJcbiAgICBoYW5kbGVUZWFtRmlsdGVyID0gKHRlYW0pID0+IHtcclxuICAgICAgICBjb25zdCBtYXRjaGVzID0gWy4uLnRoaXMuc3RhdGUubWF0Y2hlc107XHJcbiAgICAgICAgaWYgKHRlYW0gPT09ICdBbGwnKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkTWF0Y2hlcyA6IG1hdGNoZXMgLCBzZWxlY3RlZFRlYW0gOiAnJywgY3VycmVudFBhZ2U6IDF9KVxyXG4gICAgICAgIH0gICAgICBcclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZE1hdGNoZXMgPSBtYXRjaGVzLmZpbHRlciggbSA9PiBtLmhvbWV0ZWFtID09PSB0ZWFtIHx8IG0uYXdheXRlYW0gPT09IHRlYW0pO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZE1hdGNoZXMgLCBzZWxlY3RlZFRlYW0gOiB0ZWFtICwgc2VsZWN0ZWREYXRlIDogJycgLCBzZWxlY3RlZEdyb3VwIDogJyd9KTtcclxuICAgICAgICB9ICBcclxuICAgIH07XHJcbiAgICBnZXRQYWdlZERhdGEgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBwYWdlU2l6ZSwgY3VycmVudFBhZ2UsIHNlbGVjdGVkTWF0Y2hlc30gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IG1hdGNoTGlzdFBlclBhZ2UgPSBwYWdpbmF0ZShzZWxlY3RlZE1hdGNoZXMsY3VycmVudFBhZ2UscGFnZVNpemUpO1xyXG4gICAgICAgIHJldHVybiB7IHRvdGFsQ291bnQ6IHNlbGVjdGVkTWF0Y2hlcy5sZW5ndGgsIGRhdGE6IG1hdGNoTGlzdFBlclBhZ2V9XHJcbiAgICB9XHJcbiAgICBwcmV2aW91c1BhZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHtjdXJyZW50UGFnZX0gPSB0aGlzLnN0YXRlXHJcbiAgICAgICAgaWYgKGN1cnJlbnRQYWdlID4xICl7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlLS1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFBhZ2V9KVxyXG4gICAgfSAgICBcclxuICAgIG5leHRQYWdlID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCB7Y3VycmVudFBhZ2Usc2VsZWN0ZWRNYXRjaGVzLHBhZ2VTaXplfSA9IHRoaXMuc3RhdGVcclxuICAgICAgICBpZiAoY3VycmVudFBhZ2UgPCBNYXRoLmNlaWwoc2VsZWN0ZWRNYXRjaGVzLmxlbmd0aCAvIHBhZ2VTaXplKSApe1xyXG4gICAgICAgICAgICBjdXJyZW50UGFnZSsrXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRQYWdlfSlcclxuICAgIH0gICAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBwYWdlU2l6ZSAsIGN1cnJlbnRQYWdlICwgc2VsZWN0ZWRHcm91cCwgc2VsZWN0ZWREYXRlICwgc2VsZWN0ZWRUZWFtICwgZGF0ZXMgLCAgZ3JvdXBzICwgdGVhbXMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgeyB0b3RhbENvdW50ICwgZGF0YSB9ID0gdGhpcy5nZXRQYWdlZERhdGEoKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hdGNoZXNjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5QaGFzZSBkZSBHcm91cGU8L2gxPjxoci8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duIGlzLWhvdmVyYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaWx0ZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXsnR3JvdXBlICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtncm91cHN9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW09e3NlbGVjdGVkR3JvdXB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSXRlbVNlbGVjdD17dGhpcy5oYW5kbGVHcm91cEZpbHRlcn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duIGlzLWhvdmVyYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaWx0ZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXsnRGF0ZSAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17ZGF0ZXN9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW09e3NlbGVjdGVkRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25JdGVtU2VsZWN0PXt0aGlzLmhhbmRsZURhdGVGaWx0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93biBpcy1ob3ZlcmFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8RmlsdGVyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17J0VxdWlwZSAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17dGVhbXN9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW09e3NlbGVjdGVkVGVhbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25JdGVtU2VsZWN0PXt0aGlzLmhhbmRsZVRlYW1GaWx0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXRjaGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEubWFwKG1hdGNoID0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJldHMgbWF0Y2g9e21hdGNofSBrZXk9e21hdGNoLl9pZH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtc0NvdW50PXt0b3RhbENvdW50fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU9e3BhZ2VTaXplfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUGFnZUNoYW5nZT17dGhpcy5oYW5kbGVQYWdlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1BhZ2U9e3RoaXMucHJldmlvdXNQYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0UGFnZT17dGhpcy5uZXh0UGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgTWF0Y2hlczsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vY29tbW9uL0xvYWRlcic7XHJcblxyXG5jbGFzcyBSYW5raW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0geyBcclxuICAgICAgICBkYXRhIDoge1xyXG4gICAgICAgICAgICB1c2VycyA6IFtdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb2FkaW5nIDogZmFsc2VcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgdGhpcy5nZXRVc2VycygpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXNlcnMoKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOnRydWV9KVxyXG4gICAgICAgIGF4aW9zLmdldCgnL2FwaS91c2VyL2dldEFsbCcpLnRoZW4oKHJlcykgPT4gXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YSA6IHt1c2VycyA6IHJlcy5kYXRhLnVzZXJuYW1lc30gLCBsb2FkaW5nIDogZmFsc2V9KSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7IFxyXG4gICAgICAgIGNvbnN0IHt1c2Vyc30gPSB0aGlzLnN0YXRlLmRhdGFcclxuICAgICAgICBjb25zdCB7bG9hZGluZ30gPSB0aGlzLnN0YXRlXHJcbiAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICB7Lyoge2xvYWRpbmc/IDxMb2FkZXIvPiA6XHJcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5VdGlsaXNhdGV1cnM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dXNlcnMubWFwKHVzZXIgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e3VzZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt1c2VyfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+fSAqL31cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGUgaXMtMVwiPkNsYXNzZW1lbnQgw6AgdmVuaXIhITwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlmcmFtZSBzcmM9J2h0dHBzOi8vZ2Z5Y2F0LmNvbS9pZnIvQ2hlZXJ5VmFndWVFbGtob3VuZCcgZnJhbWVCb3JkZXI9JzAnIHNjcm9sbGluZz0nbm8nIHdpZHRoPSc2NDAnIGhlaWdodD0nMzYxJz48L2lmcmFtZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFJhbmtpbmc7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBXZWxjb21lTW9kYWwgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBtb2RhbHZpZXcgOiBmYWxzZSxcclxuICAgICAgICBtb2RhbHNob3cgOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXMnKSAhPT0gJ3knXHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21vZGFsdmlldzp0cnVlfSlcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHttb2RhbHZpZXcsbW9kYWxzaG93fSA9IHRoaXMuc3RhdGVcclxuICAgICAgICByZXR1cm4gKCBcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgeyBtb2RhbHNob3cgP1xyXG4gICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXttb2RhbHZpZXc/J21vZGFsIGlzLWFjdGl2ZSc6J21vZGFsJ30gXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxtZXNzYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+e3RoaXMuc2V0U3RhdGUoe21vZGFsdmlldzpmYWxzZX0pO2xvY2FsU3RvcmFnZS5zZXRJdGVtKCdtcycsJ3knKX19IFxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg4pyWXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJpZW52ZW51ZSBzdXIgY2Ugc2l0ZSBkZSBwcm9ub3N0aWNzIHN1ciBsZXMgbWF0Y2hlcyBsJ1VFRkEgRVVSTyAyMDIwPHN1cD5UTTwvc3VwPi48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBJY2kgcXVlIGR1IGZ1biwgcGFzIGRlIG1pc2VzIGQnYXJnZW50LCBqdXN0ZSB1biBwZXRpdCBqZXUgZ3JhdHVpdCBwb3VyIHNlIGRpdmVydGlyIS48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBdWN1bmUgZG9ubsOpZSBuZSBzZXJhIGNvbGxlY3TDqWUgb3UgcmV2ZW5kdWUgPHNwYW4+8J+Ygzwvc3Bhbj4uXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQcsOqdCDDoCBqb3Vlcj9cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9Pnt0aGlzLnNldFN0YXRlKHttb2RhbHZpZXc6ZmFsc2V9KTtsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXMnLCd5Jyl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtcHJpbWFyeSBpcy1sYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDJ2VzdCBwYXJ0aSAhXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+OlxyXG4gICAgICAgICAgICBudWxsfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgV2VsY29tZU1vZGFsOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBMb2FkZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKCBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxkcy1yb2xsZXJcIj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PC9kaXY+XHJcbiAgICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRlcjsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSm9pIGZyb20gJ2pvaS1icm93c2VyJztcclxuaW1wb3J0IElucHV0IGZyb20gJy4vaW5wdXQnO1xyXG5cclxuY2xhc3MgRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHsgXHJcbiAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgZXJyb3JzOiB7fVxyXG4gICAgfVxyXG4gICAgdG9hc3RvcHRpb25zID0ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcInRvcC1jZW50ZXJcIixcclxuICAgICAgICBhdXRvQ2xvc2U6IDMwMDAsXHJcbiAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgY2xvc2VCdXR0b246IGZhbHNlLFxyXG4gICAgfVxyXG4gICAgdmFsaWRhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHthYm9ydEVhcmx5IDogZmFsc2V9O1xyXG4gICAgICAgIGNvbnN0IHtlcnJvcn0gPSBKb2kudmFsaWRhdGUodGhpcy5zdGF0ZS5kYXRhLCB0aGlzLnNjaGVtYSAsIG9wdGlvbnMpO1xyXG4gICAgICAgIGlmICghZXJyb3IpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCBlcnJvcnMgPSB7fTtcclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGVycm9yLmRldGFpbHMpXHJcbiAgICAgICAgICAgIGVycm9yc1tpdGVtLnBhdGhbMF1dID0gaXRlbS5tZXNzYWdlOyBcclxuICAgICAgICByZXR1cm4gZXJyb3JzO1xyXG4gICAgfTtcclxuICAgIHZhbGlkYXRlUHJvcGVydHkgPSAoe25hbWUsdmFsdWV9KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2JqID0geyBbbmFtZV0gOiB2YWx1ZX07XHJcbiAgICAgICAgY29uc3Qgc2NoZW1hID0geyBbbmFtZV0gOiB0aGlzLnNjaGVtYVtuYW1lXX1cclxuICAgICAgICBsZXQgZXJyb3JNZXNzYWdlO1xyXG4gICAgICAgIGlmIChKb2kudmFsaWRhdGUob2JqLHNjaGVtYSkuZXJyb3IgIT09IG51bGwpe1xyXG4gICAgICAgICAgICBpZiAoW25hbWVdWzBdID09PSAndXNlcm5hbWUnKXsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yID0gSm9pLnZhbGlkYXRlKG9iaixzY2hlbWEpLmVycm9yLmRldGFpbHNbMF0udHlwZTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdhbnkuZW1wdHknOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSAnTGUgbm9tIGRcXCd1dGlsaXNhdGV1ciBkb2l0IMOqdHJlIHJlbnNlaWduw6knO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdzdHJpbmcubWF4JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gJ0xlIG5vbSBkXFwndXRpbGlzYXRldXIgbmUgcGV1dCBleGPDqWRlciA0MCBjYXJhY3TDqHJlcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKFtuYW1lXVswXSA9PT0gJ3Bhc3N3b3JkJyl7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IEpvaS52YWxpZGF0ZShvYmosc2NoZW1hKS5lcnJvci5kZXRhaWxzWzBdLnR5cGU7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYW55LmVtcHR5JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gJ0xlIG1vdCBkZSBwYXNzZSBkb2l0IMOqdHJlIHJlbnNlaWduw6knO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdzdHJpbmcubWluJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gJ0xlIG1vdCBkZSBwYXNzZSBkb2l0IGNvbnRlbmlyIGF1IG1vaW5zIDggY2FyYWN0w6hyZXMnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3N0cmluZy5tYXgnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSAnTGUgbW90IGRlIHBhc3NlIG5lIGRvaXQgcGFzIGTDqXBhc3NlciAyNSBjYXJhY3TDqHJlcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKFtuYW1lXVswXSA9PT0gJ2VtYWlsJyl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IEpvaS52YWxpZGF0ZShvYmosc2NoZW1hKS5lcnJvci5kZXRhaWxzWzBdLnR5cGU7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGVycm9yKXtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdzdHJpbmcuZW1haWwnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSAnVmV1aWxsZXogcmVuc2VpZ25lciB1biBlLW1haWwgdmFsaWRlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYW55LmVtcHR5JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gJ0xcXCdhZHJlc3NlIEVtYWlsIGRvaXQgw6p0cmUgcmVuc2VpZ27DqWUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKFtuYW1lXVswXSA9PT0gJ3Bhc3MnKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yID0gSm9pLnZhbGlkYXRlKG9iaixzY2hlbWEpLmVycm9yLmRldGFpbHNbMF0udHlwZTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdhbnkuZW1wdHknOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSAnTGUgY29kZSBkXFwnYWNjw6hzIGRvaXQgw6p0cmUgcmVuc2VpZ27DqSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlcnJvck1lc3NhZ2VcclxuICAgIH07XHJcbiAgICBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgXHJcbiAgICAgICAgY29uc3QgZXJyb3JzID0gdGhpcy52YWxpZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcnMgOiBlcnJvcnMgfHwge319KTtcclxuICAgICAgICBpZiAoZXJyb3JzKSByZXR1cm47ICBcclxuICAgICAgICB0aGlzLmRvU3VibWl0KCk7ICAgICBcclxuICAgIH07XHJcbiAgICBoYW5kbGVDaGFuZ2UgPSAoe2N1cnJlbnRUYXJnZXQgOiBpbnB1dH0pID0+IHtcclxuICAgICAgICBjb25zdCBlcnJvcnMgPSB7Li4udGhpcy5zdGF0ZS5lcnJvcnN9XHJcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gdGhpcy52YWxpZGF0ZVByb3BlcnR5KGlucHV0KVxyXG4gICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIGVycm9yc1tpbnB1dC5uYW1lXSA9IGVycm9yTWVzc2FnZTtcclxuICAgICAgICBlbHNlIGRlbGV0ZSBlcnJvcnNbaW5wdXQubmFtZV07XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7Li4udGhpcy5zdGF0ZS5kYXRhfTtcclxuICAgICAgICBkYXRhW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YSAsIGVycm9ycyB9KVxyXG4gICAgfVxyXG4gICAgcmVuZGVySW5wdXQobmFtZSxsYWJlbCx0eXBlLGNsYXNzTmFtZSl7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhLCBlcnJvcnMgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIHJldHVybiA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfSBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YVtuYW1lXX0gXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2xhYmVsfSBcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9yc1tuYW1lXX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICB9XHJcbiAgICByZW5kZXJCdXR0b24obGFiZWwsY2xhc3NOYW1lKXtcclxuICAgICAgICByZXR1cm4gPGJ1dHRvbiBkaXNhYmxlZD17dGhpcy52YWxpZGF0ZSgpfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e2xhYmVsfTwvYnV0dG9uPlxyXG4gICAgfSAgICBcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IElucHV0ID0gKHtuYW1lLCBsYWJlbCwgdmFsdWUsIGNsYXNzTmFtZSwgdHlwZSwgZXJyb3IsIG9uQ2hhbmdlfSkgPT4ge1xyXG4gICAgXHJcbiAgICByZXR1cm4gKCBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiIGh0bWxGb3I9e25hbWV9PntsYWJlbH08L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Vycm9yPyAnaXNlcnJvciAnK2NsYXNzTmFtZSA6Y2xhc3NOYW1lfSBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPXt0eXBlfSBcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfSBcclxuICAgICAgICAgICAgICAgICAgICBpZD17bmFtZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIHtlcnJvciAmJiA8cCBjbGFzc05hbWU9XCJlcnJvcm1zZ1wiPntlcnJvci5yZXBsYWNlKC9cIi9nLCcnKX0uPC9wPn1cclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IElucHV0OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5jb25zdCBQYWdpbmF0aW9uID0gKHtpdGVtc0NvdW50ICwgcGFnZVNpemUgLCBjdXJyZW50UGFnZSwgb25QYWdlQ2hhbmdlICwgcHJldmlvdXNQYWdlICwgbmV4dFBhZ2V9KSA9PiB7XHJcbiAgICBjb25zdCBwYWdlc0NvdW50ID0gTWF0aC5jZWlsKGl0ZW1zQ291bnQgLyBwYWdlU2l6ZSk7XHJcbiAgICBpZihwYWdlc0NvdW50PT09MSkgcmV0dXJuIG51bGw7XHJcbiAgICBjb25zdCBwYWdlcyA9IF8ucmFuZ2UoMSwgcGFnZXNDb3VudCsxKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicGFnaW5hdGlvbi1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicGFnaW5hdGlvbi1saW5rXCIgb25DbGljaz17cHJldmlvdXNQYWdlfT4mIzYwOzwvbGk+XHJcbiAgICAgICAgICAgICAgICB7IHBhZ2VzLm1hcChwYWdlID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtwYWdlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgcGFnZSA9PT0gY3VycmVudFBhZ2U/IFwicGFnaW5hdGlvbi1saW5rIGlzLWN1cnJlbnRcIiA6IFwicGFnaW5hdGlvbi1saW5rXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uUGFnZUNoYW5nZShwYWdlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cGFnZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9ICAgICAgXHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicGFnaW5hdGlvbi1saW5rXCIgb25DbGljaz17bmV4dFBhZ2V9PiYjNjI7PC9saT4gICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgVXNlckxvYWRlciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGRzLXJpcHBsZVwiPjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48L2Rpdj4gICAgIFxyXG4gICAgICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBVc2VyTG9hZGVyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4vLi4vY29tbW9uL2Zvcm0nO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciAsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgSm9pIGZyb20gJ2pvaS1icm93c2VyJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNsYXNzIFBhc3NVcGRhdGUgZXh0ZW5kcyBGb3JtIHtcclxuICAgIHN0YXRlID0geyBcclxuICAgICAgICBkYXRhIDoge1xyXG4gICAgICAgICAgICBwYXNzd29yZCA6IFwiXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9ycyA6IHt9LCBcclxuICAgICAgICBsb2FkaW5nIDogZmFsc2UsXHJcbiAgICAgICAgYnV0dG9uVGV4dCA6IFwiVmFsaWRlclwiXHJcbiAgICB9XHJcbiAgICBzY2hlbWEgPSB7XHJcbiAgICAgICAgcGFzc3dvcmQgOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKS5taW4oOCkubWF4KDI1KSxcclxuICAgIH1cclxuICAgIGRvU3VibWl0KCl7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5kYXRhLnBhc3N3b3JkKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtwYXNzd29yZCA6IHRoaXMuc3RhdGUuZGF0YS5wYXNzd29yZCAsIGxvYWRpbmcgOiB0cnVlICwgYnV0dG9uVGV4dCA6ICdQYXRpZW50ZXouLi4uJ30pO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7IHVzZXIgOiB0aGlzLnByb3BzLmFsaWFzLCBwYXNzd29yZCA6IHRoaXMuc3RhdGUuZGF0YS5wYXNzd29yZH1cclxuICAgICAgICBheGlvcyh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6ICdhcGkvdXNlci91cGRhdGVQYXNzd29yZCcsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCd9XHJcbiAgICAgICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoJ01vdCBkZSBwYXNzZSBtb2RpZmnDqSBhdmVjIHN1Y2PDqHMgIScsIHRoaXMudG9hc3RvcHRpb25zKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCggKCkgPT4ge2RvY3VtZW50LmxvY2F0aW9uLmhyZWY9XCIvbG9naW5cIiB9LDIxMDApXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHsgXHJcbiAgICAgICAgY29uc3Qge2xvYWRpbmcsYnV0dG9uVGV4dH0gPSB0aGlzLnN0YXRlXHJcbiAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwibmV3cGFzcy1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJJbnB1dCgncGFzc3dvcmQnLCdOb3V2ZWF1IG1vdCBkZSBwYXNzZSAgOicsJ3RleHQnLCdpbnB1dCcpfVxyXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQnV0dG9uKGJ1dHRvblRleHQsJ2J1dHRvbiBpcy1zdWNjZXNzJyl9XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFBhc3NVcGRhdGUgOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4uL2NvbW1vbi9mb3JtJztcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgLCB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IEpvaSBmcm9tICdqb2ktYnJvd3Nlcic7XHJcbmltcG9ydCBQYXNzVXBkYXRlIGZyb20gJy4vcGFzc1VwZGF0ZSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jbGFzcyBVc2VyQ29uZmlybSBleHRlbmRzIEZvcm0ge1xyXG4gICAgc3RhdGUgPSB7IFxyXG4gICAgICAgIGRhdGEgOiB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lIDogXCJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgZXJyb3JzIDoge30sIFxyXG4gICAgYWxpYXMgOiBcIlwiLFxyXG4gICAgbG9hZGluZyA6IGZhbHNlLFxyXG4gICAgYnV0dG9uVGV4dCA6IFwiVmFsaWRlclwiLFxyXG4gICAgdXNlcnF1ZXJ5IDogdHJ1ZVxyXG4gICAgfVxyXG4gICAgc2NoZW1hID0ge1xyXG4gICAgICAgIHVzZXJuYW1lIDogSm9pLnN0cmluZygpLnJlcXVpcmVkKCkubWF4KDQwKSxcclxuICAgIH1cclxuICAgIGRvU3VibWl0KCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWxpYXMgOiB0aGlzLnN0YXRlLmRhdGEudXNlcm5hbWUgLCBidXR0b25UZXh0IDogJ1BhdGllbnRlei4uLid9KVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7IHVzZXJuYW1lIDogdGhpcy5zdGF0ZS5kYXRhLnVzZXJuYW1lfSAgXHJcbiAgICAgICAgYXhpb3Moe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiAnYXBpL2dldFVzZXJOYW1lJyxcclxuICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgaGVhZGVyczogeydYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J31cclxuICAgICAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgaWYocmVzLmRhdGEudXNlciA9PT0gdGhpcy5zdGF0ZS5kYXRhLnVzZXJuYW1lICl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt1c2VycXVlcnkgOiBmYWxzZX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGE6e3VzZXJuYW1lIDogJyd9LGVycm9ycyA6IHt1c2VybmFtZSA6ICcnfSAsIGJ1dHRvblRleHQgOiBcIlZhbGlkZXJcIn0pO1xyXG4gICAgICAgICAgICAgICAgdG9hc3QuZXJyb3IoJ0xlIG5vbSBkXFwndXRpbGlzYXRldXIgblxcJ2V4aXN0ZSBwYXMnLCB0aGlzLnRvYXN0b3B0aW9ucyk7ICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7IFxyXG4gICAgICAgIGNvbnN0IHsgbG9hZGluZyAsIHVzZXJxdWVyeSAsIGFsaWFzICwgYnV0dG9uVGV4dCB9ID0gdGhpcy5zdGF0ZVxyXG4gICAgICAgIHJldHVybiAoIFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyLz5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlJlbm91dmVsbGVtZW50IGRlIG1vdCBkZSBwYXNzZTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cIm5ld3Bhc3MtZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlcklucHV0KCd1c2VybmFtZScsJ1ZvdHJlIG5vbSBkXFwndXRpbGlzYXRldXIgIDonLCd0ZXh0JywnaW5wdXQnKX1cclxuICAgICAgICAgICAgICAgICAgICB7dXNlcnF1ZXJ5PyB0aGlzLnJlbmRlckJ1dHRvbihidXR0b25UZXh0LCdidXR0b24gaXMtc3VjY2VzcycpIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIHt1c2VycXVlcnk/IG51bGwgOiA8UGFzc1VwZGF0ZSBhbGlhcz17YWxpYXN9Lz59XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBVc2VyQ29uZmlybTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSm9pIGZyb20gJ2pvaS1icm93c2VyJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyB0b2FzdCwgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4vY29tbW9uL2Zvcm0nO1xyXG5pbXBvcnQgVXNlckxvYWRlciBmcm9tICcuL2NvbW1vbi91c2VybG9hZGVyJztcclxuXHJcbmNsYXNzIFNpZ251cCBleHRlbmRzIEZvcm0ge1xyXG4gICAgc3RhdGUgPSB7IFxyXG4gICAgICAgIGRhdGEgOiB7XHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZSA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZCA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBlbWFpbCA6IFwiXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBlcnJvcnMgOiB7fSxcclxuICAgICAgICBsb2FkaW5nIDogZmFsc2UsXHJcbiAgICAgICAgYnV0dG9uVGV4dCA6IFwiVmFsaWRlclwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgIHNjaGVtYSA9IHtcclxuICAgICAgICB1c2VybmFtZSA6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLm1heCg0MCksXHJcbiAgICAgICAgcGFzc3dvcmQgOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKS5taW4oOCkubWF4KDI1KSxcclxuICAgICAgICBlbWFpbCA6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLmVtYWlsKClcclxuICAgIH1cclxuICAgIGRvU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6dHJ1ZSAsIGJ1dHRvblRleHQ6IFwiQ2hhcmdlbWVudC4uLlwifSlcclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICB1c2VybmFtZSA6IHRoaXMuc3RhdGUuZGF0YS51c2VybmFtZSxcclxuICAgICAgICAgICAgcGFzc3dvcmQgOiB0aGlzLnN0YXRlLmRhdGEucGFzc3dvcmQsXHJcbiAgICAgICAgICAgIGVtYWlsIDogdGhpcy5zdGF0ZS5kYXRhLmVtYWlsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF4aW9zKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogJ2FwaS91c2VyL25ldycsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCd9ICAgICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzpmYWxzZSAsIGJ1dHRvblRleHQgOiBcIlZhbGlkZXJcIn0pXHJcbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICB0b2FzdC5zdWNjZXNzKHJlcy5kYXRhLm1lc3NhZ2UsIHRoaXMudG9hc3RvcHRpb25zKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvbG9naW4nKX0sMzUwMCl9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOmZhbHNlLCBidXR0b25UZXh0IDogXCJWYWxpZGVyXCJ9KVxyXG4gICAgICAgICAgICB0b2FzdC5lcnJvcignTGUgbm9tIGRcXCd1dGlsaXNhdGV1ciBlc3QgZMOpamEgdXRpbGlzw6knLCB0aGlzLnRvYXN0b3B0aW9ucyk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHsgXHJcbiAgICAgICAgY29uc3QgeyBsb2FkaW5nIH0gPSB0aGlzLnN0YXRlXHJcbiAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8VG9hc3RDb250YWluZXIvPlxyXG4gICAgICAgICAgICAgICAge2xvYWRpbmcgPT09IHRydWUgPyA8VXNlckxvYWRlci8+IDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5DcsOpZXIgdW4gbm91dmVhdSBjb21wdGU8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgyPlZvdXMgYXZleiBkw6lqYSB1biBjb21wdGU/IENsaXF1ZXogPExpbmsgdG89XCJsb2dpblwiPmljaTwvTGluaz4gcG91ciB2b3VzIGNvbm5lY3RlcjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInNpZ251cC1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVySW5wdXQoJ3VzZXJuYW1lJywnQ2hvaXNpciB1biBOb20gZFxcJ3V0aWxpc2F0ZXVyICA6JywndGV4dCcsJ2lucHV0Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVySW5wdXQoJ2VtYWlsJywnUmVuc2VpZ25lciB1bmUgYWRyZXNzZSBFbWFpbCAgOicsJ3RleHQnLCdpbnB1dCcpfVxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlcklucHV0KCdwYXNzd29yZCcsJ0Nyw6llciB1biBNb3QgZGUgcGFzc2UgIDonLCdwYXNzd29yZCcsJ2lucHV0Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBpcy1ncm91cGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckJ1dHRvbignVmFsaWRlcicsJ2J1dHRvbiBpcy1zdWNjZXNzJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2hvbWVcIiBjbGFzc05hbWU9XCJidXR0b24gaXMtaW5mb1wiPkFubnVsZXI8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBTaWdudXA7IiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYWdpbmF0ZShpdGVtcyxwYWdlTnVtYmVyLHBhZ2VTaXplKXtcclxuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSAocGFnZU51bWJlciAtIDEpICogcGFnZVNpemU7XHJcbiAgICByZXR1cm4gXyhpdGVtcykuc2xpY2Uoc3RhcnRJbmRleCkudGFrZShwYWdlU2l6ZSkudmFsdWUoKTtcclxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=