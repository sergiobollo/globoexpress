/*json-server public/db.json --port 8000*/

import React, { Component } from 'react';
import Products from "./components/componentProducts"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class TiendaOnline extends Component {
    constructor(props) {
        super(props);
        this.state = { products: [], filteredProducts: [] }
    }

    componentWillMount() {
        fetch("http://localhost:8000/products").then(res => res.json())
            .then(data => this.setState({
                products: data,
                filteredProducts: data
            }));
        console.log(this.products);
    }


    render() {
        return ( < div >
            <
            Navbar sticky = "top"
            className = " border-bottom border-white App"
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
            /div>     <
            div className = "d-flex flex-row justify-content-center" >
            <
            Navbar.Toggle className = "mx-auto" / >

            <
            Navbar.Collapse id = "responsive-navbar-nav" >
            <
            Nav className = "mx-auto" >

            <
            Nav.Item className = "px-3" >
            <
            Link to = "/globoexpress/"
            className = "text-danger" > < small > HOME < /small> < /Link > < /
            Nav.Item >
            <
            Nav.Item className = "px-3" >
            <
            Link to = "/globoexpress/nosotros"
            className = "text-danger" > < small > NOSOTROS < /small> < /Link > < /
            Nav.Item > <
            Nav.Item className = "px-3" >
            <
            Link to = "/globoexpress/productos"
            className = "text-danger" >

            <
            small > PRODUCTOS < /small> < /Link > < /
            Nav.Item >

            <
            Nav.Item className = "px-3" >
            <
            Link to = "/globoexpress/contacto"
            className = "text-danger" >

            <
            small > CONTACTO < /small> < /Link > < /
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
            header >
            <
            h1 className = "text-center p-3" > Tienda Online < /h1>  < /
            header > <
            Container >
            <
            Row >
            <
            Col md = { 8 } >
            <
            Products products = { this.state.filteredProducts }
            handleAddToCart = { this.handleAddToCart }
            /> < /
            Col >
            <
            Col md = { 4 } > < /Col> < /
            Row >
            <
            /Container> < /
            div >
        );
    }
}

export default TiendaOnline;