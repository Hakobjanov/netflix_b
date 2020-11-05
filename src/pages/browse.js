import React from "react";
import { useContent } from "../hooks/index";

export default function Browse() {
  // we need the series and the films
  const { series } = useContent("series");
  const { films } = useContent("films");
  console.log(series);
  console.log(films);
  // we also need slides
  // pass them to browse container

  return <h1>Browse motherfuckers</h1>;
}
