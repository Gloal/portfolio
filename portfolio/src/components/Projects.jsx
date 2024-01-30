import { Container, Row, Col, Image } from "react-bootstrap";

function Projects() {
    return (
      <Container>
        <Row>
          <Col md={4}>
            <Image
              src="your-image-url-here"
              alt="your-name-here"
              roundedCircle
              width={200}
              height={200}
            />
          </Col>
          <Col md={8}>

          </Col>
        </Row>
      </Container>
    );
  }
  
  export default Projects;