import React from "react";

import { HeaderContainer } from "../containers/HeaderContainer";
import { Feature } from "../components/index";
import { AccordionContainer } from "../containers/AccordionContainer";
import { FooterContainer } from "../containers/FooterContainer";
import { JumbotronContainer } from "../containers/JubotronContainer";
import { OptForm } from "../components";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited films, TV programmes and much more.
          </Feature.Title>
          <Feature.Subtitle>
            Watch anywhere. Cancel at any time.
          </Feature.Subtitle>
          <OptForm>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <AccordionContainer />
      <FooterContainer />
    </>
  );
}
