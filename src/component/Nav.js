import React, {useState} from 'react'

function Nav() {
    const [click, setClick] = useState(false)

    function handleChange() {
        setClick(!click)
    }

    return (
        <div class="Nav">
        <span>
            <img src="group 3.png" margin-left="100px"/>
        </span>
            {click ? (
                <img id="dev" src="Group 2.png" height="50%" width="30%" style={{cursor: "pointer"}} onClick={() => {
                    handleChange()
                }}/>
            ) : (
                <img id="dev" src="cathand2.png" height="20%" width="10%" style={{cursor: "pointer"}} onClick={() => {
                    handleChange()
                }}/>
            )
            }
        </div>
    )
}

export default Nav;