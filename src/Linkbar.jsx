import React from 'react';
// import logo from './logo.svg';



const Linkbar = () => {
    return (
        // FIX NAVIGATION:
        <div className="navigation">
            {/* <h1> navbar maybe</h1> */}
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <a
          className="App-link"
          href="https://tesla.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Telsa  
        </a>
        :
        {/* <hr> y </hr>  */}
        <a
          className="App-link"
          href="https://starlink.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Starlink  
        </a>
        </div>
    );
};

export default Linkbar;