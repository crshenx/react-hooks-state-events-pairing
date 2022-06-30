import React from "react";
import Comment from "./Comment";
import { useState } from "react";

function Comments({ comments }) {
  const [commentButton, setCommentButton] = useState("true");
  function handleToggle() {
    setCommentButton(!commentButton);
  }

  const commentsArr = comments.map((comment) => {
    return (
      <Comment key={comment.id} comment={comment.comment} user={comment.user} />
    );
  });

  return (
    <div id="Comments">
      <button onClick={handleToggle}>
        {commentButton ? `Show Comments` : `Hide Comments`}
      </button>
      <div>
        <h2>{!commentButton ? commentsArr : null}</h2>
      </div>
    </div>
  );
}

export default Comments;
