
var clientAPI;

/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function OTFilter(clientAPI) {
    return [{
			"DisplayValue": "New",
			"ReturnValue": "N"
		},
		{
			"DisplayValue": "Rejected",
			"ReturnValue": "R"
		}];
}
