import React from "react";
import { Container } from "reactstrap";

const Footer = () => {
  return (
    <div>
      <Container
        fluid
        tag="footer"
        className="bg-info text-center text-white text-uppercase fixed-bottom"
      >
        &copy;Github Finder 2022
      </Container>
    </div>
  );
};

export default Footer;
