import './App.scss';
import NavBar from './Nav/NavBar';
import {Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
