
import AnalogueClock from 'react-analogue-clock';
import Calander from './Calander';
import GetTodoData from './GetTodoData';



const Home = () => {


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
        size: 220,
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
                    <AnalogueClock {...clockOptions} />
                </div>
            </div>
        </div>
    );
};

export default Home;