import useLogin from '@/hooks/useLogin';

interface LoginFormProps {
    onSubmit: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const { email, password } = useLogin();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(email, password);
  }

  return (
    <>
      <form onSubmit={() => handleSubmit}></form>
    </>
  );
}

export default LoginForm;