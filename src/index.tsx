import * as React from 'react';
import { render } from 'react-dom';
//import App from './components/TestComponent';
import '../UIKit/css/uikit.min.css';
import '../fonts/font.css';
import '../fonts/font2.css';
import '../fonts/font3.css';

import '../UIKit/js/uikit.min.js';
import '../polyfill.js';

import App from './components/Init';

const rootEl = document.getElementById('root');

render(<App />, rootEl);
