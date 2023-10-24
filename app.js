const express = require("express");
const app = express();
const port = 3060;
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json()); // Replaced body-parser with express.json()

const user = [];

app.post('/adduser', (req, res) => {
  try {
    const { name, mail, phone } = req.body;
    user.push({ name, mail, phone });
    res.send("Sended");
  } catch (error) {
    res.status(400).send("Invalid data"); // Handle parsing or other errors
  }
});

app.get('/getuser', (req, res) => {
  res.send(user);
});

app.delete('/deleteuser/:index', (req, res) => {
    const index = req.params.index

user.splice(index,1)
res.send("Deleted")    
})


app.put('/updateuser/:index',(req,res)=>{
const index = req.params.index
const { name, mail, phone } = req.body;
user[index] = { name, mail, phone };
res.send("User updated successfully");
})




app.listen(port, () => {
  console.log(`App is running on , ${port}`);
});
