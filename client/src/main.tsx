import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications'; // Импортируем Notifications
import App from './app/App';
import { injectStore } from './services/axiosInstance';
import store from './app/provider/store/store';
import '@mantine/core/styles.css'; // Подключение стилей Mantine Core
import '@mantine/dates/styles.css'; // Подключение стилей для DatePicker
import '@mantine/notifications/styles.css'; 

// Инъекция хранилища
injectStore(store);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <MantineProvider>
      <ModalsProvider>
        <BrowserRouter>
          <App />
          <Notifications position="top-right" /> {/* Используем Notifications */}
        </BrowserRouter>
      </ModalsProvider>
    </MantineProvider>
  </Provider>,
);
