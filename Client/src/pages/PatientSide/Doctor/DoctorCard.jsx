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
        <div className='doc-details'>
          <div className='doc-details-heading'>
              <img/>
              <h2>Hello</h2>
          </div>
        </div>

      )}
    </div>
  );
};

export default DoctorCard;