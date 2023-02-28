import React from "react";

const ArticleAuthor = () => {
  let author = [ 
    <p>Author: Mike</p>,
    <p>Published: 06.12.2022</p>,
    <p>Theme: Video cards</p>
]

    return (
    <div className="article__author">
     {author}
    </div> 
    );
  }
  export default ArticleAuthor;