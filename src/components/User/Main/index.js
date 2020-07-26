import React from "react";
import Header from "../Header/Header";
import { Route, Redirect } from 'react-router-dom';

import Main from '../Main/Main'
import {user} from '../../../constants/Config'
function UserRoute() {
  var a=4;
  return (

    <Route render={props => (
      user ?
      <div>
      <Header />
      <Route path="/">
        <Main/>
      </Route>
     
    </div>
      : <Redirect to="/login" />
  )} />
    
  );
}
export default UserRoute;

