import React from 'react'
import { Link } from "react-router-dom"
import { Container, Row, Col, Button } from "react-bootstrap"
import { PageBreadcrumb, TicketTable } from '../../components'

const DashBoard = () => {
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Dashboard" />
        </Col>
      </Row>

      <Row>
        <Col className="text-center mt-5 mb-2">
          <Link to="add-ticket">
            <Button variant='info' style={{
              fontSize: "1rem",
              padding: "10px 30px"
            }}>
              Add New Ticket
            </Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col className="text-center  mb-2">
          <div>Total tickets: 500</div>
          <div>Pending tickets: 50</div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-2">Recently Added tickets</Col>
      </Row>
      <hr />

      <Row>
        <Col>
          <TicketTable />
        </Col>
      </Row>
    </Container>
  )
}

export default DashBoard