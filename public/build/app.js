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
      var currentPage = Number(this.props.location.search.slice(3));

      if (currentPage === 0) {
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_axios_index_js-node_modules_core-js_modules_es_array_concat_js-node_modu-62e08b"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0FjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQmV0cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Db21pbmdNYXRjaGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Mb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9NYXRjaGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1JhbmtpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvUnVsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvV2VsY29tZU1vZGFsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2NvbW1vbi9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvY29tbW9uL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvY29tbW9uL2lucHV0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2NvbW1vbi9wYWdpbmF0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2NvbW1vbi91c2VybG9hZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3Bhc3N1cGRhdGUvcGFzc1VwZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9wYXNzdXBkYXRlL3VzZXJDb25maXJtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3NpZ251cC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdXRpbGl0aWVzL3BhZ2luYXRlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcyJdLCJuYW1lcyI6WyJSZWFjdERPTSIsIkhvbWUiLCJNYXRjaGVzIiwiU2lnbnVwIiwiTG9naW4iLCJVc2VyQ29uZmlybSIsIlJhbmtpbmciLCJSdWxlcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJBY2NvdW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImxvYWRpbmciLCJpZCIsInVzZXJuYW1lIiwiYmV0cyIsIm1hdGNoZXMiLCJnZXRVc2VyQnlJZCIsImdldE1hdGNoZXMiLCJheGlvcyIsInRoZW4iLCJyZXMiLCJzZXRTdGF0ZSIsImRhdGEiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiTnVtYmVyIiwic3RhdGUiLCJtZXRob2QiLCJ1cmwiLCJoZWFkZXJzIiwidG9VcHBlckNhc2UiLCJsZW5ndGgiLCJtYXAiLCJiZXQiLCJtYXRjaF9pZCIsImJldF9kYXRlIiwiZGF0ZSIsInNsaWNlIiwic3BsaXQiLCJyZXZlcnNlIiwiam9pbiIsIm1hdGNoIiwiX2lkIiwiaG9tZXNjb3JlIiwiYXdheXNjb3JlIiwiaG9tZXRlYW0iLCJhd2F5dGVhbSIsIkNvbXBvbmVudCIsIkJldHMiLCJoaWRkZW4iLCJob21lcmVzdWx0IiwiYXdheXJlc3VsdCIsImVycm9ycyIsImJldHN0YXR1cyIsInRvYXN0IiwiY29ubmVjdGVkIiwidmFsaWRhdGlvbmRhdGUiLCJKb2kiLCJyZXF1aXJlZCIsIm9wdGlvbnMiLCJhYm9ydEVhcmx5Iiwic2NoZW1hIiwiZXJyb3IiLCJkZXRhaWxzIiwiaXRlbSIsInBhdGgiLCJtZXNzYWdlIiwiaW5wdXQiLCJjdXJyZW50VGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidmFsaWRhdGUiLCJkb1N1Ym1pdCIsIm1hdGNoaWQiLCJwcm9wcyIsImJldGlkIiwidXVpZHY0Iiwic3RhdHVzIiwicG9zaXRpb24iLCJhdXRvQ2xvc2UiLCJoaWRlUHJvZ3Jlc3NCYXIiLCJjbG9zZU9uQ2xpY2siLCJjbG9zZUJ1dHRvbiIsInNldFRpbWVvdXQiLCJsb2NhdGlvbiIsImhyZWYiLCJjdXJyZW50UGFnZSIsImdldEJldHMiLCJnZXRWYWxpZGF0aW9uRGF0ZSIsInNvdXJjZSIsImNhbmNlbCIsIm1hdGNoZGF0ZSIsInRvTG93ZXJDYXNlIiwiRGF0ZSIsInllYXIiLCJtb250aCIsImRheSIsIm5ld2RhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJtYXRjaHRpbWUiLCJ0aW1lIiwiZ2V0SG91cnMiLCJ1c2VyaWQiLCJjYW5jZWxUb2tlbiIsInRva2VuIiwiaW5wdXRlcnJvcnMiLCJncm91cCIsImhhbmRsZUNsaWNrIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlU3VibWl0IiwiQ29taW5nTWF0Y2hlcyIsIkZpbHRlciIsIml0ZW1zIiwib25JdGVtU2VsZWN0Iiwic2VsZWN0ZWRJdGVtIiwibGFiZWwiLCJIZWFkZXIiLCJtb2JpbGVtZW51IiwiaXNBY3RpdmUiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsIndpbmRvdyIsInJlcGxhY2UiLCJvbkxvZ291dCIsInNob3dtb2RhbCIsImdldFVzZXIiLCJzaG93TW9kYWwiLCJpIiwicHVzaCIsImhlaWdodCIsIndpZHRoIiwicGFzc3dvcmQiLCJlcnJvcnNjb3VudCIsImJ1dHRvblRleHQiLCJtYXgiLCJtaW4iLCJ0b2FzdG9wdGlvbnMiLCJyZW5kZXJJbnB1dCIsInJlbmRlckJ1dHRvbiIsIkZvcm0iLCJzZWxlY3RlZE1hdGNoZXMiLCJncm91cHMiLCJzZWxlY3RlZEdyb3VwIiwiZGF0ZXMiLCJzZWxlY3RlZERhdGUiLCJ0ZWFtcyIsInNlbGVjdGVkVGVhbSIsInBhZ2VTaXplIiwicGFnZSIsImZpbHRlciIsIm0iLCJ0ZWFtIiwibWF0Y2hMaXN0UGVyUGFnZSIsInBhZ2luYXRlIiwidG90YWxDb3VudCIsIk1hdGgiLCJjZWlsIiwic2VhcmNoIiwiaW5jbHVkZXMiLCJzaW5nbGVtYXRjaCIsImZpbmQiLCJzb3J0IiwiZ2V0UGFnZWREYXRhIiwiaGFuZGxlR3JvdXBGaWx0ZXIiLCJoYW5kbGVEYXRlRmlsdGVyIiwiaGFuZGxlVGVhbUZpbHRlciIsImhhbmRsZVBhZ2VDaGFuZ2UiLCJwcmV2aW91c1BhZ2UiLCJuZXh0UGFnZSIsInVzZXJzIiwiZ2V0VXNlcnMiLCJ1c2VybmFtZXMiLCJXZWxjb21lTW9kYWwiLCJtb2RhbHZpZXciLCJtb2RhbHNob3ciLCJMb2FkZXIiLCJvYmoiLCJlcnJvck1lc3NhZ2UiLCJ0eXBlIiwidmFsaWRhdGVQcm9wZXJ0eSIsImNsYXNzTmFtZSIsIklucHV0Iiwib25DaGFuZ2UiLCJQYWdpbmF0aW9uIiwiaXRlbXNDb3VudCIsIm9uUGFnZUNoYW5nZSIsInBhZ2VzQ291bnQiLCJwYWdlcyIsIl8iLCJVc2VyTG9hZGVyIiwiUGFzc1VwZGF0ZSIsInVzZXIiLCJhbGlhcyIsInVzZXJxdWVyeSIsImVtYWlsIiwiaGlzdG9yeSIsInBhZ2VOdW1iZXIiLCJzdGFydEluZGV4IiwidGFrZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsNkNBQUEsZUFFSSxpREFBQyw0REFBRCxxQkFDSSxpREFBQyx1REFBRCxPQURKLGVBRUksNEVBQ0ksaURBQUMscURBQUQscUJBQ0ksaURBQUMsb0RBQUQ7QUFBTyxNQUFJLEVBQUMsT0FBWjtBQUFvQixXQUFTLEVBQUVDLHFEQUFJQTtBQUFuQyxFQURKLGVBRUksaURBQUMsb0RBQUQ7QUFBTyxNQUFJLEVBQUMsVUFBWjtBQUF1QixXQUFTLEVBQUVDLHdEQUFPQTtBQUF6QyxFQUZKLGVBR0ksaURBQUMsb0RBQUQ7QUFBTyxNQUFJLEVBQUMsU0FBWjtBQUFzQixXQUFTLEVBQUVDLHVEQUFNQTtBQUF2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QTNCLG1CQUZKLENBSkosQ0FMSixDQURKO0FBaUJIOzs7O0VBN0RnQkMsa0Q7O0FBZ0VyQixpRUFBZTdJLE1BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RUE7QUFFTyxTQUFTMkosUUFBVCxDQUFrQnpDLEtBQWxCLEVBQXdCb0YsVUFBeEIsRUFBbUNqRCxRQUFuQyxFQUE0QztBQUMvQyxNQUFNa0QsVUFBVSxHQUFHLENBQUNELFVBQVUsR0FBRyxDQUFkLElBQW1CakQsUUFBdEM7QUFDQSxTQUFPeUMsNkNBQUMsQ0FBQzVFLEtBQUQsQ0FBRCxDQUFTN0UsS0FBVCxDQUFla0ssVUFBZixFQUEyQkMsSUFBM0IsQ0FBZ0NuRCxRQUFoQyxFQUEwQy9FLEtBQTFDLEVBQVA7QUFDSCxDOzs7Ozs7Ozs7Ozs7QUNMRCIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgU3dpdGNoLCBSb3V0ZSwgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZSc7XG5pbXBvcnQgTWF0Y2hlcyBmcm9tICcuL2NvbXBvbmVudHMvTWF0Y2hlcyc7XG5pbXBvcnQgU2lnbnVwIGZyb20gJy4vY29tcG9uZW50cy9zaWdudXAnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4vY29tcG9uZW50cy9Mb2dpbic7XG5pbXBvcnQgQWNjb3VudCBmcm9tICcuL2NvbXBvbmVudHMvQWNjb3VudCc7XG5pbXBvcnQgUmFua2luZyBmcm9tICcuL2NvbXBvbmVudHMvUmFua2luZyc7XG5pbXBvcnQgVXNlckNvbmZpcm0gZnJvbSAnLi9jb21wb25lbnRzL3Bhc3N1cGRhdGUvdXNlckNvbmZpcm0nO1xuaW1wb3J0IFJ1bGVzIGZyb20gJy4vY29tcG9uZW50cy9SdWxlcyc7XG4gICAgXG5SZWFjdERPTS5yZW5kZXIoXG5cbiAgICA8Um91dGVyPlxuICAgICAgICA8SGVhZGVyLz5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2hvbWVcIiBjb21wb25lbnQ9e0hvbWV9Lz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9tYXRjaGVzXCIgY29tcG9uZW50PXtNYXRjaGVzfS8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvc2lnbnVwXCIgY29tcG9uZW50PXtTaWdudXB9Lz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9sb2dpblwiIGNvbXBvbmVudD17TG9naW59Lz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9uZXdwYXNzd29yZC9cIiBjb21wb25lbnQ9e1VzZXJDb25maXJtfS8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmFua2luZ1wiIGNvbXBvbmVudD17UmFua2luZ30vPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3J1bGVzXCIgY29tcG9uZW50PXtSdWxlc30vPlxuICAgICAgICAgICAgICAgIHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29ubmVjdGVkJyk9PT0ndHJ1ZSc/XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2FjY291bnRcIiBjb21wb25lbnQ9e0FjY291bnR9Lz46XG4gICAgICAgICAgICAgICAgICAgIDxSZWRpcmVjdCB0bz1cIi9ob21lXCIgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZXhhY3QgPlxuICAgICAgICAgICAgICAgICAgICA8UmVkaXJlY3QgdG89XCIvaG9tZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgICAgICA8UmVkaXJlY3QgdG89XCIvaG9tZVwiLz5cbiAgICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICA8L21haW4+XG4gICAgICAgIFxuICAgIDwvUm91dGVyPiAgICBcbiAgICBcbiAgICAsZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuL2NvbW1vbi9Mb2FkZXInO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBSZWFjdFRvb2x0aXAgZnJvbSAncmVhY3QtdG9vbHRpcCc7XHJcblxyXG5jbGFzcyBBY2NvdW50IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0ZSA9IHsgXHJcbiAgICAgICAgbG9hZGluZyA6IHRydWUsXHJcbiAgICAgICAgaWQ6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZCcpLFxyXG4gICAgICAgIHVzZXJuYW1lIDogXCJcIixcclxuICAgICAgICBiZXRzIDogW10sXHJcbiAgICAgICAgbWF0Y2hlcyA6IFtdXHJcbiAgICB9O1xyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICB0aGlzLmdldFVzZXJCeUlkKCk7XHJcbiAgICAgICAgdGhpcy5nZXRNYXRjaGVzKCk7XHJcbiAgICB9O1xyXG4gICAgZ2V0TWF0Y2hlcygpeyAgICAgICAgXHJcbiAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgLmdldChgaHR0cHM6Ly9wb3J0Zm9saW8tNzIxNDctZGVmYXVsdC1ydGRiLmV1cm9wZS13ZXN0MS5maXJlYmFzZWRhdGFiYXNlLmFwcC9tYXRjaGVzLmpzb25gKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7dGhpcy5zZXRTdGF0ZSh7bWF0Y2hlcyA6IHJlcy5kYXRhfSl9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge2NvbnNvbGUubG9nKGVycil9KVxyXG4gICAgfTtcclxuICAgIGdldFVzZXJCeUlkKCl7XHJcbiAgICAgICAgY29uc3QgaWQgPSBOdW1iZXIodGhpcy5zdGF0ZS5pZCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHsgaWQgOiBpZH07XHJcbiAgICAgICAgYXhpb3Moe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiAnYXBpL3VzZXIvZ2V0VXNlckJ5SWQnLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7J1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnfSAgICAgXHJcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt1c2VybmFtZTpyZXMuZGF0YX0pXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXhpb3Moe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiAnYXBpL2dldGJldHNCeVVzZXInLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7J1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnfSAgICAgXHJcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtiZXRzIDogcmVzLmRhdGEgLCBsb2FkaW5nIDogZmFsc2V9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHsgXHJcbiAgICAgICAgY29uc3Qge3VzZXJuYW1lICwgbG9hZGluZyAsIGJldHMgLCBtYXRjaGVzfSA9IHRoaXMuc3RhdGVcclxuICAgICAgICByZXR1cm4gKCAgICAgXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZSBpcy0yXCI+TW9uIENvbXB0ZTwvaDI+XHJcbiAgICAgICAgICAgICAgICB7bG9hZGluZz8gPExvYWRlci8+OlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+TW9uIGVzcGFjZTwvcD4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGVtIGNsYXNzTmFtZT1cInVzZXJuYW1lXCI+e3VzZXJuYW1lLnRvVXBwZXJDYXNlKCl9PC9lbT5cclxuICAgICAgICAgICAgICAgICAgICA8aHI+PC9ocj5cclxuICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGl0bGUgaXMtNlwiPk1lcyBwcm9ub3MgOjwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2JldHMubGVuZ3RoID4gMCA/IFxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5EYXRlIGR1IHByb25vPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U3RhdHV0IGR1IHByb25vPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TWF0Y2g8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Nb24gcHJvbm9zdGljPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UsOpc3VsdGF0IGR1IG1hdGNoPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2JldHMubWFwKGJldCA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2JldC5tYXRjaF9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmV0LmJldF9kYXRlLmRhdGUuc2xpY2UoMCwxMCkuc3BsaXQoJy0nKS5yZXZlcnNlKCkuam9pbignLycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVzLm1hcChtYXRjaCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZigobWF0Y2guX2lkID09IGJldC5tYXRjaF9pZCAmJiAobWF0Y2guaG9tZXNjb3JlICYmIG1hdGNoLmF3YXlzY29yZSAhPT0gXCJcIikpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihiZXQuaG9tZXNjb3JlID4gYmV0LmF3YXlzY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1hdGNoLmhvbWVzY29yZSA+IG1hdGNoLmF3YXlzY29yZSAmJiBtYXRjaC5ob21lc2NvcmUgPT0gYmV0LmhvbWVzY29yZSAmJiBtYXRjaC5hd2F5c2NvcmUgPT0gYmV0LmF3YXlzY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRkIGtleT17bWF0Y2guX2lkfT5QYXJpIEdhZ27DqSAhIDMgcG9pbnRzITwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihtYXRjaC5ob21lc2NvcmUgPiBtYXRjaC5hd2F5c2NvcmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx0ZCBrZXk9e21hdGNoLl9pZH0+UGFyaSBHYWduw6kgISAyIHBvaW50cyE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRkIGtleT17bWF0Y2guX2lkfT5QYXJpIHBlcmR1PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihiZXQuaG9tZXNjb3JlIDwgYmV0LmF3YXlzY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1hdGNoLmhvbWVzY29yZSA8IG1hdGNoLmF3YXlzY29yZSAmJiBtYXRjaC5ob21lc2NvcmUgPT0gYmV0LmhvbWVzY29yZSAmJiBtYXRjaC5hd2F5c2NvcmUgPT0gYmV0LmF3YXlzY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRkIGtleT17bWF0Y2guX2lkfT5QYXJpIEdhZ27DqSAhIDMgcG9pbnRzITwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1hdGNoLmhvbWVzY29yZSA8IG1hdGNoLmF3YXlzY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRkIGtleT17bWF0Y2guX2lkfT5QYXJpIEdhZ27DqSAhIDIgcG9pbnRzITwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8dGQga2V5PXttYXRjaC5faWR9PlBhcmkgcGVyZHU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYmV0LmhvbWVzY29yZSA9PT0gYmV0LmF3YXlzY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1hdGNoLmhvbWVzY29yZSA9PT0gbWF0Y2guYXdheXNjb3JlICYmIG1hdGNoLmhvbWVzY29yZSA9PSBiZXQuaG9tZXNjb3JlICYmIG1hdGNoLmF3YXlzY29yZSA9PSBiZXQuYXdheXNjb3JlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8dGQga2V5PXttYXRjaC5faWR9PlBhcmkgR2FnbsOpICEgMyBwb2ludHMhPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihtYXRjaC5ob21lc2NvcmUgPT09IG1hdGNoLmF3YXlzY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRkIGtleT17bWF0Y2guX2lkfT5QYXJpIEdhZ27DqSAhIDIgcG9pbnRzITwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8dGQga2V5PXttYXRjaC5faWR9PlBhcmkgcGVyZHU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKChtYXRjaC5faWQgPT0gYmV0Lm1hdGNoX2lkICYmIG1hdGNoLmhvbWVzY29yZT09PSBcIlwiKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXttYXRjaC5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGlwPVwiVm9pciBvdSBtb2RpZmllciBsZSBwcm9ub3N0aWNcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgL21hdGNoZXM/bWF0Y2g9JHtiZXQubWF0Y2hfaWR9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RUb29sdGlwIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJsaWdodFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlciBib3JkZXJDb2xvcj1cIiMzMzg0QThcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I9XCIjMzM4NEE4XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dDb2xvcj1cIiMzMzg0QThcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbiBjb3Vyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltYWdlcy8ke2JldC5ob21ldGVhbX0uc3ZnYH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI1cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG9tZWltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmV0LmhvbWV0ZWFtfSAtIHtiZXQuYXdheXRlYW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltYWdlcy8ke2JldC5hd2F5dGVhbX0uc3ZnYH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI1cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXdheWltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2JldC5ob21lc2NvcmV9IC0ge2JldC5hd2F5c2NvcmV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWF0Y2hlcy5tYXAobWF0Y2ggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoLmhvbWVzY29yZSAmJiBtYXRjaC5faWQgPT09IGJldC5tYXRjaF9pZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXttYXRjaC5faWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttYXRjaC5ob21lc2NvcmV9IC0ge21hdGNoLmF3YXlzY29yZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihtYXRjaC5ob21lc2NvcmUgPT09ICcnICYmIG1hdGNoLl9pZCA9PT0gYmV0Lm1hdGNoX2lkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRkIGtleT17bWF0Y2guX2lkfT5NYXRjaCDDoCB2ZW5pcjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PiA6XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Vm91cyBuJ2F2ZXogcGFzIGVuY29yZSBwbGFjw6kgZGUgcHJvbm9zdGljcy48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlJldmVuZXogdmVycyBsZXMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9tYXRjaGVzXCI+IG1hdGNoZXMgPC9MaW5rPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvdXIgY29tbWVuY2VyIMOgIHByb25vc3RpcXVlci5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50OyIsImltcG9ydCBSZWFjdCAsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuL2NvbW1vbi9Mb2FkZXInO1xyXG5pbXBvcnQgSm9pIGZyb20gJ2pvaS1icm93c2VyJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XHJcbmltcG9ydCB7IHRvYXN0LCBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IFJlYWN0VG9vbHRpcCBmcm9tICdyZWFjdC10b29sdGlwJztcclxuXHJcbmNsYXNzIEJldHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgaGlkZGVuIDogdHJ1ZSxcclxuICAgICAgICBkYXRhIDoge1xyXG4gICAgICAgICAgICBob21lcmVzdWx0IDogXCIgXCIsXHJcbiAgICAgICAgICAgIGF3YXlyZXN1bHQgOiBcIiBcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3JzOiB7fSxcclxuICAgICAgICBiZXRzdGF0dXMgOiBmYWxzZSxcclxuICAgICAgICB0b2FzdCA6IGZhbHNlLCBcclxuICAgICAgICBsb2FkaW5nIDogdHJ1ZSxcclxuICAgICAgICBjb25uZWN0ZWQgOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29ubmVjdGVkJyksXHJcbiAgICAgICAgdmFsaWRhdGlvbmRhdGUgOiB0cnVlXHJcbiAgICB9O1xyXG4gICAgc291cmNlID0gYXhpb3MuQ2FuY2VsVG9rZW4uc291cmNlKCk7XHJcbiAgICBzY2hlbWEgPSB7XHJcbiAgICAgICAgaG9tZXJlc3VsdCA6IEpvaS5udW1iZXIoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgIGF3YXlyZXN1bHQgOiBKb2kubnVtYmVyKCkucmVxdWlyZWQoKVxyXG4gICAgfTtcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgdGhpcy5nZXRCZXRzKCk7XHJcbiAgICAgICAgdGhpcy5nZXRWYWxpZGF0aW9uRGF0ZSgpXHJcbiAgICB9O1xyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc291cmNlKSB7XHJcbiAgICAgICAgICB0aGlzLnNvdXJjZS5jYW5jZWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRWYWxpZGF0aW9uRGF0ZSgpe1xyXG4gICAgICAgIGNvbnN0IG1hdGNoZGF0ZSA9IHRoaXMucHJvcHMubWF0Y2guZGF0ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ2xvbmcnICwgZGF5OiBcIm51bWVyaWNcIn07XHJcbiAgICAgICAgY29uc3QgbmV3ZGF0ZSA9IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCdmci1GUicsb3B0aW9ucyk7XHJcbiAgICAgICAgY29uc3QgbWF0Y2h0aW1lID0gTnVtYmVyKHRoaXMucHJvcHMubWF0Y2gudGltZS5zcGxpdCgnaCcpLmpvaW4oJycpKVxyXG4gICAgICAgIGNvbnN0IHRpbWUgPSBkYXRlLmdldEhvdXJzKClcclxuICAgICAgICBpZihtYXRjaGRhdGUgPT09IG5ld2RhdGUgJiYgbWF0Y2h0aW1lIC0gdGltZSA8PSAxKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGlvbmRhdGUgOiBmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0QmV0cygpe1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNvbm5lY3RlZCA9PT0gJ3RydWUnKXtcclxuICAgICAgICBjb25zdCBkYXRhID0geyB1c2VyaWQgOiBOdW1iZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkJykpICwgbWF0Y2hpZCA6IHRoaXMucHJvcHMubWF0Y2guX2lkfTtcclxuICAgICAgICBheGlvcyh7IG1ldGhvZCA6ICdQT1NUJyAsIHVybDogJ2FwaS9nZXRiZXRzJywgZGF0YSA6IGRhdGEgLCBoZWFkZXJzOiB7J1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnfSAsIGNhbmNlbFRva2VuOiB0aGlzLnNvdXJjZS50b2tlblxyXG4gICAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuaG9tZXNjb3JlKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhIDogeyBob21lcmVzdWx0IDogcmVzLmRhdGEuaG9tZXNjb3JlICwgYXdheXJlc3VsdCA6IHJlcy5kYXRhLmF3YXlzY29yZSB9LCBsb2FkaW5nIDogZmFsc2UgLCBiZXRzdGF0dXMgOiB0cnVlfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhIDogeyBob21lcmVzdWx0IDogJycgLCBhd2F5cmVzdWx0IDogJycgfSwgbG9hZGluZyA6IGZhbHNlfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nIDogZmFsc2UgfSlcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdmFsaWRhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHthYm9ydEVhcmx5IDogZmFsc2V9O1xyXG4gICAgICAgIGNvbnN0IHtlcnJvcn0gPSBKb2kudmFsaWRhdGUodGhpcy5zdGF0ZS5kYXRhLCB0aGlzLnNjaGVtYSwgb3B0aW9ucyk7XHJcbiAgICAgICAgaWYgKCFlcnJvcikgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgY29uc3QgZXJyb3JzID0ge307XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBlcnJvci5kZXRhaWxzKVxyXG4gICAgICAgICAgICBlcnJvcnNbaXRlbS5wYXRoWzBdXSA9IGl0ZW0ubWVzc2FnZTsgXHJcbiAgICAgICAgcmV0dXJuIGVycm9ycztcclxuICAgIH07XHJcbiAgICBoYW5kbGVDaGFuZ2UgPSAoe2N1cnJlbnRUYXJnZXQgOiBpbnB1dH0pID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gey4uLnRoaXMuc3RhdGUuZGF0YX07XHJcbiAgICAgICAgZGF0YVtpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGF9KTtcclxuICAgIH07XHJcbiAgICBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtoaWRkZW46ZmFsc2V9KVxyXG4gICAgfTtcclxuICAgIGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyBcclxuICAgICAgICBjb25zdCBlcnJvcnMgPSB0aGlzLnZhbGlkYXRlKCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9ycyA6IGVycm9ycyB8fCB7fX0pO1xyXG4gICAgICAgIGlmIChlcnJvcnMpIHJldHVybjsgIFxyXG4gICAgICAgIHRoaXMuZG9TdWJtaXQoKTtcclxuICAgIH07XHJcbiAgICBkb1N1Ym1pdCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICBob21lc2NvcmUgOiB0aGlzLnN0YXRlLmRhdGEuaG9tZXJlc3VsdCxcclxuICAgICAgICAgICAgYXdheXNjb3JlIDogdGhpcy5zdGF0ZS5kYXRhLmF3YXlyZXN1bHQsXHJcbiAgICAgICAgICAgIG1hdGNoaWQgOiB0aGlzLnByb3BzLm1hdGNoLl9pZCxcclxuICAgICAgICAgICAgYmV0aWQgOiB1dWlkdjQoKSxcclxuICAgICAgICAgICAgaG9tZXRlYW0gOiB0aGlzLnByb3BzLm1hdGNoLmhvbWV0ZWFtLFxyXG4gICAgICAgICAgICBhd2F5dGVhbSA6ICB0aGlzLnByb3BzLm1hdGNoLmF3YXl0ZWFtXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5iZXRzdGF0dXMgPT09IGZhbHNlKXtcclxuICAgICAgICAgICAgYXhpb3MoXHJcbiAgICAgICAgICAgICAgICB7bWV0aG9kOiAnUE9TVCcsIHVybDogJ2FwaS9wb3N0YmV0cycsIGRhdGE6IGRhdGEsIGhlYWRlcnM6IHsnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCd9fSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRkZW4gOiB0cnVlICwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob21lcmVzdWx0IDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YXlyZXN1bHQgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZXRzdGF0dXMgOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdCA6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3Quc3VjY2VzcygnUHJvbm9zdGljIHZhbGlkw6khJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0Nsb3NlOiAxMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgZG9jdW1lbnQubG9jYXRpb24uaHJlZj1gL21hdGNoZXM/cD0ke3RoaXMucHJvcHMuY3VycmVudFBhZ2V9YCB9LDEyMDApO1xyXG4gICAgICAgICAgICAgICAgfTsgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdC5lcnJvcignVmV1aWxsZXogcsOpZXNzYXllcicsIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICBhdXRvQ2xvc2U6IDMwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VCdXR0b246IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5zZXRTdGF0ZSh7dG9hc3QgOiBmYWxzZX0pfSw2MDAwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUuYmV0c3RhdHVzID09PSB0cnVlKXtcclxuICAgICAgICAgICAgYXhpb3Moe21ldGhvZDonUE9TVCcsdXJsOidhcGkvdXBkYXRlYmV0cycsIGRhdGE6ZGF0YSwgaGVhZGVyczogeydYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J319KVxyXG4gICAgICAgICAgICAudGhlbigocmVzKT0+IHtpZiAocmVzLnN0YXR1cyA9PT0gMjAwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBcclxuICAgICAgICAgICAgICAgICAgICBoaWRkZW4gOiB0cnVlICwgXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG9tZXJlc3VsdCA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YXlyZXN1bHQgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgICAgICAgICAgYmV0c3RhdHVzIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdCA6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pOyBcclxuICAgICAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoJ1Byb25vc3RpYyBtb2RpZmnDqSEnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0Nsb3NlOiAxMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IGRvY3VtZW50LmxvY2F0aW9uLmhyZWY9YC9tYXRjaGVzP3A9JHt0aGlzLnByb3BzLmN1cnJlbnRQYWdlfWAgfSwxMjAwKTtcclxuICAgICAgICAgICAgfX0pO1xyXG4gICAgICAgIH07ICAgICAgIFxyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7aGlkZGVuLCBkYXRhICwgZXJyb3JzICwgaW5wdXRlcnJvcnMgLCBiZXRzdGF0dXMgLCB0b2FzdCAsIGNvbm5lY3RlZCAsIGxvYWRpbmcgLCB2YWxpZGF0aW9uZGF0ZX0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHttYXRjaH0gPSB0aGlzLnByb3BzO1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XHJcbiAgICAgICAgICAgICAgICB7dG9hc3Q/IDxUb2FzdENvbnRhaW5lci8+IDogbnVsbH0gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8aDM+e21hdGNoLmRhdGV9IC0ge21hdGNoLnRpbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgIDxoND5Hcm91cGUge21hdGNoLmdyb3VwfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8cD57bWF0Y2gubG9jYXRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgPHByZSBjbGFzc05hbWU9XCJtYXRjaGRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImhvbWV0ZWFtaW1nXCIgc3JjPXtgL2ltYWdlcy8ke21hdGNoLmhvbWV0ZWFtfS5zdmdgfS8+XHJcbiAgICAgICAgICAgICAgICAgICAge21hdGNoLmhvbWV0ZWFtfSB7bWF0Y2guaG9tZXNjb3JlfSAtIHttYXRjaC5hd2F5c2NvcmV9IHttYXRjaC5hd2F5dGVhbX1cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImF3YXl0ZWFtaW1nXCIgc3JjPXtgL2ltYWdlcy8ke21hdGNoLmF3YXl0ZWFtfS5zdmdgfS8+XHJcbiAgICAgICAgICAgICAgICA8L3ByZT5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7bG9hZGluZyA9PT0gdHJ1ZSA/IDxMb2FkZXIvPiA6IFxyXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30gY2xhc3NOYW1lPXtoaWRkZW4gPyAnYnV0dG9uIGJldGJ1dHRvbiBpcy1wcmltYXJ5JyA6ICdoaWRkZW4nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2JldHN0YXR1cz8gJ1ZvaXIgdm90cmUgcHJvbm9zdGljJyA6IFwiUGFyaWVyIHN1ciBjZSBtYXRjaFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtoaWRkZW4gPyAnaGlkZGVuJyA6ICdiZXRnYW1lcyd9PlxyXG4gICAgICAgICAgICAgICAge2Nvbm5lY3RlZCA9PT0gXCJ0cnVlXCIgPyAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxlbT57bWF0Y2guaG9tZXRlYW0rXCIgXCJ9PC9lbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb25kYXRlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImhvbWVyZXN1bHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEuaG9tZXJlc3VsdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzY29yZSBob21lcmVzdWx0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnNbXCJob21lcmVzdWx0XCJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGI+e2RhdGEuaG9tZXJlc3VsdH08L2I+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+IC0gPC9iPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb25kYXRlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImF3YXlyZXN1bHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEuYXdheXJlc3VsdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2lucHV0ZXJyb3JzPyAnaW5wdXRlcnJvcnMnIDogJ3Njb3JlJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPiB7ZGF0YS5hd2F5cmVzdWx0fTwvYj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxlbT4ge21hdGNoLmF3YXl0ZWFtfSA8L2VtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dmFsaWRhdGlvbmRhdGUgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVTdWJtaXR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMudmFsaWRhdGUoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPS1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gOm51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8cD5Wb3VzIGRldmV6IMOqdHJlIGNvbm5lY3TDqSBwb3VyIHBsYWNlciB1biBwcm9ub3N0aWMuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IEJldHM7IiwiaW1wb3J0IHsgbWF0Y2hlcyB9IGZyb20gJ2xvZGFzaC1lcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBDb21pbmdNYXRjaGVzID0gKHtkYXRhfSkgPT4ge1xyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21pbmdtYXRjaGVzXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZSBpcy0zXCI+UHJvY2hhaW5zIG1hdGNoZXM8L2gzPlxyXG4gICAgICAgICAgICB7ZGF0YS5tYXAobWF0Y2ggPT4gXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIiBrZXk9e21hdGNoLl9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGI+e21hdGNoLmRhdGV9PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPnttYXRjaC5ob21ldGVhbX0gLSB7bWF0Y2guYXdheXRlYW19PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBDb21pbmdNYXRjaGVzOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBGaWx0ZXIgPSAoe2l0ZW1zLG9uSXRlbVNlbGVjdCxzZWxlY3RlZEl0ZW0sbGFiZWx9KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi10cmlnZ2VyXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5GaWx0cmVyIHBhciB7bGFiZWwudG9Mb3dlckNhc2UoKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGlzLXNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2FuZ2xlZG93bi5zdmdcIi8+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9eycnID09PSBzZWxlY3RlZEl0ZW0gPyAnc2VsZWN0aW9uIGlzLXNlbGVjdGVkJyA6ICdzZWxlY3Rpb24nfSBvbkNsaWNrPXsgKCkgPT4gb25JdGVtU2VsZWN0KCdBbGwnKX0+VG91czwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1zLm1hcChpdGVtID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aXRlbSA9PT0gc2VsZWN0ZWRJdGVtID8gJ3NlbGVjdGlvbiBpcy1zZWxlY3RlZCcgOiAnc2VsZWN0aW9uJ30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gb25JdGVtU2VsZWN0KGl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWwgIT09ICdHcm91cGUgJz8gaXRlbSA6IGxhYmVsICsgaXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICl9ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXI7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgY29ubmVjdGVkIDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Nvbm5lY3RlZCcpLFxyXG4gICAgICAgIG1vYmlsZW1lbnUgOiBmYWxzZSxcclxuICAgICAgICBpc0FjdGl2ZSA6IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2dvdXQoKXtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29ubmVjdGVkJywnZmFsc2UnKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnaWQnKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnL2FwaS9sb2dvdXQnKTtcclxuICAgIH07XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7Y29ubmVjdGVkICwgaXNBY3RpdmV9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICByZXR1cm4gKCBcclxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvaG9tZVwiPjxpbWcgc3JjPVwiL2ltYWdlcy9ldXJvMjAyMC1sb2dvLnN2Z1wiIHdpZHRoPVwiNzBcIj48L2ltZz48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHt0aGlzLnNldFN0YXRlKHtpc0FjdGl2ZSA6ICFpc0FjdGl2ZX0pfX0gY2xhc3NOYW1lPXtpc0FjdGl2ZT9cIm5hdmJhci1idXJnZXIgaXMtYWN0aXZlXCI6XCJuYXZiYXItYnVyZ2VyXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aXNBY3RpdmU/XCJuYXZiYXItbWVudSBpcy1hY3RpdmVcIjpcIm5hdmJhci1tZW51XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9ydWxlc1wiIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCI+UsOoZ2xlczwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW0gaGFzLWRyb3Bkb3duIGlzLWhvdmVyYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5NYXRjaGVzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvbWF0Y2hlc1wiIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCI+UGhhc2UgZGUgR3JvdXBlPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPExpbmsgdG89XCIvI1wiIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCI+UGhhc2UgZmluYWxlPC9MaW5rPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvcmFua2luZ1wiIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCI+Q2xhc3NlbWVudDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Nvbm5lY3RlZD09PSd0cnVlJz9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9hY2NvdW50XCIgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXByaW1hcnlcIj5Nb24gY29tcHRlPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uTG9nb3V0fSAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXdhcm5pbmdcIj5Ew6ljb25uZWN0aW9uPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvbG9naW5cIiBjbGFzc05hbWU9XCJidXR0b24gaXMtcHJpbWFyeVwiPkNvbm5lY3Rpb248L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9zaWdudXBcIiBjbGFzc05hbWU9XCJidXR0b24gaXMtaW5mb1wiPjxzdHJvbmc+Q3LDqWVyIHVuIGNvbXB0ZTwvc3Ryb25nPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBDb21pbmdNYXRjaGVzIGZyb20gJy4vQ29taW5nTWF0Y2hlcyc7XHJcbmltcG9ydCB7IFR3aXR0ZXJUaW1lbGluZUVtYmVkIH0gZnJvbSAncmVhY3QtdHdpdHRlci1lbWJlZCc7XHJcbmltcG9ydCBXZWxjb21lTW9kYWwgZnJvbSAnLi9XZWxjb21lTW9kYWwnO1xyXG5cclxuY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhdGUgPSB7IFxyXG4gICAgICAgIG1hdGNoZXMgOiBbXSxcclxuICAgICAgICBzaG93bW9kYWwgOiBmYWxzZVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIHRoaXMuZ2V0TWF0Y2hlcygpO1xyXG4gICAgICAgIGNvbnN0IGNvbm5lY3RlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb25uZWN0ZWQnKTtcclxuICAgICAgICBpZiAoY29ubmVjdGVkID09PSAndHJ1ZScpIHRoaXMuZ2V0VXNlcigpO1xyXG4gICAgICAgIHRoaXMuc2hvd01vZGFsKClcclxuICAgICAgICBcclxuICAgIH07XHJcbiAgICBzaG93TW9kYWwoKXtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd21vZGFsIDogdHJ1ZX0pXHJcbiAgICAgICAgfSwgMzAwMCk7XHJcbiAgICB9XHJcbiAgICBnZXRVc2VyKCl7XHJcbiAgICAgICAgYXhpb3MuZ2V0KCdhcGkvZ2V0VXNlcklkJykudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWQnLHJlcy5kYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBnZXRNYXRjaGVzKCl7XHJcbiAgICAgICAgYXhpb3MuZ2V0KGBodHRwczovL3BvcnRmb2xpby03MjE0Ny1kZWZhdWx0LXJ0ZGIuZXVyb3BlLXdlc3QxLmZpcmViYXNlZGF0YWJhc2UuYXBwL21hdGNoZXMuanNvbmApLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgbGV0IG1hdGNoZXMgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgcmVzLmRhdGEubGVuZ3RoIDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YVtpXS5ob21lc2NvcmUgPT09IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoZXMucHVzaChyZXMuZGF0YVtpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWF0Y2hlcyA6IG1hdGNoZXMuc2xpY2UoMCw0KX0pIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge21hdGNoZXMgLCBzaG93bW9kYWx9ID0gdGhpcy5zdGF0ZVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImhlYWRlcmltZ1wiPlxyXG4gICAgICAgICAgICAgICAge3Nob3dtb2RhbD88V2VsY29tZU1vZGFsLz46bnVsbH1cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9ldXJvMjAyMC1sb2dvLnN2Z1wiLz4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8Q29taW5nTWF0Y2hlcyBkYXRhPXttYXRjaGVzfS8+XHJcbiAgICAgICAgICAgICAgICA8VHdpdHRlclRpbWVsaW5lRW1iZWRcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VUeXBlPVwicHJvZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2NyZWVuTmFtZT1cImVxdWlwZWRlZnJhbmNlXCJcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt7aGVpZ2h0OiA1MDAgLCB3aWR0aCA6IDMwMH19XHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZz1cImZyXCJcclxuICAgICAgICAgICAgICAgIC8+ICAgICBcclxuICAgICAgICAgICAgPC9zZWN0aW9uPiAgICAgICAgICAgXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiAgICBcclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSm9pIGZyb20gJ2pvaS1icm93c2VyJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyB0b2FzdCwgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4vY29tbW9uL2Zvcm0nO1xyXG5pbXBvcnQgVXNlckxvYWRlciBmcm9tICcuL2NvbW1vbi91c2VybG9hZGVyJztcclxuXHJcbmNsYXNzIFNpZ251cCBleHRlbmRzIEZvcm0ge1xyXG4gICAgc3RhdGUgPSB7IFxyXG4gICAgICAgIGRhdGEgOiB7XHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZSA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZCA6IFwiXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3JzIDoge30sXHJcbiAgICAgICAgZXJyb3JzY291bnQgOiAwLFxyXG4gICAgICAgIGxvYWRpbmcgOiBmYWxzZSxcclxuICAgICAgICBidXR0b25UZXh0IDogXCJWYWxpZGVyXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICBzY2hlbWEgPSB7XHJcbiAgICAgICAgdXNlcm5hbWUgOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKS5tYXgoNDApLFxyXG4gICAgICAgIHBhc3N3b3JkIDogSm9pLnN0cmluZygpLnJlcXVpcmVkKCkubWluKDgpLm1heCgyNSlcclxuICAgIH1cclxuICAgIGRvU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmcgOiB0cnVlICwgYnV0dG9uVGV4dCA6IFwiQ2hhcmdlbWVudC4uLlwifSlcclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICB1c2VybmFtZSA6IHRoaXMuc3RhdGUuZGF0YS51c2VybmFtZSxcclxuICAgICAgICAgICAgcGFzc3dvcmQgOiB0aGlzLnN0YXRlLmRhdGEucGFzc3dvcmQsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF4aW9zKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogJ2FwaS9sb2dpbicsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCd9ICAgICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzpmYWxzZSAsIGJ1dHRvblRleHQgOiBcIlZhbGlkZXJcIn0pXHJcbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApe1xyXG4gICAgICAgICAgICB0b2FzdC5zdWNjZXNzKHJlcy5kYXRhLm1lc3NhZ2UsIHRoaXMudG9hc3RvcHRpb25zKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Nvbm5lY3RlZCcsJ3RydWUnKVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7ZG9jdW1lbnQubG9jYXRpb24uaHJlZj1cIi9ob21lXCIgfSwyMTAwKSBcclxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzpmYWxzZSAsIGJ1dHRvblRleHQgOiBcIkNoYXJnZW1lbnQuLi5cIn0pXHJcbiAgICAgICAgICAgIHRvYXN0LmVycm9yKCdWw6lyaWZpZXogdm9zIGlkZW50aWZpYW50cycsIHRoaXMudG9hc3RvcHRpb25zKTtcclxuICAgICAgICAgICAgbGV0IGVycm9yc2NvdW50ID0gdGhpcy5zdGF0ZS5lcnJvcnNjb3VudDtcclxuICAgICAgICAgICAgZXJyb3JzY291bnQrK1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcnNjb3VudDplcnJvcnNjb3VudCAsIGRhdGEgOiB7IHVzZXJuYW1lIDogXCJcIiAsIHBhc3N3b3JkIDogXCJcIn0gLCBidXR0b25UZXh0IDpcIlZhbGlkZXJcIn0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHsgXHJcbiAgICAgICAgY29uc3Qge2Vycm9yc2NvdW50LCBsb2FkaW5nICwgYnV0dG9uVGV4dCB9ID0gdGhpcy5zdGF0ZVxyXG4gICAgICAgIHJldHVybiAoIFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyLz5cclxuICAgICAgICAgICAgICAgIHtsb2FkaW5nID09PSB0cnVlID8gPFVzZXJMb2FkZXIvPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5Db25uZWN0aW9uPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMj5QYXMgZGUgY29tcHRlPyBDbGlxdWV6IDxMaW5rIHRvPVwic2lnbnVwXCI+aWNpPC9MaW5rPiBwb3VyIGVuIGNyw6llciB1bi48L2gyPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJzaWdudXAtZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlcklucHV0KCd1c2VybmFtZScsJ05vbSBkXFwndXRpbGlzYXRldXIgOicsJ3RleHQnLCdpbnB1dCcpfVxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlcklucHV0KCdwYXNzd29yZCcsJ01vdCBkZSBwYXNzZSA6JywncGFzc3dvcmQnLCdpbnB1dCcpfVxyXG4gICAgICAgICAgICAgICAgICAgIHtlcnJvcnNjb3VudCA+PSAzID8gPGVtPlZvdXMgYXZleiBvdWJsacOpIHZvdHJlIG1vdCBkZSBwYXNzZSA/IENsaXF1ZXogPExpbmsgdG89XCIvbmV3cGFzc3dvcmRcIj5pY2k8L0xpbms+IHBvdXIgbGUgcsOpaW5pdGxhaWlzZXI8L2VtPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBpcy1ncm91cGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckJ1dHRvbihidXR0b25UZXh0LCdidXR0b24gaXMtc3VjY2VzcycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9ob21lXCIgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWluZm9cIj5Bbm51bGVyPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XHJcbmltcG9ydCBCZXRzIGZyb20gJy4vQmV0cyc7XHJcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuL2NvbW1vbi9wYWdpbmF0aW9uJztcclxuaW1wb3J0IHsgcGFnaW5hdGUgfSBmcm9tICcuLi91dGlsaXRpZXMvcGFnaW5hdGUnO1xyXG5cclxuY2xhc3MgTWF0Y2hlcyBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhdGUgPSB7IFxyXG4gICAgICAgIG1hdGNoZXMgOiBbXSxcclxuICAgICAgICBzZWxlY3RlZE1hdGNoZXMgOiBbXSxcclxuICAgICAgICBncm91cHM6IFtdLCBcclxuICAgICAgICBzZWxlY3RlZEdyb3VwIDogJycsXHJcbiAgICAgICAgZGF0ZXMgOiBbXSAsXHJcbiAgICAgICAgc2VsZWN0ZWREYXRlIDogJycsXHJcbiAgICAgICAgdGVhbXMgOiBbXSxcclxuICAgICAgICBzZWxlY3RlZFRlYW0gOiAnJyxcclxuICAgICAgICBjdXJyZW50UGFnZSA6IDEgLFxyXG4gICAgICAgIHBhZ2VTaXplIDogNixcclxuICAgICAgICBkYXRlIDogbmV3IERhdGUoJ2QtTS1ZJylcclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgdGhpcy5nZXRNYXRjaGVzKCk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFBhZ2UgPSBOdW1iZXIodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2guc2xpY2UoMykpXHJcbiAgICAgICAgaWYoY3VycmVudFBhZ2UgPT09IDApe1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFBhZ2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRNYXRjaGVzKCkgeyAgICAgICAgXHJcbiAgICAgICAgYXhpb3MuZ2V0KGBodHRwczovL3BvcnRmb2xpby03MjE0Ny1kZWZhdWx0LXJ0ZGIuZXVyb3BlLXdlc3QxLmZpcmViYXNlZGF0YWJhc2UuYXBwL21hdGNoZXMuanNvbmApLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbWF0Y2hpZCA9IE51bWJlcih0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaC5zbGljZSg3KSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSByZXMuZGF0YS5zbGljZSgwLDM2KTtcclxuICAgICAgICAgICAgY29uc3QgZGF0ZXMgPSBbXTtcclxuICAgICAgICAgICAgY29uc3QgdGVhbXMgPSBbXTtcclxuICAgICAgICAgICAgY29uc3QgZ3JvdXBzID0gW107XHJcbiAgICAgICAgICAgIG1hdGNoZXMubWFwKCBtID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghZGF0ZXMuaW5jbHVkZXMobS5kYXRlKSkgZGF0ZXMucHVzaChtLmRhdGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0ZWFtcy5pbmNsdWRlcyhtLmhvbWV0ZWFtKSkgdGVhbXMucHVzaChtLmhvbWV0ZWFtKTtcclxuICAgICAgICAgICAgICAgIGlmICghZ3JvdXBzLmluY2x1ZGVzKG0uZ3JvdXApKSBncm91cHMucHVzaChtLmdyb3VwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGxldCBzaW5nbGVtYXRjaCA9IFtdXHJcbiAgICAgICAgICAgIGlmKG1hdGNoaWQgIT0gXCJcIiAmJiBtYXRjaGlkIDw9IG1hdGNoZXMubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIHNpbmdsZW1hdGNoLnB1c2gobWF0Y2hlcy5maW5kKG0gPT4gbWF0Y2hpZCA9PSBtLl9pZCkgKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1hdGNoZXMgLCB0ZWFtcyA6IHRlYW1zLnNvcnQoKSAsIGRhdGVzICwgZ3JvdXBzICwgc2VsZWN0ZWRNYXRjaGVzIDogc2luZ2xlbWF0Y2ggfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1hdGNoZXMgLCB0ZWFtcyA6IHRlYW1zLnNvcnQoKSAsIGRhdGVzICwgZ3JvdXBzICwgc2VsZWN0ZWRNYXRjaGVzIDogbWF0Y2hlcyB9KVxyXG4gICAgICAgICAgICB9ICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlUGFnZUNoYW5nZSA9IChwYWdlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRQYWdlIDogcGFnZX0pO1xyXG4gICAgfTtcclxuICAgIGhhbmRsZUdyb3VwRmlsdGVyID0gKGdyb3VwKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IFsuLi50aGlzLnN0YXRlLm1hdGNoZXNdO1xyXG4gICAgICAgIGlmIChncm91cCA9PT0gJ0FsbCcpe1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRNYXRjaGVzIDogbWF0Y2hlcyAsIHNlbGVjdGVkR3JvdXAgOicnfSk7XHJcbiAgICAgICAgfSAgXHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRNYXRjaGVzID0gbWF0Y2hlcy5maWx0ZXIoIG0gPT4gbS5ncm91cCA9PT0gZ3JvdXApO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZE1hdGNoZXMgLCBzZWxlY3RlZEdyb3VwIDogZ3JvdXAgLCBzZWxlY3RlZFRlYW0gOiAnJyAsIHNlbGVjdGVkRGF0ZSA6ICcnICwgY3VycmVudFBhZ2U6IDF9KTtcclxuICAgICAgICB9ICBcclxuICAgIH07XHJcbiAgICBoYW5kbGVEYXRlRmlsdGVyID0gKGRhdGUpID0+IHtcclxuICAgICAgICBjb25zdCBtYXRjaGVzID0gWy4uLnRoaXMuc3RhdGUubWF0Y2hlc107XHJcbiAgICAgICAgaWYgKGRhdGUgPT09ICdBbGwnKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkTWF0Y2hlcyA6IG1hdGNoZXMgLCBzZWxlY3RlZERhdGUgOicnfSlcclxuICAgICAgICB9ICAgICAgXHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRNYXRjaGVzID0gbWF0Y2hlcy5maWx0ZXIoIG0gPT4gbS5kYXRlID09PSBkYXRlKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRNYXRjaGVzICwgc2VsZWN0ZWREYXRlIDogZGF0ZSAsIHNlbGVjdGVkVGVhbSA6ICcnICwgc2VsZWN0ZWRHcm91cCA6ICcnLCBjdXJyZW50UGFnZTogMX0pO1xyXG4gICAgICAgIH0gIFxyXG4gICAgfTtcclxuICAgIGhhbmRsZVRlYW1GaWx0ZXIgPSAodGVhbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBbLi4udGhpcy5zdGF0ZS5tYXRjaGVzXTtcclxuICAgICAgICBpZiAodGVhbSA9PT0gJ0FsbCcpe1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRNYXRjaGVzIDogbWF0Y2hlcyAsIHNlbGVjdGVkVGVhbSA6ICcnLCBjdXJyZW50UGFnZTogMX0pXHJcbiAgICAgICAgfSAgICAgIFxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkTWF0Y2hlcyA9IG1hdGNoZXMuZmlsdGVyKCBtID0+IG0uaG9tZXRlYW0gPT09IHRlYW0gfHwgbS5hd2F5dGVhbSA9PT0gdGVhbSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkTWF0Y2hlcyAsIHNlbGVjdGVkVGVhbSA6IHRlYW0gLCBzZWxlY3RlZERhdGUgOiAnJyAsIHNlbGVjdGVkR3JvdXAgOiAnJ30pO1xyXG4gICAgICAgIH0gIFxyXG4gICAgfTtcclxuICAgIGdldFBhZ2VkRGF0YSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IHBhZ2VTaXplLCBjdXJyZW50UGFnZSwgc2VsZWN0ZWRNYXRjaGVzfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgbWF0Y2hMaXN0UGVyUGFnZSA9IHBhZ2luYXRlKHNlbGVjdGVkTWF0Y2hlcyxjdXJyZW50UGFnZSxwYWdlU2l6ZSk7XHJcbiAgICAgICAgcmV0dXJuIHsgdG90YWxDb3VudDogc2VsZWN0ZWRNYXRjaGVzLmxlbmd0aCwgZGF0YTogbWF0Y2hMaXN0UGVyUGFnZX1cclxuICAgIH1cclxuICAgIHByZXZpb3VzUGFnZSA9ICgpID0+IHtcclxuICAgICAgICBsZXQge2N1cnJlbnRQYWdlfSA9IHRoaXMuc3RhdGVcclxuICAgICAgICBpZiAoY3VycmVudFBhZ2UgPjEgKXtcclxuICAgICAgICAgICAgY3VycmVudFBhZ2UtLVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50UGFnZX0pXHJcbiAgICB9ICAgIFxyXG4gICAgbmV4dFBhZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHtjdXJyZW50UGFnZSxzZWxlY3RlZE1hdGNoZXMscGFnZVNpemV9ID0gdGhpcy5zdGF0ZVxyXG4gICAgICAgIGlmIChjdXJyZW50UGFnZSA8IE1hdGguY2VpbChzZWxlY3RlZE1hdGNoZXMubGVuZ3RoIC8gcGFnZVNpemUpICl7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlKytcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFBhZ2V9KVxyXG4gICAgfSAgICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHBhZ2VTaXplICwgY3VycmVudFBhZ2UgLCBzZWxlY3RlZEdyb3VwLCBzZWxlY3RlZERhdGUgLCBzZWxlY3RlZFRlYW0gLCBkYXRlcyAsICBncm91cHMgLCB0ZWFtcyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7IHRvdGFsQ291bnQgLCBkYXRhIH0gPSB0aGlzLmdldFBhZ2VkRGF0YSgpO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF0Y2hlc2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlBoYXNlIGRlIEdyb3VwZTwvaDE+PGhyLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24gaXMtaG92ZXJhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpbHRlciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9eydHcm91cGUgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2dyb3Vwc30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbT17c2VsZWN0ZWRHcm91cH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25JdGVtU2VsZWN0PXt0aGlzLmhhbmRsZUdyb3VwRmlsdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24gaXMtaG92ZXJhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpbHRlciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9eydEYXRlICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtkYXRlc30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbT17c2VsZWN0ZWREYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkl0ZW1TZWxlY3Q9e3RoaXMuaGFuZGxlRGF0ZUZpbHRlcn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duIGlzLWhvdmVyYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaWx0ZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXsnRXF1aXBlICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXt0ZWFtc30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbT17c2VsZWN0ZWRUZWFtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkl0ZW1TZWxlY3Q9e3RoaXMuaGFuZGxlVGVhbUZpbHRlcn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hdGNoZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5tYXAobWF0Y2ggPT5cclxuICAgICAgICAgICAgICAgICAgICA8QmV0cyBtYXRjaD17bWF0Y2h9IGtleT17bWF0Y2guX2lkfSBjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8UGFnaW5hdGlvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXNDb3VudD17dG90YWxDb3VudH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplPXtwYWdlU2l6ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblBhZ2VDaGFuZ2U9e3RoaXMuaGFuZGxlUGFnZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNQYWdlPXt0aGlzLnByZXZpb3VzUGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFBhZ2U9e3RoaXMubmV4dFBhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgIFxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IE1hdGNoZXM7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuL2NvbW1vbi9Mb2FkZXInO1xyXG5cclxuY2xhc3MgUmFua2luZyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHsgXHJcbiAgICAgICAgZGF0YSA6IHtcclxuICAgICAgICAgICAgdXNlcnMgOiBbXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9hZGluZyA6IGZhbHNlXHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIHRoaXMuZ2V0VXNlcnMoKVxyXG4gICAgfVxyXG5cclxuICAgIGdldFVzZXJzKCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzp0cnVlfSlcclxuICAgICAgICBheGlvcy5nZXQoJy9hcGkvdXNlci9nZXRBbGwnKS50aGVuKChyZXMpID0+IFxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGEgOiB7dXNlcnMgOiByZXMuZGF0YS51c2VybmFtZXN9ICwgbG9hZGluZyA6IGZhbHNlfSkpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkgeyBcclxuICAgICAgICBjb25zdCB7dXNlcnN9ID0gdGhpcy5zdGF0ZS5kYXRhXHJcbiAgICAgICAgY29uc3Qge2xvYWRpbmd9ID0gdGhpcy5zdGF0ZVxyXG4gICAgICAgIHJldHVybiAoIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgey8qIHtsb2FkaW5nPyA8TG9hZGVyLz4gOlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VXRpbGlzYXRldXJzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJzLm1hcCh1c2VyID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXt1c2VyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dXNlcn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPn0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlIGlzLTFcIj5DbGFzc2VtZW50IMOgIHZlbmlyISE8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpZnJhbWUgc3JjPSdodHRwczovL2dmeWNhdC5jb20vaWZyL0NoZWVyeVZhZ3VlRWxraG91bmQnIGZyYW1lQm9yZGVyPScwJyBzY3JvbGxpbmc9J25vJyB3aWR0aD0nNjQwJyBoZWlnaHQ9JzM2MSc+PC9pZnJhbWU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBSYW5raW5nOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBSdWxlcyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnVsZXNcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlIGlzLTFcIj5MZXMgcsOoZ2xlcyBkdSBqZXU8L2gxPlxyXG4gICAgICAgICAgICA8dWw+ICAgIFxyXG4gICAgICAgICAgICAgICAgPGxpPk9uIHBldXQgcHJvbm9zdGlxdWVyIGxlIHLDqXN1bHRhdCBkZSB0b3VzIGxlcyBtYXRjaGVzIChwaGFzZXMgZGUgcG91bGUgZXQgcGhhc2UgZmluYWxlIGTDqHMgcXUnaWxzIHNlcm9udCBjb25udXMpLjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+T24gcHJvbm9zdGlxdWUgc3VyIGxlIHLDqXN1bHRhdCBkdSBtYXRjaCBhcHLDqHMgOTAgbWludXRlcyAocHJvbG9uZ2F0aW9ucyBldCB0aXJzIGF1eCBidXRzIG5vbiBwcmlzIGVuIGNvbXB0ZSkuPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5MZXMgcHJvbm9zdGljcyBwZXV2ZW50IMOpdHJlIGTDqXBvc8OpcyBvdSBtb2RpZmnDqXMganVzcXUnw6AgMWggYXZhbnQgbGUgZMOpYnV0IGR1IG1hdGNoLjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+VW4gcHJvbm9zdGljIGNvcnJlY3Qgc2FucyBzY29yZSBleGFjdCByYXBwb3J0ZSAyIHBvaW50cyAoXHJcbiAgICAgICAgICAgICAgICAgICAgZXhlbXBsZSA9IFtSw6lzdWx0YXQgSXRhbGllIC0gVHVycXVpZSA9IDItMV0gLCBbcHJvbm9zdGljIDMgLSAwXSA9IHBhcmkgZ2FnbsOpKS48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlVuIHByb25vc3RpYyBjb3JyZWN0IGF2ZWMgbGUgc2NvcmUgZXhhY3QgcmFwcG9ydGUgMyBwb2ludHMuPC9saT4gXHJcbiAgICAgICAgICAgICAgICA8bGk+TGUgZ2FnbmFudCBnYWduZSAoZXQgYydlc3QgYmllbmcpITwvbGk+ICAgICAgICAgICBcclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgUnVsZXM7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBXZWxjb21lTW9kYWwgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBtb2RhbHZpZXcgOiBmYWxzZSxcclxuICAgICAgICBtb2RhbHNob3cgOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXMnKSAhPT0gJ3knXHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21vZGFsdmlldzp0cnVlfSlcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHttb2RhbHZpZXcsbW9kYWxzaG93fSA9IHRoaXMuc3RhdGVcclxuICAgICAgICByZXR1cm4gKCBcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgeyBtb2RhbHNob3cgP1xyXG4gICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXttb2RhbHZpZXc/J21vZGFsIGlzLWFjdGl2ZSc6J21vZGFsJ30gXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxtZXNzYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+e3RoaXMuc2V0U3RhdGUoe21vZGFsdmlldzpmYWxzZX0pO2xvY2FsU3RvcmFnZS5zZXRJdGVtKCdtcycsJ3knKX19IFxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg4pyWXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJpZW52ZW51ZSBzdXIgY2Ugc2l0ZSBkZSBwcm9ub3N0aWNzIHN1ciBsZXMgbWF0Y2hlcyBsJ1VFRkEgRVVSTyAyMDIwPHN1cD5UTTwvc3VwPi48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBJY2kgcXVlIGR1IGZ1biwgcGFzIGRlIG1pc2VzIGQnYXJnZW50LCBqdXN0ZSB1biBwZXRpdCBqZXUgZ3JhdHVpdCBwb3VyIHNlIGRpdmVydGlyIS48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBdWN1bmUgZG9ubsOpZSBuZSBzZXJhIGNvbGxlY3TDqWUgb3UgcmV2ZW5kdWUgPHNwYW4+8J+Ygzwvc3Bhbj4uXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQcsOqdCDDoCBqb3Vlcj9cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9Pnt0aGlzLnNldFN0YXRlKHttb2RhbHZpZXc6ZmFsc2V9KTtsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXMnLCd5Jyl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtcHJpbWFyeSBpcy1sYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDJ2VzdCBwYXJ0aSAhXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+OlxyXG4gICAgICAgICAgICBudWxsfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgV2VsY29tZU1vZGFsOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBMb2FkZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKCBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxkcy1yb2xsZXJcIj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PC9kaXY+XHJcbiAgICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRlcjsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSm9pIGZyb20gJ2pvaS1icm93c2VyJztcclxuaW1wb3J0IElucHV0IGZyb20gJy4vaW5wdXQnO1xyXG5cclxuY2xhc3MgRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHsgXHJcbiAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgZXJyb3JzOiB7fVxyXG4gICAgfVxyXG4gICAgdG9hc3RvcHRpb25zID0ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcInRvcC1jZW50ZXJcIixcclxuICAgICAgICBhdXRvQ2xvc2U6IDMwMDAsXHJcbiAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgY2xvc2VCdXR0b246IGZhbHNlLFxyXG4gICAgfVxyXG4gICAgdmFsaWRhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHthYm9ydEVhcmx5IDogZmFsc2V9O1xyXG4gICAgICAgIGNvbnN0IHtlcnJvcn0gPSBKb2kudmFsaWRhdGUodGhpcy5zdGF0ZS5kYXRhLCB0aGlzLnNjaGVtYSAsIG9wdGlvbnMpO1xyXG4gICAgICAgIGlmICghZXJyb3IpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCBlcnJvcnMgPSB7fTtcclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGVycm9yLmRldGFpbHMpXHJcbiAgICAgICAgICAgIGVycm9yc1tpdGVtLnBhdGhbMF1dID0gaXRlbS5tZXNzYWdlOyBcclxuICAgICAgICByZXR1cm4gZXJyb3JzO1xyXG4gICAgfTtcclxuICAgIHZhbGlkYXRlUHJvcGVydHkgPSAoe25hbWUsdmFsdWV9KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2JqID0geyBbbmFtZV0gOiB2YWx1ZX07XHJcbiAgICAgICAgY29uc3Qgc2NoZW1hID0geyBbbmFtZV0gOiB0aGlzLnNjaGVtYVtuYW1lXX1cclxuICAgICAgICBsZXQgZXJyb3JNZXNzYWdlO1xyXG4gICAgICAgIGlmIChKb2kudmFsaWRhdGUob2JqLHNjaGVtYSkuZXJyb3IgIT09IG51bGwpe1xyXG4gICAgICAgICAgICBpZiAoW25hbWVdWzBdID09PSAndXNlcm5hbWUnKXsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yID0gSm9pLnZhbGlkYXRlKG9iaixzY2hlbWEpLmVycm9yLmRldGFpbHNbMF0udHlwZTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdhbnkuZW1wdHknOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSAnTGUgbm9tIGRcXCd1dGlsaXNhdGV1ciBkb2l0IMOqdHJlIHJlbnNlaWduw6knO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdzdHJpbmcubWF4JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gJ0xlIG5vbSBkXFwndXRpbGlzYXRldXIgbmUgcGV1dCBleGPDqWRlciA0MCBjYXJhY3TDqHJlcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKFtuYW1lXVswXSA9PT0gJ3Bhc3N3b3JkJyl7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IEpvaS52YWxpZGF0ZShvYmosc2NoZW1hKS5lcnJvci5kZXRhaWxzWzBdLnR5cGU7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYW55LmVtcHR5JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gJ0xlIG1vdCBkZSBwYXNzZSBkb2l0IMOqdHJlIHJlbnNlaWduw6knO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdzdHJpbmcubWluJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gJ0xlIG1vdCBkZSBwYXNzZSBkb2l0IGNvbnRlbmlyIGF1IG1vaW5zIDggY2FyYWN0w6hyZXMnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3N0cmluZy5tYXgnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSAnTGUgbW90IGRlIHBhc3NlIG5lIGRvaXQgcGFzIGTDqXBhc3NlciAyNSBjYXJhY3TDqHJlcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKFtuYW1lXVswXSA9PT0gJ2VtYWlsJyl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IEpvaS52YWxpZGF0ZShvYmosc2NoZW1hKS5lcnJvci5kZXRhaWxzWzBdLnR5cGU7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGVycm9yKXtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdzdHJpbmcuZW1haWwnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSAnVmV1aWxsZXogcmVuc2VpZ25lciB1biBlLW1haWwgdmFsaWRlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYW55LmVtcHR5JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gJ0xcXCdhZHJlc3NlIEVtYWlsIGRvaXQgw6p0cmUgcmVuc2VpZ27DqWUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKFtuYW1lXVswXSA9PT0gJ3Bhc3MnKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yID0gSm9pLnZhbGlkYXRlKG9iaixzY2hlbWEpLmVycm9yLmRldGFpbHNbMF0udHlwZTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdhbnkuZW1wdHknOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSAnTGUgY29kZSBkXFwnYWNjw6hzIGRvaXQgw6p0cmUgcmVuc2VpZ27DqSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlcnJvck1lc3NhZ2VcclxuICAgIH07XHJcbiAgICBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgXHJcbiAgICAgICAgY29uc3QgZXJyb3JzID0gdGhpcy52YWxpZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcnMgOiBlcnJvcnMgfHwge319KTtcclxuICAgICAgICBpZiAoZXJyb3JzKSByZXR1cm47ICBcclxuICAgICAgICB0aGlzLmRvU3VibWl0KCk7ICAgICBcclxuICAgIH07XHJcbiAgICBoYW5kbGVDaGFuZ2UgPSAoe2N1cnJlbnRUYXJnZXQgOiBpbnB1dH0pID0+IHtcclxuICAgICAgICBjb25zdCBlcnJvcnMgPSB7Li4udGhpcy5zdGF0ZS5lcnJvcnN9XHJcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gdGhpcy52YWxpZGF0ZVByb3BlcnR5KGlucHV0KVxyXG4gICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIGVycm9yc1tpbnB1dC5uYW1lXSA9IGVycm9yTWVzc2FnZTtcclxuICAgICAgICBlbHNlIGRlbGV0ZSBlcnJvcnNbaW5wdXQubmFtZV07XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7Li4udGhpcy5zdGF0ZS5kYXRhfTtcclxuICAgICAgICBkYXRhW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YSAsIGVycm9ycyB9KVxyXG4gICAgfVxyXG4gICAgcmVuZGVySW5wdXQobmFtZSxsYWJlbCx0eXBlLGNsYXNzTmFtZSl7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhLCBlcnJvcnMgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIHJldHVybiA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfSBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YVtuYW1lXX0gXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2xhYmVsfSBcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9yc1tuYW1lXX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICB9XHJcbiAgICByZW5kZXJCdXR0b24obGFiZWwsY2xhc3NOYW1lKXtcclxuICAgICAgICByZXR1cm4gPGJ1dHRvbiBkaXNhYmxlZD17dGhpcy52YWxpZGF0ZSgpfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e2xhYmVsfTwvYnV0dG9uPlxyXG4gICAgfSAgICBcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IElucHV0ID0gKHtuYW1lLCBsYWJlbCwgdmFsdWUsIGNsYXNzTmFtZSwgdHlwZSwgZXJyb3IsIG9uQ2hhbmdlfSkgPT4ge1xyXG4gICAgXHJcbiAgICByZXR1cm4gKCBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiIGh0bWxGb3I9e25hbWV9PntsYWJlbH08L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Vycm9yPyAnaXNlcnJvciAnK2NsYXNzTmFtZSA6Y2xhc3NOYW1lfSBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPXt0eXBlfSBcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfSBcclxuICAgICAgICAgICAgICAgICAgICBpZD17bmFtZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIHtlcnJvciAmJiA8cCBjbGFzc05hbWU9XCJlcnJvcm1zZ1wiPntlcnJvci5yZXBsYWNlKC9cIi9nLCcnKX0uPC9wPn1cclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IElucHV0OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5jb25zdCBQYWdpbmF0aW9uID0gKHtpdGVtc0NvdW50ICwgcGFnZVNpemUgLCBjdXJyZW50UGFnZSwgb25QYWdlQ2hhbmdlICwgcHJldmlvdXNQYWdlICwgbmV4dFBhZ2V9KSA9PiB7XHJcbiAgICBjb25zdCBwYWdlc0NvdW50ID0gTWF0aC5jZWlsKGl0ZW1zQ291bnQgLyBwYWdlU2l6ZSk7XHJcbiAgICBpZihwYWdlc0NvdW50PT09MSkgcmV0dXJuIG51bGw7XHJcbiAgICBjb25zdCBwYWdlcyA9IF8ucmFuZ2UoMSwgcGFnZXNDb3VudCsxKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicGFnaW5hdGlvbi1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicGFnaW5hdGlvbi1saW5rXCIgb25DbGljaz17cHJldmlvdXNQYWdlfT4mIzYwOzwvbGk+XHJcbiAgICAgICAgICAgICAgICB7IHBhZ2VzLm1hcChwYWdlID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtwYWdlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgcGFnZSA9PT0gY3VycmVudFBhZ2U/IFwicGFnaW5hdGlvbi1saW5rIGlzLWN1cnJlbnRcIiA6IFwicGFnaW5hdGlvbi1saW5rXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uUGFnZUNoYW5nZShwYWdlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cGFnZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9ICAgICAgXHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicGFnaW5hdGlvbi1saW5rXCIgb25DbGljaz17bmV4dFBhZ2V9PiYjNjI7PC9saT4gICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgVXNlckxvYWRlciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGRzLXJpcHBsZVwiPjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48L2Rpdj4gICAgIFxyXG4gICAgICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBVc2VyTG9hZGVyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4vLi4vY29tbW9uL2Zvcm0nO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciAsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgSm9pIGZyb20gJ2pvaS1icm93c2VyJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNsYXNzIFBhc3NVcGRhdGUgZXh0ZW5kcyBGb3JtIHtcclxuICAgIHN0YXRlID0geyBcclxuICAgICAgICBkYXRhIDoge1xyXG4gICAgICAgICAgICBwYXNzd29yZCA6IFwiXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9ycyA6IHt9LCBcclxuICAgICAgICBsb2FkaW5nIDogZmFsc2UsXHJcbiAgICAgICAgYnV0dG9uVGV4dCA6IFwiVmFsaWRlclwiXHJcbiAgICB9XHJcbiAgICBzY2hlbWEgPSB7XHJcbiAgICAgICAgcGFzc3dvcmQgOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKS5taW4oOCkubWF4KDI1KSxcclxuICAgIH1cclxuICAgIGRvU3VibWl0KCl7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5kYXRhLnBhc3N3b3JkKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtwYXNzd29yZCA6IHRoaXMuc3RhdGUuZGF0YS5wYXNzd29yZCAsIGxvYWRpbmcgOiB0cnVlICwgYnV0dG9uVGV4dCA6ICdQYXRpZW50ZXouLi4uJ30pO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7IHVzZXIgOiB0aGlzLnByb3BzLmFsaWFzLCBwYXNzd29yZCA6IHRoaXMuc3RhdGUuZGF0YS5wYXNzd29yZH1cclxuICAgICAgICBheGlvcyh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6ICdhcGkvdXNlci91cGRhdGVQYXNzd29yZCcsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCd9XHJcbiAgICAgICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoJ01vdCBkZSBwYXNzZSBtb2RpZmnDqSBhdmVjIHN1Y2PDqHMgIScsIHRoaXMudG9hc3RvcHRpb25zKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCggKCkgPT4ge2RvY3VtZW50LmxvY2F0aW9uLmhyZWY9XCIvbG9naW5cIiB9LDIxMDApXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHsgXHJcbiAgICAgICAgY29uc3Qge2xvYWRpbmcsYnV0dG9uVGV4dH0gPSB0aGlzLnN0YXRlXHJcbiAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwibmV3cGFzcy1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJJbnB1dCgncGFzc3dvcmQnLCdOb3V2ZWF1IG1vdCBkZSBwYXNzZSAgOicsJ3RleHQnLCdpbnB1dCcpfVxyXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQnV0dG9uKGJ1dHRvblRleHQsJ2J1dHRvbiBpcy1zdWNjZXNzJyl9XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFBhc3NVcGRhdGUgOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4uL2NvbW1vbi9mb3JtJztcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgLCB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IEpvaSBmcm9tICdqb2ktYnJvd3Nlcic7XHJcbmltcG9ydCBQYXNzVXBkYXRlIGZyb20gJy4vcGFzc1VwZGF0ZSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jbGFzcyBVc2VyQ29uZmlybSBleHRlbmRzIEZvcm0ge1xyXG4gICAgc3RhdGUgPSB7IFxyXG4gICAgICAgIGRhdGEgOiB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lIDogXCJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgZXJyb3JzIDoge30sIFxyXG4gICAgYWxpYXMgOiBcIlwiLFxyXG4gICAgbG9hZGluZyA6IGZhbHNlLFxyXG4gICAgYnV0dG9uVGV4dCA6IFwiVmFsaWRlclwiLFxyXG4gICAgdXNlcnF1ZXJ5IDogdHJ1ZVxyXG4gICAgfVxyXG4gICAgc2NoZW1hID0ge1xyXG4gICAgICAgIHVzZXJuYW1lIDogSm9pLnN0cmluZygpLnJlcXVpcmVkKCkubWF4KDQwKSxcclxuICAgIH1cclxuICAgIGRvU3VibWl0KCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWxpYXMgOiB0aGlzLnN0YXRlLmRhdGEudXNlcm5hbWUgLCBidXR0b25UZXh0IDogJ1BhdGllbnRlei4uLid9KVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7IHVzZXJuYW1lIDogdGhpcy5zdGF0ZS5kYXRhLnVzZXJuYW1lfSAgXHJcbiAgICAgICAgYXhpb3Moe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiAnYXBpL2dldFVzZXJOYW1lJyxcclxuICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgaGVhZGVyczogeydYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J31cclxuICAgICAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgaWYocmVzLmRhdGEudXNlciA9PT0gdGhpcy5zdGF0ZS5kYXRhLnVzZXJuYW1lICl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt1c2VycXVlcnkgOiBmYWxzZX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGE6e3VzZXJuYW1lIDogJyd9LGVycm9ycyA6IHt1c2VybmFtZSA6ICcnfSAsIGJ1dHRvblRleHQgOiBcIlZhbGlkZXJcIn0pO1xyXG4gICAgICAgICAgICAgICAgdG9hc3QuZXJyb3IoJ0xlIG5vbSBkXFwndXRpbGlzYXRldXIgblxcJ2V4aXN0ZSBwYXMnLCB0aGlzLnRvYXN0b3B0aW9ucyk7ICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7IFxyXG4gICAgICAgIGNvbnN0IHsgbG9hZGluZyAsIHVzZXJxdWVyeSAsIGFsaWFzICwgYnV0dG9uVGV4dCB9ID0gdGhpcy5zdGF0ZVxyXG4gICAgICAgIHJldHVybiAoIFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyLz5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlJlbm91dmVsbGVtZW50IGRlIG1vdCBkZSBwYXNzZTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cIm5ld3Bhc3MtZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlcklucHV0KCd1c2VybmFtZScsJ1ZvdHJlIG5vbSBkXFwndXRpbGlzYXRldXIgIDonLCd0ZXh0JywnaW5wdXQnKX1cclxuICAgICAgICAgICAgICAgICAgICB7dXNlcnF1ZXJ5PyB0aGlzLnJlbmRlckJ1dHRvbihidXR0b25UZXh0LCdidXR0b24gaXMtc3VjY2VzcycpIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIHt1c2VycXVlcnk/IG51bGwgOiA8UGFzc1VwZGF0ZSBhbGlhcz17YWxpYXN9Lz59XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBVc2VyQ29uZmlybTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSm9pIGZyb20gJ2pvaS1icm93c2VyJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyB0b2FzdCwgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4vY29tbW9uL2Zvcm0nO1xyXG5pbXBvcnQgVXNlckxvYWRlciBmcm9tICcuL2NvbW1vbi91c2VybG9hZGVyJztcclxuXHJcbmNsYXNzIFNpZ251cCBleHRlbmRzIEZvcm0ge1xyXG4gICAgc3RhdGUgPSB7IFxyXG4gICAgICAgIGRhdGEgOiB7XHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZSA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZCA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBlbWFpbCA6IFwiXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBlcnJvcnMgOiB7fSxcclxuICAgICAgICBsb2FkaW5nIDogZmFsc2UsXHJcbiAgICAgICAgYnV0dG9uVGV4dCA6IFwiVmFsaWRlclwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgIHNjaGVtYSA9IHtcclxuICAgICAgICB1c2VybmFtZSA6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLm1heCg0MCksXHJcbiAgICAgICAgcGFzc3dvcmQgOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKS5taW4oOCkubWF4KDI1KSxcclxuICAgICAgICBlbWFpbCA6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLmVtYWlsKClcclxuICAgIH1cclxuICAgIGRvU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6dHJ1ZSAsIGJ1dHRvblRleHQ6IFwiQ2hhcmdlbWVudC4uLlwifSlcclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICB1c2VybmFtZSA6IHRoaXMuc3RhdGUuZGF0YS51c2VybmFtZSxcclxuICAgICAgICAgICAgcGFzc3dvcmQgOiB0aGlzLnN0YXRlLmRhdGEucGFzc3dvcmQsXHJcbiAgICAgICAgICAgIGVtYWlsIDogdGhpcy5zdGF0ZS5kYXRhLmVtYWlsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF4aW9zKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogJ2FwaS91c2VyL25ldycsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCd9ICAgICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzpmYWxzZSAsIGJ1dHRvblRleHQgOiBcIlZhbGlkZXJcIn0pXHJcbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICB0b2FzdC5zdWNjZXNzKHJlcy5kYXRhLm1lc3NhZ2UsIHRoaXMudG9hc3RvcHRpb25zKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvbG9naW4nKX0sMzUwMCl9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOmZhbHNlLCBidXR0b25UZXh0IDogXCJWYWxpZGVyXCJ9KVxyXG4gICAgICAgICAgICB0b2FzdC5lcnJvcignTGUgbm9tIGRcXCd1dGlsaXNhdGV1ciBlc3QgZMOpamEgdXRpbGlzw6knLCB0aGlzLnRvYXN0b3B0aW9ucyk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHsgXHJcbiAgICAgICAgY29uc3QgeyBsb2FkaW5nIH0gPSB0aGlzLnN0YXRlXHJcbiAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8VG9hc3RDb250YWluZXIvPlxyXG4gICAgICAgICAgICAgICAge2xvYWRpbmcgPT09IHRydWUgPyA8VXNlckxvYWRlci8+IDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5DcsOpZXIgdW4gbm91dmVhdSBjb21wdGU8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgyPlZvdXMgYXZleiBkw6lqYSB1biBjb21wdGU/IENsaXF1ZXogPExpbmsgdG89XCJsb2dpblwiPmljaTwvTGluaz4gcG91ciB2b3VzIGNvbm5lY3RlcjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInNpZ251cC1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVySW5wdXQoJ3VzZXJuYW1lJywnQ2hvaXNpciB1biBOb20gZFxcJ3V0aWxpc2F0ZXVyICA6JywndGV4dCcsJ2lucHV0Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVySW5wdXQoJ2VtYWlsJywnUmVuc2VpZ25lciB1bmUgYWRyZXNzZSBFbWFpbCAgOicsJ3RleHQnLCdpbnB1dCcpfVxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlcklucHV0KCdwYXNzd29yZCcsJ0Nyw6llciB1biBNb3QgZGUgcGFzc2UgIDonLCdwYXNzd29yZCcsJ2lucHV0Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBpcy1ncm91cGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckJ1dHRvbignVmFsaWRlcicsJ2J1dHRvbiBpcy1zdWNjZXNzJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2hvbWVcIiBjbGFzc05hbWU9XCJidXR0b24gaXMtaW5mb1wiPkFubnVsZXI8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBTaWdudXA7IiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYWdpbmF0ZShpdGVtcyxwYWdlTnVtYmVyLHBhZ2VTaXplKXtcclxuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSAocGFnZU51bWJlciAtIDEpICogcGFnZVNpemU7XHJcbiAgICByZXR1cm4gXyhpdGVtcykuc2xpY2Uoc3RhcnRJbmRleCkudGFrZShwYWdlU2l6ZSkudmFsdWUoKTtcclxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=