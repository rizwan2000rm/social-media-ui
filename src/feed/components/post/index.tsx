import Card from "../../../shared/components/card";
import Avatar from "../avatar";

interface PostProps {
  name: string;
  timestamp: string;
  imgSrc?: string;
  emoji: string;
  text: string;
}

const Post = ({
  name,
  timestamp,
  imgSrc = "/avatar.svg",
  emoji,
  text = "",
}: PostProps) => {
  const TextField = (
    <div className="feed-input mb-16">
      <div className="emoji">{emoji}</div>
      <span>{text}</span>
    </div>
  );

  const Comments = (
    <span className="flex align-center gap-8 muted-text">
      <img src="/chat.svg" alt="comments" />
      24 comments
    </span>
  );

  return (
    <Card className="feed-card">
      <div className="flex align-center justify-between mb-16">
        <Avatar name={name} timestamp={timestamp} imgSrc={imgSrc} />
        <img src="/dots.svg" alt="options" />
      </div>
      {TextField}
      {Comments}
    </Card>
  );
};

export default Post;
