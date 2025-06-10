import React from 'react';
import { components } from '@/styles/designSystem';

interface DividerProps {
  variant?: 'horizontal' | 'short';
  className?: string;
}

const Divider: React.FC<DividerProps> = ({ 
  variant = 'horizontal', 
  className = '' 
}) => {
  const baseClasses = components.divider[variant];
  
  return (
    <div className={`${baseClasses} ${className}`} />
  );
};

export default Divider; 