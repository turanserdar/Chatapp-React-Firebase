import { auth, provider } from '../firebase/config';
import { signInWithPopup } from 'firebase/auth';

const AuthPage = ({ setIsAuth }) => {
  // When the login button is clicked
  const handleClick = () => {
    signInWithPopup(auth, provider)
      // If login is successful:
      .then((data) => {
        // Update the state
        setIsAuth(true);
        // Save token in local storage
        localStorage.setItem('TOKEN', data.user.refreshToken);
      });
  };

  return (
    <div className="container">
      <div className="auth">
        <h1>Chat Room</h1>

        <p>Log in to Continue</p>

        <button onClick={handleClick}>
          <img src="/g-logo.png" />
          <span>Sign in with Google</span>
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
