import { Container, Row, Stack, Col } from "react-bootstrap";
import { Navigate, useParams } from "react-router-dom";

export default function Restaurante({ resInfo }) {
  const { id } = useParams();
  const restaurantSelected = resInfo.find((n) => n.id === id);

  if (!restaurantSelected) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Container className="mt-4">
        <Row>
          <Col>
            <h1>{restaurantSelected.name}</h1>
            <h3>type: {restaurantSelected.foodType}</h3>
            <h3>Location: {restaurantSelected.location}</h3>
            <span>Contact: {restaurantSelected.contacto}</span>
          </Col>
        </Row>
      </Container>
    </>
  );
}

//<h1>{restaurantSelected.name}</h1>
//<p>type: {restaurantSelected.foodType}</p>
//<p>Location: {restaurantSelected.location}</p>
