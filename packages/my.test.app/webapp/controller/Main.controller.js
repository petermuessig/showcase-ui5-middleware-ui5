sap.ui.define(["./BaseController", "sap/m/MessageBox"], function (BaseController, MessageBox) {
	"use strict";

	return BaseController.extend("my.test.app.controller.Main", {
		sayHello: function () {
			this.getRouter().navTo("other");
		}
	});
});
