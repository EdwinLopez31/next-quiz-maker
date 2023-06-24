import React from 'react';
// React.ComponentProps<'button'>
interface ICustomButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const CustomButton = ({ text, ...nativeProps }: ICustomButton) => {
  return <button {...nativeProps}>{text}</button>;
};

export default CustomButton;
