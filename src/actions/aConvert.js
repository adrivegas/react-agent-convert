import { types } from '../types/types';
import axios from 'axios';

export const acSetUploadFile = data => ({
    type: types.acSetUploadFile,
    payload: data,
})


export const acSetUploadProgress = (id, progress) => ({
    type: types.acSetUploadProgress,
    payload: {
    id,
    progress,
    },
})

export const acSuccessUploadFile = id => ({
    type: types.acSuccessUploadFile,
    payload: id,
})

export const acFailureUploadFile = id => ({
    type: types.acFailureUploadFile,
    payload: id,
})

export const uploadFile = files => dispatch => {
    if (files.length) {
        files.forEach(async file => {
            const formPayload = new FormData()
            formPayload.append('file', file.file)
            try {
                await axios({
                baseURL: 'http://localhost:5000',
                url: '/file',
                method: 'post',
                data: formPayload,
                onUploadProgress: progress => {
                    const { loaded, total } = progress
                    const percentageProgress = Math.floor((loaded/total) * 100)
                    dispatch(acSetUploadProgress(file.id, percentageProgress))
                },
                })
                dispatch(acSuccessUploadFile(file.id))
            } catch (error) {
                dispatch(acFailureUploadFile(file.id))
            }
        })
    }
}
// export const uploadFile = () => {  

    
//         fileToUpload: undefined,
//         uploadSuccess: undefined,
//         error: undefined

//     try{
//         axios(
//             "https://suis1hxnd9.execute-api.us-east-1.amazonaws.com/dev/upload-file?fileName=" +
//                 this.state.fileToUpload.name
//         ).then(response => {
//             // Getting the url from response
//             const url = response.data.fileUploadURL;
//             console.log(response)

//             axios({
//                 method: "PUT",
//                 url: url,
//                 data: this.state.fileToUpload,
//                 headers: { "Content-Type": "multipart/form-data" }
//             })
//                 .then(res => {
//                     this.setState({
//                         uploadSuccess: "File upload successfull",
//                         error: undefined
//                     });
//                 })
//                 .catch(err => {
//                     this.setState({
//                         error: "Error Occured while uploading the file",
//                         uploadSuccess: undefined
//                     });
//                 });
//         });
//         dispatch( {
//             type: types.acFileUpload,
//             payload: data,
//         })
//     }
//     catch(error){
//         dispatch( {
//             type: types.acFileError,
//             payload: error,
//         })
//     }

// }
