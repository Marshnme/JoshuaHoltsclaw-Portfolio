import { useState } from "react"
import "./SCSS/Projects.scss"
import shrek from "../Imgs/shrek.png"
import wompug from "../Imgs/wompug.jpg"
import cow from "../Imgs/cow.jpg"


const Projects = () => {
    const [projects, setProjects] = useState([
        {
            id:0,
            name:"RVNAV",
            img:shrek,
            gitHubLink:"",
        },
        {
            id:1,
            name:"Replate",
            img:wompug,
            gitHubLink:"",
        },
        {
            id:2,
            name:"MovieTracker",
            img:cow,
            gitHubLink:"",
        },
    ])

    // const [activeSlide, setActiveSlide ] = useState(projects[1])


    // let NextSlide = () =>{
    //     const newIndex = activeSlide + 1;
    //     setActiveSlide(newIndex);
        
    // }
    // let PreviousSlide = () =>{
    //     const newIndex = activeSlide - 1;
    //     setActiveSlide(newIndex);
        
        
    // }

    return(
        <section className="Projects-container">
            <div className="Projects-title">
                <h2>Projects</h2>
            </div>


            <div className="Project-slider">
            <div className="Project-slider-wrapper">
                {projects.map(project => {
                    {console.log(project)}
                    return(
                    <div className="Project-card">
                        <h3>{project.name}</h3>
                        <img src={project.img} className="Project-img"></img>
                    </div>)
                })}
                </div>
            </div>
                {/* <button onClick={() => {NextSlide()}} disabled = {activeSlide.index === projects.length - 1}>Previous</button>
                <button onClick={() => {PreviousSlide()}} disabled = {activeSlide.index === 0}>Next</button> */}
        </section>
    )
}

export default Projects;