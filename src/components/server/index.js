const express = require('express');
const app = express();
const madLibCtrl = require('./controllers/madLibController')

app.use(express.json());

// * ENDPOINTS *
const baseURL = '/api/madLibs'
// Get
app.get(baseURL, madLibCtrl.getMadLibs);
app.get(baseURL + `/:id`, madLibCtrl.getMadLib)
app.get(baseURL + `Finished`, madLibCtrl.getFinishedMadLibs)
// Delete
app.delete(baseURL + `/:id`, madLibCtrl.deleteMadLib)
app.delete(baseURL + `Finished/:id`, madLibCtrl.deleteFinishedMadLib)
// Post
app.post(baseURL + `Finished`, madLibCtrl.addFinishedMadLib)
// Put
app.put(baseURL + `Finished/:id`, madLibCtrl.editFinishedMadLib)

// * LISTENING TO PORT *
const PORT = 3005;
app.listen(PORT,()=>console.log(`Server listening to port ${PORT}`) )