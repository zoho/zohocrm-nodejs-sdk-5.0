import {Param} from "../../../../../../routes/param.js";
import {APIResponse} from "../../../../../../routes/controllers/api_response.js";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";
import {createRequire} from "node:module";

class EntityScoresOperations{

	fields;
	/**
	 * Creates an instance of EntityScoresOperations with the given parameters
	 * @param {String} fields A String representing the fields
	 */
	constructor(fields=null){
		if((fields != null) && (!(Object.prototype.toString.call(fields) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fields EXPECTED TYPE: String", null, null);
		}
		this.fields = fields;

	}

	/**
	 * The method to get module
	 * @param {BigInt} recordId A BigInt representing the recordId
	 * @param {String} module A String representing the module
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getModule(recordId, module)	{
		if((!(Object.prototype.toString.call(recordId) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: recordId EXPECTED TYPE: BigInt", null, null);
		}
		if((!(Object.prototype.toString.call(module) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: String", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v5/");
		apiPath = apiPath.concat(module.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(recordId.toString());
		apiPath = apiPath.concat("/Entity_Scores__s");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addParam(new Param("fields", "com.zoho.crm.api.EntityScores.GetModuleParam"), this.fields).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to get modules
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getModules()	{
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v5/Entity_Scores__s");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addParam(new Param("fields", "com.zoho.crm.api.EntityScores.GetModulesParam"), this.fields).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

}
class GetModuleParam{

}

class GetModulesParam{

}

export {
	GetModuleParam as GetModuleParam,
	GetModulesParam as GetModulesParam,
	EntityScoresOperations as MasterModel,
	EntityScoresOperations as EntityScoresOperations
}
