console.log('nokturnalplague');

import { countdown } from './home/countdown.js';
import { menu } from './home/menu.js';
import { rsvp } from './rsvp.js';

menu();

if (document.getElementById('index')) {
  countdown()
}

if (document.getElementById('rsvp')) {
  rsvp()
}