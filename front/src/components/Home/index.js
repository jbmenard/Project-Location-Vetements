import React from 'react';
import './styles.scss';

import Cards from './Cards';
import Watch from '../../assets/images/watch.jpg';
import Ski from '../../assets/images/ski.jpg';
import Wedding  from '../../assets/images/wedding.jpg';

const Home = () => (
  // --------------- carousel ---------------
  <>
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block  img-fluid" src={Watch} alt="First slide" />
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
        <Cards title="JE LOUE" number={1} text="paragraphe à ecrire" />
        <Cards title="JE RECOIS" number={2} text="paragraphe à ecrire" />
        <Cards title="JE RENDS" number={3} text="paragraphe à ecrire" />
      </div>
    </section>
    <section className="container-temoignages">
      <h2 className="cards-title"> Temoignages </h2>
      <span className="invider" />
      <div className="row">

        <div className="temoignages col-md-4 ">
          <h3 className="temoignages-title"> Heading</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt neque, tenetur, delectus necessitatibus itaque voluptatem suscipit voluptatum rem, quaerat ipsa asperiores quo velit voluptas veritatis. Labore nesciunt dolores totam possimus.</p>
        </div>
        <div className="temoignages col-md-4 ">
          <h3 className="temoignages-title"> Heading</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quidem vero dolores sequi unde, consequuntur iusto qui voluptatibus delectus blanditiis cumque voluptatem esse adipisci fuga accusantium et at quasi voluptas?</p>
        </div>
        <div className="temoignages col-md-4">
          <h3 className="temoignages-title">Heading</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores nostrum soluta quasi adipisci temporibus facere nulla. Consectetur, quasi esse quos magni ut maxime aut libero rem voluptas! Nostrum, iste dolorum?</p>
        </div>
      </div>
    </section>

  </>

);

export default Home;
