// import jQuery from 'jquery';
// window.jQuery = jQuery
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'


// Require the sockets.js file if you want to be able to use the socket client to
// do things like `io.socket.get()` inside of this script.
let io = require('../dependencies/sails.io.js');


// To make the socket client available globally, uncomment the next line:
window.io = io;

