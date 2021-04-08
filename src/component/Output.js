import React, { useState } from "react"
import Process from './Process'

function Output(){
    const[out,setOut] = useState(0)
    var choice=1
    function handleOut(){
        if(choice == 1) setOut(out=0);
        if(choice == 2) setOut(out=1);
        if(choice == 3) setOut(out=2);
    }
    return(
        <div>
            <div className= "uploadSquare">
                <p className = "body-app"> Upload Your Cat Image Here</p>
                { image.preview && <img src={image.preview} className= "uploadSquare2" />}
      

                <div  className ={"buttonLabel"}  >
                    <input id ="put" type="file" className="input_" accept="image/jpeg,png" onChange={handleChange}/>
                    <label htmlFor="put" style={{cursor:"pointer"}} >
                        <p className="chooseFile">Choose File</p>
                    </label>
            </div>  
        </div>
        
        <Process></Process>
        </div>
    )
}
export default Output;