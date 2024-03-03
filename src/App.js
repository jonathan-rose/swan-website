import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Video from "./pages/video/Video";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/gallery/Gallery";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import './app.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/video" element={<Video/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/contact" element={<Contact/>}/>
       <Route path="/gallery" element={<Gallery/>}/>
      </Routes>
    </Router>
  );
}

export default App;
