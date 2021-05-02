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

    componentDidMount(){
        this.setState({ entryItems: this.props.madLib.entryItems })
    }

    toggleFinished=()=>{
        this.setState({ finished: !this.state.finished })
    }

    updateEntry=(index, value)=>{
        this.props.updateEntry(index, value)
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

    handleSave=()=>{
        console.log(this.props.madLib)
        this.props.toggleStarted(this.props.madLib, 'saved')
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

        return(
            <div className='madLib content'>
                {!this.state.finished? 
                <div className="entries">
                    {entries}
                </div>
                : <Finished title={this.props.madLib.title} passage={psg}/>}
                <br/>
                <div className='btnsGroup'>
                    <button onClick={this.props.toggleStarted} className='mLBtn'>Back To Menu</button>
                    {!this.state.finished?
                        <button onClick={this.toggleFinished} className='mLBtn'>Submit</button> : 
                        <button onClick={this.toggleFinished} className='mLBtn'>Edit Mad Lib</button>}
                    {this.state.finished && <button onClick={this.handleSave}>Save Finished Mad Lib</button>}
                </div>
            </div>
        )
    }
}

export default MadLib