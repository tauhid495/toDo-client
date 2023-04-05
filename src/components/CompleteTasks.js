import axios from 'axios';
import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { ImSpinner2 } from 'react-icons/im';
import { MdDeleteForever } from 'react-icons/md';
import { toast } from 'react-toastify';
import { taskState } from '../App';

const CompleteTasks = () => {
    const [todo, dispatch] = useContext(taskState);
    const Navigate = useNavigate();

    const handleDelete = (id) => {
        axios.delete(`https://todo-server-236i.onrender.com/tasks/${id}`)
            .then((res) => {
                if (res.data.acknowledged) {
                    dispatch({ type: 'DELETE', payload: id })
                    toast.error('Task deleted....');
                }
            })
    };

    const handleUndo = (id) => {
        axios.patch(`https://todo-server-236i.onrender.com/tasks/${id}`, {
            completed: '',
        })
            .then((res) => {
                // dispatch({ type: 'LOAD_START' })

                Navigate('/todo');
                axios.get(`https://todo-server-236i.onrender.com/tasks/${id}`)
                    .then(res => {
                        dispatch({ type: 'UNDO', payload: { id, res } })
                    })

                    .catch(error => {
                        dispatch({ type: 'LOAD_ERROR', payload: error.message })
                    })
            })
    };


    return (
        <div className="card flex-shrink-0 w-full md:w-1/2 shadow-2xl bg-[#D4E6F1] border">
            <div className="card-body">
                <p className='font-bold text-2xl text-center text-[#009ACE] drop-shadow-sm'>Compleated Tasks !!</p>
                {todo.loading && <div className=' flex items-center justify-center'>
                    <ImSpinner2 className="animate-spin text-primary w-9 h-9 rounded-full" />
                </div>}
                {
                    todo.tasks?.map((task, index) => {
                        return (
                            <div key={index}>
                                {task.completed === "done" &&
                                    <div className='flex  items-center justify-between bg-base-100 rounded-lg my-2 p-3 shadow-lg'>
                                        <div className='flex items-center'>
                                            <div className="form-control mr-2">
                                                <label onClick={() => handleUndo(task.timeAsId)} className="label cursor-pointer">
                                                    <input type="checkbox"
                                                        defaultChecked
                                                        className="checkbox checkbox-primary" />
                                                </label>
                                            </div>
                                            <div className='text-xl font-semibold'>
                                                {task.task}
                                            </div>
                                        </div>

                                        <button onClick={() => handleDelete(task.timeAsId)} className='btn btn-primary btn-sm'><MdDeleteForever className='w-6 h-6 ' /></button>

                                    </div >}
                            </div>
                        );
                    })
                }
                <div className='text-center text-red-700'>
                    {todo.error ?
                        todo.error :
                        todo.tasks.find((task) => task.completed === 'done') ? '' : 'You have no completed tasks to show...'
                    }
                </div>
            </div>
        </div>
    );
};

export default CompleteTasks;