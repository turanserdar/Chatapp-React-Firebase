import { auth } from '../firebase/config';

const Message = ({ data }) => {
  // If the ID of the logged-in user matches
  // the ID of the message sender:
  if (auth.currentUser?.uid === data.author.id) {
    return <p className="msg-user">{data.text}</p>;
  }

  // If the IDs do not match, render this:
  return (
    <div className="msg-other">
      <p className="user-info">
        <img src={data.author.photo} alt="profile" />
        <span>{data.author.name}</span>
      </p>

      <p className="msg-text">{data.text}</p>
    </div>
  );
};

export default Message;
