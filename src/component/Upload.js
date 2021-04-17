import React, {useState,useEffect} from "react";
import {useHistory} from 'react-router-dom';
import axios from 'axios';


function Upload() {
    const [image, setImage] = useState({preview: null, raw: ""});
    const [process, setProcess] = useState(false);
    const [getMessage, setGetMessage] = useState({})
    const history = useHistory();



    const handleChange = e => {
        console.log(e.target.files[0].name)
        if (e.target.files.length) {
            setImage({
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0]
            });
        }
        setProcess(!process)
        console.log('image change', image)
    };


    const handleUpload = async e => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('image', image.raw);
        await axios({
            method: 'POST',
            url: 'http://localhost:5000/cat',
            data: formData,
            headers: {'Content-Type': 'multipart/form-data'}
            })
            .then(function (response) {
                console.log('res',response.data)
            })
            .catch(function (response) {
                console.log(response)
        });
        history.push("/result");
    };

    const dragOver = (e) => {
        e.preventDefault();
    }
    const dragEnter = (e) => {
        e.preventDefault();
    }
    const dragLeave = (e) => {
        e.preventDefault();
    }
    const fileDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        const validTypes = ['image/jpeg', 'image/png']
        if (validTypes.indexOf(file.type) !== -1) {
            setImage({
                preview: URL.createObjectURL(file),
                raw: file
            });
            setProcess(true);
        }
        console.log(file);
    }

    return (
        <div className={"UploadArea"}
             onDragOver={dragOver}
             onDragEnter={dragEnter}
             onDragLeave={dragLeave}
             onDrop={fileDrop}
        >
            <span className="body-app">Upload Your Cat Image Here</span>
            <div className="uploadSquare" action="" method="post">
                {
                    image.preview ? (
                        <img alt={"preview image"} src={image.preview} className="uploadSquare2"/>
                    ) : (<ChooseImageDialog/>)
                }
                {process ?
                    (
                        <div className="ProcessButton" onClick={handleUpload}>PROCESS</div>
                    ) : (
                        <div className={"buttonLabel"}>
                            <input id="put" type="file" className="input_" accept="image/jpeg,png"
                                   onChange={handleChange}/>
                            <label htmlFor="put" style={{cursor: "pointer"}}>
                                <div className={"Button"}>CHOOSE FILE</div>
                            </label>
                        </div>
                    )
                }
                
                </div>
            
        </div>
    )
}

function ChooseImageDialog() {
    return (
        <div className={"ChooseImageDialog"}>
            <img src={"photo-upload.svg"} alt={"photo upload icon"}/>
            <span>Drag and drop image here</span>
        </div>
    );
}


export default Upload;