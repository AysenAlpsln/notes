import { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { BiSolidEdit } from 'react-icons/bi';

import { useSelector, useDispatch } from 'react-redux';
import { removeNote, editNote } from '../redux/notes/notesSlice';


function Notes() {

  const notes = useSelector(state => state.notes.notes);
  const [isPopupActive, setPopup] = useState(false);
  const [isEditTitle, setEditTitle] = useState('');
  const [isEditNote, setEditNote] = useState('');
  const [isEditColor, setEditColor] = useState('');
  const [isEditId, setEditId] = useState('')

  const dispatch = useDispatch();

  const handleDeleteNote = (e) => {
    var deletedId = e.target.closest('.note').id;
    if (window.confirm('Are you sure?')) {
      dispatch(removeNote(deletedId))
    }
  }

  const handleShowPopup = (e) => {
    setPopup(true)
    var editId = e.target.closest('.note').id;
    var selected = notes.filter((note) => note.id === editId);
    setEditId(editId)
    setEditTitle(selected[0].title)
    setEditNote(selected[0].note)
    setEditColor(selected[0].hex)

    //seçilmiş renk kodu checked olarak gelir
    document.querySelectorAll('.edit_popup_form .color').forEach(function (item) {
      if (item.value === selected[0].hex) {
        item.checked = true;
      }
    })
  }

  const handleClosePopup = (e) => {
    setPopup(false)
  }

  const handleEditNote = (e) => {
    const checkedColor = document.querySelector('.edit_popup_form input[type="radio"]:checked')?.value;

    e.preventDefault();
    dispatch(editNote(
      {
        id: isEditId,
        title: isEditTitle,
        description: isEditNote,
        hex: isEditColor
      }
    ));

    setPopup(false)

    //başarılı mesajı için popup hazırlanmalı
  }

  return (
    <div className='list_container'>
      {
        notes.map((note) => (
          <div key={note.id} id={note.id} className='note' style={{ backgroundColor: note.hex }}>
            <div className='note_title'>
              {note.title}
            </div>
            <div className='note_description'>
              <p>{note.note}</p>
            </div>
            <div className='note_buttons'>
              <button className='edit_note' type='button' onClick={handleShowPopup}>
                <BiSolidEdit />
              </button>
              <button className='delete_note' type='button' onClick={handleDeleteNote}>
                <AiFillDelete />
              </button>
            </div>

            <div className='edit_popup_form' style={{ display: isPopupActive ? 'block' : 'none' }}>
              <textarea
                id='editTitle'
                value={isEditTitle}
                onChange={(e) => setEditTitle(e.target.value)} />
              <textarea
                id='editNote'
                value={isEditNote}
                onChange={(e) => setEditNote(e.target.value)} />
              <div className='color_select_area'>
                <div className='select_colors'>
                  <input id='edit_color_pink' className='color' type="radio" name="color" value="#F06291" />
                  <label htmlFor='edit_color_pink' className='color_label'>
                    <span>
                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                    </span>
                  </label>
                  <input id='edit_color_purple' className='color' type="radio" name="color" value="#BA68C8" />
                  <label htmlFor='edit_color_purple' className='color_label'>
                    <span>
                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                    </span>
                  </label>
                  <input id='edit_color_yellow' className='color' type="radio" name="color" value="#FED54E" />
                  <label htmlFor='edit_color_yellow' className='color_label'>
                    <span>
                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                    </span>
                  </label>
                  <input id='edit_color_blue' className='color' type="radio" name="color" value="#50C2F7" />
                  <label htmlFor='edit_color_blue' className='color_label'>
                    <span>
                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                    </span>
                  </label>
                  <input id='edit_color_green' className='color' type="radio" name="color" value="#AED580" />
                  <label htmlFor='edit_color_green' className='color_label'>
                    <span>
                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                    </span>
                  </label>
                </div>
              </div>
              <div className='edit_note_button'>
                <button className='edit' type='button' onClick={handleEditNote}>
                  EDIT
                </button>
                <button className='cancel' type='button' onClick={handleClosePopup}>
                  CANCEL
                </button>
              </div>
            </div>

          </div>
        ))
      }

    </div>
  )
}

export default Notes