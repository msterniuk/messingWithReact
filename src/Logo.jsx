function Logo() {
    const logoHeight = window.screen.height * 0.1066; 
    //will have to use state here to update the logoHeight when I exit full screen. size changes
    //from 1080 to 994 px, making the logo 'pop' out of place. I can fix this by using 
    //useState() and rerendering the Logo component every time the size of the window changes
    return (
        <div className = "LogoParent"> 
            <img src = "../src/assets/headerLogo.png" height = {logoHeight}  width = {390} alt = "shit, didn't load" />
            
        </div> 
    )
}

export default Logo; 

