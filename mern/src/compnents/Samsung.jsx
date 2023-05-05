import React, { useState, useEffect } from 'react'
import Card from './Card'
import Slider from './Slider';
function Samsung(p) {
    // console.log(p.items)
    const arow = ">";
    window.scrollTo(0, 0);
    return (
        <>

            <h1 className='head-cat'>Samsung Smartphones  {arow}</h1>
            <div className='cards'>
                {
                    (p.items != []) ? p.items.map((val) => {
                        if (val.category === "Mobile")
                            return (
                                <Card
                                    id={val._id}
                                    company={val.company}
                                    name={val.model_name}
                                    images={val.images}
                                    options={val.options}
                                    price={val.price}
                                    discount={val.discount}
                                    availibilty={val.availibilty}
                                    discription={val.discription}
                                    cartbtn={true}
                                />
                            );
                    }) : <p>asdf</p>

                }
            </div>

        </>
    )
}

export default Samsung