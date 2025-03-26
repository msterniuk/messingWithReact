import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App.jsx"
import MainComponent from "./MainComponent.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainComponent /> 
  </StrictMode>,
)


//for your own reference -> all react components MUST BE uppercase to avoid 
//confusion with HTML elements

/*<Strictmode> 

    <MainComponent /> check! 
      <MainHeader /> check! 
        <Logo /> 
      <LoginParent /> 
        <Email /> 
        <Password /> 
        <LoginButton /> 

  </StrictMode> 
*/ 