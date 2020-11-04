import React from "react"
import { Col, Container, Row } from "../components/GridControl/Grid"

export default function Home() {
    return (
        <Container >
            <Row>
                <Col size="md-6" >
                    <h1>Hello, I am the Home Page</h1>
                </Col>
                <Col size="md-6">
                    <h1>Hello, I am the Home Page side column</h1>
                </Col>
            </Row>
        </Container>
    )
}