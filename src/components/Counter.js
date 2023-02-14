import React, { Component } from "react";
class CounterButton extends Component{
    state={
        compteur : 0
    }
    handleClick=()=>{
        this.setState(anciennevaleure => ({
            compteur : anciennevaleure.compteur +1
        }))
    }
render(){
    return (
        <button onClick={this.handleClick} >
            Cliquez Ici : {this.state.compteur}
        </button>
    )
}
}
export default CounterButton;


