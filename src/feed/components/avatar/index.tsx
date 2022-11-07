import "./index.scss";

interface AvatarProps {
  imgSrc?: string;
  name?: string;
  timestamp?: string;
  className?: string;
}

const Avatar = ({ imgSrc, name, timestamp, className }: AvatarProps) => (
  <span className={`avatar ${className}`}>
    <img src={imgSrc} alt="avatar" />
    <span>
      {name && <p>{name}</p>}
      {timestamp && <p className="timestamp">{timestamp}</p>}
    </span>
  </span>
);

export default Avatar;
