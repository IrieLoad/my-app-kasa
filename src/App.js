import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import About from "./pages/About/about";
import Home from "./pages/Home/home";
import Location from "./components/Location/location";


function App () {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="location/:id" element={<Location />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;