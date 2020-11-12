webpackHotUpdate("main",{

/***/ "./src/client/App.js":
/*!***************************!*\
  !*** ./src/client/App.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\nvar _WelcomePage = __webpack_require__(/*! ./components/WelcomePage */ \"./src/client/components/WelcomePage.js\");\n\nvar _WelcomePage2 = _interopRequireDefault(_WelcomePage);\n\nvar _CreatePage = __webpack_require__(/*! ./components/CreatePage */ \"./src/client/components/CreatePage.js\");\n\nvar _CreatePage2 = _interopRequireDefault(_CreatePage);\n\nvar _JoinPage = __webpack_require__(/*! ./components/JoinPage */ \"./src/client/components/JoinPage.js\");\n\nvar _JoinPage2 = _interopRequireDefault(_JoinPage);\n\nvar _GamePage = __webpack_require__(/*! ./components/GamePage */ \"./src/client/components/GamePage.js\");\n\nvar _GamePage2 = _interopRequireDefault(_GamePage);\n\nvar _web = __webpack_require__(/*! web3 */ \"./node_modules/web3/src/index.js\");\n\nvar _web2 = _interopRequireDefault(_web);\n\n__webpack_require__(/*! ./index.styl */ \"./src/client/index.styl\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nArray.prototype.asyncForEach = function (callback) {\n\tvar _this = this;\n\n\treturn new Promise(function (resolve) {\n\t\tfor (var i = 0; i < _this.length; i++) {\n\t\t\tcallback(_this[i], i, _this);\n\t\t}\n\t\tresolve();\n\t});\n};\n\nvar App = function (_Component) {\n\t_inherits(App, _Component);\n\n\tfunction App(props) {\n\t\t_classCallCheck(this, App);\n\n\t\tvar _this2 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n\n\t\t_this2.state = {\n\t\t\taccount: '',\n\t\t\tcontract: '',\n\t\t\tcontractAddress: '',\n\t\t\tisThisPlayerOne: false,\n\t\t\tsetupComplete: false,\n\t\t\tescrowPlayerOne: '',\n\t\t\tescrowPlayerTwo: '',\n\t\t\tsocket: io()\n\t\t};\n\t\t_this2.setup();\n\t\treturn _this2;\n\t}\n\n\t_createClass(App, [{\n\t\tkey: 'redirectTo',\n\t\tvalue: function redirectTo(history, location) {\n\t\t\thistory.push(location);\n\t\t}\n\t}, {\n\t\tkey: 'asyncSetState',\n\t\tvalue: function asyncSetState(state) {\n\t\t\tvar _this3 = this;\n\n\t\t\treturn new Promise(function (resolve) {\n\t\t\t\t_this3.setState(state, function () {\n\t\t\t\t\treturn resolve();\n\t\t\t\t});\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'setup',\n\t\tvalue: function () {\n\t\t\tvar _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n\t\t\t\tvar account, accounts;\n\t\t\t\treturn regeneratorRuntime.wrap(function _callee$(_context) {\n\t\t\t\t\twhile (1) {\n\t\t\t\t\t\tswitch (_context.prev = _context.next) {\n\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\taccount = void 0;\n\n\t\t\t\t\t\t\t\tif (!window.ethereum) {\n\t\t\t\t\t\t\t\t\t_context.next = 16;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\twindow.myWeb3 = new _web2.default(ethereum);\n\t\t\t\t\t\t\t\tmyWeb3.eth.transactionConfirmationBlocks = 1; //Hard code number of blocks needed\n\t\t\t\t\t\t\t\t_context.prev = 4;\n\t\t\t\t\t\t\t\t_context.next = 7;\n\t\t\t\t\t\t\t\treturn ethereum.enable();\n\n\t\t\t\t\t\t\tcase 7:\n\t\t\t\t\t\t\t\tethereum.on('accountsChanged', function () {\n\t\t\t\t\t\t\t\t\tconsole.log('Account Changed!');\n\t\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\t\taccount = ethereum.selectedAddress;\n\t\t\t\t\t\t\t\t_context.next = 14;\n\t\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\t\tcase 11:\n\t\t\t\t\t\t\t\t_context.prev = 11;\n\t\t\t\t\t\t\t\t_context.t0 = _context['catch'](4);\n\n\t\t\t\t\t\t\t\talert(\"You must approve this dApp to interact with it, reload and try again\");\n\n\t\t\t\t\t\t\tcase 14:\n\t\t\t\t\t\t\t\t_context.next = 26;\n\t\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\t\tcase 16:\n\t\t\t\t\t\t\t\tif (!window.web3) {\n\t\t\t\t\t\t\t\t\t_context.next = 24;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\twindow.myWeb3 = new _web2.default(web3.currentProvider);\n\t\t\t\t\t\t\t\t_context.next = 20;\n\t\t\t\t\t\t\t\treturn myWeb3.eth.getAccounts();\n\n\t\t\t\t\t\t\tcase 20:\n\t\t\t\t\t\t\t\taccounts = _context.sent;\n\n\t\t\t\t\t\t\t\taccount = accounts[0];\n\t\t\t\t\t\t\t\t_context.next = 26;\n\t\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\t\tcase 24:\n\t\t\t\t\t\t\t\tconsole.log('Non-Ethereum browser detected. You should consider trying MetaMask!');\n\t\t\t\t\t\t\t\talert('Metamask not detected, install it or log in to use this dApp and reload the page.');\n\n\t\t\t\t\t\t\tcase 26:\n\t\t\t\t\t\t\t\t_context.next = 28;\n\t\t\t\t\t\t\t\treturn this.asyncSetState({ account: account, setupComplete: true });\n\n\t\t\t\t\t\t\tcase 28:\n\t\t\t\t\t\t\tcase 'end':\n\t\t\t\t\t\t\t\treturn _context.stop();\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}, _callee, this, [[4, 11]]);\n\t\t\t}));\n\n\t\t\tfunction setup() {\n\t\t\t\treturn _ref.apply(this, arguments);\n\t\t\t}\n\n\t\t\treturn setup;\n\t\t}()\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar _this4 = this;\n\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t_reactRouterDom.BrowserRouter,\n\t\t\t\tnull,\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t_reactRouterDom.Switch,\n\t\t\t\t\tnull,\n\t\t\t\t\t_react2.default.createElement(_reactRouterDom.Route, { path: '/', exact: true, render: function render(context) {\n\t\t\t\t\t\t\treturn _react2.default.createElement(_WelcomePage2.default, {\n\t\t\t\t\t\t\t\thistory: context.history,\n\t\t\t\t\t\t\t\tredirectTo: function redirectTo(history, location) {\n\t\t\t\t\t\t\t\t\t_this4.redirectTo(history, location);\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t} }),\n\t\t\t\t\t_react2.default.createElement(_reactRouterDom.Route, { path: '/create', render: function render(context) {\n\t\t\t\t\t\t\treturn _react2.default.createElement(_CreatePage2.default, {\n\t\t\t\t\t\t\t\tcontract: function contract(instance) {\n\t\t\t\t\t\t\t\t\t_this4.setState({ contract: instance });\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\taccount: _this4.state.account,\n\t\t\t\t\t\t\t\tsetState: function setState(state) {\n\t\t\t\t\t\t\t\t\treturn _this4.setState(state);\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\thistory: context.history,\n\t\t\t\t\t\t\t\tescrowPlayerOne: function escrowPlayerOne(_escrowPlayerOne) {\n\t\t\t\t\t\t\t\t\treturn _this4.setState({ escrowPlayerOne: _escrowPlayerOne });\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\tredirectTo: function redirectTo(history, location) {\n\t\t\t\t\t\t\t\t\t_this4.redirectTo(history, location);\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t} }),\n\t\t\t\t\t_react2.default.createElement(_reactRouterDom.Route, { path: '/join', render: function render(context) {\n\t\t\t\t\t\t\treturn _react2.default.createElement(_JoinPage2.default, {\n\t\t\t\t\t\t\t\taccount: _this4.state.account,\n\t\t\t\t\t\t\t\thistory: context.history,\n\t\t\t\t\t\t\t\tsetState: function setState(state) {\n\t\t\t\t\t\t\t\t\treturn _this4.setState(state);\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\tescrowPlayerTwo: function escrowPlayerTwo(_escrowPlayerTwo) {\n\t\t\t\t\t\t\t\t\treturn _this4.setState({ escrowPlayerTwo: _escrowPlayerTwo });\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\tredirectTo: function redirectTo(history, location) {\n\t\t\t\t\t\t\t\t\t_this4.redirectTo(history, location);\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t} }),\n\t\t\t\t\t_react2.default.createElement(_reactRouterDom.Route, { path: '/game', render: function render(context) {\n\t\t\t\t\t\t\treturn _react2.default.createElement(_GamePage2.default, {\n\t\t\t\t\t\t\t\tsetup: _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n\t\t\t\t\t\t\t\t\treturn regeneratorRuntime.wrap(function _callee2$(_context2) {\n\t\t\t\t\t\t\t\t\t\twhile (1) {\n\t\t\t\t\t\t\t\t\t\t\tswitch (_context2.prev = _context2.next) {\n\t\t\t\t\t\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\t\t\t\t\t\t_context2.next = 2;\n\t\t\t\t\t\t\t\t\t\t\t\t\treturn _this4.setup();\n\n\t\t\t\t\t\t\t\t\t\t\t\tcase 2:\n\t\t\t\t\t\t\t\t\t\t\t\t\treturn _context2.abrupt('return', _context2.sent);\n\n\t\t\t\t\t\t\t\t\t\t\t\tcase 3:\n\t\t\t\t\t\t\t\t\t\t\t\tcase 'end':\n\t\t\t\t\t\t\t\t\t\t\t\t\treturn _context2.stop();\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}, _callee2, _this4);\n\t\t\t\t\t\t\t\t})),\n\t\t\t\t\t\t\t\tcontract: _this4.state.contract,\n\t\t\t\t\t\t\t\taccount: _this4.state.account,\n\t\t\t\t\t\t\t\tisThisPlayerOne: _this4.state.isThisPlayerOne,\n\t\t\t\t\t\t\t\tsetupComplete: _this4.state.setupComplete,\n\t\t\t\t\t\t\t\tescrowPlayerOne: _this4.state.escrowPlayerOne,\n\t\t\t\t\t\t\t\tescrowPlayerTwo: _this4.state.escrowPlayerTwo,\n\t\t\t\t\t\t\t\thistory: context.history,\n\t\t\t\t\t\t\t\tredirectTo: function redirectTo(history, location) {\n\t\t\t\t\t\t\t\t\t_this4.redirectTo(history, location);\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t} })\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn App;\n}(_react.Component);\n\n_reactDom2.default.render(_react2.default.createElement(App, null), document.querySelector('#root'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L0FwcC5qcz9mZGMyIl0sIm5hbWVzIjpbIkFycmF5IiwicHJvdG90eXBlIiwiYXN5bmNGb3JFYWNoIiwiY2FsbGJhY2siLCJQcm9taXNlIiwiaSIsImxlbmd0aCIsInJlc29sdmUiLCJBcHAiLCJwcm9wcyIsInN0YXRlIiwiYWNjb3VudCIsImNvbnRyYWN0IiwiY29udHJhY3RBZGRyZXNzIiwiaXNUaGlzUGxheWVyT25lIiwic2V0dXBDb21wbGV0ZSIsImVzY3Jvd1BsYXllck9uZSIsImVzY3Jvd1BsYXllclR3byIsInNvY2tldCIsImlvIiwic2V0dXAiLCJoaXN0b3J5IiwibG9jYXRpb24iLCJwdXNoIiwic2V0U3RhdGUiLCJ3aW5kb3ciLCJldGhlcmV1bSIsIm15V2ViMyIsIldlYjMiLCJldGgiLCJ0cmFuc2FjdGlvbkNvbmZpcm1hdGlvbkJsb2NrcyIsImVuYWJsZSIsIm9uIiwiY29uc29sZSIsImxvZyIsInNlbGVjdGVkQWRkcmVzcyIsImFsZXJ0Iiwid2ViMyIsImN1cnJlbnRQcm92aWRlciIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJhc3luY1NldFN0YXRlIiwiY29udGV4dCIsInJlZGlyZWN0VG8iLCJpbnN0YW5jZSIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUFBLE1BQU1DLFNBQU4sQ0FBZ0JDLFlBQWhCLEdBQStCLFVBQVVDLFFBQVYsRUFBb0I7QUFBQTs7QUFDL0MsUUFBTyxJQUFJQyxPQUFKLENBQVksbUJBQVc7QUFDMUIsT0FBSSxJQUFJQyxJQUFJLENBQVosRUFBZUEsSUFBSSxNQUFLQyxNQUF4QixFQUFnQ0QsR0FBaEMsRUFBcUM7QUFDakNGLFlBQVMs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QUFMLENBQWdCdEIsT0FBaEIsRUFBeUJDLFFBQXpCO0FBQ0Q7QUFYRixTQUQyQjtBQUFBLE9BQTVCO0FBaENEO0FBREQsSUFERDtBQW9EQTs7OztFQXhHZ0J1QixnQjs7QUEyR2xCQyxtQkFBU0MsTUFBVCxDQUNDLDhCQUFDLEdBQUQsT0FERCxFQUVDQyxTQUFTQyxhQUFULENBQXVCLE9BQXZCLENBRkQiLCJmaWxlIjoiLi9zcmMvY2xpZW50L0FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyLCBSb3V0ZSwgU3dpdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBXZWxjb21lUGFnZSBmcm9tICcuL2NvbXBvbmVudHMvV2VsY29tZVBhZ2UnXG5pbXBvcnQgQ3JlYXRlUGFnZSBmcm9tICcuL2NvbXBvbmVudHMvQ3JlYXRlUGFnZSdcbmltcG9ydCBKb2luUGFnZSBmcm9tICcuL2NvbXBvbmVudHMvSm9pblBhZ2UnXG5pbXBvcnQgR2FtZVBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL0dhbWVQYWdlJ1xuaW1wb3J0IFdlYjMgZnJvbSAnd2ViMydcbmltcG9ydCAnLi9pbmRleC5zdHlsJ1xuXG5BcnJheS5wcm90b3R5cGUuYXN5bmNGb3JFYWNoID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY2FsbGJhY2sodGhpc1tpXSwgaSwgdGhpcylcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKClcbiAgICB9KVxufVxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvciAocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0YWNjb3VudDogJycsXG5cdFx0XHRjb250cmFjdDogJycsXG5cdFx0XHRjb250cmFjdEFkZHJlc3M6ICcnLFxuXHRcdFx0aXNUaGlzUGxheWVyT25lOiBmYWxzZSxcbiAgICAgICAgICAgIHNldHVwQ29tcGxldGU6IGZhbHNlLFxuICAgICAgICAgICAgZXNjcm93UGxheWVyT25lOiAnJyxcblx0XHRcdGVzY3Jvd1BsYXllclR3bzogJycsXG5cdFx0XHRzb2NrZXQ6IGlvKCksXG5cdFx0fVxuXHRcdHRoaXMuc2V0dXAoKVxuXHR9XG5cblx0cmVkaXJlY3RUbyhoaXN0b3J5LCBsb2NhdGlvbikge1xuXHRcdGhpc3RvcnkucHVzaChsb2NhdGlvbik7XG5cdH1cblxuICAgIGFzeW5jU2V0U3RhdGUoc3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSwgKCkgPT4gcmVzb2x2ZSgpKVxuICAgICAgICB9KVxuICAgIH1cblxuXHRhc3luYyBzZXR1cCgpIHtcblx0XHRsZXQgYWNjb3VudFxuXHRcdGlmICh3aW5kb3cuZXRoZXJldW0pIHtcblx0XHRcdHdpbmRvdy5teVdlYjMgPSBuZXcgV2ViMyhldGhlcmV1bSlcblx0XHRcdG15V2ViMy5ldGgudHJhbnNhY3Rpb25Db25maXJtYXRpb25CbG9ja3MgPSAxIC8vSGFyZCBjb2RlIG51bWJlciBvZiBibG9ja3MgbmVlZGVkXG5cdFx0XHR0cnkge1xuXHRcdFx0XHRhd2FpdCBldGhlcmV1bS5lbmFibGUoKVxuXHRcdFx0XHRldGhlcmV1bS5vbignYWNjb3VudHNDaGFuZ2VkJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdBY2NvdW50IENoYW5nZWQhJylcblx0XHRcdFx0fSlcblx0XHRcdFx0YWNjb3VudCA9IGV0aGVyZXVtLnNlbGVjdGVkQWRkcmVzc1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0YWxlcnQoXCJZb3UgbXVzdCBhcHByb3ZlIHRoaXMgZEFwcCB0byBpbnRlcmFjdCB3aXRoIGl0LCByZWxvYWQgYW5kIHRyeSBhZ2FpblwiKVxuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAod2luZG93LndlYjMpIHtcblx0XHRcdHdpbmRvdy5teVdlYjMgPSBuZXcgV2ViMyh3ZWIzLmN1cnJlbnRQcm92aWRlcilcblx0XHRcdGxldCBhY2NvdW50cyA9IGF3YWl0IG15V2ViMy5ldGguZ2V0QWNjb3VudHMoKVxuXHRcdFx0YWNjb3VudCA9IGFjY291bnRzWzBdXG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKCdOb24tRXRoZXJldW0gYnJvd3NlciBkZXRlY3RlZC4gWW91IHNob3VsZCBjb25zaWRlciB0cnlpbmcgTWV0YU1hc2shJylcblx0XHRcdGFsZXJ0KCdNZXRhbWFzayBub3QgZGV0ZWN0ZWQsIGluc3RhbGwgaXQgb3IgbG9nIGluIHRvIHVzZSB0aGlzIGRBcHAgYW5kIHJlbG9hZCB0aGUgcGFnZS4nKVxuXHRcdH1cblx0XHRhd2FpdCB0aGlzLmFzeW5jU2V0U3RhdGUoeyBhY2NvdW50LCBzZXR1cENvbXBsZXRlOiB0cnVlIH0pXG5cdH1cblxuXHRyZW5kZXIgKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8QnJvd3NlclJvdXRlcj5cblx0XHRcdFx0PFN3aXRjaD5cblx0XHRcdFx0XHQ8Um91dGUgcGF0aD1cIi9cIiBleGFjdCByZW5kZXI9e2NvbnRleHQgPT4gKFxuXHRcdFx0XHRcdFx0PFdlbGNvbWVQYWdlXG5cdFx0XHRcdFx0XHRcdGhpc3Rvcnk9e2NvbnRleHQuaGlzdG9yeX1cblx0XHRcdFx0XHRcdFx0cmVkaXJlY3RUbz17KGhpc3RvcnksIGxvY2F0aW9uKSA9PiB7XG5cdFx0XHRcdFx0XHRcdCAgdGhpcy5yZWRpcmVjdFRvKGhpc3RvcnksIGxvY2F0aW9uKVxuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpfSAvPlxuXHRcdFx0XHRcdDxSb3V0ZSBwYXRoPVwiL2NyZWF0ZVwiIHJlbmRlcj17Y29udGV4dCA9PiAoXG5cdFx0XHRcdFx0XHQ8Q3JlYXRlUGFnZVxuXHRcdFx0XHRcdFx0XHRjb250cmFjdD17aW5zdGFuY2UgPT4ge3RoaXMuc2V0U3RhdGUoe2NvbnRyYWN0OiBpbnN0YW5jZX0pfX1cblx0XHRcdFx0XHRcdFx0YWNjb3VudD17dGhpcy5zdGF0ZS5hY2NvdW50fVxuXHRcdFx0XHRcdFx0XHRzZXRTdGF0ZT17c3RhdGUgPT4gdGhpcy5zZXRTdGF0ZShzdGF0ZSl9XG5cdFx0XHRcdFx0XHRcdGhpc3Rvcnk9e2NvbnRleHQuaGlzdG9yeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlc2Nyb3dQbGF5ZXJPbmU9e2VzY3Jvd1BsYXllck9uZSA9PiB0aGlzLnNldFN0YXRlKHtlc2Nyb3dQbGF5ZXJPbmV9KX1cblx0XHRcdFx0XHRcdFx0cmVkaXJlY3RUbz17KGhpc3RvcnksIGxvY2F0aW9uKSA9PiB7XG5cdFx0XHRcdFx0XHRcdCAgdGhpcy5yZWRpcmVjdFRvKGhpc3RvcnksIGxvY2F0aW9uKVxuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpfSAvPlxuXHRcdFx0XHRcdDxSb3V0ZSBwYXRoPVwiL2pvaW5cIiByZW5kZXI9e2NvbnRleHQgPT4gKFxuXHRcdFx0XHRcdFx0PEpvaW5QYWdlXG5cdFx0XHRcdFx0XHRcdGFjY291bnQ9e3RoaXMuc3RhdGUuYWNjb3VudH1cblx0XHRcdFx0XHRcdFx0aGlzdG9yeT17Y29udGV4dC5oaXN0b3J5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0YXRlPXtzdGF0ZSA9PiB0aGlzLnNldFN0YXRlKHN0YXRlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlc2Nyb3dQbGF5ZXJUd289e2VzY3Jvd1BsYXllclR3byA9PiB0aGlzLnNldFN0YXRlKHtlc2Nyb3dQbGF5ZXJUd299KX1cblx0XHRcdFx0XHRcdFx0cmVkaXJlY3RUbz17KGhpc3RvcnksIGxvY2F0aW9uKSA9PiB7XG5cdFx0XHRcdFx0XHRcdCAgdGhpcy5yZWRpcmVjdFRvKGhpc3RvcnksIGxvY2F0aW9uKVxuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpfSAvPlxuXHRcdFx0XHRcdDxSb3V0ZSBwYXRoPVwiL2dhbWVcIiByZW5kZXI9e2NvbnRleHQgPT4gKFxuXHRcdFx0XHRcdFx0PEdhbWVQYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dXA9e2FzeW5jICgpID0+IGF3YWl0IHRoaXMuc2V0dXAoKX1cblx0XHRcdFx0XHRcdFx0Y29udHJhY3Q9e3RoaXMuc3RhdGUuY29udHJhY3R9XG5cdFx0XHRcdFx0XHRcdGFjY291bnQ9e3RoaXMuc3RhdGUuYWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1RoaXNQbGF5ZXJPbmU9e3RoaXMuc3RhdGUuaXNUaGlzUGxheWVyT25lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHVwQ29tcGxldGU9e3RoaXMuc3RhdGUuc2V0dXBDb21wbGV0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlc2Nyb3dQbGF5ZXJPbmU9e3RoaXMuc3RhdGUuZXNjcm93UGxheWVyT25lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVzY3Jvd1BsYXllclR3bz17dGhpcy5zdGF0ZS5lc2Nyb3dQbGF5ZXJUd299XG5cdFx0XHRcdFx0XHRcdGhpc3Rvcnk9e2NvbnRleHQuaGlzdG9yeX1cblx0XHRcdFx0XHRcdFx0cmVkaXJlY3RUbz17KGhpc3RvcnksIGxvY2F0aW9uKSA9PiB7XG5cdFx0XHRcdFx0XHRcdCAgdGhpcy5yZWRpcmVjdFRvKGhpc3RvcnksIGxvY2F0aW9uKVxuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpfSAvPlxuXHRcdFx0XHQ8L1N3aXRjaD5cblx0XHRcdDwvQnJvd3NlclJvdXRlcj5cblx0XHQpXG5cdH1cbn1cblxuUmVhY3RET00ucmVuZGVyKFxuXHQ8QXBwIC8+LFxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpXG4pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/client/App.js\n");

/***/ })

})