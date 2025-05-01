import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLoin = () => {
    return (
        <div>
            <h1 className='font-bold text-xl'>Login with</h1>
            <div className='grid grid-cols-1 space-y-2 mt-3'>
                <button className='btn btn-outline bg-white w-full hover:bg-accent hover:text-white text-sm md:text-lg'> <FcGoogle size={24}/> Login with Google</button>
                <button className='btn btn-outline bg-white w-full hover:bg-accent hover:text-white text-sm md:text-lg'><FaGithub size={24}/>Login with GitHub</button>
            </div>
        </div>
    );
};

export default SocialLoin;