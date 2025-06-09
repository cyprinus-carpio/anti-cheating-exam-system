import React from 'react';
import { createRoot } from 'react-dom/client';
import { FluentProvider, webDarkTheme } from '@fluentui/react-components';
import { App } from './App';
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
    <FluentProvider
        theme={webDarkTheme}
        className="fluent-provider-container"
    >
        <App />
    </FluentProvider>
);