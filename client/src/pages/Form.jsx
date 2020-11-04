import React from "react"
import { Col, Container, Row } from "../components/GridControl/Grid"


export default function Form() {
    return (
        <Container >
            <Row>
                <Col size="md-6" >
                    <h1>Hello, I am the Form Page</h1>
                </Col>
                <Col size="md-6">
                    <h1>Hello, I am the Form Page side column</h1>
                </Col>
            </Row>
        </Container>
    )
}