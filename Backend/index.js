 const express = require('express')
 const cors = require('cors')
const app = express();
app.use(cors());



const PORT = process.env.PORT || 3000;
app.get('/api/getData',(req,res)=>{
     res.send("i am from server")
})
app.listen(PORT,()=>{
    console.log(`app is running on port ${PORT}`);
})