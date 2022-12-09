import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PageBreadcrumb, Search, TicketTable } from "../../components";
import tickets from "../../assets/data/dummy-ticket.json";
import { useState, useEffect } from "react";

const TicketList = () => {
  const [search, setSearch] = useState("");


  useEffect(() => {
    
  }, [search]);

 
  const handleOnChange = (event) => {
    const { value } = event.target;
    setSearch(value);

  };

  const searchedTicket = tickets.filter((value) =>
  value.subject.toLowerCase().includes(search.toLowerCase())
);

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket Lists" />
        </Col>
      </Row>

      <Row className="my-5">
        <Col>
          <Link to="/add-ticket">
            <Button variant="info">Add New Ticket</Button>
          </Link>
        </Col>
        <Col>
          <Search handleOnChange={handleOnChange} search={search} />
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <TicketTable tickets={searchedTicket} />
        </Col>
      </Row>
    </Container>
  );
};

export default TicketList;
