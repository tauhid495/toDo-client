import axios from 'axios';
import React, { useEffect, useState } from 'react';



const Completed = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        axios.get('https://to-do-tauhid.herokuapp.com/tasks')
            .then(data => {
                setTasks(data.data)
            })

    }, [tasks])

    const handleUndo = (id) => {
        axios.patch(`https://to-do-tauhid.herokuapp.com/tasks/${id}`, {
            completed: '',
        })
            .then(data => {
                // console.log(data);

            })
    };

    return (
        <div className=''>
            <div class="py-10 min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="card flex-shrink-0 w-full md:w-1/2 shadow-2xl bg-base-100">
                        <div class="card-body">

                            {
                                tasks.map((task, index) => {
                                    return (
                                        <div>
                                            {task.completed === "done" &&
                                                <div className='flex  items-center justify-between bg-base-300 rounded-lg my-2 p-3'>
                                                    <div className='flex items-center'>
                                                        <div class="form-control mr-2">
                                                            <label onClick={() => handleUndo(task._id)} class="label cursor-pointer">
                                                                <input type="checkbox" checked class="checkbox checkbox-primary" />
                                                            </label>
                                                        </div>
                                                        <div className='text-xl font-semibold'>
                                                            {task.task}
                                                        </div>
                                                    </div>

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