
import React from 'react';

import './index.css';
import App from './App';


import { ChakraProvider } from '@chakra-ui/react'
import { createRoot } from 'react-dom/client';import './index.css';



const container = document.getElementById('root');

const root = createRoot(container);




root.render(
    
    <ChakraProvider>
    <App />
    </ChakraProvider>
    
    
  
);

