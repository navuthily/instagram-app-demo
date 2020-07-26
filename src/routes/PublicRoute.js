import React, { Component } from 'react'
import {Route} from'react-router-dom'
const PublicRoute =({ componet:Component, ...rest}) =>{
  return (
   <Route
   {...rest}
   render ={props =>{
     return <Component {...props}/>
   }}
   />
  )
};
export default PublicRoute;