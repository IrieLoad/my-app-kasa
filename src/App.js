import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import Location from "./components/Location";

//import Error from "./pages/Error";
//import Location from "./pages/Location";
//import Footer from "./components/Footer";


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