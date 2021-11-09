import React from 'react'
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Product from './Components/Produc'
import Invoics from './Components/Invoice';
import Reports from './Components/Reports';
const Axios=require('axios')

function App() {
  return (
  
    
      <BrowserRouter>
      <Switch>

<Route path="/produc">
  <Product></Product>
</Route>

<Route path="/reports">
  <Reports></Reports>
</Route>

<Route path="/">
 <Invoics></Invoics>
</Route>

</Switch>
</BrowserRouter> 
    
  );
}

export default App;
