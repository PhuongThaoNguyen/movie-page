import React from 'react';

interface IButton {
  children: any;
  style?: React.CSSProperties;
}
export const Button: React.FC<IButton> = ({ children, style }) => {
  return (
    <div className='button' style={style}>
      {children}
    </div>
  );
};
