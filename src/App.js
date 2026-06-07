
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Login } from "./pages/login";
import { Home } from "./pages/home";
import { Feed } from "./pages/feed";
import { Cadastro } from "./pages/cadastro";
import { AuthProvider } from './context/auth';


function App() {
  return (
   <Router>
     <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />       
        <Route path="/" element={<Home />} /> 
        <Route path="/Feed" element={<Feed />} /> 
        <Route path="/Cadastro" element={<Cadastro />} /> 
      </Routes>
     </AuthProvider>
      
    </Router> 
  );
}

export default App;
