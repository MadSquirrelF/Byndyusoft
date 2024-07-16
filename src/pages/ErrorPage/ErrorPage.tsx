/* eslint-disable no-restricted-globals */
import { memo } from 'react';
import { classNames } from '@/utils/classNames/classNames';
import styles from './ErrorPage.module.scss';
import { Button, ThemeButton } from '@/components/ui/Button/Button';

interface ErrorPageProps {
  className?: string;
}

export const ErrorPage = memo((props: ErrorPageProps) => {
    const { className } = props;

    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={classNames(styles.ErrorPage, {}, [className])}>
            <h2>Ошибка</h2>
            <Button theme={ThemeButton.DEFAULT} onClick={reloadPage}>
                Обновить страницу
            </Button>
        </div>
    );
});
