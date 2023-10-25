import React from 'react'
import {useOktaAuth} from "@okta/okta-react"

function OktaLogin() {

    const oktaAuth = useOktaAuth();

    const handlelogin = () => {
        
    }
  return (
    <div>
        <h1>Okta Login</h1>
        <button onClick={handlelogin}>Login with Okta</button>
    </div>
  )
}

export default OktaLogin