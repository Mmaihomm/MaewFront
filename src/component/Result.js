import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";

function Result() {
    const [image, setImage] = useState({preview: "CatResult.jpg"});
    const [output, setOut] = useState("Persian");
    const [know, setKnow] = useState({
        preview: "Persiandsgjerkfldjgy",
    });
    const history = useHistory();

    const handleBackHome = async (e) => {
        history.push("/");
    };
    useEffect(() => {
        if (output === "Maine coon") {
            setKnow({
                preview:
                    "As one of the oldest cat breeds, Persian cats can be traced all the way back to the 1600s. While there are question marks about where they came from, they're believed to have originated in Mesopotamia, later called Persia (hence the name), which is now modern day Iran.",
            });
        } else if (output === "Persian") {
            setKnow({
                preview:
                    "As one of the oldest cat breeds, Persian cats can be traced all the way back to the 1600s. While there are question marks about where they came from, they're believed to have originated in Mesopotamia, later called Persia (hence the name), which is now modern day Iran.",
            });
        } else if (output === "Russian blue") {
            setKnow({
                preview:
                    "As one of the oldest cat breeds, Persian cats can be traced all the way back to the 1600s. While there are question marks about where they came from, they're believed to have originated in Mesopotamia, later called Persia (hence the name), which is now modern day Iran.",
            });
        }
    }, []);

    return (
        <div className="resultGroup">
            <div className="resultArea">
                <img
                    className={"boxImg"}
                    alt={"result img"}
                    src={image.preview}
                />
                <div className={"resultText"}>
                    <div className="boxTextResult">
                        <p
                            style={{
                                fontFamily: "Montserrat",
                                textAlign: "center",
                                fontSize: "20px",
                            }}
                        >
                            Your cat is
                            <br/>
                            <span style={{fontSize: "7vw", fontWeight: "500"}}>
								{output}
							</span>
                        </p>
                    </div>
                    <div className="boxTextHistory">
                        <span className="didYouKnow">DID YOU KNOW ?</span>
                        <div className="history">
                            <p>{know.preview}</p>
                        </div>
                    </div>
                </div>
            </div>
            <span className="backHome" onClick={handleBackHome}>
						BACK TO HOME
            </span>
        </div>
    );
}

export default Result;
