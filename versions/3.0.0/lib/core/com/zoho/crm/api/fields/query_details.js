import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class QueryDetails{

	queryId;
	criteria;
	keyModified = new Map();
	/**
	 * The method to get the queryId
	 * @returns {BigInt} A BigInt representing the queryId
	 */
	getQueryId()	{
		return this.queryId;

	}

	/**
	 * The method to set the value to queryId
	 * @param {BigInt} queryId A BigInt representing the queryId
	 */
	setQueryId(queryId)	{
		if((queryId != null) && (!(Object.prototype.toString.call(queryId) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: queryId EXPECTED TYPE: BigInt", null, null);
		}
		this.queryId = queryId;
		this.keyModified.set("query_id", 1);

	}

	/**
	 * The method to get the criteria
	 * @returns {Map} A Map representing the criteria
	 */
	getCriteria()	{
		return this.criteria;

	}

	/**
	 * The method to set the value to criteria
	 * @param {Map} criteria A Map representing the criteria
	 */
	setCriteria(criteria)	{
		if((criteria != null) && (!(Object.prototype.toString.call(criteria) == "[object Map]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: criteria EXPECTED TYPE: Map", null, null);
		}
		this.criteria = criteria;
		this.keyModified.set("criteria", 1);

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
	QueryDetails as MasterModel,
	QueryDetails as QueryDetails
}
