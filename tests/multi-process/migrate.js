// var redis = require('redis').createClient();
// var execFile = require('child_process').execFile;
// var helper = require('helper');
// var forEach = helper.forEach;

// var totalChildren = 6;
// var jobSize = 50;

// function createChild (id) {

//   var child = execFile('node', [__dirname + '/fixurls.js', '-s', ((id * jobSize) - jobSize) + 1 + '', '-e', (id * jobSize)]);

//   child.stdout.on('data',function(data){
//     console.log(id, data);
//   });

//   child.on('error', function(err){
//     console.log(id, err);
//   });

//   child.on('exit', function(){
//     console.log(id, 'is complete!');
//   });

// }

// var cache = require('../app/cache');

// cache.flush(function(){

//   // this removes existing keys
//   clean('*', function(){

//     for (var i = 1;i<=totalChildren;i++)
//       createChild(i);

//   });
// });


// function clean (blogID, callback) {

//   console.log('Blog:', blogID, 'Cleaning');

//   var patterns = [
//     'blog:' + blogID + ':entries',
//     'blog:' + blogID + ':drafts',
//     'blog:' + blogID + ':path',
//     'blog:' + blogID + ':scheduled',
//     'blog:' + blogID + ':pages',
//     'blog:' + blogID + ':deleted',
//     'blog:' + blogID + ':public:*',
//     'blog:' + blogID + ':url:*',
//     'blog:' + blogID + ':tags:all',
//     'blog:' + blogID + ':next_entry_id',
//     'blog:' + blogID + ':tags:entries:*',
//     'blog:' + blogID + ':tags:entry:*',
//     'blog:' + blogID + ':search:*',
//     'blog:' + blogID + ':tags:name:*'
//   ];

//   var all_keys = [];

//   forEach.parallel(patterns, function(pattern, nextPattern){

//     redis.keys(pattern, function(err, keys){

//       if (err) throw err;

//       if (!keys.length) return nextPattern();

//       all_keys = all_keys.concat(keys);

//       nextPattern();
//     });

//   }, function(){

//     if (!all_keys.length) return callback();

//     redis.del(all_keys, function(err){

//       if (err) throw err;

//       callback();
//     });
//   });
// }


