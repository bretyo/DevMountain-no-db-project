import './App.css';
import Header from './components/Header';
import MadLibs from './components/MadLibs';
import shelf from './blurrybookshelf.png'
import fridge from './Gfp-fridge-door-texture.jpg'
import { Component } from 'react';



class App extends Component {
  constructor(){
    super();

    this.state={
      fridged: false
    }
  }

  toggleFridged=()=>{
    this.setState({ fridged: !this.state.fridged})
  }

  render(){
    return (
      <div style={{ 'backgroundImage': `url(${!this.state.fridged? shelf: fridge})`, 'backgroundSize': 'cover'}} className="App">
        <Header/>
        <MadLibs toggleFridged={this.toggleFridged}/>
        
      </div>
    );

  }
  
  
}

export default App;
