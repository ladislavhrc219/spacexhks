// import React, {useState} from 'react';

// const Search = ({getQuery}) => {
   

//     //need to add piece of state for the input
//     const [text, setText] = useState('');

//     //usual stuff function creation & seting states
//     const onChange = (q) =>{
//         setText(q)
//         getQuery(q)

//     }


//     return (
//         <section className="search">

//         <form>  
//             <input type="text" 
//             className="form-control" 
//             value = {text} // local state of the component
//             onChange={(e) => onChange(e.target.value)} 
//             //cathicng what we type - state is whatever we type in
//             placeholder="Search..." 
//             autoFocus/>

//         </form>
            
//         </section>
//     );
// };

// export default Search;


import React, { useState } from 'react'

const Search = ({ getQuery }) => {
  const [text, setText] = useState('')

  const onChange = (e) => {
    setText(e)
    getQuery(e)
  }

  return (
    <section className='search'>
      <form>
        <input
          type='text'
          className='form-control'
          placeholder='Search characters'
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  )
}

export default Search