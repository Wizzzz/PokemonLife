import React from 'react';
import axios from 'axios';

class Pokemon extends React.Component {
    constructor() {
      super();
      this.state = {
          sprite: []
        };
    }

    generatePokemonId(){
        var id = [];
        for (var i = 0; i < 3; i++)
            id[i] = Math.floor(Math.random() * (720 - 1) + 1);
        return id;
    }

    async getPokemonData() {
        var data = []
        var id = this.generatePokemonId()
        for (var i = 0; i < 3; i++) {
            await axios({
                method: 'get',
                url: 'https://pokeapi.co/api/v2/pokemon/' + id[i],
              }).then(function (response) {
                  data.push(response.data.sprites.front_default)
                });
        }
        this.setState({
            sprite: data
        })
    }

    componentDidMount(){
        this.getPokemonData()
    }

    render() {
        return (
            <section id="pokemon">
                    <div className="container wow fadeIn">
                        <div className="section-header">
                            <h3 className="section-title">Une aventure unique !</h3>
                            <p className="section-description">Vivez la vraie aventure Pokemon, incarnez parmi plus de 700 Pokémons</p>
                        </div>
                        <div className="row text-center">
                            <div className="col-lg-4 col-md-4 col-6">
                                <img src={this.state.sprite[0]} alt="Img"></img>
                            </div>
                            <div className="col-lg-4 col-md-4 col-6">
                                <img src={this.state.sprite[1]} alt="Img"></img>
                            </div>
                            <div className="col-lg-4 col-md-4 col-6">
                                <img src={this.state.sprite[2]} alt="Img"></img>
                            </div>
                        </div>
                </div>
            </section>
        );
    }
  }
  
export default Pokemon;