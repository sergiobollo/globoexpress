import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './App.css';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

function Home() {
    return ( <
        div className = "App" >
        <
        header className = " Carousel mx-auto pt-3" >
        <
        h4 className = "text-center" > Las Promesas son para Cumplirlas < /h4> <
        Carousel className = "py-3" >
        <
        Carousel.Item >
        <
        img className = "d-block w-100"
        src = "./media/carousel1.jpg"
        alt = "First slide" /
        >
        <
        /Carousel.Item> <
        Carousel.Item >
        <
        img className = "d-block w-100"
        src = "./media/carousel2.jpg"
        alt = "Third slide" /
        >
        <
        /Carousel.Item> <
        Carousel.Item >
        <
        img className = "d-block w-100"
        src = "./media/carousel3.jpg"
        alt = "Third slide" /
        >
        <
        /Carousel.Item>  <
        Carousel.Item >
        <
        img className = "d-block w-100"
        src = "./media/carousel4.jpg"
        alt = "Fourth slide" /
        >
        <
        /Carousel.Item>  <
        Carousel.Item >
        <
        img className = "d-block w-100"
        src = "./media/carousel5.jpg"
        alt = "Fifth slide" /
        >
        <
        /Carousel.Item> < /
        Carousel >
        <
        /header>  

        <
        Container >

        <
        p >
        Eres nuestro Cliente, nuestra prioridad fundamental, tan importante que todos los que integramos Globo Express te prometemos: Innovar.Con la búsqueda constante de nuevos materiales así como las técnicas mas avanzadas en la industria, para ofrecerte variedad de productos de alto nivel y jerarquía internacional.Servicio.Nuestro compromiso es de responsabilidad total para: a) Responder rápidamente a tus necesidades.b) Darte el asesoramiento necesario para el uso adecuado de nuestros productos. <
    /p> <
p >
    Calidad Total.Con tu satisfacción en mente, trabajamos solamente con maquinaria e insumos de la mas fina calidad para ganar con ello tu respeto y lealtad.Si, por alguna razón, crees que no cumplimos con nuestra palabra, por favor contáctanos inmediatamente...Después de todo, una promesa es una promesa. <
    /p>

<
/
Container >

    <
    aside >
    <
    Image src = "./media/home5.jpg"
className = "p-3 align-center mx-auto d-block"
fluid / >
    <
    /aside> < /
div >
);
}

export default Home;