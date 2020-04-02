import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function Contacto() {
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
        Card className = "mx-auto my-3"
        style = {
            { width: '50vmax' }
        } >
        <
        Card.Img variant = "top"
        src = "./media/contacto.jpg" / >
        <
        Card.Body >
        <
        Card.Title > Globo Express S.R.L. < /Card.Title>  <
        Card.Text >
        <
        p > Horario: Lunes a Viernes de 8 a 17 hs y Sábados de 10 a 13 hs. < /p>  <
        p > Tel: 46839577 / 46352296 / 32212412 < /p> <
        p > < Image src = "./media/whatsappLogo.png"
        rounded / > WhatsApp: 1165597309 < /p>  <
        p > Mail: < a href = "mailto: info @globoexpress.com.ar" > info @globoexpress.com.ar < /a>< /p >
        <
        p > Dirección: Escalada 942 - CABA < /p > < /
        Card.Text >

        <
        iframe className = "border w-100"
        src = "https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d3282.3328124348955!2d-58.495522!3d-34.646297!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x95bcc9a6e5fde7b1%3A0xf354ea783f3bc1c6!2sGlobo%20Express%20SRL%2C%20Av.%20Escalada%20942%2C%20C1407%20LDT%2C%20Buenos%20Aires!3m2!1d-34.6462967!2d-58.493328299999995!5e0!3m2!1ses-419!2sar!4v1585723144606!5m2!1ses-419!2sar"
        title = "Mapa" >
        <
        /iframe>

        <
        /
        Card.Body > <
        /Card>  < /
        div >
    );
}

export default Contacto;