const fs = require('fs');
const http = require('http')

const content = 'Welcome to my page new message!';

// Creating file

fs.writeFile('test.txt', content, err => {
	if (err) {
		console.error(err);
		return;
	}
	//file written successfully
	console.log('File created successfully.');
});

// Deleting File

fs.unlink('wrongFile.txt', err => {
	if (err) {
		console.error(err);
		return;
	}
	//file deleted successfully
	console.log('File deleted successfully.');
});

// Renaming file

fs.rename('test.txt','rightFile.txt',err => {
  if (err){
console.error(err);
return;
  }
  // file renamed successfully 
  console.log('File renamed successfully');
});

// Create server for reading content and displaying file content
// Display of html

/* http.createServer((req,res)=>{
  fs.readFile('test.html',(err,data)=>{
    	if (err) {
		console.error(err);
		return;
	}
	res.writeHead(200, {"Content-Type":"text/html"});
	res.write (data);
	res.end();
  })
}).listen(4000) */

// Reading and display of plain text using server
http.createServer((req,res)=>{
  fs.readFile('test1.txt',(err,data)=>{
    	if (err) {
		console.error(err);
		return;
	}
	res.writeHead(200, {"Content-Type":"text/plain"});
	res.write (data);
	res.end();
  })
}).listen(4000)