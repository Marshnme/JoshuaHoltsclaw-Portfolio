import Skills from "./Skills"
import Projects from "./Projects"
import About from "./About"
import "./SCSS/MainContent.scss"

const MainContent = () => {
    return(
        <main className="Main-container">
            <Skills/>
            <Projects/>
        </main>
    )
}

export default MainContent;