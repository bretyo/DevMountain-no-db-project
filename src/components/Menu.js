import {Component} from 'react'
import MadLibOption from './MadLibOption';
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
        const title = this.state.newLib==='new'? 
            {...this.props.state.madLibs[+e.target[e.target.options.selectedIndex].id[0]]}  : 
            {...this.props.state.madLibsFinished[+e.target[e.target.options.selectedIndex].id[0]]}
        this.setState({ selectedTitle: title })
        
    }

    // WEIRD EDGE CASE WHERE CHANGING RADIO BUTTONS DIDN'T RESET THE VALUE OF THE SELECTED TITLE
    reSelectTitle=(e)=>{
        // console.log(e.target.value)
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

    handleDelete=()=>{
        this.state.selectedTitle && this.props.deleteFinished(this.state.selectedTitle.id)
        this.setState({selectedTitle: null})
    }

    render(){
        const {state} = this.props;
        let options = this.state.newLib==='new'? state.madLibs : state.madLibsFinished;
        if(options){
            options = options.map((element, index)=>{
                return <MadLibOption elTitle={element.title} key={index} id={element.id + 'option'}/>
            })
        } 
        console.log(this.state.selectedTitle)
        return(
            <div className='menu content'>
                <section className='madLibRBtns' onChange={this.onNewLibChange}>
                    <div>
                        <input id='newBtn' defaultChecked='true' value='new' name='madLibs' type='radio'/><label htmlFor='newBtn'>New Mad Lib</label>
                    </div>
                    <div>
                        <input id='savedBtn' value='saved'  name='madLibs' type='radio'/><label htmlFor='savedBtn'>Saved Mad Lib</label>
                    </div>
                </section>
                <br/>
                <select className='mLSelect' onChange={e=>this.selectTitle(e)}>
                    <option> --SELECT A MADLIB-- </option>
                    {options}
                </select>

                <Sample madLibSelected={this.state.selectedTitle}/>
                <div className='menuBtns'>
                    {(this.state.newLib==='saved' && this.state.selectedTitle) && <button onClick={this.handleDelete}>Delete</button>}
                    {this.state.selectedTitle && <button onClick={()=>this.props.toggleStarted(this.state.selectedTitle, this.state.newLib)}>Start</button>}
                </div>

            </div>
        )
    }
}

export default Menu