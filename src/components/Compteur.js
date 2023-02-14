import React, { Component } from "react";
class Compteur extends Component {
    state = {
        compteur: 0
    }
    handleClickplus = () => {
        if (this.state.compteur >= 5) {
            alert('tu peux pas aller au dessus de 5');
        }
        else {
            this.setState(valeur => ({
                compteur: valeur.compteur + 1,
            }))
        }
    }
    handleClickmoins = () => {
        if (this.state.compteur <= 0) {
            alert('tu peux pas aller en dessous de 0');
        }
        else {
            this.setState(valeur => ({
                compteur: valeur.compteur - 1

            }))
        }
    }
    render() {

        return (
            <>
                <h1>{this.state.compteur}</h1>
                <button onClick={this.handleClickplus}>
                    Ajoutez ici :
                </button>
                <button onClick={this.handleClickmoins}>
                    Enlevez ici :
                </button>

            </>
        )
    }
}
export default Compteur;

