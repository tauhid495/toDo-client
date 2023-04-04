import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { ImSpinner2 } from 'react-icons/im';
import { taskState } from '../App';


const GetTodoData = () => {

  const [todo, dispatch] = useContext(taskState);

  return (
    <div className='border px-5 py-3 shadow-2xl rounded-lg bg-[#D4E6F1]'>

      <p className='font-bold text-2xl text-center text-[#009ACE] drop-shadow-sm'> Your Todo Tasks</p>

      {todo.loading && <div className=' flex items-center justify-center'>
        <ImSpinner2 className="animate-spin text-primary w-9 h-9 rounded-full" />
      </div>}

      {
        todo.tasks?.map((task, index) => {
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
      <div className='text-center text-red-700'>{todo.error}</div>
    </div>
  );
};

export default GetTodoData;