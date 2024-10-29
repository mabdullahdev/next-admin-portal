import React, { ComponentType, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const WithAuth = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const AuthenticatedComponent: React.FC<P> = (props) => {
    const { isAuthorized } = useSelector((state: RootState) => state.auth);
    const router = useRouter();

    useEffect(() => {
      if (isAuthorized === false) {
        router.replace('/login');
      }
    }, [isAuthorized, router]);

    if (isAuthorized === true) {
      return <WrappedComponent {...props} />;
    }

    // Optionally, return null or a loading state while checking authorization
    return null; // or <div>Loading...</div>;
  };

  return AuthenticatedComponent;
};

export default WithAuth;
