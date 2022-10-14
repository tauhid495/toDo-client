
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';


const ToDo = () => {
    const [tasks, setTasks] = useState([]);
    const [addTask, setAddTask] = useState([]);

    const handleDone = (id) => {
        axios.patch(`https://to-do-tauhid.herokuapp.com/tasks/${id}`, {
            completed: 'done',
        })
        // .then(data => {
        //     // console.log(data);
        // })
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleDelete = useCallback((id) => {
        axios.delete(`https://to-do-tauhid.herokuapp.com/tasks/${id}`)
            .then(() => {
                toast('Task deleted...')
            })
    });
    useEffect(() => {
        axios.get('https://to-do-tauhid.herokuapp.com/tasks')
            .then(data => {
                setTasks(data.data)
            })

    }, [addTask, handleDelete])

    const handleAdd = (e) => {
        e.preventDefault();
        const toDo = { task: e.target.name.value, completed: '' };

        if (e.target.name.value === '') {
            return;
        } else {
            axios.post('https://to-do-tauhid.herokuapp.com/tasks', toDo)
                .then(data => {
                    if (data.statusText) {
                        setAddTask(data);
                        toast.success('Task Added....');
                    }
                })
        }
        e.target.reset();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps


    return (
        <div className=''>
            <div class="py-10 min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="card flex-shrink-0 w-full md:w-1/2 shadow-2xl bg-base-100">
                        <div class="card-body">
                            {/* <form > */}
                            <form onSubmit={handleAdd} class="form-control">
                                <div class="input-group">
                                    <input type="text" name='name' placeholder="Add to-do's" className="input w-full input-bordered" />
                                    <button type="submit" class="btn btn-primary btn-square">Add</button>
                                </div>
                            </form>
                            {/* </form> */}
                            {
                                tasks.map((task, index) => {
                                    return (
                                        <div>
                                            {task.completed === "" &&
                                                <div className='flex  items-center justify-between bg-base-300 rounded-lg my-2 p-3'>
                                                    <div className='flex items-center'>
                                                        <div class="form-control mr-2">
                                                            <label onClick={() => handleDone(task._id)} class="label cursor-pointer">
                                                                <input type="checkbox" class="checkbox checkbox-primary" />
                                                            </label>
                                                        </div>
                                                        <div className='text-xl font-semibold'>
                                                            {task.task}
                                                        </div>
                                                    </div>
                                                    <div className='flex'>
                                                        <Link className='btn btn-primary btn-sm mr-2' to={`/edittodo/${task._id}`}><FaEdit className='w-6 h-6 ' /></Link>

                                                        <button onClick={() => handleDelete(task._id)} className='btn btn-primary btn-sm'><MdDeleteForever className='w-6 h-6 ' /></button>
                                                    </div>
                                                </div >}
                                        </div >
                                    )
                                }
                                )
                            }
                        </div>
                    </div>
                    <div class="text-center md:w-1/2 lg:text-left pl-10">
                        <h1 class="text-5xl font-bold">Change this text!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToDo;