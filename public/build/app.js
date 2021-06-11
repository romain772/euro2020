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
      }, data.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement(react__WEBPACK_IMPORTED_MODULE_20__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("th", null, "Date du prono"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("th", null, "Statut du prono"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("th", null, "Match"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("th", null, "Mon pronostic"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("th", null, "R\xE9sultat du match"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("tbody", null, data.map(function (bet) {
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
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_number_is_integer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.number.is-integer.js */ "./node_modules/core-js/modules/es.number.is-integer.js");
/* harmony import */ var core_js_modules_es_number_is_integer_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_integer_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15__);
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
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
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
        betid: (0,uuid__WEBPACK_IMPORTED_MODULE_36__.default)(),
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

            react_toastify__WEBPACK_IMPORTED_MODULE_37__.toast.success('Pronostic validé!', {
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

            react_toastify__WEBPACK_IMPORTED_MODULE_37__.toast.success('Pronostic modifié!', {
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
      }, toast ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32__.createElement(react_toastify__WEBPACK_IMPORTED_MODULE_37__.ToastContainer, null) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32__.createElement("h3", null, match.date, " - ", match.time), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32__.createElement("h4", null, "Groupe ", match.group), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32__.createElement("p", null, match.location), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32__.createElement("pre", {
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
      }, connected === "true" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32__.createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32__.createElement("em", null, match.hometeam + " "), validationdate ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32__.createElement("input", {
        name: "homeresult",
        value: data.homeresult,
        onChange: this.handleChange,
        type: "text",
        className: "score homeresult",
        error: errors["homeresult"]
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32__.createElement("b", null, data.homeresult), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32__.createElement("b", null, " - "), validationdate ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32__.createElement("input", {
        name: "awayresult",
        value: data.awayresult,
        onChange: this.handleChange,
        type: "text",
        className: inputerrors ? 'inputerrors' : 'score'
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32__.createElement("b", null, " ", data.awayresult), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32__.createElement("em", null, " ", match.awayteam, " "), validationdate ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32__.createElement("button", {
        onClick: this.handleSubmit,
        disabled: this.validate(),
        type: "button",
        className: "button is-danger"
      }, "OK") : null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32__.createElement("p", null, "Vous devez \xEAtre connect\xE9 pour placer un pronostic."))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0FjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQmV0cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Db21pbmdNYXRjaGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Mb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9NYXRjaGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1JhbmtpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvUnVsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvV2VsY29tZU1vZGFsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2NvbW1vbi9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvY29tbW9uL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvY29tbW9uL2lucHV0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2NvbW1vbi9wYWdpbmF0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2NvbW1vbi91c2VybG9hZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3Bhc3N1cGRhdGUvcGFzc1VwZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9wYXNzdXBkYXRlL3VzZXJDb25maXJtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3NpZ251cC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdXRpbGl0aWVzL3BhZ2luYXRlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcyJdLCJuYW1lcyI6WyJSZWFjdERPTSIsIkhvbWUiLCJNYXRjaGVzIiwiU2lnbnVwIiwiTG9naW4iLCJVc2VyQ29uZmlybSIsIlJhbmtpbmciLCJSdWxlcyIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsIkFjY291bnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibG9hZGluZyIsImlkIiwibG9jYWxTdG9yYWdlIiwidXNlcm5hbWUiLCJiZXRzIiwibWF0Y2hlcyIsImN1cnJlbnRQYWdlIiwicGFnZVNpemUiLCJzdGF0ZSIsImJldHNMaXN0UGVyUGFnZSIsInBhZ2luYXRlIiwidG90YWxDb3VudCIsImxlbmd0aCIsImRhdGEiLCJzZXRTdGF0ZSIsIk1hdGgiLCJjZWlsIiwicGFnZSIsImdldFVzZXJCeUlkIiwiZ2V0TWF0Y2hlcyIsImF4aW9zIiwidGhlbiIsInJlcyIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJOdW1iZXIiLCJtZXRob2QiLCJ1cmwiLCJoZWFkZXJzIiwiZ2V0UGFnZWREYXRhIiwidG9VcHBlckNhc2UiLCJtYXAiLCJiZXQiLCJtYXRjaF9pZCIsImJldF9kYXRlIiwiZGF0ZSIsInNsaWNlIiwic3BsaXQiLCJyZXZlcnNlIiwiam9pbiIsIm1hdGNoIiwiX2lkIiwiaG9tZXNjb3JlIiwiYXdheXNjb3JlIiwiaG9tZXRlYW0iLCJhd2F5dGVhbSIsImhhbmRsZVBhZ2VDaGFuZ2UiLCJwcmV2aW91c1BhZ2UiLCJuZXh0UGFnZSIsIkNvbXBvbmVudCIsIkJldHMiLCJoaWRkZW4iLCJob21lcmVzdWx0IiwiYXdheXJlc3VsdCIsImVycm9ycyIsImJldHN0YXR1cyIsInRvYXN0IiwiY29ubmVjdGVkIiwidmFsaWRhdGlvbmRhdGUiLCJKb2kiLCJyZXF1aXJlZCIsIm9wdGlvbnMiLCJhYm9ydEVhcmx5Iiwic2NoZW1hIiwiZXJyb3IiLCJkZXRhaWxzIiwiaXRlbSIsInBhdGgiLCJtZXNzYWdlIiwiaW5wdXQiLCJjdXJyZW50VGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidmFsaWRhdGUiLCJkb1N1Ym1pdCIsIm1hdGNoaWQiLCJwcm9wcyIsImJldGlkIiwidXVpZHY0Iiwic3RhdHVzIiwicG9zaXRpb24iLCJhdXRvQ2xvc2UiLCJoaWRlUHJvZ3Jlc3NCYXIiLCJjbG9zZU9uQ2xpY2siLCJjbG9zZUJ1dHRvbiIsInNldFRpbWVvdXQiLCJsb2NhdGlvbiIsImhyZWYiLCJnZXRCZXRzIiwiZ2V0VmFsaWRhdGlvbkRhdGUiLCJzb3VyY2UiLCJjYW5jZWwiLCJtYXRjaGRhdGUiLCJ0b0xvd2VyQ2FzZSIsIkRhdGUiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJuZXdkYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwibWF0Y2h0aW1lIiwidGltZSIsImdldEhvdXJzIiwidXNlcmlkIiwiY2FuY2VsVG9rZW4iLCJ0b2tlbiIsImlzSW50ZWdlciIsImlucHV0ZXJyb3JzIiwiZ3JvdXAiLCJoYW5kbGVDbGljayIsImhhbmRsZUNoYW5nZSIsImhhbmRsZVN1Ym1pdCIsIkNvbWluZ01hdGNoZXMiLCJGaWx0ZXIiLCJpdGVtcyIsIm9uSXRlbVNlbGVjdCIsInNlbGVjdGVkSXRlbSIsImxhYmVsIiwiSGVhZGVyIiwibW9iaWxlbWVudSIsImlzQWN0aXZlIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJ3aW5kb3ciLCJyZXBsYWNlIiwib25Mb2dvdXQiLCJzaG93bW9kYWwiLCJnZXRVc2VyIiwic2hvd01vZGFsIiwiaSIsInB1c2giLCJoZWlnaHQiLCJ3aWR0aCIsInBhc3N3b3JkIiwiZXJyb3JzY291bnQiLCJidXR0b25UZXh0IiwibWF4IiwibWluIiwidG9hc3RvcHRpb25zIiwicmVuZGVySW5wdXQiLCJyZW5kZXJCdXR0b24iLCJGb3JtIiwic2VsZWN0ZWRNYXRjaGVzIiwiZ3JvdXBzIiwic2VsZWN0ZWRHcm91cCIsImRhdGVzIiwic2VsZWN0ZWREYXRlIiwidGVhbXMiLCJzZWxlY3RlZFRlYW0iLCJmaWx0ZXIiLCJtIiwidGVhbSIsIm1hdGNoTGlzdFBlclBhZ2UiLCJzZWFyY2giLCJOYU4iLCJpbmNsdWRlcyIsInNpbmdsZW1hdGNoIiwiZmluZCIsInNvcnQiLCJoYW5kbGVHcm91cEZpbHRlciIsImhhbmRsZURhdGVGaWx0ZXIiLCJoYW5kbGVUZWFtRmlsdGVyIiwidXNlcnMiLCJnZXRVc2VycyIsInVzZXJuYW1lcyIsIldlbGNvbWVNb2RhbCIsIm1vZGFsdmlldyIsIm1vZGFsc2hvdyIsIkxvYWRlciIsIm9iaiIsImVycm9yTWVzc2FnZSIsInR5cGUiLCJ2YWxpZGF0ZVByb3BlcnR5IiwiY2xhc3NOYW1lIiwiSW5wdXQiLCJvbkNoYW5nZSIsIlBhZ2luYXRpb24iLCJpdGVtc0NvdW50Iiwib25QYWdlQ2hhbmdlIiwicGFnZXNDb3VudCIsInBhZ2VzIiwiXyIsIlVzZXJMb2FkZXIiLCJQYXNzVXBkYXRlIiwidXNlciIsImFsaWFzIiwidXNlcnF1ZXJ5IiwiZW1haWwiLCJoaXN0b3J5IiwicGFnZU51bWJlciIsInN0YXJ0SW5kZXgiLCJ0YWtlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSw2Q0FBQSxlQUVJLGlEQUFDLDREQUFELHFCQUNJLGlEQUFDLHVEQUFELE9BREosZUFFSSw0RUFDSSxpREFBQyxxREFBRCxxQkFDSSxpREFBQyxvREFBRDtBQUFPLE1BQUksRUFBQyxPQUFaO0FBQW9CLFdBQVMsRUFBRUMscURBQUlBO0FBQW5DLEVBREosZUFFSSxpREFBQyxvREFBRDtBQUFPLE1BQUksRUFBQyxVQUFaO0FBQXVCLFdBQVMsRUFBRUMsd0RBQU9BO0FBQXpDLEVBRkosZUFHSSxpREFBQyxv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REFBRDtBQUFNLFVBQUUsRUFBQztBQUFULGVBQXRDLHlCQUpKLGVBS0k7QUFBTSxnQkFBUSxFQUFFLEtBQUtrSCxZQUFyQjtBQUFtQyxpQkFBUyxFQUFDO0FBQTdDLFNBQ0ssS0FBSzRCLFdBQUwsQ0FBaUIsVUFBakIsRUFBNEIsa0NBQTVCLEVBQStELE1BQS9ELEVBQXNFLE9BQXRFLENBREwsRUFFSyxLQUFLQSxXQUFMLENBQWlCLE9BQWpCLEVBQXlCLGlDQUF6QixFQUEyRCxNQUEzRCxFQUFrRSxPQUFsRSxDQUZMLEVBR0ssS0FBS0EsV0FBTCxDQUFpQixVQUFqQixFQUE0QiwwQkFBNUIsRUFBdUQsVUFBdkQsRUFBa0UsT0FBbEUsQ0FITCxlQUlJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0ssS0FBS0MsWUFBTCxDQUFrQixTQUFsQixFQUE0QixtQkFBNUIsQ0FETCxlQUVJLGtEQUFDLG1EQUFEO0FBQU0sVUFBRSxFQUFDLE9BQVQ7QUFBaUIsaUJBQVMsRUFBQztBQUEzQixtQkFGSixDQUpKLENBTEosQ0FESjtBQWlCSDs7OztFQTdEZ0JDLGtEOztBQWdFckIsaUVBQWUxSixNQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEVBO0FBRU8sU0FBU29CLFFBQVQsQ0FBa0IyRyxLQUFsQixFQUF3QjJFLFVBQXhCLEVBQW1DekwsUUFBbkMsRUFBNEM7QUFDL0MsTUFBTTBMLFVBQVUsR0FBRyxDQUFDRCxVQUFVLEdBQUcsQ0FBZCxJQUFtQnpMLFFBQXRDO0FBQ0EsU0FBT2lMLDZDQUFDLENBQUNuRSxLQUFELENBQUQsQ0FBU2hGLEtBQVQsQ0FBZTRKLFVBQWYsRUFBMkJDLElBQTNCLENBQWdDM0wsUUFBaEMsRUFBMENrRSxLQUExQyxFQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7O0FDTEQiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFN3aXRjaCwgUm91dGUsIFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL0hvbWUnO1xuaW1wb3J0IE1hdGNoZXMgZnJvbSAnLi9jb21wb25lbnRzL01hdGNoZXMnO1xuaW1wb3J0IFNpZ251cCBmcm9tICcuL2NvbXBvbmVudHMvc2lnbnVwJztcbmltcG9ydCBMb2dpbiBmcm9tICcuL2NvbXBvbmVudHMvTG9naW4nO1xuaW1wb3J0IEFjY291bnQgZnJvbSAnLi9jb21wb25lbnRzL0FjY291bnQnO1xuaW1wb3J0IFJhbmtpbmcgZnJvbSAnLi9jb21wb25lbnRzL1JhbmtpbmcnO1xuaW1wb3J0IFVzZXJDb25maXJtIGZyb20gJy4vY29tcG9uZW50cy9wYXNzdXBkYXRlL3VzZXJDb25maXJtJztcbmltcG9ydCBSdWxlcyBmcm9tICcuL2NvbXBvbmVudHMvUnVsZXMnO1xuICAgIFxuUmVhY3RET00ucmVuZGVyKFxuXG4gICAgPFJvdXRlcj5cbiAgICAgICAgPEhlYWRlci8+XG4gICAgICAgIDxtYWluPlxuICAgICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9ob21lXCIgY29tcG9uZW50PXtIb21lfS8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvbWF0Y2hlc1wiIGNvbXBvbmVudD17TWF0Y2hlc30vPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3NpZ251cFwiIGNvbXBvbmVudD17U2lnbnVwfS8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvbG9naW5cIiBjb21wb25lbnQ9e0xvZ2lufS8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvbmV3cGFzc3dvcmQvXCIgY29tcG9uZW50PXtVc2VyQ29uZmlybX0vPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3JhbmtpbmdcIiBjb21wb25lbnQ9e1Jhbmtpbmd9Lz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9ydWxlc1wiIGNvbXBvbmVudD17UnVsZXN9Lz5cbiAgICAgICAgICAgICAgICB7c2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnY29ubmVjdGVkJyk9PT0ndHJ1ZSc/XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2FjY291bnRcIiBjb21wb25lbnQ9e0FjY291bnR9Lz46XG4gICAgICAgICAgICAgICAgICAgIDxSZWRpcmVjdCB0bz1cIi9ob21lXCIgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZXhhY3QgPlxuICAgICAgICAgICAgICAgICAgICA8UmVkaXJlY3QgdG89XCIvaG9tZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgICAgICA8UmVkaXJlY3QgdG89XCIvaG9tZVwiLz5cbiAgICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICA8L21haW4+XG4gICAgICAgIFxuICAgIDwvUm91dGVyPiAgICBcbiAgICBcbiAgICAsZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuL2NvbW1vbi9Mb2FkZXInO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBSZWFjdFRvb2x0aXAgZnJvbSAncmVhY3QtdG9vbHRpcCc7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4vY29tbW9uL3BhZ2luYXRpb24nO1xyXG5pbXBvcnQgeyBwYWdpbmF0ZSB9IGZyb20gJy4uL3V0aWxpdGllcy9wYWdpbmF0ZSc7XHJcblxyXG5jbGFzcyBBY2NvdW50IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0ZSA9IHsgXHJcbiAgICAgICAgbG9hZGluZyA6IHRydWUsXHJcbiAgICAgICAgaWQ6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZCcpLFxyXG4gICAgICAgIHVzZXJuYW1lIDogXCJcIixcclxuICAgICAgICBiZXRzIDogW10sXHJcbiAgICAgICAgbWF0Y2hlcyA6IFtdLFxyXG4gICAgICAgIGN1cnJlbnRQYWdlIDogMSAsXHJcbiAgICAgICAgcGFnZVNpemUgOiAxMCxcclxuICAgIH07XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIHRoaXMuZ2V0VXNlckJ5SWQoKTtcclxuICAgICAgICB0aGlzLmdldE1hdGNoZXMoKTtcclxuICAgIH07XHJcbiAgICBnZXRNYXRjaGVzKCl7ICAgICAgICBcclxuICAgICAgICBheGlvc1xyXG4gICAgICAgICAgICAuZ2V0KGBodHRwczovL3BvcnRmb2xpby03MjE0Ny1kZWZhdWx0LXJ0ZGIuZXVyb3BlLXdlc3QxLmZpcmViYXNlZGF0YWJhc2UuYXBwL21hdGNoZXMuanNvbmApXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHt0aGlzLnNldFN0YXRlKHttYXRjaGVzIDogcmVzLmRhdGF9KX0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7Y29uc29sZS5sb2coZXJyKX0pXHJcbiAgICB9O1xyXG4gICAgZ2V0VXNlckJ5SWQoKXtcclxuICAgICAgICBjb25zdCBpZCA9IE51bWJlcih0aGlzLnN0YXRlLmlkKTtcclxuICAgICAgICBjb25zdCBkYXRhID0geyBpZCA6IGlkfTtcclxuICAgICAgICBheGlvcyh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6ICdhcGkvdXNlci9nZXRVc2VyQnlJZCcsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCd9ICAgICBcclxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3VzZXJuYW1lOnJlcy5kYXRhfSlcclxuICAgICAgICB9KTtcclxuICAgICAgICBheGlvcyh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6ICdhcGkvZ2V0YmV0c0J5VXNlcicsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCd9ICAgICBcclxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2JldHMgOiByZXMuZGF0YSAsIGxvYWRpbmcgOiBmYWxzZX0pXHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcbiAgICBnZXRQYWdlZERhdGEgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBwYWdlU2l6ZSwgY3VycmVudFBhZ2UsIGJldHN9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCBiZXRzTGlzdFBlclBhZ2UgPSBwYWdpbmF0ZShiZXRzLGN1cnJlbnRQYWdlLHBhZ2VTaXplKTtcclxuICAgICAgICByZXR1cm4geyB0b3RhbENvdW50OiBiZXRzLmxlbmd0aCwgZGF0YTogYmV0c0xpc3RQZXJQYWdlfVxyXG4gICAgfVxyXG4gICAgcHJldmlvdXNQYWdlID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCB7Y3VycmVudFBhZ2V9ID0gdGhpcy5zdGF0ZVxyXG4gICAgICAgIGlmIChjdXJyZW50UGFnZSA+MSApe1xyXG4gICAgICAgICAgICBjdXJyZW50UGFnZS0tXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRQYWdlfSlcclxuICAgIH0gICAgXHJcbiAgICBuZXh0UGFnZSA9ICgpID0+IHtcclxuICAgICAgICBsZXQge2N1cnJlbnRQYWdlLGJldHMscGFnZVNpemV9ID0gdGhpcy5zdGF0ZVxyXG4gICAgICAgIGlmIChjdXJyZW50UGFnZSA8IE1hdGguY2VpbChiZXRzLmxlbmd0aCAvIHBhZ2VTaXplKSApe1xyXG4gICAgICAgICAgICBjdXJyZW50UGFnZSsrXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRQYWdlfSlcclxuICAgIH0gICAgXHJcbiAgICBoYW5kbGVQYWdlQ2hhbmdlID0gKHBhZ2UpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudFBhZ2UgOiBwYWdlfSk7XHJcbiAgICB9O1xyXG4gICAgcmVuZGVyKCkgeyBcclxuICAgICAgICBjb25zdCB7dXNlcm5hbWUgLCBsb2FkaW5nICwgYmV0cyAsIG1hdGNoZXMgLCBwYWdlU2l6ZSAsY3VycmVudFBhZ2V9ID0gdGhpcy5zdGF0ZVxyXG4gICAgICAgIGNvbnN0IHsgdG90YWxDb3VudCAsIGRhdGEgfSA9IHRoaXMuZ2V0UGFnZWREYXRhKCk7XHJcbiAgICAgICAgcmV0dXJuICggICAgIFxyXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGUgaXMtMlwiPk1vbiBDb21wdGU8L2gyPlxyXG4gICAgICAgICAgICAgICAge2xvYWRpbmc/IDxMb2FkZXIvPjpcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPk1vbiBlc3BhY2U8L3A+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxlbSBjbGFzc05hbWU9XCJ1c2VybmFtZVwiPnt1c2VybmFtZS50b1VwcGVyQ2FzZSgpfTwvZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyPjwvaHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTZcIj5NZXMgcHJvbm9zIDo8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLmxlbmd0aCA+IDAgPyBcclxuICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RGF0ZSBkdSBwcm9ubzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlN0YXR1dCBkdSBwcm9ubzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk1hdGNoPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TW9uIHByb25vc3RpYzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlLDqXN1bHRhdCBkdSBtYXRjaDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLm1hcChiZXQgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtiZXQubWF0Y2hfaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2JldC5iZXRfZGF0ZS5kYXRlLnNsaWNlKDAsMTApLnNwbGl0KCctJykucmV2ZXJzZSgpLmpvaW4oJy8nKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcy5tYXAobWF0Y2ggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoKG1hdGNoLl9pZCA9PSBiZXQubWF0Y2hfaWQgJiYgKG1hdGNoLmhvbWVzY29yZSAmJiBtYXRjaC5hd2F5c2NvcmUgIT09IFwiXCIpKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYmV0LmhvbWVzY29yZSA+IGJldC5hd2F5c2NvcmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihtYXRjaC5ob21lc2NvcmUgPiBtYXRjaC5hd2F5c2NvcmUgJiYgbWF0Y2guaG9tZXNjb3JlID09IGJldC5ob21lc2NvcmUgJiYgbWF0Y2guYXdheXNjb3JlID09IGJldC5hd2F5c2NvcmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx0ZCBrZXk9e21hdGNoLl9pZH0+UGFyaSBHYWduw6kgISAzIHBvaW50cyE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYobWF0Y2guaG9tZXNjb3JlID4gbWF0Y2guYXdheXNjb3JlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8dGQga2V5PXttYXRjaC5faWR9PlBhcmkgR2FnbsOpICEgMiBwb2ludHMhPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx0ZCBrZXk9e21hdGNoLl9pZH0+UGFyaSBwZXJkdTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYmV0LmhvbWVzY29yZSA8IGJldC5hd2F5c2NvcmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihtYXRjaC5ob21lc2NvcmUgPCBtYXRjaC5hd2F5c2NvcmUgJiYgbWF0Y2guaG9tZXNjb3JlID09IGJldC5ob21lc2NvcmUgJiYgbWF0Y2guYXdheXNjb3JlID09IGJldC5hd2F5c2NvcmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx0ZCBrZXk9e21hdGNoLl9pZH0+UGFyaSBHYWduw6kgISAzIHBvaW50cyE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihtYXRjaC5ob21lc2NvcmUgPCBtYXRjaC5hd2F5c2NvcmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx0ZCBrZXk9e21hdGNoLl9pZH0+UGFyaSBHYWduw6kgISAyIHBvaW50cyE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRkIGtleT17bWF0Y2guX2lkfT5QYXJpIHBlcmR1PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGJldC5ob21lc2NvcmUgPT09IGJldC5hd2F5c2NvcmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihtYXRjaC5ob21lc2NvcmUgPT09IG1hdGNoLmF3YXlzY29yZSAmJiBtYXRjaC5ob21lc2NvcmUgPT0gYmV0LmhvbWVzY29yZSAmJiBtYXRjaC5hd2F5c2NvcmUgPT0gYmV0LmF3YXlzY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRkIGtleT17bWF0Y2guX2lkfT5QYXJpIEdhZ27DqSAhIDMgcG9pbnRzITwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYobWF0Y2guaG9tZXNjb3JlID09PSBtYXRjaC5hd2F5c2NvcmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx0ZCBrZXk9e21hdGNoLl9pZH0+UGFyaSBHYWduw6kgISAyIHBvaW50cyE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRkIGtleT17bWF0Y2guX2lkfT5QYXJpIHBlcmR1PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZigobWF0Y2guX2lkID09IGJldC5tYXRjaF9pZCAmJiBtYXRjaC5ob21lc2NvcmU9PT0gXCJcIikpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17bWF0Y2guX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRpcD1cIlZvaXIgb3UgbW9kaWZpZXIgbGUgcHJvbm9zdGljXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17YC9tYXRjaGVzP21hdGNoPSR7YmV0Lm1hdGNoX2lkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0VG9vbHRpcCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibGlnaHRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXIgYm9yZGVyQ29sb3I9XCIjMzM4NEE4XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yPVwiIzMzODRBOFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93Q29sb3I9XCIjMzM4NEE4XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW4gY291cnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWFnZXMvJHtiZXQuaG9tZXRlYW19LnN2Z2B9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyNXB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvbWVpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2JldC5ob21ldGVhbX0gLSB7YmV0LmF3YXl0ZWFtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWFnZXMvJHtiZXQuYXdheXRlYW19LnN2Z2B9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyNXB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImF3YXlpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntiZXQuaG9tZXNjb3JlfSAtIHtiZXQuYXdheXNjb3JlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21hdGNoZXMubWFwKG1hdGNoID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaC5ob21lc2NvcmUgJiYgbWF0Y2guX2lkID09PSBiZXQubWF0Y2hfaWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bWF0Y2guX2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWF0Y2guaG9tZXNjb3JlfSAtIHttYXRjaC5hd2F5c2NvcmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYobWF0Y2guaG9tZXNjb3JlID09PSAnJyAmJiBtYXRjaC5faWQgPT09IGJldC5tYXRjaF9pZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx0ZCBrZXk9e21hdGNoLl9pZH0+TWF0Y2ggw6AgdmVuaXI8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD4gOlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlZvdXMgbidhdmV6IHBhcyBlbmNvcmUgcGxhY8OpIGRlIHByb25vc3RpY3MuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5SZXZlbmV6IHZlcnMgbGVzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvbWF0Y2hlc1wiPiBtYXRjaGVzIDwvTGluaz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3VyIGNvbW1lbmNlciDDoCBwcm9ub3N0aXF1ZXIuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2luYXRpb24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtc0NvdW50PXt0b3RhbENvdW50fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplPXtwYWdlU2l6ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlPXtjdXJyZW50UGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUGFnZUNoYW5nZT17dGhpcy5oYW5kbGVQYWdlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNQYWdlPXt0aGlzLnByZXZpb3VzUGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRQYWdlPXt0aGlzLm5leHRQYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50OyIsImltcG9ydCBSZWFjdCAsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuL2NvbW1vbi9Mb2FkZXInO1xyXG5pbXBvcnQgSm9pIGZyb20gJ2pvaS1icm93c2VyJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XHJcbmltcG9ydCB7IHRvYXN0LCBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IHsgaXNOdW1iZXIgfSBmcm9tICdsb2Rhc2gtZXMnO1xyXG5cclxuY2xhc3MgQmV0cyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBoaWRkZW4gOiB0cnVlLFxyXG4gICAgICAgIGRhdGEgOiB7XHJcbiAgICAgICAgICAgIGhvbWVyZXN1bHQgOiBcIiBcIixcclxuICAgICAgICAgICAgYXdheXJlc3VsdCA6IFwiIFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcnM6IHt9LFxyXG4gICAgICAgIGJldHN0YXR1cyA6IGZhbHNlLFxyXG4gICAgICAgIHRvYXN0IDogZmFsc2UsIFxyXG4gICAgICAgIGxvYWRpbmcgOiB0cnVlLFxyXG4gICAgICAgIGNvbm5lY3RlZCA6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2Nvbm5lY3RlZCcpLFxyXG4gICAgICAgIHZhbGlkYXRpb25kYXRlIDogdHJ1ZVxyXG4gICAgfTtcclxuICAgIHNvdXJjZSA9IGF4aW9zLkNhbmNlbFRva2VuLnNvdXJjZSgpO1xyXG4gICAgc2NoZW1hID0ge1xyXG4gICAgICAgIGhvbWVyZXN1bHQgOiBKb2kubnVtYmVyKCkucmVxdWlyZWQoKSxcclxuICAgICAgICBhd2F5cmVzdWx0IDogSm9pLm51bWJlcigpLnJlcXVpcmVkKClcclxuICAgIH07XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIHRoaXMuZ2V0QmV0cygpO1xyXG4gICAgICAgIHRoaXMuZ2V0VmFsaWRhdGlvbkRhdGUoKVxyXG4gICAgfTtcclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNvdXJjZSkge1xyXG4gICAgICAgICAgdGhpcy5zb3VyY2UuY2FuY2VsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0VmFsaWRhdGlvbkRhdGUoKXtcclxuICAgICAgICBjb25zdCBtYXRjaGRhdGUgPSB0aGlzLnByb3BzLm1hdGNoLmRhdGUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKVxyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7IHllYXI6ICdudW1lcmljJywgbW9udGg6ICdsb25nJyAsIGRheTogXCJudW1lcmljXCJ9O1xyXG4gICAgICAgIGNvbnN0IG5ld2RhdGUgPSBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygnZnItRlInLG9wdGlvbnMpO1xyXG4gICAgICAgIGNvbnN0IG1hdGNodGltZSA9IE51bWJlcih0aGlzLnByb3BzLm1hdGNoLnRpbWUuc3BsaXQoJ2gnKS5qb2luKCcnKSlcclxuICAgICAgICBjb25zdCB0aW1lID0gZGF0ZS5nZXRIb3VycygpXHJcbiAgICAgICAgaWYobWF0Y2hkYXRlID09PSBuZXdkYXRlICYmIG1hdGNodGltZSAtIHRpbWUgPD0gMSl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRpb25kYXRlIDogZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldEJldHMoKXtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jb25uZWN0ZWQgPT09ICd0cnVlJyl7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHsgdXNlcmlkIDogTnVtYmVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZCcpKSAsIG1hdGNoaWQgOiB0aGlzLnByb3BzLm1hdGNoLl9pZH07XHJcbiAgICAgICAgYXhpb3MoeyBtZXRob2QgOiAnUE9TVCcgLCB1cmw6ICdhcGkvZ2V0YmV0cycsIGRhdGEgOiBkYXRhICwgaGVhZGVyczogeydYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J30gLCBjYW5jZWxUb2tlbjogdGhpcy5zb3VyY2UudG9rZW5cclxuICAgICAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgaWYgKE51bWJlci5pc0ludGVnZXIocmVzLmRhdGEuaG9tZXNjb3JlKSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YSA6IHsgaG9tZXJlc3VsdCA6IHJlcy5kYXRhLmhvbWVzY29yZSAsIGF3YXlyZXN1bHQgOiByZXMuZGF0YS5hd2F5c2NvcmUgfSwgbG9hZGluZyA6IGZhbHNlICwgYmV0c3RhdHVzIDogdHJ1ZX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YSA6IHsgaG9tZXJlc3VsdCA6ICcnICwgYXdheXJlc3VsdCA6ICcnIH0sIGxvYWRpbmcgOiBmYWxzZX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KX1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZyA6IGZhbHNlIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHZhbGlkYXRlID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7YWJvcnRFYXJseSA6IGZhbHNlfTtcclxuICAgICAgICBjb25zdCB7ZXJyb3J9ID0gSm9pLnZhbGlkYXRlKHRoaXMuc3RhdGUuZGF0YSwgdGhpcy5zY2hlbWEsIG9wdGlvbnMpO1xyXG4gICAgICAgIGlmICghZXJyb3IpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGNvbnN0IGVycm9ycyA9IHt9O1xyXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgZXJyb3IuZGV0YWlscylcclxuICAgICAgICAgICAgZXJyb3JzW2l0ZW0ucGF0aFswXV0gPSBpdGVtLm1lc3NhZ2U7IFxyXG4gICAgICAgIHJldHVybiBlcnJvcnM7XHJcbiAgICB9O1xyXG4gICAgaGFuZGxlQ2hhbmdlID0gKHtjdXJyZW50VGFyZ2V0IDogaW5wdXR9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHsuLi50aGlzLnN0YXRlLmRhdGF9O1xyXG4gICAgICAgIGRhdGFbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRhfSk7XHJcbiAgICB9O1xyXG4gICAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aGlkZGVuOmZhbHNlfSlcclxuICAgIH07XHJcbiAgICBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgXHJcbiAgICAgICAgY29uc3QgZXJyb3JzID0gdGhpcy52YWxpZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcnMgOiBlcnJvcnMgfHwge319KTtcclxuICAgICAgICBpZiAoZXJyb3JzKSByZXR1cm47ICBcclxuICAgICAgICB0aGlzLmRvU3VibWl0KCk7XHJcbiAgICB9O1xyXG4gICAgZG9TdWJtaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAgICAgaG9tZXNjb3JlIDogdGhpcy5zdGF0ZS5kYXRhLmhvbWVyZXN1bHQsXHJcbiAgICAgICAgICAgIGF3YXlzY29yZSA6IHRoaXMuc3RhdGUuZGF0YS5hd2F5cmVzdWx0LFxyXG4gICAgICAgICAgICBtYXRjaGlkIDogdGhpcy5wcm9wcy5tYXRjaC5faWQsXHJcbiAgICAgICAgICAgIGJldGlkIDogdXVpZHY0KCksXHJcbiAgICAgICAgICAgIGhvbWV0ZWFtIDogdGhpcy5wcm9wcy5tYXRjaC5ob21ldGVhbSxcclxuICAgICAgICAgICAgYXdheXRlYW0gOiAgdGhpcy5wcm9wcy5tYXRjaC5hd2F5dGVhbVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYmV0c3RhdHVzID09PSBmYWxzZSl7XHJcbiAgICAgICAgICAgIGF4aW9zKFxyXG4gICAgICAgICAgICAgICAge21ldGhvZDogJ1BPU1QnLCB1cmw6ICdhcGkvcG9zdGJldHMnLCBkYXRhOiBkYXRhLCBoZWFkZXJzOiB7J1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnfX0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuIDogdHJ1ZSAsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9tZXJlc3VsdCA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2F5cmVzdWx0IDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmV0c3RhdHVzIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3QgOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoJ1Byb25vc3RpYyB2YWxpZMOpIScsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9DbG9zZTogMTAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZUJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IGRvY3VtZW50LmxvY2F0aW9uLmhyZWY9YC9tYXRjaGVzP3A9JHt0aGlzLnByb3BzLmN1cnJlbnRQYWdlfWAgfSwxMjAwKTtcclxuICAgICAgICAgICAgICAgIH07ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdG9hc3QuZXJyb3IoJ1ZldWlsbGV6IHLDqWVzc2F5ZXInLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0Nsb3NlOiAzMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuc2V0U3RhdGUoe3RvYXN0IDogZmFsc2V9KX0sNjAwMCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlLmJldHN0YXR1cyA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIGF4aW9zKHttZXRob2Q6J1BPU1QnLHVybDonYXBpL3VwZGF0ZWJldHMnLCBkYXRhOmRhdGEsIGhlYWRlcnM6IHsnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCd9fSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlcyk9PiB7aWYgKHJlcy5zdGF0dXMgPT09IDIwMCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgXHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZGVuIDogdHJ1ZSAsIFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvbWVyZXN1bHQgOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2F5cmVzdWx0IDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICAgICAgICAgIGJldHN0YXR1cyA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QgOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgICAgICAgICB0b2FzdC5zdWNjZXNzKCdQcm9ub3N0aWMgbW9kaWZpw6khJywge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcC1yaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9DbG9zZTogMTAwMCxcclxuICAgICAgICAgICAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBjbG9zZUJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBkb2N1bWVudC5sb2NhdGlvbi5ocmVmPWAvbWF0Y2hlcz9wPSR7dGhpcy5wcm9wcy5jdXJyZW50UGFnZX1gIH0sMTIwMCk7XHJcbiAgICAgICAgICAgIH19KTtcclxuICAgICAgICB9OyAgICAgICBcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3Qge2hpZGRlbiwgZGF0YSAsIGVycm9ycyAsIGlucHV0ZXJyb3JzICwgYmV0c3RhdHVzICwgdG9hc3QgLCBjb25uZWN0ZWQgLCBsb2FkaW5nICwgdmFsaWRhdGlvbmRhdGV9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7bWF0Y2h9ID0gdGhpcy5wcm9wcztcclxuICAgIFxyXG4gICAgICAgIHJldHVybiAoIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxyXG4gICAgICAgICAgICAgICAge3RvYXN0PyA8VG9hc3RDb250YWluZXIvPiA6IG51bGx9ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGgzPnttYXRjaC5kYXRlfSAtIHttYXRjaC50aW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8aDQ+R3JvdXBlIHttYXRjaC5ncm91cH08L2g0PlxyXG4gICAgICAgICAgICAgICAgPHA+e21hdGNoLmxvY2F0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgIDxwcmUgY2xhc3NOYW1lPVwibWF0Y2hkZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJob21ldGVhbWltZ1wiIHNyYz17YC9pbWFnZXMvJHttYXRjaC5ob21ldGVhbX0uc3ZnYH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIHttYXRjaC5ob21ldGVhbX0ge21hdGNoLmhvbWVzY29yZX0gLSB7bWF0Y2guYXdheXNjb3JlfSB7bWF0Y2guYXdheXRlYW19XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhd2F5dGVhbWltZ1wiIHNyYz17YC9pbWFnZXMvJHttYXRjaC5hd2F5dGVhbX0uc3ZnYH0vPlxyXG4gICAgICAgICAgICAgICAgPC9wcmU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge2xvYWRpbmcgPT09IHRydWUgPyA8TG9hZGVyLz4gOiBcclxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9IGNsYXNzTmFtZT17aGlkZGVuID8gJ2J1dHRvbiBiZXRidXR0b24gaXMtcHJpbWFyeScgOiAnaGlkZGVuJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtiZXRzdGF0dXM/ICdWb2lyIHZvdHJlIHByb25vc3RpYycgOiBcIlBhcmllciBzdXIgY2UgbWF0Y2hcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aGlkZGVuID8gJ2hpZGRlbicgOiAnYmV0Z2FtZXMnfT5cclxuICAgICAgICAgICAgICAgIHtjb25uZWN0ZWQgPT09IFwidHJ1ZVwiID8gICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZW0+e21hdGNoLmhvbWV0ZWFtK1wiIFwifTwvZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uZGF0ZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJob21lcmVzdWx0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhLmhvbWVyZXN1bHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2NvcmUgaG9tZXJlc3VsdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzW1wiaG9tZXJlc3VsdFwiXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPntkYXRhLmhvbWVyZXN1bHR9PC9iPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPiAtIDwvYj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uZGF0ZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhd2F5cmVzdWx0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhLmF3YXlyZXN1bHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpbnB1dGVycm9ycz8gJ2lucHV0ZXJyb3JzJyA6ICdzY29yZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yj4ge2RhdGEuYXdheXJlc3VsdH08L2I+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZW0+IHttYXRjaC5hd2F5dGVhbX0gPC9lbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb25kYXRlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnZhbGlkYXRlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT0tcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+IDpudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+Vm91cyBkZXZleiDDqnRyZSBjb25uZWN0w6kgcG91ciBwbGFjZXIgdW4gcHJvbm9zdGljLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBCZXRzOyIsImltcG9ydCB7IG1hdGNoZXMgfSBmcm9tICdsb2Rhc2gtZXMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQ29taW5nTWF0Y2hlcyA9ICh7ZGF0YX0pID0+IHtcclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29taW5nbWF0Y2hlc1wiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGUgaXMtM1wiPlByb2NoYWlucyBtYXRjaGVzPC9oMz5cclxuICAgICAgICAgICAge2RhdGEubWFwKG1hdGNoID0+IFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCIga2V5PXttYXRjaC5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxiPnttYXRjaC5kYXRlfTwvYj5cclxuICAgICAgICAgICAgICAgICAgICA8cD57bWF0Y2guaG9tZXRlYW19IC0ge21hdGNoLmF3YXl0ZWFtfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgQ29taW5nTWF0Y2hlczsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgRmlsdGVyID0gKHtpdGVtcyxvbkl0ZW1TZWxlY3Qsc2VsZWN0ZWRJdGVtLGxhYmVsfSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tdHJpZ2dlclwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+RmlsdHJlciBwYXIge2xhYmVsLnRvTG93ZXJDYXNlKCl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpcy1zbWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9hbmdsZWRvd24uc3ZnXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXsnJyA9PT0gc2VsZWN0ZWRJdGVtID8gJ3NlbGVjdGlvbiBpcy1zZWxlY3RlZCcgOiAnc2VsZWN0aW9uJ30gb25DbGljaz17ICgpID0+IG9uSXRlbVNlbGVjdCgnQWxsJyl9PlRvdXM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoaXRlbSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2l0ZW0gPT09IHNlbGVjdGVkSXRlbSA/ICdzZWxlY3Rpb24gaXMtc2VsZWN0ZWQnIDogJ3NlbGVjdGlvbid9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ICgpID0+IG9uSXRlbVNlbGVjdChpdGVtKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsICE9PSAnR3JvdXBlICc/IGl0ZW0gOiBsYWJlbCArIGl0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICApfSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIGNvbm5lY3RlZCA6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2Nvbm5lY3RlZCcpLFxyXG4gICAgICAgIG1vYmlsZW1lbnUgOiBmYWxzZSxcclxuICAgICAgICBpc0FjdGl2ZSA6IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2dvdXQoKXtcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdjb25uZWN0ZWQnLCdmYWxzZScpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdpZCcpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvYXBpL2xvZ291dCcpO1xyXG4gICAgfTtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHtjb25uZWN0ZWQgLCBpc0FjdGl2ZX0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIHJldHVybiAoIFxyXG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9ob21lXCI+PGltZyBzcmM9XCIvaW1hZ2VzL2V1cm8yMDIwLWxvZ28uc3ZnXCIgd2lkdGg9XCI3MFwiPjwvaW1nPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4ge3RoaXMuc2V0U3RhdGUoe2lzQWN0aXZlIDogIWlzQWN0aXZlfSl9fSBjbGFzc05hbWU9e2lzQWN0aXZlP1wibmF2YmFyLWJ1cmdlciBpcy1hY3RpdmVcIjpcIm5hdmJhci1idXJnZXJcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpc0FjdGl2ZT9cIm5hdmJhci1tZW51IGlzLWFjdGl2ZVwiOlwibmF2YmFyLW1lbnVcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3J1bGVzXCIgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5Sw6hnbGVzPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaXRlbSBoYXMtZHJvcGRvd24gaXMtaG92ZXJhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiPk1hdGNoZXM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1kcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9tYXRjaGVzXCIgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5QaGFzZSBkZSBHcm91cGU8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8TGluayB0bz1cIi8jXCIgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5QaGFzZSBmaW5hbGU8L0xpbms+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9yYW5raW5nXCIgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5DbGFzc2VtZW50PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29ubmVjdGVkPT09J3RydWUnP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2FjY291bnRcIiBjbGFzc05hbWU9XCJidXR0b24gaXMtcHJpbWFyeVwiPk1vbiBjb21wdGU8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMub25Mb2dvdXR9ICBjbGFzc05hbWU9XCJidXR0b24gaXMtd2FybmluZ1wiPkTDqWNvbm5lY3Rpb248L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9sb2dpblwiIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1wcmltYXJ5XCI+Q29ubmVjdGlvbjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3NpZ251cFwiIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1pbmZvXCI+PHN0cm9uZz5DcsOpZXIgdW4gY29tcHRlPC9zdHJvbmc+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IENvbWluZ01hdGNoZXMgZnJvbSAnLi9Db21pbmdNYXRjaGVzJztcclxuaW1wb3J0IHsgVHdpdHRlclRpbWVsaW5lRW1iZWQgfSBmcm9tICdyZWFjdC10d2l0dGVyLWVtYmVkJztcclxuaW1wb3J0IFdlbGNvbWVNb2RhbCBmcm9tICcuL1dlbGNvbWVNb2RhbCc7XHJcblxyXG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0ZSA9IHsgXHJcbiAgICAgICAgbWF0Y2hlcyA6IFtdLFxyXG4gICAgICAgIHNob3dtb2RhbCA6IGZhbHNlXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgdGhpcy5nZXRNYXRjaGVzKCk7XHJcbiAgICAgICAgY29uc3QgY29ubmVjdGVkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnY29ubmVjdGVkJyk7XHJcbiAgICAgICAgaWYgKGNvbm5lY3RlZCA9PT0gJ3RydWUnKSB0aGlzLmdldFVzZXIoKTtcclxuICAgICAgICB0aGlzLnNob3dNb2RhbCgpXHJcbiAgICAgICAgXHJcbiAgICB9O1xyXG4gICAgc2hvd01vZGFsKCl7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dtb2RhbCA6IHRydWV9KVxyXG4gICAgICAgIH0sIDMwMDApO1xyXG4gICAgfVxyXG4gICAgZ2V0VXNlcigpe1xyXG4gICAgICAgIGF4aW9zLmdldCgnYXBpL2dldFVzZXJJZCcpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lkJyxyZXMuZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgZ2V0TWF0Y2hlcygpe1xyXG4gICAgICAgIGF4aW9zLmdldChgaHR0cHM6Ly9wb3J0Zm9saW8tNzIxNDctZGVmYXVsdC1ydGRiLmV1cm9wZS13ZXN0MS5maXJlYmFzZWRhdGFiYXNlLmFwcC9tYXRjaGVzLmpzb25gKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGxldCBtYXRjaGVzID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHJlcy5kYXRhLmxlbmd0aCA7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGFbaV0uaG9tZXNjb3JlID09PSBcIlwiKXtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaGVzLnB1c2gocmVzLmRhdGFbaV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21hdGNoZXMgOiBtYXRjaGVzLnNsaWNlKDAsNCl9KSBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHttYXRjaGVzICwgc2hvd21vZGFsfSA9IHRoaXMuc3RhdGVcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJoZWFkZXJpbWdcIj5cclxuICAgICAgICAgICAgICAgIHtzaG93bW9kYWw/PFdlbGNvbWVNb2RhbC8+Om51bGx9XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvZXVybzIwMjAtbG9nby5zdmdcIi8+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPENvbWluZ01hdGNoZXMgZGF0YT17bWF0Y2hlc30vPlxyXG4gICAgICAgICAgICAgICAgPFR3aXR0ZXJUaW1lbGluZUVtYmVkXHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlVHlwZT1cInByb2ZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNjcmVlbk5hbWU9XCJlcXVpcGVkZWZyYW5jZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17e2hlaWdodDogNTAwICwgd2lkdGggOiAzMDB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGxhbmc9XCJmclwiXHJcbiAgICAgICAgICAgICAgICAvPiAgICAgXHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj4gICAgICAgICAgIFxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4gICAgXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEpvaSBmcm9tICdqb2ktYnJvd3Nlcic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgdG9hc3QsIFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgRm9ybSBmcm9tICcuL2NvbW1vbi9mb3JtJztcclxuaW1wb3J0IFVzZXJMb2FkZXIgZnJvbSAnLi9jb21tb24vdXNlcmxvYWRlcic7XHJcblxyXG5jbGFzcyBTaWdudXAgZXh0ZW5kcyBGb3JtIHtcclxuICAgIHN0YXRlID0geyBcclxuICAgICAgICBkYXRhIDoge1xyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWUgOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQgOiBcIlwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIGVycm9ycyA6IHt9LFxyXG4gICAgICAgIGVycm9yc2NvdW50IDogMCxcclxuICAgICAgICBsb2FkaW5nIDogZmFsc2UsXHJcbiAgICAgICAgYnV0dG9uVGV4dCA6IFwiVmFsaWRlclwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgc2NoZW1hID0ge1xyXG4gICAgICAgIHVzZXJuYW1lIDogSm9pLnN0cmluZygpLnJlcXVpcmVkKCkubWF4KDQwKSxcclxuICAgICAgICBwYXNzd29yZCA6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLm1pbig4KS5tYXgoMjUpXHJcbiAgICB9XHJcbiAgICBkb1N1Ym1pdCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nIDogdHJ1ZSAsIGJ1dHRvblRleHQgOiBcIkNoYXJnZW1lbnQuLi5cIn0pXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAgICAgdXNlcm5hbWUgOiB0aGlzLnN0YXRlLmRhdGEudXNlcm5hbWUsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkIDogdGhpcy5zdGF0ZS5kYXRhLnBhc3N3b3JkLFxyXG4gICAgICAgIH1cclxuICAgICAgICBheGlvcyh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6ICdhcGkvbG9naW4nLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7J1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnfSAgICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6ZmFsc2UgLCBidXR0b25UZXh0IDogXCJWYWxpZGVyXCJ9KVxyXG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKXtcclxuICAgICAgICAgICAgdG9hc3Quc3VjY2VzcyhyZXMuZGF0YS5tZXNzYWdlLCB0aGlzLnRvYXN0b3B0aW9ucyk7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2Nvbm5lY3RlZCcsJ3RydWUnKVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7ZG9jdW1lbnQubG9jYXRpb24uaHJlZj1cIi9ob21lXCIgfSwyMTAwKSBcclxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzpmYWxzZSAsIGJ1dHRvblRleHQgOiBcIkNoYXJnZW1lbnQuLi5cIn0pXHJcbiAgICAgICAgICAgIHRvYXN0LmVycm9yKCdWw6lyaWZpZXogdm9zIGlkZW50aWZpYW50cycsIHRoaXMudG9hc3RvcHRpb25zKTtcclxuICAgICAgICAgICAgbGV0IGVycm9yc2NvdW50ID0gdGhpcy5zdGF0ZS5lcnJvcnNjb3VudDtcclxuICAgICAgICAgICAgZXJyb3JzY291bnQrK1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcnNjb3VudDplcnJvcnNjb3VudCAsIGRhdGEgOiB7IHVzZXJuYW1lIDogXCJcIiAsIHBhc3N3b3JkIDogXCJcIn0gLCBidXR0b25UZXh0IDpcIlZhbGlkZXJcIn0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHsgXHJcbiAgICAgICAgY29uc3Qge2Vycm9yc2NvdW50LCBsb2FkaW5nICwgYnV0dG9uVGV4dCB9ID0gdGhpcy5zdGF0ZVxyXG4gICAgICAgIHJldHVybiAoIFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyLz5cclxuICAgICAgICAgICAgICAgIHtsb2FkaW5nID09PSB0cnVlID8gPFVzZXJMb2FkZXIvPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5Db25uZWN0aW9uPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMj5QYXMgZGUgY29tcHRlPyBDbGlxdWV6IDxMaW5rIHRvPVwic2lnbnVwXCI+aWNpPC9MaW5rPiBwb3VyIGVuIGNyw6llciB1bi48L2gyPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJzaWdudXAtZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlcklucHV0KCd1c2VybmFtZScsJ05vbSBkXFwndXRpbGlzYXRldXIgOicsJ3RleHQnLCdpbnB1dCcpfVxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlcklucHV0KCdwYXNzd29yZCcsJ01vdCBkZSBwYXNzZSA6JywncGFzc3dvcmQnLCdpbnB1dCcpfVxyXG4gICAgICAgICAgICAgICAgICAgIHtlcnJvcnNjb3VudCA+PSAzID8gPGVtPlZvdXMgYXZleiBvdWJsacOpIHZvdHJlIG1vdCBkZSBwYXNzZSA/IENsaXF1ZXogPExpbmsgdG89XCIvbmV3cGFzc3dvcmRcIj5pY2k8L0xpbms+IHBvdXIgbGUgcsOpaW5pdGxhaWlzZXI8L2VtPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBpcy1ncm91cGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckJ1dHRvbihidXR0b25UZXh0LCdidXR0b24gaXMtc3VjY2VzcycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9ob21lXCIgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWluZm9cIj5Bbm51bGVyPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XHJcbmltcG9ydCBCZXRzIGZyb20gJy4vQmV0cyc7XHJcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuL2NvbW1vbi9wYWdpbmF0aW9uJztcclxuaW1wb3J0IHsgcGFnaW5hdGUgfSBmcm9tICcuLi91dGlsaXRpZXMvcGFnaW5hdGUnO1xyXG5cclxuY2xhc3MgTWF0Y2hlcyBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhdGUgPSB7IFxyXG4gICAgICAgIG1hdGNoZXMgOiBbXSxcclxuICAgICAgICBzZWxlY3RlZE1hdGNoZXMgOiBbXSxcclxuICAgICAgICBncm91cHM6IFtdLCBcclxuICAgICAgICBzZWxlY3RlZEdyb3VwIDogJycsXHJcbiAgICAgICAgZGF0ZXMgOiBbXSAsXHJcbiAgICAgICAgc2VsZWN0ZWREYXRlIDogJycsXHJcbiAgICAgICAgdGVhbXMgOiBbXSxcclxuICAgICAgICBzZWxlY3RlZFRlYW0gOiAnJyxcclxuICAgICAgICBjdXJyZW50UGFnZSA6IDEgLFxyXG4gICAgICAgIHBhZ2VTaXplIDogNixcclxuICAgICAgICBkYXRlIDogbmV3IERhdGUoJ2QtTS1ZJylcclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgdGhpcy5nZXRNYXRjaGVzKCk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFBhZ2UgPSBOdW1iZXIodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2guc2xpY2UoMykpXHJcbiAgICAgICAgaWYoY3VycmVudFBhZ2UgPT09IDAgfHwgY3VycmVudFBhZ2UgPT09IE5hTil7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50UGFnZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldE1hdGNoZXMoKSB7ICAgICAgICBcclxuICAgICAgICBheGlvcy5nZXQoYGh0dHBzOi8vcG9ydGZvbGlvLTcyMTQ3LWRlZmF1bHQtcnRkYi5ldXJvcGUtd2VzdDEuZmlyZWJhc2VkYXRhYmFzZS5hcHAvbWF0Y2hlcy5qc29uYCkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBtYXRjaGlkID0gTnVtYmVyKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoLnNsaWNlKDcpKTtcclxuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHJlcy5kYXRhLnNsaWNlKDAsMzYpO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRlcyA9IFtdO1xyXG4gICAgICAgICAgICBjb25zdCB0ZWFtcyA9IFtdO1xyXG4gICAgICAgICAgICBjb25zdCBncm91cHMgPSBbXTtcclxuICAgICAgICAgICAgbWF0Y2hlcy5tYXAoIG0gPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFkYXRlcy5pbmNsdWRlcyhtLmRhdGUpKSBkYXRlcy5wdXNoKG0uZGF0ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRlYW1zLmluY2x1ZGVzKG0uaG9tZXRlYW0pKSB0ZWFtcy5wdXNoKG0uaG9tZXRlYW0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFncm91cHMuaW5jbHVkZXMobS5ncm91cCkpIGdyb3Vwcy5wdXNoKG0uZ3JvdXApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbGV0IHNpbmdsZW1hdGNoID0gW11cclxuICAgICAgICAgICAgaWYobWF0Y2hpZCAhPSBcIlwiICYmIG1hdGNoaWQgPD0gbWF0Y2hlcy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgc2luZ2xlbWF0Y2gucHVzaChtYXRjaGVzLmZpbmQobSA9PiBtYXRjaGlkID09IG0uX2lkKSApXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWF0Y2hlcyAsIHRlYW1zIDogdGVhbXMuc29ydCgpICwgZGF0ZXMgLCBncm91cHMgLCBzZWxlY3RlZE1hdGNoZXMgOiBzaW5nbGVtYXRjaCB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWF0Y2hlcyAsIHRlYW1zIDogdGVhbXMuc29ydCgpICwgZGF0ZXMgLCBncm91cHMgLCBzZWxlY3RlZE1hdGNoZXMgOiBtYXRjaGVzIH0pXHJcbiAgICAgICAgICAgIH0gICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVQYWdlQ2hhbmdlID0gKHBhZ2UpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudFBhZ2UgOiBwYWdlfSk7XHJcbiAgICB9O1xyXG4gICAgaGFuZGxlR3JvdXBGaWx0ZXIgPSAoZ3JvdXApID0+IHtcclxuICAgICAgICBjb25zdCBtYXRjaGVzID0gWy4uLnRoaXMuc3RhdGUubWF0Y2hlc107XHJcbiAgICAgICAgaWYgKGdyb3VwID09PSAnQWxsJyl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZE1hdGNoZXMgOiBtYXRjaGVzICwgc2VsZWN0ZWRHcm91cCA6Jyd9KTtcclxuICAgICAgICB9ICBcclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZE1hdGNoZXMgPSBtYXRjaGVzLmZpbHRlciggbSA9PiBtLmdyb3VwID09PSBncm91cCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkTWF0Y2hlcyAsIHNlbGVjdGVkR3JvdXAgOiBncm91cCAsIHNlbGVjdGVkVGVhbSA6ICcnICwgc2VsZWN0ZWREYXRlIDogJycgLCBjdXJyZW50UGFnZTogMX0pO1xyXG4gICAgICAgIH0gIFxyXG4gICAgfTtcclxuICAgIGhhbmRsZURhdGVGaWx0ZXIgPSAoZGF0ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBbLi4udGhpcy5zdGF0ZS5tYXRjaGVzXTtcclxuICAgICAgICBpZiAoZGF0ZSA9PT0gJ0FsbCcpe1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRNYXRjaGVzIDogbWF0Y2hlcyAsIHNlbGVjdGVkRGF0ZSA6Jyd9KVxyXG4gICAgICAgIH0gICAgICBcclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZE1hdGNoZXMgPSBtYXRjaGVzLmZpbHRlciggbSA9PiBtLmRhdGUgPT09IGRhdGUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZE1hdGNoZXMgLCBzZWxlY3RlZERhdGUgOiBkYXRlICwgc2VsZWN0ZWRUZWFtIDogJycgLCBzZWxlY3RlZEdyb3VwIDogJycsIGN1cnJlbnRQYWdlOiAxfSk7XHJcbiAgICAgICAgfSAgXHJcbiAgICB9O1xyXG4gICAgaGFuZGxlVGVhbUZpbHRlciA9ICh0ZWFtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IFsuLi50aGlzLnN0YXRlLm1hdGNoZXNdO1xyXG4gICAgICAgIGlmICh0ZWFtID09PSAnQWxsJyl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZE1hdGNoZXMgOiBtYXRjaGVzICwgc2VsZWN0ZWRUZWFtIDogJycsIGN1cnJlbnRQYWdlOiAxfSlcclxuICAgICAgICB9ICAgICAgXHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRNYXRjaGVzID0gbWF0Y2hlcy5maWx0ZXIoIG0gPT4gbS5ob21ldGVhbSA9PT0gdGVhbSB8fCBtLmF3YXl0ZWFtID09PSB0ZWFtKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRNYXRjaGVzICwgc2VsZWN0ZWRUZWFtIDogdGVhbSAsIHNlbGVjdGVkRGF0ZSA6ICcnICwgc2VsZWN0ZWRHcm91cCA6ICcnfSk7XHJcbiAgICAgICAgfSAgXHJcbiAgICB9O1xyXG4gICAgZ2V0UGFnZWREYXRhID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgcGFnZVNpemUsIGN1cnJlbnRQYWdlLCBzZWxlY3RlZE1hdGNoZXN9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCBtYXRjaExpc3RQZXJQYWdlID0gcGFnaW5hdGUoc2VsZWN0ZWRNYXRjaGVzLGN1cnJlbnRQYWdlLHBhZ2VTaXplKTtcclxuICAgICAgICByZXR1cm4geyB0b3RhbENvdW50OiBzZWxlY3RlZE1hdGNoZXMubGVuZ3RoLCBkYXRhOiBtYXRjaExpc3RQZXJQYWdlfVxyXG4gICAgfVxyXG4gICAgcHJldmlvdXNQYWdlID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCB7Y3VycmVudFBhZ2V9ID0gdGhpcy5zdGF0ZVxyXG4gICAgICAgIGlmIChjdXJyZW50UGFnZSA+MSApe1xyXG4gICAgICAgICAgICBjdXJyZW50UGFnZS0tXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRQYWdlfSlcclxuICAgIH0gICAgXHJcbiAgICBuZXh0UGFnZSA9ICgpID0+IHtcclxuICAgICAgICBsZXQge2N1cnJlbnRQYWdlLHNlbGVjdGVkTWF0Y2hlcyxwYWdlU2l6ZX0gPSB0aGlzLnN0YXRlXHJcbiAgICAgICAgaWYgKGN1cnJlbnRQYWdlIDwgTWF0aC5jZWlsKHNlbGVjdGVkTWF0Y2hlcy5sZW5ndGggLyBwYWdlU2l6ZSkgKXtcclxuICAgICAgICAgICAgY3VycmVudFBhZ2UrK1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50UGFnZX0pXHJcbiAgICB9ICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgcGFnZVNpemUgLCBjdXJyZW50UGFnZSAsIHNlbGVjdGVkR3JvdXAsIHNlbGVjdGVkRGF0ZSAsIHNlbGVjdGVkVGVhbSAsIGRhdGVzICwgIGdyb3VwcyAsIHRlYW1zIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHsgdG90YWxDb3VudCAsIGRhdGEgfSA9IHRoaXMuZ2V0UGFnZWREYXRhKCk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXRjaGVzY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+UGhhc2UgZGUgR3JvdXBlPC9oMT48aHIvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93biBpcy1ob3ZlcmFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8RmlsdGVyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17J0dyb3VwZSAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17Z3JvdXBzfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtPXtzZWxlY3RlZEdyb3VwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkl0ZW1TZWxlY3Q9e3RoaXMuaGFuZGxlR3JvdXBGaWx0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93biBpcy1ob3ZlcmFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8RmlsdGVyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17J0RhdGUgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2RhdGVzfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtPXtzZWxlY3RlZERhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSXRlbVNlbGVjdD17dGhpcy5oYW5kbGVEYXRlRmlsdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24gaXMtaG92ZXJhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpbHRlciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9eydFcXVpcGUgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e3RlYW1zfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtPXtzZWxlY3RlZFRlYW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSXRlbVNlbGVjdD17dGhpcy5oYW5kbGVUZWFtRmlsdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF0Y2hlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLm1hcChtYXRjaCA9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCZXRzIG1hdGNoPXttYXRjaH0ga2V5PXttYXRjaC5faWR9IGN1cnJlbnRQYWdlPXtjdXJyZW50UGFnZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtc0NvdW50PXt0b3RhbENvdW50fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU9e3BhZ2VTaXplfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUGFnZUNoYW5nZT17dGhpcy5oYW5kbGVQYWdlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1BhZ2U9e3RoaXMucHJldmlvdXNQYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0UGFnZT17dGhpcy5uZXh0UGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgTWF0Y2hlczsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vY29tbW9uL0xvYWRlcic7XHJcblxyXG5jbGFzcyBSYW5raW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0geyBcclxuICAgICAgICBkYXRhIDoge1xyXG4gICAgICAgICAgICB1c2VycyA6IFtdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb2FkaW5nIDogZmFsc2VcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgdGhpcy5nZXRVc2VycygpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXNlcnMoKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOnRydWV9KVxyXG4gICAgICAgIGF4aW9zLmdldCgnL2FwaS91c2VyL2dldEFsbCcpLnRoZW4oKHJlcykgPT4gXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YSA6IHt1c2VycyA6IHJlcy5kYXRhLnVzZXJuYW1lc30gLCBsb2FkaW5nIDogZmFsc2V9KSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7IFxyXG4gICAgICAgIGNvbnN0IHt1c2Vyc30gPSB0aGlzLnN0YXRlLmRhdGFcclxuICAgICAgICBjb25zdCB7bG9hZGluZ30gPSB0aGlzLnN0YXRlXHJcbiAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICB7Lyoge2xvYWRpbmc/IDxMb2FkZXIvPiA6XHJcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5VdGlsaXNhdGV1cnM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dXNlcnMubWFwKHVzZXIgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e3VzZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt1c2VyfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+fSAqL31cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGUgaXMtMVwiPkNsYXNzZW1lbnQgw6AgdmVuaXIhITwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlmcmFtZSBzcmM9J2h0dHBzOi8vZ2Z5Y2F0LmNvbS9pZnIvQ2hlZXJ5VmFndWVFbGtob3VuZCcgZnJhbWVCb3JkZXI9JzAnIHNjcm9sbGluZz0nbm8nIHdpZHRoPSc2NDAnIGhlaWdodD0nMzYxJz48L2lmcmFtZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFJhbmtpbmc7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFJ1bGVzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWxlc1wiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGUgaXMtMVwiPkxlcyByw6hnbGVzIGR1IGpldTwvaDE+XHJcbiAgICAgICAgICAgIDx1bD4gICAgXHJcbiAgICAgICAgICAgICAgICA8bGk+T24gcGV1dCBwcm9ub3N0aXF1ZXIgbGUgcsOpc3VsdGF0IGRlIHRvdXMgbGVzIG1hdGNoZXMgKHBoYXNlcyBkZSBwb3VsZSBldCBwaGFzZSBmaW5hbGUgZMOocyBxdSdpbHMgc2Vyb250IGNvbm51cykuPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5PbiBwcm9ub3N0aXF1ZSBzdXIgbGUgcsOpc3VsdGF0IGR1IG1hdGNoIGFwcsOocyA5MCBtaW51dGVzIChwcm9sb25nYXRpb25zIGV0IHRpcnMgYXV4IGJ1dHMgbm9uIHByaXMgZW4gY29tcHRlKS48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPkxlcyBwcm9ub3N0aWNzIHBldXZlbnQgw6l0cmUgZMOpcG9zw6lzIG91IG1vZGlmacOpcyBqdXNxdSfDoCAxaCBhdmFudCBsZSBkw6lidXQgZHUgbWF0Y2guPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5VbiBwcm9ub3N0aWMgY29ycmVjdCBzYW5zIHNjb3JlIGV4YWN0IHJhcHBvcnRlIDIgcG9pbnRzIChcclxuICAgICAgICAgICAgICAgICAgICBleGVtcGxlID0gW1LDqXN1bHRhdCBJdGFsaWUgLSBUdXJxdWllID0gMi0xXSAsIFtwcm9ub3N0aWMgMyAtIDBdID0gcGFyaSBnYWduw6kpLjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+VW4gcHJvbm9zdGljIGNvcnJlY3QgYXZlYyBsZSBzY29yZSBleGFjdCByYXBwb3J0ZSAzIHBvaW50cy48L2xpPiBcclxuICAgICAgICAgICAgICAgIDxsaT5MZSBnYWduYW50IGdhZ25lIChldCBjJ2VzdCBiaWVuZykhPC9saT4gICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBSdWxlczsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFdlbGNvbWVNb2RhbCBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIG1vZGFsdmlldyA6IGZhbHNlLFxyXG4gICAgICAgIG1vZGFsc2hvdyA6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtcycpICE9PSAneSdcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bW9kYWx2aWV3OnRydWV9KVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3Qge21vZGFsdmlldyxtb2RhbHNob3d9ID0gdGhpcy5zdGF0ZVxyXG4gICAgICAgIHJldHVybiAoIFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7IG1vZGFsc2hvdyA/XHJcbiAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e21vZGFsdmlldz8nbW9kYWwgaXMtYWN0aXZlJzonbW9kYWwnfSBcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbG1lc3NhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbG9zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT57dGhpcy5zZXRTdGF0ZSh7bW9kYWx2aWV3OmZhbHNlfSk7bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ21zJywneScpfX0gXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDinJZcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQmllbnZlbnVlIHN1ciBjZSBzaXRlIGRlIHByb25vc3RpY3Mgc3VyIGxlcyBtYXRjaGVzIGwnVUVGQSBFVVJPIDIwMjA8c3VwPlRNPC9zdXA+Ljxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEljaSBxdWUgZHUgZnVuLCBwYXMgZGUgbWlzZXMgZCdhcmdlbnQsIGp1c3RlIHVuIHBldGl0IGpldSBncmF0dWl0IHBvdXIgc2UgZGl2ZXJ0aXIhLjxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEF1Y3VuZSBkb25uw6llIG5lIHNlcmEgY29sbGVjdMOpZSBvdSByZXZlbmR1ZSA8c3Bhbj7wn5iDPC9zcGFuPi5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFByw6p0IMOgIGpvdWVyP1xyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+e3RoaXMuc2V0U3RhdGUoe21vZGFsdmlldzpmYWxzZX0pO2xvY2FsU3RvcmFnZS5zZXRJdGVtKCdtcycsJ3knKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1wcmltYXJ5IGlzLWxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEMnZXN0IHBhcnRpICFcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj46XHJcbiAgICAgICAgICAgIG51bGx9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBXZWxjb21lTW9kYWw7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IExvYWRlciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGRzLXJvbGxlclwiPjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48L2Rpdj5cclxuICAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBKb2kgZnJvbSAnam9pLWJyb3dzZXInO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9pbnB1dCc7XHJcblxyXG5jbGFzcyBGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0geyBcclxuICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICBlcnJvcnM6IHt9XHJcbiAgICB9XHJcbiAgICB0b2FzdG9wdGlvbnMgPSB7XHJcbiAgICAgICAgcG9zaXRpb246IFwidG9wLWNlbnRlclwiLFxyXG4gICAgICAgIGF1dG9DbG9zZTogMzAwMCxcclxuICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgICBjbG9zZUJ1dHRvbjogZmFsc2UsXHJcbiAgICB9XHJcbiAgICB2YWxpZGF0ZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0ge2Fib3J0RWFybHkgOiBmYWxzZX07XHJcbiAgICAgICAgY29uc3Qge2Vycm9yfSA9IEpvaS52YWxpZGF0ZSh0aGlzLnN0YXRlLmRhdGEsIHRoaXMuc2NoZW1hICwgb3B0aW9ucyk7XHJcbiAgICAgICAgaWYgKCFlcnJvcikgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IGVycm9ycyA9IHt9O1xyXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgZXJyb3IuZGV0YWlscylcclxuICAgICAgICAgICAgZXJyb3JzW2l0ZW0ucGF0aFswXV0gPSBpdGVtLm1lc3NhZ2U7IFxyXG4gICAgICAgIHJldHVybiBlcnJvcnM7XHJcbiAgICB9O1xyXG4gICAgdmFsaWRhdGVQcm9wZXJ0eSA9ICh7bmFtZSx2YWx1ZX0pID0+IHtcclxuICAgICAgICBjb25zdCBvYmogPSB7IFtuYW1lXSA6IHZhbHVlfTtcclxuICAgICAgICBjb25zdCBzY2hlbWEgPSB7IFtuYW1lXSA6IHRoaXMuc2NoZW1hW25hbWVdfVxyXG4gICAgICAgIGxldCBlcnJvck1lc3NhZ2U7XHJcbiAgICAgICAgaWYgKEpvaS52YWxpZGF0ZShvYmosc2NoZW1hKS5lcnJvciAhPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIGlmIChbbmFtZV1bMF0gPT09ICd1c2VybmFtZScpeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBKb2kudmFsaWRhdGUob2JqLHNjaGVtYSkuZXJyb3IuZGV0YWlsc1swXS50eXBlO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2FueS5lbXB0eSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9ICdMZSBub20gZFxcJ3V0aWxpc2F0ZXVyIGRvaXQgw6p0cmUgcmVuc2VpZ27DqSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3N0cmluZy5tYXgnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSAnTGUgbm9tIGRcXCd1dGlsaXNhdGV1ciBuZSBwZXV0IGV4Y8OpZGVyIDQwIGNhcmFjdMOocmVzJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoW25hbWVdWzBdID09PSAncGFzc3dvcmQnKXsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yID0gSm9pLnZhbGlkYXRlKG9iaixzY2hlbWEpLmVycm9yLmRldGFpbHNbMF0udHlwZTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdhbnkuZW1wdHknOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSAnTGUgbW90IGRlIHBhc3NlIGRvaXQgw6p0cmUgcmVuc2VpZ27DqSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3N0cmluZy5taW4nOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSAnTGUgbW90IGRlIHBhc3NlIGRvaXQgY29udGVuaXIgYXUgbW9pbnMgOCBjYXJhY3TDqHJlcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnc3RyaW5nLm1heCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9ICdMZSBtb3QgZGUgcGFzc2UgbmUgZG9pdCBwYXMgZMOpcGFzc2VyIDI1IGNhcmFjdMOocmVzJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoW25hbWVdWzBdID09PSAnZW1haWwnKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yID0gSm9pLnZhbGlkYXRlKG9iaixzY2hlbWEpLmVycm9yLmRldGFpbHNbMF0udHlwZTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3N0cmluZy5lbWFpbCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9ICdWZXVpbGxleiByZW5zZWlnbmVyIHVuIGUtbWFpbCB2YWxpZGUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdhbnkuZW1wdHknOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSAnTFxcJ2FkcmVzc2UgRW1haWwgZG9pdCDDqnRyZSByZW5zZWlnbsOpZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoW25hbWVdWzBdID09PSAncGFzcycpe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBKb2kudmFsaWRhdGUob2JqLHNjaGVtYSkuZXJyb3IuZGV0YWlsc1swXS50eXBlO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2FueS5lbXB0eSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9ICdMZSBjb2RlIGRcXCdhY2PDqHMgZG9pdCDDqnRyZSByZW5zZWlnbsOpJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVycm9yTWVzc2FnZVxyXG4gICAgfTtcclxuICAgIGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyBcclxuICAgICAgICBjb25zdCBlcnJvcnMgPSB0aGlzLnZhbGlkYXRlKCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9ycyA6IGVycm9ycyB8fCB7fX0pO1xyXG4gICAgICAgIGlmIChlcnJvcnMpIHJldHVybjsgIFxyXG4gICAgICAgIHRoaXMuZG9TdWJtaXQoKTsgICAgIFxyXG4gICAgfTtcclxuICAgIGhhbmRsZUNoYW5nZSA9ICh7Y3VycmVudFRhcmdldCA6IGlucHV0fSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVycm9ycyA9IHsuLi50aGlzLnN0YXRlLmVycm9yc31cclxuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSB0aGlzLnZhbGlkYXRlUHJvcGVydHkoaW5wdXQpXHJcbiAgICAgICAgaWYgKGVycm9yTWVzc2FnZSkgZXJyb3JzW2lucHV0Lm5hbWVdID0gZXJyb3JNZXNzYWdlO1xyXG4gICAgICAgIGVsc2UgZGVsZXRlIGVycm9yc1tpbnB1dC5uYW1lXTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHsuLi50aGlzLnN0YXRlLmRhdGF9O1xyXG4gICAgICAgIGRhdGFbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRhICwgZXJyb3JzIH0pXHJcbiAgICB9XHJcbiAgICByZW5kZXJJbnB1dChuYW1lLGxhYmVsLHR5cGUsY2xhc3NOYW1lKXtcclxuICAgICAgICBjb25zdCB7IGRhdGEsIGVycm9ycyB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9IFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhW25hbWVdfSBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17bGFiZWx9IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzW25hbWVdfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgIH1cclxuICAgIHJlbmRlckJ1dHRvbihsYWJlbCxjbGFzc05hbWUpe1xyXG4gICAgICAgIHJldHVybiA8YnV0dG9uIGRpc2FibGVkPXt0aGlzLnZhbGlkYXRlKCl9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57bGFiZWx9PC9idXR0b24+XHJcbiAgICB9ICAgIFxyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgRm9ybTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgSW5wdXQgPSAoe25hbWUsIGxhYmVsLCB2YWx1ZSwgY2xhc3NOYW1lLCB0eXBlLCBlcnJvciwgb25DaGFuZ2V9KSA9PiB7XHJcbiAgICBcclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCIgaHRtbEZvcj17bmFtZX0+e2xhYmVsfTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17ZXJyb3I/ICdpc2Vycm9yICcrY2xhc3NOYW1lIDpjbGFzc05hbWV9IFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9e3R5cGV9IFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9IFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPXtuYW1lfS8+XHJcbiAgICAgICAgICAgICAgICAgICAge2Vycm9yICYmIDxwIGNsYXNzTmFtZT1cImVycm9ybXNnXCI+e2Vycm9yLnJlcGxhY2UoL1wiL2csJycpfS48L3A+fVxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmNvbnN0IFBhZ2luYXRpb24gPSAoe2l0ZW1zQ291bnQgLCBwYWdlU2l6ZSAsIGN1cnJlbnRQYWdlLCBvblBhZ2VDaGFuZ2UgLCBwcmV2aW91c1BhZ2UgLCBuZXh0UGFnZX0pID0+IHtcclxuICAgIGNvbnN0IHBhZ2VzQ291bnQgPSBNYXRoLmNlaWwoaXRlbXNDb3VudCAvIHBhZ2VTaXplKTtcclxuICAgIGlmKHBhZ2VzQ291bnQ9PT0xKSByZXR1cm4gbnVsbDtcclxuICAgIGNvbnN0IHBhZ2VzID0gXy5yYW5nZSgxLCBwYWdlc0NvdW50KzEpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwYWdpbmF0aW9uLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwYWdpbmF0aW9uLWxpbmtcIiBvbkNsaWNrPXtwcmV2aW91c1BhZ2V9PiYjNjA7PC9saT5cclxuICAgICAgICAgICAgICAgIHsgcGFnZXMubWFwKHBhZ2UgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3BhZ2V9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyBwYWdlID09PSBjdXJyZW50UGFnZT8gXCJwYWdpbmF0aW9uLWxpbmsgaXMtY3VycmVudFwiIDogXCJwYWdpbmF0aW9uLWxpbmtcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25QYWdlQ2hhbmdlKHBhZ2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApKX0gICAgICBcclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwYWdpbmF0aW9uLWxpbmtcIiBvbkNsaWNrPXtuZXh0UGFnZX0+JiM2Mjs8L2xpPiAgICAgICAgICBcclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L25hdj5cclxuICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBVc2VyTG9hZGVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZHMtcmlwcGxlXCI+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjwvZGl2PiAgICAgXHJcbiAgICAgICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJMb2FkZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEZvcm0gZnJvbSAnLi8uLi9jb21tb24vZm9ybSc7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyICwgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCBKb2kgZnJvbSAnam9pLWJyb3dzZXInO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY2xhc3MgUGFzc1VwZGF0ZSBleHRlbmRzIEZvcm0ge1xyXG4gICAgc3RhdGUgPSB7IFxyXG4gICAgICAgIGRhdGEgOiB7XHJcbiAgICAgICAgICAgIHBhc3N3b3JkIDogXCJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3JzIDoge30sIFxyXG4gICAgICAgIGxvYWRpbmcgOiBmYWxzZSxcclxuICAgICAgICBidXR0b25UZXh0IDogXCJWYWxpZGVyXCJcclxuICAgIH1cclxuICAgIHNjaGVtYSA9IHtcclxuICAgICAgICBwYXNzd29yZCA6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLm1pbig4KS5tYXgoMjUpLFxyXG4gICAgfVxyXG4gICAgZG9TdWJtaXQoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmRhdGEucGFzc3dvcmQpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3Bhc3N3b3JkIDogdGhpcy5zdGF0ZS5kYXRhLnBhc3N3b3JkICwgbG9hZGluZyA6IHRydWUgLCBidXR0b25UZXh0IDogJ1BhdGllbnRlei4uLi4nfSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHsgdXNlciA6IHRoaXMucHJvcHMuYWxpYXMsIHBhc3N3b3JkIDogdGhpcy5zdGF0ZS5kYXRhLnBhc3N3b3JkfVxyXG4gICAgICAgIGF4aW9zKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogJ2FwaS91c2VyL3VwZGF0ZVBhc3N3b3JkJyxcclxuICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgaGVhZGVyczogeydYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J31cclxuICAgICAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgdG9hc3Quc3VjY2VzcygnTW90IGRlIHBhc3NlIG1vZGlmacOpIGF2ZWMgc3VjY8OocyAhJywgdGhpcy50b2FzdG9wdGlvbnMpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7ZG9jdW1lbnQubG9jYXRpb24uaHJlZj1cIi9sb2dpblwiIH0sMjEwMClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkgeyBcclxuICAgICAgICBjb25zdCB7bG9hZGluZyxidXR0b25UZXh0fSA9IHRoaXMuc3RhdGVcclxuICAgICAgICByZXR1cm4gKCBcclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJuZXdwYXNzLWZvcm1cIj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlcklucHV0KCdwYXNzd29yZCcsJ05vdXZlYXUgbW90IGRlIHBhc3NlICA6JywndGV4dCcsJ2lucHV0Jyl9XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJCdXR0b24oYnV0dG9uVGV4dCwnYnV0dG9uIGlzLXN1Y2Nlc3MnKX1cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgUGFzc1VwZGF0ZSA7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEZvcm0gZnJvbSAnLi4vY29tbW9uL2Zvcm0nO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciAsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgSm9pIGZyb20gJ2pvaS1icm93c2VyJztcclxuaW1wb3J0IFBhc3NVcGRhdGUgZnJvbSAnLi9wYXNzVXBkYXRlJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNsYXNzIFVzZXJDb25maXJtIGV4dGVuZHMgRm9ybSB7XHJcbiAgICBzdGF0ZSA9IHsgXHJcbiAgICAgICAgZGF0YSA6IHtcclxuICAgICAgICAgICAgdXNlcm5hbWUgOiBcIlwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICBlcnJvcnMgOiB7fSwgXHJcbiAgICBhbGlhcyA6IFwiXCIsXHJcbiAgICBsb2FkaW5nIDogZmFsc2UsXHJcbiAgICBidXR0b25UZXh0IDogXCJWYWxpZGVyXCIsXHJcbiAgICB1c2VycXVlcnkgOiB0cnVlXHJcbiAgICB9XHJcbiAgICBzY2hlbWEgPSB7XHJcbiAgICAgICAgdXNlcm5hbWUgOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKS5tYXgoNDApLFxyXG4gICAgfVxyXG4gICAgZG9TdWJtaXQoKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHthbGlhcyA6IHRoaXMuc3RhdGUuZGF0YS51c2VybmFtZSAsIGJ1dHRvblRleHQgOiAnUGF0aWVudGV6Li4uJ30pXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHsgdXNlcm5hbWUgOiB0aGlzLnN0YXRlLmRhdGEudXNlcm5hbWV9ICBcclxuICAgICAgICBheGlvcyh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6ICdhcGkvZ2V0VXNlck5hbWUnLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7J1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnfVxyXG4gICAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBpZihyZXMuZGF0YS51c2VyID09PSB0aGlzLnN0YXRlLmRhdGEudXNlcm5hbWUgKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3VzZXJxdWVyeSA6IGZhbHNlfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YTp7dXNlcm5hbWUgOiAnJ30sZXJyb3JzIDoge3VzZXJuYW1lIDogJyd9ICwgYnV0dG9uVGV4dCA6IFwiVmFsaWRlclwifSk7XHJcbiAgICAgICAgICAgICAgICB0b2FzdC5lcnJvcignTGUgbm9tIGRcXCd1dGlsaXNhdGV1ciBuXFwnZXhpc3RlIHBhcycsIHRoaXMudG9hc3RvcHRpb25zKTsgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHsgXHJcbiAgICAgICAgY29uc3QgeyBsb2FkaW5nICwgdXNlcnF1ZXJ5ICwgYWxpYXMgLCBidXR0b25UZXh0IH0gPSB0aGlzLnN0YXRlXHJcbiAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8VG9hc3RDb250YWluZXIvPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+UmVub3V2ZWxsZW1lbnQgZGUgbW90IGRlIHBhc3NlPC9oMT5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwibmV3cGFzcy1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVySW5wdXQoJ3VzZXJuYW1lJywnVm90cmUgbm9tIGRcXCd1dGlsaXNhdGV1ciAgOicsJ3RleHQnLCdpbnB1dCcpfVxyXG4gICAgICAgICAgICAgICAgICAgIHt1c2VycXVlcnk/IHRoaXMucmVuZGVyQnV0dG9uKGJ1dHRvblRleHQsJ2J1dHRvbiBpcy1zdWNjZXNzJykgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAge3VzZXJxdWVyeT8gbnVsbCA6IDxQYXNzVXBkYXRlIGFsaWFzPXthbGlhc30vPn1cclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJDb25maXJtOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBKb2kgZnJvbSAnam9pLWJyb3dzZXInO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHRvYXN0LCBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IEZvcm0gZnJvbSAnLi9jb21tb24vZm9ybSc7XHJcbmltcG9ydCBVc2VyTG9hZGVyIGZyb20gJy4vY29tbW9uL3VzZXJsb2FkZXInO1xyXG5cclxuY2xhc3MgU2lnbnVwIGV4dGVuZHMgRm9ybSB7XHJcbiAgICBzdGF0ZSA9IHsgXHJcbiAgICAgICAgZGF0YSA6IHtcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lIDogXCJcIixcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkIDogXCJcIixcclxuICAgICAgICAgICAgICAgIGVtYWlsIDogXCJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIGVycm9ycyA6IHt9LFxyXG4gICAgICAgIGxvYWRpbmcgOiBmYWxzZSxcclxuICAgICAgICBidXR0b25UZXh0IDogXCJWYWxpZGVyXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgc2NoZW1hID0ge1xyXG4gICAgICAgIHVzZXJuYW1lIDogSm9pLnN0cmluZygpLnJlcXVpcmVkKCkubWF4KDQwKSxcclxuICAgICAgICBwYXNzd29yZCA6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLm1pbig4KS5tYXgoMjUpLFxyXG4gICAgICAgIGVtYWlsIDogSm9pLnN0cmluZygpLnJlcXVpcmVkKCkuZW1haWwoKVxyXG4gICAgfVxyXG4gICAgZG9TdWJtaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzp0cnVlICwgYnV0dG9uVGV4dDogXCJDaGFyZ2VtZW50Li4uXCJ9KVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lIDogdGhpcy5zdGF0ZS5kYXRhLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICBwYXNzd29yZCA6IHRoaXMuc3RhdGUuZGF0YS5wYXNzd29yZCxcclxuICAgICAgICAgICAgZW1haWwgOiB0aGlzLnN0YXRlLmRhdGEuZW1haWxcclxuICAgICAgICB9XHJcbiAgICAgICAgYXhpb3Moe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiAnYXBpL3VzZXIvbmV3JyxcclxuICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgaGVhZGVyczogeydYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J30gICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOmZhbHNlICwgYnV0dG9uVGV4dCA6IFwiVmFsaWRlclwifSlcclxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MocmVzLmRhdGEubWVzc2FnZSwgdGhpcy50b2FzdG9wdGlvbnMpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9sb2dpbicpfSwzNTAwKX1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6ZmFsc2UsIGJ1dHRvblRleHQgOiBcIlZhbGlkZXJcIn0pXHJcbiAgICAgICAgICAgIHRvYXN0LmVycm9yKCdMZSBub20gZFxcJ3V0aWxpc2F0ZXVyIGVzdCBkw6lqYSB1dGlsaXPDqScsIHRoaXMudG9hc3RvcHRpb25zKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkgeyBcclxuICAgICAgICBjb25zdCB7IGxvYWRpbmcgfSA9IHRoaXMuc3RhdGVcclxuICAgICAgICByZXR1cm4gKCBcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lci8+XHJcbiAgICAgICAgICAgICAgICB7bG9hZGluZyA9PT0gdHJ1ZSA/IDxVc2VyTG9hZGVyLz4gOiBudWxsIH1cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPkNyw6llciB1biBub3V2ZWF1IGNvbXB0ZTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDI+Vm91cyBhdmV6IGTDqWphIHVuIGNvbXB0ZT8gQ2xpcXVleiA8TGluayB0bz1cImxvZ2luXCI+aWNpPC9MaW5rPiBwb3VyIHZvdXMgY29ubmVjdGVyPC9oMj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwic2lnbnVwLWZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJJbnB1dCgndXNlcm5hbWUnLCdDaG9pc2lyIHVuIE5vbSBkXFwndXRpbGlzYXRldXIgIDonLCd0ZXh0JywnaW5wdXQnKX1cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJJbnB1dCgnZW1haWwnLCdSZW5zZWlnbmVyIHVuZSBhZHJlc3NlIEVtYWlsICA6JywndGV4dCcsJ2lucHV0Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVySW5wdXQoJ3Bhc3N3b3JkJywnQ3LDqWVyIHVuIE1vdCBkZSBwYXNzZSAgOicsJ3Bhc3N3b3JkJywnaW5wdXQnKX1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIGlzLWdyb3VwZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQnV0dG9uKCdWYWxpZGVyJywnYnV0dG9uIGlzLXN1Y2Nlc3MnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvaG9tZVwiIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1pbmZvXCI+QW5udWxlcjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ251cDsiLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhZ2luYXRlKGl0ZW1zLHBhZ2VOdW1iZXIscGFnZVNpemUpe1xyXG4gICAgY29uc3Qgc3RhcnRJbmRleCA9IChwYWdlTnVtYmVyIC0gMSkgKiBwYWdlU2l6ZTtcclxuICAgIHJldHVybiBfKGl0ZW1zKS5zbGljZShzdGFydEluZGV4KS50YWtlKHBhZ2VTaXplKS52YWx1ZSgpO1xyXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==