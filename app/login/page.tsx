import React from 'react';
import LoginForm from '@/components/forms/LoginForm';
import Image from 'next/image';

const LoginPage: React.FC = () => {
  return (
    <div className='grid grid-cols-2 min-h-[100vh]'>
      <div className='min-h-full bg-indigo-700 flex items-center min-h-full'>
        <div className='p-12'>
          <h1 className='text-white text-4xl font-bold'>Welcome to Admin Portal</h1>
          <div className='py-8'>
            <p className='text-white text-sm font-normal'>A product is something a brand is something that is bought by the customer.</p>
          </div>
          <Image
            src='/images/login-footer-brands.svg'
            alt='Footer Brands'                    
            width={300}                           
            height={100}  
          />
          
        </div>
      </div>
      <div className='bg-white'>
        <div className='flex items-center min-h-full w-full justify-center'>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;