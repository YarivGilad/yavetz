const {slug} = require('./index');
const log = require('@ajar/marker');


const result = slug('this is a great day','is it really?');

log.v('result: ',result)

