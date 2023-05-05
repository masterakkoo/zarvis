import React, { useEffect } from 'react'
import "../css/showaddress.css"
import { product, setproduct, add, setadd } from "./Usacontextreducer"
import { json, useNavigate } from "react-router-dom";
import Footer from './Footer';
function Showaddress() {
    const data = JSON.parse(localStorage.getItem("data1"))
    const addres = add();
    let setaddress = setadd();
    // console.log(address);
    window.scrollTo(0, 0);
    const navigate = useNavigate();

    const Order = async () => {
        const res = await fetch("http://localhost:4000/order", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                email: localStorage.getItem("email"), name: data.name, model_id: data.id, model_name: data.name, price: localStorage.getItem("foot"), image: data.images[0]
            })

        })
        const r = await res.json()
        if (r.success == true) {
            navigate("/orderplaced")
        }
    }
    const B = async () => {
        const res = await fetch("http://localhost:4000/getaddress", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                email: localStorage.getItem("email")
            })
        })
        const r = await res.json()
        console.log(r)
        console.log(r.Res[0].address)
        setaddress({ address: r.Res[0].address, state: r.Res[0].state, city: r.Res[0].city, no: r.Res[0].mobile_no, ano: r.Res[0].alternate_no })
    }
    useEffect(() => {
        B();
    }, []);
    return (
        <>
            <div className='add'>
                <div className='sadd'>
                    <p>{`${addres.address}  ${addres.city} ${addres.state} `}</p>
                    <p>Mobile No. : {addres.no}</p>
                    <p>Alternate Mobile No. : {addres.ano}</p>
                    <div>
                        <button onClick={Order}>Place Order</button>
                        <button onClick={() => navigate("/address")}>Change Addres</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Showaddress