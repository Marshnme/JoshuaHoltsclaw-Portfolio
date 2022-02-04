import './NavBar.scss'
import Link from "react-router-dom"
const NavBar = () =>{
    return(
        <nav>
            <ul>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar