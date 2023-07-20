import {Param} from "../../../../../../routes/param.js";
import {ParameterMap} from "../../../../../../routes/parameter_map.js";
import {APIResponse} from "../../../../../../routes/controllers/api_response.js";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";
import {createRequire} from "node:module";

class PortalUserTypeOperations{

	portal;
	/**
	 * Creates an instance of PortalUserTypeOperations with the given parameters
	 * @param {String} portal A String representing the portal
	 */
	constructor(portal){
		if((!(Object.prototype.toString.call(portal) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: portal EXPECTED TYPE: String", null, null);
		}
		this.portal = portal;

	}

	/**
	 * The method to get user types
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getUserTypes(paramInstance=null)	{
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v5/settings/portals/");
		apiPath = apiPath.concat(this.portal.toString());
		apiPath = apiPath.concat("/user_type");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to get user type
	 * @param {String} userTypeId A String representing the userTypeId
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getUserType(userTypeId)	{
		if((!(Object.prototype.toString.call(userTypeId) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: userTypeId EXPECTED TYPE: String", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v5/settings/portals/");
		apiPath = apiPath.concat(this.portal.toString());
		apiPath = apiPath.concat("/user_type/");
		apiPath = apiPath.concat(userTypeId.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

}
class GetUserTypesParam{

	static INCLUDE = new Param("include", "com.zoho.crm.api.PortalUserType.GetUserTypesParam");
}

export {
	GetUserTypesParam as GetUserTypesParam,
	PortalUserTypeOperations as MasterModel,
	PortalUserTypeOperations as PortalUserTypeOperations
}
