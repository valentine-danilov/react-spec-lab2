import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import NotFound from './NotFound';
import Product from './Product';
import ProductListView from '../containers/ProductListView';

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/products/all" component={ProductListView}></Route>
            <Route path="/product/:id" component={Product}></Route>
            <Route component={NotFound}></Route>
        </Switch>
    </main>
);

export default Main;