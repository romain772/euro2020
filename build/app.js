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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Header */ "./assets/components/Header.js");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Home */ "./assets/components/Home.js");
/* harmony import */ var _components_Matches__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Matches */ "./assets/components/Matches.js");
/* harmony import */ var _components_RoundMatches__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/RoundMatches */ "./assets/components/RoundMatches.js");
/* harmony import */ var _components_signup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/signup */ "./assets/components/signup.js");
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Login */ "./assets/components/Login.js");
/* harmony import */ var _components_Account__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Account */ "./assets/components/Account.js");
/* harmony import */ var _components_Ranking__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Ranking */ "./assets/components/Ranking.js");
/* harmony import */ var _components_passupdate_userConfirm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/passupdate/userConfirm */ "./assets/components/passupdate/userConfirm.js");
/* harmony import */ var _components_Rules__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/Rules */ "./assets/components/Rules.js");
/* harmony import */ var _components_private_setscoreprivate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/private/setscoreprivate */ "./assets/components/private/setscoreprivate.js");















react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_3__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
  path: "/home",
  component: _components_Home__WEBPACK_IMPORTED_MODULE_4__.default
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
  path: "/matches",
  component: _components_Matches__WEBPACK_IMPORTED_MODULE_5__.default
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
  path: "/roundmatches",
  component: _components_RoundMatches__WEBPACK_IMPORTED_MODULE_6__.default
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
  path: "/signup",
  component: _components_signup__WEBPACK_IMPORTED_MODULE_7__.default
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
  path: "/login",
  component: _components_Login__WEBPACK_IMPORTED_MODULE_8__.default
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
  path: "/newpassword/",
  component: _components_passupdate_userConfirm__WEBPACK_IMPORTED_MODULE_11__.default
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
  path: "/ranking",
  component: _components_Ranking__WEBPACK_IMPORTED_MODULE_10__.default
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
  path: "/rules",
  component: _components_Rules__WEBPACK_IMPORTED_MODULE_12__.default
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
  path: "/admin",
  component: _components_private_setscoreprivate__WEBPACK_IMPORTED_MODULE_13__.default
}), sessionStorage.getItem('connected') === 'true' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
  path: "/account",
  component: _components_Account__WEBPACK_IMPORTED_MODULE_9__.default
}) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Redirect, {
  to: "/home"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
  path: "/",
  exact: true
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Redirect, {
  to: "/home"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Redirect, {
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
              document.location.href = "/matches?p=".concat(_this.props.currentPage);
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32__.createElement("img", {
        className: "hometeamimg",
        src: "/images/".concat(match.hometeam, ".svg")
      }), match.hometeam, " ", match.homescore, " - ", match.awayscore, " ", match.awayteam, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32__.createElement("img", {
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
        "data-tip": "Ce pronostic ne peut plus \xEAtre modifi\xE9 !"
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
        to: "/roundmatches",
        className: "navbar-item"
      }, "Phase finale"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {
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

/***/ "./assets/components/RoundMatches.js":
/*!*******************************************!*\
  !*** ./assets/components/RoundMatches.js ***!
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
      rounds: [],
      selectedRound: '',
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

    _defineProperty(_assertThisInitialized(_this), "handleRoundFilter", function (round) {
      var matches = _toConsumableArray(_this.state.matches);

      if (round === 'All') {
        _this.setState({
          selectedMatches: matches,
          selectedRound: ''
        });
      } else {
        var selectedMatches = matches.filter(function (m) {
          return m.round === round;
        });

        _this.setState({
          selectedMatches: selectedMatches,
          selectedRound: round,
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
        var matches = res.data.slice(36);
        var dates = [];
        var teams = [];
        var rounds = [];
        matches.map(function (m) {
          if (!dates.includes(m.date)) dates.push(m.date);
          if (!teams.includes(m.hometeam)) teams.push(m.hometeam);
          if (!rounds.includes(m.round)) rounds.push(m.round);
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
            rounds: rounds,
            selectedMatches: singlematch
          });
        } else {
          _this2.setState({
            matches: matches,
            teams: teams.sort(),
            dates: dates,
            rounds: rounds,
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
          selectedRound = _this$state3.selectedRound,
          selectedDate = _this$state3.selectedDate,
          selectedTeam = _this$state3.selectedTeam,
          dates = _this$state3.dates,
          rounds = _this$state3.rounds,
          teams = _this$state3.teams;

      var _this$getPagedData = this.getPagedData(),
          totalCount = _this$getPagedData.totalCount,
          data = _this$getPagedData.data;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("div", {
        className: "matchescontent"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("h1", {
        className: "title"
      }, "Phase Finale"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("div", {
        className: "dropdown is-hoverable"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement(_Filter__WEBPACK_IMPORTED_MODULE_31__.default, {
        label: '',
        items: rounds,
        selectedItem: selectedRound,
        onItemSelect: this.handleRoundFilter
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0FjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQmV0cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Db21pbmdNYXRjaGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Mb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9NYXRjaGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1JhbmtpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvUm91bmRNYXRjaGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1J1bGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1dlbGNvbWVNb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9jb21tb24vTG9hZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2NvbW1vbi9mb3JtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2NvbW1vbi9pbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9jb21tb24vcGFnaW5hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9jb21tb24vdXNlcmxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9wYXNzdXBkYXRlL3Bhc3NVcGRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvcGFzc3VwZGF0ZS91c2VyQ29uZmlybS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9wcml2YXRlL3NldHNjb3JlcHJpdmF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9zaWdudXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3V0aWxpdGllcy9wYWdpbmF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3MiXSwibmFtZXMiOlsiUmVhY3RET00iLCJIb21lIiwiTWF0Y2hlcyIsIlJvdW5kTWF0Y2hlcyIsIlNpZ251cCIsIkxvZ2luIiwiVXNlckNvbmZpcm0iLCJSYW5raW5nIiwiUnVsZXMiLCJTZXRTY29yZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsIkFjY291bnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibG9hZGluZyIsImlkIiwibG9jYWxTdG9yYWdlIiwidXNlcm5hbWUiLCJiZXRzIiwibWF0Y2hlcyIsImN1cnJlbnRQYWdlIiwicGFnZVNpemUiLCJzdGF0ZSIsImJldHNMaXN0UGVyUGFnZSIsInBhZ2luYXRlIiwidG90YWxDb3VudCIsImxlbmd0aCIsImRhdGEiLCJzZXRTdGF0ZSIsIk1hdGgiLCJjZWlsIiwicGFnZSIsImdldFVzZXJCeUlkIiwiZ2V0TWF0Y2hlcyIsImF4aW9zIiwidGhlbiIsInJlcyIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJOdW1iZXIiLCJtZXRob2QiLCJ1cmwiLCJoZWFkZXJzIiwiZ2V0UGFnZWREYXRhIiwidG9VcHBlckNhc2UiLCJtYXAiLCJiZXQiLCJtYXRjaF9pZCIsImJldF9kYXRlIiwiZGF0ZSIsInNsaWNlIiwic3BsaXQiLCJyZXZlcnNlIiwiam9pbiIsImhvbWV0ZWFtIiwiYXdheXRlYW0iLCJob21lc2NvcmUiLCJhd2F5c2NvcmUiLCJtYXRjaCIsIl9pZCIsImhhbmRsZVBhZ2VDaGFuZ2UiLCJwcmV2aW91c1BhZ2UiLCJuZXh0UGFnZSIsIkNvbXBvbmVudCIsIkJldHMiLCJoaWRkZW4iLCJob21lcmVzdWx0IiwiYXdheXJlc3VsdCIsImVycm9ycyIsImJldHN0YXR1cyIsInRvYXN0IiwiY29ubmVjdGVkIiwidmFsaWRhdGlvbmRhdGUiLCJKb2kiLCJyZXF1aXJlZCIsIm9wdGlvbnMiLCJhYm9ydEVhcmx5Iiwic2NoZW1hIiwiZXJyb3IiLCJkZXRhaWxzIiwiaXRlbSIsInBhdGgiLCJtZXNzYWdlIiwiaW5wdXQiLCJjdXJyZW50VGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidmFsaWRhdGUiLCJkb1N1Ym1pdCIsIm1hdGNoaWQiLCJwcm9wcyIsImJldGlkIiwidXVpZHY0Iiwic3RhdHVzIiwicG9zaXRpb24iLCJhdXRvQ2xvc2UiLCJoaWRlUHJvZ3Jlc3NCYXIiLCJjbG9zZU9uQ2xpY2siLCJjbG9zZUJ1dHRvbiIsInNldFRpbWVvdXQiLCJsb2NhdGlvbiIsImhyZWYiLCJnZXRCZXRzIiwiZ2V0VmFsaWRhdGlvbkRhdGUiLCJzb3VyY2UiLCJjYW5jZWwiLCJtYXRjaGRhdGUiLCJEYXRlIiwiZGF5IiwibmV3ZGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsIm1hdGNodGltZSIsInRpbWUiLCJnZXRIb3VycyIsInVzZXJpZCIsImNhbmNlbFRva2VuIiwidG9rZW4iLCJpc0ludGVnZXIiLCJpbnB1dGVycm9ycyIsInJvdW5kIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVTdWJtaXQiLCJDb21pbmdNYXRjaGVzIiwiRmlsdGVyIiwiaXRlbXMiLCJvbkl0ZW1TZWxlY3QiLCJzZWxlY3RlZEl0ZW0iLCJsYWJlbCIsInRvTG93ZXJDYXNlIiwiSGVhZGVyIiwibW9iaWxlbWVudSIsImlzQWN0aXZlIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJ3aW5kb3ciLCJyZXBsYWNlIiwib25Mb2dvdXQiLCJzaG93bW9kYWwiLCJnZXRVc2VyIiwic2hvd01vZGFsIiwiaSIsInB1c2giLCJoZWlnaHQiLCJ3aWR0aCIsInBhc3N3b3JkIiwiZXJyb3JzY291bnQiLCJidXR0b25UZXh0IiwibWF4IiwibWluIiwidG9hc3RvcHRpb25zIiwicmVuZGVySW5wdXQiLCJyZW5kZXJCdXR0b24iLCJGb3JtIiwic2VsZWN0ZWRNYXRjaGVzIiwiZ3JvdXBzIiwic2VsZWN0ZWRHcm91cCIsImRhdGVzIiwic2VsZWN0ZWREYXRlIiwidGVhbXMiLCJzZWxlY3RlZFRlYW0iLCJncm91cCIsImZpbHRlciIsIm0iLCJ0ZWFtIiwibWF0Y2hMaXN0UGVyUGFnZSIsInNlYXJjaCIsIk5hTiIsImluY2x1ZGVzIiwic2luZ2xlbWF0Y2giLCJmaW5kIiwic29ydCIsImhhbmRsZUdyb3VwRmlsdGVyIiwiaGFuZGxlRGF0ZUZpbHRlciIsImhhbmRsZVRlYW1GaWx0ZXIiLCJ1c2VycyIsInJvdW5kcyIsInNlbGVjdGVkUm91bmQiLCJoYW5kbGVSb3VuZEZpbHRlciIsIldlbGNvbWVNb2RhbCIsIm1vZGFsdmlldyIsIm1vZGFsc2hvdyIsIkxvYWRlciIsIm9iaiIsImVycm9yTWVzc2FnZSIsInR5cGUiLCJ2YWxpZGF0ZVByb3BlcnR5IiwiY2xhc3NOYW1lIiwiSW5wdXQiLCJvbkNoYW5nZSIsIlBhZ2luYXRpb24iLCJpdGVtc0NvdW50Iiwib25QYWdlQ2hhbmdlIiwicGFnZXNDb3VudCIsInBhZ2VzIiwiXyIsIlVzZXJMb2FkZXIiLCJQYXNzVXBkYXRlIiwidXNlciIsImFsaWFzIiwidXNlcnF1ZXJ5IiwiZ2V0RGF0YSIsInUiLCJ1c2VyX2lkIiwidXNlcnBvaW50cyIsImoiLCJnZXRQb2ludHMiLCJlbWFpbCIsImhpc3RvcnkiLCJwYWdlTnVtYmVyIiwic3RhcnRJbmRleCIsInRha2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLDZDQUFBLGVBRUks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RCxFQUFrRSxPQUFsRSxDQUhMLGVBSUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSyxLQUFLQyxZQUFMLENBQWtCLFNBQWxCLEVBQTRCLG1CQUE1QixDQURMLGVBRUksa0RBQUMsbURBQUQ7QUFBTSxVQUFFLEVBQUMsT0FBVDtBQUFpQixpQkFBUyxFQUFDO0FBQTNCLG1CQUZKLENBSkosQ0FMSixDQURKO0FBaUJIOzs7O0VBN0RnQkMsa0Q7O0FBZ0VyQixpRUFBZXpKLE1BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RUE7QUFFTyxTQUFTcUIsUUFBVCxDQUFrQndHLEtBQWxCLEVBQXdCb0YsVUFBeEIsRUFBbUMvTCxRQUFuQyxFQUE0QztBQUMvQyxNQUFNZ00sVUFBVSxHQUFHLENBQUNELFVBQVUsR0FBRyxDQUFkLElBQW1CL0wsUUFBdEM7QUFDQSxTQUFPaUwsNkNBQUMsQ0FBQ3RFLEtBQUQsQ0FBRCxDQUFTN0UsS0FBVCxDQUFla0ssVUFBZixFQUEyQkMsSUFBM0IsQ0FBZ0NqTSxRQUFoQyxFQUEwQ2tFLEtBQTFDLEVBQVA7QUFDSCxDOzs7Ozs7Ozs7Ozs7QUNMRCIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgU3dpdGNoLCBSb3V0ZSwgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZSc7XG5pbXBvcnQgTWF0Y2hlcyBmcm9tICcuL2NvbXBvbmVudHMvTWF0Y2hlcyc7XG5pbXBvcnQgUm91bmRNYXRjaGVzIGZyb20gJy4vY29tcG9uZW50cy9Sb3VuZE1hdGNoZXMnO1xuaW1wb3J0IFNpZ251cCBmcm9tICcuL2NvbXBvbmVudHMvc2lnbnVwJztcbmltcG9ydCBMb2dpbiBmcm9tICcuL2NvbXBvbmVudHMvTG9naW4nO1xuaW1wb3J0IEFjY291bnQgZnJvbSAnLi9jb21wb25lbnRzL0FjY291bnQnO1xuaW1wb3J0IFJhbmtpbmcgZnJvbSAnLi9jb21wb25lbnRzL1JhbmtpbmcnO1xuaW1wb3J0IFVzZXJDb25maXJtIGZyb20gJy4vY29tcG9uZW50cy9wYXNzdXBkYXRlL3VzZXJDb25maXJtJztcbmltcG9ydCBSdWxlcyBmcm9tICcuL2NvbXBvbmVudHMvUnVsZXMnO1xuaW1wb3J0IFNldFNjb3JlIGZyb20gJy4vY29tcG9uZW50cy9wcml2YXRlL3NldHNjb3JlcHJpdmF0ZSc7XG4gICAgXG5SZWFjdERPTS5yZW5kZXIoXG5cbiAgICA8Um91dGVyPlxuICAgICAgICA8SGVhZGVyLz5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2hvbWVcIiBjb21wb25lbnQ9e0hvbWV9Lz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9tYXRjaGVzXCIgY29tcG9uZW50PXtNYXRjaGVzfS8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcm91bmRtYXRjaGVzXCIgY29tcG9uZW50PXtSb3VuZE1hdGNoZXN9IC8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvc2lnbnVwXCIgY29tcG9uZW50PXtTaWdudXB9Lz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9sb2dpblwiIGNvbXBvbmVudD17TG9naW59Lz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9uZXdwYXNzd29yZC9cIiBjb21wb25lbnQ9e1VzZXJDb25maXJtfS8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmFua2luZ1wiIGNvbXBvbmVudD17UmFua2luZ30vPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3J1bGVzXCIgY29tcG9uZW50PXtSdWxlc30vPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2FkbWluXCIgY29tcG9uZW50PXtTZXRTY29yZX0vPlxuICAgICAgICAgICAgICAgIHtzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdjb25uZWN0ZWQnKT09PSd0cnVlJz9cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYWNjb3VudFwiIGNvbXBvbmVudD17QWNjb3VudH0vPjpcbiAgICAgICAgICAgICAgICAgICAgPFJlZGlyZWN0IHRvPVwiL2hvbWVcIiAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBleGFjdCA+XG4gICAgICAgICAgICAgICAgICAgIDxSZWRpcmVjdCB0bz1cIi9ob21lXCIgLz5cbiAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgIDxSZWRpcmVjdCB0bz1cIi9ob21lXCIvPlxuICAgICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgICAgXG4gICAgPC9Sb3V0ZXI+ICAgIFxuICAgIFxuICAgICxkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vY29tbW9uL0xvYWRlcic7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IFJlYWN0VG9vbHRpcCBmcm9tICdyZWFjdC10b29sdGlwJztcclxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi9jb21tb24vcGFnaW5hdGlvbic7XHJcbmltcG9ydCB7IHBhZ2luYXRlIH0gZnJvbSAnLi4vdXRpbGl0aWVzL3BhZ2luYXRlJztcclxuXHJcbmNsYXNzIEFjY291bnQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHN0YXRlID0geyBcclxuICAgICAgICBsb2FkaW5nIDogdHJ1ZSxcclxuICAgICAgICBpZDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkJyksXHJcbiAgICAgICAgdXNlcm5hbWUgOiBcIlwiLFxyXG4gICAgICAgIGJldHMgOiBbXSxcclxuICAgICAgICBtYXRjaGVzIDogW10sXHJcbiAgICAgICAgY3VycmVudFBhZ2UgOiAxICxcclxuICAgICAgICBwYWdlU2l6ZSA6IDEwLFxyXG4gICAgfTtcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgdGhpcy5nZXRVc2VyQnlJZCgpO1xyXG4gICAgICAgIHRoaXMuZ2V0TWF0Y2hlcygpO1xyXG4gICAgfTtcclxuICAgIGdldE1hdGNoZXMoKXsgICAgICAgIFxyXG4gICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgIC5nZXQoYGh0dHBzOi8vcG9ydGZvbGlvLTcyMTQ3LWRlZmF1bHQtcnRkYi5ldXJvcGUtd2VzdDEuZmlyZWJhc2VkYXRhYmFzZS5hcHAvbWF0Y2hlcy5qc29uYClcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge3RoaXMuc2V0U3RhdGUoe21hdGNoZXMgOiByZXMuZGF0YX0pfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtjb25zb2xlLmxvZyhlcnIpfSlcclxuICAgIH07XHJcbiAgICBnZXRVc2VyQnlJZCgpe1xyXG4gICAgICAgIGNvbnN0IGlkID0gTnVtYmVyKHRoaXMuc3RhdGUuaWQpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7IGlkIDogaWR9O1xyXG4gICAgICAgIGF4aW9zKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogJ2FwaS91c2VyL2dldFVzZXJCeUlkJyxcclxuICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgaGVhZGVyczogeydYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J30gICAgIFxyXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dXNlcm5hbWU6cmVzLmRhdGF9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGF4aW9zKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogJ2FwaS9nZXRiZXRzQnlVc2VyJyxcclxuICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgaGVhZGVyczogeydYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J30gICAgIFxyXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YmV0cyA6IHJlcy5kYXRhICwgbG9hZGluZyA6IGZhbHNlfSlcclxuICAgICAgICB9KVxyXG4gICAgfTtcclxuICAgIGdldFBhZ2VkRGF0YSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IHBhZ2VTaXplLCBjdXJyZW50UGFnZSwgYmV0c30gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IGJldHNMaXN0UGVyUGFnZSA9IHBhZ2luYXRlKGJldHMsY3VycmVudFBhZ2UscGFnZVNpemUpO1xyXG4gICAgICAgIHJldHVybiB7IHRvdGFsQ291bnQ6IGJldHMubGVuZ3RoLCBkYXRhOiBiZXRzTGlzdFBlclBhZ2V9XHJcbiAgICB9XHJcbiAgICBwcmV2aW91c1BhZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHtjdXJyZW50UGFnZX0gPSB0aGlzLnN0YXRlXHJcbiAgICAgICAgaWYgKGN1cnJlbnRQYWdlID4xICl7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlLS1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFBhZ2V9KVxyXG4gICAgfSAgICBcclxuICAgIG5leHRQYWdlID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCB7Y3VycmVudFBhZ2UsYmV0cyxwYWdlU2l6ZX0gPSB0aGlzLnN0YXRlXHJcbiAgICAgICAgaWYgKGN1cnJlbnRQYWdlIDwgTWF0aC5jZWlsKGJldHMubGVuZ3RoIC8gcGFnZVNpemUpICl7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlKytcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFBhZ2V9KVxyXG4gICAgfSAgICBcclxuICAgIGhhbmRsZVBhZ2VDaGFuZ2UgPSAocGFnZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50UGFnZSA6IHBhZ2V9KTtcclxuICAgIH07XHJcbiAgICByZW5kZXIoKSB7IFxyXG4gICAgICAgIGNvbnN0IHt1c2VybmFtZSAsIGxvYWRpbmcgLCBiZXRzICwgbWF0Y2hlcyAsIHBhZ2VTaXplICxjdXJyZW50UGFnZX0gPSB0aGlzLnN0YXRlXHJcbiAgICAgICAgY29uc3QgeyB0b3RhbENvdW50ICwgZGF0YSB9ID0gdGhpcy5nZXRQYWdlZERhdGEoKTtcclxuICAgICAgICByZXR1cm4gKCAgICAgXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZSBpcy0yXCI+TW9uIENvbXB0ZTwvaDI+XHJcbiAgICAgICAgICAgICAgICB7bG9hZGluZz8gPExvYWRlci8+OlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+TW9uIGVzcGFjZTwvcD4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGVtIGNsYXNzTmFtZT1cInVzZXJuYW1lXCI+e3VzZXJuYW1lLnRvVXBwZXJDYXNlKCl9PC9lbT5cclxuICAgICAgICAgICAgICAgICAgICA8aHI+PC9ocj5cclxuICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGl0bGUgaXMtNlwiPk1lcyBwcm9ub3MgOjwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEubGVuZ3RoID4gMCA/IFxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5EYXRlIGR1IHByb25vPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TWF0Y2g8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Nb24gcHJvbm9zdGljPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UsOpc3VsdGF0IGR1IG1hdGNoPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U3RhdHV0IGR1IHByb25vPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEubWFwKGJldCA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2JldC5tYXRjaF9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmV0LmJldF9kYXRlLmRhdGUuc2xpY2UoMCwxMCkuc3BsaXQoJy0nKS5yZXZlcnNlKCkuam9pbignLycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltYWdlcy8ke2JldC5ob21ldGVhbX0uc3ZnYH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI1cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG9tZWltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmV0LmhvbWV0ZWFtfSAtIHtiZXQuYXdheXRlYW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltYWdlcy8ke2JldC5hd2F5dGVhbX0uc3ZnYH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI1cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXdheWltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2JldC5ob21lc2NvcmV9IC0ge2JldC5hd2F5c2NvcmV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWF0Y2hlcy5tYXAobWF0Y2ggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoLmhvbWVzY29yZSAmJiBtYXRjaC5faWQgPT09IGJldC5tYXRjaF9pZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXttYXRjaC5faWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttYXRjaC5ob21lc2NvcmV9IC0ge21hdGNoLmF3YXlzY29yZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihtYXRjaC5ob21lc2NvcmUgPT09ICcnICYmIG1hdGNoLl9pZCA9PT0gYmV0Lm1hdGNoX2lkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRkIGtleT17bWF0Y2guX2lkfT5NYXRjaCDDoCB2ZW5pcjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcy5tYXAobWF0Y2ggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoKG1hdGNoLl9pZCA9PSBiZXQubWF0Y2hfaWQgJiYgKG1hdGNoLmhvbWVzY29yZSAmJiBtYXRjaC5hd2F5c2NvcmUgIT09IFwiXCIpKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYmV0LmhvbWVzY29yZSA+IGJldC5hd2F5c2NvcmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihtYXRjaC5ob21lc2NvcmUgPiBtYXRjaC5hd2F5c2NvcmUgJiYgbWF0Y2guaG9tZXNjb3JlID09IGJldC5ob21lc2NvcmUgJiYgbWF0Y2guYXdheXNjb3JlID09IGJldC5hd2F5c2NvcmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx0ZCBjbGFzc05hbWU9XCJ3b24zXCIga2V5PXttYXRjaC5faWR9PlBhcmkgR2FnbsOpICEgMyBwb2ludHMhPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1hdGNoLmhvbWVzY29yZSA+IG1hdGNoLmF3YXlzY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRkIGNsYXNzTmFtZT1cIndvbjJcIiBrZXk9e21hdGNoLl9pZH0+UGFyaSBHYWduw6kgISAyIHBvaW50cyE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRkIGNsYXNzTmFtZT1cImxvc2VcIiBrZXk9e21hdGNoLl9pZH0+UGFyaSBwZXJkdTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYmV0LmhvbWVzY29yZSA8IGJldC5hd2F5c2NvcmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihtYXRjaC5ob21lc2NvcmUgPCBtYXRjaC5hd2F5c2NvcmUgJiYgbWF0Y2guaG9tZXNjb3JlID09IGJldC5ob21lc2NvcmUgJiYgbWF0Y2guYXdheXNjb3JlID09IGJldC5hd2F5c2NvcmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx0ZCBjbGFzc05hbWU9XCJ3b24zXCIga2V5PXttYXRjaC5faWR9PlBhcmkgR2FnbsOpICEgMyBwb2ludHMhPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYobWF0Y2guaG9tZXNjb3JlIDwgbWF0Y2guYXdheXNjb3JlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8dGQgY2xhc3NOYW1lPVwid29uMlwiIGtleT17bWF0Y2guX2lkfT5QYXJpIEdhZ27DqSAhIDIgcG9pbnRzITwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8dGQgY2xhc3NOYW1lPVwibG9zZVwiIGtleT17bWF0Y2guX2lkfT5QYXJpIHBlcmR1PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGJldC5ob21lc2NvcmUgPT09IGJldC5hd2F5c2NvcmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihtYXRjaC5ob21lc2NvcmUgPT09IG1hdGNoLmF3YXlzY29yZSAmJiBtYXRjaC5ob21lc2NvcmUgPT0gYmV0LmhvbWVzY29yZSAmJiBtYXRjaC5hd2F5c2NvcmUgPT0gYmV0LmF3YXlzY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRkIGNsYXNzTmFtZT1cIndvbjNcIiBrZXk9e21hdGNoLl9pZH0+UGFyaSBHYWduw6kgICEgIDMgcG9pbnRzICAhPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihtYXRjaC5ob21lc2NvcmUgPT09IG1hdGNoLmF3YXlzY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRkIGNsYXNzTmFtZT1cIndvbjJcIiBrZXk9e21hdGNoLl9pZH0+UGFyaSBHYWduw6kgICEgIDIgcG9pbnRzICAhPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx0ZCBjbGFzc05hbWU9XCJsb3NlXCIga2V5PXttYXRjaC5faWR9PlBhcmkgcGVyZHU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKChtYXRjaC5faWQgPT0gYmV0Lm1hdGNoX2lkICYmIG1hdGNoLmhvbWVzY29yZT09PSBcIlwiKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXttYXRjaC5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGlwPVwiVm9pciBvdSBtb2RpZmllciBsZSBwcm9ub3N0aWNcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgL21hdGNoZXM/bWF0Y2g9JHtiZXQubWF0Y2hfaWR9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RUb29sdGlwIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJsaWdodFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlciBib3JkZXJDb2xvcj1cIiMzMzg0QThcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I9XCIjMzM4NEE4XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dDb2xvcj1cIiMzMzg0QThcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbiBjb3Vyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+IDpcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Wb3VzIG4nYXZleiBwYXMgZW5jb3JlIHBsYWPDqSBkZSBwcm9ub3N0aWNzLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+UmV2ZW5leiB2ZXJzIGxlcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL21hdGNoZXNcIj4gbWF0Y2hlcyA8L0xpbms+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG91ciBjb21tZW5jZXIgw6AgcHJvbm9zdGlxdWVyLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXNDb3VudD17dG90YWxDb3VudH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZT17cGFnZVNpemV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblBhZ2VDaGFuZ2U9e3RoaXMuaGFuZGxlUGFnZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUGFnZT17dGhpcy5wcmV2aW91c1BhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0UGFnZT17dGhpcy5uZXh0UGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgQWNjb3VudDsiLCJpbXBvcnQgUmVhY3QgLCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9jb21tb24vTG9hZGVyJztcclxuaW1wb3J0IEpvaSBmcm9tICdqb2ktYnJvd3Nlcic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xyXG5pbXBvcnQgeyB0b2FzdCwgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCBSZWFjdFRvb2x0aXAgZnJvbSAncmVhY3QtdG9vbHRpcCc7XHJcblxyXG5jbGFzcyBCZXRzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIGhpZGRlbiA6IHRydWUsXHJcbiAgICAgICAgZGF0YSA6IHtcclxuICAgICAgICAgICAgaG9tZXJlc3VsdCA6IFwiIFwiLFxyXG4gICAgICAgICAgICBhd2F5cmVzdWx0IDogXCIgXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yczoge30sXHJcbiAgICAgICAgYmV0c3RhdHVzIDogZmFsc2UsXHJcbiAgICAgICAgdG9hc3QgOiBmYWxzZSwgXHJcbiAgICAgICAgbG9hZGluZyA6IHRydWUsXHJcbiAgICAgICAgY29ubmVjdGVkIDogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnY29ubmVjdGVkJyksXHJcbiAgICAgICAgdmFsaWRhdGlvbmRhdGUgOiB0cnVlXHJcbiAgICB9O1xyXG4gICAgc291cmNlID0gYXhpb3MuQ2FuY2VsVG9rZW4uc291cmNlKCk7XHJcbiAgICBzY2hlbWEgPSB7XHJcbiAgICAgICAgaG9tZXJlc3VsdCA6IEpvaS5udW1iZXIoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgIGF3YXlyZXN1bHQgOiBKb2kubnVtYmVyKCkucmVxdWlyZWQoKVxyXG4gICAgfTtcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgdGhpcy5nZXRCZXRzKCk7XHJcbiAgICAgICAgdGhpcy5nZXRWYWxpZGF0aW9uRGF0ZSgpXHJcbiAgICB9O1xyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc291cmNlKSB7XHJcbiAgICAgICAgICB0aGlzLnNvdXJjZS5jYW5jZWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRWYWxpZGF0aW9uRGF0ZSgpe1xyXG4gICAgICAgIGNvbnN0IG1hdGNoZGF0ZSA9IE51bWJlcih0aGlzLnByb3BzLm1hdGNoLmRhdGUuc2xpY2UoMCwyKSk7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKClcclxuICAgICAgICBjb25zdCBvcHRpb25zID0ge2RheTogXCJudW1lcmljXCJ9O1xyXG4gICAgICAgIGNvbnN0IG5ld2RhdGUgPSBOdW1iZXIoZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoJ2ZyLUZSJyxvcHRpb25zKSk7XHJcbiAgICAgICAgY29uc3QgbWF0Y2h0aW1lID0gTnVtYmVyKHRoaXMucHJvcHMubWF0Y2gudGltZS5zcGxpdCgnaCcpLmpvaW4oJycpKVxyXG4gICAgICAgIGNvbnN0IHRpbWUgPSBkYXRlLmdldEhvdXJzKClcclxuICAgICAgICBpZihtYXRjaGRhdGUgPT09IG5ld2RhdGUgJiYgbWF0Y2h0aW1lIC0gdGltZSA8PSAxIHx8IG5ld2RhdGUgPiBtYXRjaGRhdGUpe1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZGF0aW9uZGF0ZSA6IGZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRCZXRzKCl7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY29ubmVjdGVkID09PSAndHJ1ZScpe1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7IHVzZXJpZCA6IE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWQnKSkgLCBtYXRjaGlkIDogdGhpcy5wcm9wcy5tYXRjaC5faWR9O1xyXG4gICAgICAgIGF4aW9zKHsgbWV0aG9kIDogJ1BPU1QnICwgdXJsOiAnYXBpL2dldGJldHMnLCBkYXRhIDogZGF0YSAsIGhlYWRlcnM6IHsnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCd9ICwgY2FuY2VsVG9rZW46IHRoaXMuc291cmNlLnRva2VuXHJcbiAgICAgICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHJlcy5kYXRhLmhvbWVzY29yZSkpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGEgOiB7IGhvbWVyZXN1bHQgOiByZXMuZGF0YS5ob21lc2NvcmUgLCBhd2F5cmVzdWx0IDogcmVzLmRhdGEuYXdheXNjb3JlIH0sIGxvYWRpbmcgOiBmYWxzZSAsIGJldHN0YXR1cyA6IHRydWV9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGEgOiB7IGhvbWVyZXN1bHQgOiAnJyAsIGF3YXlyZXN1bHQgOiAnJyB9LCBsb2FkaW5nIDogZmFsc2V9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmcgOiBmYWxzZSB9KVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB2YWxpZGF0ZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0ge2Fib3J0RWFybHkgOiBmYWxzZX07XHJcbiAgICAgICAgY29uc3Qge2Vycm9yfSA9IEpvaS52YWxpZGF0ZSh0aGlzLnN0YXRlLmRhdGEsIHRoaXMuc2NoZW1hLCBvcHRpb25zKTtcclxuICAgICAgICBpZiAoIWVycm9yKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBjb25zdCBlcnJvcnMgPSB7fTtcclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGVycm9yLmRldGFpbHMpXHJcbiAgICAgICAgICAgIGVycm9yc1tpdGVtLnBhdGhbMF1dID0gaXRlbS5tZXNzYWdlOyBcclxuICAgICAgICByZXR1cm4gZXJyb3JzO1xyXG4gICAgfTtcclxuICAgIGhhbmRsZUNoYW5nZSA9ICh7Y3VycmVudFRhcmdldCA6IGlucHV0fSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7Li4udGhpcy5zdGF0ZS5kYXRhfTtcclxuICAgICAgICBkYXRhW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YX0pO1xyXG4gICAgfTtcclxuICAgIGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2hpZGRlbjpmYWxzZX0pXHJcbiAgICB9O1xyXG4gICAgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IFxyXG4gICAgICAgIGNvbnN0IGVycm9ycyA9IHRoaXMudmFsaWRhdGUoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JzIDogZXJyb3JzIHx8IHt9fSk7XHJcbiAgICAgICAgaWYgKGVycm9ycykgcmV0dXJuOyAgXHJcbiAgICAgICAgdGhpcy5kb1N1Ym1pdCgpO1xyXG4gICAgfTtcclxuICAgIGRvU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGhvbWVzY29yZSA6IHRoaXMuc3RhdGUuZGF0YS5ob21lcmVzdWx0LFxyXG4gICAgICAgICAgICBhd2F5c2NvcmUgOiB0aGlzLnN0YXRlLmRhdGEuYXdheXJlc3VsdCxcclxuICAgICAgICAgICAgbWF0Y2hpZCA6IHRoaXMucHJvcHMubWF0Y2guX2lkLFxyXG4gICAgICAgICAgICBiZXRpZCA6IHV1aWR2NCgpLFxyXG4gICAgICAgICAgICBob21ldGVhbSA6IHRoaXMucHJvcHMubWF0Y2guaG9tZXRlYW0sXHJcbiAgICAgICAgICAgIGF3YXl0ZWFtIDogIHRoaXMucHJvcHMubWF0Y2guYXdheXRlYW1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmJldHN0YXR1cyA9PT0gZmFsc2Upe1xyXG4gICAgICAgICAgICBheGlvcyhcclxuICAgICAgICAgICAgICAgIHttZXRob2Q6ICdQT1NUJywgdXJsOiAnYXBpL3Bvc3RiZXRzJywgZGF0YTogZGF0YSwgaGVhZGVyczogeydYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J319KVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlbiA6IHRydWUgLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvbWVyZXN1bHQgOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdheXJlc3VsdCA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJldHN0YXR1cyA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0IDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pOyBcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdC5zdWNjZXNzKCdQcm9ub3N0aWMgdmFsaWTDqSEnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcC1yaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ2xvc2U6IDEwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VCdXR0b246IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBkb2N1bWVudC5sb2NhdGlvbi5ocmVmPWAvbWF0Y2hlcz9wPSR7dGhpcy5wcm9wcy5jdXJyZW50UGFnZX1gIH0sMTIwMCk7XHJcbiAgICAgICAgICAgICAgICB9OyAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIHRvYXN0LmVycm9yKCdWZXVpbGxleiByw6llc3NheWVyJywge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcC1yaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9DbG9zZTogMzAwMCxcclxuICAgICAgICAgICAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBjbG9zZUJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLnNldFN0YXRlKHt0b2FzdCA6IGZhbHNlfSl9LDYwMDApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdGF0ZS5iZXRzdGF0dXMgPT09IHRydWUpe1xyXG4gICAgICAgICAgICBheGlvcyh7bWV0aG9kOidQT1NUJyx1cmw6J2FwaS91cGRhdGViZXRzJywgZGF0YTpkYXRhLCBoZWFkZXJzOiB7J1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnfX0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpPT4ge2lmIChyZXMuc3RhdHVzID09PSAyMDApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGRlbiA6IHRydWUgLCBcclxuICAgICAgICAgICAgICAgICAgICBkYXRhIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBob21lcmVzdWx0IDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXdheXJlc3VsdCA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgICAgICAgICBiZXRzdGF0dXMgOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0IDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7IFxyXG4gICAgICAgICAgICAgICAgdG9hc3Quc3VjY2VzcygnUHJvbm9zdGljIG1vZGlmacOpIScsIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICBhdXRvQ2xvc2U6IDEwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VCdXR0b246IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgZG9jdW1lbnQubG9jYXRpb24uaHJlZj1gL21hdGNoZXM/cD0ke3RoaXMucHJvcHMuY3VycmVudFBhZ2V9YCB9LDEyMDApO1xyXG4gICAgICAgICAgICB9fSk7XHJcbiAgICAgICAgfTsgICAgICAgXHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHtoaWRkZW4sIGRhdGEgLCBlcnJvcnMgLCBpbnB1dGVycm9ycyAsIGJldHN0YXR1cyAsIHRvYXN0ICwgY29ubmVjdGVkICwgbG9hZGluZyAsIHZhbGlkYXRpb25kYXRlfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3Qge21hdGNofSA9IHRoaXMucHJvcHM7XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gKCBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cclxuICAgICAgICAgICAgICAgIHt0b2FzdD8gPFRvYXN0Q29udGFpbmVyLz4gOiBudWxsfSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxoMz57bWF0Y2guZGF0ZX0gLSB7bWF0Y2gudGltZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgPGg0PnttYXRjaC5yb3VuZH08L2g0PlxyXG4gICAgICAgICAgICAgICAgPHA+e21hdGNoLmxvY2F0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWF0Y2hkZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJob21ldGVhbWltZ1wiIHNyYz17YC9pbWFnZXMvJHttYXRjaC5ob21ldGVhbX0uc3ZnYH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIHttYXRjaC5ob21ldGVhbX0ge21hdGNoLmhvbWVzY29yZX0gLSB7bWF0Y2guYXdheXNjb3JlfSB7bWF0Y2guYXdheXRlYW19XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhd2F5dGVhbWltZ1wiIHNyYz17YC9pbWFnZXMvJHttYXRjaC5hd2F5dGVhbX0uc3ZnYH0vPlxyXG4gICAgICAgICAgICAgICAgPC9wcmU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge2xvYWRpbmcgPT09IHRydWUgPyA8TG9hZGVyLz4gOiBcclxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9IGNsYXNzTmFtZT17aGlkZGVuID8gJ2J1dHRvbiBiZXRidXR0b24gaXMtcHJpbWFyeScgOiAnaGlkZGVuJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtiZXRzdGF0dXM/ICdWb2lyIHZvdHJlIHByb25vc3RpYycgOiBcIlBhcmllciBzdXIgY2UgbWF0Y2hcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aGlkZGVuID8gJ2hpZGRlbicgOiAnYmV0Z2FtZXMnfT5cclxuICAgICAgICAgICAgICAgIHtjb25uZWN0ZWQgPT09IFwidHJ1ZVwiID8gIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb25kYXRlP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxlbT57bWF0Y2guaG9tZXRlYW0rXCIgXCJ9PC9lbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaG9tZXJlc3VsdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEuaG9tZXJlc3VsdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzY29yZSBob21lcmVzdWx0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzW1wiaG9tZXJlc3VsdFwiXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+IC0gPC9iPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYXdheXJlc3VsdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEuYXdheXJlc3VsdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2lucHV0ZXJyb3JzPyAnaW5wdXRlcnJvcnMnIDogJ3Njb3JlJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZW0+IHttYXRjaC5hd2F5dGVhbX0gPC9lbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVTdWJtaXR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnZhbGlkYXRlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9LXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXRpcD1cIkNlIHByb25vc3RpYyBuZSBwZXV0IHBsdXMgw6p0cmUgbW9kaWZpw6kgIVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21hdGNoLmhvbWV0ZWFtfSB7ZGF0YS5ob21lcmVzdWx0fSAtIHtkYXRhLmF3YXlyZXN1bHR9IHttYXRjaC5hd2F5dGVhbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdFRvb2x0aXAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImxpZ2h0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyIGJvcmRlckNvbG9yPVwiIzMzODRBOFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcj1cIiMzMzg0QThcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd0NvbG9yPVwiIzMzODRBOFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj59ICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlZvdXMgZGV2ZXogw6p0cmUgY29ubmVjdMOpIHBvdXIgcGxhY2VyIHVuIHByb25vc3RpYy48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgKTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgQmV0czsiLCJpbXBvcnQgeyBtYXRjaGVzIH0gZnJvbSAnbG9kYXNoLWVzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IENvbWluZ01hdGNoZXMgPSAoe2RhdGF9KSA9PiB7XHJcbiAgICByZXR1cm4gKCBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbWluZ21hdGNoZXNcIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlIGlzLTNcIj5Qcm9jaGFpbnMgbWF0Y2hlczwvaDM+XHJcbiAgICAgICAgICAgIHtkYXRhLm1hcChtYXRjaCA9PiBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiIGtleT17bWF0Y2guX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICA8Yj57bWF0Y2guZGF0ZX08L2I+PGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGI+e21hdGNoLnRpbWV9PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPnttYXRjaC5ob21ldGVhbX0gLSB7bWF0Y2guYXdheXRlYW19PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBDb21pbmdNYXRjaGVzOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBGaWx0ZXIgPSAoe2l0ZW1zLG9uSXRlbVNlbGVjdCxzZWxlY3RlZEl0ZW0sbGFiZWx9KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi10cmlnZ2VyXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5GaWx0cmVyIHBhciB7bGFiZWwudG9Mb3dlckNhc2UoKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGlzLXNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2FuZ2xlZG93bi5zdmdcIi8+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9eycnID09PSBzZWxlY3RlZEl0ZW0gPyAnc2VsZWN0aW9uIGlzLXNlbGVjdGVkJyA6ICdzZWxlY3Rpb24nfSBvbkNsaWNrPXsgKCkgPT4gb25JdGVtU2VsZWN0KCdBbGwnKX0+VG91czwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1zLm1hcChpdGVtID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aXRlbSA9PT0gc2VsZWN0ZWRJdGVtID8gJ3NlbGVjdGlvbiBpcy1zZWxlY3RlZCcgOiAnc2VsZWN0aW9uJ30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gb25JdGVtU2VsZWN0KGl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWwgIT09ICdHcm91cGUgJz8gaXRlbSA6IGxhYmVsICsgaXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICl9ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXI7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgY29ubmVjdGVkIDogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnY29ubmVjdGVkJyksXHJcbiAgICAgICAgbW9iaWxlbWVudSA6IGZhbHNlLFxyXG4gICAgICAgIGlzQWN0aXZlIDogZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBvbkxvZ291dCgpe1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2Nvbm5lY3RlZCcsJ2ZhbHNlJyk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2lkJyk7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy9hcGkvbG9nb3V0Jyk7XHJcbiAgICB9O1xyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3Qge2Nvbm5lY3RlZCAsIGlzQWN0aXZlfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2hvbWVcIj48aW1nIHNyYz1cIi9pbWFnZXMvZXVybzIwMjAtbG9nby5zdmdcIiB3aWR0aD1cIjcwXCI+PC9pbWc+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7dGhpcy5zZXRTdGF0ZSh7aXNBY3RpdmUgOiAhaXNBY3RpdmV9KX19IGNsYXNzTmFtZT17aXNBY3RpdmU/XCJuYXZiYXItYnVyZ2VyIGlzLWFjdGl2ZVwiOlwibmF2YmFyLWJ1cmdlclwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2lzQWN0aXZlP1wibmF2YmFyLW1lbnUgaXMtYWN0aXZlXCI6XCJuYXZiYXItbWVudVwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItc3RhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvcnVsZXNcIiBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiPlLDqGdsZXM8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtIGhhcy1kcm9wZG93biBpcy1ob3ZlcmFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCI+TWF0Y2hlczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL21hdGNoZXNcIiBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiPlBoYXNlIGRlIEdyb3VwZTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvcm91bmRtYXRjaGVzXCIgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5QaGFzZSBmaW5hbGU8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3JhbmtpbmdcIiBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiPkNsYXNzZW1lbnQ8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb25uZWN0ZWQ9PT0ndHJ1ZSc/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvYWNjb3VudFwiIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1wcmltYXJ5XCI+TW9uIGNvbXB0ZTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5vbkxvZ291dH0gIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy13YXJuaW5nXCI+RMOpY29ubmVjdGlvbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2xvZ2luXCIgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXByaW1hcnlcIj5Db25uZWN0aW9uPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvc2lnbnVwXCIgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWluZm9cIj48c3Ryb25nPkNyw6llciB1biBjb21wdGU8L3N0cm9uZz48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgQ29taW5nTWF0Y2hlcyBmcm9tICcuL0NvbWluZ01hdGNoZXMnO1xyXG5pbXBvcnQgeyBUd2l0dGVyVGltZWxpbmVFbWJlZCB9IGZyb20gJ3JlYWN0LXR3aXR0ZXItZW1iZWQnO1xyXG5pbXBvcnQgV2VsY29tZU1vZGFsIGZyb20gJy4vV2VsY29tZU1vZGFsJztcclxuXHJcbmNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHN0YXRlID0geyBcclxuICAgICAgICBtYXRjaGVzIDogW10sXHJcbiAgICAgICAgc2hvd21vZGFsIDogZmFsc2VcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICB0aGlzLmdldE1hdGNoZXMoKTtcclxuICAgICAgICBjb25zdCBjb25uZWN0ZWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdjb25uZWN0ZWQnKTtcclxuICAgICAgICBpZiAoY29ubmVjdGVkID09PSAndHJ1ZScpIHRoaXMuZ2V0VXNlcigpO1xyXG4gICAgICAgIHRoaXMuc2hvd01vZGFsKClcclxuICAgICAgICBcclxuICAgIH07XHJcbiAgICBzaG93TW9kYWwoKXtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd21vZGFsIDogdHJ1ZX0pXHJcbiAgICAgICAgfSwgMzAwMCk7XHJcbiAgICB9XHJcbiAgICBnZXRVc2VyKCl7XHJcbiAgICAgICAgYXhpb3MuZ2V0KCdhcGkvZ2V0VXNlcklkJykudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWQnLHJlcy5kYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBnZXRNYXRjaGVzKCl7XHJcbiAgICAgICAgYXhpb3MuZ2V0KGBodHRwczovL3BvcnRmb2xpby03MjE0Ny1kZWZhdWx0LXJ0ZGIuZXVyb3BlLXdlc3QxLmZpcmViYXNlZGF0YWJhc2UuYXBwL21hdGNoZXMuanNvbmApLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgbGV0IG1hdGNoZXMgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgcmVzLmRhdGEubGVuZ3RoIDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YVtpXS5ob21lc2NvcmUgPT09IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoZXMucHVzaChyZXMuZGF0YVtpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWF0Y2hlcyA6IG1hdGNoZXMuc2xpY2UoMCw0KX0pIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge21hdGNoZXMgLCBzaG93bW9kYWx9ID0gdGhpcy5zdGF0ZVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImhlYWRlcmltZ1wiPlxyXG4gICAgICAgICAgICAgICAge3Nob3dtb2RhbD88V2VsY29tZU1vZGFsLz46bnVsbH1cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9ldXJvMjAyMC1sb2dvLnN2Z1wiLz4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8Q29taW5nTWF0Y2hlcyBkYXRhPXttYXRjaGVzfS8+XHJcbiAgICAgICAgICAgICAgICA8VHdpdHRlclRpbWVsaW5lRW1iZWRcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VUeXBlPVwicHJvZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2NyZWVuTmFtZT1cImVxdWlwZWRlZnJhbmNlXCJcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt7aGVpZ2h0OiA1MDAgLCB3aWR0aCA6IDMwMH19XHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZz1cImZyXCJcclxuICAgICAgICAgICAgICAgIC8+ICAgICBcclxuICAgICAgICAgICAgPC9zZWN0aW9uPiAgICAgICAgICAgXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiAgICBcclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSm9pIGZyb20gJ2pvaS1icm93c2VyJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyB0b2FzdCwgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4vY29tbW9uL2Zvcm0nO1xyXG5pbXBvcnQgVXNlckxvYWRlciBmcm9tICcuL2NvbW1vbi91c2VybG9hZGVyJztcclxuXHJcbmNsYXNzIFNpZ251cCBleHRlbmRzIEZvcm0ge1xyXG4gICAgc3RhdGUgPSB7IFxyXG4gICAgICAgIGRhdGEgOiB7XHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZSA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZCA6IFwiXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3JzIDoge30sXHJcbiAgICAgICAgZXJyb3JzY291bnQgOiAwLFxyXG4gICAgICAgIGxvYWRpbmcgOiBmYWxzZSxcclxuICAgICAgICBidXR0b25UZXh0IDogXCJWYWxpZGVyXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICBzY2hlbWEgPSB7XHJcbiAgICAgICAgdXNlcm5hbWUgOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKS5tYXgoNDApLFxyXG4gICAgICAgIHBhc3N3b3JkIDogSm9pLnN0cmluZygpLnJlcXVpcmVkKCkubWluKDgpLm1heCgyNSlcclxuICAgIH1cclxuICAgIGRvU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmcgOiB0cnVlICwgYnV0dG9uVGV4dCA6IFwiQ2hhcmdlbWVudC4uLlwifSlcclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICB1c2VybmFtZSA6IHRoaXMuc3RhdGUuZGF0YS51c2VybmFtZSxcclxuICAgICAgICAgICAgcGFzc3dvcmQgOiB0aGlzLnN0YXRlLmRhdGEucGFzc3dvcmQsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF4aW9zKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogJ2FwaS9sb2dpbicsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCd9ICAgICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzpmYWxzZSAsIGJ1dHRvblRleHQgOiBcIlZhbGlkZXJcIn0pXHJcbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApe1xyXG4gICAgICAgICAgICB0b2FzdC5zdWNjZXNzKHJlcy5kYXRhLm1lc3NhZ2UsIHRoaXMudG9hc3RvcHRpb25zKTtcclxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnY29ubmVjdGVkJywndHJ1ZScpXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoICgpID0+IHtkb2N1bWVudC5sb2NhdGlvbi5ocmVmPVwiL2hvbWVcIiB9LDE2MDApIFxyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOmZhbHNlICwgYnV0dG9uVGV4dCA6IFwiQ2hhcmdlbWVudC4uLlwifSlcclxuICAgICAgICAgICAgdG9hc3QuZXJyb3IoJ1bDqXJpZmlleiB2b3MgaWRlbnRpZmlhbnRzJywgdGhpcy50b2FzdG9wdGlvbnMpO1xyXG4gICAgICAgICAgICBsZXQgZXJyb3JzY291bnQgPSB0aGlzLnN0YXRlLmVycm9yc2NvdW50O1xyXG4gICAgICAgICAgICBlcnJvcnNjb3VudCsrXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yc2NvdW50OmVycm9yc2NvdW50ICwgZGF0YSA6IHsgdXNlcm5hbWUgOiBcIlwiICwgcGFzc3dvcmQgOiBcIlwifSAsIGJ1dHRvblRleHQgOlwiVmFsaWRlclwifSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkgeyBcclxuICAgICAgICBjb25zdCB7ZXJyb3JzY291bnQsIGxvYWRpbmcgLCBidXR0b25UZXh0IH0gPSB0aGlzLnN0YXRlXHJcbiAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8VG9hc3RDb250YWluZXIvPlxyXG4gICAgICAgICAgICAgICAge2xvYWRpbmcgPT09IHRydWUgPyA8VXNlckxvYWRlci8+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPkNvbm5lY3Rpb248L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgyPlBhcyBkZSBjb21wdGU/IENsaXF1ZXogPExpbmsgdG89XCJzaWdudXBcIj5pY2k8L0xpbms+IHBvdXIgZW4gY3LDqWVyIHVuLjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInNpZ251cC1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVySW5wdXQoJ3VzZXJuYW1lJywnTm9tIGRcXCd1dGlsaXNhdGV1ciA6JywndGV4dCcsJ2lucHV0Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVySW5wdXQoJ3Bhc3N3b3JkJywnTW90IGRlIHBhc3NlIDonLCdwYXNzd29yZCcsJ2lucHV0Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAge2Vycm9yc2NvdW50ID49IDMgPyA8ZW0+Vm91cyBhdmV6IG91Ymxpw6kgdm90cmUgbW90IGRlIHBhc3NlID8gQ2xpcXVleiA8TGluayB0bz1cIi9uZXdwYXNzd29yZFwiPmljaTwvTGluaz4gcG91ciBsZSByw6lpbml0bGFpaXNlcjwvZW0+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIGlzLWdyb3VwZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQnV0dG9uKGJ1dHRvblRleHQsJ2J1dHRvbiBpcy1zdWNjZXNzJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2hvbWVcIiBjbGFzc05hbWU9XCJidXR0b24gaXMtaW5mb1wiPkFubnVsZXI8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBTaWdudXA7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcclxuaW1wb3J0IEJldHMgZnJvbSAnLi9CZXRzJztcclxuaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4vY29tbW9uL3BhZ2luYXRpb24nO1xyXG5pbXBvcnQgeyBwYWdpbmF0ZSB9IGZyb20gJy4uL3V0aWxpdGllcy9wYWdpbmF0ZSc7XHJcblxyXG5jbGFzcyBNYXRjaGVzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0ZSA9IHsgXHJcbiAgICAgICAgbWF0Y2hlcyA6IFtdLFxyXG4gICAgICAgIHNlbGVjdGVkTWF0Y2hlcyA6IFtdLFxyXG4gICAgICAgIGdyb3VwczogW10sIFxyXG4gICAgICAgIHNlbGVjdGVkR3JvdXAgOiAnJyxcclxuICAgICAgICBkYXRlcyA6IFtdICxcclxuICAgICAgICBzZWxlY3RlZERhdGUgOiAnJyxcclxuICAgICAgICB0ZWFtcyA6IFtdLFxyXG4gICAgICAgIHNlbGVjdGVkVGVhbSA6ICcnLFxyXG4gICAgICAgIGN1cnJlbnRQYWdlIDogMSAsXHJcbiAgICAgICAgcGFnZVNpemUgOiA2LFxyXG4gICAgICAgIGRhdGUgOiBuZXcgRGF0ZSgnZC1NLVknKVxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICB0aGlzLmdldE1hdGNoZXMoKTtcclxuICAgICAgICBjb25zdCBjdXJyZW50UGFnZSA9IE51bWJlcih0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaC5zbGljZSgzKSlcclxuICAgICAgICBpZihjdXJyZW50UGFnZSA9PT0gMCB8fCBjdXJyZW50UGFnZSA9PT0gTmFOKXtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRQYWdlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWF0Y2hlcygpIHsgICAgICAgIFxyXG4gICAgICAgIGF4aW9zLmdldChgaHR0cHM6Ly9wb3J0Zm9saW8tNzIxNDctZGVmYXVsdC1ydGRiLmV1cm9wZS13ZXN0MS5maXJlYmFzZWRhdGFiYXNlLmFwcC9tYXRjaGVzLmpzb25gKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoaWQgPSBOdW1iZXIodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2guc2xpY2UoNykpO1xyXG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gcmVzLmRhdGEuc2xpY2UoMCwzNik7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGVzID0gW107XHJcbiAgICAgICAgICAgIGNvbnN0IHRlYW1zID0gW107XHJcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwcyA9IFtdO1xyXG4gICAgICAgICAgICBtYXRjaGVzLm1hcCggbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGVzLmluY2x1ZGVzKG0uZGF0ZSkpIGRhdGVzLnB1c2gobS5kYXRlKTtcclxuICAgICAgICAgICAgICAgIGlmICghdGVhbXMuaW5jbHVkZXMobS5ob21ldGVhbSkpIHRlYW1zLnB1c2gobS5ob21ldGVhbSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWdyb3Vwcy5pbmNsdWRlcyhtLmdyb3VwKSkgZ3JvdXBzLnB1c2gobS5ncm91cCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsZXQgc2luZ2xlbWF0Y2ggPSBbXVxyXG4gICAgICAgICAgICBpZihtYXRjaGlkICE9IFwiXCIgJiYgbWF0Y2hpZCA8PSBtYXRjaGVzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICBzaW5nbGVtYXRjaC5wdXNoKG1hdGNoZXMuZmluZChtID0+IG1hdGNoaWQgPT0gbS5faWQpIClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtYXRjaGVzICwgdGVhbXMgOiB0ZWFtcy5zb3J0KCkgLCBkYXRlcyAsIGdyb3VwcyAsIHNlbGVjdGVkTWF0Y2hlcyA6IHNpbmdsZW1hdGNoIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtYXRjaGVzICwgdGVhbXMgOiB0ZWFtcy5zb3J0KCkgLCBkYXRlcyAsIGdyb3VwcyAsIHNlbGVjdGVkTWF0Y2hlcyA6IG1hdGNoZXMgfSlcclxuICAgICAgICAgICAgfSAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGhhbmRsZVBhZ2VDaGFuZ2UgPSAocGFnZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50UGFnZSA6IHBhZ2V9KTtcclxuICAgIH07XHJcbiAgICBoYW5kbGVHcm91cEZpbHRlciA9IChncm91cCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBbLi4udGhpcy5zdGF0ZS5tYXRjaGVzXTtcclxuICAgICAgICBpZiAoZ3JvdXAgPT09ICdBbGwnKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkTWF0Y2hlcyA6IG1hdGNoZXMgLCBzZWxlY3RlZEdyb3VwIDonJ30pO1xyXG4gICAgICAgIH0gIFxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkTWF0Y2hlcyA9IG1hdGNoZXMuZmlsdGVyKCBtID0+IG0uZ3JvdXAgPT09IGdyb3VwKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRNYXRjaGVzICwgc2VsZWN0ZWRHcm91cCA6IGdyb3VwICwgc2VsZWN0ZWRUZWFtIDogJycgLCBzZWxlY3RlZERhdGUgOiAnJyAsIGN1cnJlbnRQYWdlOiAxfSk7XHJcbiAgICAgICAgfSAgXHJcbiAgICB9O1xyXG4gICAgaGFuZGxlRGF0ZUZpbHRlciA9IChkYXRlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IFsuLi50aGlzLnN0YXRlLm1hdGNoZXNdO1xyXG4gICAgICAgIGlmIChkYXRlID09PSAnQWxsJyl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZE1hdGNoZXMgOiBtYXRjaGVzICwgc2VsZWN0ZWREYXRlIDonJ30pXHJcbiAgICAgICAgfSAgICAgIFxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkTWF0Y2hlcyA9IG1hdGNoZXMuZmlsdGVyKCBtID0+IG0uZGF0ZSA9PT0gZGF0ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkTWF0Y2hlcyAsIHNlbGVjdGVkRGF0ZSA6IGRhdGUgLCBzZWxlY3RlZFRlYW0gOiAnJyAsIHNlbGVjdGVkR3JvdXAgOiAnJywgY3VycmVudFBhZ2U6IDF9KTtcclxuICAgICAgICB9ICBcclxuICAgIH07XHJcbiAgICBoYW5kbGVUZWFtRmlsdGVyID0gKHRlYW0pID0+IHtcclxuICAgICAgICBjb25zdCBtYXRjaGVzID0gWy4uLnRoaXMuc3RhdGUubWF0Y2hlc107XHJcbiAgICAgICAgaWYgKHRlYW0gPT09ICdBbGwnKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkTWF0Y2hlcyA6IG1hdGNoZXMgLCBzZWxlY3RlZFRlYW0gOiAnJywgY3VycmVudFBhZ2U6IDF9KVxyXG4gICAgICAgIH0gICAgICBcclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZE1hdGNoZXMgPSBtYXRjaGVzLmZpbHRlciggbSA9PiBtLmhvbWV0ZWFtID09PSB0ZWFtIHx8IG0uYXdheXRlYW0gPT09IHRlYW0pO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZE1hdGNoZXMgLCBzZWxlY3RlZFRlYW0gOiB0ZWFtICwgc2VsZWN0ZWREYXRlIDogJycgLCBzZWxlY3RlZEdyb3VwIDogJyd9KTtcclxuICAgICAgICB9ICBcclxuICAgIH07XHJcbiAgICBnZXRQYWdlZERhdGEgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBwYWdlU2l6ZSwgY3VycmVudFBhZ2UsIHNlbGVjdGVkTWF0Y2hlc30gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IG1hdGNoTGlzdFBlclBhZ2UgPSBwYWdpbmF0ZShzZWxlY3RlZE1hdGNoZXMsY3VycmVudFBhZ2UscGFnZVNpemUpO1xyXG4gICAgICAgIHJldHVybiB7IHRvdGFsQ291bnQ6IHNlbGVjdGVkTWF0Y2hlcy5sZW5ndGgsIGRhdGE6IG1hdGNoTGlzdFBlclBhZ2V9XHJcbiAgICB9XHJcbiAgICBwcmV2aW91c1BhZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHtjdXJyZW50UGFnZX0gPSB0aGlzLnN0YXRlXHJcbiAgICAgICAgaWYgKGN1cnJlbnRQYWdlID4xICl7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlLS1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFBhZ2V9KVxyXG4gICAgfSAgICBcclxuICAgIG5leHRQYWdlID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCB7Y3VycmVudFBhZ2Usc2VsZWN0ZWRNYXRjaGVzLHBhZ2VTaXplfSA9IHRoaXMuc3RhdGVcclxuICAgICAgICBpZiAoY3VycmVudFBhZ2UgPCBNYXRoLmNlaWwoc2VsZWN0ZWRNYXRjaGVzLmxlbmd0aCAvIHBhZ2VTaXplKSApe1xyXG4gICAgICAgICAgICBjdXJyZW50UGFnZSsrXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRQYWdlfSlcclxuICAgIH0gICAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBwYWdlU2l6ZSAsIGN1cnJlbnRQYWdlICwgc2VsZWN0ZWRHcm91cCwgc2VsZWN0ZWREYXRlICwgc2VsZWN0ZWRUZWFtICwgZGF0ZXMgLCAgZ3JvdXBzICwgdGVhbXMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgeyB0b3RhbENvdW50ICwgZGF0YSB9ID0gdGhpcy5nZXRQYWdlZERhdGEoKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hdGNoZXNjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5QaGFzZSBkZSBHcm91cGU8L2gxPjxoci8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duIGlzLWhvdmVyYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaWx0ZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXsnR3JvdXBlICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtncm91cHN9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW09e3NlbGVjdGVkR3JvdXB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSXRlbVNlbGVjdD17dGhpcy5oYW5kbGVHcm91cEZpbHRlcn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duIGlzLWhvdmVyYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaWx0ZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXsnRGF0ZSAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17ZGF0ZXN9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW09e3NlbGVjdGVkRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25JdGVtU2VsZWN0PXt0aGlzLmhhbmRsZURhdGVGaWx0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93biBpcy1ob3ZlcmFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8RmlsdGVyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17J0VxdWlwZSAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17dGVhbXN9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW09e3NlbGVjdGVkVGVhbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25JdGVtU2VsZWN0PXt0aGlzLmhhbmRsZVRlYW1GaWx0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXRjaGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEubWFwKG1hdGNoID0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJldHMgbWF0Y2g9e21hdGNofSBrZXk9e21hdGNoLl9pZH0gY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBhZ2luYXRpb24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zQ291bnQ9e3RvdGFsQ291bnR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZT17cGFnZVNpemV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlPXtjdXJyZW50UGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25QYWdlQ2hhbmdlPXt0aGlzLmhhbmRsZVBhZ2VDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUGFnZT17dGhpcy5wcmV2aW91c1BhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRQYWdlPXt0aGlzLm5leHRQYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICBcclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBNYXRjaGVzOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9jb21tb24vTG9hZGVyJztcclxuXHJcbmNsYXNzIFJhbmtpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7IFxyXG4gICAgICAgIHVzZXJzIDogW10sXHJcbiAgICAgICAgbWF0Y2hlcyA6IFtdLFxyXG4gICAgICAgIGxvYWRpbmcgOiBmYWxzZSxcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIHJlbmRlcigpIHsgXHJcbiAgICAgICAgY29uc3Qge3VzZXJzICwgbG9hZGluZ30gPSB0aGlzLnN0YXRlXHJcbiAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGUgaXMtMlwiPkNsYXNzZW1lbnQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgey8qIHtsb2FkaW5nPyA8TG9hZGVyLz4gOlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q2xhc3NlbWVudDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VXRpbGlzYXRldXI8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlBvaW50czwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Tm9tYnJlIGRlIHByb25vczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT59ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZSBpcy0xXCI+Q2xhc3NlbWVudCDDoCB2ZW5pciEhPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8aWZyYW1lIHNyYz0naHR0cHM6Ly9nZnljYXQuY29tL2lmci9DaGVlcnlWYWd1ZUVsa2hvdW5kJyBmcmFtZUJvcmRlcj0nMCcgc2Nyb2xsaW5nPSdubycgd2lkdGg9JzY0MCcgaGVpZ2h0PSczNjEnPjwvaWZyYW1lPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgUmFua2luZzsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xyXG5pbXBvcnQgQmV0cyBmcm9tICcuL0JldHMnO1xyXG5pbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcclxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi9jb21tb24vcGFnaW5hdGlvbic7XHJcbmltcG9ydCB7IHBhZ2luYXRlIH0gZnJvbSAnLi4vdXRpbGl0aWVzL3BhZ2luYXRlJztcclxuXHJcbmNsYXNzIE1hdGNoZXMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHN0YXRlID0geyBcclxuICAgICAgICBtYXRjaGVzIDogW10sXHJcbiAgICAgICAgc2VsZWN0ZWRNYXRjaGVzIDogW10sXHJcbiAgICAgICAgcm91bmRzOiBbXSwgXHJcbiAgICAgICAgc2VsZWN0ZWRSb3VuZCA6ICcnLFxyXG4gICAgICAgIGRhdGVzIDogW10gLFxyXG4gICAgICAgIHNlbGVjdGVkRGF0ZSA6ICcnLFxyXG4gICAgICAgIHRlYW1zIDogW10sXHJcbiAgICAgICAgc2VsZWN0ZWRUZWFtIDogJycsXHJcbiAgICAgICAgY3VycmVudFBhZ2UgOiAxICxcclxuICAgICAgICBwYWdlU2l6ZSA6IDYsXHJcbiAgICAgICAgZGF0ZSA6IG5ldyBEYXRlKCdkLU0tWScpXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIHRoaXMuZ2V0TWF0Y2hlcygpO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gTnVtYmVyKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoLnNsaWNlKDMpKVxyXG4gICAgICAgIGlmKGN1cnJlbnRQYWdlID09PSAwIHx8IGN1cnJlbnRQYWdlID09PSBOYU4pe1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFBhZ2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRNYXRjaGVzKCkgeyAgICAgICAgXHJcbiAgICAgICAgYXhpb3MuZ2V0KGBodHRwczovL3BvcnRmb2xpby03MjE0Ny1kZWZhdWx0LXJ0ZGIuZXVyb3BlLXdlc3QxLmZpcmViYXNlZGF0YWJhc2UuYXBwL21hdGNoZXMuanNvbmApLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbWF0Y2hpZCA9IE51bWJlcih0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaC5zbGljZSg3KSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSByZXMuZGF0YS5zbGljZSgzNik7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGVzID0gW107XHJcbiAgICAgICAgICAgIGNvbnN0IHRlYW1zID0gW107XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdW5kcyA9IFtdO1xyXG4gICAgICAgICAgICBtYXRjaGVzLm1hcCggbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGVzLmluY2x1ZGVzKG0uZGF0ZSkpIGRhdGVzLnB1c2gobS5kYXRlKTtcclxuICAgICAgICAgICAgICAgIGlmICghdGVhbXMuaW5jbHVkZXMobS5ob21ldGVhbSkpIHRlYW1zLnB1c2gobS5ob21ldGVhbSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJvdW5kcy5pbmNsdWRlcyhtLnJvdW5kKSkgcm91bmRzLnB1c2gobS5yb3VuZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsZXQgc2luZ2xlbWF0Y2ggPSBbXVxyXG4gICAgICAgICAgICBpZihtYXRjaGlkICE9IFwiXCIgJiYgbWF0Y2hpZCA8PSBtYXRjaGVzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICBzaW5nbGVtYXRjaC5wdXNoKG1hdGNoZXMuZmluZChtID0+IG1hdGNoaWQgPT0gbS5faWQpIClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtYXRjaGVzICwgdGVhbXMgOiB0ZWFtcy5zb3J0KCkgLCBkYXRlcyAsIHJvdW5kcyAsIHNlbGVjdGVkTWF0Y2hlcyA6IHNpbmdsZW1hdGNoIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtYXRjaGVzICwgdGVhbXMgOiB0ZWFtcy5zb3J0KCkgLCBkYXRlcyAsIHJvdW5kcyAsIHNlbGVjdGVkTWF0Y2hlcyA6IG1hdGNoZXMgfSlcclxuICAgICAgICAgICAgfSAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGhhbmRsZVBhZ2VDaGFuZ2UgPSAocGFnZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50UGFnZSA6IHBhZ2V9KTtcclxuICAgIH07XHJcbiAgICBoYW5kbGVSb3VuZEZpbHRlciA9IChyb3VuZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBbLi4udGhpcy5zdGF0ZS5tYXRjaGVzXTtcclxuICAgICAgICBpZiAocm91bmQgPT09ICdBbGwnKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkTWF0Y2hlcyA6IG1hdGNoZXMgLCBzZWxlY3RlZFJvdW5kIDonJ30pO1xyXG4gICAgICAgIH0gIFxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkTWF0Y2hlcyA9IG1hdGNoZXMuZmlsdGVyKCBtID0+IG0ucm91bmQgPT09IHJvdW5kKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRNYXRjaGVzICwgc2VsZWN0ZWRSb3VuZCA6IHJvdW5kICwgc2VsZWN0ZWRUZWFtIDogJycgLCBzZWxlY3RlZERhdGUgOiAnJyAsIGN1cnJlbnRQYWdlOiAxfSk7XHJcbiAgICAgICAgfSAgXHJcbiAgICB9O1xyXG4gICAgaGFuZGxlRGF0ZUZpbHRlciA9IChkYXRlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IFsuLi50aGlzLnN0YXRlLm1hdGNoZXNdO1xyXG4gICAgICAgIGlmIChkYXRlID09PSAnQWxsJyl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZE1hdGNoZXMgOiBtYXRjaGVzICwgc2VsZWN0ZWREYXRlIDonJ30pXHJcbiAgICAgICAgfSAgICAgIFxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkTWF0Y2hlcyA9IG1hdGNoZXMuZmlsdGVyKCBtID0+IG0uZGF0ZSA9PT0gZGF0ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkTWF0Y2hlcyAsIHNlbGVjdGVkRGF0ZSA6IGRhdGUgLCBzZWxlY3RlZFRlYW0gOiAnJyAsIHNlbGVjdGVkUm91bmQgOiAnJywgY3VycmVudFBhZ2U6IDF9KTtcclxuICAgICAgICB9ICBcclxuICAgIH07XHJcbiAgICBoYW5kbGVUZWFtRmlsdGVyID0gKHRlYW0pID0+IHtcclxuICAgICAgICBjb25zdCBtYXRjaGVzID0gWy4uLnRoaXMuc3RhdGUubWF0Y2hlc107XHJcbiAgICAgICAgaWYgKHRlYW0gPT09ICdBbGwnKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkTWF0Y2hlcyA6IG1hdGNoZXMgLCBzZWxlY3RlZFRlYW0gOiAnJywgY3VycmVudFBhZ2U6IDF9KVxyXG4gICAgICAgIH0gICAgICBcclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZE1hdGNoZXMgPSBtYXRjaGVzLmZpbHRlciggbSA9PiBtLmhvbWV0ZWFtID09PSB0ZWFtIHx8IG0uYXdheXRlYW0gPT09IHRlYW0pO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZE1hdGNoZXMgLCBzZWxlY3RlZFRlYW0gOiB0ZWFtICwgc2VsZWN0ZWREYXRlIDogJycgLCBzZWxlY3RlZFJvdW5kIDogJyd9KTtcclxuICAgICAgICB9ICBcclxuICAgIH07XHJcbiAgICBnZXRQYWdlZERhdGEgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBwYWdlU2l6ZSwgY3VycmVudFBhZ2UsIHNlbGVjdGVkTWF0Y2hlc30gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IG1hdGNoTGlzdFBlclBhZ2UgPSBwYWdpbmF0ZShzZWxlY3RlZE1hdGNoZXMsY3VycmVudFBhZ2UscGFnZVNpemUpO1xyXG4gICAgICAgIHJldHVybiB7IHRvdGFsQ291bnQ6IHNlbGVjdGVkTWF0Y2hlcy5sZW5ndGgsIGRhdGE6IG1hdGNoTGlzdFBlclBhZ2V9XHJcbiAgICB9XHJcbiAgICBwcmV2aW91c1BhZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHtjdXJyZW50UGFnZX0gPSB0aGlzLnN0YXRlXHJcbiAgICAgICAgaWYgKGN1cnJlbnRQYWdlID4xICl7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlLS1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFBhZ2V9KVxyXG4gICAgfSAgICBcclxuICAgIG5leHRQYWdlID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCB7Y3VycmVudFBhZ2Usc2VsZWN0ZWRNYXRjaGVzLHBhZ2VTaXplfSA9IHRoaXMuc3RhdGVcclxuICAgICAgICBpZiAoY3VycmVudFBhZ2UgPCBNYXRoLmNlaWwoc2VsZWN0ZWRNYXRjaGVzLmxlbmd0aCAvIHBhZ2VTaXplKSApe1xyXG4gICAgICAgICAgICBjdXJyZW50UGFnZSsrXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRQYWdlfSlcclxuICAgIH0gICAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBwYWdlU2l6ZSAsIGN1cnJlbnRQYWdlICwgc2VsZWN0ZWRSb3VuZCwgc2VsZWN0ZWREYXRlICwgc2VsZWN0ZWRUZWFtICwgZGF0ZXMgLCAgcm91bmRzICwgdGVhbXMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgeyB0b3RhbENvdW50ICwgZGF0YSB9ID0gdGhpcy5nZXRQYWdlZERhdGEoKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hdGNoZXNjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5QaGFzZSBGaW5hbGU8L2gxPjxoci8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duIGlzLWhvdmVyYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaWx0ZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXsnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e3JvdW5kc30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbT17c2VsZWN0ZWRSb3VuZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25JdGVtU2VsZWN0PXt0aGlzLmhhbmRsZVJvdW5kRmlsdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24gaXMtaG92ZXJhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpbHRlciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9eydEYXRlICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtkYXRlc30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbT17c2VsZWN0ZWREYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkl0ZW1TZWxlY3Q9e3RoaXMuaGFuZGxlRGF0ZUZpbHRlcn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duIGlzLWhvdmVyYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaWx0ZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXsnRXF1aXBlICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXt0ZWFtc30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbT17c2VsZWN0ZWRUZWFtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkl0ZW1TZWxlY3Q9e3RoaXMuaGFuZGxlVGVhbUZpbHRlcn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hdGNoZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5tYXAobWF0Y2ggPT5cclxuICAgICAgICAgICAgICAgICAgICA8QmV0cyBtYXRjaD17bWF0Y2h9IGtleT17bWF0Y2guX2lkfSBjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8UGFnaW5hdGlvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXNDb3VudD17dG90YWxDb3VudH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplPXtwYWdlU2l6ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblBhZ2VDaGFuZ2U9e3RoaXMuaGFuZGxlUGFnZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNQYWdlPXt0aGlzLnByZXZpb3VzUGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFBhZ2U9e3RoaXMubmV4dFBhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgIFxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IE1hdGNoZXM7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFJ1bGVzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWxlc1wiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGUgaXMtMVwiPkxlcyByw6hnbGVzIGR1IGpldTwvaDE+XHJcbiAgICAgICAgICAgIDx1bD4gICAgXHJcbiAgICAgICAgICAgICAgICA8bGk+T24gcGV1dCBwcm9ub3N0aXF1ZXIgbGUgcsOpc3VsdGF0IGRlIHRvdXMgbGVzIG1hdGNoZXMgKHBoYXNlcyBkZSBwb3VsZSBldCBwaGFzZSBmaW5hbGUgZMOocyBxdSdpbHMgc2Vyb250IGNvbm51cykuPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5PbiBwcm9ub3N0aXF1ZSBzdXIgbGUgcsOpc3VsdGF0IGR1IG1hdGNoIGFwcsOocyA5MCBtaW51dGVzIChwcm9sb25nYXRpb25zIGV0IHRpcnMgYXV4IGJ1dHMgbm9uIHByaXMgZW4gY29tcHRlKS48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPkxlcyBwcm9ub3N0aWNzIHBldXZlbnQgw6l0cmUgZMOpcG9zw6lzIG91IG1vZGlmacOpcyBqdXNxdSfDoCAxaCBhdmFudCBsZSBkw6lidXQgZHUgbWF0Y2guPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5VbiBwcm9ub3N0aWMgY29ycmVjdCBzYW5zIHNjb3JlIGV4YWN0IHJhcHBvcnRlIDIgcG9pbnRzIChcclxuICAgICAgICAgICAgICAgICAgICBleGVtcGxlID0gW1LDqXN1bHRhdCBJdGFsaWUgLSBUdXJxdWllID0gMi0xXSAsIFtwcm9ub3N0aWMgMyAtIDBdID0gcGFyaSBnYWduw6kpLjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+VW4gcHJvbm9zdGljIGNvcnJlY3QgYXZlYyBsZSBzY29yZSBleGFjdCByYXBwb3J0ZSAzIHBvaW50cy48L2xpPiBcclxuICAgICAgICAgICAgICAgIDxsaT5MZSBnYWduYW50IGdhZ25lIChldCBjJ2VzdCBiaWVuZykhPC9saT4gICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBSdWxlczsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFdlbGNvbWVNb2RhbCBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIG1vZGFsdmlldyA6IGZhbHNlLFxyXG4gICAgICAgIG1vZGFsc2hvdyA6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtcycpICE9PSAneSdcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bW9kYWx2aWV3OnRydWV9KVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3Qge21vZGFsdmlldyxtb2RhbHNob3d9ID0gdGhpcy5zdGF0ZVxyXG4gICAgICAgIHJldHVybiAoIFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7IG1vZGFsc2hvdyA/XHJcbiAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e21vZGFsdmlldz8nbW9kYWwgaXMtYWN0aXZlJzonbW9kYWwnfSBcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbG1lc3NhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbG9zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT57dGhpcy5zZXRTdGF0ZSh7bW9kYWx2aWV3OmZhbHNlfSk7bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ21zJywneScpfX0gXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDinJZcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQmllbnZlbnVlIHN1ciBjZSBzaXRlIGRlIHByb25vc3RpY3Mgc3VyIGxlcyBtYXRjaGVzIGwnVUVGQSBFVVJPIDIwMjA8c3VwPlRNPC9zdXA+Ljxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEljaSBxdWUgZHUgZnVuLCBwYXMgZGUgbWlzZXMgZCdhcmdlbnQsIGp1c3RlIHVuIHBldGl0IGpldSBncmF0dWl0IHBvdXIgc2UgZGl2ZXJ0aXIhLjxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEF1Y3VuZSBkb25uw6llIG5lIHNlcmEgY29sbGVjdMOpZSBvdSByZXZlbmR1ZSA8c3Bhbj7wn5iDPC9zcGFuPi5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFByw6p0IMOgIGpvdWVyP1xyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+e3RoaXMuc2V0U3RhdGUoe21vZGFsdmlldzpmYWxzZX0pO2xvY2FsU3RvcmFnZS5zZXRJdGVtKCdtcycsJ3knKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1wcmltYXJ5IGlzLWxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEMnZXN0IHBhcnRpICFcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj46XHJcbiAgICAgICAgICAgIG51bGx9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBXZWxjb21lTW9kYWw7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IExvYWRlciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGRzLXJvbGxlclwiPjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48L2Rpdj5cclxuICAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBKb2kgZnJvbSAnam9pLWJyb3dzZXInO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9pbnB1dCc7XHJcblxyXG5jbGFzcyBGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0geyBcclxuICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICBlcnJvcnM6IHt9XHJcbiAgICB9XHJcbiAgICB0b2FzdG9wdGlvbnMgPSB7XHJcbiAgICAgICAgcG9zaXRpb246IFwidG9wLWNlbnRlclwiLFxyXG4gICAgICAgIGF1dG9DbG9zZTogMTUwMCxcclxuICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgICBjbG9zZUJ1dHRvbjogZmFsc2UsXHJcbiAgICB9XHJcbiAgICB2YWxpZGF0ZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0ge2Fib3J0RWFybHkgOiBmYWxzZX07XHJcbiAgICAgICAgY29uc3Qge2Vycm9yfSA9IEpvaS52YWxpZGF0ZSh0aGlzLnN0YXRlLmRhdGEsIHRoaXMuc2NoZW1hICwgb3B0aW9ucyk7XHJcbiAgICAgICAgaWYgKCFlcnJvcikgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IGVycm9ycyA9IHt9O1xyXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgZXJyb3IuZGV0YWlscylcclxuICAgICAgICAgICAgZXJyb3JzW2l0ZW0ucGF0aFswXV0gPSBpdGVtLm1lc3NhZ2U7IFxyXG4gICAgICAgIHJldHVybiBlcnJvcnM7XHJcbiAgICB9O1xyXG4gICAgdmFsaWRhdGVQcm9wZXJ0eSA9ICh7bmFtZSx2YWx1ZX0pID0+IHtcclxuICAgICAgICBjb25zdCBvYmogPSB7IFtuYW1lXSA6IHZhbHVlfTtcclxuICAgICAgICBjb25zdCBzY2hlbWEgPSB7IFtuYW1lXSA6IHRoaXMuc2NoZW1hW25hbWVdfVxyXG4gICAgICAgIGxldCBlcnJvck1lc3NhZ2U7XHJcbiAgICAgICAgaWYgKEpvaS52YWxpZGF0ZShvYmosc2NoZW1hKS5lcnJvciAhPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIGlmIChbbmFtZV1bMF0gPT09ICd1c2VybmFtZScpeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBKb2kudmFsaWRhdGUob2JqLHNjaGVtYSkuZXJyb3IuZGV0YWlsc1swXS50eXBlO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2FueS5lbXB0eSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9ICdMZSBub20gZFxcJ3V0aWxpc2F0ZXVyIGRvaXQgw6p0cmUgcmVuc2VpZ27DqSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3N0cmluZy5tYXgnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSAnTGUgbm9tIGRcXCd1dGlsaXNhdGV1ciBuZSBwZXV0IGV4Y8OpZGVyIDQwIGNhcmFjdMOocmVzJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoW25hbWVdWzBdID09PSAncGFzc3dvcmQnKXsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yID0gSm9pLnZhbGlkYXRlKG9iaixzY2hlbWEpLmVycm9yLmRldGFpbHNbMF0udHlwZTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdhbnkuZW1wdHknOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSAnTGUgbW90IGRlIHBhc3NlIGRvaXQgw6p0cmUgcmVuc2VpZ27DqSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3N0cmluZy5taW4nOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSAnTGUgbW90IGRlIHBhc3NlIGRvaXQgY29udGVuaXIgYXUgbW9pbnMgOCBjYXJhY3TDqHJlcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnc3RyaW5nLm1heCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9ICdMZSBtb3QgZGUgcGFzc2UgbmUgZG9pdCBwYXMgZMOpcGFzc2VyIDI1IGNhcmFjdMOocmVzJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoW25hbWVdWzBdID09PSAnZW1haWwnKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yID0gSm9pLnZhbGlkYXRlKG9iaixzY2hlbWEpLmVycm9yLmRldGFpbHNbMF0udHlwZTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3N0cmluZy5lbWFpbCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9ICdWZXVpbGxleiByZW5zZWlnbmVyIHVuIGUtbWFpbCB2YWxpZGUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdhbnkuZW1wdHknOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSAnTFxcJ2FkcmVzc2UgRW1haWwgZG9pdCDDqnRyZSByZW5zZWlnbsOpZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoW25hbWVdWzBdID09PSAncGFzcycpe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBKb2kudmFsaWRhdGUob2JqLHNjaGVtYSkuZXJyb3IuZGV0YWlsc1swXS50eXBlO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2FueS5lbXB0eSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9ICdMZSBjb2RlIGRcXCdhY2PDqHMgZG9pdCDDqnRyZSByZW5zZWlnbsOpJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVycm9yTWVzc2FnZVxyXG4gICAgfTtcclxuICAgIGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyBcclxuICAgICAgICBjb25zdCBlcnJvcnMgPSB0aGlzLnZhbGlkYXRlKCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9ycyA6IGVycm9ycyB8fCB7fX0pO1xyXG4gICAgICAgIGlmIChlcnJvcnMpIHJldHVybjsgIFxyXG4gICAgICAgIHRoaXMuZG9TdWJtaXQoKTsgICAgIFxyXG4gICAgfTtcclxuICAgIGhhbmRsZUNoYW5nZSA9ICh7Y3VycmVudFRhcmdldCA6IGlucHV0fSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVycm9ycyA9IHsuLi50aGlzLnN0YXRlLmVycm9yc31cclxuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSB0aGlzLnZhbGlkYXRlUHJvcGVydHkoaW5wdXQpXHJcbiAgICAgICAgaWYgKGVycm9yTWVzc2FnZSkgZXJyb3JzW2lucHV0Lm5hbWVdID0gZXJyb3JNZXNzYWdlO1xyXG4gICAgICAgIGVsc2UgZGVsZXRlIGVycm9yc1tpbnB1dC5uYW1lXTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHsuLi50aGlzLnN0YXRlLmRhdGF9O1xyXG4gICAgICAgIGRhdGFbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRhICwgZXJyb3JzIH0pXHJcbiAgICB9XHJcbiAgICByZW5kZXJJbnB1dChuYW1lLGxhYmVsLHR5cGUsY2xhc3NOYW1lKXtcclxuICAgICAgICBjb25zdCB7IGRhdGEsIGVycm9ycyB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9IFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhW25hbWVdfSBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17bGFiZWx9IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzW25hbWVdfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgIH1cclxuICAgIHJlbmRlckJ1dHRvbihsYWJlbCxjbGFzc05hbWUpe1xyXG4gICAgICAgIHJldHVybiA8YnV0dG9uIGRpc2FibGVkPXt0aGlzLnZhbGlkYXRlKCl9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57bGFiZWx9PC9idXR0b24+XHJcbiAgICB9ICAgIFxyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgRm9ybTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgSW5wdXQgPSAoe25hbWUsIGxhYmVsLCB2YWx1ZSwgY2xhc3NOYW1lLCB0eXBlLCBlcnJvciwgb25DaGFuZ2V9KSA9PiB7XHJcbiAgICBcclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCIgaHRtbEZvcj17bmFtZX0+e2xhYmVsfTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17ZXJyb3I/ICdpc2Vycm9yICcrY2xhc3NOYW1lIDpjbGFzc05hbWV9IFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9e3R5cGV9IFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9IFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPXtuYW1lfS8+XHJcbiAgICAgICAgICAgICAgICAgICAge2Vycm9yICYmIDxwIGNsYXNzTmFtZT1cImVycm9ybXNnXCI+e2Vycm9yLnJlcGxhY2UoL1wiL2csJycpfS48L3A+fVxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmNvbnN0IFBhZ2luYXRpb24gPSAoe2l0ZW1zQ291bnQgLCBwYWdlU2l6ZSAsIGN1cnJlbnRQYWdlLCBvblBhZ2VDaGFuZ2UgLCBwcmV2aW91c1BhZ2UgLCBuZXh0UGFnZX0pID0+IHtcclxuICAgIGNvbnN0IHBhZ2VzQ291bnQgPSBNYXRoLmNlaWwoaXRlbXNDb3VudCAvIHBhZ2VTaXplKTtcclxuICAgIGlmKHBhZ2VzQ291bnQ9PT0xKSByZXR1cm4gbnVsbDtcclxuICAgIGNvbnN0IHBhZ2VzID0gXy5yYW5nZSgxLCBwYWdlc0NvdW50KzEpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwYWdpbmF0aW9uLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwYWdpbmF0aW9uLWxpbmtcIiBvbkNsaWNrPXtwcmV2aW91c1BhZ2V9PiYjNjA7PC9saT5cclxuICAgICAgICAgICAgICAgIHsgcGFnZXMubWFwKHBhZ2UgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3BhZ2V9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyBwYWdlID09PSBjdXJyZW50UGFnZT8gXCJwYWdpbmF0aW9uLWxpbmsgaXMtY3VycmVudFwiIDogXCJwYWdpbmF0aW9uLWxpbmtcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25QYWdlQ2hhbmdlKHBhZ2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApKX0gICAgICBcclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwYWdpbmF0aW9uLWxpbmtcIiBvbkNsaWNrPXtuZXh0UGFnZX0+JiM2Mjs8L2xpPiAgICAgICAgICBcclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L25hdj5cclxuICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBVc2VyTG9hZGVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZHMtcmlwcGxlXCI+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjwvZGl2PiAgICAgXHJcbiAgICAgICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJMb2FkZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEZvcm0gZnJvbSAnLi8uLi9jb21tb24vZm9ybSc7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyICwgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCBKb2kgZnJvbSAnam9pLWJyb3dzZXInO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY2xhc3MgUGFzc1VwZGF0ZSBleHRlbmRzIEZvcm0ge1xyXG4gICAgc3RhdGUgPSB7IFxyXG4gICAgICAgIGRhdGEgOiB7XHJcbiAgICAgICAgICAgIHBhc3N3b3JkIDogXCJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3JzIDoge30sIFxyXG4gICAgICAgIGJ1dHRvblRleHQgOiBcIlZhbGlkZXJcIlxyXG4gICAgfVxyXG4gICAgc2NoZW1hID0ge1xyXG4gICAgICAgIHBhc3N3b3JkIDogSm9pLnN0cmluZygpLnJlcXVpcmVkKCkubWluKDgpLm1heCgyNSksXHJcbiAgICB9XHJcbiAgICBkb1N1Ym1pdCgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZGF0YS5wYXNzd29yZCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cGFzc3dvcmQgOiB0aGlzLnN0YXRlLmRhdGEucGFzc3dvcmQgLCBsb2FkaW5nIDogdHJ1ZSAsIGJ1dHRvblRleHQgOiAnUGF0aWVudGV6Li4uLid9KTtcclxuICAgICAgICBjb25zdCBkYXRhID0geyB1c2VyIDogdGhpcy5wcm9wcy5hbGlhcywgcGFzc3dvcmQgOiB0aGlzLnN0YXRlLmRhdGEucGFzc3dvcmR9XHJcbiAgICAgICAgYXhpb3Moe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiAnYXBpL3VzZXIvdXBkYXRlUGFzc3dvcmQnLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7J1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnfVxyXG4gICAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICB0b2FzdC5zdWNjZXNzKCdNb3QgZGUgcGFzc2UgbW9kaWZpw6kgYXZlYyBzdWNjw6hzICEnLCB0aGlzLnRvYXN0b3B0aW9ucyk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoICgpID0+IHtkb2N1bWVudC5sb2NhdGlvbi5ocmVmPVwiL2xvZ2luXCIgfSwyMTAwKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7IFxyXG4gICAgICAgIGNvbnN0IHtidXR0b25UZXh0fSA9IHRoaXMuc3RhdGVcclxuICAgICAgICByZXR1cm4gKCBcclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJuZXdwYXNzLWZvcm1cIj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlcklucHV0KCdwYXNzd29yZCcsJ05vdXZlYXUgbW90IGRlIHBhc3NlICA6JywndGV4dCcsJ2lucHV0Jyl9XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJCdXR0b24oYnV0dG9uVGV4dCwnYnV0dG9uIGlzLXN1Y2Nlc3MnKX1cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgUGFzc1VwZGF0ZSA7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEZvcm0gZnJvbSAnLi4vY29tbW9uL2Zvcm0nO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciAsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgSm9pIGZyb20gJ2pvaS1icm93c2VyJztcclxuaW1wb3J0IFBhc3NVcGRhdGUgZnJvbSAnLi9wYXNzVXBkYXRlJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNsYXNzIFVzZXJDb25maXJtIGV4dGVuZHMgRm9ybSB7XHJcbiAgICBzdGF0ZSA9IHsgXHJcbiAgICAgICAgZGF0YSA6IHtcclxuICAgICAgICAgICAgdXNlcm5hbWUgOiBcIlwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICBlcnJvcnMgOiB7fSwgXHJcbiAgICBhbGlhcyA6IFwiXCIsXHJcbiAgICBidXR0b25UZXh0IDogXCJWYWxpZGVyXCIsXHJcbiAgICB1c2VycXVlcnkgOiB0cnVlXHJcbiAgICB9XHJcbiAgICBzY2hlbWEgPSB7XHJcbiAgICAgICAgdXNlcm5hbWUgOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKS5tYXgoNDApLFxyXG4gICAgfVxyXG4gICAgZG9TdWJtaXQoKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHthbGlhcyA6IHRoaXMuc3RhdGUuZGF0YS51c2VybmFtZSAsIGJ1dHRvblRleHQgOiAnUGF0aWVudGV6Li4uJ30pXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHsgdXNlcm5hbWUgOiB0aGlzLnN0YXRlLmRhdGEudXNlcm5hbWV9ICBcclxuICAgICAgICBheGlvcyh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6ICdhcGkvZ2V0VXNlck5hbWUnLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7J1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnfVxyXG4gICAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBpZihyZXMuZGF0YS51c2VyID09PSB0aGlzLnN0YXRlLmRhdGEudXNlcm5hbWUgKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3VzZXJxdWVyeSA6IGZhbHNlfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YTp7dXNlcm5hbWUgOiAnJ30sZXJyb3JzIDoge3VzZXJuYW1lIDogJyd9ICwgYnV0dG9uVGV4dCA6IFwiVmFsaWRlclwifSk7XHJcbiAgICAgICAgICAgICAgICB0b2FzdC5lcnJvcignTGUgbm9tIGRcXCd1dGlsaXNhdGV1ciBuXFwnZXhpc3RlIHBhcycsIHRoaXMudG9hc3RvcHRpb25zKTsgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHsgXHJcbiAgICAgICAgY29uc3QgeyB1c2VycXVlcnkgLCBhbGlhcyAsIGJ1dHRvblRleHQgfSA9IHRoaXMuc3RhdGVcclxuICAgICAgICByZXR1cm4gKCBcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lci8+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5SZW5vdXZlbGxlbWVudCBkZSBtb3QgZGUgcGFzc2U8L2gxPlxyXG4gICAgICAgICAgICAgICAge3VzZXJxdWVyeT88Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cIm5ld3Bhc3MtZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlcklucHV0KCd1c2VybmFtZScsJ1ZvdHJlIG5vbSBkXFwndXRpbGlzYXRldXIgIDonLCd0ZXh0JywnaW5wdXQnKX1cclxuICAgICAgICAgICAgICAgICAgICB7dXNlcnF1ZXJ5PyB0aGlzLnJlbmRlckJ1dHRvbihidXR0b25UZXh0LCdidXR0b24gaXMtc3VjY2VzcycpIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvZm9ybT46XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0aXRsZSBpcy02XCI+Vm90cmUgTm9tIGQndXRpbGlzYXRldXIgOiA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPnt0aGlzLnN0YXRlLmRhdGEudXNlcm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAge3VzZXJxdWVyeT8gbnVsbCA6IDxQYXNzVXBkYXRlIGFsaWFzPXthbGlhc30vPn1cclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJDb25maXJtOyIsImltcG9ydCBSZWFjdCAsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNsYXNzIFNldFNjb3JlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0geyBcclxuICAgICAgICB1c2VycyA6IFtdLFxyXG4gICAgICAgIG1hdGNoZXMgOiBbXSxcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgdGhpcy5nZXREYXRhKCk7XHJcbiAgICAgICAgdGhpcy5nZXRNYXRjaGVzKClcclxuICAgIH1cclxuICAgIGdldERhdGEoKXtcclxuICAgICAgICBheGlvcy5nZXQoJy9hcGkvdXNlci9nZXRVc2Vyc2FuZEJldHMnKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJzID0gcmVzLmRhdGEudXNlcnM7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3VzZXJzfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGdldE1hdGNoZXMoKXsgICAgICAgIFxyXG4gICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgIC5nZXQoYGh0dHBzOi8vcG9ydGZvbGlvLTcyMTQ3LWRlZmF1bHQtcnRkYi5ldXJvcGUtd2VzdDEuZmlyZWJhc2VkYXRhYmFzZS5hcHAvbWF0Y2hlcy5qc29uYClcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge3RoaXMuc2V0U3RhdGUoe21hdGNoZXMgOiByZXMuZGF0YX0pfSlcclxuICAgICAgICB9XHJcbiAgICBnZXRQb2ludHModXNlcmlkKXtcclxuICAgICAgICBjb25zdCB1c2VycyA9IFsuLi50aGlzLnN0YXRlLnVzZXJzXTtcclxuICAgICAgICBjb25zdCBtYXRjaGVzID0gWy4uLnRoaXMuc3RhdGUubWF0Y2hlc107XHJcbiAgICAgICAgY29uc3QgdXNlciA9IHVzZXJzLmZpbmQodSA9PiB1LnVzZXJfaWQgPT09IHVzZXJpZCk7XHJcbiAgICAgICAgY29uc3QgYmV0cyA9IHVzZXIuYmV0cztcclxuICAgICAgICBsZXQgdXNlcnBvaW50cyA9IDA7XHJcbiAgICAgICAgZm9yICggbGV0IGkgPSAwIDsgaSA8IG1hdGNoZXMubGVuZ3RoIDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yICggbGV0IGogPSAwIDsgaiA8IGJldHMubGVuZ3RoIDsgaisrKXsgICAgXHJcbiAgICAgICAgICAgICAgICBpZigobWF0Y2hlc1tpXS5faWQgPT0gYmV0c1tqXS5tYXRjaF9pZCAmJiAobWF0Y2hlc1tpXS5ob21lc2NvcmUgJiYgbWF0Y2hlc1tpXS5hd2F5c2NvcmUgIT09IFwiXCIpKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYmV0c1tqXS5ob21lc2NvcmUgPiBiZXRzW2pdLmF3YXlzY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1hdGNoZXNbaV0uaG9tZXNjb3JlID4gbWF0Y2hlc1tpXS5hd2F5c2NvcmUgJiYgbWF0Y2hlc1tpXS5ob21lc2NvcmUgPT0gYmV0c1tqXS5ob21lc2NvcmUgJiYgbWF0Y2hlc1tpXS5hd2F5c2NvcmUgPT0gYmV0c1tqXS5hd2F5c2NvcmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnBvaW50cyArPSAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKG1hdGNoZXNbaV0uaG9tZXNjb3JlID4gbWF0Y2hlc1tpXS5hd2F5c2NvcmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnBvaW50cyArPSAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYmV0c1tqXS5ob21lc2NvcmUgPCBiZXRzW2pdLmF3YXlzY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1hdGNoZXNbaV0uaG9tZXNjb3JlIDwgbWF0Y2hlc1tpXS5hd2F5c2NvcmUgJiYgbWF0Y2hlc1tpXS5ob21lc2NvcmUgPT0gYmV0c1tqXS5ob21lc2NvcmUgJiYgbWF0Y2hlc1tpXS5hd2F5c2NvcmUgPT0gYmV0c1tqXS5hd2F5c2NvcmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnBvaW50cyArPSAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYobWF0Y2hlc1tpXS5ob21lc2NvcmUgPCBtYXRjaGVzW2ldLmF3YXlzY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VycG9pbnRzICs9IDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZihiZXRzW2pdLmhvbWVzY29yZSA9PT0gYmV0c1tqXS5hd2F5c2NvcmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihtYXRjaGVzW2ldLmhvbWVzY29yZSA9PT0gbWF0Y2hlc1tpXS5hd2F5c2NvcmUgJiYgbWF0Y2hlc1tpXS5ob21lc2NvcmUgPT0gYmV0c1tqXS5ob21lc2NvcmUgJiYgbWF0Y2hlc1tpXS5hd2F5c2NvcmUgPT0gYmV0c1tqXS5hd2F5c2NvcmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnBvaW50cyArPSAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihtYXRjaGVzW2ldLmhvbWVzY29yZSA9PT0gbWF0Y2hlc1tpXS5hd2F5c2NvcmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnBvaW50cyArPSAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB1c2VycG9pbnRzXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7dXNlcnN9ID0gdGhpcy5zdGF0ZVxyXG4gICAgICAgIHJldHVybiAoIFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge3VzZXJzLm1hcCh1c2VyID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXt1c2VyLnVzZXJfaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPnt1c2VyLnVzZXJuYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD57dGhpcy5nZXRQb2ludHModXNlci51c2VyX2lkKX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gaXMtcHJpbWFyeVwiPkVudm95ZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBTZXRTY29yZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSm9pIGZyb20gJ2pvaS1icm93c2VyJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyB0b2FzdCwgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4vY29tbW9uL2Zvcm0nO1xyXG5pbXBvcnQgVXNlckxvYWRlciBmcm9tICcuL2NvbW1vbi91c2VybG9hZGVyJztcclxuXHJcbmNsYXNzIFNpZ251cCBleHRlbmRzIEZvcm0ge1xyXG4gICAgc3RhdGUgPSB7IFxyXG4gICAgICAgIGRhdGEgOiB7XHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZSA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZCA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBlbWFpbCA6IFwiXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBlcnJvcnMgOiB7fSxcclxuICAgICAgICBsb2FkaW5nIDogZmFsc2UsXHJcbiAgICAgICAgYnV0dG9uVGV4dCA6IFwiVmFsaWRlclwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgIHNjaGVtYSA9IHtcclxuICAgICAgICB1c2VybmFtZSA6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLm1heCg0MCksXHJcbiAgICAgICAgcGFzc3dvcmQgOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKS5taW4oOCkubWF4KDI1KSxcclxuICAgICAgICBlbWFpbCA6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLmVtYWlsKClcclxuICAgIH1cclxuICAgIGRvU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6dHJ1ZSAsIGJ1dHRvblRleHQ6IFwiQ2hhcmdlbWVudC4uLlwifSlcclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICB1c2VybmFtZSA6IHRoaXMuc3RhdGUuZGF0YS51c2VybmFtZSxcclxuICAgICAgICAgICAgcGFzc3dvcmQgOiB0aGlzLnN0YXRlLmRhdGEucGFzc3dvcmQsXHJcbiAgICAgICAgICAgIGVtYWlsIDogdGhpcy5zdGF0ZS5kYXRhLmVtYWlsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF4aW9zKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogJ2FwaS91c2VyL25ldycsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCd9ICAgICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzpmYWxzZSAsIGJ1dHRvblRleHQgOiBcIlZhbGlkZXJcIn0pXHJcbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICB0b2FzdC5zdWNjZXNzKHJlcy5kYXRhLm1lc3NhZ2UsIHRoaXMudG9hc3RvcHRpb25zKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvbG9naW4nKX0sMTYwMCl9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOmZhbHNlLCBidXR0b25UZXh0IDogXCJWYWxpZGVyXCJ9KVxyXG4gICAgICAgICAgICB0b2FzdC5lcnJvcignTGUgbm9tIGRcXCd1dGlsaXNhdGV1ciBlc3QgZMOpamEgdXRpbGlzw6knLCB0aGlzLnRvYXN0b3B0aW9ucyk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHsgXHJcbiAgICAgICAgY29uc3QgeyBsb2FkaW5nIH0gPSB0aGlzLnN0YXRlXHJcbiAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8VG9hc3RDb250YWluZXIvPlxyXG4gICAgICAgICAgICAgICAge2xvYWRpbmcgPT09IHRydWUgPyA8VXNlckxvYWRlci8+IDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5DcsOpZXIgdW4gbm91dmVhdSBjb21wdGU8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgyPlZvdXMgYXZleiBkw6lqYSB1biBjb21wdGU/IENsaXF1ZXogPExpbmsgdG89XCJsb2dpblwiPmljaTwvTGluaz4gcG91ciB2b3VzIGNvbm5lY3RlcjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInNpZ251cC1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVySW5wdXQoJ3VzZXJuYW1lJywnQ2hvaXNpciB1biBOb20gZFxcJ3V0aWxpc2F0ZXVyICA6JywndGV4dCcsJ2lucHV0Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVySW5wdXQoJ2VtYWlsJywnUmVuc2VpZ25lciB1bmUgYWRyZXNzZSBFbWFpbCAgOicsJ3RleHQnLCdpbnB1dCcpfVxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlcklucHV0KCdwYXNzd29yZCcsJ0Nyw6llciB1biBNb3QgZGUgcGFzc2UgIDonLCdwYXNzd29yZCcsJ2lucHV0Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBpcy1ncm91cGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckJ1dHRvbignVmFsaWRlcicsJ2J1dHRvbiBpcy1zdWNjZXNzJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2hvbWVcIiBjbGFzc05hbWU9XCJidXR0b24gaXMtaW5mb1wiPkFubnVsZXI8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBTaWdudXA7IiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYWdpbmF0ZShpdGVtcyxwYWdlTnVtYmVyLHBhZ2VTaXplKXtcclxuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSAocGFnZU51bWJlciAtIDEpICogcGFnZVNpemU7XHJcbiAgICByZXR1cm4gXyhpdGVtcykuc2xpY2Uoc3RhcnRJbmRleCkudGFrZShwYWdlU2l6ZSkudmFsdWUoKTtcclxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=