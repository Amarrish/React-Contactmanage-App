import React, { useEffect, useState } from 'react';
import Contactlists from './Contactlists'; 
import Contactscards from './Contactscards'; 
import './style.css';

const Contactpages = () => {
  const [details, setDetails] = useState([]);

  const dataTask = (userdatas) => {
    setDetails([...details, userdatas]);
    localStorage.setItem('details', JSON.stringify([...details, userdatas]));
  };

  const deletecard = (index) => {
    const removecard = [...details];
    removecard.splice(index, 1);
    setDetails(removecard);
    localStorage.setItem('details', JSON.stringify(removecard));
  };

  const onEdit = (editedDetail, index) => {
    const updatedDetails = details.map((item, i) => (i === index ? editedDetail : item));
    setDetails(updatedDetails);
    localStorage.setItem('details', JSON.stringify(updatedDetails));
  };

  useEffect(() => {
    const storedDetails = JSON.parse(localStorage.getItem('details'));
    setDetails(storedDetails || []); // Ensure details is an array even if local storage is empty or invalid.
  }, []);

  return (
    <div className='body'>
      <Contactlists dataTask={dataTask} />
      <div className='d-flex flex-wrap m-5'>
        {details.map((detail, index) => (
          <Contactscards
            detail={detail}
            key={index}
            index={index}
            deletecard={deletecard}
            onEdit={(editedDetail) => onEdit(editedDetail, index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Contactpages;
