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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
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
      bets: []
    });

    return _this;
  }

  _createClass(Account, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getUserById();
    }
  }, {
    key: "getUserById",
    value: function getUserById() {
      var _this2 = this;

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
        _this2.setState({
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
        _this2.setState({
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
          bets = _this$state.bets;
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
      }, bets.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement(react__WEBPACK_IMPORTED_MODULE_20__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("th", null, "Date du prono"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("th", null, "Match"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("th", null, "Mon pronostic"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("th", null, "R\xE9sultat du match"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("th", null, "Statut du prono"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("tbody", null, bets.map(function (bet) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("tr", {
          key: bet.match_id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("td", null, bet.bet_date.date.slice(0, 10).split('-').reverse().join('/')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("img", {
          src: "/images/".concat(bet.hometeam, ".svg"),
          width: "25px",
          className: "homeimage"
        }), bet.hometeam, " - ", bet.awayteam, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("img", {
          src: "/images/".concat(bet.awayteam, ".svg"),
          width: "25px",
          className: "awayimage"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("td", null, bet.homescore, " - ", bet.awayscore), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("td", null, "Match \xE0 venir"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("td", null, "Match \xE0 venir"));
      }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("p", null, "Vous n'avez pas encore plac\xE9 de pronostics."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("p", null, "Revenez vers les ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_23__.Link, {
        to: "/matches"
      }, "matches"), " pour commencer \xE0 pronostiquer.")))));
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
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _common_Loader__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./common/Loader */ "./assets/components/common/Loader.js");
/* harmony import */ var joi_browser__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! joi-browser */ "./node_modules/joi-browser/dist/joi-browser.js");
/* harmony import */ var joi_browser__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(joi_browser__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
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
      connected: localStorage.getItem('connected')
    });

    _defineProperty(_assertThisInitialized(_this), "source", axios__WEBPACK_IMPORTED_MODULE_31___default().CancelToken.source());

    _defineProperty(_assertThisInitialized(_this), "schema", {
      homeresult: joi_browser__WEBPACK_IMPORTED_MODULE_30___default().number().required(),
      awayresult: joi_browser__WEBPACK_IMPORTED_MODULE_30___default().number().required()
    });

    _defineProperty(_assertThisInitialized(_this), "validate", function () {
      var options = {
        abortEarly: false
      };

      var _Joi$validate = joi_browser__WEBPACK_IMPORTED_MODULE_30___default().validate(_this.state.data, _this.schema, options),
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
        betid: (0,uuid__WEBPACK_IMPORTED_MODULE_32__.default)(),
        hometeam: _this.props.match.hometeam,
        awayteam: _this.props.match.awayteam
      };

      if (_this.state.betstatus === false) {
        axios__WEBPACK_IMPORTED_MODULE_31___default()({
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

            react_toastify__WEBPACK_IMPORTED_MODULE_33__.toast.success('Pronostic validé!', {
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
          react_toastify__WEBPACK_IMPORTED_MODULE_33__.toast.error('Veuillez réessayer', {
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
        axios__WEBPACK_IMPORTED_MODULE_31___default()({
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

            react_toastify__WEBPACK_IMPORTED_MODULE_33__.toast.success('Pronostic modifié!', {
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
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.source) {
        this.source.cancel();
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
        axios__WEBPACK_IMPORTED_MODULE_31___default()({
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
          loading = _this$state.loading;
      var match = this.props.match;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28__.createElement("div", {
        className: "box"
      }, toast ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28__.createElement(react_toastify__WEBPACK_IMPORTED_MODULE_33__.ToastContainer, null) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28__.createElement("h3", null, match.date, " - ", match.time), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28__.createElement("h4", null, "Groupe ", match.group), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28__.createElement("p", null, match.location), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28__.createElement("pre", {
        className: "matchdetails"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28__.createElement("img", {
        className: "hometeamimg",
        src: "/images/".concat(match.hometeam, ".svg")
      }), match.hometeam, " ", match.homescore, " - ", match.awayscore, " ", match.awayteam, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28__.createElement("img", {
        className: "awayteamimg",
        src: "/images/".concat(match.awayteam, ".svg")
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28__.createElement("div", null, loading === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28__.createElement(_common_Loader__WEBPACK_IMPORTED_MODULE_29__.default, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28__.createElement(react__WEBPACK_IMPORTED_MODULE_28__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28__.createElement("button", {
        onClick: this.handleClick,
        className: hidden ? 'button betbutton is-primary' : 'hidden'
      }, betstatus ? 'Voir ou Modifier votre pari' : "Parier sur ce match")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28__.createElement("div", {
        className: hidden ? 'hidden' : 'betgames'
      }, connected === "true" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28__.createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28__.createElement("em", null, match.hometeam, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28__.createElement("input", {
        name: "homeresult",
        value: data.homeresult,
        onChange: this.handleChange,
        type: "text",
        className: "score homeresult",
        error: errors["homeresult"]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28__.createElement("b", null, " - "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28__.createElement("input", {
        name: "awayresult",
        value: data.awayresult,
        onChange: this.handleChange,
        type: "text",
        className: inputerrors ? 'inputerrors' : 'score'
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28__.createElement("em", null, " ", match.awayteam, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28__.createElement("button", {
        onClick: this.handleSubmit,
        disabled: this.validate(),
        type: "button",
        className: "button is-danger"
      }, "OK")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28__.createElement("p", null, "Vous devez \xEAtre connect\xE9 pour placer un pronostic."))));
    }
  }]);

  return Bets;
}(react__WEBPACK_IMPORTED_MODULE_28__.Component);

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
    className: '' === selectedItem ? 'selection is-active' : 'selection',
    onClick: function onClick() {
      return onItemSelect('All');
    }
  }, "Tous"), items.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
      key: item,
      className: item === selectedItem ? 'selection is-active' : 'selection',
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
      connected: localStorage.getItem('connected')
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
      var connected = this.state.connected;
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
        width: "45"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement("div", {
        className: "navbar-menu"
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
      }, "Classement"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement("div", {
        className: "navbar-end"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement("div", {
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
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _ComingMatches__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ComingMatches */ "./assets/components/ComingMatches.js");
/* harmony import */ var react_twitter_embed__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-twitter-embed */ "./node_modules/react-twitter-embed/dist/index.es.js");
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
      matches: []
    });

    return _this;
  }

  _createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getMatches();
      var connected = localStorage.getItem('connected');
      if (connected === 'true') this.getUser();
    }
  }, {
    key: "getUser",
    value: function getUser() {
      axios__WEBPACK_IMPORTED_MODULE_15___default().get('api/getUserId').then(function (res) {
        localStorage.setItem('id', res.data);
      });
    }
  }, {
    key: "getMatches",
    value: function getMatches() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_15___default().get("https://portfolio-72147-default-rtdb.europe-west1.firebasedatabase.app/matches.json").then(function (res) {
        var matches = [];

        for (var i = 0; i < res.data.length; i++) {
          if (res.data[i].homescore === "") {
            matches.push(res.data[i]);
          }
        }

        _this2.setState({
          matches: matches.slice(0, 4)
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var matches = this.state.matches;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("section", {
        className: "headerimg"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("img", {
        src: "/images/euro2020-logo.svg"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement(_ComingMatches__WEBPACK_IMPORTED_MODULE_16__.default, {
        data: matches
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement(react_twitter_embed__WEBPACK_IMPORTED_MODULE_17__.TwitterTimelineEmbed, {
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
}(react__WEBPACK_IMPORTED_MODULE_14__.Component);

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
          react_toastify__WEBPACK_IMPORTED_MODULE_19__.toast.success('Connection réussie!', _this.toastoptions);
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
      }, this.renderInput('username', 'Nom d\'utilisateur :', 'text', 'input'), this.renderInput('password', 'Mot de passe :', 'password', 'input'), errorscount >= 3 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("div", null, "Vous avez oubli\xE9 votre mot de passe ? Cliquez ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Link, {
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
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_12__);
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
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var _Bets__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Bets */ "./assets/components/Bets.js");
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Filter */ "./assets/components/Filter.js");
/* harmony import */ var _common_pagination__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./common/pagination */ "./assets/components/common/pagination.js");
/* harmony import */ var _utilities_paginate__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../utilities/paginate */ "./assets/utilities/paginate.js");
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
      var matchListPerPage = (0,_utilities_paginate__WEBPACK_IMPORTED_MODULE_29__.paginate)(selectedMatches, currentPage, pageSize);
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

      axios__WEBPACK_IMPORTED_MODULE_23___default().get("https://portfolio-72147-default-rtdb.europe-west1.firebasedatabase.app/matches.json").then(function (res) {
        var matches = res.data.slice(0, 36);
        var dates = [];
        var teams = [];
        var groups = [];
        matches.map(function (m) {
          if (!dates.includes(m.date)) dates.push(m.date);
          if (!teams.includes(m.hometeam)) teams.push(m.hometeam);
          if (!groups.includes(m.group)) groups.push(m.group);
        });

        _this2.setState({
          matches: matches,
          teams: teams.sort(),
          dates: dates,
          groups: groups,
          selectedMatches: matches
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state3 = this.state,
          pageSize = _this$state3.pageSize,
          currentPage = _this$state3.currentPage,
          selectedMatches = _this$state3.selectedMatches,
          selectedGroup = _this$state3.selectedGroup,
          selectedDate = _this$state3.selectedDate,
          selectedTeam = _this$state3.selectedTeam,
          dates = _this$state3.dates,
          groups = _this$state3.groups,
          teams = _this$state3.teams;

      var _this$getPagedData = this.getPagedData(),
          totalCount = _this$getPagedData.totalCount,
          data = _this$getPagedData.data;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement("div", {
        className: "matchescontent"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement("h1", {
        className: "title"
      }, "Phase de Groupe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement("div", {
        className: "dropdown is-hoverable"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement(_Filter__WEBPACK_IMPORTED_MODULE_27__.default, {
        label: 'Groupe ',
        items: groups,
        selectedItem: selectedGroup,
        onItemSelect: this.handleGroupFilter
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement("div", {
        className: "dropdown is-hoverable"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement(_Filter__WEBPACK_IMPORTED_MODULE_27__.default, {
        label: 'Date ',
        items: dates,
        selectedItem: selectedDate,
        onItemSelect: this.handleDateFilter
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement("div", {
        className: "dropdown is-hoverable"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement(_Filter__WEBPACK_IMPORTED_MODULE_27__.default, {
        label: 'Equipe ',
        items: teams,
        selectedItem: selectedTeam,
        onItemSelect: this.handleTeamFilter
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement("div", {
        className: "matches"
      }, data.map(function (match) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement(_Bets__WEBPACK_IMPORTED_MODULE_26__.default, {
          match: match,
          key: match._id
        });
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement("div", {
        className: "pagination"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement(_common_pagination__WEBPACK_IMPORTED_MODULE_28__.default, {
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
}(react__WEBPACK_IMPORTED_MODULE_22__.Component);

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
        src: "https://gfycat.com/ifr/PaleNeglectedCirriped",
        frameborder: "0",
        scrolling: "no",
        width: "640",
        height: "404"
      }));
    }
  }]);

  return Ranking;
}(react__WEBPACK_IMPORTED_MODULE_13__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ranking);

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_axios_index_js-node_modules_core-js_modules_es_array_concat_js-node_modu-f9fb3b"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0FjY2Vzcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9BY2NvdW50LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0JldHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQ29taW5nTWF0Y2hlcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9GaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvTG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvTWF0Y2hlcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9SYW5raW5nLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2NvbW1vbi9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvY29tbW9uL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvY29tbW9uL2lucHV0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2NvbW1vbi9wYWdpbmF0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2NvbW1vbi91c2VybG9hZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3Bhc3N1cGRhdGUvcGFzc1VwZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9wYXNzdXBkYXRlL3VzZXJDb25maXJtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3NpZ251cC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdXRpbGl0aWVzL3BhZ2luYXRlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcz8zZmJhIl0sIm5hbWVzIjpbIlJlYWN0RE9NIiwiSG9tZSIsIk1hdGNoZXMiLCJTaWdudXAiLCJMb2dpbiIsIlVzZXJDb25maXJtIiwiUmFua2luZyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJBY2NvdW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkFjY2VzcyIsImRhdGEiLCJwYXNzIiwiZXJyb3JzIiwiSm9pIiwicmVxdWlyZWQiLCJtaW4iLCJtYXgiLCJjb3JyZWN0UGFzcyIsInN0YXRlIiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwibG9jYXRpb24iLCJocmVmIiwiaGFuZGxlU3VibWl0IiwicmVuZGVySW5wdXQiLCJyZW5kZXJCdXR0b24iLCJGb3JtIiwibG9hZGluZyIsImlkIiwidXNlcm5hbWUiLCJiZXRzIiwiZ2V0VXNlckJ5SWQiLCJOdW1iZXIiLCJheGlvcyIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwic2V0U3RhdGUiLCJ0b1VwcGVyQ2FzZSIsImxlbmd0aCIsIm1hcCIsImJldCIsIm1hdGNoX2lkIiwiYmV0X2RhdGUiLCJkYXRlIiwic2xpY2UiLCJzcGxpdCIsInJldmVyc2UiLCJqb2luIiwiaG9tZXRlYW0iLCJhd2F5dGVhbSIsImhvbWVzY29yZSIsImF3YXlzY29yZSIsIkNvbXBvbmVudCIsIkJldHMiLCJoaWRkZW4iLCJob21lcmVzdWx0IiwiYXdheXJlc3VsdCIsImJldHN0YXR1cyIsInRvYXN0IiwiY29ubmVjdGVkIiwib3B0aW9ucyIsImFib3J0RWFybHkiLCJzY2hlbWEiLCJlcnJvciIsImRldGFpbHMiLCJpdGVtIiwicGF0aCIsIm1lc3NhZ2UiLCJpbnB1dCIsImN1cnJlbnRUYXJnZXQiLCJuYW1lIiwidmFsdWUiLCJlIiwicHJldmVudERlZmF1bHQiLCJ2YWxpZGF0ZSIsImRvU3VibWl0IiwibWF0Y2hpZCIsInByb3BzIiwibWF0Y2giLCJfaWQiLCJiZXRpZCIsInV1aWR2NCIsInN0YXR1cyIsInBvc2l0aW9uIiwiYXV0b0Nsb3NlIiwiaGlkZVByb2dyZXNzQmFyIiwiY2xvc2VPbkNsaWNrIiwiY2xvc2VCdXR0b24iLCJzZXRUaW1lb3V0IiwiZXJyIiwiZ2V0QmV0cyIsInNvdXJjZSIsImNhbmNlbCIsInVzZXJpZCIsImNhbmNlbFRva2VuIiwidG9rZW4iLCJpbnB1dGVycm9ycyIsInRpbWUiLCJncm91cCIsImhhbmRsZUNsaWNrIiwiaGFuZGxlQ2hhbmdlIiwiQ29taW5nTWF0Y2hlcyIsIkZpbHRlciIsIml0ZW1zIiwib25JdGVtU2VsZWN0Iiwic2VsZWN0ZWRJdGVtIiwibGFiZWwiLCJ0b0xvd2VyQ2FzZSIsIkhlYWRlciIsInJlbW92ZUl0ZW0iLCJ3aW5kb3ciLCJyZXBsYWNlIiwib25Mb2dvdXQiLCJtYXRjaGVzIiwiZ2V0TWF0Y2hlcyIsImdldFVzZXIiLCJpIiwicHVzaCIsImhlaWdodCIsIndpZHRoIiwicGFzc3dvcmQiLCJlcnJvcnNjb3VudCIsImJ1dHRvblRleHQiLCJ0b2FzdG9wdGlvbnMiLCJzZWxlY3RlZE1hdGNoZXMiLCJncm91cHMiLCJzZWxlY3RlZEdyb3VwIiwiZGF0ZXMiLCJzZWxlY3RlZERhdGUiLCJ0ZWFtcyIsInNlbGVjdGVkVGVhbSIsImN1cnJlbnRQYWdlIiwicGFnZVNpemUiLCJEYXRlIiwicGFnZSIsImZpbHRlciIsIm0iLCJ0ZWFtIiwibWF0Y2hMaXN0UGVyUGFnZSIsInBhZ2luYXRlIiwidG90YWxDb3VudCIsIk1hdGgiLCJjZWlsIiwiaW5jbHVkZXMiLCJzb3J0IiwiZ2V0UGFnZWREYXRhIiwiaGFuZGxlR3JvdXBGaWx0ZXIiLCJoYW5kbGVEYXRlRmlsdGVyIiwiaGFuZGxlVGVhbUZpbHRlciIsImhhbmRsZVBhZ2VDaGFuZ2UiLCJwcmV2aW91c1BhZ2UiLCJuZXh0UGFnZSIsInVzZXJzIiwiZ2V0VXNlcnMiLCJ1c2VybmFtZXMiLCJMb2FkZXIiLCJvYmoiLCJlcnJvck1lc3NhZ2UiLCJ0eXBlIiwidmFsaWRhdGVQcm9wZXJ0eSIsImNsYXNzTmFtZSIsIklucHV0Iiwib25DaGFuZ2UiLCJQYWdpbmF0aW9uIiwiaXRlbXNDb3VudCIsIm9uUGFnZUNoYW5nZSIsInBhZ2VzQ291bnQiLCJwYWdlcyIsIl8iLCJVc2VyTG9hZGVyIiwiUGFzc1VwZGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwiYWxpYXMiLCJ1c2VycXVlcnkiLCJlbWFpbCIsImhpc3RvcnkiLCJwYWdlTnVtYmVyIiwic3RhcnRJbmRleCIsInRha2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLDZDQUFBLGVBRUksaURBQUMsNERBQUQscUJBQ0ksaURBQUMsdURBQUQsT0FESixlQUVJLDRFQUNJLGlEQUFDLHFEQUFELHFCQUNJLGlEQUFDLG9EQUFEO0FBQU8sTUFBSSxFQUFDLE9BQVo7QUFBb0IsV0FBUyxFQUFFQyxxREFBSUE7QUFBbkMsRUFESixlQUVJLGlEQUFDLG9EQUFEO0FBQU8sTUFBSSxFQUFDLFVBQVo7QUFBdUIsV0FBUyxFQUFFQyx3REFBT0E7QUFBekMsRUFGSixlQUdJLGlEQUFDLG9EQUFEO0FBQU8sTUFBSSxFQUFDLFNBQVo7QUFBc0IsV0FBUyxFQUFFQyx1REFBTUE7QUFBdkMsRUFISixlQUlJLGlEQUFDLG9EQUFEO0FBQU8sTUFBSSxFQUFDLFFBQVo7QUFBcUIsV0FBUyxFQUFFQyxzREFBS0E7QUFBckMsRUFKSixlQUtJLGlEQUFDLG9EQUFEO0FBQU8sTUFBSSxFQUFDLGVBQVo7QUFBNEIsV0FBUyxFQUFFQyx3RUFBV0E7QUFBbEQsRUFMSixlQU1JLGlEQUFDLG9EQUFEO0FBQU8sTUFBSSxFQUFDLFVBQVo7QUFBdUIsV0FBUyxFQUFFQyx5REFBT0E7QUFBekMsRUFOSixFQU9LQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsV0FBckIsTUFBb0MsTUFBcEMsZ0JBQ0csaURBQUMsb0RBQUQ7QUFBTyxNQUFJLEVBQUMsVUFBWjtBQUF1QixXQUFTLEVBQUVDLHdEQUFPQTtBQUF6QyxFQURILGdCQUVHLGlEQUFDLHVEQUFEO0FBQVUsSUFBRSxFQUFDO0FBQWIsRUFUUixlQVdJLGlEQUFDLG9EQUFEO0FBQU8sTUFBSSxFQUFDLEdBQVo7QUFBZ0IsT0FBSztBQUFyQixnQkFDSSxpREFBQyx1REFBRDtBQUFVLElBQUUsRUFBQztBQUFiLEVBREosQ0FYSixlQWNJLGlEQUFDLHVEQUFEO0FBQVUsSUFBRSxFQUFDO0FBQWIsRUFkSixDQURKLENBRkosQ0FGSixFQXlCS0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBekJMLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBOztJQUVNQyxNOzs7Ozs7Ozs7Ozs7Ozs7OzREQUNNO0FBQ0pDLFVBQUksRUFBRztBQUFFQyxZQUFJLEVBQUc7QUFBVCxPQURIO0FBRUpDLFlBQU0sRUFBRztBQUZMLEs7OzZEQUlDO0FBQ0xELFVBQUksRUFBR0UsMERBQUEsR0FBYUMsUUFBYixHQUF3QkMsR0FBeEIsQ0FBNEIsRUFBNUIsRUFBZ0NDLEdBQWhDLENBQW9DLEVBQXBDO0FBREYsSzs7Ozs7OztXQUdULG9CQUFVO0FBQ04sVUFBTUMsV0FBVyxHQUFHLGNBQXBCO0FBQ0EsVUFBTU4sSUFBSSxHQUFHLEtBQUtPLEtBQUwsQ0FBV1IsSUFBWCxDQUFnQkMsSUFBN0I7O0FBQ0EsVUFBSUEsSUFBSSxJQUFJTSxXQUFaLEVBQXdCO0FBQ3BCRSxzQkFBYyxDQUFDQyxPQUFmLENBQXVCLFFBQXZCLEVBQWdDLElBQWhDO0FBQ0FiLGdCQUFRLENBQUNjLFFBQVQsQ0FBa0JDLElBQWxCLEdBQXVCLE9BQXZCO0FBQ0g7QUFDSjs7O1dBQ0Qsa0JBQVM7QUFDTCwwQkFDSTtBQUFNLGlCQUFTLEVBQUMsUUFBaEI7QUFBeUIsZ0JBQVEsRUFBRSxLQUFLQztBQUF4QyxzQkFDSTtBQUFJLGlCQUFTLEVBQUM7QUFBZCxnQ0FESixlQUVJO0FBQUssV0FBRyxFQUFDO0FBQVQsUUFGSixFQUdLLEtBQUtDLFdBQUwsQ0FBaUIsTUFBakIsRUFBd0IsaUJBQXhCLEVBQTBDLE1BQTFDLEVBQWlELE9BQWpELENBSEwsRUFJSyxLQUFLQyxZQUFMLENBQWtCLFNBQWxCLEVBQTRCLG1CQUE1QixDQUpMLENBREo7QUFRSDs7OztFQXpCZ0JDLGtEOztBQTRCckIsaUVBQWVqQixNQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUgsTzs7Ozs7Ozs7Ozs7Ozs7Ozs0REFFTTtBQUNKcUIsYUFBTyxFQUFHLElBRE47QUFFSkMsUUFBRSxFQUFFeEIsWUFBWSxDQUFDQyxPQUFiLENBQXFCLElBQXJCLENBRkE7QUFHSndCLGNBQVEsRUFBRyxFQUhQO0FBSUpDLFVBQUksRUFBRztBQUpILEs7Ozs7Ozs7V0FNUiw2QkFBbUI7QUFDZixXQUFLQyxXQUFMO0FBQ0g7OztXQUNELHVCQUFhO0FBQUE7O0FBQ1QsVUFBTUgsRUFBRSxHQUFHSSxNQUFNLENBQUMsS0FBS2QsS0FBTCxDQUFXVSxFQUFaLENBQWpCO0FBQ0EsVUFBTWxCLElBQUksR0FBRztBQUFFa0IsVUFBRSxFQUFHQTtBQUFQLE9BQWI7QUFDQUssbURBQUssQ0FBQztBQUNGQyxjQUFNLEVBQUUsTUFETjtBQUVGQyxXQUFHLEVBQUUsc0JBRkg7QUFHRnpCLFlBQUksRUFBRUEsSUFISjtBQUlGMEIsZUFBTyxFQUFFO0FBQUMsOEJBQW9CO0FBQXJCO0FBSlAsT0FBRCxDQUFMLENBS0dDLElBTEgsQ0FLUSxVQUFBQyxHQUFHLEVBQUk7QUFDWCxjQUFJLENBQUNDLFFBQUwsQ0FBYztBQUFDVixrQkFBUSxFQUFDUyxHQUFHLENBQUM1QjtBQUFkLFNBQWQ7QUFDSCxPQVBEO0FBUUF1QixtREFBSyxDQUFDO0FBQ0ZDLGNBQU0sRUFBRSxNQUROO0FBRUZDLFdBQUcsRUFBRSxtQkFGSDtBQUdGekIsWUFBSSxFQUFFQSxJQUhKO0FBSUYwQixlQUFPLEVBQUU7QUFBQyw4QkFBb0I7QUFBckI7QUFKUCxPQUFELENBQUwsQ0FLR0MsSUFMSCxDQUtRLFVBQUFDLEdBQUcsRUFBSTtBQUNYLGNBQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQUNULGNBQUksRUFBR1EsR0FBRyxDQUFDNUIsSUFBWjtBQUFtQmlCLGlCQUFPLEVBQUc7QUFBN0IsU0FBZDtBQUNILE9BUEQ7QUFRSDs7O1dBRUQsa0JBQVM7QUFDTCx3QkFBb0MsS0FBS1QsS0FBekM7QUFBQSxVQUFPVyxRQUFQLGVBQU9BLFFBQVA7QUFBQSxVQUFrQkYsT0FBbEIsZUFBa0JBLE9BQWxCO0FBQUEsVUFBNEJHLElBQTVCLGVBQTRCQSxJQUE1QjtBQUNBLDBCQUNJLGtEQUFDLDRDQUFELHFCQUNJO0FBQUksaUJBQVMsRUFBQztBQUFkLHNCQURKLEVBRUtILE9BQU8sZ0JBQUUsa0RBQUMsb0RBQUQsT0FBRixnQkFDUjtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSSwwRUFESixlQUVJO0FBQUksaUJBQVMsRUFBQztBQUFkLFNBQTBCRSxRQUFRLENBQUNXLFdBQVQsRUFBMUIsQ0FGSixlQUdJLDZEQUhKLGVBSUk7QUFBSSxpQkFBUyxFQUFDO0FBQWQsd0JBSkosZUFLSTtBQUFPLGlCQUFTLEVBQUM7QUFBakIsU0FDQ1YsSUFBSSxDQUFDVyxNQUFMLEdBQWMsQ0FBZCxnQkFDRCxrREFBQyw0Q0FBRCxxQkFDSSw4RUFDSSwyRUFDSSw4RUFESixlQUVJLHNFQUZKLGVBR0ksOEVBSEosZUFJSSxxRkFKSixlQUtJLGdGQUxKLENBREosQ0FESixlQVVJLGlFQUNDWCxJQUFJLENBQUNZLEdBQUwsQ0FBUyxVQUFBQyxHQUFHO0FBQUEsNEJBQ1Q7QUFBSSxhQUFHLEVBQUVBLEdBQUcsQ0FBQ0M7QUFBYix3QkFDSSw4REFBS0QsR0FBRyxDQUFDRSxRQUFKLENBQWFDLElBQWIsQ0FBa0JDLEtBQWxCLENBQXdCLENBQXhCLEVBQTBCLEVBQTFCLEVBQThCQyxLQUE5QixDQUFvQyxHQUFwQyxFQUF5Q0MsT0FBekMsR0FBbURDLElBQW5ELENBQXdELEdBQXhELENBQUwsQ0FESixlQUVJLDJFQUNJO0FBQ0ksYUFBRyxvQkFBYVAsR0FBRyxDQUFDUSxRQUFqQixTQURQO0FBRUksZUFBSyxFQUFDLE1BRlY7QUFHSSxtQkFBUyxFQUFDO0FBSGQsVUFESixFQU1TUixHQUFHLENBQUNRLFFBTmIsU0FNMEJSLEdBQUcsQ0FBQ1MsUUFOOUIsZUFPUTtBQUNBLGFBQUcsb0JBQWFULEdBQUcsQ0FBQ1MsUUFBakIsU0FESDtBQUVBLGVBQUssRUFBQyxNQUZOO0FBR0EsbUJBQVMsRUFBQztBQUhWLFVBUFIsQ0FGSixlQWVJLDhEQUFLVCxHQUFHLENBQUNVLFNBQVQsU0FBdUJWLEdBQUcsQ0FBQ1csU0FBM0IsQ0FmSixlQWdCSSxpRkFoQkosZUFpQkksaUZBakJKLENBRFM7QUFBQSxPQUFaLENBREQsQ0FWSixDQURDLGdCQW1DRCw0RUFDSSw4R0FESixlQUVJLCtGQUFvQixrREFBQyxtREFBRDtBQUFNLFVBQUUsRUFBQztBQUFULG1CQUFwQix1Q0FGSixDQXBDQSxDQUxKLENBSEosQ0FESjtBQXVESDs7OztFQXpGaUJDLDZDOztBQTRGdEIsaUVBQWVqRCxPQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNa0QsSTs7Ozs7Ozs7Ozs7Ozs7Ozs0REFDTTtBQUNKQyxZQUFNLEVBQUcsSUFETDtBQUVKL0MsVUFBSSxFQUFHO0FBQ0hnRCxrQkFBVSxFQUFHLEdBRFY7QUFFSEMsa0JBQVUsRUFBRztBQUZWLE9BRkg7QUFNSi9DLFlBQU0sRUFBRSxFQU5KO0FBT0pnRCxlQUFTLEVBQUcsS0FQUjtBQVFKQyxXQUFLLEVBQUcsS0FSSjtBQVNKbEMsYUFBTyxFQUFHLElBVE47QUFVSm1DLGVBQVMsRUFBRzFELFlBQVksQ0FBQ0MsT0FBYixDQUFxQixXQUFyQjtBQVZSLEs7OzZEQVlDNEIsZ0VBQUEsRTs7NkRBQ0E7QUFDTHlCLGdCQUFVLEVBQUc3QywwREFBQSxHQUFhQyxRQUFiLEVBRFI7QUFFTDZDLGdCQUFVLEVBQUc5QywwREFBQSxHQUFhQyxRQUFiO0FBRlIsSzs7K0RBNEJFLFlBQU07QUFDYixVQUFNaUQsT0FBTyxHQUFHO0FBQUNDLGtCQUFVLEVBQUc7QUFBZCxPQUFoQjs7QUFDQSwwQkFBZ0JuRCw0REFBQSxDQUFhLE1BQUtLLEtBQUwsQ0FBV1IsSUFBeEIsRUFBOEIsTUFBS3VELE1BQW5DLEVBQTJDRixPQUEzQyxDQUFoQjtBQUFBLFVBQU9HLEtBQVAsaUJBQU9BLEtBQVA7O0FBQ0EsVUFBSSxDQUFDQSxLQUFMLEVBQVksT0FBTyxJQUFQO0FBQ1osVUFBTXRELE1BQU0sR0FBRyxFQUFmOztBQUphLGlEQUtJc0QsS0FBSyxDQUFDQyxPQUxWO0FBQUE7O0FBQUE7QUFLYjtBQUFBLGNBQVNDLElBQVQ7QUFDSXhELGdCQUFNLENBQUN3RCxJQUFJLENBQUNDLElBQUwsQ0FBVSxDQUFWLENBQUQsQ0FBTixHQUF1QkQsSUFBSSxDQUFDRSxPQUE1QjtBQURKO0FBTGE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFPYixhQUFPMUQsTUFBUDtBQUNILEs7O21FQUNjLGdCQUE2QjtBQUFBLFVBQVgyRCxLQUFXLFFBQTNCQyxhQUEyQjs7QUFDeEMsVUFBTTlELElBQUkscUJBQU8sTUFBS1EsS0FBTCxDQUFXUixJQUFsQixDQUFWOztBQUNBQSxVQUFJLENBQUM2RCxLQUFLLENBQUNFLElBQVAsQ0FBSixHQUFtQkYsS0FBSyxDQUFDRyxLQUF6Qjs7QUFDQSxZQUFLbkMsUUFBTCxDQUFjO0FBQUM3QixZQUFJLEVBQUpBO0FBQUQsT0FBZDtBQUNILEs7O2tFQUNhLFlBQU07QUFDaEIsWUFBSzZCLFFBQUwsQ0FBYztBQUFDa0IsY0FBTSxFQUFDO0FBQVIsT0FBZDtBQUNILEs7O21FQUNjLFVBQUNrQixDQUFELEVBQU87QUFDbEJBLE9BQUMsQ0FBQ0MsY0FBRjs7QUFDQSxVQUFNaEUsTUFBTSxHQUFHLE1BQUtpRSxRQUFMLEVBQWY7O0FBQ0EsWUFBS3RDLFFBQUwsQ0FBYztBQUFFM0IsY0FBTSxFQUFHQSxNQUFNLElBQUk7QUFBckIsT0FBZDs7QUFDQSxVQUFJQSxNQUFKLEVBQVk7O0FBQ1osWUFBS2tFLFFBQUw7QUFDSCxLOzsrREFDVSxZQUFNO0FBQ2IsVUFBTXBFLElBQUksR0FBRztBQUNUMkMsaUJBQVMsRUFBRyxNQUFLbkMsS0FBTCxDQUFXUixJQUFYLENBQWdCZ0QsVUFEbkI7QUFFVEosaUJBQVMsRUFBRyxNQUFLcEMsS0FBTCxDQUFXUixJQUFYLENBQWdCaUQsVUFGbkI7QUFHVG9CLGVBQU8sRUFBRyxNQUFLQyxLQUFMLENBQVdDLEtBQVgsQ0FBaUJDLEdBSGxCO0FBSVRDLGFBQUssRUFBR0MsOENBQU0sRUFKTDtBQUtUakMsZ0JBQVEsRUFBRyxNQUFLNkIsS0FBTCxDQUFXQyxLQUFYLENBQWlCOUIsUUFMbkI7QUFNVEMsZ0JBQVEsRUFBSSxNQUFLNEIsS0FBTCxDQUFXQyxLQUFYLENBQWlCN0I7QUFOcEIsT0FBYjs7QUFRQSxVQUFJLE1BQUtsQyxLQUFMLENBQVcwQyxTQUFYLEtBQXlCLEtBQTdCLEVBQW1DO0FBQy9CM0IscURBQUssQ0FDRDtBQUFDQyxnQkFBTSxFQUFFLE1BQVQ7QUFBaUJDLGFBQUcsRUFBRSxjQUF0QjtBQUFzQ3pCLGNBQUksRUFBRUEsSUFBNUM7QUFBa0QwQixpQkFBTyxFQUFFO0FBQUMsZ0NBQW9CO0FBQXJCO0FBQTNELFNBREMsQ0FBTCxDQUVDQyxJQUZELENBRU0sVUFBQ0MsR0FBRCxFQUFTO0FBQ1gsY0FBSUEsR0FBRyxDQUFDK0MsTUFBSixLQUFlLEdBQW5CLEVBQXVCO0FBQ25CLGtCQUFLOUMsUUFBTCxDQUFjO0FBQ1ZrQixvQkFBTSxFQUFHLElBREM7QUFFVi9DLGtCQUFJLEVBQUc7QUFDSGdELDBCQUFVLEVBQUcsRUFEVjtBQUVIQywwQkFBVSxFQUFHO0FBRlYsZUFGRztBQU1WQyx1QkFBUyxFQUFHLElBTkY7QUFPVkMsbUJBQUssRUFBRztBQVBFLGFBQWQ7O0FBU0FBLHNFQUFBLENBQWMsbUJBQWQsRUFBbUM7QUFDL0J5QixzQkFBUSxFQUFFLFdBRHFCO0FBRS9CQyx1QkFBUyxFQUFFLElBRm9CO0FBRy9CQyw2QkFBZSxFQUFFLEtBSGM7QUFJL0JDLDBCQUFZLEVBQUUsSUFKaUI7QUFLL0JDLHlCQUFXLEVBQUU7QUFMa0IsYUFBbkM7QUFPQUMsc0JBQVUsQ0FBQyxZQUFNO0FBQUVwRixzQkFBUSxDQUFDYyxRQUFULENBQWtCQyxJQUFsQixHQUF1QixVQUF2QjtBQUFtQyxhQUE1QyxFQUE2QyxJQUE3QyxDQUFWO0FBQ0g7O0FBQUE7QUFDSixTQXRCRCxXQXVCTyxVQUFDc0UsR0FBRCxFQUFTO0FBQ1ovQixrRUFBQSxDQUFZLG9CQUFaLEVBQWtDO0FBQzlCeUIsb0JBQVEsRUFBRSxXQURvQjtBQUU5QkMscUJBQVMsRUFBRSxJQUZtQjtBQUc5QkMsMkJBQWUsRUFBRSxLQUhhO0FBSTlCQyx3QkFBWSxFQUFFLElBSmdCO0FBSzlCQyx1QkFBVyxFQUFFO0FBTGlCLFdBQWxDO0FBT0FDLG9CQUFVLENBQUMsWUFBTTtBQUFFLGtCQUFLcEQsUUFBTCxDQUFjO0FBQUNzQixtQkFBSyxFQUFHO0FBQVQsYUFBZDtBQUErQixXQUF4QyxFQUF5QyxJQUF6QyxDQUFWO0FBQ0gsU0FoQ0Q7QUFpQ0gsT0FsQ0QsTUFtQ0k7QUFDQTVCLHFEQUFLLENBQUM7QUFBQ0MsZ0JBQU0sRUFBQyxNQUFSO0FBQWVDLGFBQUcsRUFBQyxnQkFBbkI7QUFBcUN6QixjQUFJLEVBQUNBLElBQTFDO0FBQWdEMEIsaUJBQU8sRUFBRTtBQUFDLGdDQUFvQjtBQUFyQjtBQUF6RCxTQUFELENBQUwsQ0FDQ0MsSUFERCxDQUNNLFVBQUNDLEdBQUQsRUFBUTtBQUFDLGNBQUlBLEdBQUcsQ0FBQytDLE1BQUosS0FBZSxHQUFuQixFQUF1QjtBQUNsQyxrQkFBSzlDLFFBQUwsQ0FBYztBQUNWa0Isb0JBQU0sRUFBRyxJQURDO0FBRVYvQyxrQkFBSSxFQUFHO0FBQ0hnRCwwQkFBVSxFQUFHLEVBRFY7QUFFSEMsMEJBQVUsRUFBRztBQUZWLGVBRkc7QUFNVkMsdUJBQVMsRUFBRyxJQU5GO0FBT1ZDLG1CQUFLLEVBQUc7QUFQRSxhQUFkOztBQVNBQSxzRUFBQSxDQUFjLG9CQUFkLEVBQW9DO0FBQ2hDeUIsc0JBQVEsRUFBRSxXQURzQjtBQUVoQ0MsdUJBQVMsRUFBRSxJQUZxQjtBQUdoQ0MsNkJBQWUsRUFBRSxLQUhlO0FBSWhDQywwQkFBWSxFQUFFLElBSmtCO0FBS2hDQyx5QkFBVyxFQUFFO0FBTG1CLGFBQXBDO0FBT0FDLHNCQUFVLENBQUMsWUFBTTtBQUFFcEYsc0JBQVEsQ0FBQ2MsUUFBVCxDQUFrQkMsSUFBbEIsR0FBdUIsVUFBdkI7QUFBbUMsYUFBNUMsRUFBNkMsSUFBN0MsQ0FBVjtBQUNIO0FBQUMsU0FuQkY7QUFvQkg7O0FBQUE7QUFDSixLOzs7Ozs7O1dBbEhELDZCQUFtQjtBQUNmLFdBQUt1RSxPQUFMO0FBQ0g7OztXQUNELGdDQUF1QjtBQUNuQixVQUFJLEtBQUtDLE1BQVQsRUFBaUI7QUFDZixhQUFLQSxNQUFMLENBQVlDLE1BQVo7QUFDRDtBQUNKOzs7V0FDRCxtQkFBUztBQUFBOztBQUNMLFVBQUksS0FBSzdFLEtBQUwsQ0FBVzRDLFNBQVgsS0FBeUIsTUFBN0IsRUFBb0M7QUFDcEMsWUFBTXBELElBQUksR0FBRztBQUFFc0YsZ0JBQU0sRUFBR2hFLE1BQU0sQ0FBQzVCLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixJQUFyQixDQUFELENBQWpCO0FBQWdEMEUsaUJBQU8sRUFBRyxLQUFLQyxLQUFMLENBQVdDLEtBQVgsQ0FBaUJDO0FBQTNFLFNBQWI7QUFDQWpELHFEQUFLLENBQUM7QUFBRUMsZ0JBQU0sRUFBRyxNQUFYO0FBQW9CQyxhQUFHLEVBQUUsYUFBekI7QUFBd0N6QixjQUFJLEVBQUdBLElBQS9DO0FBQXNEMEIsaUJBQU8sRUFBRTtBQUFDLGdDQUFvQjtBQUFyQixXQUEvRDtBQUF3RzZELHFCQUFXLEVBQUUsS0FBS0gsTUFBTCxDQUFZSTtBQUFqSSxTQUFELENBQUwsQ0FDRzdELElBREgsQ0FDUSxVQUFDQyxHQUFELEVBQVM7QUFDYixjQUFJQSxHQUFHLENBQUM1QixJQUFKLENBQVMyQyxTQUFiLEVBQXVCO0FBQ25CLGtCQUFJLENBQUNkLFFBQUwsQ0FBYztBQUFFN0Isa0JBQUksRUFBRztBQUFFZ0QsMEJBQVUsRUFBR3BCLEdBQUcsQ0FBQzVCLElBQUosQ0FBUzJDLFNBQXhCO0FBQW9DTSwwQkFBVSxFQUFHckIsR0FBRyxDQUFDNUIsSUFBSixDQUFTNEM7QUFBMUQsZUFBVDtBQUFnRjNCLHFCQUFPLEVBQUcsS0FBMUY7QUFBa0dpQyx1QkFBUyxFQUFHO0FBQTlHLGFBQWQ7QUFDSCxXQUZELE1BR0s7QUFDRCxrQkFBSSxDQUFDckIsUUFBTCxDQUFjO0FBQUU3QixrQkFBSSxFQUFHO0FBQUVnRCwwQkFBVSxFQUFHLEVBQWY7QUFBb0JDLDBCQUFVLEVBQUc7QUFBakMsZUFBVDtBQUFnRGhDLHFCQUFPLEVBQUc7QUFBMUQsYUFBZDtBQUNIO0FBQ0osU0FSRDtBQVFHLE9BVkgsTUFXSTtBQUNBLGFBQUtZLFFBQUwsQ0FBYztBQUFFWixpQkFBTyxFQUFHO0FBQVosU0FBZDtBQUNIO0FBQ0o7OztXQTZGRCxrQkFBUTtBQUNKLHdCQUF3RixLQUFLVCxLQUE3RjtBQUFBLFVBQU91QyxNQUFQLGVBQU9BLE1BQVA7QUFBQSxVQUFlL0MsSUFBZixlQUFlQSxJQUFmO0FBQUEsVUFBc0JFLE1BQXRCLGVBQXNCQSxNQUF0QjtBQUFBLFVBQStCdUYsV0FBL0IsZUFBK0JBLFdBQS9CO0FBQUEsVUFBNkN2QyxTQUE3QyxlQUE2Q0EsU0FBN0M7QUFBQSxVQUF5REMsS0FBekQsZUFBeURBLEtBQXpEO0FBQUEsVUFBaUVDLFNBQWpFLGVBQWlFQSxTQUFqRTtBQUFBLFVBQTZFbkMsT0FBN0UsZUFBNkVBLE9BQTdFO0FBQ0EsVUFBT3NELEtBQVAsR0FBZ0IsS0FBS0QsS0FBckIsQ0FBT0MsS0FBUDtBQUVBLDBCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0twQixLQUFLLGdCQUFFLGtEQUFDLDJEQUFELE9BQUYsR0FBc0IsSUFEaEMsZUFHSSw4REFBS29CLEtBQUssQ0FBQ25DLElBQVgsU0FBb0JtQyxLQUFLLENBQUNtQixJQUExQixDQUhKLGVBSUkseUVBQVluQixLQUFLLENBQUNvQixLQUFsQixDQUpKLGVBS0ksNkRBQUlwQixLQUFLLENBQUM1RCxRQUFWLENBTEosZUFNSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFLLGlCQUFTLEVBQUMsYUFBZjtBQUE2QixXQUFHLG9CQUFhNEQsS0FBSyxDQUFDOUIsUUFBbkI7QUFBaEMsUUFESixFQUVLOEIsS0FBSyxDQUFDOUIsUUFGWCxPQUVzQjhCLEtBQUssQ0FBQzVCLFNBRjVCLFNBRTBDNEIsS0FBSyxDQUFDM0IsU0FGaEQsT0FFNEQyQixLQUFLLENBQUM3QixRQUZsRSxlQUdJO0FBQUssaUJBQVMsRUFBQyxhQUFmO0FBQTZCLFdBQUcsb0JBQWE2QixLQUFLLENBQUM3QixRQUFuQjtBQUFoQyxRQUhKLENBTkosZUFXSSwrREFDQ3pCLE9BQU8sS0FBSyxJQUFaLGdCQUFtQixrREFBQyxvREFBRCxPQUFuQixnQkFDRCxrREFBQyw0Q0FBRCxxQkFDSTtBQUFRLGVBQU8sRUFBRSxLQUFLMkUsV0FBdEI7QUFBbUMsaUJBQVMsRUFBRTdDLE1BQU0sR0FBRyw2QkFBSCxHQUFtQztBQUF2RixTQUNLRyxTQUFTLEdBQUUsNkJBQUYsR0FBa0MscUJBRGhELENBREosQ0FGQSxlQVFBO0FBQUssaUJBQVMsRUFBRUgsTUFBTSxHQUFHLFFBQUgsR0FBYztBQUFwQyxTQUNDSyxTQUFTLEtBQUssTUFBZCxnQkFDRyw2RUFDSSw4REFBS21CLEtBQUssQ0FBQzlCLFFBQVgsTUFESixlQUVJO0FBQ0ksWUFBSSxFQUFDLFlBRFQ7QUFFSSxhQUFLLEVBQUV6QyxJQUFJLENBQUNnRCxVQUZoQjtBQUdJLGdCQUFRLEVBQUUsS0FBSzZDLFlBSG5CO0FBSUksWUFBSSxFQUFDLE1BSlQ7QUFLSSxpQkFBUyxFQUFDLGtCQUxkO0FBTUksYUFBSyxFQUFFM0YsTUFBTSxDQUFDLFlBQUQ7QUFOakIsUUFGSixlQVVRLG1FQVZSLGVBV0k7QUFDSSxZQUFJLEVBQUMsWUFEVDtBQUVJLGFBQUssRUFBRUYsSUFBSSxDQUFDaUQsVUFGaEI7QUFHSSxnQkFBUSxFQUFFLEtBQUs0QyxZQUhuQjtBQUlJLFlBQUksRUFBQyxNQUpUO0FBS0ksaUJBQVMsRUFBRUosV0FBVyxHQUFFLGFBQUYsR0FBa0I7QUFMNUMsUUFYSixlQWtCSSxtRUFBTWxCLEtBQUssQ0FBQzdCLFFBQVosTUFsQkosZUFtQkk7QUFDSSxlQUFPLEVBQUUsS0FBSzdCLFlBRGxCO0FBRUksZ0JBQVEsRUFBRSxLQUFLc0QsUUFBTCxFQUZkO0FBR0ksWUFBSSxFQUFDLFFBSFQ7QUFJSSxpQkFBUyxFQUFDO0FBSmQsY0FuQkosQ0FESCxnQkE4Qkcsd0hBL0JKLENBUkEsQ0FYSixDQURKO0FBMERIOzs7O0VBcE1jdEIsNkM7O0FBd01uQixpRUFBZUMsSUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL01BO0FBQ0E7O0FBRUEsSUFBTWdELGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBWTtBQUFBLE1BQVY5RixJQUFVLFFBQVZBLElBQVU7QUFDOUIsc0JBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSTtBQUFJLGFBQVMsRUFBQztBQUFkLHlCQURKLEVBRUtBLElBQUksQ0FBQ2dDLEdBQUwsQ0FBUyxVQUFBdUMsS0FBSztBQUFBLHdCQUNYO0FBQUssZUFBUyxFQUFDLFNBQWY7QUFBeUIsU0FBRyxFQUFFQSxLQUFLLENBQUNDO0FBQXBDLG9CQUNJLDREQUFJRCxLQUFLLENBQUNuQyxJQUFWLENBREosZUFFSSw0REFBSW1DLEtBQUssQ0FBQzlCLFFBQVYsU0FBdUI4QixLQUFLLENBQUM3QixRQUE3QixDQUZKLENBRFc7QUFBQSxHQUFkLENBRkwsQ0FESjtBQVlILENBYkQ7O0FBZUEsaUVBQWVvRCxhQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7O0FBRUEsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBNkM7QUFBQSxNQUEzQ0MsS0FBMkMsUUFBM0NBLEtBQTJDO0FBQUEsTUFBckNDLFlBQXFDLFFBQXJDQSxZQUFxQztBQUFBLE1BQXhCQyxZQUF3QixRQUF4QkEsWUFBd0I7QUFBQSxNQUFYQyxLQUFXLFFBQVhBLEtBQVc7QUFFeEQsc0JBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSTtBQUFRLGFBQVMsRUFBQztBQUFsQixrQkFDSSwrRUFBbUJBLEtBQUssQ0FBQ0MsV0FBTixFQUFuQixDQURKLGVBRUk7QUFBTSxhQUFTLEVBQUM7QUFBaEIsa0JBQ0k7QUFBSyxPQUFHLEVBQUM7QUFBVCxJQURKLENBRkosQ0FESixlQU9JO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJO0FBQUcsYUFBUyxFQUFFLE9BQU9GLFlBQVAsR0FBc0IscUJBQXRCLEdBQThDLFdBQTVEO0FBQXlFLFdBQU8sRUFBRztBQUFBLGFBQU1ELFlBQVksQ0FBQyxLQUFELENBQWxCO0FBQUE7QUFBbkYsWUFESixFQUVLRCxLQUFLLENBQUNoRSxHQUFOLENBQVUsVUFBQTBCLElBQUk7QUFBQSx3QkFDZjtBQUNJLFNBQUcsRUFBRUEsSUFEVDtBQUVJLGVBQVMsRUFBRUEsSUFBSSxLQUFLd0MsWUFBVCxHQUF3QixxQkFBeEIsR0FBZ0QsV0FGL0Q7QUFHSSxhQUFPLEVBQUc7QUFBQSxlQUFNRCxZQUFZLENBQUN2QyxJQUFELENBQWxCO0FBQUE7QUFIZCxPQUtLeUMsS0FBSyxLQUFLLFNBQVYsR0FBcUJ6QyxJQUFyQixHQUE0QnlDLEtBQUssR0FBR3pDLElBTHpDLENBRGU7QUFBQSxHQUFkLENBRkwsQ0FESixDQURKLENBUEosQ0FESjtBQTBCSCxDQTVCRDs7QUE4QkEsaUVBQWVxQyxNQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBQ0E7QUFDQTs7SUFFTU0sTTs7Ozs7Ozs7Ozs7Ozs7Ozs0REFFTTtBQUNKakQsZUFBUyxFQUFHMUQsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFdBQXJCO0FBRFIsSzs7Ozs7OztXQUdSLG9CQUFVO0FBQ05ELGtCQUFZLENBQUNnQixPQUFiLENBQXFCLFdBQXJCLEVBQWlDLE9BQWpDO0FBQ0FoQixrQkFBWSxDQUFDNEcsVUFBYixDQUF3QixJQUF4QjtBQUNBQyxZQUFNLENBQUM1RixRQUFQLENBQWdCNkYsT0FBaEIsQ0FBd0IsYUFBeEI7QUFDSDs7O1dBQ0Qsa0JBQVE7QUFDSixVQUFPcEQsU0FBUCxHQUFvQixLQUFLNUMsS0FBekIsQ0FBTzRDLFNBQVA7QUFDQSwwQkFDSTtBQUFRLGlCQUFTLEVBQUM7QUFBbEIsc0JBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0ksa0RBQUMsbURBQUQ7QUFBTSxVQUFFLEVBQUM7QUFBVCxzQkFBaUI7QUFBSyxXQUFHLEVBQUMsMkJBQVQ7QUFBcUMsYUFBSyxFQUFDO0FBQTNDLFFBQWpCLENBREosQ0FESixlQVlJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLG1CQURKLGVBRUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0ksa0RBQUMsbURBQUQ7QUFBTSxVQUFFLEVBQUMsVUFBVDtBQUFvQixpQkFBUyxFQUFDO0FBQTlCLDJCQURKLENBRkosQ0FESixlQVFJLGtEQUFDLG1EQUFEO0FBQU0sVUFBRSxFQUFDLFVBQVQ7QUFBb0IsaUJBQVMsRUFBQztBQUE5QixzQkFSSixDQURKLENBWkosZUF3Qkk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDS0EsU0FBUyxLQUFHLE1BQVosZ0JBQ0Q7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0ksa0RBQUMsbURBQUQ7QUFBTSxVQUFFLEVBQUMsVUFBVDtBQUFvQixpQkFBUyxFQUFDO0FBQTlCLHNCQURKLGVBRUk7QUFBUSxlQUFPLEVBQUUsS0FBS3FELFFBQXRCO0FBQWlDLGlCQUFTLEVBQUM7QUFBM0MsMkJBRkosQ0FEQyxnQkFNRDtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSSxrREFBQyxtREFBRDtBQUFNLFVBQUUsRUFBQyxRQUFUO0FBQWtCLGlCQUFTLEVBQUM7QUFBNUIsc0JBREosZUFFSSxrREFBQyxtREFBRDtBQUFNLFVBQUUsRUFBQyxTQUFUO0FBQW1CLGlCQUFTLEVBQUM7QUFBN0Isc0JBQThDLHVGQUE5QyxDQUZKLENBUEosQ0FESixDQXhCSixDQURKLENBREo7QUE0Q0g7Ozs7RUF4RGdCNUQsNkM7O0FBNERyQixpRUFBZXdELE1BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBOztJQUVNakgsSTs7Ozs7Ozs7Ozs7Ozs7Ozs0REFFTTtBQUFFc0gsYUFBTyxFQUFHO0FBQVosSzs7Ozs7OztXQUVSLDZCQUFtQjtBQUNmLFdBQUtDLFVBQUw7QUFDQSxVQUFNdkQsU0FBUyxHQUFHMUQsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFdBQXJCLENBQWxCO0FBQ0EsVUFBSXlELFNBQVMsS0FBSyxNQUFsQixFQUEwQixLQUFLd0QsT0FBTDtBQUM3Qjs7O1dBQ0QsbUJBQVM7QUFDTHJGLHVEQUFBLENBQVUsZUFBVixFQUEyQkksSUFBM0IsQ0FBZ0MsVUFBQUMsR0FBRyxFQUFJO0FBQ25DbEMsb0JBQVksQ0FBQ2dCLE9BQWIsQ0FBcUIsSUFBckIsRUFBMEJrQixHQUFHLENBQUM1QixJQUE5QjtBQUNILE9BRkQ7QUFHSDs7O1dBQ0Qsc0JBQVk7QUFBQTs7QUFDUnVCLHVEQUFBLHdGQUFpR0ksSUFBakcsQ0FBc0csVUFBQUMsR0FBRyxFQUFJO0FBQ3pHLFlBQUk4RSxPQUFPLEdBQUcsRUFBZDs7QUFDQSxhQUFLLElBQUlHLENBQUMsR0FBRyxDQUFiLEVBQWlCQSxDQUFDLEdBQUdqRixHQUFHLENBQUM1QixJQUFKLENBQVMrQixNQUE5QixFQUF1QzhFLENBQUMsRUFBeEMsRUFBMkM7QUFDdkMsY0FBSWpGLEdBQUcsQ0FBQzVCLElBQUosQ0FBUzZHLENBQVQsRUFBWWxFLFNBQVosS0FBMEIsRUFBOUIsRUFBaUM7QUFDN0IrRCxtQkFBTyxDQUFDSSxJQUFSLENBQWFsRixHQUFHLENBQUM1QixJQUFKLENBQVM2RyxDQUFULENBQWI7QUFDSDtBQUNKOztBQUNELGNBQUksQ0FBQ2hGLFFBQUwsQ0FBYztBQUFDNkUsaUJBQU8sRUFBR0EsT0FBTyxDQUFDckUsS0FBUixDQUFjLENBQWQsRUFBZ0IsQ0FBaEI7QUFBWCxTQUFkO0FBQ0gsT0FSRDtBQVNIOzs7V0FDRCxrQkFBUztBQUNMLFVBQU9xRSxPQUFQLEdBQWtCLEtBQUtsRyxLQUF2QixDQUFPa0csT0FBUDtBQUNBLDBCQUNJO0FBQVMsaUJBQVMsRUFBQztBQUFuQixzQkFDSTtBQUFLLFdBQUcsRUFBQztBQUFULFFBREosZUFFSSxrREFBQyxvREFBRDtBQUFlLFlBQUksRUFBRUE7QUFBckIsUUFGSixlQUdJLGtEQUFDLHNFQUFEO0FBQ0ksa0JBQVUsRUFBQyxTQURmO0FBRUksa0JBQVUsRUFBQyxnQkFGZjtBQUdJLGVBQU8sRUFBRTtBQUFDSyxnQkFBTSxFQUFFLEdBQVQ7QUFBZUMsZUFBSyxFQUFHO0FBQXZCLFNBSGI7QUFJSSxZQUFJLEVBQUM7QUFKVCxRQUhKLENBREo7QUFZSDs7OztFQXZDY25FLDZDOztBQTBDbkIsaUVBQWV6RCxJQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1FLE07Ozs7Ozs7Ozs7Ozs7Ozs7NERBQ007QUFDSlUsVUFBSSxFQUFHO0FBQ0NtQixnQkFBUSxFQUFHLEVBRFo7QUFFQzhGLGdCQUFRLEVBQUc7QUFGWixPQURIO0FBS0ovRyxZQUFNLEVBQUcsRUFMTDtBQU1KZ0gsaUJBQVcsRUFBRyxDQU5WO0FBT0pqRyxhQUFPLEVBQUcsS0FQTjtBQVFKa0csZ0JBQVUsRUFBRztBQVJULEs7OzZEQVdDO0FBQ0xoRyxjQUFRLEVBQUdoQiwwREFBQSxHQUFhQyxRQUFiLEdBQXdCRSxHQUF4QixDQUE0QixFQUE1QixDQUROO0FBRUwyRyxjQUFRLEVBQUc5RywwREFBQSxHQUFhQyxRQUFiLEdBQXdCQyxHQUF4QixDQUE0QixDQUE1QixFQUErQkMsR0FBL0IsQ0FBbUMsRUFBbkM7QUFGTixLOzsrREFJRSxZQUFNO0FBQ2IsWUFBS3VCLFFBQUwsQ0FBYztBQUFDWixlQUFPLEVBQUcsSUFBWDtBQUFrQmtHLGtCQUFVLEVBQUc7QUFBL0IsT0FBZDs7QUFDQSxVQUFNbkgsSUFBSSxHQUFHO0FBQ1RtQixnQkFBUSxFQUFHLE1BQUtYLEtBQUwsQ0FBV1IsSUFBWCxDQUFnQm1CLFFBRGxCO0FBRVQ4RixnQkFBUSxFQUFHLE1BQUt6RyxLQUFMLENBQVdSLElBQVgsQ0FBZ0JpSDtBQUZsQixPQUFiO0FBSUExRixtREFBSyxDQUFDO0FBQ0ZDLGNBQU0sRUFBRSxNQUROO0FBRUZDLFdBQUcsRUFBRSxXQUZIO0FBR0Z6QixZQUFJLEVBQUVBLElBSEo7QUFJRjBCLGVBQU8sRUFBRTtBQUFDLDhCQUFvQjtBQUFyQjtBQUpQLE9BQUQsQ0FBTCxDQU1DQyxJQU5ELENBTU0sVUFBQ0MsR0FBRCxFQUFTO0FBQ1gsY0FBS0MsUUFBTCxDQUFjO0FBQUNaLGlCQUFPLEVBQUMsS0FBVDtBQUFpQmtHLG9CQUFVLEVBQUc7QUFBOUIsU0FBZDs7QUFDQSxZQUFJdkYsR0FBRyxDQUFDK0MsTUFBSixLQUFlLEdBQW5CLEVBQXVCO0FBQ3ZCeEIsb0VBQUEsQ0FBYyxxQkFBZCxFQUFxQyxNQUFLaUUsWUFBMUM7QUFDQTFILHNCQUFZLENBQUNnQixPQUFiLENBQXFCLFdBQXJCLEVBQWlDLE1BQWpDO0FBQ0F1RSxvQkFBVSxDQUFFLFlBQU07QUFBQ3BGLG9CQUFRLENBQUNjLFFBQVQsQ0FBa0JDLElBQWxCLEdBQXVCLE9BQXZCO0FBQWdDLFdBQXpDLEVBQTBDLElBQTFDLENBQVY7QUFDQztBQUNKLE9BYkQsV0FjTyxVQUFDc0UsR0FBRCxFQUFTO0FBQ1osY0FBS3JELFFBQUwsQ0FBYztBQUFDWixpQkFBTyxFQUFDLEtBQVQ7QUFBaUJrRyxvQkFBVSxFQUFHO0FBQTlCLFNBQWQ7O0FBQ0FoRSxnRUFBQSxDQUFZLDJCQUFaLEVBQXlDLE1BQUtpRSxZQUE5QztBQUNBLFlBQUlGLFdBQVcsR0FBRyxNQUFLMUcsS0FBTCxDQUFXMEcsV0FBN0I7QUFDQUEsbUJBQVc7O0FBQ1gsY0FBS3JGLFFBQUwsQ0FBYztBQUFDcUYscUJBQVcsRUFBQ0EsV0FBYjtBQUEyQmxILGNBQUksRUFBRztBQUFFbUIsb0JBQVEsRUFBRyxFQUFiO0FBQWtCOEYsb0JBQVEsRUFBRztBQUE3QixXQUFsQztBQUFxRUUsb0JBQVUsRUFBRTtBQUFqRixTQUFkO0FBQ0gsT0FwQkQ7QUFxQkgsSzs7Ozs7OztXQUNELGtCQUFTO0FBQ0wsd0JBQTZDLEtBQUszRyxLQUFsRDtBQUFBLFVBQU8wRyxXQUFQLGVBQU9BLFdBQVA7QUFBQSxVQUFvQmpHLE9BQXBCLGVBQW9CQSxPQUFwQjtBQUFBLFVBQThCa0csVUFBOUIsZUFBOEJBLFVBQTlCO0FBQ0EsMEJBQ0ksNEVBQ0ksa0RBQUMsMkRBQUQsT0FESixFQUVLbEcsT0FBTyxLQUFLLElBQVosZ0JBQW1CLGtEQUFDLHdEQUFELE9BQW5CLEdBQW1DLElBRnhDLGVBR0k7QUFBSSxpQkFBUyxFQUFDO0FBQWQsc0JBSEosZUFJSSxzR0FBMkIsa0RBQUMsbURBQUQ7QUFBTSxVQUFFLEVBQUM7QUFBVCxlQUEzQiwwQkFKSixlQUtJO0FBQU0sZ0JBQVEsRUFBRSxLQUFLSixZQUFyQjtBQUFtQyxpQkFBUyxFQUFDO0FBQTdDLFNBQ0ssS0FBS0MsV0FBTCxDQUFpQixVQUFqQixFQUE0QixzQkFBNUIsRUFBbUQsTUFBbkQsRUFBMEQsT0FBMUQsQ0FETCxFQUVLLEtBQUtBLFdBQUwsQ0FBaUIsVUFBakIsRUFBNEIsZ0JBQTVCLEVBQTZDLFVBQTdDLEVBQXdELE9BQXhELENBRkwsRUFHS29HLFdBQVcsSUFBSSxDQUFmLGdCQUFtQixpSUFBbUQsa0RBQUMsbURBQUQ7QUFBTSxVQUFFLEVBQUM7QUFBVCxlQUFuRCw4QkFBbkIsR0FBdUksSUFINUksZUFJSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNLLEtBQUtuRyxZQUFMLENBQWtCb0csVUFBbEIsRUFBNkIsbUJBQTdCLENBREwsZUFFSSxrREFBQyxtREFBRDtBQUFNLFVBQUUsRUFBQyxPQUFUO0FBQWlCLGlCQUFTLEVBQUM7QUFBM0IsbUJBRkosQ0FKSixDQUxKLENBREo7QUFpQkg7Ozs7RUEvRGdCbkcsa0Q7O0FBa0VyQixpRUFBZTFCLE1BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFHTUQsTzs7Ozs7Ozs7Ozs7Ozs7Ozs0REFFTTtBQUNKcUgsYUFBTyxFQUFHLEVBRE47QUFFSlcscUJBQWUsRUFBRyxFQUZkO0FBR0pDLFlBQU0sRUFBRSxFQUhKO0FBSUpDLG1CQUFhLEVBQUcsRUFKWjtBQUtKQyxXQUFLLEVBQUcsRUFMSjtBQU1KQyxrQkFBWSxFQUFHLEVBTlg7QUFPSkMsV0FBSyxFQUFHLEVBUEo7QUFRSkMsa0JBQVksRUFBRyxFQVJYO0FBU0pDLGlCQUFXLEVBQUcsQ0FUVjtBQVVKQyxjQUFRLEVBQUcsQ0FWUDtBQVdKekYsVUFBSSxFQUFHLElBQUkwRixJQUFKLENBQVMsT0FBVDtBQVhILEs7O3VFQWdDVyxVQUFDQyxJQUFELEVBQVU7QUFDekIsWUFBS2xHLFFBQUwsQ0FBYztBQUFFK0YsbUJBQVcsRUFBR0c7QUFBaEIsT0FBZDtBQUNILEs7O3dFQUNtQixVQUFDcEMsS0FBRCxFQUFXO0FBQzNCLFVBQU1lLE9BQU8sc0JBQU8sTUFBS2xHLEtBQUwsQ0FBV2tHLE9BQWxCLENBQWI7O0FBQ0EsVUFBSWYsS0FBSyxLQUFLLEtBQWQsRUFBb0I7QUFDaEIsY0FBSzlELFFBQUwsQ0FBYztBQUFFd0YseUJBQWUsRUFBR1gsT0FBcEI7QUFBOEJhLHVCQUFhLEVBQUU7QUFBN0MsU0FBZDtBQUNILE9BRkQsTUFHSTtBQUNBLFlBQU1GLGVBQWUsR0FBR1gsT0FBTyxDQUFDc0IsTUFBUixDQUFnQixVQUFBQyxDQUFDO0FBQUEsaUJBQUlBLENBQUMsQ0FBQ3RDLEtBQUYsS0FBWUEsS0FBaEI7QUFBQSxTQUFqQixDQUF4Qjs7QUFDQSxjQUFLOUQsUUFBTCxDQUFjO0FBQUN3Rix5QkFBZSxFQUFmQSxlQUFEO0FBQW1CRSx1QkFBYSxFQUFHNUIsS0FBbkM7QUFBMkNnQyxzQkFBWSxFQUFHLEVBQTFEO0FBQStERixzQkFBWSxFQUFHLEVBQTlFO0FBQW1GRyxxQkFBVyxFQUFFO0FBQWhHLFNBQWQ7QUFDSDtBQUNKLEs7O3VFQUNrQixVQUFDeEYsSUFBRCxFQUFVO0FBQ3pCLFVBQU1zRSxPQUFPLHNCQUFPLE1BQUtsRyxLQUFMLENBQVdrRyxPQUFsQixDQUFiOztBQUNBLFVBQUl0RSxJQUFJLEtBQUssS0FBYixFQUFtQjtBQUNmLGNBQUtQLFFBQUwsQ0FBYztBQUFFd0YseUJBQWUsRUFBR1gsT0FBcEI7QUFBOEJlLHNCQUFZLEVBQUU7QUFBNUMsU0FBZDtBQUNILE9BRkQsTUFHSTtBQUNBLFlBQU1KLGVBQWUsR0FBR1gsT0FBTyxDQUFDc0IsTUFBUixDQUFnQixVQUFBQyxDQUFDO0FBQUEsaUJBQUlBLENBQUMsQ0FBQzdGLElBQUYsS0FBV0EsSUFBZjtBQUFBLFNBQWpCLENBQXhCOztBQUNBLGNBQUtQLFFBQUwsQ0FBYztBQUFDd0YseUJBQWUsRUFBZkEsZUFBRDtBQUFtQkksc0JBQVksRUFBR3JGLElBQWxDO0FBQXlDdUYsc0JBQVksRUFBRyxFQUF4RDtBQUE2REosdUJBQWEsRUFBRyxFQUE3RTtBQUFpRksscUJBQVcsRUFBRTtBQUE5RixTQUFkO0FBQ0g7QUFDSixLOzt1RUFDa0IsVUFBQ00sSUFBRCxFQUFVO0FBQ3pCLFVBQU14QixPQUFPLHNCQUFPLE1BQUtsRyxLQUFMLENBQVdrRyxPQUFsQixDQUFiOztBQUNBLFVBQUl3QixJQUFJLEtBQUssS0FBYixFQUFtQjtBQUNmLGNBQUtyRyxRQUFMLENBQWM7QUFBRXdGLHlCQUFlLEVBQUdYLE9BQXBCO0FBQThCaUIsc0JBQVksRUFBRyxFQUE3QztBQUFpREMscUJBQVcsRUFBRTtBQUE5RCxTQUFkO0FBQ0gsT0FGRCxNQUdJO0FBQ0EsWUFBTVAsZUFBZSxHQUFHWCxPQUFPLENBQUNzQixNQUFSLENBQWdCLFVBQUFDLENBQUM7QUFBQSxpQkFBSUEsQ0FBQyxDQUFDeEYsUUFBRixLQUFleUYsSUFBZixJQUF1QkQsQ0FBQyxDQUFDdkYsUUFBRixLQUFld0YsSUFBMUM7QUFBQSxTQUFqQixDQUF4Qjs7QUFDQSxjQUFLckcsUUFBTCxDQUFjO0FBQUN3Rix5QkFBZSxFQUFmQSxlQUFEO0FBQW1CTSxzQkFBWSxFQUFHTyxJQUFsQztBQUF5Q1Qsc0JBQVksRUFBRyxFQUF4RDtBQUE2REYsdUJBQWEsRUFBRztBQUE3RSxTQUFkO0FBQ0g7QUFDSixLOzttRUFDYyxZQUFNO0FBQ2pCLHdCQUFrRCxNQUFLL0csS0FBdkQ7QUFBQSxVQUFRcUgsUUFBUixlQUFRQSxRQUFSO0FBQUEsVUFBa0JELFdBQWxCLGVBQWtCQSxXQUFsQjtBQUFBLFVBQStCUCxlQUEvQixlQUErQkEsZUFBL0I7QUFDQSxVQUFNYyxnQkFBZ0IsR0FBR0MsOERBQVEsQ0FBQ2YsZUFBRCxFQUFpQk8sV0FBakIsRUFBNkJDLFFBQTdCLENBQWpDO0FBQ0EsYUFBTztBQUFFUSxrQkFBVSxFQUFFaEIsZUFBZSxDQUFDdEYsTUFBOUI7QUFBc0MvQixZQUFJLEVBQUVtSTtBQUE1QyxPQUFQO0FBQ0gsSzs7bUVBQ2MsWUFBTTtBQUNqQixVQUFLUCxXQUFMLEdBQW9CLE1BQUtwSCxLQUF6QixDQUFLb0gsV0FBTDs7QUFDQSxVQUFJQSxXQUFXLEdBQUUsQ0FBakIsRUFBb0I7QUFDaEJBLG1CQUFXO0FBQ2Q7O0FBQ0QsWUFBSy9GLFFBQUwsQ0FBYztBQUFDK0YsbUJBQVcsRUFBWEE7QUFBRCxPQUFkO0FBQ0gsSzs7K0RBQ1UsWUFBTTtBQUNiLHlCQUE2QyxNQUFLcEgsS0FBbEQ7QUFBQSxVQUFLb0gsV0FBTCxnQkFBS0EsV0FBTDtBQUFBLFVBQWlCUCxlQUFqQixnQkFBaUJBLGVBQWpCO0FBQUEsVUFBaUNRLFFBQWpDLGdCQUFpQ0EsUUFBakM7O0FBQ0EsVUFBSUQsV0FBVyxHQUFHVSxJQUFJLENBQUNDLElBQUwsQ0FBVWxCLGVBQWUsQ0FBQ3RGLE1BQWhCLEdBQXlCOEYsUUFBbkMsQ0FBbEIsRUFBZ0U7QUFDNURELG1CQUFXO0FBQ2Q7O0FBQ0QsWUFBSy9GLFFBQUwsQ0FBYztBQUFDK0YsbUJBQVcsRUFBWEE7QUFBRCxPQUFkO0FBQ0gsSzs7Ozs7OztXQXJFRCw2QkFBbUI7QUFDZixXQUFLakIsVUFBTDtBQUNIOzs7V0FFRCxzQkFBYTtBQUFBOztBQUNUcEYsdURBQUEsd0ZBQWlHSSxJQUFqRyxDQUFzRyxVQUFBQyxHQUFHLEVBQUk7QUFDekcsWUFBTThFLE9BQU8sR0FBRzlFLEdBQUcsQ0FBQzVCLElBQUosQ0FBU3FDLEtBQVQsQ0FBZSxDQUFmLEVBQWlCLEVBQWpCLENBQWhCO0FBQ0EsWUFBTW1GLEtBQUssR0FBRyxFQUFkO0FBQ0EsWUFBTUUsS0FBSyxHQUFHLEVBQWQ7QUFDQSxZQUFNSixNQUFNLEdBQUcsRUFBZjtBQUNBWixlQUFPLENBQUMxRSxHQUFSLENBQWEsVUFBQWlHLENBQUMsRUFBSTtBQUNkLGNBQUksQ0FBQ1QsS0FBSyxDQUFDZ0IsUUFBTixDQUFlUCxDQUFDLENBQUM3RixJQUFqQixDQUFMLEVBQTZCb0YsS0FBSyxDQUFDVixJQUFOLENBQVdtQixDQUFDLENBQUM3RixJQUFiO0FBQzdCLGNBQUksQ0FBQ3NGLEtBQUssQ0FBQ2MsUUFBTixDQUFlUCxDQUFDLENBQUN4RixRQUFqQixDQUFMLEVBQWlDaUYsS0FBSyxDQUFDWixJQUFOLENBQVdtQixDQUFDLENBQUN4RixRQUFiO0FBQ2pDLGNBQUksQ0FBQzZFLE1BQU0sQ0FBQ2tCLFFBQVAsQ0FBZ0JQLENBQUMsQ0FBQ3RDLEtBQWxCLENBQUwsRUFBK0IyQixNQUFNLENBQUNSLElBQVAsQ0FBWW1CLENBQUMsQ0FBQ3RDLEtBQWQ7QUFDbEMsU0FKRDs7QUFLQSxjQUFJLENBQUM5RCxRQUFMLENBQWM7QUFBRTZFLGlCQUFPLEVBQVBBLE9BQUY7QUFBWWdCLGVBQUssRUFBR0EsS0FBSyxDQUFDZSxJQUFOLEVBQXBCO0FBQW1DakIsZUFBSyxFQUFMQSxLQUFuQztBQUEyQ0YsZ0JBQU0sRUFBTkEsTUFBM0M7QUFBb0RELHlCQUFlLEVBQUdYO0FBQXRFLFNBQWQ7QUFDSCxPQVhEO0FBWUg7OztXQXFERCxrQkFBUztBQUNMLHlCQUEySCxLQUFLbEcsS0FBaEk7QUFBQSxVQUFRcUgsUUFBUixnQkFBUUEsUUFBUjtBQUFBLFVBQW1CRCxXQUFuQixnQkFBbUJBLFdBQW5CO0FBQUEsVUFBZ0NQLGVBQWhDLGdCQUFnQ0EsZUFBaEM7QUFBQSxVQUFrREUsYUFBbEQsZ0JBQWtEQSxhQUFsRDtBQUFBLFVBQWlFRSxZQUFqRSxnQkFBaUVBLFlBQWpFO0FBQUEsVUFBZ0ZFLFlBQWhGLGdCQUFnRkEsWUFBaEY7QUFBQSxVQUErRkgsS0FBL0YsZ0JBQStGQSxLQUEvRjtBQUFBLFVBQXdHRixNQUF4RyxnQkFBd0dBLE1BQXhHO0FBQUEsVUFBaUhJLEtBQWpILGdCQUFpSEEsS0FBakg7O0FBQ0EsK0JBQThCLEtBQUtnQixZQUFMLEVBQTlCO0FBQUEsVUFBUUwsVUFBUixzQkFBUUEsVUFBUjtBQUFBLFVBQXFCckksSUFBckIsc0JBQXFCQSxJQUFyQjs7QUFDQSwwQkFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFJLGlCQUFTLEVBQUM7QUFBZCwyQkFESixlQUM4Qyw2REFEOUMsZUFFSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSSxrREFBQyw2Q0FBRDtBQUNJLGFBQUssRUFBRSxTQURYO0FBRUksYUFBSyxFQUFFc0gsTUFGWDtBQUdJLG9CQUFZLEVBQUVDLGFBSGxCO0FBSUksb0JBQVksRUFBRSxLQUFLb0I7QUFKdkIsUUFESixDQUZKLGVBVUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0ksa0RBQUMsNkNBQUQ7QUFDSSxhQUFLLEVBQUUsT0FEWDtBQUVJLGFBQUssRUFBRW5CLEtBRlg7QUFHSSxvQkFBWSxFQUFFQyxZQUhsQjtBQUlJLG9CQUFZLEVBQUUsS0FBS21CO0FBSnZCLFFBREosQ0FWSixlQWtCSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSSxrREFBQyw2Q0FBRDtBQUNJLGFBQUssRUFBRSxTQURYO0FBRUksYUFBSyxFQUFFbEIsS0FGWDtBQUdJLG9CQUFZLEVBQUVDLFlBSGxCO0FBSUksb0JBQVksRUFBRSxLQUFLa0I7QUFKdkIsUUFESixDQWxCSixlQTBCSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNLN0ksSUFBSSxDQUFDZ0MsR0FBTCxDQUFTLFVBQUF1QyxLQUFLO0FBQUEsNEJBQ2Ysa0RBQUMsMkNBQUQ7QUFBTSxlQUFLLEVBQUVBLEtBQWI7QUFBb0IsYUFBRyxFQUFFQSxLQUFLLENBQUNDO0FBQS9CLFVBRGU7QUFBQSxPQUFkLENBREwsQ0ExQkosZUErQkk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0ksa0RBQUMsd0RBQUQ7QUFDSSxrQkFBVSxFQUFFNkQsVUFEaEI7QUFFSSxnQkFBUSxFQUFFUixRQUZkO0FBR0ksbUJBQVcsRUFBRUQsV0FIakI7QUFJSSxvQkFBWSxFQUFFLEtBQUtrQixnQkFKdkI7QUFLSSxvQkFBWSxFQUFFLEtBQUtDLFlBTHZCO0FBTUksZ0JBQVEsRUFBRSxLQUFLQztBQU5uQixRQURKLENBL0JKLENBREo7QUE0Q0g7Ozs7RUFySWlCbkcsNkM7O0FBd0l0QixpRUFBZXhELE9BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSkE7QUFDQTtBQUNBOztJQUVNSSxPOzs7Ozs7Ozs7Ozs7Ozs7OzREQUNNO0FBQ0pPLFVBQUksRUFBRztBQUNIaUosYUFBSyxFQUFHO0FBREwsT0FESDtBQUlKaEksYUFBTyxFQUFHO0FBSk4sSzs7Ozs7OztXQU1SLDZCQUFtQjtBQUNmLFdBQUtpSSxRQUFMO0FBQ0g7OztXQUVELG9CQUFVO0FBQUE7O0FBQ04sV0FBS3JILFFBQUwsQ0FBYztBQUFDWixlQUFPLEVBQUM7QUFBVCxPQUFkO0FBQ0FNLHVEQUFBLENBQVUsa0JBQVYsRUFBOEJJLElBQTlCLENBQW1DLFVBQUNDLEdBQUQ7QUFBQSxlQUNuQyxNQUFJLENBQUNDLFFBQUwsQ0FBYztBQUFDN0IsY0FBSSxFQUFHO0FBQUNpSixpQkFBSyxFQUFHckgsR0FBRyxDQUFDNUIsSUFBSixDQUFTbUo7QUFBbEIsV0FBUjtBQUF1Q2xJLGlCQUFPLEVBQUc7QUFBakQsU0FBZCxDQURtQztBQUFBLE9BQW5DO0FBRUg7OztXQUVELGtCQUFTO0FBQ0wsVUFBT2dJLEtBQVAsR0FBZ0IsS0FBS3pJLEtBQUwsQ0FBV1IsSUFBM0IsQ0FBT2lKLEtBQVA7QUFDQSxVQUFPaEksT0FBUCxHQUFrQixLQUFLVCxLQUF2QixDQUFPUyxPQUFQO0FBQ0EsMEJBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBZ0JRO0FBQUksaUJBQVMsRUFBQztBQUFkLG1DQWhCUixlQWlCUTtBQUFRLFdBQUcsRUFBQyw4Q0FBWjtBQUEyRCxtQkFBVyxFQUFDLEdBQXZFO0FBQTJFLGlCQUFTLEVBQUMsSUFBckY7QUFBMEYsYUFBSyxFQUFDLEtBQWhHO0FBQXNHLGNBQU0sRUFBQztBQUE3RyxRQWpCUixDQURKO0FBcUJIOzs7O0VBekNpQjRCLDZDOztBQTRDdEIsaUVBQWVwRCxPQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoREE7O0FBRUEsSUFBTTJKLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDakIsc0JBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFBNEIsNkRBQTVCLGVBQXVDLDZEQUF2QyxlQUFrRCw2REFBbEQsZUFBNkQsNkRBQTdELGVBQXdFLDZEQUF4RSxlQUFtRiw2REFBbkYsZUFBOEYsNkRBQTlGLGVBQXlHLDZEQUF6RyxDQURKO0FBR0gsQ0FKRDs7QUFNQSxpRUFBZUEsTUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7O0lBRU1wSSxJOzs7Ozs7Ozs7Ozs7Ozs7OzREQUNNO0FBQ0poQixVQUFJLEVBQUUsRUFERjtBQUVKRSxZQUFNLEVBQUU7QUFGSixLOzttRUFJTztBQUNYMEUsY0FBUSxFQUFFLFlBREM7QUFFWEMsZUFBUyxFQUFFLElBRkE7QUFHWEMscUJBQWUsRUFBRSxLQUhOO0FBSVhDLGtCQUFZLEVBQUUsSUFKSDtBQUtYQyxpQkFBVyxFQUFFO0FBTEYsSzs7K0RBT0osWUFBTTtBQUNiLFVBQU0zQixPQUFPLEdBQUc7QUFBQ0Msa0JBQVUsRUFBRztBQUFkLE9BQWhCOztBQUNBLDBCQUFnQm5ELDREQUFBLENBQWEsTUFBS0ssS0FBTCxDQUFXUixJQUF4QixFQUE4QixNQUFLdUQsTUFBbkMsRUFBNENGLE9BQTVDLENBQWhCO0FBQUEsVUFBT0csS0FBUCxpQkFBT0EsS0FBUDs7QUFDQSxVQUFJLENBQUNBLEtBQUwsRUFBWSxPQUFPLElBQVA7QUFFWixVQUFNdEQsTUFBTSxHQUFHLEVBQWY7O0FBTGEsaURBTUlzRCxLQUFLLENBQUNDLE9BTlY7QUFBQTs7QUFBQTtBQU1iO0FBQUEsY0FBU0MsSUFBVDtBQUNJeEQsZ0JBQU0sQ0FBQ3dELElBQUksQ0FBQ0MsSUFBTCxDQUFVLENBQVYsQ0FBRCxDQUFOLEdBQXVCRCxJQUFJLENBQUNFLE9BQTVCO0FBREo7QUFOYTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVFiLGFBQU8xRCxNQUFQO0FBQ0gsSzs7dUVBQ2tCLGdCQUFrQjtBQUFBLFVBQWhCNkQsSUFBZ0IsUUFBaEJBLElBQWdCO0FBQUEsVUFBWEMsS0FBVyxRQUFYQSxLQUFXOztBQUNqQyxVQUFNcUYsR0FBRyx1QkFBTXRGLElBQU4sRUFBY0MsS0FBZCxDQUFUOztBQUNBLFVBQU1ULE1BQU0sdUJBQU1RLElBQU4sRUFBYyxNQUFLUixNQUFMLENBQVlRLElBQVosQ0FBZCxDQUFaOztBQUNBLFVBQUl1RixZQUFKOztBQUNBLFVBQUluSiw0REFBQSxDQUFha0osR0FBYixFQUFpQjlGLE1BQWpCLEVBQXlCQyxLQUF6QixLQUFtQyxJQUF2QyxFQUE0QztBQUN4QyxZQUFJLENBQUNPLElBQUQsRUFBTyxDQUFQLE1BQWMsVUFBbEIsRUFBNkI7QUFDekIsY0FBTVAsS0FBSyxHQUFHckQsNERBQUEsQ0FBYWtKLEdBQWIsRUFBaUI5RixNQUFqQixFQUF5QkMsS0FBekIsQ0FBK0JDLE9BQS9CLENBQXVDLENBQXZDLEVBQTBDOEYsSUFBeEQ7O0FBQ0Esa0JBQVEvRixLQUFSO0FBQ0ksaUJBQUssV0FBTDtBQUNJOEYsMEJBQVksR0FBRywyQ0FBZjtBQUNBOztBQUNKLGlCQUFLLFlBQUw7QUFDSUEsMEJBQVksR0FBRyxxREFBZjtBQUNBO0FBTlI7QUFRSDs7QUFDRCxZQUFJLENBQUN2RixJQUFELEVBQU8sQ0FBUCxNQUFjLFVBQWxCLEVBQTZCO0FBQ3pCLGNBQU1QLE1BQUssR0FBR3JELDREQUFBLENBQWFrSixHQUFiLEVBQWlCOUYsTUFBakIsRUFBeUJDLEtBQXpCLENBQStCQyxPQUEvQixDQUF1QyxDQUF2QyxFQUEwQzhGLElBQXhEOztBQUNBLGtCQUFRL0YsTUFBUjtBQUNJLGlCQUFLLFdBQUw7QUFDSThGLDBCQUFZLEdBQUcscUNBQWY7QUFDQTs7QUFDSixpQkFBSyxZQUFMO0FBQ0lBLDBCQUFZLEdBQUcscURBQWY7QUFDQTs7QUFDSixpQkFBSyxZQUFMO0FBQ0lBLDBCQUFZLEdBQUcsb0RBQWY7QUFDQTtBQVRSO0FBV0g7O0FBQ0QsWUFBSSxDQUFDdkYsSUFBRCxFQUFPLENBQVAsTUFBYyxPQUFsQixFQUEwQjtBQUN0QixjQUFNUCxPQUFLLEdBQUdyRCw0REFBQSxDQUFha0osR0FBYixFQUFpQjlGLE1BQWpCLEVBQXlCQyxLQUF6QixDQUErQkMsT0FBL0IsQ0FBdUMsQ0FBdkMsRUFBMEM4RixJQUF4RDs7QUFDQSxrQkFBUS9GLE9BQVI7QUFDSSxpQkFBSyxjQUFMO0FBQ0k4RiwwQkFBWSxHQUFHLHNDQUFmO0FBQ0E7O0FBQ0osaUJBQUssV0FBTDtBQUNJQSwwQkFBWSxHQUFHLHVDQUFmO0FBQ0E7QUFOUjtBQVFIOztBQUNELFlBQUksQ0FBQ3ZGLElBQUQsRUFBTyxDQUFQLE1BQWMsTUFBbEIsRUFBeUI7QUFDckIsY0FBTVAsT0FBSyxHQUFHckQsNERBQUEsQ0FBYWtKLEdBQWIsRUFBaUI5RixNQUFqQixFQUF5QkMsS0FBekIsQ0FBK0JDLE9BQS9CLENBQXVDLENBQXZDLEVBQTBDOEYsSUFBeEQ7O0FBQ0Esa0JBQVEvRixPQUFSO0FBQ0ksaUJBQUssV0FBTDtBQUNJOEYsMEJBQVksR0FBRyxzQ0FBZjtBQUNBO0FBSFI7QUFLSDtBQUNKOztBQUNELGFBQU9BLFlBQVA7QUFDSCxLOzttRUFDYyxVQUFDckYsQ0FBRCxFQUFPO0FBQ2xCQSxPQUFDLENBQUNDLGNBQUY7O0FBQ0EsVUFBTWhFLE1BQU0sR0FBRyxNQUFLaUUsUUFBTCxFQUFmOztBQUNBLFlBQUt0QyxRQUFMLENBQWM7QUFBRTNCLGNBQU0sRUFBR0EsTUFBTSxJQUFJO0FBQXJCLE9BQWQ7O0FBQ0EsVUFBSUEsTUFBSixFQUFZOztBQUNaLFlBQUtrRSxRQUFMO0FBQ0gsSzs7bUVBQ2MsaUJBQTZCO0FBQUEsVUFBWFAsS0FBVyxTQUEzQkMsYUFBMkI7O0FBQ3hDLFVBQU01RCxNQUFNLHFCQUFPLE1BQUtNLEtBQUwsQ0FBV04sTUFBbEIsQ0FBWjs7QUFDQSxVQUFNb0osWUFBWSxHQUFHLE1BQUtFLGdCQUFMLENBQXNCM0YsS0FBdEIsQ0FBckI7O0FBQ0EsVUFBSXlGLFlBQUosRUFBa0JwSixNQUFNLENBQUMyRCxLQUFLLENBQUNFLElBQVAsQ0FBTixHQUFxQnVGLFlBQXJCLENBQWxCLEtBQ0ssT0FBT3BKLE1BQU0sQ0FBQzJELEtBQUssQ0FBQ0UsSUFBUCxDQUFiOztBQUVMLFVBQU0vRCxJQUFJLHFCQUFPLE1BQUtRLEtBQUwsQ0FBV1IsSUFBbEIsQ0FBVjs7QUFDQUEsVUFBSSxDQUFDNkQsS0FBSyxDQUFDRSxJQUFQLENBQUosR0FBbUJGLEtBQUssQ0FBQ0csS0FBekI7O0FBQ0EsWUFBS25DLFFBQUwsQ0FBYztBQUFDN0IsWUFBSSxFQUFKQSxJQUFEO0FBQVFFLGNBQU0sRUFBTkE7QUFBUixPQUFkO0FBQ0gsSzs7Ozs7OztXQUNELHFCQUFZNkQsSUFBWixFQUFpQm9DLEtBQWpCLEVBQXVCb0QsSUFBdkIsRUFBNEJFLFNBQTVCLEVBQXNDO0FBQ2xDLHdCQUF5QixLQUFLakosS0FBOUI7QUFBQSxVQUFRUixJQUFSLGVBQVFBLElBQVI7QUFBQSxVQUFjRSxNQUFkLGVBQWNBLE1BQWQ7QUFFQSwwQkFBTyxrREFBQyw0Q0FBRDtBQUNLLFlBQUksRUFBRXFKLElBRFg7QUFFSyxZQUFJLEVBQUV4RixJQUZYO0FBR0ssYUFBSyxFQUFFL0QsSUFBSSxDQUFDK0QsSUFBRCxDQUhoQjtBQUlLLGlCQUFTLEVBQUUwRixTQUpoQjtBQUtLLGFBQUssRUFBRXRELEtBTFo7QUFNSyxnQkFBUSxFQUFFLEtBQUtOLFlBTnBCO0FBT0ssYUFBSyxFQUFFM0YsTUFBTSxDQUFDNkQsSUFBRDtBQVBsQixRQUFQO0FBU0g7OztXQUNELHNCQUFhb0MsS0FBYixFQUFtQnNELFNBQW5CLEVBQTZCO0FBQ3pCLDBCQUFPO0FBQVEsZ0JBQVEsRUFBRSxLQUFLdEYsUUFBTCxFQUFsQjtBQUFtQyxpQkFBUyxFQUFFc0Y7QUFBOUMsU0FBMER0RCxLQUExRCxDQUFQO0FBQ0g7Ozs7RUExR2N0RCw2Qzs7QUE2R25CLGlFQUFlN0IsSUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakhBOztBQUVBLElBQU0wSSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUE0RDtBQUFBLE1BQTFEM0YsSUFBMEQsUUFBMURBLElBQTBEO0FBQUEsTUFBcERvQyxLQUFvRCxRQUFwREEsS0FBb0Q7QUFBQSxNQUE3Q25DLEtBQTZDLFFBQTdDQSxLQUE2QztBQUFBLE1BQXRDeUYsU0FBc0MsUUFBdENBLFNBQXNDO0FBQUEsTUFBM0JGLElBQTJCLFFBQTNCQSxJQUEyQjtBQUFBLE1BQXJCL0YsS0FBcUIsUUFBckJBLEtBQXFCO0FBQUEsTUFBZG1HLFFBQWMsUUFBZEEsUUFBYztBQUV0RSxzQkFDSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJO0FBQU8sYUFBUyxFQUFDLE9BQWpCO0FBQXlCLFdBQU8sRUFBRTVGO0FBQWxDLEtBQXlDb0MsS0FBekMsQ0FESixlQUVJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0k7QUFDSSxTQUFLLEVBQUVuQyxLQURYO0FBRUksWUFBUSxFQUFFMkYsUUFGZDtBQUdJLGFBQVMsRUFBRW5HLEtBQUssR0FBRSxhQUFXaUcsU0FBYixHQUF3QkEsU0FINUM7QUFJSSxRQUFJLEVBQUVGLElBSlY7QUFLSSxRQUFJLEVBQUV4RixJQUxWO0FBTUksTUFBRSxFQUFFQTtBQU5SLElBREosRUFRU1AsS0FBSyxpQkFBSTtBQUFHLGFBQVMsRUFBQztBQUFiLEtBQXlCQSxLQUFLLENBQUNnRCxPQUFOLENBQWMsSUFBZCxFQUFtQixFQUFuQixDQUF6QixNQVJsQixDQUZKLENBREo7QUFlSCxDQWpCRDs7QUFtQkEsaUVBQWVrRCxLQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBOztBQUVBLElBQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQW1GO0FBQUEsTUFBakZDLFVBQWlGLFFBQWpGQSxVQUFpRjtBQUFBLE1BQXBFaEMsUUFBb0UsUUFBcEVBLFFBQW9FO0FBQUEsTUFBekRELFdBQXlELFFBQXpEQSxXQUF5RDtBQUFBLE1BQTVDa0MsWUFBNEMsUUFBNUNBLFlBQTRDO0FBQUEsTUFBN0JmLFlBQTZCLFFBQTdCQSxZQUE2QjtBQUFBLE1BQWRDLFFBQWMsUUFBZEEsUUFBYztBQUNsRyxNQUFNZSxVQUFVLEdBQUd6QixJQUFJLENBQUNDLElBQUwsQ0FBVXNCLFVBQVUsR0FBR2hDLFFBQXZCLENBQW5CO0FBQ0EsTUFBR2tDLFVBQVUsS0FBRyxDQUFoQixFQUFtQixPQUFPLElBQVA7O0FBQ25CLE1BQU1DLEtBQUssR0FBR0MsbURBQUEsQ0FBUSxDQUFSLEVBQVdGLFVBQVUsR0FBQyxDQUF0QixDQUFkOztBQUVBLHNCQUNJLDJFQUNJO0FBQUksYUFBUyxFQUFDO0FBQWQsa0JBQ0k7QUFBSSxhQUFTLEVBQUMsaUJBQWQ7QUFBZ0MsV0FBTyxFQUFFaEI7QUFBekMsU0FESixFQUVNaUIsS0FBSyxDQUFDaEksR0FBTixDQUFVLFVBQUErRixJQUFJO0FBQUEsd0JBQ1o7QUFBSSxTQUFHLEVBQUVBLElBQVQ7QUFDSSxlQUFTLEVBQUdBLElBQUksS0FBS0gsV0FBVCxHQUFzQiw0QkFBdEIsR0FBcUQsaUJBRHJFO0FBRUksYUFBTyxFQUFFO0FBQUEsZUFBTWtDLFlBQVksQ0FBQy9CLElBQUQsQ0FBbEI7QUFBQTtBQUZiLE9BSUtBLElBSkwsQ0FEWTtBQUFBLEdBQWQsQ0FGTixlQVVJO0FBQUksYUFBUyxFQUFDLGlCQUFkO0FBQWdDLFdBQU8sRUFBRWlCO0FBQXpDLFNBVkosQ0FESixDQURKO0FBZ0JILENBckJEOztBQXVCQSxpRUFBZVksVUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBOztBQUVBLElBQU1NLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDckIsc0JBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFBNEIsNkRBQTVCLGVBQXVDLDZEQUF2QyxDQURKO0FBR0gsQ0FKRDs7QUFNQSxpRUFBZUEsVUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1DLFU7Ozs7Ozs7Ozs7Ozs7Ozs7NERBQ007QUFDSm5LLFVBQUksRUFBRztBQUNIaUgsZ0JBQVEsRUFBRztBQURSLE9BREg7QUFJSi9HLFlBQU0sRUFBRyxFQUpMO0FBS0plLGFBQU8sRUFBRyxLQUxOO0FBTUprRyxnQkFBVSxFQUFHO0FBTlQsSzs7NkRBUUM7QUFDTEYsY0FBUSxFQUFHOUcsMERBQUEsR0FBYUMsUUFBYixHQUF3QkMsR0FBeEIsQ0FBNEIsQ0FBNUIsRUFBK0JDLEdBQS9CLENBQW1DLEVBQW5DO0FBRE4sSzs7Ozs7OztXQUdULG9CQUFVO0FBQUE7O0FBQ044SixhQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLN0osS0FBTCxDQUFXUixJQUFYLENBQWdCaUgsUUFBNUI7QUFDQSxXQUFLcEYsUUFBTCxDQUFjO0FBQUNvRixnQkFBUSxFQUFHLEtBQUt6RyxLQUFMLENBQVdSLElBQVgsQ0FBZ0JpSCxRQUE1QjtBQUF1Q2hHLGVBQU8sRUFBRyxJQUFqRDtBQUF3RGtHLGtCQUFVLEVBQUc7QUFBckUsT0FBZDtBQUNBLFVBQU1uSCxJQUFJLEdBQUc7QUFBRXNLLFlBQUksRUFBRyxLQUFLaEcsS0FBTCxDQUFXaUcsS0FBcEI7QUFBMkJ0RCxnQkFBUSxFQUFHLEtBQUt6RyxLQUFMLENBQVdSLElBQVgsQ0FBZ0JpSDtBQUF0RCxPQUFiO0FBQ0ExRixtREFBSyxDQUFDO0FBQ0ZDLGNBQU0sRUFBRSxNQUROO0FBRUZDLFdBQUcsRUFBRSx5QkFGSDtBQUdGekIsWUFBSSxFQUFFQSxJQUhKO0FBSUYwQixlQUFPLEVBQUU7QUFBQyw4QkFBb0I7QUFBckI7QUFKUCxPQUFELENBQUwsQ0FLR0MsSUFMSCxDQUtRLFVBQUNDLEdBQUQsRUFBUztBQUNidUIsa0VBQUEsQ0FBYyxvQ0FBZCxFQUFvRCxNQUFJLENBQUNpRSxZQUF6RDtBQUNBbkMsa0JBQVUsQ0FBRSxZQUFNO0FBQUNwRixrQkFBUSxDQUFDYyxRQUFULENBQWtCQyxJQUFsQixHQUF1QixRQUF2QjtBQUFpQyxTQUExQyxFQUEyQyxJQUEzQyxDQUFWO0FBQ0gsT0FSRDtBQVNIOzs7V0FDRCxrQkFBUztBQUNMLHdCQUE2QixLQUFLSixLQUFsQztBQUFBLFVBQU9TLE9BQVAsZUFBT0EsT0FBUDtBQUFBLFVBQWVrRyxVQUFmLGVBQWVBLFVBQWY7QUFDQSwwQkFDSTtBQUFNLGdCQUFRLEVBQUUsS0FBS3RHLFlBQXJCO0FBQW1DLGlCQUFTLEVBQUM7QUFBN0MsU0FDSyxLQUFLQyxXQUFMLENBQWlCLFVBQWpCLEVBQTRCLHlCQUE1QixFQUFzRCxNQUF0RCxFQUE2RCxPQUE3RCxDQURMLEVBRUssS0FBS0MsWUFBTCxDQUFrQm9HLFVBQWxCLEVBQTZCLG1CQUE3QixDQUZMLENBREo7QUFNSDs7OztFQWxDb0JuRyxrRDs7QUFxQ3pCLGlFQUFlbUosVUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNM0ssVzs7Ozs7Ozs7Ozs7Ozs7Ozs0REFDTTtBQUNKUSxVQUFJLEVBQUc7QUFDSG1CLGdCQUFRLEVBQUc7QUFEUixPQURIO0FBSVJqQixZQUFNLEVBQUcsRUFKRDtBQUtScUssV0FBSyxFQUFHLEVBTEE7QUFNUnRKLGFBQU8sRUFBRyxLQU5GO0FBT1JrRyxnQkFBVSxFQUFHLFNBUEw7QUFRUnFELGVBQVMsRUFBRztBQVJKLEs7OzZEQVVDO0FBQ0xySixjQUFRLEVBQUdoQiwwREFBQSxHQUFhQyxRQUFiLEdBQXdCRSxHQUF4QixDQUE0QixFQUE1QjtBQUROLEs7Ozs7Ozs7V0FHVCxvQkFBVTtBQUFBOztBQUNOLFdBQUt1QixRQUFMLENBQWM7QUFBQzBJLGFBQUssRUFBRyxLQUFLL0osS0FBTCxDQUFXUixJQUFYLENBQWdCbUIsUUFBekI7QUFBb0NnRyxrQkFBVSxFQUFHO0FBQWpELE9BQWQ7QUFDQSxVQUFNbkgsSUFBSSxHQUFHO0FBQUVtQixnQkFBUSxFQUFHLEtBQUtYLEtBQUwsQ0FBV1IsSUFBWCxDQUFnQm1CO0FBQTdCLE9BQWI7QUFDQUksbURBQUssQ0FBQztBQUNGQyxjQUFNLEVBQUUsTUFETjtBQUVGQyxXQUFHLEVBQUUsaUJBRkg7QUFHRnpCLFlBQUksRUFBRUEsSUFISjtBQUlGMEIsZUFBTyxFQUFFO0FBQUMsOEJBQW9CO0FBQXJCO0FBSlAsT0FBRCxDQUFMLENBS0dDLElBTEgsQ0FLUSxVQUFDQyxHQUFELEVBQVM7QUFDYixZQUFHQSxHQUFHLENBQUM1QixJQUFKLENBQVNzSyxJQUFULEtBQWtCLE1BQUksQ0FBQzlKLEtBQUwsQ0FBV1IsSUFBWCxDQUFnQm1CLFFBQXJDLEVBQStDO0FBQzNDLGdCQUFJLENBQUNVLFFBQUwsQ0FBYztBQUFDMkkscUJBQVMsRUFBRztBQUFiLFdBQWQ7QUFDSCxTQUZELE1BR0k7QUFDQSxnQkFBSSxDQUFDM0ksUUFBTCxDQUFjO0FBQUM3QixnQkFBSSxFQUFDO0FBQUNtQixzQkFBUSxFQUFHO0FBQVosYUFBTjtBQUFzQmpCLGtCQUFNLEVBQUc7QUFBQ2lCLHNCQUFRLEVBQUc7QUFBWixhQUEvQjtBQUFpRGdHLHNCQUFVLEVBQUc7QUFBOUQsV0FBZDs7QUFDQWhFLGtFQUFBLENBQVkscUNBQVosRUFBbUQsTUFBSSxDQUFDaUUsWUFBeEQ7QUFDSDtBQUNKLE9BYkQ7QUFjSDs7O1dBQ0Qsa0JBQVM7QUFDTCx3QkFBcUQsS0FBSzVHLEtBQTFEO0FBQUEsVUFBUVMsT0FBUixlQUFRQSxPQUFSO0FBQUEsVUFBa0J1SixTQUFsQixlQUFrQkEsU0FBbEI7QUFBQSxVQUE4QkQsS0FBOUIsZUFBOEJBLEtBQTlCO0FBQUEsVUFBc0NwRCxVQUF0QyxlQUFzQ0EsVUFBdEM7QUFDQSwwQkFDSSw0RUFDSSxrREFBQywyREFBRCxPQURKLGVBRUk7QUFBSSxpQkFBUyxFQUFDO0FBQWQsMENBRkosZUFHSTtBQUFNLGdCQUFRLEVBQUUsS0FBS3RHLFlBQXJCO0FBQW1DLGlCQUFTLEVBQUM7QUFBN0MsU0FDSyxLQUFLQyxXQUFMLENBQWlCLFVBQWpCLEVBQTRCLDZCQUE1QixFQUEwRCxNQUExRCxFQUFpRSxPQUFqRSxDQURMLEVBRUswSixTQUFTLEdBQUUsS0FBS3pKLFlBQUwsQ0FBa0JvRyxVQUFsQixFQUE2QixtQkFBN0IsQ0FBRixHQUFzRCxJQUZwRSxDQUhKLEVBT0txRCxTQUFTLEdBQUUsSUFBRixnQkFBUyxrREFBQyxpREFBRDtBQUFZLGFBQUssRUFBRUQ7QUFBbkIsUUFQdkIsQ0FESjtBQVdIOzs7O0VBN0NxQnZKLGtEOztBQWdEMUIsaUVBQWV4QixXQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1GLE07Ozs7Ozs7Ozs7Ozs7Ozs7NERBQ007QUFDSlUsVUFBSSxFQUFHO0FBQ0NtQixnQkFBUSxFQUFHLEVBRFo7QUFFQzhGLGdCQUFRLEVBQUcsRUFGWjtBQUdDd0QsYUFBSyxFQUFHO0FBSFQsT0FESDtBQU1KdkssWUFBTSxFQUFHLEVBTkw7QUFPSmUsYUFBTyxFQUFHLEtBUE47QUFRSmtHLGdCQUFVLEVBQUc7QUFSVCxLOzs2REFXQztBQUNMaEcsY0FBUSxFQUFHaEIsMERBQUEsR0FBYUMsUUFBYixHQUF3QkUsR0FBeEIsQ0FBNEIsRUFBNUIsQ0FETjtBQUVMMkcsY0FBUSxFQUFHOUcsMERBQUEsR0FBYUMsUUFBYixHQUF3QkMsR0FBeEIsQ0FBNEIsQ0FBNUIsRUFBK0JDLEdBQS9CLENBQW1DLEVBQW5DLENBRk47QUFHTG1LLFdBQUssRUFBR3RLLDBEQUFBLEdBQWFDLFFBQWIsR0FBd0JxSyxLQUF4QjtBQUhILEs7OytEQUtFLFlBQU07QUFDYixZQUFLNUksUUFBTCxDQUFjO0FBQUNaLGVBQU8sRUFBQyxJQUFUO0FBQWdCa0csa0JBQVUsRUFBRTtBQUE1QixPQUFkOztBQUNBLFVBQU1uSCxJQUFJLEdBQUc7QUFDVG1CLGdCQUFRLEVBQUcsTUFBS1gsS0FBTCxDQUFXUixJQUFYLENBQWdCbUIsUUFEbEI7QUFFVDhGLGdCQUFRLEVBQUcsTUFBS3pHLEtBQUwsQ0FBV1IsSUFBWCxDQUFnQmlILFFBRmxCO0FBR1R3RCxhQUFLLEVBQUcsTUFBS2pLLEtBQUwsQ0FBV1IsSUFBWCxDQUFnQnlLO0FBSGYsT0FBYjtBQUtBbEosbURBQUssQ0FBQztBQUNGQyxjQUFNLEVBQUUsTUFETjtBQUVGQyxXQUFHLEVBQUUsY0FGSDtBQUdGekIsWUFBSSxFQUFFQSxJQUhKO0FBSUYwQixlQUFPLEVBQUU7QUFBQyw4QkFBb0I7QUFBckI7QUFKUCxPQUFELENBQUwsQ0FNQ0MsSUFORCxDQU1NLFVBQUNDLEdBQUQsRUFBUztBQUNYLGNBQUtDLFFBQUwsQ0FBYztBQUFDWixpQkFBTyxFQUFDLEtBQVQ7QUFBaUJrRyxvQkFBVSxFQUFHO0FBQTlCLFNBQWQ7O0FBQ0EsWUFBSXZGLEdBQUcsQ0FBQytDLE1BQUosS0FBZSxHQUFuQixFQUF1QjtBQUN2QnlGLGlCQUFPLENBQUNDLEdBQVIsQ0FBWXpJLEdBQVo7QUFDQXVCLG9FQUFBLENBQWN2QixHQUFHLENBQUM1QixJQUFKLENBQVM0RCxPQUF2QixFQUFnQyxNQUFLd0QsWUFBckM7QUFDQW5DLG9CQUFVLENBQUMsWUFBTTtBQUFFLGtCQUFLWCxLQUFMLENBQVdvRyxPQUFYLENBQW1CNUQsSUFBbkIsQ0FBd0IsUUFBeEI7QUFBa0MsV0FBM0MsRUFBNEMsSUFBNUMsQ0FBVjtBQUE0RDtBQUMvRCxPQVpELFdBYU8sVUFBQzVCLEdBQUQsRUFBUztBQUNaLGNBQUtyRCxRQUFMLENBQWM7QUFBQ1osaUJBQU8sRUFBQyxLQUFUO0FBQWdCa0csb0JBQVUsRUFBRztBQUE3QixTQUFkOztBQUNBaEUsZ0VBQUEsQ0FBWSx3Q0FBWixFQUFzRCxNQUFLaUUsWUFBM0Q7QUFDSCxPQWhCRDtBQWlCSCxLOzs7Ozs7O1dBQ0Qsa0JBQVM7QUFDTCxVQUFRbkcsT0FBUixHQUFvQixLQUFLVCxLQUF6QixDQUFRUyxPQUFSO0FBQ0EsMEJBQ0ksNEVBQ0ksa0RBQUMsMkRBQUQsT0FESixFQUVLQSxPQUFPLEtBQUssSUFBWixnQkFBbUIsa0RBQUMsd0RBQUQsT0FBbkIsR0FBbUMsSUFGeEMsZUFHSTtBQUFJLGlCQUFTLEVBQUM7QUFBZCxzQ0FISixlQUlJLG9IQUFzQyxrREFBQyxtREFBRDtBQUFNLFVBQUUsRUFBQztBQUFULGVBQXRDLHlCQUpKLGVBS0k7QUFBTSxnQkFBUSxFQUFFLEtBQUtKLFlBQXJCO0FBQW1DLGlCQUFTLEVBQUM7QUFBN0MsU0FDSyxLQUFLQyxXQUFMLENBQWlCLFVBQWpCLEVBQTRCLGtDQUE1QixFQUErRCxNQUEvRCxFQUFzRSxPQUF0RSxDQURMLEVBRUssS0FBS0EsV0FBTCxDQUFpQixPQUFqQixFQUF5QixpQ0FBekIsRUFBMkQsTUFBM0QsRUFBa0UsT0FBbEUsQ0FGTCxFQUdLLEtBQUtBLFdBQUwsQ0FBaUIsVUFBakIsRUFBNEIsMEJBQTVCLEVBQXVELFVBQXZELEVBQWtFLE9BQWxFLENBSEwsZUFJSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNLLEtBQUtDLFlBQUwsQ0FBa0IsU0FBbEIsRUFBNEIsbUJBQTVCLENBREwsZUFFSSxrREFBQyxtREFBRDtBQUFNLFVBQUUsRUFBQyxPQUFUO0FBQWlCLGlCQUFTLEVBQUM7QUFBM0IsbUJBRkosQ0FKSixDQUxKLENBREo7QUFpQkg7Ozs7RUE3RGdCQyxrRDs7QUFnRXJCLGlFQUFlMUIsTUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFQTtBQUVPLFNBQVM4SSxRQUFULENBQWtCcEMsS0FBbEIsRUFBd0IyRSxVQUF4QixFQUFtQzlDLFFBQW5DLEVBQTRDO0FBQy9DLE1BQU0rQyxVQUFVLEdBQUcsQ0FBQ0QsVUFBVSxHQUFHLENBQWQsSUFBbUI5QyxRQUF0QztBQUNBLFNBQU9vQyw2Q0FBQyxDQUFDakUsS0FBRCxDQUFELENBQVMzRCxLQUFULENBQWV1SSxVQUFmLEVBQTJCQyxJQUEzQixDQUFnQ2hELFFBQWhDLEVBQTBDN0QsS0FBMUMsRUFBUDtBQUNILEM7Ozs7Ozs7Ozs7OztBQ0xEIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBTd2l0Y2gsIFJvdXRlLCBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlcidcbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9Ib21lJztcbmltcG9ydCBNYXRjaGVzIGZyb20gJy4vY29tcG9uZW50cy9NYXRjaGVzJztcbmltcG9ydCBTaWdudXAgZnJvbSAnLi9jb21wb25lbnRzL3NpZ251cCc7XG5pbXBvcnQgTG9naW4gZnJvbSAnLi9jb21wb25lbnRzL0xvZ2luJztcbmltcG9ydCBBY2NvdW50IGZyb20gJy4vY29tcG9uZW50cy9BY2NvdW50JztcbmltcG9ydCBBY2Nlc3MgZnJvbSAnLi9jb21wb25lbnRzL0FjY2Vzcyc7XG5pbXBvcnQgUmFua2luZyBmcm9tICcuL2NvbXBvbmVudHMvUmFua2luZyc7XG5pbXBvcnQgVXNlckNvbmZpcm0gZnJvbSAnLi9jb21wb25lbnRzL3Bhc3N1cGRhdGUvdXNlckNvbmZpcm0nO1xuICAgIFxuUmVhY3RET00ucmVuZGVyKFxuXG4gICAgPFJvdXRlcj5cbiAgICAgICAgPEhlYWRlci8+XG4gICAgICAgIDxtYWluPlxuICAgICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9ob21lXCIgY29tcG9uZW50PXtIb21lfS8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvbWF0Y2hlc1wiIGNvbXBvbmVudD17TWF0Y2hlc30vPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3NpZ251cFwiIGNvbXBvbmVudD17U2lnbnVwfS8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvbG9naW5cIiBjb21wb25lbnQ9e0xvZ2lufS8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvbmV3cGFzc3dvcmQvXCIgY29tcG9uZW50PXtVc2VyQ29uZmlybX0vPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3JhbmtpbmdcIiBjb21wb25lbnQ9e1Jhbmtpbmd9Lz5cbiAgICAgICAgICAgICAgICB7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Nvbm5lY3RlZCcpPT09J3RydWUnP1xuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hY2NvdW50XCIgY29tcG9uZW50PXtBY2NvdW50fS8+OlxuICAgICAgICAgICAgICAgICAgICA8UmVkaXJlY3QgdG89XCIvaG9tZVwiIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGV4YWN0ID5cbiAgICAgICAgICAgICAgICAgICAgPFJlZGlyZWN0IHRvPVwiL2hvbWVcIiAvPlxuICAgICAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICAgICAgPFJlZGlyZWN0IHRvPVwiL2hvbWVcIi8+XG4gICAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgPC9tYWluPlxuICAgICAgICBcbiAgICA8L1JvdXRlcj4gICAgXG4gICAgXG4gICAgLGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4vY29tbW9uL2Zvcm0nO1xyXG5pbXBvcnQgSm9pIGZyb20gJ2pvaS1icm93c2VyJztcclxuXHJcbmNsYXNzIEFjY2VzcyBleHRlbmRzIEZvcm0ge1xyXG4gICAgc3RhdGUgPSB7IFxyXG4gICAgICAgIGRhdGEgOiB7IHBhc3MgOiBcIlwiIH0sXHJcbiAgICAgICAgZXJyb3JzIDoge31cclxuICAgIH07XHJcbiAgICBzY2hlbWEgPSB7XHJcbiAgICAgICAgcGFzcyA6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLm1pbigxMSkubWF4KDEzKVxyXG4gICAgfTtcclxuICAgIGRvU3VibWl0KCl7XHJcbiAgICAgICAgY29uc3QgY29ycmVjdFBhc3MgPSAncGFzczEyMzQ1Njc4JztcclxuICAgICAgICBjb25zdCBwYXNzID0gdGhpcy5zdGF0ZS5kYXRhLnBhc3NcclxuICAgICAgICBpZiAocGFzcyA9PSBjb3JyZWN0UGFzcyl7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2FjY2VzcycsJ29rJyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWY9XCIvaG9tZVwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbmRlcigpIHsgXHJcbiAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImFjY2Vzc1wiIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5QYWdlIGVuIGNvbnN0cnVjdGlvbjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy93b3JraW5nLmdpZlwiLz5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlcklucHV0KCdwYXNzJywnQ29kZSBkXFwnYWNjw6hzIDonLCd0ZXh0JywnaW5wdXQnKX1cclxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckJ1dHRvbignVmFsaWRlcicsJ2J1dHRvbiBpcy1zdWNjZXNzJyl9XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IEFjY2VzczsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vY29tbW9uL0xvYWRlcic7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmNsYXNzIEFjY291bnQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHN0YXRlID0geyBcclxuICAgICAgICBsb2FkaW5nIDogdHJ1ZSxcclxuICAgICAgICBpZDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkJyksXHJcbiAgICAgICAgdXNlcm5hbWUgOiBcIlwiLFxyXG4gICAgICAgIGJldHMgOiBbXVxyXG4gICAgfTtcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgdGhpcy5nZXRVc2VyQnlJZCgpXHJcbiAgICB9O1xyXG4gICAgZ2V0VXNlckJ5SWQoKXtcclxuICAgICAgICBjb25zdCBpZCA9IE51bWJlcih0aGlzLnN0YXRlLmlkKTtcclxuICAgICAgICBjb25zdCBkYXRhID0geyBpZCA6IGlkfTtcclxuICAgICAgICBheGlvcyh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6ICdhcGkvdXNlci9nZXRVc2VyQnlJZCcsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCd9ICAgICBcclxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3VzZXJuYW1lOnJlcy5kYXRhfSlcclxuICAgICAgICB9KTtcclxuICAgICAgICBheGlvcyh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6ICdhcGkvZ2V0YmV0c0J5VXNlcicsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCd9ICAgICBcclxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2JldHMgOiByZXMuZGF0YSAsIGxvYWRpbmcgOiBmYWxzZX0pXHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkgeyBcclxuICAgICAgICBjb25zdCB7dXNlcm5hbWUgLCBsb2FkaW5nICwgYmV0c30gPSB0aGlzLnN0YXRlXHJcbiAgICAgICAgcmV0dXJuICggICAgIFxyXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGUgaXMtMlwiPk1vbiBDb21wdGU8L2gyPlxyXG4gICAgICAgICAgICAgICAge2xvYWRpbmc/IDxMb2FkZXIvPjpcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPk1vbiBlc3BhY2U8L3A+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxlbSBjbGFzc05hbWU9XCJ1c2VybmFtZVwiPnt1c2VybmFtZS50b1VwcGVyQ2FzZSgpfTwvZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyPjwvaHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTZcIj5NZXMgcHJvbm9zIDo8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtiZXRzLmxlbmd0aCA+IDAgPyBcclxuICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RGF0ZSBkdSBwcm9ubzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk1hdGNoPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TW9uIHByb25vc3RpYzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlLDqXN1bHRhdCBkdSBtYXRjaDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlN0YXR1dCBkdSBwcm9ubzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtiZXRzLm1hcChiZXQgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtiZXQubWF0Y2hfaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57YmV0LmJldF9kYXRlLmRhdGUuc2xpY2UoMCwxMCkuc3BsaXQoJy0nKS5yZXZlcnNlKCkuam9pbignLycpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltYWdlcy8ke2JldC5ob21ldGVhbX0uc3ZnYH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI1cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG9tZWltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmV0LmhvbWV0ZWFtfSAtIHtiZXQuYXdheXRlYW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltYWdlcy8ke2JldC5hd2F5dGVhbX0uc3ZnYH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI1cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXdheWltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2JldC5ob21lc2NvcmV9IC0ge2JldC5hd2F5c2NvcmV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+TWF0Y2ggw6AgdmVuaXI8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5NYXRjaCDDoCB2ZW5pcjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+IDpcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Wb3VzIG4nYXZleiBwYXMgZW5jb3JlIHBsYWPDqSBkZSBwcm9ub3N0aWNzLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+UmV2ZW5leiB2ZXJzIGxlcyA8TGluayB0bz1cIi9tYXRjaGVzXCI+bWF0Y2hlczwvTGluaz4gcG91ciBjb21tZW5jZXIgw6AgcHJvbm9zdGlxdWVyLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgQWNjb3VudDsiLCJpbXBvcnQgUmVhY3QgLCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9jb21tb24vTG9hZGVyJztcclxuaW1wb3J0IEpvaSBmcm9tICdqb2ktYnJvd3Nlcic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xyXG5pbXBvcnQgeyB0b2FzdCwgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcblxyXG5jbGFzcyBCZXRzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIGhpZGRlbiA6IHRydWUsXHJcbiAgICAgICAgZGF0YSA6IHtcclxuICAgICAgICAgICAgaG9tZXJlc3VsdCA6IFwiIFwiLFxyXG4gICAgICAgICAgICBhd2F5cmVzdWx0IDogXCIgXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yczoge30sXHJcbiAgICAgICAgYmV0c3RhdHVzIDogZmFsc2UsXHJcbiAgICAgICAgdG9hc3QgOiBmYWxzZSwgXHJcbiAgICAgICAgbG9hZGluZyA6IHRydWUsXHJcbiAgICAgICAgY29ubmVjdGVkIDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Nvbm5lY3RlZCcpLFxyXG4gICAgfTtcclxuICAgIHNvdXJjZSA9IGF4aW9zLkNhbmNlbFRva2VuLnNvdXJjZSgpO1xyXG4gICAgc2NoZW1hID0ge1xyXG4gICAgICAgIGhvbWVyZXN1bHQgOiBKb2kubnVtYmVyKCkucmVxdWlyZWQoKSxcclxuICAgICAgICBhd2F5cmVzdWx0IDogSm9pLm51bWJlcigpLnJlcXVpcmVkKClcclxuICAgIH07XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIHRoaXMuZ2V0QmV0cygpO1xyXG4gICAgfTtcclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNvdXJjZSkge1xyXG4gICAgICAgICAgdGhpcy5zb3VyY2UuY2FuY2VsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0QmV0cygpe1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNvbm5lY3RlZCA9PT0gJ3RydWUnKXtcclxuICAgICAgICBjb25zdCBkYXRhID0geyB1c2VyaWQgOiBOdW1iZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkJykpICwgbWF0Y2hpZCA6IHRoaXMucHJvcHMubWF0Y2guX2lkfTtcclxuICAgICAgICBheGlvcyh7IG1ldGhvZCA6ICdQT1NUJyAsIHVybDogJ2FwaS9nZXRiZXRzJywgZGF0YSA6IGRhdGEgLCBoZWFkZXJzOiB7J1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnfSAsIGNhbmNlbFRva2VuOiB0aGlzLnNvdXJjZS50b2tlblxyXG4gICAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuaG9tZXNjb3JlKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhIDogeyBob21lcmVzdWx0IDogcmVzLmRhdGEuaG9tZXNjb3JlICwgYXdheXJlc3VsdCA6IHJlcy5kYXRhLmF3YXlzY29yZSB9LCBsb2FkaW5nIDogZmFsc2UgLCBiZXRzdGF0dXMgOiB0cnVlfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhIDogeyBob21lcmVzdWx0IDogJycgLCBhd2F5cmVzdWx0IDogJycgfSwgbG9hZGluZyA6IGZhbHNlfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nIDogZmFsc2UgfSlcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdmFsaWRhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHthYm9ydEVhcmx5IDogZmFsc2V9O1xyXG4gICAgICAgIGNvbnN0IHtlcnJvcn0gPSBKb2kudmFsaWRhdGUodGhpcy5zdGF0ZS5kYXRhLCB0aGlzLnNjaGVtYSwgb3B0aW9ucyk7XHJcbiAgICAgICAgaWYgKCFlcnJvcikgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgY29uc3QgZXJyb3JzID0ge307XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBlcnJvci5kZXRhaWxzKVxyXG4gICAgICAgICAgICBlcnJvcnNbaXRlbS5wYXRoWzBdXSA9IGl0ZW0ubWVzc2FnZTsgXHJcbiAgICAgICAgcmV0dXJuIGVycm9ycztcclxuICAgIH07XHJcbiAgICBoYW5kbGVDaGFuZ2UgPSAoe2N1cnJlbnRUYXJnZXQgOiBpbnB1dH0pID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gey4uLnRoaXMuc3RhdGUuZGF0YX07XHJcbiAgICAgICAgZGF0YVtpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGF9KTtcclxuICAgIH07XHJcbiAgICBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtoaWRkZW46ZmFsc2V9KVxyXG4gICAgfTtcclxuICAgIGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyBcclxuICAgICAgICBjb25zdCBlcnJvcnMgPSB0aGlzLnZhbGlkYXRlKCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9ycyA6IGVycm9ycyB8fCB7fX0pO1xyXG4gICAgICAgIGlmIChlcnJvcnMpIHJldHVybjsgIFxyXG4gICAgICAgIHRoaXMuZG9TdWJtaXQoKTtcclxuICAgIH07XHJcbiAgICBkb1N1Ym1pdCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICBob21lc2NvcmUgOiB0aGlzLnN0YXRlLmRhdGEuaG9tZXJlc3VsdCxcclxuICAgICAgICAgICAgYXdheXNjb3JlIDogdGhpcy5zdGF0ZS5kYXRhLmF3YXlyZXN1bHQsXHJcbiAgICAgICAgICAgIG1hdGNoaWQgOiB0aGlzLnByb3BzLm1hdGNoLl9pZCxcclxuICAgICAgICAgICAgYmV0aWQgOiB1dWlkdjQoKSxcclxuICAgICAgICAgICAgaG9tZXRlYW0gOiB0aGlzLnByb3BzLm1hdGNoLmhvbWV0ZWFtLFxyXG4gICAgICAgICAgICBhd2F5dGVhbSA6ICB0aGlzLnByb3BzLm1hdGNoLmF3YXl0ZWFtXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5iZXRzdGF0dXMgPT09IGZhbHNlKXtcclxuICAgICAgICAgICAgYXhpb3MoXHJcbiAgICAgICAgICAgICAgICB7bWV0aG9kOiAnUE9TVCcsIHVybDogJ2FwaS9wb3N0YmV0cycsIGRhdGE6IGRhdGEsIGhlYWRlcnM6IHsnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCd9fSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRkZW4gOiB0cnVlICwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob21lcmVzdWx0IDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YXlyZXN1bHQgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZXRzdGF0dXMgOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdCA6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3Quc3VjY2VzcygnUHJvbm9zdGljIHZhbGlkw6khJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0Nsb3NlOiAzMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgZG9jdW1lbnQubG9jYXRpb24uaHJlZj1cIi9tYXRjaGVzXCIgfSwzMjAwKTtcclxuICAgICAgICAgICAgICAgIH07ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdG9hc3QuZXJyb3IoJ1ZldWlsbGV6IHLDqWVzc2F5ZXInLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0Nsb3NlOiAzMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuc2V0U3RhdGUoe3RvYXN0IDogZmFsc2V9KX0sNjAwMCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBheGlvcyh7bWV0aG9kOidQT1NUJyx1cmw6J2FwaS91cGRhdGViZXRzJywgZGF0YTpkYXRhLCBoZWFkZXJzOiB7J1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnfX0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpPT4ge2lmIChyZXMuc3RhdHVzID09PSAyMDApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGRlbiA6IHRydWUgLCBcclxuICAgICAgICAgICAgICAgICAgICBkYXRhIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBob21lcmVzdWx0IDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXdheXJlc3VsdCA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgICAgICAgICBiZXRzdGF0dXMgOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0IDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7IFxyXG4gICAgICAgICAgICAgICAgdG9hc3Quc3VjY2VzcygnUHJvbm9zdGljIG1vZGlmacOpIScsIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICBhdXRvQ2xvc2U6IDMwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VCdXR0b246IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgZG9jdW1lbnQubG9jYXRpb24uaHJlZj1cIi9tYXRjaGVzXCIgfSwzMjAwKTtcclxuICAgICAgICAgICAgfX0pO1xyXG4gICAgICAgIH07ICAgICAgIFxyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7aGlkZGVuLCBkYXRhICwgZXJyb3JzICwgaW5wdXRlcnJvcnMgLCBiZXRzdGF0dXMgLCB0b2FzdCAsIGNvbm5lY3RlZCAsIGxvYWRpbmd9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7bWF0Y2h9ID0gdGhpcy5wcm9wcztcclxuICAgIFxyXG4gICAgICAgIHJldHVybiAoIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxyXG4gICAgICAgICAgICAgICAge3RvYXN0PyA8VG9hc3RDb250YWluZXIvPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxoMz57bWF0Y2guZGF0ZX0gLSB7bWF0Y2gudGltZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgPGg0Pkdyb3VwZSB7bWF0Y2guZ3JvdXB9PC9oND5cclxuICAgICAgICAgICAgICAgIDxwPnttYXRjaC5sb2NhdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICA8cHJlIGNsYXNzTmFtZT1cIm1hdGNoZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaG9tZXRlYW1pbWdcIiBzcmM9e2AvaW1hZ2VzLyR7bWF0Y2guaG9tZXRlYW19LnN2Z2B9Lz5cclxuICAgICAgICAgICAgICAgICAgICB7bWF0Y2guaG9tZXRlYW19IHttYXRjaC5ob21lc2NvcmV9IC0ge21hdGNoLmF3YXlzY29yZX0ge21hdGNoLmF3YXl0ZWFtfVxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYXdheXRlYW1pbWdcIiBzcmM9e2AvaW1hZ2VzLyR7bWF0Y2guYXdheXRlYW19LnN2Z2B9Lz5cclxuICAgICAgICAgICAgICAgIDwvcHJlPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtsb2FkaW5nID09PSB0cnVlID8gPExvYWRlci8+IDogXHJcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfSBjbGFzc05hbWU9e2hpZGRlbiA/ICdidXR0b24gYmV0YnV0dG9uIGlzLXByaW1hcnknIDogJ2hpZGRlbid9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YmV0c3RhdHVzPyAnVm9pciBvdSBNb2RpZmllciB2b3RyZSBwYXJpJyA6IFwiUGFyaWVyIHN1ciBjZSBtYXRjaFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtoaWRkZW4gPyAnaGlkZGVuJyA6ICdiZXRnYW1lcyd9PlxyXG4gICAgICAgICAgICAgICAge2Nvbm5lY3RlZCA9PT0gXCJ0cnVlXCIgPyAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxlbT57bWF0Y2guaG9tZXRlYW19IDwvZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJob21lcmVzdWx0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhLmhvbWVyZXN1bHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2NvcmUgaG9tZXJlc3VsdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzW1wiaG9tZXJlc3VsdFwiXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPiAtIDwvYj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhd2F5cmVzdWx0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhLmF3YXlyZXN1bHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpbnB1dGVycm9ycz8gJ2lucHV0ZXJyb3JzJyA6ICdzY29yZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxlbT4ge21hdGNoLmF3YXl0ZWFtfSA8L2VtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVTdWJtaXR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMudmFsaWRhdGUoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPS1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8cD5Wb3VzIGRldmV6IMOqdHJlIGNvbm5lY3TDqSBwb3VyIHBsYWNlciB1biBwcm9ub3N0aWMuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBCZXRzOyIsImltcG9ydCB7IG1hdGNoZXMgfSBmcm9tICdsb2Rhc2gtZXMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQ29taW5nTWF0Y2hlcyA9ICh7ZGF0YX0pID0+IHtcclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29taW5nbWF0Y2hlc1wiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGUgaXMtM1wiPlByb2NoYWlucyBtYXRjaGVzPC9oMz5cclxuICAgICAgICAgICAge2RhdGEubWFwKG1hdGNoID0+IFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCIga2V5PXttYXRjaC5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxiPnttYXRjaC5kYXRlfTwvYj5cclxuICAgICAgICAgICAgICAgICAgICA8cD57bWF0Y2guaG9tZXRlYW19IC0ge21hdGNoLmF3YXl0ZWFtfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgQ29taW5nTWF0Y2hlczsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgRmlsdGVyID0gKHtpdGVtcyxvbkl0ZW1TZWxlY3Qsc2VsZWN0ZWRJdGVtLGxhYmVsfSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tdHJpZ2dlclwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+RmlsdHJlciBwYXIge2xhYmVsLnRvTG93ZXJDYXNlKCl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpcy1zbWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9hbmdsZWRvd24uc3ZnXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXsnJyA9PT0gc2VsZWN0ZWRJdGVtID8gJ3NlbGVjdGlvbiBpcy1hY3RpdmUnIDogJ3NlbGVjdGlvbid9IG9uQ2xpY2s9eyAoKSA9PiBvbkl0ZW1TZWxlY3QoJ0FsbCcpfT5Ub3VzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbXMubWFwKGl0ZW0gPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpdGVtID09PSBzZWxlY3RlZEl0ZW0gPyAnc2VsZWN0aW9uIGlzLWFjdGl2ZScgOiAnc2VsZWN0aW9uJ30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gb25JdGVtU2VsZWN0KGl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWwgIT09ICdHcm91cGUgJz8gaXRlbSA6IGxhYmVsICsgaXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICl9ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXI7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgY29ubmVjdGVkIDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Nvbm5lY3RlZCcpXHJcbiAgICB9XHJcbiAgICBvbkxvZ291dCgpe1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb25uZWN0ZWQnLCdmYWxzZScpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdpZCcpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvYXBpL2xvZ291dCcpO1xyXG4gICAgfTtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHtjb25uZWN0ZWR9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICByZXR1cm4gKCBcclxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvaG9tZVwiPjxpbWcgc3JjPVwiL2ltYWdlcy9ldXJvMjAyMC1sb2dvLnN2Z1wiIHdpZHRoPVwiNDVcIj48L2ltZz48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnVyZ2VyXCIgcm9sZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL21hdGNoZXNcIiBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiPk1hdGNoZXM8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3JhbmtpbmdcIiBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiPkNsYXNzZW1lbnQ8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiI1wiIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCI+QSB2ZW5pcjwvTGluaz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaXRlbSBoYXMtZHJvcGRvd24gaXMtaG92ZXJhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiPk1hdGNoZXM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1kcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9tYXRjaGVzXCIgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5QaGFzZSBkZSBHcm91cGU8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8TGluayB0bz1cIi8jXCIgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5QaGFzZSBmaW5hbGU8L0xpbms+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9yYW5raW5nXCIgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5DbGFzc2VtZW50PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Nvbm5lY3RlZD09PSd0cnVlJz9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2FjY291bnRcIiBjbGFzc05hbWU9XCJidXR0b24gaXMtcHJpbWFyeVwiPk1vbiBjb21wdGU8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uTG9nb3V0fSAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXdhcm5pbmdcIj5Ew6ljb25uZWN0aW9uPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2xvZ2luXCIgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXByaW1hcnlcIj5Db25uZWN0aW9uPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3NpZ251cFwiIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1pbmZvXCI+PHN0cm9uZz5DcsOpZXIgdW4gY29tcHRlPC9zdHJvbmc+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IENvbWluZ01hdGNoZXMgZnJvbSAnLi9Db21pbmdNYXRjaGVzJztcclxuaW1wb3J0IHsgVHdpdHRlclRpbWVsaW5lRW1iZWQsIFR3aXR0ZXJTaGFyZUJ1dHRvbiwgVHdpdHRlckZvbGxvd0J1dHRvbiwgVHdpdHRlckhhc2h0YWdCdXR0b24sIFR3aXR0ZXJNZW50aW9uQnV0dG9uLCBUd2l0dGVyVHdlZXRFbWJlZCwgVHdpdHRlck1vbWVudFNoYXJlLCBUd2l0dGVyRE1CdXR0b24sIFR3aXR0ZXJWaWRlb0VtYmVkLCBUd2l0dGVyT25BaXJCdXR0b24gfSBmcm9tICdyZWFjdC10d2l0dGVyLWVtYmVkJztcclxuXHJcbmNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHN0YXRlID0geyBtYXRjaGVzIDogW10gfVxyXG4gICAgXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIHRoaXMuZ2V0TWF0Y2hlcygpO1xyXG4gICAgICAgIGNvbnN0IGNvbm5lY3RlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb25uZWN0ZWQnKTtcclxuICAgICAgICBpZiAoY29ubmVjdGVkID09PSAndHJ1ZScpIHRoaXMuZ2V0VXNlcigpO1xyXG4gICAgfTtcclxuICAgIGdldFVzZXIoKXtcclxuICAgICAgICBheGlvcy5nZXQoJ2FwaS9nZXRVc2VySWQnKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpZCcscmVzLmRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGdldE1hdGNoZXMoKXtcclxuICAgICAgICBheGlvcy5nZXQoYGh0dHBzOi8vcG9ydGZvbGlvLTcyMTQ3LWRlZmF1bHQtcnRkYi5ldXJvcGUtd2VzdDEuZmlyZWJhc2VkYXRhYmFzZS5hcHAvbWF0Y2hlcy5qc29uYCkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbWF0Y2hlcyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCByZXMuZGF0YS5sZW5ndGggOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhW2ldLmhvbWVzY29yZSA9PT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcy5wdXNoKHJlcy5kYXRhW2ldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHttYXRjaGVzIDogbWF0Y2hlcy5zbGljZSgwLDQpfSkgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge21hdGNoZXN9ID0gdGhpcy5zdGF0ZVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImhlYWRlcmltZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2V1cm8yMDIwLWxvZ28uc3ZnXCIvPiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxDb21pbmdNYXRjaGVzIGRhdGE9e21hdGNoZXN9Lz5cclxuICAgICAgICAgICAgICAgIDxUd2l0dGVyVGltZWxpbmVFbWJlZFxyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZVR5cGU9XCJwcm9maWxlXCJcclxuICAgICAgICAgICAgICAgICAgICBzY3JlZW5OYW1lPVwiZXF1aXBlZGVmcmFuY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3toZWlnaHQ6IDUwMCAsIHdpZHRoIDogMzAwfX1cclxuICAgICAgICAgICAgICAgICAgICBsYW5nPVwiZnJcIlxyXG4gICAgICAgICAgICAgICAgLz4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj4gICAgICAgICAgIFxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4gICAgXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEpvaSBmcm9tICdqb2ktYnJvd3Nlcic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgdG9hc3QsIFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgRm9ybSBmcm9tICcuL2NvbW1vbi9mb3JtJztcclxuaW1wb3J0IFVzZXJMb2FkZXIgZnJvbSAnLi9jb21tb24vdXNlcmxvYWRlcic7XHJcblxyXG5jbGFzcyBTaWdudXAgZXh0ZW5kcyBGb3JtIHtcclxuICAgIHN0YXRlID0geyBcclxuICAgICAgICBkYXRhIDoge1xyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWUgOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQgOiBcIlwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIGVycm9ycyA6IHt9LFxyXG4gICAgICAgIGVycm9yc2NvdW50IDogMCxcclxuICAgICAgICBsb2FkaW5nIDogZmFsc2UsXHJcbiAgICAgICAgYnV0dG9uVGV4dCA6IFwiVmFsaWRlclwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgc2NoZW1hID0ge1xyXG4gICAgICAgIHVzZXJuYW1lIDogSm9pLnN0cmluZygpLnJlcXVpcmVkKCkubWF4KDQwKSxcclxuICAgICAgICBwYXNzd29yZCA6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLm1pbig4KS5tYXgoMjUpXHJcbiAgICB9XHJcbiAgICBkb1N1Ym1pdCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nIDogdHJ1ZSAsIGJ1dHRvblRleHQgOiBcIkNoYXJnZW1lbnQuLi5cIn0pXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAgICAgdXNlcm5hbWUgOiB0aGlzLnN0YXRlLmRhdGEudXNlcm5hbWUsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkIDogdGhpcy5zdGF0ZS5kYXRhLnBhc3N3b3JkLFxyXG4gICAgICAgIH1cclxuICAgICAgICBheGlvcyh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6ICdhcGkvbG9naW4nLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7J1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnfSAgICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6ZmFsc2UgLCBidXR0b25UZXh0IDogXCJWYWxpZGVyXCJ9KVxyXG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKXtcclxuICAgICAgICAgICAgdG9hc3Quc3VjY2VzcygnQ29ubmVjdGlvbiByw6l1c3NpZSEnLCB0aGlzLnRvYXN0b3B0aW9ucyk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb25uZWN0ZWQnLCd0cnVlJylcclxuICAgICAgICAgICAgc2V0VGltZW91dCggKCkgPT4ge2RvY3VtZW50LmxvY2F0aW9uLmhyZWY9XCIvaG9tZVwiIH0sMjEwMCkgXHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6ZmFsc2UgLCBidXR0b25UZXh0IDogXCJDaGFyZ2VtZW50Li4uXCJ9KVxyXG4gICAgICAgICAgICB0b2FzdC5lcnJvcignVsOpcmlmaWV6IHZvcyBpZGVudGlmaWFudHMnLCB0aGlzLnRvYXN0b3B0aW9ucyk7XHJcbiAgICAgICAgICAgIGxldCBlcnJvcnNjb3VudCA9IHRoaXMuc3RhdGUuZXJyb3JzY291bnQ7XHJcbiAgICAgICAgICAgIGVycm9yc2NvdW50KytcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JzY291bnQ6ZXJyb3JzY291bnQgLCBkYXRhIDogeyB1c2VybmFtZSA6IFwiXCIgLCBwYXNzd29yZCA6IFwiXCJ9ICwgYnV0dG9uVGV4dCA6XCJWYWxpZGVyXCJ9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7IFxyXG4gICAgICAgIGNvbnN0IHtlcnJvcnNjb3VudCwgbG9hZGluZyAsIGJ1dHRvblRleHQgfSA9IHRoaXMuc3RhdGVcclxuICAgICAgICByZXR1cm4gKCBcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lci8+XHJcbiAgICAgICAgICAgICAgICB7bG9hZGluZyA9PT0gdHJ1ZSA/IDxVc2VyTG9hZGVyLz4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+Q29ubmVjdGlvbjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDI+UGFzIGRlIGNvbXB0ZT8gQ2xpcXVleiA8TGluayB0bz1cInNpZ251cFwiPmljaTwvTGluaz4gcG91ciBlbiBjcsOpZXIgdW4uPC9oMj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwic2lnbnVwLWZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJJbnB1dCgndXNlcm5hbWUnLCdOb20gZFxcJ3V0aWxpc2F0ZXVyIDonLCd0ZXh0JywnaW5wdXQnKX1cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJJbnB1dCgncGFzc3dvcmQnLCdNb3QgZGUgcGFzc2UgOicsJ3Bhc3N3b3JkJywnaW5wdXQnKX1cclxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzY291bnQgPj0gMyA/IDxkaXY+Vm91cyBhdmV6IG91Ymxpw6kgdm90cmUgbW90IGRlIHBhc3NlID8gQ2xpcXVleiA8TGluayB0bz1cIi9uZXdwYXNzd29yZFwiPmljaTwvTGluaz4gcG91ciBsZSByw6lpbml0bGFpaXNlcjwvZGl2PiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBpcy1ncm91cGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckJ1dHRvbihidXR0b25UZXh0LCdidXR0b24gaXMtc3VjY2VzcycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9ob21lXCIgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWluZm9cIj5Bbm51bGVyPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XHJcbmltcG9ydCBCZXRzIGZyb20gJy4vQmV0cyc7XHJcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuL2NvbW1vbi9wYWdpbmF0aW9uJztcclxuaW1wb3J0IHsgcGFnaW5hdGUgfSBmcm9tICcuLi91dGlsaXRpZXMvcGFnaW5hdGUnO1xyXG5cclxuXHJcbmNsYXNzIE1hdGNoZXMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHN0YXRlID0geyBcclxuICAgICAgICBtYXRjaGVzIDogW10sXHJcbiAgICAgICAgc2VsZWN0ZWRNYXRjaGVzIDogW10sXHJcbiAgICAgICAgZ3JvdXBzOiBbXSwgXHJcbiAgICAgICAgc2VsZWN0ZWRHcm91cCA6ICcnLFxyXG4gICAgICAgIGRhdGVzIDogW10gLFxyXG4gICAgICAgIHNlbGVjdGVkRGF0ZSA6ICcnLFxyXG4gICAgICAgIHRlYW1zIDogW10sXHJcbiAgICAgICAgc2VsZWN0ZWRUZWFtIDogJycsXHJcbiAgICAgICAgY3VycmVudFBhZ2UgOiAxICxcclxuICAgICAgICBwYWdlU2l6ZSA6IDYsXHJcbiAgICAgICAgZGF0ZSA6IG5ldyBEYXRlKCdkLU0tWScpXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgdGhpcy5nZXRNYXRjaGVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWF0Y2hlcygpIHsgICAgICAgIFxyXG4gICAgICAgIGF4aW9zLmdldChgaHR0cHM6Ly9wb3J0Zm9saW8tNzIxNDctZGVmYXVsdC1ydGRiLmV1cm9wZS13ZXN0MS5maXJlYmFzZWRhdGFiYXNlLmFwcC9tYXRjaGVzLmpzb25gKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSByZXMuZGF0YS5zbGljZSgwLDM2KTtcclxuICAgICAgICAgICAgY29uc3QgZGF0ZXMgPSBbXTtcclxuICAgICAgICAgICAgY29uc3QgdGVhbXMgPSBbXTtcclxuICAgICAgICAgICAgY29uc3QgZ3JvdXBzID0gW107XHJcbiAgICAgICAgICAgIG1hdGNoZXMubWFwKCBtID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghZGF0ZXMuaW5jbHVkZXMobS5kYXRlKSkgZGF0ZXMucHVzaChtLmRhdGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0ZWFtcy5pbmNsdWRlcyhtLmhvbWV0ZWFtKSkgdGVhbXMucHVzaChtLmhvbWV0ZWFtKTtcclxuICAgICAgICAgICAgICAgIGlmICghZ3JvdXBzLmluY2x1ZGVzKG0uZ3JvdXApKSBncm91cHMucHVzaChtLmdyb3VwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtYXRjaGVzICwgdGVhbXMgOiB0ZWFtcy5zb3J0KCkgLCBkYXRlcyAsIGdyb3VwcyAsIHNlbGVjdGVkTWF0Y2hlcyA6IG1hdGNoZXMgfSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGhhbmRsZVBhZ2VDaGFuZ2UgPSAocGFnZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50UGFnZSA6IHBhZ2V9KTtcclxuICAgIH07XHJcbiAgICBoYW5kbGVHcm91cEZpbHRlciA9IChncm91cCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBbLi4udGhpcy5zdGF0ZS5tYXRjaGVzXTtcclxuICAgICAgICBpZiAoZ3JvdXAgPT09ICdBbGwnKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkTWF0Y2hlcyA6IG1hdGNoZXMgLCBzZWxlY3RlZEdyb3VwIDonJ30pO1xyXG4gICAgICAgIH0gIFxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkTWF0Y2hlcyA9IG1hdGNoZXMuZmlsdGVyKCBtID0+IG0uZ3JvdXAgPT09IGdyb3VwKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRNYXRjaGVzICwgc2VsZWN0ZWRHcm91cCA6IGdyb3VwICwgc2VsZWN0ZWRUZWFtIDogJycgLCBzZWxlY3RlZERhdGUgOiAnJyAsIGN1cnJlbnRQYWdlOiAxfSk7XHJcbiAgICAgICAgfSAgXHJcbiAgICB9O1xyXG4gICAgaGFuZGxlRGF0ZUZpbHRlciA9IChkYXRlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IFsuLi50aGlzLnN0YXRlLm1hdGNoZXNdO1xyXG4gICAgICAgIGlmIChkYXRlID09PSAnQWxsJyl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZE1hdGNoZXMgOiBtYXRjaGVzICwgc2VsZWN0ZWREYXRlIDonJ30pXHJcbiAgICAgICAgfSAgICAgIFxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkTWF0Y2hlcyA9IG1hdGNoZXMuZmlsdGVyKCBtID0+IG0uZGF0ZSA9PT0gZGF0ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkTWF0Y2hlcyAsIHNlbGVjdGVkRGF0ZSA6IGRhdGUgLCBzZWxlY3RlZFRlYW0gOiAnJyAsIHNlbGVjdGVkR3JvdXAgOiAnJywgY3VycmVudFBhZ2U6IDF9KTtcclxuICAgICAgICB9ICBcclxuICAgIH07XHJcbiAgICBoYW5kbGVUZWFtRmlsdGVyID0gKHRlYW0pID0+IHtcclxuICAgICAgICBjb25zdCBtYXRjaGVzID0gWy4uLnRoaXMuc3RhdGUubWF0Y2hlc107XHJcbiAgICAgICAgaWYgKHRlYW0gPT09ICdBbGwnKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkTWF0Y2hlcyA6IG1hdGNoZXMgLCBzZWxlY3RlZFRlYW0gOiAnJywgY3VycmVudFBhZ2U6IDF9KVxyXG4gICAgICAgIH0gICAgICBcclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZE1hdGNoZXMgPSBtYXRjaGVzLmZpbHRlciggbSA9PiBtLmhvbWV0ZWFtID09PSB0ZWFtIHx8IG0uYXdheXRlYW0gPT09IHRlYW0pO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZE1hdGNoZXMgLCBzZWxlY3RlZFRlYW0gOiB0ZWFtICwgc2VsZWN0ZWREYXRlIDogJycgLCBzZWxlY3RlZEdyb3VwIDogJyd9KTtcclxuICAgICAgICB9ICBcclxuICAgIH07XHJcbiAgICBnZXRQYWdlZERhdGEgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBwYWdlU2l6ZSwgY3VycmVudFBhZ2UsIHNlbGVjdGVkTWF0Y2hlc30gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IG1hdGNoTGlzdFBlclBhZ2UgPSBwYWdpbmF0ZShzZWxlY3RlZE1hdGNoZXMsY3VycmVudFBhZ2UscGFnZVNpemUpO1xyXG4gICAgICAgIHJldHVybiB7IHRvdGFsQ291bnQ6IHNlbGVjdGVkTWF0Y2hlcy5sZW5ndGgsIGRhdGE6IG1hdGNoTGlzdFBlclBhZ2V9XHJcbiAgICB9XHJcbiAgICBwcmV2aW91c1BhZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHtjdXJyZW50UGFnZX0gPSB0aGlzLnN0YXRlXHJcbiAgICAgICAgaWYgKGN1cnJlbnRQYWdlID4xICl7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlLS1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFBhZ2V9KVxyXG4gICAgfSAgICBcclxuICAgIG5leHRQYWdlID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCB7Y3VycmVudFBhZ2Usc2VsZWN0ZWRNYXRjaGVzLHBhZ2VTaXplfSA9IHRoaXMuc3RhdGVcclxuICAgICAgICBpZiAoY3VycmVudFBhZ2UgPCBNYXRoLmNlaWwoc2VsZWN0ZWRNYXRjaGVzLmxlbmd0aCAvIHBhZ2VTaXplKSApe1xyXG4gICAgICAgICAgICBjdXJyZW50UGFnZSsrXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRQYWdlfSlcclxuICAgIH0gICAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBwYWdlU2l6ZSAsIGN1cnJlbnRQYWdlLCBzZWxlY3RlZE1hdGNoZXMgLCBzZWxlY3RlZEdyb3VwLCBzZWxlY3RlZERhdGUgLCBzZWxlY3RlZFRlYW0gLCBkYXRlcyAsICBncm91cHMgLCB0ZWFtcyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7IHRvdGFsQ291bnQgLCBkYXRhIH0gPSB0aGlzLmdldFBhZ2VkRGF0YSgpO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF0Y2hlc2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlBoYXNlIGRlIEdyb3VwZTwvaDE+PGhyLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24gaXMtaG92ZXJhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpbHRlciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9eydHcm91cGUgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2dyb3Vwc30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbT17c2VsZWN0ZWRHcm91cH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25JdGVtU2VsZWN0PXt0aGlzLmhhbmRsZUdyb3VwRmlsdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24gaXMtaG92ZXJhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpbHRlciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9eydEYXRlICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtkYXRlc30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbT17c2VsZWN0ZWREYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkl0ZW1TZWxlY3Q9e3RoaXMuaGFuZGxlRGF0ZUZpbHRlcn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duIGlzLWhvdmVyYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaWx0ZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXsnRXF1aXBlICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXt0ZWFtc30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbT17c2VsZWN0ZWRUZWFtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkl0ZW1TZWxlY3Q9e3RoaXMuaGFuZGxlVGVhbUZpbHRlcn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hdGNoZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5tYXAobWF0Y2ggPT5cclxuICAgICAgICAgICAgICAgICAgICA8QmV0cyBtYXRjaD17bWF0Y2h9IGtleT17bWF0Y2guX2lkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBhZ2luYXRpb24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zQ291bnQ9e3RvdGFsQ291bnR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZT17cGFnZVNpemV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlPXtjdXJyZW50UGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25QYWdlQ2hhbmdlPXt0aGlzLmhhbmRsZVBhZ2VDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUGFnZT17dGhpcy5wcmV2aW91c1BhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRQYWdlPXt0aGlzLm5leHRQYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICBcclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBNYXRjaGVzOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9jb21tb24vTG9hZGVyJztcclxuXHJcbmNsYXNzIFJhbmtpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7IFxyXG4gICAgICAgIGRhdGEgOiB7XHJcbiAgICAgICAgICAgIHVzZXJzIDogW11cclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvYWRpbmcgOiBmYWxzZVxyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICB0aGlzLmdldFVzZXJzKClcclxuICAgIH1cclxuXHJcbiAgICBnZXRVc2Vycygpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6dHJ1ZX0pXHJcbiAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL3VzZXIvZ2V0QWxsJykudGhlbigocmVzKSA9PiBcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRhIDoge3VzZXJzIDogcmVzLmRhdGEudXNlcm5hbWVzfSAsIGxvYWRpbmcgOiBmYWxzZX0pKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHsgXHJcbiAgICAgICAgY29uc3Qge3VzZXJzfSA9IHRoaXMuc3RhdGUuZGF0YVxyXG4gICAgICAgIGNvbnN0IHtsb2FkaW5nfSA9IHRoaXMuc3RhdGVcclxuICAgICAgICByZXR1cm4gKCBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIHsvKiB7bG9hZGluZz8gPExvYWRlci8+IDpcclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlV0aWxpc2F0ZXVyczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt1c2Vycy5tYXAodXNlciA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17dXNlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3VzZXJ9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT59ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZSBpcy0xXCI+Q2xhc3NlbWVudCDDoCB2ZW5pciEhPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8aWZyYW1lIHNyYz0naHR0cHM6Ly9nZnljYXQuY29tL2lmci9QYWxlTmVnbGVjdGVkQ2lycmlwZWQnIGZyYW1lYm9yZGVyPScwJyBzY3JvbGxpbmc9J25vJyB3aWR0aD0nNjQwJyBoZWlnaHQ9JzQwNCc+PC9pZnJhbWU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBSYW5raW5nOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBMb2FkZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKCBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxkcy1yb2xsZXJcIj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PC9kaXY+XHJcbiAgICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRlcjsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSm9pIGZyb20gJ2pvaS1icm93c2VyJztcclxuaW1wb3J0IElucHV0IGZyb20gJy4vaW5wdXQnO1xyXG5cclxuY2xhc3MgRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHsgXHJcbiAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgZXJyb3JzOiB7fVxyXG4gICAgfVxyXG4gICAgdG9hc3RvcHRpb25zID0ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcInRvcC1jZW50ZXJcIixcclxuICAgICAgICBhdXRvQ2xvc2U6IDMwMDAsXHJcbiAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgY2xvc2VCdXR0b246IGZhbHNlLFxyXG4gICAgfVxyXG4gICAgdmFsaWRhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHthYm9ydEVhcmx5IDogZmFsc2V9O1xyXG4gICAgICAgIGNvbnN0IHtlcnJvcn0gPSBKb2kudmFsaWRhdGUodGhpcy5zdGF0ZS5kYXRhLCB0aGlzLnNjaGVtYSAsIG9wdGlvbnMpO1xyXG4gICAgICAgIGlmICghZXJyb3IpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCBlcnJvcnMgPSB7fTtcclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGVycm9yLmRldGFpbHMpXHJcbiAgICAgICAgICAgIGVycm9yc1tpdGVtLnBhdGhbMF1dID0gaXRlbS5tZXNzYWdlOyBcclxuICAgICAgICByZXR1cm4gZXJyb3JzO1xyXG4gICAgfTtcclxuICAgIHZhbGlkYXRlUHJvcGVydHkgPSAoe25hbWUsdmFsdWV9KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2JqID0geyBbbmFtZV0gOiB2YWx1ZX07XHJcbiAgICAgICAgY29uc3Qgc2NoZW1hID0geyBbbmFtZV0gOiB0aGlzLnNjaGVtYVtuYW1lXX1cclxuICAgICAgICBsZXQgZXJyb3JNZXNzYWdlO1xyXG4gICAgICAgIGlmIChKb2kudmFsaWRhdGUob2JqLHNjaGVtYSkuZXJyb3IgIT09IG51bGwpe1xyXG4gICAgICAgICAgICBpZiAoW25hbWVdWzBdID09PSAndXNlcm5hbWUnKXsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yID0gSm9pLnZhbGlkYXRlKG9iaixzY2hlbWEpLmVycm9yLmRldGFpbHNbMF0udHlwZTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdhbnkuZW1wdHknOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSAnTGUgbm9tIGRcXCd1dGlsaXNhdGV1ciBkb2l0IMOqdHJlIHJlbnNlaWduw6knO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdzdHJpbmcubWF4JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gJ0xlIG5vbSBkXFwndXRpbGlzYXRldXIgbmUgcGV1dCBleGPDqWRlciA0MCBjYXJhY3TDqHJlcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKFtuYW1lXVswXSA9PT0gJ3Bhc3N3b3JkJyl7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IEpvaS52YWxpZGF0ZShvYmosc2NoZW1hKS5lcnJvci5kZXRhaWxzWzBdLnR5cGU7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYW55LmVtcHR5JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gJ0xlIG1vdCBkZSBwYXNzZSBkb2l0IMOqdHJlIHJlbnNlaWduw6knO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdzdHJpbmcubWluJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gJ0xlIG1vdCBkZSBwYXNzZSBkb2l0IGNvbnRlbmlyIGF1IG1vaW5zIDggY2FyYWN0w6hyZXMnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3N0cmluZy5tYXgnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSAnTGUgbW90IGRlIHBhc3NlIG5lIGRvaXQgcGFzIGTDqXBhc3NlciAyNSBjYXJhY3TDqHJlcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKFtuYW1lXVswXSA9PT0gJ2VtYWlsJyl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IEpvaS52YWxpZGF0ZShvYmosc2NoZW1hKS5lcnJvci5kZXRhaWxzWzBdLnR5cGU7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGVycm9yKXtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdzdHJpbmcuZW1haWwnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSAnVmV1aWxsZXogcmVuc2VpZ25lciB1biBlLW1haWwgdmFsaWRlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYW55LmVtcHR5JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gJ0xcXCdhZHJlc3NlIEVtYWlsIGRvaXQgw6p0cmUgcmVuc2VpZ27DqWUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKFtuYW1lXVswXSA9PT0gJ3Bhc3MnKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yID0gSm9pLnZhbGlkYXRlKG9iaixzY2hlbWEpLmVycm9yLmRldGFpbHNbMF0udHlwZTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdhbnkuZW1wdHknOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSAnTGUgY29kZSBkXFwnYWNjw6hzIGRvaXQgw6p0cmUgcmVuc2VpZ27DqSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlcnJvck1lc3NhZ2VcclxuICAgIH07XHJcbiAgICBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgXHJcbiAgICAgICAgY29uc3QgZXJyb3JzID0gdGhpcy52YWxpZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcnMgOiBlcnJvcnMgfHwge319KTtcclxuICAgICAgICBpZiAoZXJyb3JzKSByZXR1cm47ICBcclxuICAgICAgICB0aGlzLmRvU3VibWl0KCk7ICAgICBcclxuICAgIH07XHJcbiAgICBoYW5kbGVDaGFuZ2UgPSAoe2N1cnJlbnRUYXJnZXQgOiBpbnB1dH0pID0+IHtcclxuICAgICAgICBjb25zdCBlcnJvcnMgPSB7Li4udGhpcy5zdGF0ZS5lcnJvcnN9XHJcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gdGhpcy52YWxpZGF0ZVByb3BlcnR5KGlucHV0KVxyXG4gICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIGVycm9yc1tpbnB1dC5uYW1lXSA9IGVycm9yTWVzc2FnZTtcclxuICAgICAgICBlbHNlIGRlbGV0ZSBlcnJvcnNbaW5wdXQubmFtZV07XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7Li4udGhpcy5zdGF0ZS5kYXRhfTtcclxuICAgICAgICBkYXRhW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YSAsIGVycm9ycyB9KVxyXG4gICAgfVxyXG4gICAgcmVuZGVySW5wdXQobmFtZSxsYWJlbCx0eXBlLGNsYXNzTmFtZSl7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhLCBlcnJvcnMgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIHJldHVybiA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfSBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YVtuYW1lXX0gXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2xhYmVsfSBcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9yc1tuYW1lXX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICB9XHJcbiAgICByZW5kZXJCdXR0b24obGFiZWwsY2xhc3NOYW1lKXtcclxuICAgICAgICByZXR1cm4gPGJ1dHRvbiBkaXNhYmxlZD17dGhpcy52YWxpZGF0ZSgpfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e2xhYmVsfTwvYnV0dG9uPlxyXG4gICAgfSAgICBcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IElucHV0ID0gKHtuYW1lLCBsYWJlbCwgdmFsdWUsIGNsYXNzTmFtZSwgdHlwZSwgZXJyb3IsIG9uQ2hhbmdlfSkgPT4ge1xyXG4gICAgXHJcbiAgICByZXR1cm4gKCBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiIGh0bWxGb3I9e25hbWV9PntsYWJlbH08L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Vycm9yPyAnaXNlcnJvciAnK2NsYXNzTmFtZSA6Y2xhc3NOYW1lfSBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPXt0eXBlfSBcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfSBcclxuICAgICAgICAgICAgICAgICAgICBpZD17bmFtZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIHtlcnJvciAmJiA8cCBjbGFzc05hbWU9XCJlcnJvcm1zZ1wiPntlcnJvci5yZXBsYWNlKC9cIi9nLCcnKX0uPC9wPn1cclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IElucHV0OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5jb25zdCBQYWdpbmF0aW9uID0gKHtpdGVtc0NvdW50ICwgcGFnZVNpemUgLCBjdXJyZW50UGFnZSwgb25QYWdlQ2hhbmdlICwgcHJldmlvdXNQYWdlICwgbmV4dFBhZ2V9KSA9PiB7XHJcbiAgICBjb25zdCBwYWdlc0NvdW50ID0gTWF0aC5jZWlsKGl0ZW1zQ291bnQgLyBwYWdlU2l6ZSk7XHJcbiAgICBpZihwYWdlc0NvdW50PT09MSkgcmV0dXJuIG51bGw7XHJcbiAgICBjb25zdCBwYWdlcyA9IF8ucmFuZ2UoMSwgcGFnZXNDb3VudCsxKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicGFnaW5hdGlvbi1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicGFnaW5hdGlvbi1saW5rXCIgb25DbGljaz17cHJldmlvdXNQYWdlfT4mIzYwOzwvbGk+XHJcbiAgICAgICAgICAgICAgICB7IHBhZ2VzLm1hcChwYWdlID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtwYWdlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgcGFnZSA9PT0gY3VycmVudFBhZ2U/IFwicGFnaW5hdGlvbi1saW5rIGlzLWN1cnJlbnRcIiA6IFwicGFnaW5hdGlvbi1saW5rXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uUGFnZUNoYW5nZShwYWdlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cGFnZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9ICAgICAgXHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicGFnaW5hdGlvbi1saW5rXCIgb25DbGljaz17bmV4dFBhZ2V9PiYjNjI7PC9saT4gICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgVXNlckxvYWRlciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGRzLXJpcHBsZVwiPjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48L2Rpdj4gICAgIFxyXG4gICAgICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBVc2VyTG9hZGVyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4vLi4vY29tbW9uL2Zvcm0nO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciAsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgSm9pIGZyb20gJ2pvaS1icm93c2VyJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNsYXNzIFBhc3NVcGRhdGUgZXh0ZW5kcyBGb3JtIHtcclxuICAgIHN0YXRlID0geyBcclxuICAgICAgICBkYXRhIDoge1xyXG4gICAgICAgICAgICBwYXNzd29yZCA6IFwiXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9ycyA6IHt9LCBcclxuICAgICAgICBsb2FkaW5nIDogZmFsc2UsXHJcbiAgICAgICAgYnV0dG9uVGV4dCA6IFwiVmFsaWRlclwiXHJcbiAgICB9XHJcbiAgICBzY2hlbWEgPSB7XHJcbiAgICAgICAgcGFzc3dvcmQgOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKS5taW4oOCkubWF4KDI1KSxcclxuICAgIH1cclxuICAgIGRvU3VibWl0KCl7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5kYXRhLnBhc3N3b3JkKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtwYXNzd29yZCA6IHRoaXMuc3RhdGUuZGF0YS5wYXNzd29yZCAsIGxvYWRpbmcgOiB0cnVlICwgYnV0dG9uVGV4dCA6ICdQYXRpZW50ZXouLi4uJ30pO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7IHVzZXIgOiB0aGlzLnByb3BzLmFsaWFzLCBwYXNzd29yZCA6IHRoaXMuc3RhdGUuZGF0YS5wYXNzd29yZH1cclxuICAgICAgICBheGlvcyh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6ICdhcGkvdXNlci91cGRhdGVQYXNzd29yZCcsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCd9XHJcbiAgICAgICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoJ01vdCBkZSBwYXNzZSBtb2RpZmnDqSBhdmVjIHN1Y2PDqHMgIScsIHRoaXMudG9hc3RvcHRpb25zKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCggKCkgPT4ge2RvY3VtZW50LmxvY2F0aW9uLmhyZWY9XCIvbG9naW5cIiB9LDIxMDApXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHsgXHJcbiAgICAgICAgY29uc3Qge2xvYWRpbmcsYnV0dG9uVGV4dH0gPSB0aGlzLnN0YXRlXHJcbiAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwibmV3cGFzcy1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJJbnB1dCgncGFzc3dvcmQnLCdOb3V2ZWF1IG1vdCBkZSBwYXNzZSAgOicsJ3RleHQnLCdpbnB1dCcpfVxyXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQnV0dG9uKGJ1dHRvblRleHQsJ2J1dHRvbiBpcy1zdWNjZXNzJyl9XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFBhc3NVcGRhdGUgOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4uL2NvbW1vbi9mb3JtJztcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgLCB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IEpvaSBmcm9tICdqb2ktYnJvd3Nlcic7XHJcbmltcG9ydCBQYXNzVXBkYXRlIGZyb20gJy4vcGFzc1VwZGF0ZSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jbGFzcyBVc2VyQ29uZmlybSBleHRlbmRzIEZvcm0ge1xyXG4gICAgc3RhdGUgPSB7IFxyXG4gICAgICAgIGRhdGEgOiB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lIDogXCJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgZXJyb3JzIDoge30sIFxyXG4gICAgYWxpYXMgOiBcIlwiLFxyXG4gICAgbG9hZGluZyA6IGZhbHNlLFxyXG4gICAgYnV0dG9uVGV4dCA6IFwiVmFsaWRlclwiLFxyXG4gICAgdXNlcnF1ZXJ5IDogdHJ1ZVxyXG4gICAgfVxyXG4gICAgc2NoZW1hID0ge1xyXG4gICAgICAgIHVzZXJuYW1lIDogSm9pLnN0cmluZygpLnJlcXVpcmVkKCkubWF4KDQwKSxcclxuICAgIH1cclxuICAgIGRvU3VibWl0KCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWxpYXMgOiB0aGlzLnN0YXRlLmRhdGEudXNlcm5hbWUgLCBidXR0b25UZXh0IDogJ1BhdGllbnRlei4uLid9KVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7IHVzZXJuYW1lIDogdGhpcy5zdGF0ZS5kYXRhLnVzZXJuYW1lfSAgXHJcbiAgICAgICAgYXhpb3Moe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiAnYXBpL2dldFVzZXJOYW1lJyxcclxuICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgaGVhZGVyczogeydYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J31cclxuICAgICAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgaWYocmVzLmRhdGEudXNlciA9PT0gdGhpcy5zdGF0ZS5kYXRhLnVzZXJuYW1lICl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt1c2VycXVlcnkgOiBmYWxzZX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGE6e3VzZXJuYW1lIDogJyd9LGVycm9ycyA6IHt1c2VybmFtZSA6ICcnfSAsIGJ1dHRvblRleHQgOiBcIlZhbGlkZXJcIn0pO1xyXG4gICAgICAgICAgICAgICAgdG9hc3QuZXJyb3IoJ0xlIG5vbSBkXFwndXRpbGlzYXRldXIgblxcJ2V4aXN0ZSBwYXMnLCB0aGlzLnRvYXN0b3B0aW9ucyk7ICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7IFxyXG4gICAgICAgIGNvbnN0IHsgbG9hZGluZyAsIHVzZXJxdWVyeSAsIGFsaWFzICwgYnV0dG9uVGV4dCB9ID0gdGhpcy5zdGF0ZVxyXG4gICAgICAgIHJldHVybiAoIFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyLz5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlJlbm91dmVsbGVtZW50IGRlIG1vdCBkZSBwYXNzZTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cIm5ld3Bhc3MtZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlcklucHV0KCd1c2VybmFtZScsJ1ZvdHJlIG5vbSBkXFwndXRpbGlzYXRldXIgIDonLCd0ZXh0JywnaW5wdXQnKX1cclxuICAgICAgICAgICAgICAgICAgICB7dXNlcnF1ZXJ5PyB0aGlzLnJlbmRlckJ1dHRvbihidXR0b25UZXh0LCdidXR0b24gaXMtc3VjY2VzcycpIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIHt1c2VycXVlcnk/IG51bGwgOiA8UGFzc1VwZGF0ZSBhbGlhcz17YWxpYXN9Lz59XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBVc2VyQ29uZmlybTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSm9pIGZyb20gJ2pvaS1icm93c2VyJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyB0b2FzdCwgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4vY29tbW9uL2Zvcm0nO1xyXG5pbXBvcnQgVXNlckxvYWRlciBmcm9tICcuL2NvbW1vbi91c2VybG9hZGVyJztcclxuXHJcbmNsYXNzIFNpZ251cCBleHRlbmRzIEZvcm0ge1xyXG4gICAgc3RhdGUgPSB7IFxyXG4gICAgICAgIGRhdGEgOiB7XHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZSA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZCA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBlbWFpbCA6IFwiXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBlcnJvcnMgOiB7fSxcclxuICAgICAgICBsb2FkaW5nIDogZmFsc2UsXHJcbiAgICAgICAgYnV0dG9uVGV4dCA6IFwiVmFsaWRlclwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgIHNjaGVtYSA9IHtcclxuICAgICAgICB1c2VybmFtZSA6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLm1heCg0MCksXHJcbiAgICAgICAgcGFzc3dvcmQgOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKS5taW4oOCkubWF4KDI1KSxcclxuICAgICAgICBlbWFpbCA6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLmVtYWlsKClcclxuICAgIH1cclxuICAgIGRvU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6dHJ1ZSAsIGJ1dHRvblRleHQ6IFwiQ2hhcmdlbWVudC4uLlwifSlcclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICB1c2VybmFtZSA6IHRoaXMuc3RhdGUuZGF0YS51c2VybmFtZSxcclxuICAgICAgICAgICAgcGFzc3dvcmQgOiB0aGlzLnN0YXRlLmRhdGEucGFzc3dvcmQsXHJcbiAgICAgICAgICAgIGVtYWlsIDogdGhpcy5zdGF0ZS5kYXRhLmVtYWlsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF4aW9zKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogJ2FwaS91c2VyL25ldycsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCd9ICAgICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzpmYWxzZSAsIGJ1dHRvblRleHQgOiBcIlZhbGlkZXJcIn0pXHJcbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICB0b2FzdC5zdWNjZXNzKHJlcy5kYXRhLm1lc3NhZ2UsIHRoaXMudG9hc3RvcHRpb25zKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvbG9naW4nKX0sMzUwMCl9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOmZhbHNlLCBidXR0b25UZXh0IDogXCJWYWxpZGVyXCJ9KVxyXG4gICAgICAgICAgICB0b2FzdC5lcnJvcignTGUgbm9tIGRcXCd1dGlsaXNhdGV1ciBlc3QgZMOpamEgdXRpbGlzw6knLCB0aGlzLnRvYXN0b3B0aW9ucyk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHsgXHJcbiAgICAgICAgY29uc3QgeyBsb2FkaW5nIH0gPSB0aGlzLnN0YXRlXHJcbiAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8VG9hc3RDb250YWluZXIvPlxyXG4gICAgICAgICAgICAgICAge2xvYWRpbmcgPT09IHRydWUgPyA8VXNlckxvYWRlci8+IDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5DcsOpZXIgdW4gbm91dmVhdSBjb21wdGU8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgyPlZvdXMgYXZleiBkw6lqYSB1biBjb21wdGU/IENsaXF1ZXogPExpbmsgdG89XCJsb2dpblwiPmljaTwvTGluaz4gcG91ciB2b3VzIGNvbm5lY3RlcjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInNpZ251cC1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVySW5wdXQoJ3VzZXJuYW1lJywnQ2hvaXNpciB1biBOb20gZFxcJ3V0aWxpc2F0ZXVyICA6JywndGV4dCcsJ2lucHV0Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVySW5wdXQoJ2VtYWlsJywnUmVuc2VpZ25lciB1bmUgYWRyZXNzZSBFbWFpbCAgOicsJ3RleHQnLCdpbnB1dCcpfVxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlcklucHV0KCdwYXNzd29yZCcsJ0Nyw6llciB1biBNb3QgZGUgcGFzc2UgIDonLCdwYXNzd29yZCcsJ2lucHV0Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBpcy1ncm91cGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckJ1dHRvbignVmFsaWRlcicsJ2J1dHRvbiBpcy1zdWNjZXNzJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2hvbWVcIiBjbGFzc05hbWU9XCJidXR0b24gaXMtaW5mb1wiPkFubnVsZXI8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBTaWdudXA7IiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYWdpbmF0ZShpdGVtcyxwYWdlTnVtYmVyLHBhZ2VTaXplKXtcclxuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSAocGFnZU51bWJlciAtIDEpICogcGFnZVNpemU7XHJcbiAgICByZXR1cm4gXyhpdGVtcykuc2xpY2Uoc3RhcnRJbmRleCkudGFrZShwYWdlU2l6ZSkudmFsdWUoKTtcclxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=