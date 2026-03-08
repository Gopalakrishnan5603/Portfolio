import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Home from "./Home";
import Journey from "./Journey";

function Portfolio() {
    return (
        <>
            <section id="home">
                <Home />
            </section>

            <section id="about">
                <About />
            </section>

            <section id="journey">
                <Journey />
            </section>

            <section id="skills">
                <Skills />
            </section>

            <section id="projects">
                <Projects />
            </section>

            <section id="contact">
                <Contact />
            </section>
        </>
    );
}

export default Portfolio;