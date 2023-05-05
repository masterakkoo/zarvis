import React from 'react'
import Card from './Card'
import Slider from './Slider';
import Footer from './Footer';
function Smartwatch(p) {
    window.scrollTo(0, 0);
    const arow = ">";
    return (
        <>
            <h1 className='head-cat'>Smart Watches {arow}</h1>
            <div className='cards'>
                {
                    (p.items != []) ? p.items.map((val) => {
                        if (val.category === "Smart Watch")
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

export default Smartwatch