import { PropsWithChildren } from 'react';
import cn from 'classnames';
import styles from './index.module.scss';

interface ButtonCompProps {
  fullRadius?: boolean;
  type: 'primary' | 'outlined' | 'outlined-white';
  onClick?: () => void;
}

const ButtonComp = ({
  fullRadius = false,
  type,
  children,
  onClick,
}: PropsWithChildren<ButtonCompProps>) => {
  return (
    <button
      onClick={onClick}
      className={cn(styles.btn, {
        [styles.fullRadius]: fullRadius,
        [styles.primary]: type === 'primary',
        [styles.outlined]: type === 'outlined',
        [styles.outlinedWhite]: type === 'outlined-white',
      })}
    >
      <span>{children}</span>
    </button>
  );
};

export default ButtonComp;
