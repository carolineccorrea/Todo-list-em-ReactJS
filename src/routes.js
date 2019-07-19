import React from 'react';
import Sobre from './components/pages/Sobre'
import Home from './components/pages/Home'
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Menu from './components/Template/menu';
import TodoList from './components/TodoList';

const Routes = () =>{
    return (
        <BrowserRouter>
        <Menu/>
            <Switch>
                <Route path="/sobre" component={Sobre} />
                <Route path="/home" component={Home} />
                <Route path="/afazeres" component={TodoList} />
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;