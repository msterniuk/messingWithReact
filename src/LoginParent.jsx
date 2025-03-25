import Email from "./Email.jsx"
import Password from "./Password.jsx"
import LoginButton from "./LoginButton.jsx"

function LoginParent() {

    return (

        <div className = "LoginParent">
            <Email /> 
            <Password /> 
            <LoginButton />             
        </div>
    )
}


export default LoginParent; 
