import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import CreatePost1 from "./CreatePost1";
import Myposts from "./Myposts";
import LivePosts from "./LivePosts";

const Postbar = () => {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3} style={{ marginTop: "20rem", marginLeft: "auto", fontSize: "20px", width: "22rem" }}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link className="text-white" style={{marginBottom: "1rem", borderRadius: "20px", textAlign: "center", backgroundColor: "#0e065a"}} eventKey="first">Live Posts</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="text-white" style={{marginBottom: "1rem", borderRadius: "20px", textAlign: "center", backgroundColor: "#0e065a"}} eventKey="second">Create Post</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="text-white" style={{marginBottom: "1rem", borderRadius: "20px", textAlign: "center", backgroundColor: "#0e065a"}} eventKey="third">My Posts</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first"><LivePosts /></Tab.Pane>
            <Tab.Pane eventKey="second"><CreatePost1 /></Tab.Pane>
            <Tab.Pane eventKey="third"><Myposts /></Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default Postbar;