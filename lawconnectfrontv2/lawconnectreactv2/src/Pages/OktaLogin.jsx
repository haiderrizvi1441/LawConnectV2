import { useOktaAuth } from "@okta/okta-react";
import React from 'react';

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