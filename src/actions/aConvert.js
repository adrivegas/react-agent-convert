import { types } from '../types/types';
import axios from 'axios';

export const uploadFile = () => async dispatch => {

    try{
        const res = await axios.put(`https://suis1hxnd9.execute-api.us-east-1.amazonaws.com/dev/upload-file?fileName=`)
        dispatch( {
            type: types.acFileUpload,
            payload: res.data
        })
    }
    catch(error){
        dispatch( {
            type: types.acFileError,
            payload: error,
        })
    }

}
