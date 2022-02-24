import React, { useState } from 'react';
import './Search.css';
function Search({ HandleSearch }) {
    const[text, setText] = useState('');
    const onChange = (q) => {
        setText(q);
        HandleSearch(q);
    }
  return (
  <div className='search'>
      <input
      type = "text"
      placeholder="Search PokeWorld..."
      value = {text}
      autoFocus
      onChange={e => onChange(e.target.value)}
      ></input>

  </div>);
}

export default Search;
