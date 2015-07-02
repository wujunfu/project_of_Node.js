console.log("iew%s%s", 'sfew', 'weifwi');
process.stdin.resume();
process.stdin.on('data', function(data){
    process.stdout.write('read from console: ' + data.toString());
});
