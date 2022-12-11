import { useEffect } from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const UpdateTicket = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {}, [message]);

  const handleOnChange = (event) => {
    setMessage(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    alert("Message send", message);
  };
  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <div className="d-flex flex-column">
          <Form.Label className="mb-1">Reply</Form.Label>
          <Form.Text className="mt-0 mb-1">
            Please reply your message here or update the ticket
          </Form.Text>
        </div>
        <Form.Control
          value={message}
          onChange={handleOnChange}
          as="textarea"
          row="5"
          name="detail"
        />
        <div className="text-right mt-3 mb-3">
          <Button variant="info" type="submit">
            Reply
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default UpdateTicket;
