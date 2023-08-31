import React from 'react';
import About from './About';

const Home = (props) => {
  const { bgcolor } = props;
  const cardcolor = "#dfdffb";
  return (
    <div style={{ backgroundColor: bgcolor }}>
      <div id="frontimage">
        <button type='submit' id='community'>Join the community</button>
      </div>
      <div id='cards'>
        <br></br>
        <About cardcolor={cardcolor} />
      </div>
    </div>

  )
}

export default Home