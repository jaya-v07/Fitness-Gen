import {useState} from 'react';
import './index.css';
import Home from './pages/home';
import Signup from './pages/signup';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';

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
    <div className="min-h-screen">
      <Navbar navigateTo={setCurrentPage} />
      {/* Top padding to account for the fixed navbar height */}
      <div className="pt-[57px]">
        {pages[currentPage]} 
      </div>
    </div>
  );
}
export default App;

