import React from 'react';

const Home = () => {
  const cardcolor = "#dfdffb"
  return (
    <div style={{backgroundColor:"#353595"}}>
      <div id="frontimage">
        <button type='submit' id='community'>Join the community</button>
      </div>
      <h1 id='head1'>Why to use Grouplancer?</h1>
      <section>
        <article id="card1" style={{backgroundColor: cardcolor}}>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta ut at vitae rem tenetur praesentium eveniet velit! Ad, dignissimos commodi quam quasi, assumenda provident tempora repellat velit similique incidunt aperiam.</p>
        </article>
        <article id="card2" style={{backgroundColor: cardcolor}}>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta ut at vitae rem tenetur praesentium eveniet velit! Ad, dignissimos commodi quam quasi, assumenda provident tempora repellat velit similique incidunt aperiam.</p>
        </article>
        <article id="card3" style={{backgroundColor: cardcolor}}>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta ut at vitae rem tenetur praesentium eveniet velit! Ad, dignissimos commodi quam quasi, assumenda provident tempora repellat velit similique incidunt aperiam.</p>
        </article>
      </section>
      <br/>
      <h1 id='head2'>How to use Grouplancer?</h1>
      <section>
        <article id="card4" style={{backgroundColor: cardcolor}}>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta ut at vitae rem tenetur praesentium eveniet velit! Ad, dignissimos commodi quam quasi, assumenda provident tempora repellat velit similique incidunt aperiam.</p>
        </article>
        <article id="card5" style={{backgroundColor: cardcolor}}>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta ut at vitae rem tenetur praesentium eveniet velit! Ad, dignissimos commodi quam quasi, assumenda provident tempora repellat velit similique incidunt aperiam.</p>
        </article>
        <article id="card6" style={{backgroundColor: cardcolor}}>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta ut at vitae rem tenetur praesentium eveniet velit! Ad, dignissimos commodi quam quasi, assumenda provident tempora repellat velit similique incidunt aperiam.</p>
        </article>
      </section>
      <br/>
    </div>

  )
}

export default Home