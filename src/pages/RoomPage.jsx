const RoomPage = ({ setRoom, setIsAuth }) => {
    // Executes when the form is submitted
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const room = e.target[0].value;
  
      setRoom(room.toUpperCase());
    };
  
    return (
      <form onSubmit={handleSubmit} className="room-page">
        <h1>Chat Room</h1>
        <p>Which Room Will You Join?</p>
        <input placeholder="e.g., weekend" type="text" />
        <button type="submit">Join Room</button>
        <button
          onClick={() => {
            setIsAuth(false);
            localStorage.removeItem('TOKEN');
          }}
          type="button"
        >
          Log Out
        </button>
      </form>
    );
  };
  
  export default RoomPage;
  