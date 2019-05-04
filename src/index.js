import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Navbar from './Navbar';
import Todolist from './Todolist';
import Login from './Login';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


const App= () =>{
  
     return <BrowserRouter>
        <Switch>
          <Route path='/' component={Login} exact/>
          <Route path='/tasks' component={Todolist} exact />
          <Route component={Login} exact />
        </Switch>
      </BrowserRouter>
   
}

const app = document.getElementById('app');

ReactDom.render(<App/>, app);