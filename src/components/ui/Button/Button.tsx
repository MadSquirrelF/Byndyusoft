import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from '@/utils/classNames/classNames';
import styles from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  EQUAL = 'equal',
  ACTION = 'action',
  DEFAULT = 'default',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  disabled?: boolean;
  children: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        disabled,
        children,
        theme = ThemeButton.DEFAULT,
        ...otherProps
    } = props;

    const mods: Mods = {
        [styles[theme]]: true,
    };

    return (
        <button
            type="button"
            disabled={disabled}
            className={classNames(styles.Button, mods, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
});
