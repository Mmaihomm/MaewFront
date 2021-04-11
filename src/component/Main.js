import React, {useState} from 'react';
import '../App.css';
import Nav from './Nav';
import Upload from './Upload';

function Main() {
    return (
        <div>
            <span className="TopBar">
                <Logo/>
                <GroupMembers/>
            </span>
            <Upload/>
        </div>
    )
}

const Logo = () => {
    return (
        // <img className="Logo" src="Group 3.png"/>
        <span className={"Logo"}>
            Meow Kin Pla
        </span>
    )
}

const GroupMembers = ({...props}) => {
    return (
        <div className={"GroupMembers"}>
            <span className={"MembersPlate"}>
                60010033 กฤษณา ชินสร้อย<br/>
                60010271 ฑิฆัมพร โอศิริ<br/>
                60010353 ต้นตระกูล อินชาญ<br/>
                61010216 ชริตา สุรนันทจักร์<br/>
                61010627 ปรมี จันทร์สุขเศรษฐ์<br/>
            </span>
            <img className={"CatPaw"} alt="cat-paw" src={"cat-paw.svg"}/>
        </div>
    )
}


export default Main;

