import express from 'express';
import cors from 'cors';
import MailController from './controller/Mail.controller';

const app = express();
const PORT = 3333;

// for working with json
app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));

app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})

/**
 * You can just use from here
 */
 app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/_template.html');
});

app.post('/api/send-mail', (req, res)=>{
    let t = JSON.stringify(req.body);
})