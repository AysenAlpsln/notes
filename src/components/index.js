import React from 'react';
import Search from './Search';
import Form from './Form';
import Notes from './Notes';

function Main() {
  return (
    <div className='main_container'>
      <div className='title_container'>
        <p className='title'>Post-it</p>
      </div>
      <Search />
      
      <Form />

      <Notes />
    </div>
  )
}

export default Main