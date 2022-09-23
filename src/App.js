import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AuthLogin from './pages/Auth/Login';
import AuthSignup from './pages/Auth/Signup';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<AuthLogin />} />
          <Route path='/signup' element={<AuthSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
