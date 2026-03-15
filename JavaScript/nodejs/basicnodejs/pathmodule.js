const path=require('path');

const filepath=path.join(__dirname,'files','example.txt');
console.log(__dirname)
console.log(filepath)
console.log(path.extname('example.txt'))
console.log(path.basename(filepath))
