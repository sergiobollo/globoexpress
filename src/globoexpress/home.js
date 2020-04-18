import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function Home() {
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
        Image src = "../media/logo.jpg"
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
        header className = "py-3" >
        <
        h5 className = "text-center" > Las Promesas son para Cumplirlas < /h5>

        <
        div className = " Carousel mx-auto pt-3" >
        <
        Carousel >
        <
        Carousel.Item >
        <
        Image className = "d-block w-100"
        src = "../media/Carousel1.jpg"
        alt = "First slide" /
        >
        <
        /Carousel.Item> <
        Carousel.Item >
        <
        Image className = "d-block w-100"
        src = "../media/Carousel2.jpg"
        alt = "Third slide" /
        >
        <
        /Carousel.Item> <
        Carousel.Item >
        <
        Image className = "d-block w-100"
        src = "../media/Carousel3.jpg"
        alt = "Third slide" /
        >
        <
        /Carousel.Item>  <
        Carousel.Item >
        <
        Image className = "d-block w-100"
        src = "../media/Carousel4.jpg"
        alt = "Fourth slide" /
        >
        <
        /Carousel.Item>  <
        Carousel.Item >
        <
        Image className = "d-block w-100"
        src = "../media/Carousel5.jpg"
        alt = "Fifth slide" /
        >
        <
        /Carousel.Item> < /
        Carousel >
        <
        /div>   < /
        header > <
        Container >

        <
        p >
        Eres nuestro Cliente, nuestra prioridad fundamental, tan importante que todos los que integramos Globo Express te prometemos:
        <
        /p> <
        p >
        <
        b > < div > { "Innovar\n" } < /div> < /b > Con la búsqueda constante de nuevos materiales así como las técnicas mas avanzadas en la industria, para ofrecerte variedad de productos de alto nivel y jerarquía internacional. < /
        p > <
        p > < b > < div > { "Servicio\n" } < /div> < /b > Nuestro compromiso es de responsabilidad total para: a) Responder rápidamente a tus necesidades.b) Darte el asesoramiento necesario para el uso adecuado de nuestros productos. < /p > <
p > < b > < div > { "Calidad Total\n" } < /div> < /b > Con tu satisfacción en mete, trabajamos solamente con maquinaria e insumos de la mas fina calidad para ganar con ello tu respeto y lealtad.Si, por alguna razón, crees que no cumplimos con nuestra palabra, por favor contáctanos inmediatamente...Después de todo, una promesa es una promesa. < /p >

<
/
Container >

    <
    aside >
    <
    Image src = "../media/home5.jpg"
className = "p-3 align-center mx-auto d-block"
fluid / >
    <
    /aside> 

<
footer className = "border-top p-1 mx-auto sticky-bottom text-center text-danger bg-white" > < small > ©Globo Express 1995 - 2020. Globo Express - Silk Screen Impresión Perfecta y Flexifoil Set, son Marcas Registradas < /small > < /footer >


    <
    /
div >
);
}

export default Home;