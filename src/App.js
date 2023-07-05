import logo from './logo.svg';
import './App.css';
import { Admin } from './pages/Admin';
import { MainRoutes } from './component/MainRoutes';
import { Navbar } from './component/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;
