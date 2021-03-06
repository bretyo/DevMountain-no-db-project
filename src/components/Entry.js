import {Component} from 'react'

class Entry extends Component{
    constructor(){
        super();

        this.state = {
            inputVal: ''
        }
    }

    componentDidMount(){
        this.setState({inputVal: this.props.placeholder})
    }

    handleChange=(value)=>{
        this.setState({inputVal: value})
        this.props.updateEntry(this.props.name, value)
    }

    render(){

        return(
            <div className='entry'>
                <h4>{this.props.wordType.replaceAll('_', ' ')}</h4>
                <input placeholder={this.props.placeholder} value={this.state.inputVal} onChange={e=>this.handleChange(e.target.value)} /> 
            </div>
        )
    }
}

export default Entry