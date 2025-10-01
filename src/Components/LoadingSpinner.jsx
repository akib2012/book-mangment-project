import React from 'react';
import { PuffLoader } from 'react-spinners';

const LoadingSpinner = () => {
    return (
        <div className='flex ml-160 justify-center items-center h-32 w-44'>
           
              <div>
                  <PuffLoader></PuffLoader>
              </div>
            
        </div>
    );
};

export default LoadingSpinner;