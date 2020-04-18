import React from 'react';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';


function Notfound() {
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
        section className = "text-center p-5" >
        <
        h3 className = "text-center p-5" > No se encuentra la página < /h3> < /
        section >

        <
        footer className = "border-top p-1 mx-auto sticky-bottom text-center text-danger bg-white" > < small > ©Globo Express 1995 - 2020. Globo Express - Silk Screen Impresión Perfecta y Flexifoil Set, son Marcas Registradas < /small > < /footer >

        <
        /
        div >
    );
}

export default Notfound