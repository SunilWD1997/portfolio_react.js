import { BrowserRouter, Route, Routes, } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Footer from "./components/footer/Footer";
import './app.css';




const App = () => {

  return (


    
    
    <div className="app">
    <BrowserRouter>
      <div className="routes">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Home />} />
      </Routes>
      </div>
   <div className="footer_global">
    <Footer/>
   </div>
    </BrowserRouter>
</div>
    

  )
}

export default App;