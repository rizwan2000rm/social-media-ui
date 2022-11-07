import CreatePost from "./components/create-post";
import Post from "./components/post";
import "./index.scss";

const Feed = () => (
  <div className="feed-layout">
    <h1>Hello Jane</h1>
    <p className="muted-text mb-40">
      How are you doing today? Would you like to share something with the
      community 🤗
    </p>

    <CreatePost emoji="💬" placeholder="How are you feeling today?" />

    <Post
      name="Theresa Webb"
      timestamp="5mins ago"
      emoji="👋"
      text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    />

    <Post
      name="Marvin McKinney"
      timestamp="8mins ago"
      emoji="😞"
      text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    />

    <Post
      name="Theresa Webb"
      timestamp="19mins ago"
      emoji="🤠"
      text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    />
  </div>
);

export default Feed;
