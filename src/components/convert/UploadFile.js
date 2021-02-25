import React, { useState } from 'react';
import axios from "axios";

export const UploadFile = () => {

    const [stateFile, setStateFile] = useState({
        selectedFile: null,
        uploadSuccess: null,
        error: null,
    })

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

    const convertHandler = () => {
        console.log('convert');
        axios.get('https://suis1hxnd9.execute-api.us-east-1.amazonaws.com/dev/convert');       
    }

    const downloadHandler = () => {
        
        console.log('xxxx');
        axios.get('https://suis1hxnd9.execute-api.us-east-1.amazonaws.com/dev/download')

        .then(response=>{
            const url = response.data
            console.log(response.data);          
            let elm = document.createElement('a');
            elm.href = url;
            elm.click();
        })
        

    }

    return (
        <div>           
            <div className="mb-5">  
                <h3> <span className="badge badge-pill badge-primary">1</span> Carga de archivos</h3>
                <p className="lead">Para iniciar el proceso de conversión carga los archivos de tu agente en formato .csv</p>             
                <form>
                    <div className="row form-group">
                        <div className="col text-center">
                            <div className="border border-primary rounded p-3">
                                <input
                                    type="file"
                                    className="form-control-file"
                                    id="fileUpload"
                                    onChange={fileChangedHandler}
                                />

                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={uploadHandler}
                                >
                                    Cargar archivo 1
                                </button>

                                <div>
                                    <span>
                                        {stateFile.uploadSuccess
                                            ? "Archivo cargado con éxito!"
                                            : ""}
                                    </span>
                                </div>
                            </div>                           

                        </div>
                        <div  className="col text-center ">
                            <div className="border border-primary rounded p-3 ">
                                <input
                                    type="file"
                                    className="form-control-file"
                                    id="fileUpload"
                                    onChange={fileChangedHandler}
                                />

                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={uploadHandler}
                                >
                                    Cargar archivo 2
                                </button>

                                <div>
                                    <span>
                                        {stateFile.uploadSuccess
                                            ? "Archivo cargado con éxito!"
                                            : ""}
                                    </span>
                                </div>
                            </div>
                            

                        </div>
                    </div>
                </form>
            </div>

            <div className="mb-5">
                <h3> <span className="badge badge-pill badge-primary">2</span> Conversión de archivos</h3>
                <p className="lead">Inicia la conversión automática de tus archivos....</p>
                <div>
                    <div>
                        <button
                            className= "btn btn-primary"
                            onClick={ convertHandler }
                        >
                            Convertir
                        </button>
                    </div>                    
                </div>                    
            </div>

            <div>
                <h3> <span className="badge badge-pill badge-primary">3</span> Descarga archivo .zip</h3>
                <p className="lead">Descarga tu agente Dialogflow y....</p>
                <div>
                    <div>
                        <button
                            className= "btn btn-primary"
                            onClick={ downloadHandler }
                        >
                            Descargar
                        </button>
                    </div>
                </div>
                    
            </div>
        </div>
    )
}
