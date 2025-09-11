console.log('nokturnalplague');

import { menu } from './home/menu.js';
import { countdown } from './home/countdown.js';
import { rsvp } from './rsvp/rsvp.js';
import { music } from './music/music.js'

menu()

if (document.getElementById('index')) {
  countdown()
  music()
}

if (document.getElementById('rsvp')) {
  rsvp()
}