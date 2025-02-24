import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Status from "./components/Status";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
<<<<<<< HEAD
import Status from "./components/Status";
import About from "./components/About"; 

=======
import About from "./components/About";
>>>>>>> f80831f62f6e5dd2ed4d03a410f2c6868efaee47

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
