
import React, { useEffect, useState } from 'react';

import CompleteTasks from './CompleteTasks';
import axios from 'axios';

const Completed = () => {

    const [quote, setQuote] = useState('');
    // console.log(quote.data.quote);
    useEffect(() => {
        axios.get('https://dummyjson.com/quotes/random')
            .then(res => {
                console.log(res);
                setQuote(res)
            })
    }, [])

    return (
        <div className=''>
            <div className="py-10 min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <CompleteTasks />
                    <div className="text-center md:w-1/2 lg:text-left pl-10">

                        <p className="text-2xl font-semibold text-[#009ACE] px-14">"{quote?.data?.quote}"</p>
                        <p className="text-xl font-semibold  text-end px-14 py-5">---{quote?.data?.author
                        }.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Completed;