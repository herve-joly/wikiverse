import React, { useState, useEffect } from "react";
import { PagesList } from "./PagesList";
import { Article } from "./Article";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  const [pages, setPages] = useState([]);
  {
    /*
	1- Need to add conditional rendering for Article.js
	2- Write a function fetchArticle that fetch data from databse
	- Maybe need to do a handleClick function
	3- Will need to map througth the data
	4- Back to Wiki List button will revert back to original state*/
  }
  async function fetchPages() {
    try {
      const response = await fetch(`${apiURL}/wiki`);
      const pagesData = await response.json();
      setPages(pagesData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  useEffect(() => {
    fetchPages();
  }, []);

  return (
    <main>
      <h1>WikiVerse</h1>
      <h2>An interesting 📚</h2>
      <PagesList pages={pages} />
    </main>
  );
};
