import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";

// REMINDER:
// ---------
// Although the "pdfmake" is a dependency and used by the "my.test.tsapp",
// when running embedded in the "my.test.app" it also requires
// a dependency to "pdfmake" and the usage of "ui5-tooling-modules"
// to be able to generate the UI5 AMD-like modules for that dependency
// ---
// The reason for this is that the below import statements are translated
// to "/resources/pdfmake/build/(pdfmake|vfsfonts)" and this request is
// handled by the "my.test.app" - that's why it also requires the dependency
// to "ui5-tooling-modules" and the "pdfmake"! Once built this is not needed
// anymore - that's just for development time!

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";

const myPdfMake =  pdfMake;
myPdfMake.vfs = pdfFonts.pdfMake.vfs;
console.log(myPdfMake);

/**
 * @namespace my.test.tsapp.controller
 */
export default class Main extends BaseController {
	public sayHello(): void {
		this.onNavBack();
	}
}
