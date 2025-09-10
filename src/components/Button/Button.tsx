import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';

type Variant = 'green' | 'grey' | 'outline';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
}
const Button = ({ children, variant = 'green', ...rest }: ButtonProps) => {
  const classes = [
    styles.button, 
    styles[`variant_${variant}`]
  ].join(' ');

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
