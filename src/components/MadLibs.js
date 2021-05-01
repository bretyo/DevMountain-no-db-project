import { Component } from 'react';
import './App.css';

class MadLibs extends Component {
  constructor(){
    super();

    this.state = {
      entryItems : [
        {noun: 'bird'},
        {verb_ends_with_ing: 'flying'},
        {noun: 'snake'},
        {verb: 'fight'}
      ],

      passage: `Watch the %%%% %%%% with the %%%%. Surely they will %%%% later`
    }
  }

  loadPassage=()=>{
    let psg = this.state.passage;
    for (let i = 0; i < this.state.entryItems.length; i++) {
      for (const key in this.state.entryItems[i]) {
        psg = psg.replace('%%%%', this.state.entryItems[i][key])
      }
    }
    return psg;
  }

  render(){

    return(
        <div>
            
        </div>
    )
  }

}

export default MadLibs