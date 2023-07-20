import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class ConversionOptionsResponseWrapper{

	conversionoptions;
	keyModified = new Map();
	/**
	 * The method to get the conversionoptions
	 * @returns {ConversionOption} An instance of ConversionOption
	 */
	getConversionoptions()	{
		return this.conversionoptions;

	}

	/**
	 * The method to set the value to conversionoptions
	 * @param {ConversionOption} conversionoptions An instance of ConversionOption
	 */
	async setConversionoptions(conversionoptions)	{
		const ConversionOption = (await (import("./conversion_option.js"))).MasterModel;
		if((conversionoptions != null) && (!(conversionoptions instanceof ConversionOption)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: conversionoptions EXPECTED TYPE: ConversionOption", null, null);
		}
		this.conversionoptions = conversionoptions;
		this.keyModified.set("__conversion_options", 1);

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
	ConversionOptionsResponseWrapper as MasterModel,
	ConversionOptionsResponseWrapper as ConversionOptionsResponseWrapper
}
