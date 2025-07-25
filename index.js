
import express from "express";

const app = express();

app.use(express.json());

app.get("/",(req,res) => {
        res.json({
            success:true,
            massage:"welcome to note_wave",
        })
});

app.post("/keepThings",(req,res) =>{
        const {title,content,time} = req.body;
        res.json({
            success:true,
            massage:"come into keepThings",
            title,
            content,
            time,
        })
});

app.get("/note",(req,res) => {
        res.json({
            success:true,
            massage:"namste to note_wave",
        })
});

app.listen(3000,()=>{
    console.log("server is running on port 3000")
});