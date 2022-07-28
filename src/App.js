import SidebarP from "./Components/SidebarP";
import Signup from "./Components/Signup";
import { BrowserRouter } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import LinkedinPage from "./Components/LinkedinPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SidebarP />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/linkedin" component={<LinkedinPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
