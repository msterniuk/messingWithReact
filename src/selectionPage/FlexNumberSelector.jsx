

function FlexNumberSelector() {

    //as a good practice, I should probably refactor this component
    //to use props and then pass in the name as a prop for each 
    //duplicate of the basic flex number selector. good refactoring 
    //project for later on 
    
    return (

        <div className = "FlexNumberSelector"> 

            <button type = "submit"> Flex 1 </button> 
            <button type = "submit"> Flex 2 </button> 
            <button type = "submit"> Flex 3 </button> 
            <button type = "submit"> Flex 4 </button> 
        </div>
    )
}

export default FlexNumberSelector; 