import React from "react"
import { Col, Row } from "../GridControl/Grid"

export default function DispaySocialMedia() {
    return (
        <Row>
            <Col className="social-media" size="lg-4 md-12 sm-12">
            <p id="soc-media">Check out my Social Media</p>
            <hr/>
                <Row>
                    <Col size="lg-12 md-12 sm-12" className="inner-social-media">
                        <a className="btn-floating btn-lg btn-git" type="button" role="button"
                            href="https://github.com/Kooki-eByte" rel="noreferrer" target="_blank"><i className="fab fa-github"></i></a>
                        
                        <a className="btn-floating btn-lg btn-tw" type="button" role="button"
                            href="https://twitter.com/HornedoCristian" rel="noreferrer" target="_blank"><i className="fab fa-twitter"></i></a>
                        
                        <a className="btn-floating btn-lg btn-so" type="button" role="button"
                            href="https://stackoverflow.com/users/13659932/cristian-hornedo" rel="noreferrer" target="_blank"><i className="fab fa-stack-overflow"></i></a>

                        <a className="btn-floating btn-lg btn-tw" type="button" role="button"
                            href="https://www.linkedin.com/in/cristian-hornedo/" rel="noreferrer" target="_blank"><i className="fab fa-linkedin-in"></i></a>

                        <a className="btn-floating btn-lg btn-git" type="button" role="button"
                            href="https://docs.google.com/document/d/1ZWOyLIvvMK_7MkTNhzIB1vBb4z4tmCvcGcnVWnHHiSw/edit?usp=sharing" rel="noreferrer" target="_blank"><i className="far fa-file"></i></a>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}