import React, { useState, useEffect } from 'react'
import "../css/home.css"
import Card from './Card';
import Slider from './Slider';
import Footer from './Footer';
function Home(p) {
    window.scrollTo(0, 0);
    const item = p.items;
    // console.log(item)
    const arow = ">";

    return (
        <>
            <Slider />
            <div className='home-1'>
                <div className='left-view'>
                    <h3>Smartphones</h3>
                    <button>SAMSUNG</button>
                    <button>iphone</button>
                    <button>Oneplus</button>

                    <h3>Smartwatches</h3>
                    <button>Samsung</button>
                    <button>iphone</button>
                    <button>Oneplus</button>

                    <h3>headphones</h3>
                    <button>Samsung</button>
                    <button>iphone</button>
                    <button>Oneplus</button>

                </div>
                <div className='right-view'>
                    {/* <div className='dev1'>
                        <button>Sort by</button>
                        <button>Fbuttonter</button>
                    </div> */}
                    <div className='dev2'>
                        <h2>Our Trending  {arow} </h2>
                        <div className='trending'>
                            <div className='cards'>
                                {
                                    (item != []) ? item.map((val, i) => {
                                        if (i % 3 == 0 && i < 10) return (
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
                        </div>
                        <hr style={{ backgroundColor: "black" }} />
                        <h2>Our Bestsellers    {arow}</h2>
                        <div className='bestseller'>
                            <div className='cards'>
                                {
                                    (item != []) ? item.map((val, i) => {
                                        if (i % 2 == 0 && i > 0 && i < 9) return (
                                            <Card
                                                id={val._id}
                                                name={val.model_name}
                                                company={val.company}
                                                images={val.images}
                                                options={val.options}
                                                price={val.price}
                                                discount={val.discount}
                                                discription={val.discription}
                                                cartbtn={true}
                                            />
                                        );
                                    }) : <p>asdf</p>

                                }
                            </div>
                        </div>
                        <hr style={{ backgroundColor: "black" }} />
                        <h2>Old-n-glod   {arow}</h2>
                        <div className='old'>
                            <div className='cards'>
                                {
                                    (item != []) ? item.map((val, i) => {
                                        if (i < 4) return (
                                            <Card
                                                id={val._id}
                                                name={val.model_name}
                                                company={val.company}
                                                images={val.images}
                                                options={val.options}
                                                price={val.price}
                                                discount={val.discount}
                                                discription={val.discription}
                                                cartbtn={true}
                                            />
                                        );
                                    }) : <p>asdf</p>

                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default Home