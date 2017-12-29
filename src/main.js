import React from 'react';
import ReactDom from 'react-dom';

import '../scss/main.scss';

import MainLayout from './Components/MainLayout';

const app = document.getElementById('app');

ReactDom.render(<MainLayout/>, app);
