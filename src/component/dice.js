import React, {Component} from 'react'
import '../App.css'



class Dice extends Component{
    render(){
        return(
            <div>
                <div className = "dice-box">
                    <ol>
                        {this.props.log}
                    </ol>
                 </div>
                <button onClick = {this.props.diceRoller}> Roll dice </button>
            </div>
        )
    }
}

export default Dice
