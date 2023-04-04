import axios from 'axios';
import React, { useContext } from 'react';
import { FaEdit } from 'react-icons/fa';
import { ImSpinner2 } from 'react-icons/im';
import { MdDeleteForever } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { taskState } from '../App';

const TodoList = () => {
    const [todo, dispatch] = useContext(taskState);

    const handleDelete = (id) => {
        axios.delete(`https://todo-server-236i.onrender.com/tasks/${id}`)
            .then(res => {
                if (res.data.acknowledged) {
                    dispatch({ type: 'DELETE', payload: id })
                    toast.error('Task deleted....');
                }
            });
    };

    const handleDone = (id) => {
        axios.patch(`https://todo-server-236i.onrender.com/tasks/${id}`, {
            completed: 'done',
        })
            .then(() => {
                window.location.reload();
            })
    };


    return (
        <div>
            {todo.loading && <div className=' flex items-center justify-center'>
                <ImSpinner2 className="animate-spin text-primary w-9 h-9 rounded-full" />
            </div>}
            {todo?.tasks?.map((task, index) => {
                return (
                    <div key={index}>
                        {task.completed === "" &&
                            <div className='flex  items-center justify-between bg-base-100 shadow rounded-lg my-2 p-3'>
                                <div className='flex items-center'>
                                    <div className="form-control mr-2">
                                        <label onClick={() => handleDone(task.timeAsId)} className="label cursor-pointer">
                                            <input type="checkbox" className="checkbox checkbox-primary" />
                                        </label>
                                    </div>
                                    <div className='text-xl font-semibold'>
                                        {task.task}
                                    </div>
                                </div>
                                <div className='md:flex'>
                                    <Link className='btn btn-primary btn-sm mr-2' to={`/edittodo/${task.timeAsId}`}><FaEdit className='w-6 h-6 ' /></Link>

                                    <button onClick={() => handleDelete(task.timeAsId)} className='btn btn-primary btn-sm'><MdDeleteForever className='w-6 h-6 ' /></button>
                                </div>
                            </div >}
                    </div >
                )
            }
            )
            }
            <div className='text-center text-red-700'>
                {todo.error}
                {todo.tasks.find((task) => task.completed === '') ? '' : 'Great! you have no panding task...'}
            </div>
        </div>
    );
};

export default TodoList;