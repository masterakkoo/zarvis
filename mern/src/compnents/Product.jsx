import React, { useState, useEffect, useContext } from 'react'
import "../css/product.css"
import Slider1 from "../compnents/Slider1"
import { product, setproduct, add, setadd } from "./Usacontextreducer"
import Card from './Card';
import { json, useNavigate } from "react-router-dom";
function Product(props) {

    window.scrollTo(0, 0);
    let setaddress = setadd();
    let setpro = setproduct();
    const navigate = useNavigate();
    const add1 = add()

    const data = JSON.parse(localStorage.getItem("data1"))
    const [foot, setfoot] = useState(data.options[0].price);
    localStorage.setItem("foot", foot);
    let r = {};
    const f = "dvdfvbdf ";
    console.log(data)

    const i1 = props.images[0];
    const i2 = props.images[1];
    const i3 = props.images[2];
    const B = async () => {
        console.log(f);;
        if (localStorage.getItem("authToken")) {
            const res = await fetch("http://localhost:4000/getaddress", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    email: localStorage.getItem("email")
                })
            })
            r = await res.json()
            console.log(r)
            console.log(r.Res[0].address)

        }
        else {
            navigate("/login")
        }

        setaddress({ address: r.Res[0].address, state: r.Res[0].state, city: r.Res[0].city, no: r.Res[0].mobile_no, ano: r.Res[0].alternate_no })
    }

    const BUY = async () => {

        const data = JSON.parse(localStorage.getItem("data1"));


        if (add1.address !== "") {


            navigate("/soaddress")
        }



    }
    useEffect(() => {
        B();
    }, []);
    return (
        <>

            <section className='product'>
                <div className='pro-intro'>
                    <div className='pro-abt'>
                        <h1>{data.company} | {data.name}</h1>
                        <p>Model : {data.name}</p>
                        <p>Brand: {data.company}</p>

                        <div className='varient'>
                            <div className='sub-varient' onClick={() => setfoot(data.options[0].price)}>
                                <p> {data.options[0].varient}</p>
                                <p>₹{data.options[0].price}</p>

                            </div>
                            <div className='sub-varient' onClick={() => setfoot(data.options[1].price)}>

                                <p>{data.options[1].varient}</p>
                                <p>₹{data.options[1].price}</p>


                            </div>

                        </div>
                        {(data.availibilty == true) ? <p style={{ fontSize: "2rem", color: "brown", marginTop: "10px" }}>Only few in stock! order fast</p> : <p style={{ fontSize: "2rem", color: "brown", marginTop: "10px" }} >currently out of stocks</p>

                        }
                    </div>

                    <div className='pro-img'>
                        <Slider1
                            images={data.images}
                        />
                    </div>
                </div>
                <div className='pro-details'>
                    <h1>Details</h1>
                    <p> {data.discription
                    }</p>
                </div>
                <div className='pro-bimg'>
                    <img src={data.images[3]} />
                    <img src={data.images[4]} />
                </div>

            </section>
            <div className='pro-fix'>
                <div className='pro-fix-left' style={{ fontSize: "1.3rem" }}><strike>₹{foot} &nbsp;&nbsp;</strike>&nbsp;&nbsp; {data.discount}% off <span>&nbsp;&nbsp;</span> ₹{((100 - data.discount) / 100) * foot}</div>
                <div className='pro-fix-right'>
                    <button onClick={BUY}>BUY</button>
                </div>
            </div>

        </>
    )
}

export default Product