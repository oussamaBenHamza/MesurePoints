
var clientAPI;

/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function FiltersJS(clientAPI) {
    var filterObj = {
        name: 'pointMesures/AUFNR',
		values: [{ReturnValue: 'testJS1',
					DisplayValue: 'testJS1'},{ReturnValue: 'testJS2',
					DisplayValue: 'testJS2'}]
    };

    
    return filterObj;
}
