import { Route,Routes } from "react-router-dom";
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cartpage" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
