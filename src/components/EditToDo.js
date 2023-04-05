import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useContext } from 'react';
import { taskState } from '../App';


const EditToDo = () => {
    const { id } = useParams();
    const [task, setTask] = useState();
    const navigate = useNavigate();
    const [todo, dispatch] = useContext(taskState);

    const [quote, setQuote] = useState('');
    useEffect(() => {
        axios.get('https://dummyjson.com/quotes/random')
            .then(res => setQuote(res))
    }, [])


    useEffect(() => {
        axios.get(`https://todo-server-236i.onrender.com/tasks/${id}`)
            .then(data => {
                setTask(data.data.task)
            })
    }, [id])

    const handleEdit = (e) => {
        e.preventDefault();
        const newText = e.target.name.value;
        if (e.target.name.value === '') {
            return;
        } else {
            axios.put(`https://todo-server-236i.onrender.com/tasks/${id}`, { task: newText })
                .then(res => {
                    axios.get(`https://todo-server-236i.onrender.com/tasks/${id}`)
                        .then(res => {
                            dispatch({ type: 'EDIT', payload: { id, res } })
                        })
                })
        }
        navigate('/todo');
    }

    const handleCancel = () => {
        navigate('/todo')
    }

    return (
        <div>
            <div className="py-10 min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full md:w-1/2 shadow-2xl bg-base-100">
                        <div className="card-body">
                            <p className='font-bold text-2xl text-center text-[#009ACE] drop-shadow-sm'>Edit Your Tasks</p>

                            {/* <form > */}
                            <form onSubmit={handleEdit} className="form-control">
                                <div className="input-group">
                                    <input type="text" name='name' placeholder={task} className="input w-full input-bordered" />
                                    <button type="submit" className="btn btn-primary">Update</button>
                                </div>
                            </form>
                        </div>
                        <button onClick={() => handleCancel()} className='btn btn-primary w-22 mb-5 mx-auto'>Cancel</button>
                    </div>
                    <div className="text-center md:w-1/2 lg:text-left pl-10">
                        <p className="text-2xl font-semibold text-[#009ACE] px-14 mt-16">"{quote?.data?.quote}"</p>
                        <p className="text-xl font-semibold  text-end px-14 py-5">---{quote?.data?.author
                        }.</p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default EditToDo;