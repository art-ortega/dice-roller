import React, {Component} from 'react';
import Dice from './component/dice.js';
import './App.css';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            rolls: [

            ],
            rolled: 0

        }
    }
    diceRoller = () => {
        let {rolls} = this.state
        let newRoll = Math.ceil(Math.random() * 6)
        rolls.push(newRoll)
        this.setState({rolled:newRoll})
    }

    render(){
        return(
                <Dice
                log = {this.state.rolls}
                diceRoller = {this.diceRoller}
                />
        )
    }
}

export default App;
