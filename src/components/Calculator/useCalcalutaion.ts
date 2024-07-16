/* eslint-disable default-case */
/* eslint-disable no-eval */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-plusplus */
/* eslint-disable no-useless-escape */
import { useState } from 'react';

export const useCalculation = () => {
    const [expression, setExpression] = useState('');
    const [displayExpression, setDisplayExpression] = useState('');

    const [result, setResult] = useState('0');

    const evaluateExpression = (expr: string): string => {
        const tokens = expr.split(/(\+|-|\×|\/|\√|%)/);

        let result = parseFloat(tokens[0].replace(',', '.'));

        // Выполняем умножение и деление
        for (let i = 1; i < tokens.length; i += 2) {
            const operator = tokens[i];

            const operand = parseFloat(tokens[i + 1].replace(',', '.'));

            if (operator === '×' || operator === '/') {
                switch (operator) {
                case '×':
                    result *= operand;
                    break;
                case '/':
                    if (operand === 0) {
                        throw new Error('Division by zero');
                    }
                    result /= operand;
                    break;
                }
            }
        }

        // Выполняем остальные операции
        for (let i = 1; i < tokens.length; i += 2) {
            const operator = tokens[i];

            const operand = parseFloat(tokens[i + 1].replace(',', '.'));

            if (operator === '+' || operator === '-' || operator === '√' || operator === '%') {
                switch (operator) {
                case '+':
                    result += operand;
                    break;
                case '-':
                    result -= operand;
                    break;
                case '√':
                    if (operand < 0) {
                        throw new Error('Cannot take square root of a negative number');
                    }
                    result = Math.sqrt(operand);
                    break;
                case '%':
                    result += result * (operand / 100);
                    break;
                }
            }
        }

        return result.toFixed(2);
    };

    const calculateResult = () => {
        if (expression.length !== 0) {
            try {
                setResult(evaluateExpression(expression));
            } catch (error: any) {
                setResult(error.message);
            }
        } else {
            setResult('0');
        }
    };

    const handleButton = (value: string) => {
        if (value === 'C') {
            setExpression('');
            setDisplayExpression('');
            setResult('0');
        } else if (value === '=') {
            calculateResult();
        } else if (value === 'DEL') {
            setDisplayExpression(displayExpression.slice(0, -1));
            setExpression(expression.slice(0, -1));
        } else {
            if (expression.length > 0
                && (value === '+' || value === '-' || value === '×' || value === '/' || value === '√' || value === '%')
                && (expression[expression.length - 1] === '+' || expression[expression.length - 1] === '-'
                    || expression[expression.length - 1] === '×' || expression[expression.length - 1] === '/'
                    || expression[expression.length - 1] === '√' || expression[expression.length - 1] === '%')) {
                return;
            }
            setExpression(expression + value);
            setDisplayExpression(displayExpression + value);
        }
    };

    return {
        result,
        displayExpression,
        handleButton,
    };
};
