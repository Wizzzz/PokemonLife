import React from 'react';

class AboutUs extends React.Component {
    render() {
        return (
            <div>
                <section id="about">
                    <div className="container">
                        <div className="row about-container">

                            <div className="col-lg-6 content order-lg-1 order-2">
                                <h2 className="title">À propos de nous</h2>
                                <p>
                                   PokemonLife est un jeu épique où vous incarnez un pokémon dans une aventure remplie de rebondissement ! Prenez place dans un monde original et immersif et devenez le meilleur Pokémon du monde !
                                </p>

                                <div className="icon-box wow fadeInUp">
                                    <div className="icon"></div>
                                    <h4 className="title"><p>Un jeu inédit</p></h4>
                                    <p className="description">Vous avez toujours rêvé de devenir un Pokémon ? C'est désormais possible, gérez votre Pokémon et participez à une aventure hors du commun !</p>
                                </div>

                                <div className="icon-box wow fadeInUp">
                                    <div className="icon"></div>
                                    <h4 className="title"><p>Une aventure formidable</p></h4>
                                    <p className="description">Une énorme carte composée de mystères et de secrets... Accomplissez des quêtes et obtenez les meilleures récompenses inimaginables !</p>
                                </div>

                                <div className="icon-box wow fadeInUp">
                                    <div className="icon"></div>
                                    <h4 className="title"><p>Incarnez votre vraie nature</p></h4>
                                    <p className="description">Vous préférez passer votre temps à dévorer des baies ou vous préférez affronter les plus dangereux Pokémons de l'univers ? Choisissez ce qui vous correspond le plus dans cette aventure exceptionnelle !</p>
                                </div>

                            </div>

                            <div className="col-lg-6 background order-lg-2 order-1 wow fadeInRight"></div>
                        </div>

                    </div>
                </section>
            </div>
        );
    }
}

export default AboutUs;