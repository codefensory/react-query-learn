import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider } from '@tanstack/react-router';

import { router } from './router';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';

// Hack to snowpack:)
window.React = React;

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
