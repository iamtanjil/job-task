import React from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import homeimg from '../../assests/home-img.jpg';

const Home = () => {
    const sectors = ['Web Designer', 'App Developer', 'Web Developer', 'Marketing Department', 'Finance Department', 'Security Department'];

    const [accept, setAccept] = useState("false")

    //get form data
    const handleFormData = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const sector = form.sector.value;
        const formData = {
            name,
            sector,
            acceptTerms: accept
        }
        addToDb(formData, name);
    };

    //send form data to db
    const addToDb = (data, name) => {
        fetch('http://localhost:5000/formdata', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    localStorage.setItem('name', name);
                    toast.success('Data Successfully Submited');
                }
            })
    };

    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <img src={homeimg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h2 className="text-2xl font-bold text-center mt-3">Form</h2>
                    <form onSubmit={handleFormData} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name='name' required className="input input-bordered input-primary" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Sector</span>
                            </label>
                            <select name='sector' className="select select-primary w-full max-w-xs">
                                <option disabled selected>Choose Sector</option>
                                {
                                    sectors.map((sector, i) =>
                                        <option key={i} value={sector}>{sector}</option>
                                    )
                                }
                            </select>
                            <label className="label mt-3">
                                <div className="form-control">
                                    <div className='flex'>
                                        <input onClick={() => setAccept("true")} type="checkbox" className="checkbox checkbox-primary" />
                                        <span className="label-text ml-2">I accept Terms & Condtion</span>
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div className="form-control mt-3">
                            <input type='submit' value='Submit Now' className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Home;