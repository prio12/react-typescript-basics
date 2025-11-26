import type React from 'react';

type HeadingProps = {
  children: React.ReactNode;
};

const Heading = ({ children }: HeadingProps) => {
  return (
    <div className="text-center">
      <h1>THis is heading</h1>
      {children}
    </div>
  );
};

export default Heading;
