import React from "react";
import { Segment } from "semantic-ui-react";

const Loading = () => (
  <Segment
    textAlign="center"
    vertical
    style={{ minHeight: "700px", padding: "1em 0em" }}
    loading
  />
);

export default Loading;
