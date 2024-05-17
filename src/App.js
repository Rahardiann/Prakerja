
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from './Management/components/loginform';
import Dashboard from './Management/pages/dashboard';
import Data from './Management/pages/data';
import Admin from './Management/pages/admin';
import Koordinator from './Management/pages/koordinator';
import User from './Management/pages/user';

function App() {
 return (
   <Router>
     <Routes>
       <Route path="/" element={<LoginForm />} />
       <Route path="/dashboard" element={<Dashboard />} />
       <Route path="/data" element={<Data />} />
       <Route path="/admin" element={<Admin />} />
       <Route path="/koordinator" element={<Koordinator />} />
       <Route path="/user" element={<User />} />
     </Routes>
   </Router>
 );
}

export default App;
