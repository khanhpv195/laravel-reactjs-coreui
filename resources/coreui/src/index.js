import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Styles
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '../scss/style.scss'
// Temp fix for reactstrap
import '../scss/core/_dropdown-menu-right.scss'

// Containers
import Full from './containers/Full/'

// Views
import Login from './views/Pages/Login/'
import Register from './views/Pages/Register/'
import Page404 from './views/Pages/Page404/'
import Page500 from './views/Pages/Page500/'
import Order from './views/Pages/Order/'
import Customer from './views/Pages/Customer/'
import Product from './views/Pages/Product/'
import Sale from './views/Pages/Sale/'
import CreateProduct from './views/Pages/Product/CreateProduct.js'
import EditProduct from './views/Pages/Product/EditProduct.js'

ReactDOM.render((
  <Router>
    <Switch>
      <Route exact path="/login" name="Login Page" component={Login}/>
      <Route exact path="/register" name="Register Page" component={Register}/>
      <Route exact path="/404" name="Page 404" component={Page404}/>
      <Route exact path="/500" name="Page 500" component={Page500}/>
      <Route exact path="/order" name="Page Order" component={Order}/>
      <Route exact path="/customer" name="Page Customer" component={Customer}/>
      <Route exact path="/sale" name="Page Sale" component={Sale}/>
      <Route exact path="/product" name="Page Product" component={Product}/>
      <Route exact path="/product/create" name="Page Create Product" component={CreateProduct}/>
      <Route exact path="/products/edit/:id" name="Page Edit Product" component={EditProduct}/>
      <Route path="/" name="Home" component={Full}/>

    </Switch>
  </Router>
), document.getElementById('root'));
