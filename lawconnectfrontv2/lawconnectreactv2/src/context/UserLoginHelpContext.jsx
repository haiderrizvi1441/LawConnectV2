import React ,{createContext, useContext, useState, useEffect} from 'react';

// Creating Conect to export
export const UserLoginContext = createContext(null);

// Creating Context Provider

export const UserLoginContextProvider = (props) => {
    const [userLoginData, setUserLoginData] = useState(0);
    

    return(
        <UserLoginContextProvider value={{userLoginData, setUserLoginData}}>
            {props.children}
        </UserLoginContextProvider>
    )
}



function UserLoginHelpContext() {
  return (
    <div>

    </div>
  )
}

export default UserLoginHelpContext