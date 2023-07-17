import { BrowserRouter, Route, Routes } from "react-router-dom";
// Components
import { Header, Footer } from "./components/exports";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Pages
import { Home, Contact, Login, Register, Reset } from "./pages/exports";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;