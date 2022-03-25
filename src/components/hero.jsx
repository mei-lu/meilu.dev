import * as React from "react"
import { Col, Container, Image, Row } from "react-bootstrap"
import Headshot from "../images/headshot.jpg"
import DownArrow from "../images/downarrow.svg"

const Hero = () => {
    return (
        <Container fluid className="hero-container">
            <Row className="hero-content">
                <Col sm={6} md={4} lg={3}>
                    <Image fluid roundedCircle src={Headshot} />
                </Col>
                <Col>
                    <h1>hi i'm mei.</h1>
                    <p>cs student @ university of maryland, college park</p>
                    <p>i make programs and art.
                        <br/>
                        currently organizing bitcamp, the largest collegiate hackathon on the east coast.
                    </p>
                </Col>
            </Row>
            <div className="expand-btn">
                <p>my journey</p>
                <Image src={DownArrow}/>
            </div>
        </Container>

    )
}

export default Hero