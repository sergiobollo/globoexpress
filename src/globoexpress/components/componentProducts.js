import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import util from "../util";

export default class Products extends Component {
    render() {
        const productItems = this.props.products.map(product => ( <
            Col md = { 4 } >
            <
            div className = "thumbnail text-center mb-3 p-3 bg-secondary" >
            <
            a href = { `#${product.id}` }
            onClick = {
                (e) => this.props.handleAddToCart(e, product)
            } >
            <
            img className = "mx-auto"
            src = { `./products/${product.sku}_2.jpg` }
            alt = { product.title }
            /> <
            p className = "text-warning" > { < small > {
                    product.title
                } < /small >
            } < /p> < /
            a >
            <
            div >
            <
            b > { util.formatCurrency(product.price) } < /b> <
            button className = "btn btn-warning"
            onClick = {
                (e) => this.props.handleAddToCart(e, product)
            } >
            Add to cart <
            /button> < /
            div > <
            /
            div > < /
            Col >
        ))

        return ( <
            div >
            <
            Container >
            <
            Row > { productItems } <
            /Row> < /
            Container > <
            /
            div >
        )
    }
}