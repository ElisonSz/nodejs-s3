import express from "express";
import fileUpload from "express-fileupload";
import { getFiles, uploadFile, getFile,getFileURL } from "./s3.js";
const app = express();

app.use(fileUpload());

app.get('/files', async (req,res)=>{
    const result = await getFiles();
    res.send(result.Contents);
});

app.get('/files/:filename', async (req,res)=>{
    console.log(req.params.filename)
    const result = await getFileURL(req.params.filename);
   
    res.json({
        url:result
    });
});

app.post('/files', async (req,res)=>{
    const result = await uploadFile(req.files.file);
    res.send(result);
    })

app.listen(3000);
console.log('Server On Port 3000');