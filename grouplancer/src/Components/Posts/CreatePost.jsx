import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

const CreatePost = () => {
  const [formData, setFormData] = useState({
    gDesc: "",
    media: null
  });

  const handleChange = (e) => {
    if (e.target.name === "media") {
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0]
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="create">
      <Container>
        <Row className="align-items-center">
          <h1 className="text-center my-4" style={{ color: "#ffff", paddingBottom: "2vh" }}>
            Create Post
          </h1>
          <Col className="form" size={12} md={6}>
            <Form onSubmit={handleSubmit}>
              <Col className="column" style={{ width: "31.25vw" }}>
                <Row className="px-1">
                  <Form.Group as={Col}>
                    <Form.Control
                      as="textarea"
                      rows="6"
                      placeholder="Post Description"
                      onChange={handleChange}
                      name="gDesc"
                      required
                    />
                  </Form.Group>
                </Row>
                <Row className="px-1">
                  <Form.Group as={Col}>
                    <Form.Control
                      type="file"
                      placeholder="Upload Media"
                      onChange={handleChange}
                      name="media"
                      accept="image/*, video/*"
                      required
                    />
                  </Form.Group>
                </Row>
                <Row className="px-1">
                  <Col className="text-center">
                    <button className="button-48" style={{ borderRadius: "20px" }} type="submit">
                      <span>Create Post</span>
                    </button>
                  </Col>
                </Row>
              </Col>
            </Form>
          </Col>
          <Col className="boximage">
            {formData.media ? (
              <img
                src={URL.createObjectURL(formData.media)}
                alt="image"
                style={{ borderRadius: "30px 30px 30px 30px", height: "50vh", width: "30vw", marginLeft: "15vh" }}
              />
            ) : (
              <img
                src="./default-user.jpg" 
                alt="default"
                style={{ borderRadius: "30px 30px 30px 30px", height: "50vh", width: "30vw", marginLeft: "15vh" }}
              />
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CreatePost;
