
function slug(...args){
    return args.join(' ').split(' ').join('--');
}

module.exports = {slug}