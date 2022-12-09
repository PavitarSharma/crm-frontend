import { Container, Row, Col } from "react-bootstrap"
import { AddTicketForm, PageBreadcrumb } from "../../components"

const AddTicket = () => {
  return (
    <Container>
        <Row>
            <Col>
                <PageBreadcrumb page="New Ticket" />
            </Col>
        </Row>

        <Row>
            <Col>
                <AddTicketForm />
            </Col>
        </Row>
    </Container>
  )
}

export default AddTicket