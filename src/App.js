import './App.css';
import Header from './components/Header';
import MadLibs from './components/MadLibs';
import shelf from './800px_COLOURBOX2306258.jpg'



function App () {
  
    return (
      <div style={{ 'backgroundImage': `url(${shelf})`, 'backgroundSize': 'cover'}} className="App">
        <Header/>
        <MadLibs/>
        
      </div>
    );
  
}

export default App;
