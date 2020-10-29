import React from "react";
import { AccordionContainer } from "./containers/AccordionContainer";
import { FooterContainer } from "./containers/FooterContainer";
import { JumbotronContainer } from "./containers/JubotronContainer";

function App() {
  return (
    <>
      <JumbotronContainer />
      <AccordionContainer />
      <FooterContainer />
    </>
  );
}

export default App;
