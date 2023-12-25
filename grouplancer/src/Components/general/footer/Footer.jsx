import React from "react";
import { Link } from "react-router-dom";
import './Footer_css.css';

const Footer = () => {
    return (
        <div>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Footer 1</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="true" referrerPolicy="no-referrer" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet" />
            <section id="footer">
                <footer className="top">
                    <img src="grouplance-logo.png" alt="logo" />
                    <div className="links">
                        <div>
                            <h2>Platform</h2>
                            <Link to={`/`}>Directus Core</Link>
                            <Link to={`/`}>Open Data Platform</Link>
                            <Link to={`/`}>Feature List</Link>
                            <Link to={`/`}>Road Map</Link>
                            <Link to={`/`}>Marketplace</Link>
                        </div>
                        <div>
                            <h2>Cloud</h2>
                            <Link to={`/`}>Dashboard</Link>
                            <Link to={`/`}>Register</Link>
                            <Link to={`/`}>Pricing</Link>
                            <Link to={`/`}>System Status</Link>
                            <Link to={`/`}>Partner Program</Link>
                        </div>
                    </div>
                </footer>
                <footer className="bottom">
                    <div className="legal">
                        <span> © 2023 All rights reserved </span>
                        <Link to={`/`}>License</Link>
                        <Link to={`/`}>Terms</Link>
                        <Link to={`/`}>Privacy</Link>
                    </div>
                    <div className="links">
                        <Link to={`/`} className="fa-brands fa-github" />
                        <Link to={`/`} className="fa-brands fa-linkedin" />
                        <Link to={`/`} className="fa-brands fa-docker" />
                    </div>
                </footer>
            </section>
        </div>
    );
}

export default Footer;