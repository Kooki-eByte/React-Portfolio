import React from "react"
import { Col, Container, Row } from "../components/GridControl/Grid"
import Header from "../components/Header"


export default function Project() {
    return (
        <Container >
            <Header />
            <Row>
                <Col size="md-6" >
                    <h1>Hello, I am the Project Page</h1>
                </Col>
                <Col size="md-6" >
                    <h1>Hello, I am the Project Page side column</h1>
                </Col>
            </Row>
        </Container>
    )
}