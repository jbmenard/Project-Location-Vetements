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
      <span className="invider" />
      <div className="row">
        <Cards title="JE LOUE" image={Loue} number={1} text="Créez votre profil et choisissez les produits qui vous interessent." />
        <Cards title="JE RECOIS" image={Reçois} number={2} text="Prenez contact avec le loueur et recevez votre produit." />
        <Cards title="JE RENDS" image={Rends} text="Faut rendre les affaires " number={3} />
      </div>
    </section>
                              {/* OPINION  */}

    <section className="container-comment">
      <h2 className="cards-title"> Temoignages </h2>
      <span className="invider" />
      <div className="row">
        <Opinion name="Martin Dupont" start="★★★★★" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt neque, tenetur, delectus necessitatibus itaque voluptatem suscipit voluptatum rem, quaerat ipsa asperiores quo velit voluptas veritatis. Labore nesciunt dolores totam possimus." />

        <Opinion name="Juliette Smith" start="★★★★" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt neque, tenetur, delectus necessitatibus itaque voluptatem suscipit voluptatum rem, quaerat ipsa asperiores quo velit voluptas veritatis. Labore nesciunt dolores totam possimus." />

        <Opinion name="Fatima Abdallah" start="★★★★★" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt neque, tenetur, delectus necessitatibus itaque voluptatem suscipit voluptatum rem, quaerat ipsa asperiores quo velit voluptas veritatis. Labore nesciunt dolores totam possimus." />

      </div>
    </section>

  </>

);

export default Home;
