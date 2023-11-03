import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchNote } from '../redux/notes/notesSlice';

function Search() {

  const [isSearchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    var term = e.target.value;
    
    setSearchTerm(term);
    dispatch(searchNote(term))
  };

  return (
    <div className='search_container'>
      <input
        id='search_bar'
        placeholder='Search...' 
        value={isSearchTerm}
        onChange={handleInputChange}/>
    </div>
  )
}

export default Search