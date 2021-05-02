import {Component} from 'react'

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
            <div className='madLib content'>
                MADLIB
            </div>
        )
    }
}

export default MadLib