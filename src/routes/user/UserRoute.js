import React from "react";
import Header from '../../components/User/Header/Header'
import { Route, Redirect } from 'react-router-dom';

import Main from './Main'
import {user} from '../../constants/Config'
function UserRoute() {

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

