import ThemeProvider from './theme/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import App from './App';

render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
);
