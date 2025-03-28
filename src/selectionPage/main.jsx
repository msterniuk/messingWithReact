import {StrictMode} from "react"; 
import {createRoot} from "react-dom/client";
import "./selection.css"
import RootComponent from "./RootComponent.jsx"; 

createRoot(document.getElementById("rootElement")).render(

    <StrictMode> 
        <RootComponent /> 

    </StrictMode>
)

