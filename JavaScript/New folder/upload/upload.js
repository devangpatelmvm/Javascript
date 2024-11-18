const express = require('express')
const app = express()
const fs = require('fs');
const bodyParser = require('body-parser')
const zip = require('express-zip');
const folderPath = __dirname+'/uploadData';
const port = 3001

app.use(bodyParser.json())

app.post("/objectUpload", (req, res) => {

  fs.writeFile('uploadData/file.json', JSON.stringify(req.body), function (err) {
       if (err) throw err;
        res.json('Your File Uploaded')
    });
})

app.get("/dowload", (req, res) => {
  // res.download("uploadData/file.json");
  
  res.zip([
		{ path: 'uploadData/file.json',
			name: 'file.json'},
      { path: 'uploadData/file1.json',
			name: 'file1.json'},
	])
});

app.get('/', function(req, res){
  res.sendFile(__dirname+'/index.html');
})

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
