
import axios from 'axios';
import React, {
    useEffect, useState
} from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';


const ToDo = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [fetch, setFetch] = useState(true);

    useEffect(() => {
        axios.get('https://todo-server-236i.onrender.com/tasks')
            .then(res => {
                setLoading(false);
                // console.log(res.data);
                setTasks(res.data)
            })
            .catch(error => {
                setLoading(false);
                setTasks('');
                setError("Tumi vul korecho...")
            })
    }, [fetch])

    const handleAdd = (e) => {
        e.preventDefault();
        if (e.target.todo.value === '') {
            return;
        } else {
            const toDo = { task: e.target.todo.value, completed: '', timeAsId: new Date().getTime().toString() };

            axios.post('https://todo-server-236i.onrender.com/tasks', toDo)
                .then(data => {
                    if (data.data.acknowledged) {
                        setTasks([{ ...toDo }, ...tasks])
                        toast.success('Task Added....');
                    }
                });
        }
        e.target.reset();
    };

    const handleDelete = (id) => {
        axios.delete(`https://todo-server-236i.onrender.com/tasks/${id}`)
            .then(() => {
                setTasks([...tasks].filter(task => task.timeAsId !== id))
                toast.error('Task deleted...')
            })
    };

    const handleDone = (id) => {
        axios.patch(`https://todo-server-236i.onrender.com/tasks/${id}`, {
            completed: 'done',
        })
            .then(() => {
                setFetch(!fetch);
            })
    };


    return (
        <div className=''>
            <div class="py-10 min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="card flex-shrink-0 w-full md:w-1/2 shadow-2xl bg-[#D4E6F1]">
                        <div class="card-body">
                            <p className='font-bold text-2xl text-center text-[#009ACE] drop-shadow-sm'>Add Your Tasks </p>
                            {/* <form > */}
                            <form onSubmit={handleAdd} class="form-control">
                                <div class="input-group ">
                                    <input type="text" name='todo' placeholder="Write your text here..." className="input w-full input-bordered shadow" />
                                    <button type="submit" class="btn btn-primary btn-square shadow-md">Add</button>
                                </div>
                            </form>
                            {/* </form> */}
                            <p className='font-bold text-2xl text-center text-[#009ACE] drop-shadow-sm mt-5'>Pending Tasks</p>
                            {
                                loading ? 'Loading data...' :
                                    tasks.map((task, index) => {
                                        return (
                                            <div key={index}>
                                                {task.completed === "" &&
                                                    <div className='flex  items-center justify-between bg-base-100 shadow rounded-lg my-2 p-3'>
                                                        <div className='flex items-center'>
                                                            <div class="form-control mr-2">
                                                                <label onClick={() => handleDone(task.timeAsId)} class="label cursor-pointer">
                                                                    <input type="checkbox" class="checkbox checkbox-primary" />
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
                            {error ? error : null}
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