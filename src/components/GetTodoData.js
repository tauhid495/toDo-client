import axios from 'axios';
import React, { useEffect, useState } from 'react';


const GetTodoData = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('https://todo-server-236i.onrender.com/tasks')
      .then(data => {
        setTasks(data.data)
      })

  }, [])
  return (
    <div className='border px-5 py-3 shadow-2xl rounded-lg bg-[#D4E6F1]'>

      <p className='font-bold text-2xl text-center text-[#009ACE] drop-shadow-sm'> Your Todo Tasks</p>

      {
        tasks.map((task, index) => {
          return (
            <div key={index}>
              {task.completed === "" &&
                <div className='flex  items-center justify-between shadow-md bg-white rounded-lg my-7 p-3'>
                  <div className='flex items-center'>
                    <div className='text-xl font-semibold'>
                      {task.task}
                    </div>
                  </div>

                </div >}
            </div >
          )
        }
        )
      }
    </div>
  );
};

export default GetTodoData;