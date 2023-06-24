import React from 'react';

interface IPageHeaderProps {
  title: string;
}

const PageHeader = ({ title }: IPageHeaderProps) => {
  return (
    <h1 className="text-6xl transition-[text-shadow] duration-150 [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)] hover:[text-shadow:_0_6px_0_rgb(0_0_0_/_40%)]">
      {title}
    </h1>
  );
};

export default PageHeader;
