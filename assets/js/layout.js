import jQuery from 'jquery';

// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'

import '../styles/css/vendor.css'
import '../styles/layout.css'

import vendor from './lib/vendor'
import main from './lib/main'



// Require the sockets.js file if you want to be able to use the socket client to
// do things like `io.socket.get()` inside of this script.
import io from '../dependencies/sails.io.js';



// To make the socket client available globally, uncomment the next line:
window.io = io;
window.Swiper = vendor
window.$ = jQuery
