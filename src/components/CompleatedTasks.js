import axios from 'axios';
import React from 'react';

const CompleatedTasks = ({ tasklist }) => {

    const handleUndo = (id) => {
        axios.patch(`http://localhost:5000/tasks/${id}`, {
            completed: '',
        })

    };
    return (
        <div>
            {tasklist.completed === "done" &&
                <div className='flex  items-center justify-between bg-base-300 rounded-lg my-2 p-3'>
                    <div className='flex items-center'>
                        <div class="form-control mr-2">
                            <label onClick={() => handleUndo(tasklist._id)} class="label cursor-pointer">
                                <input type="checkbox" checked class="checkbox checkbox-primary" />
                            </label>
                        </div>
                        <div className='text-xl font-semibold'>
                            {tasklist.task}
                        </div>
                    </div>

                </div >}
        </div>
    );
};

export default CompleatedTasks;