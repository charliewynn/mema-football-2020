import React from "react";

type HomeProps = {
  title: string;
  paragraph: string;
};

export default ({ title, paragraph }: HomeProps) => (
  <div>
    HOME
    <h2>{title}</h2>
    <p>{paragraph}</p>
  </div>
);
