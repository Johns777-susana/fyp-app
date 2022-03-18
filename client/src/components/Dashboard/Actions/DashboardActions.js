import React, { useState } from 'react';
import { AiOutlineUserAdd, AiFillThunderbolt } from 'react-icons/ai';
import { IoIosAddCircle } from 'react-icons/io';
import { MdPostAdd } from 'react-icons/md';
import { BsTwitter } from 'react-icons/bs';
import './dashboardactions.scss';
import Forms from '../Forms/Forms';
import Profile from '../../../assests/profile.jpg';

const DashboardActions = () => {
  const [showAddDoctor, setShowAddDoctor] = useState(false);
  const [showAddSuites, setShowAddSuites] = useState(false);
  const [showAddCategory, setShowAddCategory] = useState(false);

  return (
    <div className='dashboard-actions-container'>
      <div className='dashboard-actions'>
        <h3>
          <AiFillThunderbolt className='thunder-icon' />
          Dashboard Actions
        </h3>
        <div className='dashboard-btns-container'>
          <button
            className='add'
            onClick={() => {
              setShowAddDoctor(!showAddDoctor);
              setShowAddCategory(false);
              setShowAddSuites(false);
            }}
          >
            <AiOutlineUserAdd className='add-icon' />
            Add Doctor Details
          </button>
          <button
            className='add'
            onClick={() => {
              setShowAddSuites(!showAddSuites);
              setShowAddDoctor(false);
              setShowAddCategory(false);
            }}
          >
            <IoIosAddCircle className='add-icon' />
            Add Room Category
          </button>
          <button
            className='add'
            onClick={() => {
              setShowAddCategory(!showAddCategory);
              setShowAddDoctor(false);
              setShowAddSuites(false);
            }}
          >
            <MdPostAdd className='add-icon' />
            Add Checkup Category
          </button>{' '}
        </div>
        {showAddCategory || showAddDoctor || showAddSuites ? (
          <Forms
            showAddDoctor={showAddDoctor}
            setShowAddDoctor={setShowAddDoctor}
            showAddSuites={showAddSuites}
            setShowAddSuites={setShowAddSuites}
            showAddCategory={showAddCategory}
            setShowAddCategory={setShowAddCategory}
          />
        ) : (
          ''
        )}
      </div>
      <div className='moderator-short-desc'>
        <div className='moderator-headers'>
          <div className='moderator-img-container'>
            <img src={Profile} alt='' className='moderator-pic' />
            <div className='moderator-header'>
              <strong>Nischal Dahal</strong>
              <small>@nischaldahal</small>
            </div>
          </div>
          <BsTwitter className='twitter-icon' />
        </div>
        <p>
          I am a person who is positive about every aspect of life. There are
          many things I like to do, to see, and to experience. I like to read, I
          like to write; I like to think, I like to dream; I like to talk, I
          like to listen. I like to see the sunrise in the morning, I like to
          see the moonlight at night; I like to feel the music flowing on my
          face, I like to smell the wind coming from the ocean. I like to look
          at the clouds in the sky with a blank mind, I like to do thought
          experiment when I cannot sleep in the middle of the night. I like
          flowers in spring, rain in summer, leaves in autumn, and snow in
          winter.
        </p>
      </div>
    </div>
  );
};

export default DashboardActions;
