const express = require('express')
const router = express.Router();



router.get("/",(req,res)=>{
    sql = "SELECT * from tbl_employes"
      con.query(sql,(err,select)=>{
          if(err) throw err 
          res.render('index',{select})
      })
  })

  router.get("/insertEmploye",(req,res)=>{
    res.render('addemp')
  })
  
  router.get("/updateEmploye",(req,res)=>{
      id =  req.query.id
    sql = `SELECT * from tbl_employes where id=${id} `
    con.query(sql,(err,select)=>{
        if(err) throw err 
        res.render('editemp',{select})
    })
  
  })
  
  router.get("/viewEmploye",(req,res)=>{
    res.render('editemp')
  })
  
  





module.exports = router