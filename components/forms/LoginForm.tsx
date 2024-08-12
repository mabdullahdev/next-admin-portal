'use client';
import useLogin from '@/hooks/useLogin';

const LoginForm: React.FC = () => {
  const { handleLoginSubmit } = useLogin();

  return (
    <>
      <form onSubmit={handleLoginSubmit}>
        <button type='submit'>Submit</button>
      </form>
    </>
  );
}

export default LoginForm;