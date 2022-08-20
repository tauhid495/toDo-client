import React, { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker, Head } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calander = () => {
    const [selected, setSelected] = useState();

    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p>{format(selected, 'PP')} selected.</p>;
    }

    return (
        <div className='min-h-screen'>
            <DayPicker
                mode="single"
                selected={selected}
                onSelect={setSelected}
                footer={footer}
                styles={{
                    head: { color: 'darkorange', background: 'gray' },
                    caption: { background: 'darkorange', color: 'gray' }
                }}
            />
        </div>
    );
};

export default Calander;