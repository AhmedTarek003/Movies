import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar({ search }) {
  const onSearch = (word) => {
    search(word);
  };
  return (
    <div className="w-100 parent-navbar">
      <Container>
        <Row className="pt-3">
          <Col lg="2" sm="12">
            <Link to={"/"} className="text-decoration-none">
              <h2 className="logo text-center mb-2">Movies</h2>
            </Link>
          </Col>
          <Col lg="10" sm="12" className="d-flex align-items-center">
            <div className="w-100">
              <input
                onChange={(e) => onSearch(e.target.value)}
                className="input-search"
                type="text"
                placeholder="ابحث"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NavBar;
