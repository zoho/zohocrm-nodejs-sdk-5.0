import {Param} from "../../../../../../routes/param.js";
import {ParameterMap} from "../../../../../../routes/parameter_map.js";
import {APIResponse} from "../../../../../../routes/controllers/api_response.js";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";
import {createRequire} from "node:module";

class UserTypeUsersOperations{
	/**
	 * The method to get users of user type
	 * @param {BigInt} userTypeId A BigInt representing the userTypeId
	 * @param {String} portalName A String representing the portalName
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getUsersOfUserType(userTypeId, portalName, paramInstance=null)	{
		if((!(Object.prototype.toString.call(userTypeId) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: userTypeId EXPECTED TYPE: BigInt", null, null);
		}
		if((!(Object.prototype.toString.call(portalName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: portalName EXPECTED TYPE: String", null, null);
		}
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v5/settings/portals/");
		apiPath = apiPath.concat(portalName.toString());
		apiPath = apiPath.concat("/user_type/");
		apiPath = apiPath.concat(userTypeId.toString());
		apiPath = apiPath.concat("/users");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

}
class GetUsersofUserTypeParam{

	static FILTERS = new Param("filters", "com.zoho.crm.api.UserTypeUsers.GetUsersofUserTypeParam");
	static TYPE = new Param("type", "com.zoho.crm.api.UserTypeUsers.GetUsersofUserTypeParam");
}

export {
	GetUsersofUserTypeParam as GetUsersofUserTypeParam,
	UserTypeUsersOperations as MasterModel,
	UserTypeUsersOperations as UserTypeUsersOperations
}
