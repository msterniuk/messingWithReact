import logo from "../loginPage/assets/headerLogo.png"; 
import {useState} from "react";

function LogoComponent() {

    const startingHeight = window.innerHeight * 0.1066; 
    const [logoHeight, setLogoHeight] = useState(startingHeight); 
    
    const startingWidth = window.innerWidth * 0.2031; 
    const [logoWidth, setLogoWidth] = useState(startingWidth); 
    
    window.onresize = function () {
        setLogoHeight(window.innerHeight * 0.1066); 
        setLogoWidth(window.innerWidth * 0.2031); 
    };  

    return (

        <div className = "LogoComponent"> 

        <img src = {logo} height = {logoHeight}
        width = {logoWidth} alt = "shit, didn't load" />    

        </div> 
    )
}

export default LogoComponent; 
