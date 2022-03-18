import React, { useContext, useState, useEffect } from 'react';
import Header from '../../../../Navbar/Header';
import RoomContext from '../../../../../context/Room/RoomContext';
import { endpoints } from '../../../../../utils/endpoints';
import { MdKingBed } from 'react-icons/md';
import { AiOutlineDollar } from 'react-icons/ai';
import { Redirect, withRouter } from 'react-router-dom';
import './room.scss';
import Spinner from '../../../../Spinner/Spinner';

const baseURL = process.env.REACT_APP_API_KEY;
const rooms = endpoints.rooms;

const Room = ({ history, match }) => {
  const {
    editRoomDetails,
    deleteRoomDetails,
    querySingleRoom,
    singleRoomData,
  } = useContext(RoomContext);
  const _id = match.params.room_id;

  const [showForm, setShowForm] = useState(false);
  const [roomDetails, setRoomDetails] = useState({
    name: '',
    numberOfBed: '',
    details: '',
    price: '',
  });
  const onChangeRoom = (e) => {
    setRoomDetails({ ...roomDetails, [e.target.name]: e.target.value });
  };

  const editFormSubmit = (e) => {
    e.preventDefault();
    editRoomDetails(_id, roomDetails, history);
  };

  useEffect(() => {
    querySingleRoom(_id);
  }, []);

  if (_id === undefined || _id === null) {
    return <Redirect to='/rooms' />;
  }

  return (
    <div className='single-room-containers'>
      <Header />
      <div className='single-room-main-container'>
        <div className='single-room-header'>
          <h2>Room Details</h2>
        </div>
        {singleRoomData === null ? (
          <div className='spinner-container'>
            <Spinner />
          </div>
        ) : (
          <div className='single-room-details'>
            <div className='single-room-txt'>
              <h2>{singleRoomData.name} Room</h2>
              <p>
                <MdKingBed className='room-icon' />
                Number of Beds Available: {singleRoomData.numberOfBed}
              </p>
              <p>{singleRoomData.details}</p>
              <p>
                <AiOutlineDollar className='room-icon' />
                Cost: {singleRoomData.price}/Day
              </p>
              <div className='room-btn-container'>
                <button className='edit-room' onClick={() => setShowForm(true)}>
                  Edit Room Details
                </button>
                <button
                  className='delete-room'
                  onClick={() => deleteRoomDetails(_id, history)}
                >
                  Delete Room Details
                </button>
              </div>
            </div>
            <img
              src={`${baseURL}${rooms.roomImg}${singleRoomData.roomImage}`}
              className='room-img'
            />
          </div>
        )}
        {showForm && (
          <div className='show-form'>
            <form
              className='room-details-form'
              id='room-form'
              onSubmit={(e) => editFormSubmit(e)}
            >
              <h2>Edit Room Details</h2>
              <div className='form-grid'>
                <div className='form-left'>
                  <div className='form-input'>
                    <label htmlFor='roomtype'>Room Type</label>
                    <input
                      name='name'
                      value={roomDetails.name}
                      onChange={(e) => onChangeRoom(e)}
                      type='text'
                    />
                  </div>
                  <div className='form-input'>
                    <label htmlFor='roomprice'>Room Price:</label>
                    <input
                      name='price'
                      value={roomDetails.price}
                      onChange={(e) => onChangeRoom(e)}
                      type='number'
                    />
                  </div>
                  <div className='form-btn-container'>
                    <button type='submit' className='submit-btn'>
                      Submit
                    </button>
                    <button
                      onClick={(e) => {
                        setShowForm(false);
                        e.preventDefault();
                      }}
                      className='cancel-btn'
                    >
                      Cancel
                    </button>
                  </div>
                </div>
                <div className='form-right'>
                  <div className='form-input'>
                    <label htmlFor='bedquantity'>Room Bed Quantity:</label>
                    <input
                      name='numberOfBed'
                      value={roomDetails.numberOfBed}
                      onChange={(e) => onChangeRoom(e)}
                      type='number'
                    />
                  </div>
                  <div className='form-input'>
                    <label htmlFor='details'>Details:</label>
                    <textarea
                      name='details'
                      value={roomDetails.details}
                      onChange={(e) => onChangeRoom(e)}
                      type='text'
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default withRouter(Room);
