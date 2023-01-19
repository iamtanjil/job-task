import React from 'react';
import homeimg from '../../assests/home-img.jpg';

const Home = () => {
    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <img src={homeimg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h2 className="text-2xl font-bold text-center mt-3">Form</h2>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered input-primary" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Sector</span>
                            </label>
                            <select className="select select-primary w-full max-w-xs">
                                <option disabled selected>Choose Sector</option>
                                <option>Game of Thrones</option>
                                <option>Lost</option>
                                <option>Breaking Bad</option>
                                <option>Walking Dead</option>
                            </select>
                            <label className="label">
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <input type="checkbox" className="checkbox checkbox-primary" />
                                        <span className="label-text ml-2">I accept Terms & Condtion</span>
                                    </label>
                                </div>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;