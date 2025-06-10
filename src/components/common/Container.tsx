import React from 'react';
import { layout } from '@/styles/designSystem';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`${layout.container} ${className}`}>
      {children}
    </div>
  );
};

export default Container; 