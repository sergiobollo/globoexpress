import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';

function Productos() {
    return ( <
        div className = "App" >

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
        h4 className = "text-center p-3" > Productos < /h4> <
        p className = " text-center" > Ingresá a nuestra <
        Link to = "/globoexpress/tiendaOnline"
        className = "text-warning" >

        <
        u > Tienda Online < /u> < /Link > < /p >  < /
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
        div >
        <
        h4 className = "pt-3 text-center" > Catálogo < /h4 > 

        <
        ResponsiveEmbed aspectRatio = "1by1" >
        <
        embed type = "application/pdf"

        src = "http://www.globoexpress.com.ar/full/index_htm_files/catalogo%20enero%202020.pdf" / >
        <
        /ResponsiveEmbed> 

        <
        /div>

        <
        footer className = "border-top p-1 mx-auto sticky-bottom text-center text-danger bg-white" > < small > ©Globo Express 1995 - 2020. Globo Express - Silk Screen Impresión Perfecta y Flexifoil Set, son Marcas Registradas < /small > < /footer >


        <
        /div>
    );
}

export default Productos;