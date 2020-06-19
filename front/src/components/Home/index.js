import React from 'react';
import './styles.scss';

import Cards from './Cards';
// import Maldives from '../../assets/images/maldives.jpg';
// import Montagne from '../../assets/images/montagne.jpeg';
// import Fleur from '../../assets/images/fleur.jpg';

const Home = () => (
  // --------------- carousel ---------------
  <>
    {/* <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="d-block w-100" src={Maldives} alt="First slide"/>
        <div className="carousel-caption d-md-block">
          <h5>Salut les amis !</h5>
          <p>C'est moi la plage</p>
        </div>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src={Montagne} alt="Second slide"/>
        <div className="carousel-caption d-none d-md-block">
          <h5>.grggrgrgr</h5>
          <p>...</p>
        </div>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src={Fleur} alt="Third slide"/>
        <div className="carousel-caption d-none d-md-block">
          <h5>.grggrgrgr</h5>
          <p>...</p>
        </div>
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div> */}
    <div className="container-cards">
      <Cards title={"JE LOUE"}/>
      <Cards title={"JE RECOIS"}/>
      <Cards title={"JE RENDS"}/>
    </div>

  </>

);

export default Home;
