import {useState, useEffect} from "react"; 
import logo from "../loginPage/assets/headerLogo.png"; 

function Logo() {
    const startingHeight = window.innerHeight * 0.1066; 
    const [logoHeight, setLogoHeight] = useState(startingHeight); 

    const startingWidth = window.innerWidth * 0.2031; 
    const [logoWidth, setLogoWidth] = useState(startingWidth); 

    window.onresize = function () {
        setLogoHeight(window.innerHeight * 0.1066); 
        setLogoWidth(window.innerWidth * 0.2031); 
    };  

    return (
        <div className = "LogoParent"> 
            <img src = {logo} 
            height = {logoHeight}  width = {logoWidth} alt = "shit, didn't load" />
            
        </div> 
    )
}

export default Logo; 

