webpackHotUpdate("main",{

/***/ "./src/client/App.js":
/*!***************************!*\
  !*** ./src/client/App.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\nvar _WelcomePage = __webpack_require__(/*! ./components/WelcomePage */ \"./src/client/components/WelcomePage.js\");\n\nvar _WelcomePage2 = _interopRequireDefault(_WelcomePage);\n\nvar _CreatePage = __webpack_require__(/*! ./components/CreatePage */ \"./src/client/components/CreatePage.js\");\n\nvar _CreatePage2 = _interopRequireDefault(_CreatePage);\n\nvar _JoinPage = __webpack_require__(/*! ./components/JoinPage */ \"./src/client/components/JoinPage.js\");\n\nvar _JoinPage2 = _interopRequireDefault(_JoinPage);\n\nvar _GamePage = __webpack_require__(/*! ./components/GamePage */ \"./src/client/components/GamePage.js\");\n\nvar _GamePage2 = _interopRequireDefault(_GamePage);\n\nvar _web = __webpack_require__(/*! web3 */ \"./node_modules/web3/src/index.js\");\n\nvar _web2 = _interopRequireDefault(_web);\n\nvar _socket = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/lib/index.js\");\n\nvar _socket2 = _interopRequireDefault(_socket);\n\n__webpack_require__(/*! ./index.styl */ \"./src/client/index.styl\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nArray.prototype.asyncForEach = function (callback) {\n\tvar _this = this;\n\n\treturn new Promise(function (resolve) {\n\t\tfor (var i = 0; i < _this.length; i++) {\n\t\t\tcallback(_this[i], i, _this);\n\t\t}\n\t\tresolve();\n\t});\n};\n\nvar App = function (_Component) {\n\t_inherits(App, _Component);\n\n\tfunction App(props) {\n\t\t_classCallCheck(this, App);\n\n\t\tvar _this2 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n\n\t\t_this2.state = {\n\t\t\taccount: '',\n\t\t\tcontract: '',\n\t\t\tcontractAddress: '',\n\t\t\tisThisPlayerOne: false,\n\t\t\tsetupComplete: false,\n\t\t\tescrowPlayerOne: '',\n\t\t\tescrowPlayerTwo: '',\n\t\t\tsocket: null\n\t\t};\n\t\t_this2.setup();\n\t\treturn _this2;\n\t}\n\n\t_createClass(App, [{\n\t\tkey: 'redirectTo',\n\t\tvalue: function redirectTo(history, location) {\n\t\t\thistory.push(location);\n\t\t}\n\t}, {\n\t\tkey: 'asyncSetState',\n\t\tvalue: function asyncSetState(state) {\n\t\t\tvar _this3 = this;\n\n\t\t\treturn new Promise(function (resolve) {\n\t\t\t\t_this3.setState(state, function () {\n\t\t\t\t\treturn resolve();\n\t\t\t\t});\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'setListeners',\n\t\tvalue: function setListeners() {\n\t\t\tvar _this4 = this;\n\n\t\t\tthis.state.socket.on('player-two-joined', function () {\n\t\t\t\t_this4.props.redirectTo(_this4.props.history, '/game');\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'setup',\n\t\tvalue: function () {\n\t\t\tvar _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n\t\t\t\tvar account, accounts, socket;\n\t\t\t\treturn regeneratorRuntime.wrap(function _callee$(_context) {\n\t\t\t\t\twhile (1) {\n\t\t\t\t\t\tswitch (_context.prev = _context.next) {\n\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\taccount = void 0;\n\n\t\t\t\t\t\t\t\tif (!window.ethereum) {\n\t\t\t\t\t\t\t\t\t_context.next = 17;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\tethereum.autoRefreshOnNetworkChange = true;\n\t\t\t\t\t\t\t\twindow.myWeb3 = new _web2.default(ethereum);\n\t\t\t\t\t\t\t\tmyWeb3.eth.transactionConfirmationBlocks = 1; //Hard code number of blocks needed\n\t\t\t\t\t\t\t\t_context.prev = 5;\n\t\t\t\t\t\t\t\t_context.next = 8;\n\t\t\t\t\t\t\t\treturn ethereum.enable();\n\n\t\t\t\t\t\t\tcase 8:\n\t\t\t\t\t\t\t\tethereum.on('accountsChanged', function () {\n\t\t\t\t\t\t\t\t\tconsole.log('Account Changed!');\n\t\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\t\taccount = ethereum.selectedAddress;\n\t\t\t\t\t\t\t\t_context.next = 15;\n\t\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\t\tcase 12:\n\t\t\t\t\t\t\t\t_context.prev = 12;\n\t\t\t\t\t\t\t\t_context.t0 = _context['catch'](5);\n\n\t\t\t\t\t\t\t\talert(\"You must approve this dApp to interact with it, reload and try again\");\n\n\t\t\t\t\t\t\tcase 15:\n\t\t\t\t\t\t\t\t_context.next = 27;\n\t\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\t\tcase 17:\n\t\t\t\t\t\t\t\tif (!window.web3) {\n\t\t\t\t\t\t\t\t\t_context.next = 25;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\twindow.myWeb3 = new _web2.default(web3.currentProvider);\n\t\t\t\t\t\t\t\t_context.next = 21;\n\t\t\t\t\t\t\t\treturn myWeb3.eth.getAccounts();\n\n\t\t\t\t\t\t\tcase 21:\n\t\t\t\t\t\t\t\taccounts = _context.sent;\n\n\t\t\t\t\t\t\t\taccount = accounts[0];\n\t\t\t\t\t\t\t\t_context.next = 27;\n\t\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\t\tcase 25:\n\t\t\t\t\t\t\t\tconsole.log('Non-Ethereum browser detected. You should consider trying MetaMask!');\n\t\t\t\t\t\t\t\talert('Metamask not detected, install it or log in to use this dApp and reload the page.');\n\n\t\t\t\t\t\t\tcase 27:\n\t\t\t\t\t\t\t\tsocket = (0, _socket2.default)();\n\t\t\t\t\t\t\t\t_context.next = 30;\n\t\t\t\t\t\t\t\treturn this.asyncSetState({ account: account, setupComplete: true, socket: socket });\n\n\t\t\t\t\t\t\tcase 30:\n\t\t\t\t\t\t\t\tthis.setListeners();\n\n\t\t\t\t\t\t\tcase 31:\n\t\t\t\t\t\t\tcase 'end':\n\t\t\t\t\t\t\t\treturn _context.stop();\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}, _callee, this, [[5, 12]]);\n\t\t\t}));\n\n\t\t\tfunction setup() {\n\t\t\t\treturn _ref.apply(this, arguments);\n\t\t\t}\n\n\t\t\treturn setup;\n\t\t}()\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar _this5 = this;\n\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t_reactRouterDom.BrowserRouter,\n\t\t\t\tnull,\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t_reactRouterDom.Switch,\n\t\t\t\t\tnull,\n\t\t\t\t\t_react2.default.createElement(_reactRouterDom.Route, { path: '/', exact: true, render: function render(context) {\n\t\t\t\t\t\t\treturn _react2.default.createElement(_WelcomePage2.default, {\n\t\t\t\t\t\t\t\thistory: context.history,\n\t\t\t\t\t\t\t\tredirectTo: function redirectTo(history, location) {\n\t\t\t\t\t\t\t\t\t_this5.redirectTo(history, location);\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t} }),\n\t\t\t\t\t_react2.default.createElement(_reactRouterDom.Route, { path: '/create', render: function render(context) {\n\t\t\t\t\t\t\treturn _react2.default.createElement(_CreatePage2.default, {\n\t\t\t\t\t\t\t\tcontract: function contract(instance) {\n\t\t\t\t\t\t\t\t\t_this5.setState({ contract: instance });\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\taccount: _this5.state.account,\n\t\t\t\t\t\t\t\tsetState: function setState(state) {\n\t\t\t\t\t\t\t\t\treturn _this5.setState(state);\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\thistory: context.history,\n\t\t\t\t\t\t\t\tescrowPlayerOne: function escrowPlayerOne(_escrowPlayerOne) {\n\t\t\t\t\t\t\t\t\treturn _this5.setState({ escrowPlayerOne: _escrowPlayerOne });\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\tredirectTo: function redirectTo(history, location) {\n\t\t\t\t\t\t\t\t\t_this5.redirectTo(history, location);\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t} }),\n\t\t\t\t\t_react2.default.createElement(_reactRouterDom.Route, { path: '/join', render: function render(context) {\n\t\t\t\t\t\t\treturn _react2.default.createElement(_JoinPage2.default, {\n\t\t\t\t\t\t\t\taccount: _this5.state.account,\n\t\t\t\t\t\t\t\thistory: context.history,\n\t\t\t\t\t\t\t\tsetState: function setState(state) {\n\t\t\t\t\t\t\t\t\treturn _this5.setState(state);\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\tescrowPlayerTwo: function escrowPlayerTwo(_escrowPlayerTwo) {\n\t\t\t\t\t\t\t\t\treturn _this5.setState({ escrowPlayerTwo: _escrowPlayerTwo });\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\tredirectTo: function redirectTo(history, location) {\n\t\t\t\t\t\t\t\t\t_this5.redirectTo(history, location);\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t} }),\n\t\t\t\t\t_react2.default.createElement(_reactRouterDom.Route, { path: '/game', render: function render(context) {\n\t\t\t\t\t\t\treturn _react2.default.createElement(_GamePage2.default, {\n\t\t\t\t\t\t\t\tsetup: _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n\t\t\t\t\t\t\t\t\treturn regeneratorRuntime.wrap(function _callee2$(_context2) {\n\t\t\t\t\t\t\t\t\t\twhile (1) {\n\t\t\t\t\t\t\t\t\t\t\tswitch (_context2.prev = _context2.next) {\n\t\t\t\t\t\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\t\t\t\t\t\t_context2.next = 2;\n\t\t\t\t\t\t\t\t\t\t\t\t\treturn _this5.setup();\n\n\t\t\t\t\t\t\t\t\t\t\t\tcase 2:\n\t\t\t\t\t\t\t\t\t\t\t\t\treturn _context2.abrupt('return', _context2.sent);\n\n\t\t\t\t\t\t\t\t\t\t\t\tcase 3:\n\t\t\t\t\t\t\t\t\t\t\t\tcase 'end':\n\t\t\t\t\t\t\t\t\t\t\t\t\treturn _context2.stop();\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}, _callee2, _this5);\n\t\t\t\t\t\t\t\t})),\n\t\t\t\t\t\t\t\tcontract: _this5.state.contract,\n\t\t\t\t\t\t\t\taccount: _this5.state.account,\n\t\t\t\t\t\t\t\tisThisPlayerOne: _this5.state.isThisPlayerOne,\n\t\t\t\t\t\t\t\tsetupComplete: _this5.state.setupComplete,\n\t\t\t\t\t\t\t\tescrowPlayerOne: _this5.state.escrowPlayerOne,\n\t\t\t\t\t\t\t\tescrowPlayerTwo: _this5.state.escrowPlayerTwo,\n\t\t\t\t\t\t\t\thistory: context.history,\n\t\t\t\t\t\t\t\tredirectTo: function redirectTo(history, location) {\n\t\t\t\t\t\t\t\t\t_this5.redirectTo(history, location);\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t} })\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn App;\n}(_react.Component);\n\n_reactDom2.default.render(_react2.default.createElement(App, null), document.querySelector('#root'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L0FwcC5qcz9mZGMyIl0sIm5hbWVzIjpbIkFycmF5IiwicHJvdG90eXBlIiwiYXN5bmNGb3JFYWNoIiwiY2FsbGJhY2siLCJQcm9taXNlIiwiaSIsImxlbmd0aCIsInJlc29sdmUiLCJBcHAiLCJwcm9wcyIsInN0YXRlIiwiYWNjb3VudCIsImNvbnRyYWN0IiwiY29udHJhY3RBZGRyZXNzIiwiaXNUaGlzUGxheWVyT25lIiwic2V0dXBDb21wbGV0ZSIsImVzY3Jvd1BsYXllck9uZSIsImVzY3Jvd1BsYXllclR3byIsInNvY2tldCIsInNldHVwIiwiaGlzdG9yeSIsImxvY2F0aW9uIiwicHVzaCIsInNldFN0YXRlIiwib24iLCJyZWRpcmVjdFRvIiwid2luZG93IiwiZXRoZXJldW0iLCJhdXRvUmVmcmVzaE9uTmV0d29ya0NoYW5nZSIsIm15V2ViMyIsIldlYjMiLCJldGgiLCJ0cmFuc2FjdGlvbkNvbmZpcm1hdGlvbkJsb2NrcyIsImVuYWJsZSIsImNvbnNvbGUiLCJsb2ciLCJzZWxlY3RlZEFkZHJlc3MiLCJhbGVydCIsIndlYjMiLCJjdXJyZW50UHJvdmlkZXIiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiYXN5bmNTZXRTdGF0ZSIsInNldExpc3RlbmVycyIsImNvbnRleHQiLCJpbnN0YW5jZSIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQUEsTUFBTUMsU0FBTixDQUFnQkMsWUFBaEIsR0FBK0IsVUFBVUMsUUFBVixFQUFvQjtBQUFBOztBQUMvQyxRQUFPLElBQUlDLE9BQUosQ0FBWSxtQkFBVztBQUMxQixPQUFJLElBQUlDLElBQUksQ0FBWixFQUFlQSxJ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QUFVLE9BQUtULEtBQUwsQ0FBV0UsUUFGdEI7QUFHQyxpQkFBUyxPQUFLRixLQUFMLENBQVdDLE9BSHJCO0FBSXNCLHlCQUFpQixPQUFLRCxLQUFMLENBQVdJLGVBSmxEO0FBS3NCLHVCQUFlLE9BQUtKLEtBQUwsQ0FBV0ssYUFMaEQ7QUFNc0IseUJBQWlCLE9BQUtMLEtBQUwsQ0FBV00sZUFObEQ7QUFPc0IseUJBQWlCLE9BQUtOLEtBQUwsQ0FBV08sZUFQbEQ7QUFRQyxpQkFBUzJCLFFBQVF4QixPQVJsQjtBQVNDLG9CQUFZLG9CQUFDQSxPQUFELEVBQVVDLFFBQVYsRUFBdUI7QUFDakMsZ0JBQUtJLFVBQUwsQ0FBZ0JMLE9BQWhCLEVBQXlCQyxRQUF6QjtBQUNEO0FBWEYsU0FEMkI7QUFBQSxPQUE1QjtBQWhDRDtBQURELElBREQ7QUFvREE7Ozs7RUFqSGdCeUIsZ0I7O0FBb0hsQkMsbUJBQVNDLE1BQVQsQ0FDQyw4QkFBQyxHQUFELE9BREQsRUFFQ0MsU0FBU0MsYUFBVCxDQUF1QixPQUF2QixDQUZEIiwiZmlsZSI6Ii4vc3JjL2NsaWVudC9BcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgUm91dGUsIFN3aXRjaCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgV2VsY29tZVBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL1dlbGNvbWVQYWdlJ1xuaW1wb3J0IENyZWF0ZVBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL0NyZWF0ZVBhZ2UnXG5pbXBvcnQgSm9pblBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL0pvaW5QYWdlJ1xuaW1wb3J0IEdhbWVQYWdlIGZyb20gJy4vY29tcG9uZW50cy9HYW1lUGFnZSdcbmltcG9ydCBXZWIzIGZyb20gJ3dlYjMnXG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCdcbmltcG9ydCAnLi9pbmRleC5zdHlsJ1xuXG5BcnJheS5wcm90b3R5cGUuYXN5bmNGb3JFYWNoID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY2FsbGJhY2sodGhpc1tpXSwgaSwgdGhpcylcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKClcbiAgICB9KVxufVxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvciAocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0YWNjb3VudDogJycsXG5cdFx0XHRjb250cmFjdDogJycsXG5cdFx0XHRjb250cmFjdEFkZHJlc3M6ICcnLFxuXHRcdFx0aXNUaGlzUGxheWVyT25lOiBmYWxzZSxcbiAgICAgICAgICAgIHNldHVwQ29tcGxldGU6IGZhbHNlLFxuICAgICAgICAgICAgZXNjcm93UGxheWVyT25lOiAnJyxcblx0XHRcdGVzY3Jvd1BsYXllclR3bzogJycsXG5cdFx0XHRzb2NrZXQ6IG51bGwsXG5cdFx0fVxuXHRcdHRoaXMuc2V0dXAoKVxuXHR9XG5cblx0cmVkaXJlY3RUbyhoaXN0b3J5LCBsb2NhdGlvbikge1xuXHRcdGhpc3RvcnkucHVzaChsb2NhdGlvbik7XG5cdH1cblxuICAgIGFzeW5jU2V0U3RhdGUoc3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSwgKCkgPT4gcmVzb2x2ZSgpKVxuICAgICAgICB9KVxuXHR9XG5cdFxuXHRzZXRMaXN0ZW5lcnMoKSB7XG5cdFx0dGhpcy5zdGF0ZS5zb2NrZXQub24oJ3BsYXllci10d28tam9pbmVkJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5yZWRpcmVjdFRvKHRoaXMucHJvcHMuaGlzdG9yeSwgJy9nYW1lJylcbiAgICAgICAgfSlcblx0fVxuXG5cdGFzeW5jIHNldHVwKCkge1xuXHRcdGxldCBhY2NvdW50XG5cdFx0aWYgKHdpbmRvdy5ldGhlcmV1bSkge1xuXHRcdFx0ZXRoZXJldW0uYXV0b1JlZnJlc2hPbk5ldHdvcmtDaGFuZ2UgPSB0cnVlXG5cdFx0XHR3aW5kb3cubXlXZWIzID0gbmV3IFdlYjMoZXRoZXJldW0pXG5cdFx0XHRteVdlYjMuZXRoLnRyYW5zYWN0aW9uQ29uZmlybWF0aW9uQmxvY2tzID0gMSAvL0hhcmQgY29kZSBudW1iZXIgb2YgYmxvY2tzIG5lZWRlZFxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgZXRoZXJldW0uZW5hYmxlKClcblx0XHRcdFx0ZXRoZXJldW0ub24oJ2FjY291bnRzQ2hhbmdlZCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnQWNjb3VudCBDaGFuZ2VkIScpXG5cdFx0XHRcdH0pXG5cdFx0XHRcdGFjY291bnQgPSBldGhlcmV1bS5zZWxlY3RlZEFkZHJlc3Ncblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGFsZXJ0KFwiWW91IG11c3QgYXBwcm92ZSB0aGlzIGRBcHAgdG8gaW50ZXJhY3Qgd2l0aCBpdCwgcmVsb2FkIGFuZCB0cnkgYWdhaW5cIilcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHdpbmRvdy53ZWIzKSB7XG5cdFx0XHR3aW5kb3cubXlXZWIzID0gbmV3IFdlYjMod2ViMy5jdXJyZW50UHJvdmlkZXIpXG5cdFx0XHRsZXQgYWNjb3VudHMgPSBhd2FpdCBteVdlYjMuZXRoLmdldEFjY291bnRzKClcblx0XHRcdGFjY291bnQgPSBhY2NvdW50c1swXVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZygnTm9uLUV0aGVyZXVtIGJyb3dzZXIgZGV0ZWN0ZWQuIFlvdSBzaG91bGQgY29uc2lkZXIgdHJ5aW5nIE1ldGFNYXNrIScpXG5cdFx0XHRhbGVydCgnTWV0YW1hc2sgbm90IGRldGVjdGVkLCBpbnN0YWxsIGl0IG9yIGxvZyBpbiB0byB1c2UgdGhpcyBkQXBwIGFuZCByZWxvYWQgdGhlIHBhZ2UuJylcblx0XHR9XG5cdFx0Y29uc3Qgc29ja2V0ID0gaW8oKVxuXHRcdGF3YWl0IHRoaXMuYXN5bmNTZXRTdGF0ZSh7IGFjY291bnQsIHNldHVwQ29tcGxldGU6IHRydWUsIHNvY2tldCwgfSlcblx0XHR0aGlzLnNldExpc3RlbmVycygpXG5cdH1cblxuXHRyZW5kZXIgKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8QnJvd3NlclJvdXRlcj5cblx0XHRcdFx0PFN3aXRjaD5cblx0XHRcdFx0XHQ8Um91dGUgcGF0aD1cIi9cIiBleGFjdCByZW5kZXI9e2NvbnRleHQgPT4gKFxuXHRcdFx0XHRcdFx0PFdlbGNvbWVQYWdlXG5cdFx0XHRcdFx0XHRcdGhpc3Rvcnk9e2NvbnRleHQuaGlzdG9yeX1cblx0XHRcdFx0XHRcdFx0cmVkaXJlY3RUbz17KGhpc3RvcnksIGxvY2F0aW9uKSA9PiB7XG5cdFx0XHRcdFx0XHRcdCAgdGhpcy5yZWRpcmVjdFRvKGhpc3RvcnksIGxvY2F0aW9uKVxuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpfSAvPlxuXHRcdFx0XHRcdDxSb3V0ZSBwYXRoPVwiL2NyZWF0ZVwiIHJlbmRlcj17Y29udGV4dCA9PiAoXG5cdFx0XHRcdFx0XHQ8Q3JlYXRlUGFnZVxuXHRcdFx0XHRcdFx0XHRjb250cmFjdD17aW5zdGFuY2UgPT4ge3RoaXMuc2V0U3RhdGUoe2NvbnRyYWN0OiBpbnN0YW5jZX0pfX1cblx0XHRcdFx0XHRcdFx0YWNjb3VudD17dGhpcy5zdGF0ZS5hY2NvdW50fVxuXHRcdFx0XHRcdFx0XHRzZXRTdGF0ZT17c3RhdGUgPT4gdGhpcy5zZXRTdGF0ZShzdGF0ZSl9XG5cdFx0XHRcdFx0XHRcdGhpc3Rvcnk9e2NvbnRleHQuaGlzdG9yeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlc2Nyb3dQbGF5ZXJPbmU9e2VzY3Jvd1BsYXllck9uZSA9PiB0aGlzLnNldFN0YXRlKHtlc2Nyb3dQbGF5ZXJPbmV9KX1cblx0XHRcdFx0XHRcdFx0cmVkaXJlY3RUbz17KGhpc3RvcnksIGxvY2F0aW9uKSA9PiB7XG5cdFx0XHRcdFx0XHRcdCAgdGhpcy5yZWRpcmVjdFRvKGhpc3RvcnksIGxvY2F0aW9uKVxuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpfSAvPlxuXHRcdFx0XHRcdDxSb3V0ZSBwYXRoPVwiL2pvaW5cIiByZW5kZXI9e2NvbnRleHQgPT4gKFxuXHRcdFx0XHRcdFx0PEpvaW5QYWdlXG5cdFx0XHRcdFx0XHRcdGFjY291bnQ9e3RoaXMuc3RhdGUuYWNjb3VudH1cblx0XHRcdFx0XHRcdFx0aGlzdG9yeT17Y29udGV4dC5oaXN0b3J5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0YXRlPXtzdGF0ZSA9PiB0aGlzLnNldFN0YXRlKHN0YXRlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlc2Nyb3dQbGF5ZXJUd289e2VzY3Jvd1BsYXllclR3byA9PiB0aGlzLnNldFN0YXRlKHtlc2Nyb3dQbGF5ZXJUd299KX1cblx0XHRcdFx0XHRcdFx0cmVkaXJlY3RUbz17KGhpc3RvcnksIGxvY2F0aW9uKSA9PiB7XG5cdFx0XHRcdFx0XHRcdCAgdGhpcy5yZWRpcmVjdFRvKGhpc3RvcnksIGxvY2F0aW9uKVxuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpfSAvPlxuXHRcdFx0XHRcdDxSb3V0ZSBwYXRoPVwiL2dhbWVcIiByZW5kZXI9e2NvbnRleHQgPT4gKFxuXHRcdFx0XHRcdFx0PEdhbWVQYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dXA9e2FzeW5jICgpID0+IGF3YWl0IHRoaXMuc2V0dXAoKX1cblx0XHRcdFx0XHRcdFx0Y29udHJhY3Q9e3RoaXMuc3RhdGUuY29udHJhY3R9XG5cdFx0XHRcdFx0XHRcdGFjY291bnQ9e3RoaXMuc3RhdGUuYWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1RoaXNQbGF5ZXJPbmU9e3RoaXMuc3RhdGUuaXNUaGlzUGxheWVyT25lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHVwQ29tcGxldGU9e3RoaXMuc3RhdGUuc2V0dXBDb21wbGV0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlc2Nyb3dQbGF5ZXJPbmU9e3RoaXMuc3RhdGUuZXNjcm93UGxheWVyT25lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVzY3Jvd1BsYXllclR3bz17dGhpcy5zdGF0ZS5lc2Nyb3dQbGF5ZXJUd299XG5cdFx0XHRcdFx0XHRcdGhpc3Rvcnk9e2NvbnRleHQuaGlzdG9yeX1cblx0XHRcdFx0XHRcdFx0cmVkaXJlY3RUbz17KGhpc3RvcnksIGxvY2F0aW9uKSA9PiB7XG5cdFx0XHRcdFx0XHRcdCAgdGhpcy5yZWRpcmVjdFRvKGhpc3RvcnksIGxvY2F0aW9uKVxuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpfSAvPlxuXHRcdFx0XHQ8L1N3aXRjaD5cblx0XHRcdDwvQnJvd3NlclJvdXRlcj5cblx0XHQpXG5cdH1cbn1cblxuUmVhY3RET00ucmVuZGVyKFxuXHQ8QXBwIC8+LFxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpXG4pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/client/App.js\n");

/***/ })

})