import React, { useEffect, useRef } from "react"
import { Col, Container, Image, Row } from "react-bootstrap"
import Headshot from "../images/headshot.jpg"
import DownArrow from "../images/downarrow.svg"
import { gsap } from "gsap";

const Hero = () => {
    const bounceRef = useRef();
    const fadeRef = useRef();

    useEffect(() => {
        gsap.to(bounceRef.current,
            {
                y: "5",
                duration: 0.6,
                repeat: -1,
                ease:"circ.in",
                yoyo: true
            }
        );

        gsap.fromTo(fadeRef.current,
            {
                opacity: 0
            },
            {
                duration: 2,
                ease:"power1",
                opacity: 1
            }
        );
    });

    return (
        <Container fluid className="hero-container" ref={fadeRef}>
            <Row className="hero-content">
                <Col sm={6} md={4} lg={3}>
                    <Image fluid roundedCircle src={Headshot} />
                </Col>
                <Col>
                    <h1>hi i'm mei.</h1>
                    <p>cs student @ university of maryland, college park</p>
                    <p>i make programs and art.
                        <br />
                        currently organizing bitcamp, the largest collegiate hackathon on the east coast.
                    </p>
                </Col>
            </Row>
            <div className="expand-btn">
                <p>my journey</p>
                <Image src={DownArrow} ref={bounceRef} />
            </div>
        </Container>

    )
}

export default Hero