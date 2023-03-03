import React from "react";

export const Page = (props) => {
  return (
    <>
      <h3>{props.page.title}</h3>
      {/*onClick load the page Article.js*/}
      <button>Read Article</button>
    </>
  );
};
