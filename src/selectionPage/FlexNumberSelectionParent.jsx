import FlexNumberSelector from "./FlexNumberSelector.jsx"; 
import FlexConfirmation from "./FlexConfirmation.jsx"; 


function FlexNumberSelectionParent() {

    //currently storing all four flexes in FlexNumberSelector component
    //because number of flexes is not going to realistically change
    //can refactor this to single flex per component and then render them
    //using props in this component 
    
    return (
        <div className = "FlexNumberSelectionParent">

            <FlexNumberSelector /> 
            <FlexConfirmation /> 

        </div>
    )
}

export default FlexNumberSelectionParent; 