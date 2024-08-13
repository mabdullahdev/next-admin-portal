'use client';
import useLogin from '@/hooks/useLogin';

const LoginForm: React.FC = () => {
  const { handleLoginSubmit } = useLogin();

  return (
    <div>
      <form className='space-y-6' autoComplete='off' onSubmit={handleLoginSubmit}> 
        <div className='p-8 w-[450px] mx-auto'>
          <div>
            <h2 className='text-3xl text-gray-900  font-semibold'>
              Sign In
            </h2>
            <p className='text-gray-500 text-sm mt-2 mb-10 '>New user? <a className='text-blue-600' href='/register'>Create an Account</a></p>
          </div>
          <h6 className='text-base mb-3  text-gray-900  font-medium'>Login with your email id</h6>
          <div className='mt-2'>
            <input
              id='email'
              name='email'
              type='email'
              autoComplete='new-email'
              className='block px-3 py-4 w-full h-10  rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 autofill:bg-yellow-200 sm:text-sm sm:leading-6'
            />
          </div>
          <div className='mt-4 relative'>
            <input
              id='password'
              name='password'
              type='password'
              autoComplete='new-password'
              className='block px-3 py-4 w-full h-10  rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 autofill:bg-yellow-200 sm:text-sm sm:leading-6'
            />
          </div>
          <div className='flex items-center justify-between mt-2'>
            <div className='flex items-center gap-2'>
              <input id='remember' name='remember' type='checkbox' className='checked:bg-blue-500 cursor-pointer w-4 h-4' />
              <label htmlFor='remember' className='block text-sm font-medium leading-6 text-gray-900 cursor-pointer font-medium text-sm'>
                Remember me
              </label>
            </div>
            <div className='text-sm'>
              <a href='#' className=' text-indigo-600 hover:text-indigo-500 font-medium text-[13px] text-rose-600'>
                Forgot password?
              </a>
            </div>
          </div>
          <button type='submit'
            className='flex w-full  mt-6 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Sign in
          </button>
        </div>
      </form>
      <div className='reative mt-6'>
        <div className='flex items-center w-[450px] mx-auto px-9'>
          <div className='w-full border border-solid border-gray-200'></div>
        </div>
        <div className='relative top-[-14px] w-[450px] mx-auto text-center'>
          <span className='px-2 bg-white'>Or continue with</span>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-2 mt-4  w-[450px] mx-auto px-9'>
        <a href='#' className='rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 text-center px-3 py-2 hover:bg-gray-50 font-medium'>Google</a>
        <a href='#' className='rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 text-center px-3 py-2 hover:bg-gray-50 font-medium'>GitHub</a>
      </div>
    </div>
  );
}

export default LoginForm;