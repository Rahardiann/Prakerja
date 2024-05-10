import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from './components/loginform';

function App() {
 return (
<Router>
  <Routes>
    <Route path="/" element={<LoginForm/>}/>
  </Routes>
</Router>
);
}

export default App;
