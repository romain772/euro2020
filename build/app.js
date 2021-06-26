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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Header */ "./assets/components/Header.js");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Home */ "./assets/components/Home.js");
/* harmony import */ var _components_Matches__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Matches */ "./assets/components/Matches.js");
/* harmony import */ var _components_RoundEight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/RoundEight */ "./assets/components/RoundEight.js");
/* harmony import */ var _components_QuarterFinal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/QuarterFinal */ "./assets/components/QuarterFinal.js");
/* harmony import */ var _components_SemiFinal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/SemiFinal */ "./assets/components/SemiFinal.js");
/* harmony import */ var _components_Final__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Final */ "./assets/components/Final.js");
/* harmony import */ var _components_signup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/signup */ "./assets/components/signup.js");
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/Login */ "./assets/components/Login.js");
/* harmony import */ var _components_Account__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/Account */ "./assets/components/Account.js");
/* harmony import */ var _components_Ranking__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/Ranking */ "./assets/components/Ranking.js");
/* harmony import */ var _components_passupdate_userConfirm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/passupdate/userConfirm */ "./assets/components/passupdate/userConfirm.js");
/* harmony import */ var _components_Rules__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/Rules */ "./assets/components/Rules.js");
/* harmony import */ var _components_private_setscoreprivate__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/private/setscoreprivate */ "./assets/components/private/setscoreprivate.js");


















react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_3__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, {
  path: "/home",
  component: _components_Home__WEBPACK_IMPORTED_MODULE_4__.default
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, {
  path: "/matches",
  component: _components_Matches__WEBPACK_IMPORTED_MODULE_5__.default
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, {
  path: "/round8",
  component: _components_RoundEight__WEBPACK_IMPORTED_MODULE_6__.default
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, {
  path: "/quarterfinals",
  component: _components_QuarterFinal__WEBPACK_IMPORTED_MODULE_7__.default
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, {
  path: "/semifinals",
  component: _components_SemiFinal__WEBPACK_IMPORTED_MODULE_8__.default
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, {
  path: "/final",
  component: _components_Final__WEBPACK_IMPORTED_MODULE_9__.default
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, {
  path: "/signup",
  component: _components_signup__WEBPACK_IMPORTED_MODULE_10__.default
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, {
  path: "/login",
  component: _components_Login__WEBPACK_IMPORTED_MODULE_11__.default
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, {
  path: "/newpassword/",
  component: _components_passupdate_userConfirm__WEBPACK_IMPORTED_MODULE_14__.default
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, {
  path: "/ranking",
  component: _components_Ranking__WEBPACK_IMPORTED_MODULE_13__.default
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, {
  path: "/rules",
  component: _components_Rules__WEBPACK_IMPORTED_MODULE_15__.default
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, {
  path: "/admin",
  component: _components_private_setscoreprivate__WEBPACK_IMPORTED_MODULE_16__.default
}), sessionStorage.getItem('connected') === 'true' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, {
  path: "/account",
  component: _components_Account__WEBPACK_IMPORTED_MODULE_12__.default
}) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Redirect, {
  to: "/home"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, {
  path: "/",
  exact: true
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Redirect, {
  to: "/home"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Redirect, {
  to: "/home"
})))), document.getElementById('root'));

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-tooltip */ "./node_modules/react-tooltip/dist/index.es.js");
/* harmony import */ var _common_pagination__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./common/pagination */ "./assets/components/common/pagination.js");
/* harmony import */ var _utilities_paginate__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../utilities/paginate */ "./assets/utilities/paginate.js");
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
      matches: [],
      currentPage: 1,
      pageSize: 10
    });

    _defineProperty(_assertThisInitialized(_this), "getPagedData", function () {
      var _this$state = _this.state,
          pageSize = _this$state.pageSize,
          currentPage = _this$state.currentPage,
          bets = _this$state.bets;
      var betsListPerPage = (0,_utilities_paginate__WEBPACK_IMPORTED_MODULE_25__.paginate)(bets, currentPage, pageSize);
      return {
        totalCount: bets.length,
        data: betsListPerPage
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
          bets = _this$state2.bets,
          pageSize = _this$state2.pageSize;

      if (currentPage < Math.ceil(bets.length / pageSize)) {
        currentPage++;
      }

      _this.setState({
        currentPage: currentPage
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handlePageChange", function (page) {
      _this.setState({
        currentPage: page
      });
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
      var _this$state3 = this.state,
          username = _this$state3.username,
          loading = _this$state3.loading,
          bets = _this$state3.bets,
          matches = _this$state3.matches,
          pageSize = _this$state3.pageSize,
          currentPage = _this$state3.currentPage;

      var _this$getPagedData = this.getPagedData(),
          totalCount = _this$getPagedData.totalCount,
          data = _this$getPagedData.data;

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
      }, data.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement(react__WEBPACK_IMPORTED_MODULE_20__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("th", null, "Date du prono"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("th", null, "Match"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("th", null, "Mon pronostic"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("th", null, "R\xE9sultat du match"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("th", null, "Statut du prono"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("tbody", null, data.map(function (bet) {
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
        }), matches.map(function (match) {
          if (match._id == bet.match_id && match.homescore && match.awayscore !== "") {
            if (bet.homescore > bet.awayscore) {
              if (match.homescore > match.awayscore && match.homescore == bet.homescore && match.awayscore == bet.awayscore) {
                return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("td", {
                  className: "won3",
                  key: match._id
                }, "Pari Gagn\xE9 ! 3 points!");
              }

              if (match.homescore > match.awayscore) {
                return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("td", {
                  className: "won2",
                  key: match._id
                }, "Pari Gagn\xE9 ! 2 points!");
              } else {
                return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("td", {
                  className: "lose",
                  key: match._id
                }, "Pari perdu");
              }
            }

            if (bet.homescore < bet.awayscore) {
              if (match.homescore < match.awayscore && match.homescore == bet.homescore && match.awayscore == bet.awayscore) {
                return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("td", {
                  className: "won3",
                  key: match._id
                }, "Pari Gagn\xE9 ! 3 points!");
              }

              if (match.homescore < match.awayscore) {
                return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("td", {
                  className: "won2",
                  key: match._id
                }, "Pari Gagn\xE9 ! 2 points!");
              } else {
                return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("td", {
                  className: "lose",
                  key: match._id
                }, "Pari perdu");
              }
            }

            if (bet.homescore === bet.awayscore) {
              if (match.homescore === match.awayscore && match.homescore == bet.homescore && match.awayscore == bet.awayscore) {
                return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("td", {
                  className: "won3",
                  key: match._id
                }, "Pari Gagn\xE9  !  3 points  !");
              }

              if (match.homescore === match.awayscore) {
                return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("td", {
                  className: "won2",
                  key: match._id
                }, "Pari Gagn\xE9  !  2 points  !");
              } else {
                return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("td", {
                  className: "lose",
                  key: match._id
                }, "Pari perdu");
              }
            }
          } else if (match._id == bet.match_id && match.homescore === "") {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("td", {
              key: match._id
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_26__.Link, {
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
        }));
      }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("p", null, "Vous n'avez pas encore plac\xE9 de pronostics."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("p", null, "Revenez vers les", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_26__.Link, {
        to: "/matches"
      }, " matches "), "pour commencer \xE0 pronostiquer."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", {
        className: "pagination"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement(_common_pagination__WEBPACK_IMPORTED_MODULE_24__.default, {
        itemsCount: totalCount,
        pageSize: pageSize,
        currentPage: currentPage,
        onPageChange: this.handlePageChange,
        previousPage: this.previousPage,
        nextPage: this.nextPage
      }))));
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
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_number_is_integer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.number.is-integer.js */ "./node_modules/core-js/modules/es.number.is-integer.js");
/* harmony import */ var core_js_modules_es_number_is_integer_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_integer_js__WEBPACK_IMPORTED_MODULE_10__);
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
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _common_Loader__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./common/Loader */ "./assets/components/common/Loader.js");
/* harmony import */ var joi_browser__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! joi-browser */ "./node_modules/joi-browser/dist/joi-browser.js");
/* harmony import */ var joi_browser__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(joi_browser__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! react-tooltip */ "./node_modules/react-tooltip/dist/index.es.js");
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
      connected: sessionStorage.getItem('connected'),
      validationdate: true
    });

    _defineProperty(_assertThisInitialized(_this), "source", axios__WEBPACK_IMPORTED_MODULE_35___default().CancelToken.source());

    _defineProperty(_assertThisInitialized(_this), "schema", {
      homeresult: joi_browser__WEBPACK_IMPORTED_MODULE_34___default().number().required(),
      awayresult: joi_browser__WEBPACK_IMPORTED_MODULE_34___default().number().required()
    });

    _defineProperty(_assertThisInitialized(_this), "validate", function () {
      var options = {
        abortEarly: false
      };

      var _Joi$validate = joi_browser__WEBPACK_IMPORTED_MODULE_34___default().validate(_this.state.data, _this.schema, options),
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
        betid: (0,uuid__WEBPACK_IMPORTED_MODULE_37__.default)(),
        hometeam: _this.props.match.hometeam,
        awayteam: _this.props.match.awayteam
      };

      if (_this.state.betstatus === false) {
        axios__WEBPACK_IMPORTED_MODULE_35___default()({
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

            react_toastify__WEBPACK_IMPORTED_MODULE_38__.toast.success('Pronostic validé!', {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              closeButton: false
            });
            setTimeout(function () {
              document.location.href = "/roundmatches?p=".concat(_this.props.currentPage);
            }, 1200);
          }

          ;
        })["catch"](function (err) {
          react_toastify__WEBPACK_IMPORTED_MODULE_38__.toast.error('Veuillez réessayer', {
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
      } else if (_this.state.betstatus === true) {
        axios__WEBPACK_IMPORTED_MODULE_35___default()({
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

            react_toastify__WEBPACK_IMPORTED_MODULE_38__.toast.success('Pronostic modifié!', {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              closeButton: false
            });
            setTimeout(function () {
              document.location.href = "/matches?p=".concat(_this.props.currentPage);
            }, 1200);
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
      var matchdate = Number(this.props.match.date.slice(0, 2));
      var date = new Date();
      var options = {
        day: "numeric"
      };
      var newdate = Number(date.toLocaleDateString('fr-FR', options));
      var matchtime = Number(this.props.match.time.split('h').join(''));
      var time = date.getHours();

      if (matchdate === newdate && matchtime - time <= 1 || newdate > matchdate) {
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
        axios__WEBPACK_IMPORTED_MODULE_35___default()({
          method: 'POST',
          url: 'api/getbets',
          data: data,
          headers: {
            'X-Requested-With': 'XMLHttpRequest'
          },
          cancelToken: this.source.token
        }).then(function (res) {
          if (Number.isInteger(res.data.homescore)) {
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32__.createElement("div", {
        className: "box"
      }, toast ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32__.createElement(react_toastify__WEBPACK_IMPORTED_MODULE_38__.ToastContainer, null) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32__.createElement("h3", null, match.date, " - ", match.time), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32__.createElement("h4", null, match.round), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32__.createElement("p", null, match.location), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32__.createElement("pre", {
        className: "matchdetails"
      }, match.hometeam && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32__.createElement("img", {
        className: "hometeamimg",
        src: "/images/".concat(match.hometeam, ".svg")
      }), match.hometeam, " ", match.homescore, " - ", match.awayscore, " ", match.awayteam, match.hometeam && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32__.createElement("img", {
        className: "awayteamimg",
        src: "/images/".concat(match.awayteam, ".svg")
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32__.createElement("div", null, loading === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32__.createElement(_common_Loader__WEBPACK_IMPORTED_MODULE_33__.default, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32__.createElement(react__WEBPACK_IMPORTED_MODULE_32__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32__.createElement("button", {
        onClick: this.handleClick,
        className: hidden ? 'button betbutton is-primary' : 'hidden'
      }, betstatus ? 'Voir votre pronostic' : "Parier sur ce match")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32__.createElement("div", {
        className: hidden ? 'hidden' : 'betgames'
      }, connected === "true" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32__.createElement("div", null, validationdate ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32__.createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32__.createElement("em", null, match.hometeam + " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32__.createElement("input", {
        name: "homeresult",
        value: data.homeresult,
        onChange: this.handleChange,
        type: "text",
        className: "score homeresult",
        error: errors["homeresult"]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32__.createElement("b", null, " - "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32__.createElement("input", {
        name: "awayresult",
        value: data.awayresult,
        onChange: this.handleChange,
        type: "text",
        className: inputerrors ? 'inputerrors' : 'score'
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32__.createElement("em", null, " ", match.awayteam, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32__.createElement("button", {
        onClick: this.handleSubmit,
        disabled: this.validate(),
        type: "button",
        className: "button is-danger"
      }, "OK")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32__.createElement("div", {
        "data-tip": match.hometeam ? 'Ce pronostic ne peut plus être modifié' : 'Vous ne pouvez pas encore parier sur ce match'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32__.createElement("p", null, match.hometeam, " ", data.homeresult, " - ", data.awayresult, " ", match.awayteam), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32__.createElement(react_tooltip__WEBPACK_IMPORTED_MODULE_36__.default, {
        type: "light",
        border: true,
        borderColor: "#3384A8",
        textColor: "#3384A8",
        arrowColor: "#3384A8"
      }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32__.createElement("p", null, "Vous devez \xEAtre connect\xE9 pour placer un pronostic."))));
    }
  }]);

  return Bets;
}(react__WEBPACK_IMPORTED_MODULE_32__.Component);

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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("b", null, match.date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("b", null, match.time), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, match.hometeam, " - ", match.awayteam));
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

/***/ "./assets/components/Final.js":
/*!************************************!*\
  !*** ./assets/components/Final.js ***!
  \************************************/
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








var Final = /*#__PURE__*/function (_Component) {
  _inherits(Final, _Component);

  var _super = _createSuper(Final);

  function Final() {
    var _this;

    _classCallCheck(this, Final);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      currentround: _this.props.location.pathname,
      matches: [],
      selectedMatches: [],
      dates: [],
      selectedDate: '',
      teams: [],
      selectedTeam: '',
      date: new Date('d-M-Y')
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
          selectedRound: '',
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
          selectedRound: ''
        });
      }
    });

    return _this;
  }

  _createClass(Final, [{
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
        var currentround = _this2.state.currentround;
        var matches = [];

        if (currentround === '/final') {
          matches = res.data.slice(50);
        }

        var dates = [];
        var teams = [];
        matches.map(function (m) {
          if (!dates.includes(m.date)) dates.push(m.date);
          if (!teams.includes(m.hometeam)) teams.push(m.hometeam);
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
            selectedMatches: singlematch
          });
        } else {
          _this2.setState({
            matches: matches,
            teams: teams.sort(),
            dates: dates,
            selectedMatches: matches
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          matches = _this$state.matches,
          currentPage = _this$state.currentPage,
          selectedDate = _this$state.selectedDate,
          selectedTeam = _this$state.selectedTeam,
          dates = _this$state.dates,
          teams = _this$state.teams;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("div", {
        className: "matchescontent"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("h1", {
        className: "title"
      }, "Phase Finale"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("h5", {
        className: "title is-5"
      }, "Finale"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("div", {
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
      }, matches.map(function (match) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement(_Bets__WEBPACK_IMPORTED_MODULE_30__.default, {
          match: match,
          key: match._id,
          currentPage: currentPage
        });
      })));
    }
  }]);

  return Final;
}(react__WEBPACK_IMPORTED_MODULE_26__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Final);

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
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
      connected: sessionStorage.getItem('connected'),
      mobilemenu: false,
      isActive: false
    });

    return _this;
  }

  _createClass(Header, [{
    key: "onLogout",
    value: function onLogout() {
      sessionStorage.setItem('connected', 'false');
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {
        to: "/rules",
        className: "navbar-item"
      }, "R\xE8gles"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement("div", {
        className: "navbar-item has-dropdown is-hoverable"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement("div", {
        className: "navbar-item"
      }, "Matches"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement("div", {
        className: "navbar-dropdown"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {
        to: "/matches",
        className: "navbar-item"
      }, "Phase de Groupe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {
        to: "/round8",
        className: "navbar-item"
      }, "Huiti\xE8mes de finale"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {
        to: "/quarterfinals",
        className: "navbar-item"
      }, "Quarts de finale"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {
        to: "/semifinals",
        className: "navbar-item"
      }, "Demi-Finales"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {
        to: "/final",
        className: "navbar-item"
      }, "Finale"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {
        to: "/ranking",
        className: "navbar-item"
      }, "Classement")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement("div", {
        className: "navbar-item"
      }, connected === 'true' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement("div", {
        className: "buttons"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {
        to: "/account",
        className: "button is-primary"
      }, "Mon compte"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement("button", {
        onClick: this.onLogout,
        className: "button is-warning"
      }, "D\xE9connection")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement("div", {
        className: "buttons"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {
        to: "/login",
        className: "button is-primary"
      }, "Connection"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {
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
      var connected = sessionStorage.getItem('connected');
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
          sessionStorage.setItem('connected', 'true');
          setTimeout(function () {
            document.location.href = "/home";
          }, 1600);
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
      var currentPage = Number(this.props.location.search.slice(3));

      if (currentPage === 0 || currentPage === NaN) {
        return;
      } else {
        this.setState({
          currentPage: currentPage
        });
      }
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
          key: match._id,
          currentPage: currentPage
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

/***/ "./assets/components/QuarterFinal.js":
/*!*******************************************!*\
  !*** ./assets/components/QuarterFinal.js ***!
  \*******************************************/
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








var QuarterFinals = /*#__PURE__*/function (_Component) {
  _inherits(QuarterFinals, _Component);

  var _super = _createSuper(QuarterFinals);

  function QuarterFinals() {
    var _this;

    _classCallCheck(this, QuarterFinals);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      currentround: _this.props.location.pathname,
      matches: [],
      selectedMatches: [],
      dates: [],
      selectedDate: '',
      teams: [],
      selectedTeam: '',
      date: new Date('d-M-Y')
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
          selectedRound: '',
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
          selectedRound: ''
        });
      }
    });

    return _this;
  }

  _createClass(QuarterFinals, [{
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
        var currentround = _this2.state.currentround;
        var matches = [];

        if (currentround === '/quarterfinals') {
          matches = res.data.slice(44, 48);
        }

        var dates = [];
        var teams = [];
        matches.map(function (m) {
          if (!dates.includes(m.date)) dates.push(m.date);
          if (!teams.includes(m.hometeam)) teams.push(m.hometeam);
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
            selectedMatches: singlematch
          });
        } else {
          _this2.setState({
            matches: matches,
            teams: teams.sort(),
            dates: dates,
            selectedMatches: matches
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          matches = _this$state.matches,
          currentPage = _this$state.currentPage,
          selectedDate = _this$state.selectedDate,
          selectedTeam = _this$state.selectedTeam,
          dates = _this$state.dates,
          teams = _this$state.teams;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("div", {
        className: "matchescontent"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("h1", {
        className: "title"
      }, "Phase Finale"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("h5", {
        className: "title is-5"
      }, "Quarts de Finale"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("div", {
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
      }, matches.map(function (match) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement(_Bets__WEBPACK_IMPORTED_MODULE_30__.default, {
          match: match,
          key: match._id,
          currentPage: currentPage
        });
      })));
    }
  }]);

  return QuarterFinals;
}(react__WEBPACK_IMPORTED_MODULE_26__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuarterFinals);

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
      users: [],
      matches: [],
      loading: false
    });

    return _this;
  }

  _createClass(Ranking, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          users = _this$state.users,
          loading = _this$state.loading;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
        className: "table-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("h2", {
        className: "title is-2"
      }, "Classement"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("h1", {
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

/***/ "./assets/components/RoundEight.js":
/*!*****************************************!*\
  !*** ./assets/components/RoundEight.js ***!
  \*****************************************/
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








var RoundEight = /*#__PURE__*/function (_Component) {
  _inherits(RoundEight, _Component);

  var _super = _createSuper(RoundEight);

  function RoundEight() {
    var _this;

    _classCallCheck(this, RoundEight);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      currentround: _this.props.location.pathname,
      matches: [],
      selectedMatches: [],
      dates: [],
      selectedDate: '',
      teams: [],
      selectedTeam: '',
      date: new Date('d-M-Y')
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
          selectedRound: '',
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
          selectedRound: ''
        });
      }
    });

    return _this;
  }

  _createClass(RoundEight, [{
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
        var currentround = _this2.state.currentround;
        var matches = [];

        if (currentround === '/round8') {
          matches = res.data.slice(36, 44);
        }

        var dates = [];
        var teams = [];
        matches.map(function (m) {
          if (!dates.includes(m.date)) dates.push(m.date);
          if (!teams.includes(m.hometeam)) teams.push(m.hometeam);
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
            selectedMatches: singlematch
          });
        } else {
          _this2.setState({
            matches: matches,
            teams: teams.sort(),
            dates: dates,
            selectedMatches: matches
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          currentround = _this$state.currentround,
          matches = _this$state.matches,
          currentPage = _this$state.currentPage,
          selectedDate = _this$state.selectedDate,
          selectedTeam = _this$state.selectedTeam,
          dates = _this$state.dates,
          teams = _this$state.teams;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("div", {
        className: "matchescontent"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("h1", {
        className: "title is-1"
      }, "Phase Finale"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("h5", {
        className: "title is-5"
      }, "Huiti\xE8mes de Finale"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("div", {
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
      }, matches.map(function (match) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement(_Bets__WEBPACK_IMPORTED_MODULE_30__.default, {
          match: match,
          key: match._id,
          currentPage: currentPage
        });
      })));
    }
  }]);

  return RoundEight;
}(react__WEBPACK_IMPORTED_MODULE_26__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoundEight);

/***/ }),

/***/ "./assets/components/Rules.js":
/*!************************************!*\
  !*** ./assets/components/Rules.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var Rules = function Rules() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "rules"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "title is-1"
  }, "Les r\xE8gles du jeu"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "On peut pronostiquer le r\xE9sultat de tous les matches (phases de poule et phase finale d\xE8s qu'ils seront connus)."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "On pronostique sur le r\xE9sultat du match apr\xE8s 90 minutes (prolongations et tirs aux buts non pris en compte)."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Les pronostics peuvent \xE9tre d\xE9pos\xE9s ou modifi\xE9s jusqu'\xE0 1h avant le d\xE9but du match."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Un pronostic correct sans score exact rapporte 2 points ( exemple = [R\xE9sultat Italie - Turquie = 2-1] , [pronostic 3 - 0] = pari gagn\xE9)."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Un pronostic correct avec le score exact rapporte 3 points."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Le gagnant gagne (et c'est bieng)!")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rules);

/***/ }),

/***/ "./assets/components/SemiFinal.js":
/*!****************************************!*\
  !*** ./assets/components/SemiFinal.js ***!
  \****************************************/
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








var SemiFinals = /*#__PURE__*/function (_Component) {
  _inherits(SemiFinals, _Component);

  var _super = _createSuper(SemiFinals);

  function SemiFinals() {
    var _this;

    _classCallCheck(this, SemiFinals);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      currentround: _this.props.location.pathname,
      matches: [],
      selectedMatches: [],
      dates: [],
      selectedDate: '',
      teams: [],
      selectedTeam: '',
      date: new Date('d-M-Y')
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
          selectedRound: '',
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
          selectedRound: ''
        });
      }
    });

    return _this;
  }

  _createClass(SemiFinals, [{
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
        var currentround = _this2.state.currentround;
        var matches = [];

        if (currentround === '/semifinals') {
          matches = res.data.slice(48, 50);
        }

        var dates = [];
        var teams = [];
        matches.map(function (m) {
          if (!dates.includes(m.date)) dates.push(m.date);
          if (!teams.includes(m.hometeam)) teams.push(m.hometeam);
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
            selectedMatches: singlematch
          });
        } else {
          _this2.setState({
            matches: matches,
            teams: teams.sort(),
            dates: dates,
            selectedMatches: matches
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          matches = _this$state.matches,
          currentPage = _this$state.currentPage,
          selectedDate = _this$state.selectedDate,
          selectedTeam = _this$state.selectedTeam,
          dates = _this$state.dates,
          teams = _this$state.teams;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("div", {
        className: "matchescontent"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("h1", {
        className: "title"
      }, "Phase Finale"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("h5", {
        className: "title is-5"
      }, "Demi-Finales"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("div", {
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
      }, matches.map(function (match) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement(_Bets__WEBPACK_IMPORTED_MODULE_30__.default, {
          match: match,
          key: match._id,
          currentPage: currentPage
        });
      })));
    }
  }]);

  return SemiFinals;
}(react__WEBPACK_IMPORTED_MODULE_26__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SemiFinals);

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
      autoClose: 1500,
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
      var buttonText = this.state.buttonText;
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
          userquery = _this$state.userquery,
          alias = _this$state.alias,
          buttonText = _this$state.buttonText;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(react_toastify__WEBPACK_IMPORTED_MODULE_18__.ToastContainer, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("h1", {
        className: "title"
      }, "Renouvellement de mot de passe"), userquery ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("form", {
        onSubmit: this.handleSubmit,
        className: "newpass-form"
      }, this.renderInput('username', 'Votre nom d\'utilisateur  :', 'text', 'input'), userquery ? this.renderButton(buttonText, 'button is-success') : null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("h6", {
        className: "title is-6"
      }, "Votre Nom d'utilisateur : "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("p", null, this.state.data.username)), userquery ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(_passUpdate__WEBPACK_IMPORTED_MODULE_16__.default, {
        alias: alias
      }));
    }
  }]);

  return UserConfirm;
}(_common_form__WEBPACK_IMPORTED_MODULE_14__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserConfirm);

/***/ }),

/***/ "./assets/components/private/setscoreprivate.js":
/*!******************************************************!*\
  !*** ./assets/components/private/setscoreprivate.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
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
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_20__);
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




var SetScore = /*#__PURE__*/function (_Component) {
  _inherits(SetScore, _Component);

  var _super = _createSuper(SetScore);

  function SetScore() {
    var _this;

    _classCallCheck(this, SetScore);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      users: [],
      matches: []
    });

    return _this;
  }

  _createClass(SetScore, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getData();
      this.getMatches();
    }
  }, {
    key: "getData",
    value: function getData() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_20___default().get('/api/user/getUsersandBets').then(function (res) {
        var users = res.data.users;

        _this2.setState({
          users: users
        });
      });
    }
  }, {
    key: "getMatches",
    value: function getMatches() {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_20___default().get("https://portfolio-72147-default-rtdb.europe-west1.firebasedatabase.app/matches.json").then(function (res) {
        _this3.setState({
          matches: res.data
        });
      });
    }
  }, {
    key: "getPoints",
    value: function getPoints(userid) {
      var users = _toConsumableArray(this.state.users);

      var matches = _toConsumableArray(this.state.matches);

      var user = users.find(function (u) {
        return u.user_id === userid;
      });
      var bets = user.bets;
      var userpoints = 0;

      for (var i = 0; i < matches.length; i++) {
        for (var j = 0; j < bets.length; j++) {
          if (matches[i]._id == bets[j].match_id && matches[i].homescore && matches[i].awayscore !== "") {
            if (bets[j].homescore > bets[j].awayscore) {
              if (matches[i].homescore > matches[i].awayscore && matches[i].homescore == bets[j].homescore && matches[i].awayscore == bets[j].awayscore) {
                userpoints += 3;
              } else if (matches[i].homescore > matches[i].awayscore) {
                userpoints += 2;
              }
            }

            if (bets[j].homescore < bets[j].awayscore) {
              if (matches[i].homescore < matches[i].awayscore && matches[i].homescore == bets[j].homescore && matches[i].awayscore == bets[j].awayscore) {
                userpoints += 3;
              } else if (matches[i].homescore < matches[i].awayscore) {
                userpoints += 2;
              }
            }

            if (bets[j].homescore === bets[j].awayscore) {
              if (matches[i].homescore === matches[i].awayscore && matches[i].homescore == bets[j].homescore && matches[i].awayscore == bets[j].awayscore) {
                userpoints += 3;
              } else if (matches[i].homescore === matches[i].awayscore) {
                userpoints += 2;
              }
            }
          }
        }
      }

      return userpoints;
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var users = this.state.users;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement("div", null, users.map(function (user) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement("div", {
          key: user.user_id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement("p", null, user.username), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement("p", null, _this4.getPoints(user.user_id)));
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement("button", {
        className: "button is-primary"
      }, "Envoyer"));
    }
  }]);

  return SetScore;
}(react__WEBPACK_IMPORTED_MODULE_19__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SetScore);

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
          }, 1600);
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_axios_index_js-node_modules_core-js_modules_es_array_concat_js-node_modu-9b7ae9"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0FjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQmV0cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Db21pbmdNYXRjaGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9GaW5hbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Mb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9NYXRjaGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1F1YXJ0ZXJGaW5hbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9SYW5raW5nLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1JvdW5kRWlnaHQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvUnVsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvU2VtaUZpbmFsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1dlbGNvbWVNb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9jb21tb24vTG9hZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2NvbW1vbi9mb3JtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2NvbW1vbi9pbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9jb21tb24vcGFnaW5hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9jb21tb24vdXNlcmxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9wYXNzdXBkYXRlL3Bhc3NVcGRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvcGFzc3VwZGF0ZS91c2VyQ29uZmlybS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9wcml2YXRlL3NldHNjb3JlcHJpdmF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9zaWdudXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3V0aWxpdGllcy9wYWdpbmF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3MiXSwibmFtZXMiOlsiUmVhY3RET00iLCJIb21lIiwiTWF0Y2hlcyIsIlJvdW5kRWlnaHQiLCJRdWFydGVyRmluYWxzIiwiU2VtaUZpbmFscyIsIkZpbmFsIiwiU2lnbnVwIiwiTG9naW4iLCJVc2VyQ29uZmlybSIsIlJhbmtpbmciLCJSdWxlcyIsIlNldFNjb3JlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiQWNjb3VudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJsb2FkaW5nIiwiaWQiLCJsb2NhbFN0b3JhZ2UiLCJ1c2VybmFtZSIsImJldHMiLCJtYXRjaGVzIiwiY3VycmVudFBhZ2UiLCJwYWdlU2l6ZSIsInN0YXRlIiwiYmV0c0xpc3RQZXJQYWdlIiwicGFnaW5hdGUiLCJ0b3RhbENvdW50IiwibGVuZ3RoIiwiZGF0YSIsInNldFN0YXRlIiwiTWF0aCIsImNlaWwiLCJwYWdlIiwiZ2V0VXNlckJ5SWQiLCJnZXRNYXRjaGVzIiwiYXhpb3MiLCJ0aGVuIiwicmVzIiwiZXJyIiwiY29uc29sZSIsImxvZyIsIk51bWJlciIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJnZXRQYWdlZERhdGEiLCJ0b1VwcGVyQ2FzZSIsIm1hcCIsImJldCIsIm1hdGNoX2lkIiwiYmV0X2RhdGUiLCJkYXRlIiwic2xpY2UiLCJzcGxpdCIsInJldmVyc2UiLCJqb2luIiwiaG9tZXRlYW0iLCJhd2F5dGVhbSIsImhvbWVzY29yZSIsImF3YXlzY29yZSIsIm1hdGNoIiwiX2lkIiwiaGFuZGxlUGFnZUNoYW5nZSIsInByZXZpb3VzUGFnZSIsIm5leHRQYWdlIiwiQ29tcG9uZW50IiwiQmV0cyIsImhpZGRlbiIsImhvbWVyZXN1bHQiLCJhd2F5cmVzdWx0IiwiZXJyb3JzIiwiYmV0c3RhdHVzIiwidG9hc3QiLCJjb25uZWN0ZWQiLCJ2YWxpZGF0aW9uZGF0ZSIsIkpvaSIsInJlcXVpcmVkIiwib3B0aW9ucyIsImFib3J0RWFybHkiLCJzY2hlbWEiLCJlcnJvciIsImRldGFpbHMiLCJpdGVtIiwicGF0aCIsIm1lc3NhZ2UiLCJpbnB1dCIsImN1cnJlbnRUYXJnZXQiLCJuYW1lIiwidmFsdWUiLCJlIiwicHJldmVudERlZmF1bHQiLCJ2YWxpZGF0ZSIsImRvU3VibWl0IiwibWF0Y2hpZCIsInByb3BzIiwiYmV0aWQiLCJ1dWlkdjQiLCJzdGF0dXMiLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsImNsb3NlT25DbGljayIsImNsb3NlQnV0dG9uIiwic2V0VGltZW91dCIsImxvY2F0aW9uIiwiaHJlZiIsImdldEJldHMiLCJnZXRWYWxpZGF0aW9uRGF0ZSIsInNvdXJjZSIsImNhbmNlbCIsIm1hdGNoZGF0ZSIsIkRhdGUiLCJkYXkiLCJuZXdkYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwibWF0Y2h0aW1lIiwidGltZSIsImdldEhvdXJzIiwidXNlcmlkIiwiY2FuY2VsVG9rZW4iLCJ0b2tlbiIsImlzSW50ZWdlciIsImlucHV0ZXJyb3JzIiwicm91bmQiLCJoYW5kbGVDbGljayIsImhhbmRsZUNoYW5nZSIsImhhbmRsZVN1Ym1pdCIsIkNvbWluZ01hdGNoZXMiLCJGaWx0ZXIiLCJpdGVtcyIsIm9uSXRlbVNlbGVjdCIsInNlbGVjdGVkSXRlbSIsImxhYmVsIiwidG9Mb3dlckNhc2UiLCJjdXJyZW50cm91bmQiLCJwYXRobmFtZSIsInNlbGVjdGVkTWF0Y2hlcyIsImRhdGVzIiwic2VsZWN0ZWREYXRlIiwidGVhbXMiLCJzZWxlY3RlZFRlYW0iLCJmaWx0ZXIiLCJtIiwic2VsZWN0ZWRSb3VuZCIsInRlYW0iLCJzZWFyY2giLCJpbmNsdWRlcyIsInB1c2giLCJzaW5nbGVtYXRjaCIsImZpbmQiLCJzb3J0IiwiaGFuZGxlRGF0ZUZpbHRlciIsImhhbmRsZVRlYW1GaWx0ZXIiLCJIZWFkZXIiLCJtb2JpbGVtZW51IiwiaXNBY3RpdmUiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsIndpbmRvdyIsInJlcGxhY2UiLCJvbkxvZ291dCIsInNob3dtb2RhbCIsImdldFVzZXIiLCJzaG93TW9kYWwiLCJpIiwiaGVpZ2h0Iiwid2lkdGgiLCJwYXNzd29yZCIsImVycm9yc2NvdW50IiwiYnV0dG9uVGV4dCIsIm1heCIsIm1pbiIsInRvYXN0b3B0aW9ucyIsInJlbmRlcklucHV0IiwicmVuZGVyQnV0dG9uIiwiRm9ybSIsImdyb3VwcyIsInNlbGVjdGVkR3JvdXAiLCJncm91cCIsIm1hdGNoTGlzdFBlclBhZ2UiLCJOYU4iLCJoYW5kbGVHcm91cEZpbHRlciIsInVzZXJzIiwiV2VsY29tZU1vZGFsIiwibW9kYWx2aWV3IiwibW9kYWxzaG93IiwiTG9hZGVyIiwib2JqIiwiZXJyb3JNZXNzYWdlIiwidHlwZSIsInZhbGlkYXRlUHJvcGVydHkiLCJjbGFzc05hbWUiLCJJbnB1dCIsIm9uQ2hhbmdlIiwiUGFnaW5hdGlvbiIsIml0ZW1zQ291bnQiLCJvblBhZ2VDaGFuZ2UiLCJwYWdlc0NvdW50IiwicGFnZXMiLCJfIiwiVXNlckxvYWRlciIsIlBhc3NVcGRhdGUiLCJ1c2VyIiwiYWxpYXMiLCJ1c2VycXVlcnkiLCJnZXREYXRhIiwidSIsInVzZXJfaWQiLCJ1c2VycG9pbnRzIiwiaiIsImdldFBvaW50cyIsImVtYWlsIiwiaGlzdG9y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UmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgU3dpdGNoLCBSb3V0ZSwgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZSc7XG5pbXBvcnQgTWF0Y2hlcyBmcm9tICcuL2NvbXBvbmVudHMvTWF0Y2hlcyc7XG5pbXBvcnQgUm91bmRFaWdodCBmcm9tICcuL2NvbXBvbmVudHMvUm91bmRFaWdodCc7XG5pbXBvcnQgUXVhcnRlckZpbmFscyBmcm9tICcuL2NvbXBvbmVudHMvUXVhcnRlckZpbmFsJztcbmltcG9ydCBTZW1pRmluYWxzIGZyb20gJy4vY29tcG9uZW50cy9TZW1pRmluYWwnO1xuaW1wb3J0IEZpbmFsIGZyb20gJy4vY29tcG9uZW50cy9GaW5hbCc7XG5pbXBvcnQgU2lnbnVwIGZyb20gJy4vY29tcG9uZW50cy9zaWdudXAnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4vY29tcG9uZW50cy9Mb2dpbic7XG5pbXBvcnQgQWNjb3VudCBmcm9tICcuL2NvbXBvbmVudHMvQWNjb3VudCc7XG5pbXBvcnQgUmFua2luZyBmcm9tICcuL2NvbXBvbmVudHMvUmFua2luZyc7XG5pbXBvcnQgVXNlckNvbmZpcm0gZnJvbSAnLi9jb21wb25lbnRzL3Bhc3N1cGRhdGUvdXNlckNvbmZpcm0nO1xuaW1wb3J0IFJ1bGVzIGZyb20gJy4vY29tcG9uZW50cy9SdWxlcyc7XG5pbXBvcnQgU2V0U2NvcmUgZnJvbSAnLi9jb21wb25lbnRzL3ByaXZhdGUvc2V0c2NvcmVwcml2YXRlJztcbiAgICBcblJlYWN0RE9NLnJlbmRlcihcblxuICAgIDxSb3V0ZXI+XG4gICAgICAgIDxIZWFkZXIvPlxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvaG9tZVwiIGNvbXBvbmVudD17SG9tZX0vPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL21hdGNoZXNcIiBjb21wb25lbnQ9e01hdGNoZXN9Lz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9yb3VuZDhcIiBjb21wb25lbnQ9e1JvdW5kRWlnaHR9IC8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcXVhcnRlcmZpbmFsc1wiIGNvbXBvbmVudD17UXVhcnRlckZpbmFsc30gLz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9zZW1pZmluYWxzXCIgY29tcG9uZW50PXtTZW1pRmluYWxzfSAvPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2ZpbmFsXCIgY29tcG9uZW50PXtGaW5hbH0gLz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9zaWdudXBcIiBjb21wb25lbnQ9e1NpZ251cH0vPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2xvZ2luXCIgY29tcG9uZW50PXtMb2dpbn0vPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL25ld3Bhc3N3b3JkL1wiIGNvbXBvbmVudD17VXNlckNvbmZpcm19Lz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9yYW5raW5nXCIgY29tcG9uZW50PXtSYW5raW5nfS8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcnVsZXNcIiBjb21wb25lbnQ9e1J1bGVzfS8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYWRtaW5cIiBjb21wb25lbnQ9e1NldFNjb3JlfS8+XG4gICAgICAgICAgICAgICAge3Nlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2Nvbm5lY3RlZCcpPT09J3RydWUnP1xuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hY2NvdW50XCIgY29tcG9uZW50PXtBY2NvdW50fS8+OlxuICAgICAgICAgICAgICAgICAgICA8UmVkaXJlY3QgdG89XCIvaG9tZVwiIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGV4YWN0ID5cbiAgICAgICAgICAgICAgICAgICAgPFJlZGlyZWN0IHRvPVwiL2hvbWVcIiAvPlxuICAgICAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICAgICAgPFJlZGlyZWN0IHRvPVwiL2hvbWVcIi8+XG4gICAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgPC9tYWluPlxuICAgICAgICBcbiAgICA8L1JvdXRlcj4gICAgXG4gICAgXG4gICAgLGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9jb21tb24vTG9hZGVyJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgUmVhY3RUb29sdGlwIGZyb20gJ3JlYWN0LXRvb2x0aXAnO1xyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuL2NvbW1vbi9wYWdpbmF0aW9uJztcclxuaW1wb3J0IHsgcGFnaW5hdGUgfSBmcm9tICcuLi91dGlsaXRpZXMvcGFnaW5hdGUnO1xyXG5cclxuY2xhc3MgQWNjb3VudCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhdGUgPSB7IFxyXG4gICAgICAgIGxvYWRpbmcgOiB0cnVlLFxyXG4gICAgICAgIGlkOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWQnKSxcclxuICAgICAgICB1c2VybmFtZSA6IFwiXCIsXHJcbiAgICAgICAgYmV0cyA6IFtdLFxyXG4gICAgICAgIG1hdGNoZXMgOiBbXSxcclxuICAgICAgICBjdXJyZW50UGFnZSA6IDEgLFxyXG4gICAgICAgIHBhZ2VTaXplIDogMTAsXHJcbiAgICB9O1xyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICB0aGlzLmdldFVzZXJCeUlkKCk7XHJcbiAgICAgICAgdGhpcy5nZXRNYXRjaGVzKCk7XHJcbiAgICB9O1xyXG4gICAgZ2V0TWF0Y2hlcygpeyAgICAgICAgXHJcbiAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgLmdldChgaHR0cHM6Ly9wb3J0Zm9saW8tNzIxNDctZGVmYXVsdC1ydGRiLmV1cm9wZS13ZXN0MS5maXJlYmFzZWRhdGFiYXNlLmFwcC9tYXRjaGVzLmpzb25gKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7dGhpcy5zZXRTdGF0ZSh7bWF0Y2hlcyA6IHJlcy5kYXRhfSl9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge2NvbnNvbGUubG9nKGVycil9KVxyXG4gICAgfTtcclxuICAgIGdldFVzZXJCeUlkKCl7XHJcbiAgICAgICAgY29uc3QgaWQgPSBOdW1iZXIodGhpcy5zdGF0ZS5pZCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHsgaWQgOiBpZH07XHJcbiAgICAgICAgYXhpb3Moe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiAnYXBpL3VzZXIvZ2V0VXNlckJ5SWQnLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7J1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnfSAgICAgXHJcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt1c2VybmFtZTpyZXMuZGF0YX0pXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXhpb3Moe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiAnYXBpL2dldGJldHNCeVVzZXInLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7J1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnfSAgICAgXHJcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtiZXRzIDogcmVzLmRhdGEgLCBsb2FkaW5nIDogZmFsc2V9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG4gICAgZ2V0UGFnZWREYXRhID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgcGFnZVNpemUsIGN1cnJlbnRQYWdlLCBiZXRzfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgYmV0c0xpc3RQZXJQYWdlID0gcGFnaW5hdGUoYmV0cyxjdXJyZW50UGFnZSxwYWdlU2l6ZSk7XHJcbiAgICAgICAgcmV0dXJuIHsgdG90YWxDb3VudDogYmV0cy5sZW5ndGgsIGRhdGE6IGJldHNMaXN0UGVyUGFnZX1cclxuICAgIH1cclxuICAgIHByZXZpb3VzUGFnZSA9ICgpID0+IHtcclxuICAgICAgICBsZXQge2N1cnJlbnRQYWdlfSA9IHRoaXMuc3RhdGVcclxuICAgICAgICBpZiAoY3VycmVudFBhZ2UgPjEgKXtcclxuICAgICAgICAgICAgY3VycmVudFBhZ2UtLVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50UGFnZX0pXHJcbiAgICB9ICAgIFxyXG4gICAgbmV4dFBhZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHtjdXJyZW50UGFnZSxiZXRzLHBhZ2VTaXplfSA9IHRoaXMuc3RhdGVcclxuICAgICAgICBpZiAoY3VycmVudFBhZ2UgPCBNYXRoLmNlaWwoYmV0cy5sZW5ndGggLyBwYWdlU2l6ZSkgKXtcclxuICAgICAgICAgICAgY3VycmVudFBhZ2UrK1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50UGFnZX0pXHJcbiAgICB9ICAgIFxyXG4gICAgaGFuZGxlUGFnZUNoYW5nZSA9IChwYWdlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRQYWdlIDogcGFnZX0pO1xyXG4gICAgfTtcclxuICAgIHJlbmRlcigpIHsgXHJcbiAgICAgICAgY29uc3Qge3VzZXJuYW1lICwgbG9hZGluZyAsIGJldHMgLCBtYXRjaGVzICwgcGFnZVNpemUgLGN1cnJlbnRQYWdlfSA9IHRoaXMuc3RhdGVcclxuICAgICAgICBjb25zdCB7IHRvdGFsQ291bnQgLCBkYXRhIH0gPSB0aGlzLmdldFBhZ2VkRGF0YSgpO1xyXG4gICAgICAgIHJldHVybiAoICAgICBcclxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlIGlzLTJcIj5Nb24gQ29tcHRlPC9oMj5cclxuICAgICAgICAgICAgICAgIHtsb2FkaW5nPyA8TG9hZGVyLz46XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY291bnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5Nb24gZXNwYWNlPC9wPiBcclxuICAgICAgICAgICAgICAgICAgICA8ZW0gY2xhc3NOYW1lPVwidXNlcm5hbWVcIj57dXNlcm5hbWUudG9VcHBlckNhc2UoKX08L2VtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxocj48L2hyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0aXRsZSBpcy02XCI+TWVzIHByb25vcyA6PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5sZW5ndGggPiAwID8gXHJcbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkRhdGUgZHUgcHJvbm88L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5NYXRjaDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk1vbiBwcm9ub3N0aWM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Sw6lzdWx0YXQgZHUgbWF0Y2g8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TdGF0dXQgZHUgcHJvbm88L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoYmV0ID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17YmV0Lm1hdGNoX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtiZXQuYmV0X2RhdGUuZGF0ZS5zbGljZSgwLDEwKS5zcGxpdCgnLScpLnJldmVyc2UoKS5qb2luKCcvJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AvaW1hZ2VzLyR7YmV0LmhvbWV0ZWFtfS5zdmdgfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjVweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob21laW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtiZXQuaG9tZXRlYW19IC0ge2JldC5hd2F5dGVhbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AvaW1hZ2VzLyR7YmV0LmF3YXl0ZWFtfS5zdmdgfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjVweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhd2F5aW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57YmV0LmhvbWVzY29yZX0gLSB7YmV0LmF3YXlzY29yZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttYXRjaGVzLm1hcChtYXRjaCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2guaG9tZXNjb3JlICYmIG1hdGNoLl9pZCA9PT0gYmV0Lm1hdGNoX2lkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e21hdGNoLl9pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21hdGNoLmhvbWVzY29yZX0gLSB7bWF0Y2guYXdheXNjb3JlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1hdGNoLmhvbWVzY29yZSA9PT0gJycgJiYgbWF0Y2guX2lkID09PSBiZXQubWF0Y2hfaWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8dGQga2V5PXttYXRjaC5faWR9Pk1hdGNoIMOgIHZlbmlyPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVzLm1hcChtYXRjaCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZigobWF0Y2guX2lkID09IGJldC5tYXRjaF9pZCAmJiAobWF0Y2guaG9tZXNjb3JlICYmIG1hdGNoLmF3YXlzY29yZSAhPT0gXCJcIikpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihiZXQuaG9tZXNjb3JlID4gYmV0LmF3YXlzY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1hdGNoLmhvbWVzY29yZSA+IG1hdGNoLmF3YXlzY29yZSAmJiBtYXRjaC5ob21lc2NvcmUgPT0gYmV0LmhvbWVzY29yZSAmJiBtYXRjaC5hd2F5c2NvcmUgPT0gYmV0LmF3YXlzY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRkIGNsYXNzTmFtZT1cIndvbjNcIiBrZXk9e21hdGNoLl9pZH0+UGFyaSBHYWduw6kgISAzIHBvaW50cyE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYobWF0Y2guaG9tZXNjb3JlID4gbWF0Y2guYXdheXNjb3JlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8dGQgY2xhc3NOYW1lPVwid29uMlwiIGtleT17bWF0Y2guX2lkfT5QYXJpIEdhZ27DqSAhIDIgcG9pbnRzITwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8dGQgY2xhc3NOYW1lPVwibG9zZVwiIGtleT17bWF0Y2guX2lkfT5QYXJpIHBlcmR1PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihiZXQuaG9tZXNjb3JlIDwgYmV0LmF3YXlzY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1hdGNoLmhvbWVzY29yZSA8IG1hdGNoLmF3YXlzY29yZSAmJiBtYXRjaC5ob21lc2NvcmUgPT0gYmV0LmhvbWVzY29yZSAmJiBtYXRjaC5hd2F5c2NvcmUgPT0gYmV0LmF3YXlzY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRkIGNsYXNzTmFtZT1cIndvbjNcIiBrZXk9e21hdGNoLl9pZH0+UGFyaSBHYWduw6kgISAzIHBvaW50cyE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihtYXRjaC5ob21lc2NvcmUgPCBtYXRjaC5hd2F5c2NvcmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx0ZCBjbGFzc05hbWU9XCJ3b24yXCIga2V5PXttYXRjaC5faWR9PlBhcmkgR2FnbsOpICEgMiBwb2ludHMhPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx0ZCBjbGFzc05hbWU9XCJsb3NlXCIga2V5PXttYXRjaC5faWR9PlBhcmkgcGVyZHU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYmV0LmhvbWVzY29yZSA9PT0gYmV0LmF3YXlzY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1hdGNoLmhvbWVzY29yZSA9PT0gbWF0Y2guYXdheXNjb3JlICYmIG1hdGNoLmhvbWVzY29yZSA9PSBiZXQuaG9tZXNjb3JlICYmIG1hdGNoLmF3YXlzY29yZSA9PSBiZXQuYXdheXNjb3JlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8dGQgY2xhc3NOYW1lPVwid29uM1wiIGtleT17bWF0Y2guX2lkfT5QYXJpIEdhZ27DqSAgISAgMyBwb2ludHMgICE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1hdGNoLmhvbWVzY29yZSA9PT0gbWF0Y2guYXdheXNjb3JlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8dGQgY2xhc3NOYW1lPVwid29uMlwiIGtleT17bWF0Y2guX2lkfT5QYXJpIEdhZ27DqSAgISAgMiBwb2ludHMgICE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRkIGNsYXNzTmFtZT1cImxvc2VcIiBrZXk9e21hdGNoLl9pZH0+UGFyaSBwZXJkdTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoKG1hdGNoLl9pZCA9PSBiZXQubWF0Y2hfaWQgJiYgbWF0Y2guaG9tZXNjb3JlPT09IFwiXCIpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e21hdGNoLl9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10aXA9XCJWb2lyIG91IG1vZGlmaWVyIGxlIHByb25vc3RpY1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e2AvbWF0Y2hlcz9tYXRjaD0ke2JldC5tYXRjaF9pZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+ICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdFRvb2x0aXAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImxpZ2h0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyIGJvcmRlckNvbG9yPVwiIzMzODRBOFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcj1cIiMzMzg0QThcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd0NvbG9yPVwiIzMzODRBOFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVuIGNvdXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD4gOlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlZvdXMgbidhdmV6IHBhcyBlbmNvcmUgcGxhY8OpIGRlIHByb25vc3RpY3MuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5SZXZlbmV6IHZlcnMgbGVzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvbWF0Y2hlc1wiPiBtYXRjaGVzIDwvTGluaz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3VyIGNvbW1lbmNlciDDoCBwcm9ub3N0aXF1ZXIuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2luYXRpb24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtc0NvdW50PXt0b3RhbENvdW50fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplPXtwYWdlU2l6ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlPXtjdXJyZW50UGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUGFnZUNoYW5nZT17dGhpcy5oYW5kbGVQYWdlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNQYWdlPXt0aGlzLnByZXZpb3VzUGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRQYWdlPXt0aGlzLm5leHRQYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50OyIsImltcG9ydCBSZWFjdCAsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuL2NvbW1vbi9Mb2FkZXInO1xyXG5pbXBvcnQgSm9pIGZyb20gJ2pvaS1icm93c2VyJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XHJcbmltcG9ydCB7IHRvYXN0LCBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IFJlYWN0VG9vbHRpcCBmcm9tICdyZWFjdC10b29sdGlwJztcclxuXHJcbmNsYXNzIEJldHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgaGlkZGVuIDogdHJ1ZSxcclxuICAgICAgICBkYXRhIDoge1xyXG4gICAgICAgICAgICBob21lcmVzdWx0IDogXCIgXCIsXHJcbiAgICAgICAgICAgIGF3YXlyZXN1bHQgOiBcIiBcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3JzOiB7fSxcclxuICAgICAgICBiZXRzdGF0dXMgOiBmYWxzZSxcclxuICAgICAgICB0b2FzdCA6IGZhbHNlLCBcclxuICAgICAgICBsb2FkaW5nIDogdHJ1ZSxcclxuICAgICAgICBjb25uZWN0ZWQgOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdjb25uZWN0ZWQnKSxcclxuICAgICAgICB2YWxpZGF0aW9uZGF0ZSA6IHRydWVcclxuICAgIH07XHJcbiAgICBzb3VyY2UgPSBheGlvcy5DYW5jZWxUb2tlbi5zb3VyY2UoKTtcclxuICAgIHNjaGVtYSA9IHtcclxuICAgICAgICBob21lcmVzdWx0IDogSm9pLm51bWJlcigpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgYXdheXJlc3VsdCA6IEpvaS5udW1iZXIoKS5yZXF1aXJlZCgpXHJcbiAgICB9O1xyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICB0aGlzLmdldEJldHMoKTtcclxuICAgICAgICB0aGlzLmdldFZhbGlkYXRpb25EYXRlKClcclxuICAgIH07XHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zb3VyY2UpIHtcclxuICAgICAgICAgIHRoaXMuc291cmNlLmNhbmNlbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldFZhbGlkYXRpb25EYXRlKCl7XHJcbiAgICAgICAgY29uc3QgbWF0Y2hkYXRlID0gTnVtYmVyKHRoaXMucHJvcHMubWF0Y2guZGF0ZS5zbGljZSgwLDIpKTtcclxuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKVxyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7ZGF5OiBcIm51bWVyaWNcIn07XHJcbiAgICAgICAgY29uc3QgbmV3ZGF0ZSA9IE51bWJlcihkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygnZnItRlInLG9wdGlvbnMpKTtcclxuICAgICAgICBjb25zdCBtYXRjaHRpbWUgPSBOdW1iZXIodGhpcy5wcm9wcy5tYXRjaC50aW1lLnNwbGl0KCdoJykuam9pbignJykpXHJcbiAgICAgICAgY29uc3QgdGltZSA9IGRhdGUuZ2V0SG91cnMoKVxyXG4gICAgICAgIGlmKG1hdGNoZGF0ZSA9PT0gbmV3ZGF0ZSAmJiBtYXRjaHRpbWUgLSB0aW1lIDw9IDEgfHwgbmV3ZGF0ZSA+IG1hdGNoZGF0ZSl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRpb25kYXRlIDogZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldEJldHMoKXtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jb25uZWN0ZWQgPT09ICd0cnVlJyl7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHsgdXNlcmlkIDogTnVtYmVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZCcpKSAsIG1hdGNoaWQgOiB0aGlzLnByb3BzLm1hdGNoLl9pZH07XHJcbiAgICAgICAgYXhpb3MoeyBtZXRob2QgOiAnUE9TVCcgLCB1cmw6ICdhcGkvZ2V0YmV0cycsIGRhdGEgOiBkYXRhICwgaGVhZGVyczogeydYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J30gLCBjYW5jZWxUb2tlbjogdGhpcy5zb3VyY2UudG9rZW5cclxuICAgICAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgaWYgKE51bWJlci5pc0ludGVnZXIocmVzLmRhdGEuaG9tZXNjb3JlKSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YSA6IHsgaG9tZXJlc3VsdCA6IHJlcy5kYXRhLmhvbWVzY29yZSAsIGF3YXlyZXN1bHQgOiByZXMuZGF0YS5hd2F5c2NvcmUgfSwgbG9hZGluZyA6IGZhbHNlICwgYmV0c3RhdHVzIDogdHJ1ZX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YSA6IHsgaG9tZXJlc3VsdCA6ICcnICwgYXdheXJlc3VsdCA6ICcnIH0sIGxvYWRpbmcgOiBmYWxzZX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KX1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZyA6IGZhbHNlIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHZhbGlkYXRlID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7YWJvcnRFYXJseSA6IGZhbHNlfTtcclxuICAgICAgICBjb25zdCB7ZXJyb3J9ID0gSm9pLnZhbGlkYXRlKHRoaXMuc3RhdGUuZGF0YSwgdGhpcy5zY2hlbWEsIG9wdGlvbnMpO1xyXG4gICAgICAgIGlmICghZXJyb3IpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGNvbnN0IGVycm9ycyA9IHt9O1xyXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgZXJyb3IuZGV0YWlscylcclxuICAgICAgICAgICAgZXJyb3JzW2l0ZW0ucGF0aFswXV0gPSBpdGVtLm1lc3NhZ2U7IFxyXG4gICAgICAgIHJldHVybiBlcnJvcnM7XHJcbiAgICB9O1xyXG4gICAgaGFuZGxlQ2hhbmdlID0gKHtjdXJyZW50VGFyZ2V0IDogaW5wdXR9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHsuLi50aGlzLnN0YXRlLmRhdGF9O1xyXG4gICAgICAgIGRhdGFbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRhfSk7XHJcbiAgICB9O1xyXG4gICAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aGlkZGVuOmZhbHNlfSlcclxuICAgIH07XHJcbiAgICBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgXHJcbiAgICAgICAgY29uc3QgZXJyb3JzID0gdGhpcy52YWxpZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcnMgOiBlcnJvcnMgfHwge319KTtcclxuICAgICAgICBpZiAoZXJyb3JzKSByZXR1cm47ICBcclxuICAgICAgICB0aGlzLmRvU3VibWl0KCk7XHJcbiAgICB9O1xyXG4gICAgZG9TdWJtaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAgICAgaG9tZXNjb3JlIDogdGhpcy5zdGF0ZS5kYXRhLmhvbWVyZXN1bHQsXHJcbiAgICAgICAgICAgIGF3YXlzY29yZSA6IHRoaXMuc3RhdGUuZGF0YS5hd2F5cmVzdWx0LFxyXG4gICAgICAgICAgICBtYXRjaGlkIDogdGhpcy5wcm9wcy5tYXRjaC5faWQsXHJcbiAgICAgICAgICAgIGJldGlkIDogdXVpZHY0KCksXHJcbiAgICAgICAgICAgIGhvbWV0ZWFtIDogdGhpcy5wcm9wcy5tYXRjaC5ob21ldGVhbSxcclxuICAgICAgICAgICAgYXdheXRlYW0gOiAgdGhpcy5wcm9wcy5tYXRjaC5hd2F5dGVhbVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYmV0c3RhdHVzID09PSBmYWxzZSl7XHJcbiAgICAgICAgICAgIGF4aW9zKFxyXG4gICAgICAgICAgICAgICAge21ldGhvZDogJ1BPU1QnLCB1cmw6ICdhcGkvcG9zdGJldHMnLCBkYXRhOiBkYXRhLCBoZWFkZXJzOiB7J1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnfX0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuIDogdHJ1ZSAsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9tZXJlc3VsdCA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2F5cmVzdWx0IDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmV0c3RhdHVzIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3QgOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoJ1Byb25vc3RpYyB2YWxpZMOpIScsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9DbG9zZTogMTAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZUJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IGRvY3VtZW50LmxvY2F0aW9uLmhyZWY9YC9yb3VuZG1hdGNoZXM/cD0ke3RoaXMucHJvcHMuY3VycmVudFBhZ2V9YCB9LDEyMDApO1xyXG4gICAgICAgICAgICAgICAgfTsgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdC5lcnJvcignVmV1aWxsZXogcsOpZXNzYXllcicsIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICBhdXRvQ2xvc2U6IDMwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VCdXR0b246IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5zZXRTdGF0ZSh7dG9hc3QgOiBmYWxzZX0pfSw2MDAwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUuYmV0c3RhdHVzID09PSB0cnVlKXtcclxuICAgICAgICAgICAgYXhpb3Moe21ldGhvZDonUE9TVCcsdXJsOidhcGkvdXBkYXRlYmV0cycsIGRhdGE6ZGF0YSwgaGVhZGVyczogeydYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J319KVxyXG4gICAgICAgICAgICAudGhlbigocmVzKT0+IHtpZiAocmVzLnN0YXR1cyA9PT0gMjAwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBcclxuICAgICAgICAgICAgICAgICAgICBoaWRkZW4gOiB0cnVlICwgXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG9tZXJlc3VsdCA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YXlyZXN1bHQgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgICAgICAgICAgYmV0c3RhdHVzIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdCA6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pOyBcclxuICAgICAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoJ1Byb25vc3RpYyBtb2RpZmnDqSEnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0Nsb3NlOiAxMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IGRvY3VtZW50LmxvY2F0aW9uLmhyZWY9YC9tYXRjaGVzP3A9JHt0aGlzLnByb3BzLmN1cnJlbnRQYWdlfWAgfSwxMjAwKTtcclxuICAgICAgICAgICAgfX0pO1xyXG4gICAgICAgIH07ICAgICAgIFxyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7aGlkZGVuLCBkYXRhICwgZXJyb3JzICwgaW5wdXRlcnJvcnMgLCBiZXRzdGF0dXMgLCB0b2FzdCAsIGNvbm5lY3RlZCAsIGxvYWRpbmcgLCB2YWxpZGF0aW9uZGF0ZX0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHttYXRjaH0gPSB0aGlzLnByb3BzO1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XHJcbiAgICAgICAgICAgICAgICB7dG9hc3Q/IDxUb2FzdENvbnRhaW5lci8+IDogbnVsbH0gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8aDM+e21hdGNoLmRhdGV9IC0ge21hdGNoLnRpbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgIDxoND57bWF0Y2gucm91bmR9PC9oND5cclxuICAgICAgICAgICAgICAgIDxwPnttYXRjaC5sb2NhdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICA8cHJlIGNsYXNzTmFtZT1cIm1hdGNoZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHttYXRjaC5ob21ldGVhbSAmJiBcclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImhvbWV0ZWFtaW1nXCIgc3JjPXtgL2ltYWdlcy8ke21hdGNoLmhvbWV0ZWFtfS5zdmdgfS8+fVxyXG4gICAgICAgICAgICAgICAgICAgIHttYXRjaC5ob21ldGVhbX0ge21hdGNoLmhvbWVzY29yZX0gLSB7bWF0Y2guYXdheXNjb3JlfSB7bWF0Y2guYXdheXRlYW19XHJcbiAgICAgICAgICAgICAgICAgICAge21hdGNoLmhvbWV0ZWFtICYmIFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYXdheXRlYW1pbWdcIiBzcmM9e2AvaW1hZ2VzLyR7bWF0Y2guYXdheXRlYW19LnN2Z2B9Lz59XHJcbiAgICAgICAgICAgICAgICA8L3ByZT5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7bG9hZGluZyA9PT0gdHJ1ZSA/IDxMb2FkZXIvPiA6IFxyXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30gY2xhc3NOYW1lPXtoaWRkZW4gPyAnYnV0dG9uIGJldGJ1dHRvbiBpcy1wcmltYXJ5JyA6ICdoaWRkZW4nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2JldHN0YXR1cz8gJ1ZvaXIgdm90cmUgcHJvbm9zdGljJyA6IFwiUGFyaWVyIHN1ciBjZSBtYXRjaFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtoaWRkZW4gPyAnaGlkZGVuJyA6ICdiZXRnYW1lcyd9PlxyXG4gICAgICAgICAgICAgICAge2Nvbm5lY3RlZCA9PT0gXCJ0cnVlXCIgPyAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj4gICBcclxuICAgICAgICAgICAgICAgICAgICB7dmFsaWRhdGlvbmRhdGU/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGVtPnttYXRjaC5ob21ldGVhbStcIiBcIn08L2VtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJob21lcmVzdWx0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS5ob21lcmVzdWx0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNjb3JlIGhvbWVyZXN1bHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnNbXCJob21lcmVzdWx0XCJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj4gLSA8L2I+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhd2F5cmVzdWx0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS5hd2F5cmVzdWx0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aW5wdXRlcnJvcnM/ICdpbnB1dGVycm9ycycgOiAnc2NvcmUnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxlbT4ge21hdGNoLmF3YXl0ZWFtfSA8L2VtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVN1Ym1pdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMudmFsaWRhdGUoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT0tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtdGlwPXttYXRjaC5ob21ldGVhbT8nQ2UgcHJvbm9zdGljIG5lIHBldXQgcGx1cyDDqnRyZSBtb2RpZmnDqScgOiAnVm91cyBuZSBwb3V2ZXogcGFzIGVuY29yZSBwYXJpZXIgc3VyIGNlIG1hdGNoJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWF0Y2guaG9tZXRlYW19IHtkYXRhLmhvbWVyZXN1bHR9IC0ge2RhdGEuYXdheXJlc3VsdH0ge21hdGNoLmF3YXl0ZWFtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0VG9vbHRpcCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibGlnaHRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXIgYm9yZGVyQ29sb3I9XCIjMzM4NEE4XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yPVwiIzMzODRBOFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93Q29sb3I9XCIjMzM4NEE4XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pn0gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+Vm91cyBkZXZleiDDqnRyZSBjb25uZWN0w6kgcG91ciBwbGFjZXIgdW4gcHJvbm9zdGljLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBCZXRzOyIsImltcG9ydCB7IG1hdGNoZXMgfSBmcm9tICdsb2Rhc2gtZXMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQ29taW5nTWF0Y2hlcyA9ICh7ZGF0YX0pID0+IHtcclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29taW5nbWF0Y2hlc1wiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGUgaXMtM1wiPlByb2NoYWlucyBtYXRjaGVzPC9oMz5cclxuICAgICAgICAgICAge2RhdGEubWFwKG1hdGNoID0+IFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCIga2V5PXttYXRjaC5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxiPnttYXRjaC5kYXRlfTwvYj48YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICA8Yj57bWF0Y2gudGltZX08L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e21hdGNoLmhvbWV0ZWFtfSAtIHttYXRjaC5hd2F5dGVhbX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IENvbWluZ01hdGNoZXM7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEZpbHRlciA9ICh7aXRlbXMsb25JdGVtU2VsZWN0LHNlbGVjdGVkSXRlbSxsYWJlbH0pID0+IHtcclxuXHJcbiAgICByZXR1cm4gKCBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLXRyaWdnZXJcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPkZpbHRyZXIgcGFyIHtsYWJlbC50b0xvd2VyQ2FzZSgpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaXMtc21hbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvYW5nbGVkb3duLnN2Z1wiLz5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17JycgPT09IHNlbGVjdGVkSXRlbSA/ICdzZWxlY3Rpb24gaXMtc2VsZWN0ZWQnIDogJ3NlbGVjdGlvbid9IG9uQ2xpY2s9eyAoKSA9PiBvbkl0ZW1TZWxlY3QoJ0FsbCcpfT5Ub3VzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbXMubWFwKGl0ZW0gPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpdGVtID09PSBzZWxlY3RlZEl0ZW0gPyAnc2VsZWN0aW9uIGlzLXNlbGVjdGVkJyA6ICdzZWxlY3Rpb24nfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiBvbkl0ZW1TZWxlY3QoaXRlbSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbCAhPT0gJ0dyb3VwZSAnPyBpdGVtIDogbGFiZWwgKyBpdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgKX0gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlcjsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xyXG5pbXBvcnQgQmV0cyBmcm9tICcuL0JldHMnO1xyXG5pbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcclxuXHJcbmNsYXNzIEZpbmFsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0ZSA9IHsgXHJcbiAgICAgICAgY3VycmVudHJvdW5kIDogdGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZSxcclxuICAgICAgICBtYXRjaGVzIDogW10sXHJcbiAgICAgICAgc2VsZWN0ZWRNYXRjaGVzIDogW10sXHJcbiAgICAgICAgZGF0ZXMgOiBbXSAsXHJcbiAgICAgICAgc2VsZWN0ZWREYXRlIDogJycsXHJcbiAgICAgICAgdGVhbXMgOiBbXSxcclxuICAgICAgICBzZWxlY3RlZFRlYW0gOiAnJyxcclxuICAgICAgICBkYXRlIDogbmV3IERhdGUoJ2QtTS1ZJylcclxuICAgIH07XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIHRoaXMuZ2V0TWF0Y2hlcygpO1xyXG4gICAgfVxyXG4gICAgZ2V0TWF0Y2hlcygpIHsgICAgICAgIFxyXG4gICAgICAgIGF4aW9zLmdldChgaHR0cHM6Ly9wb3J0Zm9saW8tNzIxNDctZGVmYXVsdC1ydGRiLmV1cm9wZS13ZXN0MS5maXJlYmFzZWRhdGFiYXNlLmFwcC9tYXRjaGVzLmpzb25gKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoaWQgPSBOdW1iZXIodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2guc2xpY2UoNykpO1xyXG4gICAgICAgICAgICBjb25zdCB7Y3VycmVudHJvdW5kfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgICAgIGxldCBtYXRjaGVzID0gW107XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50cm91bmQgPT09ICcvZmluYWwnKSB7XHJcbiAgICAgICAgICAgICAgICBtYXRjaGVzID0gcmVzLmRhdGEuc2xpY2UoNTApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGVzID0gW107XHJcbiAgICAgICAgICAgIGNvbnN0IHRlYW1zID0gW107XHJcbiAgICAgICAgICAgIG1hdGNoZXMubWFwKCBtID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghZGF0ZXMuaW5jbHVkZXMobS5kYXRlKSkgZGF0ZXMucHVzaChtLmRhdGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0ZWFtcy5pbmNsdWRlcyhtLmhvbWV0ZWFtKSkgdGVhbXMucHVzaChtLmhvbWV0ZWFtKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGxldCBzaW5nbGVtYXRjaCA9IFtdXHJcbiAgICAgICAgICAgIGlmKG1hdGNoaWQgIT0gXCJcIiAmJiBtYXRjaGlkIDw9IG1hdGNoZXMubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIHNpbmdsZW1hdGNoLnB1c2gobWF0Y2hlcy5maW5kKG0gPT4gbWF0Y2hpZCA9PSBtLl9pZCkgKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1hdGNoZXMgLCB0ZWFtcyA6IHRlYW1zLnNvcnQoKSAsIGRhdGVzICwgc2VsZWN0ZWRNYXRjaGVzIDogc2luZ2xlbWF0Y2ggfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1hdGNoZXMgLCB0ZWFtcyA6IHRlYW1zLnNvcnQoKSAsIGRhdGVzICwgc2VsZWN0ZWRNYXRjaGVzIDogbWF0Y2hlcyB9KVxyXG4gICAgICAgICAgICB9ICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlRGF0ZUZpbHRlciA9IChkYXRlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IFsuLi50aGlzLnN0YXRlLm1hdGNoZXNdO1xyXG4gICAgICAgIGlmIChkYXRlID09PSAnQWxsJyl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZE1hdGNoZXMgOiBtYXRjaGVzICwgc2VsZWN0ZWREYXRlIDonJ30pXHJcbiAgICAgICAgfSAgICAgIFxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkTWF0Y2hlcyA9IG1hdGNoZXMuZmlsdGVyKCBtID0+IG0uZGF0ZSA9PT0gZGF0ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkTWF0Y2hlcyAsIHNlbGVjdGVkRGF0ZSA6IGRhdGUgLCBzZWxlY3RlZFRlYW0gOiAnJyAsIHNlbGVjdGVkUm91bmQgOiAnJywgY3VycmVudFBhZ2U6IDF9KTtcclxuICAgICAgICB9ICBcclxuICAgIH07XHJcbiAgICBoYW5kbGVUZWFtRmlsdGVyID0gKHRlYW0pID0+IHtcclxuICAgICAgICBjb25zdCBtYXRjaGVzID0gWy4uLnRoaXMuc3RhdGUubWF0Y2hlc107XHJcbiAgICAgICAgaWYgKHRlYW0gPT09ICdBbGwnKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkTWF0Y2hlcyA6IG1hdGNoZXMgLCBzZWxlY3RlZFRlYW0gOiAnJywgY3VycmVudFBhZ2U6IDF9KVxyXG4gICAgICAgIH0gICAgICBcclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZE1hdGNoZXMgPSBtYXRjaGVzLmZpbHRlciggbSA9PiBtLmhvbWV0ZWFtID09PSB0ZWFtIHx8IG0uYXdheXRlYW0gPT09IHRlYW0pO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZE1hdGNoZXMgLCBzZWxlY3RlZFRlYW0gOiB0ZWFtICwgc2VsZWN0ZWREYXRlIDogJycgLCBzZWxlY3RlZFJvdW5kIDogJyd9KTtcclxuICAgICAgICB9ICBcclxuICAgIH07XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBtYXRjaGVzLCBjdXJyZW50UGFnZSwgc2VsZWN0ZWREYXRlICwgc2VsZWN0ZWRUZWFtICwgZGF0ZXMgLCB0ZWFtcyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hdGNoZXNjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5QaGFzZSBGaW5hbGU8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRpdGxlIGlzLTVcIj5GaW5hbGU8L2g1PlxyXG4gICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24gaXMtaG92ZXJhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpbHRlciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9eydEYXRlICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtkYXRlc30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbT17c2VsZWN0ZWREYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkl0ZW1TZWxlY3Q9e3RoaXMuaGFuZGxlRGF0ZUZpbHRlcn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duIGlzLWhvdmVyYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaWx0ZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXsnRXF1aXBlICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXt0ZWFtc30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbT17c2VsZWN0ZWRUZWFtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkl0ZW1TZWxlY3Q9e3RoaXMuaGFuZGxlVGVhbUZpbHRlcn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hdGNoZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7bWF0Y2hlcy5tYXAobWF0Y2ggPT5cclxuICAgICAgICAgICAgICAgICAgICA8QmV0cyBtYXRjaD17bWF0Y2h9IGtleT17bWF0Y2guX2lkfSBjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgRmluYWw7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgY29ubmVjdGVkIDogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnY29ubmVjdGVkJyksXHJcbiAgICAgICAgbW9iaWxlbWVudSA6IGZhbHNlLFxyXG4gICAgICAgIGlzQWN0aXZlIDogZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBvbkxvZ291dCgpe1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2Nvbm5lY3RlZCcsJ2ZhbHNlJyk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2lkJyk7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy9hcGkvbG9nb3V0Jyk7XHJcbiAgICB9O1xyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3Qge2Nvbm5lY3RlZCAsIGlzQWN0aXZlfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2hvbWVcIj48aW1nIHNyYz1cIi9pbWFnZXMvZXVybzIwMjAtbG9nby5zdmdcIiB3aWR0aD1cIjcwXCI+PC9pbWc+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7dGhpcy5zZXRTdGF0ZSh7aXNBY3RpdmUgOiAhaXNBY3RpdmV9KX19IGNsYXNzTmFtZT17aXNBY3RpdmU/XCJuYXZiYXItYnVyZ2VyIGlzLWFjdGl2ZVwiOlwibmF2YmFyLWJ1cmdlclwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2lzQWN0aXZlP1wibmF2YmFyLW1lbnUgaXMtYWN0aXZlXCI6XCJuYXZiYXItbWVudVwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItc3RhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvcnVsZXNcIiBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiPlLDqGdsZXM8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtIGhhcy1kcm9wZG93biBpcy1ob3ZlcmFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCI+TWF0Y2hlczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL21hdGNoZXNcIiBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiPlBoYXNlIGRlIEdyb3VwZTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvcm91bmQ4XCIgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5IdWl0acOobWVzIGRlIGZpbmFsZTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvcXVhcnRlcmZpbmFsc1wiIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCI+UXVhcnRzIGRlIGZpbmFsZTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvc2VtaWZpbmFsc1wiIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCI+RGVtaS1GaW5hbGVzPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9maW5hbFwiIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCI+RmluYWxlPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9yYW5raW5nXCIgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5DbGFzc2VtZW50PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29ubmVjdGVkPT09J3RydWUnP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2FjY291bnRcIiBjbGFzc05hbWU9XCJidXR0b24gaXMtcHJpbWFyeVwiPk1vbiBjb21wdGU8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMub25Mb2dvdXR9ICBjbGFzc05hbWU9XCJidXR0b24gaXMtd2FybmluZ1wiPkTDqWNvbm5lY3Rpb248L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9sb2dpblwiIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1wcmltYXJ5XCI+Q29ubmVjdGlvbjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3NpZ251cFwiIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1pbmZvXCI+PHN0cm9uZz5DcsOpZXIgdW4gY29tcHRlPC9zdHJvbmc+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IENvbWluZ01hdGNoZXMgZnJvbSAnLi9Db21pbmdNYXRjaGVzJztcclxuaW1wb3J0IHsgVHdpdHRlclRpbWVsaW5lRW1iZWQgfSBmcm9tICdyZWFjdC10d2l0dGVyLWVtYmVkJztcclxuaW1wb3J0IFdlbGNvbWVNb2RhbCBmcm9tICcuL1dlbGNvbWVNb2RhbCc7XHJcblxyXG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0ZSA9IHsgXHJcbiAgICAgICAgbWF0Y2hlcyA6IFtdLFxyXG4gICAgICAgIHNob3dtb2RhbCA6IGZhbHNlXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgdGhpcy5nZXRNYXRjaGVzKCk7XHJcbiAgICAgICAgY29uc3QgY29ubmVjdGVkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnY29ubmVjdGVkJyk7XHJcbiAgICAgICAgaWYgKGNvbm5lY3RlZCA9PT0gJ3RydWUnKSB0aGlzLmdldFVzZXIoKTtcclxuICAgICAgICB0aGlzLnNob3dNb2RhbCgpXHJcbiAgICAgICAgXHJcbiAgICB9O1xyXG4gICAgc2hvd01vZGFsKCl7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dtb2RhbCA6IHRydWV9KVxyXG4gICAgICAgIH0sIDMwMDApO1xyXG4gICAgfVxyXG4gICAgZ2V0VXNlcigpe1xyXG4gICAgICAgIGF4aW9zLmdldCgnYXBpL2dldFVzZXJJZCcpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lkJyxyZXMuZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgZ2V0TWF0Y2hlcygpe1xyXG4gICAgICAgIGF4aW9zLmdldChgaHR0cHM6Ly9wb3J0Zm9saW8tNzIxNDctZGVmYXVsdC1ydGRiLmV1cm9wZS13ZXN0MS5maXJlYmFzZWRhdGFiYXNlLmFwcC9tYXRjaGVzLmpzb25gKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGxldCBtYXRjaGVzID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHJlcy5kYXRhLmxlbmd0aCA7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGFbaV0uaG9tZXNjb3JlID09PSBcIlwiKXtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaGVzLnB1c2gocmVzLmRhdGFbaV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21hdGNoZXMgOiBtYXRjaGVzLnNsaWNlKDAsNCl9KSBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHttYXRjaGVzICwgc2hvd21vZGFsfSA9IHRoaXMuc3RhdGVcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJoZWFkZXJpbWdcIj5cclxuICAgICAgICAgICAgICAgIHtzaG93bW9kYWw/PFdlbGNvbWVNb2RhbC8+Om51bGx9XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvZXVybzIwMjAtbG9nby5zdmdcIi8+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPENvbWluZ01hdGNoZXMgZGF0YT17bWF0Y2hlc30vPlxyXG4gICAgICAgICAgICAgICAgPFR3aXR0ZXJUaW1lbGluZUVtYmVkXHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlVHlwZT1cInByb2ZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNjcmVlbk5hbWU9XCJlcXVpcGVkZWZyYW5jZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17e2hlaWdodDogNTAwICwgd2lkdGggOiAzMDB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGxhbmc9XCJmclwiXHJcbiAgICAgICAgICAgICAgICAvPiAgICAgXHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj4gICAgICAgICAgIFxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4gICAgXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEpvaSBmcm9tICdqb2ktYnJvd3Nlcic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgdG9hc3QsIFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgRm9ybSBmcm9tICcuL2NvbW1vbi9mb3JtJztcclxuaW1wb3J0IFVzZXJMb2FkZXIgZnJvbSAnLi9jb21tb24vdXNlcmxvYWRlcic7XHJcblxyXG5jbGFzcyBTaWdudXAgZXh0ZW5kcyBGb3JtIHtcclxuICAgIHN0YXRlID0geyBcclxuICAgICAgICBkYXRhIDoge1xyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWUgOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQgOiBcIlwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIGVycm9ycyA6IHt9LFxyXG4gICAgICAgIGVycm9yc2NvdW50IDogMCxcclxuICAgICAgICBsb2FkaW5nIDogZmFsc2UsXHJcbiAgICAgICAgYnV0dG9uVGV4dCA6IFwiVmFsaWRlclwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgc2NoZW1hID0ge1xyXG4gICAgICAgIHVzZXJuYW1lIDogSm9pLnN0cmluZygpLnJlcXVpcmVkKCkubWF4KDQwKSxcclxuICAgICAgICBwYXNzd29yZCA6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLm1pbig4KS5tYXgoMjUpXHJcbiAgICB9XHJcbiAgICBkb1N1Ym1pdCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nIDogdHJ1ZSAsIGJ1dHRvblRleHQgOiBcIkNoYXJnZW1lbnQuLi5cIn0pXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAgICAgdXNlcm5hbWUgOiB0aGlzLnN0YXRlLmRhdGEudXNlcm5hbWUsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkIDogdGhpcy5zdGF0ZS5kYXRhLnBhc3N3b3JkLFxyXG4gICAgICAgIH1cclxuICAgICAgICBheGlvcyh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6ICdhcGkvbG9naW4nLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7J1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnfSAgICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6ZmFsc2UgLCBidXR0b25UZXh0IDogXCJWYWxpZGVyXCJ9KVxyXG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKXtcclxuICAgICAgICAgICAgdG9hc3Quc3VjY2VzcyhyZXMuZGF0YS5tZXNzYWdlLCB0aGlzLnRvYXN0b3B0aW9ucyk7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2Nvbm5lY3RlZCcsJ3RydWUnKVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7ZG9jdW1lbnQubG9jYXRpb24uaHJlZj1cIi9ob21lXCIgfSwxNjAwKSBcclxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzpmYWxzZSAsIGJ1dHRvblRleHQgOiBcIkNoYXJnZW1lbnQuLi5cIn0pXHJcbiAgICAgICAgICAgIHRvYXN0LmVycm9yKCdWw6lyaWZpZXogdm9zIGlkZW50aWZpYW50cycsIHRoaXMudG9hc3RvcHRpb25zKTtcclxuICAgICAgICAgICAgbGV0IGVycm9yc2NvdW50ID0gdGhpcy5zdGF0ZS5lcnJvcnNjb3VudDtcclxuICAgICAgICAgICAgZXJyb3JzY291bnQrK1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcnNjb3VudDplcnJvcnNjb3VudCAsIGRhdGEgOiB7IHVzZXJuYW1lIDogXCJcIiAsIHBhc3N3b3JkIDogXCJcIn0gLCBidXR0b25UZXh0IDpcIlZhbGlkZXJcIn0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHsgXHJcbiAgICAgICAgY29uc3Qge2Vycm9yc2NvdW50LCBsb2FkaW5nICwgYnV0dG9uVGV4dCB9ID0gdGhpcy5zdGF0ZVxyXG4gICAgICAgIHJldHVybiAoIFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyLz5cclxuICAgICAgICAgICAgICAgIHtsb2FkaW5nID09PSB0cnVlID8gPFVzZXJMb2FkZXIvPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5Db25uZWN0aW9uPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMj5QYXMgZGUgY29tcHRlPyBDbGlxdWV6IDxMaW5rIHRvPVwic2lnbnVwXCI+aWNpPC9MaW5rPiBwb3VyIGVuIGNyw6llciB1bi48L2gyPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJzaWdudXAtZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlcklucHV0KCd1c2VybmFtZScsJ05vbSBkXFwndXRpbGlzYXRldXIgOicsJ3RleHQnLCdpbnB1dCcpfVxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlcklucHV0KCdwYXNzd29yZCcsJ01vdCBkZSBwYXNzZSA6JywncGFzc3dvcmQnLCdpbnB1dCcpfVxyXG4gICAgICAgICAgICAgICAgICAgIHtlcnJvcnNjb3VudCA+PSAzID8gPGVtPlZvdXMgYXZleiBvdWJsacOpIHZvdHJlIG1vdCBkZSBwYXNzZSA/IENsaXF1ZXogPExpbmsgdG89XCIvbmV3cGFzc3dvcmRcIj5pY2k8L0xpbms+IHBvdXIgbGUgcsOpaW5pdGxhaWlzZXI8L2VtPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBpcy1ncm91cGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckJ1dHRvbihidXR0b25UZXh0LCdidXR0b24gaXMtc3VjY2VzcycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9ob21lXCIgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWluZm9cIj5Bbm51bGVyPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XHJcbmltcG9ydCBCZXRzIGZyb20gJy4vQmV0cyc7XHJcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuL2NvbW1vbi9wYWdpbmF0aW9uJztcclxuaW1wb3J0IHsgcGFnaW5hdGUgfSBmcm9tICcuLi91dGlsaXRpZXMvcGFnaW5hdGUnO1xyXG5cclxuY2xhc3MgTWF0Y2hlcyBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhdGUgPSB7IFxyXG4gICAgICAgIG1hdGNoZXMgOiBbXSxcclxuICAgICAgICBzZWxlY3RlZE1hdGNoZXMgOiBbXSxcclxuICAgICAgICBncm91cHM6IFtdLCBcclxuICAgICAgICBzZWxlY3RlZEdyb3VwIDogJycsXHJcbiAgICAgICAgZGF0ZXMgOiBbXSAsXHJcbiAgICAgICAgc2VsZWN0ZWREYXRlIDogJycsXHJcbiAgICAgICAgdGVhbXMgOiBbXSxcclxuICAgICAgICBzZWxlY3RlZFRlYW0gOiAnJyxcclxuICAgICAgICBjdXJyZW50UGFnZSA6IDEgLFxyXG4gICAgICAgIHBhZ2VTaXplIDogNixcclxuICAgICAgICBkYXRlIDogbmV3IERhdGUoJ2QtTS1ZJylcclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgdGhpcy5nZXRNYXRjaGVzKCk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFBhZ2UgPSBOdW1iZXIodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2guc2xpY2UoMykpXHJcbiAgICAgICAgaWYoY3VycmVudFBhZ2UgPT09IDAgfHwgY3VycmVudFBhZ2UgPT09IE5hTil7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50UGFnZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldE1hdGNoZXMoKSB7ICAgICAgICBcclxuICAgICAgICBheGlvcy5nZXQoYGh0dHBzOi8vcG9ydGZvbGlvLTcyMTQ3LWRlZmF1bHQtcnRkYi5ldXJvcGUtd2VzdDEuZmlyZWJhc2VkYXRhYmFzZS5hcHAvbWF0Y2hlcy5qc29uYCkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBtYXRjaGlkID0gTnVtYmVyKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoLnNsaWNlKDcpKTtcclxuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHJlcy5kYXRhLnNsaWNlKDAsMzYpO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRlcyA9IFtdO1xyXG4gICAgICAgICAgICBjb25zdCB0ZWFtcyA9IFtdO1xyXG4gICAgICAgICAgICBjb25zdCBncm91cHMgPSBbXTtcclxuICAgICAgICAgICAgbWF0Y2hlcy5tYXAoIG0gPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFkYXRlcy5pbmNsdWRlcyhtLmRhdGUpKSBkYXRlcy5wdXNoKG0uZGF0ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRlYW1zLmluY2x1ZGVzKG0uaG9tZXRlYW0pKSB0ZWFtcy5wdXNoKG0uaG9tZXRlYW0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFncm91cHMuaW5jbHVkZXMobS5ncm91cCkpIGdyb3Vwcy5wdXNoKG0uZ3JvdXApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbGV0IHNpbmdsZW1hdGNoID0gW11cclxuICAgICAgICAgICAgaWYobWF0Y2hpZCAhPSBcIlwiICYmIG1hdGNoaWQgPD0gbWF0Y2hlcy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgc2luZ2xlbWF0Y2gucHVzaChtYXRjaGVzLmZpbmQobSA9PiBtYXRjaGlkID09IG0uX2lkKSApXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWF0Y2hlcyAsIHRlYW1zIDogdGVhbXMuc29ydCgpICwgZGF0ZXMgLCBncm91cHMgLCBzZWxlY3RlZE1hdGNoZXMgOiBzaW5nbGVtYXRjaCB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWF0Y2hlcyAsIHRlYW1zIDogdGVhbXMuc29ydCgpICwgZGF0ZXMgLCBncm91cHMgLCBzZWxlY3RlZE1hdGNoZXMgOiBtYXRjaGVzIH0pXHJcbiAgICAgICAgICAgIH0gICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVQYWdlQ2hhbmdlID0gKHBhZ2UpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudFBhZ2UgOiBwYWdlfSk7XHJcbiAgICB9O1xyXG4gICAgaGFuZGxlR3JvdXBGaWx0ZXIgPSAoZ3JvdXApID0+IHtcclxuICAgICAgICBjb25zdCBtYXRjaGVzID0gWy4uLnRoaXMuc3RhdGUubWF0Y2hlc107XHJcbiAgICAgICAgaWYgKGdyb3VwID09PSAnQWxsJyl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZE1hdGNoZXMgOiBtYXRjaGVzICwgc2VsZWN0ZWRHcm91cCA6Jyd9KTtcclxuICAgICAgICB9ICBcclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZE1hdGNoZXMgPSBtYXRjaGVzLmZpbHRlciggbSA9PiBtLmdyb3VwID09PSBncm91cCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkTWF0Y2hlcyAsIHNlbGVjdGVkR3JvdXAgOiBncm91cCAsIHNlbGVjdGVkVGVhbSA6ICcnICwgc2VsZWN0ZWREYXRlIDogJycgLCBjdXJyZW50UGFnZTogMX0pO1xyXG4gICAgICAgIH0gIFxyXG4gICAgfTtcclxuICAgIGhhbmRsZURhdGVGaWx0ZXIgPSAoZGF0ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBbLi4udGhpcy5zdGF0ZS5tYXRjaGVzXTtcclxuICAgICAgICBpZiAoZGF0ZSA9PT0gJ0FsbCcpe1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRNYXRjaGVzIDogbWF0Y2hlcyAsIHNlbGVjdGVkRGF0ZSA6Jyd9KVxyXG4gICAgICAgIH0gICAgICBcclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZE1hdGNoZXMgPSBtYXRjaGVzLmZpbHRlciggbSA9PiBtLmRhdGUgPT09IGRhdGUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZE1hdGNoZXMgLCBzZWxlY3RlZERhdGUgOiBkYXRlICwgc2VsZWN0ZWRUZWFtIDogJycgLCBzZWxlY3RlZEdyb3VwIDogJycsIGN1cnJlbnRQYWdlOiAxfSk7XHJcbiAgICAgICAgfSAgXHJcbiAgICB9O1xyXG4gICAgaGFuZGxlVGVhbUZpbHRlciA9ICh0ZWFtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IFsuLi50aGlzLnN0YXRlLm1hdGNoZXNdO1xyXG4gICAgICAgIGlmICh0ZWFtID09PSAnQWxsJyl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZE1hdGNoZXMgOiBtYXRjaGVzICwgc2VsZWN0ZWRUZWFtIDogJycsIGN1cnJlbnRQYWdlOiAxfSlcclxuICAgICAgICB9ICAgICAgXHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRNYXRjaGVzID0gbWF0Y2hlcy5maWx0ZXIoIG0gPT4gbS5ob21ldGVhbSA9PT0gdGVhbSB8fCBtLmF3YXl0ZWFtID09PSB0ZWFtKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRNYXRjaGVzICwgc2VsZWN0ZWRUZWFtIDogdGVhbSAsIHNlbGVjdGVkRGF0ZSA6ICcnICwgc2VsZWN0ZWRHcm91cCA6ICcnfSk7XHJcbiAgICAgICAgfSAgXHJcbiAgICB9O1xyXG4gICAgZ2V0UGFnZWREYXRhID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgcGFnZVNpemUsIGN1cnJlbnRQYWdlLCBzZWxlY3RlZE1hdGNoZXN9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCBtYXRjaExpc3RQZXJQYWdlID0gcGFnaW5hdGUoc2VsZWN0ZWRNYXRjaGVzLGN1cnJlbnRQYWdlLHBhZ2VTaXplKTtcclxuICAgICAgICByZXR1cm4geyB0b3RhbENvdW50OiBzZWxlY3RlZE1hdGNoZXMubGVuZ3RoLCBkYXRhOiBtYXRjaExpc3RQZXJQYWdlfVxyXG4gICAgfVxyXG4gICAgcHJldmlvdXNQYWdlID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCB7Y3VycmVudFBhZ2V9ID0gdGhpcy5zdGF0ZVxyXG4gICAgICAgIGlmIChjdXJyZW50UGFnZSA+MSApe1xyXG4gICAgICAgICAgICBjdXJyZW50UGFnZS0tXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRQYWdlfSlcclxuICAgIH0gICAgXHJcbiAgICBuZXh0UGFnZSA9ICgpID0+IHtcclxuICAgICAgICBsZXQge2N1cnJlbnRQYWdlLHNlbGVjdGVkTWF0Y2hlcyxwYWdlU2l6ZX0gPSB0aGlzLnN0YXRlXHJcbiAgICAgICAgaWYgKGN1cnJlbnRQYWdlIDwgTWF0aC5jZWlsKHNlbGVjdGVkTWF0Y2hlcy5sZW5ndGggLyBwYWdlU2l6ZSkgKXtcclxuICAgICAgICAgICAgY3VycmVudFBhZ2UrK1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50UGFnZX0pXHJcbiAgICB9ICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgcGFnZVNpemUgLCBjdXJyZW50UGFnZSAsIHNlbGVjdGVkR3JvdXAsIHNlbGVjdGVkRGF0ZSAsIHNlbGVjdGVkVGVhbSAsIGRhdGVzICwgIGdyb3VwcyAsIHRlYW1zIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHsgdG90YWxDb3VudCAsIGRhdGEgfSA9IHRoaXMuZ2V0UGFnZWREYXRhKCk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXRjaGVzY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+UGhhc2UgZGUgR3JvdXBlPC9oMT48aHIvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93biBpcy1ob3ZlcmFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8RmlsdGVyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17J0dyb3VwZSAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17Z3JvdXBzfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtPXtzZWxlY3RlZEdyb3VwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkl0ZW1TZWxlY3Q9e3RoaXMuaGFuZGxlR3JvdXBGaWx0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93biBpcy1ob3ZlcmFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8RmlsdGVyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17J0RhdGUgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2RhdGVzfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtPXtzZWxlY3RlZERhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSXRlbVNlbGVjdD17dGhpcy5oYW5kbGVEYXRlRmlsdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24gaXMtaG92ZXJhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpbHRlciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9eydFcXVpcGUgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e3RlYW1zfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtPXtzZWxlY3RlZFRlYW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSXRlbVNlbGVjdD17dGhpcy5oYW5kbGVUZWFtRmlsdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF0Y2hlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLm1hcChtYXRjaCA9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCZXRzIG1hdGNoPXttYXRjaH0ga2V5PXttYXRjaC5faWR9IGN1cnJlbnRQYWdlPXtjdXJyZW50UGFnZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtc0NvdW50PXt0b3RhbENvdW50fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU9e3BhZ2VTaXplfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUGFnZUNoYW5nZT17dGhpcy5oYW5kbGVQYWdlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1BhZ2U9e3RoaXMucHJldmlvdXNQYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0UGFnZT17dGhpcy5uZXh0UGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgTWF0Y2hlczsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xyXG5pbXBvcnQgQmV0cyBmcm9tICcuL0JldHMnO1xyXG5pbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcclxuXHJcbmNsYXNzIFF1YXJ0ZXJGaW5hbHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHN0YXRlID0geyBcclxuICAgICAgICBjdXJyZW50cm91bmQgOiB0aGlzLnByb3BzLmxvY2F0aW9uLnBhdGhuYW1lLFxyXG4gICAgICAgIG1hdGNoZXMgOiBbXSxcclxuICAgICAgICBzZWxlY3RlZE1hdGNoZXMgOiBbXSxcclxuICAgICAgICBkYXRlcyA6IFtdICxcclxuICAgICAgICBzZWxlY3RlZERhdGUgOiAnJyxcclxuICAgICAgICB0ZWFtcyA6IFtdLFxyXG4gICAgICAgIHNlbGVjdGVkVGVhbSA6ICcnLFxyXG4gICAgICAgIGRhdGUgOiBuZXcgRGF0ZSgnZC1NLVknKVxyXG4gICAgfTtcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgdGhpcy5nZXRNYXRjaGVzKCk7XHJcbiAgICB9XHJcbiAgICBnZXRNYXRjaGVzKCkgeyAgICAgICAgXHJcbiAgICAgICAgYXhpb3MuZ2V0KGBodHRwczovL3BvcnRmb2xpby03MjE0Ny1kZWZhdWx0LXJ0ZGIuZXVyb3BlLXdlc3QxLmZpcmViYXNlZGF0YWJhc2UuYXBwL21hdGNoZXMuanNvbmApLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbWF0Y2hpZCA9IE51bWJlcih0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaC5zbGljZSg3KSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHtjdXJyZW50cm91bmR9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICAgICAgbGV0IG1hdGNoZXMgPSBbXTtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRyb3VuZCA9PT0gJy9xdWFydGVyZmluYWxzJykge1xyXG4gICAgICAgICAgICAgICAgbWF0Y2hlcyA9IHJlcy5kYXRhLnNsaWNlKDQ0LDQ4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBkYXRlcyA9IFtdO1xyXG4gICAgICAgICAgICBjb25zdCB0ZWFtcyA9IFtdO1xyXG4gICAgICAgICAgICBtYXRjaGVzLm1hcCggbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGVzLmluY2x1ZGVzKG0uZGF0ZSkpIGRhdGVzLnB1c2gobS5kYXRlKTtcclxuICAgICAgICAgICAgICAgIGlmICghdGVhbXMuaW5jbHVkZXMobS5ob21ldGVhbSkpIHRlYW1zLnB1c2gobS5ob21ldGVhbSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsZXQgc2luZ2xlbWF0Y2ggPSBbXVxyXG4gICAgICAgICAgICBpZihtYXRjaGlkICE9IFwiXCIgJiYgbWF0Y2hpZCA8PSBtYXRjaGVzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICBzaW5nbGVtYXRjaC5wdXNoKG1hdGNoZXMuZmluZChtID0+IG1hdGNoaWQgPT0gbS5faWQpIClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtYXRjaGVzICwgdGVhbXMgOiB0ZWFtcy5zb3J0KCkgLCBkYXRlcyAsIHNlbGVjdGVkTWF0Y2hlcyA6IHNpbmdsZW1hdGNoIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtYXRjaGVzICwgdGVhbXMgOiB0ZWFtcy5zb3J0KCkgLCBkYXRlcyAsIHNlbGVjdGVkTWF0Y2hlcyA6IG1hdGNoZXMgfSlcclxuICAgICAgICAgICAgfSAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGhhbmRsZURhdGVGaWx0ZXIgPSAoZGF0ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBbLi4udGhpcy5zdGF0ZS5tYXRjaGVzXTtcclxuICAgICAgICBpZiAoZGF0ZSA9PT0gJ0FsbCcpe1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRNYXRjaGVzIDogbWF0Y2hlcyAsIHNlbGVjdGVkRGF0ZSA6Jyd9KVxyXG4gICAgICAgIH0gICAgICBcclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZE1hdGNoZXMgPSBtYXRjaGVzLmZpbHRlciggbSA9PiBtLmRhdGUgPT09IGRhdGUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZE1hdGNoZXMgLCBzZWxlY3RlZERhdGUgOiBkYXRlICwgc2VsZWN0ZWRUZWFtIDogJycgLCBzZWxlY3RlZFJvdW5kIDogJycsIGN1cnJlbnRQYWdlOiAxfSk7XHJcbiAgICAgICAgfSAgXHJcbiAgICB9O1xyXG4gICAgaGFuZGxlVGVhbUZpbHRlciA9ICh0ZWFtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IFsuLi50aGlzLnN0YXRlLm1hdGNoZXNdO1xyXG4gICAgICAgIGlmICh0ZWFtID09PSAnQWxsJyl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZE1hdGNoZXMgOiBtYXRjaGVzICwgc2VsZWN0ZWRUZWFtIDogJycsIGN1cnJlbnRQYWdlOiAxfSlcclxuICAgICAgICB9ICAgICAgXHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRNYXRjaGVzID0gbWF0Y2hlcy5maWx0ZXIoIG0gPT4gbS5ob21ldGVhbSA9PT0gdGVhbSB8fCBtLmF3YXl0ZWFtID09PSB0ZWFtKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRNYXRjaGVzICwgc2VsZWN0ZWRUZWFtIDogdGVhbSAsIHNlbGVjdGVkRGF0ZSA6ICcnICwgc2VsZWN0ZWRSb3VuZCA6ICcnfSk7XHJcbiAgICAgICAgfSAgXHJcbiAgICB9O1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgbWF0Y2hlcywgY3VycmVudFBhZ2UsIHNlbGVjdGVkRGF0ZSAsIHNlbGVjdGVkVGVhbSAsIGRhdGVzICwgdGVhbXMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXRjaGVzY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+UGhhc2UgRmluYWxlPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0aXRsZSBpcy01XCI+UXVhcnRzIGRlIEZpbmFsZTwvaDU+PGhyLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24gaXMtaG92ZXJhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpbHRlciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9eydEYXRlICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtkYXRlc30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbT17c2VsZWN0ZWREYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkl0ZW1TZWxlY3Q9e3RoaXMuaGFuZGxlRGF0ZUZpbHRlcn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duIGlzLWhvdmVyYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaWx0ZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXsnRXF1aXBlICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXt0ZWFtc30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbT17c2VsZWN0ZWRUZWFtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkl0ZW1TZWxlY3Q9e3RoaXMuaGFuZGxlVGVhbUZpbHRlcn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hdGNoZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7bWF0Y2hlcy5tYXAobWF0Y2ggPT5cclxuICAgICAgICAgICAgICAgICAgICA8QmV0cyBtYXRjaD17bWF0Y2h9IGtleT17bWF0Y2guX2lkfSBjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgUXVhcnRlckZpbmFsczsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vY29tbW9uL0xvYWRlcic7XHJcblxyXG5jbGFzcyBSYW5raW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0geyBcclxuICAgICAgICB1c2VycyA6IFtdLFxyXG4gICAgICAgIG1hdGNoZXMgOiBbXSxcclxuICAgICAgICBsb2FkaW5nIDogZmFsc2UsXHJcbiAgICB9ICAgXHJcblxyXG4gICAgcmVuZGVyKCkgeyBcclxuICAgICAgICBjb25zdCB7dXNlcnMgLCBsb2FkaW5nfSA9IHRoaXMuc3RhdGVcclxuICAgICAgICByZXR1cm4gKCBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZSBpcy0yXCI+Q2xhc3NlbWVudDwvaDI+XHJcbiAgICAgICAgICAgICAgICB7Lyoge2xvYWRpbmc/IDxMb2FkZXIvPiA6XHJcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5DbGFzc2VtZW50PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5VdGlsaXNhdGV1cjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UG9pbnRzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Ob21icmUgZGUgcHJvbm9zPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPn0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlIGlzLTFcIj5DbGFzc2VtZW50IMOgIHZlbmlyISE8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpZnJhbWUgc3JjPSdodHRwczovL2dmeWNhdC5jb20vaWZyL0NoZWVyeVZhZ3VlRWxraG91bmQnIGZyYW1lQm9yZGVyPScwJyBzY3JvbGxpbmc9J25vJyB3aWR0aD0nNjQwJyBoZWlnaHQ9JzM2MSc+PC9pZnJhbWU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBSYW5raW5nOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XHJcbmltcG9ydCBCZXRzIGZyb20gJy4vQmV0cyc7XHJcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xyXG5cclxuY2xhc3MgUm91bmRFaWdodCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhdGUgPSB7IFxyXG4gICAgICAgIGN1cnJlbnRyb3VuZCA6IHRoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWUsXHJcbiAgICAgICAgbWF0Y2hlcyA6IFtdLFxyXG4gICAgICAgIHNlbGVjdGVkTWF0Y2hlcyA6IFtdLFxyXG4gICAgICAgIGRhdGVzIDogW10gLFxyXG4gICAgICAgIHNlbGVjdGVkRGF0ZSA6ICcnLFxyXG4gICAgICAgIHRlYW1zIDogW10sXHJcbiAgICAgICAgc2VsZWN0ZWRUZWFtIDogJycsXHJcbiAgICAgICAgZGF0ZSA6IG5ldyBEYXRlKCdkLU0tWScpXHJcbiAgICB9O1xyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICB0aGlzLmdldE1hdGNoZXMoKTtcclxuICAgIH1cclxuICAgIGdldE1hdGNoZXMoKSB7ICAgICAgICBcclxuICAgICAgICBheGlvcy5nZXQoYGh0dHBzOi8vcG9ydGZvbGlvLTcyMTQ3LWRlZmF1bHQtcnRkYi5ldXJvcGUtd2VzdDEuZmlyZWJhc2VkYXRhYmFzZS5hcHAvbWF0Y2hlcy5qc29uYCkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBtYXRjaGlkID0gTnVtYmVyKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoLnNsaWNlKDcpKTtcclxuICAgICAgICAgICAgY29uc3Qge2N1cnJlbnRyb3VuZH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgICAgICBsZXQgbWF0Y2hlcyA9IFtdO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudHJvdW5kID09PSAnL3JvdW5kOCcpIHtcclxuICAgICAgICAgICAgICAgIG1hdGNoZXMgPSByZXMuZGF0YS5zbGljZSgzNiw0NCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgZGF0ZXMgPSBbXTtcclxuICAgICAgICAgICAgY29uc3QgdGVhbXMgPSBbXTtcclxuICAgICAgICAgICAgbWF0Y2hlcy5tYXAoIG0gPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFkYXRlcy5pbmNsdWRlcyhtLmRhdGUpKSBkYXRlcy5wdXNoKG0uZGF0ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRlYW1zLmluY2x1ZGVzKG0uaG9tZXRlYW0pKSB0ZWFtcy5wdXNoKG0uaG9tZXRlYW0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbGV0IHNpbmdsZW1hdGNoID0gW11cclxuICAgICAgICAgICAgaWYobWF0Y2hpZCAhPSBcIlwiICYmIG1hdGNoaWQgPD0gbWF0Y2hlcy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgc2luZ2xlbWF0Y2gucHVzaChtYXRjaGVzLmZpbmQobSA9PiBtYXRjaGlkID09IG0uX2lkKSApXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWF0Y2hlcyAsIHRlYW1zIDogdGVhbXMuc29ydCgpICwgZGF0ZXMgLCBzZWxlY3RlZE1hdGNoZXMgOiBzaW5nbGVtYXRjaCB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWF0Y2hlcyAsIHRlYW1zIDogdGVhbXMuc29ydCgpICwgZGF0ZXMgLCBzZWxlY3RlZE1hdGNoZXMgOiBtYXRjaGVzIH0pXHJcbiAgICAgICAgICAgIH0gICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVEYXRlRmlsdGVyID0gKGRhdGUpID0+IHtcclxuICAgICAgICBjb25zdCBtYXRjaGVzID0gWy4uLnRoaXMuc3RhdGUubWF0Y2hlc107XHJcbiAgICAgICAgaWYgKGRhdGUgPT09ICdBbGwnKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkTWF0Y2hlcyA6IG1hdGNoZXMgLCBzZWxlY3RlZERhdGUgOicnfSlcclxuICAgICAgICB9ICAgICAgXHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRNYXRjaGVzID0gbWF0Y2hlcy5maWx0ZXIoIG0gPT4gbS5kYXRlID09PSBkYXRlKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRNYXRjaGVzICwgc2VsZWN0ZWREYXRlIDogZGF0ZSAsIHNlbGVjdGVkVGVhbSA6ICcnICwgc2VsZWN0ZWRSb3VuZCA6ICcnLCBjdXJyZW50UGFnZTogMX0pO1xyXG4gICAgICAgIH0gIFxyXG4gICAgfTtcclxuICAgIGhhbmRsZVRlYW1GaWx0ZXIgPSAodGVhbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBbLi4udGhpcy5zdGF0ZS5tYXRjaGVzXTtcclxuICAgICAgICBpZiAodGVhbSA9PT0gJ0FsbCcpe1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRNYXRjaGVzIDogbWF0Y2hlcyAsIHNlbGVjdGVkVGVhbSA6ICcnLCBjdXJyZW50UGFnZTogMX0pXHJcbiAgICAgICAgfSAgICAgIFxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkTWF0Y2hlcyA9IG1hdGNoZXMuZmlsdGVyKCBtID0+IG0uaG9tZXRlYW0gPT09IHRlYW0gfHwgbS5hd2F5dGVhbSA9PT0gdGVhbSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkTWF0Y2hlcyAsIHNlbGVjdGVkVGVhbSA6IHRlYW0gLCBzZWxlY3RlZERhdGUgOiAnJyAsIHNlbGVjdGVkUm91bmQgOiAnJ30pO1xyXG4gICAgICAgIH0gIFxyXG4gICAgfTtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGN1cnJlbnRyb3VuZCAsICBtYXRjaGVzLCBjdXJyZW50UGFnZSwgc2VsZWN0ZWREYXRlICwgc2VsZWN0ZWRUZWFtICwgZGF0ZXMgLCB0ZWFtcyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hdGNoZXNjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGUgaXMtMVwiPlBoYXNlIEZpbmFsZTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGl0bGUgaXMtNVwiPkh1aXRpw6htZXMgZGUgRmluYWxlPC9oNT5cclxuICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duIGlzLWhvdmVyYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaWx0ZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXsnRGF0ZSAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17ZGF0ZXN9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW09e3NlbGVjdGVkRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25JdGVtU2VsZWN0PXt0aGlzLmhhbmRsZURhdGVGaWx0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93biBpcy1ob3ZlcmFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8RmlsdGVyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17J0VxdWlwZSAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17dGVhbXN9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW09e3NlbGVjdGVkVGVhbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25JdGVtU2VsZWN0PXt0aGlzLmhhbmRsZVRlYW1GaWx0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXRjaGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge21hdGNoZXMubWFwKG1hdGNoID0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJldHMgbWF0Y2g9e21hdGNofSBrZXk9e21hdGNoLl9pZH0gY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgIFxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFJvdW5kRWlnaHQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFJ1bGVzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWxlc1wiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGUgaXMtMVwiPkxlcyByw6hnbGVzIGR1IGpldTwvaDE+XHJcbiAgICAgICAgICAgIDx1bD4gICAgXHJcbiAgICAgICAgICAgICAgICA8bGk+T24gcGV1dCBwcm9ub3N0aXF1ZXIgbGUgcsOpc3VsdGF0IGRlIHRvdXMgbGVzIG1hdGNoZXMgKHBoYXNlcyBkZSBwb3VsZSBldCBwaGFzZSBmaW5hbGUgZMOocyBxdSdpbHMgc2Vyb250IGNvbm51cykuPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5PbiBwcm9ub3N0aXF1ZSBzdXIgbGUgcsOpc3VsdGF0IGR1IG1hdGNoIGFwcsOocyA5MCBtaW51dGVzIChwcm9sb25nYXRpb25zIGV0IHRpcnMgYXV4IGJ1dHMgbm9uIHByaXMgZW4gY29tcHRlKS48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPkxlcyBwcm9ub3N0aWNzIHBldXZlbnQgw6l0cmUgZMOpcG9zw6lzIG91IG1vZGlmacOpcyBqdXNxdSfDoCAxaCBhdmFudCBsZSBkw6lidXQgZHUgbWF0Y2guPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5VbiBwcm9ub3N0aWMgY29ycmVjdCBzYW5zIHNjb3JlIGV4YWN0IHJhcHBvcnRlIDIgcG9pbnRzIChcclxuICAgICAgICAgICAgICAgICAgICBleGVtcGxlID0gW1LDqXN1bHRhdCBJdGFsaWUgLSBUdXJxdWllID0gMi0xXSAsIFtwcm9ub3N0aWMgMyAtIDBdID0gcGFyaSBnYWduw6kpLjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+VW4gcHJvbm9zdGljIGNvcnJlY3QgYXZlYyBsZSBzY29yZSBleGFjdCByYXBwb3J0ZSAzIHBvaW50cy48L2xpPiBcclxuICAgICAgICAgICAgICAgIDxsaT5MZSBnYWduYW50IGdhZ25lIChldCBjJ2VzdCBiaWVuZykhPC9saT4gICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBSdWxlczsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xyXG5pbXBvcnQgQmV0cyBmcm9tICcuL0JldHMnO1xyXG5pbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcclxuXHJcbmNsYXNzIFNlbWlGaW5hbHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHN0YXRlID0geyBcclxuICAgICAgICBjdXJyZW50cm91bmQgOiB0aGlzLnByb3BzLmxvY2F0aW9uLnBhdGhuYW1lLFxyXG4gICAgICAgIG1hdGNoZXMgOiBbXSxcclxuICAgICAgICBzZWxlY3RlZE1hdGNoZXMgOiBbXSxcclxuICAgICAgICBkYXRlcyA6IFtdICxcclxuICAgICAgICBzZWxlY3RlZERhdGUgOiAnJyxcclxuICAgICAgICB0ZWFtcyA6IFtdLFxyXG4gICAgICAgIHNlbGVjdGVkVGVhbSA6ICcnLFxyXG4gICAgICAgIGRhdGUgOiBuZXcgRGF0ZSgnZC1NLVknKVxyXG4gICAgfTtcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgdGhpcy5nZXRNYXRjaGVzKCk7XHJcbiAgICB9XHJcbiAgICBnZXRNYXRjaGVzKCkgeyAgICAgICAgXHJcbiAgICAgICAgYXhpb3MuZ2V0KGBodHRwczovL3BvcnRmb2xpby03MjE0Ny1kZWZhdWx0LXJ0ZGIuZXVyb3BlLXdlc3QxLmZpcmViYXNlZGF0YWJhc2UuYXBwL21hdGNoZXMuanNvbmApLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbWF0Y2hpZCA9IE51bWJlcih0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaC5zbGljZSg3KSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHtjdXJyZW50cm91bmR9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICAgICAgbGV0IG1hdGNoZXMgPSBbXTtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRyb3VuZCA9PT0gJy9zZW1pZmluYWxzJykge1xyXG4gICAgICAgICAgICAgICAgbWF0Y2hlcyA9IHJlcy5kYXRhLnNsaWNlKDQ4LDUwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBkYXRlcyA9IFtdO1xyXG4gICAgICAgICAgICBjb25zdCB0ZWFtcyA9IFtdO1xyXG4gICAgICAgICAgICBtYXRjaGVzLm1hcCggbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGVzLmluY2x1ZGVzKG0uZGF0ZSkpIGRhdGVzLnB1c2gobS5kYXRlKTtcclxuICAgICAgICAgICAgICAgIGlmICghdGVhbXMuaW5jbHVkZXMobS5ob21ldGVhbSkpIHRlYW1zLnB1c2gobS5ob21ldGVhbSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsZXQgc2luZ2xlbWF0Y2ggPSBbXVxyXG4gICAgICAgICAgICBpZihtYXRjaGlkICE9IFwiXCIgJiYgbWF0Y2hpZCA8PSBtYXRjaGVzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICBzaW5nbGVtYXRjaC5wdXNoKG1hdGNoZXMuZmluZChtID0+IG1hdGNoaWQgPT0gbS5faWQpIClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtYXRjaGVzICwgdGVhbXMgOiB0ZWFtcy5zb3J0KCkgLCBkYXRlcyAsIHNlbGVjdGVkTWF0Y2hlcyA6IHNpbmdsZW1hdGNoIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtYXRjaGVzICwgdGVhbXMgOiB0ZWFtcy5zb3J0KCkgLCBkYXRlcyAsIHNlbGVjdGVkTWF0Y2hlcyA6IG1hdGNoZXMgfSlcclxuICAgICAgICAgICAgfSAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGhhbmRsZURhdGVGaWx0ZXIgPSAoZGF0ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBbLi4udGhpcy5zdGF0ZS5tYXRjaGVzXTtcclxuICAgICAgICBpZiAoZGF0ZSA9PT0gJ0FsbCcpe1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRNYXRjaGVzIDogbWF0Y2hlcyAsIHNlbGVjdGVkRGF0ZSA6Jyd9KVxyXG4gICAgICAgIH0gICAgICBcclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZE1hdGNoZXMgPSBtYXRjaGVzLmZpbHRlciggbSA9PiBtLmRhdGUgPT09IGRhdGUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZE1hdGNoZXMgLCBzZWxlY3RlZERhdGUgOiBkYXRlICwgc2VsZWN0ZWRUZWFtIDogJycgLCBzZWxlY3RlZFJvdW5kIDogJycsIGN1cnJlbnRQYWdlOiAxfSk7XHJcbiAgICAgICAgfSAgXHJcbiAgICB9O1xyXG4gICAgaGFuZGxlVGVhbUZpbHRlciA9ICh0ZWFtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IFsuLi50aGlzLnN0YXRlLm1hdGNoZXNdO1xyXG4gICAgICAgIGlmICh0ZWFtID09PSAnQWxsJyl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZE1hdGNoZXMgOiBtYXRjaGVzICwgc2VsZWN0ZWRUZWFtIDogJycsIGN1cnJlbnRQYWdlOiAxfSlcclxuICAgICAgICB9ICAgICAgXHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRNYXRjaGVzID0gbWF0Y2hlcy5maWx0ZXIoIG0gPT4gbS5ob21ldGVhbSA9PT0gdGVhbSB8fCBtLmF3YXl0ZWFtID09PSB0ZWFtKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRNYXRjaGVzICwgc2VsZWN0ZWRUZWFtIDogdGVhbSAsIHNlbGVjdGVkRGF0ZSA6ICcnICwgc2VsZWN0ZWRSb3VuZCA6ICcnfSk7XHJcbiAgICAgICAgfSAgXHJcbiAgICB9O1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgbWF0Y2hlcywgY3VycmVudFBhZ2UsIHNlbGVjdGVkRGF0ZSAsIHNlbGVjdGVkVGVhbSAsIGRhdGVzICwgdGVhbXMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXRjaGVzY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+UGhhc2UgRmluYWxlPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0aXRsZSBpcy01XCI+RGVtaS1GaW5hbGVzPC9oNT48aHIvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93biBpcy1ob3ZlcmFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8RmlsdGVyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17J0RhdGUgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2RhdGVzfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtPXtzZWxlY3RlZERhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSXRlbVNlbGVjdD17dGhpcy5oYW5kbGVEYXRlRmlsdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24gaXMtaG92ZXJhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpbHRlciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9eydFcXVpcGUgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e3RlYW1zfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtPXtzZWxlY3RlZFRlYW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSXRlbVNlbGVjdD17dGhpcy5oYW5kbGVUZWFtRmlsdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF0Y2hlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHttYXRjaGVzLm1hcChtYXRjaCA9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCZXRzIG1hdGNoPXttYXRjaH0ga2V5PXttYXRjaC5faWR9IGN1cnJlbnRQYWdlPXtjdXJyZW50UGFnZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICBcclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBTZW1pRmluYWxzOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgV2VsY29tZU1vZGFsIGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgbW9kYWx2aWV3IDogZmFsc2UsXHJcbiAgICAgICAgbW9kYWxzaG93IDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21zJykgIT09ICd5J1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHttb2RhbHZpZXc6dHJ1ZX0pXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7bW9kYWx2aWV3LG1vZGFsc2hvd30gPSB0aGlzLnN0YXRlXHJcbiAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHsgbW9kYWxzaG93ID9cclxuICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17bW9kYWx2aWV3Pydtb2RhbCBpcy1hY3RpdmUnOidtb2RhbCd9IFxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsbWVzc2FnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9Pnt0aGlzLnNldFN0YXRlKHttb2RhbHZpZXc6ZmFsc2V9KTtsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXMnLCd5Jyl9fSBcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOKcllxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBCaWVudmVudWUgc3VyIGNlIHNpdGUgZGUgcHJvbm9zdGljcyBzdXIgbGVzIG1hdGNoZXMgbCdVRUZBIEVVUk8gMjAyMDxzdXA+VE08L3N1cD4uPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSWNpIHF1ZSBkdSBmdW4sIHBhcyBkZSBtaXNlcyBkJ2FyZ2VudCwganVzdGUgdW4gcGV0aXQgamV1IGdyYXR1aXQgcG91ciBzZSBkaXZlcnRpciEuPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQXVjdW5lIGRvbm7DqWUgbmUgc2VyYSBjb2xsZWN0w6llIG91IHJldmVuZHVlIDxzcGFuPvCfmIM8L3NwYW4+LlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUHLDqnQgw6Agam91ZXI/XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT57dGhpcy5zZXRTdGF0ZSh7bW9kYWx2aWV3OmZhbHNlfSk7bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ21zJywneScpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXByaW1hcnkgaXMtbGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQydlc3QgcGFydGkgIVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PjpcclxuICAgICAgICAgICAgbnVsbH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFdlbGNvbWVNb2RhbDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTG9hZGVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZHMtcm9sbGVyXCI+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjwvZGl2PlxyXG4gICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBMb2FkZXI7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEpvaSBmcm9tICdqb2ktYnJvd3Nlcic7XHJcbmltcG9ydCBJbnB1dCBmcm9tICcuL2lucHV0JztcclxuXHJcbmNsYXNzIEZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7IFxyXG4gICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgIGVycm9yczoge31cclxuICAgIH1cclxuICAgIHRvYXN0b3B0aW9ucyA9IHtcclxuICAgICAgICBwb3NpdGlvbjogXCJ0b3AtY2VudGVyXCIsXHJcbiAgICAgICAgYXV0b0Nsb3NlOiAxNTAwLFxyXG4gICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgIGNsb3NlQnV0dG9uOiBmYWxzZSxcclxuICAgIH1cclxuICAgIHZhbGlkYXRlID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7YWJvcnRFYXJseSA6IGZhbHNlfTtcclxuICAgICAgICBjb25zdCB7ZXJyb3J9ID0gSm9pLnZhbGlkYXRlKHRoaXMuc3RhdGUuZGF0YSwgdGhpcy5zY2hlbWEgLCBvcHRpb25zKTtcclxuICAgICAgICBpZiAoIWVycm9yKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3QgZXJyb3JzID0ge307XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBlcnJvci5kZXRhaWxzKVxyXG4gICAgICAgICAgICBlcnJvcnNbaXRlbS5wYXRoWzBdXSA9IGl0ZW0ubWVzc2FnZTsgXHJcbiAgICAgICAgcmV0dXJuIGVycm9ycztcclxuICAgIH07XHJcbiAgICB2YWxpZGF0ZVByb3BlcnR5ID0gKHtuYW1lLHZhbHVlfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9iaiA9IHsgW25hbWVdIDogdmFsdWV9O1xyXG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHsgW25hbWVdIDogdGhpcy5zY2hlbWFbbmFtZV19XHJcbiAgICAgICAgbGV0IGVycm9yTWVzc2FnZTtcclxuICAgICAgICBpZiAoSm9pLnZhbGlkYXRlKG9iaixzY2hlbWEpLmVycm9yICE9PSBudWxsKXtcclxuICAgICAgICAgICAgaWYgKFtuYW1lXVswXSA9PT0gJ3VzZXJuYW1lJyl7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IEpvaS52YWxpZGF0ZShvYmosc2NoZW1hKS5lcnJvci5kZXRhaWxzWzBdLnR5cGU7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYW55LmVtcHR5JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gJ0xlIG5vbSBkXFwndXRpbGlzYXRldXIgZG9pdCDDqnRyZSByZW5zZWlnbsOpJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnc3RyaW5nLm1heCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9ICdMZSBub20gZFxcJ3V0aWxpc2F0ZXVyIG5lIHBldXQgZXhjw6lkZXIgNDAgY2FyYWN0w6hyZXMnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChbbmFtZV1bMF0gPT09ICdwYXNzd29yZCcpeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBKb2kudmFsaWRhdGUob2JqLHNjaGVtYSkuZXJyb3IuZGV0YWlsc1swXS50eXBlO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2FueS5lbXB0eSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9ICdMZSBtb3QgZGUgcGFzc2UgZG9pdCDDqnRyZSByZW5zZWlnbsOpJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnc3RyaW5nLm1pbic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9ICdMZSBtb3QgZGUgcGFzc2UgZG9pdCBjb250ZW5pciBhdSBtb2lucyA4IGNhcmFjdMOocmVzJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7ICBcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdzdHJpbmcubWF4JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gJ0xlIG1vdCBkZSBwYXNzZSBuZSBkb2l0IHBhcyBkw6lwYXNzZXIgMjUgY2FyYWN0w6hyZXMnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChbbmFtZV1bMF0gPT09ICdlbWFpbCcpe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBKb2kudmFsaWRhdGUob2JqLHNjaGVtYSkuZXJyb3IuZGV0YWlsc1swXS50eXBlO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChlcnJvcil7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnc3RyaW5nLmVtYWlsJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gJ1ZldWlsbGV6IHJlbnNlaWduZXIgdW4gZS1tYWlsIHZhbGlkZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2FueS5lbXB0eSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9ICdMXFwnYWRyZXNzZSBFbWFpbCBkb2l0IMOqdHJlIHJlbnNlaWduw6llJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChbbmFtZV1bMF0gPT09ICdwYXNzJyl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IEpvaS52YWxpZGF0ZShvYmosc2NoZW1hKS5lcnJvci5kZXRhaWxzWzBdLnR5cGU7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYW55LmVtcHR5JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gJ0xlIGNvZGUgZFxcJ2FjY8OocyBkb2l0IMOqdHJlIHJlbnNlaWduw6knO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZXJyb3JNZXNzYWdlXHJcbiAgICB9O1xyXG4gICAgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IFxyXG4gICAgICAgIGNvbnN0IGVycm9ycyA9IHRoaXMudmFsaWRhdGUoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JzIDogZXJyb3JzIHx8IHt9fSk7XHJcbiAgICAgICAgaWYgKGVycm9ycykgcmV0dXJuOyAgXHJcbiAgICAgICAgdGhpcy5kb1N1Ym1pdCgpOyAgICAgXHJcbiAgICB9O1xyXG4gICAgaGFuZGxlQ2hhbmdlID0gKHtjdXJyZW50VGFyZ2V0IDogaW5wdXR9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZXJyb3JzID0gey4uLnRoaXMuc3RhdGUuZXJyb3JzfVxyXG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IHRoaXMudmFsaWRhdGVQcm9wZXJ0eShpbnB1dClcclxuICAgICAgICBpZiAoZXJyb3JNZXNzYWdlKSBlcnJvcnNbaW5wdXQubmFtZV0gPSBlcnJvck1lc3NhZ2U7XHJcbiAgICAgICAgZWxzZSBkZWxldGUgZXJyb3JzW2lucHV0Lm5hbWVdO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0gey4uLnRoaXMuc3RhdGUuZGF0YX07XHJcbiAgICAgICAgZGF0YVtpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGEgLCBlcnJvcnMgfSlcclxuICAgIH1cclxuICAgIHJlbmRlcklucHV0KG5hbWUsbGFiZWwsdHlwZSxjbGFzc05hbWUpe1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSwgZXJyb3JzIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICByZXR1cm4gPElucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17bmFtZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFbbmFtZV19IFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtsYWJlbH0gXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnNbbmFtZV19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgfVxyXG4gICAgcmVuZGVyQnV0dG9uKGxhYmVsLGNsYXNzTmFtZSl7XHJcbiAgICAgICAgcmV0dXJuIDxidXR0b24gZGlzYWJsZWQ9e3RoaXMudmFsaWRhdGUoKX0gY2xhc3NOYW1lPXtjbGFzc05hbWV9PntsYWJlbH08L2J1dHRvbj5cclxuICAgIH0gICAgXHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBGb3JtOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBJbnB1dCA9ICh7bmFtZSwgbGFiZWwsIHZhbHVlLCBjbGFzc05hbWUsIHR5cGUsIGVycm9yLCBvbkNoYW5nZX0pID0+IHtcclxuICAgIFxyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIiBodG1sRm9yPXtuYW1lfT57bGFiZWx9PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfSBcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtlcnJvcj8gJ2lzZXJyb3IgJytjbGFzc05hbWUgOmNsYXNzTmFtZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT17dHlwZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17bmFtZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9e25hbWV9Lz5cclxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwiZXJyb3Jtc2dcIj57ZXJyb3IucmVwbGFjZSgvXCIvZywnJyl9LjwvcD59XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuY29uc3QgUGFnaW5hdGlvbiA9ICh7aXRlbXNDb3VudCAsIHBhZ2VTaXplICwgY3VycmVudFBhZ2UsIG9uUGFnZUNoYW5nZSAsIHByZXZpb3VzUGFnZSAsIG5leHRQYWdlfSkgPT4ge1xyXG4gICAgY29uc3QgcGFnZXNDb3VudCA9IE1hdGguY2VpbChpdGVtc0NvdW50IC8gcGFnZVNpemUpO1xyXG4gICAgaWYocGFnZXNDb3VudD09PTEpIHJldHVybiBudWxsO1xyXG4gICAgY29uc3QgcGFnZXMgPSBfLnJhbmdlKDEsIHBhZ2VzQ291bnQrMSk7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG5hdj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBhZ2luYXRpb24tbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBhZ2luYXRpb24tbGlua1wiIG9uQ2xpY2s9e3ByZXZpb3VzUGFnZX0+JiM2MDs8L2xpPlxyXG4gICAgICAgICAgICAgICAgeyBwYWdlcy5tYXAocGFnZSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17cGFnZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IHBhZ2UgPT09IGN1cnJlbnRQYWdlPyBcInBhZ2luYXRpb24tbGluayBpcy1jdXJyZW50XCIgOiBcInBhZ2luYXRpb24tbGlua1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblBhZ2VDaGFuZ2UocGFnZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge3BhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkpfSAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBhZ2luYXRpb24tbGlua1wiIG9uQ2xpY2s9e25leHRQYWdlfT4mIzYyOzwvbGk+ICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRpb247IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFVzZXJMb2FkZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKCBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxkcy1yaXBwbGVcIj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PC9kaXY+ICAgICBcclxuICAgICAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgVXNlckxvYWRlcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRm9ybSBmcm9tICcuLy4uL2NvbW1vbi9mb3JtJztcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgLCB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IEpvaSBmcm9tICdqb2ktYnJvd3Nlcic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jbGFzcyBQYXNzVXBkYXRlIGV4dGVuZHMgRm9ybSB7XHJcbiAgICBzdGF0ZSA9IHsgXHJcbiAgICAgICAgZGF0YSA6IHtcclxuICAgICAgICAgICAgcGFzc3dvcmQgOiBcIlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcnMgOiB7fSwgXHJcbiAgICAgICAgYnV0dG9uVGV4dCA6IFwiVmFsaWRlclwiXHJcbiAgICB9XHJcbiAgICBzY2hlbWEgPSB7XHJcbiAgICAgICAgcGFzc3dvcmQgOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKS5taW4oOCkubWF4KDI1KSxcclxuICAgIH1cclxuICAgIGRvU3VibWl0KCl7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5kYXRhLnBhc3N3b3JkKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtwYXNzd29yZCA6IHRoaXMuc3RhdGUuZGF0YS5wYXNzd29yZCAsIGxvYWRpbmcgOiB0cnVlICwgYnV0dG9uVGV4dCA6ICdQYXRpZW50ZXouLi4uJ30pO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7IHVzZXIgOiB0aGlzLnByb3BzLmFsaWFzLCBwYXNzd29yZCA6IHRoaXMuc3RhdGUuZGF0YS5wYXNzd29yZH1cclxuICAgICAgICBheGlvcyh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6ICdhcGkvdXNlci91cGRhdGVQYXNzd29yZCcsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCd9XHJcbiAgICAgICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoJ01vdCBkZSBwYXNzZSBtb2RpZmnDqSBhdmVjIHN1Y2PDqHMgIScsIHRoaXMudG9hc3RvcHRpb25zKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCggKCkgPT4ge2RvY3VtZW50LmxvY2F0aW9uLmhyZWY9XCIvbG9naW5cIiB9LDIxMDApXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHsgXHJcbiAgICAgICAgY29uc3Qge2J1dHRvblRleHR9ID0gdGhpcy5zdGF0ZVxyXG4gICAgICAgIHJldHVybiAoIFxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cIm5ld3Bhc3MtZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVySW5wdXQoJ3Bhc3N3b3JkJywnTm91dmVhdSBtb3QgZGUgcGFzc2UgIDonLCd0ZXh0JywnaW5wdXQnKX1cclxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckJ1dHRvbihidXR0b25UZXh0LCdidXR0b24gaXMtc3VjY2VzcycpfVxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBQYXNzVXBkYXRlIDsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRm9ybSBmcm9tICcuLi9jb21tb24vZm9ybSc7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyICwgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCBKb2kgZnJvbSAnam9pLWJyb3dzZXInO1xyXG5pbXBvcnQgUGFzc1VwZGF0ZSBmcm9tICcuL3Bhc3NVcGRhdGUnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY2xhc3MgVXNlckNvbmZpcm0gZXh0ZW5kcyBGb3JtIHtcclxuICAgIHN0YXRlID0geyBcclxuICAgICAgICBkYXRhIDoge1xyXG4gICAgICAgICAgICB1c2VybmFtZSA6IFwiXCJcclxuICAgICAgICAgICAgfSxcclxuICAgIGVycm9ycyA6IHt9LCBcclxuICAgIGFsaWFzIDogXCJcIixcclxuICAgIGJ1dHRvblRleHQgOiBcIlZhbGlkZXJcIixcclxuICAgIHVzZXJxdWVyeSA6IHRydWVcclxuICAgIH1cclxuICAgIHNjaGVtYSA9IHtcclxuICAgICAgICB1c2VybmFtZSA6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLm1heCg0MCksXHJcbiAgICB9XHJcbiAgICBkb1N1Ym1pdCgpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FsaWFzIDogdGhpcy5zdGF0ZS5kYXRhLnVzZXJuYW1lICwgYnV0dG9uVGV4dCA6ICdQYXRpZW50ZXouLi4nfSlcclxuICAgICAgICBjb25zdCBkYXRhID0geyB1c2VybmFtZSA6IHRoaXMuc3RhdGUuZGF0YS51c2VybmFtZX0gIFxyXG4gICAgICAgIGF4aW9zKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogJ2FwaS9nZXRVc2VyTmFtZScsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCd9XHJcbiAgICAgICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHJlcy5kYXRhLnVzZXIgPT09IHRoaXMuc3RhdGUuZGF0YS51c2VybmFtZSApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dXNlcnF1ZXJ5IDogZmFsc2V9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRhOnt1c2VybmFtZSA6ICcnfSxlcnJvcnMgOiB7dXNlcm5hbWUgOiAnJ30gLCBidXR0b25UZXh0IDogXCJWYWxpZGVyXCJ9KTtcclxuICAgICAgICAgICAgICAgIHRvYXN0LmVycm9yKCdMZSBub20gZFxcJ3V0aWxpc2F0ZXVyIG5cXCdleGlzdGUgcGFzJywgdGhpcy50b2FzdG9wdGlvbnMpOyAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkgeyBcclxuICAgICAgICBjb25zdCB7IHVzZXJxdWVyeSAsIGFsaWFzICwgYnV0dG9uVGV4dCB9ID0gdGhpcy5zdGF0ZVxyXG4gICAgICAgIHJldHVybiAoIFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyLz5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlJlbm91dmVsbGVtZW50IGRlIG1vdCBkZSBwYXNzZTwvaDE+XHJcbiAgICAgICAgICAgICAgICB7dXNlcnF1ZXJ5Pzxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwibmV3cGFzcy1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVySW5wdXQoJ3VzZXJuYW1lJywnVm90cmUgbm9tIGRcXCd1dGlsaXNhdGV1ciAgOicsJ3RleHQnLCdpbnB1dCcpfVxyXG4gICAgICAgICAgICAgICAgICAgIHt1c2VycXVlcnk/IHRoaXMucmVuZGVyQnV0dG9uKGJ1dHRvblRleHQsJ2J1dHRvbiBpcy1zdWNjZXNzJykgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPjpcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTZcIj5Wb3RyZSBOb20gZCd1dGlsaXNhdGV1ciA6IDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e3RoaXMuc3RhdGUuZGF0YS51c2VybmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICB7dXNlcnF1ZXJ5PyBudWxsIDogPFBhc3NVcGRhdGUgYWxpYXM9e2FsaWFzfS8+fVxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgVXNlckNvbmZpcm07IiwiaW1wb3J0IFJlYWN0ICwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY2xhc3MgU2V0U2NvcmUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7IFxyXG4gICAgICAgIHVzZXJzIDogW10sXHJcbiAgICAgICAgbWF0Y2hlcyA6IFtdLFxyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICB0aGlzLmdldERhdGEoKTtcclxuICAgICAgICB0aGlzLmdldE1hdGNoZXMoKVxyXG4gICAgfVxyXG4gICAgZ2V0RGF0YSgpe1xyXG4gICAgICAgIGF4aW9zLmdldCgnL2FwaS91c2VyL2dldFVzZXJzYW5kQmV0cycpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdXNlcnMgPSByZXMuZGF0YS51c2VycztcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dXNlcnN9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgZ2V0TWF0Y2hlcygpeyAgICAgICAgXHJcbiAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgLmdldChgaHR0cHM6Ly9wb3J0Zm9saW8tNzIxNDctZGVmYXVsdC1ydGRiLmV1cm9wZS13ZXN0MS5maXJlYmFzZWRhdGFiYXNlLmFwcC9tYXRjaGVzLmpzb25gKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7dGhpcy5zZXRTdGF0ZSh7bWF0Y2hlcyA6IHJlcy5kYXRhfSl9KVxyXG4gICAgICAgIH1cclxuICAgIGdldFBvaW50cyh1c2VyaWQpe1xyXG4gICAgICAgIGNvbnN0IHVzZXJzID0gWy4uLnRoaXMuc3RhdGUudXNlcnNdO1xyXG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBbLi4udGhpcy5zdGF0ZS5tYXRjaGVzXTtcclxuICAgICAgICBjb25zdCB1c2VyID0gdXNlcnMuZmluZCh1ID0+IHUudXNlcl9pZCA9PT0gdXNlcmlkKTtcclxuICAgICAgICBjb25zdCBiZXRzID0gdXNlci5iZXRzO1xyXG4gICAgICAgIGxldCB1c2VycG9pbnRzID0gMDtcclxuICAgICAgICBmb3IgKCBsZXQgaSA9IDAgOyBpIDwgbWF0Y2hlcy5sZW5ndGggOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IgKCBsZXQgaiA9IDAgOyBqIDwgYmV0cy5sZW5ndGggOyBqKyspeyAgICBcclxuICAgICAgICAgICAgICAgIGlmKChtYXRjaGVzW2ldLl9pZCA9PSBiZXRzW2pdLm1hdGNoX2lkICYmIChtYXRjaGVzW2ldLmhvbWVzY29yZSAmJiBtYXRjaGVzW2ldLmF3YXlzY29yZSAhPT0gXCJcIikpKXtcclxuICAgICAgICAgICAgICAgICAgICBpZihiZXRzW2pdLmhvbWVzY29yZSA+IGJldHNbal0uYXdheXNjb3JlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYobWF0Y2hlc1tpXS5ob21lc2NvcmUgPiBtYXRjaGVzW2ldLmF3YXlzY29yZSAmJiBtYXRjaGVzW2ldLmhvbWVzY29yZSA9PSBiZXRzW2pdLmhvbWVzY29yZSAmJiBtYXRjaGVzW2ldLmF3YXlzY29yZSA9PSBiZXRzW2pdLmF3YXlzY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VycG9pbnRzICs9IDNcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYobWF0Y2hlc1tpXS5ob21lc2NvcmUgPiBtYXRjaGVzW2ldLmF3YXlzY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VycG9pbnRzICs9IDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZihiZXRzW2pdLmhvbWVzY29yZSA8IGJldHNbal0uYXdheXNjb3JlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYobWF0Y2hlc1tpXS5ob21lc2NvcmUgPCBtYXRjaGVzW2ldLmF3YXlzY29yZSAmJiBtYXRjaGVzW2ldLmhvbWVzY29yZSA9PSBiZXRzW2pdLmhvbWVzY29yZSAmJiBtYXRjaGVzW2ldLmF3YXlzY29yZSA9PSBiZXRzW2pdLmF3YXlzY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VycG9pbnRzICs9IDNcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihtYXRjaGVzW2ldLmhvbWVzY29yZSA8IG1hdGNoZXNbaV0uYXdheXNjb3JlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJwb2ludHMgKz0gMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGJldHNbal0uaG9tZXNjb3JlID09PSBiZXRzW2pdLmF3YXlzY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1hdGNoZXNbaV0uaG9tZXNjb3JlID09PSBtYXRjaGVzW2ldLmF3YXlzY29yZSAmJiBtYXRjaGVzW2ldLmhvbWVzY29yZSA9PSBiZXRzW2pdLmhvbWVzY29yZSAmJiBtYXRjaGVzW2ldLmF3YXlzY29yZSA9PSBiZXRzW2pdLmF3YXlzY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VycG9pbnRzICs9IDNcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKG1hdGNoZXNbaV0uaG9tZXNjb3JlID09PSBtYXRjaGVzW2ldLmF3YXlzY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VycG9pbnRzICs9IDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHVzZXJwb2ludHNcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHt1c2Vyc30gPSB0aGlzLnN0YXRlXHJcbiAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7dXNlcnMubWFwKHVzZXIgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e3VzZXIudXNlcl9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e3VzZXIudXNlcm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPnt0aGlzLmdldFBvaW50cyh1c2VyLnVzZXJfaWQpfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1wcmltYXJ5XCI+RW52b3llcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFNldFNjb3JlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBKb2kgZnJvbSAnam9pLWJyb3dzZXInO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHRvYXN0LCBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IEZvcm0gZnJvbSAnLi9jb21tb24vZm9ybSc7XHJcbmltcG9ydCBVc2VyTG9hZGVyIGZyb20gJy4vY29tbW9uL3VzZXJsb2FkZXInO1xyXG5cclxuY2xhc3MgU2lnbnVwIGV4dGVuZHMgRm9ybSB7XHJcbiAgICBzdGF0ZSA9IHsgXHJcbiAgICAgICAgZGF0YSA6IHtcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lIDogXCJcIixcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkIDogXCJcIixcclxuICAgICAgICAgICAgICAgIGVtYWlsIDogXCJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIGVycm9ycyA6IHt9LFxyXG4gICAgICAgIGxvYWRpbmcgOiBmYWxzZSxcclxuICAgICAgICBidXR0b25UZXh0IDogXCJWYWxpZGVyXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgc2NoZW1hID0ge1xyXG4gICAgICAgIHVzZXJuYW1lIDogSm9pLnN0cmluZygpLnJlcXVpcmVkKCkubWF4KDQwKSxcclxuICAgICAgICBwYXNzd29yZCA6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLm1pbig4KS5tYXgoMjUpLFxyXG4gICAgICAgIGVtYWlsIDogSm9pLnN0cmluZygpLnJlcXVpcmVkKCkuZW1haWwoKVxyXG4gICAgfVxyXG4gICAgZG9TdWJtaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzp0cnVlICwgYnV0dG9uVGV4dDogXCJDaGFyZ2VtZW50Li4uXCJ9KVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lIDogdGhpcy5zdGF0ZS5kYXRhLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICBwYXNzd29yZCA6IHRoaXMuc3RhdGUuZGF0YS5wYXNzd29yZCxcclxuICAgICAgICAgICAgZW1haWwgOiB0aGlzLnN0YXRlLmRhdGEuZW1haWxcclxuICAgICAgICB9XHJcbiAgICAgICAgYXhpb3Moe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiAnYXBpL3VzZXIvbmV3JyxcclxuICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgaGVhZGVyczogeydYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J30gICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOmZhbHNlICwgYnV0dG9uVGV4dCA6IFwiVmFsaWRlclwifSlcclxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MocmVzLmRhdGEubWVzc2FnZSwgdGhpcy50b2FzdG9wdGlvbnMpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9sb2dpbicpfSwxNjAwKX1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6ZmFsc2UsIGJ1dHRvblRleHQgOiBcIlZhbGlkZXJcIn0pXHJcbiAgICAgICAgICAgIHRvYXN0LmVycm9yKCdMZSBub20gZFxcJ3V0aWxpc2F0ZXVyIGVzdCBkw6lqYSB1dGlsaXPDqScsIHRoaXMudG9hc3RvcHRpb25zKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkgeyBcclxuICAgICAgICBjb25zdCB7IGxvYWRpbmcgfSA9IHRoaXMuc3RhdGVcclxuICAgICAgICByZXR1cm4gKCBcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lci8+XHJcbiAgICAgICAgICAgICAgICB7bG9hZGluZyA9PT0gdHJ1ZSA/IDxVc2VyTG9hZGVyLz4gOiBudWxsIH1cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPkNyw6llciB1biBub3V2ZWF1IGNvbXB0ZTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDI+Vm91cyBhdmV6IGTDqWphIHVuIGNvbXB0ZT8gQ2xpcXVleiA8TGluayB0bz1cImxvZ2luXCI+aWNpPC9MaW5rPiBwb3VyIHZvdXMgY29ubmVjdGVyPC9oMj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwic2lnbnVwLWZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJJbnB1dCgndXNlcm5hbWUnLCdDaG9pc2lyIHVuIE5vbSBkXFwndXRpbGlzYXRldXIgIDonLCd0ZXh0JywnaW5wdXQnKX1cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJJbnB1dCgnZW1haWwnLCdSZW5zZWlnbmVyIHVuZSBhZHJlc3NlIEVtYWlsICA6JywndGV4dCcsJ2lucHV0Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVySW5wdXQoJ3Bhc3N3b3JkJywnQ3LDqWVyIHVuIE1vdCBkZSBwYXNzZSAgOicsJ3Bhc3N3b3JkJywnaW5wdXQnKX1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIGlzLWdyb3VwZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQnV0dG9uKCdWYWxpZGVyJywnYnV0dG9uIGlzLXN1Y2Nlc3MnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvaG9tZVwiIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1pbmZvXCI+QW5udWxlcjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ251cDsiLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhZ2luYXRlKGl0ZW1zLHBhZ2VOdW1iZXIscGFnZVNpemUpe1xyXG4gICAgY29uc3Qgc3RhcnRJbmRleCA9IChwYWdlTnVtYmVyIC0gMSkgKiBwYWdlU2l6ZTtcclxuICAgIHJldHVybiBfKGl0ZW1zKS5zbGljZShzdGFydEluZGV4KS50YWtlKHBhZ2VTaXplKS52YWx1ZSgpO1xyXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==