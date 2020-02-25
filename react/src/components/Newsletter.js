import React from 'react';
import axios from 'axios';

class Newsletter extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            tmp: ""
        };
    }

    myChangeHandler = (event) => {
        this.setState({ 
            email: event.target.value 
        })
    }
    
    postEmail() {
        axios({
            method: 'POST',
            url: 'http://localhost:8080/addemail',
            data: {
                EMAIL: this.state.email
            }
        }).then(() => {
            this.setState({
                tmp: "Merci d'avoir rejoins notre newsletter !"
            })
        }).catch(() => {
            this.setState({
                tmp: "Votre adresse est déjà enrengistré à notre base de données"
            })
        })
    }
    render() {
        return (
            <div>
                <section id="newsletter">
                    <div className="container wow fadeIn ">
                            <div className="section-header">
                                <h3 className="cta-title">Newsletter</h3>
                                <p className="cta-text">Notre projet vous intéresse ? Inscrivez-vous à notre newsletter !</p>
                            </div>
                            <div className="input-group mb-3 cent">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">@</span>
                                    <input className="form-control" value={this.state.email} onChange={this.myChangeHandler} type="email" placeholder="Votre mail"></input>
                                </div>
                                <br/>
                            <button className="btn btn-light input cent" onClick={() => this.postEmail()} type="button">Envoi</button>
                            <p className="cta-text"> {this.state.tmp}</p>
                            </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Newsletter;