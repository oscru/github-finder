import { Routes, Route, Link } from "react-router-dom";
import { Home, Profile } from "./pages";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="user/:profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
