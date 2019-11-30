import React from 'react'
import { Link } from 'react-router-dom'

let FontAwesomeIcon = require('react-fontawesome')

const Footer = () => (
    <footer className="text-muted bg-dark">
        <div className="container">
            <p>Contact me
                <a className="ml-3 mr-1 link" href="http://vk.com/valik_danilov/" target="blank"> <FontAwesomeIcon name="vk" /></a>
                <a className="mr-1 link" href="https://www.instagram.com/_paintroller/" target="blank"> <FontAwesomeIcon name="instagram" /></a>
                <a className="mr-1 link" href="https://www.linkedin.com/in/%D0%B2%D0%B0%D0%BB%D0%B5%D0%BD%D1%82%D0%B8%D0%BD-%D0%B4%D0%B0%D0%BD%D0%B8%D0%BB%D0%BE%D0%B2-162a3a170/"
                    target="blank"> <FontAwesomeIcon name="linkedin" /></a>
            </p>
            <p>
                <Link className="link" to="/">Visit the homepage</Link>
            </p>
            <p>© Copyright, 2019</p>
        </div>
    </footer>
)

export default Footer;