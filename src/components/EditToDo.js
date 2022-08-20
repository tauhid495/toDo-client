import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";


const EditToDo = () => {
    const { id } = useParams();
    const [task, setTask] = useState();
    const navigate = useNavigate();
    // const [newText, setNewText] = useState();

    useEffect(() => {
        axios.get(`https://to-do-tauhid.herokuapp.com/tasks/${id}`)
            .then(data => {
                setTask(data.data.task)
                // console.log(data.data.task);
            })
    }, [])

    const handleEdit = (e) => {
        e.preventDefault();
        const newText = e.target.name.value;

        if (e.target.name.value === '') {
            return;
        } else {
            axios.put(`https://to-do-tauhid.herokuapp.com/tasks/${id}`, {
                task: newText,
            })
                // .then(data => {

                // })
        }

        navigate('/todo');
        // console.log(newText);
    }

    const handleCancel = () => {
        navigate('/todo')
    }


    return (
        <div>
            <div class="py-10 min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="card flex-shrink-0 w-full md:w-1/2 shadow-2xl bg-base-100">
                        <div class="card-body">
                            {/* <form > */}
                            <form onSubmit={handleEdit} class="form-control">
                                <div class="input-group">
                                    <input type="text" name='name' placeholder={task} className="input w-full input-bordered" />
                                    <button type="submit" class="btn btn-primary">Update</button>
                                </div>
                            </form>
                        </div>
                        <button onClick={() => handleCancel()} className='btn btn-primary'>Cancel</button>
                    </div>
                    <div class="text-center md:w-1/2 lg:text-left pl-10">
                        <h1 class="text-5xl font-bold">Edit Your To Do!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>



        </div >
    );
};

export default EditToDo;