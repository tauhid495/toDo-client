import NavBar from "./components/NavBar";
import { Routes, Route } from 'react-router-dom';
import ToDo from "./components/ToDo";
import Completed from "./components/Completed";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";
import EditToDo from "./components/EditToDo";
import Home from "./components/Home";



function App() {
  // const [tasks, setTasks] = useState([]);
  // const [addTask, setAddTask] = useState([]);

  // const handleAdd = (e) => {
  //   e.preventDefault();
  //   const toDo = { task: e.target.name.value, completed: '' };

  //   if (e.target.name.value === '') {
  //     return;
  //   } else {
  //     axios.post('https://to-do-tauhid.herokuapp.com/tasks', toDo)
  //       .then(data => {
  //         if (data.statusText) {
  //           setAddTask(data);
  //           toast.success('Task Added....');
  //         }
  //       })
  //   }
  //   e.target.reset();
  // };

  // const handleDelete = (id) => {
  //   axios.delete(`https://to-do-tauhid.herokuapp.com/tasks/${id}`)
  //     .then(data => {
  //       toast('Task deleted...')
  //     })
  // };



  // useEffect(() => {
  //   const getTasks = async () => {
  //     const { data } = await axios.get('https://to-do-tauhid.herokuapp.com/tasks');
  //     setTasks(data);
  //   }
  //   getTasks();
  // }, [addTask, handleDelete]);

  return (
    <div className="">
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
