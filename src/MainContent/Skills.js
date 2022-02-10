import {useState} from 'react';
import "./SCSS/Skills.scss"
import About from './About';
import {ReactComponent as Picture} from "../Imgs/ufo-svgrepo-com.svg"


const Skills = () =>{

    const [switchComp, setSwitchComp] = useState(true);
     
    return(
        <section className="Skills-container">
            <div className="Ufo-intro-grouping">
                <svg><Picture/></svg>
                <div className="Basic-intro">
                    <h2>Joshua Holtsclaw</h2>
                    <span>Front-end Developer</span>
                    <p>Creating websites for my career and for fun</p>
                    <span>Github Link</span>
                </div>
            </div>
            
        <div className="Skills-swapper">
            <button onClick={()=>{setSwitchComp(true)}}>Skills</button>
            <button onClick={()=>{setSwitchComp(false)}}>About</button>
        </div>
            {switchComp 
            ? 

        <div className="Skills-list">
            <div className="Single-skill">
                <p>HTML5</p>
                <img className="Lang-svgs" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />

            </div>
            <div className="Single-skill">
                <p>CSS3</p>
                <img className="Lang-svgs" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
            </div>
            <div className="Single-skill">
                <p>JavaScript</p>
                <img className="Lang-svgs" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />

            </div>
            <div className="Single-skill">
                <p>React</p>
                <img className="Lang-svgs" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
            </div>
        </div>
    :
        <section className="About-section">
            <About/>
        </section>
    }
        </section>
    )
}

export default Skills;