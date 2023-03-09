import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Women from './components/Women';
import Login from './components/Login';
import Men from './components/Men';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/women' element={<Women/>}/>
      <Route path='/men' element={<Men/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  </Router>

);
