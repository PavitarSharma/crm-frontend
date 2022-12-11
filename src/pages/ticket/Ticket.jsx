import { Container, Row, Col, Button } from "react-bootstrap";
import { MessageHistory, PageBreadcrumb, UpdateTicket } from "../../components";
import tickets from "../../assets/data/dummy-ticket.json";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const ticket = tickets[0];

const Ticket = () => {
  const { tId } = useParams();
  const [ticket, setTicket] = useState("");

  useEffect(() => {
    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i].id.toString() === tId) {
        setTicket(tickets[i]);
        continue;
      }
    }
  }, [tId]);

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket" />
        </Col>
      </Row>

      <Row className="mt-5">
        <Col className="text-weight-bolder text-secondary ">
          {tId}
          <div className="subject">
            <b className="me-2">Subject:</b> {ticket.subject}
          </div>
          <div className="date">
            <b className="me-2">Ticket Opened:</b> {ticket.addedAt}
          </div>
          <div className="status">
            <b className="me-2">Status:</b> {ticket.status}
          </div>
        </Col>
        <Col>
          <Button variant="outline-info">Close Ticket</Button>
        </Col>
      </Row>

      <Row>
        <Col>
          {ticket.histroy && <MessageHistory message={ticket.history} />}
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <UpdateTicket />
        </Col>
      </Row>
    </Container>
  );
};

export default Ticket;
