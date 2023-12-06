import React, { useState } from 'react'
import './index.scss'

const HomeCard = () => {
    const [product, setProduct] = useState([])

    fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setProduct(data))
    return (
        <div className='home_container'>
            <div className='homeCard'>
                {product.map((x) =>
                    <ul>
                        <li>
                            <img src={x.image} alt="" />
                            <div className='cardHover'>
                                <i class="fa-regular fa-eye"></i>
                                <i class="fa-regular fa-heart"></i>
                                <i class="fa-solid fa-cart-shopping"></i>
                            </div>
                        </li>
                        <li className='title'>{x.title}</li>
                        <li className='price'>${x.price} <span> $35.00</span></li>
                    </ul>
                )}
            </div>
        </div>
    )
}

export default HomeCard