const express = require('express');
const app = express();
const data = require('./data.json');
app.use(express.json());
let users = [];
app.get('/data', (req, res) => {
    res.json(data);
});
// app.post('/data',(req, res) => {
//     res.json(data);
// });
app.get('/data/:id', (req, res) => {
    let val = data.find(u => u.id === parseInt(req.params.id));
    if (!val)
        return res.status(404).send('not present');
    res.json(val);
});
app.post('/data/:id', (req, res) => {
    const val = data.find(u => u.id === parseInt(req.params.id));
    if (val)
        return res.status(404).send('already exist');

    const newd = {
        id: parseInt(req.params.id),
        name: req.body.name
    };
    data.push(newd);
    res.json(newd);
});
app.put('/data/:id', (req, res) => {
    const val = data.find(u => u.id === parseInt(req.params.id));
    if (!val) {
        return res.status(404).send('Data not found');
    }
    val.name = req.body.name;
    res.json(val);
});
app.delete('/data/:id', (req, res) => {
    const val = data.find(u => u.id === parseInt(req.params.id));
    if (!val)
        return res.status(404).send('User Not Found');
    const index = data.indexOf(val);
    data.splice(index, 1);
    res.send(val);
});
app.listen(3000, () => console.log('Listening on port 3000'));
