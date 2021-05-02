import { Component } from 'react';
import '../App.css';

import axios from 'axios'
import MadLib from './MadLib';
import Menu from './Menu';

class MadLibs extends Component {
  constructor(){
    super();

    this.state = {
        madLibs: [],
        madLibsFinished: [],
        madLibStarted: false,
        madLibSelected: {}
    }
  }

  // * AXIOS FUNCTIONS

  getMadLibs=()=>{
      axios.get(`/api/madLibs`)
      .then(res=>this.setState({ madLibs: res.data }))
      .catch(err=>console.log(err))

      axios.get(`/api/madLibsFinished`)
      .then(res=>this.setState({ madLibsFinished: res.data }))
      .catch(err=>console.log(err))
  }

  getMadLib=(id)=>{
      axios.get(`/api/madLibs/${id}`)
      .then(res=>this.setState({ madLibSelected: res.data }))
      .catch(err=>console.log(err))
  }

    // Necessary for reloading the ID
    getFinishedMadLib=(id)=>{
    axios.get(`/api/madLibsFinished/${id}`)
    .then(res=>this.setState({ madLibSelected: res.data }))
    .catch(err=>console.log(err))
}

  deleteFinishedMadLib=(id)=>{
      axios.delete(`/api/madLibsFinished${id}`)
      .then(res=>this.setState({ madLibsFinished: res.data }))
      .catch(err=>console.log(err))
  }

  addFinishedMadLib=(madLib)=>{
      axios.post(`/api/madLibsFinished`, madLib)
      .then(res=>this.setState({ madLibsFinished: res.data }))
      .catch(err=>console.log(err))
  }

  editFinishedMadLib=(id, changes)=>{
      axios.put(`/api/madLibsFinished/${id}`, changes)
      .then(res=>this.setState({ madLibsFinished: res.data }))
      .catch(err=>console.log(err))
  }

  componentDidMount=()=>{
    this.getMadLibs();
    this.getMadLib(0);
  }

  toggleStarted=(madLib, libType)=>{
    if(libType === 'new') {
        console.log(this.state.madLibsFinished.length)
        console.log(madLib.id)
        madLib.id = this.state.madLibsFinished.length; 
        this.addFinishedMadLib(madLib)
        this.setState({ madLibSelected: madLib})
    }
    else {
        console.log(this.state.madLibsFinished.length)
        console.log(madLib.id)
        this.editFinishedMadLib(madLib.id, madLib)
    }
    // this.getFinishedMadLib(this.state.madLibsFinished.length)
    this.setState({ madLibStarted: !this.state.madLibStarted })
  }

  selectMadLib=(title)=>{

  }

  updateEntry=(index, value)=>{
      const {id, title, entryItems, passage} = this.state.madLibSelected
    const newEntryItems = [...this.state.madLibSelected.entryItems]
    // const key = Object.keys(this.state.madLibSelected.entryItems[index])[0];
    for (const key in newEntryItems[index]) {
        newEntryItems[index][key] = value
    }
    this.setState({ madLibSelected: 
        {
            id: id,
            title: title,
            entryItems: newEntryItems,
            passage: passage
        }
    })
}

  render(){
    const {madLibStarted, madLibSelected} = this.state;
    return(
        <div className='madLibsMain'>
            {!madLibStarted? <Menu 
                                toggleStarted={this.toggleStarted} 
                                deleteFinished={this.deleteFinishedMadLib} 
                                state={this.state} 
                                    /> 
                            : <MadLib
                                madLib={this.state.madLibSelected}
                                toggleStarted={this.toggleStarted}
                                updateEntry={this.updateEntry}
                                />}
        </div>
    )
  }

}

export default MadLibs