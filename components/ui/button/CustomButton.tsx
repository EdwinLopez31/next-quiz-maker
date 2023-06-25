import React from 'react';
import clsx from 'clsx';
// React.ComponentProps<'button'>

type Variants = 'primary' | 'secondary';
type Sizes = 'large' | 'base' | 'small';
interface ICustomButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: Variants;
  size?: Sizes;
}

const variantStyle: { [key in Variants]: string } = {
  primary: 'bg-emerald-500 text-white',
  secondary: 'border border-emerald-400 text-emerald-400',
};

const sizeStyle: { [key in Sizes]: string } = {
  large: 'px-8 py-4 rounded-lg',
  base: 'px-6 py-3 rounded',
  small: 'px-2 py-1 rounded-sm',
};

const CustomButton = ({
  text,
  variant = 'primary',
  size = 'base',
  className,
  ...nativeProps
}: ICustomButton) => {
  return (
    <button
      className={clsx(
        'px-4 py-2 rounded w-full',
        variantStyle[variant],
        sizeStyle[size],
        className
      )}
      {...nativeProps}
    >
      {text}
    </button>
  );
};

export default CustomButton;
