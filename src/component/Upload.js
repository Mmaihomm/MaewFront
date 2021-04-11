import React, {useState} from "react";
import { useHistory } from 'react-router-dom';
import Process from './Process'
import axios from 'axios';


function Upload() {
    const [image, setImage] = useState({preview: "def.png", raw: ""});
    const [process, setProcess] = useState(true);
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
        // e.preventDefault();
        // let formData = new FormData();
        // formData.append('image', image.raw);
        // await axios({
        //     method: 'POST',
        //     url: 'http://localhost:5000/cat',
        //     data: formData,
        //     headers: {'Content-Type': 'multipart/form-data'}
        //     })
        //     .then(function (response) {
        //         console.log('res',response)
        //     })
        //     .catch(function (response) {
        //         console.log(response)
        // });
        history.push("/result");
    };

    return (
        <div className={"UploadArea"}>
            <span className="body-app">Upload Your Cat Image Here</span>
            <div className="uploadSquare" action="" method="post">
                {image.preview && <img src={image.preview} className="uploadSquare2"/>}


                {process ?
                    (
                        <div className={"buttonLabel"}>

                            <input id="put" type="file" className="input_" accept="image/jpeg,png"
                                   onChange={handleChange}/>
                            <label htmlFor="put" style={{cursor: "pointer"}}>
                                <p className="chooseFile">CHOOSE FILE</p>
                            </label>
                        </div>) : (<div className="body-app">

                        <button style={{
                            width: "100px",
                            height: "20px",
                            padding: "0",
                            backgroundColor: "rgb(226, 177, 85)",
                            borderRadius: "5px"
                        }} onClick={handleUpload}>Process
                        </button>

                    </div>)
                }
            </div>
            {/*<Process></Process>*/}
        </div>
    )
}

export default Upload;