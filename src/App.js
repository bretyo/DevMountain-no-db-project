import { Component } from 'react';
import './App.css';
import MadLibs from './components/MadLibs'

class App extends Component {
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
    // console.log(this.state.entryItems.nouns)
    // let psg = this.loadPassage()
    // let key = Object.keys(this.state.entryItems[1])
    //   .toString()
    //   .replaceAll('_', ' ')
    //   .replace('ing', '\'ing\'')

    // let options = this.state.entryItems.map((element, index)=>{
    //   for (const key in element) {
    //     return <option key={index}>{element[key]}</option>
    //   }
    // })
    return (
      <div className="App">
        <MadLibs/>
        {/* <h2>{psg}</h2>
        <p>{key}</p>
        <input name='madLibs' type='radio'/>
        <label for='madLibs'>New Mad Lib</label>
        <input name='madLibs' type='radio'/>
        <label for='madLibs'>Saved Mad Lib</label>
        <br/>
        <select>
          <option>--SELECT A MADLIB--</option>
          {options}
        </select> */}
      </div>
    );
  }
}

export default App;
