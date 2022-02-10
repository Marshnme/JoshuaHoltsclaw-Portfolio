
import "./SCSS/Projects.scss"
import shrek from "../Imgs/shrek.png"
import wompug from "../Imgs/wompug.jpg"
import cow from "../Imgs/cow.jpg"
const Projects = () => {
    return(
        <section className="Project-container">
            <div className="Projects-title">
                <h2>Projects</h2>
            </div>
            <div className="Projects-list">
                <div>
                    <h3>RV NAV</h3>
                    <img className="Project-img" src={wompug} alt="wompug"/>
                </div>
                <div>
                    <h3>Movie Tracker</h3>
                    <img className="Project-img" src={shrek}/>
                </div>
                <div>
                    <h3>Replate</h3>
                    <img className="Project-img" src={cow}/>
                </div>
            </div>
        </section>
    )
}

export default Projects;