import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { addNote } from '../redux/notes/notesSlice';
import { nanoid } from '@reduxjs/toolkit';

function Form() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    const checkedColor = document.querySelector('input[type="radio"]:checked')?.value;

    if (checkedColor && title !== '' && description !== '') {
      e.preventDefault();
      dispatch(addNote(
        { 
          id: nanoid(), 
          title: title, 
          note: description, 
          hex: checkedColor,
        }
      ));

      //form cleared
      setTitle('');
      setDescription('');
      document.querySelector('input[type="radio"]:checked').checked = false;
    }
  }

  return (
    <div className='textarea_container'>
      <textarea
        id='title'
        placeholder='Enter your note title here...'
        value={title}
        onChange={(e) => setTitle(e.target.value)} />
      <textarea
        id='description'
        placeholder='Enter your note here...'
        value={description}
        onChange={(e) => setDescription(e.target.value)} />
      <div className='color_select_area'>
        <div className='select_colors'>
          <input id='color_pink' className='color' type="radio" name="color" value="#F06291" />
          <label htmlFor='color_pink' className='color_label'>
            <span>
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
            </span>
          </label>
          <input id='color_purple' className='color' type="radio" name="color" value="#BA68C8" />
          <label htmlFor='color_purple' className='color_label'>
            <span>
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
            </span>
          </label>
          <input id='color_yellow' className='color' type="radio" name="color" value="#FED54E" />
          <label htmlFor='color_yellow' className='color_label'>
            <span>
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
            </span>
          </label>
          <input id='color_blue' className='color' type="radio" name="color" value="#50C2F7" />
          <label htmlFor='color_blue' className='color_label'>
            <span>
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
            </span>
          </label>
          <input id='color_green' className='color' type="radio" name="color" value="#AED580" />
          <label htmlFor='color_green' className='color_label'>
            <span>
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
            </span>
          </label>
        </div>
        <div className='add_color'>
          <button className='add' type='button' onClick={handleSubmit}>
            ADD
          </button>
        </div>
      </div>

    </div>
  )
}

export default Form;