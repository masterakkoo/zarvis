import React from 'react'
import Card from './Card'
import Slider from './Slider';
import Footer from './Footer';
function AudioProducts(p) {
    const a = ">";
    window.scrollTo(0, 0);
    return (
        <>

            <h1 className='head-cat'>Audio products {a} </h1>

            <div className='cards'>
                {
                    (p.items != []) ? p.items.map((val) => {
                        if (val.category === "Audio Products")
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
            <Footer />
        </>
    )
}

export default AudioProducts;