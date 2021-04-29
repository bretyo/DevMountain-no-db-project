import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      entryItems : {
        noun1: 'bird',
        verb1: 'fly',
        noun2: 'snake',
        verb2: 'fight'
      },

      passage: `Watch the NOUN1 VERB1 with the NOUN2. Surely they will VERB2 later`
    }
  }


  loadPassage=()=>{
    let psg = this.state.passage;
      for (const key in this.state.entryItems) {
        psg = psg.replace(key.toUpperCase(), this.state.entryItems[key])
      }
    return psg;
  }

  render(){
    console.log(this.state.entryItems.nouns)
    let psg = this.loadPassage()
    return (
      <div className="App">
        <h2>{psg}</h2>
      </div>
    );
  }
}

export default App;
