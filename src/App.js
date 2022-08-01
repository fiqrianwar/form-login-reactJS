
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import FormLogin from './pages/FormLogin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormLogin/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
