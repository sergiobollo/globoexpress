import React from 'react';
import './App.css';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';

function Catalogo() {
    return ( <
        div className = "mx-auto pt-5"
        style = {
            { width: 660, height: 'auto' }
        } >
        <
        ResponsiveEmbed aspectRatio = "1by1" >
        <
        embed type = "application/pdf"

        src = "./media/catalogoEnero2020.pdf#toolbar=0&navpanes=0&scrollbar=0" / >
        <
        /ResponsiveEmbed> < /
        div >

    );
}

export default Catalogo;