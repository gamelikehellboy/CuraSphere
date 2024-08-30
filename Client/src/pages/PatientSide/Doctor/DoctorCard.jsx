import React, { useState } from 'react';
import './DoctorCardStyle.css'

const DoctorCard = ({ name, degree, specialty, rating, available }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="doctor-card" onClick={handleCardClick}>
      <div className="doctor-info">
        <h3 className="doctor-name">{name}</h3>
        <p className="doctor-details">{degree}, {specialty}</p>
        <p className="doctor-availability">Rating: {rating} {available ? ', Available' : ', Not Available'}</p>
      </div>
      {isOpen && (
        <div className="modal-container">
          <div className="overlay">
            <div className="modal">
              <h2>{name}</h2>
              <p>Degree: {degree}</p>
              <p>Specialty: {specialty}</p>
              <p>Rating: {rating} {available ? ', Available' : ', Not Available'}</p>
              <button className="close-button" onClick={handleClose}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorCard;