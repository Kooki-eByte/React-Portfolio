import React from "react"
import cristian from "../assets/images/MyPicture.jpg"
import { Col, Container, Row } from "../components/GridControl/Grid"
import Header from "../components/Header"
import DisplaySocialMedia from "../components/SocialMedia/displaySocialMedia"

export default function Home() {
    return (
        <Container >
           <div className="jumbotron">
                <Header />
                <hr className="hor-line"/>
                <Row>
                    <Col size="lg-6">
                        <img src={cristian} alt="Cristian"/>
                    </Col>
                    <Col size="lg-1">
                    </Col>
                    <Col size="lg-5" className="bio">
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
                            want in a website and how to achieve such things. As well reach a level of expertise that is equal to
                            that of a senior Developer.
                        </p>
                    </Col>
                </Row>
                <DisplaySocialMedia />
            </div>
        </Container>
    )
}