

function FlexHeaderDescriptions() {

    //eventually, refactor this like the flex number selectors
    //create an IndividualFlexDescriptions component, pass in the 
    //actual text as a prop, and render all four(or more) descriptions 
    //right inside this component. then, apply display: flex to this
    //component and justify-content to have them in a row 

    //for now, am using the table to supply descriptions. this component
    //may be redundant in the future. if not: 
    /* 
            <p> ROOM </p>
            <p> TEACHER </p> 
            <p> CAPACITY </p>
            <p> SUBJECT </p> 
            
    */ 
   
    return (

        <div className = "FlexHeaderDescriptions">
            
        </div>
    )
}

export default FlexHeaderDescriptions; 
