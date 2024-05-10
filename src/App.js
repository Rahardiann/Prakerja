
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from './Management/components/loginform';
import Dashboard from './Management/pages/dashboard';
import Data from './Management/pages/data';

function App() {
 return (
   <Router>
     <Routes>
       <Route path="/" element={<LoginForm />} />
       <Route path="/dashboard" element={<Dashboard />} />
       <Route path="/data" element={<Data />} />
     </Routes>
   </Router>
 );
}

export default App;
