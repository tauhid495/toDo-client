
import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import { useNavigate, Link } from 'react-router-dom';


const TaskList = ({ tasklist, handleDelete }) => {


    const handleDone = (id) => {
        axios.patch(`http://localhost:5000/tasks/${id}`, {
            completed: 'done',
        })
            .then(data => {
                // console.log(data);
            })
    };


    return (
        <div>
            {tasklist.completed === "" &&
                <div className='flex  items-center justify-between bg-base-300 rounded-lg my-2 p-3'>
                    <div className='flex items-center'>
                        <div class="form-control mr-2">
                            <label onClick={() => handleDone(tasklist._id)} class="label cursor-pointer">
                                <input type="checkbox" class="checkbox checkbox-primary" />
                            </label>
                        </div>
                        <div className='text-xl font-semibold'>
                            {tasklist.task}
                        </div>
                    </div>
                    <div>
                        <Link className='btn btn-primary btn-sm mr-2' to={`/edittodo/${tasklist._id}`}><FaEdit className='w-6 h-6 ' /></Link>

                        <button onClick={() => handleDelete(tasklist._id)} className='btn btn-primary btn-sm'><MdDeleteForever className='w-6 h-6 ' /></button>
                    </div>
                </div >}
        </div >
    );
};

export default TaskList;