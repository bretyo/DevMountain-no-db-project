import {Component} from 'react'
import Entry from './Entry';
import Finished from './Finished';

class MadLib extends Component{
    constructor(){
        super();

        this.state = {
            finished: false
        }
    }

    toggleFinished=()=>{
        this.setState({ finished: !this.state.finished })
    }

    updateEntry=(index, value)=>{

    }

    loadPassage=()=>{
        if(this.props.madLib.passage){
            let psg = this.props.madLib.passage;
            for (let i = 0; i < this.props.madLib.entryItems.length; i++) {
                for (const key in this.props.madLib.entryItems[i]) {
                psg = psg.replace('%%%%', this.props.madLib.entryItems[i][key])
                }
            }
            return psg;

        }
    }

    render(){

        let psg = this.loadPassage()
        console.log(this.props.madLib)

        let entries;
        if(this.props.madLib.entryItems){
            entries = this.props.madLib.entryItems.map(element=>{
                for (const key in element) {
                    return <Entry key={key} wordType={key} />
                }
                
            })
        }

        return(
            <div className='madLib content'>
                {!this.state.finished? 
                <div className="entries">
                    {entries}
                </div>
                : <Finished passage={psg}/>}
                <br/>
                <button onClick={this.props.toggleStarted} className='mLBtn'>Back To Menu</button>
                {!this.state.finished?<button onClick={this.toggleFinished} className='mLBtn'>Submit</button> : <button onClick={this.toggleFinished} className='mLBtn'>Edit Mad Lib</button>}
            </div>
        )
    }
}

export default MadLib