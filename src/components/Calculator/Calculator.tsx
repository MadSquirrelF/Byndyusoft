/* eslint-disable no-eval */
import { memo } from 'react';

import styles from './Calculator.module.scss';

import { VStack } from '../ui/Stack';
import { DisplayWindow } from './DisplayWindow/DisplayWindow';
import { KeysWindow } from './KeysWindow/KeysWindow';
import { useCalculation } from './useCalcalutaion';

export const Calculator = memo(() => {
    const {
        result,
        displayExpression,
        handleButton,
    } = useCalculation();

    return (
        <VStack justify="between" className={styles.Calculator}>
            <DisplayWindow expression={displayExpression} result={result} />
            <KeysWindow handleButton={handleButton} />
        </VStack>
    );
});
