// PAKE JS

// const http = require('http');
// const fs = require('fs');
// const port = 8000;

// http.createServer((req, res) => {
//       switch (req.url) {
//         case "/":
//           req.url = "index.html";
//           break;
//         case "/cars":
//           req.url = "searchcar.html";
//           break;
//       }
//       let path = "public/" + req.url;
//       fs.readFile(path, (err, data) => {
//         res.writeHead(200);
//         res.end(data);
//       });
// })
// .listen(port,'localhost', () => {
//   console.log("Server sudah berjalan di: http://localhost:%d", port);
// });



const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 8000;

const myAppDir = path.join(__dirname, '../');
app.use(express.static(path.join(myAppDir, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(myAppDir, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(myAppDir, 'public', 'searchcar.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
