import React from 'react';

interface ICustomInput extends React.InputHTMLAttributes<HTMLInputElement> {
  isLabelVisible?: boolean;
  labelText?: string;
}

const CustomInput = ({
  isLabelVisible = false,
  className,
  labelText,
  id,
  ...nativeProps
}: ICustomInput) => {
  return (
    <>
      {isLabelVisible && (
        <label className="font-bold tracking-wide label mb-2" htmlFor={id}>
          {labelText}
        </label>
      )}
      <input
        {...nativeProps}
        id={id}
        className={`input text-2xl placeholder:text-neutral  ${className}`}
      />
    </>
  );
};

export default CustomInput;
