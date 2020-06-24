import React from 'react';
import Button from 'src/components/Button';

import './style.scss';

const Information = () => (
  <div className="information-page">
    <section className="intro">
      <article className="intro-left">
        <h1 className="intro-title">Qui sommes-nous ?</h1>
        <p className="intro-text">O'Loc est un service de location entre particuliers, qui vous permet de louer des vêtements, déguisements ou accessoires pour un évènement ou pour une courte durée.</p>
        <p className="intro-text">Tu te rends sur les pistes enneigées pour les vacances d'hiver ? Loues ici une combinaison de ski au moindre coût et tu éviteras d'acheter un produit que tu ne porteras qu'à de rares occasions.</p>
        <Button type="button" size="x-large" color="orange" value="Notre catalogue" />
      </article>
      <article className="intro-right">
        <img className="intro-image" src="https://www.lenouveleconomiste.fr/wp-content/uploads/2018/06/location-826x459.jpg" alt="avatar" />
      </article>
    </section>
    <section className="steps">
      <h1 className="steps-title">Notre service</h1>
      <article className="steps-container">
        <div className="steps-item">
          <section className="steps-item-top">Image 1</section>
          <section className="steps-item-bottom">Description 1</section>
        </div>
        <div className="steps-item">
          <section className="steps-item-top">Image 2</section>
          <section className="steps-item-bottom">Description 2</section>
        </div>
        <div className="steps-item">
          <section className="steps-item-top">Image 3</section>
          <section className="steps-item-bottom">Description 3</section>
        </div>
        <div className="steps-item">
          <section className="steps-item-top">Image 4</section>
          <section className="steps-item-bottom">Description 4</section>
        </div>
      </article>
    </section>
  </div>
);

export default Information;
