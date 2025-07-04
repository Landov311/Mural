import React from "react";

const GraffitiInfo = ({ data, onClose }) => {
  return (
    <div className="mt-4 bg-white text-black p-4 rounded shadow-md w-[500px]">
      <h2 className="text-xl font-semibold">{data.title}</h2>
      <p className="mt-2">{data.description}</p>
      <button
        onClick={onClose}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Cerrar
      </button>
    </div>
  );
};

export default GraffitiInfo;
