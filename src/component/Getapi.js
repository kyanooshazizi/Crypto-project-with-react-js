import React, { useEffect, useState } from 'react';
import axios from "axios";
import Crypto from "./Crypto";
import styles from "./Crypto.module.scss";
import Search1 from "./Search.gif";

const Get_Api = (props) => {
    const[api,setApi]=useState([]);
    const[datainput,setDatainput]=useState("");
useEffect(()=>{
axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").then(res=>setApi(res.data))
},[ ])

const inputHandler=(e)=>{
    setDatainput(
        e.target.value
    )
    }
const newdata=api.filter(x => x.name.toLowerCase().includes(datainput.toLowerCase())) 
console.log(newdata)

    return (
        <div>
            <input type="text" value={datainput} onChange={inputHandler} className={styles.Search} 
            placeholder="Search..."/>
            <div className={styles.Header}>
               <h3>Coin</h3>
               <h3>Price</h3>
               <h3>24h</h3>
               <h3>Total Volume</h3>
               <h3>Mkt Cap</h3>

            </div>
            {newdata.length ? newdata.map(data=><Crypto key={data.id} value={data}/>):
            <img src={Search1} className={styles.loading}/>
            }
        </div>
    );
};

export default Get_Api;