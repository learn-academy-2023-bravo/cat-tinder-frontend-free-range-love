import { useState } from "react";
import { Label, FormGroup, Form, Row, Input, Button, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";

const CowNew = ({ createCow }) => {
  
  const navigate = useNavigate();
  const [newCow, setNewCow] = useState({
    name: "",
    age: "",
    enjoys: "",
    color: "",
    species: "",
    image: ""
  });


  const handleChange = (e) => {
    setNewCow({ ...newCow, [e.target.name]: e.target.value });
  };
  const handleClick = () => {
    createCow(newCow);
    navigate("/cowindex");
  };
  return (
    <>
      <Form>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="cow-name">Name</Label>
              <Input
                id="cow-name"
                name="name"
                placeholder="Enter Cow Name"
                type="text"
                onChange={handleChange}
                value={newCow.name}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="cow-age">Age</Label>
              <Input
                id="cow-age"
                name="age"
                placeholder="Enter Cow Age"
                type="text"
                onChange={handleChange}
                value={newCow.age}
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="cow-enjoys">Enjoys</Label>
          <Input
            id="cow-enjoys"
            name="enjoys"
            placeholder="What Does The Cow Enjoy?"
            type="text"
            onChange={handleChange}
            value={newCow.enjoys}
          />
        </FormGroup>
        <FormGroup>
          <Label for="cow-species">Species</Label>
          <Input
            id="cow-species"
            name="species"
            placeholder="Enter Cow Species"
            type="text"
            onChange={handleChange}
            value={newCow.species}
          />
        </FormGroup>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="cow-color">Color</Label>
              <Input
                id="cow-color"
                name="color"
                placeholder="Enter Cow Color"
                type="text"
                onChange={handleChange}
                value={newCow.color}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="cow-image">Image</Label>
              <Input
                id="cow-image"
                name="image"
                placeholder="Enter Image URL"
                type="text"
                onChange={handleChange}
                value={newCow.image}
              />
            </FormGroup>
          </Col>
        </Row>

        <Button onClick={handleClick}>Submit</Button>
      </Form>
    </>
  );
};

export default CowNew;
