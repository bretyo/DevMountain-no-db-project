import {Component} from 'react'
import Entry from './Entry';
import Finished from './Finished';
import _ from 'lodash';

class MadLib extends Component{
    constructor(){
        super();

        this.state = {
            finished: false,
            entryItems: []
        }
    }

    componentDidMount(){
        let entries = [...this.props.madLib.entryItems];
        entries = entries.map(element=>{
            return {...element}
        })
        this.setState({ entryItems: entries })
    }

    toggleFinished=()=>{
        this.setState({ finished: !this.state.finished })
    }

    updateEntry=(index, value)=>{
        const newEntryItems = [...this.state.entryItems]
        // const key = Object.keys(this.state.madLibSelected.entryItems[index])[0];
        for (const key in newEntryItems[index]) {
            newEntryItems[index][key] = value
        }
        this.setState({ entryItems: newEntryItems })
    }

    loadPassage=()=>{
        if(this.props.madLib.passage){
            let psg = this.props.madLib.passage;
            for (let i = 0; i < this.state.entryItems.length; i++) {
                for (const key in this.state.entryItems[i]) {
                psg = psg.replace('%%%%', this.state.entryItems[i][key])
                }
            }
            return psg;

        }
    }

    handleSave=()=>{
        this.props.updateEntry(this.state.entryItems)
        // console.log(this.props.madLib)
        this.props.handleSave(this.props.madLib, 'saved')
    }

    editEntriesUpdate=()=>{
        this.props.updateEntries(this.state.entryItems)
        this.toggleFinished();
    }

    render(){

        let psg = this.loadPassage()

        let entries;
        if(this.props.madLib.entryItems){
            entries = this.props.madLib.entryItems.map((element, index)=>{
                for (const key in element) {
                    return <Entry placeholder={element[key]} name={index} updateEntry={this.updateEntry} key={index} wordType={key} />
                }
                return null // Added this to get rid of a warning: "Line 42:72:  Array.prototype.map() expects a value to be returned at the end of arrow function  array-callback-return"
            })
        }

        console.log(this.state.entryItems)
        return(
            <div className='madLib content'>
                {!this.state.finished? 
                <div className="entries">
                    {entries}
                </div>
                : <Finished title={this.props.madLib.title} passage={psg}/>}
                <br/>
                <div className='btnsGroup'>
                    <button onClick={()=>this.props.toggleStarted({}, '')} className='mLBtn'>Back To Menu</button>
                    {!this.state.finished?
                        <button onClick={this.toggleFinished} className='mLBtn'>Submit</button> : 
                        <button onClick={this.editEntriesUpdate} className='mLBtn'>Edit Mad Lib</button>}
                    {this.state.finished && <button onClick={this.handleSave}>Save Finished Mad Lib</button>}
                </div>
            </div>
        )
    }
}

export default MadLib