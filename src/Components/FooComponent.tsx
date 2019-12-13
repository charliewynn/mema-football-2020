import React from "react";

type FooProps = {
  title: string;
  paragraph: string;
};

export default ({ title, paragraph }: FooProps) => (
  <div>
    FOOFOO
    <h2>{title}</h2>
    <p>{paragraph}</p>
  </div>
);
