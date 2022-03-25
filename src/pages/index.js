import * as React from "react"
import Hero from '../components/hero.jsx'
import Socials from '../components/socials.jsx'
import '../main.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => {
  return (
    <div>
      <Hero />
      <Socials />
    </div>
  )
}

export default IndexPage
