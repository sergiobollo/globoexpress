import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';

function Contacto() {
    return ( <
        div className = "App" >


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
        p > Dirección: Escalada 942 - CABA < /p> <
        p > Tel: 46839577 / 46352296 / 32212412 < /p> <
        p > WhatsApp: 1165597309 < /p>  <
        p > Mail: < a href = "mailto: info @globoexpress.com.ar" > info @globoexpress.com.ar < /a>< /p > <
        p > Horario: Lunes a Viernes de 8 a 17 hs y Sábados de 10 a 13 hs. < /p>  <
        p > Ventas: Por Mayor y Menor. < /p> <
        p > AVISO IMPORTANTE: No tenemos sucursales en la Argentina Ver < /
        p >
        <
        /Card.Text >  < /
        Card.Body > <
        /Card>

        <
        /div>
    );
}

export default Contacto;