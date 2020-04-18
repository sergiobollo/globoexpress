import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Productos() {
    return ( <
        div className = "App" >

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
        p className = "text-danger pt-3 text-center" > Consulta nuestro <
        Link to = "/globoexpress/catalogo"
        className = "text-danger" >
        <
        u > catálogo < /u> < /Link > < /p > < /
        header >

        <
        Container fluid >
        <
        Row className = " mx-auto align-center" >
        <
        Col xs = { 12 }
        className = " mx-auto align-center" >
        <
        Image src = "./media/home1.jpg"
        className = "p-3 align-center mx-auto d-block"
        fluid / >
        <
        /Col> <
        Col xs = { 12 } >
        <
        Image src = "./media/home2.jpg"
        className = "p-3 align-center mx-auto d-block"
        fluid / >
        <
        /Col> <
        Col xs = { 12 } >
        <
        Image src = "./media/home3.jpg"
        className = "p-3 align-center mx-auto d-block"
        fluid / >
        <
        /Col> <
        Col xs = { 12 } >
        <
        Image src = "./media/home4.jpg"
        className = "p-3 align-center mx-auto d-block"
        fluid / >
        <
        /Col>  < /
        Row >
        <
        /
        Container >

        <
        footer className = "border-top p-1 mx-auto sticky-bottom text-center text-danger bg-white" > < small > ©Globo Express 1995 - 2020. Globo Express - Silk Screen Impresión Perfecta y Flexifoil Set, son Marcas Registradas < /small > < /footer >


        <
        /div>
    );
}

export default Productos;