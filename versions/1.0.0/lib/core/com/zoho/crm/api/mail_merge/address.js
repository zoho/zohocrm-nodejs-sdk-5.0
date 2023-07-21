import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Address{

	addressValueMap;
	keyModified = new Map();
	/**
	 * The method to get the addressValueMap
	 * @returns {AddressValueMap} An instance of AddressValueMap
	 */
	getAddressValueMap()	{
		return this.addressValueMap;

	}

	/**
	 * The method to set the value to addressValueMap
	 * @param {AddressValueMap} addressValueMap An instance of AddressValueMap
	 */
	async setAddressValueMap(addressValueMap)	{
		const AddressValueMap = (await (import("./address_value_map.js"))).MasterModel;
		if((addressValueMap != null) && (!(addressValueMap instanceof AddressValueMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: addressValueMap EXPECTED TYPE: AddressValueMap", null, null);
		}
		this.addressValueMap = addressValueMap;
		this.keyModified.set("Address_Value_Map", 1);

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
	Address as MasterModel,
	Address as Address
}
