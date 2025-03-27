

function SearchButton() {


    //want to try to make the search icon responsive. current idea is to use 
    //.onclick and attach it to an event hander function that will then 
    //run some kind of script to search for flex elements
    
    return (
        <div className = "SearchButton"> 

            <i id = "searchIcon" className ="fa fa-search" aria-hidden="true"></i>
            
        </div> 
    )
}

export default SearchButton; 

