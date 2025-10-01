import React from 'react';
import Img from '../assets/books.jpg'

const Hero = () => {
    return (
        <div className='max-w-10/12 mx-auto '>
            <div className='flex justify-around items-center my-6 bg-gray-200 py-11 rounded-2xl'>
                <div>
                    <h3 className='text-5xl font-semibold mt-[-30px] mb-[30px] leading-18'>Books to freshen up <br /> your bookshelf</h3>
                    <div className='bg-green-500 rounded-3xl  px-5 py-2 w-37'>  
                        <button  type="button" className='text-white font-bold'>View The List</button>
                    </div>
                </div>
                <div>
                    <img src={Img} alt="" className='rounded-3xl h-[250px]' />
                </div>
            </div>

        </div>
    );
};

export default Hero;