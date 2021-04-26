import React, {useState, useEffect} from "react";
import {useHistory} from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import axios from 'axios';
import css from "css";


function Upload() {
    const [image, setImage] = useState({preview: null, raw: ""});
    const [process, setProcess] = useState(false);
    const [getMessage, setGetMessage] = useState({});
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const [uploadBoxClass,setUploadBoxClass] = useState("uploadSquare");

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
        console.log("HandleUpload");
        var r = "";
        setLoading(true);
        await axios({
            method: 'POST',
            url: ' https://767cb82585d3.ngrok.io/cat',
            data: formData,
            headers: {'Content-Type': 'multipart/form-data'}
        })
            .then(function (response) {
                console.log('res', response.data)
                r = response.data.predictClass;
            })
            .catch(function (response) {
                console.log(response)
            });
        history.push({
            pathname: "/result",
            state: { img: image.raw, rep: r },
            // state: {img: image.raw, rep: "Snowshoe"}, // Test
        });
    };

    const dragOver = (e) => {
        e.preventDefault();
        setUploadBoxClass("uploadSquareOnDrag");
    }
    const dragEnter = (e) => {
        e.preventDefault();
    }
    const dragLeave = (e) => {
        e.preventDefault();
        setUploadBoxClass("uploadSquare");
    }
    const fileDrop = (e) => {
        e.preventDefault();
        setUploadBoxClass("uploadSquare");
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
        <div className={"UploadArea"}>
            <span className="body-app">Upload Your Cat Image Here</span>
            <div className={uploadBoxClass} action="" method="post"
                 onDragOver={dragOver}
                 onDragEnter={dragEnter}
                 onDragLeave={dragLeave}
                 onDrop={fileDrop}>
                {
                    image.preview ? (
                        <img alt={"preview image"} src={image.preview} className="uploadSquare2"/>
                    ) : (<ChooseImageDialog/>)
                }
                {process ?
                    (
                        <div className={"ActionButtonGroup"}>
                            <div className="CancelButton" onClick={() => {
                                setProcess(false);
                                image.preview = null;
                            }}>CANCEL
                            </div>
                            {
                                <div className="ProcessButton" onClick={loading ? null : (handleUpload)}>
                                    {loading ? (
                                        <ClipLoader color={"#ffffff"} loading={loading} size={"18px"}/>
                                    ) : (
                                        "PROCESS"
                                    )}
                                </div>
                            }
                        </div>
                    ) : (
                        <div className={"buttonLabel"}>
                            <input id="put" type="file" className="input_" accept="image/jpeg,image/png"
                                   onChange={handleChange}/>
                            <label htmlFor="put" style={{cursor: "pointer"}}>
                                <div className={"Button"}>CHOOSE IMAGE</div>
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