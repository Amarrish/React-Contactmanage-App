import React, { useState } from 'react';

const Contactcards = ({ detail, deletecard, index, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDetail, setEditedDetail] = useState({ ...detail });
  const[valid,setValid] = useState({
    username:(false),
    number:(false),
    email:(false)
  })
 
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    const isValidusername = !!editedDetail.username.match(/^[A-Z][a-zA-Z0-9_-]{2,19}$/)
    const isValidnumber  = !!editedDetail.number.match(/^(\d{3}[-\s]?)?\d{3}[-\s]?\d{4}$/)
    const isValidemail = !!editedDetail.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)

    if(isValidusername && isValidnumber && isValidemail){
      setValid({
        username:(false),
    number:(false),
    email:(false)
      })
      onEdit(editedDetail, index); // Pass the edited detail and index to the onEdit function
    setIsEditing(false);
    }else{
      setValid({
        username:!isValidusername,
        number:!isValidnumber,
        email:!isValidemail
      })
    }
  };

  return (
    <>
    <div className='justify-content-between w-50'>
      <div className='card w-100' style={{ backgroundColor: '#000', color: 'white',border:'5px solid grey' }}>
        {isEditing ? (
          // Edit mode: render input fields
          <>
            <input
            className='bg-black text-white border-none outline-none'
              type="text"
              name='username'
              value={editedDetail.username}
              onChange={(e) => setEditedDetail({ ...editedDetail, username: e.target.value })}
            />
             {
                valid.username &&
                <div><p className='text-center bg-black border-none outline-none text-danger'>Username is invalid. First letter Cap & Min 3 Letter</p></div>
            }
            <input
             className='bg-black text-white border-none outline-none'
              type="text"
              name='number'
              value={editedDetail.number}
              onChange={(e) => setEditedDetail({ ...editedDetail, number: e.target.value })}
            />
             {
                valid.number &&
                <div><p className='text-center bg-black border-none outline-none text-danger'>Number is invalid. Check 10 numbers is there</p></div>
            }
            <input
             className='bg-black text-white border-none outline-none'
              type="text"
              name='email'
              value={editedDetail.email}
              onChange={(e) => setEditedDetail({ ...editedDetail, email: e.target.value })}
            />
             {
                valid.email &&
                <div><p className='text-center bg-black border-none outline-none text-danger'>Email is invalid</p></div>
            }
            <button className='btn bg-info text-light' onClick={handleSaveClick}>
              Save
            </button>
          </>
        ) : (
          // View mode: display contact details
          <>
          <div className='p-2' >
            <div>
            <p>Name: {detail.username}</p>
            <p>Number: {detail.number}</p>
            <p>Email: {detail.email}</p>

            <div className='d-flex justify-content-between m-2'>
              <button className='btn bg-info text-light' onClick={handleEditClick}>
                Edit
              </button>
              <button onClick={() => deletecard(index)} className='btn bg-danger text-light'>
                Delete
              </button>
            </div>
            </div>
            </div>
          </>
        )}
      </div>
      </div>
    </>
  );
};

export default Contactcards;
