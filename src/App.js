import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './globoexpress/home';
import Productos from './globoexpress/productos';
import Contacto from './globoexpress/contacto';
import Nosotros from './globoexpress/nosotros';
import Notfound from './globoexpress/notfound';
//import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'

import Catalogo from './globoexpress/catalogo';


class App extends Component {
    constructor(props) {
        super(props);
        this.appRef = React.createRef();
    }

    render() {
        return ( < div ref = { this.appRef }
            className = " App" > <
            BrowserRouter basename = '/' >


            <
            div >
            <
            Switch >
            <
            Route exact path = '/globoexpress/'
            component = { Home }
            />   <
            Route path = '/globoexpress/nosotros'
            component = { Nosotros }
            />  <
            Route path = '/globoexpress/productos'
            component = { Productos }
            />  <
            Route path = '/globoexpress/catalogo'
            component = { Catalogo }
            />  <
            Route path = '/globoexpress/contacto'
            component = { Contacto }
            />   <
            Route component = { Notfound }
            /> < /
            Switch >
            <
            /div> < /
            BrowserRouter >

            <
            /div>

        );
    }
}

export default App;