import { Component } from 'react';
import '../App.css';

import axios from 'axios'
import MadLib from './MadLib';
import Menu from './Menu';
import fridge from '../fridge-door-texture-appliance-background-32842800.jpg';
import shelf from '../800px_COLOURBOX2306258.jpg'


class MadLibs extends Component {
  constructor(props){
    super(props);

    this.state = {
        madLibs: [],
        madLibsFinished: [],
        madLibStarted: false,
        madLibSelected: {},
        madLibType : '',
        bg: 'shelf'
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
      console.log(id)
      axios.delete(`/api/madLibsFinished/${id}`)
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
    // this.getMadLib(0);
  }

  toggleStarted=(madLib, libType)=>{
    this.setState({ 
        madLibType: libType,
        madLibSelected: madLib,
        madLibStarted: !this.state.madLibStarted 
        })
  }

  handleSave=()=>{
      const {madLibSelected, madLibType} = this.state
    //   console.log(madLibSelected, madLibType)
    this.state.madLibType === 'new' ?
    this.addFinishedMadLib(madLibSelected) :
    this.editFinishedMadLib(madLibSelected.id, madLibSelected);

    this.setState({ madLibStarted: !this.state.madLibStarted })
  }

  selectMadLib=(title)=>{

  }

  updateEntries=(entryItems, title)=>{
    const {id, passage} = this.state.madLibSelected
    // const key = Object.keys(this.state.madLibSelected.entryItems[index])[0];
    // console.log(title)
    let entries = {
        id: id,
        title: title,
        entryItems: entryItems,
        passage: passage
    }
    // console.log(entries)
    this.setState({ madLibSelected: entries})
    // console.log(this.state.madLibSelected)
}

  toggleFridged=()=>{
    this.props.toggleFridged();
  }

    

  render(){

    
    const {madLibStarted} = this.state;
    // console.log(madLibSelected)
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
                                updateEntries={this.updateEntries}
                                handleSave={this.handleSave}
                                toggleFridged={this.toggleFridged}
                                />}
        </div>
    )
  }

}

export default MadLibs