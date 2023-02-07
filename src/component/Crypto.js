import React from 'react';
import styles from "./Crypto.module.scss";

const Crypto = (props) => {
    const {name,current_price,price_change_percentage_24h,image,market_cap,total_volume,symbol}=props.value;
    return (
        <div className={styles.wrapper_cart}>
            <img src={image} alt={name}/>
            <span>{symbol.toUpperCase()}</span>  
            <span>${current_price.toLocaleString()}</span>
            <span className={price_change_percentage_24h>0?styles.Cgreen:styles.Cred}>{price_change_percentage_24h.toFixed(3)}%</span>
            <span>${total_volume.toLocaleString()}</span>
            <span>${market_cap.toLocaleString()}</span>
        </div>
    );

};

export default Crypto;