import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Card } from "react-bootstrap";

const About = (props) => {
  
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
      {/* <div className="container">
        <h1 id="heading">Why to use Grouplancer?</h1>
        <div style={{display: "flex"}}>
          <div id="aboutcard" style={{ backgroundImage: "linear-gradient(to right, #00d4ff,5%, #7d7ddf", color:"white",fontWeight:"750" }}>
            <p>
            Find or create groups tailored to your interests, passions, and needs.
            </p>
          </div>
          <article id="aboutcard" style={{ backgroundImage: "linear-gradient(to right, #00d4ff,5%, #7d7ddf", color:"white",fontWeight:"750"}}>
            <p>
            Easily join or create groups in just a few clicks, connecting with like-minded individuals effortlessly.
            </p>
          </article>
          <article id="aboutcard" style={{ backgroundImage: "linear-gradient(to right, #00d4ff,5%, #7d7ddf", color:"white",fontWeight:"750" }}>
            <p>
            Enjoy the benefits of our platform without any fees or commitments.
            </p>
          </article>
        </div>
      </div>
      <br/>
      <div className="container">
        <h1 id="heading">How to use Grouplancer?</h1>
        <section style={{display: "flex"}}>
          <article id="aboutcard" style={{ backgroundImage: "linear-gradient(to right, #00d4ff,5%, #7d7ddf", color:"white",fontWeight:"750" }}>
            <p>
            Sign up or log in, create a group with details and customization, and invite others to join your community.
            </p>
          </article>
          <article id="aboutcard" style={{backgroundImage: "linear-gradient(to right, #00d4ff,5%, #7d7ddf", color:"white",fontWeight:"750" }}>
            <p>
            Browse and filter groups based on your interests, then click to join and engage with members who share your passions.
            </p>
          </article>
          <article id="aboutcard" style={{ backgroundImage: "linear-gradient(to right, #00d4ff,5%, #7d7ddf", color:"white",fontWeight:"750" }}>
            <p>
            Utilize our integrated chat section within each group to communicate, plan events, share resources, and expand your connections within the community.
            </p>
          </article>
        </section>
      </div>
      <br/> */}
      <section className="carouselCards">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="carouselCards-bx wow zoomIn" style={{background: "transparent"}}>
                        <h2>Guide</h2>
                        <p>Find or create groups tailored to your interests, passions, and needs.<br></br> Easily join or create groups in just a few clicks, connecting with like-minded individuals effortlessly.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme carouselCards-slider">
                            <Card className="item" style={{background: "linear-gradient( #fa8072, #131c82ef)"}}>
                                <Card.Text style={{fontWeight:"bold"}}>Sign up or log in, create a group with details and customization, and invite others to join your community</Card.Text>
                            </Card>
                            <Card className="item" style={{background: "linear-gradient(#be93d4  ,#131c82ef)"}}>
                                <Card.Text style={{fontWeight:"bold"}}>Browse and filter groups based on your interests, then click to join and engage with members who share your passions</Card.Text>
                            </Card>
                            <Card className="item" style={{background: "linear-gradient( #b2d3c2, #131c82ef)"}}>
                                <Card.Text style={{fontWeight:"bold"}}>Utilize our integrated chat section within each group to communicate</Card.Text>
                            </Card>
                            <Card className="item" style={{background: "linear-gradient( #e75480 , #131c82ef)"}}>
                                <Card.Text style={{fontWeight:"bold"}}>Plan events, share resources, and expand your connections within the community</Card.Text>
                            </Card>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </>
  );
};

export default About;
//