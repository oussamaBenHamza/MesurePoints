
var clientAPI;

/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function TypeDeTravailFilter(clientAPI) {
    var filterObj = {
		name: 'TYPE_TRAVAIL',
		values: [{
            ReturnValue: 'COR',
		    DisplayValue: 'Correctif'},{
            ReturnValue: 'PRE',
		    DisplayValue: 'Preventif'    
            }]
    };
    return filterObj;
}
