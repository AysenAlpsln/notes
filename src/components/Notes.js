import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { BiSolidEdit } from 'react-icons/bi';

import { useSelector, useDispatch } from 'react-redux';
import { removeNote } from '../redux/notes/notesSlice';


function Notes() {

  const notes = useSelector(state => state.notes.notes)

  const dispatch = useDispatch();

  const handleDeleteNote = (e) => {
    var deletedId = e.target.closest('.note').id;
    if (window.confirm('Are you sure?')) {
      dispatch(removeNote(deletedId))
    }
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
              <button className='edit_note' type='button'>
                <BiSolidEdit />
              </button>
              <button className='delete_note' type='button' onClick={handleDeleteNote}>
                <AiFillDelete />
              </button>
            </div>
          </div>
        ))
      }

    </div>
  )
}

export default Notes