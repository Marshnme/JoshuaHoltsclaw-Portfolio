import Skills from "./Skills"
import Projects from "./Projects"
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