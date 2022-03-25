import * as React from "react"
import { Col, Container, Image, Row } from "react-bootstrap"
import Headshot from "../images/headshot.jpg"

const Hero = () => {
    return (
        <Container fluid className="hero-container">
            <Row>
                <Col>
                    <Image fluid roundedCircle src={Headshot} />
                </Col>
                <Col>
                    <h1>hi i'm mei.</h1>
                    <h3>cs student @ university of maryland, college park</h3>
                    <p>i make programs, illustrations, and yummy food.
                        currently organizing bitcamp, umd’s premier hackathon
                        and the largest collegiate hackathon on the east coast.</p>
                </Col>
            </Row>
            <div>my journey</div>
        </Container>

    )
}

export default Hero