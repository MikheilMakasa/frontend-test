import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAd,
  faAnchor,
  faBicycle,
  faCar,
  faAddressBook,
  faAllergies,
  faAmbulance,
  faAnchorLock,
  faAngleUp,
  faBacon,
  faBank,
  faBookOpen,
  faBox,
  faRadio,
  faVault,
  faEarth,
  faPager,
  faPalette,
  faKey,
  faGamepad,
  faMagic,
} from '@fortawesome/free-solid-svg-icons';

const AwesomeButton = () => {
  const [icon, setIcon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [previousIcon, setPreviousIcon] = useState(null);

  const handleClick = () => {
    setLoading(true);
    const icons = [
      faAd,
      faAnchor,
      faBicycle,
      faCar,
      faAddressBook,
      faAllergies,
      faAmbulance,
      faAnchorLock,
      faAngleUp,
      faBacon,
      faBank,
      faBookOpen,
      faBox,
      faRadio,
      faVault,
      faEarth,
      faPager,
      faPalette,
      faKey,
      faGamepad,
      faMagic,
    ];
    let randomIcon = icons[Math.floor(Math.random() * icons.length)];

    while (randomIcon === previousIcon) {
      randomIcon = icons[Math.floor(Math.random() * icons.length)];
    }

    setTimeout(() => {
      setPreviousIcon(icon);
      setIcon(randomIcon);
      setLoading(false);
    }, 3000);
  };

  return (
    <div className='awesome-button'>
      {icon && <FontAwesomeIcon icon={icon} size='5x' />}
      {loading && !icon && <div className='loader'></div>}
      <button onClick={handleClick} className='btn'>
        Click me
      </button>
    </div>
  );
};
export default AwesomeButton;
