import './App.css';
import LoginButton from './components/Login';
import LogoutButton from './components/Logout';
import Profile from './components/Profile';

function App() {

  return (
    <>
      <div className="card">
        <Profile />
        <LoginButton />
        <LogoutButton />
      </div>
    </>
  );
}

export default App;
