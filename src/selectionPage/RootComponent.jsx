import TopHeader from "./TopHeader.jsx"; 
import NavigationHeader from "./NavigationHeader.jsx"; 
import FlexSelectionParent from "./FlexSelectionParent.jsx"; 

function RootComponent() {

    return (

        <div className = "RootComponent">
            <TopHeader /> 
            <NavigationHeader /> 
            <hr className = "visibleLineBreak" /> 
            <FlexSelectionParent /> 
            

        </div>
    )
}

export default RootComponent; 

