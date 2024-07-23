import React from 'react';
import { Link } from 'react-router-dom';
 
function Home() {
  return (
    <div className="App">
      <div className="image1">
        <img src="/images/codes.webp" style={{ height: '745px', width: '650px' }} alt="GIF" />
      </div>
      <div className="present">
        <h2 class='animate__animated animate__fadeInDownBig'>
          JE SUIS AZOH MARIE-EMMANUELLE <br />
          <p>Developpeuse Fullstack</p>
        </h2>
        <Link to="/portfolio">
          <button type="button" className="btn btn-outline-light">Découvrez moi</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
