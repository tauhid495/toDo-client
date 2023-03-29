import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { toast } from 'react-toastify';


const Completed = () => {
    const [tasks, setTasks] = useState([]);
    const [fetch, setFetch] = useState(true);

    useEffect(() => {
        axios.get('https://todo-server-236i.onrender.com/tasks')
            .then(data => {
                setTasks(data.data)
            })

    }, [fetch]);

    const handleDelete = (id) => {
        axios.delete(`https://todo-server-236i.onrender.com/tasks/${id}`)
            .then(() => {
                setTasks([...tasks].filter(task => task.timeAsId !== id))
                toast.error('Task deleted...')
            })
    };

    const handleUndo = (id) => {
        axios.patch(`https://todo-server-236i.onrender.com/tasks/${id}`, {
            completed: '',
        })
            .then(() => {
                setFetch(!fetch);
            })
    };

    return (
        <div className=''>
            <div class="py-10 min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="card flex-shrink-0 w-full md:w-1/2 shadow-2xl bg-[#D4E6F1] border">
                        <div class="card-body">
                            <p className='font-bold text-2xl text-center text-[#009ACE] drop-shadow-sm'>Compleated Tasks !!</p>

                            {
                                tasks.map((task, index) => {
                                    return (
                                        <div>
                                            {task.completed === "done" &&
                                                <div className='flex  items-center justify-between bg-base-100 rounded-lg my-2 p-3 shadow-lg'>
                                                    <div className='flex items-center'>
                                                        <div class="form-control mr-2">
                                                            <label onClick={() => handleUndo(task.timeAsId)} class="label cursor-pointer">
                                                                <input type="checkbox"
                                                                    defaultChecked
                                                                    class="checkbox checkbox-primary" />
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
                        </div>
                    </div>
                    <div class="text-center md:w-1/2 lg:text-left pl-10">
                        <h1 class="text-5xl font-bold">Compleated Tasks!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Completed;