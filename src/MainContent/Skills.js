import "./SCSS/Skills.scss"

const Skills = () =>{
    return(
        <section className="Skills-container">
            <div className="Basic-intro">
                <h2>Joshua Holtsclaw</h2>
                <span>Front-end Developer</span>
                <p>Creating websites for my career and for fun</p>
                <span>Github Link</span>

            </div>
            <div className="Skills-swapper">
                <button> Skills   </button>
                <button>About</button>
            </div>
            <div className="Skills-list">
                <div className="Single-skill">
                    <p>HTML5</p>
                    <img className="Lang-svgs" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />

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
        </section>
    )
}

export default Skills;