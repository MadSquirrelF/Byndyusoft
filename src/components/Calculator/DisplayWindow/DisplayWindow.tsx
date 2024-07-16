import { memo } from 'react';
import { classNames } from '@/utils/classNames/classNames';
import styles from './DisplayWindow.module.scss';
import { VStack } from '@/components/ui/Stack';

interface DisplayWindowProps {
  className?: string;
  result: string;
  expression: string;
}

export const DisplayWindow = memo((props: DisplayWindowProps) => {
    const { className, result, expression } = props;
    return (
        <VStack max gap="20" className={classNames(styles.DisplayWindow, {}, [className])}>
            <p className={styles.expression}>{expression}</p>
            <p className={styles.result}>{result}</p>
        </VStack>
    );
});
