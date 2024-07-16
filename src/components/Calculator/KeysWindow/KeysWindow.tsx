/* eslint-disable no-case-declarations */
/* eslint-disable react/no-array-index-key */
import { memo, useEffect } from 'react';
import { classNames } from '@/utils/classNames/classNames';
import styles from './KeysWindow.module.scss';
import { Button, ThemeButton } from '@/components/ui/Button/Button';

interface KeysWindowProps {
  className?: string;
  handleButton: (value: string) => void;
}

const basicKeys = ['C', '√', '%', '/', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '00', '0', ',', '='];

export const KeysWindow = memo((props: KeysWindowProps) => {
    const { className, handleButton } = props;

    useEffect(() => {
        const handleKeydown = (event: KeyboardEvent) => {
            switch (event.key) {
            case 'Enter':
                handleButton('=');
                break;
            case 'Escape':
                handleButton('C');
                break;
            case '^':
                handleButton('√');
                break;
            case 'Backspace':
                handleButton('DEL');
                break;
            default:
                const { key } = event;
                if (basicKeys.includes(key)) {
                    handleButton(key);
                }
                break;
            }
        };
        document.addEventListener('keydown', handleKeydown);
        return () => {
            document.removeEventListener('keydown', handleKeydown);
        };
    }, [handleButton]);

    return (
        <div className={classNames(styles.KeysWindow, {}, [className])}>
            <div className={styles.wrapper}>
                {
                    basicKeys.map((item, index) => (
                        <Button
                            onClick={() => handleButton(item)}
                            key={index}
                            theme={item === '=' ? ThemeButton.EQUAL : ThemeButton.ACTION}
                        >
                            <span>{item}</span>
                        </Button>
                    ))
                }
            </div>
        </div>
    );
});
