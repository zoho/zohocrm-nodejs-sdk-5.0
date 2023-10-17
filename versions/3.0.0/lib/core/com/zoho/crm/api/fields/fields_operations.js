import {Param} from "../../../../../../routes/param.js";
import {ParameterMap} from "../../../../../../routes/parameter_map.js";
import {APIResponse} from "../../../../../../routes/controllers/api_response.js";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";
import {createRequire} from "node:module";

class FieldsOperations{
	/**
	 * The method to get fields
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getFields(paramInstance=null)	{
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v5/settings/fields");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to get field
	 * @param {BigInt} field A BigInt representing the field
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getField(field, paramInstance=null)	{
		if((!(Object.prototype.toString.call(field) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: field EXPECTED TYPE: BigInt", null, null);
		}
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v5/settings/fields/");
		apiPath = apiPath.concat(field.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

}
class GetFieldsParam{

	static MODULE = new Param("module", "com.zoho.crm.api.Fields.GetFieldsParam");
	static DATA_TYPE = new Param("data_type", "com.zoho.crm.api.Fields.GetFieldsParam");
	static TYPE = new Param("type", "com.zoho.crm.api.Fields.GetFieldsParam");
	static INCLUDE = new Param("include", "com.zoho.crm.api.Fields.GetFieldsParam");
	static FEATURE_NAME = new Param("feature_name", "com.zoho.crm.api.Fields.GetFieldsParam");
	static COMPONENT = new Param("component", "com.zoho.crm.api.Fields.GetFieldsParam");
	static LAYOUT_ID = new Param("layout_id", "com.zoho.crm.api.Fields.GetFieldsParam");
}

class GetFieldParam{

	static MODULE = new Param("module", "com.zoho.crm.api.Fields.GetFieldParam");
	static INCLUDE = new Param("include", "com.zoho.crm.api.Fields.GetFieldParam");
}

export {
	GetFieldsParam as GetFieldsParam,
	GetFieldParam as GetFieldParam,
	FieldsOperations as MasterModel,
	FieldsOperations as FieldsOperations
}
