import NavBar from "./components/NavBar";
import { Routes, Route } from 'react-router-dom';
import ToDo from "./components/ToDo";
import Completed from "./components/Completed";
import Footer from "./components/Footer";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import EditToDo from "./components/EditToDo";
import Home from "./components/Home";



function App() {

  return (
    <div className="bg-[#f5f1e8]">
      <ToastContainer />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/completed" element={<Completed />} />
        <Route path='/edittodo/:id' element={<EditToDo />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
