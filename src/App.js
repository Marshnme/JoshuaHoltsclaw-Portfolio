import './App.scss';
import NavBar from './Nav/NavBar';
import MainContent from './MainContent/MainContent'
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <>
    <div className="stars"></div>
    <div className="twinkling"></div>
    <div className="App-container"> 
    
      <NavBar/>
      <MainContent/>
      
      {/* <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="" element={</>}/>}/>
        <Route path="" element={</>}/>}/>
        <Route path="" element={</>}/>}/>
      </Routes> */}
      
    </div>
    </>
  );
}

export default App;
