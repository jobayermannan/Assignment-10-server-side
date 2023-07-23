const express = require('express')
const app = express()
var cors = require('cors')
const port =process.env.PORT || 5000;



const lists = require('./data/lists.json')
const chefs = require('./data/chef.json')




app.use(cors());


app.get('/lists', (req, res) =>{
  res.send(lists)
})
app.get('/chefs', (req, res) =>{
  res.send(chefs)
})
app.get('/chefs/:id', (req, res) =>{
  const id = req.params.id;
   const selectedChef =chefs.find(c => c._id === id);
   res.send(selectedChef);
})
app.get('/lists/:id', (req, res) =>{
  const id =parseInt(req.params.id) ;
 
   if (id === 0){
    res.send (chefs)
   }else {
    const selectedList =chefs.filter(c => parseInt(c.listId) === (id));
    res.send(selectedList);
   }
  

})








app.get('/', (req, res) => {
  res.send('Chef server is running ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
