import axios from 'axios';
import React , {createContext, useContext, useState, useEffect} from 'react'

// Creating Context to export 
export const LoginContext = createContext(null);

// UseContext funnction - should return required info ie. vendorId
export const useLogin = () => {
    const logins = useContext(LoginContext);

    
    return logins;
}
// Creating ContextProvider
export const LoginContextProvider = (props) => {
    const [loginData, setLoginData] = useState(0);
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState(null);

    
    return(
        <LoginContext.Provider value={{loginData,setLoginData}}>
            {props.children}
        </LoginContext.Provider>
    )
}   

function LoginHelpContext() {
  return (
    <div>

    </div>
  )
}

export default LoginHelpContext