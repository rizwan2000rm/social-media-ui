import Button from "../../../shared/components/button";
import Card from "../../../shared/components/card";

interface CreatePostProps {
  emoji: string;
  placeholder: string;
}

const CreatePost = ({ emoji, placeholder }: CreatePostProps) => {
  const FeedInput = (
    <div className="feed-input mb-16">
      <div className="emoji">{emoji}</div>
      <input type="text" placeholder={placeholder} />
    </div>
  );

  return (
    <Card className="feed-card">
      <h3>Create Post</h3>
      {FeedInput}
      <span className="flex row-reverse">
        <Button text="Post" />
      </span>
    </Card>
  );
};

export default CreatePost;
