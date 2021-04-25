import React, {useState} from 'react';
import '../App.css';

function TopBar() {
    return (
            <div className="TopBar">
                <Logo/>
                <GroupMembers/>
            </div>
    )
}

const Logo = () => {
    return (
        <span className={"Logo"}>
            <img className="LogoPic" src="cat-logo.svg"/>
            <span className={"LogoText"}>
                Meow Kin Pla
            </span>
        </span>
    )
}

const GroupMembers = ({...props}) => {
    return (
        <div className={"GroupMembers"}>
            <span className={"MembersPlate"}>
                <b>กลุ่มที่ 1</b><br/>
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


export default TopBar;

