import './styles/style.scss';
import AuthPage from './pages/AuthPage';
import { useState } from 'react';
import RoomPage from './pages/RoomPage';
import ChatPage from './pages/ChatPage';

const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('TOKEN'));
  const [room, setRoom] = useState(null);

  // If not authenticated > display login page
  if (!isAuth) {
    return <AuthPage setIsAuth={setIsAuth} />;
  }

  // If authenticated >
  return (
    <div className="container">
      {room ? (
        // If a room is selected > display chat page
        <ChatPage room={room} setRoom={setRoom} />
      ) : (
        // If no room is selected > display room selection page
        <RoomPage setRoom={setRoom} setIsAuth={setIsAuth} />
      )}
    </div>
  );
};

export default App;
