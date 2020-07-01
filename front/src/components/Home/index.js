import React from 'react';
import './styles.scss';
// ---------------------- composants -----------------------------//
import Opinion from './Opinion';
import Cards from './Cards';
import Carousel from './Carousel';

// ------------------cards section service ---------------------//

import Loue from '../../assets/images/je-loue.PNG';
import Reçois from '../../assets/images/je-recois.PNG';
import Rends from '../../assets/images/je-rends.png';

import Martin from '../../assets/images/Martin-Dupont.jpg';
import Juliette from '../../assets/images/Juliette-Smith.jpg';
import Fatima from '../../assets/images/Fatima-Abdallah.jpg';

const Home = () => (

  <>
                                {/* CAROUSEL  */}

    <Carousel />

                                   {/* CARDS  */}
    <section className="card-general">
      <div className="container" />
      <h2 className="cards-title"> Comment ça marche ?</h2>
      {/* <span className="invider" /> */}
      <div className="row">
        <Cards title="JE LOUE" image={Loue} number={1} text="Créez votre profil et choisissez les produits qui vous interessent." />
        <Cards title="JE RECOIS" image={Reçois} number={2} text="Prenez contact avec le loueur et recevez votre produit." />
        <Cards title="JE RENDS" image={Rends} text="Je renvoie les articles au proprietaire sans les laver " number={3} />
      </div>
    </section>
                              {/* OPINION  */}

    <section className="container-comment">
      <h2 className="cards-title"> Temoignages </h2>
      {/* <span className="invider" /> */}
      <div className="row">
        <Opinion name="Martin Dupont" photo={Martin} text="Je me suis rendu sur O'Loc car je cherchais un déguisement en location pour un enteremment de vie de jeune garçon. J'ai rapidement trouver mon bonheur auprès d'un vendeur autour de chez moi. Je recommande O'Loc." />

        <Opinion name="Juliette Smith" photo={Juliette} text="Pour un voyage en Corse, j'avais besoin d'une tenue de plongée sous-marine pour découvrir les fonds marins avec des amis. Grâce à O'Loc, j'ai pu louer une tenue adaptée à ma taille. Je recommande O'Loc." />

        <Opinion name="Fatima Abdallah" photo={Fatima} text="Pour le mariage d'une de mes meilleures amies, j'ai pu louer une robe d'un grand couturier et j'en suis très ravie. Je recommande fortement la plateforme O'Loc, et je salue la simplicité et la rapidité du service." />

      </div>
    </section>

  </>

);

export default Home;
