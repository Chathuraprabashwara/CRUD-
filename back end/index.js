const express=require('express')
const app=express()
const mysql=require('mysql')
const bodyParser=require('body-parser')
const cors=require('cors')

const db=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'root',
    database:'project'
})
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use(express.json())

app.get("/api/dte",(req,res)=>{
    const from=req.query.from
    const to=req.query.to
    console.log(from,to)
    const que15=`select * from invoice_head where invoice_head_date>="${from}" && invoice_head_date<"${to}"`

    db.query(que15,(err,resu)=>{
        res.send(resu)
    })
})

app.post("/api/pat",(req,res)=>{
    const id=req.body.id
    const name=req.body.name
    const price=req.body.price
    const qty=req.body.qty

    console.log(id,name,price,qty)

  const que1=`UPDATE products set products_name=?,products_prise=?,products_qty=? where products_id=?`
    db.query(que1,[name,price,qty,id],(err,resu)=>{
        console.log(id)
        console.log(resu)
    })


})




app.get("/maximum",(req,res)=>{
    const que2="select max(invoice_head_id) AS big from invoice_head "
    db.query(que2,(err,resu)=>{
        res.send(resu)
    })
})
app.post('/adds',(req,res)=>{

   
    const invId=req.body.invId
    const date=req.body.date
    const amount=req.body.amount
    const customer=req.body.customer
    const qty=req.body.qty
    const itemId=req.body.itemId
    console.log(invId,date,amount,customer,qty,itemId)

    

    const que11=`insert into invoice_details(invoice_details_qty,invoice_details_amount,invoice_head_invoice_head_id,products_products_id) values(?,?,?,?)`

        db.query(que11,[qty,amount,invId,itemId],(err,resu)=>{
            res.send(resu)
        })
   

   

})

app.post('/add',(req,res)=>{

   
    const invId=req.body.invId
    const date=req.body.date
    const amount=req.body.amount
    const customer=req.body.customer
    const qty=req.body.qty
    const itemId=req.body.itemId
    console.log(invId,date,amount,customer,qty,itemId)

    const que10=`insert into invoice_head values(?,?,?,?)`

   

    db.query(que10,[invId,date,amount,customer],(err,resu)=>{
        res.send(resu)
    })

    
    
   

   

})



app.get("/pro",(req,res)=>{
   const id=req.query.id
    const que3=`select products_prise from products where products_id=${id}`
    db.query(que3,(err,resu)=>{
        res.send(resu)
    })
})



app.post("/api/insertproj",(req,res)=>{




    const id=req.body.id
    const name=req.body.name
    const price=req.body.price
    const qty=req.body.qty

   const que1="INSERT INTO products VALUES(?,?,?,?)"
    db.query(que1,[id,name,price,qty],(err,resu)=>{
        console.log(id)
        console.log(resu)
    })
        console.log("Mahela")

})

app.listen(3001,()=>{
    console.log("runing on 3001")
})

