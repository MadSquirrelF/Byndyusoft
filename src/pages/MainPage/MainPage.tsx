import { memo } from 'react';
import { classNames } from '@/utils/classNames/classNames';
import styles from './MainPage.module.scss';
import { Calculator } from '@/components/Calculator/Calculator';

interface MainPageProps {
  className?: string;
}

export const MainPage = memo((props: MainPageProps) => {
    const { className } = props;
    return (
        <div className={classNames(styles.MainPage, {}, [className])}>
            <Calculator />
        </div>
    );
});
