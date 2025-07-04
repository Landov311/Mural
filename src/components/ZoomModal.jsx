import React from 'react';
import './ZoomModal.css';

const ZoomModal = ({ imgSrc, alt, onClose }) => {
  if (!imgSrc) return null;          // No mostrar nada si no hay imagen seleccionada

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content">
        <img src={imgSrc} alt={alt} />
      </div>
    </div>
  );
};

export default ZoomModal;
