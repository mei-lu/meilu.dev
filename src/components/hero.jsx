import * as React from "react"
import { Container, Image } from "react-bootstrap"
import Headshot from "../images/headshot.jpg"

const Hero = () => {
    return (
        <Container fluid className="hero-container">
            <Image fluid roundedCircle src={Headshot}/>
            <h1>hi i'm mei.</h1>
            <h3>cs student @ university of maryland, college park</h3>
            <p>i make programs, illustrations, and yummy food. 
                currently organizing bitcamp, umd’s premier hackathon 
                and the largest collegiate hackathon on the east coast.</p>

            <div>my journey</div>
        </Container>

    )
}

export default Hero