import React from 'react';

interface CardBaseProps {
  children: React.ReactNode;
  className?: string;
}

const CardBase: React.FC<CardBaseProps> = ({ children, className }) => {
  return (
    <div className={`border border-gray-300 rounded-lg ${className}`}>
      {children}
    </div>
  );
}

export default CardBase;