import React from "react";
import { AccordionContainer } from "../containers/AccordionContainer";
import { FooterContainer } from "../containers/FooterContainer";
import { JumbotronContainer } from "../containers/JubotronContainer";

export default function Home() {
  return (
    <>
      <JumbotronContainer />
      <AccordionContainer />
      <FooterContainer />
    </>
  );
}
