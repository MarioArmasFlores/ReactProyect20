import { Form, Row, Col, Stack, Button, Card } from "react-bootstrap";
import { useRef, useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Home({ Restaurantes }) {
  const [name, setName] = useState("");
  const [foodType, setFoodType] = useState("");
  const [location, setLocation] = useState("");

  const filteredRestaurants = useMemo(() => {
    return Restaurantes.filter((restaurant) => {
      return (
        (name === "" ||
          restaurant.name.toLowerCase().includes(name.toLowerCase())) &&
        (foodType === "" ||
          restaurant.foodType.toLowerCase().includes(foodType.toLowerCase())) &&
        (location === "" ||
          restaurant.location.toLowerCase().includes(location.toLowerCase()))
      );
    });
  }, [name, foodType, location, Restaurantes]);

  return (
    <div>
      <Form className="mt-4">
        <Row>
          <Col>
            <Stack>
              <Form.Group controlId="Name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Stack>
          </Col>
          <Col>
            <Stack>
              <Form.Group controlId="typeFood">
                <Form.Label>Type Food</Form.Label>
                <Form.Select
                  value={foodType}
                  onChange={(e) => setFoodType(e.target.value)}
                >
                  <option value="">Cualquiera</option>
                  <option value="Mediterranean">Mediterranean</option>
                  <option value="Japanese">Japanese</option>
                  <option value="Indian">Indian</option>
                  <option value="Italian">Italian</option>
                  <option value="American">American</option>
                </Form.Select>
              </Form.Group>
            </Stack>
          </Col>
        </Row>
        <Row>
          <Form.Group controlId="location">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            ></Form.Control>
          </Form.Group>
        </Row>
      </Form>
      <Row xs={1} sm={2} lg={3} xl={4} className="g-3 mt-3">
        {filteredRestaurants.map((rest) => (
          <Card className="text-reset text-decoration-none" key={rest.id} as={Link} to={`/restaurant/${rest.id}`}>
            <Card.Body>
              <h2>{rest.name}</h2>
              <span>{rest.foodType}</span>
              <span>{rest.location}</span>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </div>
  );
}
