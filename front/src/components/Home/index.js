import React from 'react';
import './styles.scss';

import Cards from './Cards';
import Watch from '../../assets/images/watch.jpg';
import Ski from '../../assets/images/ski.jpg';
import Wedding from '../../assets/images/wedding.jpg';
import Loue from '../../assets/images/je-loue.PNG';
import Reçois from '../../assets/images/je-recois.PNG';
import Rends from '../../assets/images/je-rends.png';

import Martin from '../../assets/images/Martin-Dupont.jpg';
import Juliette from '../../assets/images/Juliette-Smith.jpg';
import Fatima from '../../assets/images/Fatima-Abdallah.jpg';

const Home = () => (
  // --------------- carousel ---------------
  <>
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block img-fluid" src={Watch} alt="First slide" />
          <div className="carousel-caption d-md-block">
            <h5>TITLE</h5>
            <p>PHRASE D'ACCROCHE</p>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block  img-fluid" src={Ski} alt="Second slide" />
          <div className="carousel-caption  d-md-block">
            <h5>TITLE</h5>
            <p>PHRASE D'ACCROCHE</p>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block  img-fluid" src={Wedding} alt="Third slide" />
          <div className="carousel-caption  d-md-block">
            <h5>TITLE</h5>
            <p>PHRASE D'ACCROCHE</p>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
    <section className="card-general">
      <div className="container" />
      <h2 className="cards-title"> Comment ça marche ?</h2>
      <span className="invider" />
      <div className="row">
        <Cards title="JE LOUE" image={Loue} number={1} text="Créez votre profil et choisissez les produits qui vous interessent." />
        <Cards title="JE RECOIS" image={Reçois} number={2} text="Prenez contact avec le loueur et recevez votre produit." />
        <Cards title="JE RENDS" image={Rends} text="Faut rendre les affaires " number={3} />
      </div>
    </section>
    <section className="container-temoignages">
      <h2 className="cards-title"> Temoignages </h2>
      <span className="invider" />
      <div className="row">

        <div className="temoignages col-md-4 ">
          <div className="temoignages-image">
            <img className="temoignages-image--item" src={Martin} alt="Martin" />
          </div>
          <h3 className="temoignages-title"> Martin Dupont</h3>
          <i className="icon-star">★★★★★</i>
          <p className="temoignages-text">Pour un enterrement de vie de jeune garçon, je devais me déguiser en hot-dog géant, j'ai réussi à trouver mon bonheur sur O'Loc, et cette journée a était mémorable.</p>
        </div>
        <div className="temoignages col-md-4 ">
          <div className="temoignages-image">
            <img className="temoignages-image--item" src={Juliette} alt="Juliette" />
          </div>
          <h3 className="temoignages-title"> Juliette Smith</h3>
          <i className="icon-star">★★★★</i>
          <p className="temoignages-text">Lors d'une escapade en Corse, j'ai loué une tenue de plongée sous-marine pour pouvoir partager de bons moments entre amis, grâce à O'Loc j'ai pu explorer les fonds marins dans de bonnes conditions.</p>
        </div>
        <div className="temoignages col-md-4">
          <div className="temoignages-image">
            <img className="temoignages-image--item" src={Fatima} alt="Fatima" />
          </div>
          <h3 className="temoignages-title">Fatima Abdallah</h3>
          <i className="icon-star">★★★★★</i>
          <p className="temoignages-text">J'ai loué une belle robe d'un grand couturier pour assister au mariage d'une amie, tout s'est très bien déroulé du début jusqu'à la fin, j'en suis très ravie, je recommande fortement cette plateforme.</p>
        </div>
      </div>
    </section>

  </>

);

export default Home;
