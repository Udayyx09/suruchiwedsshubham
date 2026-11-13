import React from 'react';
import { weddingConfig } from '../data/weddingConfig';

export default function BlessingsFooter() {
  const coupleText = `${weddingConfig.couple.bride.name} & ${weddingConfig.couple.groom.name}`;

  return (
    <>
      <section className="closing-blessing-section" id="blessingSection">
        <div className="rosette-separator" aria-hidden="true" data-reveal="up">
          <img src="/assets/jewel-rosette.webp" alt="" loading="lazy" />
        </div>
        <p className="closing-sub" data-reveal="up">We await your gracious presence &amp; blessings</p>
        <h2 className="closing-names" data-reveal="up">{coupleText}</h2>
        <p className="closing-date" data-reveal="up">
          {weddingConfig.dates.displayRange} &bull; {weddingConfig.venue.city}
        </p>
        <p className="closing-hashtag" data-reveal="up">{weddingConfig.hashtag}</p>
      </section>

      <footer className="desert-footer" id="footerSection">
        <picture>
          <img 
            src="/assets/desert-folk.webp" 
            alt="Painted Rajasthani desert scene with camel caravan and musicians" 
            className="desert-folk-img" 
            width="3072" 
            height="1528" 
            loading="lazy" 
          />
        </picture>
      </footer>
    </>
  );
}
