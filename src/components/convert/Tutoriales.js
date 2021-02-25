import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { uploadFile, acSetUploadFile } from '../../actions/aConvert';

export const Tutoriales = () => {

    const dispatch = useDispatch();
    // const uploadFile = useSelector( state => state.ac );

    // console.log(uploadFile);

    // useEffect(() => {
    //     dispatch(acUploadFile()) 
    // }, [dispatch])

    const handleAttachFile = (e) => {
        console.log('files upload', e.target.files)
        // this.props.acSetUploadFile(e.target.files)
        dispatch(acSetUploadFile(e.target.files))
    }
    const handleUploadFile = (e) => {
        
        dispatch(uploadFile)
    }
    
    return (
        
        <section className="container mt-5 pb-5">
            
            <h1 className="display-5 text-center mb-3">Instrucciones de Uso</h1>   

            <div className="row row-cols-2 mb-5">
                <div className="col text-right"><h1>1</h1></div>
                <div className="col text-left">
                    <p>Prepara el formato tecnico .CSV de tu agente. <small>Puedes descargar una plantilla de ejemplo</small></p>
                    <button 
                        type="button" 
                        className="btn btn-info btn-lg ml-3"
                    >
                        Descargar Plantilla
                    </button>
                </div>
            
            </div>

            <div className="row row-cols-2 mb-5">
                <div className="col text-right">
                    <p>Pulsa la opción "cargar archivo" para iniciar el proceso de conversión</p>
                    <button 
                        type="button" 
                        className="btn btn-primary btn-lg mr-3"
                    >
                        Cargar archivo
                    </button>
                </div>
                <div className="col text-left"><h1>2</h1></div>
            
            </div>

            <div className="row row-cols-2 mb-5">
                <div className="col text-right"><h1>3</h1></div>
                <div className="col text-left">
                    <p>De forma automática iniciará la descarga del agente Dialogflow formato . ZIP</p>
                    <button 
                        type="button" 
                        className="btn btn-secondary btn-lg mr-3"
                    >
                        Convertir
                    </button>
                </div>
            
            </div>

            <div>
                {/* <header>
                    <input type="file" multiple onChange={handleAttachFile}/>
                </header> */}

                <form>
                        <div className="form-group">
                            <input
                                type="file"
                                className="form-control-file"
                                id="fileUpload"
                                onChange={handleAttachFile}
                            />
                            <button
                                    type="button"
                                    className="btn btn-light"
                                    onClick={handleUploadFile}
                                    
                                >
                                    Upload your file
                            </button>
                            

                            <div>
                                {/* <span>
                                    {this.state.uploadSuccess
                                        ? "File Upload Successfully"
                                        : ""}
                                </span> */}
                            </div>
                        </div>
                </form>
            </div>

        </section>
        
    )
}
