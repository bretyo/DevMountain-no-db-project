import {Component} from 'react'
import Sample from './Sample'

class Menu extends Component{
    constructor(){
        super();

        this.state = {
            selectedTitle: '',
            newLib: 'new'
        }
    }

    selectTitle=(e)=>{
        // console.log(e.target)
        // console.log(+e.target[e.target.options.selectedIndex].id[0])
        this.setState({ selectedTitle: this.props.state.madLibs[+e.target[e.target.options.selectedIndex].id[0]]})
    }

    reSelectTitle=(e)=>{
        console.log(e.target.value)
        if(e.target.value==='new' && this.state.selectedTitle){
            this.setState({ selectedTitle: this.props.state.madLibs[this.state.selectedTitle.id]})
        }
        else if(e.target.value==='saved' && this.state.selectedTitle){
            this.setState({ selectedTitle: this.props.state.madLibsFinished[this.state.selectedTitle.id]})
        }
    }

    onNewLibChange=(event)=>{
        this.reSelectTitle(event)
        this.setState({ newLib: event.target.value})

    }

    render(){
        const {state} = this.props;
        let options = this.state.newLib==='new'? state.madLibs : state.madLibsFinished;
        if(options){
            options = options.map(element=>{
                return <option id={element.id + 'option'} key={element.id}>{element.title}</option>
            })
        } 

        console.log(this.state.selectedTitle)
        return(
            <div className='menu content'>
                <section onChange={this.onNewLibChange}>
                    <input defaultChecked='true' value='new' name='madLibs' type='radio'/>New Mad Lib
                    <input value='saved'  name='madLibs' type='radio'/>Saved Mad Lib
                </section>
                <br/>
                <select onChange={e=>this.selectTitle(e)}>
                    <option>--SELECT A MADLIB--</option>
                    {options}
                </select>
                {/* <h2>{psg}</h2>
                <p>{key}</p>
                
                 */}
                <Sample madLibSelected={this.props.madLibSelected}/>

                {this.state.newLib==='saved' && <button onClick={()=>this.props.deleteFinished(this.state.selectedTitle.id)}>Delete</button>}
                <button onClick={()=>this.props.toggleStarted(this.state.selectedTitle)}>Start</button>
            </div>
        )
    }
}

export default Menu