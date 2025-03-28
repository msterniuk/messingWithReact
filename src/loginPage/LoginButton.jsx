function LoginButton() {

    /* let loginElement = document.getElementById("LoginButton"); 
    loginElement.addEventListener("keydown", function(e) {
        if (e.code === "Enter") {
            redirectToSelection(); 
        }
    }); */ 

    function redirectToSelection() {
        window.location.href = "../../selection.html"; 
    }

    //add support for hitting 'enter' and treating that as a login
    //currently only a direct click on the login element works 

    return (
        <div> 

            <button id = "LoginButton" type = "button" value = "Login" 
            onClick = {redirectToSelection}> Login </button> 
        </div> 
    )

}

export default LoginButton; 