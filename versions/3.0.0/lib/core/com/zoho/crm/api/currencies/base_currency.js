import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class BaseCurrency{

	prefixSymbol;
	isoCode;
	symbol;
	exchangeRate;
	format;
	id;
	isActive;
	name;
	keyModified = new Map();
	/**
	 * The method to get the prefixSymbol
	 * @returns {Boolean} A Boolean representing the prefixSymbol
	 */
	getPrefixSymbol()	{
		return this.prefixSymbol;

	}

	/**
	 * The method to set the value to prefixSymbol
	 * @param {Boolean} prefixSymbol A Boolean representing the prefixSymbol
	 */
	setPrefixSymbol(prefixSymbol)	{
		if((prefixSymbol != null) && (!(Object.prototype.toString.call(prefixSymbol) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: prefixSymbol EXPECTED TYPE: Boolean", null, null);
		}
		this.prefixSymbol = prefixSymbol;
		this.keyModified.set("prefix_symbol", 1);

	}

	/**
	 * The method to get the isoCode
	 * @returns {String} A String representing the isoCode
	 */
	getIsoCode()	{
		return this.isoCode;

	}

	/**
	 * The method to set the value to isoCode
	 * @param {String} isoCode A String representing the isoCode
	 */
	setIsoCode(isoCode)	{
		if((isoCode != null) && (!(Object.prototype.toString.call(isoCode) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: isoCode EXPECTED TYPE: String", null, null);
		}
		this.isoCode = isoCode;
		this.keyModified.set("iso_code", 1);

	}

	/**
	 * The method to get the symbol
	 * @returns {String} A String representing the symbol
	 */
	getSymbol()	{
		return this.symbol;

	}

	/**
	 * The method to set the value to symbol
	 * @param {String} symbol A String representing the symbol
	 */
	setSymbol(symbol)	{
		if((symbol != null) && (!(Object.prototype.toString.call(symbol) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: symbol EXPECTED TYPE: String", null, null);
		}
		this.symbol = symbol;
		this.keyModified.set("symbol", 1);

	}

	/**
	 * The method to get the exchangeRate
	 * @returns {String} A String representing the exchangeRate
	 */
	getExchangeRate()	{
		return this.exchangeRate;

	}

	/**
	 * The method to set the value to exchangeRate
	 * @param {String} exchangeRate A String representing the exchangeRate
	 */
	setExchangeRate(exchangeRate)	{
		if((exchangeRate != null) && (!(Object.prototype.toString.call(exchangeRate) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: exchangeRate EXPECTED TYPE: String", null, null);
		}
		this.exchangeRate = exchangeRate;
		this.keyModified.set("exchange_rate", 1);

	}

	/**
	 * The method to get the format
	 * @returns {Format} An instance of Format
	 */
	getFormat()	{
		return this.format;

	}

	/**
	 * The method to set the value to format
	 * @param {Format} format An instance of Format
	 */
	async setFormat(format)	{
		const Format = (await (import("./format.js"))).MasterModel;
		if((format != null) && (!(format instanceof Format)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: format EXPECTED TYPE: Format", null, null);
		}
		this.format = format;
		this.keyModified.set("format", 1);

	}

	/**
	 * The method to get the id
	 * @returns {BigInt} A BigInt representing the id
	 */
	getId()	{
		return this.id;

	}

	/**
	 * The method to set the value to id
	 * @param {BigInt} id A BigInt representing the id
	 */
	setId(id)	{
		if((id != null) && (!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		this.id = id;
		this.keyModified.set("id", 1);

	}

	/**
	 * The method to get the isActive
	 * @returns {Boolean} A Boolean representing the isActive
	 */
	getIsActive()	{
		return this.isActive;

	}

	/**
	 * The method to set the value to isActive
	 * @param {Boolean} isActive A Boolean representing the isActive
	 */
	setIsActive(isActive)	{
		if((isActive != null) && (!(Object.prototype.toString.call(isActive) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: isActive EXPECTED TYPE: Boolean", null, null);
		}
		this.isActive = isActive;
		this.keyModified.set("is_active", 1);

	}

	/**
	 * The method to get the name
	 * @returns {String} A String representing the name
	 */
	getName()	{
		return this.name;

	}

	/**
	 * The method to set the value to name
	 * @param {String} name A String representing the name
	 */
	setName(name)	{
		if((name != null) && (!(Object.prototype.toString.call(name) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: name EXPECTED TYPE: String", null, null);
		}
		this.name = name;
		this.keyModified.set("name", 1);

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
	BaseCurrency as MasterModel,
	BaseCurrency as BaseCurrency
}
