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
/* harmony import */ var _components_Ranking__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Ranking */ "./assets/components/Ranking.js");
/* harmony import */ var _components_passupdate_userConfirm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/passupdate/userConfirm */ "./assets/components/passupdate/userConfirm.js");
/* harmony import */ var _components_Rules__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/Rules */ "./assets/components/Rules.js");













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
  component: _components_passupdate_userConfirm__WEBPACK_IMPORTED_MODULE_10__.default
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
  path: "/ranking",
  component: _components_Ranking__WEBPACK_IMPORTED_MODULE_9__.default
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
  path: "/rules",
  component: _components_Rules__WEBPACK_IMPORTED_MODULE_11__.default
}), sessionStorage.getItem('connected') === 'true' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
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
      }, toast ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32__.createElement(react_toastify__WEBPACK_IMPORTED_MODULE_38__.ToastContainer, null) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32__.createElement("h3", null, match.date, " - ", match.time), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32__.createElement("h4", null, "Groupe ", match.group), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32__.createElement("p", null, match.location), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32__.createElement("pre", {
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
      }, "Phase de Groupe"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {
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
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__);
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
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _common_Loader__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./common/Loader */ "./assets/components/common/Loader.js");
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
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getData();
      this.getMatches();
    }
  }, {
    key: "getData",
    value: function getData() {
      var _this2 = this;

      this.setState({
        loading: true
      });
      axios__WEBPACK_IMPORTED_MODULE_19___default().get('/api/user/getUsersandBets').then(function (res) {
        var users = res.data.users;

        _this2.setState({
          users: users,
          loading: false
        });
      });
    }
  }, {
    key: "getMatches",
    value: function getMatches() {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_19___default().get("https://portfolio-72147-default-rtdb.europe-west1.firebasedatabase.app/matches.json").then(function (res) {
        _this3.setState({
          matches: res.data
        });
      });
    }
  }, {
    key: "getScores",
    value: function getScores(userid) {
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
      console.log(user);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          users = _this$state.users,
          loading = _this$state.loading;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18__.createElement("div", {
        className: "table-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18__.createElement("h2", {
        className: "title is-2"
      }, "Classement"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18__.createElement("h1", {
        className: "title is-1"
      }, "Classement \xE0 venir!!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18__.createElement("iframe", {
        src: "https://gfycat.com/ifr/CheeryVagueElkhound",
        frameBorder: "0",
        scrolling: "no",
        width: "640",
        height: "361"
      }));
    }
  }]);

  return Ranking;
}(react__WEBPACK_IMPORTED_MODULE_18__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ranking);

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_axios_index_js-node_modules_core-js_modules_es_array_concat_js-node_modu-9b7ae9"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0FjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQmV0cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Db21pbmdNYXRjaGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Mb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9NYXRjaGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1JhbmtpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvUnVsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvV2VsY29tZU1vZGFsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2NvbW1vbi9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvY29tbW9uL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvY29tbW9uL2lucHV0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2NvbW1vbi9wYWdpbmF0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2NvbW1vbi91c2VybG9hZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3Bhc3N1cGRhdGUvcGFzc1VwZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9wYXNzdXBkYXRlL3VzZXJDb25maXJtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3NpZ251cC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdXRpbGl0aWVzL3BhZ2luYXRlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcyJdLCJuYW1lcyI6WyJSZWFjdERPTSIsIkhvbWUiLCJNYXRjaGVzIiwiU2lnbnVwIiwiTG9naW4iLCJVc2VyQ29uZmlybSIsIlJhbmtpbmciLCJSdWxlcyIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsIkFjY291bnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibG9hZGluZyIsImlkIiwibG9jYWxTdG9yYWdlIiwidXNlcm5hbWUiLCJiZXRzIiwibWF0Y2hlcyIsImN1cnJlbnRQYWdlIiwicGFnZVNpemUiLCJzdGF0ZSIsImJldHNMaXN0UGVyUGFnZSIsInBhZ2luYXRlIiwidG90YWxDb3VudCIsImxlbmd0aCIsImRhdGEiLCJzZXRTdGF0ZSIsIk1hdGgiLCJjZWlsIiwicGFnZSIsImdldFVzZXJCeUlkIiwiZ2V0TWF0Y2hlcyIsImF4aW9zIiwidGhlbiIsInJlcyIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJOdW1iZXIiLCJtZXRob2QiLCJ1cmwiLCJoZWFkZXJzIiwiZ2V0UGFnZWREYXRhIiwidG9VcHBlckNhc2UiLCJtYXAiLCJiZXQiLCJtYXRjaF9pZCIsImJldF9kYXRlIiwiZGF0ZSIsInNsaWNlIiwic3BsaXQiLCJyZXZlcnNlIiwiam9pbiIsImhvbWV0ZWFtIiwiYXdheXRlYW0iLCJob21lc2NvcmUiLCJhd2F5c2NvcmUiLCJtYXRjaCIsIl9pZCIsImhhbmRsZVBhZ2VDaGFuZ2UiLCJwcmV2aW91c1BhZ2UiLCJuZXh0UGFnZSIsIkNvbXBvbmVudCIsIkJldHMiLCJoaWRkZW4iLCJob21lcmVzdWx0IiwiYXdheXJlc3VsdCIsImVycm9ycyIsImJldHN0YXR1cyIsInRvYXN0IiwiY29ubmVjdGVkIiwidmFsaWRhdGlvbmRhdGUiLCJKb2kiLCJyZXF1aXJlZCIsIm9wdGlvbnMiLCJhYm9ydEVhcmx5Iiwic2NoZW1hIiwiZXJyb3IiLCJkZXRhaWxzIiwiaXRlbSIsInBhdGgiLCJtZXNzYWdlIiwiaW5wdXQiLCJjdXJyZW50VGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidmFsaWRhdGUiLCJkb1N1Ym1pdCIsIm1hdGNoaWQiLCJwcm9wcyIsImJldGlkIiwidXVpZHY0Iiwic3RhdHVzIiwicG9zaXRpb24iLCJhdXRvQ2xvc2UiLCJoaWRlUHJvZ3Jlc3NCYXIiLCJjbG9zZU9uQ2xpY2siLCJjbG9zZUJ1dHRvbiIsInNldFRpbWVvdXQiLCJsb2NhdGlvbiIsImhyZWYiLCJnZXRCZXRzIiwiZ2V0VmFsaWRhdGlvbkRhdGUiLCJzb3VyY2UiLCJjYW5jZWwiLCJtYXRjaGRhdGUiLCJEYXRlIiwiZGF5IiwibmV3ZGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsIm1hdGNodGltZSIsInRpbWUiLCJnZXRIb3VycyIsInVzZXJpZCIsImNhbmNlbFRva2VuIiwidG9rZW4iLCJpc0ludGVnZXIiLCJpbnB1dGVycm9ycyIsImdyb3VwIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVTdWJtaXQiLCJDb21pbmdNYXRjaGVzIiwiRmlsdGVyIiwiaXRlbXMiLCJvbkl0ZW1TZWxlY3QiLCJzZWxlY3RlZEl0ZW0iLCJsYWJlbCIsInRvTG93ZXJDYXNlIiwiSGVhZGVyIiwibW9iaWxlbWVudSIsImlzQWN0aXZlIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJ3aW5kb3ciLCJyZXBsYWNlIiwib25Mb2dvdXQiLCJzaG93bW9kYWwiLCJnZXRVc2VyIiwic2hvd01vZGFsIiwiaSIsInB1c2giLCJoZWlnaHQiLCJ3aWR0aCIsInBhc3N3b3JkIiwiZXJyb3JzY291bnQiLCJidXR0b25UZXh0IiwibWF4IiwibWluIiwidG9hc3RvcHRpb25zIiwicmVuZGVySW5wdXQiLCJyZW5kZXJCdXR0b24iLCJGb3JtIiwic2VsZWN0ZWRNYXRjaGVzIiwiZ3JvdXBzIiwic2VsZWN0ZWRHcm91cCIsImRhdGVzIiwic2VsZWN0ZWREYXRlIiwidGVhbXMiLCJzZWxlY3RlZFRlYW0iLCJmaWx0ZXIiLCJtIiwidGVhbSIsIm1hdGNoTGlzdFBlclBhZ2UiLCJzZWFyY2giLCJOYU4iLCJpbmNsdWRlcyIsInNpbmdsZW1hdGNoIiwiZmluZCIsInNvcnQiLCJoYW5kbGVHcm91cEZpbHRlciIsImhhbmRsZURhdGVGaWx0ZXIiLCJoYW5kbGVUZWFtRmlsdGVyIiwidXNlcnMiLCJnZXREYXRhIiwidXNlciIsInUiLCJ1c2VyX2lkIiwidXNlcnBvaW50cyIsImoiLCJXZWxjb21lTW9kYWwiLCJtb2RhbHZpZXciLCJtb2RhbHNob3ciLCJMb2FkZXIiLCJvYmoiLCJlcnJvck1lc3NhZ2UiLCJ0eXBlIiwidmFsaWRhdGVQcm9wZXJ0eSIsImNsYXNzTmFtZSIsIklucHV0Iiwib25DaGFuZ2UiLCJQYWdpbmF0aW9uIiwiaXRlbXNDb3VudCIsIm9uUGFnZUNoYW5nZSIsInBhZ2VzQ291bnQiLCJwYWdlcyIsIl8iLCJVc2VyTG9hZGVyIiwiUGFzc1VwZGF0ZSIsImFsaWFzIiwidXNlcnF1ZXJ5IiwiZW1haWwiLCJoaXN0b3J5IiwicGFnZU51bWJlciIsInN0YXJ0SW5kZXgiLCJ0YWtlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSw2Q0FBQSxlQUVJLGlEQUFDLDREQUFELHFCQUNJLGlEQUFDLHVEQUFELE9BREosZUFFSSw0RUFDSSxpREFBQyxxREFBRCxxQkFDSSxpREFBQyxvREFBRDtBQUFPLE1BQUksRUFBQyxPQUFaO0FBQW9CLFdBQVMsRUFBRUMscURBQUlBO0FBQW5DLEVBREosZUFFSSxpREFBQyxvREFBRDtBQUFPLE1BQUksRUFBQyxVQUFaO0FBQXVCLFdBQVMsRUFBRUMsd0RBQU9BO0FBQXpDLEVBRkosZUFHSSxpREFB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QU9tTCw2Q0FBQyxDQUFDeEUsS0FBRCxDQUFELENBQVM3RSxLQUFULENBQWU2SixVQUFmLEVBQTJCQyxJQUEzQixDQUFnQzVMLFFBQWhDLEVBQTBDa0UsS0FBMUMsRUFBUDtBQUNILEM7Ozs7Ozs7Ozs7OztBQ0xEIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBTd2l0Y2gsIFJvdXRlLCBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlcidcbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9Ib21lJztcbmltcG9ydCBNYXRjaGVzIGZyb20gJy4vY29tcG9uZW50cy9NYXRjaGVzJztcbmltcG9ydCBTaWdudXAgZnJvbSAnLi9jb21wb25lbnRzL3NpZ251cCc7XG5pbXBvcnQgTG9naW4gZnJvbSAnLi9jb21wb25lbnRzL0xvZ2luJztcbmltcG9ydCBBY2NvdW50IGZyb20gJy4vY29tcG9uZW50cy9BY2NvdW50JztcbmltcG9ydCBSYW5raW5nIGZyb20gJy4vY29tcG9uZW50cy9SYW5raW5nJztcbmltcG9ydCBVc2VyQ29uZmlybSBmcm9tICcuL2NvbXBvbmVudHMvcGFzc3VwZGF0ZS91c2VyQ29uZmlybSc7XG5pbXBvcnQgUnVsZXMgZnJvbSAnLi9jb21wb25lbnRzL1J1bGVzJztcbiAgICBcblJlYWN0RE9NLnJlbmRlcihcblxuICAgIDxSb3V0ZXI+XG4gICAgICAgIDxIZWFkZXIvPlxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvaG9tZVwiIGNvbXBvbmVudD17SG9tZX0vPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL21hdGNoZXNcIiBjb21wb25lbnQ9e01hdGNoZXN9Lz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9zaWdudXBcIiBjb21wb25lbnQ9e1NpZ251cH0vPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2xvZ2luXCIgY29tcG9uZW50PXtMb2dpbn0vPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL25ld3Bhc3N3b3JkL1wiIGNvbXBvbmVudD17VXNlckNvbmZpcm19Lz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9yYW5raW5nXCIgY29tcG9uZW50PXtSYW5raW5nfS8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcnVsZXNcIiBjb21wb25lbnQ9e1J1bGVzfS8+XG4gICAgICAgICAgICAgICAge3Nlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2Nvbm5lY3RlZCcpPT09J3RydWUnP1xuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hY2NvdW50XCIgY29tcG9uZW50PXtBY2NvdW50fS8+OlxuICAgICAgICAgICAgICAgICAgICA8UmVkaXJlY3QgdG89XCIvaG9tZVwiIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGV4YWN0ID5cbiAgICAgICAgICAgICAgICAgICAgPFJlZGlyZWN0IHRvPVwiL2hvbWVcIiAvPlxuICAgICAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICAgICAgPFJlZGlyZWN0IHRvPVwiL2hvbWVcIi8+XG4gICAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgPC9tYWluPlxuICAgICAgICBcbiAgICA8L1JvdXRlcj4gICAgXG4gICAgXG4gICAgLGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9jb21tb24vTG9hZGVyJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgUmVhY3RUb29sdGlwIGZyb20gJ3JlYWN0LXRvb2x0aXAnO1xyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuL2NvbW1vbi9wYWdpbmF0aW9uJztcclxuaW1wb3J0IHsgcGFnaW5hdGUgfSBmcm9tICcuLi91dGlsaXRpZXMvcGFnaW5hdGUnO1xyXG5cclxuY2xhc3MgQWNjb3VudCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhdGUgPSB7IFxyXG4gICAgICAgIGxvYWRpbmcgOiB0cnVlLFxyXG4gICAgICAgIGlkOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWQnKSxcclxuICAgICAgICB1c2VybmFtZSA6IFwiXCIsXHJcbiAgICAgICAgYmV0cyA6IFtdLFxyXG4gICAgICAgIG1hdGNoZXMgOiBbXSxcclxuICAgICAgICBjdXJyZW50UGFnZSA6IDEgLFxyXG4gICAgICAgIHBhZ2VTaXplIDogMTAsXHJcbiAgICB9O1xyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICB0aGlzLmdldFVzZXJCeUlkKCk7XHJcbiAgICAgICAgdGhpcy5nZXRNYXRjaGVzKCk7XHJcbiAgICB9O1xyXG4gICAgZ2V0TWF0Y2hlcygpeyAgICAgICAgXHJcbiAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgLmdldChgaHR0cHM6Ly9wb3J0Zm9saW8tNzIxNDctZGVmYXVsdC1ydGRiLmV1cm9wZS13ZXN0MS5maXJlYmFzZWRhdGFiYXNlLmFwcC9tYXRjaGVzLmpzb25gKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7dGhpcy5zZXRTdGF0ZSh7bWF0Y2hlcyA6IHJlcy5kYXRhfSl9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge2NvbnNvbGUubG9nKGVycil9KVxyXG4gICAgfTtcclxuICAgIGdldFVzZXJCeUlkKCl7XHJcbiAgICAgICAgY29uc3QgaWQgPSBOdW1iZXIodGhpcy5zdGF0ZS5pZCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHsgaWQgOiBpZH07XHJcbiAgICAgICAgYXhpb3Moe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiAnYXBpL3VzZXIvZ2V0VXNlckJ5SWQnLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7J1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnfSAgICAgXHJcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt1c2VybmFtZTpyZXMuZGF0YX0pXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXhpb3Moe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiAnYXBpL2dldGJldHNCeVVzZXInLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7J1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnfSAgICAgXHJcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtiZXRzIDogcmVzLmRhdGEgLCBsb2FkaW5nIDogZmFsc2V9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG4gICAgZ2V0UGFnZWREYXRhID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgcGFnZVNpemUsIGN1cnJlbnRQYWdlLCBiZXRzfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgYmV0c0xpc3RQZXJQYWdlID0gcGFnaW5hdGUoYmV0cyxjdXJyZW50UGFnZSxwYWdlU2l6ZSk7XHJcbiAgICAgICAgcmV0dXJuIHsgdG90YWxDb3VudDogYmV0cy5sZW5ndGgsIGRhdGE6IGJldHNMaXN0UGVyUGFnZX1cclxuICAgIH1cclxuICAgIHByZXZpb3VzUGFnZSA9ICgpID0+IHtcclxuICAgICAgICBsZXQge2N1cnJlbnRQYWdlfSA9IHRoaXMuc3RhdGVcclxuICAgICAgICBpZiAoY3VycmVudFBhZ2UgPjEgKXtcclxuICAgICAgICAgICAgY3VycmVudFBhZ2UtLVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50UGFnZX0pXHJcbiAgICB9ICAgIFxyXG4gICAgbmV4dFBhZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHtjdXJyZW50UGFnZSxiZXRzLHBhZ2VTaXplfSA9IHRoaXMuc3RhdGVcclxuICAgICAgICBpZiAoY3VycmVudFBhZ2UgPCBNYXRoLmNlaWwoYmV0cy5sZW5ndGggLyBwYWdlU2l6ZSkgKXtcclxuICAgICAgICAgICAgY3VycmVudFBhZ2UrK1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50UGFnZX0pXHJcbiAgICB9ICAgIFxyXG4gICAgaGFuZGxlUGFnZUNoYW5nZSA9IChwYWdlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRQYWdlIDogcGFnZX0pO1xyXG4gICAgfTtcclxuICAgIHJlbmRlcigpIHsgXHJcbiAgICAgICAgY29uc3Qge3VzZXJuYW1lICwgbG9hZGluZyAsIGJldHMgLCBtYXRjaGVzICwgcGFnZVNpemUgLGN1cnJlbnRQYWdlfSA9IHRoaXMuc3RhdGVcclxuICAgICAgICBjb25zdCB7IHRvdGFsQ291bnQgLCBkYXRhIH0gPSB0aGlzLmdldFBhZ2VkRGF0YSgpO1xyXG4gICAgICAgIHJldHVybiAoICAgICBcclxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlIGlzLTJcIj5Nb24gQ29tcHRlPC9oMj5cclxuICAgICAgICAgICAgICAgIHtsb2FkaW5nPyA8TG9hZGVyLz46XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY291bnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5Nb24gZXNwYWNlPC9wPiBcclxuICAgICAgICAgICAgICAgICAgICA8ZW0gY2xhc3NOYW1lPVwidXNlcm5hbWVcIj57dXNlcm5hbWUudG9VcHBlckNhc2UoKX08L2VtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxocj48L2hyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0aXRsZSBpcy02XCI+TWVzIHByb25vcyA6PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5sZW5ndGggPiAwID8gXHJcbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkRhdGUgZHUgcHJvbm88L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5NYXRjaDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk1vbiBwcm9ub3N0aWM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Sw6lzdWx0YXQgZHUgbWF0Y2g8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TdGF0dXQgZHUgcHJvbm88L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoYmV0ID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17YmV0Lm1hdGNoX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtiZXQuYmV0X2RhdGUuZGF0ZS5zbGljZSgwLDEwKS5zcGxpdCgnLScpLnJldmVyc2UoKS5qb2luKCcvJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AvaW1hZ2VzLyR7YmV0LmhvbWV0ZWFtfS5zdmdgfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjVweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob21laW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtiZXQuaG9tZXRlYW19IC0ge2JldC5hd2F5dGVhbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AvaW1hZ2VzLyR7YmV0LmF3YXl0ZWFtfS5zdmdgfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjVweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhd2F5aW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57YmV0LmhvbWVzY29yZX0gLSB7YmV0LmF3YXlzY29yZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttYXRjaGVzLm1hcChtYXRjaCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2guaG9tZXNjb3JlICYmIG1hdGNoLl9pZCA9PT0gYmV0Lm1hdGNoX2lkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e21hdGNoLl9pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21hdGNoLmhvbWVzY29yZX0gLSB7bWF0Y2guYXdheXNjb3JlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1hdGNoLmhvbWVzY29yZSA9PT0gJycgJiYgbWF0Y2guX2lkID09PSBiZXQubWF0Y2hfaWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8dGQga2V5PXttYXRjaC5faWR9Pk1hdGNoIMOgIHZlbmlyPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVzLm1hcChtYXRjaCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZigobWF0Y2guX2lkID09IGJldC5tYXRjaF9pZCAmJiAobWF0Y2guaG9tZXNjb3JlICYmIG1hdGNoLmF3YXlzY29yZSAhPT0gXCJcIikpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihiZXQuaG9tZXNjb3JlID4gYmV0LmF3YXlzY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1hdGNoLmhvbWVzY29yZSA+IG1hdGNoLmF3YXlzY29yZSAmJiBtYXRjaC5ob21lc2NvcmUgPT0gYmV0LmhvbWVzY29yZSAmJiBtYXRjaC5hd2F5c2NvcmUgPT0gYmV0LmF3YXlzY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRkIGNsYXNzTmFtZT1cIndvbjNcIiBrZXk9e21hdGNoLl9pZH0+UGFyaSBHYWduw6kgISAzIHBvaW50cyE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYobWF0Y2guaG9tZXNjb3JlID4gbWF0Y2guYXdheXNjb3JlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8dGQgY2xhc3NOYW1lPVwid29uMlwiIGtleT17bWF0Y2guX2lkfT5QYXJpIEdhZ27DqSAhIDIgcG9pbnRzITwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8dGQgY2xhc3NOYW1lPVwibG9zZVwiIGtleT17bWF0Y2guX2lkfT5QYXJpIHBlcmR1PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihiZXQuaG9tZXNjb3JlIDwgYmV0LmF3YXlzY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1hdGNoLmhvbWVzY29yZSA8IG1hdGNoLmF3YXlzY29yZSAmJiBtYXRjaC5ob21lc2NvcmUgPT0gYmV0LmhvbWVzY29yZSAmJiBtYXRjaC5hd2F5c2NvcmUgPT0gYmV0LmF3YXlzY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRkIGNsYXNzTmFtZT1cIndvbjNcIiBrZXk9e21hdGNoLl9pZH0+UGFyaSBHYWduw6kgISAzIHBvaW50cyE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihtYXRjaC5ob21lc2NvcmUgPCBtYXRjaC5hd2F5c2NvcmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx0ZCBjbGFzc05hbWU9XCJ3b24yXCIga2V5PXttYXRjaC5faWR9PlBhcmkgR2FnbsOpICEgMiBwb2ludHMhPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx0ZCBjbGFzc05hbWU9XCJsb3NlXCIga2V5PXttYXRjaC5faWR9PlBhcmkgcGVyZHU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYmV0LmhvbWVzY29yZSA9PT0gYmV0LmF3YXlzY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1hdGNoLmhvbWVzY29yZSA9PT0gbWF0Y2guYXdheXNjb3JlICYmIG1hdGNoLmhvbWVzY29yZSA9PSBiZXQuaG9tZXNjb3JlICYmIG1hdGNoLmF3YXlzY29yZSA9PSBiZXQuYXdheXNjb3JlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8dGQgY2xhc3NOYW1lPVwid29uM1wiIGtleT17bWF0Y2guX2lkfT5QYXJpIEdhZ27DqSAgISAgMyBwb2ludHMgICE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1hdGNoLmhvbWVzY29yZSA9PT0gbWF0Y2guYXdheXNjb3JlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8dGQgY2xhc3NOYW1lPVwid29uMlwiIGtleT17bWF0Y2guX2lkfT5QYXJpIEdhZ27DqSAgISAgMiBwb2ludHMgICE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRkIGNsYXNzTmFtZT1cImxvc2VcIiBrZXk9e21hdGNoLl9pZH0+UGFyaSBwZXJkdTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoKG1hdGNoLl9pZCA9PSBiZXQubWF0Y2hfaWQgJiYgbWF0Y2guaG9tZXNjb3JlPT09IFwiXCIpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e21hdGNoLl9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10aXA9XCJWb2lyIG91IG1vZGlmaWVyIGxlIHByb25vc3RpY1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e2AvbWF0Y2hlcz9tYXRjaD0ke2JldC5tYXRjaF9pZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+ICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdFRvb2x0aXAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImxpZ2h0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyIGJvcmRlckNvbG9yPVwiIzMzODRBOFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcj1cIiMzMzg0QThcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd0NvbG9yPVwiIzMzODRBOFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVuIGNvdXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD4gOlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlZvdXMgbidhdmV6IHBhcyBlbmNvcmUgcGxhY8OpIGRlIHByb25vc3RpY3MuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5SZXZlbmV6IHZlcnMgbGVzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvbWF0Y2hlc1wiPiBtYXRjaGVzIDwvTGluaz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3VyIGNvbW1lbmNlciDDoCBwcm9ub3N0aXF1ZXIuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2luYXRpb24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtc0NvdW50PXt0b3RhbENvdW50fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplPXtwYWdlU2l6ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlPXtjdXJyZW50UGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUGFnZUNoYW5nZT17dGhpcy5oYW5kbGVQYWdlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNQYWdlPXt0aGlzLnByZXZpb3VzUGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRQYWdlPXt0aGlzLm5leHRQYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50OyIsImltcG9ydCBSZWFjdCAsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuL2NvbW1vbi9Mb2FkZXInO1xyXG5pbXBvcnQgSm9pIGZyb20gJ2pvaS1icm93c2VyJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XHJcbmltcG9ydCB7IHRvYXN0LCBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IFJlYWN0VG9vbHRpcCBmcm9tICdyZWFjdC10b29sdGlwJztcclxuXHJcbmNsYXNzIEJldHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgaGlkZGVuIDogdHJ1ZSxcclxuICAgICAgICBkYXRhIDoge1xyXG4gICAgICAgICAgICBob21lcmVzdWx0IDogXCIgXCIsXHJcbiAgICAgICAgICAgIGF3YXlyZXN1bHQgOiBcIiBcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3JzOiB7fSxcclxuICAgICAgICBiZXRzdGF0dXMgOiBmYWxzZSxcclxuICAgICAgICB0b2FzdCA6IGZhbHNlLCBcclxuICAgICAgICBsb2FkaW5nIDogdHJ1ZSxcclxuICAgICAgICBjb25uZWN0ZWQgOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdjb25uZWN0ZWQnKSxcclxuICAgICAgICB2YWxpZGF0aW9uZGF0ZSA6IHRydWVcclxuICAgIH07XHJcbiAgICBzb3VyY2UgPSBheGlvcy5DYW5jZWxUb2tlbi5zb3VyY2UoKTtcclxuICAgIHNjaGVtYSA9IHtcclxuICAgICAgICBob21lcmVzdWx0IDogSm9pLm51bWJlcigpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgYXdheXJlc3VsdCA6IEpvaS5udW1iZXIoKS5yZXF1aXJlZCgpXHJcbiAgICB9O1xyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICB0aGlzLmdldEJldHMoKTtcclxuICAgICAgICB0aGlzLmdldFZhbGlkYXRpb25EYXRlKClcclxuICAgIH07XHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zb3VyY2UpIHtcclxuICAgICAgICAgIHRoaXMuc291cmNlLmNhbmNlbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldFZhbGlkYXRpb25EYXRlKCl7XHJcbiAgICAgICAgY29uc3QgbWF0Y2hkYXRlID0gTnVtYmVyKHRoaXMucHJvcHMubWF0Y2guZGF0ZS5zbGljZSgwLDIpKTtcclxuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKVxyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7ZGF5OiBcIm51bWVyaWNcIn07XHJcbiAgICAgICAgY29uc3QgbmV3ZGF0ZSA9IE51bWJlcihkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygnZnItRlInLG9wdGlvbnMpKTtcclxuICAgICAgICBjb25zdCBtYXRjaHRpbWUgPSBOdW1iZXIodGhpcy5wcm9wcy5tYXRjaC50aW1lLnNwbGl0KCdoJykuam9pbignJykpXHJcbiAgICAgICAgY29uc3QgdGltZSA9IGRhdGUuZ2V0SG91cnMoKVxyXG4gICAgICAgIGlmKG1hdGNoZGF0ZSA9PT0gbmV3ZGF0ZSAmJiBtYXRjaHRpbWUgLSB0aW1lIDw9IDEgfHwgbmV3ZGF0ZSA+IG1hdGNoZGF0ZSl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRpb25kYXRlIDogZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldEJldHMoKXtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jb25uZWN0ZWQgPT09ICd0cnVlJyl7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHsgdXNlcmlkIDogTnVtYmVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZCcpKSAsIG1hdGNoaWQgOiB0aGlzLnByb3BzLm1hdGNoLl9pZH07XHJcbiAgICAgICAgYXhpb3MoeyBtZXRob2QgOiAnUE9TVCcgLCB1cmw6ICdhcGkvZ2V0YmV0cycsIGRhdGEgOiBkYXRhICwgaGVhZGVyczogeydYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J30gLCBjYW5jZWxUb2tlbjogdGhpcy5zb3VyY2UudG9rZW5cclxuICAgICAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgaWYgKE51bWJlci5pc0ludGVnZXIocmVzLmRhdGEuaG9tZXNjb3JlKSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YSA6IHsgaG9tZXJlc3VsdCA6IHJlcy5kYXRhLmhvbWVzY29yZSAsIGF3YXlyZXN1bHQgOiByZXMuZGF0YS5hd2F5c2NvcmUgfSwgbG9hZGluZyA6IGZhbHNlICwgYmV0c3RhdHVzIDogdHJ1ZX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YSA6IHsgaG9tZXJlc3VsdCA6ICcnICwgYXdheXJlc3VsdCA6ICcnIH0sIGxvYWRpbmcgOiBmYWxzZX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KX1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZyA6IGZhbHNlIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHZhbGlkYXRlID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7YWJvcnRFYXJseSA6IGZhbHNlfTtcclxuICAgICAgICBjb25zdCB7ZXJyb3J9ID0gSm9pLnZhbGlkYXRlKHRoaXMuc3RhdGUuZGF0YSwgdGhpcy5zY2hlbWEsIG9wdGlvbnMpO1xyXG4gICAgICAgIGlmICghZXJyb3IpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGNvbnN0IGVycm9ycyA9IHt9O1xyXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgZXJyb3IuZGV0YWlscylcclxuICAgICAgICAgICAgZXJyb3JzW2l0ZW0ucGF0aFswXV0gPSBpdGVtLm1lc3NhZ2U7IFxyXG4gICAgICAgIHJldHVybiBlcnJvcnM7XHJcbiAgICB9O1xyXG4gICAgaGFuZGxlQ2hhbmdlID0gKHtjdXJyZW50VGFyZ2V0IDogaW5wdXR9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHsuLi50aGlzLnN0YXRlLmRhdGF9O1xyXG4gICAgICAgIGRhdGFbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRhfSk7XHJcbiAgICB9O1xyXG4gICAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aGlkZGVuOmZhbHNlfSlcclxuICAgIH07XHJcbiAgICBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgXHJcbiAgICAgICAgY29uc3QgZXJyb3JzID0gdGhpcy52YWxpZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcnMgOiBlcnJvcnMgfHwge319KTtcclxuICAgICAgICBpZiAoZXJyb3JzKSByZXR1cm47ICBcclxuICAgICAgICB0aGlzLmRvU3VibWl0KCk7XHJcbiAgICB9O1xyXG4gICAgZG9TdWJtaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAgICAgaG9tZXNjb3JlIDogdGhpcy5zdGF0ZS5kYXRhLmhvbWVyZXN1bHQsXHJcbiAgICAgICAgICAgIGF3YXlzY29yZSA6IHRoaXMuc3RhdGUuZGF0YS5hd2F5cmVzdWx0LFxyXG4gICAgICAgICAgICBtYXRjaGlkIDogdGhpcy5wcm9wcy5tYXRjaC5faWQsXHJcbiAgICAgICAgICAgIGJldGlkIDogdXVpZHY0KCksXHJcbiAgICAgICAgICAgIGhvbWV0ZWFtIDogdGhpcy5wcm9wcy5tYXRjaC5ob21ldGVhbSxcclxuICAgICAgICAgICAgYXdheXRlYW0gOiAgdGhpcy5wcm9wcy5tYXRjaC5hd2F5dGVhbVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYmV0c3RhdHVzID09PSBmYWxzZSl7XHJcbiAgICAgICAgICAgIGF4aW9zKFxyXG4gICAgICAgICAgICAgICAge21ldGhvZDogJ1BPU1QnLCB1cmw6ICdhcGkvcG9zdGJldHMnLCBkYXRhOiBkYXRhLCBoZWFkZXJzOiB7J1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnfX0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuIDogdHJ1ZSAsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9tZXJlc3VsdCA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2F5cmVzdWx0IDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmV0c3RhdHVzIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3QgOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoJ1Byb25vc3RpYyB2YWxpZMOpIScsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9DbG9zZTogMTAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZUJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IGRvY3VtZW50LmxvY2F0aW9uLmhyZWY9YC9tYXRjaGVzP3A9JHt0aGlzLnByb3BzLmN1cnJlbnRQYWdlfWAgfSwxMjAwKTtcclxuICAgICAgICAgICAgICAgIH07ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdG9hc3QuZXJyb3IoJ1ZldWlsbGV6IHLDqWVzc2F5ZXInLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0Nsb3NlOiAzMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuc2V0U3RhdGUoe3RvYXN0IDogZmFsc2V9KX0sNjAwMCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlLmJldHN0YXR1cyA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIGF4aW9zKHttZXRob2Q6J1BPU1QnLHVybDonYXBpL3VwZGF0ZWJldHMnLCBkYXRhOmRhdGEsIGhlYWRlcnM6IHsnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCd9fSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlcyk9PiB7aWYgKHJlcy5zdGF0dXMgPT09IDIwMCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgXHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZGVuIDogdHJ1ZSAsIFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvbWVyZXN1bHQgOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2F5cmVzdWx0IDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICAgICAgICAgIGJldHN0YXR1cyA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QgOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgICAgICAgICB0b2FzdC5zdWNjZXNzKCdQcm9ub3N0aWMgbW9kaWZpw6khJywge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcC1yaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9DbG9zZTogMTAwMCxcclxuICAgICAgICAgICAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBjbG9zZUJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBkb2N1bWVudC5sb2NhdGlvbi5ocmVmPWAvbWF0Y2hlcz9wPSR7dGhpcy5wcm9wcy5jdXJyZW50UGFnZX1gIH0sMTIwMCk7XHJcbiAgICAgICAgICAgIH19KTtcclxuICAgICAgICB9OyAgICAgICBcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3Qge2hpZGRlbiwgZGF0YSAsIGVycm9ycyAsIGlucHV0ZXJyb3JzICwgYmV0c3RhdHVzICwgdG9hc3QgLCBjb25uZWN0ZWQgLCBsb2FkaW5nICwgdmFsaWRhdGlvbmRhdGV9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7bWF0Y2h9ID0gdGhpcy5wcm9wcztcclxuICAgIFxyXG4gICAgICAgIHJldHVybiAoIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxyXG4gICAgICAgICAgICAgICAge3RvYXN0PyA8VG9hc3RDb250YWluZXIvPiA6IG51bGx9ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGgzPnttYXRjaC5kYXRlfSAtIHttYXRjaC50aW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8aDQ+R3JvdXBlIHttYXRjaC5ncm91cH08L2g0PlxyXG4gICAgICAgICAgICAgICAgPHA+e21hdGNoLmxvY2F0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWF0Y2hkZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJob21ldGVhbWltZ1wiIHNyYz17YC9pbWFnZXMvJHttYXRjaC5ob21ldGVhbX0uc3ZnYH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIHttYXRjaC5ob21ldGVhbX0ge21hdGNoLmhvbWVzY29yZX0gLSB7bWF0Y2guYXdheXNjb3JlfSB7bWF0Y2guYXdheXRlYW19XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhd2F5dGVhbWltZ1wiIHNyYz17YC9pbWFnZXMvJHttYXRjaC5hd2F5dGVhbX0uc3ZnYH0vPlxyXG4gICAgICAgICAgICAgICAgPC9wcmU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge2xvYWRpbmcgPT09IHRydWUgPyA8TG9hZGVyLz4gOiBcclxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9IGNsYXNzTmFtZT17aGlkZGVuID8gJ2J1dHRvbiBiZXRidXR0b24gaXMtcHJpbWFyeScgOiAnaGlkZGVuJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtiZXRzdGF0dXM/ICdWb2lyIHZvdHJlIHByb25vc3RpYycgOiBcIlBhcmllciBzdXIgY2UgbWF0Y2hcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aGlkZGVuID8gJ2hpZGRlbicgOiAnYmV0Z2FtZXMnfT5cclxuICAgICAgICAgICAgICAgIHtjb25uZWN0ZWQgPT09IFwidHJ1ZVwiID8gIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb25kYXRlP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxlbT57bWF0Y2guaG9tZXRlYW0rXCIgXCJ9PC9lbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaG9tZXJlc3VsdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEuaG9tZXJlc3VsdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzY29yZSBob21lcmVzdWx0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzW1wiaG9tZXJlc3VsdFwiXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+IC0gPC9iPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYXdheXJlc3VsdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEuYXdheXJlc3VsdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2lucHV0ZXJyb3JzPyAnaW5wdXRlcnJvcnMnIDogJ3Njb3JlJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZW0+IHttYXRjaC5hd2F5dGVhbX0gPC9lbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVTdWJtaXR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnZhbGlkYXRlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9LXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXRpcD1cIkNlIHByb25vc3RpYyBuZSBwZXV0IHBsdXMgw6p0cmUgbW9kaWZpw6kgIVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21hdGNoLmhvbWV0ZWFtfSB7ZGF0YS5ob21lcmVzdWx0fSAtIHtkYXRhLmF3YXlyZXN1bHR9IHttYXRjaC5hd2F5dGVhbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdFRvb2x0aXAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImxpZ2h0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyIGJvcmRlckNvbG9yPVwiIzMzODRBOFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcj1cIiMzMzg0QThcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd0NvbG9yPVwiIzMzODRBOFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj59ICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlZvdXMgZGV2ZXogw6p0cmUgY29ubmVjdMOpIHBvdXIgcGxhY2VyIHVuIHByb25vc3RpYy48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgKTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgQmV0czsiLCJpbXBvcnQgeyBtYXRjaGVzIH0gZnJvbSAnbG9kYXNoLWVzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IENvbWluZ01hdGNoZXMgPSAoe2RhdGF9KSA9PiB7XHJcbiAgICByZXR1cm4gKCBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbWluZ21hdGNoZXNcIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlIGlzLTNcIj5Qcm9jaGFpbnMgbWF0Y2hlczwvaDM+XHJcbiAgICAgICAgICAgIHtkYXRhLm1hcChtYXRjaCA9PiBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiIGtleT17bWF0Y2guX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICA8Yj57bWF0Y2guZGF0ZX08L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e21hdGNoLmhvbWV0ZWFtfSAtIHttYXRjaC5hd2F5dGVhbX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IENvbWluZ01hdGNoZXM7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEZpbHRlciA9ICh7aXRlbXMsb25JdGVtU2VsZWN0LHNlbGVjdGVkSXRlbSxsYWJlbH0pID0+IHtcclxuXHJcbiAgICByZXR1cm4gKCBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLXRyaWdnZXJcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPkZpbHRyZXIgcGFyIHtsYWJlbC50b0xvd2VyQ2FzZSgpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaXMtc21hbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvYW5nbGVkb3duLnN2Z1wiLz5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17JycgPT09IHNlbGVjdGVkSXRlbSA/ICdzZWxlY3Rpb24gaXMtc2VsZWN0ZWQnIDogJ3NlbGVjdGlvbid9IG9uQ2xpY2s9eyAoKSA9PiBvbkl0ZW1TZWxlY3QoJ0FsbCcpfT5Ub3VzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbXMubWFwKGl0ZW0gPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpdGVtID09PSBzZWxlY3RlZEl0ZW0gPyAnc2VsZWN0aW9uIGlzLXNlbGVjdGVkJyA6ICdzZWxlY3Rpb24nfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiBvbkl0ZW1TZWxlY3QoaXRlbSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbCAhPT0gJ0dyb3VwZSAnPyBpdGVtIDogbGFiZWwgKyBpdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgKX0gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlcjsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBjb25uZWN0ZWQgOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdjb25uZWN0ZWQnKSxcclxuICAgICAgICBtb2JpbGVtZW51IDogZmFsc2UsXHJcbiAgICAgICAgaXNBY3RpdmUgOiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9nb3V0KCl7XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnY29ubmVjdGVkJywnZmFsc2UnKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnaWQnKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnL2FwaS9sb2dvdXQnKTtcclxuICAgIH07XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7Y29ubmVjdGVkICwgaXNBY3RpdmV9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICByZXR1cm4gKCBcclxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvaG9tZVwiPjxpbWcgc3JjPVwiL2ltYWdlcy9ldXJvMjAyMC1sb2dvLnN2Z1wiIHdpZHRoPVwiNzBcIj48L2ltZz48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHt0aGlzLnNldFN0YXRlKHtpc0FjdGl2ZSA6ICFpc0FjdGl2ZX0pfX0gY2xhc3NOYW1lPXtpc0FjdGl2ZT9cIm5hdmJhci1idXJnZXIgaXMtYWN0aXZlXCI6XCJuYXZiYXItYnVyZ2VyXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aXNBY3RpdmU/XCJuYXZiYXItbWVudSBpcy1hY3RpdmVcIjpcIm5hdmJhci1tZW51XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9ydWxlc1wiIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCI+UsOoZ2xlczwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW0gaGFzLWRyb3Bkb3duIGlzLWhvdmVyYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5NYXRjaGVzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvbWF0Y2hlc1wiIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCI+UGhhc2UgZGUgR3JvdXBlPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPExpbmsgdG89XCIvI1wiIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCI+UGhhc2UgZmluYWxlPC9MaW5rPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvcmFua2luZ1wiIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCI+Q2xhc3NlbWVudDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Nvbm5lY3RlZD09PSd0cnVlJz9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9hY2NvdW50XCIgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXByaW1hcnlcIj5Nb24gY29tcHRlPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uTG9nb3V0fSAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXdhcm5pbmdcIj5Ew6ljb25uZWN0aW9uPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvbG9naW5cIiBjbGFzc05hbWU9XCJidXR0b24gaXMtcHJpbWFyeVwiPkNvbm5lY3Rpb248L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9zaWdudXBcIiBjbGFzc05hbWU9XCJidXR0b24gaXMtaW5mb1wiPjxzdHJvbmc+Q3LDqWVyIHVuIGNvbXB0ZTwvc3Ryb25nPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBDb21pbmdNYXRjaGVzIGZyb20gJy4vQ29taW5nTWF0Y2hlcyc7XHJcbmltcG9ydCB7IFR3aXR0ZXJUaW1lbGluZUVtYmVkIH0gZnJvbSAncmVhY3QtdHdpdHRlci1lbWJlZCc7XHJcbmltcG9ydCBXZWxjb21lTW9kYWwgZnJvbSAnLi9XZWxjb21lTW9kYWwnO1xyXG5cclxuY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhdGUgPSB7IFxyXG4gICAgICAgIG1hdGNoZXMgOiBbXSxcclxuICAgICAgICBzaG93bW9kYWwgOiBmYWxzZVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIHRoaXMuZ2V0TWF0Y2hlcygpO1xyXG4gICAgICAgIGNvbnN0IGNvbm5lY3RlZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2Nvbm5lY3RlZCcpO1xyXG4gICAgICAgIGlmIChjb25uZWN0ZWQgPT09ICd0cnVlJykgdGhpcy5nZXRVc2VyKCk7XHJcbiAgICAgICAgdGhpcy5zaG93TW9kYWwoKVxyXG4gICAgICAgIFxyXG4gICAgfTtcclxuICAgIHNob3dNb2RhbCgpe1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93bW9kYWwgOiB0cnVlfSlcclxuICAgICAgICB9LCAzMDAwKTtcclxuICAgIH1cclxuICAgIGdldFVzZXIoKXtcclxuICAgICAgICBheGlvcy5nZXQoJ2FwaS9nZXRVc2VySWQnKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpZCcscmVzLmRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGdldE1hdGNoZXMoKXtcclxuICAgICAgICBheGlvcy5nZXQoYGh0dHBzOi8vcG9ydGZvbGlvLTcyMTQ3LWRlZmF1bHQtcnRkYi5ldXJvcGUtd2VzdDEuZmlyZWJhc2VkYXRhYmFzZS5hcHAvbWF0Y2hlcy5qc29uYCkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbWF0Y2hlcyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCByZXMuZGF0YS5sZW5ndGggOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhW2ldLmhvbWVzY29yZSA9PT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcy5wdXNoKHJlcy5kYXRhW2ldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHttYXRjaGVzIDogbWF0Y2hlcy5zbGljZSgwLDQpfSkgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7bWF0Y2hlcyAsIHNob3dtb2RhbH0gPSB0aGlzLnN0YXRlXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaGVhZGVyaW1nXCI+XHJcbiAgICAgICAgICAgICAgICB7c2hvd21vZGFsPzxXZWxjb21lTW9kYWwvPjpudWxsfVxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2V1cm8yMDIwLWxvZ28uc3ZnXCIvPiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxDb21pbmdNYXRjaGVzIGRhdGE9e21hdGNoZXN9Lz5cclxuICAgICAgICAgICAgICAgIDxUd2l0dGVyVGltZWxpbmVFbWJlZFxyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZVR5cGU9XCJwcm9maWxlXCJcclxuICAgICAgICAgICAgICAgICAgICBzY3JlZW5OYW1lPVwiZXF1aXBlZGVmcmFuY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3toZWlnaHQ6IDUwMCAsIHdpZHRoIDogMzAwfX1cclxuICAgICAgICAgICAgICAgICAgICBsYW5nPVwiZnJcIlxyXG4gICAgICAgICAgICAgICAgLz4gICAgIFxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+ICAgICAgICAgICBcclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuICAgIFxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBKb2kgZnJvbSAnam9pLWJyb3dzZXInO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHRvYXN0LCBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IEZvcm0gZnJvbSAnLi9jb21tb24vZm9ybSc7XHJcbmltcG9ydCBVc2VyTG9hZGVyIGZyb20gJy4vY29tbW9uL3VzZXJsb2FkZXInO1xyXG5cclxuY2xhc3MgU2lnbnVwIGV4dGVuZHMgRm9ybSB7XHJcbiAgICBzdGF0ZSA9IHsgXHJcbiAgICAgICAgZGF0YSA6IHtcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lIDogXCJcIixcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkIDogXCJcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBlcnJvcnMgOiB7fSxcclxuICAgICAgICBlcnJvcnNjb3VudCA6IDAsXHJcbiAgICAgICAgbG9hZGluZyA6IGZhbHNlLFxyXG4gICAgICAgIGJ1dHRvblRleHQgOiBcIlZhbGlkZXJcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIHNjaGVtYSA9IHtcclxuICAgICAgICB1c2VybmFtZSA6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLm1heCg0MCksXHJcbiAgICAgICAgcGFzc3dvcmQgOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKS5taW4oOCkubWF4KDI1KVxyXG4gICAgfVxyXG4gICAgZG9TdWJtaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZyA6IHRydWUgLCBidXR0b25UZXh0IDogXCJDaGFyZ2VtZW50Li4uXCJ9KVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lIDogdGhpcy5zdGF0ZS5kYXRhLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICBwYXNzd29yZCA6IHRoaXMuc3RhdGUuZGF0YS5wYXNzd29yZCxcclxuICAgICAgICB9XHJcbiAgICAgICAgYXhpb3Moe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiAnYXBpL2xvZ2luJyxcclxuICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgaGVhZGVyczogeydYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J30gICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOmZhbHNlICwgYnV0dG9uVGV4dCA6IFwiVmFsaWRlclwifSlcclxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCl7XHJcbiAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MocmVzLmRhdGEubWVzc2FnZSwgdGhpcy50b2FzdG9wdGlvbnMpO1xyXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdjb25uZWN0ZWQnLCd0cnVlJylcclxuICAgICAgICAgICAgc2V0VGltZW91dCggKCkgPT4ge2RvY3VtZW50LmxvY2F0aW9uLmhyZWY9XCIvaG9tZVwiIH0sMjEwMCkgXHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6ZmFsc2UgLCBidXR0b25UZXh0IDogXCJDaGFyZ2VtZW50Li4uXCJ9KVxyXG4gICAgICAgICAgICB0b2FzdC5lcnJvcignVsOpcmlmaWV6IHZvcyBpZGVudGlmaWFudHMnLCB0aGlzLnRvYXN0b3B0aW9ucyk7XHJcbiAgICAgICAgICAgIGxldCBlcnJvcnNjb3VudCA9IHRoaXMuc3RhdGUuZXJyb3JzY291bnQ7XHJcbiAgICAgICAgICAgIGVycm9yc2NvdW50KytcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JzY291bnQ6ZXJyb3JzY291bnQgLCBkYXRhIDogeyB1c2VybmFtZSA6IFwiXCIgLCBwYXNzd29yZCA6IFwiXCJ9ICwgYnV0dG9uVGV4dCA6XCJWYWxpZGVyXCJ9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7IFxyXG4gICAgICAgIGNvbnN0IHtlcnJvcnNjb3VudCwgbG9hZGluZyAsIGJ1dHRvblRleHQgfSA9IHRoaXMuc3RhdGVcclxuICAgICAgICByZXR1cm4gKCBcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lci8+XHJcbiAgICAgICAgICAgICAgICB7bG9hZGluZyA9PT0gdHJ1ZSA/IDxVc2VyTG9hZGVyLz4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+Q29ubmVjdGlvbjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDI+UGFzIGRlIGNvbXB0ZT8gQ2xpcXVleiA8TGluayB0bz1cInNpZ251cFwiPmljaTwvTGluaz4gcG91ciBlbiBjcsOpZXIgdW4uPC9oMj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwic2lnbnVwLWZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJJbnB1dCgndXNlcm5hbWUnLCdOb20gZFxcJ3V0aWxpc2F0ZXVyIDonLCd0ZXh0JywnaW5wdXQnKX1cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJJbnB1dCgncGFzc3dvcmQnLCdNb3QgZGUgcGFzc2UgOicsJ3Bhc3N3b3JkJywnaW5wdXQnKX1cclxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzY291bnQgPj0gMyA/IDxlbT5Wb3VzIGF2ZXogb3VibGnDqSB2b3RyZSBtb3QgZGUgcGFzc2UgPyBDbGlxdWV6IDxMaW5rIHRvPVwiL25ld3Bhc3N3b3JkXCI+aWNpPC9MaW5rPiBwb3VyIGxlIHLDqWluaXRsYWlpc2VyPC9lbT4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgaXMtZ3JvdXBlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJCdXR0b24oYnV0dG9uVGV4dCwnYnV0dG9uIGlzLXN1Y2Nlc3MnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvaG9tZVwiIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1pbmZvXCI+QW5udWxlcjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ251cDsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xyXG5pbXBvcnQgQmV0cyBmcm9tICcuL0JldHMnO1xyXG5pbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcclxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi9jb21tb24vcGFnaW5hdGlvbic7XHJcbmltcG9ydCB7IHBhZ2luYXRlIH0gZnJvbSAnLi4vdXRpbGl0aWVzL3BhZ2luYXRlJztcclxuXHJcbmNsYXNzIE1hdGNoZXMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHN0YXRlID0geyBcclxuICAgICAgICBtYXRjaGVzIDogW10sXHJcbiAgICAgICAgc2VsZWN0ZWRNYXRjaGVzIDogW10sXHJcbiAgICAgICAgZ3JvdXBzOiBbXSwgXHJcbiAgICAgICAgc2VsZWN0ZWRHcm91cCA6ICcnLFxyXG4gICAgICAgIGRhdGVzIDogW10gLFxyXG4gICAgICAgIHNlbGVjdGVkRGF0ZSA6ICcnLFxyXG4gICAgICAgIHRlYW1zIDogW10sXHJcbiAgICAgICAgc2VsZWN0ZWRUZWFtIDogJycsXHJcbiAgICAgICAgY3VycmVudFBhZ2UgOiAxICxcclxuICAgICAgICBwYWdlU2l6ZSA6IDYsXHJcbiAgICAgICAgZGF0ZSA6IG5ldyBEYXRlKCdkLU0tWScpXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIHRoaXMuZ2V0TWF0Y2hlcygpO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gTnVtYmVyKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoLnNsaWNlKDMpKVxyXG4gICAgICAgIGlmKGN1cnJlbnRQYWdlID09PSAwIHx8IGN1cnJlbnRQYWdlID09PSBOYU4pe1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFBhZ2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRNYXRjaGVzKCkgeyAgICAgICAgXHJcbiAgICAgICAgYXhpb3MuZ2V0KGBodHRwczovL3BvcnRmb2xpby03MjE0Ny1kZWZhdWx0LXJ0ZGIuZXVyb3BlLXdlc3QxLmZpcmViYXNlZGF0YWJhc2UuYXBwL21hdGNoZXMuanNvbmApLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbWF0Y2hpZCA9IE51bWJlcih0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaC5zbGljZSg3KSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSByZXMuZGF0YS5zbGljZSgwLDM2KTtcclxuICAgICAgICAgICAgY29uc3QgZGF0ZXMgPSBbXTtcclxuICAgICAgICAgICAgY29uc3QgdGVhbXMgPSBbXTtcclxuICAgICAgICAgICAgY29uc3QgZ3JvdXBzID0gW107XHJcbiAgICAgICAgICAgIG1hdGNoZXMubWFwKCBtID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghZGF0ZXMuaW5jbHVkZXMobS5kYXRlKSkgZGF0ZXMucHVzaChtLmRhdGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0ZWFtcy5pbmNsdWRlcyhtLmhvbWV0ZWFtKSkgdGVhbXMucHVzaChtLmhvbWV0ZWFtKTtcclxuICAgICAgICAgICAgICAgIGlmICghZ3JvdXBzLmluY2x1ZGVzKG0uZ3JvdXApKSBncm91cHMucHVzaChtLmdyb3VwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGxldCBzaW5nbGVtYXRjaCA9IFtdXHJcbiAgICAgICAgICAgIGlmKG1hdGNoaWQgIT0gXCJcIiAmJiBtYXRjaGlkIDw9IG1hdGNoZXMubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIHNpbmdsZW1hdGNoLnB1c2gobWF0Y2hlcy5maW5kKG0gPT4gbWF0Y2hpZCA9PSBtLl9pZCkgKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1hdGNoZXMgLCB0ZWFtcyA6IHRlYW1zLnNvcnQoKSAsIGRhdGVzICwgZ3JvdXBzICwgc2VsZWN0ZWRNYXRjaGVzIDogc2luZ2xlbWF0Y2ggfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1hdGNoZXMgLCB0ZWFtcyA6IHRlYW1zLnNvcnQoKSAsIGRhdGVzICwgZ3JvdXBzICwgc2VsZWN0ZWRNYXRjaGVzIDogbWF0Y2hlcyB9KVxyXG4gICAgICAgICAgICB9ICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlUGFnZUNoYW5nZSA9IChwYWdlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRQYWdlIDogcGFnZX0pO1xyXG4gICAgfTtcclxuICAgIGhhbmRsZUdyb3VwRmlsdGVyID0gKGdyb3VwKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IFsuLi50aGlzLnN0YXRlLm1hdGNoZXNdO1xyXG4gICAgICAgIGlmIChncm91cCA9PT0gJ0FsbCcpe1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRNYXRjaGVzIDogbWF0Y2hlcyAsIHNlbGVjdGVkR3JvdXAgOicnfSk7XHJcbiAgICAgICAgfSAgXHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRNYXRjaGVzID0gbWF0Y2hlcy5maWx0ZXIoIG0gPT4gbS5ncm91cCA9PT0gZ3JvdXApO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZE1hdGNoZXMgLCBzZWxlY3RlZEdyb3VwIDogZ3JvdXAgLCBzZWxlY3RlZFRlYW0gOiAnJyAsIHNlbGVjdGVkRGF0ZSA6ICcnICwgY3VycmVudFBhZ2U6IDF9KTtcclxuICAgICAgICB9ICBcclxuICAgIH07XHJcbiAgICBoYW5kbGVEYXRlRmlsdGVyID0gKGRhdGUpID0+IHtcclxuICAgICAgICBjb25zdCBtYXRjaGVzID0gWy4uLnRoaXMuc3RhdGUubWF0Y2hlc107XHJcbiAgICAgICAgaWYgKGRhdGUgPT09ICdBbGwnKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkTWF0Y2hlcyA6IG1hdGNoZXMgLCBzZWxlY3RlZERhdGUgOicnfSlcclxuICAgICAgICB9ICAgICAgXHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRNYXRjaGVzID0gbWF0Y2hlcy5maWx0ZXIoIG0gPT4gbS5kYXRlID09PSBkYXRlKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRNYXRjaGVzICwgc2VsZWN0ZWREYXRlIDogZGF0ZSAsIHNlbGVjdGVkVGVhbSA6ICcnICwgc2VsZWN0ZWRHcm91cCA6ICcnLCBjdXJyZW50UGFnZTogMX0pO1xyXG4gICAgICAgIH0gIFxyXG4gICAgfTtcclxuICAgIGhhbmRsZVRlYW1GaWx0ZXIgPSAodGVhbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBbLi4udGhpcy5zdGF0ZS5tYXRjaGVzXTtcclxuICAgICAgICBpZiAodGVhbSA9PT0gJ0FsbCcpe1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRNYXRjaGVzIDogbWF0Y2hlcyAsIHNlbGVjdGVkVGVhbSA6ICcnLCBjdXJyZW50UGFnZTogMX0pXHJcbiAgICAgICAgfSAgICAgIFxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkTWF0Y2hlcyA9IG1hdGNoZXMuZmlsdGVyKCBtID0+IG0uaG9tZXRlYW0gPT09IHRlYW0gfHwgbS5hd2F5dGVhbSA9PT0gdGVhbSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkTWF0Y2hlcyAsIHNlbGVjdGVkVGVhbSA6IHRlYW0gLCBzZWxlY3RlZERhdGUgOiAnJyAsIHNlbGVjdGVkR3JvdXAgOiAnJ30pO1xyXG4gICAgICAgIH0gIFxyXG4gICAgfTtcclxuICAgIGdldFBhZ2VkRGF0YSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IHBhZ2VTaXplLCBjdXJyZW50UGFnZSwgc2VsZWN0ZWRNYXRjaGVzfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgbWF0Y2hMaXN0UGVyUGFnZSA9IHBhZ2luYXRlKHNlbGVjdGVkTWF0Y2hlcyxjdXJyZW50UGFnZSxwYWdlU2l6ZSk7XHJcbiAgICAgICAgcmV0dXJuIHsgdG90YWxDb3VudDogc2VsZWN0ZWRNYXRjaGVzLmxlbmd0aCwgZGF0YTogbWF0Y2hMaXN0UGVyUGFnZX1cclxuICAgIH1cclxuICAgIHByZXZpb3VzUGFnZSA9ICgpID0+IHtcclxuICAgICAgICBsZXQge2N1cnJlbnRQYWdlfSA9IHRoaXMuc3RhdGVcclxuICAgICAgICBpZiAoY3VycmVudFBhZ2UgPjEgKXtcclxuICAgICAgICAgICAgY3VycmVudFBhZ2UtLVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50UGFnZX0pXHJcbiAgICB9ICAgIFxyXG4gICAgbmV4dFBhZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHtjdXJyZW50UGFnZSxzZWxlY3RlZE1hdGNoZXMscGFnZVNpemV9ID0gdGhpcy5zdGF0ZVxyXG4gICAgICAgIGlmIChjdXJyZW50UGFnZSA8IE1hdGguY2VpbChzZWxlY3RlZE1hdGNoZXMubGVuZ3RoIC8gcGFnZVNpemUpICl7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlKytcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFBhZ2V9KVxyXG4gICAgfSAgICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHBhZ2VTaXplICwgY3VycmVudFBhZ2UgLCBzZWxlY3RlZEdyb3VwLCBzZWxlY3RlZERhdGUgLCBzZWxlY3RlZFRlYW0gLCBkYXRlcyAsICBncm91cHMgLCB0ZWFtcyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7IHRvdGFsQ291bnQgLCBkYXRhIH0gPSB0aGlzLmdldFBhZ2VkRGF0YSgpO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF0Y2hlc2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlBoYXNlIGRlIEdyb3VwZTwvaDE+PGhyLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24gaXMtaG92ZXJhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpbHRlciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9eydHcm91cGUgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2dyb3Vwc30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbT17c2VsZWN0ZWRHcm91cH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25JdGVtU2VsZWN0PXt0aGlzLmhhbmRsZUdyb3VwRmlsdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24gaXMtaG92ZXJhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpbHRlciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9eydEYXRlICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtkYXRlc30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbT17c2VsZWN0ZWREYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkl0ZW1TZWxlY3Q9e3RoaXMuaGFuZGxlRGF0ZUZpbHRlcn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duIGlzLWhvdmVyYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaWx0ZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXsnRXF1aXBlICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXt0ZWFtc30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbT17c2VsZWN0ZWRUZWFtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkl0ZW1TZWxlY3Q9e3RoaXMuaGFuZGxlVGVhbUZpbHRlcn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hdGNoZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5tYXAobWF0Y2ggPT5cclxuICAgICAgICAgICAgICAgICAgICA8QmV0cyBtYXRjaD17bWF0Y2h9IGtleT17bWF0Y2guX2lkfSBjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8UGFnaW5hdGlvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXNDb3VudD17dG90YWxDb3VudH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplPXtwYWdlU2l6ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblBhZ2VDaGFuZ2U9e3RoaXMuaGFuZGxlUGFnZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNQYWdlPXt0aGlzLnByZXZpb3VzUGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFBhZ2U9e3RoaXMubmV4dFBhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgIFxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IE1hdGNoZXM7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuL2NvbW1vbi9Mb2FkZXInO1xyXG5cclxuY2xhc3MgUmFua2luZyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHsgXHJcbiAgICAgICAgdXNlcnMgOiBbXSxcclxuICAgICAgICBtYXRjaGVzIDogW10sXHJcbiAgICAgICAgbG9hZGluZyA6IGZhbHNlLFxyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICB0aGlzLmdldERhdGEoKTtcclxuICAgICAgICB0aGlzLmdldE1hdGNoZXMoKTtcclxuICAgIH1cclxuICAgIGdldERhdGEoKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOnRydWV9KVxyXG4gICAgICAgIGF4aW9zLmdldCgnL2FwaS91c2VyL2dldFVzZXJzYW5kQmV0cycpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdXNlcnMgPSByZXMuZGF0YS51c2VycztcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dXNlcnMsbG9hZGluZyA6IGZhbHNlfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGdldE1hdGNoZXMoKXsgICAgICAgIFxyXG4gICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgIC5nZXQoYGh0dHBzOi8vcG9ydGZvbGlvLTcyMTQ3LWRlZmF1bHQtcnRkYi5ldXJvcGUtd2VzdDEuZmlyZWJhc2VkYXRhYmFzZS5hcHAvbWF0Y2hlcy5qc29uYClcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge3RoaXMuc2V0U3RhdGUoe21hdGNoZXMgOiByZXMuZGF0YX0pfSlcclxuICAgIH1cclxuICAgIGdldFNjb3Jlcyh1c2VyaWQpe1xyXG4gICAgICAgIGNvbnN0IHVzZXJzID0gWy4uLnRoaXMuc3RhdGUudXNlcnNdO1xyXG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBbLi4udGhpcy5zdGF0ZS5tYXRjaGVzXTtcclxuICAgICAgICBjb25zdCB1c2VyID0gdXNlcnMuZmluZCh1ID0+IHUudXNlcl9pZCA9PT0gdXNlcmlkKTtcclxuICAgICAgICBjb25zdCBiZXRzID0gdXNlci5iZXRzO1xyXG4gICAgICAgIGxldCB1c2VycG9pbnRzID0gMDtcclxuICAgICAgICBmb3IgKCBsZXQgaSA9IDAgOyBpIDwgbWF0Y2hlcy5sZW5ndGggOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IgKCBsZXQgaiA9IDAgOyBqIDwgYmV0cy5sZW5ndGggOyBqKyspeyAgICBcclxuICAgICAgICAgICAgICAgIGlmKChtYXRjaGVzW2ldLl9pZCA9PSBiZXRzW2pdLm1hdGNoX2lkICYmIChtYXRjaGVzW2ldLmhvbWVzY29yZSAmJiBtYXRjaGVzW2ldLmF3YXlzY29yZSAhPT0gXCJcIikpKXtcclxuICAgICAgICAgICAgICAgICAgICBpZihiZXRzW2pdLmhvbWVzY29yZSA+IGJldHNbal0uYXdheXNjb3JlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYobWF0Y2hlc1tpXS5ob21lc2NvcmUgPiBtYXRjaGVzW2ldLmF3YXlzY29yZSAmJiBtYXRjaGVzW2ldLmhvbWVzY29yZSA9PSBiZXRzW2pdLmhvbWVzY29yZSAmJiBtYXRjaGVzW2ldLmF3YXlzY29yZSA9PSBiZXRzW2pdLmF3YXlzY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VycG9pbnRzICs9IDNcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYobWF0Y2hlc1tpXS5ob21lc2NvcmUgPiBtYXRjaGVzW2ldLmF3YXlzY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VycG9pbnRzICs9IDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZihiZXRzW2pdLmhvbWVzY29yZSA8IGJldHNbal0uYXdheXNjb3JlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYobWF0Y2hlc1tpXS5ob21lc2NvcmUgPCBtYXRjaGVzW2ldLmF3YXlzY29yZSAmJiBtYXRjaGVzW2ldLmhvbWVzY29yZSA9PSBiZXRzW2pdLmhvbWVzY29yZSAmJiBtYXRjaGVzW2ldLmF3YXlzY29yZSA9PSBiZXRzW2pdLmF3YXlzY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VycG9pbnRzICs9IDNcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihtYXRjaGVzW2ldLmhvbWVzY29yZSA8IG1hdGNoZXNbaV0uYXdheXNjb3JlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJwb2ludHMgKz0gMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGJldHNbal0uaG9tZXNjb3JlID09PSBiZXRzW2pdLmF3YXlzY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1hdGNoZXNbaV0uaG9tZXNjb3JlID09PSBtYXRjaGVzW2ldLmF3YXlzY29yZSAmJiBtYXRjaGVzW2ldLmhvbWVzY29yZSA9PSBiZXRzW2pdLmhvbWVzY29yZSAmJiBtYXRjaGVzW2ldLmF3YXlzY29yZSA9PSBiZXRzW2pdLmF3YXlzY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VycG9pbnRzICs9IDNcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKG1hdGNoZXNbaV0uaG9tZXNjb3JlID09PSBtYXRjaGVzW2ldLmF3YXlzY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VycG9pbnRzICs9IDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHVzZXJwb2ludHNcclxuICAgIGNvbnNvbGUubG9nKHVzZXIpXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7IFxyXG4gICAgICAgIGNvbnN0IHt1c2VycyAsIGxvYWRpbmd9ID0gdGhpcy5zdGF0ZVxyXG4gICAgICAgIHJldHVybiAoIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlIGlzLTJcIj5DbGFzc2VtZW50PC9oMj5cclxuICAgICAgICAgICAgICAgIHsvKiB7bG9hZGluZz8gPExvYWRlci8+IDpcclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNsYXNzZW1lbnQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlV0aWxpc2F0ZXVyPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Qb2ludHM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk5vbWJyZSBkZSBwcm9ub3M8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJzLm1hcCh1c2VyID0+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHVzZXIuYmV0cy5sZW5ndGggPiAwICYmIDx0ciBrZXk9e3VzZXIudXNlcl9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dXNlci51c2VybmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLmdldFNjb3Jlcyh1c2VyLnVzZXJfaWQpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3VzZXIuYmV0cy5sZW5ndGh9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9IFxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPn0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlIGlzLTFcIj5DbGFzc2VtZW50IMOgIHZlbmlyISE8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpZnJhbWUgc3JjPSdodHRwczovL2dmeWNhdC5jb20vaWZyL0NoZWVyeVZhZ3VlRWxraG91bmQnIGZyYW1lQm9yZGVyPScwJyBzY3JvbGxpbmc9J25vJyB3aWR0aD0nNjQwJyBoZWlnaHQ9JzM2MSc+PC9pZnJhbWU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBSYW5raW5nOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBSdWxlcyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnVsZXNcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlIGlzLTFcIj5MZXMgcsOoZ2xlcyBkdSBqZXU8L2gxPlxyXG4gICAgICAgICAgICA8dWw+ICAgIFxyXG4gICAgICAgICAgICAgICAgPGxpPk9uIHBldXQgcHJvbm9zdGlxdWVyIGxlIHLDqXN1bHRhdCBkZSB0b3VzIGxlcyBtYXRjaGVzIChwaGFzZXMgZGUgcG91bGUgZXQgcGhhc2UgZmluYWxlIGTDqHMgcXUnaWxzIHNlcm9udCBjb25udXMpLjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+T24gcHJvbm9zdGlxdWUgc3VyIGxlIHLDqXN1bHRhdCBkdSBtYXRjaCBhcHLDqHMgOTAgbWludXRlcyAocHJvbG9uZ2F0aW9ucyBldCB0aXJzIGF1eCBidXRzIG5vbiBwcmlzIGVuIGNvbXB0ZSkuPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5MZXMgcHJvbm9zdGljcyBwZXV2ZW50IMOpdHJlIGTDqXBvc8OpcyBvdSBtb2RpZmnDqXMganVzcXUnw6AgMWggYXZhbnQgbGUgZMOpYnV0IGR1IG1hdGNoLjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+VW4gcHJvbm9zdGljIGNvcnJlY3Qgc2FucyBzY29yZSBleGFjdCByYXBwb3J0ZSAyIHBvaW50cyAoXHJcbiAgICAgICAgICAgICAgICAgICAgZXhlbXBsZSA9IFtSw6lzdWx0YXQgSXRhbGllIC0gVHVycXVpZSA9IDItMV0gLCBbcHJvbm9zdGljIDMgLSAwXSA9IHBhcmkgZ2FnbsOpKS48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlVuIHByb25vc3RpYyBjb3JyZWN0IGF2ZWMgbGUgc2NvcmUgZXhhY3QgcmFwcG9ydGUgMyBwb2ludHMuPC9saT4gXHJcbiAgICAgICAgICAgICAgICA8bGk+TGUgZ2FnbmFudCBnYWduZSAoZXQgYydlc3QgYmllbmcpITwvbGk+ICAgICAgICAgICBcclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgUnVsZXM7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBXZWxjb21lTW9kYWwgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBtb2RhbHZpZXcgOiBmYWxzZSxcclxuICAgICAgICBtb2RhbHNob3cgOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXMnKSAhPT0gJ3knXHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21vZGFsdmlldzp0cnVlfSlcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHttb2RhbHZpZXcsbW9kYWxzaG93fSA9IHRoaXMuc3RhdGVcclxuICAgICAgICByZXR1cm4gKCBcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgeyBtb2RhbHNob3cgP1xyXG4gICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXttb2RhbHZpZXc/J21vZGFsIGlzLWFjdGl2ZSc6J21vZGFsJ30gXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxtZXNzYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+e3RoaXMuc2V0U3RhdGUoe21vZGFsdmlldzpmYWxzZX0pO2xvY2FsU3RvcmFnZS5zZXRJdGVtKCdtcycsJ3knKX19IFxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg4pyWXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJpZW52ZW51ZSBzdXIgY2Ugc2l0ZSBkZSBwcm9ub3N0aWNzIHN1ciBsZXMgbWF0Y2hlcyBsJ1VFRkEgRVVSTyAyMDIwPHN1cD5UTTwvc3VwPi48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBJY2kgcXVlIGR1IGZ1biwgcGFzIGRlIG1pc2VzIGQnYXJnZW50LCBqdXN0ZSB1biBwZXRpdCBqZXUgZ3JhdHVpdCBwb3VyIHNlIGRpdmVydGlyIS48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBdWN1bmUgZG9ubsOpZSBuZSBzZXJhIGNvbGxlY3TDqWUgb3UgcmV2ZW5kdWUgPHNwYW4+8J+Ygzwvc3Bhbj4uXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQcsOqdCDDoCBqb3Vlcj9cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9Pnt0aGlzLnNldFN0YXRlKHttb2RhbHZpZXc6ZmFsc2V9KTtsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXMnLCd5Jyl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtcHJpbWFyeSBpcy1sYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDJ2VzdCBwYXJ0aSAhXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+OlxyXG4gICAgICAgICAgICBudWxsfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgV2VsY29tZU1vZGFsOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBMb2FkZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKCBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxkcy1yb2xsZXJcIj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PC9kaXY+XHJcbiAgICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRlcjsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSm9pIGZyb20gJ2pvaS1icm93c2VyJztcclxuaW1wb3J0IElucHV0IGZyb20gJy4vaW5wdXQnO1xyXG5cclxuY2xhc3MgRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHsgXHJcbiAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgZXJyb3JzOiB7fVxyXG4gICAgfVxyXG4gICAgdG9hc3RvcHRpb25zID0ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcInRvcC1jZW50ZXJcIixcclxuICAgICAgICBhdXRvQ2xvc2U6IDMwMDAsXHJcbiAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgY2xvc2VCdXR0b246IGZhbHNlLFxyXG4gICAgfVxyXG4gICAgdmFsaWRhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHthYm9ydEVhcmx5IDogZmFsc2V9O1xyXG4gICAgICAgIGNvbnN0IHtlcnJvcn0gPSBKb2kudmFsaWRhdGUodGhpcy5zdGF0ZS5kYXRhLCB0aGlzLnNjaGVtYSAsIG9wdGlvbnMpO1xyXG4gICAgICAgIGlmICghZXJyb3IpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCBlcnJvcnMgPSB7fTtcclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGVycm9yLmRldGFpbHMpXHJcbiAgICAgICAgICAgIGVycm9yc1tpdGVtLnBhdGhbMF1dID0gaXRlbS5tZXNzYWdlOyBcclxuICAgICAgICByZXR1cm4gZXJyb3JzO1xyXG4gICAgfTtcclxuICAgIHZhbGlkYXRlUHJvcGVydHkgPSAoe25hbWUsdmFsdWV9KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2JqID0geyBbbmFtZV0gOiB2YWx1ZX07XHJcbiAgICAgICAgY29uc3Qgc2NoZW1hID0geyBbbmFtZV0gOiB0aGlzLnNjaGVtYVtuYW1lXX1cclxuICAgICAgICBsZXQgZXJyb3JNZXNzYWdlO1xyXG4gICAgICAgIGlmIChKb2kudmFsaWRhdGUob2JqLHNjaGVtYSkuZXJyb3IgIT09IG51bGwpe1xyXG4gICAgICAgICAgICBpZiAoW25hbWVdWzBdID09PSAndXNlcm5hbWUnKXsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yID0gSm9pLnZhbGlkYXRlKG9iaixzY2hlbWEpLmVycm9yLmRldGFpbHNbMF0udHlwZTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdhbnkuZW1wdHknOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSAnTGUgbm9tIGRcXCd1dGlsaXNhdGV1ciBkb2l0IMOqdHJlIHJlbnNlaWduw6knO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdzdHJpbmcubWF4JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gJ0xlIG5vbSBkXFwndXRpbGlzYXRldXIgbmUgcGV1dCBleGPDqWRlciA0MCBjYXJhY3TDqHJlcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKFtuYW1lXVswXSA9PT0gJ3Bhc3N3b3JkJyl7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IEpvaS52YWxpZGF0ZShvYmosc2NoZW1hKS5lcnJvci5kZXRhaWxzWzBdLnR5cGU7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYW55LmVtcHR5JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gJ0xlIG1vdCBkZSBwYXNzZSBkb2l0IMOqdHJlIHJlbnNlaWduw6knO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdzdHJpbmcubWluJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gJ0xlIG1vdCBkZSBwYXNzZSBkb2l0IGNvbnRlbmlyIGF1IG1vaW5zIDggY2FyYWN0w6hyZXMnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3N0cmluZy5tYXgnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSAnTGUgbW90IGRlIHBhc3NlIG5lIGRvaXQgcGFzIGTDqXBhc3NlciAyNSBjYXJhY3TDqHJlcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKFtuYW1lXVswXSA9PT0gJ2VtYWlsJyl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IEpvaS52YWxpZGF0ZShvYmosc2NoZW1hKS5lcnJvci5kZXRhaWxzWzBdLnR5cGU7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGVycm9yKXtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdzdHJpbmcuZW1haWwnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSAnVmV1aWxsZXogcmVuc2VpZ25lciB1biBlLW1haWwgdmFsaWRlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYW55LmVtcHR5JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gJ0xcXCdhZHJlc3NlIEVtYWlsIGRvaXQgw6p0cmUgcmVuc2VpZ27DqWUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKFtuYW1lXVswXSA9PT0gJ3Bhc3MnKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yID0gSm9pLnZhbGlkYXRlKG9iaixzY2hlbWEpLmVycm9yLmRldGFpbHNbMF0udHlwZTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdhbnkuZW1wdHknOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSAnTGUgY29kZSBkXFwnYWNjw6hzIGRvaXQgw6p0cmUgcmVuc2VpZ27DqSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlcnJvck1lc3NhZ2VcclxuICAgIH07XHJcbiAgICBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgXHJcbiAgICAgICAgY29uc3QgZXJyb3JzID0gdGhpcy52YWxpZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcnMgOiBlcnJvcnMgfHwge319KTtcclxuICAgICAgICBpZiAoZXJyb3JzKSByZXR1cm47ICBcclxuICAgICAgICB0aGlzLmRvU3VibWl0KCk7ICAgICBcclxuICAgIH07XHJcbiAgICBoYW5kbGVDaGFuZ2UgPSAoe2N1cnJlbnRUYXJnZXQgOiBpbnB1dH0pID0+IHtcclxuICAgICAgICBjb25zdCBlcnJvcnMgPSB7Li4udGhpcy5zdGF0ZS5lcnJvcnN9XHJcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gdGhpcy52YWxpZGF0ZVByb3BlcnR5KGlucHV0KVxyXG4gICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIGVycm9yc1tpbnB1dC5uYW1lXSA9IGVycm9yTWVzc2FnZTtcclxuICAgICAgICBlbHNlIGRlbGV0ZSBlcnJvcnNbaW5wdXQubmFtZV07XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7Li4udGhpcy5zdGF0ZS5kYXRhfTtcclxuICAgICAgICBkYXRhW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YSAsIGVycm9ycyB9KVxyXG4gICAgfVxyXG4gICAgcmVuZGVySW5wdXQobmFtZSxsYWJlbCx0eXBlLGNsYXNzTmFtZSl7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhLCBlcnJvcnMgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIHJldHVybiA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfSBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YVtuYW1lXX0gXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2xhYmVsfSBcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9yc1tuYW1lXX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICB9XHJcbiAgICByZW5kZXJCdXR0b24obGFiZWwsY2xhc3NOYW1lKXtcclxuICAgICAgICByZXR1cm4gPGJ1dHRvbiBkaXNhYmxlZD17dGhpcy52YWxpZGF0ZSgpfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e2xhYmVsfTwvYnV0dG9uPlxyXG4gICAgfSAgICBcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IElucHV0ID0gKHtuYW1lLCBsYWJlbCwgdmFsdWUsIGNsYXNzTmFtZSwgdHlwZSwgZXJyb3IsIG9uQ2hhbmdlfSkgPT4ge1xyXG4gICAgXHJcbiAgICByZXR1cm4gKCBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiIGh0bWxGb3I9e25hbWV9PntsYWJlbH08L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Vycm9yPyAnaXNlcnJvciAnK2NsYXNzTmFtZSA6Y2xhc3NOYW1lfSBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPXt0eXBlfSBcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfSBcclxuICAgICAgICAgICAgICAgICAgICBpZD17bmFtZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIHtlcnJvciAmJiA8cCBjbGFzc05hbWU9XCJlcnJvcm1zZ1wiPntlcnJvci5yZXBsYWNlKC9cIi9nLCcnKX0uPC9wPn1cclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IElucHV0OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5jb25zdCBQYWdpbmF0aW9uID0gKHtpdGVtc0NvdW50ICwgcGFnZVNpemUgLCBjdXJyZW50UGFnZSwgb25QYWdlQ2hhbmdlICwgcHJldmlvdXNQYWdlICwgbmV4dFBhZ2V9KSA9PiB7XHJcbiAgICBjb25zdCBwYWdlc0NvdW50ID0gTWF0aC5jZWlsKGl0ZW1zQ291bnQgLyBwYWdlU2l6ZSk7XHJcbiAgICBpZihwYWdlc0NvdW50PT09MSkgcmV0dXJuIG51bGw7XHJcbiAgICBjb25zdCBwYWdlcyA9IF8ucmFuZ2UoMSwgcGFnZXNDb3VudCsxKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicGFnaW5hdGlvbi1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicGFnaW5hdGlvbi1saW5rXCIgb25DbGljaz17cHJldmlvdXNQYWdlfT4mIzYwOzwvbGk+XHJcbiAgICAgICAgICAgICAgICB7IHBhZ2VzLm1hcChwYWdlID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtwYWdlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgcGFnZSA9PT0gY3VycmVudFBhZ2U/IFwicGFnaW5hdGlvbi1saW5rIGlzLWN1cnJlbnRcIiA6IFwicGFnaW5hdGlvbi1saW5rXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uUGFnZUNoYW5nZShwYWdlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cGFnZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9ICAgICAgXHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicGFnaW5hdGlvbi1saW5rXCIgb25DbGljaz17bmV4dFBhZ2V9PiYjNjI7PC9saT4gICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgVXNlckxvYWRlciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGRzLXJpcHBsZVwiPjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48L2Rpdj4gICAgIFxyXG4gICAgICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBVc2VyTG9hZGVyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4vLi4vY29tbW9uL2Zvcm0nO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciAsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgSm9pIGZyb20gJ2pvaS1icm93c2VyJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNsYXNzIFBhc3NVcGRhdGUgZXh0ZW5kcyBGb3JtIHtcclxuICAgIHN0YXRlID0geyBcclxuICAgICAgICBkYXRhIDoge1xyXG4gICAgICAgICAgICBwYXNzd29yZCA6IFwiXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9ycyA6IHt9LCBcclxuICAgICAgICBsb2FkaW5nIDogZmFsc2UsXHJcbiAgICAgICAgYnV0dG9uVGV4dCA6IFwiVmFsaWRlclwiXHJcbiAgICB9XHJcbiAgICBzY2hlbWEgPSB7XHJcbiAgICAgICAgcGFzc3dvcmQgOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKS5taW4oOCkubWF4KDI1KSxcclxuICAgIH1cclxuICAgIGRvU3VibWl0KCl7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5kYXRhLnBhc3N3b3JkKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtwYXNzd29yZCA6IHRoaXMuc3RhdGUuZGF0YS5wYXNzd29yZCAsIGxvYWRpbmcgOiB0cnVlICwgYnV0dG9uVGV4dCA6ICdQYXRpZW50ZXouLi4uJ30pO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7IHVzZXIgOiB0aGlzLnByb3BzLmFsaWFzLCBwYXNzd29yZCA6IHRoaXMuc3RhdGUuZGF0YS5wYXNzd29yZH1cclxuICAgICAgICBheGlvcyh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6ICdhcGkvdXNlci91cGRhdGVQYXNzd29yZCcsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCd9XHJcbiAgICAgICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoJ01vdCBkZSBwYXNzZSBtb2RpZmnDqSBhdmVjIHN1Y2PDqHMgIScsIHRoaXMudG9hc3RvcHRpb25zKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCggKCkgPT4ge2RvY3VtZW50LmxvY2F0aW9uLmhyZWY9XCIvbG9naW5cIiB9LDIxMDApXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHsgXHJcbiAgICAgICAgY29uc3Qge2xvYWRpbmcsYnV0dG9uVGV4dH0gPSB0aGlzLnN0YXRlXHJcbiAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwibmV3cGFzcy1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJJbnB1dCgncGFzc3dvcmQnLCdOb3V2ZWF1IG1vdCBkZSBwYXNzZSAgOicsJ3RleHQnLCdpbnB1dCcpfVxyXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQnV0dG9uKGJ1dHRvblRleHQsJ2J1dHRvbiBpcy1zdWNjZXNzJyl9XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFBhc3NVcGRhdGUgOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4uL2NvbW1vbi9mb3JtJztcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgLCB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IEpvaSBmcm9tICdqb2ktYnJvd3Nlcic7XHJcbmltcG9ydCBQYXNzVXBkYXRlIGZyb20gJy4vcGFzc1VwZGF0ZSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jbGFzcyBVc2VyQ29uZmlybSBleHRlbmRzIEZvcm0ge1xyXG4gICAgc3RhdGUgPSB7IFxyXG4gICAgICAgIGRhdGEgOiB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lIDogXCJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgZXJyb3JzIDoge30sIFxyXG4gICAgYWxpYXMgOiBcIlwiLFxyXG4gICAgbG9hZGluZyA6IGZhbHNlLFxyXG4gICAgYnV0dG9uVGV4dCA6IFwiVmFsaWRlclwiLFxyXG4gICAgdXNlcnF1ZXJ5IDogdHJ1ZVxyXG4gICAgfVxyXG4gICAgc2NoZW1hID0ge1xyXG4gICAgICAgIHVzZXJuYW1lIDogSm9pLnN0cmluZygpLnJlcXVpcmVkKCkubWF4KDQwKSxcclxuICAgIH1cclxuICAgIGRvU3VibWl0KCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWxpYXMgOiB0aGlzLnN0YXRlLmRhdGEudXNlcm5hbWUgLCBidXR0b25UZXh0IDogJ1BhdGllbnRlei4uLid9KVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7IHVzZXJuYW1lIDogdGhpcy5zdGF0ZS5kYXRhLnVzZXJuYW1lfSAgXHJcbiAgICAgICAgYXhpb3Moe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiAnYXBpL2dldFVzZXJOYW1lJyxcclxuICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgaGVhZGVyczogeydYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J31cclxuICAgICAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgaWYocmVzLmRhdGEudXNlciA9PT0gdGhpcy5zdGF0ZS5kYXRhLnVzZXJuYW1lICl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt1c2VycXVlcnkgOiBmYWxzZX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGE6e3VzZXJuYW1lIDogJyd9LGVycm9ycyA6IHt1c2VybmFtZSA6ICcnfSAsIGJ1dHRvblRleHQgOiBcIlZhbGlkZXJcIn0pO1xyXG4gICAgICAgICAgICAgICAgdG9hc3QuZXJyb3IoJ0xlIG5vbSBkXFwndXRpbGlzYXRldXIgblxcJ2V4aXN0ZSBwYXMnLCB0aGlzLnRvYXN0b3B0aW9ucyk7ICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7IFxyXG4gICAgICAgIGNvbnN0IHsgbG9hZGluZyAsIHVzZXJxdWVyeSAsIGFsaWFzICwgYnV0dG9uVGV4dCB9ID0gdGhpcy5zdGF0ZVxyXG4gICAgICAgIHJldHVybiAoIFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyLz5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlJlbm91dmVsbGVtZW50IGRlIG1vdCBkZSBwYXNzZTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cIm5ld3Bhc3MtZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlcklucHV0KCd1c2VybmFtZScsJ1ZvdHJlIG5vbSBkXFwndXRpbGlzYXRldXIgIDonLCd0ZXh0JywnaW5wdXQnKX1cclxuICAgICAgICAgICAgICAgICAgICB7dXNlcnF1ZXJ5PyB0aGlzLnJlbmRlckJ1dHRvbihidXR0b25UZXh0LCdidXR0b24gaXMtc3VjY2VzcycpIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIHt1c2VycXVlcnk/IG51bGwgOiA8UGFzc1VwZGF0ZSBhbGlhcz17YWxpYXN9Lz59XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBVc2VyQ29uZmlybTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSm9pIGZyb20gJ2pvaS1icm93c2VyJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyB0b2FzdCwgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4vY29tbW9uL2Zvcm0nO1xyXG5pbXBvcnQgVXNlckxvYWRlciBmcm9tICcuL2NvbW1vbi91c2VybG9hZGVyJztcclxuXHJcbmNsYXNzIFNpZ251cCBleHRlbmRzIEZvcm0ge1xyXG4gICAgc3RhdGUgPSB7IFxyXG4gICAgICAgIGRhdGEgOiB7XHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZSA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZCA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBlbWFpbCA6IFwiXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBlcnJvcnMgOiB7fSxcclxuICAgICAgICBsb2FkaW5nIDogZmFsc2UsXHJcbiAgICAgICAgYnV0dG9uVGV4dCA6IFwiVmFsaWRlclwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgIHNjaGVtYSA9IHtcclxuICAgICAgICB1c2VybmFtZSA6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLm1heCg0MCksXHJcbiAgICAgICAgcGFzc3dvcmQgOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKS5taW4oOCkubWF4KDI1KSxcclxuICAgICAgICBlbWFpbCA6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLmVtYWlsKClcclxuICAgIH1cclxuICAgIGRvU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6dHJ1ZSAsIGJ1dHRvblRleHQ6IFwiQ2hhcmdlbWVudC4uLlwifSlcclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICB1c2VybmFtZSA6IHRoaXMuc3RhdGUuZGF0YS51c2VybmFtZSxcclxuICAgICAgICAgICAgcGFzc3dvcmQgOiB0aGlzLnN0YXRlLmRhdGEucGFzc3dvcmQsXHJcbiAgICAgICAgICAgIGVtYWlsIDogdGhpcy5zdGF0ZS5kYXRhLmVtYWlsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF4aW9zKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogJ2FwaS91c2VyL25ldycsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCd9ICAgICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzpmYWxzZSAsIGJ1dHRvblRleHQgOiBcIlZhbGlkZXJcIn0pXHJcbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICB0b2FzdC5zdWNjZXNzKHJlcy5kYXRhLm1lc3NhZ2UsIHRoaXMudG9hc3RvcHRpb25zKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvbG9naW4nKX0sMzUwMCl9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOmZhbHNlLCBidXR0b25UZXh0IDogXCJWYWxpZGVyXCJ9KVxyXG4gICAgICAgICAgICB0b2FzdC5lcnJvcignTGUgbm9tIGRcXCd1dGlsaXNhdGV1ciBlc3QgZMOpamEgdXRpbGlzw6knLCB0aGlzLnRvYXN0b3B0aW9ucyk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHsgXHJcbiAgICAgICAgY29uc3QgeyBsb2FkaW5nIH0gPSB0aGlzLnN0YXRlXHJcbiAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8VG9hc3RDb250YWluZXIvPlxyXG4gICAgICAgICAgICAgICAge2xvYWRpbmcgPT09IHRydWUgPyA8VXNlckxvYWRlci8+IDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5DcsOpZXIgdW4gbm91dmVhdSBjb21wdGU8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgyPlZvdXMgYXZleiBkw6lqYSB1biBjb21wdGU/IENsaXF1ZXogPExpbmsgdG89XCJsb2dpblwiPmljaTwvTGluaz4gcG91ciB2b3VzIGNvbm5lY3RlcjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInNpZ251cC1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVySW5wdXQoJ3VzZXJuYW1lJywnQ2hvaXNpciB1biBOb20gZFxcJ3V0aWxpc2F0ZXVyICA6JywndGV4dCcsJ2lucHV0Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVySW5wdXQoJ2VtYWlsJywnUmVuc2VpZ25lciB1bmUgYWRyZXNzZSBFbWFpbCAgOicsJ3RleHQnLCdpbnB1dCcpfVxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlcklucHV0KCdwYXNzd29yZCcsJ0Nyw6llciB1biBNb3QgZGUgcGFzc2UgIDonLCdwYXNzd29yZCcsJ2lucHV0Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBpcy1ncm91cGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckJ1dHRvbignVmFsaWRlcicsJ2J1dHRvbiBpcy1zdWNjZXNzJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2hvbWVcIiBjbGFzc05hbWU9XCJidXR0b24gaXMtaW5mb1wiPkFubnVsZXI8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBTaWdudXA7IiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYWdpbmF0ZShpdGVtcyxwYWdlTnVtYmVyLHBhZ2VTaXplKXtcclxuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSAocGFnZU51bWJlciAtIDEpICogcGFnZVNpemU7XHJcbiAgICByZXR1cm4gXyhpdGVtcykuc2xpY2Uoc3RhcnRJbmRleCkudGFrZShwYWdlU2l6ZSkudmFsdWUoKTtcclxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=