import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import FicheLogement from "./pages/Logement/ficheLogement";
import About from "./pages/About/about";
import Home from "./pages/Home/home";
import NotFound from "./pages/Error/error";


function App () {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="logement/:id" element={<FicheLogement />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;