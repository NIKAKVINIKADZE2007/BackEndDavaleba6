//! task 1

// const fs = require('fs/promises');
// const path = require('path');

// async function main() {
//   let [, , filename] = process.argv;
//   const redData = await fs.readdir(__dirname);

//   let contains = `this folder dosent contain file named ${filename}`;

//   redData.forEach((el) => {
//     if (el.split('.')[0] === filename) {
//       contains = `this folder contains file named ${filename}`;
//     }
//   });

//   console.log(contains);
// }

// main();

//! task 2

// const http = require('http');
// const fs = require('fs/promises');
// async function main() {
//   const res = await fs.readFile('data.json', 'utf-8');
//   const data = await JSON.parse(res);
//   const server = http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'application/json');
//     res.write(JSON.stringify(data));
//     res.end();
//   });

//   server.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
//   });
// }

// main();

//! task 3

// const http = require('http');

// async function main() {
//   const server = http.createServer((req, res) => {
//     if (req.url == '/random') {
//       res.setHeader('Content-Type', 'text/html');
//       res.write(`${Math.floor(Math.random() * 100)}`);
//       res.end();
//     } else {
//       res.setHeader('Content-Type', 'text/html');
//       res.write('home Page');
//       res.end();
//     }
//   });

//   server.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
//   });
// }

// main();

//!task 4

// const http = require('http');

// async function main() {
//   const server = http.createServer((req, res) => {
//     if (req.url == '/html') {
//       res.setHeader('Content-Type', 'text/html');
//       res.write(`<table>es aris table</table>`);
//       res.end();
//     } else {
//       res.setHeader('Content-Type', 'text/html');
//       res.write('home Page');
//       res.end();
//     }
//   });

//   server.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
//   });
// }

// main();

//! task 5

// const http = require('http');

// async function main() {
//   const server = http.createServer((req, res) => {
//     if (req.url == '/current-time') {
//       res.setHeader('Content-Type', 'text/html');
//       let date = new Date().toISOString();
//       res.write(date);
//       res.end();
//     } else {
//       res.setHeader('Content-Type', 'text/html');
//       res.write('home Page');
//       res.end();
//     }
//   });

//   server.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
//   });
// }

// main();

//! task 6

const http = require('http');
const fs = require('fs/promises');

async function main() {
  const res = await fs.readFile('data.json', 'utf-8');
  const data = await JSON.parse(res);
  const server = http.createServer((req, res) => {
    if (req.url == '/api') {
      res.setHeader('Content-Type', 'application/json');
      res.write(JSON.stringify(data));
      res.end();
    } else {
      res.setHeader('Content-Type', 'text/html');
      res.write('home Page');
      res.end();
    }
  });

  server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
}

main();
