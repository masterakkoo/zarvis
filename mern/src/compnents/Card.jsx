import React, { createContext, useContext, useState, useEffect } from 'react'
import "../css/card.css"
const iu = "https://stg-images.samsung.com/is/image/samsung/p6pim/in/2302/gallery/in-galaxy-s23-s918-sm-s918bzgcins-thumb-534863401";
import { useDipatchCart, useCart, product, setproduct } from "./Usacontextreducer"
import { json, useNavigate } from "react-router-dom";


function Card(p) {


    const navigate = useNavigate();

    let dispatch = useDipatchCart();
    let data = useCart();
    // let setprod = setproduct();
    const Cartadd = async () => {
        if (localStorage.getItem("authToken")) {
            
            console.log(data)

            const res = await fetch("http://localhost:4000/setcart", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    email: localStorage.getItem("email"), ...p, svarient: p.options[0].varient, sprice: p.options[0].price, model_name: p.name

                })
            })
            const json = await res.json()
            if (json.success) {
                console.log("data is posted")
            }
        }
        else {
            navigate("/login")
        }
    }
    const ppp = async () => {

        navigate("/product")
        localStorage.setItem('data1', JSON.stringify(p))


    }
    return (
        <>

            <div className='card ' >
                <div className='card-up abc' onClick={ppp} >
                    <img src={p.images[0]} />
                </div>
                <div className='card-down'>
                    <h2 className='abc' onClick={ppp}>
                        {p.name}
                    </h2>
                    <p className='abc' onClick={ppp}>price : ₹{p.options[0].price}</p>
                    {/* <p>discount : 30%</p> */}

                    <div className='varient abc' onClick={ppp}>
                        <p>{p.options[0].varient}</p>
                        <p>{p.options[1].varient}</p>
                    </div>
                    <div className={(p.cartbtn) ? 'card-btns' : 'card-nbtn'}>
                        {/* <button className='card-btn'>Buy</button> */}
                        <button className='card-btn' onClick={Cartadd}>Add to cart</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card;
