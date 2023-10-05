import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";

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
