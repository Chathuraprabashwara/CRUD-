import React, { useState } from 'react'
import {useFormik} from 'formik'
import { v4 as uuidv4 } from 'uuid'
import Nav from './Nav';
import Button from '@material-ui/core/Button';
import "./style.css";

function Product(){
    const Axios=require('axios')
    const [message,setMessage]=useState('');

    const [aa,setAA]=useState('');
    const [bb,setBB]=useState('');
    const [cc,setCC]=useState('');
    const [dd,setDD]=useState('');

    const[ok,setOk]=useState('')


const f1=(event)=>{
    event.preventDefault();

    Axios.post('http://localhost:3001/api/insertproj',{id:aa,name:bb,price:cc,qty:dd}).then((resu)=>{
        console.log(resu)
        
    }).catch((e)=>{
        console.log(e)
        
    })
    setOk("Added")
    setTimeout(()=>{
        setOk("")
    },400)

}

const f2=(event)=>{
    event.preventDefault();
    Axios.post('http://localhost:3001/api/pat',{id:aa,name:bb,price:cc,qty:dd}).then((resu)=>{
        console.log(resu)
        
    }).catch((e)=>{
        console.log(e)
       
    })
    setOk("Updated")
    setTimeout(()=>{
        setOk("")
    },400)
}

const f3=(event)=>{
    event.preventDefault();
    setAA('');
    setBB('')
    setCC('')
    setDD('')

}

const aaa=()=>{

}

    return(
       <div className="container  con2 ">
           <Nav></Nav>
           <br></br><br></br><br></br>
           <center> <h3>Products</h3></center>  
           <form  action="#">  
             <div className="form-group">  
             <label for="exampleInputEmail1">Product ID</label>  
             <input type="text" value={aa}  onChange={(e)=>setAA(e.target.value)} name="productId"  className="form-control"  />  
            </div>  

           <div className="form-group mt-4">  
            <label for="exampleInputPassword1">Product Name</label>  
            <input type="text" value={bb}  onChange={(e)=>setBB(e.target.value)} name="productName"  className="form-control"  />  
           </div>  
           <div className="form-group mt-4">  
            <label for="exampleInputPassword1">Price</label>  
            <input type="text" value={cc}  onChange={(e)=>setCC(e.target.value)} name="prise"className="form-control" />  
           </div>  
           <div className="form-group mt-4">  
             <label for="exampleInputPassword1">Qty</label>  
             <input type="text" value={dd}  onChange={(e)=>setDD(e.target.value)} name="Qty"className="form-control"  />  
           </div>  

            <Button variant="contained" color="primary" style={{ display: "inline", width: "10%", margin: "10px" }} onClick={f1} type="submit" >Save</Button>  
            <Button variant="contained" color="primary" style={{ display: "inline", width: "10%", margin: "10px" }} onClick={f2} >Update</Button>
            <Button variant="contained" color="secondary" style={{ display: "inline", width: "10%", margin: "10px" }}onClick={f3} >Clear</Button>
          </form> 
          
          
           
           <p>{ok}</p>
       </div>
    )
}
export default Product