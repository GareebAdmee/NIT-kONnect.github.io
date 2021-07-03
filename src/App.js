import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import './App.css';
import Login from './component/auth/Login';
import QnA from "./component/QnA";
import {login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser)=>
    {
      if(authUser) {
        dispatch(login({
          uid : authUser.uid,
          photo:authUser.photoURL,
          displayName: authUser.displayName,
          email: authUser.email,
        })
        );
        console.log(authUser);
      }else {
        dispatch(logout());
      }
    });
  },[dispatch]);
  return (
    <div className="App">
      {
        user?(<QnA/>):(<Login/>)
      }
    </div>
  );
}

export default App;
