import React from 'react';
import About from './About';

const Home = () => {
  const cardcolor = "#dfdffb";
  return (
    <div style={{ backgroundColor: "#353595" }}>
      <div id="frontimage">
        <button type='submit' id='community'>Join the community</button>
      </div>
      <About cardcolor={cardcolor} />
    </div>

  )
}

export default Home