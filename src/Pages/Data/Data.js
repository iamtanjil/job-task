import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Data = () => {
    const [data, setData] = useState({});

    const name = localStorage.getItem('name');
    fetch(`https://job-task-server-ruby.vercel.app/data/${name}`)
    .then(res => res.json())
    .then(data => {
        setData(data);
    })
    return (
        <div className='flex min-h-screen items-center justify-center w-full m-3'>
            <div className='shadow-md p-5 rounded-lg '>
                <h2 className='text-3xl'>Name: {data.name}</h2>
                <h2 className='text-3xl'>Sector: {data.sector}</h2>
                <h2 className='text-3xl'>Agree for Terms: {data.acceptTerms}</h2>
                <Link to='/' className='btn btn-primary mt-5'>Return Home</Link>
            </div>
            
        </div>
    );
};

export default Data;