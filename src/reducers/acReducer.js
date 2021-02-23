import { types } from '../types/types';

export const acReducer = ( state = {}, action ) => {
    
    switch ( action.type ) {
        case types.acFileUpload:
            return {               
                // file: action.file,
                // data: action.data
                data: action.payload
            }

        case types.acFileError:
            return { 
                msgError: action.payload
            }    
        default:
            return state;
    }
}
