import React from 'react';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
//import Container from 'react-bootstrap/Container'

function Nosotros() {
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
        Image src = "./media/logo2.jpg"
        className = "p-3 align-center mx-auto d-block logo"

        fluid / >

        <
        /
        header >
        <
        section className = "p-3 d-block overflow-hidden" >
        <
        Image src = "./media/nosotros.jpg"
        className = "float-left w-25 pr-1"
        fluid / >

        <
        p >
        Los seres humanos de todos los tiempos sin diferenciar su cultura,
        latitud o creencia religiosa, desde que nacen y junto a su grupo depertenencia,
        comparten la alegría y el regocijo de las distintas fiestas y celebraciones que atraviesan hasta el final de la vida. < /p> <
        p > Pero si de elementos festivos se trata, hay un referente: el globo. < /p> <
        p > Sinónimo de Emociones en todo el mundo, generador de sonrisas en niños y adultos sin excepción. < /p> <
        p > En la Argentina, hay un "antes"
        y un "después"
        de agosto de 1995. Entonces nace Globo Express MR: un proyecto serio, pautado en el tiempo, con planes y expectativas realistas. < /p> <
        p > Comenzamos con la opción de Saludar,
        Festejar y Promocionar conglobos de látex impresos en nuestro exclusivo Sistema de Impresión Perfecta Silk Screen MR.Hoy, en nuestro 24° Aniversario, aportamos muchísimo para que los momentos emotivos y divertidos sean inolvidables. < /p> <
        p > Asimismo los "valores 
        intangibles " de Globo Expresss son bien apreciados en la industria del globo de nuestro
        Pais, por eso agradecemos a todos nuestros Clientes, Proveedores y Amigos por confiar en nosotros. < /p><p>En veinticinco años muchos de nuestros proyectos se hicieron realidad,
        otros forman parte de planes futuros. < /p><p>Con fe en nuestro País y en la gente que nos acompaña, mantenemos latente nuestra filosofía de trabajo que nos permite alcanzar los siguientes objetivos: <
        ul >
        <
        li > Obtener beneficios necesarios para financiar el crecimiento de la empresa. <
        /li><li> Darles a nuestros Clientes, productos y servicios que satisfagan sus necesidades reales. < /
        li > < li > Dar cumplimiento a nuestras obligaciones con el estado.d - Compartir con toda la gente de Globo Express los logros alcanzados,
        ya que entre todos lo hacemos posible, y asegurarnos de que existe ese sentimiento de satisfacción personal que proviene del hecho de haber cumplido con la tarea asignada. <
        /li> < /
        ul > <
        /p>

        <
        /section>

        <
        footer className = "border-top p-1 mx-auto sticky-bottom text-center text-danger bg-white" > < small > ©Globo Express 1995 - 2020. Globo Express - Silk Screen Impresión Perfecta y Flexifoil Set, son Marcas Registradas < /small > < /footer >


        <
        /div>
    );
}

export default Nosotros;