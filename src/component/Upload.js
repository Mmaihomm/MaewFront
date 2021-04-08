import React, { useState } from "react";
import Process from './Process'


function Upload(){
    const [image, setImage] = useState({ preview: "def.png", raw: "" });
    const [process,setProcess] = useState(true);
    

    const handleChange = e => {
        if (e.target.files.length) {
            setImage({
            preview: URL.createObjectURL(e.target.files[0]),
            raw: e.target.files[0]
            });
        }
        setProcess(!process)
    };

    const handleUpload = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image.raw);
    
        await fetch("YOUR_URL", {
          method: "POST",
          headers: {
            "Content-Type": "multipart/form-data"
          },
          body: formData
        });
      };
    
    return(
    <div>
       
        <div className= "uploadSquare">
                <p className = "body-app"> Upload Your Cat Image Here</p>
                { image.preview && <img src={image.preview} className= "uploadSquare2" />}

                
                { process?
                (   
                    <div  className ={"buttonLabel"}  >
                        
                        <input id ="put" type="file" className="input_" accept="image/jpeg,png" onChange={handleChange} />
                        <label htmlFor="put" style={{cursor:"pointer"}} >
                            <p className="chooseFile">Choose File</p>
                        </label>
                    </div> ):(<div className = "body-app">
                         
                            <button style={{width: "100px",height:"20px", padding:"0",backgroundColor:"rgb(226, 177, 85)", borderRadius:"5px"}} onClick={handleUpload}>Process</button>
                            
                            </div>)
            }
        </div>

        
        
        <Process></Process>
        
    </div>
    )
}

export default Upload;