import React from 'react';
import AnalogueClock from 'react-analogue-clock';
import Calander from './Calander';


const Home = () => {

    const clockOptions = {
        baseColor: '#00527b',
        borderColor: '#d0d0d0 ',
        borderWidth: 10,
        centerColor: '#000000',
        handColors: {
            hour: '#d0d0d0',
            minute: '#d0d0d0',
            second: '#8b0000',
        },
        notchColor: '#d0d0d0',
        numbersColor: '#d0d0d0',
        showNumbers: false,
        size: 250
    }


    return (
        <div className='flex'>
            <div className='w-3/4'>
            </div>
            <div className=' w-1/4 min-h-screen pt-7'>
                <div className='flex flex-col items-center' >
                    <AnalogueClock {...clockOptions} />
                    <Calander />
                </div>
            </div>
        </div>
    );
};

export default Home;