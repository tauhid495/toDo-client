
import AnalogueClock from 'react-analogue-clock';
import Calander from './Calander';
import GetTodoData from './GetTodoData';
import { useEffect, useState } from 'react';
import axios from 'axios';



const Home = () => {

    const [quote, setQuote] = useState('');
    useEffect(() => {
        axios.get('https://dummyjson.com/quotes/random')
            .then(res => setQuote(res))
    }, [])

    const clockOptions = {
        baseColor: 'white',
        borderColor: '#009ACE',
        borderWidth: 11,
        centerColor: 'firebrick',
        handColors: {
            hour: 'gray',
            minute: 'gray',
            second: '#8b0000',
        },
        notchColor: 'gray',
        numbersColor: 'black',
        showNumbers: false,
        size: 180,
    }


    return (
        <div className='flex md:flex-row flex-col-reverse mt-5'>
            <div className='md:w-1/4'>
                <Calander />
            </div>
            <div className='md:w-2/4 px-6 mt-5'>
                <GetTodoData />
            </div>
            <div className=' md:w-1/4 md:min-h-screen py-6'>
                <div className='flex justify-center' >
                    <AnalogueClock {...clockOptions} /> <br />
                </div>
                <div>
                    <p className="text-2xl font-semibold text-[#009ACE] px-14 mt-16">"{quote?.data?.quote}"</p>
                    <p className="text-xl font-semibold  text-end px-14 py-5">---{quote?.data?.author
                    }.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;