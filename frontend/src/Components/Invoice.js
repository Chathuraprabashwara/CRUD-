import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import moment from "moment";
import { red } from '@material-ui/core/colors';
import "./style.css";


function Invoics() {

  const Axios = require('axios')
  const [invId, setInvId] = useState('')//ok
  const [date, setDate] = useState('')//ok
  const [amount, setAmount] = useState('')
  const [customer, setCustomer] = useState('')

  const [qty, setQty] = useState('')
  const [itemId, setItemId] = useState('')

  const [prise, setPrise] = useState('')

  const [eff, setEff] = useState(true)
  const [ok, setOk] = useState('')

  useEffect(() => {
    const today = new Date()
    const dates = moment().format('MMMM Do YYYY');
    setDate(dates)

    Axios.get('http://localhost:3001/maximum').then((resp) => {
      setInvId(resp.data[0].big + 1)
    })

    if (itemId) {
      Axios.get(`http://localhost:3001/pro?id=${itemId}`).then((resp) => {
        setPrise(resp.data[0].products_prise)
        setAmount(Number(prise) * Number(qty))

      })

    }

  }, [itemId, qty])

  const processes = (event) => {

    event.preventDefault();


    Axios.post(`http://localhost:3001/add`, { invId: invId, date: date, amount: amount, customer: customer, qty: qty, itemId: itemId }).then((resu) => {
      console.log(resu)
    }).catch((e) => {
      console.log("ERRRRR")
    })
    Axios.post(`http://localhost:3001/adds`, { invId: invId, date: date, amount: amount, customer: customer, qty: qty, itemId: itemId }).then((resu) => {
      console.log(resu)
    }).catch((e) => {
      console.log("ERRRRR")
    })



  }

  const f4 = (e) => {
    e.preventDefault();
    console.log("OK")
    setItemId('')
    setQty('')
    setCustomer('')
    setAmount('')

  }



  return (



    <div className="container con"  >


      <Nav></Nav> <br></br><br></br><br></br>

      <center><h3 className="text-black">Invoice</h3></center>

      <div className="fboader" >
        <span className="col-md ">
          <label className="text-black" >Date -</label> <label >{date}</label><br></br>
          <label className="mt-4 text-black">Invoice ID -</label><label>{invId}</label>
        </span>
        <span className="form-group col-md mb-2 ">
          <label className="mt-2">Customer:</label>
          <input className="inputs2" value={customer} type="text" onChange={(e) => setCustomer(e.target.value)} class="form-control" id="usr" />
        </span>
      </div>

      <div style={{ padding: "30px" }} >
        <div className="row text-black">
          <span className="col">Item ID</span>
          <span className="col ">Description</span>
          <span className="col">Qty</span>
          <span className="col">Price</span>
        </div>
        <div className="row text-black">
          <span className="col"><input className="inputs"value={itemId} onChange={(e) => setItemId(e.target.value)} type="text"></input></span>
          <span className="col"><input className="inputs" type="text"></input><label> </label></span>
          <span className="col"><input className="inputs" value={qty} onChange={(e) => setQty(e.target.value)} type="text"></input></span>
          <span className="col"><label><input className="inputs" value={prise} onChange={(e) => setQty(e.target.value)} type="text"></input></label></span>
        </div>

      </div>
      <table className="table mt-5 text-black">
        <thead>
          <tr>
            <th scope="col">item</th>
            <th scope="col">Descryption</th>
            <th scope="col">Qty</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row ">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>

        </tbody>
      </table>

      <div className="row">
        <span className="col text-black">
          <label>Total - </label>
          
          <label className="border-5 border-secondary">{amount}</label>
        </span>

        <Button onClick={processes} variant="contained" color="primary" style={{ width: "10%", margin: "10px" }} >
          Process
        </Button>

        <Button onClick={f4} variant="contained" color="secondary" style={{ display: "inline", width: "10%", margin: "10px" }}>Clear</Button>

      </div>
      {ok}<br></br>


    </div>


  )

}
export default Invoics

