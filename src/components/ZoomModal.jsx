import React from 'react';
import './ZoomModal.css';

const ZoomModal = ({ imgSrc, onClose }) => {
  if (!imgSrc || !imgSrc.image) return null;

  // Usamos la información que viene en imgSrc.info
  const { title, stats, description } = imgSrc.info || {
    title: "Información no disponible",
    stats: [],
    description: "No hay descripción disponible"
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="image-container">
          <img src={imgSrc.image} alt="Zoom" className="zoomed-image" />
        </div>
        
        <div className="data-panel">
          <h3>{title}</h3>
          <ul>
            {stats.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p className="description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ZoomModal;