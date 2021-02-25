import React, { useState } from 'react';
import axios from "axios";

export const UploadFile = () => {

    const [stateFile, setStateFile] = useState({
        selectedFile: null,
        uploadSuccess: null,
        error: null,
    })

    // state = { selectedFile: null }

    const fileChangedHandler = event => {
        setStateFile({ selectedFile: event.target.files[0] })
    }

    const uploadHandler = () => {
        
        const file = stateFile.selectedFile;
        console.log(file)
        const name = stateFile.selectedFile.name;
        console.log(name)

        axios('https://suis1hxnd9.execute-api.us-east-1.amazonaws.com/dev/upload-file?fileName=' + file.name)
            .then(
                response => {
                    const url = response.data.fileUploadURL;
                console.log(url + 'url')

                axios({
                    method: "PUT",
                    url: url,
                    data: file,
                    headers: { "Content-Type": "multipart/form-data" }
                })
                .then(res => {
                    setStateFile({
                        uploadSuccess: "File upload successfull",
                        error: null
                    });
                })
                .catch(err => {
                    setStateFile({
                        error: "Error Occured while uploading the file",
                        uploadSuccess: null
                    });
                });
                }
            )
    }

    return (
        <div>
            <h1>Upload File</h1>

            <div>               
                <form>
                        <div className="form-group">
                            <input
                                type="file"
                                className="form-control-file"
                                id="fileUpload"
                                onChange={fileChangedHandler}
                            />
                            <button
                                type="button"
                                className="btn btn-light"
                                onClick={uploadHandler}
                            >
                                Upload your file
                            </button>
                            

                            <div>
                                <span>
                                    {stateFile.uploadSuccess
                                        ? "File Upload Successfully"
                                        : ""}
                                </span>
                            </div>
                        </div>
                </form>
            </div>

            <div>
                    <div>
                        <button
                            // onClick={e => {
                            //     this.convert();
                            // }}
                        
                        >
                            convertir
                        </button>
                    </div>
                    <div>
                        <button id="xxx" 
                            // onClick={e => {
                            //     this.download();
                            // }}
                        >
                            Descargar
                        </button>
                    </div>
                </div>

           
        </div>
    )
}
