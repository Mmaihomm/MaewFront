import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Result() {
	const [image, setImage] = useState({ preview: "CatResult.jpg" });
	const [output, setOut] = useState({ preview: "Persian", raw: "" });
	const [know, setKnow] = useState({
		preview: "Persiandsgjerkfldjgy",
	});
	const history = useHistory();

	const handleBackHome = async (e) => {
		history.push("/");
	};

	if (output == "Persian") {
		setKnow({
			preview:
				"As one of the oldest cat breeds, Persian cats can be traced all the way back to the 1600s. While there are question marks about where they came from, they're believed to have originated in Mesopotamia, later called Persia (hence the name), which is now modern day Iran.",
		});
	} else if (output == "Main coon") {
		setKnow({
			preview:
				"As one of the oldest cat breeds, Persian cats can be traced all the way back to the 1600s. While there are question marks about where they came from, they're believed to have originated in Mesopotamia, later called Persia (hence the name), which is now modern day Iran.",
		});
	} else if (output == "Russian blue") {
		setKnow({
			preview:
				"As one of the oldest cat breeds, Persian cats can be traced all the way back to the 1600s. While there are question marks about where they came from, they're believed to have originated in Mesopotamia, later called Persia (hence the name), which is now modern day Iran.",
		});
	}

	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column",
			}}
		>
			<div className="resultArea">
				<div className="boxImg">
					<img
						style={{
							borderRadius: "10px",
							height: "480px",
						}}
						src={image.preview}
					/>
				</div>
				<div style={{}}>
					<div className="boxTextResult">
						<p
							style={{
								fontFamily: "Montserrat",
								textAlign: "center",
								fontSize: "20px",
							}}
						>
							Your cat is
							<br />
							<span style={{ fontSize: "80px" }}>
								{output.preview}
							</span>
						</p>
					</div>
					<div className="boxTextHistory">
						<div style={{ position: "absolute", top: "2px" }}>
							<p className="didYouKnow">DID YOU KNOW ?</p>
						</div>
						<div className="history">
							<p>{know.preview}</p>
						</div>
					</div>
				</div>
			</div>
			<div style={{ marginBottom: "100px" }}>
				<label style={{ cursor: "pointer" }}>
					<p className="backHome" onClick={handleBackHome}>
						BACK TO HOME
					</p>
				</label>
			</div>
		</div>
	);
}
export default Result;
