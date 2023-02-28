import React from "react";

const ArticleActions = ()=> {
  const handleClick = (event) => {
      console.log(`Кнопка ${event.target.name} была нажата`);
  };
    return (
      
    <div className="article__actions">
      <button name="read" onClick={handleClick}> Read</button>
      <button name="mark as read" onClick={handleClick}> Mark as read</button>
      <button name="mark as unread" onClick={handleClick}> Mark as unread</button>


    </div> 
    );
  }
  export default ArticleActions;