import React, { useState } from 'react';
import mural from '../assets/mural.png';
import g1 from '../assets/g1.png';
import g2 from '../assets/g2.png';
import g3 from '../assets/g3.png';
import mumu from '../assets/mural_barranco.jpg';
import puente from '../assets/puente_bar.jpeg';
import gif1 from '../assets/p_cam.gif';
import ZoomModal from './ZoomModal';
import './Mural.css';

const Mural = () => {
  const [zoomImg, setZoomImg] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

const openZoom = (itemId) => {
  const selectedItem = graffitiItems.find(item => item.id === itemId);
  setZoomImg({
    image: selectedItem.zoomImg,
    info: selectedItem.info
  });
};  const closeZoom = () => setZoomImg(null);

 const graffitiItems = [
    { 
      id: 1, 
      img: puente, 
      label: "Puente de los suspiros", 
      zoomImg: gif1, 
      position: { top: '30%', left: '20%' },
      // Añadimos los datos específicos para este elemento
      info: {
        title: "PUENTE DE LOS SUSPIROS",
        stats: [
          "↑ 320% en alquileres (2013-2023)",
          "↓ 60% comercios tradicionales desaparecieron",
          "12 Airbnbs en 100m a la redonda",
          "Precio promedio vivienda: $450,000"
        ],
        description: "Icono cultural afectado por turismo masivo y especulación inmobiliaria."
      }
    },
    { 
      id: 2, 
      img: g2, 
      label: "Arte Urbano 2", 
      zoomImg: g2, 
      position: { top: '60%', left: '50%' },
      info: {
        title: "GALERÍA ARTESANAL",
        stats: [
          "Último local de una familia barranquina",
          "Alquiler aumentó de $400 a $1,500/mes",
          "3 generaciones trabajando aquí",
          "Se convertirá en café boutique en 2024"
        ],
        description: "Los espacios culturales auténticos desaparecen por los altos costos."
      }
    },
    { 
      id: 3, 
      img: g3, 
      label: "Arte Urbano 3", 
      zoomImg: g3, 
      position: { top: '35%', left: '75%' },
      info: {
        title: "VIVIENDA TRADICIONAL",
        stats: [
          "Antiguos residentes: 12 → 3 familias",
          "↑ 400% valor de la propiedad",
          "Convertida en 5 departamentos de lujo",
          "Nuevos residentes: 100% extranjeros"
        ],
        description: "La arquitectura histórica se conserva pero pierde su esencia comunitaria."
      }
    }
  ];

  return (
    <>
          <div className="title-container">
        <h1 className="graffiti-title">GENTRIFICACIÓN:BARRANCO</h1>
      </div>


    <div className="mural-container"></div>

      <div className="mural-container">
        {/* Fondo del mural */}
        <img src={mumu} alt="Mural" className="mural-bg" />
        
        {/* Graffitis posicionados sobre el mural */}
        {graffitiItems.map((item) => (
          <div 
            key={item.id}
            className="graffiti-container"
            style={item.position}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className={`graffiti-label ${hoveredItem === item.id ? 'visible' : ''}`}>
              {item.label}
            </div>
            <img
              src={item.img}
              alt={item.label}
              className="graffiti"
              onClick={() => openZoom(item.id)}
            />
          </div>
        ))}
      </div>

      {/* Modal de zoom */}
      <ZoomModal imgSrc={zoomImg} alt="Zoom graffiti" onClose={closeZoom} />
    </>
  );
};

export default Mural;