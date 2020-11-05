import React from "react"
import { Col, Container, Row } from "../components/GridControl/Grid"
// TODO -> import a styling to change the size of fonts and try to grab the image through css

export default function Home() {
    return (
        <Container >
            <Row>
                <Col size="lg-6 md-6 sm-12" >
                    <img src="../assets/Images/MyPicture.jpeg" alt="Cristian" />
                </Col>
                <Col size="lg-6 md-6 sm-12">
                    <p>
                        Hello, My name is Cristian Hornedo. I am a Full Stack Developer.
                    </p>
                    <p>
                        Coding has been apart of my life since I was in highschool, Going back and forth with different ways of
                        approaching a job when I stumbled upon web developement. I've been surfing the web a different way ever
                        since!
                    </p>
                    <p>
                        In Full Stack Developement I aim to appeal on all spectrums of what a person's dream is for what they
                        want in a website and how to achieve such things.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}