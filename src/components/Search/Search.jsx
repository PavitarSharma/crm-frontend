import { Form, Row, Col } from "react-bootstrap";

const Search = ({ handleOnChange, search }) => {
  return (
    <div>
      <Form>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Search:{" "}
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              id="search"
              name="search"
              value={search}
              onChange={handleOnChange}
              placeholder="Serach..."
            />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Search;
