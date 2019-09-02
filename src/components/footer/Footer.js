import React from "react";
import styled from "styled-components";

const FooterDiv = styled.footer`
  display: flex;
  padding: 2rem;
  background: black;
  color: lightgrey;
  font-size: 1.4rem;
`;

export default function Footer() {
  return <FooterDiv>FOOTER</FooterDiv>;
}
