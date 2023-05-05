import React, { useState, useEffect } from 'react'
import "../css/cart.css"
import Card from './Card'
import Cartcard from './Cartcard'
function Cart() {
    const [items, setitems] = useState([])
    const cart = async () => {
        try {
            const res = await fetch("http://localhost:4000/getcart",
                {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({ email: localStorage.getItem("email") })
                }
            );
            const ans = await res.json()
            setitems(ans.cartitem)
            console.log(ans.cartitem)
        }
        catch (err) { console.log(err) }

    }
    // cart();
    useEffect(() => {
        cart();
    }, [])
    return (
        <>
            <div className='cart-container'>
                <div className='cart-left-view'>
                    <h3>Smartphones</h3>
                    <li>Samsung</li>
                    <li>iphone</li>
                    <li>Oneplus</li>
                    <li>Realme</li>
                    <h3>Smartwatches</h3>
                    <li>Samsung</li>
                    <li>iphone</li>
                    <li>Oneplus</li>
                    <li>Realme</li>
                    <h3>headphones</h3>
                    <li>Samsung</li>
                    <li>iphone</li>
                    <li>Oneplus</li>
                    <li>Realme</li>
                </div>
                <div className='cart-right-view'>
                    <h1>Cart Items</h1>
                    <div className='cart-item'>
                        {
                            (items != []) ? items.map((val) => {
                                return (
                                    <Cartcard
                                        data={val}
                                    />
                                );
                            }) : <p>asdf</p>

                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart