import React from 'react';

import './style.scss';

const Information = () => (
  <div className="information">
    <section className="information-section">
      <article className="information-article1">
        <h3 className="information-title">Comment ça marche</h3>
        <p className="information-description">O'Loc est un service de location entre particulier qui vous permet de louer des habits, des costumes, des accessoires, des chaussures.</p>
      </article>
      <article className="information-article2">
        <img className="information-photo" src="https://dvwczakitzjyx.cloudfront.net/packs/images/how_it_works/how-it-work-img-f80ae72c52e1c33431af05ee94695063.png" alt="photo de vetements"></img>
      </article>
    </section>


     
    <div className="information-sectionservice">
      <h3 className="information-sectionservice-title">notre service</h3>
      <section className="information-service">
          <article className="information-article-description">
              <img className="information-photodescription" src="https://dvwczakitzjyx.cloudfront.net/packs/images/how_it_works/step1-c83dd2ec4859b3c5207a3cf64b8c9789.jpg" alt="photo"/>
              <p className="information-para">Nous vous proposons une sélection d'articles variée.</p>
          </article>
          <article className="information-article-description">
              <img className="information-photodescription" src="https://dvwczakitzjyx.cloudfront.net/packs/images/how_it_works/step2-d28fb88c09bbe803a405567edfe25329.jpg" alt="photo"/>
              <p className="information-para">Vos articles vous seront livrés chez vous, ou en main propre par les loueurs</p>
          </article>
      
      
          <article className="information-article-description">
              <img className="information-photodescription" src="https://dvwczakitzjyx.cloudfront.net/packs/images/how_it_works/step3-16a77da1056bfc96e9e1277dfa0922b8.jpg" alt="photo"/>
              <p className="information-para">Portez les vêtements et accessoires aussi longtemps que vous le voulez.</p>
          </article>
          <article className="information-article-description">
              <img className="information-photodescription" src="https://dvwczakitzjyx.cloudfront.net/packs/images/how_it_works/step4-bd22bcc4c4d6b5db2fb39b9d5dc917b2.jpg" alt="photo"/>
              <p className="information-para">Je renvoie les articles au loueur en bon état et laver.</p>
          </article>
        </section>
    
    </div>
    <div className="information-final">
      <img className="information-finalphoto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxFd-BmLBrx-kk8tvFgcEEK3zC-CnJ2Vj72XpmwVoAb_JDdnkS&usqp=CAU" />

    </div>
  </div>
);

export default Information;
