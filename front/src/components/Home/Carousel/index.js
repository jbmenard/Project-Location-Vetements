import React from 'react';
import Slide from './Slide';
//----------------carrousel version desktop ---------------------//

import Watch from '../../../assets/images/watch.jpg';
import Ski from '../../../assets/images/ski.jpg';
import Wedding from '../../../assets/images/wedding.jpg';
// ----------------carrousel version mobile ---------------------//

// import WatchMobile from '../../../assets/images/watch-mobile.jpg';
// import WeddingMobile from '../../../assets/images/wedding-mobile.jpg';
// import SkiMobile from '../../../assets/images/ski-mobile.jpg';

const Carousel = () => (
  <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleControls" data-slide-to="0" className="active" />
      <li data-target="#ccarouselExampleControls" data-slide-to="1" />
      <li data-target="#carouselExampleControls" data-slide-to="2" />
    </ol>
    <div className="carousel-inner" role="listbox">
      <div className="carousel-item active">
        <img className="d-block img-fluid" src={Watch} alt="First slide" />
        <div className="carousel-caption d-md-block">
          <h3 className="h3-responsive">Découvrez dès maintenant nos offres de location de montres</h3>
        </div>
      </div>
      <Slide photo={Wedding} text="Pour nos jeunes futurs mariés, de nombreuses robes, costumes et accessoires sont disponibles." />
      <Slide photo={Ski} text="Allez au ski en toute sérénité et équipé de la tête au pied avec nos offres de location." />
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

);

export default Carousel;
