import React, { useEffect, useState } from 'react';
import ChefCard from './ChefCard';

const Chefs = () => {
    const [chefs, setChefs] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/chefs`)
            .then(res => res.json())
            .then(data => setChefs(data))
        .catch(error=>alert(error.message))
    },[])
    return (
        <div className='md:mx-10 w-full' >
            <h2 className='text-center font-bold text-5xl mt-4'>Chefs</h2>
            <div className='mx-auto px-4'>
            <div className='md:grid grid-cols-3 gap-10 md:my-20'>
            {
                chefs.map(chef => <ChefCard
                    key={chef.id}
                    chef={chef}
                ></ChefCard>)
            }
           </div>
            </div>
            
        </div>
    );
};

export default Chefs;