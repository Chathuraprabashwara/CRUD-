import React, { useState } from 'react'
import Nav from './Nav';
import Button from '@material-ui/core/Button';
import "./style.css";
function Reports(){
  const Axios=require('axios')
const [from,setFrom]=useState('')
const [to,setTo]=useState('')
const [list,setList]=useState([])

const f1=()=>{
  Axios.get(`http://localhost:3001/api/dte?from=${from}&&to=${to}`).then((resp)=>{
    setList(resp.data)

  })

}

    return(
   

    
    <div className="container con3">
      <Nav></Nav>
      <br></br><br></br><br></br>
        <span className="row mt-4 colnew">
            <span className="col  ">
            <label>Date from -</label>
            <input value={from} onChange={(e)=>setFrom(e.target.value)} type="date" width="20px"></input>
            </span>

            <span className="col mr-4 ">
            <label >Date to -</label>
            <input value={to} onChange={(e)=>setTo(e.target.value)} type="date" width="20px"></input>
            </span>
            
        </span>
        <center>
        <Button onClick={f1} variant="contained" color="primary" style={{ display: "inline", width: "10%", margin: "10px" }}>Search</Button>

        </center>



        
        <table className="table mt-5">
  <thead>
    <tr>
      <th scope="col">Invoice No</th>
      <th scope="col">Date</th>
      <th scope="col">Amount</th>
      <th scope="col">Customer</th>
    </tr>
  </thead>
  <tbody>
  {list.map((v)=>{
  return (
    <tr>
      <th scope="row">{v.invoice_head_id}</th>
      <td>{v.invoice_head_date}</td>
      <td>{v.invoice_head_amount}</td>
      <td>{v.invoice_head_customer}</td>
    </tr>

  )
})}


   
    
  </tbody>
</table>


        </div>
        
        )
        

}

export default Reports;