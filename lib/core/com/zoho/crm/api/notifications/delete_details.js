import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class DeleteDetails{

	resourceId;
	resourceUri;
	channelId;
	keyModified = new Map();
	/**
	 * The method to get the resourceId
	 * @returns {BigInt} A BigInt representing the resourceId
	 */
	getResourceId()	{
		return this.resourceId;

	}

	/**
	 * The method to set the value to resourceId
	 * @param {BigInt} resourceId A BigInt representing the resourceId
	 */
	setResourceId(resourceId)	{
		if((resourceId != null) && (!(Object.prototype.toString.call(resourceId) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: resourceId EXPECTED TYPE: BigInt", null, null);
		}
		this.resourceId = resourceId;
		this.keyModified.set("resource_id", 1);

	}

	/**
	 * The method to get the resourceUri
	 * @returns {String} A String representing the resourceUri
	 */
	getResourceUri()	{
		return this.resourceUri;

	}

	/**
	 * The method to set the value to resourceUri
	 * @param {String} resourceUri A String representing the resourceUri
	 */
	setResourceUri(resourceUri)	{
		if((resourceUri != null) && (!(Object.prototype.toString.call(resourceUri) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: resourceUri EXPECTED TYPE: String", null, null);
		}
		this.resourceUri = resourceUri;
		this.keyModified.set("resource_uri", 1);

	}

	/**
	 * The method to get the channelId
	 * @returns {String} A String representing the channelId
	 */
	getChannelId()	{
		return this.channelId;

	}

	/**
	 * The method to set the value to channelId
	 * @param {String} channelId A String representing the channelId
	 */
	setChannelId(channelId)	{
		if((channelId != null) && (!(Object.prototype.toString.call(channelId) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: channelId EXPECTED TYPE: String", null, null);
		}
		this.channelId = channelId;
		this.keyModified.set("channel_id", 1);

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
	DeleteDetails as MasterModel,
	DeleteDetails as DeleteDetails
}
