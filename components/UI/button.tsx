import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = '',
  className = '',
  onClick,
  children,
  ...props
}) => {
  
  if (variant === 'primary') {
    return (
      <button
        className={`btn btn-primary ${className}`}
        onClick={onClick}
        {...props}
      >
        { children }
      </button>
    );
  } else if (variant === 'secondary') {
    return (
      <button
        className={`btn btn-secondary ${className}`}
        onClick={onClick}
        {...props}
      >
        { children }
      </button>
    );
  } else {
    return (
      <button
        className={`btn btn-danger ${className}`}
        onClick={onClick}
        {...props}
      >
        { children }
      </button>
    );
  }
}

export default Button;