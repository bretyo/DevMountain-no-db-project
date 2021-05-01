import {Component} from 'react'

class Menu extends Component{
    constructor(){
        super();

        this.state = {
            id: 0,
            title: 'Butts',
            entryItems : [
                {noun: 'bird'},
                {verb_ends_with_ing: 'flying'},
                {noun: 'snake'},
                {verb: 'fight'}
              ],
        
              passage: `Watch the %%%% %%%% with the %%%%. Surely they will %%%% later`
        }
    }

    render(){

        return(
            <div>

            </div>
        )
    }
}

export default Menu