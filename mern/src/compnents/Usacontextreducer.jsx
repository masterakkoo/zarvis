import React, { useState, createContext, useContext, useReducer } from 'react'


const cartStateContext = createContext();
const cartDipatchContext = createContext();
const product1 = createContext();
const setproduct1 = createContext();
const add1 = createContext();
const setadd1 = createContext();


// const reducer = (state, action) => {

//     switch (action.type) {
//         case "ADD":
//             return [...state, { id: action.id, name: action.name, dicount: action.discount, price: action.price, image: action.image }]
//         default:
//             console.log("some error")
//     }
// }

function Usacontextreducer({ children }) {


    // const [state, dipatch] = useReducer(reducer, []);
    const [product, setProduct] = useState({ email: localStorage.getItem("email"), name: "", model_id: '', model_name: "", price: 0, image: "" })
    const [add, setadd] = useState({ address: "", state: "", city: "", no: "", ano: "" });
    console.log(product)
    return (


        <add1.Provider value={add}>
            <setadd1.Provider value={setadd}>
                {children}
            </setadd1.Provider>
        </add1.Provider>

    )
}

export default Usacontextreducer;
export const useCart = () => useContext(cartStateContext)
export const useDipatchCart = () => useContext(cartDipatchContext)
export const product = () => useContext(product1)
export const setproduct = () => useContext(setproduct1)
export const add = () => useContext(add1)
export const setadd = () => useContext(setadd1)