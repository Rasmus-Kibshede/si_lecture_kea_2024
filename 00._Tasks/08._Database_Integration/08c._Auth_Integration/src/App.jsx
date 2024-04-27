import { useState } from 'react';
import './App.css';
import LoginButton from './components/Login';
import LogoutButton from './components/Logout';
import Profile from './components/Profile';

function App() {
  const [count, setCount] = useState(0);

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
