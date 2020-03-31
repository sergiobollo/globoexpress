import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Productos() {
    return ( <
        div className = "App" >
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
        Row > < /
        Container > < /
        div >
    );
}

export default Productos;