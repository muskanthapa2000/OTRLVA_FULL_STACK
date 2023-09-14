
const {DataModel} = require("./models/data.model")
const {connection} = require("./config/db")
const{UserModel} = require("./models/user.model")

const cors = require("cors");

const express = require("express");
const app = express();
var jwt = require('jsonwebtoken');

app.use(express.json())
app.use(cors({
    origin :"*"
}))

    app.get("/" , (req , res)=>{
        res.send("home page")
    })



    app.get("/data" , async(req , res)=>{
        const data = await DataModel.find();
        res.send(data);
    })



    app.post("/data/add" , async(req , res)=>{
        const {Country,name,url,description,cost,title,heading,urls,url1,url2,url3,url4,guestDetail,description1} = req.body;

        const data = await DataModel.create({Country,name,url,description,cost,title,heading,urls,url1,url2,url3,url4,guestDetail,description1})
        res.send(data);
    })


// http://localhost:8080/data/search?search=thailand search
// http://localhost:8080/data/search?_sort=cost&_order=asc  sort
// http://localhost:8080/data/search?page=1&pageSize=9  pagination

app.get("/data/search", async (req, res) => {
    const { search, _sort, _order } = req.query;
    const query = {};
  
    if (search) {
      // Adjust this line to match the field you want to search for
      query.Country = { $regex: search, $options: "i" };
    }
  
    let sortObject = {};
    if (_sort) {
      sortObject[_sort] = _order === "desc" ? -1 : 1;
    }
  
    try {
      const data = await DataModel.find(query).sort(sortObject);
      res.send(data);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });
  

        app.post("/signup" , async(req , res)=>{
            const {email ,first_name, second_name,contact,password} = req.body;
            const data = await UserModel.create({email ,first_name, second_name,contact,password});
            res.send(data);

        })

        app.post("/login" , async(req , res)=>{
            const {email , password} = req.body;
            const isUser = await UserModel.findOne({email , password})
            if (isUser)
            {
                var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
                res.send({msg : "Login Successfully" , token : token})
            }
        })



app.listen(8080, async () => {
    try{
        await connection
        console.log("connected to db successfully")
       }
    catch(err){
        console.log("error while connecting to DB")
        console.log(err)
        }
    console.log("listening on port 8080")
})