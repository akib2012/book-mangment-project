import React from 'react';

const Nabvar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm max-w-10/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a href="">Listed Book</a></li>
                            <li><a>Page to read</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Book Vive</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li>
                            <a href="">Listed Book</a>
                        </li>
                        <li><a>Page to read</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className='btn mr-2.5'>Sing up</a>
                    <a className="btn">Sing In</a>
                </div>
            </div>
        </div>
    );
};

export default Nabvar;