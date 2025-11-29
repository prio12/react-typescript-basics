import React from 'react';

type ButtonProps = {
  variant: 'primary' | 'secondary';
  children: string;
} & Omit<React.ComponentProps<'button'>, 'children'>;

const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <div>
      <button className={`class_with_${variant}`} {...rest}>
        {children}
      </button>
    </div>
  );
};

export default CustomButton;
