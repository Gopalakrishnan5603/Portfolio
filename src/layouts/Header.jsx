import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import styles from "../css/Header.module.css";
import gk from "../assets/Images/GK.jpg";

const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Journey", id: "journey" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
];

function Header() {
    const handleScroll = (e, id) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className={styles.navbar}>
            <Container>

                {/* LEFT - PROFILE */}
                <Navbar.Brand as={Link} to="/" className={styles.brand}>
                    <img src={gk} alt="profile" className={styles.profile} />
                    <span className={styles.name}>Gopala krishnan</span>
                </Navbar.Brand>

                {/* MOBILE MENU BUTTON */}
                <Navbar.Toggle aria-controls="offcanvasNavbar" />

                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="start"
                    className={styles.offcanvas}
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">GopalaKrishnan</Offcanvas.Title>
                    </Offcanvas.Header>

                    <Offcanvas.Body>

                        {/* MENU */}
                        <Nav className={`mx-auto ${styles.menu}`}>
                            {navLinks.map(({ label, id }) => (
                                <Nav.Link
                                    key={id}
                                    href={`#${id}`}
                                    className={styles.link}
                                    onClick={(e) => handleScroll(e, id)}
                                >
                                    {label}
                                </Nav.Link>
                            ))}
                        </Nav>

                        {/* SOCIAL ICONS */}
                        <Nav className={styles.icons}>
                            <Nav.Link href="https://www.linkedin.com/in/sgopala-krishnan/" target="_blank"><FaLinkedin /></Nav.Link>
                            <Nav.Link href="https://github.com/Gopalakrishnan5603" target="_blank"><FaGithub /></Nav.Link>
                            <Nav.Link href="https://www.instagram.com/krish_gopal_46" target="_blank"><FaInstagram /></Nav.Link>
                        </Nav>

                    </Offcanvas.Body>
                </Navbar.Offcanvas>

            </Container>
        </Navbar>
    );
}

export default Header;