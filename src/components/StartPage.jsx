import React, {useState}  from 'react';
import { Link } from 'react-router-dom';


const Start = ()  =>{

  return (
    <div className="App">
      <h1> What type of test do you prefer? </h1>
      <div className='types-of-test'>
        <Link className="btn btn-primary" to='/test/geogr'> to Geo </Link>
        <Link className="btn btn-primary" to='/test/biol'> to biol </Link>
        <Link className="btn btn-primary" to='/test/rand'> to rand </Link>
      </div>
    </div>
  );
}

 
export default Start;
