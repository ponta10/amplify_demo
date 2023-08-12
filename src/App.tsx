import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "./aws-exports";

Amplify.configure(awsExports);

// Propsの型を定義
interface AppProps {
  signOut: () => any;
  user: any;
}

const App: React.FC<AppProps> = ({signOut, user}) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Ponta Amplify APP</p>
        {user ? (
          <>
            <h3>私は権限を持っています: {user.username}</h3>
            <button onClick={signOut}>サインアウト</button>
          </>
        ) : (
          <h3>権限がありません</h3>
        )}
      </header>
    </div>
  );
}

export default withAuthenticator(App);
