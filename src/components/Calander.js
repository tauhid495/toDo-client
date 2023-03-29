import React, { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const css = `
  .my-today { 
    font-weight: bold;
    font-size: 140%; 
    color: #009ACE;
   
  }
`;


const Calander = () => {
    const [selected, setSelected] = useState();

    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p>{format(selected, 'PP')} selected.</p>;
    }

    return (
        <div className='min-h-screen '>
            <style>{css}</style>
            <DayPicker
                mode="single"
                modifiersClassNames={{
                    today: 'my-today'
                }}

                footer={footer}
                styles={{
                    head: { color: '#009ACE', background: 'lightgray' },
                    caption: { background: '#009ACE', color: 'lightgray' },
                }}
            />
        </div>
    );
};

export default Calander;