import React from 'react';
import './styles.scss';
//---------------------- composants -----------------------------//
import Opinion from './Opinion';
import Cards from './Cards';
// ----------------carrousel version desktop ---------------------//

import Watch from '../../assets/images/watch.jpg';
import Ski from '../../assets/images/ski.jpg';
import Wedding from '../../assets/images/wedding.jpg';
// ----------------carrousel version mobile ---------------------//

import WatchMobile from '../../assets/images/watch-mobile.jpg';
import WeddingMobile from '../../assets/images/wedding-mobile.jpg';
import SkiMobile from '../../assets/images/ski-mobile.jpg';
// ------------------cards section service ---------------------//

import Loue from '../../assets/images/je-loue.PNG';
import Reçois from '../../assets/images/je-recois.PNG';
import Rends from '../../assets/images/je-rends.png';

const Home = () => (

  <>
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block  img-responsive img-fluid" src={WatchMobile} alt="First slide" />
          <div className="carousel-caption d-md-block">
            <h5 className="carousel-title">Envie d'une montre de Luxe ?</h5>
            {/* <p>PHRASE D'ACCROCHE</p> */}
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block img-responsive img-fluid" src={SkiMobile} alt="Second slide" />
          <div className="carousel-caption  d-md-block">
            <h5 className="carousel-title">Besoin d'un equipement ?</h5>
            {/* <p>PHRASE D'ACCROCHE</p> */}
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block img-responsive img-fluid" src={WeddingMobile} alt="Third slide" />
          <div className="carousel-caption  d-md-block">
            <h5 className="carousel-title">Invitée à un mariage ? </h5>
            {/* <p className="carousel-text">Louer votre tenue </p> */}
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
    <section className="container-comment">
      <h2 className="cards-title"> Temoignages </h2>
      <span className="invider" />
      <div className="row">

        <div className="comment col-md-4 ">
          <i className="fa fa-user" />
          <h3 className="comment-title"> Martin Dupont</h3>
          <i className="icon-star">★★★★★</i>
          <p className="comment-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt neque, tenetur, delectus necessitatibus itaque voluptatem suscipit voluptatum rem, quaerat ipsa asperiores quo velit voluptas veritatis. Labore nesciunt dolores totam possimus.</p>
        </div>
        <div className="comment col-md-4 ">
          <i className="fa fa-user" />
          <h3 className="comment-title"> Juliette Smith</h3>
          <i className="icon-star">★★★★</i>
          <p className="comment-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quidem vero dolores sequi unde, consequuntur iusto qui voluptatibus delectus blanditiis cumque voluptatem esse adipisci fuga accusantium et at quasi voluptas?</p>
        </div>
        <div className="comment col-md-4">
          <i className="fa fa-user" />
          <h3 className="comment-title">Fatima Abdallah</h3>
          <i className="icon-star">★★★★★</i>
          <p className="comment-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores nostrum soluta quasi adipisci temporibus facere nulla. Consectetur, quasi esse quos magni ut maxime aut libero rem voluptas! Nostrum, iste dolorum?</p>
        </div>
      </div>
    </section>

  </>

);

export default Home;
