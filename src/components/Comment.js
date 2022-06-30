import React from "react";

function Comment({ user, comment }) {
  return (
    <div>
      <h2>{user}</h2>
      <a>{comment}</a>
    </div>
  );
}

export default Comment;
