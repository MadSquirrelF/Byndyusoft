import { memo } from 'react';
import { classNames } from '@/utils/classNames/classNames';
import styles from './Test.module.scss';

interface TestProps {
  className?: string;
}

export const Test = memo((props: TestProps) => {
    const { className } = props;
    return (
        <div className={classNames(styles.Test, {}, [className])}>
            Test
        </div>
    );
});
