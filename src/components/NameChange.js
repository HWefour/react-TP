
import React, { Component } from "react";
class ChangeName  extends Component{
    state = {
        nom : ''
    }
    
    render(){
        return(
            <>
            <h1>Bonjour, {this.state.nom} </h1>
            
        <input id ='nom' /* type='text' */ value={this.state.nom} onChange={e => this.setState({nom : e.target.value})}></input>
        </>
    )}
    }

export default ChangeName;