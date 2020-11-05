import React from "react";
import BrowseContainer from "../containers/BrowseContainer";
import { useContent } from "../hooks/index";
import selectionFilter from "../utils/selection-Filter";

export default function Browse() {
  // we need the series and the films
  const { series } = useContent("series");
  const { films } = useContent("films");

  // we also need slides
  const slides = selectionFilter({ series, films });
  // pass them to browse container

  return <BrowseContainer slides={slides} />;
}
