import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import { ThemeProvider } from './app/providers/ThemeProvider';
import App from './app/App';

import 'shared/config/i18n/i18n';
import 'app/styles/index.scss';

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root'),
);
