const path = require("path");
console.log(path.basename('C:\\temp\\myfile.html'))
// Returns: 'myfile.html'
console.log(path.extname('index.html')) 
console.log(path.dirname('/folo/dbcr/dnfdz/asdffbn/qdkgrx'))
console.log(path.normalize('D:/Study material/..//Notes and lab manual///sem-3/WT lab/DU lab/lab17'));
console.log(path.join('/folo', 'Study', 'asdffbn/asdf', 'manual','sem','dnfdz', '..'));
console.log(path.relative('C://orandea//test//aaa', 'C://orandea//imp//bbb'))

console.log(path.isAbsolute('//server'))    // true
path.isAbsolute('\\\\server')  // true
path.isAbsolute('C:/foo/..')   // true
path.isAbsolute('C:\\foo\\..') // true)


const child_process = require("child_process");
const child_process = require('child_process')

child_process.exec('node -v', (err, stdout) => {
    if(err){
        console.log(err)
    }
    else{
        console.log(stdout)
    }
});
// fs modules

const fs = require('fs');

const ans = fs.exists('D:\Engineering-Programs\Sem-3\Web Technology\Lab 17',(err)=>{
    if(err){"file not found"}
    console.log('found');
 });

const wr = fs.writeFile('xyz.txt', 'Hello World', (err,data)=>{
    console.log("File Written");
})

const re = fs.readFile('D:\Engineering-Programs\Sem-3\Web Technology\Lab 17',(err)=>{
    if(err){"file not exists"}
    console.log()
})

const rename = fs.rename('xyz.txt','abc,txt',(err)=>{
    if(err){throw err}
    console.log("remaned")
})

const del = fs.unlink('abc.txt',(err)=>{
    if(err){throw err}
    console.log("file was deleted")
})


// child_process.exec