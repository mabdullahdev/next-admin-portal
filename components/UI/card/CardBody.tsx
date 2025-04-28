import React from 'react';
import CardBase from './CardBase';

interface CardBodyProps {
  children: React.ReactNode;
  cardBaseClassName?: string;
  className?: string;
}

const CardBody: React.FC<CardBodyProps> = ({ children, cardBaseClassName, className }) => {
  return (
    <CardBase className={`${cardBaseClassName}`}>
      <div className={`px-4 py-4 ${className}`}>
        {children}
      </div>
    </CardBase>
  );
}

export default CardBody;