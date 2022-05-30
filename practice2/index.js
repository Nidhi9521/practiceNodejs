var util = require('util');
var txt = 'Congratulate %s on his %dth birthday!';
var result = util.format(txt, 'Linus', 6); 

console.log(util.log('Hello'));

console.log(util.deprecate(()=>{
    console.log('d function')
},'Hello deprecate'));

console.log(util.inspect('Hello inspect check',false,5,true));

console.log(result);