
import { useContext } from 'react';
import { Cartcontest } from '../App';
import Sltbook from './Sltbook';
import { Link, Outlet } from 'react-router';



const Selectedbook = () => {
    const { list, setList } = useContext(Cartcontest) // use hook use korei ana jai context api ke


 
    return (
        <div className='max-w-10/12 mx-auto'>
            <div className=' my-5 bg-gray-200 py-4 rounded-2xl'>

                <h3 className='text-center text-4xl font-bold'>Books</h3>
            </div>
            <div>
                <Link ><button  className='w-24 h-10 bg-gray-400 rounded-2xl text-white font-bold'>read book</button>
                </Link>
                <Link to='/list_books/white-list'><button className='w-24 h-10 bg-gray-400 rounded-2xl text-white font-bold mx-2.5'>white list</button></Link>
            </div>

            {
                list.map(item => <Sltbook item={item}></Sltbook>)

            }
            <Outlet></Outlet>


        </div>

    );
};

export default Selectedbook;