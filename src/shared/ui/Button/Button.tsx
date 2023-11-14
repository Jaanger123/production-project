import { classNames } from 'shared/lib/classNames/classNames';
import { type ButtonHTMLAttributes, type FC } from 'react';

import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
}

const Button: FC<ButtonProps> = (props) => {
    const {
        className = '', children, theme = 'clear', ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;
