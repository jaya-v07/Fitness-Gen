import {useState} from 'react';
import './index.css';
import Home from './pages/home';
import Signup from './pages/signup';
import Dashboard from './pages/Dashboard';
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [userId, setUserId] = useState(null);
  // 2. The logic that decides what to show on the screen
    const pages = {
      home: <Home navigateTo={setCurrentPage} />,
      signup: <Signup navigateTo={setCurrentPage} onAuthenticated={setUserId} />,
      dashboard: <Dashboard navigateTo={setCurrentPage} userId={userId} />
    }
  return (
    <div>
      {pages[currentPage]} 
    </div>
  );
}

export default App;
