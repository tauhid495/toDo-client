
import React, { useContext } from 'react';
import { taskState } from '../App';
import CompleteTasks from './CompleteTasks';

const Completed = () => {

    const todo = useContext(taskState);



    return (
        <div className=''>
            <div className="py-10 min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <CompleteTasks />
                    <div className="text-center md:w-1/2 lg:text-left pl-10">
                        <h1 className="text-5xl font-bold">Compleated Tasks!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Completed;