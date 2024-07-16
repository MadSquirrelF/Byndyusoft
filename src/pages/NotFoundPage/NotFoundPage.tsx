import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { classNames } from '@/utils/classNames/classNames';
import styles from './NotFoundPage.module.scss';
import { Button, ThemeButton } from '@/components/ui/Button/Button';
import { VStack } from '@/components/ui/Stack';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = memo((props: NotFoundPageProps) => {
    const { className } = props;

    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
    };

    return (
        <VStack gap="8" className={classNames(styles.NotFoundPage, {}, [className])}>
            NotFoundPage
            <Button onClick={handleBack} theme={ThemeButton.DEFAULT}>
                На главную страницу
            </Button>
        </VStack>
    );
});
