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
import Product from './views/Pages/Product/'
import Recipe from './views/Pages/Recipe/'
import CreateRecipe from './views/Pages/Recipe/CreateRecipe.js'
import ShowRecipe from './views/Pages/Recipe/ShowRecipe.js'
import CreateProduct from './views/Pages/Product/CreateProduct.js'
import EditProduct from './views/Pages/Product/EditProduct.js'

ReactDOM.render((
  <Router>
    <Switch>
      <Route exact path="/login" name="Login Page" component={Login}/>
      <Route exact path="/register" name="Register Page" component={Register}/>
      <Route exact path="/404" name="Page 404" component={Page404}/>
      <Route exact path="/500" name="Page 500" component={Page500}/>
      <Route exact path="/product" name="Page Product" component={Product}/>
      <Route exact path="/product/create" name="Page Create Product" component={CreateProduct}/>
      <Route exact path="/products/edit/:id" name="Page Edit Product" component={EditProduct}/>
      <Route exact path="/recipe" name="Page Recipe" component={Recipe}/>
      <Route exact path="/recipe/create" name="Page Create Recipe" component={CreateRecipe}/>
      <Route exact path="/recipe/show/:id" name="Page Show Recipe" component={ShowRecipe}/>

      <Route path="/" name="Home" component={Full}/>

    </Switch>
  </Router>
), document.getElementById('root'));
