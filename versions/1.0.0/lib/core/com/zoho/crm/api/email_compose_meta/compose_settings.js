import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class ComposeSettings{

	defaultFromAddress;
	fontSize;
	fontFamily;
	emailSignatures;
	keyModified = new Map();
	/**
	 * The method to get the defaultFromAddress
	 * @returns {DefaultForm} An instance of DefaultForm
	 */
	getDefaultFromAddress()	{
		return this.defaultFromAddress;

	}

	/**
	 * The method to set the value to defaultFromAddress
	 * @param {DefaultForm} defaultFromAddress An instance of DefaultForm
	 */
	async setDefaultFromAddress(defaultFromAddress)	{
		const DefaultForm = (await (import("./default_form.js"))).MasterModel;
		if((defaultFromAddress != null) && (!(defaultFromAddress instanceof DefaultForm)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: defaultFromAddress EXPECTED TYPE: DefaultForm", null, null);
		}
		this.defaultFromAddress = defaultFromAddress;
		this.keyModified.set("default_from_address", 1);

	}

	/**
	 * The method to get the fontSize
	 * @returns {number} A number representing the fontSize
	 */
	getFontSize()	{
		return this.fontSize;

	}

	/**
	 * The method to set the value to fontSize
	 * @param {number} fontSize A number representing the fontSize
	 */
	setFontSize(fontSize)	{
		if((fontSize != null) && (!(Object.prototype.toString.call(fontSize) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fontSize EXPECTED TYPE: number", null, null);
		}
		this.fontSize = fontSize;
		this.keyModified.set("font_size", 1);

	}

	/**
	 * The method to get the fontFamily
	 * @returns {String} A String representing the fontFamily
	 */
	getFontFamily()	{
		return this.fontFamily;

	}

	/**
	 * The method to set the value to fontFamily
	 * @param {String} fontFamily A String representing the fontFamily
	 */
	setFontFamily(fontFamily)	{
		if((fontFamily != null) && (!(Object.prototype.toString.call(fontFamily) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fontFamily EXPECTED TYPE: String", null, null);
		}
		this.fontFamily = fontFamily;
		this.keyModified.set("font_family", 1);

	}

	/**
	 * The method to get the emailSignatures
	 * @returns {Array} An Array representing the emailSignatures
	 */
	getEmailSignatures()	{
		return this.emailSignatures;

	}

	/**
	 * The method to set the value to emailSignatures
	 * @param {Array} emailSignatures An Array representing the emailSignatures
	 */
	setEmailSignatures(emailSignatures)	{
		if((emailSignatures != null) && (!(Object.prototype.toString.call(emailSignatures) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: emailSignatures EXPECTED TYPE: Array", null, null);
		}
		this.emailSignatures = emailSignatures;
		this.keyModified.set("email_signatures", 1);

	}

	/**
	 * The method to check if the user has modified the given key
	 * @param {String} key A String representing the key
	 * @returns {number} A number representing the modification
	 */
	isKeyModified(key)	{
		if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
		}
		if(this.keyModified.has(key))	{
			return this.keyModified.get(key);
		}
		return null;

	}

	/**
	 * The method to mark the given key as modified
	 * @param {String} key A String representing the key
	 * @param {number} modification A number representing the modification
	 */
	setKeyModified(key, modification)	{
		if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
		}
		if((modification != null) && (!(Object.prototype.toString.call(modification) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modification EXPECTED TYPE: number", null, null);
		}
		this.keyModified.set(key, modification);

	}

}
export {
	ComposeSettings as MasterModel,
	ComposeSettings as ComposeSettings
}
