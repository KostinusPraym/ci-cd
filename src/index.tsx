import { createRoot } from 'react-dom/client';
import { App } from './components/App/App';
import { Provider } from 'react-redux';

import { store } from './redux/store';

import './styles.scss';

const root = document.getElementById('root');

createRoot(root).render(
    <Provider store={store}>
        <App />
    </Provider>
);
