import React from "react";
import ArticleBody from "./ArticleBody";
import ArticleActions from "./ArticleActions";
import ArticleAuthor from "./ArticleAuthor";

const Article = () => {
    let article = <h2>NVIDIA Accelerated AI on Azure</h2>
    return (
        <>
    <div className="article__title">
        {article}
    </div> 
    <ArticleBody />
    <ArticleActions/>
    <ArticleAuthor/>
    </>
    );
  }
  export default Article;
