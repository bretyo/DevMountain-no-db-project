import {Component} from 'react'

class Entry extends Component{
    constructor(){
        super();

        this.state = {
            inputVal: ''
        }
    }

    handleChange=(value)=>{
        this.setState({inputVal: value})
        this.props.updateEntry(this.props.name, value)
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
            <div className='entry'>
                <p>{this.props.wordType}</p>
                <input placeholder={this.props.placeholder} value={this.state.inputVal} onChange={e=>this.handleChange(e.target.value)} /> 
            </div>
        )
    }
}

export default Entry