require('../only_locally');
require('shelljs/global');

var config = require('../../config');
var uid = '2302164';

var options = require('minimist')(process.argv.slice(2));
var webhook = 'python scripts/webhook/dropbox_hook.py notify http://blot.development/webhook --secret ' + config.dropbox.secret + ' --user ' + uid;

if (options.c) {

  var interval = parseFloat(options.c) || 5;

  console.log('Calling webhook every ' + interval + ' seconds...');

  exec(webhook);

  setInterval(function () {

    exec(webhook);

  }, interval * 1000);

} else if (options.s) {

  swarm();

} else {

  exec(webhook);

}


function swarm () {

  var count = Math.round(Math.random()*2) + 2;

  console.log("Herd of", count, 'webhooks');

  while (count > 0) {
    exec(webhook);
    count--;
  }

  var delay = Math.floor(Math.random() * 3000);

  if (options.o === undefined)
    setTimeout(swarm, delay);
}
