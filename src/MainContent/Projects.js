
import "./SCSS/Projects.scss"
const Projects = () => {
    return(
        <section className="Project-container">
            <div className="Projects-title">
                <h2>Projects</h2>
            </div>
            <div className="Projects-list">
                <div>
                    <h3>RV NAV</h3>
                    <img src="../Imgs/wompug.jpg" alt="wompug"/>
                </div>
                <div>
                    <h3>Movie Tracker</h3>
                    <img src="../Imgs/shrek.png"/>
                </div>
                <div>
                    <h3>Replate</h3>
                    <img src="../Imgs/cow.jpg"/>
                </div>
            </div>
        </section>
    )
}

export default Projects;