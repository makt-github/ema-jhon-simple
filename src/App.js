import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProductDetail from './components/ProductDetail/ProductDetail';
import Login from './components/Login/Login';
import  { AuthContextProvider, PrivateRoute } from './components/Login/userAuth';
import Shipment from './components/Shipment/Shipment';





function App(props) {
 
  return (
    <div className="header">

      <AuthContextProvider>

                  <Header></Header>

            <Router>
                  <Switch>
                    <Route path="/shop">
                      <Shop></Shop>
                    </Route>
                    <Route path="/review">
                      <Review></Review>
                    </Route>

                    <Route path="/inventory">
                      <Inventory></Inventory>
                    </Route>
                    <Route exact path="/">
                      <Shop></Shop>
                    </Route>
                    <Route path="/product/:productKey">
                      <ProductDetail></ProductDetail>
                    </Route>
                    <Route path="/login">
                      <Login></Login>
                    </Route>
                    <PrivateRoute path="/shipment">
                      <Shipment></Shipment>
                    </PrivateRoute>
                    <Route path="*">
                      <NotFound></NotFound>   
                    </Route>
                  </Switch>

</Router>

      <footer>©2020, Developed By Tayef 🙂</footer>


      </AuthContextProvider>

    </div>
  );
}

export default App;
