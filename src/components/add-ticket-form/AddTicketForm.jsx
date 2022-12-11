import { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

import Jumbotron from "../jumbotron/Jumbotron";

const initialFormData = {
  subject: "",
  issueDate: "",
  message: "",
};



const AddTicketForm = () => {
  const [formData, setFormData] = useState(initialFormData);
 

  useEffect(() => {}, [formData])

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    console.log(formData);
  };

  return (
    <div className="auth-screen">
      <Jumbotron className="add-new-ticket">
        <h1 className="text-info text-center">Add New Ticket</h1>
        <hr />
        <Form onSubmit={handleOnSubmit}>
          <Form.Group as={Row}>
            <Form.Label column sm={3}>
              Subject
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleOnChange}
                maxLength="100"
                placeholder="Subject"
                required
                autoComplete="off"
              />
              
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mt-3">
            <Form.Label column sm={3}>
              Issue Found
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="date"
                id="issueFound"
                name="issueDate"
                value={formData.issueDate}
                onChange={handleOnChange}
                // placeholder="Issue Found"
                required
                autoComplete="off"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={3}>
              Message
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                id="message"
                name="message"
                as="textarea"
                value={formData.message}
                onChange={handleOnChange}
                row="8"
                required
                autoComplete="off"
              />
            </Col>
          </Form.Group>
          <div className="mx-auto d-flex">
          <Button type="submit" variant="info"  className="text-white mt-4 mx-auto">
            Open Ticket
          </Button>
          </div>
        </Form>
      </Jumbotron>
    </div>
  );
};

export default AddTicketForm;
