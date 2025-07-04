import React, { useState } from 'react';
import mural from '../assets/mural.png';
import g1 from '../assets/g1.png';
import g2 from '../assets/g2.png';
import g3 from '../assets/g3.png';

import ZoomModal from './ZoomModal';
import './Mural.css';

const Mural = () => {
  const [zoomImg, setZoomImg] = useState(null);

  const openZoom = (img) => setZoomImg(img);
  const closeZoom = () => setZoomImg(null);

  return (
    <>
      <div className="mural-container">
        {/* Fondo del mural */}
        <img src={mural} alt="Mural" className="mural-bg" />

        {/* Graffitis posicionados sobre el mural */}
        <img
          src={g1}
          alt="Graffiti 1"
          className="graffiti"
          style={{ top: '30%', left: '20%' }}
          onClick={() => openZoom(g1)}
        />
        <img
          src={g2}
          alt="Graffiti 2"
          className="graffiti"
          style={{ top: '60%', left: '50%' }}
          onClick={() => openZoom(g2)}
        />
        <img
          src={g3}
          alt="Graffiti 3"
          className="graffiti"
          style={{ top: '35%', left: '75%' }}
          onClick={() => openZoom(g3)}
        />
      </div>

      {/* Modal de zoom */}
      <ZoomModal imgSrc={zoomImg} alt="Zoom graffiti" onClose={closeZoom} />
    </>
  );
};

export default Mural;
