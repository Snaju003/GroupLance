import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import CreatePost1 from "./CreatePost1";
import Myposts from "./Myposts";
import LivePosts from "./LivePosts";

const Postbar = () => {
  return (
    <>
      <section className="tab">
        <Container>
          <Row>
            <Col size={12}>
              <Tab.Container id="tabs-group" defaultActiveKey="first">
                <Nav fill variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Live Posts</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Create Post</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">My Posts</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp">
                  <Tab.Pane eventKey="first">
                    <LivePosts />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <CreatePost1 />
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Myposts />
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>

            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Postbar;