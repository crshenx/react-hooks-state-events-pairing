import React from "react";
import { useState } from "react";

function Doots({ upvotes, downvotes }) {
  const [up, setUpvotes] = useState(upvotes);
  const [down, setDownvotes] = useState(downvotes);

  function handleUpvote() {
    setUpvotes(up + 1);
  }
  function handleDownVotes() {
    setDownvotes(down + 1);
  }

  return (
    <div>
      <button onClick={handleUpvote}>{up} 👍</button>
      <button onClick={handleDownVotes}>{down} 👎</button>
    </div>
  );
}

export default Doots;
