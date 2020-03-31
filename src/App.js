import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './globoexpress/home';
import Productos from './globoexpress/productos';
import Contacto from './globoexpress/contacto';
import Nosotros from './globoexpress/nosotros';
import Catalogo from './globoexpress/catalogo';
import Notfound from './globoexpress/notfound';
//import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


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
            Navbar sticky = "top"
            className = "bg-white border-bottom"
            collapseOnSelect expand = "lg"
            variant = "light" >
            <
            aside className = " flex-column  mx-auto" >
            <
            div className = "d-flex flex-row justify-content-center" >
            <
            Image src = "./media/logo.jpg"
            className = "py-1 logo"
            fluid / >
            <
            /div>    <
            Navbar.Toggle className = "mx-auto" / >
            <
            div className = "d-flex flex-row justify-content-center" >

            <
            Navbar.Collapse id = "responsive-navbar-nav" >
            <
            Nav className = "mx-auto" >

            <
            Nav.Item className = "px-3" >
            <
            Link to = "/globoexpress/"
            className = "text-danger" > HOME < /Link > < /
            Nav.Item >
            <
            Nav.Item className = "px-3" >
            <
            Link to = "/globoexpress/nosotros"
            className = "text-danger" > NOSOTROS < /Link > < /
            Nav.Item > <
            Nav.Item className = "px-3" >
            <
            Link to = "/globoexpress/productos"
            className = "text-danger" >
            PRODUCTOS < /Link > < /
            Nav.Item >

            <
            Nav.Item className = "px-3" >
            <
            Link to = "/globoexpress/catalogo"
            className = "text-danger" >
            CATALOGO < /Link > < /
            Nav.Item >

            <
            Nav.Item className = "px-3" >
            <
            Link to = "/globoexpress/contacto"
            className = "text-danger" >
            CONTACTO < /Link > < /
            Nav.Item >
            <
            /Nav> < /
            Navbar.Collapse >

            <
            /div> < /
            aside > <
            /
            Navbar >

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
            />    <
            Route component = { Notfound }
            /> < /
            Switch >
            <
            /div> < /
            BrowserRouter >
            <
            footer className = "border-top p-1 mx-auto sticky-bottom text-center text-danger" > < p > ©Globo Express 1995 - 2020. Globo Express - Silk Screen Impresión Perfecta y Flexifoil Set, son Marcas Registradas < /p></footer >

            <
            /div>

        );
    }
}

export default App;