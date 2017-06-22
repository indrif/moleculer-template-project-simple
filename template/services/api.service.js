"use strict";

const ApiGateway = require("moleculer-web");

module.exports = {
	name: "api",
	mixins: ApiGateway,

	// More info about settings: http://moleculer.services/docs/moleculer-web.html
	settings: {

		routes: [{
			path: "/",
			whitelist: [
				// Access to any actions in all services
				"*"
			]
		}]

	}
};