import React from 'react';

// React.ComponentProps<'button'>

interface ICustomButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  hasIcon?: boolean;
  icon?: JSX.Element;
}

const CustomButton = ({
  text,
  hasIcon = false,
  icon,
  className,
  ...nativeProps
}: ICustomButton) => {
  return (
    <button className={`btn ${className}`} {...nativeProps}>
      {text}
      {hasIcon && icon}
    </button>
  );
};

export default CustomButton;
