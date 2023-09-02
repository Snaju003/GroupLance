import React from "react";

const About = (props) => {
  const { cardcolor } = props;
  return (
    <>
      <div className="container">
        <h1 id="heading">Why to use Grouplancer?</h1>
        <section>
          <article id="aboutcard" style={{ backgroundColor: cardcolor }}>
            <p>
            Find or create groups tailored to your interests, passions, and needs.
            </p>
          </article>
          <article id="aboutcard" style={{ backgroundColor: cardcolor }}>
            <p>
            Easily join or create groups in just a few clicks, connecting with like-minded individuals effortlessly.
            </p>
          </article>
          <article id="aboutcard" style={{ backgroundColor: cardcolor }}>
            <p>
            Enjoy the benefits of our platform without any fees or commitments.
            </p>
          </article>
        </section>
      </div>

      <div className="container">
        <h1 id="heading">How to use Grouplancer?</h1>
        <section>
          <article id="aboutcard" style={{ backgroundColor: cardcolor }}>
            <p>
            Sign up or log in, create a group with details and customization, and invite others to join your community.
            </p>
          </article>
          <article id="aboutcard" style={{ backgroundColor: cardcolor }}>
            <p>
            Browse and filter groups based on your interests, then click to join and engage with members who share your passions.
            </p>
          </article>
          <article id="aboutcard" style={{ backgroundColor: cardcolor }}>
            <p>
            Utilize our integrated chat section within each group to communicate, plan events, share resources, and expand your connections within the community.
            </p>
          </article>
        </section>
      </div>
      <hr />
    </>
  );
};

export default About;
