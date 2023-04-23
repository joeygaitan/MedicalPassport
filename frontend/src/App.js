import LandingPage from './Components/LandingPage';
import NavBar from './Components/NavBar';
import Search from './Components/Search';
import User from './Components/User';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    />
    <NavBar/>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={< LandingPage />}/>
          <Route path="/Search" element={<Search />}/>
          <Route path="/user" element={<User/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
