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

  deleteFinishedMadLib=(id)=>{
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
    this.getMadLib(0);
  }

  toggleStarted=(madLib)=>{
    this.setState({ madLibSelected: madLib, madLibStarted: !this.state.madLibStarted })
  }

  selectMadLib=(title)=>{

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
                                />}
        </div>
    )
  }

}

export default MadLibs