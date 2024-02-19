import cors from "cors"
import express from "express"
import mysql from "mysql"

const app=express()

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"dbtravel_258"

})

app.use(express.json())
app.use(cors())



app.get("/",(req,res)=>{
    res.json("Hello this is backend")
})

app.get("/putovanja",(req,res)=>{
    const q="SELECT * FROM putovanja"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/putovanja",(req,res)=>{
    const q="INSERT INTO putovanja (`title`, `desc`, `price`, `cover`) VALUES (?)"
    const values=[
        req.body.title,
        req.body.desc,
        req.body.price,
        req.body.cover,
    ]

    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("Putovanje je uspjesno kreirano")
    })
})

app.delete("/putovanja/:id",(req,res)=>{
    const putovanjeId=req.params.id
    const q="DELETE FROM putovanja WHERE id = ?"

    db.query(q,putovanjeId,(err,data)=>{
        if(err) return res.json(err)
        return res.json("Putovanje je uspjesno izbrisano")
    })
})

app.put("/putovanja/:id",(req,res)=>{
    const putovanjeId=req.params.id
    const q="UPDATE putovanja SET `title`=?,`desc`=?,`price`=?,`cover`=? WHERE id=?"

    const values=[
        req.body.title,
        req.body.desc,
        req.body.price,
        req.body.cover,
    ]

    db.query(q,[...values,putovanjeId],(err,data)=>{
        if(err) return res.json(err)
        return res.json("Putovanje je uspjesno azurirano")
    })
})

app.listen(8800, ()=>{
    console.log("Connected to backend!")
})