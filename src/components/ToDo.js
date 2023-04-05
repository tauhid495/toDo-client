
import axios from 'axios';
import React, {
    useContext, useEffect, useState,
} from 'react'
import { toast } from 'react-toastify';
import { taskState } from '../App';
import TodoList from './TodoList';

const ToDo = () => {

    const [todo, dispatch] = useContext(taskState);
    const [quote, setQuote] = useState('');
    useEffect(() => {
        axios.get('https://dummyjson.com/quotes/random')
            .then(res => setQuote(res))
    }, [])

    const handleAdd = (e) => {
        e.preventDefault();
        if (e.target.todo.value === '') {
            return;
        } else {
            const newTodo = { task: e.target.todo.value, completed: '', timeAsId: new Date().getTime().toString() };

            axios.post('https://todo-server-236i.onrender.com/tasks', newTodo)
                .then(res => {
                    if (res.data.acknowledged) {
                        dispatch({ type: 'ADD', payload: newTodo })
                        toast.success('Task Added....');
                    }
                });
        }
        e.target.reset();
    };



    return (
        <div className=''>
            <div className="py-10 min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full md:w-1/2 shadow-2xl bg-[#D4E6F1]">
                        <div className="card-body">
                            <p className='font-bold text-2xl text-center text-[#009ACE] drop-shadow-sm'>Add Your Tasks </p>
                            {/* <form > */}
                            <form onSubmit={handleAdd} className="form-control">
                                <div className="input-group ">
                                    <input type="text" name='todo' placeholder="Write your text here..." className="input w-full input-bordered shadow" />
                                    <button type="submit" className="btn btn-primary btn-square shadow-md">Add</button>
                                </div>
                            </form>
                            {/* </form> */}
                            <p className='font-bold text-2xl text-center text-[#009ACE] drop-shadow-sm mt-5'>Pending Tasks</p>

                            <TodoList />

                        </div>
                    </div>
                    <div className="text-center md:w-1/2 lg:text-left pl-10">
                        <p className="text-2xl font-semibold text-[#009ACE] px-14">"{quote?.data?.quote}"</p>
                        <p className="text-xl font-semibold  text-end px-14 py-5">---{quote?.data?.author
                        }.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToDo;