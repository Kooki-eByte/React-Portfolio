import React from "react"
import { Col, Container, Row } from "../components/GridControl/Grid"


export default function Project() {
    return (
        <Container >
            <Row>
                <Col size="md-6" >
                    <h1>Hello, I am the Project Page</h1>
                </Col>
                <Col size="md-6">
                    <h1>Hello, I am the Project Page side column</h1>
                </Col>
            </Row>
        </Container>
    )
}