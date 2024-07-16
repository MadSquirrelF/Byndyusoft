import { useCalculation } from './useCalcalutaion';

describe('useCalculation', () => {
    const { handleButton, result } = useCalculation();
    it('should calculate the result correctly', () => {
        handleButton('5');
        handleButton('+');
        handleButton('5');
        handleButton('=');

        expect(result).toBe('10.00');
    });
});
