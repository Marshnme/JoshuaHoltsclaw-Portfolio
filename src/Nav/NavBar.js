import './NavBar.scss'
import {Link} from "react-router-dom"
const NavBar = () =>{
    return(
        <header>
            <nav>
                <ul>
                    <a href="#"><li>Skills</li></a>
                    <a href="#"><li>Projects</li></a>
                    <a href="#"><li>About</li></a>
                </ul>
            </nav>
        </header>
        
    )
}

export default NavBar;