/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "@apollo/server":
/*!*********************************!*\
  !*** external "@apollo/server" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/server");

/***/ }),

/***/ "@as-integrations/aws-lambda":
/*!**********************************************!*\
  !*** external "@as-integrations/aws-lambda" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@as-integrations/aws-lambda");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!******************!*\
  !*** ./index.ts ***!
  \******************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.graphqlHandler = void 0;
const server_1 = __webpack_require__(/*! @apollo/server */ "@apollo/server");
const aws_lambda_1 = __webpack_require__(/*! @as-integrations/aws-lambda */ "@as-integrations/aws-lambda");
const typeDefs = `
  type Query {
    hello: String
  }
`;
const resolvers = {
    Query: {
        hello: () => {
            console.log('try try');
            return 'meow';
        }
    }
};
const server = new server_1.ApolloServer({
    typeDefs,
    resolvers,
    introspection: false
});
exports.graphqlHandler = (0, aws_lambda_1.startServerAndCreateLambdaHandler)(server, 
// We will be using the Proxy V2 handler
aws_lambda_1.handlers.createAPIGatewayProxyEventV2RequestHandler());
/*
module.exports.handler = async (event: Event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v3.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};

*/

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=index.js.map