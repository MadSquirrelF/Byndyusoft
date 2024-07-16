import {
    memo,
} from 'react';
import AppRouter from './providers/router/AppRouter';

const App = () => (
    <div className="app">
        <AppRouter />
    </div>
);

export default memo(App);
