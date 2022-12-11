import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
// import ticket from "../../assets/data/dummy-ticket.json";

const TicketTable = ({ tickets }) => {

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Subjects</th>
          <th>Status</th>
          <th>Opened Date</th>
        </tr>
      </thead>
      <tbody>
        {tickets.length ? (
          tickets.map((ticket) => (
            <tr key={ticket.id}>
              <td>{ticket.id}</td>
              <td>
                <Link to={`/ticket/${ticket._id}`} style={{
                    textDecoration: "none",
                    color: "#000"
                }}>{ticket.subject}</Link>
              </td>
              <td>{ticket.status}</td>
              <td>
                {/* {ticket.openAt && new Date(ticket.openAt).toLocaleString()} */}
                {ticket.addedAt}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="text-center">
              No ticket show{" "}
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default TicketTable;
