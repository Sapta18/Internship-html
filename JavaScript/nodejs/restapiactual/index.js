const express=require('express');
const app=express();
require('dotENV').config()
const PORT=process.env.PORT;
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1>');
});
app.get('/About',(req,res)=>{
    res.send('<h1>About Page</h1>');
});

app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
})
