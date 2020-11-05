import React from "react";

export default (props) => (
  <section className="contente-header">
    <h1>
      {props.title} <small> {props.subtitle} </small>
    </h1>
  </section>
);
