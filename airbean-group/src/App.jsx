import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Status from "./components/Status";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import About from "./components/About"; 


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/status" element={<Status />} />
        <Route path="/about" element={<About />} />
        <Route path="/nav" element={<Nav />} />
      </Routes>
    </Router>
  );
}


export default App;
