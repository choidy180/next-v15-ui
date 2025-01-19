'use client';

import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
`;

const theme = {
    colors: {
        primary: '#0070f3',
    },
};

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    );
}