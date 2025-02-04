import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import '@/styles/index.scss';
import ErrorBoundary from './providers/ErrorBoundary/ErrorBoundary';

const container = document.getElementById('root');

if (!container) {
    throw new Error('Контейнер root не найден. Не удалось вмонтировать реакт приложение');
}

const root = createRoot(container);

root.render(
    <BrowserRouter>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </BrowserRouter>,
);
