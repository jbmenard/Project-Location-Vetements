import React from 'react';
import Button from 'src/components/Button';
import './style.scss';
import Clarisse from '../../assets/images/clarisse.jpeg';
import Kevin from '../../assets/images/kevin.jpeg';
import Roman from '../../assets/images/roman.jpg';
import JB from '../../assets/images/jb.jpg';

const Information = () => (
  <div className="information-page">
    <section className="intro">
      <article className="intro-left">
        <h1 className="intro-title">Qui sommes-nous ?</h1>
        <p className="intro-text">O'Loc est un service de location entre particuliers, qui vous permet de louer des vêtements, déguisements ou accessoires pour un évènement ou pour une courte durée.</p>
        <p className="intro-text">Tu te rends sur les pistes enneigées pour les vacances d'hiver ? Loues ici une combinaison de ski au moindre coût et tu éviteras d'acheter un produit que tu ne porteras qu'à de rares occasions.</p>
        <a href="/products"> <Button type="button" size="x-large" color="orange" value="Notre catalogue" /></a>
         
        
      </article>
      <article className="intro-right">
        <img className="intro-image" src="https://www.lenouveleconomiste.fr/wp-content/uploads/2018/06/location-826x459.jpg" alt="avatar" />
      </article>
    </section>
    <section className="team">
      <h1 className="team-title">Notre équipe</h1>
      <article className="team-container">
        <div className="team-item">
          <section className="team-item-top">
            <img className="team-item-top--image" src={Roman} alt="Roman" />
          </section>
          <section className="team-item-bottom">
            <p className="team-item-bottom--name">Roman</p>
            <p className="team-item-bottom--role">Product Owner - Git Referent</p>
            <div className="team-social">
              <i className="fa fa-envelope-o" aria-hidden="true" />
              <i className="fa fa-linkedin-square" aria-hidden="true" />
            </div>
          </section>
        </div>
        <div className="team-item">
          <section className="team-item-top">
            <img className="team-item-top--image" src={JB} alt="JB" />
          </section>
          <section className="team-item-bottom">
            <p className="team-item-bottom--name">Jean-Baptiste</p>
            <p className="team-item-bottom--role">Scrum Master - Developer</p>
            <div className="team-social">
              <i className="fa fa-envelope-o" aria-hidden="true" />
              <i className="fa fa-linkedin-square" aria-hidden="true" />
            </div>
          </section>
        </div>
        <div className="team-item">
          <section className="team-item-top">
            <img className="team-item-top--image" src={Clarisse} alt="Clarisse" />
          </section>
          <section className="team-item-bottom">
            <p className="team-item-bottom--name">Clarisse</p>
            <p className="team-item-bottom--role">Lead Dev Front</p>
            <div className="team-social">
              <i className="fa fa-envelope-o" aria-hidden="true" />
              <i className="fa fa-linkedin-square" aria-hidden="true" />
            </div>
          </section>
        </div>
        <div className="team-item">
          <section className="team-item-top">
            <img className="team-item-top--image" src={Kevin} alt="Kevin" />
          </section>
          <section className="team-item-bottom">
            <p className="team-item-bottom--name">Kevin</p>
            <p className="team-item-bottom--role">Lead Back Front</p>
            <div className="team-social">
              <i className="fa fa-envelope-o" aria-hidden="true" />
              <i className="fa fa-linkedin-square" aria-hidden="true" />
            </div>
          </section>
        </div>
      </article>
    </section>
  </div>
);

export default Information;
