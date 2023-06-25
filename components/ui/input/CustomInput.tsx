import React from 'react';

interface ICustomInput extends React.InputHTMLAttributes<HTMLInputElement> {
  isLabelVisible?: boolean;
  labelText?: string;
}

const CustomInput = ({
  isLabelVisible = false,
  labelText,
  id,
  ...nativeProps
}: ICustomInput) => {
  return (
    <>
      {isLabelVisible && (
        <label
          className="text-2xl font-bold text-white tracking-wide"
          htmlFor={id}
        >
          {labelText}
        </label>
      )}
      <input
        {...nativeProps}
        id={id}
        className="p-4 shadow-inner rounded-md outline-none focus:outline-2  focus:outline-emerald-100"
      />
    </>
  );
};

export default CustomInput;
