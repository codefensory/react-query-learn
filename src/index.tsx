import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider } from '@tanstack/react-router';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { router } from './router';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import axios from 'axios';
import { API_URL } from './config';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Hack to snowpack:)
window.React = React;

axios.defaults.baseURL = API_URL;

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={true} />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
