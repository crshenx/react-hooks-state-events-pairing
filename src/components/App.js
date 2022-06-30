import video from "../data/video.js";
import VideoHeader from "./VideoHeader.js";
import Doots from "./Doots.js";
import Comments from "./Comments.js";

function App() {
  console.log("Here's your data:", video);
  const { embedUrl, title, views, createdAt, upvotes, downvotes, comments } =
    video;

  return (
    <div className="App">
      {/* <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      /> */}
      <VideoHeader
        video={embedUrl}
        title={title}
        views={views}
        createdAt={createdAt}
      />
      <Doots upvotes={upvotes} downvotes={downvotes} />
      <Comments comments={comments} />
    </div>
  );
}

export default App;
