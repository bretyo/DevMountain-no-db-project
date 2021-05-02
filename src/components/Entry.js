import {Component} from 'react'

class Entry extends Component{
    constructor(){
        super();

        this.state = {
            inputVal: ''
        }
    }

    render(){
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

        return(
            <div>
                {this.props.wordType}<input value={this.state.inputVal} onChange={e=>this.setState({inputVal: e.target.value})} /> 
            </div>
        )
    }
}

export default Entry