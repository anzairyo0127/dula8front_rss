import Amplify from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';

import * as React from "react";

import Header from "./Header/Header";
import MainContent from "./MainContent/Content";
import config from "../../aws-exports";

Amplify.configure(config)

const Top = () => {
  const [authState, setAuthState] = React.useState<AuthState>();
  const [user, setUser] = React.useState<object | undefined>();

  React.useEffect(()=>{
    return onAuthUIStateChange((nextAuthState, authData)=>{
      setAuthState(nextAuthState);
      setUser(authData);
    });
  });
  
  if (authState === AuthState.SignedIn && user) {
    return (
      <div>
        <Header />
        <MainContent />
      </div>
    );
  } else {
    return (<AmplifyAuthenticator />);
  }
};

export default Top;