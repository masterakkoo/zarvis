import React from 'react'
import "../css/cartcard.css"
import { json, useNavigate } from "react-router-dom";
function Cartcard(po) {
    const p = po.data;
    console.log(p);
    const navigate = useNavigate();
    const ppp = async () => {

        navigate("/product")
        localStorage.setItem('data1', JSON.stringify({ ...p, name: p.model_name }))


    }
    const Remove = async () => {
        try {
            const res = await fetch("http://localhost:4000/removecart",
                {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({ id: p._id })
                }
            );
            const ans = await res.json()

        }
        catch (err) { console.log(err) }
        location.reload();
    }
    return (

        <>

            <div className='cart-card ' >
                <div className='cart-card-up abc' onClick={ppp} >
                    <img src={p.images[0]} />
                </div>
                <div className='cart-card-down'>
                    <h2 className='abc' onClick={ppp}>
                        {p.model_name}
                    </h2>
                    <p className='abc' onClick={ppp}>price : ₹{p.options[0].price}</p>

                    <div className='varient abc' onClick={ppp}>
                        <p>{p.options[0].varient}</p>
                    </div>
                    <div className='cart-card-btns'>
                        <button className='cart-card-btn' onClick={Remove} >Remove from cart</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cartcard