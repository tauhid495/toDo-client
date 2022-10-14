
import AnalogueClock from 'react-analogue-clock';
import Calander from './Calander';
import GetTodoData from './GetTodoData';



const Home = () => {


    const clockOptions = {
        baseColor: 'lightgray',
        borderColor: 'darkorange',
        borderWidth: 11,
        centerColor: 'firebrick',
        handColors: {
            hour: 'black',
            minute: 'black',
            second: '#8b0000',
        },
        notchColor: 'gray',
        numbersColor: 'gray',
        showNumbers: true,
        size: 250
    }


    return (
        <div className='flex md:flex-row flex-col-reverse'>
            <div className='md:w-1/4'>
                <Calander />
            </div>
            <div className='md:w-2/4 px-6'>
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