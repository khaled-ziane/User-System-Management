const express = require('express')
const router = express.Router();



  router.post("/insert",(req,res)=>{
    console.log(req.body)
    const name = req.body.txtname
    const email = req.body.txtemail
    const phone = req.body.txtphone
 
   sql =`INSERT into tbl_employes (name,email,phone) VALUES ('${name}','${email}','${phone}')`
   con.query(sql,(err,insert)=>{
       if (err) throw err
       res.redirect('/')
   }) 
  })
  
  router.post("/update/:id",(req,res)=>{
    id = req.params.id
    console.log(id)
    const name = req.body.txtname
    const email = req.body.txtemail
    const phone = req.body.txtphone
    console.log(name,email,phone)
   sql =`UPDATE  tbl_employes set name='${name}' , email='${email}' ,   phone='${phone}' where id=${id} `
   con.query(sql,(err,update)=>{
       if (err) throw err
       res.redirect('/')
   }) 
  })
  
  router.get("/delete/:id",(req,res)=>{
    id = req.params.id
    console.log(id)
   sql =`DELETE from  tbl_employes  where id=${id} `
   con.query(sql,(err,delet)=>{
       if (err) throw err
       res.redirect('/')
   }) 
  })

  module.exports = router