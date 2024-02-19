import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Add from "./pages/Add";
import Putovanja from "./pages/Putovanja";
import Update from "./pages/Update";
import "./style.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Putovanja/>} />
        <Route path ="/add" element={<Add/>} />
        <Route path ="/update/:id" element={<Update/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
