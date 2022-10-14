import axios from 'axios';
import React, { useEffect, useState } from 'react';


const GetTodoData = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('https://to-do-tauhid.herokuapp.com/tasks')
      .then(data => {
        setTasks(data.data)
      })

  }, [])
  return (
    <div className=''>
      {
        tasks.map((task, index) => {
          return (
            <div>
              {task.completed === "" &&
                <div className='flex  items-center justify-between bg-base-300 rounded-lg my-2 p-3'>
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