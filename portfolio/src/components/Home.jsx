import { Container, Row, Col, Image } from "react-bootstrap";

function Home() {
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
            <div>
              <h1>Gloria Alori - Full stack developer</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component for
                calling extra attention to featured content or information.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
  
  export default Home;