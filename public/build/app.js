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
  component: _components_passupdate_userConfirm__WEBPACK_IMPORTED_MODULE_10__.default
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
  path: "/ranking",
  component: _components_Ranking__WEBPACK_IMPORTED_MODULE_9__.default
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
  path: "/rules",
  component: _components_Rules__WEBPACK_IMPORTED_MODULE_11__.default
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Link, {
        to: "/rules",
        className: "navbar-item"
      }, "R\xE8gles"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement("div", {
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_axios_index_js-node_modules_core-js_modules_es_array_concat_js-node_modu-62e08b"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0FjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQmV0cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Db21pbmdNYXRjaGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Mb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9NYXRjaGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1JhbmtpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvUnVsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvV2VsY29tZU1vZGFsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2NvbW1vbi9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvY29tbW9uL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvY29tbW9uL2lucHV0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2NvbW1vbi9wYWdpbmF0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2NvbW1vbi91c2VybG9hZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3Bhc3N1cGRhdGUvcGFzc1VwZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9wYXNzdXBkYXRlL3VzZXJDb25maXJtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3NpZ251cC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdXRpbGl0aWVzL3BhZ2luYXRlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcyJdLCJuYW1lcyI6WyJSZWFjdERPTSIsIkhvbWUiLCJNYXRjaGVzIiwiU2lnbnVwIiwiTG9naW4iLCJVc2VyQ29uZmlybSIsIlJhbmtpbmciLCJSdWxlcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJBY2NvdW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImxvYWRpbmciLCJpZCIsInVzZXJuYW1lIiwiYmV0cyIsIm1hdGNoZXMiLCJnZXRVc2VyQnlJZCIsImdldE1hdGNoZXMiLCJheGlvcyIsInRoZW4iLCJyZXMiLCJzZXRTdGF0ZSIsImRhdGEiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiTnVtYmVyIiwic3RhdGUiLCJtZXRob2QiLCJ1cmwiLCJoZWFkZXJzIiwidG9VcHBlckNhc2UiLCJsZW5ndGgiLCJtYXAiLCJiZXQiLCJtYXRjaF9pZCIsImJldF9kYXRlIiwiZGF0ZSIsInNsaWNlIiwic3BsaXQiLCJyZXZlcnNlIiwiam9pbiIsIm1hdGNoIiwiX2lkIiwiaG9tZXNjb3JlIiwiYXdheXNjb3JlIiwiaG9tZXRlYW0iLCJhd2F5dGVhbSIsIkNvbXBvbmVudCIsIkJldHMiLCJoaWRkZW4iLCJob21lcmVzdWx0IiwiYXdheXJlc3VsdCIsImVycm9ycyIsImJldHN0YXR1cyIsInRvYXN0IiwiY29ubmVjdGVkIiwidmFsaWRhdGlvbmRhdGUiLCJKb2kiLCJyZXF1aXJlZCIsIm9wdGlvbnMiLCJhYm9ydEVhcmx5Iiwic2NoZW1hIiwiZXJyb3IiLCJkZXRhaWxzIiwiaXRlbSIsInBhdGgiLCJtZXNzYWdlIiwiaW5wdXQiLCJjdXJyZW50VGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidmFsaWRhdGUiLCJkb1N1Ym1pdCIsIm1hdGNoaWQiLCJwcm9wcyIsImJldGlkIiwidXVpZHY0Iiwic3RhdHVzIiwicG9zaXRpb24iLCJhdXRvQ2xvc2UiLCJoaWRlUHJvZ3Jlc3NCYXIiLCJjbG9zZU9uQ2xpY2siLCJjbG9zZUJ1dHRvbiIsInNldFRpbWVvdXQiLCJsb2NhdGlvbiIsImhyZWYiLCJnZXRCZXRzIiwiZ2V0VmFsaWRhdGlvbkRhdGUiLCJzb3VyY2UiLCJjYW5jZWwiLCJtYXRjaGRhdGUiLCJ0b0xvd2VyQ2FzZSIsIkRhdGUiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJuZXdkYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwibWF0Y2h0aW1lIiwidGltZSIsImdldEhvdXJzIiwidXNlcmlkIiwiY2FuY2VsVG9rZW4iLCJ0b2tlbiIsImlucHV0ZXJyb3JzIiwiZ3JvdXAiLCJoYW5kbGVDbGljayIsImhhbmRsZUNoYW5nZSIsImhhbmRsZVN1Ym1pdCIsIkNvbWluZ01hdGNoZXMiLCJGaWx0ZXIiLCJpdGVtcyIsIm9uSXRlbVNlbGVjdCIsInNlbGVjdGVkSXRlbSIsImxhYmVsIiwiSGVhZGVyIiwibW9iaWxlbWVudSIsImlzQWN0aXZlIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJ3aW5kb3ciLCJyZXBsYWNlIiwib25Mb2dvdXQiLCJzaG93bW9kYWwiLCJnZXRVc2VyIiwic2hvd01vZGFsIiwiaSIsInB1c2giLCJoZWlnaHQiLCJ3aWR0aCIsInBhc3N3b3JkIiwiZXJyb3JzY291bnQiLCJidXR0b25UZXh0IiwibWF4IiwibWluIiwidG9hc3RvcHRpb25zIiwicmVuZGVySW5wdXQiLCJyZW5kZXJCdXR0b24iLCJGb3JtIiwic2VsZWN0ZWRNYXRjaGVzIiwiZ3JvdXBzIiwic2VsZWN0ZWRHcm91cCIsImRhdGVzIiwic2VsZWN0ZWREYXRlIiwidGVhbXMiLCJzZWxlY3RlZFRlYW0iLCJjdXJyZW50UGFnZSIsInBhZ2VTaXplIiwicGFnZSIsImZpbHRlciIsIm0iLCJ0ZWFtIiwibWF0Y2hMaXN0UGVyUGFnZSIsInBhZ2luYXRlIiwidG90YWxDb3VudCIsIk1hdGgiLCJjZWlsIiwic2VhcmNoIiwiaW5jbHVkZXMiLCJzaW5nbGVtYXRjaCIsImZpbmQiLCJzb3J0IiwiZ2V0UGFnZWREYXRhIiwiaGFuZGxlR3JvdXBGaWx0ZXIiLCJoYW5kbGVEYXRlRmlsdGVyIiwiaGFuZGxlVGVhbUZpbHRlciIsImhhbmRsZVBhZ2VDaGFuZ2UiLCJwcmV2aW91c1BhZ2UiLCJuZXh0UGFnZSIsInVzZXJzIiwiZ2V0VXNlcnMiLCJ1c2VybmFtZXMiLCJXZWxjb21lTW9kYWwiLCJtb2RhbHZpZXciLCJtb2RhbHNob3ciLCJMb2FkZXIiLCJvYmoiLCJlcnJvck1lc3NhZ2UiLCJ0eXBlIiwidmFsaWRhdGVQcm9wZXJ0eSIsImNsYXNzTmFtZSIsIklucHV0Iiwib25DaGFuZ2UiLCJQYWdpbmF0aW9uIiwiaXRlbXNDb3VudCIsIm9uUGFnZUNoYW5nZSIsInBhZ2VzQ291bnQiLCJwYWdlcyIsIl8iLCJVc2VyTG9hZGVyIiwiUGFzc1VwZGF0ZSIsInVzZXIiLCJhbGlhcyIsInVzZXJxdWVyeSIsImVtYWlsIiwiaGlzdG9yeSIsInBhZ2VOdW1iZXIiLCJzdGFydEluZGV4IiwidGFrZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsNkNBQUEsZUFFSSxpREFBQyw0REFBRCxxQkFDSSxpREFBQyx1REFBRCxPQURKLGVBRUksNEVBQ0ksaURBQUMscURBQUQscUJBQ0ksaURBQUMsb0RBQUQ7QUFBTyxNQUFJLEVBQUMsT0FBWjtBQUFvQixXQUFTLEVBQUVDLHFEQUFJQTtBQUFuQyxFQURKLGVBRUksaURBQUMsb0RBQUQ7QUFBTyxNQUFJLEVBQUMsVUFBWjtBQUF1QixXQUFTLEVBQUVDLHdEQUFPQTtBQUF6QyxFQUZKLGVBR0ksaURBQUMsb0RBQUQ7QUFBTyxNQUFJLEVBQUMsY0FBWjtBQUEyQixXQUFTLEVBQUVBLHdEQUFPQTtBQUE3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QWYsRUFBMkJDLElBQTNCLENBQWdDbkQsUUFBaEMsRUFBMEMvRSxLQUExQyxFQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7O0FDTEQiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFN3aXRjaCwgUm91dGUsIFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL0hvbWUnO1xuaW1wb3J0IE1hdGNoZXMgZnJvbSAnLi9jb21wb25lbnRzL01hdGNoZXMnO1xuaW1wb3J0IFNpZ251cCBmcm9tICcuL2NvbXBvbmVudHMvc2lnbnVwJztcbmltcG9ydCBMb2dpbiBmcm9tICcuL2NvbXBvbmVudHMvTG9naW4nO1xuaW1wb3J0IEFjY291bnQgZnJvbSAnLi9jb21wb25lbnRzL0FjY291bnQnO1xuaW1wb3J0IFJhbmtpbmcgZnJvbSAnLi9jb21wb25lbnRzL1JhbmtpbmcnO1xuaW1wb3J0IFVzZXJDb25maXJtIGZyb20gJy4vY29tcG9uZW50cy9wYXNzdXBkYXRlL3VzZXJDb25maXJtJztcbmltcG9ydCBSdWxlcyBmcm9tICcuL2NvbXBvbmVudHMvUnVsZXMnO1xuICAgIFxuUmVhY3RET00ucmVuZGVyKFxuXG4gICAgPFJvdXRlcj5cbiAgICAgICAgPEhlYWRlci8+XG4gICAgICAgIDxtYWluPlxuICAgICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9ob21lXCIgY29tcG9uZW50PXtIb21lfS8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvbWF0Y2hlc1wiIGNvbXBvbmVudD17TWF0Y2hlc30vPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL21hdGNoZXMvOmlkXCIgY29tcG9uZW50PXtNYXRjaGVzfS8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvc2lnbnVwXCIgY29tcG9uZW50PXtTaWdudXB9Lz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9sb2dpblwiIGNvbXBvbmVudD17TG9naW59Lz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9uZXdwYXNzd29yZC9cIiBjb21wb25lbnQ9e1VzZXJDb25maXJtfS8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmFua2luZ1wiIGNvbXBvbmVudD17UmFua2luZ30vPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3J1bGVzXCIgY29tcG9uZW50PXtSdWxlc30vPlxuICAgICAgICAgICAgICAgIHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29ubmVjdGVkJyk9PT0ndHJ1ZSc/XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2FjY291bnRcIiBjb21wb25lbnQ9e0FjY291bnR9Lz46XG4gICAgICAgICAgICAgICAgICAgIDxSZWRpcmVjdCB0bz1cIi9ob21lXCIgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZXhhY3QgPlxuICAgICAgICAgICAgICAgICAgICA8UmVkaXJlY3QgdG89XCIvaG9tZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgICAgICA8UmVkaXJlY3QgdG89XCIvaG9tZVwiLz5cbiAgICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICA8L21haW4+XG4gICAgICAgIFxuICAgIDwvUm91dGVyPiAgICBcbiAgICBcbiAgICAsZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuL2NvbW1vbi9Mb2FkZXInO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBSZWFjdFRvb2x0aXAgZnJvbSAncmVhY3QtdG9vbHRpcCc7XHJcblxyXG5jbGFzcyBBY2NvdW50IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0ZSA9IHsgXHJcbiAgICAgICAgbG9hZGluZyA6IHRydWUsXHJcbiAgICAgICAgaWQ6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZCcpLFxyXG4gICAgICAgIHVzZXJuYW1lIDogXCJcIixcclxuICAgICAgICBiZXRzIDogW10sXHJcbiAgICAgICAgbWF0Y2hlcyA6IFtdXHJcbiAgICB9O1xyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICB0aGlzLmdldFVzZXJCeUlkKCk7XHJcbiAgICAgICAgdGhpcy5nZXRNYXRjaGVzKCk7XHJcbiAgICB9O1xyXG4gICAgZ2V0TWF0Y2hlcygpeyAgICAgICAgXHJcbiAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgLmdldChgaHR0cHM6Ly9wb3J0Zm9saW8tNzIxNDctZGVmYXVsdC1ydGRiLmV1cm9wZS13ZXN0MS5maXJlYmFzZWRhdGFiYXNlLmFwcC9tYXRjaGVzLmpzb25gKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7dGhpcy5zZXRTdGF0ZSh7bWF0Y2hlcyA6IHJlcy5kYXRhfSl9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge2NvbnNvbGUubG9nKGVycil9KVxyXG4gICAgfTtcclxuICAgIGdldFVzZXJCeUlkKCl7XHJcbiAgICAgICAgY29uc3QgaWQgPSBOdW1iZXIodGhpcy5zdGF0ZS5pZCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHsgaWQgOiBpZH07XHJcbiAgICAgICAgYXhpb3Moe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiAnYXBpL3VzZXIvZ2V0VXNlckJ5SWQnLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7J1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnfSAgICAgXHJcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt1c2VybmFtZTpyZXMuZGF0YX0pXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXhpb3Moe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiAnYXBpL2dldGJldHNCeVVzZXInLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7J1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnfSAgICAgXHJcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtiZXRzIDogcmVzLmRhdGEgLCBsb2FkaW5nIDogZmFsc2V9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHsgXHJcbiAgICAgICAgY29uc3Qge3VzZXJuYW1lICwgbG9hZGluZyAsIGJldHMgLCBtYXRjaGVzfSA9IHRoaXMuc3RhdGVcclxuICAgICAgICByZXR1cm4gKCAgICAgXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZSBpcy0yXCI+TW9uIENvbXB0ZTwvaDI+XHJcbiAgICAgICAgICAgICAgICB7bG9hZGluZz8gPExvYWRlci8+OlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+TW9uIGVzcGFjZTwvcD4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGVtIGNsYXNzTmFtZT1cInVzZXJuYW1lXCI+e3VzZXJuYW1lLnRvVXBwZXJDYXNlKCl9PC9lbT5cclxuICAgICAgICAgICAgICAgICAgICA8aHI+PC9ocj5cclxuICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGl0bGUgaXMtNlwiPk1lcyBwcm9ub3MgOjwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2JldHMubGVuZ3RoID4gMCA/IFxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5EYXRlIGR1IHByb25vPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U3RhdHV0IGR1IHByb25vPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TWF0Y2g8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Nb24gcHJvbm9zdGljPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UsOpc3VsdGF0IGR1IG1hdGNoPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2JldHMubWFwKGJldCA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2JldC5tYXRjaF9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmV0LmJldF9kYXRlLmRhdGUuc2xpY2UoMCwxMCkuc3BsaXQoJy0nKS5yZXZlcnNlKCkuam9pbignLycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVzLm1hcChtYXRjaCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZigobWF0Y2guX2lkID09IGJldC5tYXRjaF9pZCAmJiAobWF0Y2guaG9tZXNjb3JlICYmIG1hdGNoLmF3YXlzY29yZSAhPT0gXCJcIikpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihiZXQuaG9tZXNjb3JlID4gYmV0LmF3YXlzY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1hdGNoLmhvbWVzY29yZSA+IG1hdGNoLmF3YXlzY29yZSAmJiBtYXRjaC5ob21lc2NvcmUgPT0gYmV0LmhvbWVzY29yZSAmJiBtYXRjaC5hd2F5c2NvcmUgPT0gYmV0LmF3YXlzY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRkIGtleT17bWF0Y2guX2lkfT5QYXJpIEdhZ27DqSAhIDMgcG9pbnRzITwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihtYXRjaC5ob21lc2NvcmUgPiBtYXRjaC5hd2F5c2NvcmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx0ZCBrZXk9e21hdGNoLl9pZH0+UGFyaSBHYWduw6kgISAyIHBvaW50cyE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRkIGtleT17bWF0Y2guX2lkfT5QYXJpIHBlcmR1PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihiZXQuaG9tZXNjb3JlIDwgYmV0LmF3YXlzY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1hdGNoLmhvbWVzY29yZSA8IG1hdGNoLmF3YXlzY29yZSAmJiBtYXRjaC5ob21lc2NvcmUgPT0gYmV0LmhvbWVzY29yZSAmJiBtYXRjaC5hd2F5c2NvcmUgPT0gYmV0LmF3YXlzY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRkIGtleT17bWF0Y2guX2lkfT5QYXJpIEdhZ27DqSAhIDMgcG9pbnRzITwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1hdGNoLmhvbWVzY29yZSA8IG1hdGNoLmF3YXlzY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRkIGtleT17bWF0Y2guX2lkfT5QYXJpIEdhZ27DqSAhIDIgcG9pbnRzITwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8dGQga2V5PXttYXRjaC5faWR9PlBhcmkgcGVyZHU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYmV0LmhvbWVzY29yZSA9PT0gYmV0LmF3YXlzY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1hdGNoLmhvbWVzY29yZSA9PT0gbWF0Y2guYXdheXNjb3JlICYmIG1hdGNoLmhvbWVzY29yZSA9PSBiZXQuaG9tZXNjb3JlICYmIG1hdGNoLmF3YXlzY29yZSA9PSBiZXQuYXdheXNjb3JlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8dGQga2V5PXttYXRjaC5faWR9PlBhcmkgR2FnbsOpICEgMyBwb2ludHMhPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihtYXRjaC5ob21lc2NvcmUgPT09IG1hdGNoLmF3YXlzY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRkIGtleT17bWF0Y2guX2lkfT5QYXJpIEdhZ27DqSAhIDIgcG9pbnRzITwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8dGQga2V5PXttYXRjaC5faWR9PlBhcmkgcGVyZHU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKChtYXRjaC5faWQgPT0gYmV0Lm1hdGNoX2lkICYmIG1hdGNoLmhvbWVzY29yZT09PSBcIlwiKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXttYXRjaC5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGlwPVwiVm9pciBvdSBtb2RpZmllciBsZSBwcm9ub3N0aWNcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgL21hdGNoZXM/bWF0Y2g9JHtiZXQubWF0Y2hfaWR9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RUb29sdGlwIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJsaWdodFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlciBib3JkZXJDb2xvcj1cIiMzMzg0QThcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I9XCIjMzM4NEE4XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dDb2xvcj1cIiMzMzg0QThcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbiBjb3Vyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltYWdlcy8ke2JldC5ob21ldGVhbX0uc3ZnYH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI1cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG9tZWltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmV0LmhvbWV0ZWFtfSAtIHtiZXQuYXdheXRlYW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltYWdlcy8ke2JldC5hd2F5dGVhbX0uc3ZnYH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI1cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXdheWltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2JldC5ob21lc2NvcmV9IC0ge2JldC5hd2F5c2NvcmV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWF0Y2hlcy5tYXAobWF0Y2ggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoLmhvbWVzY29yZSAmJiBtYXRjaC5faWQgPT09IGJldC5tYXRjaF9pZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXttYXRjaC5faWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttYXRjaC5ob21lc2NvcmV9IC0ge21hdGNoLmF3YXlzY29yZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihtYXRjaC5ob21lc2NvcmUgPT09ICcnICYmIG1hdGNoLl9pZCA9PT0gYmV0Lm1hdGNoX2lkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRkIGtleT17bWF0Y2guX2lkfT5NYXRjaCDDoCB2ZW5pcjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PiA6XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Vm91cyBuJ2F2ZXogcGFzIGVuY29yZSBwbGFjw6kgZGUgcHJvbm9zdGljcy48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlJldmVuZXogdmVycyBsZXMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9tYXRjaGVzXCI+IG1hdGNoZXMgPC9MaW5rPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvdXIgY29tbWVuY2VyIMOgIHByb25vc3RpcXVlci5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50OyIsImltcG9ydCBSZWFjdCAsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuL2NvbW1vbi9Mb2FkZXInO1xyXG5pbXBvcnQgSm9pIGZyb20gJ2pvaS1icm93c2VyJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XHJcbmltcG9ydCB7IHRvYXN0LCBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IFJlYWN0VG9vbHRpcCBmcm9tICdyZWFjdC10b29sdGlwJztcclxuXHJcbmNsYXNzIEJldHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgaGlkZGVuIDogdHJ1ZSxcclxuICAgICAgICBkYXRhIDoge1xyXG4gICAgICAgICAgICBob21lcmVzdWx0IDogXCIgXCIsXHJcbiAgICAgICAgICAgIGF3YXlyZXN1bHQgOiBcIiBcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3JzOiB7fSxcclxuICAgICAgICBiZXRzdGF0dXMgOiBmYWxzZSxcclxuICAgICAgICB0b2FzdCA6IGZhbHNlLCBcclxuICAgICAgICBsb2FkaW5nIDogdHJ1ZSxcclxuICAgICAgICBjb25uZWN0ZWQgOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29ubmVjdGVkJyksXHJcbiAgICAgICAgdmFsaWRhdGlvbmRhdGUgOiB0cnVlXHJcbiAgICB9O1xyXG4gICAgc291cmNlID0gYXhpb3MuQ2FuY2VsVG9rZW4uc291cmNlKCk7XHJcbiAgICBzY2hlbWEgPSB7XHJcbiAgICAgICAgaG9tZXJlc3VsdCA6IEpvaS5udW1iZXIoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgIGF3YXlyZXN1bHQgOiBKb2kubnVtYmVyKCkucmVxdWlyZWQoKVxyXG4gICAgfTtcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgdGhpcy5nZXRCZXRzKCk7XHJcbiAgICAgICAgdGhpcy5nZXRWYWxpZGF0aW9uRGF0ZSgpXHJcbiAgICB9O1xyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc291cmNlKSB7XHJcbiAgICAgICAgICB0aGlzLnNvdXJjZS5jYW5jZWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRWYWxpZGF0aW9uRGF0ZSgpe1xyXG4gICAgICAgIGNvbnN0IG1hdGNoZGF0ZSA9IHRoaXMucHJvcHMubWF0Y2guZGF0ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ2xvbmcnICwgZGF5OiBcIm51bWVyaWNcIn07XHJcbiAgICAgICAgY29uc3QgbmV3ZGF0ZSA9IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCdmci1GUicsb3B0aW9ucyk7XHJcbiAgICAgICAgY29uc3QgbWF0Y2h0aW1lID0gTnVtYmVyKHRoaXMucHJvcHMubWF0Y2gudGltZS5zcGxpdCgnaCcpLmpvaW4oJycpKVxyXG4gICAgICAgIGNvbnN0IHRpbWUgPSBkYXRlLmdldEhvdXJzKClcclxuICAgICAgICBpZihtYXRjaGRhdGUgPT09IG5ld2RhdGUgJiYgbWF0Y2h0aW1lIC0gdGltZSA8PSAxKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGlvbmRhdGUgOiBmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0QmV0cygpe1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNvbm5lY3RlZCA9PT0gJ3RydWUnKXtcclxuICAgICAgICBjb25zdCBkYXRhID0geyB1c2VyaWQgOiBOdW1iZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkJykpICwgbWF0Y2hpZCA6IHRoaXMucHJvcHMubWF0Y2guX2lkfTtcclxuICAgICAgICBheGlvcyh7IG1ldGhvZCA6ICdQT1NUJyAsIHVybDogJ2FwaS9nZXRiZXRzJywgZGF0YSA6IGRhdGEgLCBoZWFkZXJzOiB7J1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnfSAsIGNhbmNlbFRva2VuOiB0aGlzLnNvdXJjZS50b2tlblxyXG4gICAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuaG9tZXNjb3JlKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhIDogeyBob21lcmVzdWx0IDogcmVzLmRhdGEuaG9tZXNjb3JlICwgYXdheXJlc3VsdCA6IHJlcy5kYXRhLmF3YXlzY29yZSB9LCBsb2FkaW5nIDogZmFsc2UgLCBiZXRzdGF0dXMgOiB0cnVlfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhIDogeyBob21lcmVzdWx0IDogJycgLCBhd2F5cmVzdWx0IDogJycgfSwgbG9hZGluZyA6IGZhbHNlfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nIDogZmFsc2UgfSlcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdmFsaWRhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHthYm9ydEVhcmx5IDogZmFsc2V9O1xyXG4gICAgICAgIGNvbnN0IHtlcnJvcn0gPSBKb2kudmFsaWRhdGUodGhpcy5zdGF0ZS5kYXRhLCB0aGlzLnNjaGVtYSwgb3B0aW9ucyk7XHJcbiAgICAgICAgaWYgKCFlcnJvcikgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgY29uc3QgZXJyb3JzID0ge307XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBlcnJvci5kZXRhaWxzKVxyXG4gICAgICAgICAgICBlcnJvcnNbaXRlbS5wYXRoWzBdXSA9IGl0ZW0ubWVzc2FnZTsgXHJcbiAgICAgICAgcmV0dXJuIGVycm9ycztcclxuICAgIH07XHJcbiAgICBoYW5kbGVDaGFuZ2UgPSAoe2N1cnJlbnRUYXJnZXQgOiBpbnB1dH0pID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gey4uLnRoaXMuc3RhdGUuZGF0YX07XHJcbiAgICAgICAgZGF0YVtpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGF9KTtcclxuICAgIH07XHJcbiAgICBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtoaWRkZW46ZmFsc2V9KVxyXG4gICAgfTtcclxuICAgIGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyBcclxuICAgICAgICBjb25zdCBlcnJvcnMgPSB0aGlzLnZhbGlkYXRlKCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9ycyA6IGVycm9ycyB8fCB7fX0pO1xyXG4gICAgICAgIGlmIChlcnJvcnMpIHJldHVybjsgIFxyXG4gICAgICAgIHRoaXMuZG9TdWJtaXQoKTtcclxuICAgIH07XHJcbiAgICBkb1N1Ym1pdCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICBob21lc2NvcmUgOiB0aGlzLnN0YXRlLmRhdGEuaG9tZXJlc3VsdCxcclxuICAgICAgICAgICAgYXdheXNjb3JlIDogdGhpcy5zdGF0ZS5kYXRhLmF3YXlyZXN1bHQsXHJcbiAgICAgICAgICAgIG1hdGNoaWQgOiB0aGlzLnByb3BzLm1hdGNoLl9pZCxcclxuICAgICAgICAgICAgYmV0aWQgOiB1dWlkdjQoKSxcclxuICAgICAgICAgICAgaG9tZXRlYW0gOiB0aGlzLnByb3BzLm1hdGNoLmhvbWV0ZWFtLFxyXG4gICAgICAgICAgICBhd2F5dGVhbSA6ICB0aGlzLnByb3BzLm1hdGNoLmF3YXl0ZWFtXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5iZXRzdGF0dXMgPT09IGZhbHNlKXtcclxuICAgICAgICAgICAgYXhpb3MoXHJcbiAgICAgICAgICAgICAgICB7bWV0aG9kOiAnUE9TVCcsIHVybDogJ2FwaS9wb3N0YmV0cycsIGRhdGE6IGRhdGEsIGhlYWRlcnM6IHsnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCd9fSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRkZW4gOiB0cnVlICwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob21lcmVzdWx0IDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YXlyZXN1bHQgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZXRzdGF0dXMgOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdCA6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3Quc3VjY2VzcygnUHJvbm9zdGljIHZhbGlkw6khJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0Nsb3NlOiAzMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgZG9jdW1lbnQubG9jYXRpb24uaHJlZj1cIi9tYXRjaGVzXCIgfSwzMjAwKTtcclxuICAgICAgICAgICAgICAgIH07ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdG9hc3QuZXJyb3IoJ1ZldWlsbGV6IHLDqWVzc2F5ZXInLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0Nsb3NlOiAzMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuc2V0U3RhdGUoe3RvYXN0IDogZmFsc2V9KX0sNjAwMCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBheGlvcyh7bWV0aG9kOidQT1NUJyx1cmw6J2FwaS91cGRhdGViZXRzJywgZGF0YTpkYXRhLCBoZWFkZXJzOiB7J1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnfX0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpPT4ge2lmIChyZXMuc3RhdHVzID09PSAyMDApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGRlbiA6IHRydWUgLCBcclxuICAgICAgICAgICAgICAgICAgICBkYXRhIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBob21lcmVzdWx0IDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXdheXJlc3VsdCA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgICAgICAgICBiZXRzdGF0dXMgOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0IDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7IFxyXG4gICAgICAgICAgICAgICAgdG9hc3Quc3VjY2VzcygnUHJvbm9zdGljIG1vZGlmacOpIScsIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICBhdXRvQ2xvc2U6IDMwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VCdXR0b246IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgZG9jdW1lbnQubG9jYXRpb24uaHJlZj1cIi9tYXRjaGVzXCIgfSwzMjAwKTtcclxuICAgICAgICAgICAgfX0pO1xyXG4gICAgICAgIH07ICAgICAgIFxyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7aGlkZGVuLCBkYXRhICwgZXJyb3JzICwgaW5wdXRlcnJvcnMgLCBiZXRzdGF0dXMgLCB0b2FzdCAsIGNvbm5lY3RlZCAsIGxvYWRpbmcgLCB2YWxpZGF0aW9uZGF0ZX0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHttYXRjaH0gPSB0aGlzLnByb3BzO1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XHJcbiAgICAgICAgICAgICAgICB7dG9hc3Q/IDxUb2FzdENvbnRhaW5lci8+IDogbnVsbH0gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8aDM+e21hdGNoLmRhdGV9IC0ge21hdGNoLnRpbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgIDxoND5Hcm91cGUge21hdGNoLmdyb3VwfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8cD57bWF0Y2gubG9jYXRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgPHByZSBjbGFzc05hbWU9XCJtYXRjaGRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImhvbWV0ZWFtaW1nXCIgc3JjPXtgL2ltYWdlcy8ke21hdGNoLmhvbWV0ZWFtfS5zdmdgfS8+XHJcbiAgICAgICAgICAgICAgICAgICAge21hdGNoLmhvbWV0ZWFtfSB7bWF0Y2guaG9tZXNjb3JlfSAtIHttYXRjaC5hd2F5c2NvcmV9IHttYXRjaC5hd2F5dGVhbX1cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImF3YXl0ZWFtaW1nXCIgc3JjPXtgL2ltYWdlcy8ke21hdGNoLmF3YXl0ZWFtfS5zdmdgfS8+XHJcbiAgICAgICAgICAgICAgICA8L3ByZT5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7bG9hZGluZyA9PT0gdHJ1ZSA/IDxMb2FkZXIvPiA6IFxyXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30gY2xhc3NOYW1lPXtoaWRkZW4gPyAnYnV0dG9uIGJldGJ1dHRvbiBpcy1wcmltYXJ5JyA6ICdoaWRkZW4nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2JldHN0YXR1cz8gJ1ZvaXIgdm90cmUgcHJvbm9zdGljJyA6IFwiUGFyaWVyIHN1ciBjZSBtYXRjaFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtoaWRkZW4gPyAnaGlkZGVuJyA6ICdiZXRnYW1lcyd9PlxyXG4gICAgICAgICAgICAgICAge2Nvbm5lY3RlZCA9PT0gXCJ0cnVlXCIgPyAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxlbT57bWF0Y2guaG9tZXRlYW0rXCIgXCJ9PC9lbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb25kYXRlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImhvbWVyZXN1bHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEuaG9tZXJlc3VsdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzY29yZSBob21lcmVzdWx0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnNbXCJob21lcmVzdWx0XCJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGI+e2RhdGEuaG9tZXJlc3VsdH08L2I+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+IC0gPC9iPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb25kYXRlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImF3YXlyZXN1bHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEuYXdheXJlc3VsdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2lucHV0ZXJyb3JzPyAnaW5wdXRlcnJvcnMnIDogJ3Njb3JlJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPiB7ZGF0YS5hd2F5cmVzdWx0fTwvYj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxlbT4ge21hdGNoLmF3YXl0ZWFtfSA8L2VtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dmFsaWRhdGlvbmRhdGUgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVTdWJtaXR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMudmFsaWRhdGUoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPS1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gOm51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8cD5Wb3VzIGRldmV6IMOqdHJlIGNvbm5lY3TDqSBwb3VyIHBsYWNlciB1biBwcm9ub3N0aWMuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IEJldHM7IiwiaW1wb3J0IHsgbWF0Y2hlcyB9IGZyb20gJ2xvZGFzaC1lcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBDb21pbmdNYXRjaGVzID0gKHtkYXRhfSkgPT4ge1xyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21pbmdtYXRjaGVzXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZSBpcy0zXCI+UHJvY2hhaW5zIG1hdGNoZXM8L2gzPlxyXG4gICAgICAgICAgICB7ZGF0YS5tYXAobWF0Y2ggPT4gXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIiBrZXk9e21hdGNoLl9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGI+e21hdGNoLmRhdGV9PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPnttYXRjaC5ob21ldGVhbX0gLSB7bWF0Y2guYXdheXRlYW19PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBDb21pbmdNYXRjaGVzOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBGaWx0ZXIgPSAoe2l0ZW1zLG9uSXRlbVNlbGVjdCxzZWxlY3RlZEl0ZW0sbGFiZWx9KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi10cmlnZ2VyXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5GaWx0cmVyIHBhciB7bGFiZWwudG9Mb3dlckNhc2UoKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGlzLXNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2FuZ2xlZG93bi5zdmdcIi8+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9eycnID09PSBzZWxlY3RlZEl0ZW0gPyAnc2VsZWN0aW9uIGlzLXNlbGVjdGVkJyA6ICdzZWxlY3Rpb24nfSBvbkNsaWNrPXsgKCkgPT4gb25JdGVtU2VsZWN0KCdBbGwnKX0+VG91czwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1zLm1hcChpdGVtID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aXRlbSA9PT0gc2VsZWN0ZWRJdGVtID8gJ3NlbGVjdGlvbiBpcy1zZWxlY3RlZCcgOiAnc2VsZWN0aW9uJ30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gb25JdGVtU2VsZWN0KGl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWwgIT09ICdHcm91cGUgJz8gaXRlbSA6IGxhYmVsICsgaXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICl9ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXI7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgY29ubmVjdGVkIDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Nvbm5lY3RlZCcpLFxyXG4gICAgICAgIG1vYmlsZW1lbnUgOiBmYWxzZSxcclxuICAgICAgICBpc0FjdGl2ZSA6IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2dvdXQoKXtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29ubmVjdGVkJywnZmFsc2UnKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnaWQnKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnL2FwaS9sb2dvdXQnKTtcclxuICAgIH07XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7Y29ubmVjdGVkICwgaXNBY3RpdmV9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICByZXR1cm4gKCBcclxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvaG9tZVwiPjxpbWcgc3JjPVwiL2ltYWdlcy9ldXJvMjAyMC1sb2dvLnN2Z1wiIHdpZHRoPVwiNzBcIj48L2ltZz48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHt0aGlzLnNldFN0YXRlKHtpc0FjdGl2ZSA6ICFpc0FjdGl2ZX0pfX0gY2xhc3NOYW1lPXtpc0FjdGl2ZT9cIm5hdmJhci1idXJnZXIgaXMtYWN0aXZlXCI6XCJuYXZiYXItYnVyZ2VyXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aXNBY3RpdmU/XCJuYXZiYXItbWVudSBpcy1hY3RpdmVcIjpcIm5hdmJhci1tZW51XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9ydWxlc1wiIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCI+UsOoZ2xlczwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW0gaGFzLWRyb3Bkb3duIGlzLWhvdmVyYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5NYXRjaGVzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvbWF0Y2hlc1wiIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCI+UGhhc2UgZGUgR3JvdXBlPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPExpbmsgdG89XCIvI1wiIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCI+UGhhc2UgZmluYWxlPC9MaW5rPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvcmFua2luZ1wiIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCI+Q2xhc3NlbWVudDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Nvbm5lY3RlZD09PSd0cnVlJz9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9hY2NvdW50XCIgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXByaW1hcnlcIj5Nb24gY29tcHRlPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uTG9nb3V0fSAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXdhcm5pbmdcIj5Ew6ljb25uZWN0aW9uPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvbG9naW5cIiBjbGFzc05hbWU9XCJidXR0b24gaXMtcHJpbWFyeVwiPkNvbm5lY3Rpb248L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9zaWdudXBcIiBjbGFzc05hbWU9XCJidXR0b24gaXMtaW5mb1wiPjxzdHJvbmc+Q3LDqWVyIHVuIGNvbXB0ZTwvc3Ryb25nPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBDb21pbmdNYXRjaGVzIGZyb20gJy4vQ29taW5nTWF0Y2hlcyc7XHJcbmltcG9ydCB7IFR3aXR0ZXJUaW1lbGluZUVtYmVkIH0gZnJvbSAncmVhY3QtdHdpdHRlci1lbWJlZCc7XHJcbmltcG9ydCBXZWxjb21lTW9kYWwgZnJvbSAnLi9XZWxjb21lTW9kYWwnO1xyXG5cclxuY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhdGUgPSB7IFxyXG4gICAgICAgIG1hdGNoZXMgOiBbXSxcclxuICAgICAgICBzaG93bW9kYWwgOiBmYWxzZVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIHRoaXMuZ2V0TWF0Y2hlcygpO1xyXG4gICAgICAgIGNvbnN0IGNvbm5lY3RlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb25uZWN0ZWQnKTtcclxuICAgICAgICBpZiAoY29ubmVjdGVkID09PSAndHJ1ZScpIHRoaXMuZ2V0VXNlcigpO1xyXG4gICAgICAgIHRoaXMuc2hvd01vZGFsKClcclxuICAgICAgICBcclxuICAgIH07XHJcbiAgICBzaG93TW9kYWwoKXtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd21vZGFsIDogdHJ1ZX0pXHJcbiAgICAgICAgfSwgMzAwMCk7XHJcbiAgICB9XHJcbiAgICBnZXRVc2VyKCl7XHJcbiAgICAgICAgYXhpb3MuZ2V0KCdhcGkvZ2V0VXNlcklkJykudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWQnLHJlcy5kYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBnZXRNYXRjaGVzKCl7XHJcbiAgICAgICAgYXhpb3MuZ2V0KGBodHRwczovL3BvcnRmb2xpby03MjE0Ny1kZWZhdWx0LXJ0ZGIuZXVyb3BlLXdlc3QxLmZpcmViYXNlZGF0YWJhc2UuYXBwL21hdGNoZXMuanNvbmApLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgbGV0IG1hdGNoZXMgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgcmVzLmRhdGEubGVuZ3RoIDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YVtpXS5ob21lc2NvcmUgPT09IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoZXMucHVzaChyZXMuZGF0YVtpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWF0Y2hlcyA6IG1hdGNoZXMuc2xpY2UoMCw0KX0pIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge21hdGNoZXMgLCBzaG93bW9kYWx9ID0gdGhpcy5zdGF0ZVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImhlYWRlcmltZ1wiPlxyXG4gICAgICAgICAgICAgICAge3Nob3dtb2RhbD88V2VsY29tZU1vZGFsLz46bnVsbH1cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9ldXJvMjAyMC1sb2dvLnN2Z1wiLz4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8Q29taW5nTWF0Y2hlcyBkYXRhPXttYXRjaGVzfS8+XHJcbiAgICAgICAgICAgICAgICA8VHdpdHRlclRpbWVsaW5lRW1iZWRcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VUeXBlPVwicHJvZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2NyZWVuTmFtZT1cImVxdWlwZWRlZnJhbmNlXCJcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt7aGVpZ2h0OiA1MDAgLCB3aWR0aCA6IDMwMH19XHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZz1cImZyXCJcclxuICAgICAgICAgICAgICAgIC8+ICAgICBcclxuICAgICAgICAgICAgPC9zZWN0aW9uPiAgICAgICAgICAgXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiAgICBcclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSm9pIGZyb20gJ2pvaS1icm93c2VyJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyB0b2FzdCwgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4vY29tbW9uL2Zvcm0nO1xyXG5pbXBvcnQgVXNlckxvYWRlciBmcm9tICcuL2NvbW1vbi91c2VybG9hZGVyJztcclxuXHJcbmNsYXNzIFNpZ251cCBleHRlbmRzIEZvcm0ge1xyXG4gICAgc3RhdGUgPSB7IFxyXG4gICAgICAgIGRhdGEgOiB7XHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZSA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZCA6IFwiXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3JzIDoge30sXHJcbiAgICAgICAgZXJyb3JzY291bnQgOiAwLFxyXG4gICAgICAgIGxvYWRpbmcgOiBmYWxzZSxcclxuICAgICAgICBidXR0b25UZXh0IDogXCJWYWxpZGVyXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICBzY2hlbWEgPSB7XHJcbiAgICAgICAgdXNlcm5hbWUgOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKS5tYXgoNDApLFxyXG4gICAgICAgIHBhc3N3b3JkIDogSm9pLnN0cmluZygpLnJlcXVpcmVkKCkubWluKDgpLm1heCgyNSlcclxuICAgIH1cclxuICAgIGRvU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmcgOiB0cnVlICwgYnV0dG9uVGV4dCA6IFwiQ2hhcmdlbWVudC4uLlwifSlcclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICB1c2VybmFtZSA6IHRoaXMuc3RhdGUuZGF0YS51c2VybmFtZSxcclxuICAgICAgICAgICAgcGFzc3dvcmQgOiB0aGlzLnN0YXRlLmRhdGEucGFzc3dvcmQsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF4aW9zKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogJ2FwaS9sb2dpbicsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCd9ICAgICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzpmYWxzZSAsIGJ1dHRvblRleHQgOiBcIlZhbGlkZXJcIn0pXHJcbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApe1xyXG4gICAgICAgICAgICB0b2FzdC5zdWNjZXNzKHJlcy5kYXRhLm1lc3NhZ2UsIHRoaXMudG9hc3RvcHRpb25zKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Nvbm5lY3RlZCcsJ3RydWUnKVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7ZG9jdW1lbnQubG9jYXRpb24uaHJlZj1cIi9ob21lXCIgfSwyMTAwKSBcclxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzpmYWxzZSAsIGJ1dHRvblRleHQgOiBcIkNoYXJnZW1lbnQuLi5cIn0pXHJcbiAgICAgICAgICAgIHRvYXN0LmVycm9yKCdWw6lyaWZpZXogdm9zIGlkZW50aWZpYW50cycsIHRoaXMudG9hc3RvcHRpb25zKTtcclxuICAgICAgICAgICAgbGV0IGVycm9yc2NvdW50ID0gdGhpcy5zdGF0ZS5lcnJvcnNjb3VudDtcclxuICAgICAgICAgICAgZXJyb3JzY291bnQrK1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcnNjb3VudDplcnJvcnNjb3VudCAsIGRhdGEgOiB7IHVzZXJuYW1lIDogXCJcIiAsIHBhc3N3b3JkIDogXCJcIn0gLCBidXR0b25UZXh0IDpcIlZhbGlkZXJcIn0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHsgXHJcbiAgICAgICAgY29uc3Qge2Vycm9yc2NvdW50LCBsb2FkaW5nICwgYnV0dG9uVGV4dCB9ID0gdGhpcy5zdGF0ZVxyXG4gICAgICAgIHJldHVybiAoIFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyLz5cclxuICAgICAgICAgICAgICAgIHtsb2FkaW5nID09PSB0cnVlID8gPFVzZXJMb2FkZXIvPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5Db25uZWN0aW9uPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMj5QYXMgZGUgY29tcHRlPyBDbGlxdWV6IDxMaW5rIHRvPVwic2lnbnVwXCI+aWNpPC9MaW5rPiBwb3VyIGVuIGNyw6llciB1bi48L2gyPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJzaWdudXAtZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlcklucHV0KCd1c2VybmFtZScsJ05vbSBkXFwndXRpbGlzYXRldXIgOicsJ3RleHQnLCdpbnB1dCcpfVxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlcklucHV0KCdwYXNzd29yZCcsJ01vdCBkZSBwYXNzZSA6JywncGFzc3dvcmQnLCdpbnB1dCcpfVxyXG4gICAgICAgICAgICAgICAgICAgIHtlcnJvcnNjb3VudCA+PSAzID8gPGVtPlZvdXMgYXZleiBvdWJsacOpIHZvdHJlIG1vdCBkZSBwYXNzZSA/IENsaXF1ZXogPExpbmsgdG89XCIvbmV3cGFzc3dvcmRcIj5pY2k8L0xpbms+IHBvdXIgbGUgcsOpaW5pdGxhaWlzZXI8L2VtPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBpcy1ncm91cGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckJ1dHRvbihidXR0b25UZXh0LCdidXR0b24gaXMtc3VjY2VzcycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9ob21lXCIgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWluZm9cIj5Bbm51bGVyPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XHJcbmltcG9ydCBCZXRzIGZyb20gJy4vQmV0cyc7XHJcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuL2NvbW1vbi9wYWdpbmF0aW9uJztcclxuaW1wb3J0IHsgcGFnaW5hdGUgfSBmcm9tICcuLi91dGlsaXRpZXMvcGFnaW5hdGUnO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5cclxuXHJcbmNsYXNzIE1hdGNoZXMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHN0YXRlID0geyBcclxuICAgICAgICBtYXRjaGVzIDogW10sXHJcbiAgICAgICAgc2VsZWN0ZWRNYXRjaGVzIDogW10sXHJcbiAgICAgICAgZ3JvdXBzOiBbXSwgXHJcbiAgICAgICAgc2VsZWN0ZWRHcm91cCA6ICcnLFxyXG4gICAgICAgIGRhdGVzIDogW10gLFxyXG4gICAgICAgIHNlbGVjdGVkRGF0ZSA6ICcnLFxyXG4gICAgICAgIHRlYW1zIDogW10sXHJcbiAgICAgICAgc2VsZWN0ZWRUZWFtIDogJycsXHJcbiAgICAgICAgY3VycmVudFBhZ2UgOiAxICxcclxuICAgICAgICBwYWdlU2l6ZSA6IDYsXHJcbiAgICAgICAgZGF0ZSA6IG5ldyBEYXRlKCdkLU0tWScpXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIHRoaXMuZ2V0TWF0Y2hlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1hdGNoZXMoKSB7ICAgICAgICBcclxuICAgICAgICBheGlvcy5nZXQoYGh0dHBzOi8vcG9ydGZvbGlvLTcyMTQ3LWRlZmF1bHQtcnRkYi5ldXJvcGUtd2VzdDEuZmlyZWJhc2VkYXRhYmFzZS5hcHAvbWF0Y2hlcy5qc29uYCkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBtYXRjaGlkID0gTnVtYmVyKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoLnNsaWNlKDcpKTtcclxuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHJlcy5kYXRhLnNsaWNlKDAsMzYpO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRlcyA9IFtdO1xyXG4gICAgICAgICAgICBjb25zdCB0ZWFtcyA9IFtdO1xyXG4gICAgICAgICAgICBjb25zdCBncm91cHMgPSBbXTtcclxuICAgICAgICAgICAgbWF0Y2hlcy5tYXAoIG0gPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFkYXRlcy5pbmNsdWRlcyhtLmRhdGUpKSBkYXRlcy5wdXNoKG0uZGF0ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRlYW1zLmluY2x1ZGVzKG0uaG9tZXRlYW0pKSB0ZWFtcy5wdXNoKG0uaG9tZXRlYW0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFncm91cHMuaW5jbHVkZXMobS5ncm91cCkpIGdyb3Vwcy5wdXNoKG0uZ3JvdXApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbGV0IHNpbmdsZW1hdGNoID0gW11cclxuICAgICAgICAgICAgaWYobWF0Y2hpZCAhPSBcIlwiICYmIG1hdGNoaWQgPD0gbWF0Y2hlcy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgc2luZ2xlbWF0Y2gucHVzaChtYXRjaGVzLmZpbmQobSA9PiBtYXRjaGlkID09IG0uX2lkKSApXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWF0Y2hlcyAsIHRlYW1zIDogdGVhbXMuc29ydCgpICwgZGF0ZXMgLCBncm91cHMgLCBzZWxlY3RlZE1hdGNoZXMgOiBzaW5nbGVtYXRjaCB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWF0Y2hlcyAsIHRlYW1zIDogdGVhbXMuc29ydCgpICwgZGF0ZXMgLCBncm91cHMgLCBzZWxlY3RlZE1hdGNoZXMgOiBtYXRjaGVzIH0pXHJcbiAgICAgICAgICAgIH0gICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVQYWdlQ2hhbmdlID0gKHBhZ2UpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudFBhZ2UgOiBwYWdlfSk7XHJcbiAgICB9O1xyXG4gICAgaGFuZGxlR3JvdXBGaWx0ZXIgPSAoZ3JvdXApID0+IHtcclxuICAgICAgICBjb25zdCBtYXRjaGVzID0gWy4uLnRoaXMuc3RhdGUubWF0Y2hlc107XHJcbiAgICAgICAgaWYgKGdyb3VwID09PSAnQWxsJyl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZE1hdGNoZXMgOiBtYXRjaGVzICwgc2VsZWN0ZWRHcm91cCA6Jyd9KTtcclxuICAgICAgICB9ICBcclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZE1hdGNoZXMgPSBtYXRjaGVzLmZpbHRlciggbSA9PiBtLmdyb3VwID09PSBncm91cCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkTWF0Y2hlcyAsIHNlbGVjdGVkR3JvdXAgOiBncm91cCAsIHNlbGVjdGVkVGVhbSA6ICcnICwgc2VsZWN0ZWREYXRlIDogJycgLCBjdXJyZW50UGFnZTogMX0pO1xyXG4gICAgICAgIH0gIFxyXG4gICAgfTtcclxuICAgIGhhbmRsZURhdGVGaWx0ZXIgPSAoZGF0ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBbLi4udGhpcy5zdGF0ZS5tYXRjaGVzXTtcclxuICAgICAgICBpZiAoZGF0ZSA9PT0gJ0FsbCcpe1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRNYXRjaGVzIDogbWF0Y2hlcyAsIHNlbGVjdGVkRGF0ZSA6Jyd9KVxyXG4gICAgICAgIH0gICAgICBcclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZE1hdGNoZXMgPSBtYXRjaGVzLmZpbHRlciggbSA9PiBtLmRhdGUgPT09IGRhdGUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZE1hdGNoZXMgLCBzZWxlY3RlZERhdGUgOiBkYXRlICwgc2VsZWN0ZWRUZWFtIDogJycgLCBzZWxlY3RlZEdyb3VwIDogJycsIGN1cnJlbnRQYWdlOiAxfSk7XHJcbiAgICAgICAgfSAgXHJcbiAgICB9O1xyXG4gICAgaGFuZGxlVGVhbUZpbHRlciA9ICh0ZWFtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IFsuLi50aGlzLnN0YXRlLm1hdGNoZXNdO1xyXG4gICAgICAgIGlmICh0ZWFtID09PSAnQWxsJyl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZE1hdGNoZXMgOiBtYXRjaGVzICwgc2VsZWN0ZWRUZWFtIDogJycsIGN1cnJlbnRQYWdlOiAxfSlcclxuICAgICAgICB9ICAgICAgXHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRNYXRjaGVzID0gbWF0Y2hlcy5maWx0ZXIoIG0gPT4gbS5ob21ldGVhbSA9PT0gdGVhbSB8fCBtLmF3YXl0ZWFtID09PSB0ZWFtKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRNYXRjaGVzICwgc2VsZWN0ZWRUZWFtIDogdGVhbSAsIHNlbGVjdGVkRGF0ZSA6ICcnICwgc2VsZWN0ZWRHcm91cCA6ICcnfSk7XHJcbiAgICAgICAgfSAgXHJcbiAgICB9O1xyXG4gICAgZ2V0UGFnZWREYXRhID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgcGFnZVNpemUsIGN1cnJlbnRQYWdlLCBzZWxlY3RlZE1hdGNoZXN9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCBtYXRjaExpc3RQZXJQYWdlID0gcGFnaW5hdGUoc2VsZWN0ZWRNYXRjaGVzLGN1cnJlbnRQYWdlLHBhZ2VTaXplKTtcclxuICAgICAgICByZXR1cm4geyB0b3RhbENvdW50OiBzZWxlY3RlZE1hdGNoZXMubGVuZ3RoLCBkYXRhOiBtYXRjaExpc3RQZXJQYWdlfVxyXG4gICAgfVxyXG4gICAgcHJldmlvdXNQYWdlID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCB7Y3VycmVudFBhZ2V9ID0gdGhpcy5zdGF0ZVxyXG4gICAgICAgIGlmIChjdXJyZW50UGFnZSA+MSApe1xyXG4gICAgICAgICAgICBjdXJyZW50UGFnZS0tXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRQYWdlfSlcclxuICAgIH0gICAgXHJcbiAgICBuZXh0UGFnZSA9ICgpID0+IHtcclxuICAgICAgICBsZXQge2N1cnJlbnRQYWdlLHNlbGVjdGVkTWF0Y2hlcyxwYWdlU2l6ZX0gPSB0aGlzLnN0YXRlXHJcbiAgICAgICAgaWYgKGN1cnJlbnRQYWdlIDwgTWF0aC5jZWlsKHNlbGVjdGVkTWF0Y2hlcy5sZW5ndGggLyBwYWdlU2l6ZSkgKXtcclxuICAgICAgICAgICAgY3VycmVudFBhZ2UrK1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50UGFnZX0pXHJcbiAgICB9ICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgcGFnZVNpemUgLCBjdXJyZW50UGFnZSAsIHNlbGVjdGVkR3JvdXAsIHNlbGVjdGVkRGF0ZSAsIHNlbGVjdGVkVGVhbSAsIGRhdGVzICwgIGdyb3VwcyAsIHRlYW1zIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHsgdG90YWxDb3VudCAsIGRhdGEgfSA9IHRoaXMuZ2V0UGFnZWREYXRhKCk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXRjaGVzY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+UGhhc2UgZGUgR3JvdXBlPC9oMT48aHIvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93biBpcy1ob3ZlcmFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8RmlsdGVyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17J0dyb3VwZSAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17Z3JvdXBzfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtPXtzZWxlY3RlZEdyb3VwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkl0ZW1TZWxlY3Q9e3RoaXMuaGFuZGxlR3JvdXBGaWx0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93biBpcy1ob3ZlcmFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8RmlsdGVyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17J0RhdGUgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2RhdGVzfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtPXtzZWxlY3RlZERhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSXRlbVNlbGVjdD17dGhpcy5oYW5kbGVEYXRlRmlsdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24gaXMtaG92ZXJhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpbHRlciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9eydFcXVpcGUgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e3RlYW1zfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtPXtzZWxlY3RlZFRlYW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSXRlbVNlbGVjdD17dGhpcy5oYW5kbGVUZWFtRmlsdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF0Y2hlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLm1hcChtYXRjaCA9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCZXRzIG1hdGNoPXttYXRjaH0ga2V5PXttYXRjaC5faWR9Lz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8UGFnaW5hdGlvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXNDb3VudD17dG90YWxDb3VudH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplPXtwYWdlU2l6ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblBhZ2VDaGFuZ2U9e3RoaXMuaGFuZGxlUGFnZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNQYWdlPXt0aGlzLnByZXZpb3VzUGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFBhZ2U9e3RoaXMubmV4dFBhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgIFxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IE1hdGNoZXM7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuL2NvbW1vbi9Mb2FkZXInO1xyXG5cclxuY2xhc3MgUmFua2luZyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHsgXHJcbiAgICAgICAgZGF0YSA6IHtcclxuICAgICAgICAgICAgdXNlcnMgOiBbXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9hZGluZyA6IGZhbHNlXHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIHRoaXMuZ2V0VXNlcnMoKVxyXG4gICAgfVxyXG5cclxuICAgIGdldFVzZXJzKCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzp0cnVlfSlcclxuICAgICAgICBheGlvcy5nZXQoJy9hcGkvdXNlci9nZXRBbGwnKS50aGVuKChyZXMpID0+IFxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGEgOiB7dXNlcnMgOiByZXMuZGF0YS51c2VybmFtZXN9ICwgbG9hZGluZyA6IGZhbHNlfSkpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkgeyBcclxuICAgICAgICBjb25zdCB7dXNlcnN9ID0gdGhpcy5zdGF0ZS5kYXRhXHJcbiAgICAgICAgY29uc3Qge2xvYWRpbmd9ID0gdGhpcy5zdGF0ZVxyXG4gICAgICAgIHJldHVybiAoIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgey8qIHtsb2FkaW5nPyA8TG9hZGVyLz4gOlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VXRpbGlzYXRldXJzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJzLm1hcCh1c2VyID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXt1c2VyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dXNlcn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPn0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlIGlzLTFcIj5DbGFzc2VtZW50IMOgIHZlbmlyISE8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpZnJhbWUgc3JjPSdodHRwczovL2dmeWNhdC5jb20vaWZyL0NoZWVyeVZhZ3VlRWxraG91bmQnIGZyYW1lQm9yZGVyPScwJyBzY3JvbGxpbmc9J25vJyB3aWR0aD0nNjQwJyBoZWlnaHQ9JzM2MSc+PC9pZnJhbWU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBSYW5raW5nOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBSdWxlcyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnVsZXNcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlIGlzLTFcIj5MZXMgcsOoZ2xlcyBkdSBqZXU8L2gxPlxyXG4gICAgICAgICAgICA8dWw+ICAgIFxyXG4gICAgICAgICAgICAgICAgPGxpPk9uIHBldXQgcHJvbm9zdGlxdWVyIGxlIHLDqXN1bHRhdCBkZSB0b3VzIGxlcyBtYXRjaGVzIChwaGFzZXMgZGUgcG91bGUgZXQgcGhhc2UgZmluYWxlIGTDqHMgcXUnaWxzIHNlcm9udCBjb25udXMpLjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+T24gcHJvbm9zdGlxdWUgc3VyIGxlIHLDqXN1bHRhdCBkdSBtYXRjaCBhcHLDqHMgOTAgbWludXRlcyAocHJvbG9uZ2F0aW9ucyBldCB0aXJzIGF1eCBidXRzIG5vbiBwcmlzIGVuIGNvbXB0ZSkuPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5MZXMgcHJvbm9zdGljcyBwZXV2ZW50IMOpdHJlIGTDqXBvc8OpcyBvdSBtb2RpZmnDqXMganVzcXUnw6AgMWggYXZhbnQgbGUgZMOpYnV0IGR1IG1hdGNoLjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+VW4gcHJvbm9zdGljIGNvcnJlY3Qgc2FucyBzY29yZSBleGFjdCByYXBwb3J0ZSAyIHBvaW50cyAoXHJcbiAgICAgICAgICAgICAgICAgICAgZXhlbXBsZSA9IFtSw6lzdWx0YXQgSXRhbGllIC0gVHVycXVpZSA9IDItMV0gLCBbcHJvbm9zdGljIDMgLSAwXSA9IHBhcmkgZ2FnbsOpKS48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlVuIHByb25vc3RpYyBjb3JyZWN0IGF2ZWMgbGUgc2NvcmUgZXhhY3QgcmFwcG9ydGUgMyBwb2ludHMuPC9saT4gXHJcbiAgICAgICAgICAgICAgICA8bGk+TGUgZ2FnbmFudCBnYWduZSAoZXQgYydlc3QgYmllbmcpITwvbGk+ICAgICAgICAgICBcclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgUnVsZXM7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBXZWxjb21lTW9kYWwgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBtb2RhbHZpZXcgOiBmYWxzZSxcclxuICAgICAgICBtb2RhbHNob3cgOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXMnKSAhPT0gJ3knXHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21vZGFsdmlldzp0cnVlfSlcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHttb2RhbHZpZXcsbW9kYWxzaG93fSA9IHRoaXMuc3RhdGVcclxuICAgICAgICByZXR1cm4gKCBcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgeyBtb2RhbHNob3cgP1xyXG4gICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXttb2RhbHZpZXc/J21vZGFsIGlzLWFjdGl2ZSc6J21vZGFsJ30gXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxtZXNzYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+e3RoaXMuc2V0U3RhdGUoe21vZGFsdmlldzpmYWxzZX0pO2xvY2FsU3RvcmFnZS5zZXRJdGVtKCdtcycsJ3knKX19IFxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg4pyWXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJpZW52ZW51ZSBzdXIgY2Ugc2l0ZSBkZSBwcm9ub3N0aWNzIHN1ciBsZXMgbWF0Y2hlcyBsJ1VFRkEgRVVSTyAyMDIwPHN1cD5UTTwvc3VwPi48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBJY2kgcXVlIGR1IGZ1biwgcGFzIGRlIG1pc2VzIGQnYXJnZW50LCBqdXN0ZSB1biBwZXRpdCBqZXUgZ3JhdHVpdCBwb3VyIHNlIGRpdmVydGlyIS48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBdWN1bmUgZG9ubsOpZSBuZSBzZXJhIGNvbGxlY3TDqWUgb3UgcmV2ZW5kdWUgPHNwYW4+8J+Ygzwvc3Bhbj4uXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQcsOqdCDDoCBqb3Vlcj9cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9Pnt0aGlzLnNldFN0YXRlKHttb2RhbHZpZXc6ZmFsc2V9KTtsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXMnLCd5Jyl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtcHJpbWFyeSBpcy1sYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDJ2VzdCBwYXJ0aSAhXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+OlxyXG4gICAgICAgICAgICBudWxsfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgV2VsY29tZU1vZGFsOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBMb2FkZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKCBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxkcy1yb2xsZXJcIj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PC9kaXY+XHJcbiAgICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRlcjsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSm9pIGZyb20gJ2pvaS1icm93c2VyJztcclxuaW1wb3J0IElucHV0IGZyb20gJy4vaW5wdXQnO1xyXG5cclxuY2xhc3MgRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHsgXHJcbiAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgZXJyb3JzOiB7fVxyXG4gICAgfVxyXG4gICAgdG9hc3RvcHRpb25zID0ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcInRvcC1jZW50ZXJcIixcclxuICAgICAgICBhdXRvQ2xvc2U6IDMwMDAsXHJcbiAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgY2xvc2VCdXR0b246IGZhbHNlLFxyXG4gICAgfVxyXG4gICAgdmFsaWRhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHthYm9ydEVhcmx5IDogZmFsc2V9O1xyXG4gICAgICAgIGNvbnN0IHtlcnJvcn0gPSBKb2kudmFsaWRhdGUodGhpcy5zdGF0ZS5kYXRhLCB0aGlzLnNjaGVtYSAsIG9wdGlvbnMpO1xyXG4gICAgICAgIGlmICghZXJyb3IpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCBlcnJvcnMgPSB7fTtcclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGVycm9yLmRldGFpbHMpXHJcbiAgICAgICAgICAgIGVycm9yc1tpdGVtLnBhdGhbMF1dID0gaXRlbS5tZXNzYWdlOyBcclxuICAgICAgICByZXR1cm4gZXJyb3JzO1xyXG4gICAgfTtcclxuICAgIHZhbGlkYXRlUHJvcGVydHkgPSAoe25hbWUsdmFsdWV9KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2JqID0geyBbbmFtZV0gOiB2YWx1ZX07XHJcbiAgICAgICAgY29uc3Qgc2NoZW1hID0geyBbbmFtZV0gOiB0aGlzLnNjaGVtYVtuYW1lXX1cclxuICAgICAgICBsZXQgZXJyb3JNZXNzYWdlO1xyXG4gICAgICAgIGlmIChKb2kudmFsaWRhdGUob2JqLHNjaGVtYSkuZXJyb3IgIT09IG51bGwpe1xyXG4gICAgICAgICAgICBpZiAoW25hbWVdWzBdID09PSAndXNlcm5hbWUnKXsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yID0gSm9pLnZhbGlkYXRlKG9iaixzY2hlbWEpLmVycm9yLmRldGFpbHNbMF0udHlwZTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdhbnkuZW1wdHknOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSAnTGUgbm9tIGRcXCd1dGlsaXNhdGV1ciBkb2l0IMOqdHJlIHJlbnNlaWduw6knO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdzdHJpbmcubWF4JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gJ0xlIG5vbSBkXFwndXRpbGlzYXRldXIgbmUgcGV1dCBleGPDqWRlciA0MCBjYXJhY3TDqHJlcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKFtuYW1lXVswXSA9PT0gJ3Bhc3N3b3JkJyl7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IEpvaS52YWxpZGF0ZShvYmosc2NoZW1hKS5lcnJvci5kZXRhaWxzWzBdLnR5cGU7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYW55LmVtcHR5JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gJ0xlIG1vdCBkZSBwYXNzZSBkb2l0IMOqdHJlIHJlbnNlaWduw6knO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdzdHJpbmcubWluJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gJ0xlIG1vdCBkZSBwYXNzZSBkb2l0IGNvbnRlbmlyIGF1IG1vaW5zIDggY2FyYWN0w6hyZXMnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3N0cmluZy5tYXgnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSAnTGUgbW90IGRlIHBhc3NlIG5lIGRvaXQgcGFzIGTDqXBhc3NlciAyNSBjYXJhY3TDqHJlcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKFtuYW1lXVswXSA9PT0gJ2VtYWlsJyl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IEpvaS52YWxpZGF0ZShvYmosc2NoZW1hKS5lcnJvci5kZXRhaWxzWzBdLnR5cGU7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGVycm9yKXtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdzdHJpbmcuZW1haWwnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSAnVmV1aWxsZXogcmVuc2VpZ25lciB1biBlLW1haWwgdmFsaWRlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYW55LmVtcHR5JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gJ0xcXCdhZHJlc3NlIEVtYWlsIGRvaXQgw6p0cmUgcmVuc2VpZ27DqWUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKFtuYW1lXVswXSA9PT0gJ3Bhc3MnKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yID0gSm9pLnZhbGlkYXRlKG9iaixzY2hlbWEpLmVycm9yLmRldGFpbHNbMF0udHlwZTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdhbnkuZW1wdHknOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSAnTGUgY29kZSBkXFwnYWNjw6hzIGRvaXQgw6p0cmUgcmVuc2VpZ27DqSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlcnJvck1lc3NhZ2VcclxuICAgIH07XHJcbiAgICBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgXHJcbiAgICAgICAgY29uc3QgZXJyb3JzID0gdGhpcy52YWxpZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcnMgOiBlcnJvcnMgfHwge319KTtcclxuICAgICAgICBpZiAoZXJyb3JzKSByZXR1cm47ICBcclxuICAgICAgICB0aGlzLmRvU3VibWl0KCk7ICAgICBcclxuICAgIH07XHJcbiAgICBoYW5kbGVDaGFuZ2UgPSAoe2N1cnJlbnRUYXJnZXQgOiBpbnB1dH0pID0+IHtcclxuICAgICAgICBjb25zdCBlcnJvcnMgPSB7Li4udGhpcy5zdGF0ZS5lcnJvcnN9XHJcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gdGhpcy52YWxpZGF0ZVByb3BlcnR5KGlucHV0KVxyXG4gICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIGVycm9yc1tpbnB1dC5uYW1lXSA9IGVycm9yTWVzc2FnZTtcclxuICAgICAgICBlbHNlIGRlbGV0ZSBlcnJvcnNbaW5wdXQubmFtZV07XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7Li4udGhpcy5zdGF0ZS5kYXRhfTtcclxuICAgICAgICBkYXRhW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YSAsIGVycm9ycyB9KVxyXG4gICAgfVxyXG4gICAgcmVuZGVySW5wdXQobmFtZSxsYWJlbCx0eXBlLGNsYXNzTmFtZSl7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhLCBlcnJvcnMgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIHJldHVybiA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfSBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YVtuYW1lXX0gXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2xhYmVsfSBcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9yc1tuYW1lXX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICB9XHJcbiAgICByZW5kZXJCdXR0b24obGFiZWwsY2xhc3NOYW1lKXtcclxuICAgICAgICByZXR1cm4gPGJ1dHRvbiBkaXNhYmxlZD17dGhpcy52YWxpZGF0ZSgpfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e2xhYmVsfTwvYnV0dG9uPlxyXG4gICAgfSAgICBcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IElucHV0ID0gKHtuYW1lLCBsYWJlbCwgdmFsdWUsIGNsYXNzTmFtZSwgdHlwZSwgZXJyb3IsIG9uQ2hhbmdlfSkgPT4ge1xyXG4gICAgXHJcbiAgICByZXR1cm4gKCBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiIGh0bWxGb3I9e25hbWV9PntsYWJlbH08L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Vycm9yPyAnaXNlcnJvciAnK2NsYXNzTmFtZSA6Y2xhc3NOYW1lfSBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPXt0eXBlfSBcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfSBcclxuICAgICAgICAgICAgICAgICAgICBpZD17bmFtZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIHtlcnJvciAmJiA8cCBjbGFzc05hbWU9XCJlcnJvcm1zZ1wiPntlcnJvci5yZXBsYWNlKC9cIi9nLCcnKX0uPC9wPn1cclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IElucHV0OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5jb25zdCBQYWdpbmF0aW9uID0gKHtpdGVtc0NvdW50ICwgcGFnZVNpemUgLCBjdXJyZW50UGFnZSwgb25QYWdlQ2hhbmdlICwgcHJldmlvdXNQYWdlICwgbmV4dFBhZ2V9KSA9PiB7XHJcbiAgICBjb25zdCBwYWdlc0NvdW50ID0gTWF0aC5jZWlsKGl0ZW1zQ291bnQgLyBwYWdlU2l6ZSk7XHJcbiAgICBpZihwYWdlc0NvdW50PT09MSkgcmV0dXJuIG51bGw7XHJcbiAgICBjb25zdCBwYWdlcyA9IF8ucmFuZ2UoMSwgcGFnZXNDb3VudCsxKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicGFnaW5hdGlvbi1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicGFnaW5hdGlvbi1saW5rXCIgb25DbGljaz17cHJldmlvdXNQYWdlfT4mIzYwOzwvbGk+XHJcbiAgICAgICAgICAgICAgICB7IHBhZ2VzLm1hcChwYWdlID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtwYWdlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgcGFnZSA9PT0gY3VycmVudFBhZ2U/IFwicGFnaW5hdGlvbi1saW5rIGlzLWN1cnJlbnRcIiA6IFwicGFnaW5hdGlvbi1saW5rXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uUGFnZUNoYW5nZShwYWdlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cGFnZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9ICAgICAgXHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicGFnaW5hdGlvbi1saW5rXCIgb25DbGljaz17bmV4dFBhZ2V9PiYjNjI7PC9saT4gICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgVXNlckxvYWRlciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGRzLXJpcHBsZVwiPjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48L2Rpdj4gICAgIFxyXG4gICAgICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBVc2VyTG9hZGVyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4vLi4vY29tbW9uL2Zvcm0nO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciAsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgSm9pIGZyb20gJ2pvaS1icm93c2VyJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNsYXNzIFBhc3NVcGRhdGUgZXh0ZW5kcyBGb3JtIHtcclxuICAgIHN0YXRlID0geyBcclxuICAgICAgICBkYXRhIDoge1xyXG4gICAgICAgICAgICBwYXNzd29yZCA6IFwiXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9ycyA6IHt9LCBcclxuICAgICAgICBsb2FkaW5nIDogZmFsc2UsXHJcbiAgICAgICAgYnV0dG9uVGV4dCA6IFwiVmFsaWRlclwiXHJcbiAgICB9XHJcbiAgICBzY2hlbWEgPSB7XHJcbiAgICAgICAgcGFzc3dvcmQgOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKS5taW4oOCkubWF4KDI1KSxcclxuICAgIH1cclxuICAgIGRvU3VibWl0KCl7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5kYXRhLnBhc3N3b3JkKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtwYXNzd29yZCA6IHRoaXMuc3RhdGUuZGF0YS5wYXNzd29yZCAsIGxvYWRpbmcgOiB0cnVlICwgYnV0dG9uVGV4dCA6ICdQYXRpZW50ZXouLi4uJ30pO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7IHVzZXIgOiB0aGlzLnByb3BzLmFsaWFzLCBwYXNzd29yZCA6IHRoaXMuc3RhdGUuZGF0YS5wYXNzd29yZH1cclxuICAgICAgICBheGlvcyh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6ICdhcGkvdXNlci91cGRhdGVQYXNzd29yZCcsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCd9XHJcbiAgICAgICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoJ01vdCBkZSBwYXNzZSBtb2RpZmnDqSBhdmVjIHN1Y2PDqHMgIScsIHRoaXMudG9hc3RvcHRpb25zKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCggKCkgPT4ge2RvY3VtZW50LmxvY2F0aW9uLmhyZWY9XCIvbG9naW5cIiB9LDIxMDApXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHsgXHJcbiAgICAgICAgY29uc3Qge2xvYWRpbmcsYnV0dG9uVGV4dH0gPSB0aGlzLnN0YXRlXHJcbiAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwibmV3cGFzcy1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJJbnB1dCgncGFzc3dvcmQnLCdOb3V2ZWF1IG1vdCBkZSBwYXNzZSAgOicsJ3RleHQnLCdpbnB1dCcpfVxyXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQnV0dG9uKGJ1dHRvblRleHQsJ2J1dHRvbiBpcy1zdWNjZXNzJyl9XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFBhc3NVcGRhdGUgOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4uL2NvbW1vbi9mb3JtJztcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgLCB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IEpvaSBmcm9tICdqb2ktYnJvd3Nlcic7XHJcbmltcG9ydCBQYXNzVXBkYXRlIGZyb20gJy4vcGFzc1VwZGF0ZSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jbGFzcyBVc2VyQ29uZmlybSBleHRlbmRzIEZvcm0ge1xyXG4gICAgc3RhdGUgPSB7IFxyXG4gICAgICAgIGRhdGEgOiB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lIDogXCJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgZXJyb3JzIDoge30sIFxyXG4gICAgYWxpYXMgOiBcIlwiLFxyXG4gICAgbG9hZGluZyA6IGZhbHNlLFxyXG4gICAgYnV0dG9uVGV4dCA6IFwiVmFsaWRlclwiLFxyXG4gICAgdXNlcnF1ZXJ5IDogdHJ1ZVxyXG4gICAgfVxyXG4gICAgc2NoZW1hID0ge1xyXG4gICAgICAgIHVzZXJuYW1lIDogSm9pLnN0cmluZygpLnJlcXVpcmVkKCkubWF4KDQwKSxcclxuICAgIH1cclxuICAgIGRvU3VibWl0KCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWxpYXMgOiB0aGlzLnN0YXRlLmRhdGEudXNlcm5hbWUgLCBidXR0b25UZXh0IDogJ1BhdGllbnRlei4uLid9KVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7IHVzZXJuYW1lIDogdGhpcy5zdGF0ZS5kYXRhLnVzZXJuYW1lfSAgXHJcbiAgICAgICAgYXhpb3Moe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiAnYXBpL2dldFVzZXJOYW1lJyxcclxuICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgaGVhZGVyczogeydYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J31cclxuICAgICAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgaWYocmVzLmRhdGEudXNlciA9PT0gdGhpcy5zdGF0ZS5kYXRhLnVzZXJuYW1lICl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt1c2VycXVlcnkgOiBmYWxzZX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGE6e3VzZXJuYW1lIDogJyd9LGVycm9ycyA6IHt1c2VybmFtZSA6ICcnfSAsIGJ1dHRvblRleHQgOiBcIlZhbGlkZXJcIn0pO1xyXG4gICAgICAgICAgICAgICAgdG9hc3QuZXJyb3IoJ0xlIG5vbSBkXFwndXRpbGlzYXRldXIgblxcJ2V4aXN0ZSBwYXMnLCB0aGlzLnRvYXN0b3B0aW9ucyk7ICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7IFxyXG4gICAgICAgIGNvbnN0IHsgbG9hZGluZyAsIHVzZXJxdWVyeSAsIGFsaWFzICwgYnV0dG9uVGV4dCB9ID0gdGhpcy5zdGF0ZVxyXG4gICAgICAgIHJldHVybiAoIFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyLz5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlJlbm91dmVsbGVtZW50IGRlIG1vdCBkZSBwYXNzZTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cIm5ld3Bhc3MtZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlcklucHV0KCd1c2VybmFtZScsJ1ZvdHJlIG5vbSBkXFwndXRpbGlzYXRldXIgIDonLCd0ZXh0JywnaW5wdXQnKX1cclxuICAgICAgICAgICAgICAgICAgICB7dXNlcnF1ZXJ5PyB0aGlzLnJlbmRlckJ1dHRvbihidXR0b25UZXh0LCdidXR0b24gaXMtc3VjY2VzcycpIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIHt1c2VycXVlcnk/IG51bGwgOiA8UGFzc1VwZGF0ZSBhbGlhcz17YWxpYXN9Lz59XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBVc2VyQ29uZmlybTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSm9pIGZyb20gJ2pvaS1icm93c2VyJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyB0b2FzdCwgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4vY29tbW9uL2Zvcm0nO1xyXG5pbXBvcnQgVXNlckxvYWRlciBmcm9tICcuL2NvbW1vbi91c2VybG9hZGVyJztcclxuXHJcbmNsYXNzIFNpZ251cCBleHRlbmRzIEZvcm0ge1xyXG4gICAgc3RhdGUgPSB7IFxyXG4gICAgICAgIGRhdGEgOiB7XHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZSA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZCA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBlbWFpbCA6IFwiXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBlcnJvcnMgOiB7fSxcclxuICAgICAgICBsb2FkaW5nIDogZmFsc2UsXHJcbiAgICAgICAgYnV0dG9uVGV4dCA6IFwiVmFsaWRlclwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgIHNjaGVtYSA9IHtcclxuICAgICAgICB1c2VybmFtZSA6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLm1heCg0MCksXHJcbiAgICAgICAgcGFzc3dvcmQgOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKS5taW4oOCkubWF4KDI1KSxcclxuICAgICAgICBlbWFpbCA6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLmVtYWlsKClcclxuICAgIH1cclxuICAgIGRvU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6dHJ1ZSAsIGJ1dHRvblRleHQ6IFwiQ2hhcmdlbWVudC4uLlwifSlcclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICB1c2VybmFtZSA6IHRoaXMuc3RhdGUuZGF0YS51c2VybmFtZSxcclxuICAgICAgICAgICAgcGFzc3dvcmQgOiB0aGlzLnN0YXRlLmRhdGEucGFzc3dvcmQsXHJcbiAgICAgICAgICAgIGVtYWlsIDogdGhpcy5zdGF0ZS5kYXRhLmVtYWlsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF4aW9zKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogJ2FwaS91c2VyL25ldycsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCd9ICAgICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzpmYWxzZSAsIGJ1dHRvblRleHQgOiBcIlZhbGlkZXJcIn0pXHJcbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICB0b2FzdC5zdWNjZXNzKHJlcy5kYXRhLm1lc3NhZ2UsIHRoaXMudG9hc3RvcHRpb25zKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvbG9naW4nKX0sMzUwMCl9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOmZhbHNlLCBidXR0b25UZXh0IDogXCJWYWxpZGVyXCJ9KVxyXG4gICAgICAgICAgICB0b2FzdC5lcnJvcignTGUgbm9tIGRcXCd1dGlsaXNhdGV1ciBlc3QgZMOpamEgdXRpbGlzw6knLCB0aGlzLnRvYXN0b3B0aW9ucyk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHsgXHJcbiAgICAgICAgY29uc3QgeyBsb2FkaW5nIH0gPSB0aGlzLnN0YXRlXHJcbiAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8VG9hc3RDb250YWluZXIvPlxyXG4gICAgICAgICAgICAgICAge2xvYWRpbmcgPT09IHRydWUgPyA8VXNlckxvYWRlci8+IDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5DcsOpZXIgdW4gbm91dmVhdSBjb21wdGU8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgyPlZvdXMgYXZleiBkw6lqYSB1biBjb21wdGU/IENsaXF1ZXogPExpbmsgdG89XCJsb2dpblwiPmljaTwvTGluaz4gcG91ciB2b3VzIGNvbm5lY3RlcjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInNpZ251cC1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVySW5wdXQoJ3VzZXJuYW1lJywnQ2hvaXNpciB1biBOb20gZFxcJ3V0aWxpc2F0ZXVyICA6JywndGV4dCcsJ2lucHV0Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVySW5wdXQoJ2VtYWlsJywnUmVuc2VpZ25lciB1bmUgYWRyZXNzZSBFbWFpbCAgOicsJ3RleHQnLCdpbnB1dCcpfVxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlcklucHV0KCdwYXNzd29yZCcsJ0Nyw6llciB1biBNb3QgZGUgcGFzc2UgIDonLCdwYXNzd29yZCcsJ2lucHV0Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBpcy1ncm91cGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckJ1dHRvbignVmFsaWRlcicsJ2J1dHRvbiBpcy1zdWNjZXNzJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2hvbWVcIiBjbGFzc05hbWU9XCJidXR0b24gaXMtaW5mb1wiPkFubnVsZXI8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBTaWdudXA7IiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYWdpbmF0ZShpdGVtcyxwYWdlTnVtYmVyLHBhZ2VTaXplKXtcclxuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSAocGFnZU51bWJlciAtIDEpICogcGFnZVNpemU7XHJcbiAgICByZXR1cm4gXyhpdGVtcykuc2xpY2Uoc3RhcnRJbmRleCkudGFrZShwYWdlU2l6ZSkudmFsdWUoKTtcclxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=