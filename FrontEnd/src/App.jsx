import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserTrend from "./Components/UserTrend";
import Dashboard from "./components/Dashboard";
import Counter from "./Components/Counter";
import UserForm from "./components/UserForm";
import Signup from "./Components/SignUp";
import RichTextEditor from "./components/RichTextEditor";
import LandingPage from "./Components/LandingPage";
import Login from "./Components/Login";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/usertrend" element={<UserTrend />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/userform" element={<UserForm />} />
            <Route path="/editor" element={<RichTextEditor />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
