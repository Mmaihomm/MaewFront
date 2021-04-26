import React, {useState, useEffect} from "react";
import {useHistory, useLocation} from "react-router-dom";
import DidYouKnow from "../DidYouKnow";

function Result() {
    const location = useLocation();
    const [image, setImage] = useState({preview: null});
    const [output, setOut] = useState("");
    const [know, setKnow] = useState({
        preview: "",
    });
    const history = useHistory();

    const handleBackHome = async (e) => {
        history.push("/");
    };
    useEffect(() => {
        const resultStr = location.state.rep;
        setOut(resultStr);
		setImage({ preview: URL.createObjectURL(location.state.img) });
        if (resultStr === "Snowshoe") {
            setKnow({
                preview: DidYouKnow.Snowshoe
            });
        } else if (resultStr === "Ragdoll") {
            setKnow({
                preview: DidYouKnow.Ragdoll
            });
        } else if (resultStr === "Siamese") {
            setKnow({
                preview: DidYouKnow.Siamese
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
                            <span className={"resultOutput"}>
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
            <div className="backHome" onClick={handleBackHome}>
						BACK TO HOME
            </div>
        </div>
    );
}

export default Result;
