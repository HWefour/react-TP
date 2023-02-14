import React, { Component } from "react";
class Personne extends Component {
    state = {
        nom: '',
        age: '',
    }
    render() {
        return (
            <>
                <h1>CouCou, {this.state.nom}</h1>
                <h2> Tu as :{this.state.age} ans</h2>
                <label htmlFor='nom'>Nom</label>
                <input id='nom' type='text' value={this.state.nom} onChange={n => this.setState({ nom: n.target.value })}></input>
                <label htmlFor='age'>Age</label>
                <input id='age' type='text' value={this.state.age} onChange={a => this.setState({ age: a.target.value })}></input>
            </>
        )
    }
}
export default Personne;