import NavBar from "./components/NavBar";
import { Routes, Route } from 'react-router-dom';
import ToDo from "./components/ToDo";
import Completed from "./components/Completed";
import Footer from "./components/Footer";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import EditToDo from "./components/EditToDo";
import Home from "./components/Home";
import { createContext, useEffect, useReducer, useState } from "react";
import { initialState, reducer } from "./Reducer/taskReducer";
import axios from "axios";
import CompleteTasks from "./components/CompleteTasks";
import TodoList from "./components/TodoList";

const taskState = createContext();

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  const [quote, setQuote] = useState('');

  useEffect(() => {
    dispatch({ type: 'LOAD_START' })
    axios.get('https://todo-server-236i.onrender.com/tasks')
      .then(res => {
        // console.log(res.data);
        dispatch({ type: 'LOAD_SUCCESS', payload: res.data })
      })
      .catch(error => {
        dispatch({ type: 'LOAD_ERROR', payload: error.message })
      })
  }, [])
  useEffect(() => {
    axios.get('https://dummyjson.com/quotes/random')
      .then(res => setQuote(res))
  }, [])

  return (
    <div className="bg-[#f5f1e8]">
      <ToastContainer />
      <NavBar />
      <taskState.Provider value={[state, dispatch]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/todo" element={<ToDo />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/completedtasks" element={<CompleteTasks />} />
          <Route path='/edittodo/:id' element={<EditToDo />} />
        </Routes>
      </taskState.Provider>
      <Footer />
    </div>
  );
}

export default App;
export { taskState }
