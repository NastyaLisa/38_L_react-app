import React from "react";
import Article from "./components/Article";
// import ArticleBody from "./components/ArticleBody";
// import ArticleActions from "./components/ArticleActions";
// import ArticleAuthor from "./components/ArticleAuthor";

const App = () => {
  const title = 'NVIDIA news';
  return (
    <div className="wrapper">
      <h1 className="title">{title}</h1>
      <div className="article">
      <Article />
      </div>
    </div> 
    );
  }
export default App;