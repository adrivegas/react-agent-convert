import { types } from '../types/types';

const initialState = {
    // fileToUpload: undefined,
    // uploadSuccess: undefined,
    // error: undefined
    fileProgress: {
        id: 1,
        file: {},
        progress: 0,
    },
}

export const acReducer = ( state = initialState, action ) => {    
    
    switch ( action.type ) {
        case types.acSetUploadFile:
            return {               
                ...state,
                fileProgress: {
                    ...state.fileProgress,
                }
                // data: action.payload
            }

        case types.acSetUploadProgress:
            return {               
                ...state.fileProgress,
                [action.payload.id]: {
                    ...state.fileProgress[action.payload.id],
                    progress: action.payload.progress,
                },                
            }
        
        case types.acSuccessUploadFile:
            return {               
                ...state,
                fileProgress: {
                    ...state.fileProgress,
                    [action.payload]: {
                        ...state.fileProgress[action.payload],
                        status: 1,
                    },
                },                
            }

        case types.acFailureUploadFile:
            return { 
                ...state,
                fileProgress: {
                    ...state.fileProgress,
                    [action.payload]: {
                        ...state.fileProgress[action.payload],
                        status: 0,
                        progress: 0,
                    },
                },
            }    
        default:
            return state;
    }
}
