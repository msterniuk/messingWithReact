

function SearchButton() {


    //want to try to make the search icon responsive. current idea is to use 
    //.onclick and attach it to an event hander function that will then 
    //run some kind of script to search for flex elements

    /* let searchIcon = document.getElementById("searchIcon");
    searchIcon.onclick = () => {console.log('the function works!')} */ 


    //the current issue is that I can't login by pressing the "enter" key
    //the above code will work in pure javascript, but because it is run before 
    //theSearchButton renders, it throws a null error. this makes sense, as 
    //getElementbyId can't grab a null element. don't know how to fix this. maybe useState()?

    
    function handleClick() {

        alert("function runs"); 
    }

    return (
        <div className = "SearchButtonParent"> 
            
            <button id = "theSearchButton" onClick = {handleClick}> 
            <i id = "searchIcon" className ="fa fa-search" aria-hidden="true" ></i>
            </button> 

        </div> 
    )
}

export default SearchButton; 

