import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Header() {
    const [hash, setHash] = useState('#');
    let locationHash = window.location.hash;

    useEffect(() => {
        console.log(locationHash);
        if (locationHash && locationHash !== '#') {
            setHash(locationHash);
        } else {
            setHash("#home");
        }
    }, [locationHash]);

    return (
        <header className="bg__moonlit">
            <Navbar sticky="top" expand="lg" variant="dark">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav onSelect={(path) => setHash(path)} activeKey={ hash || locationHash} className="m-auto bg-transparent">
                        <Nav.Item>
                            <Nav.Link href="#home" eventKey="#home" title="Home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#about" eventKey="#about" title="About">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#skillset" eventKey="#skillset" title="Skill Set">Skillset</Nav.Link>
                        </Nav.Item>
                        {/* <Nav.Item>
                            <Nav.Link href="#project" eventKey="#project" title="Projects">Projects</Nav.Link>
                        </Nav.Item> */}
                        <Nav.Item>
                            <Nav.Link href="#experience" eventKey="#experience" title="Experience">Experience</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#extra" eventKey="#extra" title="extra">Extracurricular</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Header;